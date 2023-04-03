process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x33b6f0 = require('fs'), _0xa519b9 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4ce02f(_0x132779) {
    const _0x50b569 = _0x33b6f0['createWriteStream'](_0x132779, { 'flags': 'a' }), _0xce2fa7 = console['log'];
    console['log'] = function () {
        const _0x16b796 = Array['prototype']['slice']['call'](arguments), _0x34a857 = _0x16b796['join']('\x20') + '\x0a';
        _0x50b569['write'](_0x34a857), _0xce2fa7['apply'](console, _0x16b796);
    };
}
_0x4ce02f('../logs/log\x20' + _0xa519b9);
const _0x4e16ef = require('figlet');
var _0x51fb2f = require('tough-cookie'), _0x93d2c6 = require('node-imap'), _0x4482e8 = require('util')['inspect'];
const _0x3aa20a = require('mailparser')['simpleParser'], { EmbedBuilder: _0x151939 } = require('discord.js');
var _0x296786 = require('exe');
const { execFile: _0x2050b5 } = require('child_process'), _0x1a81d0 = require('puppeteer-extra'), _0x19d1ed = require('puppeteer-extra-plugin-recaptcha'), _0x449121 = require('puppeteer-extra-plugin-stealth'), _0x5aeedd = require('chalk'), _0x5ed37a = require('node-bash-title'), _0x51ae83 = require('axios'), _0x5c5d12 = require('papaparse');
var _0x19ac6b = require('random-name');
const _0x2d5775 = require('request');
var _0x49c478 = require('prompt');
const _0x2d7acd = _0x2d5775['jar']();
var _0x240058 = {};
const _0x432f24 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5c715a = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x34aaf6 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3980c2 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x676ae2 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x4f3a18 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x1e5dbd = 'https://discord.com/api/webhooks/', _0x4b5baa = '' + _0x1e5dbd + _0x34aaf6, _0x3dc565 = '' + _0x1e5dbd + _0x3980c2, _0x1f93f4 = '' + _0x1e5dbd + _0x432f24, _0x1170d2 = '' + _0x1e5dbd + _0x5c715a, _0x591af7 = '' + _0x1e5dbd + _0x676ae2, _0x22708b = '' + _0x1e5dbd + _0x4f3a18;
const _0x162575 = JSON['parse'](_0x33b6f0['readFileSync']('../package.json', 'utf-8')), _0x2ee773 = _0x162575['version'];
var _0x26a961, _0x2184df, _0x3d761e, _0x4b348b, _0x5a4e0e, _0x294a02, _0x50ab9a, _0x12c494;
const _0x3f5f06 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1fadeb = ![];
const _0x26cbbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x20d3f6 = '0123456789';
var _0x331c6e = _0x26cbbc['split']('');
const _0x2688fa = require('auto-git-update'), { PageEmittedEvents: _0x528fc1 } = require('puppeteer'), { getRandomValues: _0x157505 } = require('crypto'), { resolve: _0x129891 } = require('path'), { Console: _0x3fabc4 } = require('console'), _0x1d99ea = {
    'repository': 'https://github.com/Jarno97/JRafflesBot',
    'token': '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',
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
}, _0x5e1fff = new _0x2688fa(_0x1d99ea);
async function _0x5c968f() {
    _0x5a4e0e = _0x33b6f0['readdirSync']('../proxies'), _0x4b348b = _0x33b6f0['readdirSync']('../tasks'), !_0x33b6f0['existsSync']('../accounts/fenom.csv') && _0x33b6f0['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x33b6f0['existsSync']('../accounts/bstn.csv') && _0x33b6f0['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x33b6f0['existsSync']('../accounts/eql.csv') && _0x33b6f0['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x33b6f0['existsSync']('../failed-tasks.csv') && _0x33b6f0['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x33b6f0['existsSync']('../successful-tasks.csv') && _0x33b6f0['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x240058 = JSON['parse'](_0x33b6f0['readFileSync']('../settings.json', 'utf-8')), !_0x240058['delay'] && (_0x240058['delay'] = 0x3c, _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['masterMail'] && (_0x240058['masterMail'] = 'yourmail@gmail.com', _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['masterPassword'] && (_0x240058['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['captchaKey'] && (_0x240058['captchaKey'] = '', _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['useRandomProxy'] && (_0x240058['useRandomProxy'] = !![], _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['shuffleTasks'] && (_0x240058['shuffleTasks'] = ![], _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), !_0x240058['webhook'] && (_0x240058['webhook'] = '', _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), _0x240058['delay'] <= 0x1388 && (_0x240058['delay'] = _0x240058['delay'] * 0x3e8), _0x240058['AfewDelay'] && (delete _0x240058['AfewDelay'], _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), _0x240058['MahaDelay'] && (delete _0x240058['MahaDelay'], _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), _0x240058['footshopDelay'] && (delete _0x240058['footshopDelay'], _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058, null, 0x2))), _0x240058['MahaDelay'] = _0x240058['delay'], _0x1e5dbd = _0x240058['webhook'], _0x294a02 = _0x240058['licenseKey'];
}
let _0x22f86a, _0x5d9290 = [], _0x4852fb;
const _0x1aa4bf = _0x1134b1 => new Promise(_0x427dd6 => setTimeout(_0x427dd6, _0x1134b1));
function _0x9e2068(_0xdee5fb, _0x12c67e) {
    return Math['floor'](Math['random']() * (_0x12c67e - _0xdee5fb + 0x1) + _0xdee5fb);
}
function _0x4c15af(_0x48834d) {
    let _0x581d0f = _0x48834d['length'], _0x36d2f5;
    while (_0x581d0f != 0x0) {
        _0x36d2f5 = Math['floor'](Math['random']() * _0x581d0f), _0x581d0f--, [_0x48834d[_0x581d0f], _0x48834d[_0x36d2f5]] = [
            _0x48834d[_0x36d2f5],
            _0x48834d[_0x581d0f]
        ];
    }
    return _0x48834d;
}
async function _0x5939f7(_0x528dd2) {
    return _0x51ae83['get']('https://api.hyper.co/v4/licenses/' + _0x528dd2, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3f5f06 } })['then'](_0x1bea31 => _0x1bea31['data'])['catch'](() => null);
}
;
async function _0x2cd380(_0x5366b1) {
    console['clear']();
    if (_0x5366b1 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x281596 = await _0x49c478['get']('License');
        if (_0x281596['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1aa4bf(0xbb8), _0x2cd380(_0x5366b1);
        _0x5366b1 = _0x281596['License'], _0x240058['licenseKey'] = _0x5366b1, _0x294a02 = _0x5366b1, _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058));
    }
    console['log']('Checking\x20license\x20' + _0x294a02 + '...'), await _0x1aa4bf(0x320);
    const _0x2089ae = await _0x5939f7(_0x5366b1);
    _0x50ab9a = JSON['stringify'](_0x2089ae['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x12c494 = JSON['stringify'](_0x2089ae['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2089ae)
        return console['log']('License\x20not\x20found');
    if (!_0x2089ae['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2089ae['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1fadeb = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1fadeb = ![]);
}
async function _0x3b2667() {
    var _0x313cc0 = await _0x49c478['get']('Module');
    return console['clear'](), _0x313cc0['Module'];
}
;
async function _0x1f0172() {
    var _0x2535df = await _0x49c478['get']('Setting');
    return console['clear'](), _0x2535df['Setting'];
}
async function _0x1fbd21() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1951f0 = 0x0; _0x1951f0 < _0x4b348b['length']; _0x1951f0++) {
        console['log']('\x20(' + _0x1951f0 + ')\x20' + _0x4b348b[_0x1951f0]);
    }
    console['log']('');
    var _0x2c24cd = await _0x49c478['get']('Task');
    if (_0x2c24cd['Task'] > _0x4b348b['length'] - 0x1 || isNaN(_0x2c24cd['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1aa4bf(0x3e8), _0x1fbd21();
    var _0x47203b = _0x33b6f0['readFileSync']('../tasks/' + _0x4b348b[_0x2c24cd['Task']], 'utf-8');
    return _0x3d761e = _0x5c5d12['parse'](_0x47203b, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5aeedd['blue'](_0x4b348b[_0x2c24cd['Task']])), _0x26a961 = _0x4b348b[_0x2c24cd['Task']], _0x3d761e;
}
async function _0x2976a9() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5b6ac5 = 0x0; _0x5b6ac5 < _0x5a4e0e['length']; _0x5b6ac5++) {
        console['log']('\x20(' + _0x5b6ac5 + ')\x20' + _0x5a4e0e[_0x5b6ac5]);
    }
    console['log']('');
    var _0x427187 = await _0x49c478['get']('Proxies');
    if (_0x427187['Proxies'] > _0x5a4e0e['length'] - 0x1 || isNaN(_0x427187['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1aa4bf(0x3e8), _0x2976a9();
    var _0x3a5f67 = _0x33b6f0['readFileSync']('../proxies/' + _0x5a4e0e[_0x427187['Proxies']], 'utf-8')['split']('\x0a');
    let _0x166787 = _0x3a5f67['map']((_0x38b0dd, _0x259754) => {
        sanatizeProxy = _0x38b0dd['replace']('\x0d', '');
        if (_0x3a5f67[_0x259754 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2184df = _0x5a4e0e[_0x427187['Proxies']], console['clear'](), _0x166787;
}
async function _0x39187d() {
    var _0x104b32 = await _0x49c478['get']('Value');
    return console['clear'](), _0x104b32['Value'];
}
async function _0x4fd3f3(_0x4c6136) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x209ab3 = 0x0; _0x209ab3 < _0x4c6136['length']; _0x209ab3++) {
        console['log']('\x20(' + _0x209ab3 + ')\x20[' + _0x4c6136[_0x209ab3]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1726a6 = await _0x49c478['get']('Module');
    return _0x1726a6['Module'];
}
async function _0x2ea832() {
    var _0x32f368 = await _0x49c478['get']('Password');
    return console['clear'](), _0x32f368['Password'];
}
;
async function _0x6a1ab9() {
    var _0x1878d2 = await _0x49c478['get']('Links');
    return _0x1878d2['Links'];
}
;
async function _0xd525b0() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x34793c = 0x0; _0x34793c < _0x5d9290['length']; _0x34793c++) {
        console['log']('\x20(' + _0x34793c + ')\x20' + _0x5d9290[_0x34793c]);
    }
    ;
    console['log']();
    let _0x4c52e7 = await _0x49c478['get']('Product');
    return console['clear'](), _0x4c52e7['Product'];
}
;
function _0x43e084() {
    var _0x3f0a8b = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3f0a8b;
}
;
function _0x5059a4() {
    var _0x478b5b = new Date(Date['now']())['toLocaleString']();
    return _0x478b5b['replace'](',', '');
}
async function _0xdef3ae(_0x16323a, _0x1d70a8) {
    let _0x2c2f74 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2ee773 != 'devkey') {
        await _0x51ae83['post'](_0x16323a, _0x1d70a8, _0x2c2f74);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xa054f1(_0x4ff9ab, _0x54e34b, _0x2dd367, _0x466bbe, _0x417130) {
    if (!_0x466bbe && _0x2dd367 == 'dev') {
        var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x54e34b['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x54e34b['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x4ff9ab['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x240058['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x50ab9a,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x4ff9ab['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x4ff9ab['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2ee773,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x524417['data'];
    } else {
        if (_0x466bbe && _0x2dd367 == 'dev') {
            var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x50ab9a,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x54e34b['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x4ff9ab['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x240058['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x417130,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x4ff9ab['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x4ff9ab['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2ee773,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x524417['data'];
        } else {
            if (_0x2dd367 == 'pub') {
                var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x54e34b['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x4ff9ab['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x240058['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x4ff9ab['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2ee773,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x524417['data'];
            } else {
                if (_0x2dd367 == 'acc' && !_0x466bbe) {
                    var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x50ab9a,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x54e34b['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x240058['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2ee773,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x524417['data'];
                } else {
                    if (_0x2dd367 == 'acc' && _0x466bbe) {
                        var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x50ab9a,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x417130,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x54e34b['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x240058['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2ee773,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x524417['data'];
                    } else {
                        if (_0x2dd367 == 'open') {
                            var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x12c494)['addFields']({
                                'name': 'User',
                                'value': '' + _0x50ab9a,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2ee773,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x524417['data'];
                        } else {
                            if (!_0x466bbe && _0x2dd367 == 'ver') {
                                var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x50ab9a,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x54e34b['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x240058['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2ee773,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x524417['data'];
                            } else {
                                if (_0x466bbe && _0x2dd367 == 'ver') {
                                    var _0x524417 = new _0x151939()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x54e34b['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x50ab9a,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x417130,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x54e34b['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x240058['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2ee773,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x524417['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x1fd6da(_0x3d36a8, _0x3d9b31) {
    var _0x367f90 = _0x3d36a8[_0x3d9b31]['Address1']['split'](''), _0x43030a = _0x3d36a8[_0x3d9b31]['Address2']['split'](''), _0x130485 = _0x3d36a8[_0x3d9b31]['Email']['split']('@');
    for (var _0x44b985 = 0x0; _0x44b985 < _0x367f90['length']; _0x44b985++) {
        if (_0x367f90[_0x44b985] == 'X') {
            var _0xdfc422 = Math['round'](Math['random']() * (_0x26cbbc['length'] - 0x1));
            _0x367f90[_0x44b985] = _0x331c6e[_0xdfc422];
        }
    }
    ;
    for (var _0x44b985 = 0x0; _0x44b985 < _0x43030a['length']; _0x44b985++) {
        if (_0x43030a[_0x44b985] == 'X') {
            var _0xdfc422 = Math['round'](Math['random']() * (_0x26cbbc['length'] - 0x1));
            _0x43030a[_0x44b985] = _0x331c6e[_0xdfc422];
        }
    }
    ;
    _0x3d36a8[_0x3d9b31]['FirstName'] == 'RANDOM' && (_0x3d36a8[_0x3d9b31]['FirstName'] = _0x19ac6b['first']());
    _0x3d36a8[_0x3d9b31]['LastName'] == 'RANDOM' && (_0x3d36a8[_0x3d9b31]['LastName'] = _0x19ac6b['last']());
    _0x130485[0x0] == 'RANDOM' ? _0x130485[0x0] = '' + _0x19ac6b['first']() + _0x19ac6b['last']() + _0x9e2068(0x1, 0x270f) + '@' : _0x130485[0x0] = _0x130485[0x0] + '@';
    _0x3d36a8[_0x3d9b31]['Email'] = _0x130485['join'](''), _0x3d36a8[_0x3d9b31]['Address1'] = _0x367f90['join'](''), _0x3d36a8[_0x3d9b31]['Address2'] = _0x43030a['join']('');
    _0x3d36a8[_0x3d9b31]['Phone'] == 'RANDOM' && (_0x3d36a8[_0x3d9b31]['Phone'] = '0' + _0x9e2068(0x5f5e100, 0x3b9ac9ff));
    if (_0x3d36a8[_0x3d9b31]['Follower'] == 'RANDOM') {
        var _0x2f8fb4 = _0x9e2068(0x1, 0x270f);
        _0x3d36a8[_0x3d9b31]['Follower'] = '' + _0x19ac6b['first']() + _0x19ac6b['last']() + _0x2f8fb4 + '\x20';
    }
    _0x3d36a8[_0x3d9b31]['HouseNumber'] == 'RANDOM' && (_0x3d36a8[_0x3d9b31]['HouseNumber'] = _0x9e2068(0x1, 0xc8));
    if (_0x3d36a8[_0x3d9b31]['Address1'] == 'RANDOM') {
        var _0x34c165 = Math['round'](Math['random']() * (_0x26cbbc['length'] - 0x1)), _0x1c375b = _0x331c6e[_0x34c165];
        _0x3d36a8[_0x3d9b31]['Address1'] = _0x19ac6b['last']() + 'straat', _0x3d36a8[_0x3d9b31]['Zip'] == '' && (_0x3d36a8[_0x3d9b31]['Postcode'] = _0x9e2068(0x3e8, 0x270f) + '\x20' + _0x1c375b + _0x1c375b, _0x3d36a8[_0x3d9b31]['Zip'] = _0x3d36a8[_0x3d9b31]['Postcode']), _0x3d36a8[_0x3d9b31]['HouseNumber'] = '' + _0x9e2068(0x1, 0xc8);
    }
    return;
}
;
async function _0x15a9ff(_0x16e32a, _0xcd491f) {
    _0x33b6f0['appendFileSync']('../failed-tasks.csv', _0x5059a4() + ',' + _0xcd491f['store'] + ',' + _0xcd491f['name'] + ',' + _0x16e32a['Url'] + ',' + _0x16e32a['Size'] + ',' + _0x16e32a['Follower'] + ',' + _0x16e32a['FirstName'] + ',' + _0x16e32a['LastName'] + ',' + _0x16e32a['Address1'] + ',' + _0x16e32a['Address2'] + ',' + _0x16e32a['HouseNumber'] + ',' + _0x16e32a['Zip'] + ',' + _0x16e32a['City'] + ',' + _0x16e32a['State'] + ',' + _0x16e32a['Country'] + ',' + _0x16e32a['Phone'] + ',' + _0x16e32a['Email'] + ',' + _0x16e32a['Password'] + ',' + _0x16e32a['PaymentMethod'] + ',' + _0x16e32a['CardType'] + ',' + _0x16e32a['NameOnCard'] + ',' + _0x16e32a['CardNumber'] + ',' + _0x16e32a['ExpiryDate'] + ',' + _0x16e32a['CVV'] + ',' + _0x16e32a['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xe2d82b(_0x44c3d4, _0x3b6ccd) {
    _0x33b6f0['appendFileSync']('../successful-tasks.csv', _0x5059a4() + ',' + _0x3b6ccd['store'] + ',' + _0x3b6ccd['name'] + ',' + _0x44c3d4['Url'] + ',' + _0x44c3d4['Size'] + ',' + _0x44c3d4['Follower'] + ',' + _0x44c3d4['FirstName'] + ',' + _0x44c3d4['LastName'] + ',' + _0x44c3d4['Address1'] + ',' + _0x44c3d4['Address2'] + ',' + _0x44c3d4['HouseNumber'] + ',' + _0x44c3d4['Zip'] + ',' + _0x44c3d4['City'] + ',' + _0x44c3d4['State'] + ',' + _0x44c3d4['Country'] + ',' + _0x44c3d4['Phone'] + ',' + _0x44c3d4['Email'] + ',' + _0x44c3d4['Password'] + ',' + _0x44c3d4['PaymentMethod'] + ',' + _0x44c3d4['CardType'] + ',' + _0x44c3d4['NameOnCard'] + ',' + _0x44c3d4['CardNumber'] + ',' + _0x44c3d4['ExpiryDate'] + ',' + _0x44c3d4['CVV'] + ',' + _0x44c3d4['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4b0b2f() {
    let _0x4aa48c = proxyFile['split']('\x0a'), _0x653e3 = _0x4aa48c['map']((_0x4f840a, _0x5cfded) => {
        sanatizeProxy = _0x4f840a['replace']('\x0d', '');
        if (_0x4aa48c[_0x5cfded + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x653e3;
}
;
async function _0x457ae3(_0xf48e5e, _0x2ff237) {
    if (_0x14b731 != 'yes')
        var _0x14b731 = '', _0x13429e = 0x0;
    var _0x4851d5 = [];
    async function _0x20b065() {
        console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify?');
        var _0x4eb1ba = await _0x49c478['get']('Quantity')['Quantity'], _0x5d238a = new _0x93d2c6({
            'user': _0x240058['masterMail'],
            'password': _0x240058['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x5ab63b(_0x17d4a2) {
            _0x5d238a['openBox']('INBOX', ![], _0x17d4a2);
        }
        _0x5d238a['once']('ready', function () {
            _0x5ab63b(function (_0x158876, _0x8d1f79) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x158876)
                    throw _0x158876;
                _0x5d238a['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3334cd, _0x5076de) {
                    if (!_0x5076de || !_0x5076de['length'])
                        console['log'](_0x43e084() + '\x20[' + _0xf48e5e['name'] + ']\x20No\x20mails\x20found'), _0x5d238a['end']();
                    else {
                        var _0x42e508 = _0x5d238a['seq']['fetch'](_0x5076de, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x42e508['on']('message', function (_0x56cf2a, _0x341558) {
                            var _0x1e0b31 = '(#' + _0x341558 + ')\x20';
                            _0x56cf2a['on']('body', function (_0x3bb24a, _0x5d2c06) {
                                _0x3aa20a(_0x3bb24a, (_0x14758d, _0x45eddc) => {
                                    if (_0x45eddc['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x45eddc['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x45eddc['text']['split']('[')[0x2];
                                        var _0x55d8ff = mes['split'](']')[0x0];
                                        _0x4851d5['push'](_0x55d8ff);
                                    }
                                });
                            }), _0x56cf2a['once']('end', function () {
                            });
                        }), _0x42e508['once']('error', function (_0x578873) {
                            console['log']('Fetch\x20error:\x20' + _0x578873);
                        }), _0x42e508['once']('end', function () {
                            _0x5d238a['end']();
                        });
                    }
                });
            });
        }), _0x5d238a['once']('error', function (_0x9055f1) {
            console['log'](_0x5aeedd['red'](_0x9055f1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x5d238a['once']('end', async function () {
        }), _0x5d238a['connect']();
    }
    try {
        _0x20b065(), await _0x1aa4bf(0xfa0), console['log']('Found\x20' + _0x4851d5['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1aa4bf(0xfa0);
    }
    var _0xa07204;
    _0x5ed37a('' + _0xf48e5e);
    var _0x1bea33 = _0x2ff237[0x0]['split'](':'), _0x251a51;
    try {
        _0x251a51 = await _0x1a81d0['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1bea33[0x0] + ':' + _0x1bea33[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x251a51 = await _0x1a81d0['launch']({
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1bea33[0x0] + ':' + _0x1bea33[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Getting\x20Session');
        const _0x1517d0 = await _0x251a51['newPage']();
        await _0x1517d0['authenticate']({
            'username': '' + _0x1bea33[0x2],
            'password': '' + _0x1bea33[0x3]
        }), await _0x1517d0['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1517d0, await _0x1517d0['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1517d0['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Successfully\x20logged\x20in'), await _0x1aa4bf(0x2710);
        } catch (_0x13dce9) {
            throw new Error('Login\x20session\x20expired\x20' + _0x13dce9);
        }
        for (var _0x3c9496 = 0x0; _0x3c9496 < _0x4851d5['length']; _0x3c9496++) {
            console['log'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5ed37a(_0xf48e5e + '\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20/\x20' + _0x4851d5['length']);
            const _0x49c694 = await _0x251a51['newPage']();
            await _0x49c694['goto']('' + _0x4851d5[_0x3c9496], { 'waitUntil': 'networkidle2' }), await _0x1aa4bf(0xbb8);
            try {
                const _0x760d99 = await _0x49c694['$']('#challenge-heading');
                _0x760d99 && (console['log'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20:\x20' + _0x5aeedd['yellow']('2FA\x20Required')), await _0x49c694['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1aa4bf(0x9c40), await _0x49c694['waitForSelector']('#payment-submit-btn'), await _0x49c694['$eval']('#payment-submit-btn', _0x1fb042 => _0x1fb042['click']()), await _0x49c694['click']('#payment-submit-btn');
                try {
                    await _0x49c694['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1aa4bf(0x5dc), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x383dfe) {
                    _0x14b731 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x383dfe['message']);
                } finally {
                    if (_0x14b731 == 'yes' && _0x13429e != 0x2) {
                        console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0xf48e5e['name'] + ']\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20:\x20Retrying\x20(' + _0x13429e + '\x20/\x205)')), _0x3c9496 = _0x3c9496 - 0x1, _0x13429e = _0x13429e + 0x1;
                        continue;
                    }
                    _0x14b731 == 'yes' && _0x13429e >= 0x2 && (_0x15a9ff(csv[_0x3c9496], _0xf48e5e), _0x14b731 = 'no', _0x13429e = 0x0), await _0x49c694['close'](), await _0x1aa4bf(0x4650);
                }
            } catch (_0x40ce34) {
                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0xf48e5e + ']\x20Task\x20' + (_0x3c9496 + 0x1) + '\x20:\x20' + _0x40ce34));
            }
        }
    } catch (_0x424006) {
        console['log'](_0x5aeedd['red']('' + _0x424006));
    } finally {
        await _0x251a51['close']();
    }
}
const _0x2613f8 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x421eb1, _0x1d275d, _0x5d6b82) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x39844e = 0x0; _0x39844e < _0x1d275d['length']; _0x39844e++) {
                        if (_0x73fd8e != 'yes')
                            var _0x73fd8e = '', _0x14b6ce = 0x0;
                        var _0x4f0a70;
                        try {
                            await _0x1fd6da(_0x1d275d, _0x39844e);
                        } catch {
                            _0x73fd8e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5ed37a(_0x421eb1['name'] + '\x20Task\x20' + (_0x39844e + 0x1) + '\x20/\x20' + _0x1d275d['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x406383 = [
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
                        ], _0x4fd192 = Math['round'](Math['random']() * (_0x406383['length'] - 0x1));
                        _0x1d275d[_0x39844e]['Size'] == 'RANDOM' && (_0x1d275d[_0x39844e]['Size'] = _0x406383[_0x4fd192]);
                        var _0x476771 = Math['round'](Math['random']() * (_0x5d6b82['length'] - 0x1)), _0x58095a = _0x5d6b82[_0x476771]['split'](':'), _0xc3ef20;
                        try {
                            _0xc3ef20 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x58095a[0x0] + ':' + _0x58095a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc3ef20 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x58095a[0x0] + ':' + _0x58095a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x539dce = await _0xc3ef20['newPage']();
                            await _0x539dce['authenticate']({
                                'username': '' + _0x58095a[0x2],
                                'password': '' + _0x58095a[0x3]
                            }), await _0x539dce['setRequestInterception'](!![]), _0x539dce['on']('request', _0x1609cf => {
                                _0x1609cf['resourceType']() === 'image' || _0x1609cf['resourceType']() === 'font' || _0x1609cf['resourceType']() === 'media' ? _0x1609cf['abort']() : _0x1609cf['continue']();
                            }), await _0x539dce['goto'](_0x1d275d[_0x39844e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x539dce['waitForSelector']('#accept-all-gdpr'), await _0x539dce['click']('#accept-all-gdpr'), await _0x539dce['waitForSelector']('#raffles-product'), await _0x1aa4bf(0x3e8), await _0x539dce['$eval']('#raffles-product', _0x451f8d => _0x451f8d['click']()), await _0x1aa4bf(0x1388), await _0x539dce['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x19d73c = await _0x539dce['$']('.fancybox-inner\x20>\x20iframe'), _0x1fa891 = await _0x19d73c['contentFrame']();
                            console['log'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Checking\x20Information'), await _0x1fa891['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x1aa4bf(0x1f4), await _0x1fa891['type']('input[name=\x22sm-form-email\x22]', _0x1d275d[_0x39844e]['Email']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-name\x22]', _0x1d275d[_0x39844e]['FirstName'] + '\x20' + _0x1d275d[_0x39844e]['LastName']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-street\x22]', _0x1d275d[_0x39844e]['Address1'] + '\x20' + _0x1d275d[_0x39844e]['HouseNumber'] + '\x20' + _0x1d275d[_0x39844e]['Address2']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-city\x22]', _0x1d275d[_0x39844e]['City']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-province\x22]', _0x1d275d[_0x39844e]['State']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-zip\x22]', _0x1d275d[_0x39844e]['Zip']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-country\x22]', _0x1d275d[_0x39844e]['Country']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-form-phone\x22]', _0x1d275d[_0x39844e]['Phone']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x1d275d[_0x39844e]['Follower']), await _0x1aa4bf(0xc8), await _0x1fa891['type']('input[name=\x22sm-cst.size\x22]', _0x1d275d[_0x39844e]['Size']), await _0x1aa4bf(0x1f4), await _0x1fa891['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x1aa4bf(0x1f4), await _0x1fa891['click']('.icheckbox_simple-custom'), await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1fa891['$eval']('form', _0x50843b => _0x50843b['submit']()), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x73fd8e = '';
                            var _0x5fbc1d = await _0xa054f1(_0x1d275d[_0x39844e], _0x421eb1, 'dev', ![]), _0x3d0c0c = await _0xa054f1(_0x1d275d[_0x39844e], _0x421eb1, 'pub', ![]);
                            const _0x448cc9 = {
                                'succesDEVMSG': { 'embeds': [_0x5fbc1d] },
                                'succesPUBMSG': { 'embeds': [_0x3d0c0c] }
                            };
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x448cc9['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x448cc9['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x448cc9['succesPUBMSG']);
                            } catch (_0x12b84c) {
                                console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x12b84c));
                            }
                        } catch (_0x30cf1) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20' + _0x30cf1)), _0x4f0a70 = '' + _0x30cf1;
                            var _0x16227d = await _0xa054f1(_0x1d275d[_0x39844e], _0x421eb1, 'dev', !![], _0x4f0a70), _0x5fbc1d = await _0xa054f1(_0x1d275d[_0x39844e], _0x421eb1, 'dev', ![]), _0x3d0c0c = await _0xa054f1(_0x1d275d[_0x39844e], _0x421eb1, 'pub', ![]);
                            const _0x30fabc = {
                                'succesDEVMSG': { 'embeds': [_0x5fbc1d] },
                                'succesPUBMSG': { 'embeds': [_0x3d0c0c] }
                            };
                            _0x30fabc['errorDEV'] = { 'embeds': [_0x16227d] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x30fabc['errorDEV']), await _0xdef3ae(_0x1170d2, _0x30fabc['errorDEV']), _0x30cf1 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x73fd8e = 'yes');
                        } finally {
                            _0xc3ef20['close']();
                            if (_0x73fd8e == 'yes' && _0x14b6ce != 0x5 && _0x4f0a70 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Task\x20' + (_0x39844e + 0x1) + '\x20:\x20Retrying\x20(' + _0x14b6ce + '\x20/\x205)\x20')), _0x39844e = _0x39844e - 0x1, _0x14b6ce = _0x14b6ce + 0x1;
                                continue;
                            }
                            _0x73fd8e == 'yes' && _0x14b6ce >= 0x5 && (_0x15a9ff(_0x1d275d[_0x39844e], _0x421eb1), _0x73fd8e = 'no', _0x14b6ce = 0x0), console['log'](_0x43e084() + '\x20[' + _0x421eb1['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x762c87, _0x1b632b) {
                    var _0x17eaa1 = [];
                    async function _0x3331fe() {
                        var _0x51d6cf = new _0x93d2c6({
                            'user': _0x240058['masterMail'],
                            'password': _0x240058['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xd39167(_0x19aa42) {
                            _0x51d6cf['openBox']('INBOX', ![], _0x19aa42);
                        }
                        _0x51d6cf['once']('ready', function () {
                            _0xd39167(function (_0x4bf3ee, _0xc1a2ef) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4bf3ee)
                                    throw _0x4bf3ee;
                                _0x51d6cf['seq']['search'](['UNSEEN'], function (_0x42d2b1, _0x4d1447) {
                                    if (!_0x4d1447 || !_0x4d1447['length'])
                                        console['log'](_0x43e084() + '\x20[' + _0x762c87['name'] + ']\x20No\x20mails\x20found'), _0x51d6cf['end']();
                                    else {
                                        var _0x3d8528 = _0x51d6cf['seq']['fetch'](_0x4d1447, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3d8528['on']('message', function (_0x16157d, _0x2e82be) {
                                            var _0x2db921 = '(#' + _0x2e82be + ')\x20';
                                            _0x16157d['on']('body', function (_0x18aede, _0x21226e) {
                                                _0x3aa20a(_0x18aede, (_0x212452, _0x2ea015) => {
                                                    if (_0x2ea015['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x4b3528 = _0x2ea015['html']['split']('\x0a');
                                                        for (var _0x340276 = 0x0; _0x340276 < _0x4b3528['length']; _0x340276++) {
                                                            if (_0x4b3528[_0x340276]['includes']('salesmanago') && _0x4b3528[_0x340276]['includes']('<td') && _0x4b3528[_0x340276]['includes']('href')) {
                                                                var _0x33d490 = _0x4b3528[_0x340276]['split']('href=\x22'), _0x5f4d1a = _0x33d490[0x1]['split']('\x22')[0x0];
                                                                _0x17eaa1['push'](_0x5f4d1a);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x16157d['once']('end', function () {
                                            });
                                        }), _0x3d8528['once']('error', function (_0x458fda) {
                                            console['log']('Fetch\x20error:\x20' + _0x458fda);
                                        }), _0x3d8528['once']('end', function () {
                                            _0x51d6cf['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x51d6cf['once']('error', function (_0x11fea5) {
                            console['log'](_0x5aeedd['red'](_0x11fea5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x51d6cf['once']('end', async function () {
                        }), _0x51d6cf['connect']();
                    }
                    async function _0x57165b(_0x4768, _0x18a192, _0x27f7f1) {
                        for (var _0xc9f279 = 0x0; _0xc9f279 < _0x18a192['length']; _0xc9f279++) {
                            async function _0x4d9098(_0x345a17, _0x2c610b, _0x3dcd27, _0x421d67, _0x4bf461) {
                                var _0x1af3db, _0x166f25 = {}, _0x5cf56f = [], _0x3f615c = {}, _0x164caa = [
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
                                ], _0x14f407 = Math['round'](Math['random']() * (_0x164caa['length'] - 0x1));
                                _0x421d67[_0x345a17]['Size'] == 'RANDOM' && (_0x421d67[_0x345a17]['Size'] = _0x164caa[_0x14f407]);
                                !_0x421d67 && (_0x421d67 = {});
                                if (_0x240058['useRandomProxy'] = ![])
                                    var _0x52b43f = _0x4bf461[_0x345a17]['split'](':');
                                else
                                    var _0x17ec8a = Math['round'](Math['random']() * (_0x4bf461['length'] - 0x1)), _0x52b43f = _0x4bf461[_0x17ec8a]['split'](':');
                                var _0xc8289 = {
                                    'jar': _0x2d7acd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3dcd27['url'],
                                    'headers': _0x3dcd27['headers'],
                                    'body': JSON['stringify'](_0x166f25),
                                    'proxy': 'http://' + _0x52b43f[0x2] + ':' + _0x52b43f[0x3] + '@' + _0x52b43f[0x0] + ':' + _0x52b43f[0x1]
                                };
                                return _0x2c610b != 'ver' && (_0xc8289['url'] = _0x3dcd27['url'], _0xc8289['headers'] = _0x3dcd27['headers']), _0x2c610b == 'ver' && (_0xc8289['method'] = 'GET', _0xc8289['url'] = _0x421d67[_0x345a17]), new Promise(function (_0x3180ea, _0x5d6970) {
                                    callback = async (_0x4822f6, _0x3375dc, _0x30745b) => {
                                        if (!_0x4822f6 && _0x3375dc['statusCode'] == 0xca || !_0x4822f6 && _0x3375dc['statusCode'] == 0xc8) {
                                            if (_0x2c610b != 'ver') {
                                                var _0x238c0b = await _0xa054f1(_0x421d67[_0x345a17], _0x3dcd27, 'dev', ![]), _0x1711f3 = await _0xa054f1(_0x421d67[_0x345a17], _0x3dcd27, 'pub', ![]);
                                                const _0x44ad55 = {
                                                    'succesDEVMSG': { 'embeds': [_0x238c0b] },
                                                    'succesPUBMSG': { 'embeds': [_0x1711f3] }
                                                };
                                                if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                                    try {
                                                        await _0xdef3ae(_0x240058['webhook'], _0x44ad55['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x44ad55['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                                try {
                                                    await _0xdef3ae(_0x591af7, _0x44ad55['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe2d82b(_0x421d67[_0x345a17], _0x3dcd27);
                                            }
                                            _0x3180ea(console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x3dcd27['name'] + ']\x20Task\x20' + (_0x345a17 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2c610b != 'ver') {
                                                var _0x3985c9 = '' + _0x4822f6, _0x21fc2e = await _0xa054f1(_0x421d67[_0x345a17], _0x3dcd27, 'dev', !![], _0x3985c9), _0x226263 = {};
                                                _0x226263['errorDEV'] = { 'embeds': [_0x21fc2e] }, _0x15a9ff(_0x421d67[_0x345a17], _0x3dcd27), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x226263['errorDEV']), await _0xdef3ae(_0x1170d2, _0x226263['errorDEV']);
                                            }
                                            _0x5d6970(console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x3dcd27['name'] + ']\x20Task\x20' + (_0x345a17 + 0x1) + ':\x20' + _0x4822f6)));
                                        }
                                    };
                                    try {
                                        _0x2c610b != 'ver' ? console['log'](_0x43e084() + '\x20[' + _0x3dcd27['name'] + ']\x20Task\x20' + (_0x345a17 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x166f25['data']['attributes']['email']) : console['log'](_0x43e084() + '\x20[' + _0x3dcd27['name'] + ']\x20Task\x20' + (_0x345a17 + 0x1) + ':\x20Fetching\x20Response'), _0x2d5775(_0xc8289, callback);
                                    } catch (_0xa5aa79) {
                                        console['log'](_0x43e084() + '\x20Task\x20' + (_0x345a17 + 0x1) + ':\x20' + _0xa5aa79);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4d9098(_0xc9f279, 'ver', _0x4768, _0x18a192, _0x27f7f1), console['log'](_0x43e084() + '\x20[' + _0x4768['name'] + ']\x20Sleeping\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                            } catch (_0x193166) {
                            }
                        }
                    }
                    try {
                        _0x3331fe(), await _0x1aa4bf(0xfa0), console['log']('Found\x20' + _0x17eaa1['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x57165b(_0x762c87, _0x17eaa1, _0x1b632b);
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
            'function': async function (_0x56cf28, _0x12aefe, _0x1c7db2) {
                for (var _0x24e48c = 0x0; _0x24e48c < _0x12aefe['length']; _0x24e48c++) {
                    _0x240058['AfewDelay'] = _0x240058['delay'];
                    var _0x9e4012;
                    if (_0x40df2d != 'yes')
                        var _0x40df2d = '', _0x3f9764 = 0x0;
                    var _0x1d592d = _0x12aefe[_0x24e48c]['Url'];
                    _0x5ed37a(_0x56cf28['name'] + '\x20Task\x20' + (_0x24e48c + 0x1) + '\x20/\x20' + _0x12aefe['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                    try {
                        await _0x1fd6da(_0x12aefe, _0x24e48c);
                    } catch {
                        _0x40df2d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x14dee1(_0x35a336) {
                        const _0x1350bb = _0x33b6f0['readFileSync']('../successful-tasks.csv', 'utf8'), _0x3d273b = _0x5c5d12['parse'](_0x1350bb, { 'header': !![] })['data'];
                        let _0x670899 = ![];
                        for (var _0x2d3c73 of _0x3d273b) {
                            if (_0x2d3c73['Url'] == _0x35a336['Url'] && _0x2d3c73['Email'] == _0x35a336['Email']) {
                                _0x670899 = !![];
                                break;
                            }
                        }
                        return _0x670899;
                    }
                    if (await _0x14dee1(_0x12aefe[_0x24e48c]) == !![]) {
                        console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4787c4 = await _0xa054f1(_0x12aefe[_0x24e48c], _0x56cf28, 'dev', ![]), _0x26687d = await _0xa054f1(_0x12aefe[_0x24e48c], _0x56cf28, 'pub', ![]);
                    const _0x2b667d = {
                        'succesDEVMSG': { 'embeds': [_0x4787c4] },
                        'succesPUBMSG': { 'embeds': [_0x26687d] }
                    };
                    if (_0x12aefe[_0x24e48c]['Email'] == '' || _0x12aefe[_0x24e48c]['FirstName'] == '' || _0x12aefe[_0x24e48c]['LastName'] == '' || _0x12aefe[_0x24e48c]['Country'] == '' || _0x12aefe[_0x24e48c]['Size'] == '' || _0x12aefe[_0x24e48c]['Address1'] == '' || _0x12aefe[_0x24e48c]['Zip'] == '') {
                        console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x240058['useRandomProxy'] = ![])
                        var _0x20ed91 = _0x1c7db2[_0x24e48c]['split'](':');
                    else
                        var _0x4c7674 = Math['round'](Math['random']() * (_0x1c7db2['length'] - 0x1)), _0x20ed91 = _0x1c7db2[_0x4c7674]['split'](':');
                    var _0xdd6c4;
                    try {
                        _0xdd6c4 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x20ed91[0x0] + ':' + _0x20ed91[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xdd6c4 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x20ed91[0x0] + ':' + _0x20ed91[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x960fff = JSON['parse'](_0x33b6f0['readFileSync']('sizes.json', 'utf-8')), _0x1d592d = _0x12aefe[_0x24e48c]['Url'], _0x12ef50 = _0x12aefe[_0x24e48c]['Size'], _0x4e4cdd;
                        async function _0x4ab0f0() {
                            var _0x377063 = new _0x51fb2f['CookieJar']();
                            console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0xea19fb;
                            let _0x206215 = {
                                'method': 'GET',
                                'cookieJar': _0x377063,
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
                                'proxy': 'http://' + _0x20ed91[0x2] + ':' + _0x20ed91[0x3] + '@' + _0x20ed91[0x0] + ':' + _0x20ed91[0x1]
                            }, _0x98a24a = _0x1d592d['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x20df8f = _0x98a24a + '.json', _0x462058 = await _0x51ae83(_0x20df8f);
                            console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x19a43b = _0x462058['data']['product']['variants'];
                            if (_0x12ef50 != 'RANDOM') {
                                if (_0x19a43b[0x1]['option1']['includes']('W')) {
                                    const _0x26a17c = _0x960fff['women']['find'](_0x6ab411 => _0x6ab411['EUsize'] === _0x12ef50);
                                    _0x26a17c && (_0x12ef50 = _0x26a17c['size']);
                                } else {
                                    if (_0x19a43b[0x1]['option1']['includes']('Y')) {
                                        const _0x5af476 = _0x960fff['GS']['find'](_0x43e3c7 => _0x43e3c7['EUsize'] === _0x12ef50);
                                        _0x5af476 && (_0x12ef50 = _0x5af476['size']);
                                    } else {
                                        const _0x2f4c30 = _0x960fff['men']['find'](_0xb7ac25 => _0xb7ac25['EUsize'] === _0x12ef50);
                                        _0x2f4c30 && (_0x12ef50 = _0x2f4c30['size']);
                                    }
                                }
                                for (var _0xfe2b53 of _0x19a43b) {
                                    _0xfe2b53['option1'] == _0x12ef50 && (_0xea19fb = _0xfe2b53['id']);
                                }
                            } else {
                                var _0x54218c = Math['round'](Math['random']() * (_0x19a43b['length'] - 0x1));
                                _0xea19fb = _0x19a43b[_0x54218c]['id'];
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x51ae83('https://raffles.afew-store.com/cart/' + _0xea19fb + ':1'), _0x4e4cdd = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x4ab0f0();
                        } catch (_0x3d0b3e) {
                            if (_0x3d0b3e['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x3d0b3e);
                        }
                        const _0x2d937e = await _0xdd6c4['newPage']();
                        await _0x2d937e['setDefaultNavigationTimeout'](0x1d4c0), await _0x2d937e['authenticate']({
                            'username': '' + _0x20ed91[0x2],
                            'password': '' + _0x20ed91[0x3]
                        }), await _0x2d937e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2d937e['setRequestInterception'](!![]), _0x2d937e['on']('request', _0x380d81 => {
                            _0x380d81['resourceType']() === 'image' || _0x380d81['resourceType']() === 'font' || _0x380d81['resourceType']() === 'media' ? _0x380d81['abort']() : _0x380d81['continue']();
                        });
                        try {
                            await _0x2d937e['goto'](_0x4e4cdd, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2d937e['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2d937e['type']('#checkout_email', '' + _0x12aefe[_0x24e48c]['Email']), await _0x1aa4bf(0x320), await _0x2d937e['type']('#checkout_attributes_instagram', '' + _0x12aefe[_0x24e48c]['Follower']), await _0x1aa4bf(0x320), await _0x2d937e['select']('#checkout_shipping_address_country', '' + _0x12aefe[_0x24e48c]['Country']), await _0x2d937e['waitForTimeout'](0x258), await _0x2d937e['type']('#checkout_shipping_address_first_name', '' + _0x12aefe[_0x24e48c]['FirstName']), await _0x2d937e['waitForTimeout'](0x320), await _0x2d937e['type']('#checkout_shipping_address_last_name', '' + _0x12aefe[_0x24e48c]['LastName']), await _0x2d937e['waitForTimeout'](0x2bc), await _0x2d937e['type']('#checkout_shipping_address_address1', _0x12aefe[_0x24e48c]['Address1'] + '\x20' + _0x12aefe[_0x24e48c]['HouseNumber']), await _0x2d937e['waitForTimeout'](0x2bc), await _0x2d937e['type']('#checkout_shipping_address_address2', '' + _0x12aefe[_0x24e48c]['Address2']), await _0x2d937e['waitForTimeout'](0x2bc), await _0x2d937e['type']('#checkout_shipping_address_zip', '' + _0x12aefe[_0x24e48c]['Zip']), await _0x2d937e['waitForTimeout'](0x2bc), await _0x2d937e['type']('#checkout_shipping_address_city', '' + _0x12aefe[_0x24e48c]['City']), await _0x2d937e['waitForTimeout'](0x2bc);
                        if (_0x12aefe[_0x24e48c]['State'] != '')
                            try {
                                const _0x12d4cf = JSON['parse'](_0x33b6f0['readFileSync']('States.json', 'utf8'));
                                await _0x1aa4bf(0x1f4);
                                if (_0x12aefe[_0x24e48c]['State']['length'] > 0x2)
                                    for (let _0x46d555 of _0x12d4cf) {
                                        if (_0x46d555['Province'] == _0x12aefe[_0x24e48c]['State']) {
                                            await _0x2d937e['select']('#checkout_shipping_address_province', _0x46d555['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2d937e['select']('#checkout_shipping_address_province', _0x12aefe[_0x24e48c]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1aa4bf(0x190), _0x2d937e['evaluate'](() => {
                            const _0x3801a9 = document['querySelector']('#continue_button');
                            for (var _0x5b1726 = 0x0; _0x5b1726 < 0x5; _0x5b1726++) {
                                if (_0x3801a9) {
                                    _0x3801a9['click'](), _0x3801a9['click']();
                                    break;
                                } else
                                    _0x1aa4bf(0xfa0);
                            }
                        }), await _0x2d937e['waitForTimeout'](0x9c4);
                        try {
                            await _0x2d937e['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2d937e['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4afe3f => _0x4afe3f['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2d937e['waitForTimeout'](0x7d0), console['log'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2d937e['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1aa4bf(0x3e8), await _0x2d937e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x47297e => _0x47297e['submit']()), await _0x1aa4bf(0x3e8);
                        try {
                            await _0x2d937e['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2d937e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x315162 => _0x315162['submit']());
                        try {
                            await _0x2d937e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x40df2d = 'no', _0xe2d82b(_0x12aefe[_0x24e48c], _0x56cf28), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                try {
                                    await _0xdef3ae(_0x240058['webhook'], _0x2b667d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x2b667d['succesDEVMSG']), await _0x1aa4bf(0xc8);
                            try {
                                await _0xdef3ae(_0x591af7, _0x2b667d['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x17c108) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x50e1d1) {
                        _0x50e1d1['message']['includes']('selector') && (_0x50e1d1 = 'Connection\x20Error');
                        console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20' + _0x50e1d1)), _0x9e4012 = '' + _0x50e1d1;
                        var _0x39d388 = await _0xa054f1(_0x12aefe[_0x24e48c], _0x56cf28, 'dev', !![], _0x9e4012);
                        _0x2b667d['errorDEV'] = { 'embeds': [_0x39d388] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x2b667d['errorDEV']), await _0xdef3ae(_0x1170d2, _0x2b667d['errorDEV']), _0x40df2d = 'yes';
                    } finally {
                        _0xdd6c4 && _0xdd6c4['close']();
                        if (_0x40df2d == 'yes' && _0x3f9764 != 0x5 && _0x9e4012 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x56cf28['name'] + ']\x20Task\x20' + (_0x24e48c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3f9764 + '\x20/\x205)')), _0x24e48c = _0x24e48c - 0x1, _0x3f9764 = _0x3f9764 + 0x1;
                            continue;
                        }
                        _0x40df2d == 'yes' && _0x3f9764 >= 0x5 && (_0x15a9ff(_0x12aefe[_0x24e48c], _0x56cf28), _0x40df2d = 'no', _0x3f9764 = 0x0);
                        if (_0x24e48c + 0x1 == _0x12aefe['length']) {
                            await _0x1aa4bf(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x240058['AfewDelay'] + '\x20ms'), await _0x1aa4bf(_0x240058['AfewDelay']);
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
                'function': async function (_0x22d981, _0x56a2fa, _0x4bb521) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5a6fc6 = 0x0; _0x5a6fc6 < _0x56a2fa['length']; _0x5a6fc6++) {
                        if (_0x25957d != 'yes')
                            var _0x25957d = '', _0x5d8de4 = 0x0;
                        var _0x445b6b;
                        try {
                            await _0x1fd6da(_0x56a2fa, _0x5a6fc6);
                        } catch {
                            _0x25957d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5ed37a(_0x22d981['name'] + '\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20/\x20' + _0x56a2fa['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x3537dd = await _0xa054f1(_0x56a2fa[_0x5a6fc6], _0x22d981, 'acc', ![]);
                        const _0x6f426f = { 'succesDEVMSG': { 'embeds': [_0x3537dd] } }, _0x4a9531 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x8f37fd = Math['round'](Math['random']() * (_0x4bb521['length'] - 0x1)), _0x5d4c29 = _0x4bb521[_0x8f37fd]['split'](':'), _0x51af98;
                        try {
                            _0x51af98 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d4c29[0x0] + ':' + _0x5d4c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x51af98 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d4c29[0x0] + ':' + _0x5d4c29[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2fb66e = await _0x51af98['newPage']();
                            await _0x2fb66e['authenticate']({
                                'username': '' + _0x5d4c29[0x2],
                                'password': '' + _0x5d4c29[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2fb66e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2fb66e['setRequestInterception'](!![]), _0x2fb66e['on']('request', _0xb418f9 => {
                                _0xb418f9['resourceType']() === 'image' ? _0xb418f9['abort']() : _0xb418f9['continue']();
                            });
                            try {
                                await _0x2fb66e['goto']('' + _0x4a9531), await _0x2fb66e['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x25957d = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x2fb66e['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1aa4bf(0x7d0), console['log'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1aa4bf(0x190), await _0x2fb66e['waitForSelector']('#firstname'), await _0x2fb66e['type']('#firstname', _0x56a2fa[_0x5a6fc6]['FirstName'], { 'delay': 0xf0 }), await _0x1aa4bf(0x190), await _0x2fb66e['type']('#lastname', _0x56a2fa[_0x5a6fc6]['LastName'], { 'delay': 0xe6 }), await _0x1aa4bf(0x190), await _0x2fb66e['type']('#email_address', _0x56a2fa[_0x5a6fc6]['Email'], { 'delay': 0x122 }), await _0x1aa4bf(0x190), await _0x2fb66e['type']('#password', _0x56a2fa[_0x5a6fc6]['Password'], { 'delay': 0x82 }), await _0x1aa4bf(0x1f4), await _0x2fb66e['type']('#password-confirmation', _0x56a2fa[_0x5a6fc6]['Password'], { 'delay': 0x7c }), console['log'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1aa4bf(0x2bc), await _0x2fb66e['$eval']('#form-validate', _0xce733b => _0xce733b['submit']()), await _0x1aa4bf(0x1388);
                            const _0x3bf70f = await _0x2fb66e['$']('#email_address-error');
                            if (_0x3bf70f)
                                throw new Error('Invalid\x20Email');
                            const _0x4c5ec1 = await _0x2fb66e['$']('#password-error');
                            if (_0x4c5ec1)
                                throw new Error('Invalid\x20Password');
                            await _0x2fb66e['waitForSelector']('div.mesg-success'), _0x25957d = 'no', console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Account\x20' + _0x56a2fa[_0x5a6fc6]['Email'] + '\x20Generated')), _0x33b6f0['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x56a2fa[_0x5a6fc6]['Email'] + ',' + _0x56a2fa[_0x5a6fc6]['Password']);
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x6f426f['succesDEVMSG']);
                            } catch {
                            }
                            await _0xdef3ae(_0x3dc565, _0x6f426f['succesDEVMSG']), console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x44b234) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20' + _0x44b234)), _0x445b6b = '' + _0x44b234;
                            var _0x2565be = await _0xa054f1(_0x56a2fa[_0x5a6fc6], _0x22d981, 'acc', !![], _0x445b6b);
                            _0x6f426f['errorDEV'] = { 'embeds': [_0x2565be] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x6f426f['errorDEV']), await _0xdef3ae(_0x1170d2, _0x6f426f['errorDEV']), _0x25957d = 'yes';
                        } finally {
                            if (_0x51af98)
                                _0x51af98['close']();
                            if (_0x25957d == 'yes' && _0x5d8de4 != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Task\x20' + (_0x5a6fc6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d8de4 + '\x20/\x205)')), _0x5a6fc6 = _0x5a6fc6 - 0x1, _0x5d8de4 = _0x5d8de4 + 0x1;
                                continue;
                            }
                            _0x25957d == 'yes' && _0x5d8de4 >= 0x5 && (_0x15a9ff(_0x56a2fa[_0x5a6fc6], _0x22d981), _0x25957d = 'no', _0x5d8de4 = 0x0), console['log'](_0x43e084() + '\x20[' + _0x22d981['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x33222f, _0x4de97c) {
                    var _0x4bd3da = ![], _0x18aedd = [];
                    async function _0x7bdf25() {
                        var _0x54733f = new _0x93d2c6({
                            'user': _0x240058['masterMail'],
                            'password': _0x240058['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x250ce5(_0xe54c24) {
                            _0x54733f['openBox']('INBOX', ![], _0xe54c24);
                        }
                        _0x54733f['once']('ready', function () {
                            _0x250ce5(function (_0x138206, _0x59f40f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x138206)
                                    throw _0x138206;
                                _0x54733f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0xc501c9, _0x378867) {
                                    if (!_0x378867 || !_0x378867['length'])
                                        console['log'](_0x43e084() + '\x20[' + _0x33222f['name'] + ']\x20No\x20mails\x20found'), _0x54733f['end']();
                                    else {
                                        var _0x195be9 = _0x54733f['seq']['fetch'](_0x378867, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x195be9['on']('message', function (_0x1357a0, _0xa9e995) {
                                            var _0x5b6283 = '(#' + _0xa9e995 + ')\x20';
                                            _0x1357a0['on']('body', function (_0x4f10cf, _0x2f4fd6) {
                                                _0x3aa20a(_0x4f10cf, (_0x2da1eb, _0x2cc053) => {
                                                    var _0x35d0e8 = _0x2cc053['text']['split']('[')[0x2], _0x2e84e4 = _0x35d0e8['split'](']')[0x0];
                                                    _0x18aedd['push'](_0x2e84e4);
                                                });
                                            }), _0x1357a0['once']('end', function () {
                                            });
                                        }), _0x195be9['once']('error', function (_0x3b89f0) {
                                            console['log']('Fetch\x20error:\x20' + _0x3b89f0), _0x4bd3da = !![];
                                        }), _0x195be9['once']('end', function () {
                                            _0x54733f['end'](), _0x4bd3da = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x54733f['once']('error', function (_0x53eee1) {
                            console['log'](_0x5aeedd['red'](_0x53eee1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4bd3da = !![];
                        }), _0x54733f['once']('end', async function () {
                            _0x4bd3da = !![];
                        }), _0x54733f['connect']();
                    }
                    async function _0x3f5637(_0x1a346d, _0x5f0156, _0x2acd91) {
                        _0x1a81d0['use'](_0x449121());
                        for (var _0x2b7420 = 0x0; _0x2b7420 < _0x5f0156['length']; _0x2b7420++) {
                            if (_0x790a1a != 'yes')
                                var _0x790a1a = '', _0x274688 = 0x0;
                            var _0x5f4fac = Math['round'](Math['random']() * (_0x2acd91['length'] - 0x1)), _0x492e53 = _0x2acd91[_0x5f4fac]['split'](':'), _0x3ba7e5;
                            try {
                                _0x3ba7e5 = await _0x1a81d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x492e53[0x0] + ':' + _0x492e53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3ba7e5 = await _0x1a81d0['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x492e53[0x0] + ':' + _0x492e53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x5f1fe5 = await _0x3ba7e5['newPage']();
                                await _0x5f1fe5['authenticate']({
                                    'username': '' + _0x492e53[0x2],
                                    'password': '' + _0x492e53[0x3]
                                }), console['log'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5f1fe5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f1fe5['setRequestInterception'](!![]), _0x5f1fe5['on']('request', _0x698773 => {
                                    _0x698773['resourceType']() === 'image' || _0x698773['resourceType']() === 'font' || _0x698773['resourceType']() === 'media' ? _0x698773['abort']() : _0x698773['continue']();
                                }), console['log'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x5f1fe5['goto'](_0x5f0156[_0x2b7420]);
                                } catch {
                                    _0x790a1a = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5f1fe5['waitForTimeout'](0xbb8);
                                try {
                                    await _0x5f1fe5['waitForSelector']('.account-nav'), _0x790a1a = 'no', console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x25a16b = await _0xa054f1(null, _0x1a346d, 'ver', ![]);
                                    const _0x49bbde = { 'succesDEVMSG': { 'embeds': [_0x25a16b] } };
                                    await _0xdef3ae(_0x22708b, _0x49bbde['succesDEVMSG']);
                                } catch {
                                    _0x790a1a = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x4c2d97) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20' + _0x4c2d97));
                                var _0x1ba7f1 = _0x4c2d97, _0x218ea6 = await _0xa054f1(null, _0x1a346d, 'ver', !![], _0x1ba7f1);
                                const _0x3123ad = { 'errorDEVMSG': { 'embeds': [_0x218ea6] } };
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3123ad['errorDEVMSG']), await _0xdef3ae(_0x1170d2, _0x3123ad['errorDEVMSG']);
                            } finally {
                                _0x3ba7e5['close']();
                                if (_0x790a1a == 'yes' && _0x274688 != 0x5) {
                                    console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Task\x20' + (_0x2b7420 + 0x1) + '\x20:\x20Retrying\x20(' + _0x274688 + '\x20/\x205)')), _0x2b7420 = _0x2b7420 - 0x1, _0x274688 = _0x274688 + 0x1;
                                    continue;
                                }
                                _0x790a1a == 'yes' && _0x274688 >= 0x5 && (_0x790a1a = 'no', _0x274688 = 0x0), console['log'](_0x43e084() + '\x20[' + _0x1a346d['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                            }
                        }
                    }
                    try {
                        _0x7bdf25();
                        while (!_0x4bd3da) {
                            await _0x1aa4bf(0xfa0);
                        }
                        console['log']('Found\x20' + _0x18aedd['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1aa4bf(0x7d0);
                    }
                    await _0x3f5637(_0x33222f, _0x18aedd, _0x4de97c);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x14de47, _0x309e1a, _0x37a741) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xbef94b = 0x0; _0xbef94b < _0x309e1a['length']; _0xbef94b++) {
                        var _0x5a682a;
                        try {
                            await _0x1fd6da(_0x309e1a, _0xbef94b);
                        } catch {
                            _0x39247e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x263856(_0x3c3f32) {
                            const _0x47ff51 = _0x33b6f0['readFileSync']('../successful-tasks.csv', 'utf8'), _0xa09e0b = _0x5c5d12['parse'](_0x47ff51, { 'header': !![] })['data'];
                            let _0x177188 = ![];
                            for (var _0xf63b65 of _0xa09e0b) {
                                if (_0xf63b65['Url'] == _0x3c3f32['Url'] && _0xf63b65['Email'] == _0x3c3f32['Email']) {
                                    _0x177188 = !![];
                                    break;
                                }
                            }
                            return _0x177188;
                        }
                        if (await _0x263856(_0x309e1a[_0xbef94b]) == !![]) {
                            console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x39247e != 'yes')
                            var _0x39247e = '', _0x169690 = 0x0;
                        _0x5ed37a(_0x14de47['name'] + '\x20Task\x20' + (_0xbef94b + 0x1) + '\x20/\x20' + _0x309e1a['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x1de84f = Math['round'](Math['random']() * (_0x37a741['length'] - 0x1)), _0xa0e1e1 = _0x37a741[_0x1de84f]['split'](':'), _0x3b60b3;
                        try {
                            _0x3b60b3 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa0e1e1[0x0] + ':' + _0xa0e1e1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3b60b3 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xa0e1e1[0x0] + ':' + _0xa0e1e1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ce1e3 = await _0x3b60b3['newPage'](), _0x5304de = await _0x1ce1e3['target']()['createCDPSession'](), { windowId: _0x547a9c } = await _0x5304de['send']('Browser.getWindowForTarget');
                            await _0x1ce1e3['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x23fa68 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x1ce1e3['authenticate']({
                                'username': '' + _0xa0e1e1[0x2],
                                'password': '' + _0xa0e1e1[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ce1e3['goto']('' + _0x309e1a[_0xbef94b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                await _0x1ce1e3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x5304de['send']('Browser.setWindowBounds', {
                                'windowId': _0x547a9c,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1aa4bf(0x1388), await _0x1ce1e3['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1ce1e3['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Logging\x20in'), await _0x1ce1e3['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x5a6d8c => _0x5a6d8c['click']()), await _0x1ce1e3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1ce1e3['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1aa4bf(0x7d0), await _0x1ce1e3['waitForSelector']('#email-login'), await _0x1ce1e3['type']('#email-login', '' + _0x309e1a[_0xbef94b]['Email']), await _0x1aa4bf(0xdac), await _0x1ce1e3['waitForSelector']('#password'), await _0x1ce1e3['type']('#password', '' + _0x309e1a[_0xbef94b]['Password'], { 'delay': 0xe6 }), await _0x1aa4bf(0x157c);
                            try {
                                await _0x1ce1e3['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4cc742 => _0x4cc742['click']());
                            } catch {
                            }
                            try {
                                await _0x1ce1e3['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x3fe3ea) {
                            }
                            await _0x1aa4bf(0x3e8);
                            const _0x4945fa = await _0x1ce1e3['$']('.enteredDraw_container__2KmQ_');
                            if (_0x4945fa)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x309e1a[_0xbef94b]['Size']);
                            try {
                                if (_0x309e1a[_0xbef94b]['Size'] != 'RANDOM') {
                                    var _0x1f54be = _0x309e1a[_0xbef94b]['Size']['replace']('.', ',');
                                    const _0x322acb = await _0x1ce1e3['$x']('//div[contains(text(),\x20' + _0x1f54be + ')]');
                                    await _0x322acb[0x0]['click']();
                                } else {
                                    const _0x2b03cc = await _0x1ce1e3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x276a3b = Math['round'](Math['random']() * (_0x2b03cc['length'] - 0x1));
                                    await _0x2b03cc[_0x276a3b]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0x1aa4bf(0x1f4);
                            const _0x3ae94e = await _0x1ce1e3['$']('.addressList_addressItem__LE2PB');
                            if (_0x3ae94e && _0x309e1a[_0xbef94b]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1ce1e3['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1aa4bf(0x5dc), await _0x1ce1e3['waitForSelector']('#firstname'), await _0x1ce1e3['type']('#firstname', '' + _0x309e1a[_0xbef94b]['FirstName']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['waitForSelector']('#firstname'), await _0x1ce1e3['type']('#lastname', '' + _0x309e1a[_0xbef94b]['LastName']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['waitForSelector']('#firstname'), await _0x1ce1e3['type']('#street', '' + _0x309e1a[_0xbef94b]['Address1']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['waitForSelector']('#firstname'), await _0x1ce1e3['type']('#houseNumber', _0x309e1a[_0xbef94b]['HouseNumber'] + '\x20' + _0x309e1a[_0xbef94b]['Address2']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['waitForSelector']('#firstname'), await _0x1ce1e3['select']('#country_code', '' + _0x309e1a[_0xbef94b]['Country']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['type']('#postcode', '' + _0x309e1a[_0xbef94b]['Zip']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['type']('#city', '' + _0x309e1a[_0xbef94b]['City']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['type']('#telephone', '' + _0x309e1a[_0xbef94b]['Phone']), await _0x1aa4bf(0x1f4), await _0x1ce1e3['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0x1aa4bf(0x9c4);
                            try {
                                await _0x1ce1e3['type']('#instagram_name', '' + _0x309e1a[_0xbef94b]['Follower']), await _0x1ce1e3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1aa4bf(0x5dc);
                            try {
                                await _0x1ce1e3['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0x1aa4bf(0x5dc), await _0x1ce1e3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x27e990 => _0x27e990['click']()), await _0x1aa4bf(0x1388);
                            try {
                                await _0x1ce1e3['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x1ce1e3['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x309e1a[_0xbef94b]['Size'] != 'RANDOM') {
                                    var _0x1f54be = _0x309e1a[_0xbef94b]['Size']['replace']('.', ',');
                                    const _0xbea37a = await _0x1ce1e3['$x']('//div[contains(text(),\x20' + _0x1f54be + ')]');
                                    await _0xbea37a[0x0]['click']();
                                } else {
                                    const _0x5db416 = await _0x1ce1e3['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x276a3b = Math['round'](Math['random']() * (_0x5db416['length'] - 0x1));
                                    await _0x5db416[_0x276a3b]['click']();
                                }
                                await _0x1aa4bf(0x5dc);
                                try {
                                    await _0x1ce1e3['hover']('#instagram_name'), await _0x1ce1e3['type']('#instagram_name', '' + _0x309e1a[_0xbef94b]['Follower']), await _0x1ce1e3['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Retrying\x20(' + _0x169690 + '\x20/\x205)');
                                try {
                                    await _0x1ce1e3['hover']('.checkBox_boxHolder__wLGVe'), await _0x1aa4bf(0x5dc), await _0x1ce1e3['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x1aa4bf(0x157c), await _0x1ce1e3['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2c9f0a => _0x2c9f0a['click']()), await _0x1aa4bf(0x1388), await _0x1ce1e3['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x39247e = 'no', _0xe2d82b(_0x309e1a[_0xbef94b], _0x14de47), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x4b3fdf = await _0xa054f1(_0x309e1a[_0xbef94b], _0x14de47, 'dev', ![]), _0x3766f4 = await _0xa054f1(_0x309e1a[_0xbef94b], _0x14de47, 'pub', ![]);
                            const _0x1f05c4 = {
                                'succesDEVMSG': { 'embeds': [_0x4b3fdf] },
                                'succesPUBMSG': { 'embeds': [_0x3766f4] }
                            };
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x1f05c4['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x1f05c4['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x1f05c4['succesPUBMSG']);
                            } catch (_0x5c17b2) {
                                console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5c17b2));
                            }
                        } catch (_0xbc9fe6) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20' + _0xbc9fe6)), _0x39247e = 'yes', _0x5a682a = '' + _0xbc9fe6;
                            var _0x36636c = await _0xa054f1(_0x309e1a[_0xbef94b], _0x14de47, 'dev', !![], _0x5a682a), _0x4b3fdf = await _0xa054f1(_0x309e1a[_0xbef94b], _0x14de47, 'dev', ![]), _0x3766f4 = await _0xa054f1(_0x309e1a[_0xbef94b], _0x14de47, 'pub', ![]);
                            const _0x8e0281 = {
                                'succesDEVMSG': { 'embeds': [_0x4b3fdf] },
                                'succesPUBMSG': { 'embeds': [_0x3766f4] }
                            };
                            _0x8e0281['errorDEV'] = { 'embeds': [_0x36636c] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x8e0281['errorDEV']), await _0xdef3ae(_0x1170d2, _0x8e0281['errorDEV']);
                        } finally {
                            _0x3b60b3['close']();
                            if (_0x39247e == 'yes' && _0x169690 != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Task\x20' + (_0xbef94b + 0x1) + '\x20:\x20Retrying\x20(' + _0x169690 + '\x20/\x205)')), _0xbef94b = _0xbef94b - 0x1, _0x169690 = _0x169690 + 0x1;
                                continue;
                            }
                            _0x39247e == 'yes' && _0x169690 >= 0x5 && (_0x15a9ff(_0x309e1a[_0xbef94b], _0x14de47), _0x39247e = 'no', _0x169690 = 0x0), console['log'](_0x43e084() + '\x20[' + _0x14de47['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4a0681, _0x4cf4e8) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x2df277;
                    try {
                        const _0x913a40 = _0x33b6f0['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x2df277 = _0x5c5d12['parse'](_0x913a40, { 'header': !![] })['data'];
                    } catch (_0x6d0a33) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x2270a1 = 0x0; _0x2270a1 < _0x2df277['length']; _0x2270a1++) {
                        if (_0x353e59 != 'yes')
                            var _0x353e59 = '', _0x2b3e18 = 0x0;
                        var _0x478aee;
                        _0x5ed37a(_0x4a0681['name'] + '\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20/\x20' + _0x2df277['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x336d39 = await _0xa054f1(_0x2df277[_0x2270a1], _0x4a0681, 'acc', ![]);
                        const _0x457f01 = { 'succesDEVMSG': { 'embeds': [_0x336d39] } }, _0x426900 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x2fd689 = Math['round'](Math['random']() * (_0x4cf4e8['length'] - 0x1)), _0x24b0da = _0x4cf4e8[_0x2fd689]['split'](':'), _0x5cb6bb;
                        try {
                            _0x5cb6bb = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x24b0da[0x0] + ':' + _0x24b0da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5cb6bb = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x24b0da[0x0] + ':' + _0x24b0da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x20ceba = await _0x5cb6bb['newPage']();
                            await _0x20ceba['authenticate']({
                                'username': '' + _0x24b0da[0x2],
                                'password': '' + _0x24b0da[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20ceba['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x20ceba['setRequestInterception'](!![]), _0x20ceba['on']('request', _0x3da082 => {
                                _0x3da082['resourceType']() === 'image' ? _0x3da082['abort']() : _0x3da082['continue']();
                            });
                            try {
                                await _0x20ceba['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x20ceba['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x353e59 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x20ceba['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1aa4bf(0x3e8), await _0x20ceba['type']('#email', _0x2df277[_0x2270a1]['Email']), await _0x1aa4bf(0x1f4), await _0x20ceba['type']('#pass', _0x2df277[_0x2270a1]['Password']), await _0x1aa4bf(0x1f4), await _0x20ceba['$eval']('#login-form', _0x475043 => _0x475043['submit']());
                            try {
                                await _0x20ceba['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0x1aa4bf(0x190);
                            const _0x132326 = await _0x20ceba['evaluate'](() => {
                                const _0x13b3e2 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x13b3e2['map'](_0x5cf03d => _0x5cf03d['alt']);
                            }), _0x400819 = await _0x20ceba['evaluate'](() => {
                                const _0x558d0a = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x558d0a['map'](_0x21aa8e => _0x21aa8e['innerHTML']);
                            }), _0x48934b = await _0x20ceba['$$']('.raffle-winner');
                            if (_0x48934b['length'] < 0x1) {
                                console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x353e59 = 'no';
                                continue;
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20' + _0x48934b['length'] + '\x20Wins\x20Found!');
                            for (var _0x42cca4 = 0x0; _0x42cca4 < _0x48934b['length']; _0x42cca4++) {
                                console['log'](_0x5aeedd['green'](_0x132326[_0x42cca4] + _0x400819[_0x42cca4]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x5df4e7) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20' + _0x5df4e7)), _0x478aee = '' + _0x5df4e7;
                            var _0x108228 = await _0xa054f1(_0x2df277[_0x2270a1], _0x4a0681, 'acc', !![], _0x478aee);
                            _0x457f01['errorDEV'] = { 'embeds': [_0x108228] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x457f01['errorDEV']), await _0xdef3ae(_0x1170d2, _0x457f01['errorDEV']), _0x353e59 = 'yes';
                        } finally {
                            if (_0x5cb6bb)
                                _0x5cb6bb['close']();
                            if (_0x353e59 == 'yes' && _0x2b3e18 != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Task\x20' + (_0x2270a1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2b3e18 + '\x20/\x205)')), _0x2270a1 = _0x2270a1 - 0x1, _0x2b3e18 = _0x2b3e18 + 0x1;
                                continue;
                            }
                            _0x353e59 == 'yes' && _0x2b3e18 >= 0x5 && (_0x15a9ff(_0x2df277[_0x2270a1], _0x4a0681), _0x353e59 = 'no', _0x2b3e18 = 0x0), console['log'](_0x43e084() + '\x20[' + _0x4a0681['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
            'function': async function (_0x136de0, _0x9cac4d, _0x4bccc9) {
                _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x240058['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x382d67 = 0x0; _0x382d67 < _0x9cac4d['length']; _0x382d67++) {
                    var _0x3b0f80;
                    _0x5ed37a(_0x136de0['name'] + '\x20Task\x20' + (_0x382d67 + 0x1) + '\x20/\x20' + _0x9cac4d['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                    try {
                        await _0x1fd6da(_0x9cac4d, _0x382d67);
                    } catch {
                        _0x509f4f = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x372ed5(_0x50df93) {
                        const _0x1ade55 = _0x33b6f0['readFileSync']('../successful-tasks.csv', 'utf8'), _0x5b2e56 = _0x5c5d12['parse'](_0x1ade55, { 'header': !![] })['data'];
                        let _0x211423 = ![];
                        for (var _0x2f58f4 of _0x5b2e56) {
                            if (_0x2f58f4['Url'] == _0x50df93['Url'] && _0x2f58f4['Email'] == _0x50df93['Email']) {
                                _0x211423 = !![];
                                break;
                            }
                        }
                        return _0x211423;
                    }
                    if (await _0x372ed5(_0x9cac4d[_0x382d67]) == !![]) {
                        console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1cb601 = ![];
                    const _0x2e6a13 = _0x33b6f0['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x474bff = _0x5c5d12['parse'](_0x2e6a13, { 'header': !![] })['data'];
                    for (var _0x16166f of _0x474bff) {
                        _0x16166f['Email'] == _0x9cac4d[_0x382d67]['Email'] && (_0x1cb601 = !![]);
                    }
                    if (_0x1cb601 == ![]) {
                        var _0x3b6307;
                        if (_0x9cac4d[_0x382d67]['Url']['endsWith']('/')) {
                            _0x3b6307 = _0x9cac4d[_0x382d67]['Url'] + 'register';
                            if (_0x509f4f != 'yes')
                                var _0x509f4f = '', _0x2ae5ea = 0x0;
                        } else {
                            _0x3b6307 = _0x9cac4d[_0x382d67]['Url'] + '/register';
                            if (_0x509f4f != 'yes')
                                var _0x509f4f = '', _0x2ae5ea = 0x0;
                        }
                        if (_0x9cac4d[_0x382d67]['Email'] == '' || _0x9cac4d[_0x382d67]['FirstName'] == '' || _0x9cac4d[_0x382d67]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x9cac4d[_0x382d67]['Password'] == '' && (_0x9cac4d[_0x382d67]['Password'] = 'JRaffles23!');
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x53175b = _0x4bccc9[_0x382d67]['split'](':');
                        else
                            var _0xd1f083 = Math['round'](Math['random']() * (_0x4bccc9['length'] - 0x1)), _0x53175b = _0x4bccc9[_0xd1f083]['split'](':');
                        var _0x28b8df;
                        try {
                            _0x28b8df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53175b[0x0] + ':' + _0x53175b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x28b8df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53175b[0x0] + ':' + _0x53175b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a9445 = await _0x28b8df['newPage']();
                            await _0x5a9445['authenticate']({
                                'username': '' + _0x53175b[0x2],
                                'password': '' + _0x53175b[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a9445['setRequestInterception'](!![]), _0x5a9445['on']('request', _0x2006d2 => {
                                _0x2006d2['resourceType']() === 'image' || _0x2006d2['resourceType']() === 'font' || _0x2006d2['resourceType']() === 'media' ? _0x2006d2['abort']() : _0x2006d2['continue']();
                            });
                            try {
                                await _0x5a9445['goto'](_0x3b6307);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1aa4bf(0x3e8), await _0x5a9445['waitForSelector']('#email'), await _0x5a9445['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1aa4bf(0x3e8);
                            try {
                                await _0x5a9445['click']('li[data-value=\x22EU\x20' + _0x9cac4d[_0x382d67]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x9cac4d[_0x382d67]['Size']);
                            }
                            await _0x1aa4bf(0x6a4), await _0x5a9445['type']('#email', '' + _0x9cac4d[_0x382d67]['Email']), await _0x1aa4bf(0x352), await _0x5a9445['waitForSelector']('#password'), await _0x5a9445['type']('#password', '' + _0x9cac4d[_0x382d67]['Password']), await _0x1aa4bf(0x352), await _0x5a9445['type']('#phone', '' + _0x9cac4d[_0x382d67]['Phone']), await _0x1aa4bf(0x352), await _0x5a9445['type']('#firstName', '' + _0x9cac4d[_0x382d67]['FirstName']), await _0x1aa4bf(0x352), await _0x5a9445['type']('#lastName', '' + _0x9cac4d[_0x382d67]['LastName']), await _0x1aa4bf(0x352);
                            _0x9cac4d[_0x382d67]['Url']['includes']('footlocker.de') ? await _0x5a9445['type']('#birthdate', _0x9e2068(0x1, 0x1c) + '.' + _0x9e2068(0x1, 0xc) + '.' + _0x9e2068(0x7c6, 0x7d3)) : await _0x5a9445['type']('#birthdate', _0x9e2068(0x1, 0x1c) + '-' + _0x9e2068(0x1, 0xc) + '-' + _0x9e2068(0x7c6, 0x7d3));
                            await _0x1aa4bf(0x352), await _0x5a9445['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0x5a9445['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x1aa4bf(0x1f4), await _0x5a9445['click']('#stateAutocomplete'), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x1aa4bf(0x1f4);
                            try {
                                const _0xe4e2e4 = await _0x5a9445['$x']('//li[text()=\x22' + _0x9cac4d[_0x382d67]['State'] + '\x22]');
                                await _0xe4e2e4[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0x1aa4bf(0x3e8), await _0x1aa4bf(0x1f4), await _0x5a9445['type']('#address1', _0x9cac4d[_0x382d67]['Address1'] + '\x20' + _0x9cac4d[_0x382d67]['HouseNumber']), await _0x1aa4bf(0x1f4), await _0x5a9445['type']('#address2', '' + _0x9cac4d[_0x382d67]['Address2']), await _0x1aa4bf(0x1f4), await _0x5a9445['type']('#city', '' + _0x9cac4d[_0x382d67]['City']), await _0x1aa4bf(0x1f4), await _0x5a9445['type']('#postcode', '' + _0x9cac4d[_0x382d67]['Zip']), await _0x1aa4bf(0x3e8), await _0x5a9445['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1aa4bf(0x3e8), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            try {
                                await _0x5a9445['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]');
                            } catch {
                                throw new Error('No\x20Payment\x20Token\x20Found');
                            }
                            await _0x1aa4bf(0x7d0), await _0x5a9445['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1aa4bf(0x12c), await _0x5a9445['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1aa4bf(0x4b0), await _0x5a9445['keyboard']['type']('' + _0x9cac4d[_0x382d67]['CardNumber']), await _0x1aa4bf(0x320), await _0x5a9445['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5a9445['keyboard']['type']('' + _0x9cac4d[_0x382d67]['ExpiryDate']), await _0x1aa4bf(0x4b0), await _0x5a9445['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5a9445['keyboard']['type']('' + _0x9cac4d[_0x382d67]['CVV']), await _0x1aa4bf(0x226), await _0x5a9445['type']('input[name=\x22postalCode\x22]', '' + _0x9cac4d[_0x382d67]['Zip']), await _0x1aa4bf(0x226), await _0x5a9445['click']('#paymentConsent'), await _0x1aa4bf(0x226), await _0x5a9445['click']('#termsConsent'), await _0x1aa4bf(0x2bc), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5a9445['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1aa4bf(0x2710);
                            try {
                                await _0x5a9445['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x1aa4bf(0xbb8), await _0x5a9445['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x44c8ed => _0x44c8ed['click']()), await _0x5a9445['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x25e13f => _0x25e13f['click']());
                            } catch {
                            }
                            try {
                                await _0x5a9445['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0xf2a741 = await _0x5a9445['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0xf2a741) {
                                    _0x33b6f0['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x9cac4d[_0x382d67]['Email'] + ',' + _0x9cac4d[_0x382d67]['Password'] + ',' + _0x9cac4d[_0x382d67]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x5b8c48() {
                                var _0x4a1c05, _0x3d4f0e = ![];
                                for (var _0x4a508b = 0x0; _0x4a508b < 0x18; _0x4a508b++) {
                                    async function _0x53104() {
                                        var _0x1da21f = new _0x93d2c6({
                                            'user': _0x240058['masterMail'],
                                            'password': _0x240058['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x4f4b28(_0x3eb2fc) {
                                            _0x1da21f['openBox']('INBOX', ![], _0x3eb2fc);
                                        }
                                        _0x1da21f['once']('ready', function () {
                                            console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x4f4b28(function (_0x3c1c9a, _0x2e72d9) {
                                                console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x3c1c9a)
                                                    throw _0x3c1c9a;
                                                _0x1da21f['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x3ab1f5, _0x40a315) {
                                                    if (!_0x40a315 || !_0x40a315['length'])
                                                        console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1da21f['end']();
                                                    else {
                                                        var _0x1e3531 = _0x1da21f['seq']['fetch'](_0x40a315, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1e3531['on']('message', function (_0xb38c08, _0x446495) {
                                                            var _0x1b974a = '(#' + _0x446495 + ')\x20';
                                                            _0xb38c08['on']('body', function (_0x1ae3cf, _0x354bb6) {
                                                                _0x3aa20a(_0x1ae3cf, (_0x2b6bd2, _0x157d14) => {
                                                                    if (_0x157d14['subject']['includes']('code')) {
                                                                        const _0x1df6af = _0x157d14['text']['split']('\x0a\x0a')[0x3], _0x495042 = _0x1df6af['split']('\x0a')[0x1];
                                                                        _0x4a1c05 = _0x495042;
                                                                    }
                                                                });
                                                            }), _0xb38c08['once']('end', function () {
                                                            });
                                                        }), _0x1e3531['once']('error', function (_0x530de1) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1e3531['once']('end', function () {
                                                            _0x1da21f['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1da21f['once']('error', function (_0x20ae4a) {
                                            console['log'](_0x5aeedd['red'](_0x20ae4a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3d4f0e = !![];
                                        }), _0x1da21f['once']('end', async function () {
                                        }), _0x1da21f['connect']();
                                    }
                                    _0x53104(), await _0x1aa4bf(0x1388);
                                    if (_0x4a1c05)
                                        return _0x4a1c05;
                                    if (_0x3d4f0e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x4a508b == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5b8c48(), await _0x1aa4bf(0x1f4), await _0x5a9445['type']('#code', '' + code), await _0x1aa4bf(0x3e8), await _0x5a9445['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x5edaf8 => _0x5edaf8['click']()), await _0x5a9445['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5a9445['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x9cac4d[_0x382d67]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x33b6f0['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x9cac4d[_0x382d67]['Email'] + ',' + _0x9cac4d[_0x382d67]['Password'] + ',' + _0x9cac4d[_0x382d67]['Phone']), _0x509f4f = 'no', _0xe2d82b(_0x9cac4d[_0x382d67], _0x136de0);
                            var _0x31efaa = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', ![]), _0x11a8c4 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'pub', ![]);
                            const _0x42be2e = {
                                'succesDEVMSG': { 'embeds': [_0x31efaa] },
                                'succesPUBMSG': { 'embeds': [_0x11a8c4] }
                            };
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x42be2e['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x42be2e['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x42be2e['succesPUBMSG']);
                            } catch (_0x537437) {
                                console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x537437));
                            }
                        } catch (_0x3fef6c) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20' + _0x3fef6c)), _0x3b0f80 = '' + _0x3fef6c;
                            var _0x1021d3 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', !![], _0x3b0f80), _0x31efaa = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', ![]), _0x11a8c4 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'pub', ![]);
                            const _0x3ced3e = {
                                'succesDEVMSG': { 'embeds': [_0x31efaa] },
                                'succesPUBMSG': { 'embeds': [_0x11a8c4] }
                            };
                            _0x3ced3e['errorDEV'] = { 'embeds': [_0x1021d3] };
                            _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3ced3e['errorDEV']);
                            await _0xdef3ae(_0x1170d2, _0x3ced3e['errorDEV']);
                            if (!_0x509f4f == 'no')
                                _0x509f4f = 'yes';
                        } finally {
                            _0x28b8df && _0x28b8df['close']();
                            if (_0x509f4f == 'yes' && _0x2ae5ea != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ae5ea + '\x20/\x205)')), _0x382d67 = _0x382d67 - 0x1, _0x2ae5ea = _0x2ae5ea + 0x1;
                                continue;
                            }
                            _0x509f4f == 'yes' && _0x2ae5ea >= 0x5 && (_0x15a9ff(_0x9cac4d[_0x382d67], _0x136de0), _0x509f4f = 'no', _0x2ae5ea = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    } else {
                        const _0x496302 = '' + _0x9cac4d[_0x382d67]['Url'];
                        if (_0x509f4f != 'yes')
                            var _0x509f4f = '', _0x2ae5ea = 0x0;
                        if (_0x9cac4d[_0x382d67]['Email'] == '' || _0x9cac4d[_0x382d67]['FirstName'] == '' || _0x9cac4d[_0x382d67]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x9cac4d[_0x382d67]['Password'] == '' && (_0x9cac4d[_0x382d67]['Password'] = 'JRaffles23!');
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x53175b = _0x4bccc9[_0x382d67]['split'](':');
                        else
                            var _0xd1f083 = Math['round'](Math['random']() * (_0x4bccc9['length'] - 0x1)), _0x53175b = _0x4bccc9[_0xd1f083]['split'](':');
                        var _0x28b8df;
                        try {
                            _0x28b8df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53175b[0x0] + ':' + _0x53175b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x28b8df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53175b[0x0] + ':' + _0x53175b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x36cb13 = await _0x28b8df['newPage']();
                            await _0x36cb13['authenticate']({
                                'username': '' + _0x53175b[0x2],
                                'password': '' + _0x53175b[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36cb13['setRequestInterception'](!![]), _0x36cb13['on']('request', _0x3a1c62 => {
                                _0x3a1c62['resourceType']() === 'image' || _0x3a1c62['resourceType']() === 'font' || _0x3a1c62['resourceType']() === 'media' ? _0x3a1c62['abort']() : _0x3a1c62['continue']();
                            }), await _0x36cb13['goto'](_0x496302), await _0x36cb13['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x36cb13['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1aa4bf(0x7d0), await _0x36cb13['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x36cb13['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1aa4bf(0x3e8), await _0x36cb13['waitForSelector']('#email'), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x36cb13['type']('#email', '' + _0x9cac4d[_0x382d67]['Email']), await _0x1aa4bf(0x352), await _0x36cb13['waitForSelector']('#password'), await _0x36cb13['type']('#password', '' + _0x9cac4d[_0x382d67]['Password']), await _0x1aa4bf(0x352), await _0x36cb13['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1aa4bf(0x3e8);
                            try {
                                await _0x36cb13['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0xe2d82b(_0x9cac4d[_0x382d67], _0x136de0), _0x509f4f = 'no';
                                continue;
                            }
                            await _0x36cb13['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1aa4bf(0x3e8), await _0x36cb13['click']('li[data-value=\x22EU\x20' + _0x9cac4d[_0x382d67]['Size'] + '\x22]'), await _0x1aa4bf(0x1f4), await _0x36cb13['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x36cb13['focus']('#postcode'), await _0x36cb13['keyboard']['down']('Control'), await _0x36cb13['keyboard']['press']('A'), await _0x36cb13['keyboard']['up']('Control'), await _0x36cb13['keyboard']['press']('Backspace'), await _0x36cb13['keyboard']['type'](_0x9cac4d[_0x382d67]['Zip']), await _0x1aa4bf(0x60e), await _0x36cb13['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1aa4bf(0x3e8), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x36cb13['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x36cb13['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x36cb13['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1aa4bf(0x4b0), await _0x36cb13['keyboard']['type']('' + _0x9cac4d[_0x382d67]['CardNumber']), await _0x1aa4bf(0x320), await _0x36cb13['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x36cb13['keyboard']['type']('' + _0x9cac4d[_0x382d67]['ExpiryDate']), await _0x1aa4bf(0x4b0), await _0x36cb13['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x36cb13['keyboard']['type']('' + _0x9cac4d[_0x382d67]['CVV']), await _0x1aa4bf(0x226), await _0x36cb13['type']('input[name=\x22postalCode\x22]', '' + _0x9cac4d[_0x382d67]['Zip']), await _0x1aa4bf(0x226), await _0x36cb13['click']('#paymentConsent'), await _0x1aa4bf(0x226), await _0x36cb13['click']('#termsConsent'), await _0x1aa4bf(0x2bc), console['log'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x36cb13['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1aa4bf(0x2710);
                            try {
                                await _0x36cb13['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x1aa4bf(0xbb8), await _0x36cb13['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x324afe => _0x324afe['click']()), await _0x36cb13['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x147fd3 => _0x147fd3['click']());
                            } catch {
                            }
                            try {
                                await _0x36cb13['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xe2d82b(_0x9cac4d[_0x382d67], _0x136de0);
                            var _0x31efaa = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', ![]), _0x11a8c4 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'pub', ![]);
                            const _0x170f08 = {
                                'succesDEVMSG': { 'embeds': [_0x31efaa] },
                                'succesPUBMSG': { 'embeds': [_0x11a8c4] }
                            };
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x170f08['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x170f08['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x170f08['succesPUBMSG']);
                            } catch (_0x1629df) {
                                console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1629df));
                            }
                            _0x509f4f = 'no';
                        } catch (_0x3377c6) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20' + _0x3377c6)), _0x3b0f80 = '' + _0x3377c6;
                            var _0x1021d3 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', !![], _0x3b0f80), _0x31efaa = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'dev', ![]), _0x11a8c4 = await _0xa054f1(_0x9cac4d[_0x382d67], _0x136de0, 'pub', ![]);
                            const _0x527042 = {
                                'succesDEVMSG': { 'embeds': [_0x31efaa] },
                                'succesPUBMSG': { 'embeds': [_0x11a8c4] }
                            };
                            _0x527042['errorDEV'] = { 'embeds': [_0x1021d3] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x527042['errorDEV']), await _0xdef3ae(_0x1170d2, _0x527042['errorDEV']), _0x509f4f = 'yes';
                        } finally {
                            _0x28b8df && _0x28b8df['close']();
                            if (_0x509f4f == 'yes' && _0x2ae5ea != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x136de0['name'] + ']\x20Task\x20' + (_0x382d67 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ae5ea + '\x20/\x205)')), _0x382d67 = _0x382d67 - 0x1, _0x2ae5ea = _0x2ae5ea + 0x1;
                                continue;
                            }
                            _0x509f4f == 'yes' && _0x2ae5ea >= 0x5 && (_0x15a9ff(_0x9cac4d[_0x382d67], _0x136de0), _0x509f4f = 'no', _0x2ae5ea = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
                'function': async function (_0x49e2d8, _0x21365a, _0x272b6) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5a205a = 0x0; _0x5a205a < _0x21365a['length']; _0x5a205a++) {
                        if (_0x5b6335 != 'yes')
                            var _0x5b6335 = '', _0x2e9b64 = 0x0;
                        var _0x5b9e72;
                        try {
                            await _0x1fd6da(_0x21365a, _0x5a205a);
                        } catch {
                            _0x5b6335 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5ed37a(_0x49e2d8['name'] + '\x20Task\x20' + (_0x5a205a + 0x1) + '\x20/\x20' + _0x21365a['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x2a8e9d = await _0xa054f1(_0x21365a[_0x5a205a], _0x49e2d8, 'acc', ![]);
                        const _0x3c182e = { 'succesDEVMSG': { 'embeds': [_0x2a8e9d] } }, _0x2e0e58 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x458072 = Math['round'](Math['random']() * (_0x272b6['length'] - 0x1)), _0x54aea9 = _0x272b6[_0x458072]['split'](':'), _0x103878;
                        try {
                            _0x103878 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x54aea9[0x0] + ':' + _0x54aea9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x103878 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x54aea9[0x0] + ':' + _0x54aea9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x7ac1ab = await _0x103878['newPage']();
                            await _0x7ac1ab['setViewport']({
                                'width': 0x500 + _0x9e2068(0x1, 0x32),
                                'height': 0x2d9 + _0x9e2068(0x1, 0x32)
                            });
                            const _0x1f1a1c = await _0x7ac1ab['target']()['createCDPSession'](), { windowId: _0x3e5f83 } = await _0x1f1a1c['send']('Browser.getWindowForTarget');
                            await _0x7ac1ab['authenticate']({
                                'username': '' + _0x54aea9[0x2],
                                'password': '' + _0x54aea9[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7ac1ab['goto']('' + _0x2e0e58, { 'waitUntil': 'networkidle2' }), await _0x1aa4bf(0x1388), console['log'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x5b9e8f = await _0x7ac1ab['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x5b9e8f && await _0x5b9e8f['click']();
                            } catch {
                            }
                            await _0x1f1a1c['send']('Browser.setWindowBounds', {
                                'windowId': _0x3e5f83,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x7ac1ab['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x1aa4bf(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x7ac1ab['type']('input[name=\x22firstname\x22]', '' + _0x21365a[_0x5a205a]['FirstName']), await _0x1aa4bf(0x1f4), await _0x7ac1ab['type']('input[name=\x22lastname\x22]', '' + _0x21365a[_0x5a205a]['LastName']), await _0x1aa4bf(0x1f4), await _0x7ac1ab['type']('input[name=\x22email\x22]', '' + _0x21365a[_0x5a205a]['Email']), await _0x1aa4bf(0x1f4), await _0x7ac1ab['type']('input[name=\x22password\x22]', '' + _0x21365a[_0x5a205a]['Password']), await _0x1aa4bf(0x258), await _0x7ac1ab['$eval']('input[name=\x22psgdpr\x22]', _0x309f4c => _0x309f4c['click']()), await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x7ac1ab['$eval']('#customer-form', _0x1c2ff9 => _0x1c2ff9['submit']());
                            try {
                                try {
                                    await _0x7ac1ab['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x5b6335 = 'no', console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Account\x20' + _0x21365a[_0x5a205a]['Email'] + '\x20Generated')), _0x33b6f0['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x21365a[_0x5a205a]['Email'] + ',' + _0x21365a[_0x5a205a]['Password']);
                                try {
                                    _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3c182e['succesDEVMSG']);
                                } catch {
                                }
                                await _0xdef3ae(_0x3dc565, _0x3c182e['succesDEVMSG']);
                            } catch (_0x13bbe5) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x20bdba) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20' + _0x20bdba)), _0x5b9e72 = '' + _0x20bdba;
                            var _0x567932 = await _0xa054f1(_0x21365a[_0x5a205a], _0x49e2d8, 'acc', !![], _0x5b9e72);
                            _0x3c182e['errorDEV'] = { 'embeds': [_0x567932] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3c182e['errorDEV']), await _0xdef3ae(_0x1170d2, _0x3c182e['errorDEV']), _0x5b6335 = 'yes';
                        } finally {
                            _0x103878['close']();
                            if (_0x5b6335 == 'yes' && _0x2e9b64 != 0x5 && _0x5b9e72 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Task\x20' + (_0x5a205a + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e9b64 + '\x20/\x205)')), _0x5a205a = _0x5a205a - 0x1, _0x2e9b64 = _0x2e9b64 + 0x1;
                                continue;
                            }
                            _0x5b6335 == 'yes' && _0x2e9b64 >= 0x5 && (_0x15a9ff(_0x21365a[_0x5a205a], _0x49e2d8), _0x5b6335 = 'no', _0x2e9b64 = 0x0), console['log'](_0x43e084() + '\x20[' + _0x49e2d8['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x308aa0(_0x359f81, _0x52eb9e, _0x4c7870) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1b2b89 = 0x0; _0x1b2b89 < _0x52eb9e['length']; _0x1b2b89++) {
                        if (_0x4f41c6 != 'yes')
                            var _0x4f41c6 = '', _0x39102d = 0x0;
                        var _0x132275;
                        try {
                            await _0x1fd6da(_0x52eb9e, _0x1b2b89);
                        } catch {
                            _0x4f41c6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5ed37a(_0x359f81['name'] + '\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20/\x20' + _0x52eb9e['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        const _0x3465c7 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x38fafa = Math['round'](Math['random']() * (_0x4c7870['length'] - 0x1)), _0x4b3a77 = _0x4c7870[_0x38fafa]['split'](':'), _0x357012;
                        try {
                            _0x357012 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4b3a77[0x0] + ':' + _0x4b3a77[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x357012 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4b3a77[0x0] + ':' + _0x4b3a77[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35ecf3 = await _0x357012['newPage'](), _0x3cd1ca = await _0x35ecf3['target']()['createCDPSession'](), { windowId: _0xdd95c2 } = await _0x3cd1ca['send']('Browser.getWindowForTarget');
                            await _0x35ecf3['authenticate']({
                                'username': '' + _0x4b3a77[0x2],
                                'password': '' + _0x4b3a77[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35ecf3['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1aa4bf(0xbb8), await _0x3cd1ca['send']('Browser.setWindowBounds', {
                                'windowId': _0xdd95c2,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1aa4bf(0x1f40);
                            try {
                                await _0x35ecf3['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x1aa4bf(0x1388), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Logging\x20in'), await _0x35ecf3['type']('input[name=\x22email\x22]', '' + _0x52eb9e[_0x1b2b89]['Email']), await _0x1aa4bf(0x1f4), await _0x35ecf3['type']('input[name=\x22password\x22]', '' + _0x52eb9e[_0x1b2b89]['Password']), await _0x1aa4bf(0x258), await _0x35ecf3['$eval']('#login-form', _0xcc5ace => _0xcc5ace['submit']()), await _0x35ecf3['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1aa4bf(0x1f4), await _0x35ecf3['goto']('' + _0x52eb9e[_0x1b2b89]['Url']), await _0x35ecf3['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x52eb9e[_0x1b2b89]['Size']);
                            if (_0x52eb9e[_0x1b2b89]['Size'] != 'RANDOM') {
                                var _0x3d6970 = '\x20' + _0x52eb9e[_0x1b2b89]['Size'] + '\x20';
                                const _0x5ed6cf = await _0x35ecf3['$x']('//span[contains(text(),\x20' + _0x3d6970 + ')]');
                                await _0x5ed6cf[0x0]['click']();
                            } else {
                                const _0x40a507 = await _0x35ecf3['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x178a21 = Math['round'](Math['random']() * (_0x40a507['length'] - 0x1));
                                await _0x40a507[_0x178a21]['click']();
                            }
                            await _0x1aa4bf(0x258), await _0x35ecf3['click']('#cookieChoiceDismiss'), await _0x1aa4bf(0x3e8), await _0x35ecf3['type']('#instagram-account', '' + _0x52eb9e[_0x1b2b89]['Follower']), await _0x1aa4bf(0x28a), await _0x35ecf3['click']('#book-btn'), await _0x1aa4bf(0xbb8);
                            try {
                                await _0x35ecf3['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20' + _0x5aeedd['cyan']('Solving\x20Captcha')), await _0x35ecf3['solveRecaptchas'](), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1aa4bf(0x7d0), await _0x35ecf3['$eval']('#book-btn-for-sure', _0xb827fe => _0xb827fe['click']()), await _0x1aa4bf(0x12c), await _0x35ecf3['click']('#book-btn-for-sure'), await _0x1aa4bf(0xdac);
                            const _0x5d5217 = await _0x35ecf3['$eval']('.reservation-popup\x20>\x20.title', _0x2007fc => {
                                return _0x2007fc['innerHTML'];
                            });
                            if (_0x5d5217) {
                                _0x4f41c6 = 'no', _0xe2d82b(_0x52eb9e[_0x1b2b89], _0x359f81), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2a940d = await _0xa054f1(_0x52eb9e[_0x1b2b89], _0x359f81, 'dev', ![]), _0x233e21 = await _0xa054f1(_0x52eb9e[_0x1b2b89], _0x359f81, 'pub', ![]);
                                const _0x3adaef = {
                                    'succesDEVMSG': { 'embeds': [_0x2a940d] },
                                    'succesPUBMSG': { 'embeds': [_0x233e21] }
                                };
                                try {
                                    _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3adaef['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x3adaef['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x3adaef['succesPUBMSG']);
                                } catch (_0x2d49ef) {
                                    console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2d49ef));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x576abb) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20' + _0x576abb)), _0x132275 = '' + _0x576abb;
                            var _0x2648f4 = await _0xa054f1(_0x52eb9e[_0x1b2b89], _0x359f81, 'dev', !![], _0x132275), _0x2a940d = await _0xa054f1(_0x52eb9e[_0x1b2b89], _0x359f81, 'dev', ![]), _0x233e21 = await _0xa054f1(_0x52eb9e[_0x1b2b89], _0x359f81, 'pub', ![]);
                            const _0x1d6487 = {
                                'succesDEVMSG': { 'embeds': [_0x2a940d] },
                                'succesPUBMSG': { 'embeds': [_0x233e21] }
                            };
                            _0x1d6487['errorDEV'] = { 'embeds': [_0x2648f4] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x1d6487['errorDEV']), await _0xdef3ae(_0x1170d2, _0x1d6487['errorDEV']), _0x576abb != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4f41c6 = 'yes');
                        } finally {
                            _0x357012['close']();
                            if (_0x4f41c6 == 'yes' && _0x39102d != 0x5 && _0x132275 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Task\x20' + (_0x1b2b89 + 0x1) + '\x20:\x20Retrying\x20(' + _0x39102d + '\x20/\x205)')), _0x1b2b89 = _0x1b2b89 - 0x1, _0x39102d = _0x39102d + 0x1;
                                continue;
                            }
                            _0x4f41c6 == 'yes' && _0x39102d >= 0x5 && (_0x15a9ff(_0x52eb9e[_0x1b2b89], _0x359f81), _0x4f41c6 = 'no', _0x39102d = 0x0), console['log'](_0x43e084() + '\x20[' + _0x359f81['name'] + ']\x20Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
            'function': async function (_0x4efc5f, _0x90cdc5, _0x55f5ab) {
                _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x240058['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x8098cd = 0x0; _0x8098cd < _0x90cdc5['length']; _0x8098cd++) {
                    var _0x59cbaa;
                    if (_0x3b6c98 != 'yes')
                        var _0x3b6c98 = '', _0x52b917 = 0x0;
                    var _0x7a8247 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x50ab9a
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x90cdc5[_0x8098cd]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x90cdc5[_0x8098cd]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x240058['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2ee773
                            }
                        ]
                    }], _0x3022c6 = await _0xa054f1(_0x90cdc5[_0x8098cd], _0x4efc5f, 'dev', ![]), _0x157e76 = await _0xa054f1(_0x90cdc5[_0x8098cd], _0x4efc5f, 'pub', ![]);
                    const _0x3fc682 = {
                        'succesDEVMSG': { 'embeds': [_0x3022c6] },
                        'succesPUBMSG': { 'embeds': [_0x157e76] }
                    }, _0x6ef8a2 = { 'embeds': _0x7a8247 };
                    try {
                        await _0x1fd6da(_0x90cdc5, _0x8098cd);
                    } catch {
                        _0x3b6c98 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x90cdc5[_0x8098cd]['Email'] == '' || _0x90cdc5[_0x8098cd]['FirstName'] == '' || _0x90cdc5[_0x8098cd]['LastName'] == '' || _0x90cdc5[_0x8098cd]['Country'] == '' || _0x90cdc5[_0x8098cd]['Size'] == '' || _0x90cdc5[_0x8098cd]['Address1'] == '' || _0x90cdc5[_0x8098cd]['Zip'] == '') {
                        console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x90cdc5[_0x8098cd]['Email'] == '' || _0x90cdc5[_0x8098cd]['FirstName'] == '' || _0x90cdc5[_0x8098cd]['LastName'] == '' || _0x90cdc5[_0x8098cd]['Country'] == '' || _0x90cdc5[_0x8098cd]['Size'] == '' || _0x90cdc5[_0x8098cd]['Address1'] == '' || _0x90cdc5[_0x8098cd]['Zip'] == '' || _0x90cdc5[_0x8098cd]['Phone'] == '') {
                        console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x2b3f3 = '' + _0x90cdc5[_0x8098cd]['Url'];
                    if (_0x240058['useRandomProxy'] = ![])
                        var _0x5c697f = _0x55f5ab[_0x8098cd]['split'](':');
                    else
                        var _0x36e408 = Math['round'](Math['random']() * (_0x55f5ab['length'] - 0x1)), _0x5c697f = _0x55f5ab[_0x36e408]['split'](':');
                    var _0x181273;
                    try {
                        _0x181273 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5c697f[0x0] + ':' + _0x5c697f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x181273 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5c697f[0x0] + ':' + _0x5c697f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2b33be = await _0x181273['newPage']();
                        await _0x2b33be['authenticate']({
                            'username': '' + _0x5c697f[0x2],
                            'password': '' + _0x5c697f[0x3]
                        }), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b33be['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b33be['setRequestInterception'](!![]), _0x2b33be['on']('request', _0xdb5d03 => {
                            _0xdb5d03['resourceType']() === 'image' || _0xdb5d03['resourceType']() === 'font' || _0xdb5d03['resourceType']() === 'media' ? _0xdb5d03['abort']() : _0xdb5d03['continue']();
                        });
                        try {
                            await _0x2b33be['goto'](_0x2b3f3), await _0x1aa4bf(0xbb8), await _0x2b33be['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2b33be['click']('.control__JhutY'), await _0x1aa4bf(0x1f4);
                        if (_0x90cdc5[_0x8098cd]['Size'] != 'RANDOM')
                            try {
                                const _0x2aa50a = await _0x2b33be['$x']('//div[contains(text(),\x20\x27' + _0x90cdc5[_0x8098cd]['Size'] + '\x27)]');
                                await _0x2aa50a[0x0]['click']();
                            } catch {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x21f8f4 = await _0x2b33be['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x1b7671 = Math['round'](Math['random']() * (_0x21f8f4['length'] - 0x1));
                            await _0x21f8f4[_0x1b7671]['click']();
                        }
                        await _0x1aa4bf(0x4b0);
                        const _0x2b54be = await _0x2b33be['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x2b54be[0x0]['click'](), await _0x2b33be['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2b33be['type']('input[name=\x22email\x22]', '' + _0x90cdc5[_0x8098cd]['Email']), await _0x1aa4bf(0x640), await _0x2b33be['type']('input[name=\x22phone\x22]', '' + _0x90cdc5[_0x8098cd]['Phone']), await _0x1aa4bf(0x4b0), await _0x2b33be['click']('button.btn.continue-button__1RtsS'), await _0x1aa4bf(0x4b0);
                        try {
                            await _0x2b33be['type']('input[name=\x22firstName\x22]', '' + _0x90cdc5[_0x8098cd]['FirstName']), await _0x1aa4bf(0x258);
                        } catch {
                            const _0x22da9a = await _0x2b33be['$$eval']('.invalid-feedback\x20>\x20div', _0xd69d8 => {
                                return _0xd69d8['map'](_0x907272 => _0x907272['innerText']);
                            });
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20' + _0x22da9a));
                            continue;
                        }
                        await _0x2b33be['type']('input[name=\x22lastName\x22]', '' + _0x90cdc5[_0x8098cd]['LastName']), await _0x1aa4bf(0xc8), await _0x2b33be['type']('input[name=\x22instagramUsername\x22]', '' + _0x90cdc5[_0x8098cd]['Follower']), await _0x1aa4bf(0x4b0), await _0x2b33be['click']('button.btn.continue-button__1RtsS'), await _0x1aa4bf(0x3e8), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2b33be['select']('select[name=\x22country\x22]', '' + _0x90cdc5[_0x8098cd]['Country']), await _0x1aa4bf(0x2bc), await _0x2b33be['type']('input[name=\x22streetName\x22]', '' + _0x90cdc5[_0x8098cd]['Address1']), await _0x1aa4bf(0x258), await _0x2b33be['type']('input[name=\x22houseNumber\x22]', _0x90cdc5[_0x8098cd]['HouseNumber'] + '\x20' + _0x90cdc5[_0x8098cd]['Address2']), await _0x1aa4bf(0xc8), await _0x2b33be['type']('input[name=\x22postalCode\x22]', '' + _0x90cdc5[_0x8098cd]['Zip']), await _0x1aa4bf(0x1f4), await _0x2b33be['type']('input[name=\x22city\x22]', '' + _0x90cdc5[_0x8098cd]['City']), await _0x1aa4bf(0x4b0), await _0x2b33be['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1aa4bf(0x4b0), await _0x2b33be['click']('button.btn.continue-button__1RtsS'), await _0x1aa4bf(0x4b0), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2b33be['solveRecaptchas'](), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1aa4bf(0xbb8), await _0x2b33be['click']('button.btn.continue-button__1RtsS'), await _0x1aa4bf(0x1388), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2b33be['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2b33be['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1aa4bf(0x4b0), await _0x2b33be['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x90cdc5[_0x8098cd]['CardNumber']), await _0x1aa4bf(0x320), await _0x2b33be['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2b33be['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x90cdc5[_0x8098cd]['ExpiryDate']), await _0x1aa4bf(0x4b0), await _0x2b33be['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2b33be['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x90cdc5[_0x8098cd]['CVV']), await _0x1aa4bf(0x226), await _0x2b33be['type']('input[name=\x22holderName\x22]', '' + _0x90cdc5[_0x8098cd]['NameOnCard']), await _0x1aa4bf(0x226), await _0x2b33be['click']('button.adyen-checkout__button'), console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2b33be['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1aa4bf(0xbb8);
                        } catch (_0x3e454b) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x203DS\x20Failed')), _0x59cbaa = '3DS\x20Error\x20' + _0x3e454b;
                            var _0x5ea1d2 = await _0xa054f1(_0x90cdc5[_0x8098cd], _0x4efc5f, 'dev', !![], _0x59cbaa);
                            _0x3fc682['errorDEV'] = { 'embeds': [_0x5ea1d2] };
                            _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3fc682['errorDEV']);
                            await _0xdef3ae(_0x1170d2, _0x3fc682['errorDEV']);
                            continue;
                        }
                        _0xe2d82b(_0x90cdc5[_0x8098cd], _0x4efc5f), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                            try {
                                await _0xdef3ae(_0x240058['webhook'], _0x3fc682['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x3fc682['succesDEVMSG']), await _0x1aa4bf(0xc8);
                        try {
                            await _0xdef3ae(_0x591af7, _0x3fc682['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x365457) {
                        console['log'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20' + _0x365457), _0x59cbaa = '' + _0x365457;
                        var _0x5ea1d2 = await _0xa054f1(_0x90cdc5[_0x8098cd], _0x4efc5f, 'dev', !![], _0x59cbaa);
                        _0x3fc682['errorDEV'] = { 'embeds': [_0x5ea1d2] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x3fc682['errorDEV']), await _0xdef3ae(_0x1170d2, _0x3fc682['errorDEV']), _0x3b6c98 = 'yes';
                    } finally {
                        _0x181273['close']();
                        if (_0x3b6c98 == 'yes' && _0x52b917 != 0x5) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x4efc5f['name'] + ']\x20Task\x20' + (_0x8098cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x52b917 + '\x20/\x205)')), _0x8098cd = _0x8098cd - 0x1, _0x52b917 = _0x52b917 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x240058['footshopDelay'] + '\x20ms'), await _0x1aa4bf(_0x240058['footshopDelay']);
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
            'function': async function (_0xb4c89, _0x19e107, _0x1f651a) {
                var _0x176c54 = ![], _0x21c5dc = ![];
                if (_0x240058['captchaKey'] == '' || _0x240058['captchaKey'] == undefined)
                    return console['log'](_0x5aeedd['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x240058['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x128b8b = 0x0; _0x128b8b < _0x19e107['length']; _0x128b8b++) {
                    if (_0x30c319 != 'yes')
                        var _0x30c319 = '', _0x530039 = 0x0;
                    var _0xc6c3e1, _0x15d22e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x19e107[_0x128b8b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x19e107[_0x128b8b]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x50ab9a
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x240058['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2ee773
                            }
                        ]
                    }];
                    const _0x52f46a = { 'embeds': _0x15d22e };
                    _0x5ed37a(_0xb4c89['name'] + '\x20Task\x20' + (_0x128b8b + 0x1) + '\x20/\x20' + _0x19e107['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                    try {
                        await _0x1fd6da(_0x19e107, _0x128b8b);
                    } catch {
                        _0x30c319 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0xed9373 = await _0xa054f1(_0x19e107[_0x128b8b], _0xb4c89, 'dev', ![]), _0x1fff04 = await _0xa054f1(_0x19e107[_0x128b8b], _0xb4c89, 'pub', ![]);
                    const _0x167609 = {
                        'succesDEVMSG': { 'embeds': [_0xed9373] },
                        'succesPUBMSG': { 'embeds': [_0x1fff04] }
                    };
                    if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                        try {
                            await _0xdef3ae(_0x240058['webhook'], _0x167609['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x167609['succesDEVMSG']), await _0x1aa4bf(0xc8);
                    try {
                        await _0xdef3ae(_0x591af7, _0x167609['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x19e107[_0x128b8b]['Email'] == '' || _0x19e107[_0x128b8b]['Url'] == '' || _0x19e107[_0x128b8b]['FirstName'] == '' || _0x19e107[_0x128b8b]['LastName'] == '') {
                        console['log'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x240058['useRandomProxy'] = ![])
                        var _0x5dd3ef = _0x1f651a[_0x128b8b]['split'](':');
                    else
                        var _0x592b28 = Math['round'](Math['random']() * (_0x1f651a['length'] - 0x1)), _0x5dd3ef = _0x1f651a[_0x592b28]['split'](':');
                    var _0x290c35;
                    try {
                        _0x290c35 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5dd3ef[0x0] + ':' + _0x5dd3ef[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x290c35 = await _0x1a81d0['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5dd3ef[0x0] + ':' + _0x5dd3ef[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x21e5a2 = await _0x290c35['newPage']();
                        await _0x21e5a2['authenticate']({
                            'username': '' + _0x5dd3ef[0x2],
                            'password': '' + _0x5dd3ef[0x3]
                        }), console['log'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21e5a2['setRequestInterception'](!![]), _0x21e5a2['on']('request', _0x1545c3 => {
                            _0x1545c3['resourceType']() === 'image' || _0x1545c3['resourceType']() === 'font' || _0x1545c3['resourceType']() === 'media' ? _0x1545c3['abort']() : _0x1545c3['continue']();
                        });
                        try {
                            await _0x21e5a2['goto']('' + _0x19e107[_0x128b8b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x21e5a2['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x21e5a2['type']('#comp_firstname', '' + _0x19e107[_0x128b8b]['FirstName']), await _0x21e5a2['waitForSelector']('#comp_lastname'), await _0x21e5a2['type']('#comp_lastname', '' + _0x19e107[_0x128b8b]['LastName']), await _0x21e5a2['waitForSelector']('#comp_email'), await _0x21e5a2['type']('#comp_email', '' + _0x19e107[_0x128b8b]['Email']), await _0x21e5a2['waitForSelector']('#comp_paypalemail'), await _0x21e5a2['type']('#comp_paypalemail', '' + _0x19e107[_0x128b8b]['Email']), await _0x21e5a2['waitForSelector']('#comp_mobile_end'), await _0x21e5a2['type']('#comp_mobile_end', '' + _0x19e107[_0x128b8b]['Phone']), await _0x21e5a2['waitForSelector']('#comp_dob'), await _0x21e5a2['type']('#comp_dob', '08/09/1992'), console['log'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x19e107[_0x128b8b]['Size'] == 'RANDOM') {
                            const _0x5cab91 = await _0x21e5a2['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2a9d17 => {
                                return _0x2a9d17['map'](_0x2dee44 => _0x2dee44['value']);
                            });
                            var _0x18bac0 = Math['round'](Math['random']() * (_0x5cab91['length'] - 0x2));
                            await _0x21e5a2['select']('#shoesize', _0x5cab91[_0x18bac0 + 0x1]), await _0x1aa4bf(0x3e8);
                        } else {
                            const _0x3cb108 = await _0x21e5a2['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x36cd60 => {
                                return _0x36cd60['map'](_0x1f5654 => _0x1f5654['innerText']);
                            }), _0x5c4d8f = await _0x21e5a2['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x29067c => {
                                return _0x29067c['map'](_0x3ecd68 => _0x3ecd68['value']);
                            });
                            var _0x3c94ba = _0x19e107[_0x128b8b]['Size'];
                            for (var _0x498fdf = 0x1; _0x498fdf < _0x5c4d8f['length']; _0x498fdf++) {
                                var _0x134e72 = _0x3cb108[_0x498fdf]['split']('\x20')[0x0];
                                if (_0x134e72 == _0x3c94ba) {
                                    await _0x21e5a2['select']('#shoesize', _0x5c4d8f[_0x498fdf]);
                                    break;
                                } else {
                                    if (_0x498fdf + 0x1 == _0x5c4d8f['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x21e5a2['waitForSelector']('#comp_address1'), await _0x21e5a2['type']('#comp_address1', _0x19e107[_0x128b8b]['Address1'] + '\x20' + _0x19e107[_0x128b8b]['HouseNumber']), await _0x21e5a2['waitForSelector']('#comp_address2'), await _0x21e5a2['type']('#comp_address2', '' + _0x19e107[_0x128b8b]['Address2']), await _0x21e5a2['waitForSelector']('#comp_address2'), await _0x21e5a2['type']('#comp_address3', '' + _0x19e107[_0x128b8b]['City']), await _0x21e5a2['waitForSelector']('#comp_postcode'), await _0x21e5a2['type']('#comp_postcode', '' + _0x19e107[_0x128b8b]['Zip']), console['log'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1aa4bf(0x4b0), await _0x21e5a2['click']('label#emailhold'), await _0x1aa4bf(0x5dc), await _0x21e5a2['click']('#preauth_tandc_email\x20>\x20label'), await _0x1aa4bf(0x5dc), await _0x21e5a2['click']('#submit');
                        try {
                            await _0x21e5a2['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20' + _0x5aeedd['blue']('Awaiting\x20Paypal\x20Payment')), _0x290c35['on']('targetcreated', async _0x1084f0 => {
                            if (_0x1084f0['type']() === 'page') {
                                const _0x5c79b9 = await _0x1084f0['page']();
                                async function _0xfc540b() {
                                    try {
                                        await _0x21e5a2['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x21c5dc = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2bbb65() {
                                    try {
                                        await _0x21e5a2['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x176c54 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2bbb65(), _0xfc540b(), await _0x1aa4bf(0x493e0);
                            }
                        });
                        async function _0x50167c() {
                            for (let _0xb20cb1 = 0x0; _0xb20cb1 < 0x12c; _0xb20cb1++) {
                                if (_0x176c54 == !![]) {
                                    _0x30c319 = 'no', _0xe2d82b(_0x19e107[_0x128b8b], _0xb4c89), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                        try {
                                            await _0xdef3ae(_0x240058['webhook'], _0x167609['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x167609['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                    try {
                                        await _0xdef3ae(_0x591af7, _0x167609['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x21c5dc)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x1aa4bf(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x1aa4bf(0xbb8), await _0x21e5a2['click']('.zoid-outlet'), await _0x1aa4bf(0x7d0), await _0x50167c();
                    } catch (_0x34e52b) {
                        console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20' + _0x34e52b)), _0xc6c3e1 = '' + _0x34e52b;
                        var _0x36af3d = await _0xa054f1(_0x19e107[_0x128b8b], _0xb4c89, 'dev', !![], _0xc6c3e1);
                        _0x167609['errorDEV'] = { 'embeds': [_0x36af3d] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x167609['errorDEV']), await _0xdef3ae(_0x1170d2, _0x167609['errorDEV']);
                    } finally {
                        _0x290c35 && _0x290c35['close']();
                        if (_0x30c319 == 'yes' && _0x530039 != 0x5 && _0xc6c3e1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0xb4c89['name'] + ']\x20Task\x20' + (_0x128b8b + 0x1) + '\x20:\x20Retrying\x20(' + _0x530039 + '\x20/\x205)')), _0x128b8b = _0x128b8b - 0x1, _0x530039 = _0x530039 + 0x1;
                            continue;
                        }
                        _0x30c319 == 'yes' && _0x530039 >= 0x5 && (_0x15a9ff(afew[_0x128b8b], _0xb4c89), _0x30c319 = 'no', _0x530039 = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
                'function': async function (_0x9f307b, _0x479590, _0x370974) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4f7903 = 0x0; _0x4f7903 < _0x479590['length']; _0x4f7903++) {
                        const _0x2bba9a = 'https://www.kickz.com/login';
                        if (_0x271ab1 != 'yes')
                            var _0x271ab1 = '', _0x1ee708 = 0x0;
                        _0x5ed37a(_0x9f307b['name'] + '\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20/\x20' + _0x479590['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        try {
                            await _0x1fd6da(_0x479590, _0x4f7903);
                        } catch {
                            _0x271ab1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xb91f7c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50ab9a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x240058['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ee773
                                }
                            ]
                        }];
                        const _0x82adc8 = { 'embeds': _0xb91f7c };
                        var _0x30a32c = await _0xa054f1(_0x479590[_0x4f7903], _0x9f307b, 'acc', ![]);
                        const _0x1cbbb3 = { 'succesDEVMSG': { 'embeds': [_0x30a32c] } };
                        if (_0x479590[_0x4f7903]['Email'] == '' || _0x479590[_0x4f7903]['FirstName'] == '' || _0x479590[_0x4f7903]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x479590[_0x4f7903]['Password'] == '' && (_0x479590[_0x4f7903]['Password'] = 'JRaffles23!');
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x3c3698 = _0x370974[_0x4f7903]['split'](':');
                        else
                            var _0x2db46a = Math['round'](Math['random']() * (_0x370974['length'] - 0x1)), _0x3c3698 = _0x370974[_0x2db46a]['split'](':');
                        var _0x52e096;
                        try {
                            _0x52e096 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c3698[0x0] + ':' + _0x3c3698[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x52e096 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c3698[0x0] + ':' + _0x3c3698[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2c8cf9 = await _0x52e096['newPage']();
                            await _0x2c8cf9['authenticate']({
                                'username': '' + _0x3c3698[0x2],
                                'password': '' + _0x3c3698[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c8cf9['setRequestInterception'](!![]), _0x2c8cf9['on']('request', _0x4c65e1 => {
                                _0x4c65e1['resourceType']() === 'image' || _0x4c65e1['resourceType']() === 'font' || _0x4c65e1['resourceType']() === 'media' ? _0x4c65e1['abort']() : _0x4c65e1['continue']();
                            }), await _0x2c8cf9['goto'](_0x2bba9a), await _0x1aa4bf(0xbb8), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2c8cf9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2c8cf9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2c8cf9['waitForSelector']('#button-register'), await _0x1aa4bf(0x7d0), await _0x2c8cf9['evaluate'](() => {
                                const _0x151f35 = document['querySelector']('#button-register');
                                _0x151f35['click']();
                            }), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1aa4bf(0x1388), await _0x2c8cf9['waitForSelector']('#customer_salutation'), await _0x2c8cf9['select']('#customer_salutation', 'mr'), await _0x1aa4bf(0x7d0), await _0x2c8cf9['waitForSelector']('#customer_firstname'), await _0x2c8cf9['type']('#customer_firstname', '' + _0x479590[_0x4f7903]['FirstName']), await _0x1aa4bf(0x352), await _0x2c8cf9['waitForSelector']('#customer_lastname'), await _0x2c8cf9['type']('#customer_lastname', '' + _0x479590[_0x4f7903]['LastName']), await _0x1aa4bf(0x352), await _0x2c8cf9['type']('#email-input', '' + _0x479590[_0x4f7903]['Email']), await _0x1aa4bf(0x352), await _0x2c8cf9['type']('#email-confirm-input', '' + _0x479590[_0x4f7903]['Email']), await _0x1aa4bf(0x352), await _0x2c8cf9['type']('#register-password', '' + _0x479590[_0x4f7903]['Password']), await _0x1aa4bf(0x352), await _0x2c8cf9['type']('#password-confirm', '' + _0x479590[_0x4f7903]['Password']), await _0x1aa4bf(0x352), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2c8cf9['click']('#consent'), await _0x1aa4bf(0x1f4);
                            const _0x518431 = await _0x2c8cf9['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x518431) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x2c8cf9['click']('#buttonRegister');
                            try {
                                await _0x2c8cf9['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x479590[_0x4f7903]['Email']), await _0x1aa4bf(0x4b0);
                            async function _0x4f4ee3() {
                                var _0x33a1fa, _0x48c729 = ![];
                                for (var _0x5ea906 = 0x0; _0x5ea906 < 0x18; _0x5ea906++) {
                                    async function _0x4cd824() {
                                        var _0x1ac58c = new _0x93d2c6({
                                            'user': _0x240058['masterMail'],
                                            'password': _0x240058['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x210f50(_0xfba13c) {
                                            _0x1ac58c['openBox']('INBOX', ![], _0xfba13c);
                                        }
                                        _0x1ac58c['once']('ready', function () {
                                            console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x210f50(function (_0x4bbb6b, _0x2acd28) {
                                                console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4bbb6b)
                                                    throw _0x4bbb6b;
                                                _0x1ac58c['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0xca6779, _0x5900c4) {
                                                    if (!_0x5900c4 || !_0x5900c4['length'])
                                                        console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1ac58c['end']();
                                                    else {
                                                        var _0x5cd81b = _0x1ac58c['seq']['fetch'](_0x5900c4, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5cd81b['on']('message', function (_0x11d69, _0x50bb93) {
                                                            var _0x1c815c = '(#' + _0x50bb93 + ')\x20';
                                                            _0x11d69['on']('body', function (_0x5750e1, _0x28e29f) {
                                                                _0x3aa20a(_0x5750e1, (_0x2c6ae4, _0x1431f7) => {
                                                                    if (_0x1431f7['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0xfd847a = _0x1431f7['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x5426ba = _0xfd847a[0x1]['split']('<')[0x0];
                                                                        _0x33a1fa = _0x5426ba;
                                                                    }
                                                                });
                                                            }), _0x11d69['once']('end', function () {
                                                            });
                                                        }), _0x5cd81b['once']('error', function (_0x15bd54) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5cd81b['once']('end', function () {
                                                            _0x1ac58c['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1ac58c['once']('error', function (_0x43c902) {
                                            console['log'](_0x5aeedd['red'](_0x43c902['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x48c729 = !![];
                                        }), _0x1ac58c['once']('end', async function () {
                                        }), _0x1ac58c['connect']();
                                    }
                                    _0x4cd824(), await _0x1aa4bf(0x1388);
                                    if (_0x33a1fa)
                                        return _0x33a1fa;
                                    if (_0x48c729)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5ea906 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4f4ee3(), _0x1aa4bf(0x320), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Verifying..'), await _0x2c8cf9['type']('#verificationCode', code), await _0x1aa4bf(0x1f4), await _0x2c8cf9['click']('#buttonVerify'), await _0x1aa4bf(0x190), await _0x2c8cf9['click']('#buttonVerify'), await _0x1aa4bf(0x3e8);
                            try {
                                await _0x2c8cf9['waitForSelector']('div.b-user_greeting'), _0x271ab1 = 'no', console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Account\x20' + _0x479590[_0x4f7903]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x33b6f0['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x479590[_0x4f7903]['Email'] + ',' + _0x479590[_0x4f7903]['Password'] + ','), console['log'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Account\x20' + _0x479590[_0x4f7903]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x1cbbb3['succesDEVMSG']);
                                } catch {
                                }
                                await _0xdef3ae(_0x3dc565, _0x1cbbb3['succesDEVMSG']);
                            } catch {
                                _0x271ab1 = 'no', console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5de933) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20' + _0x5de933)), _0xb91f7c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xb91f7c[0x0]['description'] = '' + _0x5de933, await _0xdef3ae(_0x1170d2, _0x82adc8), _0x271ab1 = 'yes';
                        } finally {
                            _0x52e096 && _0x52e096['close']();
                            if (_0x271ab1 == 'yes' && _0x1ee708 != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x9f307b['name'] + ']\x20Task\x20' + (_0x4f7903 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ee708 + '\x20/\x205)')), _0x4f7903 = _0x4f7903 - 0x1, _0x1ee708 = _0x1ee708 + 0x1;
                                continue;
                            }
                            _0x271ab1 == 'yes' && _0x1ee708 >= 0x5 && (_0x15a9ff(_0x479590[_0x4f7903], _0x9f307b), _0x271ab1 = 'no', _0x1ee708 = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1b3ece, _0x30e12b, _0x37a4c6) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x54019f = 0x0; _0x54019f < _0x30e12b['length']; _0x54019f++) {
                        var _0x101a28;
                        if (_0x3dcaa6 != 'yes')
                            var _0x3dcaa6 = '', _0x570384 = 0x0;
                        _0x5ed37a(_0x1b3ece['name'] + '\x20Task\x20' + (_0x54019f + 0x1) + '\x20/\x20' + _0x30e12b['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        var _0x14ad7b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50ab9a
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x30e12b[_0x54019f]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x30e12b[_0x54019f]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x240058['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ee773
                                }
                            ]
                        }], _0x34e665 = await _0xa054f1(_0x30e12b[_0x54019f], _0x1b3ece, 'dev', ![]), _0x4fc42b = await _0xa054f1(_0x30e12b[_0x54019f], _0x1b3ece, 'pub', ![]);
                        const _0x43520c = {
                            'succesDEVMSG': { 'embeds': [_0x34e665] },
                            'succesPUBMSG': { 'embeds': [_0x4fc42b] }
                        };
                        try {
                            await _0x1fd6da(_0x30e12b, _0x54019f);
                        } catch {
                            _0x3dcaa6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x30e12b[_0x54019f]['Email'] == '' || _0x30e12b[_0x54019f]['Password'] == '' || _0x30e12b[_0x54019f]['FirstName'] == '' || _0x30e12b[_0x54019f]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x12904e = _0x37a4c6[_0x54019f]['split'](':');
                        else
                            var _0x99632a = Math['round'](Math['random']() * (_0x37a4c6['length'] - 0x1)), _0x12904e = _0x37a4c6[_0x99632a]['split'](':');
                        var _0x1351df;
                        try {
                            _0x1351df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x12904e[0x0] + ':' + _0x12904e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1351df = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x12904e[0x0] + ':' + _0x12904e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xeeb4cc = await _0x1351df['newPage']();
                            await _0xeeb4cc['authenticate']({
                                'username': '' + _0x12904e[0x2],
                                'password': '' + _0x12904e[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Getting\x20Session'), await _0xeeb4cc['setRequestInterception'](!![]), _0xeeb4cc['on']('request', _0x55de8c => {
                                _0x55de8c['resourceType']() === 'image' || _0x55de8c['resourceType']() === 'font' || _0x55de8c['resourceType']() === 'media' ? _0x55de8c['abort']() : _0x55de8c['continue']();
                            }), await _0xeeb4cc['goto']('' + _0x30e12b[_0x54019f]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1aa4bf(0x12c);
                            try {
                                await _0xeeb4cc['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0xeeb4cc['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Logging\x20in'), await _0xeeb4cc['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xeeb4cc['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xeeb4cc['waitForSelector']('#username'), await _0xeeb4cc['type']('#username', _0x30e12b[_0x54019f]['Email']), await _0xeeb4cc['waitForSelector']('#password'), await _0xeeb4cc['type']('#password', _0x30e12b[_0x54019f]['Password']), await _0x1aa4bf(0x190), await _0xeeb4cc['click']('#buttonSubmit'), await _0xeeb4cc['waitForSelector']('div.b-user_greeting'), console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1aa4bf(0x1f4), await _0xeeb4cc['goto']('' + _0x30e12b[_0x54019f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x30e12b[_0x54019f]['Size']);
                            let _0x24b1e9 = _0x30e12b[_0x54019f]['Size']['replace']('.5', '\x201/2');
                            await _0xeeb4cc['click']('button[title=\x22' + _0x24b1e9 + '\x22]'), await _0x1aa4bf(0x1f4);
                            try {
                                await _0xeeb4cc['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x1aa4bf(0x12c), console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Filling\x20Information'), await _0xeeb4cc['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_firstName', _0x30e12b[_0x54019f]['FirstName']), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_lastName', _0x30e12b[_0x54019f]['LastName']), await _0x1aa4bf(0x12c), await _0xeeb4cc['select']('#dwfrm_raffle_addressFields_country', _0x30e12b[_0x54019f]['Country']), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_city', _0x30e12b[_0x54019f]['City']), await _0x1aa4bf(0x12c);
                            _0x30e12b[_0x54019f]['Postcode'] == undefined && (_0x30e12b[_0x54019f]['Postcode'] = _0x30e12b[_0x54019f]['Zip']);
                            await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_postalCode', _0x30e12b[_0x54019f]['Postcode']), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_address1', _0x30e12b[_0x54019f]['Address1']), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_address2', _0x30e12b[_0x54019f]['HouseNumber']), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x30e12b[_0x54019f]['Address2']), await _0x1aa4bf(0x12c), await _0xeeb4cc['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1aa4bf(0x12c), await _0xeeb4cc['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x30e12b[_0x54019f]['Follower']), await _0x1aa4bf(0x1f4), await _0xeeb4cc['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1aa4bf(0x1f4), console['log'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20' + _0x5aeedd['blue']('Awaiting\x20Paypal\x20Payment')), await _0xeeb4cc['click']('.b-paypal_button');
                            try {
                                await _0xeeb4cc['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x3dcaa6 = 'no', _0xe2d82b(_0x30e12b[_0x54019f], _0x1b3ece), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x43520c['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x43520c['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x43520c['succesPUBMSG']);
                            } catch (_0x281e2b) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x281e2b)), _0x101a28 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x281e2b;
                                var _0x73952e = await _0xa054f1(_0x30e12b[_0x54019f], _0x1b3ece, 'dev', !![], _0x101a28);
                                _0x43520c['errorDEV'] = { 'embeds': [_0x73952e] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x43520c['errorDEV']), await _0xdef3ae(_0x1170d2, _0x43520c['errorDEV']);
                            }
                        } catch (_0x4a01bc) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20' + _0x4a01bc)), _0x101a28 = '' + _0x4a01bc;
                            var _0x73952e = await _0xa054f1(_0x30e12b[_0x54019f], _0x1b3ece, 'dev', !![], _0x101a28);
                            _0x43520c['errorDEV'] = { 'embeds': [_0x73952e] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x43520c['errorDEV']), await _0xdef3ae(_0x1170d2, _0x43520c['errorDEV']), _0x3dcaa6 = 'yes';
                        } finally {
                            _0x1351df && _0x1351df['close']();
                            if (_0x3dcaa6 == 'yes' && _0x570384 != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x1b3ece['name'] + ']\x20Task\x20' + (_0x54019f + 0x1) + '\x20:\x20Retrying\x20(' + _0x570384 + '\x20/\x205)')), _0x54019f = _0x54019f - 0x1, _0x570384 = _0x570384 + 0x1;
                                continue;
                            }
                            _0x3dcaa6 == 'yes' && _0x570384 >= 0x5 && (_0x15a9ff(_0x30e12b[_0x54019f], _0x1b3ece), _0x3dcaa6 = 'no', _0x570384 = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['AfewDelay'] + '\x20ms'), await _0x1aa4bf(_0x240058['AfewDelay']);
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
                'function': async function (_0x23991b, _0x4c1612, _0x327423) {
                    for (var _0x1e2599 = 0x0; _0x1e2599 < _0x4c1612['length']; _0x1e2599++) {
                        try {
                            await _0x1fd6da(_0x4c1612, _0x1e2599);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x46e4c0(_0x706cc0, _0x27cd4a, _0x228e6f, _0x516bf6, _0x71b528) {
                            var _0x52e4f5, _0x5b3925 = {}, _0x548ebf = [], _0x4c4848 = {}, _0x54ee84 = [
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
                            ], _0x286f3f = Math['round'](Math['random']() * (_0x54ee84['length'] - 0x1));
                            !_0x516bf6 && (_0x516bf6 = {});
                            if (_0x27cd4a != 'ver') {
                                _0x5ed37a(_0x228e6f['name'] + '\x20Task\x20' + (_0x706cc0 + 0x1) + '\x20/\x20' + _0x516bf6['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df), await _0x1fd6da(_0x516bf6, _0x706cc0), _0x5b3925 = _0x228e6f['data'], _0x5b3925['data']['attributes']['email'] = '' + _0x516bf6[_0x706cc0]['Email'];
                                if (_0x516bf6[_0x706cc0]['Size'] == 'RANDOM') {
                                }
                                _0x5b3925['data']['attributes']['properties']['$first_name'] = '' + _0x516bf6[_0x706cc0]['FirstName'], _0x5b3925['data']['attributes']['properties']['$last_name'] = '' + _0x516bf6[_0x706cc0]['LastName'], _0x5b3925['data']['attributes']['properties']['$address1'] = _0x516bf6[_0x706cc0]['Address1'] + '\x20' + _0x516bf6[_0x706cc0]['Address2'] + '\x20' + _0x516bf6[_0x706cc0]['HouseNumber'], _0x5b3925['data']['attributes']['properties']['$zip'] = '' + _0x516bf6[_0x706cc0]['Zip'], _0x5b3925['data']['attributes']['properties']['$city'] = '' + _0x516bf6[_0x706cc0]['City'], _0x5b3925['data']['attributes']['properties']['$country'] = '' + _0x516bf6[_0x706cc0]['Country'], _0x516bf6[_0x706cc0]['Size'] == 'RANDOM' ? _0x5b3925['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x54ee84[_0x286f3f] : _0x5b3925['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x516bf6[_0x706cc0]['Size'], _0x5b3925['data']['attributes']['properties']['$phone_number'] = '' + _0x516bf6[_0x706cc0]['Phone'], _0x5b3925['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x516bf6[_0x706cc0]['Follower'];
                            }
                            if (_0x240058['useRandomProxy'] = ![])
                                var _0x181f61 = _0x71b528[_0x706cc0]['split'](':');
                            else
                                var _0x34112c = Math['round'](Math['random']() * (_0x71b528['length'] - 0x1)), _0x181f61 = _0x71b528[_0x34112c]['split'](':');
                            var _0x2790c5 = {
                                'jar': _0x2d7acd,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x228e6f['url'],
                                'headers': _0x228e6f['headers'],
                                'body': JSON['stringify'](_0x5b3925),
                                'proxy': 'http://' + _0x181f61[0x2] + ':' + _0x181f61[0x3] + '@' + _0x181f61[0x0] + ':' + _0x181f61[0x1]
                            };
                            return _0x27cd4a != 'ver' && (_0x2790c5['url'] = _0x228e6f['url'], _0x2790c5['headers'] = _0x228e6f['headers']), _0x27cd4a == 'ver' && (_0x2790c5['method'] = 'GET'), new Promise(function (_0xc26977, _0x34c0ef) {
                                callback = async (_0x11d097, _0x4a14a6, _0xf2bfb8) => {
                                    if (!_0x11d097 && _0x4a14a6['statusCode'] == 0xca || !_0x11d097 && _0x4a14a6['statusCode'] == 0xc8) {
                                        if (_0x27cd4a != 'ver') {
                                            var _0x1e3ae0 = await _0xa054f1(_0x516bf6[_0x706cc0], _0x228e6f, 'dev', ![]), _0x25b376 = await _0xa054f1(_0x516bf6[_0x706cc0], _0x228e6f, 'pub', ![]);
                                            const _0x179a3c = {
                                                'succesDEVMSG': { 'embeds': [_0x1e3ae0] },
                                                'succesPUBMSG': { 'embeds': [_0x25b376] }
                                            };
                                            if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                                try {
                                                    await _0xdef3ae(_0x240058['webhook'], _0x179a3c['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x179a3c['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                            try {
                                                await _0xdef3ae(_0x591af7, _0x179a3c['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe2d82b(_0x516bf6[_0x706cc0], _0x228e6f);
                                        }
                                        _0xc26977(console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x228e6f['name'] + ']\x20Task\x20' + (_0x706cc0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x27cd4a != 'ver') {
                                            var _0x14468e = '' + _0x11d097, _0x1ad28d = await _0xa054f1(_0x516bf6[_0x706cc0], _0x228e6f, 'dev', !![], _0x14468e), _0x460935 = {};
                                            _0x460935['errorDEV'] = { 'embeds': [_0x1ad28d] }, _0x15a9ff(_0x516bf6[_0x706cc0], _0x228e6f), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x460935['errorDEV']), await _0xdef3ae(_0x1170d2, _0x460935['errorDEV']);
                                        }
                                        _0x34c0ef(console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x228e6f['name'] + ']\x20Task\x20' + (_0x706cc0 + 0x1) + ':\x20' + _0x11d097)));
                                    }
                                };
                                try {
                                    _0x27cd4a != 'ver' && console['log'](_0x43e084() + '\x20[' + _0x228e6f['name'] + ']\x20Task\x20' + (_0x706cc0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5b3925['data']['attributes']['email']), _0x2d5775(_0x2790c5, callback);
                                } catch (_0x2cb48c) {
                                    console['log'](_0x43e084() + '\x20Task\x20' + (_0x706cc0 + 0x1) + ':\x20' + _0x2cb48c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x46e4c0(_0x1e2599, 'nor', _0x23991b, _0x4c1612, _0x327423), console['log'](_0x43e084() + '\x20[' + _0x23991b['name'] + ']\x20Sleeping\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        } catch (_0x23497c) {
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
                'function': async function (_0xe209c3, _0x147761, _0x25ad72) {
                    var _0x3d4395 = [], _0x5cbbea = ![];
                    async function _0x55b506() {
                        var _0x24f843 = new _0x93d2c6({
                            'user': _0x240058['masterMail'],
                            'password': _0x240058['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x29ff77(_0x4776f8) {
                            _0x24f843['openBox']('INBOX', ![], _0x4776f8);
                        }
                        _0x24f843['once']('ready', function () {
                            _0x29ff77(function (_0x713e51, _0x412390) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x713e51)
                                    throw _0x713e51;
                                _0x24f843['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x14bdd2, _0x4e116e) {
                                    if (!_0x4e116e || !_0x4e116e['length'])
                                        console['log'](_0x43e084() + '\x20[' + _0xe209c3['name'] + ']\x20No\x20mails\x20found'), _0x24f843['end']();
                                    else {
                                        var _0x4762fa = _0x24f843['seq']['fetch'](_0x4e116e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4762fa['on']('message', function (_0x5be652, _0x1b1fe3) {
                                            var _0x44000d = '(#' + _0x1b1fe3 + ')\x20';
                                            _0x5be652['on']('body', function (_0x59ffe5, _0x2575f0) {
                                                _0x3aa20a(_0x59ffe5, (_0x29fc36, _0xa9dfcb) => {
                                                    var _0x5b28f2 = _0xa9dfcb['text']['split']('(')[0x1], _0x17ec90 = _0x5b28f2['split'](')')[0x0];
                                                    _0x3d4395['push'](_0x17ec90);
                                                });
                                            }), _0x5be652['once']('end', function () {
                                            });
                                        }), _0x4762fa['once']('error', function (_0x10caaf) {
                                            console['log']('Fetch\x20error:\x20' + _0x10caaf), _0x5cbbea = !![];
                                        }), _0x4762fa['once']('end', function () {
                                            _0x24f843['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x24f843['once']('error', function (_0x221918) {
                            console['log'](_0x5aeedd['red'](_0x221918['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5cbbea = !![];
                        }), _0x24f843['once']('end', async function () {
                            _0x5cbbea = !![];
                        }), _0x24f843['connect']();
                    }
                    async function _0x4015d2(_0x33e20e, _0x38846f, _0x1b942c) {
                        for (var _0x2f4402 = 0x0; _0x2f4402 < _0x38846f['length']; _0x2f4402++) {
                            async function _0x962a2d(_0x539736, _0x41636a, _0x2b29f3, _0x71636b, _0xe01659) {
                                var _0x518194, _0x51c7fe = {}, _0x58d275 = [], _0xe5933 = {}, _0x625db9 = [
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
                                ], _0x3d6384 = Math['round'](Math['random']() * (_0x625db9['length'] - 0x1));
                                _0x71636b[_0x539736]['Size'] == 'RANDOM' && (_0x71636b[_0x539736]['Size'] = _0x625db9[_0x3d6384]);
                                !_0x71636b && (_0x71636b = {});
                                if (_0x240058['useRandomProxy'] = ![])
                                    var _0x5eaa55 = _0xe01659[_0x539736]['split'](':');
                                else
                                    var _0x4c2a0d = Math['round'](Math['random']() * (_0xe01659['length'] - 0x1)), _0x5eaa55 = _0xe01659[_0x4c2a0d]['split'](':');
                                var _0x5a6e83 = {
                                    'jar': _0x2d7acd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2b29f3['url'],
                                    'headers': _0x2b29f3['headers'],
                                    'body': JSON['stringify'](_0x51c7fe),
                                    'proxy': 'http://' + _0x5eaa55[0x2] + ':' + _0x5eaa55[0x3] + '@' + _0x5eaa55[0x0] + ':' + _0x5eaa55[0x1]
                                };
                                return _0x41636a != 'ver' && (_0x5a6e83['url'] = _0x2b29f3['url'], _0x5a6e83['headers'] = _0x2b29f3['headers']), _0x41636a == 'ver' && (_0x5a6e83['method'] = 'GET', _0x5a6e83['url'] = _0x71636b[_0x539736]), new Promise(function (_0x50962e, _0x585772) {
                                    callback = async (_0x4053e0, _0xba81f4, _0x43cb13) => {
                                        if (!_0x4053e0 && _0xba81f4['statusCode'] == 0xca || !_0x4053e0 && _0xba81f4['statusCode'] == 0xc8) {
                                            if (_0x41636a != 'ver') {
                                                var _0x5c1e15 = await _0xa054f1(_0x71636b[_0x539736], _0x2b29f3, 'dev', ![]), _0x34724e = await _0xa054f1(_0x71636b[_0x539736], _0x2b29f3, 'pub', ![]);
                                                const _0x3e9ad2 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5c1e15] },
                                                    'succesPUBMSG': { 'embeds': [_0x34724e] }
                                                };
                                                if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                                    try {
                                                        await _0xdef3ae(_0x240058['webhook'], _0x3e9ad2['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x3e9ad2['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                                try {
                                                    await _0xdef3ae(_0x591af7, _0x3e9ad2['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe2d82b(_0x71636b[_0x539736], _0x2b29f3);
                                            }
                                            _0x50962e(console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x2b29f3['name'] + ']\x20Task\x20' + (_0x539736 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x41636a != 'ver') {
                                                var _0x46cec5 = '' + _0x4053e0, _0x367de9 = await _0xa054f1(_0x71636b[_0x539736], _0x2b29f3, 'dev', !![], _0x46cec5), _0x318689 = {};
                                                _0x318689['errorDEV'] = { 'embeds': [_0x367de9] }, _0x15a9ff(_0x71636b[_0x539736], _0x2b29f3), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x318689['errorDEV']), await _0xdef3ae(_0x1170d2, _0x318689['errorDEV']);
                                            }
                                            _0x585772(console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2b29f3['name'] + ']\x20Task\x20' + (_0x539736 + 0x1) + ':\x20' + _0x4053e0)));
                                        }
                                    };
                                    try {
                                        _0x41636a != 'ver' ? console['log'](_0x43e084() + '\x20[' + _0x2b29f3['name'] + ']\x20Task\x20' + (_0x539736 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x51c7fe['data']['attributes']['email']) : console['log'](_0x43e084() + '\x20[' + _0x2b29f3['name'] + ']\x20Task\x20' + (_0x539736 + 0x1) + ':\x20Fetching\x20Response'), _0x2d5775(_0x5a6e83, callback);
                                    } catch (_0x434072) {
                                        console['log'](_0x43e084() + '\x20Task\x20' + (_0x539736 + 0x1) + ':\x20' + _0x434072);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x962a2d(_0x2f4402, 'ver', _0x33e20e, _0x38846f, _0x1b942c), console['log'](_0x43e084() + '\x20[' + _0x33e20e['name'] + ']\x20Sleeping\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                            } catch (_0x1def0b) {
                            }
                        }
                    }
                    try {
                        _0x55b506();
                        while (!_0x5cbbea) {
                            await _0x1aa4bf(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3d4395['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1aa4bf(0x9c4);
                    }
                    await _0x4015d2(_0xe209c3, _0x3d4395, _0x25ad72);
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
                'function': async function (_0xabeb4d, _0x2331b3, _0x216d83) {
                    for (var _0x133a27 = 0x0; _0x133a27 < _0x2331b3['length']; _0x133a27++) {
                        try {
                            await _0x1fd6da(_0x2331b3, _0x133a27);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x499d50(_0x4cb644, _0x2a9bbb, _0xa470e4, _0x490b4d, _0x3fec66) {
                            var _0x24064d, _0xa64d3 = {}, _0x1a8856 = [], _0x461b36 = {}, _0x5d7d46 = [
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
                            ], _0x4f434e = Math['round'](Math['random']() * (_0x5d7d46['length'] - 0x1));
                            !_0x490b4d && (_0x490b4d = {});
                            if (_0x2a9bbb != 'ver') {
                                _0x5ed37a(_0xa470e4['name'] + '\x20Task\x20' + (_0x4cb644 + 0x1) + '\x20/\x20' + _0x490b4d['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df), _0x1a8856 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x50ab9a
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x490b4d[_0x4cb644]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x240058['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x2ee773
                                        }
                                    ]
                                }], _0x461b36 = { 'embeds': _0x1a8856 }, _0xa64d3 = _0xa470e4['data'], _0xa64d3['data']['attributes']['email'] = '' + _0x490b4d[_0x4cb644]['Email'];
                                if (_0x490b4d[_0x4cb644]['Size'] == 'RANDOM') {
                                }
                                _0xa64d3['data']['attributes']['properties']['$first_name'] = '' + _0x490b4d[_0x4cb644]['FirstName'], _0xa64d3['data']['attributes']['properties']['$last_name'] = '' + _0x490b4d[_0x4cb644]['LastName'], _0xa64d3['data']['attributes']['properties']['$address1'] = _0x490b4d[_0x4cb644]['Address1'] + '\x20' + _0x490b4d[_0x4cb644]['Address2'] + '\x20' + _0x490b4d[_0x4cb644]['HouseNumber'], _0xa64d3['data']['attributes']['properties']['$zip'] = '' + _0x490b4d[_0x4cb644]['Zip'], _0xa64d3['data']['attributes']['properties']['$city'] = '' + _0x490b4d[_0x4cb644]['City'], _0xa64d3['data']['attributes']['properties']['$country'] = '' + _0x490b4d[_0x4cb644]['Country'], _0x490b4d[_0x4cb644]['Size'] == 'RANDOM' ? _0xa64d3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5d7d46[_0x4f434e] : _0xa64d3['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x490b4d[_0x4cb644]['Size'], _0xa64d3['data']['attributes']['properties']['$phone_number'] = '' + _0x490b4d[_0x4cb644]['Phone'], _0xa64d3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x490b4d[_0x4cb644]['Follower'];
                            }
                            if (_0x240058['useRandomProxy'] = ![])
                                var _0x3cdcd6 = _0x3fec66[_0x4cb644]['split'](':');
                            else
                                var _0x43a9a5 = Math['round'](Math['random']() * (_0x3fec66['length'] - 0x1)), _0x3cdcd6 = _0x3fec66[_0x43a9a5]['split'](':');
                            var _0x20d4df = {
                                'jar': _0x2d7acd,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0xa470e4['url'],
                                'headers': _0xa470e4['headers'],
                                'body': JSON['stringify'](_0xa64d3),
                                'proxy': 'http://' + _0x3cdcd6[0x2] + ':' + _0x3cdcd6[0x3] + '@' + _0x3cdcd6[0x0] + ':' + _0x3cdcd6[0x1]
                            };
                            return _0x2a9bbb != 'ver' && (_0x20d4df['url'] = _0xa470e4['url'], _0x20d4df['headers'] = _0xa470e4['headers']), _0x2a9bbb == 'ver' && (_0x20d4df['method'] = 'GET'), new Promise(function (_0x57d104, _0x38e238) {
                                callback = async (_0x56117d, _0x39c1c0, _0x36cdad) => {
                                    if (!_0x56117d && _0x39c1c0['statusCode'] == 0xca || !_0x56117d && _0x39c1c0['statusCode'] == 0xc8) {
                                        if (_0x2a9bbb != 'ver') {
                                            var _0x1ac7b6 = await _0xa054f1(_0x490b4d[_0x4cb644], _0xa470e4, 'dev', ![]), _0x25ca80 = await _0xa054f1(_0x490b4d[_0x4cb644], _0xa470e4, 'pub', ![]);
                                            const _0x4bcd43 = {
                                                'succesDEVMSG': { 'embeds': [_0x1ac7b6] },
                                                'succesPUBMSG': { 'embeds': [_0x25ca80] }
                                            };
                                            if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                                try {
                                                    await _0xdef3ae(_0x240058['webhook'], _0x4bcd43['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x4bcd43['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                            try {
                                                await _0xdef3ae(_0x591af7, _0x4bcd43['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xe2d82b(_0x490b4d[_0x4cb644], _0xa470e4);
                                        }
                                        _0x57d104(console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0xa470e4['name'] + ']\x20Task\x20' + (_0x4cb644 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2a9bbb != 'ver') {
                                            var _0x2bb914 = '' + _0x56117d, _0x3e8c02 = await _0xa054f1(_0x490b4d[_0x4cb644], _0xa470e4, 'dev', !![], _0x2bb914), _0x5b1631 = {};
                                            _0x5b1631['errorDEV'] = { 'embeds': [_0x3e8c02] }, _0x15a9ff(_0x490b4d[_0x4cb644], _0xa470e4), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x5b1631['errorDEV']), await _0xdef3ae(_0x1170d2, _0x5b1631['errorDEV']);
                                        }
                                        _0x38e238(console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0xa470e4['name'] + ']\x20Task\x20' + (_0x4cb644 + 0x1) + ':\x20' + _0x56117d)));
                                    }
                                };
                                try {
                                    _0x2a9bbb != 'ver' && console['log'](_0x43e084() + '\x20[' + _0xa470e4['name'] + ']\x20Task\x20' + (_0x4cb644 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xa64d3['data']['attributes']['email']), _0x2d5775(_0x20d4df, callback);
                                } catch (_0x3485cc) {
                                    console['log'](_0x43e084() + '\x20Task\x20' + (_0x4cb644 + 0x1) + ':\x20' + _0x3485cc);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x499d50(_0x133a27, 'nor', _0xabeb4d, _0x2331b3, _0x216d83), console['log'](_0x43e084() + '\x20[' + _0xabeb4d['name'] + ']\x20Sleeping\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        } catch (_0x5d67f2) {
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
                'function': async function (_0xa290b6, _0x3115c7, _0x387dbf) {
                    var _0x3115c7 = [], _0x46e6ed = ![];
                    async function _0x376344() {
                        var _0x7e93a4 = new _0x93d2c6({
                            'user': _0x240058['masterMail'],
                            'password': _0x240058['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x481597(_0x25b2c5) {
                            _0x7e93a4['openBox']('INBOX', ![], _0x25b2c5);
                        }
                        _0x7e93a4['once']('ready', function () {
                            _0x481597(function (_0x1e68a9, _0x5a72f2) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1e68a9)
                                    throw _0x1e68a9;
                                _0x7e93a4['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x48fd23, _0x464dcb) {
                                    if (!_0x464dcb || !_0x464dcb['length'])
                                        console['log'](_0x43e084() + '\x20[' + _0xa290b6['name'] + ']\x20No\x20mails\x20found'), _0x7e93a4['end']();
                                    else {
                                        var _0x43dc13 = _0x7e93a4['seq']['fetch'](_0x464dcb, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x43dc13['on']('message', function (_0x5be593, _0x487f37) {
                                            var _0xfd1a62 = '(#' + _0x487f37 + ')\x20';
                                            _0x5be593['on']('body', function (_0x17c346, _0x1257f2) {
                                                _0x3aa20a(_0x17c346, (_0x244771, _0x1e7908) => {
                                                    var _0x34c105 = _0x1e7908['text']['split']('(')[0x1], _0x4aaa8d = _0x34c105['split'](')')[0x0];
                                                    _0x3115c7['push'](_0x4aaa8d);
                                                });
                                            }), _0x5be593['once']('end', function () {
                                            });
                                        }), _0x43dc13['once']('error', function (_0x2b61ce) {
                                            console['log']('Fetch\x20error:\x20' + _0x2b61ce), _0x46e6ed = !![];
                                        }), _0x43dc13['once']('end', function () {
                                            _0x7e93a4['end'](), _0x46e6ed = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x7e93a4['once']('error', function (_0x53408e) {
                            console['log'](_0x53408e), _0x46e6ed = !![];
                        }), _0x7e93a4['once']('end', async function () {
                            _0x46e6ed = !![];
                        }), _0x7e93a4['connect']();
                    }
                    async function _0x30f15f(_0x446d3a, _0x521824, _0x114e69) {
                        for (var _0x4f5ffa = 0x0; _0x4f5ffa < _0x521824['length']; _0x4f5ffa++) {
                            async function _0x53b969(_0x1c26f4, _0x5dc84e, _0x279b13, _0x228751, _0x1a8de9) {
                                var _0x5e7fd0, _0xe18cd7 = {}, _0x1100eb = [], _0x1d6623 = {}, _0x5da032 = [
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
                                ], _0x385056 = Math['round'](Math['random']() * (_0x5da032['length'] - 0x1));
                                _0x228751[_0x1c26f4]['Size'] == 'RANDOM' && (_0x228751[_0x1c26f4]['Size'] = _0x5da032[_0x385056]);
                                !_0x228751 && (_0x228751 = {});
                                if (_0x240058['useRandomProxy'] = ![])
                                    var _0x26c6d0 = _0x1a8de9[_0x1c26f4]['split'](':');
                                else
                                    var _0x48448e = Math['round'](Math['random']() * (_0x1a8de9['length'] - 0x1)), _0x26c6d0 = _0x1a8de9[_0x48448e]['split'](':');
                                var _0x28c0e5 = {
                                    'jar': _0x2d7acd,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x279b13['url'],
                                    'headers': _0x279b13['headers'],
                                    'body': JSON['stringify'](_0xe18cd7),
                                    'proxy': 'http://' + _0x26c6d0[0x2] + ':' + _0x26c6d0[0x3] + '@' + _0x26c6d0[0x0] + ':' + _0x26c6d0[0x1]
                                };
                                return _0x5dc84e != 'ver' && (_0x28c0e5['url'] = _0x279b13['url'], _0x28c0e5['headers'] = _0x279b13['headers']), _0x5dc84e == 'ver' && (_0x28c0e5['method'] = 'GET', _0x28c0e5['url'] = _0x228751[_0x1c26f4]), new Promise(function (_0x43d193, _0x74f2be) {
                                    callback = async (_0x6256e6, _0x54498c, _0x19d788) => {
                                        if (!_0x6256e6 && _0x54498c['statusCode'] == 0xca || !_0x6256e6 && _0x54498c['statusCode'] == 0xc8) {
                                            if (_0x5dc84e != 'ver') {
                                                var _0x2b2f8f = await _0xa054f1(_0x228751[_0x1c26f4], _0x279b13, 'dev', ![]), _0x4956d4 = await _0xa054f1(_0x228751[_0x1c26f4], _0x279b13, 'pub', ![]);
                                                const _0x5375d7 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2b2f8f] },
                                                    'succesPUBMSG': { 'embeds': [_0x4956d4] }
                                                };
                                                if (_0x240058['webhook'] != undefined && _0x240058['webhook'] != '')
                                                    try {
                                                        await _0xdef3ae(_0x240058['webhook'], _0x5375d7['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x5375d7['succesDEVMSG']), await _0x1aa4bf(0xc8);
                                                try {
                                                    await _0xdef3ae(_0x591af7, _0x5375d7['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xe2d82b(_0x228751[_0x1c26f4], _0x279b13);
                                            }
                                            _0x43d193(console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x279b13['name'] + ']\x20Task\x20' + (_0x1c26f4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x5dc84e != 'ver') {
                                                var _0x2041a6 = '' + _0x6256e6, _0x5e3909 = await _0xa054f1(_0x228751[_0x1c26f4], _0x279b13, 'dev', !![], _0x2041a6), _0x4a4b41 = {};
                                                _0x4a4b41['errorDEV'] = { 'embeds': [_0x5e3909] }, _0x15a9ff(_0x228751[_0x1c26f4], _0x279b13), _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x4a4b41['errorDEV']), await _0xdef3ae(_0x1170d2, _0x4a4b41['errorDEV']);
                                            }
                                            _0x74f2be(console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x279b13['name'] + ']\x20Task\x20' + (_0x1c26f4 + 0x1) + ':\x20' + _0x6256e6)));
                                        }
                                    };
                                    try {
                                        _0x5dc84e != 'ver' ? console['log'](_0x43e084() + '\x20[' + _0x279b13['name'] + ']\x20Task\x20' + (_0x1c26f4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xe18cd7['data']['attributes']['email']) : console['log'](_0x43e084() + '\x20[' + _0x279b13['name'] + ']\x20Task\x20' + (_0x1c26f4 + 0x1) + ':\x20Fetching\x20Response'), _0x2d5775(_0x28c0e5, callback);
                                    } catch (_0x233c89) {
                                        console['log'](_0x43e084() + '\x20Task\x20' + (_0x1c26f4 + 0x1) + ':\x20' + _0x233c89);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x53b969(_0x4f5ffa, 'ver', _0x446d3a, _0x521824, _0x114e69), console['log'](_0x43e084() + '\x20[' + _0x446d3a['name'] + ']\x20Sleeping\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                            } catch (_0x44e788) {
                            }
                        }
                    }
                    try {
                        _0x376344();
                        while (!_0x46e6ed) {
                            await _0x1aa4bf(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3115c7['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x30f15f(_0xa290b6, _0x3115c7, _0x387dbf);
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
                'function': async function (_0x26755b, _0x2ac740, _0x2cca54) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x143f5d = 0x0; _0x143f5d < _0x2ac740['length']; _0x143f5d++) {
                        var _0xd84de2 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50ab9a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x240058['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ee773
                                }
                            ]
                        }];
                        const _0x2a003d = { 'embeds': _0xd84de2 };
                        _0x5ed37a(_0x26755b['name'] + '\x20Task\x20' + (_0x143f5d + 0x1) + '\x20/\x20' + _0x2ac740['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        try {
                            await _0x1fd6da(_0x2ac740, _0x143f5d);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x561565 = await _0xa054f1(_0x2ac740[_0x143f5d], _0x26755b, 'acc', ![]);
                        const _0x488874 = { 'succesDEVMSG': { 'embeds': [_0x561565] } };
                        if (_0x2ac740[_0x143f5d]['Email'] == '' || _0x2ac740[_0x143f5d]['FirstName'] == '' || _0x2ac740[_0x143f5d]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1aa4bf(0x7d0);
                            continue;
                        }
                        (_0x2ac740[_0x143f5d]['Password'] == '' || _0x2ac740[_0x143f5d] == undefined) && _0x2ac740[_0x143f5d]['Password'] == 'JRaffles23!';
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x573d8f = _0x2cca54[_0x143f5d]['split'](':');
                        else
                            var _0x4ce345 = Math['round'](Math['random']() * (_0x2cca54['length'] - 0x1)), _0x573d8f = _0x2cca54[_0x4ce345]['split'](':');
                        var _0x234916;
                        try {
                            _0x234916 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x573d8f[0x0] + ':' + _0x573d8f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x234916 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x573d8f[0x0] + ':' + _0x573d8f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2346be = await _0x234916['newPage']();
                            await _0x2346be['authenticate']({
                                'username': '' + _0x573d8f[0x2],
                                'password': '' + _0x573d8f[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x26755b['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2346be['setRequestInterception'](!![]), _0x2346be['on']('request', _0x595ff9 => {
                                _0x595ff9['resourceType']() === 'image' || _0x595ff9['resourceType']() === 'font' || _0x595ff9['resourceType']() === 'media' ? _0x595ff9['abort']() : _0x595ff9['continue']();
                            }), await _0x2346be['goto']('https://patta.nl/account/register'), await _0x1aa4bf(0xbb8), await _0x2346be['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x43e084() + '\x20[' + _0x26755b['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Filling\x20information'), await _0x2346be['type']('#RegisterForm-FirstName', '' + _0x2ac740[_0x143f5d]['FirstName']), await _0x1aa4bf(0x226), await _0x2346be['type']('#RegisterForm-LastName', '' + _0x2ac740[_0x143f5d]['LastName']), await _0x1aa4bf(0x226), await _0x2346be['type']('#RegisterForm-email', '' + _0x2ac740[_0x143f5d]['Email']), await _0x1aa4bf(0x226), await _0x2346be['type']('#RegisterForm-password', '' + _0x2ac740[_0x143f5d]['Password']), await _0x1aa4bf(0x226), console['log'](_0x43e084() + '\x20[' + _0x26755b['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Submitting..'), await _0x2346be['$eval']('#RegisterForm', _0x1cba25 => _0x1cba25['submit']()), await _0x1aa4bf(0x1f40);
                            try {
                                await _0x2346be['waitForSelector']('.home-page-grid__collection'), await _0x1aa4bf(0x1f4), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x26755b['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Account\x20' + _0x2ac740[_0x143f5d]['Email'] + '\x20Generated!')), _0x33b6f0['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2ac740[_0x143f5d]['Email'] + ',' + _0x2ac740[_0x143f5d]['Password']), console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x26755b['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Account\x20' + _0x2ac740[_0x143f5d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x488874['succesDEVMSG']);
                                } catch {
                                }
                                await _0xdef3ae(_0x3dc565, _0x488874['succesDEVMSG']);
                            } catch (_0x3a0577) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3a0577));
                            }
                        } catch (_0x1c085e) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x143f5d + 0x1) + '\x20:\x20' + _0x1c085e));
                        } finally {
                            _0x234916 && _0x234916['close'](), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x36be38, _0x577ca4, _0x5dea73) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5450fa = 0x0; _0x5450fa < _0x577ca4['length']; _0x5450fa++) {
                        var _0x56ffa2;
                        if (_0x3c1e14 != 'yes')
                            var _0x3c1e14 = '', _0x25ed13 = 0x0;
                        _0x5ed37a(_0x36be38['name'] + '\x20Task\x20' + (_0x5450fa + 0x1) + '\x20/\x20' + _0x577ca4['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        try {
                            await _0x1fd6da(_0x577ca4, _0x5450fa);
                        } catch {
                            _0x3c1e14 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x577ca4[_0x5450fa]['Email'] == '' || _0x577ca4[_0x5450fa]['Password'] == '' || _0x577ca4[_0x5450fa]['FirstName'] == '' || _0x577ca4[_0x5450fa]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x1b293a = _0x5dea73[_0x5450fa]['split'](':');
                        else
                            var _0x26656c = Math['round'](Math['random']() * (_0x5dea73['length'] - 0x1)), _0x1b293a = _0x5dea73[_0x26656c]['split'](':');
                        var _0x5f153e;
                        try {
                            _0x5f153e = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b293a[0x0] + ':' + _0x1b293a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5f153e = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b293a[0x0] + ':' + _0x1b293a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1e57c0 = await _0x5f153e['newPage']();
                            await _0x1e57c0['authenticate']({
                                'username': '' + _0x1b293a[0x2],
                                'password': '' + _0x1b293a[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e57c0['setRequestInterception'](!![]), _0x1e57c0['on']('request', _0x4dbedc => {
                                _0x4dbedc['resourceType']() === 'image' || _0x4dbedc['resourceType']() === 'font' || _0x4dbedc['resourceType']() === 'media' ? _0x4dbedc['abort']() : _0x4dbedc['continue']();
                            }), await _0x1e57c0['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1e57c0['waitForSelector']('#CustomerEmail'), console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1e57c0['type']('#CustomerEmail', '' + _0x577ca4[_0x5450fa]['Email']), await _0x1aa4bf(0x12c), await _0x1e57c0['type']('#CustomerPassword', '' + _0x577ca4[_0x5450fa]['Password']), await _0x1aa4bf(0x226), await _0x1e57c0['$eval']('#customer_login', _0x41866b => _0x41866b['submit']());
                            try {
                                await _0x1e57c0['waitForSelector']('#orders'), await _0x1aa4bf(0x4b0);
                            } catch {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1e57c0['goto']('' + _0x577ca4[_0x5450fa]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1aa4bf(0xbb8), console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1e57c0['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x1e57c0['type']('#email', '' + _0x577ca4[_0x5450fa]['Email']), await _0x1aa4bf(0x384), await _0x1e57c0['type']('#first_name', '' + _0x577ca4[_0x5450fa]['FirstName']), await _0x1aa4bf(0x514), await _0x1e57c0['type']('#last_name', '' + _0x577ca4[_0x5450fa]['LastName']), await _0x1aa4bf(0x514), await _0x1e57c0['type']('#street_address', _0x577ca4[_0x5450fa]['Address1'] + '\x20' + _0x577ca4[_0x5450fa]['HouseNumber'] + '\x20' + _0x577ca4[_0x5450fa]['Address2']), await _0x1aa4bf(0x2bc);
                            _0x577ca4[_0x5450fa]['Postcode'] == undefined && (_0x577ca4[_0x5450fa]['Postcode'] = _0x577ca4[_0x5450fa]['Zip']);
                            await _0x1e57c0['type']('#zip_code', '' + _0x577ca4[_0x5450fa]['Postcode']), await _0x1aa4bf(0x320), await _0x1e57c0['type']('#city', '' + _0x577ca4[_0x5450fa]['City']), await _0x1aa4bf(0x320), await _0x1e57c0['type']('#bday', '01/01/1994'), await _0x1aa4bf(0x320), await _0x1e57c0['type']('#instagram', '' + _0x577ca4[_0x5450fa]['Follower']), await _0x1aa4bf(0x352);
                            if (_0x577ca4[_0x5450fa]['Size'] == 'RANDOM') {
                                const _0x1e2b1d = await _0x1e57c0['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1931ba => {
                                    return _0x1931ba['map'](_0x426034 => _0x426034['textContent']);
                                });
                                var _0x1c815e = Math['round'](Math['random']() * (_0x1e2b1d['length'] - 0x1));
                                console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1e2b1d[_0x1c815e]), await _0x1e57c0['click']('label[data-eu-size=\x22' + _0x1e2b1d[_0x1c815e] + '\x22]');
                            } else {
                                console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x577ca4[_0x5450fa]['Size']);
                                try {
                                    await _0x1e57c0['click']('label[data-eu-size=\x22' + _0x577ca4[_0x5450fa]['Size'] + '\x22]');
                                } catch {
                                    await _0x1e57c0['click']('label[data-eu-size=\x22' + _0x577ca4[_0x5450fa]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x1aa4bf(0xbb8), await _0x1e57c0['$$eval']('.raffle__checkbox-label', _0x5b5de7 => _0x5b5de7['forEach'](_0x1bb94f => _0x1bb94f['click']())), await _0x1aa4bf(0x7d0), console['log'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1e57c0['click']('#raffle__form-submit'), await _0x1aa4bf(0x1388);
                            try {
                                await _0x1e57c0['waitForSelector']('#raffle__confirmation-message-container'), _0x3c1e14 = 'no', _0xe2d82b(_0x577ca4[_0x5450fa], _0x36be38), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1b88e5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1b88e5));
                            }
                        } catch (_0x3c1b9b) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20' + _0x3c1b9b)), _0x3c1e14 = 'yes';
                        } finally {
                            _0x5f153e && _0x5f153e['close']();
                            if (_0x3c1e14 == 'yes' && _0x25ed13 != 0x5 && _0x56ffa2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x36be38['name'] + ']\x20Task\x20' + (_0x5450fa + 0x1) + '\x20:\x20Retrying\x20(' + _0x25ed13 + '\x20/\x205)')), _0x5450fa = _0x5450fa - 0x1, _0x25ed13 = _0x25ed13 + 0x1;
                                continue;
                            }
                            _0x3c1e14 == 'yes' && _0x25ed13 >= 0x5 && (_0x15a9ff(_0x577ca4[_0x5450fa], _0x36be38), _0x3c1e14 = 'no', _0x25ed13 = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
                'function': async function (_0x42cfa3, _0x27d97f, _0x46131c) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5df217 = 0x0; _0x5df217 < _0x27d97f['length']; _0x5df217++) {
                        if (_0x2705ba != 'yes')
                            var _0x2705ba = '', _0x5399fd = 0x0;
                        var _0x385aa2 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50ab9a
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x240058['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2ee773
                                }
                            ]
                        }];
                        const _0x368532 = { 'embeds': _0x385aa2 };
                        _0x5ed37a(_0x42cfa3['name'] + '\x20Task\x20' + (_0x5df217 + 0x1) + '\x20/\x20' + _0x27d97f['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        try {
                            await _0x1fd6da(_0x27d97f, _0x5df217);
                        } catch {
                            _0x2705ba = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xc129f2 = await _0xa054f1(_0x27d97f[_0x5df217], _0x42cfa3, 'acc', ![]);
                        const _0x1444e6 = { 'succesDEVMSG': { 'embeds': [_0xc129f2] } };
                        if (_0x27d97f[_0x5df217]['Email'] == '' || _0x27d97f[_0x5df217]['FirstName'] == '' || _0x27d97f[_0x5df217]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1aa4bf(0x7d0);
                            continue;
                        }
                        (_0x27d97f[_0x5df217]['Password'] == '' || _0x27d97f[_0x5df217] == undefined) && _0x27d97f[_0x5df217]['Password'] == 'JRaffles23!';
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x53ea76 = _0x46131c[_0x5df217]['split'](':');
                        else
                            var _0x2c4ca0 = Math['round'](Math['random']() * (_0x46131c['length'] - 0x1)), _0x53ea76 = _0x46131c[_0x2c4ca0]['split'](':');
                        var _0x56f313;
                        try {
                            _0x56f313 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53ea76[0x0] + ':' + _0x53ea76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x56f313 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x53ea76[0x0] + ':' + _0x53ea76[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x24dd35 = await _0x56f313['newPage']();
                            await _0x24dd35['authenticate']({
                                'username': '' + _0x53ea76[0x2],
                                'password': '' + _0x53ea76[0x3]
                            }), console['log'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x24dd35['setRequestInterception'](!![]), _0x24dd35['on']('request', _0xb7e5ca => {
                                _0xb7e5ca['resourceType']() === 'image' || _0xb7e5ca['resourceType']() === 'font' || _0xb7e5ca['resourceType']() === 'media' ? _0xb7e5ca['abort']() : _0xb7e5ca['continue']();
                            }), await _0x24dd35['goto']('https://drop.slamjam.com/account/register'), await _0x1aa4bf(0xbb8), await _0x24dd35['waitForSelector']('#FirstName'), await _0x24dd35['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x24dd35['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1aa4bf(0x4b0), await _0x24dd35['type']('#FirstName', '' + _0x27d97f[_0x5df217]['FirstName']), await _0x1aa4bf(0x226), await _0x24dd35['type']('#LastName', '' + _0x27d97f[_0x5df217]['LastName']), await _0x1aa4bf(0x226), await _0x24dd35['type']('#Email', '' + _0x27d97f[_0x5df217]['Email']), await _0x1aa4bf(0x2ee), await _0x24dd35['type']('#ConfirmEmail', '' + _0x27d97f[_0x5df217]['Email']), await _0x1aa4bf(0x2ee), await _0x24dd35['type']('#CreatePassword', '' + _0x27d97f[_0x5df217]['Password']), await _0x1aa4bf(0x2ee), await _0x24dd35['type']('#CreateConfirmPassword', '' + _0x27d97f[_0x5df217]['Password']), await _0x1aa4bf(0x226), console['log'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Submitting..'), await _0x24dd35['$eval']('#create_customer', _0x33d7bc => _0x33d7bc['submit']()), await _0x1aa4bf(0x1388), console['log'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20' + _0x5aeedd['cyan']('Solving\x20Captcha')), await _0x24dd35['solveRecaptchas'](), console['log'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x24dd35['$eval']('.shopify-challenge__container\x20>\x20form', _0x21ec33 => _0x21ec33['submit']());
                            try {
                                await _0x24dd35['waitForSelector']('.product-card__image'), await _0x1aa4bf(0x1f4), _0x2705ba = 'no', console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Account\x20' + _0x27d97f[_0x5df217]['Email'] + '\x20Generated!')), _0x33b6f0['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x27d97f[_0x5df217]['Email'] + ',' + _0x27d97f[_0x5df217]['Password']), console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Account\x20' + _0x27d97f[_0x5df217]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x1444e6['succesDEVMSG']);
                                } catch {
                                }
                                await _0xdef3ae(_0x3dc565, _0x1444e6['succesDEVMSG']);
                            } catch (_0x1a0bbd) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1a0bbd));
                            }
                        } catch (_0x46b3ae) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20' + _0x46b3ae));
                        } finally {
                            _0x56f313 && _0x56f313['close']();
                            if (_0x2705ba == 'yes' && _0x5399fd != 0x5) {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x42cfa3['name'] + ']\x20Task\x20' + (_0x5df217 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5399fd + '\x20/\x205)')), _0x5df217 = _0x5df217 - 0x1, _0x5399fd = _0x5399fd + 0x1;
                                continue;
                            }
                            _0x2705ba == 'yes' && _0x5399fd >= 0x5 && (_0x15a9ff(_0x27d97f[_0x5df217], _0x42cfa3), _0x2705ba = 'no', _0x5399fd = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x5030b1, _0x5971f9, _0x363270) {
                    _0x1a81d0['use'](_0x449121()), _0x1a81d0['use'](_0x19d1ed({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x240058['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x47b12d = 0x0; _0x47b12d < _0x5971f9['length']; _0x47b12d++) {
                        var _0x41fb9e;
                        if (_0x4caff4 != 'yes')
                            var _0x4caff4 = '', _0x26abae = 0x0;
                        _0x5ed37a(_0x5030b1['name'] + '\x20Task\x20' + (_0x47b12d + 0x1) + '\x20/\x20' + _0x5971f9['length'] + '\x20||\x20File:\x20' + _0x26a961 + '\x20Proxies:\x20' + _0x2184df);
                        try {
                            await _0x1fd6da(_0x5971f9, _0x47b12d);
                        } catch {
                            _0x4caff4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5971f9[_0x47b12d]['Email'] == '' || _0x5971f9[_0x47b12d]['Password'] == '' || _0x5971f9[_0x47b12d]['FirstName'] == '' || _0x5971f9[_0x47b12d]['LastName'] == '') {
                            console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x240058['useRandomProxy'] = ![])
                            var _0x1539a8 = _0x363270[_0x47b12d]['split'](':');
                        else
                            var _0x41e7a9 = Math['round'](Math['random']() * (_0x363270['length'] - 0x1)), _0x1539a8 = _0x363270[_0x41e7a9]['split'](':');
                        var _0x6d5e17;
                        try {
                            _0x6d5e17 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1539a8[0x0] + ':' + _0x1539a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x6d5e17 = await _0x1a81d0['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1539a8[0x0] + ':' + _0x1539a8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a65f8 = await _0x6d5e17['newPage']();
                            await _0x5a65f8['authenticate']({
                                'username': '' + _0x1539a8[0x2],
                                'password': '' + _0x1539a8[0x3]
                            }), await _0x5a65f8['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a65f8['setRequestInterception'](!![]), _0x5a65f8['on']('request', _0x2452a9 => {
                                _0x2452a9['resourceType']() === 'image' || _0x2452a9['resourceType']() === 'font' || _0x2452a9['resourceType']() === 'media' ? _0x2452a9['abort']() : _0x2452a9['continue']();
                            }), await _0x5a65f8['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5a65f8['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5a65f8['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1aa4bf(0x258), await _0x5a65f8['waitForSelector']('#CustomerEmail'), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5a65f8['type']('#CustomerEmail', '' + _0x5971f9[_0x47b12d]['Email']), await _0x1aa4bf(0x12c), await _0x5a65f8['type']('#CustomerPassword', '' + _0x5971f9[_0x47b12d]['Password']), await _0x1aa4bf(0x226), await _0x5a65f8['$eval']('#customer_login', _0x493092 => _0x493092['submit']()), await _0x1aa4bf(0x7d0), await _0x5a65f8['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20' + _0x5aeedd['cyan']('Solving\x20Captcha')), await _0x5a65f8['solveRecaptchas'](), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5a65f8['$eval']('.shopify-challenge__container\x20>\x20form', _0x1d3902 => _0x1d3902['submit']());
                            try {
                                await _0x5a65f8['waitForSelector']('.nav-account'), await _0x1aa4bf(0x4b0);
                            } catch {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5a65f8['goto']('' + _0x5971f9[_0x47b12d]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1aa4bf(0xbb8), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5a65f8['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5a65f8['click']('.product-select-variant-wrapper'), await _0x1aa4bf(0x320), await _0x5a65f8['click']('li.product-select-variant__value[data-size=\x22' + _0x5971f9[_0x47b12d]['Size'] + '\x22]'), await _0x1aa4bf(0x384), await _0x5a65f8['$eval']('#AddToCartForm-product-template-raffle', _0x1d9563 => _0x1d9563['submit']()), await _0x5a65f8['waitForSelector']('.cart-order-summary__content'), await _0x1aa4bf(0x514), await _0x5a65f8['goto']('https://drop.slamjam.com/checkout'), await _0x1aa4bf(0x514), await _0x5a65f8['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5a65f8['select']('#checkout_shipping_address_country', '' + _0x5971f9[_0x47b12d]['Country']), await _0x1aa4bf(0x200), await _0x5a65f8['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5a65f8['type']('#checkout_shipping_address_first_name', '' + _0x5971f9[_0x47b12d]['FirstName']), await _0x1aa4bf(0x237), await _0x5a65f8['type']('#checkout_shipping_address_last_name', '' + _0x5971f9[_0x47b12d]['LastName']), await _0x1aa4bf(0x1e0), await _0x5a65f8['type']('#checkout_shipping_address_address1', _0x5971f9[_0x47b12d]['Address1'] + '\x20' + _0x5971f9[_0x47b12d]['HouseNumber']), await _0x1aa4bf(0x514), await _0x5a65f8['type']('#checkout_shipping_address_address2', '' + _0x5971f9[_0x47b12d]['Address2']), await _0x1aa4bf(0x514);
                            _0x5971f9[_0x47b12d]['Postcode'] == undefined && (_0x5971f9[_0x47b12d]['Postcode'] = _0x5971f9[_0x47b12d]['Zip']);
                            await _0x5a65f8['type']('#checkout_shipping_address_zip', '' + _0x5971f9[_0x47b12d]['Postcode']), await _0x1aa4bf(0x2bc), await _0x5a65f8['type']('#checkout_shipping_address_city', '' + _0x5971f9[_0x47b12d]['City']), await _0x1aa4bf(0x320), await _0x5a65f8['type']('#checkout_shipping_address_phone', '' + _0x5971f9[_0x47b12d]['Phone']), await _0x1aa4bf(0x320), await _0x5a65f8['click']('#continue_button'), await _0x1aa4bf(0xbb8), await _0x5a65f8['waitForSelector']('.summary-title'), await _0x1aa4bf(0x320), await _0x5a65f8['click']('#continue_button'), await _0x1aa4bf(0x320), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5a65f8['waitForSelector']('#checkout_credit_card_vault'), await _0x1aa4bf(0x3e8);
                            var _0x36c667 = await _0x5a65f8['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x5a3f14 = await _0x36c667['contentFrame']();
                            await _0x5a3f14['click']('#number'), await _0x1aa4bf(0x3e8), await _0x5a3f14['type']('#number', '' + _0x5971f9[_0x47b12d]['CardNumber'], { 'delay': 0x78 }), _0x36c667 = await _0x5a65f8['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x5a3f14 = await _0x36c667['contentFrame'](), await _0x1aa4bf(0x1c2), await _0x5a3f14['click']('#name'), await _0x1aa4bf(0x1f4), await _0x5a3f14['type']('#name', '' + _0x5971f9[_0x47b12d]['NameOnCard'], { 'delay': 0x78 }), _0x36c667 = await _0x5a65f8['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x5a3f14 = await _0x36c667['contentFrame'](), await _0x1aa4bf(0x1c2), await _0x5a3f14['click']('#expiry'), await _0x1aa4bf(0x1f4), await _0x5a3f14['type']('#expiry', '' + _0x5971f9[_0x47b12d]['ExpiryDate'], { 'delay': 0x78 }), _0x36c667 = await _0x5a65f8['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x5a3f14 = await _0x36c667['contentFrame'](), await _0x1aa4bf(0x1c2), await _0x5a3f14['click']('#verification_value'), await _0x1aa4bf(0x1f4), await _0x5a3f14['type']('#verification_value', '' + _0x5971f9[_0x47b12d]['CVV'], { 'delay': 0x78 }), await _0x5a65f8['$eval']('#accepts-flag-raffle', _0x592ee5 => _0x592ee5['click']()), await _0x1aa4bf(0x7d0), console['log'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5a65f8['$eval']('#continue_button', _0x2eeef3 => _0x2eeef3['click']()), await _0x1aa4bf(0x1b58), await _0x5a65f8['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5a65f8['$eval']('.edit_checkout.animate-floating-labels', _0x39b16c => _0x39b16c['submit']()), await _0x1aa4bf(0x7d0);
                            try {
                                await _0x5a65f8['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4caff4 = 'no', _0xe2d82b(_0x5971f9[_0x47b12d], _0x5030b1), console['log'](_0x5aeedd['green'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2a1872) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2a1872['message']);
                            }
                            var _0x4bcb94 = await _0xa054f1(_0x5971f9[_0x47b12d], _0x5030b1, 'dev', ![]), _0x446326 = await _0xa054f1(_0x5971f9[_0x47b12d], _0x5030b1, 'pub', ![]);
                            const _0x477aa9 = {
                                'succesDEVMSG': { 'embeds': [_0x4bcb94] },
                                'succesPUBMSG': { 'embeds': [_0x446326] }
                            };
                            try {
                                _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], _0x477aa9['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x1f93f4, _0x477aa9['succesDEVMSG']), await _0x1aa4bf(0xc8), await _0xdef3ae(_0x591af7, _0x477aa9['succesPUBMSG']);
                            } catch (_0x366fff) {
                                console['log'](_0x5aeedd['yellow'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x366fff));
                            }
                        } catch (_0x3061ec) {
                            console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x2613f8[taskModule]['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20' + _0x3061ec)), _0x41fb9e = '' + _0x3061ec;
                            var _0x2e9f29 = await _0xa054f1(kickz[_0x47b12d], _0x5030b1, 'dev', !![], _0x41fb9e);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x2e9f29] }, _0x240058['webhook'] != undefined && _0x240058['webhook'] != '' && await _0xdef3ae(_0x240058['webhook'], EMBEDS['errorDEV']), await _0xdef3ae(_0x1170d2, EMBEDS['errorDEV']), _0x4caff4 = 'yes';
                        } finally {
                            _0x6d5e17 && _0x6d5e17['close']();
                            if (_0x4caff4 == 'yes' && _0x26abae != 0x5 && _0x41fb9e != 'Size\x20Not\x20Found') {
                                console['log'](_0x5aeedd['red'](_0x43e084() + '\x20[' + _0x5030b1['name'] + ']\x20Task\x20' + (_0x47b12d + 0x1) + '\x20:\x20Retrying\x20(' + _0x26abae + '\x20/\x205)')), _0x47b12d = _0x47b12d - 0x1, _0x26abae = _0x26abae + 0x1;
                                continue;
                            }
                            _0x4caff4 == 'yes' && _0x26abae >= 0x5 && (_0x15a9ff(_0x5971f9[_0x47b12d], _0x5030b1), _0x4caff4 = 'no', _0x26abae = 0x0), console['log']('Waiting\x20for\x20' + _0x240058['delay'] + '\x20ms'), await _0x1aa4bf(_0x240058['delay']);
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
                'function': async function (_0x45277d) {
                    var _0x11c07a = await _0x2976a9(), _0x2b4432 = _0x33b6f0['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x458087 = _0x5c5d12['parse'](_0x2b4432, { 'header': !![] })['data'];
                    for (var _0x21b58e = 0x0; _0x21b58e < _0x458087['length']; _0x21b58e++) {
                        var _0x2d2310 = _0x458087[_0x21b58e]['Store'], _0x115abb = _0x458087[_0x21b58e]['Mode'];
                        for (var _0x59713e of _0x2613f8) {
                            const _0x55bfbb = _0x59713e['name']['includes'](_0x2d2310);
                            if (!_0x55bfbb)
                                continue;
                            for (mode of _0x59713e['modules']) {
                                if (mode['name'] == _0x115abb) {
                                    console['log']('Running\x20' + _0x5aeedd['cyan'](mode['name'])), await mode['function'](mode, [_0x458087[_0x21b58e]], _0x11c07a);
                                    var _0x207c78 = _0x2b4432['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x33b6f0['writeFileSync']('../failed-tasks.csv', _0x207c78);
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
                    var _0x34ac9e = await _0x49c478['get']('Answer');
                    if (_0x34ac9e['Answer']['toLowerCase']() == 'y') {
                        _0x33b6f0['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x1aa4bf(0x3e8);
                        return;
                    }
                    if (_0x34ac9e['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x1aa4bf(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x1aa4bf(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1c5d7d(_0x150da2) {
    var _0x4023ad = await _0x2976a9(), _0x186159 = _0x33b6f0['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xa5f8fc = _0x5c5d12['parse'](_0x186159, { 'header': !![] })['data'];
    for (var _0x935a8d = 0x0; _0x935a8d < _0xa5f8fc['length']; _0x935a8d++) {
        var _0x2d4ff3 = _0xa5f8fc[_0x935a8d]['Store'], _0x1c34c1 = _0xa5f8fc[_0x935a8d]['Mode'];
        for (var _0x5a8490 of _0x2613f8) {
            const _0x420aa1 = _0x5a8490['name']['includes'](_0x2d4ff3);
            if (_0x420aa1)
                for (mode of _0x2613f8[_0x5a8490]['modules']) {
                    const _0x3b925e = mode['name']['includes'](_0x1c34c1);
                    _0x3b925e && (_0x150da2 = mode['name'], await mode['function'](_0x150da2, _0xa5f8fc[_0x935a8d], _0x4023ad));
                }
        }
    }
}
async function _0x20d728() {
    await _0x5c968f(), console['clear']();
    if (_0x2ee773 != 'devkey') {
        let _0x50af98 = await _0x5e1fff['autoUpdate']();
        if (_0x50af98 === 'yes')
            return _0x296786('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x294a02 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1aa4bf(0x2710);
        ;
    }
    await _0x2cd380(_0x294a02);
    if (_0x1fadeb === ![])
        return console['log']('Closing\x20Browser'), await _0x1aa4bf(0xbb8);
    else
        try {
            var _0x5304c5 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x50ab9a
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2ee773
                    }
                ]
            }];
            const _0x482d1f = { 'embeds': _0x5304c5 };
            var _0x49010e = await _0xa054f1(null, null, 'open', ![]);
            const _0x4b07c5 = { 'openDEVMSG': { 'embeds': [_0x49010e] } };
            await _0xdef3ae(_0x4b5baa, _0x4b07c5['openDEVMSG']);
            async function _0x4eeeb8() {
                _0x5ed37a('JRaffles\x20' + _0x2ee773), console['clear'](), console['log']('Welcome\x20' + _0x5aeedd['cyan']('' + _0x50ab9a)), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1cfdb5 = 0x0; _0x1cfdb5 < _0x2613f8['length'] - 0x4; _0x1cfdb5++) {
                    if (_0x1cfdb5 >= 0xa) {
                        console['log']('\x20(' + _0x1cfdb5 + ')\x20[' + _0x2613f8[_0x1cfdb5]['name'] + ']');
                        continue;
                    }
                    if (_0x2613f8[_0x1cfdb5]['name'] === 'Reload\x20Settings' || _0x2613f8[_0x1cfdb5]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1cfdb5 + ')\x20\x20[' + _0x2613f8[_0x1cfdb5]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2613f8['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2613f8['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2613f8['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2613f8['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3b2667();
                if (taskModule > _0x2613f8['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1aa4bf(0x3e8), _0x4eeeb8();
                if (_0x2613f8[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x36fa31 = await _0x2976a9();
                            await _0x292e3f['function'](_0x292e3f, _0x36fa31);
                        }
                        if (taskFunction == 0x2) {
                            var _0x36fa31 = await _0x2976a9(), _0x143d6a = await _0x1fbd21();
                            _0x240058['shuffleTasks'] && await _0x4c15af(_0x143d6a), await _0x292e3f['function'](_0x292e3f, _0x143d6a, _0x36fa31);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x36fa31 = await _0x2976a9(), _0x143d6a = await _0x1fbd21();
                                _0x240058['shuffleTasks'] && await _0x4c15af(_0x143d6a), await _0x292e3f['function'](_0x292e3f, _0x143d6a, _0x36fa31);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x36fa31 = await _0x2976a9();
                                    await _0x292e3f['function'](_0x292e3f, _0x36fa31);
                                }
                            }
                        }
                    } catch (_0x55da3c) {
                        console['log'](_0x55da3c), await _0x1aa4bf(0x7d0);
                    }
                    return _0x4eeeb8();
                }
                if (_0x2613f8[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                        var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x36fa31 = await _0x2976a9(), _0x2fb4ae = await _0x1fbd21();
                            _0x240058['shuffleTasks'] && await _0x4c15af(_0x2fb4ae), await _0x292e3f['function'](_0x292e3f, _0x2fb4ae, _0x36fa31);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x36fa31 = await _0x2976a9(), _0x2fb4ae = await _0x1fbd21();
                                _0x240058['shuffleTasks'] && await _0x4c15af(_0x2fb4ae), await _0x292e3f['function'](_0x292e3f, _0x2fb4ae, _0x36fa31);
                            }
                        }
                    } catch (_0x2afa98) {
                        console['log'](_0x2afa98), await _0x1aa4bf(0xfa0);
                    }
                    return _0x4eeeb8();
                }
                if (_0x2613f8[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x36fa31 = await _0x2976a9();
                        return await _0x292e3f['function'](_0x292e3f, _0x36fa31), _0x4eeeb8();
                    }
                    var _0x36fa31 = await _0x2976a9(), _0x519834 = await _0x1fbd21();
                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x519834), await _0x292e3f['function'](_0x292e3f, _0x519834, _0x36fa31), _0x4eeeb8();
                }
                if (_0x2613f8[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x36fa31 = await _0x2976a9(), _0x519834 = await _0x1fbd21();
                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x519834), await _0x292e3f['function'](_0x292e3f, _0x519834, _0x36fa31), _0x4eeeb8();
                }
                if (_0x2613f8[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x36fa31 = await _0x2976a9(), _0x519834 = await _0x1fbd21();
                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x519834), await _0x292e3f['function'](_0x292e3f, _0x519834, _0x36fa31), _0x4eeeb8();
                }
                if (_0x2613f8[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x36fa31 = await _0x2976a9(), _0x519834 = await _0x1fbd21();
                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x519834), await _0x292e3f['function'](_0x292e3f, _0x519834, _0x36fa31), _0x4eeeb8();
                } else {
                    if (_0x2613f8[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                        var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x36fa31 = await _0x2976a9(), _0x344a91 = await _0x1fbd21();
                            return _0x240058['shuffleTasks'] && await _0x4c15af(_0x344a91), await _0x292e3f['function'](_0x292e3f, _0x344a91, _0x36fa31), _0x4eeeb8();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x36fa31 = await _0x2976a9();
                                return await _0x292e3f['function'](_0x292e3f, null, _0x36fa31), _0x4eeeb8();
                            }
                        }
                        ;
                    } else {
                        if (_0x2613f8[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                            var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction], _0x36fa31 = await _0x2976a9(), _0x18c412 = await _0x1fbd21();
                            return _0x240058['shuffleTasks'] && await _0x4c15af(_0x18c412), await _0x292e3f['function'](_0x292e3f, _0x18c412, _0x36fa31), await _0x1aa4bf(0x1388), _0x4eeeb8();
                        } else {
                            if (_0x2613f8[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x36fa31 = await _0x2976a9(), _0x344a91 = await _0x1fbd21();
                                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x344a91), await _0x292e3f['function'](_0x292e3f, _0x344a91, _0x36fa31), _0x4eeeb8();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x36fa31 = await _0x2976a9();
                                        return await _0x292e3f['function'](_0x292e3f, null, _0x36fa31), _0x4eeeb8();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2613f8[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x292e3f);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2613f8[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                        var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x36fa31 = await _0x2976a9(), _0x4ca064 = await _0x1fbd21();
                                            return _0x240058['shuffleTasks'] && await _0x4c15af(_0x4ca064), await _0x292e3f['function'](_0x292e3f, _0x4ca064, _0x36fa31), _0x4eeeb8();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x36fa31 = await _0x2976a9(), _0x4ca064 = await _0x1fbd21();
                                                return _0x240058['shuffleTasks'] && await _0x4c15af(_0x4ca064), await _0x292e3f['function'](_0x292e3f, _0x4ca064, _0x36fa31), _0x4eeeb8();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2613f8[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                            var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x36fa31 = await _0x2976a9(), _0x577b53 = await _0x1fbd21();
                                                return _0x240058['shuffleTasks'] && await _0x4c15af(_0x577b53), await _0x292e3f['function'](_0x292e3f, _0x577b53, _0x36fa31), _0x4eeeb8();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x36fa31 = await _0x2976a9(), _0x577b53 = await _0x1fbd21();
                                                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x577b53), await _0x292e3f['function'](_0x292e3f, _0x577b53, _0x36fa31), _0x4eeeb8();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2613f8[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                                var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x36fa31 = await _0x2976a9(), _0x4d22ad = await _0x1fbd21();
                                                    return _0x240058['shuffleTasks'] && await _0x4c15af(_0x4d22ad), await _0x292e3f['function'](_0x292e3f, _0x4d22ad, _0x36fa31), _0x4eeeb8();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x36fa31 = await _0x2976a9(), _0x4d22ad = await _0x1fbd21();
                                                        return _0x240058['shuffleTasks'] && await _0x4c15af(_0x4d22ad), await _0x292e3f['function'](_0x292e3f, _0x4d22ad, _0x36fa31), _0x4eeeb8();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2613f8[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                                    var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x36fa31 = await _0x2976a9(), _0x2890cb = await _0x1fbd21();
                                                        return _0x240058['shuffleTasks'] && await _0x4c15af(_0x2890cb), await _0x292e3f['function'](_0x292e3f, _0x2890cb, _0x36fa31), _0x4eeeb8();
                                                    }
                                                } else {
                                                    if (_0x2613f8[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x1aa4bf(0x3e8), _0x4eeeb8();
                                                    else {
                                                        if (_0x2613f8[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x33c1e9 = _0x2613f8[taskModule]['name'], _0x36fa31 = await _0x2976a9();
                                                            return await _0x457ae3(_0x33c1e9, _0x36fa31), _0x4eeeb8();
                                                        } else {
                                                            if (_0x2613f8[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x4fd3f3(_0x2613f8[taskModule]['modules']);
                                                                var _0x292e3f = _0x2613f8[taskModule]['modules'][taskFunction];
                                                                return await _0x292e3f['function'](_0x292e3f), _0x4eeeb8();
                                                            } else {
                                                                if (_0x2613f8[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x11074f = 0x0;
                                                                    for (const _0x27358e in _0x240058) {
                                                                        console['log']('(' + _0x11074f + ')\x20' + _0x27358e + '\x20:\x20' + _0x240058[_0x27358e]), _0x11074f++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x11074f + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x33cce5 = await _0x1f0172();
                                                                    if (_0x33cce5 == _0x11074f)
                                                                        return _0x4eeeb8();
                                                                    console['clear'];
                                                                    var _0x498f8e = 0x0;
                                                                    for (var _0x4b6db8 in _0x240058) {
                                                                        if (_0x33cce5 == _0x498f8e) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4b6db8 + '\x20:'), _0x240058[_0x4b6db8] = await _0x39187d(), _0x33b6f0['writeFileSync']('../settings.json', JSON['stringify'](_0x240058));
                                                                            break;
                                                                        } else
                                                                            _0x498f8e++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0x1aa4bf(0xbb8), _0x4eeeb8();
                                                                } else {
                                                                    if (_0x2613f8[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x5c968f(), _0x4eeeb8();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x2613f8[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x4ce95c = await _0x2ea832();
                                                                            _0x4ce95c == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0xd525b0(), await afewFunction(_0x5d9290[_0x4852fb], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1aa4bf(0xbb8));
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
                await _0x4eeeb8();
            } catch (_0xb0c6e2) {
                return console['log'](_0xb0c6e2), _0x4eeeb8();
            }
        } catch (_0x35f6e6) {
            return console['log'](_0x35f6e6), await _0x1aa4bf(0x3a98);
        }
}
;
_0x5ed37a('JRaffles\x20' + _0x2ee773), _0x5c968f();
try {
    _0x20d728();
} catch (_0x54d1e6) {
    var _0x5f42bb = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x50ab9a
            },
            {
                'name': 'Version',
                'value': '' + _0x2ee773
            },
            {
                'name': 'Error',
                'value': '' + _0x54d1e6
            }
        ]
    }];
    const _0x5f5f6c = { 'embeds': _0x5f42bb };
    _0xdef3ae(_0x1170d2, _0x5f5f6c);
}