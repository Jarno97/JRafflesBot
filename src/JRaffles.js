process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x21dcc9 = require('node-imap'), _0x4bdf70 = require('util')['inspect'];
const _0x295f85 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x37665e } = require('discord.js');
var _0x403627 = require('exe');
const { execFile: _0x2b99ac } = require('child_process'), _0x4c17a2 = require('puppeteer-extra'), _0x14fdd9 = require('puppeteer-extra-plugin-recaptcha'), _0x1fef96 = require('puppeteer-extra-plugin-stealth'), _0x5bf3af = require('chalk'), _0x10e00c = require('node-bash-title'), _0x5a9a17 = require('fs'), _0x22fcaa = require('axios'), _0x2d056b = require('papaparse');
var _0x3157db = require('random-name');
const _0x100b74 = require('request');
var _0x47ba17 = require('prompt');
const _0x3970a3 = _0x100b74['jar']();
var _0x14d76e = {};
const _0x3bdb3c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x199e62 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x33438f = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x407ce5 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5ddf17 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x462ae3 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4b0178 = 'https://discord.com/api/webhooks/', _0x1a5925 = '' + _0x4b0178 + _0x33438f, _0x14fef8 = '' + _0x4b0178 + _0x407ce5, _0x59063a = '' + _0x4b0178 + _0x3bdb3c, _0xfac951 = '' + _0x4b0178 + _0x199e62, _0x2383eb = '' + _0x4b0178 + _0x5ddf17, _0x305128 = '' + _0x4b0178 + _0x462ae3;
const _0x173cf2 = JSON['parse'](_0x5a9a17['readFileSync']('../package.json', 'utf-8')), _0x368722 = _0x173cf2['version'];
var _0x3fa273, _0x345555, _0x4858d4, _0x22e4b4, _0x554b4c, _0x825754, _0x5b47fe, _0x3daad8;
const _0x4bc2d9 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x420852 = ![];
const _0x5c524f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5a1810 = '0123456789';
var _0x1fa1be = _0x5c524f['split']('');
const _0x2ec960 = require('auto-git-update'), { PageEmittedEvents: _0x232dae } = require('puppeteer'), { getRandomValues: _0x1558e5 } = require('crypto'), { resolve: _0x43853f } = require('path'), { Console: _0x4d554e } = require('console'), _0x34fcdb = {
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
}, _0xbd160f = new _0x2ec960(_0x34fcdb);
async function _0x1d9e56() {
    _0x554b4c = _0x5a9a17['readdirSync']('../proxies'), _0x22e4b4 = _0x5a9a17['readdirSync']('../tasks'), !_0x5a9a17['existsSync']('../accounts/fenom.csv') && _0x5a9a17['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5a9a17['existsSync']('../accounts/bstn.csv') && _0x5a9a17['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5a9a17['existsSync']('../accounts/eql.csv') && _0x5a9a17['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x5a9a17['existsSync']('../failed-tasks.csv') && _0x5a9a17['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5a9a17['existsSync']('../successful-tasks.csv') && _0x5a9a17['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x14d76e = JSON['parse'](_0x5a9a17['readFileSync']('../settings.json', 'utf-8')), !_0x14d76e['delay'] && (_0x14d76e['delay'] = 0x3c, _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['masterMail'] && (_0x14d76e['masterMail'] = 'yourmail@gmail.com', _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['masterPassword'] && (_0x14d76e['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['captchaKey'] && (_0x14d76e['captchaKey'] = '', _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['useRandomProxy'] && (_0x14d76e['useRandomProxy'] = !![], _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['shuffleTasks'] && (_0x14d76e['shuffleTasks'] = ![], _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), !_0x14d76e['webhook'] && (_0x14d76e['webhook'] = '', _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), _0x14d76e['delay'] <= 0x1388 && (_0x14d76e['delay'] = _0x14d76e['delay'] * 0x3e8), _0x14d76e['AfewDelay'] && (delete _0x14d76e['AfewDelay'], _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), _0x14d76e['MahaDelay'] && (delete _0x14d76e['MahaDelay'], _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), _0x14d76e['footshopDelay'] && (delete _0x14d76e['footshopDelay'], _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e, null, 0x2))), _0x14d76e['MahaDelay'] = _0x14d76e['delay'], _0x4b0178 = _0x14d76e['webhook'], _0x825754 = _0x14d76e['licenseKey'];
}
let _0x305e65, _0x45ba49 = [], _0xde0121;
const _0x32b42a = _0x5004a0 => new Promise(_0x3afb3f => setTimeout(_0x3afb3f, _0x5004a0));
function _0x3930ce(_0x57f7fa, _0xc0a8c5) {
    return Math['floor'](Math['random']() * (_0xc0a8c5 - _0x57f7fa + 0x1) + _0x57f7fa);
}
function _0x330bc9(_0x8361de) {
    let _0x481884 = _0x8361de['length'], _0xd481bf;
    while (_0x481884 != 0x0) {
        _0xd481bf = Math['floor'](Math['random']() * _0x481884), _0x481884--, [_0x8361de[_0x481884], _0x8361de[_0xd481bf]] = [
            _0x8361de[_0xd481bf],
            _0x8361de[_0x481884]
        ];
    }
    return _0x8361de;
}
async function _0x5c6cd6(_0x183d73) {
    return _0x22fcaa['get']('https://api.hyper.co/v4/licenses/' + _0x183d73, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4bc2d9 } })['then'](_0x2e4cee => _0x2e4cee['data'])['catch'](() => null);
}
;
async function _0x2b76a5(_0x3059b2) {
    console['clear']();
    if (_0x3059b2 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x354003 = await _0x47ba17['get']('License');
        if (_0x354003['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x32b42a(0xbb8), _0x2b76a5(_0x3059b2);
        _0x3059b2 = _0x354003['License'], _0x14d76e['licenseKey'] = _0x3059b2, _0x825754 = _0x3059b2, _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e));
    }
    console['log']('Checking\x20license\x20' + _0x825754 + '...'), await _0x32b42a(0x320);
    const _0x4aa168 = await _0x5c6cd6(_0x3059b2);
    _0x5b47fe = JSON['stringify'](_0x4aa168['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x3daad8 = JSON['stringify'](_0x4aa168['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4aa168)
        return console['log']('License\x20not\x20found');
    if (!_0x4aa168['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4aa168['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x420852 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x420852 = ![]);
}
async function _0x45ae85() {
    var _0x18bc7e = await _0x47ba17['get']('Module');
    return console['clear'](), _0x18bc7e['Module'];
}
;
async function _0x488eef() {
    var _0x500b89 = await _0x47ba17['get']('Setting');
    return console['clear'](), _0x500b89['Setting'];
}
async function _0x4454c3() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x48730b = 0x0; _0x48730b < _0x22e4b4['length']; _0x48730b++) {
        console['log']('\x20(' + _0x48730b + ')\x20' + _0x22e4b4[_0x48730b]);
    }
    console['log']('');
    var _0x40db22 = await _0x47ba17['get']('Task');
    if (_0x40db22['Task'] > _0x22e4b4['length'] - 0x1 || isNaN(_0x40db22['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x32b42a(0x3e8), _0x4454c3();
    var _0x17e35c = _0x5a9a17['readFileSync']('../tasks/' + _0x22e4b4[_0x40db22['Task']], 'utf-8');
    return _0x4858d4 = _0x2d056b['parse'](_0x17e35c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5bf3af['blue'](_0x22e4b4[_0x40db22['Task']])), _0x3fa273 = _0x22e4b4[_0x40db22['Task']], _0x4858d4;
}
async function _0xdd7384() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x58144a = 0x0; _0x58144a < _0x554b4c['length']; _0x58144a++) {
        console['log']('\x20(' + _0x58144a + ')\x20' + _0x554b4c[_0x58144a]);
    }
    console['log']('');
    var _0x3c533c = await _0x47ba17['get']('Proxies');
    if (_0x3c533c['Proxies'] > _0x554b4c['length'] - 0x1 || isNaN(_0x3c533c['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x32b42a(0x3e8), _0xdd7384();
    var _0x481749 = _0x5a9a17['readFileSync']('../proxies/' + _0x554b4c[_0x3c533c['Proxies']], 'utf-8')['split']('\x0a');
    let _0x97e70d = _0x481749['map']((_0x2c8415, _0x52be67) => {
        sanatizeProxy = _0x2c8415['replace']('\x0d', '');
        if (_0x481749[_0x52be67 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x345555 = _0x554b4c[_0x3c533c['Proxies']], console['clear'](), _0x97e70d;
}
async function _0x349fb8() {
    var _0x44fcbb = await _0x47ba17['get']('Value');
    return console['clear'](), _0x44fcbb['Value'];
}
async function _0x294113(_0x2c1a45) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x58927f = 0x0; _0x58927f < _0x2c1a45['length']; _0x58927f++) {
        console['log']('\x20(' + _0x58927f + ')\x20[' + _0x2c1a45[_0x58927f]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3ee03e = await _0x47ba17['get']('Module');
    return _0x3ee03e['Module'];
}
async function _0x4106df() {
    var _0xc81bce = await _0x47ba17['get']('Password');
    return console['clear'](), _0xc81bce['Password'];
}
;
async function _0x5181ab() {
    var _0x33d611 = await _0x47ba17['get']('Links');
    return _0x33d611['Links'];
}
;
async function _0x9f140f() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1f2745 = 0x0; _0x1f2745 < _0x45ba49['length']; _0x1f2745++) {
        console['log']('\x20(' + _0x1f2745 + ')\x20' + _0x45ba49[_0x1f2745]);
    }
    ;
    console['log']();
    let _0x2ab28f = await _0x47ba17['get']('Product');
    return console['clear'](), _0x2ab28f['Product'];
}
;
function _0x435734() {
    var _0xa2b683 = new Date(Date['now']())['toLocaleTimeString']();
    return _0xa2b683;
}
;
function _0x4afd87() {
    var _0x1865c5 = new Date(Date['now']())['toLocaleString']();
    return _0x1865c5['replace'](',', '');
}
async function _0x449918(_0xe6d8b7, _0xcc1770) {
    let _0x3b653d = { 'headers': { 'content-type': 'application/json' } };
    if (_0x368722 != 'devkey') {
        await _0x22fcaa['post'](_0xe6d8b7, _0xcc1770, _0x3b653d);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x2b27e4(_0x4e2e51, _0x25b069, _0x4552cd, _0x1a0124, _0x5d5407) {
    if (!_0x1a0124 && _0x4552cd == 'dev') {
        var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x25b069['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x25b069['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4e2e51['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x14d76e['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5b47fe,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4e2e51['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4e2e51['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x368722,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3465f5['data'];
    } else {
        if (_0x1a0124 && _0x4552cd == 'dev') {
            var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x25b069['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5b47fe,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x25b069['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4e2e51['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x14d76e['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x5d5407,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4e2e51['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4e2e51['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x368722,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3465f5['data'];
        } else {
            if (_0x4552cd == 'pub') {
                var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x25b069['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x25b069['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4e2e51['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x14d76e['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4e2e51['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x368722,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3465f5['data'];
            } else {
                if (_0x4552cd == 'acc' && !_0x1a0124) {
                    var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x25b069['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5b47fe,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x25b069['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x14d76e['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x368722,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3465f5['data'];
                } else {
                    if (_0x4552cd == 'acc' && _0x1a0124) {
                        var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x25b069['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5b47fe,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x5d5407,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x25b069['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x14d76e['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x368722,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3465f5['data'];
                    } else {
                        if (_0x4552cd == 'open') {
                            var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3daad8)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5b47fe,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x368722,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3465f5['data'];
                        } else {
                            if (!_0x1a0124 && _0x4552cd == 'ver') {
                                var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x25b069['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5b47fe,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x25b069['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x14d76e['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x368722,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3465f5['data'];
                            } else {
                                if (_0x1a0124 && _0x4552cd == 'ver') {
                                    var _0x3465f5 = new _0x37665e()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x25b069['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5b47fe,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x5d5407,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x25b069['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x14d76e['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x368722,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3465f5['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x1267d9(_0x1424be, _0xc3e5eb) {
    var _0x153824 = _0x1424be[_0xc3e5eb]['Address1']['split'](''), _0x21c458 = _0x1424be[_0xc3e5eb]['Address2']['split'](''), _0x4c2e50 = _0x1424be[_0xc3e5eb]['Email']['split']('@');
    for (var _0xe9f7d0 = 0x0; _0xe9f7d0 < _0x153824['length']; _0xe9f7d0++) {
        if (_0x153824[_0xe9f7d0] == 'X') {
            var _0x3cec2a = Math['round'](Math['random']() * (_0x5c524f['length'] - 0x1));
            _0x153824[_0xe9f7d0] = _0x1fa1be[_0x3cec2a];
        }
    }
    ;
    for (var _0xe9f7d0 = 0x0; _0xe9f7d0 < _0x21c458['length']; _0xe9f7d0++) {
        if (_0x21c458[_0xe9f7d0] == 'X') {
            var _0x3cec2a = Math['round'](Math['random']() * (_0x5c524f['length'] - 0x1));
            _0x21c458[_0xe9f7d0] = _0x1fa1be[_0x3cec2a];
        }
    }
    ;
    _0x1424be[_0xc3e5eb]['FirstName'] == 'RANDOM' && (_0x1424be[_0xc3e5eb]['FirstName'] = _0x3157db['first']());
    _0x1424be[_0xc3e5eb]['LastName'] == 'RANDOM' && (_0x1424be[_0xc3e5eb]['LastName'] = _0x3157db['last']());
    _0x4c2e50[0x0] == 'RANDOM' ? _0x4c2e50[0x0] = '' + _0x3157db['first']() + _0x3157db['last']() + _0x3930ce(0x1, 0x270f) + '@' : _0x4c2e50[0x0] = _0x4c2e50[0x0] + '@';
    _0x1424be[_0xc3e5eb]['Email'] = _0x4c2e50['join'](''), _0x1424be[_0xc3e5eb]['Address1'] = _0x153824['join'](''), _0x1424be[_0xc3e5eb]['Address2'] = _0x21c458['join']('');
    _0x1424be[_0xc3e5eb]['Phone'] == 'RANDOM' && (_0x1424be[_0xc3e5eb]['Phone'] = '0' + _0x3930ce(0x5f5e100, 0x3b9ac9ff));
    if (_0x1424be[_0xc3e5eb]['Follower'] == 'RANDOM') {
        var _0x47508d = _0x3930ce(0x1, 0x270f);
        _0x1424be[_0xc3e5eb]['Follower'] = '' + _0x3157db['first']() + _0x3157db['last']() + _0x47508d + '\x20';
    }
    _0x1424be[_0xc3e5eb]['HouseNumber'] == 'RANDOM' && (_0x1424be[_0xc3e5eb]['HouseNumber'] = _0x3930ce(0x1, 0xc8));
    if (_0x1424be[_0xc3e5eb]['Address1'] == 'RANDOM') {
        var _0x33773a = Math['round'](Math['random']() * (_0x5c524f['length'] - 0x1)), _0x190348 = _0x1fa1be[_0x33773a];
        _0x1424be[_0xc3e5eb]['Address1'] = _0x3157db['last']() + 'straat', _0x1424be[_0xc3e5eb]['Zip'] == '' && (_0x1424be[_0xc3e5eb]['Postcode'] = _0x3930ce(0x3e8, 0x270f) + '\x20' + _0x190348 + _0x190348, _0x1424be[_0xc3e5eb]['Zip'] = _0x1424be[_0xc3e5eb]['Postcode']), _0x1424be[_0xc3e5eb]['HouseNumber'] = '' + _0x3930ce(0x1, 0xc8);
    }
    return;
}
;
async function _0x3e5731(_0x1fcbce, _0x5cc0dd) {
    _0x5a9a17['appendFileSync']('../failed-tasks.csv', _0x4afd87() + ',' + _0x5cc0dd['store'] + ',' + _0x5cc0dd['name'] + ',' + _0x1fcbce['Url'] + ',' + _0x1fcbce['Size'] + ',' + _0x1fcbce['Follower'] + ',' + _0x1fcbce['FirstName'] + ',' + _0x1fcbce['LastName'] + ',' + _0x1fcbce['Address1'] + ',' + _0x1fcbce['Address2'] + ',' + _0x1fcbce['HouseNumber'] + ',' + _0x1fcbce['Zip'] + ',' + _0x1fcbce['City'] + ',' + _0x1fcbce['State'] + ',' + _0x1fcbce['Country'] + ',' + _0x1fcbce['Phone'] + ',' + _0x1fcbce['Email'] + ',' + _0x1fcbce['Password'] + ',' + _0x1fcbce['PaymentMethod'] + ',' + _0x1fcbce['CardType'] + ',' + _0x1fcbce['NameOnCard'] + ',' + _0x1fcbce['CardNumber'] + ',' + _0x1fcbce['ExpiryDate'] + ',' + _0x1fcbce['CVV'] + ',' + _0x1fcbce['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3c6b3f(_0x40e031, _0x3de732) {
    _0x5a9a17['appendFileSync']('../successful-tasks.csv', _0x4afd87() + ',' + _0x3de732['store'] + ',' + _0x3de732['name'] + ',' + _0x40e031['Url'] + ',' + _0x40e031['Size'] + ',' + _0x40e031['Follower'] + ',' + _0x40e031['FirstName'] + ',' + _0x40e031['LastName'] + ',' + _0x40e031['Address1'] + ',' + _0x40e031['Address2'] + ',' + _0x40e031['HouseNumber'] + ',' + _0x40e031['Zip'] + ',' + _0x40e031['City'] + ',' + _0x40e031['State'] + ',' + _0x40e031['Country'] + ',' + _0x40e031['Phone'] + ',' + _0x40e031['Email'] + ',' + _0x40e031['Password'] + ',' + _0x40e031['PaymentMethod'] + ',' + _0x40e031['CardType'] + ',' + _0x40e031['NameOnCard'] + ',' + _0x40e031['CardNumber'] + ',' + _0x40e031['ExpiryDate'] + ',' + _0x40e031['CVV'] + ',' + _0x40e031['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4d2e22() {
    let _0x1393ef = proxyFile['split']('\x0a'), _0x365225 = _0x1393ef['map']((_0x1c590, _0x4394da) => {
        sanatizeProxy = _0x1c590['replace']('\x0d', '');
        if (_0x1393ef[_0x4394da + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x365225;
}
;
async function _0x24470f(_0x125156) {
    var _0x5f054f = _0x125156[0x1]['split'](':');
    const _0x35cb97 = await _0x4c17a2['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5f054f[0x0] + ':' + _0x5f054f[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2b0efc = await _0x35cb97['newPage']();
        await _0x2b0efc['authenticate']({
            'username': '' + _0x5f054f[0x2],
            'password': '' + _0x5f054f[0x3]
        }), console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2b0efc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b0efc['setRequestInterception'](!![]), _0x2b0efc['on']('request', _0xbaaee8 => {
            _0xbaaee8['resourceType']() === 'image' || _0xbaaee8['resourceType']() === 'font' || _0xbaaee8['resourceType']() === 'media' ? _0xbaaee8['abort']() : _0xbaaee8['continue']();
        }), await _0x2b0efc['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2b0efc['waitForTimeout'](0xbb8), await _0x2b0efc['waitForSelector']('.product-card');
        const _0x189b9f = await _0x2b0efc['$$eval']('a.product-card', _0x2b420f => {
            return _0x2b420f['map'](_0x51a199 => _0x51a199['href']);
        });
        return _0x45ba49 = _0x189b9f;
    } catch (_0x1860a3) {
        console['log']('\x20' + _0x1860a3);
    } finally {
        _0x35cb97['close'](), console['clear']();
    }
}
;
async function _0x1e6e68(_0x3409c5, _0x3fb036) {
    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14d76e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3984f2 = 0x0; _0x3984f2 < bouncewear['length']; _0x3984f2++) {
        await _0x1267d9(bouncewear, _0x3984f2);
        if (bouncewear[_0x3984f2]['Email'] == '' || bouncewear[_0x3984f2]['Password'] == '' || bouncewear[_0x3984f2]['FirstName'] == '' || bouncewear[_0x3984f2]['LastName'] == '') {
            console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14d76e['useRandomProxy'] = ![])
            var _0x5b915e = _0x4d2e22()[_0x3984f2]['split'](':');
        else
            var _0x4c37c2 = Math['round'](Math['random']() * (_0x4d2e22()['length'] - 0x1)), _0x5b915e = _0x4d2e22()[_0x4c37c2]['split'](':');
        const _0x21cc57 = await _0x4c17a2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5b915e[0x0] + ':' + _0x5b915e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xf06f86 = await _0x21cc57['newPage']();
            await _0xf06f86['authenticate']({
                'username': '' + _0x5b915e[0x2],
                'password': '' + _0x5b915e[0x3]
            }), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf06f86['setRequestInterception'](!![]), _0xf06f86['on']('request', _0x154351 => {
                _0x154351['resourceType']() === 'image' || _0x154351['resourceType']() === 'font' || _0x154351['resourceType']() === 'media' ? _0x154351['abort']() : _0x154351['continue']();
            }), await _0xf06f86['goto'](_0x3409c5), await _0x32b42a(0xbb8), await _0xf06f86['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Filling\x20information'), await _0xf06f86['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3984f2]['FirstName']), await _0x32b42a(0x226), await _0xf06f86['type']('#RegisterForm-LastName', '' + bouncewear[_0x3984f2]['LastName']), await _0x32b42a(0x226), await _0xf06f86['type']('#RegisterForm-email', '' + bouncewear[_0x3984f2]['Email']), await _0x32b42a(0x226), await _0xf06f86['type']('#RegisterForm-password', '' + bouncewear[_0x3984f2]['Password']), await _0x32b42a(0x226), await _0xf06f86['click']('#marketing'), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Submitting..'), await _0xf06f86['$eval']('#RegisterForm', _0x2a0e40 => _0x2a0e40['submit']()), await _0x32b42a(0x1f40), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0xf06f86['solveRecaptchas'](), await _0xf06f86['click']('.shopify-challenge__button.btn');
            async function _0x4b0e15() {
                for (var _0x4412f5 = 0x0; _0x4412f5 < 0x4; _0x4412f5++) {
                    try {
                        console['log']('try'), await _0xf06f86['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20' + _0x5bf3af['red']('Catpcha\x20failed,\x20retrying..')), await _0xf06f86['solveRecaptchas'](), await _0xf06f86['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4b0e15(), console['log'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x32b42a(0x1f4);
            try {
                await _0xf06f86['waitForSelector']('.featured-title'), await _0x32b42a(0x1f4), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3984f2]['Email'] + '\x20Generated!')), _0x5a9a17['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3984f2]['Email'] + ',' + bouncewear[_0x3984f2]['Password']), console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x3fb036['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3984f2]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x4c3c51) {
                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4c3c51));
            }
        } catch (_0x29e000) {
            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x3984f2 + 0x1) + '\x20:\x20' + _0x29e000));
        } finally {
            _0x21cc57 && _0x21cc57['close'](), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
        }
    }
}
async function _0x304446(_0x42b69a, _0x135343, _0x296e20) {
    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14d76e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4646f1 = 0x0; _0x4646f1 < _0x135343['length']; _0x4646f1++) {
        _0x10e00c(_0x42b69a['name'] + '\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20/\x20' + _0x135343['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
        var _0x35cb45 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5b47fe
                },
                {
                    'name': 'Product',
                    'value': '' + _0x135343[_0x4646f1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x135343[_0x4646f1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14d76e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x14d76e['version']
                }
            ]
        }];
        const _0x477243 = { 'embeds': _0x35cb45 };
        await _0x1267d9(_0x135343, _0x4646f1);
        if (_0x135343[_0x4646f1]['Email'] == '' || _0x135343[_0x4646f1]['Password'] == '' || _0x135343[_0x4646f1]['FirstName'] == '' || _0x135343[_0x4646f1]['LastName'] == '') {
            console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x135343[_0x4646f1]['Password'] == '' || _0x135343[_0x4646f1]['Password'] == undefined) && (_0x135343[_0x4646f1]['Password'] = 'ErehsaWonRaj1!');
        if (_0x14d76e['useRandomProxy'] = ![])
            var _0x17186a = _0x296e20[_0x4646f1]['split'](':');
        else
            var _0x58de80 = Math['round'](Math['random']() * (_0x296e20['length'] - 0x1)), _0x17186a = _0x296e20[_0x58de80]['split'](':');
        const _0x111c3d = await _0x4c17a2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x17186a[0x0] + ':' + _0x17186a[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d5da7 = await _0x111c3d['newPage']();
            await _0x4d5da7['authenticate']({
                'username': '' + _0x17186a[0x2],
                'password': '' + _0x17186a[0x3]
            }), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d5da7['setRequestInterception'](!![]), _0x4d5da7['on']('request', _0x3a9193 => {
                _0x3a9193['resourceType']() === 'image' || _0x3a9193['resourceType']() === 'font' || _0x3a9193['resourceType']() === 'media' ? _0x3a9193['abort']() : _0x3a9193['continue']();
            }), await _0x4d5da7['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x4d5da7['goto']('' + _0x135343[_0x4646f1]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x4d5da7['waitForSelector']('#btnPdpAtb'), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x135343[_0x4646f1]['Size']);
            const _0x247512 = await _0x4d5da7['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x3a10b8 => {
                return _0x3a10b8['map'](_0x5a25e8 => _0x5a25e8['innerText']);
            }), _0xf2220b = await _0x4d5da7['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x493e1d = ![];
            if (_0x135343[_0x4646f1]['Size'] == 'RANDOM') {
                var _0x488105 = Math['round'](Math['random']() * (_0xf2220b['length'] - 0x1));
                await _0xf2220b[_0x488105]['click']();
            } else
                for (var _0x3eeaae = 0x0; _0x3eeaae < _0x247512['length']; _0x3eeaae++) {
                    if (_0x247512[_0x3eeaae] != _0x135343[_0x4646f1]['Size'])
                        continue;
                    try {
                        await _0xf2220b[_0x3eeaae]['click']();
                    } catch {
                        console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x493e1d = !![];
                    }
                }
            if (_0x493e1d)
                continue;
            await _0x32b42a(0x578), await _0x4d5da7['click']('#btnPdpAtb'), await _0x4d5da7['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x32b42a(0x3e8), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x4d5da7['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x4d5da7['waitForSelector']('#email'), await _0x4d5da7['type']('#email', _0x135343[_0x4646f1]['Email']), await _0x32b42a(0x226), await _0x4d5da7['click']('#guest-submit'), await _0x32b42a(0x1b58), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4d5da7['waitForSelector']('#firstname'), await _0x4d5da7['type']('#firstname', _0x135343[_0x4646f1]['FirstName'], 0x1f4), await _0x32b42a(0x190), await _0x4d5da7['waitForSelector']('#surname'), await _0x4d5da7['type']('#surname', _0x135343[_0x4646f1]['LastName'], 0x1f4), await _0x32b42a(0x190), await _0x4d5da7['waitForSelector']('#mobile'), await _0x4d5da7['type']('#mobile', _0x135343[_0x4646f1]['Phone'], 0x1f4), await _0x32b42a(0x190), await _0x4d5da7['click']('#enterManualDiv'), await _0x32b42a(0x5dc), await _0x4d5da7['waitForSelector']('#address1'), await _0x4d5da7['type']('#address1', _0x135343[_0x4646f1]['Address1'] + '\x20' + _0x135343[_0x4646f1]['HouseNumber'], 0x226), await _0x32b42a(0x384), await _0x4d5da7['waitForSelector']('#address2'), await _0x4d5da7['type']('#address2', '' + _0x135343[_0x4646f1]['Address2'], 0x226), await _0x32b42a(0x320);
            const _0x52b07b = await _0x4d5da7['$$eval']('#countryselect_view3\x20>\x20option', _0x206736 => {
                return _0x206736['map'](_0x4d9edf => _0x4d9edf['value']);
            });
            var _0x1e7042;
            for (var _0x5e84b7 = 0x0; _0x5e84b7 < _0x52b07b['length']; _0x5e84b7++) {
                if (_0x52b07b[_0x5e84b7]['startsWith']('' + _0x135343[_0x4646f1]['Country'])) {
                    _0x1e7042 = _0x52b07b[_0x5e84b7];
                    break;
                }
                continue;
            }
            await _0x4d5da7['select']('#countryselect_view3', '' + _0x1e7042), await _0x4d5da7['waitForSelector']('#address4'), await _0x4d5da7['type']('#address4', '' + _0x135343[_0x4646f1]['City'], 0x1f4), await _0x32b42a(0x384), await _0x4d5da7['waitForSelector']('#postcode'), await _0x4d5da7['type']('#postcode', '' + _0x135343[_0x4646f1]['Zip'], 0x1f4), await _0x32b42a(0x4b0);
            const _0x2daf5b = await _0x4d5da7['url']();
            console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x3a2f2e = _0x2daf5b['split']('?')[0x1], _0x27ed39 = await _0x4d5da7['$']('#co_address_submit');
            await _0x27ed39['evaluate'](_0x355dc1 => _0x355dc1['click']()), await _0x32b42a(0x1388), await _0x4d5da7['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x3a2f2e), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x4d5da7['waitForSelector']('#paymentbuttons'), await _0x32b42a(0x1388), await _0x4d5da7['click']('#paymentbuttons\x20>\x20div'), await _0x32b42a(0x1c2), await _0x4d5da7['waitForSelector']('#card-number'), await _0x4d5da7['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4c33fc = await _0x4d5da7['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x1b51cc = await _0x4c33fc['contentFrame']();
            await _0x1b51cc['waitForSelector']('.InputContainer'), await _0x1b51cc['click']('.InputContainer\x20>\x20input'), await _0x32b42a(0x578), await _0x4d5da7['type']('#card-number', '' + _0x135343[_0x4646f1]['CreditNumber']), await _0x32b42a(0xfa), await _0x4d5da7['type']('#card-expiry', '' + _0x135343[_0x4646f1]['ExpiryDate']), await _0x32b42a(0xfa), await _0x4d5da7['type']('#card-cvc', '' + _0x135343[_0x4646f1]['CVV']), await _0x32b42a(0x7d0), await _0x4d5da7['click']('#card-button'), console['log'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4d5da7['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x449918(_0x59063a, _0x477243);
            } catch {
                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x203DS\x20Failed')), _0x35cb45[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x35cb45[0x0]['description'] = '3DS\x20Failed', await _0x449918(_0xfac951, _0x477243);
            }
        } catch (_0x202ed4) {
            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x42b69a['name'] + ']\x20Task\x20' + (_0x4646f1 + 0x1) + '\x20:\x20' + _0x202ed4)), _0x35cb45[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x35cb45[0x0]['description'] = '' + _0x202ed4, await _0x449918(_0xfac951, _0x477243);
        } finally {
            _0x111c3d && _0x111c3d['close']();
            if (_0x4646f1 + 0x1 == _0x135343['length']) {
                console['log'](_0x5bf3af['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x32b42a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x14d76e['AfewDelay'] + '\x20ms'), await _0x32b42a(_0x14d76e['AfewDelay']);
        }
    }
}
async function _0x296cd6(_0x29b667, _0x20d67a, _0x3f2e27, _0x4273d9, _0x471ef7) {
    var _0xc72fed, _0x14baa7 = {}, _0x5d823d = [], _0x5ef19a = {}, _0x3954a9 = [
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
    !_0x4273d9 && (_0x4273d9 = {});
    if (_0x20d67a != 'ver') {
        _0x10e00c(_0x3f2e27['name'] + '\x20Task\x20' + (_0x29b667 + 0x1) + '\x20/\x20' + _0x4273d9['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x4273d9, _0x29b667), _0x5d823d = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5b47fe
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4273d9[_0x29b667]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14d76e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x368722
                }
            ]
        }], _0x5ef19a = { 'embeds': _0x5d823d }, _0x14baa7 = _0x3f2e27['data'];
        _0x20d67a == 'exp' ? _0x14baa7['data']['attributes']['email'] = '' + _0x4273d9[_0x29b667]['FirstName'] + _0x4273d9[_0x29b667]['LastName'] + _0x14d76e['catchall'] : _0x14baa7['data']['attributes']['email'] = '' + _0x4273d9[_0x29b667]['Email'];
        if (_0x4273d9[_0x29b667]['Size'] == 'RANDOM') {
        }
        _0x14baa7['data']['attributes']['properties']['$first_name'] = '' + _0x4273d9[_0x29b667]['FirstName'], _0x14baa7['data']['attributes']['properties']['$last_name'] = '' + _0x4273d9[_0x29b667]['LastName'], _0x14baa7['data']['attributes']['properties']['$address1'] = _0x4273d9[_0x29b667]['Address1'] + '\x20' + _0x4273d9[_0x29b667]['Address2'] + '\x20' + _0x4273d9[_0x29b667]['HouseNumber'], _0x14baa7['data']['attributes']['properties']['$zip'] = '' + _0x4273d9[_0x29b667]['Zip'], _0x14baa7['data']['attributes']['properties']['$city'] = '' + _0x4273d9[_0x29b667]['City'], _0x14baa7['data']['attributes']['properties']['$country'] = '' + _0x4273d9[_0x29b667]['Country'], _0x14baa7['data']['attributes']['properties']['Size'] = '' + _0x4273d9[_0x29b667]['Size'], _0x14baa7['data']['attributes']['properties']['$phone_number'] = '' + _0x4273d9[_0x29b667]['Phone'], _0x14baa7['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4273d9[_0x29b667]['Follower'];
    }
    if (_0x14d76e['useRandomProxy'] = ![])
        var _0x50aae7 = _0x471ef7[_0x29b667]['split'](':');
    else
        var _0x425bb9 = Math['round'](Math['random']() * (_0x471ef7['length'] - 0x1)), _0x50aae7 = _0x471ef7[_0x425bb9]['split'](':');
    var _0x596b4 = {
        'jar': _0x3970a3,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3f2e27['url'],
        'headers': _0x3f2e27['headers'],
        'body': JSON['stringify'](_0x14baa7),
        'proxy': 'http://' + _0x50aae7[0x2] + ':' + _0x50aae7[0x3] + '@' + _0x50aae7[0x0] + ':' + _0x50aae7[0x1]
    };
    return _0x20d67a != 'ver' && (_0x596b4['url'] = _0x3f2e27['url'], _0x596b4['headers'] = _0x3f2e27['headers']), _0x20d67a == 'ver' && (_0x596b4['method'] = 'GET'), new Promise(function (_0x5aa9c3, _0x57a677) {
        callback = async (_0x19fae2, _0x255d5e, _0xfd07c2) => {
            if (!_0x19fae2 && _0x255d5e['statusCode'] == 0xca || !_0x19fae2 && _0x255d5e['statusCode'] == 0xc8) {
                if (_0x20d67a != 'ver') {
                    var _0x259d66 = await _0x2b27e4(_0x4273d9[_0x29b667], _0x3f2e27, 'dev', ![]), _0x3f23bf = await _0x2b27e4(_0x4273d9[_0x29b667], _0x3f2e27, 'pub', ![]);
                    const _0x3a8098 = {
                        'succesDEVMSG': { 'embeds': [_0x259d66] },
                        'succesPUBMSG': { 'embeds': [_0x3f23bf] }
                    };
                    if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                        try {
                            await _0x449918(_0x14d76e['webhook'], _0x3a8098['succesDEVMSG']);
                        } catch {
                        }
                    await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x3a8098['succesDEVMSG']), await _0x32b42a(0xc8);
                    try {
                        await _0x449918(_0x2383eb, _0x3a8098['succesPUBMSG']);
                    } catch {
                    }
                    _0x3c6b3f(_0x4273d9[_0x29b667], _0x3f2e27);
                }
                _0x5aa9c3(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x3f2e27['name'] + ']\x20Task\x20' + (_0x29b667 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x20d67a != 'ver') {
                    var _0x55132c = '' + _0x19fae2, _0x19c946 = await _0x2b27e4(_0x4273d9[_0x29b667], _0x3f2e27, 'dev', !![], _0x55132c), _0x157049 = {};
                    _0x157049['errorDEV'] = { 'embeds': [_0x19c946] }, _0x3e5731(_0x4273d9[_0x29b667], _0x3f2e27), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x157049['errorDEV']), await _0x449918(_0xfac951, _0x157049['errorDEV']);
                }
                _0x57a677(console['log'](_0x435734() + '\x20[' + _0x3f2e27['name'] + ']\x20Task\x20' + (_0x29b667 + 0x1) + ':\x20' + _0x19fae2));
            }
        };
        try {
            _0x20d67a != 'ver' && console['log'](_0x435734() + '\x20[' + _0x3f2e27['name'] + ']\x20Task\x20' + (_0x29b667 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x14baa7['data']['attributes']['email']), _0x100b74(_0x596b4, callback);
        } catch (_0x9b39a2) {
            console['log'](_0x435734() + '\x20Task\x20' + (_0x29b667 + 0x1) + ':\x20' + _0x9b39a2);
        }
    });
}
;
async function _0x10b8dc(_0x1ac03a, _0x27495f) {
    if (_0x364222 != 'yes')
        var _0x364222 = '', _0x3c3863 = 0x0;
    var _0x126b51 = [];
    async function _0x17029b() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x2c3cce = await _0x47ba17['get']('Quantity')['Quantity'], _0x13237e = new _0x21dcc9({
            'user': _0x14d76e['masterMail'],
            'password': _0x14d76e['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x8c9c44(_0x1d2a94) {
            _0x13237e['openBox']('INBOX', ![], _0x1d2a94);
        }
        _0x13237e['once']('ready', function () {
            _0x8c9c44(function (_0x1225d5, _0x1886c5) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x1225d5)
                    throw _0x1225d5;
                _0x13237e['seq']['search']([
                    'UNSEEN',
                    [
                        'FROM',
                        'noreply@afew-store.com'
                    ]
                ], function (_0x275799, _0x4be83b) {
                    if (!_0x4be83b || !_0x4be83b['length'])
                        console['log'](_0x435734() + '\x20[' + _0x1ac03a['name'] + ']\x20No\x20mails\x20found'), _0x13237e['end']();
                    else {
                        var _0x372110 = _0x13237e['seq']['fetch'](_0x4be83b, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x372110['on']('message', function (_0x5cc547, _0x4dafaa) {
                            var _0x69fa1 = '(#' + _0x4dafaa + ')\x20';
                            _0x5cc547['on']('body', function (_0x4ed058, _0x578b30) {
                                _0x295f85(_0x4ed058, (_0x5bd865, _0xe93de1) => {
                                    if (_0xe93de1['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0xe93de1['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0xe93de1['text']['split']('[')[0x2];
                                        var _0x32c497 = mes['split'](']')[0x0];
                                        _0x126b51['push'](_0x32c497);
                                    }
                                });
                            }), _0x5cc547['once']('end', function () {
                            });
                        }), _0x372110['once']('error', function (_0xe1714d) {
                            console['log']('Fetch\x20error:\x20' + _0xe1714d);
                        }), _0x372110['once']('end', function () {
                            _0x13237e['end']();
                        });
                    }
                });
            });
        }), _0x13237e['once']('error', function (_0x5cfffe) {
            console['log'](_0x5bf3af['red'](_0x5cfffe['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x13237e['once']('end', async function () {
        }), _0x13237e['connect']();
    }
    try {
        _0x17029b(), await _0x32b42a(0xfa0), console['log']('Found\x20' + _0x126b51['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32b42a(0xfa0);
    }
    var _0x13bab1;
    _0x10e00c('' + _0x1ac03a);
    var _0x2de8cd = _0x27495f[0x0]['split'](':'), _0x495739;
    try {
        _0x495739 = await _0x4c17a2['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2de8cd[0x0] + ':' + _0x2de8cd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x495739 = await _0x4c17a2['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2de8cd[0x0] + ':' + _0x2de8cd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Getting\x20Session');
        const _0x23755d = await _0x495739['newPage']();
        await _0x23755d['authenticate']({
            'username': '' + _0x2de8cd[0x2],
            'password': '' + _0x2de8cd[0x3]
        }), await _0x23755d['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x23755d, await _0x23755d['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x23755d['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Successfully\x20logged\x20in'), await _0x32b42a(0x2710);
        } catch (_0x4f550f) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4f550f);
        }
        for (var _0x3bf6fc = 0x0; _0x3bf6fc < _0x126b51['length']; _0x3bf6fc++) {
            console['log'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20:\x20Starting\x20Verification'), _0x10e00c(_0x1ac03a + '\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20/\x20' + _0x126b51['length']);
            const _0x185937 = await _0x495739['newPage']();
            await _0x185937['goto']('' + _0x126b51[_0x3bf6fc], { 'waitUntil': 'networkidle2' }), await _0x32b42a(0xbb8);
            try {
                const _0x2b886b = await _0x185937['$']('#challenge-heading');
                _0x2b886b && (console['log'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20:\x20' + _0x5bf3af['yellow']('2FA\x20Required')), await _0x185937['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x32b42a(0x9c40), await _0x185937['waitForSelector']('#payment-submit-btn'), await _0x185937['$eval']('#payment-submit-btn', _0x7d5f88 => _0x7d5f88['click']()), await _0x185937['click']('#payment-submit-btn');
                try {
                    await _0x185937['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x32b42a(0x5dc), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x12cae3) {
                    _0x364222 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x12cae3['message']);
                } finally {
                    if (_0x364222 == 'yes' && _0x3c3863 != 0x2) {
                        console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x1ac03a['name'] + ']\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20:\x20Retrying')), _0x3bf6fc = _0x3bf6fc - 0x1, _0x3c3863 = _0x3c3863 + 0x1;
                        continue;
                    }
                    _0x364222 == 'yes' && _0x3c3863 >= 0x2 && (_0x3e5731(csv[_0x3bf6fc], _0x1ac03a), _0x364222 = 'no', _0x3c3863 = 0x0), await _0x185937['close'](), await _0x32b42a(0x4650);
                }
            } catch (_0x3dc110) {
                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x1ac03a + ']\x20Task\x20' + (_0x3bf6fc + 0x1) + '\x20:\x20' + _0x3dc110));
            }
        }
    } catch (_0x2d82a4) {
        console['log'](_0x5bf3af['red']('' + _0x2d82a4));
    } finally {
        return await _0x495739['close'](), menu();
    }
}
const _0x117947 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x59aae0, _0x49bb7d, _0x30a937) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x45f6ad = 0x0; _0x45f6ad < _0x49bb7d['length']; _0x45f6ad++) {
                        if (_0x195f47 != 'yes')
                            var _0x195f47 = '', _0x4c2b64 = 0x0;
                        var _0x604bf7;
                        await _0x1267d9(_0x49bb7d, _0x45f6ad), _0x10e00c(_0x59aae0['name'] + '\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20/\x20' + _0x49bb7d['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        var _0x26f0ef = [
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
                        ], _0x31036d = Math['round'](Math['random']() * (_0x26f0ef['length'] - 0x1));
                        _0x49bb7d[_0x45f6ad]['Size'] == 'RANDOM' && (_0x49bb7d[_0x45f6ad]['Size'] = _0x26f0ef[_0x31036d]);
                        var _0x5b685b = Math['round'](Math['random']() * (_0x30a937['length'] - 0x1)), _0xd18e94 = _0x30a937[_0x5b685b]['split'](':'), _0x1d88f4;
                        try {
                            _0x1d88f4 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd18e94[0x0] + ':' + _0xd18e94[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1d88f4 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd18e94[0x0] + ':' + _0xd18e94[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x49a39c = await _0x1d88f4['newPage']();
                            await _0x49a39c['authenticate']({
                                'username': '' + _0xd18e94[0x2],
                                'password': '' + _0xd18e94[0x3]
                            }), await _0x49a39c['setRequestInterception'](!![]), _0x49a39c['on']('request', _0x4591d6 => {
                                _0x4591d6['resourceType']() === 'image' || _0x4591d6['resourceType']() === 'font' || _0x4591d6['resourceType']() === 'media' ? _0x4591d6['abort']() : _0x4591d6['continue']();
                            }), await _0x49a39c['goto'](_0x49bb7d[_0x45f6ad]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x49a39c['waitForSelector']('#accept-all-gdpr'), await _0x49a39c['click']('#accept-all-gdpr'), await _0x49a39c['waitForSelector']('#raffles-product'), await _0x32b42a(0x3e8), await _0x49a39c['$eval']('#raffles-product', _0x19f6ef => _0x19f6ef['click']()), await _0x32b42a(0x1388), await _0x49a39c['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x2c847d = await _0x49a39c['$']('.fancybox-inner\x20>\x20iframe'), _0x1beb07 = await _0x2c847d['contentFrame']();
                            console['log'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Checking\x20Information'), await _0x1beb07['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x32b42a(0x1f4), await _0x1beb07['type']('input[name=\x22sm-form-email\x22]', _0x49bb7d[_0x45f6ad]['Email']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-name\x22]', _0x49bb7d[_0x45f6ad]['FirstName'] + '\x20' + _0x49bb7d[_0x45f6ad]['LastName']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-street\x22]', _0x49bb7d[_0x45f6ad]['Address1'] + '\x20' + _0x49bb7d[_0x45f6ad]['HouseNumber'] + '\x20' + _0x49bb7d[_0x45f6ad]['Address2']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-city\x22]', _0x49bb7d[_0x45f6ad]['City']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-province\x22]', _0x49bb7d[_0x45f6ad]['State']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-zip\x22]', _0x49bb7d[_0x45f6ad]['Zip']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-country\x22]', _0x49bb7d[_0x45f6ad]['Country']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-form-phone\x22]', _0x49bb7d[_0x45f6ad]['Phone']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x49bb7d[_0x45f6ad]['Follower']), await _0x32b42a(0xc8), await _0x1beb07['type']('input[name=\x22sm-cst.size\x22]', _0x49bb7d[_0x45f6ad]['Size']), await _0x32b42a(0x1f4), await _0x1beb07['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x32b42a(0x1f4), await _0x1beb07['click']('.icheckbox_simple-custom'), await _0x32b42a(0x1f4), console['log'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1beb07['$eval']('form', _0x4f8d84 => _0x4f8d84['submit']()), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x195f47 = '';
                            var _0x57f899 = await _0x2b27e4(_0x49bb7d[_0x45f6ad], _0x59aae0, 'dev', ![]), _0x44d63e = await _0x2b27e4(_0x49bb7d[_0x45f6ad], _0x59aae0, 'pub', ![]);
                            const _0xeeee1d = {
                                'succesDEVMSG': { 'embeds': [_0x57f899] },
                                'succesPUBMSG': { 'embeds': [_0x44d63e] }
                            };
                            try {
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xeeee1d['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xeeee1d['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x2383eb, _0xeeee1d['succesPUBMSG']);
                            } catch (_0x10d5c6) {
                                console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x10d5c6));
                            }
                        } catch (_0x3844d4) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20' + _0x3844d4)), _0x604bf7 = '' + _0x3844d4;
                            var _0x26288b = await _0x2b27e4(_0x49bb7d[_0x45f6ad], _0x59aae0, 'dev', !![], _0x604bf7), _0x57f899 = await _0x2b27e4(_0x49bb7d[_0x45f6ad], _0x59aae0, 'dev', ![]), _0x44d63e = await _0x2b27e4(_0x49bb7d[_0x45f6ad], _0x59aae0, 'pub', ![]);
                            const _0x2b6e84 = {
                                'succesDEVMSG': { 'embeds': [_0x57f899] },
                                'succesPUBMSG': { 'embeds': [_0x44d63e] }
                            };
                            _0x2b6e84['errorDEV'] = { 'embeds': [_0x26288b] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x2b6e84['errorDEV']), await _0x449918(_0xfac951, _0x2b6e84['errorDEV']), _0x3844d4 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x195f47 = 'yes');
                        } finally {
                            _0x1d88f4['close']();
                            if (_0x195f47 == 'yes' && _0x4c2b64 != 0x5 && _0x604bf7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Task\x20' + (_0x45f6ad + 0x1) + '\x20:\x20Retrying')), _0x45f6ad = _0x45f6ad - 0x1, _0x4c2b64 = _0x4c2b64 + 0x1;
                                continue;
                            }
                            _0x195f47 == 'yes' && _0x4c2b64 >= 0x5 && (_0x3e5731(_0x49bb7d[_0x45f6ad], _0x59aae0), _0x195f47 = 'no', _0x4c2b64 = 0x0), console['log'](_0x435734() + '\x20[' + _0x59aae0['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5d3a59, _0x1dbf0d) {
                    var _0x2a5bab = [];
                    async function _0x17b02f() {
                        var _0x87e71a = new _0x21dcc9({
                            'user': _0x14d76e['masterMail'],
                            'password': _0x14d76e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x30a949(_0x4bb648) {
                            _0x87e71a['openBox']('INBOX', ![], _0x4bb648);
                        }
                        _0x87e71a['once']('ready', function () {
                            _0x30a949(function (_0x199bdc, _0x229276) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x199bdc)
                                    throw _0x199bdc;
                                _0x87e71a['seq']['search'](['UNSEEN'], function (_0x258b50, _0x3bb639) {
                                    if (!_0x3bb639 || !_0x3bb639['length'])
                                        console['log'](_0x435734() + '\x20[' + _0x5d3a59['name'] + ']\x20No\x20mails\x20found'), _0x87e71a['end']();
                                    else {
                                        var _0x374217 = _0x87e71a['seq']['fetch'](_0x3bb639, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x374217['on']('message', function (_0x30a991, _0x1cb501) {
                                            var _0x197b08 = '(#' + _0x1cb501 + ')\x20';
                                            _0x30a991['on']('body', function (_0x2a5d11, _0x8fffea) {
                                                _0x295f85(_0x2a5d11, (_0xae454b, _0x356b9d) => {
                                                    if (_0x356b9d['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x4e235e = _0x356b9d['html']['split']('\x0a');
                                                        for (var _0x5d36e5 = 0x0; _0x5d36e5 < _0x4e235e['length']; _0x5d36e5++) {
                                                            if (_0x4e235e[_0x5d36e5]['includes']('salesmanago') && _0x4e235e[_0x5d36e5]['includes']('<td') && _0x4e235e[_0x5d36e5]['includes']('href')) {
                                                                var _0x518005 = _0x4e235e[_0x5d36e5]['split']('href=\x22'), _0x11f748 = _0x518005[0x1]['split']('\x22')[0x0];
                                                                _0x2a5bab['push'](_0x11f748);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x30a991['once']('end', function () {
                                            });
                                        }), _0x374217['once']('error', function (_0xe4e032) {
                                            console['log']('Fetch\x20error:\x20' + _0xe4e032);
                                        }), _0x374217['once']('end', function () {
                                            _0x87e71a['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x87e71a['once']('error', function (_0x35df22) {
                            console['log'](_0x5bf3af['red'](_0x35df22['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x87e71a['once']('end', async function () {
                        }), _0x87e71a['connect']();
                    }
                    async function _0x302429(_0x242ae1, _0xf1db3e, _0x2ea96f) {
                        for (var _0x1910b7 = 0x0; _0x1910b7 < _0xf1db3e['length']; _0x1910b7++) {
                            async function _0x3cfdbb(_0x145227, _0x478080, _0x3d1817, _0x57dffe, _0x1a1bc4) {
                                var _0x58cc22, _0x13da3a = {}, _0x405305 = [], _0xff5fc = {}, _0x23467d = [
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
                                ], _0x1bae9c = Math['round'](Math['random']() * (_0x23467d['length'] - 0x1));
                                _0x57dffe[_0x145227]['Size'] == 'RANDOM' && (_0x57dffe[_0x145227]['Size'] = _0x23467d[_0x1bae9c]);
                                !_0x57dffe && (_0x57dffe = {});
                                if (_0x14d76e['useRandomProxy'] = ![])
                                    var _0x1c4de9 = _0x1a1bc4[_0x145227]['split'](':');
                                else
                                    var _0x42bedb = Math['round'](Math['random']() * (_0x1a1bc4['length'] - 0x1)), _0x1c4de9 = _0x1a1bc4[_0x42bedb]['split'](':');
                                var _0x4ef602 = {
                                    'jar': _0x3970a3,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3d1817['url'],
                                    'headers': _0x3d1817['headers'],
                                    'body': JSON['stringify'](_0x13da3a),
                                    'proxy': 'http://' + _0x1c4de9[0x2] + ':' + _0x1c4de9[0x3] + '@' + _0x1c4de9[0x0] + ':' + _0x1c4de9[0x1]
                                };
                                return _0x478080 != 'ver' && (_0x4ef602['url'] = _0x3d1817['url'], _0x4ef602['headers'] = _0x3d1817['headers']), _0x478080 == 'ver' && (_0x4ef602['method'] = 'GET', _0x4ef602['url'] = _0x57dffe[_0x145227]), new Promise(function (_0xbbda7f, _0x437f68) {
                                    callback = async (_0x2a3b3d, _0xffc93f, _0x2a17ac) => {
                                        if (!_0x2a3b3d && _0xffc93f['statusCode'] == 0xca || !_0x2a3b3d && _0xffc93f['statusCode'] == 0xc8) {
                                            if (_0x478080 != 'ver') {
                                                var _0x3d14f6 = await _0x2b27e4(_0x57dffe[_0x145227], _0x3d1817, 'dev', ![]), _0x580576 = await _0x2b27e4(_0x57dffe[_0x145227], _0x3d1817, 'pub', ![]);
                                                const _0x42e76c = {
                                                    'succesDEVMSG': { 'embeds': [_0x3d14f6] },
                                                    'succesPUBMSG': { 'embeds': [_0x580576] }
                                                };
                                                if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                                    try {
                                                        await _0x449918(_0x14d76e['webhook'], _0x42e76c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x42e76c['succesDEVMSG']), await _0x32b42a(0xc8);
                                                try {
                                                    await _0x449918(_0x2383eb, _0x42e76c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3c6b3f(_0x57dffe[_0x145227], _0x3d1817);
                                            }
                                            _0xbbda7f(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x3d1817['name'] + ']\x20Task\x20' + (_0x145227 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x478080 != 'ver') {
                                                var _0x212fa3 = '' + _0x2a3b3d, _0x118918 = await _0x2b27e4(_0x57dffe[_0x145227], _0x3d1817, 'dev', !![], _0x212fa3), _0x365293 = {};
                                                _0x365293['errorDEV'] = { 'embeds': [_0x118918] }, _0x3e5731(_0x57dffe[_0x145227], _0x3d1817), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x365293['errorDEV']), await _0x449918(_0xfac951, _0x365293['errorDEV']);
                                            }
                                            _0x437f68(console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x3d1817['name'] + ']\x20Task\x20' + (_0x145227 + 0x1) + ':\x20' + _0x2a3b3d)));
                                        }
                                    };
                                    try {
                                        _0x478080 != 'ver' ? console['log'](_0x435734() + '\x20[' + _0x3d1817['name'] + ']\x20Task\x20' + (_0x145227 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x13da3a['data']['attributes']['email']) : console['log'](_0x435734() + '\x20[' + _0x3d1817['name'] + ']\x20Task\x20' + (_0x145227 + 0x1) + ':\x20Fetching\x20Response'), _0x100b74(_0x4ef602, callback);
                                    } catch (_0x48aab4) {
                                        console['log'](_0x435734() + '\x20Task\x20' + (_0x145227 + 0x1) + ':\x20' + _0x48aab4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3cfdbb(_0x1910b7, 'ver', _0x242ae1, _0xf1db3e, _0x2ea96f), console['log'](_0x435734() + '\x20[' + _0x242ae1['name'] + ']\x20Sleeping\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                            } catch (_0x48886c) {
                            }
                        }
                    }
                    try {
                        _0x17b02f(), await _0x32b42a(0xfa0), console['log']('Found\x20' + _0x2a5bab['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x302429(_0x5d3a59, _0x2a5bab, _0x1dbf0d);
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
            'function': async function (_0x493ddb, _0x45aa17, _0x17f642) {
                for (var _0xef91d9 = 0x0; _0xef91d9 < _0x45aa17['length']; _0xef91d9++) {
                    _0x14d76e['AfewDelay'] = _0x14d76e['delay'];
                    var _0x28d29b;
                    if (_0x16ab8e != 'yes')
                        var _0x16ab8e = '', _0x4245b9 = 0x0;
                    var _0x911f7f = _0x45aa17[_0xef91d9]['Url'];
                    _0x10e00c(_0x493ddb['name'] + '\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20/\x20' + _0x45aa17['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x45aa17, _0xef91d9);
                    var _0xf57b47 = await _0x2b27e4(_0x45aa17[_0xef91d9], _0x493ddb, 'dev', ![]), _0x285f58 = await _0x2b27e4(_0x45aa17[_0xef91d9], _0x493ddb, 'pub', ![]);
                    const _0xe03bdd = {
                        'succesDEVMSG': { 'embeds': [_0xf57b47] },
                        'succesPUBMSG': { 'embeds': [_0x285f58] }
                    };
                    if (_0x45aa17[_0xef91d9]['Email'] == '' || _0x45aa17[_0xef91d9]['FirstName'] == '' || _0x45aa17[_0xef91d9]['LastName'] == '' || _0x45aa17[_0xef91d9]['Country'] == '' || _0x45aa17[_0xef91d9]['Size'] == '' || _0x45aa17[_0xef91d9]['Address1'] == '' || _0x45aa17[_0xef91d9]['Zip'] == '') {
                        console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x14d76e['useRandomProxy'] = ![])
                        var _0x25ab87 = _0x17f642[_0xef91d9]['split'](':');
                    else
                        var _0x2e4203 = Math['round'](Math['random']() * (_0x17f642['length'] - 0x1)), _0x25ab87 = _0x17f642[_0x2e4203]['split'](':');
                    const _0xea2375 = await _0x4c17a2['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x25ab87[0x0] + ':' + _0x25ab87[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x555029 = await _0xea2375['newPage']();
                        await _0x555029['setDefaultNavigationTimeout'](0x1d4c0), await _0x555029['authenticate']({
                            'username': '' + _0x25ab87[0x2],
                            'password': '' + _0x25ab87[0x3]
                        }), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x555029['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x555029['setRequestInterception'](!![]), _0x555029['on']('request', _0x270a3b => {
                            _0x270a3b['resourceType']() === 'image' || _0x270a3b['resourceType']() === 'font' || _0x270a3b['resourceType']() === 'media' ? _0x270a3b['abort']() : _0x270a3b['continue']();
                        }), await _0x555029['goto'](_0x911f7f, { 'waitUntil': 'networkidle2' }), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x555029['waitForTimeout'](0xfa0), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x555029['waitForTimeout'](0x320);
                        if (_0x45aa17[_0xef91d9]['Size'] == 'RANDOM') {
                            console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x94199d = await _0x555029['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x26cc3b => {
                                return _0x26cc3b['map'](_0x3d18b9 => _0x3d18b9['href']);
                            });
                            var _0x510bde = Math['round'](Math['random']() * (_0x94199d['length'] - 0x1));
                            await _0x555029['goto']('' + _0x94199d[_0x510bde]);
                        } else {
                            console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x45aa17[_0xef91d9]['Size']);
                            try {
                                const _0xb048ee = await _0x555029['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x45aa17[_0xef91d9]['Size'] + '\x22]\x20>\x20a', _0x5ae6ec => {
                                    return _0x5ae6ec['map'](_0x370014 => _0x370014['href']);
                                });
                                await _0x555029['goto']('' + _0xb048ee[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x3f016d) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20' + _0x3f016d + '\x20Size\x20not\x20found')), _0x28d29b = 'Size\x20Not\x20Found';
                                var _0x3f66bd = await _0x2b27e4(_0x45aa17[_0xef91d9], _0x493ddb, 'dev', !![], _0x28d29b);
                                _0xe03bdd['errorDEV'] = { 'embeds': [_0x3f66bd] };
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xe03bdd['errorDEV']);
                                await _0x449918(_0xfac951, _0xe03bdd['errorDEV']);
                                continue;
                            }
                        }
                        await _0x555029['waitForTimeout'](0x258), await _0x555029['type']('#raffle-instagram', '' + _0x45aa17[_0xef91d9]['Follower'], { 'delay': 0x64 }), await _0x555029['waitForTimeout'](0x384), await _0x555029['click']('#raffle-terms'), await _0x555029['waitForTimeout'](0x384), await _0x555029['evaluate'](() => {
                            const _0x147e17 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x147e17['click']();
                        }), await _0x555029['waitForTimeout'](0xbb8), await _0x555029['waitForSelector']('#checkout_email'), await _0x32b42a(0x3e8), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x555029['type']('#checkout_email', '' + _0x45aa17[_0xef91d9]['Email'], 0x32), await _0x32b42a(0x320), await _0x555029['select']('#checkout_shipping_address_country', '' + _0x45aa17[_0xef91d9]['Country']), await _0x555029['waitForTimeout'](0x258), await _0x555029['type']('#checkout_shipping_address_first_name', '' + _0x45aa17[_0xef91d9]['FirstName']), await _0x555029['waitForTimeout'](0x320), await _0x555029['type']('#checkout_shipping_address_last_name', '' + _0x45aa17[_0xef91d9]['LastName']), await _0x555029['waitForTimeout'](0x2bc), await _0x555029['type']('#checkout_shipping_address_address1', _0x45aa17[_0xef91d9]['Address1'] + '\x20' + _0x45aa17[_0xef91d9]['HouseNumber']), await _0x555029['waitForTimeout'](0x2bc), await _0x555029['type']('#checkout_shipping_address_address2', '' + _0x45aa17[_0xef91d9]['Address2']), await _0x555029['waitForTimeout'](0x2bc);
                        _0x45aa17[_0xef91d9]['Postcode'] == undefined ? await _0x555029['type']('#checkout_shipping_address_zip', '' + _0x45aa17[_0xef91d9]['Zip']) : await _0x555029['type']('#checkout_shipping_address_zip', '' + _0x45aa17[_0xef91d9]['Postcode']);
                        await _0x555029['waitForTimeout'](0x2bc), await _0x555029['type']('#checkout_shipping_address_city', '' + _0x45aa17[_0xef91d9]['City']), await _0x555029['waitForTimeout'](0x2bc), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x555029, _0x555029['evaluate'](() => {
                            const _0x182b05 = document['querySelector']('#continue_button');
                            for (var _0x2b9205 = 0x0; _0x2b9205 < 0x5; _0x2b9205++) {
                                if (_0x182b05) {
                                    _0x182b05['click'](), _0x182b05['click']();
                                    break;
                                } else
                                    _0x32b42a(0xfa0);
                            }
                        }), await _0x555029['waitForTimeout'](0x1194);
                        try {
                            await _0x555029['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x555029['evaluate'](() => {
                            const _0x3d0348 = document['querySelector']('#continue_button');
                            for (var _0x414b56 = 0x0; _0x414b56 < 0x5; _0x414b56++) {
                                if (_0x3d0348) {
                                    _0x3d0348['click']();
                                    break;
                                } else
                                    _0x32b42a(0xfa0);
                            }
                        }), await _0x555029['waitForTimeout'](0x7d0), console['log'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x555029['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x555029['evaluate'](() => {
                            const _0x235071 = document['querySelector']('#continue_button');
                            for (var _0x4ababc = 0x0; _0x4ababc < 0x5; _0x4ababc++) {
                                if (_0x235071) {
                                    _0x235071['click']();
                                    break;
                                } else
                                    _0x32b42a(0xfa0);
                            }
                        }), await _0x555029['waitForTimeout'](0x1194), await _0x555029['waitForSelector']('#continue_button'), _0x555029['evaluate'](() => {
                            const _0x1cee93 = document['querySelector']('#continue_button');
                            for (var _0xcd8cbc = 0x0; _0xcd8cbc < 0x5; _0xcd8cbc++) {
                                if (_0x1cee93) {
                                    _0x1cee93['click']();
                                    break;
                                } else
                                    _0x32b42a(0xfa0);
                            }
                        });
                        try {
                            await _0x555029['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x16ab8e = 'no', _0x3c6b3f(_0x45aa17[_0xef91d9], _0x493ddb), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                try {
                                    await _0x449918(_0x14d76e['webhook'], _0xe03bdd['succesDEVMSG']);
                                } catch {
                                }
                            await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xe03bdd['succesDEVMSG']), await _0x32b42a(0xc8);
                            try {
                                await _0x449918(_0x2383eb, _0xe03bdd['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x4050db) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4050db));
                        }
                    } catch (_0x44724b) {
                        console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20' + _0x44724b)), _0x28d29b = '' + _0x44724b;
                        var _0x3f66bd = await _0x2b27e4(_0x45aa17[_0xef91d9], _0x493ddb, 'dev', !![], _0x28d29b);
                        _0xe03bdd['errorDEV'] = { 'embeds': [_0x3f66bd] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xe03bdd['errorDEV']), await _0x449918(_0xfac951, _0xe03bdd['errorDEV']), _0x16ab8e = 'yes';
                    } finally {
                        _0xea2375 && _0xea2375['close']();
                        if (_0x16ab8e == 'yes' && _0x4245b9 != 0x5 && _0x28d29b != 'Size\x20Not\x20Found') {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x493ddb['name'] + ']\x20Task\x20' + (_0xef91d9 + 0x1) + '\x20:\x20Retrying')), _0xef91d9 = _0xef91d9 - 0x1, _0x4245b9 = _0x4245b9 + 0x1;
                            continue;
                        }
                        _0x16ab8e == 'yes' && _0x4245b9 >= 0x5 && (_0x3e5731(_0x45aa17[_0xef91d9], _0x493ddb), _0x16ab8e = 'no', _0x4245b9 = 0x0);
                        if (_0xef91d9 + 0x1 == _0x45aa17['length']) {
                            await _0x32b42a(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x14d76e['AfewDelay'] + '\x20ms'), await _0x32b42a(_0x14d76e['AfewDelay']);
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
                'function': async function (_0x7c83da, _0xc08d58, _0x13bbb4) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x204105 = 0x0; _0x204105 < _0xc08d58['length']; _0x204105++) {
                        if (_0x1a3b02 != 'yes')
                            var _0x1a3b02 = '', _0x4b2c5c = 0x0;
                        var _0x38b29a;
                        await _0x1267d9(_0xc08d58, _0x204105), _0x10e00c(_0x7c83da['name'] + '\x20Task\x20' + (_0x204105 + 0x1) + '\x20/\x20' + _0xc08d58['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        var _0x16ec77 = await _0x2b27e4(_0xc08d58[_0x204105], _0x7c83da, 'acc', ![]);
                        const _0x40292d = { 'succesDEVMSG': { 'embeds': [_0x16ec77] } }, _0x427422 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0xbdeaf0 = Math['round'](Math['random']() * (_0x13bbb4['length'] - 0x1)), _0x42e59d = _0x13bbb4[_0xbdeaf0]['split'](':');
                        const _0xbb8d63 = await _0x4c17a2['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42e59d[0x0] + ':' + _0x42e59d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x249ce9 = await _0xbb8d63['newPage']();
                            await _0x249ce9['authenticate']({
                                'username': '' + _0x42e59d[0x2],
                                'password': '' + _0x42e59d[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x249ce9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x249ce9['setRequestInterception'](!![]), _0x249ce9['on']('request', _0x2d711f => {
                                _0x2d711f['resourceType']() === 'image' ? _0x2d711f['abort']() : _0x2d711f['continue']();
                            }), await _0x249ce9['goto']('' + _0x427422), await _0x249ce9['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x249ce9['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x32b42a(0x7d0), console['log'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x32b42a(0x190), await _0x249ce9['waitForSelector']('#firstname'), await _0x249ce9['type']('#firstname', _0xc08d58[_0x204105]['FirstName'], { 'delay': 0xf0 }), await _0x32b42a(0x190), await _0x249ce9['type']('#lastname', _0xc08d58[_0x204105]['LastName'], { 'delay': 0xe6 }), await _0x32b42a(0x190), await _0x249ce9['type']('#email_address', _0xc08d58[_0x204105]['Email'], { 'delay': 0x122 }), await _0x32b42a(0x190), await _0x249ce9['type']('#password', _0xc08d58[_0x204105]['Password'], { 'delay': 0x82 }), await _0x32b42a(0x1f4), await _0x249ce9['type']('#password-confirmation', _0xc08d58[_0x204105]['Password'], { 'delay': 0x7c }), console['log'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x32b42a(0x2bc), await _0x249ce9['$eval']('#form-validate', _0x183114 => _0x183114['submit']()), await _0x32b42a(0x1388);
                            const _0x3e1051 = await _0x249ce9['$']('#email_address-error');
                            if (_0x3e1051)
                                throw new Error('Invalid\x20Email');
                            const _0x2eeb3a = await _0x249ce9['$']('#password-error');
                            if (_0x2eeb3a)
                                throw new Error('Invalid\x20Password');
                            await _0x249ce9['waitForSelector']('div.mesg-success'), _0x1a3b02 = 'no', console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Account\x20' + _0xc08d58[_0x204105]['Email'] + '\x20Generated')), _0x5a9a17['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0xc08d58[_0x204105]['Email'] + ',' + _0xc08d58[_0x204105]['Password']);
                            try {
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x40292d['succesDEVMSG']);
                            } catch {
                            }
                            await _0x449918(_0x14fef8, _0x40292d['succesDEVMSG']), console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x4228c2) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20' + _0x4228c2)), _0x38b29a = '' + _0x4228c2;
                            var _0x1f035d = await _0x2b27e4(_0xc08d58[_0x204105], _0x7c83da, 'acc', !![], _0x38b29a);
                            _0x40292d['errorDEV'] = { 'embeds': [_0x1f035d] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x40292d['errorDEV']), await _0x449918(_0xfac951, _0x40292d['errorDEV']), _0x1a3b02 = 'yes';
                        } finally {
                            _0xbb8d63['close']();
                            if (_0x1a3b02 == 'yes' && _0x4b2c5c != 0x5) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Task\x20' + (_0x204105 + 0x1) + '\x20:\x20Retrying')), _0x204105 = _0x204105 - 0x1, _0x4b2c5c = _0x4b2c5c + 0x1;
                                continue;
                            }
                            _0x1a3b02 == 'yes' && _0x4b2c5c >= 0x5 && (_0x3e5731(_0xc08d58[_0x204105], _0x7c83da), _0x1a3b02 = 'no', _0x4b2c5c = 0x0), console['log'](_0x435734() + '\x20[' + _0x7c83da['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x298074, _0x213c3f) {
                    var _0x32e3e8 = [];
                    async function _0x2405a3() {
                        var _0x46a8e1 = new _0x21dcc9({
                            'user': _0x14d76e['masterMail'],
                            'password': _0x14d76e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x45cfcc(_0x452945) {
                            _0x46a8e1['openBox']('INBOX', ![], _0x452945);
                        }
                        _0x46a8e1['once']('ready', function () {
                            _0x45cfcc(function (_0xbfbeb6, _0x390792) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xbfbeb6)
                                    throw _0xbfbeb6;
                                _0x46a8e1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'no-reply@store.bstn.com'
                                    ]
                                ], function (_0x5a6a11, _0x62b703) {
                                    if (!_0x62b703 || !_0x62b703['length'])
                                        console['log'](_0x435734() + '\x20[' + _0x298074['name'] + ']\x20No\x20mails\x20found'), _0x46a8e1['end']();
                                    else {
                                        var _0x1864aa = _0x46a8e1['seq']['fetch'](_0x62b703, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1864aa['on']('message', function (_0x1d07cc, _0x3bad11) {
                                            var _0xa59d67 = '(#' + _0x3bad11 + ')\x20';
                                            _0x1d07cc['on']('body', function (_0x12b15a, _0x3362c6) {
                                                _0x295f85(_0x12b15a, (_0x5ae95b, _0xe11598) => {
                                                    if (_0xe11598['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x5b56f0 = _0xe11598['text']['split']('[')[0x2], _0x1d36b8 = _0x5b56f0['split'](']')[0x0], _0x49284e = _0xe11598['html']['split']('\x0a');
                                                        _0x32e3e8['push'](_0x1d36b8);
                                                    }
                                                });
                                            }), _0x1d07cc['once']('end', function () {
                                            });
                                        }), _0x1864aa['once']('error', function (_0x31fec5) {
                                            console['log']('Fetch\x20error:\x20' + _0x31fec5);
                                        }), _0x1864aa['once']('end', function () {
                                            _0x46a8e1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x46a8e1['once']('error', function (_0x49f32d) {
                            console['log'](_0x5bf3af['red'](_0x49f32d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x46a8e1['once']('end', async function () {
                        }), _0x46a8e1['connect']();
                    }
                    async function _0x581d27(_0x35f83e, _0x428736, _0x1f38c1) {
                        _0x4c17a2['use'](_0x1fef96());
                        for (var _0x26737b = 0x0; _0x26737b < _0x428736['length']; _0x26737b++) {
                            if (_0x2e64ff != 'yes')
                                var _0x2e64ff = '', _0x1b4431 = 0x0;
                            var _0x54842e = Math['round'](Math['random']() * (_0x1f38c1['length'] - 0x1)), _0x2d3be3 = _0x1f38c1[_0x54842e]['split'](':');
                            const _0x350789 = await _0x4c17a2['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d3be3[0x0] + ':' + _0x2d3be3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x23409b = await _0x350789['newPage']();
                                await _0x23409b['authenticate']({
                                    'username': '' + _0x2d3be3[0x2],
                                    'password': '' + _0x2d3be3[0x3]
                                }), console['log'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x23409b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x23409b['setRequestInterception'](!![]), _0x23409b['on']('request', _0x2cfb73 => {
                                    _0x2cfb73['resourceType']() === 'image' || _0x2cfb73['resourceType']() === 'font' || _0x2cfb73['resourceType']() === 'media' ? _0x2cfb73['abort']() : _0x2cfb73['continue']();
                                }), console['log'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23409b['goto'](_0x428736[_0x26737b]), console['log'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x23409b['waitForTimeout'](0xbb8);
                                try {
                                    await _0x23409b['waitForSelector']('.account-nav'), _0x2e64ff = 'no', console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x186895 = await _0x2b27e4(null, _0x35f83e, 'ver', ![]);
                                    const _0x130f75 = { 'succesDEVMSG': { 'embeds': [_0x186895] } };
                                    await _0x449918(_0x305128, _0x130f75['succesDEVMSG']);
                                } catch (_0x51f5a7) {
                                    throw new Error(_0x51f5a7);
                                }
                            } catch (_0x5711d2) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20' + _0x5711d2));
                                var _0x1347e3 = _0x5711d2, _0x2fcc4c = await _0x2b27e4(null, _0x35f83e, 'ver', !![], _0x1347e3);
                                const _0x89714a = { 'errorDEVMSG': { 'embeds': [_0x2fcc4c] } };
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x89714a['errorDEVMSG']), await _0x449918(_0xfac951, _0x89714a['errorDEVMSG']), _0x2e64ff = 'yes';
                            } finally {
                                _0x350789['close']();
                                if (_0x2e64ff == 'yes' && _0x1b4431 != 0x5) {
                                    console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Task\x20' + (_0x26737b + 0x1) + '\x20:\x20Retrying')), _0x26737b = _0x26737b - 0x1, _0x1b4431 = _0x1b4431 + 0x1;
                                    continue;
                                }
                                _0x2e64ff == 'yes' && _0x1b4431 >= 0x5 && (_0x2e64ff = 'no', _0x1b4431 = 0x0), console['log'](_0x435734() + '\x20[' + _0x35f83e['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                            }
                        }
                    }
                    try {
                        _0x2405a3(), await _0x32b42a(0xfa0), console['log']('Found\x20' + _0x32e3e8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32b42a(0x7d0);
                    }
                    await _0x581d27(_0x298074, _0x32e3e8, _0x213c3f);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4af4f1, _0x15896f, _0x3ece24) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x347cda = 0x0; _0x347cda < _0x15896f['length']; _0x347cda++) {
                        var _0xcc4f3f;
                        await _0x1267d9(_0x15896f, _0x347cda);
                        if (_0x19b9bd != 'yes')
                            var _0x19b9bd = '', _0x159d81 = 0x0;
                        _0x10e00c(_0x4af4f1['name'] + '\x20Task\x20' + (_0x347cda + 0x1) + '\x20/\x20' + _0x15896f['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        var _0x49551a = Math['round'](Math['random']() * (_0x3ece24['length'] - 0x1)), _0x164456 = _0x3ece24[_0x49551a]['split'](':'), _0x670b33;
                        try {
                            _0x670b33 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x164456[0x0] + ':' + _0x164456[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x670b33 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x164456[0x0] + ':' + _0x164456[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x8c6d7f = await _0x670b33['newPage'](), _0x508c5d = await _0x8c6d7f['target']()['createCDPSession'](), { windowId: _0x4385d2 } = await _0x508c5d['send']('Browser.getWindowForTarget');
                            await _0x8c6d7f['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x4abfe1 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x8c6d7f['authenticate']({
                                'username': '' + _0x164456[0x2],
                                'password': '' + _0x164456[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8c6d7f['goto']('' + _0x15896f[_0x347cda]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x8c6d7f['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x508c5d['send']('Browser.setWindowBounds', {
                                'windowId': _0x4385d2,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x32b42a(0x1388), await _0x8c6d7f['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x8c6d7f['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32b42a(0x1f4), console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Logging\x20in'), await _0x8c6d7f['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x534ca9 => _0x534ca9['click']()), await _0x8c6d7f['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x8c6d7f['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x32b42a(0x7d0), await _0x8c6d7f['waitForSelector']('#email-login'), await _0x8c6d7f['type']('#email-login', '' + _0x15896f[_0x347cda]['Email']), await _0x32b42a(0xdac), await _0x8c6d7f['waitForSelector']('#password'), await _0x8c6d7f['type']('#password', '' + _0x15896f[_0x347cda]['Password'], { 'delay': 0xe6 }), await _0x32b42a(0x157c);
                            try {
                                await _0x8c6d7f['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x31b1bb => _0x31b1bb['click']());
                            } catch {
                            }
                            try {
                                await _0x8c6d7f['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x3ba7bd) {
                            }
                            await _0x32b42a(0x3e8);
                            const _0x561ac0 = await _0x8c6d7f['$']('.enteredDraw_container__2KmQ_');
                            if (_0x561ac0)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x15896f[_0x347cda]['Size']);
                            if (_0x15896f[_0x347cda]['Size'] != 'RANDOM') {
                                var _0x7dae84 = _0x15896f[_0x347cda]['Size']['replace']('.', ',');
                                const _0x142607 = await _0x8c6d7f['$x']('//div[contains(text(),\x20' + _0x7dae84 + ')]');
                                await _0x142607[0x0]['click']();
                            } else {
                                const _0x43da29 = await _0x8c6d7f['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x52328a = Math['round'](Math['random']() * (_0x43da29['length'] - 0x1));
                                await _0x43da29[_0x52328a]['click']();
                            }
                            await _0x32b42a(0x1f4);
                            const _0x5ea211 = await _0x8c6d7f['$']('.addressList_addressItem__LE2PB');
                            if (_0x5ea211 && _0x15896f[_0x347cda]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Filling\x20Address'), await _0x8c6d7f['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x32b42a(0x5dc), await _0x8c6d7f['waitForSelector']('#firstname'), await _0x8c6d7f['type']('#firstname', '' + _0x15896f[_0x347cda]['FirstName']), await _0x32b42a(0x1f4), await _0x8c6d7f['waitForSelector']('#firstname'), await _0x8c6d7f['type']('#lastname', '' + _0x15896f[_0x347cda]['LastName']), await _0x32b42a(0x1f4), await _0x8c6d7f['waitForSelector']('#firstname'), await _0x8c6d7f['type']('#street', '' + _0x15896f[_0x347cda]['Address1']), await _0x32b42a(0x1f4), await _0x8c6d7f['waitForSelector']('#firstname'), await _0x8c6d7f['type']('#houseNumber', _0x15896f[_0x347cda]['HouseNumber'] + '\x20' + _0x15896f[_0x347cda]['Address2']), await _0x32b42a(0x1f4), await _0x8c6d7f['waitForSelector']('#firstname'), await _0x8c6d7f['select']('#country_code', '' + _0x15896f[_0x347cda]['Country']), await _0x32b42a(0x1f4), await _0x8c6d7f['type']('#postcode', '' + _0x15896f[_0x347cda]['Zip']), await _0x32b42a(0x1f4), await _0x8c6d7f['type']('#city', '' + _0x15896f[_0x347cda]['City']), await _0x32b42a(0x1f4), await _0x8c6d7f['type']('#telephone', '' + _0x15896f[_0x347cda]['Phone']), await _0x32b42a(0x1f4), await _0x8c6d7f['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x32b42a(0x9c4);
                            try {
                                await _0x8c6d7f['type']('#instagram_name', '' + _0x15896f[_0x347cda]['Follower']), await _0x8c6d7f['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x32b42a(0x5dc);
                            try {
                                await _0x8c6d7f['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x32b42a(0x5dc), await _0x8c6d7f['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x25b295 => _0x25b295['click']()), await _0x32b42a(0x1388);
                            try {
                                await _0x8c6d7f['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x8c6d7f['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x15896f[_0x347cda]['Size'] != 'RANDOM') {
                                    var _0x7dae84 = _0x15896f[_0x347cda]['Size']['replace']('.', ',');
                                    const _0x2e6ff6 = await _0x8c6d7f['$x']('//div[contains(text(),\x20' + _0x7dae84 + ')]');
                                    await _0x2e6ff6[0x0]['click']();
                                } else {
                                    const _0x787529 = await _0x8c6d7f['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x52328a = Math['round'](Math['random']() * (_0x787529['length'] - 0x1));
                                    await _0x787529[_0x52328a]['click']();
                                }
                                await _0x32b42a(0x5dc);
                                try {
                                    await _0x8c6d7f['hover']('#instagram_name'), await _0x8c6d7f['type']('#instagram_name', '' + _0x15896f[_0x347cda]['Follower']), await _0x8c6d7f['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Retrying'), await _0x8c6d7f['hover']('.checkBox_boxHolder__wLGVe'), await _0x32b42a(0x5dc), await _0x8c6d7f['click']('.checkBox_boxHolder__wLGVe'), await _0x32b42a(0x157c), await _0x8c6d7f['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3e8873 => _0x3e8873['click']()), await _0x32b42a(0x1388), await _0x8c6d7f['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x19b9bd = 'no', _0x3c6b3f(_0x15896f[_0x347cda], _0x4af4f1), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1fa81d = await _0x2b27e4(_0x15896f[_0x347cda], _0x4af4f1, 'dev', ![]), _0x4c97be = await _0x2b27e4(_0x15896f[_0x347cda], _0x4af4f1, 'pub', ![]);
                            const _0x277b8b = {
                                'succesDEVMSG': { 'embeds': [_0x1fa81d] },
                                'succesPUBMSG': { 'embeds': [_0x4c97be] }
                            };
                            try {
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x277b8b['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x277b8b['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x2383eb, _0x277b8b['succesPUBMSG']);
                            } catch (_0x349ac5) {
                                console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x349ac5));
                            }
                        } catch (_0x5b76e1) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20' + _0x5b76e1)), _0x19b9bd = 'yes', _0xcc4f3f = '' + _0x5b76e1;
                            var _0x15d843 = await _0x2b27e4(_0x15896f[_0x347cda], _0x4af4f1, 'dev', !![], _0xcc4f3f), _0x1fa81d = await _0x2b27e4(_0x15896f[_0x347cda], _0x4af4f1, 'dev', ![]), _0x4c97be = await _0x2b27e4(_0x15896f[_0x347cda], _0x4af4f1, 'pub', ![]);
                            const _0x33221d = {
                                'succesDEVMSG': { 'embeds': [_0x1fa81d] },
                                'succesPUBMSG': { 'embeds': [_0x4c97be] }
                            };
                            _0x33221d['errorDEV'] = { 'embeds': [_0x15d843] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x33221d['errorDEV']), await _0x449918(_0xfac951, _0x33221d['errorDEV']);
                        } finally {
                            _0x670b33['close']();
                            if (_0x19b9bd == 'yes' && _0x159d81 != 0x5) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Task\x20' + (_0x347cda + 0x1) + '\x20:\x20Retrying')), _0x347cda = _0x347cda - 0x1, _0x159d81 = _0x159d81 + 0x1;
                                continue;
                            }
                            _0x19b9bd == 'yes' && _0x159d81 >= 0x5 && (_0x3e5731(_0x15896f[_0x347cda], _0x4af4f1), _0x19b9bd = 'no', _0x159d81 = 0x0), console['log'](_0x435734() + '\x20[' + _0x4af4f1['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
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
                'function': async function (_0x3263d0, _0x6fa17f, _0x2df8ba) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x254945 = 0x0; _0x254945 < _0x6fa17f['length']; _0x254945++) {
                        if (_0x2db627 != 'yes')
                            var _0x2db627 = '', _0x540106 = 0x0;
                        var _0x5d9776;
                        await _0x1267d9(_0x6fa17f, _0x254945), _0x10e00c(_0x3263d0['name'] + '\x20Task\x20' + (_0x254945 + 0x1) + '\x20/\x20' + _0x6fa17f['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        var _0xfa2773 = await _0x2b27e4(_0x6fa17f[_0x254945], _0x3263d0, 'acc', ![]);
                        const _0x28fd82 = { 'succesDEVMSG': { 'embeds': [_0xfa2773] } }, _0xd1c990 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x14ebc0 = Math['round'](Math['random']() * (_0x2df8ba['length'] - 0x1)), _0x35861a = _0x2df8ba[_0x14ebc0]['split'](':'), _0x2d3836;
                        try {
                            _0x2d3836 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x35861a[0x0] + ':' + _0x35861a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2d3836 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x35861a[0x0] + ':' + _0x35861a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3ce516 = await _0x2d3836['newPage']();
                            await _0x3ce516['setViewport']({
                                'width': 0x500 + _0x3930ce(0x1, 0x32),
                                'height': 0x2d9 + _0x3930ce(0x1, 0x32)
                            });
                            const _0x9daa56 = await _0x3ce516['target']()['createCDPSession'](), { windowId: _0x4dd1c4 } = await _0x9daa56['send']('Browser.getWindowForTarget');
                            await _0x3ce516['authenticate']({
                                'username': '' + _0x35861a[0x2],
                                'password': '' + _0x35861a[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ce516['goto']('' + _0xd1c990, { 'waitUntil': 'networkidle2' }), await _0x32b42a(0x1388), console['log'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0xef644d = await _0x3ce516['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0xef644d && await _0xef644d['click']();
                            } catch {
                            }
                            await _0x9daa56['send']('Browser.setWindowBounds', {
                                'windowId': _0x4dd1c4,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x3ce516['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x32b42a(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3ce516['type']('input[name=\x22firstname\x22]', '' + _0x6fa17f[_0x254945]['FirstName']), await _0x32b42a(0x1f4), await _0x3ce516['type']('input[name=\x22lastname\x22]', '' + _0x6fa17f[_0x254945]['LastName']), await _0x32b42a(0x1f4), await _0x3ce516['type']('input[name=\x22email\x22]', '' + _0x6fa17f[_0x254945]['Email']), await _0x32b42a(0x1f4), await _0x3ce516['type']('input[name=\x22password\x22]', '' + _0x6fa17f[_0x254945]['Password']), await _0x32b42a(0x258), await _0x3ce516['$eval']('input[name=\x22psgdpr\x22]', _0x211690 => _0x211690['click']()), await _0x32b42a(0x1f4), console['log'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3ce516['$eval']('#customer-form', _0x586682 => _0x586682['submit']());
                            try {
                                await _0x3ce516['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x2db627 = 'no', console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Account\x20' + _0x6fa17f[_0x254945]['Email'] + '\x20Generated')), _0x5a9a17['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x6fa17f[_0x254945]['Email'] + ',' + _0x6fa17f[_0x254945]['Password']);
                                try {
                                    _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x28fd82['succesDEVMSG']);
                                } catch {
                                }
                                await _0x449918(_0x14fef8, _0x28fd82['succesDEVMSG']);
                            } catch (_0x3b4828) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x3b4828);
                            }
                        } catch (_0x21fd48) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20' + _0x21fd48)), _0x5d9776 = '' + _0x21fd48;
                            var _0x24838f = await _0x2b27e4(_0x6fa17f[_0x254945], _0x3263d0, 'acc', !![], _0x5d9776);
                            _0x28fd82['errorDEV'] = { 'embeds': [_0x24838f] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x28fd82['errorDEV']), await _0x449918(_0xfac951, _0x28fd82['errorDEV']), _0x2db627 = 'yes';
                        } finally {
                            _0x2d3836['close']();
                            if (_0x2db627 == 'yes' && _0x540106 != 0x5 && _0x5d9776 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Task\x20' + (_0x254945 + 0x1) + '\x20:\x20Retrying')), _0x254945 = _0x254945 - 0x1, _0x540106 = _0x540106 + 0x1;
                                continue;
                            }
                            _0x2db627 == 'yes' && _0x540106 >= 0x5 && (_0x3e5731(_0x6fa17f[_0x254945], _0x3263d0), _0x2db627 = 'no', _0x540106 = 0x0), console['log'](_0x435734() + '\x20[' + _0x3263d0['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x54b190(_0x5940ad, _0x12439c, _0x5afa12) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x18880d = 0x0; _0x18880d < _0x12439c['length']; _0x18880d++) {
                        if (_0x15e24b != 'yes')
                            var _0x15e24b = '', _0x6484b6 = 0x0;
                        var _0x18422a;
                        await _0x1267d9(_0x12439c, _0x18880d), _0x10e00c(_0x5940ad['name'] + '\x20Task\x20' + (_0x18880d + 0x1) + '\x20/\x20' + _0x12439c['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        const _0x5f3b98 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x95cafd = Math['round'](Math['random']() * (_0x5afa12['length'] - 0x1)), _0x45947e = _0x5afa12[_0x95cafd]['split'](':'), _0x5ee7e9;
                        try {
                            _0x5ee7e9 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x45947e[0x0] + ':' + _0x45947e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5ee7e9 = await _0x4c17a2['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x45947e[0x0] + ':' + _0x45947e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x17a616 = await _0x5ee7e9['newPage'](), _0x4008e0 = await _0x17a616['target']()['createCDPSession'](), { windowId: _0x1ac119 } = await _0x4008e0['send']('Browser.getWindowForTarget');
                            await _0x17a616['authenticate']({
                                'username': '' + _0x45947e[0x2],
                                'password': '' + _0x45947e[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x17a616['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x32b42a(0xbb8), await _0x4008e0['send']('Browser.setWindowBounds', {
                                'windowId': _0x1ac119,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x32b42a(0x1f40);
                            try {
                                await _0x17a616['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x32b42a(0x1388), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Logging\x20in'), await _0x17a616['type']('input[name=\x22email\x22]', '' + _0x12439c[_0x18880d]['Email']), await _0x32b42a(0x1f4), await _0x17a616['type']('input[name=\x22password\x22]', '' + _0x12439c[_0x18880d]['Password']), await _0x32b42a(0x258), await _0x17a616['$eval']('#login-form', _0x1f8ebc => _0x1f8ebc['submit']()), await _0x17a616['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x32b42a(0x1f4), await _0x17a616['goto']('' + _0x12439c[_0x18880d]['Url']), await _0x17a616['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x12439c[_0x18880d]['Size']);
                            if (_0x12439c[_0x18880d]['Size'] != 'RANDOM') {
                                var _0x30c718 = '\x20' + _0x12439c[_0x18880d]['Size'] + '\x20';
                                const _0x5629a5 = await _0x17a616['$x']('//span[contains(text(),\x20' + _0x30c718 + ')]');
                                await _0x5629a5[0x0]['click']();
                            } else {
                                const _0x504a4e = await _0x17a616['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3f894c = Math['round'](Math['random']() * (_0x504a4e['length'] - 0x1));
                                await _0x504a4e[_0x3f894c]['click']();
                            }
                            await _0x32b42a(0x258), await _0x17a616['click']('#cookieChoiceDismiss'), await _0x32b42a(0x3e8), await _0x17a616['type']('#instagram-account', '' + _0x12439c[_0x18880d]['Follower']), await _0x32b42a(0x28a), await _0x17a616['click']('#book-btn'), await _0x32b42a(0xbb8), await _0x17a616['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x32b42a(0x1f4), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20' + _0x5bf3af['cyan']('Solving\x20Captcha')), await _0x17a616['solveRecaptchas'](), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x32b42a(0x7d0), await _0x17a616['$eval']('#book-btn-for-sure', _0x53f222 => _0x53f222['click']()), await _0x32b42a(0x12c), await _0x17a616['click']('#book-btn-for-sure'), await _0x32b42a(0xdac);
                            const _0x263490 = await _0x17a616['$eval']('.reservation-popup\x20>\x20.title', _0x1f430b => {
                                return _0x1f430b['innerHTML'];
                            });
                            if (_0x263490) {
                                _0x15e24b = 'no', _0x3c6b3f(_0x12439c[_0x18880d], _0x5940ad), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x57b874 = await _0x2b27e4(_0x12439c[_0x18880d], _0x5940ad, 'dev', ![]), _0x47e7ee = await _0x2b27e4(_0x12439c[_0x18880d], _0x5940ad, 'pub', ![]);
                                const _0x1e010a = {
                                    'succesDEVMSG': { 'embeds': [_0x57b874] },
                                    'succesPUBMSG': { 'embeds': [_0x47e7ee] }
                                };
                                try {
                                    _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x1e010a['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x1e010a['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x2383eb, _0x1e010a['succesPUBMSG']);
                                } catch (_0x56eeda) {
                                    console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x56eeda));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x253b05) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20' + _0x253b05)), _0x18422a = '' + _0x253b05;
                            var _0xf17704 = await _0x2b27e4(_0x12439c[_0x18880d], _0x5940ad, 'dev', !![], _0x18422a), _0x57b874 = await _0x2b27e4(_0x12439c[_0x18880d], _0x5940ad, 'dev', ![]), _0x47e7ee = await _0x2b27e4(_0x12439c[_0x18880d], _0x5940ad, 'pub', ![]);
                            const _0x59b9f0 = {
                                'succesDEVMSG': { 'embeds': [_0x57b874] },
                                'succesPUBMSG': { 'embeds': [_0x47e7ee] }
                            };
                            _0x59b9f0['errorDEV'] = { 'embeds': [_0xf17704] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x59b9f0['errorDEV']), await _0x449918(_0xfac951, _0x59b9f0['errorDEV']), _0x253b05 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x15e24b = 'yes');
                        } finally {
                            _0x5ee7e9['close']();
                            if (_0x15e24b == 'yes' && _0x6484b6 != 0x5 && _0x18422a != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Task\x20' + (_0x18880d + 0x1) + '\x20:\x20Retrying')), _0x18880d = _0x18880d - 0x1, _0x6484b6 = _0x6484b6 + 0x1;
                                continue;
                            }
                            _0x15e24b == 'yes' && _0x6484b6 >= 0x5 && (_0x3e5731(_0x12439c[_0x18880d], _0x5940ad), _0x15e24b = 'no', _0x6484b6 = 0x0), console['log'](_0x435734() + '\x20[' + _0x5940ad['name'] + ']\x20Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
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
            'function': async function (_0x31e51a, _0x15bcad, _0x1ae80e) {
                _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x14d76e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x12e6cf = 0x0; _0x12e6cf < _0x15bcad['length']; _0x12e6cf++) {
                    var _0x343d3a;
                    if (_0x1b37f2 != 'yes')
                        var _0x1b37f2 = '', _0x3e155d = 0x0;
                    var _0x2563d9 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5b47fe
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x15bcad[_0x12e6cf]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x15bcad[_0x12e6cf]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x14d76e['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x368722
                            }
                        ]
                    }], _0x4c97e4 = await _0x2b27e4(_0x15bcad[_0x12e6cf], _0x31e51a, 'dev', ![]), _0x2b0190 = await _0x2b27e4(_0x15bcad[_0x12e6cf], _0x31e51a, 'pub', ![]);
                    const _0x4d9370 = {
                        'succesDEVMSG': { 'embeds': [_0x4c97e4] },
                        'succesPUBMSG': { 'embeds': [_0x2b0190] }
                    }, _0x51f920 = { 'embeds': _0x2563d9 };
                    await _0x1267d9(_0x15bcad, _0x12e6cf);
                    if (_0x15bcad[_0x12e6cf]['Email'] == '' || _0x15bcad[_0x12e6cf]['FirstName'] == '' || _0x15bcad[_0x12e6cf]['LastName'] == '' || _0x15bcad[_0x12e6cf]['Country'] == '' || _0x15bcad[_0x12e6cf]['Size'] == '' || _0x15bcad[_0x12e6cf]['Address1'] == '' || _0x15bcad[_0x12e6cf]['Zip'] == '') {
                        console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x15bcad[_0x12e6cf]['Email'] == '' || _0x15bcad[_0x12e6cf]['FirstName'] == '' || _0x15bcad[_0x12e6cf]['LastName'] == '' || _0x15bcad[_0x12e6cf]['Country'] == '' || _0x15bcad[_0x12e6cf]['Size'] == '' || _0x15bcad[_0x12e6cf]['Address1'] == '' || _0x15bcad[_0x12e6cf]['Zip'] == '' || _0x15bcad[_0x12e6cf]['Phone'] == '') {
                        console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x156ce8 = '' + _0x15bcad[_0x12e6cf]['Url'];
                    if (_0x14d76e['useRandomProxy'] = ![])
                        var _0xb71605 = _0x1ae80e[_0x12e6cf]['split'](':');
                    else
                        var _0x5e10bc = Math['round'](Math['random']() * (_0x1ae80e['length'] - 0x1)), _0xb71605 = _0x1ae80e[_0x5e10bc]['split'](':');
                    const _0x10be32 = await _0x4c17a2['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0xb71605[0x0] + ':' + _0xb71605[0x1]]
                    });
                    try {
                        const _0x33ac8a = await _0x10be32['newPage']();
                        await _0x33ac8a['authenticate']({
                            'username': '' + _0xb71605[0x2],
                            'password': '' + _0xb71605[0x3]
                        }), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33ac8a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x33ac8a['setRequestInterception'](!![]), _0x33ac8a['on']('request', _0xb58e1c => {
                            _0xb58e1c['resourceType']() === 'image' || _0xb58e1c['resourceType']() === 'font' || _0xb58e1c['resourceType']() === 'media' ? _0xb58e1c['abort']() : _0xb58e1c['continue']();
                        }), await _0x33ac8a['goto'](_0x156ce8), await _0x32b42a(0xbb8), await _0x33ac8a['waitForSelector']('.control__JhutY'), await _0x33ac8a['click']('.control__JhutY'), await _0x32b42a(0x1f4);
                        if (_0x15bcad[_0x12e6cf]['Size'] != 'RANDOM')
                            try {
                                const _0x4c5eb5 = await _0x33ac8a['$x']('//div[contains(text(),\x20\x27' + _0x15bcad[_0x12e6cf]['Size'] + '\x27)]');
                                await _0x4c5eb5[0x0]['click']();
                            } catch {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1b8a30 = await _0x33ac8a['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x47d6f5 = Math['round'](Math['random']() * (_0x1b8a30['length'] - 0x1));
                            await _0x1b8a30[_0x47d6f5]['click']();
                        }
                        await _0x32b42a(0x4b0);
                        const _0x48dab2 = await _0x33ac8a['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x48dab2[0x0]['click'](), await _0x33ac8a['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x33ac8a['type']('input[name=\x22email\x22]', '' + _0x15bcad[_0x12e6cf]['Email']), await _0x32b42a(0x640), await _0x33ac8a['type']('input[name=\x22phone\x22]', '' + _0x15bcad[_0x12e6cf]['Phone']), await _0x32b42a(0x4b0), await _0x33ac8a['click']('button.btn.continue-button__1RtsS'), await _0x32b42a(0x4b0);
                        try {
                            await _0x33ac8a['type']('input[name=\x22firstName\x22]', '' + _0x15bcad[_0x12e6cf]['FirstName']), await _0x32b42a(0x258);
                        } catch {
                            const _0x34f8f3 = await _0x33ac8a['$$eval']('.invalid-feedback\x20>\x20div', _0x222906 => {
                                return _0x222906['map'](_0x268dc6 => _0x268dc6['innerText']);
                            });
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20' + _0x34f8f3));
                            continue;
                        }
                        await _0x33ac8a['type']('input[name=\x22lastName\x22]', '' + _0x15bcad[_0x12e6cf]['LastName']), await _0x32b42a(0xc8), await _0x33ac8a['type']('input[name=\x22instagramUsername\x22]', '' + _0x15bcad[_0x12e6cf]['Follower']), await _0x32b42a(0x4b0), await _0x33ac8a['click']('button.btn.continue-button__1RtsS'), await _0x32b42a(0x3e8), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x33ac8a['select']('select[name=\x22country\x22]', '' + _0x15bcad[_0x12e6cf]['Country']), await _0x32b42a(0x2bc), await _0x33ac8a['type']('input[name=\x22streetName\x22]', '' + _0x15bcad[_0x12e6cf]['Address1']), await _0x32b42a(0x258), await _0x33ac8a['type']('input[name=\x22houseNumber\x22]', _0x15bcad[_0x12e6cf]['HouseNumber'] + '\x20' + _0x15bcad[_0x12e6cf]['Address2']), await _0x32b42a(0xc8), await _0x33ac8a['type']('input[name=\x22postalCode\x22]', '' + _0x15bcad[_0x12e6cf]['Zip']), await _0x32b42a(0x1f4), await _0x33ac8a['type']('input[name=\x22city\x22]', '' + _0x15bcad[_0x12e6cf]['City']), await _0x32b42a(0x4b0), await _0x33ac8a['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x32b42a(0x4b0), await _0x33ac8a['click']('button.btn.continue-button__1RtsS'), await _0x32b42a(0x4b0), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x33ac8a['solveRecaptchas'](), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x32b42a(0xbb8), await _0x33ac8a['click']('button.btn.continue-button__1RtsS'), await _0x32b42a(0x1388), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x33ac8a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x33ac8a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32b42a(0x4b0), await _0x33ac8a['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x15bcad[_0x12e6cf]['CardNumber']), await _0x32b42a(0x320), await _0x33ac8a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x33ac8a['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x15bcad[_0x12e6cf]['ExpiryDate']), await _0x32b42a(0x4b0), await _0x33ac8a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x33ac8a['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x15bcad[_0x12e6cf]['CVV']), await _0x32b42a(0x226), await _0x33ac8a['type']('input[name=\x22holderName\x22]', '' + _0x15bcad[_0x12e6cf]['NameOnCard']), await _0x32b42a(0x226), await _0x33ac8a['click']('button.adyen-checkout__button'), console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x33ac8a['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x32b42a(0xbb8);
                        } catch (_0xe0edd3) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x203DS\x20Failed')), _0x343d3a = '3DS\x20Error\x20' + _0xe0edd3;
                            var _0x39a08a = await _0x2b27e4(_0x15bcad[_0x12e6cf], _0x31e51a, 'dev', !![], _0x343d3a);
                            _0x4d9370['errorDEV'] = { 'embeds': [_0x39a08a] };
                            _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x4d9370['errorDEV']);
                            await _0x449918(_0xfac951, _0x4d9370['errorDEV']);
                            continue;
                        }
                        _0x3c6b3f(_0x15bcad[_0x12e6cf], _0x31e51a), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                            try {
                                await _0x449918(_0x14d76e['webhook'], _0x4d9370['succesDEVMSG']);
                            } catch {
                            }
                        await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x4d9370['succesDEVMSG']), await _0x32b42a(0xc8);
                        try {
                            await _0x449918(_0x2383eb, _0x4d9370['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xe31ad4) {
                        console['log'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20' + _0xe31ad4), _0x343d3a = '' + _0xe31ad4;
                        var _0x39a08a = await _0x2b27e4(_0x15bcad[_0x12e6cf], _0x31e51a, 'dev', !![], _0x343d3a);
                        _0x4d9370['errorDEV'] = { 'embeds': [_0x39a08a] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x4d9370['errorDEV']), await _0x449918(_0xfac951, _0x4d9370['errorDEV']), _0x1b37f2 = 'yes';
                    } finally {
                        _0x10be32['close']();
                        if (_0x1b37f2 == 'yes' && _0x3e155d != 0x5) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x31e51a['name'] + ']\x20Task\x20' + (_0x12e6cf + 0x1) + '\x20:\x20Retrying')), _0x12e6cf = _0x12e6cf - 0x1, _0x3e155d = _0x3e155d + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x14d76e['footshopDelay'] + '\x20ms'), await _0x32b42a(_0x14d76e['footshopDelay']);
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
            'function': async function (_0x2e5244, _0x5836c0, _0x864973) {
                var _0x590176 = ![], _0x1cafa1 = ![];
                if (_0x14d76e['captchaKey'] == '' || _0x14d76e['captchaKey'] == undefined)
                    return console['log'](_0x5bf3af['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x14d76e['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5b9dbd = 0x0; _0x5b9dbd < _0x5836c0['length']; _0x5b9dbd++) {
                    if (_0x27d30b != 'yes')
                        var _0x27d30b = '', _0x1982ad = 0x0;
                    var _0x509d9a, _0x11c1a4 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5836c0[_0x5b9dbd]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5836c0[_0x5b9dbd]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5b47fe
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x14d76e['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x368722
                            }
                        ]
                    }];
                    const _0x3c12e7 = { 'embeds': _0x11c1a4 };
                    _0x10e00c(_0x2e5244['name'] + '\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20/\x20' + _0x5836c0['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x5836c0, _0x5b9dbd);
                    var _0x31bd9e = await _0x2b27e4(_0x5836c0[_0x5b9dbd], _0x2e5244, 'dev', ![]), _0x359464 = await _0x2b27e4(_0x5836c0[_0x5b9dbd], _0x2e5244, 'pub', ![]);
                    const _0xf864e3 = {
                        'succesDEVMSG': { 'embeds': [_0x31bd9e] },
                        'succesPUBMSG': { 'embeds': [_0x359464] }
                    };
                    if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                        try {
                            await _0x449918(_0x14d76e['webhook'], _0xf864e3['succesDEVMSG']);
                        } catch {
                        }
                    await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xf864e3['succesDEVMSG']), await _0x32b42a(0xc8);
                    try {
                        await _0x449918(_0x2383eb, _0xf864e3['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5836c0[_0x5b9dbd]['Email'] == '' || _0x5836c0[_0x5b9dbd]['Url'] == '' || _0x5836c0[_0x5b9dbd]['FirstName'] == '' || _0x5836c0[_0x5b9dbd]['LastName'] == '') {
                        console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x14d76e['useRandomProxy'] = ![])
                        var _0x6a877b = _0x864973[_0x5b9dbd]['split'](':');
                    else
                        var _0x4d03b0 = Math['round'](Math['random']() * (_0x864973['length'] - 0x1)), _0x6a877b = _0x864973[_0x4d03b0]['split'](':');
                    const _0x411fda = await _0x4c17a2['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x6a877b[0x0] + ':' + _0x6a877b[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x44a9f3 = await _0x411fda['newPage']();
                        await _0x44a9f3['authenticate']({
                            'username': '' + _0x6a877b[0x2],
                            'password': '' + _0x6a877b[0x3]
                        }), console['log'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44a9f3['setRequestInterception'](!![]), _0x44a9f3['on']('request', _0x39fa55 => {
                            _0x39fa55['resourceType']() === 'image' || _0x39fa55['resourceType']() === 'font' || _0x39fa55['resourceType']() === 'media' ? _0x39fa55['abort']() : _0x39fa55['continue']();
                        }), await _0x44a9f3['goto']('' + _0x5836c0[_0x5b9dbd]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x44a9f3['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x44a9f3['type']('#comp_firstname', '' + _0x5836c0[_0x5b9dbd]['FirstName']), await _0x44a9f3['waitForSelector']('#comp_lastname'), await _0x44a9f3['type']('#comp_lastname', '' + _0x5836c0[_0x5b9dbd]['LastName']), await _0x44a9f3['waitForSelector']('#comp_email'), await _0x44a9f3['type']('#comp_email', '' + _0x5836c0[_0x5b9dbd]['Email']), await _0x44a9f3['waitForSelector']('#comp_paypalemail'), await _0x44a9f3['type']('#comp_paypalemail', '' + _0x5836c0[_0x5b9dbd]['Email']), await _0x44a9f3['waitForSelector']('#comp_mobile_end'), await _0x44a9f3['type']('#comp_mobile_end', '' + _0x5836c0[_0x5b9dbd]['Phone']), await _0x44a9f3['waitForSelector']('#comp_dob'), await _0x44a9f3['type']('#comp_dob', '08/09/1992'), console['log'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5836c0[_0x5b9dbd]['Size'] == 'RANDOM') {
                            const _0x379ab8 = await _0x44a9f3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x369a5 => {
                                return _0x369a5['map'](_0x3c4885 => _0x3c4885['value']);
                            });
                            var _0x5b2dd9 = Math['round'](Math['random']() * (_0x379ab8['length'] - 0x2));
                            await _0x44a9f3['select']('#shoesize', _0x379ab8[_0x5b2dd9 + 0x1]), await _0x32b42a(0x3e8);
                        } else {
                            const _0x474eb6 = await _0x44a9f3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x59ba85 => {
                                return _0x59ba85['map'](_0x1a1d5c => _0x1a1d5c['innerText']);
                            }), _0x1ba93a = await _0x44a9f3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x281d0c => {
                                return _0x281d0c['map'](_0x3a2c7a => _0x3a2c7a['value']);
                            });
                            var _0x206e22 = _0x5836c0[_0x5b9dbd]['Size'];
                            for (var _0x19f63e = 0x1; _0x19f63e < _0x1ba93a['length']; _0x19f63e++) {
                                var _0x2c4270 = _0x474eb6[_0x19f63e]['split']('\x20')[0x0];
                                if (_0x2c4270 == _0x206e22) {
                                    await _0x44a9f3['select']('#shoesize', _0x1ba93a[_0x19f63e]);
                                    break;
                                } else {
                                    if (_0x19f63e + 0x1 == _0x1ba93a['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x44a9f3['waitForSelector']('#comp_address1'), await _0x44a9f3['type']('#comp_address1', _0x5836c0[_0x5b9dbd]['Address1'] + '\x20' + _0x5836c0[_0x5b9dbd]['HouseNumber']), await _0x44a9f3['waitForSelector']('#comp_address2'), await _0x44a9f3['type']('#comp_address2', '' + _0x5836c0[_0x5b9dbd]['Address2']), await _0x44a9f3['waitForSelector']('#comp_address2'), await _0x44a9f3['type']('#comp_address3', '' + _0x5836c0[_0x5b9dbd]['City']), await _0x44a9f3['waitForSelector']('#comp_postcode'), await _0x44a9f3['type']('#comp_postcode', '' + _0x5836c0[_0x5b9dbd]['Zip']), console['log'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x32b42a(0x4b0), await _0x44a9f3['click']('label#emailhold'), await _0x32b42a(0x5dc), await _0x44a9f3['click']('#preauth_tandc_email\x20>\x20label'), await _0x32b42a(0x5dc), await _0x44a9f3['click']('#submit'), await _0x44a9f3['waitForSelector']('#paymentWrap'), console['log'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20' + _0x5bf3af['blue']('Awaiting\x20Paypal\x20Payment')), _0x411fda['on']('targetcreated', async _0x27a469 => {
                            if (_0x27a469['type']() === 'page') {
                                const _0x3a7ede = await _0x27a469['page']();
                                async function _0x36a341() {
                                    try {
                                        await _0x44a9f3['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1cafa1 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x3625c1() {
                                    try {
                                        await _0x44a9f3['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x590176 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x3625c1(), _0x36a341(), await _0x32b42a(0x493e0);
                            }
                        });
                        async function _0x1dd230() {
                            for (let _0x4fc4ad = 0x0; _0x4fc4ad < 0x12c; _0x4fc4ad++) {
                                if (_0x590176 == !![]) {
                                    _0x27d30b = 'no', _0x3c6b3f(_0x5836c0[_0x5b9dbd], _0x2e5244), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                        try {
                                            await _0x449918(_0x14d76e['webhook'], _0xf864e3['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xf864e3['succesDEVMSG']), await _0x32b42a(0xc8);
                                    try {
                                        await _0x449918(_0x2383eb, _0xf864e3['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x1cafa1)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x32b42a(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x32b42a(0xbb8), await _0x44a9f3['click']('.zoid-outlet'), await _0x32b42a(0x7d0), await _0x1dd230();
                    } catch (_0x1e971d) {
                        console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20' + _0x1e971d)), _0x509d9a = '' + _0x1e971d;
                        var _0x59e779 = await _0x2b27e4(_0x5836c0[_0x5b9dbd], _0x2e5244, 'dev', !![], _0x509d9a);
                        _0xf864e3['errorDEV'] = { 'embeds': [_0x59e779] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xf864e3['errorDEV']), await _0x449918(_0xfac951, _0xf864e3['errorDEV']);
                    } finally {
                        _0x411fda && _0x411fda['close']();
                        if (_0x27d30b == 'yes' && _0x1982ad != 0x5 && _0x509d9a != 'Size\x20Not\x20Found') {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x2e5244['name'] + ']\x20Task\x20' + (_0x5b9dbd + 0x1) + '\x20:\x20Retrying')), _0x5b9dbd = _0x5b9dbd - 0x1, _0x1982ad = _0x1982ad + 0x1;
                            continue;
                        }
                        _0x27d30b == 'yes' && _0x1982ad >= 0x5 && (_0x3e5731(afew[_0x5b9dbd], _0x2e5244), _0x27d30b = 'no', _0x1982ad = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
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
                'function': async function (_0x5ed6eb, _0x11a5aa, _0x2ebff2) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x54ad19 = 0x0; _0x54ad19 < _0x11a5aa['length']; _0x54ad19++) {
                        const _0x1efdd7 = 'https://www.kickz.com/login';
                        if (_0x46451b != 'yes')
                            var _0x46451b = '', _0xd77828 = 0x0;
                        _0x10e00c(_0x5ed6eb['name'] + '\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20/\x20' + _0x11a5aa['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x11a5aa, _0x54ad19);
                        var _0x4d84b6 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b47fe
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x14d76e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x368722
                                }
                            ]
                        }];
                        const _0x2924ae = { 'embeds': _0x4d84b6 };
                        var _0x46e969 = await _0x2b27e4(_0x11a5aa[_0x54ad19], _0x5ed6eb, 'acc', ![]);
                        const _0x4ff5db = { 'succesDEVMSG': { 'embeds': [_0x46e969] } };
                        if (_0x11a5aa[_0x54ad19]['Email'] == '' || _0x11a5aa[_0x54ad19]['FirstName'] == '' || _0x11a5aa[_0x54ad19]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x11a5aa[_0x54ad19]['Password'] == '' && (_0x11a5aa[_0x54ad19]['Password'] = 'JRaffles23!');
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0x19506a = _0x2ebff2[_0x54ad19]['split'](':');
                        else
                            var _0x5b04e2 = Math['round'](Math['random']() * (_0x2ebff2['length'] - 0x1)), _0x19506a = _0x2ebff2[_0x5b04e2]['split'](':');
                        const _0x4140d1 = await _0x4c17a2['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x19506a[0x0] + ':' + _0x19506a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1c9ab6 = await _0x4140d1['newPage']();
                            await _0x1c9ab6['authenticate']({
                                'username': '' + _0x19506a[0x2],
                                'password': '' + _0x19506a[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c9ab6['setRequestInterception'](!![]), _0x1c9ab6['on']('request', _0x297faa => {
                                _0x297faa['resourceType']() === 'image' || _0x297faa['resourceType']() === 'font' || _0x297faa['resourceType']() === 'media' ? _0x297faa['abort']() : _0x297faa['continue']();
                            }), await _0x1c9ab6['goto'](_0x1efdd7), await _0x32b42a(0xbb8), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1c9ab6['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c9ab6['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c9ab6['waitForSelector']('#button-register'), await _0x32b42a(0x7d0), await _0x1c9ab6['evaluate'](() => {
                                const _0x1d68a9 = document['querySelector']('#button-register');
                                _0x1d68a9['click']();
                            }), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x32b42a(0x1388), await _0x1c9ab6['waitForSelector']('#customer_salutation'), await _0x1c9ab6['select']('#customer_salutation', 'mr'), await _0x32b42a(0x7d0), await _0x1c9ab6['waitForSelector']('#customer_firstname'), await _0x1c9ab6['type']('#customer_firstname', '' + _0x11a5aa[_0x54ad19]['FirstName']), await _0x32b42a(0x352), await _0x1c9ab6['waitForSelector']('#customer_lastname'), await _0x1c9ab6['type']('#customer_lastname', '' + _0x11a5aa[_0x54ad19]['LastName']), await _0x32b42a(0x352), await _0x1c9ab6['type']('#email-input', '' + _0x11a5aa[_0x54ad19]['Email']), await _0x32b42a(0x352), await _0x1c9ab6['type']('#email-confirm-input', '' + _0x11a5aa[_0x54ad19]['Email']), await _0x32b42a(0x352), await _0x1c9ab6['type']('#register-password', '' + _0x11a5aa[_0x54ad19]['Password']), await _0x32b42a(0x352), await _0x1c9ab6['type']('#password-confirm', '' + _0x11a5aa[_0x54ad19]['Password']), await _0x32b42a(0x352), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1c9ab6['click']('#consent'), await _0x32b42a(0x1f4);
                            const _0x1b858c = await _0x1c9ab6['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1b858c) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1c9ab6['click']('#buttonRegister');
                            try {
                                await _0x1c9ab6['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x11a5aa[_0x54ad19]['Email']), await _0x32b42a(0x4b0);
                            async function _0xc12d47() {
                                var _0x51eb19, _0x196b36 = ![];
                                for (var _0x2e1903 = 0x0; _0x2e1903 < 0x18; _0x2e1903++) {
                                    async function _0x590105() {
                                        var _0x528b37 = new _0x21dcc9({
                                            'user': _0x14d76e['masterMail'],
                                            'password': _0x14d76e['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x59edf3(_0x2b3546) {
                                            _0x528b37['openBox']('INBOX', ![], _0x2b3546);
                                        }
                                        _0x528b37['once']('ready', function () {
                                            console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x59edf3(function (_0x2f972e, _0x48aec0) {
                                                console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2f972e)
                                                    throw _0x2f972e;
                                                _0x528b37['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x11d51, _0x1cf6d6) {
                                                    if (!_0x1cf6d6 || !_0x1cf6d6['length'])
                                                        console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x528b37['end']();
                                                    else {
                                                        var _0x153991 = _0x528b37['seq']['fetch'](_0x1cf6d6, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x153991['on']('message', function (_0x169d7e, _0x4df104) {
                                                            var _0x1b2fa2 = '(#' + _0x4df104 + ')\x20';
                                                            _0x169d7e['on']('body', function (_0x43f201, _0x3ae834) {
                                                                _0x295f85(_0x43f201, (_0x3f620f, _0x8e7b78) => {
                                                                    if (_0x8e7b78['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x478472 = _0x8e7b78['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x207abd = _0x478472[0x1]['split']('<')[0x0];
                                                                        _0x51eb19 = _0x207abd;
                                                                    }
                                                                });
                                                            }), _0x169d7e['once']('end', function () {
                                                            });
                                                        }), _0x153991['once']('error', function (_0x51dd8c) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x153991['once']('end', function () {
                                                            _0x528b37['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x528b37['once']('error', function (_0x4a8100) {
                                            console['log'](_0x5bf3af['red'](_0x4a8100['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x196b36 = !![];
                                        }), _0x528b37['once']('end', async function () {
                                        }), _0x528b37['connect']();
                                    }
                                    _0x590105(), await _0x32b42a(0x1388);
                                    if (_0x51eb19)
                                        return _0x51eb19;
                                    if (_0x196b36)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x2e1903 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xc12d47(), _0x32b42a(0x320), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Verifying..'), await _0x1c9ab6['type']('#verificationCode', code), await _0x32b42a(0x1f4), await _0x1c9ab6['click']('#buttonVerify'), await _0x32b42a(0x190), await _0x1c9ab6['click']('#buttonVerify'), await _0x32b42a(0x3e8);
                            try {
                                await _0x1c9ab6['waitForSelector']('div.b-user_greeting'), _0x46451b = 'no', console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Account\x20' + _0x11a5aa[_0x54ad19]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5a9a17['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x11a5aa[_0x54ad19]['Email'] + ',' + _0x11a5aa[_0x54ad19]['Password'] + ','), console['log'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Account\x20' + _0x11a5aa[_0x54ad19]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x4ff5db['succesDEVMSG']);
                                } catch {
                                }
                                await _0x449918(_0x14fef8, _0x4ff5db['succesDEVMSG']);
                            } catch {
                                _0x46451b = 'no', console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3d597d) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20' + _0x3d597d)), _0x4d84b6[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4d84b6[0x0]['description'] = '' + _0x3d597d, await _0x449918(_0xfac951, _0x2924ae), _0x46451b = 'yes';
                        } finally {
                            _0x4140d1 && _0x4140d1['close']();
                            if (_0x46451b == 'yes' && _0xd77828 != 0x5) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5ed6eb['name'] + ']\x20Task\x20' + (_0x54ad19 + 0x1) + '\x20:\x20Retrying')), _0x54ad19 = _0x54ad19 - 0x1, _0xd77828 = _0xd77828 + 0x1;
                                continue;
                            }
                            _0x46451b == 'yes' && _0xd77828 >= 0x5 && (_0x3e5731(_0x11a5aa[_0x54ad19], _0x5ed6eb), _0x46451b = 'no', _0xd77828 = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x9ace48, _0x378654, _0xa8547b) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x22619b = 0x0; _0x22619b < _0x378654['length']; _0x22619b++) {
                        var _0x42b954;
                        if (_0x148bcc != 'yes')
                            var _0x148bcc = '', _0x22f657 = 0x0;
                        _0x10e00c(_0x9ace48['name'] + '\x20Task\x20' + (_0x22619b + 0x1) + '\x20/\x20' + _0x378654['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555);
                        var _0x3b3bdf = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b47fe
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x378654[_0x22619b]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x378654[_0x22619b]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x14d76e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x368722
                                }
                            ]
                        }], _0x8b0481 = await _0x2b27e4(_0x378654[_0x22619b], _0x9ace48, 'dev', ![]), _0xcbc47c = await _0x2b27e4(_0x378654[_0x22619b], _0x9ace48, 'pub', ![]);
                        const _0x3b3ab3 = {
                            'succesDEVMSG': { 'embeds': [_0x8b0481] },
                            'succesPUBMSG': { 'embeds': [_0xcbc47c] }
                        };
                        await _0x1267d9(_0x378654, _0x22619b);
                        if (_0x378654[_0x22619b]['Email'] == '' || _0x378654[_0x22619b]['Password'] == '' || _0x378654[_0x22619b]['FirstName'] == '' || _0x378654[_0x22619b]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0xd300b2 = _0xa8547b[_0x22619b]['split'](':');
                        else
                            var _0x1c9187 = Math['round'](Math['random']() * (_0xa8547b['length'] - 0x1)), _0xd300b2 = _0xa8547b[_0x1c9187]['split'](':');
                        const _0x2af60a = await _0x4c17a2['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0xd300b2[0x0] + ':' + _0xd300b2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x58b6c4 = await _0x2af60a['newPage']();
                            await _0x58b6c4['authenticate']({
                                'username': '' + _0xd300b2[0x2],
                                'password': '' + _0xd300b2[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x58b6c4['setRequestInterception'](!![]), _0x58b6c4['on']('request', _0x54ce7f => {
                                _0x54ce7f['resourceType']() === 'image' || _0x54ce7f['resourceType']() === 'font' || _0x54ce7f['resourceType']() === 'media' ? _0x54ce7f['abort']() : _0x54ce7f['continue']();
                            }), await _0x58b6c4['goto']('' + _0x378654[_0x22619b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x32b42a(0x12c);
                            try {
                                await _0x58b6c4['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x58b6c4['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Logging\x20in'), await _0x58b6c4['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x58b6c4['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x58b6c4['waitForSelector']('#username'), await _0x58b6c4['type']('#username', _0x378654[_0x22619b]['Email']), await _0x58b6c4['waitForSelector']('#password'), await _0x58b6c4['type']('#password', _0x378654[_0x22619b]['Password']), await _0x32b42a(0x190), await _0x58b6c4['click']('#buttonSubmit'), await _0x58b6c4['waitForSelector']('div.b-user_greeting'), console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x32b42a(0x1f4), await _0x58b6c4['goto']('' + _0x378654[_0x22619b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x378654[_0x22619b]['Size']);
                            let _0xed7466 = _0x378654[_0x22619b]['Size']['replace']('.5', '\x201/2');
                            await _0x58b6c4['click']('button[title=\x22' + _0xed7466 + '\x22]'), await _0x32b42a(0x1f4);
                            try {
                                await _0x58b6c4['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x32b42a(0x12c), console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x58b6c4['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_firstName', _0x378654[_0x22619b]['FirstName']), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_lastName', _0x378654[_0x22619b]['LastName']), await _0x32b42a(0x12c), await _0x58b6c4['select']('#dwfrm_raffle_addressFields_country', _0x378654[_0x22619b]['Country']), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_city', _0x378654[_0x22619b]['City']), await _0x32b42a(0x12c);
                            _0x378654[_0x22619b]['Postcode'] == undefined && (_0x378654[_0x22619b]['Postcode'] = _0x378654[_0x22619b]['Zip']);
                            await _0x58b6c4['type']('#dwfrm_raffle_addressFields_postalCode', _0x378654[_0x22619b]['Postcode']), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_address1', _0x378654[_0x22619b]['Address1']), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_address2', _0x378654[_0x22619b]['HouseNumber']), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x378654[_0x22619b]['Address2']), await _0x32b42a(0x12c), await _0x58b6c4['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x32b42a(0x12c), await _0x58b6c4['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x378654[_0x22619b]['Follower']), await _0x32b42a(0x1f4), await _0x58b6c4['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x32b42a(0x1f4), console['log'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20' + _0x5bf3af['blue']('Awaiting\x20Paypal\x20Payment')), await _0x58b6c4['click']('.b-paypal_button');
                            try {
                                await _0x58b6c4['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x148bcc = 'no', _0x3c6b3f(_0x378654[_0x22619b], _0x9ace48), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x3b3ab3['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x3b3ab3['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x2383eb, _0x3b3ab3['succesPUBMSG']);
                            } catch (_0x5b1b6b) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x5b1b6b)), _0x42b954 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x5b1b6b;
                                var _0x194fc1 = await _0x2b27e4(_0x378654[_0x22619b], _0x9ace48, 'dev', !![], _0x42b954);
                                _0x3b3ab3['errorDEV'] = { 'embeds': [_0x194fc1] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x3b3ab3['errorDEV']), await _0x449918(_0xfac951, _0x3b3ab3['errorDEV']);
                            }
                        } catch (_0x36c1c3) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20' + _0x36c1c3)), _0x42b954 = '' + _0x36c1c3;
                            var _0x194fc1 = await _0x2b27e4(_0x378654[_0x22619b], _0x9ace48, 'dev', !![], _0x42b954);
                            _0x3b3ab3['errorDEV'] = { 'embeds': [_0x194fc1] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x3b3ab3['errorDEV']), await _0x449918(_0xfac951, _0x3b3ab3['errorDEV']), _0x148bcc = 'yes';
                        } finally {
                            _0x2af60a && _0x2af60a['close']();
                            if (_0x148bcc == 'yes' && _0x22f657 != 0x5) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x9ace48['name'] + ']\x20Task\x20' + (_0x22619b + 0x1) + '\x20:\x20Retrying')), _0x22619b = _0x22619b - 0x1, _0x22f657 = _0x22f657 + 0x1;
                                continue;
                            }
                            _0x148bcc == 'yes' && _0x22f657 >= 0x5 && (_0x3e5731(_0x378654[_0x22619b], _0x9ace48), _0x148bcc = 'no', _0x22f657 = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['AfewDelay'] + '\x20ms'), await _0x32b42a(_0x14d76e['AfewDelay']);
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
                'function': async function (_0x542a60, _0x3471d2, _0x44e26b) {
                    for (var _0x28fc65 = 0x0; _0x28fc65 < _0x3471d2['length']; _0x28fc65++) {
                        async function _0x2456c3(_0x236af1, _0x27ad0a, _0x34b455, _0xeeaca9, _0x206de7) {
                            var _0x260075, _0x34cb4b = {}, _0x47ddc2 = [], _0x11b2e8 = {}, _0xaeb473 = [
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
                            ], _0x142ab1 = Math['round'](Math['random']() * (_0xaeb473['length'] - 0x1));
                            _0xeeaca9[_0x236af1]['Size'] == 'RANDOM' && (_0xeeaca9[_0x236af1]['Size'] = _0xaeb473[_0x142ab1]);
                            !_0xeeaca9 && (_0xeeaca9 = {});
                            if (_0x27ad0a != 'ver') {
                                _0x10e00c(_0x34b455['name'] + '\x20Task\x20' + (_0x236af1 + 0x1) + '\x20/\x20' + _0xeeaca9['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0xeeaca9, _0x236af1), _0x34cb4b = _0x34b455['data'];
                                _0x27ad0a == 'exp' ? _0x34cb4b['data']['attributes']['email'] = '' + _0xeeaca9[_0x236af1]['FirstName'] + _0xeeaca9[_0x236af1]['LastName'] + _0x14d76e['catchall'] : _0x34cb4b['data']['attributes']['email'] = '' + _0xeeaca9[_0x236af1]['Email'];
                                if (_0xeeaca9[_0x236af1]['Size'] == 'RANDOM') {
                                }
                                _0x34cb4b['data']['attributes']['properties']['$first_name'] = '' + _0xeeaca9[_0x236af1]['FirstName'], _0x34cb4b['data']['attributes']['properties']['$last_name'] = '' + _0xeeaca9[_0x236af1]['LastName'], _0x34cb4b['data']['attributes']['properties']['$address1'] = _0xeeaca9[_0x236af1]['Address1'] + '\x20' + _0xeeaca9[_0x236af1]['Address2'] + '\x20' + _0xeeaca9[_0x236af1]['HouseNumber'], _0x34cb4b['data']['attributes']['properties']['$zip'] = '' + _0xeeaca9[_0x236af1]['Zip'], _0x34cb4b['data']['attributes']['properties']['$city'] = '' + _0xeeaca9[_0x236af1]['City'], _0x34cb4b['data']['attributes']['properties']['$country'] = '' + _0xeeaca9[_0x236af1]['Country'], _0x34cb4b['data']['attributes']['properties']['Size'] = '' + _0xeeaca9[_0x236af1]['Size'], _0x34cb4b['data']['attributes']['properties']['$phone_number'] = '' + _0xeeaca9[_0x236af1]['Phone'], _0x34cb4b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xeeaca9[_0x236af1]['Follower'];
                            }
                            if (_0x14d76e['useRandomProxy'] = ![])
                                var _0x5d6b14 = _0x206de7[_0x236af1]['split'](':');
                            else
                                var _0x129ae8 = Math['round'](Math['random']() * (_0x206de7['length'] - 0x1)), _0x5d6b14 = _0x206de7[_0x129ae8]['split'](':');
                            var _0x368b69 = {
                                'jar': _0x3970a3,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x34b455['url'],
                                'headers': _0x34b455['headers'],
                                'body': JSON['stringify'](_0x34cb4b),
                                'proxy': 'http://' + _0x5d6b14[0x2] + ':' + _0x5d6b14[0x3] + '@' + _0x5d6b14[0x0] + ':' + _0x5d6b14[0x1]
                            };
                            return _0x27ad0a != 'ver' && (_0x368b69['url'] = _0x34b455['url'], _0x368b69['headers'] = _0x34b455['headers']), _0x27ad0a == 'ver' && (_0x368b69['method'] = 'GET'), new Promise(function (_0x1c51da, _0x58709a) {
                                callback = async (_0x5e7363, _0x1c54dd, _0x10fae2) => {
                                    if (!_0x5e7363 && _0x1c54dd['statusCode'] == 0xca || !_0x5e7363 && _0x1c54dd['statusCode'] == 0xc8) {
                                        if (_0x27ad0a != 'ver') {
                                            var _0x122556 = await _0x2b27e4(_0xeeaca9[_0x236af1], _0x34b455, 'dev', ![]), _0x2a417a = await _0x2b27e4(_0xeeaca9[_0x236af1], _0x34b455, 'pub', ![]);
                                            const _0x361868 = {
                                                'succesDEVMSG': { 'embeds': [_0x122556] },
                                                'succesPUBMSG': { 'embeds': [_0x2a417a] }
                                            };
                                            if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                                try {
                                                    await _0x449918(_0x14d76e['webhook'], _0x361868['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x361868['succesDEVMSG']), await _0x32b42a(0xc8);
                                            try {
                                                await _0x449918(_0x2383eb, _0x361868['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3c6b3f(_0xeeaca9[_0x236af1], _0x34b455);
                                        }
                                        _0x1c51da(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x34b455['name'] + ']\x20Task\x20' + (_0x236af1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x27ad0a != 'ver') {
                                            var _0x3e2a50 = '' + _0x5e7363, _0x292b47 = await _0x2b27e4(_0xeeaca9[_0x236af1], _0x34b455, 'dev', !![], _0x3e2a50), _0xb17ce7 = {};
                                            _0xb17ce7['errorDEV'] = { 'embeds': [_0x292b47] }, _0x3e5731(_0xeeaca9[_0x236af1], _0x34b455), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xb17ce7['errorDEV']), await _0x449918(_0xfac951, _0xb17ce7['errorDEV']);
                                        }
                                        _0x58709a(console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x34b455['name'] + ']\x20Task\x20' + (_0x236af1 + 0x1) + ':\x20' + _0x5e7363)));
                                    }
                                };
                                try {
                                    _0x27ad0a != 'ver' && console['log'](_0x435734() + '\x20[' + _0x34b455['name'] + ']\x20Task\x20' + (_0x236af1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x34cb4b['data']['attributes']['email']), _0x100b74(_0x368b69, callback);
                                } catch (_0x5a3d35) {
                                    console['log'](_0x435734() + '\x20Task\x20' + (_0x236af1 + 0x1) + ':\x20' + _0x5a3d35);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2456c3(_0x28fc65, 'nor', _0x542a60, _0x3471d2, _0x44e26b), console['log'](_0x435734() + '\x20[' + _0x542a60['name'] + ']\x20Sleeping\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        } catch (_0x1c1434) {
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
                'function': async function (_0x3c5170, _0x2493ca, _0x45d76c) {
                    var _0x36f076 = [];
                    async function _0x348709() {
                        var _0x591ac4 = new _0x21dcc9({
                            'user': _0x14d76e['masterMail'],
                            'password': _0x14d76e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x334584(_0x1dbf0a) {
                            _0x591ac4['openBox']('INBOX', ![], _0x1dbf0a);
                        }
                        _0x591ac4['once']('ready', function () {
                            _0x334584(function (_0x3853f5, _0xf9d6c1) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3853f5)
                                    throw _0x3853f5;
                                _0x591ac4['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'service@maha-amsterdam.com'
                                    ]
                                ], function (_0x29f662, _0x1b3f1c) {
                                    if (!_0x1b3f1c || !_0x1b3f1c['length'])
                                        console['log'](_0x435734() + '\x20[' + _0x3c5170['name'] + ']\x20No\x20mails\x20found'), _0x591ac4['end']();
                                    else {
                                        var _0x19f1f4 = _0x591ac4['seq']['fetch'](_0x1b3f1c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x19f1f4['on']('message', function (_0x281796, _0x248de1) {
                                            var _0x4dae69 = '(#' + _0x248de1 + ')\x20';
                                            _0x281796['on']('body', function (_0x82c5d6, _0x477ec0) {
                                                _0x295f85(_0x82c5d6, (_0x22df75, _0x1ad0e6) => {
                                                    if (_0x1ad0e6['subject'] == 'Confirm\x20Your\x20Subscription' && _0x1ad0e6['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x1c8454 = _0x1ad0e6['text']['split']('(')[0x1], _0xc7f823 = _0x1c8454['split'](')')[0x0];
                                                        _0x36f076['push'](_0xc7f823);
                                                    }
                                                });
                                            }), _0x281796['once']('end', function () {
                                            });
                                        }), _0x19f1f4['once']('error', function (_0x13141a) {
                                            console['log']('Fetch\x20error:\x20' + _0x13141a);
                                        }), _0x19f1f4['once']('end', function () {
                                            _0x591ac4['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x591ac4['once']('error', function (_0x3c6e5d) {
                            console['log'](_0x5bf3af['red'](_0x3c6e5d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x591ac4['once']('end', async function () {
                        }), _0x591ac4['connect']();
                    }
                    async function _0x5650f6(_0x2674de, _0x3d64d6, _0x23c8cf) {
                        for (var _0x4e3b53 = 0x0; _0x4e3b53 < _0x3d64d6['length']; _0x4e3b53++) {
                            async function _0x591b28(_0x2f1609, _0x28c942, _0xd6c157, _0x77d676, _0x4000ca) {
                                var _0x3a058a, _0x1491e3 = {}, _0x1ef163 = [], _0xf26b9e = {}, _0x512ffa = [
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
                                ], _0x30ace9 = Math['round'](Math['random']() * (_0x512ffa['length'] - 0x1));
                                _0x77d676[_0x2f1609]['Size'] == 'RANDOM' && (_0x77d676[_0x2f1609]['Size'] = _0x512ffa[_0x30ace9]);
                                !_0x77d676 && (_0x77d676 = {});
                                if (_0x14d76e['useRandomProxy'] = ![])
                                    var _0x174604 = _0x4000ca[_0x2f1609]['split'](':');
                                else
                                    var _0x5bb6ba = Math['round'](Math['random']() * (_0x4000ca['length'] - 0x1)), _0x174604 = _0x4000ca[_0x5bb6ba]['split'](':');
                                var _0xc4f781 = {
                                    'jar': _0x3970a3,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xd6c157['url'],
                                    'headers': _0xd6c157['headers'],
                                    'body': JSON['stringify'](_0x1491e3),
                                    'proxy': 'http://' + _0x174604[0x2] + ':' + _0x174604[0x3] + '@' + _0x174604[0x0] + ':' + _0x174604[0x1]
                                };
                                return _0x28c942 != 'ver' && (_0xc4f781['url'] = _0xd6c157['url'], _0xc4f781['headers'] = _0xd6c157['headers']), _0x28c942 == 'ver' && (_0xc4f781['method'] = 'GET', _0xc4f781['url'] = _0x77d676[_0x2f1609]), new Promise(function (_0x7174cf, _0x132735) {
                                    callback = async (_0x5df41e, _0x5db2cc, _0xcbd0ce) => {
                                        if (!_0x5df41e && _0x5db2cc['statusCode'] == 0xca || !_0x5df41e && _0x5db2cc['statusCode'] == 0xc8) {
                                            if (_0x28c942 != 'ver') {
                                                var _0x2bc408 = await _0x2b27e4(_0x77d676[_0x2f1609], _0xd6c157, 'dev', ![]), _0xd257a8 = await _0x2b27e4(_0x77d676[_0x2f1609], _0xd6c157, 'pub', ![]);
                                                const _0xc63979 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2bc408] },
                                                    'succesPUBMSG': { 'embeds': [_0xd257a8] }
                                                };
                                                if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                                    try {
                                                        await _0x449918(_0x14d76e['webhook'], _0xc63979['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xc63979['succesDEVMSG']), await _0x32b42a(0xc8);
                                                try {
                                                    await _0x449918(_0x2383eb, _0xc63979['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3c6b3f(_0x77d676[_0x2f1609], _0xd6c157);
                                            }
                                            _0x7174cf(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0xd6c157['name'] + ']\x20Task\x20' + (_0x2f1609 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x28c942 != 'ver') {
                                                var _0x5dd89c = '' + _0x5df41e, _0x363755 = await _0x2b27e4(_0x77d676[_0x2f1609], _0xd6c157, 'dev', !![], _0x5dd89c), _0x24c317 = {};
                                                _0x24c317['errorDEV'] = { 'embeds': [_0x363755] }, _0x3e5731(_0x77d676[_0x2f1609], _0xd6c157), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x24c317['errorDEV']), await _0x449918(_0xfac951, _0x24c317['errorDEV']);
                                            }
                                            _0x132735(console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0xd6c157['name'] + ']\x20Task\x20' + (_0x2f1609 + 0x1) + ':\x20' + _0x5df41e)));
                                        }
                                    };
                                    try {
                                        _0x28c942 != 'ver' ? console['log'](_0x435734() + '\x20[' + _0xd6c157['name'] + ']\x20Task\x20' + (_0x2f1609 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1491e3['data']['attributes']['email']) : console['log'](_0x435734() + '\x20[' + _0xd6c157['name'] + ']\x20Task\x20' + (_0x2f1609 + 0x1) + ':\x20Fetching\x20Response'), _0x100b74(_0xc4f781, callback);
                                    } catch (_0x4ac76c) {
                                        console['log'](_0x435734() + '\x20Task\x20' + (_0x2f1609 + 0x1) + ':\x20' + _0x4ac76c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x591b28(_0x4e3b53, 'ver', _0x2674de, _0x3d64d6, _0x23c8cf), console['log'](_0x435734() + '\x20[' + _0x2674de['name'] + ']\x20Sleeping\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                            } catch (_0x52d5b4) {
                            }
                        }
                    }
                    try {
                        _0x348709(), await _0x32b42a(0xfa0), console['log']('Found\x20' + _0x36f076['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x32b42a(0x9c4);
                    }
                    await _0x5650f6(_0x3c5170, _0x36f076, _0x45d76c);
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
                'function': async function (_0x1bb289, _0x8f2019, _0x5e02e9) {
                    for (var _0x39ec67 = 0x0; _0x39ec67 < _0x8f2019['length']; _0x39ec67++) {
                        async function _0x272c2d(_0x3a3b9c, _0x2f36f3, _0x314b40, _0xe014c0, _0x2b5956) {
                            var _0x43d9a5, _0x1dfc1e = {}, _0x3b4991 = [], _0x50f00b = {}, _0x5a0e51 = [
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
                            ], _0x26a542 = Math['round'](Math['random']() * (_0x5a0e51['length'] - 0x1));
                            _0xe014c0[_0x3a3b9c]['Size'] == 'RANDOM' && (_0xe014c0[_0x3a3b9c]['Size'] = _0x5a0e51[_0x26a542]);
                            !_0xe014c0 && (_0xe014c0 = {});
                            if (_0x2f36f3 != 'ver') {
                                _0x10e00c(_0x314b40['name'] + '\x20Task\x20' + (_0x3a3b9c + 0x1) + '\x20/\x20' + _0xe014c0['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0xe014c0, _0x3a3b9c), _0x3b4991 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x5b47fe
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0xe014c0[_0x3a3b9c]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x14d76e['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x368722
                                        }
                                    ]
                                }], _0x50f00b = { 'embeds': _0x3b4991 }, _0x1dfc1e = _0x314b40['data'];
                                _0x2f36f3 == 'exp' ? _0x1dfc1e['data']['attributes']['email'] = '' + _0xe014c0[_0x3a3b9c]['FirstName'] + _0xe014c0[_0x3a3b9c]['LastName'] + _0x14d76e['catchall'] : _0x1dfc1e['data']['attributes']['email'] = '' + _0xe014c0[_0x3a3b9c]['Email'];
                                if (_0xe014c0[_0x3a3b9c]['Size'] == 'RANDOM') {
                                }
                                _0x1dfc1e['data']['attributes']['properties']['$first_name'] = '' + _0xe014c0[_0x3a3b9c]['FirstName'], _0x1dfc1e['data']['attributes']['properties']['$last_name'] = '' + _0xe014c0[_0x3a3b9c]['LastName'], _0x1dfc1e['data']['attributes']['properties']['$address1'] = _0xe014c0[_0x3a3b9c]['Address1'] + '\x20' + _0xe014c0[_0x3a3b9c]['Address2'] + '\x20' + _0xe014c0[_0x3a3b9c]['HouseNumber'], _0x1dfc1e['data']['attributes']['properties']['$zip'] = '' + _0xe014c0[_0x3a3b9c]['Zip'], _0x1dfc1e['data']['attributes']['properties']['$city'] = '' + _0xe014c0[_0x3a3b9c]['City'], _0x1dfc1e['data']['attributes']['properties']['$country'] = '' + _0xe014c0[_0x3a3b9c]['Country'], _0x1dfc1e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xe014c0[_0x3a3b9c]['Size'], _0x1dfc1e['data']['attributes']['properties']['$phone_number'] = '' + _0xe014c0[_0x3a3b9c]['Phone'], _0x1dfc1e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xe014c0[_0x3a3b9c]['Follower'];
                            }
                            if (_0x14d76e['useRandomProxy'] = ![])
                                var _0x338ec7 = _0x2b5956[_0x3a3b9c]['split'](':');
                            else
                                var _0x3f802c = Math['round'](Math['random']() * (_0x2b5956['length'] - 0x1)), _0x338ec7 = _0x2b5956[_0x3f802c]['split'](':');
                            var _0x39f8bf = {
                                'jar': _0x3970a3,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x314b40['url'],
                                'headers': _0x314b40['headers'],
                                'body': JSON['stringify'](_0x1dfc1e),
                                'proxy': 'http://' + _0x338ec7[0x2] + ':' + _0x338ec7[0x3] + '@' + _0x338ec7[0x0] + ':' + _0x338ec7[0x1]
                            };
                            return _0x2f36f3 != 'ver' && (_0x39f8bf['url'] = _0x314b40['url'], _0x39f8bf['headers'] = _0x314b40['headers']), _0x2f36f3 == 'ver' && (_0x39f8bf['method'] = 'GET'), new Promise(function (_0x9ece94, _0x2f6f3e) {
                                callback = async (_0x3126c0, _0x40b51, _0x84a75f) => {
                                    if (!_0x3126c0 && _0x40b51['statusCode'] == 0xca || !_0x3126c0 && _0x40b51['statusCode'] == 0xc8) {
                                        if (_0x2f36f3 != 'ver') {
                                            var _0x21a83b = await _0x2b27e4(_0xe014c0[_0x3a3b9c], _0x314b40, 'dev', ![]), _0x4dae13 = await _0x2b27e4(_0xe014c0[_0x3a3b9c], _0x314b40, 'pub', ![]);
                                            const _0x52153b = {
                                                'succesDEVMSG': { 'embeds': [_0x21a83b] },
                                                'succesPUBMSG': { 'embeds': [_0x4dae13] }
                                            };
                                            if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                                try {
                                                    await _0x449918(_0x14d76e['webhook'], _0x52153b['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x52153b['succesDEVMSG']), await _0x32b42a(0xc8);
                                            try {
                                                await _0x449918(_0x2383eb, _0x52153b['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3c6b3f(_0xe014c0[_0x3a3b9c], _0x314b40);
                                        }
                                        _0x9ece94(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x314b40['name'] + ']\x20Task\x20' + (_0x3a3b9c + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2f36f3 != 'ver') {
                                            var _0x16ee0f = '' + _0x3126c0, _0x4892d4 = await _0x2b27e4(_0xe014c0[_0x3a3b9c], _0x314b40, 'dev', !![], _0x16ee0f), _0x4d33b3 = {};
                                            _0x4d33b3['errorDEV'] = { 'embeds': [_0x4892d4] }, _0x3e5731(_0xe014c0[_0x3a3b9c], _0x314b40), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x4d33b3['errorDEV']), await _0x449918(_0xfac951, _0x4d33b3['errorDEV']);
                                        }
                                        _0x2f6f3e(console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x314b40['name'] + ']\x20Task\x20' + (_0x3a3b9c + 0x1) + ':\x20' + _0x3126c0)));
                                    }
                                };
                                try {
                                    _0x2f36f3 != 'ver' && console['log'](_0x435734() + '\x20[' + _0x314b40['name'] + ']\x20Task\x20' + (_0x3a3b9c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1dfc1e['data']['attributes']['email']), _0x100b74(_0x39f8bf, callback);
                                } catch (_0x16f780) {
                                    console['log'](_0x435734() + '\x20Task\x20' + (_0x3a3b9c + 0x1) + ':\x20' + _0x16f780);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x272c2d(_0x39ec67, 'nor', _0x1bb289, _0x8f2019, _0x5e02e9), console['log'](_0x435734() + '\x20[' + _0x1bb289['name'] + ']\x20Sleeping\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        } catch (_0x3d9493) {
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
                'function': async function (_0x19b936, _0x3ec2f2, _0xd338b0) {
                    var _0x3ec2f2 = [];
                    async function _0x193661() {
                        var _0x20cf24 = new _0x21dcc9({
                            'user': _0x14d76e['masterMail'],
                            'password': _0x14d76e['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x34337c(_0x58bd9b) {
                            _0x20cf24['openBox']('INBOX', ![], _0x58bd9b);
                        }
                        _0x20cf24['once']('ready', function () {
                            _0x34337c(function (_0x3eda1e, _0x428041) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3eda1e)
                                    throw _0x3eda1e;
                                _0x20cf24['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'FROM',
                                        'customerservice@oqium.com'
                                    ]
                                ], function (_0x2e446f, _0x1b80f0) {
                                    if (!_0x1b80f0 || !_0x1b80f0['length'])
                                        console['log'](_0x435734() + '\x20[' + _0x19b936['name'] + ']\x20No\x20mails\x20found'), _0x20cf24['end']();
                                    else {
                                        var _0x5a6469 = _0x20cf24['seq']['fetch'](_0x1b80f0, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5a6469['on']('message', function (_0x157a84, _0x51f3a6) {
                                            var _0x621dea = '(#' + _0x51f3a6 + ')\x20';
                                            _0x157a84['on']('body', function (_0x172291, _0x9911ca) {
                                                _0x295f85(_0x172291, (_0x5b56bc, _0x58e27b) => {
                                                    if (_0x58e27b['subject'] == 'Confirm\x20Your\x20Subscription' && _0x58e27b['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x457f17 = _0x58e27b['text']['split']('(')[0x1], _0x1e2224 = _0x457f17['split'](')')[0x0];
                                                        _0x3ec2f2['push'](_0x1e2224);
                                                    }
                                                });
                                            }), _0x157a84['once']('end', function () {
                                            });
                                        }), _0x5a6469['once']('error', function (_0x587a1f) {
                                            console['log']('Fetch\x20error:\x20' + _0x587a1f);
                                        }), _0x5a6469['once']('end', function () {
                                            _0x20cf24['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x20cf24['once']('error', function (_0x1d8005) {
                            console['log'](_0x1d8005);
                        }), _0x20cf24['once']('end', async function () {
                        }), _0x20cf24['connect']();
                    }
                    async function _0x9c5ce5(_0x22115c, _0x5e469c, _0x210e3e) {
                        for (var _0xccc871 = 0x0; _0xccc871 < _0x5e469c['length']; _0xccc871++) {
                            async function _0xfbf020(_0x4dfa8c, _0x546e8a, _0x4e5730, _0x4950ce, _0x2d1bf6) {
                                var _0x54994f, _0x454928 = {}, _0x3bbd83 = [], _0x475f00 = {}, _0x3f4e7d = [
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
                                ], _0x4c3091 = Math['round'](Math['random']() * (_0x3f4e7d['length'] - 0x1));
                                _0x4950ce[_0x4dfa8c]['Size'] == 'RANDOM' && (_0x4950ce[_0x4dfa8c]['Size'] = _0x3f4e7d[_0x4c3091]);
                                !_0x4950ce && (_0x4950ce = {});
                                if (_0x14d76e['useRandomProxy'] = ![])
                                    var _0x2496fc = _0x2d1bf6[_0x4dfa8c]['split'](':');
                                else
                                    var _0x4c477a = Math['round'](Math['random']() * (_0x2d1bf6['length'] - 0x1)), _0x2496fc = _0x2d1bf6[_0x4c477a]['split'](':');
                                var _0x26e1e6 = {
                                    'jar': _0x3970a3,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4e5730['url'],
                                    'headers': _0x4e5730['headers'],
                                    'body': JSON['stringify'](_0x454928),
                                    'proxy': 'http://' + _0x2496fc[0x2] + ':' + _0x2496fc[0x3] + '@' + _0x2496fc[0x0] + ':' + _0x2496fc[0x1]
                                };
                                return _0x546e8a != 'ver' && (_0x26e1e6['url'] = _0x4e5730['url'], _0x26e1e6['headers'] = _0x4e5730['headers']), _0x546e8a == 'ver' && (_0x26e1e6['method'] = 'GET', _0x26e1e6['url'] = _0x4950ce[_0x4dfa8c]), new Promise(function (_0x25d8d3, _0xb7dda1) {
                                    callback = async (_0x1f6880, _0x2d7565, _0x4065d7) => {
                                        if (!_0x1f6880 && _0x2d7565['statusCode'] == 0xca || !_0x1f6880 && _0x2d7565['statusCode'] == 0xc8) {
                                            if (_0x546e8a != 'ver') {
                                                var _0x383c51 = await _0x2b27e4(_0x4950ce[_0x4dfa8c], _0x4e5730, 'dev', ![]), _0x3fbfe8 = await _0x2b27e4(_0x4950ce[_0x4dfa8c], _0x4e5730, 'pub', ![]);
                                                const _0x3f896b = {
                                                    'succesDEVMSG': { 'embeds': [_0x383c51] },
                                                    'succesPUBMSG': { 'embeds': [_0x3fbfe8] }
                                                };
                                                if (_0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '')
                                                    try {
                                                        await _0x449918(_0x14d76e['webhook'], _0x3f896b['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0x3f896b['succesDEVMSG']), await _0x32b42a(0xc8);
                                                try {
                                                    await _0x449918(_0x2383eb, _0x3f896b['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3c6b3f(_0x4950ce[_0x4dfa8c], _0x4e5730);
                                            }
                                            _0x25d8d3(console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x4e5730['name'] + ']\x20Task\x20' + (_0x4dfa8c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x546e8a != 'ver') {
                                                var _0x103a5b = '' + _0x1f6880, _0x3bd28 = await _0x2b27e4(_0x4950ce[_0x4dfa8c], _0x4e5730, 'dev', !![], _0x103a5b), _0x11aa27 = {};
                                                _0x11aa27['errorDEV'] = { 'embeds': [_0x3bd28] }, _0x3e5731(_0x4950ce[_0x4dfa8c], _0x4e5730), _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x11aa27['errorDEV']), await _0x449918(_0xfac951, _0x11aa27['errorDEV']);
                                            }
                                            _0xb7dda1(console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x4e5730['name'] + ']\x20Task\x20' + (_0x4dfa8c + 0x1) + ':\x20' + _0x1f6880)));
                                        }
                                    };
                                    try {
                                        _0x546e8a != 'ver' ? console['log'](_0x435734() + '\x20[' + _0x4e5730['name'] + ']\x20Task\x20' + (_0x4dfa8c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x454928['data']['attributes']['email']) : console['log'](_0x435734() + '\x20[' + _0x4e5730['name'] + ']\x20Task\x20' + (_0x4dfa8c + 0x1) + ':\x20Fetching\x20Response'), _0x100b74(_0x26e1e6, callback);
                                    } catch (_0x1816f1) {
                                        console['log'](_0x435734() + '\x20Task\x20' + (_0x4dfa8c + 0x1) + ':\x20' + _0x1816f1);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xfbf020(_0xccc871, 'ver', _0x22115c, _0x5e469c, _0x210e3e), console['log'](_0x435734() + '\x20[' + _0x22115c['name'] + ']\x20Sleeping\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                            } catch (_0x42de3e) {
                            }
                        }
                    }
                    try {
                        _0x193661(), await _0x32b42a(0xfa0), console['log']('Found\x20' + _0x3ec2f2['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x9c5ce5(_0x19b936, _0x3ec2f2, _0xd338b0);
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
                'function': async function (_0x3f80f3, _0x4fea3d, _0x52d6f3) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x26ef2b = 0x0; _0x26ef2b < _0x4fea3d['length']; _0x26ef2b++) {
                        var _0x386061 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b47fe
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x14d76e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x368722
                                }
                            ]
                        }];
                        const _0x4d4f1d = { 'embeds': _0x386061 };
                        _0x10e00c(_0x3f80f3['name'] + '\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20/\x20' + _0x4fea3d['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x4fea3d, _0x26ef2b);
                        var _0x14ffba = await _0x2b27e4(_0x4fea3d[_0x26ef2b], _0x3f80f3, 'acc', ![]);
                        const _0x1beab0 = { 'succesDEVMSG': { 'embeds': [_0x14ffba] } };
                        if (_0x4fea3d[_0x26ef2b]['Email'] == '' || _0x4fea3d[_0x26ef2b]['FirstName'] == '' || _0x4fea3d[_0x26ef2b]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x32b42a(0x7d0);
                            continue;
                        }
                        (_0x4fea3d[_0x26ef2b]['Password'] == '' || _0x4fea3d[_0x26ef2b] == undefined) && _0x4fea3d[_0x26ef2b]['Password'] == 'JRaffles23!';
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0x4e283b = _0x52d6f3[_0x26ef2b]['split'](':');
                        else
                            var _0x1a54d7 = Math['round'](Math['random']() * (_0x52d6f3['length'] - 0x1)), _0x4e283b = _0x52d6f3[_0x1a54d7]['split'](':');
                        const _0x308847 = await _0x4c17a2['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4e283b[0x0] + ':' + _0x4e283b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x95cce0 = await _0x308847['newPage']();
                            await _0x95cce0['authenticate']({
                                'username': '' + _0x4e283b[0x2],
                                'password': '' + _0x4e283b[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x3f80f3['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x95cce0['setRequestInterception'](!![]), _0x95cce0['on']('request', _0x1e34fd => {
                                _0x1e34fd['resourceType']() === 'image' || _0x1e34fd['resourceType']() === 'font' || _0x1e34fd['resourceType']() === 'media' ? _0x1e34fd['abort']() : _0x1e34fd['continue']();
                            }), await _0x95cce0['goto']('https://patta.nl/account/register'), await _0x32b42a(0xbb8), await _0x95cce0['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x435734() + '\x20[' + _0x3f80f3['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Filling\x20information'), await _0x95cce0['type']('#RegisterForm-FirstName', '' + _0x4fea3d[_0x26ef2b]['FirstName']), await _0x32b42a(0x226), await _0x95cce0['type']('#RegisterForm-LastName', '' + _0x4fea3d[_0x26ef2b]['LastName']), await _0x32b42a(0x226), await _0x95cce0['type']('#RegisterForm-email', '' + _0x4fea3d[_0x26ef2b]['Email']), await _0x32b42a(0x226), await _0x95cce0['type']('#RegisterForm-password', '' + _0x4fea3d[_0x26ef2b]['Password']), await _0x32b42a(0x226), console['log'](_0x435734() + '\x20[' + _0x3f80f3['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Submitting..'), await _0x95cce0['$eval']('#RegisterForm', _0x301638 => _0x301638['submit']()), await _0x32b42a(0x1f40);
                            try {
                                await _0x95cce0['waitForSelector']('.home-page-grid__collection'), await _0x32b42a(0x1f4), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x3f80f3['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Account\x20' + _0x4fea3d[_0x26ef2b]['Email'] + '\x20Generated!')), _0x5a9a17['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4fea3d[_0x26ef2b]['Email'] + ',' + _0x4fea3d[_0x26ef2b]['Password']), console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x3f80f3['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Account\x20' + _0x4fea3d[_0x26ef2b]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x1beab0['succesDEVMSG']);
                                } catch {
                                }
                                await _0x449918(_0x14fef8, _0x1beab0['succesDEVMSG']);
                            } catch (_0x3850da) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3850da));
                            }
                        } catch (_0x4a0d86) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x26ef2b + 0x1) + '\x20:\x20' + _0x4a0d86));
                        } finally {
                            _0x308847 && _0x308847['close'](), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x5e4ffa, _0x11a23f, _0x303625) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x18d0a5 = 0x0; _0x18d0a5 < _0x11a23f['length']; _0x18d0a5++) {
                        var _0x277711;
                        if (_0x289930 != 'yes')
                            var _0x289930 = '', _0x32ad5f = 0x0;
                        _0x10e00c(_0x5e4ffa['name'] + '\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20/\x20' + _0x11a23f['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x11a23f, _0x18d0a5);
                        if (_0x11a23f[_0x18d0a5]['Email'] == '' || _0x11a23f[_0x18d0a5]['Password'] == '' || _0x11a23f[_0x18d0a5]['FirstName'] == '' || _0x11a23f[_0x18d0a5]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0x84d966 = _0x303625[_0x18d0a5]['split'](':');
                        else
                            var _0x5eef74 = Math['round'](Math['random']() * (_0x303625['length'] - 0x1)), _0x84d966 = _0x303625[_0x5eef74]['split'](':');
                        const _0x1c76e3 = await _0x4c17a2['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x84d966[0x0] + ':' + _0x84d966[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x396c99 = await _0x1c76e3['newPage']();
                            await _0x396c99['authenticate']({
                                'username': '' + _0x84d966[0x2],
                                'password': '' + _0x84d966[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x396c99['setRequestInterception'](!![]), _0x396c99['on']('request', _0x3f5d19 => {
                                _0x3f5d19['resourceType']() === 'image' || _0x3f5d19['resourceType']() === 'font' || _0x3f5d19['resourceType']() === 'media' ? _0x3f5d19['abort']() : _0x3f5d19['continue']();
                            }), await _0x396c99['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x396c99['waitForSelector']('#CustomerEmail'), console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x396c99['type']('#CustomerEmail', '' + _0x11a23f[_0x18d0a5]['Email']), await _0x32b42a(0x12c), await _0x396c99['type']('#CustomerPassword', '' + _0x11a23f[_0x18d0a5]['Password']), await _0x32b42a(0x226), await _0x396c99['$eval']('#customer_login', _0x2839c9 => _0x2839c9['submit']());
                            try {
                                await _0x396c99['waitForSelector']('#orders'), await _0x32b42a(0x4b0);
                            } catch {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x396c99['goto']('' + _0x11a23f[_0x18d0a5]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x32b42a(0xbb8), console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x396c99['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x396c99['type']('#email', '' + _0x11a23f[_0x18d0a5]['Email']), await _0x32b42a(0x384), await _0x396c99['type']('#first_name', '' + _0x11a23f[_0x18d0a5]['FirstName']), await _0x32b42a(0x514), await _0x396c99['type']('#last_name', '' + _0x11a23f[_0x18d0a5]['LastName']), await _0x32b42a(0x514), await _0x396c99['type']('#street_address', _0x11a23f[_0x18d0a5]['Address1'] + '\x20' + _0x11a23f[_0x18d0a5]['HouseNumber'] + '\x20' + _0x11a23f[_0x18d0a5]['Address2']), await _0x32b42a(0x2bc);
                            _0x11a23f[_0x18d0a5]['Postcode'] == undefined && (_0x11a23f[_0x18d0a5]['Postcode'] = _0x11a23f[_0x18d0a5]['Zip']);
                            await _0x396c99['type']('#zip_code', '' + _0x11a23f[_0x18d0a5]['Postcode']), await _0x32b42a(0x320), await _0x396c99['type']('#city', '' + _0x11a23f[_0x18d0a5]['City']), await _0x32b42a(0x320), await _0x396c99['type']('#bday', '01/01/1994'), await _0x32b42a(0x320), await _0x396c99['type']('#instagram', '' + _0x11a23f[_0x18d0a5]['Follower']), await _0x32b42a(0x352);
                            if (_0x11a23f[_0x18d0a5]['Size'] == 'RANDOM') {
                                const _0x446110 = await _0x396c99['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x4b9b0f => {
                                    return _0x4b9b0f['map'](_0x20ac0a => _0x20ac0a['textContent']);
                                });
                                var _0x2fd47f = Math['round'](Math['random']() * (_0x446110['length'] - 0x1));
                                console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x446110[_0x2fd47f]), await _0x396c99['click']('label[data-eu-size=\x22' + _0x446110[_0x2fd47f] + '\x22]');
                            } else {
                                console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x11a23f[_0x18d0a5]['Size']);
                                try {
                                    await _0x396c99['click']('label[data-eu-size=\x22' + _0x11a23f[_0x18d0a5]['Size'] + '\x22]');
                                } catch {
                                    await _0x396c99['click']('label[data-eu-size=\x22' + _0x11a23f[_0x18d0a5]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x32b42a(0xbb8), await _0x396c99['$$eval']('.raffle__checkbox-label', _0x4832bc => _0x4832bc['forEach'](_0x308dfc => _0x308dfc['click']())), await _0x32b42a(0x7d0), console['log'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x396c99['click']('#raffle__form-submit'), await _0x32b42a(0x1388);
                            try {
                                await _0x396c99['waitForSelector']('#raffle__confirmation-message-container'), _0x289930 = 'no', _0x3c6b3f(_0x11a23f[_0x18d0a5], _0x5e4ffa), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4fea61) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4fea61));
                            }
                        } catch (_0x20c7f2) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20' + _0x20c7f2)), _0x289930 = 'yes';
                        } finally {
                            _0x1c76e3 && _0x1c76e3['close']();
                            if (_0x289930 == 'yes' && _0x32ad5f != 0x5 && _0x277711 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x5e4ffa['name'] + ']\x20Task\x20' + (_0x18d0a5 + 0x1) + '\x20:\x20Retrying')), _0x18d0a5 = _0x18d0a5 - 0x1, _0x32ad5f = _0x32ad5f + 0x1;
                                continue;
                            }
                            _0x289930 == 'yes' && _0x32ad5f >= 0x5 && (_0x3e5731(_0x11a23f[_0x18d0a5], _0x5e4ffa), _0x289930 = 'no', _0x32ad5f = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
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
                'function': async function (_0x38b8b4, _0x47238f, _0x6e9766) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x416d7a = 0x0; _0x416d7a < _0x47238f['length']; _0x416d7a++) {
                        if (_0x1a8a67 != 'yes')
                            var _0x1a8a67 = '', _0x3e4a57 = 0x0;
                        var _0x51a714 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5b47fe
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x14d76e['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x368722
                                }
                            ]
                        }];
                        const _0x339181 = { 'embeds': _0x51a714 };
                        _0x10e00c(_0x38b8b4['name'] + '\x20Task\x20' + (_0x416d7a + 0x1) + '\x20/\x20' + _0x47238f['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x47238f, _0x416d7a);
                        var _0x2703c8 = await _0x2b27e4(_0x47238f[_0x416d7a], _0x38b8b4, 'acc', ![]);
                        const _0x19e807 = { 'succesDEVMSG': { 'embeds': [_0x2703c8] } };
                        if (_0x47238f[_0x416d7a]['Email'] == '' || _0x47238f[_0x416d7a]['FirstName'] == '' || _0x47238f[_0x416d7a]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x32b42a(0x7d0);
                            continue;
                        }
                        (_0x47238f[_0x416d7a]['Password'] == '' || _0x47238f[_0x416d7a] == undefined) && _0x47238f[_0x416d7a]['Password'] == 'JRaffles23!';
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0x80d2d4 = _0x6e9766[_0x416d7a]['split'](':');
                        else
                            var _0x288b6e = Math['round'](Math['random']() * (_0x6e9766['length'] - 0x1)), _0x80d2d4 = _0x6e9766[_0x288b6e]['split'](':');
                        const _0x261935 = await _0x4c17a2['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x80d2d4[0x0] + ':' + _0x80d2d4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x597680 = await _0x261935['newPage']();
                            await _0x597680['authenticate']({
                                'username': '' + _0x80d2d4[0x2],
                                'password': '' + _0x80d2d4[0x3]
                            }), console['log'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x597680['setRequestInterception'](!![]), _0x597680['on']('request', _0x1086f5 => {
                                _0x1086f5['resourceType']() === 'image' || _0x1086f5['resourceType']() === 'font' || _0x1086f5['resourceType']() === 'media' ? _0x1086f5['abort']() : _0x1086f5['continue']();
                            }), await _0x597680['goto']('https://drop.slamjam.com/account/register'), await _0x32b42a(0xbb8), await _0x597680['waitForSelector']('#FirstName'), await _0x597680['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x597680['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Filling\x20information'), await _0x32b42a(0x4b0), await _0x597680['type']('#FirstName', '' + _0x47238f[_0x416d7a]['FirstName']), await _0x32b42a(0x226), await _0x597680['type']('#LastName', '' + _0x47238f[_0x416d7a]['LastName']), await _0x32b42a(0x226), await _0x597680['type']('#Email', '' + _0x47238f[_0x416d7a]['Email']), await _0x32b42a(0x2ee), await _0x597680['type']('#ConfirmEmail', '' + _0x47238f[_0x416d7a]['Email']), await _0x32b42a(0x2ee), await _0x597680['type']('#CreatePassword', '' + _0x47238f[_0x416d7a]['Password']), await _0x32b42a(0x2ee), await _0x597680['type']('#CreateConfirmPassword', '' + _0x47238f[_0x416d7a]['Password']), await _0x32b42a(0x226), console['log'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Submitting..'), await _0x597680['$eval']('#create_customer', _0x32e593 => _0x32e593['submit']()), await _0x32b42a(0x1388), console['log'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20' + _0x5bf3af['cyan']('Solving\x20Captcha')), await _0x597680['solveRecaptchas'](), console['log'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x597680['$eval']('.shopify-challenge__container\x20>\x20form', _0x1c0c0a => _0x1c0c0a['submit']());
                            try {
                                await _0x597680['waitForSelector']('.product-card__image'), await _0x32b42a(0x1f4), _0x1a8a67 = 'no', console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Account\x20' + _0x47238f[_0x416d7a]['Email'] + '\x20Generated!')), _0x5a9a17['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x47238f[_0x416d7a]['Email'] + ',' + _0x47238f[_0x416d7a]['Password']), console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Account\x20' + _0x47238f[_0x416d7a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0x19e807['succesDEVMSG']);
                                } catch {
                                }
                                await _0x449918(_0x14fef8, _0x19e807['succesDEVMSG']);
                            } catch (_0x2b420b) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2b420b));
                            }
                        } catch (_0x1278bb) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20' + _0x1278bb));
                        } finally {
                            _0x261935 && _0x261935['close']();
                            if (_0x1a8a67 == 'yes' && _0x3e4a57 != 0x5) {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x38b8b4['name'] + ']\x20Task\x20' + (_0x416d7a + 0x1) + '\x20:\x20Retrying')), _0x416d7a = _0x416d7a - 0x1, _0x3e4a57 = _0x3e4a57 + 0x1;
                                continue;
                            }
                            _0x1a8a67 == 'yes' && _0x3e4a57 >= 0x5 && (_0x3e5731(_0x47238f[_0x416d7a], _0x38b8b4), _0x1a8a67 = 'no', _0x3e4a57 = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x2c14f2, _0x5d3c7a, _0xe67fa1) {
                    _0x4c17a2['use'](_0x1fef96()), _0x4c17a2['use'](_0x14fdd9({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x14d76e['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x22da6c = 0x0; _0x22da6c < _0x5d3c7a['length']; _0x22da6c++) {
                        var _0x397ace;
                        if (_0x54065e != 'yes')
                            var _0x54065e = '', _0x326048 = 0x0;
                        _0x10e00c(_0x2c14f2['name'] + '\x20Task\x20' + (_0x22da6c + 0x1) + '\x20/\x20' + _0x5d3c7a['length'] + '\x20||\x20File:\x20' + _0x3fa273 + '\x20Proxies:\x20' + _0x345555), await _0x1267d9(_0x5d3c7a, _0x22da6c);
                        if (_0x5d3c7a[_0x22da6c]['Email'] == '' || _0x5d3c7a[_0x22da6c]['Password'] == '' || _0x5d3c7a[_0x22da6c]['FirstName'] == '' || _0x5d3c7a[_0x22da6c]['LastName'] == '') {
                            console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x14d76e['useRandomProxy'] = ![])
                            var _0x4b95ae = _0xe67fa1[_0x22da6c]['split'](':');
                        else
                            var _0x617567 = Math['round'](Math['random']() * (_0xe67fa1['length'] - 0x1)), _0x4b95ae = _0xe67fa1[_0x617567]['split'](':');
                        const _0x56e8ce = await _0x4c17a2['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b95ae[0x0] + ':' + _0x4b95ae[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x54a2c9 = await _0x56e8ce['newPage']();
                            await _0x54a2c9['authenticate']({
                                'username': '' + _0x4b95ae[0x2],
                                'password': '' + _0x4b95ae[0x3]
                            }), await _0x54a2c9['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54a2c9['setRequestInterception'](!![]), _0x54a2c9['on']('request', _0xccd0d => {
                                _0xccd0d['resourceType']() === 'image' || _0xccd0d['resourceType']() === 'font' || _0xccd0d['resourceType']() === 'media' ? _0xccd0d['abort']() : _0xccd0d['continue']();
                            }), await _0x54a2c9['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x54a2c9['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x54a2c9['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x32b42a(0x258), await _0x54a2c9['waitForSelector']('#CustomerEmail'), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x54a2c9['type']('#CustomerEmail', '' + _0x5d3c7a[_0x22da6c]['Email']), await _0x32b42a(0x12c), await _0x54a2c9['type']('#CustomerPassword', '' + _0x5d3c7a[_0x22da6c]['Password']), await _0x32b42a(0x226), await _0x54a2c9['$eval']('#customer_login', _0x30c197 => _0x30c197['submit']()), await _0x32b42a(0x7d0), await _0x54a2c9['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20' + _0x5bf3af['cyan']('Solving\x20Captcha')), await _0x54a2c9['solveRecaptchas'](), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x54a2c9['$eval']('.shopify-challenge__container\x20>\x20form', _0x3d6aa0 => _0x3d6aa0['submit']());
                            try {
                                await _0x54a2c9['waitForSelector']('.nav-account'), await _0x32b42a(0x4b0);
                            } catch {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x54a2c9['goto']('' + _0x5d3c7a[_0x22da6c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x32b42a(0xbb8), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x54a2c9['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x54a2c9['click']('.product-select-variant-wrapper'), await _0x32b42a(0x320), await _0x54a2c9['click']('li.product-select-variant__value[data-size=\x22' + _0x5d3c7a[_0x22da6c]['Size'] + '\x22]'), await _0x32b42a(0x384), await _0x54a2c9['$eval']('#AddToCartForm-product-template-raffle', _0x20c738 => _0x20c738['submit']()), await _0x54a2c9['waitForSelector']('.cart-order-summary__content'), await _0x32b42a(0x514), await _0x54a2c9['goto']('https://drop.slamjam.com/checkout'), await _0x32b42a(0x514), await _0x54a2c9['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x54a2c9['select']('#checkout_shipping_address_country', '' + _0x5d3c7a[_0x22da6c]['Country']), await _0x32b42a(0x200), await _0x54a2c9['waitForSelector']('#checkout_shipping_address_first_name'), await _0x54a2c9['type']('#checkout_shipping_address_first_name', '' + _0x5d3c7a[_0x22da6c]['FirstName']), await _0x32b42a(0x237), await _0x54a2c9['type']('#checkout_shipping_address_last_name', '' + _0x5d3c7a[_0x22da6c]['LastName']), await _0x32b42a(0x1e0), await _0x54a2c9['type']('#checkout_shipping_address_address1', _0x5d3c7a[_0x22da6c]['Address1'] + '\x20' + _0x5d3c7a[_0x22da6c]['HouseNumber']), await _0x32b42a(0x514), await _0x54a2c9['type']('#checkout_shipping_address_address2', '' + _0x5d3c7a[_0x22da6c]['Address2']), await _0x32b42a(0x514);
                            _0x5d3c7a[_0x22da6c]['Postcode'] == undefined && (_0x5d3c7a[_0x22da6c]['Postcode'] = _0x5d3c7a[_0x22da6c]['Zip']);
                            await _0x54a2c9['type']('#checkout_shipping_address_zip', '' + _0x5d3c7a[_0x22da6c]['Postcode']), await _0x32b42a(0x2bc), await _0x54a2c9['type']('#checkout_shipping_address_city', '' + _0x5d3c7a[_0x22da6c]['City']), await _0x32b42a(0x320), await _0x54a2c9['type']('#checkout_shipping_address_phone', '' + _0x5d3c7a[_0x22da6c]['Phone']), await _0x32b42a(0x320), await _0x54a2c9['click']('#continue_button'), await _0x32b42a(0xbb8), await _0x54a2c9['waitForSelector']('.summary-title'), await _0x32b42a(0x320), await _0x54a2c9['click']('#continue_button'), await _0x32b42a(0x320), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x54a2c9['waitForSelector']('#checkout_credit_card_vault'), await _0x32b42a(0x3e8);
                            var _0x1f6e6b = await _0x54a2c9['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x32c7d1 = await _0x1f6e6b['contentFrame']();
                            await _0x32c7d1['click']('#number'), await _0x32b42a(0x3e8), await _0x32c7d1['type']('#number', '' + _0x5d3c7a[_0x22da6c]['CardNumber'], { 'delay': 0x78 }), _0x1f6e6b = await _0x54a2c9['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x32c7d1 = await _0x1f6e6b['contentFrame'](), await _0x32b42a(0x1c2), await _0x32c7d1['click']('#name'), await _0x32b42a(0x1f4), await _0x32c7d1['type']('#name', '' + _0x5d3c7a[_0x22da6c]['NameOnCard'], { 'delay': 0x78 }), _0x1f6e6b = await _0x54a2c9['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x32c7d1 = await _0x1f6e6b['contentFrame'](), await _0x32b42a(0x1c2), await _0x32c7d1['click']('#expiry'), await _0x32b42a(0x1f4), await _0x32c7d1['type']('#expiry', '' + _0x5d3c7a[_0x22da6c]['ExpiryDate'], { 'delay': 0x78 }), _0x1f6e6b = await _0x54a2c9['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x32c7d1 = await _0x1f6e6b['contentFrame'](), await _0x32b42a(0x1c2), await _0x32c7d1['click']('#verification_value'), await _0x32b42a(0x1f4), await _0x32c7d1['type']('#verification_value', '' + _0x5d3c7a[_0x22da6c]['CVV'], { 'delay': 0x78 }), await _0x54a2c9['$eval']('#accepts-flag-raffle', _0x48fd65 => _0x48fd65['click']()), await _0x32b42a(0x7d0), console['log'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x54a2c9['$eval']('#continue_button', _0x59c352 => _0x59c352['click']()), await _0x32b42a(0x1b58), await _0x54a2c9['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x54a2c9['$eval']('.edit_checkout.animate-floating-labels', _0x58f5be => _0x58f5be['submit']()), await _0x32b42a(0x7d0);
                            try {
                                await _0x54a2c9['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x54065e = 'no', _0x3c6b3f(_0x5d3c7a[_0x22da6c], _0x2c14f2), console['log'](_0x5bf3af['green'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4569c6) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4569c6['message']);
                            }
                            var _0x2d47cc = await _0x2b27e4(_0x5d3c7a[_0x22da6c], _0x2c14f2, 'dev', ![]), _0x347aef = await _0x2b27e4(_0x5d3c7a[_0x22da6c], _0x2c14f2, 'pub', ![]);
                            const _0xbdffbe = {
                                'succesDEVMSG': { 'embeds': [_0x2d47cc] },
                                'succesPUBMSG': { 'embeds': [_0x347aef] }
                            };
                            try {
                                _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], _0xbdffbe['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x59063a, _0xbdffbe['succesDEVMSG']), await _0x32b42a(0xc8), await _0x449918(_0x2383eb, _0xbdffbe['succesPUBMSG']);
                            } catch (_0x32e4e0) {
                                console['log'](_0x5bf3af['yellow'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x32e4e0));
                            }
                        } catch (_0x51d75a) {
                            console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x117947[taskModule]['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20' + _0x51d75a)), _0x397ace = '' + _0x51d75a;
                            var _0x26c07a = await _0x2b27e4(kickz[_0x22da6c], _0x2c14f2, 'dev', !![], _0x397ace);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x26c07a] }, _0x14d76e['webhook'] != undefined && _0x14d76e['webhook'] != '' && await _0x449918(_0x14d76e['webhook'], EMBEDS['errorDEV']), await _0x449918(_0xfac951, EMBEDS['errorDEV']), _0x54065e = 'yes';
                        } finally {
                            _0x56e8ce && _0x56e8ce['close']();
                            if (_0x54065e == 'yes' && _0x326048 != 0x5 && _0x397ace != 'Size\x20Not\x20Found') {
                                console['log'](_0x5bf3af['red'](_0x435734() + '\x20[' + _0x2c14f2['name'] + ']\x20Task\x20' + (_0x22da6c + 0x1) + '\x20:\x20Retrying')), _0x22da6c = _0x22da6c - 0x1, _0x326048 = _0x326048 + 0x1;
                                continue;
                            }
                            _0x54065e == 'yes' && _0x326048 >= 0x5 && (_0x3e5731(_0x5d3c7a[_0x22da6c], _0x2c14f2), _0x54065e = 'no', _0x326048 = 0x0), console['log']('Waiting\x20for\x20' + _0x14d76e['delay'] + '\x20ms'), await _0x32b42a(_0x14d76e['delay']);
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
                'function': async function (_0x3e435f) {
                    var _0x21accf = await _0xdd7384(), _0xbc239e = _0x5a9a17['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xf046b1 = _0x2d056b['parse'](_0xbc239e, { 'header': !![] })['data'];
                    for (var _0x4e1c4d = 0x0; _0x4e1c4d < _0xf046b1['length']; _0x4e1c4d++) {
                        var _0x5c967d = _0xf046b1[_0x4e1c4d]['Store'], _0x550c93 = _0xf046b1[_0x4e1c4d]['Mode'];
                        for (var _0x276936 of _0x117947) {
                            const _0x33a828 = _0x276936['name']['includes'](_0x5c967d);
                            if (!_0x33a828)
                                continue;
                            for (mode of _0x276936['modules']) {
                                if (mode['name'] == _0x550c93) {
                                    console['log']('Running\x20' + _0x5bf3af['cyan'](mode['name'])), await mode['function'](mode, [_0xf046b1[_0x4e1c4d]], _0x21accf);
                                    var _0x31037c = _0xbc239e['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5a9a17['writeFileSync']('../failed-tasks.csv', _0x31037c);
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
                    var _0x1f5575 = await _0x47ba17['get']('Answer');
                    if (_0x1f5575['Answer']['toLowerCase']() == 'y') {
                        _0x5a9a17['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x32b42a(0x3e8);
                        return;
                    }
                    if (_0x1f5575['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x32b42a(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x32b42a(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x348e66(_0x1c23b0) {
    var _0x3703b1 = await _0xdd7384(), _0x4b5288 = _0x5a9a17['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x361df3 = _0x2d056b['parse'](_0x4b5288, { 'header': !![] })['data'];
    for (var _0x756847 = 0x0; _0x756847 < _0x361df3['length']; _0x756847++) {
        var _0x31682a = _0x361df3[_0x756847]['Store'], _0x16efda = _0x361df3[_0x756847]['Mode'];
        for (var _0x56cfdd of _0x117947) {
            const _0x3a556d = _0x56cfdd['name']['includes'](_0x31682a);
            if (_0x3a556d)
                for (mode of _0x117947[_0x56cfdd]['modules']) {
                    const _0x1c9167 = mode['name']['includes'](_0x16efda);
                    _0x1c9167 && (_0x1c23b0 = mode['name'], await mode['function'](_0x1c23b0, _0x361df3[_0x756847], _0x3703b1));
                }
        }
    }
}
async function _0xb3bbb0() {
    await _0x1d9e56(), console['clear']();
    if (_0x368722 != 'devkey') {
        let _0x9c9f20 = await _0xbd160f['autoUpdate']();
        if (_0x9c9f20 === 'yes')
            return _0x403627('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x825754 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x32b42a(0x2710);
        ;
    }
    await _0x2b76a5(_0x825754);
    if (_0x420852 === ![])
        return console['log']('Closing\x20Browser'), await _0x32b42a(0xbb8);
    else
        try {
            var _0x1e5826 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5b47fe
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x368722
                    }
                ]
            }];
            const _0x487ffb = { 'embeds': _0x1e5826 };
            var _0x348c16 = await _0x2b27e4(null, null, 'open', ![]);
            const _0x1a4a80 = { 'openDEVMSG': { 'embeds': [_0x348c16] } };
            await _0x449918(_0x1a5925, _0x1a4a80['openDEVMSG']);
            async function _0x268f30() {
                _0x10e00c('JRaffles\x20' + _0x368722), console['clear'](), console['log']('Welcome\x20to\x20' + _0x5bf3af['cyan']('JRaffles();') + '\x20' + _0x368722), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x283721 = 0x0; _0x283721 < _0x117947['length'] - 0x4; _0x283721++) {
                    if (_0x283721 >= 0xa) {
                        console['log']('\x20(' + _0x283721 + ')\x20[' + _0x117947[_0x283721]['name'] + ']');
                        continue;
                    }
                    if (_0x117947[_0x283721]['name'] === 'Reload\x20Settings' || _0x117947[_0x283721]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x283721 + ')\x20\x20[' + _0x117947[_0x283721]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x117947['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x117947['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x117947['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x117947['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x45ae85();
                if (taskModule > _0x117947['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x32b42a(0x3e8), _0x268f30();
                if (_0x117947[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x2890b1 = await _0xdd7384(), _0x3d25df = await _0x4454c3();
                        _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x3d25df), await _0x596f6f['function'](_0x596f6f, _0x3d25df, _0x2890b1);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x2890b1 = await _0xdd7384(), _0x3d25df = await _0x4454c3();
                            _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x3d25df), await _0x596f6f['function'](_0x596f6f, _0x3d25df, _0x2890b1);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2890b1 = await _0xdd7384();
                                await _0x596f6f['function'](_0x596f6f, _0x2890b1);
                            }
                        }
                    }
                    return _0x268f30();
                }
                if (_0x117947[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                        var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x2890b1 = await _0xdd7384(), _0x294929 = await _0x4454c3();
                            _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x294929), await _0x596f6f['function'](_0x596f6f, _0x294929, _0x2890b1);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x2890b1 = await _0xdd7384(), _0x294929 = await _0x4454c3();
                                _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x294929), await _0x596f6f['function'](_0x596f6f, _0x294929, _0x2890b1);
                            }
                        }
                    } catch (_0x2a3a2c) {
                        console['log'](_0x2a3a2c), await _0x32b42a(0xfa0);
                    }
                    return _0x268f30();
                }
                if (_0x117947[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x2890b1 = await _0xdd7384();
                        return await _0x596f6f['function'](_0x596f6f, _0x2890b1), _0x268f30();
                    }
                    var _0x2890b1 = await _0xdd7384(), _0x2d7daa = await _0x4454c3();
                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x2d7daa), await _0x596f6f['function'](_0x596f6f, _0x2d7daa, _0x2890b1), _0x268f30();
                }
                if (_0x117947[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2890b1 = await _0xdd7384(), _0x2d7daa = await _0x4454c3();
                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x2d7daa), await _0x596f6f['function'](_0x596f6f, _0x2d7daa, _0x2890b1), _0x268f30();
                }
                if (_0x117947[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2890b1 = await _0xdd7384(), _0x2d7daa = await _0x4454c3();
                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x2d7daa), await _0x596f6f['function'](_0x596f6f, _0x2d7daa, _0x2890b1), _0x268f30();
                } else {
                    if (_0x117947[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                        var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x2890b1 = await _0xdd7384(), _0x7f6f55 = await _0x4454c3();
                            return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x7f6f55), await _0x596f6f['function'](_0x596f6f, _0x7f6f55, _0x2890b1), _0x268f30();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2890b1 = await _0xdd7384();
                                return await _0x596f6f['function'](_0x596f6f, links, _0x2890b1), _0x268f30();
                            }
                        }
                        ;
                    } else {
                        if (_0x117947[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                            var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction], _0x2890b1 = await _0xdd7384(), _0x23589d = await _0x4454c3();
                            return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x23589d), await _0x596f6f['function'](_0x596f6f, _0x23589d, _0x2890b1), await _0x32b42a(0x1388), _0x268f30();
                        } else {
                            if (_0x117947[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x2890b1 = await _0xdd7384(), _0x7f6f55 = await _0x4454c3();
                                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x7f6f55), await _0x596f6f['function'](_0x596f6f, _0x7f6f55, _0x2890b1), _0x268f30();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x2890b1 = await _0xdd7384();
                                        return await _0x596f6f['function'](_0x596f6f, links, _0x2890b1), _0x268f30();
                                    }
                                }
                                ;
                            } else {
                                if (_0x117947[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x1e6e68('https://bouncewear.com/nl/account/register', _0x596f6f);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x117947[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                        var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x2890b1 = await _0xdd7384(), _0x1985cd = await _0x4454c3();
                                            return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x1985cd), await _0x596f6f['function'](_0x596f6f, _0x1985cd, _0x2890b1), _0x268f30();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x2890b1 = await _0xdd7384(), _0x1985cd = await _0x4454c3();
                                                return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x1985cd), await _0x596f6f['function'](_0x596f6f, _0x1985cd, _0x2890b1), _0x268f30();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x117947[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                            var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x2890b1 = await _0xdd7384(), _0x1cb77c = await _0x4454c3();
                                                return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x1cb77c), await _0x596f6f['function'](_0x596f6f, _0x1cb77c, _0x2890b1), _0x268f30();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x2890b1 = await _0xdd7384(), _0x1cb77c = await _0x4454c3();
                                                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x1cb77c), await _0x596f6f['function'](_0x596f6f, _0x1cb77c, _0x2890b1), _0x268f30();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x117947[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                                var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x2890b1 = await _0xdd7384(), _0x297be8 = await _0x4454c3();
                                                    return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x297be8), await _0x596f6f['function'](_0x596f6f, _0x297be8, _0x2890b1), _0x268f30();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x2890b1 = await _0xdd7384(), _0x297be8 = await _0x4454c3();
                                                        return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x297be8), await _0x596f6f['function'](_0x596f6f, _0x297be8, _0x2890b1), _0x268f30();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x117947[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                                    var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x2890b1 = await _0xdd7384(), _0x1873b1 = await _0x4454c3();
                                                        return _0x14d76e['shuffleTasks'] && await _0x330bc9(_0x1873b1), await _0x596f6f['function'](_0x596f6f, _0x1873b1, _0x2890b1), _0x268f30();
                                                    }
                                                } else {
                                                    if (_0x117947[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x32b42a(0x3e8), _0x268f30();
                                                    else {
                                                        if (_0x117947[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x39ea2b = _0x117947[taskModule]['name'], _0x2890b1 = await _0xdd7384();
                                                            await _0x10b8dc(_0x39ea2b, _0x2890b1);
                                                        } else {
                                                            if (_0x117947[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x294113(_0x117947[taskModule]['modules']);
                                                                var _0x596f6f = _0x117947[taskModule]['modules'][taskFunction];
                                                                return await _0x596f6f['function'](_0x596f6f), _0x268f30();
                                                            } else {
                                                                if (_0x117947[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x1cec8f = 0x0;
                                                                    for (const _0x41fe23 in _0x14d76e) {
                                                                        console['log']('(' + _0x1cec8f + ')\x20' + _0x41fe23 + '\x20:\x20' + _0x14d76e[_0x41fe23]), _0x1cec8f++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x1cec8f + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x133e1f = await _0x488eef();
                                                                    if (_0x133e1f == _0x1cec8f)
                                                                        return _0x268f30();
                                                                    console['clear'];
                                                                    var _0x473a11 = 0x0;
                                                                    for (var _0x14d147 in _0x14d76e) {
                                                                        if (_0x133e1f == _0x473a11) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x14d147 + '\x20:'), _0x14d76e[_0x14d147] = await _0x349fb8(), _0x5a9a17['writeFileSync']('../settings.json', JSON['stringify'](_0x14d76e));
                                                                            break;
                                                                        } else
                                                                            _0x473a11++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x32b42a(0xbb8), _0x268f30();
                                                                } else {
                                                                    if (_0x117947[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x1d9e56(), _0x268f30();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x117947[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x27538d = await _0x4106df();
                                                                            _0x27538d == 'ModuleVoorDeBoys' ? (await _0x24470f(), await _0x9f140f(), await afewFunction(_0x45ba49[_0xde0121], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x32b42a(0xbb8));
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
            await _0x268f30();
        } catch (_0x3b89f4) {
            return console['log'](_0x3b89f4), await _0x32b42a(0x3a98);
        }
}
;
_0x10e00c('JRaffles\x20' + _0x368722), _0x1d9e56();
try {
    _0xb3bbb0();
} catch (_0x545f37) {
    var _0x116c8a = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5b47fe
            },
            {
                'name': 'Version',
                'value': '' + _0x368722
            },
            {
                'name': 'Error',
                'value': '' + _0x545f37
            }
        ]
    }];
    const _0x2747fa = { 'embeds': _0x116c8a };
    _0x449918(_0xfac951, _0x2747fa);
}