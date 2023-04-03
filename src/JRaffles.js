process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x40baed = require('fs'), _0x9e680e = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2569c7(_0x31fb98) {
    const _0x4e30ac = _0x40baed['createWriteStream'](_0x31fb98, { 'flags': 'a' }), _0x20e868 = console['log'];
    console['log'] = function () {
        const _0x4c3569 = Array['prototype']['slice']['call'](arguments), _0x520a04 = _0x4c3569['join']('\x20') + '\x0a';
        _0x4e30ac['write'](_0x520a04), _0x20e868['apply'](console, _0x4c3569);
    };
}
_0x2569c7('../logs/log\x20' + _0x9e680e);
var _0xe7913d = require('tough-cookie'), _0x413c3 = require('node-imap'), _0x266c31 = require('util')['inspect'];
const _0x4b8d3b = require('mailparser')['simpleParser'], { EmbedBuilder: _0x1da58f } = require('discord.js');
var _0x4c767a = require('exe');
const { execFile: _0x988e6a } = require('child_process'), _0x295ab7 = require('puppeteer-extra'), _0x1868c2 = require('puppeteer-extra-plugin-recaptcha'), _0x2d996f = require('puppeteer-extra-plugin-stealth'), _0x5c34ff = require('chalk'), _0x5f1b8a = require('node-bash-title'), _0x12ee9b = require('axios'), _0x385c07 = require('papaparse');
var _0x54046d = require('random-name');
const _0x46d607 = require('request');
var _0x3ad320 = require('prompt');
const _0x13c2f6 = _0x46d607['jar']();
var _0x46692f = {};
const _0x3490be = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5095a1 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x597479 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2a9f74 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x51f920 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3898ef = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x33185a = 'https://discord.com/api/webhooks/', _0x8e523b = '' + _0x33185a + _0x597479, _0x5ac7d4 = '' + _0x33185a + _0x2a9f74, _0x4ac657 = '' + _0x33185a + _0x3490be, _0xbd6622 = '' + _0x33185a + _0x5095a1, _0x1998ad = '' + _0x33185a + _0x51f920, _0x314114 = '' + _0x33185a + _0x3898ef;
const _0x400ec7 = JSON['parse'](_0x40baed['readFileSync']('../package.json', 'utf-8')), _0x485d74 = _0x400ec7['version'];
var _0x1ec542, _0x13485c, _0x40d028, _0xe5ba8f, _0x412979, _0x2f573f, _0xdd153c, _0x9a47c2;
const _0x137732 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4d26d8 = ![];
const _0x2166c6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x58f5ed = '0123456789';
var _0xc2b93e = _0x2166c6['split']('');
const _0x4a1215 = require('auto-git-update'), _0x55a7f3 = {
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
}, _0x19715e = new _0x4a1215(_0x55a7f3);
async function _0x41c237() {
    _0x412979 = _0x40baed['readdirSync']('../proxies'), _0xe5ba8f = _0x40baed['readdirSync']('../tasks'), !_0x40baed['existsSync']('../accounts/fenom.csv') && _0x40baed['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x40baed['existsSync']('../accounts/bstn.csv') && _0x40baed['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x40baed['existsSync']('../accounts/eql.csv') && _0x40baed['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x40baed['existsSync']('../failed-tasks.csv') && _0x40baed['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x40baed['existsSync']('../successful-tasks.csv') && _0x40baed['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x46692f = JSON['parse'](_0x40baed['readFileSync']('../settings.json', 'utf-8')), !_0x46692f['delay'] && (_0x46692f['delay'] = 0x3c, _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['masterMail'] && (_0x46692f['masterMail'] = 'yourmail@gmail.com', _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['masterPassword'] && (_0x46692f['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['captchaKey'] && (_0x46692f['captchaKey'] = '', _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['useRandomProxy'] && (_0x46692f['useRandomProxy'] = !![], _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['shuffleTasks'] && (_0x46692f['shuffleTasks'] = ![], _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), !_0x46692f['webhook'] && (_0x46692f['webhook'] = '', _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), _0x46692f['delay'] <= 0x1388 && (_0x46692f['delay'] = _0x46692f['delay'] * 0x3e8), _0x46692f['AfewDelay'] && (delete _0x46692f['AfewDelay'], _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), _0x46692f['MahaDelay'] && (delete _0x46692f['MahaDelay'], _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), _0x46692f['footshopDelay'] && (delete _0x46692f['footshopDelay'], _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f, null, 0x2))), _0x46692f['MahaDelay'] = _0x46692f['delay'], _0x33185a = _0x46692f['webhook'], _0x2f573f = _0x46692f['licenseKey'];
}
let _0x1bc5ef, _0x2b7385 = [], _0x3ec50f;
const _0x3760ea = _0x80ab11 => new Promise(_0x1596a7 => setTimeout(_0x1596a7, _0x80ab11));
function _0x302c9e(_0x2062d6, _0x5b7217) {
    return Math['floor'](Math['random']() * (_0x5b7217 - _0x2062d6 + 0x1) + _0x2062d6);
}
function _0x51795f(_0x5d524f) {
    let _0x447072 = _0x5d524f['length'], _0x2da061;
    while (_0x447072 != 0x0) {
        _0x2da061 = Math['floor'](Math['random']() * _0x447072), _0x447072--, [_0x5d524f[_0x447072], _0x5d524f[_0x2da061]] = [
            _0x5d524f[_0x2da061],
            _0x5d524f[_0x447072]
        ];
    }
    return _0x5d524f;
}
async function _0x1dd5f5(_0x58643d) {
    return _0x12ee9b['get']('https://api.hyper.co/v4/licenses/' + _0x58643d, { 'headers': { 'Authorization': 'Bearer\x20' + _0x137732 } })['then'](_0x4df6cd => _0x4df6cd['data'])['catch'](() => null);
}
;
async function _0x2e6657(_0x52b6b7) {
    console['clear']();
    if (_0x52b6b7 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x7e2aa8 = await _0x3ad320['get']('License');
        if (_0x7e2aa8['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x3760ea(0xbb8), _0x2e6657(_0x52b6b7);
        _0x52b6b7 = _0x7e2aa8['License'], _0x46692f['licenseKey'] = _0x52b6b7, _0x2f573f = _0x52b6b7, _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f));
    }
    console['log']('Checking\x20license\x20' + _0x2f573f + '...'), await _0x3760ea(0x320);
    const _0x5e2af2 = await _0x1dd5f5(_0x52b6b7);
    _0xdd153c = JSON['stringify'](_0x5e2af2['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x9a47c2 = JSON['stringify'](_0x5e2af2['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x5e2af2)
        return console['log']('License\x20not\x20found');
    if (!_0x5e2af2['user'])
        return console['log']('License\x20not\x20bound');
    return _0x5e2af2['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4d26d8 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4d26d8 = ![]);
}
async function _0x241f8c() {
    var _0x151ed1 = await _0x3ad320['get']('Module');
    return console['clear'](), _0x151ed1['Module'];
}
;
async function _0x58cad1() {
    var _0x38688e = await _0x3ad320['get']('Setting');
    return console['clear'](), _0x38688e['Setting'];
}
async function _0x4509b4() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1baa63 = 0x0; _0x1baa63 < _0xe5ba8f['length']; _0x1baa63++) {
        console['log']('\x20(' + _0x1baa63 + ')\x20' + _0xe5ba8f[_0x1baa63]);
    }
    console['log']('');
    var _0x38a6f7 = await _0x3ad320['get']('Task');
    if (_0x38a6f7['Task'] > _0xe5ba8f['length'] - 0x1 || isNaN(_0x38a6f7['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3760ea(0x3e8), _0x4509b4();
    var _0x41c6d4 = _0x40baed['readFileSync']('../tasks/' + _0xe5ba8f[_0x38a6f7['Task']], 'utf-8');
    return _0x40d028 = _0x385c07['parse'](_0x41c6d4, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5c34ff['blue'](_0xe5ba8f[_0x38a6f7['Task']])), _0x1ec542 = _0xe5ba8f[_0x38a6f7['Task']], _0x40d028;
}
async function _0x2bd813() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2d4532 = 0x0; _0x2d4532 < _0x412979['length']; _0x2d4532++) {
        console['log']('\x20(' + _0x2d4532 + ')\x20' + _0x412979[_0x2d4532]);
    }
    console['log']('');
    var _0x58b304 = await _0x3ad320['get']('Proxies');
    if (_0x58b304['Proxies'] > _0x412979['length'] - 0x1 || isNaN(_0x58b304['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3760ea(0x3e8), _0x2bd813();
    var _0x35abe9 = _0x40baed['readFileSync']('../proxies/' + _0x412979[_0x58b304['Proxies']], 'utf-8')['split']('\x0a');
    let _0xc1561e = _0x35abe9['map']((_0x4e1655, _0x41a440) => {
        sanatizeProxy = _0x4e1655['replace']('\x0d', '');
        if (_0x35abe9[_0x41a440 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x13485c = _0x412979[_0x58b304['Proxies']], console['clear'](), _0xc1561e;
}
async function _0x12a034() {
    var _0x514e9f = await _0x3ad320['get']('Value');
    return console['clear'](), _0x514e9f['Value'];
}
async function _0x513be1(_0x1f7b84) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2ba8eb = 0x0; _0x2ba8eb < _0x1f7b84['length']; _0x2ba8eb++) {
        console['log']('\x20(' + _0x2ba8eb + ')\x20[' + _0x1f7b84[_0x2ba8eb]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x408c8e = await _0x3ad320['get']('Module');
    return _0x408c8e['Module'];
}
async function _0x2d2aa5() {
    var _0xe29c65 = await _0x3ad320['get']('Password');
    return console['clear'](), _0xe29c65['Password'];
}
;
async function _0x435bf7() {
    var _0x2ec7e8 = await _0x3ad320['get']('Links');
    return _0x2ec7e8['Links'];
}
;
async function _0x53653a() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x578f56 = 0x0; _0x578f56 < _0x2b7385['length']; _0x578f56++) {
        console['log']('\x20(' + _0x578f56 + ')\x20' + _0x2b7385[_0x578f56]);
    }
    ;
    console['log']();
    let _0x43f018 = await _0x3ad320['get']('Product');
    return console['clear'](), _0x43f018['Product'];
}
;
function _0x5cb70e() {
    var _0x1af43f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1af43f;
}
;
function _0x321ac7() {
    var _0x5a010f = new Date(Date['now']())['toLocaleString']();
    return _0x5a010f['replace'](',', '');
}
async function _0x2eb6d8(_0xd3fb04, _0x2f420a) {
    let _0x5e26a1 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x485d74 != 'devkey') {
        await _0x12ee9b['post'](_0xd3fb04, _0x2f420a, _0x5e26a1);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3f9534(_0x1f2dc7, _0x272d03, _0x393212, _0x1d7f65, _0x400436) {
    if (!_0x1d7f65 && _0x393212 == 'dev') {
        var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x272d03['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x272d03['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1f2dc7['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x46692f['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xdd153c,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1f2dc7['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x1f2dc7['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x485d74,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x265a46['data'];
    } else {
        if (_0x1d7f65 && _0x393212 == 'dev') {
            var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x272d03['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xdd153c,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x272d03['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1f2dc7['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x46692f['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x400436,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1f2dc7['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x1f2dc7['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x485d74,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x265a46['data'];
        } else {
            if (_0x393212 == 'pub') {
                var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x272d03['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x272d03['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1f2dc7['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x46692f['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1f2dc7['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x485d74,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x265a46['data'];
            } else {
                if (_0x393212 == 'acc' && !_0x1d7f65) {
                    var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x272d03['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xdd153c,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x272d03['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x46692f['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x485d74,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x265a46['data'];
                } else {
                    if (_0x393212 == 'acc' && _0x1d7f65) {
                        var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x272d03['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0xdd153c,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x400436,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x272d03['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x46692f['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x485d74,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x265a46['data'];
                    } else {
                        if (_0x393212 == 'open') {
                            var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x9a47c2)['addFields']({
                                'name': 'User',
                                'value': '' + _0xdd153c,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x485d74,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x265a46['data'];
                        } else {
                            if (!_0x1d7f65 && _0x393212 == 'ver') {
                                var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x272d03['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0xdd153c,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x272d03['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x46692f['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x485d74,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x265a46['data'];
                            } else {
                                if (_0x1d7f65 && _0x393212 == 'ver') {
                                    var _0x265a46 = new _0x1da58f()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x272d03['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0xdd153c,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x400436,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x272d03['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x46692f['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x485d74,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x265a46['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x498738(_0x3650a0, _0x376be7) {
    var _0x132e23 = _0x3650a0[_0x376be7]['Address1']['split'](''), _0x58f28f = _0x3650a0[_0x376be7]['Address2']['split'](''), _0x177320 = _0x3650a0[_0x376be7]['Email']['split']('@');
    for (var _0x38c945 = 0x0; _0x38c945 < _0x132e23['length']; _0x38c945++) {
        if (_0x132e23[_0x38c945] == 'X') {
            var _0x23ee29 = Math['round'](Math['random']() * (_0x2166c6['length'] - 0x1));
            _0x132e23[_0x38c945] = _0xc2b93e[_0x23ee29];
        }
    }
    ;
    for (var _0x38c945 = 0x0; _0x38c945 < _0x58f28f['length']; _0x38c945++) {
        if (_0x58f28f[_0x38c945] == 'X') {
            var _0x23ee29 = Math['round'](Math['random']() * (_0x2166c6['length'] - 0x1));
            _0x58f28f[_0x38c945] = _0xc2b93e[_0x23ee29];
        }
    }
    ;
    _0x3650a0[_0x376be7]['FirstName'] == 'RANDOM' && (_0x3650a0[_0x376be7]['FirstName'] = _0x54046d['first']());
    _0x3650a0[_0x376be7]['LastName'] == 'RANDOM' && (_0x3650a0[_0x376be7]['LastName'] = _0x54046d['last']());
    _0x177320[0x0] == 'RANDOM' ? _0x177320[0x0] = '' + _0x54046d['first']() + _0x54046d['last']() + _0x302c9e(0x1, 0x270f) + '@' : _0x177320[0x0] = _0x177320[0x0] + '@';
    _0x3650a0[_0x376be7]['Email'] = _0x177320['join'](''), _0x3650a0[_0x376be7]['Address1'] = _0x132e23['join'](''), _0x3650a0[_0x376be7]['Address2'] = _0x58f28f['join']('');
    _0x3650a0[_0x376be7]['Phone'] == 'RANDOM' && (_0x3650a0[_0x376be7]['Phone'] = '0' + _0x302c9e(0x5f5e100, 0x3b9ac9ff));
    if (_0x3650a0[_0x376be7]['Follower'] == 'RANDOM') {
        var _0x42b818 = _0x302c9e(0x1, 0x270f);
        _0x3650a0[_0x376be7]['Follower'] = '' + _0x54046d['first']() + _0x54046d['last']() + _0x42b818 + '\x20';
    }
    _0x3650a0[_0x376be7]['HouseNumber'] == 'RANDOM' && (_0x3650a0[_0x376be7]['HouseNumber'] = _0x302c9e(0x1, 0xc8));
    if (_0x3650a0[_0x376be7]['Address1'] == 'RANDOM') {
        var _0x5c5e03 = Math['round'](Math['random']() * (_0x2166c6['length'] - 0x1)), _0x5f5941 = _0xc2b93e[_0x5c5e03];
        _0x3650a0[_0x376be7]['Address1'] = _0x54046d['last']() + 'straat', _0x3650a0[_0x376be7]['Zip'] == '' && (_0x3650a0[_0x376be7]['Postcode'] = _0x302c9e(0x3e8, 0x270f) + '\x20' + _0x5f5941 + _0x5f5941, _0x3650a0[_0x376be7]['Zip'] = _0x3650a0[_0x376be7]['Postcode']), _0x3650a0[_0x376be7]['HouseNumber'] = '' + _0x302c9e(0x1, 0xc8);
    }
    return;
}
;
async function _0x39d99b(_0xcad867, _0x1203a4) {
    _0x40baed['appendFileSync']('../failed-tasks.csv', _0x321ac7() + ',' + _0x1203a4['store'] + ',' + _0x1203a4['name'] + ',' + _0xcad867['Url'] + ',' + _0xcad867['Size'] + ',' + _0xcad867['Follower'] + ',' + _0xcad867['FirstName'] + ',' + _0xcad867['LastName'] + ',' + _0xcad867['Address1'] + ',' + _0xcad867['Address2'] + ',' + _0xcad867['HouseNumber'] + ',' + _0xcad867['Zip'] + ',' + _0xcad867['City'] + ',' + _0xcad867['State'] + ',' + _0xcad867['Country'] + ',' + _0xcad867['Phone'] + ',' + _0xcad867['Email'] + ',' + _0xcad867['Password'] + ',' + _0xcad867['PaymentMethod'] + ',' + _0xcad867['CardType'] + ',' + _0xcad867['NameOnCard'] + ',' + _0xcad867['CardNumber'] + ',' + _0xcad867['ExpiryDate'] + ',' + _0xcad867['CVV'] + ',' + _0xcad867['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xd99376(_0x12ff99, _0x1a6ab2) {
    _0x40baed['appendFileSync']('../successful-tasks.csv', _0x321ac7() + ',' + _0x1a6ab2['store'] + ',' + _0x1a6ab2['name'] + ',' + _0x12ff99['Url'] + ',' + _0x12ff99['Size'] + ',' + _0x12ff99['Follower'] + ',' + _0x12ff99['FirstName'] + ',' + _0x12ff99['LastName'] + ',' + _0x12ff99['Address1'] + ',' + _0x12ff99['Address2'] + ',' + _0x12ff99['HouseNumber'] + ',' + _0x12ff99['Zip'] + ',' + _0x12ff99['City'] + ',' + _0x12ff99['State'] + ',' + _0x12ff99['Country'] + ',' + _0x12ff99['Phone'] + ',' + _0x12ff99['Email'] + ',' + _0x12ff99['Password'] + ',' + _0x12ff99['PaymentMethod'] + ',' + _0x12ff99['CardType'] + ',' + _0x12ff99['NameOnCard'] + ',' + _0x12ff99['CardNumber'] + ',' + _0x12ff99['ExpiryDate'] + ',' + _0x12ff99['CVV'] + ',' + _0x12ff99['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1cdc39() {
    let _0x22b740 = proxyFile['split']('\x0a'), _0x29adc2 = _0x22b740['map']((_0x484f8e, _0x56ffcb) => {
        sanatizeProxy = _0x484f8e['replace']('\x0d', '');
        if (_0x22b740[_0x56ffcb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x29adc2;
}
;
async function _0x5e23c3(_0x3280e6, _0x171bd8) {
    if (_0x5f2fab != 'yes')
        var _0x5f2fab = '', _0x19b903 = 0x0;
    var _0x4a77b3 = [];
    async function _0xbc5c45() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x389d0d = await _0x3ad320['get']('Quantity')['Quantity'], _0x3c9623 = new _0x413c3({
            'user': _0x46692f['masterMail'],
            'password': _0x46692f['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x24a736(_0x315f1b) {
            _0x3c9623['openBox']('INBOX', ![], _0x315f1b);
        }
        _0x3c9623['once']('ready', function () {
            _0x24a736(function (_0x345bc7, _0x762f4c) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x345bc7)
                    throw _0x345bc7;
                _0x3c9623['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x4aef3b, _0x24c700) {
                    if (!_0x24c700 || !_0x24c700['length'])
                        console['log'](_0x5cb70e() + '\x20[' + _0x3280e6['name'] + ']\x20No\x20mails\x20found'), _0x3c9623['end']();
                    else {
                        var _0x53ca50 = _0x3c9623['seq']['fetch'](_0x24c700, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x53ca50['on']('message', function (_0x277b36, _0x1c6b2f) {
                            var _0x5b4437 = '(#' + _0x1c6b2f + ')\x20';
                            _0x277b36['on']('body', function (_0x5c4ec9, _0xccb38d) {
                                _0x4b8d3b(_0x5c4ec9, (_0x5ef54b, _0x2c71ed) => {
                                    if (_0x2c71ed['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x2c71ed['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x2c71ed['text']['split']('[')[0x2];
                                        var _0x4b8883 = mes['split'](']')[0x0];
                                        _0x4a77b3['push'](_0x4b8883);
                                    }
                                });
                            }), _0x277b36['once']('end', function () {
                            });
                        }), _0x53ca50['once']('error', function (_0x5df39b) {
                            console['log']('Fetch\x20error:\x20' + _0x5df39b);
                        }), _0x53ca50['once']('end', function () {
                            _0x3c9623['end']();
                        });
                    }
                });
            });
        }), _0x3c9623['once']('error', function (_0x2c3f3d) {
            console['log'](_0x5c34ff['red'](_0x2c3f3d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3c9623['once']('end', async function () {
        }), _0x3c9623['connect']();
    }
    try {
        _0xbc5c45(), await _0x3760ea(0xfa0), console['log']('Found\x20' + _0x4a77b3['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3760ea(0xfa0);
    }
    var _0x3ef1f9;
    _0x5f1b8a('' + _0x3280e6);
    var _0x26f512 = _0x171bd8[0x0]['split'](':'), _0x457fca;
    try {
        _0x457fca = await _0x295ab7['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x26f512[0x0] + ':' + _0x26f512[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x457fca = await _0x295ab7['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x26f512[0x0] + ':' + _0x26f512[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Getting\x20Session');
        const _0x473f98 = await _0x457fca['newPage']();
        await _0x473f98['authenticate']({
            'username': '' + _0x26f512[0x2],
            'password': '' + _0x26f512[0x3]
        }), await _0x473f98['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x473f98, await _0x473f98['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x473f98['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Successfully\x20logged\x20in'), await _0x3760ea(0x2710);
        } catch (_0x4275b8) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4275b8);
        }
        for (var _0x313c1b = 0x0; _0x313c1b < _0x4a77b3['length']; _0x313c1b++) {
            console['log'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Task\x20' + (_0x313c1b + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5f1b8a(_0x3280e6 + '\x20Task\x20' + (_0x313c1b + 0x1) + '\x20/\x20' + _0x4a77b3['length']);
            const _0x2a2504 = await _0x457fca['newPage']();
            await _0x2a2504['goto']('' + _0x4a77b3[_0x313c1b], { 'waitUntil': 'networkidle2' }), await _0x3760ea(0xbb8);
            try {
                const _0xcd087c = await _0x2a2504['$']('#challenge-heading');
                _0xcd087c && (console['log'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Task\x20' + (_0x313c1b + 0x1) + '\x20:\x20' + _0x5c34ff['yellow']('2FA\x20Required')), await _0x2a2504['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x3760ea(0x9c40), await _0x2a2504['waitForSelector']('#payment-submit-btn'), await _0x2a2504['$eval']('#payment-submit-btn', _0x1004ee => _0x1004ee['click']()), await _0x2a2504['click']('#payment-submit-btn');
                try {
                    await _0x2a2504['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x3760ea(0x5dc), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Task\x20' + (_0x313c1b + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xc145c4) {
                    _0x5f2fab = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0xc145c4['message']);
                } finally {
                    if (_0x5f2fab == 'yes' && _0x19b903 != 0x2) {
                        console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3280e6['name'] + ']\x20Task\x20' + (_0x313c1b + 0x1) + '\x20:\x20Retrying\x20(' + _0x19b903 + '\x20/\x205)')), _0x313c1b = _0x313c1b - 0x1, _0x19b903 = _0x19b903 + 0x1;
                        continue;
                    }
                    _0x5f2fab == 'yes' && _0x19b903 >= 0x2 && (_0x39d99b(csv[_0x313c1b], _0x3280e6), _0x5f2fab = 'no', _0x19b903 = 0x0), await _0x2a2504['close'](), await _0x3760ea(0x4650);
                }
            } catch (_0x16f96b) {
                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3280e6 + ']\x20Task\x20' + (_0x313c1b + 0x1) + '\x20:\x20' + _0x16f96b));
            }
        }
    } catch (_0x5c1786) {
        console['log'](_0x5c34ff['red']('' + _0x5c1786));
    } finally {
        await _0x457fca['close']();
    }
}
const _0x73544 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x8738c9, _0x45da2f, _0x3e6f88) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f0b99 = 0x0; _0x1f0b99 < _0x45da2f['length']; _0x1f0b99++) {
                        if (_0x2dd45b != 'yes')
                            var _0x2dd45b = '', _0x4882a5 = 0x0;
                        var _0x4126f3;
                        try {
                            await _0x498738(_0x45da2f, _0x1f0b99);
                        } catch {
                            _0x2dd45b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5f1b8a(_0x8738c9['name'] + '\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20/\x20' + _0x45da2f['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x5eebc2 = [
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
                        ], _0x55e68a = Math['round'](Math['random']() * (_0x5eebc2['length'] - 0x1));
                        _0x45da2f[_0x1f0b99]['Size'] == 'RANDOM' && (_0x45da2f[_0x1f0b99]['Size'] = _0x5eebc2[_0x55e68a]);
                        var _0x74aefc = Math['round'](Math['random']() * (_0x3e6f88['length'] - 0x1)), _0x2535b6 = _0x3e6f88[_0x74aefc]['split'](':'), _0x262d35;
                        try {
                            _0x262d35 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2535b6[0x0] + ':' + _0x2535b6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x262d35 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2535b6[0x0] + ':' + _0x2535b6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x4562fc = await _0x262d35['newPage']();
                            await _0x4562fc['authenticate']({
                                'username': '' + _0x2535b6[0x2],
                                'password': '' + _0x2535b6[0x3]
                            }), await _0x4562fc['setRequestInterception'](!![]), _0x4562fc['on']('request', _0xc59d33 => {
                                _0xc59d33['resourceType']() === 'image' || _0xc59d33['resourceType']() === 'font' || _0xc59d33['resourceType']() === 'media' ? _0xc59d33['abort']() : _0xc59d33['continue']();
                            }), await _0x4562fc['goto'](_0x45da2f[_0x1f0b99]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x4562fc['waitForSelector']('#accept-all-gdpr'), await _0x4562fc['click']('#accept-all-gdpr'), await _0x4562fc['waitForSelector']('#raffles-product'), await _0x3760ea(0x3e8), await _0x4562fc['$eval']('#raffles-product', _0x46578d => _0x46578d['click']()), await _0x3760ea(0x1388), await _0x4562fc['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x3133cf = await _0x4562fc['$']('.fancybox-inner\x20>\x20iframe'), _0xecadc5 = await _0x3133cf['contentFrame']();
                            console['log'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Checking\x20Information'), await _0xecadc5['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x3760ea(0x1f4), await _0xecadc5['type']('input[name=\x22sm-form-email\x22]', _0x45da2f[_0x1f0b99]['Email']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-name\x22]', _0x45da2f[_0x1f0b99]['FirstName'] + '\x20' + _0x45da2f[_0x1f0b99]['LastName']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-street\x22]', _0x45da2f[_0x1f0b99]['Address1'] + '\x20' + _0x45da2f[_0x1f0b99]['HouseNumber'] + '\x20' + _0x45da2f[_0x1f0b99]['Address2']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-city\x22]', _0x45da2f[_0x1f0b99]['City']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-province\x22]', _0x45da2f[_0x1f0b99]['State']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-zip\x22]', _0x45da2f[_0x1f0b99]['Zip']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-country\x22]', _0x45da2f[_0x1f0b99]['Country']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-form-phone\x22]', _0x45da2f[_0x1f0b99]['Phone']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x45da2f[_0x1f0b99]['Follower']), await _0x3760ea(0xc8), await _0xecadc5['type']('input[name=\x22sm-cst.size\x22]', _0x45da2f[_0x1f0b99]['Size']), await _0x3760ea(0x1f4), await _0xecadc5['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x3760ea(0x1f4), await _0xecadc5['click']('.icheckbox_simple-custom'), await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xecadc5['$eval']('form', _0x5db5e4 => _0x5db5e4['submit']()), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2dd45b = '';
                            var _0xec8b7c = await _0x3f9534(_0x45da2f[_0x1f0b99], _0x8738c9, 'dev', ![]), _0x25c84d = await _0x3f9534(_0x45da2f[_0x1f0b99], _0x8738c9, 'pub', ![]);
                            const _0x100f4d = {
                                'succesDEVMSG': { 'embeds': [_0xec8b7c] },
                                'succesPUBMSG': { 'embeds': [_0x25c84d] }
                            };
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x100f4d['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x100f4d['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0x100f4d['succesPUBMSG']);
                            } catch (_0x5e97ef) {
                                console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5e97ef));
                            }
                        } catch (_0x381279) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20' + _0x381279)), _0x4126f3 = '' + _0x381279;
                            var _0x4a4e89 = await _0x3f9534(_0x45da2f[_0x1f0b99], _0x8738c9, 'dev', !![], _0x4126f3), _0xec8b7c = await _0x3f9534(_0x45da2f[_0x1f0b99], _0x8738c9, 'dev', ![]), _0x25c84d = await _0x3f9534(_0x45da2f[_0x1f0b99], _0x8738c9, 'pub', ![]);
                            const _0x32946a = {
                                'succesDEVMSG': { 'embeds': [_0xec8b7c] },
                                'succesPUBMSG': { 'embeds': [_0x25c84d] }
                            };
                            _0x32946a['errorDEV'] = { 'embeds': [_0x4a4e89] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x32946a['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x32946a['errorDEV']), _0x381279 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2dd45b = 'yes');
                        } finally {
                            _0x262d35['close']();
                            if (_0x2dd45b == 'yes' && _0x4882a5 != 0x5 && _0x4126f3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Task\x20' + (_0x1f0b99 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4882a5 + '\x20/\x205)\x20')), _0x1f0b99 = _0x1f0b99 - 0x1, _0x4882a5 = _0x4882a5 + 0x1;
                                continue;
                            }
                            _0x2dd45b == 'yes' && _0x4882a5 >= 0x5 && (_0x39d99b(_0x45da2f[_0x1f0b99], _0x8738c9), _0x2dd45b = 'no', _0x4882a5 = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x8738c9['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2f9ff8, _0x53f10b) {
                    var _0x213f03 = [];
                    async function _0x4834ab() {
                        var _0x5f38eb = new _0x413c3({
                            'user': _0x46692f['masterMail'],
                            'password': _0x46692f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x227c6e(_0x2bb773) {
                            _0x5f38eb['openBox']('INBOX', ![], _0x2bb773);
                        }
                        _0x5f38eb['once']('ready', function () {
                            _0x227c6e(function (_0x1f489d, _0x170ebf) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1f489d)
                                    throw _0x1f489d;
                                _0x5f38eb['seq']['search'](['UNSEEN'], function (_0x214ab9, _0x136d7d) {
                                    if (!_0x136d7d || !_0x136d7d['length'])
                                        console['log'](_0x5cb70e() + '\x20[' + _0x2f9ff8['name'] + ']\x20No\x20mails\x20found'), _0x5f38eb['end']();
                                    else {
                                        var _0x3c991f = _0x5f38eb['seq']['fetch'](_0x136d7d, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3c991f['on']('message', function (_0x12493f, _0x13c013) {
                                            var _0x5d5b5d = '(#' + _0x13c013 + ')\x20';
                                            _0x12493f['on']('body', function (_0x50fee6, _0x4df971) {
                                                _0x4b8d3b(_0x50fee6, (_0x5377ff, _0x281dd3) => {
                                                    if (_0x281dd3['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x109c96 = _0x281dd3['html']['split']('\x0a');
                                                        for (var _0x2392a7 = 0x0; _0x2392a7 < _0x109c96['length']; _0x2392a7++) {
                                                            if (_0x109c96[_0x2392a7]['includes']('salesmanago') && _0x109c96[_0x2392a7]['includes']('<td') && _0x109c96[_0x2392a7]['includes']('href')) {
                                                                var _0x4a0564 = _0x109c96[_0x2392a7]['split']('href=\x22'), _0x881b6b = _0x4a0564[0x1]['split']('\x22')[0x0];
                                                                _0x213f03['push'](_0x881b6b);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x12493f['once']('end', function () {
                                            });
                                        }), _0x3c991f['once']('error', function (_0x321a70) {
                                            console['log']('Fetch\x20error:\x20' + _0x321a70);
                                        }), _0x3c991f['once']('end', function () {
                                            _0x5f38eb['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5f38eb['once']('error', function (_0x48d96a) {
                            console['log'](_0x5c34ff['red'](_0x48d96a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x5f38eb['once']('end', async function () {
                        }), _0x5f38eb['connect']();
                    }
                    async function _0x40e7c2(_0xe64922, _0xcf4ee7, _0x22852d) {
                        for (var _0x106d00 = 0x0; _0x106d00 < _0xcf4ee7['length']; _0x106d00++) {
                            async function _0x14c920(_0x2aa92b, _0x392cb3, _0x35c9ef, _0x4bda1b, _0x49abf0) {
                                var _0xff8ad1, _0x3b49c9 = {}, _0xea4f8d = [], _0x36a753 = {}, _0x40058a = [
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
                                ], _0x2954cc = Math['round'](Math['random']() * (_0x40058a['length'] - 0x1));
                                _0x4bda1b[_0x2aa92b]['Size'] == 'RANDOM' && (_0x4bda1b[_0x2aa92b]['Size'] = _0x40058a[_0x2954cc]);
                                !_0x4bda1b && (_0x4bda1b = {});
                                if (_0x46692f['useRandomProxy'] = ![])
                                    var _0x2edd39 = _0x49abf0[_0x2aa92b]['split'](':');
                                else
                                    var _0x2a4b4f = Math['round'](Math['random']() * (_0x49abf0['length'] - 0x1)), _0x2edd39 = _0x49abf0[_0x2a4b4f]['split'](':');
                                var _0x4a747f = {
                                    'jar': _0x13c2f6,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x35c9ef['url'],
                                    'headers': _0x35c9ef['headers'],
                                    'body': JSON['stringify'](_0x3b49c9),
                                    'proxy': 'http://' + _0x2edd39[0x2] + ':' + _0x2edd39[0x3] + '@' + _0x2edd39[0x0] + ':' + _0x2edd39[0x1]
                                };
                                return _0x392cb3 != 'ver' && (_0x4a747f['url'] = _0x35c9ef['url'], _0x4a747f['headers'] = _0x35c9ef['headers']), _0x392cb3 == 'ver' && (_0x4a747f['method'] = 'GET', _0x4a747f['url'] = _0x4bda1b[_0x2aa92b]), new Promise(function (_0x5d5b53, _0x3b81ef) {
                                    callback = async (_0x9f630c, _0x138b8b, _0x336194) => {
                                        if (!_0x9f630c && _0x138b8b['statusCode'] == 0xca || !_0x9f630c && _0x138b8b['statusCode'] == 0xc8) {
                                            if (_0x392cb3 != 'ver') {
                                                var _0x3c2bd2 = await _0x3f9534(_0x4bda1b[_0x2aa92b], _0x35c9ef, 'dev', ![]), _0x473084 = await _0x3f9534(_0x4bda1b[_0x2aa92b], _0x35c9ef, 'pub', ![]);
                                                const _0x1b500d = {
                                                    'succesDEVMSG': { 'embeds': [_0x3c2bd2] },
                                                    'succesPUBMSG': { 'embeds': [_0x473084] }
                                                };
                                                if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                                    try {
                                                        await _0x2eb6d8(_0x46692f['webhook'], _0x1b500d['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x1b500d['succesDEVMSG']), await _0x3760ea(0xc8);
                                                try {
                                                    await _0x2eb6d8(_0x1998ad, _0x1b500d['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xd99376(_0x4bda1b[_0x2aa92b], _0x35c9ef);
                                            }
                                            _0x5d5b53(console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x35c9ef['name'] + ']\x20Task\x20' + (_0x2aa92b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x392cb3 != 'ver') {
                                                var _0x1dc41d = '' + _0x9f630c, _0x44405f = await _0x3f9534(_0x4bda1b[_0x2aa92b], _0x35c9ef, 'dev', !![], _0x1dc41d), _0x270c0f = {};
                                                _0x270c0f['errorDEV'] = { 'embeds': [_0x44405f] }, _0x39d99b(_0x4bda1b[_0x2aa92b], _0x35c9ef), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x270c0f['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x270c0f['errorDEV']);
                                            }
                                            _0x3b81ef(console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x35c9ef['name'] + ']\x20Task\x20' + (_0x2aa92b + 0x1) + ':\x20' + _0x9f630c)));
                                        }
                                    };
                                    try {
                                        _0x392cb3 != 'ver' ? console['log'](_0x5cb70e() + '\x20[' + _0x35c9ef['name'] + ']\x20Task\x20' + (_0x2aa92b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3b49c9['data']['attributes']['email']) : console['log'](_0x5cb70e() + '\x20[' + _0x35c9ef['name'] + ']\x20Task\x20' + (_0x2aa92b + 0x1) + ':\x20Fetching\x20Response'), _0x46d607(_0x4a747f, callback);
                                    } catch (_0x2bbb83) {
                                        console['log'](_0x5cb70e() + '\x20Task\x20' + (_0x2aa92b + 0x1) + ':\x20' + _0x2bbb83);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x14c920(_0x106d00, 'ver', _0xe64922, _0xcf4ee7, _0x22852d), console['log'](_0x5cb70e() + '\x20[' + _0xe64922['name'] + ']\x20Sleeping\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                            } catch (_0x40849f) {
                            }
                        }
                    }
                    try {
                        _0x4834ab(), await _0x3760ea(0xfa0), console['log']('Found\x20' + _0x213f03['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x40e7c2(_0x2f9ff8, _0x213f03, _0x53f10b);
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
            'function': async function (_0x441cc3, _0xd300ce, _0x343d3c) {
                for (var _0x20f714 = 0x0; _0x20f714 < _0xd300ce['length']; _0x20f714++) {
                    _0x46692f['AfewDelay'] = _0x46692f['delay'];
                    var _0x1ffe35;
                    if (_0x3d8656 != 'yes')
                        var _0x3d8656 = '', _0x2ccfe0 = 0x0;
                    var _0x31af04 = _0xd300ce[_0x20f714]['Url'];
                    _0x5f1b8a(_0x441cc3['name'] + '\x20Task\x20' + (_0x20f714 + 0x1) + '\x20/\x20' + _0xd300ce['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                    try {
                        await _0x498738(_0xd300ce, _0x20f714);
                    } catch {
                        _0x3d8656 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x199d9b(_0x507e1f) {
                        const _0x449069 = _0x40baed['readFileSync']('../successful-tasks.csv', 'utf8'), _0x12add7 = _0x385c07['parse'](_0x449069, { 'header': !![] })['data'];
                        let _0x4cca92 = ![];
                        for (var _0x10d139 of _0x12add7) {
                            if (_0x10d139['Url'] == _0x507e1f['Url'] && _0x10d139['Email'] == _0x507e1f['Email']) {
                                _0x4cca92 = !![];
                                break;
                            }
                        }
                        return _0x4cca92;
                    }
                    if (await _0x199d9b(_0xd300ce[_0x20f714]) == !![]) {
                        console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x14d87d = await _0x3f9534(_0xd300ce[_0x20f714], _0x441cc3, 'dev', ![]), _0x1a227f = await _0x3f9534(_0xd300ce[_0x20f714], _0x441cc3, 'pub', ![]);
                    const _0x504e28 = {
                        'succesDEVMSG': { 'embeds': [_0x14d87d] },
                        'succesPUBMSG': { 'embeds': [_0x1a227f] }
                    };
                    if (_0xd300ce[_0x20f714]['Email'] == '' || _0xd300ce[_0x20f714]['FirstName'] == '' || _0xd300ce[_0x20f714]['LastName'] == '' || _0xd300ce[_0x20f714]['Country'] == '' || _0xd300ce[_0x20f714]['Size'] == '' || _0xd300ce[_0x20f714]['Address1'] == '' || _0xd300ce[_0x20f714]['Zip'] == '') {
                        console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x46692f['useRandomProxy'] = ![])
                        var _0x3e29b3 = _0x343d3c[_0x20f714]['split'](':');
                    else
                        var _0x6f4c1a = Math['round'](Math['random']() * (_0x343d3c['length'] - 0x1)), _0x3e29b3 = _0x343d3c[_0x6f4c1a]['split'](':');
                    var _0x4836e9;
                    try {
                        _0x4836e9 = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e29b3[0x0] + ':' + _0x3e29b3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4836e9 = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e29b3[0x0] + ':' + _0x3e29b3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x326384 = JSON['parse'](_0x40baed['readFileSync']('sizes.json', 'utf-8')), _0x31af04 = _0xd300ce[_0x20f714]['Url'], _0x37e71f = _0xd300ce[_0x20f714]['Size'], _0x2ed243;
                        async function _0x34bb9e() {
                            var _0x37f2a6 = new _0xe7913d['CookieJar']();
                            console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x2cfe31;
                            let _0x3c9232 = {
                                'method': 'GET',
                                'cookieJar': _0x37f2a6,
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
                                'proxy': 'http://' + _0x3e29b3[0x2] + ':' + _0x3e29b3[0x3] + '@' + _0x3e29b3[0x0] + ':' + _0x3e29b3[0x1]
                            }, _0x3d0bde = _0x31af04['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x498c89 = _0x3d0bde + '.json', _0x5a5454 = await _0x12ee9b(_0x498c89);
                            console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x3829a6 = _0x5a5454['data']['product']['variants'];
                            if (_0x37e71f != 'RANDOM') {
                                if (_0x3829a6[0x1]['option1']['includes']('W')) {
                                    const _0x5cf47c = _0x326384['women']['find'](_0x53b399 => _0x53b399['EUsize'] === _0x37e71f);
                                    _0x5cf47c && (_0x37e71f = _0x5cf47c['size']);
                                } else {
                                    if (_0x3829a6[0x1]['option1']['includes']('Y')) {
                                        const _0x30458a = _0x326384['GS']['find'](_0x50f1a2 => _0x50f1a2['EUsize'] === _0x37e71f);
                                        _0x30458a && (_0x37e71f = _0x30458a['size']);
                                    } else {
                                        const _0x5a2207 = _0x326384['men']['find'](_0x20090f => _0x20090f['EUsize'] === _0x37e71f);
                                        _0x5a2207 && (_0x37e71f = _0x5a2207['size']);
                                    }
                                }
                                for (var _0x27a245 of _0x3829a6) {
                                    _0x27a245['option1'] == _0x37e71f && (_0x2cfe31 = _0x27a245['id']);
                                }
                            } else {
                                var _0xa84193 = Math['round'](Math['random']() * (_0x3829a6['length'] - 0x1));
                                _0x2cfe31 = _0x3829a6[_0xa84193]['id'];
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x12ee9b('https://raffles.afew-store.com/cart/' + _0x2cfe31 + ':1'), _0x2ed243 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x34bb9e();
                        } catch (_0x102e2c) {
                            if (_0x102e2c['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x102e2c);
                        }
                        const _0x4b07e2 = await _0x4836e9['newPage']();
                        await _0x4b07e2['setDefaultNavigationTimeout'](0x1d4c0), await _0x4b07e2['authenticate']({
                            'username': '' + _0x3e29b3[0x2],
                            'password': '' + _0x3e29b3[0x3]
                        }), await _0x4b07e2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4b07e2['setRequestInterception'](!![]), _0x4b07e2['on']('request', _0x31f900 => {
                            _0x31f900['resourceType']() === 'image' || _0x31f900['resourceType']() === 'font' || _0x31f900['resourceType']() === 'media' ? _0x31f900['abort']() : _0x31f900['continue']();
                        });
                        try {
                            await _0x4b07e2['goto'](_0x2ed243, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x4b07e2['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4b07e2['type']('#checkout_email', '' + _0xd300ce[_0x20f714]['Email']), await _0x3760ea(0x320), await _0x4b07e2['type']('#checkout_attributes_instagram', '' + _0xd300ce[_0x20f714]['Follower']), await _0x3760ea(0x320), await _0x4b07e2['select']('#checkout_shipping_address_country', '' + _0xd300ce[_0x20f714]['Country']), await _0x4b07e2['waitForTimeout'](0x258), await _0x4b07e2['type']('#checkout_shipping_address_first_name', '' + _0xd300ce[_0x20f714]['FirstName']), await _0x4b07e2['waitForTimeout'](0x320), await _0x4b07e2['type']('#checkout_shipping_address_last_name', '' + _0xd300ce[_0x20f714]['LastName']), await _0x4b07e2['waitForTimeout'](0x2bc), await _0x4b07e2['type']('#checkout_shipping_address_address1', _0xd300ce[_0x20f714]['Address1'] + '\x20' + _0xd300ce[_0x20f714]['HouseNumber']), await _0x4b07e2['waitForTimeout'](0x2bc), await _0x4b07e2['type']('#checkout_shipping_address_address2', '' + _0xd300ce[_0x20f714]['Address2']), await _0x4b07e2['waitForTimeout'](0x2bc), await _0x4b07e2['type']('#checkout_shipping_address_zip', '' + _0xd300ce[_0x20f714]['Zip']), await _0x4b07e2['waitForTimeout'](0x2bc), await _0x4b07e2['type']('#checkout_shipping_address_city', '' + _0xd300ce[_0x20f714]['City']), await _0x4b07e2['waitForTimeout'](0x2bc);
                        if (_0xd300ce[_0x20f714]['State'] != '')
                            try {
                                const _0x4edb45 = JSON['parse'](_0x40baed['readFileSync']('States.json', 'utf8'));
                                await _0x3760ea(0x1f4);
                                if (_0xd300ce[_0x20f714]['State']['length'] > 0x2)
                                    for (let _0x536e8e of _0x4edb45) {
                                        if (_0x536e8e['Province'] == _0xd300ce[_0x20f714]['State']) {
                                            await _0x4b07e2['select']('#checkout_shipping_address_province', _0x536e8e['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x4b07e2['select']('#checkout_shipping_address_province', _0xd300ce[_0x20f714]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3760ea(0x190), _0x4b07e2['evaluate'](() => {
                            const _0x2bcff9 = document['querySelector']('#continue_button');
                            for (var _0x3f80b2 = 0x0; _0x3f80b2 < 0x5; _0x3f80b2++) {
                                if (_0x2bcff9) {
                                    _0x2bcff9['click'](), _0x2bcff9['click']();
                                    break;
                                } else
                                    _0x3760ea(0xfa0);
                            }
                        }), await _0x4b07e2['waitForTimeout'](0x9c4);
                        try {
                            await _0x4b07e2['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x4b07e2['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4d3b21 => _0x4d3b21['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4b07e2['waitForTimeout'](0x7d0), console['log'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x4b07e2['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3760ea(0x3e8), await _0x4b07e2['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0xe45c91 => _0xe45c91['submit']()), await _0x3760ea(0x3e8);
                        try {
                            await _0x4b07e2['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4b07e2['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x5e6884 => _0x5e6884['submit']());
                        try {
                            await _0x4b07e2['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3d8656 = 'no', _0xd99376(_0xd300ce[_0x20f714], _0x441cc3), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                try {
                                    await _0x2eb6d8(_0x46692f['webhook'], _0x504e28['succesDEVMSG']);
                                } catch {
                                }
                            await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x504e28['succesDEVMSG']), await _0x3760ea(0xc8);
                            try {
                                await _0x2eb6d8(_0x1998ad, _0x504e28['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x1d161a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x30bc08) {
                        _0x30bc08['message']['includes']('selector') && (_0x30bc08 = 'Connection\x20Error');
                        console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20' + _0x30bc08)), _0x1ffe35 = '' + _0x30bc08;
                        var _0x5e92f2 = await _0x3f9534(_0xd300ce[_0x20f714], _0x441cc3, 'dev', !![], _0x1ffe35);
                        _0x504e28['errorDEV'] = { 'embeds': [_0x5e92f2] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x504e28['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x504e28['errorDEV']), _0x3d8656 = 'yes';
                    } finally {
                        _0x4836e9 && _0x4836e9['close']();
                        if (_0x3d8656 == 'yes' && _0x2ccfe0 != 0x5 && _0x1ffe35 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x441cc3['name'] + ']\x20Task\x20' + (_0x20f714 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ccfe0 + '\x20/\x205)')), _0x20f714 = _0x20f714 - 0x1, _0x2ccfe0 = _0x2ccfe0 + 0x1;
                            continue;
                        }
                        _0x3d8656 == 'yes' && _0x2ccfe0 >= 0x5 && (_0x39d99b(_0xd300ce[_0x20f714], _0x441cc3), _0x3d8656 = 'no', _0x2ccfe0 = 0x0);
                        if (_0x20f714 + 0x1 == _0xd300ce['length']) {
                            await _0x3760ea(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x46692f['AfewDelay'] + '\x20ms'), await _0x3760ea(_0x46692f['AfewDelay']);
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
                'function': async function (_0x56609f, _0x47be84, _0x38a8cf) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x307271 = 0x0; _0x307271 < _0x47be84['length']; _0x307271++) {
                        if (_0x4aaf0d != 'yes')
                            var _0x4aaf0d = '', _0x21542b = 0x0;
                        var _0x41ff49;
                        try {
                            await _0x498738(_0x47be84, _0x307271);
                        } catch {
                            _0x4aaf0d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5f1b8a(_0x56609f['name'] + '\x20Task\x20' + (_0x307271 + 0x1) + '\x20/\x20' + _0x47be84['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x1f3cba = await _0x3f9534(_0x47be84[_0x307271], _0x56609f, 'acc', ![]);
                        const _0xb6055a = { 'succesDEVMSG': { 'embeds': [_0x1f3cba] } }, _0x567174 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x538649 = Math['round'](Math['random']() * (_0x38a8cf['length'] - 0x1)), _0x59acf6 = _0x38a8cf[_0x538649]['split'](':'), _0x6e0997;
                        try {
                            _0x6e0997 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59acf6[0x0] + ':' + _0x59acf6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x6e0997 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59acf6[0x0] + ':' + _0x59acf6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1a0ecd = await _0x6e0997['newPage']();
                            await _0x1a0ecd['authenticate']({
                                'username': '' + _0x59acf6[0x2],
                                'password': '' + _0x59acf6[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a0ecd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a0ecd['setRequestInterception'](!![]), _0x1a0ecd['on']('request', _0x170743 => {
                                _0x170743['resourceType']() === 'image' ? _0x170743['abort']() : _0x170743['continue']();
                            });
                            try {
                                await _0x1a0ecd['goto']('' + _0x567174), await _0x1a0ecd['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x4aaf0d = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x1a0ecd['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3760ea(0x7d0), console['log'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3760ea(0x190), await _0x1a0ecd['waitForSelector']('#firstname'), await _0x1a0ecd['type']('#firstname', _0x47be84[_0x307271]['FirstName'], { 'delay': 0xf0 }), await _0x3760ea(0x190), await _0x1a0ecd['type']('#lastname', _0x47be84[_0x307271]['LastName'], { 'delay': 0xe6 }), await _0x3760ea(0x190), await _0x1a0ecd['type']('#email_address', _0x47be84[_0x307271]['Email'], { 'delay': 0x122 }), await _0x3760ea(0x190), await _0x1a0ecd['type']('#password', _0x47be84[_0x307271]['Password'], { 'delay': 0x82 }), await _0x3760ea(0x1f4), await _0x1a0ecd['type']('#password-confirmation', _0x47be84[_0x307271]['Password'], { 'delay': 0x7c }), console['log'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3760ea(0x2bc), await _0x1a0ecd['$eval']('#form-validate', _0x5871ea => _0x5871ea['submit']()), await _0x3760ea(0x1388);
                            const _0x4e8f94 = await _0x1a0ecd['$']('#email_address-error');
                            if (_0x4e8f94)
                                throw new Error('Invalid\x20Email');
                            const _0x319161 = await _0x1a0ecd['$']('#password-error');
                            if (_0x319161)
                                throw new Error('Invalid\x20Password');
                            await _0x1a0ecd['waitForSelector']('div.mesg-success'), _0x4aaf0d = 'no', console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Account\x20' + _0x47be84[_0x307271]['Email'] + '\x20Generated')), _0x40baed['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x47be84[_0x307271]['Email'] + ',' + _0x47be84[_0x307271]['Password']);
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xb6055a['succesDEVMSG']);
                            } catch {
                            }
                            await _0x2eb6d8(_0x5ac7d4, _0xb6055a['succesDEVMSG']), console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x589d73) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20' + _0x589d73)), _0x41ff49 = '' + _0x589d73;
                            var _0x41bc8a = await _0x3f9534(_0x47be84[_0x307271], _0x56609f, 'acc', !![], _0x41ff49);
                            _0xb6055a['errorDEV'] = { 'embeds': [_0x41bc8a] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xb6055a['errorDEV']), await _0x2eb6d8(_0xbd6622, _0xb6055a['errorDEV']), _0x4aaf0d = 'yes';
                        } finally {
                            if (_0x6e0997)
                                _0x6e0997['close']();
                            if (_0x4aaf0d == 'yes' && _0x21542b != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Task\x20' + (_0x307271 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21542b + '\x20/\x205)')), _0x307271 = _0x307271 - 0x1, _0x21542b = _0x21542b + 0x1;
                                continue;
                            }
                            _0x4aaf0d == 'yes' && _0x21542b >= 0x5 && (_0x39d99b(_0x47be84[_0x307271], _0x56609f), _0x4aaf0d = 'no', _0x21542b = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x56609f['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x11a33f, _0x3be668) {
                    var _0x3f36a6 = ![], _0x8e0fdc = [];
                    async function _0x18bf9b() {
                        var _0x3d66a9 = new _0x413c3({
                            'user': _0x46692f['masterMail'],
                            'password': _0x46692f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x553c50(_0x5032fa) {
                            _0x3d66a9['openBox']('INBOX', ![], _0x5032fa);
                        }
                        _0x3d66a9['once']('ready', function () {
                            _0x553c50(function (_0x48caef, _0x1bbcfd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x48caef)
                                    throw _0x48caef;
                                _0x3d66a9['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x454ab7, _0x367319) {
                                    if (!_0x367319 || !_0x367319['length'])
                                        console['log'](_0x5cb70e() + '\x20[' + _0x11a33f['name'] + ']\x20No\x20mails\x20found'), _0x3d66a9['end']();
                                    else {
                                        var _0x3c1cbb = _0x3d66a9['seq']['fetch'](_0x367319, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3c1cbb['on']('message', function (_0x1d7ce4, _0x307bb5) {
                                            var _0x31325b = '(#' + _0x307bb5 + ')\x20';
                                            _0x1d7ce4['on']('body', function (_0x43e19c, _0x2b737f) {
                                                _0x4b8d3b(_0x43e19c, (_0x3f8a1c, _0x5ccf66) => {
                                                    var _0x287d40 = _0x5ccf66['text']['split']('[')[0x2], _0x2b44bf = _0x287d40['split'](']')[0x0];
                                                    _0x8e0fdc['push'](_0x2b44bf);
                                                });
                                            }), _0x1d7ce4['once']('end', function () {
                                            });
                                        }), _0x3c1cbb['once']('error', function (_0x67db57) {
                                            console['log']('Fetch\x20error:\x20' + _0x67db57), _0x3f36a6 = !![];
                                        }), _0x3c1cbb['once']('end', function () {
                                            _0x3d66a9['end'](), _0x3f36a6 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x3d66a9['once']('error', function (_0x4d89c8) {
                            console['log'](_0x5c34ff['red'](_0x4d89c8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3f36a6 = !![];
                        }), _0x3d66a9['once']('end', async function () {
                            _0x3f36a6 = !![];
                        }), _0x3d66a9['connect']();
                    }
                    async function _0x21a1c8(_0x1679f8, _0x1adc58, _0x3aacd0) {
                        _0x295ab7['use'](_0x2d996f());
                        for (var _0x17c3cd = 0x0; _0x17c3cd < _0x1adc58['length']; _0x17c3cd++) {
                            if (_0x13d7cf != 'yes')
                                var _0x13d7cf = '', _0x3f5085 = 0x0;
                            var _0x350417 = Math['round'](Math['random']() * (_0x3aacd0['length'] - 0x1)), _0x278c44 = _0x3aacd0[_0x350417]['split'](':'), _0x42a71b;
                            try {
                                _0x42a71b = await _0x295ab7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x278c44[0x0] + ':' + _0x278c44[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x42a71b = await _0x295ab7['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x278c44[0x0] + ':' + _0x278c44[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4e4c29 = await _0x42a71b['newPage']();
                                await _0x4e4c29['authenticate']({
                                    'username': '' + _0x278c44[0x2],
                                    'password': '' + _0x278c44[0x3]
                                }), console['log'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x4e4c29['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4e4c29['setRequestInterception'](!![]), _0x4e4c29['on']('request', _0x5dc0e3 => {
                                    _0x5dc0e3['resourceType']() === 'image' || _0x5dc0e3['resourceType']() === 'font' || _0x5dc0e3['resourceType']() === 'media' ? _0x5dc0e3['abort']() : _0x5dc0e3['continue']();
                                }), console['log'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x4e4c29['goto'](_0x1adc58[_0x17c3cd]);
                                } catch {
                                    _0x13d7cf = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4e4c29['waitForTimeout'](0xbb8);
                                try {
                                    await _0x4e4c29['waitForSelector']('.account-nav'), _0x13d7cf = 'no', console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x16dcb4 = await _0x3f9534(null, _0x1679f8, 'ver', ![]);
                                    const _0x393cae = { 'succesDEVMSG': { 'embeds': [_0x16dcb4] } };
                                    await _0x2eb6d8(_0x314114, _0x393cae['succesDEVMSG']);
                                } catch {
                                    _0x13d7cf = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x265e4c) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20' + _0x265e4c));
                                var _0x436abe = _0x265e4c, _0x460273 = await _0x3f9534(null, _0x1679f8, 'ver', !![], _0x436abe);
                                const _0x276c9f = { 'errorDEVMSG': { 'embeds': [_0x460273] } };
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x276c9f['errorDEVMSG']), await _0x2eb6d8(_0xbd6622, _0x276c9f['errorDEVMSG']);
                            } finally {
                                _0x42a71b['close']();
                                if (_0x13d7cf == 'yes' && _0x3f5085 != 0x5) {
                                    console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Task\x20' + (_0x17c3cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x3f5085 + '\x20/\x205)')), _0x17c3cd = _0x17c3cd - 0x1, _0x3f5085 = _0x3f5085 + 0x1;
                                    continue;
                                }
                                _0x13d7cf == 'yes' && _0x3f5085 >= 0x5 && (_0x13d7cf = 'no', _0x3f5085 = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x1679f8['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                            }
                        }
                    }
                    try {
                        _0x18bf9b();
                        while (!_0x3f36a6) {
                            await _0x3760ea(0xfa0);
                        }
                        console['log']('Found\x20' + _0x8e0fdc['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3760ea(0x7d0);
                    }
                    await _0x21a1c8(_0x11a33f, _0x8e0fdc, _0x3be668);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3e65f5, _0x1a2677, _0x37278c) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20ef9d = 0x0; _0x20ef9d < _0x1a2677['length']; _0x20ef9d++) {
                        var _0x13a1bc;
                        try {
                            await _0x498738(_0x1a2677, _0x20ef9d);
                        } catch {
                            _0x3d8112 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x105f41(_0x592ab0) {
                            const _0x3d2fb1 = _0x40baed['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1d22d3 = _0x385c07['parse'](_0x3d2fb1, { 'header': !![] })['data'];
                            let _0x51d6da = ![];
                            for (var _0x2468a7 of _0x1d22d3) {
                                if (_0x2468a7['Url'] == _0x592ab0['Url'] && _0x2468a7['Email'] == _0x592ab0['Email']) {
                                    _0x51d6da = !![];
                                    break;
                                }
                            }
                            return _0x51d6da;
                        }
                        if (await _0x105f41(_0x1a2677[_0x20ef9d]) == !![]) {
                            console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x3d8112 != 'yes')
                            var _0x3d8112 = '', _0x193fac = 0x0;
                        _0x5f1b8a(_0x3e65f5['name'] + '\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20/\x20' + _0x1a2677['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x245223 = Math['round'](Math['random']() * (_0x37278c['length'] - 0x1)), _0x3642d9 = _0x37278c[_0x245223]['split'](':'), _0x3245ba;
                        try {
                            _0x3245ba = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3642d9[0x0] + ':' + _0x3642d9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3245ba = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3642d9[0x0] + ':' + _0x3642d9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x96d87a = await _0x3245ba['newPage'](), _0x5833cd = await _0x96d87a['target']()['createCDPSession'](), { windowId: _0x1479be } = await _0x5833cd['send']('Browser.getWindowForTarget');
                            await _0x96d87a['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x36f538 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x96d87a['authenticate']({
                                'username': '' + _0x3642d9[0x2],
                                'password': '' + _0x3642d9[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x96d87a['goto']('' + _0x1a2677[_0x20ef9d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x96d87a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x5833cd['send']('Browser.setWindowBounds', {
                                'windowId': _0x1479be,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3760ea(0x1388), await _0x96d87a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x96d87a['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Logging\x20in'), await _0x96d87a['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5355b4 => _0x5355b4['click']()), await _0x96d87a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x96d87a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3760ea(0x7d0), await _0x96d87a['waitForSelector']('#email-login'), await _0x96d87a['type']('#email-login', '' + _0x1a2677[_0x20ef9d]['Email']), await _0x3760ea(0xdac), await _0x96d87a['waitForSelector']('#password'), await _0x96d87a['type']('#password', '' + _0x1a2677[_0x20ef9d]['Password'], { 'delay': 0xe6 }), await _0x3760ea(0x157c);
                            try {
                                await _0x96d87a['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x41d67d => _0x41d67d['click']());
                            } catch {
                            }
                            try {
                                await _0x96d87a['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x2cf107) {
                            }
                            await _0x3760ea(0x3e8);
                            const _0x3ca9aa = await _0x96d87a['$']('.enteredDraw_container__2KmQ_');
                            if (_0x3ca9aa)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1a2677[_0x20ef9d]['Size']);
                            try {
                                if (_0x1a2677[_0x20ef9d]['Size'] != 'RANDOM') {
                                    var _0x14e98b = _0x1a2677[_0x20ef9d]['Size']['replace']('.', ',');
                                    const _0x925866 = await _0x96d87a['$x']('//div[contains(text(),\x20' + _0x14e98b + ')]');
                                    await _0x925866[0x0]['click']();
                                } else {
                                    const _0x1c6148 = await _0x96d87a['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1f27d1 = Math['round'](Math['random']() * (_0x1c6148['length'] - 0x1));
                                    await _0x1c6148[_0x1f27d1]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x3760ea(0x1f4);
                            const _0x4b7394 = await _0x96d87a['$']('.addressList_addressItem__LE2PB');
                            if (_0x4b7394 && _0x1a2677[_0x20ef9d]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x96d87a['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x3760ea(0x5dc), await _0x96d87a['waitForSelector']('#firstname'), await _0x96d87a['type']('#firstname', '' + _0x1a2677[_0x20ef9d]['FirstName']), await _0x3760ea(0x1f4), await _0x96d87a['waitForSelector']('#firstname'), await _0x96d87a['type']('#lastname', '' + _0x1a2677[_0x20ef9d]['LastName']), await _0x3760ea(0x1f4), await _0x96d87a['waitForSelector']('#firstname'), await _0x96d87a['type']('#street', '' + _0x1a2677[_0x20ef9d]['Address1']), await _0x3760ea(0x1f4), await _0x96d87a['waitForSelector']('#firstname'), await _0x96d87a['type']('#houseNumber', _0x1a2677[_0x20ef9d]['HouseNumber'] + '\x20' + _0x1a2677[_0x20ef9d]['Address2']), await _0x3760ea(0x1f4), await _0x96d87a['waitForSelector']('#firstname'), await _0x96d87a['select']('#country_code', '' + _0x1a2677[_0x20ef9d]['Country']), await _0x3760ea(0x1f4), await _0x96d87a['type']('#postcode', '' + _0x1a2677[_0x20ef9d]['Zip']), await _0x3760ea(0x1f4), await _0x96d87a['type']('#city', '' + _0x1a2677[_0x20ef9d]['City']), await _0x3760ea(0x1f4), await _0x96d87a['type']('#telephone', '' + _0x1a2677[_0x20ef9d]['Phone']), await _0x3760ea(0x1f4), await _0x96d87a['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x3760ea(0x9c4);
                            try {
                                await _0x96d87a['type']('#instagram_name', '' + _0x1a2677[_0x20ef9d]['Follower']), await _0x96d87a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3760ea(0x5dc);
                            try {
                                await _0x96d87a['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x3760ea(0x5dc), await _0x96d87a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x503737 => _0x503737['click']()), await _0x3760ea(0x1388);
                            try {
                                await _0x96d87a['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x96d87a['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1a2677[_0x20ef9d]['Size'] != 'RANDOM') {
                                    var _0x14e98b = _0x1a2677[_0x20ef9d]['Size']['replace']('.', ',');
                                    const _0x423cba = await _0x96d87a['$x']('//div[contains(text(),\x20' + _0x14e98b + ')]');
                                    await _0x423cba[0x0]['click']();
                                } else {
                                    const _0x2def82 = await _0x96d87a['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1f27d1 = Math['round'](Math['random']() * (_0x2def82['length'] - 0x1));
                                    await _0x2def82[_0x1f27d1]['click']();
                                }
                                await _0x3760ea(0x5dc);
                                try {
                                    await _0x96d87a['hover']('#instagram_name'), await _0x96d87a['type']('#instagram_name', '' + _0x1a2677[_0x20ef9d]['Follower']), await _0x96d87a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Retrying\x20(' + _0x193fac + '\x20/\x205)');
                                try {
                                    await _0x96d87a['hover']('.checkBox_boxHolder__wLGVe'), await _0x3760ea(0x5dc), await _0x96d87a['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x3760ea(0x157c), await _0x96d87a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x36fde6 => _0x36fde6['click']()), await _0x3760ea(0x1388), await _0x96d87a['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3d8112 = 'no', _0xd99376(_0x1a2677[_0x20ef9d], _0x3e65f5), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1a33a0 = await _0x3f9534(_0x1a2677[_0x20ef9d], _0x3e65f5, 'dev', ![]), _0x14ad12 = await _0x3f9534(_0x1a2677[_0x20ef9d], _0x3e65f5, 'pub', ![]);
                            const _0x87c2f2 = {
                                'succesDEVMSG': { 'embeds': [_0x1a33a0] },
                                'succesPUBMSG': { 'embeds': [_0x14ad12] }
                            };
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x87c2f2['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x87c2f2['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0x87c2f2['succesPUBMSG']);
                            } catch (_0x5d8e4f) {
                                console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5d8e4f));
                            }
                        } catch (_0x885bb5) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20' + _0x885bb5)), _0x3d8112 = 'yes', _0x13a1bc = '' + _0x885bb5;
                            var _0x4f7ea4 = await _0x3f9534(_0x1a2677[_0x20ef9d], _0x3e65f5, 'dev', !![], _0x13a1bc), _0x1a33a0 = await _0x3f9534(_0x1a2677[_0x20ef9d], _0x3e65f5, 'dev', ![]), _0x14ad12 = await _0x3f9534(_0x1a2677[_0x20ef9d], _0x3e65f5, 'pub', ![]);
                            const _0x1ea8e4 = {
                                'succesDEVMSG': { 'embeds': [_0x1a33a0] },
                                'succesPUBMSG': { 'embeds': [_0x14ad12] }
                            };
                            _0x1ea8e4['errorDEV'] = { 'embeds': [_0x4f7ea4] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x1ea8e4['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x1ea8e4['errorDEV']);
                        } finally {
                            _0x3245ba['close']();
                            if (_0x3d8112 == 'yes' && _0x193fac != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Task\x20' + (_0x20ef9d + 0x1) + '\x20:\x20Retrying\x20(' + _0x193fac + '\x20/\x205)')), _0x20ef9d = _0x20ef9d - 0x1, _0x193fac = _0x193fac + 0x1;
                                continue;
                            }
                            _0x3d8112 == 'yes' && _0x193fac >= 0x5 && (_0x39d99b(_0x1a2677[_0x20ef9d], _0x3e65f5), _0x3d8112 = 'no', _0x193fac = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x3e65f5['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x22a0c0, _0xaec984) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x15aa7c;
                    try {
                        const _0x46fc11 = _0x40baed['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x15aa7c = _0x385c07['parse'](_0x46fc11, { 'header': !![] })['data'];
                    } catch (_0x4ebde2) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x273822 = 0x0; _0x273822 < _0x15aa7c['length']; _0x273822++) {
                        if (_0x4fedcb != 'yes')
                            var _0x4fedcb = '', _0x307651 = 0x0;
                        var _0x42da1d;
                        _0x5f1b8a(_0x22a0c0['name'] + '\x20Task\x20' + (_0x273822 + 0x1) + '\x20/\x20' + _0x15aa7c['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x59bd1c = await _0x3f9534(_0x15aa7c[_0x273822], _0x22a0c0, 'acc', ![]);
                        const _0xd414bf = { 'succesDEVMSG': { 'embeds': [_0x59bd1c] } }, _0x4c6c4d = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x464953 = Math['round'](Math['random']() * (_0xaec984['length'] - 0x1)), _0x59d0f1 = _0xaec984[_0x464953]['split'](':'), _0x2e53bb;
                        try {
                            _0x2e53bb = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59d0f1[0x0] + ':' + _0x59d0f1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e53bb = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x59d0f1[0x0] + ':' + _0x59d0f1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x45842c = await _0x2e53bb['newPage']();
                            await _0x45842c['authenticate']({
                                'username': '' + _0x59d0f1[0x2],
                                'password': '' + _0x59d0f1[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x45842c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x45842c['setRequestInterception'](!![]), _0x45842c['on']('request', _0x1a3ecc => {
                                _0x1a3ecc['resourceType']() === 'image' ? _0x1a3ecc['abort']() : _0x1a3ecc['continue']();
                            });
                            try {
                                await _0x45842c['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x45842c['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x4fedcb = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x45842c['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3760ea(0x3e8), await _0x45842c['type']('#email', _0x15aa7c[_0x273822]['Email']), await _0x3760ea(0x1f4), await _0x45842c['type']('#pass', _0x15aa7c[_0x273822]['Password']), await _0x3760ea(0x1f4), await _0x45842c['$eval']('#login-form', _0x8d9f75 => _0x8d9f75['submit']());
                            try {
                                await _0x45842c['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x3760ea(0x190);
                            const _0x147786 = await _0x45842c['evaluate'](() => {
                                const _0x48acca = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x48acca['map'](_0x309828 => _0x309828['alt']);
                            }), _0x168741 = await _0x45842c['evaluate'](() => {
                                const _0x5d8d4e = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x5d8d4e['map'](_0x308c3c => _0x308c3c['innerHTML']);
                            }), _0x3b6531 = await _0x45842c['$$']('.raffle-winner');
                            if (_0x3b6531['length'] < 0x1) {
                                console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x4fedcb = 'no';
                                continue;
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20' + _0x3b6531['length'] + '\x20Wins\x20Found!');
                            for (var _0xe899fd = 0x0; _0xe899fd < _0x3b6531['length']; _0xe899fd++) {
                                console['log'](_0x5c34ff['green'](_0x147786[_0xe899fd] + _0x168741[_0xe899fd]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x3c31b1) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20' + _0x3c31b1)), _0x42da1d = '' + _0x3c31b1;
                            var _0x4ac95d = await _0x3f9534(_0x15aa7c[_0x273822], _0x22a0c0, 'acc', !![], _0x42da1d);
                            _0xd414bf['errorDEV'] = { 'embeds': [_0x4ac95d] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xd414bf['errorDEV']), await _0x2eb6d8(_0xbd6622, _0xd414bf['errorDEV']), _0x4fedcb = 'yes';
                        } finally {
                            if (_0x2e53bb)
                                _0x2e53bb['close']();
                            if (_0x4fedcb == 'yes' && _0x307651 != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Task\x20' + (_0x273822 + 0x1) + '\x20:\x20Retrying\x20(' + _0x307651 + '\x20/\x205)')), _0x273822 = _0x273822 - 0x1, _0x307651 = _0x307651 + 0x1;
                                continue;
                            }
                            _0x4fedcb == 'yes' && _0x307651 >= 0x5 && (_0x39d99b(_0x15aa7c[_0x273822], _0x22a0c0), _0x4fedcb = 'no', _0x307651 = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x22a0c0['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
            'function': async function (_0x3f0535, _0x39f636, _0x5cc53c) {
                _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x46692f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x558435 = 0x0; _0x558435 < _0x39f636['length']; _0x558435++) {
                    var _0x4e1b02;
                    _0x5f1b8a(_0x3f0535['name'] + '\x20Task\x20' + (_0x558435 + 0x1) + '\x20/\x20' + _0x39f636['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                    try {
                        await _0x498738(_0x39f636, _0x558435);
                    } catch {
                        _0x1f0813 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x335411(_0x406b45) {
                        const _0x35112d = _0x40baed['readFileSync']('../successful-tasks.csv', 'utf8'), _0x58d451 = _0x385c07['parse'](_0x35112d, { 'header': !![] })['data'];
                        let _0x40790f = ![];
                        for (var _0x5ca958 of _0x58d451) {
                            if (_0x5ca958['Url'] == _0x406b45['Url'] && _0x5ca958['Email'] == _0x406b45['Email']) {
                                _0x40790f = !![];
                                break;
                            }
                        }
                        return _0x40790f;
                    }
                    if (await _0x335411(_0x39f636[_0x558435]) == !![]) {
                        console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x122fda = ![];
                    const _0x17bf6e = _0x40baed['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x3680b6 = _0x385c07['parse'](_0x17bf6e, { 'header': !![] })['data'];
                    for (var _0x156d91 of _0x3680b6) {
                        _0x156d91['Email'] == _0x39f636[_0x558435]['Email'] && (_0x122fda = !![]);
                    }
                    if (_0x122fda == ![]) {
                        var _0x2f952a;
                        if (_0x39f636[_0x558435]['Url']['endsWith']('/')) {
                            _0x2f952a = _0x39f636[_0x558435]['Url'] + 'register';
                            if (_0x1f0813 != 'yes')
                                var _0x1f0813 = '', _0xdc13c3 = 0x0;
                        } else {
                            _0x2f952a = _0x39f636[_0x558435]['Url'] + '/register';
                            if (_0x1f0813 != 'yes')
                                var _0x1f0813 = '', _0xdc13c3 = 0x0;
                        }
                        if (_0x39f636[_0x558435]['Email'] == '' || _0x39f636[_0x558435]['FirstName'] == '' || _0x39f636[_0x558435]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x39f636[_0x558435]['Password'] == '' && (_0x39f636[_0x558435]['Password'] = 'JRaffles23!');
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x315535 = _0x5cc53c[_0x558435]['split'](':');
                        else
                            var _0x5c6025 = Math['round'](Math['random']() * (_0x5cc53c['length'] - 0x1)), _0x315535 = _0x5cc53c[_0x5c6025]['split'](':');
                        var _0x13d12f;
                        try {
                            _0x13d12f = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x315535[0x0] + ':' + _0x315535[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x13d12f = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x315535[0x0] + ':' + _0x315535[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2062f8 = await _0x13d12f['newPage']();
                            await _0x2062f8['authenticate']({
                                'username': '' + _0x315535[0x2],
                                'password': '' + _0x315535[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2062f8['setRequestInterception'](!![]), _0x2062f8['on']('request', _0x578a9b => {
                                _0x578a9b['resourceType']() === 'image' || _0x578a9b['resourceType']() === 'font' || _0x578a9b['resourceType']() === 'media' ? _0x578a9b['abort']() : _0x578a9b['continue']();
                            });
                            try {
                                await _0x2062f8['goto'](_0x2f952a);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3760ea(0x3e8), await _0x2062f8['waitForSelector']('#email'), await _0x2062f8['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x3760ea(0x3e8);
                            try {
                                await _0x2062f8['click']('li[data-value=\x22EU\x20' + _0x39f636[_0x558435]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x39f636[_0x558435]['Size']);
                            }
                            await _0x3760ea(0x6a4), await _0x2062f8['type']('#email', '' + _0x39f636[_0x558435]['Email']), await _0x3760ea(0x352), await _0x2062f8['waitForSelector']('#password'), await _0x2062f8['type']('#password', '' + _0x39f636[_0x558435]['Password']), await _0x3760ea(0x352), await _0x2062f8['type']('#phone', '' + _0x39f636[_0x558435]['Phone']), await _0x3760ea(0x352), await _0x2062f8['type']('#firstName', '' + _0x39f636[_0x558435]['FirstName']), await _0x3760ea(0x352), await _0x2062f8['type']('#lastName', '' + _0x39f636[_0x558435]['LastName']), await _0x3760ea(0x352);
                            _0x39f636[_0x558435]['Url']['includes']('footlocker.de') ? await _0x2062f8['type']('#birthdate', _0x302c9e(0x1, 0x1c) + '.' + _0x302c9e(0x1, 0xc) + '.' + _0x302c9e(0x7c6, 0x7d3)) : await _0x2062f8['type']('#birthdate', _0x302c9e(0x1, 0x1c) + '-' + _0x302c9e(0x1, 0xc) + '-' + _0x302c9e(0x7c6, 0x7d3));
                            await _0x3760ea(0x352), await _0x2062f8['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x2062f8['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x3760ea(0x1f4), await _0x2062f8['click']('#stateAutocomplete'), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x3760ea(0x1f4);
                            try {
                                const _0x3900e0 = await _0x2062f8['$x']('//li[text()=\x22' + _0x39f636[_0x558435]['State'] + '\x22]');
                                await _0x3900e0[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x3760ea(0x3e8), await _0x3760ea(0x1f4), await _0x2062f8['type']('#address1', _0x39f636[_0x558435]['Address1'] + '\x20' + _0x39f636[_0x558435]['HouseNumber']), await _0x3760ea(0x1f4), await _0x2062f8['type']('#address2', '' + _0x39f636[_0x558435]['Address2']), await _0x3760ea(0x1f4), await _0x2062f8['type']('#city', '' + _0x39f636[_0x558435]['City']), await _0x3760ea(0x1f4), await _0x2062f8['type']('#postcode', '' + _0x39f636[_0x558435]['Zip']), await _0x3760ea(0x3e8), await _0x2062f8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3760ea(0x3e8), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x2062f8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x3760ea(0x7d0), await _0x2062f8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3760ea(0x12c), await _0x2062f8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3760ea(0x4b0), await _0x2062f8['keyboard']['type']('' + _0x39f636[_0x558435]['CardNumber']), await _0x3760ea(0x320), await _0x2062f8['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2062f8['keyboard']['type']('' + _0x39f636[_0x558435]['ExpiryDate']), await _0x3760ea(0x4b0), await _0x2062f8['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2062f8['keyboard']['type']('' + _0x39f636[_0x558435]['CVV']), await _0x3760ea(0x226), await _0x2062f8['type']('input[name=\x22postalCode\x22]', '' + _0x39f636[_0x558435]['Zip']), await _0x3760ea(0x226), await _0x2062f8['click']('#paymentConsent'), await _0x3760ea(0x226), await _0x2062f8['click']('#termsConsent'), await _0x3760ea(0x2bc), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2062f8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3760ea(0x2710);
                            try {
                                await _0x2062f8['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x3760ea(0xbb8), await _0x2062f8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x228a97 => _0x228a97['click']()), await _0x2062f8['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x44ad42 => _0x44ad42['click']());
                            } catch {
                            }
                            try {
                                await _0x2062f8['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x1a82a0 = await _0x2062f8['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x1a82a0) {
                                    _0x40baed['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x39f636[_0x558435]['Email'] + ',' + _0x39f636[_0x558435]['Password'] + ',' + _0x39f636[_0x558435]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x1cecfa() {
                                var _0x23c130, _0x2d4dd4 = ![];
                                for (var _0x4e8f7d = 0x0; _0x4e8f7d < 0x18; _0x4e8f7d++) {
                                    async function _0x42ec36() {
                                        var _0x5accfa = new _0x413c3({
                                            'user': _0x46692f['masterMail'],
                                            'password': _0x46692f['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x27bea5(_0x76e21) {
                                            _0x5accfa['openBox']('INBOX', ![], _0x76e21);
                                        }
                                        _0x5accfa['once']('ready', function () {
                                            console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x27bea5(function (_0x5f2ba8, _0x124acc) {
                                                console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5f2ba8)
                                                    throw _0x5f2ba8;
                                                _0x5accfa['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x2695fb, _0x20c9e3) {
                                                    if (!_0x20c9e3 || !_0x20c9e3['length'])
                                                        console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5accfa['end']();
                                                    else {
                                                        var _0x594cc9 = _0x5accfa['seq']['fetch'](_0x20c9e3, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x594cc9['on']('message', function (_0x4014bd, _0x318256) {
                                                            var _0x60fe2e = '(#' + _0x318256 + ')\x20';
                                                            _0x4014bd['on']('body', function (_0xd60da0, _0x1c6b22) {
                                                                _0x4b8d3b(_0xd60da0, (_0x4ccdc5, _0x3bc235) => {
                                                                    if (_0x3bc235['subject']['includes']('code')) {
                                                                        const _0x478220 = _0x3bc235['text']['split']('\x0a\x0a')[0x3], _0x84ff0 = _0x478220['split']('\x0a')[0x1];
                                                                        _0x23c130 = _0x84ff0;
                                                                    }
                                                                });
                                                            }), _0x4014bd['once']('end', function () {
                                                            });
                                                        }), _0x594cc9['once']('error', function (_0xf24645) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x594cc9['once']('end', function () {
                                                            _0x5accfa['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5accfa['once']('error', function (_0x244c30) {
                                            console['log'](_0x5c34ff['red'](_0x244c30['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2d4dd4 = !![];
                                        }), _0x5accfa['once']('end', async function () {
                                        }), _0x5accfa['connect']();
                                    }
                                    _0x42ec36(), await _0x3760ea(0x1388);
                                    if (_0x23c130)
                                        return _0x23c130;
                                    if (_0x2d4dd4)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4e8f7d == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1cecfa(), await _0x3760ea(0x1f4), await _0x2062f8['type']('#code', '' + code), await _0x3760ea(0x3e8), await _0x2062f8['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x25b09e => _0x25b09e['click']()), await _0x2062f8['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x2062f8['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x39f636[_0x558435]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x40baed['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x39f636[_0x558435]['Email'] + ',' + _0x39f636[_0x558435]['Password'] + ',' + _0x39f636[_0x558435]['Phone']), _0x1f0813 = 'no', _0xd99376(_0x39f636[_0x558435], _0x3f0535);
                            var _0x270704 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', ![]), _0x6a5407 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'pub', ![]);
                            const _0x330bd5 = {
                                'succesDEVMSG': { 'embeds': [_0x270704] },
                                'succesPUBMSG': { 'embeds': [_0x6a5407] }
                            };
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x330bd5['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x330bd5['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0x330bd5['succesPUBMSG']);
                            } catch (_0xfc669b) {
                                console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xfc669b));
                            }
                        } catch (_0x5bd5a7) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20' + _0x5bd5a7)), _0x4e1b02 = '' + _0x5bd5a7;
                            var _0x5c438c = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', !![], _0x4e1b02), _0x270704 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', ![]), _0x6a5407 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'pub', ![]);
                            const _0x101a81 = {
                                'succesDEVMSG': { 'embeds': [_0x270704] },
                                'succesPUBMSG': { 'embeds': [_0x6a5407] }
                            };
                            _0x101a81['errorDEV'] = { 'embeds': [_0x5c438c] };
                            _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x101a81['errorDEV']);
                            await _0x2eb6d8(_0xbd6622, _0x101a81['errorDEV']);
                            if (!_0x1f0813 == 'no')
                                _0x1f0813 = 'yes';
                        } finally {
                            _0x13d12f && _0x13d12f['close']();
                            if (_0x1f0813 == 'yes' && _0xdc13c3 != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Retrying\x20(' + _0xdc13c3 + '\x20/\x205)')), _0x558435 = _0x558435 - 0x1, _0xdc13c3 = _0xdc13c3 + 0x1;
                                continue;
                            }
                            _0x1f0813 == 'yes' && _0xdc13c3 >= 0x5 && (_0x39d99b(_0x39f636[_0x558435], _0x3f0535), _0x1f0813 = 'no', _0xdc13c3 = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    } else {
                        const _0x2ec22e = '' + _0x39f636[_0x558435]['Url'];
                        if (_0x1f0813 != 'yes')
                            var _0x1f0813 = '', _0xdc13c3 = 0x0;
                        if (_0x39f636[_0x558435]['Email'] == '' || _0x39f636[_0x558435]['FirstName'] == '' || _0x39f636[_0x558435]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x39f636[_0x558435]['Password'] == '' && (_0x39f636[_0x558435]['Password'] = 'JRaffles23!');
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x315535 = _0x5cc53c[_0x558435]['split'](':');
                        else
                            var _0x5c6025 = Math['round'](Math['random']() * (_0x5cc53c['length'] - 0x1)), _0x315535 = _0x5cc53c[_0x5c6025]['split'](':');
                        var _0x13d12f;
                        try {
                            _0x13d12f = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x315535[0x0] + ':' + _0x315535[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x13d12f = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x315535[0x0] + ':' + _0x315535[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1fd767 = await _0x13d12f['newPage']();
                            await _0x1fd767['authenticate']({
                                'username': '' + _0x315535[0x2],
                                'password': '' + _0x315535[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fd767['setRequestInterception'](!![]), _0x1fd767['on']('request', _0x17e22c => {
                                _0x17e22c['resourceType']() === 'image' || _0x17e22c['resourceType']() === 'font' || _0x17e22c['resourceType']() === 'media' ? _0x17e22c['abort']() : _0x17e22c['continue']();
                            }), await _0x1fd767['goto'](_0x2ec22e), await _0x1fd767['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1fd767['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x3760ea(0x7d0), await _0x1fd767['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1fd767['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x3760ea(0x3e8), await _0x1fd767['waitForSelector']('#email'), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1fd767['type']('#email', '' + _0x39f636[_0x558435]['Email']), await _0x3760ea(0x352), await _0x1fd767['waitForSelector']('#password'), await _0x1fd767['type']('#password', '' + _0x39f636[_0x558435]['Password']), await _0x3760ea(0x352), await _0x1fd767['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3760ea(0x3e8);
                            try {
                                await _0x1fd767['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xd99376(_0x39f636[_0x558435], _0x3f0535), _0x1f0813 = 'no';
                                continue;
                            }
                            await _0x1fd767['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x3760ea(0x3e8), await _0x1fd767['click']('li[data-value=\x22EU\x20' + _0x39f636[_0x558435]['Size'] + '\x22]'), await _0x3760ea(0x1f4), await _0x1fd767['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1fd767['focus']('#postcode'), await _0x1fd767['keyboard']['down']('Control'), await _0x1fd767['keyboard']['press']('A'), await _0x1fd767['keyboard']['up']('Control'), await _0x1fd767['keyboard']['press']('Backspace'), await _0x1fd767['keyboard']['type'](_0x39f636[_0x558435]['Zip']), await _0x3760ea(0x60e), await _0x1fd767['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3760ea(0x3e8), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1fd767['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1fd767['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1fd767['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3760ea(0x4b0), await _0x1fd767['keyboard']['type']('' + _0x39f636[_0x558435]['CardNumber']), await _0x3760ea(0x320), await _0x1fd767['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1fd767['keyboard']['type']('' + _0x39f636[_0x558435]['ExpiryDate']), await _0x3760ea(0x4b0), await _0x1fd767['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1fd767['keyboard']['type']('' + _0x39f636[_0x558435]['CVV']), await _0x3760ea(0x226), await _0x1fd767['type']('input[name=\x22postalCode\x22]', '' + _0x39f636[_0x558435]['Zip']), await _0x3760ea(0x226), await _0x1fd767['click']('#paymentConsent'), await _0x3760ea(0x226), await _0x1fd767['click']('#termsConsent'), await _0x3760ea(0x2bc), console['log'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1fd767['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3760ea(0x2710);
                            try {
                                await _0x1fd767['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x3760ea(0xbb8), await _0x1fd767['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x243117 => _0x243117['click']()), await _0x1fd767['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x340f56 => _0x340f56['click']());
                            } catch {
                            }
                            try {
                                await _0x1fd767['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xd99376(_0x39f636[_0x558435], _0x3f0535);
                            var _0x270704 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', ![]), _0x6a5407 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'pub', ![]);
                            const _0xd01d21 = {
                                'succesDEVMSG': { 'embeds': [_0x270704] },
                                'succesPUBMSG': { 'embeds': [_0x6a5407] }
                            };
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xd01d21['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0xd01d21['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0xd01d21['succesPUBMSG']);
                            } catch (_0x5f3eb5) {
                                console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5f3eb5));
                            }
                            _0x1f0813 = 'no';
                        } catch (_0x45d05b) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20' + _0x45d05b)), _0x4e1b02 = '' + _0x45d05b;
                            var _0x5c438c = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', !![], _0x4e1b02), _0x270704 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'dev', ![]), _0x6a5407 = await _0x3f9534(_0x39f636[_0x558435], _0x3f0535, 'pub', ![]);
                            const _0x931a37 = {
                                'succesDEVMSG': { 'embeds': [_0x270704] },
                                'succesPUBMSG': { 'embeds': [_0x6a5407] }
                            };
                            _0x931a37['errorDEV'] = { 'embeds': [_0x5c438c] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x931a37['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x931a37['errorDEV']), _0x1f0813 = 'yes';
                        } finally {
                            _0x13d12f && _0x13d12f['close']();
                            if (_0x1f0813 == 'yes' && _0xdc13c3 != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3f0535['name'] + ']\x20Task\x20' + (_0x558435 + 0x1) + '\x20:\x20Retrying\x20(' + _0xdc13c3 + '\x20/\x205)')), _0x558435 = _0x558435 - 0x1, _0xdc13c3 = _0xdc13c3 + 0x1;
                                continue;
                            }
                            _0x1f0813 == 'yes' && _0xdc13c3 >= 0x5 && (_0x39d99b(_0x39f636[_0x558435], _0x3f0535), _0x1f0813 = 'no', _0xdc13c3 = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
                'function': async function (_0x15384a, _0x1fe412, _0x35271c) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3c6f14 = 0x0; _0x3c6f14 < _0x1fe412['length']; _0x3c6f14++) {
                        if (_0x1ba1b9 != 'yes')
                            var _0x1ba1b9 = '', _0x29adb1 = 0x0;
                        var _0x52c419;
                        try {
                            await _0x498738(_0x1fe412, _0x3c6f14);
                        } catch {
                            _0x1ba1b9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5f1b8a(_0x15384a['name'] + '\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20/\x20' + _0x1fe412['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x243ed0 = await _0x3f9534(_0x1fe412[_0x3c6f14], _0x15384a, 'acc', ![]);
                        const _0x1fe6c3 = { 'succesDEVMSG': { 'embeds': [_0x243ed0] } }, _0x50caf4 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x201b05 = Math['round'](Math['random']() * (_0x35271c['length'] - 0x1)), _0xfee0e9 = _0x35271c[_0x201b05]['split'](':'), _0x45c4f8;
                        try {
                            _0x45c4f8 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfee0e9[0x0] + ':' + _0xfee0e9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x45c4f8 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfee0e9[0x0] + ':' + _0xfee0e9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x866fe8 = await _0x45c4f8['newPage']();
                            await _0x866fe8['setViewport']({
                                'width': 0x500 + _0x302c9e(0x1, 0x32),
                                'height': 0x2d9 + _0x302c9e(0x1, 0x32)
                            });
                            const _0x50c91b = await _0x866fe8['target']()['createCDPSession'](), { windowId: _0x3f07c8 } = await _0x50c91b['send']('Browser.getWindowForTarget');
                            await _0x866fe8['authenticate']({
                                'username': '' + _0xfee0e9[0x2],
                                'password': '' + _0xfee0e9[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x866fe8['goto']('' + _0x50caf4, { 'waitUntil': 'networkidle2' }), await _0x3760ea(0x1388), console['log'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x3f035e = await _0x866fe8['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x3f035e && await _0x3f035e['click']();
                            } catch {
                            }
                            await _0x50c91b['send']('Browser.setWindowBounds', {
                                'windowId': _0x3f07c8,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x866fe8['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x3760ea(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x866fe8['type']('input[name=\x22firstname\x22]', '' + _0x1fe412[_0x3c6f14]['FirstName']), await _0x3760ea(0x1f4), await _0x866fe8['type']('input[name=\x22lastname\x22]', '' + _0x1fe412[_0x3c6f14]['LastName']), await _0x3760ea(0x1f4), await _0x866fe8['type']('input[name=\x22email\x22]', '' + _0x1fe412[_0x3c6f14]['Email']), await _0x3760ea(0x1f4), await _0x866fe8['type']('input[name=\x22password\x22]', '' + _0x1fe412[_0x3c6f14]['Password']), await _0x3760ea(0x258), await _0x866fe8['$eval']('input[name=\x22psgdpr\x22]', _0x517a51 => _0x517a51['click']()), await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x866fe8['$eval']('#customer-form', _0x17d38f => _0x17d38f['submit']());
                            try {
                                try {
                                    await _0x866fe8['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x1ba1b9 = 'no', console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Account\x20' + _0x1fe412[_0x3c6f14]['Email'] + '\x20Generated')), _0x40baed['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1fe412[_0x3c6f14]['Email'] + ',' + _0x1fe412[_0x3c6f14]['Password']);
                                try {
                                    _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x1fe6c3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2eb6d8(_0x5ac7d4, _0x1fe6c3['succesDEVMSG']);
                            } catch (_0x5e89cd) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x248c12) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20' + _0x248c12)), _0x52c419 = '' + _0x248c12;
                            var _0xf37f03 = await _0x3f9534(_0x1fe412[_0x3c6f14], _0x15384a, 'acc', !![], _0x52c419);
                            _0x1fe6c3['errorDEV'] = { 'embeds': [_0xf37f03] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x1fe6c3['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x1fe6c3['errorDEV']), _0x1ba1b9 = 'yes';
                        } finally {
                            _0x45c4f8['close']();
                            if (_0x1ba1b9 == 'yes' && _0x29adb1 != 0x5 && _0x52c419 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Task\x20' + (_0x3c6f14 + 0x1) + '\x20:\x20Retrying\x20(' + _0x29adb1 + '\x20/\x205)')), _0x3c6f14 = _0x3c6f14 - 0x1, _0x29adb1 = _0x29adb1 + 0x1;
                                continue;
                            }
                            _0x1ba1b9 == 'yes' && _0x29adb1 >= 0x5 && (_0x39d99b(_0x1fe412[_0x3c6f14], _0x15384a), _0x1ba1b9 = 'no', _0x29adb1 = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x15384a['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x2d2c06(_0x20223a, _0xf25e47, _0x11730e) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xbf0fee = 0x0; _0xbf0fee < _0xf25e47['length']; _0xbf0fee++) {
                        if (_0x3ceda4 != 'yes')
                            var _0x3ceda4 = '', _0x5cd587 = 0x0;
                        var _0x7e0e05;
                        try {
                            await _0x498738(_0xf25e47, _0xbf0fee);
                        } catch {
                            _0x3ceda4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5f1b8a(_0x20223a['name'] + '\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20/\x20' + _0xf25e47['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        const _0x53f890 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x13fb71 = Math['round'](Math['random']() * (_0x11730e['length'] - 0x1)), _0x3dac08 = _0x11730e[_0x13fb71]['split'](':'), _0x144369;
                        try {
                            _0x144369 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3dac08[0x0] + ':' + _0x3dac08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x144369 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3dac08[0x0] + ':' + _0x3dac08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33078d = await _0x144369['newPage'](), _0x1cde85 = await _0x33078d['target']()['createCDPSession'](), { windowId: _0x266a5d } = await _0x1cde85['send']('Browser.getWindowForTarget');
                            await _0x33078d['authenticate']({
                                'username': '' + _0x3dac08[0x2],
                                'password': '' + _0x3dac08[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33078d['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x3760ea(0xbb8), await _0x1cde85['send']('Browser.setWindowBounds', {
                                'windowId': _0x266a5d,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x3760ea(0x1f40);
                            try {
                                await _0x33078d['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x3760ea(0x1388), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Logging\x20in'), await _0x33078d['type']('input[name=\x22email\x22]', '' + _0xf25e47[_0xbf0fee]['Email']), await _0x3760ea(0x1f4), await _0x33078d['type']('input[name=\x22password\x22]', '' + _0xf25e47[_0xbf0fee]['Password']), await _0x3760ea(0x258), await _0x33078d['$eval']('#login-form', _0x785734 => _0x785734['submit']()), await _0x33078d['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x3760ea(0x1f4), await _0x33078d['goto']('' + _0xf25e47[_0xbf0fee]['Url']), await _0x33078d['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xf25e47[_0xbf0fee]['Size']);
                            if (_0xf25e47[_0xbf0fee]['Size'] != 'RANDOM') {
                                var _0x42833b = '\x20' + _0xf25e47[_0xbf0fee]['Size'] + '\x20';
                                const _0x400611 = await _0x33078d['$x']('//span[contains(text(),\x20' + _0x42833b + ')]');
                                await _0x400611[0x0]['click']();
                            } else {
                                const _0x378191 = await _0x33078d['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3cc6cf = Math['round'](Math['random']() * (_0x378191['length'] - 0x1));
                                await _0x378191[_0x3cc6cf]['click']();
                            }
                            await _0x3760ea(0x258), await _0x33078d['click']('#cookieChoiceDismiss'), await _0x3760ea(0x3e8), await _0x33078d['type']('#instagram-account', '' + _0xf25e47[_0xbf0fee]['Follower']), await _0x3760ea(0x28a), await _0x33078d['click']('#book-btn'), await _0x3760ea(0xbb8);
                            try {
                                await _0x33078d['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20' + _0x5c34ff['cyan']('Solving\x20Captcha')), await _0x33078d['solveRecaptchas'](), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3760ea(0x7d0), await _0x33078d['$eval']('#book-btn-for-sure', _0x114a93 => _0x114a93['click']()), await _0x3760ea(0x12c), await _0x33078d['click']('#book-btn-for-sure'), await _0x3760ea(0xdac);
                            const _0x2ec15e = await _0x33078d['$eval']('.reservation-popup\x20>\x20.title', _0x4b0ebf => {
                                return _0x4b0ebf['innerHTML'];
                            });
                            if (_0x2ec15e) {
                                _0x3ceda4 = 'no', _0xd99376(_0xf25e47[_0xbf0fee], _0x20223a), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x598984 = await _0x3f9534(_0xf25e47[_0xbf0fee], _0x20223a, 'dev', ![]), _0x1fb1f8 = await _0x3f9534(_0xf25e47[_0xbf0fee], _0x20223a, 'pub', ![]);
                                const _0x24f6fc = {
                                    'succesDEVMSG': { 'embeds': [_0x598984] },
                                    'succesPUBMSG': { 'embeds': [_0x1fb1f8] }
                                };
                                try {
                                    _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x24f6fc['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x24f6fc['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0x24f6fc['succesPUBMSG']);
                                } catch (_0x29e6f) {
                                    console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x29e6f));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x559e61) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20' + _0x559e61)), _0x7e0e05 = '' + _0x559e61;
                            var _0x134030 = await _0x3f9534(_0xf25e47[_0xbf0fee], _0x20223a, 'dev', !![], _0x7e0e05), _0x598984 = await _0x3f9534(_0xf25e47[_0xbf0fee], _0x20223a, 'dev', ![]), _0x1fb1f8 = await _0x3f9534(_0xf25e47[_0xbf0fee], _0x20223a, 'pub', ![]);
                            const _0xe8b949 = {
                                'succesDEVMSG': { 'embeds': [_0x598984] },
                                'succesPUBMSG': { 'embeds': [_0x1fb1f8] }
                            };
                            _0xe8b949['errorDEV'] = { 'embeds': [_0x134030] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xe8b949['errorDEV']), await _0x2eb6d8(_0xbd6622, _0xe8b949['errorDEV']), _0x559e61 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3ceda4 = 'yes');
                        } finally {
                            _0x144369['close']();
                            if (_0x3ceda4 == 'yes' && _0x5cd587 != 0x5 && _0x7e0e05 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Task\x20' + (_0xbf0fee + 0x1) + '\x20:\x20Retrying\x20(' + _0x5cd587 + '\x20/\x205)')), _0xbf0fee = _0xbf0fee - 0x1, _0x5cd587 = _0x5cd587 + 0x1;
                                continue;
                            }
                            _0x3ceda4 == 'yes' && _0x5cd587 >= 0x5 && (_0x39d99b(_0xf25e47[_0xbf0fee], _0x20223a), _0x3ceda4 = 'no', _0x5cd587 = 0x0), console['log'](_0x5cb70e() + '\x20[' + _0x20223a['name'] + ']\x20Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
            'function': async function (_0x4ae7f4, _0x1662f4, _0x452543) {
                _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x46692f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x363d15 = 0x0; _0x363d15 < _0x1662f4['length']; _0x363d15++) {
                    var _0x322be1;
                    if (_0x5583e8 != 'yes')
                        var _0x5583e8 = '', _0x50acd2 = 0x0;
                    var _0x107d73 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0xdd153c
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x1662f4[_0x363d15]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x1662f4[_0x363d15]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x46692f['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x485d74
                            }
                        ]
                    }], _0x5547b1 = await _0x3f9534(_0x1662f4[_0x363d15], _0x4ae7f4, 'dev', ![]), _0x50adf3 = await _0x3f9534(_0x1662f4[_0x363d15], _0x4ae7f4, 'pub', ![]);
                    const _0x26afd9 = {
                        'succesDEVMSG': { 'embeds': [_0x5547b1] },
                        'succesPUBMSG': { 'embeds': [_0x50adf3] }
                    }, _0x3d9bcd = { 'embeds': _0x107d73 };
                    try {
                        await _0x498738(_0x1662f4, _0x363d15);
                    } catch {
                        _0x5583e8 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x1662f4[_0x363d15]['Email'] == '' || _0x1662f4[_0x363d15]['FirstName'] == '' || _0x1662f4[_0x363d15]['LastName'] == '' || _0x1662f4[_0x363d15]['Country'] == '' || _0x1662f4[_0x363d15]['Size'] == '' || _0x1662f4[_0x363d15]['Address1'] == '' || _0x1662f4[_0x363d15]['Zip'] == '') {
                        console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1662f4[_0x363d15]['Email'] == '' || _0x1662f4[_0x363d15]['FirstName'] == '' || _0x1662f4[_0x363d15]['LastName'] == '' || _0x1662f4[_0x363d15]['Country'] == '' || _0x1662f4[_0x363d15]['Size'] == '' || _0x1662f4[_0x363d15]['Address1'] == '' || _0x1662f4[_0x363d15]['Zip'] == '' || _0x1662f4[_0x363d15]['Phone'] == '') {
                        console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x436cbb = '' + _0x1662f4[_0x363d15]['Url'];
                    if (_0x46692f['useRandomProxy'] = ![])
                        var _0x342f58 = _0x452543[_0x363d15]['split'](':');
                    else
                        var _0x1a5c15 = Math['round'](Math['random']() * (_0x452543['length'] - 0x1)), _0x342f58 = _0x452543[_0x1a5c15]['split'](':');
                    var _0x21686e;
                    try {
                        _0x21686e = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x342f58[0x0] + ':' + _0x342f58[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x21686e = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x342f58[0x0] + ':' + _0x342f58[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2dccd = await _0x21686e['newPage']();
                        await _0x2dccd['authenticate']({
                            'username': '' + _0x342f58[0x2],
                            'password': '' + _0x342f58[0x3]
                        }), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2dccd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2dccd['setRequestInterception'](!![]), _0x2dccd['on']('request', _0x33da8d => {
                            _0x33da8d['resourceType']() === 'image' || _0x33da8d['resourceType']() === 'font' || _0x33da8d['resourceType']() === 'media' ? _0x33da8d['abort']() : _0x33da8d['continue']();
                        });
                        try {
                            await _0x2dccd['goto'](_0x436cbb), await _0x3760ea(0xbb8), await _0x2dccd['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2dccd['click']('.control__JhutY'), await _0x3760ea(0x1f4);
                        if (_0x1662f4[_0x363d15]['Size'] != 'RANDOM')
                            try {
                                const _0x29ce29 = await _0x2dccd['$x']('//div[contains(text(),\x20\x27' + _0x1662f4[_0x363d15]['Size'] + '\x27)]');
                                await _0x29ce29[0x0]['click']();
                            } catch {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x341cc2 = await _0x2dccd['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x31aeba = Math['round'](Math['random']() * (_0x341cc2['length'] - 0x1));
                            await _0x341cc2[_0x31aeba]['click']();
                        }
                        await _0x3760ea(0x4b0);
                        const _0x4269ea = await _0x2dccd['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4269ea[0x0]['click'](), await _0x2dccd['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2dccd['type']('input[name=\x22email\x22]', '' + _0x1662f4[_0x363d15]['Email']), await _0x3760ea(0x640), await _0x2dccd['type']('input[name=\x22phone\x22]', '' + _0x1662f4[_0x363d15]['Phone']), await _0x3760ea(0x4b0), await _0x2dccd['click']('button.btn.continue-button__1RtsS'), await _0x3760ea(0x4b0);
                        try {
                            await _0x2dccd['type']('input[name=\x22firstName\x22]', '' + _0x1662f4[_0x363d15]['FirstName']), await _0x3760ea(0x258);
                        } catch {
                            const _0x56b7dd = await _0x2dccd['$$eval']('.invalid-feedback\x20>\x20div', _0xf40b6e => {
                                return _0xf40b6e['map'](_0x12cdd5 => _0x12cdd5['innerText']);
                            });
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20' + _0x56b7dd));
                            continue;
                        }
                        await _0x2dccd['type']('input[name=\x22lastName\x22]', '' + _0x1662f4[_0x363d15]['LastName']), await _0x3760ea(0xc8), await _0x2dccd['type']('input[name=\x22instagramUsername\x22]', '' + _0x1662f4[_0x363d15]['Follower']), await _0x3760ea(0x4b0), await _0x2dccd['click']('button.btn.continue-button__1RtsS'), await _0x3760ea(0x3e8), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2dccd['select']('select[name=\x22country\x22]', '' + _0x1662f4[_0x363d15]['Country']), await _0x3760ea(0x2bc), await _0x2dccd['type']('input[name=\x22streetName\x22]', '' + _0x1662f4[_0x363d15]['Address1']), await _0x3760ea(0x258), await _0x2dccd['type']('input[name=\x22houseNumber\x22]', _0x1662f4[_0x363d15]['HouseNumber'] + '\x20' + _0x1662f4[_0x363d15]['Address2']), await _0x3760ea(0xc8), await _0x2dccd['type']('input[name=\x22postalCode\x22]', '' + _0x1662f4[_0x363d15]['Zip']), await _0x3760ea(0x1f4), await _0x2dccd['type']('input[name=\x22city\x22]', '' + _0x1662f4[_0x363d15]['City']), await _0x3760ea(0x4b0), await _0x2dccd['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x3760ea(0x4b0), await _0x2dccd['click']('button.btn.continue-button__1RtsS'), await _0x3760ea(0x4b0), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2dccd['solveRecaptchas'](), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x3760ea(0xbb8), await _0x2dccd['click']('button.btn.continue-button__1RtsS'), await _0x3760ea(0x1388), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2dccd['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2dccd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3760ea(0x4b0), await _0x2dccd['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1662f4[_0x363d15]['CardNumber']), await _0x3760ea(0x320), await _0x2dccd['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2dccd['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1662f4[_0x363d15]['ExpiryDate']), await _0x3760ea(0x4b0), await _0x2dccd['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2dccd['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1662f4[_0x363d15]['CVV']), await _0x3760ea(0x226), await _0x2dccd['type']('input[name=\x22holderName\x22]', '' + _0x1662f4[_0x363d15]['NameOnCard']), await _0x3760ea(0x226), await _0x2dccd['click']('button.adyen-checkout__button'), console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2dccd['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x3760ea(0xbb8);
                        } catch (_0xde544f) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x203DS\x20Failed')), _0x322be1 = '3DS\x20Error\x20' + _0xde544f;
                            var _0x40a7d4 = await _0x3f9534(_0x1662f4[_0x363d15], _0x4ae7f4, 'dev', !![], _0x322be1);
                            _0x26afd9['errorDEV'] = { 'embeds': [_0x40a7d4] };
                            _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x26afd9['errorDEV']);
                            await _0x2eb6d8(_0xbd6622, _0x26afd9['errorDEV']);
                            continue;
                        }
                        _0xd99376(_0x1662f4[_0x363d15], _0x4ae7f4), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                            try {
                                await _0x2eb6d8(_0x46692f['webhook'], _0x26afd9['succesDEVMSG']);
                            } catch {
                            }
                        await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x26afd9['succesDEVMSG']), await _0x3760ea(0xc8);
                        try {
                            await _0x2eb6d8(_0x1998ad, _0x26afd9['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x514f42) {
                        console['log'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20' + _0x514f42), _0x322be1 = '' + _0x514f42;
                        var _0x40a7d4 = await _0x3f9534(_0x1662f4[_0x363d15], _0x4ae7f4, 'dev', !![], _0x322be1);
                        _0x26afd9['errorDEV'] = { 'embeds': [_0x40a7d4] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x26afd9['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x26afd9['errorDEV']), _0x5583e8 = 'yes';
                    } finally {
                        _0x21686e['close']();
                        if (_0x5583e8 == 'yes' && _0x50acd2 != 0x5) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x4ae7f4['name'] + ']\x20Task\x20' + (_0x363d15 + 0x1) + '\x20:\x20Retrying\x20(' + _0x50acd2 + '\x20/\x205)')), _0x363d15 = _0x363d15 - 0x1, _0x50acd2 = _0x50acd2 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x46692f['footshopDelay'] + '\x20ms'), await _0x3760ea(_0x46692f['footshopDelay']);
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
            'function': async function (_0x3fface, _0xea29d3, _0x25fdda) {
                var _0x3fc410 = ![], _0x400155 = ![];
                if (_0x46692f['captchaKey'] == '' || _0x46692f['captchaKey'] == undefined)
                    return console['log'](_0x5c34ff['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x46692f['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3134d6 = 0x0; _0x3134d6 < _0xea29d3['length']; _0x3134d6++) {
                    if (_0x6ae15e != 'yes')
                        var _0x6ae15e = '', _0x340371 = 0x0;
                    var _0x585bda, _0x7bf671 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xea29d3[_0x3134d6]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xea29d3[_0x3134d6]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0xdd153c
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x46692f['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x485d74
                            }
                        ]
                    }];
                    const _0xba6371 = { 'embeds': _0x7bf671 };
                    _0x5f1b8a(_0x3fface['name'] + '\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20/\x20' + _0xea29d3['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                    try {
                        await _0x498738(_0xea29d3, _0x3134d6);
                    } catch {
                        _0x6ae15e = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2377b0 = await _0x3f9534(_0xea29d3[_0x3134d6], _0x3fface, 'dev', ![]), _0x4db336 = await _0x3f9534(_0xea29d3[_0x3134d6], _0x3fface, 'pub', ![]);
                    const _0x55af2e = {
                        'succesDEVMSG': { 'embeds': [_0x2377b0] },
                        'succesPUBMSG': { 'embeds': [_0x4db336] }
                    };
                    if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                        try {
                            await _0x2eb6d8(_0x46692f['webhook'], _0x55af2e['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x55af2e['succesDEVMSG']), await _0x3760ea(0xc8);
                    try {
                        await _0x2eb6d8(_0x1998ad, _0x55af2e['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xea29d3[_0x3134d6]['Email'] == '' || _0xea29d3[_0x3134d6]['Url'] == '' || _0xea29d3[_0x3134d6]['FirstName'] == '' || _0xea29d3[_0x3134d6]['LastName'] == '') {
                        console['log'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x46692f['useRandomProxy'] = ![])
                        var _0x107663 = _0x25fdda[_0x3134d6]['split'](':');
                    else
                        var _0x412224 = Math['round'](Math['random']() * (_0x25fdda['length'] - 0x1)), _0x107663 = _0x25fdda[_0x412224]['split'](':');
                    var _0x145312;
                    try {
                        _0x145312 = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x107663[0x0] + ':' + _0x107663[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x145312 = await _0x295ab7['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x107663[0x0] + ':' + _0x107663[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x3a2b54 = await _0x145312['newPage']();
                        await _0x3a2b54['authenticate']({
                            'username': '' + _0x107663[0x2],
                            'password': '' + _0x107663[0x3]
                        }), console['log'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a2b54['setRequestInterception'](!![]), _0x3a2b54['on']('request', _0x48afcf => {
                            _0x48afcf['resourceType']() === 'image' || _0x48afcf['resourceType']() === 'font' || _0x48afcf['resourceType']() === 'media' ? _0x48afcf['abort']() : _0x48afcf['continue']();
                        });
                        try {
                            await _0x3a2b54['goto']('' + _0xea29d3[_0x3134d6]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x3a2b54['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3a2b54['type']('#comp_firstname', '' + _0xea29d3[_0x3134d6]['FirstName']), await _0x3a2b54['waitForSelector']('#comp_lastname'), await _0x3a2b54['type']('#comp_lastname', '' + _0xea29d3[_0x3134d6]['LastName']), await _0x3a2b54['waitForSelector']('#comp_email'), await _0x3a2b54['type']('#comp_email', '' + _0xea29d3[_0x3134d6]['Email']), await _0x3a2b54['waitForSelector']('#comp_paypalemail'), await _0x3a2b54['type']('#comp_paypalemail', '' + _0xea29d3[_0x3134d6]['Email']), await _0x3a2b54['waitForSelector']('#comp_mobile_end'), await _0x3a2b54['type']('#comp_mobile_end', '' + _0xea29d3[_0x3134d6]['Phone']), await _0x3a2b54['waitForSelector']('#comp_dob'), await _0x3a2b54['type']('#comp_dob', '08/09/1992'), console['log'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xea29d3[_0x3134d6]['Size'] == 'RANDOM') {
                            const _0x3c924d = await _0x3a2b54['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x36ecfd => {
                                return _0x36ecfd['map'](_0x5cca51 => _0x5cca51['value']);
                            });
                            var _0x5c6057 = Math['round'](Math['random']() * (_0x3c924d['length'] - 0x2));
                            await _0x3a2b54['select']('#shoesize', _0x3c924d[_0x5c6057 + 0x1]), await _0x3760ea(0x3e8);
                        } else {
                            const _0x28125d = await _0x3a2b54['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1938e6 => {
                                return _0x1938e6['map'](_0x184ca5 => _0x184ca5['innerText']);
                            }), _0x3a2b79 = await _0x3a2b54['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xff9291 => {
                                return _0xff9291['map'](_0x163122 => _0x163122['value']);
                            });
                            var _0x13ecb1 = _0xea29d3[_0x3134d6]['Size'];
                            for (var _0x3a4f44 = 0x1; _0x3a4f44 < _0x3a2b79['length']; _0x3a4f44++) {
                                var _0x66bc77 = _0x28125d[_0x3a4f44]['split']('\x20')[0x0];
                                if (_0x66bc77 == _0x13ecb1) {
                                    await _0x3a2b54['select']('#shoesize', _0x3a2b79[_0x3a4f44]);
                                    break;
                                } else {
                                    if (_0x3a4f44 + 0x1 == _0x3a2b79['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x3a2b54['waitForSelector']('#comp_address1'), await _0x3a2b54['type']('#comp_address1', _0xea29d3[_0x3134d6]['Address1'] + '\x20' + _0xea29d3[_0x3134d6]['HouseNumber']), await _0x3a2b54['waitForSelector']('#comp_address2'), await _0x3a2b54['type']('#comp_address2', '' + _0xea29d3[_0x3134d6]['Address2']), await _0x3a2b54['waitForSelector']('#comp_address2'), await _0x3a2b54['type']('#comp_address3', '' + _0xea29d3[_0x3134d6]['City']), await _0x3a2b54['waitForSelector']('#comp_postcode'), await _0x3a2b54['type']('#comp_postcode', '' + _0xea29d3[_0x3134d6]['Zip']), console['log'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3760ea(0x4b0), await _0x3a2b54['click']('label#emailhold'), await _0x3760ea(0x5dc), await _0x3a2b54['click']('#preauth_tandc_email\x20>\x20label'), await _0x3760ea(0x5dc), await _0x3a2b54['click']('#submit');
                        try {
                            await _0x3a2b54['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20' + _0x5c34ff['blue']('Awaiting\x20Paypal\x20Payment')), _0x145312['on']('targetcreated', async _0x3f2c52 => {
                            if (_0x3f2c52['type']() === 'page') {
                                const _0x386e3c = await _0x3f2c52['page']();
                                async function _0x1e9a89() {
                                    try {
                                        await _0x3a2b54['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x400155 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x3c19a9() {
                                    try {
                                        await _0x3a2b54['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3fc410 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x3c19a9(), _0x1e9a89(), await _0x3760ea(0x493e0);
                            }
                        });
                        async function _0x22180a() {
                            for (let _0x5de0c5 = 0x0; _0x5de0c5 < 0x12c; _0x5de0c5++) {
                                if (_0x3fc410 == !![]) {
                                    _0x6ae15e = 'no', _0xd99376(_0xea29d3[_0x3134d6], _0x3fface), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                        try {
                                            await _0x2eb6d8(_0x46692f['webhook'], _0x55af2e['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x55af2e['succesDEVMSG']), await _0x3760ea(0xc8);
                                    try {
                                        await _0x2eb6d8(_0x1998ad, _0x55af2e['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x400155)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x3760ea(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x3760ea(0xbb8), await _0x3a2b54['click']('.zoid-outlet'), await _0x3760ea(0x7d0), await _0x22180a();
                    } catch (_0x412b77) {
                        console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20' + _0x412b77)), _0x585bda = '' + _0x412b77;
                        var _0x399225 = await _0x3f9534(_0xea29d3[_0x3134d6], _0x3fface, 'dev', !![], _0x585bda);
                        _0x55af2e['errorDEV'] = { 'embeds': [_0x399225] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x55af2e['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x55af2e['errorDEV']);
                    } finally {
                        _0x145312 && _0x145312['close']();
                        if (_0x6ae15e == 'yes' && _0x340371 != 0x5 && _0x585bda != 'Size\x20Not\x20Found') {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3fface['name'] + ']\x20Task\x20' + (_0x3134d6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x340371 + '\x20/\x205)')), _0x3134d6 = _0x3134d6 - 0x1, _0x340371 = _0x340371 + 0x1;
                            continue;
                        }
                        _0x6ae15e == 'yes' && _0x340371 >= 0x5 && (_0x39d99b(afew[_0x3134d6], _0x3fface), _0x6ae15e = 'no', _0x340371 = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
                'function': async function (_0x2282d2, _0x442f4e, _0x5606f8) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e6946 = 0x0; _0x3e6946 < _0x442f4e['length']; _0x3e6946++) {
                        const _0x1205fc = 'https://www.kickz.com/login';
                        if (_0xa12d6 != 'yes')
                            var _0xa12d6 = '', _0x567a0d = 0x0;
                        _0x5f1b8a(_0x2282d2['name'] + '\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20/\x20' + _0x442f4e['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        try {
                            await _0x498738(_0x442f4e, _0x3e6946);
                        } catch {
                            _0xa12d6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x597fa6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdd153c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x46692f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x485d74
                                }
                            ]
                        }];
                        const _0x3dc58d = { 'embeds': _0x597fa6 };
                        var _0x189f59 = await _0x3f9534(_0x442f4e[_0x3e6946], _0x2282d2, 'acc', ![]);
                        const _0x349fa6 = { 'succesDEVMSG': { 'embeds': [_0x189f59] } };
                        if (_0x442f4e[_0x3e6946]['Email'] == '' || _0x442f4e[_0x3e6946]['FirstName'] == '' || _0x442f4e[_0x3e6946]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x442f4e[_0x3e6946]['Password'] == '' && (_0x442f4e[_0x3e6946]['Password'] = 'JRaffles23!');
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x28b74e = _0x5606f8[_0x3e6946]['split'](':');
                        else
                            var _0x14a11a = Math['round'](Math['random']() * (_0x5606f8['length'] - 0x1)), _0x28b74e = _0x5606f8[_0x14a11a]['split'](':');
                        var _0x5e3afa;
                        try {
                            _0x5e3afa = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28b74e[0x0] + ':' + _0x28b74e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e3afa = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28b74e[0x0] + ':' + _0x28b74e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbdaf40 = await _0x5e3afa['newPage']();
                            await _0xbdaf40['authenticate']({
                                'username': '' + _0x28b74e[0x2],
                                'password': '' + _0x28b74e[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbdaf40['setRequestInterception'](!![]), _0xbdaf40['on']('request', _0x500181 => {
                                _0x500181['resourceType']() === 'image' || _0x500181['resourceType']() === 'font' || _0x500181['resourceType']() === 'media' ? _0x500181['abort']() : _0x500181['continue']();
                            }), await _0xbdaf40['goto'](_0x1205fc), await _0x3760ea(0xbb8), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xbdaf40['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbdaf40['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbdaf40['waitForSelector']('#button-register'), await _0x3760ea(0x7d0), await _0xbdaf40['evaluate'](() => {
                                const _0x5726e6 = document['querySelector']('#button-register');
                                _0x5726e6['click']();
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3760ea(0x1388), await _0xbdaf40['waitForSelector']('#customer_salutation'), await _0xbdaf40['select']('#customer_salutation', 'mr'), await _0x3760ea(0x7d0), await _0xbdaf40['waitForSelector']('#customer_firstname'), await _0xbdaf40['type']('#customer_firstname', '' + _0x442f4e[_0x3e6946]['FirstName']), await _0x3760ea(0x352), await _0xbdaf40['waitForSelector']('#customer_lastname'), await _0xbdaf40['type']('#customer_lastname', '' + _0x442f4e[_0x3e6946]['LastName']), await _0x3760ea(0x352), await _0xbdaf40['type']('#email-input', '' + _0x442f4e[_0x3e6946]['Email']), await _0x3760ea(0x352), await _0xbdaf40['type']('#email-confirm-input', '' + _0x442f4e[_0x3e6946]['Email']), await _0x3760ea(0x352), await _0xbdaf40['type']('#register-password', '' + _0x442f4e[_0x3e6946]['Password']), await _0x3760ea(0x352), await _0xbdaf40['type']('#password-confirm', '' + _0x442f4e[_0x3e6946]['Password']), await _0x3760ea(0x352), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xbdaf40['click']('#consent'), await _0x3760ea(0x1f4);
                            const _0x60bab2 = await _0xbdaf40['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x60bab2) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0xbdaf40['click']('#buttonRegister');
                            try {
                                await _0xbdaf40['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x442f4e[_0x3e6946]['Email']), await _0x3760ea(0x4b0);
                            async function _0x5cfaa7() {
                                var _0x1fa984, _0x2925c6 = ![];
                                for (var _0x51f384 = 0x0; _0x51f384 < 0x18; _0x51f384++) {
                                    async function _0x35891() {
                                        var _0x19f5b0 = new _0x413c3({
                                            'user': _0x46692f['masterMail'],
                                            'password': _0x46692f['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5bada3(_0x3d0f9e) {
                                            _0x19f5b0['openBox']('INBOX', ![], _0x3d0f9e);
                                        }
                                        _0x19f5b0['once']('ready', function () {
                                            console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5bada3(function (_0x28cdbf, _0x52ac8b) {
                                                console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x28cdbf)
                                                    throw _0x28cdbf;
                                                _0x19f5b0['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x32b539, _0xcf283f) {
                                                    if (!_0xcf283f || !_0xcf283f['length'])
                                                        console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x19f5b0['end']();
                                                    else {
                                                        var _0xde05a3 = _0x19f5b0['seq']['fetch'](_0xcf283f, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xde05a3['on']('message', function (_0x1780cf, _0x16a72a) {
                                                            var _0x3e815f = '(#' + _0x16a72a + ')\x20';
                                                            _0x1780cf['on']('body', function (_0x485dbb, _0x1a9107) {
                                                                _0x4b8d3b(_0x485dbb, (_0x374bca, _0x3445c8) => {
                                                                    if (_0x3445c8['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x396492 = _0x3445c8['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xdddfe1 = _0x396492[0x1]['split']('<')[0x0];
                                                                        _0x1fa984 = _0xdddfe1;
                                                                    }
                                                                });
                                                            }), _0x1780cf['once']('end', function () {
                                                            });
                                                        }), _0xde05a3['once']('error', function (_0x4af738) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xde05a3['once']('end', function () {
                                                            _0x19f5b0['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x19f5b0['once']('error', function (_0x5d8591) {
                                            console['log'](_0x5c34ff['red'](_0x5d8591['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2925c6 = !![];
                                        }), _0x19f5b0['once']('end', async function () {
                                        }), _0x19f5b0['connect']();
                                    }
                                    _0x35891(), await _0x3760ea(0x1388);
                                    if (_0x1fa984)
                                        return _0x1fa984;
                                    if (_0x2925c6)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x51f384 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5cfaa7(), _0x3760ea(0x320), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Verifying..'), await _0xbdaf40['type']('#verificationCode', code), await _0x3760ea(0x1f4), await _0xbdaf40['click']('#buttonVerify'), await _0x3760ea(0x190), await _0xbdaf40['click']('#buttonVerify'), await _0x3760ea(0x3e8);
                            try {
                                await _0xbdaf40['waitForSelector']('div.b-user_greeting'), _0xa12d6 = 'no', console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Account\x20' + _0x442f4e[_0x3e6946]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x40baed['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x442f4e[_0x3e6946]['Email'] + ',' + _0x442f4e[_0x3e6946]['Password'] + ','), console['log'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Account\x20' + _0x442f4e[_0x3e6946]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x349fa6['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2eb6d8(_0x5ac7d4, _0x349fa6['succesDEVMSG']);
                            } catch {
                                _0xa12d6 = 'no', console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x267bec) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20' + _0x267bec)), _0x597fa6[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x597fa6[0x0]['description'] = '' + _0x267bec, await _0x2eb6d8(_0xbd6622, _0x3dc58d), _0xa12d6 = 'yes';
                        } finally {
                            _0x5e3afa && _0x5e3afa['close']();
                            if (_0xa12d6 == 'yes' && _0x567a0d != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x2282d2['name'] + ']\x20Task\x20' + (_0x3e6946 + 0x1) + '\x20:\x20Retrying\x20(' + _0x567a0d + '\x20/\x205)')), _0x3e6946 = _0x3e6946 - 0x1, _0x567a0d = _0x567a0d + 0x1;
                                continue;
                            }
                            _0xa12d6 == 'yes' && _0x567a0d >= 0x5 && (_0x39d99b(_0x442f4e[_0x3e6946], _0x2282d2), _0xa12d6 = 'no', _0x567a0d = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x69be57, _0x27d92b, _0x239596) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1c2195 = 0x0; _0x1c2195 < _0x27d92b['length']; _0x1c2195++) {
                        var _0x34a2e8;
                        if (_0x2731d3 != 'yes')
                            var _0x2731d3 = '', _0x44d51f = 0x0;
                        _0x5f1b8a(_0x69be57['name'] + '\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20/\x20' + _0x27d92b['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        var _0x5f953b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdd153c
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x27d92b[_0x1c2195]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x27d92b[_0x1c2195]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x46692f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x485d74
                                }
                            ]
                        }], _0x718ac0 = await _0x3f9534(_0x27d92b[_0x1c2195], _0x69be57, 'dev', ![]), _0x22e7d9 = await _0x3f9534(_0x27d92b[_0x1c2195], _0x69be57, 'pub', ![]);
                        const _0x33949e = {
                            'succesDEVMSG': { 'embeds': [_0x718ac0] },
                            'succesPUBMSG': { 'embeds': [_0x22e7d9] }
                        };
                        try {
                            await _0x498738(_0x27d92b, _0x1c2195);
                        } catch {
                            _0x2731d3 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x27d92b[_0x1c2195]['Email'] == '' || _0x27d92b[_0x1c2195]['Password'] == '' || _0x27d92b[_0x1c2195]['FirstName'] == '' || _0x27d92b[_0x1c2195]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x3ff622 = _0x239596[_0x1c2195]['split'](':');
                        else
                            var _0x9ed81b = Math['round'](Math['random']() * (_0x239596['length'] - 0x1)), _0x3ff622 = _0x239596[_0x9ed81b]['split'](':');
                        var _0x2402f2;
                        try {
                            _0x2402f2 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ff622[0x0] + ':' + _0x3ff622[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2402f2 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ff622[0x0] + ':' + _0x3ff622[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x101e2c = await _0x2402f2['newPage']();
                            await _0x101e2c['authenticate']({
                                'username': '' + _0x3ff622[0x2],
                                'password': '' + _0x3ff622[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x101e2c['setRequestInterception'](!![]), _0x101e2c['on']('request', _0x18b74a => {
                                _0x18b74a['resourceType']() === 'image' || _0x18b74a['resourceType']() === 'font' || _0x18b74a['resourceType']() === 'media' ? _0x18b74a['abort']() : _0x18b74a['continue']();
                            }), await _0x101e2c['goto']('' + _0x27d92b[_0x1c2195]['Url'], { 'waitUntil': 'networkidle2' }), await _0x3760ea(0x12c);
                            try {
                                await _0x101e2c['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x101e2c['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Logging\x20in'), await _0x101e2c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x101e2c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x101e2c['waitForSelector']('#username'), await _0x101e2c['type']('#username', _0x27d92b[_0x1c2195]['Email']), await _0x101e2c['waitForSelector']('#password'), await _0x101e2c['type']('#password', _0x27d92b[_0x1c2195]['Password']), await _0x3760ea(0x190), await _0x101e2c['click']('#buttonSubmit'), await _0x101e2c['waitForSelector']('div.b-user_greeting'), console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x3760ea(0x1f4), await _0x101e2c['goto']('' + _0x27d92b[_0x1c2195]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x27d92b[_0x1c2195]['Size']);
                            let _0xbf3ca9 = _0x27d92b[_0x1c2195]['Size']['replace']('.5', '\x201/2');
                            await _0x101e2c['click']('button[title=\x22' + _0xbf3ca9 + '\x22]'), await _0x3760ea(0x1f4);
                            try {
                                await _0x101e2c['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x3760ea(0x12c), console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x101e2c['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_firstName', _0x27d92b[_0x1c2195]['FirstName']), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_lastName', _0x27d92b[_0x1c2195]['LastName']), await _0x3760ea(0x12c), await _0x101e2c['select']('#dwfrm_raffle_addressFields_country', _0x27d92b[_0x1c2195]['Country']), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_city', _0x27d92b[_0x1c2195]['City']), await _0x3760ea(0x12c);
                            _0x27d92b[_0x1c2195]['Postcode'] == undefined && (_0x27d92b[_0x1c2195]['Postcode'] = _0x27d92b[_0x1c2195]['Zip']);
                            await _0x101e2c['type']('#dwfrm_raffle_addressFields_postalCode', _0x27d92b[_0x1c2195]['Postcode']), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_address1', _0x27d92b[_0x1c2195]['Address1']), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_address2', _0x27d92b[_0x1c2195]['HouseNumber']), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x27d92b[_0x1c2195]['Address2']), await _0x3760ea(0x12c), await _0x101e2c['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x3760ea(0x12c), await _0x101e2c['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x27d92b[_0x1c2195]['Follower']), await _0x3760ea(0x1f4), await _0x101e2c['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x3760ea(0x1f4), console['log'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20' + _0x5c34ff['blue']('Awaiting\x20Paypal\x20Payment')), await _0x101e2c['click']('.b-paypal_button');
                            try {
                                await _0x101e2c['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2731d3 = 'no', _0xd99376(_0x27d92b[_0x1c2195], _0x69be57), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x33949e['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x33949e['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0x33949e['succesPUBMSG']);
                            } catch (_0x516454) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x516454)), _0x34a2e8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x516454;
                                var _0x6dace0 = await _0x3f9534(_0x27d92b[_0x1c2195], _0x69be57, 'dev', !![], _0x34a2e8);
                                _0x33949e['errorDEV'] = { 'embeds': [_0x6dace0] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x33949e['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x33949e['errorDEV']);
                            }
                        } catch (_0x3910b0) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20' + _0x3910b0)), _0x34a2e8 = '' + _0x3910b0;
                            var _0x6dace0 = await _0x3f9534(_0x27d92b[_0x1c2195], _0x69be57, 'dev', !![], _0x34a2e8);
                            _0x33949e['errorDEV'] = { 'embeds': [_0x6dace0] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x33949e['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x33949e['errorDEV']), _0x2731d3 = 'yes';
                        } finally {
                            _0x2402f2 && _0x2402f2['close']();
                            if (_0x2731d3 == 'yes' && _0x44d51f != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x69be57['name'] + ']\x20Task\x20' + (_0x1c2195 + 0x1) + '\x20:\x20Retrying\x20(' + _0x44d51f + '\x20/\x205)')), _0x1c2195 = _0x1c2195 - 0x1, _0x44d51f = _0x44d51f + 0x1;
                                continue;
                            }
                            _0x2731d3 == 'yes' && _0x44d51f >= 0x5 && (_0x39d99b(_0x27d92b[_0x1c2195], _0x69be57), _0x2731d3 = 'no', _0x44d51f = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['AfewDelay'] + '\x20ms'), await _0x3760ea(_0x46692f['AfewDelay']);
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
                'function': async function (_0x3fc035, _0x2ca0e1, _0x432578) {
                    for (var _0x85ea3f = 0x0; _0x85ea3f < _0x2ca0e1['length']; _0x85ea3f++) {
                        try {
                            await _0x498738(_0x2ca0e1, _0x85ea3f);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2ee74b(_0xf574c7, _0xaf62b5, _0x146495, _0x11298f, _0x395b93) {
                            var _0xb97eae, _0xeb463c = {}, _0x22040f = [], _0x3b1df5 = {}, _0x572157 = [
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
                            ], _0x1ef969 = Math['round'](Math['random']() * (_0x572157['length'] - 0x1));
                            !_0x11298f && (_0x11298f = {});
                            if (_0xaf62b5 != 'ver') {
                                _0x5f1b8a(_0x146495['name'] + '\x20Task\x20' + (_0xf574c7 + 0x1) + '\x20/\x20' + _0x11298f['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c), await _0x498738(_0x11298f, _0xf574c7), _0xeb463c = _0x146495['data'], _0xeb463c['data']['attributes']['email'] = '' + _0x11298f[_0xf574c7]['Email'];
                                if (_0x11298f[_0xf574c7]['Size'] == 'RANDOM') {
                                }
                                _0xeb463c['data']['attributes']['properties']['$first_name'] = '' + _0x11298f[_0xf574c7]['FirstName'], _0xeb463c['data']['attributes']['properties']['$last_name'] = '' + _0x11298f[_0xf574c7]['LastName'], _0xeb463c['data']['attributes']['properties']['$address1'] = _0x11298f[_0xf574c7]['Address1'] + '\x20' + _0x11298f[_0xf574c7]['Address2'] + '\x20' + _0x11298f[_0xf574c7]['HouseNumber'], _0xeb463c['data']['attributes']['properties']['$zip'] = '' + _0x11298f[_0xf574c7]['Zip'], _0xeb463c['data']['attributes']['properties']['$city'] = '' + _0x11298f[_0xf574c7]['City'], _0xeb463c['data']['attributes']['properties']['$country'] = '' + _0x11298f[_0xf574c7]['Country'], _0x11298f[_0xf574c7]['Size'] == 'RANDOM' ? _0xeb463c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x572157[_0x1ef969] : _0xeb463c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x11298f[_0xf574c7]['Size'], _0xeb463c['data']['attributes']['properties']['$phone_number'] = '' + _0x11298f[_0xf574c7]['Phone'], _0xeb463c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x11298f[_0xf574c7]['Follower'];
                            }
                            if (_0x46692f['useRandomProxy'] = ![])
                                var _0x7572c8 = _0x395b93[_0xf574c7]['split'](':');
                            else
                                var _0x150817 = Math['round'](Math['random']() * (_0x395b93['length'] - 0x1)), _0x7572c8 = _0x395b93[_0x150817]['split'](':');
                            var _0x1dc44a = {
                                'jar': _0x13c2f6,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x146495['url'],
                                'headers': _0x146495['headers'],
                                'body': JSON['stringify'](_0xeb463c),
                                'proxy': 'http://' + _0x7572c8[0x2] + ':' + _0x7572c8[0x3] + '@' + _0x7572c8[0x0] + ':' + _0x7572c8[0x1]
                            };
                            return _0xaf62b5 != 'ver' && (_0x1dc44a['url'] = _0x146495['url'], _0x1dc44a['headers'] = _0x146495['headers']), _0xaf62b5 == 'ver' && (_0x1dc44a['method'] = 'GET'), new Promise(function (_0x54b029, _0x3ed14d) {
                                callback = async (_0x2af455, _0x25e690, _0x50e2f7) => {
                                    if (!_0x2af455 && _0x25e690['statusCode'] == 0xca || !_0x2af455 && _0x25e690['statusCode'] == 0xc8) {
                                        if (_0xaf62b5 != 'ver') {
                                            var _0x3b5ba1 = await _0x3f9534(_0x11298f[_0xf574c7], _0x146495, 'dev', ![]), _0x3e7c94 = await _0x3f9534(_0x11298f[_0xf574c7], _0x146495, 'pub', ![]);
                                            const _0x2492b2 = {
                                                'succesDEVMSG': { 'embeds': [_0x3b5ba1] },
                                                'succesPUBMSG': { 'embeds': [_0x3e7c94] }
                                            };
                                            if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                                try {
                                                    await _0x2eb6d8(_0x46692f['webhook'], _0x2492b2['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x2492b2['succesDEVMSG']), await _0x3760ea(0xc8);
                                            try {
                                                await _0x2eb6d8(_0x1998ad, _0x2492b2['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xd99376(_0x11298f[_0xf574c7], _0x146495);
                                        }
                                        _0x54b029(console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x146495['name'] + ']\x20Task\x20' + (_0xf574c7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xaf62b5 != 'ver') {
                                            var _0x43bc67 = '' + _0x2af455, _0x48a82d = await _0x3f9534(_0x11298f[_0xf574c7], _0x146495, 'dev', !![], _0x43bc67), _0x2f59d2 = {};
                                            _0x2f59d2['errorDEV'] = { 'embeds': [_0x48a82d] }, _0x39d99b(_0x11298f[_0xf574c7], _0x146495), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x2f59d2['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x2f59d2['errorDEV']);
                                        }
                                        _0x3ed14d(console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x146495['name'] + ']\x20Task\x20' + (_0xf574c7 + 0x1) + ':\x20' + _0x2af455)));
                                    }
                                };
                                try {
                                    _0xaf62b5 != 'ver' && console['log'](_0x5cb70e() + '\x20[' + _0x146495['name'] + ']\x20Task\x20' + (_0xf574c7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xeb463c['data']['attributes']['email']), _0x46d607(_0x1dc44a, callback);
                                } catch (_0x485bbe) {
                                    console['log'](_0x5cb70e() + '\x20Task\x20' + (_0xf574c7 + 0x1) + ':\x20' + _0x485bbe);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2ee74b(_0x85ea3f, 'nor', _0x3fc035, _0x2ca0e1, _0x432578), console['log'](_0x5cb70e() + '\x20[' + _0x3fc035['name'] + ']\x20Sleeping\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        } catch (_0x36a891) {
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
                'function': async function (_0x1ac5c0, _0x1ab2b2, _0x1d0ffa) {
                    var _0x1de6e4 = [], _0x47ed39 = ![];
                    async function _0x2c6b3f() {
                        var _0x158878 = new _0x413c3({
                            'user': _0x46692f['masterMail'],
                            'password': _0x46692f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4869ac(_0x151668) {
                            _0x158878['openBox']('INBOX', ![], _0x151668);
                        }
                        _0x158878['once']('ready', function () {
                            _0x4869ac(function (_0x59e2b9, _0x2e6a60) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x59e2b9)
                                    throw _0x59e2b9;
                                _0x158878['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x4523b0, _0x4ed14b) {
                                    if (!_0x4ed14b || !_0x4ed14b['length'])
                                        console['log'](_0x5cb70e() + '\x20[' + _0x1ac5c0['name'] + ']\x20No\x20mails\x20found'), _0x158878['end']();
                                    else {
                                        var _0x5a17d1 = _0x158878['seq']['fetch'](_0x4ed14b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5a17d1['on']('message', function (_0xeb51c7, _0x5b33b1) {
                                            var _0x5682da = '(#' + _0x5b33b1 + ')\x20';
                                            _0xeb51c7['on']('body', function (_0x1aac1c, _0x18b4b0) {
                                                _0x4b8d3b(_0x1aac1c, (_0x482394, _0x5325fe) => {
                                                    var _0x86816a = _0x5325fe['text']['split']('(')[0x1], _0x82d84d = _0x86816a['split'](')')[0x0];
                                                    _0x1de6e4['push'](_0x82d84d);
                                                });
                                            }), _0xeb51c7['once']('end', function () {
                                            });
                                        }), _0x5a17d1['once']('error', function (_0xee3133) {
                                            console['log']('Fetch\x20error:\x20' + _0xee3133), _0x47ed39 = !![];
                                        }), _0x5a17d1['once']('end', function () {
                                            _0x158878['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x158878['once']('error', function (_0x350cb8) {
                            console['log'](_0x5c34ff['red'](_0x350cb8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x47ed39 = !![];
                        }), _0x158878['once']('end', async function () {
                            _0x47ed39 = !![];
                        }), _0x158878['connect']();
                    }
                    async function _0x2682f6(_0x238ec0, _0x2af0d2, _0x41e00e) {
                        for (var _0x4b23f9 = 0x0; _0x4b23f9 < _0x2af0d2['length']; _0x4b23f9++) {
                            async function _0x3c79da(_0x2dc2f6, _0x3ed19b, _0xa09b0a, _0x564f56, _0x51f5ec) {
                                var _0x3d6f64, _0x4e1f4b = {}, _0x5388f8 = [], _0x3f6f42 = {}, _0x3c05ec = [
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
                                ], _0x11a036 = Math['round'](Math['random']() * (_0x3c05ec['length'] - 0x1));
                                _0x564f56[_0x2dc2f6]['Size'] == 'RANDOM' && (_0x564f56[_0x2dc2f6]['Size'] = _0x3c05ec[_0x11a036]);
                                !_0x564f56 && (_0x564f56 = {});
                                if (_0x46692f['useRandomProxy'] = ![])
                                    var _0x282467 = _0x51f5ec[_0x2dc2f6]['split'](':');
                                else
                                    var _0x4a37f8 = Math['round'](Math['random']() * (_0x51f5ec['length'] - 0x1)), _0x282467 = _0x51f5ec[_0x4a37f8]['split'](':');
                                var _0x476b69 = {
                                    'jar': _0x13c2f6,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xa09b0a['url'],
                                    'headers': _0xa09b0a['headers'],
                                    'body': JSON['stringify'](_0x4e1f4b),
                                    'proxy': 'http://' + _0x282467[0x2] + ':' + _0x282467[0x3] + '@' + _0x282467[0x0] + ':' + _0x282467[0x1]
                                };
                                return _0x3ed19b != 'ver' && (_0x476b69['url'] = _0xa09b0a['url'], _0x476b69['headers'] = _0xa09b0a['headers']), _0x3ed19b == 'ver' && (_0x476b69['method'] = 'GET', _0x476b69['url'] = _0x564f56[_0x2dc2f6]), new Promise(function (_0x88890a, _0x46b08e) {
                                    callback = async (_0x259b2b, _0x26058a, _0x41b36e) => {
                                        if (!_0x259b2b && _0x26058a['statusCode'] == 0xca || !_0x259b2b && _0x26058a['statusCode'] == 0xc8) {
                                            if (_0x3ed19b != 'ver') {
                                                var _0x4f9f82 = await _0x3f9534(_0x564f56[_0x2dc2f6], _0xa09b0a, 'dev', ![]), _0x32d1d3 = await _0x3f9534(_0x564f56[_0x2dc2f6], _0xa09b0a, 'pub', ![]);
                                                const _0x52ba93 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4f9f82] },
                                                    'succesPUBMSG': { 'embeds': [_0x32d1d3] }
                                                };
                                                if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                                    try {
                                                        await _0x2eb6d8(_0x46692f['webhook'], _0x52ba93['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x52ba93['succesDEVMSG']), await _0x3760ea(0xc8);
                                                try {
                                                    await _0x2eb6d8(_0x1998ad, _0x52ba93['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xd99376(_0x564f56[_0x2dc2f6], _0xa09b0a);
                                            }
                                            _0x88890a(console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0xa09b0a['name'] + ']\x20Task\x20' + (_0x2dc2f6 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3ed19b != 'ver') {
                                                var _0x4e293b = '' + _0x259b2b, _0x557cfa = await _0x3f9534(_0x564f56[_0x2dc2f6], _0xa09b0a, 'dev', !![], _0x4e293b), _0x2b2daf = {};
                                                _0x2b2daf['errorDEV'] = { 'embeds': [_0x557cfa] }, _0x39d99b(_0x564f56[_0x2dc2f6], _0xa09b0a), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x2b2daf['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x2b2daf['errorDEV']);
                                            }
                                            _0x46b08e(console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0xa09b0a['name'] + ']\x20Task\x20' + (_0x2dc2f6 + 0x1) + ':\x20' + _0x259b2b)));
                                        }
                                    };
                                    try {
                                        _0x3ed19b != 'ver' ? console['log'](_0x5cb70e() + '\x20[' + _0xa09b0a['name'] + ']\x20Task\x20' + (_0x2dc2f6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4e1f4b['data']['attributes']['email']) : console['log'](_0x5cb70e() + '\x20[' + _0xa09b0a['name'] + ']\x20Task\x20' + (_0x2dc2f6 + 0x1) + ':\x20Fetching\x20Response'), _0x46d607(_0x476b69, callback);
                                    } catch (_0x5f4b7a) {
                                        console['log'](_0x5cb70e() + '\x20Task\x20' + (_0x2dc2f6 + 0x1) + ':\x20' + _0x5f4b7a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3c79da(_0x4b23f9, 'ver', _0x238ec0, _0x2af0d2, _0x41e00e), console['log'](_0x5cb70e() + '\x20[' + _0x238ec0['name'] + ']\x20Sleeping\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                            } catch (_0x5e76be) {
                            }
                        }
                    }
                    try {
                        _0x2c6b3f();
                        while (!_0x47ed39) {
                            await _0x3760ea(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1de6e4['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x3760ea(0x9c4);
                    }
                    await _0x2682f6(_0x1ac5c0, _0x1de6e4, _0x1d0ffa);
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
                'function': async function (_0x42a0d1, _0x2fc4ec, _0x15bd0d) {
                    for (var _0x1ca43e = 0x0; _0x1ca43e < _0x2fc4ec['length']; _0x1ca43e++) {
                        try {
                            await _0x498738(_0x2fc4ec, _0x1ca43e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x142278(_0x1e7182, _0x1ec953, _0x4eba45, _0xe68411, _0x4b8bc5) {
                            var _0x5096e0, _0x2e745b = {}, _0x138e64 = [], _0x52aff4 = {}, _0xdf15c7 = [
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
                            ], _0x255066 = Math['round'](Math['random']() * (_0xdf15c7['length'] - 0x1));
                            !_0xe68411 && (_0xe68411 = {});
                            if (_0x1ec953 != 'ver') {
                                _0x5f1b8a(_0x4eba45['name'] + '\x20Task\x20' + (_0x1e7182 + 0x1) + '\x20/\x20' + _0xe68411['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c), _0x138e64 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0xdd153c
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0xe68411[_0x1e7182]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x46692f['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x485d74
                                        }
                                    ]
                                }], _0x52aff4 = { 'embeds': _0x138e64 }, _0x2e745b = _0x4eba45['data'], _0x2e745b['data']['attributes']['email'] = '' + _0xe68411[_0x1e7182]['Email'];
                                if (_0xe68411[_0x1e7182]['Size'] == 'RANDOM') {
                                }
                                _0x2e745b['data']['attributes']['properties']['$first_name'] = '' + _0xe68411[_0x1e7182]['FirstName'], _0x2e745b['data']['attributes']['properties']['$last_name'] = '' + _0xe68411[_0x1e7182]['LastName'], _0x2e745b['data']['attributes']['properties']['$address1'] = _0xe68411[_0x1e7182]['Address1'] + '\x20' + _0xe68411[_0x1e7182]['Address2'] + '\x20' + _0xe68411[_0x1e7182]['HouseNumber'], _0x2e745b['data']['attributes']['properties']['$zip'] = '' + _0xe68411[_0x1e7182]['Zip'], _0x2e745b['data']['attributes']['properties']['$city'] = '' + _0xe68411[_0x1e7182]['City'], _0x2e745b['data']['attributes']['properties']['$country'] = '' + _0xe68411[_0x1e7182]['Country'], _0xe68411[_0x1e7182]['Size'] == 'RANDOM' ? _0x2e745b['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xdf15c7[_0x255066] : _0x2e745b['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xe68411[_0x1e7182]['Size'], _0x2e745b['data']['attributes']['properties']['$phone_number'] = '' + _0xe68411[_0x1e7182]['Phone'], _0x2e745b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xe68411[_0x1e7182]['Follower'];
                            }
                            if (_0x46692f['useRandomProxy'] = ![])
                                var _0xc10064 = _0x4b8bc5[_0x1e7182]['split'](':');
                            else
                                var _0x158ebf = Math['round'](Math['random']() * (_0x4b8bc5['length'] - 0x1)), _0xc10064 = _0x4b8bc5[_0x158ebf]['split'](':');
                            var _0x55574f = {
                                'jar': _0x13c2f6,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4eba45['url'],
                                'headers': _0x4eba45['headers'],
                                'body': JSON['stringify'](_0x2e745b),
                                'proxy': 'http://' + _0xc10064[0x2] + ':' + _0xc10064[0x3] + '@' + _0xc10064[0x0] + ':' + _0xc10064[0x1]
                            };
                            return _0x1ec953 != 'ver' && (_0x55574f['url'] = _0x4eba45['url'], _0x55574f['headers'] = _0x4eba45['headers']), _0x1ec953 == 'ver' && (_0x55574f['method'] = 'GET'), new Promise(function (_0x933929, _0x5e36ea) {
                                callback = async (_0xf374e5, _0x3bb1de, _0x1e0f73) => {
                                    if (!_0xf374e5 && _0x3bb1de['statusCode'] == 0xca || !_0xf374e5 && _0x3bb1de['statusCode'] == 0xc8) {
                                        if (_0x1ec953 != 'ver') {
                                            var _0x261f13 = await _0x3f9534(_0xe68411[_0x1e7182], _0x4eba45, 'dev', ![]), _0x9e2b71 = await _0x3f9534(_0xe68411[_0x1e7182], _0x4eba45, 'pub', ![]);
                                            const _0x411597 = {
                                                'succesDEVMSG': { 'embeds': [_0x261f13] },
                                                'succesPUBMSG': { 'embeds': [_0x9e2b71] }
                                            };
                                            if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                                try {
                                                    await _0x2eb6d8(_0x46692f['webhook'], _0x411597['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x411597['succesDEVMSG']), await _0x3760ea(0xc8);
                                            try {
                                                await _0x2eb6d8(_0x1998ad, _0x411597['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xd99376(_0xe68411[_0x1e7182], _0x4eba45);
                                        }
                                        _0x933929(console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x4eba45['name'] + ']\x20Task\x20' + (_0x1e7182 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1ec953 != 'ver') {
                                            var _0x5de07e = '' + _0xf374e5, _0x42779a = await _0x3f9534(_0xe68411[_0x1e7182], _0x4eba45, 'dev', !![], _0x5de07e), _0x120fd4 = {};
                                            _0x120fd4['errorDEV'] = { 'embeds': [_0x42779a] }, _0x39d99b(_0xe68411[_0x1e7182], _0x4eba45), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x120fd4['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x120fd4['errorDEV']);
                                        }
                                        _0x5e36ea(console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x4eba45['name'] + ']\x20Task\x20' + (_0x1e7182 + 0x1) + ':\x20' + _0xf374e5)));
                                    }
                                };
                                try {
                                    _0x1ec953 != 'ver' && console['log'](_0x5cb70e() + '\x20[' + _0x4eba45['name'] + ']\x20Task\x20' + (_0x1e7182 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e745b['data']['attributes']['email']), _0x46d607(_0x55574f, callback);
                                } catch (_0xafc8aa) {
                                    console['log'](_0x5cb70e() + '\x20Task\x20' + (_0x1e7182 + 0x1) + ':\x20' + _0xafc8aa);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x142278(_0x1ca43e, 'nor', _0x42a0d1, _0x2fc4ec, _0x15bd0d), console['log'](_0x5cb70e() + '\x20[' + _0x42a0d1['name'] + ']\x20Sleeping\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        } catch (_0x580b8d) {
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
                'function': async function (_0x56afe8, _0x58e97b, _0x5f102) {
                    var _0x58e97b = [], _0x4f471c = ![];
                    async function _0x12eb42() {
                        var _0x1b1261 = new _0x413c3({
                            'user': _0x46692f['masterMail'],
                            'password': _0x46692f['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x39d1e5(_0x1fa565) {
                            _0x1b1261['openBox']('INBOX', ![], _0x1fa565);
                        }
                        _0x1b1261['once']('ready', function () {
                            _0x39d1e5(function (_0x47686f, _0x42d1a9) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x47686f)
                                    throw _0x47686f;
                                _0x1b1261['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x57564, _0x8138bb) {
                                    if (!_0x8138bb || !_0x8138bb['length'])
                                        console['log'](_0x5cb70e() + '\x20[' + _0x56afe8['name'] + ']\x20No\x20mails\x20found'), _0x1b1261['end']();
                                    else {
                                        var _0x487e7f = _0x1b1261['seq']['fetch'](_0x8138bb, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x487e7f['on']('message', function (_0x172056, _0x2f7a08) {
                                            var _0x3ba2c0 = '(#' + _0x2f7a08 + ')\x20';
                                            _0x172056['on']('body', function (_0x5ac38d, _0x979afc) {
                                                _0x4b8d3b(_0x5ac38d, (_0x516625, _0x174825) => {
                                                    var _0x297d40 = _0x174825['text']['split']('(')[0x1], _0x1453b1 = _0x297d40['split'](')')[0x0];
                                                    _0x58e97b['push'](_0x1453b1);
                                                });
                                            }), _0x172056['once']('end', function () {
                                            });
                                        }), _0x487e7f['once']('error', function (_0x48e382) {
                                            console['log']('Fetch\x20error:\x20' + _0x48e382), _0x4f471c = !![];
                                        }), _0x487e7f['once']('end', function () {
                                            _0x1b1261['end'](), _0x4f471c = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1b1261['once']('error', function (_0x5daa5c) {
                            console['log'](_0x5daa5c), _0x4f471c = !![];
                        }), _0x1b1261['once']('end', async function () {
                            _0x4f471c = !![];
                        }), _0x1b1261['connect']();
                    }
                    async function _0x4a9bdd(_0xe2d5d4, _0x3a89b7, _0xdd50d9) {
                        for (var _0x46bce2 = 0x0; _0x46bce2 < _0x3a89b7['length']; _0x46bce2++) {
                            async function _0x47f710(_0x184115, _0x445a24, _0x3dee22, _0xabb829, _0x53be3f) {
                                var _0x3dc766, _0xd0104e = {}, _0x420123 = [], _0x2d48b0 = {}, _0x54579f = [
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
                                ], _0x2734ff = Math['round'](Math['random']() * (_0x54579f['length'] - 0x1));
                                _0xabb829[_0x184115]['Size'] == 'RANDOM' && (_0xabb829[_0x184115]['Size'] = _0x54579f[_0x2734ff]);
                                !_0xabb829 && (_0xabb829 = {});
                                if (_0x46692f['useRandomProxy'] = ![])
                                    var _0x3a69ee = _0x53be3f[_0x184115]['split'](':');
                                else
                                    var _0x4f7fae = Math['round'](Math['random']() * (_0x53be3f['length'] - 0x1)), _0x3a69ee = _0x53be3f[_0x4f7fae]['split'](':');
                                var _0xf267a5 = {
                                    'jar': _0x13c2f6,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3dee22['url'],
                                    'headers': _0x3dee22['headers'],
                                    'body': JSON['stringify'](_0xd0104e),
                                    'proxy': 'http://' + _0x3a69ee[0x2] + ':' + _0x3a69ee[0x3] + '@' + _0x3a69ee[0x0] + ':' + _0x3a69ee[0x1]
                                };
                                return _0x445a24 != 'ver' && (_0xf267a5['url'] = _0x3dee22['url'], _0xf267a5['headers'] = _0x3dee22['headers']), _0x445a24 == 'ver' && (_0xf267a5['method'] = 'GET', _0xf267a5['url'] = _0xabb829[_0x184115]), new Promise(function (_0x442c56, _0x37e392) {
                                    callback = async (_0x36d301, _0x46f3d0, _0x1427d4) => {
                                        if (!_0x36d301 && _0x46f3d0['statusCode'] == 0xca || !_0x36d301 && _0x46f3d0['statusCode'] == 0xc8) {
                                            if (_0x445a24 != 'ver') {
                                                var _0x193186 = await _0x3f9534(_0xabb829[_0x184115], _0x3dee22, 'dev', ![]), _0x50465b = await _0x3f9534(_0xabb829[_0x184115], _0x3dee22, 'pub', ![]);
                                                const _0x21fb95 = {
                                                    'succesDEVMSG': { 'embeds': [_0x193186] },
                                                    'succesPUBMSG': { 'embeds': [_0x50465b] }
                                                };
                                                if (_0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '')
                                                    try {
                                                        await _0x2eb6d8(_0x46692f['webhook'], _0x21fb95['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0x21fb95['succesDEVMSG']), await _0x3760ea(0xc8);
                                                try {
                                                    await _0x2eb6d8(_0x1998ad, _0x21fb95['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xd99376(_0xabb829[_0x184115], _0x3dee22);
                                            }
                                            _0x442c56(console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x3dee22['name'] + ']\x20Task\x20' + (_0x184115 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x445a24 != 'ver') {
                                                var _0x251882 = '' + _0x36d301, _0x128cb0 = await _0x3f9534(_0xabb829[_0x184115], _0x3dee22, 'dev', !![], _0x251882), _0x48d3e1 = {};
                                                _0x48d3e1['errorDEV'] = { 'embeds': [_0x128cb0] }, _0x39d99b(_0xabb829[_0x184115], _0x3dee22), _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x48d3e1['errorDEV']), await _0x2eb6d8(_0xbd6622, _0x48d3e1['errorDEV']);
                                            }
                                            _0x37e392(console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x3dee22['name'] + ']\x20Task\x20' + (_0x184115 + 0x1) + ':\x20' + _0x36d301)));
                                        }
                                    };
                                    try {
                                        _0x445a24 != 'ver' ? console['log'](_0x5cb70e() + '\x20[' + _0x3dee22['name'] + ']\x20Task\x20' + (_0x184115 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xd0104e['data']['attributes']['email']) : console['log'](_0x5cb70e() + '\x20[' + _0x3dee22['name'] + ']\x20Task\x20' + (_0x184115 + 0x1) + ':\x20Fetching\x20Response'), _0x46d607(_0xf267a5, callback);
                                    } catch (_0x49af19) {
                                        console['log'](_0x5cb70e() + '\x20Task\x20' + (_0x184115 + 0x1) + ':\x20' + _0x49af19);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x47f710(_0x46bce2, 'ver', _0xe2d5d4, _0x3a89b7, _0xdd50d9), console['log'](_0x5cb70e() + '\x20[' + _0xe2d5d4['name'] + ']\x20Sleeping\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                            } catch (_0x2e4313) {
                            }
                        }
                    }
                    try {
                        _0x12eb42();
                        while (!_0x4f471c) {
                            await _0x3760ea(0xfa0);
                        }
                        console['log']('Found\x20' + _0x58e97b['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4a9bdd(_0x56afe8, _0x58e97b, _0x5f102);
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
                'function': async function (_0x9c7c26, _0xca39eb, _0x5a7cf1) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x36aa46 = 0x0; _0x36aa46 < _0xca39eb['length']; _0x36aa46++) {
                        var _0x4bccb1 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdd153c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x46692f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x485d74
                                }
                            ]
                        }];
                        const _0x1aea75 = { 'embeds': _0x4bccb1 };
                        _0x5f1b8a(_0x9c7c26['name'] + '\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20/\x20' + _0xca39eb['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        try {
                            await _0x498738(_0xca39eb, _0x36aa46);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xf45f71 = await _0x3f9534(_0xca39eb[_0x36aa46], _0x9c7c26, 'acc', ![]);
                        const _0x443cf0 = { 'succesDEVMSG': { 'embeds': [_0xf45f71] } };
                        if (_0xca39eb[_0x36aa46]['Email'] == '' || _0xca39eb[_0x36aa46]['FirstName'] == '' || _0xca39eb[_0x36aa46]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3760ea(0x7d0);
                            continue;
                        }
                        (_0xca39eb[_0x36aa46]['Password'] == '' || _0xca39eb[_0x36aa46] == undefined) && _0xca39eb[_0x36aa46]['Password'] == 'JRaffles23!';
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x2cac2d = _0x5a7cf1[_0x36aa46]['split'](':');
                        else
                            var _0x10630b = Math['round'](Math['random']() * (_0x5a7cf1['length'] - 0x1)), _0x2cac2d = _0x5a7cf1[_0x10630b]['split'](':');
                        var _0x306b03;
                        try {
                            _0x306b03 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2cac2d[0x0] + ':' + _0x2cac2d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x306b03 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2cac2d[0x0] + ':' + _0x2cac2d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1d370e = await _0x306b03['newPage']();
                            await _0x1d370e['authenticate']({
                                'username': '' + _0x2cac2d[0x2],
                                'password': '' + _0x2cac2d[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x9c7c26['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d370e['setRequestInterception'](!![]), _0x1d370e['on']('request', _0xb996e3 => {
                                _0xb996e3['resourceType']() === 'image' || _0xb996e3['resourceType']() === 'font' || _0xb996e3['resourceType']() === 'media' ? _0xb996e3['abort']() : _0xb996e3['continue']();
                            }), await _0x1d370e['goto']('https://patta.nl/account/register'), await _0x3760ea(0xbb8), await _0x1d370e['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5cb70e() + '\x20[' + _0x9c7c26['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1d370e['type']('#RegisterForm-FirstName', '' + _0xca39eb[_0x36aa46]['FirstName']), await _0x3760ea(0x226), await _0x1d370e['type']('#RegisterForm-LastName', '' + _0xca39eb[_0x36aa46]['LastName']), await _0x3760ea(0x226), await _0x1d370e['type']('#RegisterForm-email', '' + _0xca39eb[_0x36aa46]['Email']), await _0x3760ea(0x226), await _0x1d370e['type']('#RegisterForm-password', '' + _0xca39eb[_0x36aa46]['Password']), await _0x3760ea(0x226), console['log'](_0x5cb70e() + '\x20[' + _0x9c7c26['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Submitting..'), await _0x1d370e['$eval']('#RegisterForm', _0x526994 => _0x526994['submit']()), await _0x3760ea(0x1f40);
                            try {
                                await _0x1d370e['waitForSelector']('.home-page-grid__collection'), await _0x3760ea(0x1f4), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x9c7c26['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Account\x20' + _0xca39eb[_0x36aa46]['Email'] + '\x20Generated!')), _0x40baed['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xca39eb[_0x36aa46]['Email'] + ',' + _0xca39eb[_0x36aa46]['Password']), console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x9c7c26['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Account\x20' + _0xca39eb[_0x36aa46]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x443cf0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2eb6d8(_0x5ac7d4, _0x443cf0['succesDEVMSG']);
                            } catch (_0xa63d1d) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xa63d1d));
                            }
                        } catch (_0x105dea) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x36aa46 + 0x1) + '\x20:\x20' + _0x105dea));
                        } finally {
                            _0x306b03 && _0x306b03['close'](), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x26a99c, _0x35e0e1, _0x5e9be4) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1b61b9 = 0x0; _0x1b61b9 < _0x35e0e1['length']; _0x1b61b9++) {
                        var _0x4b0dcc;
                        if (_0xed7995 != 'yes')
                            var _0xed7995 = '', _0x33d575 = 0x0;
                        _0x5f1b8a(_0x26a99c['name'] + '\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20/\x20' + _0x35e0e1['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        try {
                            await _0x498738(_0x35e0e1, _0x1b61b9);
                        } catch {
                            _0xed7995 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x35e0e1[_0x1b61b9]['Email'] == '' || _0x35e0e1[_0x1b61b9]['Password'] == '' || _0x35e0e1[_0x1b61b9]['FirstName'] == '' || _0x35e0e1[_0x1b61b9]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x75558f = _0x5e9be4[_0x1b61b9]['split'](':');
                        else
                            var _0x1ea5ba = Math['round'](Math['random']() * (_0x5e9be4['length'] - 0x1)), _0x75558f = _0x5e9be4[_0x1ea5ba]['split'](':');
                        var _0x2e21ae;
                        try {
                            _0x2e21ae = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x75558f[0x0] + ':' + _0x75558f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e21ae = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x75558f[0x0] + ':' + _0x75558f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a73ad = await _0x2e21ae['newPage']();
                            await _0x5a73ad['authenticate']({
                                'username': '' + _0x75558f[0x2],
                                'password': '' + _0x75558f[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a73ad['setRequestInterception'](!![]), _0x5a73ad['on']('request', _0x181a55 => {
                                _0x181a55['resourceType']() === 'image' || _0x181a55['resourceType']() === 'font' || _0x181a55['resourceType']() === 'media' ? _0x181a55['abort']() : _0x181a55['continue']();
                            }), await _0x5a73ad['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5a73ad['waitForSelector']('#CustomerEmail'), console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5a73ad['type']('#CustomerEmail', '' + _0x35e0e1[_0x1b61b9]['Email']), await _0x3760ea(0x12c), await _0x5a73ad['type']('#CustomerPassword', '' + _0x35e0e1[_0x1b61b9]['Password']), await _0x3760ea(0x226), await _0x5a73ad['$eval']('#customer_login', _0x5747cd => _0x5747cd['submit']());
                            try {
                                await _0x5a73ad['waitForSelector']('#orders'), await _0x3760ea(0x4b0);
                            } catch {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5a73ad['goto']('' + _0x35e0e1[_0x1b61b9]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3760ea(0xbb8), console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5a73ad['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x5a73ad['type']('#email', '' + _0x35e0e1[_0x1b61b9]['Email']), await _0x3760ea(0x384), await _0x5a73ad['type']('#first_name', '' + _0x35e0e1[_0x1b61b9]['FirstName']), await _0x3760ea(0x514), await _0x5a73ad['type']('#last_name', '' + _0x35e0e1[_0x1b61b9]['LastName']), await _0x3760ea(0x514), await _0x5a73ad['type']('#street_address', _0x35e0e1[_0x1b61b9]['Address1'] + '\x20' + _0x35e0e1[_0x1b61b9]['HouseNumber'] + '\x20' + _0x35e0e1[_0x1b61b9]['Address2']), await _0x3760ea(0x2bc);
                            _0x35e0e1[_0x1b61b9]['Postcode'] == undefined && (_0x35e0e1[_0x1b61b9]['Postcode'] = _0x35e0e1[_0x1b61b9]['Zip']);
                            await _0x5a73ad['type']('#zip_code', '' + _0x35e0e1[_0x1b61b9]['Postcode']), await _0x3760ea(0x320), await _0x5a73ad['type']('#city', '' + _0x35e0e1[_0x1b61b9]['City']), await _0x3760ea(0x320), await _0x5a73ad['type']('#bday', '01/01/1994'), await _0x3760ea(0x320), await _0x5a73ad['type']('#instagram', '' + _0x35e0e1[_0x1b61b9]['Follower']), await _0x3760ea(0x352);
                            if (_0x35e0e1[_0x1b61b9]['Size'] == 'RANDOM') {
                                const _0x3cd93d = await _0x5a73ad['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x4213af => {
                                    return _0x4213af['map'](_0x110498 => _0x110498['textContent']);
                                });
                                var _0x493274 = Math['round'](Math['random']() * (_0x3cd93d['length'] - 0x1));
                                console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x3cd93d[_0x493274]), await _0x5a73ad['click']('label[data-eu-size=\x22' + _0x3cd93d[_0x493274] + '\x22]');
                            } else {
                                console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x35e0e1[_0x1b61b9]['Size']);
                                try {
                                    await _0x5a73ad['click']('label[data-eu-size=\x22' + _0x35e0e1[_0x1b61b9]['Size'] + '\x22]');
                                } catch {
                                    await _0x5a73ad['click']('label[data-eu-size=\x22' + _0x35e0e1[_0x1b61b9]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x3760ea(0xbb8), await _0x5a73ad['$$eval']('.raffle__checkbox-label', _0x57c85a => _0x57c85a['forEach'](_0x527fad => _0x527fad['click']())), await _0x3760ea(0x7d0), console['log'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5a73ad['click']('#raffle__form-submit'), await _0x3760ea(0x1388);
                            try {
                                await _0x5a73ad['waitForSelector']('#raffle__confirmation-message-container'), _0xed7995 = 'no', _0xd99376(_0x35e0e1[_0x1b61b9], _0x26a99c), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0xc77ce7) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xc77ce7));
                            }
                        } catch (_0x2e6097) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20' + _0x2e6097)), _0xed7995 = 'yes';
                        } finally {
                            _0x2e21ae && _0x2e21ae['close']();
                            if (_0xed7995 == 'yes' && _0x33d575 != 0x5 && _0x4b0dcc != 'Size\x20Not\x20Found') {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x26a99c['name'] + ']\x20Task\x20' + (_0x1b61b9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33d575 + '\x20/\x205)')), _0x1b61b9 = _0x1b61b9 - 0x1, _0x33d575 = _0x33d575 + 0x1;
                                continue;
                            }
                            _0xed7995 == 'yes' && _0x33d575 >= 0x5 && (_0x39d99b(_0x35e0e1[_0x1b61b9], _0x26a99c), _0xed7995 = 'no', _0x33d575 = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
                'function': async function (_0x1b5361, _0x959ef4, _0x15f1b7) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4ced4e = 0x0; _0x4ced4e < _0x959ef4['length']; _0x4ced4e++) {
                        if (_0x3f8eb1 != 'yes')
                            var _0x3f8eb1 = '', _0x2cf8b2 = 0x0;
                        var _0x2e5fe3 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xdd153c
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x46692f['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x485d74
                                }
                            ]
                        }];
                        const _0x46cd35 = { 'embeds': _0x2e5fe3 };
                        _0x5f1b8a(_0x1b5361['name'] + '\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20/\x20' + _0x959ef4['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        try {
                            await _0x498738(_0x959ef4, _0x4ced4e);
                        } catch {
                            _0x3f8eb1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x50eb94 = await _0x3f9534(_0x959ef4[_0x4ced4e], _0x1b5361, 'acc', ![]);
                        const _0x4b7df2 = { 'succesDEVMSG': { 'embeds': [_0x50eb94] } };
                        if (_0x959ef4[_0x4ced4e]['Email'] == '' || _0x959ef4[_0x4ced4e]['FirstName'] == '' || _0x959ef4[_0x4ced4e]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3760ea(0x7d0);
                            continue;
                        }
                        (_0x959ef4[_0x4ced4e]['Password'] == '' || _0x959ef4[_0x4ced4e] == undefined) && _0x959ef4[_0x4ced4e]['Password'] == 'JRaffles23!';
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x2d6b0c = _0x15f1b7[_0x4ced4e]['split'](':');
                        else
                            var _0x27725b = Math['round'](Math['random']() * (_0x15f1b7['length'] - 0x1)), _0x2d6b0c = _0x15f1b7[_0x27725b]['split'](':');
                        var _0x3a73fe;
                        try {
                            _0x3a73fe = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d6b0c[0x0] + ':' + _0x2d6b0c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a73fe = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d6b0c[0x0] + ':' + _0x2d6b0c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4b9449 = await _0x3a73fe['newPage']();
                            await _0x4b9449['authenticate']({
                                'username': '' + _0x2d6b0c[0x2],
                                'password': '' + _0x2d6b0c[0x3]
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b9449['setRequestInterception'](!![]), _0x4b9449['on']('request', _0x534052 => {
                                _0x534052['resourceType']() === 'image' || _0x534052['resourceType']() === 'font' || _0x534052['resourceType']() === 'media' ? _0x534052['abort']() : _0x534052['continue']();
                            }), await _0x4b9449['goto']('https://drop.slamjam.com/account/register'), await _0x3760ea(0xbb8), await _0x4b9449['waitForSelector']('#FirstName'), await _0x4b9449['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4b9449['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Filling\x20information'), await _0x3760ea(0x4b0), await _0x4b9449['type']('#FirstName', '' + _0x959ef4[_0x4ced4e]['FirstName']), await _0x3760ea(0x226), await _0x4b9449['type']('#LastName', '' + _0x959ef4[_0x4ced4e]['LastName']), await _0x3760ea(0x226), await _0x4b9449['type']('#Email', '' + _0x959ef4[_0x4ced4e]['Email']), await _0x3760ea(0x2ee), await _0x4b9449['type']('#ConfirmEmail', '' + _0x959ef4[_0x4ced4e]['Email']), await _0x3760ea(0x2ee), await _0x4b9449['type']('#CreatePassword', '' + _0x959ef4[_0x4ced4e]['Password']), await _0x3760ea(0x2ee), await _0x4b9449['type']('#CreateConfirmPassword', '' + _0x959ef4[_0x4ced4e]['Password']), await _0x3760ea(0x226), console['log'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Submitting..'), await _0x4b9449['$eval']('#create_customer', _0x1e1eae => _0x1e1eae['submit']()), await _0x3760ea(0x1388), console['log'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20' + _0x5c34ff['cyan']('Solving\x20Captcha')), await _0x4b9449['solveRecaptchas'](), console['log'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4b9449['$eval']('.shopify-challenge__container\x20>\x20form', _0x1b0672 => _0x1b0672['submit']());
                            try {
                                await _0x4b9449['waitForSelector']('.product-card__image'), await _0x3760ea(0x1f4), _0x3f8eb1 = 'no', console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Account\x20' + _0x959ef4[_0x4ced4e]['Email'] + '\x20Generated!')), _0x40baed['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x959ef4[_0x4ced4e]['Email'] + ',' + _0x959ef4[_0x4ced4e]['Password']), console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Account\x20' + _0x959ef4[_0x4ced4e]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0x4b7df2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x2eb6d8(_0x5ac7d4, _0x4b7df2['succesDEVMSG']);
                            } catch (_0x1266d1) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1266d1));
                            }
                        } catch (_0x564f4a) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20' + _0x564f4a));
                        } finally {
                            _0x3a73fe && _0x3a73fe['close']();
                            if (_0x3f8eb1 == 'yes' && _0x2cf8b2 != 0x5) {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x1b5361['name'] + ']\x20Task\x20' + (_0x4ced4e + 0x1) + '\x20:\x20Retrying\x20(' + _0x2cf8b2 + '\x20/\x205)')), _0x4ced4e = _0x4ced4e - 0x1, _0x2cf8b2 = _0x2cf8b2 + 0x1;
                                continue;
                            }
                            _0x3f8eb1 == 'yes' && _0x2cf8b2 >= 0x5 && (_0x39d99b(_0x959ef4[_0x4ced4e], _0x1b5361), _0x3f8eb1 = 'no', _0x2cf8b2 = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x30cfcc, _0x1da61a, _0x41fed6) {
                    _0x295ab7['use'](_0x2d996f()), _0x295ab7['use'](_0x1868c2({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x46692f['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1a1bae = 0x0; _0x1a1bae < _0x1da61a['length']; _0x1a1bae++) {
                        var _0x262f04;
                        if (_0x4e576a != 'yes')
                            var _0x4e576a = '', _0x1b1e7a = 0x0;
                        _0x5f1b8a(_0x30cfcc['name'] + '\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20/\x20' + _0x1da61a['length'] + '\x20||\x20File:\x20' + _0x1ec542 + '\x20Proxies:\x20' + _0x13485c);
                        try {
                            await _0x498738(_0x1da61a, _0x1a1bae);
                        } catch {
                            _0x4e576a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1da61a[_0x1a1bae]['Email'] == '' || _0x1da61a[_0x1a1bae]['Password'] == '' || _0x1da61a[_0x1a1bae]['FirstName'] == '' || _0x1da61a[_0x1a1bae]['LastName'] == '') {
                            console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x46692f['useRandomProxy'] = ![])
                            var _0x37e2c2 = _0x41fed6[_0x1a1bae]['split'](':');
                        else
                            var _0x2ccc53 = Math['round'](Math['random']() * (_0x41fed6['length'] - 0x1)), _0x37e2c2 = _0x41fed6[_0x2ccc53]['split'](':');
                        var _0x21f115;
                        try {
                            _0x21f115 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2c2[0x0] + ':' + _0x37e2c2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x21f115 = await _0x295ab7['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37e2c2[0x0] + ':' + _0x37e2c2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x52a110 = await _0x21f115['newPage']();
                            await _0x52a110['authenticate']({
                                'username': '' + _0x37e2c2[0x2],
                                'password': '' + _0x37e2c2[0x3]
                            }), await _0x52a110['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52a110['setRequestInterception'](!![]), _0x52a110['on']('request', _0x2bf3d1 => {
                                _0x2bf3d1['resourceType']() === 'image' || _0x2bf3d1['resourceType']() === 'font' || _0x2bf3d1['resourceType']() === 'media' ? _0x2bf3d1['abort']() : _0x2bf3d1['continue']();
                            }), await _0x52a110['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x52a110['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x52a110['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3760ea(0x258), await _0x52a110['waitForSelector']('#CustomerEmail'), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Logging\x20in..'), await _0x52a110['type']('#CustomerEmail', '' + _0x1da61a[_0x1a1bae]['Email']), await _0x3760ea(0x12c), await _0x52a110['type']('#CustomerPassword', '' + _0x1da61a[_0x1a1bae]['Password']), await _0x3760ea(0x226), await _0x52a110['$eval']('#customer_login', _0x514166 => _0x514166['submit']()), await _0x3760ea(0x7d0), await _0x52a110['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20' + _0x5c34ff['cyan']('Solving\x20Captcha')), await _0x52a110['solveRecaptchas'](), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x52a110['$eval']('.shopify-challenge__container\x20>\x20form', _0x4b3108 => _0x4b3108['submit']());
                            try {
                                await _0x52a110['waitForSelector']('.nav-account'), await _0x3760ea(0x4b0);
                            } catch {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x52a110['goto']('' + _0x1da61a[_0x1a1bae]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3760ea(0xbb8), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x52a110['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x52a110['click']('.product-select-variant-wrapper'), await _0x3760ea(0x320), await _0x52a110['click']('li.product-select-variant__value[data-size=\x22' + _0x1da61a[_0x1a1bae]['Size'] + '\x22]'), await _0x3760ea(0x384), await _0x52a110['$eval']('#AddToCartForm-product-template-raffle', _0x13b41c => _0x13b41c['submit']()), await _0x52a110['waitForSelector']('.cart-order-summary__content'), await _0x3760ea(0x514), await _0x52a110['goto']('https://drop.slamjam.com/checkout'), await _0x3760ea(0x514), await _0x52a110['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Filling\x20Information'), await _0x52a110['select']('#checkout_shipping_address_country', '' + _0x1da61a[_0x1a1bae]['Country']), await _0x3760ea(0x200), await _0x52a110['waitForSelector']('#checkout_shipping_address_first_name'), await _0x52a110['type']('#checkout_shipping_address_first_name', '' + _0x1da61a[_0x1a1bae]['FirstName']), await _0x3760ea(0x237), await _0x52a110['type']('#checkout_shipping_address_last_name', '' + _0x1da61a[_0x1a1bae]['LastName']), await _0x3760ea(0x1e0), await _0x52a110['type']('#checkout_shipping_address_address1', _0x1da61a[_0x1a1bae]['Address1'] + '\x20' + _0x1da61a[_0x1a1bae]['HouseNumber']), await _0x3760ea(0x514), await _0x52a110['type']('#checkout_shipping_address_address2', '' + _0x1da61a[_0x1a1bae]['Address2']), await _0x3760ea(0x514);
                            _0x1da61a[_0x1a1bae]['Postcode'] == undefined && (_0x1da61a[_0x1a1bae]['Postcode'] = _0x1da61a[_0x1a1bae]['Zip']);
                            await _0x52a110['type']('#checkout_shipping_address_zip', '' + _0x1da61a[_0x1a1bae]['Postcode']), await _0x3760ea(0x2bc), await _0x52a110['type']('#checkout_shipping_address_city', '' + _0x1da61a[_0x1a1bae]['City']), await _0x3760ea(0x320), await _0x52a110['type']('#checkout_shipping_address_phone', '' + _0x1da61a[_0x1a1bae]['Phone']), await _0x3760ea(0x320), await _0x52a110['click']('#continue_button'), await _0x3760ea(0xbb8), await _0x52a110['waitForSelector']('.summary-title'), await _0x3760ea(0x320), await _0x52a110['click']('#continue_button'), await _0x3760ea(0x320), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x52a110['waitForSelector']('#checkout_credit_card_vault'), await _0x3760ea(0x3e8);
                            var _0x3512ec = await _0x52a110['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x7bf784 = await _0x3512ec['contentFrame']();
                            await _0x7bf784['click']('#number'), await _0x3760ea(0x3e8), await _0x7bf784['type']('#number', '' + _0x1da61a[_0x1a1bae]['CardNumber'], { 'delay': 0x78 }), _0x3512ec = await _0x52a110['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x7bf784 = await _0x3512ec['contentFrame'](), await _0x3760ea(0x1c2), await _0x7bf784['click']('#name'), await _0x3760ea(0x1f4), await _0x7bf784['type']('#name', '' + _0x1da61a[_0x1a1bae]['NameOnCard'], { 'delay': 0x78 }), _0x3512ec = await _0x52a110['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x7bf784 = await _0x3512ec['contentFrame'](), await _0x3760ea(0x1c2), await _0x7bf784['click']('#expiry'), await _0x3760ea(0x1f4), await _0x7bf784['type']('#expiry', '' + _0x1da61a[_0x1a1bae]['ExpiryDate'], { 'delay': 0x78 }), _0x3512ec = await _0x52a110['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x7bf784 = await _0x3512ec['contentFrame'](), await _0x3760ea(0x1c2), await _0x7bf784['click']('#verification_value'), await _0x3760ea(0x1f4), await _0x7bf784['type']('#verification_value', '' + _0x1da61a[_0x1a1bae]['CVV'], { 'delay': 0x78 }), await _0x52a110['$eval']('#accepts-flag-raffle', _0x4488f8 => _0x4488f8['click']()), await _0x3760ea(0x7d0), console['log'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Processing\x20Order'), await _0x52a110['$eval']('#continue_button', _0x13367c => _0x13367c['click']()), await _0x3760ea(0x1b58), await _0x52a110['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x52a110['$eval']('.edit_checkout.animate-floating-labels', _0x44dca0 => _0x44dca0['submit']()), await _0x3760ea(0x7d0);
                            try {
                                await _0x52a110['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4e576a = 'no', _0xd99376(_0x1da61a[_0x1a1bae], _0x30cfcc), console['log'](_0x5c34ff['green'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2b7c08) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2b7c08['message']);
                            }
                            var _0x236906 = await _0x3f9534(_0x1da61a[_0x1a1bae], _0x30cfcc, 'dev', ![]), _0x3db9e5 = await _0x3f9534(_0x1da61a[_0x1a1bae], _0x30cfcc, 'pub', ![]);
                            const _0xec9a57 = {
                                'succesDEVMSG': { 'embeds': [_0x236906] },
                                'succesPUBMSG': { 'embeds': [_0x3db9e5] }
                            };
                            try {
                                _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], _0xec9a57['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x4ac657, _0xec9a57['succesDEVMSG']), await _0x3760ea(0xc8), await _0x2eb6d8(_0x1998ad, _0xec9a57['succesPUBMSG']);
                            } catch (_0x19a96c) {
                                console['log'](_0x5c34ff['yellow'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x19a96c));
                            }
                        } catch (_0xb9b125) {
                            console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x73544[taskModule]['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20' + _0xb9b125)), _0x262f04 = '' + _0xb9b125;
                            var _0x348961 = await _0x3f9534(kickz[_0x1a1bae], _0x30cfcc, 'dev', !![], _0x262f04);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x348961] }, _0x46692f['webhook'] != undefined && _0x46692f['webhook'] != '' && await _0x2eb6d8(_0x46692f['webhook'], EMBEDS['errorDEV']), await _0x2eb6d8(_0xbd6622, EMBEDS['errorDEV']), _0x4e576a = 'yes';
                        } finally {
                            _0x21f115 && _0x21f115['close']();
                            if (_0x4e576a == 'yes' && _0x1b1e7a != 0x5 && _0x262f04 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5c34ff['red'](_0x5cb70e() + '\x20[' + _0x30cfcc['name'] + ']\x20Task\x20' + (_0x1a1bae + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b1e7a + '\x20/\x205)')), _0x1a1bae = _0x1a1bae - 0x1, _0x1b1e7a = _0x1b1e7a + 0x1;
                                continue;
                            }
                            _0x4e576a == 'yes' && _0x1b1e7a >= 0x5 && (_0x39d99b(_0x1da61a[_0x1a1bae], _0x30cfcc), _0x4e576a = 'no', _0x1b1e7a = 0x0), console['log']('Waiting\x20for\x20' + _0x46692f['delay'] + '\x20ms'), await _0x3760ea(_0x46692f['delay']);
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
                'function': async function (_0x20ad33) {
                    var _0x50c46e = await _0x2bd813(), _0x2b085b = _0x40baed['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1a9e79 = _0x385c07['parse'](_0x2b085b, { 'header': !![] })['data'];
                    for (var _0x3959e7 = 0x0; _0x3959e7 < _0x1a9e79['length']; _0x3959e7++) {
                        var _0x546192 = _0x1a9e79[_0x3959e7]['Store'], _0x4d30e1 = _0x1a9e79[_0x3959e7]['Mode'];
                        for (var _0x193e5a of _0x73544) {
                            const _0x5dadf5 = _0x193e5a['name']['includes'](_0x546192);
                            if (!_0x5dadf5)
                                continue;
                            for (mode of _0x193e5a['modules']) {
                                if (mode['name'] == _0x4d30e1) {
                                    console['log']('Running\x20' + _0x5c34ff['cyan'](mode['name'])), await mode['function'](mode, [_0x1a9e79[_0x3959e7]], _0x50c46e);
                                    var _0x25cbc7 = _0x2b085b['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x40baed['writeFileSync']('../failed-tasks.csv', _0x25cbc7);
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
                    var _0x2e813e = await _0x3ad320['get']('Answer');
                    if (_0x2e813e['Answer']['toLowerCase']() == 'y') {
                        _0x40baed['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x3760ea(0x3e8);
                        return;
                    }
                    if (_0x2e813e['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x3760ea(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x3760ea(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x339459(_0x2506a6) {
    var _0x5ae036 = await _0x2bd813(), _0x27b156 = _0x40baed['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4d0515 = _0x385c07['parse'](_0x27b156, { 'header': !![] })['data'];
    for (var _0x2e0898 = 0x0; _0x2e0898 < _0x4d0515['length']; _0x2e0898++) {
        var _0x27f051 = _0x4d0515[_0x2e0898]['Store'], _0x113b56 = _0x4d0515[_0x2e0898]['Mode'];
        for (var _0x39d56f of _0x73544) {
            const _0x15f366 = _0x39d56f['name']['includes'](_0x27f051);
            if (_0x15f366)
                for (mode of _0x73544[_0x39d56f]['modules']) {
                    const _0x4ca9e7 = mode['name']['includes'](_0x113b56);
                    _0x4ca9e7 && (_0x2506a6 = mode['name'], await mode['function'](_0x2506a6, _0x4d0515[_0x2e0898], _0x5ae036));
                }
        }
    }
}
async function _0x46dff0() {
    await _0x41c237(), console['clear']();
    if (_0x485d74 != 'devkey') {
        let _0x13da6c = await _0x19715e['autoUpdate']();
        if (_0x13da6c === 'yes')
            return _0x4c767a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2f573f == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x3760ea(0x2710);
        ;
    }
    await _0x2e6657(_0x2f573f);
    if (_0x4d26d8 === ![])
        return console['log']('Closing\x20Browser'), await _0x3760ea(0xbb8);
    else
        try {
            var _0x1d5abf = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xdd153c
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x485d74
                    }
                ]
            }];
            const _0x2a13f3 = { 'embeds': _0x1d5abf };
            var _0x12dc4e = await _0x3f9534(null, null, 'open', ![]);
            const _0x57e734 = { 'openDEVMSG': { 'embeds': [_0x12dc4e] } };
            await _0x2eb6d8(_0x8e523b, _0x57e734['openDEVMSG']);
            async function _0x552d97() {
                _0x5f1b8a('JRaffles\x20' + _0x485d74), console['clear'](), console['log']('Welcome\x20' + _0x5c34ff['cyan']('' + _0xdd153c)), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x32122f = 0x0; _0x32122f < _0x73544['length'] - 0x4; _0x32122f++) {
                    if (_0x32122f >= 0xa) {
                        console['log']('\x20(' + _0x32122f + ')\x20[' + _0x73544[_0x32122f]['name'] + ']');
                        continue;
                    }
                    if (_0x73544[_0x32122f]['name'] === 'Reload\x20Settings' || _0x73544[_0x32122f]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x32122f + ')\x20\x20[' + _0x73544[_0x32122f]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x73544['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x73544['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x73544['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x73544['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x241f8c();
                if (taskModule > _0x73544['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x3760ea(0x3e8), _0x552d97();
                if (_0x73544[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x582eb2 = await _0x2bd813();
                            await _0x20e608['function'](_0x20e608, _0x582eb2);
                        }
                        if (taskFunction == 0x2) {
                            var _0x582eb2 = await _0x2bd813(), _0x5d385e = await _0x4509b4();
                            _0x46692f['shuffleTasks'] && await _0x51795f(_0x5d385e), await _0x20e608['function'](_0x20e608, _0x5d385e, _0x582eb2);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x582eb2 = await _0x2bd813(), _0x5d385e = await _0x4509b4();
                                _0x46692f['shuffleTasks'] && await _0x51795f(_0x5d385e), await _0x20e608['function'](_0x20e608, _0x5d385e, _0x582eb2);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x582eb2 = await _0x2bd813();
                                    await _0x20e608['function'](_0x20e608, _0x582eb2);
                                }
                            }
                        }
                    } catch (_0x2fcb02) {
                        console['log'](_0x2fcb02), await _0x3760ea(0x7d0);
                    }
                    return _0x552d97();
                }
                if (_0x73544[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                        var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x582eb2 = await _0x2bd813(), _0x567d89 = await _0x4509b4();
                            _0x46692f['shuffleTasks'] && await _0x51795f(_0x567d89), await _0x20e608['function'](_0x20e608, _0x567d89, _0x582eb2);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x582eb2 = await _0x2bd813(), _0x567d89 = await _0x4509b4();
                                _0x46692f['shuffleTasks'] && await _0x51795f(_0x567d89), await _0x20e608['function'](_0x20e608, _0x567d89, _0x582eb2);
                            }
                        }
                    } catch (_0x5da074) {
                        console['log'](_0x5da074), await _0x3760ea(0xfa0);
                    }
                    return _0x552d97();
                }
                if (_0x73544[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x582eb2 = await _0x2bd813();
                        return await _0x20e608['function'](_0x20e608, _0x582eb2), _0x552d97();
                    }
                    var _0x582eb2 = await _0x2bd813(), _0x251632 = await _0x4509b4();
                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x251632), await _0x20e608['function'](_0x20e608, _0x251632, _0x582eb2), _0x552d97();
                }
                if (_0x73544[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x582eb2 = await _0x2bd813(), _0x251632 = await _0x4509b4();
                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x251632), await _0x20e608['function'](_0x20e608, _0x251632, _0x582eb2), _0x552d97();
                }
                if (_0x73544[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x582eb2 = await _0x2bd813(), _0x251632 = await _0x4509b4();
                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x251632), await _0x20e608['function'](_0x20e608, _0x251632, _0x582eb2), _0x552d97();
                }
                if (_0x73544[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x582eb2 = await _0x2bd813(), _0x251632 = await _0x4509b4();
                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x251632), await _0x20e608['function'](_0x20e608, _0x251632, _0x582eb2), _0x552d97();
                } else {
                    if (_0x73544[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                        var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x582eb2 = await _0x2bd813(), _0x58c6e0 = await _0x4509b4();
                            return _0x46692f['shuffleTasks'] && await _0x51795f(_0x58c6e0), await _0x20e608['function'](_0x20e608, _0x58c6e0, _0x582eb2), _0x552d97();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x582eb2 = await _0x2bd813();
                                return await _0x20e608['function'](_0x20e608, null, _0x582eb2), _0x552d97();
                            }
                        }
                        ;
                    } else {
                        if (_0x73544[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                            var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction], _0x582eb2 = await _0x2bd813(), _0x27751f = await _0x4509b4();
                            return _0x46692f['shuffleTasks'] && await _0x51795f(_0x27751f), await _0x20e608['function'](_0x20e608, _0x27751f, _0x582eb2), await _0x3760ea(0x1388), _0x552d97();
                        } else {
                            if (_0x73544[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x582eb2 = await _0x2bd813(), _0x58c6e0 = await _0x4509b4();
                                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x58c6e0), await _0x20e608['function'](_0x20e608, _0x58c6e0, _0x582eb2), _0x552d97();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x582eb2 = await _0x2bd813();
                                        return await _0x20e608['function'](_0x20e608, null, _0x582eb2), _0x552d97();
                                    }
                                }
                                ;
                            } else {
                                if (_0x73544[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x20e608);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x73544[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                        var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x582eb2 = await _0x2bd813(), _0x421c4a = await _0x4509b4();
                                            return _0x46692f['shuffleTasks'] && await _0x51795f(_0x421c4a), await _0x20e608['function'](_0x20e608, _0x421c4a, _0x582eb2), _0x552d97();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x582eb2 = await _0x2bd813(), _0x421c4a = await _0x4509b4();
                                                return _0x46692f['shuffleTasks'] && await _0x51795f(_0x421c4a), await _0x20e608['function'](_0x20e608, _0x421c4a, _0x582eb2), _0x552d97();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x73544[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                            var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x582eb2 = await _0x2bd813(), _0xb899e4 = await _0x4509b4();
                                                return _0x46692f['shuffleTasks'] && await _0x51795f(_0xb899e4), await _0x20e608['function'](_0x20e608, _0xb899e4, _0x582eb2), _0x552d97();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x582eb2 = await _0x2bd813(), _0xb899e4 = await _0x4509b4();
                                                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0xb899e4), await _0x20e608['function'](_0x20e608, _0xb899e4, _0x582eb2), _0x552d97();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x73544[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                                var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x582eb2 = await _0x2bd813(), _0x1871e4 = await _0x4509b4();
                                                    return _0x46692f['shuffleTasks'] && await _0x51795f(_0x1871e4), await _0x20e608['function'](_0x20e608, _0x1871e4, _0x582eb2), _0x552d97();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x582eb2 = await _0x2bd813(), _0x1871e4 = await _0x4509b4();
                                                        return _0x46692f['shuffleTasks'] && await _0x51795f(_0x1871e4), await _0x20e608['function'](_0x20e608, _0x1871e4, _0x582eb2), _0x552d97();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x73544[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                                    var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x582eb2 = await _0x2bd813(), _0x28852e = await _0x4509b4();
                                                        return _0x46692f['shuffleTasks'] && await _0x51795f(_0x28852e), await _0x20e608['function'](_0x20e608, _0x28852e, _0x582eb2), _0x552d97();
                                                    }
                                                } else {
                                                    if (_0x73544[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x3760ea(0x3e8), _0x552d97();
                                                    else {
                                                        if (_0x73544[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x407f5c = _0x73544[taskModule]['name'], _0x582eb2 = await _0x2bd813();
                                                            return await _0x5e23c3(_0x407f5c, _0x582eb2), _0x552d97();
                                                        } else {
                                                            if (_0x73544[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x513be1(_0x73544[taskModule]['modules']);
                                                                var _0x20e608 = _0x73544[taskModule]['modules'][taskFunction];
                                                                return await _0x20e608['function'](_0x20e608), _0x552d97();
                                                            } else {
                                                                if (_0x73544[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x10e762 = 0x0;
                                                                    for (const _0x526393 in _0x46692f) {
                                                                        console['log']('(' + _0x10e762 + ')\x20' + _0x526393 + '\x20:\x20' + _0x46692f[_0x526393]), _0x10e762++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x10e762 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x335ded = await _0x58cad1();
                                                                    if (_0x335ded == _0x10e762)
                                                                        return _0x552d97();
                                                                    console['clear'];
                                                                    var _0x5a5632 = 0x0;
                                                                    for (var _0x33be90 in _0x46692f) {
                                                                        if (_0x335ded == _0x5a5632) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x33be90 + '\x20:'), _0x46692f[_0x33be90] = await _0x12a034(), _0x40baed['writeFileSync']('../settings.json', JSON['stringify'](_0x46692f));
                                                                            break;
                                                                        } else
                                                                            _0x5a5632++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x3760ea(0xbb8), _0x552d97();
                                                                } else {
                                                                    if (_0x73544[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x41c237(), _0x552d97();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x73544[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x2d7d93 = await _0x2d2aa5();
                                                                            _0x2d7d93 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x53653a(), await afewFunction(_0x2b7385[_0x3ec50f], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x3760ea(0xbb8));
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
                await _0x552d97();
            } catch (_0x3e4127) {
                return console['log'](_0x3e4127), _0x552d97();
            }
        } catch (_0x3ca799) {
            return console['log'](_0x3ca799), await _0x3760ea(0x3a98);
        }
}
;
_0x5f1b8a('JRaffles\x20' + _0x485d74), _0x41c237();
try {
    _0x46dff0();
} catch (_0x59b49c) {
    var _0x182ae = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xdd153c
            },
            {
                'name': 'Version',
                'value': '' + _0x485d74
            },
            {
                'name': 'Error',
                'value': '' + _0x59b49c
            }
        ]
    }];
    const _0x3d5dc1 = { 'embeds': _0x182ae };
    _0x2eb6d8(_0xbd6622, _0x3d5dc1);
}