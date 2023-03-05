process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x17a34e = require('node-imap'), _0x6b8ab9 = require('util')['inspect'];
const _0x5e5b57 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4a26da } = require('discord.js');
var _0x58447c = require('exe');
const { execFile: _0x3865f3 } = require('child_process'), _0x1bd0b6 = require('puppeteer-extra'), _0x1da9f8 = require('puppeteer-extra-plugin-recaptcha'), _0x4ebb3c = require('puppeteer-extra-plugin-stealth'), _0x1e7cf7 = require('chalk'), _0x2e24da = require('node-bash-title'), _0x37c275 = require('fs'), _0x5cc17c = require('axios'), _0x15ce2d = require('papaparse');
var _0x232265 = require('random-name');
const _0xaed388 = require('request');
var _0x3fd9f9 = require('prompt');
const _0x1b5546 = _0xaed388['jar']();
var _0x2743a8 = {};
const _0x4b404b = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2597e9 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x57b7dd = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1ca912 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x38b15c = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x48251a = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x343a41 = 'https://discord.com/api/webhooks/', _0x3dff31 = '' + _0x343a41 + _0x57b7dd, _0x3f430d = '' + _0x343a41 + _0x1ca912, _0x13d0a3 = '' + _0x343a41 + _0x4b404b, _0x3cd445 = '' + _0x343a41 + _0x2597e9, _0x5ed9e2 = '' + _0x343a41 + _0x38b15c, _0x360feb = '' + _0x343a41 + _0x48251a;
const _0x3d0657 = JSON['parse'](_0x37c275['readFileSync']('../package.json', 'utf-8')), _0x2ed8f3 = _0x3d0657['version'];
var _0x471194, _0xadc16b, _0x10d1ac, _0x1a3718, _0x6211b9, _0x43194f, _0x1d5408, _0xb7ad46;
const _0x1bb894 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5eee10 = ![];
const _0x65e48d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x45f872 = '0123456789';
var _0x29ccca = _0x65e48d['split']('');
const _0x57e76b = require('auto-git-update'), { PageEmittedEvents: _0x2330db } = require('puppeteer'), { getRandomValues: _0x49b985 } = require('crypto'), { resolve: _0x1ee811 } = require('path'), { Console: _0x209de2 } = require('console'), _0x1f426e = {
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
}, _0xeb9be0 = new _0x57e76b(_0x1f426e);
async function _0x4f5c7f() {
    _0x6211b9 = _0x37c275['readdirSync']('../proxies'), _0x1a3718 = _0x37c275['readdirSync']('../tasks'), !_0x37c275['existsSync']('../accounts/fenom.csv') && _0x37c275['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x37c275['existsSync']('../accounts/bstn.csv') && _0x37c275['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x37c275['existsSync']('../failed-tasks.csv') && _0x37c275['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x37c275['existsSync']('../successful-tasks.csv') && _0x37c275['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x2743a8 = JSON['parse'](_0x37c275['readFileSync']('../settings.json', 'utf-8')), !_0x2743a8['delay'] && (_0x2743a8['delay'] = 0x3c, _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['masterMail'] && (_0x2743a8['masterMail'] = 'yourmail@gmail.com', _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['masterPassword'] && (_0x2743a8['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['captchaKey'] && (_0x2743a8['captchaKey'] = '', _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['useRandomProxy'] && (_0x2743a8['useRandomProxy'] = !![], _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['shuffleTasks'] && (_0x2743a8['useRandomProxy'] = ![], _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), !_0x2743a8['webhook'] && (_0x2743a8['webhook'] = '', _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), _0x2743a8['delay'] <= 0x1388 && (_0x2743a8['delay'] = _0x2743a8['delay'] * 0x3e8), _0x2743a8['AfewDelay'] && (delete _0x2743a8['AfewDelay'], _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), _0x2743a8['MahaDelay'] && (delete _0x2743a8['MahaDelay'], _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), _0x2743a8['footshopDelay'] && (delete _0x2743a8['footshopDelay'], _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8, null, 0x2))), _0x2743a8['MahaDelay'] = _0x2743a8['delay'], _0x343a41 = _0x2743a8['webhook'], _0x43194f = _0x2743a8['licenseKey'];
}
let _0xedf7fa, _0x4ad912 = [], _0x37e7b8;
const _0x5af1c7 = _0x5ea128 => new Promise(_0x43379e => setTimeout(_0x43379e, _0x5ea128));
function _0x426591(_0x1181aa, _0x5a6b1e) {
    return Math['floor'](Math['random']() * (_0x5a6b1e - _0x1181aa + 0x1) + _0x1181aa);
}
function _0x45db46(_0x1b072a) {
    let _0x358d12 = _0x1b072a['length'], _0x5c9405;
    while (_0x358d12 != 0x0) {
        _0x5c9405 = Math['floor'](Math['random']() * _0x358d12), _0x358d12--, [_0x1b072a[_0x358d12], _0x1b072a[_0x5c9405]] = [
            _0x1b072a[_0x5c9405],
            _0x1b072a[_0x358d12]
        ];
    }
    return _0x1b072a;
}
async function _0x2fd754(_0x325deb) {
    return _0x5cc17c['get']('https://api.hyper.co/v4/licenses/' + _0x325deb, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1bb894 } })['then'](_0x52deb1 => _0x52deb1['data'])['catch'](() => null);
}
;
async function _0x2dae07(_0x6d3f51) {
    console['clear']();
    if (_0x6d3f51 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x5525f1 = await _0x3fd9f9['get']('License');
        if (_0x5525f1['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x5af1c7(0xbb8), _0x2dae07(_0x6d3f51);
        _0x6d3f51 = _0x5525f1['License'], _0x2743a8['licenseKey'] = _0x6d3f51, _0x43194f = _0x6d3f51, _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8));
    }
    console['log']('Checking\x20license\x20' + _0x43194f + '...'), await _0x5af1c7(0x320);
    const _0x1ee7b2 = await _0x2fd754(_0x6d3f51);
    _0x1d5408 = JSON['stringify'](_0x1ee7b2['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0xb7ad46 = JSON['stringify'](_0x1ee7b2['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1ee7b2)
        return console['log']('License\x20not\x20found');
    if (!_0x1ee7b2['user'])
        return console['log']('License\x20not\x20bound');
    return _0x1ee7b2['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5eee10 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5eee10 = ![]);
}
async function _0x1fb396() {
    var _0x5f8956 = await _0x3fd9f9['get']('Module');
    return console['clear'](), _0x5f8956['Module'];
}
;
async function _0x5671e4() {
    var _0x4faf42 = await _0x3fd9f9['get']('Setting');
    return console['clear'](), _0x4faf42['Setting'];
}
async function _0x4101c3() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1493cc = 0x0; _0x1493cc < _0x1a3718['length']; _0x1493cc++) {
        console['log']('\x20(' + _0x1493cc + ')\x20' + _0x1a3718[_0x1493cc]);
    }
    console['log']('');
    var _0x509752 = await _0x3fd9f9['get']('Task');
    if (_0x509752['Task'] > _0x1a3718['length'] - 0x1 || isNaN(_0x509752['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5af1c7(0x3e8), _0x4101c3();
    var _0x208b7c = _0x37c275['readFileSync']('../tasks/' + _0x1a3718[_0x509752['Task']], 'utf-8');
    return _0x10d1ac = _0x15ce2d['parse'](_0x208b7c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1e7cf7['blue'](_0x1a3718[_0x509752['Task']])), _0x471194 = _0x1a3718[_0x509752['Task']], _0x10d1ac;
}
async function _0x45ae7d() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3645c9 = 0x0; _0x3645c9 < _0x6211b9['length']; _0x3645c9++) {
        console['log']('\x20(' + _0x3645c9 + ')\x20' + _0x6211b9[_0x3645c9]);
    }
    console['log']('');
    var _0x2cdcb6 = await _0x3fd9f9['get']('Proxies');
    if (_0x2cdcb6['Proxies'] > _0x6211b9['length'] - 0x1 || isNaN(_0x2cdcb6['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5af1c7(0x3e8), _0x45ae7d();
    var _0x28859b = _0x37c275['readFileSync']('../proxies/' + _0x6211b9[_0x2cdcb6['Proxies']], 'utf-8')['split']('\x0a');
    let _0x405792 = _0x28859b['map']((_0xcc7f53, _0x4b43aa) => {
        sanatizeProxy = _0xcc7f53['replace']('\x0d', '');
        if (_0x28859b[_0x4b43aa + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xadc16b = _0x6211b9[_0x2cdcb6['Proxies']], console['clear'](), _0x405792;
}
async function _0xabeb3a() {
    var _0x1e148e = await _0x3fd9f9['get']('Value');
    return console['clear'](), _0x1e148e['Value'];
}
async function _0x3d59cd(_0x51aa93) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x23e0cb = 0x0; _0x23e0cb < _0x51aa93['length']; _0x23e0cb++) {
        console['log']('\x20(' + _0x23e0cb + ')\x20[' + _0x51aa93[_0x23e0cb]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x30e5c2 = await _0x3fd9f9['get']('Module');
    return _0x30e5c2['Module'];
}
async function _0x47c570() {
    var _0x21a0ed = await _0x3fd9f9['get']('Password');
    return console['clear'](), _0x21a0ed['Password'];
}
;
async function _0x576949() {
    var _0x2504fb = await _0x3fd9f9['get']('Links');
    return _0x2504fb['Links'];
}
;
async function _0x5749f7() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3cd380 = 0x0; _0x3cd380 < _0x4ad912['length']; _0x3cd380++) {
        console['log']('\x20(' + _0x3cd380 + ')\x20' + _0x4ad912[_0x3cd380]);
    }
    ;
    console['log']();
    let _0x1c3f42 = await _0x3fd9f9['get']('Product');
    return console['clear'](), _0x1c3f42['Product'];
}
;
function _0x1f2091() {
    var _0x334414 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x334414;
}
;
function _0x4e967b() {
    var _0x3a0d0f = new Date(Date['now']())['toLocaleString']();
    return _0x3a0d0f['replace'](',', '');
}
async function _0x57e297(_0x13e7b9, _0x11c1ee) {
    let _0x149fc0 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2ed8f3 != 'devkey') {
        await _0x5cc17c['post'](_0x13e7b9, _0x11c1ee, _0x149fc0);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x17ee8c(_0x54bc4a, _0x22413c, _0x1a2aa8, _0x3fb317, _0x508501) {
    if (!_0x3fb317 && _0x1a2aa8 == 'dev') {
        var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x22413c['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x22413c['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x54bc4a['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2743a8['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1d5408,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x54bc4a['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x54bc4a['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2ed8f3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x270924['data'];
    } else {
        if (_0x3fb317 && _0x1a2aa8 == 'dev') {
            var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x22413c['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1d5408,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x22413c['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x54bc4a['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2743a8['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x508501,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x54bc4a['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x54bc4a['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2ed8f3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x270924['data'];
        } else {
            if (_0x1a2aa8 == 'pub') {
                var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x22413c['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x22413c['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x54bc4a['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2743a8['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x54bc4a['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2ed8f3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x270924['data'];
            } else {
                if (_0x1a2aa8 == 'acc' && !_0x3fb317) {
                    var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x22413c['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1d5408,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x22413c['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2743a8['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2ed8f3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x270924['data'];
                } else {
                    if (_0x1a2aa8 == 'acc' && _0x3fb317) {
                        var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x22413c['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1d5408,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x508501,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x22413c['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x2743a8['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2ed8f3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x270924['data'];
                    } else {
                        if (_0x1a2aa8 == 'open') {
                            var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0xb7ad46)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1d5408,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2ed8f3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x270924['data'];
                        } else {
                            if (!_0x3fb317 && _0x1a2aa8 == 'ver') {
                                var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x22413c['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1d5408,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x22413c['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x2743a8['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2ed8f3,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x270924['data'];
                            } else {
                                if (_0x3fb317 && _0x1a2aa8 == 'ver') {
                                    var _0x270924 = new _0x4a26da()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x22413c['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1d5408,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x508501,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x22413c['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x2743a8['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2ed8f3,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x270924['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0xfd4a0f(_0x3ed680, _0x4c60b6) {
    var _0x470842 = _0x3ed680[_0x4c60b6]['Address1']['split'](''), _0x28b795 = _0x3ed680[_0x4c60b6]['Address2']['split'](''), _0x243dae = _0x3ed680[_0x4c60b6]['Email']['split']('@');
    for (var _0x2bfbec = 0x0; _0x2bfbec < _0x470842['length']; _0x2bfbec++) {
        if (_0x470842[_0x2bfbec] == 'X') {
            var _0x3cd13d = Math['round'](Math['random']() * (_0x65e48d['length'] - 0x1));
            _0x470842[_0x2bfbec] = _0x29ccca[_0x3cd13d];
        }
    }
    ;
    for (var _0x2bfbec = 0x0; _0x2bfbec < _0x28b795['length']; _0x2bfbec++) {
        if (_0x28b795[_0x2bfbec] == 'X') {
            var _0x3cd13d = Math['round'](Math['random']() * (_0x65e48d['length'] - 0x1));
            _0x28b795[_0x2bfbec] = _0x29ccca[_0x3cd13d];
        }
    }
    ;
    _0x3ed680[_0x4c60b6]['FirstName'] == 'RANDOM' && (_0x3ed680[_0x4c60b6]['FirstName'] = _0x232265['first']());
    _0x3ed680[_0x4c60b6]['LastName'] == 'RANDOM' && (_0x3ed680[_0x4c60b6]['LastName'] = _0x232265['last']());
    _0x243dae[0x0] == 'RANDOM' ? _0x243dae[0x0] = '' + _0x232265['first']() + _0x232265['last']() + _0x426591(0x1, 0x270f) + '@' : _0x243dae[0x0] = _0x243dae[0x0] + '@';
    _0x3ed680[_0x4c60b6]['Email'] = _0x243dae['join'](''), _0x3ed680[_0x4c60b6]['Address1'] = _0x470842['join'](''), _0x3ed680[_0x4c60b6]['Address2'] = _0x28b795['join']('');
    _0x3ed680[_0x4c60b6]['Phone'] == 'RANDOM' && (_0x3ed680[_0x4c60b6]['Phone'] = '0' + _0x426591(0x5f5e100, 0x3b9ac9ff));
    if (_0x3ed680[_0x4c60b6]['Follower'] == 'RANDOM') {
        var _0xdb3660 = _0x426591(0x1, 0x270f);
        _0x3ed680[_0x4c60b6]['Follower'] = '' + _0x232265['first']() + _0x232265['last']() + _0xdb3660 + '\x20';
    }
    _0x3ed680[_0x4c60b6]['HouseNumber'] == 'RANDOM' && (_0x3ed680[_0x4c60b6]['HouseNumber'] = _0x426591(0x1, 0xc8));
    if (_0x3ed680[_0x4c60b6]['Address1'] == 'RANDOM') {
        var _0xed61d7 = Math['round'](Math['random']() * (_0x65e48d['length'] - 0x1)), _0x1bccd5 = _0x29ccca[_0xed61d7];
        _0x3ed680[_0x4c60b6]['Address1'] = _0x232265['last']() + 'straat', _0x3ed680[_0x4c60b6]['Zip'] == '' && (_0x3ed680[_0x4c60b6]['Postcode'] = _0x426591(0x3e8, 0x270f) + '\x20' + _0x1bccd5 + _0x1bccd5, _0x3ed680[_0x4c60b6]['Zip'] = _0x3ed680[_0x4c60b6]['Postcode']), _0x3ed680[_0x4c60b6]['HouseNumber'] = '' + _0x426591(0x1, 0xc8);
    }
    return;
}
;
async function _0xd3954c(_0x374cb9, _0x381d89) {
    _0x37c275['appendFileSync']('../failed-tasks.csv', _0x4e967b() + ',' + _0x381d89['store'] + ',' + _0x381d89['name'] + ',' + _0x374cb9['Url'] + ',' + _0x374cb9['Size'] + ',' + _0x374cb9['Follower'] + ',' + _0x374cb9['FirstName'] + ',' + _0x374cb9['LastName'] + ',' + _0x374cb9['Address1'] + ',' + _0x374cb9['Address2'] + ',' + _0x374cb9['HouseNumber'] + ',' + _0x374cb9['Zip'] + ',' + _0x374cb9['City'] + ',' + _0x374cb9['State'] + ',' + _0x374cb9['Country'] + ',' + _0x374cb9['Phone'] + ',' + _0x374cb9['Email'] + ',' + _0x374cb9['Password'] + ',' + _0x374cb9['PaymentMethod'] + ',' + _0x374cb9['CardType'] + ',' + _0x374cb9['NameOnCard'] + ',' + _0x374cb9['CardNumber'] + ',' + _0x374cb9['ExpiryDate'] + ',' + _0x374cb9['CVV'] + ',' + _0x374cb9['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x33cd3c(_0x3fcb34, _0x27fbe0) {
    _0x37c275['appendFileSync']('../successful-tasks.csv', _0x4e967b() + ',' + _0x27fbe0['store'] + ',' + _0x27fbe0['name'] + ',' + _0x3fcb34['Url'] + ',' + _0x3fcb34['Size'] + ',' + _0x3fcb34['Follower'] + ',' + _0x3fcb34['FirstName'] + ',' + _0x3fcb34['LastName'] + ',' + _0x3fcb34['Address1'] + ',' + _0x3fcb34['Address2'] + ',' + _0x3fcb34['HouseNumber'] + ',' + _0x3fcb34['Zip'] + ',' + _0x3fcb34['City'] + ',' + _0x3fcb34['State'] + ',' + _0x3fcb34['Country'] + ',' + _0x3fcb34['Phone'] + ',' + _0x3fcb34['Email'] + ',' + _0x3fcb34['Password'] + ',' + _0x3fcb34['PaymentMethod'] + ',' + _0x3fcb34['CardType'] + ',' + _0x3fcb34['NameOnCard'] + ',' + _0x3fcb34['CardNumber'] + ',' + _0x3fcb34['ExpiryDate'] + ',' + _0x3fcb34['CVV'] + ',' + _0x3fcb34['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x562b45() {
    let _0x101eca = proxyFile['split']('\x0a'), _0x4d1546 = _0x101eca['map']((_0x3a5f12, _0x50bcd3) => {
        sanatizeProxy = _0x3a5f12['replace']('\x0d', '');
        if (_0x101eca[_0x50bcd3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4d1546;
}
;
async function _0x453770(_0x59591b) {
    var _0xf9515c = _0x59591b[0x1]['split'](':');
    const _0x1f94d2 = await _0x1bd0b6['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0xf9515c[0x0] + ':' + _0xf9515c[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x148ed2 = await _0x1f94d2['newPage']();
        await _0x148ed2['authenticate']({
            'username': '' + _0xf9515c[0x2],
            'password': '' + _0xf9515c[0x3]
        }), console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x148ed2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x148ed2['setRequestInterception'](!![]), _0x148ed2['on']('request', _0x1ce078 => {
            _0x1ce078['resourceType']() === 'image' || _0x1ce078['resourceType']() === 'font' || _0x1ce078['resourceType']() === 'media' ? _0x1ce078['abort']() : _0x1ce078['continue']();
        }), await _0x148ed2['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x148ed2['waitForTimeout'](0xbb8), await _0x148ed2['waitForSelector']('.product-card');
        const _0x2011ce = await _0x148ed2['$$eval']('a.product-card', _0xb96b25 => {
            return _0xb96b25['map'](_0x22575b => _0x22575b['href']);
        });
        return _0x4ad912 = _0x2011ce;
    } catch (_0x1b903f) {
        console['log']('\x20' + _0x1b903f);
    } finally {
        _0x1f94d2['close'](), console['clear']();
    }
}
;
async function _0x3428f0(_0x22bd06, _0x56a1c8) {
    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2743a8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x161f11 = 0x0; _0x161f11 < bouncewear['length']; _0x161f11++) {
        await _0xfd4a0f(bouncewear, _0x161f11);
        if (bouncewear[_0x161f11]['Email'] == '' || bouncewear[_0x161f11]['Password'] == '' || bouncewear[_0x161f11]['FirstName'] == '' || bouncewear[_0x161f11]['LastName'] == '') {
            console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2743a8['useRandomProxy'] = ![])
            var _0x136730 = _0x562b45()[_0x161f11]['split'](':');
        else
            var _0x63fea2 = Math['round'](Math['random']() * (_0x562b45()['length'] - 0x1)), _0x136730 = _0x562b45()[_0x63fea2]['split'](':');
        const _0x3a892a = await _0x1bd0b6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x136730[0x0] + ':' + _0x136730[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x38af3f = await _0x3a892a['newPage']();
            await _0x38af3f['authenticate']({
                'username': '' + _0x136730[0x2],
                'password': '' + _0x136730[0x3]
            }), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38af3f['setRequestInterception'](!![]), _0x38af3f['on']('request', _0x1b94e8 => {
                _0x1b94e8['resourceType']() === 'image' || _0x1b94e8['resourceType']() === 'font' || _0x1b94e8['resourceType']() === 'media' ? _0x1b94e8['abort']() : _0x1b94e8['continue']();
            }), await _0x38af3f['goto'](_0x22bd06), await _0x5af1c7(0xbb8), await _0x38af3f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Filling\x20information'), await _0x38af3f['type']('#RegisterForm-FirstName', '' + bouncewear[_0x161f11]['FirstName']), await _0x5af1c7(0x226), await _0x38af3f['type']('#RegisterForm-LastName', '' + bouncewear[_0x161f11]['LastName']), await _0x5af1c7(0x226), await _0x38af3f['type']('#RegisterForm-email', '' + bouncewear[_0x161f11]['Email']), await _0x5af1c7(0x226), await _0x38af3f['type']('#RegisterForm-password', '' + bouncewear[_0x161f11]['Password']), await _0x5af1c7(0x226), await _0x38af3f['click']('#marketing'), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Submitting..'), await _0x38af3f['$eval']('#RegisterForm', _0xf297b1 => _0xf297b1['submit']()), await _0x5af1c7(0x1f40), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x38af3f['solveRecaptchas'](), await _0x38af3f['click']('.shopify-challenge__button.btn');
            async function _0x33e934() {
                for (var _0x1cb87b = 0x0; _0x1cb87b < 0x4; _0x1cb87b++) {
                    try {
                        console['log']('try'), await _0x38af3f['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20' + _0x1e7cf7['red']('Catpcha\x20failed,\x20retrying..')), await _0x38af3f['solveRecaptchas'](), await _0x38af3f['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x33e934(), console['log'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5af1c7(0x1f4);
            try {
                await _0x38af3f['waitForSelector']('.featured-title'), await _0x5af1c7(0x1f4), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x161f11]['Email'] + '\x20Generated!')), _0x37c275['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x161f11]['Email'] + ',' + bouncewear[_0x161f11]['Password']), console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x56a1c8['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x161f11]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x136185) {
                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x136185));
            }
        } catch (_0x2016c8) {
            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x161f11 + 0x1) + '\x20:\x20' + _0x2016c8));
        } finally {
            _0x3a892a && _0x3a892a['close'](), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
        }
    }
}
async function _0x534673(_0x485f51, _0x5960c3, _0x43d90a) {
    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2743a8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1ea27e = 0x0; _0x1ea27e < _0x5960c3['length']; _0x1ea27e++) {
        _0x2e24da(_0x485f51['name'] + '\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20/\x20' + _0x5960c3['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
        var _0x22529e = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1d5408
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5960c3[_0x1ea27e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5960c3[_0x1ea27e]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2743a8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2743a8['version']
                }
            ]
        }];
        const _0x30fb80 = { 'embeds': _0x22529e };
        await _0xfd4a0f(_0x5960c3, _0x1ea27e);
        if (_0x5960c3[_0x1ea27e]['Email'] == '' || _0x5960c3[_0x1ea27e]['Password'] == '' || _0x5960c3[_0x1ea27e]['FirstName'] == '' || _0x5960c3[_0x1ea27e]['LastName'] == '') {
            console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x5960c3[_0x1ea27e]['Password'] == '' || _0x5960c3[_0x1ea27e]['Password'] == undefined) && (_0x5960c3[_0x1ea27e]['Password'] = 'ErehsaWonRaj1!');
        if (_0x2743a8['useRandomProxy'] = ![])
            var _0x1ac18f = _0x43d90a[_0x1ea27e]['split'](':');
        else
            var _0x4fae85 = Math['round'](Math['random']() * (_0x43d90a['length'] - 0x1)), _0x1ac18f = _0x43d90a[_0x4fae85]['split'](':');
        const _0x40b9d9 = await _0x1bd0b6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1ac18f[0x0] + ':' + _0x1ac18f[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5e5688 = await _0x40b9d9['newPage']();
            await _0x5e5688['authenticate']({
                'username': '' + _0x1ac18f[0x2],
                'password': '' + _0x1ac18f[0x3]
            }), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e5688['setRequestInterception'](!![]), _0x5e5688['on']('request', _0x1f1284 => {
                _0x1f1284['resourceType']() === 'image' || _0x1f1284['resourceType']() === 'font' || _0x1f1284['resourceType']() === 'media' ? _0x1f1284['abort']() : _0x1f1284['continue']();
            }), await _0x5e5688['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5e5688['goto']('' + _0x5960c3[_0x1ea27e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5e5688['waitForSelector']('#btnPdpAtb'), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5960c3[_0x1ea27e]['Size']);
            const _0x94568d = await _0x5e5688['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x396a78 => {
                return _0x396a78['map'](_0xab0cb5 => _0xab0cb5['innerText']);
            }), _0x529247 = await _0x5e5688['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x4e4c30 = ![];
            if (_0x5960c3[_0x1ea27e]['Size'] == 'RANDOM') {
                var _0x46946c = Math['round'](Math['random']() * (_0x529247['length'] - 0x1));
                await _0x529247[_0x46946c]['click']();
            } else
                for (var _0x428792 = 0x0; _0x428792 < _0x94568d['length']; _0x428792++) {
                    if (_0x94568d[_0x428792] != _0x5960c3[_0x1ea27e]['Size'])
                        continue;
                    try {
                        await _0x529247[_0x428792]['click']();
                    } catch {
                        console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x4e4c30 = !![];
                    }
                }
            if (_0x4e4c30)
                continue;
            await _0x5af1c7(0x578), await _0x5e5688['click']('#btnPdpAtb'), await _0x5e5688['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x5af1c7(0x3e8), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5e5688['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5e5688['waitForSelector']('#email'), await _0x5e5688['type']('#email', _0x5960c3[_0x1ea27e]['Email']), await _0x5af1c7(0x226), await _0x5e5688['click']('#guest-submit'), await _0x5af1c7(0x1b58), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5e5688['waitForSelector']('#firstname'), await _0x5e5688['type']('#firstname', _0x5960c3[_0x1ea27e]['FirstName'], 0x1f4), await _0x5af1c7(0x190), await _0x5e5688['waitForSelector']('#surname'), await _0x5e5688['type']('#surname', _0x5960c3[_0x1ea27e]['LastName'], 0x1f4), await _0x5af1c7(0x190), await _0x5e5688['waitForSelector']('#mobile'), await _0x5e5688['type']('#mobile', _0x5960c3[_0x1ea27e]['Phone'], 0x1f4), await _0x5af1c7(0x190), await _0x5e5688['click']('#enterManualDiv'), await _0x5af1c7(0x5dc), await _0x5e5688['waitForSelector']('#address1'), await _0x5e5688['type']('#address1', _0x5960c3[_0x1ea27e]['Address1'] + '\x20' + _0x5960c3[_0x1ea27e]['HouseNumber'], 0x226), await _0x5af1c7(0x384), await _0x5e5688['waitForSelector']('#address2'), await _0x5e5688['type']('#address2', '' + _0x5960c3[_0x1ea27e]['Address2'], 0x226), await _0x5af1c7(0x320);
            const _0x35c6d4 = await _0x5e5688['$$eval']('#countryselect_view3\x20>\x20option', _0x2244aa => {
                return _0x2244aa['map'](_0x1a1d74 => _0x1a1d74['value']);
            });
            var _0x84b406;
            for (var _0x1adc5d = 0x0; _0x1adc5d < _0x35c6d4['length']; _0x1adc5d++) {
                if (_0x35c6d4[_0x1adc5d]['startsWith']('' + _0x5960c3[_0x1ea27e]['Country'])) {
                    _0x84b406 = _0x35c6d4[_0x1adc5d];
                    break;
                }
                continue;
            }
            await _0x5e5688['select']('#countryselect_view3', '' + _0x84b406), await _0x5e5688['waitForSelector']('#address4'), await _0x5e5688['type']('#address4', '' + _0x5960c3[_0x1ea27e]['City'], 0x1f4), await _0x5af1c7(0x384), await _0x5e5688['waitForSelector']('#postcode'), await _0x5e5688['type']('#postcode', '' + _0x5960c3[_0x1ea27e]['Zip'], 0x1f4), await _0x5af1c7(0x4b0);
            const _0x1af2f4 = await _0x5e5688['url']();
            console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x42e607 = _0x1af2f4['split']('?')[0x1], _0x2899ff = await _0x5e5688['$']('#co_address_submit');
            await _0x2899ff['evaluate'](_0x96be26 => _0x96be26['click']()), await _0x5af1c7(0x1388), await _0x5e5688['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x42e607), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5e5688['waitForSelector']('#paymentbuttons'), await _0x5af1c7(0x1388), await _0x5e5688['click']('#paymentbuttons\x20>\x20div'), await _0x5af1c7(0x1c2), await _0x5e5688['waitForSelector']('#card-number'), await _0x5e5688['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x2c0811 = await _0x5e5688['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x287d38 = await _0x2c0811['contentFrame']();
            await _0x287d38['waitForSelector']('.InputContainer'), await _0x287d38['click']('.InputContainer\x20>\x20input'), await _0x5af1c7(0x578), await _0x5e5688['type']('#card-number', '' + _0x5960c3[_0x1ea27e]['CreditNumber']), await _0x5af1c7(0xfa), await _0x5e5688['type']('#card-expiry', '' + _0x5960c3[_0x1ea27e]['ExpiryDate']), await _0x5af1c7(0xfa), await _0x5e5688['type']('#card-cvc', '' + _0x5960c3[_0x1ea27e]['CVV']), await _0x5af1c7(0x7d0), await _0x5e5688['click']('#card-button'), console['log'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5e5688['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x57e297(_0x13d0a3, _0x30fb80);
            } catch {
                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x203DS\x20Failed')), _0x22529e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x22529e[0x0]['description'] = '3DS\x20Failed', await _0x57e297(_0x3cd445, _0x30fb80);
            }
        } catch (_0x2388d3) {
            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x485f51['name'] + ']\x20Task\x20' + (_0x1ea27e + 0x1) + '\x20:\x20' + _0x2388d3)), _0x22529e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x22529e[0x0]['description'] = '' + _0x2388d3, await _0x57e297(_0x3cd445, _0x30fb80);
        } finally {
            _0x40b9d9 && _0x40b9d9['close']();
            if (_0x1ea27e + 0x1 == _0x5960c3['length']) {
                console['log'](_0x1e7cf7['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5af1c7(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2743a8['AfewDelay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['AfewDelay']);
        }
    }
}
async function _0x6a12f2(_0x1c4dbb, _0x2472b8, _0x2b03d7, _0x35bae2, _0x3af951) {
    var _0xc2e740, _0x47f868 = {}, _0x2e93bb = [], _0xbf1e6c = {}, _0xd09596 = [
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
    !_0x35bae2 && (_0x35bae2 = {});
    if (_0x2472b8 != 'ver') {
        _0x2e24da(_0x2b03d7['name'] + '\x20Task\x20' + (_0x1c4dbb + 0x1) + '\x20/\x20' + _0x35bae2['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x35bae2, _0x1c4dbb), _0x2e93bb = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1d5408
                },
                {
                    'name': 'Size',
                    'value': '' + _0x35bae2[_0x1c4dbb]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2743a8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2ed8f3
                }
            ]
        }], _0xbf1e6c = { 'embeds': _0x2e93bb }, _0x47f868 = _0x2b03d7['data'];
        _0x2472b8 == 'exp' ? _0x47f868['data']['attributes']['email'] = '' + _0x35bae2[_0x1c4dbb]['FirstName'] + _0x35bae2[_0x1c4dbb]['LastName'] + _0x2743a8['catchall'] : _0x47f868['data']['attributes']['email'] = '' + _0x35bae2[_0x1c4dbb]['Email'];
        if (_0x35bae2[_0x1c4dbb]['Size'] == 'RANDOM') {
        }
        _0x47f868['data']['attributes']['properties']['$first_name'] = '' + _0x35bae2[_0x1c4dbb]['FirstName'], _0x47f868['data']['attributes']['properties']['$last_name'] = '' + _0x35bae2[_0x1c4dbb]['LastName'], _0x47f868['data']['attributes']['properties']['$address1'] = _0x35bae2[_0x1c4dbb]['Address1'] + '\x20' + _0x35bae2[_0x1c4dbb]['Address2'] + '\x20' + _0x35bae2[_0x1c4dbb]['HouseNumber'], _0x47f868['data']['attributes']['properties']['$zip'] = '' + _0x35bae2[_0x1c4dbb]['Zip'], _0x47f868['data']['attributes']['properties']['$city'] = '' + _0x35bae2[_0x1c4dbb]['City'], _0x47f868['data']['attributes']['properties']['$country'] = '' + _0x35bae2[_0x1c4dbb]['Country'], _0x47f868['data']['attributes']['properties']['Size'] = '' + _0x35bae2[_0x1c4dbb]['Size'], _0x47f868['data']['attributes']['properties']['$phone_number'] = '' + _0x35bae2[_0x1c4dbb]['Phone'], _0x47f868['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x35bae2[_0x1c4dbb]['Follower'];
    }
    if (_0x2743a8['useRandomProxy'] = ![])
        var _0x1bb543 = _0x3af951[_0x1c4dbb]['split'](':');
    else
        var _0x433151 = Math['round'](Math['random']() * (_0x3af951['length'] - 0x1)), _0x1bb543 = _0x3af951[_0x433151]['split'](':');
    var _0x1ac7da = {
        'jar': _0x1b5546,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2b03d7['url'],
        'headers': _0x2b03d7['headers'],
        'body': JSON['stringify'](_0x47f868),
        'proxy': 'http://' + _0x1bb543[0x2] + ':' + _0x1bb543[0x3] + '@' + _0x1bb543[0x0] + ':' + _0x1bb543[0x1]
    };
    return _0x2472b8 != 'ver' && (_0x1ac7da['url'] = _0x2b03d7['url'], _0x1ac7da['headers'] = _0x2b03d7['headers']), _0x2472b8 == 'ver' && (_0x1ac7da['method'] = 'GET'), new Promise(function (_0x149f4f, _0x589067) {
        callback = async (_0xc4babe, _0x55238b, _0x1d4ff9) => {
            if (!_0xc4babe && _0x55238b['statusCode'] == 0xca || !_0xc4babe && _0x55238b['statusCode'] == 0xc8) {
                if (_0x2472b8 != 'ver') {
                    var _0x5a4fc1 = await _0x17ee8c(_0x35bae2[_0x1c4dbb], _0x2b03d7, 'dev', ![]), _0x12ec6f = await _0x17ee8c(_0x35bae2[_0x1c4dbb], _0x2b03d7, 'pub', ![]);
                    const _0x4a0714 = {
                        'succesDEVMSG': { 'embeds': [_0x5a4fc1] },
                        'succesPUBMSG': { 'embeds': [_0x12ec6f] }
                    };
                    if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                        try {
                            await _0x57e297(_0x2743a8['webhook'], _0x4a0714['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x4a0714['succesDEVMSG']), await _0x5af1c7(0xc8);
                    try {
                        await _0x57e297(_0x5ed9e2, _0x4a0714['succesPUBMSG']);
                    } catch {
                    }
                    _0x33cd3c(_0x35bae2[_0x1c4dbb], _0x2b03d7);
                }
                _0x149f4f(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x2b03d7['name'] + ']\x20Task\x20' + (_0x1c4dbb + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x2472b8 != 'ver') {
                    var _0xa0dc83 = '' + _0xc4babe, _0x37c0f5 = await _0x17ee8c(_0x35bae2[_0x1c4dbb], _0x2b03d7, 'dev', !![], _0xa0dc83), _0x46113c = {};
                    _0x46113c['errorDEV'] = { 'embeds': [_0x37c0f5] }, _0xd3954c(_0x35bae2[_0x1c4dbb], _0x2b03d7), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x46113c['errorDEV']), await _0x57e297(_0x3cd445, _0x46113c['errorDEV']);
                }
                _0x589067(console['log'](_0x1f2091() + '\x20[' + _0x2b03d7['name'] + ']\x20Task\x20' + (_0x1c4dbb + 0x1) + ':\x20' + _0xc4babe));
            }
        };
        try {
            _0x2472b8 != 'ver' && console['log'](_0x1f2091() + '\x20[' + _0x2b03d7['name'] + ']\x20Task\x20' + (_0x1c4dbb + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x47f868['data']['attributes']['email']), _0xaed388(_0x1ac7da, callback);
        } catch (_0x2bb937) {
            console['log'](_0x1f2091() + '\x20Task\x20' + (_0x1c4dbb + 0x1) + ':\x20' + _0x2bb937);
        }
    });
}
;
async function _0x14ca23(_0x147306, _0x210259) {
    var _0x4e7869 = [];
    async function _0x4a06ff() {
        var _0x3f9096 = new _0x17a34e({
            'user': _0x2743a8['masterMail'],
            'password': _0x2743a8['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x59aa46(_0x54c08f) {
            _0x3f9096['openBox']('INBOX', ![], _0x54c08f);
        }
        _0x3f9096['once']('ready', function () {
            _0x59aa46(function (_0x412069, _0x29ec01) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x412069)
                    throw _0x412069;
                _0x3f9096['seq']['search'](['UNSEEN'], function (_0x24042d, _0x1d7bda) {
                    if (!_0x1d7bda || !_0x1d7bda['length'])
                        console['log'](_0x1f2091() + '\x20[' + _0x147306['name'] + ']\x20No\x20mails\x20found'), _0x3f9096['end']();
                    else {
                        var _0x291215 = _0x3f9096['seq']['fetch'](_0x1d7bda, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x291215['on']('message', function (_0x29c842, _0xa7b08d) {
                            var _0x219a8a = '(#' + _0xa7b08d + ')\x20';
                            _0x29c842['on']('body', function (_0x48715d, _0x4410d0) {
                                _0x5e5b57(_0x48715d, (_0x510cba, _0x3187fc) => {
                                    if (_0x3187fc['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3187fc['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3187fc['text']['split']('[')[0x2];
                                        var _0x3e3292 = mes['split'](']')[0x0];
                                        _0x4e7869['push'](_0x3e3292);
                                    }
                                });
                            }), _0x29c842['once']('end', function () {
                            });
                        }), _0x291215['once']('error', function (_0x60d5fd) {
                            console['log']('Fetch\x20error:\x20' + _0x60d5fd);
                        }), _0x291215['once']('end', function () {
                            _0x3f9096['end']();
                        });
                    }
                });
            });
        }), _0x3f9096['once']('error', function (_0x49911f) {
            console['log'](_0x1e7cf7['red'](_0x49911f['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3f9096['once']('end', async function () {
        }), _0x3f9096['connect']();
    }
    try {
        _0x4a06ff(), await _0x5af1c7(0xfa0), console['log']('Found\x20' + _0x4e7869['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x422b1e;
    _0x2e24da('' + _0x147306);
    var _0x4c7cd7 = _0x210259[0x0]['split'](':');
    const _0x536af9 = await _0x1bd0b6['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4c7cd7[0x0] + ':' + _0x4c7cd7[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Getting\x20Session');
        const _0x2766b9 = await _0x536af9['newPage']();
        await _0x2766b9['authenticate']({
            'username': '' + _0x4c7cd7[0x2],
            'password': '' + _0x4c7cd7[0x3]
        }), await _0x2766b9['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x2766b9, await _0x2766b9['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x2766b9['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Successfully\x20logged\x20in'), await _0x5af1c7(0x2710);
        } catch (_0xff0b22) {
            throw new Error('Login\x20session\x20expired\x20' + _0xff0b22);
        }
        for (var _0xb4763a = 0x0; _0xb4763a < _0x4e7869['length']; _0xb4763a++) {
            console['log'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Task\x20' + (_0xb4763a + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2e24da(_0x147306 + '\x20Task\x20' + (_0xb4763a + 0x1) + '\x20/\x20' + _0x4e7869['length']);
            const _0x30bfcf = await _0x536af9['newPage']();
            await _0x30bfcf['goto']('' + _0x4e7869[_0xb4763a], { 'waitUntil': 'networkidle2' }), await _0x5af1c7(0xbb8);
            try {
                const _0x85d768 = await _0x30bfcf['$']('#challenge-heading');
                _0x85d768 && (console['log'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Task\x20' + (_0xb4763a + 0x1) + '\x20:\x20' + _0x1e7cf7['yellow']('2FA\x20Required')), await _0x30bfcf['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x5af1c7(0x61a8), await _0x30bfcf['waitForSelector']('#payment-submit-btn'), await _0x30bfcf['$eval']('#payment-submit-btn', _0x53ab4a => _0x53ab4a['click']()), await _0x30bfcf['click']('#payment-submit-btn');
                try {
                    await _0x30bfcf['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x5af1c7(0x5dc), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Task\x20' + (_0xb4763a + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x416afe) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x416afe['message']);
                } finally {
                    await _0x30bfcf['close'](), await _0x5af1c7(0x4650);
                }
            } catch (_0x4831b3) {
                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x147306 + ']\x20Task\x20' + (_0xb4763a + 0x1) + '\x20:\x20' + _0x4831b3));
            }
        }
    } catch (_0x392203) {
        console['log'](_0x1e7cf7['red']('' + _0x392203));
    } finally {
        await _0x536af9['close']();
    }
}
const _0x38f025 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5f3a28, _0x49ab30, _0x160a6e) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x49df42 = 0x0; _0x49df42 < _0x49ab30['length']; _0x49df42++) {
                        if (_0x1937e3 != 'yes')
                            var _0x1937e3 = '', _0x2900e6 = 0x0;
                        var _0x5234d5;
                        await _0xfd4a0f(_0x49ab30, _0x49df42), _0x2e24da(_0x5f3a28['name'] + '\x20Task\x20' + (_0x49df42 + 0x1) + '\x20/\x20' + _0x49ab30['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        var _0x3ca68c = [
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
                        ], _0x2f8752 = Math['round'](Math['random']() * (_0x3ca68c['length'] - 0x1));
                        _0x49ab30[_0x49df42]['Size'] == 'RANDOM' && (_0x49ab30[_0x49df42]['Size'] = _0x3ca68c[_0x2f8752]);
                        var _0x19e925 = Math['round'](Math['random']() * (_0x160a6e['length'] - 0x1)), _0x46dcc2 = _0x160a6e[_0x19e925]['split'](':'), _0x233e07;
                        try {
                            _0x233e07 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46dcc2[0x0] + ':' + _0x46dcc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x233e07 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x46dcc2[0x0] + ':' + _0x46dcc2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x599be2 = await _0x233e07['newPage']();
                            await _0x599be2['authenticate']({
                                'username': '' + _0x46dcc2[0x2],
                                'password': '' + _0x46dcc2[0x3]
                            }), await _0x599be2['setRequestInterception'](!![]), _0x599be2['on']('request', _0x42e843 => {
                                _0x42e843['resourceType']() === 'image' || _0x42e843['resourceType']() === 'font' || _0x42e843['resourceType']() === 'media' ? _0x42e843['abort']() : _0x42e843['continue']();
                            }), await _0x599be2['goto'](_0x49ab30[_0x49df42]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x599be2['waitForSelector']('#accept-all-gdpr'), await _0x599be2['click']('#accept-all-gdpr'), await _0x599be2['waitForSelector']('#raffles-product'), await _0x5af1c7(0x3e8), await _0x599be2['$eval']('#raffles-product', _0x2e3356 => _0x2e3356['click']()), await _0x5af1c7(0x1388), await _0x599be2['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x32bff6 = await _0x599be2['$']('.fancybox-inner\x20>\x20iframe'), _0x4e413d = await _0x32bff6['contentFrame']();
                            console['log'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x4e413d['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x5af1c7(0x1f4), await _0x4e413d['type']('input[name=\x22sm-form-email\x22]', _0x49ab30[_0x49df42]['Email']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-name\x22]', _0x49ab30[_0x49df42]['FirstName'] + '\x20' + _0x49ab30[_0x49df42]['LastName']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-street\x22]', _0x49ab30[_0x49df42]['Address1'] + '\x20' + _0x49ab30[_0x49df42]['HouseNumber'] + '\x20' + _0x49ab30[_0x49df42]['Address2']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-city\x22]', _0x49ab30[_0x49df42]['City']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-province\x22]', _0x49ab30[_0x49df42]['State']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-zip\x22]', _0x49ab30[_0x49df42]['Zip']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-country\x22]', _0x49ab30[_0x49df42]['Country']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-form-phone\x22]', _0x49ab30[_0x49df42]['Phone']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x49ab30[_0x49df42]['Follower']), await _0x5af1c7(0xc8), await _0x4e413d['type']('input[name=\x22sm-cst.size\x22]', _0x49ab30[_0x49df42]['Size']), await _0x5af1c7(0x1f4), await _0x4e413d['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x5af1c7(0x1f4), await _0x4e413d['click']('.icheckbox_simple-custom'), await _0x5af1c7(0x1f4), console['log'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4e413d['$eval']('form', _0x116483 => _0x116483['submit']()), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1937e3 = '';
                            var _0x272d30 = await _0x17ee8c(_0x49ab30[_0x49df42], _0x5f3a28, 'dev', ![]), _0x587615 = await _0x17ee8c(_0x49ab30[_0x49df42], _0x5f3a28, 'pub', ![]);
                            const _0x31a6b2 = {
                                'succesDEVMSG': { 'embeds': [_0x272d30] },
                                'succesPUBMSG': { 'embeds': [_0x587615] }
                            };
                            try {
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x31a6b2['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x31a6b2['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x5ed9e2, _0x31a6b2['succesPUBMSG']);
                            } catch (_0x358da7) {
                                console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x358da7));
                            }
                        } catch (_0x239d1c) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20' + _0x239d1c)), _0x5234d5 = '' + _0x239d1c;
                            var _0x17bd59 = await _0x17ee8c(_0x49ab30[_0x49df42], _0x5f3a28, 'dev', !![], _0x5234d5), _0x272d30 = await _0x17ee8c(_0x49ab30[_0x49df42], _0x5f3a28, 'dev', ![]), _0x587615 = await _0x17ee8c(_0x49ab30[_0x49df42], _0x5f3a28, 'pub', ![]);
                            const _0x294b12 = {
                                'succesDEVMSG': { 'embeds': [_0x272d30] },
                                'succesPUBMSG': { 'embeds': [_0x587615] }
                            };
                            _0x294b12['errorDEV'] = { 'embeds': [_0x17bd59] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x294b12['errorDEV']), await _0x57e297(_0x3cd445, _0x294b12['errorDEV']), _0x239d1c != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1937e3 = 'yes');
                        } finally {
                            _0x233e07['close']();
                            if (_0x1937e3 == 'yes' && _0x2900e6 != 0x5 && _0x5234d5 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Task\x20' + (_0x49df42 + 0x1) + '\x20:\x20Retrying')), _0x49df42 = _0x49df42 - 0x1, _0x2900e6 = _0x2900e6 + 0x1;
                                continue;
                            }
                            _0x1937e3 == 'yes' && _0x2900e6 >= 0x5 && (_0xd3954c(_0x49ab30[_0x49df42], _0x5f3a28), _0x1937e3 = 'no', _0x2900e6 = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x5f3a28['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x32a302, _0x282f2d) {
                    var _0x4e5a5c = [];
                    async function _0x9a92b9() {
                        var _0x98ccc1 = new _0x17a34e({
                            'user': _0x2743a8['masterMail'],
                            'password': _0x2743a8['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x17158d(_0x49c893) {
                            _0x98ccc1['openBox']('INBOX', ![], _0x49c893);
                        }
                        _0x98ccc1['once']('ready', function () {
                            _0x17158d(function (_0x38d045, _0x4c44e3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x38d045)
                                    throw _0x38d045;
                                _0x98ccc1['seq']['search'](['UNSEEN'], function (_0x2bcd87, _0x5598c7) {
                                    if (!_0x5598c7 || !_0x5598c7['length'])
                                        console['log'](_0x1f2091() + '\x20[' + _0x32a302['name'] + ']\x20No\x20mails\x20found'), _0x98ccc1['end']();
                                    else {
                                        var _0x5f29cd = _0x98ccc1['seq']['fetch'](_0x5598c7, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5f29cd['on']('message', function (_0x5130f6, _0x36beb8) {
                                            var _0x73f4f0 = '(#' + _0x36beb8 + ')\x20';
                                            _0x5130f6['on']('body', function (_0x3bf846, _0x29254c) {
                                                _0x5e5b57(_0x3bf846, (_0x5d535d, _0x1b87da) => {
                                                    if (_0x1b87da['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x11f2af = _0x1b87da['html']['split']('\x0a');
                                                        for (var _0x187aec = 0x0; _0x187aec < _0x11f2af['length']; _0x187aec++) {
                                                            if (_0x11f2af[_0x187aec]['includes']('salesmanago') && _0x11f2af[_0x187aec]['includes']('<td') && _0x11f2af[_0x187aec]['includes']('href')) {
                                                                var _0x4b4f53 = _0x11f2af[_0x187aec]['split']('href=\x22'), _0x787cb0 = _0x4b4f53[0x1]['split']('\x22')[0x0];
                                                                _0x4e5a5c['push'](_0x787cb0);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x5130f6['once']('end', function () {
                                            });
                                        }), _0x5f29cd['once']('error', function (_0x4ddd99) {
                                            console['log']('Fetch\x20error:\x20' + _0x4ddd99);
                                        }), _0x5f29cd['once']('end', function () {
                                            _0x98ccc1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x98ccc1['once']('error', function (_0x597a18) {
                            console['log'](_0x1e7cf7['red'](_0x597a18['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x98ccc1['once']('end', async function () {
                        }), _0x98ccc1['connect']();
                    }
                    async function _0xf3573a(_0x34be7f, _0x516e60, _0x4e2e49) {
                        for (var _0x1f1727 = 0x0; _0x1f1727 < _0x516e60['length']; _0x1f1727++) {
                            async function _0x53152b(_0x9360cf, _0x4d063c, _0x1d7537, _0xeaf9dc, _0x3af770) {
                                var _0x4dc42d, _0x3eb34b = {}, _0xa6455d = [], _0x250e67 = {}, _0xe2205d = [
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
                                ], _0x2d2cfc = Math['round'](Math['random']() * (_0xe2205d['length'] - 0x1));
                                _0xeaf9dc[_0x9360cf]['Size'] == 'RANDOM' && (_0xeaf9dc[_0x9360cf]['Size'] = _0xe2205d[_0x2d2cfc]);
                                !_0xeaf9dc && (_0xeaf9dc = {});
                                if (_0x2743a8['useRandomProxy'] = ![])
                                    var _0x11eff6 = _0x3af770[_0x9360cf]['split'](':');
                                else
                                    var _0xa9c98e = Math['round'](Math['random']() * (_0x3af770['length'] - 0x1)), _0x11eff6 = _0x3af770[_0xa9c98e]['split'](':');
                                var _0x33bd73 = {
                                    'jar': _0x1b5546,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1d7537['url'],
                                    'headers': _0x1d7537['headers'],
                                    'body': JSON['stringify'](_0x3eb34b),
                                    'proxy': 'http://' + _0x11eff6[0x2] + ':' + _0x11eff6[0x3] + '@' + _0x11eff6[0x0] + ':' + _0x11eff6[0x1]
                                };
                                return _0x4d063c != 'ver' && (_0x33bd73['url'] = _0x1d7537['url'], _0x33bd73['headers'] = _0x1d7537['headers']), _0x4d063c == 'ver' && (_0x33bd73['method'] = 'GET', _0x33bd73['url'] = _0xeaf9dc[_0x9360cf]), new Promise(function (_0x245882, _0x549007) {
                                    callback = async (_0x4c5d3e, _0x4d1997, _0xb18d13) => {
                                        if (!_0x4c5d3e && _0x4d1997['statusCode'] == 0xca || !_0x4c5d3e && _0x4d1997['statusCode'] == 0xc8) {
                                            if (_0x4d063c != 'ver') {
                                                var _0x90d674 = await _0x17ee8c(_0xeaf9dc[_0x9360cf], _0x1d7537, 'dev', ![]), _0x111c3c = await _0x17ee8c(_0xeaf9dc[_0x9360cf], _0x1d7537, 'pub', ![]);
                                                const _0x4624c0 = {
                                                    'succesDEVMSG': { 'embeds': [_0x90d674] },
                                                    'succesPUBMSG': { 'embeds': [_0x111c3c] }
                                                };
                                                if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                                    try {
                                                        await _0x57e297(_0x2743a8['webhook'], _0x4624c0['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x4624c0['succesDEVMSG']), await _0x5af1c7(0xc8);
                                                try {
                                                    await _0x57e297(_0x5ed9e2, _0x4624c0['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x33cd3c(_0xeaf9dc[_0x9360cf], _0x1d7537);
                                            }
                                            _0x245882(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x1d7537['name'] + ']\x20Task\x20' + (_0x9360cf + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4d063c != 'ver') {
                                                var _0x16c483 = '' + _0x4c5d3e, _0x8b1ded = await _0x17ee8c(_0xeaf9dc[_0x9360cf], _0x1d7537, 'dev', !![], _0x16c483), _0x31a72c = {};
                                                _0x31a72c['errorDEV'] = { 'embeds': [_0x8b1ded] }, _0xd3954c(_0xeaf9dc[_0x9360cf], _0x1d7537), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x31a72c['errorDEV']), await _0x57e297(_0x3cd445, _0x31a72c['errorDEV']);
                                            }
                                            _0x549007(console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x1d7537['name'] + ']\x20Task\x20' + (_0x9360cf + 0x1) + ':\x20' + _0x4c5d3e)));
                                        }
                                    };
                                    try {
                                        _0x4d063c != 'ver' ? console['log'](_0x1f2091() + '\x20[' + _0x1d7537['name'] + ']\x20Task\x20' + (_0x9360cf + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3eb34b['data']['attributes']['email']) : console['log'](_0x1f2091() + '\x20[' + _0x1d7537['name'] + ']\x20Task\x20' + (_0x9360cf + 0x1) + ':\x20Fetching\x20Response'), _0xaed388(_0x33bd73, callback);
                                    } catch (_0xfd3baa) {
                                        console['log'](_0x1f2091() + '\x20Task\x20' + (_0x9360cf + 0x1) + ':\x20' + _0xfd3baa);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x53152b(_0x1f1727, 'ver', _0x34be7f, _0x516e60, _0x4e2e49), console['log'](_0x1f2091() + '\x20[' + _0x34be7f['name'] + ']\x20Sleeping\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                            } catch (_0x1e79e5) {
                            }
                        }
                    }
                    try {
                        _0x9a92b9(), await _0x5af1c7(0xfa0), console['log']('Found\x20' + _0x4e5a5c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0xf3573a(_0x32a302, _0x4e5a5c, _0x282f2d);
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
            'function': async function (_0x2e2d69, _0x4dd8bd, _0x7784dc) {
                for (var _0x5529a4 = 0x0; _0x5529a4 < _0x4dd8bd['length']; _0x5529a4++) {
                    _0x2743a8['AfewDelay'] = _0x2743a8['delay'];
                    var _0x3970f6;
                    if (_0x8c7cd1 != 'yes')
                        var _0x8c7cd1 = '', _0x338c93 = 0x0;
                    var _0xf951bd = _0x4dd8bd[_0x5529a4]['Url'];
                    _0x2e24da(_0x2e2d69['name'] + '\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20/\x20' + _0x4dd8bd['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x4dd8bd, _0x5529a4);
                    var _0x369674 = await _0x17ee8c(_0x4dd8bd[_0x5529a4], _0x2e2d69, 'dev', ![]), _0x594317 = await _0x17ee8c(_0x4dd8bd[_0x5529a4], _0x2e2d69, 'pub', ![]);
                    const _0x563605 = {
                        'succesDEVMSG': { 'embeds': [_0x369674] },
                        'succesPUBMSG': { 'embeds': [_0x594317] }
                    };
                    if (_0x4dd8bd[_0x5529a4]['Email'] == '' || _0x4dd8bd[_0x5529a4]['FirstName'] == '' || _0x4dd8bd[_0x5529a4]['LastName'] == '' || _0x4dd8bd[_0x5529a4]['Country'] == '' || _0x4dd8bd[_0x5529a4]['Size'] == '' || _0x4dd8bd[_0x5529a4]['Address1'] == '' || _0x4dd8bd[_0x5529a4]['Zip'] == '') {
                        console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2743a8['useRandomProxy'] = ![])
                        var _0x266cc8 = _0x7784dc[_0x5529a4]['split'](':');
                    else
                        var _0x3b397c = Math['round'](Math['random']() * (_0x7784dc['length'] - 0x1)), _0x266cc8 = _0x7784dc[_0x3b397c]['split'](':');
                    const _0x485987 = await _0x1bd0b6['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x266cc8[0x0] + ':' + _0x266cc8[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x293bd7 = await _0x485987['newPage']();
                        await _0x293bd7['setDefaultNavigationTimeout'](0x1d4c0), await _0x293bd7['authenticate']({
                            'username': '' + _0x266cc8[0x2],
                            'password': '' + _0x266cc8[0x3]
                        }), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x293bd7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x293bd7['setRequestInterception'](!![]), _0x293bd7['on']('request', _0x433970 => {
                            _0x433970['resourceType']() === 'image' || _0x433970['resourceType']() === 'font' || _0x433970['resourceType']() === 'media' ? _0x433970['abort']() : _0x433970['continue']();
                        }), await _0x293bd7['goto'](_0xf951bd, { 'waitUntil': 'networkidle2' }), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x293bd7['waitForTimeout'](0xfa0), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x293bd7['waitForTimeout'](0x320);
                        if (_0x4dd8bd[_0x5529a4]['Size'] == 'RANDOM') {
                            console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x93768a = await _0x293bd7['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5dcdcb => {
                                return _0x5dcdcb['map'](_0x4288b2 => _0x4288b2['href']);
                            });
                            var _0x3f9647 = Math['round'](Math['random']() * (_0x93768a['length'] - 0x1));
                            await _0x293bd7['goto']('' + _0x93768a[_0x3f9647]);
                        } else {
                            console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4dd8bd[_0x5529a4]['Size']);
                            try {
                                const _0x2b6d26 = await _0x293bd7['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x4dd8bd[_0x5529a4]['Size'] + '\x22]\x20>\x20a', _0x55b8cd => {
                                    return _0x55b8cd['map'](_0x28115f => _0x28115f['href']);
                                });
                                await _0x293bd7['goto']('' + _0x2b6d26[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x1af592) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20' + _0x1af592 + '\x20Size\x20not\x20found')), _0x3970f6 = 'Size\x20Not\x20Found';
                                var _0x97f233 = await _0x17ee8c(_0x4dd8bd[_0x5529a4], _0x2e2d69, 'dev', !![], _0x3970f6);
                                _0x563605['errorDEV'] = { 'embeds': [_0x97f233] };
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x563605['errorDEV']);
                                await _0x57e297(_0x3cd445, _0x563605['errorDEV']);
                                continue;
                            }
                        }
                        await _0x293bd7['waitForTimeout'](0x258), await _0x293bd7['type']('#raffle-instagram', '' + _0x4dd8bd[_0x5529a4]['Follower'], { 'delay': 0x64 }), await _0x293bd7['waitForTimeout'](0x384), await _0x293bd7['click']('#raffle-terms'), await _0x293bd7['waitForTimeout'](0x384), await _0x293bd7['evaluate'](() => {
                            const _0xecadb1 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0xecadb1['click']();
                        }), await _0x293bd7['waitForTimeout'](0xbb8), await _0x293bd7['waitForSelector']('#checkout_email'), await _0x5af1c7(0x3e8), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x293bd7['type']('#checkout_email', '' + _0x4dd8bd[_0x5529a4]['Email'], 0x32), await _0x5af1c7(0x320), await _0x293bd7['select']('#checkout_shipping_address_country', '' + _0x4dd8bd[_0x5529a4]['Country']), await _0x293bd7['waitForTimeout'](0x258), await _0x293bd7['type']('#checkout_shipping_address_first_name', '' + _0x4dd8bd[_0x5529a4]['FirstName']), await _0x293bd7['waitForTimeout'](0x320), await _0x293bd7['type']('#checkout_shipping_address_last_name', '' + _0x4dd8bd[_0x5529a4]['LastName']), await _0x293bd7['waitForTimeout'](0x2bc), await _0x293bd7['type']('#checkout_shipping_address_address1', _0x4dd8bd[_0x5529a4]['Address1'] + '\x20' + _0x4dd8bd[_0x5529a4]['HouseNumber']), await _0x293bd7['waitForTimeout'](0x2bc), await _0x293bd7['type']('#checkout_shipping_address_address2', '' + _0x4dd8bd[_0x5529a4]['Address2']), await _0x293bd7['waitForTimeout'](0x2bc);
                        _0x4dd8bd[_0x5529a4]['Postcode'] == undefined ? await _0x293bd7['type']('#checkout_shipping_address_zip', '' + _0x4dd8bd[_0x5529a4]['Zip']) : await _0x293bd7['type']('#checkout_shipping_address_zip', '' + _0x4dd8bd[_0x5529a4]['Postcode']);
                        await _0x293bd7['waitForTimeout'](0x2bc), await _0x293bd7['type']('#checkout_shipping_address_city', '' + _0x4dd8bd[_0x5529a4]['City']), await _0x293bd7['waitForTimeout'](0x2bc), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x293bd7, _0x293bd7['evaluate'](() => {
                            const _0xbcc943 = document['querySelector']('#continue_button');
                            for (var _0x521092 = 0x0; _0x521092 < 0x5; _0x521092++) {
                                if (_0xbcc943) {
                                    _0xbcc943['click'](), _0xbcc943['click']();
                                    break;
                                } else
                                    _0x5af1c7(0xfa0);
                            }
                        }), await _0x293bd7['waitForTimeout'](0x1194);
                        try {
                            await _0x293bd7['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x293bd7['evaluate'](() => {
                            const _0xeb44a8 = document['querySelector']('#continue_button');
                            for (var _0x3150fd = 0x0; _0x3150fd < 0x5; _0x3150fd++) {
                                if (_0xeb44a8) {
                                    _0xeb44a8['click']();
                                    break;
                                } else
                                    _0x5af1c7(0xfa0);
                            }
                        }), await _0x293bd7['waitForTimeout'](0x7d0), console['log'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x293bd7['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x293bd7['evaluate'](() => {
                            const _0x3c5890 = document['querySelector']('#continue_button');
                            for (var _0x3674b8 = 0x0; _0x3674b8 < 0x5; _0x3674b8++) {
                                if (_0x3c5890) {
                                    _0x3c5890['click']();
                                    break;
                                } else
                                    _0x5af1c7(0xfa0);
                            }
                        }), await _0x293bd7['waitForTimeout'](0x1194), await _0x293bd7['waitForSelector']('#continue_button'), _0x293bd7['evaluate'](() => {
                            const _0x322bd9 = document['querySelector']('#continue_button');
                            for (var _0x3697a1 = 0x0; _0x3697a1 < 0x5; _0x3697a1++) {
                                if (_0x322bd9) {
                                    _0x322bd9['click']();
                                    break;
                                } else
                                    _0x5af1c7(0xfa0);
                            }
                        });
                        try {
                            await _0x293bd7['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x8c7cd1 = 'no', _0x33cd3c(_0x4dd8bd[_0x5529a4], _0x2e2d69), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                try {
                                    await _0x57e297(_0x2743a8['webhook'], _0x563605['succesDEVMSG']);
                                } catch {
                                }
                            await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x563605['succesDEVMSG']), await _0x5af1c7(0xc8);
                            try {
                                await _0x57e297(_0x5ed9e2, _0x563605['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x39e502) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x39e502));
                        }
                    } catch (_0x2b7436) {
                        console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20' + _0x2b7436)), _0x3970f6 = '' + _0x2b7436;
                        var _0x97f233 = await _0x17ee8c(_0x4dd8bd[_0x5529a4], _0x2e2d69, 'dev', !![], _0x3970f6);
                        _0x563605['errorDEV'] = { 'embeds': [_0x97f233] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x563605['errorDEV']), await _0x57e297(_0x3cd445, _0x563605['errorDEV']), _0x8c7cd1 = 'yes';
                    } finally {
                        _0x485987 && _0x485987['close']();
                        if (_0x8c7cd1 == 'yes' && _0x338c93 != 0x5 && _0x3970f6 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2e2d69['name'] + ']\x20Task\x20' + (_0x5529a4 + 0x1) + '\x20:\x20Retrying')), _0x5529a4 = _0x5529a4 - 0x1, _0x338c93 = _0x338c93 + 0x1;
                            continue;
                        }
                        _0x8c7cd1 == 'yes' && _0x338c93 >= 0x5 && (_0xd3954c(_0x4dd8bd[_0x5529a4], _0x2e2d69), _0x8c7cd1 = 'no', _0x338c93 = 0x0);
                        if (_0x5529a4 + 0x1 == _0x4dd8bd['length']) {
                            await _0x5af1c7(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2743a8['AfewDelay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['AfewDelay']);
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
                'function': async function (_0x2bf0d4, _0x2076ad, _0x1d7b22) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x34c997 = 0x0; _0x34c997 < _0x2076ad['length']; _0x34c997++) {
                        if (_0x414c8f != 'yes')
                            var _0x414c8f = '', _0x23770a = 0x0;
                        var _0x5cf386;
                        await _0xfd4a0f(_0x2076ad, _0x34c997), _0x2e24da(_0x2bf0d4['name'] + '\x20Task\x20' + (_0x34c997 + 0x1) + '\x20/\x20' + _0x2076ad['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        var _0x58d435 = await _0x17ee8c(_0x2076ad[_0x34c997], _0x2bf0d4, 'acc', ![]);
                        const _0x55f912 = { 'succesDEVMSG': { 'embeds': [_0x58d435] } }, _0x468119 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x5a0360 = Math['round'](Math['random']() * (_0x1d7b22['length'] - 0x1)), _0x41e8ce = _0x1d7b22[_0x5a0360]['split'](':');
                        const _0x4f95c5 = await _0x1bd0b6['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x41e8ce[0x0] + ':' + _0x41e8ce[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4d69fd = await _0x4f95c5['newPage']();
                            await _0x4d69fd['authenticate']({
                                'username': '' + _0x41e8ce[0x2],
                                'password': '' + _0x41e8ce[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d69fd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4d69fd['setRequestInterception'](!![]), _0x4d69fd['on']('request', _0x195307 => {
                                _0x195307['resourceType']() === 'image' ? _0x195307['abort']() : _0x195307['continue']();
                            }), await _0x4d69fd['goto']('' + _0x468119), await _0x4d69fd['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x4d69fd['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5af1c7(0x7d0), console['log'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5af1c7(0x190), await _0x4d69fd['waitForSelector']('#firstname'), await _0x4d69fd['type']('#firstname', _0x2076ad[_0x34c997]['FirstName'], { 'delay': 0xf0 }), await _0x5af1c7(0x190), await _0x4d69fd['type']('#lastname', _0x2076ad[_0x34c997]['LastName'], { 'delay': 0xe6 }), await _0x5af1c7(0x190), await _0x4d69fd['type']('#email_address', _0x2076ad[_0x34c997]['Email'], { 'delay': 0x122 }), await _0x5af1c7(0x190), await _0x4d69fd['type']('#password', _0x2076ad[_0x34c997]['Password'], { 'delay': 0x82 }), await _0x5af1c7(0x1f4), await _0x4d69fd['type']('#password-confirmation', _0x2076ad[_0x34c997]['Password'], { 'delay': 0x7c }), console['log'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5af1c7(0x2bc), await _0x4d69fd['$eval']('#form-validate', _0x16bb63 => _0x16bb63['submit']()), await _0x5af1c7(0x1388);
                            const _0x56f0c8 = await _0x4d69fd['$']('#email_address-error');
                            if (_0x56f0c8)
                                throw new Error('Invalid\x20Email');
                            const _0x187bd5 = await _0x4d69fd['$']('#password-error');
                            if (_0x187bd5)
                                throw new Error('Invalid\x20Password');
                            await _0x4d69fd['waitForSelector']('div.mesg-success'), _0x414c8f = 'no', console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Account\x20' + _0x2076ad[_0x34c997]['Email'] + '\x20Generated')), _0x37c275['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2076ad[_0x34c997]['Email'] + ',' + _0x2076ad[_0x34c997]['Password']);
                            try {
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x55f912['succesDEVMSG']);
                            } catch {
                            }
                            await _0x57e297(_0x3f430d, _0x55f912['succesDEVMSG']), console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x547c86) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20' + _0x547c86)), _0x5cf386 = '' + _0x547c86;
                            var _0x2ad587 = await _0x17ee8c(_0x2076ad[_0x34c997], _0x2bf0d4, 'acc', !![], _0x5cf386);
                            _0x55f912['errorDEV'] = { 'embeds': [_0x2ad587] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x55f912['errorDEV']), await _0x57e297(_0x3cd445, _0x55f912['errorDEV']), _0x414c8f = 'yes';
                        } finally {
                            _0x4f95c5['close']();
                            if (_0x414c8f == 'yes' && _0x23770a != 0x5) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Task\x20' + (_0x34c997 + 0x1) + '\x20:\x20Retrying')), _0x34c997 = _0x34c997 - 0x1, _0x23770a = _0x23770a + 0x1;
                                continue;
                            }
                            _0x414c8f == 'yes' && _0x23770a >= 0x5 && (_0xd3954c(_0x2076ad[_0x34c997], _0x2bf0d4), _0x414c8f = 'no', _0x23770a = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x2bf0d4['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x11f63b, _0x4b1271, _0x52dc65) {
                    var _0x4b1271 = [];
                    async function _0x515112() {
                        var _0x1b8b13 = new _0x17a34e({
                            'user': _0x2743a8['masterMail'],
                            'password': _0x2743a8['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5dd794(_0x2b8190) {
                            _0x1b8b13['openBox']('INBOX', ![], _0x2b8190);
                        }
                        _0x1b8b13['once']('ready', function () {
                            _0x5dd794(function (_0x4b404, _0x573bff) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4b404)
                                    throw _0x4b404;
                                _0x1b8b13['seq']['search'](['UNSEEN'], function (_0x2dcff6, _0x537880) {
                                    if (!_0x537880 || !_0x537880['length'])
                                        console['log'](_0x1f2091() + '\x20[' + _0x11f63b['name'] + ']\x20No\x20mails\x20found'), _0x1b8b13['end']();
                                    else {
                                        var _0x1476c6 = _0x1b8b13['seq']['fetch'](_0x537880, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1476c6['on']('message', function (_0x43c3c4, _0x2afd86) {
                                            var _0x71f7ed = '(#' + _0x2afd86 + ')\x20';
                                            _0x43c3c4['on']('body', function (_0x2beeab, _0x3afd95) {
                                                _0x5e5b57(_0x2beeab, (_0x31fd96, _0x3a8f9e) => {
                                                    if (_0x3a8f9e['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x12fc37 = _0x3a8f9e['text']['split']('[')[0x2], _0x1d7d5f = _0x12fc37['split'](']')[0x0], _0x66b922 = _0x3a8f9e['html']['split']('\x0a');
                                                        _0x4b1271['push'](_0x1d7d5f);
                                                    }
                                                });
                                            }), _0x43c3c4['once']('end', function () {
                                            });
                                        }), _0x1476c6['once']('error', function (_0x17d22b) {
                                            console['log']('Fetch\x20error:\x20' + _0x17d22b);
                                        }), _0x1476c6['once']('end', function () {
                                            _0x1b8b13['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1b8b13['once']('error', function (_0x1d53c0) {
                            console['log'](_0x1e7cf7['red'](_0x1d53c0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1b8b13['once']('end', async function () {
                        }), _0x1b8b13['connect']();
                    }
                    async function _0x11c79c(_0x5f0521, _0x13b42f, _0x5a55fc) {
                        _0x1bd0b6['use'](_0x4ebb3c());
                        for (var _0x37d0ad = 0x0; _0x37d0ad < _0x13b42f['length']; _0x37d0ad++) {
                            if (_0x20b5cc != 'yes')
                                var _0x20b5cc = '', _0x4f8328 = 0x0;
                            var _0x17bb5b = Math['round'](Math['random']() * (_0x5a55fc['length'] - 0x1)), _0x588bbf = _0x5a55fc[_0x17bb5b]['split'](':');
                            const _0x2276a7 = await _0x1bd0b6['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x588bbf[0x0] + ':' + _0x588bbf[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x41c097 = await _0x2276a7['newPage']();
                                await _0x41c097['authenticate']({
                                    'username': '' + _0x588bbf[0x2],
                                    'password': '' + _0x588bbf[0x3]
                                }), console['log'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x41c097['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x41c097['setRequestInterception'](!![]), _0x41c097['on']('request', _0xa387e0 => {
                                    _0xa387e0['resourceType']() === 'image' || _0xa387e0['resourceType']() === 'font' || _0xa387e0['resourceType']() === 'media' ? _0xa387e0['abort']() : _0xa387e0['continue']();
                                }), console['log'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41c097['goto'](_0x13b42f[_0x37d0ad]), console['log'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x41c097['waitForTimeout'](0xbb8);
                                try {
                                    await _0x41c097['waitForSelector']('.account-nav'), _0x20b5cc = 'no', console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x2448d7 = await _0x17ee8c(null, _0x5f0521, 'ver', ![]);
                                    const _0x500c55 = { 'succesDEVMSG': { 'embeds': [_0x2448d7] } };
                                    await _0x57e297(_0x360feb, _0x500c55['succesDEVMSG']);
                                } catch (_0x5e7264) {
                                    throw new Error(_0x5e7264);
                                }
                            } catch (_0x1f448b) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20' + _0x1f448b));
                                var _0x48a467 = _0x1f448b, _0x252d77 = await _0x17ee8c(null, _0x5f0521, 'ver', !![], _0x48a467);
                                const _0x1f9535 = { 'errorDEVMSG': { 'embeds': [_0x252d77] } };
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x1f9535['errorDEVMSG']), await _0x57e297(_0x3cd445, _0x1f9535['errorDEVMSG']), _0x20b5cc = 'yes';
                            } finally {
                                _0x2276a7['close']();
                                if (_0x20b5cc == 'yes' && _0x4f8328 != 0x5) {
                                    console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Task\x20' + (_0x37d0ad + 0x1) + '\x20:\x20Retrying')), _0x37d0ad = _0x37d0ad - 0x1, _0x4f8328 = _0x4f8328 + 0x1;
                                    continue;
                                }
                                _0x20b5cc == 'yes' && _0x4f8328 >= 0x5 && (_0x20b5cc = 'no', _0x4f8328 = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x5f0521['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                            }
                        }
                    }
                    try {
                        _0x515112(), await _0x5af1c7(0xfa0), console['log']('Found\x20' + _0x4b1271['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x11c79c(_0x11f63b, _0x4b1271, _0x52dc65);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4525e2, _0x2e2b2a, _0x29542f) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5dc52a = 0x0; _0x5dc52a < _0x2e2b2a['length']; _0x5dc52a++) {
                        var _0x1266f7;
                        await _0xfd4a0f(_0x2e2b2a, _0x5dc52a);
                        if (_0x529444 != 'yes')
                            var _0x529444 = '', _0x2ba647 = 0x0;
                        _0x2e24da(_0x4525e2['name'] + '\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20/\x20' + _0x2e2b2a['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        var _0x5db812 = Math['round'](Math['random']() * (_0x29542f['length'] - 0x1)), _0x41f663 = _0x29542f[_0x5db812]['split'](':'), _0xb625b0;
                        try {
                            _0xb625b0 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x41f663[0x0] + ':' + _0x41f663[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xb625b0 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x41f663[0x0] + ':' + _0x41f663[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33aea5 = await _0xb625b0['newPage'](), _0x40cd40 = await _0x33aea5['target']()['createCDPSession'](), { windowId: _0x3b7d14 } = await _0x40cd40['send']('Browser.getWindowForTarget');
                            await _0x33aea5['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x301f36 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x33aea5['authenticate']({
                                'username': '' + _0x41f663[0x2],
                                'password': '' + _0x41f663[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33aea5['goto']('' + _0x2e2b2a[_0x5dc52a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x33aea5['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x40cd40['send']('Browser.setWindowBounds', {
                                'windowId': _0x3b7d14,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x5af1c7(0x1388), await _0x33aea5['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x33aea5['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5af1c7(0x1f4), console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Logging\x20in'), await _0x33aea5['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0xa7d49a => _0xa7d49a['click']()), await _0x33aea5['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x33aea5['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5af1c7(0x7d0), await _0x33aea5['waitForSelector']('#email-login'), await _0x33aea5['type']('#email-login', '' + _0x2e2b2a[_0x5dc52a]['Email']), await _0x5af1c7(0xdac), await _0x33aea5['waitForSelector']('#password'), await _0x33aea5['type']('#password', '' + _0x2e2b2a[_0x5dc52a]['Password'], { 'delay': 0xe6 }), await _0x5af1c7(0x157c);
                            try {
                                await _0x33aea5['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x1c13c7 => _0x1c13c7['click']());
                            } catch {
                            }
                            try {
                                await _0x33aea5['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0xa7c211) {
                            }
                            await _0x5af1c7(0x3e8);
                            const _0x5a0fb1 = await _0x33aea5['$']('.enteredDraw_container__2KmQ_');
                            if (_0x5a0fb1)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2e2b2a[_0x5dc52a]['Size']);
                            if (_0x2e2b2a[_0x5dc52a]['Size'] != 'RANDOM') {
                                var _0x3b1b9c = _0x2e2b2a[_0x5dc52a]['Size']['replace']('.', ',');
                                const _0x39d63b = await _0x33aea5['$x']('//div[contains(text(),\x20' + _0x3b1b9c + ')]');
                                await _0x39d63b[0x0]['click']();
                            } else {
                                const _0x4668cc = await _0x33aea5['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x474131 = Math['round'](Math['random']() * (_0x4668cc['length'] - 0x1));
                                await _0x4668cc[_0x474131]['click']();
                            }
                            await _0x5af1c7(0x1f4);
                            const _0x937ff4 = await _0x33aea5['$']('.addressList_addressItem__LE2PB');
                            if (_0x937ff4 && _0x2e2b2a[_0x5dc52a]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Filling\x20Address'), await _0x33aea5['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x5af1c7(0x5dc), await _0x33aea5['waitForSelector']('#firstname'), await _0x33aea5['type']('#firstname', '' + _0x2e2b2a[_0x5dc52a]['FirstName']), await _0x5af1c7(0x1f4), await _0x33aea5['waitForSelector']('#firstname'), await _0x33aea5['type']('#lastname', '' + _0x2e2b2a[_0x5dc52a]['LastName']), await _0x5af1c7(0x1f4), await _0x33aea5['waitForSelector']('#firstname'), await _0x33aea5['type']('#street', '' + _0x2e2b2a[_0x5dc52a]['Address1']), await _0x5af1c7(0x1f4), await _0x33aea5['waitForSelector']('#firstname'), await _0x33aea5['type']('#houseNumber', _0x2e2b2a[_0x5dc52a]['HouseNumber'] + '\x20' + _0x2e2b2a[_0x5dc52a]['Address2']), await _0x5af1c7(0x1f4), await _0x33aea5['waitForSelector']('#firstname'), await _0x33aea5['select']('#country_code', '' + _0x2e2b2a[_0x5dc52a]['Country']), await _0x5af1c7(0x1f4), await _0x33aea5['type']('#postcode', '' + _0x2e2b2a[_0x5dc52a]['Zip']), await _0x5af1c7(0x1f4), await _0x33aea5['type']('#city', '' + _0x2e2b2a[_0x5dc52a]['City']), await _0x5af1c7(0x1f4), await _0x33aea5['type']('#telephone', '' + _0x2e2b2a[_0x5dc52a]['Phone']), await _0x5af1c7(0x1f4), await _0x33aea5['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x5af1c7(0x9c4);
                            try {
                                await _0x33aea5['type']('#instagram_name', '' + _0x2e2b2a[_0x5dc52a]['Follower']), await _0x33aea5['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5af1c7(0x5dc);
                            try {
                                await _0x33aea5['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x5af1c7(0x5dc), await _0x33aea5['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3d3192 => _0x3d3192['click']()), await _0x5af1c7(0x1388);
                            try {
                                await _0x33aea5['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x33aea5['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2e2b2a[_0x5dc52a]['Size'] != 'RANDOM') {
                                    var _0x3b1b9c = _0x2e2b2a[_0x5dc52a]['Size']['replace']('.', ',');
                                    const _0x461e90 = await _0x33aea5['$x']('//div[contains(text(),\x20' + _0x3b1b9c + ')]');
                                    await _0x461e90[0x0]['click']();
                                } else {
                                    const _0x1ba78a = await _0x33aea5['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x474131 = Math['round'](Math['random']() * (_0x1ba78a['length'] - 0x1));
                                    await _0x1ba78a[_0x474131]['click']();
                                }
                                await _0x5af1c7(0x5dc);
                                try {
                                    await _0x33aea5['hover']('#instagram_name'), await _0x33aea5['type']('#instagram_name', '' + _0x2e2b2a[_0x5dc52a]['Follower']), await _0x33aea5['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Retrying'), await _0x33aea5['hover']('.checkBox_boxHolder__wLGVe'), await _0x5af1c7(0x5dc), await _0x33aea5['click']('.checkBox_boxHolder__wLGVe'), await _0x5af1c7(0x157c), await _0x33aea5['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5c5414 => _0x5c5414['click']()), await _0x5af1c7(0x1388), await _0x33aea5['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x529444 = 'no', _0x33cd3c(_0x2e2b2a[_0x5dc52a], _0x4525e2), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x2daea4 = await _0x17ee8c(_0x2e2b2a[_0x5dc52a], _0x4525e2, 'dev', ![]), _0x500967 = await _0x17ee8c(_0x2e2b2a[_0x5dc52a], _0x4525e2, 'pub', ![]);
                            const _0xa20bc2 = {
                                'succesDEVMSG': { 'embeds': [_0x2daea4] },
                                'succesPUBMSG': { 'embeds': [_0x500967] }
                            };
                            try {
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0xa20bc2['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0xa20bc2['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x5ed9e2, _0xa20bc2['succesPUBMSG']);
                            } catch (_0xe59372) {
                                console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xe59372));
                            }
                        } catch (_0x273dff) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20' + _0x273dff)), _0x529444 = 'yes', _0x1266f7 = '' + _0x273dff;
                            var _0x53b71c = await _0x17ee8c(_0x2e2b2a[_0x5dc52a], _0x4525e2, 'dev', !![], _0x1266f7), _0x2daea4 = await _0x17ee8c(_0x2e2b2a[_0x5dc52a], _0x4525e2, 'dev', ![]), _0x500967 = await _0x17ee8c(_0x2e2b2a[_0x5dc52a], _0x4525e2, 'pub', ![]);
                            const _0x3fa5f3 = {
                                'succesDEVMSG': { 'embeds': [_0x2daea4] },
                                'succesPUBMSG': { 'embeds': [_0x500967] }
                            };
                            _0x3fa5f3['errorDEV'] = { 'embeds': [_0x53b71c] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x3fa5f3['errorDEV']), await _0x57e297(_0x3cd445, _0x3fa5f3['errorDEV']);
                        } finally {
                            _0xb625b0['close']();
                            if (_0x529444 == 'yes' && _0x2ba647 != 0x5) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Task\x20' + (_0x5dc52a + 0x1) + '\x20:\x20Retrying')), _0x5dc52a = _0x5dc52a - 0x1, _0x2ba647 = _0x2ba647 + 0x1;
                                continue;
                            }
                            _0x529444 == 'yes' && _0x2ba647 >= 0x5 && (_0xd3954c(_0x2e2b2a[_0x5dc52a], _0x4525e2), _0x529444 = 'no', _0x2ba647 = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x4525e2['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
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
                'function': async function (_0x222385, _0x16844c, _0x3cc048) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3ce2cc = 0x0; _0x3ce2cc < _0x16844c['length']; _0x3ce2cc++) {
                        if (_0x4cb419 != 'yes')
                            var _0x4cb419 = '', _0x3298e7 = 0x0;
                        var _0x271aac;
                        await _0xfd4a0f(_0x16844c, _0x3ce2cc), _0x2e24da(_0x222385['name'] + '\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20/\x20' + _0x16844c['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        var _0x35dd5e = await _0x17ee8c(_0x16844c[_0x3ce2cc], _0x222385, 'acc', ![]);
                        const _0x3e1711 = { 'succesDEVMSG': { 'embeds': [_0x35dd5e] } }, _0x5b0348 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x19dd82 = Math['round'](Math['random']() * (_0x3cc048['length'] - 0x1)), _0x246098 = _0x3cc048[_0x19dd82]['split'](':'), _0xcf6fb7;
                        try {
                            _0xcf6fb7 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x246098[0x0] + ':' + _0x246098[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xcf6fb7 = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x246098[0x0] + ':' + _0x246098[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35f7a8 = await _0xcf6fb7['newPage']();
                            await _0x35f7a8['setViewport']({
                                'width': 0x500 + _0x426591(0x1, 0x32),
                                'height': 0x2d9 + _0x426591(0x1, 0x32)
                            });
                            const _0x2b692f = await _0x35f7a8['target']()['createCDPSession'](), { windowId: _0x3f07a3 } = await _0x2b692f['send']('Browser.getWindowForTarget');
                            await _0x35f7a8['authenticate']({
                                'username': '' + _0x246098[0x2],
                                'password': '' + _0x246098[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35f7a8['goto']('' + _0x5b0348, { 'waitUntil': 'networkidle2' }), await _0x5af1c7(0x1388), console['log'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x15dac0 = await _0x35f7a8['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x15dac0 && await _0x15dac0['click']();
                            } catch {
                            }
                            await _0x2b692f['send']('Browser.setWindowBounds', {
                                'windowId': _0x3f07a3,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x35f7a8['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x5af1c7(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x35f7a8['type']('input[name=\x22firstname\x22]', '' + _0x16844c[_0x3ce2cc]['FirstName']), await _0x5af1c7(0x1f4), await _0x35f7a8['type']('input[name=\x22lastname\x22]', '' + _0x16844c[_0x3ce2cc]['LastName']), await _0x5af1c7(0x1f4), await _0x35f7a8['type']('input[name=\x22email\x22]', '' + _0x16844c[_0x3ce2cc]['Email']), await _0x5af1c7(0x1f4), await _0x35f7a8['type']('input[name=\x22password\x22]', '' + _0x16844c[_0x3ce2cc]['Password']), await _0x5af1c7(0x258), await _0x35f7a8['$eval']('input[name=\x22psgdpr\x22]', _0x2e7243 => _0x2e7243['click']()), await _0x5af1c7(0x1f4), console['log'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Sending\x20Request'), await _0x35f7a8['$eval']('#customer-form', _0x4f43d3 => _0x4f43d3['submit']());
                            try {
                                await _0x35f7a8['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x4cb419 = 'no', console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Account\x20' + _0x16844c[_0x3ce2cc]['Email'] + '\x20Generated')), _0x37c275['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x16844c[_0x3ce2cc]['Email'] + ',' + _0x16844c[_0x3ce2cc]['Password']);
                                try {
                                    _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x3e1711['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57e297(_0x3f430d, _0x3e1711['succesDEVMSG']);
                            } catch (_0x365033) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x365033);
                            }
                        } catch (_0x1fd4c5) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20' + _0x1fd4c5)), _0x271aac = '' + _0x1fd4c5;
                            var _0xce33da = await _0x17ee8c(_0x16844c[_0x3ce2cc], _0x222385, 'acc', !![], _0x271aac);
                            _0x3e1711['errorDEV'] = { 'embeds': [_0xce33da] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x3e1711['errorDEV']), await _0x57e297(_0x3cd445, _0x3e1711['errorDEV']), _0x4cb419 = 'yes';
                        } finally {
                            _0xcf6fb7['close']();
                            if (_0x4cb419 == 'yes' && _0x3298e7 != 0x5 && _0x271aac != 'Size\x20Not\x20Found') {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Task\x20' + (_0x3ce2cc + 0x1) + '\x20:\x20Retrying')), _0x3ce2cc = _0x3ce2cc - 0x1, _0x3298e7 = _0x3298e7 + 0x1;
                                continue;
                            }
                            _0x4cb419 == 'yes' && _0x3298e7 >= 0x5 && (_0xd3954c(_0x16844c[_0x3ce2cc], _0x222385), _0x4cb419 = 'no', _0x3298e7 = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x222385['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x5c765c(_0x276854, _0x370272, _0x1b94a2) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x406f3d = 0x0; _0x406f3d < _0x370272['length']; _0x406f3d++) {
                        if (_0x7bedde != 'yes')
                            var _0x7bedde = '', _0x44e6f4 = 0x0;
                        var _0x1025ac;
                        await _0xfd4a0f(_0x370272, _0x406f3d), _0x2e24da(_0x276854['name'] + '\x20Task\x20' + (_0x406f3d + 0x1) + '\x20/\x20' + _0x370272['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        const _0x42356a = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x3513de = Math['round'](Math['random']() * (_0x1b94a2['length'] - 0x1)), _0x1e7b6e = _0x1b94a2[_0x3513de]['split'](':'), _0x17beda;
                        try {
                            _0x17beda = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1e7b6e[0x0] + ':' + _0x1e7b6e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x17beda = await _0x1bd0b6['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1e7b6e[0x0] + ':' + _0x1e7b6e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35df98 = await _0x17beda['newPage'](), _0x1c1345 = await _0x35df98['target']()['createCDPSession'](), { windowId: _0x505f5c } = await _0x1c1345['send']('Browser.getWindowForTarget');
                            await _0x35df98['authenticate']({
                                'username': '' + _0x1e7b6e[0x2],
                                'password': '' + _0x1e7b6e[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35df98['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5af1c7(0xbb8), await _0x1c1345['send']('Browser.setWindowBounds', {
                                'windowId': _0x505f5c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x5af1c7(0x1f40);
                            try {
                                await _0x35df98['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x5af1c7(0x1388), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Logging\x20in'), await _0x35df98['type']('input[name=\x22email\x22]', '' + _0x370272[_0x406f3d]['Email']), await _0x5af1c7(0x1f4), await _0x35df98['type']('input[name=\x22password\x22]', '' + _0x370272[_0x406f3d]['Password']), await _0x5af1c7(0x258), await _0x35df98['$eval']('#login-form', _0x28685f => _0x28685f['submit']()), await _0x35df98['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x5af1c7(0x1f4), await _0x35df98['goto']('' + _0x370272[_0x406f3d]['Url']), await _0x35df98['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x370272[_0x406f3d]['Size']);
                            if (_0x370272[_0x406f3d]['Size'] != 'RANDOM') {
                                var _0x561ae4 = '\x20' + _0x370272[_0x406f3d]['Size'] + '\x20';
                                const _0x411335 = await _0x35df98['$x']('//span[contains(text(),\x20' + _0x561ae4 + ')]');
                                await _0x411335[0x0]['click']();
                            } else {
                                const _0x53527f = await _0x35df98['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x249df5 = Math['round'](Math['random']() * (_0x53527f['length'] - 0x1));
                                await _0x53527f[_0x249df5]['click']();
                            }
                            await _0x5af1c7(0x258), await _0x35df98['click']('#cookieChoiceDismiss'), await _0x5af1c7(0x3e8), await _0x35df98['type']('#instagram-account', '' + _0x370272[_0x406f3d]['Follower']), await _0x5af1c7(0x28a), await _0x35df98['click']('#book-btn'), await _0x5af1c7(0xbb8), await _0x35df98['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x5af1c7(0x1f4), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20' + _0x1e7cf7['cyan']('Solving\x20Captcha')), await _0x35df98['solveRecaptchas'](), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5af1c7(0x7d0), await _0x35df98['$eval']('#book-btn-for-sure', _0x421cda => _0x421cda['click']()), await _0x5af1c7(0x12c), await _0x35df98['click']('#book-btn-for-sure'), await _0x5af1c7(0xdac);
                            const _0x33caa9 = await _0x35df98['$eval']('.reservation-popup\x20>\x20.title', _0x27950e => {
                                return _0x27950e['innerHTML'];
                            });
                            if (_0x33caa9) {
                                _0x7bedde = 'no', _0x33cd3c(_0x370272[_0x406f3d], _0x276854), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x526aac = await _0x17ee8c(_0x370272[_0x406f3d], _0x276854, 'dev', ![]), _0x432e19 = await _0x17ee8c(_0x370272[_0x406f3d], _0x276854, 'pub', ![]);
                                const _0x54af8b = {
                                    'succesDEVMSG': { 'embeds': [_0x526aac] },
                                    'succesPUBMSG': { 'embeds': [_0x432e19] }
                                };
                                try {
                                    _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x54af8b['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x54af8b['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x5ed9e2, _0x54af8b['succesPUBMSG']);
                                } catch (_0x111706) {
                                    console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x111706));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x543ae9) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20' + _0x543ae9)), _0x1025ac = '' + _0x543ae9;
                            var _0x3dea09 = await _0x17ee8c(_0x370272[_0x406f3d], _0x276854, 'dev', !![], _0x1025ac), _0x526aac = await _0x17ee8c(_0x370272[_0x406f3d], _0x276854, 'dev', ![]), _0x432e19 = await _0x17ee8c(_0x370272[_0x406f3d], _0x276854, 'pub', ![]);
                            const _0x395073 = {
                                'succesDEVMSG': { 'embeds': [_0x526aac] },
                                'succesPUBMSG': { 'embeds': [_0x432e19] }
                            };
                            _0x395073['errorDEV'] = { 'embeds': [_0x3dea09] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x395073['errorDEV']), await _0x57e297(_0x3cd445, _0x395073['errorDEV']), _0x543ae9 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x7bedde = 'yes');
                        } finally {
                            _0x17beda['close']();
                            if (_0x7bedde == 'yes' && _0x44e6f4 != 0x5 && _0x1025ac != 'Size\x20Not\x20Found') {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Task\x20' + (_0x406f3d + 0x1) + '\x20:\x20Retrying')), _0x406f3d = _0x406f3d - 0x1, _0x44e6f4 = _0x44e6f4 + 0x1;
                                continue;
                            }
                            _0x7bedde == 'yes' && _0x44e6f4 >= 0x5 && (_0xd3954c(_0x370272[_0x406f3d], _0x276854), _0x7bedde = 'no', _0x44e6f4 = 0x0), console['log'](_0x1f2091() + '\x20[' + _0x276854['name'] + ']\x20Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
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
            'function': async function (_0x5526b2, _0x3eb9e7, _0x12b99b) {
                _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2743a8['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x24cdda = 0x0; _0x24cdda < _0x3eb9e7['length']; _0x24cdda++) {
                    var _0x45664f;
                    if (_0x170a35 != 'yes')
                        var _0x170a35 = '', _0x3c1a48 = 0x0;
                    var _0x51bbdd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1d5408
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x3eb9e7[_0x24cdda]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3eb9e7[_0x24cdda]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2743a8['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2ed8f3
                            }
                        ]
                    }], _0x2322c3 = await _0x17ee8c(_0x3eb9e7[_0x24cdda], _0x5526b2, 'dev', ![]), _0x456f3f = await _0x17ee8c(_0x3eb9e7[_0x24cdda], _0x5526b2, 'pub', ![]);
                    const _0x18753c = {
                        'succesDEVMSG': { 'embeds': [_0x2322c3] },
                        'succesPUBMSG': { 'embeds': [_0x456f3f] }
                    }, _0xd2753e = { 'embeds': _0x51bbdd };
                    await _0xfd4a0f(_0x3eb9e7, _0x24cdda);
                    if (_0x3eb9e7[_0x24cdda]['Email'] == '' || _0x3eb9e7[_0x24cdda]['FirstName'] == '' || _0x3eb9e7[_0x24cdda]['LastName'] == '' || _0x3eb9e7[_0x24cdda]['Country'] == '' || _0x3eb9e7[_0x24cdda]['Size'] == '' || _0x3eb9e7[_0x24cdda]['Address1'] == '' || _0x3eb9e7[_0x24cdda]['Zip'] == '') {
                        console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x3eb9e7[_0x24cdda]['Email'] == '' || _0x3eb9e7[_0x24cdda]['FirstName'] == '' || _0x3eb9e7[_0x24cdda]['LastName'] == '' || _0x3eb9e7[_0x24cdda]['Country'] == '' || _0x3eb9e7[_0x24cdda]['Size'] == '' || _0x3eb9e7[_0x24cdda]['Address1'] == '' || _0x3eb9e7[_0x24cdda]['Zip'] == '' || _0x3eb9e7[_0x24cdda]['Phone'] == '') {
                        console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5e07b4 = '' + _0x3eb9e7[_0x24cdda]['Url'];
                    if (_0x2743a8['useRandomProxy'] = ![])
                        var _0x572f0b = _0x12b99b[_0x24cdda]['split'](':');
                    else
                        var _0x4d9845 = Math['round'](Math['random']() * (_0x12b99b['length'] - 0x1)), _0x572f0b = _0x12b99b[_0x4d9845]['split'](':');
                    const _0x3f6e81 = await _0x1bd0b6['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x572f0b[0x0] + ':' + _0x572f0b[0x1]]
                    });
                    try {
                        const _0x4f7fe3 = await _0x3f6e81['newPage']();
                        await _0x4f7fe3['authenticate']({
                            'username': '' + _0x572f0b[0x2],
                            'password': '' + _0x572f0b[0x3]
                        }), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f7fe3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4f7fe3['setRequestInterception'](!![]), _0x4f7fe3['on']('request', _0x370a17 => {
                            _0x370a17['resourceType']() === 'image' || _0x370a17['resourceType']() === 'font' || _0x370a17['resourceType']() === 'media' ? _0x370a17['abort']() : _0x370a17['continue']();
                        }), await _0x4f7fe3['goto'](_0x5e07b4), await _0x5af1c7(0xbb8), await _0x4f7fe3['waitForSelector']('.control__JhutY'), await _0x4f7fe3['click']('.control__JhutY'), await _0x5af1c7(0x1f4);
                        if (_0x3eb9e7[_0x24cdda]['Size'] != 'RANDOM')
                            try {
                                const _0x514824 = await _0x4f7fe3['$x']('//div[contains(text(),\x20\x27' + _0x3eb9e7[_0x24cdda]['Size'] + '\x27)]');
                                await _0x514824[0x0]['click']();
                            } catch {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x17043f = await _0x4f7fe3['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x167cb7 = Math['round'](Math['random']() * (_0x17043f['length'] - 0x1));
                            await _0x17043f[_0x167cb7]['click']();
                        }
                        await _0x5af1c7(0x4b0);
                        const _0x569aa1 = await _0x4f7fe3['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x569aa1[0x0]['click'](), await _0x4f7fe3['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4f7fe3['type']('input[name=\x22email\x22]', '' + _0x3eb9e7[_0x24cdda]['Email']), await _0x5af1c7(0x640), await _0x4f7fe3['type']('input[name=\x22phone\x22]', '' + _0x3eb9e7[_0x24cdda]['Phone']), await _0x5af1c7(0x4b0), await _0x4f7fe3['click']('button.btn.continue-button__1RtsS'), await _0x5af1c7(0x4b0);
                        try {
                            await _0x4f7fe3['type']('input[name=\x22firstName\x22]', '' + _0x3eb9e7[_0x24cdda]['FirstName']), await _0x5af1c7(0x258);
                        } catch {
                            const _0x3cec65 = await _0x4f7fe3['$$eval']('.invalid-feedback\x20>\x20div', _0x1399d4 => {
                                return _0x1399d4['map'](_0x299f31 => _0x299f31['innerText']);
                            });
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20' + _0x3cec65));
                            continue;
                        }
                        await _0x4f7fe3['type']('input[name=\x22lastName\x22]', '' + _0x3eb9e7[_0x24cdda]['LastName']), await _0x5af1c7(0xc8), await _0x4f7fe3['type']('input[name=\x22instagramUsername\x22]', '' + _0x3eb9e7[_0x24cdda]['Follower']), await _0x5af1c7(0x4b0), await _0x4f7fe3['click']('button.btn.continue-button__1RtsS'), await _0x5af1c7(0x3e8), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4f7fe3['select']('select[name=\x22country\x22]', '' + _0x3eb9e7[_0x24cdda]['Country']), await _0x5af1c7(0x2bc), await _0x4f7fe3['type']('input[name=\x22streetName\x22]', '' + _0x3eb9e7[_0x24cdda]['Address1']), await _0x5af1c7(0x258), await _0x4f7fe3['type']('input[name=\x22houseNumber\x22]', _0x3eb9e7[_0x24cdda]['HouseNumber'] + '\x20' + _0x3eb9e7[_0x24cdda]['Address2']), await _0x5af1c7(0xc8), await _0x4f7fe3['type']('input[name=\x22postalCode\x22]', '' + _0x3eb9e7[_0x24cdda]['Zip']), await _0x5af1c7(0x1f4), await _0x4f7fe3['type']('input[name=\x22city\x22]', '' + _0x3eb9e7[_0x24cdda]['City']), await _0x5af1c7(0x4b0), await _0x4f7fe3['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x5af1c7(0x4b0), await _0x4f7fe3['click']('button.btn.continue-button__1RtsS'), await _0x5af1c7(0x4b0), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4f7fe3['solveRecaptchas'](), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x5af1c7(0xbb8), await _0x4f7fe3['click']('button.btn.continue-button__1RtsS'), await _0x5af1c7(0x1388), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4f7fe3['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4f7fe3['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5af1c7(0x4b0), await _0x4f7fe3['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3eb9e7[_0x24cdda]['CardNumber']), await _0x5af1c7(0x320), await _0x4f7fe3['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4f7fe3['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3eb9e7[_0x24cdda]['ExpiryDate']), await _0x5af1c7(0x4b0), await _0x4f7fe3['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4f7fe3['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3eb9e7[_0x24cdda]['CVV']), await _0x5af1c7(0x226), await _0x4f7fe3['type']('input[name=\x22holderName\x22]', '' + _0x3eb9e7[_0x24cdda]['NameOnCard']), await _0x5af1c7(0x226), await _0x4f7fe3['click']('button.adyen-checkout__button'), console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x4f7fe3['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x5af1c7(0xbb8);
                        } catch (_0x4715c9) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x203DS\x20Failed')), _0x45664f = '3DS\x20Error\x20' + _0x4715c9;
                            var _0x16bc61 = await _0x17ee8c(_0x3eb9e7[_0x24cdda], _0x5526b2, 'dev', !![], _0x45664f);
                            _0x18753c['errorDEV'] = { 'embeds': [_0x16bc61] };
                            _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x18753c['errorDEV']);
                            await _0x57e297(_0x3cd445, _0x18753c['errorDEV']);
                            continue;
                        }
                        _0x33cd3c(_0x3eb9e7[_0x24cdda], _0x5526b2), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                            try {
                                await _0x57e297(_0x2743a8['webhook'], _0x18753c['succesDEVMSG']);
                            } catch {
                            }
                        await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x18753c['succesDEVMSG']), await _0x5af1c7(0xc8);
                        try {
                            await _0x57e297(_0x5ed9e2, _0x18753c['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x49216d) {
                        console['log'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20' + _0x49216d), _0x45664f = '' + _0x49216d;
                        var _0x16bc61 = await _0x17ee8c(_0x3eb9e7[_0x24cdda], _0x5526b2, 'dev', !![], _0x45664f);
                        _0x18753c['errorDEV'] = { 'embeds': [_0x16bc61] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x18753c['errorDEV']), await _0x57e297(_0x3cd445, _0x18753c['errorDEV']), _0x170a35 = 'yes';
                    } finally {
                        _0x3f6e81['close']();
                        if (_0x170a35 == 'yes' && _0x3c1a48 != 0x5) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x5526b2['name'] + ']\x20Task\x20' + (_0x24cdda + 0x1) + '\x20:\x20Retrying')), _0x24cdda = _0x24cdda - 0x1, _0x3c1a48 = _0x3c1a48 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x2743a8['footshopDelay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['footshopDelay']);
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
            'function': async function (_0x406a97, _0x4f89c6, _0x50568b) {
                var _0x2f94cf = ![], _0x3f169e = ![];
                if (_0x2743a8['captchaKey'] == '' || _0x2743a8['captchaKey'] == undefined)
                    return console['log'](_0x1e7cf7['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x2743a8['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xdfa32f = 0x0; _0xdfa32f < _0x4f89c6['length']; _0xdfa32f++) {
                    if (_0x391592 != 'yes')
                        var _0x391592 = '', _0x4028e1 = 0x0;
                    var _0x49e2ba, _0x12c171 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4f89c6[_0xdfa32f]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4f89c6[_0xdfa32f]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1d5408
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x2743a8['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2ed8f3
                            }
                        ]
                    }];
                    const _0x2dbf7b = { 'embeds': _0x12c171 };
                    _0x2e24da(_0x406a97['name'] + '\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20/\x20' + _0x4f89c6['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x4f89c6, _0xdfa32f);
                    var _0x4eddb3 = await _0x17ee8c(_0x4f89c6[_0xdfa32f], _0x406a97, 'dev', ![]), _0x33137e = await _0x17ee8c(_0x4f89c6[_0xdfa32f], _0x406a97, 'pub', ![]);
                    const _0x2d6e42 = {
                        'succesDEVMSG': { 'embeds': [_0x4eddb3] },
                        'succesPUBMSG': { 'embeds': [_0x33137e] }
                    };
                    if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                        try {
                            await _0x57e297(_0x2743a8['webhook'], _0x2d6e42['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x2d6e42['succesDEVMSG']), await _0x5af1c7(0xc8);
                    try {
                        await _0x57e297(_0x5ed9e2, _0x2d6e42['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4f89c6[_0xdfa32f]['Email'] == '' || _0x4f89c6[_0xdfa32f]['Url'] == '' || _0x4f89c6[_0xdfa32f]['FirstName'] == '' || _0x4f89c6[_0xdfa32f]['LastName'] == '') {
                        console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2743a8['useRandomProxy'] = ![])
                        var _0x277364 = _0x50568b[_0xdfa32f]['split'](':');
                    else
                        var _0x13ef8f = Math['round'](Math['random']() * (_0x50568b['length'] - 0x1)), _0x277364 = _0x50568b[_0x13ef8f]['split'](':');
                    const _0x4b413e = await _0x1bd0b6['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x277364[0x0] + ':' + _0x277364[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x59f1d9 = await _0x4b413e['newPage']();
                        await _0x59f1d9['authenticate']({
                            'username': '' + _0x277364[0x2],
                            'password': '' + _0x277364[0x3]
                        }), console['log'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59f1d9['setRequestInterception'](!![]), _0x59f1d9['on']('request', _0x3b1bbc => {
                            _0x3b1bbc['resourceType']() === 'image' || _0x3b1bbc['resourceType']() === 'font' || _0x3b1bbc['resourceType']() === 'media' ? _0x3b1bbc['abort']() : _0x3b1bbc['continue']();
                        }), await _0x59f1d9['goto']('' + _0x4f89c6[_0xdfa32f]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x59f1d9['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x59f1d9['type']('#comp_firstname', '' + _0x4f89c6[_0xdfa32f]['FirstName']), await _0x59f1d9['waitForSelector']('#comp_lastname'), await _0x59f1d9['type']('#comp_lastname', '' + _0x4f89c6[_0xdfa32f]['LastName']), await _0x59f1d9['waitForSelector']('#comp_email'), await _0x59f1d9['type']('#comp_email', '' + _0x4f89c6[_0xdfa32f]['Email']), await _0x59f1d9['waitForSelector']('#comp_paypalemail'), await _0x59f1d9['type']('#comp_paypalemail', '' + _0x4f89c6[_0xdfa32f]['Email']), await _0x59f1d9['waitForSelector']('#comp_mobile_end'), await _0x59f1d9['type']('#comp_mobile_end', '' + _0x4f89c6[_0xdfa32f]['Phone']), await _0x59f1d9['waitForSelector']('#comp_dob'), await _0x59f1d9['type']('#comp_dob', '08/09/1992'), console['log'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4f89c6[_0xdfa32f]['Size'] == 'RANDOM') {
                            const _0x232848 = await _0x59f1d9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5a7e1a => {
                                return _0x5a7e1a['map'](_0xcc3cf5 => _0xcc3cf5['value']);
                            });
                            var _0x35bf85 = Math['round'](Math['random']() * (_0x232848['length'] - 0x2));
                            await _0x59f1d9['select']('#shoesize', _0x232848[_0x35bf85 + 0x1]), await _0x5af1c7(0x3e8);
                        } else {
                            const _0x434d73 = await _0x59f1d9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2bcc5e => {
                                return _0x2bcc5e['map'](_0x432b80 => _0x432b80['innerText']);
                            }), _0x3b3a6d = await _0x59f1d9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2d89b0 => {
                                return _0x2d89b0['map'](_0x1fec6c => _0x1fec6c['value']);
                            });
                            var _0x3fb0c2 = _0x4f89c6[_0xdfa32f]['Size'];
                            for (var _0x4d57fa = 0x1; _0x4d57fa < _0x3b3a6d['length']; _0x4d57fa++) {
                                var _0x5193d6 = _0x434d73[_0x4d57fa]['split']('\x20')[0x0];
                                if (_0x5193d6 == _0x3fb0c2) {
                                    await _0x59f1d9['select']('#shoesize', _0x3b3a6d[_0x4d57fa]);
                                    break;
                                } else {
                                    if (_0x4d57fa + 0x1 == _0x3b3a6d['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x59f1d9['waitForSelector']('#comp_address1'), await _0x59f1d9['type']('#comp_address1', _0x4f89c6[_0xdfa32f]['Address1'] + '\x20' + _0x4f89c6[_0xdfa32f]['HouseNumber']), await _0x59f1d9['waitForSelector']('#comp_address2'), await _0x59f1d9['type']('#comp_address2', '' + _0x4f89c6[_0xdfa32f]['Address2']), await _0x59f1d9['waitForSelector']('#comp_address2'), await _0x59f1d9['type']('#comp_address3', '' + _0x4f89c6[_0xdfa32f]['City']), await _0x59f1d9['waitForSelector']('#comp_postcode'), await _0x59f1d9['type']('#comp_postcode', '' + _0x4f89c6[_0xdfa32f]['Zip']), console['log'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5af1c7(0x4b0), await _0x59f1d9['click']('label#emailhold'), await _0x5af1c7(0x5dc), await _0x59f1d9['click']('#preauth_tandc_email\x20>\x20label'), await _0x5af1c7(0x5dc), await _0x59f1d9['click']('#submit'), await _0x59f1d9['waitForSelector']('#paymentWrap'), console['log'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20' + _0x1e7cf7['blue']('Awaiting\x20Paypal\x20Payment')), _0x4b413e['on']('targetcreated', async _0x129497 => {
                            if (_0x129497['type']() === 'page') {
                                const _0x28b0cf = await _0x129497['page']();
                                async function _0x12a480() {
                                    try {
                                        await _0x59f1d9['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3f169e = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0xc01fbc() {
                                    try {
                                        await _0x59f1d9['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2f94cf = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0xc01fbc(), _0x12a480(), await _0x5af1c7(0x493e0);
                            }
                        });
                        async function _0x1278f0() {
                            for (let _0x290c96 = 0x0; _0x290c96 < 0x12c; _0x290c96++) {
                                if (_0x2f94cf == !![]) {
                                    _0x391592 = 'no', _0x33cd3c(_0x4f89c6[_0xdfa32f], _0x406a97), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                        try {
                                            await _0x57e297(_0x2743a8['webhook'], _0x2d6e42['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x2d6e42['succesDEVMSG']), await _0x5af1c7(0xc8);
                                    try {
                                        await _0x57e297(_0x5ed9e2, _0x2d6e42['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3f169e)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x5af1c7(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x5af1c7(0xbb8), await _0x59f1d9['click']('.zoid-outlet'), await _0x5af1c7(0x7d0), await _0x1278f0();
                    } catch (_0x3392f3) {
                        console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20' + _0x3392f3)), _0x49e2ba = '' + _0x3392f3;
                        var _0x6a1ce7 = await _0x17ee8c(_0x4f89c6[_0xdfa32f], _0x406a97, 'dev', !![], _0x49e2ba);
                        _0x2d6e42['errorDEV'] = { 'embeds': [_0x6a1ce7] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x2d6e42['errorDEV']), await _0x57e297(_0x3cd445, _0x2d6e42['errorDEV']);
                    } finally {
                        _0x4b413e && _0x4b413e['close']();
                        if (_0x391592 == 'yes' && _0x4028e1 != 0x5 && _0x49e2ba != 'Size\x20Not\x20Found') {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x406a97['name'] + ']\x20Task\x20' + (_0xdfa32f + 0x1) + '\x20:\x20Retrying')), _0xdfa32f = _0xdfa32f - 0x1, _0x4028e1 = _0x4028e1 + 0x1;
                            continue;
                        }
                        _0x391592 == 'yes' && _0x4028e1 >= 0x5 && (_0xd3954c(afew[_0xdfa32f], _0x406a97), _0x391592 = 'no', _0x4028e1 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
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
                'function': async function (_0x10c54a, _0x394c02, _0x9f6d5f) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xbc242 = 0x0; _0xbc242 < _0x394c02['length']; _0xbc242++) {
                        const _0xf6f6bd = 'https://www.kickz.com/login';
                        if (_0x2e95f5 != 'yes')
                            var _0x2e95f5 = '', _0x140805 = 0x0;
                        _0x2e24da(_0x10c54a['name'] + '\x20Task\x20' + (_0xbc242 + 0x1) + '\x20/\x20' + _0x394c02['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x394c02, _0xbc242);
                        var _0x19d9ad = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d5408
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2743a8['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ed8f3
                                }
                            ]
                        }];
                        const _0x3e3484 = { 'embeds': _0x19d9ad };
                        var _0x24ba9d = await _0x17ee8c(_0x394c02[_0xbc242], _0x10c54a, 'acc', ![]);
                        const _0x53815f = { 'succesDEVMSG': { 'embeds': [_0x24ba9d] } };
                        if (_0x394c02[_0xbc242]['Email'] == '' || _0x394c02[_0xbc242]['FirstName'] == '' || _0x394c02[_0xbc242]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x394c02[_0xbc242]['Password'] == '' && (_0x394c02[_0xbc242]['Password'] = 'JRaffles23!');
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x19900f = _0x9f6d5f[_0xbc242]['split'](':');
                        else
                            var _0x4f526a = Math['round'](Math['random']() * (_0x9f6d5f['length'] - 0x1)), _0x19900f = _0x9f6d5f[_0x4f526a]['split'](':');
                        const _0x433e89 = await _0x1bd0b6['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x19900f[0x0] + ':' + _0x19900f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x42a914 = await _0x433e89['newPage']();
                            await _0x42a914['authenticate']({
                                'username': '' + _0x19900f[0x2],
                                'password': '' + _0x19900f[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42a914['setRequestInterception'](!![]), _0x42a914['on']('request', _0x5e407f => {
                                _0x5e407f['resourceType']() === 'image' || _0x5e407f['resourceType']() === 'font' || _0x5e407f['resourceType']() === 'media' ? _0x5e407f['abort']() : _0x5e407f['continue']();
                            }), await _0x42a914['goto'](_0xf6f6bd), await _0x5af1c7(0xbb8), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x42a914['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x42a914['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x42a914['waitForSelector']('#button-register'), await _0x5af1c7(0x7d0), await _0x42a914['evaluate'](() => {
                                const _0xc3e8c7 = document['querySelector']('#button-register');
                                _0xc3e8c7['click']();
                            }), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5af1c7(0x1388), await _0x42a914['waitForSelector']('#customer_salutation'), await _0x42a914['select']('#customer_salutation', 'mr'), await _0x5af1c7(0x7d0), await _0x42a914['waitForSelector']('#customer_firstname'), await _0x42a914['type']('#customer_firstname', '' + _0x394c02[_0xbc242]['FirstName']), await _0x5af1c7(0x352), await _0x42a914['waitForSelector']('#customer_lastname'), await _0x42a914['type']('#customer_lastname', '' + _0x394c02[_0xbc242]['LastName']), await _0x5af1c7(0x352), await _0x42a914['type']('#email-input', '' + _0x394c02[_0xbc242]['Email']), await _0x5af1c7(0x352), await _0x42a914['type']('#email-confirm-input', '' + _0x394c02[_0xbc242]['Email']), await _0x5af1c7(0x352), await _0x42a914['type']('#register-password', '' + _0x394c02[_0xbc242]['Password']), await _0x5af1c7(0x352), await _0x42a914['type']('#password-confirm', '' + _0x394c02[_0xbc242]['Password']), await _0x5af1c7(0x352), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x42a914['click']('#consent'), await _0x5af1c7(0x1f4);
                            const _0x29c9f7 = await _0x42a914['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x29c9f7) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x42a914['click']('#buttonRegister');
                            try {
                                await _0x42a914['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x394c02[_0xbc242]['Email']), await _0x5af1c7(0x4b0);
                            async function _0x5262d7() {
                                var _0x4bb2b, _0x168823 = ![];
                                for (var _0x4f358f = 0x0; _0x4f358f < 0x18; _0x4f358f++) {
                                    async function _0x3541c5() {
                                        var _0xaf866 = new _0x17a34e({
                                            'user': _0x2743a8['masterMail'],
                                            'password': _0x2743a8['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x31da85(_0x3f7ebd) {
                                            _0xaf866['openBox']('INBOX', ![], _0x3f7ebd);
                                        }
                                        _0xaf866['once']('ready', function () {
                                            console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x31da85(function (_0x1bd3bd, _0x59e487) {
                                                console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1bd3bd)
                                                    throw _0x1bd3bd;
                                                _0xaf866['seq']['search'](['UNSEEN'], function (_0x12bb0c, _0x39e7b3) {
                                                    if (!_0x39e7b3 || !_0x39e7b3['length'])
                                                        console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0xaf866['end']();
                                                    else {
                                                        var _0x46499f = _0xaf866['seq']['fetch'](_0x39e7b3, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x46499f['on']('message', function (_0x15a692, _0x5e4a3e) {
                                                            var _0x2e7769 = '(#' + _0x5e4a3e + ')\x20';
                                                            _0x15a692['on']('body', function (_0x406bf8, _0x19a4ee) {
                                                                _0x5e5b57(_0x406bf8, (_0x8258ba, _0x405511) => {
                                                                    if (_0x405511['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x22a42d = _0x405511['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xbeffe2 = _0x22a42d[0x1]['split']('<')[0x0];
                                                                        _0x4bb2b = _0xbeffe2;
                                                                    }
                                                                });
                                                            }), _0x15a692['once']('end', function () {
                                                            });
                                                        }), _0x46499f['once']('error', function (_0x52c225) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x46499f['once']('end', function () {
                                                            _0xaf866['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0xaf866['once']('error', function (_0x4bc31b) {
                                            console['log'](_0x1e7cf7['red'](_0x4bc31b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x168823 = !![];
                                        }), _0xaf866['once']('end', async function () {
                                        }), _0xaf866['connect']();
                                    }
                                    _0x3541c5(), await _0x5af1c7(0x1388);
                                    if (_0x4bb2b)
                                        return _0x4bb2b;
                                    if (_0x168823)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4f358f == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5262d7(), _0x5af1c7(0x320), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Verifying..'), await _0x42a914['type']('#verificationCode', code), await _0x5af1c7(0x1f4), await _0x42a914['click']('#buttonVerify'), await _0x5af1c7(0x190), await _0x42a914['click']('#buttonVerify'), await _0x5af1c7(0x3e8);
                            try {
                                await _0x42a914['waitForSelector']('div.b-user_greeting'), _0x2e95f5 = 'no', console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Account\x20' + _0x394c02[_0xbc242]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x37c275['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x394c02[_0xbc242]['Email'] + ',' + _0x394c02[_0xbc242]['Password'] + ','), console['log'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Account\x20' + _0x394c02[_0xbc242]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x53815f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57e297(_0x3f430d, _0x53815f['succesDEVMSG']);
                            } catch {
                                _0x2e95f5 = 'no', console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x22ca1e) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20' + _0x22ca1e)), _0x19d9ad[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x19d9ad[0x0]['description'] = '' + _0x22ca1e, await _0x57e297(_0x3cd445, _0x3e3484), _0x2e95f5 = 'yes';
                        } finally {
                            _0x433e89 && _0x433e89['close']();
                            if (_0x2e95f5 == 'yes' && _0x140805 != 0x5) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x10c54a['name'] + ']\x20Task\x20' + (_0xbc242 + 0x1) + '\x20:\x20Retrying')), _0xbc242 = _0xbc242 - 0x1, _0x140805 = _0x140805 + 0x1;
                                continue;
                            }
                            _0x2e95f5 == 'yes' && _0x140805 >= 0x5 && (_0xd3954c(_0x394c02[_0xbc242], _0x10c54a), _0x2e95f5 = 'no', _0x140805 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x41e7e7, _0x12889f, _0x5aeef6) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1382a8 = 0x0; _0x1382a8 < _0x12889f['length']; _0x1382a8++) {
                        var _0x52cbe6;
                        if (_0x46f72e != 'yes')
                            var _0x46f72e = '', _0x4b8031 = 0x0;
                        _0x2e24da(_0x41e7e7['name'] + '\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20/\x20' + _0x12889f['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b);
                        var _0x357f97 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d5408
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x12889f[_0x1382a8]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x12889f[_0x1382a8]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2743a8['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ed8f3
                                }
                            ]
                        }], _0x4ff07a = await _0x17ee8c(_0x12889f[_0x1382a8], _0x41e7e7, 'dev', ![]), _0x34e449 = await _0x17ee8c(_0x12889f[_0x1382a8], _0x41e7e7, 'pub', ![]);
                        const _0x5be354 = {
                            'succesDEVMSG': { 'embeds': [_0x4ff07a] },
                            'succesPUBMSG': { 'embeds': [_0x34e449] }
                        };
                        await _0xfd4a0f(_0x12889f, _0x1382a8);
                        if (_0x12889f[_0x1382a8]['Email'] == '' || _0x12889f[_0x1382a8]['Password'] == '' || _0x12889f[_0x1382a8]['FirstName'] == '' || _0x12889f[_0x1382a8]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x3cee72 = _0x5aeef6[_0x1382a8]['split'](':');
                        else
                            var _0x4badcb = Math['round'](Math['random']() * (_0x5aeef6['length'] - 0x1)), _0x3cee72 = _0x5aeef6[_0x4badcb]['split'](':');
                        const _0x5eb85e = await _0x1bd0b6['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x3cee72[0x0] + ':' + _0x3cee72[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x225b23 = await _0x5eb85e['newPage']();
                            await _0x225b23['authenticate']({
                                'username': '' + _0x3cee72[0x2],
                                'password': '' + _0x3cee72[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x225b23['setRequestInterception'](!![]), _0x225b23['on']('request', _0xf9e887 => {
                                _0xf9e887['resourceType']() === 'image' || _0xf9e887['resourceType']() === 'font' || _0xf9e887['resourceType']() === 'media' ? _0xf9e887['abort']() : _0xf9e887['continue']();
                            }), await _0x225b23['goto']('' + _0x12889f[_0x1382a8]['Url'], { 'waitUntil': 'networkidle2' }), await _0x5af1c7(0x12c);
                            try {
                                await _0x225b23['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x225b23['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Logging\x20in'), await _0x225b23['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x225b23['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x225b23['waitForSelector']('#username'), await _0x225b23['type']('#username', _0x12889f[_0x1382a8]['Email']), await _0x225b23['waitForSelector']('#password'), await _0x225b23['type']('#password', _0x12889f[_0x1382a8]['Password']), await _0x5af1c7(0x190), await _0x225b23['click']('#buttonSubmit'), await _0x225b23['waitForSelector']('div.b-user_greeting'), console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x5af1c7(0x1f4), await _0x225b23['goto']('' + _0x12889f[_0x1382a8]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x12889f[_0x1382a8]['Size']);
                            let _0x4ad8b2 = _0x12889f[_0x1382a8]['Size']['replace']('.5', '\x201/2');
                            await _0x225b23['click']('button[title=\x22' + _0x4ad8b2 + '\x22]'), await _0x5af1c7(0x1f4);
                            try {
                                await _0x225b23['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x5af1c7(0x12c), console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x225b23['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_firstName', _0x12889f[_0x1382a8]['FirstName']), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_lastName', _0x12889f[_0x1382a8]['LastName']), await _0x5af1c7(0x12c), await _0x225b23['select']('#dwfrm_raffle_addressFields_country', _0x12889f[_0x1382a8]['Country']), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_city', _0x12889f[_0x1382a8]['City']), await _0x5af1c7(0x12c);
                            _0x12889f[_0x1382a8]['Postcode'] == undefined && (_0x12889f[_0x1382a8]['Postcode'] = _0x12889f[_0x1382a8]['Zip']);
                            await _0x225b23['type']('#dwfrm_raffle_addressFields_postalCode', _0x12889f[_0x1382a8]['Postcode']), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_address1', _0x12889f[_0x1382a8]['Address1']), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_address2', _0x12889f[_0x1382a8]['HouseNumber']), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x12889f[_0x1382a8]['Address2']), await _0x5af1c7(0x12c), await _0x225b23['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x5af1c7(0x12c), await _0x225b23['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x12889f[_0x1382a8]['Follower']), await _0x5af1c7(0x1f4), await _0x225b23['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x5af1c7(0x1f4), console['log'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20' + _0x1e7cf7['blue']('Awaiting\x20Paypal\x20Payment')), await _0x225b23['click']('.b-paypal_button');
                            try {
                                await _0x225b23['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x46f72e = 'no', _0x33cd3c(_0x12889f[_0x1382a8], _0x41e7e7), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x5be354['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x5be354['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x5ed9e2, _0x5be354['succesPUBMSG']);
                            } catch (_0x55de8c) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x55de8c)), _0x52cbe6 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x55de8c;
                                var _0x1d876b = await _0x17ee8c(_0x12889f[_0x1382a8], _0x41e7e7, 'dev', !![], _0x52cbe6);
                                _0x5be354['errorDEV'] = { 'embeds': [_0x1d876b] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x5be354['errorDEV']), await _0x57e297(_0x3cd445, _0x5be354['errorDEV']);
                            }
                        } catch (_0x51dd22) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20' + _0x51dd22)), _0x52cbe6 = '' + _0x51dd22;
                            var _0x1d876b = await _0x17ee8c(_0x12889f[_0x1382a8], _0x41e7e7, 'dev', !![], _0x52cbe6);
                            _0x5be354['errorDEV'] = { 'embeds': [_0x1d876b] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x5be354['errorDEV']), await _0x57e297(_0x3cd445, _0x5be354['errorDEV']), _0x46f72e = 'yes';
                        } finally {
                            _0x5eb85e && _0x5eb85e['close']();
                            if (_0x46f72e == 'yes' && _0x4b8031 != 0x5) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x41e7e7['name'] + ']\x20Task\x20' + (_0x1382a8 + 0x1) + '\x20:\x20Retrying')), _0x1382a8 = _0x1382a8 - 0x1, _0x4b8031 = _0x4b8031 + 0x1;
                                continue;
                            }
                            _0x46f72e == 'yes' && _0x4b8031 >= 0x5 && (_0xd3954c(_0x12889f[_0x1382a8], _0x41e7e7), _0x46f72e = 'no', _0x4b8031 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['AfewDelay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['AfewDelay']);
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
                'function': async function (_0x2d4b8f, _0x4ccab9, _0x5ada10) {
                    for (var _0x14e92e = 0x0; _0x14e92e < _0x4ccab9['length']; _0x14e92e++) {
                        async function _0x15bc1e(_0x2f4941, _0x5b59d9, _0x4f6387, _0x2dca1c, _0x47fb5c) {
                            var _0x383ab7, _0x5cbef3 = {}, _0x1affd4 = [], _0x34acff = {}, _0x15e682 = [
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
                            ], _0x1ff319 = Math['round'](Math['random']() * (_0x15e682['length'] - 0x1));
                            _0x2dca1c[_0x2f4941]['Size'] == 'RANDOM' && (_0x2dca1c[_0x2f4941]['Size'] = _0x15e682[_0x1ff319]);
                            !_0x2dca1c && (_0x2dca1c = {});
                            if (_0x5b59d9 != 'ver') {
                                _0x2e24da(_0x4f6387['name'] + '\x20Task\x20' + (_0x2f4941 + 0x1) + '\x20/\x20' + _0x2dca1c['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x2dca1c, _0x2f4941), _0x5cbef3 = _0x4f6387['data'];
                                _0x5b59d9 == 'exp' ? _0x5cbef3['data']['attributes']['email'] = '' + _0x2dca1c[_0x2f4941]['FirstName'] + _0x2dca1c[_0x2f4941]['LastName'] + _0x2743a8['catchall'] : _0x5cbef3['data']['attributes']['email'] = '' + _0x2dca1c[_0x2f4941]['Email'];
                                if (_0x2dca1c[_0x2f4941]['Size'] == 'RANDOM') {
                                }
                                _0x5cbef3['data']['attributes']['properties']['$first_name'] = '' + _0x2dca1c[_0x2f4941]['FirstName'], _0x5cbef3['data']['attributes']['properties']['$last_name'] = '' + _0x2dca1c[_0x2f4941]['LastName'], _0x5cbef3['data']['attributes']['properties']['$address1'] = _0x2dca1c[_0x2f4941]['Address1'] + '\x20' + _0x2dca1c[_0x2f4941]['Address2'] + '\x20' + _0x2dca1c[_0x2f4941]['HouseNumber'], _0x5cbef3['data']['attributes']['properties']['$zip'] = '' + _0x2dca1c[_0x2f4941]['Zip'], _0x5cbef3['data']['attributes']['properties']['$city'] = '' + _0x2dca1c[_0x2f4941]['City'], _0x5cbef3['data']['attributes']['properties']['$country'] = '' + _0x2dca1c[_0x2f4941]['Country'], _0x5cbef3['data']['attributes']['properties']['Size'] = '' + _0x2dca1c[_0x2f4941]['Size'], _0x5cbef3['data']['attributes']['properties']['$phone_number'] = '' + _0x2dca1c[_0x2f4941]['Phone'], _0x5cbef3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2dca1c[_0x2f4941]['Follower'];
                            }
                            if (_0x2743a8['useRandomProxy'] = ![])
                                var _0x2383ea = _0x47fb5c[_0x2f4941]['split'](':');
                            else
                                var _0x4a9adc = Math['round'](Math['random']() * (_0x47fb5c['length'] - 0x1)), _0x2383ea = _0x47fb5c[_0x4a9adc]['split'](':');
                            var _0x431e59 = {
                                'jar': _0x1b5546,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4f6387['url'],
                                'headers': _0x4f6387['headers'],
                                'body': JSON['stringify'](_0x5cbef3),
                                'proxy': 'http://' + _0x2383ea[0x2] + ':' + _0x2383ea[0x3] + '@' + _0x2383ea[0x0] + ':' + _0x2383ea[0x1]
                            };
                            return _0x5b59d9 != 'ver' && (_0x431e59['url'] = _0x4f6387['url'], _0x431e59['headers'] = _0x4f6387['headers']), _0x5b59d9 == 'ver' && (_0x431e59['method'] = 'GET'), new Promise(function (_0x5c836e, _0x67fe89) {
                                callback = async (_0x599d04, _0x3c55cb, _0xd73535) => {
                                    if (!_0x599d04 && _0x3c55cb['statusCode'] == 0xca || !_0x599d04 && _0x3c55cb['statusCode'] == 0xc8) {
                                        if (_0x5b59d9 != 'ver') {
                                            var _0x4d22a6 = await _0x17ee8c(_0x2dca1c[_0x2f4941], _0x4f6387, 'dev', ![]), _0xa862a9 = await _0x17ee8c(_0x2dca1c[_0x2f4941], _0x4f6387, 'pub', ![]);
                                            const _0x4cb164 = {
                                                'succesDEVMSG': { 'embeds': [_0x4d22a6] },
                                                'succesPUBMSG': { 'embeds': [_0xa862a9] }
                                            };
                                            if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                                try {
                                                    await _0x57e297(_0x2743a8['webhook'], _0x4cb164['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x4cb164['succesDEVMSG']), await _0x5af1c7(0xc8);
                                            try {
                                                await _0x57e297(_0x5ed9e2, _0x4cb164['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x33cd3c(_0x2dca1c[_0x2f4941], _0x4f6387);
                                        }
                                        _0x5c836e(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x4f6387['name'] + ']\x20Task\x20' + (_0x2f4941 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x5b59d9 != 'ver') {
                                            var _0x14a2b3 = '' + _0x599d04, _0x2c79e4 = await _0x17ee8c(_0x2dca1c[_0x2f4941], _0x4f6387, 'dev', !![], _0x14a2b3), _0x149d55 = {};
                                            _0x149d55['errorDEV'] = { 'embeds': [_0x2c79e4] }, _0xd3954c(_0x2dca1c[_0x2f4941], _0x4f6387), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x149d55['errorDEV']), await _0x57e297(_0x3cd445, _0x149d55['errorDEV']);
                                        }
                                        _0x67fe89(console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x4f6387['name'] + ']\x20Task\x20' + (_0x2f4941 + 0x1) + ':\x20' + _0x599d04)));
                                    }
                                };
                                try {
                                    _0x5b59d9 != 'ver' && console['log'](_0x1f2091() + '\x20[' + _0x4f6387['name'] + ']\x20Task\x20' + (_0x2f4941 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5cbef3['data']['attributes']['email']), _0xaed388(_0x431e59, callback);
                                } catch (_0x4ee67a) {
                                    console['log'](_0x1f2091() + '\x20Task\x20' + (_0x2f4941 + 0x1) + ':\x20' + _0x4ee67a);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x15bc1e(_0x14e92e, 'nor', _0x2d4b8f, _0x4ccab9, _0x5ada10), console['log'](_0x1f2091() + '\x20[' + _0x2d4b8f['name'] + ']\x20Sleeping\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        } catch (_0x154251) {
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
                'function': async function (_0x532a31, _0x3b7d91, _0x52ecbf) {
                    var _0x4342c9 = [];
                    async function _0x30e21d() {
                        var _0x1966c4 = new _0x17a34e({
                            'user': _0x2743a8['masterMail'],
                            'password': _0x2743a8['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x32d1ff(_0x26d681) {
                            _0x1966c4['openBox']('INBOX', ![], _0x26d681);
                        }
                        _0x1966c4['once']('ready', function () {
                            _0x32d1ff(function (_0x49e753, _0x5d1593) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x49e753)
                                    throw _0x49e753;
                                _0x1966c4['seq']['search'](['UNSEEN'], function (_0x18e02a, _0x13cf28) {
                                    if (!_0x13cf28 || !_0x13cf28['length'])
                                        console['log'](_0x1f2091() + '\x20[' + _0x532a31['name'] + ']\x20No\x20mails\x20found'), _0x1966c4['end']();
                                    else {
                                        var _0x40278a = _0x1966c4['seq']['fetch'](_0x13cf28, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x40278a['on']('message', function (_0x447681, _0xce237e) {
                                            var _0x468929 = '(#' + _0xce237e + ')\x20';
                                            _0x447681['on']('body', function (_0xd18d53, _0x5e5e7b) {
                                                _0x5e5b57(_0xd18d53, (_0x173af6, _0x4b4368) => {
                                                    if (_0x4b4368['subject'] == 'Confirm\x20Your\x20Subscription' && _0x4b4368['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x22c755 = _0x4b4368['text']['split']('(')[0x1], _0x32c2ea = _0x22c755['split'](')')[0x0];
                                                        _0x4342c9['push'](_0x32c2ea);
                                                    }
                                                });
                                            }), _0x447681['once']('end', function () {
                                            });
                                        }), _0x40278a['once']('error', function (_0x43fda3) {
                                            console['log']('Fetch\x20error:\x20' + _0x43fda3);
                                        }), _0x40278a['once']('end', function () {
                                            _0x1966c4['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x1966c4['once']('error', function (_0x204e70) {
                            console['log'](_0x1e7cf7['red'](_0x204e70['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x1966c4['once']('end', async function () {
                        }), _0x1966c4['connect']();
                    }
                    async function _0x2b8f87(_0xc3b3f5, _0x57d598, _0x4def23) {
                        for (var _0x11c2c4 = 0x0; _0x11c2c4 < _0x57d598['length']; _0x11c2c4++) {
                            async function _0x151809(_0x55a79f, _0x2e454e, _0x16d7e5, _0xaa6c3f, _0x3ec875) {
                                var _0x253023, _0x576387 = {}, _0x73fc02 = [], _0x2f0c1d = {}, _0x1cd0db = [
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
                                ], _0x550a97 = Math['round'](Math['random']() * (_0x1cd0db['length'] - 0x1));
                                _0xaa6c3f[_0x55a79f]['Size'] == 'RANDOM' && (_0xaa6c3f[_0x55a79f]['Size'] = _0x1cd0db[_0x550a97]);
                                !_0xaa6c3f && (_0xaa6c3f = {});
                                if (_0x2743a8['useRandomProxy'] = ![])
                                    var _0x3b8cac = _0x3ec875[_0x55a79f]['split'](':');
                                else
                                    var _0x4f3c35 = Math['round'](Math['random']() * (_0x3ec875['length'] - 0x1)), _0x3b8cac = _0x3ec875[_0x4f3c35]['split'](':');
                                var _0x21208a = {
                                    'jar': _0x1b5546,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x16d7e5['url'],
                                    'headers': _0x16d7e5['headers'],
                                    'body': JSON['stringify'](_0x576387),
                                    'proxy': 'http://' + _0x3b8cac[0x2] + ':' + _0x3b8cac[0x3] + '@' + _0x3b8cac[0x0] + ':' + _0x3b8cac[0x1]
                                };
                                return _0x2e454e != 'ver' && (_0x21208a['url'] = _0x16d7e5['url'], _0x21208a['headers'] = _0x16d7e5['headers']), _0x2e454e == 'ver' && (_0x21208a['method'] = 'GET', _0x21208a['url'] = _0xaa6c3f[_0x55a79f]), new Promise(function (_0x2438f2, _0x3b8dfe) {
                                    callback = async (_0x108443, _0x2b451d, _0x157332) => {
                                        if (!_0x108443 && _0x2b451d['statusCode'] == 0xca || !_0x108443 && _0x2b451d['statusCode'] == 0xc8) {
                                            if (_0x2e454e != 'ver') {
                                                var _0x22449e = await _0x17ee8c(_0xaa6c3f[_0x55a79f], _0x16d7e5, 'dev', ![]), _0x3096c5 = await _0x17ee8c(_0xaa6c3f[_0x55a79f], _0x16d7e5, 'pub', ![]);
                                                const _0xef6d3f = {
                                                    'succesDEVMSG': { 'embeds': [_0x22449e] },
                                                    'succesPUBMSG': { 'embeds': [_0x3096c5] }
                                                };
                                                if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                                    try {
                                                        await _0x57e297(_0x2743a8['webhook'], _0xef6d3f['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0xef6d3f['succesDEVMSG']), await _0x5af1c7(0xc8);
                                                try {
                                                    await _0x57e297(_0x5ed9e2, _0xef6d3f['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x33cd3c(_0xaa6c3f[_0x55a79f], _0x16d7e5);
                                            }
                                            _0x2438f2(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x16d7e5['name'] + ']\x20Task\x20' + (_0x55a79f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e454e != 'ver') {
                                                var _0x50d965 = '' + _0x108443, _0x198427 = await _0x17ee8c(_0xaa6c3f[_0x55a79f], _0x16d7e5, 'dev', !![], _0x50d965), _0x1ddcfa = {};
                                                _0x1ddcfa['errorDEV'] = { 'embeds': [_0x198427] }, _0xd3954c(_0xaa6c3f[_0x55a79f], _0x16d7e5), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x1ddcfa['errorDEV']), await _0x57e297(_0x3cd445, _0x1ddcfa['errorDEV']);
                                            }
                                            _0x3b8dfe(console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x16d7e5['name'] + ']\x20Task\x20' + (_0x55a79f + 0x1) + ':\x20' + _0x108443)));
                                        }
                                    };
                                    try {
                                        _0x2e454e != 'ver' ? console['log'](_0x1f2091() + '\x20[' + _0x16d7e5['name'] + ']\x20Task\x20' + (_0x55a79f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x576387['data']['attributes']['email']) : console['log'](_0x1f2091() + '\x20[' + _0x16d7e5['name'] + ']\x20Task\x20' + (_0x55a79f + 0x1) + ':\x20Fetching\x20Response'), _0xaed388(_0x21208a, callback);
                                    } catch (_0x33045e) {
                                        console['log'](_0x1f2091() + '\x20Task\x20' + (_0x55a79f + 0x1) + ':\x20' + _0x33045e);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x151809(_0x11c2c4, 'ver', _0xc3b3f5, _0x57d598, _0x4def23), console['log'](_0x1f2091() + '\x20[' + _0xc3b3f5['name'] + ']\x20Sleeping\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                            } catch (_0xabef36) {
                            }
                        }
                    }
                    try {
                        _0x30e21d(), await _0x5af1c7(0xfa0), console['log']('Found\x20' + _0x4342c9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x5af1c7(0x9c4);
                    }
                    await _0x2b8f87(_0x532a31, _0x4342c9, _0x52ecbf);
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
                            'list_id': 'RsxJgQ',
                            'custom_source': 'DV6989-100',
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
                                '$consent_form_id': 'TiDS2V',
                                '$consent_form_version': 0x80926b,
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
                'function': async function (_0x57e457, _0xdfc5bc, _0x5987f9) {
                    for (var _0x4ded5c = 0x0; _0x4ded5c < _0xdfc5bc['length']; _0x4ded5c++) {
                        async function _0x149c44(_0x1876c1, _0x41491a, _0x4ad910, _0x1dbbc8, _0x5b1a12) {
                            var _0x1f81b9, _0x3c23e8 = {}, _0x1fa690 = [], _0x317102 = {}, _0x193e90 = [
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
                            ], _0x511a98 = Math['round'](Math['random']() * (_0x193e90['length'] - 0x1));
                            _0x1dbbc8[_0x1876c1]['Size'] == 'RANDOM' && (_0x1dbbc8[_0x1876c1]['Size'] = _0x193e90[_0x511a98]);
                            !_0x1dbbc8 && (_0x1dbbc8 = {});
                            if (_0x41491a != 'ver') {
                                _0x2e24da(_0x4ad910['name'] + '\x20Task\x20' + (_0x1876c1 + 0x1) + '\x20/\x20' + _0x1dbbc8['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x1dbbc8, _0x1876c1), _0x1fa690 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x1d5408
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x1dbbc8[_0x1876c1]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x2743a8['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2ed8f3
                                        }
                                    ]
                                }], _0x317102 = { 'embeds': _0x1fa690 }, _0x3c23e8 = _0x4ad910['data'];
                                _0x41491a == 'exp' ? _0x3c23e8['data']['attributes']['email'] = '' + _0x1dbbc8[_0x1876c1]['FirstName'] + _0x1dbbc8[_0x1876c1]['LastName'] + _0x2743a8['catchall'] : _0x3c23e8['data']['attributes']['email'] = '' + _0x1dbbc8[_0x1876c1]['Email'];
                                if (_0x1dbbc8[_0x1876c1]['Size'] == 'RANDOM') {
                                }
                                _0x3c23e8['data']['attributes']['properties']['$first_name'] = '' + _0x1dbbc8[_0x1876c1]['FirstName'], _0x3c23e8['data']['attributes']['properties']['$last_name'] = '' + _0x1dbbc8[_0x1876c1]['LastName'], _0x3c23e8['data']['attributes']['properties']['$address1'] = _0x1dbbc8[_0x1876c1]['Address1'] + '\x20' + _0x1dbbc8[_0x1876c1]['Address2'] + '\x20' + _0x1dbbc8[_0x1876c1]['HouseNumber'], _0x3c23e8['data']['attributes']['properties']['$zip'] = '' + _0x1dbbc8[_0x1876c1]['Zip'], _0x3c23e8['data']['attributes']['properties']['$city'] = '' + _0x1dbbc8[_0x1876c1]['City'], _0x3c23e8['data']['attributes']['properties']['$country'] = '' + _0x1dbbc8[_0x1876c1]['Country'], _0x3c23e8['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1dbbc8[_0x1876c1]['Size'], _0x3c23e8['data']['attributes']['properties']['$phone_number'] = '' + _0x1dbbc8[_0x1876c1]['Phone'], _0x3c23e8['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1dbbc8[_0x1876c1]['Follower'];
                            }
                            if (_0x2743a8['useRandomProxy'] = ![])
                                var _0x1d370d = _0x5b1a12[_0x1876c1]['split'](':');
                            else
                                var _0x3d1281 = Math['round'](Math['random']() * (_0x5b1a12['length'] - 0x1)), _0x1d370d = _0x5b1a12[_0x3d1281]['split'](':');
                            var _0x5b8ce6 = {
                                'jar': _0x1b5546,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4ad910['url'],
                                'headers': _0x4ad910['headers'],
                                'body': JSON['stringify'](_0x3c23e8),
                                'proxy': 'http://' + _0x1d370d[0x2] + ':' + _0x1d370d[0x3] + '@' + _0x1d370d[0x0] + ':' + _0x1d370d[0x1]
                            };
                            return _0x41491a != 'ver' && (_0x5b8ce6['url'] = _0x4ad910['url'], _0x5b8ce6['headers'] = _0x4ad910['headers']), _0x41491a == 'ver' && (_0x5b8ce6['method'] = 'GET'), new Promise(function (_0x282d1f, _0x446643) {
                                callback = async (_0xf615b4, _0x3e932, _0x27977c) => {
                                    if (!_0xf615b4 && _0x3e932['statusCode'] == 0xca || !_0xf615b4 && _0x3e932['statusCode'] == 0xc8) {
                                        if (_0x41491a != 'ver') {
                                            var _0x3c9480 = await _0x17ee8c(_0x1dbbc8[_0x1876c1], _0x4ad910, 'dev', ![]), _0x5dc8d9 = await _0x17ee8c(_0x1dbbc8[_0x1876c1], _0x4ad910, 'pub', ![]);
                                            const _0x276e6f = {
                                                'succesDEVMSG': { 'embeds': [_0x3c9480] },
                                                'succesPUBMSG': { 'embeds': [_0x5dc8d9] }
                                            };
                                            if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                                try {
                                                    await _0x57e297(_0x2743a8['webhook'], _0x276e6f['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x276e6f['succesDEVMSG']), await _0x5af1c7(0xc8);
                                            try {
                                                await _0x57e297(_0x5ed9e2, _0x276e6f['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x33cd3c(_0x1dbbc8[_0x1876c1], _0x4ad910);
                                        }
                                        _0x282d1f(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x4ad910['name'] + ']\x20Task\x20' + (_0x1876c1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x41491a != 'ver') {
                                            var _0x5887d6 = '' + _0xf615b4, _0x118284 = await _0x17ee8c(_0x1dbbc8[_0x1876c1], _0x4ad910, 'dev', !![], _0x5887d6), _0x1a88f6 = {};
                                            _0x1a88f6['errorDEV'] = { 'embeds': [_0x118284] }, _0xd3954c(_0x1dbbc8[_0x1876c1], _0x4ad910), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x1a88f6['errorDEV']), await _0x57e297(_0x3cd445, _0x1a88f6['errorDEV']);
                                        }
                                        _0x446643(console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x4ad910['name'] + ']\x20Task\x20' + (_0x1876c1 + 0x1) + ':\x20' + _0xf615b4)));
                                    }
                                };
                                try {
                                    _0x41491a != 'ver' && console['log'](_0x1f2091() + '\x20[' + _0x4ad910['name'] + ']\x20Task\x20' + (_0x1876c1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3c23e8['data']['attributes']['email']), _0xaed388(_0x5b8ce6, callback);
                                } catch (_0x56b201) {
                                    console['log'](_0x1f2091() + '\x20Task\x20' + (_0x1876c1 + 0x1) + ':\x20' + _0x56b201);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x149c44(_0x4ded5c, 'nor', _0x57e457, _0xdfc5bc, _0x5987f9), console['log'](_0x1f2091() + '\x20[' + _0x57e457['name'] + ']\x20Sleeping\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        } catch (_0x28534b) {
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
                'function': async function (_0x43065d, _0x32ca56, _0x29048d) {
                    var _0x32ca56 = [];
                    async function _0x1c162b() {
                        var _0x7e2093 = new _0x17a34e({
                            'user': _0x2743a8['masterMail'],
                            'password': _0x2743a8['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3f6a5c(_0x22d096) {
                            _0x7e2093['openBox']('INBOX', ![], _0x22d096);
                        }
                        _0x7e2093['once']('ready', function () {
                            _0x3f6a5c(function (_0x38cd60, _0x4235c7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x38cd60)
                                    throw _0x38cd60;
                                _0x7e2093['seq']['search'](['UNSEEN'], function (_0x381718, _0x7f76e1) {
                                    if (!_0x7f76e1 || !_0x7f76e1['length'])
                                        console['log'](_0x1f2091() + '\x20[' + _0x43065d['name'] + ']\x20No\x20mails\x20found'), _0x7e2093['end']();
                                    else {
                                        var _0xec1895 = _0x7e2093['seq']['fetch'](_0x7f76e1, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xec1895['on']('message', function (_0x50c145, _0x377d76) {
                                            var _0x18d96a = '(#' + _0x377d76 + ')\x20';
                                            _0x50c145['on']('body', function (_0x19d465, _0x40bd29) {
                                                _0x5e5b57(_0x19d465, (_0x2d11e5, _0xf25b30) => {
                                                    if (_0xf25b30['subject'] == 'Confirm\x20Your\x20Subscription' && _0xf25b30['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x349ca0 = _0xf25b30['text']['split']('(')[0x1], _0x177674 = _0x349ca0['split'](')')[0x0];
                                                        _0x32ca56['push'](_0x177674);
                                                    }
                                                });
                                            }), _0x50c145['once']('end', function () {
                                            });
                                        }), _0xec1895['once']('error', function (_0x184eff) {
                                            console['log']('Fetch\x20error:\x20' + _0x184eff);
                                        }), _0xec1895['once']('end', function () {
                                            _0x7e2093['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x7e2093['once']('error', function (_0x28917e) {
                            console['log'](_0x28917e);
                        }), _0x7e2093['once']('end', async function () {
                        }), _0x7e2093['connect']();
                    }
                    async function _0x1998cc(_0x22cb8, _0x59ef91, _0x166c06) {
                        for (var _0x2f68bc = 0x0; _0x2f68bc < _0x59ef91['length']; _0x2f68bc++) {
                            async function _0x5ba487(_0x4bf85e, _0x1c4a1e, _0x2a95c3, _0x542c52, _0x4126a8) {
                                var _0x3bb21c, _0x544416 = {}, _0x105a6f = [], _0x4f2d57 = {}, _0x10028d = [
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
                                ], _0x4c7f2f = Math['round'](Math['random']() * (_0x10028d['length'] - 0x1));
                                _0x542c52[_0x4bf85e]['Size'] == 'RANDOM' && (_0x542c52[_0x4bf85e]['Size'] = _0x10028d[_0x4c7f2f]);
                                !_0x542c52 && (_0x542c52 = {});
                                if (_0x2743a8['useRandomProxy'] = ![])
                                    var _0x35ff37 = _0x4126a8[_0x4bf85e]['split'](':');
                                else
                                    var _0x21c029 = Math['round'](Math['random']() * (_0x4126a8['length'] - 0x1)), _0x35ff37 = _0x4126a8[_0x21c029]['split'](':');
                                var _0x15a2b0 = {
                                    'jar': _0x1b5546,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2a95c3['url'],
                                    'headers': _0x2a95c3['headers'],
                                    'body': JSON['stringify'](_0x544416),
                                    'proxy': 'http://' + _0x35ff37[0x2] + ':' + _0x35ff37[0x3] + '@' + _0x35ff37[0x0] + ':' + _0x35ff37[0x1]
                                };
                                return _0x1c4a1e != 'ver' && (_0x15a2b0['url'] = _0x2a95c3['url'], _0x15a2b0['headers'] = _0x2a95c3['headers']), _0x1c4a1e == 'ver' && (_0x15a2b0['method'] = 'GET', _0x15a2b0['url'] = _0x542c52[_0x4bf85e]), new Promise(function (_0x5246ac, _0x32e927) {
                                    callback = async (_0x428a46, _0x107f57, _0x5402f4) => {
                                        if (!_0x428a46 && _0x107f57['statusCode'] == 0xca || !_0x428a46 && _0x107f57['statusCode'] == 0xc8) {
                                            if (_0x1c4a1e != 'ver') {
                                                var _0x68c16a = await _0x17ee8c(_0x542c52[_0x4bf85e], _0x2a95c3, 'dev', ![]), _0x4dc60d = await _0x17ee8c(_0x542c52[_0x4bf85e], _0x2a95c3, 'pub', ![]);
                                                const _0x4e725d = {
                                                    'succesDEVMSG': { 'embeds': [_0x68c16a] },
                                                    'succesPUBMSG': { 'embeds': [_0x4dc60d] }
                                                };
                                                if (_0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '')
                                                    try {
                                                        await _0x57e297(_0x2743a8['webhook'], _0x4e725d['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x4e725d['succesDEVMSG']), await _0x5af1c7(0xc8);
                                                try {
                                                    await _0x57e297(_0x5ed9e2, _0x4e725d['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x33cd3c(_0x542c52[_0x4bf85e], _0x2a95c3);
                                            }
                                            _0x5246ac(console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x2a95c3['name'] + ']\x20Task\x20' + (_0x4bf85e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1c4a1e != 'ver') {
                                                var _0xc88bea = '' + _0x428a46, _0x44cf76 = await _0x17ee8c(_0x542c52[_0x4bf85e], _0x2a95c3, 'dev', !![], _0xc88bea), _0x416646 = {};
                                                _0x416646['errorDEV'] = { 'embeds': [_0x44cf76] }, _0xd3954c(_0x542c52[_0x4bf85e], _0x2a95c3), _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x416646['errorDEV']), await _0x57e297(_0x3cd445, _0x416646['errorDEV']);
                                            }
                                            _0x32e927(console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x2a95c3['name'] + ']\x20Task\x20' + (_0x4bf85e + 0x1) + ':\x20' + _0x428a46)));
                                        }
                                    };
                                    try {
                                        _0x1c4a1e != 'ver' ? console['log'](_0x1f2091() + '\x20[' + _0x2a95c3['name'] + ']\x20Task\x20' + (_0x4bf85e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x544416['data']['attributes']['email']) : console['log'](_0x1f2091() + '\x20[' + _0x2a95c3['name'] + ']\x20Task\x20' + (_0x4bf85e + 0x1) + ':\x20Fetching\x20Response'), _0xaed388(_0x15a2b0, callback);
                                    } catch (_0x5904b5) {
                                        console['log'](_0x1f2091() + '\x20Task\x20' + (_0x4bf85e + 0x1) + ':\x20' + _0x5904b5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5ba487(_0x2f68bc, 'ver', _0x22cb8, _0x59ef91, _0x166c06), console['log'](_0x1f2091() + '\x20[' + _0x22cb8['name'] + ']\x20Sleeping\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                            } catch (_0x5575c1) {
                            }
                        }
                    }
                    try {
                        _0x1c162b(), await _0x5af1c7(0xfa0), console['log']('Found\x20' + _0x32ca56['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1998cc(_0x43065d, _0x32ca56, _0x29048d);
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
                'function': async function (_0x2a6cb8, _0x466f86, _0x4567eb) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d22cb = 0x0; _0x4d22cb < _0x466f86['length']; _0x4d22cb++) {
                        var _0x4499f4 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d5408
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2743a8['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ed8f3
                                }
                            ]
                        }];
                        const _0x5c0040 = { 'embeds': _0x4499f4 };
                        _0x2e24da(_0x2a6cb8['name'] + '\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20/\x20' + _0x466f86['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x466f86, _0x4d22cb);
                        var _0x306621 = await _0x17ee8c(_0x466f86[_0x4d22cb], _0x2a6cb8, 'acc', ![]);
                        const _0x1cbc94 = { 'succesDEVMSG': { 'embeds': [_0x306621] } };
                        if (_0x466f86[_0x4d22cb]['Email'] == '' || _0x466f86[_0x4d22cb]['FirstName'] == '' || _0x466f86[_0x4d22cb]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5af1c7(0x7d0);
                            continue;
                        }
                        (_0x466f86[_0x4d22cb]['Password'] == '' || _0x466f86[_0x4d22cb] == undefined) && _0x466f86[_0x4d22cb]['Password'] == 'JRaffles23!';
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x3474af = _0x4567eb[_0x4d22cb]['split'](':');
                        else
                            var _0x126df1 = Math['round'](Math['random']() * (_0x4567eb['length'] - 0x1)), _0x3474af = _0x4567eb[_0x126df1]['split'](':');
                        const _0x3cdab9 = await _0x1bd0b6['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3474af[0x0] + ':' + _0x3474af[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1cd8e0 = await _0x3cdab9['newPage']();
                            await _0x1cd8e0['authenticate']({
                                'username': '' + _0x3474af[0x2],
                                'password': '' + _0x3474af[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x2a6cb8['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cd8e0['setRequestInterception'](!![]), _0x1cd8e0['on']('request', _0xe42801 => {
                                _0xe42801['resourceType']() === 'image' || _0xe42801['resourceType']() === 'font' || _0xe42801['resourceType']() === 'media' ? _0xe42801['abort']() : _0xe42801['continue']();
                            }), await _0x1cd8e0['goto']('https://patta.nl/account/register'), await _0x5af1c7(0xbb8), await _0x1cd8e0['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1f2091() + '\x20[' + _0x2a6cb8['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Filling\x20information'), await _0x1cd8e0['type']('#RegisterForm-FirstName', '' + _0x466f86[_0x4d22cb]['FirstName']), await _0x5af1c7(0x226), await _0x1cd8e0['type']('#RegisterForm-LastName', '' + _0x466f86[_0x4d22cb]['LastName']), await _0x5af1c7(0x226), await _0x1cd8e0['type']('#RegisterForm-email', '' + _0x466f86[_0x4d22cb]['Email']), await _0x5af1c7(0x226), await _0x1cd8e0['type']('#RegisterForm-password', '' + _0x466f86[_0x4d22cb]['Password']), await _0x5af1c7(0x226), console['log'](_0x1f2091() + '\x20[' + _0x2a6cb8['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Submitting..'), await _0x1cd8e0['$eval']('#RegisterForm', _0x4f5ac2 => _0x4f5ac2['submit']()), await _0x5af1c7(0x1f40);
                            try {
                                await _0x1cd8e0['waitForSelector']('.home-page-grid__collection'), await _0x5af1c7(0x1f4), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x2a6cb8['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Account\x20' + _0x466f86[_0x4d22cb]['Email'] + '\x20Generated!')), _0x37c275['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x466f86[_0x4d22cb]['Email'] + ',' + _0x466f86[_0x4d22cb]['Password']), console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x2a6cb8['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Account\x20' + _0x466f86[_0x4d22cb]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x1cbc94['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57e297(_0x3f430d, _0x1cbc94['succesDEVMSG']);
                            } catch (_0x4a7312) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4a7312));
                            }
                        } catch (_0x3ba80d) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x4d22cb + 0x1) + '\x20:\x20' + _0x3ba80d));
                        } finally {
                            _0x3cdab9 && _0x3cdab9['close'](), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x488fcc, _0x1f70e6, _0x31d63a) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x9c581b = 0x0; _0x9c581b < _0x1f70e6['length']; _0x9c581b++) {
                        var _0x2380e6;
                        if (_0x19d620 != 'yes')
                            var _0x19d620 = '', _0x219b18 = 0x0;
                        _0x2e24da(_0x488fcc['name'] + '\x20Task\x20' + (_0x9c581b + 0x1) + '\x20/\x20' + _0x1f70e6['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x1f70e6, _0x9c581b);
                        if (_0x1f70e6[_0x9c581b]['Email'] == '' || _0x1f70e6[_0x9c581b]['Password'] == '' || _0x1f70e6[_0x9c581b]['FirstName'] == '' || _0x1f70e6[_0x9c581b]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x564165 = _0x31d63a[_0x9c581b]['split'](':');
                        else
                            var _0x241d5c = Math['round'](Math['random']() * (_0x31d63a['length'] - 0x1)), _0x564165 = _0x31d63a[_0x241d5c]['split'](':');
                        const _0x2f3d10 = await _0x1bd0b6['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x564165[0x0] + ':' + _0x564165[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3cfc18 = await _0x2f3d10['newPage']();
                            await _0x3cfc18['authenticate']({
                                'username': '' + _0x564165[0x2],
                                'password': '' + _0x564165[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cfc18['setRequestInterception'](!![]), _0x3cfc18['on']('request', _0x338a31 => {
                                _0x338a31['resourceType']() === 'image' || _0x338a31['resourceType']() === 'font' || _0x338a31['resourceType']() === 'media' ? _0x338a31['abort']() : _0x338a31['continue']();
                            }), await _0x3cfc18['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3cfc18['waitForSelector']('#CustomerEmail'), console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3cfc18['type']('#CustomerEmail', '' + _0x1f70e6[_0x9c581b]['Email']), await _0x5af1c7(0x12c), await _0x3cfc18['type']('#CustomerPassword', '' + _0x1f70e6[_0x9c581b]['Password']), await _0x5af1c7(0x226), await _0x3cfc18['$eval']('#customer_login', _0x4d7c6a => _0x4d7c6a['submit']());
                            try {
                                await _0x3cfc18['waitForSelector']('#orders'), await _0x5af1c7(0x4b0);
                            } catch {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3cfc18['goto']('' + _0x1f70e6[_0x9c581b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5af1c7(0xbb8), console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3cfc18['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3cfc18['type']('#email', '' + _0x1f70e6[_0x9c581b]['Email']), await _0x5af1c7(0x384), await _0x3cfc18['type']('#first_name', '' + _0x1f70e6[_0x9c581b]['FirstName']), await _0x5af1c7(0x514), await _0x3cfc18['type']('#last_name', '' + _0x1f70e6[_0x9c581b]['LastName']), await _0x5af1c7(0x514), await _0x3cfc18['type']('#street_address', _0x1f70e6[_0x9c581b]['Address1'] + '\x20' + _0x1f70e6[_0x9c581b]['HouseNumber'] + '\x20' + _0x1f70e6[_0x9c581b]['Address2']), await _0x5af1c7(0x2bc);
                            _0x1f70e6[_0x9c581b]['Postcode'] == undefined && (_0x1f70e6[_0x9c581b]['Postcode'] = _0x1f70e6[_0x9c581b]['Zip']);
                            await _0x3cfc18['type']('#zip_code', '' + _0x1f70e6[_0x9c581b]['Postcode']), await _0x5af1c7(0x320), await _0x3cfc18['type']('#city', '' + _0x1f70e6[_0x9c581b]['City']), await _0x5af1c7(0x320), await _0x3cfc18['type']('#bday', '01/01/1994'), await _0x5af1c7(0x320), await _0x3cfc18['type']('#instagram', '' + _0x1f70e6[_0x9c581b]['Follower']), await _0x5af1c7(0x352);
                            if (_0x1f70e6[_0x9c581b]['Size'] == 'RANDOM') {
                                const _0x350a3b = await _0x3cfc18['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5b9b04 => {
                                    return _0x5b9b04['map'](_0x472c22 => _0x472c22['textContent']);
                                });
                                var _0xa61fd3 = Math['round'](Math['random']() * (_0x350a3b['length'] - 0x1));
                                console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x350a3b[_0xa61fd3]), await _0x3cfc18['click']('label[data-eu-size=\x22' + _0x350a3b[_0xa61fd3] + '\x22]');
                            } else {
                                console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1f70e6[_0x9c581b]['Size']);
                                try {
                                    await _0x3cfc18['click']('label[data-eu-size=\x22' + _0x1f70e6[_0x9c581b]['Size'] + '\x22]');
                                } catch {
                                    await _0x3cfc18['click']('label[data-eu-size=\x22' + _0x1f70e6[_0x9c581b]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x5af1c7(0xbb8), await _0x3cfc18['$$eval']('.raffle__checkbox-label', _0x208c23 => _0x208c23['forEach'](_0x1b603b => _0x1b603b['click']())), await _0x5af1c7(0x7d0), console['log'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3cfc18['click']('#raffle__form-submit'), await _0x5af1c7(0x1388);
                            try {
                                await _0x3cfc18['waitForSelector']('#raffle__confirmation-message-container'), _0x19d620 = 'no', _0x33cd3c(_0x1f70e6[_0x9c581b], _0x488fcc), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2b28db) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2b28db));
                            }
                        } catch (_0x4d9733) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20' + _0x4d9733)), _0x19d620 = 'yes';
                        } finally {
                            _0x2f3d10 && _0x2f3d10['close']();
                            if (_0x19d620 == 'yes' && _0x219b18 != 0x5 && _0x2380e6 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x488fcc['name'] + ']\x20Task\x20' + (_0x9c581b + 0x1) + '\x20:\x20Retrying')), _0x9c581b = _0x9c581b - 0x1, _0x219b18 = _0x219b18 + 0x1;
                                continue;
                            }
                            _0x19d620 == 'yes' && _0x219b18 >= 0x5 && (_0xd3954c(_0x1f70e6[_0x9c581b], _0x488fcc), _0x19d620 = 'no', _0x219b18 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
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
                'function': async function (_0x278c54, _0x4c0634, _0x1ded05) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2166db = 0x0; _0x2166db < _0x4c0634['length']; _0x2166db++) {
                        if (_0x119103 != 'yes')
                            var _0x119103 = '', _0x1e6bc3 = 0x0;
                        var _0x32abe6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1d5408
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x2743a8['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ed8f3
                                }
                            ]
                        }];
                        const _0x4bbacd = { 'embeds': _0x32abe6 };
                        _0x2e24da(_0x278c54['name'] + '\x20Task\x20' + (_0x2166db + 0x1) + '\x20/\x20' + _0x4c0634['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x4c0634, _0x2166db);
                        var _0x9ae53b = await _0x17ee8c(_0x4c0634[_0x2166db], _0x278c54, 'acc', ![]);
                        const _0xd703eb = { 'succesDEVMSG': { 'embeds': [_0x9ae53b] } };
                        if (_0x4c0634[_0x2166db]['Email'] == '' || _0x4c0634[_0x2166db]['FirstName'] == '' || _0x4c0634[_0x2166db]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5af1c7(0x7d0);
                            continue;
                        }
                        (_0x4c0634[_0x2166db]['Password'] == '' || _0x4c0634[_0x2166db] == undefined) && _0x4c0634[_0x2166db]['Password'] == 'JRaffles23!';
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x70bb33 = _0x1ded05[_0x2166db]['split'](':');
                        else
                            var _0x4d3933 = Math['round'](Math['random']() * (_0x1ded05['length'] - 0x1)), _0x70bb33 = _0x1ded05[_0x4d3933]['split'](':');
                        const _0x2bdeec = await _0x1bd0b6['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x70bb33[0x0] + ':' + _0x70bb33[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2dda20 = await _0x2bdeec['newPage']();
                            await _0x2dda20['authenticate']({
                                'username': '' + _0x70bb33[0x2],
                                'password': '' + _0x70bb33[0x3]
                            }), console['log'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2dda20['setRequestInterception'](!![]), _0x2dda20['on']('request', _0xbe1b63 => {
                                _0xbe1b63['resourceType']() === 'image' || _0xbe1b63['resourceType']() === 'font' || _0xbe1b63['resourceType']() === 'media' ? _0xbe1b63['abort']() : _0xbe1b63['continue']();
                            }), await _0x2dda20['goto']('https://drop.slamjam.com/account/register'), await _0x5af1c7(0xbb8), await _0x2dda20['waitForSelector']('#FirstName'), await _0x2dda20['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2dda20['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Filling\x20information'), await _0x5af1c7(0x4b0), await _0x2dda20['type']('#FirstName', '' + _0x4c0634[_0x2166db]['FirstName']), await _0x5af1c7(0x226), await _0x2dda20['type']('#LastName', '' + _0x4c0634[_0x2166db]['LastName']), await _0x5af1c7(0x226), await _0x2dda20['type']('#Email', '' + _0x4c0634[_0x2166db]['Email']), await _0x5af1c7(0x2ee), await _0x2dda20['type']('#ConfirmEmail', '' + _0x4c0634[_0x2166db]['Email']), await _0x5af1c7(0x2ee), await _0x2dda20['type']('#CreatePassword', '' + _0x4c0634[_0x2166db]['Password']), await _0x5af1c7(0x2ee), await _0x2dda20['type']('#CreateConfirmPassword', '' + _0x4c0634[_0x2166db]['Password']), await _0x5af1c7(0x226), console['log'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Submitting..'), await _0x2dda20['$eval']('#create_customer', _0x3557bf => _0x3557bf['submit']()), await _0x5af1c7(0x1388), console['log'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20' + _0x1e7cf7['cyan']('Solving\x20Captcha')), await _0x2dda20['solveRecaptchas'](), console['log'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2dda20['$eval']('.shopify-challenge__container\x20>\x20form', _0x2a690d => _0x2a690d['submit']());
                            try {
                                await _0x2dda20['waitForSelector']('.product-card__image'), await _0x5af1c7(0x1f4), _0x119103 = 'no', console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Account\x20' + _0x4c0634[_0x2166db]['Email'] + '\x20Generated!')), _0x37c275['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4c0634[_0x2166db]['Email'] + ',' + _0x4c0634[_0x2166db]['Password']), console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Account\x20' + _0x4c0634[_0x2166db]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0xd703eb['succesDEVMSG']);
                                } catch {
                                }
                                await _0x57e297(_0x3f430d, _0xd703eb['succesDEVMSG']);
                            } catch (_0x26f6af) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x26f6af));
                            }
                        } catch (_0x26c2d7) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20' + _0x26c2d7));
                        } finally {
                            _0x2bdeec && _0x2bdeec['close']();
                            if (_0x119103 == 'yes' && _0x1e6bc3 != 0x5) {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x278c54['name'] + ']\x20Task\x20' + (_0x2166db + 0x1) + '\x20:\x20Retrying')), _0x2166db = _0x2166db - 0x1, _0x1e6bc3 = _0x1e6bc3 + 0x1;
                                continue;
                            }
                            _0x119103 == 'yes' && _0x1e6bc3 >= 0x5 && (_0xd3954c(_0x4c0634[_0x2166db], _0x278c54), _0x119103 = 'no', _0x1e6bc3 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x1b214a, _0x1186d4, _0x205513) {
                    _0x1bd0b6['use'](_0x4ebb3c()), _0x1bd0b6['use'](_0x1da9f8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x2743a8['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x450021 = 0x0; _0x450021 < _0x1186d4['length']; _0x450021++) {
                        var _0xf24ac9;
                        if (_0x7a5d2f != 'yes')
                            var _0x7a5d2f = '', _0x314949 = 0x0;
                        _0x2e24da(_0x1b214a['name'] + '\x20Task\x20' + (_0x450021 + 0x1) + '\x20/\x20' + _0x1186d4['length'] + '\x20||\x20File:\x20' + _0x471194 + '\x20Proxies:\x20' + _0xadc16b), await _0xfd4a0f(_0x1186d4, _0x450021);
                        if (_0x1186d4[_0x450021]['Email'] == '' || _0x1186d4[_0x450021]['Password'] == '' || _0x1186d4[_0x450021]['FirstName'] == '' || _0x1186d4[_0x450021]['LastName'] == '') {
                            console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x2743a8['useRandomProxy'] = ![])
                            var _0x17f8e6 = _0x205513[_0x450021]['split'](':');
                        else
                            var _0x361fc2 = Math['round'](Math['random']() * (_0x205513['length'] - 0x1)), _0x17f8e6 = _0x205513[_0x361fc2]['split'](':');
                        const _0x158cba = await _0x1bd0b6['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x17f8e6[0x0] + ':' + _0x17f8e6[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x5d038b = await _0x158cba['newPage']();
                            await _0x5d038b['authenticate']({
                                'username': '' + _0x17f8e6[0x2],
                                'password': '' + _0x17f8e6[0x3]
                            }), await _0x5d038b['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d038b['setRequestInterception'](!![]), _0x5d038b['on']('request', _0x30d86a => {
                                _0x30d86a['resourceType']() === 'image' || _0x30d86a['resourceType']() === 'font' || _0x30d86a['resourceType']() === 'media' ? _0x30d86a['abort']() : _0x30d86a['continue']();
                            }), await _0x5d038b['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5d038b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5d038b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5af1c7(0x258), await _0x5d038b['waitForSelector']('#CustomerEmail'), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5d038b['type']('#CustomerEmail', '' + _0x1186d4[_0x450021]['Email']), await _0x5af1c7(0x12c), await _0x5d038b['type']('#CustomerPassword', '' + _0x1186d4[_0x450021]['Password']), await _0x5af1c7(0x226), await _0x5d038b['$eval']('#customer_login', _0x237b99 => _0x237b99['submit']()), await _0x5af1c7(0x7d0), await _0x5d038b['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20' + _0x1e7cf7['cyan']('Solving\x20Captcha')), await _0x5d038b['solveRecaptchas'](), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5d038b['$eval']('.shopify-challenge__container\x20>\x20form', _0x28d29e => _0x28d29e['submit']());
                            try {
                                await _0x5d038b['waitForSelector']('.nav-account'), await _0x5af1c7(0x4b0);
                            } catch {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5d038b['goto']('' + _0x1186d4[_0x450021]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5af1c7(0xbb8), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5d038b['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5d038b['click']('.product-select-variant-wrapper'), await _0x5af1c7(0x320), await _0x5d038b['click']('li.product-select-variant__value[data-size=\x22' + _0x1186d4[_0x450021]['Size'] + '\x22]'), await _0x5af1c7(0x384), await _0x5d038b['$eval']('#AddToCartForm-product-template-raffle', _0x13aa7d => _0x13aa7d['submit']()), await _0x5d038b['waitForSelector']('.cart-order-summary__content'), await _0x5af1c7(0x514), await _0x5d038b['goto']('https://drop.slamjam.com/checkout'), await _0x5af1c7(0x514), await _0x5d038b['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5d038b['select']('#checkout_shipping_address_country', '' + _0x1186d4[_0x450021]['Country']), await _0x5af1c7(0x200), await _0x5d038b['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5d038b['type']('#checkout_shipping_address_first_name', '' + _0x1186d4[_0x450021]['FirstName']), await _0x5af1c7(0x237), await _0x5d038b['type']('#checkout_shipping_address_last_name', '' + _0x1186d4[_0x450021]['LastName']), await _0x5af1c7(0x1e0), await _0x5d038b['type']('#checkout_shipping_address_address1', _0x1186d4[_0x450021]['Address1'] + '\x20' + _0x1186d4[_0x450021]['HouseNumber']), await _0x5af1c7(0x514), await _0x5d038b['type']('#checkout_shipping_address_address2', '' + _0x1186d4[_0x450021]['Address2']), await _0x5af1c7(0x514);
                            _0x1186d4[_0x450021]['Postcode'] == undefined && (_0x1186d4[_0x450021]['Postcode'] = _0x1186d4[_0x450021]['Zip']);
                            await _0x5d038b['type']('#checkout_shipping_address_zip', '' + _0x1186d4[_0x450021]['Postcode']), await _0x5af1c7(0x2bc), await _0x5d038b['type']('#checkout_shipping_address_city', '' + _0x1186d4[_0x450021]['City']), await _0x5af1c7(0x320), await _0x5d038b['type']('#checkout_shipping_address_phone', '' + _0x1186d4[_0x450021]['Phone']), await _0x5af1c7(0x320), await _0x5d038b['click']('#continue_button'), await _0x5af1c7(0xbb8), await _0x5d038b['waitForSelector']('.summary-title'), await _0x5af1c7(0x320), await _0x5d038b['click']('#continue_button'), await _0x5af1c7(0x320), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5d038b['waitForSelector']('#checkout_credit_card_vault'), await _0x5af1c7(0x3e8);
                            var _0xbdef18 = await _0x5d038b['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x4e639c = await _0xbdef18['contentFrame']();
                            await _0x4e639c['click']('#number'), await _0x5af1c7(0x3e8), await _0x4e639c['type']('#number', '' + _0x1186d4[_0x450021]['CardNumber'], { 'delay': 0x78 }), _0xbdef18 = await _0x5d038b['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x4e639c = await _0xbdef18['contentFrame'](), await _0x5af1c7(0x1c2), await _0x4e639c['click']('#name'), await _0x5af1c7(0x1f4), await _0x4e639c['type']('#name', '' + _0x1186d4[_0x450021]['NameOnCard'], { 'delay': 0x78 }), _0xbdef18 = await _0x5d038b['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x4e639c = await _0xbdef18['contentFrame'](), await _0x5af1c7(0x1c2), await _0x4e639c['click']('#expiry'), await _0x5af1c7(0x1f4), await _0x4e639c['type']('#expiry', '' + _0x1186d4[_0x450021]['ExpiryDate'], { 'delay': 0x78 }), _0xbdef18 = await _0x5d038b['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x4e639c = await _0xbdef18['contentFrame'](), await _0x5af1c7(0x1c2), await _0x4e639c['click']('#verification_value'), await _0x5af1c7(0x1f4), await _0x4e639c['type']('#verification_value', '' + _0x1186d4[_0x450021]['CVV'], { 'delay': 0x78 }), await _0x5d038b['$eval']('#accepts-flag-raffle', _0xe760d6 => _0xe760d6['click']()), await _0x5af1c7(0x7d0), console['log'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5d038b['$eval']('#continue_button', _0x2365ec => _0x2365ec['click']()), await _0x5af1c7(0x1b58), await _0x5d038b['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5d038b['$eval']('.edit_checkout.animate-floating-labels', _0x11db7d => _0x11db7d['submit']()), await _0x5af1c7(0x7d0);
                            try {
                                await _0x5d038b['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x7a5d2f = 'no', _0x33cd3c(_0x1186d4[_0x450021], _0x1b214a), console['log'](_0x1e7cf7['green'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x42c30f) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x42c30f['message']);
                            }
                            var _0x24c495 = await _0x17ee8c(_0x1186d4[_0x450021], _0x1b214a, 'dev', ![]), _0x42a02f = await _0x17ee8c(_0x1186d4[_0x450021], _0x1b214a, 'pub', ![]);
                            const _0x1cb39f = {
                                'succesDEVMSG': { 'embeds': [_0x24c495] },
                                'succesPUBMSG': { 'embeds': [_0x42a02f] }
                            };
                            try {
                                _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], _0x1cb39f['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x13d0a3, _0x1cb39f['succesDEVMSG']), await _0x5af1c7(0xc8), await _0x57e297(_0x5ed9e2, _0x1cb39f['succesPUBMSG']);
                            } catch (_0x39dd46) {
                                console['log'](_0x1e7cf7['yellow'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x39dd46));
                            }
                        } catch (_0xafbbca) {
                            console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x38f025[taskModule]['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20' + _0xafbbca)), _0xf24ac9 = '' + _0xafbbca;
                            var _0x2ea017 = await _0x17ee8c(kickz[_0x450021], _0x1b214a, 'dev', !![], _0xf24ac9);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x2ea017] }, _0x2743a8['webhook'] != undefined && _0x2743a8['webhook'] != '' && await _0x57e297(_0x2743a8['webhook'], EMBEDS['errorDEV']), await _0x57e297(_0x3cd445, EMBEDS['errorDEV']), _0x7a5d2f = 'yes';
                        } finally {
                            _0x158cba && _0x158cba['close']();
                            if (_0x7a5d2f == 'yes' && _0x314949 != 0x5 && _0xf24ac9 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1e7cf7['red'](_0x1f2091() + '\x20[' + _0x1b214a['name'] + ']\x20Task\x20' + (_0x450021 + 0x1) + '\x20:\x20Retrying')), _0x450021 = _0x450021 - 0x1, _0x314949 = _0x314949 + 0x1;
                                continue;
                            }
                            _0x7a5d2f == 'yes' && _0x314949 >= 0x5 && (_0xd3954c(_0x1186d4[_0x450021], _0x1b214a), _0x7a5d2f = 'no', _0x314949 = 0x0), console['log']('Waiting\x20for\x20' + _0x2743a8['delay'] + '\x20ms'), await _0x5af1c7(_0x2743a8['delay']);
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
                'function': async function (_0x5367ab) {
                    var _0x3e3ade = await _0x45ae7d(), _0x38e69b = _0x37c275['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x25252f = _0x15ce2d['parse'](_0x38e69b, { 'header': !![] })['data'];
                    for (var _0x241e94 = 0x0; _0x241e94 < _0x25252f['length']; _0x241e94++) {
                        var _0x23d32a = _0x25252f[_0x241e94]['Store'], _0x55a37d = _0x25252f[_0x241e94]['Mode'];
                        for (var _0x3246be of _0x38f025) {
                            const _0x253992 = _0x3246be['name']['includes'](_0x23d32a);
                            if (!_0x253992)
                                continue;
                            for (mode of _0x3246be['modules']) {
                                if (mode['name'] == _0x55a37d) {
                                    console['log']('Running\x20' + _0x1e7cf7['cyan'](mode['name'])), await mode['function'](mode, [_0x25252f[_0x241e94]], _0x3e3ade);
                                    var _0x54513f = _0x38e69b['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x37c275['writeFileSync']('../failed-tasks.csv', _0x54513f);
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
                    var _0xd04118 = await _0x3fd9f9['get']('Answer');
                    if (_0xd04118['Answer']['toLowerCase']() == 'y') {
                        _0x37c275['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x5af1c7(0x3e8);
                        return;
                    }
                    if (_0xd04118['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x5af1c7(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x5af1c7(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x46e323(_0x5a871e) {
    var _0x4262f8 = await _0x45ae7d(), _0x1711be = _0x37c275['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xfa467f = _0x15ce2d['parse'](_0x1711be, { 'header': !![] })['data'];
    for (var _0x52dfdb = 0x0; _0x52dfdb < _0xfa467f['length']; _0x52dfdb++) {
        var _0xf0a02e = _0xfa467f[_0x52dfdb]['Store'], _0x617f15 = _0xfa467f[_0x52dfdb]['Mode'];
        for (var _0x38d480 of _0x38f025) {
            const _0xc377ec = _0x38d480['name']['includes'](_0xf0a02e);
            if (_0xc377ec)
                for (mode of _0x38f025[_0x38d480]['modules']) {
                    const _0x312665 = mode['name']['includes'](_0x617f15);
                    _0x312665 && (_0x5a871e = mode['name'], await mode['function'](_0x5a871e, _0xfa467f[_0x52dfdb], _0x4262f8));
                }
        }
    }
}
async function _0x4872d0() {
    await _0x4f5c7f(), console['clear']();
    if (_0x2ed8f3 != 'devkey') {
        let _0x432e73 = await _0xeb9be0['autoUpdate']();
        if (_0x432e73 === 'yes')
            return _0x58447c('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x43194f == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x5af1c7(0x2710);
        ;
    }
    await _0x2dae07(_0x43194f);
    if (_0x5eee10 === ![])
        return console['log']('Closing\x20Browser'), await _0x5af1c7(0xbb8);
    else
        try {
            var _0x131122 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1d5408
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2ed8f3
                    }
                ]
            }];
            const _0xac25e1 = { 'embeds': _0x131122 };
            var _0x5f5057 = await _0x17ee8c(null, null, 'open', ![]);
            const _0x2e0f4e = { 'openDEVMSG': { 'embeds': [_0x5f5057] } };
            await _0x57e297(_0x3dff31, _0x2e0f4e['openDEVMSG']);
            async function _0x3f3eea() {
                _0x2e24da('JRaffles\x20' + _0x2ed8f3), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1e7cf7['cyan']('JRaffles();') + '\x20' + _0x2ed8f3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x460dc4 = 0x0; _0x460dc4 < _0x38f025['length'] - 0x4; _0x460dc4++) {
                    if (_0x460dc4 >= 0xa) {
                        console['log']('\x20(' + _0x460dc4 + ')\x20[' + _0x38f025[_0x460dc4]['name'] + ']');
                        continue;
                    }
                    if (_0x38f025[_0x460dc4]['name'] === 'Reload\x20Settings' || _0x38f025[_0x460dc4]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x460dc4 + ')\x20\x20[' + _0x38f025[_0x460dc4]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x38f025['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x38f025['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x38f025['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x38f025['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1fb396();
                if (taskModule > _0x38f025['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x5af1c7(0x3e8), _0x3f3eea();
                if (_0x38f025[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                    var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x37e965 = await _0x45ae7d(), _0x374dc6 = await _0x4101c3();
                        _0x2743a8['shuffleTasks'] && await _0x45db46(_0x374dc6), await _0x4cdb36['function'](_0x4cdb36, _0x374dc6, _0x37e965);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x37e965 = await _0x45ae7d(), _0x374dc6 = await _0x4101c3();
                            _0x2743a8['shuffleTasks'] && await _0x45db46(_0x374dc6), await _0x4cdb36['function'](_0x4cdb36, _0x374dc6, _0x37e965);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x37e965 = await _0x45ae7d();
                                await _0x4cdb36['function'](_0x4cdb36, links, _0x37e965);
                            }
                        }
                    }
                    return _0x3f3eea();
                }
                if (_0x38f025[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                        var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x37e965 = await _0x45ae7d(), _0x1b2b3b = await _0x4101c3();
                            _0x2743a8['shuffleTasks'] && await _0x45db46(_0x1b2b3b), await _0x4cdb36['function'](_0x4cdb36, _0x1b2b3b, _0x37e965);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x37e965 = await _0x45ae7d(), _0x1b2b3b = await _0x4101c3();
                                _0x2743a8['shuffleTasks'] && await _0x45db46(_0x1b2b3b), await _0x4cdb36['function'](_0x4cdb36, _0x1b2b3b, _0x37e965);
                            }
                        }
                    } catch (_0x562af8) {
                        console['log'](_0x562af8), await _0x5af1c7(0xfa0);
                    }
                    return _0x3f3eea();
                }
                if (_0x38f025[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                    var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x37e965 = await _0x45ae7d();
                        return await _0x4cdb36['function'](_0x4cdb36, _0x37e965), _0x3f3eea();
                    }
                    var _0x37e965 = await _0x45ae7d(), _0x46da89 = await _0x4101c3();
                    return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x46da89), await _0x4cdb36['function'](_0x4cdb36, _0x46da89, _0x37e965), _0x3f3eea();
                }
                if (_0x38f025[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                    var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x37e965 = await _0x45ae7d(), _0x46da89 = await _0x4101c3();
                    return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x46da89), await _0x4cdb36['function'](_0x4cdb36, _0x46da89, _0x37e965), _0x3f3eea();
                } else {
                    if (_0x38f025[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                        var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x37e965 = await _0x45ae7d(), _0x43b727 = await _0x4101c3();
                            return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x43b727), await _0x4cdb36['function'](_0x4cdb36, _0x43b727, _0x37e965), _0x3f3eea();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x37e965 = await _0x45ae7d();
                                return await _0x4cdb36['function'](_0x4cdb36, links, _0x37e965), _0x3f3eea();
                            }
                        }
                        ;
                    } else {
                        if (_0x38f025[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                            var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction], _0x37e965 = await _0x45ae7d(), _0x19124e = await _0x4101c3();
                            return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x19124e), await _0x4cdb36['function'](_0x4cdb36, _0x19124e, _0x37e965), await _0x5af1c7(0x1388), _0x3f3eea();
                        } else {
                            if (_0x38f025[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x37e965 = await _0x45ae7d(), _0x43b727 = await _0x4101c3();
                                    return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x43b727), await _0x4cdb36['function'](_0x4cdb36, _0x43b727, _0x37e965), _0x3f3eea();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x37e965 = await _0x45ae7d();
                                        return await _0x4cdb36['function'](_0x4cdb36, links, _0x37e965), _0x3f3eea();
                                    }
                                }
                                ;
                            } else {
                                if (_0x38f025[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                    var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3428f0('https://bouncewear.com/nl/account/register', _0x4cdb36);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x38f025[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                        var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x37e965 = await _0x45ae7d(), _0x5988b5 = await _0x4101c3();
                                            return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x5988b5), await _0x4cdb36['function'](_0x4cdb36, _0x5988b5, _0x37e965), _0x3f3eea();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x37e965 = await _0x45ae7d(), _0x5988b5 = await _0x4101c3();
                                                return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x5988b5), await _0x4cdb36['function'](_0x4cdb36, _0x5988b5, _0x37e965), _0x3f3eea();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x38f025[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                            var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x37e965 = await _0x45ae7d(), _0x286c81 = await _0x4101c3();
                                                return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x286c81), await _0x4cdb36['function'](_0x4cdb36, _0x286c81, _0x37e965), _0x3f3eea();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x37e965 = await _0x45ae7d(), _0x286c81 = await _0x4101c3();
                                                    return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x286c81), await _0x4cdb36['function'](_0x4cdb36, _0x286c81, _0x37e965), _0x3f3eea();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x38f025[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                                var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x37e965 = await _0x45ae7d(), _0x3eb4f9 = await _0x4101c3();
                                                    return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x3eb4f9), await _0x4cdb36['function'](_0x4cdb36, _0x3eb4f9, _0x37e965), _0x3f3eea();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x37e965 = await _0x45ae7d(), _0x3eb4f9 = await _0x4101c3();
                                                        return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x3eb4f9), await _0x4cdb36['function'](_0x4cdb36, _0x3eb4f9, _0x37e965), _0x3f3eea();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x38f025[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                                    var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x37e965 = await _0x45ae7d(), _0x99d2b2 = await _0x4101c3();
                                                        return _0x2743a8['shuffleTasks'] && await _0x45db46(_0x99d2b2), await _0x4cdb36['function'](_0x4cdb36, _0x99d2b2, _0x37e965), _0x3f3eea();
                                                    }
                                                } else {
                                                    if (_0x38f025[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x5af1c7(0x3e8), _0x3f3eea();
                                                    else {
                                                        if (_0x38f025[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x13a7d5 = _0x38f025[taskModule]['name'], _0x37e965 = await _0x45ae7d();
                                                            await _0x14ca23(_0x13a7d5, _0x37e965);
                                                        } else {
                                                            if (_0x38f025[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x3d59cd(_0x38f025[taskModule]['modules']);
                                                                var _0x4cdb36 = _0x38f025[taskModule]['modules'][taskFunction];
                                                                return await _0x4cdb36['function'](_0x4cdb36), _0x3f3eea();
                                                            } else {
                                                                if (_0x38f025[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x35155c = 0x0;
                                                                    for (const _0x1af97d in _0x2743a8) {
                                                                        console['log']('(' + _0x35155c + ')\x20' + _0x1af97d + '\x20:\x20' + _0x2743a8[_0x1af97d]), _0x35155c++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x35155c + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x23edc4 = await _0x5671e4();
                                                                    if (_0x23edc4 == _0x35155c)
                                                                        return _0x3f3eea();
                                                                    console['clear'];
                                                                    var _0x5bf4e7 = 0x0;
                                                                    for (var _0x5ae96d in _0x2743a8) {
                                                                        if (_0x23edc4 == _0x5bf4e7) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5ae96d + '\x20:'), _0x2743a8[_0x5ae96d] = await _0xabeb3a(), _0x37c275['writeFileSync']('../settings.json', JSON['stringify'](_0x2743a8));
                                                                            break;
                                                                        } else
                                                                            _0x5bf4e7++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x5af1c7(0xbb8), _0x3f3eea();
                                                                } else {
                                                                    if (_0x38f025[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x4f5c7f(), _0x3f3eea();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x38f025[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x2dbf6d = await _0x47c570();
                                                                            _0x2dbf6d == 'ModuleVoorDeBoys' ? (await _0x453770(), await _0x5749f7(), await afewFunction(_0x4ad912[_0x37e7b8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x5af1c7(0xbb8));
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
            await _0x3f3eea();
        } catch (_0x3931f3) {
            return console['log'](_0x3931f3), await _0x5af1c7(0x3a98);
        }
}
;
_0x2e24da('JRaffles\x20' + _0x2ed8f3), _0x4f5c7f();
try {
    _0x4872d0();
} catch (_0x25c784) {
    var _0x57f4dd = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1d5408
            },
            {
                'name': 'Version',
                'value': '' + _0x2ed8f3
            },
            {
                'name': 'Error',
                'value': '' + _0x25c784
            }
        ]
    }];
    const _0x3bd4c0 = { 'embeds': _0x57f4dd };
    _0x57e297(_0x3cd445, _0x3bd4c0);
}